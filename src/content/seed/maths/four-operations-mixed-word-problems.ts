import type { SkillNode } from '@/types/content'

export const fourOperationsMixedWordProblems: SkillNode = {
  id: 'maths-four-operations-mixed-word-problems',
  title: 'Multi-step Word Problems with Mixed Operations',
  description:
    'Solve multi-step word problems by reading the story, identifying what is known and what is asked, choosing the right operations in the right order, and computing with BIDMAS. Track units through every step, round only at the end, and check the answer against the question.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'confident',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use the four operations applied to integers and decimals in problem-solving contexts.',
    awardingBodies: {
      aqa: 'N2 Solve multi-step problems requiring the four operations on integers and decimals (GCSE Mathematics 8300)',
      edexcel: 'N2 Apply the four operations across integers and decimals to multi-step real-world problems (GCSE Mathematics 1MA1)',
      ocr: '2.02a Solve multi-step problems involving the four operations on integers and decimals (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fmw-scene-plan-the-operations',
      title: 'Planning the Operations from a Story',
      type: 'diagram',
      instructions:
        'Read the worked plan below. A strong solver works in four passes. First, read the story twice and underline what is known and what is asked. Second, list the operations in order, tagging the unit of each result. Third, compute one step at a time. Fourth, check the final answer against the question. The example here is a Sevenoaks bakery selling biscuits.',
      data: {
        problem:
          'A bakery in Sevenoaks bakes 144 biscuits and packs them into boxes of 12. Each box sells for GBP 6. Ingredients cost GBP 5. What is the profit?',
        steps: [
          {
            label: 'Read',
            note: 'Known: 144 biscuits, 12 per box, GBP 6 per box, GBP 5 ingredients. Asked: profit in GBP.',
          },
          {
            label: 'Plan',
            note: 'Operation 1: 144 ÷ 12 to find boxes. Operation 2: boxes × 6 to find revenue. Operation 3: revenue − 5 to find profit.',
          },
          {
            label: 'Calculate',
            note: '144 ÷ 12 = 12 boxes. 12 × 6 = GBP 72 revenue. 72 − 5 = GBP 67 profit.',
          },
          {
            label: 'Check',
            note: 'Estimate: about 12 boxes at about GBP 6 is around GBP 72, take off GBP 5 leaves GBP 67. The exact answer matches.',
          },
        ],
        notes:
          'The plan stage is the difference between a strong solver and a guesser. Numbers without a plan often lead to "just multiply everything" or skipping the subtraction at the end.',
      },
    },
    {
      id: 'fmw-scene-two-step-walkthrough',
      title: 'A Two-step School Trip Problem',
      type: 'diagram',
      instructions:
        'Read the worked solution for a school trip. A class of 28 pupils each pays GBP 4.50 toward a bus. The bus costs GBP 85 and entrance is GBP 3.20 each. The plan separates total income from total cost, then takes one from the other.',
      data: {
        problem:
          'A class of 28 pupils each pays GBP 4.50 toward a Year 7 trip to Dover Castle. The coach costs GBP 85 and entrance is GBP 3.20 per pupil. Does the trip break even?',
        steps: [
          {
            label: 'Step 1: total income',
            note: '28 × 4.50 = GBP 126.00.',
          },
          {
            label: 'Step 2: total cost',
            note: 'Coach plus entrance for 28: 85 + 28 × 3.20. By BIDMAS, 28 × 3.20 = 89.60 first, then 85 + 89.60 = GBP 174.60.',
          },
          {
            label: 'Step 3: compare',
            note: 'Income GBP 126.00 against cost GBP 174.60. Cost is GBP 48.60 higher, so the trip does not break even.',
          },
          {
            label: 'Check',
            note: 'Estimate: 28 at GBP 4.50 is near GBP 126; 85 plus 28 at GBP 3.20 is near 85 plus 90, around GBP 175. The trip is short by about GBP 49. Matches.',
          },
        ],
        notes:
          'Step 2 has hidden BIDMAS. The multiplication "28 × 3.20" must happen before the addition with 85, even though it appears second in the sentence.',
      },
    },
    {
      id: 'fmw-scene-bidmas-in-context',
      title: 'BIDMAS in Mixed Contexts',
      type: 'diagram',
      instructions:
        'Read the four expressions below. Each one shows where BIDMAS hides inside a word problem. The brackets and the multiplication-before-addition rule decide which numbers pair up first. Mis-ordering the operations is one of the most common ways to lose a mark on a multi-step problem.',
      data: {
        examples: [
          {
            story: 'Three packs of 4 pencils plus 2 spare pencils.',
            expression: '3 × 4 + 2',
            order: 'Multiplication before addition: 12 + 2 = 14 pencils.',
            wrongOrder: 'Left to right gives 3 × 4 = 12, then 12 + 2 = 14. Same answer here, but only because the multiplication came first by accident.',
          },
          {
            story: 'Two pupils each pay GBP 5 plus a GBP 3 booking fee shared between them.',
            expression: '2 × 5 + 3',
            order: 'BIDMAS: 2 × 5 = 10, then 10 + 3 = GBP 13 total.',
            wrongOrder: 'Adding first gives 5 + 3 = 8, then 2 × 8 = 16, which is wrong because the GBP 3 fee is shared, not paid twice.',
          },
          {
            story: 'A GBP 60 voucher split between four pupils, each then spending GBP 2 of their own.',
            expression: '60 ÷ 4 + 2',
            order: 'Division before addition: 60 ÷ 4 = 15, then 15 + 2 = GBP 17 each.',
            wrongOrder: 'Adding first gives 4 + 2 = 6, then 60 ÷ 6 = 10, which mixes up the structure of the story.',
          },
          {
            story: 'A bus fare for 5 pupils with a group discount of GBP 3 off the total.',
            expression: '(5 × 4) − 3',
            order: 'Brackets first: 5 × 4 = 20, then 20 − 3 = GBP 17.',
            wrongOrder: 'Subtracting first gives 4 − 3 = 1, then 5 × 1 = 5, which is far too cheap.',
          },
        ],
        notes:
          'BIDMAS is not just a rule for set expressions. It is the rule for translating a real-world story into a single line of arithmetic without losing the structure.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fmw-worked-1',
      title: 'School trip break-even, fully revealed',
      steps: [
        {
          explanation:
            'A class of 28 pupils each pays GBP 4.50 toward a trip. The coach costs GBP 85 and entrance is GBP 3.20 per pupil. We want the profit or loss.',
          maths: 'income vs cost',
        },
        {
          explanation: 'Plan: income is 28 × 4.50; cost is 85 + 28 × 3.20; profit is income minus cost.',
          maths: 'profit = (28 × 4.50) − (85 + 28 × 3.20)',
        },
        {
          explanation: 'Compute the income first. 28 × 4.50 = 126.',
          maths: '28 × 4.50 = 126',
        },
        {
          explanation: 'Compute the entrance cost. By BIDMAS, the multiplication 28 × 3.20 happens before the addition with 85.',
          maths: '28 × 3.20 = 89.60',
        },
        {
          explanation: 'Add the coach to the entrance to get the total cost.',
          maths: '85 + 89.60 = 174.60',
        },
        {
          explanation: 'Take the cost from the income to find the profit.',
          maths: '126 − 174.60 = −48.60',
        },
        {
          explanation: 'The result is negative, so the trip makes a loss of GBP 48.60. The trip does not break even.',
          maths: 'loss of GBP 48.60',
        },
      ],
    },
    {
      id: 'fmw-worked-2',
      title: 'Bakery profit, with one step hidden for the learner to fill',
      steps: [
        {
          explanation:
            'A bakery in Sevenoaks bakes 144 biscuits and packs them into boxes of 12. Each box sells for GBP 6. Ingredients cost GBP 5. We want the profit.',
          maths: 'profit = revenue − cost',
        },
        {
          explanation: 'Plan: first find the number of boxes, then the revenue, then take off the ingredients.',
          maths: 'boxes → revenue → profit',
        },
        {
          explanation: 'Find the number of boxes. 144 biscuits at 12 per box gives 12 boxes.',
          maths: '144 ÷ 12 = 12',
        },
        {
          explanation: 'Find the revenue. 12 boxes at GBP 6 each.',
          maths: '12 × 6 = 72',
        },
        {
          explanation: 'Find the profit. Take the GBP 5 ingredients off the GBP 72 revenue.',
          maths: '72 − 5 = 67',
        },
        {
          explanation: 'So the bakery makes GBP 67 profit. Estimate check: about 12 boxes at GBP 6 is GBP 72, less GBP 5 ingredients, leaves GBP 67. Matches.',
          maths: 'profit = GBP 67',
        },
      ],
    },
    {
      id: 'fmw-worked-3',
      title: 'Train travel cost across two legs, with a discount',
      steps: [
        {
          explanation:
            'Aisha travels from Tunbridge Wells to Manchester, then back. Each leg costs GBP 48.50. A railcard takes GBP 16 off the total. We want her final cost.',
          maths: 'final cost',
        },
        {
          explanation: 'Plan: total fare is 2 × 48.50; final cost is total − 16.',
          maths: 'final = 2 × 48.50 − 16',
        },
        {
          explanation: 'By BIDMAS, the multiplication happens before the subtraction.',
          maths: '2 × 48.50 = 97.00',
        },
        {
          explanation: 'Take the railcard discount off the total.',
          maths: '97.00 − 16 = 81.00',
        },
        {
          explanation: 'So Aisha pays GBP 81.00 in total. Check: a return at near GBP 50 each way is near GBP 100, less GBP 16, around GBP 84. Close enough to confirm GBP 81.00.',
          maths: 'final cost = GBP 81.00',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fmw-q1',
      type: 'multiple-choice',
      stem: 'A pack of 6 yoghurts costs GBP 3 and a single yoghurt costs GBP 0.80. How much does it cost to buy 2 packs and 3 single yoghurts?',
      tier: 'core',
      options: ['GBP 8.40', 'GBP 9.40', 'GBP 7.20', 'GBP 6.80'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Plan first. Two packs is 2 × 3, three singles is 3 × 0.80, then add the two totals.',
      misconceptionId: 'fmw-mis-grab-numbers',
    },
    {
      id: 'fmw-q2',
      type: 'multiple-choice',
      stem: 'A class of 30 pupils raises GBP 4 each for charity, then donates a further GBP 25 from the form fund. How much do they donate in total?',
      tier: 'core',
      options: ['GBP 120', 'GBP 175', 'GBP 145', 'GBP 165'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Total raised is 30 × 4. Add the GBP 25 fund donation at the end.',
      misconceptionId: 'fmw-mis-just-multiply',
    },
    {
      id: 'fmw-q3',
      type: 'numeric-entry',
      stem: 'A box of 24 chocolates is shared equally between 6 pupils. How many chocolates does each pupil get? Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'One operation. Sharing equally is division.',
    },
    {
      id: 'fmw-q4',
      type: 'numeric-entry',
      stem: 'Compute 5 + 3 × 2. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 11,
      xpValue: 10,
      hint: 'BIDMAS. The multiplication happens before the addition.',
      misconceptionId: 'fmw-mis-left-to-right-ignoring-bidmas',
    },
    {
      id: 'fmw-q5',
      type: 'multiple-choice',
      stem: 'A taxi from Dover to Folkestone costs GBP 12 plus GBP 2 per km. For a 7 km journey, what does the taxi cost in total?',
      tier: 'core',
      options: ['GBP 14', 'GBP 84', 'GBP 21', 'GBP 26'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Plan: distance cost is 7 × 2; add the GBP 12 fixed fee.',
      misconceptionId: 'fmw-mis-grab-numbers',
    },
    {
      id: 'fmw-q6',
      type: 'numeric-entry',
      stem: 'Compute (8 + 4) ÷ 3. Enter your answer as an integer.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'BIDMAS. Brackets first, then the division.',
      misconceptionId: 'fmw-mis-left-to-right-ignoring-bidmas',
    },
    {
      id: 'fmw-q7',
      type: 'multiple-choice',
      stem: 'A baker uses 250 g of flour per loaf. She bakes 4 loaves and uses an extra 100 g for dusting. How much flour does she use in total, in grams?',
      tier: 'core',
      options: ['1400', '1000', '1100', '350'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Plan: flour for the loaves is 4 × 250; add the 100 g dusting.',
      misconceptionId: 'fmw-mis-grab-numbers',
    },
    {
      id: 'fmw-q8',
      type: 'multiple-choice',
      stem: 'A class of 25 pupils each contributes GBP 3 toward a Manchester museum trip. The bus costs GBP 60. What money is left after paying the bus?',
      tier: 'confident',
      options: ['GBP 75', 'GBP 15', 'GBP 135', 'GBP 12'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Income is 25 × 3. Take off the GBP 60 bus.',
      misconceptionId: 'fmw-mis-forget-subtract-cost',
    },
    {
      id: 'fmw-q9',
      type: 'numeric-entry',
      stem: 'A market stall in Tunbridge Wells sells 18 jars of jam at GBP 4 each. The stallholder pays GBP 12 for the pitch and GBP 30 for ingredients. What is the profit, in GBP?',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: 'Plan: revenue = 18 × 4. Total costs = 12 + 30. Profit = revenue minus costs.',
      misconceptionId: 'fmw-mis-forget-subtract-cost',
    },
    {
      id: 'fmw-q10',
      type: 'multiple-choice',
      stem: 'Compute 3 × (7 − 2) + 8 using BIDMAS.',
      tier: 'core',
      options: ['23', '21', '17', '53'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'BIDMAS. Brackets first, then the multiplication, then the addition.',
      misconceptionId: 'fmw-mis-left-to-right-ignoring-bidmas',
    },
    {
      id: 'fmw-q11',
      type: 'multiple-choice',
      stem: 'A school orders 4 boxes of 24 pencils plus 15 spare pencils. How many pencils arrive in total?',
      tier: 'confident',
      options: ['156', '63', '96', '111'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Plan: pencils in boxes is 4 × 24. Add the 15 spares at the end.',
      misconceptionId: 'fmw-mis-just-multiply',
    },
    {
      id: 'fmw-q12',
      type: 'multiple-choice',
      stem: 'A canteen serves 120 lunches at GBP 2.50 each. Ingredients cost GBP 180 and staff cost GBP 75. What is the canteen profit on these lunches?',
      tier: 'confident',
      options: ['GBP 300', 'GBP 45', 'GBP 225', 'GBP 480'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Revenue is 120 × 2.50. Total cost is 180 + 75. Profit is revenue minus cost.',
      misconceptionId: 'fmw-mis-forget-subtract-cost',
    },
    {
      id: 'fmw-q13',
      type: 'numeric-entry',
      stem: 'A farmer in the Lake District has 96 lambs. She loads 8 onto each truck. After 7 trucks have left, how many lambs are still waiting?',
      tier: 'confident',
      correctAnswer: 40,
      xpValue: 15,
      hint: 'Plan: lambs already loaded is 7 × 8. Subtract from 96.',
    },
    {
      id: 'fmw-q14',
      type: 'spot-misconception',
      stem: 'Liam works out 4 + 2 × 5 by reading left to right and gets 30. Pick the true statement.',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Reading left to right, 4 + 2 = 6, then 6 × 5 = 30.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. By BIDMAS, the multiplication happens before the addition. 2 × 5 = 10, then 4 + 10 = 14.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fmw-mis-left-to-right-ignoring-bidmas',
    },
    {
      id: 'fmw-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A car park charges GBP 2 per hour plus a flat GBP 1 entry fee. Aisha parks for 4 hours. How much does she pay?',
      tier: 'confident',
      steps: [
        'Plan: total cost is the hourly cost plus the flat fee. So total = 4 × 2 + 1.',
        'By BIDMAS, the multiplication happens before the addition.',
        null,
        'Add the flat fee of GBP 1.',
        'So Aisha pays GBP 9 in total.',
      ],
      missingStepIndex: 2,
      correctStep: 'Compute 4 × 2 first. This gives GBP 8 for the four hours of parking.',
      xpValue: 20,
    },
    {
      id: 'fmw-q16',
      type: 'drag-order',
      stem: 'Drag these steps into the right order to solve: a class of 20 pupils each pays GBP 5 toward a London trip; the bus costs GBP 60 and entrance is GBP 4 per pupil. Find the profit or loss.',
      tier: 'confident',
      items: [
        'Read the question and underline what is known and what is asked.',
        'Compute total income: 20 × 5 = GBP 100.',
        'Compute total cost: 60 + 20 × 4 = GBP 140.',
        'Take the cost from the income: 100 − 140 = −40, a loss of GBP 40.',
        'Check by estimating: about GBP 100 in, about GBP 140 out, around GBP 40 short.',
      ],
      correctOrder: [0, 1, 2, 3, 4],
      xpValue: 15,
      hint: 'Read first, then plan, then calculate income before cost, then compare, then check.',
    },
    {
      id: 'fmw-q17',
      type: 'multiple-choice',
      stem: 'A coach trip from Tunbridge Wells to Brighton runs 90 km each way. Fuel costs GBP 0.20 per km. Tolls cost GBP 6 for the round trip. What is the total fuel and toll cost?',
      tier: 'challenge',
      options: ['GBP 24', 'GBP 42', 'GBP 30', 'GBP 18'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Plan: round trip distance is 2 × 90. Fuel cost is distance × 0.20. Add the GBP 6 tolls.',
      misconceptionId: 'fmw-mis-misread-question',
    },
    {
      id: 'fmw-q18',
      type: 'numeric-entry',
      stem: 'A school sells 350 raffle tickets at 50p each. Prizes cost GBP 65 and printing costs GBP 12. What is the profit, in GBP?',
      tier: 'challenge',
      correctAnswer: 98,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Convert 50p to GBP 0.50 first. Revenue is 350 × 0.50. Take off prizes and printing at the end.',
      misconceptionId: 'fmw-mis-wrong-final-unit',
    },
    {
      id: 'fmw-q19',
      type: 'numeric-entry',
      stem: 'A baker mixes 750 g of flour, 250 g of sugar and 500 g of butter for one batch of biscuits. She bakes 6 batches. What is the total mass of ingredients, in kilograms?',
      tier: 'challenge',
      correctAnswer: 9,
      xpValue: 25,
      unit: 'kg',
      hint: 'Mass per batch in grams is 750 + 250 + 500. Multiply by 6 for the total in grams. Convert to kg at the end by dividing by 1000.',
      misconceptionId: 'fmw-mis-wrong-final-unit',
    },
    {
      id: 'fmw-q20',
      type: 'spot-misconception',
      stem: 'A pupil computes the average price per book when 3 books cost GBP 9.99 in total. He rounds 9.99 to 10 first, then divides by 3 to get GBP 3.33. Pick the true statement.',
      tier: 'challenge',
      statements: [
        {
          text: 'He is right to round first. The answer GBP 3.33 is the correct average price per book.',
          isMisconception: true,
        },
        {
          text: 'He is wrong. He should compute 9.99 ÷ 3 = 3.33 to two decimal places, keeping the precision until the final step.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fmw-mis-round-mid-calculation',
    },
    {
      id: 'fmw-q21',
      type: 'multiple-choice',
      stem: 'A football club in Manchester sells 250 match tickets at GBP 12 each and 80 hospitality tickets at GBP 45 each. Stewarding costs GBP 1200 and pitch hire is GBP 800. How much does the club have left after paying these costs?',
      tier: 'challenge',
      options: ['GBP 6600', 'GBP 4400', 'GBP 4600', 'GBP 6800'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Plan: revenue = 250 × 12 + 80 × 45. Total cost = 1200 + 800. Take cost from revenue.',
      misconceptionId: 'fmw-mis-forget-subtract-cost',
    },
  ],
  misconceptions: [
    // Source: Verschaffel, L., Greer, B. and De Corte, E. (2000), "Making Sense of Word Problems", Swets and Zeitlinger, on the "key word" and "grab the numbers" strategies that ignore problem structure. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Word Problems chapter, "Common mistake" callout on planning before computing.
    {
      id: 'fmw-mis-just-multiply',
      description:
        'Believing that the way to solve any multi-step word problem is to multiply all the numbers in the story together, without checking what each operation represents.',
      triggerAnswer: 'just-multiply',
      correction:
        'In fact each operation must match what the story is doing. Some numbers are added, some multiplied, some subtracted. Plan before calculating.',
      reExplanation:
        'For 30 pupils raising GBP 4 each plus a GBP 25 fund, multiplying everything gives 30 × 4 × 25 = GBP 3000, which is far too much. The correct plan is 30 × 4 for the pupil money, then add the GBP 25 fund: GBP 145. The plus sign in the story signals an addition, not another factor.',
    },
    // Source: Nesher, P. and Teubal, E. (1975), "Verbal cues as an interfering factor in verbal problem solving", Educational Studies in Mathematics 6(1), 41-51, on pupils picking numbers without parsing the relationships. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on multi-step word problems.
    {
      id: 'fmw-mis-grab-numbers',
      description:
        'Reading a word problem by grabbing the numbers in the order they appear and applying one operation, without identifying which numbers belong to which step.',
      triggerAnswer: 'grab-numbers',
      correction:
        'In fact each number plays a role. Read the story twice and tag each number with what it counts before choosing an operation.',
      reExplanation:
        'For two packs of 6 yoghurts at GBP 3 plus three single yoghurts at GBP 0.80, grabbing the numbers gives 2 + 6 + 3 + 3 + 0.80 or similar guesses. Tagging first: pack cost GBP 3, single cost GBP 0.80. Total = 2 × 3 + 3 × 0.80 = 6 + 2.40 = GBP 8.40.',
    },
    // Source: Vlassis, J. (2002), "The balance model: Hindrance or support for the solving of linear equations with one unknown", Educational Studies in Mathematics 49(3), 341-359, on the persistence of left-to-right evaluation. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), BIDMAS chapter, "Common mistake" callout on multiplication before addition.
    {
      id: 'fmw-mis-left-to-right-ignoring-bidmas',
      description:
        'Believing that arithmetic should be done left to right exactly as written, so 5 + 3 × 2 is read as (5 + 3) × 2 = 16 instead of 5 + (3 × 2) = 11.',
      triggerAnswer: 'left-to-right-ignoring-bidmas',
      correction:
        'In fact BIDMAS sets a fixed order: brackets, indices, division and multiplication, then addition and subtraction. Left to right only applies inside the same level.',
      reExplanation:
        '5 + 3 × 2 has a multiplication and an addition. By BIDMAS, the multiplication happens first: 3 × 2 = 6, then 5 + 6 = 11. Reading left to right gives 16, which is the wrong answer. Brackets force a different order, so (5 + 3) × 2 really is 16, but only because the brackets are written.',
    },
    // Source: Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items where pupils computed total revenue but did not subtract the running cost. Reinforced by Bond 11+ Maths Assessment Papers, multi-step money problems, on the "report revenue as profit" pattern.
    {
      id: 'fmw-mis-forget-subtract-cost',
      description:
        'Computing the total revenue or income in a money problem and reporting that as the profit, without subtracting the costs.',
      triggerAnswer: 'forget-subtract-cost',
      correction:
        'In fact profit is revenue minus cost. Always check whether the question asks for income, cost, or profit before reporting an answer.',
      reExplanation:
        'For a market stall selling 18 jars at GBP 4 each, with GBP 12 pitch and GBP 30 ingredients, revenue is 18 × 4 = GBP 72. Costs are 12 + 30 = GBP 42. Profit is 72 − 42 = GBP 30. Reporting GBP 72 confuses revenue with profit and inflates the answer.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items requiring a unit conversion at the end (pence to pounds, grams to kilograms, minutes to hours). Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Money chapter, "Common mistake" callout on mixing pence and pounds.
    {
      id: 'fmw-mis-wrong-final-unit',
      description:
        'Computing the right number but reporting it in the wrong unit, for example giving an answer in pence when the question asked for pounds, or grams when it asked for kilograms.',
      triggerAnswer: 'wrong-final-unit',
      correction:
        'In fact the unit is part of the answer. Read the question again at the end and convert if needed.',
      reExplanation:
        'For 350 raffle tickets at 50p, working in pence gives 350 × 50 = 17500p. The question asks for the profit in GBP, so convert: 17500p = GBP 175. Then take off prizes and printing: 175 − 65 − 12 = GBP 98. Stopping at 17500 or quoting GBP 17500 swaps pence for pounds.',
    },
    // Source: AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where pupils rounded intermediate values and lost accuracy. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Decimals chapter, "Common mistake" callout on rounding too early.
    {
      id: 'fmw-mis-round-mid-calculation',
      description:
        'Rounding numbers in the middle of a multi-step calculation, then carrying the rounded values through the rest of the working.',
      triggerAnswer: 'round-mid-calculation',
      correction:
        'In fact rounding mid-way loses precision. Keep the full value through the calculation and round only at the very end if the question calls for it.',
      reExplanation:
        'For 9.99 ÷ 3, dividing first gives 3.33 to two decimal places. Rounding 9.99 up to 10 first gives 10 ÷ 3 = 3.33 too, but the exact value 3.33 here is a coincidence: for trickier numbers, mid-rounding shifts the answer by several pence or more.',
    },
    // Source: Verschaffel, L., Greer, B. and De Corte, E. (2000), "Making Sense of Word Problems", Swets and Zeitlinger, on pupils misreading "how much each" as "how much in total" and vice versa. Reinforced by Bond 11+ Maths Assessment Papers, "Read the question carefully" callout on totals versus per-unit answers.
    {
      id: 'fmw-mis-misread-question',
      description:
        'Misreading what the question asks for, for example computing the cost per pupil when the question asks for the total cost, or vice versa.',
      triggerAnswer: 'misread-question',
      correction:
        'In fact the last sentence of the question is the one that decides. Read it twice before reporting an answer.',
      reExplanation:
        'For a 90 km coach trip with fuel at GBP 0.20 per km and GBP 6 tolls, computing only the one-way fuel cost gives 90 × 0.20 = GBP 18. The question asks for the round trip total, so the distance is 2 × 90 = 180 km, fuel is 180 × 0.20 = GBP 36, plus GBP 6 tolls is GBP 42.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsMixedWordProblemsZoneNodes = [
  fourOperationsMixedWordProblems,
]
