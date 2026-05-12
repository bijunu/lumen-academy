import type { SkillNode } from '@/types/content'

export const relativeAtomicMass: SkillNode = {
  id: 'chemistry-atoms-relative-atomic-mass',
  title: 'Relative Atomic Mass',
  description:
    'Calculate the relative atomic mass (RAM) of an element as a weighted average of its isotopic masses, using percentage abundance data from a mass spectrometer or printed in a textbook. Apply RAM = (m1 x %1 + m2 x %2) / 100 to two-isotope cases (chlorine, copper, boron, bromine) and extend to three-isotope cases (magnesium). Explain why no single atom has the RAM value printed on the periodic table, and why the average sits closer to the more abundant isotope.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'challenge',
  prerequisites: ['chemistry-atoms-isotopes'],
  curriculum: {
    ks3Objective:
      'Relative atomic mass as a weighted average of isotopic masses and abundances; using data from a mass spectrometer or periodic table.',
    awardingBodies: {
      aqa: '4.1.1.1 Relative atomic mass; calculating from isotopic abundance (8462)',
      edexcel: 'Topic 1.3 Relative atomic mass calculations; using mass spectrometry data (1CH0)',
      ocr: 'C1.1c Relative atomic mass; working with isotopic data and percentages (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-ram-scene-1',
      title: 'Chlorine: A Weighted Average of Two Isotopes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a chlorine sample, 75 percent Cl-35 and 25 percent Cl-37, gives a relative atomic mass of 35.5.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#EFF6FF"/><g><rect x="30" y="60" width="120" height="120" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><text x="90" y="55" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Cl-35</text><text x="90" y="120" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">75 percent</text><text x="90" y="148" text-anchor="middle" font-size="8" fill="#1E3A8A">mass 35</text><text x="90" y="162" text-anchor="middle" font-size="8" fill="#1E3A8A">75 x 35 = 2625</text></g><g><rect x="180" y="120" width="120" height="60" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="240" y="115" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">Cl-37</text><text x="240" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#7F1D1D">25 percent</text><text x="240" y="168" text-anchor="middle" font-size="8" fill="#7F1D1D">mass 37</text><text x="240" y="178" text-anchor="middle" font-size="8" fill="#7F1D1D">25 x 37 = 925</text></g><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Natural chlorine sample</text><text x="180" y="200" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">RAM = (2625 + 925) / 100 = 3550 / 100 = 35.5</text></svg>',
        hotspots: [
          {
            id: 'cae-ram-h-cl35-share',
            x: 25,
            y: 50,
            label: 'About 3 in 4 atoms are Cl-35',
            description:
              'Roughly 75 percent of the atoms in a natural chlorine sample weigh 35. Multiply 75 by 35 to get the contribution from Cl-35: 75 x 35 = 2625.',
          },
          {
            id: 'cae-ram-h-cl37-share',
            x: 65,
            y: 65,
            label: 'About 1 in 4 atoms are Cl-37',
            description:
              'Roughly 25 percent of the atoms weigh 37. Multiply 25 by 37 to get the contribution from Cl-37: 25 x 37 = 925.',
          },
          {
            id: 'cae-ram-h-add',
            x: 50,
            y: 88,
            label: 'Add and divide by 100',
            description:
              'Add the two contributions: 2625 + 925 = 3550. Then divide by 100 (the total percentage): 3550 / 100 = 35.5. The 100 represents the whole sample.',
          },
          {
            id: 'cae-ram-h-ram',
            x: 50,
            y: 96,
            label: 'RAM(Cl) = 35.5',
            description:
              'The relative atomic mass of chlorine is 35.5. The average sits closer to 35 than to 37 because Cl-35 is more common. The periodic table prints exactly this value.',
          },
        ],
      },
    },
    {
      id: 'cae-ram-scene-2',
      title: 'The RAM Formula',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to break down the formula used for two-isotope cases (chlorine, copper, bromine).',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#F0FDF4"/><text x="180" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">RAM = (m1 x %1 + m2 x %2) / 100</text><g><rect x="60" y="70" width="80" height="44" rx="6" fill="#86EFAC" stroke="#14532D" stroke-width="0.8"/><text x="100" y="92" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">m1, m2</text><text x="100" y="106" text-anchor="middle" font-size="8" fill="#14532D">mass numbers</text></g><g><rect x="160" y="70" width="100" height="44" rx="6" fill="#86EFAC" stroke="#14532D" stroke-width="0.8"/><text x="210" y="92" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">%1, %2</text><text x="210" y="106" text-anchor="middle" font-size="8" fill="#14532D">percent abundance</text></g><g><rect x="280" y="70" width="60" height="44" rx="6" fill="#86EFAC" stroke="#14532D" stroke-width="0.8"/><text x="310" y="92" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">100</text><text x="310" y="106" text-anchor="middle" font-size="8" fill="#14532D">total %</text></g><text x="180" y="150" text-anchor="middle" font-size="9" fill="#14532D">Check: %1 + %2 must equal 100.</text><text x="180" y="166" text-anchor="middle" font-size="9" fill="#14532D">If percentages are given as decimals (0.75), divide by 1 not 100.</text><text x="180" y="184" text-anchor="middle" font-size="8" fill="#475569">RAM has no units; it is a relative number.</text></svg>',
        hotspots: [
          {
            id: 'cae-ram-h-masses',
            x: 28,
            y: 45,
            label: 'm1, m2: the isotope mass numbers',
            description:
              'Each isotope contributes its own mass number (for chlorine, 35 and 37; for copper, 63 and 65). These are whole numbers because they count protons plus neutrons.',
          },
          {
            id: 'cae-ram-h-percents',
            x: 58,
            y: 45,
            label: '%1, %2: percent abundance from a mass spectrometer',
            description:
              'A mass spectrometer measures what fraction of the sample is each isotope, then converts to a percentage. For chlorine: %1 = 75, %2 = 25. The two percentages must add to 100.',
          },
          {
            id: 'cae-ram-h-divide',
            x: 86,
            y: 45,
            label: 'Divide by 100',
            description:
              'You divide by 100 because the percentages add to 100. This step converts the weighted sum into an average mass per atom. If the abundances are given as decimals that add to 1, divide by 1 (do not divide at all).',
          },
          {
            id: 'cae-ram-h-check',
            x: 50,
            y: 80,
            label: 'Sanity check',
            description:
              'After calculating, the answer should always lie between the lightest and the heaviest isotope mass. If RAM(Cl) came out at 40 or at 30, you would know something went wrong (Cl-35 and Cl-37 bracket the answer).',
          },
        ],
      },
    },
    {
      id: 'cae-ram-scene-3',
      title: 'Three Isotopes: Magnesium in a Mass Spectrometer',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to extend the formula to three isotopes, using the magnesium spectrum produced at UK university teaching labs.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><line x1="40" y1="180" x2="320" y2="180" stroke="#475569" stroke-width="0.8"/><line x1="40" y1="40" x2="40" y2="180" stroke="#475569" stroke-width="0.8"/><text x="180" y="200" text-anchor="middle" font-size="9" fill="#475569">mass number</text><text x="20" y="110" text-anchor="middle" font-size="9" fill="#475569" transform="rotate(-90 20 110)">percent abundance</text><rect x="90" y="70" width="30" height="110" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.8"/><text x="105" y="60" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">Mg-24</text><text x="105" y="195" text-anchor="middle" font-size="8" fill="#7F1D1D">79%</text><rect x="170" y="166" width="30" height="14" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.8"/><text x="185" y="158" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">Mg-25</text><text x="185" y="195" text-anchor="middle" font-size="8" fill="#7F1D1D">10%</text><rect x="250" y="165" width="30" height="15" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.8"/><text x="265" y="158" text-anchor="middle" font-size="9" font-weight="600" fill="#7F1D1D">Mg-26</text><text x="265" y="195" text-anchor="middle" font-size="8" fill="#7F1D1D">11%</text><text x="180" y="30" text-anchor="middle" font-size="10" font-weight="600" fill="#7F1D1D">Magnesium mass spectrum (simplified)</text></svg>',
        hotspots: [
          {
            id: 'cae-ram-h-mg-three',
            x: 28,
            y: 30,
            label: 'Three peaks, three isotopes',
            description:
              'The magnesium spectrum shows three peaks at mass numbers 24, 25 and 26. The peak heights show how common each isotope is in a natural sample: 79 percent at mass 24, 10 percent at mass 25, 11 percent at mass 26.',
          },
          {
            id: 'cae-ram-h-mg-extend',
            x: 50,
            y: 50,
            label: 'Extend the formula',
            description:
              'For three isotopes: RAM = (m1 x %1 + m2 x %2 + m3 x %3) / 100. Pattern is the same as for two isotopes; you just add one more term on top. Percentages must still sum to 100 (79 + 10 + 11 = 100).',
          },
          {
            id: 'cae-ram-h-mg-calc',
            x: 70,
            y: 70,
            label: 'Compute the weighted average',
            description:
              '(79 x 24) + (10 x 25) + (11 x 26) = 1896 + 250 + 286 = 2432. Divide by 100: RAM(Mg) = 24.32. The answer sits closest to 24 because Mg-24 is by far the most abundant.',
          },
          {
            id: 'cae-ram-h-mg-table',
            x: 75,
            y: 90,
            label: 'Matches the periodic table',
            description:
              'The periodic table prints magnesium with RAM about 24.3. UK exam boards round to one decimal place. A teaching mass spectrometer at Manchester or Cambridge produces a similar spectrum from a tiny sample.',
          },
        ],
      },
    },
    {
      id: 'cae-ram-scene-4',
      title: 'Bromine and Boron: Two More Worked Cases',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare bromine (a 50:50 mix) and boron (a 20:80 mix), and see how the abundance ratio shifts the answer.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F8FAFC"/><g><text x="90" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Bromine: 50:50 mix</text><rect x="40" y="40" width="100" height="80" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><text x="90" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Br-79</text><text x="90" y="95" text-anchor="middle" font-size="9" fill="#1E3A8A">50%</text><rect x="40" y="120" width="100" height="80" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="0.8"/><text x="90" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#7F1D1D">Br-81</text><text x="90" y="175" text-anchor="middle" font-size="9" fill="#7F1D1D">50%</text><text x="90" y="212" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">RAM = 80</text></g><g><text x="270" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">Boron: 20:80 mix</text><rect x="220" y="40" width="100" height="32" fill="#86EFAC" stroke="#14532D" stroke-width="0.8"/><text x="270" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">B-10 (20%)</text><rect x="220" y="72" width="100" height="128" fill="#86EFAC" stroke="#14532D" stroke-width="0.8"/><text x="270" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">B-11</text><text x="270" y="150" text-anchor="middle" font-size="9" fill="#14532D">80%</text><text x="270" y="212" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">RAM = 10.8</text></g></svg>',
        hotspots: [
          {
            id: 'cae-ram-h-br-equal',
            x: 25,
            y: 30,
            label: 'Bromine sits exactly in the middle',
            description:
              'When the two isotopes are equally abundant (50:50), the weighted average sits halfway between them. For bromine: (50 x 79 + 50 x 81) / 100 = (3950 + 4050) / 100 = 8000 / 100 = 80. The 50:50 ratio is unusual.',
          },
          {
            id: 'cae-ram-h-br-table',
            x: 25,
            y: 90,
            label: 'Periodic table prints Br = 80',
            description:
              'No bromine atom actually weighs 80 (each atom is either 79 or 81). But the average of a sample is exactly 80 because the two isotopes are equally common.',
          },
          {
            id: 'cae-ram-h-b-skewed',
            x: 75,
            y: 30,
            label: 'Boron sits closer to the heavier isotope',
            description:
              '(20 x 10 + 80 x 11) / 100 = (200 + 880) / 100 = 1080 / 100 = 10.8. The average lands at 10.8, closer to 11 than to 10. The skew makes sense: 4 out of every 5 boron atoms are B-11.',
          },
          {
            id: 'cae-ram-h-rule',
            x: 75,
            y: 90,
            label: 'Rule of thumb',
            description:
              'The RAM always sits inside the range of the isotope masses and is pulled towards whichever isotope is more common. Use this as a sanity check: if your answer falls outside the range, you have made an arithmetic slip.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-ram-worked-1',
      title: 'Chlorine: working out RAM from a 75:25 mix step by step',
      steps: [
        {
          explanation:
            'Question: A natural chlorine sample is 75 percent Cl-35 and 25 percent Cl-37. Calculate the relative atomic mass of chlorine and show why the periodic table prints 35.5.',
        },
        {
          explanation:
            'Step 1: write down the data. Mass m1 = 35, percentage %1 = 75. Mass m2 = 37, percentage %2 = 25. Check that the percentages add to 100: 75 + 25 = 100. They do, so the data is complete.',
          maths: '%1 + %2 = 75 + 25 = 100',
        },
        {
          explanation:
            'Step 2: write the RAM formula for two isotopes. RAM = (m1 x %1 + m2 x %2) / 100.',
          maths: 'RAM = (m1 x %1 + m2 x %2) / 100',
        },
        {
          explanation:
            'Step 3: work out each contribution. Cl-35: 35 x 75 = 2625. Cl-37: 37 x 25 = 925.',
          maths: '35 x 75 = 2625; 37 x 25 = 925',
        },
        {
          explanation:
            'Step 4: add the two contributions and divide by 100. 2625 + 925 = 3550. 3550 / 100 = 35.5.',
          maths: 'RAM = (2625 + 925) / 100 = 3550 / 100 = 35.5',
        },
        {
          explanation:
            'Step 5: sanity check. The answer 35.5 lies between 35 (Cl-35) and 37 (Cl-37), and it sits closer to 35 because Cl-35 is more abundant. This matches the periodic table value.',
        },
      ],
    },
    {
      id: 'cae-ram-worked-2',
      title: 'Copper coins: RAM from a 69:31 mix',
      steps: [
        {
          explanation:
            'Question: Copper (the bulk metal in UK 2p coins) is 69 percent Cu-63 and 31 percent Cu-65. Work out the RAM of copper to two decimal places.',
        },
        {
          explanation:
            'Step 1: list the data. m1 = 63, %1 = 69. m2 = 65, %2 = 31. Check the percentages: 69 + 31 = 100.',
          maths: '%1 + %2 = 69 + 31 = 100',
        },
        {
          explanation:
            'Step 2: write the formula. RAM = (m1 x %1 + m2 x %2) / 100.',
          maths: 'RAM = (63 x 69 + 65 x 31) / 100',
        },
        {
          explanation:
            'Step 3: calculate each contribution. Cu-63: 63 x 69 = 4347. Cu-65: 65 x 31 = 2015.',
          maths: '63 x 69 = 4347; 65 x 31 = 2015',
        },
        {
          explanation:
            'Step 4: add and divide. 4347 + 2015 = 6362. 6362 / 100 = 63.62.',
          maths: 'RAM = 6362 / 100 = 63.62',
        },
        {
          explanation:
            'Step 5: sanity check. 63.62 lies between 63 and 65 and sits closer to 63 because Cu-63 is more common (69 percent vs 31 percent). The periodic table prints copper with RAM about 63.5, in good agreement.',
        },
      ],
    },
    {
      id: 'cae-ram-worked-3',
      title: 'Magnesium: extending to three isotopes',
      steps: [
        {
          explanation:
            'Question: A teaching mass spectrometer at a UK university reports magnesium as 79 percent Mg-24, 10 percent Mg-25, and 11 percent Mg-26. Calculate the RAM of magnesium.',
        },
        {
          explanation:
            'Step 1: list the data. m1 = 24 with %1 = 79. m2 = 25 with %2 = 10. m3 = 26 with %3 = 11. Check: 79 + 10 + 11 = 100.',
          maths: '%1 + %2 + %3 = 79 + 10 + 11 = 100',
        },
        {
          explanation:
            'Step 2: extend the formula. RAM = (m1 x %1 + m2 x %2 + m3 x %3) / 100. Same pattern as for two isotopes; just one more term on top.',
          maths: 'RAM = (m1 x %1 + m2 x %2 + m3 x %3) / 100',
        },
        {
          explanation:
            'Step 3: calculate each contribution. 24 x 79 = 1896. 25 x 10 = 250. 26 x 11 = 286.',
          maths: '1896 + 250 + 286',
        },
        {
          explanation:
            'Step 4: add and divide. 1896 + 250 + 286 = 2432. 2432 / 100 = 24.32.',
          maths: 'RAM = 2432 / 100 = 24.32',
        },
        {
          explanation:
            'Step 5: sanity check. The answer 24.32 lies between 24 and 26 and sits very close to 24, because Mg-24 makes up nearly four out of every five atoms. The periodic table prints magnesium with RAM about 24.3, which agrees.',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-ram-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best defines the relative atomic mass (RAM) of an element?',
      tier: 'core',
      options: [
        'The mass of one single atom of the element in grams',
        'The weighted average mass of the atoms in a natural sample, taking the abundance of each isotope into account',
        'The mass number of the most common isotope',
        'The total mass of all the isotopes added together',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ram-mis-most-common-isotope',
    },
    {
      id: 'cae-ram-q2',
      type: 'multiple-choice',
      stem: 'Which formula gives the relative atomic mass when an element has two isotopes?',
      tier: 'core',
      options: [
        'RAM = (m1 + m2) / 2',
        'RAM = (m1 x %1 + m2 x %2) / 100',
        'RAM = m1 x %1 + m2 x %2',
        'RAM = (m1 x m2) / (%1 + %2)',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q3',
      type: 'numeric-entry',
      stem: 'A chlorine sample is 75 percent Cl-35 and 25 percent Cl-37. Calculate the relative atomic mass of chlorine. Give your answer to one decimal place.',
      tier: 'core',
      correctAnswer: 35.5,
      tolerance: 0.05,
      xpValue: 10,
      hint: 'Work out (75 x 35 + 25 x 37) / 100. That is (2625 + 925) / 100.',
    },
    {
      id: 'cae-ram-q4',
      type: 'numeric-entry',
      stem: 'A bromine sample is 50 percent Br-79 and 50 percent Br-81. Calculate the relative atomic mass of bromine.',
      tier: 'core',
      correctAnswer: 80,
      tolerance: 0.05,
      xpValue: 10,
      hint: 'With a 50:50 mix, the RAM sits exactly halfway between the two masses.',
    },
    {
      id: 'cae-ram-q5',
      type: 'multiple-choice',
      stem: 'For chlorine, RAM = 35.5. Which statement is correct?',
      tier: 'core',
      options: [
        'Some chlorine atoms in the sample weigh 35.5',
        'Every chlorine atom in the sample weighs 35.5',
        'No single chlorine atom weighs 35.5; every chlorine atom is either Cl-35 or Cl-37. The 35.5 is a sample average',
        'Chlorine has a third isotope, Cl-35.5',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cae-ram-mis-no-decimal-atom',
    },
    {
      id: 'cae-ram-q6',
      type: 'multiple-choice',
      stem: 'When the two isotope percentages of an element are given, what must they add up to before you apply the RAM formula?',
      tier: 'core',
      options: ['100', '1', '50', 'It depends on the element'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cae-ram-mis-percent-not-100',
    },
    {
      id: 'cae-ram-q7',
      type: 'drag-order',
      stem: 'Place the steps in the correct order for calculating the relative atomic mass of an element with two isotopes.',
      tier: 'core',
      items: [
        'Add the two contributions together',
        'Divide the total by 100 to get the RAM',
        'Multiply each isotope mass by its percentage abundance',
        'Read the mass numbers and percentage abundances for the two isotopes',
      ],
      correctOrder: [3, 2, 0, 1],
      xpValue: 10,
    },
    // ===== CONFIDENT (7) =====
    {
      id: 'cae-ram-q8',
      type: 'numeric-entry',
      stem: 'Copper is 69 percent Cu-63 and 31 percent Cu-65. Calculate the relative atomic mass of copper. Give your answer to two decimal places.',
      tier: 'confident',
      correctAnswer: 63.62,
      tolerance: 0.05,
      xpValue: 15,
      hint: 'RAM = (63 x 69 + 65 x 31) / 100. That is (4347 + 2015) / 100.',
    },
    {
      id: 'cae-ram-q9',
      type: 'numeric-entry',
      stem: 'A boron sample contains 20 percent B-10 and 80 percent B-11. Calculate the relative atomic mass of boron. Give your answer to one decimal place.',
      tier: 'confident',
      correctAnswer: 10.8,
      tolerance: 0.05,
      xpValue: 15,
      hint: 'RAM = (20 x 10 + 80 x 11) / 100. That is (200 + 880) / 100.',
    },
    {
      id: 'cae-ram-q10',
      type: 'multiple-choice',
      stem: 'A natural sample of element X is 90 percent X-20 and 10 percent X-22. Without calculating exactly, which value is the RAM closest to?',
      tier: 'confident',
      options: ['20.2', '21', '21.8', '22'],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Most of the atoms are X-20, so the average must be pulled close to 20, not halfway.',
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q11',
      type: 'multiple-choice',
      stem: 'A mass spectrometer reports that magnesium is 79 percent Mg-24, 10 percent Mg-25, and 11 percent Mg-26. Which calculation gives the relative atomic mass?',
      tier: 'confident',
      options: [
        '(24 + 25 + 26) / 3 = 25',
        '(79 x 24 + 10 x 25 + 11 x 26) / 100 = 24.32',
        '(79 + 10 + 11) / 3 = 33.33',
        '(24 x 79 + 25 x 10 + 26 x 11) / 3 = 810.67',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q12',
      type: 'numeric-entry',
      stem: 'A magnesium sample contains 79 percent Mg-24, 10 percent Mg-25, and 11 percent Mg-26. Calculate the relative atomic mass of magnesium. Give your answer to two decimal places.',
      tier: 'confident',
      correctAnswer: 24.32,
      tolerance: 0.05,
      xpValue: 15,
      hint: 'Use RAM = (m1 x %1 + m2 x %2 + m3 x %3) / 100 and check the percentages add to 100.',
    },
    {
      id: 'cae-ram-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculation of the relative atomic mass of chlorine, given 75 percent Cl-35 and 25 percent Cl-37.',
      tier: 'confident',
      steps: [
        'Read the data: m1 = 35 with %1 = 75; m2 = 37 with %2 = 25',
        'Write the formula: RAM = (m1 x %1 + m2 x %2) / 100',
        'Multiply each mass by its percentage: 35 x 75 = 2625 and 37 x 25 = 925',
        null,
        'Divide by 100: 3550 / 100 = 35.5, so RAM(Cl) = 35.5',
      ],
      missingStepIndex: 3,
      correctStep: 'Add the two contributions: 2625 + 925 = 3550',
      xpValue: 15,
    },
    {
      id: 'cae-ram-q14',
      type: 'spot-misconception',
      stem: 'Aisha says: "Chlorine is 75 percent Cl-35 and 25 percent Cl-37, so the relative atomic mass is just (35 + 37) / 2 = 36."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The RAM of a two-isotope element is always the simple average of the two mass numbers.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. A simple average only works when the two isotopes are 50:50. For chlorine, the more abundant Cl-35 pulls the weighted average down to 35.5, not 36.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q14b',
      type: 'multiple-choice',
      stem: 'Boron in nature is 20 percent B-10 and 80 percent B-11. Which line gives the correct relative atomic mass of boron?',
      tier: 'confident',
      options: [
        '(10 + 11) / 2 = 10.5',
        '(20 x 10 + 80 x 11) / 100 = (200 + 880) / 100 = 10.8',
        '(20 x 10 + 80 x 11) / 2 = 540',
        '(20 + 80) / (10 + 11) = 4.76',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Use RAM = (percent of isotope 1 x mass 1 + percent of isotope 2 x mass 2) / 100.',
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'cae-ram-q15',
      type: 'multiple-choice',
      stem: 'A mass spectrometer at a UK university reports an element as 60 percent X-24 and 40 percent X-26. Which line of working correctly gives the relative atomic mass of element X?',
      tier: 'challenge',
      options: [
        '(24 + 26) / 2 = 25.0',
        '(60 x 24 + 40 x 26) / 100 = (1440 + 1040) / 100 = 24.8',
        '(60 + 24 + 40 + 26) / 4 = 37.5',
        '(60 x 24 + 40 x 26) / 2 = 1240',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q17',
      type: 'numeric-entry',
      stem: 'An element has only two natural isotopes. Its RAM is 24.3 and its isotope mass numbers are 24 and 26. What percentage of the sample is the lighter isotope (X-24)? Give your answer as a whole number percentage.',
      tier: 'challenge',
      correctAnswer: 85,
      tolerance: 1,
      xpValue: 20,
      hint: 'Let p be the percent of X-24. Then (p x 24 + (100 - p) x 26) / 100 = 24.3. Expand and solve for p.',
    },
    {
      id: 'cae-ram-q18',
      type: 'multiple-choice',
      stem: 'A pupil computes the RAM of chlorine as 36 by averaging 35 and 37 directly. Why is this answer wrong?',
      tier: 'challenge',
      options: [
        'Because RAM should be a whole number for chlorine',
        'Because the pupil used the wrong isotope mass numbers',
        'Because chlorine has three isotopes, not two, so a simple average misses one',
        'Because chlorine is not a 50:50 mix; Cl-35 is three times more abundant than Cl-37, so the weighted average is pulled down to 35.5',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'cae-ram-mis-simple-average',
    },
    {
      id: 'cae-ram-q19',
      type: 'multiple-choice',
      stem: 'For copper, RAM = 63.5 (to one decimal place). Cu-63 and Cu-65 are the only two natural isotopes. Which statement about the abundances is correct?',
      tier: 'challenge',
      options: [
        'The two isotopes are equally common (50 percent each)',
        'Cu-65 is more abundant, because the RAM lies closer to 65',
        'Cu-63 is more abundant, because the RAM (63.5) lies closer to 63 than to 65',
        'You cannot tell anything about abundance from the RAM',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'cae-ram-mis-most-common-isotope',
    },
    {
      id: 'cae-ram-q20',
      type: 'numeric-entry',
      stem: 'A teaching mass spectrometer at a UK university reports neon as 90 percent Ne-20, 0.3 percent Ne-21, and 9.7 percent Ne-22. Calculate the relative atomic mass of neon. Give your answer to two decimal places.',
      tier: 'challenge',
      correctAnswer: 20.19,
      tolerance: 0.05,
      xpValue: 20,
      hint: 'RAM = (90 x 20 + 0.3 x 21 + 9.7 x 22) / 100. Add the three contributions, then divide by 100.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q03 on RAM: candidates "averaged the two mass numbers directly without using percentages". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on relative atomic mass.
    {
      id: 'cae-ram-mis-simple-average',
      description:
        'The relative atomic mass of a two-isotope element is the simple average of the two mass numbers (for example chlorine = (35 + 37) / 2 = 36).',
      triggerAnswer: 'simple-average',
      correction:
        'In fact RAM is a WEIGHTED average. You must multiply each mass by its percentage abundance, add, then divide by 100.',
      reExplanation:
        'A simple average only works when the two isotopes are equally abundant. For chlorine, Cl-35 makes up 75 percent and Cl-37 only 25 percent, so the average is pulled closer to 35. Using RAM = (75 x 35 + 25 x 37) / 100 gives 35.5, the value on the periodic table.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q05 on RAM: candidates "claimed the RAM equals the mass number of the most common isotope". Reinforced by CGP KS3 Chemistry Study Book p.31 Common Mistake box.
    {
      id: 'cae-ram-mis-most-common-isotope',
      description:
        'The relative atomic mass equals the mass number of the most common isotope (for example chlorine RAM = 35 because Cl-35 is most abundant).',
      triggerAnswer: 'most-common-isotope',
      correction:
        'In fact RAM is the weighted average across all the isotopes in the sample, not the mass of one of them. It usually lies between the lightest and heaviest, pulled towards the more abundant ones.',
      reExplanation:
        'The most abundant isotope only fixes the rough size of the RAM; the rarer ones still pull the average slightly. For chlorine, Cl-35 at 75 percent gives an answer near 35, but the 25 percent of Cl-37 nudges it up to 35.5. RAM and "most common mass number" only match exactly when one isotope is 100 percent of the sample.',
    },
    // Source: David Paterson, "Teaching relative atomic mass at KS3", RSC Education CPD article (2022-04-12): pupils "expect a single atom of chlorine to weigh 35.5". Reinforced by AQA GCSE Chemistry examiner report June 2021 (8462/1H) Q05.
    {
      id: 'cae-ram-mis-no-decimal-atom',
      description:
        'Because the periodic table prints chlorine as 35.5, there must be individual chlorine atoms that weigh 35.5.',
      triggerAnswer: 'no-decimal-atom',
      correction:
        'In fact every individual chlorine atom is either Cl-35 or Cl-37. The 35.5 is a sample-wide average and not the mass of any single atom.',
      reExplanation:
        'Relative atomic mass is a sample-level idea: it describes the average mass of a typical natural sample, weighted by isotope abundance. Because chlorine is roughly 75 percent Cl-35 and 25 percent Cl-37, the sample average works out at 35.5. No real atom weighs 35.5; the value lives between the two true isotope masses.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q04 on RAM calculations: candidates "multiplied mass by percentage but forgot to divide by 100". Reinforced by RSC Education classroom resource "Common pitfalls in RAM calculations" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-ram-mis-forget-divide',
      description:
        'To calculate RAM, multiply each mass by its percentage abundance and add the products, but you do not need to divide by anything.',
      triggerAnswer: 'forget-divide',
      correction:
        'In fact you MUST divide the total by 100 (the sum of the percentages) at the end. Without that step the answer comes out about 100 times too big.',
      reExplanation:
        'The division by 100 turns the weighted sum into a per-atom average. For chlorine without the division you would get 75 x 35 + 25 x 37 = 3550, which is the total contribution from a notional 100 atoms. Divide by 100 to find the average mass per atom: 35.5. Always check the answer lies between the lightest and the heaviest isotope mass.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q03 on RAM: candidates "added the percentages and got something other than 100 but carried on regardless". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on isotopic abundance.
    {
      id: 'cae-ram-mis-percent-not-100',
      description:
        'The isotope percentages do not need to add to 100 before you apply the RAM formula.',
      triggerAnswer: 'percent-not-100',
      correction:
        'In fact the percentages MUST add to 100 (or you must rescale them so they do). If they sum to a different number, the RAM formula gives the wrong answer.',
      reExplanation:
        'Percentages by definition are shares of a total of 100. If the figures given do not add to 100 there is either a typo or a missing isotope; pause and check. If the abundances are given as decimals that add to 1, you divide by 1 (you do not divide by 100). Always check the sum first.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2021 (1CH0/1H), Q06 on extended RAM calculations: candidates "ignored the third isotope of magnesium when calculating RAM". Reinforced by RSC Education article "Teaching relative atomic mass with mass spectra" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-ram-mis-only-two-isotopes',
      description:
        'The RAM formula only works for elements with exactly two isotopes; a third isotope can be ignored.',
      triggerAnswer: 'only-two-isotopes',
      correction:
        'In fact the formula extends to any number of isotopes: RAM = (m1 x %1 + m2 x %2 + m3 x %3 + ...) / 100. Include every isotope in the sum.',
      reExplanation:
        'For magnesium the three natural isotopes are Mg-24, Mg-25, and Mg-26. Ignoring Mg-25 and Mg-26 would give RAM = 24, but the true answer is 24.32. The extra terms are small but matter for the periodic table value. Add one extra term per extra isotope, keep the divide by 100, and the same pattern works.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
