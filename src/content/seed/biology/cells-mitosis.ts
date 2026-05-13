import type { SkillNode } from '@/types/content'

export const mitosis: SkillNode = {
  id: 'biology-cells-mitosis',
  title: 'Mitosis and Cell Division',
  description:
    'See why your body replaces worn-out cells in a predictable pattern. MITOSIS is the part of the cell cycle where one parent cell splits into TWO daughter cells that each carry the SAME chromosomes as the parent. Year 7 biologists use mitosis to explain everyday repair and growth: a grazed knee scabbing over after a fall in PE, a fingernail growing back after a clip, hair returning after a haircut, and the tip of an onion root pushing through soil in the school lab practical. The cycle has named stages (interphase, then prophase, metaphase, anaphase, telophase, then cytokinesis), and each one does a clear job. The body keeps a tight check on the rate of mitosis; uncontrolled division is the problem the NHS describes when it talks about cancer awareness in older relatives.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'confident',
  prerequisites: ['biology-cells-animal-cell'],
  curriculum: {
    ks3Objective:
      'How cells divide for growth and repair; the role of mitosis in producing daughter cells with identical genetic material.',
    awardingBodies: {
      aqa: '4.1.4.1 Cell division (mitosis) (GCSE Biology 8461)',
      edexcel: 'CB3 The cell cycle and mitosis (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.2.1 The cell cycle and mitosis (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bce-mi-cell-cycle',
      title: 'The Cell Cycle: Interphase to Mitosis to Cytokinesis',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the cell-cycle wheel to see what the cell is doing in that stage of the cycle.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">THE CELL CYCLE: ONE FULL TURN MAKES TWO DAUGHTER CELLS</text><circle cx="180" cy="118" r="74" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.6"/><path d="M180 44 A74 74 0 0 1 254 118 L180 118 Z" fill="#BBF7D0" opacity="0.7"/><path d="M254 118 A74 74 0 0 1 180 192 L180 118 Z" fill="#FBCFE8" opacity="0.7"/><path d="M180 192 A74 74 0 0 1 106 118 L180 118 Z" fill="#FDE68A" opacity="0.7"/><path d="M106 118 A74 74 0 0 1 180 44 L180 118 Z" fill="#BFDBFE" opacity="0.7"/><circle cx="180" cy="118" r="22" fill="#FFFFFF" stroke="#1E3A8A"/><text x="180" y="116" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">CELL</text><text x="180" y="126" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">CYCLE</text><text x="218" y="78" text-anchor="middle" font-size="8" font-weight="700" fill="#14532D">INTERPHASE</text><text x="218" y="90" text-anchor="middle" font-size="6" fill="#14532D">grow + copy DNA</text><text x="220" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#831843">MITOSIS</text><text x="220" y="172" text-anchor="middle" font-size="6" fill="#831843">nucleus splits</text><text x="138" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#92400E">CYTOKINESIS</text><text x="138" y="172" text-anchor="middle" font-size="6" fill="#92400E">cell pinches in two</text><text x="138" y="78" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">CHECK</text><text x="138" y="90" text-anchor="middle" font-size="6" fill="#1E3A8A">is the cell ready?</text><g><circle cx="180" cy="44" r="3" fill="#1E3A8A"/><circle cx="254" cy="118" r="3" fill="#1E3A8A"/><circle cx="180" cy="192" r="3" fill="#1E3A8A"/><circle cx="106" cy="118" r="3" fill="#1E3A8A"/></g></svg>',
        hotspots: [
          {
            id: 'bce-mi-cy-interphase',
            x: 60,
            y: 33,
            label: 'Interphase: grow and copy DNA',
            description:
              'The cell spends most of the cycle in interphase. It grows, builds organelles, and copies every chromosome so there are two identical sets ready to split. Interphase is not part of mitosis itself but is the run up to it.',
          },
          {
            id: 'bce-mi-cy-checkpoint',
            x: 38,
            y: 33,
            label: 'Checkpoint: is the cell ready?',
            description:
              'The cell only enters mitosis once its DNA is copied without errors and it has the size and energy to divide. This check is what stops a healthy cell from dividing whenever it feels like it.',
          },
          {
            id: 'bce-mi-cy-mitosis',
            x: 62,
            y: 71,
            label: 'Mitosis: nucleus splits in two',
            description:
              'The nucleus separates its copied chromosomes into two identical sets at opposite ends of the cell. This stage has four named sub-stages (prophase, metaphase, anaphase, telophase) and is shown in detail in the next scene.',
          },
          {
            id: 'bce-mi-cy-cytokinesis',
            x: 38,
            y: 71,
            label: 'Cytokinesis: cell pinches in two',
            description:
              'The whole cell now splits along the middle, giving two separate daughter cells. Each one carries a full copy of the parent cell DNA, so the two are genetically identical to the parent and to each other.',
          },
        ],
      },
    },
    {
      id: 'bce-mi-four-stages',
      title: 'The Four Stages of Mitosis: Prophase, Metaphase, Anaphase, Telophase',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens at each stage. The chromosomes (red and blue) move in a set order across the cell.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F0F9FF"/><text x="180" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">THE FOUR STAGES OF MITOSIS IN ORDER</text><g><ellipse cx="50" cy="80" rx="36" ry="28" fill="#FFFFFF" stroke="#1E3A8A"/><text x="50" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">1. PROPHASE</text><text x="50" y="118" text-anchor="middle" font-size="6" fill="#1E3A8A">chromosomes condense</text><text x="50" y="126" text-anchor="middle" font-size="6" fill="#1E3A8A">nucleus breaks down</text><path d="M40 70 L60 76 M44 84 L56 88 M40 90 L60 86" stroke="#DC2626" stroke-width="1.6" fill="none"/><path d="M40 78 L60 84 M44 92 L56 70" stroke="#1D4ED8" stroke-width="1.6" fill="none"/></g><g><ellipse cx="140" cy="80" rx="36" ry="28" fill="#FFFFFF" stroke="#1E3A8A"/><text x="140" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">2. METAPHASE</text><text x="140" y="118" text-anchor="middle" font-size="6" fill="#1E3A8A">chromosomes line up</text><text x="140" y="126" text-anchor="middle" font-size="6" fill="#1E3A8A">across the middle</text><line x1="140" y1="60" x2="140" y2="100" stroke="#94A3B8" stroke-dasharray="2 2"/><rect x="134" y="68" width="12" height="3" fill="#DC2626"/><rect x="134" y="74" width="12" height="3" fill="#1D4ED8"/><rect x="134" y="80" width="12" height="3" fill="#DC2626"/><rect x="134" y="86" width="12" height="3" fill="#1D4ED8"/></g><g><ellipse cx="230" cy="80" rx="36" ry="28" fill="#FFFFFF" stroke="#1E3A8A"/><text x="230" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">3. ANAPHASE</text><text x="230" y="118" text-anchor="middle" font-size="6" fill="#1E3A8A">chromosomes pulled</text><text x="230" y="126" text-anchor="middle" font-size="6" fill="#1E3A8A">to opposite ends</text><path d="M210 70 L218 70 M210 80 L218 80 M210 90 L218 90" stroke="#DC2626" stroke-width="1.8"/><path d="M242 70 L250 70 M242 80 L250 80 M242 90 L250 90" stroke="#1D4ED8" stroke-width="1.8"/><path d="M218 80 L208 80" stroke="#94A3B8" marker-end="url(#aL)"/><path d="M242 80 L252 80" stroke="#94A3B8" marker-end="url(#aR)"/><defs><marker id="aL" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M8,0 L0,4 L8,8 z" fill="#94A3B8"/></marker><marker id="aR" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#94A3B8"/></marker></defs></g><g><ellipse cx="320" cy="80" rx="36" ry="28" fill="#FFFFFF" stroke="#1E3A8A"/><text x="320" y="32" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">4. TELOPHASE</text><text x="320" y="118" text-anchor="middle" font-size="6" fill="#1E3A8A">two new nuclei form</text><text x="320" y="126" text-anchor="middle" font-size="6" fill="#1E3A8A">at each end</text><ellipse cx="306" cy="80" rx="10" ry="8" fill="none" stroke="#1E3A8A"/><ellipse cx="334" cy="80" rx="10" ry="8" fill="none" stroke="#1E3A8A"/><rect x="302" y="76" width="8" height="2" fill="#DC2626"/><rect x="302" y="80" width="8" height="2" fill="#1D4ED8"/><rect x="330" y="76" width="8" height="2" fill="#DC2626"/><rect x="330" y="80" width="8" height="2" fill="#1D4ED8"/></g><g><text x="180" y="160" text-anchor="middle" font-size="9" font-weight="700" fill="#831843">FOLLOWED BY CYTOKINESIS: CELL SPLITS IN TWO</text><ellipse cx="120" cy="190" rx="22" ry="14" fill="#FFFFFF" stroke="#1E3A8A"/><ellipse cx="240" cy="190" rx="22" ry="14" fill="#FFFFFF" stroke="#1E3A8A"/><rect x="114" y="186" width="12" height="2" fill="#DC2626"/><rect x="114" y="190" width="12" height="2" fill="#1D4ED8"/><rect x="234" y="186" width="12" height="2" fill="#DC2626"/><rect x="234" y="190" width="12" height="2" fill="#1D4ED8"/><text x="180" y="194" text-anchor="middle" font-size="7" fill="#1E3A8A">two identical daughter cells</text></g></svg>',
        hotspots: [
          {
            id: 'bce-mi-st-prophase',
            x: 14,
            y: 36,
            label: 'Prophase: chromosomes condense',
            description:
              'Each long thread of DNA winds up into a short, thick chromosome you could see under a school microscope. The nuclear membrane breaks down so the chromosomes can move freely inside the cell.',
          },
          {
            id: 'bce-mi-st-metaphase',
            x: 39,
            y: 36,
            label: 'Metaphase: line up across the middle',
            description:
              'The chromosomes line up in a single row right across the centre of the cell. Each one is already a double copy from interphase, held together at the centre, ready to be pulled apart.',
          },
          {
            id: 'bce-mi-st-anaphase',
            x: 64,
            y: 36,
            label: 'Anaphase: pulled to opposite ends',
            description:
              'Each double chromosome is pulled apart down the middle. One half goes to one end of the cell, the other half to the opposite end. The two ends now hold matching, complete sets.',
          },
          {
            id: 'bce-mi-st-telophase',
            x: 89,
            y: 36,
            label: 'Telophase: two new nuclei form',
            description:
              'A new nuclear membrane forms around each set of chromosomes, giving two nuclei inside one cell. The chromosomes start to unwind back into thread form. The nucleus has now finished splitting.',
          },
          {
            id: 'bce-mi-st-cytokinesis',
            x: 50,
            y: 84,
            label: 'Cytokinesis: the cell splits',
            description:
              'A pinch forms across the middle of the cell and tightens until the cytoplasm and membrane split in two. The result is two separate daughter cells, each with a full nucleus and a full set of chromosomes.',
          },
        ],
      },
    },
    {
      id: 'bce-mi-chromosome-split',
      title: 'Chromosome Count Stays the Same in Each Daughter Cell',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a parent cell with 46 chromosomes gives two daughter cells that also each carry 46 chromosomes (not 23).',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">PARENT 46 CHROMOSOMES -> TWO DAUGHTERS, EACH 46</text><g><ellipse cx="180" cy="68" rx="42" ry="32" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1.6"/><text x="180" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#1E3A8A">PARENT CELL</text><text x="180" y="74" text-anchor="middle" font-size="14" font-weight="700" fill="#831843">46</text><text x="180" y="90" text-anchor="middle" font-size="6" fill="#1E3A8A">chromosomes</text></g><g><path d="M180 100 L120 140" stroke="#1E3A8A" stroke-width="1.6" marker-end="url(#aD1)"/><path d="M180 100 L240 140" stroke="#1E3A8A" stroke-width="1.6" marker-end="url(#aD2)"/><defs><marker id="aD1" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#1E3A8A"/></marker><marker id="aD2" viewBox="0 0 8 8" refX="4" refY="6" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,0 L4,8 z" fill="#1E3A8A"/></marker></defs></g><g><ellipse cx="110" cy="166" rx="34" ry="26" fill="#FFFFFF" stroke="#14532D" stroke-width="1.6"/><text x="110" y="150" text-anchor="middle" font-size="7" font-weight="700" fill="#14532D">DAUGHTER 1</text><text x="110" y="172" text-anchor="middle" font-size="14" font-weight="700" fill="#14532D">46</text><text x="110" y="188" text-anchor="middle" font-size="6" fill="#14532D">chromosomes</text></g><g><ellipse cx="250" cy="166" rx="34" ry="26" fill="#FFFFFF" stroke="#14532D" stroke-width="1.6"/><text x="250" y="150" text-anchor="middle" font-size="7" font-weight="700" fill="#14532D">DAUGHTER 2</text><text x="250" y="172" text-anchor="middle" font-size="14" font-weight="700" fill="#14532D">46</text><text x="250" y="188" text-anchor="middle" font-size="6" fill="#14532D">chromosomes</text></g><text x="180" y="212" text-anchor="middle" font-size="8" font-weight="700" fill="#7F1D1D">DNA WAS COPIED IN INTERPHASE FIRST, SO BOTH GET A FULL SET</text></svg>',
        hotspots: [
          {
            id: 'bce-mi-cs-parent',
            x: 50,
            y: 31,
            label: 'Parent cell: 46 chromosomes',
            description:
              'A normal body cell in a human has 46 chromosomes in its nucleus. Before mitosis starts, every chromosome is copied in interphase, so the parent briefly holds 92 strands of DNA arranged as 46 doubled chromosomes.',
          },
          {
            id: 'bce-mi-cs-daughter1',
            x: 30,
            y: 75,
            label: 'Daughter 1: 46 chromosomes',
            description:
              'When the doubled chromosomes are pulled apart in anaphase and split by cytokinesis, one full set goes to this daughter cell. That set has 46 chromosomes, the same number the parent started with.',
          },
          {
            id: 'bce-mi-cs-daughter2',
            x: 70,
            y: 75,
            label: 'Daughter 2: 46 chromosomes',
            description:
              'The matching full set goes to this daughter cell. It also holds 46 chromosomes, and the genes on each chromosome are IDENTICAL to the genes in daughter 1 and to the parent. No mixing or halving happens.',
          },
          {
            id: 'bce-mi-cs-rule',
            x: 50,
            y: 95,
            label: 'Why both keep 46, not 23',
            description:
              'Halving the count is the job of meiosis (used only to make sperm and egg cells). Mitosis is for growth and repair, so it keeps the chromosome count the same in each daughter cell. The DNA copy step in interphase is what makes this possible.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bce-mi-worked-1',
      title: 'Counting daughter cells after a few rounds of mitosis',
      steps: [
        {
          explanation:
            'Question: a pupil at a Manchester grammar school grazes her knee in a PE lesson. A single skin cell at the edge of the graze divides by mitosis 4 times in a row, with every daughter cell going on to divide. How many cells are present after 4 rounds, starting from 1 cell?',
        },
        {
          explanation:
            'Step 1: name the pattern. Each round of mitosis takes ONE parent cell and makes TWO daughter cells. So after each round, the total number of cells doubles.',
          maths: 'each round: cells count x 2',
        },
        {
          explanation:
            'Step 2: count round 1. Start with 1 cell. After 1 round, the cell has split into 2.',
          maths: '1 -> 2',
        },
        {
          explanation:
            'Step 3: count round 2. Each of the 2 cells now splits into 2 daughters, giving 4 cells.',
          maths: '2 x 2 = 4',
        },
        {
          explanation:
            'Step 4: count rounds 3 and 4. Doubling again gives 8 after round 3, then 16 after round 4.',
          maths: '4 x 2 = 8, then 8 x 2 = 16',
        },
        {
          explanation:
            'Step 5: state the rule. The total after n rounds is 2^n times the starting number, so 4 rounds of mitosis from 1 cell give 2^4 = 16 cells. That is how a small patch of skin can heal the graze in a few days.',
          maths: 'cells after n rounds = start x 2^n; here 1 x 2^4 = 16',
        },
      ],
    },
    {
      id: 'bce-mi-worked-2',
      title: 'Working out how much of the cell cycle a stage takes',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil at a Leeds grammar school is told that the full cell cycle in a particular human skin cell takes 24 hours. Of those 24 hours, the cell spends 22 hours in interphase. What PERCENTAGE of the cell cycle does this cell spend in interphase, and what does that say about the rest of the stages?',
        },
        {
          explanation:
            'Step 1: write the percentage as a fraction. Time in interphase over total time in the cycle.',
          maths: 'percentage in interphase = (22 / 24) x 100',
        },
        {
          explanation:
            'Step 2: simplify the fraction first to make the arithmetic clean.',
          maths: '22 / 24 = 11 / 12',
        },
        {
          explanation:
            'Step 3: convert to a percentage. 11 divided by 12 is about 0.9167, and multiplying by 100 gives 91.67%.',
          maths: '(11 / 12) x 100 = 91.67%',
        },
        {
          explanation:
            'Step 4: round to the nearest whole percent for a Year 7 answer.',
          maths: 'about 92%',
        },
        {
          explanation:
            'Step 5: interpret it. The cell spends about 92% of the cycle in interphase (growing and copying DNA), so mitosis plus cytokinesis together fill only the remaining 8% (about 2 hours). The active dividing part is a short burst at the end of the cycle.',
          maths: 'remaining = 100 - 92 = 8%, about 2 hours of 24',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'bce-mi-q1',
      type: 'multiple-choice',
      stem: 'What is the main job of mitosis in the human body?',
      tier: 'core',
      options: [
        'To make sperm cells and egg cells',
        'To grow new cells and replace cells that are worn out or damaged',
        'To digest food in the stomach',
        'To send messages from the brain to the muscles',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'bce-mi-mis-mitosis-meiosis-same',
    },
    {
      id: 'bce-mi-q2',
      type: 'multiple-choice',
      stem: 'A parent cell divides by mitosis into daughter cells. How many daughter cells are produced from ONE parent cell in one round of mitosis?',
      tier: 'core',
      options: ['2', '1', '4', '8'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bce-mi-mis-half-cells',
    },
    {
      id: 'bce-mi-q3',
      type: 'numeric-entry',
      stem: 'A normal human body cell has 46 chromosomes in its nucleus. After this cell divides by mitosis, how many chromosomes are in EACH daughter cell?',
      tier: 'core',
      correctAnswer: 46,
      xpValue: 10,
      hint: 'Mitosis is for growth and repair, so the chromosome count stays the same in each daughter cell.',
      misconceptionId: 'bce-mi-mis-half-chromosomes',
    },
    {
      id: 'bce-mi-q4',
      type: 'numeric-entry',
      stem: 'A single skin cell at the edge of a grazed knee divides by mitosis 3 times in a row. Every daughter cell goes on to divide. How many cells are present after the 3rd round, starting from 1 cell?',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'Each round doubles the number of cells: 1, 2, 4, 8.',
    },
    {
      id: 'bce-mi-q5',
      type: 'drag-order',
      stem: 'Put the four stages of MITOSIS in the order in which they happen inside a dividing cell.',
      tier: 'core',
      items: ['Anaphase', 'Prophase', 'Telophase', 'Metaphase'],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'bce-mi-q6',
      type: 'multiple-choice',
      stem: 'In which stage of mitosis do the chromosomes line up in a single row across the middle of the cell, ready to be pulled apart?',
      tier: 'core',
      options: ['Prophase', 'Telophase', 'Metaphase', 'Anaphase'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'bce-mi-q7',
      type: 'spot-misconception',
      stem: 'Ravi says: "Mitosis makes daughter cells with HALF the chromosomes of the parent, so each new cell is a half copy."',
      tier: 'core',
      statements: [
        {
          text: 'Ravi is right. Mitosis halves the chromosome count each round.',
          isMisconception: true,
        },
        {
          text: 'Ravi is wrong. Mitosis makes daughter cells with the SAME chromosome count as the parent. Halving the count is the job of meiosis, which only makes sperm and egg cells.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-mi-mis-half-chromosomes',
    },
    // CONFIDENT (8)
    {
      id: 'bce-mi-q8',
      type: 'numeric-entry',
      stem: 'A pupil cuts a fingernail flat to the skin. A single nail-bed cell starts to divide by mitosis. After 5 rounds of mitosis, with every daughter cell going on to divide, how many cells are present, starting from 1?',
      tier: 'confident',
      correctAnswer: 32,
      xpValue: 15,
      hint: 'Doubling rule: 1, 2, 4, 8, 16, 32. Each round doubles the cell count.',
    },
    {
      id: 'bce-mi-q9',
      type: 'numeric-entry',
      stem: 'The full cell cycle in an onion root-tip cell takes 20 hours. Of those, 18 hours are spent in interphase. What PERCENTAGE of the cell cycle is spent in interphase? Give your answer to the nearest whole number.',
      tier: 'confident',
      correctAnswer: 90,
      xpValue: 15,
      hint: 'Percentage = (time in interphase / total time) x 100. So (18 / 20) x 100.',
    },
    {
      id: 'bce-mi-q10',
      type: 'multiple-choice',
      stem: 'In a Year 7 onion-root-tip practical, a pupil sees chromosomes clearly under the school microscope only in a FEW cells, even though she has looked at hundreds. Why?',
      tier: 'confident',
      options: [
        'The microscope is broken',
        'Onion cells do not have chromosomes',
        'Most cells are in INTERPHASE, where DNA is in long thin threads that are too fine to see; chromosomes only condense (thicken) during the short mitosis stages',
        'Chromosomes are invisible under any microscope',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bce-mi-mis-always-see-chromosomes',
    },
    {
      id: 'bce-mi-q11',
      type: 'multiple-choice',
      stem: 'During prophase the nuclear membrane breaks down. A pupil worries that "the nucleus is gone for good". What is the correct view of what happens later?',
      tier: 'confident',
      options: [
        'The nucleus stays broken down forever in the new cells',
        'A new nucleus forms only in one of the two daughter cells',
        'The nucleus does not break down at all in mitosis',
        'A NEW nuclear membrane forms around each set of separated chromosomes in telophase, so each daughter cell ends up with its own nucleus',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bce-mi-mis-nucleus-gone',
    },
    {
      id: 'bce-mi-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "An onion root-tip cell completes one cell cycle in 20 hours. Mitosis itself takes 1 hour. What percentage of the cycle is mitosis?"',
      tier: 'confident',
      steps: [
        'Write the percentage as a fraction: time in mitosis over total cycle time',
        'Substitute the numbers: (1 / 20) x 100',
        null,
        'Round to a whole number for the Year 7 answer: about 5%',
        'Interpret: mitosis is a short burst; most of the cycle is interphase',
      ],
      missingStepIndex: 2,
      correctStep:
        'Work out the value: 1 divided by 20 equals 0.05, and 0.05 x 100 equals 5%',
      xpValue: 20,
    },
    {
      id: 'bce-mi-q13',
      type: 'numeric-entry',
      stem: 'A bone-marrow stem cell in a healthy adult goes through one cell cycle every 24 hours, on average. Starting from 1 cell, and assuming every daughter cell keeps dividing on the same 24-hour cycle, how many cells are present after exactly 3 DAYS?',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
      hint: '3 days = 3 rounds at 24 hours each. Each round doubles the count: 1, 2, 4, 8.',
    },
    {
      id: 'bce-mi-q14',
      type: 'spot-misconception',
      stem: 'Sophie writes in her exercise book: "Mitosis and meiosis are basically the same process, just with different names."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. Both are forms of cell division, so the difference is just naming.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. Mitosis makes TWO identical daughter cells with the SAME chromosome count, used for growth and repair. Meiosis makes FOUR non-identical sex cells with HALF the chromosome count.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-mi-mis-mitosis-meiosis-same',
    },
    {
      id: 'bce-mi-q15',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil at a Bristol grammar school describes a chromosome as "a string of GENES made of protein". Which option corrects this description?',
      tier: 'confident',
      options: [
        'A chromosome is a long molecule of DNA, and a GENE is a section of that DNA. Genes are NOT what chromosomes are made of; chromosomes are made of DNA, and genes are sections of it',
        'The description is fine; chromosomes are strings of genes made of protein',
        'A chromosome is a single gene',
        'A chromosome is made of fat, not DNA',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'bce-mi-mis-chromosomes-made-of-genes',
    },
    // CHALLENGE (5)
    {
      id: 'bce-mi-q16',
      type: 'numeric-entry',
      stem: 'A pupil cuts a piece of apple skin during a school cookery lesson. A small group of 4 cells at the edge of the cut begin to divide by mitosis. After 6 rounds of mitosis, with every daughter cell going on to divide, how many cells form the new patch of healed skin (assuming none die)?',
      tier: 'challenge',
      correctAnswer: 256,
      xpValue: 25,
      hint: 'Use the doubling rule: cells after n rounds = start x 2^n. Here that is 4 x 2^6.',
    },
    {
      id: 'bce-mi-q17',
      type: 'multiple-choice',
      stem: 'A pupil watches a time-lapse video of an onion root-tip cell going from one cell into two. She sees the chromosomes line up across the middle, then get pulled apart to opposite ends in one motion. Which TWO stages has she just watched, in order?',
      tier: 'challenge',
      options: [
        'Prophase, then telophase',
        'Anaphase, then prophase',
        'Metaphase, then anaphase',
        'Telophase, then metaphase',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
    {
      id: 'bce-mi-q18',
      type: 'numeric-entry',
      stem: 'A textbook states: "In a typical human cell, the full cell cycle takes about 24 hours. Interphase takes 23 hours, and the remaining time is split equally between mitosis and cytokinesis." How many MINUTES does mitosis itself take in this cell? Give your answer to the nearest whole minute.',
      tier: 'challenge',
      correctAnswer: 30,
      xpValue: 25,
      hint: 'Time outside interphase = 24 - 23 = 1 hour = 60 minutes. Mitosis takes half of that.',
    },
    {
      id: 'bce-mi-q19',
      type: 'multiple-choice',
      stem: 'A Year 7 biologist reads an NHS leaflet that says: "Cancer happens when body cells divide when they should not." Using what she knows about the cell cycle, which BEST explains the link to mitosis?',
      tier: 'challenge',
      options: [
        'A healthy cell divides by mitosis whenever it grows large, but cancer cells divide less often',
        'Cancer cells use meiosis instead of mitosis, which is why the chromosome count drops',
        'Cancer is caused by cells refusing to divide at all',
        'A healthy cell only enters mitosis after passing a check that says the DNA is copied correctly and the cell is ready; cancer cells divide by mitosis even when this check fails, so the count of cells grows out of step with the body needs',
      ],
      correctIndex: 3,
      xpValue: 30,
      misconceptionId: 'bce-mi-mis-divide-when-big',
    },
    {
      id: 'bce-mi-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "A scientist starts with 5 cells in a culture dish. Each cell completes one mitosis round every 30 minutes. How many cells are in the dish after 2 hours?"',
      tier: 'challenge',
      steps: [
        '2 hours equals 4 lots of 30 minutes, so the cells go through 4 rounds of mitosis',
        'Each round doubles the cell count (one parent makes two daughters)',
        'The total after n rounds = start x 2^n',
        null,
        'So the dish holds 80 cells after 2 hours',
      ],
      missingStepIndex: 3,
      correctStep:
        'Substitute the numbers: 5 x 2^4 = 5 x 16 = 80',
      xpValue: 30,
    },
    {
      id: 'bce-mi-q21',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Because mitosis happens, the chromosome count in my skin cells doubles every time my graze heals. After a few healings I would have hundreds of chromosomes per cell." Which is the BEST correction?',
      tier: 'challenge',
      options: [
        'The pupil is right; chromosomes do double each healing',
        'The pupil is right, but only for the cells closest to the graze',
        'The pupil is wrong; mitosis copies the chromosomes FIRST (in interphase) and then SHARES the copies between two daughter cells, so each new cell still has 46, the same as the parent',
        'The pupil is wrong; chromosomes vanish after each round of mitosis',
      ],
      correctIndex: 2,
      xpValue: 30,
      misconceptionId: 'bce-mi-mis-half-chromosomes',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on cell division: pupils "described mitosis as producing smaller, half-sized daughter cells" and confused it with binary fission. Reinforced by Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2016) ch.4 on cells.
    {
      id: 'bce-mi-mis-half-cells',
      description:
        'Mitosis produces smaller "half-cells" or shrunken versions of the parent cell.',
      triggerAnswer: 'half-cells',
      correction:
        'Mitosis produces TWO whole daughter cells. Each starts smaller than the parent but then grows in interphase back to a full size before any future division.',
      reExplanation:
        'Picture one skin cell at the edge of a grazed knee. It grows in interphase, copies its DNA, splits the copies between two new cells in mitosis, and pinches in two during cytokinesis. The two daughters are smaller at first but each holds a full set of organelles and a full nucleus. They grow during their own interphase before they divide again. So each daughter is a complete cell, not a half-sized one.',
    },
    // Source: AQA GCSE Biology examiner report June 2022 (8461/1F) Q05 on mitosis: candidates "wrote that daughter cells have half the chromosomes of the parent", confusing mitosis with meiosis. Reinforced by Royal Society of Biology Bio-Bites Q4 on cell division (rsb.org.uk, 2024).
    {
      id: 'bce-mi-mis-half-chromosomes',
      description:
        'After mitosis the daughter cells have HALF the chromosomes of the parent cell.',
      triggerAnswer: 'half-chromosomes',
      correction:
        'In mitosis each daughter cell has the SAME chromosome count as the parent. Halving the count is the job of meiosis, which only happens in sex cells.',
      reExplanation:
        'A normal human body cell has 46 chromosomes. Before mitosis starts, every chromosome is copied in interphase, so the parent briefly holds 92 strands arranged as 46 doubled chromosomes. Mitosis pulls each doubled chromosome apart, and one half goes to each daughter cell. The result is 46 chromosomes in each new cell, the same as the parent. Mitosis is for growth and repair; the body needs each new cell to match the rest.',
    },
    // Source: Edexcel GCSE Biology examiner report June 2019 (1BI0/1F) Q07 on cell division: candidates "thought the nucleus is destroyed and never returns". Reinforced by CLEAPSS Science PS90 Microscopy and the cell cycle guidance, common pupil error box.
    {
      id: 'bce-mi-mis-nucleus-gone',
      description:
        'Once the nuclear membrane breaks down in mitosis, the cell has no nucleus ever again.',
      triggerAnswer: 'nucleus-gone',
      correction:
        'The nuclear membrane breaks down in prophase so chromosomes can move freely, and a NEW one forms around each set of chromosomes in telophase. Each daughter cell ends with its own nucleus.',
      reExplanation:
        'It helps to follow one chromosome through the four stages. In prophase the nuclear membrane around it dissolves and lets the chromosome move. In metaphase and anaphase it lines up and is pulled to one end of the cell. In telophase a fresh nuclear membrane forms around the new set, giving a full new nucleus. The breakdown is temporary, only there to let the chromosomes move during the active part of division.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on DNA, genes and chromosomes: pupils "described a chromosome as a thing made up of genes", reversing the relationship. Reinforced by AQA GCSE Biology examiner report June 2021 (8461/2F) Q03 on DNA structure.
    {
      id: 'bce-mi-mis-chromosomes-made-of-genes',
      description:
        'A chromosome is a string of small things called genes, so chromosomes are made of genes.',
      triggerAnswer: 'chromosomes-made-of-genes',
      correction:
        'A chromosome is one long DNA molecule. A gene is a SECTION of DNA along that chromosome. Genes are parts of chromosomes, not the building blocks chromosomes are made from.',
      reExplanation:
        'Think of a chromosome as a very long ribbon of DNA. Genes are short sections of that ribbon, each one a set of instructions for one feature. So genes do not build the chromosome; the chromosome IS the long DNA molecule, and genes are the bits you can mark along it. Knowing this matters for mitosis: when each chromosome is copied in interphase, every gene on it is copied too, so daughter cells get the same genes.',
    },
    // Source: OCR GCSE Biology examiner report June 2020 (J247/01) Q06 on cell division: candidates "described mitosis and meiosis as the same process with different names". Reinforced by Cambridge IGCSE Biology Coursebook (3rd ed.) misconception list ch.16.
    {
      id: 'bce-mi-mis-mitosis-meiosis-same',
      description:
        'Mitosis and meiosis are basically the same process, just labelled with different names in different topics.',
      triggerAnswer: 'mitosis-meiosis-same',
      correction:
        'They are different. Mitosis makes TWO identical daughter cells with the SAME chromosome count, used for growth and repair. Meiosis makes FOUR non-identical sex cells with HALF the chromosome count.',
      reExplanation:
        'Mitosis runs in body cells: skin, bone marrow, root-tip cells, fingernail bed. It keeps the chromosome count steady so each new cell can do the same job as the old one. Meiosis runs only in the cells that become sperm or eggs (ovaries and testes). It halves the chromosome count so that when a sperm and egg join, the new cell has the right count again. Same idea (cell division), very different outputs.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on microscope use in cell division practicals: pupils "expected chromosomes to be visible in every cell on the slide". Reinforced by CLEAPSS Science PS90 Microscopy and the cell cycle, sample slide guidance.
    {
      id: 'bce-mi-mis-always-see-chromosomes',
      description:
        'Chromosomes are visible under a school microscope in every cell, all the time.',
      triggerAnswer: 'always-see-chromosomes',
      correction:
        'Chromosomes are only thick enough to see while a cell is in mitosis. During interphase the DNA is in long thin threads that a school microscope cannot pick out.',
      reExplanation:
        'In an onion root-tip practical the pupil sees clear chromosomes in only a handful of cells, because most cells are in interphase. The chromosomes condense (wind up tight) in prophase, line up in metaphase, split in anaphase, and unwind again in telophase. So the visible-chromosome stage is short, and most cells on any slide look like a plain blob with a nucleus. Catching one in metaphase is the prize moment.',
    },
    // Source: AQA GCSE Biology examiner report June 2018 (8461/2F) Q04 on the cell cycle: candidates "wrote that a cell divides whenever it grows too large", ignoring the regulation step. Reinforced by Royal Society of Biology Bio-Bites Q5 on cell cycle regulation (rsb.org.uk, 2024).
    {
      id: 'bce-mi-mis-divide-when-big',
      description:
        'A cell divides by mitosis as soon as it gets too large.',
      triggerAnswer: 'divide-when-big',
      correction:
        'A cell only enters mitosis after passing a CHECK that confirms its DNA is copied correctly and the cell has the energy and signals to divide. Size alone is not enough.',
      reExplanation:
        'The cell cycle has built-in checkpoints. The cell asks: is the DNA copied without errors? Is the cell big enough and well supplied with energy? Is the body asking for new cells in this tissue? Only when the answer to each is yes does mitosis begin. This is why skin heals just enough to close a graze, then stops. The NHS describes cancer as what happens when this checking fails.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
