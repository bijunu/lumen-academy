import type { SkillNode } from '@/types/content'

export const mendeleevPeriodicTable: SkillNode = {
  id: 'chemistry-periodic-table-mendeleev',
  title: "Mendeleev's Periodic Table",
  description:
    'Dmitri Mendeleev published his periodic table in 1869, ordering the known elements by atomic mass and grouping them by chemical behaviour. He left gaps for elements he believed existed but had not yet been discovered, and he predicted their properties from the row and column the gap sat in. When gallium (1875), scandium (1879) and germanium (1886) were later isolated, the measured properties matched his predictions closely. Learn what Mendeleev got right, what he left for later (no noble gases yet, no atomic number, no full transition block), and why the modern ordering by atomic number resolves the few elements that appeared out of mass order in his table.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-layout'],
  curriculum: {
    ks3Objective:
      'The principles underpinning the Mendeleev periodic table; how Mendeleev predicted the properties of elements not yet discovered.',
    awardingBodies: {
      aqa: '4.1.2.2 Development of the periodic table; historical development and how Mendeleev predicted properties (8462)',
      edexcel: 'Topic 1.31 Development of the periodic table; Mendeleev and gaps (1CH0)',
      ocr: "C1.2a The periodic table: development; Mendeleev's predictions and gaps (J248 Gateway Chemistry)",
    },
  },
  scenes: [
    {
      id: 'cpt-mendeleev-history',
      title: 'Mendeleev in 1869: Ordering by Atomic Mass',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what Mendeleev did when he sat down to organise the 63 elements known in 1869.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">MENDELEEV, 1869: ORDER BY ATOMIC MASS, GROUP BY BEHAVIOUR</text><g><rect x="20" y="40" width="100" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="70" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">63 KNOWN ELEMENTS</text><text x="70" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">H, Li, Be, B, C, N, O, F</text><text x="70" y="90" text-anchor="middle" font-size="7" fill="#1E3A8A">Na, Mg, Al, Si, P, S, Cl</text><text x="70" y="102" text-anchor="middle" font-size="7" fill="#1E3A8A">K, Ca, ...</text><text x="70" y="125" text-anchor="middle" font-size="7" fill="#475569">no noble gases yet</text><text x="70" y="137" text-anchor="middle" font-size="7" fill="#475569">(helium, neon, argon</text><text x="70" y="149" text-anchor="middle" font-size="7" fill="#475569">not yet discovered)</text><text x="70" y="175" text-anchor="middle" font-size="7" fill="#475569">no atomic number</text><text x="70" y="187" text-anchor="middle" font-size="7" fill="#475569">no electron model</text></g><g><line x1="130" y1="120" x2="160" y2="120" stroke="#1E3A8A" stroke-width="2"/><polygon points="158,115 168,120 158,125" fill="#1E3A8A"/><text x="145" y="110" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">arrange</text></g><g><rect x="180" y="40" width="160" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="260" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">MENDELEEV TABLE</text><rect x="194" y="68" width="22" height="16" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.5"/><text x="205" y="79" text-anchor="middle" font-size="7" fill="#1E3A8A">Li</text><rect x="218" y="68" width="22" height="16" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.5"/><text x="229" y="79" text-anchor="middle" font-size="7" fill="#1E3A8A">Be</text><rect x="266" y="68" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="277" y="79" text-anchor="middle" font-size="7" fill="#1E3A8A">C</text><rect x="290" y="68" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="301" y="79" text-anchor="middle" font-size="7" fill="#1E3A8A">N</text><rect x="314" y="68" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="325" y="79" text-anchor="middle" font-size="7" fill="#1E3A8A">F</text><rect x="194" y="88" width="22" height="16" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.5"/><text x="205" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">Na</text><rect x="218" y="88" width="22" height="16" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.5"/><text x="229" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">Mg</text><rect x="242" y="88" width="22" height="16" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.5"/><text x="253" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">Al</text><rect x="266" y="88" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="277" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">Si</text><rect x="290" y="88" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="301" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">P</text><rect x="314" y="88" width="22" height="16" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.5"/><text x="325" y="99" text-anchor="middle" font-size="7" fill="#1E3A8A">Cl</text><rect x="194" y="108" width="22" height="16" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.5"/><text x="205" y="119" text-anchor="middle" font-size="7" fill="#1E3A8A">K</text><rect x="218" y="108" width="22" height="16" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.5"/><text x="229" y="119" text-anchor="middle" font-size="7" fill="#1E3A8A">Ca</text><rect x="242" y="108" width="22" height="16" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1.4" stroke-dasharray="2 1"/><text x="253" y="119" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">?</text><rect x="266" y="108" width="22" height="16" fill="#E0E7FF" stroke="#1E3A8A" stroke-width="1.4" stroke-dasharray="2 1"/><text x="277" y="119" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">?</text><text x="260" y="148" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">columns: similar behaviour</text><text x="260" y="160" text-anchor="middle" font-size="7" fill="#7C2D12" font-weight="600">gaps: missing elements</text><text x="260" y="180" text-anchor="middle" font-size="7" fill="#475569">Royal Society of Chemistry</text><text x="260" y="192" text-anchor="middle" font-size="7" fill="#475569">London holds his notebook</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-mendeleev-h-known',
            x: 16,
            y: 40,
            label: '63 elements were known in 1869',
            description:
              'When Mendeleev sat down to organise the periodic table, only 63 elements had been isolated. The noble gases (helium, neon, argon) had not yet been discovered, and there was no idea of atomic number or electron shells.',
          },
          {
            id: 'cpt-mendeleev-h-arrange',
            x: 40,
            y: 55,
            label: 'Ordered by atomic mass',
            description:
              'Mendeleev wrote each element on a card with its atomic mass and known reactions, then laid the cards out in order of rising atomic mass. Atomic number was not yet known, so mass was the only number he had.',
          },
          {
            id: 'cpt-mendeleev-h-columns',
            x: 70,
            y: 35,
            label: 'Grouped by chemical behaviour',
            description:
              'When he broke the rows so that elements with similar reactions lined up underneath each other, he found alkali metals stacked under alkali metals, and halogens stacked under halogens. The columns showed periodic behaviour.',
          },
          {
            id: 'cpt-mendeleev-h-gaps',
            x: 72,
            y: 60,
            label: 'Left gaps for missing elements',
            description:
              'Some spots in the grid had no known element to fit them. Rather than force an existing element into the wrong column, Mendeleev left the spot blank and treated the gap as a prediction.',
          },
          {
            id: 'cpt-mendeleev-h-uk',
            x: 70,
            y: 90,
            label: 'UK link: notebook in London',
            description:
              "The Royal Society of Chemistry in London holds one of Mendeleev's working notebooks. School groups can view the table draft as part of the Society's heritage collection.",
          },
        ],
      },
    },
    {
      id: 'cpt-mendeleev-gaps',
      title: 'Predicting Gallium: A Gap that Got Filled',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how Mendeleev predicted the properties of the gap he called eka-aluminium, and how gallium matched the prediction in 1875.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">EKA-ALUMINIUM (1869) vs GALLIUM (1875)</text><g><rect x="20" y="40" width="150" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="95" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">MENDELEEV PREDICTED</text><text x="95" y="74" text-anchor="middle" font-size="8" fill="#1E3A8A">name: eka-aluminium</text><text x="95" y="90" text-anchor="middle" font-size="8" fill="#1E3A8A">atomic mass: about 68</text><text x="95" y="106" text-anchor="middle" font-size="8" fill="#1E3A8A">density: about 6.0 g/cm³</text><text x="95" y="122" text-anchor="middle" font-size="8" fill="#1E3A8A">low melting point</text><text x="95" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">forms an oxide M₂O₃</text><text x="95" y="154" text-anchor="middle" font-size="8" fill="#1E3A8A">soft, like aluminium</text><text x="95" y="180" text-anchor="middle" font-size="7" fill="#475569">published 1869</text></g><g><line x1="180" y1="120" x2="200" y2="120" stroke="#1E3A8A" stroke-width="2"/><polygon points="198,115 208,120 198,125" fill="#1E3A8A"/></g><g><rect x="210" y="40" width="130" height="160" rx="4" fill="#FFFFFF" stroke="#064E3B" stroke-width="1"/><text x="275" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">GALLIUM, MEASURED 1875</text><text x="275" y="74" text-anchor="middle" font-size="8" fill="#1E3A8A">name: gallium (Ga)</text><text x="275" y="90" text-anchor="middle" font-size="8" fill="#1E3A8A">atomic mass: 69.7</text><text x="275" y="106" text-anchor="middle" font-size="8" fill="#1E3A8A">density: 5.9 g/cm³</text><text x="275" y="122" text-anchor="middle" font-size="8" fill="#1E3A8A">melts in your hand</text><text x="275" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">oxide Ga₂O₃</text><text x="275" y="154" text-anchor="middle" font-size="8" fill="#1E3A8A">soft silver metal</text><text x="275" y="180" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="600">predictions matched</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-mendeleev-h-pred-name',
            x: 20,
            y: 35,
            label: '"Eka-aluminium" meant "next aluminium"',
            description:
              'Mendeleev gave the gap below aluminium a placeholder name: eka-aluminium, where eka is Sanskrit for "first" or "next". He used eka-boron and eka-silicon for two more gaps in the same way.',
          },
          {
            id: 'cpt-mendeleev-h-pred-mass',
            x: 20,
            y: 50,
            label: 'Predicted from row and column',
            description:
              'He worked out the missing atomic mass by averaging the masses of the elements directly above, below and either side of the gap. He used the same trick to estimate density, melting point and the formula of its oxide.',
          },
          {
            id: 'cpt-mendeleev-h-pred-oxide',
            x: 20,
            y: 80,
            label: 'Oxide formula from the column',
            description:
              "Aluminium forms Al₂O₃ (one aluminium oxide unit has two aluminium and three oxygen). Mendeleev assumed the element below aluminium would behave the same way, and predicted an oxide M₂O₃.",
          },
          {
            id: 'cpt-mendeleev-h-real-mass',
            x: 70,
            y: 50,
            label: 'Gallium: measured atomic mass 69.7',
            description:
              "In 1875 the French chemist Paul-Émile Lecoq de Boisbaudran isolated a new metal he called gallium. Its measured atomic mass was 69.7, close to Mendeleev's predicted 68, and its density of 5.9 g/cm³ was almost exactly the predicted 6.0 g/cm³.",
          },
          {
            id: 'cpt-mendeleev-h-real-melt',
            x: 70,
            y: 70,
            label: 'Gallium melts in your hand',
            description:
              'Gallium has a melting point of 29.8 °C, low enough to melt in a warm hand. That matched the prediction of a low melting point for eka-aluminium. UK science museums often show a gallium spoon that melts when stirred into tea.',
          },
        ],
      },
    },
    {
      id: 'cpt-mendeleev-out-of-order',
      title: 'Out of Mass Order: Tellurium and Iodine',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see one of the few places where Mendeleev had to break his own rule of rising atomic mass to keep the chemical pattern working.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">TELLURIUM AND IODINE: A PUZZLE FOR MENDELEEV</text><g><rect x="40" y="50" width="120" height="160" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="100" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">IF BY ATOMIC MASS</text><rect x="50" y="80" width="44" height="30" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.6"/><text x="72" y="96" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">I</text><text x="72" y="106" text-anchor="middle" font-size="6" fill="#1E3A8A">mass 126.9</text><rect x="106" y="80" width="44" height="30" fill="#FEF3C7" stroke="#7F1D1D" stroke-width="0.6"/><text x="128" y="96" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Te</text><text x="128" y="106" text-anchor="middle" font-size="6" fill="#1E3A8A">mass 127.6</text><text x="100" y="135" text-anchor="middle" font-size="7" fill="#7F1D1D">I before Te if you go by mass</text><text x="100" y="148" text-anchor="middle" font-size="7" fill="#7F1D1D">BUT iodine behaves like a halogen</text><text x="100" y="160" text-anchor="middle" font-size="7" fill="#7F1D1D">(Group 7), not a Group 6 element</text><text x="100" y="180" text-anchor="middle" font-size="7" fill="#7F1D1D">wrong column for I</text></g><g><line x1="170" y1="130" x2="200" y2="130" stroke="#1E3A8A" stroke-width="2"/><polygon points="198,125 208,130 198,135" fill="#1E3A8A"/></g><g><rect x="210" y="50" width="130" height="160" rx="4" fill="#FFFFFF" stroke="#064E3B" stroke-width="1"/><text x="275" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">MENDELEEV SWAPPED THEM</text><rect x="220" y="80" width="44" height="30" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.6"/><text x="242" y="96" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Te</text><text x="242" y="106" text-anchor="middle" font-size="6" fill="#1E3A8A">Group 6</text><rect x="276" y="80" width="44" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="0.6"/><text x="298" y="96" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">I</text><text x="298" y="106" text-anchor="middle" font-size="6" fill="#1E3A8A">Group 7</text><text x="275" y="135" text-anchor="middle" font-size="7" fill="#064E3B">Te placed before I</text><text x="275" y="148" text-anchor="middle" font-size="7" fill="#064E3B">to match chemical behaviour</text><text x="275" y="170" text-anchor="middle" font-size="7" fill="#475569">Modern table: ordered by</text><text x="275" y="182" text-anchor="middle" font-size="7" fill="#475569">atomic number (Te = 52, I = 53)</text><text x="275" y="198" text-anchor="middle" font-size="7" fill="#475569">no swap needed</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-mendeleev-h-puzzle',
            x: 20,
            y: 40,
            label: 'A puzzle: mass order put I before Te',
            description:
              'Iodine has a slightly lower atomic mass (126.9) than tellurium (127.6). Straight mass order would put iodine first. But iodine reacts like a Group 7 halogen, and tellurium reacts like a Group 6 element.',
          },
          {
            id: 'cpt-mendeleev-h-chemistry',
            x: 20,
            y: 65,
            label: 'Chemistry comes first',
            description:
              'Mendeleev decided behaviour was a stronger guide than mass and swapped the two elements. He did the same for cobalt-nickel and (later) for argon-potassium, where chemistry and mass order disagreed.',
          },
          {
            id: 'cpt-mendeleev-h-swap',
            x: 70,
            y: 40,
            label: 'Te placed before I',
            description:
              'In his final table, tellurium sits in Group 6 and iodine in Group 7, even though that breaks the strict mass-rising rule. Mendeleev wrote that the masses of one or two elements must therefore have been measured wrong, and called for them to be redone.',
          },
          {
            id: 'cpt-mendeleev-h-resolve',
            x: 70,
            y: 80,
            label: 'Modern table: atomic number resolves it',
            description:
              'The modern periodic table is ordered by atomic number (number of protons), not by atomic mass. Te has atomic number 52, I has atomic number 53. In atomic number order there is no swap, and no puzzle. The chemical pattern lines up naturally.',
          },
        ],
      },
    },
    {
      id: 'cpt-mendeleev-modern-vs-1869',
      title: "Mendeleev's Table vs the Modern Table",
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see four important differences between the 1869 table and the wall poster in a modern UK chemistry lab.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="20" y="30" width="150" height="170" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><text x="95" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">MENDELEEV, 1869</text><text x="95" y="68" text-anchor="middle" font-size="7" fill="#1E3A8A">ordered by atomic MASS</text><text x="95" y="82" text-anchor="middle" font-size="7" fill="#1E3A8A">no noble gases column</text><text x="95" y="96" text-anchor="middle" font-size="7" fill="#1E3A8A">no separate transition</text><text x="95" y="106" text-anchor="middle" font-size="7" fill="#1E3A8A">metal block</text><text x="95" y="122" text-anchor="middle" font-size="7" fill="#1E3A8A">gaps left for unknown</text><text x="95" y="132" text-anchor="middle" font-size="7" fill="#1E3A8A">elements (Ga, Sc, Ge)</text><text x="95" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A">63 elements known</text><text x="95" y="172" text-anchor="middle" font-size="7" fill="#475569">no electron model;</text><text x="95" y="184" text-anchor="middle" font-size="7" fill="#475569">no atomic number</text></g><g><line x1="180" y1="115" x2="200" y2="115" stroke="#1E3A8A" stroke-width="2"/><polygon points="198,110 208,115 198,120" fill="#1E3A8A"/></g><g><rect x="210" y="30" width="130" height="170" rx="4" fill="#FFFFFF" stroke="#064E3B" stroke-width="1"/><text x="275" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">MODERN TABLE</text><text x="275" y="68" text-anchor="middle" font-size="7" fill="#1E3A8A">ordered by atomic NUMBER</text><text x="275" y="82" text-anchor="middle" font-size="7" fill="#1E3A8A">Group 0 (noble gases)</text><text x="275" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">included</text><text x="275" y="106" text-anchor="middle" font-size="7" fill="#1E3A8A">transition metals block</text><text x="275" y="116" text-anchor="middle" font-size="7" fill="#1E3A8A">in the middle</text><text x="275" y="132" text-anchor="middle" font-size="7" fill="#1E3A8A">gaps now filled</text><text x="275" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A">118 elements known</text><text x="275" y="172" text-anchor="middle" font-size="7" fill="#475569">elements 113 to 118</text><text x="275" y="184" text-anchor="middle" font-size="7" fill="#475569">named after 2010</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-mendeleev-h-mass-vs-number',
            x: 20,
            y: 30,
            label: 'Mass then, atomic number now',
            description:
              "Mendeleev only had atomic mass. The modern table orders elements by atomic number (the number of protons), which is fixed for each element and resolves the tellurium-iodine puzzle automatically.",
          },
          {
            id: 'cpt-mendeleev-h-noble-missing',
            x: 20,
            y: 50,
            label: 'No noble gases in 1869',
            description:
              "Helium, neon and argon were not discovered until the 1890s. Mendeleev's table had no Group 0 at all. When argon was found in 1894, William Ramsay (working in London) showed it fitted as a whole new column on the right.",
          },
          {
            id: 'cpt-mendeleev-h-transition',
            x: 20,
            y: 80,
            label: 'No transition metals block',
            description:
              'In 1869 the transition metals were not yet understood as a separate block. They sat awkwardly in the same columns as the main group elements. The modern table lifts them out into the wide central block of Groups 3 to 12.',
          },
          {
            id: 'cpt-mendeleev-h-still-growing',
            x: 70,
            y: 75,
            label: 'Still growing today',
            description:
              "Mendeleev's 63 elements have grown to 118. Elements 113 (nihonium), 114, 115, 116, 117 and 118 (oganesson) were only named after 2010. The periodic table is not finished; the next gap is element 119, predicted but not yet made.",
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-mendeleev-worked-1',
      title: 'Predicting eka-silicon (germanium) from the row and column',
      steps: [
        {
          explanation:
            "Question: a Year 7 pupil reads in a Sevenoaks textbook that Mendeleev predicted a missing element in the gap below silicon and called it eka-silicon. The neighbours in the table are silicon (mass 28), tin (mass 119), gallium (mass 70) and arsenic (mass 75). Estimate the atomic mass of eka-silicon and predict the formula of its oxide.",
        },
        {
          explanation:
            'Step 1: find the gap. Eka-silicon sits one row below silicon (Si), one row above tin (Sn), one column to the right of gallium (Ga), and one column to the left of arsenic (As). It is surrounded by four known neighbours.',
          maths: 'gap neighbours: Si (above), Sn (below), Ga (left), As (right)',
        },
        {
          explanation:
            'Step 2: estimate the atomic mass by averaging the neighbours above and below in the same column. The element above is silicon (mass 28). The element below is tin (mass 119).',
          maths: 'predicted mass ≈ (28 + 119) / 2 = 147 / 2 = 73.5',
        },
        {
          explanation:
            "Step 3: predict the oxide formula from the column. Silicon forms SiO₂ (each silicon atom bonds with two oxygens). Tin in the same column also forms SnO₂. So the gap element should form MO₂, an oxide with one of the new element and two oxygens.",
          maths: 'column shows MO₂; predicted oxide of eka-silicon is XO₂',
        },
        {
          explanation:
            'Step 4: state the prediction. Eka-silicon should have an atomic mass near 73, behave like silicon, and form an oxide XO₂. When germanium was isolated in 1886 by Clemens Winkler in Germany, its measured atomic mass was 72.6 and it formed GeO₂. Both predictions matched closely.',
          maths: 'measured germanium: mass 72.6, oxide GeO₂ -> matches prediction',
        },
        {
          explanation:
            "The predicted and measured values agree to within a couple of percent. This is the kind of evidence that turned chemists across Europe into believers of Mendeleev's table.",
        },
      ],
    },
    {
      id: 'cpt-mendeleev-worked-2',
      title: 'Why argon and potassium look out of order, and what fixes it',
      steps: [
        {
          explanation:
            "Question: in a modern UK chemistry textbook, argon (atomic mass 39.9) appears before potassium (atomic mass 39.1) in the periodic table, even though potassium has the lower mass. Explain why this happens and how the modern table resolves it.",
        },
        {
          explanation:
            "Step 1: list the chemistry. Argon is a noble gas (Group 0) and barely reacts. Potassium is an alkali metal (Group 1) and reacts strongly with cold water. Chemistry says argon must end one period, and potassium must start the next.",
          maths: 'Ar (Group 0, end of period 3) | K (Group 1, start of period 4)',
        },
        {
          explanation:
            'Step 2: compare atomic masses. Argon has atomic mass 39.9, while potassium has atomic mass 39.1. By strict mass order, potassium would come first.',
          maths: 'mass: K (39.1) < Ar (39.9)',
        },
        {
          explanation:
            'Step 3: compare atomic numbers. Argon has 18 protons, potassium has 19 protons. By atomic number order, argon comes first and potassium follows.',
          maths: 'atomic number: Ar (18) < K (19)',
        },
        {
          explanation:
            'Step 4: choose the rule that respects the chemistry. Atomic number gives the correct order to match chemical behaviour, with argon as a noble gas and potassium opening the next period as an alkali metal. Mendeleev had to swap them by hand. The modern rule (order by atomic number) does it automatically.',
        },
        {
          explanation:
            "So the puzzle is real: argon is heavier than potassium, but argon comes first. The fix is to order by atomic number, not atomic mass. The same fix tidies up the tellurium-iodine and cobalt-nickel swaps Mendeleev had to make.",
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-mendeleev-q1',
      type: 'numeric-entry',
      stem: 'In what year did Dmitri Mendeleev publish his first periodic table of the elements? Give the year as a four-digit whole number.',
      tier: 'core',
      correctAnswer: 1869,
      xpValue: 10,
      hint: 'It was in the second half of the 19th century, twenty years before the noble gases were discovered.',
    },
    {
      id: 'cpt-mendeleev-q2',
      type: 'multiple-choice',
      stem: 'When Mendeleev built his 1869 table, what property did he use to put the elements in order from one side of a row to the other?',
      tier: 'core',
      options: [
        'Atomic mass',
        'Atomic number (number of protons)',
        'Number of electron shells',
        'Density at room temperature',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpt-mendeleev-mis-modern-ordering-mass',
    },
    {
      id: 'cpt-mendeleev-q3',
      type: 'multiple-choice',
      stem: 'Why did Mendeleev leave gaps in his periodic table?',
      tier: 'core',
      options: [
        'To make the table look neat and symmetrical',
        'Because he ran out of paper to write on',
        'Because he believed elements existed that had not yet been discovered, and the gaps held a place for them',
        'To show where radioactive elements would later be found',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-mendeleev-mis-gaps-decorative',
    },
    {
      id: 'cpt-mendeleev-q4',
      type: 'multiple-choice',
      stem: 'Mendeleev grouped elements together in vertical columns. What was his rule for which elements went into the same column?',
      tier: 'core',
      options: [
        'They had the same atomic mass',
        'They had the same colour as a solid',
        'They were discovered in the same country',
        'They had similar chemical reactions (similar behaviour)',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'cpt-mendeleev-q5',
      type: 'numeric-entry',
      stem: 'About how many elements were known when Mendeleev published his first periodic table in 1869? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 63,
      tolerance: 3,
      xpValue: 10,
      hint: 'It was much less than today. The noble gases and many heavy metals had not yet been isolated.',
    },
    {
      id: 'cpt-mendeleev-q6',
      type: 'spot-misconception',
      stem: 'A pupil writes: "Mendeleev was the very first person ever to try to arrange the elements in a table. Nobody had tried before him."',
      tier: 'core',
      statements: [
        {
          text: 'The pupil is correct. Mendeleev was the first ever to arrange the elements.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Earlier chemists (such as John Newlands in London and Johann Döbereiner in Germany) had tried to group elements. Mendeleev built on their ideas, but his table was the first to leave gaps and make testable predictions.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'cpt-mendeleev-mis-first-ever',
    },
    {
      id: 'cpt-mendeleev-q7',
      type: 'numeric-entry',
      stem: "Mendeleev's predicted eka-aluminium had an atomic mass of about 68. When gallium was isolated in 1875, its measured atomic mass was 69.7. What is the difference, in atomic mass units, between the prediction and the measured value? Give your answer to one decimal place.",
      tier: 'confident',
      correctAnswer: 1.7,
      tolerance: 0.2,
      unit: 'amu',
      xpValue: 15,
      hint: 'Take the measured value and subtract the predicted value: 69.7 - 68 = ?',
    },
    {
      id: 'cpt-mendeleev-q8',
      type: 'drag-order',
      stem: "Place these four events in the order they happened, from earliest at the top to most recent at the bottom.",
      tier: 'confident',
      items: [
        'Mendeleev publishes his periodic table',
        'Gallium is isolated and matches the eka-aluminium prediction',
        'Germanium is isolated and matches the eka-silicon prediction',
        'Argon is discovered and Group 0 is added to the table',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: '1869, 1875, 1886, 1894 are the years to anchor on.',
    },
    {
      id: 'cpt-mendeleev-q9',
      type: 'missing-step',
      stem: "Fill in the missing step. Question: explain how Mendeleev predicted the atomic mass of his gap element 'eka-silicon'.",
      tier: 'confident',
      steps: [
        'The gap sat directly below silicon (mass 28) and directly above tin (mass 119) in the same column.',
        'Mendeleev assumed an element in a column should have an atomic mass close to the average of the elements above and below it.',
        null,
        'So Mendeleev predicted eka-silicon would have an atomic mass close to 73, and when germanium was isolated in 1886 its measured mass of 72.6 fitted that prediction.',
      ],
      missingStepIndex: 2,
      correctStep:
        'He calculated the average of the masses above and below: (28 + 119) divided by 2, which gives about 73.5.',
      xpValue: 20,
    },
    {
      id: 'cpt-mendeleev-q10',
      type: 'multiple-choice',
      stem: 'A pupil in Edinburgh asks: "When Mendeleev built his table in 1869, why was there no column for the noble gases (Group 0)?"',
      tier: 'confident',
      options: [
        'Because Mendeleev did not believe in noble gases',
        'Because the noble gases were classed as metals at the time',
        'Because the noble gases were too rare to be put in a periodic table',
        'Because the noble gases (helium, neon, argon) had not yet been discovered in 1869',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpt-mendeleev-mis-same-as-modern',
    },
    {
      id: 'cpt-mendeleev-q11',
      type: 'numeric-entry',
      stem: "Mendeleev's table left specific gaps that were later filled. Of these four elements (gallium, scandium, germanium, helium), how many were predicted by Mendeleev as gaps in his 1869 table? Give your answer as a single whole number.",
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Gallium (eka-aluminium), scandium (eka-boron) and germanium (eka-silicon) were predicted gaps. The noble gases were not.',
      misconceptionId: 'cpt-mendeleev-mis-same-as-modern',
    },
    {
      id: 'cpt-mendeleev-q12',
      type: 'multiple-choice',
      stem: 'In the modern periodic table, what property is used to order the elements from left to right across a period?',
      tier: 'confident',
      options: [
        'Atomic number (number of protons)',
        'Atomic mass',
        'Density',
        'Year of discovery',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpt-mendeleev-mis-modern-ordering-mass',
    },
    {
      id: 'cpt-mendeleev-q13',
      type: 'spot-misconception',
      stem: 'Adaeze writes: "Mendeleev got lucky. His predictions for the missing elements were really just guesses that happened to match."',
      tier: 'confident',
      statements: [
        {
          text: 'Adaeze is right. The predictions were lucky guesses.',
          isMisconception: true,
        },
        {
          text: "Adaeze is wrong. Mendeleev's predictions were worked out from the row and column position of each gap, averaging the properties of the surrounding known elements. They were testable predictions, not guesses, which is why several of them matched within a couple of percent when the elements were later isolated.",
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-mendeleev-mis-predictions-lucky',
    },
    {
      id: 'cpt-mendeleev-q14',
      type: 'multiple-choice',
      stem: "When Mendeleev came to tellurium (mass 127.6) and iodine (mass 126.9), strict atomic mass order would have placed iodine before tellurium. He put tellurium before iodine instead. Why?",
      tier: 'confident',
      options: [
        'Because he disliked iodine',
        'Because iodine had not yet been discovered',
        'Because iodine behaves chemically like a Group 7 halogen, so it had to sit in the halogen column underneath chlorine and bromine, even if its mass was slightly lower than tellurium',
        'Because heavier elements always come first in a table',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpt-mendeleev-mis-strict-mass-order',
    },
    {
      id: 'cpt-mendeleev-q15',
      type: 'numeric-entry',
      stem: "Mendeleev's eka-silicon was predicted to have a density of about 5.5 g/cm³. When germanium was isolated, its measured density was 5.3 g/cm³. By how much, in g/cm³, did the measured value differ from the prediction? Give your answer to one decimal place.",
      tier: 'confident',
      correctAnswer: 0.2,
      tolerance: 0.1,
      unit: 'g/cm³',
      xpValue: 15,
      hint: 'Subtract the smaller value from the larger value: 5.5 - 5.3 = ?',
    },
    {
      id: 'cpt-mendeleev-q16',
      type: 'multiple-choice',
      stem: "Argon has an atomic mass of 39.9 and potassium has an atomic mass of 39.1. Strict mass order would put potassium before argon, but in a modern UK periodic table argon comes first. Which fact resolves this puzzle?",
      tier: 'challenge',
      options: [
        'Argon is heavier than potassium, so it always comes first by mass',
        'The atomic mass of potassium has been measured wrong all along',
        'Argon is a metal, like potassium, so the order does not matter',
        'Argon has 18 protons (atomic number 18) and potassium has 19 protons (atomic number 19), so argon comes first when the elements are ordered by atomic number rather than by mass',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpt-mendeleev-mis-modern-ordering-mass',
    },
    {
      id: 'cpt-mendeleev-q17',
      type: 'multiple-choice',
      stem: "A Cardiff pupil reads that the periodic table is 'finished'. Pick the statement that best describes the current state of the table in 2026.",
      tier: 'challenge',
      options: [
        "The table is fully finished and has not changed since Mendeleev's time",
        "Only Mendeleev's original 63 elements are recognised today",
        'The table grows slowly. New superheavy elements have been added in the 21st century (nihonium, moscovium, oganesson and others, all named after 2010), and elements beyond 118 are predicted but not yet made',
        'No new elements have been discovered since the 1950s',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-mendeleev-mis-table-finished',
    },
    {
      id: 'cpt-mendeleev-q18',
      type: 'multiple-choice',
      stem: "Mendeleev predicted a missing element below boron, which he called eka-boron. Its real-life match was scandium, isolated in 1879 by Lars Fredrik Nilson in Sweden. Which best describes how Mendeleev would have estimated scandium's properties before it was found?",
      tier: 'challenge',
      options: [
        'He averaged the properties of the elements directly above, below and either side of the gap, then read off an atomic mass and an oxide formula from that pattern',
        'He performed reactions in his own laboratory until scandium fell out',
        'He guessed the properties at random',
        'He copied the properties of an existing element with the same name',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cpt-mendeleev-mis-predictions-lucky',
    },
    {
      id: 'cpt-mendeleev-q19',
      type: 'multiple-choice',
      stem: "A Manchester teacher writes on the board: 'Mendeleev's 1869 table is essentially the same as the wall poster in our lab today.' Which statement best corrects or refines that claim?",
      tier: 'challenge',
      options: [
        "The teacher is exactly right; nothing has changed",
        "The teacher is broadly right about the column-by-behaviour idea, but the modern table differs in several ways: it is ordered by atomic number (not atomic mass), it has a full Group 0 of noble gases (added after 1894), it has a proper transition metals block, and it now holds 118 elements rather than 63",
        "The teacher is wrong because Mendeleev's table was discarded entirely",
        "The teacher is wrong because the modern table is ordered by mass while Mendeleev used atomic number",
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpt-mendeleev-mis-same-as-modern',
    },
    {
      id: 'cpt-mendeleev-q20',
      type: 'numeric-entry',
      stem: "Three of Mendeleev's predicted gaps (eka-aluminium, eka-boron, eka-silicon) were filled by gallium (1875), scandium (1879) and germanium (1886). How many years passed between the publication of Mendeleev's table and the latest of these three discoveries? Give your answer as a whole number of years.",
      tier: 'challenge',
      correctAnswer: 17,
      tolerance: 1,
      unit: 'years',
      xpValue: 25,
      hint: 'The latest of the three is germanium in 1886. Subtract 1869 from 1886.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q07 on the development of the periodic table; candidates "wrote that Mendeleev was the first person ever to organise the elements in a table, missing the earlier work of Newlands and Doebereiner". Reinforced by RSC Education article "How Mendeleev wasn't the only chemist working on the periodic table" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-mendeleev-mis-first-ever',
      description:
        'Mendeleev was the very first person to organise the elements into a table.',
      triggerAnswer: 'first-ever',
      correction:
        'In fact earlier chemists had tried. John Newlands in London proposed his "law of octaves" in 1865, and Johann Doebereiner had grouped elements into triads in 1829. Mendeleev built on those ideas.',
      reExplanation:
        "Newlands wrote elements in rows of seven and noticed that the eighth element behaved like the first, an early hint at periodicity. Doebereiner had spotted that certain trios of elements had related masses and properties. Mendeleev's table stood out because he left gaps and made testable predictions, but it did not appear out of nowhere.",
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on the periodic table; candidates "stated that the modern periodic table is ordered by atomic mass, in the same way Mendeleev ordered his table". Reinforced by CGP KS3 Chemistry Study Book p.49 Common Mistake on atomic number vs atomic mass ordering.
    {
      id: 'cpt-mendeleev-mis-modern-ordering-mass',
      description:
        'The modern periodic table is ordered by atomic mass, just like Mendeleev ordered his.',
      triggerAnswer: 'modern-ordering-mass',
      correction:
        'In fact the modern table is ordered by atomic number (number of protons), not atomic mass. Mendeleev used mass because atomic number had not yet been discovered.',
      reExplanation:
        'Atomic number was only worked out in 1913 by Henry Moseley in Manchester, using x-rays. Reordering the table by atomic number tidies up the few places where Mendeleev had to swap pairs of elements by hand: tellurium and iodine, cobalt and nickel, and (later) argon and potassium all fall into the right place automatically.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q06 on Mendeleev's predictions; candidates "described his predictions as guesses that happened to match", undervaluing the systematic row-and-column method. Reinforced by RSC Education article "Mendeleev: the man and the periodic table" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-mendeleev-mis-predictions-lucky',
      description:
        "Mendeleev's predictions for the missing elements were lucky guesses that happened to be close to the truth.",
      triggerAnswer: 'predictions-lucky',
      correction:
        "In fact each prediction was worked out from the row and column position of the gap, by averaging the properties of the four neighbours. They were testable estimates, not guesses.",
      reExplanation:
        "For eka-silicon (later germanium), Mendeleev averaged the atomic masses of silicon above and tin below to get an estimate near 73, and read off the oxide formula MO2 from the column. When germanium was found in 1886 its measured mass of 72.6 and oxide GeO2 both fitted closely. Two more gaps (gallium, scandium) gave equally close matches.",
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on the periodic table; candidates "wrote that Mendeleev's 1869 table already contained the noble gases and the transition metals block", confusing the historical table with the modern poster. Reinforced by CGP KS3 Chemistry Study Book p.49 historical timeline.
    {
      id: 'cpt-mendeleev-mis-same-as-modern',
      description:
        "Mendeleev's 1869 periodic table is essentially the same as the modern table.",
      triggerAnswer: 'same-as-modern',
      correction:
        "In fact the modern table differs in several ways: it is ordered by atomic number, it includes Group 0 (noble gases), it has a full transition metals block, and it holds 118 elements rather than 63.",
      reExplanation:
        "Helium, neon and argon were only discovered in the 1890s, so Mendeleev's table had no Group 0 column at all. The transition metals were not yet treated as a separate block. Many elements above uranium did not exist on Earth and had to be made in laboratories during the 20th and 21st centuries. The columns-by-behaviour idea is shared, but the layout has been redrawn many times.",
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q07 on Mendeleev; candidates "wrote that the gaps in the table were decorative or showed where new elements would form when heated", missing the predictive role. Reinforced by BEST (Best Evidence Science Teaching) UCL/STEM Learning diagnostic question set on the development of the periodic table.
    {
      id: 'cpt-mendeleev-mis-gaps-decorative',
      description:
        "The gaps in Mendeleev's table were just empty squares to make it look neat.",
      triggerAnswer: 'gaps-decorative',
      correction:
        'In fact each gap stood for an element Mendeleev believed existed but had not yet been discovered. He predicted the properties of the missing element from the row and column.',
      reExplanation:
        "Three of the most famous gaps were eka-aluminium (later named gallium), eka-boron (scandium) and eka-silicon (germanium). Each one was filled within twenty years of the 1869 table, and the measured properties were very close to Mendeleev's predictions. The gaps were predictions, not decoration.",
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q06 on the development of the periodic table; candidates "said the periodic table is now complete and unchanged since the 20th century", missing the addition of superheavy elements after 2010. Reinforced by IUPAC element-naming press release (December 2016, oganesson and three sister elements).
    {
      id: 'cpt-mendeleev-mis-table-finished',
      description:
        "The periodic table is finished and has not gained any new elements since the early 20th century.",
      triggerAnswer: 'table-finished',
      correction:
        'In fact the table is still growing. Elements 113 (nihonium), 114, 115, 116, 117 and 118 (oganesson) were only named after 2010, and element 119 is predicted but not yet made.',
      reExplanation:
        'Superheavy elements are made one atom at a time by smashing nuclei together in laboratories in Japan, Russia, the United States and Germany. They are unstable and decay within fractions of a second, but each new confirmed element extends the table. Mendeleev would recognise the layout but not the row at the bottom.',
    },
    // Source: CGP KS3 Chemistry Study Book p.50 Common Mistake on Mendeleev; pupils "say Mendeleev placed every element in strict atomic mass order without ever breaking the rule". Reinforced by Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q09 on tellurium and iodine.
    {
      id: 'cpt-mendeleev-mis-strict-mass-order',
      description:
        'Mendeleev placed every element in strict atomic mass order with no exceptions.',
      triggerAnswer: 'strict-mass-order',
      correction:
        'In fact he broke the strict mass rule a few times when chemical behaviour disagreed. Tellurium was placed before iodine, and cobalt before nickel, even though strict mass order would have reversed the pairs.',
      reExplanation:
        "Iodine reacts as a Group 7 halogen, so it had to sit underneath bromine, even though its mass was slightly less than tellurium's. Mendeleev decided behaviour should win over mass, and noted that the atomic masses of those elements might need to be re-measured. The modern atomic-number ordering removes the puzzle: tellurium is element 52 and iodine element 53, so atomic number agrees with the chemistry.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
