import type { SkillNode } from '@/types/content'

export const group7PhysicalStates: SkillNode = {
  id: 'chemistry-periodic-table-group-7-states',
  title: 'Group 7 Physical States',
  description:
    'Look at the halogens of Group 7 as a column of physical things you can pour, weigh and look at. At about 20 °C, fluorine and chlorine are pale gases, bromine is a heavy red-brown liquid, and iodine is a grey-black shiny solid. Going down Group 7, melting points and boiling points rise, density rises, and the colour deepens. Every halogen exists as a pair of atoms joined together (a diatomic molecule, X₂). UK contexts include chlorine in swimming pools, bromine once extracted from North Sea brine, and iodine antiseptic from the pharmacy.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-group-1-7'],
  curriculum: {
    ks3Objective:
      'The physical properties of Group 7 elements (the halogens); states of matter trend down the group; colour trend across the halogens.',
    awardingBodies: {
      aqa: '4.1.2.6 Group 7 (the halogens): physical properties; states of matter and colour (8462)',
      edexcel: 'Topic 1.37 Group 7 halogens: physical properties and trends (1CH0)',
      ocr: 'C1.2d Group 7 halogens: physical states and colour (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-g7-states-scene-states-grid',
      title: 'The Halogen States at Room Temperature',
      type: 'labelled-diagram',
      instructions:
        'Click each jar to see what fluorine, chlorine, bromine and iodine look like at about 20 °C in a sealed school flask.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">GROUP 7 AT ABOUT 20 °C</text><g><rect x="15" y="35" width="75" height="150" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="52" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">F₂</text><text x="52" y="64" text-anchor="middle" font-size="7" fill="#1E3A8A">fluorine</text><rect x="22" y="74" width="60" height="80" rx="6" fill="#FEF9C3" stroke="#A16207" stroke-width="0.6" opacity="0.6"/><text x="52" y="108" text-anchor="middle" font-size="7" fill="#1E3A8A">pale yellow</text><text x="52" y="120" text-anchor="middle" font-size="7" fill="#1E3A8A">gas</text><text x="52" y="170" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">bp −188 °C</text></g><g><rect x="100" y="35" width="75" height="150" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="137" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Cl₂</text><text x="137" y="64" text-anchor="middle" font-size="7" fill="#1E3A8A">chlorine</text><rect x="107" y="74" width="60" height="80" rx="6" fill="#D9F99D" stroke="#3F6212" stroke-width="0.6" opacity="0.7"/><text x="137" y="108" text-anchor="middle" font-size="7" fill="#1E3A8A">yellow-green</text><text x="137" y="120" text-anchor="middle" font-size="7" fill="#1E3A8A">gas</text><text x="137" y="170" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">bp −34 °C</text></g><g><rect x="185" y="35" width="75" height="150" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="222" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Br₂</text><text x="222" y="64" text-anchor="middle" font-size="7" fill="#1E3A8A">bromine</text><rect x="192" y="105" width="60" height="49" rx="4" fill="#B45309" stroke="#7C2D12" stroke-width="0.6" opacity="0.75"/><rect x="192" y="74" width="60" height="32" rx="4" fill="#FED7AA" stroke="#7C2D12" stroke-width="0.5" opacity="0.6"/><text x="222" y="125" text-anchor="middle" font-size="7" fill="#FFFFFF">red-brown</text><text x="222" y="137" text-anchor="middle" font-size="7" fill="#FFFFFF">liquid</text><text x="222" y="92" text-anchor="middle" font-size="6" fill="#7C2D12">brown fumes</text><text x="222" y="170" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">bp 59 °C</text></g><g><rect x="270" y="35" width="75" height="150" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="307" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">I₂</text><text x="307" y="64" text-anchor="middle" font-size="7" fill="#1E3A8A">iodine</text><rect x="277" y="115" width="60" height="39" rx="2" fill="#374151" stroke="#0F172A" stroke-width="0.7"/><rect x="282" y="118" width="8" height="6" fill="#6B7280"/><rect x="294" y="121" width="9" height="5" fill="#6B7280"/><rect x="307" y="118" width="10" height="7" fill="#6B7280"/><rect x="282" y="130" width="11" height="6" fill="#6B7280"/><rect x="295" y="132" width="9" height="6" fill="#6B7280"/><rect x="308" y="131" width="11" height="7" fill="#6B7280"/><rect x="277" y="74" width="60" height="40" rx="4" fill="#7E22CE" stroke="#581C87" stroke-width="0.5" opacity="0.45"/><text x="307" y="92" text-anchor="middle" font-size="6" fill="#581C87">purple vapour</text><text x="307" y="148" text-anchor="middle" font-size="7" fill="#FFFFFF">grey solid</text><text x="307" y="170" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">bp 184 °C</text></g><g><line x1="15" y1="200" x2="345" y2="200" stroke="#7C2D12" stroke-width="1.5" marker-end="url(#arrG7s)"/><defs><marker id="arrG7s" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7C2D12"/></marker></defs><text x="180" y="212" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">GOING DOWN GROUP 7: COLOUR DEEPENS, BOILING POINT RISES, STATE CHANGES GAS → LIQUID → SOLID</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-g7-states-h-f',
            x: 15,
            y: 35,
            label: 'Fluorine: pale yellow gas',
            description:
              'Fluorine (F₂) is a pale yellow gas at 20 °C. Its boiling point is −188 °C, far below room temperature. Schools never demonstrate fluorine as it is too reactive and toxic to handle.',
          },
          {
            id: 'cpt-g7-states-h-cl',
            x: 35,
            y: 35,
            label: 'Chlorine: yellow-green gas',
            description:
              'Chlorine (Cl₂) is a pale yellow-green gas at 20 °C. Its boiling point is −34 °C. A tiny amount of chlorine is added to UK swimming pools and drinking water to kill bacteria.',
          },
          {
            id: 'cpt-g7-states-h-br',
            x: 60,
            y: 35,
            label: 'Bromine: red-brown liquid',
            description:
              'Bromine (Br₂) is a heavy red-brown liquid at 20 °C, with brown fumes hovering above the surface. Its boiling point is 59 °C, just below a hot cup of tea. Bromine used to be extracted from North Sea brine in the UK.',
          },
          {
            id: 'cpt-g7-states-h-i',
            x: 82,
            y: 35,
            label: 'Iodine: grey-black solid',
            description:
              'Iodine (I₂) is a grey-black shiny solid at 20 °C, made of small crystals. Its boiling point is 184 °C. Warm the crystals gently and they sublime, turning straight into a purple vapour. Iodine solution from UK pharmacies works as an antiseptic.',
          },
          {
            id: 'cpt-g7-states-h-trend',
            x: 50,
            y: 90,
            label: 'The state trend',
            description:
              'Going down Group 7, the state changes from gas (F₂, Cl₂) to liquid (Br₂) to solid (I₂). Astatine, at the bottom, is a very rare radioactive solid, predicted to look black.',
          },
        ],
      },
    },
    {
      id: 'cpt-g7-states-scene-diatomic',
      title: 'Halogens Come in Pairs: Diatomic Molecules',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a halogen flask never holds single atoms. Every halogen exists as a pair of atoms joined together.',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#EFF6FF"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">DIATOMIC MOLECULES: HALOGENS COME IN PAIRS (X₂)</text><g><circle cx="60" cy="90" r="20" fill="#D9F99D" stroke="#3F6212" stroke-width="1"/><circle cx="100" cy="90" r="20" fill="#D9F99D" stroke="#3F6212" stroke-width="1"/><line x1="76" y1="90" x2="84" y2="90" stroke="#3F6212" stroke-width="3"/><text x="60" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Cl</text><text x="100" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Cl</text><text x="80" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">Cl₂</text><text x="80" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A">two chlorine atoms</text><text x="80" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">sharing a bond</text></g><g><circle cx="200" cy="90" r="22" fill="#FED7AA" stroke="#7C2D12" stroke-width="1"/><circle cx="244" cy="90" r="22" fill="#FED7AA" stroke="#7C2D12" stroke-width="1"/><line x1="218" y1="90" x2="226" y2="90" stroke="#7C2D12" stroke-width="3"/><text x="200" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Br</text><text x="244" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Br</text><text x="222" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">Br₂</text><text x="222" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A">two bromine atoms</text><text x="222" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">bigger than chlorine</text></g><g><circle cx="305" cy="90" r="25" fill="#374151" stroke="#0F172A" stroke-width="1"/><circle cx="355" cy="90" r="25" fill="#374151" stroke="#0F172A" stroke-width="1" transform="translate(-15,0)"/><line x1="325" y1="90" x2="333" y2="90" stroke="#0F172A" stroke-width="3"/><text x="305" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#FFFFFF">I</text><text x="340" y="95" text-anchor="middle" font-size="11" font-weight="700" fill="#FFFFFF">I</text><text x="322" y="135" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">I₂</text><text x="322" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A">two iodine atoms</text><text x="322" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">biggest of the three</text></g><text x="180" y="185" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="600">bigger molecules are harder to pull apart, so boiling point rises down the group</text></svg>',
        hotspots: [
          {
            id: 'cpt-g7-states-h-cl2',
            x: 22,
            y: 45,
            label: 'Cl₂: two chlorine atoms',
            description:
              'A chlorine molecule is two chlorine atoms sharing a single bond. The little 2 in Cl₂ tells you there are two atoms in the molecule. The flask never holds lone Cl atoms.',
          },
          {
            id: 'cpt-g7-states-h-br2',
            x: 62,
            y: 45,
            label: 'Br₂: two bromine atoms',
            description:
              'Bromine molecules are bigger than chlorine molecules because bromine atoms have more protons, neutrons and electrons. Bigger molecules take more energy to separate, so bromine boils at a higher temperature.',
          },
          {
            id: 'cpt-g7-states-h-i2',
            x: 88,
            y: 45,
            label: 'I₂: two iodine atoms',
            description:
              'Iodine molecules are bigger still. The attraction between I₂ molecules is strong enough to hold them together as a solid at room temperature. Heat them gently and they sublime to a purple vapour.',
          },
          {
            id: 'cpt-g7-states-h-trend',
            x: 50,
            y: 90,
            label: 'Why states change down the group',
            description:
              'Bigger halogen molecules pull on each other more strongly. This is why fluorine and chlorine drift apart as gases, bromine just holds together as a liquid, and iodine stays put as a solid.',
          },
        ],
      },
    },
    {
      id: 'cpt-g7-states-scene-bp-trend',
      title: 'Boiling Points Rise Going Down Group 7',
      type: 'labelled-diagram',
      instructions:
        'Click each bar to read the boiling point of fluorine, chlorine, bromine and iodine. Notice how the bars climb as you move down the group.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F8FAFC"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">BOILING POINTS OF THE HALOGENS</text><line x1="50" y1="40" x2="50" y2="180" stroke="#1E3A8A" stroke-width="1.2"/><line x1="50" y1="180" x2="340" y2="180" stroke="#1E3A8A" stroke-width="1.2"/><line x1="48" y1="130" x2="340" y2="130" stroke="#94A3B8" stroke-width="0.4" stroke-dasharray="3,3"/><text x="44" y="133" text-anchor="end" font-size="7" fill="#1E3A8A">0 °C</text><text x="44" y="183" text-anchor="end" font-size="7" fill="#1E3A8A">−200 °C</text><text x="44" y="43" text-anchor="end" font-size="7" fill="#1E3A8A">+200 °C</text><g><rect x="80" y="150" width="35" height="30" fill="#FEF9C3" stroke="#A16207" stroke-width="0.6"/><text x="97" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">F₂</text><text x="97" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">−188 °C</text></g><g><rect x="140" y="138" width="35" height="42" fill="#D9F99D" stroke="#3F6212" stroke-width="0.6"/><text x="157" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Cl₂</text><text x="157" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">−34 °C</text></g><g><rect x="200" y="115" width="35" height="65" fill="#B45309" stroke="#7C2D12" stroke-width="0.6"/><text x="217" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Br₂</text><text x="217" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">+59 °C</text></g><g><rect x="260" y="65" width="35" height="115" fill="#374151" stroke="#0F172A" stroke-width="0.6"/><text x="277" y="195" text-anchor="middle" font-size="8" font-weight="700" fill="#FFFFFF">I₂</text><text x="277" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">+184 °C</text></g><text x="180" y="35" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="600">bar height = boiling point in °C (dashed line = 0 °C, freezing of water)</text></svg>',
        hotspots: [
          {
            id: 'cpt-g7-states-h-bp-f',
            x: 22,
            y: 80,
            label: 'Fluorine bp −188 °C',
            description:
              'Fluorine has the lowest boiling point of the four. Even a freezer at −18 °C is far too warm for fluorine to become a liquid, so in any normal room fluorine is a gas.',
          },
          {
            id: 'cpt-g7-states-h-bp-cl',
            x: 40,
            y: 75,
            label: 'Chlorine bp −34 °C',
            description:
              'Chlorine boils at −34 °C, still well below room temperature. A pool technician keeps chlorine compressed as a liquid in a cold cylinder; the moment the valve opens, it boils into a yellow-green gas.',
          },
          {
            id: 'cpt-g7-states-h-bp-br',
            x: 58,
            y: 60,
            label: 'Bromine bp 59 °C',
            description:
              'Bromine boils at 59 °C, just below the temperature of a hot cup of tea. At room temperature it stays as a heavy red-brown liquid, only boiling away if you warm the flask.',
          },
          {
            id: 'cpt-g7-states-h-bp-i',
            x: 78,
            y: 35,
            label: 'Iodine bp 184 °C',
            description:
              'Iodine boils at 184 °C, far above room temperature. At 20 °C it sits as a grey solid. Gentle warming makes the solid sublime straight to a purple vapour, skipping the liquid stage at normal pressure.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-g7-states-worked-1',
      title: 'Predicting the state of bromine at room temperature',
      steps: [
        {
          explanation:
            'Question: bromine has a melting point of −7 °C and a boiling point of 59 °C. A school laboratory in Reading is at about 20 °C. Predict whether bromine in a sealed flask is a solid, a liquid or a gas.',
        },
        {
          explanation:
            'Step 1: write down what each number tells us. Below the melting point, the substance is a solid. Above the boiling point, the substance is a gas. Between the two, the substance is a liquid.',
          maths: 'solid: T < mp.  liquid: mp < T < bp.  gas: T > bp',
        },
        {
          explanation:
            'Step 2: read off bromine. Melting point mp = −7 °C. Boiling point bp = 59 °C. Room temperature T = 20 °C.',
          maths: 'mp = −7 °C, bp = 59 °C, T = 20 °C',
        },
        {
          explanation:
            'Step 3: compare. Is 20 °C between −7 °C and 59 °C? Yes: −7 < 20 < 59. So the room temperature sits between the melting point and the boiling point.',
          maths: '−7 °C < 20 °C < 59 °C → liquid',
        },
        {
          explanation:
            'Step 4: state the answer. Bromine in the flask is a red-brown liquid at 20 °C, with brown fumes hovering above the surface. The same approach works for fluorine (gas, bp −188 °C), chlorine (gas, bp −34 °C) and iodine (solid, mp 114 °C) at the same room temperature.',
        },
      ],
    },
    {
      id: 'cpt-g7-states-worked-2',
      title: 'Predicting the colour of astatine using the Group 7 trend',
      steps: [
        {
          explanation:
            'Question: astatine (At) sits at the bottom of Group 7, below iodine. The textbook gives no photograph because astatine is very rare and radioactive. Using the Group 7 trend, predict whether astatine looks paler than iodine or darker than iodine.',
        },
        {
          explanation:
            'Step 1: write down the colour trend going down Group 7. Fluorine is pale yellow, chlorine is yellow-green, bromine is red-brown, iodine is grey-black. The colour deepens (gets darker) as you go down.',
          maths: 'F₂ pale yellow → Cl₂ yellow-green → Br₂ red-brown → I₂ grey-black',
        },
        {
          explanation:
            'Step 2: place astatine. Astatine sits one row below iodine in Group 7.',
          maths: 'At is below I in Group 7',
        },
        {
          explanation:
            'Step 3: apply the trend. If the colour gets darker going down, and astatine is below iodine, then astatine must look even darker than iodine.',
          maths: 'colour deepens down → At darker than I',
        },
        {
          explanation:
            'Step 4: state the answer. Astatine is predicted to look black, darker than iodine. Real chemists who have made tiny atom-by-atom amounts agree it looks dark, but it is so radioactive that nobody has ever collected a visible lump.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-g7-states-q1',
      type: 'multiple-choice',
      stem: 'A pupil opens a sealed flask of chlorine gas in a fume cupboard. What colour is the gas?',
      tier: 'core',
      options: [
        'Pale yellow-green',
        'Colourless, like air',
        'Bright blue',
        'Deep red-brown',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpt-g7-states-mis-colour-paler',
    },
    {
      id: 'cpt-g7-states-q2',
      type: 'multiple-choice',
      stem: 'At 20 °C in a school laboratory, what state is bromine in?',
      tier: 'core',
      options: [
        'A pale yellow gas',
        'A grey solid',
        'A red-brown liquid',
        'A colourless gas',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-g7-states-mis-all-gases',
    },
    {
      id: 'cpt-g7-states-q3',
      type: 'multiple-choice',
      stem: 'At 20 °C in a sealed jar, what does iodine look like?',
      tier: 'core',
      options: [
        'A colourless gas',
        'A green liquid',
        'A red powder',
        'A grey-black shiny solid',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cpt-g7-states-mis-all-gases',
    },
    {
      id: 'cpt-g7-states-q4',
      type: 'multiple-choice',
      stem: 'A halogen flask never holds single atoms. Which formula best describes how a halogen exists?',
      tier: 'core',
      options: [
        'As single atoms, written X',
        'As pairs of atoms joined together, written X₂',
        'As groups of three atoms, written X₃',
        'As long chains of many atoms',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-g7-states-mis-single-atoms',
    },
    {
      id: 'cpt-g7-states-q5',
      type: 'numeric-entry',
      stem: 'A school laboratory contains sealed samples of fluorine, chlorine, bromine and iodine at 20 °C. How many of these four halogens are gases at this temperature? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Fluorine and chlorine boil well below 0 °C. Bromine boils at 59 °C and iodine at 184 °C.',
      misconceptionId: 'cpt-g7-states-mis-all-gases',
    },
    {
      id: 'cpt-g7-states-q6',
      type: 'numeric-entry',
      stem: 'Every halogen atom has the same number of electrons in its outer shell, matching its group number. How many outer-shell electrons does a halogen atom have? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Halogens sit in Group 7. The group number equals the number of outer-shell electrons.',
    },
    {
      id: 'cpt-g7-states-q7',
      type: 'drag-order',
      stem: 'Place these four halogens in the order they appear from the TOP of Group 7 (lightest) to the BOTTOM (heaviest).',
      tier: 'core',
      items: ['Bromine', 'Fluorine', 'Iodine', 'Chlorine'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 10,
    },
    {
      id: 'cpt-g7-states-q8',
      type: 'multiple-choice',
      stem: 'How does the boiling point of the halogens change as you go down Group 7 from fluorine to iodine?',
      tier: 'confident',
      options: [
        'Boiling point rises going down the group',
        'Boiling point falls going down the group',
        'Boiling point stays the same all the way down',
        'Boiling point falls from F to Br, then rises to I',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpt-g7-states-mis-bp-falls',
    },
    {
      id: 'cpt-g7-states-q9',
      type: 'multiple-choice',
      stem: 'A KS3 textbook gives the boiling point of chlorine as −34 °C. The school laboratory is at 20 °C. Why is chlorine a gas at room temperature?',
      tier: 'confident',
      options: [
        'Because chlorine is heavier than air',
        'Because 20 °C is below the boiling point of chlorine',
        'Because chlorine has no boiling point',
        'Because 20 °C is above the boiling point of chlorine, so it has already boiled away from a liquid into a gas',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'cpt-g7-states-q10',
      type: 'multiple-choice',
      stem: 'Going from chlorine to iodine in Group 7, how does the colour of the halogen change?',
      tier: 'confident',
      options: [
        'The colour gets paler (fades) going down',
        'The colour deepens (gets darker) going down',
        'The colour stays exactly the same',
        'The colour cycles back to pale yellow',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpt-g7-states-mis-colour-paler',
    },
    {
      id: 'cpt-g7-states-q11',
      type: 'numeric-entry',
      stem: 'Bromine has a melting point of −7 °C and a boiling point of 59 °C. A bottle of bromine is warmed to 75 °C in a fume cupboard. At 75 °C, has the temperature gone above the boiling point? Answer 1 for yes (bromine is a gas) or 0 for no (bromine is still a liquid).',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Compare 75 °C with the boiling point of 59 °C. If T > bp, the bromine has boiled into a gas.',
    },
    {
      id: 'cpt-g7-states-q12',
      type: 'numeric-entry',
      stem: 'A flask is filled with chlorine gas, Cl₂. A second flask is filled with the same number of chlorine molecules. How many chlorine ATOMS are in each chlorine molecule? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'The little 2 in Cl₂ tells you how many atoms are in one molecule of chlorine.',
      misconceptionId: 'cpt-g7-states-mis-single-atoms',
    },
    {
      id: 'cpt-g7-states-q13',
      type: 'spot-misconception',
      stem: 'Priya says: "Bromine and iodine are both halogens, so at 20 °C they must both be gases like chlorine."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. All halogens are gases at room temperature.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Only fluorine and chlorine are gases at 20 °C. Bromine is a red-brown liquid and iodine is a grey-black solid, because boiling points rise going down Group 7.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-g7-states-mis-all-gases',
    },
    {
      id: 'cpt-g7-states-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: iodine is a grey-black solid at 20 °C. The boiling point of iodine is 184 °C. Build the reasoning that explains why iodine is a solid at room temperature.',
      tier: 'confident',
      steps: [
        'Iodine has a melting point of 114 °C, so it stays solid below 114 °C.',
        'Room temperature in a school laboratory is about 20 °C.',
        null,
        'So at 20 °C iodine sits as a grey-black solid in the flask, never reaching the liquid or gas stages.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Since 20 °C is well below the melting point of 114 °C, the iodine has not yet had enough heat to melt.',
      xpValue: 20,
    },
    {
      id: 'cpt-g7-states-q15',
      type: 'free-text',
      stem: 'In one or two sentences, explain why boiling points rise going down Group 7. Use the words MOLECULE, BIGGER and FORCES in your answer.',
      tier: 'confident',
      sampleAnswer:
        'Going down Group 7, the halogen molecules get bigger, so the forces between them get stronger. Bigger forces are harder to pull apart, so more heat is needed to boil the substance and the boiling point rises.',
      keywords: ['molecule', 'bigger', 'forces'],
      xpValue: 15,
      hint: 'Bigger molecules pull on each other more strongly. Think about how much energy is needed to drag those pairs apart.',
    },
    {
      id: 'cpt-g7-states-q16',
      type: 'drag-order',
      stem: 'Place these four halogens in order of BOILING POINT, from LOWEST at the top to HIGHEST at the bottom.',
      tier: 'challenge',
      items: ['Iodine (184 °C)', 'Chlorine (−34 °C)', 'Bromine (59 °C)', 'Fluorine (−188 °C)'],
      correctOrder: [3, 1, 2, 0],
      xpValue: 25,
      misconceptionId: 'cpt-g7-states-mis-bp-falls',
    },
    {
      id: 'cpt-g7-states-q17',
      type: 'multiple-choice',
      stem: 'A pupil at a school in Brighton warms a tiny piece of solid iodine in a stoppered test tube. Brown purple vapour fills the tube but no liquid forms in the bottom. Which statement best describes what they saw?',
      tier: 'challenge',
      options: [
        'The iodine reacted with the glass to make a new compound',
        'The iodine sublimed, turning straight from solid to vapour at normal pressure',
        'The iodine melted into a brown liquid and then evaporated like water',
        'The iodine boiled instantly because its boiling point is below 20 °C',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpt-g7-states-mis-iodine-melts',
    },
    {
      id: 'cpt-g7-states-q18',
      type: 'multiple-choice',
      stem: 'A pupil in Leeds reads that astatine (At) sits at the bottom of Group 7, below iodine. Using only the trend in Group 7, which prediction is most reasonable for astatine at room temperature?',
      tier: 'challenge',
      options: [
        'A pale yellow gas, like fluorine',
        'A colourless liquid',
        'A dark solid, even darker than iodine',
        'A bright red gas with no smell',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-g7-states-mis-colour-paler',
    },
    {
      id: 'cpt-g7-states-q19',
      type: 'spot-misconception',
      stem: 'Daniel says: "Fluorine sits below chlorine in Group 7, because fluorine is the most reactive halogen and the reactive ones are always at the bottom of a group."',
      tier: 'challenge',
      statements: [
        {
          text: 'Daniel is right. Fluorine sits below chlorine.',
          isMisconception: true,
        },
        {
          text: 'Daniel is wrong. Fluorine sits ABOVE chlorine at the TOP of Group 7. In Group 7 the most reactive halogen is at the top, not the bottom. Fluorine has the lowest boiling point and is a pale yellow gas.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-g7-states-mis-fluorine-below',
    },
    {
      id: 'cpt-g7-states-q20',
      type: 'numeric-entry',
      stem: 'A chemistry club in Sheffield has sealed samples of fluorine, chlorine, bromine and iodine. They place all four in a water bath at 70 °C. How many of the four halogens are gases at this temperature? Give your answer as a single number.',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Boiling points: F₂ −188 °C, Cl₂ −34 °C, Br₂ 59 °C, I₂ 184 °C. A halogen is a gas when 70 °C is above its boiling point.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q08 on halogens: candidates "wrote that all halogens are gases at room temperature, missing that bromine is a liquid and iodine is a solid." Reinforced by CGP KS3 Chemistry Study Book p.55 chapter on halogens.
    {
      id: 'cpt-g7-states-mis-all-gases',
      description:
        'All halogens are gases at room temperature, the same as chlorine.',
      triggerAnswer: 'all-gases',
      correction:
        'In fact only fluorine and chlorine are gases at 20 °C. Bromine is a red-brown liquid, and iodine is a grey-black solid.',
      reExplanation:
        'Picture four sealed flasks at 20 °C. Fluorine is a pale yellow gas; chlorine is a yellow-green gas; bromine is a heavy red-brown liquid that pools at the bottom; iodine is a grey-black solid crystal. The state changes as you walk down Group 7 because boiling points rise. The gas form is only what the top two look like.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q09 on Group 7 trends: candidates often said "the colour of halogens fades going down the group" instead of deepens. Reinforced by RSC Education article "Teaching the halogens at KS3 and KS4" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-g7-states-mis-colour-paler',
      description:
        'The colour of the halogens fades (gets paler) as you go down Group 7.',
      triggerAnswer: 'colour-paler',
      correction:
        'In fact the colour deepens going down Group 7. Pale yellow fluorine, yellow-green chlorine, red-brown bromine, grey-black iodine.',
      reExplanation:
        'Walk down Group 7 from the top: each halogen looks darker than the one above. Fluorine is a faint yellow gas; chlorine is a more noticeable yellow-green; bromine is a heavy red-brown that fills the flask; iodine is almost black. Astatine, at the bottom, is predicted to look black. The trend is darker as you go down, not paler.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on Group 7: candidates "wrote that halogens are made of single atoms," missing the diatomic structure (X₂). Reinforced by CGP KS3 Chemistry Study Book p.55 box "Halogens come in pairs."
    {
      id: 'cpt-g7-states-mis-single-atoms',
      description:
        'Halogens exist as single atoms, written X, like the helium in a balloon.',
      triggerAnswer: 'single-atoms',
      correction:
        'In fact every halogen exists as a pair of atoms joined together, written X₂ (Cl₂, Br₂, I₂, F₂). The little 2 tells you there are two atoms in each molecule.',
      reExplanation:
        'Helium is a noble gas in Group 0 and floats around as single atoms. Halogens are different. Two halogen atoms hold each other in a pair, sharing a single bond. The label on a chlorine gas cylinder reads Cl₂, not Cl. Every halogen behaves the same way: bromine is Br₂ and iodine is I₂.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q06 on physical properties: candidates "stated that boiling points fall going down Group 7, swapping the trend with reactivity." Reinforced by CGP KS3 Chemistry Study Book p.55 Common Mistake note on halogen trends.
    {
      id: 'cpt-g7-states-mis-bp-falls',
      description:
        'Boiling points fall going down Group 7, the same way as reactivity.',
      triggerAnswer: 'bp-falls',
      correction:
        'In fact boiling points rise going down Group 7. Reactivity falls, but boiling point rises. The two trends point in opposite directions.',
      reExplanation:
        'Picture the bar chart. Fluorine boils at −188 °C, chlorine at −34 °C, bromine at +59 °C, iodine at +184 °C. The bars climb steeply as you move down. Reactivity does fall going down Group 7, but boiling point does the opposite. Bigger halogen molecules attract each other more, so they need more heat to boil.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q07 on iodine: candidates wrote that iodine "melted to a brown liquid" when warmed gently, missing that it sublimes to a purple vapour at normal pressure. Reinforced by RSC Practical Chemistry guide "Sublimation of iodine" (rsc.org/learn-chemistry, accessed 2026-05-10).
    {
      id: 'cpt-g7-states-mis-iodine-melts',
      description:
        'Heating iodine gently makes it melt to a brown liquid before evaporating.',
      triggerAnswer: 'iodine-melts',
      correction:
        'In fact iodine sublimes at normal pressure. It turns straight from a grey solid to a purple vapour, skipping the liquid stage.',
      reExplanation:
        'Warm a few iodine crystals in a stoppered tube. You see purple fumes rise from the solid, with no pool of liquid in the bottom. This jump from solid to vapour is called sublimation. To make iodine melt you would need to seal it under higher pressure and reach 114 °C. At normal lab pressure it skips the liquid stage altogether.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on the periodic table layout: candidates "wrote that fluorine sits below chlorine," reversing the top-to-bottom order of Group 7. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on Group 7 layout.
    {
      id: 'cpt-g7-states-mis-fluorine-below',
      description:
        'Fluorine sits below chlorine in Group 7 because it is the most reactive halogen.',
      triggerAnswer: 'fluorine-below',
      correction:
        'In fact fluorine sits at the TOP of Group 7, above chlorine. The top-to-bottom order is fluorine, chlorine, bromine, iodine, then astatine.',
      reExplanation:
        'Look up Group 7 on a periodic table. Fluorine is the smallest halogen and sits in the first row of the group. Chlorine sits below it, then bromine, then iodine, then astatine at the very bottom. In Group 7 the most reactive halogen is at the top, not the bottom. This is the opposite of Group 1.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
