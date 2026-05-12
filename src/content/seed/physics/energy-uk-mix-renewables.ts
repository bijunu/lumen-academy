import type { SkillNode } from '@/types/content'

const UK_MIX_PIE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A rough share of UK electricity generation (typical recent year)</text>

    <!-- Bar chart bars (a labelled bar is easier than a pie in SVG) -->
    <line x1="180" y1="320" x2="700" y2="320" />
    <line x1="180" y1="320" x2="180" y2="100" />

    <!-- Gas, ~37% -->
    <rect x="200" y="170" width="60" height="150" fill="currentColor" />
    <text x="230" y="160" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Gas</text>
    <text x="230" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~37%</text>

    <!-- Wind, ~27% -->
    <rect x="280" y="210" width="60" height="110" fill="currentColor" opacity="0.7" />
    <text x="310" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wind</text>
    <text x="310" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~27%</text>

    <!-- Nuclear, ~15% -->
    <rect x="360" y="260" width="60" height="60" fill="currentColor" />
    <text x="390" y="250" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Nuclear</text>
    <text x="390" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~15%</text>

    <!-- Solar, ~5% -->
    <rect x="440" y="300" width="60" height="20" fill="currentColor" opacity="0.7" />
    <text x="470" y="290" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Solar</text>
    <text x="470" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~5%</text>

    <!-- Biomass, ~5% -->
    <rect x="520" y="300" width="60" height="20" fill="currentColor" opacity="0.7" />
    <text x="550" y="290" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Biomass</text>
    <text x="550" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~5%</text>

    <!-- Hydro, ~2% -->
    <rect x="600" y="312" width="60" height="8" fill="currentColor" opacity="0.7" />
    <text x="630" y="302" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Hydro</text>
    <text x="630" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">~2%</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Values are approximate. The mix shifts each year as more wind farms come online and coal is retired.</text>
  </g>
`

const RENEWABLE_VS_NONRENEWABLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Renewable and non-renewable energy resources</text>

    <!-- Left panel: renewable -->
    <rect x="60" y="80" width="320" height="280" />
    <text x="220" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Renewable</text>
    <text x="220" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Refilled at the rate we use it</text>
    <text x="80" y="180" font-size="13" stroke="none" fill="currentColor">Wind</text>
    <text x="80" y="205" font-size="13" stroke="none" fill="currentColor">Solar</text>
    <text x="80" y="230" font-size="13" stroke="none" fill="currentColor">Hydroelectric</text>
    <text x="80" y="255" font-size="13" stroke="none" fill="currentColor">Tidal</text>
    <text x="80" y="280" font-size="13" stroke="none" fill="currentColor">Geothermal</text>
    <text x="80" y="305" font-size="13" stroke="none" fill="currentColor">Biomass (when replanted)</text>
    <text x="220" y="340" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Not always low-carbon over the full life cycle.</text>

    <!-- Right panel: non-renewable -->
    <rect x="420" y="80" width="320" height="280" />
    <text x="580" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Non-renewable</text>
    <text x="580" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Finite store, used faster than refilled</text>
    <text x="440" y="180" font-size="13" stroke="none" fill="currentColor">Coal</text>
    <text x="440" y="205" font-size="13" stroke="none" fill="currentColor">Natural gas</text>
    <text x="440" y="230" font-size="13" stroke="none" fill="currentColor">Oil</text>
    <text x="440" y="255" font-size="13" stroke="none" fill="currentColor">Nuclear (uranium fuel is finite)</text>
    <text x="580" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Coal, gas and oil are fossil fuels.</text>
    <text x="580" y="325" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Nuclear is low-carbon but not renewable.</text>
  </g>
`

