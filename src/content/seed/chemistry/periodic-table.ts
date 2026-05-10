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
      stem: 'Sophie says: "Period 3 means the third column from the left, so sodium is in Period 3." Is she right about what a period is?',
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
      stem: 'Tom says: "Most of the elements on the periodic table are non-metals, because the table is bigger on the right than on the left." Is he right?',
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

export const periodicTableZone: Zone = {
  id: 'chemistry-periodic-table',
  name: 'Periodic Table',
  realm: 'elementia',
  nodeIds: ['chemistry-periodic-table-layout'],
}
