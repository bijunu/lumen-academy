import type { SkillNode } from '@/types/content'

export const isotopesAndProperties: SkillNode = {
  id: 'chemistry-atoms-isotopes',
  title: 'Isotopes and Their Properties',
  description:
    'Isotopes are atoms of the same element (same atomic number, same number of protons) with different numbers of neutrons, and therefore different mass numbers. Count neutrons for named isotopes (chlorine-35 and chlorine-37; carbon-12 and carbon-14; protium, deuterium, tritium), decide whether two atoms are isotopes or different elements, and understand at intuition level why the relative atomic mass of chlorine is about 35.5 as a weighted average.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-atomic-mass-number'],
  curriculum: {
    ks3Objective:
      'Isotopes: atoms of the same element with different numbers of neutrons; named examples (chlorine-35, chlorine-37; carbon-12, carbon-14); relative atomic mass as a weighted average.',
    awardingBodies: {
      aqa: '4.1.1.1 Atoms and isotopes; isotopic notation and relative atomic mass (8462)',
      edexcel: 'Topic 1.3 Isotopes; relative atomic mass and isotopic composition (1CH0)',
      ocr: 'C1.1b Isotopes and their properties; calculating relative atomic mass (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-isotopes-scene-1',
      title: 'Chlorine-35 and Chlorine-37: Same Element, Different Mass',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the two natural isotopes of chlorine. Both have 17 protons, but the number of neutrons (and so the mass number) is different.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#EFF6FF"/><g><circle cx="90" cy="110" r="50" fill="none" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="90" cy="110" r="20" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="90" y="113" text-anchor="middle" font-size="8" font-weight="600" fill="#7F1D1D">17 p</text><text x="90" y="123" text-anchor="middle" font-size="8" font-weight="600" fill="#7F1D1D">18 n</text><text x="90" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">chlorine-35</text><text x="90" y="175" text-anchor="middle" font-size="8" fill="#1E3A8A">mass number A = 35</text><text x="90" y="187" text-anchor="middle" font-size="8" fill="#1E3A8A">atomic number Z = 17</text></g><g><circle cx="230" cy="110" r="50" fill="none" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="230" cy="110" r="22" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="230" y="113" text-anchor="middle" font-size="8" font-weight="600" fill="#7F1D1D">17 p</text><text x="230" y="123" text-anchor="middle" font-size="8" font-weight="600" fill="#7F1D1D">20 n</text><text x="230" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">chlorine-37</text><text x="230" y="175" text-anchor="middle" font-size="8" fill="#1E3A8A">mass number A = 37</text><text x="230" y="187" text-anchor="middle" font-size="8" fill="#1E3A8A">atomic number Z = 17</text></g><text x="160" y="208" text-anchor="middle" font-size="8" fill="#475569">Both atoms are chlorine because Z = 17. Only the neutron count differs.</text></svg>',
        hotspots: [
          {
            id: 'cae-isotopes-h-cl35-protons',
            x: 28,
            y: 50,
            label: 'Chlorine-35: 17 protons',
            description:
              'Chlorine-35 has 17 protons in its nucleus. The number of protons is the atomic number Z, and Z always fixes which element the atom is. Z = 17 means chlorine, no matter what else changes.',
          },
          {
            id: 'cae-isotopes-h-cl35-neutrons',
            x: 28,
            y: 60,
            label: 'Chlorine-35: 18 neutrons',
            description:
              'Mass number A minus atomic number Z gives the neutron count. 35 - 17 = 18 neutrons. This is the lighter, more common isotope of chlorine.',
          },
          {
            id: 'cae-isotopes-h-cl37-protons',
            x: 72,
            y: 50,
            label: 'Chlorine-37: 17 protons',
            description:
              'Chlorine-37 also has 17 protons. Same atomic number, same element. If the proton count changed, the atom would stop being chlorine and become a different element.',
          },
          {
            id: 'cae-isotopes-h-cl37-neutrons',
            x: 72,
            y: 60,
            label: 'Chlorine-37: 20 neutrons',
            description:
              '37 - 17 = 20 neutrons. Two extra neutrons compared with chlorine-35 make this isotope heavier, but the chemistry is the same because the electrons (and so the bonding) are identical.',
          },
        ],
      },
    },
    {
      id: 'cae-isotopes-scene-2',
      title: 'Carbon-12 and Carbon-14: A Stable and a Radioactive Isotope',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the two carbon isotopes used most often in school. Both have 6 protons. The neutron count tells you which is stable and which is used for radiocarbon dating.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F0FDF4"/><g><circle cx="90" cy="110" r="50" fill="none" stroke="#14532D" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="90" cy="110" r="18" fill="#86EFAC" stroke="#14532D" stroke-width="1"/><text x="90" y="113" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">6 p</text><text x="90" y="123" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">6 n</text><text x="90" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">carbon-12</text><text x="90" y="175" text-anchor="middle" font-size="8" fill="#14532D">A = 12, Z = 6</text><text x="90" y="187" text-anchor="middle" font-size="8" fill="#14532D">stable; about 99 percent of carbon</text></g><g><circle cx="230" cy="110" r="50" fill="none" stroke="#14532D" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="230" cy="110" r="22" fill="#86EFAC" stroke="#14532D" stroke-width="1"/><text x="230" y="113" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">6 p</text><text x="230" y="123" text-anchor="middle" font-size="8" font-weight="600" fill="#14532D">8 n</text><text x="230" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">carbon-14</text><text x="230" y="175" text-anchor="middle" font-size="8" fill="#14532D">A = 14, Z = 6</text><text x="230" y="187" text-anchor="middle" font-size="8" fill="#14532D">radioactive; used for dating</text></g><text x="160" y="208" text-anchor="middle" font-size="8" fill="#475569">Both atoms are carbon because Z = 6. C-14 has two extra neutrons.</text></svg>',
        hotspots: [
          {
            id: 'cae-isotopes-h-c12-neutrons',
            x: 28,
            y: 55,
            label: 'Carbon-12: 6 neutrons',
            description:
              '12 - 6 = 6 neutrons. C-12 makes up about 99 percent of all carbon atoms on Earth and is the stable reference used to define the atomic mass unit.',
          },
          {
            id: 'cae-isotopes-h-c14-neutrons',
            x: 72,
            y: 55,
            label: 'Carbon-14: 8 neutrons',
            description:
              '14 - 6 = 8 neutrons. C-14 is rare and slightly radioactive; living things take it in from the air, so the C-14 left in old wood or bone tells archaeologists how long ago the sample stopped being alive.',
          },
          {
            id: 'cae-isotopes-h-c14-use',
            x: 72,
            y: 80,
            label: 'Radiocarbon dating in UK archaeology',
            description:
              'British archaeologists use carbon-14 dating on timber from Stonehenge, oak from Iron Age forts, and bones from Roman sites. The amount of C-14 left compared with C-12 gives an age in years.',
          },
          {
            id: 'cae-isotopes-h-same-z',
            x: 50,
            y: 30,
            label: 'Both atoms are carbon (Z = 6)',
            description:
              'It does not matter whether the atom is C-12 or C-14: with 6 protons it is carbon. Change the proton count and it becomes a different element (boron at Z = 5, nitrogen at Z = 7).',
          },
        ],
      },
    },
    {
      id: 'cae-isotopes-scene-3',
      title: 'Hydrogen Isotopes: Protium, Deuterium, Tritium',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the three isotopes of hydrogen. They all have one proton, so they are all hydrogen, but the neutron count gives each a different mass number and a different name.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><circle cx="65" cy="110" r="40" fill="none" stroke="#92400E" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="65" cy="110" r="10" fill="#FDE68A" stroke="#92400E" stroke-width="1"/><text x="65" y="113" text-anchor="middle" font-size="7" font-weight="600" fill="#92400E">1 p</text><text x="65" y="65" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">protium</text><text x="65" y="170" text-anchor="middle" font-size="8" fill="#92400E">A = 1</text><text x="65" y="182" text-anchor="middle" font-size="7" fill="#92400E">0 neutrons</text></g><g><circle cx="160" cy="110" r="40" fill="none" stroke="#92400E" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="160" cy="110" r="14" fill="#FDE68A" stroke="#92400E" stroke-width="1"/><text x="160" y="111" text-anchor="middle" font-size="7" font-weight="600" fill="#92400E">1 p</text><text x="160" y="120" text-anchor="middle" font-size="7" font-weight="600" fill="#92400E">1 n</text><text x="160" y="65" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">deuterium</text><text x="160" y="170" text-anchor="middle" font-size="8" fill="#92400E">A = 2</text><text x="160" y="182" text-anchor="middle" font-size="7" fill="#92400E">1 neutron</text></g><g><circle cx="255" cy="110" r="40" fill="none" stroke="#92400E" stroke-width="0.8" stroke-dasharray="3 2"/><circle cx="255" cy="110" r="17" fill="#FDE68A" stroke="#92400E" stroke-width="1"/><text x="255" y="110" text-anchor="middle" font-size="7" font-weight="600" fill="#92400E">1 p</text><text x="255" y="120" text-anchor="middle" font-size="7" font-weight="600" fill="#92400E">2 n</text><text x="255" y="65" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">tritium</text><text x="255" y="170" text-anchor="middle" font-size="8" fill="#92400E">A = 3</text><text x="255" y="182" text-anchor="middle" font-size="7" fill="#92400E">2 neutrons</text></g><text x="160" y="208" text-anchor="middle" font-size="8" fill="#475569">All three have Z = 1, so all three are hydrogen.</text></svg>',
        hotspots: [
          {
            id: 'cae-isotopes-h-protium',
            x: 20,
            y: 50,
            label: 'Protium (hydrogen-1)',
            description:
              'Protium has 1 proton and 0 neutrons. It is by far the most common hydrogen isotope. Almost every hydrogen atom in a glass of UK tap water is protium.',
          },
          {
            id: 'cae-isotopes-h-deuterium',
            x: 50,
            y: 50,
            label: 'Deuterium (hydrogen-2)',
            description:
              'Deuterium has 1 proton and 1 neutron. Water made from deuterium is called "heavy water". It is rare in nature (about 1 in 6420 hydrogen atoms).',
          },
          {
            id: 'cae-isotopes-h-tritium',
            x: 80,
            y: 50,
            label: 'Tritium (hydrogen-3)',
            description:
              'Tritium has 1 proton and 2 neutrons. It is radioactive and very rare. UK pharmacists used to use it in safety exit signs that glow without electricity.',
          },
          {
            id: 'cae-isotopes-h-same-chemistry',
            x: 50,
            y: 30,
            label: 'Same proton, same chemistry',
            description:
              'All three isotopes have one proton (and one electron), so they bond the same way and behave like hydrogen in reactions. The neutron count changes the mass, not the chemistry.',
          },
        ],
      },
    },
    {
      id: 'cae-isotopes-scene-4',
      title: 'Why Chlorine Is About 35.5 on the Periodic Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the periodic table lists the relative atomic mass of chlorine as 35.5, even though no single chlorine atom weighs 35.5.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><g><rect x="40" y="60" width="100" height="120" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><text x="90" y="55" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">chlorine-35</text><text x="90" y="125" text-anchor="middle" font-size="14" font-weight="700" fill="#1E3A8A">75 percent</text><text x="90" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">3 atoms out of every 4</text></g><g><rect x="180" y="120" width="100" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="230" y="115" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">chlorine-37</text><text x="230" y="155" text-anchor="middle" font-size="14" font-weight="700" fill="#7F1D1D">25 percent</text><text x="230" y="172" text-anchor="middle" font-size="8" fill="#7F1D1D">1 atom out of 4</text></g><text x="160" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Natural chlorine: a mix of two isotopes</text><text x="160" y="200" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Weighted average mass = about 35.5</text><text x="160" y="212" text-anchor="middle" font-size="7" fill="#475569">closer to 35 than to 37 because 35 is more common</text></svg>',
        hotspots: [
          {
            id: 'cae-isotopes-h-ratio',
            x: 30,
            y: 50,
            label: 'About 3 in 4 atoms are Cl-35',
            description:
              'In a sample of natural chlorine (the gas in pool chemistry, or in table salt), roughly 75 percent of the atoms are chlorine-35 and roughly 25 percent are chlorine-37.',
          },
          {
            id: 'cae-isotopes-h-25',
            x: 70,
            y: 65,
            label: 'About 1 in 4 atoms are Cl-37',
            description:
              'Roughly 25 percent of the chlorine atoms are the heavier chlorine-37. So a beaker of chlorine is really a mixture of two isotopes.',
          },
          {
            id: 'cae-isotopes-h-weighted',
            x: 50,
            y: 88,
            label: 'Weighted average: about 35.5',
            description:
              'Because there are more Cl-35 atoms than Cl-37, the average sits closer to 35 than to 37. The exact weighted average works out at about 35.5. That is the value printed on the periodic table.',
          },
          {
            id: 'cae-isotopes-h-no-355atom',
            x: 50,
            y: 30,
            label: 'No single atom weighs 35.5',
            description:
              'Every individual chlorine atom is either Cl-35 or Cl-37. The 35.5 figure only describes the average mass of a typical sample, not any one atom.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-isotopes-worked-1',
      title: 'Counting neutrons in two isotopes of chlorine',
      steps: [
        {
          explanation:
            'Question: Chlorine-35 has mass number A = 35 and atomic number Z = 17. Chlorine-37 has mass number A = 37 and atomic number Z = 17. (a) How many neutrons does each have? (b) Are the two atoms isotopes of the same element, or different elements?',
        },
        {
          explanation:
            'Step 1: write down the rule that links mass number, atomic number and neutrons. Mass number A counts protons plus neutrons. Atomic number Z counts protons only. So neutrons = A minus Z.',
          maths: 'neutrons = A - Z',
        },
        {
          explanation:
            'Step 2: apply the rule to chlorine-35. neutrons = 35 - 17 = 18 neutrons.',
          maths: '35 - 17 = 18',
        },
        {
          explanation:
            'Step 3: apply the rule to chlorine-37. neutrons = 37 - 17 = 20 neutrons.',
          maths: '37 - 17 = 20',
        },
        {
          explanation:
            'Step 4: compare the two atoms. They have the same atomic number Z = 17, so both are chlorine. They have different mass numbers (35 vs 37), so they have different neutron counts.',
        },
        {
          explanation:
            'Step 5: conclude. Same Z, different A means the two atoms are isotopes of chlorine. The difference in neutrons (20 - 18 = 2) explains why Cl-37 is heavier than Cl-35.',
          maths: '20 - 18 = 2 extra neutrons in Cl-37',
        },
      ],
    },
    {
      id: 'cae-isotopes-worked-2',
      title: 'Carbon-12 vs carbon-14: radiocarbon dating an Iron Age timber',
      steps: [
        {
          explanation:
            'Question: A British Museum lab radiocarbon-dates a wooden post dug up at an Iron Age UK site. They compare the two natural isotopes of carbon. Carbon-12 has Z = 6, A = 12. Carbon-14 has Z = 6, A = 14. (a) How many neutrons in each? (b) Are they isotopes? (c) Why do labs measure the carbon-14 amount, not the carbon-12 amount?',
        },
        {
          explanation:
            'Step 1: use neutrons = A minus Z for carbon-12. neutrons = 12 - 6 = 6 neutrons.',
          maths: '12 - 6 = 6',
        },
        {
          explanation:
            'Step 2: apply the same rule to carbon-14. neutrons = 14 - 6 = 8 neutrons.',
          maths: '14 - 6 = 8',
        },
        {
          explanation:
            'Step 3: check the isotope test. Both have Z = 6 (so both are carbon) and different mass numbers (12 vs 14). Same element, different neutron count: yes, these are isotopes of carbon.',
        },
        {
          explanation:
            'Step 4: link to dating. Carbon-12 is stable and never decays. Carbon-14 is radioactive and slowly decays in dead wood. So labs measure how much carbon-14 is left, then work back to estimate when the tree was cut. Carbon-12 amount does not change with age.',
        },
        {
          explanation:
            'Step 5: conclude. The chemistry of carbon-12 and carbon-14 is the same (same electrons), so the wood looks chemically normal. Only their nuclei (and the carbon-14 decay) differ. Isotopes share chemistry but can differ in stability.',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cae-isotopes-q1',
      type: 'multiple-choice',
      stem: 'Which sentence is the best definition of isotopes?',
      tier: 'core',
      options: [
        'Atoms of the same element with the same number of protons but different numbers of neutrons',
        'Atoms of different elements that happen to have the same mass number',
        'Atoms of the same element with different numbers of protons',
        'Atoms that have lost or gained electrons',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cae-isotopes-mis-different-protons',
    },
    {
      id: 'cae-isotopes-q2',
      type: 'multiple-choice',
      stem: 'Two atoms are isotopes of the same element. Which value MUST be the same for both atoms?',
      tier: 'core',
      options: [
        'The mass number A',
        'The atomic number Z (number of protons)',
        'The number of neutrons',
        'The total mass of the atom in grams',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'cae-isotopes-q3',
      type: 'numeric-entry',
      stem: 'Chlorine-35 has mass number A = 35 and atomic number Z = 17. How many neutrons does one atom of chlorine-35 have?',
      tier: 'core',
      correctAnswer: 18,
      xpValue: 10,
      hint: 'neutrons = mass number minus atomic number. Work out 35 minus 17.',
    },
    {
      id: 'cae-isotopes-q4',
      type: 'numeric-entry',
      stem: 'Chlorine-37 has mass number A = 37 and atomic number Z = 17. How many neutrons does one atom of chlorine-37 have?',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      hint: 'Use neutrons = A minus Z. Work out 37 minus 17.',
    },
    {
      id: 'cae-isotopes-q5',
      type: 'numeric-entry',
      stem: 'Carbon-14 has mass number A = 14 and atomic number Z = 6. How many neutrons are in one carbon-14 atom?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
    },
    {
      id: 'cae-isotopes-q6',
      type: 'multiple-choice',
      stem: 'A sample of natural chlorine gas is a mixture of chlorine-35 (about 75 percent of atoms) and chlorine-37 (about 25 percent of atoms). The periodic table prints the relative atomic mass of chlorine as 35.5. What is the best explanation?',
      tier: 'core',
      options: [
        'Every single chlorine atom weighs exactly 35.5 units',
        '35.5 is the mass of a brand new isotope of chlorine in between Cl-35 and Cl-37',
        'The periodic table is wrong; the value should be 36',
        '35.5 is the weighted average mass of a typical sample; it sits closer to 35 than to 37 because Cl-35 is more common',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cae-isotopes-mis-no-355-atom',
    },
    {
      id: 'cae-isotopes-q7',
      type: 'drag-order',
      stem: 'Place these steps in the correct order to work out the number of neutrons in any atom of chlorine-35.',
      tier: 'core',
      items: [
        'Subtract Z from A to get the neutron count',
        'Write down the mass number A for the atom (here A = 35)',
        'Conclude: the atom has 18 neutrons',
        'Write down the atomic number Z for chlorine (here Z = 17)',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 10,
    },
    // CONFIDENT (8)
    {
      id: 'cae-isotopes-q8',
      type: 'multiple-choice',
      stem: 'Atom P has 17 protons and 18 neutrons. Atom Q has 17 protons and 20 neutrons. Which statement is correct?',
      tier: 'confident',
      options: [
        'P and Q are isotopes of the same element because they share the same proton count (Z = 17, chlorine)',
        'P and Q are different elements because the neutron count is different',
        'P and Q cannot exist because chlorine only has one form',
        'P and Q are ions of chlorine, not isotopes',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cae-isotopes-mis-different-protons',
    },
    {
      id: 'cae-isotopes-q9',
      type: 'multiple-choice',
      stem: 'Atom X has 6 protons and 6 neutrons. Atom Y has 7 protons and 7 neutrons. Are X and Y isotopes of the same element?',
      tier: 'confident',
      options: [
        'Yes, because both have the same mass number',
        'Yes, because both have equal protons and neutrons',
        'No, because they have different numbers of protons. X is carbon (Z = 6) and Y is nitrogen (Z = 7)',
        'No, because isotopes must have different mass numbers',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-isotopes-mis-same-mass-same-element',
    },
    {
      id: 'cae-isotopes-q10',
      type: 'numeric-entry',
      stem: 'Carbon-12 has 6 neutrons and carbon-14 has 8 neutrons. How many MORE neutrons does carbon-14 have than carbon-12?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Take the larger neutron count and subtract the smaller. The extra neutrons are what make C-14 heavier.',
    },
    {
      id: 'cae-isotopes-q11',
      type: 'numeric-entry',
      stem: 'Tritium (hydrogen-3) has mass number A = 3 and atomic number Z = 1. How many neutrons does one tritium atom have?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
    },
    {
      id: 'cae-isotopes-q12',
      type: 'multiple-choice',
      stem: 'Which statement about isotopes of the same element is correct?',
      tier: 'confident',
      options: [
        'They react completely differently because they have different masses',
        'They become different elements once their neutron count changes',
        'They have different numbers of electrons in each shell',
        'They have the same number of electrons and so behave the same way chemically; the difference is in mass, not in chemistry',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cae-isotopes-mis-different-chemistry',
    },
    {
      id: 'cae-isotopes-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how to decide whether two given atoms are isotopes of the same element.',
      tier: 'confident',
      steps: [
        'Read the mass number A and the atomic number Z for each atom',
        'Compare the atomic numbers Z of the two atoms',
        null,
        'Compare the mass numbers A of the two atoms',
        'If Z is the same and A is different, the atoms are isotopes of the same element',
      ],
      missingStepIndex: 2,
      correctStep:
        'If Z is different, stop: the two atoms are different elements, not isotopes',
      xpValue: 15,
    },
    {
      id: 'cae-isotopes-q14',
      type: 'spot-misconception',
      stem: 'Yara says: "Chlorine-35 and chlorine-37 must react differently in the school lab because they are different masses."',
      tier: 'confident',
      statements: [
        {
          text: 'Yara is right. Different mass means different chemistry, so Cl-35 and Cl-37 react in different ways with sodium.',
          isMisconception: true,
        },
        {
          text: 'Yara is wrong. Chemistry depends on the electrons, not the neutrons. Both isotopes of chlorine have 17 electrons arranged the same way, so they react in the same way with sodium.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-isotopes-mis-different-chemistry',
    },
    {
      id: 'cae-isotopes-q15',
      type: 'multiple-choice',
      stem: 'A sample of natural carbon is about 99 percent carbon-12 and about 1 percent carbon-13 (with a trace of carbon-14). The relative atomic mass on the periodic table is closest to which whole number?',
      tier: 'confident',
      options: ['12', '13', '14', 'about 12.5, halfway between 12 and 13'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'The weighted average lies closer to the more common isotope. About 99 percent of atoms are C-12, so the average pulls close to 12.',
    },
    // CHALLENGE (5)
    {
      id: 'cae-isotopes-q16',
      type: 'multiple-choice',
      stem: 'Atom J has 17 protons and 18 neutrons. Atom K has 18 protons and 18 neutrons. Which statement is correct?',
      tier: 'challenge',
      options: [
        'J and K are isotopes of the same element because they have the same neutron count',
        'J and K are isotopes of the same element because they have the same mass number',
        'J and K are different elements (J is chlorine, K is argon); they are not isotopes of each other',
        'J and K are ions because their charges must be different',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cae-isotopes-mis-same-neutrons',
    },
    {
      id: 'cae-isotopes-q17',
      type: 'numeric-entry',
      stem: 'An atom has mass number A = 37 and 20 neutrons. What is its atomic number Z?',
      tier: 'challenge',
      correctAnswer: 17,
      xpValue: 20,
      hint: 'Z = A minus neutrons. Work out 37 minus 20. Then check which element that Z value belongs to (chlorine).',
    },
    {
      id: 'cae-isotopes-q18',
      type: 'spot-misconception',
      stem: 'Mo says: "The relative atomic mass of chlorine is 35.5, so somewhere in the lab there must be chlorine atoms that weigh 35.5 units each."',
      tier: 'challenge',
      statements: [
        {
          text: 'Mo is right. Every value on the periodic table belongs to an actual single atom, so a chlorine-35.5 atom must exist.',
          isMisconception: true,
        },
        {
          text: 'Mo is wrong. Every individual chlorine atom is either Cl-35 or Cl-37. The 35.5 figure is a weighted average across many atoms, not the mass of any one atom.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-isotopes-mis-no-355-atom',
    },
    {
      id: 'cae-isotopes-q19',
      type: 'multiple-choice',
      stem: 'A UK archaeology team dates an oak beam from an Iron Age site by measuring how much carbon-14 it still contains, compared with carbon-12. Why does this technique work?',
      tier: 'challenge',
      options: [
        'C-14 and C-12 have different numbers of protons, so the ratio drifts in dead wood',
        'C-14 is gained from soil after burial, so older samples have more of it',
        'Oak only contains carbon-14, so any sample with carbon-12 is modern',
        'C-14 is radioactive and slowly decays after the tree dies, while stable C-12 does not. The C-14 to C-12 ratio falls over time, giving an age',
      ],
      correctIndex: 3,
      xpValue: 20,
    },
    {
      id: 'cae-isotopes-q20',
      type: 'numeric-entry',
      stem: 'A natural sample of element E is 80 percent isotope E-10 and 20 percent isotope E-11. The relative atomic mass of E (a weighted average) is closest to which value to one decimal place?',
      tier: 'challenge',
      correctAnswer: 10.2,
      tolerance: 0.05,
      xpValue: 20,
      hint: 'Weighted average = (0.80 x 10) + (0.20 x 11). Work out 8 + 2.2.',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on "atomic structure", recurring Year 7-8 idea that "isotopes have different numbers of protons"; reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F) Q02 on isotopic notation.
    {
      id: 'cae-isotopes-mis-different-protons',
      description:
        'Isotopes of an element have different numbers of protons (just like different elements do).',
      triggerAnswer: 'different-protons',
      correction:
        'In fact isotopes of an element share the SAME number of protons (the same atomic number Z). They differ only in their number of neutrons (and so in mass number A).',
      reExplanation:
        'The number of protons is what fixes which element an atom is. Cl-35 and Cl-37 both have 17 protons, so both are chlorine. If you changed the proton count, the atom would stop being chlorine and turn into a different element. Isotopes change the neutron count only.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F) Q04 on isotopes: candidates "claimed two atoms with the same mass number must be the same element"; reinforced by RSC Education classroom resource "Isotopes at KS3" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-isotopes-mis-same-mass-same-element',
      description:
        'If two atoms have the same mass number A, they must be the same element.',
      triggerAnswer: 'same-mass-same-element',
      correction:
        'In fact what fixes the element is the atomic number Z, not the mass number. Carbon-14 (Z = 6, A = 14) and nitrogen-14 (Z = 7, A = 14) share a mass number but are different elements.',
      reExplanation:
        'Mass number adds protons and neutrons together, so the same total can be reached in different ways. Always check Z first to identify the element; only then look at A. Two atoms count as isotopes of one element only if Z matches and A differs.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1H) Q05 on isotopes: candidates "predicted different chemistry for Cl-35 and Cl-37 because their masses differ"; reinforced by CGP KS3 Chemistry Study Book p.30 Common Mistake box on isotopes.
    {
      id: 'cae-isotopes-mis-different-chemistry',
      description:
        'Different isotopes of the same element react differently in the school lab because they have different masses.',
      triggerAnswer: 'different-chemistry',
      correction:
        'In fact chemistry depends on the electrons, not the neutrons. Isotopes of the same element have the same number of electrons arranged the same way, so they react in the same way.',
      reExplanation:
        'Reactions form and break bonds, and bonds are made by electrons. Cl-35 and Cl-37 both carry 17 electrons in identical shells, so both react with sodium to form sodium chloride in exactly the same way. The neutrons add mass but do not change how the atom bonds.',
    },
    // Source: David Paterson, "Teaching relative atomic mass at KS3", RSC Education CPD article (2022-04-12): pupils "expect a single chlorine atom to weigh 35.5 because that is the periodic table value"; reinforced by Edexcel GCSE Chemistry examiner report June 2021 (1CH0/1H) Q03 on relative atomic mass.
    {
      id: 'cae-isotopes-mis-no-355-atom',
      description:
        'Because the periodic table prints chlorine as 35.5, there must be individual chlorine atoms that weigh 35.5 units.',
      triggerAnswer: 'no-355-atom',
      correction:
        'In fact every individual chlorine atom is either Cl-35 or Cl-37. The 35.5 figure is the weighted average across a natural sample, not the mass of any single atom.',
      reExplanation:
        'Relative atomic mass is a sample-level idea: it averages the masses of all the atoms in a typical natural sample, weighted by how common each isotope is. Because chlorine is about 75 percent Cl-35 and 25 percent Cl-37, the average sits closer to 35 than to 37 and works out at about 35.5. No actual atom weighs 35.5.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on atomic structure: recurring Year 7 idea that "two atoms with the same number of neutrons are isotopes"; reinforced by AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q02 on isotope identification.
    {
      id: 'cae-isotopes-mis-same-neutrons',
      description:
        'Two atoms with the same number of neutrons must be isotopes of the same element.',
      triggerAnswer: 'same-neutrons',
      correction:
        'In fact isotopes share the same proton count (Z), not the same neutron count. Different elements can share a neutron count (chlorine with 17 protons and 18 neutrons vs argon with 18 protons and 18 neutrons).',
      reExplanation:
        'The identifier for an element is its proton count. Neutrons set the mass but not the identity. Always check Z first: if Z matches, the two atoms are isotopes of one element; if Z differs, they are different elements no matter how the neutrons line up.',
    },
    // Source: David Paterson, "Atomic structure misconceptions at KS3", RSC Education CPD article (2021-09-08): pupils "treat isotopes as freshly invented elements"; reinforced by CGP KS3 Chemistry Study Book p.30 chapter on isotopes.
    {
      id: 'cae-isotopes-mis-new-element',
      description:
        'When the neutron count of an atom changes, it becomes a brand new element with a new name on the periodic table.',
      triggerAnswer: 'new-element',
      correction:
        'In fact changing the neutron count gives a new isotope of the SAME element, not a new element. Only a change in the proton count changes the element.',
      reExplanation:
        'The periodic table lists elements by proton count (atomic number Z). Cl-35 and Cl-37 are both filed under chlorine (Z = 17). Adding two neutrons does not bump the atom into a new box; it just makes a heavier isotope of chlorine. To change element, you must change protons.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F) Q03 on counting subatomic particles: candidates "subtracted protons from neutrons to get mass number" instead of adding; reinforced by RSC Education classroom resource "Counting subatomic particles at KS3" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-isotopes-mis-subtract-for-mass',
      description:
        'Mass number A is found by subtracting one subatomic particle count from another (for example A = protons minus neutrons).',
      triggerAnswer: 'subtract-for-mass',
      correction:
        'In fact mass number A is the SUM of protons and neutrons. To get the neutron count alone, subtract Z from A (neutrons = A minus Z).',
      reExplanation:
        'Mass number adds the two heavy particles in the nucleus together: protons plus neutrons. Once you know A and Z, you can rearrange to get neutrons = A minus Z. So for Cl-35: protons 17, neutrons 35 minus 17 = 18, total 35. Always add to build A, subtract to extract neutrons.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
