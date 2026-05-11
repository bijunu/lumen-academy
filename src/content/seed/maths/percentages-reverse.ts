import type { SkillNode } from '@/types/content'

export const percentagesReverse: SkillNode = {
  id: 'maths-percentages-reverse',
  title: 'Reverse Percentages: Finding the Original',
  description:
    'Given a percentage-changed amount, find the original. Identify the multiplier (1 + change for an increase, 1 - change for a decrease), then divide by it. Equivalently, recognise that the final amount represents a particular percentage of the original (for example, £80 after 20% off represents 80% of the original) and scale back to 100%. Apply to sale prices, VAT-inclusive totals, and chained percentage changes.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-percentages',
  zoneName: 'Percentages',
  tier: 'challenge',
  prerequisites: ['maths-percentages-change'],
  curriculum: {
    ks3Objective:
      'Solve problems involving percentage change, including: percentage increase, decrease and original value problems and simple interest, including in financial mathematics.',
    awardingBodies: {
      aqa: 'N12 Interpret fractions and percentages as operators; solve original-value problems (GCSE Mathematics 8300)',
      edexcel: 'N12 Solve problems involving original value (reverse percentages) (GCSE Mathematics 1MA1)',
      ocr: '2.04c Reverse percentages: find the original quantity given a percentage-changed value (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'pr-scene-divide-by-multiplier',
      title: 'Reversing a Multiplier',
      type: 'simulation',
      instructions:
        'See how reversing a percentage change is just dividing by the multiplier. If a £60 final price came from a 20% increase on the original, then 60 = original x 1.20. Divide both sides: original = 60 / 1.20 = £50. If a £40 sale price came from a 25% discount, then 40 = original x 0.75. Divide: original = 40 / 0.75 = £53.33. The multiplier captures the change; dividing by it undoes the change.',
      data: {
        examples: [
          { final: 60, multiplier: 1.2, original: 50, change: '+20% increase' },
          { final: 40, multiplier: 0.75, original: 53.33, change: '25% sale' },
          { final: 96, multiplier: 1.2, original: 80, change: '+20% VAT' },
        ],
        rule: 'original = final / multiplier. Increase multiplier > 1, decrease multiplier < 1.',
      },
    },
    {
      id: 'pr-scene-scale-to-100',
      title: 'Scaling the New Amount Back to 100%',
      type: 'simulation',
      instructions:
        'See how a final amount represents some percentage of the original. After a 20% sale, the new amount is 80% of the original. The unitary trick scales 80% down to 1% and then up to 100%. If 80% = £40, then 1% = £40 / 80 = £0.50, and 100% = £0.50 x 100 = £50. The two methods (divide by the multiplier vs scale through 1%) always agree because they describe the same proportion.',
      data: {
        examples: [
          { final: 40, percentOfOriginal: 80, onePercent: 0.5, original: 50, change: '20% off' },
          { final: 90, percentOfOriginal: 75, onePercent: 1.2, original: 120, change: '25% off' },
          { final: 165, percentOfOriginal: 110, onePercent: 1.5, original: 150, change: '+10% increase' },
        ],
        rule: 'one percent = final / (percent of original). Original = one percent x 100.',
      },
    },
    {
      id: 'pr-scene-method-compare',
      title: 'Two Methods, One Answer',
      type: 'simulation',
      instructions:
        'See the same reverse problem solved two ways. A £120 jumper is reduced by 25% to £90. Find the original (the question already gives £120, so the new amount £90 is the working). Method A (multiplier): 90 / 0.75 = £120. Method B (unitary): £90 is 75% of original, so 1% = 90 / 75 = £1.20, and 100% = £120. The answer matches. The unitary method explains the structure; the multiplier method is faster on a calculator.',
      data: {
        problem: 'After 25% off, price = £90. Find the original.',
        methodA: { steps: ['multiplier = 1 - 0.25 = 0.75', '90 / 0.75 = 120'], answer: 120 },
        methodB: { steps: ['90 is 75% of original', '1% = 90 / 75 = 1.20', '100% = 1.20 x 100 = 120'], answer: 120 },
        rule: 'Pick the method that fits the question. Both rely on the same proportion: final / (percent as decimal) = original.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'pr-worked-1',
      title: 'A sale price of £40 came from a 20% discount. Find the original.',
      steps: [
        {
          explanation:
            'Identify the percentage change and its direction. 20% off means the price decreased.',
          maths: 'change: -20%',
        },
        {
          explanation:
            'Build the multiplier for the change. For a decrease subtract from 1.',
          maths: 'multiplier = 1 - 0.20 = 0.80',
        },
        {
          explanation:
            'Set up the relationship: final = original x multiplier.',
          maths: '40 = original x 0.80',
        },
        {
          explanation:
            'Divide both sides by the multiplier to find the original.',
          maths: 'original = 40 / 0.80 = 50',
        },
        {
          explanation: 'So the original price was £50. Check: 20% of 50 is £10, and 50 - 10 = 40, matching the sale price.',
          maths: 'original = £50',
        },
      ],
    },
    {
      id: 'pr-worked-2',
      title: 'After 25% VAT was added, the total is £75. Find the price before VAT (missing step).',
      steps: [
        {
          explanation:
            'Identify the percentage change and direction. A VAT charge is an increase.',
          maths: 'change: +25%',
        },
        {
          explanation:
            'Build the multiplier. For an increase add to 1.',
          maths: 'multiplier = 1 + 0.25 = 1.25',
        },
        {
          explanation:
            'Set up the relationship between original and final.',
          maths: 'final = original x 1.25; 75 = original x 1.25',
        },
        {
          explanation:
            'Divide the final by the multiplier to recover the original.',
          maths: 'original = 75 / 1.25 = 60',
        },
        {
          explanation:
            'Check by re-applying the change to the recovered original.',
          maths: 'verification: 60 x 1.25 = 75',
        },
        {
          explanation: 'So the pre-VAT price was £60.',
          maths: 'original = £60',
        },
      ],
    },
  ],
  questions: [
    // Core 1: after 10% increase, find original
    {
      id: 'pr-q1',
      type: 'multiple-choice',
      stem: 'After a 10% pay rise, a worker now earns £77 per hour. What was the original hourly rate?',
      tier: 'core',
      options: ['£70', '£67', '£87', '£77'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pr-mis-inverse-percentage-on-new',
      hint: 'multiplier = 1.10. original = 77 / 1.10 = 70. Check: 70 x 1.10 = 77.',
    },
    // Core 2: after 20% off, find original
    {
      id: 'pr-q2',
      type: 'numeric-entry',
      stem: 'After a 20% sale discount, a jumper costs £40. What was the original price, in pounds?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'pounds',
      xpValue: 10,
      hint: 'multiplier = 0.80. original = 40 / 0.80 = 50.',
    },
    // Core 3: identify the reverse multiplier for 25% off
    {
      id: 'pr-q3',
      type: 'multiple-choice',
      stem: 'A 25% sale has reduced a price to £30. Which calculation finds the original price?',
      tier: 'core',
      options: ['30 x 0.75', '30 + 25', '30 x 1.25', '30 / 0.75'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pr-mis-treat-as-direct',
      hint: 'multiplier for 25% off = 0.75. original = final / multiplier = 30 / 0.75.',
    },
    // Core 4: after 50% increase, find original
    {
      id: 'pr-q4',
      type: 'multiple-choice',
      stem: 'After a 50% increase, a value is 30. What was the original value?',
      tier: 'core',
      options: ['15', '20', '25', '45'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'multiplier = 1.50. original = 30 / 1.50 = 20. Check: 20 + 50% of 20 = 20 + 10 = 30.',
    },
    // Core 5: simple sale reverse
    {
      id: 'pr-q5',
      type: 'multiple-choice',
      stem: 'A shop sells a coat for £45 in a 10% sale. What was the original price?',
      tier: 'core',
      options: ['£50.00', '£49.50', '£40.50', '£55.00'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pr-mis-inverse-percentage-on-new',
      hint: 'multiplier = 0.90. original = 45 / 0.90 = 50.',
    },
    // Core 6: VAT-inclusive reverse
    {
      id: 'pr-q6',
      type: 'multiple-choice',
      stem: 'A bill of £120 includes 20% VAT. What was the price before VAT?',
      tier: 'core',
      options: ['£96', '£24', '£140', '£100'],
      correctIndex: 3,
      misconceptionId: 'pr-mis-vat-multiplier-confusion',
      xpValue: 10,
      hint: 'multiplier = 1.20. original = 120 / 1.20 = 100. Check: 100 + 20% VAT = £120.',
    },
    // Core 7: spot-misconception on direct inversion
    {
      id: 'pr-q7',
      type: 'spot-misconception',
      stem: 'A book costs £36 after a 20% sale discount. Tom says "the original was £36 + 20% of £36 = £36 + £7.20 = £43.20".',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. To undo a 20% sale, you add 20% of the sale price back on.',
          isMisconception: true,
        },
        {
          text: 'In fact you divide by the sale multiplier 0.80. original = 36 / 0.80 = £45. The 20% has to be taken from the original (which is £45), not from the £36 sale price. 20% of £36 is only £7.20 but the original discount was 20% of £45 = £9.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pr-mis-inverse-percentage-on-new',
    },
    // Core 8: 40% sale
    {
      id: 'pr-q8',
      type: 'multiple-choice',
      stem: 'A 40% sale leaves a TV at £36. What was the original price?',
      tier: 'core',
      options: ['£50.40', '£60.00', '£90.00', '£76.00'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'multiplier = 0.60. original = 36 / 0.60 = 60.',
    },
    // Confident 1: non-round numbers
    {
      id: 'pr-q9',
      type: 'numeric-entry',
      stem: 'After a 30% discount, a coat costs £49. What was the original price, in pounds?',
      tier: 'confident',
      correctAnswer: 70,
      unit: 'pounds',
      xpValue: 15,
      hint: 'multiplier = 0.70. original = 49 / 0.70 = 70.',
    },
    // Confident 2: increase reverse
    {
      id: 'pr-q10',
      type: 'multiple-choice',
      stem: 'After a 15% pay rise, a worker earns £230 per week. What was the original weekly pay?',
      tier: 'confident',
      options: ['£195.50', '£215.00', '£245.00', '£200.00'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'multiplier = 1.15. original = 230 / 1.15 = 200.',
    },
    // Confident 3: clearance reverse with decimal
    {
      id: 'pr-q11',
      type: 'numeric-entry',
      stem: 'In a 12% clearance, a jumper costs £35.20. What was the original price, in pounds?',
      tier: 'confident',
      correctAnswer: 40,
      unit: 'pounds',
      xpValue: 15,
      hint: 'multiplier = 0.88. original = 35.20 / 0.88 = 40.',
    },
    // Confident 4: spot-misconception on "of" vs "by"
    {
      id: 'pr-q12',
      type: 'spot-misconception',
      stem: 'Maya reads "after a 25% sale, a coat costs £60" and writes "60 = 25% of original, so original = 60 / 0.25 = £240".',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is right. The £60 is 25% of the original.',
          isMisconception: true,
        },
        {
          text: 'In fact a 25% sale removes 25% from the original, leaving 75%. The £60 is 75% of the original, not 25%. original = 60 / 0.75 = £80.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pr-mis-of-vs-by',
    },
    // Confident 5: missing-step VAT reverse with non-round
    {
      id: 'pr-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A retailer charges £108 VAT-inclusive (20% VAT). Find the pre-VAT price.',
      tier: 'confident',
      steps: [
        'Identify the change: +20% VAT.',
        'Build the multiplier: 1 + 0.20 = 1.20.',
        null,
        'The pre-VAT price is £90. Check: 90 + 20% of 90 = 90 + 18 = £108.',
      ],
      missingStepIndex: 2,
      correctStep: 'Divide the VAT-inclusive total by the multiplier: 108 / 1.20 = 90.',
      xpValue: 20,
    },
    // Confident 6: real-world VAT reverse
    {
      id: 'pr-q14',
      type: 'multiple-choice',
      stem: 'A receipt shows a printer total of £180 including 20% VAT. What is the printer price before VAT?',
      tier: 'confident',
      options: ['£144.00', '£160.00', '£150.00', '£216.00'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pr-mis-inverse-percentage-on-new',
      hint: 'multiplier = 1.20. original = 180 / 1.20 = 150. Adding 20% of £150 (which is £30) returns £180.',
    },
    // Confident 7: drag-order originals from finals
    {
      id: 'pr-q15',
      type: 'drag-order',
      stem: 'Each of these is a final price after a percentage change. Drag them into order from the smallest original to the largest original.',
      tier: 'confident',
      items: [
        '£42 after 30% off',
        '£90 after 25% off',
        '£72 after 20% off',
        '£60 after 50% increase',
      ],
      correctOrder: [3, 0, 2, 1],
      xpValue: 20,
      hint: 'Compute each original: £42/0.70 = £60. £90/0.75 = £120. £72/0.80 = £90. £60/1.50 = £40. Order: £40, £60, £90, £120.',
    },
    // Confident 8: salary after rise
    {
      id: 'pr-q16',
      type: 'numeric-entry',
      stem: 'After an 8% pay rise, a teacher\'s annual salary is £32,400. What was the salary before the rise, in pounds?',
      tier: 'confident',
      correctAnswer: 30000,
      unit: 'pounds',
      xpValue: 15,
      hint: 'multiplier = 1.08. original = 32400 / 1.08 = 30000. Check: 30000 + 8% of 30000 = 30000 + 2400 = 32400.',
    },
    // Challenge 1: coat sale chain (the plan's stretch, adjusted)
    {
      id: 'pr-q17',
      type: 'numeric-entry',
      stem: 'In a January sale, a Sevenoaks boutique reduces a coat by 30% to £63. The boutique\'s label price was already 10% lower than the autumn launch price. What was the autumn launch price, in pounds?',
      tier: 'challenge',
      correctAnswer: 100,
      unit: 'pounds',
      xpValue: 25,
      hint: 'First reverse the 30% sale: 63 / 0.70 = 90 (the label price). Then reverse the 10% lower step: 90 / 0.90 = 100 (the autumn launch price).',
    },
    // Challenge 2: multistep multi-decrease reverse
    {
      id: 'pr-q18',
      type: 'multiple-choice',
      stem: 'A holiday firm slashes a £X holiday by 20%, then drops the new price by a further 25%. The final advertised price is £180. What was £X (the original price)?',
      tier: 'challenge',
      options: ['£225', '£250', '£300', '£270'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Combined multiplier = 0.80 x 0.75 = 0.60. original = 180 / 0.60 = 300. Check: 300 x 0.80 = 240; 240 x 0.75 = 180.',
    },
    // Challenge 3: profit reverse word problem
    {
      id: 'pr-q19',
      type: 'numeric-entry',
      stem: 'A market trader sells a vase for £42 making a 40% profit on the cost. What was the cost price, in pounds?',
      tier: 'challenge',
      correctAnswer: 30,
      unit: 'pounds',
      xpValue: 25,
      hint: 'A 40% profit means selling price = cost x 1.40. cost = 42 / 1.40 = 30.',
    },
    // Challenge 4: population reverse
    {
      id: 'pr-q20',
      type: 'multiple-choice',
      stem: 'A Kent secondary school grew its intake by 12% this year. There are now 364 pupils in Year 7. How many pupils were in Year 7 last year?',
      tier: 'challenge',
      options: ['320', '325', '330', '350'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'multiplier = 1.12. original = 364 / 1.12 = 325. Check: 325 + 12% of 325 = 325 + 39 = 364.',
    },
    // Challenge 5: chained increase-then-decrease reverse
    {
      id: 'pr-q21',
      type: 'numeric-entry',
      stem: 'A market stallholder marks up a wholesale price by 50%, then offers a 20% loyalty discount on the marked-up price. A customer pays £24 with the discount. What was the wholesale price, in pounds?',
      tier: 'challenge',
      correctAnswer: 20,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Combined multiplier = 1.50 x 0.80 = 1.20. wholesale = 24 / 1.20 = 20. Check: 20 x 1.50 = 30, then 30 x 0.80 = 24.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a reverse percentage question where pupils applied the inverse percentage to the new value instead of dividing by the multiplier.
    {
      id: 'pr-mis-inverse-percentage-on-new',
      description:
        'I undo a 20% sale by finding 20% of the sale price and adding it back, so £40 after 20% off must come from £40 + 20% of £40 = £48.',
      triggerAnswer: 'inverse-percentage-on-new',
      correction:
        'Actually divide the sale price by the multiplier (0.80 for 20% off). The 20% was taken from the ORIGINAL, not from the sale price.',
      reExplanation:
        'For a sale price of £40 after 20% off, original = 40 / 0.80 = £50. The 20% discount removed £10 (which is 20% of £50, not 20% of £40). Adding 20% of £40 (£8) back gives £48, which is wrong because the percentage refers to a different base. Always divide by the multiplier; never add or subtract the same percentage on the new value.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a reverse percentage question where pupils treated it as a direct percentage problem, multiplying instead of dividing.
    {
      id: 'pr-mis-treat-as-direct',
      description:
        'I think reverse percentage problems use multiplication: given £60 after 20% off, I work out 60 x 0.80 = £48 as the original.',
      triggerAnswer: 'treat-as-direct',
      correction:
        'In fact reverse percentage problems use DIVISION by the multiplier. Multiplying applies the change again; dividing undoes it.',
      reExplanation:
        'For a sale price of £60 after 20% off, the relationship is "final = original x 0.80". Solving for original requires dividing by 0.80: original = 60 / 0.80 = £75. Multiplying instead applies the same 20% discount once more, dropping the price further to £48, which is the wrong direction.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Reverse Percentages" page, "Common mistake" callout warning that "25% off" leaves 75% of the original, not 25%.
    {
      id: 'pr-mis-of-vs-by',
      description:
        'I confuse "after a 25% sale" with "is 25% of the original", so I divide by 0.25 instead of by 0.75.',
      triggerAnswer: 'of-vs-by',
      correction:
        'Actually "after a 25% sale" means 25% has been taken OFF, leaving 75% of the original. Divide by 0.75, not by 0.25.',
      reExplanation:
        'A 25% sale removes 25% and keeps 75%. So a £60 sale price represents 75% of the original: original = 60 / 0.75 = £80. Dividing by 0.25 instead gives £240, which would only be correct if the £60 had been 25% of the original (a 75% sale). Read "discount of X%" or "X% off" as a SUBTRACTION from 100%, not as the percentage of the original that remains.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a VAT reverse question where pupils chose 0.20 instead of 1.20 as the multiplier.
    {
      id: 'pr-mis-vat-multiplier-confusion',
      description:
        'When VAT is added at 20%, I take the multiplier to be 0.20 (the VAT itself) rather than 1.20 (1 plus the VAT rate).',
      triggerAnswer: 'vat-multiplier-confusion',
      correction:
        'In fact the VAT-inclusive multiplier is 1.20, the sum of 100% original plus 20% VAT. Dividing by 0.20 alone would give the VAT-only amount.',
      reExplanation:
        'For a VAT-inclusive bill of £120, original = 120 / 1.20 = £100. The £20 VAT plus £100 base = £120 bill, confirming the answer. Dividing by 0.20 alone gives £600, which is the price that would generate £120 of VAT (a 6 times overstatement). VAT-inclusive multipliers always exceed 1.',
    },
    // Source: NCETM Secondary Magazine, Issue 126, article on reverse percentage misconceptions, citing pupil work where the percentage base shifts mid-chain in multi-step problems.
    {
      id: 'pr-mis-multistep-base-shift',
      description:
        'In a chain of percentage changes, I forget that the second change acts on the new amount and treat both percentages as applying to the same base.',
      triggerAnswer: 'multistep-base-shift',
      correction:
        'Actually each percentage change has its own base. Multiply the multipliers together, then divide the final amount by the combined multiplier.',
      reExplanation:
        'For "£X marked up 50% then discounted 20% to £24", combined multiplier = 1.50 x 0.80 = 1.20. wholesale = 24 / 1.20 = £20. Treating both percentages as applying to £X would give 1 + 0.50 - 0.20 = 1.30 as the multiplier, leading to £18.46, which is wrong because it ignores that the 20% off was taken from the marked-up price (not from the wholesale).',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Ratio and Percentages" by Hart, on pupils reading the final amount as the original because the word "original" was absent or attached to a different number in the stem.
    {
      id: 'pr-mis-final-is-original',
      description:
        'I read the final (changed) amount in the question as the original because the word "original" was not in the stem, and apply the percentage change forward instead of backwards.',
      triggerAnswer: 'final-is-original',
      correction:
        'In fact a phrase like "after the sale" or "with VAT included" always signals that the figure given is the FINAL value. The unknown is the original.',
      reExplanation:
        'For "after a 25% pay rise, the salary is £40,000", the £40,000 is the new salary, not the old. Original = 40000 / 1.25 = £32,000. Treating £40,000 as the original and applying a 25% increase would give £50,000 as the answer to a different (forward) question. Look for time-direction words like "after", "now", "with X added/removed" to identify the final value.',
    },
    // Authored, no external source: classroom-observed slip where pupils treat the percentage in a reverse problem as the percentage of the new amount (not of the original), leading to an off-by-multiplier error in chained problems.
    {
      id: 'pr-mis-percentage-on-final',
      description:
        'In a reverse problem, I treat the stated percentage as a percentage of the FINAL amount, not the original, so I compute the wrong amount of change.',
      triggerAnswer: 'percentage-on-final',
      correction:
        'Actually the percentage in a reverse problem always refers to the ORIGINAL amount. Build the multiplier first, then divide.',
      reExplanation:
        'For "£60 after 20% off", the 20% is 20% of the original (not 20% of £60). The original is 60 / 0.80 = £75; the actual £ discount was 15 (which is 20% of 75). Computing 20% of £60 (£12) and subtracting gives £48, off by the difference between the two bases. The percentage in any percentage problem always describes a fraction of the base it modifies; in reverse problems, that base is the original.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const percentagesReverseZoneNodes = [percentagesReverse]
