import type { SkillNode } from '@/types/content'

const APPLIANCE_RATINGS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Power ratings of common UK appliances</text>

    <!-- Kettle panel -->
    <rect x="40" y="80" width="170" height="240" />
    <text x="125" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Kettle</text>
    <text x="125" y="160" text-anchor="middle" font-size="26" font-weight="700" stroke="none" fill="currentColor">2400 W</text>
    <text x="125" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">= 2.4 kW</text>
    <text x="125" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Transfers 2400 J</text>
    <text x="125" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">of energy each second</text>
    <text x="125" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">into the water store.</text>

    <!-- Oven panel -->
    <rect x="225" y="80" width="170" height="240" />
    <text x="310" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Electric oven</text>
    <text x="310" y="160" text-anchor="middle" font-size="26" font-weight="700" stroke="none" fill="currentColor">3000 W</text>
    <text x="310" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">= 3 kW</text>
    <text x="310" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Transfers 3000 J</text>
    <text x="310" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">each second while</text>
    <text x="310" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">the element is on.</text>

    <!-- LED bulb panel -->
    <rect x="410" y="80" width="170" height="240" />
    <text x="495" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">LED bulb</text>
    <text x="495" y="160" text-anchor="middle" font-size="26" font-weight="700" stroke="none" fill="currentColor">8 W</text>
    <text x="495" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">= 0.008 kW</text>
    <text x="495" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Transfers 8 J</text>
    <text x="495" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">of energy each second,</text>
    <text x="495" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">mostly as light.</text>

    <!-- Phone charger panel -->
    <rect x="595" y="80" width="170" height="240" />
    <text x="680" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Phone charger</text>
    <text x="680" y="160" text-anchor="middle" font-size="26" font-weight="700" stroke="none" fill="currentColor">5 W</text>
    <text x="680" y="190" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">= 0.005 kW</text>
    <text x="680" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Transfers 5 J</text>
    <text x="680" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">each second into the</text>
    <text x="680" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">phone battery store.</text>

    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A higher rating means more joules transferred every second. 1 kW = 1000 W.</text>
  </g>
`

const FORMULA_BREAKDOWN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Power: the rate of energy transfer</text>

    <!-- Formula triangle / box -->
    <rect x="280" y="80" width="240" height="120" />
    <text x="400" y="130" text-anchor="middle" font-size="28" font-weight="700" stroke="none" fill="currentColor">P = E / t</text>
    <text x="400" y="170" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Power equals energy transferred</text>
    <text x="400" y="188" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">divided by the time taken.</text>

    <!-- Quantity table -->
    <line x1="80" y1="230" x2="720" y2="230" />
    <text x="160" y="255" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Symbol</text>
    <text x="320" y="255" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Quantity</text>
    <text x="560" y="255" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Unit</text>
    <line x1="80" y1="265" x2="720" y2="265" />

    <text x="160" y="290" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">P</text>
    <text x="320" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Power</text>
    <text x="560" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">watt (W) = 1 J/s</text>

    <text x="160" y="315" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">E</text>
    <text x="320" y="315" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy transferred</text>
    <text x="560" y="315" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">joule (J)</text>

    <text x="160" y="340" text-anchor="middle" font-size="14" stroke="none" fill="currentColor">t</text>
    <text x="320" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Time taken</text>
    <text x="560" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">second (s)</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Watts only work when energy is in joules and time is in seconds. 1 kW = 1000 W.</text>
  </g>
`

