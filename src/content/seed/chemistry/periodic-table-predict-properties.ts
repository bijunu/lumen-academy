import type { SkillNode } from '@/types/content'

export const predictElementProperties: SkillNode = {
  id: 'chemistry-periodic-table-predict-properties',
  title: 'Predicting Element Properties',
  description:
    'Use the position of an element on the periodic table to predict its appearance, state, reactivity and bonding pattern, even when the element name is hidden. Apply four reading rules: group fixes the count of outer-shell electrons (and so the tendency to lose, gain or share); Group 1 reactivity rises down the column while Group 7 reactivity falls; the staircase line splits metals (left) from non-metals (right); and the period counts the electron shells. Mendeleev predicted the chemistry of undiscovered elements by reading the gaps in the table; this node trains the same skill on Year 7 examples.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'challenge',
  prerequisites: ['chemistry-periodic-table-group-1-7'],
  curriculum: {
    ks3Objective:
      'Using the periodic table to predict the properties of an unknown element based on its position (qualitative reasoning: group family, period trends, electron arrangement).',
    awardingBodies: {
      aqa: '4.1.2.1 The periodic table; using position to predict properties (8462)',
      edexcel: 'Topic 1.30 The periodic table; predicting properties from position (1CH0)',
      ocr: 'C1.2a The periodic table: using position to infer properties (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-predict-scene-rules',
      title: 'Four Reading Rules for an Unknown Element',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk through the four rules that turn a position on the periodic table into a prediction about the element.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">READING AN UNKNOWN ELEMENT FROM ITS POSITION</text><g><rect x="20" y="34" width="320" height="160" fill="none" stroke="#1E3A8A" stroke-width="1"/><rect x="20" y="34" width="40" height="160" fill="#FCA5A5" opacity="0.5"/><rect x="60" y="34" width="40" height="160" fill="#FBBF24" opacity="0.3"/><rect x="100" y="34" width="180" height="160" fill="#F1F5F9" opacity="0.6"/><rect x="280" y="34" width="60" height="160" fill="#FEF3C7"/><rect x="320" y="34" width="20" height="160" fill="#A7F3D0"/><polyline points="280,34 280,58 300,58 300,82 320,82 320,106 340,106" fill="none" stroke="#475569" stroke-width="2.5"/></g><text x="40" y="50" text-anchor="middle" font-size="7" fill="#7F1D1D" font-weight="600">Group 1</text><text x="80" y="50" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">Group 2</text><text x="190" y="50" text-anchor="middle" font-size="7" fill="#475569" font-weight="600">transition block</text><text x="310" y="50" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="600">Groups 3 to 7</text><text x="330" y="50" text-anchor="middle" font-size="6" fill="#064E3B" font-weight="600">Group 0</text><text x="14" y="80" text-anchor="end" font-size="6" fill="#1E3A8A">Period 2</text><text x="14" y="110" text-anchor="end" font-size="6" fill="#1E3A8A">Period 3</text><text x="14" y="140" text-anchor="end" font-size="6" fill="#1E3A8A">Period 4</text><g><circle cx="40" cy="130" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.2"/><text x="40" y="133" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="700">1</text></g><g><circle cx="330" cy="80" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.2"/><text x="330" y="83" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="700">2</text></g><g><circle cx="290" cy="110" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.2"/><text x="290" y="113" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="700">3</text></g><g><circle cx="14" cy="170" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="1.2"/><text x="14" y="173" text-anchor="middle" font-size="7" fill="#FFFFFF" font-weight="700">4</text></g><text x="180" y="210" text-anchor="middle" font-size="7" fill="#1E3A8A">Same rules used by Mendeleev to predict the chemistry of the gaps in his 1869 table.</text></svg>',
        hotspots: [
          {
            id: 'cpt-predict-h-rule1',
            x: 11,
            y: 59,
            label: 'Rule 1: group fixes outer-shell electrons',
            description:
              'The group number (for the main groups) tells you how many electrons sit in the outer shell. Group 1 has 1 outer electron and tends to lose it; Group 7 has 7 and tends to gain one; Group 0 has a full shell and shares or loses none.',
          },
          {
            id: 'cpt-predict-h-rule2',
            x: 91,
            y: 36,
            label: 'Rule 2: reactivity trends down a group',
            description:
              'Group 1 reactivity rises going down (lithium gentle, potassium vigorous, caesium violent). Group 7 reactivity falls going down (chlorine very reactive, iodine far less so). Group 0 stays unreactive top to bottom.',
          },
          {
            id: 'cpt-predict-h-rule3',
            x: 81,
            y: 50,
            label: 'Rule 3: staircase splits metals from non-metals',
            description:
              'Trace the zig-zag staircase down the right of the table. Elements on its left are metals (shiny, conduct, react by losing electrons). Elements on its right are non-metals (often coloured, brittle as solids, react by gaining or sharing electrons).',
          },
          {
            id: 'cpt-predict-h-rule4',
            x: 4,
            y: 77,
            label: 'Rule 4: period counts electron shells',
            description:
              'A period-2 element has 2 electron shells, a period-3 element has 3 shells, and so on. Atoms in lower periods are larger and (for metals) hold their outer electron more loosely, which raises Group 1 reactivity going down.',
          },
        ],
      },
    },
    {
      id: 'cpt-predict-scene-rubidium',
      title: 'Worked Read: Element X at Group 1, Period 5',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read element X (rubidium) off its position. Predict appearance, state, reactivity and bonding without naming it first.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">ELEMENT X: GROUP 1, PERIOD 5</text><g><rect x="40" y="40" width="60" height="160" fill="#FCA5A5" opacity="0.5" stroke="#7F1D1D" stroke-width="0.6"/><rect x="40" y="40" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="58" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Li</text><rect x="40" y="72" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="90" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Na</text><rect x="40" y="104" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="122" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">K</text><rect x="40" y="136" width="60" height="32" fill="#FDE68A" stroke="#7C2D12" stroke-width="1"/><text x="70" y="154" text-anchor="middle" font-size="9" fill="#7C2D12" font-weight="700">X</text><rect x="40" y="168" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="186" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Cs</text><text x="70" y="34" text-anchor="middle" font-size="7" fill="#7F1D1D" font-weight="600">Group 1</text></g><g><rect x="140" y="50" width="200" height="155" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="240" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">PREDICTIONS FROM POSITION</text><text x="148" y="86" font-size="8" fill="#1E3A8A">- shiny silver metal when freshly cut</text><text x="148" y="100" font-size="8" fill="#1E3A8A">- soft enough to slice with a knife</text><text x="148" y="114" font-size="8" fill="#1E3A8A">- stored under oil (reacts with air)</text><text x="148" y="128" font-size="8" fill="#1E3A8A">- 1 outer electron, lost in bonding</text><text x="148" y="142" font-size="8" fill="#1E3A8A">- reacts with water to give H₂ gas</text><text x="148" y="156" font-size="8" fill="#1E3A8A">- solution turns indicator blue (alkaline)</text><text x="148" y="170" font-size="8" fill="#7F1D1D" font-weight="600">- more reactive than potassium above</text><text x="148" y="184" font-size="8" fill="#7F1D1D" font-weight="600">- less reactive than caesium below</text><text x="148" y="198" font-size="7" fill="#475569" font-style="italic">(X = rubidium, Rb, atomic number 37)</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-predict-h-rb-group',
            x: 18,
            y: 70,
            label: 'In Group 1, between K and Cs',
            description:
              'X sits one row below potassium and one row above caesium in Group 1. So X is a member of the alkali metal family with one outer-shell electron.',
          },
          {
            id: 'cpt-predict-h-rb-appearance',
            x: 50,
            y: 40,
            label: 'Appearance and bonding prediction',
            description:
              'All Group 1 elements are shiny soft silver metals when fresh. X will tarnish in air, so it has to be stored under oil. It will lose its single outer electron when it reacts, forming a 1+ ion.',
          },
          {
            id: 'cpt-predict-h-rb-water',
            x: 50,
            y: 65,
            label: 'Reaction with water prediction',
            description:
              'Like sodium and potassium, X will react vigorously with cold water. Hydrogen gas comes off, and the leftover solution is alkaline, so universal indicator turns blue or purple.',
          },
          {
            id: 'cpt-predict-h-rb-trend',
            x: 50,
            y: 85,
            label: 'Reactivity placed within the group',
            description:
              'Reactivity rises down Group 1. X must be more reactive than potassium (one row above) and less reactive than caesium (one row below). It would explode in a school sink, so real schools never use it.',
          },
        ],
      },
    },
    {
      id: 'cpt-predict-scene-bromine',
      title: 'Worked Read: Element Y at Group 7, Period 4',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read element Y (bromine) off its position. Use the Group 7 colour and state trend.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#064E3B">ELEMENT Y: GROUP 7, PERIOD 4</text><g><rect x="40" y="40" width="60" height="160" fill="#A7F3D0" opacity="0.5" stroke="#064E3B" stroke-width="0.6"/><rect x="40" y="40" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="58" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">F</text><rect x="40" y="72" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="90" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Cl</text><rect x="40" y="104" width="60" height="32" fill="#FDE68A" stroke="#7C2D12" stroke-width="1"/><text x="70" y="122" text-anchor="middle" font-size="9" fill="#7C2D12" font-weight="700">Y</text><rect x="40" y="136" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="154" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">I</text><text x="70" y="34" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">Group 7</text></g><g><rect x="140" y="50" width="200" height="155" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="240" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">PREDICTIONS FROM POSITION</text><text x="148" y="86" font-size="8" fill="#1E3A8A">- non-metal (right of staircase)</text><text x="148" y="100" font-size="8" fill="#1E3A8A">- 7 outer electrons, gains 1 in bonding</text><text x="148" y="114" font-size="8" fill="#1E3A8A">- exists as diatomic molecules Y₂</text><text x="148" y="128" font-size="8" fill="#1E3A8A">- coloured (deeper than chlorine)</text><text x="148" y="142" font-size="8" fill="#1E3A8A">- liquid at room temperature (20 °C)</text><text x="148" y="156" font-size="8" fill="#7F1D1D" font-weight="600">- less reactive than chlorine above</text><text x="148" y="170" font-size="8" fill="#7F1D1D" font-weight="600">- more reactive than iodine below</text><text x="148" y="184" font-size="8" fill="#1E3A8A">- displaces iodide from KI solution</text><text x="148" y="198" font-size="7" fill="#475569" font-style="italic">(Y = bromine, Br, red-brown liquid)</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-predict-h-br-group',
            x: 18,
            y: 60,
            label: 'In Group 7, between Cl and I',
            description:
              'Y sits between chlorine (period 3) and iodine (period 5) in Group 7. So Y is a halogen with 7 outer-shell electrons and a strong tendency to gain one.',
          },
          {
            id: 'cpt-predict-h-br-state',
            x: 50,
            y: 50,
            label: 'State and colour prediction',
            description:
              'Group 7 goes gas (F₂, Cl₂) to liquid in the middle to solid (I₂) further down. Y sits between Cl and I, so it should be a liquid at room temperature. Halogen colours deepen down the group, so Y is darker than pale yellow-green chlorine.',
          },
          {
            id: 'cpt-predict-h-br-bonding',
            x: 50,
            y: 70,
            label: 'Bonding prediction',
            description:
              'Like the other halogens, Y exists as diatomic molecules Y₂ (two atoms sharing electrons). When it reacts with a metal it gains 1 electron to form a 1- ion (a Y- halide), and when it meets a less reactive halide solution it will displace that halide.',
          },
          {
            id: 'cpt-predict-h-br-reactivity',
            x: 50,
            y: 88,
            label: 'Reactivity placed within the group',
            description:
              'Group 7 reactivity falls going down, the opposite of Group 1. Y must be less reactive than chlorine (one row above) and more reactive than iodine (one row below). Chlorine water will push Y out of a solution of its salt.',
          },
        ],
      },
    },
    {
      id: 'cpt-predict-scene-krypton',
      title: 'Worked Read: Element Z at Group 0, Period 4',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read element Z (krypton) off its position. Use the Group 0 noble-gas rule to predict its chemistry.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#064E3B">ELEMENT Z: GROUP 0, PERIOD 4</text><g><rect x="40" y="40" width="60" height="160" fill="#A7F3D0" opacity="0.5" stroke="#064E3B" stroke-width="0.6"/><rect x="40" y="40" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="58" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">He</text><rect x="40" y="72" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="90" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Ne</text><rect x="40" y="104" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="122" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Ar</text><rect x="40" y="136" width="60" height="32" fill="#FDE68A" stroke="#7C2D12" stroke-width="1"/><text x="70" y="154" text-anchor="middle" font-size="9" fill="#7C2D12" font-weight="700">Z</text><rect x="40" y="168" width="60" height="32" fill="#FFFFFF" stroke="#475569" stroke-width="0.5"/><text x="70" y="186" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Xe</text><text x="70" y="34" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">Group 0</text></g><g><rect x="140" y="50" width="200" height="155" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="240" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">PREDICTIONS FROM POSITION</text><text x="148" y="86" font-size="8" fill="#1E3A8A">- colourless gas at room temperature</text><text x="148" y="100" font-size="8" fill="#1E3A8A">- single atoms (monatomic), not Z₂</text><text x="148" y="114" font-size="8" fill="#1E3A8A">- full outer electron shell</text><text x="148" y="128" font-size="8" fill="#1E3A8A">- almost no chemical reactions</text><text x="148" y="142" font-size="8" fill="#1E3A8A">- denser than air, denser than argon</text><text x="148" y="156" font-size="8" fill="#1E3A8A">- boiling point above that of argon</text><text x="148" y="170" font-size="8" fill="#1E3A8A">- used in bright high-intensity lights</text><text x="148" y="184" font-size="8" fill="#7F1D1D" font-weight="600">- behaves like Ar above and Xe below</text><text x="148" y="198" font-size="7" fill="#475569" font-style="italic">(Z = krypton, Kr, atomic number 36)</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-predict-h-kr-group',
            x: 18,
            y: 70,
            label: 'In Group 0, between Ar and Xe',
            description:
              'Z sits between argon (period 3) and xenon (period 5) in Group 0. Its outer shell is already full, so it has no spare electrons to give, take or share.',
          },
          {
            id: 'cpt-predict-h-kr-state',
            x: 50,
            y: 40,
            label: 'State and colour prediction',
            description:
              'All noble gases stay gases at room temperature and are colourless. Going down the group the gases become denser and harder to liquefy, so Z is denser than argon and has a higher boiling point than argon (but still well below 0 °C).',
          },
          {
            id: 'cpt-predict-h-kr-bonding',
            x: 50,
            y: 60,
            label: 'Bonding prediction',
            description:
              'A full outer shell means Z does not need to lose, gain or share electrons. Z exists as single atoms (monatomic), not as Z₂ molecules. It almost never forms compounds.',
          },
          {
            id: 'cpt-predict-h-kr-uses',
            x: 50,
            y: 80,
            label: 'Real-world use from the prediction',
            description:
              'Because Z barely reacts, it is safe to seal inside a glass tube and pass an electric current through it. UK stadium floodlights and some camera flash bulbs use krypton for a bright white glow.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-predict-worked-1',
      title: 'Predicting rubidium from Group 1, Period 5',
      steps: [
        {
          explanation:
            'Question: an element X is in Group 1, Period 5 of the periodic table. Predict four things about X: its group family, its appearance and state at room temperature, how it reacts with cold water, and how its reactivity compares with potassium and caesium.',
        },
        {
          explanation:
            'Step 1: read off the group. Group 1 means X is an alkali metal with 1 outer-shell electron. It is to the left of the staircase, so it is a metal.',
          maths: 'Group 1 → alkali metal → 1 outer electron',
        },
        {
          explanation:
            'Step 2: read off the family properties. All Group 1 elements are shiny silver metals when freshly cut, soft enough to slice with a knife, and they react in air, so they are stored under oil.',
          maths: 'family: shiny, soft, stored under oil',
        },
        {
          explanation:
            'Step 3: predict the reaction with water. Lithium, sodium and potassium all react with cold water to give off hydrogen gas and form an alkaline solution. So X will do the same: hydrogen bubbles off, and universal indicator turns blue or purple.',
          maths: 'X + water → metal hydroxide + H₂ (alkaline solution)',
        },
        {
          explanation:
            'Step 4: place X in the group reactivity trend. Reactivity rises going down Group 1. X is below potassium and above caesium, so X is more reactive than potassium and less reactive than caesium. In real life X is rubidium, and the prediction matches what chemists observe.',
          maths: 'K < X (Rb) < Cs',
        },
      ],
    },
    {
      id: 'cpt-predict-worked-2',
      title: 'Predicting bromine from Group 7, Period 4',
      steps: [
        {
          explanation:
            'Question: an element Y is in Group 7, Period 4. Predict its group family, its state and colour at room temperature, how it bonds, and where it fits in the Group 7 reactivity order.',
        },
        {
          explanation:
            'Step 1: read off the group. Group 7 means Y is a halogen with 7 outer-shell electrons. It sits to the right of the staircase, so it is a non-metal.',
          maths: 'Group 7 → halogen → 7 outer electrons',
        },
        {
          explanation:
            'Step 2: predict state and colour. Going down Group 7 the state runs gas (F, Cl) to liquid in the middle to solid (I) further down. Y is between chlorine (gas) and iodine (solid), so Y should be a liquid at room temperature. Colour deepens going down, so Y is darker than chlorine.',
          maths: 'state at 20 °C: liquid; colour: deeper than pale yellow-green',
        },
        {
          explanation:
            'Step 3: predict bonding. Halogens share electrons with each other in diatomic molecules. So Y exists as Y₂ molecules. When Y reacts with a Group 1 metal it gains 1 electron and forms a 1- ion (a halide).',
          maths: 'molecule: Y₂; ion in salts: Y⁻',
        },
        {
          explanation:
            'Step 4: place Y in the group reactivity trend. Reactivity falls going down Group 7. Y is below chlorine and above iodine, so Y is less reactive than chlorine and more reactive than iodine. So chlorine water will displace Y from a solution of its salt (KY → KCl plus free Y). Y is bromine, and bromine matches the prediction: a red-brown liquid that forms Br₂ molecules and is displaced by chlorine.',
          maths: 'Cl > Y (Br) > I in Group 7 reactivity',
        },
      ],
    },
    {
      id: 'cpt-predict-worked-3',
      title: 'Predicting a brand new Group 1 element below caesium',
      steps: [
        {
          explanation:
            'Question: in a science club at a Manchester grammar school the teacher asks pupils to predict what an undiscovered element Q would be like, given that Q would sit one row below caesium in Group 1 (Period 8, atomic number 119). Pupils may not look up its name; predictions must come only from the position.',
        },
        {
          explanation:
            'Step 1: group reading. Q is in Group 1, so Q is an alkali metal with 1 outer-shell electron. Q is left of the staircase, so it is a metal that will lose its outer electron when it reacts.',
          maths: 'group: 1, outer electron: 1, metal',
        },
        {
          explanation:
            'Step 2: family check. Like lithium, sodium, potassium, rubidium and caesium, Q should be a shiny silver soft metal that tarnishes in air. It would have to be stored under oil (and probably under a noble-gas blanket as well, given its reactivity).',
          maths: 'family: shiny, soft, stored under oil',
        },
        {
          explanation:
            'Step 3: trend reading. Reactivity rises going down Group 1. Q sits one row below caesium, the current most reactive alkali metal in school chemistry. So Q is predicted to be the most reactive alkali metal yet known. It would react explosively with even a trace of water.',
          maths: 'Cs < Q in Group 1 reactivity',
        },
        {
          explanation:
            'Step 4: link back to Mendeleev. This is the same method Mendeleev used in 1869 to predict the chemistry of eka-aluminium (later named gallium) and eka-silicon (later germanium). Position on the table came first; properties followed. Pupils can predict before chemists have a sample to test.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-predict-q1',
      type: 'multiple-choice',
      stem: 'An element X is in Group 1, Period 5. The element is sealed under oil in a school jar. Which of the following predictions about X is best supported by its position?',
      tier: 'core',
      options: [
        'X is a brittle yellow non-metal that does not react with water',
        'X is a shiny soft silver metal that reacts vigorously with water to give off hydrogen gas',
        'X is a colourless gas with a full outer shell',
        'X is a brown liquid that displaces iodine from potassium iodide',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Group 1 sets the family (alkali metals). Period 5 only places X within the group.',
      misconceptionId: 'cpt-predict-mis-position-guess',
    },
    {
      id: 'cpt-predict-q2',
      type: 'multiple-choice',
      stem: 'An element Y is in Group 7, Period 4. Which of these statements is the best read of Y from its position?',
      tier: 'core',
      options: [
        'Y is a noble gas that almost never reacts',
        'Y is a shiny metal that reacts with water',
        'Y is a coloured non-metal that exists as Y₂ molecules and gains 1 electron when it bonds',
        'Y is a transition metal used in stainless steel',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Group 7 = halogen family. The right of the staircase is non-metal territory.',
    },
    {
      id: 'cpt-predict-q3',
      type: 'multiple-choice',
      stem: 'An element Z is in Group 0, Period 4. Which prediction best fits Z?',
      tier: 'core',
      options: [
        'Z is a colourless gas of single atoms that almost never reacts',
        'Z is an alkali metal that explodes in water',
        'Z is a coloured liquid that displaces bromide',
        'Z is a metal that reacts with acid to give hydrogen',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Group 0 sits at the far right of the table, beyond the staircase.',
      misconceptionId: 'cpt-predict-mis-noble-reactive',
    },
    {
      id: 'cpt-predict-q4',
      type: 'free-text',
      stem: 'A pupil sees an element labelled only by its position: Group 2, Period 4. In one short sentence, state the most reliable prediction about the element from its position alone.',
      tier: 'core',
      sampleAnswer:
        'The element is a metal (left of the staircase) with 2 outer-shell electrons.',
      keywords: ['metal', '2', 'outer'],
      xpValue: 10,
      hint: 'Use Rule 1 (group sets outer-shell electrons) and Rule 3 (staircase splits metal from non-metal).',
    },
    {
      id: 'cpt-predict-q5',
      type: 'numeric-entry',
      stem: 'An element is in Group 6 of the periodic table. Using the main-group rule, how many electrons sit in its outer shell? Give a single number.',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'For the main groups (1, 2 and 3 to 7 plus 0), the group number equals the outer-shell electron count.',
    },
    {
      id: 'cpt-predict-q6',
      type: 'numeric-entry',
      stem: 'An element sits in Period 3 of the periodic table. How many electron shells does its atom use? Give a single number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The period number is the same as the number of electron shells in use.',
    },
    {
      id: 'cpt-predict-q7',
      type: 'numeric-entry',
      stem: 'Look at this short list of elements: Na, Cl, Ar, Mg, K. How many of them are metals?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Place each element on the table. Left of the staircase is metal; right of the staircase is non-metal; Group 0 is non-metal.',
    },
    {
      id: 'cpt-predict-q8',
      type: 'multiple-choice',
      stem: 'Element X is in Group 1, Period 5. Element X reacts with cold water. Which of the following is the closest prediction for what would be seen, given that potassium (one row above X) reacts vigorously with cold water?',
      tier: 'confident',
      options: [
        'X reacts more gently than potassium',
        'X does not react with water at all',
        'X reacts more vigorously than potassium and may catch fire',
        'X reacts in exactly the same way as lithium',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Reactivity rises going down Group 1. X is below potassium.',
      misconceptionId: 'cpt-predict-mis-group7-trend',
    },
    {
      id: 'cpt-predict-q9',
      type: 'multiple-choice',
      stem: 'Element Y is in Group 7, Period 4. Bromine is one of the first elements on a list pupils predict in this position. Chlorine water is added to a colourless solution of the salt of element Y (KY). Which best matches the prediction from position?',
      tier: 'confident',
      options: [
        'No reaction, because Y is below chlorine in Group 7',
        'The solution turns red-brown as chlorine displaces Y from KY',
        'The solution turns purple as Y displaces chlorine',
        'A grey solid forms, because Y becomes a metal',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Chlorine sits above Y in Group 7. Group 7 reactivity falls going down. A more reactive halogen displaces a less reactive one.',
    },
    {
      id: 'cpt-predict-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims: "Element Z in Group 0, Period 4 should react like potassium because they are both in Period 4." Which response is correct?',
      tier: 'confident',
      options: [
        'The pupil is right. Elements in the same period share chemical properties.',
        'The pupil is right. Period 4 is the reactive row.',
        'The pupil is wrong. Group, not period, sets the chemical family. Z is a noble gas; potassium is an alkali metal.',
        'The pupil is wrong because Z is a metal too.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Same column shares properties; same row does not.',
      misconceptionId: 'cpt-predict-mis-row-similar',
    },
    {
      id: 'cpt-predict-q11',
      type: 'spot-misconception',
      stem: 'In a chemistry club in Edinburgh, Priya says: "Reactivity always rises going down a group on the periodic table, so iodine must be more reactive than chlorine because iodine is below chlorine."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Reactivity rises down every group, so iodine is more reactive than chlorine.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Reactivity rises down Group 1 but falls down Group 7. Chlorine is more reactive than iodine, so chlorine displaces iodine from a potassium iodide solution.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cpt-predict-mis-group7-trend',
    },
    {
      id: 'cpt-predict-q12',
      type: 'numeric-entry',
      stem: 'A pupil predicts the chemistry of an element in Group 1, Period 5 (element X, which is rubidium). They write down four predicted properties: shiny silver metal; reacts with water; more reactive than potassium; less reactive than caesium. How many of these four properties are correctly read off from the position of X?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Check each prediction against the rules: Group 1 family, water reaction, reactivity rises down the group.',
    },
    {
      id: 'cpt-predict-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil reads off element Q from Group 7, Period 5 (iodine). The sequence below leads to the prediction that Q is a coloured solid at room temperature.',
      tier: 'confident',
      steps: [
        'Q is in Group 7, so Q is a halogen with 7 outer-shell electrons.',
        'Group 7 colour deepens going down, and state runs gas (F, Cl) to liquid (Br) to solid further down.',
        null,
        'So Q is predicted to be a dark coloured solid at room temperature, which matches iodine.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Q sits in Period 5, below bromine (the Group 7 liquid), so Q is even further down the column than bromine.',
      xpValue: 20,
    },
    {
      id: 'cpt-predict-q14',
      type: 'free-text',
      stem: 'A teacher in Sevenoaks sets a prediction puzzle. Element W is in Group 1, Period 8 (atomic number 119, undiscovered at present). In one short sentence, write the best prediction about W supported by its position on the periodic table.',
      tier: 'confident',
      sampleAnswer:
        'W is predicted to be the most reactive alkali metal yet known, even more reactive than caesium.',
      keywords: ['alkali', 'metal', 'reactive', 'caesium'],
      xpValue: 15,
      hint: 'Group 1 trend continues: reactivity rises down the column, so the lowest member is the most reactive.',
      misconceptionId: 'cpt-predict-mis-position-guess',
    },
    {
      id: 'cpt-predict-q15',
      type: 'drag-order',
      stem: 'Place these elements in order of increasing reactivity with water, using only their positions on the periodic table: lithium (Group 1, Period 2), sodium (Group 1, Period 3), potassium (Group 1, Period 4), rubidium (Group 1, Period 5).',
      tier: 'confident',
      items: ['potassium', 'rubidium', 'lithium', 'sodium'],
      correctOrder: [2, 3, 0, 1],
      xpValue: 20,
      hint: 'Group 1 reactivity rises going down. Lowest in the column is most reactive.',
    },
    {
      id: 'cpt-predict-q16',
      type: 'multiple-choice',
      stem: 'A pupil sees an element labelled at Group 0, Period 4. Without naming it, which everyday use is best supported by the prediction from its position?',
      tier: 'challenge',
      options: [
        'A reactive metal for the cathode of a battery',
        'A coloured gas to disinfect swimming pools',
        'A liquid antiseptic for first-aid kits',
        'An unreactive gas to fill bright white high-intensity floodlights at a UK football stadium',
      ],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Group 0 means almost no reactions. Krypton is the Period 4 noble gas.',
    },
    {
      id: 'cpt-predict-q17',
      type: 'spot-misconception',
      stem: 'Olu says: "The group number always tells you how many outer-shell electrons an element has, so iron (in the middle block) has 8 outer electrons because it is in the eighth column from the left."',
      tier: 'challenge',
      statements: [
        {
          text: 'Olu is right. The rule applies to every element in the periodic table, including iron.',
          isMisconception: true,
        },
        {
          text: 'Olu is wrong. The group-equals-outer-electrons rule only works for the main groups (1, 2, and 3 to 7, plus 0). Transition metals (iron, copper, zinc and the rest of the middle block) follow a different rule at KS3, so the group-number shortcut does not apply to them.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-predict-mis-transition-rule',
    },
    {
      id: 'cpt-predict-q18',
      type: 'multiple-choice',
      stem: 'A new element, called for now "ekafrancium", is predicted to sit one row below francium in Group 1 (Period 8). Pupils have to predict its chemistry from position only. Which set of predictions is best supported?',
      tier: 'challenge',
      options: [
        'A shiny soft metal, more reactive than caesium, lost as a 1+ ion in compounds',
        'A coloured non-metal that exists as diatomic molecules',
        'An unreactive monatomic gas that would fill a balloon',
        'A heavy transition metal used in jewellery',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Group 1 family rule plus Group 1 trend (reactivity rises down the column).',
    },
    {
      id: 'cpt-predict-q19',
      type: 'multiple-choice',
      stem: 'A pupil claims: "The group number is the same as the atomic mass of the element, because both are numbers on the periodic table." Which response is correct?',
      tier: 'challenge',
      options: [
        'The pupil is right. Group 1 elements have atomic mass 1.',
        'The pupil is wrong. The group number is the column position and sets the number of outer-shell electrons. The atomic mass is a separate property of the element (close to the total of protons and neutrons in its most common isotope).',
        'The pupil is right for the first 10 elements only.',
        'The pupil is wrong; the group number is the same as the period number instead.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Group is a column index. Atomic mass is a property of the atoms themselves.',
      misconceptionId: 'cpt-predict-mis-group-mass',
    },
    {
      id: 'cpt-predict-q20',
      type: 'multiple-choice',
      stem: 'A pupil reads off element Y at Group 7, Period 4 and predicts: "Y should be coloured, because all halogen colours follow a clear deepening pattern going down the group." Which response is correct?',
      tier: 'challenge',
      options: [
        'The pupil is wrong. Halogen colours are unpredictable and have to be memorised.',
        'The pupil is wrong. Only chlorine has a colour; the rest are colourless.',
        'The pupil is right. Group 7 colours run pale yellow-green (chlorine), red-brown (bromine), dark grey (iodine), so Y between Cl and I should be a deep colour.',
        'The pupil is right, but only because they remembered the colour, not because of position.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Group trends include colour as well as state and reactivity.',
      misconceptionId: 'cpt-predict-mis-colour-random',
    },
    {
      id: 'cpt-predict-q21',
      type: 'numeric-entry',
      stem: 'A school chemistry club lines up four predicted properties for element Y in Group 7, Period 4: red-brown liquid at room temperature; forms Y₂ molecules; less reactive than chlorine; gains 1 electron when bonding. How many of these four predictions are correctly read off from the position of Y?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'Check each property against the four reading rules and the halogen trends.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q05 on predicting properties from periodic table position: candidates "answered that any prediction about an undiscovered element from its position is only a guess and cannot be checked." Reinforced by CGP KS3 Chemistry chapter on the periodic table.
    {
      id: 'cpt-predict-mis-position-guess',
      description:
        'Predicting an element from its periodic table position is only a guess.',
      triggerAnswer: 'position-guess',
      correction:
        'In fact predictions from position are derived from clear periodic patterns. Mendeleev used the same method in 1869 to predict gallium and germanium before they were discovered.',
      reExplanation:
        'The periodic table is laid out so that elements in the same column share outer-shell electron counts, which sets the same family chemistry. Lithium, sodium and potassium all react with water in similar ways because they share Group 1. So a prediction from position is not a guess; it is a reading of the family rule and the within-group trend. When the predicted element is later discovered, its actual chemistry matches the predicted chemistry closely enough to confirm the position.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q07 on Group 7 trends: candidates "stated that reactivity rises down every group of the periodic table, including Group 7." Reinforced by Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education.
    {
      id: 'cpt-predict-mis-group7-trend',
      description:
        'Reactivity always rises going down a group of the periodic table.',
      triggerAnswer: 'group7-trend',
      correction:
        'In fact reactivity rises down Group 1 but falls down Group 7. The trend depends on the group, not on the direction.',
      reExplanation:
        'In Group 1, atoms get larger going down the column, so the single outer-shell electron is held more loosely and is lost more easily, so reactivity rises (lithium gentle, caesium violent). In Group 7, atoms get larger going down too, but here the outer shell has to attract one more electron, and a larger atom attracts that incoming electron less strongly. So Group 7 reactivity falls going down. Chlorine displaces bromide; bromine displaces iodide; iodine displaces neither.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on group versus period: candidates "expected elements in the same period to share the same family chemistry, naming for example sodium and chlorine as similar because both sit in Period 3." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on the periodic table.
    {
      id: 'cpt-predict-mis-row-similar',
      description:
        'Elements in the same period (row) of the periodic table share the same family of properties.',
      triggerAnswer: 'row-similar',
      correction:
        'In fact elements in the same period run from metals on the left to non-metals on the right and end with a noble gas. Family chemistry is set by the group (the column), not the period.',
      reExplanation:
        'Pick Period 3: sodium is a soft reactive metal, magnesium and aluminium are metals too, then silicon is a brittle non-metal, phosphorus and sulfur are non-metals, chlorine is a coloured non-metal gas, and argon is an unreactive noble gas. Those elements differ wildly. Now pick Group 1: lithium, sodium, potassium, rubidium all behave alike. So column equals family. When predicting from position, read the group first, then use the period only to place the element within the group.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education, plus CGP KS3 Chemistry chapter on Group 0: Year 7 learners often expect noble gases to react like other elements at the edge of the table.
    {
      id: 'cpt-predict-mis-noble-reactive',
      description:
        'A Group 0 element should be reactive because it sits at the edge of the periodic table next to the very reactive Group 7.',
      triggerAnswer: 'noble-reactive',
      correction:
        'In fact Group 0 (noble gases) is the least reactive group. A full outer shell means the atom does not need to gain, lose or share electrons.',
      reExplanation:
        'Helium fills party balloons, neon fills glowing shop signs, argon fills double-glazed windows and krypton fills high-intensity floodlights. We choose noble gases for those jobs because they almost never react with anything (no fire, no corrosion, no fumes). The position trick: Group 0 ends every row of the table, so its members already have their outer shell full and have nothing to chemically gain by reacting. So a Group 0 prediction is always "barely reacts", regardless of period.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q05 on the main-group rule: candidates "extended the group-equals-outer-shell-electrons rule to iron in the central block, giving wrong answers of 8 or 9 outer electrons." Reinforced by David Paterson, "Teaching the periodic table at Key Stage 3", RSC Education CPD article (2022-04-26).
    {
      id: 'cpt-predict-mis-transition-rule',
      description:
        'The main-group rule (group number equals outer-shell electrons) applies to every element on the periodic table, including the transition metals in the middle block.',
      triggerAnswer: 'transition-rule',
      correction:
        'In fact the shortcut applies only to the main groups (1, 2, 3 to 7, and 0). Transition metals in the central block follow a different pattern at KS3, so the rule does not apply to them.',
      reExplanation:
        'At Year 7 and Year 8 the safe rule is: read main-group columns by their group number, and treat the central block of transition metals as a separate family with shared metal properties (shiny, hard, often coloured compounds, sometimes magnetic) but without the simple outer-electron rule. When asked to predict properties of an iron-like middle-block element, lean on the metal/non-metal staircase rule and the family hint, not on the group-number shortcut.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the periodic table: documents that Year 7 learners often confuse the group number with the atomic mass. Reinforced by Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q06.
    {
      id: 'cpt-predict-mis-group-mass',
      description:
        'The group number is the same thing as the atomic mass of the element.',
      triggerAnswer: 'group-mass',
      correction:
        'In fact the group is a column index that sets the outer-electron count. The atomic mass is a separate property of the atoms themselves.',
      reExplanation:
        'Pick sodium: its group is 1 (left column) and its atomic mass is about 23. Pick chlorine: its group is 7 and its atomic mass is about 35.5. The two numbers do not match. The group reads off the column position, which tells you how the element will bond. The atomic mass reads off the protons-and-neutrons total of the most common isotope, which tells you how heavy each atom is. Mixing them up gives wrong predictions.',
    },
    // Source: David Paterson, "Teaching the periodic table at Key Stage 3", RSC Education CPD article (2022-04-26): notes that Year 7 learners often expect halogen colours to be unpredictable, missing the clear deepening trend down Group 7. Reinforced by CGP KS3 Chemistry chapter on Group 7.
    {
      id: 'cpt-predict-mis-colour-random',
      description:
        'The colours of the halogens are unpredictable and have to be memorised individually.',
      triggerAnswer: 'colour-random',
      correction:
        'In fact halogen colours follow a clear deepening trend going down Group 7. You can predict the colour of a halogen from its position.',
      reExplanation:
        'Going down Group 7 the colours run: chlorine (pale yellow-green gas), bromine (red-brown liquid), iodine (dark grey shiny solid, with purple vapour when warmed). The trend deepens steadily, so a halogen in Period 4 should sit between pale yellow-green and dark grey, which is exactly the red-brown of bromine. Position-based colour prediction works for halogens just as well as the reactivity-falls-down-the-group rule.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
