import type { SkillNode } from '@/types/content'

const GRID_CHAIN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">From Drax in Yorkshire to a Manchester kitchen</text>

    <!-- Power station -->
    <rect x="40" y="120" width="120" height="100" />
    <text x="100" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Drax power</text>
    <text x="100" y="172" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">station</text>
    <text x="100" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">generates at</text>
    <text x="100" y="215" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">25 kV</text>

    <!-- Step-up transformer -->
    <line x1="160" y1="170" x2="200" y2="170" />
    <circle cx="225" cy="170" r="22" />
    <circle cx="255" cy="170" r="22" />
    <text x="240" y="120" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Step-up</text>
    <text x="240" y="135" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">transformer</text>
    <text x="240" y="215" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">25 kV to 400 kV</text>

    <!-- Pylons -->
    <line x1="277" y1="170" x2="320" y2="170" />
    <polygon points="340,170 320,140 360,140" stroke="currentColor" fill="none" />
    <line x1="340" y1="170" x2="340" y2="200" />
    <polygon points="420,170 400,140 440,140" stroke="currentColor" fill="none" />
    <line x1="420" y1="170" x2="420" y2="200" />
    <polygon points="500,170 480,140 520,140" stroke="currentColor" fill="none" />
    <line x1="500" y1="170" x2="500" y2="200" />
    <line x1="340" y1="155" x2="500" y2="155" />
    <text x="420" y="105" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Pylons across the Pennines</text>
    <text x="420" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">400 kV transmission</text>

    <!-- Step-down transformer -->
    <line x1="500" y1="170" x2="540" y2="170" />
    <circle cx="565" cy="170" r="22" />
    <circle cx="595" cy="170" r="22" />
    <text x="580" y="120" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Step-down</text>
    <text x="580" y="135" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">substations</text>
    <text x="580" y="215" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">400 kV to 230 V</text>

    <!-- House -->
    <line x1="617" y1="170" x2="660" y2="170" />
    <rect x="660" y="150" width="80" height="70" />
    <polygon points="660,150 700,115 740,150" fill="none" />
    <text x="700" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Manchester</text>
    <text x="700" y="210" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">home, 230 V</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The National Grid moves electrical energy from power stations to homes and industry across the UK.</text>
  </g>
`

const HIGH_VS_LOW_VOLTAGE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Why pylons run at high voltage</text>

    <!-- Left panel: low voltage -->
    <rect x="40" y="70" width="340" height="270" />
    <text x="210" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">If pylons ran at low voltage</text>
    <text x="210" y="135" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same energy means</text>
    <text x="210" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">large current in the cables</text>

    <!-- Squiggly heat wave -->
    <path d="M 80 200 Q 100 180 120 200 T 160 200 T 200 200 T 240 200 T 280 200 T 320 200" />
    <text x="210" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Cables heat up a lot</text>
    <text x="210" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Lots of energy lost as heat</text>
    <text x="210" y="290" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wasteful, expensive</text>

    <!-- Right panel: high voltage -->
    <rect x="420" y="70" width="340" height="270" />
    <text x="590" y="100" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Real grid at 400 kV</text>
    <text x="590" y="135" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same energy means</text>
    <text x="590" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">small current in the cables</text>

    <line x1="460" y1="200" x2="720" y2="200" />
    <text x="590" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Cables stay much cooler</text>
    <text x="590" y="250" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Very little energy lost as heat</text>
    <text x="590" y="290" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Efficient transmission</text>

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">High voltage means low current, which means much smaller heating losses in the cables.</text>
  </g>
`

