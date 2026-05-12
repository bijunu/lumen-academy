import type { SkillNode } from '@/types/content'

const SATELLITE_TYPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Natural vs artificial satellites of Earth</text>

    <!-- Earth in centre -->
    <circle cx="400" cy="220" r="55" fill="currentColor" />
    <text x="400" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Earth</text>

    <!-- Moon: natural -->
    <circle cx="640" cy="220" r="22" fill="currentColor" />
    <text x="640" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Moon</text>
    <text x="640" y="270" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">natural</text>
    <text x="640" y="288" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 384 000 km</text>

    <!-- Artificial sats: small dots -->
    <rect x="220" y="120" width="14" height="10" fill="currentColor" />
    <line x1="214" y1="125" x2="200" y2="125" stroke-width="2" />
    <line x1="234" y1="125" x2="248" y2="125" stroke-width="2" />
    <text x="225" y="105" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">artificial</text>
    <text x="225" y="148" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">satellite</text>

    <rect x="510" y="100" width="14" height="10" fill="currentColor" />
    <line x1="504" y1="105" x2="490" y2="105" stroke-width="2" />
    <line x1="524" y1="105" x2="538" y2="105" stroke-width="2" />

    <rect x="170" y="290" width="14" height="10" fill="currentColor" />
    <line x1="164" y1="295" x2="150" y2="295" stroke-width="2" />
    <line x1="184" y1="295" x2="198" y2="295" stroke-width="2" />

    <!-- Dashed orbit hint -->
    <ellipse cx="400" cy="220" rx="160" ry="110" stroke-dasharray="4,4" stroke-width="1" />

    <!-- Caption -->
    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A satellite is any body in orbit. The Moon is natural; the rest are built and launched by humans.</text>
  </g>
`

const ORBIT_TYPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two key orbit types: LEO and geostationary</text>

    <!-- Earth -->
    <circle cx="400" cy="220" r="50" fill="currentColor" />
    <text x="400" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Earth</text>

    <!-- LEO: tight circle, with ISS marker -->
    <circle cx="400" cy="220" r="75" stroke-dasharray="3,3" stroke-width="1.5" />
    <rect x="394" y="138" width="12" height="8" fill="currentColor" />
    <text x="400" y="130" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">LEO: about 400 km</text>
    <text x="400" y="118" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">ISS, Landsat, Starlink</text>

    <!-- Geostationary: large circle -->
    <circle cx="400" cy="220" r="180" stroke-dasharray="6,4" stroke-width="1.5" />
    <rect x="574" y="214" width="14" height="10" fill="currentColor" />
    <line x1="568" y1="219" x2="554" y2="219" stroke-width="2" />
    <line x1="588" y1="219" x2="602" y2="219" stroke-width="2" />
    <text x="640" y="222" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">geostationary:</text>
    <text x="640" y="238" text-anchor="start" font-size="11" stroke="none" fill="currentColor">about 36 000 km,</text>
    <text x="640" y="254" text-anchor="start" font-size="11" stroke="none" fill="currentColor">Sky TV, Meteosat</text>

    <!-- Period notes -->
    <text x="400" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">LEO period: about 90 minutes. Geostationary period: 24 hours.</text>
    <text x="400" y="378" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Higher orbit, longer period; lower orbit, shorter period.</text>
  </g>
`

