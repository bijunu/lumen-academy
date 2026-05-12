import type { SkillNode } from '@/types/content'

export const placeValueStandardFormArithmetic: SkillNode = {
  id: 'maths-place-value-standard-form-arithmetic',
  title: 'Standard Form: Arithmetic',
  description:
    'Add, subtract, multiply and divide numbers written in standard form A x 10 to the power n. For multiplication, combine the A values and add the powers; for division, divide the A values and subtract the powers. For addition and subtraction, rewrite both numbers with the same power of ten before combining the A values. After every step, normalise the result so that A sits in the range 1 (inclusive) to 10 (exclusive). Read calculator displays such as 3.4E5 as 3.4 x 10 to the power 5, with E acting as a power-of-ten marker rather than a base.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-place-value',
  zoneName: 'Place Value',
  tier: 'challenge',
  prerequisites: ['maths-place-value-standard-form-intro'],
  curriculum: {
    ks3Objective:
      'Calculate with and interpret numbers in standard form A x 10 to the power n, where 1 is less than or equal to A which is less than 10 and n is a positive or negative integer.',
    awardingBodies: {
      aqa: 'N9 Calculate with and interpret standard form A x 10 to the power n (GCSE Mathematics 8300)',
      edexcel: 'N9 Calculate with and interpret standard form, including with and without a calculator (GCSE Mathematics 1MA1)',
      ocr: '1.04c Calculate with and interpret numbers in the form A x 10 to the power n (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'psa-scene-multiply-divide',
      title: 'Multiplying and Dividing in Standard Form',
      type: 'simulation',
      instructions:
        'Look at how the A values and the powers of ten are handled separately when standard-form numbers are multiplied or divided. To multiply, the A values are multiplied and the powers of ten are added. To divide, the A values are divided and the powers of ten are subtracted. The result is then normalised so that A sits between 1 and 10.',
      data: {
        worked: [
          {
            calculation: '(3 x 10^4) x (2 x 10^5)',
            aStep: '3 x 2 = 6',
            powerStep: '10^4 x 10^5 = 10^(4+5) = 10^9',
            combined: '6 x 10^9',
            normalised: '6 x 10^9',
            note: 'A sits between 1 and 10, so no normalisation needed.',
          },
          {
            calculation: '(5 x 10^3) x (4 x 10^6)',
            aStep: '5 x 4 = 20',
            powerStep: '10^3 x 10^6 = 10^9',
            combined: '20 x 10^9',
            normalised: '2 x 10^10',
            note: '20 is too big, so write it as 2 x 10 and add 1 to the power.',
          },
          {
            calculation: '(8 x 10^7) / (2 x 10^3)',
            aStep: '8 / 2 = 4',
            powerStep: '10^7 / 10^3 = 10^(7-3) = 10^4',
            combined: '4 x 10^4',
            normalised: '4 x 10^4',
            note: 'A sits between 1 and 10.',
          },
          {
            calculation: '(3 x 10^5) / (6 x 10^2)',
            aStep: '3 / 6 = 0.5',
            powerStep: '10^5 / 10^2 = 10^3',
            combined: '0.5 x 10^3',
            normalised: '5 x 10^2',
            note: '0.5 is too small, so write it as 5 x 10 to the minus 1 and reduce the power by 1.',
          },
        ],
      },
    },
    {
      id: 'psa-scene-add-subtract',
      title: 'Adding and Subtracting in Standard Form',
      type: 'simulation',
      instructions:
        'See how addition and subtraction need a shared power of ten. The two numbers are first rewritten with the same power, then the A values are added or subtracted. If the resulting A drifts out of the range 1 to 10, normalise at the end. The shared power chosen here is the larger of the two original powers.',
      data: {
        worked: [
          {
            calculation: '3 x 10^5 + 4 x 10^5',
            aligned: 'Powers already match.',
            sumStep: '(3 + 4) x 10^5 = 7 x 10^5',
            normalised: '7 x 10^5',
            note: 'A sits between 1 and 10, no normalisation needed.',
          },
          {
            calculation: '3 x 10^5 + 4 x 10^4',
            aligned: '4 x 10^4 = 0.4 x 10^5',
            sumStep: '(3 + 0.4) x 10^5 = 3.4 x 10^5',
            normalised: '3.4 x 10^5',
            note: 'Shifting one place down divides A by 10 and pushes the power up by 1.',
          },
          {
            calculation: '7 x 10^6 + 8 x 10^6',
            aligned: 'Powers already match.',
            sumStep: '(7 + 8) x 10^6 = 15 x 10^6',
            normalised: '1.5 x 10^7',
            note: '15 is too big, so write it as 1.5 x 10 and add 1 to the power.',
          },
          {
            calculation: '4 x 10^3 - 5 x 10^4',
            aligned: '4 x 10^3 = 0.4 x 10^4',
            sumStep: '(0.4 - 5) x 10^4 = -4.6 x 10^4',
            normalised: '-4.6 x 10^4',
            note: 'A negative result is allowed. The minus sign sits in front of A.',
          },
        ],
      },
    },
    {
      id: 'psa-scene-calculator-display',
      title: 'Reading the Calculator Display',
      type: 'labelled-diagram',
      instructions:
        'Hover each marker for a translation. A scientific calculator shows standard form using a key marked EXP or x10 to the power x. The display reads as A E n, which means A x 10 to the power n. The letter E here is a power-of-ten marker, not a base or a letter to be multiplied. A negative power shows as E followed by a minus sign.',
      data: {
        viewBox: '0 0 600 400',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="Scientific calculator display showing standard form notation">' +
          '<rect x="0" y="0" width="600" height="400" fill="#0f172a" />' +
          '<rect x="40" y="40" width="520" height="320" rx="14" fill="#1e293b" stroke="#475569" stroke-width="2" />' +
          '<rect x="80" y="80" width="440" height="100" rx="8" fill="#0f172a" stroke="#94a3b8" stroke-width="1" />' +
          '<text x="100" y="148" fill="#fde047" font-family="monospace" font-size="44">3.4</text>' +
          '<text x="220" y="138" fill="#fde047" font-family="monospace" font-size="22">E</text>' +
          '<text x="246" y="148" fill="#fde047" font-family="monospace" font-size="44">5</text>' +
          '<text x="80" y="220" fill="#cbd5f5" font-family="sans-serif" font-size="18">means 3.4 x 10 to the power 5</text>' +
          '<text x="80" y="248" fill="#cbd5f5" font-family="sans-serif" font-size="18">= 340,000</text>' +
          '<rect x="80" y="280" width="120" height="60" rx="8" fill="#334155" stroke="#64748b" stroke-width="1" />' +
          '<text x="115" y="318" fill="#fef3c7" font-family="sans-serif" font-size="20">EXP</text>' +
          '<rect x="220" y="280" width="160" height="60" rx="8" fill="#334155" stroke="#64748b" stroke-width="1" />' +
          '<text x="245" y="318" fill="#fef3c7" font-family="sans-serif" font-size="20">x10ˣ</text>' +
          '<text x="400" y="318" fill="#94a3b8" font-family="sans-serif" font-size="14">power-of-ten keys</text>' +
          '</svg>',
        hotspots: [
          {
            id: 'mantissa',
            x: 22,
            y: 32,
            label: 'A value (mantissa)',
            description: 'The 3.4 is the A value. It must sit between 1 and 10.',
          },
          {
            id: 'e-marker',
            x: 38,
            y: 32,
            label: 'E means times 10 to the power',
            description: 'The E is a power-of-ten marker. It is not a base and it is not multiplied.',
          },
          {
            id: 'exponent',
            x: 45,
            y: 32,
            label: 'Power of ten',
            description: 'The 5 is the power. So 3.4 E 5 means 3.4 x 10 to the power 5, which is 340,000.',
          },
          {
            id: 'exp-key',
            x: 22,
            y: 78,
            label: 'EXP key',
            description: 'On older calculators the EXP key types the power-of-ten part.',
          },
          {
            id: 'pow-key',
            x: 50,
            y: 78,
            label: 'x10 to the x key',
            description: 'On modern calculators this key types A x 10 to the power n directly.',
          },
        ],
      },
    },
    {
      id: 'psa-scene-normalise-flow',
      title: 'Normalising the Answer',
      type: 'number-line',
      instructions:
        'A standard-form answer is normalised so that A is at least 1 and less than 10. If A drifts above 10, divide A by a power of 10 and increase the exponent by the same amount. If A drifts below 1, multiply A by a power of 10 and decrease the exponent by the same amount.',
      data: {
        examples: [
          {
            raw: '20 x 10^9',
            issue: 'A is 20, which is at least 10.',
            shift: 'Divide A by 10, increase the exponent by 1.',
            normalised: '2 x 10^10',
          },
          {
            raw: '0.5 x 10^3',
            issue: 'A is 0.5, which is less than 1.',
            shift: 'Multiply A by 10, decrease the exponent by 1.',
            normalised: '5 x 10^2',
          },
          {
            raw: '15 x 10^6',
            issue: 'A is 15, which is at least 10.',
            shift: 'Divide A by 10, increase the exponent by 1.',
            normalised: '1.5 x 10^7',
          },
          {
            raw: '0.08 x 10^4',
            issue: 'A is 0.08, which is less than 1.',
            shift: 'Multiply A by 100, decrease the exponent by 2.',
            normalised: '8 x 10^2',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'psa-worked-1',
      title: 'Multiply (4 x 10^5) x (3 x 10^7) and give the answer in standard form',
      steps: [
        {
          explanation:
            'Separate the A values from the powers of ten. This lets you handle the two parts independently.',
          maths: '(4 x 3) x (10^5 x 10^7)',
        },
        {
          explanation:
            'Multiply the A values.',
          maths: '4 x 3 = 12',
        },
        {
          explanation:
            'Add the powers of ten using the multiplication rule for indices.',
          maths: '10^5 x 10^7 = 10^(5+7) = 10^12',
        },
        {
          explanation:
            'Combine the two parts.',
          maths: '12 x 10^12',
        },
        {
          explanation:
            'A is 12, which is at least 10, so the answer is not yet in standard form. Rewrite 12 as 1.2 x 10 and add 1 to the power.',
          maths: '12 x 10^12 = 1.2 x 10 x 10^12 = 1.2 x 10^13',
        },
        {
          explanation:
            'State the final answer in standard form.',
          maths: '1.2 x 10^13',
        },
      ],
    },
    {
      id: 'psa-worked-2',
      title: 'Add (5 x 10^6) + (3 x 10^5) and give the answer in standard form',
      steps: [
        {
          explanation:
            'The two powers do not match, so rewrite both numbers with a shared power of ten. Choose the larger power, 10^6.',
          maths: 'shared power = 10^6',
        },
        {
          explanation:
            'Rewrite 3 x 10^5 with the shared power. Shifting up by one place divides A by 10 and increases the power by 1.',
          maths: '3 x 10^5 = 0.3 x 10^6',
        },
        {
          explanation:
            'With both numbers on the same power of ten, add the A values.',
          maths: '(5 + 0.3) x 10^6 = 5.3 x 10^6',
        },
        {
          explanation:
            'Check that A sits between 1 and 10. Here A is 5.3, which is in range, so no further normalisation is needed.',
          maths: '1 <= 5.3 < 10',
        },
        {
          explanation:
            'State the final answer in standard form.',
          maths: '5.3 x 10^6',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'psa-q1',
      type: 'multiple-choice',
      stem: 'Work out (2 x 10^4) x (3 x 10^5) and give the answer in standard form.',
      tier: 'core',
      options: ['6 x 10^9', '5 x 10^9', '6 x 10^20', '23 x 10^9'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'psa-mis-multiply-indices',
      hint: 'Multiply the A values, then add the powers of ten.',
    },
    {
      id: 'psa-q2',
      type: 'multiple-choice',
      stem: 'Work out (8 x 10^7) divided by (2 x 10^3) and give the answer in standard form.',
      tier: 'core',
      options: ['4 x 10^21', '6 x 10^4', '4 x 10^4', '4 x 10^10'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psa-mis-divide-indices',
      hint: 'Divide the A values, then subtract the powers of ten.',
    },
    {
      id: 'psa-q3',
      type: 'numeric-entry',
      stem: 'Work out (3 x 10^5) + (4 x 10^5). Give your answer as the A value only (a number between 1 and 10).',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'The powers of ten already match, so just add the A values.',
    },
    {
      id: 'psa-q4',
      type: 'multiple-choice',
      stem: 'Work out (5 x 10^8) - (2 x 10^8) and give the answer in standard form.',
      tier: 'core',
      options: ['7 x 10^8', '3 x 10^16', '3 x 10^0', '3 x 10^8'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The powers match, so just subtract the A values.',
    },
    {
      id: 'psa-q5',
      type: 'numeric-entry',
      stem: 'Work out (6 x 10^4) x (2 x 10^3). Enter the power of ten in your answer (the value of n).',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      misconceptionId: 'psa-mis-multiply-indices',
      hint: 'When you multiply standard-form numbers, you add the powers of ten: 4 + 3.',
    },
    {
      id: 'psa-q6',
      type: 'numeric-entry',
      stem: 'Work out (9 x 10^10) divided by (3 x 10^4). Enter the power of ten in your answer (the value of n).',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      misconceptionId: 'psa-mis-divide-indices',
      hint: 'When you divide standard-form numbers, you subtract the powers of ten: 10 - 4.',
    },
    {
      id: 'psa-q7',
      type: 'drag-order',
      stem: 'Place these standard-form numbers in order from smallest to largest.',
      tier: 'core',
      items: ['3 x 10^5', '9 x 10^4', '2 x 10^6', '4 x 10^5'],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
      misconceptionId: 'psa-mis-compare-by-a',
      hint: 'Compare the powers of ten first; only compare the A values if the powers are the same.',
    },
    {
      id: 'psa-q8',
      type: 'multiple-choice',
      stem: 'Work out (5 x 10^3) x (4 x 10^6) and give the answer in standard form.',
      tier: 'confident',
      options: ['1.2 x 10^10', '20 x 10^9', '2 x 10^9', '2 x 10^10'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'psa-mis-no-normalise',
      hint: 'After multiplying the A values you get 20. That is bigger than 10, so normalise.',
    },
    {
      id: 'psa-q9',
      type: 'multiple-choice',
      stem: 'Work out (3 x 10^5) divided by (6 x 10^2) and give the answer in standard form.',
      tier: 'confident',
      options: ['5 x 10^2', '0.5 x 10^3', '5 x 10^3', '2 x 10^3'],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'psa-mis-no-normalise',
      hint: 'After dividing you get 0.5. That is less than 1, so normalise: multiply A by 10 and reduce the power by 1.',
    },
    {
      id: 'psa-q10',
      type: 'numeric-entry',
      stem: 'Work out (3 x 10^5) + (4 x 10^4). Enter the A value of your answer in standard form (give your answer to one decimal place).',
      tier: 'confident',
      correctAnswer: 3.4,
      tolerance: 0.05,
      xpValue: 15,
      misconceptionId: 'psa-mis-direct-sum',
      hint: 'Rewrite 4 x 10^4 with a power of 10^5: it becomes 0.4 x 10^5. Then add the A values.',
    },
    {
      id: 'psa-q11',
      type: 'numeric-entry',
      stem: 'Work out (7 x 10^6) + (8 x 10^6). Enter the power of ten in your answer once it is in proper standard form.',
      tier: 'confident',
      correctAnswer: 7,
      xpValue: 15,
      misconceptionId: 'psa-mis-no-normalise',
      hint: 'You get 15 x 10^6, but 15 is too big. Rewrite as 1.5 x 10 to bump the power.',
    },
    {
      id: 'psa-q12',
      type: 'multiple-choice',
      stem: 'A scientific calculator shows the result 6.2 E 8 after a calculation. What is this as an ordinary number?',
      tier: 'confident',
      options: ['62,000,000', '6.28', '620,000,000', '6,200,000,000'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'psa-mis-e-as-base',
      hint: 'The E means times 10 to the power. So 6.2 E 8 is 6.2 x 10 to the power 8.',
    },
    {
      id: 'psa-q13',
      type: 'spot-misconception',
      stem: 'A pupil works out (2 x 10^4) x (3 x 10^5) and writes 6 x 10^20. Their reasoning was: multiply the A values to get 6, multiply the powers to get 4 x 5 = 20.',
      tier: 'confident',
      statements: [
        {
          text: 'The reasoning is sound. When standard-form numbers are multiplied, you multiply the A values and multiply the powers of ten.',
          isMisconception: true,
        },
        {
          text: 'The reasoning is not sound. When you multiply 10^4 by 10^5, you add the powers, not multiply them. The correct answer is 6 x 10^9.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psa-mis-multiply-indices',
    },
    {
      id: 'psa-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step in this worked solution. Work out (4 x 10^9) divided by (8 x 10^3) and give the answer in standard form.',
      tier: 'confident',
      steps: [
        'Separate the A values and the powers of ten: (4 / 8) x (10^9 / 10^3).',
        'Divide the A values: 4 / 8 = 0.5.',
        'Subtract the powers of ten: 10^9 / 10^3 = 10^6.',
        null,
        'A is 0.5, which is less than 1. Multiply A by 10 and reduce the power by 1: 5 x 10^5.',
        'The final answer in standard form is 5 x 10^5.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Combine the two parts to get the unnormalised answer: 0.5 x 10^6.',
      xpValue: 15,
    },
    {
      id: 'psa-q15',
      type: 'multiple-choice',
      stem: 'The mass of the Earth is about 6 x 10^24 kg and the mass of the Moon is about 7 x 10^22 kg. About how many times heavier is the Earth than the Moon? Give the answer in standard form (1 sf).',
      tier: 'challenge',
      options: ['8.6 x 10^46', '8.6 x 10^1', '4.2 x 10^2', '8.6 x 10^2'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'You need a division. (6 x 10^24) divided by (7 x 10^22). Divide the A values, then subtract the powers.',
    },
    {
      id: 'psa-q16',
      type: 'numeric-entry',
      stem: 'A bacterium has a mass of 9.5 x 10^-13 kg. A culture grows to contain 4 x 10^9 bacteria. What is the total mass in kg, given as the A value of your answer in standard form?',
      tier: 'challenge',
      correctAnswer: 3.8,
      tolerance: 0.05,
      xpValue: 25,
      hint: 'Multiply the masses: (9.5 x 10^-13) x (4 x 10^9). 9.5 x 4 = 38, so the A value normalises down from 38.',
    },
    {
      id: 'psa-q17',
      type: 'multiple-choice',
      stem: 'In one year a UK water company supplies 7 x 10^11 litres in summer and 4 x 10^10 litres in winter. What is the total in standard form?',
      tier: 'challenge',
      options: ['1.1 x 10^21', '7.4 x 10^11', '11 x 10^21', '7.4 x 10^21'],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'psa-mis-direct-sum',
      hint: 'Make the powers match first. Rewrite 4 x 10^10 as 0.4 x 10^11, then add the A values.',
    },
    {
      id: 'psa-q18',
      type: 'numeric-entry',
      stem: 'Light travels at 3 x 10^8 metres per second. The Sun is about 1.5 x 10^11 metres from Earth. How many seconds does sunlight take to reach Earth? Enter the answer to the nearest whole number of seconds.',
      tier: 'challenge',
      correctAnswer: 500,
      xpValue: 25,
      hint: 'Time equals distance divided by speed. Work out (1.5 x 10^11) divided by (3 x 10^8).',
    },
    {
      id: 'psa-q19',
      type: 'spot-misconception',
      stem: 'A pupil works out (4 x 10^3) - (5 x 10^4) and refuses to give a negative answer, so they swap the order to get 5 x 10^4 - 4 x 10^3 = 4.6 x 10^4. They claim a standard-form answer cannot be negative.',
      tier: 'challenge',
      statements: [
        {
          text: 'The pupil is right. Standard-form values cannot be negative, so the order can be swapped to keep the answer positive.',
          isMisconception: true,
        },
        {
          text: 'The pupil is not right. A standard-form answer can be negative. The minus sign sits in front of A, so the correct answer is -4.6 x 10^4.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'psa-mis-cannot-be-negative',
    },
    {
      id: 'psa-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. The UK has about 6.7 x 10^7 people. The total NHS spend in one year is about 1.7 x 10^11 pounds. Estimate the spend per person in pounds, in standard form.',
      tier: 'challenge',
      steps: [
        'The spend per person is total spend divided by population.',
        'Set up the calculation: (1.7 x 10^11) divided by (6.7 x 10^7).',
        'Divide the A values: 1.7 / 6.7 = 0.254 (to 3 dp).',
        null,
        'Combine the parts: 0.254 x 10^4.',
        'Normalise: 0.254 x 10^4 = 2.54 x 10^3 pounds per person.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Subtract the powers of ten: 10^11 / 10^7 = 10^4.',
      xpValue: 25,
    },
    {
      id: 'psa-q21',
      type: 'multiple-choice',
      stem: 'A pupil types (3.4 x 10^5) + (2.6 x 10^5) into a calculator and the screen shows 6 E 5. What is the value in ordinary form?',
      tier: 'confident',
      options: ['65', '6,000,000', '60,000', '600,000'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'psa-mis-e-as-base',
      hint: 'The E means times 10 to the power. So 6 E 5 is 6 x 10 to the power 5.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Maths Foundation tier examiner report November 2022, Paper 1 standard-form question
    {
      id: 'psa-mis-multiply-indices',
      description:
        'When multiplying standard-form numbers, multiplying the powers of ten together instead of adding them.',
      triggerAnswer: 'multiply-indices',
      correction:
        'When you multiply 10 to the power m by 10 to the power n, you add the powers to get 10 to the power m plus n. You do not multiply the powers.',
      reExplanation:
        '10 to the power 4 means 10 x 10 x 10 x 10. 10 to the power 5 means 10 x 10 x 10 x 10 x 10. Putting them together gives nine tens multiplied, so 10 to the power 9. The rule is add the powers, not multiply them.',
    },
    // Source: Edexcel GCSE Maths examiner report June 2019, Paper 2H Q4 on standard form division
    {
      id: 'psa-mis-divide-indices',
      description:
        'When dividing standard-form numbers, dividing the powers of ten instead of subtracting them.',
      triggerAnswer: 'divide-indices',
      correction:
        'When you divide 10 to the power m by 10 to the power n, you subtract the powers to get 10 to the power m minus n. You do not divide the powers.',
      reExplanation:
        '10 to the power 7 divided by 10 to the power 3 cancels three of the tens on top with the three on the bottom. That leaves four tens multiplied, so 10 to the power 4. The rule is subtract the powers.',
    },
    // Source: CGP GCSE Maths AQA Workbook Higher Tier p.18 Common mistake box on standard form
    {
      id: 'psa-mis-no-normalise',
      description:
        'Leaving the answer with an A value that is at least 10 or less than 1, so it is not in proper standard form.',
      triggerAnswer: 'no-normalise',
      correction:
        'In standard form, A must sit between 1 (inclusive) and 10 (exclusive). If A drifts out of range, shift one place and adjust the power of ten by 1 to match.',
      reExplanation:
        '20 x 10 to the 9 is not in standard form because 20 is bigger than 10. Rewrite 20 as 2 x 10, then combine: 2 x 10 x 10 to the 9 = 2 x 10 to the 10. The same idea works for 0.5 x 10 to the 3, which becomes 5 x 10 to the 2.',
    },
    // Source: OCR GCSE Mathematics J560 examiner report June 2022, Foundation tier standard-form question
    {
      id: 'psa-mis-direct-sum',
      description:
        'When adding or subtracting standard-form numbers, adding the A values and the powers of ten directly without first matching the powers.',
      triggerAnswer: 'direct-sum',
      correction:
        'For addition or subtraction, the powers of ten must match first. Only then do you add or subtract the A values; the shared power of ten stays the same.',
      reExplanation:
        '3 x 10 to the 5 plus 4 x 10 to the 4 is not 7 x 10 to the 9. Rewrite 4 x 10 to the 4 as 0.4 x 10 to the 5 so both have the same power. Then add the A values: 3 plus 0.4 is 3.4. The answer is 3.4 x 10 to the 5.',
    },
    // Source: CGP KS3 Maths Year 9 Study Guide p.24 Common mistake box on calculator displays
    {
      id: 'psa-mis-e-as-base',
      description:
        'Reading the calculator display A E n as if E were a base or a letter to be multiplied, rather than a power-of-ten marker.',
      triggerAnswer: 'e-as-base',
      correction:
        'On a calculator the E means times 10 to the power. So 3.4 E 5 is read as 3.4 x 10 to the power 5, not 3.4 multiplied by E multiplied by 5.',
      reExplanation:
        '6 E 5 is the calculator shorthand for 6 x 10 to the power 5, which is 600,000. The E sits between A and the exponent the same way the letter x in standard form sits between A and 10. The E is not a number itself.',
    },
    // Source: Bond 11+ Maths Assessment Papers Stretch Book 1 Q12, on negative results in standard form
    {
      id: 'psa-mis-cannot-be-negative',
      description:
        'Believing that a standard-form answer cannot be negative, so swapping subtractions or dropping the minus sign when the smaller number is on top.',
      triggerAnswer: 'cannot-be-negative',
      correction:
        'A standard-form number can be negative. The minus sign sits in front of A, while A still sits between 1 and 10 in size. The rest of the rules stay the same.',
      reExplanation:
        '4 x 10 to the 3 minus 5 x 10 to the 4 should be tackled by matching powers first: 0.4 x 10 to the 4 minus 5 x 10 to the 4. The A values give 0.4 minus 5, which is minus 4.6. The answer is minus 4.6 x 10 to the 4.',
    },
    // Source: AQA GCSE Maths Higher tier examiner report June 2023, Paper 1 standard-form question on ranking
    {
      id: 'psa-mis-compare-by-a',
      description:
        'When comparing standard-form numbers, looking only at the A value and ignoring the power of ten.',
      triggerAnswer: 'compare-by-a',
      correction:
        'When comparing standard-form numbers, the power of ten decides the size first. Only compare A values when the powers are the same.',
      reExplanation:
        '9 x 10 to the 4 looks bigger than 2 x 10 to the 6 because 9 is bigger than 2. In fact 9 x 10 to the 4 is 90,000 and 2 x 10 to the 6 is 2,000,000. The bigger power of ten wins, so 2 x 10 to the 6 is the larger number.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const placeValueStandardFormArithmeticZoneNodes = [
  placeValueStandardFormArithmetic,
]
