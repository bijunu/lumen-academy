import type { SkillNode } from '@/types/content'

const LIGHT_TRAVEL_TIMES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="17" font-weight="700" stroke="none" fill="currentColor">How long does light take to reach Earth?</text>
    <text x="400" y="52" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Speed of light c is about 300 000 km/s, the cosmic speed limit</text>

    <!-- Earth marker on the left -->
    <circle cx="80" cy="200" r="22" />
    <text x="80" y="205" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Row 1: Moon -->
    <line x1="105" y1="100" x2="200" y2="100" stroke-dasharray="3,3" />
    <circle cx="215" cy="100" r="8" fill="currentColor" />
    <text x="240" y="95" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Moon</text>
    <text x="240" y="112" text-anchor="start" font-size="12" stroke="none" fill="currentColor">about 1.3 s of light travel</text>

    <!-- Row 2: Sun -->
    <line x1="105" y1="150" x2="320" y2="150" stroke-dasharray="3,3" />
    <circle cx="340" cy="150" r="14" fill="currentColor" />
    <text x="365" y="145" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Sun</text>
    <text x="365" y="162" text-anchor="start" font-size="12" stroke="none" fill="currentColor">about 8 min 20 s of light travel</text>

    <!-- Row 3: Pluto -->
    <line x1="105" y1="200" x2="460" y2="200" stroke-dasharray="3,3" />
    <circle cx="475" cy="200" r="5" fill="currentColor" />
    <text x="500" y="195" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Pluto</text>
    <text x="500" y="212" text-anchor="start" font-size="12" stroke="none" fill="currentColor">about 5 h 30 min of light travel</text>

    <!-- Row 4: Proxima Centauri -->
    <line x1="105" y1="260" x2="560" y2="260" stroke-dasharray="3,3" />
    <circle cx="575" cy="260" r="7" fill="currentColor" />
    <text x="600" y="255" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Proxima Centauri</text>
    <text x="600" y="272" text-anchor="start" font-size="12" stroke="none" fill="currentColor">about 4.2 light years (nearest other star)</text>

    <!-- Row 5: Andromeda -->
    <line x1="105" y1="320" x2="640" y2="320" stroke-dasharray="3,3" />
    <ellipse cx="660" cy="320" rx="14" ry="6" fill="currentColor" />
    <text x="685" y="315" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Andromeda galaxy</text>
    <text x="685" y="332" text-anchor="start" font-size="12" stroke="none" fill="currentColor">about 2.5 million light years away</text>

    <!-- Bottom note -->
    <text x="400" y="375" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Looking far into space is also looking back in time: we see each object as it WAS.</text>
  </g>
`

const LIGHT_YEAR_BOX_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">One light year: the DISTANCE light travels in one year</text>

    <!-- Left panel: definition -->
    <rect x="60" y="80" width="320" height="240" />
    <text x="220" y="120" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">A light year is a DISTANCE</text>
    <text x="220" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">not a time, not a year of speed.</text>
    <text x="220" y="185" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Speed of light:</text>
    <text x="220" y="205" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">c = 3 x 10^8 m/s</text>
    <text x="220" y="225" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">(about 300 000 km/s)</text>
    <text x="220" y="260" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">In one year (about 3.15 x 10^7 s)</text>
    <text x="220" y="280" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">light covers a huge distance.</text>
    <text x="220" y="305" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">1 light year is about 9.5 x 10^12 km</text>

    <!-- Right panel: scale anchors -->
    <rect x="420" y="80" width="320" height="240" />
    <text x="580" y="120" text-anchor="middle" font-size="15" font-weight="700" stroke="none" fill="currentColor">Anchor it to familiar values</text>
    <text x="580" y="155" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 light second: 300 000 km</text>
    <text x="580" y="175" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">(about 8 trips around the Earth)</text>
    <text x="580" y="205" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 light minute: 18 million km</text>
    <text x="580" y="235" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 light hour: 1 080 million km</text>
    <text x="580" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">1 light year: 9 500 000 million km</text>
    <text x="580" y="295" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">d = c x t with c constant</text>

    <!-- Bottom: pair check -->
    <text x="400" y="360" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">If t is in seconds and c is in m/s, then d is in metres. Match the units before you compute.</text>
  </g>
`

