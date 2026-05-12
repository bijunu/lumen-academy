import type { SkillNode } from '@/types/content'

const WAVE_EQUATION_TRIANGLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The v = f x λ triangle: cover what you want, read what is left</text>

    <!-- Outer triangle -->
    <polygon points="400,80 240,320 560,320" />
    <!-- Horizontal divider -->
    <line x1="280" y1="200" x2="520" y2="200" />
    <!-- Vertical divider in the lower half -->
    <line x1="400" y1="200" x2="400" y2="320" />

    <!-- v in the top half -->
    <text x="400" y="170" text-anchor="middle" font-size="46" font-weight="700" stroke="none" fill="currentColor">v</text>
    <!-- f in the bottom-left -->
    <text x="340" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">f</text>
    <!-- λ in the bottom-right -->
    <text x="460" y="280" text-anchor="middle" font-size="36" font-weight="700" stroke="none" fill="currentColor">λ</text>

    <!-- Side panel: cover v -->
    <text x="120" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover v:</text>
    <text x="120" y="145" font-size="14" stroke="none" fill="currentColor">read f x λ</text>
    <text x="120" y="165" font-size="14" stroke="none" fill="currentColor">so v = f x λ</text>

    <text x="120" y="210" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover f:</text>
    <text x="120" y="235" font-size="14" stroke="none" fill="currentColor">read v over λ</text>
    <text x="120" y="255" font-size="14" stroke="none" fill="currentColor">so f = v / λ</text>

    <text x="120" y="300" font-size="14" font-weight="700" stroke="none" fill="currentColor">Cover λ:</text>
    <text x="120" y="325" font-size="14" stroke="none" fill="currentColor">read v over f</text>
    <text x="120" y="345" font-size="14" stroke="none" fill="currentColor">so λ = v / f</text>

    <!-- Side panel right: units -->
    <text x="640" y="120" font-size="14" font-weight="700" stroke="none" fill="currentColor">Units:</text>
    <text x="640" y="145" font-size="14" stroke="none" fill="currentColor">v in m/s</text>
    <text x="640" y="165" font-size="14" stroke="none" fill="currentColor">f in hertz (Hz)</text>
    <text x="640" y="185" font-size="14" stroke="none" fill="currentColor">λ in metres (m)</text>
  </g>
`

const WAVE_EQUATION_DIAGRAM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two waves passing a marker each second: v = f x λ</text>

    <!-- Rest line -->
    <line x1="60" y1="180" x2="740" y2="180" stroke-dasharray="6,6" stroke-width="2" />
    <text x="60" y="175" text-anchor="start" font-size="12" stroke="none" fill="currentColor">rest line</text>

    <!-- Two full waves over a 1 second window -->
    <path d="M 60 180 Q 145 100 230 180 T 400 180" />
    <path d="M 400 180 Q 485 100 570 180 T 740 180" />

    <!-- 1 s window markers -->
    <line x1="60" y1="160" x2="60" y2="200" stroke-width="2" />
    <line x1="740" y1="160" x2="740" y2="200" stroke-width="2" />
    <text x="400" y="60" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">a 1 second window: 2 full waves pass, so f = 2 Hz</text>

    <!-- Wavelength bracket on the first wave -->
    <line x1="60" y1="90" x2="400" y2="90" stroke-width="2" />
    <polygon points="68,84 55,90 68,96" fill="currentColor" stroke="none" />
    <polygon points="392,84 405,90 392,96" fill="currentColor" stroke="none" />
    <text x="230" y="80" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">wavelength λ = 3 m</text>

    <!-- Speed arrow -->
    <line x1="200" y1="260" x2="600" y2="260" stroke-width="2" />
    <polygon points="592,253 605,260 592,267" fill="currentColor" stroke="none" />
    <text x="400" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">wave speed v = f x λ = 2 x 3 = 6 m/s</text>

    <!-- Worked numbers box -->
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">f = 2 Hz, λ = 3 m, so v = 6 m/s</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">always check the units before substituting</text>
  </g>
`