const UK_MAP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Three UK generation sites feeding the grid</text>

    <!-- UK outline (very rough) -->
    <path d="M 350 80 Q 380 70 420 90 Q 460 100 480 140 Q 500 180 510 230 Q 515 280 490 320 Q 460 340 420 345 Q 380 350 350 340 Q 320 330 305 290 Q 295 250 305 210 Q 315 170 330 130 Q 340 100 350 80 Z" />

    <!-- Hornsea offshore wind, North Sea -->
    <circle cx="495" cy="180" r="9" fill="currentColor" />
    <text x="555" y="170" font-size="12" font-weight="700" stroke="none" fill="currentColor">Hornsea</text>
    <text x="555" y="185" font-size="11" stroke="none" fill="currentColor">offshore wind</text>
    <text x="555" y="200" font-size="11" stroke="none" fill="currentColor">(North Sea)</text>
    <line x1="486" y1="180" x2="420" y2="220" />

    <!-- Hinkley Point nuclear, Somerset -->
    <circle cx="365" cy="295" r="9" fill="currentColor" />
    <text x="160" y="285" font-size="12" font-weight="700" stroke="none" fill="currentColor">Hinkley Point</text>
    <text x="160" y="300" font-size="11" stroke="none" fill="currentColor">nuclear</text>
    <text x="160" y="315" font-size="11" stroke="none" fill="currentColor">(Somerset)</text>
    <line x1="356" y1="293" x2="400" y2="240" />

    <!-- Dinorwig pumped hydro, north Wales -->
    <circle cx="335" cy="225" r="9" fill="currentColor" />
    <text x="155" y="215" font-size="12" font-weight="700" stroke="none" fill="currentColor">Dinorwig</text>
    <text x="155" y="230" font-size="11" stroke="none" fill="currentColor">pumped hydro</text>
    <text x="155" y="245" font-size="11" stroke="none" fill="currentColor">(north Wales)</text>
    <line x1="344" y1="225" x2="390" y2="225" />

    <!-- Grid hub -->
    <circle cx="410" cy="230" r="14" fill="currentColor" />
    <text x="410" y="234" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">grid</text>

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">All three sites feed electrical energy into the same grid, which then carries it to homes and industry.</text>
  </g>