const UK_MAP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="35" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Where some UK energy sites sit</text>

    <!-- Stylised outline of Great Britain -->
    <path d="M 360 80 L 380 110 L 370 150 L 380 200 L 360 240 L 380 280 L 360 320 L 340 350 L 320 320 L 310 280 L 320 240 L 300 220 L 290 200 L 310 170 L 300 140 L 320 110 L 340 90 Z" />

    <!-- Hornsea (North Sea, off Yorkshire coast) -->
    <circle cx="430" cy="180" r="6" fill="currentColor" />
    <text x="445" y="185" font-size="13" font-weight="700" stroke="none" fill="currentColor">Hornsea offshore wind</text>
    <text x="445" y="200" font-size="11" stroke="none" fill="currentColor">North Sea, off Yorkshire</text>

    <!-- Drax (Yorkshire) -->
    <circle cx="370" cy="200" r="6" fill="currentColor" />
    <text x="200" y="205" font-size="13" font-weight="700" stroke="none" fill="currentColor">Drax biomass</text>
    <text x="200" y="220" font-size="11" stroke="none" fill="currentColor">North Yorkshire</text>

    <!-- Dinorwig (North Wales) -->
    <circle cx="320" cy="240" r="6" fill="currentColor" />
    <text x="120" y="245" font-size="13" font-weight="700" stroke="none" fill="currentColor">Dinorwig pumped hydro</text>
    <text x="120" y="260" font-size="11" stroke="none" fill="currentColor">North Wales</text>

    <!-- Hinkley Point (Somerset) -->
    <circle cx="330" cy="310" r="6" fill="currentColor" />
    <text x="100" y="315" font-size="13" font-weight="700" stroke="none" fill="currentColor">Hinkley Point C nuclear</text>
    <text x="100" y="330" font-size="11" stroke="none" fill="currentColor">Somerset</text>

    <!-- Cornwall solar -->
    <circle cx="310" cy="345" r="6" fill="currentColor" />
    <text x="100" y="350" font-size="13" font-weight="700" stroke="none" fill="currentColor">Cornish solar farms</text>
    <text x="100" y="365" font-size="11" stroke="none" fill="currentColor">South-west England</text>

    <text x="400" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A snapshot only. The UK has dozens of wind, solar and hydro sites that feed the grid.</text>
  </g>
