import type { SkillNode } from '@/types/content'

const OVERHEAD_SUN_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Overhead Sun: blue light scatters off air molecules in every direction</text>

    <!-- Sun at top -->
    <circle cx="400" cy="80" r="28" fill="currentColor" />
    <text x="400" y="85" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- Atmosphere band -->
    <rect x="60" y="180" width="680" height="100" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-dasharray="4 4" />
    <text x="120" y="200" font-size="11" stroke="none" fill="currentColor">atmosphere (mostly N2 and O2)</text>

    <!-- Ground -->
    <line x1="60" y1="320" x2="740" y2="320" stroke-width="2" />
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">observer in Snowdonia looks up at a clear midday sky</text>

    <!-- White light ray down -->
    <line x1="400" y1="108" x2="400" y2="220" stroke-width="2" />
    <text x="415" y="160" font-size="11" font-weight="700" stroke="none" fill="currentColor">white sunlight</text>

    <!-- Air molecule -->
    <circle cx="400" cy="225" r="6" fill="currentColor" />
    <text x="420" y="230" font-size="11" stroke="none" fill="currentColor">air molecule</text>

    <!-- Scattered blue rays in many directions -->
    <line x1="400" y1="225" x2="250" y2="300" stroke-width="2" stroke-dasharray="6 4" />
    <line x1="400" y1="225" x2="550" y2="300" stroke-width="2" stroke-dasharray="6 4" />
    <line x1="400" y1="225" x2="180" y2="250" stroke-width="2" stroke-dasharray="6 4" />
    <line x1="400" y1="225" x2="620" y2="250" stroke-width="2" stroke-dasharray="6 4" />
    <text x="260" y="280" font-size="11" font-weight="700" stroke="none" fill="currentColor">blue scattered</text>
    <text x="540" y="280" font-size="11" font-weight="700" stroke="none" fill="currentColor">blue scattered</text>

    <!-- Caption -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Short wavelengths (blue) scatter much more than long wavelengths (red).</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Your eyes pick up scattered blue from every direction, so the sky looks blue.</text>
  </g>
`

const SUNSET_PATH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Cornwall sunset: long atmospheric path scatters blue away, red gets through</text>

    <!-- Curved Earth surface -->
    <path d="M 60 340 Q 400 320 740 340" stroke-width="2" />
    <text x="400" y="365" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth surface (curved)</text>

    <!-- Atmosphere band (thin) -->
    <path d="M 60 260 Q 400 240 740 260" stroke-width="2" stroke-dasharray="4 4" />
    <text x="120" y="255" font-size="11" stroke="none" fill="currentColor">top of atmosphere</text>

    <!-- Setting Sun on the right horizon -->
    <circle cx="720" cy="300" r="22" fill="currentColor" />
    <text x="720" y="305" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- Observer on left -->
    <circle cx="140" cy="335" r="6" fill="currentColor" />
    <text x="140" y="380" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">observer</text>
    <text x="140" y="395" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Penzance beach</text>

    <!-- Long path through atmosphere -->
    <line x1="700" y1="300" x2="140" y2="335" stroke-width="3" />
    <text x="420" y="305" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">long path through atmosphere</text>

    <!-- Scatter markers (blue lost along the way) -->
    <circle cx="560" cy="313" r="4" fill="currentColor" />
    <circle cx="420" cy="320" r="4" fill="currentColor" />
    <circle cx="280" cy="328" r="4" fill="currentColor" />
    <line x1="560" y1="313" x2="540" y2="280" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="420" y1="320" x2="400" y2="285" stroke-width="2" stroke-dasharray="4 4" />
    <line x1="280" y1="328" x2="260" y2="295" stroke-width="2" stroke-dasharray="4 4" />
    <text x="540" y="270" font-size="10" stroke="none" fill="currentColor">blue lost</text>
    <text x="400" y="275" font-size="10" stroke="none" fill="currentColor">blue lost</text>
    <text x="260" y="285" font-size="10" stroke="none" fill="currentColor">blue lost</text>

    <!-- Caption -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">At sunrise and sunset the light slices across the atmosphere, not straight down.</text>
    <text x="400" y="100" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Blue is scattered out of the beam first, so the leftover light looks red and orange.</text>
    <text x="400" y="120" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Saharan dust over the UK in March 2022 made sunsets unusually deep orange.</text>
  </g>
`

