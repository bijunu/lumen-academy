import type { SkillNode } from '@/types/content'

export const electronShellsAndGroups: SkillNode = {
  id: 'chemistry-periodic-table-electron-shells',
  title: 'Electron Shells and Groups',
  description:
    'See why the columns of the periodic table line up the way they do. The GROUP number you read along the top equals the number of OUTER-SHELL electrons in the atom, so Group 1 elements (Li, Na, K) all have 1 outer electron and Group 7 elements (F, Cl, Br) all have 7. The PERIOD (row) number equals the number of shells in use, so Period 2 atoms use 2 shells and Period 3 atoms use 3. Elements in the same group react in similar ways because they share the same outer-shell pattern. Year 7 chemists use this to read configurations and family behaviour straight off the wall chart.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-layout'],
  curriculum: {
    ks3Objective:
      'The number of electrons in the atoms of elements in Groups 1, 7 and 0; the link between electron arrangement and position in the periodic table; the concept of an outer electron.',
    awardingBodies: {
      aqa: '4.1.1.3 Electronic structure and the periodic table; arranging electrons in shells (8462)',
      edexcel: 'Topic 1.3 Electronic structure and the periodic table; shells and groups (1CH0)',
      ocr: 'C1.1b Electronic structure; linking to the periodic table (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-elec-shells-scene-1',
      title: 'Outer Shell on the Periodic Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the labelled strip to see how the OUTER-shell electron count for an atom matches the GROUP number along the top of the periodic table.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">GROUP NUMBER = NUMBER OF OUTER-SHELL ELECTRONS</text><g font-size="7" fill="#1E3A8A"><text x="40" y="36" text-anchor="middle" font-weight="700">G1</text><text x="80" y="36" text-anchor="middle" font-weight="700">G2</text><text x="200" y="36" text-anchor="middle" font-weight="700">G5</text><text x="240" y="36" text-anchor="middle" font-weight="700">G6</text><text x="280" y="36" text-anchor="middle" font-weight="700">G7</text><text x="320" y="36" text-anchor="middle" font-weight="700">G0/8</text></g><g font-size="7" fill="#1E3A8A"><rect x="22" y="44" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="40" y="58" text-anchor="middle" font-weight="700">Li</text><text x="40" y="70" text-anchor="middle" font-size="6">2,1</text><rect x="62" y="44" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="80" y="58" text-anchor="middle" font-weight="700">Be</text><text x="80" y="70" text-anchor="middle" font-size="6">2,2</text><rect x="182" y="44" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="200" y="58" text-anchor="middle" font-weight="700">N</text><text x="200" y="70" text-anchor="middle" font-size="6">2,5</text><rect x="222" y="44" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="240" y="58" text-anchor="middle" font-weight="700">O</text><text x="240" y="70" text-anchor="middle" font-size="6">2,6</text><rect x="262" y="44" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="280" y="58" text-anchor="middle" font-weight="700">F</text><text x="280" y="70" text-anchor="middle" font-size="6">2,7</text><rect x="302" y="44" width="36" height="32" fill="#FDE68A" stroke="#92400E"/><text x="320" y="58" text-anchor="middle" font-weight="700">Ne</text><text x="320" y="70" text-anchor="middle" font-size="6">2,8</text></g><g font-size="7" fill="#1E3A8A"><rect x="22" y="84" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="40" y="98" text-anchor="middle" font-weight="700">Na</text><text x="40" y="110" text-anchor="middle" font-size="6">2,8,1</text><rect x="62" y="84" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="80" y="98" text-anchor="middle" font-weight="700">Mg</text><text x="80" y="110" text-anchor="middle" font-size="6">2,8,2</text><rect x="182" y="84" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="200" y="98" text-anchor="middle" font-weight="700">P</text><text x="200" y="110" text-anchor="middle" font-size="6">2,8,5</text><rect x="222" y="84" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="240" y="98" text-anchor="middle" font-weight="700">S</text><text x="240" y="110" text-anchor="middle" font-size="6">2,8,6</text><rect x="262" y="84" width="36" height="32" fill="#FBCFE8" stroke="#831843"/><text x="280" y="98" text-anchor="middle" font-weight="700">Cl</text><text x="280" y="110" text-anchor="middle" font-size="6">2,8,7</text><rect x="302" y="84" width="36" height="32" fill="#FDE68A" stroke="#92400E"/><text x="320" y="98" text-anchor="middle" font-weight="700">Ar</text><text x="320" y="110" text-anchor="middle" font-size="6">2,8,8</text></g><g font-size="7" fill="#1E3A8A"><rect x="22" y="124" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="40" y="138" text-anchor="middle" font-weight="700">K</text><text x="40" y="150" text-anchor="middle" font-size="6">2,8,8,1</text><rect x="62" y="124" width="36" height="32" fill="#BFDBFE" stroke="#1E3A8A"/><text x="80" y="138" text-anchor="middle" font-weight="700">Ca</text><text x="80" y="150" text-anchor="middle" font-size="6">2,8,8,2</text></g><g><rect x="100" y="170" width="160" height="40" rx="4" fill="#FFFFFF" stroke="#1E3A8A"/><text x="180" y="184" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Read the outer number</text><text x="180" y="198" text-anchor="middle" font-size="7" fill="#1E3A8A">e.g. 2,8,7 outer = 7 -> Group 7</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-elec-shells-h-group1',
            x: 12,
            y: 28,
            label: 'Group 1: 1 outer electron',
            description:
              'Lithium (2, 1), sodium (2, 8, 1) and potassium (2, 8, 8, 1) each have a single electron in the outer shell. That single outer electron is what puts them all in Group 1.',
          },
          {
            id: 'cpt-elec-shells-h-group7',
            x: 78,
            y: 28,
            label: 'Group 7: 7 outer electrons',
            description:
              'Fluorine (2, 7) and chlorine (2, 8, 7) each have 7 electrons in the outer shell. The last number in the configuration is 7, so they sit in Group 7 (the halogens).',
          },
          {
            id: 'cpt-elec-shells-h-group0',
            x: 89,
            y: 28,
            label: 'Group 0/8: full outer shell',
            description:
              'Neon (2, 8) and argon (2, 8, 8) have a FULL outer shell. The outer count is 8 (or 2 for helium), so the column sits at the far right of the table. Full means stable.',
          },
          {
            id: 'cpt-elec-shells-h-readoff',
            x: 50,
            y: 86,
            label: 'How to read group from a configuration',
            description:
              'Take the LAST number in the configuration. That is the number of outer electrons, and it equals the group number (with Group 0/8 for a full outer shell).',
          },
        ],
      },
    },
    {
      id: 'cpt-elec-shells-scene-2',
      title: 'Period Number Equals Number of Shells',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the row (PERIOD) you read down the side of the periodic table equals the number of shells in use by the atoms in that row.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">PERIOD NUMBER = NUMBER OF SHELLS IN USE</text><g font-size="7" fill="#1E3A8A"><text x="22" y="48" text-anchor="end" font-weight="700">P1</text><rect x="30" y="36" width="36" height="28" fill="#FECACA" stroke="#7F1D1D"/><text x="48" y="48" text-anchor="middle" font-weight="700">H</text><text x="48" y="58" text-anchor="middle" font-size="6">1</text><text x="80" y="52" font-size="7" fill="#1E3A8A">1 shell in use</text></g><g font-size="7" fill="#1E3A8A"><text x="22" y="84" text-anchor="end" font-weight="700">P2</text><rect x="30" y="72" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="48" y="84" text-anchor="middle" font-weight="700">Li</text><text x="48" y="94" text-anchor="middle" font-size="6">2,1</text><rect x="70" y="72" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="88" y="84" text-anchor="middle" font-weight="700">Be</text><text x="88" y="94" text-anchor="middle" font-size="6">2,2</text><rect x="190" y="72" width="36" height="28" fill="#FBCFE8" stroke="#831843"/><text x="208" y="84" text-anchor="middle" font-weight="700">F</text><text x="208" y="94" text-anchor="middle" font-size="6">2,7</text><rect x="230" y="72" width="36" height="28" fill="#FDE68A" stroke="#92400E"/><text x="248" y="84" text-anchor="middle" font-weight="700">Ne</text><text x="248" y="94" text-anchor="middle" font-size="6">2,8</text><text x="278" y="88" font-size="7" fill="#1E3A8A">2 shells in use</text></g><g font-size="7" fill="#1E3A8A"><text x="22" y="120" text-anchor="end" font-weight="700">P3</text><rect x="30" y="108" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="48" y="120" text-anchor="middle" font-weight="700">Na</text><text x="48" y="130" text-anchor="middle" font-size="6">2,8,1</text><rect x="70" y="108" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="88" y="120" text-anchor="middle" font-weight="700">Mg</text><text x="88" y="130" text-anchor="middle" font-size="6">2,8,2</text><rect x="190" y="108" width="36" height="28" fill="#FBCFE8" stroke="#831843"/><text x="208" y="120" text-anchor="middle" font-weight="700">Cl</text><text x="208" y="130" text-anchor="middle" font-size="6">2,8,7</text><rect x="230" y="108" width="36" height="28" fill="#FDE68A" stroke="#92400E"/><text x="248" y="120" text-anchor="middle" font-weight="700">Ar</text><text x="248" y="130" text-anchor="middle" font-size="6">2,8,8</text><text x="278" y="124" font-size="7" fill="#1E3A8A">3 shells in use</text></g><g font-size="7" fill="#1E3A8A"><text x="22" y="156" text-anchor="end" font-weight="700">P4</text><rect x="30" y="144" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="48" y="156" text-anchor="middle" font-weight="700">K</text><text x="48" y="166" text-anchor="middle" font-size="6">2,8,8,1</text><rect x="70" y="144" width="36" height="28" fill="#BFDBFE" stroke="#1E3A8A"/><text x="88" y="156" text-anchor="middle" font-weight="700">Ca</text><text x="88" y="166" text-anchor="middle" font-size="6">2,8,8,2</text><text x="120" y="160" font-size="7" fill="#1E3A8A">4 shells in use</text></g><g><line x1="14" y1="36" x2="14" y2="172" stroke="#1E3A8A" stroke-width="1.6" marker-end="url(#aDownP)"/><defs><marker id="aDownP" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#1E3A8A"/></marker></defs></g><text x="180" y="202" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">COUNT THE NUMBERS IN THE CONFIGURATION TO GET THE PERIOD</text></svg>',
        hotspots: [
          {
            id: 'cpt-elec-shells-h-period1',
            x: 20,
            y: 22,
            label: 'Period 1: only 1 shell',
            description:
              'Hydrogen and helium sit in Period 1. Each uses just shell 1, so the configuration is a single number (H = 1, He = 2).',
          },
          {
            id: 'cpt-elec-shells-h-period2',
            x: 75,
            y: 38,
            label: 'Period 2: 2 shells in use',
            description:
              'Lithium (2, 1) up to neon (2, 8) sit in Period 2. Each configuration has 2 numbers, because shell 1 and shell 2 are both being used.',
          },
          {
            id: 'cpt-elec-shells-h-period3',
            x: 75,
            y: 60,
            label: 'Period 3: 3 shells in use',
            description:
              'Sodium (2, 8, 1) up to argon (2, 8, 8) sit in Period 3. Each configuration has 3 numbers, because shells 1, 2 and 3 are all in use.',
          },
          {
            id: 'cpt-elec-shells-h-period4',
            x: 35,
            y: 78,
            label: 'Period 4: 4 shells in use',
            description:
              'Potassium (2, 8, 8, 1) and calcium (2, 8, 8, 2) sit at the start of Period 4. The configuration has 4 numbers, because shell 4 has now opened.',
          },
        ],
      },
    },
    {
      id: 'cpt-elec-shells-scene-3',
      title: 'Same Group, Same Outer Shell, Same Family Behaviour',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why elements in the same group react in similar ways: they share the same number of outer-shell electrons.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">GROUP 1 FAMILY: ALL HAVE 1 OUTER ELECTRON</text><g><circle cx="60" cy="100" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="60" cy="100" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="60" cy="100" r="7" fill="#1E3A8A"/><text x="60" y="103" text-anchor="middle" font-size="6" fill="#FBBF24" font-weight="700">Li</text><circle cx="60" cy="82" r="3" fill="#3B82F6"/><circle cx="60" cy="118" r="3" fill="#3B82F6"/><circle cx="60" cy="62" r="3.4" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.6"/><text x="60" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Li (2, 1)</text><text x="60" y="172" text-anchor="middle" font-size="7" fill="#1E3A8A">1 outer</text></g><g><circle cx="180" cy="100" r="50" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="180" cy="100" r="32" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="180" cy="100" r="14" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="180" cy="100" r="7" fill="#1E3A8A"/><text x="180" y="103" text-anchor="middle" font-size="6" fill="#FBBF24" font-weight="700">Na</text><circle cx="180" cy="86" r="3" fill="#3B82F6"/><circle cx="180" cy="114" r="3" fill="#3B82F6"/><circle cx="166" cy="68" r="3" fill="#3B82F6"/><circle cx="194" cy="68" r="3" fill="#3B82F6"/><circle cx="166" cy="132" r="3" fill="#3B82F6"/><circle cx="194" cy="132" r="3" fill="#3B82F6"/><circle cx="148" cy="100" r="3" fill="#3B82F6"/><circle cx="212" cy="100" r="3" fill="#3B82F6"/><circle cx="160" cy="80" r="3" fill="#3B82F6"/><circle cx="180" cy="50" r="3.4" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.6"/><text x="180" y="170" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Na (2, 8, 1)</text><text x="180" y="182" text-anchor="middle" font-size="7" fill="#1E3A8A">1 outer</text></g><g><circle cx="300" cy="100" r="62" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/><circle cx="300" cy="100" r="44" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/><circle cx="300" cy="100" r="26" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/><circle cx="300" cy="100" r="10" fill="none" stroke="#94A3B8" stroke-width="0.6" stroke-dasharray="2 2"/><circle cx="300" cy="100" r="7" fill="#1E3A8A"/><text x="300" y="103" text-anchor="middle" font-size="6" fill="#FBBF24" font-weight="700">K</text><circle cx="300" cy="38" r="3.4" fill="#EF4444" stroke="#7F1D1D" stroke-width="0.6"/><text x="300" y="170" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">K (2, 8, 8, 1)</text><text x="300" y="182" text-anchor="middle" font-size="7" fill="#1E3A8A">1 outer</text></g><text x="180" y="208" text-anchor="middle" font-size="8" fill="#7F1D1D" font-weight="700">SAME OUTER PATTERN -> SAME FAMILY REACTIONS</text></svg>',
        hotspots: [
          {
            id: 'cpt-elec-shells-h-fam-li',
            x: 17,
            y: 50,
            label: 'Lithium uses 2 shells, 1 outer',
            description:
              'Lithium has 3 electrons. Two fill shell 1, leaving 1 lone electron in shell 2 (shown in red). That single outer electron is what defines a Group 1 metal.',
          },
          {
            id: 'cpt-elec-shells-h-fam-na',
            x: 50,
            y: 50,
            label: 'Sodium uses 3 shells, 1 outer',
            description:
              'Sodium has 11 electrons. Shells 1 and 2 fill up, leaving 1 lone electron in shell 3 (red). The outer shell again has 1 electron, so sodium behaves like lithium.',
          },
          {
            id: 'cpt-elec-shells-h-fam-k',
            x: 83,
            y: 50,
            label: 'Potassium uses 4 shells, 1 outer',
            description:
              'Potassium has 19 electrons. Shells 1, 2 and 3 fill, then 1 electron sits alone in shell 4 (red). Again 1 outer electron, so potassium reacts in the same family pattern.',
          },
          {
            id: 'cpt-elec-shells-h-fam-why',
            x: 50,
            y: 92,
            label: 'Why same group means similar reactions',
            description:
              'Reactions involve the outer electrons. Li, Na and K all show 1 outer electron, so all three lose that one electron readily and form similar 1+ ions, giving them similar reactions with water and chlorine.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-elec-shells-worked-1',
      title: 'Reading the group of phosphorus from its configuration',
      steps: [
        {
          explanation:
            'Question: a pupil at a Leeds grammar school is told that phosphorus has electron configuration 2, 8, 5. Use the configuration alone (no periodic table) to read off the GROUP and the PERIOD of phosphorus.',
        },
        {
          explanation:
            'Step 1: find the outer shell. The configuration is written shell 1, shell 2, shell 3. The last number is the outer shell, because it is the one furthest from the nucleus.',
          maths: 'configuration 2, 8, 5  ->  outer shell = the third (5 electrons)',
        },
        {
          explanation:
            'Step 2: read the outer-electron count. There are 5 electrons in the outer shell.',
          maths: 'outer electrons = 5',
        },
        {
          explanation:
            'Step 3: apply the group rule. The group number equals the number of outer electrons. So phosphorus is in Group 5.',
          maths: 'Group = outer electrons = 5',
        },
        {
          explanation:
            'Step 4: count the shells in use. The configuration has three numbers (2, 8 and 5), so three shells are in use.',
          maths: 'shells in use = 3',
        },
        {
          explanation:
            'Step 5: apply the period rule. The period number equals the number of shells in use. So phosphorus sits in Period 3. This matches its position on every UK exam-board chart: Group 5, Period 3.',
          maths: 'Period = shells in use = 3  ->  P in Group 5, Period 3',
        },
      ],
    },
    {
      id: 'cpt-elec-shells-worked-2',
      title: 'Why magnesium reacts more like calcium than like sodium',
      steps: [
        {
          explanation:
            'Question: a Year 7 chemist at a Bristol school is given three configurations: Na = 2, 8, 1; Mg = 2, 8, 2; Ca = 2, 8, 8, 2. Use the outer-electron rule to predict which TWO behave most alike chemically.',
        },
        {
          explanation:
            'Step 1: pull out the outer-shell electron count for each. The outer shell is the LAST number in the configuration.',
          maths: 'Na outer = 1; Mg outer = 2; Ca outer = 2',
        },
        {
          explanation:
            'Step 2: apply the family rule. Elements in the same group share an outer-shell count, and reactions happen at the outer shell. So elements with the same outer count behave alike.',
        },
        {
          explanation:
            'Step 3: compare. Magnesium and calcium both have 2 outer electrons. Sodium has only 1. So Mg and Ca should react in similar ways (both in Group 2), and Na should sit aside (Group 1).',
          maths: 'Mg (2 outer) and Ca (2 outer) -> same group, Group 2',
        },
        {
          explanation:
            'Step 4: check it with a familiar reaction. Magnesium ribbon burns in air with a bright white flame to form magnesium oxide; calcium also burns with a bright flame to form calcium oxide. Both lose their 2 outer electrons in the same way. Sodium (1 outer) forms a 1+ ion and reacts differently.',
        },
        {
          explanation:
            'Conclusion: magnesium reacts more like calcium than like sodium, even though sodium sits right next to magnesium on the wall chart. The outer-shell electron count, not the chart neighbour, is what predicts family behaviour.',
          maths: 'rule: same outer count -> same family reactions',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cpt-elec-shells-q1',
      type: 'multiple-choice',
      stem: 'On a periodic table, which number tells you how many electrons are in the OUTER shell of an atom?',
      tier: 'core',
      options: [
        'The atomic number',
        'The mass number',
        'The group number',
        'The period number',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-elec-shells-mis-period-vs-group',
    },
    {
      id: 'cpt-elec-shells-q2',
      type: 'multiple-choice',
      stem: 'Which number on the periodic table tells you how many SHELLS of electrons an atom is using?',
      tier: 'core',
      options: [
        'The group number',
        'The period (row) number',
        'The atomic number',
        'The mass number',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-elec-shells-mis-period-vs-group',
    },
    {
      id: 'cpt-elec-shells-q3',
      type: 'numeric-entry',
      stem: 'Sodium (Na) is in Group 1 of the periodic table. How many electrons does a sodium atom have in its OUTER shell?',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'The group number equals the number of outer-shell electrons.',
    },
    {
      id: 'cpt-elec-shells-q4',
      type: 'numeric-entry',
      stem: 'Fluorine (F) is in Group 7 of the periodic table. How many electrons does a fluorine atom have in its OUTER shell?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Group 7 elements have an outer-shell electron count equal to their group number.',
    },
    {
      id: 'cpt-elec-shells-q5',
      type: 'multiple-choice',
      stem: 'Neon has the electron configuration 2, 8. Why does that place neon in Group 0/8 (the noble gases) rather than in Group 8 of, say, the halogens?',
      tier: 'core',
      options: [
        'Because neon has no electrons at all',
        'Because its outer shell is FULL (8 electrons in shell 2), which is why this column is labelled Group 0/8 for the noble gases',
        'Because neon is a metal',
        'Because Group 0 means the element has zero shells',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-elec-shells-mis-group0-zero-outer',
    },
    {
      id: 'cpt-elec-shells-q6',
      type: 'drag-order',
      stem: 'Put these steps in order to read the GROUP of an element from its electron configuration alone.',
      tier: 'core',
      items: [
        'State the group: it equals the outer-electron count (with a FULL outer shell giving Group 0/8)',
        'Look at the last (outer) number in the configuration',
        'Read off how many electrons sit in the outer shell',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
    },
    {
      id: 'cpt-elec-shells-q7',
      type: 'spot-misconception',
      stem: 'Aisha says: "Argon has the configuration 2, 8, 8, so it must be in Group 8 with sulfur-type elements."',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The outer 8 means Group 8 alongside the halogens.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. A FULL outer shell of 8 puts argon in Group 0/8 (the noble gases), not with reactive non-metals. A full shell is stable.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-elec-shells-mis-group0-zero-outer',
    },
    // CONFIDENT (8)
    {
      id: 'cpt-elec-shells-q8',
      type: 'numeric-entry',
      stem: 'Magnesium (Mg) sits in Group 2 of the periodic table. How many electrons sit in the OUTER shell of a magnesium atom?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'In the main groups, outer-electron count equals the group number.',
    },
    {
      id: 'cpt-elec-shells-q9',
      type: 'numeric-entry',
      stem: 'Sulfur (S) sits in Group 6 of the periodic table. How many electrons sit in the OUTER shell of a sulfur atom?',
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
    },
    {
      id: 'cpt-elec-shells-q10',
      type: 'multiple-choice',
      stem: 'An element X has electron configuration 2, 8, 3. Which group of the periodic table does X belong to?',
      tier: 'confident',
      options: ['Group 3 (it has 3 outer electrons)', 'Group 2', 'Group 8', 'Group 13'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'The last number in the configuration is the number of outer electrons, and that equals the group number.',
    },
    {
      id: 'cpt-elec-shells-q11',
      type: 'multiple-choice',
      stem: 'An element has electron configuration 2, 8, 8, 2. Which PERIOD (row) of the periodic table does it sit in?',
      tier: 'confident',
      options: ['Period 2', 'Period 3', 'Period 8', 'Period 4'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The period number equals the number of shells being used. Count the numbers in the configuration.',
      misconceptionId: 'cpt-elec-shells-mis-period-vs-group',
    },
    {
      id: 'cpt-elec-shells-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Chlorine has the configuration 2, 8, 7. Read off its group and period."',
      tier: 'confident',
      steps: [
        'The configuration is written shell 1, shell 2, shell 3, so the last number is the outer shell',
        'The outer shell holds 7 electrons',
        null,
        'There are 3 numbers in the configuration, so 3 shells are in use, which means Period 3',
        'Final answer: chlorine sits in Group 7, Period 3',
      ],
      missingStepIndex: 2,
      correctStep:
        'The group number equals the outer-electron count, so chlorine is in Group 7',
      xpValue: 20,
    },
    {
      id: 'cpt-elec-shells-q13',
      type: 'numeric-entry',
      stem: 'Aluminium (Al) sits in Group 3, Period 3. Using the configuration rule, how many TOTAL electrons does an aluminium atom have? (Hint: 2 in shell 1, 8 in shell 2, 3 in the outer shell.)',
      tier: 'confident',
      correctAnswer: 13,
      xpValue: 15,
      hint: 'Total electrons in a neutral atom = atomic number. Add up 2 + 8 + 3.',
    },
    {
      id: 'cpt-elec-shells-q14',
      type: 'spot-misconception',
      stem: 'Liam looks at the periodic table on his classroom wall and decides: "Iron sits in column 8 of the table, so iron must have 8 outer electrons by the group rule."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Every column on the periodic table follows the group-equals-outer rule, including the metals in the middle.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The simple "group = outer electrons" rule used at KS3 covers Groups 1, 2 and 3 to 0/8 only. The middle block of the table (the transition metals, including iron) follows a different pattern and is not numbered the same way.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-elec-shells-mis-transition-same-rule',
    },
    {
      id: 'cpt-elec-shells-q15',
      type: 'drag-order',
      stem: 'Order these four elements by how many SHELLS of electrons each uses, from fewest shells (top) to most shells (bottom). H (Z=1), N (Z=7), Mg (Z=12), Ca (Z=20).',
      tier: 'confident',
      items: ['Mg (2, 8, 2)', 'Ca (2, 8, 8, 2)', 'H (1)', 'N (2, 5)'],
      correctOrder: [2, 3, 0, 1],
      xpValue: 15,
    },
    // CHALLENGE (5)
    {
      id: 'cpt-elec-shells-q16',
      type: 'multiple-choice',
      stem: 'A pupil sees this rule on a revision card: "Elements in the same group of the periodic table react in similar ways." Which statement best explains WHY, using electron arrangement?',
      tier: 'challenge',
      options: [
        'Because elements in the same group have the same number of TOTAL electrons',
        'Because reactions happen at the OUTER shell, and elements in the same group share the same outer-shell electron count, so they form similar bonds and similar products',
        'Because elements in the same group have the same number of shells',
        'Because elements in the same group have the same atomic number',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpt-elec-shells-mis-total-electrons-equal',
    },
    {
      id: 'cpt-elec-shells-q17',
      type: 'numeric-entry',
      stem: 'An unknown element X has configuration 2, 8, 8, 1. A pupil predicts that X belongs to the same group as sodium. What is the GROUP NUMBER of X?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 20,
      hint: 'The outer shell holds 1 electron. The group number equals the outer-electron count.',
    },
    {
      id: 'cpt-elec-shells-q18',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at a Birmingham grammar school looks at calcium (Ca, 2, 8, 8, 2) and beryllium (Be, 2, 2). They claim the two should react in similar ways. Which statement BEST evaluates that claim using outer-shell reasoning?',
      tier: 'challenge',
      options: [
        'The claim is wrong, because Be and Ca have different numbers of shells, and only the shell count matters for family behaviour',
        'The claim is wrong, because the two elements are in different periods',
        'The claim is correct, because both have 2 outer-shell electrons, and reactions are decided by the outer-shell electron count rather than the period (so Be and Ca are both Group 2)',
        'The claim is correct, but only because both have an even total number of electrons',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'cpt-elec-shells-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "An element X has 16 electrons. Predict its group and period without looking at the periodic table."',
      tier: 'challenge',
      steps: [
        'Total electrons = 16, so 16 electrons must be placed in shells using the 2, 8, 8 rule',
        'Place 2 in shell 1 (14 left), then 8 in shell 2 (6 left), then 6 in shell 3',
        'Write the configuration: 2, 8, 6',
        null,
        'Period: 3 numbers in the configuration, so 3 shells in use, giving Period 3 (so X is sulfur)',
      ],
      missingStepIndex: 3,
      correctStep:
        'Group: outer shell holds 6 electrons, so X sits in Group 6',
      xpValue: 20,
    },
    {
      id: 'cpt-elec-shells-q20',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Helium has the configuration 2, so its outer shell holds 2 electrons. By the group-equals-outer rule, helium must belong to Group 2 with magnesium and calcium." Which statement best evaluates this?',
      tier: 'challenge',
      options: [
        'The pupil is right; helium reacts like magnesium because both have 2 outer electrons',
        'The pupil is right; helium is in Group 2 of the noble gases',
        'The pupil is wrong; helium has a FULL outer shell (shell 1 holds a maximum of 2), which makes it stable and unreactive, so it sits in Group 0/8 with the other noble gases',
        'The pupil is wrong; helium has no outer shell at all',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-elec-shells-mis-group0-zero-outer',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F) Q02 on the periodic table: candidates "frequently confused period and group numbers, especially for sodium and potassium". Reinforced by CGP KS3 Chemistry Study Book p.30 on reading the periodic table.
    {
      id: 'cpt-elec-shells-mis-period-vs-group',
      description:
        'The period number of an element equals the number of electrons in its outer shell.',
      triggerAnswer: 'period-vs-group',
      correction:
        'It is the GROUP number that equals the outer-electron count. The PERIOD number equals the number of shells in use.',
      reExplanation:
        'Sodium (2, 8, 1) and potassium (2, 8, 8, 1) both have 1 outer electron, so both sit in Group 1. Sodium uses 3 shells (Period 3) and potassium uses 4 shells (Period 4). Group is read along the top of the table from the outer shell. Period is read down the side from the number of shells. Mixing the two up is the most common Year 7 slip on this topic.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H) on noble gases: candidates "believed Group 0 means zero outer electrons" rather than a full outer shell. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on the periodic table.
    {
      id: 'cpt-elec-shells-mis-group0-zero-outer',
      description:
        'Group 0 elements (helium, neon, argon) have 0 electrons in their outer shell, which is why they are unreactive.',
      triggerAnswer: 'group0-zero-outer',
      correction:
        'Group 0 elements have a FULL outer shell, not an empty one. Helium has 2 outer electrons (shell 1 full); neon and argon have 8 outer electrons (shell 2 or shell 3 full).',
      reExplanation:
        'The 0 in Group 0/8 is a historical label, not a count. The atoms in that column have FULL outer shells, which is the most stable arrangement. Helium fills shell 1 with 2 electrons; neon fills shell 2 with 8; argon fills shell 3 with 8 at KS3. A full outer shell means the atom has no need to gain, lose or share electrons, and that is the real reason noble gases barely react.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F) Q04 on the periodic table: candidates "applied the simple group-equals-outer rule to iron and copper in the central block". Reinforced by RSC Education article "Why transition metals break the simple group rule" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-elec-shells-mis-transition-same-rule',
      description:
        'The "group number equals outer electrons" rule covers every column on the periodic table, including the central block of metals like iron and copper.',
      triggerAnswer: 'transition-same-rule',
      correction:
        'At KS3 the rule applies only to the main groups (1, 2, 3 to 0/8). The middle block (transition metals) follows a different pattern and is not numbered with the simple group rule.',
      reExplanation:
        'A Year 7 chemist can read a configuration straight off the table for sodium, magnesium, aluminium and chlorine, but iron and copper sit in the middle block of the chart and obey their own rules at GCSE and beyond. KS3 chemistry treats the central block as a separate family of "transition metals" with shared metal properties, not as Group 8 or Group 11 in the simple sense.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on family behaviour: pupils "explained why sodium and potassium react the same by saying they have the same total number of electrons". Reinforced by Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F) Q08.
    {
      id: 'cpt-elec-shells-mis-total-electrons-equal',
      description:
        'Elements in the same group react the same way because they have the same TOTAL number of electrons.',
      triggerAnswer: 'total-electrons-equal',
      correction:
        'Elements in the same group have the same number of OUTER electrons, not the same total. Sodium has 11 electrons total and potassium has 19, but each has 1 outer electron, which is why they react alike.',
      reExplanation:
        'Reactions happen at the outer shell, the part of the atom that meets other atoms. Lithium, sodium and potassium have very different totals (3, 11, 19) but the same outer count (1). That single outer electron is what each metal loses when it reacts, so the same kind of bond forms and the same kind of product appears. Total electrons differ; outer count is what matches.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q03 on electron configurations: candidates "started filling at the outermost shell rather than the innermost". Reinforced by CGP KS3 Chemistry Study Book p.21 worked-example box on shell filling order.
    {
      id: 'cpt-elec-shells-mis-outer-is-innermost',
      description:
        'The OUTER shell of an atom is the one closest to the nucleus, because electrons stack from the outside in.',
      triggerAnswer: 'outer-is-innermost',
      correction:
        'The outer shell is the shell FURTHEST from the nucleus. Electrons fill the innermost shell first, then work outwards.',
      reExplanation:
        'Imagine the nucleus at the centre of a target and the shells as rings drawn around it. The first ring around the nucleus is shell 1; the next ring out is shell 2, and so on. Shell 1 fills first because it is at lowest energy. The outer shell is whichever ring is the furthest out for that atom: shell 2 for lithium (2, 1), shell 3 for sodium (2, 8, 1), shell 4 for potassium (2, 8, 8, 1).',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F) Q05 on electron arrangements: candidates "wrote that shell 2 can hold 18 electrons at KS3", confusing shell 2 with shell 3 (KS4) caps. Reinforced by CGP KS3 Chemistry Study Book p.21 Common Mistake box.
    {
      id: 'cpt-elec-shells-mis-shell-2-holds-18',
      description:
        'Shell 2 can hold up to 18 electrons in the Year 7 (2, 8, 8) rule.',
      triggerAnswer: 'shell-2-holds-18',
      correction:
        'In the KS3 (2, 8, 8) rule, shell 2 holds a maximum of 8 electrons, not 18. Once shell 2 reaches 8 (neon), any extra electrons must start shell 3.',
      reExplanation:
        'The 2, 8, 8 rule names three caps in turn: 2 for shell 1, 8 for shell 2, 8 for shell 3 at Year 7. The 18 figure comes from a more advanced model used at GCSE and beyond. For Year 7 chemistry you stick to 2, 8, 8 across the first 20 elements; that is enough to read every group and period on the wall chart correctly.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F) Q06 on group numbering: candidates "wrote that Group 7 elements have a full outer shell and Group 0 elements are one short of full". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on stability.
    {
      id: 'cpt-elec-shells-mis-group7-full',
      description:
        'Group 7 elements (chlorine, bromine, iodine) have a full outer shell, which is why they are reactive.',
      triggerAnswer: 'group7-full',
      correction:
        'Group 7 elements have 7 outer electrons, ONE SHORT of a full shell. That is why they readily gain 1 electron and react strongly. Group 0/8 elements are the ones with a full outer shell.',
      reExplanation:
        'Picture chlorine with configuration 2, 8, 7. The third shell holds 7 electrons but could take 8, so chlorine is one electron short of full. Gaining a single electron fills the shell and produces a stable Cl- ion, which is why chlorine reacts vigorously with metals and with hydrogen. Argon (2, 8, 8), one column to the right, has the full outer shell that chlorine is reaching for.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
