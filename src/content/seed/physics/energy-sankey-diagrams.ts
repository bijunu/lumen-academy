import type { SkillNode } from '@/types/content'

const KETTLE_SANKEY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Sankey for a Bristol electric kettle: 100 J in, 75 J useful, 25 J wasted</text>

    <!-- Input arrow: 100 J wide (height 80) -->
    <polygon points="60,160 280,160 280,240 60,240" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="170" y="205" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Input: 100 J electrical</text>

    <!-- Useful output arrow: 75 J wide (height 60), top-right -->
    <polygon points="280,160 600,120 640,150 600,180 280,220" fill="currentColor" fill-opacity="0.45" stroke="currentColor" />
    <text x="450" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Useful: 75 J thermal of water</text>

    <!-- Wasted output arrow: 25 J wide (height 20), bottom-right -->
    <polygon points="280,240 600,280 640,290 600,300 280,260" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="450" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wasted: 25 J thermal of surroundings</text>

    <!-- Energy conservation note -->
    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Arrow widths are proportional to joules. Useful + wasted = input, so 75 + 25 = 100 J.</text>
  </g>
`

const BOILER_SANKEY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Sankey for a Worcester gas boiler: 200 J in, 180 J useful, 20 J wasted</text>

    <!-- Input arrow: 200 J wide (height 100) -->
    <polygon points="60,150 280,150 280,250 60,250" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="170" y="205" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Input: 200 J chemical (gas)</text>

    <!-- Useful output arrow: 180 J wide (height 90), straight on -->
    <polygon points="280,150 600,155 640,200 600,245 280,250" fill="currentColor" fill-opacity="0.45" stroke="currentColor" />
    <text x="450" y="205" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Useful: 180 J thermal of the room</text>

    <!-- Wasted output arrow: 20 J wide (height 10), bottom-right to chimney -->
    <polygon points="280,250 600,295 640,300 600,305 280,260" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="450" y="325" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Wasted: 20 J thermal up the chimney</text>

    <!-- Efficiency note -->
    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Efficiency = 180 / 200 = 0.9 or 90%. The thick useful arrow tells the story at a glance.</text>
  </g>
`

const BULB_COMPARE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two Sankeys side by side: Newcastle filament bulb vs LED bulb (100 J in)</text>

    <!-- LEFT: Filament -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Filament bulb</text>

    <!-- Input 100 J wide (height 60) -->
    <polygon points="40,110 130,110 130,170 40,170" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="85" y="145" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">100 J in</text>

    <!-- Useful 10 J (height 6), top -->
    <polygon points="130,110 320,118 340,121 320,124 130,116" fill="currentColor" fill-opacity="0.55" stroke="currentColor" />
    <text x="350" y="123" font-size="11" font-weight="700" stroke="none" fill="currentColor">10 J light (useful)</text>

    <!-- Wasted 90 J (height 54), bottom -->
    <polygon points="130,116 320,150 340,180 320,210 130,170" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="350" y="190" font-size="11" font-weight="700" stroke="none" fill="currentColor">90 J thermal (wasted)</text>

    <!-- RIGHT: LED -->
    <text x="200" y="245" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">LED bulb</text>

    <!-- Input 100 J wide (height 60) -->
    <polygon points="40,270 130,270 130,330 40,330" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="85" y="305" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">100 J in</text>

    <!-- Useful 80 J (height 48), top -->
    <polygon points="130,270 320,278 340,302 320,326 130,318" fill="currentColor" fill-opacity="0.55" stroke="currentColor" />
    <text x="350" y="305" font-size="11" font-weight="700" stroke="none" fill="currentColor">80 J light (useful)</text>

    <!-- Wasted 20 J (height 12), bottom -->
    <polygon points="130,318 320,328 340,332 320,336 130,330" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="350" y="345" font-size="11" font-weight="700" stroke="none" fill="currentColor">20 J thermal (wasted)</text>

    <text x="400" y="380" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same 100 J input, thicker useful arrow on the LED. The Sankey makes efficiency visible.</text>
  </g>