const VISIBLE_SCATTER_SCALE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Visible light: shorter wavelengths scatter much more</text>

    <!-- Six bands red to violet -->
    <rect x="120" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.15" stroke="currentColor" />
    <text x="166" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">red</text>
    <text x="166" y="148" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">700 nm</text>

    <rect x="213" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.25" stroke="currentColor" />
    <text x="259" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">orange</text>

    <rect x="306" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.35" stroke="currentColor" />
    <text x="352" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">yellow</text>

    <rect x="399" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.45" stroke="currentColor" />
    <text x="445" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">green</text>

    <rect x="492" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.55" stroke="currentColor" />
    <text x="538" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">blue</text>
    <text x="538" y="148" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">470 nm</text>

    <rect x="585" y="80" width="93" height="90" fill="currentColor" fill-opacity="0.70" stroke="currentColor" />
    <text x="631" y="130" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">violet</text>
    <text x="631" y="148" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">400 nm</text>

    <!-- Scatter strength bars -->
    <text x="400" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Relative scattering by air molecules</text>

    <rect x="120" y="220" width="20" height="93" fill="currentColor" fill-opacity="0.20" stroke="currentColor" />
    <text x="166" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">low</text>

    <rect x="213" y="240" width="40" height="73" fill="currentColor" fill-opacity="0.30" stroke="currentColor" />

    <rect x="306" y="255" width="60" height="58" fill="currentColor" fill-opacity="0.40" stroke="currentColor" />

    <rect x="399" y="260" width="70" height="53" fill="currentColor" fill-opacity="0.50" stroke="currentColor" />

    <rect x="492" y="225" width="80" height="88" fill="currentColor" fill-opacity="0.60" stroke="currentColor" />
    <text x="538" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">high</text>

    <rect x="585" y="215" width="90" height="98" fill="currentColor" fill-opacity="0.75" stroke="currentColor" />
    <text x="631" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">highest</text>

    <!-- Caption -->
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Blue scatters roughly 5 to 10 times more than red.</text>
    <text x="400" y="388" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Violet scatters even more, but sunlight contains less violet and the eye is less sensitive to it.</text>
  </g>
