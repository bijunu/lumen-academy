import type { SkillNode } from '@/types/content'

export const fractionsOnNumberLine: SkillNode = {
  id: 'maths-fractions-on-number-line',
  title: 'Fractions on a Number Line',
  description:
    'Place proper fractions, mixed numbers and negative fractions on a number line. Read a value off a number line by counting the equal intervals between two marked points and matching the tick to the right fraction.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-fractions',
  zoneName: 'Fractions',
  tier: 'confident',
  prerequisites: ['maths-fractions-equivalent'],
  curriculum: {
    ks3Objective:
      'Use the number line as a model for ordering of the real numbers; place fractions and mixed numbers on a number line.',
    awardingBodies: {
      aqa: 'N1 Order fractions on a number line (GCSE Mathematics 8300)',
      edexcel:
        'N1 Place positive and negative fractions on a number line (GCSE Mathematics 1MA1)',
      ocr: '1.01a Use a number line to represent fractions and mixed numbers (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'fnl-scene-unit-line',
      title: 'Quarters on the Unit Line',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal where 1/4, 1/2 and 3/4 sit between 0 and 1. The line has been split into four equal intervals because the denominator is 4. Each tick after 0 counts one quarter further along.',
      data: {
        viewBox: '0 0 100 40',
        hotspots: [
          {
            id: 'fnl-h-zero',
            x: 10,
            y: 50,
            label: '0',
            description: 'The start of the unit line. Every fraction with a smaller numerator than denominator sits between 0 and 1.',
          },
          {
            id: 'fnl-h-quarter',
            x: 30,
            y: 50,
            label: '1/4',
            description: 'One step of length 1/4 from 0. The denominator 4 sets four equal intervals; 1/4 is the first tick.',
          },
          {
            id: 'fnl-h-half',
            x: 50,
            y: 50,
            label: '1/2',
            description: 'Two quarters from 0, exactly halfway between 0 and 1. So 1/2 and 2/4 land on the same tick.',
          },
          {
            id: 'fnl-h-three-quarters',
            x: 70,
            y: 50,
            label: '3/4',
            description: 'Three quarters from 0, one quarter short of the whole. The tick at 3/4 sits closer to 1 than to 0.',
          },
          {
            id: 'fnl-h-one',
            x: 90,
            y: 50,
            label: '1',
            description: 'The end of the unit line. The fraction 4/4 lands here because four quarters make one whole.',
          },
        ],
      },
    },
    {
      id: 'fnl-scene-wall',
      title: 'Same Length, Different Names',
      type: 'fraction-wall',
      instructions:
        'Click each bar to highlight it and see how halves, quarters and eighths line up beneath the same unit line. Bars of different denominators can name the same point: 1/2, 2/4 and 4/8 all reach the same place on the wall.',
      data: {
        rows: [
          { denominator: 1, colour: '#3B82F6' },
          { denominator: 2, colour: '#22C55E' },
          { denominator: 4, colour: '#A855F7' },
          { denominator: 8, colour: '#EC4899' },
        ],
        highlightFractions: [
          { numerator: 1, denominator: 2 },
          { numerator: 2, denominator: 4 },
          { numerator: 4, denominator: 8 },
        ],
      },
    },
    {
      id: 'fnl-scene-halving-twice',
      title: 'Placing 5/8 by Halving Twice',
      type: 'number-line',
      instructions:
        'Read how 5/8 lands on a 0 to 1 line in three quick steps. First fold the line in half to mark 1/2, which is 4/8. Then halve the right half to mark 3/4, which is 6/8. The tick for 5/8 sits exactly between 4/8 and 6/8, one eighth past the halfway point and one eighth before three quarters.',
      data: {
        range: [0, 1],
        marks: [
          { position: 0, label: '0' },
          { position: 0.5, label: '1/2 (4/8)' },
          { position: 0.625, label: '5/8' },
          { position: 0.75, label: '3/4 (6/8)' },
          { position: 1, label: '1' },
        ],
        narrative:
          'Halving twice splits a unit line into eighths without measuring. Any eighths fraction can then be counted as a number of single-tick jumps from 0.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'fnl-worked-1',
      title: 'Place 3/4 on a 0 to 1 line',
      steps: [
        {
          explanation:
            'The denominator is 4, so split the line from 0 to 1 into four equal intervals.',
          maths: '0  ----  1/4  ----  2/4  ----  3/4  ----  1',
        },
        {
          explanation:
            'The numerator is 3, so count three of those intervals from 0.',
          maths: '3 intervals from 0',
        },
        {
          explanation:
            'The tick reached is the third one after 0 and the first one before 1. Mark it as 3/4.',
          maths: '3/4 sits one quarter short of 1',
        },
        {
          explanation:
            'Check by reading the position. 3/4 is closer to 1 than to 0, because three quarters is more than one half.',
          maths: '3/4 > 1/2',
        },
      ],
    },
    {
      id: 'fnl-worked-2',
      title: 'Place 7/3 on a 0 to 3 line',
      steps: [
        {
          explanation:
            'The denominator is 3, so split each whole unit from 0 to 3 into three equal intervals. There are nine intervals on the full line.',
          maths: '0  -  1/3  -  2/3  -  1  -  4/3  -  5/3  -  2  -  7/3  -  8/3  -  3',
        },
        {
          explanation:
            'The numerator 7 means count seven thirds from 0.',
        },
        {
          explanation:
            'Six thirds make 2, so the seventh tick sits one third past 2. Write 7/3 as the mixed number 2 1/3 to read the position directly off the line.',
        },
        {
          explanation:
            'Mark the tick that is one third of the way from 2 to 3. That is the position of 7/3.',
          maths: '7/3 = 2 1/3',
        },
        {
          explanation:
            'Check the result. 7/3 is between 2 and 3, and closer to 2 because 1/3 is less than 1/2.',
          maths: '2 < 7/3 < 3',
        },
      ],
    },
  ],
  questions: [
    // Core 1: MCQ, identify the position of 1/2 on a 0 to 1 line
    {
      id: 'fnl-q1',
      type: 'multiple-choice',
      stem: 'A number line runs from 0 to 1, split into four equal intervals. Which tick mark shows 1/2?',
      tier: 'core',
      options: [
        'The first tick after 0',
        'The second tick after 0',
        'The third tick after 0',
        'The tick at 1',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fnl-mis-denominator-as-position',
      hint: 'Four equal intervals means each tick is one quarter. 1/2 equals 2/4.',
    },
    // Core 2: numeric-entry, read a tick on a 0 to 1 line split into eighths
    {
      id: 'fnl-q2',
      type: 'numeric-entry',
      stem: 'A number line from 0 to 1 is split into eight equal intervals. A tick mark sits on the fifth tick after 0. What is the numerator of the fraction it shows, when the denominator is 8?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      misconceptionId: 'fnl-mis-reciprocal-read',
      hint: 'Five intervals of one eighth each gives 5/8.',
    },
    // Core 3: MCQ, position of 1/4 between 0 and 1 (closer to 0 than to 1)
    {
      id: 'fnl-q3',
      type: 'multiple-choice',
      stem: 'Where does 1/4 sit on a number line from 0 to 1?',
      tier: 'core',
      options: [
        'Closer to 1 than to 0',
        'Closer to 0 than to 1',
        'Exactly halfway between 0 and 1',
        'Exactly at 1',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fnl-mis-quarter-near-one',
      hint: 'One quarter is less than one half, so 1/4 sits in the first half of the line.',
    },
    // Core 4: numeric-entry, denominator from the number of intervals
    {
      id: 'fnl-q4',
      type: 'numeric-entry',
      stem: 'A pupil splits a 0 to 1 number line into six equal intervals to mark sixths. What denominator should every fraction on the line have?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'The number of equal intervals between 0 and 1 sets the denominator.',
    },
    // Core 5: MCQ, ruler reading in cm and millimetres
    {
      id: 'fnl-q5',
      type: 'multiple-choice',
      stem: 'A ruler shows the 4 cm and 5 cm marks with 10 equal small intervals between them. A pencil tip reaches the fifth small mark after 4 cm. What value does the tip read?',
      tier: 'core',
      options: ['4 1/2 cm', '4 1/5 cm', '5 1/5 cm', '4 5/4 cm'],
      correctIndex: 0,
      xpValue: 10,
      hint: '10 small intervals split each centimetre into tenths. Five tenths is one half, so the tip reads 4 1/2 cm.',
    },
    // Core 6: MCQ, half between two integers (challenging the "1/2 means lower" reading)
    {
      id: 'fnl-q6',
      type: 'multiple-choice',
      stem: 'A number line shows 3 and 4 with a single tick exactly halfway between them. Which mixed number names that tick?',
      tier: 'core',
      options: ['3 1/2', '1/2', '4 1/2', '3.5/4'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fnl-mis-half-loses-whole',
      hint: 'The tick is past 3 and before 4, so it must read 3 and a half.',
    },
    // Core 7: spot-misconception, "denominator is the position" trap
    {
      id: 'fnl-q7',
      type: 'spot-misconception',
      stem: 'Liam says: "On a 0 to 1 line split into 8 equal intervals, the fraction 3/8 sits at the eighth tick, because the denominator tells me which tick to use."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. The denominator tells you which tick to mark.',
          isMisconception: true,
        },
        {
          text: 'In fact the denominator sets how many equal intervals the line is split into, and the numerator tells you how many of those intervals to count from 0. So 3/8 sits on the third tick after 0.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fnl-mis-denominator-as-position',
    },
    // Confident 1: numeric-entry, read 5/8 from a halved-twice line (links to scene 3)
    {
      id: 'fnl-q8',
      type: 'numeric-entry',
      stem: 'A 0 to 1 number line is folded in half, then each half is folded in half again, giving eight equal intervals. A tick sits exactly halfway between 1/2 and 3/4. What is the numerator of that tick when the denominator is 8?',
      tier: 'confident',
      correctAnswer: 5,
      xpValue: 15,
      hint: '1/2 is 4/8 and 3/4 is 6/8. Halfway between them is the fifth eighth.',
    },
    // Confident 2: MCQ, different denominators on the same line
    {
      id: 'fnl-q9',
      type: 'multiple-choice',
      stem: 'A 0 to 1 number line is marked with halves, quarters and eighths together. Which fraction lands on the same tick as 3/4?',
      tier: 'confident',
      options: ['5/8', '6/8', '4/8', '7/8'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fnl-mis-ignore-ticks',
      hint: 'Three quarters of 8 is 6, so 3/4 = 6/8.',
    },
    // Confident 3: numeric-entry, mis-scaling guard on a 0 to 2 line
    {
      id: 'fnl-q10',
      type: 'numeric-entry',
      stem: 'A number line runs from 0 to 2 and is split into eight equal intervals. The fraction 3/4 is marked on the line. Counting from 0, on which tick does 3/4 sit?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      misconceptionId: 'fnl-mis-misscale-right-edge',
      hint: 'Each interval is 1/4 wide because 2 split into 8 equal pieces gives 1/4 each. So 3/4 sits on the third tick after 0, not at the right edge.',
    },
    // Confident 4: MCQ, mixed number placement
    {
      id: 'fnl-q11',
      type: 'multiple-choice',
      stem: 'A number line runs from 0 to 3, with each whole split into thirds. Where does 7/3 sit?',
      tier: 'confident',
      options: [
        'Exactly at 2',
        'Between 1 and 2, closer to 2',
        'Between 2 and 3, closer to 3',
        'Between 2 and 3, closer to 2',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: '7/3 equals 2 1/3, so it is one third past 2 and two thirds before 3.',
    },
    // Confident 5: numeric-entry, ruler stretch in cm
    {
      id: 'fnl-q12',
      type: 'numeric-entry',
      stem: 'A pupil rules a 0 to 5 cm line and splits each centimetre into four equal intervals. They mark 9/4 cm. How many millimetres from 0 is the mark? Give your answer in mm.',
      tier: 'confident',
      correctAnswer: 22.5,
      tolerance: 0.1,
      unit: 'mm',
      xpValue: 15,
      hint: '9/4 cm = 2.25 cm = 22.5 mm.',
    },
    // Confident 6: missing-step (anchors the worked-example pedagogy)
    {
      id: 'fnl-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil places 11/4 on a 0 to 3 number line.',
      tier: 'confident',
      steps: [
        'The denominator is 4, so split each whole into four equal intervals. The line from 0 to 3 has 12 equal intervals in total.',
        'Convert 11/4 to a mixed number to read the position. 11/4 = 2 3/4.',
        null,
        'Count three of the four intervals between 2 and 3 to reach 2 3/4. That is the position of 11/4.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The mixed number 2 3/4 sits between 2 and 3, three quarters of the way along that gap.',
      xpValue: 20,
      misconceptionId: 'fnl-mis-half-loses-whole',
    },
    // Confident 7: drag-order, positions from smallest to largest on the same line
    {
      id: 'fnl-q14',
      type: 'drag-order',
      stem: 'A 0 to 1 number line is marked with all four fractions below. Drag them into order from smallest position to largest.',
      tier: 'confident',
      items: ['1/8', '1/2', '5/8', '7/8'],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Convert to eighths: 1/8, 4/8, 5/8, 7/8. The numerators sit in this order along the line.',
    },
    // Confident 8: MCQ, picks the right method for placing 5/12
    {
      id: 'fnl-q15',
      type: 'multiple-choice',
      stem: 'How should a pupil set up a 0 to 1 number line to place 5/12 accurately?',
      tier: 'confident',
      options: [
        'Split the line into 5 equal intervals and mark the last tick.',
        'Split the line into 12 equal intervals and count 5 ticks from 0.',
        'Split the line into 12 equal intervals and count 12 ticks from 0.',
        'Split the line into 7 equal intervals and count 5 ticks from 0.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fnl-mis-denominator-as-position',
      hint: 'The denominator sets the number of equal intervals; the numerator sets how many to count.',
    },
    // Challenge 1: negative fraction on a number line (Y7 stretch)
    {
      id: 'fnl-q16',
      type: 'multiple-choice',
      stem: 'A number line runs from -1 to 1, with each side split into four equal intervals. Where does -1/2 sit?',
      tier: 'challenge',
      options: [
        'On the second tick to the left of 0',
        'On the second tick to the right of 0',
        'On the same tick as 1/2',
        'At -1',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fnl-mis-negative-mirror',
      hint: 'Negative fractions sit on the left of 0. -1/2 mirrors 1/2 across 0, so it lands two quarter-intervals to the left.',
    },
    // Challenge 2: numeric-entry, non-standard scale (Bond 11+ style multi-step)
    {
      id: 'fnl-q17',
      type: 'numeric-entry',
      stem: 'A timetable strip runs from 0 minutes to 60 minutes, drawn as a number line split into six equal intervals. A class is told the next bell rings 5/6 of the way along the line. After how many minutes does the bell ring?',
      tier: 'challenge',
      correctAnswer: 50,
      unit: 'minutes',
      xpValue: 25,
      hint: 'Each interval is 60 / 6 = 10 minutes. Five intervals from 0 reach 50 minutes.',
    },
    // Challenge 3: spot-misconception, mis-scaling on a 0 to 2 line
    {
      id: 'fnl-q18',
      type: 'spot-misconception',
      stem: 'Maya draws a number line from 0 to 2 and places 3/4 at the right-hand end of the line. She says "the denominator is 4 and the numerator is 3, so 3/4 must sit near the end, like it does on a 0 to 1 line."',
      tier: 'challenge',
      statements: [
        {
          text: 'Maya is right. 3/4 always sits near the right end of any number line.',
          isMisconception: true,
        },
        {
          text: 'In fact the position of 3/4 depends on the scale of the line. On a 0 to 2 line, 3/4 sits less than halfway along, because 3/4 is smaller than 1 and well below 2.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fnl-mis-misscale-right-edge',
    },
    // Challenge 4: Bond 11+ style word problem on a ruler scale
    {
      id: 'fnl-q19',
      type: 'numeric-entry',
      stem: 'A Sevenoaks pupil draws a number line that runs from 0 cm to 30 cm, split into ten equal intervals. A library card is placed with its edge on the seventh tick after 0, and the rest of the card stretches over the next two intervals. How many centimetres long is the card?',
      tier: 'challenge',
      correctAnswer: 6,
      unit: 'cm',
      xpValue: 25,
      hint: 'Each interval is 30 / 10 = 3 cm. The card covers two intervals, so its length is 2 x 3 = 6 cm.',
    },
    // Challenge 5: MCQ, reading between unevenly labelled ticks
    {
      id: 'fnl-q20',
      type: 'multiple-choice',
      stem: 'A number line shows only two labelled values: 0 at the far left and 5 at the far right. There are ten equal intervals between them. A counter sits on the seventh tick after 0. What value does the counter show?',
      tier: 'challenge',
      options: ['7/10', '5/7', '3 1/2', '7/5'],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'fnl-mis-ignore-ticks',
      hint: 'Each interval is 5 / 10 = 1/2. Seven intervals of 1/2 each gives 7/2 = 3 1/2.',
    },
    // Challenge 6: ordering fractions including a negative (multi-step)
    {
      id: 'fnl-q21',
      type: 'multiple-choice',
      stem: 'A number line runs from -1 to 1. Which list places the values in order from leftmost to rightmost on that line?',
      tier: 'challenge',
      options: [
        '-3/4, -1/4, 1/2, 5/8',
        '-1/4, -3/4, 1/2, 5/8',
        '1/2, 5/8, -1/4, -3/4',
        '-3/4, -1/4, 5/8, 1/2',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'fnl-mis-negative-mirror',
      hint: 'On a number line, smaller values sit further left. -3/4 < -1/4 < 0 < 1/2 < 5/8.',
    },
  ],
  misconceptions: [
    // Source: Hart, K. M. (ed.) (1981) Children's Understanding of Mathematics: 11-16 (CSMS), John Murray; chapter on Fractions documents pupils placing 1/4 closer to 1 than to 0 by confusing 1/4 with the leftover after 3/4 has been taken.
    {
      id: 'fnl-mis-quarter-near-one',
      description:
        'I think 1/4 sits near 1 on the number line, because three quarters is gone and only one quarter is left over.',
      triggerAnswer: 'quarter-near-one',
      correction:
        'Actually 1/4 sits closer to 0 than to 1. The fraction 1/4 is a small amount, and small amounts sit near the start of the line.',
      reExplanation:
        'Split a 0 to 1 line into four equal intervals. The first tick after 0 is 1/4, the second is 1/2, the third is 3/4, and the fourth is 1. So 1/4 is the tick nearest 0, not the tick nearest 1.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Fractions on a Number Line" page, "Common mistake" callout that pupils read the denominator as the tick index rather than the number of equal intervals.
    {
      id: 'fnl-mis-denominator-as-position',
      description:
        'I think the denominator tells me which tick to mark on the number line.',
      triggerAnswer: 'denominator-as-position',
      correction:
        'In fact the denominator tells you how many equal intervals to split the line into. The numerator then tells you how many of those intervals to count from 0.',
      reExplanation:
        'For 3/8 on a 0 to 1 line, the denominator 8 means split the line into eight equal intervals. The numerator 3 means count three intervals from 0 and mark that third tick. The tick that matches the denominator is the end of the line, where 8/8 = 1 sits.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a number-line question where pupils placed 3/4 at the right-hand end of a 0 to 2 line by ignoring the change of scale.
    {
      id: 'fnl-mis-misscale-right-edge',
      description:
        'I think 3/4 always sits near the right-hand end of a number line, no matter what the line runs from and to.',
      triggerAnswer: 'misscale-right-edge',
      correction:
        'Actually the position of any fraction depends on the scale of the line. On a 0 to 2 line, 3/4 sits well before halfway, because 3/4 is smaller than 1.',
      reExplanation:
        'Read the labels at the ends before placing the fraction. On a 0 to 2 line split into eight equal intervals, each interval is 1/4 wide, so 3/4 is the third tick after 0, not the eighth.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a number-line question where pupils placed -1/2 on the positive side of 0.
    {
      id: 'fnl-mis-negative-mirror',
      description:
        'I think -1/2 sits in the same place as 1/2 on a number line, because the fraction is the same.',
      triggerAnswer: 'negative-mirror',
      correction:
        'Actually -1/2 sits on the other side of 0 from 1/2. Negative fractions are to the left of 0, positive fractions to the right.',
      reExplanation:
        'Picture a number line running from -1 to 1, split into four equal intervals on each side of 0. The tick for 1/2 sits two intervals to the right of 0, and the tick for -1/2 sits two intervals to the left of 0. Both are half a unit from 0, but in opposite directions.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a number-line question where pupils read a halfway tick between 3 and 4 as plain 1/2 instead of 3 1/2, losing the whole-number part.
    {
      id: 'fnl-mis-half-loses-whole',
      description:
        'I read a tick halfway between two whole numbers as 1/2, instead of as the whole-number part plus 1/2.',
      triggerAnswer: 'half-loses-whole',
      correction:
        'Actually a halfway tick between 3 and 4 is 3 1/2, not 1/2. The tick is past 3, so the mixed number begins with 3.',
      reExplanation:
        'Read the nearest labelled whole below the tick first, then add the fractional part. The tick halfway between 3 and 4 is one half past 3, so it reads 3 1/2, which is the same as 7/2.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Reading Scales" page, "Watch out" callout that pupils ignore the number of tick marks between labelled values and assume each gap is 1 unit.
    {
      id: 'fnl-mis-ignore-ticks',
      description:
        'I read a tick by counting from 0, ignoring how many equal intervals lie between the labelled values.',
      triggerAnswer: 'ignore-ticks',
      correction:
        'Actually you must first work out the size of each interval. Divide the labelled range by the number of equal intervals between the labels.',
      reExplanation:
        'On a line from 0 to 5 with ten equal intervals, each interval is 5 / 10 = 1/2. The seventh tick from 0 sits at 7 x 1/2 = 7/2 = 3 1/2. Counting ticks as if each is 1 unit gives 7, which is bigger than the labelled range.',
    },
    // Authored, no external source: classroom-observed Year 7 reading slip on a 0 to 1 line where pupils confuse a fraction with its reciprocal when reading off the line.
    {
      id: 'fnl-mis-reciprocal-read',
      description:
        'I read a tick at position 5/8 as 8/5 because I count the larger number first.',
      triggerAnswer: 'reciprocal-read',
      correction:
        'Actually the position of a tick on a 0 to 1 line gives a fraction less than 1, so the numerator must be smaller than the denominator.',
      reExplanation:
        'On a 0 to 1 line split into eight equal intervals, the fifth tick after 0 reads 5/8 because five intervals out of eight have been counted. The fraction 8/5 is bigger than 1, so it sits past 1, not between 0 and 1.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const fractionsOnNumberLineZoneNodes = [fractionsOnNumberLine]
