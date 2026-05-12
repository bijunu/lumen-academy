import type { SkillNode } from '@/types/content'

export const sequencesMissingTerms: SkillNode = {
  id: 'maths-sequences-missing-terms',
  title: 'Finding Missing Terms in a Sequence',
  description:
    'Infer a missing term in an arithmetic sequence by finding the common gap from the terms you can see. Handle a single missing term in the middle, two consecutive missing terms with a constant difference, a missing first or last term, and sequences with a known position-to-term rule. Always check the gap holds across more than one pair of terms.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-sequences',
  zoneName: 'Sequences',
  tier: 'confident',
  prerequisites: ['maths-sequences-rules'],
  curriculum: {
    ks3Objective:
      'Generate terms of a sequence from either a term-to-term or a position-to-term rule and use this to identify missing terms within the sequence.',
    awardingBodies: {
      aqa: 'A23 Find missing terms of arithmetic and other sequences (GCSE Mathematics 8300)',
      edexcel: 'A23 Find missing terms within a sequence given partial information (GCSE Mathematics 1MA1)',
      ocr: '8.02a Identify missing terms in a sequence (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'smt-scene-marked-gap',
      title: 'Mark the Missing Term',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what role that box plays in finding the missing term.',
      data: {
        viewBox: '0 0 600 200',
        svg: `
          <g font-family="sans-serif" font-size="22" text-anchor="middle">
            <rect x="30" y="70" width="100" height="80" rx="8" fill="#e6f0ff" stroke="#1f4ed8" stroke-width="2"/>
            <text x="80" y="120">3</text>
            <text x="80" y="50" font-size="14" fill="#1f4ed8">term 1</text>

            <rect x="160" y="70" width="100" height="80" rx="8" fill="#fff5cc" stroke="#b45309" stroke-width="2" stroke-dasharray="6 4"/>
            <text x="210" y="120">?</text>
            <text x="210" y="50" font-size="14" fill="#b45309">term 2 (missing)</text>

            <rect x="290" y="70" width="100" height="80" rx="8" fill="#e6f0ff" stroke="#1f4ed8" stroke-width="2"/>
            <text x="340" y="120">11</text>
            <text x="340" y="50" font-size="14" fill="#1f4ed8">term 3</text>

            <rect x="420" y="70" width="100" height="80" rx="8" fill="#e6f0ff" stroke="#1f4ed8" stroke-width="2"/>
            <text x="470" y="120">15</text>
            <text x="470" y="50" font-size="14" fill="#1f4ed8">term 4</text>
          </g>
        `,
        hotspots: [
          {
            id: 'smt-hs-known-pair',
            x: 67,
            y: 60,
            label: 'A pair of known terms',
            description: 'Term 3 (11) and term 4 (15) sit next to each other. The gap between them is 15 - 11 = 4.',
          },
          {
            id: 'smt-hs-missing-box',
            x: 35,
            y: 60,
            label: 'The missing term',
            description: 'Term 2 sits between 3 and 11. With a gap of 4, term 2 must be 3 + 4 = 7.',
          },
          {
            id: 'smt-hs-check-pair',
            x: 78,
            y: 60,
            label: 'A second check',
            description: 'Verify by checking another gap. 7 + 4 = 11, so the inferred term 2 of 7 fits both sides.',
          },
        ],
      },
    },
    {
      id: 'smt-scene-find-the-gap',
      title: 'Find the Gap, Then Fill the Box',
      type: 'diagram',
      instructions:
        'Read each row across to see how a known pair of terms fixes the common gap, and how that gap fills the missing box. Row 1 shows 3, _, 11, 15. The known gap from 11 to 15 is 4, so term 2 is 3 + 4 = 7. Row 2 shows 5, _, _, 14. The total jump from 5 to 14 is 9 across three gaps, so each gap is 3, giving 8 and 11. Row 3 shows _, 12, 19, 26. The gap from 12 to 19 is 7, so term 1 is 12 - 7 = 5.',
      data: {
        rows: [
          {
            sequence: '3, _, 11, 15',
            knownGap: '15 - 11 = 4',
            gapsAcrossMissing: 1,
            workOut: 'term 2 = 3 + 4 = 7',
            filled: '3, 7, 11, 15',
            check: '7 + 4 = 11',
          },
          {
            sequence: '5, _, _, 14',
            knownGap: '(14 - 5) / 3 = 3',
            gapsAcrossMissing: 3,
            workOut: 'term 2 = 5 + 3 = 8, term 3 = 8 + 3 = 11',
            filled: '5, 8, 11, 14',
            check: '11 + 3 = 14',
          },
          {
            sequence: '_, 12, 19, 26',
            knownGap: '19 - 12 = 7',
            gapsAcrossMissing: 1,
            workOut: 'term 1 = 12 - 7 = 5',
            filled: '5, 12, 19, 26',
            check: '5 + 7 = 12',
          },
        ],
        callout:
          'A single known pair fixes the gap only if you assume the sequence is arithmetic. Always verify the same gap appears in at least one other pair before trusting it.',
      },
    },
    {
      id: 'smt-scene-inference-moves',
      title: 'The Four Common Inference Moves',
      type: 'diagram',
      instructions:
        'Read each move across to see the most common shape of a missing-term problem. Move 1 fills a single hole in the middle using a neighbouring gap. Move 2 splits a long jump across several missing terms by dividing by the count of gaps. Move 3 reverses the gap to find a missing first term. Move 4 uses a given position-to-term rule and substitutes the position number into it.',
      data: {
        moves: [
          {
            label: 'Move 1: one missing term in the middle',
            example: '3, _, 11, 15',
            method: 'Take a known gap from a neighbouring pair, then add or subtract from a known term.',
            answer: 'term 2 = 7',
          },
          {
            label: 'Move 2: two or more consecutive missing terms',
            example: '5, _, _, 14',
            method: 'Total jump = 14 - 5 = 9. Number of gaps = 3. Each gap = 9 / 3 = 3.',
            answer: 'terms 2 and 3 are 8 and 11',
          },
          {
            label: 'Move 3: missing first or last term',
            example: '_, 12, 19, 26',
            method: 'Use the gap from a known pair, then step backwards (or forwards) from a known term.',
            answer: 'term 1 = 5',
          },
          {
            label: 'Move 4: position-to-term rule is given',
            example: 'rule 4n + 1, missing term at n = 6',
            method: 'Substitute the position into the rule. 4 x 6 + 1 = 25.',
            answer: 'term 6 = 25',
          },
        ],
        warning:
          'Before using any of these moves, check that the sequence really is arithmetic. If two known gaps disagree, the sequence is not arithmetic, and the "constant difference" shortcut does not apply.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'smt-worked-1',
      title: 'Find the missing term in 3, _, 11, 15',
      steps: [
        {
          explanation:
            'Pick a pair of known consecutive terms and find the gap.',
          maths: '15 - 11 = 4',
        },
        {
          explanation:
            'Check another known pair to make sure the gap is constant. The pair 11 to 15 gave 4. We only have one known consecutive pair here, so we assume the sequence is arithmetic and the gap is 4 everywhere.',
          maths: 'common difference = 4',
        },
        {
          explanation:
            'Use the gap to step forward from term 1.',
          maths: 'term 2 = term 1 + 4 = 3 + 4 = 7',
        },
        {
          explanation:
            'Verify by stepping forward again to a known term.',
          maths: 'term 3 = term 2 + 4 = 7 + 4 = 11 (matches)',
        },
        {
          explanation:
            'Write out the full sequence with the missing term filled in.',
          maths: '3, 7, 11, 15',
        },
      ],
    },
    {
      id: 'smt-worked-2',
      title: 'Find both missing terms in 5, _, _, 14 with a constant difference',
      steps: [
        {
          explanation:
            'Count the number of gaps between the known terms 5 and 14.',
          maths: 'gaps from term 1 to term 4: 3 gaps',
        },
        {
          explanation:
            'Find the total jump from term 1 to term 4.',
          maths: '14 - 5 = 9',
        },
        {
          explanation:
            'Divide the total jump by the number of gaps to find the common difference.',
        },
        {
          explanation:
            'Step forward from term 1 to fill term 2.',
          maths: 'term 2 = 5 + 3 = 8',
        },
        {
          explanation:
            'Step forward again to fill term 3.',
          maths: 'term 3 = 8 + 3 = 11',
        },
        {
          explanation:
            'Verify that term 3 plus one more gap lands on the known term 4.',
          maths: '11 + 3 = 14 (matches)',
        },
      ],
    },
  ],
  questions: [
    // Core 1
    {
      id: 'smt-q1',
      type: 'numeric-entry',
      stem: 'Find the missing term: 2, 5, _, 11, 14.',
      tier: 'core',
      correctAnswer: 8,
      xpValue: 10,
      hint: 'The gap from 2 to 5 is 3. Keep adding 3.',
    },
    // Core 2
    {
      id: 'smt-q2',
      type: 'multiple-choice',
      stem: 'Find the missing term: 6, 10, 14, _, 22.',
      tier: 'core',
      options: ['16', '18', '17', '20'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The gap is 4 each time. Add 4 to 14.',
    },
    // Core 3
    {
      id: 'smt-q3',
      type: 'multiple-choice',
      stem: 'A school timetable shows form-time on day 2, day 5, day 8, _, day 14. Which day is missing?',
      tier: 'core',
      options: ['Day 9', 'Day 10', 'Day 11', 'Day 12'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The pattern jumps by 3 days. From day 8, add 3.',
    },
    // Core 4
    {
      id: 'smt-q4',
      type: 'numeric-entry',
      stem: 'What is the missing first term? _, 9, 14, 19, 24.',
      tier: 'core',
      correctAnswer: 4,
      xpValue: 10,
      hint: 'Find the gap between two known terms, then step backwards from 9.',
    },
    // Core 5
    {
      id: 'smt-q5',
      type: 'multiple-choice',
      stem: 'Yusuf climbs a staircase by counting 4, 7, 10, 13 stairs on each flight. The pattern keeps the same gap. How many stairs are on the missing flight 6 in the run 4, 7, 10, 13, 16, _?',
      tier: 'core',
      options: ['19', '18', '17', '20'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The gap from 13 to 16 is 3. Add 3 to 16.',
    },
    // Core 6
    {
      id: 'smt-q6',
      type: 'multiple-choice',
      stem: 'Find the missing term: 11, 17, 23, _, 35.',
      tier: 'core',
      options: ['28', '30', '29', '31'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The gap is 6. Add 6 to 23.',
    },
    // Core 7
    {
      id: 'smt-q7',
      type: 'spot-misconception',
      stem: 'Asha sees 1, _, 4, 9 and writes "The missing term is 2 or 3, because the gap is small at the start." Which reply is the sound one?',
      tier: 'core',
      statements: [
        {
          text: 'Asha is right to guess. With sequences you can pick any term that feels close to its neighbours.',
          isMisconception: true,
        },
        {
          text: 'Actually check the gap from a known pair first. From 4 to 9 the gap is 5, but from 1 to 4 the gap would have to be 5 too, giving 1, 6, 4, 9, which is not in order. The gaps disagree, so the sequence is not arithmetic, and the constant-difference shortcut does not apply.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'smt-mis-rule-from-one-pair',
    },
    // Confident 1
    {
      id: 'smt-q8',
      type: 'numeric-entry',
      stem: 'Find the first missing term: 4, _, _, 19. The sequence has a constant difference.',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'Total jump 19 - 4 = 15. There are 3 gaps. Each gap = 15 / 3 = 5.',
    },
    // Confident 2
    {
      id: 'smt-q9',
      type: 'multiple-choice',
      stem: 'Find the second missing term: 4, _, _, 19. The sequence has a constant difference.',
      tier: 'confident',
      options: ['13', '15', '12', '14'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Each gap is 5. Term 3 sits one gap before 19.',
    },
    // Confident 3
    {
      id: 'smt-q10',
      type: 'multiple-choice',
      stem: 'A sequence is 7, _, _, _, 27 with a constant difference. What is the common difference?',
      tier: 'confident',
      options: ['7', '6', '5', '4'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'smt-mis-miscount-gaps',
      hint: 'Total jump 27 - 7 = 20. Count the gaps carefully: from term 1 to term 5 there are 4 gaps. 20 / 4 = 5.',
    },
    // Confident 4
    {
      id: 'smt-q11',
      type: 'multiple-choice',
      stem: 'Aisha sees 3, _, 11, 15 and works out the missing term as 7. Why does her step "use the gap 15 - 11 = 4" work for this sequence?',
      tier: 'confident',
      options: [
        'Because every sequence has the same gap, no matter the rule.',
        'Because the sequence has a constant difference, so any neighbouring gap equals the common difference.',
        'Because 15 and 11 are the two biggest terms, and the biggest gap always wins.',
        'Because the missing term must always be the average of the terms on either side, and 4 is the average of 3 and 11.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'smt-mis-assume-arithmetic',
    },
    // Confident 5
    {
      id: 'smt-q12',
      type: 'multiple-choice',
      stem: 'Find the missing term in the geometric sequence 2, _, 18, 54. (Each term is multiplied by the same number.)',
      tier: 'confident',
      options: ['8', '10', '6', '9'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'smt-mis-average-when-geometric',
      hint: 'Each term is multiplied by the same number r. From 18 to 54 the multiplier is 3, so r = 3. Term 2 = 2 x 3 = 6.',
    },
    // Confident 6
    {
      id: 'smt-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Priya is finding the two missing terms in 7, _, _, 22.',
      tier: 'confident',
      steps: [
        'Count the gaps from term 1 to term 4: 3 gaps.',
        'Find the total jump from 7 to 22: 22 - 7 = 15.',
        null,
        'Step forward from 7 to fill the missing terms. Term 2 = 7 + 5 = 12, term 3 = 12 + 5 = 17.',
        'Verify: 17 + 5 = 22, which matches term 4.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Divide the total jump by the number of gaps to find the common difference: 15 / 3 = 5.',
      xpValue: 20,
      misconceptionId: 'smt-mis-skip-divide',
    },
    // Confident 7
    {
      id: 'smt-q14',
      type: 'drag-order',
      stem: 'Drag these steps into the right order for finding two consecutive missing terms in 5, _, _, 14.',
      tier: 'confident',
      items: [
        'Step forward from term 1 to fill term 2, then again to fill term 3.',
        'Find the total jump from the first known term to the next known term.',
        'Verify that the last filled term plus the common difference lands on the known final term.',
        'Divide the total jump by the number of gaps to find the common difference.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      misconceptionId: 'smt-mis-skip-verification',
    },
    // Confident 8
    {
      id: 'smt-q15',
      type: 'numeric-entry',
      stem: 'A sequence has the position-to-term rule 4n + 1. The terms 5, _, 13, _, 21 are listed in order. What is the missing term at position 2?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      misconceptionId: 'smt-mis-position-zero',
      hint: 'Substitute n = 2 into 4n + 1. The first listed term sits at n = 1, not n = 0.',
    },
    // Challenge 1
    {
      id: 'smt-q16',
      type: 'multiple-choice',
      stem: 'A Sevenoaks scout group uses a calendar showing meetings on day 4, day 11, day 18, _, day 32. The meetings are spaced evenly. Which day fills the gap?',
      tier: 'challenge',
      options: ['Day 23', 'Day 24', 'Day 26', 'Day 25'],
      correctIndex: 3,
      xpValue: 25,
      hint: 'Find the gap from 4 to 11: 7. Verify: 11 + 7 = 18. So the missing day is 18 + 7 = 25.',
    },
    // Challenge 2
    {
      id: 'smt-q17',
      type: 'numeric-entry',
      stem: 'An exam paper lists Question 2, Question _, Question 8, Question 11, Question _ as a sequence of "stretch" questions evenly spaced through the paper. The paper has 14 questions in total and the last stretch question is the last that fits the pattern. What is the question number of the last stretch question?',
      tier: 'challenge',
      correctAnswer: 14,
      xpValue: 25,
      hint: 'Gap = 11 - 8 = 3. Verify: 8 - 3 = 5 fills the first gap. Step forward from 11 by 3 to find 14. Since 14 + 3 = 17 is outside the paper, 14 is the last stretch question.',
    },
    // Challenge 3
    {
      id: 'smt-q18',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells theatre numbers its rows so row 3 has 11 seats, row 7 has 23 seats, and the seat count grows by the same amount each row. How many seats are in row 5?',
      tier: 'challenge',
      correctAnswer: 17,
      xpValue: 25,
      hint: 'Gap from row 3 to row 7 is 4 rows. Total jump 23 - 11 = 12. Each row adds 12 / 4 = 3 seats. Row 5 is 2 rows on from row 3: 11 + 2 x 3 = 17.',
    },
    // Challenge 4
    {
      id: 'smt-q19',
      type: 'spot-misconception',
      stem: 'A pupil sees the sequence 2, 6, _, 54 and writes "The missing term is 30, because (6 + 54) / 2 = 30." Which response is right?',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. The middle term is always the average of its neighbours.',
          isMisconception: true,
        },
        {
          text: 'Actually the sequence is not arithmetic. From 2 to 6 the gap is 4, but from 30 to 54 the gap would be 24. The terms grow by multiplying by 3 each time, so the missing term is 6 x 3 = 18 and the next would be 18 x 3 = 54, which matches.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'smt-mis-average-without-checking',
    },
    // Challenge 5
    {
      id: 'smt-q20',
      type: 'numeric-entry',
      stem: 'A sequence is 3, _, _, _, 23 with a constant difference. What is the middle missing term?',
      tier: 'challenge',
      correctAnswer: 13,
      xpValue: 25,
      hint: 'Total jump 23 - 3 = 20. Number of gaps = 4. Each gap = 5. The three missing terms are 8, 13, 18, so the middle one is 13.',
    },
    // Challenge 6 (Bond-style)
    {
      id: 'smt-q21',
      type: 'multiple-choice',
      stem: 'An exam paper sets "stretch" questions at evenly spaced positions through the paper. The list of stretch question numbers is 4, _, _, 19, 24. A pupil claims the two missing question numbers are 9 and 14, then checks the gap on a second pair to confirm. Which pair of question numbers fits, and which check rules out the rival pair 8 and 14?',
      tier: 'challenge',
      options: [
        '9 and 14, because 19 - 14 = 5 holds and 9 + 5 = 14 holds, while 8 + 6 = 14 disagrees with the gap 24 - 19 = 5.',
        '8 and 14, because 14 - 8 = 6 matches the gap 24 - 19 = 5.',
        '10 and 15, because the missing terms must include a multiple of 5.',
        '9 and 14, because 9 is the average of 4 and 14.',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Find the gap from the known pair 19 to 24: that is 5. Step forward from 4: 4 + 5 = 9, 9 + 5 = 14, 14 + 5 = 19 verifies. The rival pair 8 and 14 has gaps 4 then 6, which is not constant.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a missing-term question where pupils averaged the surrounding terms regardless of whether the sequence was arithmetic.
    {
      id: 'smt-mis-average-without-checking',
      description:
        'I just take the average of the two neighbours to find a missing term, without checking whether the sequence has a constant gap.',
      triggerAnswer: 'average-without-checking',
      correction:
        'Actually averaging only works when the sequence is arithmetic. Find the gap from a known pair first, then verify it on another pair before using it.',
      reExplanation:
        'For 2, _, 18, 54 a pupil might write the missing term as (2 + 18) / 2 = 10. Check the gap from a known pair first: 54 - 18 = 36. With gap 36 the missing term would be 18 - 36 = -18, not 10. The sequence is not arithmetic, so averaging gives the wrong answer. The fix is to find and verify the gap before using any shortcut.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a missing-term question where pupils assumed a constant difference for a geometric sequence and produced impossible answers.
    {
      id: 'smt-mis-average-when-geometric',
      description:
        'I treat every sequence as arithmetic, even when each term is multiplied by the same number rather than added to.',
      triggerAnswer: 'average-when-geometric',
      correction:
        'In fact arithmetic sequences add the same amount. Geometric sequences multiply by the same amount. Check whether the gaps between known pairs are the same, or whether the ratios are.',
      reExplanation:
        'For 2, _, 18, 54 the ratio from 18 to 54 is 3. So the missing term is 2 x 3 = 6, and 6 x 3 = 18 verifies it. Averaging 2 and 18 to get 10 fails: 10 x ? = 18 has no whole-number ratio, and the next jump from 18 to 54 would need a different rule.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 01 (Foundation, Non-calculator), commentary on a missing-term question where pupils used one known pair and stopped, missing that a second pair contradicted the inferred gap.
    {
      id: 'smt-mis-assume-arithmetic',
      description:
        'I find the gap from one pair of known terms and trust it without ever checking against a second pair.',
      triggerAnswer: 'assume-arithmetic',
      correction:
        'Actually a single gap fixes the answer only if the sequence really is arithmetic. Check the same gap appears in at least one other pair before relying on it.',
      reExplanation:
        'For 1, _, 4, 9 a pupil might use the gap 9 - 4 = 5 and write the missing term as 1 + 5 = 6. But then 6 to 4 would be a gap of -2, not 5, so the gaps disagree. The sequence 1, 4, 9 is the square numbers, not arithmetic. The fix is to check the gap on a second pair before using it.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Algebra, "Sequences" page, "Common mistake" box on miscounting gaps between known terms.
    {
      id: 'smt-mis-miscount-gaps',
      description:
        'I count the number of terms instead of the number of gaps when dividing the total jump.',
      triggerAnswer: 'miscount-gaps',
      correction:
        'In fact the total jump is divided by the number of gaps, not the number of terms. Five terms have four gaps between them.',
      reExplanation:
        'For 7, _, _, _, 27 the total jump is 27 - 7 = 20. There are five terms but four gaps between them. Each gap = 20 / 4 = 5, not 20 / 5 = 4. The cure is to draw the gaps as arrows between boxes and count the arrows, not the boxes.',
    },
    // Source: NCETM "Misconceptions with Year 7 Algebra" reference document, on pupils skipping the divide step when two or more consecutive terms are missing.
    {
      id: 'smt-mis-skip-divide',
      description:
        'I take the gap from a known pair without first dividing the total jump by the number of gaps when several terms are missing in a row.',
      triggerAnswer: 'skip-divide',
      correction:
        'Actually if no two known terms are next to each other, the gap is the total jump divided by the number of gaps between them, not the total jump itself.',
      reExplanation:
        'For 5, _, _, 14 the total jump from 5 to 14 is 9, across three gaps. Each gap is 9 / 3 = 3, not 9. So term 2 = 5 + 3 = 8 and term 3 = 8 + 3 = 11. Verify: 11 + 3 = 14, which matches. Skipping the divide gives 5 + 9 = 14 in one step and loses the two missing terms entirely.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Generalised Arithmetic" by Booth, on pupils misreading position numbers and treating the first listed term as term 0 rather than term 1.
    {
      id: 'smt-mis-position-zero',
      description:
        'I treat the first term in a list as term 0 (position 0), so I substitute the wrong position number into a position-to-term rule.',
      triggerAnswer: 'position-zero',
      correction:
        'In fact the first listed term is term 1 (position 1), not term 0. The position number starts at 1.',
      reExplanation:
        'For the rule 4n + 1 with terms 5, _, 13, _, 21, the first listed term is at n = 1: 4 x 1 + 1 = 5. The missing term sits at n = 2: 4 x 2 + 1 = 9. Treating the first listed term as n = 0 would give 4 x 0 + 1 = 1, which does not match the listed 5. Always anchor the first listed term at n = 1.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a missing-term question where pupils stated an answer without verifying it against a further known term.
    {
      id: 'smt-mis-skip-verification',
      description:
        'I write down a missing term and stop, without checking that the filled-in sequence really matches the remaining known terms.',
      triggerAnswer: 'skip-verification',
      correction:
        'Actually a single matching step is not enough. After filling the gap, verify that the next forward step lands on the next known term.',
      reExplanation:
        'For 5, _, _, 14 a pupil might fill 5, 7, 9, 14 and stop. Check: 9 + ? = 14 needs a gap of 5, but the earlier gaps were 2. So the answer fails verification. The correct fill is 5, 8, 11, 14: 11 + 3 = 14 matches. Verifying at one further term catches the slip.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator), commentary on a missing-term question where pupils read "add 4 each time" off a single neighbouring pair without checking a second pair.
    {
      id: 'smt-mis-rule-from-one-pair',
      description:
        'I read the rule as "add 4 each time" from a single neighbouring pair, without confirming the same gap appears in at least one other pair.',
      triggerAnswer: 'rule-from-one-pair',
      correction:
        'In fact one pair fixes a hypothesis. You only know the rule by checking it on a second pair.',
      reExplanation:
        'For 2, 6, _, 18, 22 a pupil reads 6 - 2 = 4 and writes the missing term as 10. The pair 18 to 22 also has gap 4, so the rule "add 4" seems to hold. But 10 + 4 = 14, not 18, so the inferred gap fails between term 3 and term 4. The sequence is not arithmetic with gap 4. Always test the gap on every known pair.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const sequencesMissingTermsZoneNodes = [sequencesMissingTerms]
