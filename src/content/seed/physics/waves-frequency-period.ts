import type { SkillNode } from '@/types/content'

const FORMULA_TRIANGLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The T = 1 / f relationship: period and frequency are reciprocals</text>

    <!-- Left box: period -->
    <rect x="80" y="80" width="240" height="180" />
    <text x="200" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Period T</text>
    <text x="200" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">time for one full</text>
    <text x="200" y="165" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">oscillation</text>
    <text x="200" y="200" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">measured in seconds (s)</text>
    <text x="200" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">example: a playground swing</text>
    <text x="200" y="248" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">with T = 2 s</text>

    <!-- Arrows linking the boxes -->
    <line x1="330" y1="160" x2="470" y2="160" stroke-width="2" />
    <polygon points="462,152 478,160 462,168" fill="currentColor" stroke="none" />
    <text x="400" y="150" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 1 / T</text>
    <line x1="470" y1="190" x2="330" y2="190" stroke-width="2" />
    <polygon points="338,182 322,190 338,198" fill="currentColor" stroke="none" />
    <text x="400" y="210" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">T = 1 / f</text>

    <!-- Right box: frequency -->
    <rect x="480" y="80" width="240" height="180" />
    <text x="600" y="115" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Frequency f</text>
    <text x="600" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">number of full oscillations</text>
    <text x="600" y="165" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">per second</text>
    <text x="600" y="200" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">measured in hertz (Hz)</text>
    <text x="600" y="230" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">example: that same swing</text>
    <text x="600" y="248" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">at f = 0.5 Hz</text>

    <!-- Bottom worked check -->
    <text x="400" y="305" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Check: T x f = 1 always</text>
    <text x="400" y="330" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">2 s x 0.5 Hz = 1, so the pair is consistent</text>
    <text x="400" y="360" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">If T is small, f is large; if T is large, f is small.</text>
  </g>
`

const ONE_SECOND_WINDOW_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Counting cycles inside one second: f in Hz</text>

    <!-- One second window markers -->
    <line x1="60" y1="100" x2="60" y2="320" stroke-width="2" />
    <line x1="740" y1="100" x2="740" y2="320" stroke-width="2" />
    <text x="60" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">t = 0 s</text>
    <text x="740" y="350" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">t = 1 s</text>

    <!-- Row 1: 1 Hz (one cycle in the window) -->
    <line x1="60" y1="130" x2="740" y2="130" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 130 Q 230 70 400 130 T 740 130" stroke-width="3" />
    <text x="50" y="135" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 1 Hz</text>
    <text x="760" y="135" text-anchor="start" font-size="12" stroke="none" fill="currentColor">T = 1 s</text>

    <!-- Row 2: 2 Hz (two cycles in the window) -->
    <line x1="60" y1="210" x2="740" y2="210" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 210 Q 145 160 230 210 T 400 210" stroke-width="3" />
    <path d="M 400 210 Q 485 160 570 210 T 740 210" stroke-width="3" />
    <text x="50" y="215" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 2 Hz</text>
    <text x="760" y="215" text-anchor="start" font-size="12" stroke="none" fill="currentColor">T = 0.5 s</text>

    <!-- Row 3: 4 Hz (four cycles in the window) -->
    <line x1="60" y1="290" x2="740" y2="290" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 290 Q 102 260 145 290 T 230 290 T 315 290 T 400 290" stroke-width="3" />
    <path d="M 400 290 Q 442 260 485 290 T 570 290 T 655 290 T 740 290" stroke-width="3" />
    <text x="50" y="295" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 4 Hz</text>
    <text x="760" y="295" text-anchor="start" font-size="12" stroke="none" fill="currentColor">T = 0.25 s</text>
  </g>
`

const UK_EXAMPLES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Frequency and period in everyday UK contexts</text>

    <!-- Pendulum clock -->
    <text x="160" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Pendulum clock</text>
    <line x1="160" y1="100" x2="160" y2="200" stroke-width="2" />
    <circle cx="160" cy="215" r="18" fill="currentColor" />
    <text x="160" y="260" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">tick every 1 s</text>
    <text x="160" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">T = 1 s, f = 1 Hz</text>

    <!-- Playground swing -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Playground swing</text>
    <line x1="360" y1="100" x2="360" y2="200" stroke-width="2" />
    <line x1="440" y1="100" x2="440" y2="200" stroke-width="2" />
    <rect x="350" y="200" width="100" height="14" fill="currentColor" />
    <text x="400" y="260" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">one swing every 2 s</text>
    <text x="400" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">T = 2 s, f = 0.5 Hz</text>

    <!-- UK mains -->
    <text x="640" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">UK mains supply</text>
    <path d="M 580 160 Q 600 120 620 160 T 660 160 T 700 160" stroke-width="3" />
    <text x="640" y="200" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">50 cycles per second</text>
    <text x="640" y="260" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 50 Hz</text>
    <text x="640" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">T = 1 / 50 = 0.02 s</text>

    <!-- Note -->
    <text x="400" y="350" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Small period, large frequency. Large period, small frequency.</text>
    <text x="400" y="372" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">T = 1 / f works for every example here.</text>
  </g>
