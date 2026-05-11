import type { SkillNode } from '@/types/content'

export const decimalsWordProblems: SkillNode = {
  id: 'maths-decimals-word-problems',
  title: 'Decimal Word Problems with Money and Measure',
  description:
    'Solve multi-step word problems that combine the four operations on decimals in UK contexts. Read the question, plan the steps, calculate, then check. Convert between metres and kilometres, grams and kilograms, millilitres and litres, and minutes as a decimal of an hour. Choose the right operation, line up decimal points, and round only at the end where the question calls for it.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'challenge',
  prerequisites: ['maths-decimals-arithmetic'],
  curriculum: {
    ks3Objective:
      'Solve problems involving the four operations applied to decimals; convert between standard units of measure (length, mass, volume/capacity, time) and money.',
    awardingBodies: {
      aqa: 'N2 Solve problems involving the four operations applied to decimals in real contexts (GCSE Mathematics 8300)',
      edexcel: 'N2 Solve multi-step decimal arithmetic problems including financial maths and measures (GCSE Mathematics 1MA1)',
      ocr: '2.02a Solve problems involving decimals, money and measures (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'dwp-scene-receipt',
      title: 'Reading a UK Supermarket Receipt',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the Sevenoaks supermarket receipt to see where the numbers live. The price of each item runs down one column. The subtotal sums the items, the discount subtracts a fixed amount, and the total is what the shopper actually pays. The change is the gap between the total and the £20 note handed over.',
      data: {
        viewBox: '0 0 100 100',
        hotspots: [
          {
            id: 'dwp-h-item1',
            x: 30,
            y: 18,
            label: 'Bread £1.20',
            description: 'First item. A single price, two decimal places.',
          },
          {
            id: 'dwp-h-item2',
            x: 30,
            y: 30,
            label: 'Milk 2 litres £1.85',
            description: 'Second item. Units shown on the line for the shopper.',
          },
          {
            id: 'dwp-h-item3',
            x: 30,
            y: 42,
            label: 'Apples 0.6 kg at £2.50 per kg = £1.50',
            description: 'A weighed item. Mass times price per kg gives the line cost.',
          },
          {
            id: 'dwp-h-subtotal',
            x: 70,
            y: 55,
            label: 'Subtotal £4.55',
            description: 'The three items added: 1.20 + 1.85 + 1.50 = 4.55.',
          },
          {
            id: 'dwp-h-discount',
            x: 70,
            y: 67,
            label: 'Voucher discount -£0.50',
            description: 'A flat discount, taken off the subtotal.',
          },
          {
            id: 'dwp-h-total',
            x: 70,
            y: 79,
            label: 'Total £4.05',
            description: 'What the shopper actually owes after the discount.',
          },
          {
            id: 'dwp-h-change',
            x: 70,
            y: 91,
            label: 'Change from £20 = £15.95',
            description: 'The note handed over minus the total: 20.00 - 4.05 = 15.95.',
          },
        ],
      },
    },
    {
      id: 'dwp-scene-method',
      title: 'Read, Plan, Calculate, Check',
      type: 'diagram',
      instructions:
        'Look at how a strong solver works through a word problem in four passes. First read the problem twice and underline the numbers and units. Second plan the steps in order: which operation comes first, what each step produces, and what the final answer asks for. Third calculate one step at a time, lining up decimal points and converting units where needed. Fourth check by working backwards or by estimating: if 0.6 kg of apples at £2.50 per kg should be about 60p times 2.50, the answer is near £1.50.',
      data: {
        steps: [
          {
            label: 'Read',
            note: 'Identify the question. Underline numbers and units. Note what is given and what is asked.',
          },
          {
            label: 'Plan',
            note: 'List the operations in order. Tag each step with the unit of its result.',
          },
          {
            label: 'Calculate',
            note: 'Work one step at a time. Line up the decimal points. Convert g to kg or ml to litres before adding.',
          },
          {
            label: 'Check',
            note: 'Estimate first, then verify. Round to one significant figure for a sanity check.',
          },
        ],
        example: 'A journey of 12.4 km, 8.7 km, and 15.2 km. Read: three legs in km, asked for the total. Plan: add the three lengths. Calculate: 12.4 + 8.7 + 15.2 = 36.3 km. Check: 12 + 9 + 15 = 36, close to 36.3.',
      },
    },
    {
      id: 'dwp-scene-time-decimal',
      title: 'Time as a Decimal of an Hour',
      type: 'diagram',
      instructions:
        'Read each row to see how minutes convert to a decimal of an hour. Half an hour is 30 minutes, which is 0.5 of an hour. A quarter of an hour is 15 minutes, which is 0.25 of an hour. To convert minutes to a decimal, divide by 60: 45 minutes is 45 / 60 = 0.75 hours, and 12 minutes is 12 / 60 = 0.2 hours. To go back the other way, multiply by 60: 1.5 hours is 1.5 x 60 = 90 minutes.',
      data: {
        rows: [
          { minutes: 15, decimalHours: 0.25 },
          { minutes: 30, decimalHours: 0.5 },
          { minutes: 45, decimalHours: 0.75 },
          { minutes: 12, decimalHours: 0.2 },
          { minutes: 6, decimalHours: 0.1 },
          { minutes: 90, decimalHours: 1.5 },
        ],
        rule: 'minutes / 60 = decimal hours. decimal hours x 60 = minutes.',
        warning: 'Do not write 1 hour 30 minutes as 1.30 hours. It is 1.5 hours, because 30 minutes is half an hour, not 30 hundredths of an hour.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'dwp-worked-1',
      title: 'Aisha buys three items at £3.49, £2.99 and £4.50, pays with £15. How much change does she get?',
      steps: [
        {
          explanation:
            'Read the problem. The items cost £3.49, £2.99 and £4.50. Aisha pays with £15. The question asks for the change.',
          maths: 'items: 3.49, 2.99, 4.50; paid: 15.00; find: change',
        },
        {
          explanation:
            'Plan the two steps. First add the three item prices to get the total. Second subtract the total from £15.',
          maths: 'step 1: total = 3.49 + 2.99 + 4.50; step 2: change = 15 - total',
        },
        {
          explanation:
            'Add the three items. Line up the decimal points and add column by column.',
          maths: '3.49 + 2.99 + 4.50 = 10.98',
        },
        {
          explanation:
            'Subtract the total from the £15 paid. Pad £15 to £15.00 so each column has a digit.',
          maths: '15.00 - 10.98 = 4.02',
        },
        {
          explanation:
            'Check by estimating. Round each item to the nearest pound: 3 + 3 + 5 = 11, change from 15 is about 4. The answer £4.02 sits next to that estimate.',
          maths: 'estimate: 15 - 11 = 4; actual: £4.02',
        },
        {
          explanation: 'So Aisha gets £4.02 in change.',
          maths: 'change = £4.02',
        },
      ],
    },
    {
      id: 'dwp-worked-2',
      title: 'A car covers 12.4 km, 8.7 km and 15.2 km in 1.5 hours total. Find the average speed in km per hour (missing step).',
      steps: [
        {
          explanation:
            'Read the problem. Three leg lengths in km and a total time of 1.5 hours. Asked for the average speed.',
          maths: 'legs: 12.4, 8.7, 15.2 km; time: 1.5 h; find: average speed',
        },
        {
          explanation:
            'Plan the two steps. First add the leg lengths to get the total distance. Second divide the total distance by the time to get the average speed.',
          maths: 'step 1: distance = 12.4 + 8.7 + 15.2; step 2: speed = distance / time',
        },
        {
          explanation:
            'Add the three legs. Pad any number that needs a column filled.',
          maths: '12.4 + 8.7 + 15.2 = 36.3 km',
        },
        {
          explanation:
            'Divide the total distance by the total time. 1.5 hours means 90 minutes, but for speed in km per hour keep the time as 1.5 hours.',
          maths: '36.3 / 1.5 = 24.2',
        },
        {
          explanation:
            'State the answer with the right unit.',
          maths: 'average speed = 24.2 km per hour',
        },
        {
          explanation:
            'Check by estimating. About 36 km over 1.5 hours is about 24 km per hour, matching the answer.',
          maths: 'estimate: 36 / 1.5 = 24; actual: 24.2 km per hour',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple change from a £20 note (single item)
    {
      id: 'dwp-q1',
      type: 'multiple-choice',
      stem: 'A pupil in Tunbridge Wells buys a sandwich for £3.65 from the school canteen and pays with a £20 note. How much change does the pupil get?',
      tier: 'core',
      options: ['£16.45', '£17.35', '£17.65', '£16.35'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dwp-mis-decimal-mismatch',
      hint: 'Pad £20 to £20.00 so each column has a digit. Then subtract column by column.',
    },
    // Core 2: total of three items (no change)
    {
      id: 'dwp-q2',
      type: 'numeric-entry',
      stem: 'A Manchester corner shop sells three items priced at £2.50, £1.85 and £0.40. What is the total in pounds?',
      tier: 'core',
      correctAnswer: 4.75,
      unit: 'pounds',
      xpValue: 10,
      hint: 'Pad each price to two decimal places: 2.50, 1.85, 0.40. Then add the hundredths, the tenths, then the pounds.',
    },
    // Core 3: simple unit conversion m to km
    {
      id: 'dwp-q3',
      type: 'multiple-choice',
      stem: 'A school sports field is 450 metres long. What is this length in kilometres?',
      tier: 'core',
      options: ['0.45 km', '4.5 km', '0.045 km', '45 km'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'dwp-mis-unit-conversion',
      hint: 'There are 1000 metres in 1 kilometre, so divide by 1000. 450 / 1000 = 0.45.',
    },
    // Core 4: kg to g conversion
    {
      id: 'dwp-q4',
      type: 'numeric-entry',
      stem: 'A bag of flour weighs 1.6 kilograms. How many grams is that?',
      tier: 'core',
      correctAnswer: 1600,
      unit: 'grams',
      xpValue: 10,
      misconceptionId: 'dwp-mis-unit-conversion',
      hint: 'There are 1000 grams in 1 kilogram, so multiply by 1000. 1.6 x 1000 = 1600.',
    },
    // Core 5: simple time to decimal
    {
      id: 'dwp-q5',
      type: 'multiple-choice',
      stem: 'A coach ride takes 1 hour and 30 minutes. How long is the ride in hours, written as a decimal?',
      tier: 'core',
      options: ['1.30 hours', '1.3 hours', '1.5 hours', '1.05 hours'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dwp-mis-time-decimal',
      hint: '30 minutes is half an hour. Half an hour as a decimal is 0.5, so 1 hour 30 minutes is 1.5 hours.',
    },
    // Core 6: choose the right operation (single step word problem)
    {
      id: 'dwp-q6',
      type: 'multiple-choice',
      stem: 'A water jug holds 2.4 litres. A glass holds 0.3 litres. How many full glasses can be poured from the jug?',
      tier: 'core',
      options: ['2.1', '0.72', '2.7', '8'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dwp-mis-wrong-operation',
      hint: 'Divide the jug by one glass: 2.4 / 0.3. Multiply both sides by 10 to clear the decimal: 24 / 3 = 8.',
    },
    // Core 7: spot-misconception on forgetting the change step
    {
      id: 'dwp-q7',
      type: 'spot-misconception',
      stem: 'A pupil buys two snacks for £1.40 and £2.10 from the canteen and hands over £5. Liam writes "the answer is £3.50".',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. £1.40 + £2.10 = £3.50, so the answer is £3.50.',
          isMisconception: true,
        },
        {
          text: 'In fact £3.50 is the total cost, not the change. The question asks for change. Change = £5.00 - £3.50 = £1.50. Liam stopped one step too early.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dwp-mis-forget-change',
    },
    // Confident 1: two-step shopping with mixed prices
    {
      id: 'dwp-q8',
      type: 'multiple-choice',
      stem: 'A Dover newsagent sells a magazine for £4.25 and a pen for £1.60. A shopper pays with a £10 note. How much change does the shopper get?',
      tier: 'confident',
      options: ['£4.15', '£4.25', '£5.85', '£3.85'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'dwp-mis-forget-change',
      hint: 'First add: 4.25 + 1.60 = 5.85. Then subtract from 10: 10.00 - 5.85 = 4.15.',
    },
    // Confident 2: per-kg pricing then change
    {
      id: 'dwp-q9',
      type: 'numeric-entry',
      stem: 'Apples cost £2.40 per kilogram at a Manchester market. A shopper buys 0.75 kilograms. How much does the shopper pay, in pounds?',
      tier: 'confident',
      correctAnswer: 1.8,
      unit: 'pounds',
      xpValue: 15,
      hint: '0.75 x 2.40. Think 75 x 24 = 1800. The factors have 2 + 2 = 4 decimal places, so the answer is 0.1800 = 1.80.',
    },
    // Confident 3: ordering totals (drag-order)
    {
      id: 'dwp-q10',
      type: 'drag-order',
      stem: 'Drag these shopping totals into order from smallest to largest amount of change from a £10 note: total £6.45, total £8.30, total £4.80, total £7.15.',
      tier: 'confident',
      items: ['Total £6.45', 'Total £8.30', 'Total £4.80', 'Total £7.15'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
      hint: 'Compute each change: 10 - 6.45 = 3.55; 10 - 8.30 = 1.70; 10 - 4.80 = 5.20; 10 - 7.15 = 2.85. Order from smallest change: 1.70, 2.85, 3.55, 5.20.',
    },
    // Confident 4: spot-misconception on decimal mismatch
    {
      id: 'dwp-q11',
      type: 'spot-misconception',
      stem: 'A pupil buys two items at the school canteen. The first costs £0.50 and the second costs £0.40. Maya writes "the total is £0.90 because 5 + 4 = 9".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. 0.5 + 0.40 must be 0.90 because she added the tenths.',
          isMisconception: false,
        },
        {
          text: 'Maya got the right answer by luck. The reasoning is wrong because she treated 0.5 and 0.40 as if 5 and 4 were in the same column. In fact 0.5 is 0.50, the 5 sits in tenths. 0.50 + 0.40 = 0.90, but only after the columns are lined up properly.',
          isMisconception: true,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dwp-mis-decimal-mismatch',
    },
    // Confident 5: missing-step worked example
    {
      id: 'dwp-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A shopper in Tunbridge Wells buys 0.6 kg of grapes at £3.50 per kilogram and a loaf of bread for £1.45. The shopper pays with a £10 note. Find the change.',
      tier: 'confident',
      steps: [
        'Find the cost of the grapes: 0.6 x 3.50 = £2.10.',
        'Add the bread to the grapes: 2.10 + 1.45 = £3.55.',
        null,
        'The change is £6.45.',
      ],
      missingStepIndex: 2,
      correctStep: 'Subtract the total from the £10 paid: 10.00 - 3.55 = 6.45.',
      xpValue: 20,
      hint: 'The missing step is the change step: how much is left from the £10 after the total cost?',
    },
    // Confident 6: bill splitting between people
    {
      id: 'dwp-q13',
      type: 'numeric-entry',
      stem: 'Four pupils in a Sevenoaks cafe share a bill of £18.60 equally. How much does each pupil pay, in pounds?',
      tier: 'confident',
      correctAnswer: 4.65,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Divide 18.60 by 4. 18 / 4 = 4 remainder 2. Carry to the tenths: 26 / 4 = 6 remainder 2. Carry to the hundredths: 20 / 4 = 5. The answer is 4.65.',
    },
    // Confident 7: volume in ml to litres
    {
      id: 'dwp-q14',
      type: 'multiple-choice',
      stem: 'A bottle holds 750 millilitres of juice. A second bottle holds 1.2 litres. How many litres of juice is there in total?',
      tier: 'confident',
      options: ['1.05 litres', '1.27 litres', '1.95 litres', '751.2 litres'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dwp-mis-unit-conversion',
      hint: 'Convert the first bottle to litres: 750 / 1000 = 0.75. Then add: 0.75 + 1.2 = 1.95.',
    },
    // Confident 8: rounding too early case
    {
      id: 'dwp-q15',
      type: 'multiple-choice',
      stem: 'A school orders 12 textbooks at £8.45 each. What is the total cost?',
      tier: 'confident',
      options: ['£101.40', '£96.00', '£102.00', '£108.00'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'dwp-mis-round-too-early',
      hint: 'Multiply 8.45 by 12 in full: 8.45 x 12 = 101.40. Rounding 8.45 to £8 first would lose 45p per book across 12 books, which is £5.40.',
    },
    // Challenge 1: Bond-style multi-step with change and per-kg
    {
      id: 'dwp-q16',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks supermarket, Aisha buys 0.4 kg of cheese at £6.50 per kilogram and a loaf of bread for £1.45. She pays with a £20 note. How much change does she get, in pounds?',
      tier: 'challenge',
      correctAnswer: 15.95,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Cheese cost: 0.4 x 6.50 = 2.60. Total: 2.60 + 1.45 = 4.05. Change: 20.00 - 4.05 = 15.95.',
    },
    // Challenge 2: Bond-style journey and average speed
    {
      id: 'dwp-q17',
      type: 'multiple-choice',
      stem: 'A driver covers three legs of a Lake District trip: 12.4 km, 8.7 km, and 15.2 km. The whole journey takes 1.5 hours. What is the average speed, in kilometres per hour?',
      tier: 'challenge',
      options: ['12.1 km/h', '24.2 km/h', '36.3 km/h', '54.45 km/h'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'First add the legs: 12.4 + 8.7 + 15.2 = 36.3 km. Then divide by the time: 36.3 / 1.5 = 24.2 km/h.',
    },
    // Challenge 3: time decimal in pay
    {
      id: 'dwp-q18',
      type: 'numeric-entry',
      stem: 'A Manchester babysitter is paid £8.40 per hour. On Saturday she works from 6:30 pm until 9:45 pm. How much is she paid in total, in pounds?',
      tier: 'challenge',
      correctAnswer: 27.3,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Time worked: 3 hours 15 minutes. 15 minutes is 0.25 hours, so 3.25 hours total. Pay: 3.25 x 8.40 = 27.30.',
    },
    // Challenge 4: free-text explain the right method (required at challenge)
    {
      id: 'dwp-q19',
      type: 'free-text',
      stem: 'A Dover shopper buys 1.4 kilograms of plums at £2.50 per kilogram and a bunch of bananas for £0.85. She pays with a £10 note. Explain in two or three sentences which steps to do in which order, and why, then state the change.',
      tier: 'challenge',
      sampleAnswer:
        'First multiply 1.4 by 2.50 to get the plum cost of £3.50, because the price is per kilogram and the shopper bought 1.4 kg. Then add the bananas: 3.50 + 0.85 = £4.35, the total bill. Finally subtract from the £10 paid: 10.00 - 4.35 = £5.65 change. The order matters because the total must be settled before the change can be found.',
      keywords: ['multiply', 'add', 'subtract', 'total', 'change', '5.65'],
      xpValue: 30,
      misconceptionId: 'dwp-mis-wrong-operation',
    },
    // Challenge 5: Bond-style three sentence with unstated steps, bill split
    {
      id: 'dwp-q20',
      type: 'numeric-entry',
      stem: 'A class trip to a Manchester museum costs £4.50 per pupil for the entry ticket and £1.20 per pupil for a guidebook. Twenty pupils go on the trip. The total cost is split equally between two parent groups. How much does each group pay, in pounds?',
      tier: 'challenge',
      correctAnswer: 57,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Cost per pupil: 4.50 + 1.20 = 5.70. Twenty pupils: 5.70 x 20 = 114. Split between two groups: 114 / 2 = 57.',
    },
    // Challenge 6: missing intermediate step decimal+conversion
    {
      id: 'dwp-q21',
      type: 'multiple-choice',
      stem: 'A Lake District walker carries 2 bottles of water of 500 ml each plus a flask of 0.75 litres. Her bag also holds a packed lunch of 0.4 kg. What is the total mass of water she carries, in kilograms? Assume 1 litre of water has a mass of 1 kg.',
      tier: 'challenge',
      options: ['1.25 kg', '1.75 kg', '2.15 kg', '0.75 kg'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'dwp-mis-unit-conversion',
      hint: 'Two 500 ml bottles is 1000 ml = 1.0 litre. Adding the flask: 1.0 + 0.75 = 1.75 litres. Since 1 litre of water is 1 kg, the mass is 1.75 kg. The lunch is not water, so ignore the 0.4 kg.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a money word problem where pupils gave the subtotal as the change, stopping one step short of the final subtraction.
    {
      id: 'dwp-mis-forget-change',
      description:
        'When the question asks for change, I give the total cost of the items instead, because that was the last number I worked out.',
      triggerAnswer: 'forget-change',
      correction:
        'Actually the change is what is left after paying. Subtract the total cost from the amount handed over.',
      reExplanation:
        'For two snacks at £1.40 and £2.10, the total is £3.50. If the shopper pays £5, the change is £5.00 - £3.50 = £1.50, not £3.50. Always read the final question word: "change", "left", or "saved" all signal a subtraction from the amount paid. Stopping at the subtotal answers a different question, namely the total cost.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a measure problem where pupils added a length in metres to one in centimetres without converting first.
    {
      id: 'dwp-mis-unit-conversion',
      description:
        'I add or subtract measures without converting to the same unit first, so 1.6 m + 40 cm becomes 41.6 or 2.0 by treating the numbers as if they shared a unit.',
      triggerAnswer: 'unit-conversion',
      correction:
        'In fact every length, mass or volume must be in the SAME unit before adding. Convert one side first using 1000 g = 1 kg, 100 cm = 1 m, or 1000 ml = 1 litre.',
      reExplanation:
        'For 1.6 m + 40 cm, convert 40 cm to metres: 40 / 100 = 0.4 m. Then add: 1.6 + 0.4 = 2.0 m. Or convert 1.6 m to centimetres: 1.6 x 100 = 160 cm, then 160 + 40 = 200 cm = 2.0 m. Both routes agree. Adding 1.6 and 40 directly mixes metres and centimetres and gives an answer with no meaning.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Decimals" page, "Common mistake" callout warning that 0.5 and 0.40 must be padded to the same number of decimal places before adding.
    {
      id: 'dwp-mis-decimal-mismatch',
      description:
        'I think 0.5 + 0.40 is 0.45, because I read 5 and 40 as if they were in the same column.',
      triggerAnswer: 'decimal-mismatch',
      correction:
        'Actually 0.5 is the same as 0.50. The 5 sits in the tenths column. Line up the decimal points before adding.',
      reExplanation:
        'Pad 0.5 to 0.50 so each column has a digit. Then 0.50 + 0.40 has 5 in the tenths and 4 in the tenths, plus 0 in the hundredths on both sides. The sum is 0.90. Reading 0.5 as if the 5 were in the hundredths column shifts its value tenfold and gives 0.45, a wrong answer. Trailing zeros after the decimal point keep the value unchanged but make the columns align.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a multi-step decimal problem where pupils rounded the per-unit cost too early and lost the correct total.
    {
      id: 'dwp-mis-round-too-early',
      description:
        'I round each value to the nearest pound before doing the working, because the numbers look easier that way.',
      triggerAnswer: 'round-too-early',
      correction:
        'In fact rounding too early loses the precision the calculation needs. Round only at the final answer, where the question asks for it.',
      reExplanation:
        'For 12 textbooks at £8.45 each, the full total is 12 x 8.45 = £101.40. Rounding £8.45 to £8 first gives 12 x 8 = £96, off by £5.40 across the order. Estimating with rounded values is fine for a sanity check, but the working itself should use the exact decimals. Round at the end, never during the steps.',
    },
    // Source: NCETM Secondary Magazine, Issue 122, article on persistent decimal misconceptions, citing pupil work in which the wrong operation was chosen after the question was read only once.
    {
      id: 'dwp-mis-wrong-operation',
      description:
        'I pick the wrong operation for the word problem, often subtracting where the question asks for a total, or dividing where it asks for a multiple.',
      triggerAnswer: 'wrong-operation',
      correction:
        'Actually the words signal the operation. "How many in total" needs addition. "How many fit in" needs division. "Change" needs subtraction.',
      reExplanation:
        'For "how many full glasses can be poured from 2.4 litres if each glass holds 0.3 litres", the cue is "how many fit", so divide: 2.4 / 0.3 = 8 glasses. Subtracting 0.3 from 2.4 only tells you how much is left after one glass. Read the problem twice and underline the cue word before picking the operation.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a time-as-decimal question where pupils wrote 1 hour 30 minutes as 1.30 hours instead of 1.5 hours.
    {
      id: 'dwp-mis-time-decimal',
      description:
        'I write 1 hour 30 minutes as 1.30 hours, treating the 30 minutes as 30 hundredths of an hour.',
      triggerAnswer: 'time-decimal',
      correction:
        'In fact an hour has 60 minutes, not 100. Convert minutes to a decimal of an hour by dividing by 60.',
      reExplanation:
        '30 minutes is 30 / 60 = 0.5 of an hour, so 1 hour 30 minutes is 1.5 hours, not 1.30 hours. The decimal place value comes from 60ths, not 100ths. Common conversions to memorise: 15 minutes = 0.25 hours, 30 minutes = 0.5 hours, 45 minutes = 0.75 hours, 6 minutes = 0.1 hours. To go back, multiply by 60: 1.5 x 60 = 90 minutes.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsWordProblemsZoneNodes = [decimalsWordProblems]
