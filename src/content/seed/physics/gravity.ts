import type { SkillNode, Zone } from '@/types/content'

const MASS_VS_WEIGHT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="200" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">A bag of sugar on Earth</text>
    <rect x="150" y="120" width="100" height="80" fill="currentColor" />
    <text x="200" y="170" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">1 kg</text>
    <text x="200" y="240" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Mass = 1 kg</text>
    <text x="200" y="262" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Weight = 10 N (g = 10 N/kg)</text>
    <line x1="200" y1="200" x2="200" y2="290" />
    <polygon points="192,278 200,295 208,278" fill="currentColor" stroke="none" />

    <text x="600" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Same bag of sugar on the Moon</text>
    <rect x="550" y="120" width="100" height="80" fill="currentColor" />
    <text x="600" y="170" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">1 kg</text>
    <text x="600" y="240" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Mass = 1 kg (unchanged)</text>
    <text x="600" y="262" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Weight = 1.6 N (g = 1.6 N/kg)</text>
    <line x1="600" y1="200" x2="600" y2="240" />
    <polygon points="592,228 600,245 608,228" fill="currentColor" stroke="none" />
  </g>
`

const SCALES_VS_NEWTONMETER_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="200" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Kitchen scales: measure mass</text>
    <rect x="120" y="160" width="160" height="40" />
    <rect x="160" y="120" width="80" height="40" fill="currentColor" />
    <text x="200" y="148" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">flour</text>
    <text x="200" y="222" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">500 g</text>
    <text x="200" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Reads in grams (g) or kilograms (kg).</text>
    <text x="200" y="282" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tells you the mass of the flour.</text>

    <text x="600" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Newton meter: measures weight</text>
    <line x1="600" y1="100" x2="600" y2="220" stroke-width="2" />
    <line x1="585" y1="100" x2="615" y2="100" stroke-width="2" />
    <rect x="585" y="130" width="30" height="50" fill="currentColor" />
    <text x="600" y="160" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">5 N</text>
    <line x1="600" y1="220" x2="600" y2="250" />
    <rect x="570" y="250" width="60" height="40" />
    <text x="600" y="276" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">load</text>
    <text x="600" y="305" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Reads in newtons (N).</text>
    <text x="600" y="322" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Tells you the weight of the load.</text>
  </g>
`

const ASTRONAUT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Same astronaut, three places</text>

    <!-- Earth column -->
    <text x="180" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth (g = 10 N/kg)</text>
    <circle cx="180" cy="180" r="50" />
    <text x="180" y="186" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>
    <circle cx="180" cy="270" r="14" fill="currentColor" />
    <line x1="180" y1="284" x2="180" y2="320" />
    <text x="180" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mass 70 kg</text>
    <text x="180" y="368" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Weight 700 N</text>

    <!-- Moon column -->
    <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Moon (g = 1.6 N/kg)</text>
    <circle cx="400" cy="180" r="30" />
    <text x="400" y="186" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon</text>
    <circle cx="400" cy="270" r="14" fill="currentColor" />
    <line x1="400" y1="284" x2="400" y2="320" />
    <text x="400" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mass 70 kg</text>
    <text x="400" y="368" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Weight 112 N</text>

    <!-- Deep space column -->
    <text x="620" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Deep space (g near 0)</text>
    <text x="620" y="180" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">★</text>
    <circle cx="620" cy="270" r="14" fill="currentColor" />
    <line x1="620" y1="284" x2="620" y2="320" />
    <text x="620" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Mass 70 kg</text>
    <text x="620" y="368" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Weight near 0 N</text>
  </g>
