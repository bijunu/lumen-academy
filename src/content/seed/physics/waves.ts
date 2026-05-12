import type { SkillNode, Zone } from '@/types/content'

const WAVE_ANATOMY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Transverse wave: parts of a single wave</text>

    <!-- Rest line -->
    <line x1="60" y1="200" x2="740" y2="200" stroke-dasharray="6,6" stroke-width="2" />
    <text x="60" y="195" text-anchor="start" font-size="12" stroke="none" fill="currentColor">rest line</text>

    <!-- Sine-like wave drawn as four arcs -->
    <path d="M 60 200 Q 145 90 230 200 T 400 200 T 570 200 T 740 200" />

    <!-- Crest marker at first peak (x=145, y=120 approx peak shown as 120) -->
    <line x1="145" y1="120" x2="145" y2="200" stroke-dasharray="4,4" stroke-width="2" />
    <text x="145" y="110" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">crest</text>

    <!-- Trough marker at first trough (x=315, y=280) -->
    <line x1="315" y1="200" x2="315" y2="280" stroke-dasharray="4,4" stroke-width="2" />
    <text x="315" y="300" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">trough</text>

    <!-- Amplitude double-headed arrow on the right of the first crest -->
    <line x1="200" y1="200" x2="200" y2="120" stroke-width="2" />
    <polygon points="194,128 200,116 206,128" fill="currentColor" stroke="none" />
    <polygon points="194,192 200,204 206,192" fill="currentColor" stroke="none" />
    <text x="240" y="165" text-anchor="start" font-size="13" stroke="none" fill="currentColor">amplitude</text>
    <text x="240" y="183" text-anchor="start" font-size="11" stroke="none" fill="currentColor">(rest line to crest)</text>

    <!-- Wavelength double-headed arrow between two crests -->
    <line x1="145" y1="80" x2="485" y2="80" stroke-width="2" />
    <polygon points="153,74 141,80 153,86" fill="currentColor" stroke="none" />
    <polygon points="477,74 489,80 477,86" fill="currentColor" stroke="none" />
    <text x="315" y="70" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">wavelength λ (crest to crest)</text>

    <!-- Direction arrow -->
    <line x1="60" y1="345" x2="200" y2="345" stroke-width="2" />
    <polygon points="192,338 205,345 192,352" fill="currentColor" stroke="none" />
    <text x="130" y="335" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">wave moves this way</text>
  </g>
`

const TRANSVERSE_VS_LONGITUDINAL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="200" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Transverse: ripples on water</text>

    <!-- Side-on water wave -->
    <path d="M 40 160 Q 90 100 140 160 T 240 160 T 340 160" />
    <!-- Float on top -->
    <circle cx="190" cy="160" r="8" fill="currentColor" />
    <line x1="190" y1="135" x2="190" y2="185" stroke-width="2" />
    <polygon points="184,143 190,131 196,143" fill="currentColor" stroke="none" />
    <polygon points="184,177 190,189 196,177" fill="currentColor" stroke="none" />
    <text x="220" y="160" text-anchor="start" font-size="12" stroke="none" fill="currentColor">float bobs up and down</text>
    <text x="200" y="240" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">wave moves left to right</text>
    <line x1="80" y1="270" x2="320" y2="270" stroke-width="2" />
    <polygon points="312,263 325,270 312,277" fill="currentColor" stroke="none" />
    <text x="200" y="300" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">vibration is at right angles to motion</text>

    <text x="600" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Longitudinal: slinky push-pull</text>

    <!-- Slinky as alternating dense and sparse circles -->
    <circle cx="450" cy="160" r="6" fill="currentColor" />
    <circle cx="465" cy="160" r="6" fill="currentColor" />
    <circle cx="480" cy="160" r="6" fill="currentColor" />
    <circle cx="510" cy="160" r="6" fill="currentColor" />
    <circle cx="540" cy="160" r="6" fill="currentColor" />
    <circle cx="580" cy="160" r="6" fill="currentColor" />
    <circle cx="595" cy="160" r="6" fill="currentColor" />
    <circle cx="610" cy="160" r="6" fill="currentColor" />
    <circle cx="640" cy="160" r="6" fill="currentColor" />
    <circle cx="670" cy="160" r="6" fill="currentColor" />
    <circle cx="710" cy="160" r="6" fill="currentColor" />
    <circle cx="725" cy="160" r="6" fill="currentColor" />
    <circle cx="740" cy="160" r="6" fill="currentColor" />

    <text x="465" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">compression</text>
    <text x="525" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">rarefaction</text>
    <text x="595" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">compression</text>
    <text x="690" y="200" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">rarefaction</text>

    <line x1="450" y1="270" x2="740" y2="270" stroke-width="2" />
    <polygon points="732,263 745,270 732,277" fill="currentColor" stroke="none" />
    <text x="595" y="300" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">vibration is along the direction of motion</text>
  </g>
`

const FREQUENCY_PERIOD_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Frequency and period: counting waves in one second</text>

    <!-- One second window -->
    <line x1="60" y1="180" x2="60" y2="220" stroke-width="2" />
    <line x1="740" y1="180" x2="740" y2="220" stroke-width="2" />
    <line x1="60" y1="200" x2="740" y2="200" stroke-dasharray="6,6" stroke-width="2" />
    <text x="400" y="60" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">a single 1 second window</text>

    <!-- Two waves fitting in the second (frequency 2 Hz) -->
    <path d="M 60 200 Q 145 130 230 200 T 400 200" />
    <path d="M 400 200 Q 485 130 570 200 T 740 200" />

    <!-- Period bracket: 0.5 s for one wave -->
    <line x1="60" y1="280" x2="400" y2="280" stroke-width="2" />
    <polygon points="68,273 55,280 68,287" fill="currentColor" stroke="none" />
    <polygon points="392,273 405,280 392,287" fill="currentColor" stroke="none" />
    <text x="230" y="305" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">period = 0.5 s (one full wave)</text>

    <!-- Frequency label -->
    <text x="600" y="305" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">frequency = 2 Hz</text>
    <text x="600" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(2 full waves per second)</text>
  </g>
