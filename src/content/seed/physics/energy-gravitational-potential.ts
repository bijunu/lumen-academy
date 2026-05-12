import type { SkillNode } from '@/types/content'

const LIFTING_PARCEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Lifting a 2 kg parcel 1.5 m onto a shelf</text>

    <!-- Floor -->
    <line x1="80" y1="340" x2="720" y2="340" />
    <text x="120" y="360" font-size="12" stroke="none" fill="currentColor">floor (reference level, h = 0)</text>

    <!-- Shelf -->
    <line x1="500" y1="160" x2="700" y2="160" />
    <rect x="500" y="160" width="200" height="8" fill="currentColor" />
    <text x="600" y="150" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">shelf at h = 1.5 m</text>

    <!-- Parcel starting on floor -->
    <rect x="140" y="300" width="60" height="40" fill="currentColor" />
    <text x="170" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2 kg parcel, start</text>

    <!-- Arrow up -->
    <line x1="280" y1="320" x2="280" y2="180" />
    <polygon points="272,190 280,170 288,190" fill="currentColor" stroke="none" />
    <text x="320" y="260" font-size="13" font-weight="700" stroke="none" fill="currentColor">lift by h = 1.5 m</text>

    <!-- Parcel on shelf -->
    <rect x="540" y="120" width="60" height="40" fill="currentColor" />
    <text x="570" y="110" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2 kg parcel, end</text>

    <!-- Sum -->
    <text x="400" y="395" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">GPE gained = m x g x h = 2 x 10 x 1.5 = 30 J</text>
  </g>
`

const SKI_LIFT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Ski lift up a Cairngorm: 60 kg skier raised 200 m</text>

    <!-- Mountain slope -->
    <line x1="80" y1="320" x2="700" y2="120" />
    <line x1="80" y1="340" x2="700" y2="340" />

    <!-- Bottom skier -->
    <circle cx="140" cy="295" r="10" fill="currentColor" />
    <line x1="140" y1="305" x2="140" y2="330" />
    <line x1="140" y1="330" x2="120" y2="340" />
    <line x1="140" y1="330" x2="160" y2="340" />
    <text x="140" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">bottom, h = 0 m</text>

    <!-- Top skier -->
    <circle cx="640" cy="135" r="10" fill="currentColor" />
    <line x1="640" y1="145" x2="640" y2="170" />
    <line x1="640" y1="170" x2="620" y2="180" />
    <line x1="640" y1="170" x2="660" y2="180" />
    <text x="640" y="110" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">top, h = 200 m</text>

    <!-- Height arrow -->
    <line x1="730" y1="135" x2="730" y2="340" />
    <polygon points="722,145 730,125 738,145" fill="currentColor" stroke="none" />
    <polygon points="722,330 730,350 738,330" fill="currentColor" stroke="none" />
    <text x="755" y="240" font-size="13" font-weight="700" stroke="none" fill="currentColor">h = 200 m</text>

    <text x="400" y="395" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">GPE gained = m x g x h = 60 x 10 x 200 = 120 000 J</text>
  </g>
`

const COMPARISON_PANEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">What happens when m or h is doubled?</text>

    <!-- Left: double height -->
    <rect x="60" y="70" width="320" height="280" />
    <text x="220" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Same mass, double the height</text>
    <text x="220" y="130" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A: 1 kg lifted 1 m</text>
    <text x="220" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">GPE = 1 x 10 x 1 = 10 J</text>
    <text x="220" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">B: 1 kg lifted 2 m</text>
    <text x="220" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">GPE = 1 x 10 x 2 = 20 J</text>
    <text x="220" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Double h, double the GPE.</text>
    <text x="220" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE is directly proportional to h.</text>

    <!-- Right: double mass -->
    <rect x="420" y="70" width="320" height="280" />
    <text x="580" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Same height, double the mass</text>
    <text x="580" y="130" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">C: 1 kg lifted 1 m</text>
    <text x="580" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">GPE = 1 x 10 x 1 = 10 J</text>
    <text x="580" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">D: 2 kg lifted 1 m</text>
    <text x="580" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">GPE = 2 x 10 x 1 = 20 J</text>
    <text x="580" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Double m, double the GPE.</text>
    <text x="580" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">GPE is directly proportional to m.</text>

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">GPE = m x g x h. On Earth g = 10 N/kg, so each kilogram lifted by 1 m adds 10 J.</text>
  </g>
