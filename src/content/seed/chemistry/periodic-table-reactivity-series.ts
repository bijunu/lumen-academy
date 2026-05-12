import type { SkillNode } from '@/types/content'

export const reactivitySeriesBasics: SkillNode = {
  id: 'chemistry-periodic-table-reactivity-series',
  title: 'Reactivity Series Basics',
  description:
    'Meet the KS3 reactivity series, the league table of metals from most reactive at the top (potassium) to least reactive at the bottom (gold). Carbon and hydrogen sit in the league as reference points, even though they are non-metals. Use the order to predict which metals react with cold water, which fizz with dilute acid, and which one will displace another from a salt solution. Link the order back to position in the periodic table.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-group-1-7'],
  curriculum: {
    ks3Objective:
      'The reactivity series; predicting displacement reactions from reactivity order; linking reactivity to position in the periodic table.',
    awardingBodies: {
      aqa: '4.4.1.1 Reactivity of metals and the reactivity series (8462)',
      edexcel: 'Topic 4 Extracting metals; the reactivity series (1CH0)',
      ocr: 'C5.1 The reactivity series of metals (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-react-ser-scene-league-table',
      title: 'The KS3 Reactivity Series League Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the position of a metal in the reactivity series and what that position tells you about how it reacts.',
      data: {
        viewBox: '0 0 360 320',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320"><rect x="0" y="0" width="360" height="320" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">KS3 REACTIVITY SERIES (MOST TO LEAST REACTIVE)</text><rect x="120" y="28" width="120" height="276" fill="#FFFFFF" stroke="#475569" stroke-width="1"/><g font-size="9" font-weight="600" fill="#1E3A8A"><text x="180" y="44" text-anchor="middle">Potassium (K)</text><text x="180" y="58" text-anchor="middle">Sodium (Na)</text><text x="180" y="72" text-anchor="middle">Lithium (Li)</text><text x="180" y="86" text-anchor="middle">Calcium (Ca)</text><text x="180" y="100" text-anchor="middle">Magnesium (Mg)</text><text x="180" y="114" text-anchor="middle">Aluminium (Al)</text></g><g font-size="9" font-weight="700" fill="#7C2D12"><text x="180" y="128" text-anchor="middle">Carbon (C)*</text></g><g font-size="9" font-weight="600" fill="#1E3A8A"><text x="180" y="142" text-anchor="middle">Zinc (Zn)</text><text x="180" y="156" text-anchor="middle">Iron (Fe)</text><text x="180" y="170" text-anchor="middle">Tin (Sn)</text><text x="180" y="184" text-anchor="middle">Lead (Pb)</text></g><g font-size="9" font-weight="700" fill="#7C2D12"><text x="180" y="198" text-anchor="middle">Hydrogen (H)*</text></g><g font-size="9" font-weight="600" fill="#1E3A8A"><text x="180" y="212" text-anchor="middle">Copper (Cu)</text><text x="180" y="226" text-anchor="middle">Silver (Ag)</text><text x="180" y="240" text-anchor="middle">Gold (Au)</text></g><text x="180" y="262" text-anchor="middle" font-size="7" fill="#7C2D12">* non-metal reference points</text><line x1="40" y1="40" x2="40" y2="240" stroke="#7C2D12" stroke-width="2" marker-end="url(#arrDown)"/><defs><marker id="arrDown" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#7C2D12"/></marker></defs><text x="40" y="36" text-anchor="middle" font-size="8" font-weight="700" fill="#7C2D12">most</text><text x="40" y="252" text-anchor="middle" font-size="8" font-weight="700" fill="#7C2D12">least</text><text x="40" y="262" text-anchor="middle" font-size="8" font-weight="700" fill="#7C2D12">reactive</text><line x1="320" y1="40" x2="320" y2="240" stroke="#064E3B" stroke-width="2"/><text x="320" y="55" text-anchor="middle" font-size="7" fill="#064E3B">react with</text><text x="320" y="65" text-anchor="middle" font-size="7" fill="#064E3B">cold water</text><line x1="305" y1="115" x2="335" y2="115" stroke="#064E3B" stroke-width="1"/><text x="320" y="135" text-anchor="middle" font-size="7" fill="#064E3B">react with</text><text x="320" y="145" text-anchor="middle" font-size="7" fill="#064E3B">dilute acid</text><line x1="305" y1="200" x2="335" y2="200" stroke="#064E3B" stroke-width="1"/><text x="320" y="220" text-anchor="middle" font-size="7" fill="#064E3B">no reaction</text><text x="320" y="230" text-anchor="middle" font-size="7" fill="#064E3B">with acid</text><text x="180" y="295" text-anchor="middle" font-size="7" fill="#1E3A8A" font-style="italic">Mnemonic: Please Send Lions Cats Monkeys And Cute Zebras Into The Lovely Hot Country So Gentle.</text></svg>',
        hotspots: [
          {
            id: 'cpt-react-ser-h-top',
            x: 50,
            y: 14,
            label: 'Top of the series: potassium, sodium, lithium',
            description:
              'These are the Group 1 alkali metals. They react vigorously with cold water, giving off hydrogen and forming an alkaline hydroxide solution. They are stored under oil to keep them away from air and water.',
          },
          {
            id: 'cpt-react-ser-h-ca-mg-al',
            x: 50,
            y: 30,
            label: 'Calcium, magnesium, aluminium',
            description:
              'Calcium still bubbles in cold water, but more gently. Magnesium reacts very slowly with cold water yet rapidly with steam. Aluminium is reactive but a thin oxide layer forms in air and protects the metal underneath, so it looks unreactive.',
          },
          {
            id: 'cpt-react-ser-h-carbon',
            x: 50,
            y: 42,
            label: 'Carbon: a non-metal reference point',
            description:
              'Carbon is not a metal, but its position matters. Any metal listed below carbon can be extracted from its oxide by heating with carbon (used in iron extraction at Port Talbot blast furnaces).',
          },
          {
            id: 'cpt-react-ser-h-zn-fe',
            x: 50,
            y: 49,
            label: 'Zinc, iron, tin, lead',
            description:
              'These middle metals react with dilute acids (HCl or H2SO4) to make a salt and hydrogen gas. They do not react with cold water; zinc and iron need steam.',
          },
          {
            id: 'cpt-react-ser-h-hydrogen',
            x: 50,
            y: 62,
            label: 'Hydrogen: another non-metal reference point',
            description:
              'Hydrogen sits between lead and copper. Any metal above hydrogen can push hydrogen out of dilute acid. Any metal below hydrogen cannot react with dilute acid.',
          },
          {
            id: 'cpt-react-ser-h-bottom',
            x: 50,
            y: 75,
            label: 'Copper, silver, gold: least reactive',
            description:
              'These metals do not react with dilute acid or with water. That is why copper is used for roofs (Llandaff Cathedral in Cardiff has a green-tinged copper roof), and gold stays shiny on the Crown Jewels at the Tower of London after hundreds of years.',
          },
        ],
      },
    },
    {
      id: 'cpt-react-ser-scene-metal-acid',
      title: 'Metals With Dilute Acid: Above or Below Hydrogen?',
      type: 'labelled-diagram',
      instructions:
        'Click each test tube to see what happens when a small piece of a different metal is added to dilute hydrochloric acid in a UK school laboratory.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">METALS + DILUTE HYDROCHLORIC ACID</text><g><path d="M30,40 L30,170 Q30,190 50,190 L70,190 Q90,190 90,170 L90,40 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="32" y="95" width="56" height="93" fill="#FCA5A5" opacity="0.5"/><circle cx="60" cy="160" r="6" fill="#94A3B8" stroke="#1E293B" stroke-width="0.8"/><circle cx="48" cy="110" r="2" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="60" cy="120" r="2.5" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="72" cy="115" r="2" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="55" cy="100" r="2" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><text x="60" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Magnesium</text><text x="60" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">vigorous fizz</text></g><g><path d="M120,40 L120,170 Q120,190 140,190 L160,190 Q180,190 180,170 L180,40 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="122" y="95" width="56" height="93" fill="#FCA5A5" opacity="0.5"/><rect x="143" y="155" width="14" height="6" fill="#A8A29E" stroke="#1E293B" stroke-width="0.6"/><circle cx="140" cy="125" r="1.6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="150" cy="135" r="1.6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="160" cy="130" r="1.6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><text x="150" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Zinc</text><text x="150" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">steady fizz</text></g><g><path d="M210,40 L210,170 Q210,190 230,190 L250,190 Q270,190 270,170 L270,40 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="212" y="95" width="56" height="93" fill="#FCA5A5" opacity="0.5"/><polygon points="232,155 248,155 246,162 234,162" fill="#A8A29E" stroke="#1E293B" stroke-width="0.6"/><circle cx="232" cy="130" r="1" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><circle cx="248" cy="140" r="1" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.4"/><text x="240" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Iron</text><text x="240" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">slow fizz</text></g><g><path d="M300,40 L300,170 Q300,190 315,190 L335,190 Q350,190 350,170 L350,40 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="302" y="95" width="48" height="93" fill="#FCA5A5" opacity="0.5"/><circle cx="325" cy="160" r="6" fill="#D97706" stroke="#7C2D12" stroke-width="0.6"/><text x="325" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">Copper</text><text x="325" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">no reaction</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-react-ser-h-mg-acid',
            x: 18,
            y: 50,
            label: 'Magnesium: vigorous fizz',
            description:
              'Magnesium sits well above hydrogen. It reacts vigorously with dilute hydrochloric acid, releasing a stream of hydrogen bubbles. Word equation: magnesium + hydrochloric acid -> magnesium chloride + hydrogen.',
          },
          {
            id: 'cpt-react-ser-h-zn-acid',
            x: 41,
            y: 50,
            label: 'Zinc: steady fizz',
            description:
              'Zinc is above hydrogen but lower than magnesium, so it bubbles steadily rather than vigorously. The salt formed is zinc chloride.',
          },
          {
            id: 'cpt-react-ser-h-fe-acid',
            x: 66,
            y: 50,
            label: 'Iron: slow fizz',
            description:
              'Iron is just above hydrogen. It does bubble, but much more slowly than zinc. Iron chloride solution forms (light green).',
          },
          {
            id: 'cpt-react-ser-h-cu-acid',
            x: 88,
            y: 50,
            label: 'Copper: no reaction',
            description:
              'Copper sits below hydrogen in the series, so it cannot push hydrogen out of the acid. The copper piece sits at the bottom and the acid stays clear and colourless.',
          },
          {
            id: 'cpt-react-ser-h-acid-rule',
            x: 50,
            y: 95,
            label: 'The rule',
            description:
              'Any metal above hydrogen in the series reacts with dilute acid to make a salt plus hydrogen gas. Any metal below hydrogen does not. The rate of fizzing tracks the gap between the metal and hydrogen.',
          },
        ],
      },
    },
    {
      id: 'cpt-react-ser-scene-displacement',
      title: 'Metal Displacement in a Salt Solution',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a UK school displacement test: an iron nail is dipped in blue copper sulfate solution.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">IRON NAIL IN COPPER SULFATE SOLUTION</text><g><path d="M40,50 L40,170 Q40,190 60,190 L80,190 Q100,190 100,170 L100,50 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="42" y="95" width="56" height="93" fill="#60A5FA" opacity="0.7"/><rect x="60" y="60" width="6" height="100" fill="#A8A29E" stroke="#1E293B" stroke-width="0.8"/><polygon points="58,160 68,160 63,175" fill="#A8A29E" stroke="#1E293B" stroke-width="0.6"/><text x="70" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">BEFORE</text><text x="70" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">blue solution</text><text x="70" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A">grey iron nail</text></g><g><path d="M180,50 L180,30 L210,30 L210,50" fill="none" stroke="#475569" stroke-width="1.2"/><text x="195" y="70" text-anchor="middle" font-size="8" fill="#1E3A8A">wait 10 min</text></g><g><path d="M260,50 L260,170 Q260,190 280,190 L300,190 Q320,190 320,170 L320,50 Z" fill="none" stroke="#475569" stroke-width="1.4"/><rect x="262" y="95" width="56" height="93" fill="#86EFAC" opacity="0.6"/><rect x="280" y="60" width="6" height="100" fill="#D97706" stroke="#7C2D12" stroke-width="0.8"/><polygon points="278,160 288,160 283,175" fill="#D97706" stroke="#7C2D12" stroke-width="0.6"/><text x="290" y="80" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">AFTER</text><text x="290" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">paler greenish</text><text x="290" y="146" text-anchor="middle" font-size="7" fill="#1E3A8A">solution</text><text x="290" y="158" text-anchor="middle" font-size="7" fill="#1E3A8A">nail coated copper</text></g></svg>',
        hotspots: [
          {
            id: 'cpt-react-ser-h-disp-before',
            x: 18,
            y: 60,
            label: 'Before: blue solution, grey nail',
            description:
              'Copper sulfate solution is blue. The iron nail is grey and clean. Iron sits higher in the reactivity series than copper, so a reaction is predicted.',
          },
          {
            id: 'cpt-react-ser-h-disp-add',
            x: 53,
            y: 22,
            label: 'Wait',
            description:
              'Leave the iron nail in the copper sulfate for several minutes. The more reactive iron pushes copper out of the salt.',
          },
          {
            id: 'cpt-react-ser-h-disp-after',
            x: 80,
            y: 60,
            label: 'After: copper coats the nail',
            description:
              'The nail is coated with a layer of red-pink copper metal. The blue solution fades to a pale green colour as iron sulfate forms. Word equation: iron + copper sulfate -> iron sulfate + copper.',
          },
          {
            id: 'cpt-react-ser-h-disp-rule',
            x: 50,
            y: 95,
            label: 'The rule for metal displacement',
            description:
              'A more reactive metal displaces a less reactive one from a salt solution. The other way round (a copper wire in iron sulfate) shows no change.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-react-ser-worked-1',
      title: 'Predicting whether magnesium reacts with copper sulfate solution',
      steps: [
        {
          explanation:
            'Question: a strip of magnesium ribbon is dropped into a blue solution of copper sulfate. Predict whether a reaction takes place, and what colour change a learner would see.',
        },
        {
          explanation:
            'Step 1: write down the reactivity series order for the two metals. Magnesium sits well above copper in the series.',
          maths: 'reactivity series: ... Mg ... > C > Zn > Fe > Sn > Pb > H > Cu ...',
        },
        {
          explanation:
            'Step 2: identify which metal is the free element and which is in the salt. Magnesium is the free metal. Copper is in the salt (copper sulfate).',
          maths: 'free metal: Mg. metal in salt: Cu (from CuSO4)',
        },
        {
          explanation:
            'Step 3: apply the displacement rule. A more reactive metal displaces a less reactive one from a salt solution. Magnesium is more reactive than copper, so magnesium will displace the copper.',
          maths: 'Mg more reactive than Cu -> Mg displaces Cu',
        },
        {
          explanation:
            'Step 4: predict the observation. The blue solution fades to colourless (magnesium sulfate is colourless). Red-pink copper metal collects on the magnesium ribbon. Word equation: magnesium + copper sulfate -> magnesium sulfate + copper.',
        },
      ],
    },
    {
      id: 'cpt-react-ser-worked-2',
      title: 'Will a tin spoon react with dilute hydrochloric acid?',
      steps: [
        {
          explanation:
            'Question: a small piece of tin (Sn) is added to a beaker of dilute hydrochloric acid in a UK school laboratory. Will a reaction take place? If yes, name the gas given off.',
        },
        {
          explanation:
            'Step 1: locate tin and hydrogen in the reactivity series. Tin sits between iron and lead, and hydrogen sits below lead. So tin is above hydrogen.',
          maths: 'series order: ... Fe > Sn > Pb > H ...',
        },
        {
          explanation:
            'Step 2: apply the metal plus acid rule. Any metal above hydrogen in the series reacts with dilute acid to form a salt and hydrogen gas. Tin is above hydrogen.',
          maths: 'Sn above H -> reaction expected',
        },
        {
          explanation:
            'Step 3: name the products. Tin + hydrochloric acid -> tin chloride + hydrogen. The gas is hydrogen. Tin sits low in the active section, so the fizzing will be slow rather than vigorous.',
          maths: 'Sn + 2 HCl -> SnCl2 + H2',
        },
        {
          explanation:
            'Step 4: contrast with copper. If a copper coin were used instead, no reaction would take place, because copper sits below hydrogen in the series and cannot push hydrogen out of the acid.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpt-react-ser-q1',
      type: 'multiple-choice',
      stem: 'Which of these metals sits at the very TOP of the KS3 reactivity series (most reactive)?',
      tier: 'core',
      options: ['Copper', 'Iron', 'Potassium', 'Gold'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-react-ser-mis-copper-top',
    },
    {
      id: 'cpt-react-ser-q2',
      type: 'multiple-choice',
      stem: 'Which of these metals sits at the very BOTTOM of the KS3 reactivity series (least reactive)?',
      tier: 'core',
      options: ['Sodium', 'Magnesium', 'Zinc', 'Gold'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cpt-react-ser-mis-gold-rare-not-unreactive',
    },
    {
      id: 'cpt-react-ser-q3',
      type: 'multiple-choice',
      stem: 'Carbon and hydrogen are included in the KS3 reactivity series. Why are they listed there even though neither is a metal?',
      tier: 'core',
      options: [
        'They are listed by mistake; teachers usually ignore them',
        'They are non-metal reference points: any metal above them behaves differently from any metal below them',
        'They are the most reactive elements known',
        'They make the table easier to memorise but mean nothing',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'cpt-react-ser-q4',
      type: 'multiple-choice',
      stem: 'A small piece of copper is dropped into a test tube of dilute hydrochloric acid. What would a learner observe?',
      tier: 'core',
      options: [
        'The copper fizzes strongly and gives off hydrogen',
        'The copper turns blue and dissolves',
        'No reaction; the copper sits at the bottom and the acid stays colourless',
        'The acid catches fire',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-react-ser-mis-all-metals-react',
    },
    {
      id: 'cpt-react-ser-q5',
      type: 'multiple-choice',
      stem: 'Which of the following metals reacts most vigorously with cold water in a school laboratory?',
      tier: 'core',
      options: ['Iron', 'Copper', 'Sodium', 'Tin'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'cpt-react-ser-q6',
      type: 'spot-misconception',
      stem: 'Ben says: "Copper sits near the top of the reactivity series because it is used so much in school wires, kettle elements and bathroom pipes."',
      tier: 'core',
      statements: [
        {
          text: 'Ben is right. Lots of everyday uses means copper must be very reactive.',
          isMisconception: true,
        },
        {
          text: 'Ben is wrong. Copper sits near the BOTTOM of the series. We use it everywhere precisely because it is unreactive and does not corrode in pipes or wires.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'cpt-react-ser-mis-copper-top',
    },
    {
      id: 'cpt-react-ser-q7',
      type: 'numeric-entry',
      stem: 'Counting the KS3 reactivity series from potassium at the top to gold at the bottom (the 13 metals: K, Na, Li, Ca, Mg, Al, Zn, Fe, Sn, Pb, Cu, Ag, Au), how many metals sit ABOVE iron? Give your answer as a single number.',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'The metals above iron are potassium, sodium, lithium, calcium, magnesium, aluminium and zinc.',
    },
    {
      id: 'cpt-react-ser-q8',
      type: 'drag-order',
      stem: 'Place these four metals in REACTIVITY ORDER, from MOST reactive at the top to LEAST reactive at the bottom.',
      tier: 'confident',
      items: ['Iron', 'Magnesium', 'Copper', 'Zinc'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'cpt-react-ser-q9',
      type: 'drag-order',
      stem: 'Place these five metals in REACTIVITY ORDER, from MOST reactive at the top to LEAST reactive at the bottom.',
      tier: 'confident',
      items: ['Lead', 'Sodium', 'Calcium', 'Silver', 'Aluminium'],
      correctOrder: [1, 2, 4, 0, 3],
      xpValue: 15,
    },
    {
      id: 'cpt-react-ser-q10',
      type: 'numeric-entry',
      stem: 'A learner sets up four small test tubes of displacement tests in solutions: (1) magnesium in copper sulfate, (2) copper in magnesium sulfate, (3) zinc in iron sulfate, (4) iron in zinc sulfate. In how many of the four test tubes does a reaction take place? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'A more reactive metal displaces a less reactive one. Which way round works for each pair?',
      misconceptionId: 'cpt-react-ser-mis-displacement-direction',
    },
    {
      id: 'cpt-react-ser-q11',
      type: 'numeric-entry',
      stem: 'A pupil tries four small test tubes. In each, a piece of metal is added to dilute hydrochloric acid. The metals are: magnesium, zinc, copper, silver. How many test tubes show fizzing (a reaction)? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Only metals ABOVE hydrogen in the series react with dilute acid. Where do magnesium, zinc, copper and silver sit in relation to hydrogen?',
      misconceptionId: 'cpt-react-ser-mis-all-metals-react',
    },
    {
      id: 'cpt-react-ser-q12',
      type: 'spot-misconception',
      stem: 'Olivia says: "Aluminium does not corrode in air the way iron does, so aluminium must be a very unreactive metal that sits near the bottom of the reactivity series."',
      tier: 'confident',
      statements: [
        {
          text: 'Olivia is right. A metal that does not corrode in air must be low in the series.',
          isMisconception: true,
        },
        {
          text: 'Olivia is wrong. Aluminium IS reactive and sits above zinc and iron. It does not corrode because a thin oxide layer forms instantly and protects the metal underneath.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-react-ser-mis-aluminium-unreactive',
    },
    {
      id: 'cpt-react-ser-q13',
      type: 'free-text',
      stem: 'In one sentence, write the word equation for the reaction that takes place when zinc is added to iron sulfate solution.',
      tier: 'confident',
      sampleAnswer: 'Zinc + iron sulfate -> zinc sulfate + iron.',
      keywords: ['zinc', 'iron sulfate', 'zinc sulfate', 'iron'],
      xpValue: 15,
      hint: 'Zinc sits ABOVE iron in the reactivity series, so zinc will displace iron from iron sulfate.',
    },
    {
      id: 'cpt-react-ser-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: predict whether a magnesium ribbon will react with dilute sulfuric acid.',
      tier: 'confident',
      steps: [
        'Look up magnesium and hydrogen in the reactivity series. Magnesium sits well above hydrogen.',
        'The rule for dilute acid is that any metal above hydrogen reacts with dilute acid to make a salt and hydrogen gas.',
        null,
        'So magnesium reacts vigorously with dilute sulfuric acid, fizzing strongly and giving off hydrogen. The salt formed is magnesium sulfate.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the rule to magnesium: because magnesium is above hydrogen in the series, the rule predicts a reaction will take place.',
      xpValue: 20,
    },
    {
      id: 'cpt-react-ser-q15',
      type: 'numeric-entry',
      stem: 'In the canonical KS3 reactivity series of 13 metals (potassium at the top down to gold at the bottom), how many metals sit BELOW copper? Give your answer as a single number.',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'The metals below copper in the canonical KS3 list are silver and gold.',
    },
    {
      id: 'cpt-react-ser-q16',
      type: 'multiple-choice',
      stem: 'In a UK school laboratory, a piece of zinc is added to copper sulfate solution. A learner predicts no reaction because "zinc is below iron in the reactivity series, so it cannot displace anything". Why is the learner mistaken about this test tube?',
      tier: 'challenge',
      options: [
        'The learner is correct; no reaction takes place',
        'Zinc is below copper in the reactivity series, so the reaction is the other way round',
        'It does not matter where zinc sits relative to iron; what matters is that zinc is ABOVE copper in the reactivity series, so zinc displaces copper from copper sulfate',
        'The reaction needs heat, which the learner has not added',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cpt-react-ser-mis-displacement-direction',
    },
    {
      id: 'cpt-react-ser-q17',
      type: 'multiple-choice',
      stem: 'A school in Sheffield runs four displacement tests: (1) iron in copper sulfate, (2) copper in iron sulfate, (3) zinc in copper sulfate, (4) silver in copper sulfate. Which set of test tubes shows a colour change (a reaction)?',
      tier: 'challenge',
      options: [
        'Only test tube 1',
        'Test tubes 1 and 3 only',
        'Test tubes 2 and 4 only',
        'All four test tubes',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpt-react-ser-mis-displacement-direction',
    },
    {
      id: 'cpt-react-ser-q18',
      type: 'multiple-choice',
      stem: 'The Crown Jewels in the Tower of London include items made of pure gold that have stayed shiny for hundreds of years on display. Which reactivity-series fact best explains this?',
      tier: 'challenge',
      options: [
        'Gold is at the bottom of the reactivity series, so it does not react with oxygen, water or dilute acid under everyday conditions',
        'Gold is highly reactive but kept in a sealed glass case so air cannot reach it',
        'Gold is at the top of the reactivity series; the Tower of London cleans the jewels every night',
        'Gold rusts but a polish hides the rust',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'cpt-react-ser-mis-gold-rare-not-unreactive',
    },
    {
      id: 'cpt-react-ser-q19',
      type: 'multiple-choice',
      stem: 'In a UK blast furnace at Port Talbot, iron is extracted from iron oxide by heating it with carbon (from coke). Which reactivity-series fact makes this method work for iron but NOT for aluminium?',
      tier: 'challenge',
      options: [
        'Iron is more reactive than carbon, so carbon attacks it first',
        'Iron sits BELOW carbon in the reactivity series, so carbon can pull oxygen off iron oxide. Aluminium sits ABOVE carbon, so carbon cannot do the same job on aluminium oxide',
        'Aluminium is not a metal',
        'Carbon only reacts with metals from Group 1',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'cpt-react-ser-q20',
      type: 'multiple-choice',
      stem: 'In Group 1 of the periodic table, reactivity rises going down the column. How does this fit with the reactivity series?',
      tier: 'challenge',
      options: [
        'It does not fit; the periodic table and the reactivity series disagree',
        'It fits: at the top of the reactivity series the order is potassium, sodium, lithium, exactly as Group 1 predicts, with potassium below sodium below lithium in the periodic table being the most reactive',
        'It fits, but only because Group 1 metals are all equally reactive',
        'It fits only for hydrogen',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpt-react-ser-mis-periodic-position',
    },
    {
      id: 'cpt-react-ser-q21',
      type: 'labelled-image',
      stem: 'Drag the correct label onto each band of the simplified reactivity series chart.',
      tier: 'challenge',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><rect x="60" y="20" width="200" height="40" fill="#FCA5A5" opacity="0.6" stroke="#7C2D12" stroke-width="0.8"/><text x="160" y="44" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">K, Na, Li, Ca</text><rect x="60" y="65" width="200" height="40" fill="#FDBA74" opacity="0.6" stroke="#7C2D12" stroke-width="0.8"/><text x="160" y="89" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">Mg, Al, Zn, Fe</text><rect x="60" y="110" width="200" height="40" fill="#FEF08A" opacity="0.7" stroke="#7C2D12" stroke-width="0.8"/><text x="160" y="134" text-anchor="middle" font-size="9" font-weight="700" fill="#7F1D1D">Sn, Pb, H, Cu</text><rect x="60" y="155" width="200" height="40" fill="#86EFAC" opacity="0.7" stroke="#064E3B" stroke-width="0.8"/><text x="160" y="179" text-anchor="middle" font-size="9" font-weight="700" fill="#064E3B">Ag, Au</text><line x1="40" y1="30" x2="40" y2="190" stroke="#7C2D12" stroke-width="2" marker-end="url(#aD)"/><defs><marker id="aD" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#7C2D12"/></marker></defs><text x="40" y="25" text-anchor="middle" font-size="8" font-weight="700" fill="#7C2D12">most</text><text x="40" y="205" text-anchor="middle" font-size="8" font-weight="700" fill="#7C2D12">least</text></svg>',
      hotspots: [
        { id: 'cpt-react-ser-q21-h1', x: 50, y: 18, correctLabel: 'React with cold water' },
        { id: 'cpt-react-ser-q21-h2', x: 50, y: 38, correctLabel: 'React with dilute acid (above hydrogen)' },
        { id: 'cpt-react-ser-q21-h3', x: 50, y: 58, correctLabel: 'Around hydrogen: copper just below' },
        { id: 'cpt-react-ser-q21-h4', x: 50, y: 80, correctLabel: 'Least reactive: no reaction with acid or water' },
      ],
      labels: [
        'React with cold water',
        'React with dilute acid (above hydrogen)',
        'Around hydrogen: copper just below',
        'Least reactive: no reaction with acid or water',
        'Group 0 (noble gases)',
        'Reactivity is constant down the series',
      ],
      xpValue: 25,
      misconceptionId: 'cpt-react-ser-mis-periodic-position',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q07 on the reactivity series: candidates "frequently placed copper near the top of the series because of its everyday use in wires and pipes." Reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box.
    {
      id: 'cpt-react-ser-mis-copper-top',
      description:
        'Copper sits near the top of the reactivity series because it is used so widely in wires, pipes and pans.',
      triggerAnswer: 'copper-top',
      correction:
        'In fact copper sits near the bottom of the series, just below hydrogen. Copper is used so widely because it is unreactive: it does not corrode in pipes or wires.',
      reExplanation:
        'Picture a school plumbing classroom. Copper pipes carry water for years and do not rust, because copper is too unreactive to react with the water. If copper sat near the top, your kitchen pipes would dissolve every time the kettle boiled. Useful and reactive are not the same thing.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q10 on metal-acid reactions: candidates "wrote that gold and silver react with dilute hydrochloric acid", assuming all metals must react. Reinforced by RSC Education resource "The reactivity series at KS3" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-react-ser-mis-all-metals-react',
      description:
        'Every metal will react with dilute acid to give off hydrogen, just at different rates.',
      triggerAnswer: 'all-metals-react',
      correction:
        'In fact only metals above hydrogen in the reactivity series react with dilute acid. Copper, silver and gold sit below hydrogen, so they do not react at all.',
      reExplanation:
        'Hydrogen is the line in the sand. A metal above hydrogen can push hydrogen out of the acid, so the test tube fizzes with hydrogen gas. A metal below hydrogen is too weak to do this, so the acid simply sits with the metal at the bottom and nothing happens. That is why gold rings do not dissolve in lemon juice.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q08 on displacement reactions: candidates "frequently wrote that iron displaces zinc from zinc sulfate, reversing the correct direction." Reinforced by CGP KS3 Chemistry Study Book p.63 displacement Common Mistake box.
    {
      id: 'cpt-react-ser-mis-displacement-direction',
      description:
        'A less reactive metal can displace a more reactive metal from a salt solution.',
      triggerAnswer: 'displacement-direction',
      correction:
        'In fact the more reactive metal displaces the less reactive one. Zinc displaces copper from copper sulfate, but copper does not displace zinc from zinc sulfate.',
      reExplanation:
        'Think of it as a wrestling match for the salt. The stronger (more reactive) metal pushes the weaker one out and takes its place in the solution. Iron pushes copper out of copper sulfate because iron is higher in the series. The reverse fails: copper has no strength to budge iron from iron sulfate, and the blue copper just sits there.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q11 on aluminium reactivity: candidates "stated that aluminium is unreactive because aluminium drinks cans do not corrode", missing the protective oxide layer. Reinforced by RSC Education article "Why is aluminium so unreactive?" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cpt-react-ser-mis-aluminium-unreactive',
      description:
        'Aluminium is an unreactive metal because aluminium cans and window frames do not corrode in air.',
      triggerAnswer: 'aluminium-unreactive',
      correction:
        'In fact aluminium is reactive and sits above zinc and iron. It does not visibly corrode because a thin layer of aluminium oxide forms instantly in air and protects the metal underneath.',
      reExplanation:
        'Scratch an aluminium can with a pin and the silvery metal underneath looks shiny for a moment, then a thin oxide layer forms again straight away. The oxide is tough and clings to the surface, so the rest of the can never gets to the air. That invisible coat is why aluminium acts unreactive in everyday life despite sitting fairly high in the reactivity series.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q06 on linking reactivity to the periodic table: candidates "stated that metals on the left of the periodic table are less reactive because they are closer to hydrogen", inverting the Group 1 trend. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on metals and the periodic table.
    {
      id: 'cpt-react-ser-mis-periodic-position',
      description:
        'The further LEFT a metal sits in the periodic table, the LESS reactive it is.',
      triggerAnswer: 'periodic-position',
      correction:
        'In fact Group 1 metals on the far left are the MOST reactive. Reactivity tends to fall as you move right across a period and to rise as you go down Group 1.',
      reExplanation:
        'Picture the periodic table. Potassium, sodium, lithium all sit in the far left column (Group 1) and these are exactly the metals at the top of the reactivity series. Move right into the transition metals (iron, copper) and you drop down the series. Position and reactivity line up, but the direction is the opposite of what the misconception claims.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (2004 update), section on metals: Year 7 learners often link rarity to unreactivity, saying gold is "unreactive because there is so little of it". Reinforced by CGP KS3 Chemistry Study Book p.62 note on noble metals.
    {
      id: 'cpt-react-ser-mis-gold-rare-not-unreactive',
      description:
        'Gold is unreactive because it is rare, so there is not enough of it around to react.',
      triggerAnswer: 'gold-rare-not-unreactive',
      correction:
        'In fact gold is unreactive because of where it sits in the reactivity series, not because of how rare it is. Rarity and reactivity are separate ideas.',
      reExplanation:
        'A pinch of gold dust in a beaker of dilute acid would not react either: the gold sample size has nothing to do with it. Gold sits right at the bottom of the reactivity series, below hydrogen, copper and silver. That low position is why gold rings stay shiny for decades. Rare elements can still be reactive, and common metals can still be unreactive.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
