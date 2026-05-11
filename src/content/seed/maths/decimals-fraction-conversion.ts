import type { SkillNode } from '@/types/content'

export const decimalsFractionConversion: SkillNode = {
  id: 'maths-decimals-fraction-conversion',
  title: 'Converting Between Decimals and Fractions',
  description:
    'Convert terminating decimals to fractions and back. Decimal place value tells you the denominator: one place gives tenths, two places gives hundredths, three places gives thousandths. Simplify by dividing by the highest common factor. Going back, divide the numerator by the denominator using short division.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'confident',
  prerequisites: ['maths-decimals-place-value', 'maths-fractions-simplify'],
  curriculum: {
    ks3Objective:
      "Define percentage as 'number of parts per hundred', interpret percentages and percentage changes as a fraction or a decimal; work interchangeably with terminating decimals and their corresponding fractions.",
    awardingBodies: {
      aqa: 'N10 Work interchangeably with terminating decimals and their corresponding fractions (such as 3.5 and 7/2 or 0.375 and 3/8) (GCSE Mathematics 8300)',
      edexcel: 'N10 Work interchangeably with terminating decimals and their corresponding fractions (GCSE Mathematics 1MA1)',
      ocr: '2.02a Equivalence between fractions, decimals and percentages (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'dfc-scene-fraction-wall',
      title: 'Equivalent Forms on the Fraction Wall',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it and see how 0.5 lines up with 5/10 and 1/2 on the wall.',
      data: {
        rows: [
          { denominator: 2, colour: '#22C55E' },
          { denominator: 4, colour: '#A855F7' },
          { denominator: 5, colour: '#F59E0B' },
          { denominator: 8, colour: '#14B8A6' },
          { denominator: 10, colour: '#3B82F6' },
          { denominator: 20, colour: '#EC4899' },
          { denominator: 100, colour: '#F97316' },
        ],
        equivalentSets: [
          { decimal: '0.5', forms: ['5/10', '1/2', '50/100'] },
          { decimal: '0.25', forms: ['25/100', '1/4'] },
          { decimal: '0.2', forms: ['2/10', '1/5', '20/100'] },
          { decimal: '0.375', forms: ['375/1000', '3/8'] },
          { decimal: '0.6', forms: ['6/10', '3/5', '60/100'] },
        ],
        note: 'Each row of the wall is split into the denominator. Bars of equal length name the same amount in different ways.',
      },
    },
    {
      id: 'dfc-scene-conversion-table',
      title: 'Common Conversions You Should Know by Heart',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal the matching decimal and fraction pair.',
      data: {
        viewBox: '0 0 600 400',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect x="20" y="20" width="560" height="360" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="60" font-family="system-ui, sans-serif" font-size="20" fill="#F8FAFC" text-anchor="middle" font-weight="600">Decimal and fraction pairs</text><line x1="300" y1="80" x2="300" y2="370" stroke="#475569" stroke-width="1" stroke-dasharray="4 4"/><text x="160" y="105" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Decimal</text><text x="440" y="105" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Fraction</text><text x="160" y="155" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">0.5</text><text x="440" y="155" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">1/2</text><text x="160" y="205" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">0.25</text><text x="440" y="205" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">1/4</text><text x="160" y="255" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">0.2</text><text x="440" y="255" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">1/5</text><text x="160" y="305" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">0.375</text><text x="440" y="305" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">3/8</text><text x="160" y="355" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">0.6</text><text x="440" y="355" font-family="ui-monospace, monospace" font-size="22" fill="#F8FAFC" text-anchor="middle">3/5</text></svg>`,
        hotspots: [
          {
            id: 'dfc-spot-half',
            x: 50,
            y: 39,
            label: '0.5 equals 1/2',
            description:
              'One decimal place gives tenths: 0.5 is 5/10. The HCF of 5 and 10 is 5, so simplify to 1/2.',
          },
          {
            id: 'dfc-spot-quarter',
            x: 50,
            y: 51,
            label: '0.25 equals 1/4',
            description:
              'Two decimal places gives hundredths: 0.25 is 25/100. The HCF of 25 and 100 is 25, so simplify to 1/4.',
          },
          {
            id: 'dfc-spot-fifth',
            x: 50,
            y: 64,
            label: '0.2 equals 1/5',
            description:
              'One decimal place gives tenths: 0.2 is 2/10. The HCF of 2 and 10 is 2, so simplify to 1/5.',
          },
          {
            id: 'dfc-spot-eighth',
            x: 50,
            y: 76,
            label: '0.375 equals 3/8',
            description:
              'Three decimal places gives thousandths: 0.375 is 375/1000. The HCF of 375 and 1000 is 125, so simplify to 3/8.',
          },
          {
            id: 'dfc-spot-three-fifths',
            x: 50,
            y: 88,
            label: '0.6 equals 3/5',
            description:
              'One decimal place gives tenths: 0.6 is 6/10. The HCF of 6 and 10 is 2, so simplify to 3/5.',
          },
        ],
      },
    },
    {
      id: 'dfc-scene-recipe',
      title: 'The Place-Value-Then-Simplify Recipe',
      type: 'diagram',
      instructions:
        'Read each row to see the recipe in action. Step one: count the decimal places to set the denominator. One place gives a denominator of 10, two places gives 100, three places gives 1000. Step two: write the digits after the point as the numerator. Step three: divide the top and bottom by their highest common factor to simplify. For 0.45 the recipe gives 45/100, then dividing by HCF 5 simplifies to 9/20.',
      data: {
        steps: [
          {
            decimal: '0.5',
            places: 1,
            unsimplified: '5/10',
            hcf: 5,
            simplified: '1/2',
          },
          {
            decimal: '0.45',
            places: 2,
            unsimplified: '45/100',
            hcf: 5,
            simplified: '9/20',
          },
          {
            decimal: '0.375',
            places: 3,
            unsimplified: '375/1000',
            hcf: 125,
            simplified: '3/8',
          },
          {
            decimal: '0.04',
            places: 2,
            unsimplified: '4/100',
            hcf: 4,
            simplified: '1/25',
          },
        ],
        rule: 'Places after the point set the denominator (10, 100, 1000). Digits after the point form the numerator. Simplify by the HCF.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'dfc-worked-1',
      title: 'Convert 0.375 to a fraction in its simplest form',
      steps: [
        {
          explanation:
            'Count the decimal places in 0.375 to set the denominator.',
          maths: '0.375 has 3 decimal places, so denominator = 1000',
        },
        {
          explanation:
            'Write the digits after the point as the numerator over that denominator.',
          maths: '0.375 = 375/1000',
        },
        {
          explanation:
            'Find the highest common factor of 375 and 1000. Both share a factor of 125.',
          maths: 'HCF(375, 1000) = 125',
        },
        {
          explanation:
            'Divide the numerator and denominator by the HCF to simplify.',
          maths: '375 / 125 = 3, 1000 / 125 = 8',
        },
        {
          explanation:
            'Write the simplified fraction. This is the answer in its simplest form.',
          maths: '0.375 = 3/8',
        },
      ],
    },
    {
      id: 'dfc-worked-2',
      title: 'Convert 7/20 to a decimal (one step is hidden for you to fill in)',
      steps: [
        {
          explanation:
            'To turn a fraction into a decimal, divide the numerator by the denominator.',
          maths: '7/20 = 7 / 20',
        },
        {
          explanation:
            'Set up the short division. 7 is smaller than 20, so the whole number part is 0 and we work in tenths.',
        },
        {
          explanation:
            'Carry the 7 to make 70 tenths. Divide 70 by 20: this gives 3 remainder 10.',
          maths: '70 / 20 = 3 r 10',
        },
        {
          explanation:
            'Pad a hundredths zero. Carry the remainder 10 to make 100 hundredths. Divide 100 by 20.',
          maths: '100 / 20 = 5 r 0',
        },
        {
          explanation:
            'Read the quotient digits with the decimal point in place. The remainder is 0, so the conversion terminates.',
          maths: '7/20 = 0.35',
        },
      ],
    },
  ],
  questions: [
    // Core 1: basic 1-place decimal to fraction (recognise 0.5)
    {
      id: 'dfc-q1',
      type: 'multiple-choice',
      stem: 'Which fraction is equal to 0.5?',
      tier: 'core',
      options: ['1/5', '1/2', '5/100', '2/5'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'dfc-mis-half-as-fifth',
      hint: '0.5 has one decimal place, so the denominator is 10. That gives 5/10, which simplifies to 1/2.',
    },
    // Core 2: 2-place decimal to fraction
    {
      id: 'dfc-q2',
      type: 'multiple-choice',
      stem: 'Write 0.25 as a fraction in its simplest form.',
      tier: 'core',
      options: ['25/10', '1/4', '2/5', '25/1000'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'dfc-mis-wrong-denominator',
      hint: 'Two decimal places gives a denominator of 100. So 0.25 = 25/100, which simplifies by HCF 25 to 1/4.',
    },
    // Core 3: fraction to decimal, simple tenths
    {
      id: 'dfc-q3',
      type: 'numeric-entry',
      stem: 'Write 3/10 as a decimal.',
      tier: 'core',
      correctAnswer: 0.3,
      xpValue: 10,
      hint: 'A denominator of 10 means the digit sits in the tenths place.',
    },
    // Core 4: fraction to decimal via short division (1/4)
    {
      id: 'dfc-q4',
      type: 'multiple-choice',
      stem: 'What is 1/4 as a decimal?',
      tier: 'core',
      options: ['0.14', '0.4', '0.25', '0.125'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dfc-mis-divide-wrong-way',
      hint: 'Divide 1 by 4 using short division. 1 / 4 = 0 r 1, then 10 / 4 = 2 r 2, then 20 / 4 = 5.',
    },
    // Core 5: 2-place decimal that needs simplifying
    {
      id: 'dfc-q5',
      type: 'numeric-entry',
      stem: 'Write 0.45 as a fraction in its simplest form, then enter just the denominator.',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      misconceptionId: 'dfc-mis-stop-at-hundredths',
      hint: '0.45 = 45/100. The HCF of 45 and 100 is 5, so divide: 45/5 = 9 and 100/5 = 20. Enter the denominator.',
    },
    // Core 6: spot-misconception: simplifying after conversion
    {
      id: 'dfc-q6',
      type: 'spot-misconception',
      stem: 'Aisha writes 0.6 as a fraction and stops at 6/10. Read the two responses and click the one that is unsound.',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is finished. 6/10 is correct so she does not need to do anything else.',
          isMisconception: true,
        },
        {
          text: 'Aisha has not finished. 6/10 is correct so far, but the HCF of 6 and 10 is 2, so simplify: 6/2 = 3 and 10/2 = 5. The answer in its simplest form is 3/5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dfc-mis-no-simplify',
    },
    // Core 7: drag-order matching 4 decimals to fractions
    {
      id: 'dfc-q7',
      type: 'drag-order',
      stem: 'Drag the fractions into the order that matches these decimals: 0.5, 0.25, 0.2, 0.75.',
      tier: 'core',
      items: ['3/4', '1/5', '1/2', '1/4'],
      correctOrder: [2, 3, 1, 0],
      xpValue: 20,
      hint: '0.5 = 1/2, 0.25 = 1/4, 0.2 = 1/5, 0.75 = 3/4. Reorder the items to match the decimals listed in the stem.',
    },
    // Confident 1: 3-place decimal to fraction (0.375)
    {
      id: 'dfc-q8',
      type: 'multiple-choice',
      stem: 'Write 0.375 as a fraction in its simplest form.',
      tier: 'confident',
      options: ['375/1000', '3/8', '37/100', '3/80'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dfc-mis-no-simplify',
      hint: 'Three decimal places gives 375/1000. The HCF of 375 and 1000 is 125, so simplify: 375/125 = 3 and 1000/125 = 8.',
    },
    // Confident 2: fraction to decimal via short division (3/8)
    {
      id: 'dfc-q9',
      type: 'numeric-entry',
      stem: 'Write 3/8 as a decimal.',
      tier: 'confident',
      correctAnswer: 0.375,
      xpValue: 15,
      hint: 'Divide 3 by 8. 30 / 8 = 3 r 6, 60 / 8 = 7 r 4, 40 / 8 = 5 r 0. The quotient is 0.375.',
    },
    // Confident 3: spot-misconception: wrong denominator for place count
    {
      id: 'dfc-q10',
      type: 'spot-misconception',
      stem: 'Liam writes 0.07 as a fraction. Read the two responses and click the one that is unsound.',
      tier: 'confident',
      statements: [
        {
          text: '0.07 = 7/10 because the digit after the point goes over 10.',
          isMisconception: true,
        },
        {
          text: '0.07 = 7/100. There are two decimal places, so the denominator is 100, not 10. The 7 sits in the hundredths place.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dfc-mis-wrong-denominator',
    },
    // Confident 4: missing-step worked example for 7/20 to decimal
    {
      id: 'dfc-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step for converting 7/20 to a decimal by short division.',
      tier: 'confident',
      steps: [
        'Set up the division: 7 divided by 20. Since 7 is less than 20, the whole part is 0.',
        'Carry 7 across to make 70 tenths. Divide: 70 / 20 = 3 r 10.',
        null,
        'Read the answer with the decimal point in place: 7/20 = 0.35.',
      ],
      missingStepIndex: 2,
      correctStep: 'Pad a hundredths zero so the remainder 10 becomes 100. Divide: 100 / 20 = 5 r 0.',
      xpValue: 20,
      hint: 'The hidden step pads a zero after the remainder of 10 and divides the new value by 20.',
    },
    // Confident 5: word problem with money
    {
      id: 'dfc-q12',
      type: 'multiple-choice',
      stem: 'A Manchester corner shop sells 0.4 kg of cheese. What fraction of a kilogram is that, in its simplest form?',
      tier: 'confident',
      options: ['4/100', '1/4', '4/5', '2/5'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'dfc-mis-no-simplify',
      hint: '0.4 has one decimal place, so 0.4 = 4/10. The HCF of 4 and 10 is 2, so simplify to 2/5.',
    },
    // Confident 6: numeric-entry fraction to decimal (9/20)
    {
      id: 'dfc-q13',
      type: 'numeric-entry',
      stem: 'Write 9/20 as a decimal.',
      tier: 'confident',
      correctAnswer: 0.45,
      xpValue: 15,
      hint: 'Divide 9 by 20. 90 / 20 = 4 r 10, then 100 / 20 = 5 r 0. The quotient is 0.45.',
    },
    // Confident 7: test mark word problem
    {
      id: 'dfc-q14',
      type: 'multiple-choice',
      stem: 'Maya scores 17 out of 20 on a school test. What is her score as a decimal of the full mark?',
      tier: 'confident',
      options: ['0.17', '0.85', '0.875', '1.7'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dfc-mis-divide-wrong-way',
      hint: 'Divide 17 by 20, not 20 by 17. 17 / 20 = 0.85.',
    },
    // Confident 8: spot the percentage notation slip
    {
      id: 'dfc-q15',
      type: 'multiple-choice',
      stem: 'Which of these correctly writes 0.6 as a fraction in its simplest form?',
      tier: 'confident',
      options: ['60/100', '60%', '3/5', '6%'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dfc-mis-percent-notation',
      hint: '0.6 = 6/10 = 3/5 after simplifying. A percent symbol means "out of 100", which is a different notation.',
    },
    // Challenge 1: Bond-style multi-step word problem with metres
    {
      id: 'dfc-q16',
      type: 'numeric-entry',
      stem: 'A length of fabric measures 0.625 metres. Liam needs to write this as a fraction of a metre in its simplest form, then add it to 1/4 of a metre of trim. How much fabric and trim has he in total, as a decimal of a metre?',
      tier: 'challenge',
      correctAnswer: 0.875,
      unit: 'metres',
      xpValue: 25,
      hint: '0.625 = 625/1000, which simplifies by HCF 125 to 5/8. Then 5/8 + 1/4 = 5/8 + 2/8 = 7/8 = 0.875.',
    },
    // Challenge 2: Bond-style multi-step with money
    {
      id: 'dfc-q17',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bakery sells loaves for £1.60 each. Aisha pays £1.20 because she has a 1/4 off voucher. Has the bakery applied the voucher correctly?',
      tier: 'challenge',
      options: [
        'Yes, the voucher takes £0.40 off, which is 1/4 of £1.60.',
        'No, 1/4 of £1.60 is £0.32, so the price should be £1.28.',
        'No, 1/4 of £1.60 is £0.25, so the price should be £1.35.',
        'Yes, but only because 1/4 means 0.4 of the original price.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'dfc-mis-half-as-fifth',
      hint: '1/4 = 0.25 as a decimal. Then 0.25 x £1.60 = £0.40 off, giving £1.20.',
    },
    // Challenge 3: multi-step with test marks and ordering
    {
      id: 'dfc-q18',
      type: 'multiple-choice',
      stem: 'In three maths assessments Maya scores 3/5, 0.55 and 11/20 (each out of full marks). Which assessment did she score highest on?',
      tier: 'challenge',
      options: ['3/5', '0.55', '11/20', 'They are all equal.'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Convert each to a decimal: 3/5 = 0.6, 0.55 stays, 11/20 = 0.55. So 3/5 is highest.',
    },
    // Challenge 4: drag-order matching decimals to fractions (full 4-pair)
    {
      id: 'dfc-q19',
      type: 'drag-order',
      stem: 'Drag the fractions into the order that matches these decimals: 0.375, 0.6, 0.04, 0.125.',
      tier: 'challenge',
      items: ['1/8', '3/8', '3/5', '1/25'],
      correctOrder: [1, 2, 3, 0],
      xpValue: 25,
      hint: '0.375 = 3/8, 0.6 = 3/5, 0.04 = 4/100 = 1/25, 0.125 = 125/1000 = 1/8.',
    },
    // Challenge 5: word problem requiring fraction-to-decimal then arithmetic
    {
      id: 'dfc-q20',
      type: 'numeric-entry',
      stem: 'A Dover supermarket prices apples at £0.80 per kilogram. Aisha buys 3/4 of a kilogram. How much does she pay, in pounds?',
      tier: 'challenge',
      correctAnswer: 0.6,
      unit: 'pounds',
      xpValue: 25,
      hint: '3/4 = 0.75 as a decimal. Then 0.75 x £0.80 = £0.60.',
    },
    // Challenge 6: Bond-style with mixed forms and an inferred step
    {
      id: 'dfc-q21',
      type: 'multiple-choice',
      stem: 'A Lake District guide tells walkers that the trail is 7/8 of a kilometre. A sign earlier on the path showed 0.85 km remaining. Which distance is greater, and by how much?',
      tier: 'challenge',
      options: [
        '7/8 km is greater by 0.025 km.',
        '0.85 km is greater by 0.025 km.',
        'They are the same distance.',
        '7/8 km is greater by 0.125 km.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: '7/8 = 0.875 as a decimal. Then 0.875 minus 0.85 = 0.025 km.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions, Decimals and Percentages" page, "Common mistake" callout warning that 0.5 is one half, not one fifth, because the single digit after the point sits in the tenths column.
    {
      id: 'dfc-mis-half-as-fifth',
      description:
        'I think 0.5 is the same as 1/5 because there is a 5 in the decimal.',
      triggerAnswer: 'half-as-fifth',
      correction:
        'Actually 0.5 has one decimal place, so it is 5/10, which simplifies to 1/2.',
      reExplanation:
        '0.5 means 5 tenths. Write that as a fraction: 5/10. The HCF of 5 and 10 is 5, so divide top and bottom by 5 to get 1/2. The 5 in 0.5 is the count of tenths, not fifths. A fifth, 1/5, is 0.2 as a decimal because 1 divided by 5 is 0.2.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a 0.07 conversion question where pupils wrote 7/10 by using a denominator of 10 regardless of the number of decimal places.
    {
      id: 'dfc-mis-wrong-denominator',
      description:
        'I always put 10 as the denominator when a decimal turns into a fraction, no matter how many digits come after the point.',
      triggerAnswer: 'wrong-denominator',
      correction:
        'In fact the denominator matches the number of decimal places. One place gives 10, two places gives 100, three places gives 1000.',
      reExplanation:
        '0.07 has two decimal places, so the denominator is 100, not 10. Write it as 7/100. The 7 sits in the hundredths column. Compare with 0.7: one decimal place, denominator 10, so 7/10. Counting places tells you which power of 10 to use. The rule is the same idea as place value: tenths, hundredths, thousandths.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a 0.6 conversion question where pupils left the answer as 6/10 without simplifying.
    {
      id: 'dfc-mis-no-simplify',
      description:
        'I write a decimal as a fraction with the right denominator but stop before simplifying.',
      triggerAnswer: 'no-simplify',
      correction:
        'Actually you must simplify by the highest common factor to give the fraction in its simplest form.',
      reExplanation:
        '0.6 = 6/10 is correct so far, but the HCF of 6 and 10 is 2. Divide top and bottom by 2: 6/2 = 3 and 10/2 = 5, giving 3/5. The simplest form has no common factor between the numerator and denominator other than 1. 6/10 and 3/5 name the same amount, but exams expect the simplified answer.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a fraction-to-decimal question where pupils divided the denominator by the numerator instead of the numerator by the denominator.
    {
      id: 'dfc-mis-divide-wrong-way',
      description:
        'To turn a fraction into a decimal I divide the bigger number by the smaller one, so 1/4 becomes 4 divided by 1 = 4.',
      triggerAnswer: 'divide-wrong-way',
      correction:
        'In fact you always divide the numerator by the denominator, top by bottom, even when the top is smaller.',
      reExplanation:
        'For 1/4, divide 1 by 4. Since 1 is smaller than 4, the answer begins with 0. Then 10 / 4 = 2 r 2, then 20 / 4 = 5. So 1/4 = 0.25. Dividing 4 by 1 would give 4, which is the reciprocal idea, not the decimal value. A fraction between 0 and 1 always gives a decimal between 0 and 1.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator allowed), commentary on a 0.45 conversion question where pupils wrote 45/100 and stopped, when the question asked for the simplest form.
    {
      id: 'dfc-mis-stop-at-hundredths',
      description:
        'For two-place decimals I write the digits over 100 and call that done, even when the fraction can be simplified.',
      triggerAnswer: 'stop-at-hundredths',
      correction:
        'Actually 45/100 simplifies. The HCF of 45 and 100 is 5, so divide both by 5 to get 9/20.',
      reExplanation:
        'For 0.45, two decimal places gives 45/100. Check for a common factor: both 45 and 5 share 5, and so does 100. Divide: 45/5 = 9 and 100/5 = 20. The simplest form is 9/20. A fraction is in its simplest form only when the numerator and denominator share no factor greater than 1. Always do the simplify step at the end.',
    },
    // Source: CGP KS3 Maths Study Guide (MHR41), Section 1 Number, "Fractions, Decimals and Percentages" page, "Common mistake" callout noting that the percent sign and the decimal form are different notations and pupils sometimes mix the two.
    {
      id: 'dfc-mis-percent-notation',
      description:
        'I think 0.6 and 60% are the same fraction, so I can write either one as my final answer.',
      triggerAnswer: 'percent-notation',
      correction:
        'In fact 0.6 and 60% have the same value, but neither is a fraction. The fraction form is 3/5 once simplified.',
      reExplanation:
        '0.6 is a decimal. 60% means 60 out of 100, written 60/100. Both have the same value as the fraction 3/5 in its simplest form. If a question asks for a fraction, write 3/5, not 60% or 0.6. Each form has a place: fractions for exact parts, decimals for calculator work, percentages for comparing rates. The conversion route is digits over the place-value denominator, then simplify.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsFractionConversionZoneNodes = [decimalsFractionConversion]
