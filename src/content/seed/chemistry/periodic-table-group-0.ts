import type { SkillNode } from '@/types/content'

export const group0NobleGases: SkillNode = {
  id: 'chemistry-periodic-table-group-0',
  title: 'Group 0 Noble Gases',
  description:
    'Take a tour of Group 0, the far right column of the periodic table. Helium, neon, argon, krypton, xenon and radon are colourless, odourless, monatomic gases that almost never react. Their unreactivity comes from a full outer shell of electrons: helium has 2 outer electrons (a full shell 1), and the rest each have 8 (a full outer shell). Density and boiling point both rise smoothly going down the group. Each member earns its industrial keep: helium cools NHS MRI magnets and lifts party balloons, neon glows in orange-red shop signs, argon fills double-glazed windows and shields arc welding, krypton brightens runway lights, xenon powers car headlamps, and radon is the radioactive odd one out that seeps from granite under some Cornwall and Devon houses. Modern chemistry has even coaxed a few rare xenon compounds (XeF₂, XeF₄) out of the family, so the rule is "almost never react" rather than "never react".',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'challenge',
  prerequisites: ['chemistry-periodic-table-electron-shells'],
  curriculum: {
    ks3Objective:
      'The properties of Group 0 noble gases; the link between their electron arrangement and their unreactivity; uses of noble gases.',
    awardingBodies: {
      aqa: '4.1.2.4 Group 0 (the noble gases): properties, uses and unreactivity (8462)',
      edexcel: 'Topic 1.35 Group 0 noble gases; unreactivity and uses (1CH0)',
      ocr: 'C1.2b Group 0 noble gases: properties, reactivity, and industrial uses (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-g0-scene-family',
      title: 'The Group 0 Family at a Glance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to meet the six Group 0 noble gases from helium at the top down to radon at the bottom, and read off their outer-shell electron counts.',
      data: {
        viewBox: '0 0 360 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240"><rect x="0" y="0" width="360" height="240" fill="#ECFDF5"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#064E3B">GROUP 0: THE NOBLE GASES</text><g><rect x="140" y="30" width="80" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="180" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">He</text><text x="180" y="56" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=2 outer=2</text><rect x="140" y="60" width="80" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="180" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Ne</text><text x="180" y="86" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=10 outer=8</text><rect x="140" y="90" width="80" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="180" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Ar</text><text x="180" y="116" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=18 outer=8</text><rect x="140" y="120" width="80" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="180" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Kr</text><text x="180" y="146" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=36 outer=8</text><rect x="140" y="150" width="80" height="30" fill="#A7F3D0" stroke="#064E3B" stroke-width="1"/><text x="180" y="166" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Xe</text><text x="180" y="176" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=54 outer=8</text><rect x="140" y="180" width="80" height="30" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="180" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Rn</text><text x="180" y="206" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=86 radioactive</text></g><g><line x1="60" y1="40" x2="138" y2="44" stroke="#064E3B" stroke-width="0.8"/><text x="60" y="44" text-anchor="end" font-size="7" fill="#064E3B">helium: full shell 1</text><line x1="60" y1="74" x2="138" y2="74" stroke="#064E3B" stroke-width="0.8"/><text x="60" y="78" text-anchor="end" font-size="7" fill="#064E3B">neon: 2,8</text><line x1="60" y1="104" x2="138" y2="104" stroke="#064E3B" stroke-width="0.8"/><text x="60" y="108" text-anchor="end" font-size="7" fill="#064E3B">argon: 2,8,8</text><line x1="222" y1="134" x2="300" y2="134" stroke="#064E3B" stroke-width="0.8"/><text x="300" y="138" text-anchor="end" font-size="7" fill="#064E3B">krypton: heavy gas</text><line x1="222" y1="164" x2="300" y2="164" stroke="#064E3B" stroke-width="0.8"/><text x="300" y="168" text-anchor="end" font-size="7" fill="#064E3B">xenon: heavier still</text><line x1="222" y1="194" x2="300" y2="194" stroke="#7F1D1D" stroke-width="0.8"/><text x="300" y="198" text-anchor="end" font-size="7" fill="#7F1D1D">radon: radioactive</text></g><g><line x1="115" y1="30" x2="115" y2="210" stroke="#7C2D12" stroke-width="1.4" marker-end="url(#arrG0)"/><defs><marker id="arrG0" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#7C2D12"/></marker></defs><text x="100" y="120" text-anchor="middle" font-size="6" fill="#7C2D12" font-weight="700" transform="rotate(-90 100 120)">density and boiling point rise going down</text></g><text x="180" y="228" text-anchor="middle" font-size="7" fill="#064E3B" font-weight="700">FULL OUTER SHELL = ALMOST NO REACTIONS</text></svg>',
        hotspots: [
          {
            id: 'cpt-g0-h-helium',
            x: 50,
            y: 19,
            label: 'Helium: full shell 1, 2 outer electrons',
            description:
              'Helium (He, Z=2) sits at the top of Group 0. It has only shell 1, and shell 1 is full with 2 electrons. It is the lightest noble gas, less dense than air, and is used to lift party balloons and to cool the superconducting magnets inside NHS MRI scanners.',
          },
          {
            id: 'cpt-g0-h-neon',
            x: 50,
            y: 32,
            label: 'Neon: 2,8 (a full outer shell)',
            description:
              'Neon (Ne, Z=10) has the electron arrangement 2, 8. Shell 2 is full with 8 electrons. Run an electric current through a tube of neon and it glows the bright orange-red of older Soho or Camden shop signs.',
          },
          {
            id: 'cpt-g0-h-argon',
            x: 50,
            y: 44,
            label: 'Argon: 2,8,8 (a full outer shell)',
            description:
              'Argon (Ar, Z=18) has the arrangement 2, 8, 8. Outer shell 3 carries 8 electrons. Argon is the most common noble gas in the air a learner breathes (about 0.93 percent), and is pumped into double-glazed windows and used as a shielding gas for arc welding.',
          },
          {
            id: 'cpt-g0-h-heavies',
            x: 76,
            y: 60,
            label: 'Krypton and xenon: heavier and denser',
            description:
              'Krypton (Kr, Z=36) and xenon (Xe, Z=54) sit further down the column. Both have 8 outer electrons. Krypton is in some high intensity headlamps and runway lights; xenon glows in car headlamps and is used as a hospital anaesthetic.',
          },
          {
            id: 'cpt-g0-h-radon',
            x: 76,
            y: 82,
            label: 'Radon: the radioactive one',
            description:
              'Radon (Rn, Z=86) is also a noble gas with 8 outer electrons, but its nucleus is radioactive. Radon seeps from granite under some homes in Cornwall and Devon, and Public Health England advises sealed floors and ventilation to keep indoor levels low.',
          },
          {
            id: 'cpt-g0-h-trend',
            x: 32,
            y: 50,
            label: 'Density and boiling point rise going down',
            description:
              'Going from helium at the top down to radon at the bottom, the atoms get bigger and heavier. Density rises (helium is lighter than air, argon is denser, xenon is much denser still). Boiling point also rises down the group, because the intermolecular forces between bigger atoms are stronger.',
          },
        ],
      },
    },
    {
      id: 'cpt-g0-scene-shells',
      title: 'Why a Full Outer Shell Means No Reaction',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the electron arrangements of helium, neon and argon, and the rule that a full outer shell means a noble gas atom has nothing to gain by reacting.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">FULL OUTER SHELLS OF THE NOBLE GASES</text><g><rect x="20" y="30" width="100" height="170" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="70" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">He</text><text x="70" y="58" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=2, 2</text><circle cx="70" cy="110" r="5" fill="#7C2D12"/><text x="70" y="113" text-anchor="middle" font-size="5" fill="#FFFFFF">+2</text><circle cx="70" cy="110" r="22" fill="none" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="58" cy="100" r="2" fill="#1E3A8A"/><circle cx="82" cy="120" r="2" fill="#1E3A8A"/><text x="70" y="160" text-anchor="middle" font-size="6" fill="#1E3A8A">shell 1 full</text><text x="70" y="172" text-anchor="middle" font-size="6" fill="#1E3A8A">(holds 2)</text><text x="70" y="190" text-anchor="middle" font-size="6" fill="#064E3B" font-weight="700">stable</text></g><g><rect x="130" y="30" width="100" height="170" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="180" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Ne</text><text x="180" y="58" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=10, 2,8</text><circle cx="180" cy="115" r="5" fill="#7C2D12"/><text x="180" y="118" text-anchor="middle" font-size="5" fill="#FFFFFF">+10</text><circle cx="180" cy="115" r="14" fill="none" stroke="#1E3A8A" stroke-width="0.7"/><circle cx="180" cy="115" r="28" fill="none" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="170" cy="107" r="2" fill="#1E3A8A"/><circle cx="190" cy="123" r="2" fill="#1E3A8A"/><circle cx="155" cy="115" r="2" fill="#1E3A8A"/><circle cx="205" cy="115" r="2" fill="#1E3A8A"/><circle cx="180" cy="90" r="2" fill="#1E3A8A"/><circle cx="180" cy="140" r="2" fill="#1E3A8A"/><circle cx="161" cy="100" r="2" fill="#1E3A8A"/><circle cx="199" cy="130" r="2" fill="#1E3A8A"/><circle cx="199" cy="100" r="2" fill="#1E3A8A"/><circle cx="161" cy="130" r="2" fill="#1E3A8A"/><text x="180" y="160" text-anchor="middle" font-size="6" fill="#1E3A8A">shell 2 full</text><text x="180" y="172" text-anchor="middle" font-size="6" fill="#1E3A8A">(holds 8)</text><text x="180" y="190" text-anchor="middle" font-size="6" fill="#064E3B" font-weight="700">stable</text></g><g><rect x="240" y="30" width="100" height="170" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="290" y="46" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Ar</text><text x="290" y="58" text-anchor="middle" font-size="6" fill="#1E3A8A">Z=18, 2,8,8</text><circle cx="290" cy="120" r="5" fill="#7C2D12"/><text x="290" y="123" text-anchor="middle" font-size="5" fill="#FFFFFF">+18</text><circle cx="290" cy="120" r="11" fill="none" stroke="#1E3A8A" stroke-width="0.7"/><circle cx="290" cy="120" r="22" fill="none" stroke="#1E3A8A" stroke-width="0.7"/><circle cx="290" cy="120" r="34" fill="none" stroke="#1E3A8A" stroke-width="0.8"/><circle cx="282" cy="115" r="1.8" fill="#1E3A8A"/><circle cx="298" cy="125" r="1.8" fill="#1E3A8A"/><circle cx="279" cy="120" r="1.8" fill="#1E3A8A"/><circle cx="301" cy="120" r="1.8" fill="#1E3A8A"/><circle cx="290" cy="100" r="1.8" fill="#1E3A8A"/><circle cx="290" cy="140" r="1.8" fill="#1E3A8A"/><circle cx="274" cy="108" r="1.8" fill="#1E3A8A"/><circle cx="306" cy="132" r="1.8" fill="#1E3A8A"/><circle cx="274" cy="132" r="1.8" fill="#1E3A8A"/><circle cx="306" cy="108" r="1.8" fill="#1E3A8A"/><circle cx="290" cy="86" r="1.8" fill="#1E3A8A"/><circle cx="290" cy="154" r="1.8" fill="#1E3A8A"/><circle cx="266" cy="115" r="1.8" fill="#1E3A8A"/><circle cx="314" cy="125" r="1.8" fill="#1E3A8A"/><circle cx="268" cy="135" r="1.8" fill="#1E3A8A"/><circle cx="312" cy="105" r="1.8" fill="#1E3A8A"/><circle cx="268" cy="105" r="1.8" fill="#1E3A8A"/><circle cx="312" cy="135" r="1.8" fill="#1E3A8A"/><text x="290" y="170" text-anchor="middle" font-size="6" fill="#1E3A8A">outer shell full</text><text x="290" y="182" text-anchor="middle" font-size="6" fill="#1E3A8A">(8 electrons)</text><text x="290" y="195" text-anchor="middle" font-size="6" fill="#064E3B" font-weight="700">stable</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-g0-h-helium-shell',
            x: 19,
            y: 38,
            label: 'Helium: a full shell 1 (just 2 outer electrons)',
            description:
              'Helium is the odd one out of Group 0 on outer-electron count. Shell 1 only ever holds 2 electrons before it is full, and helium has exactly 2. So helium is in Group 0 because its outer shell is full, even though that outer number is 2 rather than 8.',
          },
          {
            id: 'cpt-g0-h-neon-shell',
            x: 50,
            y: 38,
            label: 'Neon: shell 2 full with 8',
            description:
              'Neon has the configuration 2, 8. Shell 1 holds 2 (full), shell 2 holds 8 (also full). The outer shell number is 8, which is the rule for the rest of Group 0.',
          },
          {
            id: 'cpt-g0-h-argon-shell',
            x: 81,
            y: 38,
            label: 'Argon: 2, 8, 8 with a full outer shell',
            description:
              'Argon has the configuration 2, 8, 8. Three shells are in use. The outer shell carries 8 electrons. Krypton, xenon and radon further down also each have 8 outer electrons.',
          },
          {
            id: 'cpt-g0-h-rule',
            x: 50,
            y: 92,
            label: 'Full outer shell = no need to bond',
            description:
              'Reactions happen when atoms gain, lose or share electrons to reach a full outer shell. A noble gas already has a full outer shell, so it has nothing to gain by reacting and almost no driving force to bond. That is the chemistry rule that holds the family together.',
          },
        ],
      },
    },
    {
      id: 'cpt-g0-scene-uses',
      title: 'Industrial Uses of the Noble Gases',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read where each noble gas earns its keep in UK industry, from MRI scanners and double glazing to runway lights and shop signs.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7C2D12">UK USES OF THE NOBLE GASES</text><g><rect x="20" y="34" width="100" height="78" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="70" y="50" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">He helium</text><text x="70" y="64" text-anchor="middle" font-size="6" fill="#1E3A8A">balloons that float</text><text x="70" y="76" text-anchor="middle" font-size="6" fill="#1E3A8A">NHS MRI magnet</text><text x="70" y="88" text-anchor="middle" font-size="6" fill="#1E3A8A">coolant (liquid He)</text><text x="70" y="100" text-anchor="middle" font-size="6" fill="#1E3A8A">airships</text></g><g><rect x="130" y="34" width="100" height="78" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="180" y="50" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Ne neon</text><text x="180" y="64" text-anchor="middle" font-size="6" fill="#1E3A8A">orange-red shop</text><text x="180" y="76" text-anchor="middle" font-size="6" fill="#1E3A8A">signs (Camden,</text><text x="180" y="88" text-anchor="middle" font-size="6" fill="#1E3A8A">older Soho displays)</text></g><g><rect x="240" y="34" width="100" height="78" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="290" y="50" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Ar argon</text><text x="290" y="64" text-anchor="middle" font-size="6" fill="#1E3A8A">double glazing fill</text><text x="290" y="76" text-anchor="middle" font-size="6" fill="#1E3A8A">arc welding shield</text><text x="290" y="88" text-anchor="middle" font-size="6" fill="#1E3A8A">filament light bulbs</text><text x="290" y="100" text-anchor="middle" font-size="6" fill="#1E3A8A">(stops oxidation)</text></g><g><rect x="20" y="120" width="100" height="78" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="70" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Kr krypton</text><text x="70" y="150" text-anchor="middle" font-size="6" fill="#1E3A8A">high intensity</text><text x="70" y="162" text-anchor="middle" font-size="6" fill="#1E3A8A">headlamps and</text><text x="70" y="174" text-anchor="middle" font-size="6" fill="#1E3A8A">runway lights</text></g><g><rect x="130" y="120" width="100" height="78" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="0.8"/><text x="180" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">Xe xenon</text><text x="180" y="150" text-anchor="middle" font-size="6" fill="#1E3A8A">car headlamps</text><text x="180" y="162" text-anchor="middle" font-size="6" fill="#1E3A8A">hospital</text><text x="180" y="174" text-anchor="middle" font-size="6" fill="#1E3A8A">anaesthesia</text></g><g><rect x="240" y="120" width="100" height="78" rx="4" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.8"/><text x="290" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">Rn radon</text><text x="290" y="150" text-anchor="middle" font-size="6" fill="#7F1D1D">radioactive gas</text><text x="290" y="162" text-anchor="middle" font-size="6" fill="#7F1D1D">seeps from granite</text><text x="290" y="174" text-anchor="middle" font-size="6" fill="#7F1D1D">in Cornwall, Devon</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-g0-h-use-he',
            x: 19,
            y: 33,
            label: 'Helium: balloons and MRI magnets',
            description:
              'Helium is much less dense than air, so it lifts party balloons. Pull a cylinder of liquid helium down to about minus 269 degrees C and it cools the superconducting magnet inside an NHS MRI scanner, making the scan possible. A small amount also goes into airships.',
          },
          {
            id: 'cpt-g0-h-use-ne',
            x: 50,
            y: 33,
            label: 'Neon: orange-red shop signs',
            description:
              'Pass an electric current through a sealed glass tube of neon and the gas glows bright orange-red. Older shop signs in Soho and Camden used neon tubes long before LED signs took over. Other colours are made by mixing in different gases such as argon.',
          },
          {
            id: 'cpt-g0-h-use-ar',
            x: 81,
            y: 33,
            label: 'Argon: double glazing, welding, light bulbs',
            description:
              'Argon is the most common noble gas in air (about 0.93 percent), so it is cheap to collect. The space between the panes of double-glazed windows is filled with argon to slow heat loss. Arc welders pipe argon around the weld to keep oxygen away from the hot metal. Older filament bulbs are also filled with argon so the tungsten filament does not burn away.',
          },
          {
            id: 'cpt-g0-h-use-kr',
            x: 19,
            y: 78,
            label: 'Krypton: bright lamps',
            description:
              'Krypton sits behind some high intensity headlamps and runway lights at airports. The gas does not react with the hot filament, so the lamp lasts longer than it would in air.',
          },
          {
            id: 'cpt-g0-h-use-xe',
            x: 50,
            y: 78,
            label: 'Xenon: car headlamps and anaesthesia',
            description:
              'Xenon arcs glow with a crisp white light, which is why some car headlamps and cinema projectors use xenon lamps. In hospitals, a controlled dose of xenon gas can also be used as a general anaesthetic.',
          },
          {
            id: 'cpt-g0-h-use-rn',
            x: 81,
            y: 78,
            label: 'Radon: the radioactive concern',
            description:
              'Radon is a radioactive noble gas. It seeps out of granite rock under some houses in Cornwall, Devon and parts of Wales. Public Health England rates radon as the second biggest cause of lung cancer in the UK after smoking, and advises sealed floors plus ventilation in affected homes.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-g0-worked-1',
      title: 'Reading why xenon barely reacts from its electron arrangement',
      steps: [
        {
          explanation:
            'Question: a Year 7 learner is told xenon (Xe, Z=54) has the outer-shell electron arrangement (..., 8). Use that to explain in two sentences why xenon barely reacts with other elements.',
        },
        {
          explanation:
            'Step 1: write down what the outer shell tells us. The last number in the configuration is the number of OUTER-shell electrons. For xenon that number is 8, so the outer shell is full.',
          maths: 'outer-shell electrons of Xe = 8 (full)',
        },
        {
          explanation:
            'Step 2: link a full outer shell to reactivity. Reactions happen when atoms gain, lose or share electrons to fill their outer shell. A full outer shell removes that driving force.',
          maths: 'full outer shell -> no driving force to gain, lose or share',
        },
        {
          explanation:
            'Step 3: write the two-sentence answer. "Xenon has a full outer shell of 8 electrons. So it has nothing to gain by bonding with other atoms, which is why it barely reacts."',
        },
        {
          explanation:
            'Note for the careful reader: chemists at university have made a small handful of xenon compounds in special conditions, such as XeF₂ and XeF₄. KS3 textbooks word the rule as "almost never react" rather than "never react" for that reason.',
        },
      ],
    },
    {
      id: 'cpt-g0-worked-2',
      title: 'Picking the right noble gas for a UK industrial job',
      steps: [
        {
          explanation:
            'Question: a designer in Manchester is choosing a noble gas to fill the small gap between the two panes of a double-glazed window. Which Group 0 gas should they pick, and why not the others?',
        },
        {
          explanation:
            'Step 1: write down what the job needs. The gas must not react with anything in the window or with the glass; it should slow heat loss (so denser than air helps); and it should be cheap and available in bulk.',
          maths: 'needs: unreactive, denser than air, cheap, plentiful',
        },
        {
          explanation:
            'Step 2: rule out helium. Helium is unreactive, but it is much less dense than air and very expensive (most UK helium is imported and used by NHS MRI scanners first). Wrong choice.',
        },
        {
          explanation:
            'Step 3: rule out neon, krypton, xenon and radon. Neon is rare and dearer than argon. Krypton and xenon are denser but very costly. Radon is radioactive, which would not be safe in a home window.',
        },
        {
          explanation:
            'Step 4: pick argon. Argon makes up about 0.93 percent of the air we breathe, so it is cheap to extract. It is denser than air, so it slows heat loss between the panes. It is unreactive, so it will not attack the glass or the window seal. Argon is the standard fill for UK double glazing.',
          maths: 'final answer: argon, because it is cheap, plentiful, denser than air, and unreactive',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-g0-q1',
      type: 'multiple-choice',
      stem: 'Which column of the periodic table is called Group 0 and holds the noble gases?',
      tier: 'core',
      options: [
        'The last column on the far right',
        'The middle block of transition metals',
        'The first column on the far left',
        'The top row, Period 1',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpt-g0-mis-group-position',
    },
    {
      id: 'cpt-g0-q2',
      type: 'multiple-choice',
      stem: 'Which of these is NOT a noble gas?',
      tier: 'core',
      options: ['Helium (He)', 'Argon (Ar)', 'Chlorine (Cl)', 'Neon (Ne)'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Noble gases are in Group 0; chlorine is in Group 7.',
    },
    {
      id: 'cpt-g0-q3',
      type: 'numeric-entry',
      stem: 'Out of the six Group 0 elements (He, Ne, Ar, Kr, Xe, Rn), how many are GASES at room temperature in a UK laboratory? Give a single whole number.',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'All Group 0 elements share the same state at room temperature.',
    },
    {
      id: 'cpt-g0-q4',
      type: 'multiple-choice',
      stem: 'Which best describes the colour and smell of pure neon at room temperature?',
      tier: 'core',
      options: [
        'Orange and sweet smelling',
        'Colourless and odourless',
        'Silver and metallic looking',
        'Green and sharp smelling',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-g0-mis-coloured-metal',
    },
    {
      id: 'cpt-g0-q5',
      type: 'multiple-choice',
      stem: 'Why are the Group 0 elements so unreactive compared with the other groups of the periodic table?',
      tier: 'core',
      options: [
        'Their atoms are too big to fit other atoms next to them',
        'Their atoms already have a full outer shell of electrons, so they do not need to bond',
        'They have no electrons at all',
        'They only react with metals, and no metal is ever near them',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-g0-mis-no-electrons',
    },
    {
      id: 'cpt-g0-q6',
      type: 'numeric-entry',
      stem: 'How many electrons are in the OUTER shell of an argon atom (Ar, configuration 2, 8, 8)? Give your answer as a single whole number.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'The outer shell is the LAST number in the configuration.',
    },
    {
      id: 'cpt-g0-q7',
      type: 'numeric-entry',
      stem: 'How many electrons are in the OUTER shell of a HELIUM atom (He, Z=2)? Give your answer as a single whole number. (Helium has only shell 1, and shell 1 is full when it holds this many.)',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Shell 1 fills up at 2 electrons, and helium has exactly that many.',
      misconceptionId: 'cpt-g0-mis-helium-eight',
    },
    {
      id: 'cpt-g0-q8',
      type: 'numeric-entry',
      stem: 'Neon has the electron arrangement 2, 8. Argon has 2, 8, 8. Krypton has 2, 8, 18, 8. How many outer-shell electrons do NEON, ARGON and KRYPTON share in common? Give a single number.',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      hint: 'Read the LAST number for each, and they should all match.',
    },
    {
      id: 'cpt-g0-q9',
      type: 'numeric-entry',
      stem: 'Helium has atomic number 2 and neon has atomic number 10. How many protons does a NEON atom have in its nucleus? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 10,
      xpValue: 15,
      hint: 'Atomic number equals the number of protons.',
    },
    {
      id: 'cpt-g0-q10',
      type: 'multiple-choice',
      stem: 'A NHS hospital orders a cylinder of liquid helium for its MRI scanner. Which property of helium makes it suitable for cooling the magnet?',
      tier: 'confident',
      options: [
        'Helium reacts strongly with the magnet to give off heat',
        'Helium boils at about minus 269 degrees C and is unreactive, so it cools the magnet without attacking the metal',
        'Helium is the heaviest noble gas, so it presses down on the magnet',
        'Helium is a magnet itself',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'cpt-g0-q11',
      type: 'multiple-choice',
      stem: 'A pupil in Camden walks past an older shop sign glowing a steady orange-red. Which Group 0 gas is most likely inside the glass tube?',
      tier: 'confident',
      options: ['Argon', 'Helium', 'Krypton', 'Neon'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The classic orange-red glow is the giveaway colour for this gas.',
    },
    {
      id: 'cpt-g0-q12',
      type: 'multiple-choice',
      stem: 'A Manchester window fitter pumps a gas into the gap between the two panes of a double-glazed window to slow heat loss. Which gas does the trade most commonly use?',
      tier: 'confident',
      options: ['Argon', 'Helium', 'Neon', 'Radon'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'It is the most common noble gas in the air, so it is cheap and plentiful.',
    },
    {
      id: 'cpt-g0-q13',
      type: 'drag-order',
      stem: 'Place these four noble gases in order from LIGHTEST (least dense) at the top to HEAVIEST (most dense) at the bottom.',
      tier: 'challenge',
      items: ['Argon', 'Krypton', 'Helium', 'Neon'],
      correctOrder: [2, 3, 0, 1],
      xpValue: 25,
      hint: 'Density rises going down Group 0, from helium at the top to radon at the bottom.',
    },
    {
      id: 'cpt-g0-q14',
      type: 'numeric-entry',
      stem: 'Helium boils at about minus 269 degrees C and xenon boils at about minus 108 degrees C. By roughly how many degrees C does the boiling point RISE going from helium to xenon? Give the size of the rise as a positive whole number.',
      tier: 'challenge',
      correctAnswer: 161,
      tolerance: 2,
      unit: 'degrees C',
      xpValue: 25,
      hint: 'Subtract the smaller (more negative) number from the larger one: (-108) - (-269).',
    },
    {
      id: 'cpt-g0-q15',
      type: 'spot-misconception',
      stem: 'A Year 7 pupil writes: "All Group 0 noble gases have 8 electrons in their outer shell, including helium." Is this right?',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. Every Group 0 element has 8 outer electrons.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Helium has only 2 outer electrons, but shell 1 is full at 2 so helium still belongs in Group 0. The rest of Group 0 do have 8 outer electrons.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-g0-mis-helium-eight',
    },
    {
      id: 'cpt-g0-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: explain in three steps why neon makes a good filler for an older shop sign.',
      tier: 'confident',
      steps: [
        'Neon is a Group 0 noble gas, so it is unreactive and will not attack the glass or the electrodes of the tube.',
        null,
        'So neon stays colourless and odourless in the dark tube, but glows the bright orange-red of a Camden shop sign when the current is on.',
      ],
      missingStepIndex: 1,
      correctStep:
        'When an electric current passes through the low-pressure neon gas inside the tube, the gas atoms give off a characteristic orange-red glow.',
      xpValue: 20,
    },
    {
      id: 'cpt-g0-q17',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each marker on the simplified Group 0 strip.',
      tier: 'confident',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#ECFDF5"/><rect x="120" y="20" width="80" height="30" fill="#A7F3D0" stroke="#064E3B"/><text x="160" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">He</text><rect x="120" y="50" width="80" height="30" fill="#A7F3D0" stroke="#064E3B"/><text x="160" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Ne</text><rect x="120" y="80" width="80" height="30" fill="#A7F3D0" stroke="#064E3B"/><text x="160" y="98" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Ar</text><rect x="120" y="110" width="80" height="30" fill="#A7F3D0" stroke="#064E3B"/><text x="160" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Kr</text><rect x="120" y="140" width="80" height="30" fill="#A7F3D0" stroke="#064E3B"/><text x="160" y="158" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Xe</text><rect x="120" y="170" width="80" height="30" fill="#FCA5A5" stroke="#7F1D1D"/><text x="160" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Rn</text></svg>',
      hotspots: [
        { id: 'cpt-g0-q17-h1', x: 30, y: 16, correctLabel: 'Helium: 2 outer electrons' },
        { id: 'cpt-g0-q17-h2', x: 30, y: 30, correctLabel: 'Neon: orange-red signs' },
        { id: 'cpt-g0-q17-h3', x: 30, y: 44, correctLabel: 'Argon: double glazing filler' },
        { id: 'cpt-g0-q17-h4', x: 30, y: 58, correctLabel: 'Krypton: runway lights' },
        { id: 'cpt-g0-q17-h5', x: 30, y: 72, correctLabel: 'Xenon: car headlamps' },
        { id: 'cpt-g0-q17-h6', x: 30, y: 86, correctLabel: 'Radon: radioactive' },
      ],
      labels: [
        'Helium: 2 outer electrons',
        'Neon: orange-red signs',
        'Argon: double glazing filler',
        'Krypton: runway lights',
        'Xenon: car headlamps',
        'Radon: radioactive',
        'Chlorine: pale yellow-green gas',
        'Sodium: reactive metal',
      ],
      xpValue: 20,
    },
    {
      id: 'cpt-g0-q18',
      type: 'multiple-choice',
      stem: 'A learner reads that helium balloons float upwards in a UK supermarket but argon-filled balloons do NOT. Which property of the two gases explains the difference?',
      tier: 'challenge',
      options: [
        'Helium reacts with the air, but argon does not',
        'Helium has 8 outer electrons, but argon has only 2',
        'Helium is less dense than air, but argon is denser than air',
        'Helium is at room temperature, but argon is cooler',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-g0-mis-heavier-than-air',
    },
    {
      id: 'cpt-g0-q19',
      type: 'multiple-choice',
      stem: 'In 1894 a UK scientist (Lord Rayleigh) and his collaborator William Ramsay discovered argon by carefully measuring the density of nitrogen from air and finding a small unexplained extra mass. Argon was not in Mendeleev\'s original 1869 periodic table. Why not?',
      tier: 'challenge',
      options: [
        'In 1869 nobody had yet discovered the noble gases, because they barely react and are hard to spot in air; argon was only isolated in 1894',
        'Mendeleev refused to include any gases in his table',
        'Argon had been hidden in a laboratory drawer and was forgotten',
        'Mendeleev did include argon, just under a different name',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    {
      id: 'cpt-g0-q20',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Noble gases never react with anything, ever, under any conditions." A teacher gently corrects them. Which correction is best?',
      tier: 'challenge',
      options: [
        'Right idea, but they react with everything at room temperature',
        'They are wrong: noble gases react more strongly than any other group',
        'They are right and there are no known exceptions at all',
        'In KS3 we say noble gases ALMOST never react. University chemists have made a tiny number of xenon compounds (such as XeF₂ and XeF₄) under special conditions, so the rule is "almost never", not "never"',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpt-g0-mis-never-react',
    },
    {
      id: 'cpt-g0-q21',
      type: 'spot-misconception',
      stem: 'A pupil in Plymouth says: "Radon is a noble gas, and all noble gases are safe. So radon is safe and there is nothing to worry about under any Devon or Cornwall house."',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. Radon is just another safe noble gas.',
          isMisconception: true,
        },
        {
          text: 'The pupil is partly wrong. Radon is unreactive like the rest of Group 0, but it is RADIOACTIVE. It seeps from granite under some Cornwall and Devon houses and Public Health England rates it as the second biggest cause of UK lung cancer after smoking.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'cpt-g0-mis-radon-safe',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 part (c) on Group 0: candidates "frequently stated that helium has 8 electrons in its outer shell, applying the Group 0 rule without noticing that shell 1 only ever holds 2." Reinforced by CGP KS3 Chemistry Study Book p.54 Common Mistake box on the noble gases.
    {
      id: 'cpt-g0-mis-helium-eight',
      description:
        'Helium has 8 outer-shell electrons, the same as the other noble gases.',
      triggerAnswer: 'helium-eight',
      correction:
        'Helium has only 2 outer electrons. Shell 1 is full at 2, so helium is still in Group 0 even though its outer count is 2 not 8.',
      reExplanation:
        'Shell 1 only ever holds 2 electrons before it is full. Helium (Z=2) puts both of those into shell 1, so its outer shell is shell 1 and it is full. That is why helium sits in Group 0 alongside neon (2, 8) and argon (2, 8, 8). Group 0 is really about a full outer shell, not about the number 8.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on the noble gases: candidates "wrote that noble gases do not react because they have no electrons at all", confusing unreactivity with the absence of electrons. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on Group 0.
    {
      id: 'cpt-g0-mis-no-electrons',
      description:
        'Noble gases do not react because they have no electrons.',
      triggerAnswer: 'no-electrons',
      correction:
        'In fact noble gases have a normal number of electrons. They do not react because their outer shell is already FULL, so they have nothing to gain by bonding.',
      reExplanation:
        'A neon atom has 10 electrons arranged 2, 8. An argon atom has 18 electrons arranged 2, 8, 8. The reason they barely react is the SHAPE of those electrons: the outer shell is already full. Reactions happen when atoms gain, lose or share electrons to fill an outer shell. A full outer shell removes the reason to bond, so the atom drifts about as a single gas particle.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q05 on uses of noble gases: candidates "claimed all noble gases are denser than air, so balloons of any noble gas would fall" - missing that helium is less dense than air. Reinforced by CGP KS3 Chemistry Study Book p.54 on density trends in Group 0.
    {
      id: 'cpt-g0-mis-heavier-than-air',
      description:
        'All Group 0 noble gases are denser than air, so a balloon of any of them would sink in a UK shop.',
      triggerAnswer: 'heavier-than-air',
      correction:
        'Helium is much LESS dense than air, so helium balloons float. Argon and the heavier noble gases are denser than air, so argon-filled balloons would sink.',
      reExplanation:
        'Density rises going DOWN Group 0. Helium at the top is lighter than the nitrogen and oxygen of normal air, so a helium balloon lifts off the shop ceiling. Neon is about the same as air. From argon down, the gases are denser than air. So "all noble gases float" is wrong; only the very lightest one does.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H), Q07 on Group 0: candidates "wrote that noble gases never react with anything under any conditions" - missing the modern XeF compounds. Reinforced by RSC Education article "Noble gas chemistry: more than a name" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-g0-mis-never-react',
      description:
        'Noble gases never react with any other element under any conditions.',
      triggerAnswer: 'never-react',
      correction:
        'Almost never react is the safer rule. University chemists have made a handful of xenon compounds (XeF₂, XeF₄) under special conditions.',
      reExplanation:
        'For KS3 the working rule "noble gases almost never react" gets every school chemistry answer right. The careful version is that xenon, the bigger and easier-to-coax member of Group 0, has been pushed into a few compounds with fluorine in labs. Helium, neon and argon have no stable compounds at all. So the rule still holds in spirit: bonding is the rare exception, not the routine.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q04 on element states and groups: candidates "labelled argon as a silver metal" or "neon as a yellow gas", failing to recall that all noble gases are colourless and non-metallic. Reinforced by CGP KS3 Chemistry Study Book p.53 picture key on Group 0.
    {
      id: 'cpt-g0-mis-coloured-metal',
      description:
        'Noble gases are coloured silvery metals, like argon being a silver metallic gas.',
      triggerAnswer: 'coloured-metal',
      correction:
        'Every Group 0 element is a COLOURLESS and odourless GAS at room temperature, not a metal. Neon only glows orange-red when an electric current passes through it.',
      reExplanation:
        'A sealed flask of pure neon in daylight looks completely empty. So does a flask of argon or helium. Group 0 elements are gases made of single atoms, with no colour and no smell. The bright orange-red of a Camden shop sign appears only when an electric current excites the neon atoms in the tube. Switch the current off and the colour vanishes. Nothing about Group 0 is metallic.',
    },
    // Source: Public Health England (now UK Health Security Agency) guidance "Radon in homes" (gov.uk, accessed 2026-05-10) and BBC Bitesize KS3 Chemistry "Group 0" page: learners frequently assume all noble gases are equally safe, missing that radon is radioactive and is a UK indoor air concern in granite regions. Reinforced by CGP KS3 Chemistry Study Book p.54 safety note.
    {
      id: 'cpt-g0-mis-radon-safe',
      description:
        'Radon is just another safe noble gas, so it cannot harm a Cornwall or Devon family.',
      triggerAnswer: 'radon-safe',
      correction:
        'Radon is unreactive like the rest of Group 0, but it is RADIOACTIVE. Public Health England rates it as the second biggest cause of UK lung cancer after smoking.',
      reExplanation:
        'Most noble gases are safe to breathe in small amounts. Radon is the outlier. Its nucleus is unstable and gives off radiation as it decays. Granite under parts of Cornwall, Devon and Wales lets radon seep up through floors and gather indoors. UK guidance is to seal floors, add ventilation, and use a cheap home test kit. Unreactive does not mean harmless when the atom is also radioactive.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2017 (8462/1F), Q03 on periodic table layout: candidates "placed Group 0 on the far left, swapping it with Group 1" or "called Group 0 the eighth group from the left" without noticing the UK GCSE numbering. Reinforced by BBC Bitesize KS3 Chemistry diagram of the modern periodic table.
    {
      id: 'cpt-g0-mis-group-position',
      description:
        'Group 0 sits on the far left of the periodic table, next to or in place of the alkali metals.',
      triggerAnswer: 'group-position',
      correction:
        'Group 0 sits on the far RIGHT of the periodic table, the last column. Group 1 (the alkali metals) sits on the far left.',
      reExplanation:
        'Picture the wall chart. Hydrogen is top left. The alkali metals (Li, Na, K) drop straight down on the far LEFT in Group 1. Now jump to the opposite side. The very last column on the RIGHT is Group 0, holding helium at the top and radon at the bottom. Group 0 closes the table; Group 1 opens it.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
