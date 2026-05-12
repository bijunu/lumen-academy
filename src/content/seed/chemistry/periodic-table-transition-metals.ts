import type { SkillNode } from '@/types/content'

export const transitionMetalsOverview: SkillNode = {
  id: 'chemistry-periodic-table-transition-metals',
  title: 'Transition Metals Overview',
  description:
    'Meet the transition metals. They form the wide block between Group 2 and Group 3 of the periodic table. Compared with Group 1 alkali metals they are harder, denser, less reactive with water, and have higher melting points. Many of their compounds are coloured, several show more than one oxidation state, and a number act as catalysts in UK industry (iron in the Haber process, nickel in margarine, platinum in catalytic converters).',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'challenge',
  prerequisites: ['chemistry-periodic-table-electron-shells'],
  curriculum: {
    ks3Objective:
      'The basic properties of transition metals; multiple oxidation states (qualitative); coloured compounds; transition metals as catalysts.',
    awardingBodies: {
      aqa: '4.1.2.7 Transition metals; properties and uses (8462)',
      edexcel: 'Topic 1.39 Transition metals; properties (1CH0)',
      ocr: 'C1.2e Transition metals: properties, uses, and reactions (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-trans-met-scene-position',
      title: 'Where the Transition Metals Sit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the simplified periodic table to see where the transition metals sit and which named ones a KS3 pupil meets.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">TRANSITION METALS BLOCK</text><g><rect x="20" y="40" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="54" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">H</text><rect x="320" y="40" width="20" height="20" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.4"/><text x="330" y="54" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">He</text></g><g><rect x="20" y="64" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Li</text><rect x="44" y="64" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Be</text><rect x="200" y="64" width="140" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="270" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">non-metals (B to Ne)</text></g><g><rect x="20" y="88" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Na</text><rect x="44" y="88" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="102" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Mg</text><rect x="200" y="88" width="140" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="270" y="102" text-anchor="middle" font-size="7" fill="#1E3A8A">non-metals (Al to Ar)</text></g><g><rect x="20" y="112" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="30" y="126" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">K</text><rect x="44" y="112" width="20" height="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.4"/><text x="54" y="126" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Ca</text><g><rect x="68" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="75" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Sc</text><rect x="82" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="89" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Ti</text><rect x="96" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="103" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">V</text><rect x="110" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="117" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Cr</text><rect x="124" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="131" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Mn</text><rect x="138" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="145" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Fe</text><rect x="152" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="159" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Co</text><rect x="166" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="173" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Ni</text><rect x="180" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="187" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Cu</text><rect x="194" y="112" width="14" height="20" fill="#C4B5FD" stroke="#5B21B6" stroke-width="0.6"/><text x="201" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Zn</text></g><rect x="208" y="112" width="20" height="20" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.4"/><text x="218" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A">Ga</text><rect x="320" y="112" width="20" height="20" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.4"/><text x="330" y="126" text-anchor="middle" font-size="7" fill="#1E3A8A">Kr</text></g><text x="30" y="35" text-anchor="middle" font-size="7" fill="#7F1D1D">Group 1</text><text x="54" y="35" text-anchor="middle" font-size="7" fill="#7F1D1D">Group 2</text><text x="218" y="35" text-anchor="middle" font-size="7" fill="#1E3A8A">Group 3</text><text x="330" y="35" text-anchor="middle" font-size="7" fill="#064E3B">Group 0</text><text x="135" y="150" text-anchor="middle" font-size="8" fill="#5B21B6" font-weight="700">TRANSITION METALS (Sc to Zn)</text><g><rect x="20" y="180" width="12" height="12" fill="#FCA5A5"/><text x="38" y="190" font-size="8" fill="#1E3A8A">Group 1 and 2 metals</text><rect x="140" y="180" width="12" height="12" fill="#C4B5FD"/><text x="158" y="190" font-size="8" fill="#1E3A8A">transition metals</text><rect x="240" y="180" width="12" height="12" fill="#A7F3D0"/><text x="258" y="190" font-size="8" fill="#1E3A8A">noble gases</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-trans-met-h-block',
            x: 38,
            y: 56,
            label: 'A wide block between Group 2 and Group 3',
            description:
              'The transition metals fill a wide block sitting between Group 2 on the left and Group 3 on the right. The block first appears in Period 4 with scandium (Sc) and ends with zinc (Zn).',
          },
          {
            id: 'cpt-trans-met-h-named',
            x: 38,
            y: 68,
            label: 'Names a KS3 pupil meets',
            description:
              'Six transition metals come up at KS3 by name: iron (Fe), copper (Cu), zinc (Zn), nickel (Ni), chromium (Cr) and titanium (Ti). All sit in the top row of the block.',
          },
          {
            id: 'cpt-trans-met-h-group',
            x: 12,
            y: 56,
            label: 'Group 1 and Group 2 are different',
            description:
              'Group 1 (Li, Na, K) and Group 2 (Be, Mg, Ca) hold the alkali metals and alkaline earth metals. They are softer, less dense and far more reactive than the transition metals sitting just to the right of them.',
          },
          {
            id: 'cpt-trans-met-h-not-noble',
            x: 92,
            y: 56,
            label: 'Not Group 0',
            description:
              'The block stops well before the noble gases of Group 0. Transition metals do react (slowly), unlike the noble gases which barely react at all.',
          },
        ],
      },
    },
    {
      id: 'cpt-trans-met-scene-properties',
      title: 'Property Card: Transition Metals vs Group 1',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the property comparison card to see how a transition metal like iron differs from a Group 1 metal like sodium.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">PROPERTY CARD</text><g><rect x="20" y="30" width="155" height="170" fill="#C4B5FD" stroke="#5B21B6" stroke-width="1.2"/><text x="97" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#5B21B6">IRON (Fe), a transition metal</text><text x="30" y="68" font-size="8" fill="#1E3A8A">Hard, dense (7.87 g/cm3)</text><text x="30" y="84" font-size="8" fill="#1E3A8A">Sinks in water</text><text x="30" y="100" font-size="8" fill="#1E3A8A">Melts at 1538 degrees C</text><text x="30" y="116" font-size="8" fill="#1E3A8A">Slow rust in damp air</text><text x="30" y="132" font-size="8" fill="#1E3A8A">Oxidation states: +2 and +3</text><text x="30" y="148" font-size="8" fill="#1E3A8A">Coloured compounds</text><text x="30" y="164" font-size="8" fill="#1E3A8A">Catalyst in Haber process</text></g><g><rect x="185" y="30" width="155" height="170" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1.2"/><text x="263" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">SODIUM (Na), Group 1 metal</text><text x="195" y="68" font-size="8" fill="#1E3A8A">Soft (cuts with a knife)</text><text x="195" y="84" font-size="8" fill="#1E3A8A">Floats on water (0.97 g/cm3)</text><text x="195" y="100" font-size="8" fill="#1E3A8A">Melts at 98 degrees C</text><text x="195" y="116" font-size="8" fill="#1E3A8A">Reacts strongly with water</text><text x="195" y="132" font-size="8" fill="#1E3A8A">One oxidation state: +1</text><text x="195" y="148" font-size="8" fill="#1E3A8A">White compounds</text><text x="195" y="164" font-size="8" fill="#1E3A8A">No catalyst role</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-trans-met-h-hard',
            x: 25,
            y: 33,
            label: 'Harder and denser',
            description:
              'Iron is hard and dense (7.87 g per cubic cm), which is why it sinks in water. Sodium is soft enough to cut with a knife and floats (0.97 g per cubic cm).',
          },
          {
            id: 'cpt-trans-met-h-melt',
            x: 25,
            y: 47,
            label: 'Higher melting point',
            description:
              'Iron melts at 1538 degrees C, useful for steel girders that hold up buildings. Sodium melts at just 98 degrees C, hot tea temperature.',
          },
          {
            id: 'cpt-trans-met-h-react',
            x: 25,
            y: 60,
            label: 'Less reactive with water',
            description:
              'Iron only rusts slowly when left in damp air. Sodium reacts strongly with cold water within seconds, fizzing and giving off hydrogen.',
          },
          {
            id: 'cpt-trans-met-h-states',
            x: 25,
            y: 73,
            label: 'More than one oxidation state',
            description:
              'Iron can form iron(II) ions (Fe2+) or iron(III) ions (Fe3+). Sodium only ever forms Na+. Variable oxidation states are a hallmark of transition metals.',
          },
          {
            id: 'cpt-trans-met-h-colour',
            x: 25,
            y: 80,
            label: 'Coloured compounds',
            description:
              'Iron(II) sulfate is pale green, iron(III) sulfate is yellow-brown. Sodium compounds (sodium chloride, sodium hydroxide) are white. Bright colours are a clue you are dealing with a transition metal.',
          },
        ],
      },
    },
    {
      id: 'cpt-trans-met-scene-colours',
      title: 'Coloured Compounds Worksheet',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the test-tube rack to see the colours a transition metal compound makes in solution.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">COLOURS OF TRANSITION METAL SOLUTIONS</text><g><rect x="30" y="60" width="32" height="120" rx="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="1"/><text x="46" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">CuSO4</text><text x="46" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">blue</text></g><g><rect x="80" y="60" width="32" height="120" rx="4" fill="#86EFAC" stroke="#064E3B" stroke-width="1"/><text x="96" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">FeSO4</text><text x="96" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">pale green</text></g><g><rect x="130" y="60" width="32" height="120" rx="4" fill="#CA8A04" stroke="#7C2D12" stroke-width="1"/><text x="146" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Fe2(SO4)3</text><text x="146" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">yellow-brown</text></g><g><rect x="180" y="60" width="32" height="120" rx="4" fill="#22C55E" stroke="#064E3B" stroke-width="1"/><text x="196" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">NiCl2</text><text x="196" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">green</text></g><g><rect x="230" y="60" width="32" height="120" rx="4" fill="#7C3AED" stroke="#3B0764" stroke-width="1"/><text x="246" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">KMnO4</text><text x="246" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">purple</text></g><g><rect x="280" y="60" width="32" height="120" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="296" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">NaCl</text><text x="296" y="212" text-anchor="middle" font-size="7" fill="#1E3A8A">colourless</text></g><line x1="20" y1="55" x2="340" y2="55" stroke="#475569" stroke-width="1"/><line x1="20" y1="185" x2="340" y2="185" stroke="#475569" stroke-width="1"/></svg>',
        hotspots: [
          {
            id: 'cpt-trans-met-h-cuso4',
            x: 12,
            y: 50,
            label: 'Copper(II) sulfate: blue',
            description:
              'Copper(II) sulfate solution is a bright blue. Old copper roofs, like the one on Llandaff Cathedral in Cardiff, turn a similar pale blue-green over decades as the copper forms a layer of copper carbonate.',
          },
          {
            id: 'cpt-trans-met-h-feso4',
            x: 25,
            y: 50,
            label: 'Iron(II) sulfate: pale green',
            description:
              'Iron in its +2 oxidation state gives a pale green solution. This is the form of iron in iron tablets sold at a UK chemist (Boots) to top up the diet.',
          },
          {
            id: 'cpt-trans-met-h-fe3',
            x: 39,
            y: 50,
            label: 'Iron(III) sulfate: yellow-brown',
            description:
              'The same metal (iron) in the +3 oxidation state gives a yellow-brown solution. Two oxidation states, two colours, from the same element. That is the variable oxidation state idea on display.',
          },
          {
            id: 'cpt-trans-met-h-nicl2',
            x: 53,
            y: 50,
            label: 'Nickel(II) chloride: green',
            description:
              'Nickel compounds in solution are a clear bottle-green colour. Nickel is also used as the catalyst that hardens vegetable oil into margarine in UK food factories.',
          },
          {
            id: 'cpt-trans-met-h-mn',
            x: 67,
            y: 50,
            label: 'Potassium manganate(VII): deep purple',
            description:
              'Manganate(VII) in solution is a striking deep purple, dark enough to colour a whole beaker from a couple of crystals. School chemistry labs use it to show off transition metal colours.',
          },
          {
            id: 'cpt-trans-met-h-nacl',
            x: 82,
            y: 50,
            label: 'Sodium chloride: colourless',
            description:
              'For comparison, sodium chloride (table salt) is colourless in solution. Group 1 metal compounds do not show the bright colours that transition metal compounds do.',
          },
        ],
      },
    },
    {
      id: 'cpt-trans-met-scene-catalysts',
      title: 'Catalyst Roles in UK Industry',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the diagram to see three industrial catalysts a UK pupil meets.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">TRANSITION METAL CATALYSTS IN UK INDUSTRY</text><g><rect x="20" y="40" width="100" height="150" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1.2"/><text x="70" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">IRON (Fe)</text><text x="70" y="76" text-anchor="middle" font-size="7" fill="#1E3A8A">Haber process</text><text x="70" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">N2 + 3H2 to 2NH3</text><text x="70" y="108" text-anchor="middle" font-size="7" fill="#1E3A8A">ammonia for</text><text x="70" y="122" text-anchor="middle" font-size="7" fill="#1E3A8A">fertilisers</text><text x="70" y="148" text-anchor="middle" font-size="7" fill="#1E3A8A">UK site:</text><text x="70" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">Billingham</text><text x="70" y="176" text-anchor="middle" font-size="7" fill="#1E3A8A">(Teesside)</text></g><g><rect x="130" y="40" width="100" height="150" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1.2"/><text x="180" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">NICKEL (Ni)</text><text x="180" y="76" text-anchor="middle" font-size="7" fill="#1E3A8A">Margarine</text><text x="180" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">hardening</text><text x="180" y="108" text-anchor="middle" font-size="7" fill="#1E3A8A">oil + H2 to</text><text x="180" y="122" text-anchor="middle" font-size="7" fill="#1E3A8A">solid fat</text><text x="180" y="148" text-anchor="middle" font-size="7" fill="#1E3A8A">UK shelf:</text><text x="180" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">Stork brand</text><text x="180" y="176" text-anchor="middle" font-size="7" fill="#1E3A8A">spreads</text></g><g><rect x="240" y="40" width="100" height="150" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1.2"/><text x="290" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">PLATINUM (Pt)</text><text x="290" y="76" text-anchor="middle" font-size="7" fill="#1E3A8A">Catalytic</text><text x="290" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">converter</text><text x="290" y="108" text-anchor="middle" font-size="7" fill="#1E3A8A">CO + NOx to</text><text x="290" y="122" text-anchor="middle" font-size="7" fill="#1E3A8A">CO2 + N2</text><text x="290" y="148" text-anchor="middle" font-size="7" fill="#1E3A8A">UK cars:</text><text x="290" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">fitted by law</text><text x="290" y="176" text-anchor="middle" font-size="7" fill="#1E3A8A">from 1993</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-trans-met-h-iron-cat',
            x: 18,
            y: 30,
            label: 'Iron: Haber process catalyst',
            description:
              'In the Haber process, iron speeds up the reaction of nitrogen with hydrogen to make ammonia. The ammonia is then used to make fertilisers. The UK plant at Billingham on Teesside has run this reaction at industrial scale since 1923.',
          },
          {
            id: 'cpt-trans-met-h-nickel-cat',
            x: 50,
            y: 30,
            label: 'Nickel: margarine hardening',
            description:
              'Nickel speeds up the reaction of liquid vegetable oil with hydrogen gas. Bonds in the oil are broken and rebuilt, turning the runny liquid into a solid fat (margarine). UK spreads such as Stork are made this way.',
          },
          {
            id: 'cpt-trans-met-h-pt-cat',
            x: 81,
            y: 30,
            label: 'Platinum: catalytic converter',
            description:
              'A catalytic converter is the can-shaped part under a car. Platinum coats the inside and turns carbon monoxide and nitrogen oxides from the exhaust into less harmful carbon dioxide and nitrogen. Fitted by law to UK petrol cars from 1993.',
          },
          {
            id: 'cpt-trans-met-h-catalyst-rule',
            x: 50,
            y: 78,
            label: 'A catalyst is not used up',
            description:
              'In every case the transition metal speeds up the reaction but is not used up itself. The same lump of iron in a Haber plant can run for years before it has to be replaced. That is why catalysts are so valuable in industry.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-trans-met-worked-1',
      title: 'Picking out a transition metal property',
      steps: [
        {
          explanation:
            'Question: a pupil is given two unlabelled metal samples. Sample A floats on water, melts at 98 degrees C and forms only white compounds. Sample B sinks in water, melts at 1538 degrees C and forms both pale green and yellow-brown sulfate compounds. Which sample is the transition metal?',
        },
        {
          explanation:
            'Step 1: list what each property tells you. Floating, low melting point and one set of white compounds match a soft, low-density Group 1 alkali metal (like sodium, which melts at 98 degrees C).',
          maths: 'Sample A: floats, melts at 98 degrees C, white compounds',
        },
        {
          explanation:
            'Step 2: high density (sinks), very high melting point and coloured compounds in more than one shade are classic transition metal features. Pale green and yellow-brown sulfates are the iron(II) and iron(III) compounds you met on the colour rack.',
          maths: 'Sample B: sinks, melts at 1538 degrees C, two coloured sulfates',
        },
        {
          explanation:
            'Step 3: a transition metal also shows variable oxidation states. Two different coloured sulfates from the same metal points straight at this. Sample A has only one oxidation state.',
          maths: 'Sample B shows +2 (pale green) and +3 (yellow-brown)',
        },
        {
          explanation:
            'So Sample B is the transition metal (it is iron). Sample A behaves like a Group 1 alkali metal.',
        },
      ],
    },
    {
      id: 'cpt-trans-met-worked-2',
      title: 'Choosing the right catalyst for a UK factory job',
      steps: [
        {
          explanation:
            'Question: a factory at Billingham wants to make ammonia from nitrogen and hydrogen gas, to sell as fertiliser to UK farms. The chemist must choose between four metals: sodium, iron, copper and platinum. Which one should be used as the catalyst, and why not the others?',
        },
        {
          explanation:
            'Step 1: sodium is a Group 1 metal, not a transition metal. It is far too reactive with water and air to act as a stable catalyst. Sodium is ruled out.',
          maths: 'sodium: Group 1, far too reactive',
        },
        {
          explanation:
            'Step 2: iron is a transition metal and is the standard catalyst for the Haber process. It is cheap, plentiful in the UK and works well at industrial scale.',
          maths: 'iron: known Haber process catalyst',
        },
        {
          explanation:
            'Step 3: copper and platinum are both transition metals, so they could in principle act as catalysts. But platinum is far too costly per kilogram for a bulk reaction like ammonia, and copper does not work well for this particular reaction.',
          maths: 'platinum: too expensive; copper: wrong reaction',
        },
        {
          explanation:
            'So iron is the right choice. The Billingham plant on Teesside has used iron as the Haber process catalyst since 1923.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-trans-met-q1',
      type: 'multiple-choice',
      stem: 'Where do the transition metals sit on the periodic table?',
      tier: 'core',
      options: [
        'In Group 1, on the far left',
        'In Group 0, on the far right',
        'In a wide block between Group 2 and Group 3',
        'Above the staircase line, on the right',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Look for the wide block of elements that first appears in Period 4.',
      misconceptionId: 'cpt-trans-met-mis-group1',
    },
    {
      id: 'cpt-trans-met-q2',
      type: 'multiple-choice',
      stem: 'Which of these is NOT a transition metal a KS3 pupil meets by name?',
      tier: 'core',
      options: [
        'Iron (Fe)',
        'Copper (Cu)',
        'Sodium (Na)',
        'Zinc (Zn)',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Three of these come from the transition metal block. One is a Group 1 alkali metal.',
      misconceptionId: 'cpt-trans-met-mis-all-metals',
    },
    {
      id: 'cpt-trans-met-q3',
      type: 'multiple-choice',
      stem: 'Compared with sodium (a Group 1 metal), iron (a transition metal) is best described as:',
      tier: 'core',
      options: [
        'Softer, less dense and more reactive with water',
        'Harder, more dense and less reactive with water',
        'Identical, since both are metals',
        'A non-metal',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-trans-met-mis-group1',
    },
    {
      id: 'cpt-trans-met-q4',
      type: 'numeric-entry',
      stem: 'A KS3 pupil is asked to name six transition metals that come up on the syllabus by name (iron, copper, zinc, nickel, chromium, titanium). How many transition metals is that?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'Count the names listed in the question.',
    },
    {
      id: 'cpt-trans-met-q5',
      type: 'numeric-entry',
      stem: 'Iron melts at 1538 degrees C. Sodium melts at 98 degrees C. How many degrees C higher is the melting point of iron compared with sodium?',
      tier: 'core',
      correctAnswer: 1440,
      xpValue: 10,
      unit: 'degrees C',
      hint: 'Subtract sodium melting point from iron melting point.',
    },
    {
      id: 'cpt-trans-met-q6',
      type: 'drag-order',
      stem: 'Place these three substances in order of melting point, from the LOWEST to the HIGHEST.',
      tier: 'core',
      items: ['Iron (1538 degrees C)', 'Magnesium (650 degrees C)', 'Sodium (98 degrees C)'],
      correctOrder: [2, 1, 0],
      xpValue: 15,
      hint: 'Sodium has the lowest melting point of the three.',
    },
    {
      id: 'cpt-trans-met-q7',
      type: 'spot-misconception',
      stem: 'Aisha says: "Copper does not really react at all. It is like a noble gas. That is why we use it for plumbing pipes."',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. Copper does not react with anything.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Copper does react, just slowly. Old copper roofs (like Llandaff Cathedral) turn green over decades as the copper forms copper carbonate. Transition metals are less reactive than Group 1, but they are not unreactive like noble gases.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-trans-met-mis-unreactive-like-noble',
    },
    {
      id: 'cpt-trans-met-q8',
      type: 'multiple-choice',
      stem: 'A bottle of solution in a school chemistry lab is labelled "iron(II) sulfate, FeSO4". What colour would you expect the solution to be?',
      tier: 'confident',
      options: [
        'Pale green',
        'Bright blue',
        'Colourless, like table salt',
        'Deep purple',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Iron in the +2 state gives a pale shade.',
      misconceptionId: 'cpt-trans-met-mis-coloured-solid-only',
    },
    {
      id: 'cpt-trans-met-q9',
      type: 'multiple-choice',
      stem: 'A pupil in Cardiff notices that two bottles of iron sulfate on the lab bench look very different. One is pale green and labelled FeSO4. The other is yellow-brown and labelled Fe2(SO4)3. What is the best explanation?',
      tier: 'confident',
      options: [
        'One of the labels is wrong; iron only has one oxidation state',
        'The iron is in two different oxidation states. The pale green bottle has iron(II), the yellow-brown bottle has iron(III). Transition metals can show more than one oxidation state.',
        'The bottles contain two completely different elements',
        'The colour difference is just down to the bottle glass',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpt-trans-met-mis-fixed-valency',
    },
    {
      id: 'cpt-trans-met-q10',
      type: 'multiple-choice',
      stem: 'Which property is the BEST clue that a sample is a transition metal rather than a Group 1 alkali metal?',
      tier: 'confident',
      options: [
        'It is a metal',
        'It conducts electricity',
        'It is shiny when freshly cut',
        'Its compounds in solution are coloured (blue, green, yellow-brown, purple)',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Many metals share the first three properties. Bright colours are a transition metal signature.',
    },
    {
      id: 'cpt-trans-met-q11',
      type: 'numeric-entry',
      stem: 'Iron can form iron(II) ions (Fe2+) or iron(III) ions (Fe3+) in its compounds. How many different oxidation states for iron does that show?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Count the two ion charges listed.',
    },
    {
      id: 'cpt-trans-met-q12',
      type: 'numeric-entry',
      stem: 'A bottle of potassium manganate(VII) solution is deep purple. The Roman numeral VII in the name shows the oxidation state of the manganese atom in this compound. What number is that oxidation state?',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'VII is the Roman numeral for seven.',
    },
    {
      id: 'cpt-trans-met-q13',
      type: 'drag-order',
      stem: 'Match each transition metal catalyst to the right industrial job. Place the three metals in the order that matches the jobs listed: (1) hardens vegetable oil into margarine, (2) speeds up nitrogen and hydrogen reacting to make ammonia, (3) cleans exhaust gases in a UK car.',
      tier: 'confident',
      items: ['Iron', 'Nickel', 'Platinum'],
      correctOrder: [1, 0, 2],
      xpValue: 15,
      hint: 'Nickel works on margarine. Iron drives the Haber process. Platinum sits in the catalytic converter.',
    },
    {
      id: 'cpt-trans-met-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Tom is asked to predict whether copper or sodium would corrode more rapidly in a damp UK shed.',
      tier: 'confident',
      steps: [
        'Sodium is a Group 1 alkali metal and is highly reactive with water and air.',
        'Copper is a transition metal sitting in the wide block between Group 2 and Group 3.',
        null,
        'So sodium would corrode far more rapidly than copper in a damp UK shed. (In practice the school technician stores sodium under oil to stop this.)',
      ],
      missingStepIndex: 2,
      correctStep:
        'Transition metals like copper are far less reactive with water and air than Group 1 metals like sodium, which is why copper roofs and pipes can sit outside for decades.',
      xpValue: 20,
    },
    {
      id: 'cpt-trans-met-q15',
      type: 'spot-misconception',
      stem: 'Ben says: "Coloured compounds only show up in transition metal solids. If you dissolve them in water you get a clear, colourless solution every time."',
      tier: 'confident',
      statements: [
        {
          text: 'Ben is right. Transition metal solutions are always colourless.',
          isMisconception: true,
        },
        {
          text: 'Ben is wrong. The colours show up especially in solution: copper(II) sulfate is bright blue, iron(II) sulfate is pale green, nickel(II) chloride is green and potassium manganate(VII) is deep purple. Solid crystals can be coloured too, but the solutions usually show the colour just as well.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-trans-met-mis-coloured-solid-only',
    },
    {
      id: 'cpt-trans-met-q16',
      type: 'multiple-choice',
      stem: 'A UK chemist at the ammonia plant at Billingham on Teesside is asked: "What does the iron catalyst actually do in the Haber process?" Which answer is correct?',
      tier: 'challenge',
      options: [
        'The iron is used up in the reaction, which is why fresh iron is added every day',
        'The iron joins the nitrogen and hydrogen and ends up inside the ammonia molecule',
        'The iron speeds up the reaction of nitrogen and hydrogen into ammonia, but is not used up itself',
        'The iron stops the reaction happening, so that the gases stay separate',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-trans-met-mis-catalyst-used-up',
    },
    {
      id: 'cpt-trans-met-q17',
      type: 'multiple-choice',
      stem: 'Stainless steel cutlery from Sheffield contains iron with about 11 percent chromium added. The chromium gives stainless steel its shine and stops it from rusting in a kitchen sink. Which group on the periodic table does chromium belong to?',
      tier: 'challenge',
      options: [
        'Group 1, alongside sodium and potassium',
        'Group 0, alongside helium and neon',
        'The transition metal block between Group 2 and Group 3',
        'Group 7, alongside chlorine',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-trans-met-mis-all-metals',
    },
    {
      id: 'cpt-trans-met-q18',
      type: 'multiple-choice',
      stem: 'A school in Bristol holds a science fair. One stall claims: "Iron tablets from Boots, copper roof tiles, and titanium hip replacements used by the NHS, are all the same kind of metal." Is the claim correct?',
      tier: 'challenge',
      options: [
        'No, because copper is a noble gas while iron is a metal',
        'Yes, because iron, copper and titanium are all transition metals in the wide block between Group 2 and Group 3',
        'No, because titanium is a non-metal',
        'Yes, because all metals on the periodic table belong to the same group',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'cpt-trans-met-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil reads a label on a bottle in a UK chemistry lab: "potassium dichromate(VI), orange crystals, contains chromium". They are asked to explain why this is described as a transition metal compound.',
      tier: 'challenge',
      steps: [
        'Chromium (Cr) sits in the wide block between Group 2 and Group 3 of the periodic table, so it is a transition metal.',
        'The Roman numeral VI in the name shows that chromium is in the +6 oxidation state in this compound. Chromium can also form +3 compounds.',
        null,
        'So potassium dichromate(VI) ticks two transition metal boxes (variable oxidation state and a coloured compound), which is why it is described as a transition metal compound.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The bottle is labelled "orange crystals", which is another classic transition metal sign: transition metals form coloured compounds, unlike the white compounds of Group 1.',
      xpValue: 25,
    },
    {
      id: 'cpt-trans-met-q20',
      type: 'numeric-entry',
      stem: 'A UK car factory bolts a catalytic converter onto every new petrol car. By law, all new UK petrol cars have been fitted with a catalytic converter since the year nineteen ninety-three. In what year was this law brought in? Give the four-digit year.',
      tier: 'challenge',
      correctAnswer: 1993,
      xpValue: 25,
      hint: 'Read the year written out in words in the question.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q07 on the periodic table: candidates "regularly stated that the transition metals are in Group 1, confusing the alkali metals with the central block." Reinforced by CGP KS3 Chemistry Study Book p.57 chapter on transition metals.
    {
      id: 'cpt-trans-met-mis-group1',
      description:
        'Transition metals are part of Group 1, alongside sodium and potassium.',
      triggerAnswer: 'group1',
      correction:
        'In fact transition metals sit in a separate block between Group 2 and Group 3, not in Group 1. They are harder, denser and less reactive than Group 1 metals.',
      reExplanation:
        'Picture the periodic table on the wall. Group 1 holds the soft alkali metals (Li, Na, K) on the far left. The transition metal block (Sc to Zn in the top row) sits to the right of Group 2. A pupil who sees iron in Group 1 has run together two different parts of the table.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q06 on transition metals: candidates "frequently claimed iron has only one valency, missing the iron(II) and iron(III) distinction in the labelled bottles." Reinforced by CGP KS3 Chemistry Study Book p.57 Common Mistake box on oxidation states.
    {
      id: 'cpt-trans-met-mis-fixed-valency',
      description:
        'Every transition metal has just one fixed oxidation state, like the Group 1 metals.',
      triggerAnswer: 'fixed-valency',
      correction:
        'In fact transition metals usually show more than one oxidation state. Iron forms Fe2+ (iron II) or Fe3+ (iron III). Copper forms Cu+ or Cu2+. Group 1 metals only ever form +1 ions.',
      reExplanation:
        'Two bottles of iron sulfate on a lab bench give the game away. One is pale green (iron II, FeSO4); the other is yellow-brown (iron III, Fe2(SO4)3). Same element, two different oxidation states, two different colours. Variable oxidation states are a defining trait of the transition metal block.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q08 on transition metals as catalysts: candidates "wrote that the catalyst gets used up, missing the point that a catalyst speeds up a reaction without itself being consumed." Reinforced by RSC Education article "Teaching transition metals at KS3 and KS4" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-trans-met-mis-catalyst-used-up',
      description:
        'A catalyst, like iron in the Haber process, is used up in the reaction.',
      triggerAnswer: 'catalyst-used-up',
      correction:
        'In fact a catalyst speeds up a reaction but is not used up itself. The same iron catalyst at the Billingham plant can run for years before it has to be replaced.',
      reExplanation:
        'A catalyst gives the reaction an easier route, like a shortcut over a stile. The reactants (nitrogen and hydrogen) travel through, but the stile itself stays put. That is why a small amount of platinum in a catalytic converter can clean the exhaust gases from a UK car for years without running out.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q05 on transition metals: candidates "wrote that all metals on the periodic table are transition metals, including sodium and aluminium." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on element classification.
    {
      id: 'cpt-trans-met-mis-all-metals',
      description:
        'All metals on the periodic table are transition metals, including sodium and aluminium.',
      triggerAnswer: 'all-metals',
      correction:
        'In fact only the wide block between Group 2 and Group 3 holds transition metals. Group 1 metals (Na, K), Group 2 metals (Mg, Ca) and Group 3 metals (Al) are not transition metals.',
      reExplanation:
        'There are roughly 80 metallic elements, but only about 30 sit in the transition metal block. Sodium is a Group 1 alkali metal; aluminium is a Group 3 post-transition metal. Picture the periodic table coloured by group: the transition metal stripe is just the central block, not the whole metal half.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q09 on coloured compounds: candidates "claimed that only solid transition metal salts are coloured and that the solution would always be clear and colourless." Reinforced by CGP KS3 Chemistry Study Book p.58 worked example on copper(II) sulfate solution.
    {
      id: 'cpt-trans-met-mis-coloured-solid-only',
      description:
        'Transition metal compounds are only coloured when they are solid crystals; their solutions are always colourless.',
      triggerAnswer: 'coloured-solid-only',
      correction:
        'In fact the colour shows up especially well in solution. Copper(II) sulfate is bright blue, iron(II) sulfate is pale green and potassium manganate(VII) is deep purple in water.',
      reExplanation:
        'Drop a couple of crystals of potassium manganate(VII) into a beaker of water. Within seconds the whole beaker turns deep purple. The colour comes from the manganese ions in the solution, not from a fleck of solid. School chemistry labs use this to show off transition metal colours in a way Group 1 salts can never match.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on transition metals: candidates "said transition metals were unreactive like noble gases, since copper pipes sit outside for years without changing." Reinforced by Vanessa Kind, "Beyond Appearances", RSC Education (2004 update).
    {
      id: 'cpt-trans-met-mis-unreactive-like-noble',
      description:
        'Transition metals are unreactive, just like the noble gases in Group 0.',
      triggerAnswer: 'unreactive-like-noble',
      correction:
        'In fact transition metals do react, just slowly. Iron rusts, copper roofs turn green and zinc coats steel and corrodes in place of it. Noble gases barely react at all.',
      reExplanation:
        'A piece of fresh iron left in a damp UK garden picks up an orange rust layer within weeks. A copper roof on a UK cathedral turns pale green over decades as copper carbonate forms. Both reactions are slow, but they do happen. A noble gas like argon would sit unchanged in the same garden for thousands of years.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
