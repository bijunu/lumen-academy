import type { SkillNode } from '@/types/content'

export const probabilityTwoWayTables: SkillNode = {
  id: 'maths-probability-two-way-tables',
  title: 'Two-Way Tables in Probability',
  description:
    'Read a two-way table that classifies a sample by two attributes (year group and school dinner choice, or gender and handedness). Use the row totals, column totals and grand total to fill missing cells, then calculate joint probabilities (the cell over the grand total) and marginal probabilities (the column or row total over the grand total). Read "given" wording as a switch of denominator: P(left-handed given boy) is the boys-left cell over the boys total, not over the grand total.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-probability',
  zoneName: 'Probability',
  tier: 'confident',
  prerequisites: ['maths-probability-listing-outcomes'],
  curriculum: {
    ks3Objective:
      'Enumerate sets and unions/intersections of sets systematically, using tables, grids and Venn diagrams; use two-way tables to calculate probabilities.',
    awardingBodies: {
      aqa: 'P6 Enumerate sets and combinations of sets systematically, using tables, grids, Venn diagrams (GCSE Mathematics 8300)',
      edexcel:
        'P6 Enumerate sets and unions/intersections of sets systematically, using tables, grids and Venn diagrams (GCSE Mathematics 1MA1)',
      ocr: '11.03b Use two-way tables, frequency trees and grids (GCSE 9-1 Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'ptw-scene-read-cells',
      title: 'A 2 by 2 Table With Row and Column Totals',
      type: 'diagram',
      instructions:
        'Read across each row and down each column to see how the joint cells, the row totals and the column totals fit together. The grand total in the bottom-right is the size of the whole sample. Each joint cell is the count of pupils who match both attributes at once. The 60 pupils in this Year 7 form are classified by gender and by school dinner choice on a Monday.',
      data: {
        rowsLabel: 'Gender',
        colsLabel: 'Lunch on Monday',
        rows: ['Boys', 'Girls', 'Total'],
        cols: ['School dinner', 'Packed lunch', 'Total'],
        cells: [
          ['18', '14', '32'],
          ['16', '12', '28'],
          ['34', '26', '60'],
        ],
        callout:
          'The bottom-right cell (60) is the grand total. The bottom row shows column totals (34, 26). The right column shows row totals (32, 28). Row totals add to 60 and column totals also add to 60: both routes give the same grand total.',
      },
    },
    {
      id: 'ptw-scene-fill-missing',
      title: 'Filling Missing Cells From the Totals',
      type: 'diagram',
      instructions:
        'Some cells of a Year 8 survey have been left blank. Use the row totals and column totals to work out the missing values. A row total minus the known cells in that row gives the missing cell. The same trick works going down a column. Once every cell is filled, check that the row totals add up to the grand total and the column totals also add up to the grand total.',
      data: {
        rowsLabel: 'Year 8 form',
        colsLabel: 'Walks to school',
        rows: ['Boys', 'Girls', 'Total'],
        cols: ['Yes', 'No', 'Total'],
        cells: [
          ['?', '9', '24'],
          ['11', '?', '26'],
          ['?', '?', '50'],
        ],
        callout:
          'Boys row: 24 minus 9 gives 15 walkers. Girls row: 26 minus 11 gives 15 non-walkers. Column totals: 15 plus 11 gives 26 walkers; 9 plus 15 gives 24 non-walkers. Both routes reconcile: 26 plus 24 equals 50, the grand total.',
      },
    },
    {
      id: 'ptw-scene-probabilities',
      title: 'From a Filled Table to Probabilities',
      type: 'diagram',
      instructions:
        'Read a probability straight off a completed table. P(both attributes) is the joint cell over the grand total. P(one attribute) is the row or column total over the grand total. P(one attribute given the other) switches the denominator: it is the joint cell over the relevant row or column total, not the grand total. The 100 pupils here have been classified by year group and by whether they got a school certificate this term.',
      data: {
        rowsLabel: 'Year group',
        colsLabel: 'Got a certificate',
        rows: ['Year 7', 'Year 8', 'Total'],
        cols: ['Yes', 'No', 'Total'],
        cells: [
          ['28', '22', '50'],
          ['18', '32', '50'],
          ['46', '54', '100'],
        ],
        favouredEvents: [
          {
            name: 'P(Year 7 and certificate) = joint cell / grand total',
            cells: ['28 / 100'],
            probability: '28/100 = 7/25',
          },
          {
            name: 'P(certificate) = column total / grand total',
            cells: ['46 / 100'],
            probability: '46/100 = 23/50',
          },
          {
            name: 'P(certificate given Year 7) = joint cell / Year 7 row total',
            cells: ['28 / 50'],
            probability: '28/50 = 14/25',
          },
        ],
        callout:
          'The denominator changes when the wording does. "and" keeps the grand total. "given" switches to the row or column total of the condition.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'ptw-worked-1',
      title:
        'Fill the missing cells in a 2 by 2, then read P(packed lunch) and P(packed lunch given girl)',
      steps: [
        {
          explanation:
            'Write what is known. The form has 60 pupils. Boys row total is 32. Packed lunch column total is 26. The boys-school-dinner cell is 18.',
          maths: 'grand total = 60, boys row = 32, packed column = 26, boys-school = 18',
        },
        {
          explanation:
            'Find the boys-packed cell using the boys row total minus the boys-school cell.',
          maths: 'boys-packed = 32 - 18 = 14',
        },
        {
          explanation: 'Find the girls row total using the grand total minus the boys row total.',
          maths: 'girls row = 60 - 32 = 28',
        },
        {
          explanation:
            'Find the girls-packed cell using the packed column total minus the boys-packed cell.',
          maths: 'girls-packed = 26 - 14 = 12',
        },
        {
          explanation: 'Find the girls-school cell using the girls row total minus girls-packed.',
          maths: 'girls-school = 28 - 12 = 16',
        },
        {
          explanation:
            'Read P(packed lunch). Use the packed column total over the grand total.',
          maths: 'P(packed) = 26/60 = 13/30',
        },
        {
          explanation:
            'Read P(packed lunch given girl). The condition switches the denominator from 60 to the girls row total of 28.',
          maths: 'P(packed | girl) = 12/28 = 3/7',
        },
      ],
    },
    {
      id: 'ptw-worked-2',
      title: 'A 2 by 2 with one missing margin: read P(left-handed and boy)',
      steps: [
        {
          explanation:
            'Set out the table. A class of 30 pupils is classified by gender and handedness. There are 17 boys. There are 4 left-handers in total. The girls-right-handed cell is 11.',
          maths: 'grand total = 30, boys = 17, left-handed = 4, girls-right = 11',
        },
        {
          explanation: 'Find the girls row total using the grand total minus the boys row total.',
          maths: 'girls = 30 - 17 = 13',
        },
        {
          explanation:
            'Find the girls-left cell using the girls row total minus the girls-right cell.',
          maths: 'girls-left = 13 - 11 = 2',
        },
        {
          explanation:
            'Find the boys-left cell using the left-handed column total minus the girls-left cell.',
          maths: 'boys-left = 4 - 2 = 2',
        },
        {
          explanation: 'Find the boys-right cell using the boys row total minus the boys-left cell.',
        },
        {
          explanation:
            'Read P(left-handed and boy) straight from the table: the joint cell over the grand total.',
          maths: 'P(left-handed and boy) = 2/30 = 1/15',
        },
        {
          explanation:
            'Cross-check by adding all four joint cells: 2 + 15 + 2 + 11 = 30, which matches the grand total.',
          maths: '2 + 15 + 2 + 11 = 30',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'ptw-q1',
      type: 'numeric-entry',
      stem: 'A two-way table classifies 60 Year 7 pupils by gender and lunch choice. The boys-packed-lunch cell shows 14. How many pupils in the form are boys who had a packed lunch?',
      tier: 'core',
      correctAnswer: 14,
      xpValue: 10,
      hint: 'Read the joint cell straight from the table. The joint cell is already the count, no division needed.',
    },
    // Core 2
    {
      id: 'ptw-q2',
      type: 'numeric-entry',
      stem: 'A two-way table has a boys row with 18 having a school dinner and 14 having a packed lunch. What is the boys row total?',
      tier: 'core',
      correctAnswer: 32,
      xpValue: 10,
      hint: 'Add the two joint cells in the boys row: 18 plus 14.',
    },
    // Core 3
    {
      id: 'ptw-q3',
      type: 'multiple-choice',
      stem: 'In a two-way table, the school-dinner column has 18 boys and 16 girls. What is the school-dinner column total?',
      tier: 'core',
      options: ['34', '32', '24', '50'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Add the two joint cells in the school-dinner column: 18 plus 16.',
    },
    // Core 4
    {
      id: 'ptw-q4',
      type: 'numeric-entry',
      stem: 'A two-way table has a boys row total of 32 and a girls row total of 28. What is the grand total of pupils in the table?',
      tier: 'core',
      correctAnswer: 60,
      xpValue: 10,
      hint: 'The grand total is the sum of the row totals (or, equally, the sum of the column totals).',
    },
    // Core 5
    {
      id: 'ptw-q5',
      type: 'multiple-choice',
      stem: 'A two-way table of 60 pupils shows that 18 are boys who had a school dinner. What is P(boy and school dinner)?',
      tier: 'core',
      options: ['18/32', '32/60', '18/60', '18/34'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'P(both attributes) is the joint cell (18) over the grand total (60).',
    },
    // Core 6
    {
      id: 'ptw-q6',
      type: 'numeric-entry',
      stem: 'A two-way table row total for girls is 28. The girls-school-dinner cell is 16. What is the girls-packed-lunch cell?',
      tier: 'core',
      correctAnswer: 12,
      xpValue: 10,
      hint: 'Row total minus the known cell: 28 minus 16.',
    },
    // Core 7
    {
      id: 'ptw-q7',
      type: 'multiple-choice',
      stem: 'A two-way table of 60 pupils has a packed-lunch column total of 26. What is P(packed lunch)?',
      tier: 'core',
      options: ['26/34', '26/60', '14/26', '60/26'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'P(one attribute) is the column total (26) over the grand total (60).',
    },
    // Confident 1
    {
      id: 'ptw-q8',
      type: 'spot-misconception',
      stem: 'A two-way table of 60 pupils has 32 boys and 26 packed lunches. The boys-packed cell shows 14. Hari says P(boy and packed lunch) = (32/60) x (26/60) = 832/3600.',
      tier: 'confident',
      statements: [
        {
          text: 'Hari is right. Multiplying the marginal probabilities always gives the joint probability.',
          isMisconception: true,
        },
        {
          text: 'In fact you read the joint cell directly: P(boy and packed lunch) = 14/60. Multiplying margins only matches when the two events are independent, and the table tells you they are not.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ptw-mis-multiply-margins',
    },
    // Confident 2
    {
      id: 'ptw-q9',
      type: 'multiple-choice',
      stem: 'A two-way table of 60 pupils has 32 boys, of whom 14 had a packed lunch. What is P(packed lunch given the pupil is a boy)?',
      tier: 'confident',
      options: ['14/60', '14/26', '32/60', '14/32'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'ptw-mis-and-vs-given',
      hint: 'The condition "given a boy" switches the denominator from 60 (grand total) to 32 (boys row total). Numerator stays as the joint cell: 14.',
    },
    // Confident 3
    {
      id: 'ptw-q10',
      type: 'multiple-choice',
      stem: 'A two-way table has a packed-lunch column total of 26 and a boys-packed-lunch cell of 14. Olu fills the girls-packed-lunch cell as 14 - 26 = -12. Which value is correct, and why?',
      tier: 'confident',
      options: [
        '12, because girls-packed = column total - boys-packed = 26 - 14.',
        '-12, because Olu has worked it out the right way around.',
        '14, because the boys-packed cell is the same for girls.',
        '40, because girls-packed = column total + boys-packed = 26 + 14.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ptw-mis-negative-cell',
      hint: 'A cell is a count of pupils, so it cannot be negative. Subtract the smaller known cell from the column total: 26 - 14 = 12.',
    },
    // Confident 4
    {
      id: 'ptw-q11',
      type: 'drag-order',
      stem: 'Order these steps for filling a 2 by 2 table when you know the grand total, both row totals and one joint cell.',
      tier: 'confident',
      items: [
        'Fill the second cell in the row that has the known joint cell, using row total minus that cell.',
        'Write the grand total in the bottom-right.',
        'Use the grand total minus the known row total to find the other row total.',
        'Fill the remaining two cells using the column totals minus the cells already filled.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Start from what is fixed (the grand total), find the missing margin first, then fill the row, then balance the columns.',
    },
    // Confident 5
    {
      id: 'ptw-q12',
      type: 'multiple-choice',
      stem: 'A two-way table of 50 pupils has a girls row total of 26. The girls-packed-lunch cell is 14. Maya works out P(packed lunch and girl) and writes 14/26. Which fraction is correct?',
      tier: 'confident',
      options: ['14/50', '14/26', '26/50', '14/24'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ptw-mis-row-vs-grand',
      hint: 'P(packed lunch and girl) is a joint event, so the denominator is the grand total (50), not the girls row total (26).',
    },
    // Confident 6
    {
      id: 'ptw-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A two-way table of 100 pupils has a Year 7 row total of 50 and a "got a certificate" column total of 46. The Year 7 with certificate cell is 28. Find P(no certificate and Year 8) as a fraction.',
      tier: 'confident',
      steps: [
        'Year 8 row total = 100 - 50 = 50.',
        'Year 7 without certificate = 50 - 28 = 22.',
        null,
        'P(no certificate and Year 8) = 32/100 = 8/25.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Year 8 without certificate = (no certificate column total) - (Year 7 without certificate) = (100 - 46) - 22 = 54 - 22 = 32.',
      xpValue: 20,
    },
    // Confident 7
    {
      id: 'ptw-q14',
      type: 'numeric-entry',
      stem: 'A two-way table of 80 pupils classifies them by year group and by sport club. 18 are Year 7 in football. 14 are Year 7 in netball. 22 are Year 8 in football. 26 are Year 8 in netball. What is P(Year 7 or football), as a fraction with denominator 80? Enter the numerator only.',
      tier: 'confident',
      correctAnswer: 54,
      xpValue: 15,
      misconceptionId: 'ptw-mis-or-vs-and',
      hint: 'Add cells covering Year 7 (18 + 14 = 32) and football (18 + 22 = 40), then subtract the overlap (the Year 7 football cell, 18) so it is not double-counted: 32 + 40 - 18 = 54.',
    },
    // Confident 8
    {
      id: 'ptw-q15',
      type: 'spot-misconception',
      stem: 'A two-way table of 60 pupils has 32 boys, of whom 14 had a packed lunch. Beth writes P(packed and boy) = 14/32.',
      tier: 'confident',
      statements: [
        {
          text: 'Beth is right. The numerator is the joint cell and the denominator is the boys row total.',
          isMisconception: true,
        },
        {
          text: 'In fact 14/32 is P(packed lunch given boy), not P(packed and boy). The "and" version uses the grand total: P(packed and boy) = 14/60.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ptw-mis-and-vs-given',
    },
    // Challenge 1 (Bond-style multi-step word problem)
    {
      id: 'ptw-q16',
      type: 'numeric-entry',
      stem: 'A Sevenoaks middle school surveys 120 pupils in Year 7 and Year 8 about their walk to school. There are 65 Year 7 pupils, of whom 28 walk. Across both year groups, 51 pupils walk in total. One pupil from the survey is chosen at random. What is P(Year 8 and does not walk), as a fraction with denominator 120? Enter the numerator only.',
      tier: 'challenge',
      correctAnswer: 32,
      xpValue: 25,
      hint: 'Year 8 row total = 120 - 65 = 55. Year 8 walkers = 51 - 28 = 23. Year 8 non-walkers = 55 - 23 = 32. So the joint cell is 32 and the answer is 32/120.',
    },
    // Challenge 2
    {
      id: 'ptw-q17',
      type: 'multiple-choice',
      stem: 'A two-way table of 200 visitors to a Lake District museum is classified by age group (Adult, Child) and by ticket type (Standard, Family). Margins: 130 Adults, 70 Children, 150 Standard, 50 Family. The Adult-Family cell is 28. What is P(Child and Standard)?',
      tier: 'challenge',
      options: ['28/200', '48/200', '70/200', '50/200'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'ptw-mis-double-count-margins',
      hint: 'Adult-Standard = 130 - 28 = 102. Child-Standard = 150 - 102 = 48. So P(Child and Standard) = 48/200.',
    },
    // Challenge 3
    {
      id: 'ptw-q18',
      type: 'numeric-entry',
      stem: 'A two-way table of 90 Tunbridge Wells pupils is classified by year group (Year 7 or Year 8) and by club (Choir or Drama). 50 are Year 7. 36 are in Choir overall. 22 Year 7 pupils are in Choir. A Year 8 pupil is chosen at random. What is the probability they are in Drama, as a fraction with denominator 40? Enter the numerator only.',
      tier: 'challenge',
      correctAnswer: 26,
      xpValue: 25,
      hint: 'Year 8 row total = 90 - 50 = 40. Year 8 in Choir = 36 - 22 = 14. Year 8 in Drama = 40 - 14 = 26. The condition "given a Year 8 pupil" sets the denominator to 40, so P(Drama | Year 8) = 26/40.',
    },
    // Challenge 4
    {
      id: 'ptw-q19',
      type: 'multiple-choice',
      stem: 'A survey of 100 Year 7 pupils records gender (Boy or Girl) and pet ownership (Yes or No). The margins are 52 Boys, 48 Girls, 60 with a pet, 40 without. The Boy-with-pet cell is 30. Wesley uses the shortcut P(Boy and pet) = (52/100) x (60/100) = 0.312. Which is the correct probability and why?',
      tier: 'challenge',
      options: [
        '0.312, because multiplying the margins always gives the joint probability.',
        '0.312, because the events are independent here.',
        '0.30, because the joint cell of 30 must be read from the table directly; the events are not independent.',
        '0.30, because P(Boy and pet) is always the row total over the grand total.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'ptw-mis-multiply-margins',
      hint: 'Read the joint cell straight off the table: 30/100 = 0.30. The shortcut would only match if the joint cell happened to be 31.2, which is impossible because cells must be whole pupils.',
    },
    // Challenge 5
    {
      id: 'ptw-q20',
      type: 'drag-order',
      stem: 'A 2 by 2 table of 80 pupils gives only the grand total (80), the boys row total (45) and the boys-walks cell (27). Order the steps to find P(walks given girl).',
      tier: 'challenge',
      items: [
        'Apply P(walks given girl) = girls-walks / girls row total = 18/35.',
        'Find the girls-walks cell using the girls row total minus the girls-not-walks cell, but the easier route is the walks column total minus boys-walks once that column total is known.',
        'Find the girls row total: 80 - 45 = 35.',
        'A second piece of information is needed (such as the walks column total). Suppose the walks column total is 45; then girls-walks = 45 - 27 = 18.',
      ],
      correctOrder: [2, 3, 1, 0],
      xpValue: 25,
      hint: 'Get the girls row total first, accept that one extra margin is needed, use it to find girls-walks, then divide by the girls row total.',
    },
    // Challenge 6
    {
      id: 'ptw-q21',
      type: 'multiple-choice',
      stem: 'A two-way table of 100 pupils has row totals of 55 and 40, and column totals of 60 and 35. A pupil chosen at random must come from one row and one column. Why does this table fail a consistency check?',
      tier: 'challenge',
      options: [
        'Row totals add to 95 but the grand total is 100, so a row total has been mislabelled.',
        'Column totals add to 95 but the grand total is 100, so a column total has been mislabelled.',
        'Row totals add to 95 and column totals add to 95, but the grand total has been miscopied.',
        'Row totals (55 + 40 = 95) and column totals (60 + 35 = 95) both add to 95, not 100, so at least one cell is missing or wrong; the grand total cannot be trusted until each cell adds up correctly.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'ptw-mis-drop-totals',
      hint: 'Both routes (rows and columns) should give the same grand total. Here both give 95, not 100, so the table does not reconcile.',
    },
  ],
  misconceptions: [
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a "two-way table" question where pupils used (row total / grand) x (column total / grand) instead of reading the joint cell, treating the events as independent without checking.
    {
      id: 'ptw-mis-multiply-margins',
      description:
        'For P(A and B) from a two-way table, I multiply P(A) by P(B) using the row and column totals instead of reading the joint cell.',
      triggerAnswer: 'multiply-margins',
      correction:
        'Actually a two-way table gives the joint cell directly. P(A and B) is that cell over the grand total. Multiplying margins is only correct when the events are independent.',
      reExplanation:
        'Take 60 pupils with 32 boys and 26 packed lunches. The shortcut gives (32/60) x (26/60) = 832/3600. The actual joint cell might be 14, giving 14/60 = 840/3600. The two only match when the events are independent, which a real two-way table almost never enforces.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 2F (Foundation, Calculator), commentary on a two-way table question where pupils gave the row total as the denominator for a joint probability rather than the grand total.
    {
      id: 'ptw-mis-row-vs-grand',
      description:
        'For P(A and B), I divide the joint cell by the row total or the column total instead of by the grand total.',
      triggerAnswer: 'row-vs-grand',
      correction:
        'Actually P(A and B) is the joint cell over the grand total. Using a row or column total gives the conditional probability instead.',
      reExplanation:
        'For 50 pupils with 26 girls, of whom 14 have a packed lunch: P(girl and packed) = 14/50, not 14/26. The 14/26 fraction is P(packed given girl), which restricts the sample to girls only. The "and" form uses the whole sample.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a two-way table question where pupils confused conditional and joint probabilities, reading "given" as "and".
    {
      id: 'ptw-mis-and-vs-given',
      description:
        'I read "given" the same as "and" in a two-way table question, so I use the wrong denominator.',
      triggerAnswer: 'and-vs-given',
      correction:
        'In fact "given" switches the denominator to a row or column total. "And" keeps the grand total.',
      reExplanation:
        'For 60 pupils with 32 boys and 14 boys having packed lunch: P(packed and boy) = 14/60, but P(packed given boy) = 14/32. The first restricts to the joint cell over the whole sample. The second restricts the sample itself to boys only, then takes the joint cell over that smaller total.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 2F (Foundation, Calculator), commentary on a two-way table reasoning question where pupils added the row totals and the column totals together, double-counting the sample.
    {
      id: 'ptw-mis-double-count-margins',
      description:
        'I add the row totals and the column totals to get the grand total, which counts every pupil twice.',
      triggerAnswer: 'double-count-margins',
      correction:
        'Actually the row totals alone add to the grand total. The column totals also add to the grand total. Adding both routes together doubles every pupil.',
      reExplanation:
        'For a 2 by 2 table of 100 pupils: row totals might be 60 and 40 (sum 100), column totals 70 and 30 (sum 100). Adding all four (60 + 40 + 70 + 30) gives 200, twice the sample. Pick one route only: rows OR columns, not both.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 7 Statistics and Probability, "Two-way tables" page; the "Common mistake" callout that pupils ignore the totals row and column when checking their working.
    {
      id: 'ptw-mis-drop-totals',
      description:
        'I leave the totals row and column off my finished table, so I have no way to check that the cells add up.',
      triggerAnswer: 'drop-totals',
      correction:
        'In fact the totals are the consistency check. A table without them can hide an arithmetic slip in any cell.',
      reExplanation:
        'For a 2 by 2, the four joint cells add to the grand total along two routes: rows then total, or columns then total. If both routes give the same number, the table reconciles. If not, at least one cell is wrong. Always write the totals row and column, even on rough working.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a two-way table fill-in question where pupils reported a negative cell value after subtracting incorrectly.
    {
      id: 'ptw-mis-negative-cell',
      description:
        'When filling a missing cell, I subtract in the wrong order and end up with a negative number, then write that as the answer.',
      triggerAnswer: 'negative-cell',
      correction:
        'Actually a two-way table cell is a count of pupils, so it cannot be negative. A negative result means an earlier cell or total was wrong.',
      reExplanation:
        'For a row total of 24 with one cell of 9, the missing cell is 24 - 9 = 15, not 9 - 24 = -15. Always subtract the smaller known cells from the row or column total. If the answer is negative, retrace: a row total may have been swapped with a cell, or a cell value has been miscopied.',
    },
    // Source: NCETM "Probability at KS3" reference materials, on pupils confusing "or" with "and" in two-way table reasoning and so omitting or double-counting the overlap cell.
    {
      id: 'ptw-mis-or-vs-and',
      description:
        'For P(A or B) from a two-way table, I add the row total and the column total without removing the overlap cell, so the joint cell is counted twice.',
      triggerAnswer: 'or-vs-and',
      correction:
        'Actually P(A or B) is row total plus column total minus the joint A-and-B cell, all over the grand total. Otherwise the overlap is double-counted.',
      reExplanation:
        'For 80 pupils with 32 in Year 7, 40 in football and 18 Year 7 footballers: P(Year 7 or football) = (32 + 40 - 18) / 80 = 54/80. Without subtracting the 18, the count would be 72/80, which over-counts the 18 pupils in both groups.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const probabilityTwoWayTablesZoneNodes = [probabilityTwoWayTables]
