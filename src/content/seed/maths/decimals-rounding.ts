import type { SkillNode } from '@/types/content'

export const decimalsRounding: SkillNode = {
  id: 'maths-decimals-rounding',
  title: 'Rounding Decimals',
  description:
    'Round decimals to one, two, or three decimal places using the rule that 5 rounds up; round to the nearest 0.1 or 0.01; and meet significant figures at Year 7 depth as a way of keeping the most informative digits when reporting a measurement.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'confident',
  prerequisites: ['maths-decimals-place-value'],
  curriculum: {
    ks3Objective:
      'Round numbers and measures to an appropriate degree of accuracy (e.g. to a number of decimal places or significant figures).',
    awardingBodies: {
      aqa: 'N15 Round numbers and measures to an appropriate degree of accuracy (decimal places and significant figures)',
      edexcel: 'N15 Round numbers and measures to an appropriate degree of accuracy (decimal places and significant figures)',
      ocr: '1.04a Rounding to a given number of decimal places or significant figures',
    },
  },
  scenes: [
    {
      id: 'dr-scene-decider-digit',
      title: 'Find the Decider Digit',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the decider digit for a different rounding job on the number 7.4862.',
      data: {
        viewBox: '0 0 600 240',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240"><rect x="20" y="40" width="560" height="80" rx="10" fill="#0F172A" stroke="#475569" stroke-width="2"/><text x="300" y="95" font-family="ui-monospace, SF Mono, Menlo, monospace" font-size="48" fill="#F8FAFC" text-anchor="middle" letter-spacing="6">7.4862</text><text x="300" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Click a marker to see which digit decides the round.</text></svg>`,
        hotspots: [
          {
            id: 'dr-spot-1dp',
            x: 47,
            y: 38,
            label: 'Round to 1 dp: keep 7.4, decider is 8',
            description:
              'The hundredths digit (8) is the decider. 8 is 5 or more, so round 7.4 up to 7.5.',
          },
          {
            id: 'dr-spot-2dp',
            x: 53,
            y: 38,
            label: 'Round to 2 dp: keep 7.48, decider is 6',
            description:
              'The thousandths digit (6) is the decider. 6 is 5 or more, so round 7.48 up to 7.49.',
          },
          {
            id: 'dr-spot-3dp',
            x: 59,
            y: 38,
            label: 'Round to 3 dp: keep 7.486, decider is 2',
            description:
              'The ten-thousandths digit (2) is the decider. 2 is less than 5, so 7.486 stays as 7.486.',
          },
        ],
      },
    },
    {
      id: 'dr-scene-number-line',
      title: 'Decimals on the Halfway Line',
      type: 'number-line',
      instructions:
        'Look at where each decimal sits between two neighbouring tenths. 0.43 lies before the halfway mark of 0.45, so it rounds down to 0.4. 0.47 lies past 0.45, so it rounds up to 0.5. The exact midpoint 0.45 sits on the halfway line, and the convention is to round up to 0.5. The picture is the rule: the closer endpoint wins, with a tie going up.',
      data: {
        levels: [
          {
            range: [0.4, 0.5],
            step: 0.01,
            label: 'tenths span shown in hundredths',
            sampleMarks: [0.43, 0.45, 0.47],
          },
        ],
        notes:
          'A tie at the exact halfway point rounds up by convention. So 0.45 to one decimal place is 0.5, not 0.4.',
      },
    },
    {
      id: 'dr-scene-sig-figs',
      title: 'Significant Figures: Where the Information Lives',
      type: 'diagram',
      instructions:
        'Read each row to see the significant figures of a number. A leading zero in 0.0463 does not count, so the first significant figure is the 4. The second significant figure is the 6, the third is the 3. For 27.51 the first significant figure is the 2, the second is the 7, the third is the 5. Significant figures count from the first non-zero digit on the left.',
      data: {
        examples: [
          {
            number: '0.0463',
            firstSig: '4',
            secondSig: '6',
            thirdSig: '3',
            note: 'Leading zeros after the point are placeholders, not significant.',
          },
          {
            number: '27.51',
            firstSig: '2',
            secondSig: '7',
            thirdSig: '5',
            note: 'Every digit in 27.51 is significant.',
          },
          {
            number: '0.302',
            firstSig: '3',
            secondSig: '0',
            thirdSig: '2',
            note: 'The 0 between non-zero digits IS significant; only leading zeros are placeholders.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'dr-worked-1',
      title: 'Round 7.4862 to 2 decimal places',
      steps: [
        {
          explanation:
            'We want 2 digits after the decimal point. Underline the part you keep: 7.48. The digit straight after it is the decider.',
          maths: '7.48 | 6 2',
        },
        {
          explanation:
            'The decider digit is 6. Compare it with 5. Six is greater than 5, so round the kept part up by 1 in the last column.',
          maths: '6 >= 5, so round up',
        },
        {
          explanation:
            'Add 1 to the hundredths digit of 7.48. The 8 becomes 9, and the rest stays the same.',
          maths: '7.48 + 0.01 = 7.49',
        },
        {
          explanation:
            'So 7.4862 rounded to 2 decimal places is 7.49. The digits after the decider are dropped, not added on.',
          maths: '7.4862 = 7.49 (2 dp)',
        },
      ],
    },
    {
      id: 'dr-worked-2',
      title: 'Round 0.0463 to 2 significant figures',
      steps: [
        {
          explanation:
            'Find the first significant figure. The leading zeros after the decimal point are placeholders, so the first significant figure is the 4.',
          maths: 'first sig fig = 4',
        },
        {
          explanation:
            'Count two significant figures from the left, keeping the place-holder zeros in front. The kept part is 0.046.',
        },
        {
          explanation:
            'Look at the digit straight after the kept part. It is 3, which is the decider.',
          maths: 'decider = 3',
        },
        {
          explanation:
            'Compare the decider with 5. Three is less than 5, so round down (keep as is).',
          maths: '3 < 5, so round down',
        },
        {
          explanation:
            'So 0.0463 rounded to 2 significant figures is 0.046. Keep the placeholder zeros so the kept digits sit in the right columns.',
          maths: '0.0463 = 0.046 (2 sf)',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'dr-q1',
      type: 'multiple-choice',
      stem: 'In the number 5.382, which digit decides whether you round up or down to 1 decimal place?',
      tier: 'core',
      options: ['5', '3', '8', '2'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Underline the kept part 5.3. The decider is the next digit to the right.',
      misconceptionId: 'dr-mis-wrong-decider',
    },
    {
      id: 'dr-q2',
      type: 'multiple-choice',
      stem: 'Round 4.27 to 1 decimal place.',
      tier: 'core',
      options: ['4.2', '4.3', '4.27', '4.30'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The decider digit is 7. Compare it with 5.',
    },
    {
      id: 'dr-q3',
      type: 'numeric-entry',
      stem: 'Round 9.834 to 2 decimal places.',
      tier: 'core',
      correctAnswer: 9.83,
      tolerance: 0.0005,
      xpValue: 10,
      hint: 'The decider digit (the thousandths digit) is 4. Compare it with 5.',
    },
    {
      id: 'dr-q4',
      type: 'multiple-choice',
      stem: 'Round 6.45 to 1 decimal place.',
      tier: 'core',
      options: ['6.45', '6.4', '7.0', '6.5'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dr-mis-five-stays',
    },
    {
      id: 'dr-q5',
      type: 'numeric-entry',
      stem: 'Round 0.0741 to 3 decimal places.',
      tier: 'core',
      correctAnswer: 0.074,
      tolerance: 0.00005,
      xpValue: 10,
      hint: 'Keep three digits after the decimal point. The decider is the 1 in the ten-thousandths column.',
    },
    {
      id: 'dr-q6',
      type: 'spot-misconception',
      stem: 'Tom rounds 3.146 to 2 decimal places. He says: "The decider is 4, then I look at 6 too, and 4 plus 6 is 10, so I round up to 3.15." Is his method sound?',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. You add the trailing digits together to find the decider.',
          isMisconception: true,
        },
        {
          text: 'Actually only the next digit after the kept part decides the round. The decider is 4, and 4 is less than 5, so 3.146 rounds down to 3.14.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dr-mis-cumulative-round',
    },
    {
      id: 'dr-q7',
      type: 'multiple-choice',
      stem: 'Round 12.085 to 2 decimal places.',
      tier: 'core',
      options: ['12.08', '12.09', '12.10', '12.1'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The decider digit is 5, which rounds up. The hundredths digit is 8, so 8 plus 1 is 9.',
      misconceptionId: 'dr-mis-five-stays',
    },
    {
      id: 'dr-q8',
      type: 'numeric-entry',
      stem: 'A pencil measures 14.2761 cm on a precise ruler. Round its length to 1 decimal place.',
      tier: 'confident',
      correctAnswer: 14.3,
      tolerance: 0.005,
      unit: 'cm',
      xpValue: 15,
      hint: 'Keep one digit after the point: 14.2 is the kept part. The decider is 7.',
    },
    {
      id: 'dr-q9',
      type: 'multiple-choice',
      stem: 'A till receipt prints the total as 6.295 pounds. Round it to the nearest penny (2 decimal places).',
      tier: 'confident',
      options: ['£6.20', '£6.295', '£6.29', '£6.30'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'dr-mis-five-stays',
    },
    {
      id: 'dr-q10',
      type: 'numeric-entry',
      stem: 'Round 0.49962 to 3 decimal places.',
      tier: 'confident',
      correctAnswer: 0.5,
      tolerance: 0.0005,
      xpValue: 15,
      hint: 'The decider is 6, so round 0.499 up. Adding 1 in the thousandths column carries through 9, 9, into 0.500. Trailing zeros may be dropped, so the value is 0.5.',
      misconceptionId: 'dr-mis-no-carry',
    },
    {
      id: 'dr-q11',
      type: 'multiple-choice',
      stem: 'What is the first significant figure of 0.00408?',
      tier: 'confident',
      options: ['0', '8', '0 then 4 (a tie)', '4'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'dr-mis-leading-zero-sig',
    },
    {
      id: 'dr-q12',
      type: 'numeric-entry',
      stem: 'Round 0.0584 to 2 significant figures.',
      tier: 'confident',
      correctAnswer: 0.058,
      tolerance: 0.00005,
      xpValue: 15,
      hint: 'The first significant figure is 5; the second is 8. The decider is the 4 to the right of the kept part.',
    },
    {
      id: 'dr-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Round 3.4972 to 2 decimal places.',
      tier: 'confident',
      steps: [
        'Underline the part you keep to two decimal places: 3.49.',
        'Find the decider, the next digit to the right. The decider is 7.',
        null,
        'Add 1 to the hundredths digit of 3.49. The 9 becomes 10, so carry: 3.49 + 0.01 = 3.50.',
        'So 3.4972 rounded to 2 decimal places is 3.50.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Compare the decider with 5. Seven is greater than 5, so round up.',
      xpValue: 20,
    },
    {
      id: 'dr-q14',
      type: 'drag-order',
      stem: 'Drag these decimals into order from smallest to largest, then check the order is preserved after rounding each one to 1 decimal place.',
      tier: 'confident',
      items: ['0.36', '0.349', '0.351', '0.3'],
      correctOrder: [3, 1, 0, 2],
      xpValue: 20,
      misconceptionId: 'dr-mis-truncate',
    },
    {
      id: 'dr-q15',
      type: 'spot-misconception',
      stem: 'Maya rounds 8.972 to 1 decimal place by chopping off everything after the tenths column. She writes 8.9. Is her method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Maya is correct. Chopping off the digits after the kept part is how rounding works.',
          isMisconception: true,
        },
        {
          text: 'Actually you must check the decider digit first. The decider is 7, which is 5 or more, so 8.972 rounds up to 9.0, not down to 8.9.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dr-mis-truncate',
    },
    {
      id: 'dr-q16',
      type: 'multiple-choice',
      stem: 'Round 0.4628 to 2 decimal places, and round the same number to 2 significant figures. Which row gives both answers?',
      tier: 'core',
      options: [
        '2 dp: 0.46 and 2 sf: 0.46',
        '2 dp: 0.46 and 2 sf: 0.47',
        '2 dp: 0.47 and 2 sf: 0.46',
        '2 dp: 0.46 and 2 sf: 0.5',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'For 2 dp: keep 0.46, decider is 2, round down. For 2 sf: first sig fig is 4, second is 6, decider is 2, round down to 0.46.',
      misconceptionId: 'dr-mis-mix-up-targets',
    },
    {
      id: 'dr-q17',
      type: 'numeric-entry',
      stem: 'A panel in the Lake District youth hostel weighs a parcel as 4.7831 kg. Round its mass to 2 significant figures.',
      tier: 'challenge',
      correctAnswer: 4.8,
      tolerance: 0.005,
      unit: 'kg',
      xpValue: 25,
      hint: 'The first sig fig is 4, the second is 7. The decider is 8, which rounds 4.7 up to 4.8.',
    },
    {
      id: 'dr-q18',
      type: 'multiple-choice',
      stem: 'A Sevenoaks bakery prices its sourdough at £3.65 per loaf and increases it by exactly £0.295 to cover energy costs. The new price is rounded to the nearest penny before printing on the label. What price is printed?',
      tier: 'challenge',
      options: ['£3.94', '£3.95', '£3.945', '£4.00'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Add the increase first: 3.65 + 0.295 = 3.945. Then round 3.945 to 2 decimal places.',
      misconceptionId: 'dr-mis-five-stays',
    },
    {
      id: 'dr-q19',
      type: 'multiple-choice',
      stem: 'A 100 metre sprinter records times of 12.749, 12.751 and 12.745 seconds across three trials. The coach records each time to 2 decimal places before averaging. Which row shows the rounded times in the order recorded?',
      tier: 'challenge',
      options: [
        '12.74, 12.75, 12.75',
        '12.75, 12.75, 12.74',
        '12.75, 12.75, 12.75',
        '12.74, 12.75, 12.74',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Round each one in turn. 12.749 has decider 9, so up. 12.751 has decider 1, so down. 12.745 has decider 5, so up by the convention.',
      misconceptionId: 'dr-mis-five-stays',
    },
    {
      id: 'dr-q20',
      type: 'numeric-entry',
      stem: 'A Manchester train fare is quoted online as £58.4982. The booking system rounds the total to the nearest penny. To the nearest penny, what amount is charged?',
      tier: 'challenge',
      correctAnswer: 58.5,
      tolerance: 0.005,
      unit: 'pounds',
      xpValue: 25,
      hint: 'Round 58.4982 to 2 decimal places. Keep 58.49; the decider is 8.',
      misconceptionId: 'dr-mis-no-carry',
    },
    {
      id: 'dr-q21',
      type: 'free-text',
      stem: 'Liam reports a measurement of 0.0480 m to a friend who says: "The trailing zero is pointless; just write 0.048 m." Explain in one or two sentences why the trailing zero matters when reporting to a number of significant figures, and state how many significant figures 0.0480 has.',
      tier: 'challenge',
      sampleAnswer:
        'The trailing zero shows the measurement is accurate to the ten-thousandths column, so 0.0480 has 3 significant figures whereas 0.048 only has 2. Writing the zero tells the reader how precise the measurement is.',
      keywords: [
        'trailing zero',
        'significant',
        '3 significant figures',
        'precision',
        'accurate',
      ],
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Rounding to Decimal Places" page; the worked example explicitly identifies the digit to the right of the kept part as the decider, contrasted with pupils who pick the wrong column.
    {
      id: 'dr-mis-wrong-decider',
      description:
        'Choosing the wrong digit as the decider when rounding (for example, looking at the digit two places after the kept part instead of the one immediately after).',
      triggerAnswer: 'wrong-decider',
      correction:
        'The decider is the digit immediately to the right of the part you are keeping. Look only at that single digit; ignore the ones further to the right.',
      reExplanation:
        'To round 5.382 to 1 decimal place, keep 5.3 and look at the next digit to the right. That is 8, the decider. Compare it with 5: eight is greater than 5, so round 5.3 up to 5.4. The 2 at the end does not get to vote.',
    },
    // Source: NCETM "Misconceptions with the Key Objectives" reference document (Primary, Number / Rounding); pupils truncate decimals by chopping off the trailing digits without consulting the decider.
    {
      id: 'dr-mis-truncate',
      description:
        'Rounding by chopping off everything after the kept part, without checking the decider digit.',
      triggerAnswer: 'truncate',
      correction:
        'Truncating drops digits without ever rounding up. The kept part may need to go up by 1 if the decider is 5 or more, so always check the decider first.',
      reExplanation:
        '8.972 truncated to 1 decimal place is 8.9, but the decider is 7. Seven is 5 or more, so round 8.9 up to 9.0. Truncation gives the wrong rounded value whenever the decider is 5 or more.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); commentary on a rounding question where pupils failed to round 5 up by the standard convention.
    {
      id: 'dr-mis-five-stays',
      description:
        'Believing the digit 5 is a tie that stays put when rounding, so 6.45 rounds to 6.4 instead of 6.5.',
      triggerAnswer: 'five-stays',
      correction:
        'The standard convention in school maths is that a 5 in the decider rounds up. So 6.45 rounded to 1 decimal place is 6.5, not 6.4.',
      reExplanation:
        'Picture 6.45 on a number line between 6.4 and 6.5. It sits exactly halfway between the two. The school convention says a tie rounds up, so 6.45 becomes 6.5 to 1 decimal place. The same convention applies to 12.085 (rounds to 12.09) and 0.5 (rounds to 1).',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 1F (Foundation, Non-calculator); recurring rounding error where pupils ignored the carry into the next column when adding 1 to a 9.
    {
      id: 'dr-mis-no-carry',
      description:
        'When the kept part ends in 9 and rounds up, leaving the 9 unchanged or writing 10 in a single column instead of carrying.',
      triggerAnswer: 'no-carry',
      correction:
        'When you round up a digit that is 9, it becomes 10, which carries into the next column to the left. Treat it like an addition: 0.499 + 0.001 = 0.500.',
      reExplanation:
        '0.49962 to 3 decimal places: the kept part is 0.499 and the decider is 6, so round up. Adding 0.001 to 0.499 carries: 0.499 + 0.001 = 0.500. Trailing zeros may be dropped, so the value is 0.5.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Significant Figures" page; the "Common mistake" callout that leading zeros after a decimal point are placeholders, not significant.
    {
      id: 'dr-mis-leading-zero-sig',
      description:
        'Counting leading zeros after the decimal point as significant figures (for example, calling 0.00408 a four-significant-figure number).',
      triggerAnswer: 'leading-zero-sig',
      correction:
        'Leading zeros after the decimal point are placeholders. They are not significant figures. The first significant figure is the first non-zero digit.',
      reExplanation:
        '0.00408 has three significant figures: 4, 0, 8. The two zeros after the point are placeholders that hold the 4 in its hundredths-of-a-thousandth column. The middle zero between 4 and 8 IS significant because it sits between two non-zero digits.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023 Foundation tier (Paper 01); commentary on rounding multi-step calculations where pupils combined the decider digits incorrectly.
    {
      id: 'dr-mis-cumulative-round',
      description:
        'Combining several digits to the right of the kept part to make a single decider, by adding them or by carrying through more than one column.',
      triggerAnswer: 'cumulative',
      correction:
        'Only the single digit immediately to the right of the kept part decides the round. Digits further right are ignored; you do not add them or chain them together.',
      reExplanation:
        '3.146 to 2 decimal places: the decider is 4 (the digit immediately after the kept part 3.14). Four is less than 5, so round down to 3.14. The 6 at the end has no say. Adding 4 and 6 to make 10 is a misuse of the rule.',
    },
    // Authored, no external source: classroom-observed Year 7 confusion between rounding to a number of decimal places and rounding to the nearest power of ten.
    {
      id: 'dr-mis-mix-up-targets',
      description:
        'Confusing "round to 2 decimal places" with "round to 2 significant figures" or with "round to the nearest hundredth" of a different scale.',
      triggerAnswer: 'mix-up-targets',
      correction:
        'Rounding to a number of decimal places counts digits after the point. Rounding to a number of significant figures counts digits from the first non-zero digit on the left. The two can give different answers.',
      reExplanation:
        '0.0463 to 2 decimal places is 0.05 (only the tenths and hundredths columns are kept). 0.0463 to 2 significant figures is 0.046 (the first non-zero digit is 4, so we keep 4 and 6). The same number rounded by two different rules gives two different answers, both correct for their target.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsRoundingZoneNodes = [decimalsRounding]