`

export const energyNationalGrid: SkillNode = {
  id: 'physics-energy-national-grid',
  title: 'The National Grid',
  description:
    'The National Grid is the network of wires, pylons and substations that moves electrical energy across the UK from where it is generated to where it is used. Power stations generate at roughly 25 kV. Step-up transformers raise the voltage to 275 kV or 400 kV for the long-distance pylon network, because high voltage means low current and that means cables waste much less energy as heat. Near towns and homes, step-down transformers reduce the voltage back to 230 V for the mains in a Leeds flat or a Manchester kitchen. The grid links sites such as Drax biomass in Yorkshire, Hornsea offshore wind in the North Sea, Dinorwig pumped hydro in north Wales and Hinkley Point nuclear in Somerset.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'challenge',
  prerequisites: ['physics-energy-uk-mix-renewables'],
  curriculum: {
    ks3Objective:
      'Energy transferred from power stations to homes and industry; generation, transmission at high voltage and distribution; qualitative role of transformers in efficient transmission across the UK.',
    awardingBodies: {
      aqa: '4.2.4 The National Grid; step-up and step-down transformers (qualitative at KS3) (GCSE Physics 8463)',
      edexcel:
        'Topic 10.5 The National Grid; transmission and distribution at high voltage (GCSE Physics 1PH0)',
      ocr: 'P4.3 The National Grid; generation, transmission, distribution; role of transformers (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'peng-scene-grid-chain',
      title: 'Drax to a Manchester Kitchen',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the chain of voltages from Drax power station in Yorkshire to a Manchester home.',
      data: {
        viewBox: '0 0 800 400',
        svg: GRID_CHAIN_SVG,
        hotspots: [
          {
            id: 'peng-chain-station',
            x: 12,
            y: 45,
            label: 'Power station: generates at 25 kV',
            description:
              'Drax biomass station in Yorkshire generates electrical energy at about 25 kV. That is high for a household, but far too low to send across the country without large heating losses.',
          },
          {
            id: 'peng-chain-stepup',
            x: 30,
            y: 45,
            label: 'Step-up transformer: 25 kV to 400 kV',
            description:
              'A step-up transformer raises the voltage from 25 kV to 400 kV. Raising the voltage drops the current for the same amount of energy each second, which keeps the long pylon lines efficient.',
          },
          {
            id: 'peng-chain-pylons',
            x: 52,
            y: 30,
            label: 'Pylons across the Pennines at 400 kV',
            description:
              'Tall steel pylons carry the cables at 400 kV across the Pennines. Because the current is small, only a little energy is lost as heat in the wires over long distances.',
          },
          {
            id: 'peng-chain-stepdown',
            x: 72,
            y: 45,
            label: 'Step-down substations: 400 kV to 230 V',
            description:
              'Near towns, a chain of step-down transformers reduces the voltage in stages: 400 kV to 132 kV, then 33 kV, then 11 kV, then 230 V for the mains in your home.',
          },
          {
            id: 'peng-chain-home',
            x: 88,
            y: 45,
            label: 'Manchester home: 230 V mains',
            description:
              'A kettle in a Manchester kitchen plugs into a 230 V socket. The energy in the kettle began life as biomass at Drax and travelled through three voltage levels to reach the kitchen.',
          },
        ],
      },
    },
    {
      id: 'peng-scene-high-vs-low-voltage',
      title: 'Why High Voltage in the Pylons',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to compare what would happen if the grid ran at low voltage versus how the real grid uses high voltage.',
      data: {
        viewBox: '0 0 800 400',
        svg: HIGH_VS_LOW_VOLTAGE_SVG,
        hotspots: [
          {
            id: 'peng-low-voltage',
            x: 26,
            y: 50,
            label: 'Low voltage means large current',
            description:
              'If the grid carried the same energy each second at low voltage, the current in the cables would be large. Large current means a lot of heating in the wires, and a lot of energy lost.',
          },
          {
            id: 'peng-high-voltage',
            x: 74,
            y: 50,
            label: 'High voltage means small current',
            description:
              'At 400 kV the current needed to carry the same energy is much smaller. Smaller current means much less heating in the cables, so very little energy is wasted as the energy travels.',
          },
          {
            id: 'peng-result',
            x: 50,
            y: 92,
            label: 'Result: efficient transmission',
            description:
              'High voltage transmission is not safer in itself, it is more efficient. Pylons stay high and are well insulated to keep the high voltage away from people and roads.',
          },
        ],
      },
    },
    {
      id: 'peng-scene-uk-map',
      title: 'Three UK Sites on the Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how three very different generation sites all feed the same National Grid.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_MAP_SVG,
        hotspots: [
          {
            id: 'peng-uk-hornsea',
            x: 62,
            y: 45,
            label: 'Hornsea offshore wind (North Sea)',
            description:
              'Hornsea is a huge offshore wind farm in the North Sea off the Yorkshire coast. Undersea cables carry the energy ashore, where step-up transformers raise the voltage for the grid.',
          },
          {
            id: 'peng-uk-hinkley',
            x: 46,
            y: 75,
            label: 'Hinkley Point nuclear (Somerset)',
            description:
              'Hinkley Point in Somerset generates a steady output around the clock from nuclear fission. The site connects to the grid through its own step-up transformers and substation.',
          },
          {
            id: 'peng-uk-dinorwig',
            x: 42,
            y: 55,
            label: 'Dinorwig pumped hydro (north Wales)',
            description:
              'Dinorwig in north Wales stores energy in a lake high in the mountains. When the grid needs a boost, water is released through turbines and the site can ramp up its output very rapidly.',
          },
          {
            id: 'peng-uk-grid',
            x: 51,
            y: 58,
            label: 'One grid, many sources',
            description:
              'No matter where the energy is generated, it joins the same network. The grid balances supply and demand across the UK every second of every day.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'peng-worked-1',
      title: 'Energy from a Yorkshire biomass plant to a Leeds kitchen',
      steps: [
        {
          explanation:
            'Start at the source. A biomass unit at Drax in Yorkshire burns wood pellets to boil water, drive a turbine and spin a generator. The generator produces electrical energy at about 25 kV.',
        },
        {
          explanation:
            'Step the voltage up for transmission. A step-up transformer just outside the station raises the voltage from 25 kV to 400 kV. This is the voltage carried on the long pylon lines.',
        },
        {
          explanation:
            'Cross the country on the pylon network. At 400 kV, the current in the cables is small, so only a little energy is lost as heat in the wires as the energy moves towards Leeds.',
        },
        {
          explanation:
            'Step the voltage back down in stages near the town. A regional substation drops the voltage from 400 kV to 132 kV, then to 33 kV. A local substation drops it again to 11 kV.',
        },
        {
          explanation:
            'Step down to 230 V at the street. A small step-down transformer near the street drops the voltage to 230 V, which is what plugs in a Leeds kitchen need.',
        },
        {
          explanation:
            'State the chain. The energy travels: Drax 25 kV, then 400 kV across the country, then 132 kV, then 33 kV, then 11 kV, then 230 V in the home. The grid handles every step.',
        },
      ],
    },
    {
      id: 'peng-worked-2',
      title: 'Why heat losses in pylons fall when the voltage rises',
      steps: [
        {
          explanation:
            'Pick the setting. The grid needs to carry a fixed amount of energy each second from Drax to Manchester along a pylon line. We can choose to do this at low voltage or at high voltage.',
        },
        {
          explanation:
            'Link voltage and current. For the same energy each second, raising the voltage drops the current in the cable. So 400 kV transmission uses a much smaller current than the same job at 25 kV would.',
        },
        {
          explanation:
            'Link current and heating. Cables have some resistance. When current flows through a resistance, the cable heats up. The bigger the current, the more heat is dumped into the cable each second.',
        },
        {
          explanation:
            'Combine the two ideas. High voltage means low current, and low current means very little heating loss in the wires. So choosing 400 kV for the pylons keeps the long lines efficient.',
        },
        {
          explanation:
            'Note the qualitative result for KS3. You do not need the algebra yet. Just keep the chain: high voltage on the pylons means small current in the cables, which means small heating losses.',
        },
        {
          explanation:
            'State the answer. Pylons run at 275 kV or 400 kV because the lower current at high voltage cuts heating losses in the cables, not because high voltage is safer in itself.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'peng-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes what the National Grid does?',
      tier: 'core',
      options: [
        'It generates new electrical energy from thin air.',
        'It stores all the gas used for heating in UK homes.',
        'It is the network of motorways that lorries use to deliver fuel.',
        'It moves electrical energy across the UK from power stations to homes and industry.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Think about what links a power station to a plug socket in your kitchen.',
    },
    {
      id: 'peng-q2',
      type: 'multiple-choice',
      stem: 'What is the job of a step-up transformer at a UK power station?',
      tier: 'core',
      options: [
        'To raise the voltage from about 25 kV up to 275 kV or 400 kV for the transmission lines.',
        'To create new energy ready to send across the country.',
        'To turn alternating current into direct current.',
        'To slow the current down so it cannot leave the station.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'peng-mis-transformer-creates-energy',
      hint: 'Step-up means it raises the voltage going out, not the energy.',
    },
    {
      id: 'peng-q3',
      type: 'multiple-choice',
      stem: 'What is the job of a step-down transformer near a UK home?',
      tier: 'core',
      options: [
        'To raise the voltage so the kettle works.',
        'To convert electrical energy into chemical energy for storage.',
        'To reduce the voltage from the grid down to 230 V for mains sockets.',
        'To change the frequency of the mains from 50 Hz to 60 Hz.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peng-mis-transformer-changes-frequency',
      hint: 'A 230 V socket is what household plugs use. Something has to bring the voltage down to that.',
    },
    {
      id: 'peng-q4',
      type: 'numeric-entry',
      stem: 'What voltage does a typical UK mains socket in a home supply? Give your answer in volts.',
      tier: 'core',
      correctAnswer: 230,
      unit: 'V',
      xpValue: 10,
      misconceptionId: 'peng-mis-grid-is-230v-everywhere',
      hint: 'It is much lower than the voltage on the pylons. Think of the number written next to UK plug sockets.',
    },
    {
      id: 'peng-q5',
      type: 'numeric-entry',
      stem: 'What is the top voltage used on the longest UK pylon transmission lines? Give your answer in kV.',
      tier: 'core',
      correctAnswer: 400,
      unit: 'kV',
      xpValue: 10,
      misconceptionId: 'peng-mis-grid-is-230v-everywhere',
      hint: 'Pylons are tall and well insulated for a reason. The top transmission voltage is four hundred something kV.',
    },
    {
      id: 'peng-q6',
      type: 'multiple-choice',
      stem: 'Which sentence best explains why the grid uses high voltage on the long pylon lines?',
      tier: 'core',
      options: [
        'High voltage means a bigger current in the cables, which makes the cables stronger.',
        'High voltage is safer than low voltage for anyone near the cables.',
        'High voltage means a smaller current in the cables, so less energy is lost as heat in the wires.',
        'High voltage stops the cables rusting.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'peng-mis-high-voltage-just-dangerous',
      hint: 'Think about what high voltage does to the current, and what current does to heating in a wire.',
    },
    {
      id: 'peng-q7',
      type: 'numeric-entry',
      stem: 'Roughly what voltage does a UK power station such as Drax generate at, before any transformer raises it for the pylon network? Give your answer in kV.',
      tier: 'core',
      correctAnswer: 25,
      unit: 'kV',
      xpValue: 10,
      hint: 'It is higher than a kitchen socket, but much lower than the pylon network. Around twenty-something kV.',
    },
    {
      id: 'peng-q8',
      type: 'numeric-entry',
      stem: 'A pylon line near Drax runs at 400 kV. How many volts is that? Give your answer in volts.',
      tier: 'confident',
      correctAnswer: 400000,
      unit: 'V',
      xpValue: 15,
      hint: '1 kV is 1000 V. So 400 kV is 400 multiplied by 1000.',
    },
    {
      id: 'peng-q9',
      type: 'numeric-entry',
      stem: 'A local substation outside Manchester takes in electricity at 11 kV and steps it down to 230 V. By how many volts does the transformer reduce the voltage? Give your answer in volts.',
      tier: 'confident',
      correctAnswer: 10770,
      unit: 'V',
      xpValue: 15,
      hint: 'Convert 11 kV to volts first: 11 kV = 11000 V. Then subtract 230 V.',
    },
    {
      id: 'peng-q10',
      type: 'numeric-entry',
      stem: 'A power station generates electricity at 25 kV. A step-up transformer raises this to 400 kV. By how many volts does the transformer raise the voltage? Give your answer in kV.',
      tier: 'confident',
      correctAnswer: 375,
      unit: 'kV',
      xpValue: 15,
      hint: 'Work it out as 400 kV minus 25 kV.',
    },
    {
      id: 'peng-q11',
      type: 'multiple-choice',
      stem: 'Which option lists the voltages in the right order along the grid, from a UK power station out to a home?',
      tier: 'confident',
      options: [
        '230 V then 11 kV then 400 kV then 25 kV.',
        '25 kV at the station, then stepped up to 400 kV on the pylons, then stepped down to 11 kV, then to 230 V at the home.',
        '400 kV at the station, then stepped down to 230 V on the pylons, then stepped up to 25 kV at the home.',
        '230 V at the station, then 25 kV on the pylons, then 400 kV at the home.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Start low at the station, step up for transmission, step down for homes.',
    },
    {
      id: 'peng-q12',
      type: 'multiple-choice',
      stem: 'A pupil in Leeds writes that "a step-up transformer makes more energy come out than goes in, because the voltage is bigger". What is the best correction?',
      tier: 'confident',
      options: [
        'A step-up transformer really does create energy, that is the point of the grid.',
        'A step-up transformer makes the current bigger as well as the voltage, so the energy doubles.',
        'A step-up transformer destroys energy, so less comes out.',
        'A real transformer is close to 100 percent efficient but never creates energy. The output power is at most the input power; raising the voltage drops the current.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'peng-mis-transformer-creates-energy',
      hint: 'Think about conservation of energy. Transformers swap voltage for current, they do not invent energy.',
    },
    {
      id: 'peng-q13',
      type: 'multiple-choice',
      stem: 'Hornsea offshore wind in the North Sea, Hinkley Point nuclear in Somerset and Dinorwig pumped hydro in north Wales all feed the same UK National Grid. Why does that matter for households?',
      tier: 'confident',
      options: [
        'It does not matter; each site only serves homes very close to it.',
        'It means the grid can balance supply from a mix of sources, so homes in many regions can be powered even if one site is offline.',
        'It means every home in the UK is powered only by nuclear energy.',
        'It means the voltage at every plug is different depending on the source.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'The grid is one connected network across the UK.',
    },
    {
      id: 'peng-q14',
      type: 'spot-misconception',
      stem: 'Adam says, "The whole National Grid runs at 230 V, because that is what comes out of a plug socket in my Manchester kitchen."',
      tier: 'confident',
      statements: [
        {
          text: 'Adam is right. 230 V is the voltage all along the grid, from Drax to the kitchen.',
          isMisconception: true,
        },
        {
          text: 'Adam is not right. The pylon lines run at 275 kV or 400 kV. Step-down transformers reduce the voltage to 230 V only at the end of the chain, near homes.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'peng-mis-grid-is-230v-everywhere',
    },
    {
      id: 'peng-q15',
      type: 'multiple-choice',
      stem: 'A pupil claims, "The same pair of cables on the National Grid carries both AC and DC at random, swapping back and forth." Which sentence is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right; the grid mixes AC and DC freely along every cable.',
        'The UK grid and the mains supply use AC throughout, at 50 Hz. DC is used inside batteries and some devices, but it is not carried by the grid.',
        'The pupil is right; pylons carry DC only.',
        'The pupil is right; transformers convert one to the other along the way.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'peng-mis-ac-dc-mixed-on-grid',
      hint: 'Transformers only work with AC, which is one reason the UK grid uses it from end to end.',
    },
    {
      id: 'peng-q16',
      type: 'spot-misconception',
      stem: 'Lina says, "A transformer changes the frequency of the mains from 50 Hz to 60 Hz on the way to my home."',
      tier: 'challenge',
      statements: [
        {
          text: 'Lina is right. Transformers change the frequency as well as the voltage.',
          isMisconception: true,
        },
        {
          text: 'Lina is not right. UK mains stays at 50 Hz across the grid. Transformers change the voltage; they do not change the frequency.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'peng-mis-transformer-changes-frequency',
    },
    {
      id: 'peng-q17',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Step-up transformers slow down the current, that is why heating losses fall." What is the best correction?',
      tier: 'challenge',
      options: [
        'The pupil is right; current literally moves more slowly through pylons at 400 kV.',
        'Transformers do not slow the speed of charges. They swap voltage for current: raising the voltage drops the size of the current, and a smaller current causes much less heating in the cables.',
        'The pupil is right; only large currents heat up cables, and slow currents stay small.',
        'The pupil is right; slow currents carry less energy.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'peng-mis-stepup-slows-current',
      hint: 'Transformers change voltage and current, not the speed of the charges.',
    },
    {
      id: 'peng-q18',
      type: 'multiple-choice',
      stem: 'Pylons across the Pennines carry energy at 400 kV. A neighbour says, "They run at high voltage to keep walkers safe." What is the best correction?',
      tier: 'challenge',
      options: [
        'The neighbour is right; high voltage cables are safer than low voltage cables when you touch them.',
        'The neighbour is right; voltage and safety always go together.',
        'The neighbour is right; high voltage stops birds landing on the wires.',
        'High voltage cables are dangerous on contact, which is why pylons are tall and well insulated. The reason for choosing 400 kV is efficient transmission, not extra safety.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'peng-mis-high-voltage-just-dangerous',
      hint: 'High voltage on a pylon is chosen for low losses, not for safety.',
    },
    {
      id: 'peng-q19',
      type: 'drag-order',
      stem: 'Put the stages of the grid in the right order, from a UK power station to a 230 V socket in a Manchester home.',
      tier: 'challenge',
      items: [
        'Pylon lines carry the energy across the country at 275 kV or 400 kV.',
        'A power station such as Drax generates electrical energy at about 25 kV.',
        'A step-up transformer raises the voltage from 25 kV to 400 kV.',
        'A step-down substation reduces the voltage in stages to 11 kV.',
        'A local step-down transformer drops the voltage to 230 V for the home.',
      ],
      correctOrder: [1, 2, 0, 3, 4],
      xpValue: 20,
      hint: 'Generate, step up, transmit on pylons, step down, deliver at 230 V.',
    },
    {
      id: 'peng-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why pylons run at 400 kV rather than at a low voltage.',
      tier: 'challenge',
      steps: [
        'State the goal: carry the same amount of electrical energy each second from a power station to homes in another part of the UK.',
        'Note that for the same energy each second, raising the voltage drops the current that must flow in the cables.',
        'Note that cables have some resistance, so when current flows the cable heats up and energy is lost as heat.',
        null,
        'Apply this to the grid: 400 kV gives a small current, so very little energy is wasted as heat in the cables along the route.',
        'State the conclusion: pylons run at high voltage because that keeps the current small, which keeps the heating losses small.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Combine the two ideas: a smaller current in the same cable means much less heating, so much less energy is lost as heat.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that step-up transformers "create extra energy" rather than swapping voltage for current at constant power.
    {
      id: 'peng-mis-transformer-creates-energy',
      description:
        'Believing that a step-up transformer creates extra energy because the output voltage is higher than the input voltage.',
      triggerAnswer: 'transformer-creates-energy',
      correction:
        'A real transformer is close to 100 percent efficient and never creates energy. Raising the voltage drops the current; the output power is at most the input power.',
      reExplanation:
        'Picture a transformer at Drax raising 25 kV to 400 kV. The voltage rises by 16 times, so the current the cables carry falls by about 16 times for the same energy each second. The transformer is a swap, not a magic energy source. Conservation of energy still holds, exactly as it does for kettles and bikes.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that "all the wires in the National Grid are at 230 V" missing the high-voltage transmission stage.
    {
      id: 'peng-mis-grid-is-230v-everywhere',
      description:
        'Thinking the whole National Grid runs at 230 V, missing that pylon lines run at much higher voltages such as 275 kV or 400 kV.',
      triggerAnswer: 'grid-is-230v-everywhere',
      correction:
        'Only the very last stage of the grid runs at 230 V. Long-distance pylon lines run at 275 kV or 400 kV. Step-down transformers near towns reduce the voltage to 230 V for homes.',
      reExplanation:
        'Trace a unit of energy from Drax to a Manchester socket: it leaves the station at about 25 kV, goes up to 400 kV on the pylons, then steps down through 132 kV, 33 kV and 11 kV, and only reaches 230 V at a small transformer near the street. The 230 V you see at home is the bottom of a tall ladder of voltages.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates wrote that "transformers make the current move slower" rather than reducing the size of the current for the same energy.
    {
      id: 'peng-mis-stepup-slows-current',
      description:
        'Believing that a step-up transformer slows down the current, rather than reducing the size of the current for the same energy each second.',
      triggerAnswer: 'stepup-slows-current',
      correction:
        'Transformers do not change the drift speed of charges in a wire. They swap voltage for current; raising the voltage cuts the size of the current, not its speed.',
      reExplanation:
        'When a step-up transformer raises 25 kV to 400 kV at Drax, the cables in the pylon line carry a much smaller current than the cables inside the station. The same energy is being moved each second, but with fewer amps flowing. The benefit is less heating in the long cables, because heating depends on the size of the current.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that the grid uses high voltage "because it is safer for people" missing the efficiency reason.
    {
      id: 'peng-mis-high-voltage-just-dangerous',
      description:
        'Believing the grid uses high voltage on pylons because it is safer for people, rather than because it cuts heating losses in the cables.',
      triggerAnswer: 'high-voltage-just-dangerous',
      correction:
        'High voltage cables are dangerous on contact, which is why pylons are tall and well insulated. The reason for choosing high voltage is efficient transmission, not extra safety.',
      reExplanation:
        'Pylon lines run at 275 kV or 400 kV because raising the voltage drops the current that flows in the cables, and the smaller current means much less energy is lost as heat. Safety measures, such as tall pylons, large clearances and signs, are added to manage the danger of that high voltage. The choice of high voltage is for efficiency.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that "the same pair of wires carries both DC and AC" on the grid, mixing up household batteries with the mains supply.
    {
      id: 'peng-mis-ac-dc-mixed-on-grid',
      description:
        'Thinking the same wires on the National Grid carry both AC and DC, mixing up mains supply with battery-powered devices.',
      triggerAnswer: 'ac-dc-mixed-on-grid',
      correction:
        'The UK mains and the grid use AC at 50 Hz from the power station to the socket. Batteries provide DC inside devices, but they are not part of the grid supply.',
      reExplanation:
        'AC means the current swaps direction back and forth, in the UK 50 times each second. Transformers only work with AC, which is one reason the grid uses it. DC is used inside torches, phones and laptops, often by an adapter that converts the 230 V AC from the wall into a low DC voltage. The grid itself stays AC throughout.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates wrote that "a transformer changes the frequency of the mains" rather than only the voltage.
    {
      id: 'peng-mis-transformer-changes-frequency',
      description:
        'Believing that a transformer changes the frequency of the mains, rather than only changing the voltage.',
      triggerAnswer: 'transformer-changes-frequency',
      correction:
        'A transformer changes the voltage of an AC supply but not its frequency. The UK mains stays at 50 Hz from the power station all the way to a home socket.',
      reExplanation:
        'Step-up and step-down transformers shift the voltage between 25 kV, 400 kV, 11 kV and 230 V along the grid, but the supply still alternates 50 times each second at every stage. Frequency is set by the speed at which the turbines and generators spin at the power station. Transformers do not change that.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyNationalGridZoneNodes = [energyNationalGrid]
