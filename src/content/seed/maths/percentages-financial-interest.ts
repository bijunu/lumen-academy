import type { SkillNode } from '@/types/content'

export const percentagesFinancialInterest: SkillNode = {
  id: 'maths-percentages-financial-interest',
  title: 'Simple Interest and Financial Maths',
  description:
    'Work out simple interest on UK savings accounts and loans using I = P x R x T, where P is the starting amount, R is the annual interest rate as a decimal, and T is the time in years. Apply the same idea to part-year periods, ISAs and one-off bank loans, and tell the interest apart from the new total. Compound interest is the next step up and lives on its own node.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'confident',
  prerequisites: ['maths-percentages-of-amount'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including percentage increase, decrease and original value problems and simple interest, including in financial mathematics.',
    awardingBodies: {
      aqa: 'R9 Solve problems involving simple interest, including in financial mathematics (GCSE Mathematics 8300)',
      edexcel: 'R9 Solve problems involving simple interest, including in financial mathematics (GCSE Mathematics 1MA1)',
      ocr: '6.03b Solve problems involving simple interest in financial contexts (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pfi-scene-formula-parts',
      title: 'The Three Parts of Simple Interest',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what the letters in I = P x R x T mean for a UK savings account.',
      data: {
        viewBox: '0 0 600 300',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300"><rect x="20" y="20" width="560" height="260" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Simple interest formula: I = P x R x T</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="36" fill="#F8FAFC" text-anchor="middle"><text x="300" y="160">I = P x R x T</text></g><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="18" text-anchor="middle"><text x="200" y="210" fill="#22C55E">P</text><text x="290" y="210" fill="#3B82F6">R</text><text x="380" y="210" fill="#F59E0B">T</text></g><text x="300" y="255" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Each letter stands for one piece of information.</text></svg>`,
        hotspots: [
          {
            id: 'pfi-spot-p',
            x: 33,
            y: 70,
            label: 'P is the principal',
            description: 'P is the amount of money you put in at the start, for example £500 saved in a high street bank.',
          },
          {
            id: 'pfi-spot-r',
            x: 48,
            y: 70,
            label: 'R is the interest rate per year as a decimal',
            description: 'A rate of 4 percent per year is written as 0.04. Divide the percentage by 100 to get R.',
          },
          {
            id: 'pfi-spot-t',
            x: 63,
            y: 70,
            label: 'T is the time in years',
            description: 'Use whole years where you can. Six months is 0.5 years, three months is 0.25 years.',
          },
          {
            id: 'pfi-spot-i',
            x: 25,
            y: 53,
            label: 'I is the interest earned',
            description: 'I is the extra money the bank adds. The new total is the principal plus the interest.',
          },
        ],
      },
    },
    {
      id: 'pfi-scene-bar-of-500',
      title: 'Watching £500 Grow at 4 Percent Per Year',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see the new total of a £500 ISA after each year of simple interest at 4 percent per year.',
      data: {
        rows: [
          { denominator: 1, colour: '#3B82F6', shaded: 1, label: 'Year 0: £500.00' },
          { denominator: 1, colour: '#22C55E', shaded: 1, label: 'Year 1: £520.00 (interest £20)' },
          { denominator: 1, colour: '#A855F7', shaded: 1, label: 'Year 2: £540.00 (interest £40)' },
          { denominator: 1, colour: '#F59E0B', shaded: 1, label: 'Year 3: £560.00 (interest £60)' },
          { denominator: 1, colour: '#EC4899', shaded: 1, label: 'Year 4: £580.00 (interest £80)' },
        ],
        notes:
          'Simple interest is the same £20 each year because 4 percent of the original £500 is £20. The interest does not grow on the interest itself. That extra step is compound interest and is taught on the next node.',
      },
    },
    {
      id: 'pfi-scene-simple-vs-compound',
      title: 'Simple Interest vs Compound Interest',
      type: 'diagram',
      instructions:
        'Read each row to see why simple and compound interest give different totals on the same £1000 ISA over three years at 5 percent per year. Simple interest pays £50 each year on the original £1000, so the totals are £1050, £1100, £1150. Compound interest pays the same £50 in year 1, but in year 2 it pays 5 percent of £1050 which is £52.50, and in year 3 it pays 5 percent of £1102.50 which is £55.13. The two methods agree at the end of year 1 and drift apart from year 2 onwards. This node stays with simple interest only.',
      data: {
        examples: [
          {
            year: 1,
            simpleTotal: 1050,
            compoundTotal: 1050,
          },
          {
            year: 2,
            simpleTotal: 1100,
            compoundTotal: 1102.5,
          },
          {
            year: 3,
            simpleTotal: 1150,
            compoundTotal: 1157.63,
          },
        ],
        notes:
          'Simple interest pays the same amount every year. Compound interest pays interest on the interest as well, so the totals grow faster after year 1.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pfi-worked-1',
      title: 'Find the simple interest on £400 saved at 3 percent per year for 2 years',
      steps: [
        {
          explanation:
            'Pick out the three pieces of information. The principal P is £400, the rate R is 3 percent, and the time T is 2 years.',
          maths: 'P = £400, R = 3%, T = 2 years',
        },
        {
          explanation:
            'Convert the rate to a decimal by dividing by 100.',
          maths: 'R = 3 / 100 = 0.03',
        },
        {
          explanation:
            'Multiply the principal by the rate to get one year of interest.',
          maths: '£400 x 0.03 = £12 per year',
        },
        {
          explanation:
            'Multiply by the number of years to get the total interest.',
          maths: '£12 x 2 = £24',
        },
        {
          explanation:
            'So the simple interest on £400 at 3 percent per year for 2 years is £24. The new total in the account is £400 + £24 = £424.',
          maths: 'I = £24, new total = £424',
        },
      ],
    },
    {
      id: 'pfi-worked-2',
      title: 'Find the simple interest on a £1200 loan at 6 percent per year for 6 months',
      steps: [
        {
          explanation:
            'Pick out the three pieces of information. P is £1200, R is 6 percent per year, and T is 6 months.',
          maths: 'P = £1200, R = 6%, T = 6 months',
        },
        {
          explanation:
            'Convert the time into years. Six months is half a year.',
          maths: 'T = 6 / 12 = 0.5 years',
        },
        {
          explanation:
            'Convert the rate into a decimal by dividing the percentage by 100.',
        },
        {
          explanation:
            'Multiply the principal by the rate to get the interest for one whole year.',
          maths: '£1200 x 0.06 = £72',
        },
        {
          explanation:
            'Multiply by T to scale the interest down to half a year.',
          maths: '£72 x 0.5 = £36',
        },
        {
          explanation:
            'So the simple interest on a £1200 loan at 6 percent per year for 6 months is £36. The borrower repays £1200 + £36 = £1236 in total.',
          maths: 'I = £36, total repayment = £1236',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pfi-q1',
      type: 'multiple-choice',
      stem: 'A high street bank pays 2 percent simple interest per year. How much interest is paid on £100 after 1 year?',
      tier: 'core',
      options: ['£2', '£20', '£200', '£0.20'],
      correctIndex: 0,
      xpValue: 10,
      hint: '2 percent of £100 is £2. Multiply by 1 year.',
    },
    {
      id: 'pfi-q2',
      type: 'numeric-entry',
      stem: 'Find the simple interest on £500 saved at 4 percent per year for 1 year. Enter your answer in pounds.',
      tier: 'core',
      correctAnswer: 20,
      xpValue: 10,
      hint: 'Use I = P x R x T. 4 percent of £500 is £20, multiplied by 1 year.',
      unit: 'pounds',
    },
    {
      id: 'pfi-q3',
      type: 'multiple-choice',
      stem: 'What is 5 percent written as a decimal?',
      tier: 'core',
      options: ['5', '0.5', '0.05', '0.005'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Divide the percentage by 100 to get a decimal.',
      misconceptionId: 'pfi-mis-rate-as-percent',
    },
    {
      id: 'pfi-q4',
      type: 'numeric-entry',
      stem: 'A Sevenoaks pupil opens a savings ISA with £200 at 3 percent simple interest per year. How much interest is added after 1 year? Enter your answer in pounds.',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: '3 percent of £200 is £6. Multiply by 1 year.',
      unit: 'pounds',
    },
    {
      id: 'pfi-q5',
      type: 'multiple-choice',
      stem: 'Which formula gives the simple interest I?',
      tier: 'core',
      options: ['I = P + R + T', 'I = P / (R x T)', 'I = (P + R) x T', 'I = P x R x T'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Simple interest multiplies three numbers together.',
    },
    {
      id: 'pfi-q6',
      type: 'numeric-entry',
      stem: 'Find the simple interest on £800 at 5 percent per year for 2 years. Enter your answer in pounds.',
      tier: 'core',
      correctAnswer: 80,
      xpValue: 10,
      hint: '5 percent of £800 is £40. Multiply by 2 years to get the total interest.',
      unit: 'pounds',
    },
    {
      id: 'pfi-q7',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells saver puts £600 into a one-year fixed account paying 4 percent simple interest. After 1 year, what is the new balance in the account?',
      tier: 'core',
      options: ['£24', '£604', '£624', '£640'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Interest is 4 percent of £600 = £24. The new balance is the principal plus the interest.',
      misconceptionId: 'pfi-mis-interest-only',
    },
    {
      id: 'pfi-q8',
      type: 'spot-misconception',
      stem: 'Mia saves £300 at 5 percent simple interest per year. She works out that after 1 year the interest is 5 percent of £300, which is £15, and writes £15 as the new total.',
      tier: 'core',
      statements: [
        {
          text: 'Mia is right. The new total is £15.',
          isMisconception: true,
        },
        {
          text: 'Actually £15 is just the interest. The new total is the original £300 plus the £15 interest, which is £315.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pfi-mis-interest-only',
    },
    {
      id: 'pfi-q9',
      type: 'numeric-entry',
      stem: 'Find the simple interest on £1500 at 4 percent per year for 3 years. Enter your answer in pounds.',
      tier: 'confident',
      correctAnswer: 180,
      xpValue: 15,
      hint: '4 percent of £1500 is £60. Multiply by 3 years.',
      unit: 'pounds',
    },
    {
      id: 'pfi-q10',
      type: 'multiple-choice',
      stem: 'A Manchester student takes out a £900 loan from a high street bank at 5 percent simple interest per year for 2 years. How much interest does the student pay over the two years?',
      tier: 'confident',
      options: ['£45', '£90', '£99', '£180'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'I = P x R x T = £900 x 0.05 x 2 = £90. Hint: 5 percent of £900 is £45, then multiply by 2 years.',
    },
    {
      id: 'pfi-q11',
      type: 'numeric-entry',
      stem: 'A Dover saver puts £400 in a savings account at 6 percent simple interest per year. After 6 months, how much interest has been earned? Enter your answer in pounds.',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
      hint: '6 months is 0.5 years. 6 percent of £400 is £24 per year, and half of that is £12.',
      unit: 'pounds',
      misconceptionId: 'pfi-mis-months-as-years',
    },
    {
      id: 'pfi-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Find the simple interest on £700 at 4 percent per year for 3 years.',
      tier: 'confident',
      steps: [
        'Convert 4 percent to a decimal: R = 0.04.',
        'Find 1 year of interest: £700 x 0.04 = £28.',
        null,
        'So the simple interest is £84.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply 1 year of interest by 3 years: £28 x 3 = £84.',
      xpValue: 20,
    },
    {
      id: 'pfi-q13',
      type: 'multiple-choice',
      stem: 'A Year 8 pupil saves £250 in a high street bank account at 2 percent simple interest per year for 4 years. What is the new total at the end of the 4 years?',
      tier: 'confident',
      options: ['£20', '£250', '£330', '£270'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Interest each year is 2 percent of £250 = £5. Over 4 years, total interest is £20. Add to £250 to get the new total.',
    },
    {
      id: 'pfi-q14',
      type: 'spot-misconception',
      stem: 'Sam earns 5 percent simple interest per year on £400. After year 1 there is £420 in the account. Sam says: "For year 2, the interest is 5 percent of £420, which is £21."',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right because the new balance has grown.',
          isMisconception: true,
        },
        {
          text: 'Actually simple interest always pays the same amount each year, based on the original £400. So year 2 interest is again 5 percent of £400 = £20, not £21. Paying interest on the interest as well is compound interest, a different rule.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pfi-mis-simple-vs-compound',
    },
    {
      id: 'pfi-q15',
      type: 'multiple-choice',
      stem: 'A £1000 fixed-term bond pays 3 percent simple interest per year for 5 years. How much interest is paid in total?',
      tier: 'confident',
      options: ['£150', '£30', '£15', '£300'],
      correctIndex: 0,
      xpValue: 15,
      hint: '3 percent of £1000 is £30 per year. Over 5 years, total interest is £30 x 5 = £150.',
    },
    {
      id: 'pfi-q16',
      type: 'slider-explore',
      stem: 'Drag the slider to set the time in years. The principal is £500 and the rate is 4 percent simple interest per year. Find the time that gives £100 of interest in total.',
      tier: 'challenge',
      min: 1,
      max: 10,
      step: 1,
      correctRange: [5, 5],
      label: 'Time T in years',
      xpValue: 25,
      hint: 'Interest per year is 4 percent of £500 = £20. To reach £100, the time must be 100 / 20 = 5 years.',
    },
    {
      id: 'pfi-q17',
      type: 'drag-order',
      stem: 'Drag these steps for finding the simple interest on £600 at 5 percent per year for 2 years into the right order.',
      tier: 'confident',
      items: [
        'Multiply by the time: £30 x 2 = £60',
        'Write down P = £600, R = 5%, T = 2 years',
        'Find 1 year of interest: £600 x 0.05 = £30',
        'Convert the rate to a decimal: R = 0.05',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      hint: 'Read out the formula I = P x R x T and follow the order: read the values, convert the rate, find one year, then multiply by the number of years.',
    },
    {
      id: 'pfi-q18',
      type: 'numeric-entry',
      stem: 'A Lake District holiday cottage owner borrows £2400 at 5 percent simple interest per year for 2 years to buy new furniture. How much will the owner repay in total at the end of the loan? Enter your answer in pounds.',
      tier: 'challenge',
      correctAnswer: 2640,
      xpValue: 25,
      hint: 'Interest each year is 5 percent of £2400 = £120. Over 2 years, total interest is £240. Total repayment is £2400 + £240 = £2640.',
      unit: 'pounds',
      misconceptionId: 'pfi-mis-interest-only',
    },
    {
      id: 'pfi-q19',
      type: 'multiple-choice',
      stem: 'Aisha saves £600 at 4 percent simple interest per year. After 2 years she takes out all the money and uses three-quarters of the total to buy a new bike. How much money does she have left?',
      tier: 'challenge',
      options: ['£150', '£162', '£486', '£24'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Interest is 4 percent of £600 = £24 per year, x 2 years = £48. New total is £648. Three-quarters of £648 is £486, so one-quarter remains: £648 / 4 = £162.',
    },
    {
      id: 'pfi-q20',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells charity saves £2000 at 4 percent simple interest per year. After 3 years the charity uses all the interest to buy classroom books. How much money do they spend on books? Enter your answer in pounds.',
      tier: 'challenge',
      correctAnswer: 240,
      xpValue: 25,
      hint: 'Interest each year is 4 percent of £2000 = £80. Over 3 years, total interest is £80 x 3 = £240. The charity spends the interest only, not the principal.',
      unit: 'pounds',
    },
    {
      id: 'pfi-q21',
      type: 'drag-drop-builder',
      stem: 'Build the calculation that finds the simple interest on £500 at 6 percent per year for 2 years. Drag the parts into the right order.',
      tier: 'challenge',
      parts: ['£500', 'x', '0.06', 'x', '2'],
      correctArrangement: ['£500', 'x', '0.06', 'x', '2'],
      xpValue: 25,
      hint: 'The order matches I = P x R x T: principal, then rate as a decimal, then time in years. The value of the result is £60.',
    },
    {
      id: 'pfi-q22',
      type: 'free-text',
      stem: 'Ben says: "If I leave £200 at 5 percent simple interest per year for 10 years, the bank will have doubled my money." Aisha disagrees. In one or two sentences, explain who is right and why, and state the new total after the 10 years.',
      tier: 'challenge',
      sampleAnswer:
        'Aisha is right because simple interest pays 5 percent of £200, which is £10, each year for 10 years, so the total interest is £100. The new total is £200 plus £100, which is £300, not £400. To double the money the rate would need to be 10 percent per year over 10 years, or the time would need to be 20 years at 5 percent.',
      keywords: ['£10', '£100', '£300', 'simple interest', 'not doubled'],
      xpValue: 25,
      misconceptionId: 'pfi-mis-rate-as-final',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Simple Interest" page; Common mistake callout that pupils enter the rate as a whole number (e.g. 5) into the formula instead of dividing by 100 to get 0.05.
    {
      id: 'pfi-mis-rate-as-percent',
      description:
        'Putting the rate into the formula as the whole percentage number (5 instead of 0.05), so the interest comes out a hundred times too big.',
      triggerAnswer: 'rate-as-percent',
      correction:
        'In fact R in the formula I = P x R x T is the rate as a decimal. Divide the percentage by 100 first. So 5 percent is 0.05, not 5.',
      reExplanation:
        'For £400 at 5 percent per year for 1 year: R = 5 / 100 = 0.05. The interest is £400 x 0.05 x 1 = £20. Putting R = 5 would give £400 x 5 x 1 = £2000, which is five times the original deposit and so cannot be right. Always convert percent to decimal before multiplying.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a simple-interest question where pupils gave the interest as the final balance and lost the addition mark.
    {
      id: 'pfi-mis-interest-only',
      description:
        'Reporting just the interest as the new total in the account, rather than adding it to the original amount.',
      triggerAnswer: 'interest-only',
      correction:
        'The interest is the extra money added by the bank. The new total is the original principal plus the interest.',
      reExplanation:
        '£600 at 4 percent for 1 year: interest is £600 x 0.04 x 1 = £24. New balance is £600 + £24 = £624. Writing £24 as the balance answers a different question, "how much interest", not "what is the new total".',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring slip where pupils treated months as years in the simple-interest formula.
    {
      id: 'pfi-mis-months-as-years',
      description:
        'Using the number of months directly as T in the formula, so 6 months becomes T = 6 instead of T = 0.5.',
      triggerAnswer: 'months-as-years',
      correction:
        'T in the formula is the time in years. Convert months to years by dividing by 12. So 6 months is 0.5 years, not 6.',
      reExplanation:
        '£400 at 6 percent per year for 6 months: T = 6 / 12 = 0.5 years. Interest is £400 x 0.06 x 0.5 = £12. Using T = 6 would give £400 x 0.06 x 6 = £144, which is more than a year of interest and so cannot be right for half a year.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Simple Interest vs Compound Interest" page; the comparison box that warns pupils to keep using the original principal each year for simple interest.
    {
      id: 'pfi-mis-simple-vs-compound',
      description:
        'Calculating year 2 interest on the new balance (interest on interest) instead of on the original principal, mixing simple interest with compound interest.',
      triggerAnswer: 'compound-by-mistake',
      correction:
        'Simple interest always uses the original principal each year, so the interest amount is the same every year. Working from the new balance gives compound interest, which is a separate rule.',
      reExplanation:
        '£400 at 5 percent per year for 2 years (simple): year 1 = £20, year 2 = £20 (still 5 percent of £400). Total = £40. Compound would give year 2 = 5 percent of £420 = £21, but that is a different formula for a different question. Lumen teaches simple interest here and compound interest on the next node.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); commentary on a multi-year savings question where pupils multiplied by the percentage rate but forgot to scale by the time T.
    {
      id: 'pfi-mis-forgot-time',
      description:
        'Finding just 1 year of interest and reporting that as the total, even when the question asks about several years.',
      triggerAnswer: 'forgot-time',
      correction:
        'Simple interest must be scaled by the time T. After finding the interest for one year, multiply by the number of years (or fraction of a year) the money is held.',
      reExplanation:
        '£500 at 4 percent per year for 3 years: 1 year of interest is £500 x 0.04 = £20. The total over 3 years is £20 x 3 = £60. Reporting £20 would only cover the first year and would miss two-thirds of the interest. Always finish with the multiplication by T.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator); commentary on a percentage-change question where pupils read the rate as the final answer rather than as an annual rate.
    {
      id: 'pfi-mis-rate-as-final',
      description:
        'Reading "5 percent per year for 10 years" as "50 percent total" and assuming this doubles the money, when 50 percent of a sum is only half of it added on.',
      triggerAnswer: 'rate-as-doubled',
      correction:
        'A rate of 5 percent per year over 10 years gives 50 percent of the original added on, not the original doubled. To double the money the total interest must equal 100 percent of the principal.',
      reExplanation:
        '£200 at 5 percent per year for 10 years (simple): interest is £200 x 0.05 x 10 = £100. The new total is £200 + £100 = £300, not £400. To double the £200 you would need £200 of interest, which takes 20 years at 5 percent or 10 years at 10 percent.',
    },
    // Authored, no external source: classroom-observed Year 7 slip where pupils mix up the part-year and whole-year cases when reading "after 18 months" in a savings question.
    {
      id: 'pfi-mis-eighteen-as-1-or-2',
      description:
        'Rounding 18 months to either 1 year or 2 years instead of using T = 1.5 years.',
      triggerAnswer: 'eighteen-as-rounded',
      correction:
        'T should be the exact time in years. 18 months is 1.5 years, not 1 and not 2. Convert by dividing the months by 12.',
      reExplanation:
        '£200 at 4 percent per year for 18 months: T = 18 / 12 = 1.5 years. Interest is £200 x 0.04 x 1.5 = £12. Rounding to 1 year would give £8 (too small); rounding to 2 years would give £16 (too big). The correct answer sits halfway between, which makes sense for halfway through a second year.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesFinancialInterestZoneNodes = [percentagesFinancialInterest]
