import type { SkillNode } from '@/types/content'

export const readingPeriodicTableCell: SkillNode = {
  id: 'chemistry-atoms-periodic-table-cell',
  title: 'Reading a Periodic Table Cell',
  description:
    'Read a single cell of the periodic table to find an element’s symbol, atomic number Z and mass number A. Use those two numbers to work out the number of protons, neutrons and electrons in one neutral atom. Practise on common UK GCSE elements such as Na, Cl, O, Fe, K, Mg, Au, Cu, Ca and Al.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-atomic-mass-number'],
  curriculum: {
    ks3Objective:
      'Extracting atomic number and mass number from a periodic table cell; using this information to determine proton, neutron and electron numbers.',
    awardingBodies: {
      aqa: '4.1.2.1 The periodic table; interpreting information from periodic table entries (8462)',
      edexcel: 'Topic 1.30 The periodic table; reading element information (1CH0)',
      ocr: 'C1.2a The periodic table; extracting data from periodic table entries (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-ptc-scene-1',
      title: 'The Parts of a Periodic Table Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the symbol, atomic number and mass number from a single cell.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="90" y="40" width="140" height="160" fill="#FFFFFF" stroke="#475569" stroke-width="1.4"/><text x="160" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#7C2D12">23</text><text x="160" y="138" text-anchor="middle" font-size="46" font-weight="700" fill="#1E3A8A">Na</text><text x="160" y="178" text-anchor="middle" font-size="22" font-weight="700" fill="#14532D">11</text><text x="160" y="198" text-anchor="middle" font-size="10" fill="#475569">sodium</text></g><text x="160" y="222" text-anchor="middle" font-size="9" fill="#1E3A8A">Top: mass number A. Middle: symbol. Bottom: atomic number Z.</text></svg>',
        hotspots: [
          {
            id: 'cae-ptc-h-top',
            x: 50,
            y: 30,
            label: 'Top number: mass number A = 23',
            description:
              'The larger number at the top of the cell is the mass number, written A. It counts the protons plus the neutrons in one atom of sodium. So one atom of sodium has 23 particles in its nucleus.',
          },
          {
            id: 'cae-ptc-h-symbol',
            x: 50,
            y: 55,
            label: 'Middle: the symbol Na',
            description:
              'The big letters in the centre are the element symbol. Na is the symbol for sodium, taken from the old Latin name natrium. A symbol is one capital letter, sometimes followed by one lowercase letter.',
          },
          {
            id: 'cae-ptc-h-bottom',
            x: 50,
            y: 75,
            label: 'Bottom number: atomic number Z = 11',
            description:
              'The smaller number at the bottom is the atomic number, written Z. It counts the protons in one atom of sodium. Every sodium atom has exactly 11 protons; that is what makes it sodium.',
          },
          {
            id: 'cae-ptc-h-name',
            x: 50,
            y: 85,
            label: 'Element name (sometimes shown)',
            description:
              'Many UK exam periodic tables also print the element name in small letters under the symbol. AQA, Edexcel and OCR data sheets all use the same top-mass, bottom-atomic layout, although a few older textbooks print the two numbers the other way round.',
          },
        ],
      },
    },
    {
      id: 'cae-ptc-scene-2',
      title: 'From Cell to Subatomic Particle Counts',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the two numbers in the cell give you protons, neutrons and electrons.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="20" y="40" width="120" height="140" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="80" y="74" text-anchor="middle" font-size="18" font-weight="700" fill="#7C2D12">35</text><text x="80" y="124" text-anchor="middle" font-size="36" font-weight="700" fill="#1E3A8A">Cl</text><text x="80" y="156" text-anchor="middle" font-size="18" font-weight="700" fill="#14532D">17</text><text x="80" y="174" text-anchor="middle" font-size="9" fill="#475569">chlorine</text></g><g><rect x="170" y="40" width="170" height="140" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="255" y="62" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Reading the cell for chlorine</text><line x1="180" y1="70" x2="330" y2="70" stroke="#94A3B8"/><text x="180" y="92" font-size="9" fill="#1E3A8A">protons = Z =</text><text x="335" y="92" text-anchor="end" font-size="9" font-weight="700" fill="#1E3A8A">17</text><text x="180" y="114" font-size="9" fill="#1E3A8A">electrons (neutral) = Z =</text><text x="335" y="114" text-anchor="end" font-size="9" font-weight="700" fill="#1E3A8A">17</text><text x="180" y="136" font-size="9" fill="#1E3A8A">neutrons = A − Z =</text><text x="335" y="136" text-anchor="end" font-size="9" font-weight="700" fill="#1E3A8A">35 − 17 = 18</text><text x="180" y="160" font-size="9" font-weight="600" fill="#14532D">17 p, 18 n, 17 e</text></g></svg>',
        hotspots: [
          {
            id: 'cae-ptc-h-p',
            x: 60,
            y: 42,
            label: 'Protons = Z = 17',
            description:
              'The atomic number is the proton count. Chlorine has Z = 17, so every chlorine atom has 17 protons in its nucleus. Change the proton count and you change the element.',
          },
          {
            id: 'cae-ptc-h-e',
            x: 60,
            y: 52,
            label: 'Electrons in a neutral atom = 17',
            description:
              'A neutral atom has no overall charge, so the number of negative electrons equals the number of positive protons. For neutral chlorine that is 17 electrons.',
          },
          {
            id: 'cae-ptc-h-n',
            x: 60,
            y: 62,
            label: 'Neutrons = A − Z = 35 − 17 = 18',
            description:
              'The mass number A counts protons plus neutrons. So to get the neutron count alone, subtract the atomic number from the mass number. For this chlorine atom that gives 18 neutrons.',
          },
          {
            id: 'cae-ptc-h-summary',
            x: 80,
            y: 80,
            label: 'Summary line: 17 p, 18 n, 17 e',
            description:
              'A neutral chlorine atom has 17 protons, 18 neutrons and 17 electrons. The protons and electrons match (neutral atom). The neutron count comes from the subtraction A − Z.',
          },
        ],
      },
    },
    {
      id: 'cae-ptc-scene-3',
      title: 'Four UK GCSE Cells Side by Side',
      type: 'labelled-diagram',
      instructions:
        'Click each cell to see the numbers and the subatomic particle counts for that element.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="20" y="30" width="70" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="55" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">16</text><text x="55" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">O</text><text x="55" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">8</text></g><text x="55" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">8 p, 8 n, 8 e</text><g><rect x="100" y="30" width="70" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="135" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">24</text><text x="135" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Mg</text><text x="135" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">12</text></g><text x="135" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">12 p, 12 n, 12 e</text><g><rect x="180" y="30" width="70" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="215" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">39</text><text x="215" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">K</text><text x="215" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">19</text></g><text x="215" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">19 p, 20 n, 19 e</text><g><rect x="260" y="30" width="70" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="295" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">56</text><text x="295" y="86" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Fe</text><text x="295" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">26</text></g><text x="295" y="138" text-anchor="middle" font-size="8" fill="#1E3A8A">26 p, 30 n, 26 e</text><text x="180" y="170" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Same recipe every time:</text><text x="180" y="186" text-anchor="middle" font-size="9" fill="#1E3A8A">protons = electrons = Z (bottom); neutrons = A − Z (top minus bottom).</text><text x="180" y="202" text-anchor="middle" font-size="8" fill="#475569">UK GCSE convention: mass number A on top, atomic number Z at the bottom.</text></svg>',
        hotspots: [
          {
            id: 'cae-ptc-h-o',
            x: 20,
            y: 30,
            label: 'Oxygen O: A = 16, Z = 8',
            description:
              'Protons = 8, electrons (neutral) = 8, neutrons = 16 − 8 = 8. Oxygen is the gas that makes up about a fifth of UK air.',
          },
          {
            id: 'cae-ptc-h-mg',
            x: 42,
            y: 30,
            label: 'Magnesium Mg: A = 24, Z = 12',
            description:
              'Protons = 12, electrons = 12, neutrons = 24 − 12 = 12. Magnesium ribbon is the silvery strip you burn in a school lab to make a bright white flame.',
          },
          {
            id: 'cae-ptc-h-k',
            x: 64,
            y: 30,
            label: 'Potassium K: A = 39, Z = 19',
            description:
              'Protons = 19, electrons = 19, neutrons = 39 − 19 = 20. K stands for kalium, the old Latin name for potassium.',
          },
          {
            id: 'cae-ptc-h-fe',
            x: 86,
            y: 30,
            label: 'Iron Fe: A = 56, Z = 26',
            description:
              'Protons = 26, electrons = 26, neutrons = 56 − 26 = 30. Iron makes the rails on a Sevenoaks-bound train line, the steel in a garden spade, and most of the metal in the Earth’s core.',
          },
          {
            id: 'cae-ptc-h-rule',
            x: 50,
            y: 80,
            label: 'Same recipe each time',
            description:
              'For any neutral atom: protons = electrons = Z (bottom number), and neutrons = A − Z (top minus bottom). Run that same recipe whichever cell you read.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-ptc-worked-1',
      title: 'Reading the gold cell: protons, neutrons, electrons in Au',
      steps: [
        {
          explanation:
            'Question: a UK GCSE periodic table shows a cell for gold with 197 at the top, the symbol Au in the middle and 79 at the bottom. Work out the number of protons, neutrons and electrons in one neutral atom of gold.',
        },
        {
          explanation:
            'Step 1: read the symbol. Au is the element symbol for gold, taken from the Latin name aurum. This tells us the cell is about gold and nothing else.',
          maths: 'symbol = Au (gold)',
        },
        {
          explanation:
            'Step 2: identify the atomic number. The bottom number on a UK GCSE cell is the atomic number Z. Here Z = 79.',
          maths: 'Z = 79',
        },
        {
          explanation:
            'Step 3: identify the mass number. The top number on a UK GCSE cell is the mass number A. Here A = 197.',
          maths: 'A = 197',
        },
        {
          explanation:
            'Step 4: the proton count equals the atomic number, so there are 79 protons.',
          maths: 'protons = Z = 79',
        },
        {
          explanation:
            'Step 5: a neutral atom has equal numbers of protons and electrons, so there are 79 electrons too.',
          maths: 'electrons = Z = 79',
        },
        {
          explanation:
            'Step 6: the neutron count is the mass number minus the atomic number. So neutrons = 197 − 79 = 118.',
          maths: 'neutrons = A − Z = 197 − 79 = 118',
        },
        {
          explanation:
            'Final answer: one neutral atom of gold has 79 protons, 118 neutrons and 79 electrons. Protons and electrons match because the atom carries no overall charge.',
        },
      ],
    },
    {
      id: 'cae-ptc-worked-2',
      title: 'Reading the magnesium cell: protons, neutrons, electrons in Mg',
      steps: [
        {
          explanation:
            'Question: a school periodic table shows a cell for magnesium with 24 at the top, Mg in the middle and 12 at the bottom. Find the number of protons, neutrons and electrons in one neutral atom of magnesium.',
        },
        {
          explanation:
            'Step 1: read off the mass number from the top of the cell. So A = 24.',
          maths: 'A = 24',
        },
        {
          explanation:
            'Step 2: read off the atomic number from the bottom of the cell. So Z = 12.',
          maths: 'Z = 12',
        },
        {
          explanation:
            'Step 3: the proton count equals the atomic number, so there are 12 protons in one atom of magnesium.',
          maths: 'protons = Z = 12',
        },
        {
          explanation:
            'Step 4: a neutral atom has the same number of protons and electrons, so there are 12 electrons as well.',
          maths: 'electrons = Z = 12',
        },
        {
          explanation:
            'Step 5: the neutron count is the mass number minus the atomic number. So neutrons = 24 − 12 = 12.',
          maths: 'neutrons = A − Z = 24 − 12 = 12',
        },
        {
          explanation:
            'Final answer: one neutral atom of magnesium has 12 protons, 12 neutrons and 12 electrons.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cae-ptc-q1',
      type: 'multiple-choice',
      stem: 'A UK GCSE periodic table cell shows 23 at the top, Na in the middle and 11 at the bottom. Which number is the atomic number?',
      tier: 'core',
      options: [
        '23, because the larger number is always the atomic number.',
        'Neither; the atomic number is given by the symbol Na.',
        'Both numbers together (23 and 11).',
        '11, because the bottom number on a UK GCSE cell is the atomic number Z.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-ptc-mis-swap-top-bottom',
      hint: 'On a UK GCSE periodic table, atomic number Z is the smaller number at the bottom of the cell.',
    },
    {
      id: 'cae-ptc-q2',
      type: 'multiple-choice',
      stem: 'For the same cell (23 / Na / 11), which number is the mass number?',
      tier: 'core',
      options: [
        '11, because the smaller number is always the mass number.',
        '23, because the top number on a UK GCSE cell is the mass number A.',
        'The symbol Na is the mass number.',
        'You add the two numbers: 23 + 11 = 34.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ptc-mis-swap-top-bottom',
    },
    {
      id: 'cae-ptc-q3',
      type: 'numeric-entry',
      stem: 'A periodic table cell shows 16 at the top, O in the middle and 8 at the bottom. How many protons are in one neutral atom of oxygen?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'The proton count equals the atomic number Z, which is the bottom number on a UK GCSE cell.',
    },
    {
      id: 'cae-ptc-q4',
      type: 'numeric-entry',
      stem: 'The same oxygen cell (16 / O / 8). How many electrons are in one neutral atom of oxygen?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'A neutral atom has equal numbers of protons and electrons.',
      misconceptionId: 'cae-ptc-mis-electrons-from-mass',
    },
    {
      id: 'cae-ptc-q5',
      type: 'multiple-choice',
      stem: 'Which calculation gives the number of neutrons from a periodic table cell?',
      tier: 'core',
      options: [
        'mass number + atomic number',
        'atomic number − mass number',
        'mass number − atomic number',
        'mass number ÷ atomic number',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cae-ptc-mis-mass-is-neutrons',
    },
    {
      id: 'cae-ptc-q6',
      type: 'multiple-choice',
      stem: 'A school cell for magnesium shows 24 at the top, Mg in the middle and 12 at the bottom. What does the symbol Mg tell you?',
      tier: 'core',
      options: [
        'The element name only; Mg is the single symbol for magnesium (not M next to g).',
        'The mass number, in shorthand.',
        'The atomic number, in shorthand.',
        'The number of neutrons.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cae-ptc-mis-symbol-letters',
    },
    {
      id: 'cae-ptc-q7',
      type: 'drag-order',
      stem: 'Place these four steps in order to read a periodic table cell and find the number of neutrons in a neutral atom.',
      tier: 'core',
      items: [
        'Subtract the atomic number from the mass number to get the neutron count.',
        'Read the bottom number from the cell and call it the atomic number Z.',
        'Read the top number from the cell and call it the mass number A.',
        'Identify the element from the symbol in the middle of the cell.',
      ],
      correctOrder: [3, 2, 1, 0],
      xpValue: 10,
    },
    {
      id: 'cae-ptc-q8',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A cell for chlorine shows 35 at the top, Cl in the middle and 17 at the bottom. Find the number of neutrons in one neutral chlorine atom.',
      tier: 'confident',
      steps: [
        'Read the cell: mass number A = 35 (top), atomic number Z = 17 (bottom), symbol Cl.',
        'Recall the rule: neutrons = mass number − atomic number, that is neutrons = A − Z.',
        null,
        'So one neutral chlorine atom has 18 neutrons.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the values into the rule: neutrons = 35 − 17 = 18.',
      xpValue: 15,
    },
    {
      id: 'cae-ptc-q9',
      type: 'numeric-entry',
      stem: 'A cell for iron reads 56 at the top, Fe in the middle and 26 at the bottom. How many neutrons are in one neutral atom of iron?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: 'Use neutrons = A − Z with A = 56 and Z = 26.',
    },
    {
      id: 'cae-ptc-q10',
      type: 'numeric-entry',
      stem: 'A cell for potassium reads 39 at the top, K in the middle and 19 at the bottom. How many neutrons are in one neutral atom of potassium?',
      tier: 'confident',
      correctAnswer: 20,
      xpValue: 15,
      hint: 'Use neutrons = A − Z with A = 39 and Z = 19.',
    },
    {
      id: 'cae-ptc-q11',
      type: 'numeric-entry',
      stem: 'A cell for copper reads 64 at the top, Cu in the middle and 29 at the bottom. How many electrons are in one neutral atom of copper?',
      tier: 'core',
      correctAnswer: 29,
      xpValue: 10,
      hint: 'Electrons in a neutral atom equal the protons, and protons = Z.',
      misconceptionId: 'cae-ptc-mis-electrons-from-mass',
    },
    {
      id: 'cae-ptc-q12',
      type: 'multiple-choice',
      stem: 'A cell for calcium reads 40 at the top, Ca in the middle and 20 at the bottom. Which line gives the correct subatomic particle counts for one neutral atom of calcium?',
      tier: 'confident',
      options: [
        '40 protons, 20 neutrons, 40 electrons',
        '20 protons, 40 neutrons, 20 electrons',
        '20 protons, 20 neutrons, 40 electrons',
        '20 protons, 20 neutrons, 20 electrons',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cae-ptc-mis-mass-is-neutrons',
    },
    {
      id: 'cae-ptc-q13',
      type: 'spot-misconception',
      stem: 'Holly says: "On the periodic table, the bigger number must be the atomic number, because atoms are made of lots of protons."',
      tier: 'confident',
      statements: [
        {
          text: 'Holly is right. The atomic number is always the larger of the two numbers in a cell.',
          isMisconception: true,
        },
        {
          text: 'Holly is wrong. On a UK GCSE periodic table, the atomic number Z is the smaller number at the bottom of the cell; the mass number A is the larger number at the top.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-ptc-mis-swap-top-bottom',
    },
    {
      id: 'cae-ptc-q14',
      type: 'multiple-choice',
      stem: 'A cell for aluminium reads 27 at the top, Al in the middle and 13 at the bottom. Which numbers come straight from the cell, and which need a calculation?',
      tier: 'confident',
      options: [
        'Protons and electrons need a calculation; neutrons come straight from the cell.',
        'All three (protons, neutrons, electrons) come straight from the cell with no calculation.',
        'All three need a calculation; none come straight from the cell.',
        'Protons come straight from the cell (= Z); electrons come straight from the cell for a neutral atom (= Z); neutrons need the subtraction A − Z.',
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'cae-ptc-q15',
      type: 'multiple-choice',
      stem: 'A cell for sodium shows 23 at the top, Na in the middle and 11 at the bottom. Which line gives the correct subatomic particle counts for one neutral atom of sodium?',
      tier: 'confident',
      options: [
        '23 protons, 11 neutrons, 23 electrons',
        '11 protons, 23 neutrons, 11 electrons',
        '11 protons, 12 neutrons, 11 electrons',
        '12 protons, 11 neutrons, 12 electrons',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Use protons = Z, electrons = Z (neutral), neutrons = A − Z.',
    },
    {
      id: 'cae-ptc-q16',
      type: 'multiple-choice',
      stem: 'In Year 7 Sara opens an old textbook printed in 1968. In that book the cell for sodium has 11 at the top and 23 at the bottom, the opposite way round to her school periodic table. Which sentence is the best advice?',
      tier: 'confident',
      options: [
        'The textbook is wrong and the numbers do not work in that order.',
        'It does not matter which is which; both numbers are atomic numbers.',
        'On any cell the atomic number Z is the smaller number (here 11) and the mass number A is the larger number (here 23). Some older books print Z on top, but the meaning of each number is fixed by its size, not its position.',
        'The book is using different elements; the numbers cannot be compared.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-ptc-mis-swap-top-bottom',
    },
    {
      id: 'cae-ptc-q17',
      type: 'numeric-entry',
      stem: 'A cell for gold reads 197 at the top, Au in the middle and 79 at the bottom. How many neutrons are in one neutral atom of gold?',
      tier: 'challenge',
      correctAnswer: 118,
      xpValue: 20,
      hint: 'Apply neutrons = A − Z = 197 − 79.',
    },
    {
      id: 'cae-ptc-q18',
      type: 'multiple-choice',
      stem: 'Two cells on a UK GCSE periodic table both show the symbol of the element along with the numbers. Cell P reads 35 at the top, Cl in the middle and 17 at the bottom. Cell Q reads 37 at the top, Cl in the middle and 17 at the bottom. Which sentence is correct?',
      tier: 'challenge',
      options: [
        'P and Q are the same element (chlorine, Z = 17), but the atoms have different neutron counts: P has 18 neutrons, Q has 20 neutrons.',
        'P and Q are different elements, because the top numbers differ.',
        'P has more protons than Q.',
        'Q has more electrons in a neutral atom than P.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'The element is fixed by Z. Different A with the same Z means different neutron counts.',
      misconceptionId: 'cae-ptc-mis-mass-defines-element',
    },
    {
      id: 'cae-ptc-q19',
      type: 'multiple-choice',
      stem: 'A cell shows 12 at the top, C in the middle and 6 at the bottom. A pupil writes "carbon has 12 protons because the bigger number is the atomic number". What is the best correction?',
      tier: 'challenge',
      options: [
        'The pupil is right; 12 is the atomic number.',
        'The pupil should ignore both numbers and look at the symbol C.',
        'The pupil has swapped the two numbers. On a UK GCSE cell the atomic number Z is the smaller number (here 6), so carbon has 6 protons. The 12 at the top is the mass number A.',
        'The pupil should add the two numbers to get 18 protons.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cae-ptc-mis-swap-top-bottom',
    },
    {
      id: 'cae-ptc-q20',
      type: 'numeric-entry',
      stem: 'A cell for an unknown element X reads 31 at the top and 15 at the bottom. How many neutrons are in one neutral atom of element X?',
      tier: 'challenge',
      correctAnswer: 16,
      xpValue: 20,
      hint: 'Use neutrons = A − Z = 31 − 15, not A + Z. The element happens to be phosphorus, P.',
      misconceptionId: 'cae-ptc-mis-add-not-subtract',
    },
    {
      id: 'cae-ptc-q21',
      type: 'spot-misconception',
      stem: 'Owen says: "The mass number on a periodic table cell tells you how many neutrons are in the atom, because neutrons give the atom its mass."',
      tier: 'challenge',
      statements: [
        {
          text: 'Owen is right. Mass number A is the neutron count.',
          isMisconception: true,
        },
        {
          text: 'Owen is wrong. The mass number A counts protons plus neutrons together. To get the neutron count on its own you do A − Z. For example, sodium (A = 23, Z = 11) has 23 − 11 = 12 neutrons, not 23.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-ptc-mis-mass-is-neutrons',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q01 on atomic structure: candidates "routinely identified the larger printed number as the atomic number, taking 23 from a sodium cell as Z rather than A." Reinforced by CGP KS3 Chemistry on reading periodic table cells.
    {
      id: 'cae-ptc-mis-swap-top-bottom',
      description:
        'The bigger of the two numbers in a periodic table cell is always the atomic number.',
      triggerAnswer: 'swap-top-bottom',
      correction:
        'In fact on a UK GCSE periodic table the atomic number Z is the smaller number, usually at the bottom of the cell, and the mass number A is the larger number, at the top.',
      reExplanation:
        'Read by position, then check by size. On a UK GCSE cell the top number is the mass number A and the bottom number is the atomic number Z. The atomic number is smaller because it only counts the protons, while the mass number counts protons plus neutrons. So in a sodium cell printed 23 / Na / 11, the 11 is Z (protons) and the 23 is A (protons + neutrons).',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q02 on subatomic particle counts: candidates "wrote that the mass number gives the number of neutrons, e.g. sodium has 23 neutrons, missing that mass number is protons plus neutrons together." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on atomic structure.
    {
      id: 'cae-ptc-mis-mass-is-neutrons',
      description:
        'The mass number A in a periodic table cell tells you the number of neutrons in the atom.',
      triggerAnswer: 'mass-is-neutrons',
      correction:
        'In fact the mass number A counts protons plus neutrons. To find the neutron count alone, subtract the atomic number Z from the mass number: neutrons = A − Z.',
      reExplanation:
        'Think of mass number A as the total particle count in the nucleus, which means protons and neutrons added together. So for sodium (A = 23, Z = 11), the nucleus has 23 particles in total, but only 11 of those are protons. The other 23 − 11 = 12 must be neutrons. Always do the subtraction; never read the top number as a direct neutron count.',
    },
    // Source: OCR GCSE Chemistry examiner report June 2019 (J248), C1 atomic structure: candidates "used the mass number rather than the atomic number to find electrons in a neutral atom." Reinforced by CGP KS3 Chemistry on electrons in neutral atoms.
    {
      id: 'cae-ptc-mis-electrons-from-mass',
      description:
        'The number of electrons in a neutral atom equals the mass number.',
      triggerAnswer: 'electrons-from-mass',
      correction:
        'In fact the number of electrons in a neutral atom equals the atomic number, because a neutral atom has the same number of positive protons and negative electrons.',
      reExplanation:
        'Electrons live outside the nucleus and carry the negative charge. For an atom to be electrically neutral the number of electrons must match the number of protons, which is Z (the bottom number on a UK GCSE cell). For magnesium (A = 24, Z = 12) the electron count is 12, not 24. The mass number A is about the nucleus only; it does not count electrons at all.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q02 on element identity: candidates "claimed that two atoms with different mass numbers must be different elements, missing the role of the atomic number." Reinforced by Vanessa Kind, "Beyond Appearances", RSC Education on isotopes and element identity.
    {
      id: 'cae-ptc-mis-mass-defines-element',
      description:
        'Two atoms with different mass numbers must be different elements.',
      triggerAnswer: 'mass-defines-element',
      correction:
        'In fact the element is fixed by the atomic number Z (the proton count), not by the mass number. Two atoms with the same Z but different A are still the same element; they differ in neutron count only.',
      reExplanation:
        'Chlorine cells with A = 35 and A = 37 both show Z = 17, so both atoms are chlorine. The 35 atom has 35 − 17 = 18 neutrons and the 37 atom has 37 − 17 = 20 neutrons. Same element, different neutron counts. Change Z and you change the element; change A while keeping Z the same and you keep the element but change a small amount of mass.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q01 on reading periodic table cells: candidates "added the two numbers in the cell to find the neutron count, writing 23 + 11 = 34 for sodium." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on subatomic particle calculations.
    {
      id: 'cae-ptc-mis-add-not-subtract',
      description:
        'To find the number of neutrons from a periodic table cell, add the atomic number and the mass number together.',
      triggerAnswer: 'add-not-subtract',
      correction:
        'In fact the neutron count is the mass number minus the atomic number: neutrons = A − Z. Adding the two numbers gives nothing physically meaningful.',
      reExplanation:
        'The mass number A already includes the protons in its total, so to peel out just the neutrons you have to take the protons away: neutrons = A − Z. For sodium (A = 23, Z = 11) that gives 23 − 11 = 12 neutrons, not 23 + 11 = 34. The plus operation would double count the protons.',
    },
    // Source: David Paterson, "Teaching atomic structure at Key Stage 3", RSC Education CPD article (2021-05-04): a recurring Year 7 confusion is to read the symbol of a multi-letter element as two elements (e.g. Mg read as "magnesium-gold" or as "M next to G"). Reinforced by AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q01 on element symbols.
    {
      id: 'cae-ptc-mis-symbol-letters',
      description:
        'A two-letter symbol in a periodic table cell stands for two different elements, one for each letter.',
      triggerAnswer: 'symbol-letters',
      correction:
        'In fact a two-letter symbol always names a single element, with one capital followed by one lowercase letter. Mg is the single symbol for magnesium; it is not M and g.',
      reExplanation:
        'A periodic table symbol uses one capital letter, sometimes followed by one lowercase letter, to name one element. Mg is magnesium, Na is sodium, Au is gold and Fe is iron. The lowercase second letter is not a separate symbol. Compare CO (two symbols, the compound carbon monoxide) with Co (one symbol, the element cobalt) to see why capitalisation matters.',
    },
    // Source: OCR GCSE Chemistry examiner report June 2020 (J248), C1 atomic structure: candidates "applied the rule electrons = protons to ions as well as to neutral atoms, missing that the periodic table cell describes the neutral atom." Reinforced by CGP KS3 Chemistry on neutral atoms versus ions.
    {
      id: 'cae-ptc-mis-electrons-always-equal-protons',
      description:
        'The number of electrons always equals the number of protons, no matter what.',
      triggerAnswer: 'electrons-always-equal-protons',
      correction:
        'In fact electrons equal protons only in a neutral atom. The periodic table cell describes the neutral atom by default, so on this topic that rule holds; but in an ion the electron count differs from the proton count.',
      reExplanation:
        'A periodic table cell shows the atomic number Z and the mass number A for the neutral atom. For neutral atoms, electrons = protons = Z, so the rule is safe to use when you read a cell. Charged atoms (ions) lose or gain electrons, so a sodium ion Na⁺ has 11 protons but only 10 electrons. This topic stays with neutral atoms; the ion case comes later under ionic bonding.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
