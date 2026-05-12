import type { SkillNode } from '@/types/content'

const HOUSE_CROSS_SECTION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Cross section of a UK home with insulation layers</text>

    <!-- Roof / loft -->
    <polygon points="160,120 400,40 640,120" />
    <line x1="180" y1="140" x2="620" y2="140" />
    <rect x="180" y="120" width="440" height="20" />
    <text x="400" y="100" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Loft space</text>
    <text x="400" y="135" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Loft insulation: fibre mat traps air</text>

    <!-- Walls (with cavity) -->
    <rect x="180" y="140" width="20" height="200" />
    <rect x="220" y="140" width="20" height="200" />
    <rect x="560" y="140" width="20" height="200" />
    <rect x="600" y="140" width="20" height="200" />
    <text x="210" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">cavity</text>
    <text x="590" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">cavity</text>
    <text x="400" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Cavity wall: foam fills the gap</text>
    <text x="400" y="220" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">between two brick layers</text>

    <!-- Window (double glazed) -->
    <rect x="340" y="240" width="120" height="80" />
    <line x1="400" y1="240" x2="400" y2="320" />
    <text x="400" y="340" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Double glazing: two panes with a gas layer</text>

    <!-- Floor -->
    <line x1="180" y1="340" x2="620" y2="340" />
    <line x1="180" y1="350" x2="620" y2="350" />
    <text x="400" y="370" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Heat leaks through roof, walls and windows. Insulation slows each path.</text>
  </g>
`

const HEAT_LOSS_ARROWS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Thermal energy loss: before and after insulation</text>

    <!-- Before panel -->
    <rect x="60" y="80" width="320" height="240" />
    <text x="220" y="110" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Before: Cardiff terrace, no insulation</text>

    <!-- House shape -->
    <polygon points="160,180 220,140 280,180" />
    <rect x="170" y="180" width="100" height="80" />

    <!-- Big arrows out -->
    <line x1="220" y1="140" x2="220" y2="100" />
    <polygon points="213,108 220,95 227,108" fill="currentColor" stroke="none" />
    <text x="245" y="125" font-size="11" stroke="none" fill="currentColor">large loss</text>

    <line x1="170" y1="220" x2="120" y2="220" />
    <polygon points="128,213 110,220 128,227" fill="currentColor" stroke="none" />
    <line x1="270" y1="220" x2="320" y2="220" />
    <polygon points="312,213 330,220 312,227" fill="currentColor" stroke="none" />
    <text x="220" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Bills high. House cools rapidly.</text>

    <!-- After panel -->
    <rect x="420" y="80" width="320" height="240" />
    <text x="580" y="110" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">After: loft, cavity wall, double glazing</text>

    <polygon points="520,180 580,140 640,180" />
    <rect x="530" y="180" width="100" height="80" />

    <!-- Small arrows out -->
    <line x1="580" y1="140" x2="580" y2="125" />
    <polygon points="575,128 580,118 585,128" fill="currentColor" stroke="none" />
    <text x="605" y="135" font-size="11" stroke="none" fill="currentColor">small loss</text>

    <line x1="530" y1="220" x2="510" y2="220" />
    <polygon points="518,215 502,220 518,225" fill="currentColor" stroke="none" />
    <line x1="630" y1="220" x2="650" y2="220" />
    <polygon points="642,215 658,220 642,225" fill="currentColor" stroke="none" />
    <text x="580" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Bills lower. House stays warm longer.</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Insulation slows thermal transfer, it does not stop it.</text>
  </g>
`

