import type { SkillNode } from '@/types/content'

const PITCH_WAVEFORMS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two waveforms: low pitch vs high pitch (same loudness)</text>

    <!-- Top panel: low pitch -->
    <text x="120" y="80" font-size="14" font-weight="700" stroke="none" fill="currentColor">Low pitch (low frequency)</text>
    <text x="120" y="100" font-size="13" stroke="none" fill="currentColor">Bass guitar: about 80 Hz</text>
    <line x1="60" y1="150" x2="740" y2="150" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 150 Q 120 80, 180 150 T 300 150 T 420 150 T 540 150 T 660 150 T 740 150" stroke-width="4" />
    <line x1="180" y1="150" x2="420" y2="150" stroke-width="1" stroke-dasharray="2,2" />
    <text x="300" y="195" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">one wavelength (long)</text>

    <!-- Bottom panel: high pitch -->
    <text x="120" y="240" font-size="14" font-weight="700" stroke="none" fill="currentColor">High pitch (high frequency)</text>
    <text x="120" y="260" font-size="13" stroke="none" fill="currentColor">Violin top E: about 660 Hz</text>
    <line x1="60" y1="320" x2="740" y2="320" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 320 Q 90 250, 120 320 T 180 320 T 240 320 T 300 320 T 360 320 T 420 320 T 480 320 T 540 320 T 600 320 T 660 320 T 720 320" stroke-width="4" />
    <line x1="120" y1="320" x2="180" y2="320" stroke-width="1" stroke-dasharray="2,2" />
    <text x="150" y="365" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">one wavelength (short)</text>

    <text x="400" y="395" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">More waves per second = higher frequency = higher pitch.</text>
  </g>
`

const LOUDNESS_WAVEFORMS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two waveforms: quiet vs loud (same pitch)</text>

    <!-- Top panel: quiet -->
    <text x="120" y="75" font-size="14" font-weight="700" stroke="none" fill="currentColor">Quiet sound (small amplitude)</text>
    <line x1="60" y1="150" x2="740" y2="150" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 150 Q 120 120, 180 150 T 300 150 T 420 150 T 540 150 T 660 150 T 740 150" stroke-width="4" />
    <line x1="120" y1="150" x2="120" y2="120" stroke-width="2" stroke-dasharray="2,2" />
    <text x="135" y="135" font-size="12" stroke="none" fill="currentColor">small amplitude</text>

    <!-- Bottom panel: loud -->
    <text x="120" y="240" font-size="14" font-weight="700" stroke="none" fill="currentColor">Loud sound (large amplitude)</text>
    <line x1="60" y1="320" x2="740" y2="320" stroke-dasharray="4,4" stroke-width="1" />
    <path d="M 60 320 Q 120 230, 180 320 T 300 320 T 420 320 T 540 320 T 660 320 T 740 320" stroke-width="4" />
    <line x1="120" y1="320" x2="120" y2="230" stroke-width="2" stroke-dasharray="2,2" />
    <text x="135" y="275" font-size="12" stroke="none" fill="currentColor">large amplitude</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Same pitch, same wavelength: taller wave = louder sound.</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Loudness is set by amplitude, pitch by frequency. The two are independent.</text>
  </g>
`

