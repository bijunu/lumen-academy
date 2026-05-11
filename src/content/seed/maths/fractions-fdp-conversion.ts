import type { SkillNode } from '@/types/content'

export const fractionsFdpConversion: SkillNode = {
  id: 'maths-fractions-fdp-conversion',
  title: 'Converting Between Fractions, Decimals and Percentages',
  description:
    'Move fluently between the three forms. Fraction to decimal divides the top by the bottom. Decimal to fraction reads the last place value as the denominator, then simplifies. Fraction to percentage scales the denominator to 100 or multiplies the decimal form by 100. Percentage to fraction writes over 100 and simplifies. Decimal to percentage multiplies by 100; percentage to decimal divides by 100.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'confident',
  prerequisites: ['maths-fractions-simplify', 'maths-percentages-as-decimals-fractions'],
  curriculum: {
    ks3Objective:
      "Define percentage as 'number of parts per hundred', interpret percentages and percentage changes as a fraction or a decimal, interpret these multiplicatively, express one quantity as a percentage of another.",
    awardingBodies: {
      aqa: 'N10 Work interchangeably with terminating decimals and their corresponding fractions; convert between fractions, decimals and percentages (GCSE Mathematics 8300)',
      edexcel: 'N10 Equivalence between fractions, decimals and percentages (GCSE Mathematics 1MA1)',
      ocr: '2.02a Equivalence between fractions, decimals and percentages (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ffdp-scene-triangle',
      title: 'The FDP Triangle',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the rule for moving in that direction around the triangle.',
      data: {
        viewBox: '0 0 600 400',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect x="20" y="20" width="560" height="360" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="20" fill="#F8FAFC" text-anchor="middle" font-weight="600">The Fraction, Decimal, Percentage Triangle</text><circle cx="300" cy="120" r="46" fill="#1E293B" stroke="#22C55E" stroke-width="2"/><text x="300" y="115" font-family="system-ui, sans-serif" font-size="18" fill="#F8FAFC" text-anchor="middle" font-weight="600">Fraction</text><text x="300" y="138" font-family="ui-monospace, monospace" font-size="16" fill="#94A3B8" text-anchor="middle">3/4</text><circle cx="140" cy="320" r="46" fill="#1E293B" stroke="#3B82F6" stroke-width="2"/><text x="140" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#F8FAFC" text-anchor="middle" font-weight="600">Decimal</text><text x="140" y="338" font-family="ui-monospace, monospace" font-size="16" fill="#94A3B8" text-anchor="middle">0.75</text><circle cx="460" cy="320" r="46" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/><text x="460" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#F8FAFC" text-anchor="middle" font-weight="600">Percent</text><text x="460" y="338" font-family="ui-monospace, monospace" font-size="16" fill="#94A3B8" text-anchor="middle">75%</text><line x1="265" y1="158" x2="175" y2="282" stroke="#64748B" stroke-width="2" marker-end="url(#a1)" marker-start="url(#a1)"/><line x1="335" y1="158" x2="425" y2="282" stroke="#64748B" stroke-width="2" marker-end="url(#a1)" marker-start="url(#a1)"/><line x1="190" y1="320" x2="410" y2="320" stroke="#64748B" stroke-width="2" marker-end="url(#a1)" marker-start="url(#a1)"/><defs><marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#94A3B8"/></marker></defs><text x="210" y="220" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1" text-anchor="middle">F to D: divide top by bottom</text><text x="210" y="240" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1" text-anchor="middle">D to F: place value then simplify</text><text x="390" y="220" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1" text-anchor="middle">F to %: scale to /100</text><text x="390" y="240" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1" text-anchor="middle">% to F: write over 100</text><text x="300" y="345" font-family="system-ui, sans-serif" font-size="13" fill="#CBD5E1" text-anchor="middle">D to %: x 100. % to D: / 100.</text></svg>`,
        hotspots: [
          {
            id: 'ffdp-spot-f-to-d',
            x: 35,
            y: 55,
            label: 'Fraction to decimal',
            description:
              'Divide the numerator by the denominator using short division, so 3/4 becomes 3 / 4 = 0.75.',
          },
          {
            id: 'ffdp-spot-d-to-f',
            x: 35,
            y: 70,
            label: 'Decimal to fraction',
            description:
              'Read the last decimal place value as the denominator, then simplify: 0.75 is 75/100, which simplifies to 3/4.',
          },
          {
            id: 'ffdp-spot-f-to-p',
            x: 65,
            y: 55,
            label: 'Fraction to percentage',
            description:
              'Scale the denominator to 100 (or multiply the decimal form by 100): 3/4 is 75/100, which is 75%.',
          },
          {
            id: 'ffdp-spot-p-to-f',
            x: 65,
            y: 70,
            label: 'Percentage to fraction',
            description:
              'Write the percentage over 100, then simplify: 75% is 75/100, which simplifies to 3/4.',
          },
          {
            id: 'ffdp-spot-d-to-p',
            x: 50,
            y: 86,
            label: 'Decimal to percentage and back',
            description:
              'Decimal to percent multiplies by 100, so 0.75 becomes 75%. Percent to decimal divides by 100, so 75% becomes 0.75. Each digit shifts two columns.',
          },
        ],
      },
    },
    {
      id: 'ffdp-scene-fraction-wall',
      title: 'A Quarter in Three Forms',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it and see 1/4, 0.25, and 25% line up as the same shaded length on the wall.',
      data: {
        rows: [
          { denominator: 4, colour: '#A855F7', label: '1/4' },
          { denominator: 100, colour: '#F97316', label: '25/100 or 0.25' },
          { denominator: 100, colour: '#22C55E', label: '25% of the whole' },
        ],
        equivalentSets: [
          { name: 'Quarter', forms: ['1/4', '0.25', '25%', '25/100'] },
          { name: 'Half', forms: ['1/2', '0.5', '50%', '50/100'] },
          { name: 'Three quarters', forms: ['3/4', '0.75', '75%', '75/100'] },
          { name: 'One fifth', forms: ['1/5', '0.2', '20%', '20/100'] },
          { name: 'One tenth', forms: ['1/10', '0.1', '10%', '10/100'] },
        ],
        note: 'All three rows shade the same length. 1/4 of the whole, 0.25 of the whole, and 25 squares out of 100 are three names for one amount.',
      },
    },
    {
      id: 'ffdp-scene-six-rules',
      title: 'Six Conversion Rules in One Place',
      type: 'diagram',
      instructions:
        'Read each rule across the table. Six arrows connect the three forms, one for every possible direction a question can ask about.',
      data: {
        rules: [
          {
            from: 'Fraction',
            to: 'Decimal',
            rule: 'Divide the numerator by the denominator.',
            example: '3/8 means 3 / 8 = 0.375',
          },
          {
            from: 'Decimal',
            to: 'Fraction',
            rule: 'Read the place value of the last digit as the denominator, then simplify.',
            example: '0.6 is 6/10, which simplifies to 3/5',
          },
          {
            from: 'Fraction',
            to: 'Percentage',
            rule: 'Scale to a denominator of 100, or convert to a decimal first and multiply by 100.',
            example: '3/4 is 75/100, which is 75%',
          },
          {
            from: 'Percentage',
            to: 'Fraction',
            rule: 'Write the percentage over 100, then simplify.',
            example: '60% is 60/100, which simplifies to 3/5',
          },
          {
            from: 'Decimal',
            to: 'Percentage',
            rule: 'Multiply by 100. Each digit shifts two columns to the left.',
            example: '0.45 becomes 45%',
          },
          {
            from: 'Percentage',
            to: 'Decimal',
            rule: 'Divide by 100. Each digit shifts two columns to the right.',
            example: '8% becomes 0.08',
          },
        ],
        commonTriples: [
          { fraction: '1/2', decimal: '0.5', percent: '50%' },
          { fraction: '1/4', decimal: '0.25', percent: '25%' },
          { fraction: '3/4', decimal: '0.75', percent: '75%' },
          { fraction: '1/5', decimal: '0.2', percent: '20%' },
          { fraction: '1/10', decimal: '0.1', percent: '10%' },
          { fraction: '1/3', decimal: '0.333...', percent: '33.3...%' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ffdp-worked-1',
      title: 'Convert 3/8 into a decimal and a percentage',
      steps: [
        {
          explanation:
            'Start with the fraction. To turn it into a decimal, divide the numerator by the denominator.',
          maths: '3/8 means 3 / 8',
        },
        {
          explanation:
            'Use short division to divide 3 by 8. Since 3 is smaller than 8, work with 30 tenths, then 60 hundredths, then 40 thousandths.',
          maths: '3 / 8 = 0.375',
        },
        {
          explanation:
            'The decimal form is 0.375. Now turn the decimal into a percentage by multiplying by 100.',
          maths: '0.375 x 100 = 37.5',
        },
        {
          explanation:
            'Each digit shifts two columns to the left, so 0.375 becomes 37.5 and the per cent sign is added.',
          maths: '0.375 = 37.5%',
        },
        {
          explanation: 'So 3/8 is the same amount as 0.375 and 37.5%.',
          maths: '3/8 = 0.375 = 37.5%',
        },
      ],
    },
    {
      id: 'ffdp-worked-2',
      title: 'Convert 60% back into a fraction in its simplest form',
      steps: [
        {
          explanation:
            'Per cent means per hundred, so write the percentage over a denominator of 100.',
          maths: '60% = 60/100',
        },
        {
          explanation:
            'Find the highest common factor of the numerator and denominator. 60 and 100 share factors of 1, 2, 4, 5, 10, and 20.',
          maths: 'HCF(60, 100) = 20',
        },
        {
          explanation:
            'Divide the top and the bottom by the HCF to reach the simplest form.',
        },
        {
          explanation:
            'Check by reading the simplified fraction back as a decimal: 3 / 5 = 0.6, which matches 60%.',
          maths: '3/5 = 0.6 = 60%',
        },
        {
          explanation: 'So 60% in its simplest fraction form is 3/5.',
          maths: '60% = 3/5',
        },
      ],
    },
  ],
  questions: [
    // Core 1: percentage to decimal (basic)
    {
      id: 'ffdp-q1',
      type: 'multiple-choice',
      stem: 'Write 40% as a decimal.',
      tier: 'core',
      options: ['0.4', '4.0', '0.04', '40.0'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ffdp-mis-decimal-shift-by-ten',
      hint: 'Divide by 100. Each digit shifts two columns to the right, so 40 becomes 0.40, which is the same as 0.4.',
    },
    // Core 2: decimal to percentage (basic)
    {
      id: 'ffdp-q2',
      type: 'numeric-entry',
      stem: 'Write 0.7 as a percentage. Enter your answer as a number without the per cent sign.',
      tier: 'core',
      correctAnswer: 70,
      xpValue: 10,
      hint: 'Multiply by 100. Each digit shifts two columns to the left, so 0.7 becomes 70.',
    },
    // Core 3: fraction to percentage via scaling (common conversion)
    {
      id: 'ffdp-q3',
      type: 'multiple-choice',
      stem: 'Which percentage is the same amount as 1/4?',
      tier: 'core',
      options: ['14%', '25%', '40%', '4%'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ffdp-mis-stack-digits',
      hint: 'Find an equivalent fraction with denominator 100. 4 x 25 = 100, so 1 x 25 = 25 on top.',
    },
    // Core 4: percentage to fraction (simplifying)
    {
      id: 'ffdp-q4',
      type: 'multiple-choice',
      stem: 'Which fraction in its simplest form is the same as 20%?',
      tier: 'core',
      options: ['2/5', '20/10', '1/2', '1/5'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ffdp-mis-no-simplify',
      hint: 'Write 20 over 100, then divide top and bottom by their highest common factor.',
    },
    // Core 5: fraction to decimal (place-value style)
    {
      id: 'ffdp-q5',
      type: 'numeric-entry',
      stem: 'Write 3/10 as a decimal.',
      tier: 'core',
      correctAnswer: 0.3,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'A denominator of 10 means tenths. The numerator sits in the tenths column straight after the point.',
    },
    // Core 6: decimal to fraction (basic)
    {
      id: 'ffdp-q6',
      type: 'multiple-choice',
      stem: 'Write 0.5 as a fraction in its simplest form.',
      tier: 'core',
      options: ['5/100', '5/10', '1/2', '1/5'],
      correctIndex: 2,
      xpValue: 10,
      hint: '0.5 sits in the tenths column, so it is 5/10. Divide top and bottom by 5 to simplify.',
    },
    // Core 7: spot-misconception on 1/4 read as 25 (no decimal point)
    {
      id: 'ffdp-q7',
      type: 'spot-misconception',
      stem: 'Maya writes "1/4 as a decimal is 25 because 25 sits in the per cent box".',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. 1/4 reads off as 25 in decimal form.',
          isMisconception: true,
        },
        {
          text: 'Actually 1/4 is the same as 25/100, which as a decimal is 0.25, not 25. The per cent form is 25%, but the decimal sits in the hundredths column.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ffdp-mis-stack-digits',
    },
    // Confident 1: fraction to percentage with a non-trivial scale
    {
      id: 'ffdp-q8',
      type: 'numeric-entry',
      stem: 'Write 7/20 as a percentage. Enter your answer as a number without the per cent sign.',
      tier: 'confident',
      correctAnswer: 35,
      xpValue: 15,
      hint: 'Find an equivalent fraction with denominator 100. 20 x 5 = 100, so 7 x 5 = 35 on top.',
    },
    // Confident 2: decimal to fraction with two decimal places, requires simplification
    {
      id: 'ffdp-q9',
      type: 'multiple-choice',
      stem: 'Write 0.45 as a fraction in its simplest form.',
      tier: 'confident',
      options: ['45/100', '9/20', '4.5/10', '9/2'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ffdp-mis-wrong-place-value',
      hint: 'Two decimal places gives hundredths: 0.45 is 45/100. The HCF of 45 and 100 is 5.',
    },
    // Confident 3: fraction to decimal via short division (3/8)
    {
      id: 'ffdp-q10',
      type: 'numeric-entry',
      stem: 'Write 3/8 as a decimal.',
      tier: 'confident',
      correctAnswer: 0.375,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Divide 3 by 8 using short division. 30 tenths gives 3 carry 6, 60 hundredths gives 7 carry 4, 40 thousandths gives 5.',
    },
    // Confident 4: percentage with a decimal point, into a fraction
    {
      id: 'ffdp-q11',
      type: 'multiple-choice',
      stem: 'Which fraction in its simplest form is the same as 37.5%?',
      tier: 'confident',
      options: ['3/8', '37.5/100', '37/80', '3/4'],
      correctIndex: 0,
      xpValue: 15,
      hint: '37.5% is 37.5/100. Multiply top and bottom by 2 to clear the half: 75/200. Then divide by 25 to get 3/8.',
    },
    // Confident 5: missing-step on percentage to fraction
    {
      id: 'ffdp-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Liam is converting 80% into a fraction in its simplest form.',
      tier: 'confident',
      steps: [
        'Per cent means per hundred, so write 80 over a denominator of 100: 80/100.',
        'Find the highest common factor of 80 and 100. Both share a factor of 20.',
        null,
        'So 80% is the same as 4/5 in its simplest form.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Divide the top and the bottom by 20: 80 / 20 = 4 and 100 / 20 = 5, giving 4/5.',
      xpValue: 20,
      misconceptionId: 'ffdp-mis-no-simplify',
    },
    // Confident 6: drag-order matching fractions to percentages
    {
      id: 'ffdp-q13',
      type: 'drag-order',
      stem: 'Drag the percentages into the order that matches the fractions: 1/10, 1/5, 1/4, 1/2.',
      tier: 'confident',
      items: ['25%', '50%', '10%', '20%'],
      correctOrder: [2, 3, 0, 1],
      xpValue: 20,
      hint: '1/10 is 10%, 1/5 is 20%, 1/4 is 25%, 1/2 is 50%. Drag each percentage card into the matching slot.',
    },
    // Confident 7: spot-misconception on reading 0.5 as 5%
    {
      id: 'ffdp-q14',
      type: 'spot-misconception',
      stem: 'Tom writes "0.5 as a percentage is 5% because the 5 is the only non-zero digit".',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. 0.5 means 5%.',
          isMisconception: true,
        },
        {
          text: 'In fact 0.5 is 50%, not 5%. Multiplying by 100 shifts each digit two columns to the left, so 0.5 becomes 50.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ffdp-mis-decimal-shift-by-ten',
    },
    // Confident 8: data-extraction style numeric (test score in context)
    {
      id: 'ffdp-q15',
      type: 'numeric-entry',
      stem: 'Aisha scored 17 out of 20 on a Sevenoaks spelling test. Write her score as a percentage. Enter your answer as a number without the per cent sign.',
      tier: 'confident',
      correctAnswer: 85,
      xpValue: 15,
      hint: 'Write 17/20, then scale to a denominator of 100. 20 x 5 = 100, so 17 x 5 = 85.',
    },
    // Challenge 1: Bond-style multi-step word problem (cricket survey)
    {
      id: 'ffdp-q16',
      type: 'multiple-choice',
      stem: 'A Manchester cricket club survey found that 24 of its 40 members prefer Test matches over Twenty20. Which row shows that result as a fraction in its simplest form, a decimal, and a percentage?',
      tier: 'challenge',
      options: [
        '24/40, 0.24, 24%',
        '3/5, 0.6, 60%',
        '3/5, 6.0, 60%',
        '6/10, 0.6, 6%',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Simplify 24/40 first by dividing top and bottom by 8 to reach 3/5. Then 3/5 is 0.6 as a decimal and 60% as a percentage.',
    },
    // Challenge 2: Bond-style word problem comparing forms
    {
      id: 'ffdp-q17',
      type: 'multiple-choice',
      stem: 'In a Tunbridge Wells Year 7 maths test, Aisha scored 17/20 and Liam scored 82%. Which statement is correct?',
      tier: 'challenge',
      options: [
        'Aisha scored higher because 17/20 is 85%, which is more than 82%.',
        'Liam scored higher because 82 is more than 17.',
        'They scored the same because both look close to 80%.',
        'You cannot compare scores in different forms.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'ffdp-mis-bigger-percent',
      hint: 'Convert 17/20 into a percentage by scaling to 100: 17 x 5 / 20 x 5 = 85/100 = 85%. Then compare with 82%.',
    },
    // Challenge 3: word problem requiring percent to decimal in context
    {
      id: 'ffdp-q18',
      type: 'numeric-entry',
      stem: 'A Dover football club scored 200 league goals last season. 45% of those goals came from set pieces. Use the decimal form of 45% to work out how many goals came from set pieces.',
      tier: 'challenge',
      correctAnswer: 90,
      unit: 'goals',
      xpValue: 25,
      misconceptionId: 'ffdp-mis-percent-as-multiplier',
      hint: '45% as a decimal is 0.45. Then 0.45 x 200 = 90 goals from set pieces.',
    },
    // Challenge 4: 1/3 recurring trap
    {
      id: 'ffdp-q19',
      type: 'multiple-choice',
      stem: 'Which statement about 1/3 is correct?',
      tier: 'challenge',
      options: [
        '1/3 is exactly 33%, since the per cent form rounds neatly.',
        '1/3 is exactly 0.3, since the digit on top matches the tenths column.',
        '1/3 is exactly 30%, by reading the bottom off the per cent sign.',
        '1/3 is 0.333... recurring, which is about 33.3%, not exactly 33%.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'ffdp-mis-third-as-thirty-three',
      hint: 'Divide 1 by 3 using short division. The 3s never stop, so 1/3 is a recurring decimal 0.333... and as a percentage that is 33.3...%, not 33%.',
    },
    // Challenge 5: multi-step survey problem with simplification
    {
      id: 'ffdp-q20',
      type: 'numeric-entry',
      stem: 'In a Lake District youth-hostel survey, 18 of 24 guests said they hiked every day. Write that result as a percentage. Enter your answer as a number without the per cent sign.',
      tier: 'challenge',
      correctAnswer: 75,
      xpValue: 25,
      hint: 'Simplify 18/24 by dividing top and bottom by 6 to reach 3/4. Then 3/4 scales to 75/100, which is 75%.',
    },
    // Challenge 6: Bond-style multi-step problem with mixed forms
    {
      id: 'ffdp-q21',
      type: 'multiple-choice',
      stem: 'A school in Sevenoaks has 200 pupils in Year 7. 3/5 of them walk to school and 25% cycle. The rest take the bus. How many pupils take the bus?',
      tier: 'challenge',
      options: ['20', '40', '30', '50'],
      correctIndex: 2,
      xpValue: 25,
      hint: '3/5 of 200 = 120 walk. 25% of 200 = 50 cycle. So 120 + 50 = 170, and 200 - 170 = 30 take the bus.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions, decimals and percentages" page, "Common mistake" callout on writing 1/4 as 25 with no decimal point.
    {
      id: 'ffdp-mis-stack-digits',
      description:
        'I write 1/4 as 25 in decimal form because I read the per cent value off without the decimal point.',
      triggerAnswer: 'stack-digits',
      correction:
        'Actually 1/4 is the same as 25/100, which as a decimal is 0.25. The 25 sits in the hundredths column, two places after the point.',
      reExplanation:
        'Picture a 10 by 10 grid as one whole. Shading 25 squares is 25 out of 100, which reads as 0.25 in decimal form and 25% in per cent form. The decimal point is what places the 25 in the hundredths column. Without it, 25 would mean twenty-five whole units.',
    },
    // Source: AQA GCSE Maths 8300 Foundation tier Examiners' Report, June 2023, commentary on a percentage to decimal conversion question where pupils divided by 10 instead of 100.
    {
      id: 'ffdp-mis-decimal-shift-by-ten',
      description:
        'I divide a percentage by 10 to make it a decimal, so 0.5 looks like 5%.',
      triggerAnswer: 'shift-by-ten',
      correction:
        'In fact you divide by 100, not 10, when moving from a percentage to a decimal. Each digit shifts two columns, not one.',
      reExplanation:
        '0.5 means five tenths, or 50 hundredths. Multiplying by 100 to find the per cent form gives 50, so 0.5 is 50%, not 5%. Going the other way, 5% as a decimal is 5 / 100 = 0.05, with the 5 in the hundredths column.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Foundation tier Examiners' Report, November 2022, commentary on a fraction to percentage conversion question where pupils left the answer as 20/100 without simplifying.
    {
      id: 'ffdp-mis-no-simplify',
      description:
        'I leave a fraction over 100 after converting from a percentage, so 20% stays as 20/100 instead of 1/5.',
      triggerAnswer: 'no-simplify',
      correction:
        'In fact a fraction in its simplest form divides top and bottom by their highest common factor. 20/100 simplifies to 1/5.',
      reExplanation:
        'Write the percentage over 100 first to get 20/100. The highest common factor of 20 and 100 is 20, so divide top and bottom by 20 to reach 1/5. Always check whether the numerator and denominator share a factor before stopping.',
    },
    // Source: NRICH Project, "Doughnut" task teacher notes (nrich.maths.org), commentary that pupils often treat 33% as exactly 1/3, when 1/3 is the recurring decimal 0.333... and so 33.3...%, not 33%.
    {
      id: 'ffdp-mis-third-as-thirty-three',
      description:
        'I think 1/3 is exactly 33%, so 33% is just another name for one third.',
      triggerAnswer: 'third-as-thirty-three',
      correction:
        'Actually 1/3 is 0.333... recurring, which is 33.333...%. Rounding to 33% loses a tiny amount each time.',
      reExplanation:
        'Divide 1 by 3 using short division: 10 tenths gives 3 carry 1, 10 hundredths gives 3 carry 1, and the pattern never ends. So 1/3 is 0.333... and as a percentage is 33.333...%. 33% is only an approximation; for an exact answer keep the fraction 1/3.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 5 "Fractions" by Hart, on pupils interpreting the per cent sign as multiplying the number by 100 rather than dividing by 100.
    {
      id: 'ffdp-mis-percent-as-multiplier',
      description:
        'I treat the per cent sign as multiplying the number by 100, so 8% becomes 800 or 0.8 instead of 0.08.',
      triggerAnswer: 'percent-as-times',
      correction:
        'In fact the per cent sign means "out of 100", so a percentage divides by 100. 8% as a decimal is 0.08, with the 8 in the hundredths column.',
      reExplanation:
        'Per cent means per hundred. So 8% is 8/100, which is 0.08 in decimal form, with the 8 sitting in the hundredths column. Multiplying 8 by 100 would give 800, but the per cent sign does the opposite: it scales the number down by a factor of 100.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Foundation tier Examiners' Report, summer 2023, commentary on a comparison question where pupils ranked 3/5 above 65% because the fraction looked smaller in writing.
    {
      id: 'ffdp-mis-bigger-percent',
      description:
        'I assume the form that looks more compact (like a fraction) must be the larger amount, regardless of the numbers.',
      triggerAnswer: 'compact-as-bigger',
      correction:
        'In fact you have to convert each value into the same form before comparing. Size depends on the numbers, not on the form they are written in.',
      reExplanation:
        'Convert each value into the same form first. 17/20 is the same as 85/100, which is 85%. So 17/20 beats 82% because 85 is more than 82. Never compare across forms by eye; always convert.',
    },
    // Authored, no external source: classroom-observed slip when pupils convert a decimal to a fraction and write the digits over the wrong power of ten, for example writing 0.45 as 45/10 instead of 45/100.
    {
      id: 'ffdp-mis-wrong-place-value',
      description:
        'When I write a decimal as a fraction, I use the wrong denominator, so 0.45 becomes 45/10 instead of 45/100.',
      triggerAnswer: 'wrong-place-value',
      correction:
        'Actually the denominator matches the place value of the last digit. Two decimal places means hundredths, so 0.45 is 45/100.',
      reExplanation:
        '0.45 has two digits after the point, so the last digit sits in the hundredths column. The denominator is 100, giving 45/100, which then simplifies to 9/20. For one decimal place use 10, for two use 100, for three use 1000, and so on.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsFdpConversionZoneNodes = [fractionsFdpConversion]
