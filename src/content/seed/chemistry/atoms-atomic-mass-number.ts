import type { SkillNode } from '@/types/content'

export const atomicNumberAndMassNumber: SkillNode = {
  id: 'chemistry-atoms-atomic-mass-number',
  title: 'Atomic Number and Mass Number',
  description:
    'Read the two numbers next to a chemical symbol on the periodic table. The atomic number (Z) counts the protons in the nucleus and pins down which element it is. The mass number (A) counts the total protons plus neutrons. Use A and Z to work out the number of neutrons (neutrons = A minus Z) and the number of electrons in a neutral atom (electrons = Z). Includes carbon-12, sodium-23, chlorine-35, iron-56 and gold-197 worked through.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-protons-neutrons-electrons'],
  curriculum: {
    ks3Objective:
      'Atomic number (the number of protons); mass number (total of protons and neutrons); the significance of each for atomic identity.',
    awardingBodies: {
      aqa: '4.1.1.1 Atomic number and mass number (8462)',
      edexcel:
        'Topic 1.3 Atomic number and mass number; determining numbers of subatomic particles (1CH0)',
      ocr: 'C1.1b Atomic number and mass number; calculating subatomic particle numbers (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-amn-scene-1',
      title: 'Reading the Two Numbers Beside a Periodic Table Symbol',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where the atomic number and the mass number sit on a periodic table cell, and what each one stands for.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="100" y="40" width="120" height="140" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.5"/><text x="160" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#7C2D12">23</text><text x="160" y="118" text-anchor="middle" font-size="48" font-weight="700" fill="#1E3A8A">Na</text><text x="160" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="#14532D">11</text><text x="160" y="170" text-anchor="middle" font-size="9" fill="#475569">sodium</text></g><text x="40" y="68" font-size="9" fill="#7C2D12" font-weight="600">mass number A</text><text x="40" y="148" font-size="9" fill="#14532D" font-weight="600">atomic number Z</text><line x1="92" y1="66" x2="135" y2="66" stroke="#7C2D12" stroke-width="0.7"/><line x1="92" y1="146" x2="135" y2="146" stroke="#14532D" stroke-width="0.7"/></svg>',
        hotspots: [
          {
            id: 'cae-amn-h1-symbol',
            x: 50,
            y: 50,
            label: 'The element symbol Na',
            description:
              'The big letters in the middle are the element symbol. Na is sodium, the metal in table salt. The two numbers around the symbol tell us more about the atom.',
          },
          {
            id: 'cae-amn-h1-mass',
            x: 50,
            y: 25,
            label: 'Mass number A = 23',
            description:
              'The mass number sits at the top. It counts the total number of protons plus neutrons in the nucleus. For sodium, A is 23, so a sodium nucleus has 23 heavy particles altogether.',
          },
          {
            id: 'cae-amn-h1-atomic',
            x: 50,
            y: 65,
            label: 'Atomic number Z = 11',
            description:
              'The atomic number sits at the bottom (or sometimes the top-left, depending on the book). It counts the protons. Sodium always has 11 protons; that is what makes it sodium.',
          },
          {
            id: 'cae-amn-h1-position',
            x: 12,
            y: 32,
            label: 'Different books put A in different places',
            description:
              'Some periodic tables place the mass number above the symbol and the atomic number below. Others swap them. The rule is: the bigger number is always A, the smaller number is always Z, because protons + neutrons (A) is always at least as big as protons alone (Z).',
          },
          {
            id: 'cae-amn-h1-name',
            x: 50,
            y: 78,
            label: 'Element name',
            description:
              'The full name of the element is written underneath the symbol. Useful for elements where the symbol comes from a Latin name (Na from natrium, Fe from ferrum, Au from aurum).',
          },
        ],
      },
    },
    {
      id: 'cae-amn-scene-2',
      title: 'Counting Protons, Neutrons and Electrons in Carbon-12',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the proton, neutron and electron counts for a carbon-12 atom from the values of A and Z.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><circle cx="160" cy="110" r="80" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="160" cy="50" r="50" fill="none" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="3 2"/></g><g><circle cx="160" cy="110" r="22" fill="#FECACA" stroke="#7F1D1D" stroke-width="1"/><circle cx="153" cy="103" r="5" fill="#DC2626"/><circle cx="167" cy="103" r="5" fill="#DC2626"/><circle cx="160" cy="118" r="5" fill="#DC2626"/><circle cx="148" cy="116" r="5" fill="#1E3A8A"/><circle cx="172" cy="116" r="5" fill="#1E3A8A"/><circle cx="155" cy="98" r="5" fill="#1E3A8A"/><text x="160" y="150" text-anchor="middle" font-size="9" fill="#7F1D1D">nucleus: 6 p + 6 n = 12</text></g><g><circle cx="120" cy="50" r="4" fill="#14532D"/><circle cx="200" cy="50" r="4" fill="#14532D"/><circle cx="120" cy="170" r="4" fill="#14532D"/><circle cx="200" cy="170" r="4" fill="#14532D"/><circle cx="100" cy="110" r="4" fill="#14532D"/><circle cx="220" cy="110" r="4" fill="#14532D"/><text x="160" y="210" text-anchor="middle" font-size="9" fill="#14532D">6 electrons in shells around the nucleus</text></g><text x="20" y="30" font-size="10" font-weight="700" fill="#1E3A8A">carbon-12: A = 12, Z = 6</text></svg>',
        hotspots: [
          {
            id: 'cae-amn-h2-z',
            x: 50,
            y: 50,
            label: 'Z = 6 protons',
            description:
              'The atomic number is 6. So a carbon-12 nucleus holds 6 protons (the red balls). Six protons is what makes the atom carbon. Change the proton count and the element changes too.',
          },
          {
            id: 'cae-amn-h2-neutrons',
            x: 50,
            y: 65,
            label: 'Neutrons = A minus Z = 12 minus 6 = 6',
            description:
              'The mass number A is 12. Subtract the proton count (6) and you get the neutron count: 12 minus 6 = 6 neutrons (the blue balls). Neutrons add mass to the nucleus but do not affect the element identity.',
          },
          {
            id: 'cae-amn-h2-total',
            x: 50,
            y: 75,
            label: 'A counts the heavy particles, p + n',
            description:
              'Add the protons and neutrons in the nucleus together: 6 + 6 = 12. That is exactly the mass number A. So A is just the count of heavy particles in the nucleus.',
          },
          {
            id: 'cae-amn-h2-electrons',
            x: 30,
            y: 25,
            label: 'Electrons = Z = 6 (neutral atom)',
            description:
              'For a neutral atom, the number of electrons equals the number of protons, so electrons = Z = 6. The electrons sit in shells around the nucleus. Ions (atoms that have lost or gained electrons) break this rule, but a plain neutral atom always has equal protons and electrons.',
          },
        ],
      },
    },
    {
      id: 'cae-amn-scene-3',
      title: 'Five Real Atoms: A, Z and Neutron Counts',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read A, Z and the neutron count for five common atoms a Year 7 pupil meets across chemistry.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="15" y="30" width="60" height="80" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="45" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">1</text><text x="45" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">H</text><text x="45" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">1</text><text x="45" y="125" text-anchor="middle" font-size="7" fill="#475569">hydrogen</text></g><g><rect x="85" y="30" width="60" height="80" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="115" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">23</text><text x="115" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Na</text><text x="115" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">11</text><text x="115" y="125" text-anchor="middle" font-size="7" fill="#475569">sodium</text></g><g><rect x="155" y="30" width="60" height="80" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="185" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">35</text><text x="185" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Cl</text><text x="185" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">17</text><text x="185" y="125" text-anchor="middle" font-size="7" fill="#475569">chlorine</text></g><g><rect x="225" y="30" width="60" height="80" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="255" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">56</text><text x="255" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Fe</text><text x="255" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">26</text><text x="255" y="125" text-anchor="middle" font-size="7" fill="#475569">iron</text></g><g><rect x="295" y="30" width="60" height="80" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="325" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">197</text><text x="325" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Au</text><text x="325" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">79</text><text x="325" y="125" text-anchor="middle" font-size="7" fill="#475569">gold</text></g><g><rect x="15" y="150" width="340" height="60" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="25" y="168" font-size="9" font-weight="600" fill="#1E3A8A">Neutron count = A minus Z:</text><text x="25" y="184" font-size="8" fill="#7C2D12">H: 1 minus 1 = 0; Na: 23 minus 11 = 12; Cl: 35 minus 17 = 18; Fe: 56 minus 26 = 30; Au: 197 minus 79 = 118.</text><text x="25" y="200" font-size="8" fill="#14532D">In a neutral atom, electrons = Z. So H has 1 electron, Na has 11, Cl has 17, Fe has 26, Au has 79.</text></g></svg>',
        hotspots: [
          {
            id: 'cae-amn-h3-hydrogen',
            x: 12,
            y: 32,
            label: 'Hydrogen: A = 1, Z = 1, neutrons = 0',
            description:
              'The simplest atom. One proton, no neutrons, one electron. The most common form of hydrogen has no neutrons in its nucleus at all, which is unusual. The neutron count works out as 1 minus 1 = 0.',
          },
          {
            id: 'cae-amn-h3-sodium',
            x: 32,
            y: 32,
            label: 'Sodium: A = 23, Z = 11, neutrons = 12',
            description:
              'Sodium is the metal half of table salt and the white solid in school chemistry labs. Its nucleus holds 11 protons (that defines it as sodium) and 12 neutrons. Total nucleon count = 11 + 12 = 23, which is the mass number.',
          },
          {
            id: 'cae-amn-h3-chlorine',
            x: 52,
            y: 32,
            label: 'Chlorine: A = 35, Z = 17, neutrons = 18',
            description:
              'Chlorine is the gas that treats UK swimming pools and forms the chloride half of table salt. The mass number on most periodic tables shows 35 for the most common form. Neutrons = 35 minus 17 = 18.',
          },
          {
            id: 'cae-amn-h3-iron',
            x: 72,
            y: 32,
            label: 'Iron: A = 56, Z = 26, neutrons = 30',
            description:
              'Iron is the metal in nails, railway tracks and the haem in your blood. 26 protons define it as iron, and the most common form holds 30 neutrons, giving A = 56.',
          },
          {
            id: 'cae-amn-h3-gold',
            x: 90,
            y: 32,
            label: 'Gold: A = 197, Z = 79, neutrons = 118',
            description:
              'Gold (Au, from the Latin aurum) is the precious metal used in UK hallmarked jewellery. 79 protons make it gold; 118 neutrons sit alongside them, giving A = 197. A big, heavy nucleus.',
          },
          {
            id: 'cae-amn-h3-rule',
            x: 50,
            y: 82,
            label: 'The two key rules',
            description:
              'Rule 1: neutrons = A minus Z. Rule 2: in a neutral atom, electrons = Z. With those two rules and a periodic table cell, you can count every subatomic particle in any atom.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-amn-worked-1',
      title: 'How many of each particle are in a chlorine-35 atom?',
      steps: [
        {
          explanation:
            'Question: a chlorine atom in a UK swimming pool sample has mass number 35. The periodic table gives chlorine an atomic number of 17. How many protons, neutrons and electrons are in one neutral chlorine-35 atom?',
        },
        {
          explanation:
            'Step 1: read the atomic number Z off the periodic table. Z is 17 for chlorine. The atomic number counts the protons directly, so protons = 17.',
          maths: 'Z = 17, so protons = 17',
        },
        {
          explanation:
            'Step 2: read the mass number A. For this atom A = 35. Mass number = protons + neutrons.',
          maths: 'A = 35',
        },
        {
          explanation:
            'Step 3: work out the neutron count by subtracting Z from A. neutrons = A minus Z = 35 minus 17.',
          maths: 'neutrons = 35 - 17 = 18',
        },
        {
          explanation:
            'Step 4: in a neutral atom, the number of electrons equals the number of protons. electrons = Z = 17.',
          maths: 'electrons = Z = 17',
        },
        {
          explanation:
            'Step 5: check by adding protons and neutrons. 17 + 18 = 35, which matches A. A neutral chlorine-35 atom has 17 protons, 18 neutrons and 17 electrons.',
          maths: '17 + 18 = 35 (matches A)',
        },
      ],
    },
    {
      id: 'cae-amn-worked-2',
      title: 'Working backwards: identifying an element from its particle counts',
      steps: [
        {
          explanation:
            'Question: a mystery atom has 26 protons and 30 neutrons in its nucleus. Which element is it, and what is its mass number?',
        },
        {
          explanation:
            'Step 1: the element identity is fixed by the proton count, because the atomic number Z = number of protons. Z = 26.',
          maths: 'Z = protons = 26',
        },
        {
          explanation:
            'Step 2: look up Z = 26 on the periodic table. The element with atomic number 26 is iron (Fe). So the atom is an atom of iron.',
        },
        {
          explanation:
            'Step 3: work out the mass number. A = protons + neutrons = 26 + 30.',
          maths: 'A = 26 + 30 = 56',
        },
        {
          explanation:
            'Step 4: so the atom is iron-56, the most common form of iron found in a nail or a railway track. Written in shorthand, it is the iron atom with A = 56 and Z = 26.',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-amn-q1',
      type: 'multiple-choice',
      stem: 'What does the atomic number (Z) of an element tell you?',
      tier: 'core',
      options: [
        'The number of protons in the nucleus of one atom',
        'The number of neutrons in the nucleus of one atom',
        'The total mass of one atom in grams',
        'The number of shells the electrons sit in',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Z is the count of the positively charged particles in the nucleus.',
      misconceptionId: 'cae-amn-mis-z-vs-a',
    },
    {
      id: 'cae-amn-q2',
      type: 'multiple-choice',
      stem: 'What does the mass number (A) of an atom count?',
      tier: 'core',
      options: [
        'The number of electrons in the outer shell',
        'The number of protons only',
        'The total of protons plus neutrons in the nucleus',
        'The number of neutrons only',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Mass number adds the two heavy particles in the nucleus together.',
      misconceptionId: 'cae-amn-mis-a-is-neutrons',
    },
    {
      id: 'cae-amn-q3',
      type: 'numeric-entry',
      stem: 'A sodium atom has mass number A = 23 and atomic number Z = 11. How many neutrons are in its nucleus?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      hint: 'neutrons = A minus Z.',
    },
    {
      id: 'cae-amn-q4',
      type: 'numeric-entry',
      stem: 'A carbon-12 atom has mass number A = 12 and atomic number Z = 6. How many protons are in its nucleus?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'The proton count equals the atomic number, Z.',
    },
    {
      id: 'cae-amn-q5',
      type: 'numeric-entry',
      stem: 'How many electrons does a neutral nitrogen atom have? Nitrogen has atomic number Z = 7.',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'In a neutral atom, electrons = protons = Z.',
      misconceptionId: 'cae-amn-mis-electrons-equal-a',
    },
    {
      id: 'cae-amn-q6',
      type: 'multiple-choice',
      stem: 'Which property of an atom decides which element it is?',
      tier: 'core',
      options: [
        'The number of neutrons',
        'The number of electrons in the outer shell',
        'The total mass of the atom',
        'The number of protons',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-amn-mis-neutrons-define-element',
    },
    {
      id: 'cae-amn-q7',
      type: 'numeric-entry',
      stem: 'An oxygen-16 atom has A = 16 and Z = 8. How many neutrons does it have?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'neutrons = 16 minus 8.',
    },
    // ===== CONFIDENT (8) =====
    {
      id: 'cae-amn-q8',
      type: 'numeric-entry',
      stem: 'A chlorine atom in a UK swimming pool treatment has A = 35 and Z = 17. How many neutrons are in its nucleus?',
      tier: 'confident',
      correctAnswer: 18,
      xpValue: 15,
      hint: 'neutrons = A minus Z = 35 minus 17.',
    },
    {
      id: 'cae-amn-q9',
      type: 'numeric-entry',
      stem: 'An iron atom in a garden nail has A = 56 and Z = 26. How many neutrons are in its nucleus?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: 'neutrons = 56 minus 26.',
    },
    {
      id: 'cae-amn-q10',
      type: 'multiple-choice',
      stem: 'A neutral atom has 11 protons and 12 neutrons in its nucleus. Which line correctly gives its mass number A and its element name?',
      tier: 'confident',
      options: [
        'A = 11, element is hydrogen',
        'A = 12, element is carbon',
        'A = 23, element is sodium',
        'A = 23, element is magnesium',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'A = protons + neutrons; the proton count fixes the element via Z.',
    },
    {
      id: 'cae-amn-q11',
      type: 'multiple-choice',
      stem: 'A pupil reads the periodic table cell for magnesium: A = 24, Z = 12. Which line correctly gives the number of protons, neutrons and electrons in one neutral magnesium atom?',
      tier: 'confident',
      options: [
        '12 protons, 24 neutrons, 12 electrons',
        '12 protons, 12 neutrons, 12 electrons',
        '12 protons, 12 neutrons, 24 electrons',
        '24 protons, 12 neutrons, 24 electrons',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Protons = Z; neutrons = A minus Z; electrons = Z in a neutral atom.',
      misconceptionId: 'cae-amn-mis-a-is-neutrons',
    },
    {
      id: 'cae-amn-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a copper atom in a 2p coin has A = 63 and Z = 29. How many neutrons does it have?',
      tier: 'confident',
      steps: [
        'Read the atomic number Z = 29; this is the proton count.',
        'Read the mass number A = 63; this counts protons plus neutrons together.',
        null,
        'So a copper-63 atom has 34 neutrons in its nucleus.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Subtract Z from A to get the neutron count: neutrons = A minus Z = 63 minus 29 = 34.',
      xpValue: 15,
      misconceptionId: 'cae-amn-mis-add-instead-of-subtract',
    },
    {
      id: 'cae-amn-q13',
      type: 'drag-order',
      stem: 'Place the steps for working out the neutron count of an atom in the correct order, from start to finish.',
      tier: 'confident',
      items: [
        'Subtract the atomic number from the mass number: neutrons = A minus Z',
        'Read the atomic number Z from the periodic table cell',
        'Write down the neutron count as your answer',
        'Read the mass number A from the periodic table cell',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'cae-amn-q14',
      type: 'data-extraction',
      stem: 'A pupil records data from the periodic table cells for four elements:\n- hydrogen: A = 1, Z = 1\n- oxygen: A = 16, Z = 8\n- sodium: A = 23, Z = 11\n- iron: A = 56, Z = 26\n\nWhich of these four atoms has the most neutrons?',
      tier: 'confident',
      dataSource:
        'hydrogen A = 1, Z = 1 (neutrons = 0); oxygen A = 16, Z = 8 (neutrons = 8); sodium A = 23, Z = 11 (neutrons = 12); iron A = 56, Z = 26 (neutrons = 30).',
      correctAnswer: 'iron',
      xpValue: 15,
      hint: 'Work out neutrons = A minus Z for each, then pick the biggest.',
    },
    {
      id: 'cae-amn-q15',
      type: 'spot-misconception',
      stem: 'Aisha says: "The mass number A counts the number of neutrons in the nucleus."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. A is short for the neutron count.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. A counts the total of protons and neutrons together. The neutron count on its own is A minus Z.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-amn-mis-a-is-neutrons',
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'cae-amn-q16',
      type: 'numeric-entry',
      stem: 'A gold atom in a UK hallmarked ring has A = 197 and Z = 79. How many neutrons are in its nucleus?',
      tier: 'challenge',
      correctAnswer: 118,
      xpValue: 20,
      hint: 'neutrons = 197 minus 79.',
    },
    {
      id: 'cae-amn-q17',
      type: 'multiple-choice',
      stem: 'A neutral atom has 12 protons, 12 neutrons and 12 electrons. What is its mass number A?',
      tier: 'challenge',
      options: [
        'A = 12, because protons equals neutrons equals electrons',
        'A = 24, because A counts protons plus neutrons (12 + 12)',
        'A = 36, because A counts protons plus neutrons plus electrons',
        'A = 6, because A is half of the proton count',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'A counts protons plus neutrons, not electrons.',
      misconceptionId: 'cae-amn-mis-electrons-equal-a',
    },
    {
      id: 'cae-amn-q18',
      type: 'multiple-choice',
      stem: 'A teacher hides the label on a periodic table cell. She tells the class: "This atom has 26 protons in its nucleus and a mass number of 56." Which line is correct?',
      tier: 'challenge',
      options: [
        'The element is iron, because Z = 26 fixes the element as iron',
        'The element is copper, because copper is metallic and has A around 56',
        'The element cannot be identified without the electron count',
        'The element is chromium, because Z = 26 is the chromium row',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'The atomic number Z fixes the element; the proton count is Z.',
      misconceptionId: 'cae-amn-mis-neutrons-define-element',
    },
    {
      id: 'cae-amn-q19',
      type: 'spot-misconception',
      stem: 'Marcus says: "A neutral oxygen atom with A = 16 and Z = 8 has 16 electrons, because A is the mass number and mass tells us about electrons."',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus is right. The mass number A counts electrons in a neutral atom.',
          isMisconception: true,
        },
        {
          text: 'Marcus is wrong. In a neutral atom, electrons = protons = Z, not A. So oxygen-16 has 8 electrons, not 16.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-amn-mis-electrons-equal-a',
    },
    {
      id: 'cae-amn-q20',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of this periodic table cell for chlorine.',
      tier: 'challenge',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><rect x="100" y="40" width="120" height="140" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.5"/><text x="160" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#7C2D12">35</text><text x="160" y="118" text-anchor="middle" font-size="48" font-weight="700" fill="#1E3A8A">Cl</text><text x="160" y="148" text-anchor="middle" font-size="14" font-weight="700" fill="#14532D">17</text><text x="160" y="170" text-anchor="middle" font-size="9" fill="#475569">chlorine</text></svg>',
      hotspots: [
        { id: 'cae-amn-q20-h1', x: 50, y: 30, correctLabel: 'Mass number (A)' },
        { id: 'cae-amn-q20-h2', x: 50, y: 55, correctLabel: 'Element symbol' },
        { id: 'cae-amn-q20-h3', x: 50, y: 68, correctLabel: 'Atomic number (Z)' },
        { id: 'cae-amn-q20-h4', x: 50, y: 78, correctLabel: 'Element name' },
      ],
      labels: [
        'Mass number (A)',
        'Element symbol',
        'Atomic number (Z)',
        'Element name',
        'Number of neutrons',
        'Number of electron shells',
        'Group number',
      ],
      xpValue: 20,
      misconceptionId: 'cae-amn-mis-bigger-is-z',
    },
    {
      id: 'cae-amn-q21',
      type: 'multiple-choice',
      stem: 'Two atoms both have Z = 6 but one has A = 12 and the other has A = 14. Which statement is correct?',
      tier: 'challenge',
      options: [
        'They are different elements because they have different mass numbers',
        'They are the same element (carbon) because Z is what fixes the element; they just have different neutron counts (6 and 8)',
        'They are different elements because the neutron counts differ',
        'They cannot be real atoms because Z must always equal A',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'The proton count (Z) is the only thing that decides which element it is.',
      misconceptionId: 'cae-amn-mis-neutrons-define-element',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q02 on atomic structure: candidates "frequently confused the atomic number with the mass number, writing that Z gives the total of protons and neutrons". Reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box on atomic number and mass number.
    {
      id: 'cae-amn-mis-z-vs-a',
      description:
        'The atomic number Z gives the total number of protons plus neutrons in the nucleus.',
      triggerAnswer: 'z-vs-a',
      correction:
        'In fact Z counts only the protons. The total of protons plus neutrons is the mass number A.',
      reExplanation:
        'Z stands for the atomic number, which is the proton count alone. A stands for the mass number, which adds the two heavy particles in the nucleus: protons plus neutrons. So A is always at least as big as Z. The smaller number on a periodic table cell is Z; the bigger number is A. The two are different jobs: Z fixes which element it is, while A fixes how heavy that particular atom is.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q03 on subatomic particles: candidates "wrote that the mass number is the number of neutrons", missing that A is a total of protons plus neutrons. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on atomic number and mass number.
    {
      id: 'cae-amn-mis-a-is-neutrons',
      description:
        'The mass number A counts the number of neutrons in the nucleus.',
      triggerAnswer: 'a-is-neutrons',
      correction:
        'In fact A counts protons plus neutrons together. To get the neutron count alone, subtract Z from A: neutrons = A minus Z.',
      reExplanation:
        'Imagine the nucleus as a small bag of marbles. The mass number A is the total marble count, splitting into red marbles (protons) and blue marbles (neutrons). If A is 23 and Z is 11, you have 11 red marbles and 23 minus 11 = 12 blue marbles. So A is a total, not the neutron count on its own. Whenever you read A and want neutrons, do the subtraction A minus Z.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q01 on atomic structure: candidates "wrote that the number of electrons in a neutral atom equals the mass number", mixing up A and Z when counting electrons. Reinforced by CGP KS3 Chemistry Study Book p.62.
    {
      id: 'cae-amn-mis-electrons-equal-a',
      description:
        'In a neutral atom, the number of electrons equals the mass number A.',
      triggerAnswer: 'electrons-equal-a',
      correction:
        'In fact electrons equal Z (the atomic number), not A. A neutral atom balances its electron count against its proton count, not against the total nucleon count.',
      reExplanation:
        'A neutral atom has zero overall charge. Protons each carry +1 and electrons each carry -1, so they must balance: electrons = protons = Z. Neutrons carry no charge, so they do not enter the balance. For sodium (A = 23, Z = 11), a neutral atom holds 11 electrons, not 23. The rule electrons = Z applies only to neutral atoms; for ions, the count differs by the charge.',
    },
    // Source: David Paterson, "Teaching the atom at Key Stage 3", RSC Education CPD article (2021-09-15): a persistent Year 7 confusion is to think the neutron count is what decides which element an atom is, missing that only the proton count (Z) fixes the element identity. Reinforced by Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q01: "candidates claimed that two atoms with the same neutron count were the same element."
    {
      id: 'cae-amn-mis-neutrons-define-element',
      description:
        'It is the number of neutrons in the nucleus that decides which element an atom is.',
      triggerAnswer: 'neutrons-define-element',
      correction:
        'In fact only the proton count (Z) decides which element an atom is. Atoms of the same element can have different neutron counts but the same Z.',
      reExplanation:
        'Every atom of carbon has 6 protons. Carbon-12 has 6 neutrons and carbon-14 has 8 neutrons, but both are carbon because both have Z = 6. Change the proton count and the element changes: an atom with Z = 7 is nitrogen, not carbon. So Z is the fingerprint of the element. Neutron counts can vary within the same element (these are called isotopes), but Z is fixed for each element.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q02 on periodic table reading: candidates "treated A and Z as interchangeable on the periodic table cell, often reading the smaller number as A and the bigger as Z". Reinforced by RSC Education article "Reading the periodic table at KS3" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cae-amn-mis-bigger-is-z',
      description:
        'On a periodic table cell, the bigger number is always the atomic number Z and the smaller number is the mass number A.',
      triggerAnswer: 'bigger-is-z',
      correction:
        'In fact the bigger number is always A (protons plus neutrons) and the smaller number is always Z (protons alone). Protons plus neutrons is always at least as big as protons on their own.',
      reExplanation:
        'A includes protons and neutrons, so it is at least as big as Z, never smaller. Hydrogen is the only atom where A and Z match (A = 1, Z = 1, no neutrons). For sodium A = 23 and Z = 11; for gold A = 197 and Z = 79. The bigger number on the cell is always A. If a book swaps their position, the size rule still tells you which is which.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q02 on atomic structure: candidates "calculated neutrons by adding A and Z together", confusing the subtraction rule for the addition rule. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on subatomic particle counting.
    {
      id: 'cae-amn-mis-add-instead-of-subtract',
      description:
        'To find the number of neutrons in an atom, add the atomic number Z to the mass number A.',
      triggerAnswer: 'add-instead-of-subtract',
      correction:
        'In fact you subtract Z from A: neutrons = A minus Z. Adding A and Z would give a number bigger than the nucleus actually holds.',
      reExplanation:
        'A is the total nucleon count and Z is the proton slice of that total. To get the neutron slice on its own, take the total and remove the proton slice: neutrons = A minus Z. For sodium A = 23 and Z = 11, so neutrons = 12. Adding (23 + 11 = 34) double-counts the protons, once inside A and once as Z. Always subtract Z from A for the neutron count.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
