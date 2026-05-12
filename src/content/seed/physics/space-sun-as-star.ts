import type { SkillNode } from '@/types/content'

const SUN_AS_STAR_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The Sun is a star, just much closer than any other</text>

    <!-- Earth on the left -->
    <circle cx="80" cy="200" r="14" fill="currentColor" />
    <text x="80" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Sun in the middle -->
    <circle cx="280" cy="200" r="40" fill="currentColor" />
    <text x="280" y="206" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Sun</text>
    <text x="280" y="270" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">our nearest star</text>
    <line x1="94" y1="200" x2="240" y2="200" stroke-dasharray="4,4" stroke-width="1.5" />
    <text x="170" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 150 million km</text>

    <!-- Proxima Centauri on the right -->
    <circle cx="700" cy="200" r="10" fill="currentColor" />
    <text x="700" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Proxima Centauri</text>
    <text x="700" y="260" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">next nearest star</text>
    <line x1="290" y1="200" x2="690" y2="200" stroke-dasharray="4,4" stroke-width="1.5" />
    <text x="490" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 40 trillion km away</text>

    <text x="400" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Stars look like tiny points in the UK night sky because they sit at vast distances.</text>
    <text x="400" y="362" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">The Sun only looks bigger and brighter because it is so much closer.</text>
  </g>
`

const FUSION_CORE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Energy from the Sun: nuclear fusion in the core</text>

    <!-- Cross-section of the Sun -->
    <circle cx="400" cy="220" r="160" stroke-width="3" />
    <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">surface about 5500 degrees C</text>

    <!-- Inner core ring -->
    <circle cx="400" cy="220" r="60" stroke-width="2" />
    <text x="400" y="218" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">core</text>
    <text x="400" y="236" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 15 million C</text>

    <!-- Fusion reaction labels -->
    <text x="160" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">hydrogen nuclei</text>
    <text x="160" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 73 percent</text>
    <line x1="200" y1="190" x2="345" y2="215" stroke-width="1.5" />

    <text x="640" y="180" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">helium nuclei</text>
    <text x="640" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 25 percent</text>
    <line x1="600" y1="190" x2="455" y2="215" stroke-width="1.5" />

    <!-- Energy out arrows -->
    <line x1="400" y1="60" x2="400" y2="40" stroke-width="2" />
    <polygon points="392,48 400,32 408,48" fill="currentColor" stroke="none" />
    <text x="450" y="55" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">light + other radiation out</text>

    <text x="400" y="400" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Hydrogen fuses into helium in the core, releasing energy.</text>
    <text x="400" y="420" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">This is a nuclear process, not burning (combustion).</text>
  </g>
`

const STAR_COLOUR_TEMP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Star colour links to surface temperature</text>

    <!-- Cool red star -->
    <circle cx="150" cy="200" r="55" fill="currentColor" />
    <text x="150" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">red</text>
    <text x="150" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">cooler</text>
    <text x="150" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 3000 C</text>
    <text x="150" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">example: Betelgeuse</text>

    <!-- Sun: yellow-white -->
    <circle cx="400" cy="200" r="45" fill="currentColor" />
    <text x="400" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>
    <text x="400" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">middling</text>
    <text x="400" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 5500 C</text>
    <text x="400" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">yellow-white</text>

    <!-- Hot blue-white star -->
    <circle cx="650" cy="200" r="35" fill="currentColor" />
    <text x="650" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">blue</text>
    <text x="650" y="285" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">hotter</text>
    <text x="650" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 30000 C</text>
    <text x="650" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">example: Rigel</text>

    <!-- Temperature axis underline -->
    <line x1="80" y1="365" x2="720" y2="365" stroke-width="2" />
    <polygon points="712,357 728,365 712,373" fill="currentColor" stroke="none" />
    <text x="80" y="385" text-anchor="start" font-size="12" stroke="none" fill="currentColor">cooler</text>
    <text x="720" y="385" text-anchor="end" font-size="12" stroke="none" fill="currentColor">hotter</text>
  </g>