`

export const energySankeyDiagrams: SkillNode = {
  id: 'physics-energy-sankey-diagrams',
  title: 'Sankey Diagrams',
  description:
    'A Sankey diagram is a picture of energy splitting. One input arrow flows in from the left, then splits into a useful output arrow and a wasted output arrow on the right. The width of each arrow is in proportion to the number of joules it carries, so the picture and the maths agree. Energy is conserved, so the input arrow width equals the sum of the output widths: useful plus wasted equals input. Use Sankey diagrams to compare appliances at a glance, read efficiency off the picture, or work out the missing branch when the others are labelled.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-energy-stores-transfers',
  zoneName: 'Energy Stores and Transfers',
  tier: 'confident',
  prerequisites: ['physics-energy-efficiency'],
  curriculum: {
    ks3Objective:
      'Using a Sankey diagram to show how the input energy is shared between useful and wasted output stores; arrow widths proportional to energy values.',
    awardingBodies: {
      aqa: '4.1.2.1 Energy transfers; representing useful and wasted energy with Sankey diagrams (GCSE Physics 8463)',
      edexcel:
        'Topic 4 Energy, 4.10 Drawing and interpreting Sankey diagrams (GCSE Physics 1PH0)',
      ocr: 'P1.2 Sankey diagrams; reading proportional arrow widths for energy transfers (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pesd-scene-kettle',
      title: 'A Bristol Kettle Sankey',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the Sankey for a Bristol electric kettle to see how 100 J of electrical input splits into useful and wasted output.',
      data: {
        viewBox: '0 0 800 400',
        svg: KETTLE_SANKEY_SVG,
        hotspots: [
          {
            id: 'pesd-kettle-input',
            x: 22,
            y: 50,
            label: 'Input arrow: 100 J electrical',
            description:
              'The flat-tipped arrow on the left carries the input energy: 100 J of the electrical store, drawn from the mains in Bristol. Its width is set to stand for 100 J, the unit you scale every other arrow against.',
          },
          {
            id: 'pesd-kettle-useful',
            x: 70,
            y: 38,
            label: 'Useful output: 75 J thermal of water',
            description:
              'The thicker top branch carries 75 J of thermal energy into the water. It is labelled "useful" because heating the water is the job the kettle was bought to do. Its width is 75% of the input width.',
          },
          {
            id: 'pesd-kettle-wasted',
            x: 70,
            y: 72,
            label: 'Wasted output: 25 J thermal of surroundings',
            description:
              'The thinner bottom branch carries 25 J of thermal energy into the kitchen air and the kettle body. It is labelled "wasted" because it does not heat the water. Its width is 25% of the input width.',
          },
          {
            id: 'pesd-kettle-conservation',
            x: 50,
            y: 92,
            label: 'Widths add up: 75 + 25 = 100',
            description:
              'Energy is conserved, so the useful plus the wasted output equals the input. The two output widths added together must match the input width, here 100 J. No arrow leaves the page.',
          },
        ],
      },
    },
    {
      id: 'pesd-scene-boiler',
      title: 'A Worcester Boiler Sankey',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the Sankey for a Worcester gas boiler to see how 200 J of chemical input gives 180 J of useful heating with only 20 J wasted.',
      data: {
        viewBox: '0 0 800 400',
        svg: BOILER_SANKEY_SVG,
        hotspots: [
          {
            id: 'pesd-boiler-input',
            x: 22,
            y: 50,
            label: 'Input arrow: 200 J chemical (gas)',
            description:
              'The wide input arrow stands for 200 J of the chemical store, the gas burned by the Worcester boiler. The total joules going in set the scale for every other arrow on the diagram.',
          },
          {
            id: 'pesd-boiler-useful',
            x: 70,
            y: 50,
            label: 'Useful output: 180 J thermal of the room',
            description:
              'The thick top branch carries 180 J into the thermal store of the radiators and the room. Because 180 of 200 J makes it to where the householder wants it, the useful arrow is nearly as wide as the input arrow.',
          },
          {
            id: 'pesd-boiler-wasted',
            x: 70,
            y: 75,
            label: 'Wasted output: 20 J up the chimney',
            description:
              'The thin bottom branch shows the 20 J that escapes as thermal energy up the flue. The wasted arrow is thin because only one in ten joules is lost; the picture matches the maths.',
          },
          {
            id: 'pesd-boiler-efficiency',
            x: 50,
            y: 94,
            label: 'Read efficiency from the picture',
            description:
              'Useful arrow width over input arrow width is the efficiency: 180 / 200 = 0.9, or 90%. The Sankey lets you eyeball efficiency without doing the sum.',
          },
        ],
      },
    },
    {
      id: 'pesd-scene-bulb-compare',
      title: 'Filament vs LED in Newcastle',
      type: 'labelled-diagram',
      instructions:
        'Click each part to compare two Sankey diagrams side by side: an old filament bulb and a modern LED, both fed 100 J of electrical input.',
      data: {
        viewBox: '0 0 800 400',
        svg: BULB_COMPARE_SVG,
        hotspots: [
          {
            id: 'pesd-bulb-filament-input',
            x: 12,
            y: 35,
            label: 'Filament: 100 J electrical in',
            description:
              'A traditional Newcastle filament bulb is fed 100 J from the electrical store. The input arrow is the same width as the LED input below it, because both bulbs draw the same number of joules.',
          },
          {
            id: 'pesd-bulb-filament-output',
            x: 60,
            y: 50,
            label: 'Filament: 10 J light, 90 J wasted',
            description:
              'Only a thin top branch reaches the eyes as light, around 10 J. The fat bottom branch shows 90 J leaving as thermal energy, which is why an old filament bulb feels hot. Useful arrow is narrow; wasted arrow is wide.',
          },
          {
            id: 'pesd-bulb-led-output',
            x: 60,
            y: 80,
            label: 'LED: 80 J light, 20 J wasted',
            description:
              'The LED Sankey has the same input but the useful branch is now the thick one, around 80 J of light, while the wasted thermal branch is thin, around 20 J. The wider useful arrow tells you the LED is more efficient.',
          },
          {
            id: 'pesd-bulb-compare-read',
            x: 50,
            y: 95,
            label: 'Compare widths to compare appliances',
            description:
              'Placing two Sankeys side by side lets a pupil read off which appliance wastes more without doing any maths. The bulb whose useful arrow is the bigger fraction of the input arrow is the better choice.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pesd-worked-1',
      title: 'A Bristol kettle: finding the wasted branch',
      steps: [
        {
          explanation:
            'Read the input. A Bristol electric kettle is drawn with an input arrow standing for 100 J of the electrical store. That is the total going in.',
        },
        {
          explanation:
            'Read the useful branch. The thick top arrow is labelled 75 J for the thermal store of the water. That is the part doing the job the kettle was bought to do.',
        },
        {
          explanation:
            'Apply energy conservation. The total of every output arrow has to match the input, because no energy leaves the page.',
          maths: 'wasted = input - useful',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'wasted = 100 - 75',
        },
        {
          explanation: 'Evaluate.',
          maths: 'wasted = 25 J',
        },
        {
          explanation:
            'State and check. The wasted output arrow stands for 25 J, given off as thermal energy to the kitchen air and the kettle body. Its width should be a quarter of the input width, which matches the picture.',
        },
      ],
    },
    {
      id: 'pesd-worked-2',
      title: 'A Worcester boiler: comparing arrow widths',
      steps: [
        {
          explanation:
            'List the labels. A Worcester gas boiler has an input arrow of 200 J of the chemical store. The useful branch is 180 J thermal of the room; the wasted branch is the rest, up the chimney.',
        },
        {
          explanation:
            'Find the wasted branch. By energy conservation, every joule has to leave somewhere on the right.',
          maths: 'wasted = input - useful',
        },
        {
          explanation: 'Substitute and evaluate.',
          maths: 'wasted = 200 - 180 = 20 J',
        },
        {
          explanation:
            'Compare the widths. The useful arrow stands for 180 J; the wasted arrow stands for 20 J. The ratio of widths is 180 to 20, which is 9 to 1.',
          maths: 'useful : wasted = 180 : 20 = 9 : 1',
        },
        {
          explanation:
            'Read off the efficiency. Useful over input gives the efficiency.',
          maths: 'efficiency = 180 / 200 = 0.9',
        },
        {
          explanation:
            'State the answer. The boiler wastes 20 J for every 200 J of gas burned. Its useful arrow is nine times the width of the wasted arrow, and the efficiency is 0.9 (or 90%), which matches the thick useful branch on the Sankey.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pesd-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes what a Sankey diagram shows?',
      tier: 'core',
      options: [
        'How energy splits from an input arrow into useful and wasted output arrows, with widths in proportion to joules.',
        'How forces act on a falling object.',
        'How current flows around an electric circuit.',
        'How the speed of a vehicle changes over time.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pesd-mis-sankey-shows-forces',
      hint: 'Sankey diagrams are about energy: one input arrow that splits into useful and wasted branches.',
    },
    {
      id: 'pesd-q2',
      type: 'multiple-choice',
      stem: 'On a Sankey diagram, what does the WIDTH of each arrow represent?',
      tier: 'core',
      options: [
        'The temperature of the appliance.',
        'The size of the appliance.',
        'The cost of running the appliance.',
        'The number of joules the arrow carries; widths are in proportion to energy values.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pesd-mis-widths-do-not-matter',
      hint: 'Bigger arrow, more joules. Width is set by the energy value the arrow stands for.',
    },
    {
      id: 'pesd-q3',
      type: 'numeric-entry',
      stem: 'A Bristol electric kettle is drawn with an input arrow of 100 J of the electrical store. The useful output arrow is 75 J of thermal energy in the water. How many joules does the wasted output arrow stand for?',
      tier: 'core',
      correctAnswer: 25,
      unit: 'J',
      xpValue: 10,
      hint: 'Energy is conserved, so wasted = input - useful = 100 - 75.',
    },
    {
      id: 'pesd-q4',
      type: 'multiple-choice',
      stem: 'On a Sankey for a Manchester bus engine, the input arrow stands for 1000 J of the chemical store, the useful output for 300 J of the kinetic store, and the wasted output for 700 J of thermal and sound. Which arrow should be drawn the WIDEST?',
      tier: 'core',
      options: [
        'The wasted output arrow, because it carries 700 J.',
        'The input arrow and the wasted arrow are the same width.',
        'The useful output arrow, because the bus is moving.',
        'They are all drawn the same width.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pesd-mis-widths-do-not-matter',
      hint: 'Width is in proportion to joules. 1000 J input splits into 300 J useful and 700 J wasted; the input is the widest single arrow, but among the OUTPUTS the wasted is widest.',
    },
    {
      id: 'pesd-q5',
      type: 'multiple-choice',
      stem: 'A pupil sketches a Sankey diagram for a kettle and only draws the useful output arrow, leaving the wasted branch off the page entirely. Is that allowed?',
      tier: 'core',
      options: [
        'Yes, because wasted energy does not count.',
        'No. Every joule has to be shown leaving on the right, so both useful and wasted branches must be drawn.',
        'Yes, because the wasted arrow is too thin to draw.',
        'Yes, but only for very efficient appliances.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pesd-mis-only-useful-arrow',
      hint: 'A Sankey shows where every joule goes. Leaving the wasted branch off breaks the conservation rule.',
    },
    {
      id: 'pesd-q6',
      type: 'multiple-choice',
      stem: 'On a Sankey diagram, two output arrows look the same width on the page. What can you conclude about the joules they carry?',
      tier: 'core',
      options: [
        'One is useful, the other is wasted, but they carry different amounts of energy.',
        'Equal width on a Sankey means equal joules. The two arrows carry the same amount of energy.',
        'Width is decorative, so we cannot tell.',
        'The useful arrow always carries more, regardless of width.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pesd-mis-widths-do-not-matter',
      hint: 'Sankey arrows are scaled. Same width means same number of joules.',
    },
    {
      id: 'pesd-q7',
      type: 'numeric-entry',
      stem: 'A Worcester gas boiler has an input arrow standing for 200 J of the chemical store and a useful output of 180 J thermal of the room. How many joules does the wasted output arrow stand for?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'J',
      xpValue: 15,
      hint: 'wasted = input - useful = 200 - 180.',
    },
    {
      id: 'pesd-q8',
      type: 'numeric-entry',
      stem: 'A Manchester bus engine Sankey has an input arrow of 1000 J of the chemical store. The wasted output is 700 J of thermal and sound. How many joules does the useful (kinetic) output arrow stand for?',
      tier: 'confident',
      correctAnswer: 300,
      unit: 'J',
      xpValue: 15,
      hint: 'useful = input - wasted = 1000 - 700.',
    },
    {
      id: 'pesd-q9',
      type: 'numeric-entry',
      stem: 'On a Sankey for a Newcastle filament bulb, the input arrow stands for 100 J. The useful output (light) stands for 10 J. How many joules does the wasted output (thermal) arrow stand for?',
      tier: 'confident',
      correctAnswer: 90,
      unit: 'J',
      xpValue: 15,
      hint: 'wasted = input - useful = 100 - 10.',
    },
    {
      id: 'pesd-q10',
      type: 'multiple-choice',
      stem: 'A pupil draws a Sankey where the useful output arrow is WIDER than the input arrow. What is wrong?',
      tier: 'confident',
      options: [
        'Nothing; the useful arrow can be any width.',
        'The diagram is fine if the appliance is very efficient.',
        'The useful arrow can never be wider than the input arrow, because that would mean the appliance gives out more energy than it takes in, which breaks the conservation rule.',
        'The input arrow needs an extra label.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pesd-mis-useful-bigger-than-input',
      hint: 'Useful + wasted = input. So the useful arrow alone cannot be wider than the input.',
    },
    {
      id: 'pesd-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes that on a Sankey "the bigger the wasted arrow, the better the appliance". Which sentence is the best correction?',
      tier: 'confident',
      options: [
        'They are right; a big wasted arrow means lots of heating, which is always wanted.',
        'They are wrong: the bigger the WASTED arrow, the more energy is being thrown away, so the appliance is LESS useful. A good appliance has a thin wasted arrow and a thick useful arrow.',
        'Wasted arrows are not used in Sankey diagrams.',
        'It depends on the colour of the arrow.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pesd-mis-bigger-wasted-is-better',
      hint: 'Wasted means "did not do the job". You want it thin.',
    },
    {
      id: 'pesd-q12',
      type: 'numeric-entry',
      stem: 'A modern LED bulb is drawn with an input arrow of 100 J and a useful output (light) arrow of 80 J. What is the width of the wasted output arrow, in joules?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'J',
      xpValue: 15,
      hint: 'wasted = input - useful = 100 - 80.',
    },
    {
      id: 'pesd-q13',
      type: 'spot-misconception',
      stem: 'Asha says, "On the Sankey for the bus engine, the wasted arrow goes off the side of the page so I do not need to include it in the energy total."',
      tier: 'confident',
      statements: [
        {
          text: 'Asha is right. The arrow off the page does not need to be counted.',
          isMisconception: true,
        },
        {
          text: 'Asha is wrong. Every joule that leaves the box has to be drawn as an arrow, useful or wasted. You cannot let the wasted branch disappear off the page.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pesd-mis-wasted-goes-off-page',
    },
    {
      id: 'pesd-q14',
      type: 'multiple-choice',
      stem: 'A pupil sketches a Sankey diagram for a car engine. They draw three arrows: a thick input, a thin useful and a thin wasted. Looking at the picture alone, what is the most likely problem?',
      tier: 'confident',
      options: [
        'No problem; this is what a Sankey should look like.',
        'The useful arrow should be on the bottom.',
        'The wasted arrow should be off the page.',
        'The two output widths added together must equal the input width. If both outputs look thin while the input is thick, the arithmetic does not match.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pesd-mis-widths-do-not-matter',
      hint: 'Useful width + wasted width = input width. The two outputs together have to fill the input.',
    },
    {
      id: 'pesd-q15',
      type: 'numeric-entry',
      stem: 'A Sankey for an electric heater shows an input arrow of 500 J of the electrical store. The wasted output (thermal of the wiring) stands for 50 J. How many joules does the useful output (thermal of the room) arrow stand for?',
      tier: 'core',
      correctAnswer: 450,
      unit: 'J',
      xpValue: 10,
      hint: 'useful = input - wasted = 500 - 50.',
    },
    {
      id: 'pesd-q16',
      type: 'multiple-choice',
      stem: 'A Sankey for an old filament bulb has an input arrow of 100 J, a useful arrow of 10 J light and a wasted arrow of 90 J thermal. On the same scale, the LED Sankey has a useful arrow of 80 J light. Which conclusion is best read off the diagrams?',
      tier: 'challenge',
      options: [
        'The LED is less efficient than the filament bulb.',
        'They are equally efficient because both use 100 J.',
        'The LED has a thicker useful arrow on the same scale, so the LED is more efficient.',
        'Sankey diagrams cannot be used to compare appliances.',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: 'Same input, thicker useful arrow on the LED. Width to width, the LED wins.',
    },
    {
      id: 'pesd-q17',
      type: 'spot-misconception',
      stem: 'Tom says, "The arrows on a Sankey diagram show the size of the forces in the appliance."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. The wider the arrow, the bigger the force.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Sankey arrows show ENERGY in joules, not forces. Arrow width is in proportion to the number of joules an energy branch carries.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pesd-mis-sankey-shows-forces',
    },
    {
      id: 'pesd-q18',
      type: 'drag-order',
      stem: 'Put the steps in the right order for drawing a Sankey diagram of a kettle from a written energy balance.',
      tier: 'challenge',
      items: [
        'Draw the input arrow on the left, with a width set to stand for the input joules.',
        'Read the question: list the input store and joules, the useful output store and joules, and the wasted output store and joules.',
        'Draw the useful output arrow branching to the right; draw the wasted output arrow branching downward, each with a width in proportion to its joules.',
        'Check the widths: useful width + wasted width must add up to the input width, because energy is conserved.',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
      hint: 'List the energies first, then the input arrow, then the two outputs, then check the arithmetic with conservation.',
    },
    {
      id: 'pesd-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the wasted output of a Worcester boiler from a Sankey: input 200 J chemical, useful 180 J thermal of the room.',
      tier: 'challenge',
      steps: [
        'Read the input arrow: 200 J of the chemical store.',
        'Read the useful output arrow: 180 J of the thermal store of the room.',
        'State the conservation rule: the widths of every output arrow add up to the width of the input arrow.',
        null,
        'Substitute and evaluate: wasted = 200 - 180 = 20 J.',
        'Sketch the wasted arrow with a width in proportion to 20 J, much thinner than the useful arrow.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Rearrange for the wasted branch: wasted = input - useful.',
      xpValue: 20,
    },
    {
      id: 'pesd-q20',
      type: 'multiple-choice',
      stem: 'A pupil claims a Sankey for an electric kettle is valid even though the useful output arrow (90 J) is drawn wider than the input arrow (100 J) because "the arrows are not really to scale". Pick the best response.',
      tier: 'challenge',
      options: [
        'Sankey arrows must be drawn to scale, with widths in proportion to joules. If useful is wider than input the picture lies.',
        'The pupil is right; on Sankey diagrams scale is optional.',
        'The arrows are fine because the labels still say 90 J and 100 J.',
        'The diagram is valid as long as the wasted arrow is also labelled.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'pesd-mis-widths-do-not-matter',
      hint: 'The point of a Sankey is that widths are proportional. If they are not, the diagram has stopped doing its job.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates drew Sankey diagrams in which the useful and wasted arrows were the same width despite carrying different joule values, treating width as decorative.
    {
      id: 'pesd-mis-widths-do-not-matter',
      description:
        'Drawing Sankey arrows of the same width even when their energy labels differ, treating arrow width as decorative rather than proportional to joules.',
      triggerAnswer: 'widths-do-not-matter',
      correction:
        'Arrow width on a Sankey is in proportion to joules. Same width means same energy; different joule values must give visibly different widths.',
      reExplanation:
        'Pick a scale, say 1 cm of width for every 10 J. A 100 J input arrow is 10 cm wide, a 75 J useful arrow is 7.5 cm, a 25 J wasted arrow is 2.5 cm. Drawing all three the same width tells the reader the energies are equal, which is wrong. Width is the point of a Sankey, not a doodle.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates drew Sankey diagrams in which the wasted branch left the page without a labelled tip, missing the conservation requirement that every joule be accounted for.
    {
      id: 'pesd-mis-wasted-goes-off-page',
      description:
        'Letting the wasted output arrow drift off the side of the page without a labelled tip, as if wasted energy did not need to be shown.',
      triggerAnswer: 'wasted-goes-off-page',
      correction:
        'Every joule has to leave on the right of the Sankey. Draw the wasted arrow fully, with a labelled tip and a width in proportion to its joules.',
      reExplanation:
        'Energy is conserved, so for a 100 J input you must show 100 J of output. If the wasted branch trails off, the reader cannot check that the widths add up. Draw the wasted arrow inside the page, give it a label such as "25 J thermal to surroundings", and make its width match.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, Paper J259/02, candidates claimed that a bigger wasted arrow on a Sankey was a good thing, confusing wasted thermal energy with desirable heating.
    {
      id: 'pesd-mis-bigger-wasted-is-better',
      description:
        'Reading a thick wasted arrow as a good sign, confusing wasted thermal output with useful heating.',
      triggerAnswer: 'bigger-wasted-is-better',
      correction:
        'A thick wasted arrow means more energy is being thrown away rather than doing the job. A good appliance has a thin wasted arrow and a thick useful arrow.',
      reExplanation:
        'For a 100 J electrical input, a filament bulb wastes 90 J as thermal energy and only sends 10 J as light; a modern LED wastes 20 J and sends 80 J. The LED has the THIN wasted arrow and the THICK useful arrow, which is why it is the better buy. Wasted means "did not do the job", and you want it small.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates drew Sankey diagrams in which the useful output arrow was wider than the input arrow, breaking conservation of energy.
    {
      id: 'pesd-mis-useful-bigger-than-input',
      description:
        'Drawing the useful output arrow wider than the input arrow, implying the appliance gives out more energy than it takes in.',
      triggerAnswer: 'useful-bigger-than-input',
      correction:
        'Useful plus wasted equals input. The useful output alone can never be wider than the input arrow, because that would create energy from nothing.',
      reExplanation:
        'If the input is 100 J, the useful arrow has to be at most 100 J wide; the rest of the input width goes to the wasted arrow. A useful arrow that looks wider than the input arrow tells the reader the appliance is more than 100% efficient, which breaks the conservation rule that energy cannot be created or destroyed.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates believed the arrows on a Sankey diagram represented forces acting on the appliance, mixing up energy diagrams with force diagrams.
    {
      id: 'pesd-mis-sankey-shows-forces',
      description:
        'Reading Sankey arrows as the forces acting on an appliance rather than as energy flows in joules.',
      triggerAnswer: 'sankey-shows-forces',
      correction:
        'Sankey arrows show energy moving between stores, measured in joules. They are not free-body force arrows; widths track joules, not newtons.',
      reExplanation:
        'A free-body arrow shows a force in newtons and points the direction a push or pull acts. A Sankey arrow shows an energy branch in joules; its length and direction are for layout, while its width is the energy value. The two diagrams use arrows but they answer different questions, and mixing them up will lose marks every time.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates labelled only the useful output of a Sankey diagram and treated the wasted branch as optional, missing that every joule must be accounted for.
    {
      id: 'pesd-mis-only-useful-arrow',
      description:
        'Labelling only the useful output arrow and omitting the wasted branch entirely, as if wasted energy did not need to appear on the Sankey.',
      triggerAnswer: 'only-useful-arrow',
      correction:
        'Every output store gets its own arrow on a Sankey, useful and wasted alike. Leaving the wasted branch off breaks the conservation rule.',
      reExplanation:
        'A Sankey for a kettle drawn with only the 75 J useful arrow tells the reader the other 25 J vanished, which cannot happen. Always draw both branches, label each with its store and joules, and check that the output widths add up to the input width before you stop.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const energySankeyDiagramsZoneNodes = [energySankeyDiagrams]
