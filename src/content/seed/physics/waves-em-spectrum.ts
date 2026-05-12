import type { SkillNode } from '@/types/content'

const EM_SPECTRUM_BAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The seven regions of the electromagnetic spectrum</text>

    <!-- Wavelength axis (top) and frequency axis (bottom) labels -->
    <text x="60" y="70" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">long wavelength λ</text>
    <text x="740" y="70" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">short wavelength λ</text>
    <line x1="60" y1="80" x2="740" y2="80" stroke-width="2" />
    <polygon points="68,73 55,80 68,87" fill="currentColor" stroke="none" />
    <polygon points="732,73 745,80 732,87" fill="currentColor" stroke="none" />

    <!-- Seven coloured bands as labelled rectangles -->
    <rect x="60" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.10" stroke="currentColor" />
    <text x="110" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">radio</text>
    <text x="110" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">BBC Radio</text>

    <rect x="160" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.20" stroke="currentColor" />
    <text x="210" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">microwave</text>
    <text x="210" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">4G mast</text>

    <rect x="260" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.30" stroke="currentColor" />
    <text x="310" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">infrared</text>
    <text x="310" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">TV remote</text>

    <rect x="360" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.40" stroke="currentColor" />
    <text x="410" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">visible</text>
    <text x="410" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sunlight</text>

    <rect x="460" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.50" stroke="currentColor" />
    <text x="510" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">ultraviolet</text>
    <text x="510" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">UV index</text>

    <rect x="560" y="120" width="100" height="80" fill="currentColor" fill-opacity="0.60" stroke="currentColor" />
    <text x="610" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">X-ray</text>
    <text x="610" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">A and E scan</text>

    <rect x="660" y="120" width="80" height="80" fill="currentColor" fill-opacity="0.75" stroke="currentColor" />
    <text x="700" y="165" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">gamma</text>
    <text x="700" y="185" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">sterilise kit</text>

    <!-- Frequency axis (bottom) -->
    <line x1="60" y1="240" x2="740" y2="240" stroke-width="2" />
    <polygon points="68,233 55,240 68,247" fill="currentColor" stroke="none" />
    <polygon points="732,233 745,240 732,247" fill="currentColor" stroke="none" />
    <text x="60" y="260" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">low frequency f</text>
    <text x="740" y="260" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">high frequency f</text>

    <!-- Family note -->
    <text x="400" y="300" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">All seven regions are transverse waves that travel at 3 x 10^8 m/s in a vacuum.</text>
    <text x="400" y="325" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Wavelength gets shorter and frequency gets higher as you move from radio to gamma.</text>
    <text x="400" y="345" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">Mnemonic: Roman Men Invented Very Unusual X-ray Guns.</text>
  </g>
`

const VISIBLE_CLOSEUP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Visible light: a thin slice of the spectrum, red to violet</text>

    <!-- Wavelength axis -->
    <text x="120" y="80" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">longer λ (700 nm)</text>
    <text x="680" y="80" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">shorter λ (400 nm)</text>

    <!-- Six bands roughly equal: red, orange, yellow, green, blue, violet -->
    <rect x="120" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="166" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">red</text>

    <rect x="213" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="259" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">orange</text>

    <rect x="306" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.35" stroke="currentColor" />
    <text x="352" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">yellow</text>

    <rect x="399" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.45" stroke="currentColor" />
    <text x="445" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">green</text>

    <rect x="492" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.55" stroke="currentColor" />
    <text x="538" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">blue</text>

    <rect x="585" y="100" width="93" height="100" fill="currentColor" fill-opacity="0.70" stroke="currentColor" />
    <text x="631" y="155" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">violet</text>

    <!-- Frequency arrow underneath -->
    <line x1="120" y1="240" x2="680" y2="240" stroke-width="2" />
    <polygon points="672,233 685,240 672,247" fill="currentColor" stroke="none" />
    <text x="120" y="260" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">lower f</text>
    <text x="680" y="260" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">higher f</text>

    <!-- Notes -->
    <text x="400" y="300" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Red light sits next to infrared (longer λ). Violet light sits next to ultraviolet (shorter λ).</text>
    <text x="400" y="325" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Order ROYGBIV by frequency: red (lowest) up to violet (highest).</text>
    <text x="400" y="350" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Visible light is the only region your eyes can detect.</text>
  </g>
`

