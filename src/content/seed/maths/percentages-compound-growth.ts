import type { SkillNode } from '@/types/content'

export const percentagesCompoundGrowth: SkillNode = {
  id: 'maths-percentages-compound-growth',
  title: 'Compound Interest and Compound Growth/Decay',
  description:
    'Apply the compound multiplier formula New = Original x (multiplier)^n to repeated percentage growth and decay over several periods. Use multiplier = 1 + r for growth (savings ISAs, population, inflation) and multiplier = 1 - r for decay (car depreciation, half-life style decline). Contrast compound with simple interest, and decide which model fits a real situation. Bond 11+ stretch: extract the rate, the number of periods, and any hidden steps from a 2 to 3 sentence word problem.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'challenge',
  prerequisites: ['maths-percentages-repeated-change'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including percentage increase, decrease and original value problems and simple interest, including in financial mathematics.',
    awardingBodies: {
      aqa: 'R9 Solve problems involving compound interest and other growth and decay problems (GCSE Mathematics 8300)',
      edexcel: 'R16 Set up, solve and interpret answers in growth and decay problems, including compound interest (GCSE Mathematics 1MA1)',
      ocr: '6.03c Compound interest, growth and decay including using the multiplier (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pcg-scene-stacking-bars',
      title: 'A Stack of Compounding Years',
      type: 'labelled-diagram',
      instructions:
        'Click each year marker to see how a £500 ISA grows at 5% compound interest. Each year multiplies the previous balance by 1.05, not by the same fixed £25.',
      data: {
        viewBox: '0 0 600 320',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect x="20" y="20" width="560" height="280" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">£500 at 5% compound interest, year by year</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="14" fill="#F8FAFC" text-anchor="middle"><rect x="60" y="220" width="60" height="50" fill="#3B82F6"/><text x="90" y="290">Year 0</text><text x="90" y="210">£500.00</text><rect x="150" y="215" width="60" height="55" fill="#22C55E"/><text x="180" y="290">Year 1</text><text x="180" y="205">£525.00</text><rect x="240" y="209" width="60" height="61" fill="#A855F7"/><text x="270" y="290">Year 2</text><text x="270" y="199">£551.25</text><rect x="330" y="203" width="60" height="67" fill="#F59E0B"/><text x="360" y="290">Year 3</text><text x="360" y="193">£578.81</text><rect x="420" y="196" width="60" height="74" fill="#EC4899"/><text x="450" y="290">Year 4</text><text x="450" y="186">£607.75</text></g><text x="300" y="80" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8" text-anchor="middle">Each bar is the previous bar multiplied by 1.05.</text></svg>`,
        hotspots: [
          {
            id: 'pcg-spot-year0',
            x: 15,
            y: 70,
            label: 'Year 0: £500.00',
            description: 'The original deposit. No interest has been paid yet.',
          },
          {
            id: 'pcg-spot-year1',
            x: 30,
            y: 70,
            label: 'Year 1: £525.00',
            description: '500 x 1.05 = 525. The first year of interest is £25.',
          },
          {
            id: 'pcg-spot-year2',
            x: 45,
            y: 70,
            label: 'Year 2: £551.25',
            description: '525 x 1.05 = 551.25. The second year pays interest on the £525 balance, not on the original £500, which is why the interest jumps to £26.25.',
          },
          {
            id: 'pcg-spot-year3',
            x: 60,
            y: 70,
            label: 'Year 3: £578.81',
            description: '551.25 x 1.05 = 578.8125. Compound interest paid £27.56 this year. The yearly interest keeps growing as the balance grows.',
          },
          {
            id: 'pcg-spot-year4',
            x: 75,
            y: 70,
            label: 'Year 4: £607.75',
            description: '578.81 x 1.05 = 607.75. Equivalent to 500 x 1.05^4 in one step.',
          },
        ],
      },
    },
    {
      id: 'pcg-scene-formula',
      title: 'The Compound Formula in One Step',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see how the four powers of the multiplier 1.05 grow. The full balance after n years is the original amount multiplied by 1.05 raised to the power n.',
      data: {
        rows: [
          { denominator: 1, colour: '#3B82F6', shaded: 1, label: '1.05^0 = 1.0000 (start)' },
          { denominator: 1, colour: '#22C55E', shaded: 1, label: '1.05^1 = 1.0500 (1 year)' },
          { denominator: 1, colour: '#A855F7', shaded: 1, label: '1.05^2 = 1.1025 (2 years)' },
          { denominator: 1, colour: '#F59E0B', shaded: 1, label: '1.05^3 = 1.1576 (3 years)' },
          { denominator: 1, colour: '#EC4899', shaded: 1, label: '1.05^4 = 1.2155 (4 years)' },
        ],
        notes:
          'Compound formula: New = Original x (multiplier)^n. For growth the multiplier is 1 + r, for decay it is 1 - r, where r is the rate as a decimal. So £500 after 4 years at 5% compound is 500 x 1.2155 = £607.75 in a single step.',
      },
    },
    {
      id: 'pcg-scene-simple-vs-compound',
      title: 'Compound versus Simple Interest, Side by Side',
      type: 'diagram',
      instructions:
        'Read each row to see how simple and compound interest on a £1,000 ISA at 5% per year diverge. Simple interest pays a flat £50 each year on the original £1,000, so the totals are £1,050, £1,100, £1,150. Compound interest pays £50 in year 1 (5% of £1,000), £52.50 in year 2 (5% of £1,050), £55.13 in year 3 (5% of £1,102.50). The two methods agree at the end of year 1 and drift apart from year 2 onwards. The longer the time, the bigger the gap.',
      data: {
        principal: 1000,
        rate: 0.05,
        rows: [
          { year: 1, simpleTotal: 1050, compoundTotal: 1050, gap: 0 },
          { year: 2, simpleTotal: 1100, compoundTotal: 1102.5, gap: 2.5 },
          { year: 3, simpleTotal: 1150, compoundTotal: 1157.63, gap: 7.63 },
          { year: 4, simpleTotal: 1200, compoundTotal: 1215.51, gap: 15.51 },
          { year: 5, simpleTotal: 1250, compoundTotal: 1276.28, gap: 26.28 },
        ],
        notes:
          'Compound interest pays interest on the interest as well as on the original deposit. Simple interest only pays on the original. The gap grows year on year.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pcg-worked-1',
      title: '£500 in a 5% compound interest ISA for 3 years',
      steps: [
        {
          explanation:
            'Identify the type of change and the multiplier. 5% growth gives multiplier 1 + 0.05 = 1.05.',
          maths: 'multiplier = 1.05',
        },
        {
          explanation:
            'Identify the number of periods. The money is in the ISA for 3 years, so n = 3.',
          maths: 'n = 3',
        },
        {
          explanation:
            'Apply the compound formula in one step: New = Original x (multiplier)^n.',
          maths: 'New = 500 x 1.05^3',
        },
        {
          explanation:
            'Work out 1.05^3 step by step. 1.05 x 1.05 = 1.1025, then 1.1025 x 1.05 = 1.157625.',
          maths: '1.05^3 = 1.157625',
        },
        {
          explanation:
            'Multiply by the original. 500 x 1.157625 = 578.8125.',
          maths: '500 x 1.157625 = 578.8125',
        },
        {
          explanation:
            'Round to the nearest penny. The closing balance is £578.81. The compound interest earned is £578.81 minus £500 = £78.81. Simple interest at 5% for 3 years would have paid only £75, so compound has earned £3.81 more.',
          maths: 'balance = £578.81, interest = £78.81',
        },
      ],
    },
    {
      id: 'pcg-worked-2',
      title: 'A second-hand Mini loses 12% in value each year for 4 years (missing step)',
      steps: [
        {
          explanation:
            'Identify the type of change. Depreciation is decay, so the multiplier is 1 - 0.12 = 0.88.',
          maths: 'multiplier = 0.88',
        },
        {
          explanation:
            'Identify the number of periods. The car loses value for 4 years, so n = 4.',
          maths: 'n = 4',
        },
        {
          explanation:
            'Apply the compound formula. The car was bought for £9,000.',
          maths: 'New = 9000 x 0.88^4',
        },
        {
          explanation:
            'Work out 0.88^4. 0.88^2 = 0.7744. Then 0.7744 x 0.7744 = 0.59969536, which rounds to 0.5997.',
          maths: '0.88^4 = 0.59969536',
        },
        {
          explanation:
            'Multiply by the original price to find the value after 4 years.',
          maths: '9000 x 0.5997 = 5397.26',
        },
        {
          explanation:
            'Round to the nearest pound. The car is worth £5,397 after 4 years. It has lost £3,603 in value, which is much less than 4 lots of 12% of £9,000 (£4,320), because each year of decay acts on a smaller balance than the year before.',
          maths: 'value = £5,397',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pcg-q1',
      type: 'multiple-choice',
      stem: 'A savings account pays 5% compound interest per year. Which is the correct annual multiplier?',
      tier: 'core',
      options: ['0.05', '1.05', '0.95', '5.00'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'For growth at rate r, the multiplier is 1 + r. So 5% growth gives 1 + 0.05 = 1.05.',
      misconceptionId: 'pcg-mis-percent-as-multiplier',
    },
    {
      id: 'pcg-q2',
      type: 'numeric-entry',
      stem: '£100 is invested at 10% compound interest per year. What is the balance after 1 year, in pounds?',
      tier: 'core',
      correctAnswer: 110,
      unit: 'pounds',
      xpValue: 10,
      hint: 'New balance = 100 x 1.10 = 110. After one period, compound and simple interest agree.',
    },
    {
      id: 'pcg-q3',
      type: 'multiple-choice',
      stem: 'A used car depreciates by 12% each year. Which is the correct annual multiplier?',
      tier: 'core',
      options: ['1.12', '0.12', '0.88', '0.12 x n'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Depreciation is decay, so the multiplier is 1 - r. 1 - 0.12 = 0.88.',
      misconceptionId: 'pcg-mis-decay-as-growth',
    },
    {
      id: 'pcg-q4',
      type: 'numeric-entry',
      stem: '£200 is invested at 5% compound interest per year. What is the balance after 2 years, in pounds?',
      tier: 'core',
      correctAnswer: 220.5,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 10,
      hint: '200 x 1.05^2 = 200 x 1.1025 = 220.50.',
    },
    {
      id: 'pcg-q5',
      type: 'multiple-choice',
      stem: 'A starting amount P grows at rate r per period for n periods. Which expression gives the final amount?',
      tier: 'core',
      options: [
        'P + r x n',
        'P x r x n',
        'P x (1 + r) x n',
        'P x (1 + r)^n',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Compound growth uses the multiplier (1 + r) raised to the power n, not multiplied by n.',
      misconceptionId: 'pcg-mis-multiplier-times-n',
    },
    {
      id: 'pcg-q6',
      type: 'spot-misconception',
      stem: 'Liam invests £400 at 5% interest. He writes "After 2 years I have earned 5% twice on £400, so the interest is 10% of £400 = £40, and my balance is £440."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Compound interest over 2 years at 5% per year is the same as a single 10% gain on the original.',
          isMisconception: true,
        },
        {
          text: 'In fact Liam has used simple interest, not compound. Compound interest at 5% for 2 years uses the multiplier 1.05^2 = 1.1025, giving 400 x 1.1025 = £441. The extra £1 is the interest earned in year 2 on the £20 of year-1 interest.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pcg-mis-simple-instead-of-compound',
    },
    {
      id: 'pcg-q7',
      type: 'multiple-choice',
      stem: 'A Halifax cash ISA pays 4% compound interest per year. £500 is deposited and left untouched for 3 years. What is the closing balance?',
      tier: 'confident',
      options: ['£562.43', '£560.00', '£612.00', '£558.40'],
      correctIndex: 0,
      xpValue: 15,
      hint: '500 x 1.04^3 = 500 x 1.124864 = 562.432. Round to the nearest penny: £562.43.',
    },
    {
      id: 'pcg-q8',
      type: 'numeric-entry',
      stem: '£1,000 is placed in a 3% compound interest savings account for 2 years. How much COMPOUND INTEREST has been earned, in pounds?',
      tier: 'confident',
      correctAnswer: 60.9,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 15,
      hint: 'Closing balance = 1000 x 1.03^2 = 1000 x 1.0609 = 1060.90. Interest = 1060.90 minus 1000 = 60.90.',
      misconceptionId: 'pcg-mis-interest-includes-principal',
    },
    {
      id: 'pcg-q9',
      type: 'missing-step',
      stem: 'Fill in the missing step. A second-hand Ford depreciates by 20% per year. The car costs £6,000 new. Find its value after 3 years.',
      tier: 'confident',
      steps: [
        'Identify the type of change: depreciation is decay, so multiplier = 1 - 0.20 = 0.80.',
        'Apply the compound formula: value = 6000 x 0.80^3.',
        null,
        'So the car is worth £3,072 after 3 years. The car has lost £2,928 of value.',
      ],
      missingStepIndex: 2,
      correctStep: 'Work out 0.80^3 = 0.512, then 6000 x 0.512 = 3072.',
      xpValue: 20,
    },
    {
      id: 'pcg-q10',
      type: 'multiple-choice',
      stem: 'A van bought for £10,000 loses 15% of its value each year. What is the van worth after 2 years?',
      tier: 'confident',
      options: ['£7,000', '£7,225', '£8,500', '£8,650'],
      correctIndex: 1,
      xpValue: 15,
      hint: '10000 x 0.85^2 = 10000 x 0.7225 = 7,225.',
      misconceptionId: 'pcg-mis-decay-as-growth',
    },
    {
      id: 'pcg-q11',
      type: 'numeric-entry',
      stem: 'In a Year 8 biology experiment, a sample of bacteria doubles every hour. The sample starts with 200 bacteria. How many bacteria are there after 4 hours?',
      tier: 'core',
      correctAnswer: 3200,
      unit: 'bacteria',
      xpValue: 15,
      hint: 'Doubling is a multiplier of 2. 200 x 2^4 = 200 x 16 = 3200.',
    },
    {
      id: 'pcg-q12',
      type: 'spot-misconception',
      stem: 'Maya works out the value of a £5,000 car that depreciates by 10% per year over 3 years. She writes "value = 5000 x 1.10^3 = £6,655".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. Depreciation uses (1 + r) raised to the power of n.',
          isMisconception: true,
        },
        {
          text: 'In fact depreciation is decay, not growth, so the multiplier is 1 - r = 0.90, not 1.10. The correct value is 5000 x 0.90^3 = 5000 x 0.729 = £3,645. Maya has made the car worth more after losing value, which cannot be right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pcg-mis-decay-as-growth',
    },
    {
      id: 'pcg-q13',
      type: 'multiple-choice',
      stem: 'The population of a Yorkshire market town grows by 2% per year. The current population is 5,000 people. What will the population be after 3 years, to the nearest whole person?',
      tier: 'confident',
      options: ['5,300', '5,150', '5,306', '6,061'],
      correctIndex: 2,
      xpValue: 15,
      hint: '5000 x 1.02^3 = 5000 x 1.061208 = 5,306.04. Round down to whole people.',
      misconceptionId: 'pcg-mis-multiplier-times-n',
    },
    {
      id: 'pcg-q14',
      type: 'drag-order',
      stem: 'The same £100 is invested at 5% compound interest per year. Drag the balances at different years into order from smallest to largest.',
      tier: 'confident',
      items: [
        'Balance after 3 years',
        'Balance after 1 year',
        'Balance after 4 years',
        'Balance after 2 years',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Year 1: £105.00. Year 2: £110.25. Year 3: £115.76. Year 4: £121.55. Order smallest to largest: year 1, year 2, year 3, year 4.',
    },
    {
      id: 'pcg-q15',
      type: 'slider-explore',
      stem: 'Move the slider to set the number of years. £1,000 is in a 6% compound interest ISA. Find the smallest whole number of years that takes the balance above £1,300.',
      tier: 'confident',
      min: 1,
      max: 10,
      step: 1,
      correctRange: [5, 5],
      label: 'Number of years n',
      xpValue: 20,
      hint: '1000 x 1.06^4 = 1262.48 (too low). 1000 x 1.06^5 = 1338.23 (above £1,300). So n = 5.',
    },
    {
      id: 'pcg-q16',
      type: 'multiple-choice',
      stem: 'Aisha invests £400 in a high-street ISA paying 4% compound interest per year. After 3 years she withdraws the whole balance and spends 25% of it on a school trip. How much money does she have left, to the nearest pound?',
      tier: 'challenge',
      options: ['£300', '£316', '£331', '£337'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Balance after 3 years: 400 x 1.04^3 = 449.95. Spending 25% leaves 75%: 449.95 x 0.75 = 337.46. Round to £337.',
      misconceptionId: 'pcg-mis-simple-instead-of-compound',
    },
    {
      id: 'pcg-q17',
      type: 'numeric-entry',
      stem: 'A used car worth £8,000 depreciates by 15% in its first year and by 10% in each year after. What is its value at the end of 3 years, to the nearest pound?',
      tier: 'challenge',
      correctAnswer: 5508,
      tolerance: 1,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Year 1: 8000 x 0.85 = 6800. Year 2: 6800 x 0.90 = 6120. Year 3: 6120 x 0.90 = 5508.',
      misconceptionId: 'pcg-mis-rounding-each-step',
    },
    {
      id: 'pcg-q18',
      type: 'numeric-entry',
      stem: 'A flat in Sevenoaks worth £250,000 rises in value by 5% compound per year for 4 years. The owner then pays a 2% estate agent fee on the final value when selling. How much money does the seller receive, to the nearest pound?',
      tier: 'challenge',
      correctAnswer: 297799,
      tolerance: 2,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Final value: 250000 x 1.05^4 = 250000 x 1.21550625 = 303,876.56. Estate agent fee leaves 98%: 303,876.56 x 0.98 = 297,799.03. Round to £297,799.',
    },
    {
      id: 'pcg-q19',
      type: 'multiple-choice',
      stem: 'A Northumberland village currently has 1,200 residents. The population is forecast to fall by 4% each year for 5 years as young people move away. What will the population be at the end of year 5, to the nearest whole person?',
      tier: 'challenge',
      options: ['960', '979', '1,000', '1,025'],
      correctIndex: 1,
      xpValue: 25,
      hint: '1200 x 0.96^5 = 1200 x 0.81537 = 978.4. Round to 979 (nearest whole person). The five-year drop is 222 residents, less than 5 lots of 4% of 1,200 = 240, because each year acts on a smaller population.',
      misconceptionId: 'pcg-mis-multiplier-times-n',
    },
    {
      id: 'pcg-q20',
      type: 'numeric-entry',
      stem: 'A Lake District guesthouse charges £180 per night. The owner raises the rate by 3% per year for 3 years to keep up with inflation. What is the nightly rate at the end of year 3, in pounds, to the nearest penny?',
      tier: 'challenge',
      correctAnswer: 196.69,
      tolerance: 0.01,
      unit: 'pounds',
      xpValue: 25,
      hint: '180 x 1.03^3 = 180 x 1.092727 = 196.6909. Round to £196.69.',
    },
    {
      id: 'pcg-q21',
      type: 'free-text',
      stem: 'Two friends both deposit £1,000 in their ISAs at 5% per year for 5 years. Sara picks a simple interest account; Priya picks a compound interest account. Explain in two or three sentences why Priya ends up with more money, and roughly how much more.',
      tier: 'challenge',
      sampleAnswer:
        'Simple interest pays Sara the same £50 every year on her original £1,000, giving £1,250 after 5 years. Compound interest pays Priya interest on the previous balance, not on the original deposit, so each year Priya earns slightly more than £50. Over 5 years Priya finishes on 1000 x 1.05^5 = £1,276.28, about £26 more than Sara, because she has been earning interest on her interest from year 2 onwards.',
      keywords: ['compound', 'simple', 'interest on interest', 'previous balance', '£1,276', '£26'],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a compound interest question where pupils used I = P x R x T (simple interest) and reported the simple interest total as if it were compound.
    {
      id: 'pcg-mis-simple-instead-of-compound',
      description:
        'I work out compound interest by adding the same amount of interest every year, treating it as simple interest. So £400 at 5% for 2 years becomes £400 + 2 x £20 = £440.',
      triggerAnswer: 'simple-instead-of-compound',
      correction:
        'Actually compound interest pays interest on the interest as well as on the original. Use the multiplier raised to the power n: 400 x 1.05^2 = £441, not £440.',
      reExplanation:
        'Simple interest pays a fixed £20 each year on the original £400. Compound interest pays £20 in year 1 (5% of £400), then £21 in year 2 (5% of the new £420 balance). The £1 gap is small for 2 years but grows fast over longer periods, so the two methods stop agreeing after year 1.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1H (Higher, Non-calculator), commentary on a compound growth question where pupils multiplied the rate by the time and added the result to the principal, as if total percentage growth were additive.
    {
      id: 'pcg-mis-multiplier-times-n',
      description:
        'I think the total percentage growth over n years is just the rate multiplied by n. So 5% for 3 years adds 15% of the original to the balance.',
      triggerAnswer: 'multiplier-times-n',
      correction:
        'In fact compound growth uses (1 + r)^n, not (1 + r) x n or (1 + r x n). The exponent captures that each year acts on a different (larger) balance.',
      reExplanation:
        'For £500 at 5% for 3 years, the wrong "add 15%" reasoning gives £575. The correct compound result is 500 x 1.05^3 = £578.81. The extra £3.81 is the interest earned on the year-1 and year-2 interest. Multiplying the rate by the time only works for simple interest.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on a compound growth question where pupils computed N x (multiplier) instead of (multiplier)^N, missing the exponent entirely.
    {
      id: 'pcg-mis-n-times-multiplier',
      description:
        'I confuse the compound formula and write New = Original x multiplier x n instead of Original x multiplier^n. So £500 at 5% for 3 years becomes 500 x 1.05 x 3 = £1,575.',
      triggerAnswer: 'n-times-multiplier',
      correction:
        'Actually n is the EXPONENT in the compound formula, not a separate multiplier. Use (multiplier)^n, raising the multiplier to the power n.',
      reExplanation:
        'Compound formula: New = Original x (multiplier)^n. For £500 at 5% for 3 years: 500 x 1.05^3 = 500 x 1.157625 = £578.81. The "multiply by n" version gives £1,575, which is more than three times the original deposit and so obviously wrong for a 5% rate.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 3F (Foundation, Calculator), commentary on a depreciation question where pupils used (1 + r) as the multiplier and reported a final value LARGER than the original.
    {
      id: 'pcg-mis-decay-as-growth',
      description:
        'For depreciation I use the multiplier (1 + r) rather than (1 - r). So a £5,000 car losing 10% per year for 3 years becomes 5000 x 1.10^3 = £6,655.',
      triggerAnswer: 'decay-as-growth',
      correction:
        'In fact decay subtracts from 1. The multiplier for a 10% loss is 1 - 0.10 = 0.90, not 1.10. A depreciating car must be worth LESS than its starting price.',
      reExplanation:
        'For £5,000 at 10% depreciation for 3 years: 5000 x 0.90^3 = 5000 x 0.729 = £3,645. Using 1.10 gives £6,655, which is more than the new price even though the car is meant to be losing value. Always ask: should the final value be smaller (decay) or larger (growth)? Pick the multiplier to match.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2H (Higher, Calculator), commentary on a compound interest question where pupils rounded too aggressively at every year, accumulating an error of several pounds in the final answer.
    {
      id: 'pcg-mis-rounding-each-step',
      description:
        'I round to the nearest penny (or pound) after every year of compound interest, then carry the rounded value into the next year. The errors stack up over several years.',
      triggerAnswer: 'rounding-each-step',
      correction:
        'Actually keep the full precision through the calculation, or use the one-step formula Original x (multiplier)^n. Only round at the very end.',
      reExplanation:
        'For a 3 year, 5% calculation on £500: 500 x 1.05 = 525.00 (exact), then 525.00 x 1.05 = 551.25 (exact), then 551.25 x 1.05 = 578.8125. Rounding 551.2495 to 551.25 each year is fine, but rounding to whole pounds gives 525, 551, 579 (errors of less than £1 each year that grow). For larger rates or longer periods the gap can be £10 or more. Use the multiplier^n form to dodge the issue.',
    },
    // Source: NCETM "Misconceptions with Percentages" reference document (Secondary, Number and Calculation), commentary on pupils mixing percentage and decimal multipliers in compound questions, for example using 5 instead of 0.05 or 1.05.
    {
      id: 'pcg-mis-percent-as-multiplier',
      description:
        'I use the percentage value (5) directly as the multiplier, or use the decimal rate (0.05) on its own without adding 1.',
      triggerAnswer: 'percent-as-multiplier',
      correction:
        'Actually the multiplier for growth is 1 + r, where r is the rate as a decimal. Not r itself, and not the percentage value.',
      reExplanation:
        'For 5% growth, r = 0.05 and the multiplier is 1 + 0.05 = 1.05. Using r = 0.05 alone gives 500 x 0.05 = £25 (the year-1 interest, not the new balance). Using 5 gives 500 x 5 = £2,500 (a 400% growth, not 5%). Always check: a small percentage growth should leave the balance only a little larger than the original.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Ratio and Percentages" by Hart, on pupils confusing the total balance with the interest earned in financial percentage problems.
    {
      id: 'pcg-mis-interest-includes-principal',
      description:
        'I report the total balance as the COMPOUND INTEREST, forgetting to subtract the original principal. So £1,000 at 3% for 2 years gives "interest = £1,060.90".',
      triggerAnswer: 'interest-includes-principal',
      correction:
        'Actually the compound interest is the balance MINUS the original principal. The original deposit is the learner\'s own money, not interest.',
      reExplanation:
        'For £1,000 at 3% for 2 years: balance = 1000 x 1.03^2 = £1,060.90. Compound interest earned = 1060.90 minus 1000 = £60.90. Reporting £1,060.90 as the interest counts the original £1,000 as if it were a gift from the bank. Always ask: "Am I being asked for the new total, or the interest only?"',
    },
    // Authored, no external source: classroom-observed Year 7 confusion where pupils believe a percentage decrease followed by the same percentage increase (or vice versa) returns to the original value, instead of giving a slightly smaller value.
    {
      id: 'pcg-mis-up-down-returns-to-start',
      description:
        'I think a 20% rise followed by a 20% fall (or any matching pair) returns the value to where it started, because "the percentages cancel".',
      triggerAnswer: 'up-down-returns-to-start',
      correction:
        'In fact the two changes act on different bases, so the multipliers do not cancel. The combined multiplier is 1.20 x 0.80 = 0.96, a 4% net fall.',
      reExplanation:
        'For £100 raised 20% then dropped 20%: £100 x 1.20 = £120, then £120 x 0.80 = £96. The 20% fall acted on £120 (a larger base), so the £24 reduction was bigger than the £20 rise. Compound multipliers multiply together, they do not add or cancel.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesCompoundGrowthZoneNodes = [percentagesCompoundGrowth]