`

export const wavesAnatomy: SkillNode = {
  id: 'physics-waves-anatomy',
  title: 'Wave Anatomy',
  description:
    'Name the parts of a wave: amplitude is the height of a crest above the rest line, wavelength is the distance from one crest to the next (the symbol is λ), frequency is the number of waves passing a point each second (measured in hertz, Hz), and period is the time for one full wave to pass. Tell transverse waves (ripples on a pond, where the float bobs up and down) apart from longitudinal waves (a slinky pushed and pulled, where the coils squash together and spread out). Year 7 keeps it qualitative; the v = f × λ rule is for GCSE.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'core',
  prerequisites: ['physics-energy-transfers'],
  curriculum: {
    ks3Objective:
      'Frequencies of sound waves, measured in hertz (Hz); echoes, reflection and absorption of sound. Sound needs a medium to travel, the speed of sound in air, in water, in solids. Sound produced by vibrations of objects, in loud speakers, detected by their effects on microphone diaphragm and the ear drum; sound waves are longitudinal.',
    awardingBodies: {
      aqa: '4.6.1.1 Transverse and longitudinal waves; amplitude, wavelength, frequency and period of a wave (GCSE Physics 8463)',
      edexcel: 'Topic 4.1 Waves and the electromagnetic spectrum, transverse and longitudinal waves; amplitude, wavelength, frequency and period (GCSE Physics 1PH0)',
      ocr: 'P5.1 Wave behaviour; amplitude, wavelength, frequency, period and the wave equation (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'wa-scene-anatomy',
      title: 'Parts of a Single Wave',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to name the parts of a transverse wave: the rest line, a crest, a trough, the amplitude, and the wavelength λ.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVE_ANATOMY_SVG,
        hotspots: [
          {
            id: 'wa-s-rest',
            x: 50,
            y: 50,
            label: 'Rest line',
            description:
              'The dashed line is where the water (or string, or air) sits when nothing is disturbing it. Crests rise above this line; troughs dip below it.',
          },
          {
            id: 'wa-s-crest',
            x: 18,
            y: 30,
            label: 'Crest',
            description:
              'A crest is the highest point of the wave, the top of the bump above the rest line.',
          },
          {
            id: 'wa-s-trough',
            x: 40,
            y: 70,
            label: 'Trough',
            description:
              'A trough is the lowest point of the wave, the bottom of the dip below the rest line.',
          },
          {
            id: 'wa-s-amplitude',
            x: 28,
            y: 42,
            label: 'Amplitude',
            description:
              'The amplitude is the height of a crest above the rest line (or the depth of a trough below it). A bigger amplitude means a louder sound or a brighter light.',
          },
          {
            id: 'wa-s-wavelength',
            x: 40,
            y: 18,
            label: 'Wavelength λ',
            description:
              'The wavelength is the distance from one crest to the next crest (or one trough to the next). The Greek letter λ (lambda) is used as its symbol.',
          },
        ],
      },
    },
    {
      id: 'wa-scene-tvl',
      title: 'Transverse vs Longitudinal',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a transverse water wave (ripples on a pond) with a longitudinal slinky wave.',
      data: {
        viewBox: '0 0 800 400',
        svg: TRANSVERSE_VS_LONGITUDINAL_SVG,
        hotspots: [
          {
            id: 'wa-t-water',
            x: 25,
            y: 40,
            label: 'Transverse: water ripples',
            description:
              'On a pond, the wave travels left to right but a leaf on the surface bobs up and down at right angles to that motion. The vibration is at right angles to the direction of travel. Light is also a transverse wave.',
          },
          {
            id: 'wa-t-direction',
            x: 25,
            y: 78,
            label: 'Direction of travel',
            description:
              'The wave moves across the pond in one direction. The float does not travel with it. Energy is what is transferred along the wave, not the water itself.',
          },
          {
            id: 'wa-t-slinky',
            x: 75,
            y: 40,
            label: 'Longitudinal: slinky',
            description:
              'Push and pull the end of a slinky and a wave of squash and stretch travels along it. The coils move along the same line as the wave, not at right angles. Sound waves in air are longitudinal.',
          },
          {
            id: 'wa-t-compression',
            x: 60,
            y: 60,
            label: 'Compression and rarefaction',
            description:
              'A compression is where the coils are bunched together. A rarefaction is where the coils are spread out. In a sound wave in air, compressions are regions of squashed-together air; rarefactions are regions of spread-out air.',
          },
        ],
      },
    },
    {
      id: 'wa-scene-freq-period',
      title: 'Frequency and Period',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the frequency (waves per second) and the period (time for one wave) of the wave shown.',
      data: {
        viewBox: '0 0 800 400',
        svg: FREQUENCY_PERIOD_SVG,
        hotspots: [
          {
            id: 'wa-f-window',
            x: 50,
            y: 18,
            label: 'A 1 second window',
            description:
              'Imagine a stopwatch running for exactly one second. Count how many full waves pass a fixed point in that second. The answer is the frequency.',
          },
          {
            id: 'wa-f-frequency',
            x: 75,
            y: 75,
            label: 'Frequency = 2 Hz',
            description:
              'Two full waves pass each second. So the frequency is 2 hertz, written 2 Hz. A bigger frequency means more waves per second.',
          },
          {
            id: 'wa-f-period',
            x: 28,
            y: 75,
            label: 'Period = 0.5 s',
            description:
              'The period is the time for one full wave to pass. With a frequency of 2 Hz the period is 1 ÷ 2 = 0.5 s. Higher frequency means shorter period.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'wa-worked-1',
      title: 'Naming the parts of a single wave on a pond',
      steps: [
        {
          explanation:
            'Set the scene. A pebble drops into a still pond in a Tunbridge Wells park. Ripples spread out across the surface.',
        },
        {
          explanation:
            'Find the rest line. Before the pebble hit, the water was flat. That flat level is the rest line.',
        },
        {
          explanation:
            'Find a crest and a trough. Look at one ripple. The top of the ripple, above the rest line, is a crest. The dip just after it, below the rest line, is a trough.',
        },
        {
          explanation:
            'Find the amplitude. Measure from the rest line up to the top of the crest. That height is the amplitude. A bigger pebble would give a bigger amplitude.',
        },
        {
          explanation:
            'Find the wavelength. Measure from one crest to the next crest. That distance is the wavelength λ.',
          maths: 'wavelength λ = distance from one crest to the next',
        },
        {
          explanation:
            'Check. Crest, trough, amplitude, wavelength. All four parts of a wave have been named on the same single ripple.',
        },
      ],
    },
    {
      id: 'wa-worked-2',
      title: 'A guitar string vibrating: frequency, period, and amplitude',
      steps: [
        {
          explanation:
            'Set the scene. A guitarist plucks the open A string. The string vibrates at 110 Hz (a standard tuning).',
        },
        {
          explanation:
            'Read the frequency. 110 Hz means 110 full vibrations every second.',
          maths: 'frequency f = 110 Hz',
        },
        {
          explanation:
            'Find the period. The period is the time for one full vibration. Period = 1 ÷ frequency.',
          maths: 'period T = 1 ÷ 110 = 0.0091 s (about 9 milliseconds)',
        },
        {
          explanation:
            'Decide what amplitude controls. The harder the pluck, the larger the amplitude. A larger amplitude means a louder note. The frequency stays the same (so the pitch stays the same), but the loudness goes up.',
        },
        {
          explanation:
            'Check. Frequency tells you how high the note sounds (its pitch). Amplitude tells you how loud it sounds. Period is just another way to write the frequency.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'wa-q1',
      type: 'multiple-choice',
      stem: 'Which line on a wave diagram is called the rest line?',
      tier: 'core',
      options: [
        'The line that joins all the crests at the top of the wave.',
        'The line that joins all the troughs at the bottom of the wave.',
        'The line where the water (or string, or air) sits when nothing is disturbing it.',
        'The line that shows the direction the wave is travelling in.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'wa-mis-rest-line-as-direction',
      hint: 'The rest line is the undisturbed level. Crests rise above it; troughs dip below it.',
    },
    {
      id: 'wa-q2',
      type: 'multiple-choice',
      stem: 'Which definition of amplitude is correct for a Year 7 wave diagram?',
      tier: 'core',
      options: [
        'The height of a crest above the rest line.',
        'The distance from one crest to the next crest.',
        'The number of waves passing a point each second.',
        'The time it takes for one full wave to pass.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'wa-mis-amplitude-vs-wavelength',
      hint: 'Amplitude is a height, not a distance along the wave.',
    },
    {
      id: 'wa-q3',
      type: 'multiple-choice',
      stem: 'Which definition of wavelength is correct?',
      tier: 'core',
      options: [
        'The number of waves passing a point each second.',
        'The height of a crest above the rest line.',
        'The distance from one crest to the next crest, with the symbol λ.',
        'The total height from a trough to a crest, doubled.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'wa-mis-amplitude-vs-wavelength',
      hint: 'Wavelength is a distance along the wave. Its symbol is λ (the Greek letter lambda).',
    },
    {
      id: 'wa-q4',
      type: 'multiple-choice',
      stem: 'Which unit is used for frequency?',
      tier: 'core',
      options: [
        'metres (m)',
        'seconds (s)',
        'newtons (N)',
        'hertz (Hz)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'wa-mis-hz-vs-seconds',
      hint: 'Frequency counts waves per second. The unit is named after the physicist Heinrich Hertz.',
    },
    {
      id: 'wa-q5',
      type: 'numeric-entry',
      stem: 'A pupil watches the surface of a pond. They count 5 full waves passing a stick over a 1 second sample. What is the frequency of the wave, in hertz?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'Hz',
      xpValue: 10,
      hint: 'Frequency is waves per second. Five waves in a one second window is 5 hertz.',
    },
    {
      id: 'wa-q6',
      type: 'multiple-choice',
      stem: 'Which of these is a transverse wave?',
      tier: 'core',
      options: [
        'A sound wave travelling through air in a Manchester living room.',
        'Ripples spreading out on the surface of a pond after a pebble drops in.',
        'A push-pull wave on a slinky stretched between two pupils.',
        'A compression wave in a steel railway track.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'wa-mis-sound-as-transverse',
      hint: 'Transverse means the vibration is at right angles to the direction of travel. A leaf on a pond bobs up and down while the wave travels sideways.',
    },
    {
      id: 'wa-q7',
      type: 'multiple-choice',
      stem: 'Which of these is a longitudinal wave?',
      tier: 'core',
      options: [
        'Light from a desk lamp.',
        'Ripples on a pond.',
        'A sound wave from a loudspeaker.',
        'A wave travelling along a vibrating guitar string.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'wa-mis-sound-as-transverse',
      hint: 'In a longitudinal wave, the vibration is along the same line as the direction of travel. Air molecules are squashed together and spread out.',
    },
    {
      id: 'wa-q8',
      type: 'spot-misconception',
      stem: 'Maya looks at a wave diagram and writes, "The amplitude is the distance from the trough up to the crest."',
      tier: 'challenge',
      statements: [
        {
          text: 'Maya is right. Trough to crest is the standard amplitude for KS3.',
          isMisconception: true,
        },
        {
          text: 'Maya is not right. Amplitude is the height of a crest above the rest line, not the full trough-to-crest distance. Trough-to-crest is twice the amplitude.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'wa-mis-amplitude-doubled',
    },
    {
      id: 'wa-q9',
      type: 'labelled-image',
      stem: 'Place each label on the right marker of the wave diagram. Each marker takes one label.',
      tier: 'core',
      viewBox: '0 0 800 400',
      svg: WAVE_ANATOMY_SVG,
      hotspots: [
        { id: 'wa-q9-h1', x: 18, y: 30, correctLabel: 'Crest' },
        { id: 'wa-q9-h2', x: 40, y: 70, correctLabel: 'Trough' },
        { id: 'wa-q9-h3', x: 28, y: 42, correctLabel: 'Amplitude' },
        { id: 'wa-q9-h4', x: 40, y: 18, correctLabel: 'Wavelength λ' },
      ],
      labels: [
        'Crest',
        'Trough',
        'Amplitude',
        'Wavelength λ',
        'Frequency',
        'Period',
      ],
      xpValue: 15,
      misconceptionId: 'wa-mis-amplitude-vs-wavelength',
      hint: 'Crest is the highest point. Trough is the lowest. Amplitude is the height. Wavelength is the distance crest to crest.',
    },
    {
      id: 'wa-q10',
      type: 'drag-order',
      stem: 'Order these wave parts from "shows how loud" to "shows how often" for a guitar string note.',
      tier: 'challenge',
      items: [
        'Amplitude (height of the crest above the rest line)',
        'Wavelength λ (distance from one crest to the next)',
        'Frequency (waves per second, in Hz)',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 10,
      hint: 'Amplitude controls loudness. Wavelength is a distance. Frequency is per second.',
    },
    {
      id: 'wa-q11',
      type: 'multiple-choice',
      stem: 'A wave has a frequency of 4 Hz. What is its period (the time for one full wave)?',
      tier: 'confident',
      options: [
        '4 s',
        '0.25 s',
        '40 s',
        '0.4 s',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'wa-mis-period-equals-frequency',
      hint: 'Period = 1 ÷ frequency. So 1 ÷ 4 = 0.25 s.',
    },
    {
      id: 'wa-q12',
      type: 'numeric-entry',
      stem: 'A pupil counts 20 full water waves passing a buoy over a 4 second sample during a school trip to Bournemouth. What is the frequency of the waves, in hertz?',
      tier: 'confident',
      correctAnswer: 5,
      unit: 'Hz',
      xpValue: 15,
      hint: 'Frequency = waves ÷ seconds. So 20 ÷ 4 = 5 Hz.',
    },
    {
      id: 'wa-q13',
      type: 'numeric-entry',
      stem: 'A wave has a period of 0.1 s. What is its frequency, in hertz?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'Hz',
      xpValue: 15,
      misconceptionId: 'wa-mis-period-equals-frequency',
      hint: 'Frequency = 1 ÷ period. So 1 ÷ 0.1 = 10 Hz.',
    },
    {
      id: 'wa-q14',
      type: 'multiple-choice',
      stem: 'A guitarist plucks a string harder, but the string is the same length and tuned to the same note. Which wave property changes?',
      tier: 'confident',
      options: [
        'The frequency increases, so the note sounds higher.',
        'The wavelength changes, so the note sounds different.',
        'The amplitude increases, so the note sounds louder, but the pitch stays the same.',
        'The period gets shorter, so the note plays for less time.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'wa-mis-loud-equals-high',
      hint: 'Pitch is set by frequency; loudness is set by amplitude.',
    },
    {
      id: 'wa-q15',
      type: 'spot-misconception',
      stem: 'Theo says, "Sound waves are transverse, like ripples on a pond."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. All waves we meet at Year 7 are transverse, including sound.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Sound waves are longitudinal: the air vibrates back and forth along the same line as the wave travels, not at right angles to it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'wa-mis-sound-as-transverse',
    },
    {
      id: 'wa-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the period of a wave with frequency 8 Hz.',
      tier: 'confident',
      steps: [
        'Recall the rule: period = 1 ÷ frequency.',
        'Substitute the numbers: period = 1 ÷ 8.',
        null,
        'Write the unit: period = 0.125 s.',
      ],
      missingStepIndex: 2,
      correctStep: 'Divide: period = 0.125.',
      xpValue: 15,
    },
    {
      id: 'wa-q17',
      type: 'data-extraction',
      stem: 'A pupil watches a buoy bob on the sea at Brighton. They write down readings every second: at t = 0 s the buoy is at the rest line, at t = 0.5 s it is at the crest, at t = 1.0 s it is back at the rest line, at t = 1.5 s it is at the trough, at t = 2.0 s it is back at the rest line. What is the period of the wave, in seconds?',
      tier: 'confident',
      dataSource:
        't = 0 s: rest. t = 0.5 s: crest. t = 1.0 s: rest. t = 1.5 s: trough. t = 2.0 s: rest. (One full wave: rest, crest, rest, trough, rest.)',
      correctAnswer: '2',
      xpValue: 15,
      hint: 'A full wave goes rest → crest → rest → trough → rest. From t = 0 s to t = 2.0 s is one full wave, so the period is 2 s.',
    },
    {
      id: 'wa-q18',
      type: 'multiple-choice',
      stem: 'Two waves are drawn on the same axes with the same wavelength. Wave A has crests reaching 3 cm above the rest line. Wave B has crests reaching 6 cm above the rest line. Which statement is correct?',
      tier: 'confident',
      options: [
        'Wave A has a smaller frequency than Wave B.',
        'Wave B has a larger amplitude than Wave A; the frequency is the same.',
        'Wave B has a larger wavelength than Wave A.',
        'Wave A and Wave B have the same amplitude because they have the same wavelength.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'wa-mis-amplitude-vs-wavelength',
      hint: 'Amplitude is the crest height. Wavelength is the crest-to-crest distance. Changing one does not change the other.',
    },
    {
      id: 'wa-q19',
      type: 'numeric-entry',
      stem: 'BBC Radio 4 broadcasts on long wave at 198 kHz. That is 198 000 hertz. How many full waves does the radio carrier produce in one second?',
      tier: 'challenge',
      correctAnswer: 198000,
      unit: 'waves',
      xpValue: 20,
      hint: 'Frequency in hertz already means waves per second. So 198 kHz = 198 000 waves per second.',
    },
    {
      id: 'wa-q20',
      type: 'multiple-choice',
      stem: 'A school physics demonstration plays two notes through a speaker. The first note has a frequency of 220 Hz; the second has a frequency of 440 Hz. Both notes are played at the same volume. Which statement matches the speaker output?',
      tier: 'challenge',
      options: [
        'The 440 Hz note has a larger amplitude than the 220 Hz note, because it is higher.',
        'Both notes have the same amplitude (because the volume is the same), but the 440 Hz wave has half the period of the 220 Hz wave.',
        'The 440 Hz note has a longer wavelength than the 220 Hz note, because it has a larger frequency.',
        'Both notes have the same frequency, because the speaker is the same.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'wa-mis-loud-equals-high',
      hint: 'Volume is amplitude. Pitch is frequency. Period = 1 ÷ frequency.',
    },
    {
      id: 'wa-q21',
      type: 'free-text',
      stem: 'Aisha plucks the same guitar string twice in her bedroom in Sevenoaks. The first time she plucks it gently; the second time she plucks it hard. The string is tuned to 110 Hz. In two or three sentences, explain in wave-anatomy language what changes between the two plucks and what stays the same. Use at least two of: amplitude, frequency, period, pitch, loudness.',
      tier: 'challenge',
      sampleAnswer:
        'The frequency stays at 110 Hz on both plucks (the string is the same length and tension), so the period stays at about 0.0091 s and the pitch sounds the same. What changes is the amplitude: the hard pluck gives a larger amplitude (the string vibrates further from its rest line), so the note sounds louder. Pitch and loudness control different things on a wave.',
      keywords: ['amplitude', 'frequency', 'period', 'loudness', 'pitch', 'rest line'],
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates measure amplitude from trough up to crest, doubling the correct value
    {
      id: 'wa-mis-amplitude-doubled',
      description:
        'Measuring amplitude from a trough up to a crest, instead of from the rest line up to a crest. This doubles the correct value.',
      triggerAnswer: 'amplitude-doubled',
      correction:
        'Amplitude is measured from the rest line to a crest (or from the rest line down to a trough). It is half the trough-to-crest distance, not all of it.',
      reExplanation:
        'On a water ripple with crests 3 cm above the rest line and troughs 3 cm below, the trough-to-crest distance is 6 cm but the amplitude is 3 cm. Always start the measurement at the rest line.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on confusing amplitude with wavelength
    {
      id: 'wa-mis-amplitude-vs-wavelength',
      description:
        'Mixing amplitude and wavelength up. Calling the height of the wave its wavelength, or calling the crest-to-crest distance its amplitude.',
      triggerAnswer: 'amplitude-vs-wavelength',
      correction:
        'Amplitude is a height (rest line to crest). Wavelength is a distance along the wave (crest to crest). They are at right angles to each other on a wave diagram.',
      reExplanation:
        'On a pond ripple, you could have a tall narrow wave (large amplitude, small wavelength) or a long shallow wave (small amplitude, large wavelength). Doubling the amplitude makes the wave taller, not longer; doubling the wavelength stretches it out, not up.',
    },
    // Source: IOPSpark "Drawing waves" guidance on Year 7 confusion between Hz and seconds
    {
      id: 'wa-mis-hz-vs-seconds',
      description:
        'Writing the frequency in seconds (e.g. "5 s") instead of hertz (Hz), or the period in hertz instead of seconds.',
      triggerAnswer: 'hz-vs-seconds',
      correction:
        'Frequency is in hertz (Hz), where 1 Hz = 1 wave per second. Period is in seconds (s), the time for one wave. The two are reciprocals of each other.',
      reExplanation:
        'A wave with frequency 4 Hz has 4 waves per second; its period is 1 ÷ 4 = 0.25 s. Writing "frequency = 0.25 s" or "period = 4 Hz" gets the units the wrong way round. The unit on the answer is what tells you which quantity has been found.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates write period = frequency rather than period = 1 ÷ frequency
    {
      id: 'wa-mis-period-equals-frequency',
      description:
        'Treating period and frequency as the same thing, or writing period = frequency rather than period = 1 ÷ frequency.',
      triggerAnswer: 'period-equals-frequency',
      correction:
        'Period and frequency are reciprocals. Period (s) = 1 ÷ frequency (Hz). Frequency (Hz) = 1 ÷ period (s).',
      reExplanation:
        'A 4 Hz wave passes 4 full waves per second, so each one takes 1 ÷ 4 = 0.25 s. Writing T = 4 s would mean each wave takes four seconds, which would be an exceptionally slow wave. Always check that bigger frequencies give shorter periods.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on sound waves being mistakenly drawn as transverse
    {
      id: 'wa-mis-sound-as-transverse',
      description:
        'Believing sound waves are transverse, often because they are usually drawn as a sine curve on a textbook page.',
      triggerAnswer: 'sound-as-transverse',
      correction:
        'Sound waves are longitudinal. Air molecules vibrate back and forth along the same line as the wave travels, making compressions and rarefactions. The air is not moving up and down.',
      reExplanation:
        'Hold a slinky between two pupils and push the end forward and back. A pulse of squashed coils travels along the slinky in the direction of the push. That is a longitudinal wave, the same shape as a sound wave in air. Ripples on a pond, by contrast, are transverse: the float bobs up and down while the wave moves sideways.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/2F, candidates think the rest line is the direction the wave is travelling
    {
      id: 'wa-mis-rest-line-as-direction',
      description:
        'Treating the rest line as an arrow showing which way the wave is travelling, rather than as the undisturbed level the wave is drawn around.',
      triggerAnswer: 'rest-line-as-direction',
      correction:
        'The rest line shows where the medium sits when no wave is passing. It is not a direction arrow. Crests rise above this line; troughs dip below it. The wave still moves sideways.',
      reExplanation:
        'On a pond, the rest line is the flat water level when nothing is disturbing it. When a ripple passes, the water rises to make a crest above this line and dips to make a trough below it. The wave still moves sideways across the pond regardless of where the rest line is drawn.',
    },
    // Source: IOPSpark "Sound and music" guidance on the loud-equals-high pitch confusion
    {
      id: 'wa-mis-loud-equals-high',
      description:
        'Treating "louder" as the same as "higher pitch", as if turning up the volume also raises the note. This confuses amplitude with frequency.',
      triggerAnswer: 'loud-equals-high',
      correction:
        'Loudness is set by amplitude (height of the wave). Pitch is set by frequency (waves per second). Turning a speaker up raises the amplitude, not the frequency.',
      reExplanation:
        'On a guitar, plucking the same string harder makes the same note play louder, not higher. The pitch only changes when the string length or tension changes (so that the frequency changes). Volume and pitch are two independent dials on a wave.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

const SOUND_LIGHT_COMPARE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Sound vs Light: side by side</text>

    <!-- Sound column -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Sound (longitudinal)</text>
    <circle cx="120" cy="150" r="20" fill="currentColor" />
    <text x="120" y="156" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">spk</text>
    <line x1="142" y1="150" x2="280" y2="150" stroke-width="2" />
    <polygon points="272,143 285,150 272,157" fill="currentColor" stroke="none" />
    <text x="200" y="180" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">vibrating air</text>

    <text x="200" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Speed in air ≈ 343 m/s</text>
    <text x="200" y="245" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Needs a medium</text>
    <text x="200" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">No sound in space</text>
    <text x="200" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(typical Y7 example: speaker, drum)</text>

    <!-- Light column -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Light (transverse)</text>
    <circle cx="520" cy="150" r="20" fill="currentColor" />
    <text x="520" y="156" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">Sun</text>
    <line x1="542" y1="150" x2="680" y2="150" stroke-width="2" />
    <polygon points="672,143 685,150 672,157" fill="currentColor" stroke="none" />
    <text x="600" y="180" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">crosses vacuum</text>

    <text x="600" y="220" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Speed in vacuum = 3×10⁸ m/s</text>
    <text x="600" y="245" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Does not need a medium</text>
    <text x="600" y="270" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Reaches Earth from the Sun</text>
    <text x="600" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(typical Y7 example: torch, sunlight)</text>
  </g>
`