const WAVELENGTH_SCALE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Wavelengths across the spectrum: km down to picometres</text>

    <!-- Long bar showing scale orders of magnitude -->
    <line x1="60" y1="200" x2="740" y2="200" stroke-width="3" />

    <!-- Tick markers at each region -->
    <line x1="100" y1="190" x2="100" y2="210" stroke-width="2" />
    <text x="100" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">radio</text>
    <text x="100" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 1 km</text>
    <text x="100" y="248" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">to 1 m</text>

    <line x1="210" y1="190" x2="210" y2="210" stroke-width="2" />
    <text x="210" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">microwave</text>
    <text x="210" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 1 cm</text>

    <line x1="320" y1="190" x2="320" y2="210" stroke-width="2" />
    <text x="320" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">infrared</text>
    <text x="320" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 10 micro-m</text>

    <line x1="430" y1="190" x2="430" y2="210" stroke-width="2" />
    <text x="430" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">visible</text>
    <text x="430" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 500 nm</text>

    <line x1="540" y1="190" x2="540" y2="210" stroke-width="2" />
    <text x="540" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">ultraviolet</text>
    <text x="540" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 100 nm</text>

    <line x1="650" y1="190" x2="650" y2="210" stroke-width="2" />
    <text x="650" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">X-ray</text>
    <text x="650" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 1 nm</text>

    <line x1="720" y1="190" x2="720" y2="210" stroke-width="2" />
    <text x="720" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">gamma</text>
    <text x="720" y="230" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">under 1 pm</text>

    <!-- Conversion reminders -->
    <text x="400" y="295" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Unit reminders:</text>
    <text x="200" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 km = 1000 m</text>
    <text x="400" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 cm = 0.01 m</text>
    <text x="600" y="320" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 mm = 0.001 m</text>
    <text x="200" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 micro-m = 10^-6 m</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 nm = 10^-9 m</text>
    <text x="600" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 pm = 10^-12 m</text>
  </g>
