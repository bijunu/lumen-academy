import type { SkillNode } from '@/types/content'

const particleMotionSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Diffusion: particles spread from high to low concentration</text>
  <rect x="40" y="60" width="260" height="280" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="170" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#92400E">Start: tea bag just dropped in</text>
  <circle cx="100" cy="200" r="5" fill="#7C2D12" />
  <circle cx="112" cy="212" r="5" fill="#7C2D12" />
  <circle cx="98" cy="220" r="5" fill="#7C2D12" />
  <circle cx="120" cy="200" r="5" fill="#7C2D12" />
  <circle cx="108" cy="232" r="5" fill="#7C2D12" />
  <circle cx="128" cy="218" r="5" fill="#7C2D12" />
  <circle cx="116" cy="190" r="5" fill="#7C2D12" />
  <circle cx="92" cy="208" r="5" fill="#7C2D12" />
  <circle cx="132" cy="234" r="5" fill="#7C2D12" />
  <circle cx="104" cy="246" r="5" fill="#7C2D12" />
  <text x="170" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Tea particles clumped near the bag</text>
  <rect x="320" y="60" width="260" height="280" rx="8" fill="#FDE68A" stroke="#92400E" stroke-width="3" />
  <text x="450" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#92400E">Later: tea bag has brewed</text>
  <circle cx="356" cy="120" r="5" fill="#7C2D12" />
  <circle cx="410" cy="140" r="5" fill="#7C2D12" />
  <circle cx="470" cy="118" r="5" fill="#7C2D12" />
  <circle cx="530" cy="146" r="5" fill="#7C2D12" />
  <circle cx="372" cy="180" r="5" fill="#7C2D12" />
  <circle cx="438" cy="200" r="5" fill="#7C2D12" />
  <circle cx="498" cy="188" r="5" fill="#7C2D12" />
  <circle cx="560" cy="220" r="5" fill="#7C2D12" />
  <circle cx="346" cy="262" r="5" fill="#7C2D12" />
  <circle cx="404" cy="284" r="5" fill="#7C2D12" />
  <circle cx="464" cy="266" r="5" fill="#7C2D12" />
  <circle cx="524" cy="298" r="5" fill="#7C2D12" />
  <text x="450" y="320" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Tea particles spread evenly through the cup</text>
  <path d="M 305 200 L 320 200" stroke="#1F2937" stroke-width="2" />
  <path d="M 314 195 L 320 200 L 314 205" stroke="#1F2937" stroke-width="2" fill="none" />
  <text x="312" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">time</text>
</svg>
`.trim()

const osmosisDemoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Osmosis: water crosses a selectively permeable membrane</text>
  <rect x="40" y="60" width="240" height="280" rx="6" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="3" />
  <text x="160" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1E3A8A">Dilute side (lots of water)</text>
  <circle cx="80" cy="160" r="4" fill="#1E3A8A" />
  <circle cx="120" cy="180" r="4" fill="#1E3A8A" />
  <circle cx="160" cy="200" r="4" fill="#1E3A8A" />
  <circle cx="200" cy="220" r="4" fill="#1E3A8A" />
  <circle cx="240" cy="200" r="4" fill="#1E3A8A" />
  <circle cx="100" cy="240" r="4" fill="#1E3A8A" />
  <circle cx="180" cy="260" r="4" fill="#1E3A8A" />
  <circle cx="220" cy="280" r="4" fill="#1E3A8A" />
  <circle cx="140" cy="300" r="4" fill="#1E3A8A" />
  <text x="160" y="332" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1E3A8A">Water particles (blue)</text>
  <rect x="280" y="60" width="20" height="280" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
  <text x="290" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Membrane</text>
  <rect x="300" y="60" width="240" height="280" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="420" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#7F1D1D">Concentrated side (lots of solute)</text>
  <circle cx="340" cy="160" r="4" fill="#1E3A8A" />
  <circle cx="380" cy="220" r="4" fill="#1E3A8A" />
  <circle cx="460" cy="260" r="4" fill="#1E3A8A" />
  <circle cx="500" cy="300" r="4" fill="#1E3A8A" />
  <circle cx="360" cy="180" r="7" fill="#7F1D1D" />
  <circle cx="400" cy="200" r="7" fill="#7F1D1D" />
  <circle cx="440" cy="180" r="7" fill="#7F1D1D" />
  <circle cx="480" cy="220" r="7" fill="#7F1D1D" />
  <circle cx="520" cy="200" r="7" fill="#7F1D1D" />
  <circle cx="360" cy="260" r="7" fill="#7F1D1D" />
  <circle cx="420" cy="280" r="7" fill="#7F1D1D" />
  <circle cx="490" cy="240" r="7" fill="#7F1D1D" />
  <text x="420" y="332" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7F1D1D">Solute particles (red) cannot cross</text>
  <path d="M 220 360 L 360 360" stroke="#1E3A8A" stroke-width="3" />
  <path d="M 350 354 L 360 360 L 350 366" stroke="#1E3A8A" stroke-width="3" fill="none" />
  <text x="290" y="378" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1E3A8A">Net water movement: low solute to high solute</text>
</svg>
`.trim()

const membraneZoomSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The cell membrane: selectively permeable barrier</text>
  <rect x="50" y="120" width="500" height="60" rx="4" fill="#FDE68A" stroke="#92400E" stroke-width="3" />
  <text x="300" y="156" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#92400E">Cell membrane (zoomed in)</text>
  <circle cx="120" cy="80" r="10" fill="#3B82F6" />
  <text x="120" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1E3A8A">Water</text>
  <path d="M 120 90 L 120 200" stroke="#1E3A8A" stroke-width="2" />
  <path d="M 115 195 L 120 200 L 125 195" stroke="#1E3A8A" stroke-width="2" fill="none" />
  <text x="120" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1E3A8A">Crosses freely</text>
  <circle cx="240" cy="80" r="14" fill="#DC2626" />
  <text x="240" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7F1D1D">Sugar</text>
  <line x1="240" y1="100" x2="240" y2="160" stroke="#7F1D1D" stroke-width="2" stroke-dasharray="4 4" />
  <text x="240" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7F1D1D">Slow / blocked</text>
  <circle cx="360" cy="80" r="9" fill="#22C55E" />
  <text x="360" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#14532D">Oxygen</text>
  <path d="M 360 90 L 360 200" stroke="#14532D" stroke-width="2" />
  <path d="M 355 195 L 360 200 L 365 195" stroke="#14532D" stroke-width="2" fill="none" />
  <text x="360" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#14532D">Crosses freely</text>
  <circle cx="480" cy="80" r="18" fill="#9333EA" />
  <text x="480" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#581C87">Protein</text>
  <line x1="480" y1="100" x2="480" y2="160" stroke="#581C87" stroke-width="2" stroke-dasharray="4 4" />
  <text x="480" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#581C87">Too large, blocked</text>
  <text x="300" y="280" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Small particles slip through. Large ones cannot.</text>
  <text x="300" y="310" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">No energy is used. Movement is passive.</text>
  <text x="300" y="340" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">This selectivity is what keeps a cell alive.</text>
