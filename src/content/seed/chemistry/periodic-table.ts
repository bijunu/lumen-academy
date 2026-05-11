import type { SkillNode, Zone } from '@/types/content'

export const periodicTableLayout: SkillNode = {
  id: 'chemistry-periodic-table-layout',
  title: 'Periodic Table Layout: Groups and Periods',
  description:
    'Find your way around the periodic table. Vertical columns are groups (elements with similar properties); horizontal rows are periods. Metals sit on the left, non-metals on the right, and Group 0 holds the noble gases. Recognise the first 20 elements by symbol and position.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'core',
  prerequisites: ['chemistry-atoms-elements-compounds-basics'],
  curriculum: {
    ks3Objective:
      'The principles underpinning the Mendeleev periodic table; the periodic table: periods and groups; metals and non-metals.',
    awardingBodies: {
      aqa: '4.1.2.1 The periodic table; 4.1.2.2 Development of the periodic table; 4.1.2.3 Metals and non-metals (8462)',
      edexcel:
        'Topic 1.30 The periodic table; 1.31 Development of the periodic table; 1.32 Groups and periods (1CH0)',
      ocr: 'C1.2a The periodic table: groups and periods; C1.2b Metals and non-metals (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'pt-scene-overview',
      title: 'Reading the Whole Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the simplified periodic table to see how the rows, columns and metal/non-metal sides are arranged.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="20" y="40" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="54" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">H</text><rect x="320" y="40" width="20" height="20" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.4"/><text x="330" y="54" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">He</text></g><g><rect x="20" y="64" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Li</text><rect x="44" y="64" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Be</text><rect x="200" y="64" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="210" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">B</text><rect x="224" y="64" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="234" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">C</text><rect x="248" y="64" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="258" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">N</text><rect x="272" y="64" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="282" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">O</text><rect x="296" y="64" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="306" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">F</text><rect x="320" y="64" width="20" height="20" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.4"/><text x="330" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Ne</text></g><g><rect x="20" y="88" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Na</text><rect x="44" y="88" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Mg</text><rect x="200" y="88" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="210" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Al</text><rect x="224" y="88" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="234" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Si</text><rect x="248" y="88" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="258" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">P</text><rect x="272" y="88" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="282" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">S</text><rect x="296" y="88" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="306" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Cl</text><rect x="320" y="88" width="20" height="20" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.4"/><text x="330" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Ar</text></g><g><rect x="20" y="112" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="126" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">K</text><rect x="44" y="112" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="126" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Ca</text><rect x="68" y="112" width="132" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4" opacity="0.3"/><text x="135" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A">transition metals (Sc to Zn)</text></g><text x="180" y="20" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">SIMPLIFIED PERIODIC TABLE (FIRST 20 ELEMENTS)</text><text x="30" y="35" text-anchor="middle" font-size="7" fill="#7F1D1D">Group 1</text><text x="330" y="35" text-anchor="middle" font-size="7" fill="#064E3B">Group 0</text><text x="10" y="76" text-anchor="middle" font-size="7" fill="#1E3A8A">Period 2</text><text x="10" y="100" text-anchor="middle" font-size="7" fill="#1E3A8A">Period 3</text><text x="10" y="124" text-anchor="middle" font-size="7" fill="#1E3A8A">Period 4</text><g><rect x="20" y="180" width="12" height="12" fill="#FCA5A5"/><text x="38" y="190" font-size="8" fill="#1E3A8A">metals (left)</text><rect x="120" y="180" width="12" height="12" fill="#FEF3C7"/><text x="138" y="190" font-size="8" fill="#1E3A8A">non-metals (right)</text><rect x="240" y="180" width="12" height="12" fill="#A7F3D0"/><text x="258" y="190" font-size="8" fill="#1E3A8A">noble gases (Group 0)</text></g></svg>',
        hotspots: [
          {
            id: 'pt-h-row',
            x: 30,
            y: 50,
            label: 'Rows are called periods',
            description:
              'A horizontal row across the table is called a period. The first 20 elements fit into the first four periods.',
          },
          {
            id: 'pt-h-col',
            x: 8,
            y: 50,
            label: 'Columns are called groups',
            description:
              'A vertical column down the table is called a group. Elements in the same group share similar chemical properties.',
          },
          {
            id: 'pt-h-metals',
            x: 18,
            y: 70,
            label: 'Metals on the left',
            description:
              'Most of the elements (about 80) are metals. They sit on the left and middle of the table.',
          },
          {
            id: 'pt-h-nonmetals',
            x: 75,
            y: 70,
            label: 'Non-metals on the right',
            description:
              'A smaller number of elements are non-metals. They sit on the right of the table, above the staircase line.',
          },
          {
            id: 'pt-h-noble',
            x: 92,
            y: 50,
            label: 'Group 0: noble gases',
            description:
              'The far right column is Group 0, the noble gases. Helium, neon and argon all belong here. They almost never react.',
          },
        ],
      },
    },
    {
      id: 'pt-scene-groups-vs-periods',
      title: 'Groups (Down) vs Periods (Across)',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a group works as a vertical column and a period as a horizontal row.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="30" width="120" height="160" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="60" y="30" width="40" height="160" fill="#FBBF24" opacity="0.4" stroke="#7C2D12" stroke-width="1.2"/><rect x="40" y="30" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="50" y="44" text-anchor="middle" font-size="8" fill="#1E3A8A">H</text><rect x="60" y="30" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="70" y="44" text-anchor="middle" font-size="8" fill="#1E3A8A">He</text><rect x="40" y="50" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="50" y="64" text-anchor="middle" font-size="8" fill="#1E3A8A">Li</text><rect x="60" y="50" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="70" y="64" text-anchor="middle" font-size="8" fill="#1E3A8A">Be</text><rect x="40" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="50" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Na</text><rect x="60" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="70" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Mg</text><rect x="40" y="90" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="50" y="104" text-anchor="middle" font-size="8" fill="#1E3A8A">K</text><rect x="60" y="90" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="70" y="104" text-anchor="middle" font-size="8" fill="#1E3A8A">Ca</text><text x="80" y="180" text-anchor="middle" font-size="8" fill="#7C2D12" font-weight="600">A GROUP (going down)</text></g><g><rect x="180" y="30" width="120" height="160" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="180" y="70" width="120" height="20" fill="#3B82F6" opacity="0.3" stroke="#1E3A8A" stroke-width="1.2"/><rect x="200" y="30" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="210" y="44" text-anchor="middle" font-size="8" fill="#1E3A8A">H</text><rect x="220" y="30" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="230" y="44" text-anchor="middle" font-size="8" fill="#1E3A8A">He</text><rect x="200" y="50" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="210" y="64" text-anchor="middle" font-size="8" fill="#1E3A8A">Li</text><rect x="220" y="50" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="230" y="64" text-anchor="middle" font-size="8" fill="#1E3A8A">Be</text><rect x="200" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="210" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Na</text><rect x="220" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="230" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Mg</text><rect x="240" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="250" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Al</text><rect x="260" y="70" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="270" y="84" text-anchor="middle" font-size="8" fill="#1E3A8A">Si</text><rect x="200" y="90" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="210" y="104" text-anchor="middle" font-size="8" fill="#1E3A8A">K</text><rect x="220" y="90" width="20" height="20" fill="#FFFFFF" stroke="#475569"/><text x="230" y="104" text-anchor="middle" font-size="8" fill="#1E3A8A">Ca</text><text x="240" y="180" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">A PERIOD (going across)</text></g></svg>',
        hotspots: [
          {
            id: 'pt-h-group-shape',
            x: 25,
            y: 30,
            label: 'A group is a vertical column',
            description:
              'Pick a column and trace down the page. Every element you touch is in the same group. Group 1 starts with hydrogen, then lithium, sodium and potassium.',
          },
          {
            id: 'pt-h-group-similar',
            x: 25,
            y: 75,
            label: 'Group members behave alike',
            description:
              'Lithium, sodium and potassium all react with cold water in a similar way (fizzing, with hydrogen gas given off). That is why they share Group 1.',
          },
          {
            id: 'pt-h-period-shape',
            x: 75,
            y: 50,
            label: 'A period is a horizontal row',
            description:
              'Pick a row and trace across the page. Every element you touch is in the same period. Period 3 starts with sodium and ends with argon.',
          },
          {
            id: 'pt-h-period-pattern',
            x: 75,
            y: 75,
            label: 'A period crosses metals to non-metals',
            description:
              'Going across a period from left to right, the elements change from metal (sodium, magnesium, aluminium) to non-metal (silicon, phosphorus, sulfur, chlorine) and finish with a noble gas.',
          },
        ],
      },
    },
    {
      id: 'pt-scene-noble',
      title: 'Group 0: The Noble Gases',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to meet the noble gases of Group 0 and see why they barely react.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><text x="160" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#064E3B">GROUP 0: THE NOBLE GASES</text><g><rect x="20" y="40" width="60" height="140" fill="#A7F3D0" stroke="#064E3B" stroke-width="1.2"/><text x="50" y="60" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">He</text><text x="50" y="74" text-anchor="middle" font-size="7" fill="#1E3A8A">helium</text><text x="50" y="84" text-anchor="middle" font-size="6" fill="#475569">balloons</text><text x="50" y="100" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Ne</text><text x="50" y="114" text-anchor="middle" font-size="7" fill="#1E3A8A">neon</text><text x="50" y="124" text-anchor="middle" font-size="6" fill="#475569">orange-red signs</text><text x="50" y="140" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Ar</text><text x="50" y="154" text-anchor="middle" font-size="7" fill="#1E3A8A">argon</text><text x="50" y="164" text-anchor="middle" font-size="6" fill="#475569">double glazing</text></g><g><rect x="100" y="40" width="200" height="140" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="200" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">WHY THEY BARELY REACT</text><circle cx="180" cy="100" r="22" fill="#F1F5F9" stroke="#475569" stroke-width="1.2"/><text x="180" y="105" text-anchor="middle" font-size="8" fill="#1E3A8A">noble gas</text><text x="180" y="115" text-anchor="middle" font-size="8" fill="#1E3A8A">atom</text><circle cx="220" cy="100" r="14" fill="#FBBF24" opacity="0.6" stroke="#7C2D12" stroke-width="0.6"/><text x="220" y="103" text-anchor="middle" font-size="6" fill="#7C2D12">other atom</text><line x1="195" y1="100" x2="207" y2="100" stroke="#EF4444" stroke-width="2"/><line x1="201" y1="94" x2="201" y2="106" stroke="#EF4444" stroke-width="2"/><text x="200" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">Outer shell of a noble gas atom is full,</text><text x="200" y="165" text-anchor="middle" font-size="7" fill="#1E3A8A">so it does not bond with other atoms.</text></g></svg>',
        hotspots: [
          {
            id: 'pt-h-noble-helium',
            x: 16,
            y: 32,
            label: 'Helium (He): party balloons',
            description:
              'Helium is the noble gas in shop-bought party balloons. It is also the second-lightest gas after hydrogen, and a piping voice if you breathe a small puff.',
          },
          {
            id: 'pt-h-noble-neon',
            x: 16,
            y: 55,
            label: 'Neon (Ne): orange-red signs',
            description:
              'Neon glows bright orange-red when an electric current passes through it. That is why old shop signs in cities use neon-filled tubes.',
          },
          {
            id: 'pt-h-noble-argon',
            x: 16,
            y: 78,
            label: 'Argon (Ar): double glazing',
            description:
              'Argon is the gas filled between the two panes of modern double-glazed windows. It conducts heat poorly, which keeps homes warm.',
          },
          {
            id: 'pt-h-noble-rule',
            x: 65,
            y: 75,
            label: 'Why noble gases barely react',
            description:
              'A noble gas atom already has a full outer shell of electrons. It does not need to gain, lose or share electrons, so it almost never bonds with other atoms.',
          },
        ],
      },
    },
    {
      id: 'pt-scene-metals-line',
      title: 'The Metal-to-Non-metal Staircase',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the staircase line that splits metals from non-metals on a real periodic table.',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="320" height="120" fill="none" stroke="#1E3A8A" stroke-width="1"/><rect x="20" y="40" width="200" height="120" fill="#FCA5A5" opacity="0.4"/><rect x="220" y="40" width="120" height="120" fill="#FEF3C7" stroke="#7C2D12"/></g><g stroke="#475569" stroke-width="2.5" fill="none"><polyline points="220,40 220,60 240,60 240,80 260,80 260,100 280,100 280,120 300,120 300,140 320,140 320,160"/></g><text x="120" y="105" text-anchor="middle" font-size="14" font-weight="700" fill="#7F1D1D">METALS</text><text x="120" y="125" text-anchor="middle" font-size="8" fill="#7F1D1D">about 80 elements</text><text x="290" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#064E3B">NON-METALS</text><text x="290" y="75" text-anchor="middle" font-size="7" fill="#064E3B">smaller group</text><text x="180" y="180" text-anchor="middle" font-size="9" fill="#1E3A8A">The bold staircase line is the boundary.</text></svg>',
        hotspots: [
          {
            id: 'pt-h-line-shape',
            x: 75,
            y: 45,
            label: 'A staircase, not a vertical line',
            description:
              'The boundary between metals and non-metals zig-zags down the right of the table. It is not a single straight column.',
          },
          {
            id: 'pt-h-line-most',
            x: 33,
            y: 75,
            label: 'About 80 elements are metals',
            description:
              'Most of the elements lie to the left of the staircase. They share metal properties: shiny when freshly cut, conduct electricity, malleable.',
          },
          {
            id: 'pt-h-line-fewer',
            x: 80,
            y: 35,
            label: 'A smaller set are non-metals',
            description:
              'About 20 elements are non-metals. They sit above and to the right of the staircase. Most are dull, brittle when solid, and do not conduct electricity.',
          },
          {
            id: 'pt-h-line-staircase',
            x: 67,
            y: 60,
            label: 'Elements right on the line',
            description:
              'Elements like silicon and germanium that sit on the staircase have some metal-like properties and some non-metal-like properties. They are sometimes called metalloids.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pt-worked-1',
      title: 'Locating an element by group and period',
      steps: [
        {
          explanation:
            'Question: a periodic table tile shows the symbol Mg in the second column from the left, third row down. Which group and which period is magnesium in?',
        },
        {
          explanation:
            'Step 1: groups are vertical columns. Magnesium sits in the second column on the left, which is Group 2.',
          maths: 'group: 2',
        },
        {
          explanation:
            'Step 2: periods are horizontal rows. Magnesium sits in the third row, so it is in Period 3.',
          maths: 'period: 3',
        },
        {
          explanation:
            'So magnesium is in Group 2, Period 3 of the periodic table.',
        },
      ],
    },
    {
      id: 'pt-worked-2',
      title: 'Predicting the chemistry of a Group 1 element you have never met',
      steps: [
        {
          explanation:
            'Question: lithium and sodium both react with cold water to give off hydrogen gas and leave a solution that turns red litmus paper blue. Both are in Group 1 of the periodic table. Predict what rubidium (Rb), also in Group 1, will do when added to water.',
        },
        {
          explanation:
            'Step 1: rubidium is in the same group as lithium and sodium. Elements in the same group of the periodic table share similar chemical properties, because they have the same number of electrons in their outer shell.',
          maths: 'rubidium: Group 1, same outer shell as Li and Na',
        },
        {
          explanation:
            'Step 2: lithium reacts with water and so does sodium, both giving off hydrogen and forming an alkaline solution.',
          maths: 'lithium + water and sodium + water both fizz and turn blue',
        },
        {
          explanation:
            'Step 3: predict that rubidium will also react with water to give off hydrogen gas and form an alkaline solution.',
        },
        {
          explanation:
            'In real life rubidium reacts more violently than sodium, but the same kind of reaction takes place. The general pattern in a group is set by where the element sits in the table, even if you have never seen the reaction before.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pt-q1',
      type: 'multiple-choice',
      stem: 'On the periodic table, what is the name for a vertical column?',
      tier: 'core',
      options: [
        'Period',
        'Series',
        'Group',
        'Shell',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pt-mis-group-vs-period',
    },
    {
      id: 'pt-q2',
      type: 'multiple-choice',
      stem: 'On the periodic table, what is the name for a horizontal row?',
      tier: 'core',
      options: [
        'Period',
        'Group',
        'Family',
        'Block',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pt-mis-group-vs-period',
    },
    {
      id: 'pt-q3',
      type: 'multiple-choice',
      stem: 'Where do the metals sit on the periodic table?',
      tier: 'core',
      options: [
        'Only along the top row',
        'Only in Group 0',
        'On the right side of the staircase line',
        'On the left and middle, to the left of the staircase line',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pt-mis-metals-on-right',
    },
    {
      id: 'pt-q4',
      type: 'multiple-choice',
      stem: 'Which of the following is a noble gas?',
      tier: 'core',
      options: [
        'Argon',
        'Sodium',
        'Iron',
        'Oxygen',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'pt-q5',
      type: 'free-text',
      stem: 'In one sentence, name the group on the UK GCSE periodic table that holds the noble gases.',
      tier: 'confident',
      sampleAnswer:
        'The noble gases are in Group 0 on the UK GCSE periodic table.',
      keywords: ['Group 0', 'noble', 'zero'],
      xpValue: 15,
      hint: 'On the UK layout the noble gas column is named after a number, not the eighth column from the left.',
      misconceptionId: 'pt-mis-noble-group-8',
    },
    {
      id: 'pt-q6',
      type: 'numeric-entry',
      stem: 'Carbon (C) sits in the second row of the periodic table. Which period is carbon in? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'A period is a horizontal row. Count from the top: row 1 is hydrogen and helium.',
    },
    {
      id: 'pt-q7',
      type: 'numeric-entry',
      stem: 'Sodium (Na) sits in the first column on the left of the periodic table. Which group is sodium in? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'A group is a vertical column. Group 1 is the first column on the left.',
    },
    {
      id: 'pt-q8',
      type: 'drag-order',
      stem: 'Place these noble gases in order of where they appear in Group 0, from the top of the column down to the bottom.',
      tier: 'core',
      items: ['Argon', 'Helium', 'Neon'],
      correctOrder: [1, 2, 0],
      xpValue: 15,
    },
    {
      id: 'pt-q9',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each region of the simplified periodic table.',
      tier: 'core',
      viewBox: '0 0 320 160',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#F8FAFC"/><rect x="20" y="20" width="260" height="120" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="20" y="20" width="160" height="120" fill="#FCA5A5" opacity="0.5"/><rect x="180" y="20" width="80" height="120" fill="#FEF3C7"/><rect x="260" y="20" width="20" height="120" fill="#A7F3D0"/><rect x="20" y="20" width="20" height="120" fill="#F87171" opacity="0.6"/></svg>',
      hotspots: [
        { id: 'pt-q9-h1', x: 9, y: 50, correctLabel: 'Group 1' },
        { id: 'pt-q9-h2', x: 30, y: 50, correctLabel: 'Metals' },
        { id: 'pt-q9-h3', x: 70, y: 50, correctLabel: 'Non-metals' },
        { id: 'pt-q9-h4', x: 84, y: 50, correctLabel: 'Group 0 (noble gases)' },
      ],
      labels: [
        'Group 1',
        'Metals',
        'Non-metals',
        'Group 0 (noble gases)',
        'Period 1',
        'Period 4',
      ],
      xpValue: 20,
      misconceptionId: 'pt-mis-group-equals-period',
    },
    {
      id: 'pt-q10',
      type: 'multiple-choice',
      stem: 'Lithium and sodium are both in Group 1 of the periodic table. They both react with cold water to give off hydrogen gas. Which prediction is most likely true for potassium, also in Group 1?',
      tier: 'confident',
      options: [
        'Potassium will not react with water at all',
        'Potassium will react with water to give off hydrogen gas, in a similar way to lithium and sodium',
        'Potassium will react with water to give off oxygen gas instead of hydrogen',
        'Potassium will turn into a noble gas in water',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'pt-q11',
      type: 'spot-misconception',
      stem: 'Sophie says: "Period 3 means the third column from the left, so sodium is in Period 3."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. A period is a vertical column on the periodic table.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. A period is a horizontal row, and a group is a vertical column. Sodium is in Period 3 because it is in the third row, not the third column.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pt-mis-group-vs-period',
    },
    {
      id: 'pt-q12',
      type: 'multiple-choice',
      stem: 'The owner of a corner shop in Sevenoaks needs a gas to fill the glass tubes of a new shop sign. The sign should glow bright orange-red when an electric current passes through it. The gas must also barely react, so it does not damage the tube. Which Group 0 element is the right choice?',
      tier: 'challenge',
      options: [
        'Helium',
        'Argon',
        'Oxygen',
        'Neon',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
    {
      id: 'pt-q13',
      type: 'multiple-choice',
      stem: 'A teacher says: "All of these elements are in the same row of the periodic table: sodium, magnesium, aluminium, silicon, phosphorus, sulfur, chlorine, argon." What does this tell you about them?',
      tier: 'confident',
      options: [
        'They are all in the same group, so they share similar reactions',
        'They are all in the same period, so they go from metal on the left to non-metal on the right and finish with a noble gas',
        'They are all noble gases',
        'They are all metals',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pt-mis-row-similar',
    },
    {
      id: 'pt-q14',
      type: 'numeric-entry',
      stem: 'Calcium (Ca) is in Group 2 of the periodic table. Beryllium (Be) and magnesium (Mg) are also in Group 2 and sit above calcium in the same column. How many electrons are in the outer shell of a calcium atom? (Hint: it is the same as the group number.)',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Elements in the same group share the same number of outer-shell electrons, equal to the group number.',
    },
    {
      id: 'pt-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Aisha is asked which group on the periodic table holds the most reactive metals. She knows that sodium and potassium are very reactive metals that fizz vigorously with water.',
      tier: 'confident',
      steps: [
        'Sodium and potassium are very reactive metals that react with water to give off hydrogen gas and form an alkaline solution.',
        'On the periodic table, sodium and potassium both sit in the first column on the left, which is Group 1.',
        null,
        'So Group 1 is the group that holds the most reactive metals (sometimes called the alkali metals).',
      ],
      missingStepIndex: 2,
      correctStep:
        'Elements in the same group share similar chemical properties, so other Group 1 elements (lithium above and rubidium below) also react vigorously with water.',
      xpValue: 20,
    },
    {
      id: 'pt-q16',
      type: 'multiple-choice',
      stem: 'A bubble of gas trapped between the two panes of a UK home double-glazed window is normally argon (Ar). Why is argon a sensible choice for that job?',
      tier: 'confident',
      options: [
        'Argon is in Group 0, almost never reacts and conducts heat poorly, so it does not corrode the glass and helps keep heat inside',
        'Argon is in Group 1, so it cleans the inside of the glass',
        'Argon is a metal, so it adds strength to the window',
        'Argon is the most reactive gas, so it kills any mould inside the gap',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'pt-q17',
      type: 'spot-misconception',
      stem: 'Tom says: "Most of the elements on the periodic table are non-metals, because the table is bigger on the right than on the left."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Non-metals fill most of the table.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. About 80 of the roughly 100 elements are metals. Metals fill most of the left and middle of the table, including the wide block of transition metals.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'pt-mis-metals-on-right',
    },
    {
      id: 'pt-q18',
      type: 'multiple-choice',
      stem: 'A pupil in Tunbridge Wells reads about a brand new element added to the periodic table. The element sits at the very bottom of Group 0. Which prediction about its chemistry is best supported by its position?',
      tier: 'challenge',
      options: [
        'It will react explosively with water',
        'It will be a shiny metal at room temperature',
        'It will barely react with anything, like the other Group 0 elements above it',
        'It will react like a Group 1 metal because it is at the edge of the table',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'pt-mis-noble-reactive',
    },
    {
      id: 'pt-q19',
      type: 'multiple-choice',
      stem: 'Look at this set of elements: lithium (Li), sodium (Na), potassium (K). All three are in the first column on the left of the periodic table. Which group are they in, and what would they share?',
      tier: 'confident',
      options: [
        'Group 7, sharing brittle non-metal properties',
        'Group 0, sharing very low reactivity',
        'Period 1, sharing the same row',
        'Group 1, sharing similar reactions with water and a single outer-shell electron',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'pt-q20',
      type: 'numeric-entry',
      stem: 'Aisha is making a poster of the first 20 elements of the periodic table. Hydrogen and helium are in Period 1; lithium to neon are in Period 2; sodium to argon are in Period 3; potassium and calcium are in the start of Period 4. How many of the first 20 elements are noble gases? (Group 0 only.)',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Spot the noble gases in periods 1 to 3 of the first 20 elements: helium, neon, argon.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q05 on the periodic table: candidates "regularly swapped the words group and period, naming a horizontal row as a group and a vertical column as a period." Reinforced by CGP KS3 Chemistry common-mistake callouts on the periodic table chapter.
    {
      id: 'pt-mis-group-vs-period',
      description:
        'A group is a horizontal row and a period is a vertical column on the periodic table.',
      triggerAnswer: 'group-vs-period',
      correction:
        'In fact a group is a vertical column and a period is a horizontal row. Elements in the same group share similar chemical properties.',
      reExplanation:
        'Picture the periodic table as a tall block of letters. A group runs from top to bottom (a vertical column), like Group 1 with hydrogen at the top, then lithium, then sodium, then potassium below. A period runs from side to side (a horizontal row), like Period 3, which holds sodium, magnesium, aluminium, silicon, phosphorus, sulfur, chlorine and argon. Group is down, period is across.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q07 on metal/non-metal regions: candidates "labelled the right-hand side of the periodic table as the metal region, possibly because group 1 sits on the left and is named first." Reinforced by Vanessa Kind, "Chemistry: Beyond Appearances" RSC Education misconception summary.
    {
      id: 'pt-mis-metals-on-right',
      description:
        'Metals sit on the right of the periodic table and non-metals on the left.',
      triggerAnswer: 'metals-on-right',
      correction:
        'In fact metals sit on the left and middle of the table, while non-metals sit on the right above the staircase line. About 80 of the roughly 100 elements are metals.',
      reExplanation:
        'Trace the staircase line that zig-zags down the right of the periodic table. Everything to the left of the line is a metal: Group 1 alkali metals, Group 2 alkaline-earth metals, the wide central block of transition metals (iron, copper, gold), and a few extra metals on the lower-left of Groups 13 to 15. The non-metals (carbon, nitrogen, oxygen, sulfur, chlorine and the noble gases) all sit above and to the right of the line.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the periodic table: documents that Year 7 learners often expect elements in the same period (row) to share chemical reactivity, when in fact period members run from metal to non-metal across the row. Reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06.
    {
      id: 'pt-mis-row-similar',
      description:
        'Elements in the same period (row) of the periodic table share the same chemical properties.',
      triggerAnswer: 'row-similar',
      correction:
        'In fact elements in the same period run from metals on the left to non-metals on the right and finish with a noble gas. They do not share properties. Shared properties are a group thing, not a period thing.',
      reExplanation:
        'Pick any row, such as Period 3. The first element is sodium, a soft reactive metal. By the middle of the row you reach silicon, a brittle non-metal. The row finishes at argon, a noble gas. Those three elements behave very differently. Now pick a column instead, such as Group 1: lithium, sodium and potassium all behave similarly because they are in the same group, even though they are in different periods.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: Year 7 learners often think the noble gases react like the very reactive Group 1 metals, missing that Group 0 sits at the opposite end of the reactivity scale. Reinforced by CGP KS3 Chemistry on Group 0 noble gases.
    {
      id: 'pt-mis-noble-reactive',
      description:
        'The noble gases (Group 0) are very reactive, like the alkali metals (Group 1).',
      triggerAnswer: 'noble-reactive',
      correction:
        'In fact noble gases are the least reactive of all the elements. Their outer electron shell is full, so they do not need to react with anything else.',
      reExplanation:
        'Helium fills party balloons, neon fills bright orange shop signs, argon fills the gap inside double-glazed windows. We use these gases for those jobs because they sit happily on their own and do not react with the balloon rubber, the glass tube or the air. By contrast, Group 1 metals like sodium fizz violently the moment they touch water. Group 1 and Group 0 sit at opposite ends of the reactivity scale.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q05 on counting groups and periods: candidates "thought that the number of groups across the table is the same as the number of periods down the table." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on periodic table layout.
    {
      id: 'pt-mis-group-equals-period',
      description:
        'There are the same number of groups across the periodic table as there are periods down the table.',
      triggerAnswer: 'group-equals-period',
      correction:
        'In fact the table is wider than it is tall in modern layouts. There are 18 groups across the standard table but only 7 periods down (the lower two rows of f-block elements are usually drawn as a separate strip).',
      reExplanation:
        'Look at any wall poster of the modern periodic table. Count the columns from left to right and you reach 18. Count the rows from top to bottom and you reach 7 main rows. The numbers do not match. The exact group numbering of the middle block can vary between school textbooks, but the basic rule holds: more groups than periods.',
    },
    // Source: David Paterson, "Teaching the periodic table at Key Stage 3", RSC Education CPD article (2022-04-26): notes that Year 7 learners often pick up the group number on the left (Group 1, 2) but not on the right (Group 0 or Group 7), so they wrongly call the noble gases Group 8. Reinforced by Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q06.
    {
      id: 'pt-mis-noble-group-8',
      description:
        'The noble gases sit in Group 8 because they are the eighth column from the left.',
      triggerAnswer: 'noble-group-8',
      correction:
        'In fact the noble gases are in Group 0 in the UK GCSE periodic table layout. Some textbooks call this Group 18, but UK Year 7 and GCSE materials use the name Group 0.',
      reExplanation:
        'On a standard UK GCSE periodic table the columns to look up are Group 1 (alkali metals), Group 2 (alkaline-earth metals), then a wide central transition metals block, then Groups 3, 4, 5, 6, 7, and finally Group 0 on the far right. Group 0 holds helium, neon, argon, krypton, xenon and radon. The number 0 is a reminder that they have zero spare valence electrons to react with: their outer shell is full.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const periodicTableGroup1And7: SkillNode = {
  id: 'chemistry-periodic-table-group-1-7',
  title: 'Groups 1 and 7: Reactivity Trends',
  description:
    'Meet the alkali metals of Group 1 (lithium, sodium, potassium) and the halogens of Group 7 (chlorine, bromine, iodine). See how reactivity rises down Group 1 and falls down Group 7. Watch a more reactive halogen displace a less reactive one from a salt solution. No equation balancing or electron configuration at this stage; trends only.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-layout'],
  curriculum: {
    ks3Objective:
      'The principles underpinning the Mendeleev periodic table; the periodic table: periods and groups; metals and non-metals; how patterns in reactions can be predicted with reference to the periodic table.',
    awardingBodies: {
      aqa: '4.1.2.4 Group 0 (the noble gases); 4.1.2.5 Group 1 (the alkali metals); 4.1.2.6 Group 7 (the halogens) (8462)',
      edexcel:
        'Topic 1.36 Group 1 alkali metals; 1.37 Group 7 halogens; 1.38 Reactivity trends in groups (1CH0)',
      ocr: 'C1.2c Group 1 alkali metals: trends; C1.2d Group 7 halogens: trends and displacement (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'g17-scene-group1-trend',
      title: 'Group 1: Reactivity Rises Going Down',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how lithium, sodium and potassium each react with cold water, and how the reaction grows stronger going down the group.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">GROUP 1: ALKALI METALS WITH COLD WATER</text><g><rect x="20" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="70" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Li</text><text x="70" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">lithium</text><ellipse cx="70" cy="120" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="55" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="70" cy="112" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="85" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><text x="70" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">gentle fizz</text><text x="70" y="166" text-anchor="middle" font-size="7" fill="#1E3A8A">slow bubbles</text><text x="70" y="190" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">least reactive</text></g><g><rect x="130" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="180" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Na</text><text x="180" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">sodium</text><ellipse cx="180" cy="120" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="160" cy="105" r="4" fill="#FCD34D" stroke="#7C2D12" stroke-width="0.6"/><circle cx="180" cy="100" r="5" fill="#FCD34D" stroke="#7C2D12" stroke-width="0.6"/><circle cx="200" cy="105" r="4" fill="#FCD34D" stroke="#7C2D12" stroke-width="0.6"/><circle cx="170" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="190" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><text x="180" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">whizzes about</text><text x="180" y="166" text-anchor="middle" font-size="7" fill="#1E3A8A">on the surface</text><text x="180" y="190" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">more reactive</text></g><g><rect x="240" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="290" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">K</text><text x="290" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">potassium</text><ellipse cx="290" cy="120" rx="35" ry="14" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="270" cy="100" r="5" fill="#A855F7" stroke="#581C87" stroke-width="0.8"/><circle cx="290" cy="92" r="6" fill="#A855F7" stroke="#581C87" stroke-width="0.8"/><circle cx="310" cy="100" r="5" fill="#A855F7" stroke="#581C87" stroke-width="0.8"/><circle cx="280" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><circle cx="300" cy="115" r="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.5"/><text x="290" y="155" text-anchor="middle" font-size="7" fill="#1E3A8A">lilac flame</text><text x="290" y="166" text-anchor="middle" font-size="7" fill="#1E3A8A">may pop</text><text x="290" y="190" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">most reactive (of these three)</text></g><g><line x1="20" y1="208" x2="340" y2="208" stroke="#7C2D12" stroke-width="1.5" marker-end="url(#arrowR)"/><defs><marker id="arrowR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7C2D12"/></marker></defs><text x="180" y="218" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">REACTIVITY RISES GOING DOWN GROUP 1</text></g></svg>',
        hotspots: [
          {
            id: 'g17-h-li',
            x: 22,
            y: 35,
            label: 'Lithium: a gentle fizz',
            description:
              'Lithium floats and fizzes gently on cold water, giving off small bubbles of hydrogen gas. The water turns the indicator blue, showing an alkaline solution forms.',
          },
          {
            id: 'g17-h-na',
            x: 50,
            y: 35,
            label: 'Sodium: whizzes about',
            description:
              'Sodium melts into a silver ball and whizzes across the water surface, fizzing strongly as hydrogen is given off. Stronger than lithium.',
          },
          {
            id: 'g17-h-k',
            x: 80,
            y: 35,
            label: 'Potassium: lilac flame, may pop',
            description:
              'Potassium reacts so strongly with cold water that the hydrogen given off catches fire, with a lilac flame and a small pop. Most reactive of the three.',
          },
          {
            id: 'g17-h-trend',
            x: 50,
            y: 95,
            label: 'Reactivity rises going down',
            description:
              'In Group 1, the lower an element sits in the column, the more reactive it is. The trend goes lithium, sodium, potassium, then rubidium, then caesium at the bottom.',
          },
        ],
      },
    },
    {
      id: 'g17-scene-group7-trend',
      title: 'Group 7: Reactivity Falls Going Down',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to meet the halogens chlorine, bromine and iodine and see how their reactivity falls as you go down Group 7.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#064E3B">GROUP 7: THE HALOGENS</text><g><rect x="20" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="70" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Cl</text><text x="70" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">chlorine</text><rect x="40" y="90" width="60" height="50" rx="6" fill="#D9F99D" stroke="#3F6212" stroke-width="0.8" opacity="0.7"/><text x="70" y="115" text-anchor="middle" font-size="7" fill="#1E3A8A">pale yellow-</text><text x="70" y="125" text-anchor="middle" font-size="7" fill="#1E3A8A">green gas</text><text x="70" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">at room temp</text><text x="70" y="190" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">most reactive</text></g><g><rect x="130" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="180" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Br</text><text x="180" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">bromine</text><rect x="150" y="90" width="60" height="50" rx="6" fill="#FBA74A" stroke="#7C2D12" stroke-width="0.8" opacity="0.7"/><text x="180" y="115" text-anchor="middle" font-size="7" fill="#1E3A8A">red-brown</text><text x="180" y="125" text-anchor="middle" font-size="7" fill="#1E3A8A">liquid</text><text x="180" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">at room temp</text><text x="180" y="190" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">in the middle</text></g><g><rect x="240" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="290" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">I</text><text x="290" y="72" text-anchor="middle" font-size="8" fill="#1E3A8A">iodine</text><rect x="260" y="90" width="60" height="50" rx="6" fill="#475569" stroke="#0F172A" stroke-width="0.8" opacity="0.7"/><text x="290" y="115" text-anchor="middle" font-size="7" fill="#FFFFFF">grey shiny</text><text x="290" y="125" text-anchor="middle" font-size="7" fill="#FFFFFF">solid</text><text x="290" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">at room temp</text><text x="290" y="190" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">least reactive (of these three)</text></g><g><line x1="20" y1="208" x2="340" y2="208" stroke="#064E3B" stroke-width="1.5" marker-end="url(#arrowG)"/><defs><marker id="arrowG" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#064E3B"/></marker></defs><text x="180" y="218" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">REACTIVITY FALLS GOING DOWN GROUP 7</text></g></svg>',
        hotspots: [
          {
            id: 'g17-h-cl',
            x: 22,
            y: 50,
            label: 'Chlorine: pale yellow-green gas',
            description:
              'Chlorine is a pale yellow-green gas at room temperature. It is the most reactive of the three halogens shown. UK swimming pools use a tiny amount to kill bacteria.',
          },
          {
            id: 'g17-h-br',
            x: 50,
            y: 50,
            label: 'Bromine: red-brown liquid',
            description:
              'Bromine is a deep red-brown liquid at room temperature, with strong fumes. It sits in the middle of Group 7 for reactivity.',
          },
          {
            id: 'g17-h-i',
            x: 80,
            y: 50,
            label: 'Iodine: grey shiny solid',
            description:
              'Iodine is a dark grey shiny solid at room temperature. It is the least reactive of these three. UK pharmacies sell iodine solution as an antiseptic.',
          },
          {
            id: 'g17-h-trend',
            x: 50,
            y: 95,
            label: 'Reactivity falls going down',
            description:
              'In Group 7, the lower an element sits, the less reactive it is. This is the opposite of Group 1, where reactivity rises going down.',
          },
        ],
      },
    },
    {
      id: 'g17-scene-displacement',
      title: 'Halogen Displacement: Stronger Replaces Weaker',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a halogen displacement reaction in a school test tube, where chlorine pushes bromine out of a salt solution.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">CHLORINE DISPLACES BROMINE FROM POTASSIUM BROMIDE SOLUTION</text><g><path d="M40,50 L40,170 Q40,190 60,190 L80,190 Q100,190 100,170 L100,50 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="42" y="100" width="56" height="86" fill="#A7F3D0" opacity="0.6"/><text x="70" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">BEFORE</text><text x="70" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">colourless KBr</text><text x="70" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A">(potassium bromide)</text><text x="70" y="158" text-anchor="middle" font-size="7" fill="#1E3A8A">add Cl₂ water</text></g><g><path d="M180,50 L180,30 L210,30 L210,50" fill="none" stroke="#475569" stroke-width="1.2"/><polygon points="190,55 200,55 195,40" fill="#1E3A8A"/><text x="195" y="70" text-anchor="middle" font-size="8" fill="#1E3A8A">→</text></g><g><path d="M260,50 L260,170 Q260,190 280,190 L300,190 Q320,190 320,170 L320,50 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="262" y="100" width="56" height="86" fill="#FBA74A" opacity="0.7"/><text x="290" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">AFTER</text><text x="290" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">turns red-brown</text><text x="290" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A">free bromine appears</text><text x="290" y="158" text-anchor="middle" font-size="7" fill="#1E3A8A">+ KCl in solution</text></g></svg>',
        hotspots: [
          {
            id: 'g17-h-disp-before',
            x: 18,
            y: 60,
            label: 'Before: a colourless salt solution',
            description:
              'Potassium bromide solution is colourless. The bromide is locked into the salt and not free to colour the water.',
          },
          {
            id: 'g17-h-disp-add',
            x: 53,
            y: 22,
            label: 'Add chlorine water',
            description:
              'Chlorine water is added. Chlorine sits above bromine in Group 7, so chlorine is the more reactive halogen.',
          },
          {
            id: 'g17-h-disp-after',
            x: 80,
            y: 60,
            label: 'After: a red-brown bromine colour',
            description:
              'The solution turns red-brown. Chlorine has pushed (displaced) the bromide ions, so free bromine is released into the water. Potassium chloride forms in the solution.',
          },
          {
            id: 'g17-h-disp-rule',
            x: 50,
            y: 95,
            label: 'The rule for displacement',
            description:
              'A more reactive halogen will displace a less reactive halogen from a salt solution of that halide. The other way round (iodine into potassium chloride) does not work.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'g17-worked-1',
      title: 'Predicting whether rubidium reacts more strongly than potassium with water',
      steps: [
        {
          explanation:
            'Question: rubidium (Rb) sits below potassium in Group 1 of the periodic table. We have already seen that potassium reacts violently with cold water. Will rubidium react more strongly than potassium, or less strongly?',
        },
        {
          explanation:
            'Step 1: write down the Group 1 trend. Going down Group 1, reactivity rises. Lithium fizzes gently, sodium whizzes about, potassium catches fire.',
          maths: 'Group 1: Li < Na < K < Rb (less reactive to more reactive)',
        },
        {
          explanation:
            'Step 2: rubidium is one row below potassium, so it sits further down the group than potassium does.',
          maths: 'Rb is below K in Group 1',
        },
        {
          explanation:
            'Step 3: apply the trend. If reactivity rises going down, and rubidium is below potassium, then rubidium reacts more strongly with water than potassium.',
        },
        {
          explanation:
            'In real laboratories, rubidium is kept under oil and is so reactive with water that schools never demonstrate it. The pattern in Group 1 lets us predict its behaviour without ever doing the test.',
        },
      ],
    },
    {
      id: 'g17-worked-2',
      title: 'Predicting a halogen displacement result',
      steps: [
        {
          explanation:
            'Question: a small amount of chlorine water is added to a colourless solution of potassium iodide. Predict whether a reaction takes place, and what colour change you would see.',
        },
        {
          explanation:
            'Step 1: write down the Group 7 trend. Going down Group 7, reactivity falls. Chlorine is more reactive than bromine, which is more reactive than iodine.',
          maths: 'Group 7 reactivity: Cl > Br > I',
        },
        {
          explanation:
            'Step 2: identify the halogen and the halide salt. The halogen added is chlorine. The halide in solution is iodide (from potassium iodide).',
          maths: 'added: Cl₂ (halogen). already there: I⁻ (halide ion in KI)',
        },
        {
          explanation:
            'Step 3: compare reactivity. Chlorine is more reactive than iodine, so chlorine can displace iodine from a salt of iodide.',
          maths: 'chlorine more reactive → can displace iodine',
        },
        {
          explanation:
            'Step 4: write the prediction in words. Chlorine displaces iodine, so free iodine appears and the solution turns brown (the colour of iodine in water). Potassium chloride is also formed.',
          maths: 'word equation: chlorine + potassium iodide → potassium chloride + iodine',
        },
        {
          explanation:
            'So the solution would turn brown. If you had added iodine to potassium chloride solution instead, no reaction would happen and the solution would stay colourless, because iodine is less reactive than chlorine.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'g17-q1',
      type: 'multiple-choice',
      stem: 'Which group of the periodic table holds the alkali metals lithium, sodium and potassium?',
      tier: 'core',
      options: ['Group 0', 'Group 1', 'Group 7', 'Group 4'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'g17-mis-group-numbers-swap',
    },
    {
      id: 'g17-q2',
      type: 'multiple-choice',
      stem: 'Which group of the periodic table holds the halogens chlorine, bromine and iodine?',
      tier: 'core',
      options: ['Group 1', 'Group 0', 'Group 7', 'Group 2'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'g17-mis-group-numbers-swap',
    },
    {
      id: 'g17-q3',
      type: 'multiple-choice',
      stem: 'A pupil drops a small piece of lithium into cold water. Which of these best describes what they would see?',
      tier: 'core',
      options: [
        'Nothing at all happens, because lithium is unreactive',
        'The metal sinks to the bottom and turns red',
        'A gentle fizz of bubbles, with the metal floating',
        'A violent explosion that breaks the beaker',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'g17-q4',
      type: 'multiple-choice',
      stem: 'Which gas is given off when a Group 1 metal reacts with cold water?',
      tier: 'core',
      options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'g17-mis-group1-gas-oxygen',
    },
    {
      id: 'g17-q5',
      type: 'spot-misconception',
      stem: 'A pupil says: "In Group 1 of the periodic table, reactivity falls going down the column, so caesium at the bottom is less reactive than lithium at the top."',
      tier: 'core',
      statements: [
        {
          text: 'The pupil is right. Group 1 reactivity falls going down.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. In Group 1 reactivity rises going down. Caesium at the bottom is far more reactive than lithium at the top.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q6',
      type: 'multiple-choice',
      stem: 'In Group 7 of the periodic table, how does reactivity change as you go down the column from chlorine to iodine?',
      tier: 'core',
      options: [
        'Reactivity falls going down',
        'Reactivity rises going down',
        'Reactivity stays the same all the way down',
        'Group 7 elements do not react',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q7',
      type: 'multiple-choice',
      stem: 'At room temperature in a school laboratory, what state are chlorine, bromine and iodine in?',
      tier: 'core',
      options: [
        'All three are gases',
        'Chlorine is a gas, bromine is a liquid, iodine is a solid',
        'All three are solids',
        'Chlorine is a solid, bromine is a gas, iodine is a liquid',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'g17-mis-halogens-all-gas',
    },
    {
      id: 'g17-q8',
      type: 'numeric-entry',
      stem: 'Sodium (Na) is in Group 1. How many electrons does a sodium atom have in its outer shell? Give your answer as a single number. (Hint: it matches the group number.)',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'Group 1 elements have one outer-shell electron, the same as the group number.',
    },
    {
      id: 'g17-q9',
      type: 'numeric-entry',
      stem: 'Chlorine (Cl) is in Group 7. How many electrons does a chlorine atom have in its outer shell? Give your answer as a single number. (Hint: it matches the group number.)',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'Group 7 elements have seven outer-shell electrons, the same as the group number.',
    },
    {
      id: 'g17-q10',
      type: 'drag-order',
      stem: 'Place these Group 1 metals in order of REACTIVITY with water, from least reactive at the top to most reactive at the bottom.',
      tier: 'confident',
      items: ['Sodium', 'Lithium', 'Potassium'],
      correctOrder: [1, 0, 2],
      xpValue: 15,
    },
    {
      id: 'g17-q11',
      type: 'drag-order',
      stem: 'A pupil reads about four halogens: chlorine (Cl), fluorine (F, the one above chlorine in Group 7), bromine (Br) and iodine (I). Place these four in order of REACTIVITY, from MOST reactive at the top to LEAST reactive at the bottom.',
      tier: 'challenge',
      items: ['Iodine', 'Bromine', 'Chlorine', 'Fluorine'],
      correctOrder: [3, 2, 1, 0],
      xpValue: 25,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q12',
      type: 'spot-misconception',
      stem: 'Aisha says: "Group 1 and Group 7 both follow the same rule, so reactivity rises going down both groups."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The pattern is the same in both groups.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. In Group 1 reactivity rises going down, but in Group 7 reactivity falls going down. The two groups follow opposite trends.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q13',
      type: 'numeric-entry',
      stem: 'A teacher demonstrates the reactions of three Group 1 metals (lithium, sodium, potassium) with cold water. How many of these three metals give off hydrogen gas? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'All Group 1 metals react with cold water to give off hydrogen.',
    },
    {
      id: 'g17-q14',
      type: 'multiple-choice',
      stem: 'A small amount of chlorine water is added to a colourless solution of potassium bromide in a test tube. What would you observe?',
      tier: 'challenge',
      options: [
        'No reaction; the solution stays colourless',
        'A gas is given off and the solution turns blue',
        'The solution turns red-brown as bromine is displaced',
        'The solution turns purple as iodine is displaced',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'g17-mis-displacement-direction',
    },
    {
      id: 'g17-q15',
      type: 'numeric-entry',
      stem: 'A pupil tries three displacement tests in test tubes: (1) chlorine added to potassium bromide solution, (2) chlorine added to potassium iodide solution, (3) iodine added to potassium chloride solution. How many of the three test tubes show a colour change (a reaction)? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'A more reactive halogen displaces a less reactive one. The third tube goes the wrong way and does not react.',
      misconceptionId: 'g17-mis-displacement-direction',
    },
    {
      id: 'g17-q16',
      type: 'free-text',
      stem: 'In one sentence, write the word equation for the reaction that takes place when chlorine is added to potassium iodide solution.',
      tier: 'confident',
      sampleAnswer:
        'Chlorine + potassium iodide → potassium chloride + iodine.',
      keywords: ['chlorine', 'potassium iodide', 'potassium chloride', 'iodine'],
      xpValue: 15,
      hint: 'A more reactive halogen displaces a less reactive halogen. Chlorine sits above iodine in Group 7, so chlorine wins.',
    },
    {
      id: 'g17-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Tom says rubidium will react with cold water more strongly than potassium does. Build the reasoning that supports him.',
      tier: 'confident',
      steps: [
        'Rubidium is in Group 1 of the periodic table, sitting one row below potassium.',
        'In Group 1 the trend is that reactivity rises going down the group.',
        null,
        'So rubidium will react with cold water more strongly than potassium does, just as Tom predicts.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Rubidium sits below potassium, so by the Group 1 trend rubidium must be more reactive than potassium.',
      xpValue: 20,
    },
    {
      id: 'g17-q18',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each region of the simplified Group 1 / Group 7 layout.',
      tier: 'confident',
      viewBox: '0 0 320 200',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><rect x="20" y="20" width="280" height="160" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="20" y="20" width="40" height="160" fill="#FCA5A5" opacity="0.5"/><rect x="240" y="20" width="40" height="160" fill="#A7F3D0" opacity="0.6"/><rect x="200" y="20" width="40" height="160" fill="#D9F99D" opacity="0.6"/><line x1="40" y1="40" x2="40" y2="170" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#aDown)"/><line x1="220" y1="170" x2="220" y2="40" stroke="#064E3B" stroke-width="2.5" marker-end="url(#aUp)"/><defs><marker id="aDown" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#7C2D12"/></marker><marker id="aUp" viewBox="0 0 8 8" refX="4" refY="2" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,8 L8,8 L4,0 z" fill="#064E3B"/></marker></defs></svg>',
      hotspots: [
        { id: 'g17-q18-h1', x: 12, y: 50, correctLabel: 'Group 1 (alkali metals)' },
        { id: 'g17-q18-h2', x: 12, y: 90, correctLabel: 'Reactivity rises down Group 1' },
        { id: 'g17-q18-h3', x: 69, y: 50, correctLabel: 'Group 7 (halogens)' },
        { id: 'g17-q18-h4', x: 69, y: 90, correctLabel: 'Reactivity falls down Group 7' },
        { id: 'g17-q18-h5', x: 84, y: 50, correctLabel: 'Group 0 (noble gases)' },
      ],
      labels: [
        'Group 1 (alkali metals)',
        'Reactivity rises down Group 1',
        'Group 7 (halogens)',
        'Reactivity falls down Group 7',
        'Group 0 (noble gases)',
        'Group 2 (alkaline earth)',
        'Period 1',
        'Reactivity is constant down a group',
      ],
      xpValue: 20,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q19',
      type: 'multiple-choice',
      stem: 'A school in Dover stores a small piece of sodium for a Year 7 demonstration. Why is the sodium kept under a layer of oil in the storage jar?',
      tier: 'challenge',
      options: [
        'To slow it down so it does not roll out of the jar',
        'To stop air and water vapour reaching the metal, since sodium reacts strongly with both',
        'To give it a shiny coating before the lesson',
        'To make it heavier so it sinks in the demonstration beaker',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'g17-mis-group1-mild',
    },
    {
      id: 'g17-q20',
      type: 'multiple-choice',
      stem: 'A pupil in Manchester reads about a brand new alkali metal called francium (Fr), which sits at the very bottom of Group 1. The textbook says it has only ever been made in tiny atom-by-atom amounts. Why has nobody ever shown a piece of francium being dropped into water in a school?',
      tier: 'challenge',
      options: [
        'Francium is unreactive, like a noble gas',
        'Francium is the least reactive alkali metal, so the reaction would be too gentle to see',
        'Francium would be the most reactive alkali metal of all, so the reaction would be far too dangerous to control even in tiny amounts',
        'Francium is not really a metal',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'g17-mis-trend-direction',
    },
    {
      id: 'g17-q21',
      type: 'multiple-choice',
      stem: 'A team in a Sevenoaks chemistry club mixes bromine water with three different solutions: potassium chloride, potassium iodide, and pure water. They notice the test tube with potassium iodide turns brown, the test tube with potassium chloride stays orange-brown but does not change colour, and the pure water also stays orange-brown. Which best explains the brown colour change?',
      tier: 'challenge',
      options: [
        'Bromine has displaced iodine from potassium iodide; bromine could not displace chlorine from potassium chloride because chlorine is more reactive than bromine',
        'Bromine reacts with all three because it is the most reactive halogen',
        'The brown colour is from potassium ions, not from iodine',
        'Iodine has displaced bromine from the solution',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'g17-mis-displacement-direction',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on Group 1 and Group 7 trends. Examiners report that Year 10 candidates "regularly stated that reactivity falls down Group 1 or rises down Group 7, swapping the trends in the two groups." Reinforced by CGP KS3 Chemistry Common Mistake box on alkali metals (CGP KS3 Chemistry Study Book p.51).
    {
      id: 'g17-mis-trend-direction',
      description:
        'Reactivity falls going down Group 1 and rises going down Group 7, the same way for both groups.',
      triggerAnswer: 'trend-direction',
      correction:
        'In fact the two groups follow opposite trends: reactivity rises going down Group 1, and reactivity falls going down Group 7.',
      reExplanation:
        'Picture Group 1 from the top: lithium fizzes gently, sodium whizzes about, potassium catches fire. The pattern gets stronger as you go down. Now picture Group 7 from the top: chlorine is a reactive yellow-green gas, bromine a less reactive red-brown liquid, iodine an even less reactive grey solid. Group 1 builds up; Group 7 calms down.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q07 on alkali metal reactions: candidates "frequently said the gas given off was oxygen rather than hydrogen", confusing the bubbles with combustion. Reinforced by CGP KS3 Chemistry Common Mistake box (CGP KS3 Chemistry Study Book p.52) on the alkali metal + water reaction.
    {
      id: 'g17-mis-group1-gas-oxygen',
      description:
        'When a Group 1 metal reacts with water, the gas given off is oxygen.',
      triggerAnswer: 'group1-gas-oxygen',
      correction:
        'In fact the gas given off is hydrogen, not oxygen. The metal pushes hydrogen out of the water and leaves an alkaline solution behind.',
      reExplanation:
        'Hold a lit splint over the bubbles from a sodium reaction and you hear the squeaky pop test for hydrogen. Water is made of hydrogen and oxygen, but the alkali metal grabs the oxygen and the OH part to form a solid metal hydroxide solution, freeing the hydrogen. That is why the test tube fizzes with hydrogen, not oxygen.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q08 on the halogens: candidates "wrote that all halogens are gases at room temperature, missing that bromine is a liquid and iodine is a solid." Reinforced by CGP KS3 Chemistry Study Book p.55 chapter on halogens.
    {
      id: 'g17-mis-halogens-all-gas',
      description:
        'All Group 7 halogens are gases at room temperature in a school laboratory.',
      triggerAnswer: 'halogens-all-gas',
      correction:
        'In fact only chlorine is a gas at room temperature. Bromine is a deep red-brown liquid, and iodine is a dark grey shiny solid.',
      reExplanation:
        'Walk along Group 7 from the top: chlorine is a pale yellow-green gas you can see in a sealed flask, bromine is a heavy red-brown liquid that gives off brown fumes, and iodine is a grey solid that warms into purple vapour. The state changes as the atoms grow heavier. Three different states in one group.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q09 on halogen displacement: candidates "stated that the less reactive halogen would displace the more reactive halogen, getting the direction of the displacement back to front." Reinforced by RSC Education article "Teaching halogen displacement at KS3 and KS4" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'g17-mis-displacement-direction',
      description:
        'A less reactive halogen will displace a more reactive halogen from a salt solution.',
      triggerAnswer: 'displacement-direction',
      correction:
        'In fact the more reactive halogen displaces the less reactive one. Chlorine displaces bromine from potassium bromide, but bromine cannot displace chlorine from potassium chloride.',
      reExplanation:
        'Think of it as a swap. The stronger element pushes the weaker one out of the salt. Chlorine, sitting above bromine in Group 7, is the stronger halogen, so it kicks bromine out of potassium bromide and turns the solution red-brown. The other way round (bromine into potassium chloride) leaves the test tube unchanged because bromine is too weak to push chlorine out.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q05 on group numbering: candidates "swapped Group 1 and Group 7 in matching tasks, naming halogens as Group 1 and alkali metals as Group 7." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the periodic table layout.
    {
      id: 'g17-mis-group-numbers-swap',
      description:
        'The halogens (chlorine, bromine, iodine) are in Group 1 and the alkali metals (lithium, sodium, potassium) are in Group 7.',
      triggerAnswer: 'group-numbers-swap',
      correction:
        'In fact the alkali metals sit in Group 1 on the far left, and the halogens sit in Group 7, the second column from the right.',
      reExplanation:
        'Picture the periodic table on the wall. The first column on the left holds hydrogen and lithium, sodium, potassium below: that is Group 1, the alkali metals. Now jump to the second column from the right (just before the noble gases of Group 0): that holds fluorine, chlorine, bromine, iodine, the halogens, in Group 7. Group 1 metals on the left, Group 7 non-metals on the right.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update). Year 7 learners often think Group 1 metals are gentle reactive metals (like in a kitchen) when in fact they are highly reactive and stored under oil. Reinforced by CGP KS3 Chemistry Study Book p.52 safety note on alkali metals.
    {
      id: 'g17-mis-group1-mild',
      description:
        'Group 1 metals are mild reactive metals like the iron and copper a learner sees at home.',
      triggerAnswer: 'group1-mild',
      correction:
        'In fact Group 1 metals are some of the most reactive metals known. They are stored under oil in school labs to keep them away from air and water.',
      reExplanation:
        'A piece of fresh sodium left in air goes dull within seconds as it reacts with oxygen. Drop it in water and it whizzes about, fizzing strongly. Iron and copper at home sit happily in air for years, so they are not in Group 1. The school technician stores sodium and potassium under oil for the same reason a torch needs a sealed battery: keep the reactive bit away from air and water until it is needed.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const periodicTableZone: Zone = {
  id: 'chemistry-periodic-table',
  name: 'Periodic Table',
  realm: 'elementia',
  nodeIds: ['chemistry-periodic-table-layout', 'chemistry-periodic-table-group-1-7'],
}
