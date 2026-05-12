import type { SkillNode } from '@/types/content'

const KETTLE_SANKEY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Worcester electric kettle: 1000 J in, 850 J useful, 150 J wasted</text>

    <!-- Input arrow (electrical, full height) -->
    <polygon points="80,140 80,260 360,260 360,140" fill="currentColor" opacity="0.25" stroke="none" />
    <text x="220" y="135" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Total input: 1000 J electrical</text>

    <!-- Useful branch (thermal in water, thicker) -->
    <polygon points="360,140 360,260 660,290 660,150" fill="currentColor" opacity="0.45" stroke="none" />
    <text x="510" y="135" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Useful output: 850 J thermal (water)</text>

    <!-- Wasted branch (thermal to surroundings, thinner, peels off) -->
    <polygon points="360,260 360,290 660,330 660,305" fill="currentColor" opacity="0.2" stroke="none" />
    <text x="510" y="355" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Wasted: 150 J thermal to surroundings + sound</text>

    <!-- Labels -->
    <text x="400" y="395" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Efficiency = useful out / total in x 100% = 850 / 1000 x 100% = 85%</text>
  </g>
`

const BULBS_COMPARE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two bulbs in a Bristol kitchen: same 100 J of electrical input</text>

    <!-- Left panel: LED -->
    <rect x="60" y="80" width="320" height="260" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">LED lamp</text>
    <circle cx="220" cy="160" r="22" />
    <text x="220" y="167" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">LED</text>
    <text x="220" y="210" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Input: 100 J electrical</text>
    <text x="220" y="230" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Useful: 90 J light</text>
    <text x="220" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Wasted: 10 J thermal</text>
    <text x="220" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Efficiency = 90 / 100 x 100%</text>
    <text x="220" y="310" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">= 90%</text>

    <!-- Right panel: filament -->
    <rect x="420" y="80" width="320" height="260" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Filament (incandescent)</text>
    <circle cx="580" cy="160" r="22" />
    <text x="580" y="167" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">filament</text>
    <text x="580" y="210" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Input: 100 J electrical</text>
    <text x="580" y="230" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Useful: 5 J light</text>
    <text x="580" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Wasted: 95 J thermal</text>
    <text x="580" y="285" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Efficiency = 5 / 100 x 100%</text>
    <text x="580" y="310" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">= 5%</text>

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same total input. The LED gives much more useful light per joule, so its efficiency is much higher.</text>
  </g>
`

const FORMULA_STEPS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">How to turn energy values into a percentage efficiency</text>

    <!-- Step boxes -->
    <rect x="60" y="80" width="680" height="60" />
    <text x="400" y="105" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Step 1. Pick out the useful output and the total input, both in joules.</text>
    <text x="400" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Example: useful = 720 J of thermal in the pan; total = 1200 J of chemical in the gas.</text>

    <rect x="60" y="160" width="680" height="60" />
    <text x="400" y="185" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Step 2. Divide useful by total.</text>
    <text x="400" y="205" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">720 / 1200 = 0.6. The joules cancel, so the answer has no unit.</text>

    <rect x="60" y="240" width="680" height="60" />
    <text x="400" y="265" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Step 3. Multiply by 100 to turn the decimal into a percentage.</text>
    <text x="400" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.6 x 100 = 60. Write the % sign.</text>

    <rect x="60" y="320" width="680" height="60" />
    <text x="400" y="345" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Step 4. State the answer with units.</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Efficiency = 60%. By conservation, useful must be at most total, so efficiency is at most 100%.</text>
  </g>
