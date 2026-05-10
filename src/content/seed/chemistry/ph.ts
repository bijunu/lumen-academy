import type { SkillNode, Zone } from '@/types/content'

export const phScale: SkillNode = {
  id: 'chemistry-ph-scale',
  title: 'The pH Scale',
  description:
    'Use the pH scale 0 to 14 to put a number on how acidic or alkaline a solution is. Read a numeric pH from the colour of universal indicator: pH 7 is exactly neutral, below 7 is acidic, above 7 is alkaline. Anchor real UK substances on the scale: stomach acid pH 1, vinegar pH 3, milk pH 6.5, pure water pH 7, soap pH 9 to 10, oven cleaner pH 13 to 14.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-ph',
  zoneName: 'pH',
  tier: 'core',
  prerequisites: ['chemistry-acids-alkalis-common'],
  curriculum: {
    ks3Objective:
      'The pH scale for measuring acidity / alkalinity; and indicators; reactions of acids with alkalis to produce a salt plus water.',
    awardingBodies: {
      aqa: '4.4.2.1 The pH scale and neutralisation; 4.4.2.2 Strong and weak acids (GCSE Chemistry 8462)',
      edexcel:
        'Topic 3.6 Indicators and the pH scale; 3.7 Acidity, alkalinity and the pH scale (GCSE Chemistry 1CH0)',
      ocr: 'C3.1b The pH scale; indicators (GCSE Chemistry A J248 Gateway)',
    },
  },
  scenes: [
    {
      id: 'phs-scene-scale',
      title: 'The pH Scale: From 0 to 14',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the scale to see what each pH band means and read a real UK substance pinned at that point.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="20" y="60" width="20" height="40" fill="#DC2626"/><rect x="40" y="60" width="20" height="40" fill="#EA580C"/><rect x="60" y="60" width="20" height="40" fill="#F97316"/><rect x="80" y="60" width="20" height="40" fill="#FB923C"/><rect x="100" y="60" width="20" height="40" fill="#FACC15"/><rect x="120" y="60" width="20" height="40" fill="#FDE047"/><rect x="140" y="60" width="20" height="40" fill="#BEF264"/><rect x="160" y="60" width="20" height="40" fill="#22C55E"/><rect x="180" y="60" width="20" height="40" fill="#34D399"/><rect x="200" y="60" width="20" height="40" fill="#22D3EE"/><rect x="220" y="60" width="20" height="40" fill="#3B82F6"/><rect x="240" y="60" width="20" height="40" fill="#6366F1"/><rect x="260" y="60" width="20" height="40" fill="#8B5CF6"/><rect x="280" y="60" width="20" height="40" fill="#7C3AED"/><rect x="300" y="60" width="10" height="40" fill="#5B21B6"/></g><g font-size="9" font-weight="600" fill="#1E3A8A" text-anchor="middle"><text x="30" y="115">0</text><text x="50" y="115">1</text><text x="70" y="115">2</text><text x="90" y="115">3</text><text x="110" y="115">4</text><text x="130" y="115">5</text><text x="150" y="115">6</text><text x="170" y="115">7</text><text x="190" y="115">8</text><text x="210" y="115">9</text><text x="230" y="115">10</text><text x="250" y="115">11</text><text x="270" y="115">12</text><text x="290" y="115">13</text><text x="305" y="115">14</text></g><g><text x="80" y="40" text-anchor="middle" font-size="11" font-weight="600" fill="#7C2D12">ACIDIC</text><text x="170" y="40" text-anchor="middle" font-size="11" font-weight="600" fill="#14532D">NEUTRAL</text><text x="260" y="40" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">ALKALINE</text></g><g font-size="8" fill="#1E3A8A"><text x="30" y="140" text-anchor="middle">stomach</text><text x="30" y="150" text-anchor="middle">acid</text><text x="90" y="140" text-anchor="middle">vinegar</text><text x="150" y="140" text-anchor="middle">milk</text><text x="170" y="140" text-anchor="middle" font-weight="600">water</text><text x="210" y="140" text-anchor="middle">soap</text><text x="290" y="140" text-anchor="middle">oven</text><text x="290" y="150" text-anchor="middle">cleaner</text></g><g><line x1="30" y1="125" x2="30" y2="135" stroke="#7C2D12" stroke-width="0.8"/><line x1="90" y1="125" x2="90" y2="135" stroke="#7C2D12" stroke-width="0.8"/><line x1="150" y1="125" x2="150" y2="135" stroke="#475569" stroke-width="0.8"/><line x1="170" y1="125" x2="170" y2="135" stroke="#14532D" stroke-width="1"/><line x1="210" y1="125" x2="210" y2="135" stroke="#1E3A8A" stroke-width="0.8"/><line x1="290" y1="125" x2="290" y2="135" stroke="#1E3A8A" stroke-width="0.8"/></g><g font-size="8" fill="#1E3A8A"><text x="160" y="180" text-anchor="middle">Universal indicator turns red / orange / yellow in acid,</text><text x="160" y="194" text-anchor="middle">green at neutral, and blue / purple in alkali.</text><text x="160" y="208" text-anchor="middle">The scale runs from 0 (most acidic) to 14 (most alkaline).</text></g></svg>',
        hotspots: [
          {
            id: 'phs-h-acid',
            x: 25,
            y: 30,
            label: 'Acidic side (pH 0 to 6)',
            description:
              'Solutions with pH below 7 are acidic. The further below 7, the stronger the acid. Stomach acid (pH 1 to 2), vinegar (pH 3) and lemon juice (pH 2 to 3) all sit on this side.',
          },
          {
            id: 'phs-h-neutral',
            x: 53,
            y: 30,
            label: 'Neutral (pH 7)',
            description:
              'Pure water has pH 7 exactly. Universal indicator turns green at this point. A neutral solution is neither acidic nor alkaline.',
          },
          {
            id: 'phs-h-alkali',
            x: 80,
            y: 30,
            label: 'Alkaline side (pH 8 to 14)',
            description:
              'Solutions with pH above 7 are alkaline. The further above 7, the stronger the alkali. Soap (pH 9 to 10) and oven cleaner (sodium hydroxide, pH 13 to 14) sit on this side.',
          },
          {
            id: 'phs-h-stomach',
            x: 9,
            y: 65,
            label: 'Stomach acid: pH 1',
            description:
              'The hydrochloric acid the human stomach makes is one of the most acidic everyday substances. The stomach lining is built to cope with it.',
          },
          {
            id: 'phs-h-vinegar',
            x: 28,
            y: 65,
            label: 'White vinegar: pH 3',
            description:
              'Vinegar holds ethanoic acid (also called acetic acid) and is mildly acidic. Universal indicator turns orange in vinegar.',
          },
          {
            id: 'phs-h-milk',
            x: 47,
            y: 65,
            label: 'Milk: pH 6.5',
            description:
              'Milk is just on the acid side of neutral. Universal indicator turns a yellow-green colour in fresh milk.',
          },
          {
            id: 'phs-h-water',
            x: 53,
            y: 65,
            label: 'Pure water: pH 7',
            description:
              'Pure distilled water sits at the centre of the scale. Universal indicator turns green and the solution is neither acidic nor alkaline.',
          },
          {
            id: 'phs-h-soap',
            x: 66,
            y: 65,
            label: 'Soap solution: pH 9 to 10',
            description:
              'A bar of bath soap mixed in water is mildly alkaline. Universal indicator turns blue.',
          },
          {
            id: 'phs-h-oven',
            x: 91,
            y: 65,
            label: 'Oven cleaner: pH 13 to 14',
            description:
              'Oven cleaner is a sodium hydroxide solution and is very strongly alkaline. School lab bottles of NaOH carry the same warning labels.',
          },
        ],
      },
    },
    {
      id: 'phs-scene-indicator',
      title: 'Reading the Colour: Universal Indicator to a Number',
      type: 'labelled-diagram',
      instructions:
        'Click each band on the universal indicator chart to read off the colour, the pH number, and the kind of solution it stands for.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="40" y="40" width="40" height="40" fill="#DC2626" stroke="#1E3A8A" stroke-width="0.8"/><rect x="40" y="80" width="40" height="40" fill="#F97316" stroke="#1E3A8A" stroke-width="0.8"/><rect x="40" y="120" width="40" height="40" fill="#FACC15" stroke="#1E3A8A" stroke-width="0.8"/></g><g><rect x="140" y="40" width="40" height="120" fill="#22C55E" stroke="#1E3A8A" stroke-width="0.8"/></g><g><rect x="240" y="40" width="40" height="40" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.8"/><rect x="240" y="80" width="40" height="40" fill="#6366F1" stroke="#1E3A8A" stroke-width="0.8"/><rect x="240" y="120" width="40" height="40" fill="#7C3AED" stroke="#1E3A8A" stroke-width="0.8"/></g><g font-size="8" fill="#FFFFFF" text-anchor="middle" font-weight="600"><text x="60" y="64">red</text><text x="60" y="68">pH 0-2</text><text x="60" y="104">orange</text><text x="60" y="108">pH 3-4</text><text x="60" y="144">yellow</text><text x="60" y="148">pH 5-6</text><text x="160" y="98">green</text><text x="160" y="108">pH 7</text><text x="260" y="64">blue</text><text x="260" y="68">pH 8-10</text><text x="260" y="104">indigo</text><text x="260" y="108">pH 11-12</text><text x="260" y="144">purple</text><text x="260" y="148">pH 13-14</text></g><g font-size="9" fill="#1E3A8A" text-anchor="middle"><text x="60" y="180" font-weight="600">ACID</text><text x="60" y="194">strong  weak</text><text x="160" y="180" font-weight="600">NEUTRAL</text><text x="260" y="180" font-weight="600">ALKALI</text><text x="260" y="194">weak  strong</text></g></svg>',
        hotspots: [
          {
            id: 'phs-h-red',
            x: 19,
            y: 27,
            label: 'Red: pH 0 to 2 (strong acid)',
            description:
              'A red colour means a strong acid. Hydrochloric acid in the school lab and stomach acid both reach this end of the scale.',
          },
          {
            id: 'phs-h-orange',
            x: 19,
            y: 45,
            label: 'Orange: pH 3 to 4 (weak acid)',
            description:
              'Orange means a weak or dilute acid. Vinegar and lemon juice land here.',
          },
          {
            id: 'phs-h-yellow',
            x: 19,
            y: 64,
            label: 'Yellow: pH 5 to 6 (very weak acid)',
            description:
              'A yellow tint means a very weak or very dilute acid. Black tea, tomato juice and rainwater fall in this band.',
          },
          {
            id: 'phs-h-green',
            x: 50,
            y: 45,
            label: 'Green: pH 7 (neutral)',
            description:
              'A clear green means neutral. Pure distilled water gives this colour exactly. Tap water is usually very close.',
          },
          {
            id: 'phs-h-blue',
            x: 81,
            y: 27,
            label: 'Blue: pH 8 to 10 (weak alkali)',
            description:
              'Blue means a weak or dilute alkali. Soap solution, baking-soda solution and washing-up liquid fall here.',
          },
          {
            id: 'phs-h-indigo',
            x: 81,
            y: 45,
            label: 'Indigo: pH 11 to 12 (alkali)',
            description:
              'A deeper blue or indigo means a stronger alkali. Household ammonia solution sits in this band.',
          },
          {
            id: 'phs-h-purple',
            x: 81,
            y: 64,
            label: 'Purple: pH 13 to 14 (strong alkali)',
            description:
              'Purple means a strong alkali. Sodium hydroxide solution (oven cleaner) reaches this end of the scale.',
          },
        ],
      },
    },
    {
      id: 'phs-scene-anchors',
      title: 'Three UK Substances Anchor the Scale',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how three everyday UK substances pin different parts of the pH scale.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="30" width="90" height="170" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="60" y="50" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">VINEGAR</text><text x="60" y="68" text-anchor="middle" font-size="9" fill="#7C2D12">pH 3</text><text x="60" y="90" text-anchor="middle" font-size="8" fill="#7C2D12">ethanoic acid</text><text x="60" y="105" text-anchor="middle" font-size="8" fill="#7C2D12">in water</text><circle cx="60" cy="135" r="20" fill="#FB923C" stroke="#7C2D12"/><text x="60" y="139" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">orange</text><text x="60" y="180" text-anchor="middle" font-size="8" fill="#7C2D12">UK kitchen</text><text x="60" y="192" text-anchor="middle" font-size="8" fill="#7C2D12">cupboard</text></g><g><rect x="115" y="30" width="90" height="170" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1"/><text x="160" y="50" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">PURE WATER</text><text x="160" y="68" text-anchor="middle" font-size="9" fill="#14532D">pH 7</text><text x="160" y="90" text-anchor="middle" font-size="8" fill="#14532D">distilled water</text><text x="160" y="105" text-anchor="middle" font-size="8" fill="#14532D">in beaker</text><circle cx="160" cy="135" r="20" fill="#22C55E" stroke="#14532D"/><text x="160" y="139" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">green</text><text x="160" y="180" text-anchor="middle" font-size="8" fill="#14532D">school lab</text><text x="160" y="192" text-anchor="middle" font-size="8" fill="#14532D">deionised tap</text></g><g><rect x="215" y="30" width="90" height="170" rx="4" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="260" y="50" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">OVEN CLEANER</text><text x="260" y="68" text-anchor="middle" font-size="9" fill="#1E3A8A">pH 13</text><text x="260" y="90" text-anchor="middle" font-size="8" fill="#1E3A8A">sodium hydroxide</text><text x="260" y="105" text-anchor="middle" font-size="8" fill="#1E3A8A">(NaOH) in water</text><circle cx="260" cy="135" r="20" fill="#7C3AED" stroke="#1E3A8A"/><text x="260" y="139" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">purple</text><text x="260" y="180" text-anchor="middle" font-size="8" fill="#1E3A8A">UK kitchen</text><text x="260" y="192" text-anchor="middle" font-size="8" fill="#1E3A8A">cleaning shelf</text></g></svg>',
        hotspots: [
          {
            id: 'phs-h-vin-anchor',
            x: 19,
            y: 60,
            label: 'Vinegar (pH 3)',
            description:
              'White vinegar from a UK kitchen cupboard is a weak acid. Universal indicator turns it orange. Diluted further, it tips toward yellow.',
          },
          {
            id: 'phs-h-water-anchor',
            x: 50,
            y: 60,
            label: 'Pure water (pH 7)',
            description:
              'Distilled water in a school lab beaker is exactly neutral. Universal indicator turns clear green. Tap water is usually within one pH unit of this.',
          },
          {
            id: 'phs-h-oven-anchor',
            x: 81,
            y: 60,
            label: 'Oven cleaner (pH 13)',
            description:
              'A sodium hydroxide solution from a UK kitchen cleaning shelf is a strong alkali. Universal indicator turns it deep purple. Same chemical as the school NaOH bottle.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'phs-worked-1',
      title: 'Reading a pH from a universal indicator colour',
      steps: [
        {
          explanation:
            'Question: A pupil drops universal indicator into a beaker of fizzy lemonade. The indicator turns yellow. Roughly what is the pH of the lemonade?',
        },
        {
          explanation:
            'Step 1: read the colour. Yellow falls in the band between pH 5 and pH 6 on the standard universal-indicator chart.',
        },
        {
          explanation:
            'Step 2: decide acid, neutral or alkaline. Yellow sits below the green band, so the lemonade is on the acidic side of pH 7.',
        },
        {
          explanation:
            'Step 3: read off the number. Yellow stands for roughly pH 5 to 6. So the lemonade has a pH of about 5.',
          maths: 'colour yellow → pH ≈ 5 (weak acid)',
        },
        {
          explanation:
            'So the pupil writes pH ≈ 5. This makes sense: lemonade is a weak food acid (carbonic acid from CO₂ plus citric acid), and weak food acids read as orange or yellow.',
        },
      ],
    },
    {
      id: 'phs-worked-2',
      title: 'Pinning three UK substances on the pH scale',
      steps: [
        {
          explanation:
            'Question: A teacher hands a pupil three labelled bottles: stomach-acid model (HCl), pure distilled water, and oven cleaner (NaOH). For each one, predict the pH and the universal-indicator colour.',
        },
        {
          explanation:
            'Step 1: stomach-acid model. The stomach makes hydrochloric acid at pH 1 to 2. So the school-lab HCl bottle is at pH 1 (strong acid). Universal indicator turns red.',
        },
        {
          explanation:
            'Step 2: pure distilled water. Pure water is exactly neutral.',
        },
        {
          explanation:
            'Step 3: read off the pH and colour for water. pH 7. Universal indicator turns clear green.',
          maths: 'pure water → pH 7 → green',
        },
        {
          explanation:
            'Step 4: oven cleaner. Sodium hydroxide solution is a strong alkali at pH 13 to 14. Universal indicator turns deep purple.',
        },
        {
          explanation:
            'So the predictions are HCl pH 1 (red), water pH 7 (green), NaOH pH 13 (purple). Three real UK substances pinning the bottom, middle and top of the scale.',
        },
      ],
    },
  ],
  questions: [
    // 9 multiple-choice
    {
      id: 'phs-q1',
      type: 'multiple-choice',
      stem: 'On the pH scale, which value means a solution is exactly neutral?',
      tier: 'core',
      options: ['pH 0', 'pH 7', 'pH 10', 'pH 14'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'phs-q2',
      type: 'multiple-choice',
      stem: 'Universal indicator turns RED in a solution. What does this tell you about the pH?',
      tier: 'core',
      options: [
        'pH 7 (neutral)',
        'pH 11 to 12 (alkali)',
        'pH 0 to 2 (strong acid)',
        'pH 5 to 6 (very weak acid)',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'phs-mis-colour-reverse',
    },
    {
      id: 'phs-q3',
      type: 'multiple-choice',
      stem: 'Universal indicator turns DEEP PURPLE in a solution. What does this tell you about the pH?',
      tier: 'core',
      options: [
        'pH 13 to 14 (strong alkali)',
        'pH 0 to 1 (strong acid)',
        'pH 7 (neutral)',
        'pH 5 to 6 (very weak acid)',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'phs-q4',
      type: 'multiple-choice',
      stem: 'Which of these UK substances is the MOST acidic?',
      tier: 'core',
      options: [
        'Pure water (pH 7)',
        'Soap solution (pH 9)',
        'Stomach acid (pH 1)',
        'Milk (pH 6.5)',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'phs-q5',
      type: 'multiple-choice',
      stem: 'Which of these UK substances is the MOST alkaline?',
      tier: 'core',
      options: [
        'Vinegar (pH 3)',
        'Oven cleaner (pH 13)',
        'Soap solution (pH 9)',
        'Pure water (pH 7)',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'phs-q6',
      type: 'multiple-choice',
      stem: 'A pupil tests black coffee with universal indicator and the colour turns yellow. Roughly what is the pH of the coffee?',
      tier: 'confident',
      options: [
        'About pH 7 (neutral)',
        'About pH 13 (strong alkali)',
        'About pH 5 (weak acid)',
        'About pH 1 (strong acid)',
      ],
      correctIndex: 2,
      xpValue: 15,
    },
    {
      id: 'phs-q7',
      type: 'multiple-choice',
      stem: 'A pupil reads pH 11 from the colour chart. What kind of substance is this most likely to be?',
      tier: 'confident',
      options: [
        'A weak acid (e.g. vinegar)',
        'A weak alkali (e.g. household ammonia solution)',
        'A neutral substance (e.g. pure water)',
        'A strong acid (e.g. lab hydrochloric acid)',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'phs-mis-low-acid',
    },
    {
      id: 'phs-q8',
      type: 'multiple-choice',
      stem: 'Sam claims: "Some really strong acids have a pH of -3 or so." For Year 7 chemistry, which of these is the best response?',
      tier: 'confident',
      options: [
        'Sam is right; the pH scale runs from -10 to +20',
        'For Year 7 we use the pH scale from 0 to 14; pH -3 is below the everyday scale we work with',
        'Sam is right; pH -3 is the standard pH of stomach acid',
        'Sam is wrong; the pH of every acid is exactly 0',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'phs-mis-scale-bounds',
    },
    {
      id: 'phs-q9',
      type: 'multiple-choice',
      stem: 'A school technician in Manchester drops universal indicator into a beaker of tap water. The colour goes a clear green, just as expected for pure water. What does this tell you about the tap water?',
      tier: 'challenge',
      options: [
        'The tap water is a strong acid',
        'The tap water is a strong alkali at pH 13',
        'The tap water is a mixture of acid and alkali in equal amounts that have not yet reacted',
        'The tap water is very close to neutral, with a pH near 7',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
    // 4 numeric-entry
    {
      id: 'phs-q10',
      type: 'numeric-entry',
      stem: 'On the standard pH scale used at Year 7, what is the pH of pure water?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
    },
    {
      id: 'phs-q11',
      type: 'numeric-entry',
      stem: 'On the standard pH scale, what is the highest possible pH (the most alkaline end of the scale)?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
    },
    {
      id: 'phs-q12',
      type: 'numeric-entry',
      stem: 'A bottle of white vinegar from a UK supermarket is labelled "ethanoic acid in water". The teacher reads the pH as 3. How many pH units below neutral is this vinegar?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'Pure water (neutral) is pH 7. Subtract the vinegar pH from 7.',
    },
    {
      id: 'phs-q13',
      type: 'numeric-entry',
      stem: 'Universal indicator turns deep purple in a solution. Take the lower edge of that band on the universal-indicator chart. What is the lowest pH value at which the colour deep purple is read?',
      tier: 'challenge',
      correctAnswer: 13,
      xpValue: 25,
      misconceptionId: 'phs-mis-exact-number',
    },
    // 1 slider-explore (pH is continuous)
    {
      id: 'phs-q14',
      type: 'slider-explore',
      stem: 'Move the slider to the pH of vinegar (about pH 3) on the standard pH scale.',
      tier: 'confident',
      min: 0,
      max: 14,
      step: 1,
      correctRange: [2, 4],
      label: 'pH',
      xpValue: 15,
      misconceptionId: 'phs-mis-dilute-stronger',
    },
    // 1 drag-order
    {
      id: 'phs-q15',
      type: 'drag-order',
      stem: 'Place these UK substances in order from MOST acidic to MOST alkaline.',
      tier: 'challenge',
      items: [
        'Soap solution (pH 9)',
        'Stomach acid (pH 1)',
        'Pure water (pH 7)',
        'Oven cleaner (pH 13)',
        'Vinegar (pH 3)',
      ],
      correctOrder: [1, 4, 2, 0, 3],
      xpValue: 25,
    },
    // 2 spot-misconception
    {
      id: 'phs-q16',
      type: 'spot-misconception',
      stem: 'Olu says: "Acids turn universal indicator blue and alkalis turn it red." Is Olu right?',
      tier: 'core',
      statements: [
        {
          text: 'Olu is right. Acids turn universal indicator blue and alkalis turn it red.',
          isMisconception: true,
        },
        {
          text: 'Olu has the colours the wrong way round. Acids turn universal indicator red, orange or yellow; alkalis turn it blue, indigo or purple. Pure water (neutral) turns it green.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'phs-mis-colour-reverse',
    },
    {
      id: 'phs-q17',
      type: 'spot-misconception',
      stem: 'Priya argues: "If pure water is neutral and has pH 7, then anything below pH 7 cannot really be a substance, because pH 0 means there is no acid at all." Is Priya right?',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. pH 0 means the solution is empty of acid, so the lowest real pH any substance has must be 7.',
          isMisconception: true,
        },
        {
          text: 'Priya has it backwards. pH 0 is the strongest acid end of the scale, not the absence of acid. School lab hydrochloric acid is around pH 0 to 1; it is full of acid, not empty.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'phs-mis-zero-empty',
    },
    // 1 free-text
    {
      id: 'phs-q18',
      type: 'free-text',
      stem: 'In 2 to 3 sentences, explain how a pupil could find the pH of a sample of orange juice using universal indicator. Mention the colour they should look for and the rough pH they would expect.',
      tier: 'confident',
      sampleAnswer:
        'They put a few drops of universal indicator into a sample of orange juice and look at the colour. Orange juice is a weak food acid (it contains citric acid), so the indicator should turn orange or yellow. Reading the colour against the universal-indicator chart gives a pH of about 3 to 4.',
      keywords: ['indicator', 'colour', 'acid', 'pH'],
      xpValue: 20,
    },
    // 1 missing-step
    {
      id: 'phs-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of testing milk with universal indicator.',
      tier: 'confident',
      steps: [
        'A pupil pours a small sample of fresh milk into a clean test tube',
        'They add three drops of universal indicator to the milk and gently swirl the tube',
        null,
        'They compare the colour with the standard universal-indicator chart on the wall',
        'They read off pH ≈ 6.5, which is just on the acid side of neutral',
      ],
      missingStepIndex: 2,
      correctStep:
        'They wait a few seconds for the indicator to settle into a steady yellow-green colour throughout the milk',
      xpValue: 20,
    },
    // 1 labelled-image
    {
      id: 'phs-q20',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the pH scale.',
      tier: 'confident',
      viewBox: '0 0 320 160',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#F8FAFC"/><g><rect x="20" y="60" width="20" height="40" fill="#DC2626"/><rect x="40" y="60" width="20" height="40" fill="#EA580C"/><rect x="60" y="60" width="20" height="40" fill="#F97316"/><rect x="80" y="60" width="20" height="40" fill="#FB923C"/><rect x="100" y="60" width="20" height="40" fill="#FACC15"/><rect x="120" y="60" width="20" height="40" fill="#FDE047"/><rect x="140" y="60" width="20" height="40" fill="#BEF264"/><rect x="160" y="60" width="20" height="40" fill="#22C55E"/><rect x="180" y="60" width="20" height="40" fill="#34D399"/><rect x="200" y="60" width="20" height="40" fill="#22D3EE"/><rect x="220" y="60" width="20" height="40" fill="#3B82F6"/><rect x="240" y="60" width="20" height="40" fill="#6366F1"/><rect x="260" y="60" width="20" height="40" fill="#8B5CF6"/><rect x="280" y="60" width="20" height="40" fill="#7C3AED"/><rect x="300" y="60" width="10" height="40" fill="#5B21B6"/></g><g font-size="9" font-weight="600" fill="#1E3A8A" text-anchor="middle"><text x="30" y="115">0</text><text x="170" y="115">7</text><text x="305" y="115">14</text></g></svg>',
      hotspots: [
        { id: 'phs-q20-h1', x: 25, y: 28, correctLabel: 'Acidic' },
        { id: 'phs-q20-h2', x: 53, y: 28, correctLabel: 'Neutral' },
        { id: 'phs-q20-h3', x: 80, y: 28, correctLabel: 'Alkaline' },
      ],
      labels: ['Acidic', 'Neutral', 'Alkaline', 'Solid', 'Element'],
      xpValue: 20,
    },
    // 1 challenge MCQ
    {
      id: 'phs-q21',
      type: 'multiple-choice',
      stem: 'A teacher in Sevenoaks gives four labelled samples to a pupil: stomach acid (pH 1), milk (pH 6.5), pure water (pH 7) and oven cleaner (pH 13). The pupil mixes equal volumes of stomach acid and oven cleaner in a beaker and tests the result with universal indicator. What pH would they MOST LIKELY read?',
      tier: 'challenge',
      options: [
        'pH 14 because the alkali always wins',
        'pH 0 because the acid always wins',
        'About pH 7 because the strong acid and strong alkali roughly cancel out (neutralisation)',
        'A negative pH because the two extreme substances combine',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on indicators: candidates "swapped the indicator colours, marking acidic solutions as blue or purple and alkaline ones as red." Reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box on universal indicator and the pH scale.
    {
      id: 'phs-mis-colour-reverse',
      description:
        'Acids turn universal indicator blue or purple, and alkalis turn it red.',
      triggerAnswer: 'colour-reverse',
      correction:
        'In fact acids turn the indicator red, orange or yellow, and alkalis turn it blue, indigo or purple. Pure water (neutral) turns it green.',
      reExplanation:
        'Picture a rainbow strip. The hot colours red, orange and yellow live on the acid end. The cool colours blue, indigo and purple live on the alkali end. Green sits in the middle for neutral water. Lemon juice (acid) drops to red and oven cleaner (alkali) climbs to purple. The colour family tells you the substance family.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the pH scale. Year 7 learners often think low pH numbers are not really acids ("low means a small amount"). Reinforced by RSC Education article "Common student misconceptions about acids and bases" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'phs-mis-low-acid',
      description:
        'A low pH number means a small amount of acid; the lower the number, the less acid is in the solution.',
      triggerAnswer: 'low-acid',
      correction:
        'In fact a low pH number means a stronger acid, not a smaller amount. pH 1 is more acidic than pH 4; the smaller the pH, the more acidic the solution.',
      reExplanation:
        'The pH scale runs the opposite way to a "more is bigger" line. The most acidic substances sit near pH 0; the most alkaline near pH 14. So school lab hydrochloric acid at pH 1 is much more acidic than vinegar at pH 3, even though 1 is the smaller number. Reading down the pH scale toward 0 means more acid, not less.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q06 on the pH scale: candidates "wrote that pH below 7 means there is no substance present" and "marked pH 0 as the empty end of the scale". Reinforced by CGP KS3 Chemistry Study Book p.62 chapter on acids and the pH scale.
    {
      id: 'phs-mis-zero-empty',
      description:
        'A pH of 0 means a solution has no acid in it, in the same way that 0 cm means no length.',
      triggerAnswer: 'zero-empty',
      correction:
        'In fact pH 0 is the most acidic end of the everyday pH scale, not the empty end. Strong school-lab acids like dilute hydrochloric acid sit at pH 0 to 1.',
      reExplanation:
        'pH is not a count of acid particles like a length is a count of centimetres. pH 0 marks the strong-acid end of the standard 0 to 14 pH scale; it does not mean "zero acid". A bottle of dilute hydrochloric acid in a school chemistry lab reads near pH 0 to 1 and is full of acid. Pure water sits in the middle at pH 7.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q08 on the pH scale: candidates "extended the everyday pH scale below 0 and above 14 in their answers", missing the at-Y7 convention that pH runs 0 to 14. Reinforced by CGP KS3 Chemistry Study Book p.62 chapter on acids and the pH scale.
    {
      id: 'phs-mis-scale-bounds',
      description:
        'The everyday pH scale taught at Year 7 runs from any negative number up to any number above 14.',
      triggerAnswer: 'scale-bounds',
      correction:
        'In fact the standard pH scale used at Year 7 runs from 0 to 14. Higher and lower readings exist in advanced chemistry, but the everyday scale stops at the two ends.',
      reExplanation:
        'A universal-indicator chart shows seven colour bands running from pH 0 (red) up to pH 14 (deep purple). Year 7 work stays inside that range. School-lab strong acids read close to pH 0 and school-lab strong alkalis read close to pH 14. Wider scales appear at A-level, but the 0 to 14 range covers every substance you meet in Year 7.',
    },
    // Source: BEST UCL/STEM Learning diagnostic question sets on neutralisation: a recurring Year 7 expectation is that "vinegar plus water lowers the pH" (i.e., dilution makes vinegar more acidic). Reinforced by RSC Education article "Common student misconceptions about acids and bases" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'phs-mis-dilute-stronger',
      description:
        'Adding water to vinegar makes the vinegar more acidic, because there is now more liquid in the bottle.',
      triggerAnswer: 'dilute-stronger',
      correction:
        'In fact adding water to vinegar makes it less acidic; the pH rises towards 7. Diluting an acid pushes its pH up the scale, not down.',
      reExplanation:
        'Acid particles sit in a tiny crowd in the bottle of pure vinegar. When water is added, the same number of acid particles spread out through more solvent, so each cup of the diluted mixture has fewer acid particles. The universal indicator turns from a strong orange to a paler yellow or yellow-green; the pH rises from 3 toward 5 or 6. Adding water never strengthens an acid.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update). Year 7 learners often think indicator colour is a perfect single number rather than a band on the scale. Reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box on universal indicator.
    {
      id: 'phs-mis-exact-number',
      description:
        'Universal indicator gives an exact pH number for a solution, not a range, so two solutions with different pH cannot share a colour.',
      triggerAnswer: 'exact-number',
      correction:
        'In fact universal indicator gives a pH range, not an exact number. Two solutions a pH unit apart can both look orange, for example.',
      reExplanation:
        'Universal indicator splits the pH scale into broad bands. Red covers pH 0 to 2, orange covers pH 3 to 4, yellow covers pH 5 to 6, and so on. Inside each band you cannot pick out an exact value; you read off a range. To read a single decimal pH number, scientists use a pH meter or a pH probe, but a universal indicator gives a band that is good enough for Year 7 work.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const phStrongWeak: SkillNode = {
  id: 'chemistry-ph-strong-weak',
  title: 'Strong and Weak Acids and Alkalis',
  description:
    'Tell strong acids and alkalis apart from weak ones at Y7 depth. A STRONG acid splits up completely in water (HCl gives pH 1); a WEAK acid splits up only partly (citric and ethanoic give pH 3 to 4). A STRONG alkali splits up completely in water (NaOH gives pH 13 to 14); a WEAK alkali splits up only partly (ammonia gives pH 11). Concentration is a different idea: a dilute strong acid can have a higher pH than a concentrated weak acid.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-ph',
  zoneName: 'pH',
  tier: 'confident',
  prerequisites: ['chemistry-ph-scale'],
  curriculum: {
    ks3Objective:
      'The pH scale for measuring acidity / alkalinity; and indicators; reactions of acids with alkalis to produce a salt plus water.',
    awardingBodies: {
      aqa: '4.4.2.2 Strong and weak acids; concentration vs strength (GCSE Chemistry 8462)',
      edexcel:
        'Topic 3.10 Strong and weak acids; the difference between concentration and strength (GCSE Chemistry 1CH0)',
      ocr: 'C3.1c Strong and weak acids and alkalis (GCSE Chemistry A J248 Gateway)',
    },
  },
  scenes: [
    {
      id: 'phsw-scene-rule',
      title: 'Strong vs Weak: How Each Splits Up in Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the splits-up rule for strong and weak acids.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="20" width="135" height="180" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1.2"/><text x="82" y="40" text-anchor="middle" font-size="11" font-weight="600" fill="#7C2D12">STRONG ACID</text><text x="82" y="58" text-anchor="middle" font-size="9" fill="#7C2D12">e.g. HCl in water</text><text x="82" y="80" text-anchor="middle" font-size="9" fill="#7C2D12">"splits up completely"</text><g fill="#7C2D12"><circle cx="40" cy="115" r="4"/><circle cx="60" cy="115" r="4"/><circle cx="80" cy="115" r="4"/><circle cx="100" cy="115" r="4"/><circle cx="120" cy="115" r="4"/></g><text x="82" y="140" text-anchor="middle" font-size="8" fill="#7C2D12">Every HCl molecule</text><text x="82" y="152" text-anchor="middle" font-size="8" fill="#7C2D12">splits in water</text><text x="82" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">pH 0 to 1</text></g><g><rect x="170" y="20" width="135" height="180" rx="4" fill="#FED7AA" stroke="#9A3412" stroke-width="1.2"/><text x="237" y="40" text-anchor="middle" font-size="11" font-weight="600" fill="#9A3412">WEAK ACID</text><text x="237" y="58" text-anchor="middle" font-size="9" fill="#9A3412">e.g. citric, ethanoic</text><text x="237" y="80" text-anchor="middle" font-size="9" fill="#9A3412">"splits up only partly"</text><g><circle cx="195" cy="115" r="4" fill="#9A3412"/><circle cx="215" cy="115" r="4" fill="#FFFFFF" stroke="#9A3412" stroke-width="1"/><circle cx="235" cy="115" r="4" fill="#FFFFFF" stroke="#9A3412" stroke-width="1"/><circle cx="255" cy="115" r="4" fill="#9A3412"/><circle cx="275" cy="115" r="4" fill="#FFFFFF" stroke="#9A3412" stroke-width="1"/></g><text x="237" y="140" text-anchor="middle" font-size="8" fill="#9A3412">Only some molecules</text><text x="237" y="152" text-anchor="middle" font-size="8" fill="#9A3412">split in water</text><text x="237" y="180" text-anchor="middle" font-size="10" font-weight="600" fill="#9A3412">pH 3 to 4</text></g></svg>',
        hotspots: [
          {
            id: 'phsw-h-strong',
            x: 26,
            y: 25,
            label: 'Strong acid: every molecule splits',
            description:
              'In a strong acid like HCl, every single molecule splits up in water. The water is full of acid particles, so the pH drops to 0 or 1. Filled circles in the picture show every molecule has split.',
          },
          {
            id: 'phsw-h-weak',
            x: 74,
            y: 25,
            label: 'Weak acid: only some molecules split',
            description:
              'In a weak acid like citric or ethanoic, only some molecules split up. The rest stay together. The water has fewer acid particles, so the pH only drops to 3 or 4. Half the circles are still whole molecules.',
          },
          {
            id: 'phsw-h-define',
            x: 50,
            y: 90,
            label: 'The Year 7 rule',
            description:
              'STRONG = splits up completely in water. WEAK = splits up only partly in water. Strong is about how completely the splitting happens, not about the pH alone.',
          },
        ],
      },
    },
    {
      id: 'phsw-scene-conc-vs-strength',
      title: 'Concentration vs Strength: Two Different Ideas',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a CONCENTRATED weak acid can have a LOWER pH than a DILUTE strong acid.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="15" y="40" width="135" height="180" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="82" y="60" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">DILUTE STRONG ACID</text><text x="82" y="74" text-anchor="middle" font-size="8" fill="#1E3A8A">very dilute HCl</text><text x="82" y="86" text-anchor="middle" font-size="8" fill="#1E3A8A">(1 drop in 1 L water)</text><circle cx="50" cy="120" r="4" fill="#7C2D12"/><circle cx="115" cy="135" r="4" fill="#7C2D12"/><circle cx="65" cy="160" r="4" fill="#7C2D12"/><text x="82" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">A few HCl molecules,</text><text x="82" y="207" text-anchor="middle" font-size="8" fill="#1E3A8A">each fully split</text><text x="82" y="218" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">pH ≈ 5</text></g><g><rect x="170" y="40" width="135" height="180" rx="4" fill="#FFFFFF" stroke="#7C2D12" stroke-width="1"/><text x="237" y="60" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">CONCENTRATED WEAK ACID</text><text x="237" y="74" text-anchor="middle" font-size="8" fill="#7C2D12">concentrated vinegar</text><text x="237" y="86" text-anchor="middle" font-size="8" fill="#7C2D12">(many ethanoic molecules)</text><g><circle cx="195" cy="115" r="3.5" fill="#9A3412"/><circle cx="210" cy="125" r="3.5" fill="#9A3412"/><circle cx="225" cy="115" r="3.5" fill="#FFFFFF" stroke="#9A3412"/><circle cx="240" cy="135" r="3.5" fill="#FFFFFF" stroke="#9A3412"/><circle cx="255" cy="125" r="3.5" fill="#9A3412"/><circle cx="270" cy="115" r="3.5" fill="#FFFFFF" stroke="#9A3412"/><circle cx="285" cy="135" r="3.5" fill="#FFFFFF" stroke="#9A3412"/><circle cx="200" cy="155" r="3.5" fill="#9A3412"/><circle cx="220" cy="170" r="3.5" fill="#FFFFFF" stroke="#9A3412"/><circle cx="245" cy="160" r="3.5" fill="#9A3412"/><circle cx="270" cy="170" r="3.5" fill="#FFFFFF" stroke="#9A3412"/></g><text x="237" y="195" text-anchor="middle" font-size="8" fill="#7C2D12">Many molecules; only</text><text x="237" y="207" text-anchor="middle" font-size="8" fill="#7C2D12">some split (filled = split)</text><text x="237" y="218" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">pH ≈ 2</text></g><text x="160" y="20" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Lower pH does not always mean stronger.</text><text x="160" y="34" text-anchor="middle" font-size="9" fill="#1E3A8A">Concentration and strength are different.</text></svg>',
        hotspots: [
          {
            id: 'phsw-h-dilute-strong',
            x: 26,
            y: 30,
            label: 'Dilute strong acid (pH ≈ 5)',
            description:
              'A few HCl molecules in a litre of water. Each one splits up fully because HCl is strong, but there are very few of them, so the pH is only mildly acidic.',
          },
          {
            id: 'phsw-h-conc-weak',
            x: 74,
            y: 30,
            label: 'Concentrated weak acid (pH ≈ 2)',
            description:
              'Many ethanoic molecules in the same volume of water. Only some split up because ethanoic is weak, but there are so many molecules that the number of split acid particles is large. The pH drops to about 2.',
          },
          {
            id: 'phsw-h-rule',
            x: 50,
            y: 13,
            label: 'The pH alone does not say strong or weak',
            description:
              'Strength is about HOW MUCH each molecule splits. Concentration is about HOW MANY molecules are in the bottle. A concentrated weak acid can have a lower pH than a dilute strong acid; pH alone cannot tell strong from weak.',
          },
        ],
      },
    },
    {
      id: 'phsw-scene-examples',
      title: 'Four Real Acids and Alkalis on a Strong/Weak Map',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see four real UK examples placed on the strong/weak map.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><line x1="160" y1="20" x2="160" y2="200" stroke="#475569" stroke-width="1" stroke-dasharray="3 2"/><line x1="20" y1="110" x2="300" y2="110" stroke="#475569" stroke-width="1" stroke-dasharray="3 2"/><text x="80" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">ACIDS (pH &lt; 7)</text><text x="240" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">ALKALIS (pH &gt; 7)</text><text x="14" y="65" text-anchor="middle" font-size="9" font-weight="600" fill="#475569" transform="rotate(-90 14 65)">STRONG</text><text x="14" y="160" text-anchor="middle" font-size="9" font-weight="600" fill="#475569" transform="rotate(-90 14 160)">WEAK</text><g><circle cx="60" cy="60" r="14" fill="#7C2D12"/><text x="60" y="64" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">HCl</text><text x="60" y="92" text-anchor="middle" font-size="7" fill="#7C2D12">pH 1</text></g><g><circle cx="60" cy="160" r="14" fill="#FB923C"/><text x="60" y="160" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">citric</text><text x="60" y="167" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">acid</text><text x="60" y="190" text-anchor="middle" font-size="7" fill="#9A3412">pH 3 to 4</text></g><g><circle cx="240" cy="60" r="14" fill="#1E3A8A"/><text x="240" y="58" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">NaOH</text><text x="240" y="68" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">(lab)</text><text x="240" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">pH 13 to 14</text></g><g><circle cx="240" cy="160" r="14" fill="#3B82F6"/><text x="240" y="158" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">NH₃</text><text x="240" y="168" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="600">solution</text><text x="240" y="190" text-anchor="middle" font-size="7" fill="#1E3A8A">pH 11</text></g></svg>',
        hotspots: [
          {
            id: 'phsw-h-hcl',
            x: 19,
            y: 27,
            label: 'Hydrochloric acid: STRONG, pH 1',
            description:
              'HCl in water splits up completely. The school-lab bench bottle reads about pH 1. The same chemical is made by the human stomach to break down food.',
          },
          {
            id: 'phsw-h-citric',
            x: 19,
            y: 73,
            label: 'Citric acid: WEAK, pH 3 to 4',
            description:
              'Citric acid in lemons and orange juice splits up only partly in water. Even at the strength of pure lemon juice, the pH only drops to about 3.',
          },
          {
            id: 'phsw-h-naoh',
            x: 75,
            y: 27,
            label: 'Sodium hydroxide: STRONG alkali, pH 13 to 14',
            description:
              'NaOH in water splits up completely into sodium and hydroxide. The school-lab bench bottle reads pH 13 to 14. Oven cleaner uses the same chemical.',
          },
          {
            id: 'phsw-h-ammonia',
            x: 75,
            y: 73,
            label: 'Ammonia solution: WEAK alkali, pH 11',
            description:
              'NH₃ in water splits up only partly. Household ammonia cleaning solution reads about pH 11, well below the pH 13 to 14 of NaOH.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'phsw-worked-1',
      title: 'Naming a strong acid versus a weak acid',
      steps: [
        {
          explanation:
            'Question: A teacher places two unlabelled bottles on the bench: one of school-lab dilute hydrochloric acid (HCl), and one of pure white vinegar (ethanoic acid). The teacher tells you both bottles read at about pH 3 today. Which bottle holds the strong acid, and how do you know?',
        },
        {
          explanation:
            'Step 1: read the rule. STRONG acid = splits up completely in water. WEAK acid = splits up only partly in water. The pH alone does not say.',
        },
        {
          explanation:
            'Step 2: think about each substance. HCl always splits up completely in water (it is a strong acid by chemistry, no matter the concentration). Ethanoic acid only ever splits up partly in water (it is a weak acid).',
        },
        {
          explanation:
            'Step 3: pick the strong one. The HCl bottle is the strong acid. The ethanoic acid bottle is the weak acid.',
          maths: 'strong = HCl (splits fully), weak = ethanoic (splits partly)',
        },
        {
          explanation:
            'Step 4: explain the matching pH. The HCl is dilute (a few molecules in lots of water), so its pH is only about 3 today. The ethanoic acid is concentrated (many molecules in less water), so its pH is also about 3, even though only some molecules split. Same pH, different reason; the strong/weak label is set by chemistry, not pH.',
        },
      ],
    },
    {
      id: 'phsw-worked-2',
      title: 'Concentrated weak acid vs dilute strong acid',
      steps: [
        {
          explanation:
            'Question: A pupil claims: "The bottle with the lower pH is always the stronger acid." A teacher hands them concentrated vinegar (pH 2) and very dilute hydrochloric acid (pH 5). Which bottle holds the weak acid, and is the pupil right?',
        },
        {
          explanation:
            'Step 1: read each label. Concentrated vinegar holds many ethanoic molecules per mL. Very dilute HCl holds very few HCl molecules per mL.',
        },
        {
          explanation:
            'Step 2: identify each as strong or weak by the chemistry rule. Vinegar is always weak; only some ethanoic molecules split up. HCl is always strong; every HCl molecule splits up.',
        },
        {
          explanation:
            'Step 3: explain the surprising pH numbers. Vinegar reads pH 2 because there are so MANY ethanoic molecules that even a few percent splitting up is still a lot of acid particles. The dilute HCl reads pH 5 because there are so FEW HCl molecules; even though every one splits up, the total amount of acid in solution is small.',
          maths:
            'concentrated weak vinegar pH 2 < dilute strong HCl pH 5; weak still has lower pH here',
        },
        {
          explanation: '', // missing step: name which is the weak acid
        },
        {
          explanation:
            'Step 5: answer the pupil. The weak acid is the vinegar (concentrated weak acid). Despite its lower pH, vinegar is still weak; the pupil is wrong because pH alone cannot tell strong from weak. Concentration and strength are different ideas.',
        },
      ],
    },
  ],
  questions: [
    // 9 multiple-choice
    {
      id: 'phsw-q1',
      type: 'multiple-choice',
      stem: 'At Year 7, what is the best definition of a STRONG acid?',
      tier: 'core',
      options: [
        'An acid that always burns skin on contact',
        'An acid that splits up completely in water',
        'An acid with a pH of exactly 0',
        'An acid that contains the most acid particles per mL',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'phsw-mis-strong-burns',
    },
    {
      id: 'phsw-q2',
      type: 'multiple-choice',
      stem: 'At Year 7, what is the best definition of a WEAK acid?',
      tier: 'core',
      options: [
        'An acid that does not really act as an acid',
        'An acid that has been mixed with a lot of water',
        'An acid that splits up only partly in water',
        'An acid that has a pH of exactly 7',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'phsw-q3',
      type: 'multiple-choice',
      stem: 'Which of these is a STRONG acid?',
      tier: 'core',
      options: [
        'Citric acid (in oranges)',
        'Hydrochloric acid (HCl, in school lab and stomach)',
        'Ethanoic acid (in vinegar)',
        'Carbonic acid (in fizzy drinks)',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'phsw-q4',
      type: 'multiple-choice',
      stem: 'Which of these is a WEAK alkali?',
      tier: 'core',
      options: [
        'Sodium hydroxide (NaOH, in oven cleaner)',
        'Potassium hydroxide (KOH, in school lab)',
        'Ammonia solution (NH₃ in water, in household cleaners)',
        'Lithium hydroxide (LiOH, in school lab)',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'phsw-mis-only-naoh',
    },
    {
      id: 'phsw-q5',
      type: 'multiple-choice',
      stem: 'A bottle of dilute HCl in the school lab reads pH 1. A bottle of pure white vinegar reads pH 3. Which is the STRONGER acid?',
      tier: 'confident',
      options: [
        'The vinegar, because pH 3 is the standard pH for the strongest acids',
        'The HCl, because HCl splits up completely in water (every molecule), while ethanoic acid only splits up partly',
        'They are equally strong, because both are below pH 7',
        'Neither is strong; both are weak because they are in the school lab',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'phsw-q6',
      type: 'multiple-choice',
      stem: 'Which statement about ammonia solution (NH₃ in water) is TRUE at Year 7?',
      tier: 'confident',
      options: [
        'It is a weak alkali; ammonia molecules only split up partly in water, so the pH is about 11',
        'It is a strong alkali; ammonia molecules split up completely, so the pH is about 14',
        'It is a salt, so it is neutral at pH 7',
        'It is a weak acid, because the formula starts with N',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'phsw-q7',
      type: 'multiple-choice',
      stem: 'A teacher fills two beakers. Beaker A holds VERY DILUTE hydrochloric acid (just one drop of school-lab HCl in 1 L of water); the indicator reads pH 5. Beaker B holds CONCENTRATED vinegar (a full bottle); the indicator reads pH 2. Which beaker holds the WEAK acid?',
      tier: 'challenge',
      options: [
        'Beaker A, because the pH is higher (5)',
        'Beaker B, because the pH is lower (2)',
        'Beaker B, because vinegar is always a weak acid (only some ethanoic molecules split up); a low pH does not stop it being weak',
        'Neither, because if both have pH below 7 then both must be strong',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'phsw-mis-ph-decides',
    },
    {
      id: 'phsw-q8',
      type: 'multiple-choice',
      stem: 'Which of these statements is TRUE for Year 7 chemistry?',
      tier: 'challenge',
      options: [
        'Concentration and strength are the same idea, just different words for it',
        'Concentration is about how MANY acid molecules are in the bottle; strength is about how COMPLETELY each one splits up in water',
        'Concentration is for solids; strength is for liquids',
        'Strength is set by the pH alone; concentration is set by the volume',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'phsw-mis-conc-eq-strength',
    },
    {
      id: 'phsw-q9',
      type: 'multiple-choice',
      stem: 'A school technician in Norwich takes pure citric acid powder (a weak acid) and dissolves a LOT of it in a small volume of water, making a very concentrated solution. They expect the pH to read 1. What is the most likely reading, and why?',
      tier: 'challenge',
      options: [
        'pH 1, because a concentrated acid always reaches pH 1',
        'pH 7, because citric acid is a food acid and food acids are always neutral',
        'pH 13, because at high concentration acids turn into alkalis',
        'About pH 1 to 2, because even a weak acid can reach a low pH if it is concentrated enough; only some molecules split, but there are many of them',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
    // 4 numeric-entry
    {
      id: 'phsw-q10',
      type: 'numeric-entry',
      stem: 'Read the standard chart values: a school-lab bottle of dilute hydrochloric acid (a strong acid) reads what approximate pH?',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
    },
    {
      id: 'phsw-q11',
      type: 'numeric-entry',
      stem: 'Read the standard chart values: a school-lab bottle of sodium hydroxide solution (a strong alkali) reads what approximate pH?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      hint: 'Sodium hydroxide reaches the very top of the standard 0 to 14 scale.',
    },
    {
      id: 'phsw-q12',
      type: 'numeric-entry',
      stem: 'A school-lab bottle of household ammonia solution (a weak alkali) reads what approximate pH?',
      tier: 'confident',
      correctAnswer: 11,
      xpValue: 15,
    },
    {
      id: 'phsw-q13',
      type: 'numeric-entry',
      stem: 'A teacher tests pure white vinegar (a weak acid). The label says "5 percent ethanoic acid in water". Universal indicator turns the bottle orange (pH 3). The teacher then dilutes the vinegar with 9 times as much water. The new pH is now about pH 4. By how many pH units has the pH risen?',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'The vinegar started at pH 3; it now reads pH 4. Subtract.',
    },
    // 1 drag-order
    {
      id: 'phsw-q14',
      type: 'drag-order',
      stem: 'Place these substances in order from STRONGEST acid to STRONGEST alkali (left to right on a strong/weak map).',
      tier: 'core',
      items: [
        'Ammonia solution (weak alkali, pH 11)',
        'Hydrochloric acid (strong acid, pH 1)',
        'Sodium hydroxide (strong alkali, pH 14)',
        'Citric acid (weak acid, pH 3)',
        'Pure water (neutral, pH 7)',
      ],
      correctOrder: [1, 3, 4, 0, 2],
      xpValue: 20,
    },
    // 2 spot-misconception (one MUST be the concentrated-weak vs dilute-strong teach)
    {
      id: 'phsw-q15',
      type: 'spot-misconception',
      stem: 'Maya argues: "If two acids in two beakers have different pH numbers, then the one with the LOWER pH must always be the STRONGER acid." Is Maya right?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. A lower pH always means a stronger acid; the pH number is the strength score.',
          isMisconception: true,
        },
        {
          text: 'Maya is wrong. A concentrated weak acid (lots of vinegar molecules, only some splitting) can have a LOWER pH than a dilute strong acid (very few HCl molecules, every one splitting). pH alone cannot tell strong from weak. Strength is whether each molecule splits completely; concentration is how many molecules there are.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'phsw-mis-ph-decides',
    },
    {
      id: 'phsw-q16',
      type: 'spot-misconception',
      stem: 'Ben says: "Citric acid is a food acid in oranges, and HCl is a school lab acid in a glass bottle. So food acids are weak and lab acids are strong." Is Ben right that the food vs lab line is what makes an acid strong or weak?',
      tier: 'challenge',
      statements: [
        {
          text: 'Ben is right. The "food acid" label is the same as the "weak acid" label; the "lab acid" label is the same as "strong".',
          isMisconception: true,
        },
        {
          text: 'Ben is partly right but with the wrong reason. Citric acid IS weak and lab HCl IS strong, but the boundary is whether the molecules split up completely in water, not where the bottle is found. A lab bottle of citric acid is still a weak acid; a tiny dilute drop of HCl is still a strong acid.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'phsw-mis-food-vs-lab',
    },
    // 1 free-text
    {
      id: 'phsw-q17',
      type: 'free-text',
      stem: 'In 2 to 3 sentences, explain the difference between concentration and strength for an acid. Use one UK example for each idea.',
      tier: 'confident',
      sampleAnswer:
        'Concentration is how many acid molecules are in a fixed volume of water; for example, concentrated vinegar has many ethanoic molecules per mL, dilute vinegar has few. Strength is how completely each molecule splits up in water: HCl is a strong acid because every molecule splits, ethanoic is weak because only some molecules split. The two ideas are different, so a concentrated weak acid can have a lower pH than a dilute strong acid.',
      keywords: ['concentration', 'strength', 'split', 'completely'],
      xpValue: 20,
    },
    // 1 missing-step
    {
      id: 'phsw-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of testing two acids.',
      tier: 'confident',
      steps: [
        'A pupil places two unlabelled beakers on the bench: one of dilute HCl, one of pure white vinegar',
        'The pupil drops universal indicator into both and reads pH 3 in beaker A and pH 3 in beaker B',
        'The pupil writes that the two acids must be equally strong because they read the same pH',
        null,
        'The pupil corrects their note: "HCl is the strong acid (every molecule splits up); vinegar is the weak acid (only some split). The pH alone could not tell them apart today."',
      ],
      missingStepIndex: 3,
      correctStep:
        'The teacher reminds the pupil of the rule: strong vs weak is about how completely each molecule splits up in water, not what the pH reads',
      xpValue: 20,
    },
    // 1 labelled-image
    {
      id: 'phsw-q19',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct quadrant of the strong/weak map.',
      tier: 'confident',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><line x1="160" y1="20" x2="160" y2="200" stroke="#475569" stroke-width="1" stroke-dasharray="3 2"/><line x1="20" y1="110" x2="300" y2="110" stroke="#475569" stroke-width="1" stroke-dasharray="3 2"/><text x="80" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">ACIDS</text><text x="240" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">ALKALIS</text><text x="14" y="65" text-anchor="middle" font-size="9" font-weight="600" fill="#475569" transform="rotate(-90 14 65)">STRONG</text><text x="14" y="160" text-anchor="middle" font-size="9" font-weight="600" fill="#475569" transform="rotate(-90 14 160)">WEAK</text></svg>',
      hotspots: [
        { id: 'phsw-q19-h1', x: 20, y: 27, correctLabel: 'HCl' },
        { id: 'phsw-q19-h2', x: 20, y: 73, correctLabel: 'Citric acid' },
        { id: 'phsw-q19-h3', x: 75, y: 27, correctLabel: 'NaOH' },
        { id: 'phsw-q19-h4', x: 75, y: 73, correctLabel: 'Ammonia' },
      ],
      labels: ['HCl', 'Citric acid', 'NaOH', 'Ammonia', 'NaCl', 'H₂O'],
      xpValue: 20,
    },
    // 1 challenge MCQ that addresses dilution-vs-strength
    {
      id: 'phsw-q20',
      type: 'multiple-choice',
      stem: 'A pupil takes a bottle of school-lab dilute HCl (pH 1) and adds 99 times its volume of water. The pH now reads about 3. The pupil writes: "The HCl has turned into a weak acid because the pH has gone up." Which response is BEST at Year 7?',
      tier: 'challenge',
      options: [
        'The pupil is right; adding water turns a strong acid into a weak acid',
        'The pupil is right; the pH score is what decides strong vs weak, so a higher pH means weaker',
        'The pupil is wrong; HCl is still a strong acid because every HCl molecule still splits up completely in water. The pH only rose because the acid is now more dilute (fewer molecules per mL)',
        'The pupil is wrong; the HCl has turned into water at this dilution',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'phsw-mis-dilute-changes-strength',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q09 on strong vs weak acids: candidates "wrote that a low pH meant a strong acid, no matter the concentration", confusing concentration with strength. Reinforced by RSC Education article "The difference between concentration and strength" (rsc.org/education, accessed 2026-05-10) and CGP KS3 Chemistry Study Book p.65 Common Mistake box on strong and weak acids.
    {
      id: 'phsw-mis-ph-decides',
      description:
        'A lower pH always means a stronger acid; the pH number alone tells you which acid is the stronger of the two.',
      triggerAnswer: 'ph-decides',
      correction:
        'In fact pH alone cannot tell strong from weak. A concentrated weak acid can have a lower pH than a dilute strong acid. Strength is set by how completely each molecule splits up in water, not by the pH.',
      reExplanation:
        'Two beakers. Beaker A: very dilute HCl (few molecules, each fully splits up). Beaker B: concentrated vinegar (many ethanoic molecules, only some split up). Beaker A is a strong acid but reads pH 5. Beaker B is weak but reads pH 2. Same indicator, opposite strong/weak labels. The pH counts the split acid particles; the strong label counts how completely each molecule splits.',
    },
    // Source: BEST Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on strong vs weak acids. Year 7 learners often think concentration and strength are the same word for the same idea. Reinforced by RSC Education article "Common student misconceptions about acids and bases" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'phsw-mis-conc-eq-strength',
      description:
        'Concentration and strength are the same idea, so a concentrated acid is the same thing as a strong acid.',
      triggerAnswer: 'conc-eq-strength',
      correction:
        'In fact concentration and strength are different ideas. Concentration is HOW MANY acid molecules are in the bottle. Strength is HOW COMPLETELY each molecule splits up in water.',
      reExplanation:
        'Picture vinegar in a kitchen and HCl in a school lab. You can have CONCENTRATED vinegar (lots of ethanoic molecules per mL) and DILUTE vinegar (a few). Both are weak acids; only some molecules split up either way. You can have CONCENTRATED HCl (lots of HCl molecules per mL) and DILUTE HCl (a few). Both are strong acids; every molecule splits up either way. Concentration is a separate dial from strength.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q09 on weak and strong acids: candidates "tied strong/weak to the bottle label or to whether the acid is found in food or in a school lab". Reinforced by CGP KS3 Chemistry Study Book p.65 chapter on strong and weak acids.
    {
      id: 'phsw-mis-food-vs-lab',
      description:
        'Acids in food are weak, and acids in a school lab are strong; so the food vs lab line is what decides strong vs weak.',
      triggerAnswer: 'food-vs-lab',
      correction:
        'In fact strong vs weak is decided by whether each molecule splits up completely in water, not by where the bottle is kept. A school-lab citric acid bottle is still weak; a stomach drop of HCl is still strong.',
      reExplanation:
        'Citric acid IS weak and HCl IS strong, but for chemistry reasons, not where they live. Citric acid molecules only split up partly in water no matter where they came from. HCl molecules split up completely in water no matter where they came from. So the boundary is not "food vs lab" but "splits completely vs splits partly in water". Same chemistry rule applies in any setting.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q10 on safety with acids: candidates "wrote that a strong acid is one that always burns skin", treating strong as a danger label. Reinforced by HSE (Health and Safety Executive) school chemistry safety guidance "Strong acids and alkalis in school" (hse.gov.uk, 2024 update).
    {
      id: 'phsw-mis-strong-burns',
      description:
        'A strong acid is one that always burns skin on contact; if an acid does not burn, it must be weak.',
      triggerAnswer: 'strong-burns',
      correction:
        'In fact "strong" is a chemistry word that means "splits up completely in water". A strong acid CAN burn skin in the amounts used in a school lab, but the danger comes from the concentration too, not the strength alone.',
      reExplanation:
        'Dilute HCl from a school bottle stings and forms a chemical burn on bare skin. HCl is strong (every molecule splits up). White vinegar from a UK kitchen does not give a serious burn even at pH 3, because vinegar is weak (only some molecules split up) and the concentration is low. The strong label is about chemistry; the burn risk depends on concentration too.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update). Year 7 learners often think every alkali is sodium hydroxide and every weak alkali must be a non-hydroxide substance. Reinforced by CGP KS3 Chemistry Study Book p.66 chapter on alkalis.
    {
      id: 'phsw-mis-only-naoh',
      description:
        'The only alkalis are sodium hydroxide (NaOH) and potassium hydroxide (KOH); ammonia is not really an alkali because it is a gas.',
      triggerAnswer: 'only-naoh',
      correction:
        'In fact ammonia (NH₃) dissolved in water IS a real alkali; the ammonia molecules split up partly in water to give a pH of about 11. Hydroxide-based alkalis are not the only kind.',
      reExplanation:
        'Ammonia is a gas at room temperature, but the bottle of household ammonia cleaning solution is ammonia GAS dissolved in water, just like fizzy lemonade is CO₂ gas dissolved in water. Once dissolved, ammonia molecules split up partly to give the same kind of alkaline reading as a hydroxide. Universal indicator turns blue or indigo in ammonia solution. So we have hydroxide alkalis (NaOH, KOH) AND ammonia solution as a real weak alkali at Year 7.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q10 on dilution: candidates "wrote that adding water to a strong acid turns it into a weak acid", confusing dilution with a change in strength. Reinforced by RSC Education article "The difference between concentration and strength" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'phsw-mis-dilute-changes-strength',
      description:
        'Adding lots of water to a strong acid like HCl turns it into a weak acid; the more water, the weaker the acid becomes.',
      triggerAnswer: 'dilute-changes-strength',
      correction:
        'In fact adding water lowers the CONCENTRATION but not the STRENGTH. The HCl molecules still split up completely in water; the pH rises because there are fewer of them per mL.',
      reExplanation:
        'Picture HCl molecules. In every solution they enter, every single one splits up; this is what makes HCl a strong acid. If you add water, you spread those molecules out across more solvent. There are fewer split acid particles per mL, so the pH rises (say from pH 1 to pH 5). But every HCl molecule that IS there is still splitting up completely. The strength label "strong" describes what each molecule does; it does not change with dilution.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const phZone: Zone = {
  id: 'chemistry-ph',
  name: 'pH',
  realm: 'elementia',
  nodeIds: ['chemistry-ph-scale', 'chemistry-ph-strong-weak'],
}
