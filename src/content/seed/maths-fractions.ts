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
  ],
  misconceptions: [
    {
      id: 'ef-mis-add',
      description: 'Adding the same number to numerator and denominator creates an equivalent fraction.',
      triggerAnswer: 'add',
      correction:
        'Adding the same number to both parts does not give an equivalent fraction. You must multiply (or divide) both the numerator and denominator by the same number.',
      reExplanation:
        'Think of it this way: 1/2 means one part out of two equal parts. If you add 1 to both, you get 2/3, which is two parts out of three. But 2/3 is bigger than 1/2, so they are not the same.',
    },
    {
      id: 'ef-mis-partial-simplify',
      description: 'Stopping simplification before reaching the simplest form.',
      triggerAnswer: 'partial',
      correction:
        'You found a common factor, but there is a bigger one. Keep dividing until the numerator and denominator share no common factors other than 1.',
      reExplanation:
        'To fully simplify a fraction, find the highest common factor (HCF) of the numerator and denominator and divide both by it.',
    },
    {
      id: 'ef-mis-bigger-numbers',
      description: 'Thinking bigger numerator and denominator means a bigger fraction.',
      triggerAnswer: 'bigger',
      correction:
        'The size of a fraction depends on the relationship between the numerator and denominator, not how big the numbers are. 4/8 equals 1/2 because 4 is half of 8, just as 1 is half of 2.',
      reExplanation:
        'Try using a fraction wall or number line to see that 4/8 and 1/2 land on exactly the same point.',
    },
    {
      id: 'ef-mis-cross-multiply',
      description: 'Confusing cross-multiplication with finding equivalent fractions.',
      triggerAnswer: 'cross',
      correction:
        'Cross-multiplication is used to compare fractions or solve equations, not to create equivalent fractions. To make an equivalent fraction, multiply (or divide) both the numerator and denominator by the same number.',
      reExplanation:
        'For example, to make 2/3 equivalent with denominator 9: multiply 3 by 3 to get 9, then multiply 2 by 3 to get 6. So 2/3 = 6/9.',
    },
    {
      id: 'ef-mis-only-multiply',
      description: 'Thinking equivalent fractions can only be found by multiplying, not dividing.',
      triggerAnswer: 'multiply-only',
      correction:
        'You can also divide both the numerator and denominator by the same number to find an equivalent (simpler) fraction. This is called simplifying.',
      reExplanation:
        '6/8 can be simplified by dividing both by 2 to get 3/4. Both fractions represent the same amount.',
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
    'Understand that a fraction represents a part of a whole, learn the terms numerator and denominator, and recognise fractions in everyday contexts.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective: 'Express one quantity as a fraction of another.',
    awardingBodies: {
      aqa: 'N1.1 Understanding fractions',
      edexcel: 'N3 Fractions',
      ocr: '2.01a Fractions',
    },
  },
  scenes: [
    {
      id: 'wf-scene-1',
      title: 'Parts of a Whole',
      type: 'diagram',
      instructions: 'Shade parts of different shapes to see how fractions work.',
      data: { shapes: ['circle', 'rectangle', 'hexagon'] },
    },
  ],
  workedExamples: [
    {
      id: 'wf-worked-1',
      title: 'Reading a fraction',
      steps: [
        {
          explanation:
            'A fraction has two parts: the numerator (top number) tells us how many parts we have.',
        },
        {
          explanation:
            'The denominator (bottom number) tells us how many equal parts the whole is divided into.',
          maths: 'numerator / denominator',
        },
        {
          explanation: 'So 3/4 means 3 parts out of 4 equal parts.',
          maths: '3/4',
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
    },
    {
      id: 'wf-q2',
      type: 'multiple-choice',
      stem: 'A pizza is cut into 6 equal slices and you eat 2. What fraction have you eaten?',
      tier: 'core',
      options: ['6/2', '2/6', '2/4', '4/6'],
      correctIndex: 1,
      xpValue: 10,
    },
  ],
  misconceptions: [
    {
      id: 'wf-mis-swap',
      description: 'Swapping the numerator and denominator.',
      triggerAnswer: 'swap',
      correction:
        'The numerator (top) counts the parts you have. The denominator (bottom) counts the total equal parts.',
      reExplanation:
        'Remember: the denominator is "down" below the line. It tells you how many parts the whole is divided into.',
    },
  ],
  masteryRule: {
    streak: 3,
    spacedReviewDays: [1, 3, 7],
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