const COSMIC_SCALES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="17" font-weight="700" stroke="none" fill="currentColor">Cosmic distance ladder, all in light years (ly)</text>
    <text x="400" y="52" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Each rung is roughly a million times larger than the one before it</text>

    <!-- Horizontal scale -->
    <line x1="60" y1="220" x2="740" y2="220" stroke-width="2" />
    <polygon points="730,212 746,220 730,228" fill="currentColor" stroke="none" />

    <!-- Rung 1: Sun -->
    <line x1="100" y1="210" x2="100" y2="230" stroke-width="2" />
    <text x="100" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Sun</text>
    <text x="100" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">8 light minutes</text>
    <text x="100" y="268" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(0.000016 ly)</text>

    <!-- Rung 2: Proxima Centauri -->
    <line x1="260" y1="210" x2="260" y2="230" stroke-width="2" />
    <text x="260" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Proxima Centauri</text>
    <text x="260" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">4.2 ly</text>
    <text x="260" y="268" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">nearest other star</text>

    <!-- Rung 3: Milky Way -->
    <line x1="430" y1="210" x2="430" y2="230" stroke-width="2" />
    <text x="430" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Milky Way edge</text>
    <text x="430" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 100 000 ly across</text>

    <!-- Rung 4: Andromeda -->
    <line x1="580" y1="210" x2="580" y2="230" stroke-width="2" />
    <text x="580" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Andromeda galaxy</text>
    <text x="580" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">2.5 million ly</text>

    <!-- Rung 5: Observable universe -->
    <line x1="710" y1="210" x2="710" y2="230" stroke-width="2" />
    <text x="710" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Observable universe</text>
    <text x="710" y="250" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 93 billion ly across</text>

    <!-- Time-machine note -->
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Andromeda is 2.5 million ly away, so we see it as it was 2.5 million years ago.</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A telescope is, in this sense, a time machine pointed at the past.</text>
  </g>
