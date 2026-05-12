import type { SkillNode } from '@/types/content'

export const crystallisationCooling: SkillNode = {
  id: 'chemistry-separating-crystallisation-cooling',
  title: 'Crystallisation by Cooling',
  description:
    'Recover a dissolved solid from a hot saturated solution by letting it cool. As the temperature falls, the solubility of the solute drops, so the solution can no longer hold all of it in. The excess comes out as solid crystals on the bottom of the dish or hanging from a thread. Compare this with evaporative crystallisation and reason about when each is the right choice.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'Crystallisation as a technique to recover a dissolved solid by cooling a hot saturated solution; comparing cooling crystallisation with evaporative crystallisation.',
    awardingBodies: {
      aqa: '4.10.1.2 Filtration and crystallisation; cooling crystallisation method (8462)',
      edexcel: 'Topic 1.43 Crystallisation by cooling a hot saturated solution; apparatus and technique (1CH0)',
      ocr: 'C2.1g Recover crystals by cooling a hot saturated solution (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-cc-apparatus',
      title: 'Cooling Crystallisation: How the Apparatus Fits Together',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the school cooling crystallisation set-up to name the part and read what it does.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><rect x="0" y="220" width="320" height="20" fill="#D6D3D1"/><g><path d="M 70 80 L 70 215 L 250 215 L 250 80 z" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 75 95 L 75 210 L 245 210 L 245 95" fill="#BFDBFE" opacity="0.6"/><text x="280" y="150" font-size="8" fill="#1E3A8A">hot saturated</text><text x="280" y="160" font-size="8" fill="#1E3A8A">solution</text></g><g fill="#1E3A8A"><rect x="120" y="200" width="14" height="8"/><rect x="150" y="198" width="12" height="10"/><rect x="180" y="200" width="14" height="8"/><rect x="135" y="190" width="10" height="8"/><rect x="170" y="190" width="12" height="8"/></g><g><line x1="160" y1="40" x2="160" y2="100" stroke="#7C2D12" stroke-width="1.2"/><circle cx="160" cy="35" r="6" fill="#FACC15" stroke="#7C2D12" stroke-width="0.8"/><line x1="155" y1="100" x2="165" y2="100" stroke="#7C2D12" stroke-width="1.2"/><text x="280" y="50" font-size="8" fill="#7C2D12">thread with seed</text><text x="280" y="60" font-size="8" fill="#7C2D12">crystal</text></g><g stroke="#3B82F6" stroke-width="0.6" fill="none"><path d="M 30 130 q 10 -6 0 -12"/><path d="M 30 150 q 10 -6 0 -12"/><path d="M 30 170 q 10 -6 0 -12"/></g><text x="22" y="115" font-size="8" fill="#1E3A8A">cool air</text><text x="22" y="190" font-size="8" fill="#1E3A8A">around dish</text><text x="160" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">COOLING CRYSTALLISATION</text></svg>',
        hotspots: [
          {
            id: 'csm-cc-h-saturated',
            x: 50,
            y: 55,
            label: 'Hot saturated solution',
            description:
              'A hot solution that already holds as much solute as it can at the high temperature. At 60 C, copper sulfate water can hold up to about 40 g per 100 g of water. Any more solute will not dissolve.',
          },
          {
            id: 'csm-cc-h-dish',
            x: 50,
            y: 75,
            label: 'Crystallising dish',
            description:
              'A shallow open dish with a wide top. The wide opening lets air carry heat away from the solution at a steady, gentle rate so that it cools slowly.',
          },
          {
            id: 'csm-cc-h-seed',
            x: 50,
            y: 18,
            label: 'Seed crystal on a thread',
            description:
              'An optional small crystal of the same solute, hung from a pencil by a thread. The cooling solute starts to lock onto this seed and a single large crystal can grow over hours or days.',
          },
          {
            id: 'csm-cc-h-cool-air',
            x: 12,
            y: 65,
            label: 'Cool surrounding air',
            description:
              'The lab air is at about 20 C. Heat moves from the warmer solution into the cooler air, so the solution temperature falls steadily without a heater being used.',
          },
          {
            id: 'csm-cc-h-crystals',
            x: 50,
            y: 90,
            label: 'Crystals on the dish floor',
            description:
              'As the solution cools, the amount of solute it can hold drops. The excess solute comes out of solution as solid crystals that settle on the bottom of the dish.',
          },
          {
            id: 'csm-cc-h-mother',
            x: 78,
            y: 70,
            label: 'Mother liquor left behind',
            description:
              'The clear liquid that remains above the crystals at the end is called the mother liquor. It still holds the amount of solute that the cooler solution can carry, plus any impurities.',
          },
        ],
      },
    },
    {
      id: 'csm-cc-solubility',
      title: 'Why Cooling Makes Crystals: The Solubility Curve',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the solubility of copper sulfate falls as the solution cools, and why the excess solute has to come out as crystals.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><g stroke="#475569" stroke-width="1" fill="none"><line x1="50" y1="20" x2="50" y2="190"/><line x1="50" y1="190" x2="300" y2="190"/></g><g font-size="9" fill="#475569"><text x="45" y="193" text-anchor="end">0</text><text x="45" y="150" text-anchor="end">22</text><text x="45" y="100" text-anchor="end">40</text><text x="45" y="60" text-anchor="end">60</text><text x="100" y="205" text-anchor="middle">20</text><text x="200" y="205" text-anchor="middle">60</text><text x="280" y="205" text-anchor="middle">100</text><text x="175" y="218" text-anchor="middle">Temperature, C</text><text x="20" y="105" text-anchor="middle" transform="rotate(-90 20 105)">Solubility, g per 100 g water</text></g><g stroke="#94A3B8" stroke-dasharray="2 2" stroke-width="0.6"><line x1="100" y1="150" x2="100" y2="190"/><line x1="50" y1="150" x2="100" y2="150"/><line x1="200" y1="100" x2="200" y2="190"/><line x1="50" y1="100" x2="200" y2="100"/></g><polyline points="60,175 100,150 150,125 200,100 250,70 285,50" fill="none" stroke="#1E3A8A" stroke-width="2"/><g fill="#1E3A8A"><circle cx="100" cy="150" r="3"/><circle cx="200" cy="100" r="3"/></g><g font-size="8" fill="#1E3A8A"><text x="110" y="148">22 g at 20 C</text><text x="210" y="98">40 g at 60 C</text></g><g><rect x="225" y="135" width="65" height="48" rx="3" fill="#FEF3C7" stroke="#1E3A8A" stroke-width="0.6"/><text x="257" y="148" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">40 minus 22</text><text x="257" y="160" text-anchor="middle" font-size="8" fill="#1E3A8A">equals 18 g</text><text x="257" y="173" text-anchor="middle" font-size="8" fill="#1E3A8A">crystals out</text></g></svg>',
        hotspots: [
          {
            id: 'csm-cc-h-hot',
            x: 65,
            y: 45,
            label: '60 C: high solubility',
            description:
              'At 60 C the solution can hold up to 40 g of copper sulfate per 100 g of water. Particles have more energy and the dissolved ions are kept apart in the water.',
          },
          {
            id: 'csm-cc-h-cool',
            x: 32,
            y: 70,
            label: '20 C: lower solubility',
            description:
              'At 20 C the solution can only hold up to 22 g of copper sulfate per 100 g of water. The water cannot keep so many ions apart at the lower temperature.',
          },
          {
            id: 'csm-cc-h-gap',
            x: 80,
            y: 75,
            label: 'The excess comes out',
            description:
              'If you cool 100 g of water saturated at 60 C down to 20 C, the difference, 40 g minus 22 g, equals 18 g. That 18 g cannot stay dissolved, so it leaves the solution as solid crystals.',
          },
          {
            id: 'csm-cc-h-curve',
            x: 50,
            y: 28,
            label: 'The whole curve',
            description:
              'The blue line is the solubility curve for copper sulfate. It rises sharply with temperature, which is exactly why cooling is a good way to recover this solute from solution.',
          },
        ],
      },
    },
    {
      id: 'csm-cc-uk-uses',
      title: 'Three UK Uses of Cooling Crystallisation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how cooling crystallisation is used in a school lab, a kitchen, and an old industrial process.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="20" width="95" height="180" rx="4" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="62" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SCHOOL LAB</text><rect x="30" y="55" width="65" height="60" rx="6" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><g fill="#1E3A8A"><rect x="40" y="100" width="10" height="8"/><rect x="55" y="100" width="12" height="8"/><rect x="72" y="102" width="10" height="6"/></g><text x="62" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">copper sulfate</text><text x="62" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A">blue crystals</text><text x="62" y="175" text-anchor="middle" font-size="7" fill="#1E3A8A">cool slowly,</text><text x="62" y="186" text-anchor="middle" font-size="7" fill="#1E3A8A">grow large</text></g><g><rect x="115" y="20" width="95" height="180" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="162" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">KITCHEN HONEY</text><rect x="130" y="55" width="65" height="80" rx="5" fill="#FACC15" stroke="#7C2D12" stroke-width="0.8" opacity="0.7"/><g fill="#FFFFFF" stroke="#7C2D12" stroke-width="0.4"><circle cx="145" cy="80" r="2.5"/><circle cx="162" cy="100" r="2.5"/><circle cx="180" cy="85" r="2.5"/><circle cx="155" cy="115" r="2.5"/><circle cx="175" cy="120" r="2.5"/></g><text x="162" y="155" text-anchor="middle" font-size="7" fill="#7C2D12">cold autumn pantry</text><text x="162" y="166" text-anchor="middle" font-size="7" fill="#7C2D12">glucose comes out</text><text x="162" y="183" text-anchor="middle" font-size="7" fill="#7C2D12">honey goes solid</text></g><g><rect x="215" y="20" width="95" height="180" rx="4" fill="#E9D5FF" stroke="#581C87" stroke-width="1"/><text x="262" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#581C87">DYEWORKS ALUM</text><rect x="230" y="55" width="65" height="80" rx="4" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"/><g fill="#A78BFA"><polygon points="245,90 252,80 259,90 252,100"/><polygon points="265,100 272,90 279,100 272,110"/><polygon points="248,115 255,105 262,115 255,125"/></g><text x="262" y="155" text-anchor="middle" font-size="7" fill="#581C87">Victorian dye vat</text><text x="262" y="166" text-anchor="middle" font-size="7" fill="#581C87">cooled in winter</text><text x="262" y="183" text-anchor="middle" font-size="7" fill="#581C87">alum crystals out</text></g></svg>',
        hotspots: [
          {
            id: 'csm-cc-h-school',
            x: 20,
            y: 50,
            label: 'School copper sulfate practical',
            description:
              'Hot water dissolves copper sulfate powder to make a deep blue saturated solution at about 60 C. Left in a cool lab overnight, the solution drops to 20 C and large blue crystals grow on the bottom of the dish.',
          },
          {
            id: 'csm-cc-h-honey',
            x: 51,
            y: 50,
            label: 'Honey crystallising in a cold British kitchen',
            description:
              'Honey is a saturated solution of glucose and fructose in a small amount of water. In a cold pantry through autumn, the glucose becomes less soluble and comes out as a solid, turning runny honey thick and grainy.',
          },
          {
            id: 'csm-cc-h-alum',
            x: 82,
            y: 50,
            label: 'Victorian dyeworks: potash alum',
            description:
              'In nineteenth-century Yorkshire dyeworks, hot solutions of potash alum were left in vats over a cold winter night. Large clear crystals formed on the sides and bottom, ready to be used to fix dyes onto cloth.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-cc-worked-1',
      title: 'Recovering copper sulfate by cooling a hot saturated solution',
      steps: [
        {
          explanation:
            'Question: A pupil has a hot, deep blue solution of copper sulfate in water at 60 C. They want to recover the copper sulfate as solid blue crystals without losing it by overheating. Describe the steps and explain why each one is sensible.',
        },
        {
          explanation:
            'Step 1: pour the hot solution into a shallow crystallising dish. A wide open dish lets the solution cool steadily into the cool lab air. Use a heatproof mat under the dish so the bench is protected.',
        },
        {
          explanation:
            'Step 2: cover the dish with a piece of filter paper to keep dust out, but make sure the cover is loose enough to let heat escape. The aim is to cool slowly, not to seal in heat.',
        },
        {
          explanation:
            'Step 3: leave the dish on the bench. The solution cools from 60 C down towards room temperature, taking N s, often several hours overnight. As the temperature falls, the solubility of copper sulfate falls with it.',
          maths: '60 C to 20 C; solubility 40 to 22 g per 100 g water',
        },
        {
          explanation:
            'Step 4: while the solution is cooling, the excess copper sulfate that the water can no longer hold comes out of solution. The particles join together and grow into blue crystals on the bottom of the dish.',
          maths: 'excess per 100 g water = 40 minus 22 = 18 g out',
        },
        {
          explanation:
            'Step 5: once the solution is at room temperature, pour off the clear blue liquid above the crystals (the mother liquor). Pat the crystals dry between sheets of filter paper. The blue crystals are now ready to weigh and to compare with the powder put in at the start.',
        },
      ],
    },
    {
      id: 'csm-cc-worked-2',
      title: 'Choosing between cooling and evaporation',
      steps: [
        {
          explanation:
            'Question: A pupil has two unknown salt solutions, X and Y. Solution X is potassium nitrate (KNO3) in water; its solubility changes sharply with temperature. Solution Y is sodium chloride (NaCl) in water; its solubility hardly changes at all between 20 C and 100 C. Which one would be recovered by cooling, and which by evaporation? Explain.',
        },
        {
          explanation:
            'Step 1: think about the rule. Cooling crystallisation only works if the solubility of the solute drops sharply when the temperature falls. The cooled solution then cannot hold as much solute, and the excess comes out as crystals.',
        },
        {
          explanation:
            'Step 2: for X (KNO3), the solubility falls from about 140 g per 100 g water at 70 C to about 50 g per 100 g water at 30 C. That is a big change, so a lot of solute will come out on cooling.',
          maths: 'KNO3: 140 minus 50 = 90 g out per 100 g water',
        },
        {
          explanation:
            'Step 3: for Y (NaCl), the solubility hardly moves with temperature; it is about 36 g per 100 g of water at all the temperatures in the lab. Cooling will not give you crystals because the cooled solution can hold almost the same amount as the hot one.',
        },
        {
          explanation:
            'Step 4: for NaCl, the way to recover the solid is to evaporate the water in a hot evaporating basin until only the dry crystals are left behind. The water leaves as vapour and the salt is left in the basin.',
        },
        {
          explanation:
            'Step 5: so cool X (KNO3) in a crystallising dish, and evaporate Y (NaCl) over a low Bunsen flame. The right method depends on whether solubility changes sharply with temperature, not on which solid is more familiar.',
        },
      ],
    },
  ],
  questions: [
    // CORE multiple-choice (4)
    {
      id: 'csm-cc-q1',
      type: 'multiple-choice',
      stem: 'A pupil wants to recover a solid that dissolves much better in hot water than in cold water. Which separating method is best?',
      tier: 'core',
      options: [
        'Filtration through filter paper',
        'Chromatography on paper',
        'Crystallisation by cooling a hot saturated solution',
        'Simple distillation of the solution',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-cc-mis-cooling-equals-evaporation',
      hint: 'Cooling works when the solubility of the solute changes sharply with temperature.',
    },
    {
      id: 'csm-cc-q2',
      type: 'multiple-choice',
      stem: 'Why is the solution heated until it is saturated before being left to cool, rather than just left to stand straight away?',
      tier: 'core',
      options: [
        'So that the solute is destroyed and the solvent is left behind',
        'Because saturated solutions cool more rapidly than dilute ones',
        'Because heating turns the solute into a different chemical',
        'So that the solution starts off holding as much solute as possible, giving the largest yield of crystals when it cools',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'csm-cc-q3',
      type: 'multiple-choice',
      stem: 'In a school crystallisation, the hot copper sulfate solution is poured into a shallow open dish rather than a sealed flask. Why?',
      tier: 'core',
      options: [
        'A sealed flask would explode as the solution cools',
        'A shallow open dish lets heat leave the solution steadily into the cool air, so the solution can cool slowly and form crystals',
        'A shallow open dish makes the solute react with oxygen, which speeds up crystallisation',
        'A sealed flask would dissolve the copper sulfate, which is why it is avoided',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'csm-cc-q4',
      type: 'multiple-choice',
      stem: 'A class is told to leave their copper sulfate solutions on the bench overnight rather than putting them straight in a freezer. Which is the best reason?',
      tier: 'core',
      options: [
        'A freezer has no power supply in the lab',
        'The freezer would crack the dish',
        'Slow cooling on the bench lets larger, cleaner crystals grow; a freezer cools too sharply and can also freeze water in the solution',
        'Crystals can only form between 18 C and 22 C',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-cc-mis-freezer-needed',
    },
    // CONFIDENT multiple-choice (3)
    {
      id: 'csm-cc-q5',
      type: 'multiple-choice',
      stem: 'A pupil leaves their dish of hot copper sulfate solution near an open window where it cools rapidly in cold air. A friend leaves an identical dish on a bench in a warm corner of the lab where it cools slowly. How will the crystals compare the next morning?',
      tier: 'confident',
      options: [
        'The dish by the window will have larger, cleaner crystals because faster cooling always gives bigger crystals',
        'Both dishes will have crystals of the same size; cooling rate makes no difference',
        'Only the dish by the window will have any crystals at all',
        'The dish on the warm bench will have larger, cleaner crystals because slow cooling gives the particles time to line up neatly in the lattice',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-rapid-bigger-crystals',
      hint: 'Slow cooling gives particles time to find the right place in the lattice.',
    },
    {
      id: 'csm-cc-q6',
      type: 'multiple-choice',
      stem: 'A pupil cools a saturated solution of sodium chloride (NaCl) from 90 C down to 20 C and is surprised that almost no crystals appear. Why?',
      tier: 'confident',
      options: [
        'Sodium chloride has been destroyed by the heating',
        'The solubility of sodium chloride barely changes with temperature, so cooling does not push much solute out of solution; evaporation is needed instead',
        'Cooling never produces any crystals at all from any solution',
        'Sodium chloride only crystallises below 0 C',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-cool-more-always',
      hint: 'For sodium chloride, hot water and cold water hold almost the same amount, so cooling cannot push much out.',
    },
    {
      id: 'csm-cc-q7',
      type: 'multiple-choice',
      stem: 'A pupil makes copper sulfate crystals by cooling a hot solution. Their teacher says the crystals are not yet pure enough to use in a more careful test, even though they look clean. Why not?',
      tier: 'confident',
      options: [
        'Crystals from cooling can trap a small amount of mother liquor and its impurities in lattice defects; a second recrystallisation step improves the purity',
        'The crystals are always coloured the wrong shade if they are impure',
        'Cooling always destroys part of the solute, so the crystals are not whole',
        'Crystals from cooling are not really a solid until they have been heated again',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-pure-by-default',
    },
    // CHALLENGE multiple-choice (3)
    {
      id: 'csm-cc-q8',
      type: 'multiple-choice',
      stem: 'A school technician wants to grow a single large blue crystal of copper sulfate, big enough to display. Which method is most likely to succeed?',
      tier: 'challenge',
      options: [
        'Pour hot solution into a metal pan and put it on a hot plate to grow the crystal in a few minutes',
        'Cool a saturated copper sulfate solution very rapidly in an ice bath so a single crystal forms before any others can',
        'Hang a small seed crystal on a thread in a saturated solution and let it cool very slowly over many days, topping the solution up with fresh saturated solution as needed',
        'Place a saturated solution in the freezer at minus 18 C for a few hours',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'csm-cc-mis-only-coloured',
      hint: 'The biggest single crystals come from slow growth onto one starter point. The seed need not be coloured.',
    },
    {
      id: 'csm-cc-q9',
      type: 'multiple-choice',
      stem: 'A jar of honey from a Norfolk shop has turned thick and grainy after sitting in a cold pantry through October. A pupil claims it has gone off and should be thrown away. What is a better explanation?',
      tier: 'challenge',
      options: [
        'The honey has reacted with the glass of the jar',
        'Honey is a saturated solution of glucose; in the cold pantry the glucose has become less soluble and crystallised out, so the honey looks solid and grainy but is still good to eat',
        'The pantry air has dried out the honey through the lid',
        'Sugar in honey turns into salt below 5 C',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Honey is mostly glucose dissolved in a little water. The solubility of glucose drops sharply as the temperature falls.',
    },
    {
      id: 'csm-cc-q10',
      type: 'multiple-choice',
      stem: 'A pupil thinks "if cooling gives crystals, then cooling further must always give more crystals". They cool their solution from 20 C to 4 C in a fridge and see only a tiny extra amount of crystal. Why?',
      tier: 'challenge',
      options: [
        'The fridge is not cold enough; only a freezer works for crystallisation',
        'The fridge has reversed the crystallisation and dissolved the crystals back into the liquid',
        'Cooling only ever pushes out a fixed mass of solute, no matter what the starting temperature is',
        'Most of the solute that was going to come out had already crystallised between 60 C and 20 C, where the solubility curve falls most steeply; below 20 C the curve flattens, so further cooling pushes out only a little more solute',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'csm-cc-mis-cool-more-always',
    },
    // NUMERIC (5: 1 core + 2 confident + 2 challenge)
    {
      id: 'csm-cc-q11',
      type: 'numeric-entry',
      stem: 'Copper sulfate solubility at 60 C is 40 g per 100 g of water. At 20 C it is 22 g per 100 g of water. A pupil cools 100 g of water saturated with copper sulfate from 60 C down to 20 C. How many grams of crystals come out of the solution?',
      tier: 'confident',
      correctAnswer: 18,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the cold solubility from the hot solubility.',
    },
    {
      id: 'csm-cc-q12',
      type: 'numeric-entry',
      stem: 'A saturated solution of potassium nitrate (KNO3) at 70 C holds 140 g of solute per 100 g of water. At 30 C the same water can only hold 50 g. How many grams of KNO3 crystals come out of the solution when 100 g of water is cooled from 70 C to 30 C?',
      tier: 'confident',
      correctAnswer: 90,
      unit: 'g',
      xpValue: 15,
      hint: 'The crystals out equal the hot solubility minus the cold solubility, for the same mass of water.',
    },
    {
      id: 'csm-cc-q13',
      type: 'numeric-entry',
      stem: 'A school technician cools a copper sulfate solution slowly from 80 C down to 20 C over a period of 6 hours. What is the average cooling rate in degrees Celsius per hour?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'C per hour',
      xpValue: 10,
      hint: 'Total temperature drop divided by the total time.',
    },
    {
      id: 'csm-cc-q14',
      type: 'numeric-entry',
      stem: 'A pupil weighs the crystals from their copper sulfate experiment and gets 17.5 g. The expected yield from the solubility data was 18.0 g. What is the difference between the expected and the actual mass, in grams?',
      tier: 'challenge',
      correctAnswer: 0.5,
      tolerance: 0.05,
      unit: 'g',
      xpValue: 25,
      hint: 'Subtract the smaller value from the larger value. Some solute can stay in the mother liquor or stick to the dish.',
    },
    {
      id: 'csm-cc-q15',
      type: 'numeric-entry',
      stem: 'A pupil starts with 200 g of water saturated with copper sulfate at 60 C. The solubility at 60 C is 40 g per 100 g of water; at 20 C it is 22 g per 100 g of water. How many grams of copper sulfate crystals come out of the 200 g of water on cooling from 60 C to 20 C?',
      tier: 'confident',
      correctAnswer: 36,
      unit: 'g',
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-all-solute-out',
      hint: 'Work out the excess per 100 g of water first, then scale up for 200 g.',
    },
    // DRAG-ORDER (1)
    {
      id: 'csm-cc-q16',
      type: 'drag-order',
      stem: 'Place these steps of a school cooling crystallisation in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Pour the hot saturated solution into a shallow crystallising dish on a heatproof mat',
        'Heat the solute in a small amount of water until it just dissolves, making a hot saturated solution',
        'Pour off the clear mother liquor and pat the crystals dry on filter paper',
        'Cover loosely with filter paper and leave the dish to cool slowly on the lab bench overnight',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
    },
    // SPOT-MISCONCEPTION (2)
    {
      id: 'csm-cc-q17',
      type: 'spot-misconception',
      stem: 'Priya says: "I am going to put my hot copper sulfate solution straight into the freezer at minus 18 C so that I get crystals in the shortest time possible."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The colder the freezer, the bigger and cleaner the crystals will be.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Putting the solution in the freezer cools it too rapidly, giving small messy crystals, and it can also freeze the water in the solution. Slow cooling on the bench gives larger, cleaner crystals.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-freezer-needed',
    },
    {
      id: 'csm-cc-q18',
      type: 'spot-misconception',
      stem: 'Ola says: "Cooling crystallisation is just the same as letting the water evaporate; either way the solute comes out. So I can use cooling to recover sodium chloride from salty water."',
      tier: 'confident',
      statements: [
        {
          text: 'Ola is right. Cooling and evaporation always give the same result for any salt.',
          isMisconception: true,
        },
        {
          text: 'Ola is not right. The two methods do not give the same result for every salt. Cooling only works if the solubility drops sharply with temperature. Sodium chloride hardly changes solubility with temperature, so cooling does not produce useful crystals; evaporation is the right method for it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-cc-mis-cooling-equals-evaporation',
    },
    // MISSING-STEP (2)
    {
      id: 'csm-cc-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of a school cooling crystallisation of copper sulfate.',
      tier: 'core',
      steps: [
        'A pupil heats water in a beaker and stirs in copper sulfate powder until no more will dissolve, making a hot saturated solution at about 60 C',
        'They pour the hot solution into a shallow crystallising dish, cover loosely with filter paper, and leave it on the bench in a cool lab',
        null,
        'The next morning, blue copper sulfate crystals have formed on the bottom of the dish, with a clear blue liquid above them',
        'The pupil pours off the clear liquid (the mother liquor) and pats the crystals dry between two sheets of filter paper',
      ],
      missingStepIndex: 2,
      correctStep:
        'Overnight the solution cools slowly from 60 C down to room temperature; as the temperature falls, the solubility of copper sulfate falls with it, so the excess solute comes out of the solution as solid crystals',
      xpValue: 20,
    },
    {
      id: 'csm-cc-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil tries to make rock candy by dissolving a lot of sugar in hot water and hanging a string in the solution. They wonder how the sugar crystals end up on the string.',
      tier: 'core',
      steps: [
        'The pupil heats water in a pan and stirs in sugar until no more will dissolve, then lets the saturated sugar solution cool to about 50 C and pours it into a clean jar',
        'They lower a clean wooden skewer with a piece of cotton string into the jar so the string hangs in the middle of the liquid',
        null,
        'Over several days, sugar crystals grow on the string. The string acts as a starting surface for the crystals, and the larger crystals grow because the cooling has been very slow',
      ],
      missingStepIndex: 2,
      correctStep:
        'The jar is left in a quiet spot to cool slowly to room temperature; as the temperature falls, the solubility of sugar drops, and the excess sugar leaves the solution and starts to lock onto the string',
      xpValue: 20,
      misconceptionId: 'csm-cc-mis-rapid-bigger-crystals',
    },
    // CHALLENGE: FREE-TEXT (1) and DATA-EXTRACTION (1) to round to 22
    {
      id: 'csm-cc-q21',
      type: 'free-text',
      stem: 'Explain in 3 to 4 sentences why a hot saturated solution of copper sulfate produces blue crystals on cooling, but a hot saturated solution of sodium chloride at the same temperature produces almost no crystals on cooling. Use the idea of solubility.',
      tier: 'challenge',
      sampleAnswer:
        'A hot saturated solution holds the most solute that the water can keep dissolved at that temperature. For copper sulfate, the solubility drops sharply between 60 C and 20 C, so on cooling the water can no longer hold all of the solute and the excess comes out as blue crystals. For sodium chloride, the solubility barely changes with temperature, so the cooled water can still hold almost the same amount of solute and very few crystals form. To recover sodium chloride from solution you need to evaporate the water instead.',
      keywords: ['solubility', 'saturated', 'temperature', 'excess'],
      xpValue: 25,
      misconceptionId: 'csm-cc-mis-cooling-equals-evaporation',
    },
    {
      id: 'csm-cc-q22',
      type: 'data-extraction',
      stem: 'Use the solubility readings to find how many grams of potassium nitrate crystals come out when 100 g of water saturated at 70 C is cooled to 30 C. Give your answer as a whole number of grams.',
      tier: 'challenge',
      dataSource:
        'Solubility of potassium nitrate (KNO3) in water at school temperatures, in grams per 100 g of water: 10 C, 22 g; 30 C, 50 g; 50 C, 88 g; 70 C, 140 g; 90 C, 203 g.',
      correctAnswer: '90',
      xpValue: 25,
      hint: 'Look up the solubility at the start temperature and at the end temperature; the crystals out equal the difference.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on crystallisation: candidates wrote that "cooling and evaporation are interchangeable methods" and lost marks for not linking cooling to a steep solubility curve. Reinforced by RSC Education article "Teaching crystallisation in 11 to 14" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-cc-mis-cooling-equals-evaporation',
      description:
        'Cooling crystallisation and evaporation work the same way. You can pick either one for any soluble solid.',
      triggerAnswer: 'cooling-equals-evaporation',
      correction:
        'In fact cooling only works when the solubility of the solute drops sharply as the temperature falls. If the solubility hardly changes with temperature, like sodium chloride, cooling will not give crystals and evaporation is needed instead.',
      reExplanation:
        'Cooling makes crystals by reducing how much solute the water can hold. For copper sulfate or potassium nitrate, hot water holds a lot more than cold water, so cooling pushes the excess out as crystals. For sodium chloride, hot water and cold water hold almost the same, so cooling cannot push much out. Evaporation works for any solute by removing the water itself, but it uses heat and can thermally decompose delicate solutes.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL Institute of Education, "Separating mixtures" diagnostic questions: a recurring Year 7 idea is that "the faster you cool a solution, the bigger the crystals will be", confusing speed of process with quality of crystal.
    {
      id: 'csm-cc-mis-rapid-bigger-crystals',
      description:
        'The faster you cool a solution, the bigger the crystals will be. Putting it in a freezer gives bigger crystals than leaving it on the bench.',
      triggerAnswer: 'rapid-bigger-crystals',
      correction:
        'In fact it is the other way round. Slow cooling gives the particles time to find the right place in the lattice, so the crystals end up larger and cleaner. Fast cooling makes lots of tiny crystals at once.',
      reExplanation:
        'Crystals grow when particles in the solution lock together in a regular pattern. If you cool slowly, only a small amount of solute leaves the solution per minute, and the particles have time to stack neatly on top of each other on the same growing crystal. If you cool sharply, a lot of solute leaves at once and many tiny crystals start everywhere, so no single crystal gets the chance to grow large.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1H), Q07 on crystallisation of an impure sample: candidates wrote that "crystals from a cooled solution are always pure", missing that mother-liquor impurities can be trapped in lattice defects. Reinforced by CGP KS3 Chemistry Study Book p.56 on crystallisation.
    {
      id: 'csm-cc-mis-pure-by-default',
      description:
        'Crystals from cooling crystallisation are always pure, because only the solute itself leaves the solution.',
      triggerAnswer: 'pure-by-default',
      correction:
        'In fact crystals from a first cooling can still contain a small amount of mother-liquor impurity, trapped in lattice defects on the surface. A second recrystallisation step (dissolving and re-crystallising) improves the purity.',
      reExplanation:
        'When crystals grow from a cooling solution, they grow at a rate that can trap some of the surrounding liquid, including any impurities dissolved in it, in tiny gaps in the lattice. Chemists who need a pure sample dissolve the first crystals in fresh solvent, then cool again. The crystals that grow the second time around are usually much cleaner because there is far less impurity in the new solution.',
    },
    // Source: David Paterson, "Teaching pupils to separate mixtures", RSC Education CPD article (2020-09-21): a recurring Year 7 idea is that crystallisation needs freezer-low temperatures, missing that ambient cooling is what gives the best crystals.
    {
      id: 'csm-cc-mis-freezer-needed',
      description:
        'To make crystals from a hot solution, you need to put it in a freezer at minus 18 C. The lab bench is not cold enough.',
      triggerAnswer: 'freezer-needed',
      correction:
        'In fact ambient or ice-bath cooling is what is used for cooling crystallisation. Freezer-low temperatures are unnecessary, and they can co-precipitate the water itself as ice, spoiling the crystals.',
      reExplanation:
        'A copper sulfate solution at 60 C will produce a good yield of crystals when it cools to 20 C on the bench, because the solubility curve drops most steeply in that range. Going further down to minus 18 C only pushes out a very small extra amount of solute, and it also freezes the water around the crystals, leaving you with a block of ice with copper sulfate trapped inside.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL Institute of Education, "Solubility and crystallisation" diagnostic questions: pupils often expect that "all the dissolved solute crystallises out" on cooling, missing that only the amount above the cold solubility limit leaves the solution.
    {
      id: 'csm-cc-mis-all-solute-out',
      description:
        'When you cool a hot saturated solution, all of the dissolved solute comes out as crystals.',
      triggerAnswer: 'all-solute-out',
      correction:
        'In fact only the amount above the cooler solubility limit comes out. The rest stays in solution because the cold water can still hold that much solute.',
      reExplanation:
        'Cooling a saturated copper sulfate solution from 60 C to 20 C means going from 40 g to 22 g per 100 g of water. The cold solution can still hold the 22 g, so only the excess 18 g leaves as crystals. The clear blue liquid above the crystals (the mother liquor) is still saturated copper sulfate at 20 C, not pure water.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q05 on solubility: candidates wrote that "if no crystals form, you should cool the solution further", missing that for solutes with flat solubility curves no amount of cooling will produce crystals. Reinforced by RSC Education article "Common student misconceptions about solubility" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-cc-mis-cool-more-always',
      description:
        'If a hot solution does not give crystals on cooling, the answer is always to cool it further.',
      triggerAnswer: 'cool-more-always',
      correction:
        'In fact if the solute has a flat solubility curve (like sodium chloride), cooling further will not give crystals. Evaporation is the right method for those solutes.',
      reExplanation:
        'Cooling crystallisation depends on the solubility of the solute falling as the temperature drops. Sodium chloride solubility hardly changes from 0 C to 100 C, so a saturated solution at 90 C and the same mass of water at 5 C hold almost the same amount of salt. Cooling further in a freezer just freezes the water as ice. For these solutes the right answer is to remove the water by evaporation.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a recurring Year 7 idea is that "crystallisation only works for coloured compounds", missing that colour is irrelevant to whether crystals form on cooling.
    {
      id: 'csm-cc-mis-only-coloured',
      description:
        'Crystallisation by cooling only works for coloured compounds, like blue copper sulfate. Colourless solutions do not crystallise.',
      triggerAnswer: 'only-coloured',
      correction:
        'In fact cooling crystallisation works for any soluble crystalline solid whose solubility falls with temperature. Potassium nitrate, sugar, and potash alum are all colourless or pale, and all crystallise on cooling.',
      reExplanation:
        'Colour just makes the crystals easier to see and easier for a class to enjoy watching grow. The chemistry is the same for a colourless solute. The rule that decides whether you can recover a solid by cooling is the shape of its solubility curve, not whether the solute happens to be blue, green, or clear.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
