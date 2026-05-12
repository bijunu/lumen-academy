import type { SkillNode } from '@/types/content'

export const protonsNeutronsElectrons: SkillNode = {
  id: 'chemistry-atoms-protons-neutrons-electrons',
  title: 'Protons, Neutrons and Electrons',
  description:
    'Every atom is built from three subatomic particles: protons (charge +1, relative mass 1) and neutrons (charge 0, relative mass 1) sit inside the tiny central nucleus, while electrons (charge -1, relative mass about 1/1836 so treated as 0 for KS3) move in shells around it. In a neutral atom the number of protons equals the number of electrons, so the total charge is zero. Use atomic number and mass number to count each particle in atoms such as carbon-12, sodium and oxygen.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-elements-compounds-basics'],
  curriculum: {
    ks3Objective:
      'The structure of the atom: proton, neutron and electron; their charges and relative masses; location within the atom.',
    awardingBodies: {
      aqa: '4.1.1.1 Atoms: the structure of the atom; proton, neutron, electron; relative mass and charge (8462)',
      edexcel:
        'Topic 1.3 Atoms, isotopes and relative atomic mass; protons, neutrons, electrons (1CH0)',
      ocr: 'C1.1b Subatomic particles: protons, neutrons, electrons; charges and relative mass (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-pne-scene-1',
      title: 'Inside an Atom: Nucleus and Electron Shells',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read where each subatomic particle sits inside a carbon atom and how heavy it is.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><circle cx="160" cy="110" r="90" fill="none" stroke="#475569" stroke-width="0.6" stroke-dasharray="3 2"/><circle cx="160" cy="110" r="55" fill="none" stroke="#475569" stroke-width="0.6" stroke-dasharray="3 2"/></g><g><circle cx="160" cy="110" r="14" fill="#B91C1C" stroke="#7F1D1D" stroke-width="0.8"/><text x="160" y="113" text-anchor="middle" font-size="8" font-weight="700" fill="#FFFFFF">nucleus</text></g><g fill="#1E3A8A"><circle cx="160" cy="55" r="3.5"/><circle cx="215" cy="110" r="3.5"/><circle cx="160" cy="165" r="3.5"/><circle cx="105" cy="110" r="3.5"/><circle cx="123" cy="73" r="3.5"/><circle cx="197" cy="147" r="3.5"/></g><text x="160" y="18" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Carbon atom (not to scale)</text><text x="50" y="200" font-size="8" fill="#B91C1C">red dot = proton or neutron (in the nucleus)</text><text x="50" y="212" font-size="8" fill="#1E3A8A">blue dot = electron (in a shell)</text></svg>',
        hotspots: [
          {
            id: 'cae-pne-h-nucleus',
            x: 50,
            y: 50,
            label: 'Nucleus: holds protons and neutrons',
            description:
              'The nucleus is the tiny dense centre of the atom. Both protons and neutrons sit here. Almost all the mass of the atom is packed into this nucleus, even though it takes up only a tiny fraction of the volume.',
          },
          {
            id: 'cae-pne-h-proton',
            x: 48,
            y: 50,
            label: 'Proton: charge +1, relative mass 1',
            description:
              'A proton carries a positive charge of +1 and has a relative mass of 1. The number of protons in the nucleus is the atomic number and tells you which element the atom is.',
          },
          {
            id: 'cae-pne-h-neutron',
            x: 52,
            y: 50,
            label: 'Neutron: charge 0, relative mass 1',
            description:
              'A neutron has no charge (it is neutral) and a relative mass of 1, the same as a proton. Neutrons sit alongside protons in the nucleus and add mass without changing the charge.',
          },
          {
            id: 'cae-pne-h-inner-shell',
            x: 33,
            y: 50,
            label: 'Inner electron shell',
            description:
              'Electrons fill shells around the nucleus, starting with the inner shell closest to it. The inner shell can hold up to 2 electrons. Carbon has 2 electrons in this inner shell.',
          },
          {
            id: 'cae-pne-h-outer-shell',
            x: 22,
            y: 50,
            label: 'Outer electron shell',
            description:
              'The next shell out can hold up to 8 electrons. Carbon places its remaining 4 electrons here, giving 2 + 4 = 6 electrons in total, matching its 6 protons.',
          },
          {
            id: 'cae-pne-h-electron',
            x: 67,
            y: 50,
            label: 'Electron: charge -1, relative mass tiny (about 1/1836)',
            description:
              'An electron carries a negative charge of -1 and has a very small mass: about 1/1836 of a proton. For KS3 we treat the electron mass as 0 because it is so small compared with a proton or neutron.',
          },
        ],
      },
    },
    {
      id: 'cae-pne-scene-2',
      title: 'Particle Reference Card: Charge and Relative Mass',
      type: 'labelled-diagram',
      instructions:
        'Click each row of this lab reference card to read the charge, relative mass and location of each subatomic particle.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#F8FAFC"/><rect x="20" y="15" width="280" height="170" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="160" y="32" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">SUBATOMIC PARTICLES REFERENCE</text><line x1="30" y1="40" x2="290" y2="40" stroke="#94A3B8" stroke-width="0.6"/><g font-size="9" fill="#1E3A8A"><text x="40" y="58" font-weight="600">Particle</text><text x="140" y="58" font-weight="600">Charge</text><text x="200" y="58" font-weight="600">Mass</text><text x="250" y="58" font-weight="600">Location</text><text x="40" y="82">Proton</text><text x="140" y="82">+1</text><text x="200" y="82">1</text><text x="250" y="82">Nucleus</text><text x="40" y="102">Neutron</text><text x="140" y="102">0</text><text x="200" y="102">1</text><text x="250" y="102">Nucleus</text><text x="40" y="122">Electron</text><text x="140" y="122">-1</text><text x="200" y="122">about 0</text><text x="250" y="122">Shells</text></g><text x="160" y="155" text-anchor="middle" font-size="7" fill="#475569">A neutral atom has equal numbers of protons and electrons, so the charges cancel out.</text><text x="160" y="170" text-anchor="middle" font-size="7" fill="#475569">Sources: AQA GCSE Chemistry data sheet; RSC Education subatomic particle tables</text></svg>',
        hotspots: [
          {
            id: 'cae-pne-h-card-proton',
            x: 50,
            y: 41,
            label: 'Proton row: +1, mass 1, nucleus',
            description:
              'Protons carry a charge of +1 and a relative mass of 1. They sit in the nucleus. Their count is the atomic number and fixes which element it is.',
          },
          {
            id: 'cae-pne-h-card-neutron',
            x: 50,
            y: 51,
            label: 'Neutron row: 0, mass 1, nucleus',
            description:
              'Neutrons have no charge (the name is a clue: neutral). Their relative mass is 1, matching a proton. They sit beside protons inside the nucleus.',
          },
          {
            id: 'cae-pne-h-card-electron',
            x: 50,
            y: 61,
            label: 'Electron row: -1, mass about 0, shells',
            description:
              'Electrons carry a charge of -1. Their mass is so small (about 1/1836 of a proton) that KS3 treats it as 0. They move in shells around the nucleus.',
          },
          {
            id: 'cae-pne-h-card-balance',
            x: 50,
            y: 78,
            label: 'Why atoms are neutral',
            description:
              'A neutral atom has the same number of protons (charge +1 each) as electrons (charge -1 each), so the positive and negative charges cancel and the overall charge is 0.',
          },
        ],
      },
    },
    {
      id: 'cae-pne-scene-3',
      title: 'Worked Example: Counting Particles in Carbon-12',
      type: 'labelled-diagram',
      instructions:
        'Click each step in the carbon-12 worked example to see how to count protons, neutrons and electrons from the atomic number and mass number.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><rect x="40" y="20" width="240" height="170" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="160" y="40" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Carbon-12 worked example</text><g font-size="9" fill="#1E3A8A"><text x="60" y="65">Step 1: atomic number of carbon = 6</text><text x="60" y="85">Step 2: 6 protons (atomic number)</text><text x="60" y="105">Step 3: neutral atom, so 6 electrons</text><text x="60" y="125">Step 4: mass number = 12</text><text x="60" y="145">Step 5: neutrons = 12 - 6 = 6</text><text x="60" y="170" font-weight="600">Result: 6 protons, 6 neutrons, 6 electrons</text></g></svg>',
        hotspots: [
          {
            id: 'cae-pne-h-work-step1',
            x: 50,
            y: 28,
            label: 'Step 1: read atomic number',
            description:
              'Find carbon on the periodic table. The atomic number is the smaller number written beside the symbol. For carbon, this is 6.',
          },
          {
            id: 'cae-pne-h-work-step2',
            x: 50,
            y: 37,
            label: 'Step 2: protons = atomic number',
            description:
              'The atomic number IS the number of protons. So carbon has 6 protons in its nucleus.',
          },
          {
            id: 'cae-pne-h-work-step3',
            x: 50,
            y: 46,
            label: 'Step 3: electrons in a neutral atom',
            description:
              'A neutral atom has equal numbers of protons and electrons so the charges cancel. Carbon has 6 protons, so it must also have 6 electrons.',
          },
          {
            id: 'cae-pne-h-work-step4',
            x: 50,
            y: 55,
            label: 'Step 4: read mass number',
            description:
              'The mass number is the larger number, written above or after the symbol (the 12 in carbon-12). It counts protons plus neutrons in the nucleus.',
          },
          {
            id: 'cae-pne-h-work-step5',
            x: 50,
            y: 64,
            label: 'Step 5: neutrons = mass number - atomic number',
            description:
              'Subtract the atomic number from the mass number to get the number of neutrons. For carbon-12: 12 - 6 = 6 neutrons.',
          },
          {
            id: 'cae-pne-h-work-result',
            x: 50,
            y: 77,
            label: 'Result: 6, 6, 6',
            description:
              'A carbon-12 atom has 6 protons, 6 neutrons and 6 electrons. The same method works for every neutral atom: protons from atomic number, electrons match protons, neutrons from mass number minus atomic number.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-pne-worked-1',
      title: 'Counting particles in a sodium atom (Na, atomic number 11, mass number 23)',
      steps: [
        {
          explanation:
            'Question: A neutral sodium atom (the metal in table salt, NaCl) has atomic number 11 and mass number 23. How many protons, neutrons and electrons does it contain?',
        },
        {
          explanation:
            'Step 1: read the atomic number. The atomic number tells you the number of protons in the nucleus.',
          maths: 'atomic number = 11 -> 11 protons',
        },
        {
          explanation:
            'Step 2: count electrons. A neutral atom has the same number of electrons as protons, so the +1 charges from the protons cancel with the -1 charges from the electrons.',
          maths: 'electrons = protons = 11',
        },
        {
          explanation:
            'Step 3: read the mass number. The mass number is the total count of protons and neutrons in the nucleus.',
          maths: 'mass number = 23 = protons + neutrons',
        },
        {
          explanation:
            'Step 4: work out the neutrons by subtracting the atomic number from the mass number.',
          maths: 'neutrons = 23 - 11 = 12',
        },
        {
          explanation:
            'Result: a sodium atom has 11 protons, 12 neutrons and 11 electrons.',
        },
      ],
    },
    {
      id: 'cae-pne-worked-2',
      title: 'Why an atom is neutral overall (oxygen, atomic number 8)',
      steps: [
        {
          explanation:
            'Question: An oxygen atom has 8 protons and 8 electrons. Show that its overall charge is 0.',
        },
        {
          explanation:
            'Step 1: list the charges. Each proton carries +1, each electron carries -1, and neutrons are neutral (charge 0) so they do not affect the total.',
          maths: 'proton charge = +1, electron charge = -1, neutron charge = 0',
        },
        {
          explanation:
            'Step 2: add the proton charges. 8 protons each at +1 gives a total of +8.',
          maths: '8 x (+1) = +8',
        },
        {
          explanation:
            'Step 3: add the electron charges. 8 electrons each at -1 gives a total of -8.',
          maths: '8 x (-1) = -8',
        },
        {
          explanation:
            'Step 4: add the two totals together to get the overall charge of the atom.',
          maths: '(+8) + (-8) = 0',
        },
        {
          explanation:
            'Result: an oxygen atom has overall charge 0. Every neutral atom works the same way because the proton and electron counts always match.',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cae-pne-q1',
      type: 'multiple-choice',
      stem: 'Which subatomic particle carries a positive charge of +1 and sits inside the nucleus?',
      tier: 'core',
      options: ['Electron', 'Neutron', 'Proton', 'Shell'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'cae-pne-q2',
      type: 'multiple-choice',
      stem: 'Which subatomic particle has no charge (it is neutral) and a relative mass of 1?',
      tier: 'core',
      options: ['Proton', 'Electron', 'Neutron', 'Nucleus'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'cae-pne-q3',
      type: 'multiple-choice',
      stem: 'Where in the atom do electrons sit?',
      tier: 'core',
      options: [
        'Packed inside the nucleus alongside the protons',
        'In shells (orbits) around the nucleus',
        'Spread evenly through the whole atom like jam in a doughnut',
        'Glued to the protons one for one inside the nucleus',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-pne-mis-electrons-in-nucleus',
    },
    {
      id: 'cae-pne-q4',
      type: 'numeric-entry',
      stem: 'A carbon-12 atom has atomic number 6 and mass number 12. How many protons does one carbon-12 atom contain?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'The atomic number is the number of protons.',
    },
    {
      id: 'cae-pne-q5',
      type: 'numeric-entry',
      stem: 'A neutral oxygen atom has atomic number 8. How many electrons does it have?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'In a neutral atom, the number of electrons equals the number of protons (atomic number).',
    },
    {
      id: 'cae-pne-q6',
      type: 'drag-order',
      stem: 'Order these subatomic particles from heaviest to lightest by relative mass.',
      tier: 'core',
      items: ['Electron (about 1/1836)', 'Proton (relative mass 1)', 'Neutron (relative mass 1)'],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      hint: 'Protons and neutrons have the same relative mass (1). The electron is far lighter.',
    },
    {
      id: 'cae-pne-q7',
      type: 'spot-misconception',
      stem: 'Priya says: "An atom is neutral because protons and electrons each have no charge, like neutrons do."',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. None of the three particles carries any charge, which is why atoms are neutral.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Protons carry +1 and electrons carry -1. An atom is neutral because the proton count equals the electron count, so the positive and negative charges cancel out.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-pne-mis-all-particles-neutral',
    },
    // CONFIDENT (8)
    {
      id: 'cae-pne-q8',
      type: 'multiple-choice',
      stem: 'A sodium atom has atomic number 11 and mass number 23. How many neutrons are in its nucleus?',
      tier: 'confident',
      options: ['11', '12', '23', '34'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cae-pne-mis-mass-number-is-neutrons',
      hint: 'Neutrons = mass number minus atomic number.',
    },
    {
      id: 'cae-pne-q9',
      type: 'numeric-entry',
      stem: 'A neutral magnesium atom has atomic number 12 and mass number 24. How many neutrons does it contain?',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
      hint: 'Use neutrons = mass number - atomic number.',
      misconceptionId: 'cae-pne-mis-mass-number-is-neutrons',
    },
    {
      id: 'cae-pne-q10',
      type: 'numeric-entry',
      stem: 'A neutral chlorine-35 atom has atomic number 17 and mass number 35. How many electrons does it have?',
      tier: 'confident',
      correctAnswer: 17,
      xpValue: 15,
      hint: 'A neutral atom has electrons equal to protons (the atomic number). The mass number does not change this.',
    },
    {
      id: 'cae-pne-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil in a chemistry lab in Bristol needs to find the number of neutrons in a neutral aluminium atom (atomic number 13, mass number 27).',
      tier: 'confident',
      steps: [
        'Read the atomic number from the periodic table: aluminium has atomic number 13, so the nucleus holds 13 protons.',
        'Read the mass number from the data sheet: aluminium has mass number 27, the total count of protons plus neutrons in the nucleus.',
        null,
        'So a neutral aluminium atom has 13 protons, 14 neutrons and 13 electrons.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Subtract the atomic number from the mass number to find the number of neutrons: 27 - 13 = 14 neutrons.',
      xpValue: 20,
    },
    {
      id: 'cae-pne-q12',
      type: 'multiple-choice',
      stem: 'Which statement about the relative masses of the three subatomic particles is correct?',
      tier: 'confident',
      options: [
        'All three (proton, neutron, electron) have a relative mass of 1.',
        'Electrons are the heaviest, then protons, then neutrons.',
        'Protons have a relative mass of 1, but neutrons are much heavier because they sit in the nucleus.',
        'Protons and neutrons have a relative mass of 1; the electron is far lighter and is treated as having a mass of about 0 for KS3.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cae-pne-mis-electron-same-mass',
    },
    {
      id: 'cae-pne-q13',
      type: 'numeric-entry',
      stem: 'A neutral atom has 7 protons and 7 electrons. Each proton carries +1 and each electron carries -1. What is the overall charge on the atom?',
      tier: 'confident',
      correctAnswer: 0,
      xpValue: 15,
      hint: 'Add up: (+1) seven times, then (-1) seven times. Protons and electrons should cancel out.',
    },
    {
      id: 'cae-pne-q14',
      type: 'multiple-choice',
      stem: 'A pupil draws an atom on the classroom whiteboard with the protons spread evenly through the whole atom, mixed in with the electrons. What is wrong with this picture?',
      tier: 'confident',
      options: [
        'Nothing; this is how all atoms look.',
        'Protons should be on the outside and electrons in the middle.',
        'Protons (and neutrons) belong inside the tiny central nucleus. The electrons fill the rest of the atom in shells around it.',
        'There should be no protons, only electrons and neutrons.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-pne-mis-protons-spread-out',
    },
    {
      id: 'cae-pne-q15',
      type: 'spot-misconception',
      stem: 'Tom says: "Most of the mass of an atom comes from its electrons, because there are so many of them whizzing around the nucleus."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The electrons take up most of the volume of the atom, so they must hold most of the mass too.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Each electron has a relative mass of only about 1/1836, while protons and neutrons each have a relative mass of 1. Almost all the mass of the atom is in the nucleus, even though electrons fill most of the volume.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-pne-mis-electron-same-mass',
    },
    // CHALLENGE (6)
    {
      id: 'cae-pne-q16',
      type: 'numeric-entry',
      stem: 'A neutral iron atom has atomic number 26 and mass number 56. How many neutrons does it contain?',
      tier: 'challenge',
      correctAnswer: 30,
      xpValue: 20,
      hint: 'Neutrons = mass number - atomic number = 56 - 26.',
    },
    {
      id: 'cae-pne-q17',
      type: 'multiple-choice',
      stem: 'Two carbon atoms are compared. Carbon-12 has mass number 12; carbon-14 has mass number 14. Both have atomic number 6. Which line gives the correct counts of subatomic particles?',
      tier: 'challenge',
      options: [
        'Carbon-12: 6 protons, 6 neutrons, 6 electrons. Carbon-14: 6 protons, 8 neutrons, 6 electrons.',
        'Carbon-12: 6 protons, 6 neutrons, 6 electrons. Carbon-14: 8 protons, 6 neutrons, 8 electrons.',
        'Carbon-12: 12 protons, 0 neutrons, 12 electrons. Carbon-14: 14 protons, 0 neutrons, 14 electrons.',
        'Carbon-12 and carbon-14 have identical counts because they are both carbon.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'cae-pne-mis-mass-number-is-protons',
    },
    {
      id: 'cae-pne-q18',
      type: 'numeric-entry',
      stem: 'A neutral atom has 11 protons and 12 neutrons. What is its mass number?',
      tier: 'challenge',
      correctAnswer: 23,
      xpValue: 20,
      hint: 'Mass number = protons + neutrons. Electrons are too light to add anything in this count.',
    },
    {
      id: 'cae-pne-q19',
      type: 'multiple-choice',
      stem: 'A teacher in a Manchester chemistry lab states: "If you took only the nucleus of an atom and weighed it, you would have already weighed almost the whole atom." Why is this true?',
      tier: 'challenge',
      options: [
        'Because the electrons have left the atom, so only the nucleus remains.',
        'Because protons and neutrons (in the nucleus) have a relative mass of 1, while each electron has a mass of only about 1/1836. So the few electrons add almost no mass.',
        'Because the nucleus contains all the electrons too.',
        'Because the nucleus is large compared with the rest of the atom.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cae-pne-mis-electron-same-mass',
    },
    {
      id: 'cae-pne-q20',
      type: 'multiple-choice',
      stem: 'A neutral potassium atom has 19 protons and 19 electrons. Each proton carries +1 and each electron carries -1. Which line gives the correct totals for the proton charges, the electron charges and the overall charge on the atom?',
      tier: 'challenge',
      options: [
        '+19 from protons, -19 from electrons, overall charge 0',
        '+19 from protons, +19 from electrons, overall charge +38',
        '-19 from protons, +19 from electrons, overall charge 0',
        '0 from protons, 0 from electrons, overall charge 0',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'Add up the +1 contributions from protons, then the -1 contributions from electrons. They should cancel out in a neutral atom.',
    },
    {
      id: 'cae-pne-q21',
      type: 'multiple-choice',
      stem: 'A model of the atom places a marble in the middle of a school sports hall and tiny pinheads spread out near the walls. The marble represents the nucleus and the pinheads represent electrons. Which statement is the best reading of the model?',
      tier: 'challenge',
      options: [
        'The nucleus is large and fills most of the atom; electrons sit just outside it.',
        'The nucleus is tiny compared with the atom, but it holds almost all of the mass; the electrons take up most of the volume but contribute very little mass.',
        'Electrons are heavier than the nucleus because there are more of them.',
        'A sports hall is the wrong shape; the atom is actually a cube.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cae-pne-mis-protons-spread-out',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (chapter on atomic structure): pupils routinely draw electrons mixed inside the nucleus. Reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q01 on atomic structure: candidates "described electrons as sitting inside the nucleus with the protons and neutrons".
    {
      id: 'cae-pne-mis-electrons-in-nucleus',
      description:
        'Electrons sit inside the nucleus alongside protons and neutrons.',
      triggerAnswer: 'electrons-in-nucleus',
      correction:
        'In fact electrons move in shells around the nucleus. Only protons and neutrons sit inside the nucleus.',
      reExplanation:
        'The atom has two parts: a tiny central nucleus and a much larger region of shells around it. Protons and neutrons live in the nucleus. Electrons fill shells outside the nucleus, starting with the inner shell (up to 2 electrons) and then the next shell out (up to 8). Drawing electrons inside the nucleus puts them in the wrong place and makes it hard to explain how an atom can be mostly empty space.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q02 on atomic structure: candidates "stated that all three subatomic particles are neutral, so the atom is neutral overall." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on atomic structure.
    {
      id: 'cae-pne-mis-all-particles-neutral',
      description:
        'Protons, neutrons and electrons all have no charge, which is why an atom is neutral.',
      triggerAnswer: 'all-particles-neutral',
      correction:
        'In fact protons carry +1 and electrons carry -1; only neutrons are neutral. An atom is neutral because the proton and electron counts match, so the positive and negative charges cancel.',
      reExplanation:
        'Think of charges as a balance sheet. Each proton in the nucleus adds +1 and each electron in a shell adds -1. Neutrons add 0 because they are neutral. In a neutral atom the number of protons equals the number of electrons, so the positive and negative totals cancel and the overall charge is 0. Take an electron away and the balance tips to +1; this is how ions form in later topics.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q03 on atomic structure: candidates "wrote that the mass number is the number of neutrons in the nucleus." Reinforced by CGP KS3 Chemistry Study Book p.34 Common Mistake box on atomic structure.
    {
      id: 'cae-pne-mis-mass-number-is-neutrons',
      description:
        'The mass number gives the number of neutrons in the atom.',
      triggerAnswer: 'mass-number-is-neutrons',
      correction:
        'In fact the mass number is the total count of protons plus neutrons. To find the number of neutrons on its own, subtract the atomic number (the proton count) from the mass number.',
      reExplanation:
        'Protons and neutrons each have a relative mass of 1, so the mass number adds the two counts together. Sodium with atomic number 11 and mass number 23 has 11 protons and 23 - 11 = 12 neutrons. Reading the mass number as "neutrons" makes you miss the protons and gives wrong answers for every neutron count.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q01 on atomic structure: candidates "wrote that the mass number is the number of protons." Reinforced by RSC Education classroom resource "Atomic number and mass number" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cae-pne-mis-mass-number-is-protons',
      description:
        'The mass number is the number of protons in the atom.',
      triggerAnswer: 'mass-number-is-protons',
      correction:
        'In fact the atomic number (the smaller number) gives the proton count. The mass number (the larger number) is protons plus neutrons.',
      reExplanation:
        'Two atoms of the same element always have the same atomic number (proton count) but can have different mass numbers because they can carry different numbers of neutrons. Carbon-12 and carbon-14 both have atomic number 6, so both have 6 protons. Their mass numbers (12 and 14) differ because carbon-12 has 6 neutrons and carbon-14 has 8 neutrons. Treating the mass number as the proton count would force them to be different elements, which they are not.',
    },
    // Source: Vanessa Kind, "Beyond Appearances", RSC Education (chapter on atomic mass): pupils believe electrons make up most of an atom's mass because they "fill" the atom. Reinforced by Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q04: candidates "credited the electron with a relative mass of 1, the same as a proton".
    {
      id: 'cae-pne-mis-electron-same-mass',
      description:
        'Electrons have the same relative mass as protons and neutrons, or even more, because they fill most of the atom.',
      triggerAnswer: 'electron-same-mass',
      correction:
        'In fact each electron has a relative mass of only about 1/1836. Protons and neutrons each have a relative mass of 1, so almost all the mass of the atom is in the nucleus.',
      reExplanation:
        'Mass and volume are different ideas. Electrons take up most of the volume of the atom because they roam in shells far from the nucleus. But each electron is tiny: 1/1836 of a proton mass. For KS3 we treat the electron mass as about 0 because the contribution is so small. The nucleus, although tiny in size, holds nearly all the mass.',
    },
    // Source: David Paterson, "Modelling the atom at KS3", RSC Education CPD article (2021-09-21): pupils draw protons mixed throughout the atom rather than confined to a central nucleus. Reinforced by AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q01: candidates "spread the protons through the whole atom instead of putting them in the nucleus".
    {
      id: 'cae-pne-mis-protons-spread-out',
      description:
        'Protons are spread evenly through the whole atom, mixed in with the electrons.',
      triggerAnswer: 'protons-spread-out',
      correction:
        'In fact protons (and neutrons) sit inside a tiny central nucleus. Electrons fill the much larger space outside the nucleus in shells.',
      reExplanation:
        'A useful classroom picture: place a marble in the middle of a sports hall to stand for the nucleus, and put pinheads near the walls to stand for the electrons. Almost all the space is empty, the marble (nucleus) is tiny, but the marble holds almost all the mass. Putting the protons out in the empty space loses this structure and makes it hard to explain why almost all the mass is in one tiny central spot.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