`

export const energyUkMixRenewables: SkillNode = {
  id: 'physics-energy-uk-mix-renewables',
  title: 'UK Energy Mix',
  description:
    'Energy resources are the raw stores we tap to power homes, schools and industry. Renewable resources (wind, solar, hydroelectric, tidal, geothermal and biomass when replanted at the rate it is burned) refill at the rate we use them. Non-renewable resources (coal, gas, oil and the uranium fuel for nuclear) are finite stores that took millions of years to form. The UK electricity mix in a typical recent year is roughly 37 per cent gas, 27 per cent wind, 15 per cent nuclear, 5 per cent solar, 5 per cent biomass and 2 per cent hydro, with coal now under 2 per cent. Wind generation keeps growing as offshore farms such as Hornsea expand.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-transfers'],
  curriculum: {
    ks3Objective:
      'Comparing energy values of different foods, of fuels and of various other energy resources; fuels and energy resources, renewable and non-renewable; the UK energy mix and trends towards renewables.',
    awardingBodies: {
      aqa: '4.1.3 National and global energy resources; renewable and non-renewable; UK and global energy mix (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.16-4.18 Energy resources; renewable and non-renewable sources (GCSE Physics 1PH0)',
      ocr: 'P1.3 Energy resources; renewable and non-renewable sources; UK energy mix (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'peumr-scene-uk-mix',
      title: 'The UK Electricity Mix',
      type: 'labelled-diagram',
      instructions:
        'Click each bar to read a typical recent share of UK electricity from that resource.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_MIX_PIE_SVG,
        hotspots: [
          {
            id: 'peumr-mix-gas',
            x: 29,
            y: 50,
            label: 'Gas, around 37 per cent',
            description:
              'Natural gas burned in power stations is still the largest single share of UK electricity. Gas is a fossil fuel, so it is non-renewable and releases carbon dioxide when burned.',
          },
          {
            id: 'peumr-mix-wind',
            x: 39,
            y: 55,
            label: 'Wind, around 27 per cent',
            description:
              'Wind, mostly from offshore farms such as Hornsea in the North Sea, is the largest renewable share. The wind share has grown a lot over the past decade as more turbines come online.',
          },
          {
            id: 'peumr-mix-nuclear',
            x: 49,
            y: 67,
            label: 'Nuclear, around 15 per cent',
            description:
              'Nuclear power stations use uranium fuel. Nuclear is low-carbon in operation, but the uranium store is finite, so nuclear is classed as non-renewable.',
          },
          {
            id: 'peumr-mix-others',
            x: 70,
            y: 78,
            label: 'Solar, biomass and hydro',
            description:
              'Solar (about 5 per cent), biomass such as Drax (about 5 per cent) and hydroelectric (about 2 per cent) round out the mix. Coal, which once led, is now under 2 per cent and being phased out.',
          },
        ],
      },
    },
    {
      id: 'peumr-scene-renew-vs-nonrenew',
      title: 'Renewable and Non-Renewable',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to compare resources that refill at the rate we use them with finite stores that run down.',
      data: {
        viewBox: '0 0 800 400',
        svg: RENEWABLE_VS_NONRENEWABLE_SVG,
        hotspots: [
          {
            id: 'peumr-renew',
            x: 28,
            y: 50,
            label: 'Renewable resources',
            description:
              'Wind, solar, hydroelectric, tidal, geothermal and biomass (when replanted at the rate it is burned) refill at the rate we use them. Some are intermittent (wind and solar), so the grid mixes them with steadier sources.',
          },
          {
            id: 'peumr-nonrenew',
            x: 72,
            y: 50,
            label: 'Non-renewable resources',
            description:
              'Coal, natural gas, oil and uranium fuel for nuclear are finite stores. Coal, gas and oil are fossil fuels and release carbon dioxide when burned. Nuclear is low-carbon in operation but uses up uranium.',
          },
          {
            id: 'peumr-life-cycle',
            x: 50,
            y: 92,
            label: 'A reminder on carbon and life cycle',
            description:
              'Renewable does not always mean zero-carbon. Building turbines, solar panels and dams uses energy and materials. But running them adds little extra carbon, while fossil fuels add a lot every year.',
          },
        ],
      },
    },
    {
      id: 'peumr-scene-uk-sites',
      title: 'UK Energy Sites',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to learn about a real UK site that feeds the National Grid.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_MAP_SVG,
        hotspots: [
          {
            id: 'peumr-hornsea',
            x: 55,
            y: 45,
            label: 'Hornsea wind farm, North Sea',
            description:
              'Hornsea is a cluster of huge offshore wind farms off the Yorkshire coast. Together they generate enough electricity for a few million UK homes. Wind is renewable but intermittent.',
          },
          {
            id: 'peumr-drax',
            x: 46,
            y: 50,
            label: 'Drax biomass, North Yorkshire',
            description:
              'Drax used to burn coal. It now burns wood pellets, which counts as biomass. Biomass is renewable only if the trees are replanted at the rate the pellets are burned.',
          },
          {
            id: 'peumr-dinorwig',
            x: 40,
            y: 60,
            label: 'Dinorwig pumped hydro, north Wales',
            description:
              'Dinorwig pumps water uphill into a mountain reservoir when electricity is cheap, then lets it fall through turbines to generate electricity at peak times. It stores energy rather than making it from scratch.',
          },
          {
            id: 'peumr-hinkley',
            x: 41,
            y: 78,
            label: 'Hinkley Point C nuclear, Somerset',
            description:
              'Hinkley Point C is a nuclear power station under construction in Somerset. It will use uranium fuel to provide steady low-carbon electricity. Nuclear is low-carbon but non-renewable.',
          },
          {
            id: 'peumr-cornwall',
            x: 39,
            y: 88,
            label: 'Solar farms in Cornwall',
            description:
              'Cornwall has many of the UKs sunniest spots, so solar farms there feed a useful slice into the grid. Solar output peaks at midday and is near zero at night.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'peumr-worked-1',
      title: 'Sort six resources as renewable or non-renewable',
      steps: [
        {
          explanation:
            'List the six resources: coal, wind, natural gas, solar, nuclear and hydroelectric. The job is to tag each one as renewable (refilled at the rate we use it) or non-renewable (a finite store).',
        },
        {
          explanation:
            'Pick the easy fossil fuels first. Coal and natural gas formed from buried plants and tiny sea creatures over millions of years. We are using them far faster than that, so both are non-renewable. They are fossil fuels and release carbon dioxide when burned.',
        },
        {
          explanation:
            'Now the obvious renewables. Wind keeps blowing as long as the Sun heats the atmosphere unevenly. Solar arrives as sunlight every day. Hydroelectric uses falling water in the water cycle, which is refilled by rain. All three are renewable.',
        },
        {
          explanation:
            'The trickier case is nuclear. A nuclear power station uses uranium fuel, which is mined from rock. The store of uranium in the ground is finite, so nuclear is classed as non-renewable. Note that nuclear is low-carbon in operation, but low-carbon and renewable are not the same label.',
        },
        {
          explanation:
            'State the answer. Renewable: wind, solar, hydroelectric. Non-renewable: coal, natural gas, nuclear. Three of each.',
        },
      ],
    },
    {
      id: 'peumr-worked-2',
      title: 'Renewable share of a UK day from a generation table',
      steps: [
        {
          explanation:
            'A UK grid summary for one day shows: wind 80 GWh, gas 200 GWh, nuclear 100 GWh, solar 30 GWh, biomass 40 GWh, hydro 20 GWh. We want the total generation, the total renewable generation and the renewable share as a percentage.',
        },
        {
          explanation:
            'Find the total. Add all six numbers. Total = 80 + 200 + 100 + 30 + 40 + 20.',
          maths: 'Total = 470 GWh',
        },
        {
          explanation:
            'Pick out the renewables. Wind, solar, biomass and hydro all count as renewable. Nuclear and gas do not.',
        },
        {
          explanation:
            'Add the renewable rows. Renewable = 80 + 30 + 40 + 20.',
          maths: 'Renewable = 170 GWh',
        },
        {
          explanation:
            'Now the renewable share. Divide renewable by total, then multiply by 100 to turn the fraction into a percentage.',
          maths: 'Share = (170 / 470) x 100',
        },
        {
          explanation: 'Evaluate.',
          maths: 'Share = 36.2 per cent (to 1 d.p.)',
        },
        {
          explanation:
            'State the answer. Out of 470 GWh generated that day, 170 GWh came from renewables, a share of about 36 per cent. The other 64 per cent came from gas and nuclear.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'peumr-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best defines a renewable energy resource?',
      tier: 'core',
      options: [
        'A resource that refills at the rate we use it, such as wind or solar.',
        'Any resource that does not cost money to use.',
        'A resource that releases no carbon dioxide at any stage.',
        'A resource that is stored in batteries.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Renewable is about the rate of refill, not about cost or carbon.',
    },
    {
      id: 'peumr-q2',
      type: 'multiple-choice',
      stem: 'Which of these is NOT a renewable energy resource?',
      tier: 'core',
      options: [
        'Wind',
        'Solar',
        'Natural gas',
        'Hydroelectric',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Natural gas formed underground over millions of years.',
    },
    {
      id: 'peumr-q3',
      type: 'multiple-choice',
      stem: 'Pupils are arguing in class. Which sentence is correct about nuclear power in the UK?',
      tier: 'core',
      options: [
        'Nuclear is renewable, because it does not burn fuel.',
        'Nuclear is a fossil fuel, like coal and gas.',
        'Nuclear is the same as solar power.',
        'Nuclear is low-carbon in operation but non-renewable, because uranium fuel is a finite store.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'peumr-mis-nuclear-renewable',
      hint: 'Low-carbon and renewable are two separate labels. Check which one fits nuclear.',
    },
    {
      id: 'peumr-q4',
      type: 'multiple-choice',
      stem: 'In a typical recent year, which single resource has the largest share of UK electricity?',
      tier: 'core',
      options: [
        'Natural gas',
        'Coal',
        'Solar',
        'Hydroelectric',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'peumr-mis-uk-runs-on-coal',
      hint: 'Gas power stations supply the largest single share. Coal is now a small share.',
    },
    {
      id: 'peumr-q5',
      type: 'numeric-entry',
      stem: 'How many of these six resources are non-renewable: wind, solar, coal, oil, natural gas, hydroelectric? Give a whole number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Tag each one as renewable or non-renewable, then count the non-renewables.',
    },
    {
      id: 'peumr-q6',
      type: 'numeric-entry',
      stem: 'A UK summary for one day shows wind 60 GWh, gas 180 GWh, nuclear 90 GWh, solar 30 GWh, biomass 30 GWh, hydro 10 GWh. What is the total generation for the day, in GWh?',
      tier: 'core',
      correctAnswer: 400,
      unit: 'GWh',
      xpValue: 10,
      hint: 'Add all six numbers.',
    },
    {
      id: 'peumr-q7',
      type: 'numeric-entry',
      stem: 'Using the same UK day (wind 60, gas 180, nuclear 90, solar 30, biomass 30, hydro 10, all in GWh), what is the total renewable generation in GWh? Count wind, solar, biomass and hydro as renewable.',
      tier: 'core',
      correctAnswer: 130,
      unit: 'GWh',
      xpValue: 10,
      hint: 'Add wind + solar + biomass + hydro.',
    },
    {
      id: 'peumr-q8',
      type: 'multiple-choice',
      stem: 'Which sentence best describes the recent trend in the UK electricity mix?',
      tier: 'confident',
      options: [
        'Coal has been almost fully retired; the wind share is rising as more offshore farms come online.',
        'Coal is rising; wind is falling.',
        'The mix has not changed for many decades.',
        'Solar now supplies more than half of UK electricity.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Think Hornsea offshore wind and the closure of old coal stations.',
    },
    {
      id: 'peumr-q9',
      type: 'multiple-choice',
      stem: 'Which UK site is correctly matched to its energy resource?',
      tier: 'confident',
      options: [
        'Hornsea is a coal power station in Yorkshire.',
        'Drax is a tidal power station in the English Channel.',
        'Dinorwig is a pumped hydro site in north Wales.',
        'Hinkley Point C is a wind farm in Somerset.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Dinorwig pumps water uphill and releases it through turbines.',
    },
    {
      id: 'peumr-q10',
      type: 'multiple-choice',
      stem: 'A pupil writes that wind power should supply all UK electricity because it is free. Which is the best reply?',
      tier: 'confident',
      options: [
        'Agree, because wind is renewable.',
        'Wind is renewable and a key part of the mix, but it is intermittent. The grid still needs steady sources for calm days, so it mixes wind with gas, nuclear and other resources.',
        'Wind cannot be used in the UK because the wind is too weak.',
        'Wind power is a fossil fuel.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'peumr-mis-renewable-always-available',
      hint: 'Renewable is great, but "always available" is the bit that breaks.',
    },
    {
      id: 'peumr-q11',
      type: 'numeric-entry',
      stem: 'For the UK day with wind 60, gas 180, nuclear 90, solar 30, biomass 30, hydro 10 (all in GWh, total 400 GWh, renewables 130 GWh), what is the renewable share as a percentage? Give your answer to the nearest whole per cent.',
      tier: 'confident',
      correctAnswer: 33,
      unit: '%',
      xpValue: 15,
      hint: '(130 / 400) x 100, then round.',
    },
    {
      id: 'peumr-q12',
      type: 'numeric-entry',
      stem: 'On a second UK day, total generation is 500 GWh and renewables supply 200 GWh. What is the renewable share as a percentage?',
      tier: 'confident',
      correctAnswer: 40,
      unit: '%',
      xpValue: 15,
      hint: 'Share = (renewable / total) x 100.',
    },
    {
      id: 'peumr-q13',
      type: 'multiple-choice',
      stem: 'A pupil claims that wind turbines are zero-carbon over their whole life cycle. Which sentence is the most careful reply?',
      tier: 'confident',
      options: [
        'Yes, building and running them is zero-carbon.',
        'No, because wind is a fossil fuel.',
        'No, because wind only works at night.',
        'No. Running a wind turbine adds very little carbon, but building the steel tower and the blades uses energy and materials, so the life cycle is low-carbon, not zero-carbon.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'peumr-mis-renewable-zero-carbon',
      hint: 'Think about the steel, glass fibre and shipping that go into making each turbine.',
    },
    {
      id: 'peumr-q14',
      type: 'multiple-choice',
      stem: 'Biomass at Drax uses wood pellets. Under what condition does biomass count as a renewable resource?',
      tier: 'confident',
      options: [
        'Only if the trees are replanted at the same rate as the pellets are burned, so the carbon taken in by new trees balances the carbon released.',
        'Whenever wood is burned, biomass counts as renewable.',
        'Biomass is never renewable.',
        'Only if the wood is burned in a nuclear reactor.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'peumr-mis-biomass-fossil',
      hint: 'Renewable needs the refill rate to match the use rate.',
    },
    {
      id: 'peumr-q15',
      type: 'spot-misconception',
      stem: 'Liam says, "Nuclear power is renewable because it does not burn coal or gas."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Anything that does not burn fossil fuel is renewable.',
          isMisconception: true,
        },
        {
          text: 'Liam is mixing two labels. Nuclear is low-carbon in operation, but uranium fuel is a finite store, so nuclear is non-renewable.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'peumr-mis-nuclear-renewable',
    },
    {
      id: 'peumr-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes that "wind power only works when there is a storm". Which sentence is the best correction?',
      tier: 'challenge',
      options: [
        'Storms are the only winds that turn turbines.',
        'Turbines need lightning to work.',
        'Modern wind turbines turn in steady breezes too; they cut out only in very strong gusts to protect the blades, and produce little when it is calm.',
        'Wind turbines run on petrol when there is no wind.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'peumr-mis-wind-needs-storm',
      hint: 'Turbines have a range of working winds, not just storms.',
    },
    {
      id: 'peumr-q17',
      type: 'numeric-entry',
      stem: 'A village runs on a tiny grid. In one week it uses 7000 kWh of electricity. Solar panels provide 1400 kWh and a small wind turbine provides 2100 kWh. The rest comes from a diesel generator. What share of the week\'s electricity is renewable, as a percentage?',
      tier: 'challenge',
      correctAnswer: 50,
      unit: '%',
      xpValue: 20,
      hint: 'Renewable share = ((1400 + 2100) / 7000) x 100.',
    },
    {
      id: 'peumr-q18',
      type: 'spot-misconception',
      stem: 'Priya says, "The UK still gets most of its electricity from coal, just like Victorian times."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. Coal is still the largest UK source.',
          isMisconception: true,
        },
        {
          text: 'Priya is out of date. Coal has been almost fully phased out of UK electricity and now supplies under 2 per cent; gas and wind are the two largest sources.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'peumr-mis-uk-runs-on-coal',
    },
    {
      id: 'peumr-q19',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the renewable share of a day\'s UK generation from a table of resources.',
      tier: 'challenge',
      items: [
        'Divide renewable generation by total generation, then multiply by 100 to turn the fraction into a percentage.',
        'Add the rows for resources you have classed as renewable to get the renewable generation.',
        'List the resources in the table and tag each one as renewable or non-renewable.',
        'Add all the rows in the table together to get the total generation.',
      ],
      correctOrder: [2, 3, 1, 0],
      xpValue: 20,
      hint: 'Classify first, then sum the totals, then sum the renewables, then divide.',
    },
    {
      id: 'peumr-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the renewable share of a UK day where wind = 80, gas = 200, nuclear = 100, solar = 30, biomass = 40, hydro = 20 (all in GWh).',
      tier: 'challenge',
      steps: [
        'Class wind, solar, biomass and hydro as renewable; gas and nuclear as non-renewable.',
        'Add all six rows for the total: 80 + 200 + 100 + 30 + 40 + 20 = 470 GWh.',
        'Add the renewable rows: 80 + 30 + 40 + 20 = 170 GWh.',
        null,
        'Evaluate: share = (170 / 470) x 100 = 36.2 per cent (to 1 d.p.).',
        'State the answer: about 36 per cent of the day\'s electricity came from renewables.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Write the percentage rule: share = (renewable / total) x 100, then substitute renewable = 170 GWh and total = 470 GWh.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates classed nuclear as renewable, treating "no fossil fuel" as the same as "renewable".
    {
      id: 'peumr-mis-nuclear-renewable',
      description:
        'Classing nuclear power as renewable because it does not burn fossil fuel, missing that uranium fuel is finite.',
      triggerAnswer: 'nuclear-renewable',
      correction:
        'Nuclear is low-carbon in operation but non-renewable. Uranium fuel is mined from a finite store, so it cannot be refilled at the rate we use it.',
      reExplanation:
        'Two separate labels matter here. Low-carbon is about how much carbon dioxide leaves the power station while it runs. Renewable is about the rate at which the resource refills. Nuclear ticks the low-carbon box but not the renewable box, because the uranium in the ground is a finite store. Wind and solar tick both boxes.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates wrote that the UK still gets most of its electricity from coal.
    {
      id: 'peumr-mis-uk-runs-on-coal',
      description:
        'Believing the UK still gets most of its electricity from coal, missing that coal has been almost fully phased out.',
      triggerAnswer: 'uk-runs-on-coal',
      correction:
        'Coal now supplies under 2 per cent of UK electricity. Gas is the largest single share, wind is the largest renewable share, and nuclear is steady at about 15 per cent.',
      reExplanation:
        'In 1990 coal supplied roughly 65 per cent of UK electricity. Since then nearly every coal power station has shut down or switched fuel. Gas now leads the mix, wind has grown rapidly thanks to offshore farms like Hornsea, and nuclear holds about 15 per cent. The mix is moving away from fossil fuels and towards renewables each year.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that biomass is a fossil fuel because it burns and releases carbon dioxide.
    {
      id: 'peumr-mis-biomass-fossil',
      description:
        'Calling biomass a fossil fuel because it burns, missing that the wood used at Drax can be regrown.',
      triggerAnswer: 'biomass-fossil',
      correction:
        'Biomass is renewable only when the trees or crops are replanted at the rate the fuel is burned. Fossil fuels formed over millions of years and cannot be regrown.',
      reExplanation:
        'Drax burns wood pellets that come from managed forests. As long as new trees are planted at the rate the pellets are used, the carbon dioxide released by burning is taken in again by the new trees. That makes biomass renewable in principle. Coal, gas and oil cannot be replaced on any human timescale, so they are non-renewable.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that renewables can be relied on as a single source, missing intermittency and the role of mixed sources.
    {
      id: 'peumr-mis-renewable-always-available',
      description:
        'Assuming a renewable resource is always available, missing that wind and solar are intermittent.',
      triggerAnswer: 'renewable-always-available',
      correction:
        'Wind and solar refill freely, but their output rises and falls with the weather and the time of day. The grid mixes them with steadier sources to keep supply matching demand.',
      reExplanation:
        'A still summer night has near zero solar output and very little wind. The grid still has to supply hospitals, homes and trains. So renewables are partnered with steadier resources such as gas, nuclear, biomass and hydro, plus storage like Dinorwig pumped hydro, to keep supply matching demand at all hours.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that renewables have zero carbon footprint, missing manufacturing emissions.
    {
      id: 'peumr-mis-renewable-zero-carbon',
      description:
        'Claiming all renewables have zero carbon over their full life cycle, missing manufacturing and shipping emissions.',
      triggerAnswer: 'renewable-zero-carbon',
      correction:
        'Renewables are low-carbon, not always zero-carbon. Making turbines, solar panels and dams uses energy and materials, so each has a small life-cycle footprint.',
      reExplanation:
        'A wind turbine is built from steel, concrete and glass-fibre blades. Mining the ore, smelting the steel and shipping the parts all release carbon dioxide. Once running, the turbine adds very little carbon to each kWh of electricity. Over its 20 to 25 year life it offsets many times its own build footprint, but the build is not zero.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote "the UK runs on coal" or "wind only works in storms", treating renewables as gimmicks rather than a real share of the mix.
    {
      id: 'peumr-mis-wind-needs-storm',
      description:
        'Claiming wind turbines only work in storms, missing that they spin in steady breezes and shut down only in very strong gusts.',
      triggerAnswer: 'wind-needs-storm',
      correction:
        'Modern turbines turn in steady winds. They cut out in very strong gusts to protect the blades, and produce little when it is calm. Storms are not the norm for them.',
      reExplanation:
        'A typical UK offshore turbine starts generating once the wind reaches a steady breeze of about 4 m/s and reaches full output around 12 to 15 m/s. Above about 25 m/s it shuts down to protect the gear and blades. Most of its output comes from steady breezes, not storms. Hornsea offshore wind farms can run for many hours at high output on normal windy days.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyUkMixRenewablesZoneNodes = [energyUkMixRenewables]
