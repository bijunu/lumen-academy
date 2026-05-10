import type { SkillNode, Zone } from '@/types/content'

// =============================================================================
// Node 1: Digestive System (Core, biology-body-systems-digestive)
// =============================================================================

const digestiveOverviewSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The digestive system, mouth to anus</text>
  <ellipse cx="180" cy="74" rx="34" ry="22" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <rect x="170" y="96" width="20" height="100" fill="#F87171" stroke="#7F1D1D" stroke-width="2" />
  <path d="M 130 200 Q 180 200 200 220 Q 250 240 230 280 Q 200 320 150 300 Q 110 280 130 200 Z" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
  <path d="M 230 280 Q 320 270 340 230 Q 380 230 380 270 Q 380 320 340 320 Q 280 340 240 320 Z" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <path d="M 380 270 Q 460 260 480 220 Q 510 220 510 260 Q 510 320 470 320 Q 420 330 380 320 Z" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <rect x="170" y="340" width="40" height="34" fill="#92400E" stroke="#451A03" stroke-width="2" />
  <line x1="240" y1="74" x2="320" y2="74" stroke="#374151" stroke-width="1" />
  <text x="328" y="78" font-family="sans-serif" font-size="13" fill="#1F2937">Mouth</text>
  <line x1="200" y1="146" x2="320" y2="146" stroke="#374151" stroke-width="1" />
  <text x="328" y="150" font-family="sans-serif" font-size="13" fill="#1F2937">Oesophagus</text>
  <line x1="200" y1="240" x2="100" y2="240" stroke="#374151" stroke-width="1" />
  <text x="36" y="244" font-family="sans-serif" font-size="13" fill="#1F2937">Stomach</text>
  <line x1="290" y1="290" x2="290" y2="370" stroke="#374151" stroke-width="1" />
  <text x="240" y="384" font-family="sans-serif" font-size="13" fill="#1F2937">Small intestine</text>
  <line x1="450" y1="290" x2="450" y2="370" stroke="#374151" stroke-width="1" />
  <text x="416" y="384" font-family="sans-serif" font-size="13" fill="#1F2937">Large intestine</text>
  <line x1="190" y1="370" x2="60" y2="370" stroke="#374151" stroke-width="1" />
  <text x="20" y="374" font-family="sans-serif" font-size="13" fill="#1F2937">Anus</text>
</svg>
`.trim()

const digestiveJobsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">What each part does</text>
  <rect x="40" y="60" width="170" height="90" rx="8" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="125" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Mouth</text>
  <text x="125" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Teeth chop food.</text>
  <text x="125" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Saliva starts breaking</text>
  <text x="125" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">down starch.</text>
  <rect x="220" y="60" width="170" height="90" rx="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="305" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Oesophagus</text>
  <text x="305" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Squeezes the food</text>
  <text x="305" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">ball down to the</text>
  <text x="305" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">stomach.</text>
  <rect x="400" y="60" width="170" height="90" rx="8" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
  <text x="485" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Stomach</text>
  <text x="485" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Churns food. Acid</text>
  <text x="485" y="132" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">and enzymes attack</text>
  <text x="485" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">protein.</text>
  <rect x="40" y="180" width="260" height="90" rx="8" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <text x="170" y="208" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Small intestine</text>
  <text x="170" y="232" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Enzymes finish digestion. Tiny food</text>
  <text x="170" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">molecules pass into the bloodstream</text>
  <text x="170" y="265" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">through the gut wall.</text>
  <rect x="320" y="180" width="250" height="90" rx="8" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <text x="445" y="208" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Large intestine</text>
  <text x="445" y="232" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Takes water back into the body.</text>
  <text x="445" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Leftover waste is pressed into solid</text>
  <text x="445" y="265" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">faeces.</text>
  <rect x="40" y="300" width="530" height="80" rx="8" fill="#92400E" stroke="#451A03" stroke-width="2" />
  <text x="305" y="328" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#FEF3C7">Anus</text>
  <text x="305" y="354" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#FEF3C7">Opening at the end of the gut where solid waste leaves the body.</text>
</svg>
`.trim()

const mechanicalChemicalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="32" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Two ways food is broken down</text>
  <rect x="40" y="60" width="240" height="300" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="160" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Mechanical digestion</text>
  <text x="160" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">The food is cut, crushed, and</text>
  <text x="160" y="138" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">churned into smaller pieces.</text>
  <text x="160" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">No new chemicals are made.</text>
  <rect x="60" y="180" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="160" y="206" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Teeth in the mouth</text>
  <rect x="60" y="230" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="160" y="256" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Stomach muscles churn</text>
  <rect x="60" y="280" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="160" y="306" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Tongue mashes the food</text>
  <text x="160" y="345" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Food becomes smaller pieces of the</text>
  <text x="160" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">same chemical.</text>
  <rect x="320" y="60" width="240" height="300" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="440" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Chemical digestion</text>
  <text x="440" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Enzymes break large food</text>
  <text x="440" y="138" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">molecules into tiny ones.</text>
  <text x="440" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">New, smaller chemicals form.</text>
  <rect x="340" y="180" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="440" y="206" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Saliva on starch</text>
  <rect x="340" y="230" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="440" y="256" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Stomach acid on protein</text>
  <rect x="340" y="280" width="200" height="40" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="440" y="306" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Gut enzymes on fat</text>
  <text x="440" y="345" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Tiny new molecules can pass into</text>
  <text x="440" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">the blood.</text>