const SATELLITE_USES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">What we use satellites for</text>

    <!-- TV broadcast: geostationary -->
    <rect x="60" y="80" width="180" height="220" stroke-width="1.5" />
    <text x="150" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">TV broadcast</text>
    <text x="150" y="125" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">geostationary</text>
    <rect x="142" y="140" width="16" height="12" fill="currentColor" />
    <line x1="135" y1="146" x2="120" y2="146" stroke-width="2" />
    <line x1="165" y1="146" x2="180" y2="146" stroke-width="2" />
    <line x1="150" y1="160" x2="150" y2="240" stroke-dasharray="3,3" stroke-width="1" />
    <path d="M 130 245 L 170 245 L 170 260 L 130 260 Z" fill="currentColor" />
    <text x="150" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sky dish on UK roof</text>
    <text x="150" y="293" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Astra 28.2 degrees E</text>

    <!-- Weather imaging: geostationary -->
    <rect x="270" y="80" width="180" height="220" stroke-width="1.5" />
    <text x="360" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Weather imaging</text>
    <text x="360" y="125" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">geostationary</text>
    <rect x="352" y="140" width="16" height="12" fill="currentColor" />
    <line x1="345" y1="146" x2="330" y2="146" stroke-width="2" />
    <line x1="375" y1="146" x2="390" y2="146" stroke-width="2" />
    <circle cx="360" cy="215" r="38" stroke-width="1.5" />
    <path d="M 340 200 Q 360 195 380 210" stroke-width="1.5" />
    <path d="M 335 220 Q 355 215 380 230" stroke-width="1.5" />
    <text x="360" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Met Office uses Meteosat</text>
    <text x="360" y="293" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">to track UK fronts</text>

    <!-- Earth observation + GPS: LEO/MEO -->
    <rect x="480" y="80" width="260" height="220" stroke-width="1.5" />
    <text x="610" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth observation, GPS</text>
    <text x="610" y="125" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">low orbits (LEO / MEO)</text>
    <circle cx="610" cy="215" r="40" fill="currentColor" />
    <text x="610" y="220" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Earth</text>
    <rect x="540" y="160" width="12" height="8" fill="currentColor" />
    <rect x="660" y="160" width="12" height="8" fill="currentColor" />
    <rect x="540" y="265" width="12" height="8" fill="currentColor" />
    <rect x="660" y="265" width="12" height="8" fill="currentColor" />
    <text x="610" y="295" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Sentinel, Landsat, GPS, ISS</text>
  </g>
