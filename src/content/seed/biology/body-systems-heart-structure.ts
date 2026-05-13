import type { SkillNode } from '@/types/content'

const heartCrossSectionSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Front view of a human heart, cut open</text>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Right side of the heart is on the left of the page (the patient's own right).</text>
  <line x1="300" y1="80" x2="300" y2="340" stroke="#1F2937" stroke-width="3" stroke-dasharray="6 4" />
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Septum: a muscular wall that keeps the two sides apart.</text>
  <rect x="120" y="120" width="160" height="80" rx="14" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="200" y="155" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Right atrium</text>
  <text x="200" y="175" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Receives blood low in oxygen from the body.</text>
  <rect x="120" y="220" width="160" height="110" rx="14" fill="#93C5FD" stroke="#1D4ED8" stroke-width="3" />
  <text x="200" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Right ventricle</text>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Pumps blood to the lungs.</text>
  <text x="200" y="300" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Wall is thinner than the left.</text>
  <rect x="320" y="120" width="160" height="80" rx="14" fill="#FECACA" stroke="#991B1B" stroke-width="2" />
  <text x="400" y="155" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Left atrium</text>
  <text x="400" y="175" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Receives oxygen-rich blood from the lungs.</text>
  <rect x="320" y="220" width="160" height="110" rx="14" fill="#F87171" stroke="#7F1D1D" stroke-width="5" />
  <text x="400" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Left ventricle</text>
  <text x="400" y="280" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Pumps blood out to the whole body.</text>
  <text x="400" y="300" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Thick muscular wall.</text>
  <line x1="135" y1="210" x2="265" y2="210" stroke="#0F172A" stroke-width="3" />
  <text x="200" y="218" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F172A">Tricuspid valve</text>
  <line x1="335" y1="210" x2="465" y2="210" stroke="#0F172A" stroke-width="3" />
  <text x="400" y="218" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F172A">Mitral valve</text>
  <circle cx="200" cy="110" r="6" fill="#FACC15" stroke="#854D0E" stroke-width="2" />
  <text x="200" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F172A">Pulmonary valve</text>
  <circle cx="400" cy="110" r="6" fill="#FACC15" stroke="#854D0E" stroke-width="2" />
  <text x="400" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F172A">Aortic valve</text>
  <line x1="200" y1="90" x2="200" y2="60" stroke="#1D4ED8" stroke-width="6" />
  <text x="160" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Pulmonary artery</text>
  <text x="160" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">(to lungs)</text>
  <line x1="400" y1="90" x2="400" y2="60" stroke="#991B1B" stroke-width="6" />
  <text x="440" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Aorta</text>
  <text x="440" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#475569">(to body)</text>
  <line x1="100" y1="160" x2="120" y2="160" stroke="#1D4ED8" stroke-width="5" />
  <text x="78" y="156" text-anchor="end" font-family="sans-serif" font-size="11" fill="#1F2937">Vena cava</text>
  <text x="78" y="170" text-anchor="end" font-family="sans-serif" font-size="9" fill="#475569">(from body)</text>
  <line x1="480" y1="160" x2="500" y2="160" stroke="#991B1B" stroke-width="5" />
  <text x="522" y="156" text-anchor="start" font-family="sans-serif" font-size="11" fill="#1F2937">Pulmonary vein</text>
  <text x="522" y="170" text-anchor="start" font-family="sans-serif" font-size="9" fill="#475569">(from lungs)</text>
</svg>
`.trim()

const vesselCompareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three blood vessels side by side</text>
  <text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Cross sections drawn to roughly the same scale.</text>
  <circle cx="140" cy="160" r="60" fill="#FECACA" stroke="#7F1D1D" stroke-width="14" />
  <circle cx="140" cy="160" r="18" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="2" />
  <text x="140" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Artery</text>
  <text x="140" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Thick muscular wall, small lumen.</text>
  <text x="140" y="272" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Carries blood away from the heart.</text>
  <text x="140" y="286" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">High pressure.</text>
  <circle cx="300" cy="160" r="60" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="4" />
  <circle cx="300" cy="160" r="48" fill="#FFFFFF" stroke="#1D4ED8" stroke-width="2" />
  <rect x="290" y="148" width="20" height="24" fill="#A3E635" stroke="#365314" stroke-width="2" />
  <text x="300" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Vein</text>
  <text x="300" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Thin wall, wide lumen, valves inside.</text>
  <text x="300" y="272" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Carries blood back to the heart.</text>
  <text x="300" y="286" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Low pressure.</text>
  <circle cx="470" cy="160" r="20" fill="#FECACA" stroke="#7F1D1D" stroke-width="1.5" />
  <circle cx="470" cy="160" r="15" fill="#FFFFFF" stroke="#7F1D1D" stroke-width="1" />
  <text x="470" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Capillary</text>
  <text x="470" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Wall is one cell thick.</text>
  <text x="470" y="272" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Links arteries to veins at body cells.</text>
  <text x="470" y="286" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Allows exchange of substances.</text>
  <rect x="40" y="320" width="520" height="60" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="342" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">An aorta is about 25 mm across. A capillary is about 0.008 mm (8 micrometres) across.</text>
  <text x="300" y="362" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A red blood cell just squeezes through a capillary in single file.</text>
</svg>
`.trim()

const valveActionSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">How a heart valve stops blood flowing backwards</text>
  <text x="150" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Open</text>
  <text x="150" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Blood flows the right way.</text>
  <rect x="60" y="110" width="180" height="180" rx="12" fill="#F1F5F9" stroke="#0F172A" stroke-width="2" />
  <line x1="80" y1="180" x2="120" y2="220" stroke="#0F172A" stroke-width="3" />
  <line x1="220" y1="180" x2="180" y2="220" stroke="#0F172A" stroke-width="3" />
  <polygon points="150,140 142,160 158,160" fill="#1D4ED8" stroke="#1D4ED8" stroke-width="2" />
  <line x1="150" y1="160" x2="150" y2="260" stroke="#1D4ED8" stroke-width="3" stroke-dasharray="4 4" />
  <text x="150" y="305" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1D4ED8">Flow direction: ventricle to vessel.</text>
  <text x="450" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Closed</text>
  <text x="450" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Backflow is blocked.</text>
  <rect x="360" y="110" width="180" height="180" rx="12" fill="#F1F5F9" stroke="#0F172A" stroke-width="2" />
  <line x1="380" y1="180" x2="450" y2="200" stroke="#0F172A" stroke-width="3" />
  <line x1="520" y1="180" x2="450" y2="200" stroke="#0F172A" stroke-width="3" />
  <polygon points="450,260 442,240 458,240" fill="#991B1B" stroke="#991B1B" stroke-width="2" />
  <line x1="450" y1="240" x2="450" y2="220" stroke="#991B1B" stroke-width="3" stroke-dasharray="4 4" />
  <text x="450" y="305" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991B1B">Pressure pushes the flaps shut.</text>
  <rect x="40" y="330" width="520" height="50" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="300" y="353" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Valves are tough flaps of fibrous connective tissue, not bone.</text>
  <text x="300" y="372" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">They snap shut at each heartbeat; that snap is the "lub-dub" you hear with a stethoscope.</text>
</svg>
`.trim()

export const heartStructure: SkillNode = {
  id: 'biology-body-systems-heart-structure',
  title: 'Heart Structure and Blood Vessels',
  description:
    'Open up the heart to find four chambers, four valves, and the great vessels that connect it to the lungs and body. Then look closely at arteries, veins, and capillaries to see why their walls are built so differently. Builds on the double-circulation overview by zooming in to the parts that pump and the pipes that carry.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'confident',
  prerequisites: ['biology-body-systems-circulatory'],
  curriculum: {
    ks3Objective:
      'The role of the heart and blood vessels in transport; observation of mammalian heart structure; the distinction between arteries, veins and capillaries.',
    awardingBodies: {
      aqa: '4.2.2.2 The heart and blood vessels: chambers, valves, arteries, veins, capillaries (GCSE Biology 8461). Cover the four chambers, the four valves, and the structural differences between vessels.',
      edexcel:
        'CB2c The heart, arteries, veins, capillaries (GCSE Biology 1BI0, Topic 2). Describe the structure of the heart, including chambers and valves, and the structures of arteries, veins, and capillaries.',
      ocr: 'B2.1.2 Structure and function of the heart and blood vessels (GCSE Biology A J247). Describe the structures of the heart and blood vessels in relation to their functions.',
    },
  },
  scenes: [
    {
      id: 'bbs-hs-four-chambers',
      title: 'Inside the Heart: Four Chambers, Four Valves',
      type: 'labelled-diagram',
      instructions:
        'Click each label on this cross section to read what that chamber, valve, or vessel does.',
      data: {
        svg: heartCrossSectionSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-hs-cs-ra',
            x: 33,
            y: 40,
            label: 'Right atrium',
            description:
              'The upper chamber on the right side. Receives blood low in oxygen returning from the body through the vena cava.',
          },
          {
            id: 'bbs-hs-cs-rv',
            x: 33,
            y: 70,
            label: 'Right ventricle',
            description:
              'The lower chamber on the right. Pumps blood out to the lungs. Wall is thinner than the left ventricle because the lungs are close by.',
          },
          {
            id: 'bbs-hs-cs-la',
            x: 67,
            y: 40,
            label: 'Left atrium',
            description:
              'The upper chamber on the left side. Receives oxygen-rich blood returning from the lungs through the pulmonary vein.',
          },
          {
            id: 'bbs-hs-cs-lv',
            x: 67,
            y: 70,
            label: 'Left ventricle',
            description:
              'The lower chamber on the left. Pumps blood out to the whole body through the aorta. Has the thickest wall of any chamber.',
          },
          {
            id: 'bbs-hs-cs-tri',
            x: 33,
            y: 55,
            label: 'Tricuspid valve',
            description:
              'Sits between the right atrium and right ventricle. Stops blood flowing back up into the atrium when the ventricle squeezes.',
          },
          {
            id: 'bbs-hs-cs-mit',
            x: 67,
            y: 55,
            label: 'Mitral valve',
            description:
              'Sits between the left atrium and left ventricle. Also called the bicuspid valve because it has two flaps. Stops backflow into the left atrium.',
          },
          {
            id: 'bbs-hs-cs-pv',
            x: 33,
            y: 28,
            label: 'Pulmonary valve',
            description:
              'Sits where the pulmonary artery leaves the right ventricle. Stops blood that has gone out towards the lungs from sliding back into the heart.',
          },
          {
            id: 'bbs-hs-cs-av',
            x: 67,
            y: 28,
            label: 'Aortic valve',
            description:
              'Sits where the aorta leaves the left ventricle. Snaps shut after each beat so blood does not flow back from the body into the heart.',
          },
          {
            id: 'bbs-hs-cs-aorta',
            x: 73,
            y: 18,
            label: 'Aorta',
            description:
              'The biggest artery in the body, about 25 mm across in an adult. Carries oxygen-rich blood from the left ventricle out to every part of the body.',
          },
          {
            id: 'bbs-hs-cs-pa',
            x: 33,
            y: 18,
            label: 'Pulmonary artery',
            description:
              'The only artery in the body that carries blood low in oxygen. Leaves the right ventricle and heads to the lungs.',
          },
          {
            id: 'bbs-hs-cs-vc',
            x: 17,
            y: 40,
            label: 'Vena cava',
            description:
              'The large vein that brings blood low in oxygen back to the heart from the upper and lower body. Empties into the right atrium.',
          },
          {
            id: 'bbs-hs-cs-pulvein',
            x: 83,
            y: 40,
            label: 'Pulmonary vein',
            description:
              'The only vein in the body that carries oxygen-rich blood. Returns blood from the lungs to the left atrium.',
          },
          {
            id: 'bbs-hs-cs-septum',
            x: 50,
            y: 70,
            label: 'Septum',
            description:
              'A thick muscular wall down the middle. Keeps the two sides of the heart separate, so blood high in oxygen never mixes with blood low in oxygen inside the heart.',
          },
        ],
      },
    },
    {
      id: 'bbs-hs-vessel-types',
      title: 'Artery, Vein, and Capillary Compared',
      type: 'labelled-diagram',
      instructions:
        'Click each cross section to read the wall thickness, lumen size, pressure, and job for that vessel.',
      data: {
        svg: vesselCompareSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-hs-vt-artery',
            x: 23,
            y: 40,
            label: 'Artery',
            description:
              'Thick wall made of muscle and elastic fibres. Small lumen. Built to take the high pressure of blood pumped out of the heart. Carries blood away from the heart.',
          },
          {
            id: 'bbs-hs-vt-vein',
            x: 50,
            y: 40,
            label: 'Vein',
            description:
              'Thinner wall. Wide lumen. Lower pressure. Has valves along its length to stop blood flowing the wrong way. Carries blood back towards the heart.',
          },
          {
            id: 'bbs-hs-vt-cap',
            x: 78,
            y: 40,
            label: 'Capillary',
            description:
              'Wall is just one cell thick. Lumen is so narrow that red blood cells must travel in single file. This is where oxygen, food, and waste pass between blood and body cells.',
          },
          {
            id: 'bbs-hs-vt-sizes',
            x: 50,
            y: 85,
            label: 'Size benchmarks',
            description:
              'Aorta is about 25 mm across. Capillary is about 0.008 mm, the same as the width of a red blood cell.',
          },
        ],
      },
    },
    {
      id: 'bbs-hs-valve-action',
      title: 'How a Valve Prevents Backflow',
      type: 'labelled-diagram',
      instructions:
        'Click each side of the picture to see what the valve does in the open and closed positions.',
      data: {
        svg: valveActionSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-hs-va-open',
            x: 25,
            y: 50,
            label: 'Open valve',
            description:
              'The ventricle squeezes. Blood pushes the flaps apart and flows forward into the artery or out of the atrium into the ventricle.',
          },
          {
            id: 'bbs-hs-va-closed',
            x: 75,
            y: 50,
            label: 'Closed valve',
            description:
              'After the squeeze, blood ahead of the valve tries to slip back. The pressure pushes the flaps together and they seal. No backflow.',
          },
          {
            id: 'bbs-hs-va-tissue',
            x: 50,
            y: 85,
            label: 'What valves are made of',
            description:
              'Tough flaps of fibrous connective tissue, not bone. They snap shut at every beat; the snap is the "lub-dub" you hear through a stethoscope.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bbs-hs-worked-1',
      title: 'Tracing a drop of blood through every chamber and valve',
      steps: [
        {
          explanation:
            'A drop of blood, low in oxygen, has just returned from a run round the park. It enters the heart through the vena cava and arrives at the right atrium.',
        },
        {
          explanation:
            'Step 1: the right atrium fills, then squeezes. Blood passes down through the tricuspid valve into the right ventricle.',
        },
        {
          explanation:
            'Step 2: the right ventricle squeezes. Blood is pushed up through the pulmonary valve and out along the pulmonary artery to the lungs.',
        },
        {
          explanation:
            'Step 3: at the lungs the blood picks up oxygen and drops off carbon dioxide. It then returns through the pulmonary vein to the left atrium.',
        },
        {
          explanation:
            'Step 4: the left atrium squeezes. Blood passes down through the mitral valve (also called the bicuspid valve) into the left ventricle.',
        },
        {
          explanation:
            'Step 5: the left ventricle squeezes hard. Blood is forced up through the aortic valve and out along the aorta to the whole body.',
        },
        {
          explanation:
            'The drop has now gone through all four chambers and all four valves once. Order: right atrium, tricuspid, right ventricle, pulmonary valve, lungs, left atrium, mitral, left ventricle, aortic valve, body.',
        },
      ],
    },
    {
      id: 'bbs-hs-worked-2',
      title: 'Why the left ventricle wall is so much thicker than the right',
      steps: [
        {
          explanation:
            'A pupil dissecting a sheep heart in a Year 7 biology lab notices that one side of the heart is far meatier than the other. They are asked to explain why.',
        },
        {
          explanation:
            'Use the route first. The right ventricle pumps blood only as far as the lungs, which sit right next to the heart. The left ventricle pumps blood out through the aorta to the whole body, including up to the brain and down to the toes.',
        },
        {
          explanation:
            'Use the pressure next. A longer route needs higher pressure to keep the blood moving. The left ventricle therefore generates roughly five times the pressure of the right ventricle.',
        },
        {
          explanation:
            'Use the wall thickness last. To withstand and produce that higher pressure, the left wall has more muscle. In an adult heart the left wall is about three times thicker than the right.',
        },
        {
          maths: 'Left wall ≈ 3 x right wall thickness',
          explanation:
            'Sense check: both sides still pump the same volume of blood per beat (about 70 ml), but the left side must push it much further. More distance, more pressure, thicker wall.',
        },
        {
          explanation:
            'Final answer: the left ventricle wall is thicker because it must pump blood at high pressure all the way round the body, while the right wall only needs enough pressure to reach the nearby lungs.',
        },
      ],
    },
    {
      id: 'bbs-hs-worked-3',
      title: 'Working out cardiac output from heart rate and stroke volume',
      steps: [
        {
          explanation:
            'In a PE pulse-taking practical, a pupil records a resting heart rate of 72 beats per minute. Their biology textbook lists an average stroke volume of 70 ml, where stroke volume is the amount of blood pumped out of the left ventricle in one beat.',
        },
        {
          explanation:
            'Cardiac output is how much blood the heart pumps out per minute. The formula is heart rate multiplied by stroke volume.',
          maths: 'cardiac output = heart rate x stroke volume',
        },
        {
          explanation:
            'Substitute the values into the formula.',
          maths: 'cardiac output = 72 x 70 ml',
        },
        {
          explanation: 'Work out the multiplication.',
          maths: '72 x 70 = 5040 ml per minute',
        },
        {
          explanation:
            'Sense check against the NHS Choices benchmark for adult resting cardiac output, which is around 5 litres per minute. 5040 ml is just over 5 litres, so the answer is sensible.',
        },
        {
          explanation:
            'Final answer: the pupil pumps about 5040 ml, or just over 5 litres, of blood every minute at rest.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'bbs-hs-q1',
      type: 'multiple-choice',
      stem: 'How many chambers does a human heart have?',
      tier: 'core',
      options: ['2', '3', '4', '6'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Two on each side, one above the other.',
    },
    {
      id: 'bbs-hs-q2',
      type: 'multiple-choice',
      stem: 'Which chamber pumps oxygen-rich blood out to the whole body?',
      tier: 'core',
      options: [
        'Right atrium',
        'Right ventricle',
        'Left atrium',
        'Left ventricle',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The chamber feeds the aorta.',
      misconceptionId: 'bbs-hs-mis-atria-pump-out',
    },
    {
      id: 'bbs-hs-q3',
      type: 'multiple-choice',
      stem: 'Where in the heart does blood returning from the body first arrive?',
      tier: 'core',
      options: [
        'Right atrium',
        'Right ventricle',
        'Left atrium',
        'Left ventricle',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The vena cava empties straight into it.',
    },
    {
      id: 'bbs-hs-q4',
      type: 'multiple-choice',
      stem: 'Which blood vessel has a wall that is just one cell thick?',
      tier: 'core',
      options: ['Aorta', 'Vein', 'Capillary', 'Pulmonary artery'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'It is where exchange between blood and body cells happens.',
      misconceptionId: 'bbs-hs-mis-capillary-thick',
    },
    {
      id: 'bbs-hs-q5',
      type: 'numeric-entry',
      stem: 'A normal resting heart rate for a healthy adult, according to NHS guidance, sits between 60 and 100 beats per minute. What is the lower end of this normal range, in beats per minute?',
      tier: 'core',
      correctAnswer: 60,
      unit: 'bpm',
      xpValue: 10,
      hint: 'Read the lower bound of the range.',
      misconceptionId: 'bbs-hs-mis-heart-only-exercise',
    },
    {
      id: 'bbs-hs-q6',
      type: 'numeric-entry',
      stem: 'How many valves does a human heart have in total?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Two between atria and ventricles, two where the great arteries leave.',
    },
    {
      id: 'bbs-hs-q7',
      type: 'drag-order',
      stem: 'Put these parts in the order a drop of blood passes through them, starting from the right atrium.',
      tier: 'core',
      items: [
        'Pulmonary valve',
        'Tricuspid valve',
        'Right ventricle',
        'Right atrium',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
      hint: 'Atrium first, then a valve, then a ventricle, then another valve.',
    },
    {
      id: 'bbs-hs-q8',
      type: 'multiple-choice',
      stem: 'Why is the wall of the left ventricle thicker than the wall of the right ventricle?',
      tier: 'confident',
      options: [
        'The left ventricle pumps blood only to the lungs, which are far away.',
        'The left ventricle pumps blood to the whole body at high pressure, while the right only pumps as far as the lungs.',
        'The left side of the heart holds more blood than the right side.',
        'The left ventricle is the upper chamber and needs to support the atria above it.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Compare how far each side has to push the blood.',
    },
    {
      id: 'bbs-hs-q9',
      type: 'multiple-choice',
      stem: 'Which vessel carries blood low in oxygen, even though it is an artery?',
      tier: 'confident',
      options: [
        'Aorta',
        'Vena cava',
        'Pulmonary artery',
        'Pulmonary vein',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'It leaves the right ventricle and heads to the lungs.',
      misconceptionId: 'bbs-hs-mis-arteries-always-oxygen',
    },
    {
      id: 'bbs-hs-q10',
      type: 'multiple-choice',
      stem: 'Which feature does a vein have that an artery does not?',
      tier: 'confident',
      options: [
        'A thick muscular wall.',
        'Valves along its length.',
        'A narrow lumen.',
        'A coat of cartilage.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Think about what stops blood flowing backwards on its way back up from your legs.',
    },
    {
      id: 'bbs-hs-q11',
      type: 'numeric-entry',
      stem: 'A British Heart Foundation factsheet gives an average resting stroke volume of 70 ml per beat. If a runner at parkrun has a heart rate of 60 beats per minute at rest, what is their cardiac output in millilitres per minute? Use cardiac output = heart rate x stroke volume.',
      tier: 'confident',
      correctAnswer: 4200,
      unit: 'ml/min',
      xpValue: 15,
      hint: 'Multiply 60 by 70.',
    },
    {
      id: 'bbs-hs-q12',
      type: 'numeric-entry',
      stem: 'An NHS blood-pressure reading is written as 120/80 mmHg. What is the top number (systolic pressure), in mmHg?',
      tier: 'confident',
      correctAnswer: 120,
      unit: 'mmHg',
      xpValue: 15,
      hint: 'It is the bigger of the two numbers, taken when the heart squeezes.',
    },
    {
      id: 'bbs-hs-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes: "The right and left sides of the heart are joined inside, so oxygen-rich and oxygen-low blood mix together in every beat."',
      tier: 'confident',
      statements: [
        {
          text: 'The claim is sound. Blood from the two sides meets and mixes inside the heart.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. A thick muscular wall called the septum keeps the two sides separate, so blood high in oxygen and blood low in oxygen do not mix inside a healthy heart.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bbs-hs-mis-sides-mix',
    },
    {
      id: 'bbs-hs-q14',
      type: 'free-text',
      stem: 'Explain in two or three sentences why an artery wall is much thicker than a vein wall, using the words pressure and pump.',
      tier: 'confident',
      sampleAnswer:
        'An artery carries blood that has just been pumped out of the heart at high pressure. A thick muscular wall stops the artery from bulging or bursting and helps keep the blood moving. A vein carries blood at low pressure on the way back to the heart, so its wall does not need to be as thick.',
      keywords: ['pressure', 'pump', 'thick', 'artery', 'vein'],
      xpValue: 15,
    },
    {
      id: 'bbs-hs-q15',
      type: 'multiple-choice',
      stem: 'A pupil watches a NHS Heart Tube station defibrillator training video that shows valves slamming shut. Which statement about heart valves is correct?',
      tier: 'challenge',
      options: [
        'Valves are made of bone, like ribs, and click as they meet.',
        'Valves are flaps of fibrous connective tissue that prevent backflow.',
        'Valves are tiny pumps that push blood from atrium to ventricle.',
        'Valves are nerves that signal the heart when to beat.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'bbs-hs-mis-valves-bone',
    },
    {
      id: 'bbs-hs-q16',
      type: 'multiple-choice',
      stem: 'During a 30-minute parkrun, a runner\'s heart rate climbs from 70 bpm at rest to 150 bpm. Stroke volume stays at about 70 ml. How does cardiac output change?',
      tier: 'challenge',
      options: [
        'It stays the same because stroke volume has not changed.',
        'It falls, because the heart has less time to fill each beat.',
        'It rises from about 4900 ml/min to about 10 500 ml/min.',
        'It rises from about 4900 ml/min to about 21 000 ml/min.',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: 'Use cardiac output = heart rate x stroke volume for each case, then compare.',
    },
    {
      id: 'bbs-hs-q17',
      type: 'numeric-entry',
      stem: 'A textbook says the aorta is about 25 mm across, and a capillary is about 0.008 mm across. Roughly how many times wider is the aorta than the capillary? Give your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 3125,
      tolerance: 10,
      xpValue: 20,
      hint: 'Divide 25 by 0.008.',
    },
    {
      id: 'bbs-hs-q18',
      type: 'numeric-entry',
      stem: 'In a Year 7 PE pulse-taking practical, a pupil counts 18 beats across a quarter of a minute at rest. What is their resting heart rate, in beats per minute?',
      tier: 'challenge',
      correctAnswer: 72,
      unit: 'bpm',
      xpValue: 20,
      hint: 'A quarter of a minute is one-quarter of 60, so multiply the count by 4.',
    },
    {
      id: 'bbs-hs-q19',
      type: 'spot-misconception',
      stem: 'A pupil writes: "All veins carry blood low in oxygen, and all arteries carry blood rich in oxygen, with no exceptions."',
      tier: 'challenge',
      statements: [
        {
          text: 'The claim is sound. Veins always carry blood low in oxygen and arteries always carry blood rich in oxygen.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. The pulmonary vein carries oxygen-rich blood from the lungs to the heart, and the pulmonary artery carries oxygen-low blood from the heart to the lungs. The rule is about direction of flow, not which gas the blood carries.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'bbs-hs-mis-veins-always-deox',
    },
    {
      id: 'bbs-hs-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step in this trace of a drop of blood from the lungs back round to the body.',
      tier: 'challenge',
      steps: [
        'Oxygen-rich blood leaves the lungs along the pulmonary vein and enters the left atrium.',
        'The left atrium squeezes; blood passes through the mitral valve into the left ventricle.',
        null,
        'Blood travels through the aorta and on into arteries that branch out to the whole body.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The left ventricle squeezes hard; blood is pushed up through the aortic valve and out into the aorta.',
      xpValue: 20,
      hint: 'Between the left ventricle and the aorta you must name a valve.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology 8461 Examiner's Report Paper 1 2019 and British Heart Foundation educational resource "How your heart works", both noting that pupils routinely state arteries always carry oxygenated blood and miss the pulmonary artery exception.
    {
      id: 'bbs-hs-mis-arteries-always-oxygen',
      description: 'All arteries carry oxygen-rich blood.',
      triggerAnswer: 'arteries-always-oxygen',
      correction:
        'Actually, the pulmonary artery is an exception. It carries blood low in oxygen from the heart to the lungs. The artery rule is about direction, not oxygen.',
      reExplanation:
        'An artery is defined by the way blood flows in it, away from the heart, not by what the blood carries. Most arteries do carry oxygen-rich blood out to the body. The pulmonary artery is the famous exception: it leaves the right ventricle full of blood low in oxygen and heads to the lungs to pick up oxygen.',
    },
    // Source: Edexcel GCSE Biology 1BI0 Examiners' Report Topic 2 2018 and Reiss & Tunnicliffe "Misconceptions in Biology", both flagging the "veins always carry deoxygenated blood" error and the pulmonary vein as the standard counter-example.
    {
      id: 'bbs-hs-mis-veins-always-deox',
      description: 'All veins carry blood low in oxygen.',
      triggerAnswer: 'veins-always-deox',
      correction:
        'In fact, the pulmonary vein is the exception. It carries oxygen-rich blood from the lungs to the left atrium. The vein rule is about direction, not oxygen.',
      reExplanation:
        'A vein is defined by the direction of flow: blood is heading back to the heart. Most veins carry blood low in oxygen back from body cells. The pulmonary vein is the standout exception. It returns from the lungs with a fresh load of oxygen and empties straight into the left atrium ready for the body loop.',
    },
    // Source: Best Evidence Science Teaching Year 7 unit "Circulation and gas exchange" and OCR GCSE Biology A J247 Examiners' Report 2021, both listing the idea that blood from the two sides mixes inside the heart as a stubborn KS3 misconception.
    {
      id: 'bbs-hs-mis-sides-mix',
      description:
        'Oxygen-rich and oxygen-low blood mix inside the heart because the chambers are joined.',
      triggerAnswer: 'sides-mix',
      correction:
        'Actually, a thick wall called the septum runs between the left and right sides. In a healthy heart, blood high in oxygen and blood low in oxygen never mix.',
      reExplanation:
        'The septum is a muscular wall down the middle of the heart. It keeps oxygen-rich blood on the left side and oxygen-low blood on the right side. The two sides squeeze at the same time, but the blood never crosses over. This separation is why the double circulation works: each side keeps its own job.',
    },
    // Source: AQA GCSE Biology 8461 Examiners' Report Paper 1 2022 and CLEAPSS guide PS78-13 on heart dissection practicals, both highlighting the idea that capillaries are thicker than arteries as a common Year 7 error.
    {
      id: 'bbs-hs-mis-capillary-thick',
      description: 'Capillaries have thicker walls than arteries because they connect to them.',
      triggerAnswer: 'capillary-thick',
      correction:
        'In fact, capillary walls are just one cell thick. That thinness is what lets oxygen, food, and waste pass between blood and body cells.',
      reExplanation:
        'A capillary is the smallest blood vessel and has the thinnest wall of any vessel: only a single layer of cells. Arteries have thick muscular walls to handle high pressure from the heart. Capillaries link arteries to veins at the body cells, and their thin wall makes them the only place exchange of gases and nutrients can happen.',
    },
    // Source: British Heart Foundation educational resource "How your heart works" and NHS Choices page on heart conditions, both stressing the heart pumps continuously, contrary to the pupil belief it only works during exercise.
    {
      id: 'bbs-hs-mis-heart-only-exercise',
      description: 'The heart only pumps when you exercise.',
      triggerAnswer: 'heart-only-exercise',
      correction:
        'Actually, the heart pumps all the time, day and night. Exercise makes it pump faster and harder, but a resting heart still beats around 60 to 100 times a minute.',
      reExplanation:
        'Body cells need a constant supply of oxygen and food, and a constant way to remove carbon dioxide. The heart has to keep pumping every minute of every day for that to happen. During exercise, heart rate rises and each beat moves more blood. At rest, the heart slows but never stops.',
    },
    // Source: Edexcel GCSE Biology 1BI0 Examiners' Report Topic 2 2020 and Best Evidence Science Teaching unit "Circulation and gas exchange", which both warn that pupils swap the roles of atria and ventricles.
    {
      id: 'bbs-hs-mis-atria-pump-out',
      description: 'The atria pump blood out of the heart.',
      triggerAnswer: 'atria-pump-out',
      correction:
        'In fact, the ventricles do the main pumping out of the heart. The atria fill up and then squeeze gently to push blood down into the ventricles.',
      reExplanation:
        'Atria sit on top and act as filling chambers. They receive blood from the great veins and pass it down to the ventricles through the tricuspid and mitral valves. The ventricles below have thick walls and do the powerful pumping: the right ventricle to the lungs, and the left ventricle out to the body through the aorta.',
    },
    // Source: Reiss & Tunnicliffe "Misconceptions in Biology" and OCR GCSE Biology A J247 Examiners' Report 2019, both citing the belief that heart valves are made of bone or cartilage as a Year 7 stumbling block.
    {
      id: 'bbs-hs-mis-valves-bone',
      description: 'Heart valves are made of bone.',
      triggerAnswer: 'valves-bone',
      correction:
        'Actually, heart valves are made of tough flaps of fibrous connective tissue, not bone. Bone would be too rigid to open and close at every beat.',
      reExplanation:
        'A valve has to swing open when blood pushes the right way and snap shut when blood tries to flow back. Bone is far too rigid to do that on every beat. Instead, valves are thin sheets of fibrous connective tissue, tethered by tough cords inside the ventricles. The lub-dub sound through a stethoscope is them closing.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