`

export const gravityMassVsWeight: SkillNode = {
  id: 'physics-gravity-mass-vs-weight',
  title: 'Mass and Weight',
  description:
    'Tell mass and weight apart. Mass is the amount of matter in an object, measured in kilograms (kg) on kitchen or balance scales, and is the same wherever the object goes. Weight is the pull of gravity on the object, measured in newtons (N) on a newton meter, and changes when the gravity changes (smaller on the Moon, near zero in deep space). Use the value g equals about 10 N/kg at the Earth’s surface.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'core',
  prerequisites: ['physics-forces-types'],
  curriculum: {
    ks3Objective:
      'Gravity force, weight = mass x gravitational field strength (g), on Earth g = 10 N/kg, different on other planets and stars; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only).',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight, weight = mass x gravitational field strength, W = m g (GCSE Physics 8463)',
      edexcel: 'Topic 1 Motion and forces, 1.16-1.17 Mass and weight; weight as the gravitational force on an object (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; mass and weight, gravitational field strength (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'mw-scene-sugar',
      title: 'A 1 kg Bag of Sugar on Earth and on the Moon',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the mass and the weight of the same bag of sugar in two places.',
      data: {
        viewBox: '0 0 800 400',
        svg: MASS_VS_WEIGHT_SVG,
        hotspots: [
          {
            id: 'mw-s-earth-mass',
            x: 25,
            y: 60,
            label: 'Mass on Earth = 1 kg',
            description:
              'The bag holds the same amount of stuff (sugar) wherever you take it. On Earth, kitchen scales show its mass as 1 kg.',
          },
          {
            id: 'mw-s-earth-weight',
            x: 25,
            y: 70,
            label: 'Weight on Earth = 10 N',
            description:
              'On Earth, gravity pulls each kilogram with about 10 N of force. So the 1 kg bag has a weight of 10 N.',
          },
          {
            id: 'mw-s-moon-mass',
            x: 75,
            y: 60,
            label: 'Mass on Moon = 1 kg',
            description:
              'Take the bag to the Moon. The amount of sugar has not changed. So the mass is still 1 kg.',
          },
          {
            id: 'mw-s-moon-weight',
            x: 75,
            y: 70,
            label: 'Weight on Moon = 1.6 N',
            description:
              'Moon gravity is weaker. Each kilogram is pulled with only about 1.6 N. So the bag now weighs only 1.6 N. The bag feels lighter to lift, even though it is the same bag.',
          },
        ],
      },
    },
    {
      id: 'mw-scene-instruments',
      title: 'Two Different Instruments, Two Different Things',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see which instrument measures mass and which measures weight, and what units each one shows.',
      data: {
        viewBox: '0 0 800 400',
        svg: SCALES_VS_NEWTONMETER_SVG,
        hotspots: [
          {
            id: 'mw-i-scales',
            x: 25,
            y: 50,
            label: 'Kitchen scales',
            description:
              'A balance or kitchen scales reads in grams or kilograms. It tells you the mass of the food. The reading does not change between Earth and Moon if the scales are balance scales.',
          },
          {
            id: 'mw-i-newton',
            x: 75,
            y: 50,
            label: 'Newton meter (force meter)',
            description:
              'A newton meter is a spring with a scale in newtons. Hang an object on it and the spring stretches by how much the gravity pulls. It tells you the weight of the object, in N.',
          },
          {
            id: 'mw-i-units',
            x: 50,
            y: 88,
            label: 'Units to remember',
            description:
              'Mass is measured in grams (g) and kilograms (kg). Weight is measured in newtons (N). Mixing the two units up is a very common slip.',
          },
        ],
      },
    },
    {
      id: 'mw-scene-astronaut',
      title: 'One Astronaut, Three Places',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the mass and weight of the same 70 kg astronaut on Earth, on the Moon, and in deep space.',
      data: {
        viewBox: '0 0 800 400',
        svg: ASTRONAUT_SVG,
        hotspots: [
          {
            id: 'mw-a-earth',
            x: 22,
            y: 90,
            label: 'Earth: g = 10 N/kg, weight 700 N',
            description:
              'On Earth, gravity is about 10 N/kg. Weight = 70 x 10 = 700 N. The astronaut feels their normal weight on the launchpad.',
          },
          {
            id: 'mw-a-moon',
            x: 50,
            y: 90,
            label: 'Moon: g = 1.6 N/kg, weight 112 N',
            description:
              'On the Moon, gravity is much weaker. Weight = 70 x 1.6 = 112 N. The astronaut feels much lighter and can hop higher in the same suit.',
          },
          {
            id: 'mw-a-space',
            x: 78,
            y: 90,
            label: 'Deep space: g near 0, weight near 0',
            description:
              'Far from any large body, gravity is almost zero. Weight is almost zero, so the astronaut floats. Mass is still 70 kg, so a push would still take effort.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'mw-worked-1',
      title: 'Naming the mass and the weight of a bag of sugar',
      steps: [
        {
          explanation:
            'Pick the object. The object is a 1 kg bag of sugar from a Sevenoaks supermarket.',
        },
        {
          explanation:
            'State the mass. The mass is the amount of matter in the bag. The pack says 1 kg, so the mass is 1 kg. The unit is kilogram.',
          maths: 'mass = 1 kg',
        },
        {
          explanation:
            'Decide which instrument reads mass. Kitchen scales and balance scales read mass, in grams or kilograms.',
        },
        {
          explanation:
            'State the weight. The weight is the pull of gravity on the bag. On Earth, each kilogram is pulled with about 10 N, so the 1 kg bag has a weight of 10 N. The unit is newton.',
          maths: 'weight = 10 N',
        },
        {
          explanation:
            'Decide which instrument reads weight. A newton meter (a spring with a newton scale) reads weight, in newtons.',
        },
        {
          explanation:
            'Check. Mass is in kg and stays the same wherever you go. Weight is in N and changes if you go somewhere with different gravity.',
        },
      ],
    },
    {
      id: 'mw-worked-2',
      title: 'A 50 kg pupil walks onto the bathroom scales on Earth',
      steps: [
        {
          explanation:
            'Set the scene. The pupil has a mass of 50 kg. They stand on bathroom scales in their kitchen at home.',
        },
        {
          explanation:
            'State the mass. The pupil is made of the same amount of stuff wherever they go. So mass = 50 kg.',
          maths: 'mass = 50 kg',
        },
        {
          explanation:
            'Find the weight on Earth. Use g = 10 N/kg. Each kilogram is pulled with 10 N. Multiply the mass in kg by 10 to find the weight in N.',
          maths: 'weight = 50 x 10 = 500 N',
        },
        {
          explanation:
            'State the units. Mass: kilograms. Weight: newtons. The bathroom scales have been built so they actually measure the weight, but they show the answer in kilograms by dividing by 10. So the dial shows 50 kg, even though they really sense 500 N.',
        },
        {
          explanation:
            'Take the same pupil to the Moon. Mass is still 50 kg. But Moon gravity is about 1.6 N/kg. So the weight there would be 50 x 1.6 = 80 N. The pupil feels much lighter.',
          maths: 'weight on Moon = 50 x 1.6 = 80 N',
        },
        {
          explanation:
            'Conclusion. Mass stays the same. Weight changes with the gravity. On Earth this 50 kg pupil weighs 500 N; on the Moon they weigh 80 N.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'mw-q1',
      type: 'multiple-choice',
      stem: 'Which units are used for mass and which for weight in KS3 physics?',
      tier: 'core',
      options: [
        'Mass in newtons (N); weight in kilograms (kg).',
        'Both mass and weight in newtons (N).',
        'Both mass and weight in kilograms (kg).',
        'Mass in kilograms (kg); weight in newtons (N).',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'mw-mis-units-swapped',
      hint: 'Mass is in kilograms. Weight is a force, and forces are measured in newtons.',
    },
    {
      id: 'mw-q2',
      type: 'multiple-choice',
      stem: 'Which sentence best describes mass?',
      tier: 'core',
      options: [
        'Mass is the pull of gravity on an object.',
        'Mass is the amount of matter (stuff) in an object.',
        'Mass is the height of an object above the ground.',
        'Mass is the speed of an object as it falls.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mw-mis-mass-is-weight',
      hint: 'Mass is about how much there is, not how strongly gravity pulls.',
    },
    {
      id: 'mw-q3',
      type: 'multiple-choice',
      stem: 'Which sentence best describes weight?',
      tier: 'core',
      options: [
        'Weight is the amount of matter in an object.',
        'Weight is the pull of gravity on an object.',
        'Weight is the same as the mass in kilograms.',
        'Weight is the speed of an object falling on Earth.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mw-mis-mass-is-weight',
      hint: 'Weight is a force. What force is the question asking about?',
    },
    {
      id: 'mw-q4',
      type: 'multiple-choice',
      stem: 'A pupil takes a 1 kg bag of sugar from a Manchester kitchen up to a base on the Moon. What is the mass of the bag on the Moon?',
      tier: 'core',
      options: [
        '1 kg, because the amount of sugar has not changed.',
        '0.16 kg, because the Moon gravity is weaker.',
        '10 N, because gravity is the same.',
        '0 kg, because there is no gravity in space.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mw-mis-mass-changes-with-gravity',
      hint: 'The bag still contains the same amount of sugar. Mass measures the amount of stuff.',
    },
    {
      id: 'mw-q5',
      type: 'multiple-choice',
      stem: 'Which instrument is used to measure the weight of an object in newtons?',
      tier: 'core',
      options: [
        'Bathroom scales (electronic), which read in kilograms.',
        'Kitchen scales (balance), which read in grams and kilograms.',
        'A measuring cylinder.',
        'A newton meter (force meter), which reads in newtons.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'mw-mis-bathroom-scales-show-mass',
      hint: 'A spring stretches by how hard the load pulls on it. The unit is in the name.',
    },
    {
      id: 'mw-q6',
      type: 'numeric-entry',
      stem: 'A pupil holds an apple. Its mass is 0.1 kg. What is the mass, in grams, of the apple?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'g',
      xpValue: 10,
      hint: 'There are 1000 g in 1 kg. Multiply by 1000.',
    },
    {
      id: 'mw-q7',
      type: 'numeric-entry',
      stem: 'A bag of pasta has a mass of 500 g. What is the mass, in kilograms, of the bag?',
      tier: 'core',
      correctAnswer: 0.5,
      unit: 'kg',
      xpValue: 10,
      hint: 'Divide by 1000 to go from grams to kilograms.',
    },
    {
      id: 'mw-q8',
      type: 'multiple-choice',
      stem: 'A pupil says, "Astronauts on the Moon have less mass than on Earth." Which sentence is the best response?',
      tier: 'core',
      options: [
        'Yes, because gravity is weaker on the Moon.',
        'Yes, because they wear lighter clothes on the Moon.',
        'No, mass is the amount of matter in them and does not change with gravity.',
        'No, because astronauts get heavier on the Moon.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'mw-mis-mass-changes-with-gravity',
      hint: 'Going to the Moon does not remove any of the astronaut’s body. So which property has not changed?',
    },
    {
      id: 'mw-q9',
      type: 'spot-misconception',
      stem: 'Aisha says, "Weight and mass mean the same thing. A 5 kg dog also weighs 5 kg, that is just two ways of saying it." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The numbers and units for mass and weight are the same in everyday life.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Mass and weight are different ideas with different units. The dog has a mass of 5 kg, but its weight is the pull of gravity on it, about 50 N on Earth.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mw-mis-mass-is-weight',
    },
    {
      id: 'mw-q10',
      type: 'labelled-image',
      stem: 'Place the names on the diagram of the same bag of sugar on Earth and on the Moon. Each marker takes one label.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: MASS_VS_WEIGHT_SVG,
      hotspots: [
        { id: 'mw-q10-h1', x: 25, y: 60, correctLabel: 'Mass on Earth = 1 kg' },
        { id: 'mw-q10-h2', x: 25, y: 70, correctLabel: 'Weight on Earth = 10 N' },
        { id: 'mw-q10-h3', x: 75, y: 60, correctLabel: 'Mass on Moon = 1 kg' },
        { id: 'mw-q10-h4', x: 75, y: 70, correctLabel: 'Weight on Moon = 1.6 N' },
      ],
      labels: [
        'Mass on Earth = 1 kg',
        'Weight on Earth = 10 N',
        'Mass on Moon = 1 kg',
        'Weight on Moon = 1.6 N',
        'Weight on Moon = 10 N',
        'Mass on Moon = 0.16 kg',
      ],
      xpValue: 15,
      hint: 'Mass does not change between Earth and Moon. Weight changes with the gravity.',
    },
    {
      id: 'mw-q11',
      type: 'multiple-choice',
      stem: 'A balance set of scales (the kind with two pans) is used to weigh a 1 kg bag of flour on the Moon. What does it read?',
      tier: 'confident',
      options: [
        '1 kg, because balance scales compare the bag against a 1 kg standard mass and both are pulled by the same gravity.',
        '0.16 kg, because the Moon’s gravity is weaker.',
        '10 N, because the scales convert mass to weight.',
        '0 kg, because the bag floats on the Moon.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'mw-mis-balance-scales-show-weight',
      hint: 'A balance compares two objects under the same gravity. If both masses are 1 kg, what does the balance show?',
    },
    {
      id: 'mw-q12',
      type: 'numeric-entry',
      stem: 'A 2 kg melon hangs from a newton meter on Earth (g = 10 N/kg). What does the newton meter read, in newtons?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'N',
      xpValue: 15,
      misconceptionId: 'mw-mis-g-is-grams',
      hint: 'Multiply the mass in kilograms by g (the gravitational field strength, 10 N/kg), not by 10 grams.',
    },
    {
      id: 'mw-q13',
      type: 'drag-order',
      stem: 'Order the four steps a pupil should follow to find the weight of a kitchen tin in newtons, using only kitchen scales and the value g = 10 N/kg.',
      tier: 'confident',
      items: [
        'Read the mass of the tin in grams from the kitchen scales.',
        'Convert the mass into kilograms by dividing by 1000.',
        'Multiply the mass in kilograms by 10 N/kg.',
        'Write the answer in newtons (N).',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Start by reading the scales, then convert units, then multiply by g, then write the unit.',
    },
    {
      id: 'mw-q14',
      type: 'multiple-choice',
      stem: 'Lila says, "On the International Space Station the astronauts float, so they have no mass." Which is the best response?',
      tier: 'confident',
      options: [
        'Lila is right; they lose all their mass while floating.',
        'Lila is right; mass is just another word for how heavy you feel.',
        'Lila is not right; they still have mass. Their weight is very small because gravity acts on them along with the ISS, so both fall together and they appear to float.',
        'Lila is not right; the astronauts have no mass and no weight at the same time.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'mw-mis-no-gravity-no-mass',
      hint: 'Floating in space happens because of motion around the Earth, not because mass has gone away.',
    },
    {
      id: 'mw-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a 1 kg bag of sugar feels lighter to lift on the Moon than on Earth.',
      tier: 'confident',
      steps: [
        'On Earth, gravity is about 10 N/kg. So the 1 kg bag has a weight of 10 N pulling it down.',
        'On the Moon, gravity is much weaker, about 1.6 N/kg. So the same 1 kg bag has a weight of only 1.6 N pulling it down.',
        null,
        'The mass of the bag has not changed. There is still 1 kg of sugar inside.',
        'So the bag feels lighter on the Moon because its weight is smaller, even though its mass is exactly the same as on Earth.',
      ],
      missingStepIndex: 2,
      correctStep:
        'When you lift the bag, you have to pull up against its weight. A smaller weight means a smaller upward force is enough.',
      xpValue: 15,
    },
    {
      id: 'mw-q16',
      type: 'numeric-entry',
      stem: 'A 5 kg toolbox is hung from a newton meter in a Lake District workshop on Earth (g = 10 N/kg). What does the newton meter read, in newtons?',
      tier: 'confident',
      correctAnswer: 50,
      unit: 'N',
      xpValue: 15,
      hint: 'Mass in kilograms times g equals weight in newtons.',
    },
    {
      id: 'mw-q17',
      type: 'multiple-choice',
      stem: 'A pupil claims, "If we doubled the gravity at the Earth’s surface, my mass would double too." Which is the best response?',
      tier: 'challenge',
      options: [
        'They are right; mass and gravity always change together.',
        'They are right; doubling gravity doubles every property of the pupil.',
        'They are not right; mass measures the amount of matter and does not change with gravity. The weight would double, but the mass would not.',
        'They are not right; doubling gravity would halve the mass instead.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'mw-mis-mass-changes-with-gravity',
      hint: 'Mass measures the amount of stuff. Gravity changes the pull, not the stuff.',
    },
    {
      id: 'mw-q18',
      type: 'multiple-choice',
      stem: 'A Sunday roast suitcase weighs 196 N on Earth (g = 10 N/kg). The same suitcase is taken to a planet where g = 25 N/kg. Which sentence is correct about its mass and its weight on the new planet?',
      tier: 'challenge',
      options: [
        'Mass = 19.6 kg; weight on the new planet = 196 N (unchanged).',
        'Mass = 19.6 kg; weight on the new planet = 490 N.',
        'Mass = 25 kg; weight on the new planet = 625 N.',
        'Mass = 196 kg; weight on the new planet = 4900 N.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'mw-mis-gravity-same-everywhere',
      hint: 'Find the mass on Earth first (mass = weight / g). Mass does not change. Then multiply by the new g.',
    },
    {
      id: 'mw-q19',
      type: 'spot-misconception',
      stem: 'Theo says, "A balance set of scales would still read my mass correctly on the Moon, because the standard masses on the other side are pulled less hard too. The balance just compares the two sides under the same gravity, so the reading does not change." Is the method sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo is not right. A balance reads weight in newtons, so its reading would change on the Moon.',
          isMisconception: true,
        },
        {
          text: 'Theo is right. A balance compares the unknown mass against a known mass under the same gravity, so its reading is mass and stays the same on the Moon.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'mw-mis-balance-scales-show-weight',
    },
    {
      id: 'mw-q20',
      type: 'free-text',
      stem: 'A pupil is told their mass is 60 kg and their weight on Earth is 600 N. They are about to fly to a base on Mars where g is about 3.7 N/kg. In two or three sentences, explain what their mass and weight will be on Mars and why one of them changes while the other does not.',
      tier: 'challenge',
      sampleAnswer:
        'On Mars the pupil’s mass will still be 60 kg because mass is the amount of matter in them and travelling does not remove any of it. Their weight on Mars will be 60 multiplied by 3.7, which is 222 N. The weight has changed because Mars gravity is weaker than Earth gravity, so each kilogram is pulled less hard. The mass has not changed because the gravity does not change how much stuff there is.',
      keywords: ['mass', '60 kg', 'weight', '222 N', 'gravity', 'matter', 'stuff'],
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates use kilograms for weight and newtons for mass
    {
      id: 'mw-mis-units-swapped',
      description:
        'Using kilograms (kg) for weight and newtons (N) for mass, swapping the units of the two ideas.',
      triggerAnswer: 'units-swapped',
      correction:
        'Mass is measured in kilograms (kg) and grams (g). Weight is a force, so it is measured in newtons (N). The two units are not swapped.',
      reExplanation:
        'A 1 kg bag of flour has a mass of 1 kg. Its weight on Earth is about 10 N. Saying the bag weighs 1 kg or has a mass of 10 N would mix up the two ideas. In every KS3 answer, write a kg or a g after a mass and an N after a weight.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on mass and weight
    {
      id: 'mw-mis-mass-is-weight',
      description:
        'Believing mass and weight are the same idea, just different ways of writing it down.',
      triggerAnswer: 'mass-is-weight',
      correction:
        'Mass is the amount of matter in an object, in kilograms. Weight is the pull of gravity on the object, in newtons. They are different things and they have different units.',
      reExplanation:
        'A bag of shopping has a mass of 5 kg. The same bag has a weight on Earth of about 50 N. The first number tells you how much stuff is in the bag; the second tells you how hard the Earth pulls on it. The bag would still have a 5 kg mass on the Moon, but its weight there would be much less, about 8 N.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates write that mass changes when an object is taken to the Moon
    {
      id: 'mw-mis-mass-changes-with-gravity',
      description:
        'Believing the mass of an object changes when the gravity changes, for example saying a bag of sugar has less mass on the Moon than on Earth.',
      triggerAnswer: 'mass-changes-with-gravity',
      correction:
        'Mass measures the amount of matter in an object and does not change with gravity. Only the weight changes when the gravity changes.',
      reExplanation:
        'Take a 1 kg bag of sugar to the Moon. There is still the same amount of sugar in the bag, so the mass is still 1 kg. But the Moon’s gravity is weaker, so each kilogram is pulled with less force. The weight drops from about 10 N to about 1.6 N. The mass and the weight are doing two different jobs; only one of them depends on gravity.',
    },
    // Source: OCR GCSE Physics examiner report June 2022, J259/02, candidates conflate floating in orbit with having no mass
    {
      id: 'mw-mis-no-gravity-no-mass',
      description:
        'Believing that astronauts on the International Space Station have no mass because they appear to float, treating "weightless" as "massless".',
      triggerAnswer: 'no-gravity-no-mass',
      correction:
        'Astronauts on the ISS still have their full mass. They appear to float because they and the ISS are falling around the Earth together, not because their mass has gone.',
      reExplanation:
        'Mass is the amount of matter in the astronaut, the same amount as on the launchpad. To push them sideways inside the ISS still takes effort, which proves the mass is there. They look weightless because every object inside the ISS is in free fall around the Earth at the same rate, so there is no contact force from the floor. The Earth still pulls them; mass has nothing to do with whether they float.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on what bathroom scales measure
    {
      id: 'mw-mis-bathroom-scales-show-mass',
      description:
        'Believing electronic bathroom scales directly measure mass in kilograms, missing that they actually sense weight in newtons and divide by g to display kilograms.',
      triggerAnswer: 'bathroom-scales-show-mass',
      correction:
        'Electronic bathroom scales sense the weight pressing down on them in newtons, then divide by g (about 10 N/kg) to display a number in kilograms. The display is in kilograms but the sensor reads weight.',
      reExplanation:
        'On Earth, the scales read your mass correctly because they always divide by 10 N/kg. Take the same scales to the Moon and the spring would only feel about a sixth of the push, so they would show your mass as too low. A balance set of scales would still read your mass correctly because it compares against a known mass under the same gravity.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates assume balance scales read weight (in newtons) on the Moon
    {
      id: 'mw-mis-balance-scales-show-weight',
      description:
        'Believing balance scales (two pans) directly measure weight in newtons, missing that they compare two masses against each other and so always read mass.',
      triggerAnswer: 'balance-scales-show-weight',
      correction:
        'Balance scales compare an unknown mass against a standard mass under the same gravity. If both masses are equal, the pans balance. So balance scales read mass, in kilograms, on Earth and on the Moon.',
      reExplanation:
        'A school chemistry balance has a 100 g standard weight on one side, balanced by 100 g of salt on the other. Take it to the Moon. Both pans are pulled by the same weaker gravity, so they still balance. The salt still reads as 100 g; the balance reads mass. Only a newton meter would change.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on the value of g
    {
      id: 'mw-mis-g-is-grams',
      description:
        'Confusing the symbol g for gravitational field strength with g for grams, so writing weight = mass x g and reading off "10 g" instead of 10 N/kg.',
      triggerAnswer: 'g-is-grams',
      correction:
        'In W = m x g, the g is gravitational field strength, in newtons per kilogram (N/kg). On Earth it is about 10 N/kg. The unit g for grams is a mass unit, not a value to use here.',
      reExplanation:
        'For a 2 kg melon on Earth, the weight is 2 kg x 10 N/kg, which gives 20 N. The 10 here is the field strength in N/kg, not 10 grams. Always write the units of g as N/kg in any working; if a candidate writes "g = 10 g" they have used the wrong idea.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates state Mars has the same gravity as Earth or use the wrong direction
    {
      id: 'mw-mis-gravity-same-everywhere',
      description:
        'Believing that gravity has the same strength on every planet and moon, so weight does not change when an object is moved from Earth to the Moon or to Mars.',
      triggerAnswer: 'gravity-same-everywhere',
      correction:
        'Different planets and moons have different gravitational field strengths (g). Earth is about 10 N/kg, the Moon 1.6 N/kg, Mars 3.7 N/kg. Weight changes when you move an object between them; mass does not.',
      reExplanation:
        'A 1 kg bag of flour weighs 10 N on Earth, 1.6 N on the Moon, and about 3.7 N on Mars. The bag has not lost any flour; only the gravity has changed. Engineers planning a Moon mission have to remember that lifting a 100 N rock there is the same as lifting a 625 N rock on Earth, because the muscles still feel the local weight.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityZoneNodes = [gravityMassVsWeight]

export const gravityZone: Zone = {
  id: 'physics-gravity',
  name: 'Gravity, Weight, Mass',
  realm: 'mechanica',
  nodeIds: gravityZoneNodes.map(n => n.id),
}
