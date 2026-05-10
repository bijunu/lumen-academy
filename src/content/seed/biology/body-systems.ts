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

// =============================================================================
// Node 2: Circulatory System (Core, biology-body-systems-circulatory)
// =============================================================================

const circulatoryOverviewSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The double circulation: lung loop and body loop</text>
  <ellipse cx="200" cy="100" rx="74" ry="40" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="200" y="100" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Lungs</text>
  <text x="200" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(gas exchange)</text>
  <path d="M 280 220 L 380 220 L 410 180 L 440 220 L 410 260 Z" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="360" y="225" font-family="sans-serif" font-size="14" fill="#1F2937">Heart</text>
  <ellipse cx="200" cy="320" rx="100" ry="44" fill="#FCD34D" stroke="#92400E" stroke-width="3" />
  <text x="200" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Body cells</text>
  <text x="200" y="336" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(muscles, brain, gut, skin)</text>
  <path d="M 274 132 Q 320 170 350 198" stroke="#1D4ED8" stroke-width="4" fill="none" />
  <polygon points="346,200 358,196 354,208" fill="#1D4ED8" />
  <path d="M 350 250 Q 320 280 226 290" stroke="#DC2626" stroke-width="4" fill="none" />
  <polygon points="232,294 220,292 226,302" fill="#DC2626" />
  <path d="M 174 290 Q 130 250 130 130" stroke="#1D4ED8" stroke-width="4" fill="none" />
  <polygon points="126,134 134,124 138,138" fill="#1D4ED8" />
  <path d="M 226 130 Q 280 130 360 220" stroke="#DC2626" stroke-width="4" fill="none" />
  <text x="500" y="120" font-family="sans-serif" font-size="13" fill="#DC2626">Red lines: blood</text>
  <text x="500" y="135" font-family="sans-serif" font-size="13" fill="#DC2626">rich in oxygen</text>
  <text x="500" y="160" font-family="sans-serif" font-size="13" fill="#1D4ED8">Blue lines: blood</text>
  <text x="500" y="175" font-family="sans-serif" font-size="13" fill="#1D4ED8">low in oxygen</text>
</svg>
`.trim()

const vesselSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three kinds of blood vessel</text>
  <text x="120" y="64" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Artery</text>
  <ellipse cx="120" cy="170" rx="80" ry="80" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="6" />
  <ellipse cx="120" cy="170" rx="20" ry="20" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="2" />
  <text x="120" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Thick wall, narrow lumen</text>
  <text x="120" y="296" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Carries blood AWAY from</text>
  <text x="120" y="310" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">the heart at high pressure</text>
  <text x="300" y="64" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Vein</text>
  <ellipse cx="300" cy="170" rx="80" ry="80" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <ellipse cx="300" cy="170" rx="50" ry="50" fill="#FFFFFF" stroke="#1D4ED8" stroke-width="2" />
  <line x1="280" y1="160" x2="320" y2="160" stroke="#1D4ED8" stroke-width="2" />
  <line x1="280" y1="180" x2="320" y2="180" stroke="#1D4ED8" stroke-width="2" />
  <text x="300" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Thinner wall, wide lumen,</text>
  <text x="300" y="296" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">has valves. Carries blood</text>
  <text x="300" y="310" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">BACK TO the heart</text>
  <text x="480" y="64" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Capillary</text>
  <ellipse cx="480" cy="170" rx="40" ry="40" fill="#FCE7F3" stroke="#BE185D" stroke-width="2" />
  <ellipse cx="480" cy="170" rx="32" ry="32" fill="#FFFFFF" stroke="#BE185D" stroke-width="1" />
  <text x="480" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">One cell thick. Lets gases</text>
  <text x="480" y="296" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">and food pass between</text>
  <text x="480" y="310" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">blood and body cells</text>
</svg>
`.trim()

const bloodSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">What is in a drop of blood</text>
  <ellipse cx="300" cy="220" rx="240" ry="140" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="3" />
  <text x="300" y="380" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">A drop of blood is mostly plasma, with cells floating in it.</text>
  <ellipse cx="220" cy="200" rx="22" ry="14" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="260" cy="240" rx="22" ry="14" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="180" cy="250" rx="22" ry="14" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="320" cy="200" rx="22" ry="14" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="200" cy="160" rx="22" ry="14" fill="#DC2626" stroke="#7F1D1D" stroke-width="2" />
  <circle cx="370" cy="170" r="20" fill="#FFFFFF" stroke="#1F2937" stroke-width="2" />
  <circle cx="370" cy="170" r="8" fill="#A78BFA" stroke="#5B21B6" stroke-width="2" />
  <circle cx="430" cy="240" r="22" fill="#FFFFFF" stroke="#1F2937" stroke-width="2" />
  <circle cx="430" cy="240" r="9" fill="#A78BFA" stroke="#5B21B6" stroke-width="2" />
  <rect x="380" y="270" width="10" height="6" fill="#FBBF24" stroke="#92400E" stroke-width="1" />
  <rect x="395" y="280" width="10" height="6" fill="#FBBF24" stroke="#92400E" stroke-width="1" />
  <rect x="372" y="300" width="10" height="6" fill="#FBBF24" stroke="#92400E" stroke-width="1" />
  <text x="60" y="120" font-family="sans-serif" font-size="13" fill="#DC2626">Red cells: carry oxygen</text>
  <text x="60" y="138" font-family="sans-serif" font-size="13" fill="#1F2937">White cells: fight germs</text>
  <text x="60" y="156" font-family="sans-serif" font-size="13" fill="#92400E">Platelets: clot wounds</text>
  <text x="60" y="174" font-family="sans-serif" font-size="13" fill="#7F1D1D">Plasma: liquid that carries</text>
  <text x="60" y="190" font-family="sans-serif" font-size="13" fill="#7F1D1D">food, waste and the cells</text>