`

export const energyGravitationalPotential: SkillNode = {
  id: 'physics-energy-gravitational-potential',
  title: 'Gravitational Potential Energy',
  description:
    'Gravitational potential energy (GPE) is the energy in a system because a mass has been raised through a height in a gravitational field. On Earth, a mass m raised by a height h gains GPE = m x g x h, with g = 10 N/kg, m in kilograms, h in metres and GPE in joules. Double the mass and the GPE doubles; double the height and the GPE doubles. We always measure h from a chosen reference level, such as the floor of the room or the bottom of a slope. Use this rule to work out the energy stored when a parcel is lifted onto a shelf in a Glasgow kitchen, when a Cairngorm ski lift raises a skier, or when a Yorkshire mountain biker climbs a hill on Pen-y-Ghent.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-stores', 'physics-gravity-weight-calculation'],
  curriculum: {
    ks3Objective:
      'Energy by which a system is raised through a height; GPE depends on mass, height and gravitational field strength; GPE = m g h on Earth with g = 10 N/kg.',
    awardingBodies: {
      aqa: '4.1.1.2 Gravitational potential energy E_p = m g h (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.12 Gravitational potential energy GPE = mass x g x height (GCSE Physics 1PH0)',
      ocr: 'P1.1 Gravitational potential energy store; calculation using m g h (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pegp-scene-parcel-lift',
      title: 'A 2 kg Parcel onto a Glasgow Shelf',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the energy as a 2 kg parcel is lifted 1.5 m from the floor onto a shelf.',
      data: {
        viewBox: '0 0 800 400',
        svg: LIFTING_PARCEL_SVG,
        hotspots: [
          {
            id: 'pegp-parcel-start',
            x: 22,
            y: 80,
            label: 'Reference level: floor, h = 0 m',
            description:
              'We pick the floor as the reference level. While the parcel sits on the floor we say its GPE is 0 J, not because it has none in some absolute sense, but because we are measuring change in height from the floor.',
          },
          {
            id: 'pegp-parcel-lift',
            x: 35,
            y: 50,
            label: 'Lift through h = 1.5 m',
            description:
              'The hand does work against gravity to raise the parcel by 1.5 m. Energy is transferred from the chemical store of the body to the gravitational store of the parcel-plus-Earth system.',
          },
          {
            id: 'pegp-parcel-end',
            x: 72,
            y: 35,
            label: 'On the shelf, h = 1.5 m',
            description:
              'On the shelf the parcel has gained gravitational potential energy. m = 2 kg, g = 10 N/kg, h = 1.5 m, so GPE = 2 x 10 x 1.5 = 30 J above the floor.',
          },
          {
            id: 'pegp-parcel-rule',
            x: 50,
            y: 95,
            label: 'The rule: GPE = m x g x h',
            description:
              'Mass in kilograms, gravitational field strength in newtons per kilogram, height above the chosen reference level in metres. Multiply the three together to get the energy in joules.',
          },
        ],
      },
    },
    {
      id: 'pegp-scene-ski-lift',
      title: 'A Cairngorm Ski Lift',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a 60 kg skier raised 200 m up a Cairngorm slope on a ski lift.',
      data: {
        viewBox: '0 0 800 400',
        svg: SKI_LIFT_SVG,
        hotspots: [
          {
            id: 'pegp-ski-bottom',
            x: 17,
            y: 80,
            label: 'Bottom of the lift, h = 0 m',
            description:
              'We choose the bottom of the lift as the reference level. The skier has a mass of 60 kg and starts at h = 0 m, so the GPE gained so far is 0 J.',
          },
          {
            id: 'pegp-ski-top',
            x: 80,
            y: 30,
            label: 'Top of the lift, h = 200 m',
            description:
              'The lift raises the skier 200 m vertically above the bottom. The height h that goes into the formula is the vertical rise, not the length of the cable along the slope.',
          },
          {
            id: 'pegp-ski-sum',
            x: 50,
            y: 95,
            label: 'GPE gained = 120 000 J',
            description:
              'GPE = m x g x h = 60 x 10 x 200 = 120 000 J. The lift motor transfers this energy from the mains (electrical pathway) to the gravitational store of the skier-and-Earth system.',
          },
        ],
      },
    },
    {
      id: 'pegp-scene-comparison',
      title: 'Doubling m or h',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to see how the gravitational potential energy changes when you double the mass or double the height.',
      data: {
        viewBox: '0 0 800 400',
        svg: COMPARISON_PANEL_SVG,
        hotspots: [
          {
            id: 'pegp-compare-height',
            x: 28,
            y: 35,
            label: 'Double h, double the GPE',
            description:
              'Lift 1 kg by 1 m and the GPE is 10 J. Lift the same 1 kg by 2 m and the GPE is 20 J. Doubling the height doubles the GPE, because h appears once in the rule m x g x h.',
          },
          {
            id: 'pegp-compare-mass',
            x: 72,
            y: 35,
            label: 'Double m, double the GPE',
            description:
              'Lift 1 kg by 1 m and the GPE is 10 J. Lift 2 kg by the same 1 m and the GPE is 20 J. Doubling the mass doubles the GPE, because m appears once in the rule m x g x h.',
          },
          {
            id: 'pegp-compare-both',
            x: 50,
            y: 92,
            label: 'Both matter',
            description:
              'GPE depends on mass and on height. A heavy book on the floor and a light book on a high shelf can store very different amounts of energy. You need to know both m and h to work out GPE.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pegp-worked-1',
      title: 'Raise a 2 kg book 1.5 m onto a shelf',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A 2 kg book is lifted from the floor to a shelf 1.5 m above the floor. So m = 2 kg, h = 1.5 m, and on Earth g = 10 N/kg.',
        },
        {
          explanation:
            'Check the units. m is in kilograms, g is in newtons per kilogram, h is in metres. So the answer will come out in joules. No unit conversions needed.',
        },
        {
          explanation:
            'Write the rule for gravitational potential energy.',
          maths: 'GPE = m x g x h',
        },
        {
          explanation: 'Substitute the three numbers in the right order.',
          maths: 'GPE = 2 x 10 x 1.5',
        },
        {
          explanation: 'Evaluate the product.',
          maths: 'GPE = 30 J',
        },
        {
          explanation:
            'State the answer. The book has gained 30 J of gravitational potential energy above the floor. That energy was transferred from the chemical store of the person lifting it.',
        },
      ],
    },
    {
      id: 'pegp-worked-2',
      title: 'A 60 kg skier: raised 200 m vs raised 400 m',
      steps: [
        {
          explanation:
            'Set up the first case. A 60 kg skier is raised 200 m up a Cairngorm slope by a lift. So m = 60 kg, h = 200 m, g = 10 N/kg.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'GPE = m x g x h',
        },
        {
          explanation: 'Substitute for the 200 m lift.',
          maths: 'GPE = 60 x 10 x 200 = 120 000 J',
        },
        {
          explanation:
            'Now set up the second case. Same skier (m = 60 kg) but raised twice as high (h = 400 m). g is unchanged at 10 N/kg.',
        },
        {
          explanation: 'Substitute for the 400 m lift.',
          maths: 'GPE = 60 x 10 x 400 = 240 000 J',
        },
        {
          explanation:
            'Compare. Doubling the height from 200 m to 400 m doubled the GPE from 120 000 J to 240 000 J. That is what we expect, because h appears once in the rule m x g x h.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pegp-q1',
      type: 'multiple-choice',
      stem: 'Which formula gives the gravitational potential energy stored when a mass m is raised by a height h on Earth, with g = 10 N/kg?',
      tier: 'core',
      options: [
        'GPE = m x g x h.',
        'GPE = m + g + h.',
        'GPE = m / (g x h).',
        'GPE = g x h / m.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Multiply the mass, the gravitational field strength and the height together.',
    },
    {
      id: 'pegp-q2',
      type: 'multiple-choice',
      stem: 'What unit do we use for gravitational potential energy when m is in kilograms, g is in N/kg and h is in metres?',
      tier: 'core',
      options: [
        'Newtons (N).',
        'Joules (J).',
        'Metres (m).',
        'Kilograms (kg).',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'All forms of energy are measured in joules.',
    },
    {
      id: 'pegp-q3',
      type: 'numeric-entry',
      stem: 'A pupil lifts a 2 kg book 1.5 m from the floor onto a shelf in a Glasgow kitchen. Take g = 10 N/kg. What is the gravitational potential energy gained by the book, in joules?',
      tier: 'core',
      correctAnswer: 30,
      unit: 'J',
      xpValue: 10,
      hint: 'GPE = m x g x h with m = 2, g = 10 and h = 1.5.',
    },
    {
      id: 'pegp-q4',
      type: 'numeric-entry',
      stem: 'A 1 kg kettle is lifted 1 m onto a kitchen worktop. Take g = 10 N/kg. How much gravitational potential energy has been gained, in joules?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'J',
      xpValue: 10,
      hint: 'GPE = 1 x 10 x 1.',
    },
    {
      id: 'pegp-q5',
      type: 'multiple-choice',
      stem: 'Two pupils argue about gravitational potential energy. Aysha says "GPE depends only on how high something is." Ben says "It depends on the mass and the height." Who is right?',
      tier: 'core',
      options: [
        'Aysha, because higher always means more GPE.',
        'Ben, because GPE = m x g x h includes both m and h.',
        'Both, because mass does not actually matter.',
        'Neither, because GPE depends only on g.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pegp-mis-only-height',
      hint: 'Look at the rule. Both m and h appear in m x g x h.',
    },
    {
      id: 'pegp-q6',
      type: 'multiple-choice',
      stem: 'A 1 kg ball is raised by 2 m. A 2 kg ball is raised by 1 m. Both happen on Earth where g = 10 N/kg. Which sentence is correct?',
      tier: 'core',
      options: [
        'The 1 kg ball at 2 m stores more, because it is higher.',
        'The 2 kg ball at 1 m stores more, because it is heavier.',
        'They store the same GPE, 20 J, because m x g x h gives 1 x 10 x 2 = 20 J and 2 x 10 x 1 = 20 J.',
        'Neither stores any GPE, because the masses are different.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pegp-mis-only-height',
      hint: 'Work out m x g x h for each and compare.',
    },
    {
      id: 'pegp-q7',
      type: 'numeric-entry',
      stem: 'A ski lift in the Cairngorms raises a 60 kg skier 200 m up the slope. Take g = 10 N/kg. What is the gravitational potential energy gained by the skier, in joules?',
      tier: 'confident',
      correctAnswer: 120000,
      unit: 'J',
      xpValue: 15,
      hint: 'GPE = m x g x h = 60 x 10 x 200.',
    },
    {
      id: 'pegp-q8',
      type: 'numeric-entry',
      stem: 'A 50 kg Yorkshire mountain biker pushes their bike up 80 m of vertical height on Pen-y-Ghent. Take g = 10 N/kg. What is the gravitational potential energy gained by the biker, in joules? (Ignore the mass of the bike.)',
      tier: 'confident',
      correctAnswer: 40000,
      unit: 'J',
      xpValue: 15,
      hint: 'GPE = 50 x 10 x 80.',
    },
    {
      id: 'pegp-q9',
      type: 'numeric-entry',
      stem: 'A London Underground lift raises a 70 kg passenger 25 m from the platform to street level. Take g = 10 N/kg. How much gravitational potential energy has the passenger gained, in joules?',
      tier: 'confident',
      correctAnswer: 17500,
      unit: 'J',
      xpValue: 15,
      hint: 'GPE = 70 x 10 x 25.',
    },
    {
      id: 'pegp-q10',
      type: 'numeric-entry',
      stem: 'A 0.5 kg apple is on a shelf 2 m above the floor of a Cumbrian kitchen. Take g = 10 N/kg. What is the gravitational potential energy of the apple relative to the floor, in joules?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'J',
      xpValue: 10,
      hint: 'GPE = 0.5 x 10 x 2.',
    },
    {
      id: 'pegp-q11',
      type: 'multiple-choice',
      stem: 'A 60 kg skier is raised 200 m up a slope and gains 120 000 J of GPE. The same skier is then raised 400 m up a different slope. With g = 10 N/kg, how much GPE has the skier gained on the second slope?',
      tier: 'confident',
      options: [
        '60 000 J, because height halves the energy.',
        '120 000 J, because mass is unchanged.',
        '240 000 J, because doubling h doubles the GPE.',
        '480 000 J, because height squares the GPE.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pegp-mis-only-height',
      hint: 'h appears once in m x g x h. Doubling h doubles GPE.',
    },
    {
      id: 'pegp-q12',
      type: 'multiple-choice',
      stem: 'A pupil claims, "g changes a bit each day depending on the weather, so GPE will change with the weather too." Which sentence is the best reply?',
      tier: 'confident',
      options: [
        'g changes with the weather, so the pupil is right.',
        'g is the same value on Earth (about 10 N/kg) for everyday school problems. The weather does not change g, so GPE for a given m and h does not change with the weather.',
        'g changes, but only inside thunderstorms.',
        'g changes whenever it rains.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pegp-mis-g-weather',
      hint: 'g is set by the Earth, not the air.',
    },
    {
      id: 'pegp-q13',
      type: 'multiple-choice',
      stem: 'A 4 kg box sits on the floor. A second 4 kg box sits on a shelf 1 m above the same floor. Using the floor as the reference level and g = 10 N/kg, what is the GPE of each box?',
      tier: 'confident',
      options: [
        'Both boxes have GPE = 40 J.',
        'Floor box: 0 J. Shelf box: 40 J.',
        'Floor box: 40 J. Shelf box: 0 J.',
        'Both boxes have GPE = 0 J.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pegp-mis-no-reference',
      hint: 'Measure h from the chosen reference level. h = 0 m means GPE = 0 J.',
    },
    {
      id: 'pegp-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "I carried a 5 kg case 10 m along a flat Glasgow pavement, with g = 10 N/kg. So the GPE gained is 5 x 10 x 10 = 500 J."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Any 10 m of movement gives 500 J of GPE.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. h in GPE = m x g x h is the change in vertical height. Walking 10 m along a flat pavement gives h = 0 m, so the GPE gained is 0 J.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pegp-mis-sideways-counts',
    },
    {
      id: 'pegp-q15',
      type: 'multiple-choice',
      stem: 'A Scafell Pike climber writes "GPE = 70 x 9.8 x 200" using g = 9.8 N/kg. The class is told to use g = 10 N/kg. What should they fix?',
      tier: 'confident',
      options: [
        'Replace 9.8 with 1, because g must be 1.',
        'Replace 9.8 with 100, because g is really 100 N/kg.',
        'Leave it. 9.8 and 10 give the same answer.',
        'Replace 9.8 with 10, so GPE = 70 x 10 x 200 = 140 000 J. For this course we use g = 10 N/kg on Earth.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pegp-mis-g-value',
      hint: 'For this course, g on Earth is taken to be 10 N/kg.',
    },
    {
      id: 'pegp-q16',
      type: 'numeric-entry',
      stem: 'A York Minster visitor (mass 65 kg) climbs the steps and rises 60 m vertically above the cathedral floor. Take g = 10 N/kg. What is the gravitational potential energy gained, in joules?',
      tier: 'challenge',
      correctAnswer: 39000,
      unit: 'J',
      xpValue: 20,
      hint: 'GPE = 65 x 10 x 60.',
    },
    {
      id: 'pegp-q17',
      type: 'spot-misconception',
      stem: 'Marcus says, "A 10 kg crate at the top of a tall warehouse always has 5000 J of GPE, no matter where we measure from."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. GPE is fixed by the object alone, with no reference level needed.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. GPE is measured relative to a chosen reference level (like the floor or the ground). Without saying where h = 0 is, the number 5000 J has no clear meaning.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pegp-mis-no-reference',
    },
    {
      id: 'pegp-q18',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the GPE gained when a mass is raised through a height on Earth.',
      tier: 'challenge',
      items: [
        'Substitute m, g and h into GPE = m x g x h, evaluate, and state the answer in joules.',
        'Pick out the mass m (kg) and the change in vertical height h (m) from the question.',
        'Choose a reference level (such as the floor or the ground) so that h has a clear meaning.',
        'Write the rule: GPE = m x g x h, with g = 10 N/kg on Earth.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Reference level first, then pick out m and h, then the rule, then the arithmetic.',
    },
    {
      id: 'pegp-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the GPE gained when a 4 kg shopping bag is lifted 1.2 m from the floor of a Manchester flat onto a worktop, with g = 10 N/kg.',
      tier: 'challenge',
      steps: [
        'Choose the floor as the reference level, so h = 0 m at the floor and h = 1.2 m at the worktop.',
        'List the quantities: m = 4 kg, g = 10 N/kg, h = 1.2 m.',
        'Write the rule: GPE = m x g x h.',
        null,
        'Evaluate: GPE = 48 J.',
        'State the answer: the bag has gained 48 J of gravitational potential energy above the floor.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the three numbers into the rule: GPE = 4 x 10 x 1.2.',
      xpValue: 20,
    },
    {
      id: 'pegp-q20',
      type: 'multiple-choice',
      stem: 'A 50 kg cyclist climbs a Yorkshire hill, gaining 40 m of vertical height. With g = 10 N/kg, the GPE gained is 20 000 J. If a 100 kg cyclist climbs the same hill, what is the GPE gained?',
      tier: 'challenge',
      options: [
        '10 000 J, because heavier means less GPE.',
        '20 000 J, because the hill is the same.',
        '40 000 J, because doubling m doubles the GPE.',
        '80 000 J, because doubling m squares the GPE.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pegp-mis-only-mass',
      hint: 'm appears once in m x g x h. Doubling m doubles GPE.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on GPE questions; candidates wrote that GPE depends only on height and ignored the mass term in m g h.
    {
      id: 'pegp-mis-only-height',
      description:
        'Believing that gravitational potential energy depends only on the height, forgetting that mass also appears in GPE = m x g x h.',
      triggerAnswer: 'only-height',
      correction:
        'GPE depends on both mass and height. The rule GPE = m x g x h has m and h each appearing once, so doubling either one doubles the GPE.',
      reExplanation:
        'Lift 1 kg by 2 m and GPE = 1 x 10 x 2 = 20 J. Lift 2 kg by 1 m and GPE = 2 x 10 x 1 = 20 J. The same energy, from two different routes. You always need both m and h. If a problem hides one of them, find it before using the rule.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, where candidates compared GPE of two objects by mass alone and ignored their different heights.
    {
      id: 'pegp-mis-only-mass',
      description:
        'Believing that gravitational potential energy depends only on the mass, forgetting that height also appears in GPE = m x g x h.',
      triggerAnswer: 'only-mass',
      correction:
        'GPE depends on both mass and height. A light object on a high shelf can store more GPE than a heavier object on a low shelf.',
      reExplanation:
        'A 0.5 kg apple raised 2 m has GPE = 0.5 x 10 x 2 = 10 J. A 5 kg crate raised 0.1 m has GPE = 5 x 10 x 0.1 = 5 J. The lighter apple stores twice as much, because it has been raised much higher. Heavier does not automatically mean more GPE; you must check h too.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, where candidates suggested g varies with weather or air pressure, leading to spurious "corrections" of GPE answers.
    {
      id: 'pegp-mis-g-weather',
      description:
        'Believing that the gravitational field strength g changes day to day with the weather, and therefore GPE changes with the weather for the same m and h.',
      triggerAnswer: 'g-weather',
      correction:
        'g is set by the mass and radius of the Earth, not by the weather. For school problems we use g = 10 N/kg everywhere on the surface of the Earth.',
      reExplanation:
        'Rain, wind and air pressure do not pull objects extra hard. g comes from the Earth itself. For any school GPE calculation on Earth, take g = 10 N/kg as a fixed number. The number only changes if you leave Earth, for example on the Moon where g is closer to 1.6 N/kg.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, where candidates quoted a single GPE value without naming a reference level, leaving answers ambiguous about where h = 0 was.
    {
      id: 'pegp-mis-no-reference',
      description:
        'Quoting a GPE value with no reference level, missing that h must be measured from a chosen zero (such as the floor or the ground).',
      triggerAnswer: 'no-reference',
      correction:
        'Always pick a reference level (floor, ground, table). h is the vertical height above that level. GPE values only have a clear meaning relative to that reference.',
      reExplanation:
        'The same 4 kg box gives GPE = 40 J relative to a floor 1 m below, but GPE = 80 J relative to a floor 2 m below. The box has not changed; the reference has. In a school answer, name the reference before quoting a number, for example "relative to the floor of the lab".',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, on GPE questions where candidates included horizontal distance in h, leading to GPE values for purely sideways motion.
    {
      id: 'pegp-mis-sideways-counts',
      description:
        'Using a horizontal distance as h in GPE = m x g x h, giving a non-zero GPE for purely sideways motion along a flat floor.',
      triggerAnswer: 'sideways-counts',
      correction:
        'h is the change in vertical height only. Moving sideways along a flat floor does not change h, so the GPE gained is 0 J.',
      reExplanation:
        'Carrying a 5 kg case along a flat Glasgow pavement does not lift it. The vertical change is 0 m, so m x g x h = 5 x 10 x 0 = 0 J. If the pavement slopes upwards, find the vertical rise (not the slope length) and use that as h. The slope length only matters if you are working out work done against friction, not GPE.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, where candidates mixed g = 9.8 and g = 10 inconsistently, sometimes within the same calculation, costing marks for unit-and-value consistency.
    {
      id: 'pegp-mis-g-value',
      description:
        'Mixing g = 9.8 N/kg and g = 10 N/kg in the same calculation, or using 9.8 when the course specifies 10, leading to inconsistent GPE values.',
      triggerAnswer: 'g-value',
      correction:
        'For this course, take g = 10 N/kg on Earth and stick with it for the whole calculation. Do not switch values part-way through.',
      reExplanation:
        'Using g = 10 N/kg gives a 70 kg climber raised 200 m on Scafell Pike a GPE gain of 70 x 10 x 200 = 140 000 J. Using g = 9.8 N/kg gives 137 200 J. Both are close, but in school answers we are told which value to use; pick it once and use it throughout to keep the answer consistent and the working clean.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyGravitationalPotentialZoneNodes = [energyGravitationalPotential]