const HEARING_RANGE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Human hearing range: 20 Hz to 20 kHz</text>

    <!-- Frequency axis -->
    <line x1="80" y1="220" x2="720" y2="220" stroke-width="4" />
    <polygon points="715,213 730,220 715,227" fill="currentColor" stroke="none" />
    <text x="400" y="260" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Frequency (Hz, log scale)</text>

    <!-- Tick marks: 1 Hz, 20 Hz, 200 Hz, 2 kHz, 20 kHz, 200 kHz -->
    <line x1="120" y1="215" x2="120" y2="225" />
    <text x="120" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1 Hz</text>
    <line x1="240" y1="215" x2="240" y2="225" />
    <text x="240" y="240" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">20 Hz</text>
    <line x1="360" y1="215" x2="360" y2="225" />
    <text x="360" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">200 Hz</text>
    <line x1="480" y1="215" x2="480" y2="225" />
    <text x="480" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2 kHz</text>
    <line x1="600" y1="215" x2="600" y2="225" />
    <text x="600" y="240" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">20 kHz</text>
    <line x1="700" y1="215" x2="700" y2="225" />
    <text x="700" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">200 kHz</text>

    <!-- Audible band shading: 20 Hz to 20 kHz -->
    <rect x="240" y="120" width="360" height="80" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
    <text x="420" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Audible to humans</text>
    <text x="420" y="180" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">20 Hz to 20 kHz</text>

    <!-- Infrasound region -->
    <text x="180" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Infrasound</text>
    <text x="180" y="120" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">below 20 Hz</text>
    <text x="180" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">e.g. earthquakes,</text>
    <text x="180" y="155" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">large drums</text>

    <!-- Ultrasound region -->
    <text x="660" y="100" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Ultrasound</text>
    <text x="660" y="120" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">above 20 kHz</text>
    <text x="660" y="140" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">e.g. bat squeaks,</text>
    <text x="660" y="155" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">foetal scans, dog whistles</text>

    <!-- Example markers -->
    <circle cx="280" cy="200" r="5" fill="currentColor" />
    <text x="280" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">organ pedal</text>
    <text x="280" y="300" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">30 Hz</text>
    <line x1="280" y1="205" x2="280" y2="275" stroke-width="1" stroke-dasharray="2,2" />

    <circle cx="320" cy="200" r="5" fill="currentColor" />
    <text x="320" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">bass guitar</text>
    <text x="320" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">80 Hz</text>
    <line x1="320" y1="205" x2="320" y2="325" stroke-width="1" stroke-dasharray="2,2" />

    <circle cx="400" cy="200" r="5" fill="currentColor" />
    <text x="400" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">violin top E</text>
    <text x="400" y="300" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">660 Hz</text>
    <line x1="400" y1="205" x2="400" y2="275" stroke-width="1" stroke-dasharray="2,2" />

    <circle cx="580" cy="200" r="5" fill="currentColor" />
    <text x="580" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">mosquito alarm</text>
    <text x="580" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">17 kHz</text>
    <line x1="580" y1="205" x2="580" y2="325" stroke-width="1" stroke-dasharray="2,2" />

    <circle cx="620" cy="200" r="5" fill="currentColor" />
    <text x="640" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dog whistle</text>
    <text x="640" y="300" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">25 kHz</text>
    <line x1="620" y1="205" x2="640" y2="275" stroke-width="1" stroke-dasharray="2,2" />
  </g>
