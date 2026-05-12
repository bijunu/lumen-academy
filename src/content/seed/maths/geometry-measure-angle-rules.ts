import type { SkillNode } from '@/types/content'

export const geometryMeasureAngleRules: SkillNode = {
  id: 'maths-geometry-measure-angle-rules',
  title: 'Angle Rules: On a Line, Around a Point, Vertically Opposite',
  description:
    'Apply three basic angle rules to find missing angles. Angles that meet on a straight line on one side of that line sum to 180 degrees. Angles that meet around a single point and fan out fully sum to 360 degrees. When two straight lines cross, the two pairs of opposite angles across the crossing point are equal, so each pair shares a value. Use these rules together to read junctions, intersections and roundabout sketches without relying on the figure being drawn to scale.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-geometry-measure',
  zoneName: 'Geometry and Measure',
  tier: 'confident',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Apply the properties of angles at a point, angles at a point on a straight line, vertically opposite angles.',
    awardingBodies: {
      aqa: 'G3 Apply the basic angle rules: angles on a straight line, around a point, vertically opposite (GCSE Mathematics 8300)',
      edexcel: 'G3 Apply the properties of angles at a point, on a line, vertically opposite (GCSE Mathematics 1MA1)',
      ocr: '9.03a Angles at a point, on a line, vertically opposite (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'gar-scene-line-180',
      title: 'Angles on a Straight Line Sum to 180 Degrees',
      type: 'diagram',
      instructions:
        'Read how a straight line acts as a half turn. A point P sits on a horizontal line. From P, two rays head upwards, splitting the upper side of the line into three angles labelled 50, 70 and a missing angle x. The three angles together fill the upper side of the line, so 50 + 70 + x = 180. That gives x = 60 degrees. Only the angles on one side of the line are counted, never both sides at once.',
      data: {
        viewBox: '0 0 320 200',
        baseLine: { x1: 20, y1: 140, x2: 300, y2: 140 },
        point: { x: 160, y: 140, label: 'P' },
        rays: [
          { angleFromBaseDegrees: 50, length: 100, label: '50' },
          { angleFromBaseDegrees: 120, length: 100, label: '70' },
        ],
        missingAngleLabel: 'x',
        sumRule: '50 + 70 + x = 180, so x = 60 degrees',
        callout:
          'A straight line is a half turn. Angles meeting at a point on one side of the line always add to 180 degrees, however many angles there are.',
      },
    },
    {
      id: 'gar-scene-point-360',
      title: 'Angles Around a Point Sum to 360 Degrees',
      type: 'diagram',
      instructions:
        'Look at four roads meeting at a Sevenoaks junction. The four angles between the roads, measured all the way around the centre point, are 90, 80, 110 and a missing angle y. The four angles fill a full turn, so 90 + 80 + 110 + y = 360. That gives y = 80 degrees. A full turn is 360 degrees, not 180. The 180 figure only applies when angles sit on one side of a single straight line.',
      data: {
        viewBox: '0 0 320 240',
        centre: { x: 160, y: 120 },
        sectors: [
          { sweepDegrees: 90, label: '90' },
          { sweepDegrees: 80, label: '80' },
          { sweepDegrees: 110, label: '110' },
          { sweepDegrees: 80, label: 'y = 80' },
        ],
        sumRule: '90 + 80 + 110 + y = 360, so y = 80 degrees',
        callout:
          'A full turn around a point is 360 degrees. Use this whenever the angles fan out completely with no gap.',
      },
    },
    {
      id: 'gar-scene-vertically-opposite',
      title: 'Vertically Opposite Angles Are Equal',
      type: 'labelled-diagram',
      instructions:
        'Hover the four angles at the crossing of two straight lines. The lines AB and CD cross at point X. The four angles formed are labelled a, b, c, d. The angles a and c sit across from each other through X, so they are vertically opposite and equal. Angles b and d are also vertically opposite and equal. Adjacent pairs such as a and b sit on a straight line together, so a + b = 180. Vertically opposite means across the crossing point, not vertical-up-down.',
      data: {
        viewBox: '0 0 320 240',
        svg:
          '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">' +
          '<line x1="40" y1="40" x2="280" y2="200" stroke="#1d4ed8" stroke-width="2"/>' +
          '<line x1="40" y1="200" x2="280" y2="40" stroke="#1d4ed8" stroke-width="2"/>' +
          '<circle cx="160" cy="120" r="4" fill="#1d4ed8"/>' +
          '<text x="166" y="115" font-family="sans-serif" font-size="12">X</text>' +
          '<text x="150" y="80" font-family="sans-serif" font-size="14" font-weight="bold">a</text>' +
          '<text x="200" y="125" font-family="sans-serif" font-size="14" font-weight="bold">b</text>' +
          '<text x="150" y="170" font-family="sans-serif" font-size="14" font-weight="bold">c</text>' +
          '<text x="105" y="125" font-family="sans-serif" font-size="14" font-weight="bold">d</text>' +
          '<text x="20" y="220" font-family="sans-serif" font-size="12">a = c, b = d, a + b = 180</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'gar-vo-a',
            x: 47,
            y: 35,
            label: 'Angle a (top)',
            description: 'Angle a sits at the top of the crossing.',
          },
          {
            id: 'gar-vo-c',
            x: 47,
            y: 70,
            label: 'Angle c (bottom)',
            description: 'Angle c sits across from a through X. It equals a.',
          },
          {
            id: 'gar-vo-b',
            x: 65,
            y: 52,
            label: 'Angle b (right)',
            description: 'Angle b sits to the right of X. It is supplementary to a.',
          },
          {
            id: 'gar-vo-d',
            x: 30,
            y: 52,
            label: 'Angle d (left)',
            description: 'Angle d sits across from b through X. It equals b.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gar-worked-1',
      title: 'Find a missing angle on a straight line',
      steps: [
        {
          explanation:
            'Three angles sit at a point on a straight line on the upper side. Two are known, one is unknown.',
          maths: 'angles on the upper side: 65, 80, x',
        },
        {
          explanation:
            'Apply the rule: angles that meet at a point on one side of a straight line sum to 180 degrees.',
          maths: '65 + 80 + x = 180',
        },
        {
          explanation: 'Add the two known angles to simplify.',
          maths: '145 + x = 180',
        },
        {
          explanation: 'Subtract 145 from both sides to isolate x.',
          maths: 'x = 180 - 145',
        },
        {
          explanation:
            'State the value of x in degrees. This is the missing angle on the line.',
          maths: 'x = 35 degrees',
        },
      ],
    },
    {
      id: 'gar-worked-2',
      title: 'Combine vertically opposite and angles around a point',
      steps: [
        {
          explanation:
            'Two straight lines cross at point X. One of the four angles is given as 70 degrees. Then a third ray from X cuts off a 95 degree angle from the angle opposite the 70.',
          maths: 'given angle = 70, extra ray cuts off 95 in the opposite region',
        },
        {
          explanation:
            'Apply vertically opposite angles. The angle directly across the crossing from the 70 is also 70 degrees.',
          maths: 'opposite angle = 70',
        },
        {
          explanation:
            'The opposite 70 region is split by the extra ray into 95 and a leftover angle z. But 95 is bigger than 70, so the extra ray must lie outside that 70 region. Reread the figure: the 95 is measured from the extra ray around the point on the major side.',
        },
        {
          explanation:
            'Apply angles around a point. The four angles around X plus the extra ray slice add to 360 degrees. The known parts are 70, 70 and two slices that share the leftover 220 degrees with one slice equal to 95.',
          maths: '70 + 70 + 95 + z = 360',
        },
        {
          explanation: 'Sum the known parts.',
          maths: '235 + z = 360',
        },
        {
          explanation:
            'Solve for z. State the leftover slice in degrees, and tie back to the question stem.',
          maths: 'z = 360 - 235 = 125 degrees',
        },
      ],
    },
  ],
  questions: [
    // Core 1 (numeric)
    {
      id: 'gar-q1',
      type: 'numeric-entry',
      stem: 'Two angles meet at a point on a straight line on one side of the line. One is 70 degrees. What is the other angle in degrees?',
      tier: 'core',
      correctAnswer: 110,
      xpValue: 10,
      unit: 'degrees',
      hint: 'Angles on one side of a straight line sum to 180. Subtract 70 from 180.',
    },
    // Core 2 (numeric)
    {
      id: 'gar-q2',
      type: 'numeric-entry',
      stem: 'Three angles fan out fully around a point. Two of them are 120 degrees and 130 degrees. What is the third angle in degrees?',
      tier: 'core',
      correctAnswer: 110,
      xpValue: 10,
      unit: 'degrees',
      misconceptionId: 'gar-mis-around-point-180',
      hint: 'Angles around a point sum to 360. Subtract (120 + 130) from 360.',
    },
    // Core 3 (MCQ, idx 1)
    {
      id: 'gar-q3',
      type: 'multiple-choice',
      stem: 'Two straight lines cross at point X. One of the four angles formed is 40 degrees. What is the size of the angle directly opposite the 40 across the crossing?',
      tier: 'core',
      options: ['20 degrees', '40 degrees', '50 degrees', '140 degrees'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gar-mis-vertically-opp-supplementary',
      hint: 'Vertically opposite angles are equal. The angle across the crossing from 40 is also 40.',
    },
    // Core 4 (MCQ, idx 2)
    {
      id: 'gar-q4',
      type: 'multiple-choice',
      stem: 'Five roads meet at a Sevenoaks junction, with no straight line through the centre. Which sum of the five angles between the roads is correct?',
      tier: 'core',
      options: [
        '90 degrees',
        '180 degrees',
        '360 degrees',
        '540 degrees',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gar-mis-around-point-180',
      hint: 'The five angles fan out fully around a single point. A full turn is 360 degrees.',
    },
    // Core 5 (numeric)
    {
      id: 'gar-q5',
      type: 'numeric-entry',
      stem: 'Three angles on one side of a straight line are 35, 65 and x. What is x in degrees?',
      tier: 'core',
      correctAnswer: 80,
      xpValue: 10,
      unit: 'degrees',
      misconceptionId: 'gar-mis-line-includes-all-angles',
      hint: 'On one side of a straight line, the angles sum to 180. So 35 + 65 + x = 180. Do not include angles from the other side.',
    },
    // Core 6 (MCQ, idx 3)
    {
      id: 'gar-q6',
      type: 'multiple-choice',
      stem: 'Four angles fan out around a point. Three of them are 80, 100 and 90 degrees. What is the fourth angle?',
      tier: 'core',
      options: ['60 degrees', '70 degrees', '80 degrees', '90 degrees'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Angles around a point sum to 360. Compute 360 - (80 + 100 + 90).',
    },
    // Core 7 (spot-misconception)
    {
      id: 'gar-q7',
      type: 'spot-misconception',
      stem: 'Priya says: "Vertically opposite angles are the two angles at the top and bottom of any crossing, because vertical means up and down."',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. Vertically opposite means the up-down pair only.',
          isMisconception: true,
        },
        {
          text: 'In fact "vertically opposite" means across the crossing point, not up and down. When two lines cross, both pairs of opposite angles are vertically opposite, whichever direction the lines run.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gar-mis-vertically-opposite-as-vertical',
    },
    // Confident 1 (MCQ, idx 0)
    {
      id: 'gar-q8',
      type: 'multiple-choice',
      stem: 'Two straight lines cross at point X. One of the four angles is 115 degrees. What is the size of an angle adjacent to the 115 at the crossing?',
      tier: 'confident',
      options: [
        '65 degrees',
        '115 degrees',
        '180 degrees',
        '245 degrees',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gar-mis-adjacent-equal-at-intersection',
      hint: 'Adjacent angles at a crossing sit on a straight line, so they sum to 180. So the adjacent angle is 180 - 115.',
    },
    // Confident 2 (numeric)
    {
      id: 'gar-q9',
      type: 'numeric-entry',
      stem: 'Two straight lines cross. One angle at the crossing is 50 degrees. A third ray from the same point sits inside the angle directly opposite the 50, splitting it into two parts. One of those parts is 18 degrees. What is the other part in degrees?',
      tier: 'confident',
      correctAnswer: 32,
      xpValue: 15,
      unit: 'degrees',
      hint: 'The angle opposite the 50 is also 50 (vertically opposite). The two parts inside it sum to 50, so the missing part is 50 - 18.',
    },
    // Confident 3 (MCQ, idx 2)
    {
      id: 'gar-q10',
      type: 'multiple-choice',
      stem: 'Six angles around a Manchester roundabout meet at the centre with no straight line through the middle. Which equation finds the missing sixth angle m?',
      tier: 'confident',
      options: [
        '50 + 60 + 70 + 80 + 40 + m = 90',
        '50 + 60 + 70 + 80 + 40 + m = 180',
        '50 + 60 + 70 + 80 + 40 + m = 360',
        '50 + 60 + 70 + 80 + 40 + m = 540',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gar-mis-confuse-rule-choice',
      hint: 'The angles fan fully around one point with no straight line, so use angles around a point sum to 360.',
    },
    // Confident 4 (numeric)
    {
      id: 'gar-q11',
      type: 'numeric-entry',
      stem: 'Five angles fan out fully around a point. Four of them are 45, 90, 60 and 75 degrees. What is the fifth angle in degrees?',
      tier: 'confident',
      correctAnswer: 90,
      xpValue: 15,
      unit: 'degrees',
      hint: 'Angles around a point sum to 360. So fifth angle = 360 - (45 + 90 + 60 + 75).',
    },
    // Confident 5 (missing-step)
    {
      id: 'gar-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. Two straight lines cross at X. One of the four angles is 130 degrees. Find the size of the angle that is adjacent to the 130 at X.',
      tier: 'confident',
      steps: [
        'Identify the rule. Adjacent angles at the crossing sit at a point on a straight line, so they sum to 180 degrees.',
        'Set up the equation. Let the adjacent angle be a. Then a + 130 = 180.',
        null,
        'State the answer. The angle adjacent to the 130 at X is 50 degrees.',
      ],
      missingStepIndex: 2,
      correctStep: 'Solve for a. Subtract 130 from both sides: a = 180 - 130 = 50 degrees.',
      xpValue: 20,
      misconceptionId: 'gar-mis-adjacent-equal-at-intersection',
    },
    // Confident 6 (drag-order)
    {
      id: 'gar-q13',
      type: 'drag-order',
      stem: 'Three setups each give one missing angle. Order the missing angles from smallest to largest.',
      tier: 'confident',
      items: [
        'Angles on a line: 80 + 60 + p = 180. Find p.',
        'Around a point: 100 + 130 + 90 + q = 360. Find q.',
        'Vertically opposite: one angle is 75, find r across the crossing.',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
      hint: 'Compute each missing angle. p = 180 - 140 = 40. q = 360 - 320 = 40. Wait, recompute q: 100 + 130 + 90 = 320, so q = 40. r = 75 (vertically opposite). Then sort by size, with the smaller of two equal values listed first by setup order.',
    },
    // Confident 7 (MCQ, idx 3)
    {
      id: 'gar-q14',
      type: 'multiple-choice',
      stem: 'A figure is labelled "not drawn to scale". The diagram looks as if a missing angle is about 90 degrees, but the listed neighbours on a straight line are 55 and 60 degrees. What is the missing angle?',
      tier: 'confident',
      options: [
        '90 degrees, because that is what the diagram shows',
        '85 degrees, by averaging the diagram with the rule',
        '95 degrees, splitting the difference',
        '65 degrees, applying angles on a straight line sum to 180',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gar-mis-estimate-by-eye',
      hint: 'Trust the rule, not the picture. 55 + 60 + missing = 180, so missing = 65.',
    },
    // Confident 8 (spot-misconception)
    {
      id: 'gar-q15',
      type: 'spot-misconception',
      stem: 'Joel sees two crossing roads in a sketch and writes: "The two angles next to each other at the crossing are vertically opposite, so they are equal."',
      tier: 'confident',
      statements: [
        {
          text: 'Joel is right. Adjacent angles at the crossing are vertically opposite, so they are equal.',
          isMisconception: true,
        },
        {
          text: 'In fact adjacent angles at the crossing are not vertically opposite. They sit on a straight line, so they are supplementary and sum to 180 degrees. Vertically opposite means across the crossing, not next to.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gar-mis-adjacent-equal-at-intersection',
    },
    // Challenge 1 (numeric, Bond-style word problem)
    {
      id: 'gar-q16',
      type: 'numeric-entry',
      stem: 'A round Sunday roast pie is cut from the centre into four slices. The first three slices have angles of 100, 70 and 85 degrees at the centre. The fourth slice fills the rest. What is the angle of the fourth slice in degrees?',
      tier: 'challenge',
      correctAnswer: 105,
      xpValue: 25,
      unit: 'degrees',
      hint: 'The four slices fan fully around the centre, so the angles sum to 360. So fourth slice = 360 - (100 + 70 + 85).',
    },
    // Challenge 2 (MCQ, idx 0)
    {
      id: 'gar-q17',
      type: 'multiple-choice',
      stem: 'Two straight roads cross at a Tunbridge Wells junction. A third smaller path leaves the junction so it lies inside one of the four angles, splitting it into 38 and 47 degrees. What is the size of the vertically opposite angle to that whole split angle?',
      tier: 'challenge',
      options: [
        '85 degrees',
        '95 degrees',
        '47 degrees',
        '38 degrees',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'The whole split angle is 38 + 47 = 85 degrees. The angle opposite it across the crossing is also 85 degrees by the vertically opposite rule.',
    },
    // Challenge 3 (numeric)
    {
      id: 'gar-q18',
      type: 'numeric-entry',
      stem: 'Three angles meet at a point on a straight line. Their sizes are 2x, 3x and x degrees. What is the value of x?',
      tier: 'challenge',
      correctAnswer: 30,
      xpValue: 25,
      hint: 'Angles on one side of a line sum to 180, so 2x + 3x + x = 180. That gives 6x = 180, so x = 30.',
    },
    // Challenge 4 (missing-step)
    {
      id: 'gar-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Two straight lines cross at point X. One angle at the crossing is 110 degrees. A third ray from X lies in the angle adjacent to the 110, splitting that angle into 25 degrees and a part labelled k. Find k.',
      tier: 'challenge',
      steps: [
        'Find the size of the whole angle adjacent to the 110. Adjacent angles at a crossing sit on a straight line, so the whole adjacent angle is 180 - 110 = 70 degrees.',
        'The third ray splits the 70 into 25 and k, and the two parts sit inside the same angle.',
        null,
        'State the answer. So k = 45 degrees.',
      ],
      missingStepIndex: 2,
      correctStep: 'Set up and solve. The two parts add to the whole angle: 25 + k = 70, so k = 70 - 25 = 45 degrees.',
      xpValue: 25,
      misconceptionId: 'gar-mis-wrong-reference-angle',
    },
    // Challenge 5 (MCQ, idx 1)
    {
      id: 'gar-q20',
      type: 'multiple-choice',
      stem: 'A Dover roundabout has four roads meeting at the centre. Going clockwise, the angles between the roads are 95, x, 110 and (x + 15) degrees. What is x?',
      tier: 'challenge',
      options: [
        '60 degrees',
        '70 degrees',
        '75 degrees',
        '80 degrees',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Around a point: 95 + x + 110 + (x + 15) = 360. Combine: 220 + 2x = 360, so 2x = 140, x = 70.',
    },
    // Challenge 6 (MCQ, idx 1)
    {
      id: 'gar-q21',
      type: 'multiple-choice',
      stem: 'Two straight footpaths cross at right angles in a Lake District car park. A third footpath leaves the same crossing point and makes a 35 degree angle with one of the original paths, on the side where the right angle sits. What is the size of the angle between the third path and the other original path, measured inside the same right angle?',
      tier: 'challenge',
      options: [
        '45 degrees',
        '55 degrees',
        '65 degrees',
        '125 degrees',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'gar-mis-wrong-reference-angle',
      hint: 'The right angle is 90 degrees. The third path splits the right angle into 35 and the missing part. So missing part = 90 - 35 = 55 degrees.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a vertically opposite angles question where pupils interpreted "vertically opposite" as the visually top-and-bottom pair only.
    {
      id: 'gar-mis-vertically-opposite-as-vertical',
      description:
        'I read "vertically opposite" as meaning the up-down pair at a crossing only, not the across-the-vertex pair on either diagonal.',
      triggerAnswer: 'vertically-opposite-as-vertical',
      correction:
        'Actually "vertically opposite" means across the crossing point, on either diagonal. Both pairs at the crossing are vertically opposite.',
      reExplanation:
        'When two straight lines cross at X, they form four angles. The two angles directly across X from each other share a value, on either diagonal. The word "vertically" comes from the Latin for vertex, the crossing point. It does not mean up-and-down. Rotate the figure and the rule still holds.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a missing angle around a point question where pupils used 180 instead of 360 as the total.
    {
      id: 'gar-mis-around-point-180',
      description:
        'I think the angles around a point sum to 180 degrees, the same total as on a straight line.',
      triggerAnswer: 'around-point-180',
      correction:
        'In fact 180 degrees is a half turn, used on one side of a straight line. A full turn around a point is 360 degrees.',
      reExplanation:
        'Imagine standing at a junction and turning all the way until you face the same way again. That full turn is 360 degrees, twice the half turn of 180. Use 360 whenever angles fan fully around a point with no straight line through the centre, and use 180 only when angles sit on one side of a single straight line.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2022, Paper 01 (Foundation, Non-calculator), commentary on a crossing-lines question where pupils equated adjacent angles instead of opposite ones.
    {
      id: 'gar-mis-adjacent-equal-at-intersection',
      description:
        'I think the two angles next to each other at a crossing of two straight lines are equal, because they share a side.',
      triggerAnswer: 'adjacent-equal-at-intersection',
      correction:
        'Actually adjacent angles at a crossing sit on a straight line, so they are supplementary and sum to 180 degrees.',
      reExplanation:
        'When two straight lines cross at X, four angles are formed. The two pairs of opposite angles across X are equal. The pairs of angles that share a side sit on the same straight line, so they sum to 180. So if one angle is 115, its neighbour is 65, not 115. The opposite angle of 115 is 115.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 5 Geometry and Measures, "Angles at a Point and on a Line" page; the worked example warns against guessing angles by eye when the figure is not drawn to scale.
    {
      id: 'gar-mis-estimate-by-eye',
      description:
        'I read the missing angle off the diagram by eye, even when the figure is labelled "not drawn to scale".',
      triggerAnswer: 'estimate-by-eye',
      correction:
        'In fact the rule gives the exact answer, the picture does not. Use the listed numbers and the angle rule, not the visual size.',
      reExplanation:
        'A diagram labelled "not drawn to scale" is a sketch only, so an angle that looks like 90 may really be 65. Apply the rule with the given numbers. For example, if angles on one side of a line are 55, 60 and a missing one, then the missing angle is 180 - 55 - 60 = 65 degrees, regardless of how it looks.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a multi-step missing angle question where pupils used the wrong reference angle inside a split region.
    {
      id: 'gar-mis-wrong-reference-angle',
      description:
        'In a multi-step problem, I subtract from the wrong reference angle, so the parts inside a split region do not add up to the whole.',
      triggerAnswer: 'wrong-reference-angle',
      correction:
        'Actually the parts inside a split angle must add to that whole angle, not to 180 or 360.',
      reExplanation:
        'If a 70 degree angle is split by a third ray into 25 and k, then 25 + k = 70, so k = 45. Subtracting from 180 or 360 here gives the wrong answer because the parts only fill the 70, not the whole line or the whole turn. Always identify the whole angle first, then split inside it.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1F (Foundation, Non-calculator), commentary on a multiple-rule question where pupils picked the wrong total (180 vs 360) for the configuration shown.
    {
      id: 'gar-mis-confuse-rule-choice',
      description:
        'I pick 180 when the angles fan around a point with no straight line, or 360 when the angles sit on one side of a single line.',
      triggerAnswer: 'confuse-rule-choice',
      correction:
        'In fact the total depends on the setup. On one side of a straight line, use 180. Around a full point, use 360.',
      reExplanation:
        'Look at the figure first. If a straight line passes through the meeting point and the angles sit on one side of that line, the total is 180. If the angles fan fully around the meeting point with no straight line through it, the total is 360. Two crossing lines split a full turn into two halves, so each half is 180.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a crossing-lines question where pupils added vertically opposite angles to 180 instead of treating them as equal.
    {
      id: 'gar-mis-vertically-opp-supplementary',
      description:
        'I think vertically opposite angles sum to 180 degrees, instead of being equal.',
      triggerAnswer: 'vertically-opp-supplementary',
      correction:
        'Actually vertically opposite angles are equal, not supplementary. The pair that sums to 180 is the adjacent pair on the same line.',
      reExplanation:
        'When two straight lines cross, the angle opposite a 40 is also 40, not 140. The 140 belongs to the two angles next to the 40, which sit on a straight line with it. So 40 and 40 across, 140 and 140 across, with 40 + 140 = 180 at any adjacent pair.',
    },
    // Source: NCETM secondary mastery materials, Year 7 Geometric reasoning unit, "angles at a point" key idea card; pupils sometimes pick the wrong reference angle when several angles meet at once.
    {
      id: 'gar-mis-line-includes-all-angles',
      description:
        'I sum every angle at a point on a line, on both sides of the line, and set the total to 180.',
      triggerAnswer: 'line-includes-all-angles',
      correction:
        'In fact only the angles on one side of the line sum to 180. Both sides together fill a full turn of 360.',
      reExplanation:
        'A straight line through a point splits the full 360 degree turn into two halves of 180 each. The rule "angles on a line sum to 180" applies to one side at a time. If you count angles from both sides at once, you should get 360, not 180. Pick the side first, then sum.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const geometryMeasureAngleRulesZoneNodes = [geometryMeasureAngleRules]