const WAVE_EQUATION_CONTEXTS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">UK examples of v = f x λ in everyday life</text>

    <!-- Left: BBC Radio 4 long-wave -->
    <text x="160" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">BBC Radio 4 long-wave</text>
    <rect x="60" y="95" width="200" height="100" stroke="currentColor" />
    <text x="160" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">λ = 1500 m</text>
    <text x="160" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">f = 198 kHz = 198 000 Hz</text>
    <text x="160" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v = 3 x 10^8 m/s</text>
    <text x="160" y="188" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(speed of light)</text>

    <!-- Middle: water ripples in a tray -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Ripple tank in a lab</text>
    <rect x="300" y="95" width="200" height="100" stroke="currentColor" />
    <text x="400" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">λ = 0.02 m</text>
    <text x="400" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">f = 15 Hz</text>
    <text x="400" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v = 0.30 m/s</text>
    <text x="400" y="188" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(slow water ripples)</text>

    <!-- Right: a singer's middle C -->
    <text x="640" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">A singer's note in air</text>
    <rect x="540" y="95" width="200" height="100" stroke="currentColor" />
    <text x="640" y="125" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">f = 256 Hz</text>
    <text x="640" y="145" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">λ ≈ 1.3 m</text>
    <text x="640" y="170" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">v ≈ 330 m/s</text>
    <text x="640" y="188" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(speed of sound in air)</text>

    <!-- Bottom note -->
    <text x="400" y="240" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">v = f x λ works for every type of wave</text>
    <text x="400" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Radio, water ripples, and sound all obey the same rule.</text>
    <text x="400" y="290" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Only the size of f, λ, and v changes.</text>
    <text x="400" y="320" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Always work in hertz, metres, and metres per second.</text>
  </g>
