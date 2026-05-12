import type { SkillNode } from '@/types/content'

export const temperatureParticleMotion: SkillNode = {
  id: 'chemistry-particle-model-temperature-energy',
  title: 'Temperature, Particle Motion and Energy',
  description:
    'Link temperature to the average kinetic energy of particles, so that a hotter substance has faster moving particles. Use the model to explain why solids, liquids and gases expand when heated, why a railway track leaves an expansion gap in summer, and why ink diffuses faster in hot water than in cold water.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-state-changes'],
  curriculum: {
    ks3Objective:
      'How temperature links to the average kinetic energy of particles; hotter substances have faster-moving particles; applying this to explain expansion, contraction, and rate of diffusion and evaporation.',
    awardingBodies: {
      aqa: '4.2.2.1 States of matter; 4.2.2.2 Diffusion; temperature and particle motion (8462)',
      edexcel: 'Topic 1.6 States of matter; Topic 1.13 Diffusion; temperature and rate (1CH0)',
      ocr: 'C1.1 The particle model; temperature and kinetic energy; C1.1d Factors affecting diffusion (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-temp-motion',
      title: 'Cold Particles and Hot Particles',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the same gas at a cold temperature and at a hot temperature.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#F8FAFC"/><g><rect x="20" y="30" width="120" height="120" rx="4" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="80" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">COLD GAS, 5 C</text><g fill="#1E3A8A"><circle cx="40" cy="55" r="4"/><circle cx="90" cy="60" r="4"/><circle cx="120" cy="80" r="4"/><circle cx="55" cy="100" r="4"/><circle cx="100" cy="120" r="4"/><circle cx="35" cy="135" r="4"/></g><g stroke="#1E3A8A" stroke-width="0.8" fill="none"><path d="M 40 55 l 4 -2"/><path d="M 90 60 l -3 -2"/><path d="M 120 80 l 3 2"/><path d="M 55 100 l -3 3"/><path d="M 100 120 l 2 -3"/><path d="M 35 135 l 3 -2"/></g></g><g><rect x="180" y="30" width="120" height="120" rx="4" fill="#FECACA" stroke="#7F1D1D" stroke-width="1.2"/><text x="240" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="#7F1D1D">HOT GAS, 90 C</text><g fill="#7F1D1D"><circle cx="200" cy="50" r="4"/><circle cx="260" cy="65" r="4"/><circle cx="285" cy="95" r="4"/><circle cx="210" cy="105" r="4"/><circle cx="270" cy="130" r="4"/><circle cx="195" cy="135" r="4"/></g><g stroke="#7F1D1D" stroke-width="1.2" fill="none"><path d="M 200 50 l 10 -6"/><path d="M 260 65 l -10 -5"/><path d="M 285 95 l 9 8"/><path d="M 210 105 l -10 9"/><path d="M 270 130 l 8 -10"/><path d="M 195 135 l 10 -7"/></g></g></svg>',
        hotspots: [
          {
            id: 'cpm-temp-motion-h1',
            x: 25,
            y: 18,
            label: 'Cold means slower',
            description:
              'At 5 C the particles still move in all directions, but with a low average speed and short arrows.',
          },
          {
            id: 'cpm-temp-motion-h2',
            x: 75,
            y: 18,
            label: 'Hot means faster',
            description:
              'At 90 C the same particles now have a much higher average speed, shown by longer arrows.',
          },
          {
            id: 'cpm-temp-motion-h3',
            x: 25,
            y: 90,
            label: 'Same particles, same size',
            description:
              'Heating changes how fast the particles move, not how big they are. Six particles in each box.',
          },
          {
            id: 'cpm-temp-motion-h4',
            x: 75,
            y: 90,
            label: 'Average kinetic energy',
            description:
              'Temperature measures the average kinetic energy of the particles. Faster average speed means a higher temperature.',
          },
        ],
      },
    },
    {
      id: 'cpm-temp-expansion',
      title: 'Expansion of a Railway Track in Summer',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why Network Rail leaves a small gap between two steel rails on a hot day.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="10" y="40" width="130" height="20" fill="#94A3B8" stroke="#475569"/><rect x="150" y="40" width="130" height="20" fill="#94A3B8" stroke="#475569"/><rect x="10" y="100" width="280" height="6" fill="#A8A29E"/><rect x="10" y="110" width="280" height="6" fill="#A8A29E"/><text x="160" y="35" text-anchor="middle" font-size="9" fill="#1E3A8A">COOL MORNING, 10 C</text><line x1="140" y1="40" x2="140" y2="60" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="2 2"/><line x1="150" y1="40" x2="150" y2="60" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="2 2"/></g><g><rect x="10" y="130" width="138" height="20" fill="#FCA5A5" stroke="#7F1D1D"/><rect x="148" y="130" width="138" height="20" fill="#FCA5A5" stroke="#7F1D1D"/><text x="160" y="170" text-anchor="middle" font-size="9" fill="#7F1D1D">HOT AFTERNOON, 35 C</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-temp-expansion-h1',
            x: 50,
            y: 20,
            label: 'Cool rail with a gap',
            description:
              'On a cool morning the steel rail has its normal length, with a small gap between the two sections.',
          },
          {
            id: 'cpm-temp-expansion-h2',
            x: 45,
            y: 80,
            label: 'Hot rail fills the gap',
            description:
              'In the afternoon sun the same rail has expanded along its length. The gap has closed up.',
          },
          {
            id: 'cpm-temp-expansion-h3',
            x: 90,
            y: 50,
            label: 'Particles still touch',
            description:
              'The iron particles still touch each other. They have not grown. They vibrate harder and sit a tiny bit further apart on average.',
          },
          {
            id: 'cpm-temp-expansion-h4',
            x: 50,
            y: 95,
            label: 'Why the gap is left',
            description:
              'Engineers leave a small expansion gap so that thousands of rail sections, each a little longer in summer, do not push hard enough to buckle the track.',
          },
        ],
      },
    },
    {
      id: 'cpm-temp-diffusion',
      title: 'Ink Diffusing in Hot Water and Cold Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a drop of blue ink spreading in a beaker of hot water and a beaker of cold water.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><g><rect x="20" y="40" width="120" height="130" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/><text x="80" y="32" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">COLD WATER, 5 C</text><g fill="#1E3A8A" opacity="0.85"><circle cx="80" cy="70" r="10"/><circle cx="80" cy="70" r="14" fill="none" stroke="#1E3A8A" stroke-width="0.6" opacity="0.5"/><circle cx="78" cy="92" r="3"/><circle cx="85" cy="98" r="3"/><circle cx="75" cy="85" r="3"/></g></g><g><rect x="180" y="40" width="120" height="130" fill="#FECACA" stroke="#7F1D1D" stroke-width="1.2"/><text x="240" y="32" text-anchor="middle" font-size="10" font-weight="600" fill="#7F1D1D">HOT WATER, 75 C</text><g fill="#1E3A8A" opacity="0.55"><circle cx="240" cy="70" r="10"/><circle cx="210" cy="95" r="6"/><circle cx="270" cy="100" r="6"/><circle cx="225" cy="125" r="5"/><circle cx="255" cy="140" r="5"/><circle cx="200" cy="135" r="4"/><circle cx="280" cy="155" r="4"/><circle cx="235" cy="155" r="4"/></g></g></svg>',
        hotspots: [
          {
            id: 'cpm-temp-diffusion-h1',
            x: 25,
            y: 18,
            label: 'Cold beaker',
            description:
              'In cold water the ink stays in a small dark blob for many minutes. The blue particles spread slowly.',
          },
          {
            id: 'cpm-temp-diffusion-h2',
            x: 75,
            y: 18,
            label: 'Hot beaker',
            description:
              'In hot water the ink spreads through the whole beaker within a minute or so. The blue fades evenly.',
          },
          {
            id: 'cpm-temp-diffusion-h3',
            x: 25,
            y: 90,
            label: 'Slow particles bump less often',
            description:
              'Cold water particles move slowly, so they jostle the ink particles only a little. The ink takes a long time to mix.',
          },
          {
            id: 'cpm-temp-diffusion-h4',
            x: 75,
            y: 90,
            label: 'Fast particles bump more often',
            description:
              'Hot water particles move at high speed, so they knock the ink particles in all directions, spreading the colour through the beaker.',
          },
        ],
      },
    },
    {
      id: 'cpm-temp-thermostat',
      title: 'Bimetallic Strip Inside a Kitchen Thermostat',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the cutaway to see how unequal expansion bends a strip of metal and switches an oven heater on and off.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="30" y="50" width="160" height="6" fill="#FBBF24" stroke="#92400E"/><rect x="30" y="56" width="160" height="6" fill="#94A3B8" stroke="#475569"/><circle cx="30" cy="59" r="4" fill="#475569"/><line x1="190" y1="60" x2="220" y2="60" stroke="#475569" stroke-width="1"/><circle cx="220" cy="60" r="3" fill="#22C55E" stroke="#14532D"/><text x="110" y="40" text-anchor="middle" font-size="9" fill="#1E3A8A">COOL, STRAIGHT, CIRCUIT MAKES CONTACT</text></g><g><path d="M 30 130 Q 110 110 190 130" fill="none" stroke="#FBBF24" stroke-width="6"/><path d="M 30 136 Q 110 116 190 136" fill="none" stroke="#94A3B8" stroke-width="6"/><circle cx="30" cy="133" r="4" fill="#475569"/><line x1="190" y1="125" x2="220" y2="125" stroke="#475569" stroke-width="1" stroke-dasharray="2 2"/><circle cx="220" cy="125" r="3" fill="#DC2626" stroke="#7F1D1D"/><text x="110" y="160" text-anchor="middle" font-size="9" fill="#7F1D1D">HOT, BENT UP, CIRCUIT IS BROKEN</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-temp-thermostat-h1',
            x: 35,
            y: 30,
            label: 'Brass on top, iron below',
            description:
              'Two thin strips of different metals are joined along their length. Brass particles spread out more for the same rise in temperature than iron particles do.',
          },
          {
            id: 'cpm-temp-thermostat-h2',
            x: 35,
            y: 75,
            label: 'Hot strip bends',
            description:
              'When the oven heats up, the brass strip expands more than the iron, so the pair curls. The free end lifts away from its contact.',
          },
          {
            id: 'cpm-temp-thermostat-h3',
            x: 70,
            y: 35,
            label: 'Cool: heater on',
            description:
              'When the oven is cool the strip is straight, the contact is closed, and electric current flows through the heating element.',
          },
          {
            id: 'cpm-temp-thermostat-h4',
            x: 70,
            y: 80,
            label: 'Hot: heater off',
            description:
              'When the set temperature is reached the strip lifts off, the contact opens, and the heater switches off until the oven cools again.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-temp-worked-1',
      title: 'Why a copper rod gets longer when it is heated',
      steps: [
        {
          explanation:
            'A 1 metre copper rod is taken from a cold workshop at 5 C and clamped at one end. The free end is heated in a stream of hot air at 95 C.',
        },
        {
          explanation:
            'Inside the cold rod, the copper particles sit in a regular grid and vibrate gently around their fixed positions. The forces between them keep the rod the same length.',
        },
        {
          explanation:
            'When the hot air arrives, the copper particles take in energy. Their average kinetic energy rises, so they vibrate harder.',
          maths: 'average kinetic energy increases',
        },
        {
          explanation:
            'Each particle still touches the same neighbours, but its bigger vibration pushes against them. On average the particles sit a tiny bit further apart along the rod.',
        },
        {
          explanation:
            'Add up that tiny extra spacing along every line of particles in the rod. The free end of the rod ends up about 1 millimetre further from the clamp than before.',
          maths: 'small extra spacing per particle, summed along the rod = expansion',
        },
        {
          explanation:
            'So the rod is longer on hot air, even though no copper particle has grown in size. Temperature and energy have done the work.',
        },
      ],
    },
    {
      id: 'cpm-temp-worked-2',
      title: 'Why a drop of ink spreads faster in hot water than cold water',
      steps: [
        {
          explanation:
            'Two identical beakers each hold 200 ml of water. Beaker A is at 5 C, just out of a fridge. Beaker B is at 75 C, just off a Bunsen burner. A single drop of blue ink is added to each.',
        },
        {
          explanation:
            'In both beakers, water particles are constantly knocking the ink particles in all directions. This is diffusion: the ink slowly spreads through the water.',
        },
        {
          explanation:
            'In the cold beaker, water particles have a low average kinetic energy. They move slowly and bump the ink particles only a little, so the ink barely shifts.',
        },
        {
          explanation:
            'In the hot beaker, water particles have a much higher average kinetic energy. They move at high speed and bump the ink particles harder and more often.',
        },
        {
          explanation:
            // Missing-step worthy gap: the bump-to-spreading link is implied so the engine can hide it.
            'Each bump shifts an ink particle a little further into the surrounding water. More bumps and bigger bumps means a faster overall spread.',
        },
        {
          explanation:
            'So the ink spreads through the hot beaker in about a minute, but takes many minutes in the cold beaker. Higher temperature means a faster rate of diffusion.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-temp-q1',
      type: 'multiple-choice',
      stem: 'What does the temperature of a substance tell you about its particles?',
      tier: 'core',
      options: [
        'The total number of particles in the substance',
        'The size of each particle',
        'The average kinetic energy of the particles',
        'The mass of each particle',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-temp-mis-temp-is-heat',
    },
    {
      id: 'cpm-temp-q2',
      type: 'multiple-choice',
      stem: 'A copper rod is heated from 10 C to 80 C. What happens to its particles?',
      tier: 'core',
      options: [
        'They get bigger, so the rod gets longer',
        'They vibrate harder and sit a tiny bit further apart on average',
        'They stop moving once the rod is hot enough',
        'They split into smaller particles',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-temp-mis-particles-grow',
    },
    {
      id: 'cpm-temp-q3',
      type: 'spot-misconception',
      stem: 'Liam says: "Once water is hot, the water particles get bigger. That is why hot water takes up more space than cold water."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Heating makes each water particle larger, which is why the level rises.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The particles stay the same size, but they vibrate harder and sit a little further apart on average, so the water expands.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-temp-mis-particles-grow',
    },
    {
      id: 'cpm-temp-q4',
      type: 'multiple-choice',
      stem: 'A glass jar of hot tea cools from 70 C to 20 C in the kitchen. What is the best description of what happens to the tea particles?',
      tier: 'core',
      options: [
        'The particles slow down, so their average kinetic energy falls',
        'The particles stop moving entirely',
        'The particles shrink and pack tighter',
        'New colder particles replace the warm ones',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-temp-mis-stop-at-cold',
    },
    {
      id: 'cpm-temp-q5',
      type: 'drag-order',
      stem: 'Order these from coldest to hottest, based on the average kinetic energy of the particles.',
      tier: 'core',
      items: [
        'Air inside a domestic freezer at -18 C',
        'A glass of tap water at 15 C',
        'Boiling water from a kettle at 100 C',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
    },
    {
      id: 'cpm-temp-q6',
      type: 'multiple-choice',
      stem: 'A drop of food colouring is added to a glass of water at 5 C and to an identical glass of water at 60 C. In which glass will the colour spread through the water first, and why?',
      tier: 'core',
      options: [
        'The 5 C glass, because cold water is less crowded inside',
        'The 60 C glass, because hot water particles move faster and bump the colour more often',
        'Both at the same time, because the amount of water is the same',
        'The 5 C glass, because the colour particles are heavier than warm water particles',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-temp-mis-diffusion-equal',
    },
    {
      id: 'cpm-temp-q7',
      type: 'numeric-entry',
      stem: 'In the bimetallic strip scene, the oven cools below the set temperature and the strip is straight again. The contact closes. How many strips of metal are joined together along the length of a bimetallic strip?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Read the prefix in the name. "Bi" means two.',
    },
    {
      id: 'cpm-temp-q8',
      type: 'multiple-choice',
      stem: 'On a hot day in summer, a long iron railway track between Dover and Sevenoaks expands slightly. Why has it grown longer?',
      tier: 'confident',
      options: [
        'New iron particles have joined the rail from the air',
        'Each iron particle has grown in size',
        'The iron particles vibrate harder and sit a tiny bit further apart on average',
        'The track is being pushed sideways by warm air',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpm-temp-mis-particles-grow',
    },
    {
      id: 'cpm-temp-q9',
      type: 'multiple-choice',
      stem: 'Network Rail leaves a small expansion gap between two sections of straight rail. Why is the gap needed?',
      tier: 'confident',
      options: [
        'So that the rails can vibrate when a train passes over',
        'So that rainwater can drain off the surface',
        'So that the track can be moved to a new site without splitting',
        'So that the steel can expand on a hot day without buckling',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpm-temp-mis-solids-no-expand',
    },
    {
      id: 'cpm-temp-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims that all solids stay the exact same length no matter how hot or cold they get. Use the particle model to spot the flaw.',
      tier: 'confident',
      options: [
        'The claim is wrong. Solids expand slightly when heated because their particles vibrate harder and sit a tiny bit further apart on average.',
        'The claim is right. Solids have a fixed shape and a fixed size at every temperature.',
        'The claim is wrong. Solids shrink when heated because heat removes some particles from the surface.',
        'The claim is right for metal solids but wrong for any other solid.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpm-temp-mis-solids-no-expand',
    },
    {
      id: 'cpm-temp-q11',
      type: 'slider-explore',
      stem: 'Set the slider to the temperature at which all particle motion would in theory stop. This is called absolute zero.',
      tier: 'confident',
      min: -300,
      max: 100,
      step: 5,
      correctRange: [-275, -270],
      label: 'Temperature, C',
      xpValue: 15,
      hint: 'Absolute zero is at 0 kelvin, which is about 273 below zero on the Celsius scale.',
      misconceptionId: 'cpm-temp-mis-stop-at-cold',
    },
    {
      id: 'cpm-temp-q12',
      type: 'numeric-entry',
      stem: 'Aisha hangs identical wet shirts on two washing lines in the Lake District. One line is in the warm sun at 22 C, the other is in shade at 8 C. Both lines feel the same gentle breeze. The shirt in the sun is dry in 60 minutes. The shirt in the shade is still damp after the same time. What is the temperature difference, in C, between the two lines?',
      tier: 'confident',
      correctAnswer: 14,
      unit: 'C',
      xpValue: 15,
      hint: 'Subtract the shaded line temperature from the sunny line temperature.',
      misconceptionId: 'cpm-temp-mis-evap-only-temp',
    },
    {
      id: 'cpm-temp-q13',
      type: 'spot-misconception',
      stem: 'Sophie says: "Hot air rises because each hot air particle is lighter than each cold air particle."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. Heating a particle makes it weigh less, so it floats up.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. Hot air particles have the same mass, but they spread further apart, so a litre of hot air holds fewer particles and weighs less than a litre of cold air.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-temp-mis-hot-air-lighter',
    },
    {
      id: 'cpm-temp-q14',
      type: 'numeric-entry',
      stem: 'A copper roof in summer sun in Manchester warms from 18 C in the morning to 38 C by mid afternoon. By how many C has the temperature of the roof risen?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'C',
      xpValue: 15,
      hint: 'Subtract the morning temperature from the afternoon temperature.',
    },
    {
      id: 'cpm-temp-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil drops a single crystal of potassium manganate into a beaker of hot water and an identical crystal into an identical beaker of cold water. In the hot beaker the purple colour spreads through the whole beaker within a minute. In the cold beaker the purple is still in a small blob after the same minute. Use the particle model to explain.',
      tier: 'confident',
      steps: [
        'In both beakers, water particles are constantly bumping into the dye particles and pushing them in random directions. This is diffusion.',
        'The hot water has a higher temperature, so its water particles have a higher average kinetic energy than the cold water particles.',
        null,
        'So the dye particles in the hot beaker are jostled more often and more strongly, spreading right across the beaker in about a minute, while the cold beaker stays mostly purple in one corner.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A higher average kinetic energy means the hot water particles move faster, so they collide with the dye more often and with bigger pushes than the slow cold water particles do.',
      xpValue: 20,
      misconceptionId: 'cpm-temp-mis-diffusion-equal',
    },
    {
      id: 'cpm-temp-q16',
      type: 'data-extraction',
      stem: 'Read the table to find which liquid showed the fastest rate of diffusion of red food colour.',
      tier: 'challenge',
      dataSource:
        'A pupil dropped 1 ml of red food colour into four 200 ml beakers of water and timed how long it took for the colour to spread evenly. Beaker P at 5 C took 18 minutes. Beaker Q at 20 C took 9 minutes. Beaker R at 40 C took 4 minutes. Beaker S at 70 C took 2 minutes.',
      correctAnswer: 'S',
      xpValue: 25,
      hint: 'The fastest rate is the beaker with the shortest mixing time.',
    },
    {
      id: 'cpm-temp-q17',
      type: 'multiple-choice',
      stem: 'A 30 cm steel bridge support in a Manchester station expands by 1 mm when the air around it warms from 5 C to 35 C. A pupil writes that this is because each iron particle has grown by 0.003 percent. What is the best correction to give the pupil, in line with the particle model at GCSE foundation level?',
      tier: 'challenge',
      options: [
        'No correction is needed. The pupil has explained the model correctly.',
        'The 1 mm change is caused by extra iron particles joining from the warm air.',
        'The 1 mm change is caused by the support gaining mass as it warms up.',
        'The particles do not grow. They vibrate harder and sit a tiny bit further apart on average, so the support is longer overall.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-temp-mis-particles-grow',
    },
    {
      id: 'cpm-temp-q18',
      type: 'numeric-entry',
      stem: 'A bimetallic strip in a kitchen thermostat is straight at 20 C and curls just enough to switch off the oven heater at 180 C. A second, identical strip is fitted into a smaller oven that only reaches 150 C. By how many C below the original switch off temperature will the second oven switch off, if the strip behaves in the same way?',
      tier: 'challenge',
      correctAnswer: 30,
      unit: 'C',
      xpValue: 25,
      hint: 'Work out the gap between the second oven temperature and the original switch off temperature.',
    },
    {
      id: 'cpm-temp-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: In a school Bunsen burner experiment, the same amount of liquid bromine vapour is allowed to diffuse into two long glass tubes of air. Tube X is at room temperature, 20 C. Tube Y is in a warm water jacket at 60 C. The orange colour reaches the far end of tube Y in half the time it takes for tube X. Use the particle model to explain.',
      tier: 'challenge',
      steps: [
        'In both tubes, bromine particles enter the air and spread by bumping into air particles, which knock them in random directions. Over time the bromine reaches the far end of the tube.',
        'Tube Y is hotter, so the air and bromine particles in tube Y have a higher average kinetic energy than the particles in tube X.',
        null,
        'So the bromine front in tube Y reaches the far end in roughly half the time, because the same kind of journey is done at a higher average speed and with more frequent pushes.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A higher average kinetic energy means the particles in tube Y move faster on average and collide more often, so the bromine particles get pushed along the tube at a faster overall rate than in tube X.',
      xpValue: 25,
      misconceptionId: 'cpm-temp-mis-diffusion-equal',
    },
    {
      id: 'cpm-temp-q20',
      type: 'multiple-choice',
      stem: 'In a GCSE foundation question, a pupil is asked why a sealed metal can of cooking gas, left out of direct sunlight at 15 C all day, should never be placed near a Bunsen burner flame. Using the particle model, which answer best matches the marking points?',
      tier: 'challenge',
      options: [
        'The can would shrink because hot metal contracts more than cold metal',
        'The flame would create extra gas particles inside the can from nowhere',
        'The gas particles would gain energy, move faster and hit the inside walls of the can more often and harder, raising the pressure until the can might burst',
        'The metal of the can would change into a new substance that holds less gas',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpm-temp-mis-hot-air-lighter',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "particles expand when they are heated". The same finding is reported in Brook et al. (1984), cited in Kind: "As the temperature rises, the particles take in the heat and begin to expand."
    {
      id: 'cpm-temp-mis-particles-grow',
      description:
        'When a substance is heated, each particle itself grows in size, and that is why the substance expands.',
      triggerAnswer: 'particles-grow',
      correction:
        'In fact each particle stays the same size. Heating raises the average kinetic energy, so particles vibrate harder and sit a tiny bit further apart.',
      reExplanation:
        'Picture iron particles in a railway track. On a cool morning they vibrate gently in a regular grid. On a hot afternoon the same particles take in energy and vibrate over a wider area, so the centres of neighbouring particles sit a little further apart on average. Add up that tiny extra spacing along the whole rail and the rail is longer, even though every particle is still the same size as before.',
    },
    // Source: Robert Driver, Ann Squires, Peter Rushworth, Valerie Wood-Robinson (1994), "Making Sense of Secondary Science: Research into Children's Ideas", Routledge, chapter on heat and temperature: many learners describe temperature and heat as the same thing, and treat heat as a substance that flows into particles.
    {
      id: 'cpm-temp-mis-temp-is-heat',
      description:
        'Temperature is the same thing as the amount of heat in a substance.',
      triggerAnswer: 'temp-is-heat',
      correction:
        'In fact temperature is the average kinetic energy of the particles. Heat is the energy that moves from a hotter substance to a cooler one.',
      reExplanation:
        'A bath of warm water at 40 C holds far more total energy than a cup of warm water at 40 C, because there are many more particles in the bath. The temperature reading is the same in both, because temperature measures the average energy of each particle, not the total. Heat is the energy that flows when a hotter substance touches a cooler one.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a recurring finding is the idea that particles in a cold substance stop moving completely. The same misconception is documented in IOPSpark's catalogue entry "Many students think that atoms do not move in a solid" (https://spark.iop.org/many-students-think-atoms-do-not-move-solid).
    {
      id: 'cpm-temp-mis-stop-at-cold',
      description:
        'Particles stop moving completely when a substance gets cold or freezes solid.',
      triggerAnswer: 'stop-at-cold',
      correction:
        'In fact the particles only slow down. They still vibrate, even in ice from a freezer. Only at absolute zero would all motion in theory stop.',
      reExplanation:
        'Think of each particle in cold ice as still wiggling on the spot, just less than before. Cooling the ice further makes the wiggles smaller and smaller, but never zero. The lowest possible temperature on the kelvin scale is 0 K, which is about 273 below zero on the Celsius scale, and even there only the simplest models say motion would stop. In any kitchen freezer the particles are very much still moving.',
    },
    // Source: Bar V. (1989), "Children's views about the water cycle", Science Education 73(4), 481-500, summarised in Driver et al. (1994), "Making Sense of Secondary Science", Routledge: learners often say evaporation only depends on temperature, ignoring surface area and air movement.
    {
      id: 'cpm-temp-mis-evap-only-temp',
      description:
        'The rate of evaporation depends only on the temperature of the liquid, not on the surface area or how moving the air is.',
      triggerAnswer: 'evap-only-temp',
      correction:
        'In fact higher temperature speeds evaporation, but so does a larger surface area and moving air. All three change how often particles can break free.',
      reExplanation:
        'Wet washing on a line dries faster on a warm day, true. It also dries faster when the shirts are spread out rather than bunched up, because more surface particles can escape into the air. A breeze sweeps the new vapour away, so the air near the cloth stays drier and more particles can break free. Temperature is one factor of three, not the only one.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: the article reports learners explaining hot air rising by saying each hot air particle is "lighter" than each cold one. The same finding appears in BEST diagnostic question sets, STEM Learning / UCL, on heating and convection in fluids.
    {
      id: 'cpm-temp-mis-hot-air-lighter',
      description:
        'Hot air rises because each hot air particle weighs less than a cold air particle.',
      triggerAnswer: 'hot-air-lighter',
      correction:
        'In fact each air particle has the same mass at any temperature. Hot air rises because the same number of particles takes up more space, so each litre of hot air is lighter.',
      reExplanation:
        'In a warm kitchen, oven heat speeds up the air particles around the hob. They spread out, so a litre of warm air above the hob holds fewer particles than a litre of cooler air near the floor. Each particle still has the same mass as before, but the warm litre has fewer of them, so it is lighter overall and floats up through the room.',
    },
    // Source: Royal Society of Chemistry, "Diffusion in liquids" classroom resource, Education in Chemistry (https://edu.rsc.org/resources/diffusion-in-liquids/700.article): the standard demonstration with food dye in hot and cold water is framed to address the misconception that diffusion happens at the same rate regardless of temperature.
    {
      id: 'cpm-temp-mis-diffusion-equal',
      description:
        'A coloured dye spreads through hot water and cold water at the same rate, because the amount of dye and water is the same.',
      triggerAnswer: 'diffusion-equal',
      correction:
        'In fact dye spreads faster in hot water. The hot water particles have a higher average kinetic energy, so they bump the dye more often and more strongly.',
      reExplanation:
        'Picture a single dye particle in cold water. Slow water particles around it nudge it gently and only sometimes, so it shifts very little in a minute. In hot water the same dye particle is hit far more often and with bigger pushes from fast water particles, so it moves further across the beaker in the same time. The whole drop of dye spreads through the hot beaker in much less time.',
    },
    // Source: David Sang, Robert Woodside, "GCSE Physics for AQA, Combined Science: Trilogy", Cambridge University Press, particle model and thermal expansion section: a recurring early-KS4 misconception is that solids do not expand at all on heating, because they keep a fixed shape.
    {
      id: 'cpm-temp-mis-solids-no-expand',
      description:
        'Solids do not expand or contract when their temperature changes, because solids have a fixed shape.',
      triggerAnswer: 'solids-no-expand',
      correction:
        'In fact solids do expand slightly when heated and contract when cooled. The change is small, but big enough to bend metal strips and lengthen long rails.',
      reExplanation:
        'A railway track between Dover and Sevenoaks is a solid. On a cool morning the iron particles in each rail vibrate gently and the rail is at its normal length. On a hot afternoon the same particles vibrate more, sit a tiny bit further apart on average, and each rail is a little longer. The shape of the rail does not change, but the length does. Engineers leave a small expansion gap so the rails can grow without buckling.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
