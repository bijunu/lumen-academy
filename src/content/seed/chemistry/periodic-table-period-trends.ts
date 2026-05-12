import type { SkillNode } from '@/types/content'

export const periodTrendsMetallicCharacter: SkillNode = {
  id: 'chemistry-periodic-table-period-trends',
  title: 'Period Trends: Metallic Character',
  description:
    'Walk across Period 3 of the periodic table and watch the elements change from shiny reactive metals on the left to coloured non-metals on the right, finishing with argon as a noble gas. See how metallic character falls, how typical ionic charge follows a +1, +2, +3, then 3-, 2-, 1-, 0 pattern, and why atoms shrink in size as you cross a period.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'challenge',
  prerequisites: ['chemistry-periodic-table-electron-shells'],
  curriculum: {
    ks3Objective:
      'Properties across a period (metallic character, reactivity, ionic charge); how position links to properties (qualitative atomic-radius and shielding intuition).',
    awardingBodies: {
      aqa: '4.1.2.3 Metals and non-metals; properties change across a period (8462)',
      edexcel: 'Topic 1.32 Groups and periods; trends across a period (1CH0)',
      ocr: 'C1.2a The periodic table: groups and periods; trends across periods (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-period-trends-scene-period3-strip',
      title: 'Period 3 from Left to Right',
      type: 'labelled-diagram',
      instructions:
        'Click each tile to walk across Period 3 from sodium on the left to argon on the right, and see how the elements change from metals to non-metals.',
      data: {
        viewBox: '0 0 400 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect x="0" y="0" width="400" height="200" fill="#FEF3C7"/><text x="200" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">PERIOD 3: SODIUM TO ARGON</text><g><rect x="20" y="40" width="44" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="42" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Na</text><text x="42" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">sodium</text><text x="42" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">metal</text></g><g><rect x="68" y="40" width="44" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="90" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Mg</text><text x="90" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">magnesium</text><text x="90" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">metal</text></g><g><rect x="116" y="40" width="44" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="138" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Al</text><text x="138" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">aluminium</text><text x="138" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">metal</text></g><g><rect x="164" y="40" width="44" height="60" fill="#FCD34D" stroke="#7F1D1D" stroke-width="1"/><text x="186" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Si</text><text x="186" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">silicon</text><text x="186" y="92" text-anchor="middle" font-size="7" fill="#1E3A8A">metalloid</text></g><g><rect x="212" y="40" width="44" height="60" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="234" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">P</text><text x="234" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">phosphorus</text><text x="234" y="92" text-anchor="middle" font-size="7" fill="#064E3B">non-metal</text></g><g><rect x="260" y="40" width="44" height="60" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="282" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">S</text><text x="282" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">sulfur</text><text x="282" y="92" text-anchor="middle" font-size="7" fill="#064E3B">non-metal</text></g><g><rect x="308" y="40" width="44" height="60" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="330" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Cl</text><text x="330" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">chlorine</text><text x="330" y="92" text-anchor="middle" font-size="7" fill="#064E3B">non-metal</text></g><g><rect x="356" y="40" width="44" height="60" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="378" y="62" text-anchor="middle" font-size="14" fill="#1E3A8A" font-weight="700">Ar</text><text x="378" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">argon</text><text x="378" y="92" text-anchor="middle" font-size="7" fill="#064E3B">noble gas</text></g><g><line x1="20" y1="130" x2="400" y2="130" stroke="#7C2D12" stroke-width="1.5" marker-end="url(#cptArrowR)"/><defs><marker id="cptArrowR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7C2D12"/></marker></defs><text x="200" y="148" text-anchor="middle" font-size="8" fill="#7C2D12" font-weight="600">METALLIC CHARACTER FALLS GOING ACROSS</text></g><g><rect x="20" y="160" width="12" height="12" fill="#FCA5A5"/><text x="38" y="170" font-size="7" fill="#1E3A8A">metal</text><rect x="80" y="160" width="12" height="12" fill="#FCD34D"/><text x="98" y="170" font-size="7" fill="#1E3A8A">metalloid (semi-metal)</text><rect x="200" y="160" width="12" height="12" fill="#FEF3C7" stroke="#475569" stroke-width="0.4"/><text x="218" y="170" font-size="7" fill="#1E3A8A">non-metal</text><rect x="290" y="160" width="12" height="12" fill="#A7F3D0"/><text x="308" y="170" font-size="7" fill="#1E3A8A">noble gas</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-period-trends-h-na',
            x: 10,
            y: 35,
            label: 'Sodium (Na): a soft silver metal',
            description:
              'Sodium is a soft silvery metal that you can cut with a butter knife. Like the alkali metals above it, it is so reactive that the school technician stores it under oil.',
          },
          {
            id: 'cpt-period-trends-h-mg',
            x: 22,
            y: 35,
            label: 'Magnesium (Mg): a lighter metal',
            description:
              'Magnesium is a silvery metal used in fireworks and in lightweight bike frames. It burns with a bright white flame in air. Less reactive than sodium but still clearly a metal.',
          },
          {
            id: 'cpt-period-trends-h-al',
            x: 35,
            y: 35,
            label: 'Aluminium (Al): a familiar metal',
            description:
              'Aluminium is the metal used for drink cans and kitchen foil. Shiny, light and malleable. It is still a metal, even though it sits close to the staircase.',
          },
          {
            id: 'cpt-period-trends-h-si',
            x: 47,
            y: 35,
            label: 'Silicon (Si): the metalloid',
            description:
              'Silicon is a dull grey solid that sits on the staircase line. It has some metal-like properties and some non-metal-like properties, so it is called a metalloid. Used in computer chips.',
          },
          {
            id: 'cpt-period-trends-h-p',
            x: 59,
            y: 35,
            label: 'Phosphorus (P): a non-metal',
            description:
              'Phosphorus is a non-metal that is dull and brittle. The red form is the safer one used on the side of UK matchboxes.',
          },
          {
            id: 'cpt-period-trends-h-s',
            x: 71,
            y: 35,
            label: 'Sulfur (S): a coloured non-metal',
            description:
              'Sulfur is a bright yellow non-metal solid. It is brittle, dull and does not conduct electricity. Sulfur is used to make matches and vulcanised rubber.',
          },
          {
            id: 'cpt-period-trends-h-cl',
            x: 83,
            y: 35,
            label: 'Chlorine (Cl): a reactive non-metal gas',
            description:
              'Chlorine is a pale yellow-green non-metal gas. It is the most reactive non-metal in this period (excluding the noble gas). UK water treatment plants use tiny amounts to keep tap water safe.',
          },
          {
            id: 'cpt-period-trends-h-ar',
            x: 95,
            y: 35,
            label: 'Argon (Ar): the noble gas',
            description:
              'Argon is a colourless noble gas that fills the gap between the two panes of modern UK double-glazed windows. It almost never reacts, so the period finishes calm.',
          },
        ],
      },
    },
    {
      id: 'cpt-period-trends-scene-charges',
      title: 'Typical Ionic Charges Across Period 3',
      type: 'labelled-diagram',
      instructions:
        'Click each tile to see how the typical ionic charge changes as you walk across Period 3, rising to +3 in the middle and then flipping to a negative charge.',
      data: {
        viewBox: '0 0 400 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><rect x="0" y="0" width="400" height="220" fill="#FEF3C7"/><text x="200" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">TYPICAL IONIC CHARGES ACROSS PERIOD 3</text><g><rect x="20" y="40" width="44" height="50" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="42" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Na</text><text x="42" y="78" text-anchor="middle" font-size="9" fill="#7F1D1D" font-weight="700">+1</text></g><g><rect x="68" y="40" width="44" height="50" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="90" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Mg</text><text x="90" y="78" text-anchor="middle" font-size="9" fill="#7F1D1D" font-weight="700">+2</text></g><g><rect x="116" y="40" width="44" height="50" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="138" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Al</text><text x="138" y="78" text-anchor="middle" font-size="9" fill="#7F1D1D" font-weight="700">+3</text></g><g><rect x="164" y="40" width="44" height="50" fill="#FCD34D" stroke="#7F1D1D" stroke-width="1"/><text x="186" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Si</text><text x="186" y="78" text-anchor="middle" font-size="9" fill="#475569" font-weight="700">rarely</text></g><g><rect x="212" y="40" width="44" height="50" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="234" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">P</text><text x="234" y="78" text-anchor="middle" font-size="9" fill="#064E3B" font-weight="700">3-</text></g><g><rect x="260" y="40" width="44" height="50" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="282" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">S</text><text x="282" y="78" text-anchor="middle" font-size="9" fill="#064E3B" font-weight="700">2-</text></g><g><rect x="308" y="40" width="44" height="50" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><text x="330" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Cl</text><text x="330" y="78" text-anchor="middle" font-size="9" fill="#064E3B" font-weight="700">1-</text></g><g><rect x="356" y="40" width="44" height="50" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="378" y="60" text-anchor="middle" font-size="11" fill="#1E3A8A" font-weight="700">Ar</text><text x="378" y="78" text-anchor="middle" font-size="9" fill="#064E3B" font-weight="700">0</text></g><g><text x="42" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">loses 1</text><text x="90" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">loses 2</text><text x="138" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">loses 3</text><text x="186" y="110" text-anchor="middle" font-size="7" fill="#475569">shares</text><text x="234" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">gains 3</text><text x="282" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">gains 2</text><text x="330" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">gains 1</text><text x="378" y="110" text-anchor="middle" font-size="7" fill="#1E3A8A">full shell</text></g><g><rect x="20" y="130" width="180" height="40" fill="#FCA5A5" opacity="0.3" stroke="#7F1D1D" stroke-width="0.6"/><text x="110" y="148" text-anchor="middle" font-size="8" fill="#7F1D1D" font-weight="600">METALS LOSE ELECTRONS</text><text x="110" y="160" text-anchor="middle" font-size="7" fill="#7F1D1D">(positive ions)</text></g><g><rect x="212" y="130" width="140" height="40" fill="#A7F3D0" opacity="0.4" stroke="#064E3B" stroke-width="0.6"/><text x="282" y="148" text-anchor="middle" font-size="8" fill="#064E3B" font-weight="600">NON-METALS GAIN ELECTRONS</text><text x="282" y="160" text-anchor="middle" font-size="7" fill="#064E3B">(negative ions)</text></g><text x="200" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">Pattern: +1, +2, +3, then 3-, 2-, 1-, 0. The middle row is the V-turn.</text><text x="200" y="208" text-anchor="middle" font-size="7" fill="#475569">(KS3 simplified: silicon mostly shares electrons rather than form simple ions.)</text></svg>',
        hotspots: [
          {
            id: 'cpt-period-trends-h-q-metals',
            x: 25,
            y: 70,
            label: 'Metals: lose 1, 2 or 3 electrons',
            description:
              'Sodium loses 1 electron to form Na+. Magnesium loses 2 to form Mg2+. Aluminium loses 3 to form Al3+. The number lost matches the group number on the left side.',
          },
          {
            id: 'cpt-period-trends-h-q-si',
            x: 47,
            y: 30,
            label: 'Silicon: usually shares',
            description:
              'Silicon sits on the staircase and usually shares electrons rather than fully losing or gaining them. At KS3 you can mark it as "shares" rather than +4 or 4-.',
          },
          {
            id: 'cpt-period-trends-h-q-nonmetals',
            x: 72,
            y: 70,
            label: 'Non-metals: gain electrons',
            description:
              'Phosphorus gains 3 electrons to form a 3- ion. Sulfur gains 2 to form a 2- ion. Chlorine gains 1 to form a 1- ion. They are filling up their outer shell.',
          },
          {
            id: 'cpt-period-trends-h-q-pattern',
            x: 50,
            y: 90,
            label: 'The V-turn pattern',
            description:
              'Charges go +1, +2, +3, then flip to 3-, 2-, 1-, 0. Imagine each atom doing the cheapest deal to reach a full outer shell: low groups lose a few, high groups gain a few.',
          },
        ],
      },
    },
    {
      id: 'cpt-period-trends-scene-radius',
      title: 'Atoms Shrink Going Across a Period',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the size of an atom changes from sodium to chlorine, and why the shrinking happens.',
      data: {
        viewBox: '0 0 400 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect x="0" y="0" width="400" height="200" fill="#FEF3C7"/><text x="200" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">ATOMIC RADIUS ACROSS PERIOD 3</text><g><circle cx="50" cy="100" r="32" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="50" cy="100" r="4" fill="#7F1D1D"/><text x="50" y="103" text-anchor="middle" font-size="6" fill="#FFFFFF">11p</text><text x="50" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Na</text></g><g><circle cx="130" cy="100" r="26" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="130" cy="100" r="4" fill="#7F1D1D"/><text x="130" y="103" text-anchor="middle" font-size="6" fill="#FFFFFF">12p</text><text x="130" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Mg</text></g><g><circle cx="210" cy="100" r="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="210" cy="100" r="4" fill="#7F1D1D"/><text x="210" y="103" text-anchor="middle" font-size="6" fill="#FFFFFF">13p</text><text x="210" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Al</text></g><g><circle cx="280" cy="100" r="14" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><circle cx="280" cy="100" r="4" fill="#064E3B"/><text x="280" y="103" text-anchor="middle" font-size="5" fill="#FFFFFF">15p</text><text x="280" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">P</text></g><g><circle cx="340" cy="100" r="11" fill="#FEF3C7" stroke="#064E3B" stroke-width="1"/><circle cx="340" cy="100" r="3" fill="#064E3B"/><text x="340" y="103" text-anchor="middle" font-size="5" fill="#FFFFFF">17p</text><text x="340" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Cl</text></g><g><line x1="20" y1="170" x2="380" y2="170" stroke="#1E3A8A" stroke-width="1.5" marker-end="url(#cptArrowSize)"/><defs><marker id="cptArrowSize" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1E3A8A"/></marker></defs><text x="200" y="188" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="600">ATOMIC RADIUS FALLS ACROSS THE PERIOD</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-period-trends-h-r-na',
            x: 10,
            y: 55,
            label: 'Sodium: 11 protons, largest atom',
            description:
              'A sodium atom has 11 protons pulling on its outer electrons in the third shell. The pull is mild, so the atom sits at its largest size in Period 3.',
          },
          {
            id: 'cpt-period-trends-h-r-cl',
            x: 85,
            y: 55,
            label: 'Chlorine: 17 protons, smallest atom',
            description:
              'A chlorine atom has 17 protons pulling on its outer electrons, also in the third shell. The bigger nuclear charge pulls the shell in tightly, so the atom is much smaller than sodium.',
          },
          {
            id: 'cpt-period-trends-h-r-shell',
            x: 50,
            y: 30,
            label: 'Same shell, more protons',
            description:
              'Every Period 3 element uses the same outer shell (shell number 3). What changes across the period is how many protons sit in the nucleus, from 11 to 17. More protons pull the shell in harder, so the atom shrinks.',
          },
          {
            id: 'cpt-period-trends-h-r-rule',
            x: 50,
            y: 90,
            label: 'The rule for the period',
            description:
              'Going left to right across any period, atomic radius falls. It is the opposite trend to a group, where atoms grow larger going down because they pick up an extra shell.',
          },
        ],
      },
    },
    {
      id: 'cpt-period-trends-scene-uk-uses',
      title: 'Period 3 in Real UK Life',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how Period 3 elements show up in everyday UK contexts, from drink cans to swimming pools.',
      data: {
        viewBox: '0 0 400 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect x="0" y="0" width="400" height="200" fill="#FEF3C7"/><text x="200" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">PERIOD 3 IN EVERYDAY UK LIFE</text><g><rect x="20" y="50" width="80" height="120" fill="#F1F5F9" stroke="#475569" stroke-width="1"/><text x="60" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">Al</text><rect x="40" y="85" width="40" height="60" rx="6" fill="#94A3B8" stroke="#475569"/><text x="60" y="120" text-anchor="middle" font-size="6" fill="#FFFFFF">CAN</text><text x="60" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">aluminium can</text></g><g><rect x="110" y="50" width="80" height="120" fill="#F1F5F9" stroke="#475569" stroke-width="1"/><text x="150" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">Na</text><circle cx="150" cy="115" r="22" fill="#FCD34D" stroke="#7C2D12"/><text x="150" y="118" text-anchor="middle" font-size="6" fill="#7C2D12">yellow</text><text x="150" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">sodium street lamp</text></g><g><rect x="200" y="50" width="80" height="120" fill="#F1F5F9" stroke="#475569" stroke-width="1"/><text x="240" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">S</text><rect x="220" y="85" width="40" height="50" fill="#FCD34D" stroke="#7C2D12"/><text x="240" y="115" text-anchor="middle" font-size="6" fill="#7C2D12">match</text><text x="240" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">sulfur in match head</text></g><g><rect x="290" y="50" width="90" height="120" fill="#F1F5F9" stroke="#475569" stroke-width="1"/><text x="335" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">Cl</text><ellipse cx="335" cy="120" rx="32" ry="14" fill="#BFDBFE" stroke="#1E3A8A"/><text x="335" y="123" text-anchor="middle" font-size="6" fill="#1E3A8A">pool</text><text x="335" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">chlorine in pool water</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-period-trends-h-u-al',
            x: 15,
            y: 55,
            label: 'Aluminium: drinks cans',
            description:
              'Aluminium is the metal used for soft-drink cans across the UK. Light, malleable, recyclable. It is still a metal even though it sits close to the metalloid line.',
          },
          {
            id: 'cpt-period-trends-h-u-na',
            x: 38,
            y: 55,
            label: 'Sodium: older street lamps',
            description:
              'Older UK street lamps were sodium-vapour lamps that glowed a deep yellow-orange when an electric current passed through sodium gas. Many councils are now swapping them for LED.',
          },
          {
            id: 'cpt-period-trends-h-u-s',
            x: 60,
            y: 55,
            label: 'Sulfur: match heads',
            description:
              'Sulfur sits in the head of a standard UK safety match. It catches fire at a low temperature, which is why matches strike so easily.',
          },
          {
            id: 'cpt-period-trends-h-u-cl',
            x: 84,
            y: 55,
            label: 'Chlorine: swimming-pool water',
            description:
              'A tiny dose of chlorine in UK swimming-pool water kills bacteria and keeps the pool safe. Even at non-metal status, chlorine is reactive enough to do the job.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-period-trends-worked-1',
      title: 'Predicting the typical ionic charge of magnesium and chlorine',
      steps: [
        {
          explanation:
            'Question: magnesium (Mg) is in Group 2 of the periodic table. Chlorine (Cl) is in Group 7. Predict the typical ionic charge of each.',
        },
        {
          explanation:
            'Step 1: identify the metal or non-metal. Magnesium sits on the left of the staircase, so it is a metal. Chlorine sits on the right, so it is a non-metal.',
          maths: 'Mg: metal. Cl: non-metal.',
        },
        {
          explanation:
            'Step 2: apply the rule. A Group 2 metal has 2 outer electrons, so it loses 2 electrons to reach a full outer shell. That gives a 2+ ion.',
          maths: 'Mg → Mg2+ (loses 2 electrons)',
        },
        {
          explanation:
            'Step 3: apply the rule for the non-metal. A Group 7 non-metal already has 7 outer electrons, so it only needs to gain 1 electron to reach a full outer shell. That gives a 1- ion.',
          maths: 'Cl → Cl- (gains 1 electron)',
        },
        {
          explanation:
            'So the typical ions are Mg2+ and Cl-. Notice how the metal forms a positive ion and the non-metal forms a negative ion. The two opposite charges then attract to make the salt magnesium chloride.',
        },
      ],
    },
    {
      id: 'cpt-period-trends-worked-2',
      title: 'Walking across Period 3 from metal to non-metal',
      steps: [
        {
          explanation:
            'Question: Yusuf claims that Period 3 is all metals because sodium and magnesium are metals. Use the trend in metallic character to show why he is wrong.',
        },
        {
          explanation:
            'Step 1: write down where the metals sit. Metals sit on the left of the staircase line. In Period 3 that gives sodium, magnesium and aluminium as metals.',
          maths: 'Period 3 metals: Na, Mg, Al',
        },
        {
          explanation:
            'Step 2: identify the staircase boundary. Silicon sits right on the staircase as a metalloid. To the right of silicon the elements turn into non-metals.',
          maths: 'Si: metalloid (the boundary)',
        },
        {
          explanation:
            'Step 3: list the non-metals on the right. Phosphorus, sulfur and chlorine are all non-metals. Argon, at the very end, is a noble gas.',
          maths: 'Period 3 non-metals: P, S, Cl. Noble gas: Ar.',
        },
        {
          explanation:
            'Step 4: count metals vs non-metals in Period 3. There are 3 metals (Na, Mg, Al), 1 metalloid (Si), 3 non-metals (P, S, Cl) and 1 noble gas (Ar).',
          maths: '3 metals + 1 metalloid + 3 non-metals + 1 noble gas = 8 elements',
        },
        {
          explanation:
            'So Yusuf is wrong. Metallic character falls across the period. The row starts as metals, passes through silicon as a metalloid, and finishes as non-metals plus argon. Only 3 of the 8 elements in Period 3 are metals.',
        },
      ],
    },
    {
      id: 'cpt-period-trends-worked-3',
      title: 'Why atoms shrink across a period',
      steps: [
        {
          explanation:
            'Question: a sodium atom is much wider than a chlorine atom, even though both sit in Period 3. Use protons and shells to explain why.',
        },
        {
          explanation:
            'Step 1: count the protons. Sodium has atomic number 11, so 11 protons in the nucleus. Chlorine has atomic number 17, so 17 protons.',
          maths: 'Na: 11 protons. Cl: 17 protons.',
        },
        {
          explanation:
            'Step 2: note the outer shell. Both atoms place their outer electrons in shell number 3 (the third shell out from the nucleus). Going across a period the shell number does not change.',
          maths: 'Na and Cl: both use shell 3 for outer electrons',
        },
        {
          explanation:
            'Step 3: compare the pull. The chlorine nucleus, with 17 protons, pulls on its outer electrons harder than a sodium nucleus with only 11 protons. A stronger pull squeezes the outer shell in closer to the nucleus.',
          maths: '17p pull > 11p pull → smaller atom',
        },
        {
          explanation:
            'So chlorine ends up smaller than sodium. The rule across any period is the same: same shell, more protons, smaller atom. Atomic radius falls going left to right.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-period-trends-q1',
      type: 'multiple-choice',
      stem: 'Walking across Period 3 from sodium on the left to argon on the right, how does metallic character change?',
      tier: 'core',
      options: [
        'Metallic character rises across the period',
        'Metallic character falls across the period',
        'Metallic character stays the same across the period',
        'Every element in Period 3 is a metal',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-period-trends-mis-period-vs-group-trend',
    },
    {
      id: 'cpt-period-trends-q2',
      type: 'multiple-choice',
      stem: 'Which of the following Period 3 elements is a non-metal?',
      tier: 'core',
      options: ['Sodium', 'Magnesium', 'Aluminium', 'Sulfur'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cpt-period-trends-mis-al-nonmetal',
    },
    {
      id: 'cpt-period-trends-q3',
      type: 'multiple-choice',
      stem: 'Which of these Period 3 elements is a metalloid (sometimes called a semi-metal)?',
      tier: 'core',
      options: ['Silicon', 'Magnesium', 'Phosphorus', 'Argon'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'cpt-period-trends-q4',
      type: 'numeric-entry',
      stem: 'How many of the eight elements in Period 3 (Na, Mg, Al, Si, P, S, Cl, Ar) are metals? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The metals sit on the left of the staircase line: sodium, magnesium and aluminium.',
    },
    {
      id: 'cpt-period-trends-q5',
      type: 'numeric-entry',
      stem: 'How many elements sit in Period 3 of the periodic table, counting from sodium to argon inclusive? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Count along: Na, Mg, Al, Si, P, S, Cl, Ar.',
    },
    {
      id: 'cpt-period-trends-q6',
      type: 'multiple-choice',
      stem: 'Magnesium (Mg) is in Group 2 of the periodic table. What is its typical ionic charge?',
      tier: 'core',
      options: ['1+', '2+', '2-', '3+'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-period-trends-mis-charge-equals-group',
    },
    {
      id: 'cpt-period-trends-q7',
      type: 'numeric-entry',
      stem: 'Period 2 runs from lithium (Li) to neon (Ne). Counting from the left, how many of the elements in Period 2 are metals (lithium, beryllium, boron, carbon, nitrogen, oxygen, fluorine, neon)? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Only lithium and beryllium sit on the left of the staircase in Period 2. Boron is a metalloid.',
    },
    {
      id: 'cpt-period-trends-q8',
      type: 'multiple-choice',
      stem: 'Aluminium (Al) is in Group 3. Which is the typical ionic charge of aluminium when it forms an ion?',
      tier: 'confident',
      options: ['1+', '2+', '3+', '3-'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpt-period-trends-mis-charge-equals-group',
    },
    {
      id: 'cpt-period-trends-q9',
      type: 'multiple-choice',
      stem: 'Sulfur (S) is in Group 6 of the periodic table. What is the typical ionic charge of sulfur?',
      tier: 'confident',
      options: ['6+', '2+', '2-', '6-'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpt-period-trends-mis-charge-equals-group',
    },
    {
      id: 'cpt-period-trends-q10',
      type: 'numeric-entry',
      stem: 'Phosphorus (P) is in Group 5. To reach a full outer shell, how many electrons does a phosphorus atom need to gain? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'A full outer shell holds 8 electrons. Group 5 already has 5 outer electrons, so it needs 3 more.',
    },
    {
      id: 'cpt-period-trends-q11',
      type: 'drag-order',
      stem: 'Place these Period 3 elements in order of position from LEFT to RIGHT across the periodic table.',
      tier: 'confident',
      items: ['Argon', 'Aluminium', 'Sodium', 'Sulfur'],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
    },
    {
      id: 'cpt-period-trends-q12',
      type: 'spot-misconception',
      stem: 'A pupil says: "All the elements in Period 3 have the same number of electrons in their outer shell, because they are in the same period."',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. A period means the same number of outer electrons.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Elements in the same period use the same outer shell, but the number of outer electrons rises from 1 in sodium to 8 in argon. Same outer-electron count is a GROUP feature, not a period feature.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-period-trends-mis-period-same-outer-electrons',
    },
    {
      id: 'cpt-period-trends-q13',
      type: 'free-text',
      stem: 'In one sentence, describe how atomic radius (the size of an atom) changes as you walk across Period 3 from sodium to chlorine.',
      tier: 'confident',
      sampleAnswer:
        'Atomic radius falls going across Period 3 from sodium to chlorine, because the number of protons in the nucleus rises while the outer shell stays the same, so the nucleus pulls the outer electrons in more tightly.',
      keywords: ['falls', 'smaller', 'protons', 'shell'],
      xpValue: 15,
      hint: 'Same outer shell, more protons in the nucleus. Which way does that pull the outer electrons?',
    },
    {
      id: 'cpt-period-trends-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: predict the typical ionic charge of chlorine.',
      tier: 'challenge',
      steps: [
        'Chlorine sits in Group 7 of the periodic table on the right of the staircase, so it is a non-metal.',
        'Non-metals gain electrons to reach a full outer shell of 8 electrons.',
        null,
        'So chlorine forms an ion with a charge of 1-.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A chlorine atom already has 7 outer electrons (matching its group number), so it only needs to gain 1 electron to reach a full outer shell.',
      xpValue: 20,
    },
    {
      id: 'cpt-period-trends-q15',
      type: 'drag-order',
      stem: 'Place these three Period 3 metals in order of REACTIVITY with cold water, from MOST reactive at the top to LEAST reactive at the bottom.',
      tier: 'confident',
      items: ['Magnesium', 'Aluminium', 'Sodium'],
      correctOrder: [2, 0, 1],
      xpValue: 15,
      hint: 'Metallic reactivity falls going across a period. Sodium is on the far left.',
    },
    {
      id: 'cpt-period-trends-q16',
      type: 'multiple-choice',
      stem: 'Which Period 3 element is silvery, lightweight, malleable and used to make UK drink cans?',
      tier: 'core',
      options: ['Phosphorus', 'Silicon', 'Aluminium', 'Sulfur'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-period-trends-mis-al-nonmetal',
    },
    {
      id: 'cpt-period-trends-q17',
      type: 'spot-misconception',
      stem: 'A pupil writes: "In Group 1 reactivity rises going down, so in every group reactivity must rise going down the column."',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. The Group 1 trend applies to every group.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Reactivity rises going down Group 1 (the alkali metals), but reactivity FALLS going down Group 7 (the halogens). Metals and non-metals follow opposite trends down their groups.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-period-trends-mis-group-trend-universal',
    },
    {
      id: 'cpt-period-trends-q18',
      type: 'numeric-entry',
      stem: 'A sodium ion (Na+) and a magnesium ion (Mg2+) sit side by side. The charge on Mg2+ is what whole-number multiple of the charge on Na+? Give your answer as a single number.',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 25,
      hint: 'Na+ has charge +1; Mg2+ has charge +2. How many times bigger is +2 than +1?',
    },
    {
      id: 'cpt-period-trends-q19',
      type: 'multiple-choice',
      stem: 'A textbook claims that walking across Period 3 the elements change from shiny silver solids on the left to a coloured gas, then end with a colourless gas. Which option matches this description?',
      tier: 'challenge',
      options: [
        'Na shiny silver → Cl pale yellow-green gas → Ar colourless gas',
        'Na colourless gas → Cl shiny silver → Ar red-brown liquid',
        'All eight elements are shiny silver solids in Period 3',
        'Na shiny silver → Cl colourless gas → Ar pale yellow-green gas',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    {
      id: 'cpt-period-trends-q20',
      type: 'multiple-choice',
      stem: 'A teacher in Cambridge writes a quick rule on the whiteboard: "across a period, ionic charge rises +1, +2, +3, then flips to 3-, 2-, 1- and finishes at 0." Using this rule, what is the typical charge on a phosphorus ion?',
      tier: 'challenge',
      options: ['1-', '2-', '3-', '5+'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-period-trends-mis-charge-equals-group',
    },
    {
      id: 'cpt-period-trends-q21',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil in Bristol says: "Magnesium is to the left of chlorine in Period 3, so a magnesium atom must be smaller than a chlorine atom, because elements on the left of the table are smaller." Why is this reasoning wrong?',
      tier: 'challenge',
      options: [
        'The pupil has the trend back to front. Atomic radius FALLS going across a period from left to right, so magnesium is actually LARGER than chlorine.',
        'The reasoning is correct. Magnesium is smaller than chlorine.',
        'Magnesium and chlorine are the same size because they share Period 3.',
        'Atoms have no measurable size, so the question makes no sense.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cpt-period-trends-mis-radius-direction',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on the periodic table: candidates "regularly stated that all elements in the same period have the same number of outer-shell electrons", confusing a period (same shell number) with a group (same number of outer electrons). Reinforced by CGP KS3 Chemistry Study Book p.48 Common Mistake on periods vs groups.
    {
      id: 'cpt-period-trends-mis-period-same-outer-electrons',
      description:
        'All elements in the same period have the same number of outer-shell electrons.',
      triggerAnswer: 'period-same-outer-electrons',
      correction:
        'In fact same outer-electron count is a GROUP feature. Across a period the outer electrons rise from 1 to 8.',
      reExplanation:
        'Walk across Period 3 and count outer electrons: sodium has 1, magnesium 2, aluminium 3, silicon 4, phosphorus 5, sulfur 6, chlorine 7, argon 8. What stays the same across a period is the SHELL number (they all use shell 3 as the outer shell). Same number of outer electrons is the rule for a vertical column (a group), not for a horizontal row (a period).',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q05 on metals and non-metals: candidates "placed aluminium on the right of the staircase, marking it as a non-metal", apparently because aluminium feels light to handle. Reinforced by CGP KS3 Chemistry Study Book p.50 Common Mistake box on metals near the staircase.
    {
      id: 'cpt-period-trends-mis-al-nonmetal',
      description:
        'Aluminium is a non-metal because it is light and silvery, not heavy and dull.',
      triggerAnswer: 'al-nonmetal',
      correction:
        'In fact aluminium is a metal. Being light is not part of the metal definition.',
      reExplanation:
        'Pick up a drinks can. Aluminium is shiny when freshly cut, conducts electricity, is malleable enough to roll into kitchen foil and gets used for bike frames. All those are metal properties. Mass per atom is set by atomic number, not by whether an element is metal or non-metal. Aluminium sits to the left of the staircase in Period 3, in Group 3, comfortably inside the metal block.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on ionic charges: candidates "always equated ionic charge to group number, writing P 5+ for phosphorus instead of 3-." Reinforced by RSC Education "Misconceptions in chemistry" article on group number vs ionic charge (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-period-trends-mis-charge-equals-group',
      description:
        'The ionic charge of every element is the same number as its group number, with a plus sign.',
      triggerAnswer: 'charge-equals-group',
      correction:
        'In fact metals lose electrons to form positive ions equal to the group number, but non-metals gain electrons to form negative ions equal to (8 minus group number).',
      reExplanation:
        'Treat metals and non-metals separately. Sodium (Group 1, metal) loses 1 electron, giving Na+. Magnesium (Group 2) gives Mg2+. Aluminium (Group 3) gives Al3+. Now flip for non-metals: phosphorus (Group 5) gains 3 electrons to reach a full outer shell, giving P3-. Sulfur (Group 6) gives S2-. Chlorine (Group 7) gives Cl-. The charge sign and number depend on which side of the staircase the element sits.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q08 on atomic radius: candidates "claimed atomic radius rises going across a period because there are more electrons", missing that the extra protons pull the same shell in more tightly. Reinforced by CGP KS3 Chemistry Study Book p.49 stretch box on atom size.
    {
      id: 'cpt-period-trends-mis-radius-direction',
      description:
        'Atomic radius rises going across a period from left to right, because the atom picks up more electrons.',
      triggerAnswer: 'radius-direction',
      correction:
        'In fact atomic radius FALLS going across a period. The extra protons pull the same outer shell in tighter.',
      reExplanation:
        'Sketch sodium and chlorine side by side. Both place their outer electrons in shell 3. Sodium has 11 protons in the nucleus; chlorine has 17. More protons pull the outer shell in more strongly, so chlorine is a smaller atom than sodium. Adding more electrons does not push the atom outwards, because the extra protons that come with them pull harder. The rule across a period: same shell, more protons, smaller atom.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q06 on metal-non-metal layout: candidates "marked metals on the right side of the staircase, swapping the two sides." Reinforced by CGP KS3 Chemistry Study Book p.50 Common Mistake on metals on the left of the table.
    {
      id: 'cpt-period-trends-mis-metals-on-right',
      description:
        'Metals sit on the right of the periodic table and non-metals on the left.',
      triggerAnswer: 'metals-on-right',
      correction:
        'In fact metals sit on the LEFT and middle of the periodic table, and non-metals on the right.',
      reExplanation:
        'Most of the table (about 80 elements) is metal. The staircase line runs down the right side of the table; everything to its left is metal, everything above and to the right is non-metal. In Period 3 the metals are sodium, magnesium and aluminium on the left; the non-metals are phosphorus, sulfur and chlorine on the right. Silicon sits on the staircase as a metalloid.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q09 on group trends: candidates "applied the Group 1 trend (reactivity rises going down) to every group of the periodic table, including the halogens." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on group reactivity.
    {
      id: 'cpt-period-trends-mis-group-trend-universal',
      description:
        'Reactivity always rises going down a group, for every group of the periodic table.',
      triggerAnswer: 'group-trend-universal',
      correction:
        'In fact reactivity rises going down Group 1 (alkali metals) but FALLS going down Group 7 (halogens). The two groups follow opposite trends.',
      reExplanation:
        'Picture both columns. In Group 1, sodium reacts more strongly than lithium, and potassium more strongly than sodium. Reactivity builds going down. Now Group 7: chlorine is a reactive yellow-green gas, bromine a less reactive red-brown liquid, iodine an even less reactive grey solid. Reactivity calms going down. Metals lose electrons more easily lower down a group; non-metals gain electrons less easily lower down a group.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q08 on trends across a period: candidates "claimed reactivity rises smoothly all the way across the period from sodium to argon, ignoring the dip at the noble gas." Reinforced by CGP KS3 Chemistry Study Book p.51 stretch box.
    {
      id: 'cpt-period-trends-mis-period-vs-group-trend',
      description:
        'Reactivity rises smoothly all the way across a period, from sodium to argon.',
      triggerAnswer: 'period-vs-group-trend',
      correction:
        'In fact metallic reactivity falls across the period (Na > Mg > Al), then non-metallic reactivity rises towards chlorine, and finally drops to zero at the noble gas argon.',
      reExplanation:
        'Split the period into two halves. Left side (metals): sodium is the most reactive metal, magnesium less so, aluminium least. Right side (non-metals): phosphorus is less reactive, sulfur a bit more, chlorine most reactive of the non-metals. At the very end argon, a noble gas, almost never reacts. So the pattern is not one smooth rise; it is a fall, then a rise, then a sudden drop at Group 0.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