`

export const wavesFrequencyPeriod: SkillNode = {
  id: 'physics-waves-frequency-period',
  title: 'Frequency and Period',
  description:
    'Period T is the time for one full oscillation, measured in seconds. Frequency f is the number of full oscillations per second, measured in hertz (Hz). The two quantities are reciprocals, linked by T = 1 / f (and so f = 1 / T). A playground swing with T = 2 s has f = 0.5 Hz, while UK mains at 50 Hz has T = 0.02 s, the same as 20 ms. By the end of this node, you can flip between period and frequency for everyday UK contexts and pick the right unit each time.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Frequencies of sound waves, measured in hertz (Hz); period as time for one oscillation.',
    awardingBodies: {
      aqa: '4.6.1.1 Amplitude, wavelength, frequency and period of a wave; period T = 1/f (GCSE Physics 8463)',
      edexcel: 'Topic 4.1 Waves; frequency, period and the relationship T = 1/f (GCSE Physics 1PH0)',
      ocr: 'P5.1 Wave behaviour; frequency and period, T = 1/f (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'fp-scene-link',
      title: 'Period and Frequency: a reciprocal pair',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how period T and frequency f are linked by T = 1 / f.',
      data: {
        viewBox: '0 0 800 400',
        svg: FORMULA_TRIANGLE_SVG,
        hotspots: [
          {
            id: 'fp-link-period',
            x: 25,
            y: 35,
            label: 'Period T in seconds',
            description:
              'Period T is the time for a single full oscillation, measured in seconds. A playground swing that takes 2 s to go forwards and back to the same starting point has T = 2 s.',
          },
          {
            id: 'fp-link-frequency',
            x: 75,
            y: 35,
            label: 'Frequency f in hertz',
            description:
              'Frequency f is the number of full oscillations per second. The unit is the hertz, written Hz. The same swing returning every 2 s completes half an oscillation each second, so f = 0.5 Hz.',
          },
          {
            id: 'fp-link-rule',
            x: 50,
            y: 52,
            label: 'Reciprocal rule: T = 1 / f',
            description:
              'Multiply period by frequency and you always get 1. So T = 1 / f and f = 1 / T. If a value has units of seconds, its reciprocal has units of hertz, and vice versa.',
          },
          {
            id: 'fp-link-check',
            x: 50,
            y: 82,
            label: 'Sense check',
            description:
              'If T is small (a quick oscillation), f is large; if T is large (a slow oscillation), f is small. Use this to sense-check any answer before you write it down.',
          },
        ],
      },
    },
    {
      id: 'fp-scene-window',
      title: 'Counting cycles in a one second window',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to count how many full cycles fit in a single second for each frequency.',
      data: {
        viewBox: '0 0 800 400',
        svg: ONE_SECOND_WINDOW_SVG,
        hotspots: [
          {
            id: 'fp-window-1hz',
            x: 50,
            y: 28,
            label: 'f = 1 Hz means one cycle in one second',
            description:
              'A frequency of 1 Hz means one full oscillation takes the whole second. So T = 1 s. One cycle fits inside the one second window.',
          },
          {
            id: 'fp-window-2hz',
            x: 50,
            y: 50,
            label: 'f = 2 Hz means two cycles in one second',
            description:
              'A frequency of 2 Hz means two full oscillations happen every second. Each one takes half a second, so T = 1 / 2 = 0.5 s. Two complete cycles fit inside the same window.',
          },
          {
            id: 'fp-window-4hz',
            x: 50,
            y: 72,
            label: 'f = 4 Hz means four cycles in one second',
            description:
              'At 4 Hz, four full cycles fit in one second. Each one takes a quarter of a second, so T = 1 / 4 = 0.25 s. Higher frequency means a shorter period and a more rapid oscillation.',
          },
        ],
      },
    },
    {
      id: 'fp-scene-uk',
      title: 'UK contexts: clock, swing, mains',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read T and f for everyday UK oscillations.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_EXAMPLES_SVG,
        hotspots: [
          {
            id: 'fp-uk-clock',
            x: 20,
            y: 28,
            label: 'Pendulum clock: T = 1 s, f = 1 Hz',
            description:
              'A grandfather clock pendulum is sized so that one full swing takes exactly 1 s, giving the familiar tick. T = 1 s and f = 1 / 1 = 1 Hz. Larger pendulums oscillate more slowly.',
          },
          {
            id: 'fp-uk-swing',
            x: 50,
            y: 28,
            label: 'Playground swing: T = 2 s, f = 0.5 Hz',
            description:
              'A typical playground swing has a full cycle of about 2 s. So T = 2 s and f = 1 / 2 = 0.5 Hz, half an oscillation per second.',
          },
          {
            id: 'fp-uk-mains',
            x: 80,
            y: 28,
            label: 'UK mains: f = 50 Hz, T = 0.02 s',
            description:
              'UK mains electricity oscillates 50 times per second, so f = 50 Hz. The period is T = 1 / 50 = 0.02 s, which is the same as 20 ms. Each cycle is over almost as soon as it starts.',
          },
          {
            id: 'fp-uk-rule',
            x: 50,
            y: 85,
            label: 'The pattern: small T means large f',
            description:
              'Read across the three examples: as T drops from 2 s to 1 s to 0.02 s, f rises from 0.5 Hz to 1 Hz to 50 Hz. The product T x f always equals 1.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fp-worked-1',
      title: 'Find f from T: a playground swing with T = 2 s',
      steps: [
        {
          explanation:
            'Set out the situation. A swing in a Leeds playground takes 2 s to complete one full cycle. We want its frequency.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'T = 2 s, f = ?',
        },
        {
          explanation:
            'Pick the right form. We want f, so use f = 1 / T.',
          maths: 'f = 1 / T',
        },
        {
          explanation: 'Substitute the number.',
          maths: 'f = 1 / 2',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'f = 0.5 Hz',
        },
        {
          explanation:
            'State the answer with the unit. The swing has a frequency of 0.5 Hz, which means half an oscillation per second. A quick sense check: a slow oscillation gives a small frequency, and 0.5 Hz is small, so the answer is sensible.',
        },
      ],
    },
    {
      id: 'fp-worked-2',
      title: 'Find T from f: UK mains at f = 50 Hz',
      steps: [
        {
          explanation:
            'Set out the situation. UK mains electricity oscillates at 50 Hz. We want the period, the time for a single full cycle.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'f = 50 Hz, T = ?',
        },
        {
          explanation:
            'Pick the right form. We want T, so use T = 1 / f.',
          maths: 'T = 1 / f',
        },
        {
          explanation: 'Substitute the number.',
          maths: 'T = 1 / 50',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'T = 0.02 s',
        },
        {
          explanation:
            'State the answer with the unit. The period of UK mains is 0.02 s, which is the same as 20 milliseconds. Sense check: a high frequency should give a tiny period, and 0.02 s is tiny, so the answer is sensible.',
        },
      ],
    },
    {
      id: 'fp-worked-3',
      title: 'Find f from a count: 8 oscillations in 4 s',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil times a small pendulum in a Bristol classroom and counts 8 full oscillations taking 4 s in total. We want the frequency.',
        },
        {
          explanation: 'Find T first by sharing the total time across the cycles.',
          maths: 'T = 4 / 8 = 0.5 s',
        },
        {
          explanation:
            'Now flip to get the frequency.',
          maths: 'f = 1 / T = 1 / 0.5',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'f = 2 Hz',
        },
        {
          explanation:
            'State the answer with the unit. The pendulum has a frequency of 2 Hz, meaning two full oscillations every second. Sense check: 8 cycles in 4 s does sit at 2 per second, so the answer matches.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fp-q1',
      type: 'multiple-choice',
      stem: 'Which unit is used for frequency?',
      tier: 'core',
      options: [
        'seconds (s)',
        'hertz (Hz)',
        'metres (m)',
        'newtons (N)',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Frequency is the number of full oscillations per second; its unit is named after Heinrich Hertz.',
    },
    {
      id: 'fp-q2',
      type: 'multiple-choice',
      stem: 'Which statement best describes the period T of an oscillation?',
      tier: 'core',
      options: [
        'The number of full oscillations per second.',
        'The height of the wave above the rest line.',
        'The time taken for one full oscillation.',
        'The distance between two crests.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fp-mis-period-vs-frequency',
      hint: 'Period is a time, measured in seconds. It is the duration of a single complete cycle.',
    },
    {
      id: 'fp-q3',
      type: 'numeric-entry',
      stem: 'A swing has a period of T = 2 s. What is its frequency, in Hz?',
      tier: 'core',
      correctAnswer: 0.5,
      unit: 'Hz',
      xpValue: 10,
      hint: 'f = 1 / T = 1 / 2.',
    },
    {
      id: 'fp-q4',
      type: 'multiple-choice',
      stem: 'Which equation correctly links period T and frequency f?',
      tier: 'core',
      options: [
        'T = f',
        'T = f squared',
        'T = f + 1',
        'T = 1 / f',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fp-mis-wrong-formula',
      hint: 'Period and frequency are reciprocals: multiply them together and you always get 1.',
    },
    {
      id: 'fp-q5',
      type: 'multiple-choice',
      stem: 'UK mains electricity oscillates at f = 50 Hz. What does this mean?',
      tier: 'core',
      options: [
        'It completes one oscillation every 50 s.',
        'Its period is 50 s.',
        'It completes 50 full oscillations every second.',
        'Its wavelength is 50 m.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fp-mis-unit-confusion',
      hint: 'Hertz means cycles per second. So f = 50 Hz is 50 cycles each second.',
    },
    {
      id: 'fp-q6',
      type: 'numeric-entry',
      stem: 'A pendulum clock ticks once per second, so its pendulum has a frequency of 1 Hz. What is its period, in seconds?',
      tier: 'core',
      correctAnswer: 1,
      unit: 's',
      xpValue: 10,
      hint: 'T = 1 / f = 1 / 1.',
    },
    {
      id: 'fp-q7',
      type: 'multiple-choice',
      stem: 'A pupil in a Cardiff lab counts a small pendulum completing 6 full oscillations in 3 s. What is its frequency?',
      tier: 'confident',
      options: [
        '0.5 Hz',
        '3 Hz',
        '2 Hz',
        '18 Hz',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fp-mis-half-cycle',
      hint: 'Frequency is cycles per second. 6 cycles in 3 s is the same as 2 cycles per second.',
    },
    {
      id: 'fp-q8',
      type: 'numeric-entry',
      stem: 'A speaker cone vibrates at f = 256 Hz, the frequency of middle C. What is its period, in seconds? Give your answer to 4 decimal places.',
      tier: 'confident',
      correctAnswer: 0.0039,
      tolerance: 0.0001,
      unit: 's',
      xpValue: 15,
      hint: 'T = 1 / f = 1 / 256. A calculator gives roughly 0.00391; rounded to 4 dp, that is 0.0039.',
    },
    {
      id: 'fp-q9',
      type: 'multiple-choice',
      stem: 'A loudspeaker vibrates at f = 100 Hz. Which value gives its period in seconds?',
      tier: 'confident',
      options: [
        '100 s, because T equals f.',
        '10 s, because T = f / 10.',
        '0.01 s, because T = 1 / f = 1 / 100.',
        '0.1 s, because T = 1 / square root of f.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fp-mis-wrong-formula',
      hint: 'T = 1 / f = 1 / 100.',
    },
    {
      id: 'fp-q10',
      type: 'multiple-choice',
      stem: 'Two pendulums hang side by side. Pendulum X has a period of 0.5 s; pendulum Y has a period of 2 s. Which pendulum has the higher frequency?',
      tier: 'confident',
      options: [
        'Pendulum X, because a shorter period means a higher frequency.',
        'Pendulum Y, because a longer period means a higher frequency.',
        'They have the same frequency, since both have a period.',
        'You cannot tell without the wavelength.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fp-mis-direct-proportion',
      hint: 'f = 1 / T. A small T gives a large f.',
    },
    {
      id: 'fp-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes: "The period of UK mains is 50 s, because its frequency is 50 Hz." Which sentence corrects this?',
      tier: 'confident',
      options: [
        'They have used the wrong unit for period; it should be 50 Hz, not 50 s.',
        'They are right; period and frequency share the same numerical value.',
        'The period of UK mains is 100 s.',
        'They have multiplied instead of dividing; the period is T = 1 / 50 = 0.02 s.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fp-mis-wrong-formula',
      hint: 'T = 1 / f, not T = f. Divide 1 by the frequency in hertz.',
    },
    {
      id: 'fp-q12',
      type: 'numeric-entry',
      stem: 'A swing in a Manchester park completes 5 full oscillations in 10 s. What is its frequency, in Hz?',
      tier: 'confident',
      correctAnswer: 0.5,
      unit: 'Hz',
      xpValue: 15,
      hint: 'Frequency is cycles per second: 5 cycles in 10 s is 0.5 cycles per second.',
    },
    {
      id: 'fp-q13',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding the frequency of a swing from a count of cycles and a stopwatch reading.',
      tier: 'confident',
      items: [
        'Substitute the values: f = 1 / T.',
        'State the answer in Hz, with the unit.',
        'Record the total time in seconds and the number of full oscillations counted.',
        'Find the period: T = total time / number of oscillations.',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 15,
      hint: 'Record, divide for T, flip to f, then state the answer with the unit.',
    },
    {
      id: 'fp-q14',
      type: 'spot-misconception',
      stem: 'Aisha is shown UK mains at f = 50 Hz and a speaker at f = 100 Hz.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "The speaker has a longer period than UK mains, because 100 Hz is bigger than 50 Hz." This is wrong; a larger frequency means a shorter period.',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "The speaker has a shorter period than UK mains, because T = 1 / f, so a bigger f gives a smaller T." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fp-mis-direct-proportion',
    },
    {
      id: 'fp-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the period of UK mains at f = 50 Hz.',
      tier: 'challenge',
      steps: [
        'Write the data: f = 50 Hz, T = ?',
        'Pick the right form of the relationship: T = 1 / f.',
        null,
        'Evaluate the arithmetic: T = 0.02 s.',
        'State the answer with a unit: the period of UK mains is 0.02 s, the same as 20 ms. The small period is sensible because 50 cycles must fit into one second.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the frequency in hertz: T = 1 / 50.',
      xpValue: 20,
    },
    {
      id: 'fp-q17',
      type: 'multiple-choice',
      stem: 'A doctor times a patient\'s pulse and counts 72 beats in 60 s. What is the frequency of the pulse, in Hz?',
      tier: 'challenge',
      options: [
        '0.83 Hz (60 divided by 72)',
        '1.2 Hz (72 divided by 60)',
        '72 Hz (the count itself)',
        '4320 Hz (multiplied 72 by 60)',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'fp-mis-wrong-formula',
      hint: 'Frequency is cycles per second: 72 cycles in 60 s gives 72 / 60.',
    },
    {
      id: 'fp-q18',
      type: 'numeric-entry',
      stem: 'A bat\'s ultrasonic call has a frequency of 40 000 Hz (40 kHz). What is its period, in microseconds? (1 microsecond = 0.000001 s.) Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 25,
      unit: 'microseconds',
      xpValue: 20,
      misconceptionId: 'fp-mis-mixed-units',
      hint: 'T = 1 / f = 1 / 40000 = 0.000025 s. Multiply by 1 000 000 to convert seconds to microseconds.',
    },
    {
      id: 'fp-q19',
      type: 'spot-misconception',
      stem: 'James is told that a piano string has T = 0.004 s. He works out f = 1 / 0.004 = 250 Hz.',
      tier: 'challenge',
      statements: [
        {
          text: 'James says: "If I now halve the period to T = 0.002 s, the frequency must also halve to 125 Hz, because halving one thing halves the other." This is wrong; the two are reciprocals, not directly proportional.',
          isMisconception: true,
        },
        {
          text: 'James says: "If I now halve the period to T = 0.002 s, the frequency must double to 500 Hz, because f = 1 / T, and a smaller T gives a larger f." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fp-mis-direct-proportion',
    },
    {
      id: 'fp-q20',
      type: 'numeric-entry',
      stem: 'A guitar string vibrates 880 times in 4 s. What is the frequency of the string, in Hz?',
      tier: 'challenge',
      correctAnswer: 220,
      unit: 'Hz',
      xpValue: 20,
      hint: 'Frequency = cycles per second = 880 / 4.',
    },
    {
      id: 'fp-q21',
      type: 'numeric-entry',
      stem: 'A swing in a Sheffield park has a frequency of 0.4 Hz. What is its period, in seconds?',
      tier: 'challenge',
      correctAnswer: 2.5,
      unit: 's',
      xpValue: 20,
      hint: 'T = 1 / f = 1 / 0.4.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates swapped period and frequency or gave a frequency in seconds.
    {
      id: 'fp-mis-period-vs-frequency',
      description:
        'Swapping period and frequency, or quoting a frequency in seconds and a period in hertz.',
      triggerAnswer: 'period-frequency-swap',
      correction:
        'Period T is a time, measured in seconds; frequency f is a rate, measured in hertz (Hz, cycles per second). They are reciprocals, not the same quantity.',
      reExplanation:
        'A swing with T = 2 s does NOT have f = 2 Hz. Use f = 1 / T = 1 / 2 = 0.5 Hz instead. Keep the units in front of you: if your answer has units of seconds, it is a period; if it has units of hertz, it is a frequency. Mixing the units is a sure sign you have swapped the labels.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates wrote T = f or T = f x 1 rather than T = 1 / f.
    {
      id: 'fp-mis-wrong-formula',
      description:
        'Using T = f or T = f x 1 (or multiplying instead of dividing) rather than T = 1 / f.',
      triggerAnswer: 'wrong-formula-operation',
      correction:
        'The link is reciprocal: T = 1 / f and f = 1 / T. Divide 1 by the other quantity; do not equate or multiply.',
      reExplanation:
        'For UK mains at f = 50 Hz, writing T = 50 would give 50 seconds per cycle, which is absurd. Use T = 1 / 50 = 0.02 s, the same as 20 ms. A quick check is that T x f should always equal 1; if it does not, you have used the wrong operation.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates said doubling the frequency doubles the period, treating them as in direct proportion.
    {
      id: 'fp-mis-direct-proportion',
      description:
        'Treating frequency and period as in direct proportion, so doubling one doubles the other, rather than as reciprocals.',
      triggerAnswer: 'direct-proportion',
      correction:
        'Frequency and period are in inverse (reciprocal) proportion. Doubling f halves T; halving f doubles T.',
      reExplanation:
        'A piano string with T = 0.004 s has f = 1 / 0.004 = 250 Hz. Halve the period to 0.002 s and the new frequency is 1 / 0.002 = 500 Hz, which is double the old one, not half. The product T x f always equals 1, so if T goes down, f must go up by the same factor.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, Paper 1F, candidates confused the hertz with seconds when labelling answers.
    {
      id: 'fp-mis-unit-confusion',
      description:
        'Labelling a period in hertz, or a frequency in seconds, mixing up the unit attached to each quantity.',
      triggerAnswer: 'unit-confusion',
      correction:
        'Period T is in seconds (s); frequency f is in hertz (Hz, which means cycles per second). Always copy the unit across from the formula T = 1 / f to your answer.',
      reExplanation:
        'A swing with one full cycle every 2 seconds has T = 2 s and f = 0.5 Hz. Writing T = 2 Hz or f = 0.5 s is a unit slip that makes no physical sense: 2 hertz would mean two cycles per second, the opposite of what was measured. Tag every number with its unit as soon as you write it down.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates counted half oscillations as full ones when reading a pendulum.
    {
      id: 'fp-mis-half-cycle',
      description:
        'Counting each pass through the rest line as one full oscillation, doubling the apparent frequency.',
      triggerAnswer: 'half-cycle-count',
      correction:
        'A full oscillation is a complete cycle: a swing must go forwards and back to the same starting point. Two passes through the rest line is one full oscillation.',
      reExplanation:
        'If a swing crosses the centre 10 times in 10 s, that is 5 full oscillations, not 10. So f = 5 / 10 = 0.5 Hz and T = 2 s. Counting one half-swing as a full one would give a frequency twice as big as the real value. Always count from a chosen start point back to that same point and direction.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates substituted a frequency in kHz directly into T = 1 / f without converting.
    {
      id: 'fp-mis-mixed-units',
      description:
        'Substituting a frequency in kilohertz (kHz) directly into T = 1 / f without converting to hertz first.',
      triggerAnswer: 'mixed-units',
      correction:
        'Convert kilohertz to hertz before substituting: 1 kHz = 1000 Hz. Mixing kHz into T = 1 / f gives an answer 1000 times too large.',
      reExplanation:
        'A bat call at 40 kHz needs converting: 40 kHz = 40 000 Hz. Then T = 1 / 40 000 = 0.000025 s, which is 25 microseconds. Using 40 directly gives T = 1 / 40 = 0.025 s, a thousand times too big. Always rewrite f in hertz before reaching for the reciprocal.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesFrequencyPeriodZoneNodes = [wavesFrequencyPeriod]