const FUEL_BILL_COMPARISON_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Thicker insulation lowers the wasted thermal energy</text>

    <!-- Three bars showing wasted thermal power -->
    <text x="160" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">No insulation</text>
    <rect x="120" y="90" width="80" height="200" fill="currentColor" />
    <text x="160" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">600 W wasted</text>
    <text x="160" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">large bill</text>

    <text x="400" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Thin layer</text>
    <rect x="360" y="150" width="80" height="140" fill="currentColor" />
    <text x="400" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">420 W wasted</text>
    <text x="400" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">medium bill</text>

    <text x="640" y="70" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Thick layer</text>
    <rect x="600" y="220" width="80" height="70" fill="currentColor" />
    <text x="640" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">200 W wasted</text>
    <text x="640" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">small bill</text>

    <!-- Baseline -->
    <line x1="80" y1="290" x2="720" y2="290" />

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Thicker fibre traps more still air, slowing thermal transfer through the roof.</text>
  </g>
`

export const energyHomeInsulation: SkillNode = {
  id: 'physics-energy-home-insulation',
  title: 'Heating and Insulating UK Homes',
  description:
    'A heated UK home loses thermal energy to the cooler outside through the roof, the walls and the windows. Insulation slows that transfer. Loft insulation traps still air in a thick fibre mat across the loft floor. Cavity wall insulation fills the air gap between two brick walls with foam, cutting conduction and convection. Double glazing uses two glass panes with a low-density gas trapped between them, slowing conduction through the window. None of these measures stops thermal transfer, they reduce its rate. The result is a warmer home for less gas or electricity, so a smaller fuel bill in GBP.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-efficiency'],
  curriculum: {
    ks3Objective:
      'Other processes that involve energy transfer: changing temperature; reducing unwanted energy transfers by insulation; loft insulation, cavity wall insulation and double glazing in UK homes.',
    awardingBodies: {
      aqa: '4.1.2.1 Reducing unwanted energy transfers; thermal insulation (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.9 Reducing unwanted energy transfers; insulation in buildings (GCSE Physics 1PH0)',
      ocr: 'P1.2 Reducing unwanted energy transfers; loft, cavity wall and double glazing (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pehi-scene-house-section',
      title: 'A Cross Section of a UK Home',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where a UK home loses thermal energy and which insulation layer slows each path.',
      data: {
        viewBox: '0 0 800 400',
        svg: HOUSE_CROSS_SECTION_SVG,
        hotspots: [
          {
            id: 'pehi-loft',
            x: 50,
            y: 30,
            label: 'Loft insulation in the roof space',
            description:
              'Warm air rises, so a lot of thermal energy leaves a home through the roof. A thick fibre mat laid across the loft floor traps still air. Trapped air is a poor conductor, so the rate of thermal transfer through the roof drops.',
          },
          {
            id: 'pehi-cavity',
            x: 28,
            y: 60,
            label: 'Cavity wall insulation between the bricks',
            description:
              'Most homes built after the 1920s have two brick walls with an air gap between them, called a cavity. Filling that cavity with foam reduces conduction and stops air currents from carrying thermal energy across the gap.',
          },
          {
            id: 'pehi-glazing',
            x: 50,
            y: 70,
            label: 'Double glazing in the windows',
            description:
              'A single sheet of glass conducts thermal energy readily. Double glazing uses two panes with a low-density gas like argon trapped between them. The gas layer slows conduction through the window without blocking the view.',
          },
          {
            id: 'pehi-paths',
            x: 50,
            y: 92,
            label: 'Many paths, not one',
            description:
              'Thermal energy escapes through every cool surface. Loft insulation only helps the roof path. To cut the total bill you need to slow each path: roof, walls, windows and draughty doors.',
          },
        ],
      },
    },
    {
      id: 'pehi-scene-arrows',
      title: 'Thermal Loss Before and After',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to compare thermal energy loss from a Cardiff terrace before and after a full insulation retrofit.',
      data: {
        viewBox: '0 0 800 400',
        svg: HEAT_LOSS_ARROWS_SVG,
        hotspots: [
          {
            id: 'pehi-before',
            x: 28,
            y: 50,
            label: 'Before: large arrows of thermal loss',
            description:
              'In an uninsulated terrace, the inside is much warmer than the outside on a winter night. The bigger that temperature difference, the faster thermal energy flows through the roof, walls and windows.',
          },
          {
            id: 'pehi-after',
            x: 72,
            y: 50,
            label: 'After: small arrows of thermal loss',
            description:
              'A loft mat, cavity foam and double glazing slow the rate of thermal transfer along every path. The same boiler now has to top up less thermal energy, so it runs for less time and uses less gas.',
          },
          {
            id: 'pehi-bills',
            x: 50,
            y: 92,
            label: 'Lower wasted thermal energy means a smaller bill',
            description:
              'The gas bill in GBP tracks the thermal energy the boiler has put in. Less wasted energy through the walls and roof means less gas burnt, so the bill is lower for the same indoor temperature.',
          },
        ],
      },
    },
    {
      id: 'pehi-scene-bills',
      title: 'Thicker Layers, Smaller Bills',
      type: 'labelled-diagram',
      instructions:
        'Click each bar to compare wasted thermal power through the roof of a Sheffield semi-detached with different loft layers.',
      data: {
        viewBox: '0 0 800 400',
        svg: FUEL_BILL_COMPARISON_SVG,
        hotspots: [
          {
            id: 'pehi-bar-none',
            x: 20,
            y: 50,
            label: 'No loft insulation: 600 W wasted',
            description:
              'With a bare ceiling, the roof path leaks about 600 W of thermal power on a cold night. The boiler has to replace all of it, which is why the bill is high.',
          },
          {
            id: 'pehi-bar-thin',
            x: 50,
            y: 50,
            label: 'Thin loft mat: 420 W wasted',
            description:
              'A thin loft mat traps some still air, which cuts the rate of thermal transfer. The roof now leaks about 420 W. The bill drops, but not by much.',
          },
          {
            id: 'pehi-bar-thick',
            x: 80,
            y: 50,
            label: 'Thick loft mat: 200 W wasted',
            description:
              'A thicker mat traps a deeper layer of still air, so thermal energy moves through it more slowly. The roof leaks only about 200 W. After a point, adding more thickness gives smaller and smaller extra savings.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pehi-worked-1',
      title:
        'Choosing the best mix of measures for a Victorian terrace in Leeds',
      steps: [
        {
          explanation:
            'Pick out the home and its weak points. The terrace was built in the 1880s, with solid brick walls, single glazed sash windows and a bare loft. Thermal energy escapes through all three paths.',
        },
        {
          explanation:
            'Decide what is possible. A Victorian solid brick wall has no cavity, so cavity wall insulation will not fit. Loft insulation across the loft floor is straightforward. Double glazing can replace each single pane.',
        },
        {
          explanation:
            'Rank the cheapest paths. A loft mat is the cheapest single measure and slows the largest path, the roof. Double glazing every window costs more but slows the window path. Internal solid-wall insulation is the most expensive.',
        },
        {
          explanation:
            'Build the recommendation. Start with loft insulation, then double glazing, then solid-wall insulation later if the budget allows. Each measure slows a different path, so the savings add up rather than overlap.',
        },
        {
          explanation:
            'State the answer. For a Victorian Leeds terrace, the best mix is loft insulation plus double glazing first. Solid-wall insulation comes later. Cavity wall foam does not apply here, because there is no cavity.',
        },
      ],
    },
    {
      id: 'pehi-worked-2',
      title: 'A Cardiff kitchen: fraction of wasted power saved by loft mat',
      steps: [
        {
          explanation:
            'Pick out the numbers. Without loft insulation, the kitchen ceiling leaks 600 W of thermal power on a cold night. After fitting a thick loft mat, the leak drops to 400 W.',
        },
        {
          explanation:
            'Find the power saved. The saving is the difference between before and after.',
          maths: 'saved = 600 - 400 = 200 W',
        },
        {
          explanation: 'Write the fraction saved as a ratio of the original.',
          maths: 'fraction saved = saved / original = 200 / 600',
        },
        {
          explanation: 'Simplify the fraction.',
          maths: '200 / 600 = 1 / 3',
        },
        {
          explanation: 'Convert to a percentage to one significant figure.',
          maths: '1 / 3 = 0.333... = about 33%',
        },
        {
          explanation:
            'State the answer. The loft mat cuts the wasted thermal power by about one third, so about 33% is saved. The same boiler now uses less gas to hold the same kitchen temperature.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pehi-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes what loft insulation does?',
      tier: 'core',
      options: [
        'It creates new thermal energy to warm the home.',
        'It traps still air in a fibre mat, slowing thermal transfer through the roof.',
        'It pushes cold air out of the loft.',
        'It heats the loft to room temperature.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pehi-mis-insulation-creates-energy',
      hint: 'Insulation does not make heat. It slows the rate at which thermal energy leaves.',
    },
    {
      id: 'pehi-q2',
      type: 'multiple-choice',
      stem: 'A pupil says, "Insulation keeps the cold out of the house." Which sentence is the better way to think about it?',
      tier: 'core',
      options: [
        'Insulation slows the rate of thermal transfer in either direction, so a warm home cools more slowly in winter.',
        'Insulation only works one way: cold to warm, never warm to cold.',
        'Insulation works by pushing cold particles back outside.',
        'Insulation only matters in summer, not winter.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pehi-mis-insulation-keeps-cold-out',
      hint: 'Heat flows from hotter to cooler. Insulation slows that flow whichever side is warmer.',
    },
    {
      id: 'pehi-q3',
      type: 'multiple-choice',
      stem: 'Which feature makes double glazing better than single glazing at reducing thermal transfer?',
      tier: 'core',
      options: [
        'The second pane of glass is thicker than a single pane.',
        'The glass is coated with a special heat-making layer.',
        'A trapped layer of low-density gas between the two panes is a poor conductor.',
        'The window frame is made of metal.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pehi-mis-double-pane-thicker',
      hint: 'The clever part is the trapped gas layer between the panes, not the glass itself.',
    },
    {
      id: 'pehi-q4',
      type: 'multiple-choice',
      stem: 'A Cardiff homeowner has loft insulation already, but the rest of the home has none. They want to cut their gas bill further. Which next step is most useful?',
      tier: 'core',
      options: [
        'Add a second layer of loft insulation on top of the first.',
        'Turn the boiler up.',
        'Open the loft hatch in winter.',
        'Fit cavity wall insulation or double glazing, so a different path is slowed.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pehi-mis-loft-only-path',
      hint: 'Thermal energy escapes through walls and windows too. Loft insulation only helps the roof path.',
    },
    {
      id: 'pehi-q5',
      type: 'numeric-entry',
      stem: 'A Cardiff kitchen loses 600 W of thermal power through the ceiling with no loft insulation. After a thick loft mat is fitted, it loses 400 W. What fraction of the wasted power is saved, as a percentage to the nearest whole number?',
      tier: 'core',
      correctAnswer: 33,
      unit: '%',
      xpValue: 10,
      hint: 'Saved = 600 - 400 = 200. Fraction = 200 / 600. Multiply by 100 for a percentage.',
    },
    {
      id: 'pehi-q6',
      type: 'numeric-entry',
      stem: 'A Sheffield semi-detached loses 800 W of thermal power through its roof before any insulation. After a thick loft mat is fitted, it loses 300 W. How many watts have been saved?',
      tier: 'core',
      correctAnswer: 500,
      unit: 'W',
      xpValue: 10,
      hint: 'Saved = before - after = 800 - 300.',
    },
    {
      id: 'pehi-q7',
      type: 'multiple-choice',
      stem: 'A pupil writes that "cavity wall insulation works by stopping any heat moving inside the wall". Which sentence is a better description?',
      tier: 'core',
      options: [
        'It fills the air gap with foam, reducing conduction and stopping air currents from carrying thermal energy across.',
        'It removes heat from the cavity.',
        'It heats the cavity to the same temperature as inside.',
        'It only works on outer walls that face north.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pehi-mis-insulation-creates-energy',
      hint: 'Insulation slows transfer; it does not stop it and does not remove heat.',
    },
    {
      id: 'pehi-q8',
      type: 'numeric-entry',
      stem: 'A Norwich bungalow loses 900 W through its walls before cavity wall insulation, and 540 W after. What fraction of the wall loss has been saved, as a percentage to the nearest whole number?',
      tier: 'confident',
      correctAnswer: 40,
      unit: '%',
      xpValue: 15,
      hint: 'Saved = 900 - 540 = 360. Fraction = 360 / 900 = 0.4. Multiply by 100.',
    },
    {
      id: 'pehi-q9',
      type: 'numeric-entry',
      stem: 'A Glasgow council flat had a window heat loss of 250 W with single glazing. After double glazing, the same window loses 100 W. How many watts have been saved on that window?',
      tier: 'confident',
      correctAnswer: 150,
      unit: 'W',
      xpValue: 15,
      hint: 'Saved = before - after = 250 - 100.',
    },
    {
      id: 'pehi-q10',
      type: 'multiple-choice',
      stem: 'Two pupils argue about loft thickness. Priya says "the thicker the loft mat, the bigger the saving for each extra centimetre". Tom says "after a point, each extra centimetre saves less and less". Who is right?',
      tier: 'confident',
      options: [
        'Priya, because more material always means more saving.',
        'Neither. Loft thickness has no effect.',
        'Tom, because each extra layer slows a path that has already been slowed, so the extra saving shrinks.',
        'Both, because saving and thickness are unrelated.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pehi-mis-thicker-always-better',
      hint: 'Diminishing returns: the first layer slows most of the loss, later layers only trim what is left.',
    },
    {
      id: 'pehi-q11',
      type: 'multiple-choice',
      stem: 'A pupil claims, "Once I fit double glazing, the temperature inside the house drops because the windows feel cold to touch." What is wrong with this claim?',
      tier: 'confident',
      options: [
        'Double glazing only works in summer.',
        'The inner pane stays close to room temperature. Insulation slows the rate of thermal loss, it does not lower the inside temperature.',
        'Single glazing is always warmer.',
        'Double glazing pushes heat outside on purpose.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pehi-mis-insulation-lowers-temp',
      hint: 'Insulation cuts the rate of thermal loss. With the boiler still on, the indoor temperature rises or holds steady.',
    },
    {
      id: 'pehi-q12',
      type: 'multiple-choice',
      stem: 'A Cardiff terrace loses 1200 W of thermal power on a cold night, split as 500 W through the roof, 500 W through the walls and 200 W through the windows. The owner can afford one measure. Which choice cuts the largest single path most cheaply?',
      tier: 'confident',
      options: [
        'Painting the front door.',
        'Buying thicker curtains for the kitchen.',
        'A loft mat across the roof, because it is cheap and the roof path is one of the biggest.',
        'Double glazing the windows.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pehi-mis-loft-only-path',
      hint: 'Match the cheapest measure to the largest path. The roof path here is 500 W and a loft mat is cheap.',
    },
    {
      id: 'pehi-q13',
      type: 'spot-misconception',
      stem: 'Aysha says, "Insulation creates thermal energy because the house feels warmer after we fit it."',
      tier: 'confident',
      statements: [
        {
          text: 'Aysha is right. Insulation generates extra heat.',
          isMisconception: true,
        },
        {
          text: 'Aysha is not right. The boiler still supplies the thermal energy. Insulation slows the rate of loss, so the boiler keeps up more easily and the room feels warmer.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pehi-mis-insulation-creates-energy',
    },
    {
      id: 'pehi-q14',
      type: 'multiple-choice',
      stem: 'A Cardiff homeowner already has loft insulation, cavity wall insulation and double glazing. They are thinking about a second layer of loft mat. Which sentence best describes the likely saving?',
      tier: 'confident',
      options: [
        'The second layer doubles the saving, because each layer is the same.',
        'The second layer would heat the loft directly.',
        'The second layer cancels the first and the saving disappears.',
        'The second layer gives a smaller extra saving than the first, because the roof path is already slowed.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pehi-mis-thicker-always-better',
      hint: 'Diminishing returns: once the easiest losses are cut, each extra layer trims a smaller share.',
    },
    {
      id: 'pehi-q15',
      type: 'numeric-entry',
      stem: 'A Norwich bungalow lost 1000 W of thermal power before any retrofit. After loft insulation it lost 800 W, after cavity wall insulation it lost 500 W, and after double glazing it lost 300 W. What total wattage has been saved across all three measures?',
      tier: 'confident',
      correctAnswer: 700,
      unit: 'W',
      xpValue: 15,
      hint: 'Saved = original - final = 1000 - 300.',
    },
    {
      id: 'pehi-q16',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Double glazing works because the second pane of glass is thicker, so heat cannot get through it." What is the better explanation?',
      tier: 'challenge',
      options: [
        'It is the trapped layer of low-density gas between the panes that slows conduction. The glass thickness matters less.',
        'The pupil is correct as written.',
        'The second pane is made of plastic.',
        'Double glazing only works in homes with cavity walls.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pehi-mis-double-pane-thicker',
      hint: 'The gas layer between the panes is the poor conductor. The panes hold the gas in place.',
    },
    {
      id: 'pehi-q17',
      type: 'spot-misconception',
      stem: 'Marcus says, "After I fit loft insulation, the rooms below should be cooler, because the insulation traps the heat in the loft."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. Loft insulation keeps the heat in the loft, so rooms get cooler.',
          isMisconception: true,
        },
        {
          text: 'Marcus is not right. Loft insulation goes on the loft floor, so it keeps the warm air in the rooms below. The rooms hold their warmth for longer.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pehi-mis-insulation-lowers-temp',
    },
    {
      id: 'pehi-q18',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out how much wasted thermal power a retrofit saves.',
      tier: 'challenge',
      items: [
        'State the saving as a watt figure and, if asked, as a percentage of the original.',
        'Find the thermal power lost before the retrofit, in watts.',
        'Subtract: saving in watts = before - after.',
        'Find the thermal power lost after the retrofit, in watts.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      hint: 'Get the before, get the after, take the difference, then state the result.',
    },
    {
      id: 'pehi-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out what fraction of the wall heat loss has been saved by cavity wall insulation in a Glasgow flat.',
      tier: 'challenge',
      steps: [
        'Read off the before figure: 750 W of thermal power lost through the walls before insulation.',
        'Read off the after figure: 300 W of thermal power lost through the walls after insulation.',
        'Find the saving in watts: 750 - 300 = 450 W.',
        null,
        'Convert to a percentage: 0.6 x 100 = 60%.',
        'State the answer: cavity wall insulation cuts the wall heat loss by 60%.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Write the fraction saved as saving over original: 450 / 750 = 0.6.',
      xpValue: 20,
    },
    {
      id: 'pehi-q20',
      type: 'numeric-entry',
      stem: 'A Glasgow council retrofit cut a flat\'s total thermal power loss from 1500 W to 600 W. What percentage of the wasted power was saved? Give your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 60,
      unit: '%',
      xpValue: 20,
      hint: 'Saved = 1500 - 600 = 900. Fraction = 900 / 1500 = 0.6. Multiply by 100.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that insulation "stops the cold getting in" rather than slowing thermal transfer in either direction.
    {
      id: 'pehi-mis-insulation-keeps-cold-out',
      description:
        'Treating insulation as a barrier that keeps cold out, rather than a layer that slows thermal transfer in either direction.',
      triggerAnswer: 'insulation-keeps-cold-out',
      correction:
        'Thermal energy flows from hotter to cooler. Insulation slows that flow whichever side is warmer, so a warm home cools more slowly in winter and a cool home warms more slowly in summer.',
      reExplanation:
        'On a Cardiff winter night, the inside is warmer than the outside. Thermal energy flows from inside to outside. Insulation slows that flow, so the boiler tops up less. On a hot Norwich afternoon, the inside is cooler than the outside, and the same insulation slows the flow the other way. Cold is not a thing that gets in. It is the rate of thermal transfer that changes.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates claimed that more insulation always gives proportionally more saving, missing diminishing returns.
    {
      id: 'pehi-mis-thicker-always-better',
      description:
        'Assuming each extra centimetre of insulation saves the same amount, missing that returns diminish as the easiest losses are removed.',
      triggerAnswer: 'thicker-always-better',
      correction:
        'The first layer of insulation slows the largest, easiest part of the loss. Each later layer trims a smaller share, so the extra saving per centimetre shrinks.',
      reExplanation:
        'A bare loft in a Sheffield semi might leak 600 W. A thin mat cuts that to 420 W, a saving of 180 W. A thicker mat cuts it to 200 W, a further saving of 220 W from the thinner case. Adding even more on top might only save another 30 W. Each extra layer is working on what is left, not on the original total.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates claimed double glazing works because the second pane is thicker, missing the role of the trapped gas layer.
    {
      id: 'pehi-mis-double-pane-thicker',
      description:
        'Believing double glazing works because the second pane of glass is thicker, missing the role of the trapped low-density gas layer.',
      triggerAnswer: 'double-pane-thicker',
      correction:
        'Double glazing works because of the trapped low-density gas layer between the two panes. The gas is a poor conductor, so thermal energy moves through the window more slowly.',
      reExplanation:
        'Glass is not a great insulator on its own; a single thick pane still leaks plenty of thermal energy. Trap a layer of argon or a similar low-density gas between two panes and that gas does the heavy lifting. The two panes hold the gas in place. If you replaced the gas with the same thickness of solid glass, the window would lose more thermal energy.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that insulation "creates extra heat" because the room felt warmer after fitting it.
    {
      id: 'pehi-mis-insulation-creates-energy',
      description:
        'Treating insulation as a source of thermal energy because the room feels warmer, rather than as a layer that slows the rate of loss.',
      triggerAnswer: 'insulation-creates-energy',
      correction:
        'Insulation does not create thermal energy. The boiler still supplies all of it. Insulation slows the rate of loss, so the room reaches a higher steady temperature for the same boiler input.',
      reExplanation:
        'Energy is conserved. No layer of foam or fibre adds joules to the room. What changes is the rate at which thermal energy leaves. If the boiler puts in 1000 W and the home loses 1000 W, the temperature holds. Cut the loss to 600 W and the room warms up until losses match the input again, often at a higher temperature.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that loft insulation alone is enough, missing that thermal energy escapes through walls and windows.
    {
      id: 'pehi-mis-loft-only-path',
      description:
        'Believing loft insulation alone is enough, missing that thermal energy also escapes through walls and windows.',
      triggerAnswer: 'loft-only-path',
      correction:
        'Thermal energy leaves a home through every cool surface. Loft insulation only slows the roof path. Cavity wall insulation slows the wall path, and double glazing slows the window path.',
      reExplanation:
        'A Cardiff terrace might lose 500 W through the roof, 500 W through the walls and 200 W through the windows. A loft mat trims the 500 W roof path. The 500 W wall path and 200 W window path are still there. Stacking different measures cuts different paths, so the savings add up rather than overlap.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that fitting insulation lowers the inside temperature because the inner surface is cooler, missing what insulation actually changes.
    {
      id: 'pehi-mis-insulation-lowers-temp',
      description:
        'Claiming that insulation lowers the inside temperature, rather than reducing the rate of thermal loss.',
      triggerAnswer: 'insulation-lowers-temp',
      correction:
        'Insulation does not lower the indoor temperature. It slows the rate at which thermal energy leaves, so the inside holds its warmth for longer at the same boiler setting.',
      reExplanation:
        'With insulation fitted, the inner surface of a wall feels closer to room temperature than before, not cooler. The boiler still warms the air. Because less thermal energy leaks out, the same boiler can hold the room at the same temperature with less running time, or reach a slightly higher temperature for the same running time.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energyHomeInsulationZoneNodes = [energyHomeInsulation]
