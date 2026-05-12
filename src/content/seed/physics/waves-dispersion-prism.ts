import type { SkillNode } from '@/types/content'

const PRISM_DISPERSION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">White light through a triangular glass prism: dispersion into ROYGBIV</text>

    <!-- Triangular prism in the middle -->
    <polygon points="380,140 480,140 430,260" fill="currentColor" fill-opacity="0.08" stroke-width="3" />
    <text x="430" y="195" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">glass prism</text>

    <!-- Normal at entry face (left side of prism) -->
    <line x1="370" y1="180" x2="430" y2="220" stroke-dasharray="4,4" stroke-width="2" />
    <text x="368" y="178" font-size="11" stroke="none" fill="currentColor">normal</text>

    <!-- Incident white light beam from upper-left to the entry face -->
    <line x1="120" y1="160" x2="395" y2="200" stroke-width="4" />
    <polygon points="388,194 400,202 388,205" fill="currentColor" stroke="none" />
    <text x="150" y="150" font-size="12" font-weight="700" stroke="none" fill="currentColor">white light in</text>

    <!-- Dispersed colours leaving the right-hand face. Red bends least (top), violet bends most (bottom). -->
    <!-- Red -->
    <line x1="455" y1="210" x2="720" y2="170" stroke="#d00000" stroke-width="3" />
    <text x="730" y="172" font-size="12" font-weight="700" stroke="none" fill="#d00000">red (700 nm)</text>
    <!-- Orange -->
    <line x1="455" y1="210" x2="720" y2="200" stroke="#e85d04" stroke-width="3" />
    <text x="730" y="202" font-size="12" font-weight="700" stroke="none" fill="#e85d04">orange (620 nm)</text>
    <!-- Yellow -->
    <line x1="455" y1="210" x2="720" y2="230" stroke="#e9c000" stroke-width="3" />
    <text x="730" y="232" font-size="12" font-weight="700" stroke="none" fill="#e9c000">yellow (580 nm)</text>
    <!-- Green -->
    <line x1="455" y1="210" x2="720" y2="260" stroke="#2d8a2d" stroke-width="3" />
    <text x="730" y="262" font-size="12" font-weight="700" stroke="none" fill="#2d8a2d">green (520 nm)</text>
    <!-- Blue -->
    <line x1="455" y1="210" x2="720" y2="290" stroke="#1e4fd0" stroke-width="3" />
    <text x="730" y="292" font-size="12" font-weight="700" stroke="none" fill="#1e4fd0">blue (480 nm)</text>
    <!-- Indigo -->
    <line x1="455" y1="210" x2="720" y2="320" stroke="#4b0082" stroke-width="3" />
    <text x="730" y="322" font-size="12" font-weight="700" stroke="none" fill="#4b0082">indigo (440 nm)</text>
    <!-- Violet -->
    <line x1="455" y1="210" x2="720" y2="350" stroke="#7a009b" stroke-width="3" />
    <text x="730" y="352" font-size="12" font-weight="700" stroke="none" fill="#7a009b">violet (400 nm)</text>

    <!-- Caption -->
    <text x="400" y="60" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Red bends least, violet bends most. The prism separates the colours already present in white light.</text>
    <text x="400" y="78" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Each colour slows by a slightly different amount in glass, so each refracts by a slightly different angle.</text>
  </g>
`

const RAINBOW_DROPLET_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">How a rainbow forms in a water droplet</text>

    <!-- A single spherical water droplet -->
    <circle cx="430" cy="200" r="80" fill="currentColor" fill-opacity="0.06" stroke-width="3" />
    <text x="430" y="205" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">water droplet</text>

    <!-- Sunlight comes in from the upper-left -->
    <line x1="120" y1="120" x2="365" y2="170" stroke-width="4" />
    <polygon points="358,164 370,172 358,175" fill="currentColor" stroke="none" />
    <text x="140" y="108" font-size="12" font-weight="700" stroke="none" fill="currentColor">sunlight (white) from behind you</text>

    <!-- Light refracts on entry, reflects off the back of the droplet, then refracts again on exit -->
    <!-- Inside path: from entry (365,170) to the back wall (~500,210) -->
    <line x1="365" y1="170" x2="500" y2="210" stroke-dasharray="3,3" stroke-width="2" />
    <text x="430" y="155" font-size="11" stroke="none" fill="currentColor">refracts on entry</text>

    <!-- Reflected inside back to a lower exit point (~380,260) -->
    <line x1="500" y1="210" x2="380" y2="260" stroke-dasharray="3,3" stroke-width="2" />
    <text x="510" y="220" font-size="11" stroke="none" fill="currentColor">reflects off back wall</text>

    <!-- Exiting colours split: red (top, smaller deflection from sunlight axis) to violet (bottom) -->
    <line x1="380" y1="260" x2="180" y2="345" stroke="#d00000" stroke-width="3" />
    <text x="120" y="345" font-size="12" font-weight="700" stroke="none" fill="#d00000">red</text>
    <line x1="380" y1="260" x2="180" y2="360" stroke="#2d8a2d" stroke-width="3" />
    <text x="120" y="365" font-size="12" font-weight="700" stroke="none" fill="#2d8a2d">green</text>
    <line x1="380" y1="260" x2="180" y2="375" stroke="#7a009b" stroke-width="3" />
    <text x="120" y="385" font-size="12" font-weight="700" stroke="none" fill="#7a009b">violet</text>

    <!-- Observer at lower-left -->
    <circle cx="100" cy="320" r="18" />
    <circle cx="100" cy="320" r="5" fill="currentColor" />
    <text x="100" y="295" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">observer's eye</text>

    <!-- Caption -->
    <text x="400" y="55" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Sunlight refracts on the way in, reflects off the back of the drop, then refracts again on the way out.</text>
    <text x="400" y="73" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Each colour leaves at a slightly different angle, so the observer sees a band of colour with the Sun behind them.</text>
  </g>
`