`

export const energyEfficiencyPercentage: SkillNode = {
  id: 'physics-energy-efficiency-percentage',
  title: 'Efficiency as a Percentage',
  description:
    'Efficiency compares how much of the energy you pay for as input ends up as useful output at the end of a transfer. The rule is efficiency = useful energy out / total energy in x 100%. Both energies are measured in joules, so the units cancel and efficiency is just a number, usually written as a percentage. By conservation of energy the useful output can never be more than the total input, so efficiency is at most 100%. Practise reading energy values off a Sankey-style diagram for a Worcester kettle or a Bristol LED lamp, then plugging them into the formula to grade how well each device does its job.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'challenge',
  prerequisites: ['physics-energy-efficiency', 'physics-energy-sankey-diagrams'],
  curriculum: {
    ks3Objective:
      'Useful energy stored at the end of a transfer; efficiency expressed as a percentage of useful out compared with total in; calculating efficiency from energy values in joules.',
    awardingBodies: {
      aqa: '4.1.2.2 Efficiency = useful output energy transfer / total input energy transfer (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.13 Efficiency = useful energy out / total energy in, expressed as a percentage (GCSE Physics 1PH0)',
      ocr: 'P1.2 Efficiency calculations; useful energy out divided by total energy in (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'peep-scene-kettle-sankey',
      title: 'Worcester Kettle: a Sankey Snapshot',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the Sankey-style diagram to see where the 1000 J of electrical input ends up.',
      data: {
        viewBox: '0 0 800 400',
        svg: KETTLE_SANKEY_SVG,
        hotspots: [
          {
            id: 'peep-kettle-input',
            x: 28,
            y: 50,
            label: 'Total input: 1000 J electrical',
            description:
              'A Worcester electric kettle is plugged in for one boil. The mains supplies 1000 J of electrical energy in this snapshot. That number is the total energy in, the full thickness of the input arrow.',
          },
          {
            id: 'peep-kettle-useful',
            x: 70,
            y: 38,
            label: 'Useful output: 850 J thermal in the water',
            description:
              'Most of that electrical energy ends up as thermal energy in the water, which is the job the kettle is bought to do. So the useful output is 850 J. This is the thicker branch of the Sankey arrow.',
          },
          {
            id: 'peep-kettle-wasted',
            x: 70,
            y: 78,
            label: 'Wasted: 150 J to surroundings and sound',
            description:
              'The thin branch peels off and shows 150 J wasted as thermal energy heating the kettle body, the bench and the air, plus a little sound. Notice 850 + 150 = 1000, conservation of energy.',
          },
          {
            id: 'peep-kettle-calc',
            x: 50,
            y: 96,
            label: 'Efficiency = useful / total x 100% = 85%',
            description:
              'Divide useful by total: 850 / 1000 = 0.85. Multiply by 100 to make it a percentage: 85%. So this kettle is 85% efficient. Of every 100 J paid for, 85 J ends up doing the useful job.',
          },
        ],
      },
    },
    {
      id: 'peep-scene-bulbs-compare',
      title: 'LED vs Filament in a Bristol Kitchen',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to compare an LED lamp with an old filament bulb fed the same 100 J of electrical energy.',
      data: {
        viewBox: '0 0 800 400',
        svg: BULBS_COMPARE_SVG,
        hotspots: [
          {
            id: 'peep-bulb-led',
            x: 28,
            y: 45,
            label: 'LED: 90 J useful, 10 J wasted, 90% efficient',
            description:
              'A modern LED in a Bristol kitchen gets 100 J of electrical energy. About 90 J leaves as useful light; the other 10 J warms the bulb slightly. Efficiency = 90 / 100 x 100% = 90%.',
          },
          {
            id: 'peep-bulb-filament',
            x: 72,
            y: 45,
            label: 'Filament: 5 J useful, 95 J wasted, 5% efficient',
            description:
              'An old incandescent bulb gets the same 100 J of electrical input. Only about 5 J leaves as useful light; 95 J warms the surroundings. Efficiency = 5 / 100 x 100% = 5%. The bulb is mostly a poor heater.',
          },
          {
            id: 'peep-bulb-bill',
            x: 50,
            y: 96,
            label: 'Why the LED saves money',
            description:
              'Both bulbs are paid for in joules at the same rate, but the LED turns 90 of every 100 J into light, while the filament turns only 5 of every 100 J into light. Higher efficiency means more useful job per joule paid.',
          },
        ],
      },
    },
    {
      id: 'peep-scene-formula-steps',
      title: 'Four Steps from Joules to a Percentage',
      type: 'labelled-diagram',
      instructions:
        'Click each step of the worked diagram to see how energy values in joules turn into a percentage efficiency.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORMULA_STEPS_SVG,
        hotspots: [
          {
            id: 'peep-step-pick',
            x: 50,
            y: 28,
            label: 'Step 1: pick out useful and total, both in joules',
            description:
              'Read the question for two numbers: how much useful energy ends up doing the job, and how much total energy was put in. Both must be in joules so the units match.',
          },
          {
            id: 'peep-step-divide',
            x: 50,
            y: 48,
            label: 'Step 2: divide useful by total',
            description:
              'Write efficiency = useful / total. Doing 720 J / 1200 J gives 0.6. The joules on top and bottom cancel, so the answer is a plain number with no unit.',
          },
          {
            id: 'peep-step-percent',
            x: 50,
            y: 68,
            label: 'Step 3: multiply by 100',
            description:
              'Multiply the decimal by 100 to turn it into a percentage. 0.6 x 100 = 60. Remember the % sign, it is the marker that the answer is "per hundred".',
          },
          {
            id: 'peep-step-state',
            x: 50,
            y: 90,
            label: 'Step 4: state the answer and sanity-check',
            description:
              'Write "Efficiency = 60%". Sanity-check: useful must be at most total, so efficiency must be at most 100%. If you get more than 100%, you have divided the wrong way round.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'peep-worked-1',
      title: 'A Manchester gas hob: 1200 J in, 720 J useful',
      steps: [
        {
          explanation:
            'Pick out useful and total. A Manchester gas hob transfers 1200 J of chemical energy from the gas during one boil. Of that, 720 J ends up as useful thermal energy in the pan; the rest is wasted to the air and the hob body. So useful = 720 J and total = 1200 J.',
        },
        {
          explanation:
            'Check the units. Both numbers are in joules, so the units will cancel when we divide. No conversion is needed.',
        },
        {
          explanation: 'Write the rule for efficiency as a percentage.',
          maths: 'efficiency = useful out / total in x 100%',
        },
        {
          explanation: 'Substitute the two numbers.',
          maths: 'efficiency = 720 / 1200 x 100%',
        },
        {
          explanation: 'Do the division first, then multiply by 100.',
          maths: '720 / 1200 = 0.6; 0.6 x 100 = 60',
        },
        {
          explanation:
            'State the answer. The hob is 60% efficient. Sanity-check: 60% is less than 100%, which fits because useful (720 J) is less than total (1200 J). The other 40%, or 480 J, was wasted as thermal energy warming the kitchen.',
        },
      ],
    },
    {
      id: 'peep-worked-2',
      title: 'A Birmingham filament bulb: 100 J in, 8 J of light',
      steps: [
        {
          explanation:
            'Pick out useful and total. A Birmingham filament bulb is fed 100 J of electrical energy in a short burst. Only 8 J leaves the bulb as useful light, with the rest heating the surroundings. So useful = 8 J and total = 100 J.',
        },
        {
          explanation:
            'Check the units. Both energies are in joules, so the units will cancel and efficiency will come out as a plain number.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'efficiency = useful out / total in x 100%',
        },
        {
          explanation: 'Substitute the two numbers.',
          maths: 'efficiency = 8 / 100 x 100%',
        },
        {
          explanation: 'Evaluate.',
          maths: '8 / 100 = 0.08; 0.08 x 100 = 8',
        },
        {
          explanation:
            'State the answer. The bulb is 8% efficient. That is why a filament bulb feels hot to touch: 92 of every 100 J paid for is wasted as thermal energy. An LED in the same socket would be far higher, often 80% or more.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'peep-q1',
      type: 'multiple-choice',
      stem: 'Which formula gives the efficiency of an energy transfer as a percentage?',
      tier: 'core',
      options: [
        'efficiency = useful energy out / total energy in x 100%',
        'efficiency = total energy in / useful energy out x 100%',
        'efficiency = wasted energy / total energy in x 100%',
        'efficiency = useful energy out x total energy in',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'peep-mis-divide-wrong-way',
      hint: 'Useful sits on top, total sits on the bottom. Then multiply by 100 to turn the decimal into a percentage.',
    },
    {
      id: 'peep-q2',
      type: 'multiple-choice',
      stem: 'A Worcester electric kettle is fed 1000 J of electrical energy and gives out 850 J of useful thermal energy in the water. Which sentence is correct?',
      tier: 'core',
      options: [
        'The 850 J is the total input.',
        'The 850 J is the useful output and the 1000 J is the total input.',
        'The 850 J is wasted energy.',
        'The 150 J difference is the useful output.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The total in is the energy paid for at the plug. The useful out is the energy doing the job, here heating the water.',
    },
    {
      id: 'peep-q3',
      type: 'numeric-entry',
      stem: 'A Worcester kettle is fed 1000 J of electrical energy and 850 J ends up as useful thermal energy in the water. What is its efficiency, as a percentage? Give a whole number.',
      tier: 'core',
      correctAnswer: 85,
      unit: '%',
      xpValue: 10,
      hint: 'efficiency = useful / total x 100% = 850 / 1000 x 100%.',
    },
    {
      id: 'peep-q4',
      type: 'numeric-entry',
      stem: 'A Manchester gas hob transfers 1200 J of chemical energy from the gas. Of that, 720 J ends up as useful thermal energy in the pan. What is the efficiency of the hob, as a percentage? Give a whole number.',
      tier: 'core',
      correctAnswer: 60,
      unit: '%',
      xpValue: 10,
      hint: 'efficiency = 720 / 1200 x 100%.',
    },
    {
      id: 'peep-q5',
      type: 'multiple-choice',
      stem: 'A pupil writes that a Bristol LED lamp is "150% efficient". What is wrong with that statement?',
      tier: 'core',
      options: [
        'Nothing, some LEDs really are 150% efficient.',
        'The number is too small. LEDs are at least 200% efficient.',
        'By conservation of energy, useful out cannot be more than total in, so efficiency cannot exceed 100%.',
        'Efficiency is always 100% for any device.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peep-mis-over-100',
      hint: 'Useful energy out has to come from total energy in. You cannot get out more than was put in.',
    },
    {
      id: 'peep-q6',
      type: 'multiple-choice',
      stem: 'In the efficiency formula, what is the unit of the final answer?',
      tier: 'core',
      options: [
        'joules, because both energies are in joules.',
        'joules per second, because it is a rate.',
        'There is no unit; the answer is dimensionless. We write it as a percentage with the % sign.',
        'newtons, because it is a force.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peep-mis-units-problem',
      hint: 'Joules on top and joules on the bottom cancel out, leaving a plain number.',
    },
    {
      id: 'peep-q7',
      type: 'numeric-entry',
      stem: 'A Bristol LED lamp is fed 100 J of electrical energy and gives out 90 J of useful light. What is its efficiency, as a percentage? Give a whole number.',
      tier: 'core',
      correctAnswer: 90,
      unit: '%',
      xpValue: 10,
      hint: 'efficiency = 90 / 100 x 100%.',
    },
    {
      id: 'peep-q8',
      type: 'numeric-entry',
      stem: 'A Birmingham filament bulb is fed 100 J of electrical energy and only 8 J leaves as useful light. What is its efficiency, as a percentage? Give a whole number.',
      tier: 'confident',
      correctAnswer: 8,
      unit: '%',
      xpValue: 15,
      hint: 'efficiency = 8 / 100 x 100%. Most of the input is wasted as thermal energy.',
    },
    {
      id: 'peep-q9',
      type: 'numeric-entry',
      stem: 'A Liverpool washing machine takes 4000 J of electrical energy in one short cycle. It transfers 1200 J as useful kinetic energy turning the drum; the rest is wasted as thermal and sound. What is its efficiency, as a percentage? Give a whole number.',
      tier: 'confident',
      correctAnswer: 30,
      unit: '%',
      xpValue: 15,
      hint: 'efficiency = 1200 / 4000 x 100%.',
    },
    {
      id: 'peep-q10',
      type: 'numeric-entry',
      stem: 'A small Edinburgh fan motor gets 500 J of electrical energy. 350 J ends up as useful kinetic energy of the moving air; the rest warms the motor. What is the efficiency of the fan, as a percentage? Give a whole number.',
      tier: 'confident',
      correctAnswer: 70,
      unit: '%',
      xpValue: 15,
      hint: 'efficiency = 350 / 500 x 100%.',
    },
    {
      id: 'peep-q11',
      type: 'multiple-choice',
      stem: 'A pupil calculates the efficiency of a kettle by writing "efficiency = wasted energy / total energy in x 100%". They get 15%. What went wrong?',
      tier: 'confident',
      options: [
        'Nothing, that is the right formula.',
        'They divided by useful instead of total.',
        'They used the wasted energy on top instead of the useful energy. Their 15% is actually the fraction wasted; the true efficiency is 100% - 15% = 85%.',
        'They forgot to multiply by 100.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'peep-mis-uses-wasted',
      hint: 'Useful and wasted both sit inside the total. Efficiency uses the useful share, not the wasted share.',
    },
    {
      id: 'peep-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes "efficiency = 850 / 1000 = 0.85". A teacher says one important step is missing. What is it?',
      tier: 'confident',
      options: [
        'They should swap the numerator and denominator.',
        'They should multiply the 0.85 by 100 to get 85%, since the question asks for a percentage.',
        'They should add 100.',
        'They should square the answer.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'peep-mis-forget-times-100',
      hint: 'A decimal like 0.85 means 85 per hundred. Multiply by 100 and add the % sign.',
    },
    {
      id: 'peep-q13',
      type: 'multiple-choice',
      stem: 'A Bristol LED lamp is fed 200 J of electrical energy and 180 J leaves as useful light. What is its efficiency, as a percentage?',
      tier: 'confident',
      options: [
        '10%, because 200 - 180 = 20 and that is roughly a tenth.',
        '180%, because the useful is 180 J.',
        '11%, because 200 / 180 is close to that.',
        '90%, because 180 / 200 x 100% = 90%.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'efficiency = useful / total x 100% = 180 / 200 x 100%.',
    },
    {
      id: 'peep-q14',
      type: 'numeric-entry',
      stem: 'A Manchester kettle is fed 2000 J of electrical energy. It wastes 300 J as thermal energy to the surroundings; the rest is useful thermal energy in the water. What is the efficiency of the kettle, as a percentage? Give a whole number.',
      tier: 'confident',
      correctAnswer: 85,
      unit: '%',
      xpValue: 15,
      misconceptionId: 'peep-mis-uses-wasted',
      hint: 'First find useful = total - wasted = 2000 - 300. Then efficiency = useful / total x 100%.',
    },
    {
      id: 'peep-q15',
      type: 'spot-misconception',
      stem: 'Aysha says, "I worked out that my LED lamp has efficiency 1.2, so it is 120% efficient."',
      tier: 'confident',
      statements: [
        {
          text: 'Aysha is right. Modern LEDs can be over 100% efficient.',
          isMisconception: true,
        },
        {
          text: 'Aysha is not right. By conservation of energy, useful out cannot exceed total in, so efficiency must be at most 100%. She has divided the wrong way round.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'peep-mis-over-100',
    },
    {
      id: 'peep-q16',
      type: 'multiple-choice',
      stem: 'A pupil works out 5000 / 4000 x 100% = 125% for an efficiency. What is the most likely mistake?',
      tier: 'challenge',
      options: [
        'They forgot to multiply by 100.',
        'They divided total by useful instead of useful by total. Useful out cannot exceed total in, so the true efficiency must be 4000 / 5000 x 100% = 80%.',
        'Their kettle is genuinely 125% efficient.',
        'They used the wrong units.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'peep-mis-divide-wrong-way',
      hint: 'If your answer is more than 100%, you have probably swapped the numerator and denominator.',
    },
    {
      id: 'peep-q17',
      type: 'multiple-choice',
      stem: 'Marcus says, "A Worcester kettle is 85% efficient, which means it transfers 85 joules of useful energy per second." Which response is the best fit?',
      tier: 'challenge',
      options: [
        'Marcus is right because 85% always means 85 J per second.',
        'Marcus has confused efficiency with energy. 85% is a ratio: of every 100 J of total input, 85 J ends up useful. It does not, on its own, tell you joules per second.',
        'Marcus is right because percentages are always per second.',
        '85% means the kettle uses 85 J in total.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'peep-mis-efficiency-is-energy',
      hint: 'Efficiency is a ratio, a percentage of input that ends up useful. It is not a quantity of energy itself.',
    },
    {
      id: 'peep-q18',
      type: 'spot-misconception',
      stem: 'Priya says, "When I work out efficiency I divide useful joules by total joules, and the joules cancel. That cannot be right because the units have vanished."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right to worry. The units should not cancel.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Efficiency is meant to be a ratio of two energies, so the joules should cancel. That is why efficiency is a plain number, written as a percentage with no unit attached.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'peep-mis-units-problem',
    },
    {
      id: 'peep-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for calculating the efficiency of a device as a percentage from its energy values.',
      tier: 'challenge',
      items: [
        'Divide useful by total, then multiply the answer by 100 and write the % sign.',
        'Sanity-check that the answer is at most 100%; if not, you have divided the wrong way.',
        'Read the question for the useful energy out and the total energy in, both in joules.',
        'Write the formula: efficiency = useful out / total in x 100%.',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 20,
      hint: 'Read the numbers first, then write the rule, then do the arithmetic, then sanity-check the answer.',
    },
    {
      id: 'peep-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the efficiency of a Liverpool washing machine that takes 4000 J of electrical energy and transfers 1200 J as useful kinetic energy of the drum.',
      tier: 'challenge',
      steps: [
        'Pick out useful and total: useful = 1200 J, total = 4000 J. Both are in joules so the units match.',
        'Write the rule: efficiency = useful / total x 100%.',
        'Substitute the numbers: efficiency = 1200 / 4000 x 100%.',
        null,
        'Multiply the decimal by 100: 0.3 x 100 = 30. Add the % sign.',
        'State the answer: the washing machine is 30% efficient. Sanity-check: 30% is at most 100%, which fits.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Do the division first: 1200 / 4000 = 0.3. The joules on top and bottom cancel, so the answer is a plain decimal.',
      xpValue: 20,
      misconceptionId: 'peep-mis-forget-times-100',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates quoted efficiencies above 100% by dividing total input by useful output instead of the other way round.
    {
      id: 'peep-mis-divide-wrong-way',
      description:
        'Dividing total energy in by useful energy out, instead of useful by total, leading to efficiencies above 100%.',
      triggerAnswer: 'divide-wrong-way',
      correction:
        'Useful sits on top, total sits on the bottom: efficiency = useful out / total in x 100%. If your answer is more than 100%, you have probably swapped them.',
      reExplanation:
        'For a Worcester kettle with 850 J useful and 1000 J total, the correct calculation is 850 / 1000 x 100% = 85%. Swapping gives 1000 / 850 x 100% = 117.6%, which breaks conservation of energy. Always put the smaller, useful number on top and the larger, total number on the bottom. Then the joules cancel and the answer comes out as a percentage at most 100.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates wrote efficiencies greater than 100% for kettles, missing that conservation of energy caps the figure.
    {
      id: 'peep-mis-over-100',
      description:
        'Believing efficiency can be greater than 100%, missing that useful energy out can never exceed total energy in.',
      triggerAnswer: 'over-100',
      correction:
        'By conservation of energy, useful energy out is at most equal to total energy in. So efficiency is at most 100%. Anything more means you have made an arithmetic slip.',
      reExplanation:
        'Energy is conserved in every transfer. The useful share is part of the total input, never more. So useful / total is at most 1, and efficiency is at most 100%. A perfect device with no waste would be 100% efficient; a real device is always less. If your answer is over 100%, recheck which energy you put on top.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote efficiency = wasted / total instead of useful / total, treating the wasted share as the efficiency itself.
    {
      id: 'peep-mis-uses-wasted',
      description:
        'Putting the wasted energy on top of the fraction instead of the useful energy, so the result is the wasted share rather than the efficiency.',
      triggerAnswer: 'uses-wasted',
      correction:
        'Efficiency uses the useful energy on top, not the wasted energy. The wasted share equals 100% - efficiency, so a 15% wasted share goes with an 85% efficiency.',
      reExplanation:
        'For a Worcester kettle with 1000 J total and 150 J wasted, the useful energy is 1000 - 150 = 850 J. Efficiency = 850 / 1000 x 100% = 85%. If you put wasted on top by mistake, you get 150 / 1000 x 100% = 15%, which is the wasted percentage, not the efficiency. Useful and wasted together make 100%, so the two answers should add to 100.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates quoted efficiency as 0.85 without converting to a percentage, losing the mark for the missing x 100%.
    {
      id: 'peep-mis-forget-times-100',
      description:
        'Leaving efficiency as a decimal like 0.85 when the question asks for a percentage, missing the x 100 step.',
      triggerAnswer: 'forget-times-100',
      correction:
        'After dividing useful by total, multiply the decimal by 100 to make it a percentage. 0.85 becomes 85, then write the % sign so the reader knows it is "per hundred".',
      reExplanation:
        'The decimal 0.85 and the percentage 85% are the same number written two ways: 85 per hundred. When a question says "as a percentage" or "%", the marker expects the x 100 step and the % sign. A pupil who writes 0.85 has done the maths right but lost the conversion, so they only get part marks. Always finish: divide, times 100, add %.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote "the bulb is 90% efficient so it uses 90 J" or similar, confusing the efficiency ratio with a quantity of energy.
    {
      id: 'peep-mis-efficiency-is-energy',
      description:
        'Treating efficiency as a quantity of energy in joules, rather than a ratio that compares two energies.',
      triggerAnswer: 'efficiency-is-energy',
      correction:
        'Efficiency is a ratio, useful out / total in. It is a pure number written as a percentage. It is not a quantity of energy and has no joules attached.',
      reExplanation:
        'For a Bristol LED that gets 100 J and gives 90 J of light, efficiency is 90%. That is the share of input that ends up useful, 90 out of every 100. To get useful energy in joules, you need the total: useful = efficiency / 100 x total. With 200 J of input, the same LED gives 0.90 x 200 = 180 J, not 90 J.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates flagged the cancellation of joules on top and bottom of the efficiency fraction as a problem, when in fact it is by design.
    {
      id: 'peep-mis-units-problem',
      description:
        'Treating the cancellation of joules on top and bottom of the efficiency fraction as a problem, missing that efficiency is meant to be dimensionless.',
      triggerAnswer: 'units-problem',
      correction:
        'Efficiency compares two energies, so the joules should cancel. That is why efficiency is a plain number written as a percentage, with no unit attached.',
      reExplanation:
        'Whenever you divide two quantities with the same unit, the units cancel. With 850 J / 1000 J, the joules on top and bottom cancel, leaving 0.85, a plain number. Multiplying by 100 gives 85, and the % sign means "per hundred". A unit like J or N would be wrong here, since efficiency is meant to be a pure ratio.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyEfficiencyPercentageZoneNodes = [energyEfficiencyPercentage]