</svg>
`.trim()

export const digestiveSystem: SkillNode = {
  id: 'biology-body-systems-digestive',
  title: 'The Digestive System',
  description:
    'Walk through the digestive system from mouth to anus. Learn what each organ does, then sort the difference between mechanical digestion (chopping and churning) and chemical digestion (enzymes breaking food into tiny pieces). UK examples from school dinners and a Sunday lunch keep the maths grounded.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'core',
  prerequisites: ['biology-cells-animal-cell'],
  curriculum: {
    ks3Objective:
      'The content of a healthy human diet: carbohydrates, lipids (fats and oils), proteins, vitamins, minerals, dietary fibre and water, and why each is needed; the consequences of imbalances in the diet, including obesity, starvation and deficiency diseases; the tissues and organs of the human digestive system, including adaptations to function and how the digestive system digests food (enzymes simply as biological catalysts).',
    awardingBodies: {
      aqa: '4.2.2.1 The human digestive system (GCSE Biology 8461). Cover mouth, salivary glands, oesophagus, stomach, small intestine, large intestine, and the role of digestive enzymes.',
      edexcel: 'CB2a Plant and animal cells / CB2 Cells and control: digestive system (GCSE Biology 1BI0, Topic 2). Identify the parts of the digestive system and their functions.',
      ocr: 'B2.1.1 The human digestive system (GCSE Biology A J247). Describe the structure of the digestive system and the role of enzymes.',
    },
  },
  scenes: [
    {
      id: 'ds-scene-overview',
      title: 'Mouth to Anus: a Tour of the Gut',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the digestive system to read its name and where in the body it sits.',
      data: {
        svg: digestiveOverviewSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ds-hs-mouth',
            x: 30,
            y: 18,
            label: 'Mouth',
            description:
              'Where food enters. Teeth, tongue, and saliva start the work.',
          },
          {
            id: 'ds-hs-oesophagus',
            x: 30,
            y: 36,
            label: 'Oesophagus',
            description:
              'Muscular tube that pushes food from the mouth to the stomach.',
          },
          {
            id: 'ds-hs-stomach',
            x: 28,
            y: 60,
            label: 'Stomach',
            description:
              'A muscular bag that churns food and adds acid.',
          },
          {
            id: 'ds-hs-small-int',
            x: 48,
            y: 75,
            label: 'Small intestine',
            description:
              'A long, narrow tube where most digestion finishes and food passes into the blood.',
          },
          {
            id: 'ds-hs-large-int',
            x: 75,
            y: 75,
            label: 'Large intestine',
            description:
              'A shorter, wider tube where water is taken back into the body.',
          },
          {
            id: 'ds-hs-anus',
            x: 32,
            y: 92,
            label: 'Anus',
            description:
              'The opening at the end of the gut where solid waste leaves the body.',
          },
        ],
      },
    },
    {
      id: 'ds-scene-jobs',
      title: 'What Each Part Does',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to read what that part of the gut adds to the journey.',
      data: {
        svg: digestiveJobsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ds-jobs-mouth',
            x: 21,
            y: 26,
            label: 'Mouth job',
            description:
              'Teeth chop food. Saliva mixes with the food and begins breaking down starch.',
          },
          {
            id: 'ds-jobs-oeso',
            x: 51,
            y: 26,
            label: 'Oesophagus job',
            description:
              'Muscles in the wall squeeze in waves, pushing the food ball down to the stomach.',
          },
          {
            id: 'ds-jobs-stomach',
            x: 81,
            y: 26,
            label: 'Stomach job',
            description:
              'Strong muscles churn the food. Acid kills germs and enzymes start to digest protein.',
          },
          {
            id: 'ds-jobs-small',
            x: 28,
            y: 56,
            label: 'Small intestine job',
            description:
              'Enzymes finish digestion. Tiny food molecules pass through the gut wall into the blood.',
          },
          {
            id: 'ds-jobs-large',
            x: 74,
            y: 56,
            label: 'Large intestine job',
            description:
              'Water is taken back into the body. The leftover waste is pressed into solid faeces.',
          },
          {
            id: 'ds-jobs-anus',
            x: 50,
            y: 85,
            label: 'Anus job',
            description:
              'Holds and then releases the solid waste when the body is ready.',
          },
        ],
      },
    },
    {
      id: 'ds-scene-mech-chem',
      title: 'Mechanical and Chemical Digestion',
      type: 'labelled-diagram',
      instructions:
        'Click the panels to read how the two kinds of digestion differ and where each one happens.',
      data: {
        svg: mechanicalChemicalSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'ds-mc-mech',
            x: 27,
            y: 22,
            label: 'Mechanical digestion',
            description:
              'Food is cut, crushed, and churned into smaller pieces. The chemicals stay the same.',
          },
          {
            id: 'ds-mc-chem',
            x: 73,
            y: 22,
            label: 'Chemical digestion',
            description:
              'Enzymes break large food molecules into smaller ones. New, tinier chemicals form.',
          },
          {
            id: 'ds-mc-teeth',
            x: 27,
            y: 50,
            label: 'Teeth example',
            description:
              'Teeth in the mouth show mechanical digestion at work. The bread breaks into smaller bread, not new chemicals.',
          },
          {
            id: 'ds-mc-saliva',
            x: 73,
            y: 50,
            label: 'Saliva example',
            description:
              'Saliva on starch shows chemical digestion. Starch turns into sugar, a new molecule the body can use.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ds-worked-1',
      title: 'Tracing a school chip from mouth to small intestine',
      steps: [
        {
          explanation:
            'A pupil eats one chip from a Sunday lunch. We follow it through the gut to see where each step happens.',
        },
        {
          explanation:
            'Step 1: in the mouth, the teeth chop the chip into small pieces. Saliva mixes with the chip and begins breaking down the starch.',
        },
        {
          explanation:
            'Step 2: the tongue rolls the chip into a soft ball. Muscles squeeze the ball down the oesophagus to the stomach.',
        },
        {
          explanation:
            'Step 3: in the stomach, churning muscles and acid mix the chip with stomach enzymes. Any protein from the gravy starts to break down here.',
        },
        {
          explanation:
            'Step 4: the chip moves into the small intestine. Enzymes from the gut wall finish digesting the starch into sugar and the fat from the oil into smaller fat molecules.',
        },
        {
          explanation:
            'Step 5: tiny food molecules pass through the small intestine wall into the blood. The body now has the food it needs from one chip.',
        },
      ],
    },
    {
      id: 'ds-worked-2',
      title: 'Sorting two bites: one is mechanical, the other chemical',
      steps: [
        {
          explanation:
            'A pupil takes two bites at lunch: one bite of an apple and one sip of orange juice. Which bite shows mainly mechanical digestion, and which shows mainly chemical digestion?',
        },
        {
          explanation:
            'Bite 1 (apple): teeth crunch the apple into small pieces. The chunks of apple are smaller, but they are still apple. This is mechanical digestion.',
        },
        {
          explanation:
            'Bite 2 (orange juice): the juice slides down without much chewing. In the gut, enzymes break the sugars in the juice into smaller sugars. New, smaller chemicals form. This is chemical digestion.',
        },
        {
          explanation:
            'Most foods need both kinds of digestion. The apple chunks will also meet enzymes later in the gut, and the orange juice meets some churning in the stomach. The two ideas work together.',
        },
        {
          explanation:
            'A useful test: if the food is just smaller pieces of the same thing, it is mechanical. If new, smaller molecules have formed, it is chemical.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ds-q1',
      type: 'multiple-choice',
      stem: 'Which part of the gut comes straight after the mouth?',
      tier: 'core',
      options: ['Stomach', 'Small intestine', 'Large intestine', 'Oesophagus'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ds-mis-stomach-after-mouth',
    },
    {
      id: 'ds-q2',
      type: 'multiple-choice',
      stem: 'Where is most of the digested food taken into the blood?',
      tier: 'core',
      options: ['Mouth', 'Oesophagus', 'Stomach', 'Small intestine'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ds-mis-stomach-absorbs',
    },
    {
      id: 'ds-q3',
      type: 'multiple-choice',
      stem: 'What is the main job of the large intestine?',
      tier: 'core',
      options: [
        'Take water back into the body and form solid waste.',
        'Break down protein with acid.',
        'Crush the food into smaller pieces.',
        'Push food from the mouth to the stomach.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ds-mis-large-int-digests',
    },
    {
      id: 'ds-q4',
      type: 'multiple-choice',
      stem: 'A pupil chews bread for a few seconds and the bread starts to taste sweet. Which kind of digestion has happened in the mouth?',
      tier: 'core',
      options: [
        'Mechanical digestion only.',
        'Chemical digestion only.',
        'Both mechanical and chemical digestion.',
        'Neither. The mouth does not digest food.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ds-mis-mouth-only-mechanical',
    },
    {
      id: 'ds-q5',
      type: 'numeric-entry',
      stem: 'How many of these six parts are organs of the human digestive system: mouth, lung, stomach, heart, small intestine, large intestine?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Two parts in the list belong to other body systems.',
    },
    {
      id: 'ds-q6',
      type: 'numeric-entry',
      stem: 'A school dinner contains 24 g of protein. The school nurse says a Year 7 pupil needs 36 g of protein at lunch to meet their daily plan. How many more grams of protein does the dinner need?',
      tier: 'core',
      correctAnswer: 12,
      unit: 'g',
      xpValue: 10,
      hint: 'Subtract what the pupil already gets from what they need.',
    },
    {
      id: 'ds-q7',
      type: 'numeric-entry',
      stem: 'The stomach can hold about 1.5 litres when full. How many millilitres is this?',
      tier: 'core',
      correctAnswer: 1500,
      unit: 'ml',
      xpValue: 10,
      hint: 'There are 1000 millilitres in 1 litre.',
    },
    {
      id: 'ds-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "all digestion happens in the stomach." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. The stomach does all the digestion in one place.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Digestion starts in the mouth, continues in the stomach, and finishes in the small intestine.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ds-mis-stomach-does-all',
    },
    {
      id: 'ds-q9',
      type: 'drag-order',
      stem: 'Place these parts in the order food meets them, from first to last.',
      tier: 'confident',
      items: [
        'Stomach',
        'Mouth',
        'Anus',
        'Small intestine',
        'Oesophagus',
        'Large intestine',
      ],
      correctOrder: [1, 4, 0, 3, 5, 2],
      xpValue: 20,
      misconceptionId: 'ds-mis-order-mixed',
    },
    {
      id: 'ds-q10',
      type: 'multiple-choice',
      stem: 'Which sentence best tells mechanical and chemical digestion apart?',
      tier: 'confident',
      options: [
        'Mechanical digestion uses enzymes; chemical digestion uses teeth.',
        'Both kinds form new, smaller chemicals from the food.',
        'Mechanical digestion only happens in the stomach; chemical digestion only happens in the mouth.',
        'Mechanical digestion makes food smaller without changing its chemicals; chemical digestion uses enzymes to break the food into new, smaller molecules.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'ds-mis-swap-mech-chem',
    },
    {
      id: 'ds-q11',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the digestive system.',
      tier: 'confident',
      svg: digestiveOverviewSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'ds-q11-mouth', x: 30, y: 18, correctLabel: 'Mouth' },
        { id: 'ds-q11-oeso', x: 30, y: 36, correctLabel: 'Oesophagus' },
        { id: 'ds-q11-stomach', x: 28, y: 60, correctLabel: 'Stomach' },
        { id: 'ds-q11-small', x: 48, y: 75, correctLabel: 'Small intestine' },
        { id: 'ds-q11-large', x: 75, y: 75, correctLabel: 'Large intestine' },
      ],
      labels: [
        'Mouth',
        'Oesophagus',
        'Stomach',
        'Small intestine',
        'Large intestine',
        'Heart',
        'Lung',
        'Liver',
      ],
      xpValue: 20,
    },
    {
      id: 'ds-q12',
      type: 'drag-drop-builder',
      stem: 'Build the path one mouthful of food takes through the gut. Drag in only the gut organs and put them in order in the build area.',
      tier: 'confident',
      parts: [
        'Mouth',
        'Oesophagus',
        'Stomach',
        'Small intestine',
        'Large intestine',
        'Heart',
        'Lung',
        'Brain',
      ],
      correctArrangement: [
        'Mouth',
        'Oesophagus',
        'Stomach',
        'Small intestine',
        'Large intestine',
      ],
      xpValue: 20,
      misconceptionId: 'ds-mis-non-gut-organs',
    },
    {
      id: 'ds-q13',
      type: 'multiple-choice',
      stem: 'A pupil claims their lunch goes "from the mouth to the heart and then to the stomach." What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing. Food really does pass through the heart on its way to the stomach.',
        'Food does not pass through the heart. The heart is part of the circulatory system, not the digestive system.',
        'Food only goes through the heart on a Sunday roast.',
        'Food passes through the heart but only after it leaves the stomach.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ds-mis-non-gut-organs',
    },
    {
      id: 'ds-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how a slice of school toast is digested.',
      tier: 'confident',
      steps: [
        'Teeth chop the toast into small pieces and saliva starts breaking down the starch.',
        'The toast ball is squeezed down the oesophagus into the stomach.',
        null,
        'Tiny food molecules pass through the small intestine wall into the blood, and water is taken back from the leftovers in the large intestine.',
      ],
      missingStepIndex: 2,
      correctStep:
        'In the stomach the toast is churned with acid and a stomach enzyme, then it passes into the small intestine where more enzymes finish digesting the starch into sugar.',
      xpValue: 20,
    },
    {
      id: 'ds-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the small intestine is small because it is short." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Small means short.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The small intestine is called small because it is narrow. It is actually about 6 metres long, much longer than the large intestine.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ds-mis-small-means-short',
    },
    {
      id: 'ds-q16',
      type: 'data-extraction',
      stem: 'Which gut organ described in the table is mainly mechanical, with little chemical digestion?',
      tier: 'confident',
      dataSource:
        'A class records four gut organs: A. Mouth (chops food and saliva starts breaking down starch). B. Oesophagus (muscles push the food ball down to the stomach). C. Stomach (acid and enzymes attack protein). D. Small intestine (enzymes finish digesting starch, fat, and protein).',
      correctAnswer: 'B',
      xpValue: 15,
      hint: 'Look for the organ that moves food without adding enzymes or acid.',
    },
    {
      id: 'ds-q17',
      type: 'numeric-entry',
      stem: 'A roast dinner in Manchester gives a Year 7 pupil 720 mg of vitamin C across three plates. The school nurse says they need 40 mg of vitamin C a day. How many days could the dinner cover, if no other food is eaten?',
      tier: 'challenge',
      correctAnswer: 18,
      xpValue: 25,
      hint: 'Divide the total milligrams by what is needed each day.',
    },
    {
      id: 'ds-q18',
      type: 'multiple-choice',
      stem: 'A pupil at a Sevenoaks school eats a school lunch. Two hours later they feel their stomach is no longer full but their gut still feels busy. Which best explains what is happening?',
      tier: 'challenge',
      options: [
        'The food has left the body through the anus already.',
        'The food has moved out of the stomach into the small intestine, where enzymes are still finishing digestion.',
        'The food has gone back into the mouth for more chewing.',
        'The body has stopped digesting because the stomach is empty.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ds-mis-stomach-does-all',
    },
    {
      id: 'ds-q19',
      type: 'numeric-entry',
      stem: 'Aisha measures the food on her Sunday lunch plate. The roast beef weighs 120 g, the potatoes weigh 200 g, and the carrots weigh 80 g. Three quarters of the meal is digested in the small intestine. What mass of food, in grams, is digested in the small intestine?',
      tier: 'challenge',
      correctAnswer: 300,
      unit: 'g',
      xpValue: 25,
      hint: 'First add the three masses, then take three quarters.',
    },
    {
      id: 'ds-q20',
      type: 'multiple-choice',
      stem: 'A doctor at a Tunbridge Wells hospital removes a short, damaged section of a patient’s small intestine. Which job will the patient most likely find harder afterwards?',
      tier: 'challenge',
      options: [
        'Chewing food into smaller pieces.',
        'Pushing food from the mouth to the stomach.',
        'Taking digested food into the blood.',
        'Forming solid waste from leftover food.',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2022, comments on responses to the human digestive system question, where students often labelled the stomach as the site where digested food enters the blood. Students confuse stomach churning with absorption. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-WRE-2022.PDF
    {
      id: 'ds-mis-stomach-absorbs',
      description: 'Digested food passes into the blood from the stomach.',
      triggerAnswer: 'stomach-absorbs',
      correction:
        'Actually, very little food passes into the blood from the stomach. Most digested food enters the blood through the wall of the small intestine.',
      reExplanation:
        'The stomach churns food and starts to digest protein, but its lining is not built to take food into the blood. The small intestine is long, with a folded wall and tiny finger-shapes that give a huge surface for absorbing food. Sugar from your bread and fat from your butter pass into the blood there, not in the stomach.',
    },
    // Source: CGP KS3 Biology Study Guide (Year 7-9), section on the digestive system, "Common mistake" callout: students sequence the stomach immediately after the mouth and forget the oesophagus.
    {
      id: 'ds-mis-stomach-after-mouth',
      description: 'After the mouth, food goes straight to the stomach.',
      triggerAnswer: 'stomach-after-mouth',
      correction:
        'In fact, food first passes down the oesophagus, a muscular tube. The stomach sits at the bottom of the oesophagus.',
      reExplanation:
        'The oesophagus is the link between the mouth and the stomach. It uses waves of muscle squeezing, called peristalsis, to push the food ball down. Without the oesophagus, food could not reach the stomach in the first place.',
    },
    // Source: AQA GCSE Biology specification 8461 section 4.2.2.1, which states the small intestine is the main site of absorption of soluble food molecules; CGP KS3 Biology likewise reserves "digestion" for the chemical and mechanical breakdown stages and "absorption" for the small intestine. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content/organisation
    {
      id: 'ds-mis-stomach-does-all',
      description: 'All digestion happens in the stomach in one go.',
      triggerAnswer: 'stomach-only',
      correction:
        'Actually, digestion is shared across the gut. The mouth starts on starch, the stomach attacks protein, and the small intestine finishes the job.',
      reExplanation:
        'Each part of the gut does a piece of the work. Saliva starts breaking down starch in the mouth. Stomach acid and enzymes attack protein. Most digestion is finished in the small intestine, where new enzymes break starch into sugar and fat into smaller pieces. The stomach is one stop on a long journey.',
    },
    // Source: CGP KS3 Biology Study Guide (Year 7-9), Common mistake box on mechanical and chemical digestion, which warns that students often treat the mouth as purely mechanical because chewing is so visible.
    {
      id: 'ds-mis-mouth-only-mechanical',
      description: 'The mouth only does mechanical digestion.',
      triggerAnswer: 'mouth-mech-only',
      correction:
        'Actually, the mouth does both kinds. Teeth chop the food (mechanical), and saliva starts breaking down starch into sugar (chemical).',
      reExplanation:
        'You can taste the chemical work yourself. Chew a piece of bread for half a minute and it begins to taste sweet. The starch in the bread has started to turn into sugar because of an enzyme in your saliva. So the mouth does both: it chops with the teeth and it digests starch with saliva.',
    },
    // Source: Edexcel GCSE Biology specification 1BI0 Topic 2 (Cells and control / digestion), which lists absorption and water reclamation as the role of the large intestine, not chemical digestion. https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-biology-spec.pdf
    {
      id: 'ds-mis-large-int-digests',
      description:
        'The large intestine digests most of the food.',
      triggerAnswer: 'large-int-digests',
      correction:
        'Actually, very little digestion happens in the large intestine. Its main job is to take water back into the body and form solid waste.',
      reExplanation:
        'By the time food reaches the large intestine, the small intestine has already digested most of it and absorbed the useful molecules. The large intestine is a water-recycling stage. It pulls water out of the leftover liquid mixture so the body keeps hydrated, and presses the rest into faeces ready to leave the body.',
    },
    // Source: OCR GCSE Biology A J247 specification, B2.1.1 The human digestive system, which sequences mouth, oesophagus, stomach, small intestine, large intestine; common ordering errors flagged in OCR Examiner Report (2019, J247/01) on the digestive system question. https://www.ocr.org.uk/Images/559831-specification-accredited-gcse-9-1-biology-a-j247.pdf
    {
      id: 'ds-mis-order-mixed',
      description:
        'The order of the gut goes mouth, stomach, small intestine, oesophagus, large intestine.',
      triggerAnswer: 'order-mixed',
      correction:
        'In fact, the oesophagus comes between the mouth and the stomach. The right order is mouth, oesophagus, stomach, small intestine, large intestine, anus.',
      reExplanation:
        'Picture food as a soft ball travelling down a long, bending tube. The mouth lets it in, the oesophagus slides it down to the stomach, the stomach churns it, the small intestine pulls the useful parts into the blood, the large intestine takes back the water, and the anus releases what is left. Same order every time.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2022, on responses to the digestive question that included non-gut organs (heart, lung, liver) in the gut path.
    {
      id: 'ds-mis-non-gut-organs',
      description:
        'The food passes through the heart, lungs, or brain on its journey through the body.',
      triggerAnswer: 'non-gut-organs',
      correction:
        'In fact, food only travels through the gut. The heart, lungs, and brain belong to other body systems and never carry food.',
      reExplanation:
        'The gut is one continuous tube from the mouth to the anus. The heart pumps blood, not food. The lungs swap gases, not food. After digestion, the small molecules pass into the blood, but the food itself never enters the heart or lungs as food. Keep the gut tube and the other body systems separate in your diagrams.',
    },
    // Source: CGP KS3 Biology Study Guide, "Common mistake" box on the small intestine: students assume "small" refers to length, when it refers to the narrow diameter.
    {
      id: 'ds-mis-small-means-short',
      description: 'The small intestine is called small because it is short.',
      triggerAnswer: 'small-short',
      correction:
        'Actually, the small intestine is called small because it is narrow. It is about 6 metres long, much longer than the large intestine.',
      reExplanation:
        'The small intestine is the longest part of the gut, but its diameter is small, only a few centimetres across. The large intestine is much shorter (about 1.5 metres) but wider. The names compare width, not length. The long, narrow shape of the small intestine gives it a huge surface for absorbing food.',
    },
    // Authored, no external source: classroom-observed Year 7 slip of swapping the descriptions of mechanical and chemical digestion when both are introduced in one lesson.
    {
      id: 'ds-mis-swap-mech-chem',
      description:
        'Mechanical digestion uses enzymes and chemical digestion uses teeth.',
      triggerAnswer: 'swap-mech-chem',
      correction:
        'In fact, mechanical digestion uses physical force (teeth, churning) and chemical digestion uses enzymes to break food into new, smaller chemicals.',
      reExplanation:
        'A simple test sorts them. If the food is just smaller pieces of the same thing, that is mechanical (the teeth do this). If new, tinier molecules have formed, that is chemical (enzymes do this). The mouth does both at once: teeth chop while saliva digests starch.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}


export const bodySystemsZoneNodes: SkillNode[] = [digestiveSystem]

export const bodySystemsZone: Zone = {
  id: 'biology-body-systems',
  name: 'Body Systems',
  realm: 'vitalia',
  nodeIds: [digestiveSystem.id],
}