const THUNDER_LAG_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Thunder lag: counting seconds in a UK storm</text>

    <!-- Cloud at top right -->
    <ellipse cx="600" cy="120" rx="60" ry="22" fill="currentColor" />
    <line x1="600" y1="142" x2="600" y2="200" stroke-width="3" />
    <polygon points="592,190 600,210 608,190" fill="currentColor" stroke="none" />
    <text x="600" y="100" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">flash and rumble start together</text>

    <!-- Observer on left -->
    <circle cx="120" cy="220" r="14" fill="currentColor" />
    <line x1="120" y1="234" x2="120" y2="290" stroke-width="3" />
    <text x="120" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">pupil in a UK garden</text>

    <!-- Light arrow (fast, top) -->
    <line x1="580" y1="170" x2="150" y2="170" stroke-width="2" />
    <polygon points="158,163 145,170 158,177" fill="currentColor" stroke="none" />
    <text x="370" y="160" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">light: arrives almost instantly</text>

    <!-- Sound arrow (slow, lower) -->
    <line x1="580" y1="240" x2="150" y2="240" stroke-width="2" />
    <polygon points="158,233 145,240 158,247" fill="currentColor" stroke="none" />
    <text x="370" y="265" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">sound: arrives after a few seconds</text>

    <!-- Distance estimate box -->
    <rect x="200" y="320" width="400" height="60" />
    <text x="400" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">If you count 3 s between flash and rumble:</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">distance ≈ 3 × 343 ≈ 1000 m (1 km away)</text>
  </g>