`

export const wavesLoudnessPitch: SkillNode = {
  id: 'physics-waves-loudness-pitch',
  title: 'Loudness, Pitch and Hearing Range',
  description:
    'Sound waves carry two everyday features that we can read straight off a waveform. Pitch is how high or low a note sounds, and it is set by the frequency of the wave: more oscillations per second means a higher pitch. Loudness is how quiet or strong the sound seems, and it is set by the amplitude of the wave: a taller wave is louder. The two are independent, so a bass guitar at 80 Hz can be loud or quiet at the same pitch. Human ears pick up frequencies from about 20 Hz to 20 kHz. Anything below 20 Hz is infrasound and anything above 20 kHz is ultrasound, used by bats, dog whistles and foetal scans.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Sound produced by vibrations of objects; the auditory range of humans and animals; pitch related to frequency, loudness related to amplitude.',
    awardingBodies: {
      aqa: '4.6.2.3 Sound waves; pitch and frequency, loudness and amplitude; human hearing range 20 Hz to 20 kHz (GCSE Physics 8463)',
      edexcel:
        'Topic 4.1 Sound; frequency and pitch, amplitude and loudness, human auditory range (GCSE Physics 1PH0)',
      ocr: 'P5.2 Sound and ultrasound; audible range of humans, ultrasound above 20 kHz, infrasound below 20 Hz (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'lp-scene-pitch',
      title: 'Pitch and Frequency',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a low-pitch and a high-pitch waveform drawn at the same loudness.',
      data: {
        viewBox: '0 0 800 400',
        svg: PITCH_WAVEFORMS_SVG,
        hotspots: [
          {
            id: 'lp-pitch-low',
            x: 30,
            y: 22,
            label: 'Low pitch: long wavelength, low frequency',
            description:
              'The top waveform shows a low-pitch note like the open E string of a bass guitar, at about 80 Hz. The wave repeats slowly, so each cycle takes a long time. Few oscillations per second means a low frequency and a low pitch.',
          },
          {
            id: 'lp-pitch-high',
            x: 30,
            y: 60,
            label: 'High pitch: short wavelength, high frequency',
            description:
              'The bottom waveform shows a high-pitch note like the top E of a violin, at about 660 Hz. The wave repeats many times in the same window, so each cycle is short. Many oscillations per second means a high frequency and a high pitch.',
          },
          {
            id: 'lp-pitch-rule',
            x: 50,
            y: 95,
            label: 'Pitch tracks frequency, in Hz',
            description:
              'The rule is direct: higher frequency means higher pitch, lower frequency means lower pitch. Frequency is measured in hertz (Hz). A 200 Hz tone makes 200 complete oscillations every second.',
          },
        ],
      },
    },
    {
      id: 'lp-scene-loudness',
      title: 'Loudness and Amplitude',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a quiet and a loud waveform drawn at the same pitch.',
      data: {
        viewBox: '0 0 800 400',
        svg: LOUDNESS_WAVEFORMS_SVG,
        hotspots: [
          {
            id: 'lp-loud-quiet',
            x: 30,
            y: 22,
            label: 'Quiet: small amplitude',
            description:
              'The top waveform has a small amplitude. The peak is close to the rest line. The same pitch and the same wavelength as the louder example below, but the sound is quiet because the particles vibrate over a smaller distance.',
          },
          {
            id: 'lp-loud-loud',
            x: 30,
            y: 60,
            label: 'Loud: large amplitude',
            description:
              'The bottom waveform has a large amplitude. The peak is far from the rest line. The pitch is unchanged (the wave repeats at the same rate), but the sound is louder because the air particles swing further on each cycle.',
          },
          {
            id: 'lp-loud-rule',
            x: 50,
            y: 95,
            label: 'Loudness tracks amplitude',
            description:
              'The rule is direct: a taller wave is louder, a shorter wave is quieter. Loudness is set by amplitude only. Pitch and loudness can change independently, so a violin can play a quiet 660 Hz note or a loud 660 Hz note without altering the frequency.',
          },
        ],
      },
    },
    {
      id: 'lp-scene-hearing-range',
      title: 'The Human Hearing Range',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the human audible band and the infrasound and ultrasound regions either side.',
      data: {
        viewBox: '0 0 800 400',
        svg: HEARING_RANGE_SVG,
        hotspots: [
          {
            id: 'lp-range-audible',
            x: 52,
            y: 40,
            label: 'Audible band: 20 Hz to 20 kHz',
            description:
              'The shaded band shows the range a healthy young human ear can hear: about 20 Hz at the low end up to about 20 kHz (20 000 Hz) at the high end. As people get older the top of the range drops; many adults cannot hear above 15 kHz.',
          },
          {
            id: 'lp-range-infrasound',
            x: 22,
            y: 30,
            label: 'Infrasound: below 20 Hz',
            description:
              'Frequencies below 20 Hz are called infrasound. Humans cannot hear them but can sometimes feel them as a rumble. Sources include earthquakes, large drums and the pedal notes of a big church organ at around 30 Hz (just inside the audible band).',
          },
          {
            id: 'lp-range-ultrasound',
            x: 82,
            y: 30,
            label: 'Ultrasound: above 20 kHz',
            description:
              'Frequencies above 20 kHz are called ultrasound. Humans cannot hear them but many animals can. Bats use ultrasound for echolocation, dog whistles work at about 25 kHz, and ultrasound scanners image a foetus by reflecting MHz pulses off soft tissue.',
          },
          {
            id: 'lp-range-mosquito',
            x: 73,
            y: 87,
            label: 'Teenager-only mosquito alarm at 17 kHz',
            description:
              'A 17 kHz tone sits inside the audible band for young ears but most adults cannot hear it. Some shops use this idea to deter teenagers from loitering. The frequency is still audible (under 20 kHz), so it is not ultrasound.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'lp-worked-1',
      title: 'Classify three sounds: infrasound, audible, or ultrasound',
      steps: [
        {
          explanation:
            'Set out the rule. Humans hear from about 20 Hz to about 20 kHz. Below 20 Hz is infrasound; above 20 kHz is ultrasound; in between is audible.',
        },
        {
          explanation:
            'Sound A: a church organ pedal note at 30 Hz. 30 Hz is above 20 Hz and well below 20 kHz, so it is audible. It will sound very low to a listener.',
          maths: '20 Hz < 30 Hz < 20 000 Hz, so audible',
        },
        {
          explanation:
            'Sound B: a bat squeak at 40 kHz. Convert: 40 kHz = 40 000 Hz, which is above 20 000 Hz. So sound B is ultrasound and is not audible to humans.',
          maths: '40 000 Hz > 20 000 Hz, so ultrasound',
        },
        {
          explanation:
            'Sound C: a deep underground hum at 8 Hz. 8 Hz is below 20 Hz, so it is infrasound. A pupil may feel a rumble in the chest but will not hear a note.',
          maths: '8 Hz < 20 Hz, so infrasound',
        },
        {
          explanation:
            'Sanity check: the boundary numbers (20 Hz and 20 kHz) are part of the audible band. A 20 kHz tone is just barely audible to a child, a 19 kHz tone is firmly audible, and 21 kHz is ultrasound.',
        },
      ],
    },
    {
      id: 'lp-worked-2',
      title: 'Read two waveforms: which is louder, which is higher pitched?',
      steps: [
        {
          explanation:
            'Set out the rules. Pitch is set by frequency (how many waves per second, equivalently how short each wavelength is on the trace). Loudness is set by amplitude (how tall the peaks are).',
        },
        {
          explanation:
            'Look at the wavelengths. Wave P shows 4 full cycles in the window; Wave Q shows 8 full cycles in the same window. Q packs in more oscillations per second, so Q has the higher frequency and the higher pitch.',
          maths: 'f_Q > f_P, so pitch of Q > pitch of P',
        },
        {
          explanation:
            'Look at the amplitudes. Wave P reaches a peak 3 cm above the rest line; Wave Q only reaches 1 cm. P has the larger amplitude, so P is the louder sound.',
          maths: 'a_P > a_Q, so loudness of P > loudness of Q',
        },
        {
          explanation:
            'State the answer. Wave P is louder but lower in pitch; Wave Q is quieter but higher in pitch. The two properties are read off independently: amplitude alone for loudness, frequency alone for pitch.',
        },
      ],
    },
    {
      id: 'lp-worked-3',
      title: 'Convert a frequency in kilohertz to hertz',
      steps: [
        {
          explanation:
            'Set out the unit. 1 kHz means 1000 Hz, the same way that 1 km is 1000 m. So a frequency in kilohertz is just a frequency in hertz with the unit shrunk by a factor of 1000.',
        },
        {
          explanation:
            'Convert 5 kHz to Hz. Multiply by 1000.',
          maths: '5 kHz = 5 x 1000 Hz = 5000 Hz',
        },
        {
          explanation:
            'Compare against the audible band. 5000 Hz sits between 20 Hz and 20 000 Hz, so a 5 kHz tone is audible to humans. It would sound quite high, near the top of a piano keyboard.',
        },
        {
          explanation:
            'State the answer. 5 kHz = 5000 Hz, and the tone is in the audible band.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'lp-q1',
      type: 'multiple-choice',
      stem: 'Which property of a sound wave sets its pitch?',
      tier: 'core',
      options: [
        'The frequency of the wave.',
        'The amplitude of the wave.',
        'The colour of the wave.',
        'The temperature of the air.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'lp-mis-loud-equals-high',
      hint: 'Pitch is about how high or low a note sounds. Think about how many oscillations the wave makes each second.',
    },
    {
      id: 'lp-q2',
      type: 'multiple-choice',
      stem: 'Which property of a sound wave sets its loudness?',
      tier: 'core',
      options: [
        'The frequency of the wave.',
        'The amplitude of the wave.',
        'The wavelength of the wave.',
        'The speed of the wave.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'lp-mis-louder-needs-higher-frequency',
      hint: 'Loudness is about how strong the sound is. A taller wave on a trace means a louder sound.',
    },
    {
      id: 'lp-q3',
      type: 'multiple-choice',
      stem: 'What is the approximate range of frequencies a healthy young human ear can hear?',
      tier: 'core',
      options: [
        '20 Hz to 20 kHz.',
        '0 Hz to 100 Hz.',
        '200 Hz to 2 kHz.',
        '1 kHz to 1 MHz.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The lower limit is around 20 Hz and the upper limit is around 20 000 Hz.',
    },
    {
      id: 'lp-q4',
      type: 'multiple-choice',
      stem: 'A pupil in a Leeds classroom hears a 25 kHz tone played through a speaker. Which statement is true?',
      tier: 'core',
      options: [
        'They will hear a very low note, because 25 kHz is below 20 Hz.',
        'They will hear it as a very loud note, because kHz means loud.',
        'They will not hear it, because 25 kHz is above the human hearing range.',
        'They will hear it as a middle-range note, because all kHz tones are audible.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'lp-mis-everyone-hears-everything',
      hint: '25 kHz = 25 000 Hz. Compare it with the upper limit of 20 kHz.',
    },
    {
      id: 'lp-q5',
      type: 'numeric-entry',
      stem: 'A bass guitar plays the open E string at a frequency of 80 Hz. How many complete oscillations does the string make in 1 second?',
      tier: 'core',
      correctAnswer: 80,
      xpValue: 10,
      hint: 'Frequency in Hz is the number of complete oscillations per second.',
    },
    {
      id: 'lp-q6',
      type: 'numeric-entry',
      stem: 'A dog whistle has a frequency of 25 kHz. Convert this to hertz.',
      tier: 'core',
      correctAnswer: 25000,
      unit: 'Hz',
      xpValue: 10,
      misconceptionId: 'lp-mis-khz-prefix-ignored',
      hint: '1 kHz = 1000 Hz, so multiply by 1000.',
    },
    {
      id: 'lp-q7',
      type: 'multiple-choice',
      stem: 'Two pure-tone waveforms are drawn on the same trace. Wave X has tall peaks and few cycles in the window. Wave Y has short peaks and many cycles. Which sentence is right?',
      tier: 'core',
      options: [
        'X is louder and lower in pitch; Y is quieter and higher in pitch.',
        'X is quieter and higher in pitch; Y is louder and lower in pitch.',
        'X is louder and higher in pitch; Y is quieter and lower in pitch.',
        'They sound identical, because the traces have the same length.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'lp-mis-amplitude-pitch-swap',
      hint: 'Tall peaks = loud. Many cycles per second = high pitch.',
    },
    {
      id: 'lp-q8',
      type: 'multiple-choice',
      stem: 'A church organ pedal note plays at 30 Hz. Which best describes this sound?',
      tier: 'confident',
      options: [
        'Infrasound, because it is below 100 Hz.',
        'Audible, because 30 Hz is above 20 Hz and well below 20 kHz.',
        'Ultrasound, because the organ is large.',
        'Inaudible, because 30 Hz is below 20 Hz.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'lp-mis-low-is-infra',
      hint: '20 Hz is the lower limit. 30 Hz is just inside the audible band.',
    },
    {
      id: 'lp-q9',
      type: 'numeric-entry',
      stem: 'A violinist in a York school plays a tone at 5 kHz. Convert the frequency to hertz, then say in your head whether it is audible. Enter the number of hertz.',
      tier: 'confident',
      correctAnswer: 5000,
      unit: 'Hz',
      xpValue: 15,
      hint: '5 kHz = 5 x 1000 Hz.',
    },
    {
      id: 'lp-q10',
      type: 'numeric-entry',
      stem: 'A 200 Hz tuning fork is struck and rings sharply. How many complete oscillations does the fork make in 1 s?',
      tier: 'confident',
      correctAnswer: 200,
      xpValue: 15,
      hint: 'Frequency in Hz equals oscillations per second.',
    },
    {
      id: 'lp-q11',
      type: 'multiple-choice',
      stem: 'A teenage pupil in Manchester hears a 17 kHz mosquito alarm that her parents cannot hear. Which is the best reason?',
      tier: 'confident',
      options: [
        '17 kHz is ultrasound, so only teenagers can hear it.',
        '17 kHz is infrasound, so adults block it out.',
        '17 kHz is too loud for adults.',
        '17 kHz is audible, but adults often lose the top of the hearing range with age, so adults near 20 kHz hear less.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'lp-mis-everyone-hears-everything',
      hint: '17 kHz is below 20 kHz, so it is inside the audible band. But the top of the range shrinks with age.',
    },
    {
      id: 'lp-q12',
      type: 'multiple-choice',
      stem: 'Which everyday example is most clearly ultrasound?',
      tier: 'confident',
      options: [
        'A bass drum being struck taking 0.5 s to fade.',
        'A church organ pedal note at 30 Hz.',
        'A foetal ultrasound scan that uses MHz pulses.',
        'A violin playing a high note at 660 Hz.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Ultrasound is above 20 kHz. Look for the example with a much higher frequency than that.',
    },
    {
      id: 'lp-q13',
      type: 'numeric-entry',
      stem: 'A trace shows wave A reaching a peak 2 cm above the rest line and wave B reaching 4 cm above the rest line. Both waves have the same wavelength. By what factor is wave B louder than wave A? Enter the ratio of amplitudes (B divided by A).',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      misconceptionId: 'lp-mis-amplitude-pitch-swap',
      hint: 'Loudness tracks amplitude. Wave B has twice the amplitude. Divide 4 cm by 2 cm.',
    },
    {
      id: 'lp-q14',
      type: 'spot-misconception',
      stem: 'Aarav says, "If you turn the volume up on a violin playing the same note, the pitch must rise as well, because the wave is bigger."',
      tier: 'confident',
      statements: [
        {
          text: 'Aarav is right. A bigger wave always means a higher pitch as well as a louder sound.',
          isMisconception: true,
        },
        {
          text: 'Aarav is wrong. Loudness is set by amplitude and pitch is set by frequency. Turning the volume up makes the wave taller (louder) without changing how often it repeats (pitch).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'lp-mis-loud-equals-high',
    },
    {
      id: 'lp-q15',
      type: 'drag-order',
      stem: 'Put the steps in the right order for deciding whether a single tone is infrasound, audible, or ultrasound.',
      tier: 'confident',
      items: [
        'State the band: infrasound (below 20 Hz), audible (20 Hz to 20 kHz), or ultrasound (above 20 kHz).',
        'Read off the frequency of the tone, including its unit (Hz or kHz).',
        'Compare the frequency in hertz against the 20 Hz and 20 000 Hz boundaries.',
        'If the unit is kHz, multiply by 1000 to convert to Hz.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Read the value first, then convert to hertz, then compare, then state the band.',
    },
    {
      id: 'lp-q16',
      type: 'multiple-choice',
      stem: 'A bat in a Cotswolds barn squeaks at 50 kHz to find its prey. Which best describes the sound?',
      tier: 'challenge',
      options: [
        'Infrasound, because 50 kHz is below 20 Hz.',
        'Audible, because 50 kHz is between 20 Hz and 20 kHz.',
        'Ultrasound, because 50 kHz is above 20 kHz.',
        'Silent, because the bat is small.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'lp-mis-low-is-infra',
      hint: 'Convert: 50 kHz = 50 000 Hz. Compare to the upper limit of human hearing.',
    },
    {
      id: 'lp-q17',
      type: 'numeric-entry',
      stem: 'A speaker in a Cardiff school lab plays a steady tone at 440 Hz (concert A). How many complete oscillations does it produce in 2 s?',
      tier: 'challenge',
      correctAnswer: 880,
      xpValue: 20,
      hint: 'Oscillations in t seconds = frequency in Hz x t. Multiply 440 by 2.',
    },
    {
      id: 'lp-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is classifying a sound at 15 kHz (a teenage mosquito alarm) against the human hearing range.',
      tier: 'challenge',
      steps: [
        'Read off the frequency: f = 15 kHz.',
        'Convert to hertz: 15 kHz x 1000 = 15 000 Hz.',
        'Recall the hearing range: about 20 Hz to 20 000 Hz for a young ear.',
        null,
        'State the band: the tone is audible (just below the upper limit). State why some adults cannot hear it: the upper limit of hearing drops with age, so many adults lose tones above about 14 kHz.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Compare the converted frequency with the boundaries: 20 Hz < 15 000 Hz < 20 000 Hz, so the tone sits inside the audible band.',
      xpValue: 20,
    },
    {
      id: 'lp-q19',
      type: 'spot-misconception',
      stem: 'Marcus draws two waves on the board. Wave M has tall peaks and few cycles in the window. Wave N has short peaks and many cycles. He labels them.',
      tier: 'challenge',
      statements: [
        {
          text: 'Marcus says: "M is high in pitch because the peaks are tall, and N is low in pitch because the peaks are short." This sentence is wrong; he has swapped amplitude with frequency.',
          isMisconception: true,
        },
        {
          text: 'Marcus says: "M is loud and low in pitch because its peaks are tall and its cycles are slow. N is quiet and high in pitch because its peaks are short and its cycles are quick." This sentence is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'lp-mis-amplitude-pitch-swap',
    },
    {
      id: 'lp-q20',
      type: 'drag-order',
      stem: 'Three pure tones are played: a 30 Hz organ pedal, a 660 Hz violin top E, and a 17 kHz teenage alarm. Put them in order from lowest pitch to highest pitch.',
      tier: 'challenge',
      items: [
        '17 kHz teenage mosquito alarm (17 000 Hz).',
        '30 Hz church organ pedal note.',
        '660 Hz violin top E.',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 20,
      hint: 'Pitch tracks frequency. Convert all to Hz first, then sort smallest to largest.',
    },
    {
      id: 'lp-q21',
      type: 'numeric-entry',
      stem: 'A foghorn in a Devon harbour rings out a low note at 60 Hz. A foetal ultrasound scanner uses 2 MHz pulses. How many times higher is the scanner frequency than the foghorn frequency? Enter the ratio (scanner divided by foghorn).',
      tier: 'challenge',
      correctAnswer: 33333,
      xpValue: 20,
      hint: '2 MHz = 2 000 000 Hz. Divide 2 000 000 by 60. Round to the nearest whole number.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2020, Paper 1F, candidates wrote that a louder sound has a higher pitch, conflating amplitude with frequency.
    {
      id: 'lp-mis-loud-equals-high',
      description:
        'Believing that a louder sound has a higher pitch, mixing up amplitude (loudness) with frequency (pitch).',
      triggerAnswer: 'loud-equals-high',
      correction:
        'Loudness is set by amplitude only. Pitch is set by frequency only. Turning up the volume of a note makes the wave taller, not faster, so the pitch does not change.',
      reExplanation:
        'A violin playing concert A at 440 Hz can be loud or quiet, but it stays at 440 Hz either way. On a trace, the height of the peaks changes (amplitude) while the number of cycles per second stays the same (frequency). Loud-vs-quiet and high-vs-low are two independent features of a sound wave.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/1F, candidates assumed all humans share the same auditory range and ignored age-related changes.
    {
      id: 'lp-mis-everyone-hears-everything',
      description:
        'Assuming every human hears the full 20 Hz to 20 kHz range, missing that the top of the range drops with age.',
      triggerAnswer: 'everyone-hears-everything',
      correction:
        'The 20 Hz to 20 kHz range is a guide for a healthy young ear. Many adults lose tones above about 14 kHz, which is why 17 kHz mosquito alarms work on teenagers but not their parents.',
      reExplanation:
        'A 17 kHz tone is still inside the audible band (it is below 20 kHz, so not ultrasound). But hearing damage and age both shave off the top of the range. So a teenager in Manchester may hear a shrill 17 kHz alarm while the adults nearby pass by without noticing. The boundaries are useful but not universal.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates called any low-pitched sound infrasound even when it was above 20 Hz.
    {
      id: 'lp-mis-low-is-infra',
      description:
        'Calling any low-pitched sound infrasound even when the frequency is above 20 Hz, or calling any high-pitched sound ultrasound below 20 kHz.',
      triggerAnswer: 'low-is-infra',
      correction:
        'Infrasound means below 20 Hz, full stop. Ultrasound means above 20 kHz. A 30 Hz church organ pedal note is low-pitched but it is still audible, not infrasound.',
      reExplanation:
        'The boundaries are fixed numbers, not feelings. A 30 Hz organ pedal sits above 20 Hz, so a human can hear it as a very deep note. An 8 Hz rumble from a passing lorry sits below 20 Hz, so it is infrasound and a person may feel it but not hear it. Check the number against 20 Hz and 20 000 Hz before naming the band.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates labelled a tall-peaked, slow wave as "high pitched" because of the tall peaks.
    {
      id: 'lp-mis-amplitude-pitch-swap',
      description:
        'Reading the height of a waveform peak as the pitch and the spacing of the peaks as the loudness, swapping the two features.',
      triggerAnswer: 'amplitude-pitch-swap',
      correction:
        'On a trace, the height of the peaks is the amplitude, which sets loudness. The number of cycles per second (or the spacing of the peaks) is the frequency, which sets pitch. Read them off separately.',
      reExplanation:
        'A bass guitar can play a loud low note (tall peaks, few cycles) or a quiet high note (short peaks, many cycles). The two are independent. To compare two traces: first look at the heights for loudness, then count the cycles per second for pitch. Mixing them up gives the wrong answer on most exam questions about waveforms.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that 5 kHz means 5 hertz because they ignored the kilo prefix.
    {
      id: 'lp-mis-khz-prefix-ignored',
      description:
        'Treating a frequency in kilohertz as if the kilo prefix were not there, for example writing 5 kHz = 5 Hz instead of 5000 Hz.',
      triggerAnswer: 'khz-prefix-ignored',
      correction:
        'The kilo prefix means a factor of 1000. So 5 kHz = 5 x 1000 Hz = 5000 Hz. Always convert kHz to Hz before comparing with the 20 Hz and 20 000 Hz boundaries.',
      reExplanation:
        'A 5 kHz tone sits well inside the audible band because 5000 Hz is between 20 and 20 000. Drop the kilo and you would get 5 Hz, which is infrasound, and you would draw the wrong conclusion about whether a human could hear it. The same trap catches MHz (a million Hz). A 2 MHz medical scanner pulse is 2 000 000 Hz, far above the audible band, so it is ultrasound.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates wrote that a sound is "louder" because the frequency went up, missing that loudness depends only on amplitude.
    {
      id: 'lp-mis-louder-needs-higher-frequency',
      description:
        'Claiming a sound gets louder when the frequency rises, missing that loudness depends only on amplitude (not frequency).',
      triggerAnswer: 'louder-needs-higher-frequency',
      correction:
        'Loudness is set by amplitude alone. A high-frequency note can be quiet, and a low-frequency note can be loud. Volume controls change amplitude, not frequency.',
      reExplanation:
        'Turn the volume knob on a guitar amp and the tall peaks of the waveform grow, but the spacing between cycles is unchanged: louder, same pitch. Press a higher fret and the spacing shrinks, but the peak height need not change: same loudness, higher pitch. The two features sit in different parts of the wave and move independently.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesLoudnessPitchZoneNodes = [wavesLoudnessPitch]
