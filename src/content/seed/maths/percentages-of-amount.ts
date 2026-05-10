import type { SkillNode } from '@/types/content'

export const percentagesOfAmount: SkillNode = {
  id: 'maths-percentages-of-amount',
  title: 'Percentage of an Amount',
  description:
    'Find a percentage of a given amount by combining the building blocks 50%, 25%, 10%, 5% and 1%, then add or subtract them to reach awkward percentages such as 35%, 12% or 17.5%. Apply the same method to UK money in pounds and pence and to VAT calculated at 20%.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'confident',
  prerequisites: ['maths-percentages-as-decimals-fractions'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including percentage increase and decrease and original value problems, and simple interest including in financial mathematics.',
    awardingBodies: {
      aqa: 'R9 Solve problems involving percentage change',
      edexcel: 'R9 Solve problems involving percentage change, including percentage increase, decrease and original value problems',
      ocr: '6.03a Solve problems involving percentages, including percentage of an amount',
    },
  },
  scenes: [
    {
      id: 'pa-scene-building-blocks',
      title: 'The Five Building Blocks',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the quick way to find that building-block percentage of an amount.',
      data: {
        viewBox: '0 0 600 300',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300"><rect x="20" y="20" width="560" height="260" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Five building-block percentages of £80</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="20" fill="#F8FAFC" text-anchor="middle"><text x="120" y="120">50%</text><text x="220" y="120">25%</text><text x="320" y="120">10%</text><text x="420" y="120">5%</text><text x="520" y="120">1%</text><text x="120" y="170" fill="#22C55E">£40</text><text x="220" y="170" fill="#A855F7">£20</text><text x="320" y="170" fill="#3B82F6">£8</text><text x="420" y="170" fill="#F59E0B">£4</text><text x="520" y="170" fill="#EC4899">£0.80</text></g><text x="300" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Click each percentage to see the quick method.</text></svg>`,
        hotspots: [
          {
            id: 'pa-spot-50',
            x: 20,
            y: 40,
            label: '50% means halve the amount',
            description: '50% of £80 is half of £80, which is £40.',
          },
          {
            id: 'pa-spot-25',
            x: 37,
            y: 40,
            label: '25% means halve, then halve again',
            description: '25% of £80 is half of £40, which is £20.',
          },
          {
            id: 'pa-spot-10',
            x: 53,
            y: 40,
            label: '10% means divide by 10',
            description: '10% of £80 is £80 divided by 10, which is £8.',
          },
          {
            id: 'pa-spot-5',
            x: 70,
            y: 40,
            label: '5% is half of 10%',
            description: '5% of £80 is half of £8, which is £4.',
          },
          {
            id: 'pa-spot-1',
            x: 87,
            y: 40,
            label: '1% means divide by 100',
            description: '1% of £80 is £80 divided by 100, which is 80p.',
          },
        ],
      },
    },
    {
      id: 'pa-scene-bar-of-80',
      title: 'A Percent Bar of £80',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see how the building-block percentages share the same total of £80.',
      data: {
        rows: [
          { denominator: 1, colour: '#3B82F6', shaded: 1, label: '100% = £80' },
          { denominator: 2, colour: '#22C55E', shaded: 1, label: '50% = £40' },
          { denominator: 4, colour: '#A855F7', shaded: 1, label: '25% = £20' },
          { denominator: 10, colour: '#F59E0B', shaded: 1, label: '10% = £8' },
          { denominator: 20, colour: '#EC4899', shaded: 1, label: '5% = £4' },
          { denominator: 100, colour: '#14B8A6', shaded: 1, label: '1% = 80p' },
        ],
        notes:
          'Each bar shows one of the building-block percentages of £80. Combine them by adding to reach awkward percentages such as 35% = 25% + 10% = £20 + £8 = £28.',
      },
    },
    {
      id: 'pa-scene-vat-strip',
      title: 'VAT at 20% in the UK',
      type: 'diagram',
      instructions:
        'Read each row to see how a 20% VAT charge is added on a UK shop receipt. To find 20% of an amount, find 10% by dividing by 10, then double it. So a £45 jacket attracts VAT of £4.50 doubled, which is £9, giving a total of £54. The 20% VAT rate is the standard UK rate set by HMRC for most goods.',
      data: {
        examples: [
          {
            netPrice: 25,
            tenPercent: 2.5,
            vatTwentyPercent: 5,
            grossPrice: 30,
          },
          {
            netPrice: 45,
            tenPercent: 4.5,
            vatTwentyPercent: 9,
            grossPrice: 54,
          },
          {
            netPrice: 120,
            tenPercent: 12,
            vatTwentyPercent: 24,
            grossPrice: 144,
          },
        ],
        notes:
          'Standard UK VAT is 20%. Quick rule: divide by 10, then double the result.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pa-worked-1',
      title: 'Find 35% of £80 by combining building blocks',
      steps: [
        {
          explanation:
            'Split 35% into building blocks that are easy to find. 35% is 25% plus 10%.',
          maths: '35% = 25% + 10%',
        },
        {
          explanation:
            '25% is one quarter, so divide £80 by 4, or halve it twice.',
          maths: '25% of £80 = £80 / 4 = £20',
        },
        {
          explanation: '10% is one tenth, so divide £80 by 10.',
          maths: '10% of £80 = £80 / 10 = £8',
        },
        {
          explanation:
            'Add the two results to get 35% of £80.',
          maths: '£20 + £8 = £28',
        },
        {
          explanation: 'So 35% of £80 is £28.',
          maths: '35% of £80 = £28',
        },
      ],
    },
    {
      id: 'pa-worked-2',
      title: 'Find 17.5% of £64 by combining building blocks',
      steps: [
        {
          explanation:
            'Split 17.5% into building blocks. 17.5% is 10% plus 5% plus 2.5%, or written another way, 10% + 5% + half of 5%.',
          maths: '17.5% = 10% + 5% + 2.5%',
        },
        {
          explanation:
            '10% of £64 is £64 divided by 10.',
          maths: '10% of £64 = £6.40',
        },
        {
          explanation:
            '5% is half of 10%, so halve £6.40.',
          maths: '5% of £64 = £3.20',
        },
        {
          explanation:
            '2.5% is half of 5%, so halve £3.20.',
          maths: '2.5% of £64 = £1.60',
        },
        {
          explanation:
            'Now add the three building blocks together.',
        },
        {
          explanation: 'So 17.5% of £64 is £11.20.',
          maths: '£6.40 + £3.20 + £1.60 = £11.20',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pa-q1',
      type: 'multiple-choice',
      stem: 'What is 50% of £24?',
      tier: 'core',
      options: ['£6', '£12', '£24', '£48'],
      correctIndex: 1,
      xpValue: 10,
      hint: '50% means a half. Halve £24.',
    },
    {
      id: 'pa-q2',
      type: 'numeric-entry',
      stem: 'Find 25% of 60. Enter your answer as a number.',
      tier: 'core',
      correctAnswer: 15,
      xpValue: 10,
      hint: '25% is one quarter. Divide 60 by 4.',
    },
    {
      id: 'pa-q3',
      type: 'numeric-entry',
      stem: 'Find 10% of £30. Enter your answer in pounds.',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: '10% means divide by 10.',
      unit: 'pounds',
    },
    {
      id: 'pa-q4',
      type: 'multiple-choice',
      stem: 'What is 1% of £200?',
      tier: 'core',
      options: ['£20', '£2', '20p', '£200'],
      correctIndex: 1,
      xpValue: 10,
      hint: '1% means divide by 100.',
      misconceptionId: 'pa-mis-divide-by-ten-for-one',
    },
    {
      id: 'pa-q5',
      type: 'multiple-choice',
      stem: 'A Sevenoaks cafe sells hot chocolate for £4. What is 50% of the price?',
      tier: 'core',
      options: ['£0.50', '£1', '£2', '£4'],
      correctIndex: 2,
      xpValue: 10,
      hint: '50% is one half.',
    },
    {
      id: 'pa-q6',
      type: 'numeric-entry',
      stem: 'Find 5% of £80. Enter your answer in pounds.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: '5% is half of 10%. First find 10%, then halve.',
      unit: 'pounds',
    },
    {
      id: 'pa-q7',
      type: 'spot-misconception',
      stem: 'Tom finds 10% of 240 by dividing by 100. He writes 2.4 as the answer. Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. 10% means divide by 100.',
          isMisconception: true,
        },
        {
          text: 'Actually 10% means divide by 10. So 10% of 240 is 24, not 2.4. Dividing by 100 gives 1%, not 10%.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pa-mis-divide-by-ten-for-one',
    },
    {
      id: 'pa-q8',
      type: 'numeric-entry',
      stem: 'Find 20% of £150. Enter your answer in pounds.',
      tier: 'confident',
      correctAnswer: 30,
      xpValue: 15,
      hint: '20% is double 10%. Find 10% first, then double it.',
      unit: 'pounds',
    },
    {
      id: 'pa-q9',
      type: 'multiple-choice',
      stem: 'A Manchester train ticket costs £45. The booking agent adds a 20% surcharge. What is the value of the surcharge?',
      tier: 'confident',
      options: ['£4.50', '£9', '£90', '£18'],
      correctIndex: 1,
      xpValue: 15,
      hint: '20% is 10% doubled. 10% of £45 is £4.50, and doubled is £9.',
      misconceptionId: 'pa-mis-vat-only-ten',
    },
    {
      id: 'pa-q10',
      type: 'numeric-entry',
      stem: 'Find 35% of £200. Enter your answer in pounds.',
      tier: 'confident',
      correctAnswer: 70,
      xpValue: 15,
      hint: '35% is 25% + 10%. Find each, then add.',
      unit: 'pounds',
    },
    {
      id: 'pa-q11',
      type: 'multiple-choice',
      stem: 'Which combination of building blocks gives 65%?',
      tier: 'confident',
      options: [
        '25% + 25% + 10%',
        '50% + 15%',
        '25% + 10% + 5%',
        '50% + 10% + 5%',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Add up each option in your head and check the totals.',
    },
    {
      id: 'pa-q12',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells bookshop runs a 15% off promotion on a £24 atlas. How much money is taken off the price?',
      tier: 'confident',
      options: ['£3.60', '£0.36', '£36', '£9'],
      correctIndex: 0,
      xpValue: 15,
      hint: '15% is 10% + 5%. 10% of £24 is £2.40, and 5% is £1.20.',
      misconceptionId: 'pa-mis-five-as-half-of-half',
    },
    {
      id: 'pa-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Find 30% of £70.',
      tier: 'confident',
      steps: [
        'Split 30% into building blocks: 30% is three lots of 10%.',
        '10% of £70 is £70 divided by 10, which is £7.',
        null,
        'So 30% of £70 is £21.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply 10% by 3 to get 30%: £7 multiplied by 3 is £21.',
      xpValue: 20,
    },
    {
      id: 'pa-q14',
      type: 'spot-misconception',
      stem: 'Maya wants 30% of £40. She works out 10% of £40 = £4, then writes 30 lots of £4 = £120. Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. To find 30% you need 30 lots of 10%.',
          isMisconception: true,
        },
        {
          text: 'Actually 30% is only three lots of 10%, not 30 lots. So 30% of £40 is 3 multiplied by £4, which is £12. Maya has multiplied by the percentage value instead of by the number of building blocks.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pa-mis-multiply-by-percent',
    },
    {
      id: 'pa-q15',
      type: 'multiple-choice',
      stem: 'A Year 7 swimming gala has 80 entries. 75% are from local schools. How many entries are from local schools?',
      tier: 'core',
      options: ['20', '40', '60', '80'],
      correctIndex: 2,
      xpValue: 10,
      hint: '75% is 50% + 25%. 50% of 80 is 40, and 25% of 80 is 20.',
      misconceptionId: 'pa-mis-quarter-as-decimal',
    },
    {
      id: 'pa-q16',
      type: 'drag-order',
      stem: 'Drag these amounts into order from smallest to largest.',
      tier: 'confident',
      items: ['10% of £60', '25% of £20', '5% of £80', '50% of £14'],
      correctOrder: [2, 1, 0, 3],
      xpValue: 20,
      hint: 'Compute each value first: 10% of £60 = £6, 25% of £20 = £5, 5% of £80 = £4, 50% of £14 = £7.',
    },
    {
      id: 'pa-q17',
      type: 'numeric-entry',
      stem: 'A school canteen in the Lake District serves 250 lunches in a week. 12% are vegetarian. How many lunches are vegetarian?',
      tier: 'challenge',
      correctAnswer: 30,
      xpValue: 25,
      hint: '12% is 10% + 1% + 1%. 10% of 250 is 25, and 1% is 2.5. So 12% is 25 + 2.5 + 2.5 = 30.',
    },
    {
      id: 'pa-q18',
      type: 'multiple-choice',
      stem: 'A jacket in a Dover surf shop is priced at £64 before VAT. The shopkeeper must add 20% VAT to the price label. What is the total price including VAT?',
      tier: 'challenge',
      options: ['£12.80', '£64.20', '£76.80', '£128'],
      correctIndex: 2,
      xpValue: 25,
      hint: '20% of £64 is £12.80. Add the VAT to the original price: £64 + £12.80 = £76.80.',
      misconceptionId: 'pa-mis-percent-as-total',
    },
    {
      id: 'pa-q19',
      type: 'multiple-choice',
      stem: 'Aisha and Liam each raise money for charity. Aisha donates 25% of her £80 sponsor money, while Liam donates 50% of his £36 sponsor money. Which row of the table compares the two donations correctly?',
      tier: 'challenge',
      options: [
        'Aisha donates £20 and Liam donates £18, so Aisha donates more.',
        'Aisha donates £20 and Liam donates £18, so Liam donates more.',
        'Aisha donates £25 and Liam donates £50, so Liam donates more.',
        'Aisha and Liam donate the same amount because their percentages add to 75%.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: '25% of £80: divide by 4 to get £20. 50% of £36: halve to get £18.',
      misconceptionId: 'pa-mis-mixed-totals',
    },
    {
      id: 'pa-q20',
      type: 'numeric-entry',
      stem: 'A Manchester library reports that 17.5% of its 400 borrowers chose a poetry book. How many borrowers chose poetry?',
      tier: 'challenge',
      correctAnswer: 70,
      xpValue: 25,
      hint: '17.5% = 10% + 5% + 2.5%. 10% of 400 = 40, 5% = 20, 2.5% = 10. Total = 70.',
      misconceptionId: 'pa-mis-decimal-percent-stuck',
    },
    {
      id: 'pa-q21',
      type: 'drag-drop-builder',
      stem: 'Build a calculation that finds 65% of £40 using building-block percentages. Drag the parts into order.',
      tier: 'challenge',
      parts: ['50% of £40', '+', '10% of £40', '+', '5% of £40'],
      correctArrangement: [
        '50% of £40',
        '+',
        '10% of £40',
        '+',
        '5% of £40',
      ],
      xpValue: 25,
      hint: '65% = 50% + 10% + 5%. The values are £20 + £4 + £2 = £26.',
    },
    {
      id: 'pa-q22',
      type: 'free-text',
      stem: 'Liam says: "Finding 25% of £80 and finding 80% of £25 must give different answers, because the percentages are different." Aisha disagrees and says they give the same answer. Explain in one or two sentences who is right and why, then state the value.',
      tier: 'challenge',
      sampleAnswer:
        'Aisha is right because finding a percentage of an amount is the same as multiplying the two numbers and dividing by 100. So 25 multiplied by 80 divided by 100 is 20, the same as 80 multiplied by 25 divided by 100. Both expressions equal £20.',
      keywords: ['multiply', 'commutative', 'same', '£20', 'divide by 100'],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Percentages of Amounts" page; the "Common mistake" callout that pupils confuse the divide-by-10 rule for 10% with a divide-by-100 rule for 1%.
    {
      id: 'pa-mis-divide-by-ten-for-one',
      description:
        'Believing that 10% of an amount means divide by 100 (mixing up the rule for 10% with the rule for 1%).',
      triggerAnswer: 'divide-by-100-for-ten',
      correction:
        'In fact 10% means divide by 10, not 100. Dividing by 100 gives 1%, which is ten times smaller than 10%.',
      reExplanation:
        '10% of £240 is £24, found by dividing by 10. 1% of £240 is £2.40, found by dividing by 100. The two rules are easy to swap: keep them straight by remembering that the percentage and the divisor are mirror images, 10 and 10, or 1 and 100.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a percentage-of-amount question where pupils multiplied the amount by the percentage value as if it were a count of building blocks.
    {
      id: 'pa-mis-multiply-by-percent',
      description:
        'Believing that to find x% you must multiply by x lots of 10% rather than (x divided by 10) lots of 10%.',
      triggerAnswer: 'multiply-by-percent',
      correction:
        'When you split a percentage into 10% blocks, the number of blocks is the percentage divided by 10, not the percentage itself. So 30% is 3 lots of 10%, not 30 lots of 10%.',
      reExplanation:
        '30% of £40: first find 10% (£4) by dividing by 10. Then 30% is three lots of 10%, so multiply by 3 to get £12. Multiplying by 30 instead of 3 would give £120, which is more than the original £40 and so cannot be right.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring slip where pupils calculate the VAT and report the VAT alone as the total.
    {
      id: 'pa-mis-vat-only-ten',
      description:
        'Working out 20% VAT by finding 10% only, then forgetting to double the 10% to reach the full 20%.',
      triggerAnswer: 'vat-only-ten',
      correction:
        '20% is double 10%, not the same as 10%. After finding 10% you must double the result to reach 20%.',
      reExplanation:
        'For VAT at 20% on £45: find 10% by dividing by 10 (£4.50). Then double £4.50 to get the full 20%, which is £9. Reporting £4.50 as the VAT would be only half the correct charge.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); commentary on a multi-step VAT or sale-price question where pupils stopped at the percentage value instead of adding it to the original amount.
    {
      id: 'pa-mis-percent-as-total',
      description:
        'Reporting the percentage of an amount (the discount or the VAT) as the new total price, rather than adding or subtracting it from the original amount.',
      triggerAnswer: 'percent-as-total',
      correction:
        'A percentage of an amount is just the size of the increase or the decrease. To find the new total you add it to (for VAT or interest) or subtract it from (for a discount) the original amount.',
      reExplanation:
        'If a £64 jacket has 20% VAT added, 20% of £64 is £12.80. The new total price is the original £64 plus the £12.80 VAT, which is £76.80. Reporting £12.80 as the total would be the VAT only, not the price the customer pays.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Percentages of Amounts" page; the worked example showing that 25% of an amount is one quarter, found by dividing by 4 or by halving twice.
    {
      id: 'pa-mis-quarter-as-decimal',
      description:
        'Working out 25% of an amount by treating it as 0.25 then mis-multiplying, for example reading 25% of 60 as 60 minus 25 = 35.',
      triggerAnswer: 'quarter-as-subtract',
      correction:
        '25% is one quarter, found by dividing by 4 (or by halving twice). It is not the percentage value subtracted from the amount.',
      reExplanation:
        '25% of 60: divide by 4. Half of 60 is 30, half of 30 is 15. So 25% of 60 is 15. Subtracting the percentage value gives 60 minus 25 = 35, which has nothing to do with finding a percentage.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Percentages of Amounts" page; the building-block table that pairs 5% with halving the 10% value.
    {
      id: 'pa-mis-five-as-half-of-half',
      description:
        'Believing 5% of an amount is half of 50% (or half of 25%) rather than half of 10%.',
      triggerAnswer: 'five-as-half-of-half',
      correction:
        '5% is half of 10%, not half of 50% or half of 25%. Find 10% first by dividing by 10, then halve to reach 5%.',
      reExplanation:
        '5% of £80: 10% of £80 is £8, and half of £8 is £4. So 5% of £80 is £4. Halving 50% (£40) would give 25% (£20), and halving 25% (£20) would give 12.5% (£10), neither of which is 5%.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Percentages); pupils combine percentages of different amounts as if they were the same amount.
    {
      id: 'pa-mis-mixed-totals',
      description:
        'Combining percentages of two different amounts as if they shared the same total.',
      triggerAnswer: 'mixed-totals',
      correction:
        'A percentage is always relative to a particular amount. 25% of £80 is £20; 25% of £40 is £10. You cannot add or compare percentages without first checking the totals.',
      reExplanation:
        'If a Year 7 form raises £80 and a Year 8 form raises £40, donating 25% from each form gives £20 + £10 = £30 in total, not 50% of either amount. Convert each percentage into the actual amount before adding.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion when reading 17.5% as a one-step calculation rather than a sum of building blocks.
    {
      id: 'pa-mis-decimal-percent-stuck',
      description:
        'Believing a percentage with a decimal point (like 17.5% or 12.5%) is impossible without a calculator.',
      triggerAnswer: 'decimal-percent-stuck',
      correction:
        'Decimal percentages are made of building blocks just like whole-number percentages. 17.5% is 10% + 5% + 2.5%, and 12.5% is 10% + 2.5%. You can find each building block by halving.',
      reExplanation:
        '17.5% of £64: 10% of £64 is £6.40, half of £6.40 is £3.20 (5%), and half of £3.20 is £1.60 (2.5%). Sum: £6.40 + £3.20 + £1.60 = £11.20. Each block is just a halving of the previous one, so no calculator is needed.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesOfAmountZoneNodes = [percentagesOfAmount]