`

const NO_SOUND_IN_SPACE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Why sound cannot cross space (but light can)</text>

    <!-- Earth left -->
    <circle cx="180" cy="200" r="50" fill="currentColor" />
    <text x="180" y="206" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="180" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">air around it</text>

    <!-- Vacuum middle -->
    <text x="400" y="180" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">vacuum (no air)</text>
    <text x="400" y="220" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">no medium = no sound</text>

    <!-- Light arrow Sun-to-Earth -->
    <line x1="600" y1="170" x2="240" y2="170" stroke-width="2" />
    <polygon points="248,163 235,170 248,177" fill="currentColor" stroke="none" />
    <text x="420" y="160" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">light reaches Earth in about 8 minutes</text>

    <!-- Sound arrow with cross -->
    <line x1="600" y1="240" x2="400" y2="240" stroke-width="2" stroke-dasharray="6,4" />
    <line x1="380" y1="225" x2="420" y2="255" stroke-width="3" />
    <line x1="420" y1="225" x2="380" y2="255" stroke-width="3" />
    <text x="500" y="270" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">sound cannot get across</text>

    <!-- Sun right -->
    <circle cx="660" cy="200" r="40" fill="currentColor" />
    <text x="660" y="206" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Sun</text>
  </g>
`

export const wavesSoundLight: SkillNode = {
  id: 'physics-waves-sound-light',
  title: 'Sound and Light Waves',
  description:
    'Compare sound and light at Year 7 level. Sound is a longitudinal wave that needs a medium (air, water, a solid) and travels at about 343 m/s in air. Light is a transverse wave that does not need a medium; it travels at 3×10⁸ m/s in vacuum, which is why we can see the Sun from Earth but cannot hear an explosion in space. Use the thunder-lag rule (count the seconds between a lightning flash and the rumble, multiply by 343 m/s) to estimate distance to a storm. Visible light is part of a wider family of waves, but spectrum naming is for GCSE.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Sound needs a medium to travel, the speed of sound in air, in water, in solids. Sound produced by vibrations of objects, in loud speakers, detected by their effects on microphone diaphragm and the ear drum; sound waves are longitudinal. Light waves travelling through a vacuum; speed of light. The transmission of light through materials: absorption, diffuse scattering and specular reflection at a surface.',
    awardingBodies: {
      aqa: '4.6.2.1 Reflection of waves; 4.6.2.3 Sound waves (longitudinal, require a medium); 4.6.1.4 Properties of waves including speed of light in vacuum (GCSE Physics 8463)',
      edexcel: 'Topic 5 Light and the electromagnetic spectrum, 5.1-5.4 reflection, refraction; Topic 4.1 sound as a longitudinal wave (GCSE Physics 1PH0)',
      ocr: 'P5.2 Sound and ultrasound; P5.3 Light, including reflection, refraction, and the wave speed in a vacuum (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'sl-scene-compare',
      title: 'Sound vs Light at a Glance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare sound and light: how fast they travel, whether they need a medium, and what makes them different waves.',
      data: {
        viewBox: '0 0 800 400',
        svg: SOUND_LIGHT_COMPARE_SVG,
        hotspots: [
          {
            id: 'sl-c-sound-speed',
            x: 25,
            y: 55,
            label: 'Sound: 343 m/s in air',
            description:
              'Sound waves travel at about 343 m/s in air at room temperature. Sound goes faster in water (about 1500 m/s) and faster still in steel (about 5000 m/s). The medium matters.',
          },
          {
            id: 'sl-c-sound-medium',
            x: 25,
            y: 75,
            label: 'Sound needs a medium',
            description:
              'Sound is a vibration of the medium itself. Air must be there to be squashed and stretched. Take the air away (a vacuum) and the sound stops; this is why there is no sound in space.',
          },
          {
            id: 'sl-c-light-speed',
            x: 75,
            y: 55,
            label: 'Light: 3×10⁸ m/s in vacuum',
            description:
              'Light travels at 300 000 000 m/s (3×10⁸ m/s) in vacuum. That is about a million times faster than sound. Light is the fastest thing we measure at school.',
          },
          {
            id: 'sl-c-light-medium',
            x: 75,
            y: 75,
            label: 'Light does not need a medium',
            description:
              'Light is a transverse wave that can cross empty space. That is how sunlight reaches Earth across 150 million km of vacuum from the Sun.',
          },
        ],
      },
    },
    {
      id: 'sl-scene-no-sound-space',
      title: 'Why Space is Silent',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why light from the Sun reaches us but sound from the Sun does not.',
      data: {
        viewBox: '0 0 800 400',
        svg: NO_SOUND_IN_SPACE_SVG,
        hotspots: [
          {
            id: 'sl-n-vacuum',
            x: 50,
            y: 50,
            label: 'Vacuum between Earth and Sun',
            description:
              'Most of the space between Earth and the Sun has almost no matter in it. With no medium, sound waves cannot form because there is nothing to squash and stretch.',
          },
          {
            id: 'sl-n-light-cross',
            x: 50,
            y: 35,
            label: 'Light crosses the vacuum',
            description:
              'Light does not depend on a medium, so it crosses the vacuum from the Sun to Earth in about 8 minutes. Astronomers see distant stars even though there is empty space all the way.',
          },
          {
            id: 'sl-n-sound-blocked',
            x: 50,
            y: 65,
            label: 'Sound cannot cross the vacuum',
            description:
              'Without air or another medium, sound waves cannot travel. Even a huge solar flare would make no sound for an astronaut on the ISS, because the sound would have nothing to vibrate through.',
          },
        ],
      },
    },
    {
      id: 'sl-scene-thunder',
      title: 'Thunder Lag: Counting Seconds in a Storm',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a lightning flash and the rumble of thunder reach you at different times, and how to use that gap to estimate the distance to the storm.',
      data: {
        viewBox: '0 0 800 400',
        svg: THUNDER_LAG_SVG,
        hotspots: [
          {
            id: 'sl-t-flash',
            x: 50,
            y: 30,
            label: 'Light arrives almost instantly',
            description:
              'Light from the lightning bolt travels at 3×10⁸ m/s. Even a 10 km storm gives a delay of only about 0.00003 s, which the brain cannot detect. So the flash is treated as "instant".',
          },
          {
            id: 'sl-t-rumble',
            x: 50,
            y: 60,
            label: 'Sound trails behind',
            description:
              'The thunder is the sound of the lightning bolt. Sound only travels at 343 m/s in air, so it lags well behind the flash. The further away the storm, the longer the gap between flash and rumble.',
          },
          {
            id: 'sl-t-rule',
            x: 50,
            y: 88,
            label: 'Distance ≈ seconds × 343 m/s',
            description:
              'Count the seconds between the flash and the rumble, then multiply by 343. A 3 second gap means the storm is about 3 × 343 ≈ 1000 m (about 1 km) away. A rule-of-thumb shortcut is "every 3 seconds is about 1 km".',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'sl-worked-1',
      title: 'Why a torch beam reaches a friend faster than a shout',
      steps: [
        {
          explanation:
            'Set the scene. Two pupils stand at opposite ends of a 30 m school playground in Birmingham. One shines a torch at the other and shouts at the same moment.',
        },
        {
          explanation:
            'Find how long the light takes. Use distance ÷ speed. Light in air travels at very nearly 3×10⁸ m/s.',
          maths: 'time for light = 30 ÷ 3×10⁸ ≈ 0.0000001 s (one ten-millionth of a second)',
        },
        {
          explanation:
            'Find how long the shout takes. Sound in air travels at about 343 m/s.',
          maths: 'time for sound = 30 ÷ 343 ≈ 0.087 s',
        },
        {
          explanation:
            'Compare. Light gets there in a fraction of a millisecond; the shout takes about 0.09 s. The light is millions of times faster than the sound.',
        },
        {
          explanation:
            'Why this matters. At 30 m the difference is too small to feel. At a thunderstorm 1 km away, the gap is around 3 s, and you really do see the flash before you hear the rumble.',
        },
      ],
    },
    {
      id: 'sl-worked-2',
      title: 'Estimating the distance to a storm using thunder lag',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in a Surrey garden sees a flash of lightning and starts counting. They hear the rumble 5 seconds later.',
        },
        {
          explanation:
            'Treat the light as instant. Light from the lightning reaches the pupil in less than a millisecond, so the 5 second gap is set by the sound only.',
        },
        {
          explanation:
            'Use distance = speed × time for the sound. Speed of sound in air ≈ 343 m/s; time = 5 s.',
          maths: 'distance = 343 × 5 = 1715 m',
        },
        {
          explanation:
            'Round sensibly. About 1700 m, or roughly 1.7 km. The rule of thumb (every 3 seconds is about 1 km) gives 5 ÷ 3 ≈ 1.7 km, which agrees.',
        },
        {
          explanation:
            'State the answer. The lightning bolt struck about 1.7 km away. The light arrived nearly instantly; the sound took 5 s to cover the same distance.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'sl-q1',
      type: 'multiple-choice',
      stem: 'Which row matches the type of wave each one is?',
      tier: 'core',
      options: [
        'Sound: longitudinal. Light: transverse.',
        'Sound: transverse. Light: longitudinal.',
        'Sound: transverse. Light: transverse.',
        'Sound: longitudinal. Light: longitudinal.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'sl-mis-light-as-longitudinal',
      hint: 'In sound, air molecules vibrate along the direction of travel. In light, the wave vibrates at right angles.',
    },
    {
      id: 'sl-q2',
      type: 'multiple-choice',
      stem: 'Which speed best matches the speed of sound in air at room temperature?',
      tier: 'core',
      options: [
        '3 m/s',
        '343 m/s',
        '3×10⁸ m/s',
        '300 m/s only when the air is hot.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sl-mis-mix-speeds',
      hint: 'Sound in air is hundreds of metres per second. Light is hundreds of millions.',
    },
    {
      id: 'sl-q3',
      type: 'multiple-choice',
      stem: 'Which speed best matches the speed of light in a vacuum?',
      tier: 'core',
      options: [
        '343 m/s',
        '3 000 m/s',
        '3×10⁸ m/s',
        '3×10⁵ m/s (the speed of sound in steel).',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'sl-mis-mix-speeds',
      hint: '3×10⁸ m/s = 300 000 000 m/s. About a million times faster than sound.',
    },
    {
      id: 'sl-q4',
      type: 'multiple-choice',
      stem: 'A teacher says, "There is no sound in space." Why is that?',
      tier: 'core',
      options: [
        'Space is too cold for vibrations.',
        'Sound is too quiet to be heard in space.',
        'Sound only works on Earth because of gravity.',
        'Sound waves need a medium (air or another material). Most of space is a vacuum, so sound has nothing to travel through.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sl-mis-sound-in-vacuum',
      hint: 'Sound is a vibration of the medium itself. No medium = no wave.',
    },
    {
      id: 'sl-q5',
      type: 'multiple-choice',
      stem: 'Sunlight crosses the empty space between the Sun and the Earth and reaches us in about 8 minutes. What does this tell you about light?',
      tier: 'core',
      options: [
        'Light needs a thin layer of air all the way from the Sun.',
        'Light does not need a medium; it can cross a vacuum.',
        'Light travels at the same speed as sound.',
        'Sunlight is actually a sound wave.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'sl-mis-light-needs-air',
      hint: 'If light needed a medium, it could not reach us across empty space.',
    },
    {
      id: 'sl-q6',
      type: 'spot-misconception',
      stem: 'Sam says, "Pluto astronauts in a sci-fi film could clearly hear the engine roar from a passing ship."',
      tier: 'core',
      statements: [
        {
          text: 'Sam is right. Engines are loud enough to be heard anywhere in space.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. Outside a ship the surroundings are essentially a vacuum, so there is no medium for sound to travel through. The roar would not reach an astronaut at all.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'sl-mis-sound-in-vacuum',
    },
    {
      id: 'sl-q7',
      type: 'numeric-entry',
      stem: 'A pupil watches a storm from their kitchen window in Sevenoaks. They see a flash, then count a 3 second gap before they hear the rumble. Use the speed of sound in air ≈ 343 m/s to estimate the distance to the lightning, in metres.',
      tier: 'confident',
      correctAnswer: 1029,
      unit: 'm',
      tolerance: 5,
      xpValue: 15,
      misconceptionId: 'sl-mis-thunder-with-light-speed',
      hint: 'The 3 second gap is set by the sound, not the light. Use distance = 343 × 3.',
    },
    {
      id: 'sl-q8',
      type: 'numeric-entry',
      stem: 'A pupil counts 4 seconds between a flash of lightning and the rumble of thunder. Use the speed of sound in air ≈ 343 m/s to estimate the distance to the storm, in metres.',
      tier: 'confident',
      correctAnswer: 1372,
      unit: 'm',
      tolerance: 5,
      xpValue: 15,
      hint: 'distance = speed × time = 343 × 4.',
    },
    {
      id: 'sl-q9',
      type: 'numeric-entry',
      stem: 'A goal-line clap travels 70 m across a school field at the speed of sound in air (343 m/s). To the nearest tenth of a second, how long does the clap take to reach the other end?',
      tier: 'confident',
      correctAnswer: 0.2,
      unit: 's',
      tolerance: 0.05,
      xpValue: 15,
      hint: 'time = distance ÷ speed = 70 ÷ 343 ≈ 0.2 s.',
    },
    {
      id: 'sl-q10',
      type: 'multiple-choice',
      stem: 'A torch and a loudspeaker are switched on at the same moment, 30 m from a pupil. Which signal reaches the pupil first, and roughly by how much?',
      tier: 'confident',
      options: [
        'The torch light arrives first, by about 0.09 s. Sound at 343 m/s takes about 0.087 s to cover 30 m; light is millions of times faster.',
        'The sound arrives first, because sound waves are felt before light is seen.',
        'They arrive together, because both are waves and both travel at the speed of light.',
        'The light arrives first, by exactly 1 second.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'sl-mis-mix-speeds',
      hint: '30 ÷ 343 ≈ 0.087 s for the sound. Light covers 30 m in about 0.0000001 s.',
    },
    {
      id: 'sl-q11',
      type: 'multiple-choice',
      stem: 'Aisha writes, "Sound travels faster in water than in air." Which sentence is the most accurate response?',
      tier: 'confident',
      options: [
        'Aisha is wrong. Sound is slower in denser materials, so it must be slower in water than in air.',
        'Aisha is wrong. Sound only travels in air; it cannot travel in water at all.',
        'Aisha is right, but only because water is heavier than air.',
        'Aisha is right. Sound travels faster in water (around 1500 m/s) than in air (about 343 m/s), and faster still in solids like steel.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'sl-mis-sound-slower-in-solid',
      hint: 'Closely packed particles pass the vibration on at a higher speed, not a lower one.',
    },
    {
      id: 'sl-q12',
      type: 'drag-order',
      stem: 'Order these signals from slowest in air to fastest.',
      tier: 'confident',
      items: [
        'A walking pupil (about 1.4 m/s).',
        'A car on a UK motorway (about 31 m/s, around 70 mph).',
        'Sound in air (about 343 m/s).',
        'Light in air or vacuum (about 3×10⁸ m/s).',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
      hint: 'Pupil < motorway car < sound in air < light. Light is the fastest by a huge factor.',
    },
    {
      id: 'sl-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is using thunder lag to estimate the distance to a storm. They counted 6 seconds between flash and rumble.',
      tier: 'confident',
      steps: [
        'Treat the light as arriving instantly.',
        'Use distance = speed of sound × time.',
        null,
        'Round and write the unit: about 2060 m, or about 2 km.',
      ],
      missingStepIndex: 2,
      correctStep: 'Substitute the numbers: distance = 343 × 6 = 2058 m.',
      xpValue: 15,
    },
    {
      id: 'sl-q14',
      type: 'data-extraction',
      stem: 'A class measures how long sound and light take to travel 100 m across a UK playground. Their stopwatch readings (averaged over 5 trials) are: light flash 0.0000003 s; loud horn 0.29 s. Use these readings to give the speed of sound in air to the nearest 10 m/s.',
      tier: 'challenge',
      dataSource:
        'Distance = 100 m. Light time = 0.0000003 s. Sound time = 0.29 s. (Speed = distance ÷ time.)',
      correctAnswer: '340',
      xpValue: 15,
      hint: 'speed of sound = 100 ÷ 0.29 ≈ 345 m/s. To the nearest 10 m/s that is 340 (or 350) m/s, matching 343 m/s.',
    },
    {
      id: 'sl-q15',
      type: 'labelled-image',
      stem: 'Place each label on the correct column of the sound vs light comparison.',
      tier: 'core',
      viewBox: '0 0 800 400',
      svg: SOUND_LIGHT_COMPARE_SVG,
      hotspots: [
        { id: 'sl-q15-h1', x: 25, y: 55, correctLabel: 'About 343 m/s in air' },
        { id: 'sl-q15-h2', x: 25, y: 75, correctLabel: 'Needs a medium' },
        { id: 'sl-q15-h3', x: 75, y: 55, correctLabel: '3×10⁸ m/s in vacuum' },
        { id: 'sl-q15-h4', x: 75, y: 75, correctLabel: 'Does not need a medium' },
      ],
      labels: [
        'About 343 m/s in air',
        'Needs a medium',
        '3×10⁸ m/s in vacuum',
        'Does not need a medium',
        'Always travels in straight lines only',
        'Slower than walking pace',
      ],
      xpValue: 15,
      hint: 'Sound is much slower and needs a medium. Light is fast and crosses vacuum.',
    },
    {
      id: 'sl-q16',
      type: 'multiple-choice',
      stem: 'A teacher shows a video of a bell jar with a ringing bell inside, while air is pumped out. As the air is removed, what happens?',
      tier: 'confident',
      options: [
        'The sound from the bell gets quieter and finally cannot be heard, because there is less and less medium for the sound to travel through.',
        'The bell stops moving, because there is no air to push it.',
        'The bell becomes louder, because the bell jar amplifies it.',
        'The pitch of the bell rises sharply.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'sl-mis-sound-in-vacuum',
      hint: 'Less air means less medium. The bell still strikes, but the sound has less to travel through.',
    },
    {
      id: 'sl-q17',
      type: 'multiple-choice',
      stem: 'A torch is shone at a mirror in a darkened classroom. Which sentence describes the reflection at Year 7 level?',
      tier: 'challenge',
      options: [
        'The mirror absorbs the light and emits a new beam.',
        'The light is reflected: it bounces off the smooth surface in a regular way, so an image of the torch can be seen.',
        'The mirror refracts the beam at right angles.',
        'The mirror generates new sound waves from the light.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'KS3 reflection from a mirror is qualitative: light bounces off in a regular way (specular reflection).',
    },
    {
      id: 'sl-q18',
      type: 'numeric-entry',
      stem: 'A Sevenoaks pupil sees a flash of lightning, then 4.5 s later hears the thunder. Sound travels at 343 m/s in air. At school distances the light from the flash arrives almost at once, so the lag is set by sound. To the nearest metre, how far away was the lightning strike?',
      tier: 'challenge',
      correctAnswer: 1544,
      unit: 'm',
      xpValue: 20,
      hint: 'Distance equals speed times time. The lag is set by sound, because the light arrives almost at once.',
    },
    {
      id: 'sl-q19',
      type: 'multiple-choice',
      stem: 'A pupil reads in a science book that "we never see the Sun as it is right now". Which sentence best explains this idea at KS3 level?',
      tier: 'challenge',
      options: [
        'The Sun is too bright to see directly, so we always see a delayed image.',
        'Sound from the Sun takes 8 minutes to reach us, and we see the Sun when the sound arrives.',
        'Light from the Sun takes about 8 minutes to cross the vacuum to Earth (at 3×10⁸ m/s). What we see is the Sun as it was 8 minutes ago.',
        'The Earth\'s atmosphere slows light by 8 minutes.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'sl-mis-light-instant-everywhere',
      hint: 'Light is fast, but the distance Sun to Earth is huge: 150 million km. Distance ÷ speed gives the time.',
    },
    {
      id: 'sl-q20',
      type: 'free-text',
      stem: 'A pupil watches a Bonfire Night firework display in a Birmingham park from 600 m away. They notice that the firework explodes silently in the sky and then they hear the bang a moment later. In two or three sentences, explain why the flash and the bang reach them at different times. Use at least two of: speed of sound, speed of light, medium, vacuum, distance ÷ speed.',
      tier: 'challenge',
      sampleAnswer:
        'Light from the flash travels at 3×10⁸ m/s, so it covers the 600 m almost instantly (0.000002 s, far too short to feel). Sound is much slower, about 343 m/s in air, so it takes 600 ÷ 343 ≈ 1.7 s to reach the pupil. Both waves travel through air, so the medium is the same; the difference is the wave speed, which is millions of times bigger for light.',
      keywords: ['speed of light', 'speed of sound', '343', 'medium', 'distance', 'time'],
      xpValue: 20,
    },
    {
      id: 'sl-q21',
      type: 'spot-misconception',
      stem: 'Theo writes, "We see the firework before we hear it because the light started first; the explosion happened a moment earlier."',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo is right. The light leaves the firework before the sound does.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. The light and the sound start together at the explosion. The reason we see it first is that light travels much faster (3×10⁸ m/s vs 343 m/s), not that one started before the other.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'sl-mis-light-starts-first',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 1F, candidates believing sound can travel through a vacuum if loud enough
    {
      id: 'sl-mis-sound-in-vacuum',
      description:
        'Believing sound can travel through a vacuum, often picked up from sci-fi films where explosions in space are loud.',
      triggerAnswer: 'sound-in-vacuum',
      correction:
        'Sound is a vibration of a medium. With no medium (no air, water, or solid) there is nothing to vibrate, so no sound wave can form. Space is essentially a vacuum, so explosions there are silent.',
      reExplanation:
        'A bell jar demonstration shows this clearly. As the air is pumped out, the bell still strikes but the sound fades to nothing. Light from the same bell can still be seen, because light does not depend on a medium.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on light needing air to travel
    {
      id: 'sl-mis-light-needs-air',
      description:
        'Believing light needs air or another medium to travel, by analogy with sound.',
      triggerAnswer: 'light-needs-air',
      correction:
        'Light is a transverse wave that travels through a vacuum at 3×10⁸ m/s. It does not need air, water, or any other material.',
      reExplanation:
        'If light needed a medium, sunlight could not reach Earth across the vacuum of space, and astronauts on the ISS could not see the stars. The fact that light reaches us from the Sun (and from galaxies far beyond) is direct evidence that light does not need a medium.',
    },
    // Source: IOPSpark "Sound and music" guidance on the longitudinal vs transverse confusion for light
    {
      id: 'sl-mis-light-as-longitudinal',
      description:
        'Calling light a longitudinal wave by analogy with sound, instead of a transverse wave.',
      triggerAnswer: 'light-as-longitudinal',
      correction:
        'Light is a transverse wave: it vibrates at right angles to the direction of travel. Sound is the longitudinal one. Mixing them up swaps two of the most important features of each wave.',
      reExplanation:
        'A KS3 wave diagram for light is drawn with a sine curve where the vibration is up-down and the wave moves sideways. Sound, by contrast, is drawn with compressions and rarefactions along the direction of travel.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/2F, candidates mixing up the speed of sound with the speed of light
    {
      id: 'sl-mis-mix-speeds',
      description:
        'Quoting the speed of sound as 3×10⁸ m/s, or the speed of light as 343 m/s. The two numbers are swapped, often because both have a "3" in them.',
      triggerAnswer: 'mix-speeds',
      correction:
        'In air at room temperature, sound travels at about 343 m/s. Light in vacuum travels at 3×10⁸ m/s = 300 000 000 m/s. Light is about a million times faster than sound.',
      reExplanation:
        'A check: sound takes about 3 seconds to cover 1 km (we see this in thunder lag). Light covers 300 000 km in 1 second. If your answer treats sound as that fast, it is wrong by a factor of a million.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 1F, candidates using the speed of light in thunder-lag distance estimates
    {
      id: 'sl-mis-thunder-with-light-speed',
      description:
        'Multiplying the seconds-between-flash-and-rumble by the speed of light, instead of the speed of sound, when estimating distance to a storm.',
      triggerAnswer: 'thunder-with-light-speed',
      correction:
        'The gap between the flash and the rumble is set by the slower wave (sound). Use the speed of sound in air (343 m/s), not the speed of light (3×10⁸ m/s), in distance = speed × time.',
      reExplanation:
        'If you use the speed of light, a 3 second gap gives 3 × 3×10⁸ = 9×10⁸ m, which is twice the distance to the Moon. That cannot be right for a storm in your local area. Using 343 m/s gives 1029 m ≈ 1 km, the right kind of answer.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on sound being slower in solids
    {
      id: 'sl-mis-sound-slower-in-solid',
      description:
        'Believing sound is slower in solids than in air, because solids "feel heavier".',
      triggerAnswer: 'sound-slower-in-solid',
      correction:
        'Sound is faster in solids (about 5000 m/s in steel) and in liquids (about 1500 m/s in water) than in air (about 343 m/s). Closely packed particles pass the vibration on at a higher speed.',
      reExplanation:
        'A railway-line classic: pressing your ear to a steel rail lets you hear an approaching train sooner than listening through the air, because sound covers the same distance in the steel in much less time. Density alone does not slow sound; closely packed bonds speed it up.',
    },
    // Source: IOPSpark "Light and seeing" guidance on the "light is instant everywhere" misconception
    {
      id: 'sl-mis-light-instant-everywhere',
      description:
        'Believing light is truly instant, so distance does not matter for light at all.',
      triggerAnswer: 'light-instant-everywhere',
      correction:
        'Light is very fast (3×10⁸ m/s) but not instant. Over astronomical distances the time matters. Sunlight takes about 8 minutes to reach Earth; light from the nearest other star takes over 4 years.',
      reExplanation:
        'On a school playground (30 m), the light delay is about 0.0000001 s, which is far too short to feel. So treating light as "instant" is fine on Earth-scale distances. In space, however, the same speed of light produces noticeable delays.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates writing that the light "started first" rather than that it travels faster
    {
      id: 'sl-mis-light-starts-first',
      description:
        'Believing the light from a single event (firework, lightning) "starts first" or "leaves first", rather than that the light and sound start together but light travels much faster.',
      triggerAnswer: 'light-starts-first',
      correction:
        'A flash and the bang it makes start at the same instant. The reason the flash is seen first is that light travels millions of times faster than sound, not that the light leaves earlier.',
      reExplanation:
        'A check: the gap between flash and bang grows the further away you are. If light "started first", the gap would be the same at every distance. The fact that the gap depends on distance shows that the difference is wave speed, not start time.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesZoneNodes = [wavesAnatomy, wavesSoundLight]

export const wavesZone: Zone = {
  id: 'physics-waves',
  name: 'Waves',
  realm: 'mechanica',
  nodeIds: [...wavesZoneNodes.map(n => n.id), 'physics-waves-frequency-period', 'physics-waves-law-of-reflection', 'physics-waves-wave-equation', 'physics-waves-speed-of-sound', 'physics-waves-loudness-pitch', 'physics-waves-plane-mirror-images', 'physics-waves-em-spectrum', 'physics-waves-refraction-glass-block', 'physics-waves-dispersion-prism', 'physics-waves-em-uses-dangers', 'physics-waves-sky-blue-scattering', 'physics-waves-doppler-effect'],
}