`

export const spaceSunAsStar: SkillNode = {
  id: 'physics-space-sun-as-star',
  title: 'The Sun as a Star',
  description:
    'The Sun is a star, just much closer than any other. Light from the Sun travels about 150 million km to reach the UK; the next nearest star, Proxima Centauri, sits about 40 trillion km further. The Sun is a main-sequence star: nuclear fusion in its core turns hydrogen into helium, releasing energy as visible light and other radiation across the EM spectrum. The surface sits at about 5500 degrees C, the core at about 15 million degrees C. Star colour tracks temperature, with red stars cooler and blue-white stars hotter than our yellow-white Sun. By the end of this node, you can place the Sun among other stars by size, colour and temperature, and explain where its energy comes from.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'Our Sun as a star, other stars in our galaxy; energy released by the Sun.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; the Sun as a main sequence star, energy from nuclear fusion of hydrogen (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.8 to 8.10 stars and the life cycle of a star, main sequence (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; the Sun as a star, fusion in stellar cores (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: NASA Solar System Exploration "Sun: Facts" (https://solarsystem.nasa.gov/solar-system/sun/in-depth/), accessed 2026-05-12; Earth to Sun is one astronomical unit at about 149.6 million km, and Proxima Centauri sits at about 4.24 light years, about 40 trillion km.
    {
      id: 'pss-scale-distance',
      title: 'The Sun is our nearest star',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the distance to the Sun with the distance to the next nearest star.',
      data: {
        viewBox: '0 0 800 400',
        svg: SUN_AS_STAR_SVG,
        hotspots: [
          {
            id: 'pss-scale-sun',
            x: 35,
            y: 50,
            label: 'The Sun: our nearest star',
            description:
              'The Sun is a star, like all the points of light you can see in the UK night sky. It sits about 150 million km from Earth, which is one astronomical unit (1 AU).',
          },
          {
            id: 'pss-scale-earth',
            x: 10,
            y: 50,
            label: 'Earth at one AU',
            description:
              'Earth orbits the Sun at about 150 million km. Sunlight covers that gap in roughly 8 minutes, which sets a natural ruler for the inner Solar System.',
          },
          {
            id: 'pss-scale-proxima',
            x: 88,
            y: 50,
            label: 'Proxima Centauri: the next nearest star',
            description:
              'Proxima Centauri sits about 40 trillion km away, more than 250 000 times further than the Sun. Other stars look like points only because they are so far off; their true sizes are similar to or larger than the Sun.',
          },
          {
            id: 'pss-scale-rule',
            x: 50,
            y: 88,
            label: 'Why the Sun looks special',
            description:
              'The Sun is not a different kind of object from other stars. It looks bigger and brighter only because it is so much closer to us than any other star in our galaxy.',
          },
        ],
      },
    },
    // Source: AQA GCSE Physics 8463 specification 4.8.1.1 (Our solar system: the Sun as a main sequence star, energy from nuclear fusion of hydrogen), accessed 2026-05-12; surface temperature about 5500 degrees C and core temperature about 15 million degrees C are standard KS3 figures listed in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pss-fusion-core',
      title: 'Energy from the core: hydrogen fuses into helium',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where the Sun gets its energy and what it is made of.',
      data: {
        viewBox: '0 0 800 440',
        svg: FUSION_CORE_SVG,
        hotspots: [
          {
            id: 'pss-fusion-core-zone',
            x: 50,
            y: 50,
            label: 'Core at about 15 million C',
            description:
              'The Sun is a main-sequence star. Inside its core, where the temperature reaches about 15 million degrees C, hydrogen nuclei fuse together to form helium nuclei. Energy is released and travels out as light and other radiation across the EM spectrum.',
          },
          {
            id: 'pss-fusion-hydrogen',
            x: 20,
            y: 45,
            label: 'About 73 percent hydrogen',
            description:
              'Most of the Sun, by mass, is hydrogen, the lightest element. Hydrogen is the fuel for the fusion process in the core.',
          },
          {
            id: 'pss-fusion-helium',
            x: 80,
            y: 45,
            label: 'About 25 percent helium',
            description:
              'Helium makes up about a quarter of the Sun. It is built up in the core as hydrogen fuses; the rest of the Sun is mostly hydrogen with traces of heavier elements.',
          },
          {
            id: 'pss-fusion-surface',
            x: 50,
            y: 18,
            label: 'Surface at about 5500 C',
            description:
              'The visible surface, called the photosphere, sits at about 5500 degrees C. Energy from the core takes a long time to work its way out, then radiates away across the EM spectrum, peaking in visible light.',
          },
          {
            id: 'pss-fusion-not-fire',
            x: 50,
            y: 95,
            label: 'Fusion, not fire',
            description:
              'The Sun is not on fire. Burning (combustion) needs oxygen and only releases chemical energy. Fusion is a nuclear process, far more energetic; it powers the Sun without any oxygen at all.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 8 Astronomy 8.8 (stellar colour and surface temperature), accessed 2026-05-12; Royal Astronomical Society "Stellar Spectra" briefing (https://ras.ac.uk), star-colour temperature ranges are standard KS3/GCSE figures.
    {
      id: 'pss-colour-temp',
      title: 'Star colour and surface temperature',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a cooler red star, the Sun, and a hotter blue-white star.',
      data: {
        viewBox: '0 0 800 400',
        svg: STAR_COLOUR_TEMP_SVG,
        hotspots: [
          {
            id: 'pss-colour-red',
            x: 19,
            y: 60,
            label: 'Red stars: cooler, about 3000 C',
            description:
              'Cooler stars glow with a reddish colour at the surface, around 3000 degrees C. Betelgeuse, the red supergiant in the shoulder of Orion, is a familiar UK winter example.',
          },
          {
            id: 'pss-colour-sun',
            x: 50,
            y: 60,
            label: 'The Sun: about 5500 C, yellow-white',
            description:
              'The Sun sits in the middle of the temperature range for stars, at about 5500 degrees C. Seen from space it looks close to white; the UK atmosphere scatters blue light away so it appears yellow-white at ground level.',
          },
          {
            id: 'pss-colour-blue',
            x: 81,
            y: 60,
            label: 'Blue-white stars: hotter, about 30 000 C',
            description:
              'The hottest stars are blue-white, with surface temperatures around 30 000 degrees C. Rigel, the blue supergiant in the constellation of Orion, is the standard UK example.',
          },
          {
            id: 'pss-colour-rule',
            x: 50,
            y: 95,
            label: 'The rule: hotter looks bluer',
            description:
              'Star colour is a thermometer at a distance. Hotter surfaces emit more blue light and less red; cooler surfaces emit more red and less blue. The Sun is medium-sized and middling in temperature, not the biggest or the brightest star.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.8.1.1 (Sun as a main sequence star, energy from nuclear fusion of hydrogen); standard KS3 wording used in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pss-worked-1',
      title: 'Why a distant star looks tiny but the Sun looks big',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in Norwich looks up and sees the Sun as a bright disc and other stars as faint points. They wonder why the Sun looks so different.',
        },
        {
          explanation:
            'List the key facts. The Sun sits about 150 million km from Earth. The next nearest star, Proxima Centauri, sits about 40 trillion km from Earth.',
        },
        {
          explanation:
            'Compare the distances. 40 trillion km divided by 150 million km is roughly 270 000. The next nearest star is roughly 270 000 times further than the Sun.',
          maths: '40 000 000 000 000 / 150 000 000 = about 270 000',
        },
        {
          explanation:
            'Apply the rule. Brightness drops with distance, so a star that far away looks like a tiny point even though it can be a similar size to the Sun.',
        },
        {
          explanation:
            'State the answer. The Sun is not a special kind of object. It looks bigger and brighter than any other star only because it is by far the closest star to Earth.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 8 (stars and the life cycle of a star, main sequence; star colour relates to surface temperature); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pss-worked-2',
      title: 'Ordering three stars by temperature',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil is shown three stars: Betelgeuse (red), the Sun (yellow-white) and Rigel (blue-white). They are asked to order them from coolest to hottest by surface temperature.',
        },
        {
          explanation:
            'Recall the rule. Star colour tracks surface temperature: red stars are cooler, around 3000 degrees C; yellow-white stars are middling, around 5500 degrees C; blue-white stars are hotter, around 30 000 degrees C.',
        },
        {
          explanation: 'Tag each star with its temperature.',
          maths: 'Betelgeuse about 3000 C; Sun about 5500 C; Rigel about 30 000 C',
        },
        {
          explanation:
            'Sort by temperature, coolest first.',
          maths: '3000 C < 5500 C < 30 000 C',
        },
        {
          explanation:
            'State the answer. From coolest to hottest: Betelgeuse, then the Sun, then Rigel. The Sun sits in the middle of the star colour ladder, neither the coolest nor the hottest of these three.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pss-q1',
      type: 'multiple-choice',
      stem: 'Which statement about the Sun is correct?',
      tier: 'core',
      options: [
        'The Sun is a star, just much closer to Earth than any other star.',
        'The Sun is a planet that gives off light.',
        'The Sun is a moon orbiting the Earth.',
        'The Sun is a comet that has stopped moving.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Stars are huge balls of hot gas that release their own light from fusion. Planets do not do this.',
    },
    {
      id: 'pss-q2',
      type: 'numeric-entry',
      stem: 'About how many million km is the Sun from Earth? (One astronomical unit, 1 AU.) Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 150,
      unit: 'million km',
      xpValue: 10,
      hint: 'The Earth to Sun distance is one astronomical unit: roughly 150 million km.',
    },
    {
      id: 'pss-q3',
      type: 'multiple-choice',
      stem: 'Which element makes up most of the Sun by mass?',
      tier: 'core',
      options: [
        'Oxygen',
        'Carbon',
        'Iron',
        'Hydrogen',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The lightest element fills the Sun, and is the fuel for fusion in the core.',
    },
    {
      id: 'pss-q4',
      type: 'multiple-choice',
      stem: 'What process releases energy in the core of the Sun?',
      tier: 'core',
      options: [
        'Burning hydrogen with oxygen (combustion).',
        'Nuclear fusion of hydrogen into helium.',
        'Friction between gas particles.',
        'A chemical reaction with carbon dioxide.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pss-mis-sun-on-fire',
      hint: 'Fusion is a nuclear process, not burning. No oxygen is needed.',
    },
    {
      id: 'pss-q5',
      type: 'multiple-choice',
      stem: 'Star colour links to surface temperature. Which colour matches the hottest stars?',
      tier: 'core',
      options: [
        'Red',
        'Orange',
        'Yellow',
        'Blue-white',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pss-mis-red-is-hot',
      hint: 'Imagine a flame on a Bunsen burner: the hotter blue cone sits above the cooler yellow tip.',
    },
    {
      id: 'pss-q6',
      type: 'numeric-entry',
      stem: 'What is the approximate surface temperature of the Sun, in degrees C? Give your answer as a whole number to the nearest hundred.',
      tier: 'core',
      correctAnswer: 5500,
      tolerance: 100,
      unit: 'C',
      xpValue: 10,
      misconceptionId: 'pss-mis-core-vs-surface',
      hint: 'The visible surface (photosphere) sits at about 5500 C; do not confuse it with the much hotter core.',
    },
    {
      id: 'pss-q7',
      type: 'numeric-entry',
      stem: 'About what percentage of the Sun, by mass, is hydrogen? Give your answer as a whole number.',
      tier: 'core',
      correctAnswer: 73,
      tolerance: 2,
      unit: 'percent',
      xpValue: 10,
      hint: 'Most of the Sun is hydrogen, with about a quarter helium and a small amount of heavier elements.',
    },
    {
      id: 'pss-q8',
      type: 'numeric-entry',
      stem: 'The Sun sits about 150 million km from Earth. Proxima Centauri sits about 40 trillion km away. How many times further is Proxima Centauri than the Sun? Give your answer to the nearest 10 000.',
      tier: 'confident',
      correctAnswer: 270000,
      tolerance: 10000,
      unit: 'times',
      xpValue: 15,
      hint: 'Divide: 40 trillion divided by 150 million is 40 000 000 000 000 / 150 000 000.',
    },
    {
      id: 'pss-q9',
      type: 'multiple-choice',
      stem: 'A pupil writes: "The Sun is hotter than every other star, so all other stars must be cooler." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right; the Sun is the hottest star in the galaxy.',
        'The Sun is middling. Many stars (red stars like Betelgeuse) are cooler, and many (blue-white stars like Rigel) are much hotter.',
        'The Sun is the coolest star in the galaxy.',
        'All stars have the same temperature.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pss-mis-sun-is-biggest',
      hint: 'The Sun is a typical main-sequence star, not an extreme. Both hotter and cooler stars exist.',
    },
    {
      id: 'pss-q10',
      type: 'multiple-choice',
      stem: 'Which sentence best explains why the Sun looks much bigger than any other star in the sky?',
      tier: 'confident',
      options: [
        'The Sun is bigger than every other star.',
        'The Sun is the only object in space that gives off light.',
        'The Sun is the nearest star, so it appears much bigger and brighter than the others.',
        'The Sun is closer to the Moon than the other stars are.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pss-mis-sun-is-biggest',
      hint: 'Distance matters. A typical star 40 trillion km away looks like a point even if its true size matches the Sun.',
    },
    {
      id: 'pss-q11',
      type: 'drag-order',
      stem: 'Put these temperatures in order from coolest to hottest: the visible surface of the Sun, a kitchen oven on its highest setting, and the core of the Sun.',
      tier: 'confident',
      items: [
        'Core of the Sun (about 15 million degrees C)',
        'Kitchen oven on its highest setting (about 250 degrees C)',
        'Visible surface of the Sun (about 5500 degrees C)',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      misconceptionId: 'pss-mis-core-vs-surface',
      hint: 'Surface is hotter than any oven on Earth, but the core is hotter still by a factor of about 3000.',
    },
    {
      id: 'pss-q12',
      type: 'drag-order',
      stem: 'Put these three stars in order from coolest to hottest by surface temperature.',
      tier: 'confident',
      items: [
        'Rigel (a blue-white supergiant in Orion)',
        'Betelgeuse (a red supergiant in Orion)',
        'The Sun (a yellow-white main-sequence star)',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      misconceptionId: 'pss-mis-red-is-hot',
      hint: 'Red is cooler than yellow-white, which is cooler than blue-white.',
    },
    {
      id: 'pss-q13',
      type: 'multiple-choice',
      stem: 'Which of the following is the best description of the Sun?',
      tier: 'confident',
      options: [
        'A small, cool red dwarf star.',
        'A middling main-sequence star, mostly hydrogen, powered by fusion.',
        'A giant gas planet that has caught fire.',
        'A blue-white supergiant near the centre of the galaxy.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pss-mis-sun-on-fire',
      hint: 'Main-sequence means a star in the long stable phase of fusing hydrogen into helium.',
    },
    {
      id: 'pss-q14',
      type: 'spot-misconception',
      stem: 'Priya is talking about why the Sun gives off light.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says: "The Sun is on fire. Hydrogen burns with oxygen in space and that is what gives off the light." This is wrong; fusion is not burning, and there is no oxygen at the core of the Sun.',
          isMisconception: true,
        },
        {
          text: 'Priya says: "Hydrogen nuclei fuse into helium in the core of the Sun. This is a nuclear process that releases energy, which radiates out as light." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pss-mis-sun-on-fire',
    },
    {
      id: 'pss-q15',
      type: 'multiple-choice',
      stem: 'A pupil sees a faint red star in the UK night sky. What can they conclude about its surface temperature compared with the Sun?',
      tier: 'confident',
      options: [
        'It must be hotter than the Sun, because red is the colour of fire.',
        'It must be at the same temperature as the Sun, because all stars are the same.',
        'It must be cooler than the Sun, because red stars sit at about 3000 degrees C while the Sun is about 5500 degrees C.',
        'You cannot tell anything from the colour alone.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pss-mis-red-is-hot',
      hint: 'Cooler surfaces emit more red light and less blue. Hotter surfaces emit more blue.',
    },
    {
      id: 'pss-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is comparing the temperatures of three stars: Betelgeuse (red), the Sun (yellow-white) and Rigel (blue-white). They have been asked to put them in order from coolest to hottest.',
      tier: 'challenge',
      steps: [
        'Recall the rule: red stars are cooler than yellow-white stars, which are cooler than blue-white stars.',
        'Tag each star with its colour: Betelgeuse red, Sun yellow-white, Rigel blue-white.',
        null,
        'Compare the temperatures: 3000 C is less than 5500 C, which is less than 30 000 C.',
        'State the answer in order, coolest first: Betelgeuse, then the Sun, then Rigel.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Map each colour to an approximate surface temperature: red about 3000 C, yellow-white about 5500 C, blue-white about 30 000 C.',
      xpValue: 20,
    },
    {
      id: 'pss-q17',
      type: 'numeric-entry',
      stem: 'The Sun is roughly 73 percent hydrogen and 25 percent helium by mass. What percentage is left for all other elements combined? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 2,
      unit: 'percent',
      xpValue: 20,
      hint: '100 minus (73 + 25). The rest is a small slice of heavier elements such as oxygen and carbon.',
    },
    {
      id: 'pss-q18',
      type: 'multiple-choice',
      stem: 'A pupil writes: "When viewed from space, sunlight is close to white. From the ground in the UK, sunlight looks yellow-white because the atmosphere scatters blue away." Which best describes this claim?',
      tier: 'challenge',
      options: [
        'Wrong; sunlight is yellow at the source, not white.',
        'Wrong; the atmosphere makes sunlight redder, not less blue.',
        'Right; blue light is scattered out of the direct beam by the atmosphere, leaving yellow-white at ground level. This is the same effect that turns the sky blue.',
        'Right; the Sun changes colour through the day because it changes temperature.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pss-mis-sun-truly-yellow',
      hint: 'Scattering of blue light by the atmosphere is the same idea that explains the blue UK daytime sky.',
    },
    {
      id: 'pss-q19',
      type: 'spot-misconception',
      stem: 'Lewis is comparing the Sun with other stars in the galaxy.',
      tier: 'challenge',
      statements: [
        {
          text: 'Lewis says: "The Sun is the biggest star in the galaxy, because it looks so much larger than any other star in the sky." This is wrong; the Sun looks bigger only because it is the nearest star, and many stars are much larger.',
          isMisconception: true,
        },
        {
          text: 'Lewis says: "The Sun is a medium-sized main-sequence star. Other stars look like tiny points only because they are vastly further away." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pss-mis-sun-is-biggest',
    },
    {
      id: 'pss-q20',
      type: 'numeric-entry',
      stem: 'A red star has a surface temperature of about 3000 degrees C. The Sun has a surface temperature of about 5500 degrees C. By how many degrees C is the Sun hotter than the red star? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 2500,
      unit: 'C',
      xpValue: 20,
      hint: '5500 minus 3000.',
    },
    {
      id: 'pss-q21',
      type: 'multiple-choice',
      stem: 'Which statement best links the Sun to the EM spectrum node?',
      tier: 'challenge',
      options: [
        'The Sun emits only visible light, nothing else.',
        'The Sun emits across the EM spectrum (including infrared and ultraviolet), but its output peaks in visible light.',
        'The Sun emits only ultraviolet, which we feel as warmth.',
        'The Sun emits only microwaves.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pss-mis-only-visible',
      hint: 'Fusion produces a broad mix of radiation; what reaches Earth covers infrared through to ultraviolet, peaking in visible.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates described stellar energy as "the Sun burning hydrogen", confusing combustion with nuclear fusion.
    {
      id: 'pss-mis-sun-on-fire',
      description:
        'Believing the Sun gives off light because it is on fire or because hydrogen is burning with oxygen.',
      triggerAnswer: 'sun-is-on-fire',
      correction:
        'Fusion is a nuclear process, not burning. Hydrogen nuclei fuse into helium in the core, releasing energy without any oxygen.',
      reExplanation:
        'Burning (combustion) is a chemical reaction that needs oxygen and releases only chemical energy. In space there is no oxygen around the Sun. The Sun glows because, deep in its core at about 15 million degrees C, hydrogen nuclei fuse to form helium, releasing far more energy than any chemical reaction could.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates wrote that red is the hottest colour for stars, confusing red flame on Earth with red stars.
    {
      id: 'pss-mis-red-is-hot',
      description:
        'Thinking red stars are the hottest because red looks like fire, and blue stars are the coolest.',
      triggerAnswer: 'red-is-hottest',
      correction:
        'Star colour reverses our everyday flame picture. Red stars are the coolest, around 3000 C; blue-white stars are the hottest, around 30 000 C.',
      reExplanation:
        'A Bunsen flame gives a clue: the blue inner cone is hotter than the cooler yellow tip. For stars, the same rule holds. Cool surfaces (around 3000 degrees C) emit more red light and less blue, so they look red. Hot surfaces (around 30 000 degrees C) emit more blue and less red, so they look blue-white.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates quoted core temperatures as surface temperatures (and vice versa) when asked about the Sun.
    {
      id: 'pss-mis-core-vs-surface',
      description:
        'Mixing up the surface temperature of the Sun (about 5500 degrees C) with the core temperature (about 15 million degrees C).',
      triggerAnswer: 'core-surface-swap',
      correction:
        'The visible surface (photosphere) sits at about 5500 degrees C. The core, deep inside the Sun, sits at about 15 million degrees C. The two values are wildly different.',
      reExplanation:
        'Picture an oven: the heating element inside is much hotter than the casing you can see. The Sun is similar. Fusion happens only in the core, where the temperature reaches about 15 million degrees C. The surface, which we see, has cooled to about 5500 degrees C by the time the energy has worked its way out.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that the Sun is the largest star in the galaxy because it looks the biggest.
    {
      id: 'pss-mis-sun-is-biggest',
      description:
        'Believing the Sun is the biggest or the hottest star in the galaxy because it looks the brightest from Earth.',
      triggerAnswer: 'sun-biggest-or-hottest',
      correction:
        'The Sun is a medium-sized main-sequence star. Many stars are much larger or hotter; the Sun only looks the brightest because it is the nearest.',
      reExplanation:
        'Brightness depends on distance as well as true size. The next nearest star is about 40 trillion km away, more than 250 000 times further than the Sun. A torch held close to your eye looks brighter than a stadium floodlight a kilometre away; the same effect makes the Sun appear special even though it is a typical main-sequence star.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates said the Sun is intrinsically yellow without mentioning atmospheric scattering.
    {
      id: 'pss-mis-sun-truly-yellow',
      description:
        'Believing the Sun is truly yellow at the source, ignoring that the UK atmosphere scatters blue light out of the direct beam.',
      triggerAnswer: 'sun-source-yellow',
      correction:
        'Viewed from space, sunlight is close to white. At ground level the atmosphere scatters blue away, leaving the Sun looking yellow-white.',
      reExplanation:
        'Sunlight contains all the colours of the rainbow in roughly equal measure, so it leaves the Sun looking close to white. The atmosphere scatters short (blue) wavelengths in all directions, the same effect that paints the UK sky blue. What is left in the direct beam is yellow-white, the colour we see at ground level on a clear day.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates wrote that the Sun emits only visible light and ignored infrared and ultraviolet.
    {
      id: 'pss-mis-only-visible',
      description:
        'Believing the Sun emits only visible light, not other parts of the EM spectrum.',
      triggerAnswer: 'visible-only',
      correction:
        'The Sun emits across the EM spectrum, including infrared, visible and ultraviolet. Its output peaks in visible light, but it is not limited to visible.',
      reExplanation:
        'Cross-link to the EM-spectrum node: sunlight covers a wide band, from infrared (which we feel as warmth) through visible (the rainbow we see) to ultraviolet (which causes sunburn). The peak sits in the visible band, which is one reason our eyes evolved to use it, but the full output is much broader.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceSunAsStarZoneNodes = [spaceSunAsStar]
