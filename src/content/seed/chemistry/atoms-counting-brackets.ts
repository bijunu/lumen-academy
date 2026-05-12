import type { SkillNode } from '@/types/content'

export const countingAtomsInBrackets: SkillNode = {
  id: 'chemistry-atoms-counting-brackets',
  title: 'Counting Atoms in Brackets',
  description:
    'Count the total number of atoms in a molecular formula that contains brackets, such as Ca(OH)₂ or Mg(NO₃)₂. The subscript outside the bracket multiplies every atom inside the bracket. Atoms that sit outside the bracket are added on separately. Practice on common UK lab compounds: limewater, fertiliser nitrates, ammonium sulfate.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'confident',
  prerequisites: ['chemistry-atoms-symbols-formulae'],
  curriculum: {
    ks3Objective:
      'Counting the total number of atoms in a molecular formula containing brackets; examples such as Ca(OH)2 and Mg(NO3)2; multiplying indices correctly so every atom inside a bracket is multiplied by the outside subscript.',
    awardingBodies: {
      aqa: '4.1.1.1 Chemical formulae and the mole; counting atoms in formulae with brackets (8462)',
      edexcel:
        'Topic 1.2 Chemical formulae; understanding brackets and indices in compound formulae (1CH0)',
      ocr: 'C1.1a Writing and interpreting formulae; brackets and multiplying indices (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cae-brackets-scene-1',
      title: 'The Bracket Rule on Ca(OH)₂',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the formula Ca(OH)₂ to see why the small 2 outside the bracket multiplies BOTH atoms inside the bracket.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><text x="60" y="90" font-size="42" font-weight="700" fill="#1E3A8A">Ca</text><text x="120" y="90" font-size="42" font-weight="700" fill="#475569">(</text><text x="140" y="90" font-size="42" font-weight="700" fill="#1E3A8A">O</text><text x="178" y="90" font-size="42" font-weight="700" fill="#1E3A8A">H</text><text x="210" y="90" font-size="42" font-weight="700" fill="#475569">)</text><text x="232" y="104" font-size="28" font-weight="700" fill="#B91C1C">2</text><line x1="120" y1="100" x2="225" y2="100" stroke="#B91C1C" stroke-width="1.5"/><line x1="120" y1="100" x2="120" y2="115" stroke="#B91C1C" stroke-width="1.5"/><line x1="225" y1="100" x2="225" y2="115" stroke="#B91C1C" stroke-width="1.5"/><text x="172" y="130" text-anchor="middle" font-size="9" fill="#B91C1C">the 2 multiplies EVERY atom inside the bracket</text><text x="55" y="150" font-size="9" fill="#1E3A8A">Ca atoms: 1</text><text x="55" y="166" font-size="9" fill="#1E3A8A">O atoms: 1 x 2 = 2</text><text x="55" y="182" font-size="9" fill="#1E3A8A">H atoms: 1 x 2 = 2</text><text x="200" y="166" font-size="10" font-weight="700" fill="#14532D">TOTAL: 5 atoms</text></svg>',
        hotspots: [
          {
            id: 'cae-brackets-h-ca',
            x: 18,
            y: 35,
            label: 'Ca: outside the bracket',
            description:
              'The Ca symbol sits to the left of the bracket. The small 2 outside the bracket does NOT touch atoms that are outside the bracket. So there is just 1 calcium atom in one particle of Ca(OH)₂.',
          },
          {
            id: 'cae-brackets-h-inside',
            x: 50,
            y: 35,
            label: 'Inside the bracket: O and H',
            description:
              'Inside the bracket we have one oxygen atom and one hydrogen atom. These two atoms form a hydroxide group, written (OH).',
          },
          {
            id: 'cae-brackets-h-subscript',
            x: 75,
            y: 50,
            label: 'The subscript 2: multiplies EVERY atom inside',
            description:
              'The small 2 just after the closing bracket multiplies every atom inside the bracket. So the (OH) group is taken twice, giving 2 oxygens and 2 hydrogens.',
          },
          {
            id: 'cae-brackets-h-total',
            x: 75,
            y: 82,
            label: 'Total atoms',
            description:
              '1 Ca + (1 O + 1 H) × 2 = 1 Ca + 2 O + 2 H = 5 atoms in total. Ca(OH)₂ is limewater, used in the school lab to test for carbon dioxide.',
          },
        ],
      },
    },
    {
      id: 'cae-brackets-scene-2',
      title: 'Two Atoms Inside: Mg(NO₃)₂',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on Mg(NO₃)₂ to see how the outside 2 stretches across BOTH the N and the three Os already inside the bracket.',
      data: {
        viewBox: '0 0 360 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200"><rect x="0" y="0" width="360" height="200" fill="#FEF3C7"/><text x="40" y="90" font-size="40" font-weight="700" fill="#1E3A8A">Mg</text><text x="110" y="90" font-size="40" font-weight="700" fill="#475569">(</text><text x="128" y="90" font-size="40" font-weight="700" fill="#1E3A8A">N</text><text x="166" y="90" font-size="40" font-weight="700" fill="#1E3A8A">O</text><text x="204" y="104" font-size="26" font-weight="700" fill="#B45309">3</text><text x="222" y="90" font-size="40" font-weight="700" fill="#475569">)</text><text x="244" y="104" font-size="28" font-weight="700" fill="#B91C1C">2</text><line x1="110" y1="100" x2="240" y2="100" stroke="#B91C1C" stroke-width="1.5"/><line x1="110" y1="100" x2="110" y2="115" stroke="#B91C1C" stroke-width="1.5"/><line x1="240" y1="100" x2="240" y2="115" stroke="#B91C1C" stroke-width="1.5"/><text x="40" y="140" font-size="9" fill="#1E3A8A">Mg atoms: 1 (outside the bracket)</text><text x="40" y="156" font-size="9" fill="#1E3A8A">N atoms inside: 1 x 2 = 2</text><text x="40" y="172" font-size="9" fill="#1E3A8A">O atoms inside: 3 x 2 = 6</text><text x="40" y="188" font-size="10" font-weight="700" fill="#14532D">TOTAL: 1 + 2 + 6 = 9 atoms</text><text x="240" y="156" font-size="9" fill="#B45309">inside 3 = number of</text><text x="240" y="168" font-size="9" fill="#B45309">oxygens in ONE NO₃ group</text><text x="240" y="184" font-size="9" font-weight="700" fill="#B91C1C">outside 2 = take 2 NO₃ groups</text></svg>',
        hotspots: [
          {
            id: 'cae-brackets-h-mg',
            x: 14,
            y: 35,
            label: 'Mg: 1 magnesium atom',
            description:
              'Magnesium sits outside the bracket, with no subscript. So there is just 1 magnesium atom in one particle of magnesium nitrate.',
          },
          {
            id: 'cae-brackets-h-no3',
            x: 45,
            y: 35,
            label: '(NO₃): one nitrate group',
            description:
              'Inside the bracket sits one nitrogen atom and three oxygen atoms. The 3 INSIDE the bracket only counts the oxygens within this one nitrate group. Together NO₃ is the nitrate ion you meet in fertilisers.',
          },
          {
            id: 'cae-brackets-h-outside-2',
            x: 70,
            y: 50,
            label: 'Outside 2: take two NO₃ groups',
            description:
              'The 2 outside the bracket multiplies the WHOLE nitrate group. So instead of 1 N and 3 O, you take 2 N and 2 × 3 = 6 O.',
          },
          {
            id: 'cae-brackets-h-total',
            x: 25,
            y: 85,
            label: 'Add Mg and the doubled NO₃ groups',
            description:
              '1 Mg + 2 × (1 N + 3 O) = 1 Mg + 2 N + 6 O = 9 atoms in total. Magnesium nitrate is a common fertiliser ingredient on UK farms.',
          },
        ],
      },
    },
    {
      id: 'cae-brackets-scene-3',
      title: 'Limewater (with brackets) vs Chalk (no brackets)',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare two real UK lab compounds. Ca(OH)₂ needs the bracket rule; CaCO₃ has no brackets and is just a direct count.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="30" width="130" height="140" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.2"/><text x="85" y="50" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">LIMEWATER</text><text x="85" y="88" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">Ca(OH)<tspan baseline-shift="sub" font-size="0.7em">2</tspan></text><text x="85" y="112" text-anchor="middle" font-size="8" fill="#7C2D12">brackets present</text><text x="85" y="130" text-anchor="middle" font-size="8" fill="#1E3A8A">1 Ca + 2 O + 2 H</text><text x="85" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">5 atoms</text><text x="85" y="164" text-anchor="middle" font-size="7" fill="#475569">used to test for CO₂</text></g><g><rect x="170" y="30" width="130" height="140" rx="4" fill="#FFFFFF" stroke="#7C2D12" stroke-width="1.2"/><text x="235" y="50" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">CHALK</text><text x="235" y="88" text-anchor="middle" font-size="22" font-weight="700" fill="#1E3A8A">CaCO<tspan baseline-shift="sub" font-size="0.7em">3</tspan></text><text x="235" y="112" text-anchor="middle" font-size="8" fill="#7C2D12">no brackets</text><text x="235" y="130" text-anchor="middle" font-size="8" fill="#1E3A8A">1 Ca + 1 C + 3 O</text><text x="235" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">5 atoms</text><text x="235" y="164" text-anchor="middle" font-size="7" fill="#475569">white cliffs of Dover</text></g></svg>',
        hotspots: [
          {
            id: 'cae-brackets-h-lime',
            x: 25,
            y: 30,
            label: 'Limewater: brackets needed',
            description:
              'Ca(OH)₂ contains a hydroxide group (OH) that is taken twice. You MUST use the bracket rule: 1 Ca, then 2 × (1 O + 1 H) = 2 O + 2 H. Total 5 atoms.',
          },
          {
            id: 'cae-brackets-h-chalk',
            x: 70,
            y: 30,
            label: 'Chalk: no brackets, no multiplying',
            description:
              'CaCO₃ has NO bracket. The subscript 3 sits right next to the O only and counts oxygens only. It does NOT multiply the C or the Ca. Count straight: 1 Ca + 1 C + 3 O = 5 atoms.',
          },
          {
            id: 'cae-brackets-h-rule',
            x: 50,
            y: 85,
            label: 'The key rule',
            description:
              'A subscript multiplies what is immediately to its LEFT. After a single symbol, that is one atom. After a closing bracket, that is everything inside the bracket. So look for the bracket before you multiply.',
          },
        ],
      },
    },
    {
      id: 'cae-brackets-scene-4',
      title: 'Worked Process on Al₂(SO₄)₃',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk through the bracket-counting process step by step on Al₂(SO₄)₃, aluminium sulfate, a UK water-treatment chemical.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="40" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">PROCESS for Al₂(SO₄)₃ (aluminium sulfate)</text><g><rect x="20" y="55" width="320" height="22" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="30" y="71" font-size="9" fill="#1E3A8A">1. Atoms OUTSIDE the bracket: Al with subscript 2 means 2 Al atoms.</text></g><g><rect x="20" y="82" width="320" height="22" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="30" y="98" font-size="9" fill="#1E3A8A">2. Atoms INSIDE the bracket: (SO₄) means 1 S and 4 O in one sulfate group.</text></g><g><rect x="20" y="109" width="320" height="22" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="30" y="125" font-size="9" fill="#1E3A8A">3. Outside subscript: 3 means take THREE sulfate groups.</text></g><g><rect x="20" y="136" width="320" height="22" rx="3" fill="#FFFFFF" stroke="#475569"/><text x="30" y="152" font-size="9" fill="#1E3A8A">4. Multiply through: 3 × (1 S + 4 O) = 3 S + 12 O.</text></g><g><rect x="20" y="163" width="320" height="22" rx="3" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.5"/><text x="30" y="179" font-size="9" font-weight="700" fill="#1E3A8A">5. Add outside + inside: 2 Al + 3 S + 12 O = 17 atoms in total.</text></g><text x="180" y="205" text-anchor="middle" font-size="8" fill="#7C2D12">UK water treatment plants add Al₂(SO₄)₃ to clump dirt particles together.</text></svg>',
        hotspots: [
          {
            id: 'cae-brackets-h-step1',
            x: 12,
            y: 30,
            label: 'Step 1: read outside first',
            description:
              'Start with the atoms that sit OUTSIDE the bracket. Al has a small 2 next to it. So there are 2 aluminium atoms. The 3 at the far right does NOT touch the Al.',
          },
          {
            id: 'cae-brackets-h-step2',
            x: 12,
            y: 42,
            label: 'Step 2: read inside the bracket',
            description:
              'Inside the bracket sits S with no subscript (so 1 S) and O with a small 4 (so 4 O). That makes one sulfate group: 1 S + 4 O = 5 atoms.',
          },
          {
            id: 'cae-brackets-h-step3',
            x: 12,
            y: 56,
            label: 'Step 3: read outside subscript',
            description:
              'The number 3 just after the closing bracket means take THREE copies of the inside group. It multiplies BOTH the S and the four Os.',
          },
          {
            id: 'cae-brackets-h-step4',
            x: 12,
            y: 70,
            label: 'Step 4: multiply through',
            description:
              '3 × (1 S + 4 O) = 3 S + 12 O. Multiply each kind of atom inside the bracket separately by the outside subscript.',
          },
          {
            id: 'cae-brackets-h-step5',
            x: 12,
            y: 82,
            label: 'Step 5: add outside + inside total',
            description:
              '2 Al (from outside) + 3 S + 12 O (from inside × 3) = 17 atoms in total. Al₂(SO₄)₃ has 17 atoms per particle. Always check the outside atoms are not forgotten.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-brackets-worked-1',
      title: 'Counting every atom in Ca(OH)₂ step by step',
      steps: [
        {
          explanation:
            'Question: how many atoms are in one particle of calcium hydroxide, Ca(OH)₂? This is the formula of limewater, used in the school lab to test for carbon dioxide.',
        },
        {
          explanation:
            'Step 1: identify what sits OUTSIDE the bracket. Ca sits to the left of the bracket. There is no small number next to Ca, so we have 1 Ca atom. The 2 at the end belongs to the bracket, not to Ca.',
          maths: 'outside the bracket: 1 Ca',
        },
        {
          explanation:
            'Step 2: identify what sits INSIDE the bracket. Inside (OH) we have one oxygen atom and one hydrogen atom. So one (OH) group = 1 O + 1 H.',
          maths: 'inside the bracket: 1 O + 1 H',
        },
        {
          explanation:
            'Step 3: read the outside subscript. The small 2 sits just AFTER the closing bracket. So the (OH) group is taken twice. The 2 multiplies BOTH atoms inside, not just one of them.',
          maths: 'outside subscript: 2 (applies to every atom inside)',
        },
        {
          explanation:
            'Step 4: multiply through the bracket. 2 × (1 O + 1 H) = 2 O + 2 H.',
          maths: '2 × (1 O + 1 H) = 2 O + 2 H',
        },
        {
          explanation:
            'Step 5: add the outside atoms and the multiplied inside atoms together. 1 Ca + 2 O + 2 H = 5 atoms in total.',
          maths: '1 + 2 + 2 = 5 atoms in total',
        },
        {
          explanation:
            'Check: did we forget the Ca? No. The most common slip is to count only the (OH)₂ part and forget the calcium outside. Always read outside the bracket first.',
        },
      ],
    },
    {
      id: 'cae-brackets-worked-2',
      title: 'Why Mg(NO₃)₂ has 9 atoms, not 6',
      steps: [
        {
          explanation:
            'Question: how many atoms are in one particle of magnesium nitrate, Mg(NO₃)₂? This is a common UK fertiliser ingredient.',
        },
        {
          explanation:
            'Step 1: outside the bracket. Mg has no subscript next to it, so 1 magnesium atom.',
          maths: 'outside: 1 Mg',
        },
        {
          explanation:
            'Step 2: inside the bracket. (NO₃) holds 1 nitrogen atom and 3 oxygen atoms. So 1 NO₃ group = 1 N + 3 O = 4 atoms.',
          maths: 'inside one bracket: 1 N + 3 O',
        },
        {
          explanation:
            'Step 3: the outside 2 multiplies EVERYTHING inside, not just the N. 2 × 1 N = 2 N atoms. 2 × 3 O = 6 O atoms.',
          maths: '2 × (1 N + 3 O) = 2 N + 6 O',
        },
        {
          explanation:
            'Step 4: add outside and inside totals. 1 Mg + 2 N + 6 O = 9 atoms.',
          maths: '1 + 2 + 6 = 9 atoms',
        },
        {
          explanation:
            'A common wrong answer is 6 (1 Mg + 1 N + 3 O + 1 extra). That happens when the outside 2 is treated as if it only adds one more nitrate group, instead of doubling everything inside the bracket. The correct rule is: multiply through.',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-brackets-q1',
      type: 'multiple-choice',
      stem: 'In the formula Ca(OH)₂, what does the small 2 outside the bracket do?',
      tier: 'core',
      options: [
        'It multiplies every atom inside the bracket by 2',
        'It multiplies only the H inside the bracket by 2',
        'It multiplies only the Ca outside the bracket by 2',
        'It is the charge on the hydroxide group',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The subscript outside a bracket applies to the WHOLE group inside the bracket.',
      misconceptionId: 'cae-brackets-mis-only-last-atom',
    },
    {
      id: 'cae-brackets-q2',
      type: 'numeric-entry',
      stem: 'How many atoms in TOTAL are in one particle of Ca(OH)₂?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: '1 Ca, then double the (OH) group. Add them all up.',
      misconceptionId: 'cae-brackets-mis-forget-outside',
    },
    {
      id: 'cae-brackets-q3',
      type: 'numeric-entry',
      stem: 'How many oxygen atoms are in one particle of Mg(NO₃)₂?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'There are 3 oxygens in one (NO₃) group, and the outside 2 takes two of those groups.',
    },
    {
      id: 'cae-brackets-q4',
      type: 'multiple-choice',
      stem: 'In which formula does a subscript multiply more than one kind of atom?',
      tier: 'core',
      options: [
        'H₂O (the 2 only counts hydrogens)',
        'NaCl (no subscripts at all)',
        'Cu(OH)₂ (the 2 multiplies the O and the H together)',
        'CO₂ (the 2 only counts oxygens)',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cae-brackets-mis-multiply-without-bracket',
    },
    {
      id: 'cae-brackets-q5',
      type: 'multiple-choice',
      stem: 'How many hydrogen atoms are in one particle of Ca(OH)₂?',
      tier: 'core',
      options: ['1', '2', '3', '4'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The 2 outside the bracket doubles every atom inside, including the H.',
      misconceptionId: 'cae-brackets-mis-partial-multiply',
    },
    {
      id: 'cae-brackets-q6',
      type: 'multiple-choice',
      stem: 'A pupil writes "Ca(OH)₂ has 4 atoms: 1 Ca + 1 O + 2 H". What mistake have they made?',
      tier: 'core',
      options: [
        'They have miscounted the calcium',
        'They have forgotten to multiply the O inside the bracket by the outside 2',
        'They have forgotten that the small 2 also applies to the Ca',
        'They have added an extra hydrogen by mistake',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-brackets-mis-only-last-atom',
    },
    {
      id: 'cae-brackets-q7',
      type: 'spot-misconception',
      stem: 'Tom looks at H₂O and says: "The little 2 in H₂O multiplies the O too, so there are 2 hydrogens and 2 oxygens, total 4 atoms."',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. A subscript always multiplies every atom in the formula.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. The subscript 2 in H₂O only applies to the H, because there is NO bracket. The O has no subscript so there is just 1 oxygen. Total = 3 atoms.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'cae-brackets-mis-multiply-without-bracket',
    },
    // ===== CONFIDENT (8) =====
    {
      id: 'cae-brackets-q8',
      type: 'numeric-entry',
      stem: 'How many atoms in TOTAL are in one particle of Mg(NO₃)₂?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: '1 Mg outside, plus 2 × (1 N + 3 O) inside. Add carefully.',
    },
    {
      id: 'cae-brackets-q9',
      type: 'numeric-entry',
      stem: 'How many atoms in TOTAL are in one particle of Cu(NO₃)₂ (copper nitrate)?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: '1 Cu, plus 2 × (1 N + 3 O). The maths is the same as Mg(NO₃)₂.',
    },
    {
      id: 'cae-brackets-q10',
      type: 'multiple-choice',
      stem: 'How many atoms in TOTAL are in one particle of Fe(OH)₃ (iron(III) hydroxide, the brown sludge in rusty water)?',
      tier: 'confident',
      options: ['4', '5', '7', '9'],
      correctIndex: 2,
      xpValue: 15,
      hint: '1 Fe outside, plus 3 × (1 O + 1 H) inside. 1 + 3 + 3 = 7.',
      misconceptionId: 'cae-brackets-mis-bracket-vs-no-bracket',
    },
    {
      id: 'cae-brackets-q11',
      type: 'multiple-choice',
      stem: 'How many oxygen atoms are in one particle of aluminium sulfate, Al₂(SO₄)₃?',
      tier: 'confident',
      options: ['4', '7', '12', '3'],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Each (SO₄) has 4 oxygens. The outside 3 takes three of those groups.',
      misconceptionId: 'cae-brackets-mis-add-not-multiply',
    },
    {
      id: 'cae-brackets-q12',
      type: 'multiple-choice',
      stem: 'Which formula contains exactly 9 atoms per particle?',
      tier: 'confident',
      options: [
        'Ca(OH)₂',
        'Mg(NO₃)₂',
        'CaCO₃',
        'H₂SO₄',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Count each: Ca(OH)₂ = 5, Mg(NO₃)₂ = ?, CaCO₃ = 5, H₂SO₄ = 7.',
    },
    {
      id: 'cae-brackets-q13',
      type: 'missing-step',
      stem: 'A pupil is counting the atoms in Mg(NO₃)₂. Fill in the missing step.',
      tier: 'confident',
      steps: [
        'Read the symbols outside the bracket: 1 Mg with no subscript, so 1 magnesium atom',
        'Read the symbols inside the bracket: 1 N and 3 O, so one nitrate group is 1 N + 3 O',
        null,
        'Multiply each atom inside the bracket by the outside subscript: 2 × 1 N + 2 × 3 O = 2 N + 6 O',
        'Add the outside atoms to the multiplied inside atoms: 1 Mg + 2 N + 6 O = 9 atoms total',
      ],
      missingStepIndex: 2,
      correctStep:
        'Note the outside subscript: the 2 just after the closing bracket multiplies every atom inside the bracket',
      xpValue: 15,
    },
    {
      id: 'cae-brackets-q14',
      type: 'drag-order',
      stem: 'Place the steps for counting atoms in Ca(OH)₂ in the correct order.',
      tier: 'confident',
      items: [
        'Multiply each atom inside the bracket by the outside subscript: 2 × (1 O + 1 H) = 2 O + 2 H',
        'Identify what sits outside the bracket: 1 Ca',
        'Add the outside atoms and the multiplied inside atoms: 1 Ca + 2 O + 2 H = 5 atoms',
        'Identify what sits inside the bracket: 1 O + 1 H',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'cae-brackets-q15',
      type: 'multiple-choice',
      stem: 'A pupil counts Cu(OH)₂ as "1 Cu + 1 O + 1 H + 2 = 5 atoms". Their answer is correct but for the wrong reason. Where is the maths wrong?',
      tier: 'confident',
      options: [
        'There is no mistake; that working is fully correct',
        'The 2 outside the bracket is not an extra atom; it is a multiplier. The correct working is 1 Cu + 2 × (1 O + 1 H) = 1 + 2 + 2 = 5 atoms',
        'The Cu should be doubled to 2',
        'The hydroxide group has 3 atoms, not 2',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cae-brackets-mis-add-not-multiply',
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'cae-brackets-q16',
      type: 'numeric-entry',
      stem: 'How many atoms in TOTAL are in one particle of aluminium sulfate, Al₂(SO₄)₃ (a UK water-treatment chemical)?',
      tier: 'challenge',
      correctAnswer: 17,
      xpValue: 20,
      hint: '2 Al outside, then 3 × (1 S + 4 O) inside. Multiply through, then add.',
    },
    {
      id: 'cae-brackets-q17',
      type: 'numeric-entry',
      stem: 'Ammonium sulfate, (NH₄)₂SO₄, is the most common UK garden fertiliser. How many atoms in TOTAL are in one particle of (NH₄)₂SO₄?',
      tier: 'challenge',
      correctAnswer: 15,
      xpValue: 20,
      hint: '2 × (1 N + 4 H) from the bracket on the LEFT, plus 1 S and 4 O outside the bracket on the right. Mind the order.',
      misconceptionId: 'cae-brackets-mis-forget-outside',
    },
    {
      id: 'cae-brackets-q18',
      type: 'multiple-choice',
      stem: 'Which two formulae contain the SAME total number of atoms per particle?',
      tier: 'challenge',
      options: [
        'Mg(NO₃)₂ and Al₂(SO₄)₃',
        'Cu(OH)₂ and H₂O (both have 3 atoms)',
        'Fe(OH)₃ and NaCl',
        'Ca(OH)₂ and CaCO₃ (both have 5 atoms)',
      ],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Count each option carefully. Ca(OH)₂ has 1+2+2 = 5. CaCO₃ has 1+1+3 = 5.',
    },
    {
      id: 'cae-brackets-q19',
      type: 'multiple-choice',
      stem: 'A pupil reads the formula NH₄NO₃ (ammonium nitrate, a UK fertiliser) and tries to apply the bracket rule. Which statement is correct?',
      tier: 'challenge',
      options: [
        'The bracket rule applies: multiply the NH₄ by the 3 at the end',
        'The bracket rule does NOT apply: there are no brackets in this formula. Count directly: 2 N + 4 H + 3 O = 9 atoms',
        'The 3 at the end multiplies every atom in the formula',
        'NH₄NO₃ is not a valid formula',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cae-brackets-mis-multiply-without-bracket',
    },
    {
      id: 'cae-brackets-q20',
      type: 'numeric-entry',
      stem: 'How many atoms in TOTAL are in one particle of barium hydroxide, Ba(OH)₂?',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 20,
      hint: 'Same shape as Ca(OH)₂: 1 Ba outside, plus 2 × (1 O + 1 H) inside.',
    },
    {
      id: 'cae-brackets-q21',
      type: 'spot-misconception',
      stem: 'Aisha works out the atoms in Al₂(SO₄)₃ as: "2 Al + 1 S + 4 O + 3 = 10 atoms".',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The outside 3 adds three more atoms to the running total.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. The outside 3 is a multiplier, not an extra atom. The correct working is 2 Al + 3 × (1 S + 4 O) = 2 + 3 + 12 = 17 atoms.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-brackets-mis-add-not-multiply',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q03 on chemical formulae: candidates "multiplied only the last atom inside the bracket by the outside subscript" rather than every atom in the bracket. Reinforced by CGP KS3 Chemistry Study Book p.24 Common Mistake box.
    {
      id: 'cae-brackets-mis-only-last-atom',
      description:
        'A subscript outside a bracket only multiplies the last atom inside the bracket, not all of them.',
      triggerAnswer: 'only-last-atom',
      correction:
        'In fact the outside subscript multiplies every atom inside the bracket, not just the last one.',
      reExplanation:
        'A bracket groups atoms together as a single unit. A subscript after the closing bracket means: take that whole unit this many times. So Ca(OH)₂ takes the (OH) group twice, which means 2 O AND 2 H, not just 2 H. Treat the bracket as one packet that gets duplicated.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q05 on counting atoms in compound formulae: candidates "applied a subscript that follows a single symbol as if it applied to every atom in the formula", showing the rule needs an explicit bracket.
    {
      id: 'cae-brackets-mis-multiply-without-bracket',
      description:
        'A subscript multiplies every atom around it, even when there is no bracket.',
      triggerAnswer: 'multiply-without-bracket',
      correction:
        'In fact a subscript only multiplies the symbol immediately to its left. Without a bracket, it touches just one element.',
      reExplanation:
        'In H₂O the small 2 sits right after the H, so it only counts hydrogens. The O has no subscript and so stays at 1. A subscript can only multiply more than one kind of atom when there is a bracket that groups them together. No bracket means one atom multiplied.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/2F), Q04 on counting atoms in Ca(OH)₂: candidates "added the outside subscript to the running total as if it were an atom", giving 1 + 1 + 1 + 2 = 5 by coincidence but with wrong working.
    {
      id: 'cae-brackets-mis-add-not-multiply',
      description:
        'The subscript outside a bracket is an extra atom to add on, not a multiplier.',
      triggerAnswer: 'add-not-multiply',
      correction:
        'In fact the outside subscript is a multiplier. You multiply each atom inside the bracket by it, then add the products.',
      reExplanation:
        'Subscripts are never atoms in their own right; they only tell you how many of the atom (or group) on their left to count. So in Al₂(SO₄)₃ the outside 3 means "take 3 sulfate groups", giving 3 S + 12 O. Adding 3 as if it were a separate atom gives the wrong total. Always multiply through, then add.',
    },
    // Source: OCR GCSE Gateway Chemistry examiner report June 2019 (J248/02): candidates "counted only the atoms inside the bracket and forgot the symbols sitting outside" when working out totals for Ca(OH)₂ and Mg(NO₃)₂.
    {
      id: 'cae-brackets-mis-forget-outside',
      description:
        'When a formula has a bracket, only the atoms inside the bracket need counting.',
      triggerAnswer: 'forget-outside',
      correction:
        'In fact the atoms outside the bracket also count. Always read the whole formula, both the parts outside the bracket and the parts inside.',
      reExplanation:
        'In Ca(OH)₂ the Ca sits outside the bracket and is part of the compound. Skipping the Ca gives 4 atoms instead of 5, the wrong answer. Read the whole formula from left to right: first the outside atoms, then the inside group, then multiply by the outside subscript.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1H), Q06 on Mg(NO₃)₂: candidates "added the outside multiplier as if it produced extra nitrogen only" rather than multiplying every atom inside the bracket.
    {
      id: 'cae-brackets-mis-partial-multiply',
      description:
        'The outside subscript only multiplies the nitrogen (or the first atom) inside the bracket.',
      triggerAnswer: 'partial-multiply',
      correction:
        'In fact every atom inside the bracket is multiplied, including the oxygens. The outside subscript applies to all of them.',
      reExplanation:
        'In Mg(NO₃)₂ the 2 outside doubles BOTH the nitrogen AND the three oxygens inside the bracket. So you get 2 N AND 6 O, not 2 N and 3 O. The outside number takes the whole bracket as a packet and duplicates everything within it, no exceptions.',
    },
    // Source: RSC Education article "Common errors in writing chemical formulae" (rsc.org/education, accessed 2026-05-12): pupils often confuse "small 2 after a single symbol" with "small 2 after a bracket", treating both situations identically.
    {
      id: 'cae-brackets-mis-bracket-vs-no-bracket',
      description:
        'There is no real difference between H₂O and (OH)₂; the small 2 means the same thing in both.',
      triggerAnswer: 'bracket-vs-no-bracket',
      correction:
        'In fact the two are different. In H₂O the 2 only multiplies the H. In (OH)₂ the 2 multiplies both the O and the H.',
      reExplanation:
        'A subscript always multiplies what is immediately to its left. To the left of the 2 in H₂O sits one symbol, H, so only the hydrogen is counted twice. To the left of the 2 in (OH)₂ sits a closing bracket that groups one O and one H together, so both atoms are counted twice. The bracket changes what the subscript reaches.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on chemical formulae (stem.org.uk/best-evidence-science-teaching, accessed 2026-05-12): pupils interpret subscripts as Periodic Table group numbers or as charges rather than as counts of atoms.
    {
      id: 'cae-brackets-mis-subscript-is-charge',
      description:
        'The small number outside a bracket is the charge on the group, not the number of those groups.',
      triggerAnswer: 'subscript-is-charge',
      correction:
        'In fact the small number outside a bracket counts how many of that group are in one particle. It is not the charge.',
      reExplanation:
        'In Mg(NO₃)₂ the outside 2 means there are two nitrate groups in one particle of magnesium nitrate. It is not a charge. Charges are shown as a superscript with a + or − sign, like NO₃⁻. Subscripts (and the numbers after a closing bracket) only count atoms or groups.',
    },
  ],
  masteryRule: {
    streak: 4,
    spacedReviewDays: [1, 3, 7, 14],
  },
}
