import type { SkillNode } from '@/types/content'

const BILL_PAGE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A page from a Manchester electricity bill</text>

    <!-- Bill outline -->
    <rect x="120" y="70" width="560" height="290" />

    <!-- Heading row -->
    <line x1="120" y1="110" x2="680" y2="110" />
    <text x="140" y="98" font-size="14" font-weight="700" stroke="none" fill="currentColor">Statement, 1 to 31 March</text>

    <!-- Units used -->
    <text x="140" y="145" font-size="14" font-weight="700" stroke="none" fill="currentColor">Units used (kWh)</text>
    <text x="500" y="145" font-size="14" stroke="none" fill="currentColor">320 kWh</text>

    <!-- Unit price -->
    <text x="140" y="180" font-size="14" font-weight="700" stroke="none" fill="currentColor">Unit price</text>
    <text x="500" y="180" font-size="14" stroke="none" fill="currentColor">28 p / kWh</text>

    <!-- Energy charge -->
    <text x="140" y="215" font-size="14" font-weight="700" stroke="none" fill="currentColor">Energy charge</text>
    <text x="500" y="215" font-size="14" stroke="none" fill="currentColor">320 x 28 = 8960 p = £89.60</text>

    <!-- Standing charge -->
    <text x="140" y="250" font-size="14" font-weight="700" stroke="none" fill="currentColor">Standing charge</text>
    <text x="500" y="250" font-size="14" stroke="none" fill="currentColor">53 p / day x 31 = £16.43</text>

    <!-- Total -->
    <line x1="120" y1="275" x2="680" y2="275" />
    <text x="140" y="305" font-size="15" font-weight="700" stroke="none" fill="currentColor">Total to pay</text>
    <text x="500" y="305" font-size="15" font-weight="700" stroke="none" fill="currentColor">£106.03</text>

    <text x="400" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A "unit" on the bill is 1 kWh, the energy used by a 1 kW appliance running for 1 hour.</text>

    <text x="400" y="390" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">cost in pence = power (kW) x time (h) x unit price (p / kWh)</text>
  </g>
`

const APPLIANCE_PANEL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Common UK appliances, typical daily use</text>

    <!-- Table outline -->
    <rect x="80" y="70" width="640" height="290" />
    <line x1="80" y1="110" x2="720" y2="110" />
    <line x1="280" y1="70" x2="280" y2="360" />
    <line x1="430" y1="70" x2="430" y2="360" />
    <line x1="580" y1="70" x2="580" y2="360" />

    <!-- Headers -->
    <text x="180" y="98" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Appliance</text>
    <text x="355" y="98" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Power (kW)</text>
    <text x="505" y="98" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Time (h / day)</text>
    <text x="650" y="98" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Energy (kWh)</text>

    <!-- Kettle -->
    <text x="180" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Kettle</text>
    <text x="355" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2.4</text>
    <text x="505" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.1</text>
    <text x="650" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.24</text>

    <!-- Oven -->
    <text x="180" y="180" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Electric oven</text>
    <text x="355" y="180" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">3.0</text>
    <text x="505" y="180" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.5</text>
    <text x="650" y="180" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.5</text>

    <!-- LED bulb -->
    <text x="180" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">LED bulb</text>
    <text x="355" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.008</text>
    <text x="505" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">5.0</text>
    <text x="650" y="215" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.04</text>

    <!-- Washing machine -->
    <text x="180" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Washing machine</text>
    <text x="355" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2.1</text>
    <text x="505" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">1.0</text>
    <text x="650" y="250" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2.1</text>

    <!-- TV -->
    <text x="180" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Television</text>
    <text x="355" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.1</text>
    <text x="505" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">3.0</text>
    <text x="650" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">0.3</text>

    <!-- Total row -->
    <line x1="80" y1="310" x2="720" y2="310" />
    <text x="180" y="335" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Total energy</text>
    <text x="650" y="335" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">4.18 kWh</text>

    <text x="400" y="390" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy in kWh = power (kW) x time (h). Watch the power column: an LED is 8 W, not 8 kW.</text>
  </g>
`

