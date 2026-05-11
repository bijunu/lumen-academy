import type { SkillNode } from '@/types/content'

export const fractionsOfAmount: SkillNode = {
  id: 'maths-fractions-of-amount',
  title: 'Finding a Fraction of an Amount',
  description:
    'Find a fraction of an amount by dividing by the denominator then multiplying by the numerator. Use the same method when the answer is a whole number, a decimal, or money in pounds and pence, and turn the rule around to find the original whole when a fractional part is known.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'confident',
  prerequisites: ['maths-fractions-equivalent'],
  curriculum: {
    ks3Objective:
      'Express one quantity as a fraction of another; solve problems involving fractions.',
    awardingBodies: {
      aqa: 'N12 Solve problems involving fractions of quantities (GCSE Mathematics 8300)',
      edexcel: 'N12 Find a fraction of a quantity (GCSE Mathematics 1MA1)',
      ocr: '2.04a Calculate a fraction of a quantity (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'foa-scene-method',
      title: 'Divide by the Bottom, Multiply by the Top',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the divide-then-multiply method finds 3/5 of 40.',
      data: {
        viewBox: '0 0 600 320',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect x="20" y="20" width="560" height="280" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="58" font-family="system-ui, sans-serif" font-size="18" fill="#94A3B8" text-anchor="middle">Finding 3/5 of 40</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle"><text x="120" y="150">40</text><text x="220" y="150">/</text><text x="320" y="150">5</text><text x="420" y="150">=</text><text x="520" y="150">8</text></g><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle"><text x="120" y="230">8</text><text x="220" y="230">x</text><text x="320" y="230">3</text><text x="420" y="230">=</text><text x="520" y="230">24</text></g><text x="300" y="285" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">So 3/5 of 40 is 24.</text></svg>`,
        hotspots: [
          {
            id: 'foa-spot-amount',
            x: 20,
            y: 47,
            label: 'Start with the amount',
            description: 'The whole here is 40. The fraction 3/5 acts on this amount.',
          },
          {
            id: 'foa-spot-divide',
            x: 53,
            y: 47,
            label: 'Divide by the bottom (denominator)',
            description: '40 divided by 5 is 8. That gives one fifth of 40.',
          },
          {
            id: 'foa-spot-one-part',
            x: 87,
            y: 47,
            label: 'One fifth of 40 is 8',
            description: 'Each fifth of the amount is worth 8 units.',
          },
          {
            id: 'foa-spot-multiply',
            x: 53,
            y: 72,
            label: 'Multiply by the top (numerator)',
            description: '3 lots of one fifth means multiplying 8 by 3.',
          },
          {
            id: 'foa-spot-result',
            x: 87,
            y: 72,
            label: 'Three fifths of 40 is 24',
            description: '8 multiplied by 3 is 24, the final answer.',
          },
        ],
      },
    },
    {
      id: 'foa-scene-fifths-of-20',
      title: 'Three Fifths of 20 on a Bar',
      type: 'fraction-wall',
      instructions:
        'Click each fifth of the 20-bar to highlight it and watch the running total.',
      data: {
        wholeLabel: 'A bar of 20 split into 5 equal fifths',
        rows: [
          { denominator: 5, colour: '#A855F7', shaded: 3, label: '3/5 of 20 = 12' },
          { denominator: 5, colour: '#475569', shaded: 0, label: 'one fifth = 4' },
        ],
        parts: [
          { id: 'foa-fifth-1', share: 'one-fifth', value: 4, colour: 'purple' },
          { id: 'foa-fifth-2', share: 'one-fifth', value: 4, colour: 'purple' },
          { id: 'foa-fifth-3', share: 'one-fifth', value: 4, colour: 'purple' },
          { id: 'foa-fifth-4', share: 'background', value: 4 },
          { id: 'foa-fifth-5', share: 'background', value: 4 },
        ],
        totalParts: 5,
        shadedParts: 3,
        rule: 'Each fifth of 20 is worth 4. Three fifths is three lots of 4, which is 12.',
      },
    },
    {
      id: 'foa-scene-reverse',
      title: 'Reverse: Finding the Whole from a Part',
      type: 'diagram',
      instructions:
        'Read each row to see how a known fraction-of-amount can be turned around. If 2/3 of a number is 24, then each third is 24 divided by 2, which is 12. The whole is three thirds, so multiply by 3 to reach 36. The order is flipped from the forward method: divide by the top, then multiply by the bottom. A bar split into three equal parts confirms it: two parts hold 24, each part holds 12, and the full three parts hold 36.',
      data: {
        examples: [
          {
            fraction: '2/3',
            partValue: 24,
            divideByTop: 12,
            multiplyByBottom: 36,
            whole: 36,
          },
          {
            fraction: '3/4',
            partValue: 18,
            divideByTop: 6,
            multiplyByBottom: 24,
            whole: 24,
          },
          {
            fraction: '5/8',
            partValue: 40,
            divideByTop: 8,
            multiplyByBottom: 64,
            whole: 64,
          },
        ],
        notes:
          'Reverse rule: divide by the numerator to find one part, then multiply by the denominator to reach the whole.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'foa-worked-1',
      title: 'Find 3/5 of 40',
      steps: [
        {
          explanation: 'Read the fraction. The denominator is 5, the numerator is 3.',
          maths: 'fraction: 3/5, amount: 40',
        },
        {
          explanation:
            'Divide the amount by the denominator to find one fifth of 40.',
          maths: '40 / 5 = 8',
        },
        {
          explanation: 'Multiply that one-fifth value by the numerator to find three fifths.',
          maths: '8 x 3 = 24',
        },
        {
          explanation: 'So 3/5 of 40 is 24.',
          maths: '3/5 of 40 = 24',
        },
      ],
    },
    {
      id: 'foa-worked-2',
      title: 'Reverse: if 2/3 of an amount is 24, find the amount',
      steps: [
        {
          explanation:
            'The known part is 24 and it represents two thirds of the whole. Each third is half of 24.',
          maths: 'one third = 24 / 2 = 12',
        },
        {
          explanation:
            'The whole is three thirds, so multiply one third by 3.',
        },
        {
          explanation:
            'Write the working out as one line to check.',
          maths: 'whole = (24 / 2) x 3 = 36',
        },
        {
          explanation: 'So the amount is 36.',
          maths: '2/3 of 36 = 24, confirmed',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple fraction of an amount, integer result
    {
      id: 'foa-q1',
      type: 'multiple-choice',
      stem: 'What is 1/4 of 20?',
      tier: 'core',
      options: ['4', '5', '6', '16'],
      correctIndex: 1,
      xpValue: 10,
      hint: '1/4 means divide by 4. 20 divided by 4 is 5.',
    },
    // Core 2: unit fraction divides cleanly
    {
      id: 'foa-q2',
      type: 'numeric-entry',
      stem: 'Find 1/3 of 24. Enter your answer as a number.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: '1/3 means divide by 3. 24 divided by 3 is 8.',
      misconceptionId: 'foa-mis-of-means-add',
    },
    // Core 3: non-unit fraction, integer result
    {
      id: 'foa-q3',
      type: 'multiple-choice',
      stem: 'What is 3/5 of 40?',
      tier: 'core',
      options: ['8', '15', '24', '120'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Divide 40 by 5 to find one fifth (which is 8). Then multiply by 3 to find three fifths.',
      misconceptionId: 'foa-mis-divide-by-numerator',
    },
    // Core 4: money context, easy
    {
      id: 'foa-q4',
      type: 'multiple-choice',
      stem: 'A Sevenoaks family saves 1/5 of a £30 weekly allowance. How much is saved each week?',
      tier: 'core',
      options: ['£6', '£10', '£15', '£25'],
      correctIndex: 0,
      xpValue: 10,
      hint: '1/5 of £30 means divide by 5. £30 divided by 5 is £6.',
    },
    // Core 5: pupil count, integer result
    {
      id: 'foa-q5',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells class has 28 pupils. 3/4 of them walk to school. How many pupils walk to school?',
      tier: 'core',
      correctAnswer: 21,
      unit: 'pupils',
      xpValue: 10,
      hint: '1/4 of 28 is 7, and 3/4 is three lots of 7, which is 21.',
      misconceptionId: 'foa-mis-stops-at-one-part',
    },
    // Core 6: recipe / weight context
    {
      id: 'foa-q6',
      type: 'multiple-choice',
      stem: 'A scone recipe needs 5/8 of 64 grams of butter. How many grams of butter is that?',
      tier: 'core',
      options: ['8', '32', '40', '56'],
      correctIndex: 2,
      xpValue: 10,
      hint: '64 divided by 8 is 8. Five lots of 8 is 40 grams.',
    },
    // Core 7: spot-misconception on dividing by numerator (rule swap)
    {
      id: 'foa-q7',
      type: 'spot-misconception',
      stem: 'Tom works out 3/5 of 40. He divides 40 by 3 first, then multiplies by 5, and writes the answer as about 66.7.',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. To find a fraction of an amount you divide by the top number, then multiply by the bottom.',
          isMisconception: true,
        },
        {
          text: 'In fact you divide by the bottom (the denominator) and multiply by the top (the numerator). 40 divided by 5 is 8, and 8 multiplied by 3 is 24, so 3/5 of 40 is 24.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'foa-mis-divide-by-numerator',
    },
    // Confident 1: money, GBP, integer pounds
    {
      id: 'foa-q8',
      type: 'numeric-entry',
      stem: 'A Dover charity shop raises £150 in a day. The manager sets aside 2/3 of the takings for restocking. How much is set aside?',
      tier: 'confident',
      correctAnswer: 100,
      unit: 'pounds',
      xpValue: 15,
      hint: '£150 divided by 3 is £50, and two thirds is two lots of £50, which is £100.',
    },
    // Confident 2: decimal result (does not simplify cleanly)
    {
      id: 'foa-q9',
      type: 'numeric-entry',
      stem: 'Find 3/8 of 30. Enter your answer as a decimal.',
      tier: 'confident',
      correctAnswer: 11.25,
      tolerance: 0.01,
      xpValue: 15,
      hint: '30 divided by 8 is 3.75. Three lots of 3.75 is 11.25.',
    },
    // Confident 3: kg context, integer result
    {
      id: 'foa-q10',
      type: 'multiple-choice',
      stem: 'A school cricket bag weighs 64 kg in total. The pads make up 5/8 of the total mass. What is the mass of the pads?',
      tier: 'confident',
      options: ['8 kg', '24 kg', '32 kg', '40 kg'],
      correctIndex: 3,
      xpValue: 15,
      hint: '64 divided by 8 is 8. Five lots of 8 kg is 40 kg.',
      misconceptionId: 'foa-mis-multiply-by-denominator',
    },
    // Confident 4: missing step
    {
      id: 'foa-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam works out 5/6 of 72.',
      tier: 'confident',
      steps: [
        'Divide by the denominator: 72 / 6 = 12. So one sixth of 72 is 12.',
        null,
        'So 5/6 of 72 is 60.',
      ],
      missingStepIndex: 1,
      correctStep: 'Multiply by the numerator: 12 x 5 = 60. So five sixths of 72 is 60.',
      xpValue: 20,
      misconceptionId: 'foa-mis-divide-by-numerator',
    },
    // Confident 5: distance / metres
    {
      id: 'foa-q12',
      type: 'numeric-entry',
      stem: 'A Manchester park run is 5000 metres long. Aisha has finished 3/4 of the route. How far has she run in metres?',
      tier: 'confident',
      correctAnswer: 3750,
      unit: 'metres',
      xpValue: 15,
      hint: '5000 divided by 4 is 1250. Three lots of 1250 is 3750 metres.',
    },
    // Confident 6: reverse direction, integer
    {
      id: 'foa-q13',
      type: 'multiple-choice',
      stem: 'A bag of marbles is shared so that 2/3 of the bag is 24 marbles. How many marbles are in the whole bag?',
      tier: 'confident',
      options: ['16', '36', '48', '72'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Each third is 24 divided by 2, which is 12. The whole is three thirds, so 12 x 3 = 36.',
      misconceptionId: 'foa-mis-reverse-wrong-direction',
    },
    // Confident 7: drag-order
    {
      id: 'foa-q14',
      type: 'drag-order',
      stem: 'Drag these amounts into order from smallest to largest.',
      tier: 'confident',
      items: ['1/4 of 40', '3/5 of 20', '2/3 of 18', '5/8 of 32'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Work each out: 1/4 of 40 = 10, 3/5 of 20 = 12, 2/3 of 18 = 12, 5/8 of 32 = 20. Two of them tie at 12.',
    },
    // Confident 8: recipe portions, decimal result
    {
      id: 'foa-q15',
      type: 'multiple-choice',
      stem: 'A roast recipe for 8 people uses 1200 grams of potatoes. Aisha is cooking for 3 people, which is 3/8 of the original portions. How many grams of potatoes does she need?',
      tier: 'confident',
      options: ['150', '300', '450', '600'],
      correctIndex: 2,
      xpValue: 15,
      hint: '1200 divided by 8 is 150. Three lots of 150 is 450 grams.',
    },
    // Challenge 1: Bond-style word problem, reverse direction with intermediate step
    {
      id: 'foa-q16',
      type: 'numeric-entry',
      stem: 'A Lake District youth hostel runs a fundraiser. 3/7 of the funds raised pays for repairs and comes to £270. The rest is shared between two local charities. How much in total is shared between the two charities?',
      tier: 'challenge',
      correctAnswer: 360,
      unit: 'pounds',
      xpValue: 25,
      hint: 'First find the whole: each seventh is £270 / 3 = £90, so the total raised is 7 x £90 = £630. Then 4/7 is left, which is 4 x £90 = £360.',
      misconceptionId: 'foa-mis-reverse-wrong-direction',
    },
    // Challenge 2: Bond-style two-step, money with units
    {
      id: 'foa-q17',
      type: 'multiple-choice',
      stem: 'A Sevenoaks school sells 240 raffle tickets at £2.50 each. 2/5 of the income goes to the PTA. How much does the PTA receive?',
      tier: 'challenge',
      options: ['£96', '£144', '£240', '£600'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Total income is 240 x £2.50 = £600. Then 2/5 of £600: £600 / 5 = £120, multiplied by 2 is £240.',
    },
    // Challenge 3: decimal result in money (does not simplify)
    {
      id: 'foa-q18',
      type: 'numeric-entry',
      stem: 'A Dover bookshop sells a £45 boxed set. The shopkeeper offers 3/8 off the price for a customer who pays in cash. How much in pounds is taken off the price?',
      tier: 'challenge',
      correctAnswer: 16.875,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 25,
      hint: '£45 divided by 8 is £5.625. Three lots of £5.625 is £16.875.',
    },
    // Challenge 4: drag-drop-builder for reverse method
    {
      id: 'foa-q19',
      type: 'drag-drop-builder',
      stem: 'Build a calculation that finds the whole amount when 3/4 of an amount is 18. Drag the parts into order.',
      tier: 'challenge',
      parts: ['18', '/', '3', 'x', '4'],
      correctArrangement: ['18', '/', '3', 'x', '4'],
      xpValue: 25,
      hint: 'Divide the part value by the numerator to find one fourth (18 / 3 = 6), then multiply by the denominator to reach the whole (6 x 4 = 24).',
      misconceptionId: 'foa-mis-reverse-wrong-direction',
    },
    // Challenge 5: fraction of fraction trap (with own misconception)
    {
      id: 'foa-q20',
      type: 'multiple-choice',
      stem: 'A Year 7 charity stall raises £80. 3/4 of the takings go to the chosen charity, and 1/2 of that 3/4 share is then donated to a local food bank. How much does the food bank receive?',
      tier: 'challenge',
      options: ['£20', '£30', '£40', '£60'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Find 3/4 of £80 first: £80 / 4 = £20, then 3 x £20 = £60. Then 1/2 of £60 is £30. Stacking the fractions takes two steps in turn.',
      misconceptionId: 'foa-mis-fraction-of-fraction',
    },
    // Challenge 6: free-text explaining units in a reverse problem
    {
      id: 'foa-q21',
      type: 'free-text',
      stem: 'Maya says: "2/3 of a journey is 18 kilometres, so the whole journey is 18 multiplied by 2/3, which is 12 kilometres." Explain in one or two sentences what is wrong with her method, then state the correct length of the whole journey in kilometres.',
      tier: 'challenge',
      sampleAnswer:
        'Maya has applied the forward rule instead of the reverse rule, so she has made the whole journey smaller than the part. The correct method divides 18 by the numerator 2 to find one third (9 kilometres), then multiplies by the denominator 3 to reach the whole, which is 27 kilometres.',
      keywords: ['reverse', 'divide', 'numerator', 'multiply', 'denominator', '27', 'kilometres'],
      xpValue: 25,
      misconceptionId: 'foa-mis-units-dropped',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a fraction-of-amount question where pupils divided by the numerator and multiplied by the denominator instead of the other way round.
    {
      id: 'foa-mis-divide-by-numerator',
      description:
        'I find a fraction of an amount by dividing by the top number, then multiplying by the bottom.',
      triggerAnswer: 'divide-by-numerator',
      correction:
        'Actually you divide by the bottom (the denominator) and multiply by the top (the numerator). The denominator tells you how many equal parts the amount is split into.',
      reExplanation:
        'For 3/5 of 40, divide 40 by 5 to find one fifth, which is 8. Then multiply by 3 to find three fifths, which is 24. A bar of 40 split into 5 equal parts has parts of size 8, and three of them shaded gives 24. Dividing by 3 first gives the wrong size of part and a different answer.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a fraction-of-amount question where pupils multiplied the amount by the denominator instead of dividing by it.
    {
      id: 'foa-mis-multiply-by-denominator',
      description:
        'I find a fraction of an amount by multiplying by the bottom number, so 5/8 of 64 becomes 64 multiplied by 8.',
      triggerAnswer: 'multiply-by-denominator',
      correction:
        'In fact the denominator is the divisor, not the multiplier. Multiplying by the bottom makes the answer larger than the original amount, which a fraction of less than one cannot do.',
      reExplanation:
        'For 5/8 of 64, divide 64 by 8 to find one eighth, which is 8. Then multiply by 5 to find five eighths, which is 40. Multiplying 64 by 8 would give 512, which is bigger than the starting amount, so it cannot be a proper-fraction share of 64.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions of Amounts" page; the "Common mistake" callout warning that "of" means multiply, not add.
    {
      id: 'foa-mis-of-means-add',
      description:
        'I think the word "of" in "1/3 of 24" means add, so 1/3 of 24 becomes 24 plus 3, which is 27.',
      triggerAnswer: 'of-means-add',
      correction:
        'Actually "of" in a fraction phrase means multiply. The fraction is acting on the amount, not being added to it.',
      reExplanation:
        'For 1/3 of 24, read "of" as multiply: 1/3 x 24 = 24 / 3 = 8. Adding the bottom number to the amount (24 + 3 = 27) treats the fraction as a separate count rather than a share. A bar of 24 split into 3 equal parts has parts of 8, so one third of 24 is 8, not 27.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a layered fraction-of-amount question where pupils applied a single fraction-of-amount step rather than two stacked steps.
    {
      id: 'foa-mis-fraction-of-fraction',
      description:
        'When a question asks for a fraction of a fraction of an amount, I add or combine the fractions in one go instead of applying the method twice.',
      triggerAnswer: 'fraction-of-fraction',
      correction:
        'Actually two fraction-of-amount steps must be carried out in turn, or the two fractions can be multiplied first and applied once.',
      reExplanation:
        'For 1/2 of 3/4 of £80, find 3/4 of £80 first: £80 / 4 = £20, then 3 x £20 = £60. Now take 1/2 of £60, which is £30. The same answer comes from multiplying the fractions: 1/2 x 3/4 = 3/8, then 3/8 of £80 = £30. Adding the fractions or applying one step alone gives the wrong share.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Fractions" by Hart, on pupils who confuse the direction of the reverse fraction-of-amount problem (treating the known part as the whole).
    {
      id: 'foa-mis-reverse-wrong-direction',
      description:
        'When I know a fraction-of-amount value and need the whole, I apply the forward method (divide by the denominator, multiply by the numerator) instead of the reverse.',
      triggerAnswer: 'reverse-wrong-direction',
      correction:
        'In fact the reverse problem flips the order. Divide the known part by the numerator to find one part, then multiply by the denominator to reach the whole.',
      reExplanation:
        'If 2/3 of an amount is 24, do not work out 2/3 of 24. Instead divide 24 by the numerator 2 to find one third (12), then multiply by the denominator 3 to find the whole (36). Check: 2/3 of 36 is 24, which matches the question. Applying the forward method to 24 would give a number smaller than the known part, which cannot be the whole.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), recurring slip where pupils computed the correct number but dropped the units (kg, metres, pounds) in the final answer line.
    {
      id: 'foa-mis-units-dropped',
      description:
        'I work out the correct number for the fraction of an amount but write the answer without the units, so 3/4 of 28 pupils becomes 21 with no unit attached.',
      triggerAnswer: 'units-dropped',
      correction:
        'In fact the final answer must keep the same units as the original amount. The fraction shares the units, it does not replace them.',
      reExplanation:
        '3/4 of 28 pupils is 21 pupils, not just 21. If the question asks for kilograms, metres, or pounds, the answer must say the same unit, because the fraction of an amount is still a measurement in that unit. Dropping the unit makes the answer ambiguous and is marked down on every exam board.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, "From the Library" article on fraction-of-amount errors; pupils who use the bar-model method for non-unit fractions but stop after finding one part of the bar.
    {
      id: 'foa-mis-stops-at-one-part',
      description:
        'I divide by the denominator to find one share of the bar, then write that as the final answer even when the numerator is not 1.',
      triggerAnswer: 'stops-at-one-part',
      correction:
        'Actually the numerator tells you how many of the equal parts to count. After dividing, you must multiply by the numerator to finish the calculation.',
      reExplanation:
        'For 3/5 of 40, divide by 5 to find one fifth (8). That is one part of the bar, not three. The numerator 3 says count three of those parts, so multiply 8 by 3 to reach 24. Stopping at 8 would give one fifth, the answer to a different question.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsOfAmountZoneNodes = [fractionsOfAmount]
