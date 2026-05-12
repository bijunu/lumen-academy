import type { SkillNode } from '@/types/content'

export const ionicBondingIntro: SkillNode = {
  id: 'chemistry-atoms-ionic-bonding-intro',
  title: 'Introduction to Ionic Bonding',
  description:
    'Atoms are most stable when their outer shell is full, like a noble gas. Metal atoms in groups 1 and 2 have just 1 or 2 outer electrons, which they readily lose to become positively charged ions (cations). Non-metal atoms in groups 6 and 7 are 1 or 2 electrons short of a full shell, which they readily gain to become negatively charged ions (anions). The electron is transferred from the metal to the non-metal, and the oppositely charged ions attract one another to form an ionic compound such as sodium chloride (NaCl), magnesium oxide (MgO) or calcium chloride (CaCl2). Use the 2, 8, 8 rule, the group number and an electron count to work out the charge on a predicted ion and to spot the standard misconceptions about transfer, sharing and cation sign.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'challenge',
  prerequisites: ['chemistry-atoms-electron-shells'],
  curriculum: {
    ks3Objective:
      'The basic process of ionic bonding: electron transfer between atoms; formation of cations and anions; role of electron shells in electron loss and gain (qualitative introduction).',
    awardingBodies: {
      aqa: '4.2.1.1 Ionic bonding; electron transfer; formation of ions (8462)',
      edexcel: 'Topic 1.4 Ionic bonding; formation of cations and anions (1CH0)',
      ocr: 'C1.3a Ionic bonding and formation of ionic compounds (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-ionic-scene-1',
      title: 'Why Atoms Want a Full Outer Shell',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read why a full outer shell makes an atom stable, and why metals lose electrons while non-metals gain them.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><text x="160" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">THE FULL OUTER SHELL GOAL</text><g><circle cx="70" cy="110" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="8" fill="#1E3A8A"/><text x="70" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Ne</text><circle cx="70" cy="92" r="2.5" fill="#3B82F6"/><circle cx="70" cy="128" r="2.5" fill="#3B82F6"/><circle cx="52" cy="110" r="2.5" fill="#3B82F6"/><circle cx="88" cy="110" r="2.5" fill="#3B82F6"/><circle cx="58" cy="96" r="2.5" fill="#3B82F6"/><circle cx="82" cy="96" r="2.5" fill="#3B82F6"/><circle cx="58" cy="124" r="2.5" fill="#3B82F6"/><circle cx="82" cy="124" r="2.5" fill="#3B82F6"/><circle cx="40" cy="110" r="2.5" fill="#3B82F6"/><circle cx="100" cy="110" r="2.5" fill="#3B82F6"/><text x="70" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Neon: 2, 8</text><text x="70" y="184" text-anchor="middle" font-size="7" fill="#475569">full outer shell, very stable</text></g><g><circle cx="180" cy="110" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="180" cy="110" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="180" cy="110" r="8" fill="#1E3A8A"/><text x="180" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Na</text><circle cx="180" cy="92" r="2.5" fill="#3B82F6"/><circle cx="180" cy="128" r="2.5" fill="#3B82F6"/><circle cx="162" cy="110" r="2.5" fill="#3B82F6"/><circle cx="198" cy="110" r="2.5" fill="#3B82F6"/><circle cx="168" cy="96" r="2.5" fill="#3B82F6"/><circle cx="192" cy="96" r="2.5" fill="#3B82F6"/><circle cx="168" cy="124" r="2.5" fill="#3B82F6"/><circle cx="192" cy="124" r="2.5" fill="#3B82F6"/><circle cx="180" cy="70" r="2.5" fill="#DC2626"/><text x="180" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Sodium: 2, 8, 1</text><text x="180" y="184" text-anchor="middle" font-size="7" fill="#475569">1 outer electron, easy to lose</text></g><g><circle cx="280" cy="110" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="280" cy="110" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="280" cy="110" r="8" fill="#1E3A8A"/><text x="280" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Cl</text><circle cx="280" cy="92" r="2.5" fill="#3B82F6"/><circle cx="280" cy="128" r="2.5" fill="#3B82F6"/><circle cx="262" cy="110" r="2.5" fill="#3B82F6"/><circle cx="298" cy="110" r="2.5" fill="#3B82F6"/><circle cx="268" cy="96" r="2.5" fill="#3B82F6"/><circle cx="292" cy="96" r="2.5" fill="#3B82F6"/><circle cx="268" cy="124" r="2.5" fill="#3B82F6"/><circle cx="292" cy="124" r="2.5" fill="#3B82F6"/><circle cx="265" cy="78" r="2.5" fill="#3B82F6"/><circle cx="295" cy="78" r="2.5" fill="#3B82F6"/><circle cx="265" cy="142" r="2.5" fill="#3B82F6"/><circle cx="295" cy="142" r="2.5" fill="#3B82F6"/><circle cx="250" cy="110" r="2.5" fill="#3B82F6"/><circle cx="310" cy="110" r="2.5" fill="#3B82F6"/><circle cx="280" cy="70" r="2.5" fill="#3B82F6"/><text x="280" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Chlorine: 2, 8, 7</text><text x="280" y="184" text-anchor="middle" font-size="7" fill="#475569">1 short of full, easy to gain</text></g></svg>',
        hotspots: [
          {
            id: 'cae-ionic-h-stable',
            x: 22,
            y: 40,
            label: 'Full outer shell = stable',
            description:
              'Noble gases like neon (2, 8) and argon (2, 8, 8) already have a full outer shell. They are very stable and almost never react. Every other atom behaves as if it "wants" to reach the same full-shell arrangement.',
          },
          {
            id: 'cae-ionic-h-metal',
            x: 56,
            y: 40,
            label: 'Group 1 metal: 1 outer electron to lose',
            description:
              'Sodium (2, 8, 1) has just 1 outer electron. Losing it leaves a stable 2, 8 arrangement underneath, the same as neon. Losing 1 electron is much easier than gaining 7.',
          },
          {
            id: 'cae-ionic-h-nonmetal',
            x: 88,
            y: 40,
            label: 'Group 7 non-metal: 1 short of full',
            description:
              'Chlorine (2, 8, 7) is just 1 electron short of a full shell. Gaining 1 electron gives it the stable 2, 8, 8 arrangement of argon. Gaining 1 is much easier than losing 7.',
          },
          {
            id: 'cae-ionic-h-route',
            x: 50,
            y: 90,
            label: 'Two routes, one destination',
            description:
              'Metals on the left of the periodic table lose their few outer electrons. Non-metals on the right gain a few. Both routes end with a full outer shell that matches the nearest noble gas.',
          },
        ],
      },
    },
    {
      id: 'cae-ionic-scene-2',
      title: 'Sodium and Chlorine: One Electron Transferred',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the transfer diagram to see how one electron moves from a sodium atom to a chlorine atom, turning both into ions.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SODIUM + CHLORINE: ELECTRON TRANSFER</text><g><circle cx="70" cy="110" r="32" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="16" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="8" fill="#1E3A8A"/><text x="70" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Na</text><circle cx="70" cy="94" r="2.5" fill="#3B82F6"/><circle cx="70" cy="126" r="2.5" fill="#3B82F6"/><circle cx="54" cy="110" r="2.5" fill="#3B82F6"/><circle cx="86" cy="110" r="2.5" fill="#3B82F6"/><circle cx="60" cy="98" r="2.5" fill="#3B82F6"/><circle cx="80" cy="98" r="2.5" fill="#3B82F6"/><circle cx="60" cy="122" r="2.5" fill="#3B82F6"/><circle cx="80" cy="122" r="2.5" fill="#3B82F6"/><circle cx="70" cy="78" r="3" fill="#DC2626" stroke="#7F1D1D" stroke-width="0.8"/><text x="70" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Na atom: 2, 8, 1</text></g><g><circle cx="290" cy="110" r="38" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="290" cy="110" r="18" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="290" cy="110" r="8" fill="#1E3A8A"/><text x="290" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Cl</text><circle cx="290" cy="92" r="2.5" fill="#3B82F6"/><circle cx="290" cy="128" r="2.5" fill="#3B82F6"/><circle cx="272" cy="110" r="2.5" fill="#3B82F6"/><circle cx="308" cy="110" r="2.5" fill="#3B82F6"/><circle cx="278" cy="96" r="2.5" fill="#3B82F6"/><circle cx="302" cy="96" r="2.5" fill="#3B82F6"/><circle cx="278" cy="124" r="2.5" fill="#3B82F6"/><circle cx="302" cy="124" r="2.5" fill="#3B82F6"/><circle cx="275" cy="78" r="2.5" fill="#3B82F6"/><circle cx="305" cy="78" r="2.5" fill="#3B82F6"/><circle cx="275" cy="142" r="2.5" fill="#3B82F6"/><circle cx="305" cy="142" r="2.5" fill="#3B82F6"/><circle cx="260" cy="110" r="2.5" fill="#3B82F6"/><circle cx="320" cy="110" r="2.5" fill="#3B82F6"/><text x="290" y="180" text-anchor="middle" font-size="8" fill="#1E3A8A">Cl atom: 2, 8, 7</text></g><path d="M 110 78 Q 180 40 250 78" fill="none" stroke="#DC2626" stroke-width="1.6" marker-end="url(#arr)"/><defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/></marker></defs><text x="180" y="50" text-anchor="middle" font-size="8" font-weight="600" fill="#DC2626">1 electron transferred</text><text x="70" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">Na+ (cation): 2, 8</text><text x="290" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">Cl- (anion): 2, 8, 8</text></svg>',
        hotspots: [
          {
            id: 'cae-ionic-h-before',
            x: 20,
            y: 50,
            label: 'Before: neutral Na and Cl atoms',
            description:
              'Sodium has 11 protons and 11 electrons (2, 8, 1). Chlorine has 17 protons and 17 electrons (2, 8, 7). Both atoms are neutral because protons and electrons balance.',
          },
          {
            id: 'cae-ionic-h-arrow',
            x: 50,
            y: 22,
            label: 'Electron transfer (not sharing)',
            description:
              'The single outer electron on sodium moves over to chlorine. The electron is transferred (it changes owner), not shared between the two atoms.',
          },
          {
            id: 'cae-ionic-h-cation',
            x: 18,
            y: 90,
            label: 'After: Na+ cation',
            description:
              'Sodium now has 11 protons but only 10 electrons. There is 1 more positive charge than negative, so the ion has a charge of 1+. The new configuration is 2, 8 (like neon).',
          },
          {
            id: 'cae-ionic-h-anion',
            x: 80,
            y: 90,
            label: 'After: Cl- anion',
            description:
              'Chlorine now has 17 protons and 18 electrons. There is 1 more negative charge than positive, so the ion has a charge of 1-. The new configuration is 2, 8, 8 (like argon).',
          },
        ],
      },
    },
    {
      id: 'cae-ionic-scene-3',
      title: 'Magnesium and Oxygen: Two Electrons Transferred',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a group 2 metal loses 2 electrons to a group 6 non-metal, giving each ion a charge of 2.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">MAGNESIUM + OXYGEN: TWO ELECTRONS TRANSFERRED</text><g><circle cx="70" cy="110" r="32" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="16" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="70" cy="110" r="8" fill="#1E3A8A"/><text x="70" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">Mg</text><circle cx="70" cy="94" r="2.5" fill="#3B82F6"/><circle cx="70" cy="126" r="2.5" fill="#3B82F6"/><circle cx="54" cy="110" r="2.5" fill="#3B82F6"/><circle cx="86" cy="110" r="2.5" fill="#3B82F6"/><circle cx="60" cy="98" r="2.5" fill="#3B82F6"/><circle cx="80" cy="98" r="2.5" fill="#3B82F6"/><circle cx="60" cy="122" r="2.5" fill="#3B82F6"/><circle cx="80" cy="122" r="2.5" fill="#3B82F6"/><circle cx="60" cy="80" r="3" fill="#DC2626" stroke="#7F1D1D" stroke-width="0.8"/><circle cx="80" cy="80" r="3" fill="#DC2626" stroke="#7F1D1D" stroke-width="0.8"/><text x="70" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">Mg atom: 2, 8, 2</text></g><g><circle cx="290" cy="110" r="22" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="290" cy="110" r="8" fill="#1E3A8A"/><text x="290" y="113" text-anchor="middle" font-size="7" fill="#FBBF24" font-weight="600">O</text><circle cx="290" cy="96" r="2.5" fill="#3B82F6"/><circle cx="290" cy="124" r="2.5" fill="#3B82F6"/><circle cx="276" cy="110" r="2.5" fill="#3B82F6"/><circle cx="304" cy="110" r="2.5" fill="#3B82F6"/><circle cx="280" cy="100" r="2.5" fill="#3B82F6"/><circle cx="300" cy="100" r="2.5" fill="#3B82F6"/><circle cx="280" cy="120" r="2.5" fill="#3B82F6"/><circle cx="300" cy="120" r="2.5" fill="#3B82F6"/><text x="290" y="170" text-anchor="middle" font-size="8" fill="#1E3A8A">O atom: 2, 6</text></g><path d="M 110 80 Q 180 40 270 100" fill="none" stroke="#DC2626" stroke-width="1.6" marker-end="url(#arrow2)"/><defs><marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/></marker></defs><text x="180" y="50" text-anchor="middle" font-size="8" font-weight="600" fill="#DC2626">2 electrons transferred</text><text x="70" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">Mg2+ (cation): 2, 8</text><text x="290" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">O2- (anion): 2, 8</text></svg>',
        hotspots: [
          {
            id: 'cae-ionic-h-mg-before',
            x: 20,
            y: 45,
            label: 'Mg has 2 outer electrons',
            description:
              'Magnesium (Z=12) has the configuration 2, 8, 2. Losing both outer-shell electrons would leave the stable 2, 8 underneath, matching neon.',
          },
          {
            id: 'cae-ionic-h-o-before',
            x: 80,
            y: 45,
            label: 'Oxygen is 2 short of full',
            description:
              'Oxygen (Z=8) has the configuration 2, 6. Gaining 2 more electrons would fill its outer shell to 8, matching neon.',
          },
          {
            id: 'cae-ionic-h-two-transfer',
            x: 50,
            y: 22,
            label: 'Two electrons move across',
            description:
              'Both outer electrons of the magnesium atom are transferred to the oxygen atom. The pair of electrons is taken from one place and added to the other; nothing is shared.',
          },
          {
            id: 'cae-ionic-h-mg2plus',
            x: 18,
            y: 90,
            label: 'Mg2+ has a 2+ charge',
            description:
              'Mg now has 12 protons but only 10 electrons. That is 2 more positive charges than negative, so the ion is Mg2+, with configuration 2, 8.',
          },
          {
            id: 'cae-ionic-h-o2minus',
            x: 80,
            y: 90,
            label: 'O2- has a 2- charge',
            description:
              'O now has 8 protons and 10 electrons. That is 2 more negative charges than positive, so the ion is O2-, with configuration 2, 8.',
          },
        ],
      },
    },
    {
      id: 'cae-ionic-scene-4',
      title: 'Opposite Charges Attract: Building the Ionic Compound',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the salt-shaker scene to see how cations and anions attract to form a neutral ionic compound like the salt on every UK dinner table.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><text x="160" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SALT ON THE TABLE: Na+ AND Cl- ATTRACT</text><g><path d="M 50 50 L 80 50 L 80 40 L 60 40 L 60 30 L 70 30 L 70 25 L 60 25 L 60 30 L 60 30 Z" fill="#94A3B8" stroke="#1E3A8A" stroke-width="0.6"/><rect x="40" y="50" width="50" height="80" fill="#E2E8F0" stroke="#1E3A8A" stroke-width="0.6"/><circle cx="50" cy="58" r="1.5" fill="#1E3A8A"/><circle cx="60" cy="58" r="1.5" fill="#1E3A8A"/><circle cx="70" cy="58" r="1.5" fill="#1E3A8A"/><circle cx="80" cy="58" r="1.5" fill="#1E3A8A"/><circle cx="50" cy="66" r="1.5" fill="#1E3A8A"/><circle cx="60" cy="66" r="1.5" fill="#1E3A8A"/><circle cx="70" cy="66" r="1.5" fill="#1E3A8A"/><circle cx="80" cy="66" r="1.5" fill="#1E3A8A"/><text x="65" y="150" text-anchor="middle" font-size="8" fill="#1E3A8A">UK table salt</text><text x="65" y="162" text-anchor="middle" font-size="7" fill="#475569">(sodium chloride)</text></g><g><rect x="130" y="40" width="170" height="140" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="215" y="58" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">Ionic compound: NaCl</text><circle cx="160" cy="80" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="160" y="83" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="200" cy="80" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="200" y="83" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text><circle cx="240" cy="80" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="240" y="83" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="280" cy="80" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="280" y="83" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text><circle cx="160" cy="120" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="160" y="123" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text><circle cx="200" cy="120" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="200" y="123" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="240" cy="120" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="240" y="123" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text><circle cx="280" cy="120" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="280" y="123" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="160" cy="160" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="160" y="163" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="200" cy="160" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="200" y="163" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text><circle cx="240" cy="160" r="9" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.6"/><text x="240" y="163" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">Na+</text><circle cx="280" cy="160" r="11" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.6"/><text x="280" y="163" text-anchor="middle" font-size="7" font-weight="600" fill="#1E3A8A">Cl-</text></g><text x="215" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A">1 Na+ for every 1 Cl-, overall neutral</text></svg>',
        hotspots: [
          {
            id: 'cae-ionic-h-attract',
            x: 55,
            y: 40,
            label: 'Opposite charges attract',
            description:
              'A positive Na+ cation and a negative Cl- anion attract each other. This electrostatic attraction between oppositely charged ions is what we call the ionic bond.',
          },
          {
            id: 'cae-ionic-h-ratio',
            x: 60,
            y: 75,
            label: 'Ratio gives overall neutral charge',
            description:
              'Each Na+ has charge 1+. Each Cl- has charge 1-. Putting them together in a 1 to 1 ratio cancels the charges, so the ionic compound NaCl is overall neutral. That is why the formula is NaCl, not Na2Cl or NaCl2.',
          },
          {
            id: 'cae-ionic-h-lattice',
            x: 75,
            y: 60,
            label: 'A regular pattern: the ionic lattice',
            description:
              'Cations and anions pack into a regular three-dimensional pattern. Each Na+ is surrounded by Cl- and vice versa, building the crystals you can see in table salt.',
          },
          {
            id: 'cae-ionic-h-uk-context',
            x: 20,
            y: 70,
            label: 'On every UK dinner table',
            description:
              'Sodium chloride (table salt) sits in salt cellars in school canteens and homes across the UK. Each tiny crystal is built from billions of Na+ and Cl- ions held together by ionic bonds.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-ionic-worked-1',
      title: 'Forming sodium chloride from sodium and chlorine atoms',
      steps: [
        {
          explanation:
            'Question: A pupil at a Birmingham grammar school is shown a sodium atom (Z = 11) and a chlorine atom (Z = 17) and is asked to explain how they form sodium chloride (NaCl). Use the 2, 8, 8 rule to track each electron.',
        },
        {
          explanation:
            'Step 1: write the electron configurations. Sodium has 11 electrons: 2, 8, 1. Chlorine has 17 electrons: 2, 8, 7. Sodium has 1 outer electron; chlorine is 1 short of a full outer shell.',
          maths: 'Na: 2, 8, 1   Cl: 2, 8, 7',
        },
        {
          explanation:
            'Step 2: identify which atom loses and which gains. The metal (Na) loses its 1 outer electron because losing 1 is easier than gaining 7. The non-metal (Cl) gains 1 electron because gaining 1 is easier than losing 7.',
        },
        {
          explanation:
            'Step 3: transfer the electron. The single outer electron of sodium is given to chlorine. This is a transfer, not a sharing.',
          maths: 'Na -> Na+ + e-   then   Cl + e- -> Cl-',
        },
        {
          explanation:
            'Step 4: work out the charge on each ion. Sodium loses 1 negative electron and now has 11 protons and 10 electrons, giving a charge of 1+ (Na+). Chlorine gains 1 negative electron and now has 17 protons and 18 electrons, giving a charge of 1- (Cl-). Both ions now have a full outer shell (Na+: 2, 8; Cl-: 2, 8, 8).',
          maths: 'Na+: 2, 8 (like Ne)   Cl-: 2, 8, 8 (like Ar)',
        },
        {
          explanation:
            'Step 5: build the compound. The Na+ and Cl- ions attract each other because of opposite charges. They pack in a 1 to 1 ratio so the overall charge is zero, giving sodium chloride: NaCl. This is the ionic bond that holds together every grain of table salt.',
          maths: 'Na+ + Cl-  ->  NaCl (overall neutral)',
        },
      ],
    },
    {
      id: 'cae-ionic-worked-2',
      title: 'Forming magnesium oxide from magnesium and oxygen atoms',
      steps: [
        {
          explanation:
            'Question: A Year 7 chemist sees magnesium ribbon burn with a bright white flame in oxygen during a school demo. The product is magnesium oxide (MgO). Use the 2, 8, 8 rule to explain the bonding.',
        },
        {
          explanation:
            'Step 1: write the electron configurations. Magnesium (Z = 12): 2, 8, 2. Oxygen (Z = 8): 2, 6. Magnesium has 2 outer electrons; oxygen needs 2 more to fill its outer shell.',
          maths: 'Mg: 2, 8, 2   O: 2, 6',
        },
        {
          explanation:
            'Step 2: identify the metal and the non-metal. Magnesium is a group 2 metal, so it loses electrons. Oxygen is a group 6 non-metal, so it gains electrons.',
        },
        {
          explanation:
            'Step 3: count the electrons that move. Magnesium gives up both outer electrons; oxygen takes both of them. Two electrons are transferred in total.',
          maths: 'Mg -> Mg2+ + 2 e-   then   O + 2 e- -> O2-',
        },
        {
          explanation:
            'Step 4: charge on each ion. Magnesium now has 12 protons and 10 electrons, so the ion is Mg2+ with configuration 2, 8. Oxygen now has 8 protons and 10 electrons, so the ion is O2- with configuration 2, 8. Both ions match neon.',
          maths: 'Mg2+: 2, 8 (like Ne)   O2-: 2, 8 (like Ne)',
        },
        {
          explanation:
            'Step 5: combine the ions. Mg2+ and O2- attract each other because of opposite charges. The two charges cancel exactly, so one Mg2+ pairs with one O2- in a 1 to 1 ratio. The formula is MgO. The bright white powder left after the demo is a lattice of these ions.',
          maths: 'Mg2+ + O2-  ->  MgO (overall neutral)',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-ionic-q1',
      type: 'multiple-choice',
      stem: 'What happens to an electron during ionic bonding?',
      tier: 'core',
      options: [
        'It is shared equally between the two atoms',
        'It is transferred from a metal atom to a non-metal atom',
        'It is destroyed when the atoms touch',
        'It stays inside the nucleus of the metal',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ionic-mis-share-not-transfer',
    },
    {
      id: 'cae-ionic-q2',
      type: 'multiple-choice',
      stem: 'Which type of atom usually LOSES electrons during ionic bonding?',
      tier: 'core',
      options: [
        'Non-metal atoms in group 7',
        'Noble gases in group 0/8',
        'Metal atoms in groups 1 and 2',
        'All atoms lose electrons equally',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cae-ionic-mis-metal-gains',
    },
    {
      id: 'cae-ionic-q3',
      type: 'multiple-choice',
      stem: 'A positively charged ion is called:',
      tier: 'core',
      options: ['An anion', 'A neutron', 'A nucleus', 'A cation'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-ionic-mis-cation-negative',
    },
    {
      id: 'cae-ionic-q4',
      type: 'numeric-entry',
      stem: 'A sodium atom (Na, Z=11) loses 1 electron to form Na+. What is the charge on this ion? Enter the number only (for example, enter 1 for 1+).',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'If an atom loses 1 negative electron, the proton count exceeds the electron count by 1.',
    },
    {
      id: 'cae-ionic-q5',
      type: 'numeric-entry',
      stem: 'A chlorine atom (Cl, Z=17, configuration 2, 8, 7) needs to gain electrons to fill its outer shell. How many electrons does it gain?',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'The outer shell currently has 7. The 2, 8, 8 rule says a full outer shell of shell 3 holds 8.',
    },
    {
      id: 'cae-ionic-q6',
      type: 'multiple-choice',
      stem: 'Sodium (2, 8, 1) loses its 1 outer electron. What is the electron configuration of the resulting Na+ ion?',
      tier: 'core',
      options: ['2, 8, 1', '2, 8, 2', '1, 8', '2, 8'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Take 1 electron off the outer shell of the configuration 2, 8, 1.',
    },
    {
      id: 'cae-ionic-q7',
      type: 'spot-misconception',
      stem: 'Aisha says: "In sodium chloride, the sodium atom and the chlorine atom share one electron between them."',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The shared electron sits halfway between the two atoms.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. In ionic bonding the electron is transferred from sodium to chlorine, not shared. The electron now belongs to chlorine.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-ionic-mis-share-not-transfer',
    },
    // ===== CONFIDENT (8) =====
    {
      id: 'cae-ionic-q8',
      type: 'numeric-entry',
      stem: 'A magnesium atom (Mg, Z=12, configuration 2, 8, 2) loses its outer-shell electrons to form Mg2+. How many electrons does it lose in total?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Magnesium loses every electron in its outer shell. Count them.',
    },
    {
      id: 'cae-ionic-q9',
      type: 'numeric-entry',
      stem: 'An oxygen atom (O, Z=8, configuration 2, 6) gains electrons until its outer shell is full. What is the charge on the oxide ion that forms? Enter the size of the negative charge (for example, enter 2 for 2-).',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Outer shell currently 6; full shell is 8. Each gained electron adds one negative charge.',
    },
    {
      id: 'cae-ionic-q10',
      type: 'multiple-choice',
      stem: 'Magnesium (2, 8, 2) loses both outer-shell electrons to form Mg2+. What is the electron configuration of Mg2+?',
      tier: 'confident',
      options: ['2, 8', '2, 8, 2', '2, 6', '2, 8, 8'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Remove 2 electrons from the outer shell of 2, 8, 2.',
    },
    {
      id: 'cae-ionic-q11',
      type: 'multiple-choice',
      stem: 'Lithium is in group 1 of the periodic table. Which ion is it most likely to form during ionic bonding?',
      tier: 'confident',
      options: ['Li2+ (loses 2 electrons)', 'Li- (gains 1 electron)', 'Li+ (loses 1 electron)', 'Li7- (gains 7 electrons)'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Group 1 atoms have 1 outer electron. Losing 1 is easier than gaining 7.',
    },
    {
      id: 'cae-ionic-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how potassium (K, Z=19, configuration 2, 8, 8, 1) becomes a K+ ion.',
      tier: 'confident',
      steps: [
        'Read the configuration: potassium has 19 electrons arranged 2, 8, 8, 1',
        'Identify the outer shell: shell 4 holds 1 electron',
        null,
        'Count the resulting electrons: 19 minus 1 equals 18 electrons left in shells 1, 2 and 3',
        'Compare protons and electrons: 19 protons and 18 electrons gives a charge of 1+, so the ion is K+ with configuration 2, 8, 8',
      ],
      missingStepIndex: 2,
      correctStep:
        'Lose the single outer-shell electron, because losing 1 is far easier than gaining 7 to fill shell 4',
      xpValue: 20,
    },
    {
      id: 'cae-ionic-q13',
      type: 'spot-misconception',
      stem: 'Liam writes: "A sodium ion (Na+) has 11 protons and 11 electrons, the same as a sodium atom. The plus sign just labels it as sodium."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. The plus sign on Na+ is just a label, not a charge.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The plus sign means the ion has 1 more proton than electron. Na+ has 11 protons and only 10 electrons, which is what gives it a 1+ charge.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-ionic-mis-ion-balanced',
    },
    {
      id: 'cae-ionic-q14',
      type: 'numeric-entry',
      stem: 'A calcium atom (Ca, Z=20, configuration 2, 8, 8, 2) forms an ion by losing its outer-shell electrons. How many electrons does the resulting Ca2+ ion have?',
      tier: 'confident',
      correctAnswer: 18,
      xpValue: 15,
      hint: 'Start with 20 electrons in the neutral atom. Lose both outer-shell electrons.',
    },
    {
      id: 'cae-ionic-q15',
      type: 'drag-order',
      stem: 'Put the steps of ionic bonding between a sodium atom and a chlorine atom in the correct order.',
      tier: 'confident',
      items: [
        'Both ions now have a full outer shell and a stable arrangement',
        'A sodium atom (2, 8, 1) sits next to a chlorine atom (2, 8, 7)',
        'The Na+ and Cl- ions attract each other because of their opposite charges, forming the ionic bond',
        'Sodium loses its 1 outer electron and chlorine gains it, transferring one electron from metal to non-metal',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'cae-ionic-q16',
      type: 'numeric-entry',
      stem: 'In magnesium oxide (MgO), an Mg atom forms Mg2+ and an O atom forms O2-. How many electrons are transferred per atom of magnesium during this bonding?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 20,
      hint: 'The 2 in Mg2+ tells you how many electrons the magnesium has lost.',
    },
    {
      id: 'cae-ionic-q17',
      type: 'multiple-choice',
      stem: 'A pupil is told that calcium chloride has the formula CaCl2. From this formula, what is the charge on the calcium ion?',
      tier: 'challenge',
      options: [
        'Ca2+, because two Cl- ions (each 1-) are needed to balance the calcium charge',
        'Ca+, because there is one calcium in the formula',
        'Ca2-, because the formula has two chlorines',
        'Ca0, because the compound is neutral',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'The two Cl- ions give a total of 2- charge. The compound is overall neutral.',
    },
    {
      id: 'cae-ionic-q18',
      type: 'multiple-choice',
      stem: 'Argon (Ar, configuration 2, 8, 8) is in group 0/8 and almost never forms ions. Which statement best explains why?',
      tier: 'challenge',
      options: [
        'Because argon atoms are too heavy to move electrons around',
        'Because argon is a liquid at room temperature and only gases form ions',
        'Because argon atoms have no nucleus to hold the electrons',
        'Because argon already has a full outer shell, so it has no reason to gain or lose electrons',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'cae-ionic-mis-all-atoms-form-ions',
    },
    {
      id: 'cae-ionic-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how magnesium oxide forms from a magnesium atom and an oxygen atom.',
      tier: 'challenge',
      steps: [
        'Write the configurations: Mg is 2, 8, 2 and O is 2, 6',
        'Magnesium will lose 2 electrons (group 2 metal); oxygen will gain 2 electrons (group 6 non-metal)',
        null,
        'Mg now has 12 protons and 10 electrons, charge 2+ (Mg2+, configuration 2, 8); O now has 8 protons and 10 electrons, charge 2- (O2-, configuration 2, 8)',
        'The Mg2+ and O2- ions attract in a 1 to 1 ratio because the 2+ and 2- charges cancel exactly, giving the compound MgO',
      ],
      missingStepIndex: 2,
      correctStep:
        'Transfer both outer electrons from the magnesium atom to the oxygen atom',
      xpValue: 20,
    },
    {
      id: 'cae-ionic-q20',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Group 7 atoms like chlorine react by losing 7 electrons to empty their outer shell." Which statement best evaluates this claim?',
      tier: 'challenge',
      options: [
        'The pupil is right. Group 7 atoms always lose all their outer electrons.',
        'The pupil is right, but only when group 7 atoms meet other group 7 atoms.',
        'The pupil is wrong. Gaining 1 electron to fill the shell takes far less energy than losing 7. Group 7 atoms gain 1 to form 1- ions, not lose 7.',
        'The pupil is wrong because group 7 atoms cannot form ions at all.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cae-ionic-mis-group7-loses-seven',
    },
    {
      id: 'cae-ionic-q21',
      type: 'numeric-entry',
      stem: 'A school technician notes that aluminium (Al, Z=13, configuration 2, 8, 3) forms an ion by losing all of its outer-shell electrons. What is the size of the positive charge on the aluminium ion that forms? (Enter 3 for 3+.)',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 20,
      hint: 'Count the outer-shell electrons in 2, 8, 3.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on ionic bonding: many candidates "described ionic bonds as electron sharing", conflating ionic with covalent bonding. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on ionic bonding at KS3 and KS4.
    {
      id: 'cae-ionic-mis-share-not-transfer',
      description:
        'Atoms share electrons during ionic bonding, with the shared electron sitting between the two atoms.',
      triggerAnswer: 'share-not-transfer',
      correction:
        'In ionic bonding the electron is TRANSFERRED from the metal to the non-metal. Sharing happens in covalent bonding, not ionic.',
      reExplanation:
        'In an ionic bond a metal atom loses one or more electrons and a non-metal atom gains them. The electron changes owner. After the transfer the metal is a positive ion and the non-metal is a negative ion, held together by the attraction between opposite charges. Sharing electrons gives a covalent bond, which is a different topic and is studied later.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q04 on ionic bonding: candidates "wrote that metals gain electrons to fill their outer shell". Reinforced by CGP KS3 Chemistry Study Book p.26 Common Mistake box on ion formation.
    {
      id: 'cae-ionic-mis-metal-gains',
      description:
        'Metals gain electrons to fill their outer shell during ionic bonding.',
      triggerAnswer: 'metal-gains',
      correction:
        'Metals in groups 1 and 2 LOSE their few outer electrons. Losing 1 or 2 is much easier than gaining the 6 or 7 needed to fill a shell.',
      reExplanation:
        'A group 1 atom like sodium has just 1 outer electron. Losing 1 electron leaves a full shell underneath, which matches the nearest noble gas. Gaining 7 to fill the same shell would take far more energy. The same logic applies to group 2 metals, which lose 2 electrons. So metals form positive ions (cations) by losing, not gaining.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q07 on ion charges: candidates "labelled cations as negative and anions as positive", swapping the two. Reinforced by Royal Society of Chemistry (RSC Education) article "Common KS3 misconceptions about ions" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-ionic-mis-cation-negative',
      description:
        'Cations are negatively charged ions; anions are positively charged ions.',
      triggerAnswer: 'cation-negative',
      correction:
        'In fact CATIONS are POSITIVE (formed by losing electrons) and ANIONS are NEGATIVE (formed by gaining electrons).',
      reExplanation:
        'A handy way to remember it: a cation has a paw-shaped "t" that looks like a plus sign, and cations are positive. Anions are negative. Cations are formed when atoms lose electrons (so the protons outnumber the electrons), and anions are formed when atoms gain electrons (so the electrons outnumber the protons). Mixing these up reverses every formula you write.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q05 on ion charge: candidates "said an ion has equal numbers of protons and electrons, like an atom". Reinforced by CGP KS3 Chemistry Study Book p.26 Common Mistake box.
    {
      id: 'cae-ionic-mis-ion-balanced',
      description:
        'An ion has the same number of protons and electrons; the charge symbol is just a label.',
      triggerAnswer: 'ion-balanced',
      correction:
        'An ion has a charge precisely because the proton count and electron count are no longer equal. Atoms are balanced; ions are not.',
      reExplanation:
        'A neutral atom has equal numbers of protons and electrons, so the positive and negative charges cancel out. An ion has either lost or gained electrons, so those numbers no longer match. Na+ has 11 protons and 10 electrons; one extra positive charge. O2- has 8 protons and 10 electrons; two extra negative charges. The charge symbol counts the imbalance, it is not a label.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q08 on group 7 elements: candidates "predicted that chlorine loses 7 electrons in ionic bonding". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on reactivity of group 7.
    {
      id: 'cae-ionic-mis-group7-loses-seven',
      description:
        'Group 7 atoms react by losing all 7 of their outer-shell electrons.',
      triggerAnswer: 'group7-loses-seven',
      correction:
        'Group 7 atoms GAIN 1 electron to fill the outer shell, forming 1- ions. Losing 7 would take far more energy than gaining 1.',
      reExplanation:
        'Atoms always take the easier route to a full outer shell. A group 7 atom like chlorine (2, 8, 7) is just 1 electron short of a full shell of 8. Gaining 1 electron fills the shell and matches the nearest noble gas (argon, 2, 8, 8). Losing all 7 would empty the outer shell and need far more energy, so this route does not happen.',
    },
    // Source: Royal Society of Chemistry (RSC Education) article "Teaching ionic bonding at KS3" (rsc.org/education, accessed 2026-05-10): pupils "expected every element to form an ion, including noble gases". Reinforced by Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F) Q06.
    {
      id: 'cae-ionic-mis-all-atoms-form-ions',
      description:
        'Every atom forms an ion when it reacts, including noble gases.',
      triggerAnswer: 'all-atoms-form-ions',
      correction:
        'Noble gases (group 0/8) already have a full outer shell, so they have no reason to gain or lose electrons. They do not form ions in normal chemistry.',
      reExplanation:
        'Atoms form ions when doing so brings them closer to a full outer shell. Noble gases like helium, neon and argon already have full outer shells, so gaining or losing electrons would make them less stable, not more. This is why noble gases sit unreactive on the right of the periodic table and rarely appear in compounds.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on ionic compound formulas: candidates "wrote MgCl rather than MgCl2 because they did not balance the charges". Reinforced by CGP KS3 Chemistry Study Book p.27 worked-example box on ionic formulas.
    {
      id: 'cae-ionic-mis-charges-do-not-balance',
      description:
        'In an ionic compound, one cation always pairs with one anion no matter what the charges are.',
      triggerAnswer: 'charges-do-not-balance',
      correction:
        'The ratio of cations to anions must make the total charge zero. For Mg2+ and Cl-, you need 2 Cl- per Mg2+, giving MgCl2 not MgCl.',
      reExplanation:
        'Ionic compounds are overall neutral. The positive charges from the cations must cancel the negative charges from the anions. For NaCl that is 1 to 1 because both charges are 1. For MgCl2 the 2+ on Mg2+ needs two 1- chlorides. For Na2O the 2- on O2- needs two 1+ sodiums. Always count charges first, then write the smallest whole-number ratio.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