const BOILER_COMPARISON_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two electric boilers, one Cardiff home, annual cost</text>

    <!-- Old boiler panel -->
    <rect x="60" y="80" width="320" height="240" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Old boiler: 12 kW</text>
    <text x="220" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Runs 2 h / day</text>
    <text x="220" y="175" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy / day = 12 x 2 = 24 kWh</text>
    <text x="220" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">At 28 p / kWh = 672 p / day</text>
    <text x="220" y="225" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">= £6.72 / day</text>
    <text x="220" y="270" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Annual (x 365)</text>
    <text x="220" y="295" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">≈ £2453</text>

    <!-- New boiler panel -->
    <rect x="420" y="80" width="320" height="240" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">New boiler: 9 kW</text>
    <text x="580" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Runs 2 h / day</text>
    <text x="580" y="175" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Energy / day = 9 x 2 = 18 kWh</text>
    <text x="580" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">At 28 p / kWh = 504 p / day</text>
    <text x="580" y="225" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">= £5.04 / day</text>
    <text x="580" y="270" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Annual (x 365)</text>
    <text x="580" y="295" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">≈ £1840</text>

    <text x="400" y="345" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Saving per year: £2453 - £1840 ≈ £613</text>
    <text x="400" y="375" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The standing charge sits on top of both totals as a flat daily fee, the same either way.</text>
  </g>