</svg>
`.trim()

export const diffusionOsmosis: SkillNode = {
  id: 'biology-cells-diffusion-osmosis',
  title: 'Diffusion and Osmosis in Cells',
  description:
    'Track how substances slip into and out of a living cell without the cell having to spend any energy. DIFFUSION is the net movement of particles from where they are crowded (high concentration) to where they are sparse (low concentration); a tea bag staining a mug of hot water is a kitchen example. OSMOSIS is the special name for diffusion of WATER across a selectively permeable barrier such as a cell membrane: water crosses from the side with more water (dilute solution) to the side with less water (concentrated solution). Year 7 biologists need both ideas to explain why a slug shrivels under salt, why a wilted houseplant on a sunny windowsill perks up after a watering, and why an NHS saline drip uses a solution close in concentration to the blood.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'confident',
  prerequisites: ['biology-cells-animal-plant'],
  curriculum: {
    ks3Objective:
      'The role of the cell membrane in controlling what enters and leaves the cell; how diffusion and osmosis allow substances to move into and out of cells.',
    awardingBodies: {
      aqa: '4.1.3.1 Diffusion; 4.1.3.2 Osmosis (GCSE Biology 8461)',
      edexcel: 'CB2a Movement across cell membranes: diffusion; CB2b Osmosis (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1.3 Movement across cell membranes: diffusion and osmosis (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bce-do-particle-motion',
      title: 'Diffusion of Tea Particles in Hot Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how tea particles spread from a crowded patch into the rest of the cup, without anyone stirring or adding energy.',
      data: {
        svg: particleMotionSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-do-hs-start',
            x: 28,
            y: 50,
            label: 'High concentration around the bag',
            description:
              'When the tea bag first hits the water, the brown particles sit tightly packed around it. The concentration of tea is high near the bag and low everywhere else.',
          },
          {
            id: 'bce-do-hs-spread',
            x: 75,
            y: 50,
            label: 'Particles spread to fill the cup',
            description:
              'Over a few minutes the brown particles drift outwards into the clear water. Random particle movement carries more particles away from the crowded region than back into it.',
          },
          {
            id: 'bce-do-hs-equilibrium',
            x: 75,
            y: 78,
            label: 'Even spread at equilibrium',
            description:
              'When the colour looks the same throughout the cup, the system is at equilibrium. The particles keep moving in every direction, but with no net flow either way.',
          },
          {
            id: 'bce-do-hs-passive',
            x: 50,
            y: 92,
            label: 'No energy needed',
            description:
              'Nobody stirs the cup. Diffusion happens on its own because particles in a liquid or gas are always moving. The net flow runs from high concentration to low concentration.',
          },
        ],
      },
    },
    {
      id: 'bce-do-osmosis-demo',
      title: 'Osmosis Across a Selectively Permeable Barrier',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how water crosses the membrane from the dilute side to the concentrated side, while large solute particles stay put.',
      data: {
        svg: osmosisDemoSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-do-hs-dilute',
            x: 27,
            y: 50,
            label: 'Dilute side: lots of free water',
            description:
              'A glass of pure water (or weak salt solution) has plenty of water particles and almost no solute. We say it has a HIGH water concentration and a low solute concentration.',
          },
          {
            id: 'bce-do-hs-concentrated',
            x: 70,
            y: 50,
            label: 'Concentrated side: lots of solute',
            description:
              'A strong salt or sugar solution has many large red solute particles. With more space taken up by solute, there are fewer free water particles. Water concentration is LOW here.',
          },
          {
            id: 'bce-do-hs-membrane',
            x: 48,
            y: 16,
            label: 'Selectively permeable membrane',
            description:
              'The membrane has gaps small enough for water to slip through but too narrow for the larger solute particles. Water can cross both ways; solute cannot.',
          },
          {
            id: 'bce-do-hs-netflow',
            x: 48,
            y: 92,
            label: 'Net water flow follows the gradient',
            description:
              'Water moves both ways but more particles cross from the dilute side to the concentrated side each second. The NET flow is from high water concentration to low water concentration.',
          },
        ],
      },
    },
    {
      id: 'bce-do-membrane-zoom',
      title: 'What Crosses the Cell Membrane and What Does Not',
      type: 'labelled-diagram',
      instructions:
        'Click each particle to see how the cell membrane lets small molecules through but blocks the larger ones, all without using energy.',
      data: {
        svg: membraneZoomSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-do-hs-water',
            x: 20,
            y: 22,
            label: 'Water: crosses freely',
            description:
              'Water particles are tiny and have no charge. They slip across the membrane in both directions. The net direction depends only on which side has more water.',
          },
          {
            id: 'bce-do-hs-sugar',
            x: 40,
            y: 22,
            label: 'Sugar: crosses slowly',
            description:
              'A sugar particle is much larger than a water particle. It moves through the membrane very slowly and only on its own concentration gradient. At KS3 we treat solutes like sugar as effectively blocked during osmosis.',
          },
          {
            id: 'bce-do-hs-oxygen',
            x: 60,
            y: 22,
            label: 'Oxygen: crosses freely',
            description:
              'Oxygen molecules are small and uncharged. They diffuse easily across the membrane, from the lung air sac into a red blood cell, without the cell spending any energy.',
          },
          {
            id: 'bce-do-hs-protein',
            x: 80,
            y: 22,
            label: 'Protein: too big to cross',
            description:
              'A protein particle is huge by comparison. The membrane gaps are far too small. Large molecules like proteins stay inside the cell unless special active processes shift them.',
          },
          {
            id: 'bce-do-hs-selective',
            x: 50,
            y: 80,
            label: 'Selectively permeable',
            description:
              'A cell membrane is not a solid wall and not a sieve that lets anything through. It is selectively permeable: small uncharged particles pass; larger or charged ones do not.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bce-do-worked-1',
      title: 'Why oxygen diffuses INTO a red blood cell at the lungs',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil at a Tunbridge Wells grammar school is asked why oxygen moves from the air inside a lung air sac into a red blood cell flowing past it. Use diffusion to explain the direction of net movement.',
        },
        {
          explanation:
            'Step 1: compare the oxygen concentrations on the two sides. Air drawn into the lungs is rich in oxygen. Blood arriving at the lungs has just come back from the body, where the oxygen was used up.',
          maths: 'air sac: high oxygen  ;  red blood cell: low oxygen',
        },
        {
          explanation:
            'Step 2: state the diffusion rule. Net particle movement runs from where particles are crowded (high concentration) to where they are sparse (low concentration), until the two sides are even.',
        },
        {
          explanation:
            'Step 3: apply the rule. Oxygen particles will spread from the high-concentration air sac to the low-concentration red blood cell. The cell does not have to pull them in.',
          maths: 'net flow: air sac  ->  red blood cell',
        },
        {
          explanation:
            'Step 4: check the energy question. The cell does not spend energy to move the oxygen. Diffusion is a passive process driven by the random motion the particles already have.',
        },
        {
          explanation:
            'Final answer: oxygen DIFFUSES from the air sac into the red blood cell because there is more oxygen in the air than in the blood. No energy is used; the particles spread down their concentration gradient.',
        },
      ],
    },
    {
      id: 'bce-do-worked-2',
      title: 'Working out the percentage mass change of a Visking-tubing bag',
      steps: [
        {
          explanation:
            'Question: a school biology lab in Leeds soaks a sealed Visking-tubing bag of sugar solution in a beaker of pure water. The bag weighs 20 g at the start. After 30 minutes it weighs 23 g. Find the percentage change in mass and explain it.',
        },
        {
          explanation:
            'Step 1: find the change in mass. Final mass minus starting mass.',
          maths: 'change = 23 g - 20 g = 3 g',
        },
        {
          explanation:
            'Step 2: divide the change by the starting mass.',
          maths: 'fraction change = 3 / 20 = 0.15',
        },
        {
          explanation:
            'Step 3: multiply by 100 to turn the fraction into a percentage.',
          maths: 'percentage change = 0.15 x 100 = 15%',
        },
        {
          explanation:
            'Step 4: read the sign. The bag has GAINED mass, so the percentage change is positive (+15%). Mass has gone up because water has crossed into the bag.',
        },
        {
          explanation:
            'Step 5: explain the direction with osmosis. Inside the bag, sugar takes up space and the water concentration is LOW. Outside, the pure water has a HIGH water concentration. Water crosses the selectively permeable Visking tubing from outside (high water) to inside (low water) until the bag swells.',
        },
        {
          explanation:
            'Final answer: the bag gains 15% in mass because water has entered by osmosis, moving from the dilute beaker to the concentrated bag.',
          maths: 'percentage mass change = +15%',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'bce-do-q1',
      type: 'multiple-choice',
      stem: 'A tea bag is dropped into a mug of hot water and left to brew without stirring. Which best describes WHY the brown colour spreads through the mug?',
      tier: 'core',
      options: [
        'A cell membrane lets the colour pass through it',
        'Tea particles move from where they are crowded to where they are sparse, by diffusion',
        'Heat physically pushes the particles outwards in straight lines',
        'The water particles drag the tea particles around to mix them',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Diffusion runs from high concentration to low concentration.',
    },
    {
      id: 'bce-do-q2',
      type: 'multiple-choice',
      stem: 'Which statement best defines OSMOSIS as you would meet it in Year 7 biology?',
      tier: 'core',
      options: [
        'Osmosis is the active pumping of water out of a cell using energy',
        'Osmosis is the net movement of water across a selectively permeable membrane from a dilute solution to a more concentrated solution',
        'Osmosis is the spreading of any particle from high to low concentration in a gas',
        'Osmosis is the breakdown of a cell membrane when sugar is added',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bce-do-mis-osmosis-equals-diffusion',
    },
    {
      id: 'bce-do-q3',
      type: 'multiple-choice',
      stem: 'A pupil claims that diffusion needs the cell to "spend energy" to move particles around. Which response is correct?',
      tier: 'core',
      options: [
        'The pupil is right; cells always spend energy moving particles in or out',
        'The pupil is right; diffusion uses energy from the mitochondria',
        'The pupil is wrong; diffusion is PASSIVE and the cell does not spend energy on it',
        'The pupil is wrong; diffusion only happens when a cell is sleeping',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bce-do-mis-diffusion-uses-energy',
    },
    {
      id: 'bce-do-q4',
      type: 'multiple-choice',
      stem: 'In an osmosis experiment, water moves from Side A to Side B through a selectively permeable membrane. Which statement about the two sides must be true?',
      tier: 'core',
      options: [
        'Side A holds a more dilute solution than Side B (so Side A has more free water)',
        'Side A holds a more concentrated solution than Side B',
        'Side A holds no water at all',
        'Side B contains only oxygen particles',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Net water flow runs from high water concentration to low water concentration.',
    },
    {
      id: 'bce-do-q5',
      type: 'numeric-entry',
      stem: 'A piece of potato in a Year 7 lab is weighed at 4.0 g. After an hour in pure water it weighs 4.6 g. Calculate the percentage change in mass. Give the magnitude only, to one decimal place.',
      tier: 'core',
      correctAnswer: 15,
      tolerance: 0.5,
      unit: '%',
      xpValue: 15,
      hint: '(change in mass / starting mass) x 100. Change is 4.6 - 4.0 = 0.6 g.',
    },
    {
      id: 'bce-do-q6',
      type: 'drag-order',
      stem: 'Put the steps in order to describe what happens when a tea bag is dropped into a mug of hot water and left for ten minutes.',
      tier: 'core',
      items: [
        'The mug shows a uniform brown colour at equilibrium, though particles keep moving',
        'Brown tea particles sit crowded around the bag at high concentration',
        'Tea particles drift out from the bag down the concentration gradient',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
    },
    {
      id: 'bce-do-q7',
      type: 'spot-misconception',
      stem: 'A pupil writes: "Once a brown tea has spread evenly through the mug, the tea and water particles stop moving altogether."',
      tier: 'core',
      statements: [
        {
          text: 'The pupil is right. Equilibrium means everything has stopped moving.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. At equilibrium the particles keep moving randomly. There is just no NET change in concentration on either side.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-do-mis-equilibrium-still',
    },
    // CONFIDENT (8)
    {
      id: 'bce-do-q8',
      type: 'multiple-choice',
      stem: 'A garden slug crosses a path that has been sprinkled with table salt and shrivels up. Which best explains what happens to the slug at the cell level?',
      tier: 'confident',
      options: [
        'The salt diffuses into the slug cells and replaces the water there',
        'The salt actively pumps water out of the slug using energy from the slug',
        'Water leaves the slug cells by osmosis because the salty layer outside is a more concentrated solution than the cell contents',
        'Salt particles cross the cell membrane and freeze the water inside',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bce-do-mis-water-follows-salt',
    },
    {
      id: 'bce-do-q9',
      type: 'numeric-entry',
      stem: 'A chunk of dried mushroom weighs 5.0 g. After soaking in cold water for an hour, it weighs 8.5 g. Calculate the percentage change in mass to the nearest whole number.',
      tier: 'confident',
      correctAnswer: 70,
      tolerance: 1,
      unit: '%',
      xpValue: 15,
      hint: '(change in mass / starting mass) x 100. Change = 8.5 - 5.0 = 3.5 g; 3.5 / 5.0 = 0.70.',
    },
    {
      id: 'bce-do-q10',
      type: 'numeric-entry',
      stem: 'In a Visking-tubing demo at a Manchester school, the bag holds a sugar solution. The bag is weighed at 25 g at the start and 22 g 30 minutes later in a strong salt bath. Calculate the percentage change in mass. Enter a negative number if the bag has lost mass; round to the nearest whole number.',
      tier: 'confident',
      correctAnswer: -12,
      tolerance: 1,
      unit: '%',
      xpValue: 20,
      hint: 'Change in mass = 22 - 25 = -3 g. Divide by 25 g, multiply by 100. The bag loses water to the more concentrated salt outside.',
    },
    {
      id: 'bce-do-q11',
      type: 'multiple-choice',
      stem: 'A pupil draws a plant cell sitting in pure water. They label arrows showing the NET direction of water flow. Which arrow direction is correct?',
      tier: 'confident',
      options: [
        'Out of the cell, because plant cells always lose water in water',
        'No flow at all, because plant cells have cell walls that stop osmosis',
        'Both ways equally, since plant cells are sealed',
        'Into the cell, because the cell sap inside is more concentrated than the pure water outside, so water enters by osmosis',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bce-do-mis-osmosis-plants-only',
    },
    {
      id: 'bce-do-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "A red blood cell is placed in pure water and bursts. Explain why, using osmosis."',
      tier: 'confident',
      steps: [
        'The cytoplasm inside a red blood cell is a solution of dissolved salts, sugars and proteins',
        'Pure water outside the cell has a HIGHER water concentration than the cytoplasm',
        null,
        'Water enters faster than it leaves, so the cell swells until the membrane bursts',
      ],
      missingStepIndex: 2,
      correctStep:
        'By osmosis, the NET flow of water is from the dilute outside into the concentrated cytoplasm, across the selectively permeable membrane',
      xpValue: 20,
    },
    {
      id: 'bce-do-q13',
      type: 'numeric-entry',
      stem: 'A school class lays out four pieces of potato in different sugar solutions. The chart records each piece in turn. Piece B starts at 2.5 g and ends at 2.0 g. Calculate the percentage change in mass for Piece B, as a negative number rounded to the nearest whole number.',
      tier: 'confident',
      correctAnswer: -20,
      tolerance: 1,
      unit: '%',
      xpValue: 15,
      hint: 'Change = 2.0 - 2.5 = -0.5 g. Divide by 2.5 g and multiply by 100.',
    },
    {
      id: 'bce-do-q14',
      type: 'spot-misconception',
      stem: 'A pupil claims: "Osmosis only happens in plant cells, because animals do not have cell walls."',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. Animal cells lack the wall needed for osmosis, so osmosis only occurs in plants.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Osmosis happens across any selectively permeable cell MEMBRANE. Both plant cells and animal cells (including red blood cells) take in or lose water by osmosis. The cell wall has a different job: it stops a plant cell from bursting.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-do-mis-osmosis-plants-only',
    },
    {
      id: 'bce-do-q15',
      type: 'drag-order',
      stem: 'A jam-maker stirs sugar into chopped strawberries. The strawberries soften and release juice as they sit. Place the steps in order, from earliest to latest.',
      tier: 'confident',
      items: [
        'Strawberries soften as their cells lose water and the juice pools in the bowl',
        'Sugar coats the surface of each strawberry piece, creating a very concentrated layer outside the cells',
        'Inside each strawberry cell, the cell sap has a higher water concentration than the syrup outside',
        'By osmosis, water moves OUT of the cells across the selectively permeable membrane into the syrup',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
    },
    // CHALLENGE (5)
    {
      id: 'bce-do-q16',
      type: 'multiple-choice',
      stem: 'An NHS patient is given a SALINE drip rather than pure water through a vein. Which statement best explains why pure water would damage red blood cells?',
      tier: 'challenge',
      options: [
        'Pure water carries no oxygen, so the cells would suffocate at once',
        'Pure water is more concentrated than the cytoplasm, so water would leave the cells and they would shrivel',
        'Pure water dissolves the cell wall of a red blood cell, exposing the nucleus',
        'Pure water is more dilute than the cytoplasm, so water would rush into red blood cells by osmosis and the cells could burst',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'bce-do-mis-water-always-enters',
    },
    {
      id: 'bce-do-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 pupil in Cambridge investigates osmosis using three potato cylinders. Cylinder 1 starts at 8.0 g; after one hour in a sugar solution it weighs 6.8 g. Calculate the percentage change in mass for Cylinder 1, as a negative number rounded to one decimal place.',
      tier: 'challenge',
      correctAnswer: -15,
      tolerance: 0.5,
      unit: '%',
      xpValue: 25,
      hint: 'Change = 6.8 - 8.0 = -1.2 g. Divide by 8.0 g and multiply by 100.',
    },
    {
      id: 'bce-do-q18',
      type: 'multiple-choice',
      stem: 'A wilted houseplant on a sunny windowsill in Dover is watered, and within an hour the leaves stand up firm again. Which sequence of cell events BEST explains the recovery?',
      tier: 'challenge',
      options: [
        'Water enters the leaf cells by osmosis through the selectively permeable membrane, the cell sap fills the vacuole, and the cell pushes against the cell wall to become firm',
        'Sugar is pumped out of the leaf cells, which then refill with air to become firm',
        'The cell wall absorbs water directly, with no role for the cell membrane',
        'Oxygen from the watering can diffuses into the cells and inflates them',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    {
      id: 'bce-do-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Explain why a kidney dialysis machine at an NHS hospital uses a fluid that is similar in concentration to the patient\'s blood plasma, not pure water."',
      tier: 'challenge',
      steps: [
        'A dialysis machine passes the patient\'s blood next to a selectively permeable membrane, with the dialysis fluid on the other side',
        'If the dialysis fluid were pure water, it would be far more dilute than the blood plasma',
        null,
        'A fluid close in concentration to plasma lets harmful waste diffuse out while leaving the right amount of water in the blood',
      ],
      missingStepIndex: 2,
      correctStep:
        'Water would rush into the red blood cells by osmosis (from dilute fluid to concentrated cytoplasm), and the cells would swell or burst, so pure water cannot be used',
      xpValue: 25,
    },
    {
      id: 'bce-do-q20',
      type: 'numeric-entry',
      stem: 'A class measures three potato cylinders in different solutions. Cylinder A starts at 6.0 g and ends at 6.3 g. Cylinder B starts at 6.0 g and ends at 5.4 g. Cylinder C starts at 6.0 g and ends at 6.0 g. Calculate the percentage change in mass for Cylinder A as a positive whole number.',
      tier: 'challenge',
      correctAnswer: 5,
      tolerance: 0.5,
      unit: '%',
      xpValue: 20,
      hint: '(6.3 - 6.0) / 6.0 x 100. Then check: Cylinder C with no change must be sitting in a solution close in concentration to the cell sap.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology examiner report June 2019 (8461/1F) Q04 on diffusion: candidates "frequently wrote that diffusion required the cell to use energy from respiration". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on cell transport (stem.org.uk/best, accessed 2026-05-13).
    {
      id: 'bce-do-mis-diffusion-uses-energy',
      description:
        'Diffusion needs the cell to spend energy to move particles in and out across the membrane.',
      triggerAnswer: 'diffusion-uses-energy',
      correction:
        'Diffusion is PASSIVE. The particles already move at random, so a net flow from high to low concentration happens on its own. The cell spends no energy on diffusion.',
      reExplanation:
        'Picture a drop of food colouring in still water. Nobody stirs the bowl, yet the colour spreads. The particles in any liquid or gas move at random; over time, more leave a crowded region than enter it. A living cell uses this same free motion. Oxygen reaches a red blood cell because the air sac next door is richer in oxygen, not because the cell pulls it in.',
    },
    // Source: Royal Society of Biology "Biology subject benchmark" notes the recurring student error of treating diffusion and osmosis as synonyms (rsb.org.uk, accessed 2026-05-13). Reinforced by Edexcel GCSE Biology examiner report June 2021 (1BI0/1F) Q03, which flags candidates "using diffusion to describe water moving across a cell membrane".
    {
      id: 'bce-do-mis-osmosis-equals-diffusion',
      description:
        'Diffusion and osmosis are different names for the same thing.',
      triggerAnswer: 'osmosis-equals-diffusion',
      correction:
        'Osmosis is the SPECIAL case of diffusion for WATER across a selectively permeable membrane. Diffusion is the broader idea: any particle spreading from high to low concentration, with or without a membrane.',
      reExplanation:
        'Diffusion is the general rule: particles drift from where they are crowded to where they are sparse. Osmosis names one specific situation: water particles crossing a selectively permeable membrane down their own concentration gradient. Every osmosis example is a kind of diffusion, but not every diffusion example is osmosis. Tea spreading in a cup is diffusion only; water entering a potato cell is osmosis.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on osmosis ("Why osmosis is not water moving to the salt"), which reports that pupils "describe water as being attracted to the salt" rather than moving down its own water gradient. Reinforced by AQA GCSE Biology examiner report June 2022 (8461/2F) Q05.
    {
      id: 'bce-do-mis-water-follows-salt',
      description:
        'In osmosis, water particles move toward "where the salt is" because the salt attracts them.',
      triggerAnswer: 'water-follows-salt',
      correction:
        'Water moves down its own water concentration gradient, from dilute (more water) to concentrated (less water). Solute particles do not pull water across the membrane.',
      reExplanation:
        'The solute does not grab water. A concentrated salt or sugar solution simply has FEWER free water particles, because solute takes up some of the space. So water particles, moving at random, cross the membrane more often from the dilute side than back the other way. The NET flow looks like water is heading "toward the salt", but each particle is just following its own gradient.',
    },
    // Source: CLEAPSS GL334 "Practical work on diffusion and osmosis" notes the common confusion that osmosis is "a plant cell process only", since school practicals so often use potato or onion (cleapss.org.uk, accessed 2026-05-13). Reinforced by OCR GCSE Biology A examiner report June 2018 (J247/01) Q06.
    {
      id: 'bce-do-mis-osmosis-plants-only',
      description:
        'Osmosis only happens in plant cells, because animal cells do not have a cell wall.',
      triggerAnswer: 'osmosis-plants-only',
      correction:
        'Osmosis happens across any selectively permeable cell MEMBRANE, in plant cells AND animal cells. The cell wall sits OUTSIDE the membrane and only stops a plant cell from bursting.',
      reExplanation:
        'Red blood cells, sperm cells and even kidney lining cells gain or lose water by osmosis through the cell membrane. School experiments use plant tissue (potato, beetroot, onion) because the cells are easy to weigh and the cell wall stops them rupturing. Animal cells follow the same rule but burst in pure water, which is why an NHS saline drip is matched in concentration to plasma.',
    },
    // Source: AQA GCSE Biology examiner report June 2020 (8461/1F) Q03 on diffusion: "candidates often wrote that particles stop moving at equilibrium". Reinforced by Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 2.
    {
      id: 'bce-do-mis-equilibrium-still',
      description:
        'At equilibrium, the particles in a liquid or gas stop moving because the concentrations are equal.',
      triggerAnswer: 'equilibrium-still',
      correction:
        'Particles keep moving at random even at equilibrium. What changes is that the NET flow becomes zero, because as many cross one way each second as cross the other way.',
      reExplanation:
        'Equilibrium is a busy balance, not a freeze. Imagine pupils swapping seats in a hall, but the same number swap from each side per minute. The room looks settled even though everyone keeps moving. Tea particles at equilibrium drift in every direction; the colour just stays even because the rate of leaving the crowded patch matches the rate of arriving. Particles only stop moving at absolute zero.',
    },
    // Source: Edexcel GCSE Biology examiner report June 2019 (1BI0/1F) Q05 on cell membranes: "candidates described the cell membrane as a solid wall, not a barrier with selective gaps". Reinforced by CGP KS3 Biology Study Book p.18 Common Mistake box on membrane structure.
    {
      id: 'bce-do-mis-membrane-solid-wall',
      description:
        'A cell membrane is a solid wall that completely seals the cell off from the outside.',
      triggerAnswer: 'membrane-solid-wall',
      correction:
        'A cell membrane is SELECTIVELY PERMEABLE. Small particles such as water and oxygen slip across it freely; large particles such as proteins and starch cannot.',
      reExplanation:
        'Think of the membrane as a fine mesh, not a brick wall. Tiny uncharged particles such as water, oxygen and carbon dioxide pass through the gaps in both directions. Larger or charged particles, such as sugar, ions and proteins, are too bulky for the gaps and are largely held back. This selectivity is what lets a cell take in food gases and lose waste while keeping its own building blocks inside.',
    },
    // Source: Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 2 on cell transport: pupils "often state that water always enters a cell, because cells need water to live". Reinforced by AQA GCSE Biology examiner report June 2021 (8461/2F) Q04 on osmosis direction.
    {
      id: 'bce-do-mis-water-always-enters',
      description:
        'Water always enters a cell by osmosis, because every living cell needs water.',
      triggerAnswer: 'water-always-enters',
      correction:
        'The direction of net water flow depends on the OUTSIDE concentration. If the outside is more concentrated than the cytoplasm, water LEAVES the cell. Cells shrivel in a strong salt or sugar bath.',
      reExplanation:
        'A salted slug shrivels because water leaves its cells; jam draws juice out of fruit for the same reason. Water always moves from dilute to concentrated across the membrane. Inside a cell the cytoplasm is a solution, so the direction depends on what is on the other side. Pure water makes water enter; a strong salt bath makes water leave; a solution close to plasma keeps the cell steady.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