`

export const wavesSkyBlueScattering: SkillNode = {
  id: 'physics-waves-sky-blue-scattering',
  title: 'Why the Sky is Blue',
  description:
    'Sunlight starts out white, a mix of every colour from red through to violet. On its way down through the atmosphere it bumps into nitrogen and oxygen molecules. Short wavelengths (blue and violet) are scattered off these molecules far more than long wavelengths (red and orange). Blue scatters roughly five to ten times more than red. Look up at a clear midday sky from Snowdonia and your eyes catch scattered blue from every patch of air around you, so the whole sky reads blue. At sunrise or sunset the light has to cut across a much longer path of atmosphere, and the blue is scattered out of the beam before it reaches you. What is left is the red and orange that travelled straight through, which is why a Cornwall sunset or a Highland dawn glows warm. Violet scatters even more than blue, but sunlight contains less violet and your eyes are less sensitive to it, so the sky reads blue rather than violet. This whole story is qualitative at KS3; you do not need any formula.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-waves',
  zoneName: 'Waves',
  tier: 'challenge',
  prerequisites: ['physics-waves-em-spectrum'],
  curriculum: {
    ks3Objective:
      'The transmission of light through materials; diffuse scattering; colours of visible light.',
    awardingBodies: {
      aqa: '4.6.3.1 Types of electromagnetic waves; qualitative scattering of visible light in the atmosphere (GCSE Physics 8463)',
      edexcel:
        'Topic 5.3 The electromagnetic spectrum; scattering of shorter wavelengths in the atmosphere (GCSE Physics 1PH0)',
      ocr: 'P5.3 Light; qualitative explanation of atmospheric scattering and sky colour (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'sb-scene-overhead-sun',
      title: 'Overhead Sun and a Blue Sky',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how blue light scatters off air molecules and reaches your eye from every direction.',
      data: {
        viewBox: '0 0 800 400',
        svg: OVERHEAD_SUN_SVG,
        hotspots: [
          {
            id: 'sb-overhead-sun',
            x: 50,
            y: 20,
            label: 'White sunlight from above',
            description:
              'Sunlight contains every colour from red (about 700 nm) through to violet (about 400 nm) mixed together. The mix looks white before any scattering happens.',
          },
          {
            id: 'sb-overhead-atmos',
            x: 50,
            y: 57,
            label: 'Air molecules (mostly N2 and O2)',
            description:
              'The atmosphere is mostly nitrogen (N2) and oxygen (O2) molecules. They are far smaller than the wavelength of light, but they still nudge each light wave a bit. Shorter waves are nudged much more.',
          },
          {
            id: 'sb-overhead-scatter',
            x: 32,
            y: 75,
            label: 'Blue scattered in every direction',
            description:
              'Blue light scatters roughly five to ten times more than red. The scattered blue heads off in every direction, so when you look at any patch of sky from Snowdonia, blue is what reaches your eye.',
          },
          {
            id: 'sb-overhead-caption',
            x: 50,
            y: 95,
            label: 'Why the sky reads blue, not violet',
            description:
              'Violet scatters even more than blue, but sunlight has less violet in it to start with, and human eyes are less sensitive to violet than to blue. The mix of scattered light reads blue.',
          },
        ],
      },
    },
    {
      id: 'sb-scene-sunset-path',
      title: 'Sunset: A Longer Path Through Air',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why sunsets and sunrises look red and orange.',
      data: {
        viewBox: '0 0 800 400',
        svg: SUNSET_PATH_SVG,
        hotspots: [
          {
            id: 'sb-sunset-path',
            x: 53,
            y: 76,
            label: 'Light slants across the atmosphere',
            description:
              'At sunrise and sunset the Sun sits near the horizon. Its light has to cross far more atmosphere than at midday to reach you, so it meets many more air molecules on the way.',
          },
          {
            id: 'sb-sunset-blue-lost',
            x: 53,
            y: 67,
            label: 'Blue scatters out along the way',
            description:
              'Each air molecule scatters more blue than red. Over a long path the beam loses most of its blue. The blue that scatters out is what makes the sky around the Sun look pale, while red and orange survive the trip in a straight line.',
          },
          {
            id: 'sb-sunset-observer',
            x: 18,
            y: 84,
            label: 'Observer at Penzance beach',
            description:
              'Standing on a Cornwall beach at sunset, your eye catches the leftover red and orange light that came straight through the long path. The Sun itself has not changed colour; only the atmosphere has filtered it.',
          },
          {
            id: 'sb-sunset-dust',
            x: 50,
            y: 30,
            label: 'March 2022 Saharan dust event',
            description:
              'In March 2022 a Saharan dust plume reached the UK. The extra dust scattered even more short-wavelength light, so UK sunsets that week looked unusually deep orange and red.',
          },
        ],
      },
    },
    {
      id: 'sb-scene-visible-scatter-scale',
      title: 'Why Blue, Not Red',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how strongly each colour scatters off air molecules.',
      data: {
        viewBox: '0 0 800 400',
        svg: VISIBLE_SCATTER_SCALE_SVG,
        hotspots: [
          {
            id: 'sb-scale-red',
            x: 21,
            y: 25,
            label: 'Red: longest wavelength, weakest scatter',
            description:
              'Red light has a wavelength near 700 nm. It barely scatters off air molecules, which is why red can travel straight through a long atmospheric path at sunset.',
          },
          {
            id: 'sb-scale-blue',
            x: 67,
            y: 25,
            label: 'Blue: short wavelength, strong scatter',
            description:
              'Blue light has a wavelength near 470 nm. It scatters about five to ten times more than red. The scattered blue arriving from every direction is what makes the sky look blue.',
          },
          {
            id: 'sb-scale-violet',
            x: 79,
            y: 25,
            label: 'Violet: shortest, scatters most',
            description:
              'Violet (near 400 nm) actually scatters more than blue, but sunlight contains less violet to start with, and the human eye is less sensitive to violet than to blue. The mix reads as blue.',
          },
          {
            id: 'sb-scale-bars',
            x: 50,
            y: 75,
            label: 'Scatter strength bars',
            description:
              'The bars show roughly how strongly each colour scatters. The shorter the wavelength, the taller the bar. The link is not linear; halving the wavelength can scatter many times more.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'sb-worked-overhead',
      title: 'Explain why a midday sky over Snowdonia looks blue',
      steps: [
        {
          explanation:
            'Set out the situation. A walker on a clear midday in Snowdonia looks up. The Sun is high, the air is dry, and the sky is a strong blue. We want a KS3 explanation that uses the right physics words.',
        },
        {
          explanation:
            'Start with the source. Sunlight is white. It is a mix of every visible wavelength from red (about 700 nm) down to violet (about 400 nm).',
        },
        {
          explanation:
            'Bring in the scattering mechanism. As the white sunlight passes through the atmosphere, it bumps into nitrogen and oxygen molecules. Short wavelengths scatter much more than long ones; blue scatters roughly 5 to 10 times more than red.',
        },
        {
          explanation:
            'Connect to what the eye sees. The scattered blue leaves every patch of air heading in every direction. When the walker looks at any patch of sky, scattered blue light reaches their eye.',
        },
        {
          explanation:
            'Address the violet sanity check. Violet scatters even more than blue, but sunlight has less violet in it and human eyes are less sensitive to violet. The mix reads blue, not violet.',
        },
        {
          explanation:
            'State the answer. The midday sky looks blue because air molecules scatter the short, blue wavelengths in sunlight far more strongly than the long, red ones, and that scattered blue reaches the walker from every direction.',
        },
      ],
    },
    {
      id: 'sb-worked-sunset',
      title: 'Explain why a Cornwall sunset looks red and orange',
      steps: [
        {
          explanation:
            'Set out the situation. A family on Penzance beach watches the Sun drop towards the horizon. The Sun itself glows orange and the clouds nearby are red. We want a KS3 explanation that uses the same scattering idea as the midday sky.',
        },
        {
          explanation:
            'Compare paths. At midday the Sun is overhead, so its light cuts through the atmosphere on a short straight path. At sunset the Sun sits near the horizon, so its light slants across a much longer path of air.',
        },
        {
          explanation:
            'Apply the scattering rule. Over the long sunset path, the light meets many more air molecules. Most of the blue is scattered out of the beam before it reaches the beach.',
        },
        {
          explanation:
            'Account for what is left. Red and orange wavelengths scatter much less. They travel almost straight through the long path and reach the observer\'s eye, so the Sun and the sky around it look red and orange.',
        },
        {
          explanation:
            'State the answer. The Cornwall sunset looks red and orange because the long, slanting path through the atmosphere has scattered most of the blue out of the sunlight, leaving the longer wavelengths to reach the beach.',
        },
      ],
    },
    {
      id: 'sb-worked-moon',
      title: 'Predict the sky colour seen from the Moon',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil asks what colour the daytime sky looks from the surface of the Moon. We need to use the scattering idea to reason about it, not guess from photographs.',
        },
        {
          explanation:
            'List the key fact. Sky colour on Earth depends on light scattering off air molecules in the atmosphere. The Moon has almost no atmosphere; there are very few molecules above its surface to scatter sunlight.',
        },
        {
          explanation:
            'Predict the outcome. With no atmosphere to scatter light, sunlight reaches the surface in a straight line and the rest of the sky stays dark. Stars stay visible during the lunar day for the same reason.',
        },
        {
          explanation:
            'State the answer. The lunar sky looks black during the day, not blue. The Apollo photographs back this up: blue sky needs an atmosphere full of scattering molecules, and the Moon has none.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'sb-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best explains why a clear midday sky over Snowdonia looks blue?',
      tier: 'core',
      options: [
        'Air molecules scatter the short, blue wavelengths in sunlight much more than the long, red ones, and that scattered blue reaches your eye from every direction.',
        'The sky reflects the blue colour of the sea below.',
        'The atmosphere is itself made of blue gas, which colours any light passing through it.',
        'The Sun gives off blue light only at midday and red light only at sunset.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'sb-mis-sky-reflects-sea',
      hint: 'The sky looks blue from inland Snowdonia too, far from any sea. Think about what happens to white sunlight as it passes through the air.',
    },
    {
      id: 'sb-q2',
      type: 'multiple-choice',
      stem: 'What colour does white sunlight contain?',
      tier: 'core',
      options: [
        'Only blue and red.',
        'Only the warm colours: red, orange, yellow.',
        'Every visible colour from red through to violet, mixed together.',
        'Only green, because that is in the middle of visible light.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Think of a prism splitting sunlight into the full visible spectrum.',
    },
    {
      id: 'sb-q3',
      type: 'multiple-choice',
      stem: 'Which gases in the atmosphere are mainly responsible for scattering sunlight?',
      tier: 'core',
      options: [
        'Carbon dioxide and water vapour.',
        'Argon and helium.',
        'Nitrogen (N2) and oxygen (O2).',
        'Methane and ozone.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The two most common gases in dry air, making up about 99% of it.',
    },
    {
      id: 'sb-q4',
      type: 'multiple-choice',
      stem: 'Which statement about scattering and wavelength is correct?',
      tier: 'core',
      options: [
        'Shorter wavelengths scatter much more than longer wavelengths.',
        'Longer wavelengths scatter more than shorter wavelengths.',
        'All wavelengths scatter the same amount.',
        'Only ultraviolet light scatters in air.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'sb-mis-shorter-scatters-less',
      hint: 'Blue has a shorter wavelength than red. Which colour fills the daytime sky?',
    },
    {
      id: 'sb-q5',
      type: 'multiple-choice',
      stem: 'A pupil claims the daytime sky on the Moon is blue, just like on Earth. Which response is the best correction?',
      tier: 'core',
      options: [
        'The pupil is right; any sky in the solar system is blue.',
        'The lunar sky is red, not blue.',
        'The Moon has air, but it is too thin to scatter blue light, so its sky is green.',
        'Blue sky needs air molecules to scatter light. The Moon has almost no atmosphere, so its daytime sky stays black.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'sb-mis-moon-blue-sky',
      hint: 'What does scattering need? No atmosphere means no scattering.',
    },
    {
      id: 'sb-q6',
      type: 'numeric-entry',
      stem: 'Blue light has a wavelength of about 470 nm. Convert this into metres, in standard form. Enter the number in metres.',
      tier: 'core',
      correctAnswer: 4.7e-7,
      unit: 'm',
      tolerance: 1e-9,
      xpValue: 10,
      hint: '1 nm = 10^-9 m. Multiply 470 by 10^-9 to get 4.7 x 10^-7 m.',
    },
    {
      id: 'sb-q7',
      type: 'numeric-entry',
      stem: 'Red light has a wavelength of about 700 nm. Blue light has a wavelength of about 470 nm. How much longer is the red wavelength than the blue one, in nanometres?',
      tier: 'core',
      correctAnswer: 230,
      unit: 'nm',
      xpValue: 10,
      hint: 'Subtract 470 from 700.',
    },
    {
      id: 'sb-q8',
      type: 'multiple-choice',
      stem: 'Which sentence about a Cornwall sunset is the most accurate?',
      tier: 'confident',
      options: [
        'The Sun changes colour from white to red as it gets lower.',
        'At sunset the light cuts across a long path through the atmosphere; most of the blue scatters out along the way, leaving red and orange to reach the observer.',
        'The atmosphere only scatters light at midday.',
        'Red light scatters more strongly than blue, which is why sunsets look red.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'sb-mis-sun-changes-colour',
      hint: 'The Sun itself is the same colour all day. What changes is the path length through the air.',
    },
    {
      id: 'sb-q9',
      type: 'multiple-choice',
      stem: 'Why does the sky look blue rather than violet, even though violet scatters even more than blue?',
      tier: 'confident',
      options: [
        'Violet light does not scatter at all in air.',
        'Sunlight contains less violet than blue, and human eyes are less sensitive to violet. The mix reads blue.',
        'Violet light is absorbed by ozone before it ever reaches the lower atmosphere.',
        'Violet only exists in laboratory lasers, not in sunlight.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Two reasons together: less violet to start with, plus eye sensitivity.',
    },
    {
      id: 'sb-q10',
      type: 'multiple-choice',
      stem: 'Roughly how much more does blue light scatter compared to red light?',
      tier: 'confident',
      options: [
        'About the same.',
        'About 1 000 times more.',
        'About 5 to 10 times more.',
        'About a million times more.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The figure used at KS3 sits between 5 and 10.',
    },
    {
      id: 'sb-q11',
      type: 'numeric-entry',
      stem: 'A pupil estimates the scattering ratio between blue and red as 8 to 1. If 80 units of red light reach the ground from a midday Sun, how many units of red light would you expect if the scattering ratio applied directly to red (so red lost a factor of 8 too)? Give a whole number.',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'units',
      xpValue: 20,
      hint: 'Divide 80 by 8.',
    },
    {
      id: 'sb-q12',
      type: 'numeric-entry',
      stem: 'Sunlight at midday passes through about 100 km of atmosphere on a straight overhead path. At sunset that path is roughly 40 times longer. How long is the sunset path, in km?',
      tier: 'confident',
      correctAnswer: 4000,
      unit: 'km',
      xpValue: 15,
      hint: 'Multiply 100 by 40.',
    },
    {
      id: 'sb-q13',
      type: 'multiple-choice',
      stem: 'Two pupils argue about the March 2022 Saharan dust event in the UK, when sunsets looked unusually deep orange. Which explanation is correct?',
      tier: 'confident',
      options: [
        'Dust particles absorbed only red light, leaving blue.',
        'Saharan dust added extra scattering particles to the atmosphere, scattering even more blue out of the sunset beam, so the leftover light looked deeper orange.',
        'The dust replaced the Sun with a redder source.',
        'Dust slowed the sunlight down, which shifted its colour.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Extra particles mean extra scattering on the long sunset path.',
    },
    {
      id: 'sb-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order to explain a blue midday sky.',
      tier: 'confident',
      items: [
        'Scattered blue arrives at your eye from every patch of sky, so the whole sky reads blue.',
        'Sunlight starts as a white mix of every colour from red to violet.',
        'Short wavelengths (blue) scatter roughly 5 to 10 times more than long wavelengths (red).',
        'As the sunlight passes through the atmosphere, it bumps into N2 and O2 molecules.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 15,
      hint: 'Start with the source (white light), then the meeting (molecules), then the rule (short scatters more), then what your eye sees.',
    },
    {
      id: 'sb-q15',
      type: 'drag-order',
      stem: 'Put the steps in the right order to explain why a sunset looks red.',
      tier: 'confident',
      items: [
        'Red and orange travel almost straight through, reaching your eye.',
        'Near the horizon, the path through the atmosphere is much longer than at midday.',
        'Over that long path, most of the blue light is scattered out of the beam.',
        'The Sun appears low on the horizon.',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
      hint: 'Sun position, then path length, then blue lost, then what arrives.',
    },
    {
      id: 'sb-q16',
      type: 'spot-misconception',
      stem: 'Priya says, "Blue light slows down in air, and that is why it scatters more than red." Pick the better statement.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Blue is slower in air than red, so it gets caught up in the molecules.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. In a vacuum every colour travels at 3 x 10^8 m/s, and the small slowing in air is similar for every colour. Scattering depends on wavelength, not speed.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'sb-mis-blue-slows-down',
    },
    {
      id: 'sb-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step in this KS3 explanation of a blue sky over Snowdonia.',
      tier: 'challenge',
      steps: [
        'Sunlight reaching the top of the atmosphere is a white mix of every visible colour from red (700 nm) to violet (400 nm).',
        'As it crosses the atmosphere, the light meets nitrogen and oxygen molecules.',
        null,
        'Scattered blue leaves every patch of air in every direction.',
        'When the walker looks at any patch of sky, scattered blue reaches their eye, so the sky looks blue.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Short wavelengths (blue) scatter off these molecules roughly 5 to 10 times more strongly than long wavelengths (red).',
      xpValue: 20,
      misconceptionId: 'sb-mis-shorter-scatters-less',
    },
    {
      id: 'sb-q18',
      type: 'multiple-choice',
      stem: 'A pupil on a Highland dawn watches the sky turn from grey to pink to orange. Which sentence best explains the colour shift as the Sun rises?',
      tier: 'challenge',
      options: [
        'As the Sun rises, its temperature changes, which changes the colour of its light.',
        'The Sun rises through layers of atmosphere with different colours stored in them.',
        'When the Sun is very low, the path through the atmosphere is long and most blue is scattered out, leaving red and orange. As the Sun rises, the path shortens, less blue is scattered, and the sky shifts back towards blue.',
        'The Earth blocks blue light at night and releases it as the Sun rises.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'sb-mis-sun-changes-colour',
      hint: 'Sun position controls path length through air, which controls how much blue is scattered out of the beam.',
    },
    {
      id: 'sb-q19',
      type: 'spot-misconception',
      stem: 'Tom says, "All wavelengths of visible light scatter equally in air; the sky only looks blue because our eyes are most sensitive to blue."',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom is right. Scattering treats every colour the same.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. Scattering by air molecules depends strongly on wavelength: blue scatters roughly 5 to 10 times more than red. Eye sensitivity helps tune the result, but the unequal scattering is the main cause.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'sb-mis-all-scatter-equally',
    },
    {
      id: 'sb-q20',
      type: 'numeric-entry',
      stem: 'A pupil collects daylight readings and finds 200 units of blue light from the sky at midday and 25 units of red light from the same patch. Roughly how many times more blue than red is reaching their eye? Give a whole number.',
      tier: 'challenge',
      correctAnswer: 8,
      unit: 'times',
      xpValue: 20,
      hint: 'Divide 200 by 25.',
    },
    {
      id: 'sb-q21',
      type: 'numeric-entry',
      stem: 'Violet light has a wavelength of about 400 nm. Express this in metres, in standard form. Enter the number in metres.',
      tier: 'challenge',
      correctAnswer: 4e-7,
      unit: 'm',
      tolerance: 1e-9,
      xpValue: 20,
      hint: '1 nm = 10^-9 m. Multiply 400 by 10^-9 to get 4 x 10^-7 m.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that the sky is blue because it "reflects the sea", missing atmospheric scattering entirely.
    {
      id: 'sb-mis-sky-reflects-sea',
      description:
        'Believing the sky looks blue because it reflects the colour of the sea, rather than because of atmospheric scattering.',
      triggerAnswer: 'sky-reflects-sea',
      correction:
        'The sky is blue because air molecules scatter the short, blue wavelengths in sunlight much more than the long, red ones. It has nothing to do with the sea.',
      reExplanation:
        'Stand in the middle of Snowdonia or out on the moors in the Peak District and the sky is still blue, even though there is no sea in sight. The colour comes from sunlight passing through the atmosphere. Nitrogen and oxygen molecules scatter short wavelengths far more than long ones, so blue arrives at your eye from every direction.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, candidates wrote that longer wavelengths scatter more strongly than shorter wavelengths in air.
    {
      id: 'sb-mis-shorter-scatters-less',
      description:
        'Believing that shorter wavelengths (blue) scatter less than longer wavelengths (red), so red should dominate the sky.',
      triggerAnswer: 'shorter-scatters-less',
      correction:
        'Shorter wavelengths scatter much more, not less. Blue scatters roughly 5 to 10 times more than red off air molecules.',
      reExplanation:
        'Picture the visible spectrum bar: red sits at 700 nm and blue at 470 nm. Scattering by air molecules grows sharply as wavelength shrinks. Blue is nudged off course about 5 to 10 times more often than red. That is why the whole daytime sky reads blue, not red. Red light tends to travel straight through, which is why you can still see a red Sun through the haze at sunset.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, candidates wrote that the Sun "changes colour" from white to red at sunset.
    {
      id: 'sb-mis-sun-changes-colour',
      description:
        'Believing that the Sun itself changes colour at sunrise or sunset, rather than the path through the atmosphere changing.',
      triggerAnswer: 'sun-changes-colour',
      correction:
        'The Sun does not change colour during the day. What changes is the length of the atmospheric path the light has to cross before it reaches you.',
      reExplanation:
        'At midday the light cuts almost straight down through the atmosphere, a short path. At sunset the Sun sits near the horizon and the light slants across a much longer path of air. Over that long path most of the blue scatters out of the beam, leaving red and orange to reach the beach. The Sun in space is the same colour all day; the atmosphere is the filter.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that the daytime sky on the Moon must be blue too, since the Moon is close to Earth.
    {
      id: 'sb-mis-moon-blue-sky',
      description:
        'Believing that the daytime sky on the Moon is blue like Earth\'s, missing that scattering needs an atmosphere.',
      triggerAnswer: 'moon-blue-sky',
      correction:
        'The Moon has almost no atmosphere, so there are practically no molecules to scatter sunlight. The lunar daytime sky stays black, and stars stay visible.',
      reExplanation:
        'A blue sky needs two things: white sunlight and a layer of molecules to scatter the blue wavelengths. The Moon has the first but not the second. Apollo astronauts saw a black sky in full sunlight on the lunar surface for exactly this reason. Mars, with a thin dusty atmosphere, gives a butterscotch daytime sky instead.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates wrote that all wavelengths scatter equally and the sky only looks blue because of eye sensitivity.
    {
      id: 'sb-mis-all-scatter-equally',
      description:
        'Believing that every wavelength scatters equally in air, so sky colour depends only on eye sensitivity, not on the physics of scattering.',
      triggerAnswer: 'all-scatter-equally',
      correction:
        'Scattering depends strongly on wavelength. Blue scatters about 5 to 10 times more than red. Eye sensitivity helps tune the final colour, but the unequal scattering is the main cause.',
      reExplanation:
        'If every colour scattered equally, the daytime sky would look the same colour as the Sun itself: roughly white. Instead it reads blue, because the scattering rate falls sharply as wavelength grows. Eye sensitivity does play a small role in why the result reads blue rather than violet, but it cannot do all the work on its own.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2023, candidates wrote that blue "slows down" in air, conflating speed with scattering.
    {
      id: 'sb-mis-blue-slows-down',
      description:
        'Believing that blue light scatters more because it slows down in air, conflating the speed of light with the rate of scattering.',
      triggerAnswer: 'blue-slows-down',
      correction:
        'In a vacuum every colour travels at 3 x 10^8 m/s. In air all colours slow by a tiny, almost equal amount. Scattering depends on wavelength interacting with molecules, not on speed.',
      reExplanation:
        'Speed and scattering are different ideas. Air slightly slows light, and refraction can split a beam in a prism because each colour slows by a slightly different amount. But the strong scattering in the sky comes from the way short-wavelength waves interact with molecules far smaller than themselves. Even if you imagined every colour at exactly the same speed, blue would still scatter much more than red.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const wavesSkyBlueScatteringZoneNodes = [wavesSkyBlueScattering]