`

export const spaceSatellites: SkillNode = {
  id: 'physics-space-satellites',
  title: 'Satellites and Space Technology',
  description:
    'A satellite is any object that orbits a larger body. The Moon is a natural satellite of Earth; everything else in orbit, from the ISS to Sky TV satellites, is artificial. Two orbit types matter most for KS3. A geostationary orbit sits about 36 000 km above the equator with a 24 hour period, so the satellite appears fixed above one spot on Earth; this is why a single dish on a UK roof receives Sky and the BBC via Astra 28.2 degrees E. A low Earth orbit (LEO), such as the ISS at about 400 km, has a period of about 90 minutes; it is used for Earth observation, GPS and crewed missions. Tim Peake spent six months aboard the ISS in LEO in 2015 to 2016. By the end of this node, you can name natural and artificial satellites, contrast LEO and geostationary orbits, and match each orbit to a sensible use.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'Gravity forces between Earth and Moon (qualitative); uses of artificial satellites in communications and observation.',
    awardingBodies: {
      aqa: '4.8.1.2 Orbital motion, satellites and gravity; geostationary and low polar orbits (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.5-8.7 orbits of artificial satellites, geostationary and low Earth orbits (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; artificial satellites and their orbits (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: BBC Bitesize KS3 Physics, "Earth and space: satellites" (2023), accessed via bbc.co.uk/bitesize.
    {
      id: 'psa-natural-vs-artificial',
      title: 'Natural and artificial satellites',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read about natural and artificial satellites of Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: SATELLITE_TYPES_SVG,
        hotspots: [
          {
            id: 'psa-sat-definition',
            x: 50,
            y: 55,
            label: 'A satellite is anything that orbits a larger body',
            description:
              'The word satellite means any object held in orbit by gravity. It does not have to be built by humans. The Earth itself is a satellite of the Sun, and the Moon is a satellite of the Earth.',
          },
          {
            id: 'psa-sat-natural',
            x: 80,
            y: 55,
            label: 'Moon: a natural satellite',
            description:
              'The Moon orbits Earth at an average distance of about 384 000 km and has done for over four billion years. It is the only natural satellite of Earth, held in orbit by the pull of gravity between the two bodies.',
          },
          {
            id: 'psa-sat-artificial',
            x: 28,
            y: 30,
            label: 'Artificial satellites: built and launched by humans',
            description:
              'Artificial satellites are spacecraft put into orbit by rockets. Sputnik 1 was the first, launched in 1957. Today there are over 8 000 active artificial satellites, used for communications, observation, navigation and science.',
          },
          {
            id: 'psa-sat-gravity',
            x: 50,
            y: 92,
            label: 'Gravity keeps every satellite in orbit',
            description:
              'Every satellite, natural or artificial, follows a curved path because Earth pulls it sideways into a continuous fall. Without that pull, each one would carry straight on into space.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification, Topic 8 Astronomy (2016 onward), Pearson published support notes on geostationary and low Earth orbits.
    {
      id: 'psa-orbit-types',
      title: 'Low Earth and geostationary orbits',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a low Earth orbit with a geostationary orbit.',
      data: {
        viewBox: '0 0 800 400',
        svg: ORBIT_TYPES_SVG,
        hotspots: [
          {
            id: 'psa-orbit-leo',
            x: 50,
            y: 30,
            label: 'Low Earth orbit (LEO): close in, short period',
            description:
              'A LEO sits a few hundred km above the surface. The ISS orbits at about 400 km with a period of about 90 minutes, so it crosses the UK sky in roughly six minutes. Earth observation satellites like Landsat and Sentinel also use LEO.',
          },
          {
            id: 'psa-orbit-geo',
            x: 80,
            y: 58,
            label: 'Geostationary orbit: far out, 24 hour period',
            description:
              'A geostationary orbit is a circle about 36 000 km above the equator. At that height the orbital period is exactly 24 hours, the same as one Earth day, so the satellite appears fixed above one spot on the ground. UK TV satellites at Astra 28.2 degrees E sit here.',
          },
          {
            id: 'psa-orbit-rule',
            x: 50,
            y: 90,
            label: 'Higher orbit means longer period',
            description:
              'A satellite further from Earth must travel along a much larger circle, and the pull of gravity is weaker there, so its period is longer. LEO at 400 km has a 90 minute period; geostationary at 36 000 km has a 24 hour period.',
          },
        ],
      },
    },
    // Source: UK Space Agency, "Goonhilly Earth Station and UK satellite operations" briefing (2022), gov.uk publication.
    {
      id: 'psa-uses',
      title: 'How the UK uses satellites',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what each kind of orbit is used for in the UK.',
      data: {
        viewBox: '0 0 800 400',
        svg: SATELLITE_USES_SVG,
        hotspots: [
          {
            id: 'psa-uses-tv',
            x: 19,
            y: 55,
            label: 'TV broadcast: geostationary',
            description:
              'A Sky dish on a UK roof is bolted in one position pointing at Astra 28.2 degrees E. Because the satellite is geostationary, it stays above that compass bearing all day, so the dish never needs to turn. The BBC also broadcasts via this slot.',
          },
          {
            id: 'psa-uses-weather',
            x: 45,
            y: 55,
            label: 'Weather imaging: geostationary',
            description:
              'The UK Met Office uses Meteosat satellites in geostationary orbit to watch weather fronts cross the Atlantic. From 36 000 km up, the same camera sees the whole disc of Europe every fifteen minutes, ideal for tracking storms heading for the British Isles.',
          },
          {
            id: 'psa-uses-observation',
            x: 76,
            y: 55,
            label: 'Earth observation and GPS: low orbits',
            description:
              'Detailed Earth observation needs low orbits so cameras and sensors are close enough to resolve fields and buildings. GPS uses many satellites in medium orbits so several are always above the horizon; one geostationary unit cannot give a position fix on its own.',
          },
          {
            id: 'psa-uses-goonhilly',
            x: 50,
            y: 92,
            label: 'UK ground site: Goonhilly in Cornwall',
            description:
              'Goonhilly Earth Station in Cornwall has tracked satellites since 1962. Its large dishes point at geostationary slots for telecoms and steer to follow LEO craft when they pass overhead, supporting both UK and international missions.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification, section 4.8.1.2, on geostationary orbit periods (2016 onward).
    {
      id: 'psa-worked-1',
      title: 'Identifying the orbit type from the period',
      steps: [
        {
          explanation:
            'Set out the situation. A TV satellite is described as having a period of 24 hours. We want to name the orbit.',
        },
        {
          explanation:
            'Recall the two main KS3 orbit types. Low Earth orbit has a period of about 90 minutes; geostationary orbit has a period of 24 hours.',
        },
        {
          explanation:
            'Match the period to the type. A period of 24 hours is the geostationary orbit, sitting about 36 000 km above the equator.',
        },
        {
          explanation:
            'State the answer with the reason. The satellite is in a geostationary orbit because its 24 hour period matches one Earth day, so it appears fixed over one spot on the ground. That is exactly what a TV broadcast satellite needs.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0, Topic 8.5-8.7, on choosing orbits for satellite uses.
    {
      id: 'psa-worked-2',
      title: 'Choosing the right orbit for a use',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil is asked which orbit to use for a satellite that maps UK farmland in detail every few days.',
        },
        {
          explanation:
            'List what the use needs. Detailed maps need cameras close to the ground; "every few days" means the orbit must pass over the UK regularly.',
        },
        {
          explanation:
            'Compare the orbit options. Geostationary sits 36 000 km up over the equator, too far for fine detail and always above the same spot. Low Earth orbit at about 400 km is close to the surface and passes over many points on Earth each day.',
        },
        {
          explanation:
            'Pick the better fit. A low Earth orbit is the right choice for high resolution mapping; Sentinel and Landsat both work this way.',
        },
        {
          explanation:
            'State the answer with the reason. A LEO at about 400 km gives both the close range needed for detail and the repeated UK passes needed for regular updates, so a geostationary slot would not work for this mission.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'psa-q1',
      type: 'multiple-choice',
      stem: 'Which of these is a natural satellite of Earth?',
      tier: 'core',
      options: [
        'The International Space Station (ISS)',
        'The Moon',
        'A Sky TV broadcast satellite',
        'A weather imaging satellite',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'A natural satellite was not built by humans; it has been in orbit naturally for billions of years.',
    },
    {
      id: 'psa-q2',
      type: 'multiple-choice',
      stem: 'What does the word "satellite" mean in physics?',
      tier: 'core',
      options: [
        'A type of dish on a UK roof.',
        'A planet of the Solar System.',
        'Any body that orbits a larger body.',
        'A piece of space debris that has fallen to Earth.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'psa-mis-built-only',
      hint: 'The word covers anything held in orbit by gravity, natural or built by humans.',
    },
    {
      id: 'psa-q3',
      type: 'numeric-entry',
      stem: 'Roughly how high above the equator does a geostationary satellite orbit, in km? Give your answer to the nearest thousand.',
      tier: 'core',
      correctAnswer: 36000,
      tolerance: 500,
      unit: 'km',
      xpValue: 10,
      hint: 'The geostationary altitude is tens of thousands of km, much higher than LEO (400 km) and much closer than the Moon (384 000 km).',
    },
    {
      id: 'psa-q4',
      type: 'multiple-choice',
      stem: 'What is the orbital period of a geostationary satellite?',
      tier: 'core',
      options: [
        '24 hours',
        '90 minutes',
        '1 month',
        '1 year',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'psa-mis-geo-stationary-in-space',
      hint: 'The period must match one rotation of Earth so the satellite stays over the same spot on the ground.',
    },
    {
      id: 'psa-q5',
      type: 'numeric-entry',
      stem: 'The International Space Station orbits at roughly what altitude above Earth\'s surface, in km?',
      tier: 'core',
      correctAnswer: 400,
      tolerance: 50,
      unit: 'km',
      xpValue: 10,
      hint: 'The ISS is in low Earth orbit, a few hundred km up. Tim Peake lived there in 2015 to 2016.',
    },
    {
      id: 'psa-q6',
      type: 'multiple-choice',
      stem: 'Which UK site has tracked satellites since 1962 and is still used today?',
      tier: 'core',
      options: [
        'Jodrell Bank in Cheshire',
        'The Royal Observatory in Greenwich',
        'Stonehenge in Wiltshire',
        'Goonhilly Earth Station in Cornwall',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The site is in Cornwall and has large dishes that point at geostationary slots.',
    },
    {
      id: 'psa-q7',
      type: 'numeric-entry',
      stem: 'The ISS in low Earth orbit completes one lap of Earth in roughly how many minutes?',
      tier: 'core',
      correctAnswer: 90,
      tolerance: 5,
      unit: 'minutes',
      xpValue: 10,
      hint: 'LEO at 400 km has a much shorter period than geostationary; about an hour and a half per orbit.',
    },
    {
      id: 'psa-q8',
      type: 'multiple-choice',
      stem: 'Why does a Sky TV dish on a UK roof not need to turn during the day?',
      tier: 'confident',
      options: [
        'The dish is bolted in place; the signal does not change with the satellite\'s motion.',
        'The Astra satellite is geostationary, so it stays above the same spot above the equator and the dish keeps pointing at it.',
        'The satellite sits motionless in space, suspended above the equator.',
        'The signal bounces off the Moon, so the dish points at that instead.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'psa-mis-geo-stationary-in-space',
      hint: 'Geostationary means the satellite shares Earth\'s rotation; from the ground it appears fixed in the sky.',
    },
    {
      id: 'psa-q9',
      type: 'multiple-choice',
      stem: 'Which use of satellites best fits a low Earth orbit?',
      tier: 'confident',
      options: [
        'Continuous TV broadcast to a single dish.',
        'Acting as a single fixed mirror for radio signals.',
        'High resolution imaging of UK farmland.',
        'Holding a beacon above one city for navigation.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'psa-mis-wrong-orbit-for-use',
      hint: 'High resolution imaging needs the camera close to the ground; LEO sits at about 400 km.',
    },
    {
      id: 'psa-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims the ISS "floats" above Earth because there is no gravity at 400 km. Which reply is correct?',
      tier: 'confident',
      options: [
        'They are right; gravity stops at the edge of the atmosphere.',
        'They are right; the ISS is held up by air pressure from below.',
        'They are wrong; gravity is almost as strong at 400 km, and the ISS is in continuous freefall around Earth.',
        'They are wrong; the ISS is suspended by magnetic forces from the poles.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'psa-mis-no-gravity-up-there',
      hint: 'At 400 km gravity is roughly 89 percent of the surface value. The ISS keeps falling around Earth, missing as it falls.',
    },
    {
      id: 'psa-q11',
      type: 'numeric-entry',
      stem: 'The Moon orbits Earth at an average distance of how many km? Give your answer to the nearest thousand.',
      tier: 'confident',
      correctAnswer: 384000,
      tolerance: 5000,
      unit: 'km',
      xpValue: 15,
      hint: 'The Moon is far further than any artificial satellite. The value is in the hundreds of thousands of km.',
    },
    {
      id: 'psa-q12',
      type: 'multiple-choice',
      stem: 'Why does GPS need many satellites instead of a single geostationary one?',
      tier: 'confident',
      options: [
        'One satellite cannot send a strong enough signal to a phone.',
        'Geostationary satellites cannot transmit radio signals.',
        'A single satellite would overheat after one day in the Sun.',
        'GPS needs several satellites above the horizon at once to fix a position; one fixed point cannot do that.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Position fixing needs ranges from multiple sources, so several satellites must be in view.',
    },
    {
      id: 'psa-q13',
      type: 'drag-order',
      stem: 'Put the orbits in order from lowest to highest above Earth\'s surface.',
      tier: 'confident',
      items: [
        'Geostationary slot at about 36 000 km',
        'ISS in low Earth orbit at about 400 km',
        'Moon\'s orbit at about 384 000 km',
        'A weather balloon in the upper atmosphere at about 35 km',
      ],
      correctOrder: [3, 1, 0, 2],
      xpValue: 15,
      hint: 'Start with the balloon at 35 km. The ISS is hundreds of km up; geostationary is tens of thousands; the Moon is far further.',
    },
    {
      id: 'psa-q14',
      type: 'spot-misconception',
      stem: 'Asha says a geostationary satellite is "stationary in space".',
      tier: 'confident',
      statements: [
        {
          text: 'Asha says: "A geostationary satellite is stationary in space and does not move at all." This is wrong; it travels at about 3 km/s along its orbit, but it shares Earth\'s rotation, so it only looks fixed from the ground.',
          isMisconception: true,
        },
        {
          text: 'Asha says: "A geostationary satellite orbits Earth once every 24 hours, so it stays above one spot on the equator." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'psa-mis-geo-stationary-in-space',
    },
    {
      id: 'psa-q15',
      type: 'numeric-entry',
      stem: 'Tim Peake lived on the ISS in 2015 to 2016. Roughly how many months did his mission last?',
      tier: 'confident',
      correctAnswer: 6,
      tolerance: 1,
      unit: 'months',
      xpValue: 15,
      hint: 'Long-duration ISS missions usually last about half a year before the crew rotates.',
    },
    {
      id: 'psa-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is deciding which orbit to use for a satellite that broadcasts TV to UK homes through a fixed roof dish.',
      tier: 'challenge',
      steps: [
        'List what the use needs: one fixed dish on a roof must keep pointing at the satellite all day.',
        'Compare the two main orbits at KS3: low Earth orbit has a 90 minute period; geostationary has a 24 hour period.',
        null,
        'Pick the orbit: a geostationary orbit at about 36 000 km above the equator.',
        'State the answer with a reason: the satellite stays above the same compass bearing all day, so a fixed dish keeps receiving the signal without ever turning.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Match the need to the orbit: only an orbit with a 24 hour period keeps the satellite above the same spot on the ground all day.',
      xpValue: 20,
    },
    {
      id: 'psa-q17',
      type: 'multiple-choice',
      stem: 'Two satellites orbit Earth. Satellite P is at 400 km; satellite Q is at 36 000 km. Which statement is correct?',
      tier: 'challenge',
      options: [
        'Q has a shorter period than P because it is further out.',
        'P has a shorter period than Q because it sits closer to Earth, where gravity is stronger.',
        'Both have the same period because they orbit the same Earth.',
        'Q has no period; it is fixed in space.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'psa-mis-higher-faster',
      hint: 'Higher orbits sit on larger circles with weaker gravity, so they take longer per lap.',
    },
    {
      id: 'psa-q18',
      type: 'numeric-entry',
      stem: 'A LEO satellite at 400 km has a period of about 90 minutes. Roughly how many full orbits does it complete in 24 hours? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 16,
      tolerance: 1,
      unit: 'orbits',
      xpValue: 20,
      misconceptionId: 'psa-mis-iss-24h',
      hint: 'There are 1440 minutes in 24 hours. Divide by 90 to get the number of orbits.',
    },
    {
      id: 'psa-q19',
      type: 'spot-misconception',
      stem: 'A class is asked which satellite has the longer period: a geostationary unit or a unit at 400 km.',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam says: "The 400 km satellite has the longer period because it is higher up, and higher means slower per lap." This is wrong; 400 km is the lower orbit, and lower orbits have shorter periods.',
          isMisconception: true,
        },
        {
          text: 'Sam says: "The geostationary satellite has the longer period (24 hours), because it sits much further out at 36 000 km, where gravity is weaker and the orbital circle is much larger." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'psa-mis-higher-faster',
    },
    {
      id: 'psa-q20',
      type: 'multiple-choice',
      stem: 'Which sentence best explains why the Moon and the ISS both stay in orbit around Earth?',
      tier: 'challenge',
      options: [
        'Both are pulled sideways by Earth\'s gravity into a curved path, falling around Earth without ever hitting the surface.',
        'Both are pushed outwards by centrifugal force, balancing gravity.',
        'Both are held by magnetic forces from Earth\'s poles.',
        'Both float because space has no gravity at all.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'psa-mis-no-gravity-up-there',
      hint: 'An orbit is continuous freefall: gravity pulls inward, sideways motion keeps the path curving.',
    },
    {
      id: 'psa-q21',
      type: 'numeric-entry',
      stem: 'A geostationary satellite has an orbital period equal to one Earth day. How many hours is that?',
      tier: 'challenge',
      correctAnswer: 24,
      tolerance: 0.5,
      unit: 'hours',
      xpValue: 20,
      hint: 'One Earth day is the time for Earth to spin once on its axis, which is 24 hours.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, candidates restricted the word "satellite" to artificial objects only.
    {
      id: 'psa-mis-built-only',
      description:
        'Believing that only artificial spacecraft count as satellites, and that the Moon is not a satellite.',
      triggerAnswer: 'satellite-built-only',
      correction:
        'A satellite is any body that orbits a larger body. The Moon is the natural satellite of Earth; artificial satellites are extra ones built and launched by humans.',
      reExplanation:
        'The Moon has orbited Earth for over four billion years, so it is a natural satellite of Earth. Sputnik 1 (1957) and the ISS are artificial satellites, but the label still means "thing in orbit". Calling the Moon "not a satellite" would also mean Earth is not a satellite of the Sun, which contradicts the definition.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, Topic 8 Astronomy, candidates wrote that geostationary satellites are motionless in space.
    {
      id: 'psa-mis-geo-stationary-in-space',
      description:
        'Reading "geostationary" as "motionless in space" rather than "rotating with Earth so it appears fixed from the ground".',
      triggerAnswer: 'geo-stationary-in-space',
      correction:
        'A geostationary satellite orbits Earth once every 24 hours along a circle 36 000 km above the equator. It moves through space; it only looks fixed because it shares the rotation of Earth.',
      reExplanation:
        'At 36 000 km the satellite travels at about 3 km/s along a huge orbital circle. Because its period is exactly one Earth day, it always sits above the same spot on the equator. From a UK roof dish it appears in one place in the sky, but in space it is moving the whole time, held in orbit by gravity.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, P8.1, candidates wrote that higher satellites move faster and have shorter periods.
    {
      id: 'psa-mis-higher-faster',
      description:
        'Assuming higher orbits have shorter periods or higher speeds, rather than the opposite.',
      triggerAnswer: 'higher-faster',
      correction:
        'Higher orbits have longer periods, not shorter. Gravity is weaker further out, the orbital circle is larger, and the satellite takes longer to complete one lap.',
      reExplanation:
        'A LEO at 400 km has a period of about 90 minutes; a geostationary slot at 36 000 km has a period of 24 hours, sixteen times longer. The Moon at 384 000 km takes about 27 days for one orbit. Each step further out gives a longer period, never a shorter one, at KS3 level.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 2F, candidates said the ISS stays up because there is no gravity at 400 km.
    {
      id: 'psa-mis-no-gravity-up-there',
      description:
        'Claiming there is no gravity at orbital altitudes, so satellites float rather than fall around Earth.',
      triggerAnswer: 'no-gravity-in-orbit',
      correction:
        'Gravity is almost as strong in low Earth orbit as on the ground. Satellites do not float; they are in continuous freefall, curving around Earth instead of hitting it.',
      reExplanation:
        'At 400 km gravity is roughly 89 percent of the surface value. The ISS does not "hover": it travels at about 7.7 km/s sideways. Gravity bends its path into a circle so it keeps missing the ground as it falls. Astronauts inside feel weightless because they fall with the station, not because gravity is absent.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Topic 8 Astronomy, candidates matched geostationary satellites to high resolution Earth observation.
    {
      id: 'psa-mis-wrong-orbit-for-use',
      description:
        'Matching a use to the wrong orbit, e.g. using geostationary for high resolution mapping or LEO for continuous TV broadcast.',
      triggerAnswer: 'wrong-orbit-for-use',
      correction:
        'Geostationary suits fixed-target uses like TV and wide weather imaging. Low Earth orbit suits high resolution imaging, GPS components and crewed missions that need to be close to Earth.',
      reExplanation:
        'From 36 000 km a camera cannot resolve a UK field, but it can see the whole disc of Europe at once for weather. From 400 km a camera resolves buildings, but it only passes overhead for a few minutes at a time, so it cannot broadcast TV to a fixed dish. Match the orbit to the job.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, P8.1, candidates confused the orbital period of the ISS with the daily rotation of Earth.
    {
      id: 'psa-mis-iss-24h',
      description:
        'Believing the ISS orbits Earth once every 24 hours, the same as a geostationary satellite.',
      triggerAnswer: 'iss-24-hours',
      correction:
        'The ISS in low Earth orbit completes one orbit in about 90 minutes, so it laps Earth about 16 times per day. Only geostationary satellites have a 24 hour period.',
      reExplanation:
        'At 400 km the orbital speed is about 7.7 km/s, enough to circle Earth in roughly an hour and a half. On a clear pass the ISS crosses the UK sky in about six minutes. The 24 hour period belongs to geostationary slots at 36 000 km, which is ninety times higher than the ISS.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceSatellitesZoneNodes = [spaceSatellites]
