import type { SkillNode } from '@/types/content'

export const brownianMotion: SkillNode = {
  id: 'chemistry-particle-model-brownian-motion',
  title: 'Brownian Motion',
  description:
    'Explain Brownian motion as evidence for the particle model. Use the smoke cell experiment and other observations to argue that air and water are made of tiny, fast moving particles that bombard larger visible particles, and discuss what these observations can and cannot prove.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'challenge',
  prerequisites: ['chemistry-particle-model-diffusion'],
  curriculum: {
    ks3Objective:
      'Brownian motion as evidence for particle movement; observation of smoke or pollen particles jiggling due to bombardment by invisible air or liquid particles; limitations of Brownian motion observations for proving particle existence.',
    awardingBodies: {
      aqa: '4.2.2.1 The particle model and evidence; Brownian motion as evidence for particles (8462)',
      edexcel: 'Topic 1.7 Kinetic theory and Brownian motion (1CH0)',
      ocr: 'C1.1a Evidence for particles: Brownian motion and diffusion (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-brownian-scene-smoke-cell',
      title: 'The School Lab Smoke Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how the school smoke cell experiment makes invisible air particles visible through their effect on smoke.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="120" y="60" width="80" height="60" fill="#1F2937" stroke="#111827" stroke-width="1.5"/><rect x="125" y="65" width="70" height="50" fill="#0F172A"/><text x="160" y="55" text-anchor="middle" font-size="8" fill="#1E3A8A">smoke cell</text></g><g fill="#F3F4F6" stroke="#9CA3AF" stroke-width="0.4"><circle cx="140" cy="80" r="2.5"/><circle cx="155" cy="90" r="2.5"/><circle cx="170" cy="78" r="2.5"/><circle cx="185" cy="92" r="2.5"/><circle cx="148" cy="105" r="2.5"/><circle cx="178" cy="108" r="2.5"/><circle cx="165" cy="100" r="2.5"/></g><g stroke="#F59E0B" stroke-width="0.7" fill="none" opacity="0.8"><path d="M 140 80 l 3 4 l -2 3 l 4 -1"/><path d="M 155 90 l -3 -2 l 4 -2 l 2 4"/><path d="M 170 78 l 2 3 l 3 -2 l -1 4"/><path d="M 185 92 l -3 2 l 2 -4 l 4 1"/><path d="M 148 105 l 3 -3 l 1 4 l -3 2"/><path d="M 178 108 l -2 -4 l 3 -1 l 2 3"/></g><g><circle cx="40" cy="90" r="14" fill="#FDE68A" stroke="#92400E" stroke-width="1.5"/><polygon points="54,82 80,75 80,105 54,98" fill="#FDE68A" stroke="#92400E" stroke-width="1.2"/><text x="40" y="118" text-anchor="middle" font-size="7" fill="#1E3A8A">lamp</text></g><g><circle cx="100" cy="90" r="8" fill="none" stroke="#475569" stroke-width="1.2"/><text x="100" y="115" text-anchor="middle" font-size="7" fill="#1E3A8A">lens</text></g><g><rect x="220" y="40" width="60" height="100" fill="none" stroke="#475569" stroke-width="1.5"/><line x1="220" y1="90" x2="280" y2="90" stroke="#475569" stroke-width="0.6"/><text x="250" y="35" text-anchor="middle" font-size="7" fill="#1E3A8A">microscope</text><text x="250" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">view</text></g><g fill="#F3F4F6" stroke="#475569"><circle cx="240" cy="70" r="3.5"/><circle cx="260" cy="80" r="3.5"/><circle cx="245" cy="105" r="3.5"/><circle cx="265" cy="115" r="3.5"/></g><g stroke="#DC2626" stroke-width="0.8" fill="none"><path d="M 240 70 l 4 3 l -2 4 l 5 -1 l -1 5"/><path d="M 260 80 l -3 4 l 4 1 l -1 4 l 3 -2"/><path d="M 245 105 l 4 -3 l 1 4 l 3 -1"/><path d="M 265 115 l -3 -4 l 2 -3 l 4 2"/></g></svg>',
        hotspots: [
          {
            id: 'cpm-brownian-h-smoke-cell-lamp',
            x: 12,
            y: 45,
            label: 'A bright lamp shines into the cell',
            description:
              'The lamp lights up the smoke particles from the side so they scatter light and become visible against a dark background.',
          },
          {
            id: 'cpm-brownian-h-smoke-cell-particles',
            x: 50,
            y: 45,
            label: 'Smoke particles are visible under the microscope',
            description:
              'Burnt paper or wax gives off tiny smoke particles. They are large enough to see as bright specks through the microscope, but still light enough to be jostled.',
          },
          {
            id: 'cpm-brownian-h-smoke-cell-air',
            x: 50,
            y: 70,
            label: 'Invisible air particles surround them',
            description:
              'The air in the cell is full of nitrogen and oxygen particles moving at very high speed. They are far too small to see, even under a school microscope.',
          },
          {
            id: 'cpm-brownian-h-smoke-cell-jiggle',
            x: 80,
            y: 55,
            label: 'Smoke specks jiggle on a random path',
            description:
              'Each smoke speck is hit on all sides by air particles. The hits do not cancel out perfectly, so the speck darts about on a jagged, unpredictable path.',
          },
        ],
      },
    },
    {
      id: 'cpm-brownian-scene-pollen-in-water',
      title: 'Robert Brown 1827: Pollen in a Drop of Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how Robert Brown, an Edinburgh trained botanist, first reported jiggling pollen grains in 1827 and what he could and could not conclude.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><circle cx="160" cy="100" r="70" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.5"/><text x="160" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">microscope view</text><text x="160" y="180" text-anchor="middle" font-size="8" fill="#1E3A8A">drop of water with pollen</text></g><g fill="#F59E0B" stroke="#7C2D12" stroke-width="0.8"><circle cx="135" cy="85" r="5"/><circle cx="170" cy="75" r="5"/><circle cx="185" cy="105" r="5"/><circle cx="145" cy="120" r="5"/><circle cx="175" cy="130" r="5"/></g><g stroke="#7C2D12" stroke-width="0.6" fill="none" opacity="0.8"><path d="M 135 85 l 4 3 l -2 4 l 5 1 l -3 4"/><path d="M 170 75 l -3 3 l 4 4 l 2 -3 l -1 5"/><path d="M 185 105 l -4 -3 l -1 4 l 3 3 l 2 -2"/><path d="M 145 120 l 3 -3 l -1 5 l 4 1 l 2 -4"/><path d="M 175 130 l -4 -2 l 1 4 l 3 1"/></g><g fill="#3B82F6" opacity="0.55"><circle cx="125" cy="100" r="1.4"/><circle cx="130" cy="115" r="1.4"/><circle cx="145" cy="100" r="1.4"/><circle cx="155" cy="90" r="1.4"/><circle cx="165" cy="105" r="1.4"/><circle cx="180" cy="90" r="1.4"/><circle cx="195" cy="115" r="1.4"/><circle cx="155" cy="130" r="1.4"/><circle cx="190" cy="80" r="1.4"/><circle cx="120" cy="120" r="1.4"/><circle cx="200" cy="100" r="1.4"/><circle cx="170" cy="118" r="1.4"/></g></svg>',
        hotspots: [
          {
            id: 'cpm-brownian-h-pollen-grains',
            x: 35,
            y: 40,
            label: 'Pollen grains float in a water drop',
            description:
              'Robert Brown placed pollen from a plant in a single drop of water on a microscope slide and watched the grains under high magnification.',
          },
          {
            id: 'cpm-brownian-h-pollen-jiggle',
            x: 60,
            y: 55,
            label: 'Each grain jiggles in a random path',
            description:
              'Brown noticed that every grain darted around in short, irregular steps. The path never repeats and is different for each grain.',
          },
          {
            id: 'cpm-brownian-h-pollen-water',
            x: 35,
            y: 70,
            label: 'Invisible water particles bombard the grains',
            description:
              'We now explain the motion as water particles hitting the grain from every side. The hits do not perfectly cancel, so the grain is pushed first one way then another.',
          },
          {
            id: 'cpm-brownian-h-pollen-limits',
            x: 70,
            y: 80,
            label: 'What Brown could and could not prove',
            description:
              'Brown saw the motion but could not see the water particles themselves. The jiggling is strong evidence for particles, but on its own it does not pin down their size or how many there are.',
          },
        ],
      },
    },
    {
      id: 'cpm-brownian-scene-dust-sunbeam',
      title: 'Dust Motes in a Sunbeam, Lake District Cottage',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on this scene of dust drifting in a shaft of sunlight to read why a sunlit room is a free everyday demonstration of Brownian motion.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#1F2937"/><polygon points="30,20 90,20 230,180 170,180" fill="#FDE68A" opacity="0.55"/><rect x="30" y="10" width="60" height="15" fill="#FBBF24" stroke="#92400E" stroke-width="1.2"/><text x="60" y="8" text-anchor="middle" font-size="8" fill="#FEF3C7">window</text><g fill="#FEF3C7" opacity="0.9"><circle cx="80" cy="60" r="1.8"/><circle cx="110" cy="80" r="1.8"/><circle cx="140" cy="100" r="1.8"/><circle cx="170" cy="120" r="1.8"/><circle cx="90" cy="100" r="1.8"/><circle cx="130" cy="130" r="1.8"/><circle cx="160" cy="80" r="1.8"/><circle cx="200" cy="140" r="1.8"/><circle cx="100" cy="150" r="1.8"/><circle cx="180" cy="100" r="1.8"/></g><g stroke="#FEF3C7" stroke-width="0.5" fill="none" opacity="0.7"><path d="M 110 80 l 4 -3 l 2 5 l -3 3"/><path d="M 140 100 l -3 3 l 4 2 l 2 -3"/><path d="M 170 120 l 3 -4 l -1 5 l 3 -2"/><path d="M 90 100 l -3 4 l 5 1 l -1 -4"/></g><text x="160" y="195" text-anchor="middle" font-size="9" fill="#FEF3C7">dust motes drift on a shaft of sunlight</text></svg>',
        hotspots: [
          {
            id: 'cpm-brownian-h-dust-shaft',
            x: 50,
            y: 25,
            label: 'A bright shaft of sunlight crosses a dark room',
            description:
              'Outside the beam the dust is invisible. Inside the beam each speck scatters light back to your eye, just like the smoke specks in the lab smoke cell.',
          },
          {
            id: 'cpm-brownian-h-dust-jiggle',
            x: 40,
            y: 55,
            label: 'Each speck drifts on a jagged path',
            description:
              'Look closely at one mote. It does not fall in a straight line. It zigzags as it slowly drifts down, pushed off course by invisible air particles.',
          },
          {
            id: 'cpm-brownian-h-dust-air',
            x: 75,
            y: 60,
            label: 'Air particles you cannot see do the pushing',
            description:
              'A still room is still full of nitrogen and oxygen particles moving at hundreds of metres per second. They batter every speck of dust thousands of times per second.',
          },
          {
            id: 'cpm-brownian-h-dust-size',
            x: 70,
            y: 85,
            label: 'Why only the smallest specks jiggle visibly',
            description:
              'A heavy speck barely budges because each hit is tiny compared with its mass. A very small speck has a much smaller mass, so the imbalance in the hits is enough to shift it.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-brownian-worked-1',
      title: 'Why a smoke speck in the school smoke cell darts about',
      steps: [
        {
          explanation:
            'Set the scene. A teacher lights a small piece of paper and traps the smoke in a glass cell. A lamp shines from the side and a microscope looks down on the cell.',
        },
        {
          explanation:
            'A pupil sees tiny bright specks against a dark background. Each speck is one piece of smoke, just big enough to scatter light back into the microscope.',
        },
        {
          explanation:
            'The air inside the cell is full of nitrogen and oxygen particles. They are far too small to see, but they move at very high speed in random directions.',
          maths: 'air particle speed: around 500 metres per second on average',
        },
        {
          explanation:
            'Each smoke speck is hit by air particles thousands of times every second, from every side.',
        },
        {
          explanation:
            'At any moment a few more hits come from one side than the other by pure chance. The speck is light enough for that imbalance to push it a tiny step in one direction.',
        },
        {
          explanation:
            'A fraction of a second later the imbalance is different, so the speck darts off in a new direction. The path looks jagged and random because each step is set by chance.',
        },
        {
          explanation:
            'So a smoke speck jiggling under the microscope is direct evidence that air must be made of many tiny particles moving very fast.',
        },
      ],
    },
    {
      id: 'cpm-brownian-worked-2',
      title:
        'Why a heavy steel ball bearing in the same air shows no Brownian motion',
      steps: [
        {
          explanation:
            'Question: A teacher places a small steel ball bearing on a lab bench in the same room as the smoke cell. The room temperature is 20 degrees Celsius. Why does the ball bearing sit perfectly still while a smoke speck in the cell darts about?',
        },
        {
          explanation:
            'Step 1: Identify what is the same. Both the smoke speck and the ball bearing are being hit by air particles many thousands of times per second from every side.',
        },
        {
          explanation:
            'Step 2: Identify what is different. The ball bearing has a much greater mass than a single smoke speck. A speck of smoke has a mass measured in nanograms, while the ball bearing has a mass measured in grams.',
        },
        {
          explanation:
            'Step 3: Apply the particle model. The push from one air particle hit is the same in both cases. For the smoke speck this push is enough to nudge it a visible distance because the speck is so light.',
        },
        {
          explanation:
            'Step 4: For the ball bearing the same push is far too small compared with its mass to give a visible movement. The acceleration from each hit is tiny, so the bearing just sits still.',
          maths: 'acceleration: a = force divided by mass; large mass gives tiny a',
        },
        {
          explanation:
            'Step 5: Pull the thread back to the question. So Brownian motion is only visible on very small, light particles like smoke or pollen, even when the air around the heavier object is identical.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-brownian-q1',
      type: 'multiple-choice',
      stem: 'In the school smoke cell experiment, which particles is the pupil actually looking at under the microscope?',
      tier: 'core',
      options: [
        'Individual air particles bouncing about',
        'Smoke specks lit up by the lamp',
        'Drops of water condensing on the glass',
        'The flame from the burning paper',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-brownian-mis-see-air-particles',
    },
    {
      id: 'cpm-brownian-q2',
      type: 'multiple-choice',
      stem: 'What causes the smoke specks in the cell to dart about on a jagged, random path?',
      tier: 'core',
      options: [
        'Heat from the lamp boiling the air inside the cell',
        'Tiny tremors from pupils walking past the bench',
        'Invisible air particles hitting each smoke speck from all sides, with the hits not perfectly cancelling',
        'A draught from the air conditioning above the lab',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-brownian-mis-lamp-heat',
    },
    {
      id: 'cpm-brownian-q3',
      type: 'multiple-choice',
      stem: 'Which observation provides direct evidence that gases are made of many tiny particles moving at high speed?',
      tier: 'core',
      options: [
        'Dust drifting on a sunbeam in a still room, with each speck zigzagging on a random path',
        'A balloon floating up into the air when you let go of it',
        'Steam rising slowly above a cup of tea',
        'A candle flame flickering when the door opens',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-brownian-mis-needs-draught',
    },
    {
      id: 'cpm-brownian-q4',
      type: 'multiple-choice',
      stem: 'Robert Brown looked at pollen grains in a drop of water in 1827. What did he actually see?',
      tier: 'core',
      options: [
        'Water particles whizzing about between the grains',
        'The pollen grains slowly dissolving into the water',
        'Each pollen grain darting about on a random path, even with no stirring',
        'The grains lining up neatly in rows',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-brownian-mis-see-water-particles',
    },
    {
      id: 'cpm-brownian-q5',
      type: 'drag-order',
      stem: 'Order these steps in a clear explanation of why a smoke speck jiggles in the smoke cell, from start to finish.',
      tier: 'core',
      items: [
        'A small speck of smoke is lit by the lamp and sits in the cell.',
        'Air particles move at very high speed and hit the speck from every side.',
        'At any moment the hits do not perfectly cancel, so the speck is pushed in one direction.',
        'A split second later the imbalance is different, so the speck darts off in a new direction.',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
    },
    {
      id: 'cpm-brownian-q6',
      type: 'numeric-entry',
      stem: 'A pupil watches one smoke speck under a school microscope for 30 seconds and counts the number of times its direction visibly changes. The count is 60. How many direction changes per second is that, on average?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'per second',
      xpValue: 10,
      hint: 'Average rate equals total count divided by total time.',
    },
    {
      id: 'cpm-brownian-q7',
      type: 'spot-misconception',
      stem: 'Olivia says: "If I look really carefully through the microscope at the smoke cell, I am watching individual air particles bumping into the smoke."',
      tier: 'core',
      statements: [
        {
          text: 'Olivia is right. The microscope shows both the air particles and the smoke specks at the same time.',
          isMisconception: true,
        },
        {
          text: 'Olivia is wrong. The microscope only shows the smoke specks. The air particles are far too small to see, but the way the specks dart about is evidence that the air particles are there.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-brownian-mis-see-air-particles',
    },
    {
      id: 'cpm-brownian-q8',
      type: 'multiple-choice',
      stem: 'Two cells are set up side by side. Cell A holds smoke. Cell B holds a single steel ball bearing, 2 mm across, sitting on the glass. Both are at room temperature. Which best describes what a pupil sees under the same microscope?',
      tier: 'confident',
      options: [
        'Smoke specks jiggle in cell A; the ball bearing sits perfectly still in cell B',
        'Both jiggle by the same amount because the air around them is the same',
        'Smoke specks jiggle in cell A; the ball bearing jiggles even more because it is bigger',
        'Neither jiggles, because there is no draught in a still room',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpm-brownian-mis-mass-irrelevant',
    },
    {
      id: 'cpm-brownian-q9',
      type: 'multiple-choice',
      stem: 'Why is a heavy 2 mm steel ball bearing not seen to jiggle in the same air that makes a smoke speck dart about?',
      tier: 'confident',
      options: [
        'The air particles are scared of metal and avoid it',
        'The ball bearing has a much greater mass, so each tiny air particle hit produces only a tiny acceleration',
        'The air around heavier objects is denser, so it presses evenly and cancels out',
        'Steel reflects light, so the microscope shows it as still even when it is moving',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-brownian-mis-mass-irrelevant',
    },
    {
      id: 'cpm-brownian-q10',
      type: 'multiple-choice',
      stem: 'In the Lake District cottage scene, why do the dust motes in the sunbeam not all fall straight down to the floor?',
      tier: 'confident',
      options: [
        'Sunlight is hot enough to push them upward against gravity',
        'They are charged and stick to each other',
        'Air particles batter each speck thousands of times per second, knocking it off a straight downward path',
        'There is always a small draught in any room, even with the windows shut',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpm-brownian-mis-needs-draught',
    },
    {
      id: 'cpm-brownian-q11',
      type: 'numeric-entry',
      stem: 'A pupil draws the path of one smoke speck. Over a 60 second tracking interval the speck travels 0.12 mm. Calculate the average speed of the speck in micrometres per second. One millimetre is 1000 micrometres.',
      tier: 'confident',
      correctAnswer: 2,
      unit: 'micrometres per second',
      xpValue: 15,
      hint: 'Convert 0.12 mm into micrometres first, then divide by the time in seconds.',
    },
    {
      id: 'cpm-brownian-q12',
      type: 'spot-misconception',
      stem: 'Harvir says: "The smoke specks dart about because the lamp heats up the air inside the smoke cell and warm air rises."',
      tier: 'confident',
      statements: [
        {
          text: 'Harvir is right. The dart is caused by warm air currents rising past the smoke specks.',
          isMisconception: true,
        },
        {
          text: 'Harvir is wrong. The dart is caused by random hits from air particles on each speck. Even when the lamp is on for a long time and the air is at a steady temperature, the jiggle keeps going.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-brownian-mis-lamp-heat',
    },
    {
      id: 'cpm-brownian-q13',
      type: 'numeric-entry',
      stem: 'A pupil compares two smoke specks of the same size in the same cell. Speck X is tracked for 10 seconds and travels 5 micrometres. Speck Y is tracked for 25 seconds and travels 12 micrometres. To 1 decimal place, what is the ratio of Y travel to X travel, expressed as Y divided by X?',
      tier: 'confident',
      correctAnswer: 2.4,
      tolerance: 0.05,
      xpValue: 15,
      hint: 'Just divide 12 by 5; do not worry about the times yet.',
    },
    {
      id: 'cpm-brownian-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil writes a four step explanation of why a pollen grain in a drop of water jiggles even though the water is not stirred. Step 3 is missing.',
      tier: 'confident',
      steps: [
        'A pollen grain is light enough that even very tiny pushes can shift it.',
        'The drop of water is full of water particles in constant random motion, even with no stirring.',
        null,
        'The pollen grain then darts about on a jagged, random path that we call Brownian motion.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Water particles hit the pollen grain from every side thousands of times per second, and the hits do not exactly cancel out, so the grain is pushed first one way then another.',
      xpValue: 20,
    },
    {
      id: 'cpm-brownian-q15',
      type: 'multiple-choice',
      stem: 'A school technician sets up the smoke cell with no smoke in it, just clean air, and switches on the lamp. Which sentence best describes what a pupil will see through the microscope?',
      tier: 'challenge',
      options: [
        'Air particles jiggling, but very faintly',
        'A faint glow that flickers in time with the lamp',
        'A handful of large bright specks bouncing about, just like a normal run',
        'A clear field of view with no jiggling, because the air particles are far too small to be visible at school microscope magnification',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-brownian-mis-see-air-particles',
    },
    {
      id: 'cpm-brownian-q16',
      type: 'multiple-choice',
      stem: 'A pupil in a Year 11 GCSE class argues: "Brownian motion is proof that matter is made of particles, full stop." Which evaluation of this claim is most accurate?',
      tier: 'challenge',
      options: [
        'The claim is fine because the jiggling can only be caused by particles',
        'The claim is wrong because Brownian motion is just to do with air currents',
        'The jiggling is very strong evidence for particles, but on its own it does not tell us how many particles there are or how big they are; further work, such as Einsteins 1905 analysis, was needed to pin those down',
        'The claim is wrong because Robert Brown thought the pollen was alive, so the observation is unreliable',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpm-brownian-mis-proves-everything',
    },
    {
      id: 'cpm-brownian-q17',
      type: 'numeric-entry',
      stem: 'A teacher warms the smoke cell from 20 degrees Celsius to 60 degrees Celsius. The average speed of the air particles inside roughly doubles in kinetic terms. A smoke speck that was tracked moving 1.5 micrometres per second at 20 degrees Celsius now moves about how many micrometres per second at 60 degrees Celsius? Give your answer to 1 decimal place.',
      tier: 'challenge',
      correctAnswer: 3,
      tolerance: 0.2,
      unit: 'micrometres per second',
      xpValue: 25,
      hint: 'Faster air particles hit harder and more often. If their kinetic effect doubles, the speck moves at roughly double the speed.',
      misconceptionId: 'cpm-brownian-mis-temperature-no-effect',
    },
    {
      id: 'cpm-brownian-q18',
      type: 'numeric-entry',
      stem: 'A GCSE class reads that at room temperature an average air particle hits a typical smoke speck about 1.0 multiplied by 10 to the power 21 times every second. Over a 60 second observation in the smoke cell, roughly how many hits is that, given as a power of ten? Enter only the exponent.',
      tier: 'challenge',
      correctAnswer: 22,
      xpValue: 25,
      hint: 'Multiply 1.0 multiplied by 10 to the power 21 by 60, then write the answer as 6.0 multiplied by 10 to some power. Round the power to the nearest whole number.',
    },
    {
      id: 'cpm-brownian-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil writes a five step argument that smoke specks in the cell are being pushed by air particles, not by a draught. Step 4 is missing.',
      tier: 'challenge',
      steps: [
        'Seal the smoke cell so the air inside it cannot exchange with the rest of the room.',
        'Wait until the smoke has settled, with no flow visible to the eye.',
        'Look at one speck under the microscope. It still darts about in random directions.',
        null,
        'So the jiggling cannot be caused by a draught; it must be caused by random hits from invisible air particles in the sealed cell.',
      ],
      missingStepIndex: 3,
      correctStep:
        'A draught is a flow of air in one direction, so it would push every speck the same way at the same time, but each speck darts on a different random path.',
      xpValue: 25,
      misconceptionId: 'cpm-brownian-mis-needs-draught',
    },
    {
      id: 'cpm-brownian-q20',
      type: 'data-extraction',
      stem: 'A GCSE class records how far a single smoke speck travels over a 60 second tracking interval at four temperatures: 5 degrees Celsius, 0.9 micrometres; 20 degrees Celsius, 1.5 micrometres; 40 degrees Celsius, 2.4 micrometres; 60 degrees Celsius, 3.0 micrometres. Read off the distance the speck travels at 40 degrees Celsius in micrometres.',
      tier: 'challenge',
      dataSource:
        'Distance one smoke speck travels over a 60 second tracking interval at four temperatures: 5 degrees Celsius, 0.9 micrometres; 20 degrees Celsius, 1.5 micrometres; 40 degrees Celsius, 2.4 micrometres; 60 degrees Celsius, 3.0 micrometres.',
      correctAnswer: '2.4',
      xpValue: 25,
      hint: 'Find the row where the temperature column reads 40 degrees Celsius.',
      misconceptionId: 'cpm-brownian-mis-temperature-no-effect',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2019, Paper 1F (8464/C/1F), comment on Brownian motion questions: "many learners stated that the microscope showed air particles directly, when in fact only the smoke specks are visible and the air particles are inferred from the motion of the specks." Reinforced in CGP KS3 Chemistry Study Guide, particle model section "Common mistake" callout.
    {
      id: 'cpm-brownian-mis-see-air-particles',
      description:
        'In the smoke cell experiment the microscope shows you the air particles themselves bouncing around.',
      triggerAnswer: 'see-air-particles',
      correction:
        'In fact the microscope only shows the smoke specks. Air particles are far too small to see. Their existence is inferred from how the specks dart about.',
      reExplanation:
        'A school microscope shows objects down to about a thousandth of a millimetre. Air particles are nearer a millionth, so they are far too small to see. What you see in the cell is the smoke. The way each smoke speck jiggles is the clue that something invisible must be hitting it. The particles do the pushing; the smoke does the showing.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "Learners frequently attribute Brownian motion to draughts, currents or the heat of the lamp rather than to random collisions with particles." Also flagged in the Best Evidence Science Teaching diagnostic on particle evidence (UCL / STEM Learning).
    {
      id: 'cpm-brownian-mis-needs-draught',
      description:
        'Smoke specks and dust motes only jiggle because there is a draught or a breeze in the room.',
      triggerAnswer: 'needs-draught',
      correction:
        'In fact the jiggling keeps going in a sealed cell with no draught at all. A draught would push every speck the same way; instead, each speck darts on its own random path.',
      reExplanation:
        'Seal the smoke cell so the air inside it cannot exchange with the room. Switch off any fans and shut the windows. Each speck still darts about on a different random path. A draught is a one way flow, so it would carry every speck along together. The fact that nearby specks move in different directions at the same moment is the giveaway that random particle hits, not a draught, are doing the pushing.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q03 on the smoke cell: candidates often wrote that the lamp heating the air made the smoke specks move, missing the role of random collisions. Reinforced by OCR Gateway Chemistry examiner reports for J248 on the particle model (2019, 2022).
    {
      id: 'cpm-brownian-mis-lamp-heat',
      description:
        'The smoke specks dart about because the lamp heats the air inside the cell and warm air rises.',
      triggerAnswer: 'lamp-heat',
      correction:
        'In fact the jiggling continues even when the air inside the cell is at a steady temperature. The lamp is there to light up the specks, not to drive the motion.',
      reExplanation:
        'If warm air rising were the cause, every smoke speck would slowly drift upward together. Instead, nearby specks dart off in different random directions at the same instant. The lamp simply makes the specks visible by scattering light off them. The energy that drives the dart comes from the particles in the air, which already move very fast at any everyday temperature.',
    },
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2018 (8464/C/1F): "candidates struggled to explain why heavy objects do not show Brownian motion in the same air that moves smoke specks, with many writing that mass does not matter." Reinforced in CGP KS3 Chemistry Common mistake box on the smoke cell.
    {
      id: 'cpm-brownian-mis-mass-irrelevant',
      description:
        'Any object placed in the air should jiggle by the same amount, because the air around it is the same.',
      triggerAnswer: 'mass-irrelevant',
      correction:
        'In fact mass matters. Each hit is tiny, so a heavy object barely accelerates from any single hit, while a very light speck of smoke is shoved a visible distance.',
      reExplanation:
        'Picture a ball bearing and a speck of smoke in the same air. Both are battered by air particles thousands of times per second. The push from each hit is roughly the same, but the bearing is millions of times heavier, so the acceleration from each hit is far smaller. That is why only very small, light particles show visible Brownian motion in a school lab.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "Learners report seeing the water particles directly between the pollen grains, mirroring their confusion in the smoke cell." Also cited in BEST diagnostic question sets on particle evidence (UCL / STEM Learning).
    {
      id: 'cpm-brownian-mis-see-water-particles',
      description:
        'When Robert Brown looked at pollen in water, he was actually watching the water particles whizzing about between the pollen grains.',
      triggerAnswer: 'see-water-particles',
      correction:
        'In fact Brown saw the pollen grains, not the water particles. Water particles are far too small to see in a school microscope. Their existence is inferred from how the grains jiggle.',
      reExplanation:
        'The pollen grains in Browns famous note were just visible under a high power optical microscope. Water particles are thousands of times smaller and stay invisible at that magnification. What Brown could record was the jagged path of each grain. The conclusion that something invisible kept pushing the grains is the same logic used in the smoke cell with air.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F): candidates often wrote that "Brownian motion proves the size of particles" or that the experiment "proves the whole particle model on its own", missing the historical role of Einsteins 1905 analysis. Reinforced in OCR Gateway Chemistry teacher guide on evidence for particles (J248).
    {
      id: 'cpm-brownian-mis-proves-everything',
      description:
        'Brownian motion on its own proves the whole particle model, including the size and number of particles in a sample of air.',
      triggerAnswer: 'proves-everything',
      correction:
        'In fact the jiggling is strong evidence that particles exist, but it does not tell us their size or number. Einsteins 1905 analysis was needed to pin those down.',
      reExplanation:
        'Brownian motion on its own can tell you that something invisible is hitting the speck many times a second and that the hits are random. To turn that into numbers for particle size or how many particles are in a sample, scientists need extra steps. Einstein in 1905 worked out the maths linking the average dart distance to the size of the particles, and his theory was tested by Jean Perrin a few years later.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a recurring trigger is that learners expect Brownian motion to be the same at every temperature, mirroring the diffusion finding that "warming has no effect on rate". Also flagged in CGP KS3 Chemistry common mistake callouts on the particle model.
    {
      id: 'cpm-brownian-mis-temperature-no-effect',
      description:
        'The rate of Brownian motion is the same at every temperature. Warming the smoke cell does not change how much the specks jiggle.',
      triggerAnswer: 'temperature-no-effect',
      correction:
        'In fact warmer air has faster particles, so each smoke speck is hit harder and more often. The jiggling becomes more vigorous and the speck covers more ground per second.',
      reExplanation:
        'Air particles at 60 degrees Celsius move faster on average than at 20 degrees Celsius. Faster particles hit the smoke speck more often and with more force. That makes the speck dart further between direction changes. In a careful school experiment the average distance covered per second by a speck roughly doubles between room temperature and freshly heated air, exactly the pattern seen in many GCSE practicals.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