`

export const energyElectricityCost: SkillNode = {
  id: 'physics-energy-electricity-cost',
  title: 'Cost of Electricity in UK Homes',
  description:
    'A UK electricity bill charges you per "unit", and a unit is one kilowatt-hour (kWh), the energy used by a 1 kW appliance running for 1 hour. To work out the cost of running an appliance, multiply its power in kW by the time it is on in hours to get the energy in kWh, then multiply by the unit price in pence per kWh. On a typical 2026 UK tariff the unit price is roughly 25 to 30 p per kWh, plus a flat daily standing charge. This lets you compare a kettle and an oven, decide whether an old boiler costs more to run than a new one, and read a real bill in pence and pounds.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'challenge',
  prerequisites: ['physics-energy-power'],
  curriculum: {
    ks3Objective:
      'Domestic fuel bills, fuel use and costs; kilowatt-hour as a unit of energy used by appliances; daily and annual costs in pence and pounds at UK tariffs.',
    awardingBodies: {
      aqa: '4.2.4 Energy transfers and the National Grid; energy in kilowatt-hours and domestic cost (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.15 Energy in kilowatt-hours; cost of electricity at unit price (GCSE Physics 1PH0)',
      ocr: 'P1.3 Cost of domestic electricity; energy in kWh and unit price in pence per kWh (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'peec-scene-bill-page',
      title: 'Reading a Manchester Electricity Bill',
      type: 'labelled-diagram',
      instructions:
        'Tap each row of the bill to see what "units", "unit price" and "standing charge" really mean on a UK statement.',
      data: {
        viewBox: '0 0 800 400',
        svg: BILL_PAGE_SVG,
        hotspots: [
          {
            id: 'peec-bill-units',
            x: 50,
            y: 36,
            label: 'Units used = energy in kWh',
            description:
              'A "unit" on a UK bill is one kilowatt-hour (kWh), the energy a 1 kW appliance uses in 1 hour. This Manchester home used 320 kWh in March, the same as 320 hours of a 1 kW heater.',
          },
          {
            id: 'peec-bill-unit-price',
            x: 50,
            y: 45,
            label: 'Unit price = pence per kWh',
            description:
              'The unit price is pence per kWh, not pence per minute and not pence per appliance use. Here it is 28 p / kWh, which is a typical 2026 UK rate.',
          },
          {
            id: 'peec-bill-energy-charge',
            x: 50,
            y: 54,
            label: 'Energy charge = units x unit price',
            description:
              'Multiply units by unit price to get the energy charge in pence: 320 x 28 = 8960 p, which is £89.60. Divide pence by 100 to get pounds.',
          },
          {
            id: 'peec-bill-standing',
            x: 50,
            y: 63,
            label: 'Standing charge sits on top',
            description:
              'The standing charge is a flat daily fee for being connected to the grid. You pay it whether you use any energy or not. It is added to the energy charge to give the total bill.',
          },
        ],
      },
    },
    {
      id: 'peec-scene-appliance-panel',
      title: 'How Much Energy a Day in a UK Home',
      type: 'labelled-diagram',
      instructions:
        'Tap each appliance row to see how its power in kW and daily run time combine to give an energy use in kWh.',
      data: {
        viewBox: '0 0 800 400',
        svg: APPLIANCE_PANEL_SVG,
        hotspots: [
          {
            id: 'peec-appliance-kettle',
            x: 23,
            y: 36,
            label: 'Kettle: 2.4 kW x 0.1 h = 0.24 kWh',
            description:
              'A kettle is high power but used briefly. 2.4 kW for 6 minutes (0.1 h) uses 0.24 kWh. At 28 p / kWh that is 0.24 x 28 ≈ 6.7 p per day, or about £24 a year if used every day.',
          },
          {
            id: 'peec-appliance-oven',
            x: 23,
            y: 45,
            label: 'Oven: 3 kW x 0.5 h = 1.5 kWh',
            description:
              'A 3 kW electric oven on for half an hour uses 1.5 kWh, or about 42 p at 28 p / kWh. The oven runs for longer than the kettle, so its daily energy is far higher.',
          },
          {
            id: 'peec-appliance-led',
            x: 23,
            y: 54,
            label: 'LED bulb: 0.008 kW x 5 h = 0.04 kWh',
            description:
              'An 8 W LED is 0.008 kW. Over 5 hours that is 0.04 kWh, or about 1.1 p. Modern LEDs are cheap to run, but the power must be written in kW (not watts) before multiplying by the unit price in p / kWh.',
          },
          {
            id: 'peec-appliance-total',
            x: 50,
            y: 86,
            label: 'Total day = sum of all rows',
            description:
              'Add up the kWh column for all five appliances: 0.24 + 1.5 + 0.04 + 2.1 + 0.3 = 4.18 kWh. At 28 p / kWh that is about £1.17 of energy charge for the day.',
          },
        ],
      },
    },
    {
      id: 'peec-scene-boiler-comparison',
      title: 'Old Boiler vs New Boiler in Cardiff',
      type: 'labelled-diagram',
      instructions:
        'Tap each panel to compare the daily and yearly cost of two electric boilers in the same Cardiff home.',
      data: {
        viewBox: '0 0 800 400',
        svg: BOILER_COMPARISON_SVG,
        hotspots: [
          {
            id: 'peec-boiler-old',
            x: 28,
            y: 50,
            label: 'Old boiler: 12 kW for 2 h / day',
            description:
              'The old boiler uses 12 x 2 = 24 kWh a day. At 28 p / kWh that is 672 p, or £6.72 a day. Over a year of daily use that is about £2453.',
          },
          {
            id: 'peec-boiler-new',
            x: 72,
            y: 50,
            label: 'New boiler: 9 kW for 2 h / day',
            description:
              'The new boiler uses 9 x 2 = 18 kWh a day. At 28 p / kWh that is 504 p, or £5.04 a day. Over a year that is about £1840.',
          },
          {
            id: 'peec-boiler-saving',
            x: 50,
            y: 88,
            label: 'Annual saving ≈ £613',
            description:
              'Yearly cost falls from about £2453 to about £1840, a saving near £613. The standing charge is the same flat daily fee for both boilers, so it cancels out of the comparison.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'peec-worked-1',
      title: 'A Sheffield household: cost of running the kettle for a year',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A Sheffield household uses a 2.4 kW kettle for 0.25 h a day (15 minutes total of boiling water). Their smart meter reads a unit price of 28 p / kWh. We want the daily cost in pence and the annual cost in pounds.',
        },
        {
          explanation:
            'Check the units. Power is already in kW, time is already in hours, and the unit price is in pence per kWh. The three units line up, so no conversion is needed.',
        },
        {
          explanation:
            'Write the rule: cost in pence = power (kW) x time (h) x unit price (p / kWh).',
          maths: 'cost = P x t x rate',
        },
        {
          explanation: 'Substitute the three numbers for one day.',
          maths: 'cost = 2.4 x 0.25 x 28',
        },
        {
          explanation: 'Evaluate the daily cost.',
          maths: 'cost = 16.8 p / day',
        },
        {
          explanation:
            'Scale up to a year by multiplying by 365 days, then divide by 100 to turn pence into pounds.',
          maths: '16.8 x 365 = 6132 p ≈ £61',
        },
        {
          explanation:
            'State the answer. The kettle costs about 16.8 p a day, or roughly £61 a year, at a 28 p / kWh tariff. The standing charge is a separate flat fee that does not depend on how often the kettle is used.',
        },
      ],
    },
    {
      id: 'peec-worked-2',
      title: 'A Cardiff oven: cost of one half-hour roast',
      steps: [
        {
          explanation:
            'Pick out the three quantities. A Cardiff home uses a 3 kW electric oven for 0.5 h (half an hour) at a unit price of 28 p / kWh. We want the cost of running the oven for that one session.',
        },
        {
          explanation:
            'Check the units. Power 3 kW, time 0.5 h, unit price 28 p / kWh. Multiplying kW x h gives energy in kWh, and kWh x (p / kWh) gives pence.',
        },
        {
          explanation:
            'Write the rule.',
          maths: 'cost = P x t x rate',
        },
        {
          explanation: 'Substitute.',
          maths: 'cost = 3 x 0.5 x 28',
        },
        {
          explanation: 'Evaluate.',
          maths: 'cost = 42 p',
        },
        {
          explanation:
            'State the answer. The oven costs 42 p (£0.42) for one half-hour session. If the family roasts twice a week, that is about 42 x 2 x 52 = 4368 p ≈ £44 a year just for the oven.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'peec-q1',
      type: 'multiple-choice',
      stem: 'What does a "unit" on a UK electricity bill measure?',
      tier: 'core',
      options: [
        'A unit of power, in watts.',
        'A unit of energy, equal to one kilowatt-hour (kWh).',
        'A unit of time, equal to one hour.',
        'A unit of cost, equal to one pound.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'peec-mis-kwh-is-power',
      hint: 'On a bill, "1 unit" is the energy a 1 kW appliance uses in 1 hour.',
    },
    {
      id: 'peec-q2',
      type: 'multiple-choice',
      stem: 'Which formula gives the cost in pence of running an appliance?',
      tier: 'core',
      options: [
        'cost (p) = power (W) x time (s) x unit price (p / kWh).',
        'cost (p) = power (kW) x time (h) x unit price (p / kWh).',
        'cost (p) = power (kW) + time (h) + unit price.',
        'cost (p) = energy (J) x unit price.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'peec-mis-joules-times-pence',
      hint: 'Multiply power in kW by time in hours, then by the unit price in p / kWh.',
    },
    {
      id: 'peec-q3',
      type: 'multiple-choice',
      stem: 'A unit price is quoted as "28 p / kWh". What does the "/ kWh" mean?',
      tier: 'core',
      options: [
        'Per kettle use.',
        'Per minute of running.',
        'Per kilowatt-hour of energy used.',
        'Per kilometre.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peec-mis-per-minute',
      hint: 'The denominator on the unit price is the same kWh that appears on the bill as "units".',
    },
    {
      id: 'peec-q4',
      type: 'numeric-entry',
      stem: 'A 2 kW heater runs for 3 hours in a Sheffield flat. How much energy does it use, in kWh?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'kWh',
      xpValue: 10,
      hint: 'Energy in kWh = power (kW) x time (h).',
    },
    {
      id: 'peec-q5',
      type: 'numeric-entry',
      stem: 'A Cardiff home uses 1.5 kWh on the oven in one session. At 28 p / kWh, how much does that session cost, in pence?',
      tier: 'core',
      correctAnswer: 42,
      unit: 'p',
      xpValue: 10,
      hint: 'Cost in pence = energy in kWh x unit price in p / kWh.',
    },
    {
      id: 'peec-q6',
      type: 'multiple-choice',
      stem: 'A Manchester bill shows a "standing charge" of 53 p per day. What does this charge pay for?',
      tier: 'core',
      options: [
        'The energy used by the household that day.',
        'A flat daily fee for being connected to the grid, paid whether energy is used or not.',
        'The cost of one kettle boil.',
        'The cost of the meter itself.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'peec-mis-standing-charge',
      hint: 'The standing charge is a flat daily fee separate from the energy charge.',
    },
    {
      id: 'peec-q7',
      type: 'multiple-choice',
      stem: 'A 100 W bulb runs for 10 hours. A 1000 W heater runs for 1 hour. Which uses more energy?',
      tier: 'core',
      options: [
        'The bulb, because 10 hours is longer.',
        'The heater, because 1000 W is bigger.',
        'They use the same energy: 1 kWh each.',
        'Neither uses any energy unless they are on at the same time.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peec-mis-feeling-powerful',
      hint: 'Convert each to kW first, then multiply by hours. 0.1 x 10 and 1 x 1 are both 1 kWh.',
    },
    {
      id: 'peec-q8',
      type: 'numeric-entry',
      stem: 'A 2.4 kW kettle runs for 0.25 h a day in a Sheffield home. At a 28 p / kWh tariff, what is the daily cost in pence?',
      tier: 'confident',
      correctAnswer: 16.8,
      unit: 'p',
      xpValue: 15,
      hint: 'cost = P x t x rate = 2.4 x 0.25 x 28.',
    },
    {
      id: 'peec-q9',
      type: 'numeric-entry',
      stem: 'A Cardiff prepay meter charges 30 p / kWh. A 3 kW oven runs for 0.5 h. What is the cost of that session, in pence?',
      tier: 'confident',
      correctAnswer: 45,
      unit: 'p',
      xpValue: 15,
      hint: 'cost = P x t x rate = 3 x 0.5 x 30.',
    },
    {
      id: 'peec-q10',
      type: 'numeric-entry',
      stem: 'A washing machine is rated 2.1 kW and runs for 1 hour a day on average. At 28 p / kWh, what is the annual energy charge in pounds? Round to the nearest pound.',
      tier: 'confident',
      correctAnswer: 215,
      unit: '£',
      xpValue: 15,
      hint: 'Daily cost in pence = 2.1 x 1 x 28 = 58.8 p. Multiply by 365 and divide by 100.',
    },
    {
      id: 'peec-q11',
      type: 'multiple-choice',
      stem: 'An 8 W LED bulb runs for 5 hours a day in a Manchester home. The unit price is 28 p / kWh. What is the daily cost in pence?',
      tier: 'confident',
      options: [
        '1.12 p (0.008 kW x 5 h x 28 p / kWh).',
        '11.2 p (0.08 kW x 5 h x 28 p / kWh).',
        '112 p (8 kW x 5 h x 28 p / kWh treating watts as kilowatts).',
        '1120 p (8 W x 5 h x 28 p / kWh with no conversion).',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'peec-mis-w-to-kw',
      hint: '8 W = 0.008 kW. cost = 0.008 x 5 x 28.',
    },
    {
      id: 'peec-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes that a 60 W bulb is "0.6 kW because you divide by 100". What is the right conversion?',
      tier: 'confident',
      options: [
        '0.6 kW. The pupil is correct.',
        '6 kW. You multiply by 100.',
        '0.06 kW. To turn watts into kilowatts, divide by 1000, not 100.',
        '600 kW. You multiply by 10.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'peec-mis-w-to-kw',
      hint: '1 kW = 1000 W, so divide watts by 1000.',
    },
    {
      id: 'peec-q13',
      type: 'multiple-choice',
      stem: 'A Cardiff smart meter shows that a 2 kW electric heater has run for 4 hours. At 25 p / kWh, what is the energy charge?',
      tier: 'confident',
      options: [
        '8 p.',
        '25 000 p.',
        '500 p (£5).',
        '200 p (£2).',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Energy = 2 x 4 = 8 kWh. Cost = 8 x 25 = 200 p.',
    },
    {
      id: 'peec-q14',
      type: 'spot-misconception',
      stem: 'Priya says, "Power and energy are the same thing on a bill. A 1 kW kettle and a 1 kWh kettle would cost the same to run."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. kW and kWh are interchangeable on a bill.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. kW is the power (the rate of energy use). kWh is the energy used, which is power times time. The bill charges for kWh, not kW.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'peec-mis-kwh-is-power',
    },
    {
      id: 'peec-q15',
      type: 'multiple-choice',
      stem: 'A pupil writes: "My kettle uses 0.24 kWh. At 28 p / kWh, the cost is 0.24 x 28 x 3 600 000 = 24 192 000 p." What has gone wrong?',
      tier: 'confident',
      options: [
        'The pupil multiplied by joules per kWh (3 600 000) on top of the cost. The 3 600 000 should only be used when converting kWh to joules, not when finding cost.',
        'The pupil divided when they should have multiplied.',
        'The pupil used the wrong unit price; it should be 280 p / kWh.',
        'The maths is fine, this is the real cost of one kettle boil.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'peec-mis-joules-times-pence',
      hint: 'The unit price is already in p / kWh. Multiply kWh by p / kWh to get pence directly.',
    },
    {
      id: 'peec-q16',
      type: 'numeric-entry',
      stem: 'A Cardiff home runs an old 12 kW electric boiler for 2 h a day. At 28 p / kWh, what is the daily energy cost in pounds? Give your answer to 2 decimal places.',
      tier: 'challenge',
      correctAnswer: 6.72,
      unit: '£',
      xpValue: 20,
      hint: 'Energy = 12 x 2 = 24 kWh / day. Cost = 24 x 28 = 672 p = £6.72.',
    },
    {
      id: 'peec-q17',
      type: 'numeric-entry',
      stem: 'A Manchester smart meter is fitted by a household that swaps a 12 kW old boiler for a 9 kW new boiler. Both run 2 h / day at 28 p / kWh. What is the annual saving in pounds? Use 365 days. Round to the nearest pound.',
      tier: 'challenge',
      correctAnswer: 613,
      unit: '£',
      xpValue: 20,
      hint: 'Daily saving = (12 - 9) x 2 x 28 = 168 p. Annual = 168 x 365 / 100.',
    },
    {
      id: 'peec-q18',
      type: 'spot-misconception',
      stem: 'Ben says, "A standing charge of 53 p / day means I pay 53 p every time I switch the lights on."',
      tier: 'challenge',
      statements: [
        {
          text: 'Ben is right. The standing charge is per use, not per day.',
          isMisconception: true,
        },
        {
          text: 'Ben is not right. The standing charge is a flat daily fee for being connected to the grid. He pays it once per day whether the lights go on or not.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'peec-mis-standing-charge',
    },
    {
      id: 'peec-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the daily cost of running an appliance from its watt rating.',
      tier: 'challenge',
      items: [
        'Multiply by the daily run time in hours to get the energy in kWh.',
        'Read the power rating in watts from the appliance label.',
        'Multiply the energy in kWh by the unit price in p / kWh to get the daily cost in pence.',
        'Divide the watts by 1000 to get the power in kW.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Read the label, convert W to kW, multiply by hours, then by the unit price.',
    },
    {
      id: 'peec-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A Sheffield household is working out the cost of running a 0.1 kW television for 3 hours a day at 28 p / kWh.',
      tier: 'challenge',
      steps: [
        'List the three quantities: power P = 0.1 kW, time t = 3 h, unit price rate = 28 p / kWh.',
        'Check the units: kW, h and p / kWh line up, so no conversion is needed.',
        'Write the rule: cost in pence = P x t x rate.',
        null,
        'Evaluate: cost = 0.1 x 3 x 28 = 8.4 p / day.',
        'State the answer: the television costs about 8.4 p a day, or roughly £31 a year at this tariff.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the three quantities into the rule: cost = 0.1 x 3 x 28.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that a kWh is a unit of power rather than energy, treating kW and kWh as interchangeable when reading an electricity bill.
    {
      id: 'peec-mis-kwh-is-power',
      description:
        'Treating the kilowatt-hour as a unit of power rather than energy, so kW and kWh look interchangeable on a bill.',
      triggerAnswer: 'kwh-is-power',
      correction:
        'A kilowatt (kW) measures power, the rate of energy use. A kilowatt-hour (kWh) measures energy, equal to a 1 kW appliance running for 1 hour.',
      reExplanation:
        'A 2 kW kettle is rated by its power. Run it for 1 hour and it uses 2 kWh of energy. Run it for 30 minutes and it uses 1 kWh. The "h" on kWh stands for "hour", which is why the unit only makes sense once you also know the time. The bill charges you for the energy in kWh, not the rated power.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates misread the unit price denominator as "per minute" or "per appliance use" instead of "per kilowatt-hour".
    {
      id: 'peec-mis-per-minute',
      description:
        'Reading the unit price as pence per minute or pence per kettle-use rather than pence per kilowatt-hour.',
      triggerAnswer: 'per-minute',
      correction:
        'The unit price is in pence per kWh. Multiply by the energy in kWh, not by the time in minutes or the number of times you use the appliance.',
      reExplanation:
        'If 28 p / kWh meant 28 p per minute, a 1 kW heater would cost £16.80 an hour, which is way off the real cost. A kWh is one unit of energy on the bill, so 28 p / kWh means each unit of energy costs 28 p. Find the energy used in kWh first, then multiply by the unit price to get pence.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates mixed energy in joules with cost in pence per kWh, multiplying by 3 600 000 inside the cost calculation and reaching absurd totals.
    {
      id: 'peec-mis-joules-times-pence',
      description:
        'Multiplying energy in joules by a unit price in pence per kWh, mixing two energy units inside the cost calculation.',
      triggerAnswer: 'joules-times-pence',
      correction:
        'Pick one energy unit. If the unit price is in p / kWh, use energy in kWh, not joules. Use 1 kWh = 3 600 000 J only when you actually need joules.',
      reExplanation:
        'A 2.4 kW kettle run for 0.1 h uses 0.24 kWh. At 28 p / kWh the cost is 0.24 x 28 ≈ 6.7 p. If you wrongly converted 0.24 kWh into 864 000 J and then multiplied by 28 p / kWh, you would get a six-figure number of pence, which is clearly wrong. Match the energy unit to the unit price.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates compared a 100 W bulb on for 10 h with a 1000 W heater on for 1 h and assumed the heater must cost more because it "feels more powerful".
    {
      id: 'peec-mis-feeling-powerful',
      description:
        'Assuming a higher-power appliance must cost more to run than a lower-power one, regardless of how long each is on.',
      triggerAnswer: 'feeling-powerful',
      correction:
        'Cost depends on the energy used, which is power times time. A 100 W bulb on for 10 h and a 1000 W heater on for 1 h both use 1 kWh.',
      reExplanation:
        'Power tells you the rate of energy use, not the total. A 1000 W heater feels stronger because it transfers more each second, but if you only run it for 1 hour the total energy is 1 kWh. A 100 W bulb run for 10 hours also uses 1 kWh. At the same unit price both cost the same on the bill.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates converted watts to kilowatts by dividing by 100 or by subtracting 100, missing the factor of 1000 between the two units.
    {
      id: 'peec-mis-w-to-kw',
      description:
        'Converting watts to kilowatts by dividing by 100 (or by adding / subtracting 100) instead of dividing by 1000.',
      triggerAnswer: 'w-to-kw',
      correction:
        'The prefix "kilo" means a thousand, so 1 kW = 1000 W. To turn watts into kilowatts, divide by 1000.',
      reExplanation:
        'A 60 W bulb is 60 / 1000 = 0.06 kW, not 0.6 kW. An 8 W LED is 8 / 1000 = 0.008 kW. Inside the cost formula, power has to be in kW for the units to match the p / kWh price, so a factor-of-100 error here multiplies your cost by 10. Always check that watts have been divided by a thousand before plugging into the formula.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates ignored the standing charge on a bill or treated it as a per-use fee, leading to wrong totals on bill-reading questions.
    {
      id: 'peec-mis-standing-charge',
      description:
        'Ignoring the standing charge on a bill, or treating it as a per-use fee, rather than a flat daily fee for being connected to the grid.',
      triggerAnswer: 'standing-charge',
      correction:
        'The standing charge is a flat daily fee, paid once per day no matter how much energy is used. Add it on top of the energy charge to get the total bill.',
      reExplanation:
        'A standing charge of 53 p / day adds the same amount every day, even on a day with no energy used. Over 31 days that is 53 x 31 = 1643 p, or £16.43, separate from the energy charge. It cannot be reduced by using less energy. To compare tariffs honestly, look at both the unit price and the standing charge.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyElectricityCostZoneNodes = [energyElectricityCost]
