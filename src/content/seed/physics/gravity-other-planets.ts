import type { SkillNode } from '@/types/content'

const SUITCASE_TOUR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The same 12 kg suitcase on four worlds</text>

    <!-- Headers -->
    <text x="120" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth</text>
    <text x="300" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Moon</text>
    <text x="480" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Mars</text>
    <text x="660" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Jupiter</text>

    <!-- Earth column -->
    <rect x="95" y="110" width="50" height="60" fill="currentColor" />
    <line x1="120" y1="105" x2="120" y2="100" />
    <text x="120" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">m = 12 kg</text>
    <text x="120" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 10 N/kg</text>
    <text x="120" y="235" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">W = 120 N</text>

    <!-- Moon column -->
    <rect x="275" y="110" width="50" height="60" fill="currentColor" />
    <line x1="300" y1="105" x2="300" y2="100" />
    <text x="300" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">m = 12 kg</text>
    <text x="300" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 1.6 N/kg</text>
    <text x="300" y="235" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">W = 19.2 N</text>

    <!-- Mars column -->
    <rect x="455" y="110" width="50" height="60" fill="currentColor" />
    <line x1="480" y1="105" x2="480" y2="100" />
    <text x="480" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">m = 12 kg</text>
    <text x="480" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 3.7 N/kg</text>
    <text x="480" y="235" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">W = 44.4 N</text>

    <!-- Jupiter column -->
    <rect x="635" y="110" width="50" height="60" fill="currentColor" />
    <line x1="660" y1="105" x2="660" y2="100" />
    <text x="660" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">m = 12 kg</text>
    <text x="660" y="215" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 25 N/kg</text>
    <text x="660" y="235" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">W = 300 N</text>

    <!-- Bottom strip -->
    <line x1="60" y1="290" x2="740" y2="290" />
    <text x="400" y="320" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Mass stays at 12 kg on every world.</text>
    <text x="400" y="345" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">Only g changes, so W = m x g changes too.</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A baggage handler at Heathrow would feel the same lift; on the Moon the case feels far lighter.</text>
  </g>
`

const FORMULA_BREAKDOWN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">W = m x g, broken down for a 70 kg person</text>

    <!-- Formula -->
    <text x="400" y="90" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">W = m x g</text>
    <text x="400" y="115" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">W in newtons (N), m in kilograms (kg), g in newtons per kilogram (N/kg)</text>

    <!-- Earth row -->
    <text x="120" y="170" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth (g = 10 N/kg)</text>
    <text x="500" y="170" text-anchor="start" font-size="14" stroke="none" fill="currentColor">W = 70 x 10 = 700 N</text>

    <!-- Moon row -->
    <text x="120" y="210" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Moon (g = 1.6 N/kg)</text>
    <text x="500" y="210" text-anchor="start" font-size="14" stroke="none" fill="currentColor">W = 70 x 1.6 = 112 N</text>

    <!-- Mars row -->
    <text x="120" y="250" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Mars (g = 3.7 N/kg)</text>
    <text x="500" y="250" text-anchor="start" font-size="14" stroke="none" fill="currentColor">W = 70 x 3.7 = 259 N</text>

    <!-- Jupiter row -->
    <text x="120" y="290" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Jupiter (g = 25 N/kg)</text>
    <text x="500" y="290" text-anchor="start" font-size="14" stroke="none" fill="currentColor">W = 70 x 25 = 1750 N</text>

    <!-- Spacer line -->
    <line x1="80" y1="320" x2="720" y2="320" />

    <!-- Footer note -->
    <text x="400" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same person, four different weights. The person never changes mass.</text>
    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">On Jupiter the same legs would have to push roughly 2.5 times harder than on Earth.</text>
  </g>
`

