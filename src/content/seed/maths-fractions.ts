import type { SkillNode } from '@/types/content'

export const equivalentFractions: SkillNode = {
  id: 'maths-fractions-equivalent',
  title: 'Equivalent Fractions',
  description:
    'Understand that different fractions can represent the same amount, and learn to find equivalent fractions by multiplying or dividing the numerator and denominator by the same number.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'core',
  prerequisites: ['maths-fractions-what-is'],
  curriculum: {
    ks3Objective:
      'Use common factors to simplify fractions; use common multiples to express fractions in the same denomination.',
    awardingBodies: {
      aqa: 'N1.3 Equivalent fractions',
      edexcel: 'N3 Ordering fractions',
      ocr: '2.01a Equivalent fractions',
    },
  },
  scenes: [
    {
      id: 'ef-scene-fraction-wall',
      title: 'The Fraction Wall',
      type: 'fraction-wall',
      instructions:
        'Click on different fraction bars to see how they line up. Can you find fractions that are exactly the same length?',
      data: {
        rows: [
          { denominator: 1, colour: '#3B82F6' },
          { denominator: 2, colour: '#22C55E' },
          { denominator: 3, colour: '#F59E0B' },
          { denominator: 4, colour: '#A855F7' },
          { denominator: 6, colour: '#EC4899' },
          { denominator: 8, colour: '#14B8A6' },
          { denominator: 12, colour: '#F97316' },
        ],
      },
    },
    {
      id: 'ef-scene-number-line',
      title: 'Fractions on the Number Line',
      type: 'number-line',
      instructions:
        'Drag the markers to place fractions on the number line. Notice when two fractions land on the same spot.',
      data: {
        range: [0, 1],
        fractions: [
          { numerator: 1, denominator: 2 },
          { numerator: 2, denominator: 4 },
          { numerator: 3, denominator: 6 },
          { numerator: 1, denominator: 3 },
          { numerator: 2, denominator: 6 },
        ],
      },
    },
    {
      id: 'ef-scene-pizza',
      title: 'Sharing Pizza Equally',
      type: 'diagram',
      instructions:
        'Two pizzas are the same size but cut differently. Shade the same amount on each pizza to discover equivalent fractions.',
      data: {
        pizzas: [
          { slices: 4, shadedSlices: 2 },
          { slices: 8, shadedSlices: 0 },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ef-worked-1',
      title: 'Finding an equivalent fraction by multiplying',
      steps: [
        {
          explanation: 'We start with the fraction 2/3 and want to find an equivalent fraction with denominator 12.',
          maths: '2/3 = ?/12',
        },
        {
          explanation:
            'Ask: what do we multiply 3 by to get 12? Since 3 x 4 = 12, we multiply by 4.',
          maths: '3 x 4 = 12',
        },
        {
          explanation:
            'Whatever we do to the denominator, we must do the same to the numerator. Multiply the numerator by 4 as well.',
          maths: '2 x 4 = 8',
        },
        {
          explanation: 'So 2/3 is equivalent to 8/12. Both fractions represent the same amount.',
          maths: '2/3 = 8/12',
        },
      ],
    },
    {
      id: 'ef-worked-2',
      title: 'Finding an equivalent fraction by dividing (simplifying)',
      steps: [
        {
          explanation: 'We have the fraction 6/9 and want to simplify it.',
          maths: '6/9 = ?/?',
        },
        {
          explanation:
            'Find a common factor of 6 and 9. Both are divisible by 3.',
          maths: 'HCF(6, 9) = 3',
        },
        {
          explanation: 'Divide both the numerator and denominator by 3.',
          maths: '6 / 3 = 2, 9 / 3 = 3',
        },
        {
          explanation:
            'The simplified equivalent fraction is 2/3.',
          maths: '6/9 = 2/3',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ef-q1',
      type: 'multiple-choice',
      stem: 'Which fraction is equivalent to 1/2?',
      tier: 'core',
      options: ['2/3', '3/6', '2/5', '4/6'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ef-mis-add',
    },
    {
      id: 'ef-q2',
      type: 'multiple-choice',
      stem: 'Which fraction is equivalent to 2/3?',
      tier: 'core',
      options: ['4/6', '3/4', '4/9', '6/8'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'ef-q3',
      type: 'numeric-entry',
      stem: 'Complete the equivalent fraction: 3/4 = ?/12',
      tier: 'core',
      correctAnswer: 9,
      xpValue: 10,
      hint: 'What do you multiply 4 by to get 12?',
    },
    {
      id: 'ef-q4',
      type: 'numeric-entry',
      stem: 'Simplify 8/12 to its simplest form. What is the numerator?',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Find the highest common factor of 8 and 12.',
    },
    {
      id: 'ef-q5',
      type: 'drag-order',
      stem: 'Put these fractions in order from smallest to largest.',
      tier: 'confident',
      items: ['3/4', '1/2', '2/3', '1/4'],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
    },
    {
      id: 'ef-q6',
      type: 'spot-misconception',
      stem: 'A pupil says: "To find an equivalent fraction of 2/5, I add 2 to the top and bottom to get 4/7." Is this correct?',
      tier: 'core',
      statements: [
        { text: 'Adding 2 to both gives an equivalent fraction.', isMisconception: true },
        {
          text: 'You must multiply (or divide) both by the same number.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ef-mis-add',
    },
    {
      id: 'ef-q7',
      type: 'multiple-choice',
      stem: 'Which of these is NOT equivalent to 3/5?',
      tier: 'confident',
      options: ['6/10', '9/15', '12/25', '15/25'],
      correctIndex: 2,
      xpValue: 15,
    },
    {
      id: 'ef-q8',
      type: 'numeric-entry',
      stem: 'If 5/8 = 15/?, what is the missing denominator?',
      tier: 'confident',
      correctAnswer: 24,
      xpValue: 15,
    },
    {
      id: 'ef-q9',
      type: 'multiple-choice',
      stem: 'What is 18/24 in its simplest form?',
      tier: 'confident',
      options: ['3/4', '9/12', '6/8', '2/3'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ef-mis-partial-simplify',
    },
    {
      id: 'ef-q10',
      type: 'numeric-entry',
      stem: 'A recipe uses 2/3 of a cup of flour. If I want to use sixths of a cup instead, how many sixths do I need?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 20,
      hint: 'Convert 2/3 into a fraction with denominator 6.',
    },
    {
      id: 'ef-q11',
      type: 'spot-misconception',
      stem: 'Maya says 4/8 is larger than 1/2 because 4 and 8 are bigger numbers than 1 and 2. What do you think?',
      tier: 'core',
      statements: [
        { text: 'Maya is correct because bigger numbers mean a bigger fraction.', isMisconception: true },
        { text: '4/8 and 1/2 are equivalent fractions; they represent the same amount.', isMisconception: false },
      ],
      xpValue: 15,
      misconceptionId: 'ef-mis-bigger-numbers',
    },
    {
      id: 'ef-q12',
      type: 'multiple-choice',
      stem: 'Which pair of fractions are equivalent?',
      tier: 'challenge',
      options: ['2/3 and 8/12', '3/5 and 5/3', '1/4 and 3/8', '2/7 and 4/21'],
      correctIndex: 0,
      xpValue: 20,
    },
    {
      id: 'ef-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Find an equivalent fraction of 3/7 with denominator 28.',
      tier: 'confident',
      steps: [
        'We start with 3/7 and want a denominator of 28.',
        'Ask what we multiply 7 by to reach 28. Since 7 x 4 = 28, the multiplier is 4.',
        null,
        'So 3/7 is equivalent to 12/28.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Whatever we do to the denominator, we must do to the numerator. Multiply 3 by 4 to get 12.',
      xpValue: 20,
    },
    {
      id: 'ef-q14',
      type: 'multiple-choice',
      stem: 'A box of 60 sweets contains 2/5 mint chocolates. Which fraction equivalent to 2/5 shows the mints?',
      tier: 'confident',
      options: ['12/60', '24/60', '2/60', '14/60'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ef-mis-multiply-one-side',
    },
    {
      id: 'ef-q15',
      type: 'numeric-entry',
      stem: 'Find the missing numerator: 7/8 = ?/56',
      tier: 'confident',
      correctAnswer: 49,
      xpValue: 15,
      hint: 'What do you multiply 8 by to get 56?',
    },
    {
      id: 'ef-q16',
      type: 'multiple-choice',
      stem: 'To find an equivalent fraction of 3/8 with denominator 24, which method is correct?',
      tier: 'confident',
      options: [
        'Cross-multiply 3 by 24, then divide by 8.',
        'Multiply both 3 and 8 by 3, because 8 x 3 = 24.',
        'Add 16 to both 3 and 8.',
        'Multiply only 8 by 3 and leave 3 as it is.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ef-mis-cross-multiply',
    },
    {
      id: 'ef-q17',
      type: 'numeric-entry',
      stem: 'A Year 7 cricket club has 36 pupils. 5/9 of them are bowlers and the rest are batters. The coach writes the fraction of batters with denominator 36. What is the numerator?',
      tier: 'challenge',
      correctAnswer: 16,
      xpValue: 25,
      hint: 'First work out how many pupils are bowlers, then how many are batters.',
    },
    {
      id: 'ef-q18',
      type: 'multiple-choice',
      stem: 'A pupil tries to write 4/7 as an equivalent fraction with numerator 24. They write 24/7. Why is this wrong?',
      tier: 'challenge',
      options: [
        'The numerator should stay as 4.',
        '24/7 is already correct as it is.',
        'You must also multiply the denominator by 6, giving 24/42.',
        'You should add 20 to both top and bottom instead.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ef-mis-only-multiply',
    },
    {
      id: 'ef-q19',
      type: 'numeric-entry',
      stem: 'A box has 48 sweets. 3/4 of them are toffees and the rest are mints. The shopkeeper writes the fraction of mints as a fraction with denominator 16. What is the numerator?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'First work out the fraction of the sweets that are mints.',
    },
    {
      id: 'ef-q20',
      type: 'multiple-choice',
      stem: 'Aisha is baking with a recipe that needs 6/8 of a cup of sugar. Liam reads a different recipe that needs 9/12. Which statement is true?',
      tier: 'challenge',
      options: [
        'Aisha needs more, because 6 and 8 are smaller numbers.',
        'Liam needs more, because 9 is bigger than 6.',
        'They need the same amount, because 6/8 and 9/12 both simplify to 3/4.',
        'You cannot compare the amounts because the denominators are different.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ef-mis-bigger-numbers',
    },
  ],
  misconceptions: [
    // Source: Hart, Children's Understanding of Mathematics 11-16 (CSMS), recurring "constant addend" error in fraction equivalence (verify chapter)
    {
      id: 'ef-mis-add',
      description: 'Adding the same number to numerator and denominator creates an equivalent fraction.',
      triggerAnswer: 'add',
      correction:
        'Adding the same number to both parts does not give an equivalent fraction. You must multiply or divide both the numerator and denominator by the same number.',
      reExplanation:
        '1/2 means one part out of two equal parts. If you add 1 to both, you get 2/3, which is two parts out of three. But 2/3 is bigger than 1/2, so they are not the same.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on simplifying (verify page)
    {
      id: 'ef-mis-partial-simplify',
      description: 'Stopping simplification before reaching the simplest form.',
      triggerAnswer: 'partial',
      correction:
        'You found a common factor, but there is a bigger one. Keep dividing until the numerator and denominator share no common factors other than 1.',
      reExplanation:
        'To fully simplify a fraction, find the highest common factor (HCF) of the numerator and denominator and divide both by it.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on fraction comparison (verify page)
    {
      id: 'ef-mis-bigger-numbers',
      description: 'Thinking bigger numerator and denominator means a bigger fraction.',
      triggerAnswer: 'bigger',
      correction:
        'The size of a fraction depends on the relationship between the numerator and denominator, not how big the numbers are. 4/8 equals 1/2 because 4 is half of 8, just as 1 is half of 2.',
      reExplanation:
        'Try using a fraction wall or number line to see that 4/8 and 1/2 land on exactly the same point.',
    },
    // Source: AQA examiner observations on fraction methods, recurring KS3 to KS4 procedural confusion (verify report year and Q reference)
    {
      id: 'ef-mis-cross-multiply',
      description: 'Confusing cross-multiplication with finding equivalent fractions.',
      triggerAnswer: 'cross',
      correction:
        'Cross-multiplication is used to compare fractions or solve equations, not to create equivalent fractions. To make an equivalent fraction, multiply or divide both the numerator and denominator by the same number.',
      reExplanation:
        'For example, to make 2/3 equivalent with denominator 9: multiply 3 by 3 to get 9, then multiply 2 by 3 to get 6. So 2/3 = 6/9.',
    },
    // Source: CGP KS3 Maths Study Guide, Common mistake on equivalent fractions (verify page)
    {
      id: 'ef-mis-only-multiply',
      description: 'Thinking equivalent fractions can only be found by multiplying, not dividing.',
      triggerAnswer: 'multiply-only',
      correction:
        'You can also divide both the numerator and denominator by the same number to find an equivalent fraction in simpler form. This is called simplifying.',
      reExplanation:
        '6/8 can be simplified by dividing both by 2 to get 3/4. Both fractions represent the same amount.',
    },
    // Source: classroom-observed Year 7 procedural slip; aligns with Edexcel examiner reports on fraction work (verify report year)
    {
      id: 'ef-mis-multiply-one-side',
      description:
        'Scaling only the numerator or only the denominator when finding an equivalent fraction.',
      triggerAnswer: 'one-side',
      correction:
        'To make an equivalent fraction, the same multiplier must be applied to both the numerator and the denominator. Scaling just one of them changes the value of the fraction.',
      reExplanation:
        'Picture 2/5 of a 60-sweet box. The whole has been split into 60 sweets, so the multiplier on 5 is 12. The numerator must also be multiplied by 12, giving 24/60. If you only scale one side, you no longer have an equivalent fraction.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const whatIsAFraction: SkillNode = {
  id: 'maths-fractions-what-is',
  title: 'What is a Fraction?',
  description:
    'Understand that a fraction describes a part of a whole, recognise the numerator and denominator, read fractions in everyday UK contexts, and recognise that the numerator can be greater than or equal to the denominator.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Express one quantity as a fraction of another, where the fraction is less than 1 and greater than 1.',
    awardingBodies: {
      aqa: 'N1.1 Understanding fractions',
      edexcel: 'N3 Fractions',
      ocr: '2.01a Fractions',
    },
  },
  scenes: [
    {
      id: 'wf-scene-slice-bar',
      title: 'Slice the Bar',
      type: 'simulation',
      instructions:
        'Drag the dividers to split the bar into equal parts, then click parts to shade them and read the fraction.',
      data: {
        bar: { length: 1 },
        defaultDividers: [0.5],
        maxDividers: 11,
      },
    },
    {
      id: 'wf-scene-numerator-denominator',
      title: 'Numerator and Denominator',
      type: 'diagram',
      instructions:
        'Click each part of the fraction to learn what the number represents.',
      data: {
        fraction: { numerator: 3, denominator: 5 },
        labels: {
          numerator: 'How many parts you have',
          denominator: 'How many equal parts the whole is split into',
          line: 'The "out of" line',
        },
      },
    },
    {
      id: 'wf-scene-everyday',
      title: 'Fractions All Around You',
      type: 'diagram',
      instructions:
        'Click each scene to see how a fraction describes a part of an everyday whole.',
      data: {
        examples: [
          {
            label:
              'A Margherita pizza cut into 8 equal slices, with 5 eaten.',
            fraction: { numerator: 5, denominator: 8 },
          },
          {
            label: 'A 200 ml glass of squash filled to the 150 ml mark.',
            fraction: { numerator: 3, denominator: 4 },
          },
          {
            label:
              'A chocolate bar with 12 equal squares, with 4 broken off.',
            fraction: { numerator: 4, denominator: 12 },
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'wf-worked-1',
      title: 'Reading the fraction 3/5',
      steps: [
        {
          explanation:
            'A fraction has two numbers separated by a line. The line means "out of".',
          maths: '3/5',
        },
        {
          explanation:
            'The bottom number is the denominator. It tells us the whole has been split into 5 equal parts.',
          maths: 'denominator = 5',
        },
        {
          explanation:
            'The top number is the numerator. It tells us we are looking at 3 of those equal parts.',
          maths: 'numerator = 3',
        },
        {
          explanation: 'So 3/5 means 3 parts out of 5 equal parts.',
          maths: '3/5 = 3 out of 5',
        },
      ],
    },
    {
      id: 'wf-worked-2',
      title: 'Writing a fraction from a picture',
      steps: [
        {
          explanation:
            'A pizza is cut into 8 equal slices, and 5 slices have been eaten.',
        },
        {
          explanation:
            'We want to write the fraction of the pizza that has been eaten.',
          maths: '?/?',
        },
        {
          explanation:
            'The denominator is the total number of equal parts the whole has been split into. So the denominator is 8.',
          maths: 'denominator = 8',
        },
        {
          explanation:
            'The numerator is the number of parts we are looking at. 5 slices have been eaten, so the numerator is 5.',
          maths: 'numerator = 5',
        },
        {
          explanation: 'The fraction of the pizza eaten is 5/8.',
          maths: '5/8',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'wf-q1',
      type: 'multiple-choice',
      stem: 'In the fraction 5/8, what is the denominator?',
      tier: 'core',
      options: ['5', '8', '3', '13'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'wf-mis-swap',
    },
    {
      id: 'wf-q2',
      type: 'multiple-choice',
      stem: 'A pizza is cut into 6 equal slices and you eat 2. What fraction have you eaten?',
      tier: 'core',
      options: ['6/2', '4/6', '2/6', '2/4'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'wf-mis-swap',
    },
    {
      id: 'wf-q3',
      type: 'multiple-choice',
      stem: 'In a fraction, what does the numerator (the top number) tell you?',
      tier: 'core',
      options: [
        'How many equal parts the whole is split into',
        'The "out of" line',
        'The total number of objects',
        'How many of those parts you have',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'wf-q4',
      type: 'multiple-choice',
      stem: 'A square is split into 4 equal triangles, and 3 are shaded. Which fraction is shaded?',
      tier: 'core',
      options: ['3/1', '3/4', '1/4', '4/3'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'wf-mis-swap',
    },
    {
      id: 'wf-q5',
      type: 'numeric-entry',
      stem: 'In the fraction 7/12, what is the numerator?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'The numerator is the top number.',
    },
    {
      id: 'wf-q6',
      type: 'numeric-entry',
      stem: 'A bar of chocolate has 10 equal squares. You give 3 squares to a friend. What is the denominator of the fraction given away?',
      tier: 'core',
      correctAnswer: 10,
      xpValue: 10,
      hint: 'The denominator counts the total number of equal parts.',
    },
    {
      id: 'wf-q7',
      type: 'drag-order',
      stem: 'Place these fractions in order from smallest to largest, using the meaning of "X out of Y equal parts".',
      tier: 'core',
      items: ['1/4', '1/3', '1/2', '3/4'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      misconceptionId: 'wf-mis-bigger-numbers',
    },
    {
      id: 'wf-q8',
      type: 'spot-misconception',
      stem: 'Maya says: "The fraction 2/3 means two ones added to three ones, which is 5." Is she correct?',
      tier: 'core',
      statements: [
        {
          text: 'Maya is correct because 2 and 3 are both small numbers.',
          isMisconception: true,
        },
        {
          text: '2/3 means 2 parts out of 3 equal parts. The line means "out of", not addition.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'wf-mis-line-meaning',
    },
    {
      id: 'wf-q9',
      type: 'multiple-choice',
      stem: 'When a whole is split into equal parts, which fraction shows the largest single part?',
      tier: 'confident',
      options: ['1/2', '1/3', '1/4', '1/5'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'wf-mis-bigger-numbers',
    },
    {
      id: 'wf-q10',
      type: 'multiple-choice',
      stem: 'In a Year 7 form of 24 pupils, 7 have a school dinner today. What fraction have a school dinner?',
      tier: 'confident',
      options: ['7/24', '24/7', '17/24', '7/17'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'wf-mis-fraction-vs-ratio',
    },
    {
      id: 'wf-q11',
      type: 'numeric-entry',
      stem: 'Sevenoaks library has 200 books on the maths shelf. 45 of them are about geometry. What is the numerator of the fraction of geometry books?',
      tier: 'confident',
      correctAnswer: 45,
      xpValue: 15,
    },
    {
      id: 'wf-q12',
      type: 'numeric-entry',
      stem: 'I poured 3/8 of a litre of orange juice. What is the denominator of that fraction?',
      tier: 'confident',
      correctAnswer: 8,
      xpValue: 15,
    },
    {
      id: 'wf-q13',
      type: 'multiple-choice',
      stem: 'Which of these is NOT another way to write the fraction "three quarters"?',
      tier: 'confident',
      options: ['7/4', '3/4', '0.75', '75%'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'wf-mis-improper',
    },
    {
      id: 'wf-q14',
      type: 'numeric-entry',
      stem: 'A football team plays 30 matches in a season. 12 are home matches. What is the numerator of the fraction of home matches?',
      tier: 'confident',
      correctAnswer: 12,
      xpValue: 15,
    },
    {
      id: 'wf-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. A pizza is cut into 8 equal slices and 5 slices have been eaten. What fraction has been eaten?',
      tier: 'confident',
      steps: [
        'The denominator counts the total number of equal parts.',
        'There are 8 equal slices in the whole pizza.',
        null,
        'So the fraction eaten is 5/8.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The numerator counts the number of parts we are looking at. 5 slices have been eaten, so the numerator is 5.',
      xpValue: 20,
    },
    {
      id: 'wf-q16',
      type: 'spot-misconception',
      stem: 'Joe writes the fraction 3/2 and says it cannot be a fraction because the top number is bigger than the bottom number. Is Joe right?',
      tier: 'confident',
      statements: [
        {
          text: 'Joe is right because in a fraction the top must always be smaller.',
          isMisconception: true,
        },
        {
          text: '3/2 is a valid fraction. It means 3 halves, which is one whole and a half more.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'wf-mis-improper',
    },
    {
      id: 'wf-q17',
      type: 'multiple-choice',
      stem: 'A box of 30 sweets contains 6 lemon, 9 strawberry, and 15 toffee. What fraction of the sweets are toffee?',
      tier: 'challenge',
      options: ['6/30', '15/30', '30/15', '9/30'],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'wf-mis-swap',
    },
    {
      id: 'wf-q18',
      type: 'numeric-entry',
      stem: 'A Year 7 trip has 28 pupils. 4 chose the museum, three times as many chose the planetarium, and the rest chose the cathedral. What is the numerator of the fraction of pupils who chose the cathedral?',
      tier: 'challenge',
      correctAnswer: 12,
      xpValue: 25,
      hint: 'First work out how many chose the planetarium, then subtract from 28.',
    },
    {
      id: 'wf-q19',
      type: 'multiple-choice',
      stem: 'Liam says he ate 7/4 of a pizza on Saturday. Aisha thinks fractions cannot have a numerator larger than the denominator. Which statement is correct?',
      tier: 'challenge',
      options: [
        '7/4 is not a real fraction; the numerator must always be smaller.',
        '7/4 is the same as 4/7 written the other way.',
        '7/4 means 7 parts out of 4, which is more than one whole pizza.',
        '7/4 should be rewritten as 1/4 because 7 is larger than 4.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'wf-mis-improper',
    },
    {
      id: 'wf-q20',
      type: 'multiple-choice',
      stem: 'Which of these fractions represents a quantity larger than one whole?',
      tier: 'challenge',
      options: ['3/4', '5/6', '9/8', '7/8'],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'wf-mis-improper',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Maths Foundation tier examiner reports, recurring KS2 to KS3 transition error (verify exact year and Q reference)
    {
      id: 'wf-mis-swap',
      description:
        'Swapping the numerator and denominator when reading or writing a fraction.',
      triggerAnswer: 'swap',
      correction:
        'The numerator (top) counts the parts you have. The denominator (bottom) counts the total equal parts.',
      reExplanation:
        'A useful memory cue: the denominator is "down below" the line and tells you how many equal parts the whole is split into. The numerator sits on top and counts how many of those parts you have.',
    },
    // Source: CGP KS3 Maths Study Guide, "Common mistake" callout on fraction comparison (verify page)
    {
      id: 'wf-mis-bigger-numbers',
      description:
        'Believing that bigger numerator and denominator numbers always mean a bigger fraction.',
      triggerAnswer: 'bigger',
      correction:
        'The size of a fraction depends on the relationship between numerator and denominator, not on the size of the numbers themselves.',
      reExplanation:
        'Use a fraction wall or number line: 1/2 is exactly the same size as 4/8, even though 4 and 8 are bigger numbers than 1 and 2. And 1/100 is much smaller than 1/2, even though 100 is the biggest number on the page.',
    },
    // Source: CGP KS3 Maths Study Guide, recurring "improper fraction" misconception (verify page)
    {
      id: 'wf-mis-improper',
      description:
        'Believing a fraction cannot have a numerator larger than its denominator.',
      triggerAnswer: 'improper',
      correction:
        'A fraction with a larger top than bottom is called an improper fraction. It is still a valid fraction; it represents a quantity greater than one whole.',
      reExplanation:
        '7/4 means 7 quarters, which is one whole (4/4) plus three more quarters. You can write it as 1 and 3/4 (a mixed number) or leave it as 7/4. Both are correct.',
    },
    // Source: classroom-observed Year 7 reading error; aligns with DfE KS2 to KS3 transition guidance
    {
      id: 'wf-mis-line-meaning',
      description:
        'Reading the line in a fraction as a minus sign, addition sign, or division calculation rather than "out of".',
      triggerAnswer: 'line',
      correction:
        'The line in a fraction means "out of". It is not subtraction or addition of the two numbers.',
      reExplanation:
        'When you see 3/5, read it as "three out of five equal parts". You can think of a fraction as a division (3 divided by 5 = 0.6), but that is the value of the fraction, not what the symbols mean.',
    },
    // Source: CGP KS3 Maths Study Guide, "Common mistake" on the equal-parts requirement (verify page)
    {
      id: 'wf-mis-equal-parts',
      description:
        'Treating unequal pieces as if they could be counted as a fraction of the whole.',
      triggerAnswer: 'unequal',
      correction:
        'A fraction only works when the whole is split into equal parts. Unequal pieces cannot be written as a simple fraction.',
      reExplanation:
        'If a cake is cut into one big slice and five tiny slices, you cannot say one slice is 1/6 of the cake, because the slices are different sizes. Fractions assume the parts are the same size.',
    },
    // Source: AQA examiner observations on early fraction work; confusion of part-whole vs part-part (verify reference)
    {
      id: 'wf-mis-fraction-vs-ratio',
      description:
        'Confusing a fraction (part of a whole) with a ratio (part to part).',
      triggerAnswer: 'ratio',
      correction:
        'A fraction tells you a part out of a whole. A ratio compares two separate quantities to each other.',
      reExplanation:
        'If 7 of 24 pupils have school dinners, the fraction with school dinners is 7/24 of the form. The ratio of school dinners to packed lunches would be 7 to 17, because there are 24 minus 7 = 17 with packed lunches.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const simplifyingFractions: SkillNode = {
  id: 'maths-fractions-simplify',
  title: 'Simplifying Fractions',
  description:
    'Reduce fractions to their simplest form by dividing the numerator and denominator by their highest common factor.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'core',
  prerequisites: ['maths-fractions-equivalent'],
  curriculum: {
    ks3Objective: 'Use common factors to simplify fractions.',
    awardingBodies: {
      aqa: 'N1.4 Simplifying fractions',
      edexcel: 'N3 Simplifying fractions',
      ocr: '2.01b Simplifying fractions',
    },
  },
  scenes: [
    {
      id: 'sf-scene-1',
      title: 'Factor Finder',
      type: 'simulation',
      instructions:
        'Use the slider to explore which numbers divide evenly into both the numerator and denominator.',
      data: { startFraction: { numerator: 12, denominator: 18 } },
    },
  ],
  workedExamples: [
    {
      id: 'sf-worked-1',
      title: 'Simplify 12/18',
      steps: [
        {
          explanation: 'Find the highest common factor (HCF) of 12 and 18.',
          maths: 'Factors of 12: 1, 2, 3, 4, 6, 12\nFactors of 18: 1, 2, 3, 6, 9, 18',
        },
        {
          explanation: 'The HCF is 6.',
          maths: 'HCF(12, 18) = 6',
        },
        {
          explanation: 'Divide both by 6.',
          maths: '12/6 = 2, 18/6 = 3',
        },
        {
          explanation: 'The simplest form is 2/3.',
          maths: '12/18 = 2/3',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'sf-q1',
      type: 'multiple-choice',
      stem: 'What is 10/15 in its simplest form?',
      tier: 'core',
      options: ['2/3', '5/7', '2/5', '1/3'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'sf-q2',
      type: 'numeric-entry',
      stem: 'Simplify 20/25. What is the numerator in simplest form?',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
    },
  ],
  misconceptions: [
    {
      id: 'sf-mis-partial',
      description: 'Not fully simplifying (using a common factor but not the HCF).',
      triggerAnswer: 'partial',
      correction:
        'You divided by a common factor, but not the highest one. Check if the result can be simplified further.',
      reExplanation:
        'Always check: do the numerator and denominator still share a common factor? If yes, keep dividing.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14],
  },
}

export const fractionsZoneNodes = [whatIsAFraction, equivalentFractions, simplifyingFractions]