`

export const spaceLightYears: SkillNode = {
  id: 'physics-space-light-years',
  title: 'Light Years and Astronomical Distance',
  description:
    'Light moves at c = 3 x 10^8 m/s, around 300 000 km/s. A light year is the DISTANCE light travels in one year, about 9.5 x 10^12 km, not a length of time. By anchoring to familiar values (Moon 1.3 s, Sun 8 min 20 s, Pluto 5 h 30 min, Proxima Centauri 4.2 light years, Andromeda 2.5 million light years) you can size up the gulf between stars and galaxies. A useful side effect: looking far is also looking back in time. By the end of this node you can use d = c x t for light travel, spot when a light year is being mislabelled as a time, and judge the scale of the universe in light years.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'The light year as a unit of astronomical distance; the speed of light and the scale of the universe.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; scale of the universe, distances between stars and galaxies (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.8 to 8.10 distances to stars and galaxies, the light year (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; light year as a measure of astronomical distance (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: NASA Science, Solar System Exploration, Our Solar System (overview, light travel times to Moon, Sun and Pluto), https://science.nasa.gov/solar-system/ (accessed 2026-05-12).
    {
      id: 'ply-scene-travel-times',
      title: 'Light travel time: how old is the picture we see?',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how long light takes to reach Earth from objects at different scales.',
      data: {
        viewBox: '0 0 800 400',
        svg: LIGHT_TRAVEL_TIMES_SVG,
        hotspots: [
          {
            id: 'ply-travel-moon',
            x: 35,
            y: 25,
            label: 'Moon: about 1.3 s of light travel',
            description:
              'The Moon is the closest natural body to Earth. Light bounced off retroreflectors left by Apollo missions returns in about 2.6 s, so the one way trip is about 1.3 s. So we see the Moon as it was just over a second ago.',
          },
          {
            id: 'ply-travel-sun',
            x: 50,
            y: 37,
            label: 'Sun: about 8 min 20 s of light travel',
            description:
              'The Sun is 150 million km from Earth on average (1 astronomical unit). At 300 000 km/s, light covers that gap in about 500 s, which is 8 min 20 s. If the Sun went out, we would not see it darken for over 8 minutes.',
          },
          {
            id: 'ply-travel-pluto',
            x: 65,
            y: 50,
            label: 'Pluto: about 5 h 30 min of light travel',
            description:
              'Pluto is around 5.9 billion km from Earth at its average distance. Light covers that gap in about 5 hours 30 minutes. Signals from the New Horizons probe took hours to reach mission control.',
          },
          {
            id: 'ply-travel-proxima',
            x: 75,
            y: 65,
            label: 'Proxima Centauri: about 4.2 light years',
            description:
              'Proxima Centauri is the nearest star to the Sun. Light takes about 4.2 years to cross the gap, so we see it as it was over four years ago. No spacecraft has ever reached another star.',
          },
          {
            id: 'ply-travel-andromeda',
            x: 85,
            y: 80,
            label: 'Andromeda: about 2.5 million light years',
            description:
              'The Andromeda galaxy is the nearest large galaxy to the Milky Way. Its light has been travelling for around 2.5 million years before reaching us, so the image you see is older than the human species.',
          },
        ],
      },
    },
    // Source: Royal Observatory Greenwich, "What is a light year?" explainer, https://www.rmg.co.uk/stories/topics/what-light-year (accessed 2026-05-12).
    {
      id: 'ply-scene-definition',
      title: 'A light year is a distance, not a time',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the definition of a light year and link it back to the speed of light.',
      data: {
        viewBox: '0 0 800 400',
        svg: LIGHT_YEAR_BOX_SVG,
        hotspots: [
          {
            id: 'ply-def-distance',
            x: 28,
            y: 35,
            label: 'Distance, not time',
            description:
              'A light year is the distance light travels in one year of vacuum. Despite the word "year" in the name, the unit measures length, not duration. The metric SI value is about 9.5 x 10^15 m.',
          },
          {
            id: 'ply-def-speed',
            x: 28,
            y: 55,
            label: 'Speed of light c',
            description:
              'Light moves at c = 3 x 10^8 m/s in a vacuum, which is the same as around 300 000 km/s. Nothing carrying information moves faster. Light from this scene to your eye took only a few nanoseconds.',
          },
          {
            id: 'ply-def-formula',
            x: 73,
            y: 35,
            label: 'Use d = c x t for any light gap',
            description:
              'If you know the time light spends in flight, multiply by c to get the distance. If you know the distance, divide by c to get the time. Both forms need matching units, usually metres and seconds.',
          },
          {
            id: 'ply-def-anchor',
            x: 73,
            y: 70,
            label: 'Anchor the scale',
            description:
              'Useful anchors: 1 light second is about 300 000 km, 1 light minute is about 18 million km, and 1 light year is about 9.5 x 10^12 km. Each rung up scales the gap by a large factor.',
          },
        ],
      },
    },
    // Source: European Space Agency, ESA Kids "How big is the Universe?" page (scale of the universe and observable universe), https://www.esa.int/kids/en/learn/Our_Universe (accessed 2026-05-12).
    {
      id: 'ply-scene-cosmic-scales',
      title: 'Cosmic distance ladder: from a star to the observable universe',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to climb the distance ladder from our Sun out to the edge of the observable universe.',
      data: {
        viewBox: '0 0 800 400',
        svg: COSMIC_SCALES_SVG,
        hotspots: [
          {
            id: 'ply-scale-sun',
            x: 13,
            y: 55,
            label: 'Our Sun: 8 light minutes',
            description:
              'The Sun is the closest star to Earth. Its light travel time is 8 minutes 20 seconds, which is around 0.000016 of a light year. On a galaxy scale the Sun is essentially at our doorstep.',
          },
          {
            id: 'ply-scale-proxima',
            x: 33,
            y: 55,
            label: 'Proxima Centauri: 4.2 ly',
            description:
              'The next nearest star is 4.2 light years away. That is roughly 40 trillion km. A radio message sent there today would not get a reply for over 8 years, even at the speed of light.',
          },
          {
            id: 'ply-scale-galaxy',
            x: 54,
            y: 55,
            label: 'Milky Way edge: 100 000 ly',
            description:
              'Our home galaxy, the Milky Way, is about 100 000 light years across. Light from a star on the far rim has been on its journey for as long as modern humans have walked the Earth.',
          },
          {
            id: 'ply-scale-andromeda',
            x: 73,
            y: 55,
            label: 'Andromeda: 2.5 million ly',
            description:
              'Andromeda is the nearest large neighbour galaxy. The 2.5 million year light travel time means looking at Andromeda is like reading a postcard from before the first human ancestors made stone tools.',
          },
          {
            id: 'ply-scale-universe',
            x: 89,
            y: 55,
            label: 'Observable universe: 93 billion ly',
            description:
              'The observable universe is about 93 billion light years across. We can only see objects whose light has had time to reach us in the 13.8 billion years since the Big Bang.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: BBC Bitesize KS3 Physics, Space, "The light year" explainer (worked example pattern: time x speed gives distance), https://www.bbc.co.uk/bitesize/topics/zw982hv (accessed 2026-05-12).
    {
      id: 'ply-worked-1',
      title: 'How far is one light second? Use d = c x t.',
      steps: [
        {
          explanation:
            'Set out the situation. We want the distance light travels in exactly one second. This is a "light second" and it is a handy stepping stone to a light year.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'c = 3 x 10^8 m/s, t = 1 s, d = ?',
        },
        {
          explanation:
            'Pick the right form. Distance equals speed multiplied by time.',
          maths: 'd = c x t',
        },
        {
          explanation: 'Substitute the values.',
          maths: 'd = 3 x 10^8 x 1',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 'd = 3 x 10^8 m = 300 000 000 m',
        },
        {
          explanation:
            'State the answer with the unit. One light second is 3 x 10^8 m, or 300 000 km. That is about eight trips around the Earth. Sense check: light is the fastest thing there is, so a one second hop covers a vast distance, which fits.',
        },
      ],
    },
    // Source: NASA Solar System Exploration, "How long does it take sunlight to reach Earth?" (the 8 minute 20 second figure), https://solarsystem.nasa.gov/solar-system/sun/by-the-numbers/ (accessed 2026-05-12).
    {
      id: 'ply-worked-2',
      title: 'How long does light take from the Sun? Use t = d / c.',
      steps: [
        {
          explanation:
            'Set out the situation. The average distance from the Sun to Earth is 150 million km, or 1.5 x 10^11 m. We want the time light takes to cross that gap.',
        },
        {
          explanation: 'Write what you know.',
          maths: 'd = 1.5 x 10^11 m, c = 3 x 10^8 m/s, t = ?',
        },
        {
          explanation:
            'Pick the right form. Rearrange d = c x t to get t on its own.',
          maths: 't = d / c',
        },
        {
          explanation: 'Substitute the values, keeping the units consistent.',
          maths: 't = (1.5 x 10^11) / (3 x 10^8)',
        },
        {
          explanation: 'Evaluate the arithmetic.',
          maths: 't = 0.5 x 10^3 s = 500 s',
        },
        {
          explanation:
            'State the answer with the unit. 500 s is 8 minutes 20 seconds. So we see the Sun as it was 8 minutes 20 seconds ago. Sense check: a tiny fraction of a year for a Solar System distance, far less than a light year, is sensible.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ply-q1',
      type: 'multiple-choice',
      stem: 'A light year is best described as:',
      tier: 'core',
      options: [
        'a unit of time, equal to one year',
        'a unit of distance, equal to the distance light travels in one year',
        'a unit of speed, equal to the speed of light',
        'the age of the universe',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ply-mis-distance-vs-time',
      hint: 'The word "year" in the name is misleading: the unit measures DISTANCE, not duration.',
    },
    {
      id: 'ply-q2',
      type: 'multiple-choice',
      stem: 'Which value is closest to the speed of light in a vacuum?',
      tier: 'core',
      options: [
        '340 m/s (this is the speed of sound in air)',
        '3 000 km/s',
        '300 000 km/s',
        '300 000 000 km/s',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ply-mis-c-vs-sound',
      hint: 'In SI units, c is about 3 x 10^8 m/s. Convert metres to kilometres by dividing by 1000. The first value is the speed of sound, not light.',
    },
    {
      id: 'ply-q3',
      type: 'multiple-choice',
      stem: 'Light from the Sun takes about 8 minutes 20 seconds to reach Earth. What does this mean for what we see?',
      tier: 'core',
      options: [
        'We see the Sun as it is right now.',
        'We see the Sun as it was about 8 minutes 20 seconds ago.',
        'We see the Sun as it will be in 8 minutes time.',
        'We do not see the Sun, only its heat.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ply-mis-see-stars-now',
      hint: 'Light needs time to travel. The image arriving today set off 8 min 20 s ago.',
    },
    {
      id: 'ply-q4',
      type: 'numeric-entry',
      stem: 'Light takes about 1.3 s to travel from the Moon to Earth. Using c = 3 x 10^8 m/s, how far away is the Moon, in metres? Use d = c x t and give the answer in standard form, treating the value as 1.3 x c. (Enter the number of metres only, to 1 decimal place in millions of metres: e.g. for 380 million m enter 380000000.)',
      tier: 'core',
      correctAnswer: 390000000,
      tolerance: 5000000,
      unit: 'm',
      xpValue: 10,
      hint: 'd = c x t = 3 x 10^8 x 1.3 = 3.9 x 10^8 m.',
    },
    {
      id: 'ply-q5',
      type: 'multiple-choice',
      stem: 'Roughly how far is one light year, in kilometres?',
      tier: 'core',
      options: [
        '9.5 thousand km',
        '9.5 million km',
        '9.5 billion km',
        '9.5 trillion km',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ply-mis-light-year-small',
      hint: 'About 9.5 x 10^12 km. 10^12 is a trillion.',
    },
    {
      id: 'ply-q6',
      type: 'multiple-choice',
      stem: 'Why is the light year a useful unit for astronomy, instead of just using kilometres?',
      tier: 'core',
      options: [
        'Kilometres do not work in space.',
        'Light years are easier to type than kilometres.',
        'Distances between stars and galaxies are so vast that the kilometre values become unwieldy, while light year values stay manageable.',
        'Light years measure time, which is easier for astronomers.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ply-mis-distance-vs-time',
      hint: 'Proxima Centauri is 4.2 ly. Writing 40 000 000 000 000 km every time would be painful.',
    },
    {
      id: 'ply-q7',
      type: 'numeric-entry',
      stem: 'A light year is roughly 9.5 x 10^12 km. Proxima Centauri is 4.2 light years from Earth. About how many kilometres away is it? Give your answer in 10^13 km, to 1 decimal place (e.g. 5.0 means 5.0 x 10^13 km).',
      tier: 'core',
      correctAnswer: 4.0,
      tolerance: 0.1,
      unit: '× 10^13 km',
      xpValue: 10,
      misconceptionId: 'ply-mis-light-year-small',
      hint: '4.2 x 9.5 x 10^12 = 39.9 x 10^12, which is 3.99 x 10^13.',
    },
    {
      id: 'ply-q8',
      type: 'multiple-choice',
      stem: 'Andromeda is about 2.5 million light years from Earth. What does this tell us about the picture we see of it tonight?',
      tier: 'confident',
      options: [
        'We see Andromeda as it is right now.',
        'The image we see set off 2.5 million years ago, so we see Andromeda as it was then.',
        'Andromeda is 2.5 million light years old.',
        'Light from Andromeda has never reached Earth.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ply-mis-see-stars-now',
      hint: 'Distance in light years equals the light travel time in years. A telescope is, in this sense, a window into the past.',
    },
    {
      id: 'ply-q9',
      type: 'multiple-choice',
      stem: 'A student writes: "Proxima Centauri is 4.2 light years away. So 4.2 years ago, light from it set off and is just reaching Earth now." Which response is best?',
      tier: 'confident',
      options: [
        'The student is wrong; light is instantaneous, so the light set off today.',
        'The student is right; light needs 4.2 years to cross 4.2 light years of distance.',
        'The student is wrong; 4.2 light years is a time of 4.2 minutes.',
        'The student is wrong; light years measure the size of stars, not the gaps between them.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ply-mis-light-instantaneous',
      hint: 'A light year is defined so that this conversion is exact: a distance of N light years takes N years for light to cross.',
    },
    {
      id: 'ply-q10',
      type: 'numeric-entry',
      stem: 'Pluto is about 5.4 x 10^12 m from Earth at its average distance. Using c = 3 x 10^8 m/s, how long does light take to reach Earth from Pluto, in seconds? Give the answer to the nearest hundred seconds.',
      tier: 'confident',
      correctAnswer: 18000,
      tolerance: 200,
      unit: 's',
      xpValue: 15,
      hint: 't = d / c = (5.4 x 10^12) / (3 x 10^8) = 1.8 x 10^4 s.',
    },
    {
      id: 'ply-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Light is so quick that it must reach us straight away, with no delay." Which sentence corrects this?',
      tier: 'confident',
      options: [
        'They are right; light is instantaneous in vacuum.',
        'Light travels at a finite speed of 3 x 10^8 m/s, so distant objects always involve a delay.',
        'Light only delays for sound, not for vision.',
        'Light travels backwards in time, so there is no delay.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'ply-mis-light-instantaneous',
      hint: 'Even from the Moon, the light delay is over a second.',
    },
    {
      id: 'ply-q12',
      type: 'numeric-entry',
      stem: 'How far is one light minute, in millions of kilometres? Use c = 300 000 km/s and t = 60 s. Give the answer in millions of km (e.g. 18 means 18 million km).',
      tier: 'confident',
      correctAnswer: 18,
      tolerance: 0.5,
      unit: 'million km',
      xpValue: 15,
      hint: 'd = c x t = 300 000 km/s x 60 s = 18 000 000 km, which is 18 million km.',
    },
    {
      id: 'ply-q13',
      type: 'numeric-entry',
      stem: 'A radio signal from a Mars rover takes 12 minutes to reach Earth at the time of an observation. Using c = 3 x 10^8 m/s, how far is the rover, in metres? (Convert 12 minutes to seconds first.) Give the answer in 10^11 m, to 1 decimal place.',
      tier: 'confident',
      correctAnswer: 2.2,
      tolerance: 0.1,
      unit: '× 10^11 m',
      xpValue: 15,
      misconceptionId: 'ply-mis-time-units',
      hint: '12 minutes = 720 s. d = 3 x 10^8 x 720 = 2.16 x 10^11 m.',
    },
    {
      id: 'ply-q14',
      type: 'drag-order',
      stem: 'Put the steps in the right order for working out the distance to a star, given the light travel time in years.',
      tier: 'confident',
      items: [
        'Multiply the time in years by the size of one light year (9.5 x 10^12 km) to get the distance in km.',
        'Read the light travel time in years from the question.',
        'State the answer with the unit (km or m).',
        'Decide which form of d = c x t to use: distance equals speed times time.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'Read the time, pick the formula, multiply for distance, then label with the unit.',
    },
    {
      id: 'ply-q15',
      type: 'spot-misconception',
      stem: 'Two pupils discuss the meaning of "Proxima Centauri is 4.2 light years away".',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "That means Proxima Centauri is 4.2 km away, because a light year is small." This is wrong; one light year is about 9.5 x 10^12 km, so 4.2 light years is around 40 trillion km.',
          isMisconception: true,
        },
        {
          text: 'Ben says: "That means light has been travelling for 4.2 years to reach us, covering about 4 x 10^13 km in the process." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ply-mis-light-year-small',
    },
    {
      id: 'ply-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out the light travel time from the Sun to Earth at an average distance of 1.5 x 10^11 m.',
      tier: 'challenge',
      steps: [
        'Write the data: d = 1.5 x 10^11 m, c = 3 x 10^8 m/s, t = ?',
        'Pick the right form: t = d / c.',
        null,
        'Evaluate the arithmetic: t = 0.5 x 10^3 s = 500 s.',
        'State the answer with a unit: 500 s is the same as 8 min 20 s. So we see the Sun as it was 8 min 20 s ago. The result is far less than a year, which is sensible for a Solar System distance.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Substitute the values, keeping units consistent: t = (1.5 x 10^11) / (3 x 10^8).',
      xpValue: 20,
    },
    {
      id: 'ply-q17',
      type: 'numeric-entry',
      stem: 'A galaxy is observed at a distance of 50 million light years. For how many millions of years has its light been travelling to reach Earth? Give the answer as a whole number of millions.',
      tier: 'challenge',
      correctAnswer: 50,
      unit: 'million years',
      xpValue: 20,
      misconceptionId: 'ply-mis-distance-vs-time',
      hint: 'A light year is defined so that the time in years equals the distance in light years.',
    },
    {
      id: 'ply-q18',
      type: 'multiple-choice',
      stem: 'A bright star explodes (a supernova) at a distance of 1500 light years from Earth. When was the explosion, relative to today, by the time we see the flash arrive?',
      tier: 'challenge',
      options: [
        'About 1500 seconds ago, because of the speed of light delay.',
        'About 1500 minutes ago.',
        'About 1500 years ago, because the light needed 1500 years to reach us.',
        'It is happening today; light is instantaneous.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'ply-mis-see-stars-now',
      hint: 'A distance of N light years means N years of light travel time.',
    },
    {
      id: 'ply-q19',
      type: 'numeric-entry',
      stem: 'A radio command is sent to a probe orbiting Jupiter at an average distance of 6 x 10^11 m. How long does the signal take to arrive, in minutes? Use c = 3 x 10^8 m/s. Give the answer to the nearest whole minute.',
      tier: 'challenge',
      correctAnswer: 33,
      tolerance: 1,
      unit: 'min',
      xpValue: 20,
      misconceptionId: 'ply-mis-time-units',
      hint: 't = d / c = (6 x 10^11) / (3 x 10^8) = 2000 s. Then 2000 / 60 is about 33 min.',
    },
    {
      id: 'ply-q20',
      type: 'spot-misconception',
      stem: 'Two pupils discuss what looking at the night sky tells us about time.',
      tier: 'challenge',
      statements: [
        {
          text: 'Maya says: "The stars I see tonight all look the way they are right now, in real time." This is wrong; we see each star as it was when its light set off, which may be years or thousands of years ago.',
          isMisconception: true,
        },
        {
          text: 'Tom says: "Each star I see is shown as it was when its light started its journey. The further the star, the older the picture." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'ply-mis-see-stars-now',
    },
    {
      id: 'ply-q21',
      type: 'multiple-choice',
      stem: 'The observable universe is about 93 billion light years across. Which statement matches that fact?',
      tier: 'challenge',
      options: [
        'Light from the far edge has had 93 billion years to reach a point on the other side.',
        'The universe is 93 billion years old.',
        'It would take a light year of time to cross the universe.',
        'The Sun is 93 billion light years from Earth.',
      ],
      correctIndex: 0,
      xpValue: 20,
      hint: 'A light year is a distance, so 93 billion light years is a distance, not a duration. Crossing it at the speed of light would take 93 billion years.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1, candidates wrote that a light year is a unit of time.
    {
      id: 'ply-mis-distance-vs-time',
      description:
        'Reading a light year as a unit of time (like a normal year) rather than as a unit of distance.',
      triggerAnswer: 'distance-time-swap',
      correction:
        'A light year is a DISTANCE: the gap light covers in one year, about 9.5 x 10^12 km. It is not a duration.',
      reExplanation:
        'Proxima Centauri at 4.2 light years means 4.2 times that distance, around 4 x 10^13 km, not 4.2 years. The clue is in the phrasing: light years sit alongside kilometres and metres when you label answers, never alongside seconds and years.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates assumed light reaches us instantly from the Sun and stars.
    {
      id: 'ply-mis-light-instantaneous',
      description:
        'Assuming light moves instantly, so there is no delay between an event in space and our seeing it.',
      triggerAnswer: 'instant-light',
      correction:
        'Light has a finite speed of about 3 x 10^8 m/s. Even from the Moon, the trip takes 1.3 s; from the Sun, 8 min 20 s.',
      reExplanation:
        'A finite speed means every observation involves a delay equal to the distance divided by c. For the Moon that is just over a second; for the Sun about 500 s; for Proxima Centauri 4.2 years. Treating light as instant gives wrong answers for any d = c x t calculation.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, candidates said that stars appear in the sky in real time.
    {
      id: 'ply-mis-see-stars-now',
      description:
        'Believing the stars we see tonight look the way they are right now, instead of as they were when their light set off.',
      triggerAnswer: 'real-time-stars',
      correction:
        'We see each star as it WAS, not as it is now. The image arriving today set off long ago, and it travelled at the speed of light.',
      reExplanation:
        'The image of Andromeda reaching us tonight set off 2.5 million years ago. Some stars we still see may have already exploded; the news of that explosion is still on its way. Light travel time always gives you the age of the picture.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, candidates underestimated the size of a light year, treating it as similar to a kilometre.
    {
      id: 'ply-mis-light-year-small',
      description:
        'Treating a light year as a small distance similar to a kilometre, instead of around 9.5 trillion km.',
      triggerAnswer: 'light-year-small',
      correction:
        'One light year is about 9.5 x 10^12 km. That is roughly 100 million times larger than the diameter of the Earth.',
      reExplanation:
        'If a light year were "small", every star would be a short walk away. Proxima Centauri at 4.2 light years is about 40 trillion km; the Milky Way is 100 000 light years across. Light years scale up by huge multipliers, not by tens or hundreds.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates substituted minutes or years directly into d = c x t without converting to seconds.
    {
      id: 'ply-mis-time-units',
      description:
        'Substituting a time in minutes or years directly into d = c x t when c is given in m/s, without converting to seconds.',
      triggerAnswer: 'time-units-skip',
      correction:
        'Match the units before computing: convert minutes or years into seconds when c is in m/s. 1 min = 60 s; 1 year is about 3.15 x 10^7 s.',
      reExplanation:
        'A signal taking 12 minutes from Mars has t = 720 s, not 12. Using 12 directly gives d = 3 x 10^8 x 12 = 3.6 x 10^9 m, which is 200 times too small. Always rewrite the time in seconds before reaching for d = c x t.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates confused the speed of light with the speed of sound or with infinity.
    {
      id: 'ply-mis-c-vs-sound',
      description:
        'Confusing the speed of light c with the speed of sound (about 340 m/s), or with an undefined "infinite" speed.',
      triggerAnswer: 'c-vs-sound',
      correction:
        'The speed of light in vacuum is c = 3 x 10^8 m/s, which is around a million times the speed of sound in air.',
      reExplanation:
        'Sound at 340 m/s would take over 14 years to cross the Earth Sun gap, but light covers the same gap in 500 s. Using 340 m/s for c gives answers a million times too small. The two speeds belong to different scales of physics, so always pick c for light problems.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceLightYearsZoneNodes = [spaceLightYears]
