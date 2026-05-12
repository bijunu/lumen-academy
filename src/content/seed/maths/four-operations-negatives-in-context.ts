import type { SkillNode } from '@/types/content'

export const fourOperationsNegativesInContext: SkillNode = {
  id: 'maths-four-operations-negatives-in-context',
  title: 'Negative Numbers in Real Contexts',
  description:
    'Apply the four operations to positive and negative integers in real situations: temperature change overnight in UK gardens, bank balances that dip into overdraft, depths below sea level versus heights above it, and time differences across UK and overseas time zones. Build a habit of choosing a sign convention up front, naming the starting value, and tracking each change as a signed move on a number line.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-four-operations',
  zoneName: 'Four Operations',
  tier: 'challenge',
  prerequisites: ['maths-four-operations-multiply-divide-negatives'],
  curriculum: {
    ks3Objective:
      'Use the four operations applied to positive and negative integers in real contexts (temperature, sea level, money, time zones).',
    awardingBodies: {
      aqa: 'N2 Apply the four operations to directed numbers in real contexts (GCSE Mathematics 8300)',
      edexcel: 'N2 Solve problems involving directed numbers in real contexts (GCSE Mathematics 1MA1)',
      ocr: '1.02a Apply the four operations to directed numbers in real-world contexts (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fnc-scene-temperature-overnight',
      title: 'Overnight Temperatures in Sheffield',
      type: 'simulation',
      instructions:
        'Read each overnight reading from a Sheffield back garden. Midnight begins at -5 degrees Celsius. By 3am the air has cooled a further 3 degrees, taking the reading to -8. By dawn the temperature has risen 4 degrees to -4, and by 9am the sun has lifted it 7 more degrees to +3. The difference between the coldest and warmest reading is 3 minus negative 8, which gives 11 degrees.',
      data: {
        contextLabel: 'Overnight to morning in a Sheffield back garden',
        unit: 'degrees Celsius',
        range: [-15, 15],
        step: 0.5,
        readings: [
          { time: 'midnight', temperature: -5, note: 'frost forming on the lawn' },
          { time: '3am', temperature: -8, note: 'coldest moment of the night' },
          { time: 'dawn', temperature: -4, note: 'first light, frost still present' },
          { time: '9am', temperature: 3, note: 'sunlight has lifted the air' },
        ],
        notes:
          'A change of "rises by 4" adds 4. A change of "falls by 3" subtracts 3. The difference between two readings is the warmer reading minus the colder reading, which is always positive.',
      },
    },
    {
      id: 'fnc-scene-bank-balance-overdraft',
      title: 'Maya Tracks Her Bank Balance',
      type: 'diagram',
      instructions:
        'Read the four steps that take Maya from a healthy balance into overdraft and back out again. Positive values are credit; negative values are overdraft. Maya starts on +£45. A £80 withdrawal takes her to -£35, which is overdraft. Wages of £100 lift her to +£65. A direct debit of £20 leaves her on +£45 again.',
      data: {
        positiveColour: '#22C55E',
        negativeColour: '#EF4444',
        examples: [
          {
            sum: 'start: +£45',
            description: 'opening balance, in credit',
            sign: 'positive',
            result: 45,
          },
          {
            sum: '+£45 - £80 = -£35',
            description: 'withdrawal of £80 takes the account into overdraft',
            sign: 'negative',
            result: -35,
          },
          {
            sum: '-£35 + £100 = +£65',
            description: 'wages of £100 lift the balance back into credit',
            sign: 'positive',
            result: 65,
          },
          {
            sum: '+£65 - £20 = +£45',
            description: 'direct debit of £20 leaves the balance at £45 again',
            sign: 'positive',
            result: 45,
          },
        ],
        notes:
          'A credit (money in) adds. A debit (money out) subtracts. A negative balance means the account is overdrawn by that amount.',
      },
    },
    {
      id: 'fnc-scene-altitude-versus-depth',
      title: 'Mountains Above, Submarines Below',
      type: 'number-line',
      instructions:
        'Read the vertical number line. Sea level sits at zero. Snowdon stands at +1085 metres. The Mariana Trench reaches roughly -10984 metres. A submarine at -250 metres rises 80 metres to -170 metres. The vertical distance from a 1085 metre summit to a -430 metre lakebed is 1085 minus negative 430, which equals 1515 metres.',
      data: {
        range: [-500, 1200],
        step: 50,
        startMark: 0,
        labelledTicks: [-500, -250, 0, 250, 500, 1000],
        examples: [
          {
            calculation: '-250 + 80 (submarine rises 80 metres)',
            from: -250,
            direction: 'right',
            steps: 80,
            to: -170,
          },
          {
            calculation: '1085 - (-430) = 1515 (Snowdon summit to Dead Sea level)',
            from: -430,
            direction: 'right',
            steps: 1515,
            to: 1085,
          },
          {
            calculation: '0 - 250 (diver descends 250 metres from sea level)',
            from: 0,
            direction: 'left',
            steps: 250,
            to: -250,
          },
        ],
        notes:
          'Above sea level is positive. Below sea level is negative. The vertical distance between two points is the upper height minus the lower height, which always gives a positive number.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fnc-worked-1',
      title: 'Temperature change with a drop that crosses zero',
      steps: [
        {
          explanation:
            'A garden thermometer reads 5 degrees Celsius at sunset. Overnight the temperature falls by 8 degrees. We want the new reading.',
          maths: 'start = 5, change = -8',
        },
        {
          explanation:
            '"Falls by 8" is a change of -8 degrees. Add the change to the starting value.',
          maths: '5 + (-8)',
        },
        {
          explanation:
            'Adding a negative is the same as subtracting a positive.',
          maths: '5 + (-8) = 5 - 8',
        },
        {
          explanation:
            'Counting back from 5 lands on -3, because we cross zero on the way down.',
          maths: '5 - 8 = -3',
        },
        {
          explanation: 'So the new reading is -3 degrees Celsius.',
          maths: 'final = -3 °C',
        },
      ],
    },
    {
      id: 'fnc-worked-2',
      title: 'Difference between two temperatures',
      steps: [
        {
          explanation:
            'At noon, London reads 12 degrees Celsius and Edinburgh reads -4 degrees Celsius. We want the difference between the two readings.',
          maths: 'London = 12, Edinburgh = -4',
        },
        {
          explanation:
            'The difference is the warmer reading minus the colder reading.',
          maths: 'difference = 12 - (-4)',
        },
        {
          explanation:
            'Subtracting a negative is the same as adding a positive, so the two minus signs cancel.',
          maths: '12 - (-4) = 12 + 4',
        },
        {
          explanation: 'Add to find the result.',
          maths: '12 + 4 = 16',
        },
        {
          explanation:
            'So London is 16 degrees Celsius warmer than Edinburgh.',
          maths: 'difference = 16 °C',
        },
      ],
    },
    {
      id: 'fnc-worked-3',
      title: 'Bank balance, overdraft, and a wage payment',
      steps: [
        {
          explanation:
            'Aisha\'s account opens the week at -£28, which means it is overdrawn by £28. She is paid £75 from a Saturday job, then pays £12 for a bus pass. We want her end-of-day balance.',
          maths: 'start = -28, in: +75, out: -12',
        },
        {
          explanation:
            'Wages are money in, so add 75 to the balance.',
          maths: '-28 + 75',
        },
        {
          explanation:
            'Adding 75 to -28 lifts the balance out of overdraft.',
          maths: '-28 + 75 = 47',
        },
        {
          explanation:
            'The bus pass is money out, so subtract 12 from the new balance.',
          maths: '47 - 12 = 35',
        },
        {
          explanation:
            'So Aisha ends the day with a balance of +£35, which is back in credit.',
          maths: 'final = +£35',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fnc-q1',
      type: 'multiple-choice',
      stem: 'A garden thermometer reads -3 degrees Celsius at dawn. By midday the temperature has risen 8 degrees. What does the thermometer now read, in degrees Celsius?',
      tier: 'core',
      options: ['5', '-11', '11', '-5'],
      correctIndex: 0,
      xpValue: 10,
      hint: '"Risen 8 degrees" is a change of +8. Add it to the starting value of -3.',
      misconceptionId: 'fnc-mis-temp-drop-always-negative',
    },
    {
      id: 'fnc-q2',
      type: 'multiple-choice',
      stem: 'At sunset a garden in York reads -5 degrees Celsius. Overnight the temperature falls by 4 degrees. What is the new reading, in degrees Celsius?',
      tier: 'core',
      options: ['1', '-9', '9', '-1'],
      correctIndex: 1,
      xpValue: 10,
      hint: '"Falls by 4" is a change of -4. Add it to the starting value of -5.',
      misconceptionId: 'fnc-mis-temp-drop-always-negative',
    },
    {
      id: 'fnc-q3',
      type: 'numeric-entry',
      stem: 'A submarine sits at -250 metres relative to sea level. It rises 80 metres. What is its new depth, in metres relative to sea level?',
      tier: 'core',
      correctAnswer: -170,
      xpValue: 10,
      unit: 'metres',
      hint: 'Rising adds. Start at -250 and add 80.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q4',
      type: 'numeric-entry',
      stem: 'Maya\'s bank balance is +£45. She withdraws £80 from the cash machine. What is her new balance, in pounds?',
      tier: 'core',
      correctAnswer: -35,
      xpValue: 10,
      unit: 'GBP',
      hint: 'A withdrawal subtracts. Start at +45 and subtract 80. The result will be negative.',
      misconceptionId: 'fnc-mis-balance-cannot-be-negative',
    },
    {
      id: 'fnc-q5',
      type: 'multiple-choice',
      stem: 'At noon London reads 12 degrees Celsius and Edinburgh reads -4 degrees Celsius. By how many degrees Celsius is London warmer than Edinburgh?',
      tier: 'core',
      options: ['8', '-16', '16', '-8'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The difference is the warmer reading minus the colder reading: 12 - (-4).',
      misconceptionId: 'fnc-mis-difference-just-subtract-magnitudes',
    },
    {
      id: 'fnc-q6',
      type: 'multiple-choice',
      stem: 'A diver enters the water at sea level and descends to -18 metres. From there she descends a further 7 metres. What is her depth, in metres relative to sea level?',
      tier: 'core',
      options: ['-11', '11', '25', '-25'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Descending subtracts. Start at -18 and subtract 7. The result is below the starting depth.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q7',
      type: 'multiple-choice',
      stem: 'Pick the true statement about negative balances and overdrafts.',
      tier: 'core',
      options: [
        'A bank balance can never be negative; it must round up to zero.',
        'A negative balance means the account is in credit by that amount.',
        'A negative balance means the account is overdrawn by that amount.',
        'A withdrawal from a positive balance always keeps the balance positive.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fnc-mis-balance-cannot-be-negative',
    },
    {
      id: 'fnc-q8',
      type: 'multiple-choice',
      stem: 'A weather station in the Cairngorms reads -12 degrees Celsius at 4am. By midday the reading has risen 9 degrees. What is the midday reading, in degrees Celsius?',
      tier: 'confident',
      options: ['21', '3', '-3', '-21'],
      correctIndex: 2,
      xpValue: 15,
      hint: '"Risen 9" is a change of +9. Start at -12 and add 9. The result is still below zero.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q9',
      type: 'numeric-entry',
      stem: 'Aisha\'s bank balance is -£24. She is paid £60 in wages, then pays £15 for a tram ticket. What is her balance at the end of the day, in pounds?',
      tier: 'confident',
      correctAnswer: 21,
      xpValue: 15,
      unit: 'GBP',
      hint: 'Wages add. The tram ticket subtracts. Work the steps in order: -24 + 60, then take away 15.',
    },
    {
      id: 'fnc-q10',
      type: 'numeric-entry',
      stem: 'The peak of Snowdon stands at +1085 metres relative to sea level. The shore of the Dead Sea sits at -430 metres. What is the vertical distance between the two, in metres?',
      tier: 'confident',
      correctAnswer: 1515,
      xpValue: 15,
      unit: 'metres',
      hint: 'Vertical distance is upper minus lower: 1085 - (-430). Subtracting a negative is the same as adding.',
      misconceptionId: 'fnc-mis-minus-minus-stays-minus',
    },
    {
      id: 'fnc-q11',
      type: 'multiple-choice',
      stem: 'When it is 12 noon in London (UTC), it is 7am in New York (UTC -5). When London is 6pm, what time is it in New York?',
      tier: 'confident',
      options: ['11pm', '11am', '1am', '1pm'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'New York is 5 hours behind London. Subtract 5 from London time.',
      misconceptionId: 'fnc-mis-time-zone-offset-direction',
    },
    {
      id: 'fnc-q12',
      type: 'multiple-choice',
      stem: 'A bank balance starts the week at -£18. Three direct debits of £6 each are paid out. Which calculation gives the new balance, in pounds?',
      tier: 'confident',
      options: [
        '-18 + (3 × 6) = 0',
        '-18 - (3 × 6) = -36',
        '-18 + 3 - 6 = -21',
        '-18 - 3 - 6 = -27',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Each direct debit takes money out. Three of them take 3 × 6 = £18 out. Subtract 18 from -18.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q13',
      type: 'numeric-entry',
      stem: 'A submarine off the Cornish coast sits at -180 metres. It descends 95 metres, then rises 220 metres for fresh air. What is its final depth, in metres relative to sea level?',
      tier: 'confident',
      correctAnswer: -55,
      xpValue: 15,
      unit: 'metres',
      hint: 'Descending subtracts; rising adds. Work it in order: -180, then -95, then +220.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q14',
      type: 'spot-misconception',
      stem: 'Tom says: "An overdrawn account of -£20 plus a wage payment of £15 must give a positive balance, because adding wages always lifts you out of overdraft."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Wages always clear the overdraft, no matter how small the payment is.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. -20 + 15 = -5, so the balance is still in overdraft by £5. Wages of less than the overdraft do not clear it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fnc-mis-balance-cannot-be-negative',
    },
    {
      id: 'fnc-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A garden in Bristol reads 4 degrees Celsius at sunset. Overnight the temperature falls by 11 degrees. Find the new reading.',
      tier: 'confident',
      steps: [
        'Name the starting value: 4 degrees Celsius.',
        '"Falls by 11" is a change of -11 degrees.',
        null,
        'Counting back from 4: 3, 2, 1, 0, then -1, -2, -3, -4, -5, -6, -7. Land on -7.',
        'So the new reading is -7 degrees Celsius.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Add the change to the starting value: 4 + (-11), which is the same as 4 - 11.',
      xpValue: 20,
    },
    {
      id: 'fnc-q16',
      type: 'multiple-choice',
      stem: 'On a January morning in Aberdeen, the air temperature was -7 degrees Celsius at 6am. By midday it had risen 13 degrees. By 6pm it had fallen 9 degrees from its midday value. What was the temperature at 6pm, in degrees Celsius?',
      tier: 'challenge',
      options: ['-3', '-15', '15', '3'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Work it in two steps. First find the midday reading: -7 + 13. Then subtract 9 for sunset.',
      misconceptionId: 'fnc-mis-temp-drop-always-negative',
    },
    {
      id: 'fnc-q17',
      type: 'numeric-entry',
      stem: 'On Monday morning Maya\'s bank balance is -£42. She is paid £140 in wages, pays £18 for a train ticket and £12 for lunch, then transfers £35 into a savings pot. What is her balance at the end of the day, in pounds?',
      tier: 'challenge',
      correctAnswer: 33,
      xpValue: 25,
      unit: 'GBP',
      hint: 'Wages add; the others subtract. Work in order: -42, then +140, then -18, then -12, then -35.',
    },
    {
      id: 'fnc-q18',
      type: 'multiple-choice',
      stem: 'A research submersible begins at -120 metres. It descends 85 metres to film a wreck, rises 240 metres to deploy a buoy at the surface, then descends 60 metres to inspect the buoy chain. What is its final depth, in metres relative to sea level?',
      tier: 'challenge',
      options: ['-25', '25', '-265', '-205'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Descending subtracts; rising adds. Track the running total: -120, then -85, then +240, then -60.',
      misconceptionId: 'fnc-mis-magnitude-then-sign',
    },
    {
      id: 'fnc-q19',
      type: 'numeric-entry',
      stem: 'A flight leaves Manchester at 21:00 local time on Tuesday and lands in New York 8 hours later. New York is 5 hours behind Manchester. What is the local time in New York when the flight lands? Enter the answer using the 24-hour clock as four digits with no colon, for example 0000 for midnight or 1430 for 2:30pm.',
      tier: 'challenge',
      correctAnswer: 0,
      xpValue: 25,
      hint: 'First find the Manchester landing time: 21:00 + 8 hours. Then take 5 hours off for New York.',
      misconceptionId: 'fnc-mis-time-zone-offset-direction',
    },
    {
      id: 'fnc-q20',
      type: 'spot-misconception',
      stem: 'Aisha says: "When it is noon in London, it is 5pm in New York, because New York is 5 hours from London and you add the offset."',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha is right. The 5-hour offset is added to London time, so noon in London means 5pm in New York.',
          isMisconception: true,
        },
        {
          text: 'Aisha is wrong. New York is 5 hours behind London, so its offset is -5. Noon in London means 7am in New York, not 5pm.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fnc-mis-time-zone-offset-direction',
    },
    {
      id: 'fnc-q21',
      type: 'drag-order',
      stem: 'Drag these heights in metres relative to sea level into order from lowest to highest.',
      tier: 'challenge',
      items: [
        '-430 (Dead Sea shore)',
        '-250 (submarine)',
        '0 (sea level)',
        '+85 (cliff top)',
        '+1085 (Snowdon summit)',
      ],
      correctOrder: [0, 1, 2, 3, 4],
      xpValue: 25,
      hint: 'On a vertical number line, the lowest sits at the bottom and the highest at the top. Negatives are below zero.',
    },
  ],
  misconceptions: [
    // Source: Vlassis, J. (2004), "Making sense of the minus sign or becoming flexible in 'negativity'", Learning and Instruction 14(5), 469-484, on the persistent magnitude-then-sign error in directed-number contexts. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on signed sums in contexts.
    {
      id: 'fnc-mis-magnitude-then-sign',
      description:
        'Computing a signed result by working with the digit sizes only, then attaching a sign at the end based on a guess about which sign should win.',
      triggerAnswer: 'magnitude-then-sign',
      correction:
        'In fact each sign decides the direction of a move on the number line. Signs are not optional and cannot be added back at the end.',
      reExplanation:
        'A submarine at -250 metres rising 80 metres goes to -170 metres, not -330 or +170. The minus sign on -250 says start below sea level. The plus sign on +80 says move 80 metres up. Tracking the moves on a number line gives the right sign every time.',
    },
    // Source: Bell, A. (1986), "Diagnostic teaching: 2 - Developing conflict - discussion lessons", Mathematics Teaching 116, 26-29, on the "drop must be negative" intuition where pupils confuse the change with the result. Reinforced by AQA GCSE Mathematics 8300 Foundation tier examiner reports across the 2017-2023 series, on items where a temperature drop crosses zero.
    {
      id: 'fnc-mis-temp-drop-always-negative',
      description:
        'Believing that "the temperature drops by N" must give a negative final reading, no matter what the starting value is.',
      triggerAnswer: 'temp-drop-always-negative',
      correction:
        'In fact the change is negative, but the final reading depends on where you started. A drop from a high positive can still leave you in positive territory.',
      reExplanation:
        'Starting at 12 and dropping 5 gives 7, which is still positive. Starting at 4 and dropping 11 gives -7, which is negative. The drop is always a subtraction, but only the starting value decides whether the result crosses zero.',
    },
    // Source: Hart, K.M. ed. (1981), "Children's Understanding of Mathematics 11-16" (CSMS), John Murray, Directed Numbers chapter, on pupils who refuse a negative answer in a real context. Reinforced by Edexcel GCSE Mathematics 1MA1 Foundation tier (Paper 1F) examiner reports across the 2017-2023 series, on items involving overdrafts.
    {
      id: 'fnc-mis-balance-cannot-be-negative',
      description:
        'Believing that a bank balance cannot be a negative number, so a withdrawal larger than the balance must give zero or a positive number.',
      triggerAnswer: 'balance-cannot-be-negative',
      correction:
        'In fact a balance can be negative. A negative balance is what banks call an overdraft, and it is a real value the account can hold.',
      reExplanation:
        'A balance of £45 with a withdrawal of £80 gives 45 - 80 = -35, which is an overdraft of £35. The minus sign is part of the answer. Wages of less than the overdraft do not clear it; £15 of wages on a -£20 balance leaves -£5.',
    },
    // Source: CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on finding the difference between two negatives. Reinforced by Vlassis, J. (2004), Learning and Instruction 14(5), 469-484, on the use of the minus sign as a difference operator.
    {
      id: 'fnc-mis-difference-just-subtract-magnitudes',
      description:
        'Computing the difference between two readings by subtracting the smaller digit from the larger digit, ignoring the signs entirely.',
      triggerAnswer: 'difference-just-subtract-magnitudes',
      correction:
        'In fact the difference is the upper value minus the lower value. When the lower value is negative, the two minus signs cancel into a sum.',
      reExplanation:
        'London at 12 and Edinburgh at -4 gives a difference of 12 - (-4) = 16, not 8. On a number line, count from -4 up to 12: that is 4 steps to reach 0 and 12 more to reach 12, totalling 16. Two negatives cancel.',
    },
    // Source: OCR GCSE Mathematics J560 Foundation tier examiner reports across the 2017-2023 series, on items involving time zone offsets. Reinforced by Royal Observatory Greenwich, "About Greenwich Mean Time" (2023), on the convention that time zones west of London have a negative offset and time zones east have a positive offset.
    {
      id: 'fnc-mis-time-zone-offset-direction',
      description:
        'Believing that the time zone offset is always added to local time, no matter whether the destination is east or west of London.',
      triggerAnswer: 'time-zone-offset-direction',
      correction:
        'In fact the sign of the offset matters. Time zones west of London have a negative offset, so the local time is found by subtracting from London time.',
      reExplanation:
        'New York runs at UTC -5, which means it is 5 hours behind London. When London reads noon, New York reads 12 - 5 = 7am, not 5pm. Cities east of London, such as Berlin at UTC +1, are ahead, so the offset is added.',
    },
    // Source: Hart, K.M. ed. (1981), CSMS, Directed Numbers chapter, on the "minus a minus" sign confusion. Reinforced by CGP KS3 Maths Study Guide (Years 7-9), Negative Numbers chapter, "Common mistake" callout on subtracting a negative reading.
    {
      id: 'fnc-mis-minus-minus-stays-minus',
      description:
        'Treating the difference 12 minus negative 4 as if the two minus signs add up to one minus, giving 12 - 4 = 8 instead of 12 + 4 = 16.',
      triggerAnswer: 'minus-minus-stays-minus',
      correction:
        'In fact two adjacent minus signs cancel into a plus. So 12 minus negative 4 is the same as 12 plus 4, which is 16.',
      reExplanation:
        'Read each minus sign as a reversal. The first minus reverses direction; the second minus reverses it back. So subtracting a negative ends up moving in the same direction as adding a positive. 12 - (-4) reaches 16, not 8.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fourOperationsNegativesInContextZoneNodes = [
  fourOperationsNegativesInContext,
]
