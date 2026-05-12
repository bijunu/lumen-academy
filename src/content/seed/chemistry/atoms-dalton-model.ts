import type { SkillNode } from '@/types/content'

export const daltonAtomicModel: SkillNode = {
  id: 'chemistry-atoms-dalton-model',
  title: "Dalton's Atomic Model",
  description:
    "Learn the four key ideas in John Dalton's 1803 atomic model: atoms are tiny and indivisible, atoms of one element are identical, atoms of different elements differ, and compounds form when atoms join in fixed whole-number ratios. Place Dalton in the story of how the atomic model has changed as new evidence has come in.",
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-elements-compounds-basics'],
  curriculum: {
    ks3Objective:
      "A simple (Dalton) atomic model; understanding the historical development of the atomic model as a key scientific idea.",
    awardingBodies: {
      aqa: '4.1.1.1 Atoms, elements and compounds; development of models of atomic structure (8462)',
      edexcel:
        'Topic 1.1 Atoms, elements and compounds; development of the periodic table (1CH0)',
      ocr: 'C1.1a Atoms, elements and compounds; development of atomic models (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-dalton-scene-1',
      title: "Dalton's Four Ideas About Atoms",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to read one of John Dalton's four key ideas about atoms, set out in his 1803 work in Manchester.",
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="15" y="20" width="135" height="70" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="82" y="40" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Idea 1</text><circle cx="55" cy="65" r="9" fill="#1E3A8A"/><circle cx="80" cy="65" r="9" fill="#1E3A8A"/><circle cx="105" cy="65" r="9" fill="#1E3A8A"/><text x="82" y="85" text-anchor="middle" font-size="6" fill="#7C2D12">tiny, indivisible balls</text></g><g><rect x="170" y="20" width="135" height="70" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="237" y="40" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Idea 2</text><circle cx="200" cy="65" r="9" fill="#EF4444"/><circle cx="225" cy="65" r="9" fill="#EF4444"/><circle cx="250" cy="65" r="9" fill="#EF4444"/><circle cx="275" cy="65" r="9" fill="#EF4444"/><text x="237" y="85" text-anchor="middle" font-size="6" fill="#7C2D12">atoms of one element are identical</text></g><g><rect x="15" y="110" width="135" height="70" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="82" y="130" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Idea 3</text><circle cx="55" cy="155" r="9" fill="#1E3A8A"/><circle cx="80" cy="155" r="11" fill="#10B981"/><circle cx="108" cy="155" r="13" fill="#F59E0B"/><text x="82" y="175" text-anchor="middle" font-size="6" fill="#7C2D12">different elements have different atoms</text></g><g><rect x="170" y="110" width="135" height="70" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><text x="237" y="130" text-anchor="middle" font-size="9" fill="#1E3A8A" font-weight="700">Idea 4</text><circle cx="200" cy="155" r="9" fill="#1E3A8A"/><circle cx="220" cy="155" r="11" fill="#EF4444"/><line x1="209" y1="155" x2="211" y2="155" stroke="#475569"/><circle cx="250" cy="155" r="9" fill="#1E3A8A"/><circle cx="270" cy="155" r="11" fill="#EF4444"/><line x1="259" y1="155" x2="261" y2="155" stroke="#475569"/><text x="237" y="175" text-anchor="middle" font-size="6" fill="#7C2D12">fixed whole-number ratios in compounds</text></g></svg>',
        hotspots: [
          {
            id: 'cae-dalton-h-idea1',
            x: 25,
            y: 28,
            label: 'Idea 1: atoms are tiny and indivisible',
            description:
              'Dalton pictured atoms as solid, ball-like particles that cannot be split or destroyed. Every chemical reaction just rearranges these atoms; it never makes new ones or breaks old ones apart.',
          },
          {
            id: 'cae-dalton-h-idea2',
            x: 65,
            y: 28,
            label: 'Idea 2: atoms of one element are identical',
            description:
              'For Dalton, every atom of, say, oxygen had the same mass and the same properties as every other oxygen atom. One sample of pure oxygen would behave like any other.',
          },
          {
            id: 'cae-dalton-h-idea3',
            x: 25,
            y: 70,
            label: 'Idea 3: atoms of different elements differ',
            description:
              'Hydrogen atoms and oxygen atoms are not the same. They have different masses and properties. This is why hydrogen gas behaves nothing like oxygen gas.',
          },
          {
            id: 'cae-dalton-h-idea4',
            x: 65,
            y: 70,
            label: 'Idea 4: compounds join in fixed whole-number ratios',
            description:
              'When atoms of different elements bond into a compound, they always combine in simple whole-number ratios. Water is always 2 hydrogens to 1 oxygen, never 1.7 to 1.',
          },
        ],
      },
    },
    {
      id: 'cae-dalton-scene-2',
      title: 'The Story of the Atomic Model',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk along the timeline of the atomic model, from Dalton in 1803 to the modern picture used in school today.',
      data: {
        viewBox: '0 0 360 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 180"><rect x="0" y="0" width="360" height="180" fill="#FEF3C7"/><line x1="20" y1="100" x2="340" y2="100" stroke="#475569" stroke-width="2"/><g><circle cx="50" cy="100" r="6" fill="#1E3A8A"/><text x="50" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">1803</text><text x="50" y="125" text-anchor="middle" font-size="7" fill="#7C2D12">Dalton: solid balls</text></g><g><circle cx="130" cy="100" r="6" fill="#1E3A8A"/><text x="130" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">1897</text><text x="130" y="125" text-anchor="middle" font-size="7" fill="#7C2D12">Thomson: electron found</text></g><g><circle cx="210" cy="100" r="6" fill="#1E3A8A"/><text x="210" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">1911</text><text x="210" y="125" text-anchor="middle" font-size="7" fill="#7C2D12">Rutherford: nucleus</text></g><g><circle cx="290" cy="100" r="6" fill="#1E3A8A"/><text x="290" y="80" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">today</text><text x="290" y="125" text-anchor="middle" font-size="7" fill="#7C2D12">nucleus + electron shells</text></g><text x="180" y="160" text-anchor="middle" font-size="8" fill="#1E3A8A">Each step kept the useful parts of the old model and added new evidence.</text></svg>',
        hotspots: [
          {
            id: 'cae-dalton-h-1803',
            x: 14,
            y: 55,
            label: '1803: Dalton in Manchester',
            description:
              'John Dalton, working in Manchester, set out his four-part atomic theory. It was the first model with masses and ratios that chemists could test in the lab.',
          },
          {
            id: 'cae-dalton-h-1897',
            x: 36,
            y: 55,
            label: '1897: Thomson discovers the electron',
            description:
              "J.J. Thomson at Cambridge found a tiny negatively charged particle, the electron, coming out of atoms. This broke Dalton's idea that atoms are indivisible.",
          },
          {
            id: 'cae-dalton-h-1911',
            x: 58,
            y: 55,
            label: '1911: Rutherford and the nucleus',
            description:
              "Ernest Rutherford's experiments in Manchester showed atoms have a tiny, dense, positive nucleus with electrons around it. Atoms now had internal structure.",
          },
          {
            id: 'cae-dalton-h-today',
            x: 80,
            y: 55,
            label: 'Today: nucleus plus electron shells',
            description:
              "The modern school model keeps Dalton's idea that atoms combine in whole-number ratios, but adds a nucleus of protons and neutrons, with electrons in shells around it.",
          },
        ],
      },
    },
    {
      id: 'cae-dalton-scene-3',
      title: 'Worked Example: Why Water Is Always H₂O',
      type: 'labelled-diagram',
      instructions:
        "Click each marker to work through how Dalton's fixed-ratio idea explains why every sample of pure water has the same composition.",
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><text x="160" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Pure water from any UK tap: same ratio every time</text><g><rect x="25" y="45" width="80" height="120" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="65" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Sample 1</text><circle cx="45" cy="90" r="6" fill="#1E3A8A"/><circle cx="60" cy="90" r="6" fill="#1E3A8A"/><circle cx="80" cy="90" r="9" fill="#EF4444"/><circle cx="45" cy="120" r="6" fill="#1E3A8A"/><circle cx="60" cy="120" r="6" fill="#1E3A8A"/><circle cx="80" cy="120" r="9" fill="#EF4444"/><text x="65" y="155" text-anchor="middle" font-size="7" fill="#7C2D12">2 H : 1 O</text></g><g><rect x="120" y="45" width="80" height="120" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="160" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Sample 2</text><circle cx="140" cy="80" r="6" fill="#1E3A8A"/><circle cx="155" cy="80" r="6" fill="#1E3A8A"/><circle cx="175" cy="80" r="9" fill="#EF4444"/><circle cx="140" cy="105" r="6" fill="#1E3A8A"/><circle cx="155" cy="105" r="6" fill="#1E3A8A"/><circle cx="175" cy="105" r="9" fill="#EF4444"/><circle cx="140" cy="130" r="6" fill="#1E3A8A"/><circle cx="155" cy="130" r="6" fill="#1E3A8A"/><circle cx="175" cy="130" r="9" fill="#EF4444"/><text x="160" y="155" text-anchor="middle" font-size="7" fill="#7C2D12">2 H : 1 O</text></g><g><rect x="215" y="45" width="80" height="120" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="255" y="60" text-anchor="middle" font-size="8" fill="#1E3A8A" font-weight="700">Sample 3</text><circle cx="235" cy="90" r="6" fill="#1E3A8A"/><circle cx="250" cy="90" r="6" fill="#1E3A8A"/><circle cx="270" cy="90" r="9" fill="#EF4444"/><text x="255" y="155" text-anchor="middle" font-size="7" fill="#7C2D12">2 H : 1 O</text></g><text x="160" y="185" text-anchor="middle" font-size="8" fill="#1E3A8A">Different sample sizes, but the H to O ratio is always 2 to 1.</text></svg>',
        hotspots: [
          {
            id: 'cae-dalton-h-sample1',
            x: 20,
            y: 50,
            label: 'Sample 1: 4 H and 2 O atoms',
            description:
              'A small sample of pure water from a Manchester tap holds 4 hydrogen atoms and 2 oxygen atoms in this picture. The ratio is 4 to 2, which simplifies to 2 to 1.',
          },
          {
            id: 'cae-dalton-h-sample2',
            x: 50,
            y: 50,
            label: 'Sample 2: 6 H and 3 O atoms',
            description:
              'A larger sample of the same pure water holds 6 hydrogens and 3 oxygens. That ratio also simplifies to 2 to 1. The sample is bigger, but the ratio is the same.',
          },
          {
            id: 'cae-dalton-h-sample3',
            x: 80,
            y: 50,
            label: 'Sample 3: 2 H and 1 O atom',
            description:
              'A drop of the same water has 2 hydrogens and 1 oxygen. Same ratio again. This is what Dalton meant by a fixed whole-number ratio: it never drifts to 1.7 to 1 or 2.3 to 1.',
          },
          {
            id: 'cae-dalton-h-summary',
            x: 50,
            y: 92,
            label: 'Why this matters',
            description:
              "Dalton's fixed-ratio idea predicts that every pure compound has one chemical formula. For water, that formula is H₂O, in every sample, in every UK lab, every day.",
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-dalton-worked-1',
      title: "Applying Dalton's Four Ideas to a Reaction",
      steps: [
        {
          explanation:
            "A pupil burns 1 g of magnesium ribbon in the air and weighs the white magnesium oxide powder formed. We want to use Dalton's ideas to explain why the mass goes up.",
        },
        {
          explanation:
            "Step 1: Dalton's Idea 1 says atoms cannot be created or destroyed. So all the magnesium atoms at the start are still present after the burn.",
          maths: 'atoms in = atoms out',
        },
        {
          explanation:
            "Step 2: Idea 4 says atoms join in fixed whole-number ratios. Magnesium and oxygen join in a 1 to 1 ratio in magnesium oxide, MgO. So every Mg atom now has one O atom stuck to it.",
          maths: 'Mg + O → MgO  (1 : 1 ratio)',
        },
        {
          explanation:
            'Step 3: those oxygen atoms came from the air, not from nowhere. So the powder weighs more than the ribbon: ribbon mass plus added oxygen mass.',
          maths: 'mass of MgO = mass of Mg + mass of O',
        },
        {
          explanation:
            'Step 4: this matches what the balance shows in the school lab. Conservation of mass holds, once you remember to count the oxygen taken from the air.',
        },
        {
          explanation:
            "Step 5: this is one of the bits of Dalton's model we still use today, even though we now know atoms are not solid indivisible balls.",
        },
      ],
    },
    {
      id: 'cae-dalton-worked-2',
      title: 'What Dalton Got Wrong: the Electron',
      steps: [
        {
          explanation:
            "Dalton (1803) said atoms are indivisible: they cannot be split into smaller pieces. We want to see how one later experiment broke this idea.",
        },
        {
          explanation:
            'Step 1: In 1897, J.J. Thomson at Cambridge sent an electric current through a near-empty glass tube and saw a beam come from the negative end.',
        },
        {
          explanation:
            'Step 2: The beam bent towards a positive plate. So the beam itself carried negative charge.',
        },
        {
          explanation:
            'Step 3: Thomson measured how strongly it bent and worked out the particles in the beam were nearly 2000 times lighter than a hydrogen atom.',
          maths: 'mass of one electron ≈ 1/1836 of a hydrogen atom',
        },
        {
          explanation:
            'Step 4: These tiny particles came out of atoms in the metal electrode. So atoms must contain something smaller still: the electron.',
        },
        {
          explanation:
            "Step 5: That broke Dalton's Idea 1. Atoms are not indivisible after all; they are made of smaller parts. The model had to be updated, not thrown away.",
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cae-dalton-q1',
      type: 'multiple-choice',
      stem: "In what year did John Dalton publish his atomic theory, while working in Manchester?",
      tier: 'core',
      options: ['1703', '1803', '1897', '1911'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Dalton lived in the early 1800s.',
    },
    {
      id: 'cae-dalton-q2',
      type: 'multiple-choice',
      stem: "Which sentence best describes Dalton's idea of an atom?",
      tier: 'core',
      options: [
        'A central nucleus with electrons in shells around it',
        'A cloud of negative charge with no centre',
        'A small spinning disc with a positive ring',
        'A tiny solid ball that cannot be split into smaller parts',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-dalton-mis-dalton-knew-nucleus',
    },
    {
      id: 'cae-dalton-q3',
      type: 'multiple-choice',
      stem: "Which of these is one of Dalton's four key ideas about atoms?",
      tier: 'core',
      options: [
        'Atoms always contain electrons in fixed shells',
        'Atoms can be split during a chemical reaction',
        'Atoms of different elements have different masses and properties',
        'Atoms of the same element can have different masses',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'cae-dalton-q4',
      type: 'multiple-choice',
      stem: "Dalton said atoms of one element are all the same. Which discovery later showed this was not quite right?",
      tier: 'core',
      options: [
        'Isotopes: atoms of the same element with different masses',
        'Electrons coming out of a beam in a glass tube',
        'A dense nucleus in the centre of the atom',
        'Whole-number ratios in compounds like water',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cae-dalton-mis-isotopes-impossible',
    },
    {
      id: 'cae-dalton-q5',
      type: 'numeric-entry',
      stem: "Dalton said atoms join in fixed whole-number ratios. In one particle of water, H₂O, how many hydrogen atoms are joined to one oxygen atom?",
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Read the small number after the H in H₂O.',
    },
    {
      id: 'cae-dalton-q6',
      type: 'numeric-entry',
      stem: "How many of Dalton's four key ideas about atoms did he publish in his 1803 atomic theory?",
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
    },
    {
      id: 'cae-dalton-q7',
      type: 'drag-order',
      stem: "Place these four steps in the story of the atomic model in time order, earliest first.",
      tier: 'core',
      items: [
        "Rutherford shows atoms have a tiny positive nucleus",
        "Dalton publishes his atomic theory in Manchester",
        "Thomson discovers the electron inside atoms",
        "The modern school model with nucleus and electron shells",
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Dalton is the earliest (1803). The modern model is the latest.',
    },
    {
      id: 'cae-dalton-q8',
      type: 'multiple-choice',
      stem: "A pupil in a Sevenoaks lab burns 1 g of magnesium ribbon and the white powder weighs more than the ribbon did. Which of Dalton's ideas best explains why the total mass is still conserved, once you weigh the oxygen taken from the air?",
      tier: 'confident',
      options: [
        'Atoms can be created during a reaction',
        'Atoms cannot be created or destroyed, only rearranged',
        'Mass appears from energy during burning',
        'Atoms of different elements have different masses',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cae-dalton-mis-mass-created',
    },
    {
      id: 'cae-dalton-q9',
      type: 'multiple-choice',
      stem: "Dalton's model is now out of date. Which of these statements best describes how chemists today treat it?",
      tier: 'confident',
      options: [
        'It is completely wrong, so it should be ignored',
        'It is completely right, so nothing has changed since 1803',
        'Some parts (like fixed whole-number ratios and conservation of mass) still stand; other parts (like indivisible atoms) have been replaced',
        'Only the year is wrong; the rest has not been changed',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-dalton-mis-dalton-all-wrong',
    },
    {
      id: 'cae-dalton-q10',
      type: 'multiple-choice',
      stem: "Which experiment first showed that atoms are not indivisible, breaking one of Dalton's ideas?",
      tier: 'confident',
      options: [
        "Rutherford's gold-foil scattering experiment in 1911",
        "Mendeleev's first periodic table in 1869",
        "Dalton's measurements of gas masses in 1803",
        "Thomson's beam in a glass tube revealing the electron in 1897",
      ],
      correctIndex: 3,
      xpValue: 15,
    },
    {
      id: 'cae-dalton-q11',
      type: 'numeric-entry',
      stem: "Dalton said compounds form in fixed whole-number ratios. In one particle of carbon dioxide, CO₂, how many oxygen atoms are joined to each carbon atom?",
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Read the small number after the O in CO₂.',
    },
    {
      id: 'cae-dalton-q12',
      type: 'numeric-entry',
      stem: "A pupil in a UK school lab heats 4 g of pure copper with plenty of oxygen and forms 5 g of copper oxide. Using conservation of mass (which Dalton's model supports), how many grams of oxygen joined the copper, in g?",
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      unit: 'g',
      hint: 'Total mass after equals total mass before plus oxygen added. 5 g minus 4 g leaves the oxygen.',
      misconceptionId: 'cae-dalton-mis-mass-created',
    },
    {
      id: 'cae-dalton-q13',
      type: 'numeric-entry',
      stem: "Pure water always has hydrogen and oxygen atoms in a 2 to 1 ratio. If one sample holds 12 hydrogen atoms, how many oxygen atoms does it hold?",
      tier: 'confident',
      correctAnswer: 6,
      xpValue: 15,
      hint: 'For every 2 hydrogens there is 1 oxygen. So divide the hydrogens by 2.',
    },
    {
      id: 'cae-dalton-q14',
      type: 'missing-step',
      stem: "Fill in the missing step. Question: a pupil burns 24 g of magnesium in oxygen and 40 g of magnesium oxide forms. Use Dalton's ideas to explain why mass is conserved.",
      tier: 'confident',
      steps: [
        "Dalton's Idea 1 says atoms cannot be created or destroyed in a chemical reaction; they are only rearranged.",
        "So every magnesium atom at the start is still present at the end, just bonded to oxygen.",
        null,
        "Total mass before (24 g magnesium plus 16 g oxygen) equals total mass after (40 g magnesium oxide). Conservation of mass holds.",
      ],
      missingStepIndex: 2,
      correctStep:
        "The extra 16 g in the powder came from oxygen atoms taken from the air, not from new atoms appearing during the burn.",
      xpValue: 15,
    },
    {
      id: 'cae-dalton-q15',
      type: 'spot-misconception',
      stem: "Priya says: \"Dalton's atomic model has been replaced by the modern one, so everything Dalton said is wrong and we don't use any of it any more.\"",
      tier: 'confident',
      statements: [
        {
          text: "Priya is right. Dalton's whole theory has been thrown out and replaced.",
          isMisconception: true,
        },
        {
          text: "Priya is wrong. Several of Dalton's ideas (atoms not being created or destroyed, fixed whole-number ratios in compounds) are still used today. Only the idea of an indivisible solid ball has been replaced.",
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-dalton-mis-dalton-all-wrong',
    },
    {
      id: 'cae-dalton-q16',
      type: 'multiple-choice',
      stem: "Which two of Dalton's ideas are still used in the modern school model? Pick the best pair.",
      tier: 'challenge',
      options: [
        "Atoms are indivisible balls, and atoms of one element are identical",
        "Atoms are rearranged but not created or destroyed in reactions, and compounds form in fixed whole-number ratios",
        "Atoms contain electrons in shells, and atoms have a tiny nucleus",
        "Atoms can split during chemical reactions, and atoms of one element can have different masses",
      ],
      correctIndex: 1,
      xpValue: 20,
    },
    {
      id: 'cae-dalton-q17',
      type: 'multiple-choice',
      stem: "Why is Dalton's atomic model still taught in UK schools today, even though parts of it have been replaced?",
      tier: 'challenge',
      options: [
        "Because UK exam boards do not allow newer models to be taught",
        "Because the modern model has been proven wrong by recent experiments",
        "Because it gives the simplest picture that explains conservation of mass and fixed whole-number ratios, which are the ideas Year 7 chemists need first",
        "Because Dalton lived in Manchester, which is a UK city",
      ],
      correctIndex: 2,
      xpValue: 20,
    },
    {
      id: 'cae-dalton-q18',
      type: 'multiple-choice',
      stem: "Isotopes are atoms of the same element that have different masses (for example chlorine-35 and chlorine-37). Which one of Dalton's four ideas do isotopes show is not quite right?",
      tier: 'challenge',
      options: [
        "Atoms of one element are all identical in mass and properties",
        "Atoms cannot be created or destroyed in a chemical reaction",
        "Compounds form when atoms join in fixed whole-number ratios",
        "Atoms of different elements have different properties",
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'cae-dalton-mis-isotopes-impossible',
    },
    {
      id: 'cae-dalton-q19',
      type: 'spot-misconception',
      stem: "Daniel says: \"When you burn a candle and the wax disappears, atoms have been destroyed. That breaks Dalton's first idea.\"",
      tier: 'challenge',
      statements: [
        {
          text: "Daniel is right. The wax mass falls, so atoms have vanished.",
          isMisconception: true,
        },
        {
          text: "Daniel is wrong. The carbon and hydrogen atoms in the wax have joined with oxygen from the air to form carbon dioxide and water vapour, which drift away as gases. No atoms have been destroyed; they have only been rearranged.",
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-dalton-mis-mass-created',
    },
    {
      id: 'cae-dalton-q20',
      type: 'numeric-entry',
      stem: "Ammonia, NH₃, follows Dalton's fixed-ratio rule with 3 hydrogen atoms for every 1 nitrogen atom. If a sample of pure ammonia holds 21 hydrogen atoms, how many nitrogen atoms does it hold?",
      tier: 'challenge',
      correctAnswer: 7,
      xpValue: 20,
      hint: 'For every nitrogen there are 3 hydrogens. So divide the hydrogens by 3.',
    },
    {
      id: 'cae-dalton-q21',
      type: 'free-text',
      stem: "A pupil claims: \"Dalton's idea that compounds form in fixed whole-number ratios was wrong, because real tap water samples have small impurities.\" Write one or two sentences explaining why this claim does not actually break Dalton's rule.",
      tier: 'challenge',
      sampleAnswer:
        "Dalton's rule applies to pure compounds. Pure water always has hydrogen and oxygen in a 2 to 1 ratio. Tap water is a mixture of water with dissolved minerals, not a single pure compound, so the small impurities do not break Dalton's whole-number ratio for water itself.",
      keywords: ['pure', 'mixture', 'ratio', 'water'],
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q03 on development of atomic models: candidates "wrote that Dalton's atoms contained electrons and a nucleus, conflating Dalton's solid-ball model with later models." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on atomic-model history.
    {
      id: 'cae-dalton-mis-dalton-knew-nucleus',
      description:
        "Dalton's atomic model already included a central nucleus and electrons in shells around it.",
      triggerAnswer: 'dalton-knew-nucleus',
      correction:
        "In fact Dalton (1803) pictured atoms as tiny, solid, indivisible balls. The nucleus was not proposed until Rutherford in 1911, and the electron was not discovered until Thomson in 1897.",
      reExplanation:
        "Dalton wrote nearly a hundred years before anyone knew about the electron, and over a hundred years before the nucleus was found. So his model could not have included them. He drew atoms as plain balls and gave each element its own mass. The internal parts of the atom were added later as new evidence came in, mainly from Thomson in 1897 and Rutherford in 1911.",
    },
    // Source: David Paterson, "Teaching the history of the atomic model at KS3", RSC Education CPD article (2020-09-18): a common Year 7 reaction is "if Dalton was wrong, why are we still learning about him." Reinforced by AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q04: "candidates wrote that Dalton's model has been entirely replaced and contributes nothing to modern chemistry."
    {
      id: 'cae-dalton-mis-dalton-all-wrong',
      description:
        "Dalton's model has been replaced, so every part of his theory is wrong and chemists today use none of it.",
      triggerAnswer: 'dalton-all-wrong',
      correction:
        "In fact several of Dalton's ideas are still used today. Atoms are not created or destroyed in a chemical reaction (conservation of mass), and compounds form in fixed whole-number ratios. Only the idea of indivisible solid balls has been replaced.",
      reExplanation:
        "Scientific models are not all-right or all-wrong. They are updated when new evidence comes in. Dalton's solid-ball idea was replaced after Thomson and Rutherford, but his ideas about conservation of mass and fixed whole-number ratios still match every school lab result. So Year 7 chemists still use Dalton's framework when they balance a reaction or work out a formula like H₂O.",
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q05 on isotopes: candidates "wrote that all atoms of an element must have the same mass, ignoring the existence of isotopes." Reinforced by CGP KS3 Chemistry common-mistake callouts on Dalton's theory.
    {
      id: 'cae-dalton-mis-isotopes-impossible',
      description:
        "Atoms of one element are all identical in every way, including their mass.",
      triggerAnswer: 'isotopes-impossible',
      correction:
        "In fact atoms of one element can have different masses. These are called isotopes. Chlorine, for example, comes mainly as two isotopes: chlorine-35 and chlorine-37. They are both chlorine, but with different masses.",
      reExplanation:
        "Dalton said every atom of an element is identical, and for early 1800s chemistry that was good enough. Later evidence showed that the number of neutrons in the nucleus can vary, even when the number of protons (which fixes the element) is the same. So atoms of one element share their chemistry but can have different masses. This is one of the bits of Dalton's model the modern picture had to update.",
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on conservation of mass: candidates "wrote that mass increases during burning because new atoms are created from heat." Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on burning and rusting.
    {
      id: 'cae-dalton-mis-mass-created',
      description:
        "Atoms can be created or destroyed during a chemical reaction, so total mass can rise or fall on its own.",
      triggerAnswer: 'mass-created',
      correction:
        "In fact atoms are only rearranged in a chemical reaction; they are never created or destroyed. If mass seems to change, the missing atoms are still there, often as a gas leaving or joining.",
      reExplanation:
        "When magnesium ribbon burns, the powder formed weighs more than the ribbon, because oxygen atoms from the air have joined the magnesium. When a candle burns, the wax mass falls, because the carbon and hydrogen atoms have left as carbon dioxide and water vapour. In both cases, if you weigh everything (including any gas going in or out), the total stays the same. This is exactly what Dalton's first idea predicts.",
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: documents the persistent learner habit of treating "atoms are like tiny balls" as the complete modern picture. Reinforced by Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q07: "candidates wrote that atoms are solid balls with nothing inside, missing the modern picture of nucleus and electron shells."
    {
      id: 'cae-dalton-mis-atoms-solid-balls',
      description:
        "Atoms really are tiny solid balls with nothing inside them, just as Dalton drew them.",
      triggerAnswer: 'atoms-solid-balls',
      correction:
        "In fact atoms have internal structure. The modern school model has a tiny dense nucleus of protons and neutrons in the centre, with electrons moving in shells around it. Dalton's solid-ball picture is a useful simplification, not the full story.",
      reExplanation:
        "Drawing an atom as a plain ball is fine when you are learning about reactions and ratios, because Year 7 chemistry only needs the ratio idea. But for understanding why atoms bond, why some are ions, and how the periodic table is laid out, you need the inner structure: protons and neutrons in the nucleus and electrons in shells. The ball is a starting picture; the modern model fills in what is inside it.",
    },
    // Source: David Paterson, "Teaching the history of science at KS3", RSC Education CPD article (2021-02-09): a recurring Year 7 confusion is to think Dalton invented the idea of atoms from scratch. Reinforced by CGP KS3 Chemistry callouts on the history of the atomic model: ancient Greek philosophers (e.g. Democritus) proposed atoms long before Dalton, but without measurements.
    {
      id: 'cae-dalton-mis-dalton-invented-atoms',
      description:
        "John Dalton was the first person ever to suggest that matter is made of atoms.",
      triggerAnswer: 'dalton-invented-atoms',
      correction:
        "In fact the idea of atoms goes back to ancient Greek thinkers like Democritus. Dalton's contribution was to turn the idea into a testable theory with masses and fixed ratios that chemists could check in the lab.",
      reExplanation:
        "Democritus, working in ancient Greece, suggested matter is made of tiny unsplittable pieces he called atoma. But this was a philosophical idea, not based on experiments. Dalton's 1803 theory was new because it gave atoms a measurable mass and predicted whole-number ratios in compounds. Chemists in Manchester and elsewhere could then test his predictions in the lab. So Dalton turned atoms from a thought into a working scientific model.",
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on chemical ratios: a recurring Year 7 error is to assume the ratios in compounds can be any value (e.g. 1.7 to 1) rather than whole numbers. Reinforced by AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q08 on Dalton's law: candidates "wrote ratios like 1.5 to 1 for compounds, missing that Dalton's idea is restricted to whole numbers."
    {
      id: 'cae-dalton-mis-non-whole-ratios',
      description:
        "Atoms in a compound can combine in any ratio, including decimals like 1.7 to 1.",
      triggerAnswer: 'non-whole-ratios',
      correction:
        "In fact Dalton's fourth idea says atoms in a pure compound combine in fixed whole-number ratios, like 1 to 1 in NaCl or 2 to 1 in H₂O. Decimal ratios do not occur.",
      reExplanation:
        "Atoms are whole units; you cannot bond half an oxygen atom to one hydrogen. So the ratios in any pure compound have to be whole numbers. If a sample really did show a ratio of 1.7 to 1, it would be a mixture of two compounds (for example a mixture of two different oxides), not a single pure substance. Dalton's whole-number rule is a strong test for what counts as one pure compound.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
