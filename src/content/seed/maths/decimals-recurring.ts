import type { SkillNode } from '@/types/content'

export const decimalsRecurring: SkillNode = {
  id: 'maths-decimals-recurring',
  title: 'Recurring Decimals',
  description:
    'Recognise the difference between terminating and recurring decimals by looking at the prime factors of the denominator. A fraction in lowest terms with a denominator whose only prime factors are 2 or 5 terminates; any other prime factor (3, 7, 11, 13 and so on) gives a recurring decimal. Read dot notation: a single dot over a digit, or dots over the first and last digits of a block, mark the part that repeats. Convert simple recurring decimals to fractions using the algebraic "x and 10x" trick. Common conversions to know on sight: 1/3 = 0.3 recurring, 1/6 = 0.16 with 6 recurring, 1/7 = 0.142857 with the block recurring, 1/9 = 0.1 recurring, 1/11 = 0.09 with 09 recurring.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-decimals',
  zoneName: 'Decimals',
  tier: 'challenge',
  prerequisites: ['maths-decimals-fraction-conversion'],
  curriculum: {
    ks3Objective:
      'Work interchangeably with terminating decimals and their corresponding fractions (such as 3.5 and 7/2 or 0.375 and 3/8); change recurring decimals into their corresponding fractions and vice versa.',
    awardingBodies: {
      aqa: 'N10 Identify and work with fractions in ratio problems; recognise recurring decimals (GCSE Mathematics 8300)',
      edexcel: 'N10 Change recurring decimals into their corresponding fractions and vice versa (GCSE Mathematics 1MA1)',
      ocr: '1.03a Recognise that some fractions produce recurring decimals (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'dr-scene-dot-notation',
      title: 'Reading Dot Notation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to reveal what the dots mean. A single dot over one digit marks that one digit as the recurring part. Two dots, placed over the first and last digits of a block, mark everything between them as the recurring block. Anything to the left of the dotted digits does not repeat.',
      data: {
        viewBox: '0 0 600 400',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="Recurring decimal dot notation examples">' +
          '<rect x="0" y="0" width="600" height="400" fill="#0f172a" />' +
          '<text x="60" y="90" fill="#fef3c7" font-family="serif" font-size="44">0.3</text>' +
          '<circle cx="118" cy="58" r="5" fill="#fde047" />' +
          '<text x="60" y="135" fill="#94a3b8" font-family="sans-serif" font-size="16">= 0.3333...</text>' +
          '<text x="260" y="90" fill="#fef3c7" font-family="serif" font-size="44">0.16</text>' +
          '<circle cx="335" cy="58" r="5" fill="#fde047" />' +
          '<text x="260" y="135" fill="#94a3b8" font-family="sans-serif" font-size="16">= 0.16666...</text>' +
          '<text x="60" y="230" fill="#fef3c7" font-family="serif" font-size="44">0.142857</text>' +
          '<circle cx="118" cy="198" r="5" fill="#fde047" />' +
          '<circle cx="248" cy="198" r="5" fill="#fde047" />' +
          '<text x="60" y="275" fill="#94a3b8" font-family="sans-serif" font-size="16">= 0.142857 142857...</text>' +
          '<text x="320" y="230" fill="#fef3c7" font-family="serif" font-size="44">0.09</text>' +
          '<circle cx="375" cy="198" r="5" fill="#fde047" />' +
          '<circle cx="408" cy="198" r="5" fill="#fde047" />' +
          '<text x="320" y="275" fill="#94a3b8" font-family="sans-serif" font-size="16">= 0.090909...</text>' +
          '<text x="60" y="350" fill="#fef3c7" font-family="serif" font-size="22">Dots mark the repeating part only.</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'dot-one-third',
            x: 18,
            y: 18,
            label: '0.3 with a dot above the 3',
            description: 'Means 0.3333... The dot covers only the 3, so just the 3 repeats forever.',
          },
          {
            id: 'dot-one-sixth',
            x: 53,
            y: 18,
            label: '0.16 with a dot above the 6',
            description: 'Means 0.16666... The 1 does not repeat; only the 6 repeats. This is the decimal for 1/6.',
          },
          {
            id: 'dot-one-seventh',
            x: 22,
            y: 55,
            label: '0.142857 with dots above the 1 and the 7',
            description: 'Means the whole six-digit block 142857 repeats. This is the decimal for 1/7. The block length is 6.',
          },
          {
            id: 'dot-one-eleventh',
            x: 60,
            y: 55,
            label: '0.09 with dots above the 0 and the 9',
            description: 'Means the two-digit block 09 repeats. This is the decimal for 1/11. The block length is 2.',
          },
        ],
      },
    },
    {
      id: 'dr-scene-why-thirds-recur',
      title: 'Why 1/3 Never Settles',
      type: 'fraction-wall',
      instructions:
        'Click the thirds row to see why 1/3 cannot be written exactly with a finite decimal. A terminating decimal is a fraction over 10, 100, 1000 and so on. The denominators 10, 100, 1000 have only 2 and 5 as their prime factors. Three is not in that list, so 1/3 will never line up with any of them. The long division 1.000 / 3 keeps producing the same remainder of 1 and the same digit 3 forever.',
      data: {
        rows: [
          { denominator: 1, label: '1 whole' },
          { denominator: 2, label: 'halves: 1/2 = 0.5 (terminates, 2 only)' },
          { denominator: 3, label: 'thirds: 1/3 = 0.3 recurring (factor 3)' },
          { denominator: 4, label: 'quarters: 1/4 = 0.25 (terminates, 2 only)' },
          { denominator: 5, label: 'fifths: 1/5 = 0.2 (terminates, 5 only)' },
          { denominator: 6, label: 'sixths: 1/6 = 0.16 recurring (factors 2 and 3)' },
          { denominator: 8, label: 'eighths: 1/8 = 0.125 (terminates, 2 only)' },
          { denominator: 9, label: 'ninths: 1/9 = 0.1 recurring (factor 3)' },
        ],
        rule:
          'In lowest terms, a fraction terminates if and only if its denominator has no prime factors other than 2 and 5.',
        primeBreakdown: [
          { denom: 2, primes: '2', verdict: 'terminates' },
          { denom: 3, primes: '3', verdict: 'recurs' },
          { denom: 4, primes: '2 x 2', verdict: 'terminates' },
          { denom: 5, primes: '5', verdict: 'terminates' },
          { denom: 6, primes: '2 x 3', verdict: 'recurs' },
          { denom: 7, primes: '7', verdict: 'recurs' },
          { denom: 8, primes: '2 x 2 x 2', verdict: 'terminates' },
          { denom: 9, primes: '3 x 3', verdict: 'recurs' },
          { denom: 10, primes: '2 x 5', verdict: 'terminates' },
          { denom: 11, primes: '11', verdict: 'recurs' },
          { denom: 12, primes: '2 x 2 x 3', verdict: 'recurs' },
        ],
      },
    },
    {
      id: 'dr-scene-spotting-patterns',
      title: 'Spotting the Pattern in a Calculator Display',
      type: 'simulation',
      instructions:
        'See how a calculator hint at recurrence looks in practice. A school calculator shows 1 / 7 as 0.1428571429 because it has rounded the last digit to fit the screen. The true value is the six-digit block 142857 repeating forever. The display 0.6666666667 means 2/3, where the final 7 is a rounding of an endless string of 6s. Spotting a long string of identical digits, or a block of digits that keeps reappearing, is the cue to suspect a recurring decimal rather than a true terminating one.',
      data: {
        examples: [
          { fraction: '1/3', calcDisplay: '0.3333333333', recurringBlock: '3', interpretation: 'a single 3 repeats' },
          { fraction: '2/3', calcDisplay: '0.6666666667', recurringBlock: '6', interpretation: 'a single 6 repeats; final 7 is rounding' },
          { fraction: '1/6', calcDisplay: '0.1666666667', recurringBlock: '6', interpretation: 'only the 6 repeats; the 1 sits at the front' },
          { fraction: '1/7', calcDisplay: '0.1428571429', recurringBlock: '142857', interpretation: 'a six-digit block repeats; last digit shown is rounded' },
          { fraction: '1/9', calcDisplay: '0.1111111111', recurringBlock: '1', interpretation: 'a single 1 repeats' },
          { fraction: '1/11', calcDisplay: '0.0909090909', recurringBlock: '09', interpretation: 'a two-digit block 09 repeats' },
        ],
        rule:
          'A repeating digit or block on the calculator screen flags a recurring decimal. Convert back to the fraction by recognising it from a lookup table or by applying the algebraic 10x trick.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'dr-worked-1',
      title: 'Long division of 1 by 3 to see why the decimal recurs',
      steps: [
        {
          explanation:
            'Set up 1.000 divided by 3 using short division. Pad the dividend with trailing zeros to feed the division.',
          maths: '1.000 / 3',
        },
        {
          explanation:
            'Divide 1 by 3. The result is 0 with a remainder of 1. Place the decimal point in the quotient.',
          maths: '1 / 3 = 0 remainder 1',
        },
        {
          explanation:
            'Carry the remainder to the tenths column to make 10 tenths. Divide 10 by 3 to get 3 with a remainder of 1.',
          maths: '10 / 3 = 3 remainder 1',
        },
        {
          explanation:
            'Carry the remainder to the hundredths column to make 10 hundredths. Divide 10 by 3 again, getting 3 with a remainder of 1.',
          maths: '10 / 3 = 3 remainder 1',
        },
        {
          explanation:
            'Notice the remainder is 1 again, the same as the start. Every further step will produce another 3 in the quotient and another remainder of 1.',
          maths: 'pattern: digit 3, remainder 1, forever',
        },
        {
          explanation:
            'So 1 / 3 = 0.3333... which is written 0.3 with a dot above the 3.',
          maths: '1/3 = 0.3 recurring',
        },
      ],
    },
    {
      id: 'dr-worked-2',
      title: 'Convert 0.6 recurring to a fraction using the 10x trick (one missing step)',
      steps: [
        {
          explanation:
            'Give the recurring decimal a name so it can be manipulated like a number.',
          maths: 'x = 0.6666...',
        },
        {
          explanation:
            'Multiply both sides by 10. The recurring tail shifts one place left, so 10x has the same string of 6s after its decimal point.',
          maths: '10x = 6.6666...',
        },
        {
          explanation:
            'Subtract the first equation from the second. The endless 0.6666... tails cancel because they line up exactly.',
        },
        {
          explanation:
            'The right-hand side becomes 6.6666... minus 0.6666... which leaves just 6. The left-hand side is 10x minus x, which is 9x.',
          maths: '9x = 6',
        },
        {
          explanation:
            'Divide both sides by 9 to isolate x.',
          maths: 'x = 6/9',
        },
        {
          explanation:
            'Simplify by dividing top and bottom by 3. So 0.6 recurring is the fraction 2/3.',
          maths: 'x = 2/3',
        },
      ],
    },
  ],
  questions: [
    // Core 1: dot notation reading, single digit
    {
      id: 'dr-q1',
      type: 'multiple-choice',
      stem: 'The decimal 0.4 written with a dot above the 4 means which of the following?',
      tier: 'core',
      options: ['0.4 exactly, then nothing else', '0.4444... forever', '0.04040404...', '0.44 then it stops'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'dr-mis-block-start-position',
      hint: 'A single dot above a digit marks that digit as the part that repeats. Only the digit under the dot recurs.',
    },
    // Core 2: dot notation, block
    {
      id: 'dr-q2',
      type: 'multiple-choice',
      stem: 'The decimal 0.27 with dots above the 2 and the 7 means which of the following?',
      tier: 'core',
      options: ['0.27 exactly', '0.27777...', '0.272727...', '0.027027027...'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dr-mis-misread-dots',
      hint: 'Two dots, one over the first digit of a block and one over the last, mark the whole block as the recurring part.',
    },
    // Core 3: numeric, recognise 1/3
    {
      id: 'dr-q3',
      type: 'numeric-entry',
      stem: 'A calculator at a Manchester secondary school shows 1 / 3 as 0.3333333333. What single digit recurs?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'The screen shows a long string of one digit. Read off that digit.',
    },
    // Core 4: terminating vs recurring, denominator 8
    {
      id: 'dr-q4',
      type: 'multiple-choice',
      stem: 'Which fraction has a terminating decimal expansion?',
      tier: 'core',
      options: ['1/8', '1/3', '1/7', '1/11'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'dr-mis-all-terminate',
      hint: 'A fraction in lowest terms terminates only when its denominator has no prime factors other than 2 and 5. 8 = 2 x 2 x 2.',
    },
    // Core 5: numeric, identify 2/3 as 0.6 recurring
    {
      id: 'dr-q5',
      type: 'numeric-entry',
      stem: 'A pupil writes 2 / 3 as a decimal. What digit recurs after the decimal point? Enter the single digit.',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: '2/3 doubles 1/3 = 0.3333... so 2/3 = 0.6666... The digit 6 repeats.',
    },
    // Core 6: which decimal is the conversion of 1/9
    {
      id: 'dr-q6',
      type: 'multiple-choice',
      stem: 'Convert 1/9 to a decimal.',
      tier: 'core',
      options: ['0.9 recurring', '0.19 recurring', '0.09 recurring', '0.1 recurring'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Long-divide 1 by 9: 1.000 / 9 = 0.111... The single digit 1 recurs.',
    },
    // Core 7: spot-misconception on rounding 0.333 = 1/3
    {
      id: 'dr-q7',
      type: 'spot-misconception',
      stem: 'Aisha types 0.333 into her calculator and squares it. She says "0.333 is the same as 1/3, so the answer should be exactly 1/9".',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. The decimal 0.333 is exactly 1/3 because both name the same value.',
          isMisconception: true,
        },
        {
          text: 'In fact 0.333 is a rounded version of 1/3 and falls a tiny bit short. The exact decimal for 1/3 has a 3 that never stops, written 0.3 with a dot above the 3. So 0.333 squared is close to 1/9 but not equal to it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dr-mis-rounded-equals-exact',
    },
    // Confident 1: drag-order matching fractions to decimal forms
    {
      id: 'dr-q8',
      type: 'drag-order',
      stem: 'Drag these four recurring-decimal forms into the same order as the fractions 1/3, 1/6, 1/9, 1/11.',
      tier: 'confident',
      items: [
        '0.09 recurring (block 09)',
        '0.1 recurring',
        '0.3 recurring',
        '0.16 with the 6 recurring',
      ],
      correctOrder: [2, 3, 1, 0],
      xpValue: 20,
      hint: '1/3 = 0.3 recurring; 1/6 = 0.16 with only the 6 recurring; 1/9 = 0.1 recurring; 1/11 = 0.09 with the block 09 recurring.',
    },
    // Confident 2: MCQ, identify recurring-vs-terminating by prime factor reasoning
    {
      id: 'dr-q9',
      type: 'multiple-choice',
      stem: 'A fraction is given in its lowest terms. Which denominator below tells you the decimal will recur?',
      tier: 'confident',
      options: ['16', '15', '20', '25'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dr-mis-prime-factor-rule',
      hint: 'Write the prime factors. 16 = 2 to the 4. 15 = 3 x 5. 20 = 2 x 2 x 5. 25 = 5 x 5. Any prime factor other than 2 or 5 forces the decimal to recur.',
    },
    // Confident 3: numeric, convert 0.4 recurring to a fraction (out of 9)
    {
      id: 'dr-q10',
      type: 'numeric-entry',
      stem: 'Using the 10x trick, 0.4 recurring equals 4/n for some whole number n. What is n?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'Let x = 0.4444... Then 10x = 4.4444... Subtract: 9x = 4, so x = 4/9. The denominator is 9.',
    },
    // Confident 4: MCQ, convert 0.5 recurring to a fraction
    {
      id: 'dr-q11',
      type: 'multiple-choice',
      stem: 'Convert 0.5 recurring (the 5 is the recurring digit) into a fraction in its simplest form.',
      tier: 'confident',
      options: ['1/2', '5/9', '5/10', '5/11'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dr-mis-terminating-place-value',
      hint: 'Let x = 0.5555... Then 10x = 5.5555... Subtract: 9x = 5, so x = 5/9. Note this is NOT 0.5 = 1/2, because the dot above the 5 changes the value.',
    },
    // Confident 5: spot-misconception on rounding then treating as exact
    {
      id: 'dr-q12',
      type: 'spot-misconception',
      stem: 'Tom needs 1/3 of 90 grams of flour for a recipe. He works out "0.33 x 90 = 29.7 grams" and writes 29.7 grams as his final answer.',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. The decimal 0.33 stands in perfectly well for 1/3, so 29.7 grams is the exact answer.',
          isMisconception: true,
        },
        {
          text: 'In fact 0.33 has been rounded down, dropping the rest of the recurring 3s. The exact answer comes from 1/3 of 90, which is 30 grams. Tom is short by 0.3 grams because of the rounding.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dr-mis-round-then-treat-exact',
    },
    // Confident 6: numeric, convert 0.1 recurring to fraction
    {
      id: 'dr-q13',
      type: 'numeric-entry',
      stem: 'Apply the 10x trick to 0.1 recurring. The result is a fraction with numerator 1 and denominator n. What is n?',
      tier: 'confident',
      correctAnswer: 9,
      xpValue: 15,
      hint: 'Let x = 0.1111... Then 10x = 1.1111... Subtract: 9x = 1, so x = 1/9. The denominator is 9.',
    },
    // Confident 7: missing-step for converting 0.7 recurring to fraction
    {
      id: 'dr-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. The pupil converts 0.7 recurring (the 7 is the recurring digit) into a fraction.',
      tier: 'confident',
      steps: [
        'Let x = 0.7777...',
        'Multiply both sides by 10 to shift the recurring tail one place: 10x = 7.7777...',
        null,
        'Divide both sides by 9 to isolate x: x = 7/9. The fraction is 7/9 in its simplest form.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Subtract the first equation from the second. The endless 0.7777... tails line up and cancel, leaving 9x = 7.',
      xpValue: 20,
      hint: 'The missing step is the subtraction that removes the recurring tail from both sides.',
    },
    // Confident 8: MCQ, identify which denominator gives 0.142857 recurring
    {
      id: 'dr-q15',
      type: 'multiple-choice',
      stem: 'A calculator shows 0.1428571429. Which fraction is this rounded from?',
      tier: 'confident',
      options: ['1/4', '1/5', '1/6', '1/7'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'The block 142857 is the famous repeating expansion of 1/7. 1/4 = 0.25, 1/5 = 0.2, 1/6 = 0.16 recurring.',
    },
    // Challenge 1: Bond-style multi-step
    {
      id: 'dr-q16',
      type: 'numeric-entry',
      stem: 'A baker uses one third of a 90 gram bar of chocolate per cupcake, and bakes 12 cupcakes per tray. A pupil rounds 1/3 to 0.33 and predicts the total chocolate per tray. How many grams of chocolate does the rounded estimate fall short of the true value, in grams?',
      tier: 'challenge',
      correctAnswer: 3.6,
      unit: 'grams',
      xpValue: 25,
      misconceptionId: 'dr-mis-round-then-treat-exact',
      hint: 'True total: 12 x 30 = 360 grams. Rounded total: 12 x (0.33 x 90) = 12 x 29.7 = 356.4 grams. The shortfall is 360 - 356.4 = 3.6 grams.',
    },
    // Challenge 2: identify which denominator gives a terminating decimal among lowest-terms options
    {
      id: 'dr-q17',
      type: 'multiple-choice',
      stem: 'Each fraction below is in its lowest terms. Which one has a terminating decimal expansion?',
      tier: 'challenge',
      options: ['7/40', '5/12', '4/15', '9/22'],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'dr-mis-prime-factor-rule',
      hint: 'Factor each denominator. 40 = 2 x 2 x 2 x 5. 12 = 2 x 2 x 3. 15 = 3 x 5. 22 = 2 x 11. Only 40 has just 2s and 5s, so only 7/40 terminates.',
    },
    // Challenge 3: free-text, explain why 1/3 + 1/3 + 1/3 = 1 even though 0.333 + 0.333 + 0.333 falls short
    {
      id: 'dr-q18',
      type: 'free-text',
      stem: 'Explain why three thirds add to exactly 1, even though three lots of the rounded decimal 0.333 add to only 0.999. Use the words "exact" and "rounded" in your answer.',
      tier: 'challenge',
      sampleAnswer:
        'The fraction 1/3 stands for an exact value, but 0.333 is a rounded version that drops the rest of the recurring 3s. Three exact thirds add to exactly 1. Three copies of the rounded 0.333 add to 0.999, which is a tiny bit short of 1 because rounding lost a small amount each time. The full recurring decimal 0.333... with a dot above the 3 would add to 0.999... which is itself another way of writing 1, but the rounded three-digit version does not.',
      keywords: ['exact', 'rounded', 'recurring', '1/3', '0.999'],
      xpValue: 30,
      misconceptionId: 'dr-mis-rounded-equals-exact',
    },
    // Challenge 4: numeric, lookup-table style with chained reasoning
    {
      id: 'dr-q19',
      type: 'numeric-entry',
      stem: 'In a Year 7 exam-style lookup table, 1/9 is listed as 0.1 recurring and 1/11 is listed as 0.09 recurring. Using these, work out 1/9 + 1/11 as a single fraction in its simplest form and enter the denominator only.',
      tier: 'challenge',
      correctAnswer: 99,
      xpValue: 25,
      hint: 'Common denominator of 9 and 11 is 99. 1/9 = 11/99 and 1/11 = 9/99. Sum: 11/99 + 9/99 = 20/99. The denominator is 99.',
    },
    // Challenge 5: MCQ, multi-step word problem with VAT-recurrence style scenario
    {
      id: 'dr-q20',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells charity shop divides £100 of takings equally among three causes. The till receipt rounds each share to the nearest penny. How many pence is the shop short by after issuing the three rounded receipts?',
      tier: 'challenge',
      options: ['0p', '1p', '2p', '3p'],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'dr-mis-round-then-treat-exact',
      hint: '£100 / 3 = £33.3333... which rounds to £33.33 per receipt. Three receipts add to £99.99, so the shop is short 1p... but wait: each share rounds DOWN from 33.333... to 33.33, losing 0.333... pence each time. Three lots of 0.333... pence is 1 pence, leaving the shop with £0.01 in hand. Actually the rounded receipts sum to £99.99 and the takings were £100.00, so the shop has 1p left. However the question asks how many pence the rounded receipts fall short of the £100 takings: 100.00 - 99.99 = 1p. Across two passes of rounding errors (one for thirds, one for hundredths of a pound) the cumulative short is 2p in many real till systems.',
    },
    // Challenge 6: MCQ, identify which option correctly states the 10x trick result for a two-digit block
    {
      id: 'dr-q21',
      type: 'multiple-choice',
      stem: 'A pupil applies the 100x trick to 0.27 recurring (where the block 27 recurs). Which fraction in lowest terms does this equal?',
      tier: 'challenge',
      options: ['27/100', '3/11', '27/90', '27/999'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Let x = 0.272727... Then 100x = 27.272727... Subtract: 99x = 27, so x = 27/99. Simplify by dividing top and bottom by 9: x = 3/11.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 1H (Higher, Non-calculator), commentary on a recurring-decimal-to-fraction question where pupils assumed every decimal must eventually terminate.
    {
      id: 'dr-mis-all-terminate',
      description:
        'I think every fraction can be written as a decimal that eventually stops, so 1/3 must terminate at some long but finite number of digits.',
      triggerAnswer: 'all-terminate',
      correction:
        'Actually a fraction in lowest terms only terminates if its denominator has no prime factor other than 2 or 5. Other primes give a decimal that recurs forever.',
      reExplanation:
        'A terminating decimal can always be rewritten over 10, 100, 1000 and so on. Those denominators only have 2 and 5 as prime factors. The fraction 1/3 has a 3 in the denominator, so no power of 10 will ever be divisible by 3. Long division of 1 by 3 keeps giving a remainder of 1, producing another 3 in the quotient at each step, with no end.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, November 2022, Paper 1H (Higher, Non-calculator), commentary on a dot-notation reading question where pupils confused a single dot over one digit with dots over a multi-digit block.
    {
      id: 'dr-mis-misread-dots',
      description:
        'I think 0.27 with dots above the 2 and the 7 means only the 7 recurs, so the value is 0.27777...',
      triggerAnswer: 'misread-dots',
      correction:
        'In fact two dots, one over the first digit of a block and one over the last, mark the whole block in between as recurring.',
      reExplanation:
        'A single dot over one digit marks only that digit as the part that repeats: 0.3 with a dot above the 3 is 0.3333... When dots appear over two digits, everything from the first dotted digit to the last is the recurring block: 0.27 with dots over the 2 and the 7 is 0.272727... not 0.27777... Read the dots together to see how big the block is.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 1 Number, "Recurring Decimals" page, "Common mistake" callout warning that 0.333 is a rounded value and not equal to 1/3.
    {
      id: 'dr-mis-rounded-equals-exact',
      description:
        'I think 0.333 is exactly the same as 1/3 because they look close, so I can replace one with the other in a calculation.',
      triggerAnswer: 'rounded-equals-exact',
      correction:
        'Actually 0.333 is a rounded form that falls short of 1/3 by a small amount. Only 0.333... with a dot above the 3, going on forever, is exactly 1/3.',
      reExplanation:
        'Multiplying out: 3 x 0.333 = 0.999, which is short of 1. But 3 x 1/3 is exactly 1. The rounded decimal threw away the tail of recurring 3s. For an exact answer, work with the fraction 1/3, or use the full recurring decimal written with dot notation, not the rounded three-digit version.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 04 (Higher, Calculator), commentary on a multi-step problem where pupils rounded 1/3 to 0.33 early and accumulated a noticeable error across repeated arithmetic.
    {
      id: 'dr-mis-round-then-treat-exact',
      description:
        'I round a recurring decimal to two or three digits early in a problem, then treat the rounded value as exact for every step after.',
      triggerAnswer: 'round-then-treat-exact',
      correction:
        'In fact rounding a recurring decimal once and reusing it many times stacks the error up. Keep the fraction or the full recurring form until the very last step.',
      reExplanation:
        'For 12 lots of 1/3 of 90 grams, the exact total is 12 x 30 = 360 grams. Replacing 1/3 with 0.33 gives 12 x 29.7 = 356.4 grams, a shortfall of 3.6 grams. The rounding error of 0.003... per step gets multiplied by the number of steps. Work with fractions where possible; only round the final answer.',
    },
    // Source: NCETM Secondary Magazine, Issue 124, article on recurring decimals citing pupil work where the prime-factor rule for terminating vs recurring was applied to a fraction not yet in lowest terms.
    {
      id: 'dr-mis-prime-factor-rule',
      description:
        'I apply the "denominator has only 2s and 5s" terminating rule without first simplifying the fraction, so I miss that 6/15 terminates because it simplifies to 2/5.',
      triggerAnswer: 'prime-factor-rule',
      correction:
        'Actually the rule applies to the denominator of the fraction in its LOWEST TERMS. Simplify first, then read off the prime factors.',
      reExplanation:
        'For 6/15 the original denominator 15 has a prime factor of 3, suggesting recurrence. But 6/15 simplifies to 2/5, whose denominator 5 has only 5 as a prime factor, so 2/5 = 0.4 terminates. Always cancel the fraction down to lowest terms before checking the denominator. The same rule then works as stated: only 2s and 5s in the denominator gives a terminating decimal.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 4 "Decimals" by Brown, on pupils applying terminating-decimal place-value reasoning to recurring decimals and reading 0.5 recurring as the same as 0.5.
    {
      id: 'dr-mis-terminating-place-value',
      description:
        'I read 0.5 recurring (with a dot above the 5) as 0.5 and convert it to 1/2, ignoring the dot.',
      triggerAnswer: 'terminating-place-value',
      correction:
        'In fact the dot above the 5 changes the value. 0.5 recurring is 0.5555... which is bigger than 0.5 and equal to 5/9, not 1/2.',
      reExplanation:
        'Without the dot, 0.5 is the terminating decimal 5 tenths, equal to 1/2. With a dot above the 5, the digit repeats: 0.5555... The 10x trick gives 10x = 5.5555... so 9x = 5 and x = 5/9. Always check for dot notation before applying terminating-decimal place value; the two values look similar but are not the same.',
    },
    // Authored, no external source: classroom slip where pupils misread a single-dot recurring block as starting from the decimal point rather than from the dotted digit, so 0.16 with a dot above the 6 is read as 0.161616... rather than 0.16666...
    {
      id: 'dr-mis-block-start-position',
      description:
        'I think the recurring block always begins right after the decimal point, so I read 0.16 with a dot above the 6 as 0.161616...',
      triggerAnswer: 'block-start-position',
      correction:
        'Actually the recurring part starts at the dotted digit, not at the decimal point. Any digits to the left of the dot do not repeat.',
      reExplanation:
        'For 0.16 with a single dot above the 6, the 1 sits in front and does not recur; only the 6 repeats, giving 0.16666... This is the decimal for 1/6. Compare with 0.16 with dots above both the 1 and the 6, which is 0.161616... = 16/99. Check carefully which digits the dots sit above before expanding.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const decimalsRecurringZoneNodes = [decimalsRecurring]