`

export const wavesWaveEquation: SkillNode = {
  id: 'physics-waves-wave-equation',
  title: 'The Wave Equation',
  description:
    'Use v = f x λ to link the speed, frequency, and wavelength of a wave. Wave speed v is in metres per second (m/s), frequency f is in hertz (Hz), and wavelength λ is in metres (m). Cover the letter you want on the formula triangle to read the form you need: v = f x λ, f = v / λ, or λ = v / f. Practise the rule with UK examples, such as a BBC Radio 4 long-wave signal at 1500 m, ripples in a school tray, and a singer holding a 256 Hz note. By the end of this node, you can substitute values correctly, rearrange the equation in either direction, and check that your answer has sensible units.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Frequencies of sound waves, measured in hertz (Hz); wavelength and frequency related to wave speed.',
    awardingBodies: {
      aqa: '4.6.1.2 Properties of waves; wave speed = frequency x wavelength, v = f λ (GCSE Physics 8463)',
      edexcel:
        'Topic 4.2 Wave equation, wave velocity = frequency x wavelength (GCSE Physics 1PH0)',
      ocr: 'P5.1 Wave behaviour; the wave equation v = f λ applied to sound and light (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'we-scene-triangle',
      title: 'The v = f x λ Formula Triangle',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what you read when you cover one letter of the triangle.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVE_EQUATION_TRIANGLE_SVG,
        hotspots: [
          {
            id: 'we-tri-v',
            x: 50,
            y: 35,
            label: 'Cover v: v = f x λ',
            description:
              'When you cover v, you see f and λ sitting side by side. They multiply, so v = f x λ. Use this form when you know the frequency and the wavelength and want the wave speed.',
          },
          {
            id: 'we-tri-f',
            x: 43,
            y: 65,
            label: 'Cover f: f = v / λ',
            description:
              'When you cover f, you see v on top and λ underneath. So f = v / λ. Use this form when you know the wave speed and the wavelength and want the frequency.',
          },
          {
            id: 'we-tri-lambda',
            x: 58,
            y: 65,
            label: 'Cover λ: λ = v / f',
            description:
              'When you cover λ, you see v on top and f underneath. So λ = v / f. Use this form when you know the wave speed and the frequency and want the wavelength.',
          },
          {
            id: 'we-tri-units',
            x: 82,
            y: 35,
            label: 'Units: m/s, Hz, m',
            description:
              'v is in metres per second (m/s), f is in hertz (Hz), and λ is in metres (m). Working in these base units keeps the calculation tidy. Convert kHz to Hz and cm to m before substituting.',
          },
        ],
      },
    },
    {
      id: 'we-scene-diagram',
      title: 'Two Waves Per Second: A Worked Picture',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the frequency, wavelength, and speed from the diagram.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVE_EQUATION_DIAGRAM_SVG,
        hotspots: [
          {
            id: 'we-diag-window',
            x: 50,
            y: 15,
            label: 'A 1 second window',
            description:
              'The whole strip represents exactly one second. Count how many full waves fit inside it. Two crests pass the right-hand marker, so the frequency is 2 Hz.',
          },
          {
            id: 'we-diag-wavelength',
            x: 30,
            y: 22,
            label: 'Wavelength λ = 3 m',
            description:
              'The double-headed arrow stretches from one crest to the next crest. That distance is the wavelength λ. In this picture λ = 3 m.',
          },
          {
            id: 'we-diag-speed',
            x: 50,
            y: 65,
            label: 'Speed v = 6 m/s',
            description:
              'Substitute into v = f x λ. With f = 2 Hz and λ = 3 m, the wave speed is v = 2 x 3 = 6 m/s. The wave crest travels 6 metres along the medium each second.',
          },
          {
            id: 'we-diag-units',
            x: 50,
            y: 88,
            label: 'Always check the units',
            description:
              'f must be in hertz, λ in metres, and v will then come out in metres per second. If λ is given in centimetres, divide by 100 to convert to metres before you multiply.',
          },
        ],
      },
    },
    {
      id: 'we-scene-contexts',
      title: 'UK Wave Examples: Radio, Ripples, and Sound',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare three very different waves that all obey v = f x λ.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVE_EQUATION_CONTEXTS_SVG,
        hotspots: [
          {
            id: 'we-ctx-radio',
            x: 20,
            y: 38,
            label: 'BBC Radio 4 long-wave: huge λ, big v',
            description:
              'The long-wave Radio 4 signal has a wavelength of about 1500 m and a frequency of 198 kHz, which is 198 000 Hz. Multiplying gives v ≈ 3 x 10^8 m/s, the speed of light. Radio waves travel through air at this enormous speed.',
          },
          {
            id: 'we-ctx-ripples',
            x: 50,
            y: 38,
            label: 'Ripples in a school tray: tiny λ, small v',
            description:
              'In a ripple tank, water waves might have a wavelength of 0.02 m (2 cm) and a frequency of 15 Hz. Then v = 0.02 x 15 = 0.30 m/s. Water ripples travel slowly because the medium is much heavier than air.',
          },
          {
            id: 'we-ctx-sound',
            x: 80,
            y: 38,
            label: "Singer's note in air: middling λ and v",
            description:
              'A singer holding a note at 256 Hz produces sound waves in air with a wavelength of about 1.3 m. Then v = 256 x 1.3 ≈ 330 m/s, the speed of sound in air. The same rule, very different numbers.',
          },
          {
            id: 'we-ctx-rule',
            x: 50,
            y: 75,
            label: 'One rule, many waves',
            description:
              'v = f x λ holds for radio waves, water ripples, sound waves, and every other wave. Only the values of f, λ, and v change. Once you know two of them, the third is fixed.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'we-worked-1',
      title: 'Find v: water waves at 5 Hz with λ = 0.4 m',
      steps: [
        {
          explanation:
            'Set out the situation. In a Newcastle school ripple tank, a vibrating bar makes water waves of frequency 5 Hz. The wavelength measured on the screen is 0.4 m. We want the speed of the water waves.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'f = 5 Hz, λ = 0.4 m, v = ?',
        },
        {
          explanation:
            'Pick the right form. We want v, so cover v on the triangle to read f x λ.',
          maths: 'v = f x λ',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'v = 5 x 0.4',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'v = 2.0 m/s',
        },
        {
          explanation:
            'State the answer with the unit. The water waves travel at 2.0 m/s. A quick sanity check: ripple-tank waves move at the gentle pace of a slow walk, and 2.0 m/s fits that picture.',
        },
      ],
    },
    {
      id: 'we-worked-2',
      title: 'Find λ: a 256 Hz singer in air, v = 330 m/s',
      steps: [
        {
          explanation:
            'Set out the situation. A choir singer in a Wells Cathedral rehearsal holds a steady note at 256 Hz. Sound in air travels at about 330 m/s. We want the wavelength of the note.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'f = 256 Hz, v = 330 m/s, λ = ?',
        },
        {
          explanation:
            'Pick the right form. We want λ, so cover λ on the triangle to read v over f.',
          maths: 'λ = v / f',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'λ = 330 / 256',
        },
        {
          explanation: 'Evaluate the arithmetic, rounded to 2 significant figures.',
          maths: 'λ ≈ 1.3 m',
        },
        {
          explanation:
            'State the answer with the unit. The wavelength is about 1.3 m. Sanity check: middle C in air has a wavelength a little longer than a metre, and 1.3 m matches the textbook figure.',
        },
      ],
    },
    {
      id: 'we-worked-3',
      title: 'Find f: a Channel ferry wake at 2.5 m/s with λ = 5 m',
      steps: [
        {
          explanation:
            'Set out the situation. A Dover to Calais ferry leaves a wake behind it. A pupil at the rail measures the wave speed as 2.5 m/s and the wavelength (crest to crest) as 5 m. We want the frequency of the wake waves.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'v = 2.5 m/s, λ = 5 m, f = ?',
        },
        {
          explanation:
            'Pick the right form. We want f, so cover f on the triangle to read v over λ.',
          maths: 'f = v / λ',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'f = 2.5 / 5',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'f = 0.5 Hz',
        },
        {
          explanation:
            'State the answer with the unit. The wake waves have a frequency of 0.5 Hz, meaning one full wave passes the rail every 2 seconds. Sanity check: a ferry wake makes lazy, well-spaced waves, and 0.5 Hz matches that rhythm.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'we-q1',
      type: 'multiple-choice',
      stem: 'Which equation links the speed v, the frequency f, and the wavelength λ of a wave?',
      tier: 'core',
      options: [
        'v = f x λ',
        'v = f + λ',
        'v = f / λ',
        'v = λ / f',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Cover v on the formula triangle. The two letters left side by side multiply.',
    },
    {
      id: 'we-q2',
      type: 'multiple-choice',
      stem: 'Which set of units matches v, f, and λ in the wave equation v = f x λ?',
      tier: 'core',
      options: [
        'v in hertz, f in metres, λ in m/s',
        'v in m/s, f in hertz (Hz), λ in metres (m)',
        'v in metres, f in m/s, λ in hertz',
        'v in joules, f in newtons, λ in seconds',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'we-mis-mixed-units',
      hint: 'Speed is in metres per second, frequency is in hertz, wavelength is in metres.',
    },
    {
      id: 'we-q3',
      type: 'numeric-entry',
      stem: 'In a school ripple tank, water waves have a frequency of 4 Hz and a wavelength of 0.5 m. What is the wave speed, in m/s?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'm/s',
      xpValue: 10,
      hint: 'v = f x λ = 4 x 0.5.',
    },
    {
      id: 'we-q4',
      type: 'multiple-choice',
      stem: 'A sound wave in air has a frequency of 200 Hz and a wavelength of 1.65 m. Which calculation gives the wave speed?',
      tier: 'core',
      options: [
        '200 + 1.65',
        '200 / 1.65',
        '1.65 / 200',
        '200 x 1.65',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'we-mis-wrong-formula',
      hint: 'v = f x λ. Multiply the frequency by the wavelength.',
    },
    {
      id: 'we-q5',
      type: 'multiple-choice',
      stem: 'Which form of the wave equation should you use to find the wavelength when you know the wave speed and the frequency?',
      tier: 'core',
      options: [
        'λ = v x f',
        'λ = f / v',
        'λ = v / f',
        'λ = v + f',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Cover λ on the triangle. Read v on top and f underneath.',
    },
    {
      id: 'we-q6',
      type: 'numeric-entry',
      stem: 'A wave travels at 6 m/s with a frequency of 3 Hz. What is its wavelength, in m?',
      tier: 'core',
      correctAnswer: 2,
      unit: 'm',
      xpValue: 10,
      hint: 'λ = v / f = 6 / 3.',
    },
    {
      id: 'we-q7',
      type: 'multiple-choice',
      stem: 'A wave has a wavelength of 2 m and a wave speed of 10 m/s. What is its frequency?',
      tier: 'core',
      options: [
        '20 Hz (multiplied v by λ)',
        '0.2 Hz (divided λ by v)',
        '8 Hz (subtracted λ from v)',
        '5 Hz (divided v by λ)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'we-mis-bad-rearrangement',
      hint: 'f = v / λ = 10 / 2.',
    },
    {
      id: 'we-q8',
      type: 'numeric-entry',
      stem: 'Water ripples in a Bristol school tray have a frequency of 8 Hz and a wavelength of 0.025 m. What is the wave speed, in m/s?',
      tier: 'confident',
      correctAnswer: 0.2,
      unit: 'm/s',
      xpValue: 15,
      hint: 'v = f x λ = 8 x 0.025.',
    },
    {
      id: 'we-q9',
      type: 'multiple-choice',
      stem: 'A choir singer holds a note at 256 Hz. Sound in air travels at 330 m/s. Which calculation gives the wavelength of the note?',
      tier: 'confident',
      options: [
        '330 / 256',
        '256 x 330',
        '256 / 330',
        '330 - 256',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'we-mis-bad-rearrangement',
      hint: 'Cover λ on the triangle: λ = v / f = 330 / 256.',
    },
    {
      id: 'we-q10',
      type: 'numeric-entry',
      stem: 'A Channel ferry wake has a wave speed of 3 m/s and a wavelength of 6 m. What is the frequency of the wake waves, in Hz?',
      tier: 'confident',
      correctAnswer: 0.5,
      unit: 'Hz',
      xpValue: 15,
      hint: 'f = v / λ = 3 / 6.',
    },
    {
      id: 'we-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes that a sound wave with f = 500 Hz and λ = 0.66 m must have a speed of 500.66 m/s because v = f + λ. What is the best correction?',
      tier: 'confident',
      options: [
        'The wave equation is v = f - λ, so v ≈ 499.34 m/s.',
        'The wave equation is v = f / λ, so v ≈ 758 m/s.',
        'The wave equation is v = f x λ, so v = 500 x 0.66 = 330 m/s.',
        'The wave equation is v = λ / f, so v ≈ 0.00132 m/s.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'we-mis-wrong-formula',
      hint: 'v, f, and λ are linked by multiplication, not addition.',
    },
    {
      id: 'we-q12',
      type: 'multiple-choice',
      stem: 'A water wave has a period T of 0.25 s and a wavelength of 2 m. A pupil writes v = T x λ = 0.25 x 2 = 0.5 m/s. What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing; the answer is correct.',
        'The pupil should use v = T / λ instead.',
        'The pupil used T instead of f. First convert: f = 1 / T = 1 / 0.25 = 4 Hz. Then v = f x λ = 4 x 2 = 8 m/s.',
        'The wavelength should have been divided by the period.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'we-mis-period-for-frequency',
      hint: 'v = f x λ uses frequency f, not the period T. Convert T to f using f = 1 / T first.',
    },
    {
      id: 'we-q13',
      type: 'spot-misconception',
      stem: 'Aisha is told that a water wave at 10 Hz with wavelength 0.5 m has speed 5 m/s. She is then told the frequency is doubled to 20 Hz, with no change in wave speed (the medium has not changed). What happens to the wavelength?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "If v stays the same and f doubles, then λ must also double. So λ goes from 0.5 m up to 1.0 m."',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "If v stays the same and f doubles, then λ must halve, because v = f x λ means f and λ are in inverse proportion. So λ goes from 0.5 m down to 0.25 m."',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'we-mis-inverse-thinking',
    },
    {
      id: 'we-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order for using v = f x λ to find a wave speed.',
      tier: 'confident',
      items: [
        'Substitute the values into v = f x λ.',
        'State the answer in m/s, with a unit.',
        'Write down f (in Hz) and λ (in m), converting any sub-units first.',
        'Pick the right form by covering v on the triangle to get v = f x λ.',
      ],
      correctOrder: [2, 3, 0, 1],
      xpValue: 15,
      hint: 'First gather and convert the values, then pick the form, then substitute, then state the answer.',
    },
    {
      id: 'we-q15',
      type: 'multiple-choice',
      stem: 'A pupil measures a ripple in a tray with a wavelength of 5 cm and a frequency of 4 Hz. Without converting cm to m, the pupil writes v = 4 x 5 = 20 m/s. What has gone wrong?',
      tier: 'confident',
      options: [
        'Nothing; 20 m/s is the correct wave speed.',
        'The wavelength is in centimetres, not metres. 5 cm = 0.05 m, so v = 4 x 0.05 = 0.20 m/s.',
        'The frequency should have been divided, not multiplied.',
        'Hz is the wrong unit for frequency in this equation.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'we-mis-mixed-units',
      hint: 'Convert every value to base units (m and Hz) before substituting into v = f x λ.',
    },
    {
      id: 'we-q16',
      type: 'numeric-entry',
      stem: 'A BBC Radio 4 long-wave signal in a Leicester living room has a wavelength of 1500 m and a frequency of 200 000 Hz. What is the wave speed, in m/s?',
      tier: 'challenge',
      correctAnswer: 300000000,
      tolerance: 1000000,
      unit: 'm/s',
      xpValue: 20,
      hint: 'v = f x λ = 200 000 x 1500. The answer should be near the speed of light.',
    },
    {
      id: 'we-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the wavelength of a 440 Hz sound wave in air, given that sound travels at 330 m/s.',
      tier: 'challenge',
      steps: [
        'Write the data: f = 440 Hz, v = 330 m/s, λ = ?',
        'Pick the right form of the equation by covering λ on the triangle: λ = v / f.',
        null,
        'Evaluate the arithmetic, rounding to 2 significant figures: λ ≈ 0.75 m.',
        'State the answer with a unit: the wavelength is about 0.75 m. The value is sensible because middle-range musical notes in air have wavelengths a little under a metre.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the values into λ = v / f: λ = 330 / 440.',
      xpValue: 20,
    },
    {
      id: 'we-q18',
      type: 'numeric-entry',
      stem: 'A guitar string in a Norwich classroom sounds the note A at 110 Hz. Sound travels at 330 m/s in the air around it. What is the wavelength of the sound wave in air, in m?',
      tier: 'challenge',
      correctAnswer: 3,
      unit: 'm',
      xpValue: 20,
      hint: 'λ = v / f = 330 / 110.',
    },
    {
      id: 'we-q19',
      type: 'spot-misconception',
      stem: 'Liam reads that a filament lamp gives off light. He claims that because light is a different wave from sound, the rule v = f x λ cannot apply to light at all.',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam says: "v = f x λ is only for sound waves and water ripples. Light waves are too special to follow the same rule, so the equation does not work for light."',
          isMisconception: true,
        },
        {
          text: 'Liam says: "v = f x λ holds for every wave, including light. For light in a vacuum, v ≈ 3 x 10^8 m/s; if you know f or λ you can find the other from v = f x λ."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'we-mis-not-universal',
    },
    {
      id: 'we-q20',
      type: 'numeric-entry',
      stem: 'A ripple tank in a Manchester lab is set to 25 Hz. A stroboscope shows the wavelength is 1.2 cm. Convert the wavelength to metres, then find the wave speed, in m/s.',
      tier: 'challenge',
      correctAnswer: 0.3,
      unit: 'm/s',
      xpValue: 20,
      misconceptionId: 'we-mis-mixed-units',
      hint: '1.2 cm = 0.012 m. Then v = f x λ = 25 x 0.012.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote v = f + λ rather than v = f x λ, confusing the equation operation.
    {
      id: 'we-mis-wrong-formula',
      description:
        'Writing v = f + λ or v = f - λ instead of v = f x λ, mixing up the operation in the wave equation.',
      triggerAnswer: 'wrong-formula-operation',
      correction:
        'v, f, and λ are linked by multiplication, not addition. v = f x λ, so doubling either f or λ doubles v.',
      reExplanation:
        'A 5 Hz wave with a wavelength of 2 m gives v = 5 x 2 = 10 m/s. If you added the numbers you would get 7 m/s, which is the wrong answer with the wrong units (you cannot add hertz to metres). The formula triangle helps: cover v and you read f and λ side by side, which always means multiply.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates rearranged v = f x λ by writing f = v x λ instead of f = v / λ.
    {
      id: 'we-mis-bad-rearrangement',
      description:
        'Rearranging v = f x λ by writing f = v x λ or λ = v x f, missing that the unknown sits below the line on the triangle.',
      triggerAnswer: 'bad-rearrangement',
      correction:
        'To find f, divide both sides by λ: f = v / λ. To find λ, divide both sides by f: λ = v / f. The triangle shows v on top.',
      reExplanation:
        'A wave at 10 m/s with a wavelength of 2 m: using f = v x λ gives 10 x 2 = 20 Hz, with wrong units. Using f = v / λ gives 10 / 2 = 5 Hz, which is correct. The triangle is a quick check: v on top, f and λ share the bottom row, so f = v / λ and λ = v / f.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02, candidates mixed centimetres with hertz when applying the wave equation, leaving answers a factor of 100 out.
    {
      id: 'we-mis-mixed-units',
      description:
        'Substituting centimetres, kilohertz, or other sub-units directly into v = f x λ without first converting to metres and hertz.',
      triggerAnswer: 'mixed-units',
      correction:
        'Convert every value to base units (metres, hertz, metres per second) before substituting. Mixing centimetres with hertz makes the answer 100 times too big.',
      reExplanation:
        'A 4 Hz wave with a wavelength of 5 cm: if you leave λ as 5 you get v = 4 x 5 = 20 m/s, which is far too large for a ripple tank. Convert λ to 0.05 m first and you get v = 4 x 0.05 = 0.20 m/s, a sensible answer for slow water ripples. Always rewrite the data in base units before you substitute, and label every value with its unit.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates claimed that doubling the frequency of a wave (with the wave speed unchanged) doubles the wavelength.
    {
      id: 'we-mis-inverse-thinking',
      description:
        'Saying that doubling the frequency at constant wave speed doubles the wavelength, mistaking inverse proportion for direct proportion.',
      triggerAnswer: 'inverse-thinking',
      correction:
        'For a fixed wave speed, f and λ are in inverse proportion. Doubling f halves λ; halving f doubles λ. Only v is constant when the medium does not change.',
      reExplanation:
        'A water wave at 10 Hz with wavelength 0.5 m has v = 10 x 0.5 = 5 m/s. If the frequency doubles to 20 Hz with no change in the water, v stays at 5 m/s, so λ = v / f = 5 / 20 = 0.25 m. The wavelength halves, it does not double. Always rearrange v = f x λ and substitute to be sure of the direction of change.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2018, Paper 1F, candidates substituted the period T (in seconds) where the frequency f (in hertz) was required in v = f x λ.
    {
      id: 'we-mis-period-for-frequency',
      description:
        'Substituting the period T (in seconds) into v = f x λ in place of the frequency f, so confusing T with f.',
      triggerAnswer: 'period-for-frequency',
      correction:
        'f and T are related by f = 1 / T, not the same thing. Convert T to f before using v = f x λ.',
      reExplanation:
        'A wave with T = 0.5 s has f = 1 / 0.5 = 2 Hz. If λ = 3 m, then v = f x λ = 2 x 3 = 6 m/s. Using T directly would give 0.5 x 3 = 1.5 m/s, which is the wrong answer. Always check the unit: hertz means waves per second (f), seconds means time for one wave (T).',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, J259/02, candidates wrote that v = f x λ only applies to sound waves and not to light or radio waves.
    {
      id: 'we-mis-not-universal',
      description:
        'Believing that v = f x λ only applies to sound or to water waves, rather than to every type of wave including light and radio.',
      triggerAnswer: 'not-universal',
      correction:
        'v = f x λ holds for every wave: sound, water ripples, light, radio, microwaves, and so on. Only the size of v, f, and λ changes from one wave to another.',
      reExplanation:
        'For sound in air, v ≈ 330 m/s. For light or radio in a vacuum, v ≈ 3 x 10^8 m/s. The numbers differ by a factor of a million, but v = f x λ links them in the same way. A Radio 4 long-wave signal with f = 200 000 Hz and λ = 1500 m gives v = 200 000 x 1500 = 3 x 10^8 m/s. One rule, every wave.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesWaveEquationZoneNodes = [wavesWaveEquation]
