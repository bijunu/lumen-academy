import type { SkillNode } from '@/types/content'

export const percentagesComparing: SkillNode = {
  id: 'maths-percentages-comparing',
  title: 'Expressing One Quantity as a Percentage of Another',
  description:
    'Write one quantity as a percentage of another by forming the fraction a out of b, then multiplying by 100. Apply the method to UK school contexts such as test marks, attendance registers, voting shares and recipe ingredients, and use it to compare two quantities by converting both to percentages of the same total.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'confident',
  prerequisites: ['maths-percentages-as-decimals-fractions'],
  curriculum: {
    ks3Objective:
      'Express one quantity as a percentage of another; compare two quantities using percentages.',
    awardingBodies: {
      aqa: 'N12 Express one quantity as a percentage of another and compare quantities using percentages (GCSE Mathematics 8300)',
      edexcel: 'N12 Express one quantity as a percentage of another (GCSE Mathematics 1MA1)',
      ocr: '2.04a Compare two quantities using percentages (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pc-scene-method',
      title: 'The (a divided by b) times 100 Method',
      type: 'diagram',
      instructions:
        'Read the three-step recipe for turning a out of b into a percentage. Step one: write the count as a fraction with the part on top and the whole on the bottom. Step two: divide the part by the whole. Step three: multiply by 100. A Sevenoaks pupil who scores 28 out of 35 on a maths test writes 28 over 35, divides to get 0.8, then multiplies by 100 to reach 80 percent.',
      data: {
        examples: [
          {
            context: 'Sevenoaks maths test',
            part: 28,
            whole: 35,
            fraction: '28/35',
            decimal: 0.8,
            percentage: 80,
          },
          {
            context: 'Tunbridge Wells spelling test',
            part: 17,
            whole: 20,
            fraction: '17/20',
            decimal: 0.85,
            percentage: 85,
          },
          {
            context: 'Manchester reading quiz',
            part: 12,
            whole: 16,
            fraction: '12/16',
            decimal: 0.75,
            percentage: 75,
          },
        ],
        notes:
          'Rule: percentage equals (part divided by whole) multiplied by 100. The part is the number that has happened; the whole is the total possible.',
      },
    },
    {
      id: 'pc-scene-attendance',
      title: 'An Attendance Register at a Year 7 Form',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the attendance register at a Year 7 form in Dover is turned into a percentage figure for the form tutor.',
      data: {
        viewBox: '0 0 600 320',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320"><rect x="20" y="20" width="560" height="280" rx="12" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="55" font-family="system-ui, sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Attendance for 7B over 200 school days</text><g font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="18" fill="#F8FAFC" text-anchor="middle"><text x="150" y="130">Present</text><text x="300" y="130">Total days</text><text x="450" y="130">Percentage</text><text x="150" y="170" fill="#22C55E">185</text><text x="300" y="170" fill="#3B82F6">200</text><text x="450" y="170" fill="#F59E0B">92.5%</text></g><text x="300" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">185 divided by 200 equals 0.925. Multiply by 100 to read 92.5%.</text><text x="300" y="270" font-family="system-ui, sans-serif" font-size="13" fill="#64748B" text-anchor="middle">Schools in England aim for an attendance figure of at least 95%.</text></svg>`,
        hotspots: [
          {
            id: 'pc-spot-part',
            x: 25,
            y: 53,
            label: 'The part: days present',
            description:
              'The part is the count that has happened. Here, the pupil was present on 185 of the school days.',
          },
          {
            id: 'pc-spot-whole',
            x: 50,
            y: 53,
            label: 'The whole: total school days',
            description:
              'The whole is the total possible. Here, the school year runs to 200 days, so the whole is 200.',
          },
          {
            id: 'pc-spot-percent',
            x: 75,
            y: 53,
            label: 'The percentage',
            description:
              '185 divided by 200 is 0.925. Multiplying by 100 gives 92.5%, the figure the form tutor records.',
          },
        ],
      },
    },
    {
      id: 'pc-scene-compare-bars',
      title: 'Comparing 18 out of 25 with 22 out of 30',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it and read off the percentage shaded. The Sevenoaks netball team scored 18 from 25 shots last week and 22 from 30 shots this week. The bars show that 18 out of 25 fills 72% of the bar, while 22 out of 30 fills about 73.3% of the bar, so this week was the slightly better scoring week.',
      data: {
        rows: [
          {
            denominator: 25,
            colour: '#3B82F6',
            shaded: 18,
            label: '18 out of 25 = 72%',
          },
          {
            denominator: 30,
            colour: '#22C55E',
            shaded: 22,
            label: '22 out of 30 = 73.3%',
          },
          {
            denominator: 100,
            colour: '#A855F7',
            shaded: 72,
            label: '72% on a 100-square reference bar',
          },
          {
            denominator: 100,
            colour: '#F59E0B',
            shaded: 73,
            label: '73% on a 100-square reference bar (rounded)',
          },
        ],
        notes:
          'To compare two a out of b values fairly, convert each one to a percentage of the same total of 100. The larger percentage is the better share.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pc-worked-1',
      title: 'Express 28 out of 35 as a percentage',
      steps: [
        {
          explanation:
            'Write the count as a fraction with the part on top and the whole on the bottom.',
          maths: 'fraction = 28 / 35',
        },
        {
          explanation:
            'Divide the part by the whole to get a decimal.',
          maths: '28 / 35 = 0.8',
        },
        {
          explanation:
            'Multiply by 100 to turn the decimal into a percentage.',
          maths: '0.8 x 100 = 80',
        },
        {
          explanation:
            'So 28 out of 35 is 80%. A pupil with 28 marks out of 35 on a test has scored 80%.',
          maths: '28 out of 35 = 80%',
        },
      ],
    },
    {
      id: 'pc-worked-2',
      title: 'Compare 18 out of 25 with 22 out of 30',
      steps: [
        {
          explanation:
            'Write the first quantity as a fraction with the part on top.',
          maths: 'fraction A = 18 / 25',
        },
        {
          explanation:
            'Divide the part by the whole.',
          maths: '18 / 25 = 0.72',
        },
        {
          explanation:
            'Multiply by 100 to read the percentage.',
        },
        {
          explanation:
            'So 18 out of 25 is 72%. Now repeat the steps for the second quantity.',
          maths: '0.72 x 100 = 72%',
        },
        {
          explanation:
            'Write the second quantity as a fraction with the part on top.',
          maths: 'fraction B = 22 / 30',
        },
        {
          explanation:
            'Divide 22 by 30 to one decimal place.',
          maths: '22 / 30 = 0.733',
        },
        {
          explanation:
            'Multiply by 100 to read the percentage.',
          maths: '0.733 x 100 = 73.3%',
        },
        {
          explanation:
            'Both quantities are now on the same scale out of 100. Compare directly: 73.3% is larger than 72%, so 22 out of 30 is the better scoring rate.',
          maths: '73.3% > 72%',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pc-q1',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil scores 18 out of 20 on a French vocabulary test. What is the score as a percentage?',
      tier: 'core',
      options: ['80%', '85%', '90%', '95%'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Compute 18 divided by 20, then multiply by 100. 18 / 20 = 0.9, and 0.9 multiplied by 100 is 90.',
    },
    {
      id: 'pc-q2',
      type: 'numeric-entry',
      stem: 'Write 7 out of 10 as a percentage. Enter your answer as a number without the percent sign.',
      tier: 'core',
      correctAnswer: 70,
      xpValue: 10,
      hint: '7 divided by 10 is 0.7. Multiply by 100 to read off the percentage.',
    },
    {
      id: 'pc-q3',
      type: 'multiple-choice',
      stem: 'At a Tunbridge Wells primary fete, 9 of the 20 raffle tickets are red. What fraction of the tickets is red, written as a percentage?',
      tier: 'core',
      options: ['9%', '11%', '20%', '45%'],
      correctIndex: 3,
      xpValue: 10,
      hint: '9 divided by 20 is 0.45. Multiplying by 100 gives 45.',
    },
    {
      id: 'pc-q4',
      type: 'numeric-entry',
      stem: 'A spelling quiz has 25 questions. Aisha answers 20 correctly. What percentage did she get right? Enter the number without the percent sign.',
      tier: 'core',
      correctAnswer: 80,
      xpValue: 10,
      hint: '20 divided by 25 is 0.8. Multiply by 100.',
    },
    {
      id: 'pc-q5',
      type: 'multiple-choice',
      stem: 'In a Sevenoaks form of 30 pupils, 12 pupils walk to school. What percentage of the form walks to school?',
      tier: 'core',
      options: ['12%', '25%', '40%', '60%'],
      correctIndex: 2,
      xpValue: 10,
      hint: '12 divided by 30 is 0.4. Multiplying by 100 gives 40.',
      misconceptionId: 'pc-mis-out-of-as-subtraction',
    },
    {
      id: 'pc-q6',
      type: 'numeric-entry',
      stem: 'A Manchester baker uses 150 g of butter in a cake mixture that weighs 600 g in total. What percentage of the mixture is butter? Enter the number without the percent sign.',
      tier: 'core',
      correctAnswer: 25,
      xpValue: 10,
      hint: '150 divided by 600 is 0.25. Multiply by 100.',
    },
    {
      id: 'pc-q7',
      type: 'multiple-choice',
      stem: 'Liam scores 24 out of 40 in a science quiz. What percentage did he score?',
      tier: 'core',
      options: ['40%', '50%', '60%', '66%'],
      correctIndex: 2,
      xpValue: 10,
      hint: '24 divided by 40 is 0.6. Multiply by 100.',
    },
    {
      id: 'pc-q8',
      type: 'spot-misconception',
      stem: 'Theo wants to write 6 out of 24 as a percentage. He writes 24 divided by 6 equals 4, then multiplies by 100 to claim 400%.',
      tier: 'core',
      statements: [
        {
          text: 'Theo is right. 6 out of 24 is 400%.',
          isMisconception: true,
        },
        {
          text: 'Actually the rule is part divided by whole, not whole divided by part. So 6 divided by 24 is 0.25, and multiplied by 100 that gives 25%. The answer must be 25%, not 400%, because the part cannot be larger than the whole.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pc-mis-wrong-way-division',
    },
    {
      id: 'pc-q9',
      type: 'numeric-entry',
      stem: 'A school in Dover records that 185 out of 200 school days were attended by one pupil. What was the pupil\'s attendance as a percentage? Enter the number without the percent sign.',
      tier: 'confident',
      correctAnswer: 92.5,
      xpValue: 15,
      tolerance: 0.05,
      hint: '185 divided by 200 is 0.925. Multiply by 100 to read 92.5.',
    },
    {
      id: 'pc-q10',
      type: 'multiple-choice',
      stem: 'A class election has 60 voters. Candidate Aisha gets 33 votes. What percentage of the votes did Aisha receive?',
      tier: 'confident',
      options: ['33%', '45%', '55%', '60%'],
      correctIndex: 2,
      xpValue: 15,
      hint: '33 divided by 60 is 0.55. Multiplying by 100 gives 55.',
    },
    {
      id: 'pc-q11',
      type: 'multiple-choice',
      stem: 'A Premier League striker scored 12 goals from 40 shots on target. What percentage of his shots on target were goals?',
      tier: 'confident',
      options: ['30%', '20%', '12%', '40%'],
      correctIndex: 0,
      xpValue: 15,
      hint: '12 divided by 40 is 0.3. Multiplying by 100 gives 30.',
      misconceptionId: 'pc-mis-forget-times-100',
    },
    {
      id: 'pc-q12',
      type: 'numeric-entry',
      stem: 'A Lake District guide reports that 9 of the 12 walkers on a trip wore waterproof coats. What percentage of the walkers wore waterproof coats? Enter the number without the percent sign.',
      tier: 'confident',
      correctAnswer: 75,
      xpValue: 15,
      hint: '9 divided by 12 is 0.75. Multiply by 100.',
    },
    {
      id: 'pc-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Write 17 out of 50 as a percentage.',
      tier: 'confident',
      steps: [
        'Write the count as a fraction with the part on top and the whole on the bottom: 17 / 50.',
        'Divide the part by the whole: 17 / 50 = 0.34.',
        null,
        'So 17 out of 50 is 34%.',
      ],
      missingStepIndex: 2,
      correctStep: 'Multiply the decimal by 100 to read the percentage: 0.34 multiplied by 100 is 34.',
      xpValue: 20,
    },
    {
      id: 'pc-q14',
      type: 'spot-misconception',
      stem: 'Maya writes 7 out of 10 as a percentage. She writes 7 over 10 equals 0.7 and stops there, claiming the answer is 0.7%.',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. 0.7 is the percentage.',
          isMisconception: true,
        },
        {
          text: 'Actually the division gives a decimal, not a percentage. To turn the decimal into a percentage you must multiply by 100. 0.7 multiplied by 100 is 70, so the answer is 70%, not 0.7%.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pc-mis-forget-times-100',
    },
    {
      id: 'pc-q15',
      type: 'slider-explore',
      stem: 'Set the slider to estimate the percentage that 31 out of 50 represents.',
      tier: 'confident',
      min: 0,
      max: 100,
      step: 1,
      correctRange: [60, 64],
      label: 'Percentage that 31 out of 50 represents',
      xpValue: 15,
      hint: '31 divided by 50 is 0.62. Multiply by 100 to read 62.',
    },
    {
      id: 'pc-q16',
      type: 'drag-order',
      stem: 'Order these four results from the lowest percentage to the highest percentage.',
      tier: 'challenge',
      items: [
        '14 out of 20',
        '18 out of 25',
        '24 out of 30',
        '21 out of 35',
      ],
      correctOrder: [3, 0, 1, 2],
      xpValue: 20,
      hint: 'Compute each one first: 14/20 = 70%, 18/25 = 72%, 24/30 = 80%, 21/35 = 60%. Then sort from smallest to largest.',
    },
    {
      id: 'pc-q17',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells charity raffle sells 80 tickets. Of these, 32 tickets are bought by adults and the rest by children. What percentage of the tickets is bought by adults?',
      tier: 'confident',
      options: ['32%', '40%', '48%', '60%'],
      correctIndex: 1,
      xpValue: 15,
      hint: '32 divided by 80 is 0.4. Multiplying by 100 gives 40.',
      misconceptionId: 'pc-mis-fraction-is-percent',
    },
    {
      id: 'pc-q18',
      type: 'multiple-choice',
      stem: 'Last week the Sevenoaks netball team scored 18 goals from 25 shots. This week they scored 22 goals from 30 shots. Express each week as a percentage and decide which week was the better scoring week.',
      tier: 'challenge',
      options: [
        'Last week was 72% and this week was 73.3%, so this week was the better scoring week.',
        'Last week was 72% and this week was 73.3%, so last week was the better scoring week.',
        'Last week was 18% and this week was 22%, so this week was the better scoring week.',
        'Both weeks are 70%, so the two weeks are equal.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: '18 / 25 = 0.72 = 72%. 22 / 30 = 0.733 = 73.3%. The larger percentage is the better scoring rate.',
      misconceptionId: 'pc-mis-mixed-totals-compare',
    },
    {
      id: 'pc-q19',
      type: 'numeric-entry',
      stem: 'A Manchester after-school club has 40 places. By Tuesday, 26 places are filled. By Thursday, another 6 places are filled. What percentage of the places is filled by Thursday? Enter the number without the percent sign.',
      tier: 'challenge',
      correctAnswer: 80,
      xpValue: 25,
      hint: 'First add the places: 26 + 6 = 32. Then 32 divided by 40 is 0.8, and multiplied by 100 gives 80.',
    },
    {
      id: 'pc-q20',
      type: 'multiple-choice',
      stem: 'Tom\'s mid-year Lake District geography test had 40 marks; he scored 28. Aisha\'s end-of-year test was out of 50 and she scored 36. Whose percentage score was higher?',
      tier: 'challenge',
      options: [
        'Tom, because 28 is less than 36 but his percentage 70% is less than Aisha\'s 72%.',
        'Aisha, because 36 / 50 = 72% and 28 / 40 = 70%, so Aisha scored higher by 2 percentage points.',
        'They scored the same percentage of 70%.',
        'Tom, because 40 is a smaller total than 50.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Convert each score to a percentage first, then compare. 28 / 40 = 0.7 = 70%. 36 / 50 = 0.72 = 72%.',
      misconceptionId: 'pc-mis-mixed-totals-compare',
    },
    {
      id: 'pc-q21',
      type: 'free-text',
      stem: 'A Dover bakery is testing two flapjack recipes. Recipe A uses 120 g of oats in a 400 g mixture. Recipe B uses 150 g of oats in a 600 g mixture. Express the oat share of each recipe as a percentage, and explain which recipe is more oaty. Write one or two sentences.',
      tier: 'challenge',
      sampleAnswer:
        'Recipe A is 120 divided by 400 multiplied by 100, which is 30%. Recipe B is 150 divided by 600 multiplied by 100, which is 25%. So Recipe A is the more oaty mixture because 30% is larger than 25%.',
      keywords: ['30', '25', 'Recipe A', 'percentage', 'divide'],
      xpValue: 25,
    },
    {
      id: 'pc-q22',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Year 7 charity drive set a target of 250 books. By half term the form had collected 175 books. What percentage of the target had been collected by half term? Enter the number without the percent sign.',
      tier: 'challenge',
      correctAnswer: 70,
      xpValue: 25,
      hint: '175 divided by 250 is 0.7. Multiply by 100 to read 70.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Expressing One Number as a Percentage of Another" page; the "Common mistake" callout that pupils divide the wrong way round (whole divided by part instead of part divided by whole).
    {
      id: 'pc-mis-wrong-way-division',
      description:
        'Dividing the whole by the part (b divided by a) instead of the part by the whole (a divided by b) when writing a out of b as a percentage.',
      triggerAnswer: 'wrong-way-division',
      correction:
        'In fact the part always goes on top. The rule is (part divided by whole) multiplied by 100, not the other way round.',
      reExplanation:
        'For 6 out of 24, the part is 6 and the whole is 24. So divide 6 by 24 to get 0.25, then multiply by 100 to read 25%. Dividing 24 by 6 gives 4, which multiplied by 100 is 400%. A part cannot be larger than the whole, so any answer above 100% is a signal that the division is the wrong way round.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring slip where pupils write the decimal (e.g. 0.7) as the percentage and forget to multiply by 100.
    {
      id: 'pc-mis-forget-times-100',
      description:
        'Forgetting to multiply by 100 after dividing the part by the whole, so reporting the decimal answer (like 0.7) as the percentage.',
      triggerAnswer: 'forget-times-100',
      correction:
        'A division gives a decimal, not a percentage. To turn the decimal into a percentage you must multiply it by 100.',
      reExplanation:
        '7 out of 10: divide to get 0.7. Multiply 0.7 by 100 to reach 70%. Reporting 0.7 as the percentage would mean less than 1%, which cannot be right when the pupil got 7 of the 10 questions correct. The multiply-by-100 step is what shifts the decimal point two places to the right.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a percentage-of-another-quantity question where pupils read "out of" as subtraction (e.g. 28 out of 35 = 7).
    {
      id: 'pc-mis-out-of-as-subtraction',
      description:
        'Reading "a out of b" as subtraction, so 28 out of 35 is treated as 35 minus 28 = 7.',
      triggerAnswer: 'out-of-as-subtraction',
      correction:
        'In fact "out of" means a fraction, not subtraction. 28 out of 35 means the fraction 28 over 35, which you turn into a percentage by dividing and multiplying by 100.',
      reExplanation:
        '28 out of 35 means the part is 28 and the whole is 35. So compute 28 divided by 35, which is 0.8, then multiply by 100 to reach 80%. Subtracting 28 from 35 gives 7, which is the number of marks missing, not the percentage score. The phrase "out of" is read aloud but represents a division.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); commentary on a question where pupils confused the fraction itself with the percentage (treating 7/20 as 7%).
    {
      id: 'pc-mis-fraction-is-percent',
      description:
        'Treating the numerator (the part) as if it is already the percentage, so writing 7 out of 20 as 7% rather than 35%.',
      triggerAnswer: 'fraction-is-percent',
      correction:
        'A percentage means a value out of 100, not out of any number. Until the whole is 100, the part is not the percentage.',
      reExplanation:
        '7 out of 20: divide 7 by 20 to get 0.35, then multiply by 100 to reach 35%. The number 7 only matches the percentage when the whole is 100, as in 7 out of 100, which truly is 7%. For any other denominator you must scale the fraction so that the bottom number is 100.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Equivalent Fractions, Decimals and Percentages" page; the "Common mistake" callout warning that scaling top and bottom by the same factor does not on its own give a percentage.
    {
      id: 'pc-mis-equivalent-fraction-not-percent',
      description:
        'Multiplying both the numerator and denominator by the same number and reporting the new numerator as the percentage, without scaling the denominator to 100.',
      triggerAnswer: 'equivalent-fraction-stop',
      correction:
        'An equivalent fraction is only a percentage when its denominator equals 100. Multiplying top and bottom by the same factor only writes an equivalent fraction; it does not by itself produce a percentage.',
      reExplanation:
        '7 out of 20: multiply top and bottom by 5 to reach 35 over 100, which reads as 35%. If you multiplied top and bottom by 2 instead, you would get 14 over 40, which is still 35% but not in a form you can read straight off. The whole has to be 100 before the top number is the percentage.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Percentages); pupils confuse "x is what percent of y" with the inverse "what is x percent of y".
    {
      id: 'pc-mis-inverse-direction',
      description:
        'Confusing "x is what percent of y" with "what is x percent of y", and so computing the wrong direction.',
      triggerAnswer: 'inverse-direction',
      correction:
        'The two questions go in opposite directions. "x is what percent of y" needs (x divided by y) multiplied by 100. "What is x percent of y" needs (x divided by 100) multiplied by y.',
      reExplanation:
        'For "12 is what percent of 40": divide 12 by 40 to get 0.3, then multiply by 100 to read 30%. For "What is 12 percent of 40": divide 12 by 100 to get 0.12, then multiply by 40 to read 4.8. Reading the question carefully tells you whether the unknown is the percentage (this node) or the part (the percentage-of-an-amount node).',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring slip where pupils compare two raw counts directly instead of converting both to percentages of their own totals first.
    {
      id: 'pc-mis-mixed-totals-compare',
      description:
        'Comparing two a out of b values by looking at the parts alone (22 versus 18) instead of converting each to a percentage of its own total first.',
      triggerAnswer: 'mixed-totals-compare',
      correction:
        'Two quantities can only be compared fairly when both are on the same scale. Convert each one to a percentage of 100, then compare the percentages.',
      reExplanation:
        '18 out of 25 is 72%. 22 out of 30 is 73.3%. The second one is the larger share even though its total is larger, because percentages put both quantities on the same scale of 100. Comparing 22 with 18 alone ignores the fact that the totals 25 and 30 are different.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion where pupils write the answer with the wrong units (writing 0.8 percent for 80 percent because they have skipped the multiply-by-100 step or written the percent sign onto the decimal directly).
    {
      id: 'pc-mis-decimal-with-percent-sign',
      description:
        'Writing the decimal value with a percent sign attached (for example 0.8% instead of 80%), as if the percent sign converts the decimal automatically.',
      triggerAnswer: 'decimal-with-percent-sign',
      correction:
        'Writing the percent sign next to a decimal does not multiply it by 100. You still need to multiply by 100 before you write the percent sign.',
      reExplanation:
        '28 out of 35: divide to get 0.8. Multiply by 100 to reach 80. Only then write the percent sign: 80%. Writing 0.8% would mean less than 1%, which cannot describe a pupil who got 28 of 35 marks correct.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesComparingZoneNodes = [percentagesComparing]