</svg>
`.trim()

export const circulatorySystem: SkillNode = {
  id: 'biology-body-systems-circulatory',
  title: 'The Circulatory System',
  description:
    'Meet the heart, the blood vessels, and the four parts of blood. Read the double circulation as a lung loop plus a body loop, and tell arteries, veins, and capillaries apart by their walls and their job. Distractor traps target the classic vein-and-artery direction confusion.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'core',
  prerequisites: ['biology-body-systems-digestive'],
  curriculum: {
    ks3Objective:
      'The structure and functions of the gas exchange system in humans, including adaptations to function; the structure and functions of the human skeleton, to include support, protection, movement and making blood cells; the consequences of imbalances in the diet; biomechanics; the role of muscles, joints and the heart in transport.',
    awardingBodies: {
      aqa: '4.2.2.2 The heart and blood vessels (GCSE Biology 8461). Cover the structure of the heart, arteries, veins, capillaries, and the components of blood.',
      edexcel: 'CB2c The circulatory system (GCSE Biology 1BI0, Topic 2). Describe the double circulatory system and the structures of the heart and blood vessels.',
      ocr: 'B2.1.2 Transport in animals (GCSE Biology A J247). Describe the structure and function of the heart, blood vessels, and blood.',
    },
  },
  scenes: [
    {
      id: 'cs-scene-double',
      title: 'The Double Circulation',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the loop to read what is being moved and which way the blood flows.',
      data: {
        svg: circulatoryOverviewSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cs-hs-lungs',
            x: 33,
            y: 25,
            label: 'Lungs',
            description:
              'Where blood picks up oxygen from the air and drops off carbon dioxide.',
          },
          {
            id: 'cs-hs-heart',
            x: 60,
            y: 55,
            label: 'Heart',
            description:
              'The pump in the middle. Blood flows through the heart twice on every full trip around the body.',
          },
          {
            id: 'cs-hs-body',
            x: 33,
            y: 80,
            label: 'Body cells',
            description:
              'Muscles, brain, gut wall, and skin. They take in oxygen and food from the blood and pass back carbon dioxide and waste.',
          },
          {
            id: 'cs-hs-lung-loop',
            x: 50,
            y: 30,
            label: 'Lung loop',
            description:
              'Heart to lungs and back. Blood is low in oxygen on the way out, rich in oxygen on the way back.',
          },
          {
            id: 'cs-hs-body-loop',
            x: 50,
            y: 80,
            label: 'Body loop',
            description:
              'Heart to body cells and back. Blood is rich in oxygen on the way out, low in oxygen on the way back.',
          },
        ],
      },
    },
    {
      id: 'cs-scene-vessels',
      title: 'Arteries, Veins, and Capillaries',
      type: 'labelled-diagram',
      instructions:
        'Click each cross section to read what makes that vessel different.',
      data: {
        svg: vesselSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cs-vs-artery',
            x: 20,
            y: 16,
            label: 'Artery',
            description:
              'Thick, muscular wall and a narrow lumen. Carries blood AWAY from the heart at high pressure.',
          },
          {
            id: 'cs-vs-vein',
            x: 50,
            y: 16,
            label: 'Vein',
            description:
              'Thinner wall, wide lumen, has valves to stop blood flowing the wrong way. Carries blood BACK TO the heart at low pressure.',
          },
          {
            id: 'cs-vs-capillary',
            x: 80,
            y: 16,
            label: 'Capillary',
            description:
              'Tiny vessel with a wall just one cell thick. Lets oxygen and food pass through to the body cells, and lets carbon dioxide pass back.',
          },
        ],
      },
    },
    {
      id: 'cs-scene-blood',
      title: 'What Blood Is Made Of',
      type: 'labelled-diagram',
      instructions:
        'Click each component to read its job in the blood.',
      data: {
        svg: bloodSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cs-bl-red',
            x: 33,
            y: 50,
            label: 'Red blood cells',
            description:
              'Tiny disc-shaped cells. They carry oxygen from the lungs to every body cell.',
          },
          {
            id: 'cs-bl-white',
            x: 67,
            y: 50,
            label: 'White blood cells',
            description:
              'Larger cells with a nucleus. They fight germs that get into the body.',
          },
          {
            id: 'cs-bl-platelets',
            x: 65,
            y: 73,
            label: 'Platelets',
            description:
              'Tiny cell fragments. They clump together to plug a wound and start a clot.',
          },
          {
            id: 'cs-bl-plasma',
            x: 50,
            y: 30,
            label: 'Plasma',
            description:
              'A pale yellow liquid. It carries the cells, dissolved food, waste, and warmth around the body.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cs-worked-1',
      title: 'Tracing one drop of blood from the heart and back again',
      steps: [
        {
          explanation:
            'A drop of blood leaves the right side of the heart on the body loop side, low in oxygen. It needs to pick up oxygen at the lungs.',
        },
        {
          explanation:
            'Step 1: blood is pumped from the heart to the lungs. It passes through tiny capillaries around the air sacs.',
        },
        {
          explanation:
            'Step 2: in the lung capillaries, oxygen passes from the air into the blood. The blood is now rich in oxygen.',
        },
        {
          explanation:
            'Step 3: the blood returns to the left side of the heart, ready to be pumped out again.',
        },
        {
          explanation:
            'Step 4: the heart pumps the oxygen-rich blood out to the body. It travels through arteries to the muscles, brain, and gut.',
        },
        {
          explanation:
            'Step 5: in the body capillaries, oxygen and food pass to the body cells. Carbon dioxide and waste pass back into the blood.',
        },
        {
          explanation:
            'Step 6: the blood returns through veins to the right side of the heart. The drop has now gone twice through the heart on one full trip.',
        },
      ],
    },
    {
      id: 'cs-worked-2',
      title: 'Telling an artery from a vein',
      steps: [
        {
          explanation:
            'A pupil sees two cross sections under a microscope. One has a thick wall and a narrow lumen. The other has a thin wall, a wide lumen, and a valve. Which is which?',
        },
        {
          explanation:
            'Use the wall first. A thick, muscular wall is built to handle high pressure. That fits an artery, because the heart pumps blood out at high pressure.',
        },
        {
          explanation:
            'Use the lumen next. A wide lumen with a thin wall fits a vein. The blood is travelling back to the heart slowly, at low pressure, so the wall does not need to be thick.',
        },
        {
          explanation:
            'Use the valve last. Valves are found in veins. They stop the blood from flowing backwards when it is climbing up against gravity, for example from your legs.',
        },
        {
          explanation:
            'So the thick-walled, narrow-lumen vessel is an artery. The thin-walled, wide-lumen vessel with a valve is a vein.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cs-q1',
      type: 'multiple-choice',
      stem: 'Which kind of blood vessel carries blood away from the heart?',
      tier: 'core',
      options: ['Vein', 'Artery', 'Capillary', 'Nerve'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cs-mis-vein-artery-direction',
    },
    {
      id: 'cs-q2',
      type: 'multiple-choice',
      stem: 'What is the main job of red blood cells?',
      tier: 'core',
      options: [
        'Fight germs that get into the body.',
        'Clot the blood at a cut.',
        'Carry food around the body.',
        'Carry oxygen from the lungs to body cells.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cs-mis-red-fight-germs',
    },
    {
      id: 'cs-q3',
      type: 'multiple-choice',
      stem: 'Which kind of vessel has a wall only one cell thick?',
      tier: 'core',
      options: ['Artery', 'Vein', 'Capillary', 'Heart valve'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cs-mis-capillary-too-small',
    },
    {
      id: 'cs-q4',
      type: 'multiple-choice',
      stem: 'What is plasma?',
      tier: 'core',
      options: [
        'The pale yellow liquid that carries the blood cells, dissolved food, and waste.',
        'A red cell with no nucleus.',
        'A white cell that fights germs.',
        'A small cell fragment that helps clot a cut.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cs-mis-plasma-is-cell',
    },
    {
      id: 'cs-q5',
      type: 'numeric-entry',
      stem: 'Through how many sides of the heart does each drop of blood pass on one full trip around the body?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Once for the lung loop, once for the body loop.',
      misconceptionId: 'cs-mis-single-circulation',
    },
    {
      id: 'cs-q6',
      type: 'numeric-entry',
      stem: 'A pupil’s heart beats 75 times in one minute. How many times will it beat in 4 minutes?',
      tier: 'core',
      correctAnswer: 300,
      xpValue: 10,
      hint: 'Multiply beats per minute by the number of minutes.',
    },
    {
      id: 'cs-q7',
      type: 'numeric-entry',
      stem: 'How many of these four blood parts are whole cells: red blood cells, plasma, white blood cells, platelets?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Plasma is a liquid. Platelets are fragments of cells, not whole cells.',
      misconceptionId: 'cs-mis-platelets-are-cells',
    },
    {
      id: 'cs-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "blood passes through the heart only once on each trip around the body." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. The heart sees each drop of blood once per trip.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Humans have a double circulation, so each drop of blood passes through the heart twice on each full trip: once for the lungs and once for the body.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cs-mis-single-circulation',
    },
    {
      id: 'cs-q9',
      type: 'multiple-choice',
      stem: 'Which feature of a vein is missing from an artery?',
      tier: 'confident',
      options: [
        'A thick muscular wall.',
        'A narrow lumen.',
        'Valves that stop blood flowing backwards.',
        'Red blood cells inside.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cs-mis-arteries-have-valves',
    },
    {
      id: 'cs-q10',
      type: 'multiple-choice',
      stem: 'Why does an artery have a thicker, more muscular wall than a vein?',
      tier: 'confident',
      options: [
        'Because veins are colder than arteries.',
        'Because arteries carry blood at higher pressure straight from the heart, and the wall must not stretch and burst.',
        'Because arteries carry digested food and veins do not.',
        'Because arteries are deeper in the body.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cs-mis-vein-artery-direction',
    },
    {
      id: 'cs-q11',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the double-circulation diagram.',
      tier: 'confident',
      svg: circulatoryOverviewSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'cs-q11-lungs', x: 33, y: 25, correctLabel: 'Lungs' },
        { id: 'cs-q11-heart', x: 60, y: 55, correctLabel: 'Heart' },
        { id: 'cs-q11-body', x: 33, y: 80, correctLabel: 'Body cells' },
      ],
      labels: [
        'Lungs',
        'Heart',
        'Body cells',
        'Stomach',
        'Liver',
        'Brain',
        'Kidney',
      ],
      xpValue: 20,
    },
    {
      id: 'cs-q12',
      type: 'drag-order',
      stem: 'Place these stops in the order one drop of blood passes through them, starting from the right side of the heart.',
      tier: 'confident',
      items: [
        'Body cells in the muscles and gut.',
        'Lungs (gas exchange).',
        'Right side of the heart.',
        'Left side of the heart.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      misconceptionId: 'cs-mis-single-circulation',
    },
    {
      id: 'cs-q13',
      type: 'drag-drop-builder',
      stem: 'Build the four components of blood. Drag in only the items that belong in a drop of blood.',
      tier: 'confident',
      parts: [
        'Red blood cells',
        'White blood cells',
        'Platelets',
        'Plasma',
        'Bone',
        'Nerve',
        'Mucus',
      ],
      correctArrangement: [
        'Red blood cells',
        'White blood cells',
        'Platelets',
        'Plasma',
      ],
      xpValue: 20,
    },
    {
      id: 'cs-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this trip of one drop of blood.',
      tier: 'confident',
      steps: [
        'A drop of blood leaves the right side of the heart, low in oxygen.',
        'It travels in an artery to the lungs.',
        null,
        'The drop returns to the left side of the heart through a vein.',
        'It is then pumped out to the body cells through another artery.',
      ],
      missingStepIndex: 2,
      correctStep:
        'In the lung capillaries, oxygen passes from the air into the blood, and carbon dioxide passes from the blood into the air.',
      xpValue: 20,
    },
    {
      id: 'cs-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes that "all veins carry blood that is low in oxygen, and all arteries carry blood that is rich in oxygen." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Veins are always low in oxygen and arteries are always high in oxygen.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The artery from the heart to the lungs carries blood low in oxygen, and the vein from the lungs to the heart carries blood rich in oxygen. Direction sets the name, not the oxygen level.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cs-mis-vessel-equals-oxygen',
    },
    {
      id: 'cs-q16',
      type: 'data-extraction',
      stem: 'Which blood vessel in the table fits an artery best?',
      tier: 'confident',
      dataSource:
        'A school class records four blood vessels under a microscope: A. Thin wall, wide lumen, has a valve. B. Thick wall, narrow lumen, no valve. C. Wall just one cell thick, no lumen visible. D. Wall made of bone-like rings.',
      correctAnswer: 'B',
      xpValue: 15,
      hint: 'An artery handles high pressure straight from the heart.',
    },
    {
      id: 'cs-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 pupil counts 18 heartbeats across a 15 second window at a school sports day in Manchester. What is the heart rate in beats per minute?',
      tier: 'challenge',
      correctAnswer: 72,
      xpValue: 25,
      hint: 'There are 60 seconds in a minute. Scale the count up to one minute.',
    },
    {
      id: 'cs-q18',
      type: 'numeric-entry',
      stem: 'A patient has 5 litres of blood. Doctors at a Sevenoaks hospital test that 45% of the blood by volume is made of red blood cells. How many millilitres of red blood cells does the patient have?',
      tier: 'challenge',
      correctAnswer: 2250,
      unit: 'ml',
      xpValue: 25,
      hint: 'First convert 5 litres to millilitres, then take 45% of the result.',
    },
    {
      id: 'cs-q19',
      type: 'multiple-choice',
      stem: 'A doctor finds that one of the heart valves between the left side of the heart and the body artery is leaky. Which problem is most likely?',
      tier: 'challenge',
      options: [
        'Some blood will flow backwards into the heart instead of out to the body.',
        'The patient will run out of red blood cells in a few hours.',
        'The lungs will fill with food.',
        'The capillaries will turn into arteries.',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    {
      id: 'cs-q20',
      type: 'multiple-choice',
      stem: 'A nurse explains that a patient with a low red blood cell count gets out of breath when climbing stairs in the Lake District. Which sentence best explains this?',
      tier: 'challenge',
      options: [
        'The patient breathes in less oxygen with each breath.',
        'The lungs are too small to take in air.',
        'With fewer red cells, less oxygen reaches the muscles, so the patient must breathe faster to keep up with the demand of climbing.',
        'The patient has too many white blood cells fighting the air.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cs-mis-red-fight-germs',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2022, on the question about arteries and veins where students often reversed the direction of flow. https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-WRE-2022.PDF
    {
      id: 'cs-mis-vein-artery-direction',
      description: 'Veins carry blood away from the heart, and arteries carry blood back.',
      triggerAnswer: 'vein-artery-swap',
      correction:
        'Actually, arteries carry blood AWAY from the heart, and veins carry blood BACK TO the heart. The names go with the direction, not the oxygen level.',
      reExplanation:
        'A useful memory trick: arteries carry blood AWAY (both start with A). The heart pumps hard, so the blood leaves at high pressure through arteries. It returns slowly through veins. To remember the wall thickness, picture a fire hose (artery, thick wall, high pressure) and a garden tube (vein, thin wall, low pressure).',
    },
    // Source: AQA GCSE Biology specification 8461 section 4.2.2.2 The heart and blood vessels, which describes red blood cells as the oxygen carrier and white blood cells as the immune defence. Conflation of the two is flagged in the AQA examiner report on Question 3 of the 2022 paper.
    {
      id: 'cs-mis-red-fight-germs',
      description: 'Red blood cells fight germs that get into the body.',
      triggerAnswer: 'red-fight-germs',
      correction:
        'In fact, white blood cells fight germs. Red blood cells carry oxygen from the lungs to the body cells.',
      reExplanation:
        'Red and white blood cells share the blood but do different jobs. Red cells contain a red pigment called haemoglobin that holds onto oxygen. White cells are larger, contain a nucleus, and surround or destroy germs that enter the body. If you pricked your finger and looked under a microscope, the red cells would be far more common than the white cells.',
    },
    // Source: CGP KS3 Biology Study Guide (Year 7-9), section on the human heart, "Common mistake" callout: students think single circulation (heart-body-heart) rather than double circulation (heart-lungs-heart-body-heart).
    {
      id: 'cs-mis-single-circulation',
      description:
        'Each drop of blood passes through the heart only once on a trip around the body.',
      triggerAnswer: 'single-circulation',
      correction:
        'Actually, humans have a double circulation. Each drop of blood passes through the heart twice on a full trip: once for the lungs, then again for the body.',
      reExplanation:
        'Picture two loops that share the heart in the middle. The lung loop carries blood from the heart to the lungs to pick up oxygen, then back to the heart. The body loop carries that oxygen-rich blood from the heart out to the muscles and brain, then back to the heart. So the heart sees each drop of blood twice per trip, not once.',
    },
    // Source: AQA GCSE Biology specification 8461, glossary entries for plasma and red blood cells, which clearly distinguish plasma (liquid) from cells.
    {
      id: 'cs-mis-plasma-is-cell',
      description: 'Plasma is a kind of blood cell.',
      triggerAnswer: 'plasma-cell',
      correction:
        'Actually, plasma is the liquid part of the blood. The cells (red, white, and platelets) float in the plasma.',
      reExplanation:
        'If you spin a blood sample in a centrifuge, the cells sink to the bottom and the plasma stays on top as a pale yellow liquid. Plasma is mainly water, with food, waste, and warmth dissolved in it. Without the plasma there would be nothing to carry the cells around the body.',
    },
    // Source: Edexcel GCSE Biology specification 1BI0 Topic 2, on the structure of arteries and veins, which lists valves as a feature of veins only because of the low pressure of returning blood. https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-biology-spec.pdf
    {
      id: 'cs-mis-arteries-have-valves',
      description: 'Arteries have valves to stop blood flowing backwards.',
      triggerAnswer: 'arteries-valves',
      correction:
        'In fact, only veins have valves along their length. Arteries do not need them because the heart pushes blood forward at high pressure.',
      reExplanation:
        'Blood in arteries shoots out fast under high pressure, so it does not flow backwards on its own. Blood in veins moves slowly at low pressure, often against gravity (think of veins in your legs). Valves in the veins act like one-way gates: open when the blood moves toward the heart, closed when it tries to slip back. The heart itself has valves at its exits, but the artery walls beyond do not.',
    },
    // Source: CGP KS3 Biology Study Guide, Common mistake box on circulation, which warns students that the artery to the lungs (pulmonary artery) carries low-oxygen blood and the vein from the lungs (pulmonary vein) carries high-oxygen blood, breaking the simple "artery = oxygenated" rule.
    {
      id: 'cs-mis-vessel-equals-oxygen',
      description:
        'All arteries carry blood rich in oxygen, and all veins carry blood low in oxygen.',
      triggerAnswer: 'vessel-equals-oxygen',
      correction:
        'Actually, the artery from the heart to the lungs carries blood low in oxygen, and the vein from the lungs to the heart carries blood rich in oxygen. Direction sets the name.',
      reExplanation:
        'Most arteries do carry oxygen-rich blood and most veins carry oxygen-low blood, but the lung loop is the exception. The artery to the lungs is sending blood off to pick up oxygen, so it is low in oxygen. The vein from the lungs is bringing back blood that has just picked up oxygen, so it is rich in oxygen. The rule artery = away from heart and vein = back to heart still works.',
    },
    // Source: OCR GCSE Biology A J247 specification, section B2.1.2 Transport in animals, on the role of platelets in clotting. Common Year 7 confusion: treating platelets as whole cells.
    {
      id: 'cs-mis-platelets-are-cells',
      description: 'Platelets are whole cells with a nucleus.',
      triggerAnswer: 'platelets-cells',
      correction:
        'Actually, platelets are tiny fragments of cells, not whole cells. They have no nucleus.',
      reExplanation:
        'Under a microscope platelets look like small blobs scattered between the bigger blood cells. They form by breaking off larger cells in the bone marrow. When you cut yourself, platelets clump at the wound and start a clot. Without them a small cut would keep bleeding for a long time.',
    },
    // Source: CGP KS3 Biology, "Common mistake" on capillaries: students confuse the small size with weakness; in fact the thin wall is the feature that lets gases and food cross.
    {
      id: 'cs-mis-capillary-too-small',
      description:
        'Capillaries are too small to do an important job.',
      triggerAnswer: 'capillary-tiny',
      correction:
        'In fact, the very small size of a capillary is what makes it important. Its wall is just one cell thick, so oxygen and food can pass through to the body cells.',
      reExplanation:
        'Imagine a wide artery as a motorway. Oxygen cannot leave the motorway. Capillaries are like tiny country lanes that reach every house in the village. Their walls are so thin that oxygen, food, and waste can pass straight through to the body cells. Every working organ, from your brain to your big toe, is fed by capillaries.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}


export const bodySystemsZoneNodes: SkillNode[] = [digestiveSystem, circulatorySystem]

export const bodySystemsZone: Zone = {
  id: 'biology-body-systems',
  name: 'Body Systems',
  realm: 'vitalia',
  nodeIds: [digestiveSystem.id, circulatorySystem.id],
}
