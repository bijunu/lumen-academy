import type { SkillNode } from '@/types/content'

export const percentagesAsDecimalsFractions: SkillNode = {
  id: 'maths-percentages-as-decimals-fractions',
  title: 'Percentages, Decimals, and Fractions',
  description:
    'Understand that "per cent" means "per hundred", recognise the most common percentages by sight, and convert fluently between percentage, decimal, and fraction forms in their simplest equivalents.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      "Define percentage as 'number of parts per hundred', interpret percentages and percentage changes as a fraction or a decimal, interpret these multiplicatively, express one quantity as a percentage of another, compare two quantities using percentages, and work with percentages greater than 100%.",
    awardingBodies: {
      aqa: 'N2.4 Convert between fractions, decimals and percentages',
      edexcel: 'N10 Equivalence between fractions, decimals and percentages',
      ocr: '2.02a Equivalence of fractions, decimals and percentages',
    },
  },
  scenes: [
    {
      id: 'pct-scene-hundred-grid',
      title: 'The Hundred Grid',
      type: 'diagram',
      instructions:
        'Look at how shading on a 10 by 10 grid lines up with a percentage, a decimal, and a fraction. Twenty-five squares shaded means 25%, 0.25, and 1/4. Half the grid is 50%, 0.5, and 1/2. A single square is 1%, 0.01, and 1/100. Per cent means out of one hundred.',
      data: {
        rows: 10,
        columns: 10,
        defaultShaded: 25,
        readouts: ['percentage', 'decimal', 'fractionOver100', 'simplestFraction'],
        examples: [
          { shaded: 25, percent: 25, decimal: 0.25, simplest: '1/4' },
          { shaded: 50, percent: 50, decimal: 0.5, simplest: '1/2' },
          { shaded: 75, percent: 75, decimal: 0.75, simplest: '3/4' },
          { shaded: 10, percent: 10, decimal: 0.1, simplest: '1/10' },
          { shaded: 1, percent: 1, decimal: 0.01, simplest: '1/100' },
        ],
      },
    },
    {
      id: 'pct-scene-bar-slider',
      title: 'The Percent Bar',
      type: 'simulation',
      instructions:
        'See how positions along the 0% to 100% bar match equivalent decimals and simplest fractions. 5% sits at 0.05 or 1/20, 10% at 0.1 or 1/10, 25% at 0.25 or 1/4, half-way at 0.5 or 1/2, and the full bar at 1 whole. Each percentage is just a different name for the same amount.',
      data: {
        bar: { min: 0, max: 100, step: 1, units: '%' },
        markers: [
          { percent: 0, decimal: 0, fraction: '0' },
          { percent: 5, decimal: 0.05, fraction: '1/20' },
          { percent: 10, decimal: 0.1, fraction: '1/10' },
          { percent: 20, decimal: 0.2, fraction: '1/5' },
          { percent: 25, decimal: 0.25, fraction: '1/4' },
          { percent: 50, decimal: 0.5, fraction: '1/2' },
          { percent: 75, decimal: 0.75, fraction: '3/4' },
          { percent: 100, decimal: 1, fraction: '1' },
        ],
      },
    },
    {
      id: 'pct-scene-triple-cards',
      title: 'Match the Triples',
      type: 'diagram',
      instructions:
        'Read each row across to see how a percentage, a decimal, and a simplest fraction can name the same amount. 50% is 0.5 is 1/2; 25% is 0.25 is 1/4; 12.5% is 0.125 is 1/8. Recognising these triples by sight is faster than re-deriving them every time.',
      data: {
        triples: [
          { percent: '50%', decimal: '0.5', fraction: '1/2' },
          { percent: '25%', decimal: '0.25', fraction: '1/4' },
          { percent: '75%', decimal: '0.75', fraction: '3/4' },
          { percent: '10%', decimal: '0.1', fraction: '1/10' },
          { percent: '20%', decimal: '0.2', fraction: '1/5' },
          { percent: '12.5%', decimal: '0.125', fraction: '1/8' },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pct-worked-1',
      title: 'Convert 35% into a decimal and a fraction',
      steps: [
        {
          explanation: 'The phrase "per cent" means "per hundred". So 35% means 35 out of 100.',
          maths: '35% = 35 out of 100',
        },
        {
          explanation: 'Write that as a fraction with denominator 100.',
          maths: '35/100',
        },
        {
          explanation:
            'To turn the fraction into a decimal, divide the numerator by the denominator. Dividing by 100 moves each digit two columns to the right.',
          maths: '35 / 100 = 0.35',
        },
        {
          explanation: 'Now simplify the fraction. The highest common factor of 35 and 100 is 5.',
          maths: '35 / 5 = 7, 100 / 5 = 20',
        },
        {
          explanation: 'So 35% is the same as 0.35 and 7/20. All three name the same amount.',
          maths: '35% = 0.35 = 7/20',
        },
      ],
    },
    {
      id: 'pct-worked-2',
      title: 'Convert 3/5 into a decimal and a percentage',
      steps: [
        {
          explanation:
            'We want to write 3/5 as a percentage. A percentage uses 100 on the bottom, so look for an equivalent fraction with denominator 100.',
          maths: '3/5 = ?/100',
        },
        {
          explanation: 'Multiply 5 by 20 to reach 100. Apply the same multiplier to the numerator.',
          maths: '5 x 20 = 100, 3 x 20 = 60',
        },
        {
          explanation: 'So 3/5 is equivalent to 60/100, which means 60 per hundred, or 60%.',
          maths: '3/5 = 60/100 = 60%',
        },
        {
          explanation:
            'For the decimal, divide 3 by 5, or use the fact that 60/100 puts six tenths after the point.',
          maths: '3 / 5 = 0.6',
        },
        {
          explanation: 'So 3/5, 0.6, and 60% all name the same amount.',
          maths: '3/5 = 0.6 = 60%',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pct-q1',
      type: 'multiple-choice',
      stem: 'What does "per cent" literally mean?',
      tier: 'core',
      options: ['Per ten', 'Per hundred', 'Per thousand', 'Per million'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pct-mis-percent-meaning',
    },
    {
      id: 'pct-q2',
      type: 'multiple-choice',
      stem: 'Which fraction is the same amount as 50%?',
      tier: 'core',
      options: ['1/5', '1/4', '1/2', '5/10'],
      correctIndex: 2,
      xpValue: 10,
      hint: '50% means 50 out of 100. Now simplify 50/100.',
    },
    {
      id: 'pct-q3',
      type: 'multiple-choice',
      stem: 'Which decimal is the same amount as 25%?',
      tier: 'core',
      options: ['2.5', '0.025', '0.4', '0.25'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pct-mis-decimal-shift',
    },
    {
      id: 'pct-q4',
      type: 'multiple-choice',
      stem: 'Which fraction in simplest form is the same as 20%?',
      tier: 'core',
      options: ['1/5', '2/5', '20/10', '1/2'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pct-mis-wrong-denominator',
    },
    {
      id: 'pct-q5',
      type: 'numeric-entry',
      stem: 'Write 75% as a decimal.',
      tier: 'core',
      correctAnswer: 0.75,
      tolerance: 0.001,
      xpValue: 10,
      hint: 'Divide 75 by 100 by moving each digit two columns to the right.',
    },
    {
      id: 'pct-q6',
      type: 'spot-misconception',
      stem: 'Liam says: "30% means a value of 30, because the per cent sign is just decoration."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. 30% just means the number 30.',
          isMisconception: true,
        },
        {
          text: 'Actually 30% means 30 per hundred, which is the fraction 30/100 or the decimal 0.3.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pct-mis-percent-meaning',
    },
    {
      id: 'pct-q7',
      type: 'data-extraction',
      stem: 'A Tunbridge Wells library survey shows that out of every 100 borrowers, 12 chose a poetry book. What percentage of borrowers chose a poetry book?',
      tier: 'core',
      dataSource:
        'Tunbridge Wells library borrower survey: 12 out of every 100 borrowers chose a poetry book.',
      correctAnswer: '12%',
      xpValue: 10,
    },
    {
      id: 'pct-q8',
      type: 'drag-order',
      stem: 'Drag these percentages into order from smallest to largest.',
      tier: 'core',
      items: ['50%', '5%', '25%', '75%'],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
    },
    {
      id: 'pct-q9',
      type: 'multiple-choice',
      stem: 'Which of these is NOT another way to write 1/4?',
      tier: 'confident',
      options: ['25%', '0.25', '0.4', '25/100'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pct-mis-stack-digits',
    },
    {
      id: 'pct-q10',
      type: 'numeric-entry',
      stem: 'Write 3/4 as a percentage. Enter your answer as a number without the per cent sign.',
      tier: 'confident',
      correctAnswer: 75,
      xpValue: 15,
      hint: 'Find an equivalent fraction with denominator 100, then read the numerator.',
    },
    {
      id: 'pct-q11',
      type: 'numeric-entry',
      stem: 'Write 1/8 as a decimal.',
      tier: 'confident',
      correctAnswer: 0.125,
      tolerance: 0.001,
      xpValue: 15,
      hint: 'Divide 1 by 8 using short division. Or use the fact that 1/8 is half of 1/4.',
    },
    {
      id: 'pct-q12',
      type: 'multiple-choice',
      stem: 'Which of these names the same amount as 0.6?',
      tier: 'confident',
      options: ['6%', '60%', '600%', '0.6%'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pct-mis-decimal-shift',
    },
    {
      id: 'pct-q13',
      type: 'spot-misconception',
      stem: 'Maya writes "60% = 6.0" because she shifts the decimal point one place to the left.',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. To turn a percentage into a decimal you divide by 10.',
          isMisconception: true,
        },
        {
          text: 'Actually you must divide by 100, not 10. So 60% becomes 0.6, and each digit moves two columns to the right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pct-mis-decimal-shift',
    },
    {
      id: 'pct-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is converting 2/5 into a percentage.',
      tier: 'confident',
      steps: [
        'A percentage uses 100 on the bottom, so find an equivalent fraction with denominator 100.',
        '5 multiplied by 20 gives 100, so the multiplier is 20.',
        null,
        'So 2/5 is the same as 40/100, which is 40%.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the same multiplier to the numerator: 2 multiplied by 20 gives 40.',
      xpValue: 20,
    },
    {
      id: 'pct-q15',
      type: 'slider-explore',
      stem: 'Slide the marker until it points to the percentage that matches 0.45 on the percent bar.',
      tier: 'confident',
      min: 0,
      max: 100,
      step: 1,
      correctRange: [44, 46],
      label: 'Percentage on a 0 to 100 bar',
      xpValue: 15,
      hint: 'Multiply 0.45 by 100, or read 0.45 as 45 hundredths.',
    },
    {
      id: 'pct-q16',
      type: 'drag-order',
      stem: 'Drag these amounts into order from smallest to largest.',
      tier: 'confident',
      items: ['1/4', '0.3', '40%', '1/2'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      misconceptionId: 'pct-mis-mixed-form-ordering',
    },
    {
      id: 'pct-q17',
      type: 'numeric-entry',
      stem: 'A class of 20 pupils in Sevenoaks took a spelling test. 17 of them scored full marks. What percentage scored full marks? Enter your answer as a number without the per cent sign.',
      tier: 'challenge',
      correctAnswer: 85,
      xpValue: 25,
      hint: 'First write the fraction 17/20, then find an equivalent fraction with denominator 100.',
    },
    {
      id: 'pct-q18',
      type: 'multiple-choice',
      stem: 'Tom buys a Manchester train ticket priced at £40 and pays a 5% booking fee on top. Which decimal is the same amount as the 5% booking fee rate?',
      tier: 'challenge',
      options: ['0.5', '5.0', '0.05', '0.005'],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pct-mis-decimal-shift',
    },
    {
      id: 'pct-q19',
      type: 'multiple-choice',
      stem: 'A Year 7 cricket club has 40 members. 24 of them are bowlers and the rest are batters. Which row of the table correctly shows the bowlers as a fraction in simplest form, a decimal, and a percentage?',
      tier: 'challenge',
      options: [
        '3/5, 0.6, 60%',
        '24/40, 0.24, 24%',
        '3/5, 0.6, 6%',
        '3/5, 6.0, 60%',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Write 24/40 in its simplest form first, then convert.',
    },
    {
      id: 'pct-q20',
      type: 'multiple-choice',
      stem: 'Aisha cycles 3 km of her 5 km route to school. Liam cycles 65% of his 5 km route. Who has cycled the larger fraction of their route?',
      tier: 'challenge',
      options: [
        'They have cycled the same fraction.',
        'Aisha, because 3/5 is the same as 60% and 60 is bigger than 65.',
        'You cannot compare because the routes are different lengths.',
        'Liam, because 65% is more than 60%.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'pct-mis-bigger-percent',
    },
    {
      id: 'pct-q21',
      type: 'multiple-choice',
      stem: 'A pupil claims a percentage cannot be larger than 100. Their teacher writes 150% on the board. Which statement is correct?',
      tier: 'challenge',
      options: [
        'The teacher is wrong; percentages stop at 100%.',
        '150% is the same as 1.5 or 3/2, which is more than one whole.',
        '150% should be rewritten as 50%, ignoring the extra 100.',
        '150% is the same as 0.15 because the teacher moved the point the wrong way.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pct-mis-cannot-exceed-100',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Study Guide, percentages section, "What does per cent mean?" callout box
    {
      id: 'pct-mis-percent-meaning',
      description:
        'I think 30% just means the number 30, and the per cent sign is decoration.',
      triggerAnswer: 'percent-as-number',
      correction:
        'In fact "per cent" means "per hundred". So 30% is 30 per hundred, which is 30/100 or 0.3, not the whole number 30.',
      reExplanation:
        'Picture a 10 by 10 grid of 100 squares. 30% means 30 of those 100 squares are shaded. That is 30/100 of the grid, which simplifies to 3/10 and as a decimal is 0.3.',
    },
    // Source: AQA GCSE Maths Foundation tier examiner report 2023, recurring percentage to decimal conversion error noted in Q5 commentary
    {
      id: 'pct-mis-decimal-shift',
      description:
        'I divide a percentage by 10 to make it a decimal, so 60% becomes 6.0.',
      triggerAnswer: 'shift-by-ten',
      correction:
        'In fact you divide by 100 to convert a percentage into a decimal. Each digit moves two columns to the right, not one.',
      reExplanation:
        '60% means 60 per hundred. 60 divided by 100 is 0.6, with the 6 sitting in the tenths column. Picture moving the decimal point of 60. two places to the left, landing on 0.60, which is the same as 0.6.',
    },
    // Source: Hart, Children's Understanding of Mathematics 11-16 (CSMS), Chapter on Fractions, "stacked digits" error in fraction-to-decimal conversion
    {
      id: 'pct-mis-stack-digits',
      description:
        'I think 1/4 must be 0.4 because I read off the bottom number as the digit after the point.',
      triggerAnswer: 'stack-digits',
      correction:
        'In fact 1/4 is 0.25, not 0.4. The denominator is not the digit you write after the point; you must divide the numerator by the denominator.',
      reExplanation:
        'Find an equivalent fraction with denominator 100. 4 times 25 is 100, so 1/4 is the same as 25/100. That reads as 25 hundredths, which is 0.25 as a decimal and 25% as a percentage.',
    },
    // Source: CGP KS3 Maths Study Guide, percentages section, Common mistake callout on "What is the bottom number?"
    {
      id: 'pct-mis-wrong-denominator',
      description:
        'I write 20% as 20/10 because the per cent sign reminds me of the number 10.',
      triggerAnswer: 'wrong-denominator',
      correction:
        'In fact a percentage always sits over 100, not 10. So 20% is 20/100, which simplifies to 1/5.',
      reExplanation:
        'The denominator of a percentage is fixed: per cent means per hundred. Write the percentage over 100 first, then divide the top and bottom by their highest common factor to find the simplest fraction.',
    },
    // Source: Edexcel GCSE Maths Foundation tier examiner report 2022, fraction-decimal-percentage comparison error reported on the equivalences question
    {
      id: 'pct-mis-bigger-percent',
      description:
        'I assume a fraction with bigger numbers must be a bigger amount than a percentage.',
      triggerAnswer: 'bigger-numbers',
      correction:
        'In fact the size of the amount depends on the relationship between the numbers, not on whether the form looks bigger.',
      reExplanation:
        'Convert both into the same form before comparing. 3/5 is the same as 60/100, which is 60%. So 65% is larger than 3/5, even though 3/5 has small numbers.',
    },
    // Source: CGP KS3 Maths Study Guide, ordering fractions, decimals, and percentages section, Common mistake callout on mixed-form lists
    {
      id: 'pct-mis-mixed-form-ordering',
      description:
        'I order percentages, decimals, and fractions by reading the digits as they appear, without converting them into the same form first.',
      triggerAnswer: 'mixed-form',
      correction:
        'In fact you must convert every value into the same form before ordering. Comparing 0.3 with 40% directly does not work; convert both to decimals or both to percentages.',
      reExplanation:
        'Convert each value into a decimal: 1/4 is 0.25, 0.3 is 0.30, 40% is 0.40, 1/2 is 0.50. Now the order from smallest to largest is clear: 0.25, 0.30, 0.40, 0.50.',
    },
    // Authored, no external source
    {
      id: 'pct-mis-cannot-exceed-100',
      description:
        'I think a percentage cannot be larger than 100 because per cent means out of 100.',
      triggerAnswer: 'ceiling-at-100',
      correction:
        'In fact percentages can go above 100. 100% is one whole, so 150% is one whole plus another half, which is the decimal 1.5.',
      reExplanation:
        'Think of a 10 by 10 grid as one whole, equal to 100%. 150% means a whole grid plus half of a second grid. As a decimal that is 1.5, and as a fraction it is 3/2 or one and one half.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesZoneNodes = [percentagesAsDecimalsFractions]