const WAVELENGTH_SCALE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The visible spectrum: wavelength scale in nanometres</text>

    <!-- Colour band -->
    <rect x="80" y="120" width="640" height="80" fill="url(#spectrumBand)" stroke="currentColor" />

    <!-- Define gradient -->
    <defs>
      <linearGradient id="spectrumBand" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d00000" />
        <stop offset="17%" stop-color="#e85d04" />
        <stop offset="33%" stop-color="#e9c000" />
        <stop offset="50%" stop-color="#2d8a2d" />
        <stop offset="67%" stop-color="#1e4fd0" />
        <stop offset="83%" stop-color="#4b0082" />
        <stop offset="100%" stop-color="#7a009b" />
      </linearGradient>
    </defs>

    <!-- Wavelength tick marks below the band -->
    <line x1="80" y1="200" x2="80" y2="220" stroke-width="2" />
    <text x="80" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">700 nm</text>
    <text x="80" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">red</text>

    <line x1="190" y1="200" x2="190" y2="220" stroke-width="2" />
    <text x="190" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">620 nm</text>
    <text x="190" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">orange</text>

    <line x1="290" y1="200" x2="290" y2="220" stroke-width="2" />
    <text x="290" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">580 nm</text>
    <text x="290" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">yellow</text>

    <line x1="400" y1="200" x2="400" y2="220" stroke-width="2" />
    <text x="400" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">520 nm</text>
    <text x="400" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">green</text>

    <line x1="510" y1="200" x2="510" y2="220" stroke-width="2" />
    <text x="510" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">480 nm</text>
    <text x="510" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">blue</text>

    <line x1="610" y1="200" x2="610" y2="220" stroke-width="2" />
    <text x="610" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">440 nm</text>
    <text x="610" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">indigo</text>

    <line x1="720" y1="200" x2="720" y2="220" stroke-width="2" />
    <text x="720" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">400 nm</text>
    <text x="720" y="258" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">violet</text>

    <!-- Frequency arrow -->
    <text x="80" y="105" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">low frequency</text>
    <text x="720" y="105" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">high frequency</text>
    <line x1="180" y1="100" x2="620" y2="100" stroke-width="2" />
    <polygon points="615,95 625,100 615,105" fill="currentColor" stroke="none" />

    <!-- Captions -->
    <text x="400" y="305" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">As wavelength shrinks from 700 nm (red) to 400 nm (violet), frequency rises.</text>
    <text x="400" y="325" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">In glass, shorter wavelengths slow more, so violet refracts more than red.</text>
    <text x="400" y="355" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">1 nm = 1 billionth of a metre. The visible band sits between IR (longer) and UV (shorter).</text>
  </g>