const TWO_KETTLES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Boiling 1 L of water: a 2400 W kettle vs a 1200 W kettle</text>

    <!-- Left kettle: 2400 W -->
    <rect x="80" y="80" width="280" height="260" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Glasgow kettle, 2400 W</text>
    <!-- kettle body -->
    <rect x="170" y="155" width="100" height="80" />
    <line x1="170" y1="175" x2="150" y2="175" />
    <line x1="150" y1="175" x2="150" y2="220" />
    <text x="220" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy needed: 420 000 J</text>
    <text x="220" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Time = 420 000 / 2400</text>
    <text x="220" y="310" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">= 175 s</text>

    <!-- Right kettle: 1200 W -->
    <rect x="440" y="80" width="280" height="260" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Travel kettle, 1200 W</text>
    <rect x="530" y="155" width="100" height="80" />
    <line x1="530" y1="175" x2="510" y2="175" />
    <line x1="510" y1="175" x2="510" y2="220" />
    <text x="580" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy needed: 420 000 J</text>
    <text x="580" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Time = 420 000 / 1200</text>
    <text x="580" y="310" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">= 350 s</text>

    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same energy delivered, but double the power means half the time.</text>
  </g>
`

export const energyPower: SkillNode = {
  id: 'physics-energy-power',
  title: 'Power',
  description:
    'Power is the rate of transfer of energy: how many joules an appliance moves between stores in each second. The rule is P = E / t, measured in watts (W), where 1 W is 1 joule transferred per second. Household appliances are often labelled in kilowatts (kW), where 1 kW = 1000 W. A 2400 W Glasgow kettle transfers 2400 J every second, so it boils a litre of water in roughly half the time a 1200 W travel kettle takes. Power and energy are not the same: a low-power phone charger left on all night can still deliver a lot of energy in total.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'challenge',
  prerequisites: ['physics-energy-work-done'],
  curriculum: {
    ks3Objective:
      'Power as the rate of transfer of energy; P = E / t, measured in watts; kilowatts for household appliances; comparing power ratings of kettles, lamps and ovens.',
    awardingBodies: {
      aqa: '4.1.1.3 Power as the rate of energy transfer; P = E / t in watts (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.15 Power = energy transferred / time taken; watts and kilowatts (GCSE Physics 1PH0)',
      ocr: 'P1.1 Power as the rate of energy transfer; calculation in watts and kilowatts (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pep-scene-appliance-ratings',
      title: 'Power Ratings Around the Home',
      type: 'labelled-diagram',
      instructions:
        'Click each appliance panel to see what its power rating tells you about energy transfer each second.',
      data: {
        viewBox: '0 0 800 400',
        svg: APPLIANCE_RATINGS_SVG,
        hotspots: [
          {
            id: 'pep-rating-kettle',
            x: 16,
            y: 50,
            label: 'Kettle: 2400 W = 2.4 kW',
            description:
              'A typical Glasgow kitchen kettle is labelled 2400 W. That means it transfers 2400 joules from the mains into the water store every second the element is on. Writing it as 2.4 kW just swaps watts for kilowatts; the rating is the same.',
          },
          {
            id: 'pep-rating-oven',
            x: 39,
            y: 50,
            label: 'Oven: 3000 W = 3 kW',
            description:
              'An electric oven on a high setting is often rated 3000 W. Every second the element is on, it transfers 3000 J as heating to the air inside the oven and to the food. That is more joules per second than the kettle, so it has a higher power.',
          },
          {
            id: 'pep-rating-led',
            x: 62,
            y: 50,
            label: 'LED bulb: 8 W',
            description:
              'A Norwich LED bulb is rated 8 W. It transfers 8 J of energy every second, mostly as light, with a small share as heating. The small wattage is the whole point: LED bulbs deliver useful light without moving many joules per second.',
          },
          {
            id: 'pep-rating-charger',
            x: 85,
            y: 50,
            label: 'Phone charger: 5 W',
            description:
              'A standard phone charger is rated about 5 W when it is charging. It transfers 5 J each second into the phone battery store. Left on for hours, the total energy adds up, even though the power itself is small.',
          },
        ],
      },
    },
    {
      id: 'pep-scene-formula-breakdown',
      title: 'Reading the Formula',
      type: 'labelled-diagram',
      instructions:
        'Click each row to see what every letter in P = E / t means and which unit to use.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORMULA_BREAKDOWN_SVG,
        hotspots: [
          {
            id: 'pep-formula-rule',
            x: 50,
            y: 35,
            label: 'P = E / t, the rate of energy transfer',
            description:
              'Power is energy transferred divided by time taken. The bigger the energy moved in a fixed time, the higher the power. The shorter the time used to transfer a fixed amount of energy, the higher the power.',
          },
          {
            id: 'pep-formula-units',
            x: 70,
            y: 73,
            label: 'Watts only work with joules and seconds',
            description:
              'The watt is defined as one joule per second. If E is in joules and t is in seconds, then P comes out in watts. Putting kilojoules or minutes into P = E / t without converting first gives a wrong number.',
          },
          {
            id: 'pep-formula-kilowatts',
            x: 50,
            y: 95,
            label: '1 kW = 1000 W',
            description:
              'Appliance labels often use kilowatts to keep the numbers small. A 2.4 kW kettle is the same as a 2400 W kettle. To use P = E / t you may need to convert kW to W first, by multiplying by 1000.',
          },
        ],
      },
    },
    {
      id: 'pep-scene-two-kettles',
      title: 'Two Kettles, Same Litre',
      type: 'labelled-diagram',
      instructions:
        'Click each kettle to see how power changes the time taken to deliver the same amount of energy.',
      data: {
        viewBox: '0 0 800 400',
        svg: TWO_KETTLES_SVG,
        hotspots: [
          {
            id: 'pep-kettle-2400',
            x: 28,
            y: 55,
            label: '2400 W Glasgow kettle: 175 s',
            description:
              'Boiling 1 L of water from room temperature takes about 420 000 J. A 2400 W kettle moves 2400 J every second, so it takes 420 000 / 2400 = 175 s to deliver the full amount. Higher power means the energy lands sooner.',
          },
          {
            id: 'pep-kettle-1200',
            x: 73,
            y: 55,
            label: '1200 W travel kettle: 350 s',
            description:
              'A 1200 W travel kettle moves only 1200 J per second. To deliver the same 420 000 J it needs 420 000 / 1200 = 350 s. The water still ends up hot, but the lower power means the time is longer.',
          },
          {
            id: 'pep-kettle-same-energy',
            x: 50,
            y: 95,
            label: 'Same energy, different time',
            description:
              'Both kettles transfer roughly the same total energy to the water. Power is about the rate, not the total. Doubling the power halves the time taken to deliver the same energy.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pep-worked-1',
      title: 'Birmingham kettle: 240 000 J in 100 s, what is the power in W and kW?',
      steps: [
        {
          explanation:
            'Pick out the quantities from the question. A kettle in a Birmingham kitchen transfers E = 240 000 J of energy into the water store over a time of t = 100 s. We want the power P, first in watts and then in kilowatts.',
        },
        {
          explanation:
            'Check the units. E is already in joules and t is in seconds, so P will come out in watts straight from the formula. No conversion is needed first.',
        },
        {
          explanation: 'Write the rule for power.',
          maths: 'P = E / t',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'P = 240 000 / 100',
        },
        {
          explanation: 'Evaluate.',
          maths: 'P = 2400 W',
        },
        {
          explanation:
            'Convert to kilowatts by dividing by 1000, since 1 kW = 1000 W. So 2400 W = 2.4 kW. The kettle has a power rating of 2400 W, or equivalently 2.4 kW.',
          maths: '2400 W = 2.4 kW',
        },
      ],
    },
    {
      id: 'pep-worked-2',
      title: 'A Norwich LED lamp transfers 480 J over 60 s: find the power',
      steps: [
        {
          explanation:
            'Pick out the quantities. An LED lamp in a Norwich living room transfers E = 480 J of energy, mostly as light, over a time of t = 60 s. We want the power P in watts.',
        },
        {
          explanation:
            'Check the units. Energy is in joules and time is in seconds, so the watt answer drops out of P = E / t without any conversion. Watts are joules per second.',
        },
        {
          explanation: 'Write the rule.',
          maths: 'P = E / t',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'P = 480 / 60',
        },
        {
          explanation: 'Evaluate.',
          maths: 'P = 8 W',
        },
        {
          explanation:
            'State the answer. The LED lamp has a power of 8 W. Every second it is on, it transfers 8 J as light and a small amount as heating. That fits the rating printed on most LED bulbs sold in the UK.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pep-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best defines power in physics?',
      tier: 'core',
      options: [
        'The total amount of energy stored in an appliance.',
        'The rate at which energy is transferred, measured in watts.',
        'The force pushing electric charges around a circuit.',
        'The temperature reached by an appliance when it is on.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pep-mis-power-equals-energy',
      hint: 'Power tells you the rate at which energy is moved, not how much there is in total.',
    },
    {
      id: 'pep-q2',
      type: 'multiple-choice',
      stem: 'Which formula links power P, energy transferred E, and time taken t?',
      tier: 'core',
      options: [
        'P = E x t',
        'P = E + t',
        'P = E / t',
        'P = t / E',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pep-mis-watts-equal-joules',
      hint: 'Power is energy divided by time, so the bigger the energy in a fixed time, the bigger the power.',
    },
    {
      id: 'pep-q3',
      type: 'multiple-choice',
      stem: 'What is the unit of power and what does it mean?',
      tier: 'core',
      options: [
        'The joule, which means 1 newton per metre.',
        'The watt, which means 1 joule transferred per second.',
        'The newton, which means 1 kilogram metre per second.',
        'The kilowatt-hour, which is the SI unit of power.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pep-mis-watts-equal-joules',
      hint: 'A watt is a joule per second, the rate of energy transfer.',
    },
    {
      id: 'pep-q4',
      type: 'numeric-entry',
      stem: 'A Cardiff washing machine transfers 60 000 J of energy as heating in 30 s while it warms the water. What is its power in watts during that stage?',
      tier: 'core',
      correctAnswer: 2000,
      unit: 'W',
      xpValue: 10,
      hint: 'Use P = E / t with E = 60 000 J and t = 30 s.',
    },
    {
      id: 'pep-q5',
      type: 'numeric-entry',
      stem: 'A Norwich LED bulb transfers 240 J of energy over 30 s. What is its power in watts?',
      tier: 'core',
      correctAnswer: 8,
      unit: 'W',
      xpValue: 10,
      hint: 'P = E / t = 240 / 30.',
    },
    {
      id: 'pep-q6',
      type: 'multiple-choice',
      stem: 'A kitchen kettle is labelled 2.4 kW. Which value is equivalent in watts?',
      tier: 'core',
      options: [
        '24 W',
        '240 W',
        '2400 W',
        '24 000 W',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pep-mis-kw-equals-w',
      hint: '1 kW = 1000 W, so multiply by 1000.',
    },
    {
      id: 'pep-q7',
      type: 'multiple-choice',
      stem: 'Two pupils argue about a 5 W phone charger left plugged in all night. Tom says "It uses only 5 W, so it cannot transfer much energy in total." Beth says "Power and total energy are not the same. Even a small power, left on for many hours, can transfer a lot of joules." Who is right?',
      tier: 'core',
      options: [
        'Tom, because a low power always means low total energy.',
        'Beth, because total energy is power multiplied by time, and a long time can grow the total.',
        'Both, because watts and joules mean the same thing.',
        'Neither, because chargers do not transfer energy when a phone is full.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pep-mis-high-power-uses-more-energy',
      hint: 'Power is a rate. Energy is power multiplied by time, so time matters too.',
    },
    {
      id: 'pep-q8',
      type: 'numeric-entry',
      stem: 'A Glasgow kettle transfers 480 000 J of energy in 200 s. What is its power rating in watts?',
      tier: 'confident',
      correctAnswer: 2400,
      unit: 'W',
      xpValue: 15,
      hint: 'P = E / t = 480 000 / 200.',
    },
    {
      id: 'pep-q9',
      type: 'numeric-entry',
      stem: 'A 2000 W heater is left on for 60 s. How much energy in joules does it transfer in that time?',
      tier: 'confident',
      correctAnswer: 120000,
      unit: 'J',
      xpValue: 15,
      misconceptionId: 'pep-mis-power-equals-energy',
      hint: 'Rearrange P = E / t to E = P x t. Then E = 2000 x 60.',
    },
    {
      id: 'pep-q10',
      type: 'numeric-entry',
      stem: 'A London Tube train motor is rated 600 000 W. It is run at full power for 5 s pulling out of a station. The power stays steady at 600 000 W throughout. How much energy in joules does the motor transfer in that time?',
      tier: 'confident',
      correctAnswer: 3000000,
      unit: 'J',
      xpValue: 15,
      misconceptionId: 'pep-mis-power-grows-with-time',
      hint: 'The 600 000 W is a fixed rate, not a number that grows. Use E = P x t with P = 600 000 W and t = 5 s.',
    },
    {
      id: 'pep-q11',
      type: 'numeric-entry',
      stem: 'A Cardiff washing machine motor transfers 90 000 J of energy when running at a power of 300 W. For how many seconds was it running?',
      tier: 'confident',
      correctAnswer: 300,
      unit: 's',
      xpValue: 15,
      hint: 'Rearrange P = E / t to t = E / P. Then t = 90 000 / 300.',
    },
    {
      id: 'pep-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes that an oven labelled 3 kW transfers "3 J of energy every second". What is the mistake?',
      tier: 'confident',
      options: [
        'The oven actually transfers nothing until it is hot.',
        'The unit should be newtons, not joules.',
        'They should have used minutes instead of seconds.',
        'They have not converted kilowatts into watts. 3 kW means 3000 W, so the oven transfers 3000 J each second.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pep-mis-kw-equals-w',
      hint: '1 kW = 1000 W, and a watt is a joule per second.',
    },
    {
      id: 'pep-q13',
      type: 'multiple-choice',
      stem: 'A Glasgow kettle has a power of 2400 W. A travel kettle has a power of 1200 W. Both are used to deliver the same 420 000 J of energy to boil 1 L of water. Which sentence is correct?',
      tier: 'confident',
      options: [
        'Both kettles take the same time, because they deliver the same energy.',
        'The travel kettle takes less time, because lower power is more efficient.',
        'The 2400 W kettle takes half the time, because it transfers twice as many joules each second.',
        'Neither will ever boil the water, because power is too small.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pep-mis-double-watts-half-energy',
      hint: 'Same energy means time scales as 1 / power. Doubling the power halves the time.',
    },
    {
      id: 'pep-q14',
      type: 'spot-misconception',
      stem: 'Jamal says, "An oven uses more total energy than a phone charger, so it must have a bigger total energy stored inside it. Power and energy mean the same thing in physics."',
      tier: 'confident',
      statements: [
        {
          text: 'Jamal is right. The oven holds more energy inside, so watts and joules are the same.',
          isMisconception: true,
        },
        {
          text: 'Jamal is not right. Power is the rate of energy transfer in watts; energy is a total in joules. The oven does not "store" power; the mains supplies it as the oven runs.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pep-mis-power-equals-energy',
    },
    {
      id: 'pep-q15',
      type: 'spot-misconception',
      stem: 'Sara says, "If you double the power of a kettle, you halve the energy needed to boil a litre of water."',
      tier: 'confident',
      statements: [
        {
          text: 'Sara is right. Doubling the power means half as many joules are needed to boil the same water.',
          isMisconception: true,
        },
        {
          text: 'Sara is not right. The same litre of water needs roughly the same energy either way. Doubling the power halves the time taken, not the energy needed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pep-mis-double-watts-half-energy',
    },
    {
      id: 'pep-q16',
      type: 'numeric-entry',
      stem: 'A 3 kW oven element is on for 200 s. How much energy in joules does it transfer in that time? Convert the power into watts first.',
      tier: 'challenge',
      correctAnswer: 600000,
      unit: 'J',
      xpValue: 20,
      misconceptionId: 'pep-mis-kw-equals-w',
      hint: 'Convert 3 kW to 3000 W, then use E = P x t = 3000 x 200.',
    },
    {
      id: 'pep-q17',
      type: 'multiple-choice',
      stem: 'A pupil claims that a 50 W lamp left on for 60 s transfers more energy in total than a 2000 W kettle running for 1 s. Which choice is correct, and what total energies match?',
      tier: 'challenge',
      options: [
        'The pupil is right. Lamp: 50 x 60 = 3000 J. Kettle: 2000 x 1 = 2000 J. The lamp transfers more total energy.',
        'The pupil is wrong. The kettle has a higher power, so it must transfer more energy in total no matter the time.',
        'The pupil is wrong. Both transfer the same energy, because watts and joules are the same.',
        'The pupil is right, because lamps are more efficient than kettles.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pep-mis-high-power-uses-more-energy',
      hint: 'Use E = P x t for each appliance, then compare the totals.',
    },
    {
      id: 'pep-q18',
      type: 'multiple-choice',
      stem: 'A pupil writes that a kettle has a power of "2400 watts of energy". A friend spots a problem. Which fix is best?',
      tier: 'challenge',
      options: [
        'Leave it. Watts and joules mean the same thing.',
        'Change "watts" to "joules" because power is measured in joules.',
        'Drop "of energy". A watt is a rate of energy transfer, 1 joule per second, not a quantity of energy.',
        'Change 2400 to 2.4 because power must always be in kW.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pep-mis-watts-equal-joules',
      hint: 'A watt is joules per second, not joules.',
    },
    {
      id: 'pep-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the power of an appliance using P = E / t.',
      tier: 'challenge',
      items: [
        'Substitute E and t into P = E / t, evaluate, and convert to kW at the end if the question asks for kW.',
        'Pick out the energy transferred E and the time taken t from the question, with their units.',
        'Check the units. Convert kJ to J and minutes to s so that E is in joules and t is in seconds.',
        'Write the rule for power: P = E / t.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 20,
      hint: 'List the quantities first, then sort the units, then write the rule, then do the arithmetic.',
    },
    {
      id: 'pep-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the power of a London Tube train motor that transfers 1 200 000 J of energy in 4 s while accelerating from a station.',
      tier: 'challenge',
      steps: [
        'List the quantities: E = 1 200 000 J, t = 4 s. We want the power P in watts.',
        'Check the units. Energy is in joules and time is in seconds, so P will come out in watts straight away. No conversion is needed first.',
        'Write the rule for power.',
        null,
        'Evaluate: P = 300 000 W.',
        'Convert to kilowatts to make the number tidier: 300 000 W = 300 kW. State the answer with units.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers into the rule P = E / t, giving P = 1 200 000 / 4.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates routinely wrote that "power is the energy stored in the appliance", treating power and energy as the same idea and quoting watts where joules belonged.
    {
      id: 'pep-mis-power-equals-energy',
      description:
        'Treating power and total energy as the same idea, writing that an appliance "stores power" or quoting watts where joules belong.',
      triggerAnswer: 'power-equals-energy',
      correction:
        'Power is the rate of energy transfer in watts. Total energy is a quantity in joules. An appliance does not store power; it draws it from the mains while it runs.',
      reExplanation:
        'Think of a tap and a bucket. Power is the rate water flows from the tap, joules per second. Energy is the total water in the bucket. A 2400 W kettle pours 2400 J each second into the water store. Leave it on longer and the total joules grow, but the rate, 2400 W, stays the same. The kettle does not hold power inside it.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates labelled answers in joules with units of W or wrote "watts of energy", showing watts and joules used as if interchangeable.
    {
      id: 'pep-mis-watts-equal-joules',
      description:
        'Using watts and joules as if they were interchangeable, writing "watts of energy" or quoting an energy total in W.',
      triggerAnswer: 'watts-equal-joules',
      correction:
        'A watt is a joule per second, a rate. A joule is a quantity of energy. Total energy is measured in joules, and power is measured in watts.',
      reExplanation:
        'If a heater is labelled 2000 W, that means 2000 joules pass through it every second. Run it for 10 s and the total energy transferred is 2000 x 10 = 20 000 J, not 20 000 W. The watts tell the reader the rate; the joules tell the reader the total. Mixing them is like mixing metres per second with metres.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates working with kilowatt labels failed to convert to watts before using P = E / t, leaving answers a factor of 1000 too small.
    {
      id: 'pep-mis-kw-equals-w',
      description:
        'Using a kilowatt label directly in P = E / t without converting to watts, leaving the answer a factor of 1000 too small.',
      triggerAnswer: 'kw-equals-w',
      correction:
        '1 kW = 1000 W. Convert kilowatts into watts by multiplying by 1000 before using P = E / t with E in joules and t in seconds.',
      reExplanation:
        'A 3 kW oven is the same as a 3000 W oven. If a question gives the rating in kW, change it to W first, or your watts and your joules per second will not line up. After the arithmetic, you can convert the answer back into kW at the end if the question asks for kW.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, on power calculations, candidates claimed that a higher-power appliance always uses more total energy regardless of running time.
    {
      id: 'pep-mis-high-power-uses-more-energy',
      description:
        'Claiming that a higher-power appliance always transfers more total energy than a lower-power one, missing the role of time.',
      triggerAnswer: 'high-power-uses-more-energy',
      correction:
        'Total energy is power multiplied by time. A low-power appliance left on for a long time can move more joules than a high-power one used briefly.',
      reExplanation:
        'A 2000 W kettle on for 1 s transfers 2000 J. A 50 W lamp on for 60 s transfers 50 x 60 = 3000 J. The lamp has the lower power but a much longer running time, so its total is bigger. Power tells you the rate, never the total on its own. Always check the time as well.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates argued that current flowing through an appliance grew its power as time went on, treating power as something that builds up rather than a fixed rate.
    {
      id: 'pep-mis-power-grows-with-time',
      description:
        'Claiming that the power of an appliance grows the longer it is on, treating power as something that builds up rather than a fixed rate.',
      triggerAnswer: 'power-grows-with-time',
      correction:
        'Power is the rate of energy transfer, set by the appliance and its supply. It stays roughly steady while the appliance runs; the total energy is what grows with time.',
      reExplanation:
        'A 2400 W kettle moves 2400 J each second from the start until it switches off. At 1 s it has delivered 2400 J; at 100 s it has delivered 240 000 J. The total energy keeps growing, but the rate stays at 2400 W. Power is a property of the appliance and the supply, not a quantity that adds up over time.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates claimed that doubling the power of a kettle halved the energy needed to boil the same water, confusing time and energy.
    {
      id: 'pep-mis-double-watts-half-energy',
      description:
        'Claiming that doubling the power of an appliance halves the energy needed to do the same job, confusing time saved with energy saved.',
      triggerAnswer: 'double-watts-half-energy',
      correction:
        'Doubling the power halves the time taken to deliver the same energy, not the energy itself. The same litre of water needs roughly the same total joules either way.',
      reExplanation:
        'A 2400 W kettle and a 1200 W kettle both need about 420 000 J to boil 1 L of water from room temperature. The 2400 W kettle delivers that in 420 000 / 2400 = 175 s; the 1200 W one needs 420 000 / 1200 = 350 s. Same energy, double the power, half the time. The energy required is set by the water, not by the kettle.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyPowerZoneNodes = [energyPower]
