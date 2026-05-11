import type { SkillNode } from '@/types/content'

export const fractionsAddSubtract: SkillNode = {
  id: 'maths-fractions-add-subtract',
  title: 'Adding and Subtracting Fractions',
  description:
    'Add and subtract proper fractions with the same denominator by combining the numerators, and add or subtract proper fractions with different denominators by first finding a common denominator using the lowest common multiple of small denominators. Mixed numbers are deferred to a follow-on node.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'core',
  prerequisites: ['maths-fractions-equivalent'],
  curriculum: {
    ks3Objective:
      'Use the four operations, including formal written methods, applied to integers, decimals, proper and improper fractions, and mixed numbers, all both positive and negative.',
    awardingBodies: {
      aqa: 'N8 Calculate exactly with fractions',
      edexcel: 'N8 Calculate exactly with fractions',
      ocr: '1.02b Apply the four operations to proper fractions',
    },
  },
  scenes: [
    {
      id: 'fas-scene-same-denom-bars',
      title: 'Same Denominator: Just Add the Tops',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see how 2/8 and 3/8 sit side by side as five eighths in total. The denominator names the size of each piece, and the size does not change when you combine the pieces.',
      data: {
        rows: [
          { denominator: 8, colour: '#3B82F6', shaded: 2, label: '2/8' },
          { denominator: 8, colour: '#22C55E', shaded: 3, label: '3/8' },
          { denominator: 8, colour: '#A855F7', shaded: 5, label: '5/8 = 2/8 + 3/8' },
        ],
        notes:
          'When the denominators match, add the numerators and keep the denominator the same. The denominator names the size of each piece; the numerator counts how many.',
      },
    },
    {
      id: 'fas-scene-different-denoms',
      title: 'Different Denominators: Find a Common Floor',
      type: 'fraction-wall',
      instructions:
        'Click each bar to see how 1/3 and 1/4 are rewritten with a common denominator of 12. Once the denominators match, the numerators can be added.',
      data: {
        rows: [
          { denominator: 3, colour: '#3B82F6', shaded: 1, label: '1/3' },
          { denominator: 4, colour: '#22C55E', shaded: 1, label: '1/4' },
          { denominator: 12, colour: '#A855F7', shaded: 4, label: '1/3 = 4/12' },
          { denominator: 12, colour: '#EC4899', shaded: 3, label: '1/4 = 3/12' },
          { denominator: 12, colour: '#F59E0B', shaded: 7, label: '4/12 + 3/12 = 7/12' },
        ],
        notes:
          'The lowest common multiple of 3 and 4 is 12, so 12 is the smallest common denominator. Rewrite each fraction with denominator 12, then add the numerators.',
      },
    },
    {
      id: 'fas-scene-lcm-table',
      title: 'Finding the Lowest Common Multiple',
      type: 'diagram',
      instructions:
        'Read the multiples list for each pair of small denominators and look for the first number that appears in both rows. The first match for 4 and 6 is 12. The first match for 5 and 10 is 10, since 10 already appears as a multiple of 5. The first match for 3 and 5 is 15. The lowest common multiple is the smallest common denominator you can use to add or subtract the fractions.',
      data: {
        examples: [
          {
            denominators: [4, 6],
            multiplesA: [4, 8, 12, 16, 20],
            multiplesB: [6, 12, 18, 24],
            lcm: 12,
          },
          {
            denominators: [5, 10],
            multiplesA: [5, 10, 15, 20],
            multiplesB: [10, 20, 30, 40],
            lcm: 10,
          },
          {
            denominators: [3, 5],
            multiplesA: [3, 6, 9, 12, 15, 18],
            multiplesB: [5, 10, 15, 20, 25],
            lcm: 15,
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fas-worked-1',
      title: 'Add 2/7 and 3/7 (same denominator)',
      steps: [
        {
          explanation:
            'Both fractions have the same denominator, 7. The size of each part is the same, so the parts can be combined directly.',
          maths: '2/7 + 3/7',
        },
        {
          explanation:
            'Add the numerators only. Two parts plus three parts is five parts.',
          maths: '2 + 3 = 5',
        },
        {
          explanation:
            'Keep the denominator as 7. The number of parts has changed, but the size of each part has not.',
          maths: '5/7',
        },
        {
          explanation:
            'Check the answer is in simplest form. The factors of 5 are 1 and 5; the factors of 7 are 1 and 7. The only common factor is 1, so 5/7 is already in simplest form.',
          maths: '2/7 + 3/7 = 5/7',
        },
      ],
    },
    {
      id: 'fas-worked-2',
      title: 'Subtract 1/4 from 2/3 (different denominators)',
      steps: [
        {
          explanation:
            'The denominators are 3 and 4. They are different, so first find a common denominator.',
          maths: '2/3 - 1/4',
        },
        {
          explanation:
            'List the multiples of each denominator and find the lowest common multiple. Multiples of 3 are 3, 6, 9, 12. Multiples of 4 are 4, 8, 12. The lowest common multiple is 12.',
          maths: 'LCM(3, 4) = 12',
        },
        {
          explanation:
            'Rewrite each fraction with denominator 12. For 2/3, multiply top and bottom by 4 (because 3 multiplied by 4 is 12).',
          maths: '2/3 = 8/12',
        },
        {
          explanation:
            'For 1/4, multiply top and bottom by 3 (because 4 multiplied by 3 is 12).',
        },
        {
          explanation:
            'Now both fractions have denominator 12. Subtract the numerators.',
          maths: '8/12 - 3/12 = 5/12',
        },
        {
          explanation:
            'Check the answer is in simplest form. The only common factor of 5 and 12 is 1, so 5/12 is already in simplest form.',
          maths: '2/3 - 1/4 = 5/12',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fas-q1',
      type: 'multiple-choice',
      stem: 'What is 1/5 + 2/5?',
      tier: 'core',
      options: ['3/5', '3/10', '1/5', '2/25'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The denominators match. Add the numerators and keep the denominator.',
      misconceptionId: 'fas-mis-add-both',
    },
    {
      id: 'fas-q2',
      type: 'multiple-choice',
      stem: 'What is 5/8 - 2/8?',
      tier: 'core',
      options: ['7/16', '7/8', '3/16', '3/8'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Subtract the numerators and keep the denominator the same.',
      misconceptionId: 'fas-mis-add-both',
    },
    {
      id: 'fas-q3',
      type: 'numeric-entry',
      stem: 'Calculate 3/10 + 4/10. Enter the numerator of the answer in its lowest terms.',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Add 3 and 4. Then check whether the answer simplifies (the only common factor of 7 and 10 is 1).',
      misconceptionId: 'fas-mis-find-lcm-when-same',
    },
    {
      id: 'fas-q4',
      type: 'numeric-entry',
      stem: 'Work out 7/12 - 1/12. Enter the numerator of the answer in its lowest terms.',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'Subtract the numerators (7 - 1 = 6). Then simplify 6/12.',
      misconceptionId: 'fas-mis-skip-simplify',
    },
    {
      id: 'fas-q5',
      type: 'multiple-choice',
      stem: 'A pizza is cut into 12 equal slices. Joe eats 4/12 and Maya eats 5/12. What fraction of the pizza have they eaten in total?',
      tier: 'core',
      options: ['9/24', '9/12', '3/4', '20/12'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Add the numerators: 4 + 5 = 9. Then simplify 9/12.',
      misconceptionId: 'fas-mis-skip-simplify',
    },
    {
      id: 'fas-q6',
      type: 'spot-misconception',
      stem: 'Liam writes 2/5 + 1/5 = 3/10 because he says: "Add the tops and add the bottoms."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. To add fractions, you add both the numerators and the denominators.',
          isMisconception: true,
        },
        {
          text: 'Actually you add only the numerators when the denominators are the same. So 2/5 + 1/5 = 3/5, not 3/10. The denominator stays the same because the size of each piece has not changed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fas-mis-add-both',
    },
    {
      id: 'fas-q7',
      type: 'multiple-choice',
      stem: 'What is the lowest common multiple of 4 and 6?',
      tier: 'core',
      options: ['10', '24', '12', '2'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. The smallest match is 12.',
    },
    {
      id: 'fas-q8',
      type: 'numeric-entry',
      stem: 'A bottle holds 5/9 of a litre of squash. You pour out 2/9 of a litre. What is the numerator of the fraction left, in lowest terms?',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'Subtract: 5/9 - 2/9 = 3/9. Then simplify 3/9.',
    },
    {
      id: 'fas-q9',
      type: 'multiple-choice',
      stem: 'What is 1/2 + 1/4?',
      tier: 'confident',
      options: ['2/6', '3/4', '2/4', '1/8'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Rewrite 1/2 with denominator 4: 1/2 = 2/4. Then add: 2/4 + 1/4 = 3/4.',
      misconceptionId: 'fas-mis-no-common-denom',
    },
    {
      id: 'fas-q10',
      type: 'multiple-choice',
      stem: 'What is the lowest common denominator you would use to add 1/3 and 1/4?',
      tier: 'confident',
      options: ['7', '12', '24', '3'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'List multiples of 3 (3, 6, 9, 12) and of 4 (4, 8, 12). The smallest match is 12. Multiplying the denominators (3 x 4 = 12) also works here, but listing multiples is the safer general method.',
      misconceptionId: 'fas-mis-product-as-denom',
    },
    {
      id: 'fas-q11',
      type: 'multiple-choice',
      stem: 'Work out 2/3 + 1/6.',
      tier: 'confident',
      options: ['3/9', '5/6', '3/6', '1/2'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'The lowest common denominator is 6. Rewrite 2/3 as 4/6. Then add: 4/6 + 1/6 = 5/6.',
    },
    {
      id: 'fas-q12',
      type: 'numeric-entry',
      stem: 'Calculate 3/4 - 1/3. Enter the numerator of the answer in lowest terms.',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: 'The lowest common denominator is 12 (the LCM of 4 and 3). You could multiply 4 by 3 to get 12, but listing multiples shows 12 directly. Rewrite both fractions, then subtract: 9/12 - 4/12 = 5/12.',
      misconceptionId: 'fas-mis-product-as-denom',
    },
    {
      id: 'fas-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Aisha is calculating 1/6 + 1/4.',
      tier: 'confident',
      steps: [
        'The denominators are 6 and 4, so first find the lowest common multiple.',
        'Multiples of 6: 6, 12, 18. Multiples of 4: 4, 8, 12. The lowest common multiple is 12.',
        'Rewrite 1/6 with denominator 12: 1/6 = 2/12.',
        null,
        'Add the numerators: 2/12 + 3/12 = 5/12.',
        'Check 5 and 12 share no common factor other than 1, so 5/12 is in simplest form.',
      ],
      missingStepIndex: 3,
      correctStep: 'Rewrite 1/4 with denominator 12: multiply top and bottom by 3 to get 3/12.',
      xpValue: 20,
    },
    {
      id: 'fas-q14',
      type: 'drag-order',
      stem: 'Drag these calculations into order so the answers go from smallest to largest.',
      tier: 'confident',
      items: ['1/4 + 1/4', '1/2 - 1/8', '2/3 - 1/4', '5/6 - 1/12'],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
      hint: 'Compute each: 1/4+1/4 = 1/2, 1/2-1/8 = 3/8, 2/3-1/4 = 5/12, 5/6-1/12 = 9/12 = 3/4.',
    },
    {
      id: 'fas-q15',
      type: 'spot-misconception',
      stem: 'Tom writes 1/2 + 1/3 = 2/5 by adding 1+1 on top and 2+3 on the bottom.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. When the denominators are different, add the tops and add the bottoms.',
          isMisconception: true,
        },
        {
          text: 'Actually Tom must first find a common denominator before adding. Rewriting 1/2 as 3/6 and 1/3 as 2/6 gives 5/6, not 2/5.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fas-mis-add-both-different',
    },
    {
      id: 'fas-q16',
      type: 'numeric-entry',
      stem: 'Work out 5/8 - 1/4. Enter the numerator of the answer in lowest terms.',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Lowest common denominator is 8. Rewrite 1/4 as 2/8. Then subtract: 5/8 - 2/8 = 3/8.',
      misconceptionId: 'fas-mis-swap-after-rewrite',
    },
    {
      id: 'fas-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 form runs a charity stall. They use 3/8 of their stock on Friday morning and 1/4 on Friday afternoon. What fraction of the stock have they used in total? Enter the numerator in lowest terms.',
      tier: 'challenge',
      correctAnswer: 5,
      xpValue: 25,
      hint: 'Lowest common denominator is 8. Rewrite 1/4 as 2/8. Add: 3/8 + 2/8 = 5/8.',
    },
    {
      id: 'fas-q18',
      type: 'multiple-choice',
      stem: 'A Sevenoaks builder mixes 2/5 of a bucket of sand with 3/10 of a bucket of cement and 1/10 of a bucket of gravel. What fraction of a bucket is the mixture in total, in simplest form?',
      tier: 'challenge',
      options: ['6/25', '6/10', '4/5', '8/10'],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Rewrite 2/5 as 4/10. Add: 4/10 + 3/10 + 1/10 = 8/10. Simplify 8/10 to 4/5.',
      misconceptionId: 'fas-mis-skip-simplify',
    },
    {
      id: 'fas-q19',
      type: 'numeric-entry',
      stem: 'A Lake District water butt is 7/12 full at sunrise. By midday it has lost 1/4 to watering the garden. What fraction of the butt is left at midday? Enter the numerator in lowest terms.',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'Subtract: 7/12 - 1/4 = 7/12 - 3/12 = 4/12. Simplify 4/12 to 1/3.',
      misconceptionId: 'fas-mis-subtract-bigger',
    },
    {
      id: 'fas-q20',
      type: 'multiple-choice',
      stem: 'Aisha pours 1/3 of a litre of orange juice and 1/6 of a litre of lemonade into a jug. Liam claims the jug now holds 2/9 of a litre because he added the tops and the bottoms. Which row of the table corrects Liam and gives the right amount?',
      tier: 'challenge',
      options: [
        '1/3 + 1/6 = 2/9 of a litre. Liam is correct.',
        '1/3 + 1/6 = 2/3 of a litre, by adding the numerators with denominator 6.',
        '1/3 + 1/6 = 1/2 of a litre, by rewriting 1/3 as 2/6 and adding to give 3/6.',
        '1/3 + 1/6 = 1/9 of a litre, since adding fractions makes them smaller.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'fas-mis-add-both-different',
    },
    {
      id: 'fas-q21',
      type: 'free-text',
      stem: 'Maya wants to add 1/2 + 1/3. Explain in one or two sentences why she cannot just add the numerators (1+1) and add the denominators (2+3) to get 2/5. Then state the correct answer using a common denominator of 6.',
      tier: 'challenge',
      sampleAnswer:
        'The denominators name the size of each piece. Halves and thirds are different sizes, so 1/2 and 1/3 cannot be combined directly. Rewriting both with denominator 6 gives 3/6 and 2/6, which add to 5/6.',
      keywords: [
        'common denominator',
        'different sizes',
        '5/6',
        '3/6',
        '2/6',
      ],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: Hart, K. M. (ed.) (1981) Children's Understanding of Mathematics: 11-16 (CSMS), John Murray; chapter on Fractions documents the "add the tops and bottoms" misconception as the canonical fraction-arithmetic error.
    {
      id: 'fas-mis-add-both',
      description:
        'Adding fractions by adding the numerators AND adding the denominators (so 2/5 + 1/5 becomes 3/10).',
      triggerAnswer: 'add-tops-and-bottoms',
      correction:
        'When the denominators are the same, you only add the numerators. The denominator names the size of each piece, and that size does not change when you combine them.',
      reExplanation:
        'Picture 2 fifths plus 1 fifth as bars on a fraction wall. Three pieces of size one-fifth is 3/5, not 3/10. Adding the denominator would shrink the pieces to tenths, but no shrinking has happened.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a fraction addition question where pupils added unlike denominators directly without first finding a common denominator.
    {
      id: 'fas-mis-add-both-different',
      description:
        'Adding fractions with different denominators by adding the numerators AND the denominators (so 1/2 + 1/3 becomes 2/5).',
      triggerAnswer: 'add-different-bottoms',
      correction:
        'When the denominators are different, you cannot add directly. You must first rewrite each fraction with the same (common) denominator, then add the numerators and keep the common denominator.',
      reExplanation:
        '1/2 + 1/3: the lowest common denominator is 6. Rewrite 1/2 as 3/6 and 1/3 as 2/6. Add the numerators to get 5/6, keeping the denominator 6. The answer 2/5 ignores the rule that fractions can only be added when their pieces are the same size.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring slip where pupils added fractions with different denominators without first converting them, then claimed the smaller of the two denominators.
    {
      id: 'fas-mis-no-common-denom',
      description:
        'Adding or subtracting fractions with different denominators by treating them as if they already shared the smaller denominator.',
      triggerAnswer: 'no-common-denom',
      correction:
        'Before adding or subtracting, both fractions must be rewritten with a common denominator. The lowest common multiple of the two denominators is the smallest one to use.',
      reExplanation:
        '1/2 + 1/4: rewrite 1/2 with denominator 4 by multiplying top and bottom by 2 to get 2/4. Then add: 2/4 + 1/4 = 3/4. Skipping the rewriting step gives a wrong answer because the pieces named by the two denominators are not the same size.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Adding and Subtracting Fractions" page; the "Common mistake" callout that pupils stop after combining the numerators without checking whether the answer can be simplified.
    {
      id: 'fas-mis-skip-simplify',
      description:
        'Combining fractions correctly but not simplifying the result, leaving 6/12 instead of 1/2.',
      triggerAnswer: 'skip-simplify',
      correction:
        'Once you have the answer, check whether the numerator and denominator share a common factor greater than 1. If they do, divide both by it to simplify.',
      reExplanation:
        '4/12 + 5/12 = 9/12. Both 9 and 12 share a factor of 3, so divide both by 3: 9/12 = 3/4. Always finish with a fraction in its simplest form.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Fractions); pupils confuse the lowest common multiple with the product of the two denominators, doing extra work and risking errors.
    {
      id: 'fas-mis-product-as-denom',
      description:
        'Always multiplying the two denominators together to find a common denominator, even when a smaller multiple would do.',
      triggerAnswer: 'product-as-denom',
      correction:
        'Multiplying the denominators always gives a common denominator, but not the lowest one. Using a smaller common denominator means smaller numbers and easier work.',
      reExplanation:
        'For 1/4 + 1/6, multiplying denominators gives 24, but the lowest common multiple of 4 and 6 is 12. Rewriting as 3/12 + 2/12 = 5/12 is faster than using twenty-fourths and then simplifying.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); commentary on a subtraction-of-fractions question where pupils swapped the numerators after rewriting with a common denominator.
    {
      id: 'fas-mis-swap-after-rewrite',
      description:
        'After rewriting fractions with a common denominator, swapping the numerators with the original numerators when adding or subtracting.',
      triggerAnswer: 'swap-after-rewrite',
      correction:
        'Use the new numerators that match the new common denominator. The original numerators belong to the original denominators and should not be re-used after rewriting.',
      reExplanation:
        '2/3 - 1/4 with common denominator 12: 2/3 = 8/12 and 1/4 = 3/12. Subtract the new numerators: 8 - 3 = 5, giving 5/12. Using the original numerators 2 - 1 = 1 with denominator 12 gives 1/12, which is wrong.',
    },
    // Authored, no external source: classroom-observed Year 7 slip where pupils believe subtraction can never produce a fraction smaller than 1/2 of either operand, despite both operands being smaller than 1.
    {
      id: 'fas-mis-subtract-bigger',
      description:
        'Believing the answer to a fraction subtraction must be larger than (or at least as large as) the original fractions.',
      triggerAnswer: 'subtract-bigger',
      correction:
        'Subtracting one fraction from another almost always gives a smaller answer. The result is the difference between the two amounts, not their combination.',
      reExplanation:
        '7/12 - 1/4 = 7/12 - 3/12 = 4/12 = 1/3. The result 1/3 is smaller than 7/12 because subtracting takes away. If the answer comes out larger than the starting fraction, you have probably added by mistake.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Adding and Subtracting Fractions" page; the worked example that lays out the same-denominator rule before any common-denominator examples.
    {
      id: 'fas-mis-find-lcm-when-same',
      description:
        'Finding a common denominator even when the two fractions already have the same denominator, doing unnecessary rewriting.',
      triggerAnswer: 'find-lcm-when-same',
      correction:
        'When the denominators are already the same, no rewriting is needed. Add or subtract the numerators directly and keep the denominator.',
      reExplanation:
        '5/8 - 2/8 has matching denominators, so subtract the numerators directly: 5 - 2 = 3, giving 3/8. There is no need to rewrite the fractions or to multiply the denominators together.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsAddSubtractZoneNodes = [fractionsAddSubtract]