`

export const wavesDispersionPrism: SkillNode = {
  id: 'physics-waves-dispersion-prism',
  title: 'Dispersion and the Visible Spectrum',
  description:
    'White light is not a single pure colour. It is a mixture of all the colours of the visible spectrum: red, orange, yellow, green, blue, indigo and violet (ROYGBIV). When a beam of white light enters a triangular glass prism, each colour refracts by a slightly different amount because each wavelength slows by a slightly different amount in glass. Red light bends the least and violet light bends the most, so the colours fan out into a band on the far side of the prism. This separation is called dispersion. The same effect makes a rainbow: sunlight refracts as it enters a water droplet, reflects off the back wall, and refracts again on the way out, splitting into the spectrum we see opposite the Sun.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'challenge',
  prerequisites: ['physics-waves-refraction-glass-block', 'physics-waves-em-spectrum'],
  curriculum: {
    ks3Objective:
      "The transmission of light through materials; colours of the visible spectrum; Newton's prism experiment.",
    awardingBodies: {
      aqa: '4.6.3.1 Types of electromagnetic waves; visible light, ROYGBIV ordering by frequency and wavelength (GCSE Physics 8463)',
      edexcel:
        'Topic 5.3 The electromagnetic spectrum; dispersion of white light by a prism, colours of the spectrum (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light; refraction producing dispersion through a prism, colours of visible light (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'dp-scene-prism',
      title: 'White Light Through a Prism',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens when a beam of white light passes through a triangular glass prism.',
      data: {
        viewBox: '0 0 800 400',
        svg: PRISM_DISPERSION_SVG,
        hotspots: [
          {
            id: 'dp-prism-white-in',
            x: 20,
            y: 38,
            label: 'White light in',
            description:
              'A single beam of white light from the Sun or a ray box hits the left face of the prism. Although it looks white, this beam is already a mixture of every colour of the visible spectrum.',
          },
          {
            id: 'dp-prism-refract',
            x: 50,
            y: 55,
            label: 'Each colour bends by a different amount',
            description:
              'When the light enters the glass it slows down and refracts towards the normal. Each colour slows by a slightly different amount, so each one bends by a slightly different angle. Red slows the least, violet slows the most.',
          },
          {
            id: 'dp-prism-red',
            x: 90,
            y: 42,
            label: 'Red bends least',
            description:
              'Red light has the longest wavelength in the visible spectrum (about 700 nm). It slows the least in glass, so it bends the least at each surface. On the way out of the prism it comes out at the top of the rainbow band.',
          },
          {
            id: 'dp-prism-violet',
            x: 90,
            y: 87,
            label: 'Violet bends most',
            description:
              'Violet light has the shortest wavelength in the visible spectrum (about 400 nm). It slows the most in glass, so it bends the most at each surface. On the way out of the prism it ends up at the bottom of the rainbow band.',
          },
        ],
      },
    },
    {
      id: 'dp-scene-rainbow',
      title: 'A Rainbow in a Single Water Drop',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a ray of sunlight as it forms a rainbow inside one spherical water droplet.',
      data: {
        viewBox: '0 0 800 400',
        svg: RAINBOW_DROPLET_SVG,
        hotspots: [
          {
            id: 'dp-rb-sun',
            x: 22,
            y: 33,
            label: 'Sunlight from behind you',
            description:
              'A rainbow forms when sunlight is behind the observer and rain is in front. The Sun shines a beam of white light onto each drop. You always see a rainbow on the side of the sky opposite the Sun.',
          },
          {
            id: 'dp-rb-entry',
            x: 53,
            y: 38,
            label: 'Refracts on entry',
            description:
              'At the front face of the drop, the white light slows as it enters the water and refracts towards the normal. The colours already begin to spread out, with violet bending slightly more than red.',
          },
          {
            id: 'dp-rb-reflect',
            x: 65,
            y: 55,
            label: 'Reflects off the back wall',
            description:
              'The light reaches the curved back wall of the drop and reflects off the inside surface. This bounce sends the spreading colours back towards the front, where they will exit the drop.',
          },
          {
            id: 'dp-rb-exit',
            x: 20,
            y: 90,
            label: 'Refracts again on exit',
            description:
              'On the way out, each colour refracts a second time. The two refractions plus the reflection give a final angle of about 42 degrees from the original sunlight direction, with red on top and violet on the bottom of the visible band.',
          },
        ],
      },
    },
    {
      id: 'dp-scene-scale',
      title: 'Wavelengths of the Visible Spectrum',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the wavelength of each colour and see how the visible spectrum is ordered.',
      data: {
        viewBox: '0 0 800 400',
        svg: WAVELENGTH_SCALE_SVG,
        hotspots: [
          {
            id: 'dp-sc-red',
            x: 10,
            y: 60,
            label: 'Red: about 700 nm',
            description:
              'Red light sits at the long-wavelength end of the visible band, around 700 nanometres. A nanometre is one billionth of a metre. Just beyond red is infrared, which our eyes cannot see.',
          },
          {
            id: 'dp-sc-green',
            x: 50,
            y: 60,
            label: 'Green: about 520 nm',
            description:
              'Green sits near the middle of the visible band, around 520 nanometres. Human eyes are most sensitive to green light, which is why safety high-visibility vests are often a yellow-green colour.',
          },
          {
            id: 'dp-sc-violet',
            x: 90,
            y: 60,
            label: 'Violet: about 400 nm',
            description:
              'Violet light sits at the short-wavelength end of the visible band, around 400 nanometres. Just beyond violet is ultraviolet, which our eyes cannot see but which causes sunburn.',
          },
          {
            id: 'dp-sc-order',
            x: 50,
            y: 25,
            label: 'ROYGBIV: long to short wavelength',
            description:
              'The order from longest to shortest wavelength is Red, Orange, Yellow, Green, Blue, Indigo, Violet. Reading the band from left to right gives the order in which a prism fans out the colours of white light.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'dp-worked-1',
      title: 'Predict the order of colours leaving a prism',
      steps: [
        {
          explanation:
            "A pupil in a Bristol physics lab shines a beam of white light at a triangular glass prism. They want to predict the order of the colours on the screen beyond the prism. First, recognise that white light is already a mixture of the seven spectral colours.",
        },
        {
          explanation:
            'Recall the rule for refraction in glass: each colour slows by a different amount. Red slows the least, violet slows the most. The bigger the change in speed, the bigger the bend at each surface.',
          maths: 'order of slowing in glass: red < orange < ... < blue < indigo < violet',
        },
        {
          explanation:
            'Apply the rule to the prism. Light refracts at both faces of the prism, and the bends add up because the two faces are not parallel. The colour that bends most ends up deflected the furthest from the original direction.',
          maths: 'angle bent: red is smallest, violet is largest',
        },
        {
          explanation:
            'State the order on the screen. With the prism set up so the white beam aims at the centre, red appears at the top of the band (least deflected) and violet appears at the bottom (most deflected). The full sequence is ROYGBIV.',
          maths: 'screen, top to bottom: red, orange, yellow, green, blue, indigo, violet',
        },
        {
          explanation:
            'State the answer. The prism does not create the colours. It simply separates the colours already present in white light, by bending each one through a different angle.',
        },
      ],
    },
    {
      id: 'dp-worked-2',
      title: 'Calculate the frequency of green light using v = f x lambda',
      steps: [
        {
          explanation:
            'A pupil is given the wavelength of green light: about 520 nm, which is 520 x 10 to the minus 9 m, or 5.2 x 10 to the minus 7 m. The speed of light in a vacuum is about 3 x 10 to the 8 m/s. Find the frequency of green light.',
        },
        {
          explanation:
            'Recall the wave equation, with v as wave speed in m/s, f as frequency in Hz, and lambda (wavelength) in m.',
          maths: 'v = f x lambda, so f = v / lambda',
        },
        {
          explanation:
            'Substitute the numbers. Keep the powers of ten organised so the arithmetic stays tidy.',
          maths: 'f = (3 x 10^8) / (5.2 x 10^-7)',
        },
        {
          explanation: 'Divide the numbers first, then handle the powers of ten.',
          maths: '3 / 5.2 = 0.577, and 10^8 / 10^-7 = 10^15',
        },
        {
          explanation: 'Combine to get the frequency.',
          maths: 'f = 0.577 x 10^15 Hz = 5.77 x 10^14 Hz (about 580 THz)',
        },
        {
          explanation:
            'State the answer. Green light has a frequency of about 5.8 x 10 to the 14 Hz, or 580 terahertz. Every colour of the visible spectrum has a different frequency, with red at about 430 THz and violet at about 750 THz.',
        },
      ],
    },
    {
      id: 'dp-worked-3',
      title: 'Explain why a rainbow appears opposite the Sun',
      steps: [
        {
          explanation:
            "A pupil watches a rainbow over a Lake District field one afternoon. The Sun is behind them and rain is falling in front. They want to explain why the rainbow's position is fixed by the Sun.",
        },
        {
          explanation:
            'Follow a single drop. Sunlight enters the front of the drop and refracts, splitting slightly into colours. Each colour travels across the inside of the drop and reflects off the back wall.',
          maths: 'sunlight in -> refracts -> reflects off back -> refracts on exit',
        },
        {
          explanation:
            'On the way out, the light refracts a second time. The total deflection (refract + reflect + refract) comes out at about 42 degrees from the original direction of the sunlight for red, and about 40 degrees for violet.',
          maths: 'red about 42 degrees, violet about 40 degrees from the antisolar point',
        },
        {
          explanation:
            "The antisolar point is the point directly opposite the Sun (on the line from the Sun, through the observer's head, to the ground). All drops sending the red colour at 42 degrees back to the observer's eye form a circle in the sky centred on that antisolar point.",
          maths: 'rainbow = circle of drops 42 degrees from the antisolar point',
        },
        {
          explanation:
            "State the answer. A rainbow always appears on the side of the sky opposite the Sun because the geometry of refraction-reflection-refraction sends the colours back at about 40-42 degrees from the sunlight direction. You stand between the Sun and the rain, and the rainbow forms a circular arc around the shadow of your head.",
        },
      ],
    },
  ],
  questions: [
    {
      id: 'dp-q1',
      type: 'multiple-choice',
      stem: 'A pupil in a Leeds lab shines a beam of white light at a triangular glass prism. A band of colours appears on the white screen beyond. Which sentence best describes what the prism has done?',
      tier: 'core',
      options: [
        'The prism has separated the colours already present in white light by bending each one through a slightly different angle.',
        'The prism has created seven new colours that were not there before.',
        'The prism has coloured the light by adding pigment from the glass.',
        'The prism has turned the white light into pure red light only.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'dp-mis-prism-creates-colours',
      hint: 'White light is already a mixture of the seven spectral colours. The prism only fans them out.',
    },
    {
      id: 'dp-q2',
      type: 'multiple-choice',
      stem: 'Which sentence about the seven colours of the visible spectrum is correct?',
      tier: 'core',
      options: [
        'All colours bend by exactly the same amount in a glass prism.',
        'Red bends the most and violet bends the least.',
        'Red bends the least and violet bends the most.',
        'Only the middle colour (green) bends at all; the others pass straight through.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dp-mis-red-bends-more',
      hint: 'Shorter wavelength means slower in glass, which means a bigger bend. Violet has the shortest wavelength.',
    },
    {
      id: 'dp-q3',
      type: 'multiple-choice',
      stem: 'What is the cause of dispersion when white light passes through a glass prism?',
      tier: 'core',
      options: [
        'The glass is slightly coloured, so different colours come out.',
        'The prism cuts the light into separate streams using its sharp edges.',
        'Heat from the lamp splits the colours apart.',
        'Each colour travels at a slightly different speed in the glass, so each refracts by a slightly different angle.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dp-mis-prism-creates-colours',
      hint: 'It is the change in speed at the boundary that causes refraction. Different speeds for each colour means different angles.',
    },
    {
      id: 'dp-q4',
      type: 'multiple-choice',
      stem: 'Which of these is the correct order of the visible spectrum from longest wavelength to shortest wavelength?',
      tier: 'core',
      options: [
        'Violet, indigo, blue, green, yellow, orange, red.',
        'Green, yellow, red, orange, blue, indigo, violet.',
        'White, red, orange, yellow, green, blue, violet.',
        'Red, orange, yellow, green, blue, indigo, violet.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dp-mis-prism-order-random',
      hint: 'Use the ROYGBIV mnemonic. Red has the longest wavelength, violet the shortest.',
    },
    {
      id: 'dp-q5',
      type: 'numeric-entry',
      stem: 'The wavelength of red light is about 700 nm. The wavelength of violet light is about 400 nm. By how many nanometres is the wavelength of red light longer than that of violet light?',
      tier: 'core',
      correctAnswer: 300,
      unit: 'nm',
      xpValue: 10,
      hint: 'Subtract the shorter wavelength from the longer one: 700 - 400.',
    },
    {
      id: 'dp-q6',
      type: 'multiple-choice',
      stem: 'A pupil sees a rainbow over a field in the Lake District after a rain shower. Which sentence about where the rainbow appears is correct?',
      tier: 'core',
      options: [
        'The rainbow appears on the same side of the sky as the Sun.',
        'The rainbow forms behind the observer, between them and the Sun.',
        'The rainbow appears on the side of the sky opposite the Sun, with the observer between the Sun and the rain.',
        'The rainbow can only ever form directly overhead, at midday.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dp-mis-rainbow-sun-side',
      hint: 'You need the Sun behind you and rain in front. The rainbow is centred on the shadow of your head.',
    },
    {
      id: 'dp-q7',
      type: 'numeric-entry',
      stem: 'A beam of white light is split by a prism. On the screen, the pupil identifies six colours but has missed one. The colours seen are red, orange, yellow, green, blue and violet. How many colours are missing from this list, compared with the standard ROYGBIV order?',
      tier: 'core',
      correctAnswer: 1,
      unit: 'colour',
      xpValue: 10,
      hint: 'List ROYGBIV and tick off each colour. Indigo sits between blue and violet.',
    },
    {
      id: 'dp-q8',
      type: 'multiple-choice',
      stem: "A pupil writes: 'White light is one of the seven pure colours, just like red or blue.' Which sentence is the best correction?",
      tier: 'confident',
      options: [
        'The pupil is right. White is just the brightest colour.',
        'White is the absence of all light, so it is not a colour at all.',
        'White light is actually a mixture of every colour of the visible spectrum. Pass it through a prism and the seven colours fan out.',
        'Only computer screens produce white light; the Sun produces yellow light.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dp-mis-white-is-pure',
      hint: 'A prism would not split a truly pure colour. The fact that the band ROYGBIV comes out means all of those colours were there to begin with.',
    },
    {
      id: 'dp-q9',
      type: 'drag-order',
      stem: 'Drag the seven colours of the visible spectrum into the order in which they appear on the screen beyond a glass prism, from the least deflected (top) to the most deflected (bottom).',
      tier: 'confident',
      items: [
        'orange (about 620 nm)',
        'indigo (about 440 nm)',
        'red (about 700 nm)',
        'green (about 520 nm)',
        'blue (about 480 nm)',
        'yellow (about 580 nm)',
        'violet (about 400 nm)',
      ],
      correctOrder: [2, 0, 5, 3, 4, 1, 6],
      xpValue: 15,
      misconceptionId: 'dp-mis-prism-order-random',
      hint: 'Red bends least and ends up at the top of the band. Violet bends most and ends up at the bottom. The middle colours follow ROYGBIV.',
    },
    {
      id: 'dp-q10',
      type: 'numeric-entry',
      stem: 'The speed of light in a vacuum is 3 x 10^8 m/s. Red light has a wavelength of about 700 nm, which is 7 x 10^-7 m. Using v = f x lambda, what is the frequency of red light, in terahertz (THz)? Give your answer to the nearest whole THz. (1 THz = 10^12 Hz.)',
      tier: 'challenge',
      correctAnswer: 429,
      unit: 'THz',
      tolerance: 5,
      xpValue: 20,
      hint: 'f = v / lambda. So f = (3 x 10^8) / (7 x 10^-7) = about 4.29 x 10^14 Hz. Convert to THz by dividing by 10^12.',
    },
    {
      id: 'dp-q11',
      type: 'numeric-entry',
      stem: 'The speed of light in a vacuum is 3 x 10^8 m/s. Violet light has a wavelength of about 400 nm, which is 4 x 10^-7 m. Using v = f x lambda, what is the frequency of violet light, in terahertz (THz)? Give your answer to the nearest whole THz.',
      tier: 'confident',
      correctAnswer: 750,
      unit: 'THz',
      tolerance: 5,
      xpValue: 20,
      hint: 'f = v / lambda. So f = (3 x 10^8) / (4 x 10^-7) = 7.5 x 10^14 Hz. Convert to THz by dividing by 10^12.',
    },
    {
      id: 'dp-q12',
      type: 'multiple-choice',
      stem: 'Why does violet light refract more than red light when both pass through the same glass prism?',
      tier: 'confident',
      options: [
        'Violet has a shorter wavelength than red, so it slows by a bigger amount in glass and refracts by a bigger angle.',
        'Violet has a longer wavelength than red, so it bends more.',
        'Violet light is brighter than red, so it bends more.',
        'Violet light is heavier than red, so gravity bends it more.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'dp-mis-red-bends-more',
      hint: 'Shorter wavelengths slow more in glass. More slowing means a bigger refraction angle.',
    },
    {
      id: 'dp-q13',
      type: 'drag-order',
      stem: 'Put the steps in order to describe how a rainbow forms in one water droplet, from the moment sunlight reaches the front of the drop to the moment a colour reaches the observer.',
      tier: 'confident',
      items: [
        'The colour refracts again on the way out, bending each wavelength by a slightly different amount.',
        'Sunlight enters the front of the drop and refracts, slowing in the water and beginning to split into colours.',
        'The light reflects off the curved back wall of the drop and returns towards the front.',
        'The colour leaves the drop at about 40-42 degrees from the original sunlight direction and travels to the observer.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Refract in, reflect off the back, refract out, then reach the eye.',
    },
    {
      id: 'dp-q14',
      type: 'multiple-choice',
      stem: 'A pupil holds up a CD in sunlight from a Norwich kitchen window and sees a shimmer of colours on its surface. Which best explains the source of these colours?',
      tier: 'confident',
      options: [
        'The CD is dyed with seven different paints.',
        'White sunlight contains all the visible colours; the fine grooves on the CD separate them, so each colour reaches the eye from a slightly different angle.',
        'The CD has cooled in a strange way and so it glows.',
        'The colours come from the room light bulb only, not from the Sun.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dp-mis-prism-creates-colours',
      hint: 'White sunlight is the source. The CD acts a bit like a prism, sending each colour off at a different angle.',
    },
    {
      id: 'dp-q15',
      type: 'numeric-entry',
      stem: 'The visible spectrum runs from about 400 nm (violet) to about 700 nm (red). The middle of the band is green. Taking the simple midpoint of these two values, what is the wavelength of the centre of the visible band, in nm?',
      tier: 'confident',
      correctAnswer: 550,
      unit: 'nm',
      xpValue: 15,
      hint: 'Midpoint = (400 + 700) / 2.',
    },
    {
      id: 'dp-q16',
      type: 'spot-misconception',
      stem: "Yusuf is summarising what a prism does to a beam of white light.",
      tier: 'confident',
      statements: [
        {
          text: "Yusuf says: 'The prism makes the colours by adding them to the white beam as it passes through the glass.' This sentence is correct.",
          isMisconception: true,
        },
        {
          text: "Yusuf says: 'The colours are already in the white beam. The prism just bends each one by a slightly different angle, so they fan out into ROYGBIV.' This sentence is correct.",
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dp-mis-prism-creates-colours',
    },
    {
      id: 'dp-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a beam of white light fans out into a rainbow band as it leaves a triangular glass prism.',
      tier: 'challenge',
      steps: [
        'White light is already a mixture of every colour of the visible spectrum, with wavelengths from about 400 nm (violet) to about 700 nm (red).',
        'When the beam enters the prism, it slows down in the denser glass and refracts towards the normal.',
        'Each colour slows by a slightly different amount in glass: red slows the least, violet slows the most.',
        null,
        'On the second face of the prism, each colour refracts again, and the bends add up because the two faces are not parallel.',
        'The colours leave the prism fanned out into the band ROYGBIV, with red on top (least deflected) and violet at the bottom (most deflected).',
      ],
      missingStepIndex: 3,
      correctStep:
        'Because each colour has a different speed in glass, each one bends by a different angle at the entry face. Red bends the least and violet bends the most.',
      xpValue: 20,
      misconceptionId: 'dp-mis-all-bend-same',
    },
    {
      id: 'dp-q18',
      type: 'numeric-entry',
      stem: 'A teacher in a Sheffield school lab shines a beam of white light at a glass prism. Red light leaves the prism deflected by 38 degrees from its original direction. Violet light leaves deflected by 42 degrees. By how many degrees more is violet deflected compared with red?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'degrees',
      xpValue: 20,
      hint: 'Subtract the smaller deflection from the larger: 42 - 38.',
    },
    {
      id: 'dp-q19',
      type: 'multiple-choice',
      stem: 'Newton famously passed white light through a prism, then passed the resulting band of colours through a second, inverted prism. What did he observe coming out of the second prism?',
      tier: 'challenge',
      options: [
        'A second, fainter rainbow band at right angles to the first.',
        'No light at all, because the second prism absorbed all the colours.',
        'A single white beam, because the second prism recombined the colours back into white light.',
        'Only red and violet, with the middle colours filtered out.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'dp-mis-prism-creates-colours',
      hint: "If the prism truly 'made' the colours, a second prism would make even more. Newton showed it does the reverse: it can recombine them.",
    },
    {
      id: 'dp-q20',
      type: 'spot-misconception',
      stem: "Amara is reasoning about what causes the colours of a rainbow.",
      tier: 'challenge',
      statements: [
        {
          text: "Amara says: 'A rainbow forms on the same side of the sky as the Sun, because the Sun lights up the raindrops directly in front of it.' This sentence is correct.",
          isMisconception: true,
        },
        {
          text: "Amara says: 'A rainbow forms on the side of the sky opposite the Sun. Sunlight refracts on entering each drop, reflects off the back wall, and refracts again on the way out, sending colours back to the observer.' This sentence is correct.",
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'dp-mis-rainbow-sun-side',
    },
    {
      id: 'dp-q21',
      type: 'numeric-entry',
      stem: 'In a vacuum, red light (700 nm) and violet light (400 nm) both travel at 3 x 10^8 m/s. Using v = f x lambda, the frequency of red is about 4.3 x 10^14 Hz and the frequency of violet is about 7.5 x 10^14 Hz. By how many terahertz (THz) is the frequency of violet light higher than that of red light? (1 THz = 10^12 Hz.) Round to the nearest whole THz.',
      tier: 'challenge',
      correctAnswer: 321,
      unit: 'THz',
      tolerance: 5,
      xpValue: 20,
      hint: 'Subtract the red frequency from the violet one: 750 - 429 (in THz).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 2F, candidates wrote that a glass prism "makes" or "creates" the colours of the spectrum rather than separating colours already present in white light.
    {
      id: 'dp-mis-prism-creates-colours',
      description:
        'Believing that the prism creates the colours of the visible spectrum, rather than separating colours that are already present in white light.',
      triggerAnswer: 'prism-creates-colours',
      correction:
        'White light is already a mixture of every visible colour. A prism only separates those colours by bending each one through a slightly different angle. It does not create them.',
      reExplanation:
        "Newton's classic experiment is the proof: pass white light through a first prism and the colours fan out. Now pass that band through a second, inverted prism. The colours recombine into a single white beam. If the prism made the colours, the second prism would make even more, not undo the effect. So the colours were always in the white light to begin with.",
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/1F, candidates ordered the colours leaving a prism with red bending more than violet (back to front), or said all colours bend by the same amount.
    {
      id: 'dp-mis-red-bends-more',
      description:
        'Believing that red light bends more than violet light through a prism, getting the order of refraction backwards.',
      triggerAnswer: 'red-bends-more',
      correction:
        'Violet light bends more than red. Violet has a shorter wavelength and slows more in glass, so it refracts through a bigger angle at each face of the prism.',
      reExplanation:
        'The rule is: shorter wavelength means slower in glass means bigger bend. Red has the longest wavelength of the visible band (about 700 nm) and slows the least, so it bends the least. Violet has the shortest wavelength (about 400 nm) and slows the most, so it bends the most. On the screen beyond a prism, red appears at the top of the band and violet at the bottom.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that all the colours of white light bend by exactly the same amount in a prism, so the spectrum should never form.
    {
      id: 'dp-mis-all-bend-same',
      description:
        'Believing that all colours bend by the same amount in a glass prism, so no separation should occur.',
      triggerAnswer: 'all-bend-same',
      correction:
        'Each colour slows by a slightly different amount in glass, so each refracts by a slightly different angle. That difference is exactly what makes a prism fan the colours out.',
      reExplanation:
        "If every colour bent by the same amount, the seven beams would emerge parallel to each other and the screen would still show a single white spot, just shifted sideways. In real lab demonstrations the colours spread into a clear band ROYGBIV. The spread proves that the bending angles differ. The size of the difference depends on the glass; flint glass gives a wider spread than crown glass for the same prism shape.",
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that white light is a single pure colour or that it is a colour in its own right alongside red, blue, etc.
    {
      id: 'dp-mis-white-is-pure',
      description:
        'Treating white light as one pure colour in its own right, on the same footing as red or blue, rather than as a mixture of every colour of the visible spectrum.',
      triggerAnswer: 'white-is-pure',
      correction:
        'White light is not a single pure colour. It is the combination of every colour of the visible spectrum. A prism splits it into the seven spectral colours.',
      reExplanation:
        'A pure colour is one with a single wavelength, such as the red of a laser pointer (about 650 nm). Shine pure red light through a prism and it stays red on the far side, simply deflected. Shine white light through and it fans out into ROYGBIV. The fact that white splits but pure colours do not is the proof that white is a mixture, not a pure colour.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/1F, candidates wrote that a rainbow forms on the same side of the sky as the Sun, or directly above the observer regardless of where the Sun sits.
    {
      id: 'dp-mis-rainbow-sun-side',
      description:
        'Believing that a rainbow forms on the same side of the sky as the Sun, rather than on the side directly opposite the Sun.',
      triggerAnswer: 'rainbow-sun-side',
      correction:
        'A rainbow forms on the side of the sky opposite the Sun. You need the Sun behind you and rain in front. The bow is centred on the shadow of your head.',
      reExplanation:
        'Inside each drop, sunlight refracts on entry, reflects off the back wall, and refracts again on exit. The total deflection is about 40-42 degrees from the original sunlight direction, sending the colours back the way they came (not on through the drop towards the Sun). So a rainbow always lies in the part of the sky farthest from the Sun. If the Sun is in the south-west behind you, look north-east to find the rainbow.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2020, J259/02, candidates listed the spectrum in an arbitrary order (such as "red, green, blue, yellow"), missing that the ROYGBIV order is fixed by wavelength.
    {
      id: 'dp-mis-prism-order-random',
      description:
        'Believing that the order of the colours leaving a prism is arbitrary or random, rather than fixed by wavelength from longest (red) to shortest (violet).',
      triggerAnswer: 'prism-order-random',
      correction:
        'The order is fixed. ROYGBIV runs from longest wavelength (red, about 700 nm) to shortest wavelength (violet, about 400 nm). A prism always produces the colours in that order.',
      reExplanation:
        'The order comes straight from the physics. Each colour has a unique wavelength in the visible band, and longer wavelengths slow less in glass than shorter ones. So the bend angle rises smoothly from red (smallest) to violet (largest). The colours always come out sorted by wavelength: there is no way to get green between red and orange, because greens wavelength (about 520 nm) sits in a fixed spot on the wavelength scale.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesDispersionPrismZoneNodes = [wavesDispersionPrism]
