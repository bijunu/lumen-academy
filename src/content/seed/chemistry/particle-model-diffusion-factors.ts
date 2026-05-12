import type { SkillNode } from '@/types/content'

export const diffusionFactors: SkillNode = {
  id: 'chemistry-particle-model-diffusion-factors',
  title: 'Factors Affecting Diffusion Rate',
  description:
    'Use the particle model to predict how the rate of diffusion changes with temperature, with the mass or size of the diffusing particles, and with the steepness of the concentration gradient. Apply these ideas to classic UK school lab demos, including the ammonia and hydrochloric acid cotton wool experiment.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-diffusion'],
  curriculum: {
    ks3Objective:
      'How diffusion rate depends on temperature, the mass (or size) of particles, and the concentration gradient; applying the particle model to explain why warm gases spread faster than cool gases.',
    awardingBodies: {
      aqa: '4.2.2.2 Diffusion; factors affecting rate of diffusion (8462)',
      edexcel: 'Topic 1.13 Diffusion; concentration gradient and temperature effects (1CH0)',
      ocr: 'C1.1d Diffusion; factors that increase or decrease the rate (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-diff-rate-toast',
      title: 'Smell of Toast: A Warm Plume Beats a Cold One',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how fast the smell of toast spreads on a warm summer morning and on a cold winter morning.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><rect x="0" y="160" width="320" height="20" fill="#D6D3D1"/><g><text x="80" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">WARM KITCHEN (24 C)</text><rect x="20" y="120" width="40" height="20" fill="#FBBF24" stroke="#92400E"/><text x="40" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">TOAST</text><g fill="#A855F7" opacity="0.8"><circle cx="55" cy="105" r="2.5"/><circle cx="65" cy="95" r="2.5"/><circle cx="75" cy="105" r="2.5"/><circle cx="85" cy="85" r="2.5"/></g><g fill="#A855F7" opacity="0.5"><circle cx="100" cy="80" r="2"/><circle cx="115" cy="70" r="2"/><circle cx="130" cy="90" r="2"/><circle cx="125" cy="55" r="2"/></g><g fill="#A855F7" opacity="0.3"><circle cx="140" cy="40" r="1.5"/><circle cx="150" cy="55" r="1.5"/><circle cx="155" cy="30" r="1.5"/></g></g><g><text x="240" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">COLD KITCHEN (8 C)</text><rect x="180" y="120" width="40" height="20" fill="#FBBF24" stroke="#92400E"/><text x="200" y="153" text-anchor="middle" font-size="7" fill="#1E3A8A">TOAST</text><g fill="#A855F7" opacity="0.8"><circle cx="215" cy="110" r="2.5"/><circle cx="225" cy="105" r="2.5"/><circle cx="220" cy="115" r="2.5"/></g><g fill="#A855F7" opacity="0.45"><circle cx="240" cy="100" r="2"/><circle cx="250" cy="110" r="2"/></g><g fill="#A855F7" opacity="0.2"><circle cx="265" cy="95" r="1.5"/></g></g></svg>',
        hotspots: [
          {
            id: 'cpm-diff-rate-h-toast-warm',
            x: 25,
            y: 60,
            label: 'Warm kitchen: smell reaches the door in seconds',
            description:
              'At 24 C the air particles move at a high average speed, so the toast molecules diffuse across the room in a couple of seconds.',
          },
          {
            id: 'cpm-diff-rate-h-toast-cold',
            x: 78,
            y: 60,
            label: 'Cold kitchen: the plume stays close to the toaster',
            description:
              'At 8 C the same air particles move more slowly, so the toast molecules barely spread past the kitchen counter.',
          },
          {
            id: 'cpm-diff-rate-h-toast-why',
            x: 50,
            y: 90,
            label: 'Hotter air, faster diffusion',
            description:
              'Higher temperature means more kinetic energy per particle. Toast molecules are knocked along at a higher rate, so the smell travels further per second.',
          },
        ],
      },
    },
    {
      id: 'cpm-diff-rate-ammonia',
      title: 'Ammonia and Hydrochloric Acid in a Glass Tube',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the classic school lab demo to see why the white ring of ammonium chloride forms closer to the hydrochloric acid end.',
      data: {
        viewBox: '0 0 360 160',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 160"><rect x="0" y="0" width="360" height="160" fill="#FEF3C7"/><g><rect x="30" y="60" width="300" height="40" fill="#F8FAFC" stroke="#1E3A8A" stroke-width="1.4"/><rect x="20" y="55" width="14" height="50" fill="#FCA5A5" stroke="#7F1D1D"/><rect x="326" y="55" width="14" height="50" fill="#FECACA" stroke="#7F1D1D"/><text x="27" y="48" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">NH3</text><text x="333" y="48" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">HCl</text><g fill="#22C55E" opacity="0.7"><circle cx="50" cy="75" r="2"/><circle cx="60" cy="85" r="2"/><circle cx="70" cy="78" r="2"/><circle cx="85" cy="90" r="2"/><circle cx="100" cy="78" r="2"/><circle cx="120" cy="82" r="2"/><circle cx="135" cy="75" r="2"/><circle cx="150" cy="85" r="2"/><circle cx="170" cy="80" r="2"/><circle cx="190" cy="78" r="2"/><circle cx="205" cy="82" r="2"/></g><g fill="#3B82F6" opacity="0.7"><circle cx="310" cy="80" r="2.5"/><circle cx="295" cy="85" r="2.5"/><circle cx="280" cy="80" r="2.5"/><circle cx="265" cy="82" r="2.5"/><circle cx="250" cy="78" r="2.5"/><circle cx="240" cy="85" r="2.5"/></g><rect x="208" y="62" width="14" height="36" fill="#FAFAFA" stroke="#94A3B8" opacity="0.85"/><text x="215" y="120" text-anchor="middle" font-size="7" fill="#1E3A8A">white ring</text><text x="80" y="120" text-anchor="middle" font-size="7" fill="#166534">NH3 (lighter)</text><text x="280" y="120" text-anchor="middle" font-size="7" fill="#1E3A8A">HCl (heavier)</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-diff-rate-h-amm-left',
            x: 10,
            y: 32,
            label: 'Ammonia (NH3) released at the left end',
            description:
              'A cotton wool ball soaked in ammonia solution releases NH3 gas. Each NH3 particle has a mass of 17 (rounded).',
          },
          {
            id: 'cpm-diff-rate-h-amm-right',
            x: 90,
            y: 32,
            label: 'Hydrochloric acid (HCl) released at the right end',
            description:
              'A cotton wool ball soaked in concentrated hydrochloric acid releases HCl gas. Each HCl particle has a mass of about 36, more than twice the mass of an NH3 particle.',
          },
          {
            id: 'cpm-diff-rate-h-amm-ring',
            x: 60,
            y: 60,
            label: 'White ring forms closer to the HCl end',
            description:
              'NH3 + HCl form white solid ammonium chloride where the two gases meet. Lighter NH3 diffuses faster, so it travels further along the tube before the gases meet.',
          },
          {
            id: 'cpm-diff-rate-h-amm-rule',
            x: 50,
            y: 85,
            label: 'Lighter particles diffuse faster',
            description:
              'At the same temperature, lower mass particles move at a higher average speed. So a lighter gas covers more ground in the same time.',
          },
        ],
      },
    },
    {
      id: 'cpm-diff-rate-gradient',
      title: 'Concentration Gradient: How Steepness Sets the Rate',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a steeper concentration gradient drives a higher rate of diffusion across the same gap.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="120" height="120" fill="#F8FAFC" stroke="#1E3A8A"/><line x1="80" y1="40" x2="80" y2="160" stroke="#475569" stroke-dasharray="3 3"/><g fill="#3B82F6" opacity="0.85"><circle cx="32" cy="55" r="3"/><circle cx="45" cy="65" r="3"/><circle cx="60" cy="55" r="3"/><circle cx="70" cy="75" r="3"/><circle cx="35" cy="90" r="3"/><circle cx="55" cy="100" r="3"/><circle cx="68" cy="115" r="3"/><circle cx="40" cy="135" r="3"/><circle cx="60" cy="145" r="3"/><circle cx="72" cy="125" r="3"/></g><g fill="#3B82F6" opacity="0.3"><circle cx="95" cy="100" r="2.5"/></g><text x="80" y="32" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">STEEP GRADIENT</text><text x="80" y="180" text-anchor="middle" font-size="7" fill="#166534">high rate of diffusion</text></g><g><rect x="180" y="40" width="120" height="120" fill="#F8FAFC" stroke="#1E3A8A"/><line x1="240" y1="40" x2="240" y2="160" stroke="#475569" stroke-dasharray="3 3"/><g fill="#3B82F6" opacity="0.85"><circle cx="195" cy="55" r="3"/><circle cx="210" cy="80" r="3"/><circle cx="225" cy="100" r="3"/><circle cx="200" cy="130" r="3"/><circle cx="220" cy="140" r="3"/></g><g fill="#3B82F6" opacity="0.55"><circle cx="255" cy="60" r="3"/><circle cx="270" cy="85" r="3"/><circle cx="288" cy="105" r="3"/><circle cx="260" cy="130" r="3"/></g><text x="240" y="32" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">SHALLOW GRADIENT</text><text x="240" y="180" text-anchor="middle" font-size="7" fill="#7F1D1D">low rate of diffusion</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-diff-rate-h-grad-steep',
            x: 25,
            y: 25,
            label: 'Steep gradient: many particles on one side, few on the other',
            description:
              'Almost all the dye particles are bunched on the left. Far more particles cross the dashed line going right than going left, so the net rate of diffusion is high.',
          },
          {
            id: 'cpm-diff-rate-h-grad-shallow',
            x: 75,
            y: 25,
            label: 'Shallow gradient: particles are nearly even on both sides',
            description:
              'Concentrations on each side are close. Roughly equal numbers cross the line each way, so the net rate of diffusion is low.',
          },
          {
            id: 'cpm-diff-rate-h-grad-zero',
            x: 75,
            y: 88,
            label: 'Once concentrations are equal, net diffusion stops',
            description:
              'Particles never stop moving, but the same number cross the line each way per second. There is no further change to the concentrations.',
          },
        ],
      },
    },
    {
      id: 'cpm-diff-rate-teabag',
      title: 'Teabag in Hot Versus Cold Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a fresh teabag dropped into a mug of hot water and into a mug of cold water.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="30" y="40" width="100" height="120" rx="4" fill="#DBEAFE" stroke="#1E3A8A"/><rect x="35" y="60" width="90" height="95" fill="#BFDBFE"/><rect x="73" y="55" width="14" height="22" fill="#FDE68A" stroke="#92400E"/><line x1="80" y1="55" x2="80" y2="45" stroke="#92400E"/><circle cx="80" cy="78" r="6" fill="#7C2D12" opacity="0.5"/><circle cx="80" cy="95" r="3" fill="#7C2D12" opacity="0.3"/><circle cx="78" cy="110" r="2" fill="#7C2D12" opacity="0.2"/><text x="80" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">COLD (10 C)</text></g><g><rect x="190" y="40" width="100" height="120" rx="4" fill="#FECACA" stroke="#7C2D12"/><rect x="195" y="60" width="90" height="95" fill="#7C2D12" opacity="0.55"/><rect x="233" y="55" width="14" height="22" fill="#FDE68A" stroke="#92400E"/><line x1="240" y1="55" x2="240" y2="45" stroke="#92400E"/><g stroke="#94A3B8" stroke-width="0.6" fill="none" opacity="0.5"><path d="M 215 158 Q 220 148 215 138"/><path d="M 260 158 Q 265 143 260 133"/></g><text x="240" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">HOT (90 C)</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-diff-rate-h-tea-cold',
            x: 25,
            y: 60,
            label: 'Cold mug: a small brown plume after a minute',
            description:
              'In cold water the water particles move slowly. The tea molecules diffuse out of the bag at a low rate and the mug stays mostly clear.',
          },
          {
            id: 'cpm-diff-rate-h-tea-hot',
            x: 75,
            y: 60,
            label: 'Hot mug: the whole mug turns deep brown in a minute',
            description:
              'In hot water the water particles move at much higher speed. They knock the tea molecules out of the bag and across the mug at a far higher rate.',
          },
          {
            id: 'cpm-diff-rate-h-tea-rule',
            x: 50,
            y: 88,
            label: 'Higher temperature, higher rate of diffusion',
            description:
              'Same teabag, same volume of water, same gradient at the start. The only changed factor is the temperature, so any difference in rate must be down to particle speed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-diff-rate-worked-1',
      title: 'Why a perfume bottle smells stronger on a warm summer day than a cold one',
      steps: [
        {
          explanation:
            'A pupil leaves an open bottle of perfume on a windowsill. On a hot day in July the smell reaches the back of the room in seconds. On a cold day in January the same open bottle barely smells from the doorway. Explain using the particle model.',
        },
        {
          explanation:
            'On both days the perfume starts as a high concentration in the bottle and the rest of the room has none. Perfume particles spread out by diffusion in both cases.',
          maths: 'concentration: high in bottle, low in the room',
        },
        {
          explanation:
            'On the hot day the air and perfume particles have more kinetic energy on average.',
          maths: 'higher temperature, higher mean particle speed',
        },
        {
          explanation:
            'Faster moving particles travel further per second between collisions, so perfume molecules cover ground at a higher rate.',
        },
        {
          explanation:
            'On the cold day the same particles move at a lower average speed. They cover less ground per second, so the perfume spreads more slowly and the smell stays weak near the bottle.',
        },
        {
          explanation:
            'So the only thing that has changed is the temperature, and that fully explains the change in the rate of diffusion. Same bottle, same gradient, different speed.',
        },
      ],
    },
    {
      id: 'cpm-diff-rate-worked-2',
      title: 'Predicting where the white ring forms in the ammonia and HCl tube',
      steps: [
        {
          explanation:
            'Question: a glass tube is 30 cm long. Cotton wool soaked in ammonia is plugged into the left end and cotton wool soaked in hydrochloric acid is plugged into the right end at the same moment. NH3 has a particle mass of 17 and HCl has a particle mass of about 36. A white ring of ammonium chloride forms where the two gases meet. Roughly where does the white ring form?',
        },
        {
          explanation:
            'Both gases diffuse along the tube at the same temperature, so they have the same average kinetic energy per particle.',
          maths: 'same temperature: same mean kinetic energy',
        },
        {
          explanation:
            'At the same kinetic energy, particles with less mass move at a higher average speed. NH3 particles are about half the mass of HCl particles, so NH3 diffuses faster.',
        },
        {
          // Intentionally missing in a missing-step question below; reveal not hidden here.
          explanation:
            'In the same number of seconds, NH3 will have travelled further along the tube than HCl. The two gases must still meet at one point, so the meeting point is past the middle, closer to the HCl end.',
        },
        {
          explanation: '',
          maths: 'NH3 distance > HCl distance, so ring sits past midpoint toward HCl',
        },
        {
          explanation:
            'A reasonable estimate is about two thirds of the way from the NH3 end. So the white ring forms roughly 20 cm from the ammonia end and 10 cm from the HCl end.',
          maths: 'ring ≈ 20 cm from NH3 end, 10 cm from HCl end',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-diff-rate-q1',
      type: 'multiple-choice',
      stem: 'Which change makes a gas diffuse at a higher rate, all else being equal?',
      tier: 'core',
      options: [
        'Warming the gas so its particles have more energy',
        'Cooling the gas so its particles move more slowly',
        'Adding more of the same gas to both sides of a barrier so the concentrations match',
        'Using a heavier gas with bigger particle mass',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-diff-rate-mis-temperature-no-effect',
    },
    {
      id: 'cpm-diff-rate-q2',
      type: 'multiple-choice',
      stem: 'Two gases are at the same temperature. Which gas diffuses faster on average?',
      tier: 'core',
      options: [
        'Whichever gas has the larger particle mass',
        'Both diffuse at the same rate because the temperature is the same',
        'Whichever gas has the smaller particle mass',
        'Whichever gas was released second',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-diff-rate-mis-mass-no-effect',
    },
    {
      id: 'cpm-diff-rate-q3',
      type: 'multiple-choice',
      stem: 'A drop of food colouring is added to a beaker of still water. The dye has fully diffused so the water is a uniform shade. What happens to the net rate of diffusion now?',
      tier: 'core',
      options: [
        'It is now zero because the concentration is the same everywhere',
        'It is now higher because the particles are spread out',
        'It carries on at the same rate as before',
        'The dye reverses and gathers back into one drop',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-diff-rate-mis-particles-stop',
    },
    {
      id: 'cpm-diff-rate-q4',
      type: 'numeric-entry',
      stem: 'A teabag in a mug of freshly boiled water turns the water a deep tea colour after 60 seconds. The same teabag in a mug of cold tap water reaches the same depth of colour after 300 seconds. How many times faster is the rate of diffusion in the hot mug compared with the cold mug?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Divide the slow time by the fast time. The answer is a whole number.',
      misconceptionId: 'cpm-diff-rate-mis-temperature-no-effect',
    },
    {
      id: 'cpm-diff-rate-q5',
      type: 'spot-misconception',
      stem: 'Owen says: "When you warm a gas, the particles get bigger, and the bigger particles cover more ground so the gas diffuses faster."',
      tier: 'core',
      statements: [
        {
          text: 'Owen is right. Warmer particles are larger, so they spread further.',
          isMisconception: true,
        },
        {
          text: 'Owen is wrong. Each particle stays the same size at any temperature. Warming a gas makes its particles move faster, not bigger.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-diff-rate-mis-bigger-particles',
    },
    {
      id: 'cpm-diff-rate-q6',
      type: 'drag-order',
      stem: 'Order these mugs from the slowest rate of tea diffusion to the fastest, assuming the same teabag and the same volume of water in each.',
      tier: 'core',
      items: [
        'A mug of iced water at 2 C',
        'A mug of tap water at 18 C',
        'A mug of freshly boiled water at 90 C',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
    },
    {
      id: 'cpm-diff-rate-q7',
      type: 'free-text',
      stem: 'A pupil sprays the same perfume in two identical rooms, one heated to 24 C and one kept at 8 C. The smell reaches the back wall much sooner in the warm room. Use the particle model to explain in two or three sentences why temperature changes the rate of diffusion.',
      tier: 'core',
      sampleAnswer:
        'In both rooms the perfume particles start at a high concentration near the spray and the rest of the room has none, so they diffuse outwards. In the warm room the air and perfume particles have more kinetic energy and move at a higher average speed. Faster particles cover more ground per second, so the perfume spreads through the warm room at a higher rate.',
      keywords: ['temperature', 'energy', 'faster', 'particles', 'concentration', 'random'],
      xpValue: 15,
      misconceptionId: 'cpm-diff-rate-mis-temperature-no-effect',
    },
    {
      id: 'cpm-diff-rate-q8',
      type: 'multiple-choice',
      stem: 'Two cotton wool balls are placed at the ends of a 24 cm glass tube at the same time. One is soaked in ammonia (NH3, particle mass 17) and the other in hydrochloric acid (HCl, particle mass 36). Where does the white ring of ammonium chloride form?',
      tier: 'confident',
      options: [
        'Exactly in the middle, because both gases were released at the same time',
        'At the HCl end, because HCl is the more reactive gas',
        'Closer to the HCl end, because NH3 has a smaller particle mass and diffuses further in the same time',
        'Closer to the NH3 end, because HCl is heavier and falls through the tube',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cpm-diff-rate-mis-mass-no-effect',
    },
    {
      id: 'cpm-diff-rate-q9',
      type: 'multiple-choice',
      stem: 'A school lab has a fume cupboard with a steady gentle draw of air across the front. A pupil opens a bottle of strong-smelling ester at the back of the cupboard. Compared with opening the bottle on an open bench, what is the most likely difference in the time it takes the smell to reach a partner standing 2 metres in front of the cupboard?',
      tier: 'confident',
      options: [
        'The smell will reach the partner much sooner because the fume cupboard concentrates the gas',
        'The smell will reach the partner more slowly, or not at all, because the moving air carries the particles away through the vent before they can diffuse across',
        'The smell will reach the partner at the same time, because diffusion does not depend on air movement',
        'The bottle will boil dry before the smell can spread',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cpm-diff-rate-mis-current',
    },
    {
      id: 'cpm-diff-rate-q10',
      type: 'multiple-choice',
      stem: 'A jar of strong-smelling cheese is left open in a still kitchen. Just after opening, the smell spreads rapidly. After ten minutes, the smell still seems strong near the jar but spreads no further into the rest of the house. Which factor best explains the slowdown over time?',
      tier: 'confident',
      options: [
        'The cheese particles eventually get tired and stop moving',
        'The temperature of the kitchen has dropped over ten minutes',
        'The concentration gradient between the jar and the air far away has become shallower, so the net rate of diffusion has fallen',
        'The kitchen ran out of empty space between the air particles',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cpm-diff-rate-mis-gradient-irrelevant',
    },
    {
      id: 'cpm-diff-rate-q11',
      type: 'numeric-entry',
      stem: 'In an assembly hall 20 metres long, a teacher sprays a small puff of air freshener at the front. A pupil at the very back smells it 5 minutes later. Calculate the average rate of diffusion in metres per minute.',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'm/min',
      xpValue: 20,
      hint: 'Use rate equals distance divided by time. The distance is the full length of the hall.',
    },
    {
      id: 'cpm-diff-rate-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: NH3 (particle mass 17) and HCl (particle mass about 36) are released at opposite ends of a 30 cm tube at the same time. Use the particle model to explain why the white ring of ammonium chloride forms closer to the HCl end.',
      tier: 'confident',
      steps: [
        'Both gases start to diffuse along the tube at the same temperature, so the average kinetic energy per particle is the same for both.',
        'At the same kinetic energy, lighter particles move at a higher average speed. NH3 particles are about half the mass of HCl particles, so they move faster on average.',
        null,
        'So the meeting point is past the middle of the tube, closer to the HCl end, which is where the white ring of ammonium chloride forms.',
      ],
      missingStepIndex: 2,
      correctStep:
        'In the same number of seconds, NH3 particles will have travelled further along the tube than HCl particles. The two gases meet wherever their travelled distances add up to the length of the tube.',
      xpValue: 20,
    },
    {
      id: 'cpm-diff-rate-q13',
      type: 'data-extraction',
      stem: 'A pupil times how many seconds it takes a drop of yellow dye to colour 200 ml of water uniformly at four temperatures. Results: 5 C, 480 s; 20 C, 180 s; 40 C, 75 s; 70 C, 25 s. Read off the time at 40 C, in seconds.',
      tier: 'confident',
      dataSource:
        'Time for a drop of dye to colour 200 ml of water uniformly at different temperatures: 5 C, 480 s; 20 C, 180 s; 40 C, 75 s; 70 C, 25 s.',
      correctAnswer: '75',
      xpValue: 20,
      hint: 'Find the row where the temperature column reads 40 C and read the matching time.',
    },
    {
      id: 'cpm-diff-rate-q14',
      type: 'spot-misconception',
      stem: 'Priya says: "Once the perfume has spread evenly through the room, the particles must have stopped moving. Otherwise more would keep diffusing across."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The particles must come to rest once the smell is even.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. The particles never stop moving. The same number cross any line each way per second once the concentration is even, so there is no net change.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cpm-diff-rate-mis-particles-stop',
    },
    {
      id: 'cpm-diff-rate-q15',
      type: 'multiple-choice',
      stem: 'A pupil compares two gas jars on a still bench in a school lab. Jar A holds bromine vapour at 20 C. Jar B holds bromine vapour at 50 C. A glass disc is removed from the top of each jar at the same time, leaving an empty jar of air on top. Which jar shows the brown colour spreading into the upper jar at the higher rate?',
      tier: 'confident',
      options: [
        'Jar A, because cold gases are heavier and rise faster',
        'Jar B, because the bromine particles have more kinetic energy and a higher average speed, so more of them cross the boundary each second',
        'Both at the same rate, because diffusion does not depend on temperature',
        'Jar A, because warm air resists diffusion more strongly',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cpm-diff-rate-mis-temperature-no-effect',
    },
    {
      id: 'cpm-diff-rate-q16',
      type: 'numeric-entry',
      stem: 'In an experiment, a drop of dye takes 180 seconds to fully colour 200 ml of water at 20 C. At 70 C the same drop takes 25 seconds. How many times faster is the rate of diffusion at 70 C compared with 20 C? Give your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 7,
      unit: 'times',
      xpValue: 25,
      hint: 'Rate is inversely proportional to time for the same job. Divide the slow time by the fast time.',
    },
    {
      id: 'cpm-diff-rate-q17',
      type: 'multiple-choice',
      stem: 'In a school lab demo, NH3 (particle mass 17) and HCl (particle mass 36) diffuse along a 30 cm tube and meet to form a white ring. A second tube of the same length is set up at the same temperature but this time NH3 is replaced with HBr (particle mass about 81), released at the left end against HCl at the right. Predict where the new white ring of solid forms compared with the original NH3 and HCl ring.',
      tier: 'challenge',
      options: [
        'Closer to the HCl end than before, because HBr is heavier than NH3 and so diffuses more slowly',
        'In the same place, because both pairs were released at the same temperature',
        'Right at the HCl end, because HBr cannot diffuse at all',
        'Closer to the HBr (left) end than before, because HBr is heavier than HCl and so diffuses more slowly than HCl, meeting HCl before halfway',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-diff-rate-mis-mass-no-effect',
    },
    {
      id: 'cpm-diff-rate-q18',
      type: 'multiple-choice',
      stem: 'A garden centre in Sevenoaks stores cut lilies in two display rooms kept at different temperatures. Room A is at 6 C and room B is at 18 C. Customers walking past the open doors say the rose-and-lily scent is much stronger outside room B. Which combination of particle ideas best explains why?',
      tier: 'challenge',
      options: [
        'Cooler air destroys the scent particles in room A, and scent particles only diffuse above 10 C',
        'Warmer air in room B gives the scent particles a higher mean speed, so they leave the flowers and cross the corridor at a higher rate; the concentration gradient between flower and corridor stays high for longer',
        'The lily petals shrink in the cold, so their scent cannot escape at all in room A',
        'Cool air in room A pushes scent back into the flowers by gravity',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpm-diff-rate-mis-temperature-no-effect',
    },
    {
      id: 'cpm-diff-rate-q19',
      type: 'numeric-entry',
      stem: 'A 24 cm glass tube has cotton wool soaked in ammonia at one end and cotton wool soaked in hydrochloric acid at the other end, released at the same moment. The white ring of ammonium chloride forms 16 cm from the ammonia end. How far is the ring from the hydrochloric acid end, in centimetres?',
      tier: 'challenge',
      correctAnswer: 8,
      unit: 'cm',
      xpValue: 25,
      hint: 'The two distances must add up to the full length of the tube.',
    },
    {
      id: 'cpm-diff-rate-q20',
      type: 'multiple-choice',
      stem: 'In a sealed school greenhouse near Tunbridge Wells, a teacher releases a small amount of carbon dioxide near the soil at one end. After half an hour, sensors show the CO2 concentration is now slightly raised across the whole greenhouse. Compared with the first few minutes, the rate at which the CO2 concentration is rising at the far end has fallen. Which factor best explains the change in rate?',
      tier: 'challenge',
      options: [
        'The CO2 particles have used up all their energy and stopped moving',
        'The greenhouse temperature has fallen sharply over half an hour',
        'The greenhouse has run out of space between the air particles',
        'The concentration gradient between the source end and the far end has become much shallower, so the net rate of CO2 diffusion has dropped',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-diff-rate-mis-gradient-irrelevant',
    },
    {
      id: 'cpm-diff-rate-q21',
      type: 'free-text',
      stem: 'In the cotton wool tube demo, a pupil predicts that warming the whole tube to 50 C will move the white ring closer to the middle of the tube. Write two or three sentences using the particle model to argue whether they are right or wrong.',
      tier: 'challenge',
      sampleAnswer:
        'Warming the tube raises the average kinetic energy of both NH3 and HCl particles, so both gases diffuse at a higher rate. The relative speed of NH3 to HCl depends on the particle masses, not the temperature, so NH3 still moves faster than HCl on average. The ring still forms past the midpoint closer to the HCl end, just sooner; the position barely changes.',
      keywords: ['temperature', 'mass', 'NH3', 'HCl', 'rate', 'speed'],
      xpValue: 25,
      misconceptionId: 'cpm-diff-rate-mis-mass-no-effect',
    },
  ],
  misconceptions: [
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q05 on diffusion: candidates often wrote "diffusion does not depend on temperature" or that warming a liquid "made the particles bigger" rather than faster. Reinforced by BEST KS3 diagnostic question sets on rates of diffusion (UCL / STEM Learning).
    {
      id: 'cpm-diff-rate-mis-temperature-no-effect',
      description:
        'Temperature has no effect on the rate of diffusion. Hot and cold water spread a dye at the same speed.',
      triggerAnswer: 'temperature-no-effect',
      correction:
        'In fact warming a substance gives its particles more energy, so they spread by diffusion at a higher rate.',
      reExplanation:
        'Drop the same teabag into a mug of iced water and a mug of freshly boiled water. The hot mug turns deep brown in a minute. The cold mug stays mostly clear. Hotter water particles carry more energy, move at higher average speed, and knock the tea molecules out of the bag and across the mug at a far higher rate.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): a recurring finding is that learners explain higher rates of diffusion at higher temperatures by saying "the particles get bigger" rather than "the particles move faster". The same trigger is documented in CGP KS3 Chemistry common-mistake callouts on the particle model.
    {
      id: 'cpm-diff-rate-mis-bigger-particles',
      description:
        'Warming a substance makes its particles get bigger, so they cover more ground when they diffuse.',
      triggerAnswer: 'bigger-particles',
      correction:
        'In fact each particle stays the same size at any temperature. Warming a substance makes its particles move faster, not larger.',
      reExplanation:
        'Picture one perfume molecule. Whether the room is hot or cold, the molecule itself is the same size. What changes is its speed. In a warm room each molecule flies further per second between collisions, so the smell reaches the other side of the room sooner. The size of the molecule never changes.',
    },
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2018, Paper 1F (8464/C/1F), Q03 on diffusion: examiners flagged that learners commonly answered that the mass of a gas particle does not affect its rate of diffusion, missing the link between lower mass and higher mean speed at a given temperature. Reinforced by the ammonia and HCl tube prediction question in OCR Gateway Chemistry sample assessments for J248.
    {
      id: 'cpm-diff-rate-mis-mass-no-effect',
      description:
        'At a given temperature, all gas particles diffuse at the same rate no matter how heavy they are.',
      triggerAnswer: 'mass-no-effect',
      correction:
        'In fact lighter particles move at a higher average speed than heavier ones at the same temperature, so a lighter gas diffuses faster.',
      reExplanation:
        'In the ammonia and hydrochloric acid tube demo, NH3 has a particle mass of 17 and HCl has a particle mass of about 36. Both gases were released at the same time and at the same temperature, yet the white ring of ammonium chloride forms past the middle of the tube, closer to the HCl end. The only thing that differs is particle mass, and NH3 has covered more ground than HCl in the same time.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: long-standing finding that learners imagine smells "carried by a current of air" or stirred along, rather than spreading by random particle motion. Reinforced by Bar V (1989) and BEST KS3 diagnostic question sets.
    {
      id: 'cpm-diff-rate-mis-current',
      description:
        'Diffusion only happens because a current of air or a draught carries the particles across the room.',
      triggerAnswer: 'current',
      correction:
        'In fact the particles move on their own all the time. A draught speeds things up by bulk motion, but diffusion still works in a sealed still room.',
      reExplanation:
        'Open a strong-smelling bottle in a sealed classroom with the windows shut and the air conditioning off. Within minutes the smell still reaches the back. There is no current carrying it. Each smell molecule keeps colliding with air molecules and bouncing off in a new direction. A moving stream of air, like a fume cupboard vent, can actually slow you smelling something at a fixed point, because the bulk movement carries the molecules away.',
    },
    // Source: BEST Evidence Science Teaching diagnostic question set "Rate of diffusion" (UCL / STEM Learning), and CGP KS3 Chemistry common-mistake callouts on the particle model: learners often state that once a smell has spread, the particles have stopped moving, rather than recognising that motion continues with no net change.
    {
      id: 'cpm-diff-rate-mis-particles-stop',
      description:
        'Once a smell has spread evenly through a room, the particles must have stopped moving.',
      triggerAnswer: 'particles-stop',
      correction:
        'In fact the particles never stop. They still move randomly in all directions, but the same number cross any line each way per second, so there is no net change.',
      reExplanation:
        'Imagine a perfume spread evenly through a sealed room. Every second, roughly the same number of perfume molecules cross any imaginary plane from left to right as from right to left. The molecules keep bouncing off air molecules at the same speed as before. What has gone to zero is the net flow, not the motion of any individual particle.',
    },
    // Source: AQA GCSE Combined Science Trilogy specification 8464 and AQA GCSE Chemistry 8462, subject content 4.2.2.2 "Diffusion": "Factors affecting rate of diffusion: difference in concentrations (concentration gradient), temperature, surface area of cell membranes (in living systems)." Reinforced by Edexcel 1CH0 Topic 1.13 and OCR J248 C1.1d on concentration-gradient dependence.
    {
      id: 'cpm-diff-rate-mis-gradient-irrelevant',
      description:
        'The steepness of the concentration gradient does not affect the rate of diffusion. Only temperature matters.',
      triggerAnswer: 'gradient-irrelevant',
      correction:
        'In fact a steeper concentration gradient drives a higher net rate of diffusion. As the two sides even out, the rate drops, and at equal concentrations the net rate is zero.',
      reExplanation:
        'Right after a cheese jar is opened in a still kitchen, there are loads of cheese molecules near the jar and almost none across the room. Far more cheese molecules head outward than return, so diffusion is fast. After half an hour the concentrations on each side of any imaginary line have nearly evened out, so the number of molecules crossing each way is similar and the net rate drops sharply.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