const WHY_G_DIFFERS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Why does g change from world to world?</text>

    <!-- Earth -->
    <circle cx="170" cy="170" r="55" fill="currentColor" />
    <text x="170" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>
    <text x="170" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 10 N/kg</text>

    <!-- Moon -->
    <circle cx="350" cy="190" r="22" fill="currentColor" />
    <text x="350" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon</text>
    <text x="350" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 1.6 N/kg</text>

    <!-- Mars -->
    <circle cx="500" cy="185" r="32" fill="currentColor" />
    <text x="500" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Mars</text>
    <text x="500" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 3.7 N/kg</text>

    <!-- Jupiter -->
    <circle cx="660" cy="155" r="75" fill="currentColor" />
    <text x="660" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Jupiter</text>
    <text x="660" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g = 25 N/kg</text>

    <!-- Notes -->
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Bigger mass and a denser body pull harder at the surface.</text>
    <text x="400" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Jupiter is the most massive: its surface g is roughly 2.5 times Earth's.</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The Moon is small and low mass, so its surface pull is gentle.</text>
  </g>
`

export const gravityOtherPlanets: SkillNode = {
  id: 'physics-gravity-other-planets',
  title: 'Gravity on Other Planets',
  description:
    'Weight changes from world to world because g, the gravitational field strength, changes. Mass does not. Use W = m x g with W in newtons, m in kilograms, and g in N/kg. On Earth g = 10 N/kg. On the Moon g = 1.6 N/kg, on Mars g = 3.7 N/kg, on Jupiter g is about 25 N/kg. The same person or suitcase is the same number of kilograms on every world; only the weight in newtons changes. Build comfort comparing weights of a 12 kg suitcase, a 70 kg pupil and a 0.5 kg bag of crisps across the four worlds.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-weight-calculation'],
  curriculum: {
    ks3Objective:
      'Gravity force, weight = mass x gravitational field strength (g), on Earth g = 10 N/kg, different on other planets and stars; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only).',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; gravitational field strength varies with location (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight on different planetary bodies (GCSE Physics 1PH0)',
      ocr: 'P2.1 Motion and forces; gravitational field strength on different planets and moons (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gop-scene-suitcase-tour',
      title: 'The Same Suitcase on Four Worlds',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the weight of one 12 kg suitcase across Earth, the Moon, Mars and Jupiter.',
      data: {
        viewBox: '0 0 800 400',
        svg: SUITCASE_TOUR_SVG,
        hotspots: [
          {
            id: 'gop-suitcase-earth',
            x: 15,
            y: 50,
            label: 'On Earth: W = 120 N',
            description:
              'A 12 kg suitcase at a Heathrow check-in desk feels its full Earth weight: W = m x g = 12 x 10 = 120 N. That is the pull on the case from Earth.',
          },
          {
            id: 'gop-suitcase-moon',
            x: 38,
            y: 50,
            label: 'On the Moon: W = 19.2 N',
            description:
              'The Moon has g = 1.6 N/kg, much less than Earth. W = 12 x 1.6 = 19.2 N. The case still has 12 kg of stuff inside; it just pulls down on you a sixth as hard.',
          },
          {
            id: 'gop-suitcase-mars',
            x: 60,
            y: 50,
            label: 'On Mars: W = 44.4 N',
            description:
              'On Mars g = 3.7 N/kg, so the same case weighs 12 x 3.7 = 44.4 N. About a third of its Earth weight. Easy to lift, but not as gentle as on the Moon.',
          },
          {
            id: 'gop-suitcase-jupiter',
            x: 82,
            y: 50,
            label: 'On Jupiter: W = 300 N',
            description:
              'Jupiter has roughly g = 25 N/kg at its cloud tops. W = 12 x 25 = 300 N, two and a half times the Earth weight. The same case is much harder to lift.',
          },
          {
            id: 'gop-suitcase-mass-note',
            x: 50,
            y: 82,
            label: 'Mass is fixed at 12 kg',
            description:
              'Across all four columns the mass stays 12 kg. Mass counts the stuff in the case and does not depend on where you are. Only the weight (the pull) changes.',
          },
        ],
      },
    },
    {
      id: 'gop-scene-formula-tour',
      title: 'W = m x g, a 70 kg Pupil',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the weight of one 70 kg pupil on each world.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORMULA_BREAKDOWN_SVG,
        hotspots: [
          {
            id: 'gop-formula-earth',
            x: 40,
            y: 42,
            label: 'Earth: 700 N',
            description:
              'On Earth the pupil weighs W = 70 x 10 = 700 N. That is the everyday "how heavy I feel" value in newtons.',
          },
          {
            id: 'gop-formula-moon',
            x: 40,
            y: 52,
            label: 'Moon: 112 N',
            description:
              'On the Moon, W = 70 x 1.6 = 112 N. About a sixth of the pupil`s Earth weight. The pupil weighs less, but is still the same person.',
          },
          {
            id: 'gop-formula-mars',
            x: 40,
            y: 62,
            label: 'Mars: 259 N',
            description:
              'On Mars, W = 70 x 3.7 = 259 N. Roughly a third of the Earth value. Walking on Mars would feel light but not as light as on the Moon.',
          },
          {
            id: 'gop-formula-jupiter',
            x: 40,
            y: 72,
            label: 'Jupiter: 1750 N',
            description:
              'On Jupiter, W = 70 x 25 = 1750 N. Two and a half times the Earth weight. The pupil`s legs would have to push two and a half times as hard just to stand up.',
          },
        ],
      },
    },
    {
      id: 'gop-scene-why-g-differs',
      title: 'Why g Changes from World to World',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a planet`s mass and size set its surface gravitational field strength g.',
      data: {
        viewBox: '0 0 800 400',
        svg: WHY_G_DIFFERS_SVG,
        hotspots: [
          {
            id: 'gop-why-earth',
            x: 21,
            y: 42,
            label: 'Earth: g = 10 N/kg',
            description:
              'Earth is medium sized and quite dense. On its surface, the pull on every kilogram is 10 newtons. We round 9.81 to 10 for KS3.',
          },
          {
            id: 'gop-why-moon',
            x: 44,
            y: 47,
            label: 'Moon: g = 1.6 N/kg',
            description:
              'The Moon is much smaller and lower mass than Earth, so its surface pull is gentle. Roughly one sixth of Earth`s pull per kilogram.',
          },
          {
            id: 'gop-why-mars',
            x: 62,
            y: 46,
            label: 'Mars: g = 3.7 N/kg',
            description:
              'Mars is smaller than Earth and less dense. Its surface g is about 3.7 N/kg, just over a third of Earth`s.',
          },
          {
            id: 'gop-why-jupiter',
            x: 82,
            y: 38,
            label: 'Jupiter: g = 25 N/kg',
            description:
              'Jupiter is enormous and very massive, so its surface g is the biggest of these four: roughly 25 N/kg. Two and a half times Earth.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gop-worked-1',
      title: 'A 70 kg person on Mars: finding W',
      steps: [
        {
          explanation:
            'Pick out the two quantities. A 70 kg pupil stands on Mars, where g = 3.7 N/kg. We want the weight W.',
        },
        {
          explanation:
            'Check the units. m is in kg and g is in N/kg, so W will come out in newtons (N). No conversion is needed.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'W = m x g',
        },
        {
          explanation: 'Substitute the two numbers.',
          maths: 'W = 70 x 3.7',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 259 N',
        },
        {
          explanation:
            'State the answer. On Mars the pupil weighs 259 N, just over a third of the 700 N they would weigh on Earth. The mass is still 70 kg on both worlds.',
        },
      ],
    },
    {
      id: 'gop-worked-2',
      title: 'A 0.5 kg bag of crisps on the Moon: finding W',
      steps: [
        {
          explanation:
            'Pick out the two quantities. A 0.5 kg bag of crisps sits on the surface of the Moon, where g = 1.6 N/kg. We want W.',
        },
        {
          explanation:
            'Check the units. m is in kg and g is in N/kg, so W comes out in newtons. No conversion needed.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'W = m x g',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'W = 0.5 x 1.6',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 0.8 N',
        },
        {
          explanation:
            'State the answer. The bag weighs 0.8 N on the Moon. On Earth the same bag would weigh 0.5 x 10 = 5 N. The crisps inside (the stuff, the mass) have not changed; only the pull on them has.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gop-q1',
      type: 'multiple-choice',
      stem: 'Which equation links weight, mass and gravitational field strength?',
      tier: 'core',
      options: [
        'W = m + g',
        'W = m x g',
        'W = g / m',
        'W = m / g',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gop-mis-forgets-g-multiplication',
      hint: 'Weight is mass multiplied by the gravitational field strength at the surface.',
    },
    {
      id: 'gop-q2',
      type: 'multiple-choice',
      stem: 'A pupil moves a 5 kg bag from Earth to the Moon. What happens to the mass of the bag?',
      tier: 'core',
      options: [
        'The mass stays at 5 kg. Mass counts the stuff in the bag and does not depend on where it is.',
        'The mass drops to about 0.8 kg, since the Moon pulls less.',
        'The mass goes up because there is less gravity to hold it down.',
        'The mass becomes zero, because the Moon has no gravity.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gop-mis-mass-changes-on-other-planets',
      hint: 'Mass is the amount of stuff in an object. Only weight (the pull) changes from world to world.',
    },
    {
      id: 'gop-q3',
      type: 'numeric-entry',
      stem: 'A 12 kg suitcase sits on the surface of the Moon, where g = 1.6 N/kg. What is its weight, in newtons?',
      tier: 'core',
      correctAnswer: 19.2,
      unit: 'N',
      xpValue: 10,
      hint: 'Use W = m x g with m = 12 and g = 1.6.',
    },
    {
      id: 'gop-q4',
      type: 'multiple-choice',
      stem: 'A pupil writes that the weight of a 0.5 kg bag of crisps on Earth is "0.5 N". What is the fix?',
      tier: 'core',
      options: [
        'Leave it as is. Weight and mass have the same number on Earth.',
        'Divide by g = 10 N/kg: W = 0.5 / 10 = 0.05 N.',
        'Change the unit to kg, because weight is in kg.',
        'Multiply by g = 10 N/kg first: W = 0.5 x 10 = 5 N.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gop-mis-forgets-g-multiplication',
      hint: 'Weight in newtons is mass in kg multiplied by g in N/kg. On Earth g = 10 N/kg, not 1.',
    },
    {
      id: 'gop-q5',
      type: 'numeric-entry',
      stem: 'A 0.5 kg bag of crisps is taken to Mars, where g = 3.7 N/kg. What is its weight on Mars, in newtons?',
      tier: 'core',
      correctAnswer: 1.85,
      unit: 'N',
      xpValue: 10,
      hint: 'Use W = m x g with m = 0.5 and g = 3.7.',
    },
    {
      id: 'gop-q6',
      type: 'multiple-choice',
      stem: 'On Earth a 70 kg pupil weighs 700 N. The pupil travels to the Moon (g = 1.6 N/kg). Which sentence is correct?',
      tier: 'core',
      options: [
        'The pupil`s mass drops to 11.2 kg and the weight stays at 700 N.',
        'The pupil`s mass stays at 70 kg and the weight stays at 700 N.',
        'The pupil`s mass stays at 70 kg and the weight drops to 112 N.',
        'Both mass and weight drop to a sixth of their Earth values.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gop-mis-mass-changes-on-other-planets',
      hint: 'Mass is fixed across worlds. Only weight changes, because g changes.',
    },
    {
      id: 'gop-q7',
      type: 'numeric-entry',
      stem: 'A 70 kg adult stands on Mars, where g = 3.7 N/kg. What is their weight on Mars, in newtons?',
      tier: 'confident',
      correctAnswer: 259,
      unit: 'N',
      xpValue: 15,
      hint: 'Use W = m x g with m = 70 and g = 3.7.',
    },
    {
      id: 'gop-q8',
      type: 'numeric-entry',
      stem: 'A 12 kg suitcase is taken to Jupiter, where g = 25 N/kg. What is its weight on Jupiter, in newtons?',
      tier: 'confident',
      correctAnswer: 300,
      unit: 'N',
      xpValue: 15,
      hint: 'Use W = m x g with m = 12 and g = 25.',
    },
    {
      id: 'gop-q9',
      type: 'multiple-choice',
      stem: 'A pupil writes, "The 12 kg case must weigh 120 N everywhere, because W = m x g and g is always 10 N/kg." What is wrong with this?',
      tier: 'confident',
      options: [
        'Nothing. g really is 10 N/kg on every world.',
        'The pupil should use W = m / g instead, which gives a different answer.',
        'The pupil should use 9.81 instead of 10 to be exact, but the idea is fine.',
        'g = 10 N/kg is only for Earth`s surface. Each world has its own g, so the same case has different weights elsewhere.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gop-mis-uses-wrong-g',
      hint: 'g depends on which world (and which surface) you are on. Earth`s value is one of many.',
    },
    {
      id: 'gop-q10',
      type: 'multiple-choice',
      stem: 'Astronauts on the Moon are often called "weightless" in films. Which sentence is the most accurate physics version?',
      tier: 'confident',
      options: [
        'On the Moon astronauts have zero mass and zero weight, since there is no gravity.',
        'On the Moon there is no gravity at all, so weight is zero. Mass is also zero.',
        'On the Moon there is still gravity (g = 1.6 N/kg), so a 60 kg astronaut still has a weight of 96 N. They feel light, not weightless.',
        'On the Moon the gravity is the same as on Earth, but the astronaut`s suit cancels the weight out.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gop-mis-weightless-equals-massless',
      hint: 'The Moon has gravity, just less than Earth. "Feels light" is not the same as "zero mass".',
    },
    {
      id: 'gop-q11',
      type: 'multiple-choice',
      stem: 'A 50 kg pupil weighs 500 N on Earth. On a moon of Saturn the same pupil weighs 70 N. What is the gravitational field strength on that moon, in N/kg?',
      tier: 'challenge',
      options: [
        '1.4 N/kg',
        '70 N/kg',
        '14 N/kg',
        '0.14 N/kg',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'Rearrange W = m x g to g = W / m. Use the values from the moon, not Earth.',
    },
    {
      id: 'gop-q12',
      type: 'numeric-entry',
      stem: 'A 0.5 kg bag of crisps is taken to Jupiter, where g = 25 N/kg. What is its weight on Jupiter, in newtons?',
      tier: 'confident',
      correctAnswer: 12.5,
      unit: 'N',
      xpValue: 15,
      hint: 'Use W = m x g with m = 0.5 and g = 25.',
    },
    {
      id: 'gop-q13',
      type: 'spot-misconception',
      stem: 'Aisha says, "When the suitcase goes from Earth to the Moon, both its mass and its weight drop to a sixth."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Mass and weight always change together.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Mass stays the same on every world; only the weight drops, because g drops.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gop-mis-mass-changes-on-other-planets',
    },
    {
      id: 'gop-q14',
      type: 'spot-misconception',
      stem: 'Ben writes, "There is no gravity on the Moon. That is why astronauts float, and a 0.5 kg bag of crisps would weigh nothing there."',
      tier: 'confident',
      statements: [
        {
          text: 'Ben is right. The Moon has zero gravity, so everything on it weighs zero.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. The Moon has g = 1.6 N/kg, so a 0.5 kg bag still weighs 0.8 N. It just feels far lighter than on Earth.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gop-mis-moon-has-no-gravity',
    },
    {
      id: 'gop-q15',
      type: 'numeric-entry',
      stem: 'A space probe has a weight of 120 N on Mars, where g = 3.7 N/kg. What is its mass, in kg? Round your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 32,
      unit: 'kg',
      xpValue: 20,
      hint: 'Rearrange W = m x g to m = W / g, then use Mars`s g = 3.7.',
    },
    {
      id: 'gop-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Jupiter is the biggest planet, so its g must be the biggest of all worlds." Which sentence is the best response?',
      tier: 'challenge',
      options: [
        'Agree. Bigger size always means bigger g.',
        'Of these four worlds Jupiter does have the biggest g, but it is not "biggest size always wins": surface g depends on mass and how dense and compact the world is, not just its diameter.',
        'Disagree. Jupiter has the smallest g, because gas planets pull less.',
        'Agree. Jupiter`s g is exactly ten times Earth`s.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gop-mis-bigger-always-stronger-g',
      hint: 'For Earth, Moon, Mars, Jupiter, the biggest world here does have the biggest g. The "always wins" claim is what is wrong.',
    },
    {
      id: 'gop-q17',
      type: 'multiple-choice',
      stem: 'A 12 kg suitcase weighs 120 N on Earth. On a different world, the same suitcase weighs 30 N. What is g on that world, in N/kg?',
      tier: 'challenge',
      options: [
        '0.25 N/kg',
        '4 N/kg',
        '40 N/kg',
        '2.5 N/kg',
      ],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Use g = W / m on the new world. m is still 12 kg, W is 30 N there.',
    },
    {
      id: 'gop-q18',
      type: 'numeric-entry',
      stem: 'A small rover has a mass of 180 kg. What is its weight on Mars, where g = 3.7 N/kg? Give your answer in newtons.',
      tier: 'challenge',
      correctAnswer: 666,
      unit: 'N',
      xpValue: 20,
      hint: 'Use W = m x g with m = 180 and g = 3.7.',
    },
    {
      id: 'gop-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the weight of an object on a named world, given its mass.',
      tier: 'confident',
      items: [
        'State the answer in newtons, and note the mass has not changed from its Earth value.',
        'Write the rule: W = m x g.',
        'Look up g for the named world (Earth 10, Moon 1.6, Mars 3.7, Jupiter 25 N/kg).',
        'Substitute m (in kg) and g (in N/kg) and evaluate.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      hint: 'Look up the right g first, then write the rule, then substitute and evaluate, then state the answer.',
    },
    {
      id: 'gop-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the weight of a 0.5 kg bag of crisps on the surface of Mars.',
      tier: 'challenge',
      steps: [
        'List the two quantities: m = 0.5 kg and g = 3.7 N/kg on Mars.',
        'Check the units. m in kg and g in N/kg means W will be in newtons. No conversion needed.',
        'Write the rule: W = m x g.',
        null,
        'State the answer: W = 1.85 N on Mars. The bag is still 0.5 kg, just as on Earth.',
      ],
      missingStepIndex: 3,
      correctStep: 'Substitute and evaluate: W = 0.5 x 3.7 = 1.85 N.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on mass and weight items where many candidates stated that a body`s mass changes when it is moved to the Moon.
    {
      id: 'gop-mis-mass-changes-on-other-planets',
      description:
        'Believing that the mass of an object changes when it is moved to another world, so a 12 kg case becomes "2 kg on the Moon".',
      triggerAnswer: 'mass-changes-on-other-planets',
      correction:
        'Mass counts the stuff in an object and does not change with location. Only weight changes from world to world, because g changes.',
      reExplanation:
        'A 12 kg case is 12 kg on Earth, the Moon, Mars and Jupiter. The number of kilograms is fixed. What changes is the weight in newtons: 120 N on Earth, 19.2 N on the Moon, 44.4 N on Mars and 300 N on Jupiter. Mass is the same; only the pull (g) differs.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, where candidates equated mass in kg with weight in newtons, writing for example "weight = 0.5 N" for a 0.5 kg object on Earth.
    {
      id: 'gop-mis-forgets-g-multiplication',
      description:
        'Writing the weight equal to the mass with no multiplication by g, so a 0.5 kg bag "weighs 0.5 N" on Earth.',
      triggerAnswer: 'forgets-g-multiplication',
      correction:
        'Weight in newtons is mass in kg multiplied by g in N/kg. On Earth, multiply the mass by 10. Skipping g leaves you with a kilogram value, not a force.',
      reExplanation:
        'A 0.5 kg bag of crisps on Earth has W = 0.5 x 10 = 5 N, not 0.5 N. The 0.5 is mass in kg; the 5 is weight in newtons. On the Moon the same bag has W = 0.5 x 1.6 = 0.8 N. The g step is what turns a mass into a force.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, where candidates used g = 10 N/kg in weight calculations on the Moon, missing that g varies with location.
    {
      id: 'gop-mis-uses-wrong-g',
      description:
        'Using Earth`s g = 10 N/kg in W = m x g for a problem set on another world, so a 12 kg case "weighs 120 N on the Moon".',
      triggerAnswer: 'uses-wrong-g',
      correction:
        'Each world has its own g. Use Moon 1.6, Mars 3.7, Jupiter 25 N/kg. Only use 10 N/kg when the problem is at Earth`s surface.',
      reExplanation:
        'A 12 kg case on the Moon has W = 12 x 1.6 = 19.2 N, not 120 N. Reusing 10 N/kg gives the Earth answer, which is six times too large for the Moon. Always look up g for the named world before substituting into W = m x g.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, where candidates wrote that the Moon "has no gravity", so weight on the Moon is zero.
    {
      id: 'gop-mis-moon-has-no-gravity',
      description:
        'Claiming the Moon has no gravity at all, so any object on the Moon has zero weight and astronauts float because gravity is "switched off".',
      triggerAnswer: 'moon-has-no-gravity',
      correction:
        'The Moon has gravity. Its surface g is 1.6 N/kg, about one sixth of Earth`s. So weight on the Moon is small, not zero.',
      reExplanation:
        'A 60 kg astronaut on the Moon weighs W = 60 x 1.6 = 96 N. The astronaut feels light compared with 600 N on Earth, but is not weightless. Films often blur "feels light" with "no gravity", but the Moon`s gravity is what keeps astronauts on the surface at all.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, where candidates conflated being "weightless" with being "massless", saying a floating astronaut has zero mass.
    {
      id: 'gop-mis-weightless-equals-massless',
      description:
        'Treating "weightless" as the same idea as "massless", so an astronaut who feels weightless is said to have no mass at all.',
      triggerAnswer: 'weightless-equals-massless',
      correction:
        'Weight and mass are not the same. An astronaut may feel weightless in free-fall, but their mass (the stuff in them) is unchanged.',
      reExplanation:
        'A 60 kg astronaut still has 60 kg of mass in orbit. They feel weightless because the spacecraft and astronaut are falling around Earth together, so no contact force is needed to support them. Their mass has not gone anywhere; it is the felt weight that has dropped, not the kilograms.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, where candidates ranked planets by physical size and assumed bigger size always means bigger g, missing the role of mass and density.
    {
      id: 'gop-mis-bigger-always-stronger-g',
      description:
        'Assuming the physically biggest world always has the biggest g, so size alone sets the surface gravitational field strength.',
      triggerAnswer: 'bigger-always-stronger-g',
      correction:
        'Surface g depends on a world`s mass and how compact it is, not just its diameter. A bigger but less dense world can have a smaller g.',
      reExplanation:
        'Saturn is wider than Jupiter`s near-equal in diameter, yet its surface g is smaller than Earth`s because Saturn is much less dense. For Earth, Moon, Mars and Jupiter the ordering happens to match size, but the rule "bigger means bigger g" can fail. Mass and density set g, not diameter alone.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityOtherPlanetsZoneNodes = [gravityOtherPlanets]
