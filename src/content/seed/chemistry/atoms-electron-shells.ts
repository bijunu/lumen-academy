import type { SkillNode } from '@/types/content'

export const electronShellsArrangement: SkillNode = {
  id: 'chemistry-atoms-electron-shells',
  title: 'Electron Shells and Arrangement',
  description:
    'Electrons sit in shells around the nucleus, not at random. The first shell holds up to 2 electrons; the second and third shells each hold up to 8 (the 2, 8, 8 rule that Year 7 chemists use for the first 20 elements). Build electron configurations from H to Ca, link the outer-shell count to the group number and the number of shells used to the period number, and use these patterns to predict why noble gases are unreactive while group 1 and group 7 elements are not.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-protons-neutrons-electrons'],
  curriculum: {
    ks3Objective:
      'Electrons arranged in shells around the nucleus; the 2, 8, 8 rule for the first three shells; electron configuration for elements up to calcium (Ca, Z=20).',
    awardingBodies: {
      aqa: '4.1.1.1 Atoms: electron shells and arrangement; first 20 elements (8462)',
      edexcel: 'Topic 1.3 Electron structure and the periodic table; electron arrangement in shells (1CH0)',
      ocr: 'C1.1b Electron structure and electron arrangements in shells (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-shells-scene-1',
      title: 'Three Shells Around the Nucleus',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the shell picture to read what a shell is, what the central nucleus holds, and the rule that limits how many electrons each shell will take.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><circle cx="160" cy="110" r="86" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="160" cy="110" r="58" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="160" cy="110" r="30" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 3"/><circle cx="160" cy="110" r="14" fill="#1E3A8A" stroke="#0F172A" stroke-width="1"/><text x="160" y="113" text-anchor="middle" font-size="8" fill="#FBBF24" font-weight="600">nucleus</text><text x="160" y="32" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">2, 8, 8 RULE (shells 1, 2, 3)</text><circle cx="135" cy="92" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="185" cy="92" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><text x="194" y="68" font-size="7" fill="#1E3A8A">shell 1: max 2</text><circle cx="120" cy="70" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="200" cy="70" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="216" cy="110" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="104" cy="110" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><text x="216" y="170" font-size="7" fill="#1E3A8A">shell 2: max 8</text><circle cx="90" cy="55" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="230" cy="55" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="246" cy="110" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="74" cy="110" r="4" fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"/><text x="220" y="200" font-size="7" fill="#1E3A8A">shell 3: max 8 (at KS3)</text></svg>',
        hotspots: [
          {
            id: 'cae-shells-h-nucleus',
            x: 50,
            y: 50,
            label: 'The nucleus is at the centre',
            description:
              'The nucleus is tiny but holds nearly all the mass of the atom. It contains the protons and neutrons. Electrons move in shells around it.',
          },
          {
            id: 'cae-shells-h-shell1',
            x: 50,
            y: 30,
            label: 'Shell 1 takes a maximum of 2 electrons',
            description:
              'The first shell is closest to the nucleus. It is small and fills first. Once it has 2 electrons it is full and any further electrons must start the next shell.',
          },
          {
            id: 'cae-shells-h-shell2',
            x: 70,
            y: 60,
            label: 'Shell 2 takes a maximum of 8 electrons',
            description:
              'The second shell sits further out. Electrons keep adding to it until 8 have been placed; then it too is full.',
          },
          {
            id: 'cae-shells-h-shell3',
            x: 80,
            y: 90,
            label: 'Shell 3 takes 8 electrons at Year 7',
            description:
              'At KS3 we use the simple 2, 8, 8 rule. (The true rule for shell 3 can extend to 18, but Year 7 chemistry stops at 8 for elements up to calcium.)',
          },
        ],
      },
    },
    {
      id: 'cae-shells-scene-2',
      title: 'Filling Up: Hydrogen Through Neon',
      type: 'labelled-diagram',
      instructions:
        'Click each atom to see how electrons fill the lowest shell first, then start the next one once the inner shell is full.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><text x="160" y="20" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">FILL THE LOWEST SHELL FIRST</text><g><circle cx="50" cy="70" r="22" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="50" cy="70" r="6" fill="#1E3A8A"/><circle cx="50" cy="48" r="3" fill="#3B82F6"/><text x="50" y="105" text-anchor="middle" font-size="8" fill="#1E3A8A">H (Z=1)</text><text x="50" y="116" text-anchor="middle" font-size="7" fill="#475569">1</text></g><g><circle cx="120" cy="70" r="22" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="120" cy="70" r="6" fill="#1E3A8A"/><circle cx="120" cy="48" r="3" fill="#3B82F6"/><circle cx="120" cy="92" r="3" fill="#3B82F6"/><text x="120" y="120" text-anchor="middle" font-size="8" fill="#1E3A8A">He (Z=2)</text><text x="120" y="131" text-anchor="middle" font-size="7" fill="#475569">2</text></g><g><circle cx="200" cy="70" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="200" cy="70" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="200" cy="70" r="6" fill="#1E3A8A"/><circle cx="200" cy="52" r="3" fill="#3B82F6"/><circle cx="200" cy="88" r="3" fill="#3B82F6"/><circle cx="200" cy="32" r="3" fill="#3B82F6"/><text x="200" y="135" text-anchor="middle" font-size="8" fill="#1E3A8A">Li (Z=3)</text><text x="200" y="146" text-anchor="middle" font-size="7" fill="#475569">2, 1</text></g><g><circle cx="275" cy="70" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="275" cy="70" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="275" cy="70" r="6" fill="#1E3A8A"/><circle cx="275" cy="52" r="3" fill="#3B82F6"/><circle cx="275" cy="88" r="3" fill="#3B82F6"/><circle cx="275" cy="32" r="3" fill="#3B82F6"/><circle cx="305" cy="70" r="3" fill="#3B82F6"/><circle cx="245" cy="70" r="3" fill="#3B82F6"/><circle cx="295" cy="48" r="3" fill="#3B82F6"/><circle cx="295" cy="92" r="3" fill="#3B82F6"/><text x="275" y="135" text-anchor="middle" font-size="8" fill="#1E3A8A">C (Z=6)</text><text x="275" y="146" text-anchor="middle" font-size="7" fill="#475569">2, 4</text></g><g><circle cx="160" cy="180" r="20" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="160" cy="180" r="6" fill="#1E3A8A"/><circle cx="160" cy="165" r="2.5" fill="#3B82F6"/><circle cx="160" cy="195" r="2.5" fill="#3B82F6"/><text x="220" y="180" font-size="8" fill="#1E3A8A">Ne (Z=10): 2, 8 (both shells full)</text></g></svg>',
        hotspots: [
          {
            id: 'cae-shells-h-h',
            x: 16,
            y: 40,
            label: 'Hydrogen (Z=1): 1',
            description:
              'A hydrogen atom has 1 proton and 1 electron. The one electron sits in shell 1. Configuration: 1.',
          },
          {
            id: 'cae-shells-h-he',
            x: 38,
            y: 40,
            label: 'Helium (Z=2): 2',
            description:
              'Helium has 2 electrons, which fill shell 1. With a full shell 1 helium is chemically unreactive, a noble gas in group 0/8.',
          },
          {
            id: 'cae-shells-h-li',
            x: 62,
            y: 40,
            label: 'Lithium (Z=3): 2, 1',
            description:
              'Shell 1 only holds 2 electrons. The third electron has to start shell 2, giving lithium its 2, 1 configuration and putting it in group 1.',
          },
          {
            id: 'cae-shells-h-c',
            x: 86,
            y: 40,
            label: 'Carbon (Z=6): 2, 4',
            description:
              'Carbon has 6 electrons. The first 2 fill shell 1, the remaining 4 sit in shell 2, giving 2, 4. The 4 outer electrons place carbon in group 4.',
          },
          {
            id: 'cae-shells-h-ne',
            x: 50,
            y: 85,
            label: 'Neon (Z=10): 2, 8',
            description:
              'Neon has 10 electrons. The first shell holds 2, the second shell holds 8. Both shells are full, so neon is a noble gas in group 0/8.',
          },
        ],
      },
    },
    {
      id: 'cae-shells-scene-3',
      title: 'Outer Shell, Group and Period',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the periodic-table strip to see how the configuration of an atom tells you its group and its period at a glance.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><text x="160" y="20" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">FIRST 20 ELEMENTS: CONFIGURATION TO GROUP AND PERIOD</text><g font-size="7" fill="#1E3A8A"><rect x="20" y="40" width="30" height="30" fill="#FECACA" stroke="#7F1D1D" stroke-width="0.6"/><text x="35" y="55" text-anchor="middle" font-weight="600">H</text><text x="35" y="65" text-anchor="middle">1</text><rect x="260" y="40" width="30" height="30" fill="#FDE68A" stroke="#92400E" stroke-width="0.6"/><text x="275" y="55" text-anchor="middle" font-weight="600">He</text><text x="275" y="65" text-anchor="middle">2</text></g><g font-size="7" fill="#1E3A8A"><rect x="20" y="80" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="35" y="95" text-anchor="middle" font-weight="600">Li</text><text x="35" y="105" text-anchor="middle">2,1</text><rect x="50" y="80" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="65" y="95" text-anchor="middle" font-weight="600">Be</text><text x="65" y="105" text-anchor="middle">2,2</text><rect x="170" y="80" width="30" height="30" fill="#FBCFE8" stroke="#831843" stroke-width="0.6"/><text x="185" y="95" text-anchor="middle" font-weight="600">N</text><text x="185" y="105" text-anchor="middle">2,5</text><rect x="200" y="80" width="30" height="30" fill="#FBCFE8" stroke="#831843" stroke-width="0.6"/><text x="215" y="95" text-anchor="middle" font-weight="600">O</text><text x="215" y="105" text-anchor="middle">2,6</text><rect x="230" y="80" width="30" height="30" fill="#FBCFE8" stroke="#831843" stroke-width="0.6"/><text x="245" y="95" text-anchor="middle" font-weight="600">F</text><text x="245" y="105" text-anchor="middle">2,7</text><rect x="260" y="80" width="30" height="30" fill="#FDE68A" stroke="#92400E" stroke-width="0.6"/><text x="275" y="95" text-anchor="middle" font-weight="600">Ne</text><text x="275" y="105" text-anchor="middle">2,8</text></g><g font-size="7" fill="#1E3A8A"><rect x="20" y="120" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="35" y="135" text-anchor="middle" font-weight="600">Na</text><text x="35" y="145" text-anchor="middle">2,8,1</text><rect x="50" y="120" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="65" y="135" text-anchor="middle" font-weight="600">Mg</text><text x="65" y="145" text-anchor="middle">2,8,2</text><rect x="200" y="120" width="30" height="30" fill="#FBCFE8" stroke="#831843" stroke-width="0.6"/><text x="215" y="135" text-anchor="middle" font-weight="600">S</text><text x="215" y="145" text-anchor="middle">2,8,6</text><rect x="230" y="120" width="30" height="30" fill="#FBCFE8" stroke="#831843" stroke-width="0.6"/><text x="245" y="135" text-anchor="middle" font-weight="600">Cl</text><text x="245" y="145" text-anchor="middle">2,8,7</text><rect x="260" y="120" width="30" height="30" fill="#FDE68A" stroke="#92400E" stroke-width="0.6"/><text x="275" y="135" text-anchor="middle" font-weight="600">Ar</text><text x="275" y="145" text-anchor="middle">2,8,8</text></g><g font-size="7" fill="#1E3A8A"><rect x="20" y="160" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="35" y="175" text-anchor="middle" font-weight="600">K</text><text x="35" y="185" text-anchor="middle">2,8,8,1</text><rect x="50" y="160" width="30" height="30" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="65" y="175" text-anchor="middle" font-weight="600">Ca</text><text x="65" y="185" text-anchor="middle">2,8,8,2</text></g><text x="15" y="55" text-anchor="end" font-size="7" fill="#475569">P1</text><text x="15" y="95" text-anchor="end" font-size="7" fill="#475569">P2</text><text x="15" y="135" text-anchor="end" font-size="7" fill="#475569">P3</text><text x="15" y="175" text-anchor="end" font-size="7" fill="#475569">P4</text><text x="35" y="210" text-anchor="middle" font-size="7" fill="#475569">G1</text><text x="65" y="210" text-anchor="middle" font-size="7" fill="#475569">G2</text><text x="245" y="210" text-anchor="middle" font-size="7" fill="#475569">G7</text><text x="275" y="210" text-anchor="middle" font-size="7" fill="#475569">G0/8</text></svg>',
        hotspots: [
          {
            id: 'cae-shells-h-group-pattern',
            x: 20,
            y: 60,
            label: 'Outer-shell count equals group number',
            description:
              'Lithium (2, 1), sodium (2, 8, 1) and potassium (2, 8, 8, 1) all have 1 outer electron, so they sit in group 1. The number of electrons in the last shell tells you the group.',
          },
          {
            id: 'cae-shells-h-period-pattern',
            x: 12,
            y: 80,
            label: 'Number of shells equals period number',
            description:
              'Lithium uses 2 shells and sits in period 2. Sodium uses 3 shells and sits in period 3. Potassium uses 4 shells and sits in period 4.',
          },
          {
            id: 'cae-shells-h-noble',
            x: 85,
            y: 55,
            label: 'Group 0/8: full outer shell, very stable',
            description:
              'Helium (2), neon (2, 8) and argon (2, 8, 8) all have full outer shells. A full outer shell is very stable, so these noble gases rarely react with anything.',
          },
          {
            id: 'cae-shells-h-group7',
            x: 75,
            y: 38,
            label: 'Group 7: one short of full, very reactive',
            description:
              'Fluorine (2, 7) and chlorine (2, 8, 7) each have 7 outer electrons. They are one electron short of a full shell, so they readily gain one. Group 7 elements are highly reactive.',
          },
        ],
      },
    },
    {
      id: 'cae-shells-scene-4',
      title: 'GCSE Periodic Table on the Lab Wall',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the school lab scene to see what a Year 7 chemist can read straight from the wall chart using only the atomic number and the 2, 8, 8 rule.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#E0E7FF"/><rect x="0" y="180" width="320" height="40" fill="#A78BFA" opacity="0.2"/><rect x="30" y="30" width="260" height="140" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.2"/><text x="160" y="48" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">PERIODIC TABLE</text><g font-size="7" fill="#1E3A8A"><rect x="45" y="58" width="22" height="22" fill="#FECACA" stroke="#7F1D1D"/><text x="56" y="72" text-anchor="middle" font-weight="600">H</text><text x="56" y="79" text-anchor="middle" font-size="6">1</text><rect x="253" y="58" width="22" height="22" fill="#FDE68A" stroke="#92400E"/><text x="264" y="72" text-anchor="middle" font-weight="600">He</text><text x="264" y="79" text-anchor="middle" font-size="6">2</text><rect x="45" y="82" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="56" y="96" text-anchor="middle" font-weight="600">Li</text><text x="56" y="103" text-anchor="middle" font-size="6">3</text><rect x="67" y="82" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="78" y="96" text-anchor="middle" font-weight="600">Be</text><text x="78" y="103" text-anchor="middle" font-size="6">4</text><rect x="231" y="82" width="22" height="22" fill="#FBCFE8" stroke="#831843"/><text x="242" y="96" text-anchor="middle" font-weight="600">F</text><text x="242" y="103" text-anchor="middle" font-size="6">9</text><rect x="253" y="82" width="22" height="22" fill="#FDE68A" stroke="#92400E"/><text x="264" y="96" text-anchor="middle" font-weight="600">Ne</text><text x="264" y="103" text-anchor="middle" font-size="6">10</text><rect x="45" y="106" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="56" y="120" text-anchor="middle" font-weight="600">Na</text><text x="56" y="127" text-anchor="middle" font-size="6">11</text><rect x="67" y="106" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="78" y="120" text-anchor="middle" font-weight="600">Mg</text><text x="78" y="127" text-anchor="middle" font-size="6">12</text><rect x="231" y="106" width="22" height="22" fill="#FBCFE8" stroke="#831843"/><text x="242" y="120" text-anchor="middle" font-weight="600">Cl</text><text x="242" y="127" text-anchor="middle" font-size="6">17</text><rect x="253" y="106" width="22" height="22" fill="#FDE68A" stroke="#92400E"/><text x="264" y="120" text-anchor="middle" font-weight="600">Ar</text><text x="264" y="127" text-anchor="middle" font-size="6">18</text><rect x="45" y="130" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="56" y="144" text-anchor="middle" font-weight="600">K</text><text x="56" y="151" text-anchor="middle" font-size="6">19</text><rect x="67" y="130" width="22" height="22" fill="#BFDBFE" stroke="#1E3A8A"/><text x="78" y="144" text-anchor="middle" font-weight="600">Ca</text><text x="78" y="151" text-anchor="middle" font-size="6">20</text></g><text x="160" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A">Year 7 chemistry classroom, John Smith Academy</text></svg>',
        hotspots: [
          {
            id: 'cae-shells-h-wall-na',
            x: 22,
            y: 55,
            label: 'Sodium (Na, Z=11): 2, 8, 1',
            description:
              'Atomic number 11 means 11 electrons. Filling the lowest shells first gives 2 in shell 1, 8 in shell 2 and 1 left over for shell 3. So sodium is 2, 8, 1: group 1, period 3.',
          },
          {
            id: 'cae-shells-h-wall-cl',
            x: 76,
            y: 50,
            label: 'Chlorine (Cl, Z=17): 2, 8, 7',
            description:
              'Atomic number 17 means 17 electrons. The first 2 fill shell 1, the next 8 fill shell 2, the remaining 7 sit in shell 3. So chlorine is 2, 8, 7: group 7, period 3.',
          },
          {
            id: 'cae-shells-h-wall-k',
            x: 22,
            y: 70,
            label: 'Potassium (K, Z=19): 2, 8, 8, 1',
            description:
              'Atomic number 19. Shell 1 fills (2), shell 2 fills (8), shell 3 fills to 8 under the 2, 8, 8 rule, and the last electron has to open shell 4. So potassium is 2, 8, 8, 1: group 1, period 4.',
          },
          {
            id: 'cae-shells-h-wall-ar',
            x: 84,
            y: 60,
            label: 'Argon (Ar, Z=18): 2, 8, 8',
            description:
              'Argon has 18 electrons, exactly enough to fill shells 1, 2 and 3 under the 2, 8, 8 rule. A full outer shell makes argon stable, so it sits in group 0/8 and is used in light bulbs to stop the filament reacting.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-shells-worked-1',
      title: 'Building the electron configuration of phosphorus (P, Z=15)',
      steps: [
        {
          explanation:
            'Question: A pupil at a Manchester grammar school is asked to write the electron configuration of phosphorus from its atomic number alone. Phosphorus has atomic number Z = 15. Work out the configuration using only the 2, 8, 8 rule, then read off the group and period.',
        },
        {
          explanation:
            'Step 1: write down the total number of electrons. In a neutral atom the number of electrons equals the atomic number. Phosphorus has 15 electrons to place.',
          maths: 'electrons = Z = 15',
        },
        {
          explanation:
            'Step 2: fill shell 1 first, up to its maximum of 2. Place 2 electrons in shell 1 and subtract from the total.',
          maths: 'shell 1: 2 placed; remaining = 15 - 2 = 13',
        },
        {
          explanation:
            'Step 3: fill shell 2 next, up to its maximum of 8. Place 8 electrons in shell 2 and subtract again.',
          maths: 'shell 2: 8 placed; remaining = 13 - 8 = 5',
        },
        {
          explanation:
            'Step 4: place the rest in shell 3. There are 5 electrons left, which is below the shell-3 maximum of 8, so they all go in. Shell 3 is the outer shell, and it holds 5.',
          maths: 'shell 3: 5 placed; remaining = 0',
        },
        {
          explanation:
            'Step 5: write the configuration and read off group and period. The configuration is 2, 8, 5. The outer shell holds 5 electrons, so phosphorus is in group 5. It uses 3 shells, so it sits in period 3. This matches the position of P on every UK exam-board periodic table.',
          maths: 'config = 2, 8, 5  ->  group 5, period 3',
        },
      ],
    },
    {
      id: 'cae-shells-worked-2',
      title: 'Using configurations to predict reactivity (Na vs Ar vs Cl)',
      steps: [
        {
          explanation:
            'Question: A Year 7 chemist at a school in Cardiff is shown three labels: Na (2, 8, 1), Ar (2, 8, 8) and Cl (2, 8, 7). They are asked to rank the three from least reactive to most reactive and explain why, using only the configurations.',
        },
        {
          explanation:
            'Step 1: identify the outer-shell electron count for each atom. Sodium has 1 outer electron, argon has 8, chlorine has 7.',
          maths: 'Na outer = 1; Ar outer = 8; Cl outer = 7',
        },
        {
          explanation:
            'Step 2: apply the stability rule. A full outer shell is very stable. Atoms that are far from full (very few outer electrons) or one short of full (7 outer) are unstable and want to react.',
        },
        {
          explanation:
            'Step 3: place argon first. Argon already has 8 outer electrons, so its outer shell is full. It does not need to gain or lose electrons, so it is the least reactive (a noble gas).',
        },
        {
          explanation:
            'Step 4: compare sodium and chlorine. Sodium has 1 outer electron, which it can easily lose to leave the stable 2, 8 underneath. Chlorine has 7 outer electrons and only needs to gain 1 to fill its shell. Both are highly reactive, but for opposite reasons.',
        },
        {
          explanation:
            'Step 5: rank and conclude. Least reactive: Ar (full shell). Most reactive: sodium and chlorine (each one step from a full shell). This is why sodium reacts vigorously in water and chlorine bleaches a swimming pool, while argon sits unreactive inside a filament bulb.',
          maths: 'reactivity:  Ar  <<  Na, Cl',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cae-shells-q1',
      type: 'multiple-choice',
      stem: 'In a Year 7 atom diagram, where do the electrons sit?',
      tier: 'core',
      options: [
        'Inside the nucleus, mixed in with the protons and neutrons',
        'Randomly anywhere in the atom, with no fixed positions',
        'In a single layer pressed against the outside of the atom',
        'In shells around the nucleus',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-shells-mis-electrons-in-nucleus',
    },
    {
      id: 'cae-shells-q2',
      type: 'multiple-choice',
      stem: 'According to the Year 7 (2, 8, 8) rule, what is the maximum number of electrons that can fit in the FIRST shell?',
      tier: 'core',
      options: ['1', '2', '4', '8'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'cae-shells-q3',
      type: 'numeric-entry',
      stem: 'Using the 2, 8, 8 rule, what is the maximum number of electrons that can fit in the SECOND shell?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'The rule is 2, 8, 8 for shells 1, 2 and 3.',
    },
    {
      id: 'cae-shells-q4',
      type: 'numeric-entry',
      stem: 'Helium has 2 electrons. How many electrons are in its outer shell? (Helium configuration: 2.)',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
    },
    {
      id: 'cae-shells-q5',
      type: 'multiple-choice',
      stem: 'The electron configuration of carbon (Z=6) is 2, 4. What does the 4 in this configuration mean?',
      tier: 'core',
      options: [
        'There are 4 electrons in the second (outer) shell',
        'There are 4 electrons in the first shell',
        'There are 4 protons in the nucleus',
        'There are 4 shells in total',
      ],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'cae-shells-q6',
      type: 'drag-order',
      stem: 'Put these steps in the correct order to build an electron configuration from an atomic number.',
      tier: 'core',
      items: [
        'Place electrons in shell 2 next, up to a maximum of 8',
        'Read the atomic number and use it as the number of electrons',
        'Place any remaining electrons in shell 3 (and shell 4 if needed)',
        'Place electrons in shell 1 first, up to a maximum of 2',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'cae-shells-q7',
      type: 'spot-misconception',
      stem: 'Aisha says: "Lithium has 3 electrons, so its configuration must be just 3 in the first shell."',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. Electrons all sit in the first shell until you run out of them.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Shell 1 only holds 2 electrons, so the third must start shell 2. Lithium is 2, 1, not 3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-shells-mis-shell-1-takes-all',
    },
    // CONFIDENT (8)
    {
      id: 'cae-shells-q8',
      type: 'numeric-entry',
      stem: 'Sodium has atomic number 11. Using the 2, 8, 8 rule, how many electrons sit in its outer shell?',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Fill shell 1 with 2, then shell 2 with 8. How many of the 11 electrons are left for the next shell?',
    },
    {
      id: 'cae-shells-q9',
      type: 'numeric-entry',
      stem: 'Chlorine has atomic number 17. How many electrons are in its outer (third) shell?',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'Start at 17, take 2 for shell 1, take 8 for shell 2. The rest sit in shell 3.',
    },
    {
      id: 'cae-shells-q10',
      type: 'multiple-choice',
      stem: 'The electron configuration of an element is 2, 8, 2. Which element is it?',
      tier: 'confident',
      options: ['Sodium (Na)', 'Calcium (Ca)', 'Aluminium (Al)', 'Magnesium (Mg)'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Count the total: 2 + 8 + 2 = 12. Which element has atomic number 12?',
    },
    {
      id: 'cae-shells-q11',
      type: 'multiple-choice',
      stem: 'Neon has configuration 2, 8. Why is neon almost completely unreactive (a noble gas)?',
      tier: 'confident',
      options: [
        'Because it is a gas, and gases are always unreactive',
        'Because its electrons are stuck inside the nucleus',
        'Because its outer shell is full, so it does not need to gain or lose electrons',
        'Because it only has two shells, and atoms with two shells never react',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-shells-mis-noble-gas-because-gas',
    },
    {
      id: 'cae-shells-q12',
      type: 'multiple-choice',
      stem: 'A pupil is shown the configuration 2, 8, 8, 1. Which group of the periodic table does this element belong to?',
      tier: 'confident',
      options: [
        'Group 1 (alkali metals)',
        'Group 4',
        'Group 7 (halogens)',
        'Group 0/8 (noble gases)',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'The number of electrons in the OUTER shell tells you the group number.',
    },
    {
      id: 'cae-shells-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of building the electron configuration of silicon (Si, Z=14).',
      tier: 'confident',
      steps: [
        'Read the atomic number: silicon is Z = 14, so place 14 electrons in total',
        'Fill shell 1 first, up to its maximum of 2 electrons (12 left)',
        null,
        'Place the remaining 4 electrons in shell 3 (the outer shell)',
        'Write the final configuration: 2, 8, 4',
      ],
      missingStepIndex: 2,
      correctStep: 'Fill shell 2 next, up to its maximum of 8 electrons (4 left)',
      xpValue: 20,
    },
    {
      id: 'cae-shells-q14',
      type: 'spot-misconception',
      stem: 'Liam writes the configuration of magnesium (Z=12) as 2, 10, claiming shell 2 simply takes whatever is left after shell 1 is full.',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Shell 2 can hold any number of electrons left over.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. Shell 2 has a maximum of 8 at KS3. The 12 electrons in magnesium go 2, 8, 2 (shell 1, shell 2, shell 3), not 2, 10.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-shells-mis-shell-2-uncapped',
    },
    {
      id: 'cae-shells-q15',
      type: 'numeric-entry',
      stem: 'An atom has configuration 2, 8, 8, 2. How many shells of electrons does this atom use (and so what is its period number)?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Count how many numbers are in the configuration; that is the number of shells used.',
    },
    // CHALLENGE (6)
    {
      id: 'cae-shells-q16',
      type: 'numeric-entry',
      stem: 'Calcium has atomic number 20. Using the 2, 8, 8 rule, how many electrons end up in its outer shell?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 20,
      hint: 'Fill 2, then 8, then 8 in shells 1, 2, 3. How many of the 20 are left for shell 4?',
    },
    {
      id: 'cae-shells-q17',
      type: 'multiple-choice',
      stem: 'Potassium is in the same group as sodium. From electron configurations alone, why?',
      tier: 'challenge',
      options: [
        'Both have a full outer shell',
        'Both have exactly 1 electron in their outer shell (Na is 2, 8, 1 and K is 2, 8, 8, 1)',
        'Both have the same total number of electrons',
        'Both sit in the same period of the periodic table',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cae-shells-mis-period-vs-group',
    },
    {
      id: 'cae-shells-q18',
      type: 'multiple-choice',
      stem: 'Sodium (2, 8, 1) and chlorine (2, 8, 7) are both very reactive. Which statement explains BOTH, using only the configurations?',
      tier: 'challenge',
      options: [
        'Both have a full outer shell, so they easily share electrons',
        'Both have the same number of shells, so they react identically',
        'Each is just one electron away from a full or empty outer shell, so each will easily lose 1 (Na) or gain 1 (Cl) to reach a stable arrangement',
        'Both are gases at room temperature, and gases always react with everything',
      ],
      correctIndex: 2,
      xpValue: 20,
    },
    {
      id: 'cae-shells-q19',
      type: 'missing-step',
      stem: 'A pupil is asked to predict the group of an unknown element X with atomic number 16. Fill in the missing step in their working.',
      tier: 'challenge',
      steps: [
        'X has Z = 16, so it has 16 electrons in total',
        'Fill shell 1 with 2 electrons (14 left)',
        'Fill shell 2 with 8 electrons (6 left)',
        null,
        'Read off the group: 6 outer electrons means X is in group 6 (X is sulfur, S)',
      ],
      missingStepIndex: 3,
      correctStep: 'Place the remaining 6 electrons in shell 3, the outer shell',
      xpValue: 20,
    },
    {
      id: 'cae-shells-q20',
      type: 'numeric-entry',
      stem: 'Argon is a noble gas with configuration 2, 8, 8. Its atomic number is 18. A neighbouring element X has 19 electrons. How many electrons does X have in its OUTER shell?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 20,
      hint: 'After argon (18 electrons) fills shells 1, 2 and 3 completely, the 19th electron has to open a new shell.',
    },
    {
      id: 'cae-shells-q21',
      type: 'multiple-choice',
      stem: 'A pupil sees fluorine (2, 7) on the periodic table wall chart at school and predicts: "Fluorine should be very reactive, because it only needs to gain 1 electron to fill its outer shell." Which statement best evaluates this prediction?',
      tier: 'challenge',
      options: [
        'The prediction is wrong: a full outer shell is unstable, so atoms avoid it',
        'The prediction is wrong: fluorine is a noble gas because it has 7 outer electrons',
        'The prediction is correct: a full outer shell is very stable, and atoms only 1 electron short readily gain one, which is why fluorine and other group 7 elements are highly reactive',
        'The prediction is correct only for metals; fluorine is a non-metal, so the rule does not apply',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cae-shells-mis-full-shell-unstable',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on atomic structure, KS3 "where the electrons sit" item; reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F) on candidates placing electrons inside the nucleus.
    {
      id: 'cae-shells-mis-electrons-in-nucleus',
      description:
        'Electrons sit inside the nucleus alongside the protons and neutrons, all packed together.',
      triggerAnswer: 'electrons-in-nucleus',
      correction:
        'Electrons sit in shells AROUND the nucleus, not in it. The nucleus holds only protons and neutrons. Electrons take up most of the room of the atom.',
      reExplanation:
        'In the simple Year 7 picture the nucleus is a tiny dense dot at the centre, holding the protons and neutrons. The electrons orbit at much larger distances in shells. The atom is mostly empty space, with the electrons mapping out where they are most likely to be found. Mixing the electrons into the nucleus would mean the atom had no shells at all and no room to bond.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F) Q03 on electron configurations: candidates "put all electrons of a small atom in the first shell"; reinforced by CGP KS3 Chemistry Study Book p.21 Common Mistake box on shell filling.
    {
      id: 'cae-shells-mis-shell-1-takes-all',
      description:
        'The first shell takes as many electrons as the atom has; only large atoms ever need a second shell.',
      triggerAnswer: 'shell-1-takes-all',
      correction:
        'Shell 1 has a hard maximum of 2 electrons. Once it is full, any further electrons must start shell 2. Lithium (Z=3) already needs two shells: 2, 1.',
      reExplanation:
        'Each shell has a fixed capacity. Shell 1 can hold at most 2 electrons. From lithium onwards (Z = 3 and above) the extra electrons start shell 2, which can hold up to 8. Forgetting the cap on shell 1 makes every configuration come out wrong, so always place 2 in shell 1 first before moving on.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q04 on electron arrangements for the first 20 elements: candidates "left shell 2 uncapped" when configuring magnesium and beyond; reinforced by RSC Education resource "Electronic structure of the first 20 elements" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-shells-mis-shell-2-uncapped',
      description:
        'Once shell 1 is full, all the remaining electrons can simply pile into shell 2 (so magnesium would be 2, 10).',
      triggerAnswer: 'shell-2-uncapped',
      correction:
        'Shell 2 also has a hard maximum, of 8 electrons at KS3. Anything over 8 has to start shell 3. Magnesium (Z=12) is 2, 8, 2 and not 2, 10.',
      reExplanation:
        'The 2, 8, 8 rule names three caps in turn: 2 for shell 1, 8 for shell 2, 8 for shell 3 at Year 7. After 10 electrons (neon, 2, 8) any extra electron must open shell 3. For magnesium, with 12 electrons, the working is 2 in shell 1, 8 in shell 2, then 2 left for shell 3, giving the correct 2, 8, 2 arrangement.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on noble gases: pupils "say neon is unreactive because it is a gas"; reinforced by Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H) on noble-gas reactivity.
    {
      id: 'cae-shells-mis-noble-gas-because-gas',
      description:
        'Noble gases like helium and neon are unreactive simply because they are gases, not because of their electron arrangement.',
      triggerAnswer: 'noble-gas-because-gas',
      correction:
        'Being a gas does not stop a substance reacting (oxygen and chlorine are both reactive gases). Noble gases are unreactive because they have a FULL outer shell of electrons.',
      reExplanation:
        'Lots of gases are highly reactive: chlorine, oxygen, fluorine. State of matter has nothing to do with reactivity. A full outer shell is what makes an atom chemically stable. Helium (2) and neon (2, 8) already have full outer shells, so they have no reason to gain, lose or share electrons, and that is why they sit out almost every chemical reaction.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F) Q02 on the periodic table: candidates "confused period with group, especially for potassium and sodium"; reinforced by CGP KS3 Chemistry Study Book p.30 chapter on the periodic table.
    {
      id: 'cae-shells-mis-period-vs-group',
      description:
        'The period number of an element equals the number of electrons in its outer shell.',
      triggerAnswer: 'period-vs-group',
      correction:
        'It is the GROUP number that equals the number of outer-shell electrons. The PERIOD number equals the number of shells used.',
      reExplanation:
        'Sodium (2, 8, 1) and potassium (2, 8, 8, 1) both have 1 outer electron, so both sit in group 1. Sodium uses 3 shells (period 3) and potassium uses 4 shells (period 4). Group is read from the outer shell; period is read from the number of shells. Mixing the two up is the most common Year 7 slip on this topic.',
    },
    // Source: David Paterson, "Teaching electron configuration at KS3", RSC Education CPD article (2022-05-10): pupils "believe a full outer shell is unstable because it is 'overloaded'"; reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on stability.
    {
      id: 'cae-shells-mis-full-shell-unstable',
      description:
        'A full outer shell is unstable, because the atom is "overloaded" with electrons.',
      triggerAnswer: 'full-shell-unstable',
      correction:
        'A full outer shell is the most STABLE arrangement, not the least. Noble gases keep their full shells; group 1 and group 7 elements react to reach the same full-shell state.',
      reExplanation:
        'Atoms behave as if they "want" a full outer shell because that arrangement has the lowest energy and is the most stable. Group 1 metals lose 1 electron to reach a full inner shell; group 7 non-metals gain 1 electron to fill their outer shell. The reason they react is precisely because reaching a full shell is favourable, not because a full shell would be a problem.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F) Q05 on the order of shell filling: candidates "start at shell 3 because it is largest" or "fill outer shell first"; reinforced by CGP KS3 Chemistry Study Book p.21 worked-example box on filling order.
    {
      id: 'cae-shells-mis-fill-outer-first',
      description:
        'Electrons fill the outer shell first because it is the biggest and has the most room.',
      triggerAnswer: 'fill-outer-first',
      correction:
        'Electrons always fill the LOWEST shell first, because it has the lowest energy and is closest to the nucleus. Once that is full they move outwards.',
      reExplanation:
        'The order of filling is shell 1, then shell 2, then shell 3, then shell 4 at Year 7. Lower shells sit closer to the nucleus and are at lower energy, so they fill before higher ones. Starting with the outer shell would give the wrong total and the wrong group; for example, sodium would not appear as 2, 8, 1 and would not behave like a group 1 metal at all.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
