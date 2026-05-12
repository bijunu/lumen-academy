import type { SkillNode } from '@/types/content'

export const factorsMultiplesWordProblems: SkillNode = {
  id: 'maths-factors-multiples-word-problems',
  title: 'HCF and LCM Word Problems',
  description:
    'Decide whether a real-world question calls for the highest common factor (HCF) or the lowest common multiple (LCM), then carry out the calculation. LCM answers "when do these repeating events next coincide?" (buses, bells, lapping athletes). HCF answers "what is the largest equal share or square tile that fits both numbers without anything left over?" (fruit baskets, paving slabs, party bags). The discriminating skill is choosing the right tool: if you need a value the inputs DIVIDE INTO, use LCM; if you need a value that DIVIDES INTO the inputs, use HCF.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-factors-multiples',
  zoneName: 'Factors and Multiples',
  tier: 'confident',
  prerequisites: ['maths-factors-multiples-hcf-lcm'],
  curriculum: {
    ks3Objective:
      'Use the concepts of HCF and LCM to solve problems (intervals, repeating events, tiling).',
    awardingBodies: {
      aqa: 'N4 Apply HCF and LCM to solve problems in context (GCSE Mathematics 8300)',
      edexcel: 'N4 Apply HCF and LCM to solve problems in context (GCSE Mathematics 1MA1)',
      ocr: '2.03a Apply HCF and LCM to word problems (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fwp-scene-buses-meet',
      title: 'Two Buses on Different Timetables',
      type: 'number-line',
      instructions:
        'Watch two buses leave the same stop together at 9:00 a.m. Route 12 leaves every 12 minutes; route 18 leaves every 18 minutes. Their leaving times are marked on the strip. The first time both numbers appear together is at 36 minutes past 9:00 (so 9:36 a.m.). That value is LCM(12, 18) = 36. The cue word is "next together", which always points to the LCM.',
      data: {
        min: 0,
        max: 60,
        majorTicks: [0, 12, 18, 24, 36, 48, 54, 60],
        route12: [0, 12, 24, 36, 48, 60],
        route18: [0, 18, 36, 54],
        coincidences: [0, 36],
        lcm: 36,
        rule: 'When two repeating events start together and you need the next coincidence, take the LCM of their intervals.',
      },
    },
    {
      id: 'fwp-scene-fruit-baskets',
      title: 'Sharing 60 Apples and 84 Pears into Baskets',
      type: 'simulation',
      instructions:
        'A teacher wants to make identical fruit baskets for a tea morning. There are 60 apples and 84 pears. Every basket must hold the same number of each fruit, with no fruit left over. The largest possible number of baskets is HCF(60, 84) = 12. Each basket then holds 60 / 12 = 5 apples and 84 / 12 = 7 pears. The cue words are "largest" and "no fruit left over", which always point to the HCF.',
      data: {
        apples: 60,
        pears: 84,
        factorsOfApples: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60],
        factorsOfPears: [1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84],
        commonFactors: [1, 2, 3, 4, 6, 12],
        hcf: 12,
        applesPerBasket: 5,
        pearsPerBasket: 7,
        rule: 'When you split two amounts into the largest possible equal groups with nothing left over, take the HCF of the amounts.',
      },
    },
    {
      id: 'fwp-scene-paving-slabs',
      title: 'Largest Square Slab for a Patio',
      type: 'labelled-diagram',
      instructions:
        'A garden patio measures 24 m by 36 m. The owner wants to cover it with identical square slabs, with no slab cut to fit. The largest square side that divides BOTH 24 and 36 exactly is HCF(24, 36) = 12 m. The patio then takes 24 / 12 = 2 slabs along one side and 36 / 12 = 3 slabs along the other, so 6 slabs in total. Smaller squares (1 m, 2 m, 3 m, 4 m, 6 m) all work, but 12 m is the largest and uses the fewest slabs.',
      data: {
        viewBox: '0 0 240 160',
        hotspots: [
          {
            id: 'fwp-h-width',
            x: 120,
            y: 10,
            label: 'Width: 24 m',
            description: 'The shorter side of the patio. Slab side must divide 24 exactly.',
          },
          {
            id: 'fwp-h-length',
            x: 220,
            y: 80,
            label: 'Length: 36 m',
            description: 'The longer side of the patio. Slab side must divide 36 exactly.',
          },
          {
            id: 'fwp-h-slab',
            x: 60,
            y: 80,
            label: 'Slab: 12 m square',
            description: 'HCF(24, 36) = 12. The largest square that fits both sides without cutting.',
          },
          {
            id: 'fwp-h-count',
            x: 120,
            y: 140,
            label: 'Layout: 2 by 3, total 6 slabs',
            description: '24 / 12 = 2 slabs across; 36 / 12 = 3 slabs down. Together 6 slabs cover the patio.',
          },
        ],
      },
    },
    {
      id: 'fwp-scene-discriminator',
      title: 'HCF or LCM? Reading the Question',
      type: 'simulation',
      instructions:
        'Spot the cue word that decides which calculation to use. "Next time the bells ring together" needs LCM, because the answer must be a value the intervals DIVIDE INTO. "Largest number of party bags with nothing left over" needs HCF, because the answer must DIVIDE INTO the inputs. The two arrows point in opposite directions: LCM points up to a multiple of the inputs; HCF points down to a divisor of the inputs.',
      data: {
        prompts: [
          {
            stem: 'Two flashing lights blink every 8 and 12 seconds. When do they next blink together?',
            cue: 'next together',
            tool: 'LCM',
            why: 'The answer must be a time that BOTH 8 and 12 divide into, so a common multiple. Use the smallest one.',
          },
          {
            stem: 'A teacher splits 30 pencils and 45 rubbers into identical packs with nothing left over. What is the largest number of packs?',
            cue: 'largest, nothing left over',
            tool: 'HCF',
            why: 'The answer must divide into BOTH 30 and 45, so a common factor. Use the largest one.',
          },
          {
            stem: 'Three runners lap a track in 4, 6 and 8 minutes. When do they next finish a lap together?',
            cue: 'next together',
            tool: 'LCM',
            why: 'A common multiple of 4, 6 and 8. Use the smallest one: LCM(4, 6, 8) = 24 minutes.',
          },
          {
            stem: 'Square tiles cover a floor 18 m by 30 m exactly with no cutting. What is the largest tile side?',
            cue: 'largest, exactly, no cutting',
            tool: 'HCF',
            why: 'A common factor of 18 and 30. Use the largest one: HCF(18, 30) = 6 m.',
          },
        ],
        rule: 'Cue words "next together / first time together / least common time" mean LCM. Cue words "largest equal group / biggest tile / nothing left over" mean HCF.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fwp-worked-1',
      title: 'School bells: when do they next ring together?',
      steps: [
        {
          explanation:
            'Read the question to spot the cue. "Next ring together" tells you to use the LCM of the bell intervals.',
          maths: 'cue: "next together" → LCM',
        },
        {
          explanation:
            'List multiples of the first interval, 15 minutes.',
          maths: 'multiples of 15: 15, 30, 45, 60, 75, 90',
        },
        {
          explanation:
            'List multiples of the second interval, 20 minutes.',
          maths: 'multiples of 20: 20, 40, 60, 80, 100',
        },
        {
          explanation:
            'The first value that appears in both lists is 60.',
          maths: 'LCM(15, 20) = 60 minutes',
        },
        {
          explanation:
            'Convert back to a time. Both bells ring at 9:00 a.m, then 60 minutes later, so 10:00 a.m.',
          maths: 'next together at 10:00 a.m',
        },
      ],
    },
    {
      id: 'fwp-worked-2',
      title: 'Largest square paving slab for a 36 m by 24 m patio',
      steps: [
        {
          explanation:
            'Read the question to spot the cue. "Largest square that fits with no cutting" tells you to use the HCF of the side lengths.',
          maths: 'cue: "largest, no cutting" → HCF',
        },
        {
          explanation:
            'List the factors of the first side, 36 m.',
          maths: 'factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36',
        },
        {
          explanation:
            'List the factors of the second side, 24 m.',
          maths: 'factors of 24: 1, 2, 3, 4, 6, 8, 12, 24',
        },
        {
          explanation:
            'Pick out factors that appear in both lists, then take the largest.',
          maths: 'common factors: 1, 2, 3, 4, 6, 12; largest = 12',
        },
        {
          explanation:
            'So HCF(36, 24) = 12 m. The largest square slab has a side of 12 m. Check: 36 / 12 = 3 and 24 / 12 = 2, both whole, so the patio takes a 3 by 2 grid of slabs (6 slabs in total).',
          maths: 'HCF(36, 24) = 12 m; layout 3 by 2',
        },
      ],
    },
  ],
  questions: [
    // Core 1: LCM bells (single application)
    {
      id: 'fwp-q1',
      type: 'numeric-entry',
      stem: 'Two school bells ring every 6 minutes and every 9 minutes. They both ring at 8:00 a.m. How many minutes pass before they next ring together?',
      tier: 'core',
      correctAnswer: 18,
      unit: 'minutes',
      xpValue: 10,
      misconceptionId: 'fwp-mis-count-not-time',
      hint: '"Next together" means LCM. Multiples of 6: 6, 12, 18. Multiples of 9: 9, 18. First match: 18 minutes. (Quote the LCM value, 18, not the count of multiples you listed.)',
    },
    // Core 2: HCF fruit baskets (single application)
    {
      id: 'fwp-q2',
      type: 'multiple-choice',
      stem: 'A teacher shares 24 apples and 36 pears equally between baskets, with no fruit left over. What is the largest number of baskets she can make?',
      tier: 'core',
      options: ['6', '12', '60', '4'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fwp-mis-add-or-take-smaller',
      hint: '"Largest, nothing left over" means HCF. HCF(24, 36) = 12 baskets. Each basket holds 2 apples and 3 pears. (Adding to get 60 counts the fruit, not the baskets.)',
    },
    // Core 3: identify which tool to use (HCF vs LCM)
    {
      id: 'fwp-q3',
      type: 'multiple-choice',
      stem: 'Two lighthouses flash every 10 seconds and every 15 seconds. They flash together at midnight. Which calculation finds when they next flash together?',
      tier: 'core',
      options: ['HCF(10, 15)', '10 + 15', 'LCM(10, 15)', '10 x 15'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fwp-mis-which-tool',
      hint: '"Next together" needs a value that 10 and 15 both divide into, so a common multiple. The smallest is the LCM.',
    },
    // Core 4: HCF tiling (single application)
    {
      id: 'fwp-q4',
      type: 'numeric-entry',
      stem: 'A rectangular floor is 12 m by 18 m. Square tiles cover it exactly with no cutting. In metres, what is the largest possible tile side length?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'metres',
      xpValue: 10,
      misconceptionId: 'fwp-mis-tile-area-not-side',
      hint: 'Largest square that divides both sides exactly = HCF(12, 18). Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. HCF = 6 m. (The area would be 36 square metres, but the question asks for the side.)',
    },
    // Core 5: LCM gym classes
    {
      id: 'fwp-q5',
      type: 'multiple-choice',
      stem: 'A gym runs a yoga class every 18 minutes and a spin class every 24 minutes, both starting together at 7:00 a.m. After how many minutes do they next start together?',
      tier: 'core',
      options: ['72', '6', '36', '432'],
      correctIndex: 0,
      xpValue: 10,
      hint: '"Next start together" means LCM. Multiples of 24: 24, 48, 72. Of these, 72 is divisible by 18 (72 / 18 = 4). So LCM = 72 minutes.',
    },
    // Core 6: HCF party bags
    {
      id: 'fwp-q6',
      type: 'numeric-entry',
      stem: 'A parent fills party bags with 20 stickers and 30 pencils. Every bag must contain the same number of each, with nothing left over. What is the largest number of bags she can make?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'bags',
      xpValue: 10,
      hint: '"Largest, nothing left over" means HCF. HCF(20, 30) = 10. Each bag holds 2 stickers and 3 pencils.',
    },
    // Core 7: spot-misconception (which tool to use)
    {
      id: 'fwp-q7',
      type: 'spot-misconception',
      stem: 'Liam reads a question: "Two trains leave a station every 8 minutes and every 12 minutes, both at 9:00 a.m. When do they next leave together?" He says "the answer is HCF(8, 12) = 4, so 4 minutes after 9:00 a.m".',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The HCF gives the time the trains next leave together.',
          isMisconception: true,
        },
        {
          text: 'In fact "next together" needs a value that BOTH 8 and 12 divide into, which is a common multiple. The smallest is LCM(8, 12) = 24, so the trains next leave together 24 minutes after 9:00 a.m. HCF answers a different question (largest equal share).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fwp-mis-which-tool',
    },
    // Confident 1: LCM three buses
    {
      id: 'fwp-q8',
      type: 'numeric-entry',
      stem: 'Three buses on routes 4, 6 and 8 leave a Sevenoaks bus station together at 10:00 a.m. They each then leave every 4, 6 and 8 minutes respectively. How many minutes pass before all three next leave together?',
      tier: 'confident',
      correctAnswer: 24,
      unit: 'minutes',
      xpValue: 15,
      hint: 'LCM(4, 6, 8). Multiples of 8: 8, 16, 24. 24 is divisible by 4 (yes) and by 6 (24 / 6 = 4). So LCM = 24 minutes.',
    },
    // Confident 2: HCF apples and pears, count per basket
    {
      id: 'fwp-q9',
      type: 'multiple-choice',
      stem: 'A market stall packs 60 apples and 84 pears into identical baskets with nothing left over, using as many baskets as possible. How many pears are in each basket?',
      tier: 'confident',
      options: ['5', '7', '12', '6'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'HCF(60, 84) = 12 baskets. Pears per basket = 84 / 12 = 7.',
    },
    // Confident 3: discriminator MCQ on cue words
    {
      id: 'fwp-q10',
      type: 'multiple-choice',
      stem: 'A pupil reads: "What is the largest size of identical groups you can split 45 raisins and 30 oats into, with nothing left?" Which is the right calculation?',
      tier: 'confident',
      options: ['LCM(45, 30) = 90', '45 + 30 = 75', 'HCF(45, 30) = 15', '45 / 30 = 1.5'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fwp-mis-which-tool',
      hint: '"Largest equal split, nothing left" means HCF. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Factors of 45: 1, 3, 5, 9, 15, 45. HCF = 15.',
    },
    // Confident 4: missing-step LCM lighthouse
    {
      id: 'fwp-q11',
      type: 'missing-step',
      stem: 'Aisha solves: two lighthouses flash every 12 seconds and every 20 seconds. They flash together at midnight. After how many seconds do they next flash together?',
      tier: 'confident',
      steps: [
        '"Next together" means LCM. Find LCM(12, 20).',
        'Multiples of 12: 12, 24, 36, 48, 60, 72.',
        'Multiples of 20: 20, 40, 60, 80.',
        null,
        'So LCM(12, 20) = 60. The lighthouses next flash together 60 seconds after midnight.',
      ],
      missingStepIndex: 3,
      correctStep: 'The first value that appears in both lists is 60.',
      xpValue: 20,
    },
    // Confident 5: spot-misconception (multiplication shortcut)
    {
      id: 'fwp-q12',
      type: 'spot-misconception',
      stem: 'Maya solves: "two buses leave every 6 minutes and every 8 minutes together at 9:00 a.m. When do they next leave together?" She writes "6 x 8 = 48, so 48 minutes later".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. Multiplying the intervals always gives the next coincidence.',
          isMisconception: true,
        },
        {
          text: 'In fact 48 is a common multiple of 6 and 8 but not the LOWEST one. LCM(6, 8) = 24, because 6 and 8 share a factor of 2. The buses next leave together 24 minutes after 9:00 a.m, not 48.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fwp-mis-multiply-for-lcm',
    },
    // Confident 6: drag-order pairs (largest equal share)
    {
      id: 'fwp-q13',
      type: 'drag-order',
      stem: 'Each option is a tea-morning question about packing two amounts into identical baskets with nothing left over. Drag them into order from FEWEST baskets to MOST baskets.',
      tier: 'confident',
      items: [
        '60 apples and 84 pears',
        '20 stickers and 30 pencils',
        '24 apples and 36 pears',
        '45 raisins and 30 oats',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Compute HCF for each: HCF(60,84)=12, HCF(20,30)=10, HCF(24,36)=12, HCF(45,30)=15. Order from fewest: 10, 12, 12, 15. Tie broken by question order in the list (20-30 then 60-84 then 24-36).',
    },
    // Confident 7: HCF biscuit tin count
    {
      id: 'fwp-q14',
      type: 'multiple-choice',
      stem: 'At a tea morning, 40 shortbread biscuits and 56 ginger biscuits are split into identical biscuit tins with nothing left over, using as many tins as possible. How many shortbread biscuits are in each tin?',
      tier: 'confident',
      options: ['8', '7', '4', '5'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'HCF(40, 56) = 8 tins. Shortbread per tin = 40 / 8 = 5.',
    },
    // Confident 8: drag-order LCM scheduling
    {
      id: 'fwp-q15',
      type: 'drag-order',
      stem: 'Each option is a "next together" question. Drag them into order from SOONEST coincidence to LATEST coincidence.',
      tier: 'confident',
      items: [
        'Bells every 6 and 9 minutes',
        'Buses every 8 and 12 minutes',
        'Lights every 10 and 15 seconds',
        'Trains every 12 and 20 minutes',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Compute LCM for each: LCM(6,9)=18, LCM(8,12)=24, LCM(10,15)=30, LCM(12,20)=60. Order: 18, 24, 30, 60.',
    },
    // Challenge 1: LCM bells with conversion to clock time (Bond stretch)
    {
      id: 'fwp-q16',
      type: 'numeric-entry',
      stem: 'A church bell rings every 18 minutes and a school bell rings every 30 minutes. They both ring at 9:00 a.m. Both bells next ring together at the same time later that morning. How many minutes past 9:00 a.m is that?',
      tier: 'challenge',
      correctAnswer: 90,
      unit: 'minutes',
      xpValue: 25,
      misconceptionId: 'fwp-mis-elapsed-vs-clock-time',
      hint: 'LCM(18, 30). Multiples of 30: 30, 60, 90. 90 / 18 = 5 (whole), so 90 is the LCM. That puts the next chime at 10:30 a.m, which is 90 minutes after 9:00 a.m. The question asks for elapsed minutes, so quote 90.',
    },
    // Challenge 2: HCF with remainder twist
    {
      id: 'fwp-q17',
      type: 'numeric-entry',
      stem: 'A pupil packs 62 sweets and 86 chocolates into identical party bags. After packing as many bags as possible with the same of each, exactly 2 sweets and 2 chocolates are left over. What is the largest number of bags she can make?',
      tier: 'challenge',
      correctAnswer: 12,
      unit: 'bags',
      xpValue: 25,
      misconceptionId: 'fwp-mis-remainder-twist',
      hint: 'Remove the 2 left-over sweets and 2 left-over chocolates first: 62 - 2 = 60 and 86 - 2 = 84. Then HCF(60, 84) = 12 bags. (HCF(62, 86) = 2 ignores the leftovers and gives the wrong answer.)',
    },
    // Challenge 3: three-way LCM (lapping athletes, Bond stretch)
    {
      id: 'fwp-q18',
      type: 'numeric-entry',
      stem: 'Three pupils run round a school track. Aisha laps in 6 minutes, Liam in 9 minutes and Maya in 12 minutes. They all start together. How many minutes pass before all three next cross the start line at the same time?',
      tier: 'challenge',
      correctAnswer: 36,
      unit: 'minutes',
      xpValue: 25,
      hint: 'LCM(6, 9, 12). Multiples of 12: 12, 24, 36. 36 is divisible by 6 (yes) and by 9 (36 / 9 = 4). So LCM = 36 minutes.',
    },
    // Challenge 4: HCF rectangular field tiling, then count slabs
    {
      id: 'fwp-q19',
      type: 'multiple-choice',
      stem: 'A school playground 30 m by 45 m is paved with the largest possible identical square slabs that cover it exactly. How many slabs are used in total?',
      tier: 'challenge',
      options: ['15', '12', '6', '90'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Slab side = HCF(30, 45) = 15 m. Layout: 30 / 15 = 2 by 45 / 15 = 3, so 2 x 3 = 6 slabs in total.',
    },
    // Challenge 5: LCM offset start (Bond stretch with intermediate step)
    {
      id: 'fwp-q20',
      type: 'multiple-choice',
      stem: 'Two flashing lights are switched on together at 8:00 p.m. The first flashes every 14 seconds, the second every 21 seconds. After how many seconds do they next flash together at the same instant?',
      tier: 'challenge',
      options: ['294', '7', '63', '42'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'LCM(14, 21). Multiples of 21: 21, 42. 42 / 14 = 3 (whole), so LCM = 42 seconds.',
    },
    // Challenge 6: discriminator MCQ at challenge tier
    {
      id: 'fwp-q21',
      type: 'multiple-choice',
      stem: 'A teacher needs to split 84 pencils and 126 rubbers into identical packs with nothing left over. She wants the largest possible number of packs. Which calculation gives the answer?',
      tier: 'challenge',
      options: ['HCF(84, 126) = 42', 'LCM(84, 126) = 252', '84 x 126 = 10584', '126 - 84 = 42'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'fwp-mis-which-tool',
      hint: '"Largest, nothing left over" means HCF. HCF(84, 126) = 42 packs. Each pack holds 84 / 42 = 2 pencils and 126 / 42 = 3 rubbers.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a contextual HCF/LCM question where pupils chose the wrong operation, returning the HCF when "next time together" called for the LCM.
    {
      id: 'fwp-mis-which-tool',
      description:
        'I cannot tell whether a word problem needs HCF or LCM, so I pick the wrong one. I might use HCF for "when do they next ring together" or LCM for "largest equal group with nothing left over".',
      triggerAnswer: 'wrong-tool',
      correction:
        'Actually the cue word decides. "Next together / first time together" means LCM. "Largest equal group / biggest tile / nothing left over" means HCF.',
      reExplanation:
        'Ask which direction the answer points. If the answer must be a value the inputs DIVIDE INTO (like 36 minutes for buses every 12 and 18), it is a multiple, so use LCM. If the answer must DIVIDE INTO the inputs (like 12 baskets from 24 apples and 36 pears), it is a factor, so use HCF. Two phrases, two opposite tools: "next together" goes up to LCM; "largest equal share" goes down to HCF.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "HCF and LCM word problems" page, "Common mistake" callout about pupils multiplying the two intervals to get the next coincidence instead of taking the LCM.
    {
      id: 'fwp-mis-multiply-for-lcm',
      description:
        'I find the next coincidence by multiplying the two intervals. So for buses every 6 and 8 minutes I say 6 x 8 = 48 minutes.',
      triggerAnswer: 'multiply-for-lcm',
      correction:
        'In fact multiplying only works when the two intervals share no common factor (coprime). When they share factors, the LCM is smaller than the product.',
      reExplanation:
        'Buses every 6 and 8 minutes share a factor of 2, so LCM(6, 8) = 24, not 48. The product 48 is a common multiple but it is the second one, not the first. Multiplying does work for coprime pairs like 5 and 7, where LCM(5, 7) = 35. Always list the multiples (or factor each number) to be sure you have the LOWEST common multiple.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on an HCF context question where pupils gave the SUM (or sometimes the smaller input) as the answer rather than the HCF.
    {
      id: 'fwp-mis-add-or-take-smaller',
      description:
        'For a "largest equal group" question, I add the two amounts (24 + 36 = 60) or take the smaller of the two as the answer.',
      triggerAnswer: 'add-or-take-smaller',
      correction:
        'Actually adding gives the total, not how it splits. The smaller input is only the answer when it divides the larger exactly.',
      reExplanation:
        'For 24 apples and 36 pears packed into baskets with nothing left over, the largest number of baskets is HCF(24, 36) = 12. Adding gives 60, which counts the fruit, not the baskets. Taking the smaller (24) would mean each basket gets 1 apple and 36 / 24 = 1.5 pears, which is not whole, so 24 cannot be the answer. List shared factors and pick the largest.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a tiling word problem where pupils gave the AREA of the tile rather than the SIDE LENGTH (squaring the HCF).
    {
      id: 'fwp-mis-tile-area-not-side',
      description:
        'For "largest square slab that fits a 36 m by 24 m patio", I give the slab area (144 square metres) instead of the side length (12 m).',
      triggerAnswer: 'tile-area-not-side',
      correction:
        'In fact the question asks for the SIDE of the slab, not its area. The side is HCF of the patio dimensions; the area is then side x side.',
      reExplanation:
        'HCF(36, 24) = 12. The largest square slab has a side of 12 m. Its area is 12 x 12 = 144 square metres, but the question asks for the side. Reread the stem: "largest square side", "largest tile size in metres", or "biggest square length" all want the side. If the question asked "what area does each slab cover", you would then square the side.',
    },
    // Source: NCETM Secondary Magazine, Issue 137, article on HCF/LCM word problems noting that pupils sometimes give the count of multiples (or add together) instead of the LCM itself, treating "how many minutes" as "how many bells".
    {
      id: 'fwp-mis-count-not-time',
      description:
        'For "how many minutes pass before the bells next ring together", I count the number of rings, or the number of multiples I had to list, instead of the LCM value itself.',
      triggerAnswer: 'count-not-time',
      correction:
        'Actually the answer is the LCM value (a number of minutes), not the number of items in your list of multiples.',
      reExplanation:
        'For bells every 6 and 9 minutes, the multiples are 6, 12, 18 and 9, 18. The LCM is 18 (the value), so 18 minutes pass. It is wrong to answer 3 (the count of multiples of 6 you wrote) or 5 (the total items in both lists). The unit in the question (minutes) tells you the answer is a time, so quote the LCM value with that unit.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Number Operations" by Hart, on pupils giving the LCM of two numbers and forgetting that the question asked for an offset (e.g. the time of day, not the elapsed minutes).
    {
      id: 'fwp-mis-elapsed-vs-clock-time',
      description:
        'I find the LCM correctly (e.g. 60 minutes for buses every 15 and 20 minutes from 9:00 a.m) but I quote the clock time (10:00) when the question asks for elapsed minutes (60), or the other way round.',
      triggerAnswer: 'elapsed-vs-clock-time',
      correction:
        'In fact reread the question to see whether it wants elapsed time (minutes / seconds since the start) or clock time (the actual time of day).',
      reExplanation:
        'For buses every 15 and 20 minutes from 9:00 a.m, LCM(15, 20) = 60 minutes. If the question asks "how many minutes pass" the answer is 60. If it asks "at what time do they next leave together" the answer is 10:00 a.m. The maths is the same; the framing of the answer changes with the question. Always check the units the stem asks for.',
    },
    // Authored, no external source: classroom-observed slip where pupils, given a remainder version of an HCF problem ("62 sweets and 86 chocolates leave 2 sweets and 2 chocolates left over"), take HCF of 62 and 86 directly, forgetting to subtract the remainders first.
    {
      id: 'fwp-mis-remainder-twist',
      description:
        'When a "largest equal share" problem says "with X left over of each", I take the HCF of the original totals and ignore the leftovers.',
      triggerAnswer: 'remainder-twist',
      correction:
        'Actually subtract the leftover amount from each total first, then take the HCF of what remains (the part that actually got packed).',
      reExplanation:
        'For 62 sweets and 86 chocolates with 2 of each left over, you packed 60 sweets and 84 chocolates into bags. So HCF(60, 84) = 12 bags is the answer, not HCF(62, 86) = 2. The leftovers tell you what was NOT packed, so they must be removed from each total before you compute the HCF. Always pack first, then divide.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const factorsMultiplesWordProblemsZoneNodes = [factorsMultiplesWordProblems]
