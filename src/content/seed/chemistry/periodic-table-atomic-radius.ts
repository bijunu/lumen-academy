import type { SkillNode } from '@/types/content'

export const atomicRadiusAndShielding: SkillNode = {
  id: 'chemistry-periodic-table-atomic-radius',
  title: 'Atomic Radius and Shielding Intro',
  description:
    'Stretch beyond KS3 into early KS4 by sizing up atoms. The ATOMIC RADIUS is the distance from the nucleus to the outer shell of electrons, measured in picometres (pm). Down a group the radius INCREASES because each step adds a fresh shell of electrons further out. Across a period left to right the radius DECREASES, because more protons in the nucleus pull the same outer shell in tighter, even though mass rises. The qualitative idea of SHIELDING (inner shells partly blocking the nuclear pull on the outer electron) shows why Group 1 reactivity rises down the column: a bigger, more shielded atom loses its outer electron more readily. Year 12 chemistry students at UK grammar schools meet these trends as their first proper foray into periodic explanations.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'challenge',
  prerequisites: ['chemistry-periodic-table-electron-shells'],
  curriculum: {
    ks3Objective:
      'The concept of atomic radius; how radius changes down a group and across a period (qualitative); shielding and nuclear charge (early KS4 stretch).',
    awardingBodies: {
      aqa: '4.1.2.8 Atomic radius trends and bonding (8462)',
      edexcel: 'Topic 1.33 Atomic radius trends (1CH0)',
      ocr: 'C1.2c Explaining trends: atomic radius, ionisation energy (early stretch) (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-radius-scene-1',
      title: 'What Atomic Radius Means',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the labelled atom to see how the atomic radius is measured from the nucleus out to the outer shell of electrons.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">ATOMIC RADIUS: NUCLEUS TO OUTER SHELL</text><g><circle cx="180" cy="120" r="80" fill="none" stroke="#1E3A8A" stroke-width="1.2" stroke-dasharray="3,3"/><circle cx="180" cy="120" r="50" fill="none" stroke="#475569" stroke-width="0.8" stroke-dasharray="2,2"/><circle cx="180" cy="120" r="22" fill="none" stroke="#475569" stroke-width="0.8" stroke-dasharray="2,2"/><circle cx="180" cy="120" r="6" fill="#7C2D12" stroke="#1E3A8A" stroke-width="0.8"/><text x="180" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+</text><circle cx="180" cy="98" r="2.4" fill="#1E3A8A"/><circle cx="180" cy="142" r="2.4" fill="#1E3A8A"/><circle cx="158" cy="120" r="2.4" fill="#1E3A8A"/><circle cx="202" cy="120" r="2.4" fill="#1E3A8A"/><circle cx="180" cy="70" r="2.6" fill="#7C2D12"/><circle cx="180" cy="170" r="2.6" fill="#7C2D12"/><circle cx="130" cy="120" r="2.6" fill="#7C2D12"/><circle cx="230" cy="120" r="2.6" fill="#7C2D12"/><circle cx="180" cy="40" r="3" fill="#064E3B"/><circle cx="244" cy="84" r="3" fill="#064E3B"/><circle cx="244" cy="156" r="3" fill="#064E3B"/><circle cx="180" cy="200" r="3" fill="#064E3B"/><circle cx="116" cy="156" r="3" fill="#064E3B"/><circle cx="116" cy="84" r="3" fill="#064E3B"/><line x1="180" y1="120" x2="260" y2="120" stroke="#B91C1C" stroke-width="1.6" marker-end="url(#aRadiusR)"/><defs><marker id="aRadiusR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#B91C1C"/></marker></defs><text x="222" y="114" text-anchor="middle" font-size="8" fill="#B91C1C" font-weight="700">RADIUS</text></g><text x="180" y="218" text-anchor="middle" font-size="7" fill="#1E3A8A">unit: picometre (pm), 1 pm = 10 to the minus 12 metres</text></svg>',
        hotspots: [
          {
            id: 'cpt-radius-h-nucleus',
            x: 50,
            y: 55,
            label: 'The nucleus sits at the centre',
            description:
              'The atomic radius is always measured starting from the centre of the nucleus, the tiny dense blob of protons and neutrons.',
          },
          {
            id: 'cpt-radius-h-outer',
            x: 78,
            y: 55,
            label: 'Out to the outer shell of electrons',
            description:
              'The radius ends at the outer shell, the furthest layer of electrons. Inner shells sit closer in, but they do not set the size of the atom.',
          },
          {
            id: 'cpt-radius-h-unit',
            x: 50,
            y: 98,
            label: 'Measured in picometres (pm)',
            description:
              'A picometre is one trillionth of a metre, 10 to the minus 12 m. Atoms are roughly 30 to 260 pm across, so a single hair (about 75,000 pm wide) covers hundreds of atoms.',
          },
          {
            id: 'cpt-radius-h-not-mass',
            x: 22,
            y: 55,
            label: 'Radius is size, not mass',
            description:
              'Atomic radius (size) is a separate idea from atomic mass (weight). A small atom can still be heavy and a large atom can still be light.',
          },
        ],
      },
    },
    {
      id: 'cpt-radius-scene-2',
      title: 'Down a Group: Radius INCREASES',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the Group 1 stack to see how lithium, sodium, potassium and rubidium each add a fresh shell, growing in size as you head down the column.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">GROUP 1: ATOMIC RADIUS RISES DOWN THE GROUP</text><g><circle cx="60" cy="120" r="20" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><circle cx="60" cy="120" r="8" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.8"/><text x="60" y="123" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Li</text><text x="60" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">152 pm</text><text x="60" y="172" text-anchor="middle" font-size="6" fill="#475569">2 shells</text></g><g><circle cx="130" cy="120" r="28" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><circle cx="130" cy="120" r="18" fill="#DBEAFE" stroke="#475569" stroke-width="0.6"/><circle cx="130" cy="120" r="8" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.8"/><text x="130" y="123" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Na</text><text x="130" y="168" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">186 pm</text><text x="130" y="180" text-anchor="middle" font-size="6" fill="#475569">3 shells</text></g><g><circle cx="210" cy="120" r="38" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><circle cx="210" cy="120" r="28" fill="#DBEAFE" stroke="#475569" stroke-width="0.6"/><circle cx="210" cy="120" r="18" fill="#E0F2FE" stroke="#475569" stroke-width="0.6"/><circle cx="210" cy="120" r="8" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.8"/><text x="210" y="123" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">K</text><text x="210" y="176" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">227 pm</text><text x="210" y="188" text-anchor="middle" font-size="6" fill="#475569">4 shells</text></g><g><circle cx="300" cy="120" r="48" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><circle cx="300" cy="120" r="38" fill="#DBEAFE" stroke="#475569" stroke-width="0.6"/><circle cx="300" cy="120" r="28" fill="#E0F2FE" stroke="#475569" stroke-width="0.6"/><circle cx="300" cy="120" r="18" fill="#F0F9FF" stroke="#475569" stroke-width="0.6"/><circle cx="300" cy="120" r="8" fill="#FBBF24" stroke="#7C2D12" stroke-width="0.8"/><text x="300" y="123" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Rb</text><text x="300" y="184" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">248 pm</text><text x="300" y="196" text-anchor="middle" font-size="6" fill="#475569">5 shells</text></g><line x1="30" y1="38" x2="330" y2="38" stroke="#7C2D12" stroke-width="1.4" marker-end="url(#aDownR)"/><defs><marker id="aDownR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#7C2D12"/></marker></defs><text x="180" y="50" text-anchor="middle" font-size="8" fill="#7C2D12" font-weight="700">EACH STEP DOWN ADDS A NEW SHELL FURTHER OUT</text></svg>',
        hotspots: [
          {
            id: 'cpt-radius-h-li',
            x: 18,
            y: 55,
            label: 'Lithium: 152 pm (2 shells)',
            description:
              'Lithium is the smallest Group 1 atom in the school table. It uses two electron shells and has an atomic radius of about 152 pm.',
          },
          {
            id: 'cpt-radius-h-na',
            x: 36,
            y: 55,
            label: 'Sodium: 186 pm (3 shells)',
            description:
              'Sodium adds a third shell, pushing its outer electron further from the nucleus. The radius rises to about 186 pm.',
          },
          {
            id: 'cpt-radius-h-k',
            x: 58,
            y: 55,
            label: 'Potassium: 227 pm (4 shells)',
            description:
              'Potassium uses four shells. The outer electron is now even further out, so the atomic radius rises again to about 227 pm.',
          },
          {
            id: 'cpt-radius-h-rb',
            x: 83,
            y: 55,
            label: 'Rubidium: 248 pm (5 shells)',
            description:
              'Rubidium uses five shells. Each new shell adds a fresh layer further from the nucleus, so the radius keeps growing. The trend across all of Group 1 is a steady rise.',
          },
          {
            id: 'cpt-radius-h-rule-down',
            x: 50,
            y: 22,
            label: 'Rule: down a group, radius rises',
            description:
              'Going down any group, atoms gain a new shell at each step. Even though the nucleus also gains protons, the new outer shell sits further out, so the atom grows.',
          },
        ],
      },
    },
    {
      id: 'cpt-radius-scene-3',
      title: 'Across a Period: Radius DECREASES',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the Period 3 strip to see how sodium shrinks to chlorine even though the protons pile up, because the outer electrons all sit in the same shell.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7C2D12">PERIOD 3: ATOMIC RADIUS FALLS LEFT TO RIGHT</text><g><circle cx="40" cy="120" r="28" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="40" cy="120" r="6" fill="#7C2D12"/><text x="40" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+11</text><text x="40" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Na</text><text x="40" y="174" text-anchor="middle" font-size="7" fill="#1E3A8A">186 pm</text></g><g><circle cx="95" cy="120" r="24" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="95" cy="120" r="6" fill="#7C2D12"/><text x="95" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+12</text><text x="95" y="158" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Mg</text><text x="95" y="170" text-anchor="middle" font-size="7" fill="#1E3A8A">160 pm</text></g><g><circle cx="150" cy="120" r="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><circle cx="150" cy="120" r="6" fill="#7C2D12"/><text x="150" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+13</text><text x="150" y="154" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Al</text><text x="150" y="166" text-anchor="middle" font-size="7" fill="#1E3A8A">143 pm</text></g><g><circle cx="200" cy="120" r="16" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1"/><circle cx="200" cy="120" r="6" fill="#7C2D12"/><text x="200" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+14</text><text x="200" y="150" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Si</text><text x="200" y="162" text-anchor="middle" font-size="7" fill="#1E3A8A">117 pm</text></g><g><circle cx="245" cy="120" r="14" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1"/><circle cx="245" cy="120" r="6" fill="#7C2D12"/><text x="245" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+15</text><text x="245" y="148" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">P</text><text x="245" y="160" text-anchor="middle" font-size="7" fill="#1E3A8A">110 pm</text></g><g><circle cx="285" cy="120" r="13" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1"/><circle cx="285" cy="120" r="6" fill="#7C2D12"/><text x="285" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+16</text><text x="285" y="147" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">S</text><text x="285" y="159" text-anchor="middle" font-size="7" fill="#1E3A8A">104 pm</text></g><g><circle cx="325" cy="120" r="12" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1"/><circle cx="325" cy="120" r="6" fill="#7C2D12"/><text x="325" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+17</text><text x="325" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A" font-weight="700">Cl</text><text x="325" y="158" text-anchor="middle" font-size="7" fill="#1E3A8A">99 pm</text></g><line x1="20" y1="42" x2="340" y2="42" stroke="#1E3A8A" stroke-width="1.4" marker-end="url(#aAcrossR)"/><defs><marker id="aAcrossR" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1E3A8A"/></marker></defs><text x="180" y="54" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">MORE PROTONS PULL THE SAME SHELL IN TIGHTER</text><text x="180" y="208" text-anchor="middle" font-size="7" fill="#475569">mass rises across the row, but SIZE falls</text></svg>',
        hotspots: [
          {
            id: 'cpt-radius-h-na-period',
            x: 12,
            y: 55,
            label: 'Sodium starts wide at 186 pm',
            description:
              'Sodium is on the far left of Period 3 with 11 protons. Its outer electron sits in shell 3, held only loosely by the nucleus. Atomic radius about 186 pm.',
          },
          {
            id: 'cpt-radius-h-cl-period',
            x: 90,
            y: 55,
            label: 'Chlorine ends narrow at 99 pm',
            description:
              'Chlorine sits near the far right of Period 3 with 17 protons. The outer electrons are still in shell 3, but a much stronger pull squeezes the atom down to about 99 pm.',
          },
          {
            id: 'cpt-radius-h-same-shell',
            x: 50,
            y: 80,
            label: 'Same outer shell across the row',
            description:
              'Across Period 3 every element fills the same shell (shell 3) with outer electrons. No fresh shells are added, so no extra distance is built into the atom.',
          },
          {
            id: 'cpt-radius-h-nuc-charge',
            x: 50,
            y: 22,
            label: 'Nuclear charge rises across the row',
            description:
              'Going left to right, the proton count climbs from 11 (Na) to 17 (Cl). A stronger positive pull at the centre tugs the same outer shell in tighter, so the atom shrinks.',
          },
          {
            id: 'cpt-radius-h-mass-trap',
            x: 50,
            y: 96,
            label: 'Mass rises but SIZE falls',
            description:
              'It catches students out: chlorine is heavier than sodium yet smaller. Mass and size are different things. Across a period, mass rises while atomic radius falls.',
          },
        ],
      },
    },
    {
      id: 'cpt-radius-scene-4',
      title: 'Shielding: Why Bigger Atoms Lose Electrons Easier',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the side-by-side lithium and potassium atoms to see how inner shells shield the outer electron, and why this matters for Group 1 reactivity.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">SHIELDING: INNER SHELLS BLOCK THE NUCLEAR PULL</text><g><circle cx="90" cy="120" r="44" fill="none" stroke="#1E3A8A" stroke-width="1"/><circle cx="90" cy="120" r="22" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="90" cy="120" r="8" fill="#7C2D12" stroke="#1E3A8A" stroke-width="0.8"/><text x="90" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+3</text><circle cx="90" cy="100" r="2.4" fill="#1E3A8A"/><circle cx="90" cy="140" r="2.4" fill="#1E3A8A"/><circle cx="46" cy="120" r="3" fill="#7C2D12"/><line x1="90" y1="120" x2="46" y2="120" stroke="#B91C1C" stroke-width="1.4" stroke-dasharray="2,2"/><text x="90" y="58" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Lithium (2, 1)</text><text x="90" y="180" text-anchor="middle" font-size="7" fill="#1E3A8A">1 inner shell shielding</text><text x="90" y="192" text-anchor="middle" font-size="7" fill="#1E3A8A">outer electron pulled strongly</text></g><g><circle cx="270" cy="120" r="78" fill="none" stroke="#1E3A8A" stroke-width="1"/><circle cx="270" cy="120" r="58" fill="#DBEAFE" stroke="#475569" stroke-width="0.6"/><circle cx="270" cy="120" r="38" fill="#E0F2FE" stroke="#475569" stroke-width="0.6"/><circle cx="270" cy="120" r="18" fill="#F0F9FF" stroke="#475569" stroke-width="0.6"/><circle cx="270" cy="120" r="8" fill="#7C2D12" stroke="#1E3A8A" stroke-width="0.8"/><text x="270" y="123" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+19</text><circle cx="270" cy="105" r="2" fill="#1E3A8A"/><circle cx="270" cy="135" r="2" fill="#1E3A8A"/><circle cx="270" cy="90" r="2" fill="#1E3A8A"/><circle cx="270" cy="150" r="2" fill="#1E3A8A"/><circle cx="270" cy="70" r="2" fill="#1E3A8A"/><circle cx="270" cy="170" r="2" fill="#1E3A8A"/><circle cx="192" cy="120" r="3" fill="#7C2D12"/><line x1="270" y1="120" x2="192" y2="120" stroke="#FCA5A5" stroke-width="1.4" stroke-dasharray="2,2"/><text x="270" y="34" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Potassium (2, 8, 8, 1)</text><text x="270" y="208" text-anchor="middle" font-size="7" fill="#1E3A8A">3 inner shells shielding</text><text x="220" y="180" font-size="7" fill="#B91C1C">outer electron pulled WEAKLY</text></g><line x1="160" y1="200" x2="200" y2="200" stroke="#475569" stroke-width="0.8"/></svg>',
        hotspots: [
          {
            id: 'cpt-radius-h-shielding-inner',
            x: 25,
            y: 55,
            label: 'Inner shells shield the outer electron',
            description:
              'In lithium, just one inner shell (the 2 inner electrons) sits between the nucleus and the outer electron. That single layer of shielding lets the nucleus still pull strongly on the outer electron.',
          },
          {
            id: 'cpt-radius-h-shielding-outer',
            x: 78,
            y: 55,
            label: 'More shells means more shielding',
            description:
              'In potassium, three inner shells (the 18 inner electrons) lie between the nucleus and the outer electron. They partly block the nuclear pull, so the outer electron feels a much weaker tug.',
          },
          {
            id: 'cpt-radius-h-shielding-react',
            x: 50,
            y: 85,
            label: 'Why Group 1 gets more reactive down the column',
            description:
              'A Group 1 reaction with water involves losing the single outer electron. The less tightly that electron is held, the easier it goes. Potassium loses its outer electron more readily than lithium, so it reacts more vigorously.',
          },
          {
            id: 'cpt-radius-h-shielding-period',
            x: 50,
            y: 22,
            label: 'Shielding is roughly constant across a period',
            description:
              'Going left to right across one period, no new shell is added, so shielding stays about the same. The extra protons pull the outer shell in tighter, which is why atoms shrink across the row.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-radius-worked-1',
      title: 'Comparing the atomic radius of sodium and magnesium',
      steps: [
        {
          explanation:
            'Question: sodium (Na, 11 protons) and magnesium (Mg, 12 protons) sit next to each other on Period 3 of the periodic table. Which atom has the larger atomic radius, and why?',
        },
        {
          explanation:
            'Step 1: identify where each element sits. Sodium is in Group 1 and magnesium is in Group 2. Both are in Period 3, so both put their outer electrons in shell 3.',
          maths: 'Na: shells 2, 8, 1; Mg: shells 2, 8, 2',
        },
        {
          explanation:
            'Step 2: count protons. Sodium has 11, magnesium has 12. The two atoms have the same number of inner shells, so shielding is roughly the same.',
          maths: 'shielding ≈ same (both have 2 inner shells)',
        },
        {
          explanation:
            'Step 3: compare the nuclear pull. Magnesium has one extra proton, so its nucleus pulls the outer shell in slightly tighter than sodium does. With the same shielding but a stronger pull, magnesium ends up smaller.',
          maths: 'Na 186 pm, Mg 160 pm',
        },
        {
          explanation:
            'So sodium has the larger atomic radius. The general rule from this is: across a period, atomic radius decreases because nuclear charge rises while shielding stays roughly the same.',
        },
      ],
    },
    {
      id: 'cpt-radius-worked-2',
      title: 'Why potassium has a larger radius than lithium',
      steps: [
        {
          explanation:
            'Question: lithium (Li, 3 protons) sits at the top of Group 1 and potassium (K, 19 protons) sits two rows below it. Which atom has the larger atomic radius, and why?',
        },
        {
          explanation:
            'Step 1: write down the shell structure for each. Lithium uses 2 shells (2, 1) and potassium uses 4 shells (2, 8, 8, 1). Potassium has two extra inner shells.',
          maths: 'Li: 2, 1 (2 shells); K: 2, 8, 8, 1 (4 shells)',
        },
        {
          explanation:
            'Step 2: shielding rises with the number of inner shells. Potassium has 3 inner shells of electrons (18 inner electrons) blocking the nuclear pull on the outer electron. Lithium has only 1 inner shell (2 inner electrons).',
          maths: 'shielding: Li small, K large',
        },
        {
          explanation:
            'Step 3: even though potassium has 19 protons (more than lithium with 3), the extra inner shells push the outer electron much further out and shield it from that bigger pull. The atom ends up larger overall.',
          maths: 'Li 152 pm, K 227 pm',
        },
        {
          explanation:
            'So potassium has the larger atomic radius. The general rule is: down a group, atomic radius rises because each step adds a new shell, and the extra shielding more than makes up for the extra protons.',
        },
      ],
    },
    {
      id: 'cpt-radius-worked-3',
      title: 'Spotting the surprise: bigger atomic number, smaller atom',
      steps: [
        {
          explanation:
            'Question: chlorine (Cl, 17 protons) has more than three times the protons of lithium (Li, 3 protons), so it must be a far bigger atom. True or false, and why?',
        },
        {
          explanation:
            'Step 1: write out the configurations. Lithium is 2, 1 (2 shells, 152 pm). Chlorine is 2, 8, 7 (3 shells, 99 pm).',
          maths: 'Li: 2 shells, 152 pm; Cl: 3 shells, 99 pm',
        },
        {
          explanation:
            'Step 2: do not assume that more protons means a bigger atom. Atomic radius is set by how far the outer shell sits from the nucleus, not by proton count alone. More protons usually pull the outer shell in tighter, not push it out.',
        },
        {
          explanation:
            'Step 3: compare. Chlorine has only one more shell than lithium, but 14 more protons. The much stronger nuclear pull overwhelms the modest extra shell, so chlorine ends up smaller.',
          maths: '99 pm (Cl) < 152 pm (Li)',
        },
        {
          explanation:
            'So the claim is false. Bigger atomic number often goes with SMALLER atomic radius, especially across a period. Mass and size are separate ideas.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-radius-q1',
      type: 'multiple-choice',
      stem: 'What does the term "atomic radius" measure?',
      tier: 'core',
      options: [
        'The distance from the nucleus to the outer shell of electrons',
        'The total mass of all the protons and neutrons in the atom',
        'The number of shells in the atom',
        'The number of protons in the nucleus',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'It is a size, not a mass or a count.',
      misconceptionId: 'cpt-radius-mis-radius-equals-mass',
    },
    {
      id: 'cpt-radius-q2',
      type: 'multiple-choice',
      stem: 'Atomic radius is normally measured in which unit?',
      tier: 'core',
      options: [
        'Kilograms (kg)',
        'Picometres (pm)',
        'Litres (L)',
        'Atomic mass units (u)',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Atoms are tiny: a single hair is about 75,000 of these units wide.',
    },
    {
      id: 'cpt-radius-q3',
      type: 'multiple-choice',
      stem: 'Going DOWN a group on the periodic table, what happens to atomic radius?',
      tier: 'core',
      options: [
        'It decreases, because each step removes a shell',
        'It stays exactly the same, because the group is fixed',
        'It increases, because each step adds a new shell of electrons further out',
        'It rises and then falls in a wave pattern',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-radius-mis-shrink-down',
    },
    {
      id: 'cpt-radius-q4',
      type: 'multiple-choice',
      stem: 'Going ACROSS a period from left to right, what happens to atomic radius?',
      tier: 'core',
      options: [
        'It decreases, because more protons pull the same outer shell in tighter',
        'It increases, because the atomic mass rises',
        'It stays exactly the same, because the period is fixed',
        'It decreases, because each step removes a shell',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpt-radius-mis-bigger-z-bigger-atom',
    },
    {
      id: 'cpt-radius-q5',
      type: 'numeric-entry',
      stem: 'Potassium (K) has an electron configuration of 2, 8, 8, 1. How many shells of electrons does a potassium atom use? Give your answer as a single whole number.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Count the numbers in the configuration. Each number is one shell.',
    },
    {
      id: 'cpt-radius-q6',
      type: 'numeric-entry',
      stem: 'Chlorine (Cl) has an electron configuration of 2, 8, 7. How many protons are in a neutral chlorine atom? Give your answer as a single whole number.',
      tier: 'core',
      correctAnswer: 17,
      xpValue: 10,
      hint: 'In a neutral atom the number of protons equals the total number of electrons.',
    },
    {
      id: 'cpt-radius-q7',
      type: 'drag-order',
      stem: 'Place these Group 1 atoms in order of atomic radius, from SMALLEST to LARGEST.',
      tier: 'core',
      items: ['Potassium (K)', 'Lithium (Li)', 'Rubidium (Rb)', 'Sodium (Na)'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Down Group 1 the radius rises. Lithium is at the top of the group, rubidium near the bottom.',
    },
    {
      id: 'cpt-radius-q8',
      type: 'free-text',
      stem: 'In one sentence, explain why atomic radius is measured in picometres and not in metres.',
      tier: 'core',
      sampleAnswer:
        'Atoms are extremely small (around 30 to 260 pm), so picometres give a sensible whole-number value while metres would force scientists to write tiny powers of ten such as 1 with eleven zeros after the decimal point.',
      keywords: ['small', 'tiny', 'picometre', 'metre', 'whole number'],
      xpValue: 15,
      hint: 'Compare the size of an atom to a metre. A metre is roughly the height of a school chair.',
    },
    {
      id: 'cpt-radius-q9',
      type: 'multiple-choice',
      stem: 'Sodium (Na) is in Group 1 of Period 3 with an atomic radius of about 186 pm. Magnesium (Mg) is in Group 2 of Period 3. Which is most likely true of magnesium\'s atomic radius?',
      tier: 'confident',
      options: [
        'Larger than 186 pm, because magnesium has more protons',
        'Exactly 186 pm, because both are in Period 3',
        'Smaller than 186 pm, because more protons pull the same outer shell in tighter',
        'Much larger than 186 pm, because magnesium has more electrons',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Across a period the radius FALLS. Magnesium sits one step to the right of sodium.',
      misconceptionId: 'cpt-radius-mis-bigger-z-bigger-atom',
    },
    {
      id: 'cpt-radius-q10',
      type: 'multiple-choice',
      stem: 'Which best explains why atoms shrink across a period from left to right?',
      tier: 'confident',
      options: [
        'A new shell is added at every step, but only on the right of the table',
        'The number of protons rises while the outer electrons stay in the same shell, so the nucleus pulls them in tighter',
        'Electrons are lost from inner shells as you move right',
        'The atoms get heavier, and heavier atoms are always smaller',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpt-radius-mis-bigger-z-bigger-atom',
    },
    {
      id: 'cpt-radius-q11',
      type: 'multiple-choice',
      stem: 'Which best explains why atoms grow larger going down a group?',
      tier: 'confident',
      options: [
        'Each step down adds a fresh proton, which makes the atom heavier and therefore larger',
        'The number of electrons stays the same down a group, so the atom just inflates',
        'The atoms lose protons going down, which weakens the pull on the outer shell',
        'Each step down adds a fresh shell of electrons further from the nucleus, more than making up for the extra protons',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'cpt-radius-q12',
      type: 'numeric-entry',
      stem: 'Rubidium (Rb) has an atomic radius of about 248 pm. Lithium (Li) has an atomic radius of about 152 pm. By how many picometres is rubidium larger than lithium? Give your answer in pm as a single whole number.',
      tier: 'confident',
      correctAnswer: 96,
      unit: 'pm',
      xpValue: 15,
      hint: 'Subtract the lithium radius from the rubidium radius: 248 minus 152.',
    },
    {
      id: 'cpt-radius-q13',
      type: 'numeric-entry',
      stem: 'Look at this set of Period 2 atoms with their approximate atomic radii in pm: lithium 152, beryllium 112, boron 87, carbon 67, nitrogen 56, oxygen 48, fluorine 42, neon 38. Lithium sits on the far left of the period. How many of the other seven atoms are SMALLER than lithium? Give your answer as a single whole number.',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      hint: 'Atomic radius falls across the period, so everything to the right of lithium in this row is smaller.',
    },
    {
      id: 'cpt-radius-q14',
      type: 'multiple-choice',
      stem: 'A pupil in a UK grammar school in Manchester writes: "Sodium and magnesium are both in Period 3, so they should have the same atomic radius." What is the best correction?',
      tier: 'confident',
      options: [
        'Same period means same number of shells, but more protons in magnesium pull the outer shell in tighter, so magnesium has a smaller radius',
        'Same period means same atomic radius, the pupil is correct',
        'Same period means same number of outer electrons, so they share the same radius',
        'Same period means same group, so they share the same radius',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpt-radius-mis-period-same-radius',
    },
    {
      id: 'cpt-radius-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a Year 12 chemistry pupil at a UK grammar school is asked why potassium reacts more vigorously than lithium with cold water.',
      tier: 'confident',
      steps: [
        'Both potassium and lithium are in Group 1, so each atom has 1 outer-shell electron that it loses during the reaction with water.',
        'Potassium uses 4 shells of electrons while lithium uses only 2 shells, so potassium has a larger atomic radius and far more inner-shell shielding.',
        null,
        'So potassium loses its outer electron much more readily than lithium, which is why the reaction with water is more vigorous.',
      ],
      missingStepIndex: 2,
      correctStep:
        'With more shielding and a larger radius, the outer electron in potassium is held by a weaker overall pull from the nucleus than the outer electron in lithium.',
      xpValue: 20,
    },
    {
      id: 'cpt-radius-q17',
      type: 'drag-drop-builder',
      stem: 'Build the rule for the cross-period trend. Drag the four phrases into the correct order to make a single rule sentence.',
      tier: 'confident',
      parts: [
        'so the outer shell is pulled in tighter,',
        'Across a period from left to right,',
        'the number of protons rises while shielding stays roughly the same,',
        'and the atomic radius decreases.',
      ],
      correctArrangement: [
        'Across a period from left to right,',
        'the number of protons rises while shielding stays roughly the same,',
        'so the outer shell is pulled in tighter,',
        'and the atomic radius decreases.',
      ],
      xpValue: 20,
      hint: 'Start with the setting (the period direction), then state what changes (protons and shielding), then the effect (pull), then the result (radius).',
    },
    {
      id: 'cpt-radius-q18',
      type: 'spot-misconception',
      stem: 'Aisha says: "Chlorine has many more protons than lithium, so a chlorine atom must be much bigger than a lithium atom."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. More protons always means a larger atom.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. Chlorine (about 99 pm) is actually smaller than lithium (about 152 pm), because more protons usually pull the outer shell in tighter, so size and proton count do not move together in a simple way.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-radius-mis-bigger-z-bigger-atom',
    },
    {
      id: 'cpt-radius-q19',
      type: 'spot-misconception',
      stem: 'Tom says: "Shielding rises across a period from left to right, because more electrons are added at every step."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Each added electron adds a new layer of shielding.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Across one period the new electrons go into the SAME outer shell, not into a new inner shell, so shielding stays roughly constant while nuclear charge rises.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-radius-mis-shielding-rises-across',
    },
    {
      id: 'cpt-radius-q20',
      type: 'multiple-choice',
      stem: 'A textbook used by Year 12 pupils at a UK grammar school lists these atomic radii: Na 186 pm, P 110 pm, Cl 99 pm, K 227 pm. Which pair of atoms BEST shows the cross-period trend that radius decreases left to right?',
      tier: 'challenge',
      options: [
        'Na 186 pm and Cl 99 pm, because they are in the same period (Period 3) and Cl sits to the right of Na',
        'Na 186 pm and K 227 pm, because K sits below Na',
        'P 110 pm and K 227 pm, because K is in a different period',
        'Cl 99 pm and K 227 pm, because K has more protons',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Cross-period trend means same row, different column. Same group (different row) is the other trend.',
    },
    {
      id: 'cpt-radius-q21',
      type: 'multiple-choice',
      stem: 'Manchester scientists who measured early atomic radii used X-ray techniques developed by the Bragg family in the early 1900s. The radius of a sodium atom they reported was about 186 pm. A teacher in a UK grammar school today picks up this figure and uses it to predict caesium (Cs), which sits at the bottom of Group 1 with 6 shells. Which prediction is best supported by the trend?',
      tier: 'challenge',
      options: [
        'Caesium will be smaller than sodium, because caesium has many more protons',
        'Caesium will be about the same size as sodium, because both are Group 1',
        'Caesium will be larger than sodium, because going down Group 1 adds new shells and adds shielding',
        'Caesium will be exactly 186 pm, because the group is fixed',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'cpt-radius-q22',
      type: 'numeric-entry',
      stem: 'In Period 3 the atomic radii are roughly: Na 186, Mg 160, Al 143, Si 117, P 110, S 104, Cl 99 (all in pm). By how many picometres does the atomic radius fall from sodium on the far left to chlorine on the far right? Give your answer in pm as a single whole number.',
      tier: 'challenge',
      correctAnswer: 87,
      unit: 'pm',
      xpValue: 25,
      hint: 'Subtract the chlorine radius from the sodium radius: 186 minus 99.',
    },
    {
      id: 'cpt-radius-q23',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: explain why magnesium (Mg, 12 protons, 160 pm) is smaller than sodium (Na, 11 protons, 186 pm), given that both are in Period 3.',
      tier: 'challenge',
      steps: [
        'Both magnesium and sodium are in Period 3, so both atoms put their outer electrons in shell 3 and have the same number of inner shells (2 inner shells).',
        'Because the inner shells are the same, the amount of shielding of the outer electrons is roughly the same in both atoms.',
        null,
        'So the nucleus pulls the outer shell in tighter in magnesium than in sodium, and magnesium ends up with a smaller atomic radius.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Magnesium has one more proton than sodium (12 vs 11), so the nuclear charge is greater while the shielding stays roughly the same, giving a stronger overall pull on each outer electron in magnesium.',
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1H), Q06 on periodic trends: candidates "regularly stated that atoms grow steadily across a period because they get heavier, missing that radius falls left to right." Reinforced by Vanessa Kind, "Beyond Appearances", RSC Education chapter on the periodic table.
    {
      id: 'cpt-radius-mis-bigger-z-bigger-atom',
      description:
        'An atom with more protons is always larger than an atom with fewer protons.',
      triggerAnswer: 'bigger-z-bigger-atom',
      correction:
        'In fact more protons usually pull the outer shell in tighter, so across a period atomic radius falls as proton count rises.',
      reExplanation:
        'Compare chlorine (17 protons) and lithium (3 protons). You might expect chlorine to be much bigger because it has many more protons, but chlorine is only about 99 pm across while lithium is about 152 pm. The extra protons in chlorine pull the outer shell in tighter than the modest extra shell can push it out. Atomic radius depends on where the outer shell sits, not on proton count alone.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H), Q07 on group trends: candidates "often wrote that atoms shrink down a group as more protons pull the electrons in, ignoring the new shell added at each step." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the periodic table.
    {
      id: 'cpt-radius-mis-shrink-down',
      description:
        'Atoms get smaller as you go down a group, because the proton count rises.',
      triggerAnswer: 'shrink-down',
      correction:
        'In fact atoms get larger going down a group because each step adds a fresh shell of electrons further from the nucleus, and the extra shielding outweighs the extra protons.',
      reExplanation:
        'Going down Group 1, lithium is about 152 pm, sodium about 186 pm, potassium 227 pm and rubidium 248 pm. At each step a new shell is added, pushing the outer electron further out. The extra protons in the nucleus do pull harder, but the new inner shells also shield that pull, and the net effect is a steady rise in atomic radius. Down a group, radius grows.',
    },
    // Source: David Paterson, "Atomic radius: a classic Year 12 stumbling block", RSC Education CPD article (2021-09-14): notes that A-level beginners often expect period members to have the same atomic radius because they are in the same row, missing the falling trend. Reinforced by OCR A-Level Chemistry examiner report June 2018 (H432/01), Q02.
    {
      id: 'cpt-radius-mis-period-same-radius',
      description:
        'All atoms in the same period have the same atomic radius, because the period number is the same.',
      triggerAnswer: 'period-same-radius',
      correction:
        'In fact period members share the same outer shell, but the nuclear pull on that shell rises across the row, so atomic radius falls.',
      reExplanation:
        'Period 3 goes from sodium at 186 pm to chlorine at 99 pm. All eight elements (Na, Mg, Al, Si, P, S, Cl, Ar) put their outer electrons in shell 3, so the row is fixed at three shells in use. But the protons in the nucleus climb from 11 to 17 across the row, pulling the same outer shell in tighter. Same period does not mean same size: it means same outer shell with a tightening grip.',
    },
    // Source: AQA A-Level Chemistry examiner report June 2019 (7405/1), Q08 on shielding: candidates "often wrote that shielding rises steadily left to right across a period, when in fact shielding is roughly constant across a period because no new inner shell is added." Reinforced by CGP A-Level Chemistry common-mistake callouts on periodic trends.
    {
      id: 'cpt-radius-mis-shielding-rises-across',
      description:
        'Shielding rises across a period because more electrons are added at every step.',
      triggerAnswer: 'shielding-rises-across',
      correction:
        'In fact shielding stays roughly the same across a period, because the new electrons go into the same outer shell, not into a new inner shell.',
      reExplanation:
        'Across Period 3 the extra electrons of Mg, Al, Si and so on all join shell 3, the same shell the outer electron of sodium already lives in. The number of inner shells stays at 2 the whole way across the row. With shielding fixed and the proton count rising, the outer shell is pulled in tighter. Shielding rises down a group (new shells), not across a period.',
    },
    // Source: Vanessa Kind, "Beyond Appearances", RSC Education: Year 7 to 12 learners often mix up atomic radius (a size) with atomic mass (a weight), so they predict that heavier atoms must be larger. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on the periodic table.
    {
      id: 'cpt-radius-mis-radius-equals-mass',
      description:
        'Atomic radius and atomic mass are the same thing, so heavier atoms are always larger.',
      triggerAnswer: 'radius-equals-mass',
      correction:
        'In fact atomic radius (a size in picometres) and atomic mass (a weight in atomic mass units) are separate ideas. Heavier atoms can be smaller.',
      reExplanation:
        'Chlorine atoms have a mass of 35.5 u and a radius of 99 pm. Lithium atoms have a mass of 7 u and a radius of 152 pm. Chlorine is heavier yet smaller. Mass tracks the number of protons and neutrons in the nucleus, while radius tracks how far the outer shell sits from that nucleus. Two separate ideas, two separate units, two separate trends across the table.',
    },
    // Source: David Paterson, "Atomic radius: a classic Year 12 stumbling block", RSC Education CPD article (2021-09-14): records that A-level beginners often think the nuclear charge has no effect on size, treating the atom as a fixed shell-by-shell container. Reinforced by AQA A-Level Chemistry examiner report June 2020 (7405/1), Q08.
    {
      id: 'cpt-radius-mis-no-pull',
      description:
        'The number of protons in the nucleus has no effect on the size of the atom.',
      triggerAnswer: 'no-pull',
      correction:
        'In fact more protons means a stronger positive pull on the outer shell, so with the same shielding more protons gives a smaller atom.',
      reExplanation:
        'Compare sodium (11 protons, 186 pm) and magnesium (12 protons, 160 pm). Same period, same shielding, but magnesium has one more proton and ends up 26 pm smaller. That one extra proton makes a real difference. The size of an atom is set by a balance: nuclear pull pulling the outer shell in, and shells plus shielding pushing it out. Change either side and the radius shifts.',
    },
    // Source: Edexcel A-Level Chemistry examiner report June 2018 (9CH0/01), Q05 on bonding and size: candidates "often quoted the same atomic radius for every element they could not place, treating radius as a single fixed number for atoms." Reinforced by CGP A-Level Chemistry on periodic trends.
    {
      id: 'cpt-radius-mis-fixed-radius',
      description:
        'Atomic radius is a single fixed value that is the same for every element.',
      triggerAnswer: 'fixed-radius',
      correction:
        'In fact atomic radius varies widely between elements, from about 30 pm for small atoms like helium up to about 260 pm for large atoms like caesium.',
      reExplanation:
        'Look at any data book of atomic radii. Helium is around 31 pm and caesium is around 260 pm, a range of nearly nine times. Within a single group the value rises steadily down the column, and within a single period it falls left to right. There is no single "atom-sized" number that fits every element: the radius is a real property that changes element by element.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