`

export const wavesEmSpectrum: SkillNode = {
  id: 'physics-waves-em-spectrum',
  title: 'The Electromagnetic Spectrum',
  description:
    'The electromagnetic (EM) spectrum is a family of transverse waves that all travel at the speed of light, 3 x 10^8 m/s, when they pass through a vacuum. The seven regions in order of longest wavelength to shortest are radio, microwave, infrared, visible, ultraviolet, X-ray, and gamma. As you move along that list the wavelength gets shorter and the frequency gets higher. Visible light is a thin slice in the middle, ordered red (longest λ) through to violet (shortest λ). UK examples sit on every region: BBC Radio (radio), 4G phone masts (microwave), a TV remote (infrared), sunlight and a torch (visible), the Met Office UV index (ultraviolet), an A and E X-ray (X-ray), and gamma rays used to sterilise medical kit. By the end of this node you can order the seven regions, classify a UK example by region, and pick the region with higher frequency or shorter wavelength.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'confident',
  prerequisites: ['physics-waves-anatomy'],
  curriculum: {
    ks3Objective:
      'Light waves travelling through a vacuum; speed of light; the EM spectrum as a family of transverse waves.',
    awardingBodies: {
      aqa: '4.6.3.1 Types of electromagnetic waves; the seven regions in order of frequency and wavelength (GCSE Physics 8463)',
      edexcel:
        'Topic 5.3 The electromagnetic spectrum; ordering radio, micro, IR, visible, UV, X-ray, gamma (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light and the electromagnetic spectrum; structure and order of the EM spectrum (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'em-scene-spectrum-bar',
      title: 'The Seven Regions in Order',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the spectrum bar to read about a region and the UK example next to it.',
      data: {
        viewBox: '0 0 800 400',
        svg: EM_SPECTRUM_BAR_SVG,
        hotspots: [
          {
            id: 'em-hot-radio',
            x: 14,
            y: 40,
            label: 'Radio: longest wavelength, lowest frequency',
            description:
              'Radio waves sit at the long-wavelength, low-frequency end of the spectrum. BBC Radio 4 broadcasts on Long Wave at 198 kHz with a wavelength of about 1.5 km, well over the height of the Shard.',
          },
          {
            id: 'em-hot-microwave',
            x: 26,
            y: 40,
            label: 'Microwave: phone masts and ovens',
            description:
              'Microwaves have wavelengths around 1 cm. A 4G phone mast uses around 800 MHz to 2.6 GHz. A kitchen microwave oven heats food at 2.45 GHz.',
          },
          {
            id: 'em-hot-infrared',
            x: 39,
            y: 40,
            label: 'Infrared: heat and TV remotes',
            description:
              'Infrared (IR) wavelengths are about 10 micrometres. A TV remote sends short IR pulses. You feel IR as warmth from a radiator or a grill.',
          },
          {
            id: 'em-hot-visible',
            x: 51,
            y: 40,
            label: 'Visible light: what your eyes detect',
            description:
              'Visible light wavelengths run from about 700 nm (red) down to about 400 nm (violet). Sunlight and a torch beam contain all six colours mixed together.',
          },
          {
            id: 'em-hot-uv',
            x: 64,
            y: 40,
            label: 'Ultraviolet: sunburn and UV index',
            description:
              'Ultraviolet (UV) wavelengths are about 100 nm. The Met Office UV index uses 0 to 11 to warn how strong sunburn risk is. UV is invisible to the eye.',
          },
          {
            id: 'em-hot-xray',
            x: 76,
            y: 40,
            label: 'X-ray: A and E imaging',
            description:
              'X-rays have wavelengths near 1 nm. In an A and E department a radiographer aims X-rays through the body so dense bone shows up white on a film.',
          },
          {
            id: 'em-hot-gamma',
            x: 88,
            y: 40,
            label: 'Gamma: shortest wavelength, highest frequency',
            description:
              'Gamma rays have wavelengths smaller than 1 pm and the highest frequencies of all. NHS hospitals use gamma rays to sterilise surgical kit and bandages.',
          },
          {
            id: 'em-hot-speed',
            x: 50,
            y: 78,
            label: 'All seven travel at the speed of light',
            description:
              'Every region of the EM spectrum is a transverse wave and every region travels at 3 x 10^8 m/s in a vacuum. They differ in wavelength and frequency, not in speed.',
          },
        ],
      },
    },
    {
      id: 'em-scene-visible-closeup',
      title: 'Visible Light Close-up',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read which colour sits at which end of the visible band.',
      data: {
        viewBox: '0 0 800 400',
        svg: VISIBLE_CLOSEUP_SVG,
        hotspots: [
          {
            id: 'em-vis-red',
            x: 21,
            y: 40,
            label: 'Red: longest wavelength of visible light',
            description:
              'Red light has the longest wavelength your eye can see, near 700 nm. It sits next to infrared on the spectrum.',
          },
          {
            id: 'em-vis-violet',
            x: 79,
            y: 40,
            label: 'Violet: shortest wavelength of visible light',
            description:
              'Violet light has the shortest visible wavelength, near 400 nm, and the highest visible frequency. It sits next to ultraviolet.',
          },
          {
            id: 'em-vis-order',
            x: 50,
            y: 80,
            label: 'Order by frequency: red up to violet',
            description:
              'ROYGBIV runs in order of rising frequency: red, orange, yellow, green, blue, indigo, violet. The same list also runs in order of falling wavelength.',
          },
        ],
      },
    },
    {
      id: 'em-scene-wavelength-scale',
      title: 'Wavelength Scale: from km to pm',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare wavelengths across the spectrum and switch between sub-units.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVELENGTH_SCALE_SVG,
        hotspots: [
          {
            id: 'em-scale-radio',
            x: 13,
            y: 50,
            label: 'Radio: kilometres to metres',
            description:
              'Long Wave radio uses wavelengths of about 1 km. FM radio uses about 3 m. Both are far longer than any kitchen object.',
          },
          {
            id: 'em-scale-visible',
            x: 54,
            y: 50,
            label: 'Visible: hundreds of nanometres',
            description:
              'Visible light wavelengths are about 400 to 700 nm. One nanometre is 10^-9 m, a billionth of a metre.',
          },
          {
            id: 'em-scale-gamma',
            x: 90,
            y: 50,
            label: 'Gamma: picometres',
            description:
              'Gamma wavelengths can drop below 1 pm (10^-12 m). That is smaller than a single atom.',
          },
          {
            id: 'em-scale-units',
            x: 50,
            y: 82,
            label: 'Sub-unit reminders',
            description:
              'Common conversions: 1 km = 1000 m, 1 mm = 0.001 m, 1 micrometre = 10^-6 m, 1 nm = 10^-9 m, 1 pm = 10^-12 m. Put values in metres before comparing.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'em-worked-classify',
      title: 'Classify a UK example by region',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in a Bristol classroom uses a TV remote to change the channel. The remote sends an invisible signal to the television. We want to name the EM region that the remote uses.',
        },
        {
          explanation:
            'Recall the cue for each region. Radio is broadcast signals. Microwave is phone masts and ovens. Infrared (IR) is heat and remote controls. Visible is what the eye can detect. UV is sunburn risk. X-rays go through soft tissue. Gamma is used to sterilise medical kit.',
        },
        {
          explanation:
            'Match the cue. A TV remote sends a short, invisible signal that does not heat the room much and does not need a mast. The cue "remote control" lines up with infrared.',
        },
        {
          explanation:
            'State the answer. The TV remote uses infrared light. On the spectrum it sits between microwaves (longer λ) and visible light (shorter λ).',
        },
      ],
    },
    {
      id: 'em-worked-order',
      title: 'Which region has higher frequency?',
      steps: [
        {
          explanation:
            'Set out the situation. A textbook question asks which has the higher frequency: ultraviolet or microwave.',
        },
        {
          explanation:
            'Recall the order from longest wavelength (lowest frequency) to shortest wavelength (highest frequency): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.',
          maths:
            'radio (low f) -> microwave -> infrared -> visible -> ultraviolet -> X-ray -> gamma (high f)',
        },
        {
          explanation:
            'Compare positions on the list. Microwave is second from the left, ultraviolet is fifth. Ultraviolet sits further to the right, so it has the shorter wavelength and the higher frequency.',
        },
        {
          explanation:
            'State the answer. Ultraviolet has the higher frequency. A sanity check: UV causes sunburn because each UV photon carries more energy than a microwave photon, which fits "higher frequency means more energy per wave".',
        },
      ],
    },
    {
      id: 'em-worked-frequency',
      title: 'Find the frequency of a radio wave with v = f λ',
      steps: [
        {
          explanation:
            'Set out the situation. A radio wave travels through air with a wavelength of 3 m. Air is close enough to a vacuum that we can use the EM speed 3 x 10^8 m/s. We want the frequency f.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'v = 3 x 10^8 m/s, λ = 3 m, f = ?',
        },
        {
          explanation:
            'Pick the right form. The wave equation v = f λ rearranges to f = v / λ when you want the frequency.',
          maths: 'f = v / λ',
        },
        {
          explanation: 'Substitute the numbers.',
          maths: 'f = (3 x 10^8) / 3',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'f = 1 x 10^8 Hz = 100 MHz',
        },
        {
          explanation:
            'State the answer with the unit. The frequency is 1 x 10^8 Hz, the same as 100 MHz. That sits in the FM radio band, a sensible check for a 3 m radio wavelength.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'em-q1',
      type: 'multiple-choice',
      stem: 'Which of these is the correct order of EM regions from longest wavelength to shortest wavelength?',
      tier: 'core',
      options: [
        'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.',
        'Gamma, X-ray, ultraviolet, visible, infrared, microwave, radio.',
        'Visible, infrared, microwave, radio, ultraviolet, X-ray, gamma.',
        'Radio, infrared, microwave, ultraviolet, visible, X-ray, gamma.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Radio waves have the longest wavelength. Gamma waves have the shortest.',
    },
    {
      id: 'em-q2',
      type: 'multiple-choice',
      stem: 'Which EM region is used by a typical TV remote control?',
      tier: 'core',
      options: ['Radio', 'Microwave', 'Infrared', 'Ultraviolet'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A remote sends a short invisible pulse. Think of the heat you feel near a grill.',
    },
    {
      id: 'em-q3',
      type: 'multiple-choice',
      stem: 'What speed do all EM waves travel at in a vacuum?',
      tier: 'core',
      options: [
        '340 m/s, the same as sound in air.',
        '3 x 10^8 m/s, the speed of light.',
        'It depends on the region: gamma is fastest, radio is slowest.',
        '1 x 10^8 m/s for every region.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'em-mis-different-speeds',
      hint: 'Every region of the spectrum travels at the same speed in a vacuum.',
    },
    {
      id: 'em-q4',
      type: 'multiple-choice',
      stem: 'Which colour of visible light has the longest wavelength?',
      tier: 'core',
      options: ['Violet', 'Green', 'Yellow', 'Red'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Red sits next to infrared. Violet sits next to ultraviolet.',
    },
    {
      id: 'em-q5',
      type: 'multiple-choice',
      stem: 'NHS hospitals sterilise surgical kit using a beam of high-energy waves with very short wavelengths. Which EM region is being used?',
      tier: 'core',
      options: ['Radio', 'Microwave', 'Infrared', 'Gamma'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Sterilisation needs very high-energy waves. Move to the short-wavelength end of the spectrum.',
    },
    {
      id: 'em-q6',
      type: 'numeric-entry',
      stem: 'BBC Radio Solent broadcasts on 999 kHz. Convert this frequency into Hz.',
      tier: 'core',
      correctAnswer: 999000,
      unit: 'Hz',
      xpValue: 10,
      hint: '1 kHz = 1000 Hz. Multiply 999 by 1000.',
    },
    {
      id: 'em-q7',
      type: 'numeric-entry',
      stem: 'A 4G phone mast transmits at 2.6 GHz. Convert this frequency into Hz.',
      tier: 'core',
      correctAnswer: 2600000000,
      unit: 'Hz',
      xpValue: 10,
      misconceptionId: 'em-mis-frequency-units',
      hint: '1 GHz = 1,000,000,000 Hz (10^9 Hz). Multiply 2.6 by 10^9.',
    },
    {
      id: 'em-q8',
      type: 'drag-order',
      stem: 'Put the seven EM regions in the correct order from LONGEST wavelength to SHORTEST wavelength.',
      tier: 'confident',
      items: [
        'Visible',
        'X-ray',
        'Radio',
        'Microwave',
        'Gamma',
        'Infrared',
        'Ultraviolet',
      ],
      correctOrder: [2, 3, 5, 0, 6, 1, 4],
      xpValue: 15,
      misconceptionId: 'em-mis-wrong-order',
      hint: 'Start with the region with the longest wavelength (broadcast signals). Finish with the region used to sterilise medical kit.',
    },
    {
      id: 'em-q9',
      type: 'multiple-choice',
      stem: 'Which sentence about the EM spectrum is correct?',
      tier: 'confident',
      options: [
        'Radio waves are not really EM waves; only visible and shorter regions count as EM.',
        'All seven regions are transverse waves that travel at 3 x 10^8 m/s in a vacuum.',
        'Each region travels at a different speed in a vacuum, with gamma the quickest.',
        'Visible light is a longitudinal wave but the other regions are transverse.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'em-mis-visible-separate',
      hint: 'The seven regions form one continuous family of transverse waves at one shared vacuum speed.',
    },
    {
      id: 'em-q10',
      type: 'multiple-choice',
      stem: 'Which pair correctly compares two regions of the spectrum?',
      tier: 'confident',
      options: [
        'Microwaves have a shorter wavelength than gamma rays.',
        'X-rays have a lower frequency than radio waves.',
        'Ultraviolet has a higher frequency than infrared.',
        'Visible light has a longer wavelength than radio waves.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'em-mis-wavelength-frequency-link',
      hint: 'Move from left to right on the spectrum bar: wavelength falls, frequency rises.',
    },
    {
      id: 'em-q11',
      type: 'numeric-entry',
      stem: 'An EM wave travels through a vacuum at 3 x 10^8 m/s with a wavelength of 3 m. Use f = v / λ to find the frequency, in Hz.',
      tier: 'confident',
      correctAnswer: 100000000,
      unit: 'Hz',
      xpValue: 15,
      hint: 'f = v / λ = (3 x 10^8) / 3. The answer is 1 x 10^8 Hz, the same as 100 MHz.',
    },
    {
      id: 'em-q12',
      type: 'numeric-entry',
      stem: 'A microwave inside an oven has a wavelength of about 0.12 m. With v = 3 x 10^8 m/s in air, find the frequency, in Hz. Round to the nearest whole number.',
      tier: 'confident',
      correctAnswer: 2500000000,
      unit: 'Hz',
      tolerance: 50000000,
      xpValue: 15,
      hint: 'f = v / λ = (3 x 10^8) / 0.12. The answer is around 2.5 x 10^9 Hz, the 2.45 GHz figure on a microwave oven label.',
    },
    {
      id: 'em-q13',
      type: 'multiple-choice',
      stem: 'A pupil hears a weather report mention the Met Office UV index. Which region of the EM spectrum carries the UV signal being measured?',
      tier: 'confident',
      options: [
        'Microwave, the region used by phone masts.',
        'Ultraviolet, just past the violet end of visible light.',
        'Infrared, just past the red end of visible light.',
        'Gamma, used to sterilise surgical kit.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'The clue is in the name. UV stands for ultraviolet.',
    },
    {
      id: 'em-q14',
      type: 'spot-misconception',
      stem: 'Aaliyah is told that radio waves and gamma rays are both EM waves.',
      tier: 'confident',
      statements: [
        {
          text: 'Aaliyah says radio waves and gamma rays are very different things and only one of them is a real EM wave; the other is a kind of sound wave.',
          isMisconception: true,
        },
        {
          text: 'Aaliyah says radio and gamma sit at opposite ends of the same EM family. Both are transverse waves that travel at 3 x 10^8 m/s in a vacuum; they differ in wavelength and frequency.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'em-mis-visible-separate',
    },
    {
      id: 'em-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the frequency of a microwave used by a phone mast. The wave travels at 3 x 10^8 m/s with a wavelength of 0.3 m.',
      tier: 'challenge',
      steps: [
        'Write the data: v = 3 x 10^8 m/s, λ = 0.3 m, f = ?',
        'Pick the right form: f = v / λ from v = f λ.',
        null,
        'Evaluate the arithmetic: f = 1 x 10^9 Hz.',
        'State the answer with the unit: the frequency is 1 x 10^9 Hz, the same as 1 GHz, a sensible value for a mobile phone mast.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the values into f = v / λ: f = (3 x 10^8) / 0.3.',
      xpValue: 20,
    },
    {
      id: 'em-q16',
      type: 'multiple-choice',
      stem: 'Which statement about visible light is correct?',
      tier: 'challenge',
      options: [
        'Red light has a higher frequency than violet light, because red is warmer.',
        'Red and violet light travel at different speeds through a vacuum.',
        'Violet light has a shorter wavelength and a higher frequency than red light.',
        'Visible light is not part of the EM spectrum.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'em-mis-wavelength-frequency-link',
      hint: 'Violet sits next to ultraviolet on the spectrum bar. Ultraviolet is higher in frequency than infrared.',
    },
    {
      id: 'em-q17',
      type: 'numeric-entry',
      stem: 'A green laser pointer has a wavelength of 532 nm. Convert this wavelength into metres. Give your answer in standard form (use the box for the number, in metres).',
      tier: 'challenge',
      correctAnswer: 5.32e-7,
      unit: 'm',
      tolerance: 1e-9,
      xpValue: 20,
      hint: '1 nm = 10^-9 m. Multiply 532 by 10^-9 to get 5.32 x 10^-7 m.',
    },
    {
      id: 'em-q18',
      type: 'numeric-entry',
      stem: 'A red light wave has a wavelength of 700 nm and travels at 3 x 10^8 m/s in a vacuum. Use f = v / λ to find the frequency, in Hz. Give your answer in standard form.',
      tier: 'challenge',
      correctAnswer: 4.29e14,
      unit: 'Hz',
      tolerance: 1e13,
      xpValue: 20,
      hint: 'First convert 700 nm to metres (7 x 10^-7 m). Then f = (3 x 10^8) / (7 x 10^-7).',
    },
    {
      id: 'em-q19',
      type: 'spot-misconception',
      stem: 'Bibek is told that an X-ray has a much shorter wavelength than a radio wave.',
      tier: 'challenge',
      statements: [
        {
          text: 'Bibek says: "Shorter wavelength must mean lower frequency, because a shorter wave has less going on." This sentence is wrong.',
          isMisconception: true,
        },
        {
          text: 'Bibek says: "Shorter wavelength means higher frequency for an EM wave, because v = f λ and v is fixed at 3 x 10^8 m/s in a vacuum. If λ falls, f must rise." This sentence is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'em-mis-wavelength-frequency-link',
    },
    {
      id: 'em-q20',
      type: 'multiple-choice',
      stem: 'A pupil compares the wavelength of an FM radio wave (about 3 m) with the wavelength of green light (about 500 nm). Roughly how many times longer is the radio wavelength?',
      tier: 'challenge',
      options: [
        'About 6 times longer.',
        'About 600 times longer.',
        'About 6 million times longer.',
        'About the same length, because both are EM waves.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'em-mis-same-size',
      hint: 'Put both in metres: 3 m and 500 x 10^-9 m = 5 x 10^-7 m. Divide 3 by 5 x 10^-7.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2019, Paper 1F, candidates wrote that radio and gamma are not part of the same wave family as visible light.
    {
      id: 'em-mis-visible-separate',
      description:
        'Treating visible light as a separate kind of wave from radio, microwave, X-ray, or gamma, instead of one slice of a single EM family.',
      triggerAnswer: 'visible-separate',
      correction:
        'Visible light is just one region of the EM spectrum. All seven regions are transverse waves that travel at 3 x 10^8 m/s in a vacuum.',
      reExplanation:
        'The seven regions sit on a single continuous bar. Move along it and the wavelength changes and the frequency changes, but the wave family does not. Radio, microwave, infrared, visible, ultraviolet, X-ray, and gamma all travel at the same speed in a vacuum and all behave as transverse waves. Visible light is the small slice your eyes can detect, not a separate kind of wave.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F Q5, candidates linked longer wavelength to higher frequency.
    {
      id: 'em-mis-wavelength-frequency-link',
      description:
        'Believing that longer wavelength means higher frequency, instead of the inverse link wavelength up means frequency down.',
      triggerAnswer: 'wrong-wavelength-frequency-link',
      correction:
        'For EM waves in a vacuum, v = f λ with v fixed at 3 x 10^8 m/s. Longer λ means lower f. Shorter λ means higher f.',
      reExplanation:
        'Picture the spectrum bar. Radio is on the long-wavelength end and has the lowest frequency. Gamma is on the short-wavelength end and has the highest frequency. The two axes run in opposite directions because v = f λ is fixed. If you double the wavelength of a wave at fixed speed, you halve its frequency. Always check direction: red light has longer λ than violet, so red has lower frequency.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02 Q3, candidates wrote that gamma rays travel faster than radio waves in a vacuum.
    {
      id: 'em-mis-different-speeds',
      description:
        'Claiming different regions of the EM spectrum travel at different speeds in a vacuum, often saying gamma is the fastest.',
      triggerAnswer: 'different-speeds',
      correction:
        'Every EM region has the same speed in a vacuum, 3 x 10^8 m/s. They differ in frequency and wavelength, not in speed.',
      reExplanation:
        'It is tempting to think gamma is faster because it carries more energy per wave. Energy and speed are different things. The relation v = f λ at fixed v = 3 x 10^8 m/s tells you the trade-off: more frequency means less wavelength, but the speed does not change. A 100 MHz radio wave and a 10^18 Hz gamma ray both cover 300,000 km in one second.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates put the seven EM regions in the wrong order, often swapping infrared with ultraviolet or putting visible at one end.
    {
      id: 'em-mis-wrong-order',
      description:
        'Placing the seven EM regions in the wrong order, for example swapping infrared and ultraviolet or starting the order with visible light.',
      triggerAnswer: 'wrong-order',
      correction:
        'The order from longest wavelength to shortest is: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.',
      reExplanation:
        'A mnemonic helps: "Roman Men Invented Very Unusual X-ray Guns" gives the initials R, M, I, V, U, X, G. Visible sits in the middle, with infrared on its long-wavelength side (red is next to infrared) and ultraviolet on its short-wavelength side (violet is next to ultraviolet). Reverse the list and you get order by frequency from lowest to highest.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, candidates underestimated the size gap between radio wavelengths and visible-light wavelengths.
    {
      id: 'em-mis-same-size',
      description:
        'Underestimating how different wavelengths across the spectrum are, treating a radio wave (metres) and a visible light wave (nanometres) as "about the same".',
      triggerAnswer: 'same-size',
      correction:
        'Radio wavelengths are about 10 million times longer than visible-light wavelengths. The EM spectrum spans many orders of magnitude.',
      reExplanation:
        'Put both into metres before comparing. An FM radio wave is about 3 m. Green light is about 500 nm = 5 x 10^-7 m. Divide: 3 / (5 x 10^-7) = 6 x 10^6, so the radio wave is about six million times longer. Gamma wavelengths sit at about 10^-12 m, so a radio wave can be a million million million (10^18) times longer than a gamma ray. The spectrum is huge.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, J259/02, candidates skipped unit conversion when given a frequency in MHz, kHz, or GHz.
    {
      id: 'em-mis-frequency-units',
      description:
        'Forgetting to convert kHz, MHz, or GHz into Hz before substituting into f = v / λ or v = f λ.',
      triggerAnswer: 'frequency-units',
      correction:
        'Convert frequency to base units (Hz) first. 1 kHz = 1000 Hz, 1 MHz = 10^6 Hz, 1 GHz = 10^9 Hz.',
      reExplanation:
        'If a phone mast operates at 2.6 GHz and you leave the value as 2.6 in a calculation, you will be out by a factor of 10^9. The conversion ladder is: 1 GHz = 1000 MHz = 1,000,000 kHz = 1,000,000,000 Hz. Always rewrite the frequency in Hz before you substitute into v = f λ, then check the wavelength is in metres and the speed is in m/s.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesEmSpectrumZoneNodes = [wavesEmSpectrum]
