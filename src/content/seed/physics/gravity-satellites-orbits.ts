import type { SkillNode } from '@/types/content'

const CANNONBALL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="32" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Newton's cannonball: how an orbit happens</text>

    <!-- Earth -->
    <circle cx="400" cy="240" r="90" />
    <text x="400" y="246" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Mountain on top of Earth with cannon -->
    <polygon points="380,150 400,120 420,150" fill="currentColor" stroke="none" />
    <rect x="395" y="118" width="40" height="8" fill="currentColor" />
    <text x="400" y="108" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cannon</text>

    <!-- Path A: slow shot, falls back to ground -->
    <path d="M 435 120 Q 520 150 540 240" stroke-dasharray="4 4" />
    <text x="555" y="220" font-size="12" stroke="none" fill="currentColor">A: slow, falls</text>

    <!-- Path B: faster, hits the ground further round -->
    <path d="M 435 120 Q 600 180 580 320" stroke-dasharray="4 4" />
    <text x="610" y="320" font-size="12" stroke="none" fill="currentColor">B: faster, lands further</text>

    <!-- Path C: just right, full circle (the orbit) -->
    <circle cx="400" cy="240" r="135" stroke-dasharray="2 4" />
    <text x="560" y="120" font-size="12" font-weight="700" stroke="none" fill="currentColor">C: ~7.8 km/s, orbit</text>

    <!-- Gravity arrow showing centripetal pull -->
    <line x1="555" y1="240" x2="500" y2="240" />
    <polygon points="510,233 497,240 510,247" fill="currentColor" stroke="none" />
    <text x="595" y="245" font-size="11" stroke="none" fill="currentColor">gravity pulls in</text>

    <text x="400" y="378" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Sideways motion plus a steady pull inwards = a curved path that wraps round the Earth.</text>
  </g>
`

const ORBIT_TYPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Three orbit types around the Earth</text>

    <!-- Earth -->
    <circle cx="400" cy="210" r="55" />
    <text x="400" y="215" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Low Earth orbit ring (small, just above surface) -->
    <ellipse cx="400" cy="210" rx="80" ry="75" stroke-dasharray="3 3" />
    <circle cx="320" cy="210" r="5" fill="currentColor" />
    <text x="270" y="215" text-anchor="end" font-size="11" stroke="none" fill="currentColor">ISS, Hubble</text>
    <text x="270" y="230" text-anchor="end" font-size="11" stroke="none" fill="currentColor">LEO ~400 km</text>

    <!-- Polar orbit ring (vertical ellipse) -->
    <ellipse cx="400" cy="210" rx="100" ry="135" stroke-dasharray="3 3" />
    <circle cx="400" cy="75" r="5" fill="currentColor" />
    <text x="400" y="62" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">polar ~800 km</text>
    <text x="400" y="367" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">passes over poles (mapping)</text>

    <!-- Geostationary orbit ring (large horizontal) -->
    <ellipse cx="400" cy="210" rx="200" ry="55" stroke-dasharray="3 3" />
    <circle cx="600" cy="210" r="6" fill="currentColor" />
    <text x="615" y="207" font-size="11" stroke="none" fill="currentColor">geostationary</text>
    <text x="615" y="222" font-size="11" stroke="none" fill="currentColor">~36 000 km</text>
    <text x="615" y="237" font-size="11" stroke="none" fill="currentColor">(Sky, weather)</text>

    <!-- Speed and period notes -->
    <text x="65" y="345" font-size="11" stroke="none" fill="currentColor">LEO: ~7.8 km/s, period ~90 min</text>
    <text x="65" y="360" font-size="11" stroke="none" fill="currentColor">Polar: ~7.5 km/s, period ~100 min</text>
    <text x="65" y="375" font-size="11" stroke="none" fill="currentColor">GEO: ~3.1 km/s, period 24 h (locked over equator)</text>
  </g>
`

const NATURAL_ARTIFICIAL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="32" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Natural and artificial satellites</text>

    <!-- Left column: natural satellite (Moon orbiting Earth) -->
    <text x="200" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Natural: the Moon</text>
    <circle cx="200" cy="200" r="50" />
    <text x="200" y="205" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Earth</text>
    <ellipse cx="200" cy="200" rx="115" ry="80" stroke-dasharray="3 3" />
    <circle cx="315" cy="200" r="14" fill="currentColor" />
    <text x="315" y="232" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Moon</text>
    <text x="200" y="315" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mass: about 7.3 x 10^22 kg</text>
    <text x="200" y="330" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Orbit period: ~27.3 days</text>
    <text x="200" y="345" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Average distance: ~384 000 km</text>

    <!-- Divider -->
    <line x1="400" y1="60" x2="400" y2="350" stroke-dasharray="2 4" />

    <!-- Right column: artificial satellites (ISS, Hubble, comms) -->
    <text x="600" y="70" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Artificial: built by people</text>

    <!-- ISS sketch -->
    <rect x="540" y="120" width="40" height="14" fill="currentColor" />
    <rect x="520" y="118" width="20" height="18" fill="currentColor" />
    <rect x="580" y="118" width="20" height="18" fill="currentColor" />
    <text x="560" y="155" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">ISS, ~400 km LEO</text>

    <!-- Hubble sketch -->
    <rect x="620" y="180" width="36" height="14" fill="currentColor" />
    <circle cx="638" cy="180" r="5" fill="currentColor" />
    <text x="638" y="215" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Hubble, ~540 km LEO</text>

    <!-- Communications dish -->
    <path d="M 540 270 Q 560 240 580 270 Z" fill="currentColor" stroke="none" />
    <line x1="560" y1="270" x2="560" y2="295" />
    <text x="560" y="315" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sky TV: GEO, ~36 000 km</text>

    <text x="400" y="378" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Both kinds orbit because of the same pull: gravity from the body they go round.</text>
  </g>
`

export const gravitySatellitesOrbits: SkillNode = {
  id: 'physics-gravity-satellites-orbits',
  title: 'Satellites and Orbits',
  description:
    'A satellite is anything that orbits a bigger body. The Moon is a natural satellite of Earth, and craft built by people (ISS, Hubble, Sky TV satellites, weather satellites) are artificial satellites. Orbits happen because gravity pulls the satellite inwards (towards the Earth) while it moves sideways fast enough that it keeps falling around the Earth rather than back down to the surface. Learn the three main orbit types Year 7 should know: low Earth orbit (LEO, around 400 km up, used by the ISS and Hubble), geostationary orbit (around 36 000 km up over the equator, used by TV and many weather satellites), and polar orbit (around 800 km up, used for mapping and Earth resources). No formulas beyond W = m g, but use orbit speeds in km/s and altitudes in km.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      "Gravity force; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); the seasons and the Earth's tilt.",
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; orbital motion, natural and artificial satellites (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.4-8.6 Orbits of moons, planets and satellites (GCSE Physics 1PH0)',
      ocr: 'P8.1 The Earth in space; satellites, orbits and the role of gravity (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gso-scene-cannonball',
      title: "Newton's Cannonball Idea",
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how more sideways speed turns "falling" into "going round".',
      data: {
        viewBox: '0 0 800 400',
        svg: CANNONBALL_SVG,
        hotspots: [
          {
            id: 'gso-cannon-slow',
            x: 70,
            y: 55,
            label: 'A: slow shot, lands nearby',
            description:
              'Fire a cannonball gently from a tall mountain. Gravity pulls it down and it lands not far from the cannon. Same idea as throwing a ball straight out from your hand.',
          },
          {
            id: 'gso-cannon-faster',
            x: 78,
            y: 80,
            label: 'B: faster shot, lands further round',
            description:
              'Fire it harder and it travels further before gravity wins, landing further round the curve of the Earth. The path is longer but still ends on the ground.',
          },
          {
            id: 'gso-cannon-orbit',
            x: 73,
            y: 30,
            label: 'C: ~7.8 km/s, the ball orbits',
            description:
              'Fire it at about 7.8 km/s and the ground keeps curving away beneath it at the same rate it falls. The ball never hits the ground; it keeps falling around the Earth. That is an orbit.',
          },
          {
            id: 'gso-cannon-gravity',
            x: 73,
            y: 60,
            label: 'Gravity is always pulling the satellite in',
            description:
              'Without gravity, the satellite would fly off in a straight line. Gravity bends the straight line into a circle. The pull is always at right angles to the motion, so it changes direction but not speed.',
          },
        ],
      },
    },
    {
      id: 'gso-scene-orbit-types',
      title: 'Three Orbit Types',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare low Earth orbit, polar orbit and geostationary orbit.',
      data: {
        viewBox: '0 0 800 400',
        svg: ORBIT_TYPES_SVG,
        hotspots: [
          {
            id: 'gso-types-leo',
            x: 30,
            y: 55,
            label: 'Low Earth orbit (LEO), about 400 km up',
            description:
              'The closest orbits to the surface. The International Space Station and Hubble live here. Orbit speed is around 7.8 km/s and one trip around the Earth takes about 90 minutes. Used for Earth observation, weather imaging and the crewed station.',
          },
          {
            id: 'gso-types-polar',
            x: 50,
            y: 15,
            label: 'Polar orbit, about 800 km up',
            description:
              'A polar orbit goes over the North and South poles as the Earth turns beneath it. Over a day or two the satellite scans every part of the surface. Used for mapping, Earth resources and weather, including the UK Met Office MetOp data.',
          },
          {
            id: 'gso-types-geo',
            x: 85,
            y: 55,
            label: 'Geostationary orbit, about 36 000 km up',
            description:
              'Far higher up, over the equator, orbiting once every 24 hours. The satellite stays above the same point on the ground, so a Sky TV dish in the UK can be aimed once and left. Also used by many weather satellites that watch a whole hemisphere.',
          },
          {
            id: 'gso-types-speeds',
            x: 22,
            y: 88,
            label: 'Higher orbit means slower speed',
            description:
              'Gravity is weaker further out, so the sideways speed needed to keep falling round drops. LEO is fastest (~7.8 km/s) and GEO is much slower (~3.1 km/s). Speed in km/s, period in minutes for LEO and 24 hours for GEO.',
          },
        ],
      },
    },
    {
      id: 'gso-scene-natural-artificial',
      title: 'Natural and Artificial Satellites',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the difference between a natural satellite and an artificial one.',
      data: {
        viewBox: '0 0 800 400',
        svg: NATURAL_ARTIFICIAL_SVG,
        hotspots: [
          {
            id: 'gso-nat-moon',
            x: 25,
            y: 55,
            label: 'Natural satellite: the Moon',
            description:
              'The Moon is a natural satellite of Earth. It has been there for billions of years, held in orbit by gravity. Average distance from Earth about 384 000 km; one orbit takes 27.3 days. Far older and far bigger than any human craft.',
          },
          {
            id: 'gso-art-iss',
            x: 70,
            y: 33,
            label: 'Artificial: ISS in LEO',
            description:
              'The International Space Station is an artificial satellite about 400 km up. It moves at about 7.8 km/s and circles the Earth roughly every 90 minutes. From the UK you can spot it passing over as a bright dot at dawn or dusk.',
          },
          {
            id: 'gso-art-comms',
            x: 70,
            y: 75,
            label: 'Artificial: Sky TV in GEO',
            description:
              'Communications satellites in geostationary orbit stay locked above the same spot above the equator. A Sky dish on a UK house points to one fixed direction in the sky. Most TV and many weather satellites work this way.',
          },
          {
            id: 'gso-same-gravity',
            x: 50,
            y: 90,
            label: 'Same physics for both',
            description:
              'Whether it is the Moon, the ISS or a TV satellite, the rule is the same: gravity pulls inwards while the object moves sideways fast enough to keep falling around the Earth. The only differences are size, altitude and how the satellite was put up there.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gso-worked-1',
      title: 'Why does a satellite stay in orbit (qualitative)?',
      steps: [
        {
          explanation:
            'Pick out what is happening. A satellite, say the ISS at about 400 km altitude, is moving sideways at about 7.8 km/s. Gravity from the Earth pulls it in towards the centre of the Earth.',
        },
        {
          explanation:
            'Imagine "no gravity" first. With no pull, the satellite would shoot off in a straight line, leaving the Earth behind. So a pull is needed to bend the path.',
        },
        {
          explanation:
            'Now switch gravity back on. Each second, gravity drags the satellite a small distance towards the Earth. But each second, the satellite also moves sideways a long way. The two add up to a curved path that wraps around the Earth.',
        },
        {
          explanation:
            'Match the curving to the Earth. The path curves away from the straight line at just the rate the Earth itself curves underneath. So the satellite is "falling" the whole time, but the ground keeps moving out of the way.',
        },
        {
          explanation:
            'State the answer. The satellite is in orbit because (a) gravity provides a steady pull towards the Earth and (b) it has enough sideways speed that gravity bends its straight path into a circle rather than dragging it back to the surface.',
          maths: 'orbit = sideways motion + inward pull from gravity',
        },
      ],
    },
    {
      id: 'gso-worked-2',
      title: 'Which orbit suits a UK Sky TV satellite, and why?',
      steps: [
        {
          explanation:
            'List the job. The satellite must beam TV to homes across the UK. A roof dish should be aimed once when fitted and never move after that. So the satellite has to stay in the same direction in the sky from the dish.',
        },
        {
          explanation:
            'Rule out LEO. A low Earth orbit satellite (around 400 km up) zooms across the sky every 90 minutes. The dish would have to track it constantly. Not suitable.',
        },
        {
          explanation:
            'Rule out polar. A polar orbit (around 800 km up) also races across the sky and only passes over any one spot a couple of times a day. Great for mapping, no good for fixed TV.',
        },
        {
          explanation:
            'Choose geostationary. An orbit at about 36 000 km above the equator has a period of 24 hours, the same as the Earth turning. So the satellite stays above the same point on the ground. From the UK the dish points to one fixed bearing and elevation.',
        },
        {
          explanation:
            'State the answer. A Sky TV satellite sits in geostationary orbit at about 36 000 km above the equator. The 24-hour period lets the dish stay fixed; LEO and polar would need tracking.',
          maths: 'GEO altitude ~36 000 km, period = 24 h, fixed over a single point on the equator',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gso-q1',
      type: 'multiple-choice',
      stem: 'What is a satellite?',
      tier: 'core',
      options: [
        'Any object that orbits a bigger body, held in by gravity.',
        'Only a TV box on the side of a house.',
        'A rocket on its way up to space, before it reaches orbit.',
        'Any object in space, whether it is orbiting or not.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Think about the Moon and the ISS. What do they have in common?',
    },
    {
      id: 'gso-q2',
      type: 'multiple-choice',
      stem: 'Which force keeps a satellite in orbit around the Earth?',
      tier: 'core',
      options: [
        'Air resistance pushing it in a circle.',
        'A push from rockets that runs the whole time.',
        'Magnetic force from the Earth.',
        'Gravity from the Earth pulling it inwards.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'gso-mis-engines-on-in-orbit',
      hint: 'Most satellites have no engines firing in orbit. What is left over to bend the path?',
    },
    {
      id: 'gso-q3',
      type: 'multiple-choice',
      stem: 'Which of these is a natural satellite of Earth?',
      tier: 'core',
      options: [
        'Hubble Space Telescope.',
        'The International Space Station.',
        'The Moon.',
        'A Sky TV satellite.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gso-mis-natural-vs-artificial',
      hint: 'Natural means it was not built by people. Which one has been there for billions of years?',
    },
    {
      id: 'gso-q4',
      type: 'multiple-choice',
      stem: 'The International Space Station and Hubble both live in which kind of orbit?',
      tier: 'core',
      options: [
        'Geostationary orbit, 36 000 km up.',
        'Low Earth orbit (LEO), about 400 km up.',
        'Polar orbit, just above the surface.',
        'Around the Sun, not the Earth.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Both are close to the Earth and complete a circuit roughly every 90 minutes.',
    },
    {
      id: 'gso-q5',
      type: 'multiple-choice',
      stem: 'Which orbit lets a single Sky TV dish on a UK house stay pointed at one fixed direction in the sky?',
      tier: 'core',
      options: [
        'Polar orbit.',
        'Low Earth orbit.',
        'Geostationary orbit (about 36 000 km above the equator).',
        'A direct orbit around the Moon.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The dish does not move once fitted. So the satellite must look like it stays still relative to the ground.',
    },
    {
      id: 'gso-q6',
      type: 'numeric-entry',
      stem: 'A satellite in low Earth orbit moves at about 7.8 km/s. Roughly how many kilometres does it travel each minute? Give your answer in km, to the nearest km.',
      tier: 'core',
      correctAnswer: 468,
      unit: 'km',
      tolerance: 5,
      xpValue: 10,
      hint: 'Speed multiplied by time. 60 seconds in a minute, so 7.8 x 60.',
    },
    {
      id: 'gso-q7',
      type: 'multiple-choice',
      stem: 'Which sentence about gravity in orbit is correct?',
      tier: 'confident',
      options: [
        'There is no gravity at the height of the ISS, which is why astronauts float.',
        'Gravity is very weak at 400 km up; it has almost run out.',
        'Gravity is still strong at 400 km up. The ISS and everyone inside are falling together around the Earth, which is why they appear weightless.',
        'Gravity only pulls when the satellite is over the equator.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gso-mis-no-gravity-in-orbit',
      hint: 'At 400 km, the value of g drops only by about 10 percent. So gravity is still doing its job.',
    },
    {
      id: 'gso-q8',
      type: 'multiple-choice',
      stem: 'Which job suits a polar orbit best?',
      tier: 'confident',
      options: [
        'Beaming TV to UK homes from one fixed direction.',
        'Mapping the whole surface of the Earth, including the poles, as the planet turns beneath the satellite.',
        'Keeping a clock locked above one city in the UK.',
        'Carrying astronauts to live on the Moon.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'A polar orbit passes over the poles. Over a day or two it scans every part of the surface.',
    },
    {
      id: 'gso-q9',
      type: 'multiple-choice',
      stem: 'A weather satellite needs to watch a whole hemisphere all the time, sending a steady picture back to UK forecasters. Which orbit is the natural choice?',
      tier: 'confident',
      options: [
        'Low Earth orbit, so it can take close-up photos.',
        'Polar orbit, so it can map the poles.',
        'Geostationary orbit, so it stays fixed over the same patch of the Earth.',
        'A solar orbit, so it watches from the Sun.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gso-mis-swap-orbit-roles',
      hint: 'A hemisphere-wide view from one fixed point means the satellite must not move relative to the ground.',
    },
    {
      id: 'gso-q10',
      type: 'numeric-entry',
      stem: 'A geostationary satellite has an orbital period of 24 hours, the same as the Earth turning. How many hours does the satellite take to complete one full orbit?',
      tier: 'confident',
      correctAnswer: 24,
      unit: 'h',
      xpValue: 15,
      hint: 'The whole point is to match the Earth turning. That takes a day.',
    },
    {
      id: 'gso-q11',
      type: 'multiple-choice',
      stem: 'A pupil says, "Gravity in orbit just makes the ISS go faster and faster." Which response is correct?',
      tier: 'challenge',
      options: [
        'They are right; that is why the ISS is speeding up.',
        'Gravity always pulls the ISS inwards, at right angles to its sideways motion. So it changes the direction of motion (bending the path into a circle), not the speed.',
        'Gravity in orbit only pulls upwards.',
        'Gravity is too weak in orbit to do anything.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gso-mis-gravity-speeds-up-orbit',
      hint: 'A pull at right angles to motion changes the direction, not the speed.',
    },
    {
      id: 'gso-q12',
      type: 'numeric-entry',
      stem: 'A geostationary satellite orbits at about 36 000 km altitude. Express this altitude in metres.',
      tier: 'confident',
      correctAnswer: 36000000,
      unit: 'm',
      xpValue: 15,
      hint: '1 km = 1000 m. Multiply.',
    },
    {
      id: 'gso-q13',
      type: 'multiple-choice',
      stem: 'A pupil says, "The Moon is held in orbit by a magnetic force from the Earth." What is the best fix?',
      tier: 'confident',
      options: [
        'Leave the answer; magnetic force is right.',
        'Change "magnetic" to "gravitational". The Moon orbits because of the gravitational pull between the Earth and the Moon.',
        'Change "Moon" to "Sun". The Sun is the one held in orbit.',
        'Change "Earth" to "Mars". The Moon orbits Mars.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gso-mis-magnetic-not-gravity',
      hint: 'Which long-range force is always pulling masses together?',
    },
    {
      id: 'gso-q15',
      type: 'spot-misconception',
      stem: 'Priya says, "Astronauts on the ISS float about because there is no gravity that far from the Earth."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. There is no gravity at 400 km up, so astronauts have nothing pulling them down.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Gravity at 400 km up is still about 90 percent of its surface value. Astronauts appear weightless because they are falling around the Earth at the same rate as the station, so there is nothing pressing them against the floor.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gso-mis-no-gravity-in-orbit',
    },
    {
      id: 'gso-q16',
      type: 'spot-misconception',
      stem: 'Tom says, "The ISS must keep its engines running, otherwise gravity would pull it back to the surface."',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right. Engines fire constantly in orbit to fight gravity.',
          isMisconception: true,
        },
        {
          text: 'Tom is not right. The ISS does not need engines on to stay in orbit. Its sideways speed is large enough that gravity bends its path into a circle around the Earth, instead of dragging it down.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gso-mis-engines-on-in-orbit',
    },
    {
      id: 'gso-q17',
      type: 'drag-order',
      stem: 'Put these orbits in order of altitude, from closest to the Earth at the top to furthest from the Earth at the bottom.',
      tier: 'challenge',
      items: [
        'Geostationary orbit, about 36 000 km above the equator.',
        'Polar orbit, about 800 km up.',
        'Low Earth orbit, about 400 km up.',
        'The Moon, about 384 000 km from the Earth.',
      ],
      correctOrder: [2, 1, 0, 3],
      xpValue: 20,
      hint: 'LEO is closest, then polar, then geostationary, with the Moon by far the furthest.',
    },
    {
      id: 'gso-q18',
      type: 'drag-order',
      stem: 'Put these steps in the right order to explain why a satellite stays in orbit.',
      tier: 'challenge',
      items: [
        'Gravity bends the would-be straight-line path into a curve that follows the surface of the Earth, so the satellite keeps falling around the Earth without hitting the ground.',
        'The satellite is moving sideways at high speed (around 7.8 km/s for LEO).',
        'Each second, the Earth pulls the satellite inwards through a small distance because of gravity.',
        'Without gravity, the satellite would shoot off in a straight line away from the Earth.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      hint: 'Start with the sideways motion, then say what gravity would or would not do, then combine the two.',
    },
    {
      id: 'gso-q19',
      type: 'numeric-entry',
      stem: 'The ISS orbits the Earth roughly every 90 minutes. How many full orbits does it complete in 24 hours?',
      tier: 'challenge',
      correctAnswer: 16,
      unit: 'orbits',
      xpValue: 20,
      hint: 'There are 1440 minutes in 24 hours. Divide by 90.',
    },
    {
      id: 'gso-q20',
      type: 'numeric-entry',
      stem: 'A polar orbit satellite at about 800 km altitude has a period of roughly 100 minutes. Roughly how many full orbits does it complete in one day (24 hours)? Give a whole number.',
      tier: 'challenge',
      correctAnswer: 14,
      unit: 'orbits',
      xpValue: 20,
      hint: 'There are 1440 minutes in a day. Divide by 100, then round down.',
    },
    {
      id: 'gso-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is choosing the right orbit for a satellite that has to take detailed pictures of melting ice over the North Pole.',
      tier: 'challenge',
      steps: [
        'List what the satellite must do: scan the area around the North Pole, with detailed pictures, repeating over many days.',
        'Rule out geostationary orbit: a geostationary satellite sits above the equator, so it cannot get a good view of the poles.',
        null,
        'Compare LEO and polar: a normal LEO does not pass over the poles. A polar orbit at about 800 km does, scanning the whole surface as the Earth turns underneath.',
        'State the choice: a polar orbit at about 800 km altitude. Detailed pictures of the poles, repeating as the Earth turns.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Think about what is left: low Earth orbit (about 400 km, used by the ISS and Hubble) or polar orbit (about 800 km, designed to pass over the poles). Both are close to the Earth, so picture detail is fine.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 2F, candidates often wrote that astronauts on the ISS "have no gravity" rather than "are in free fall together with the station".
    {
      id: 'gso-mis-no-gravity-in-orbit',
      description:
        'Believing there is no gravity at the altitude of the ISS, so astronauts float because gravity has run out.',
      triggerAnswer: 'no-gravity-in-orbit',
      correction:
        'Gravity at 400 km up is still about 90 percent of its surface value. Astronauts float because they fall around the Earth together with the station, not because gravity has gone.',
      reExplanation:
        'At 400 km up, the value of g drops only by about 10 percent compared to the surface, so the Earth still pulls hard on the ISS. Astronauts appear weightless because both they and the station are falling around the Earth at the same rate, so there is nothing pressing them against any floor. Take gravity away and the ISS would simply fly off in a straight line.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/2F, candidates wrote that satellites must keep firing engines in orbit to balance gravity.
    {
      id: 'gso-mis-engines-on-in-orbit',
      description:
        'Thinking a satellite must keep its engines firing in orbit, otherwise gravity would drag it back to Earth.',
      triggerAnswer: 'engines-on-in-orbit',
      correction:
        'A satellite in orbit needs no engines on. Its sideways speed is large enough that gravity bends its straight-line path into a circle around the Earth.',
      reExplanation:
        'A spacecraft uses rockets to get up to orbit speed (around 7.8 km/s for LEO). Once it is moving that fast sideways, gravity bends its path into a circle. The engines can be shut off and the satellite just keeps falling around the Earth. Engines only fire later to nudge the orbit, not to fight gravity.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/01, candidates listed the Moon as an artificial satellite or treated only spacecraft as satellites.
    {
      id: 'gso-mis-natural-vs-artificial',
      description:
        'Mixing up natural and artificial satellites, treating only craft built by people as satellites, or labelling the Moon as artificial.',
      triggerAnswer: 'natural-vs-artificial',
      correction:
        'A satellite is anything that orbits a bigger body. Natural satellites such as the Moon were not built by people. Artificial satellites such as the ISS and Sky TV satellites were.',
      reExplanation:
        'The Moon orbits the Earth and has done so for billions of years; it is a natural satellite. The ISS, Hubble, Sky TV satellites and weather satellites are artificial satellites, put up by people. The physics is the same for both kinds: gravity provides the inward pull and the sideways motion does the rest.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 2F, candidates wrote that gravity in orbit makes satellites "speed up" rather than change direction.
    {
      id: 'gso-mis-gravity-speeds-up-orbit',
      description:
        'Reading gravity in a circular orbit as something that speeds the satellite up, instead of changing the direction of motion.',
      triggerAnswer: 'gravity-speeds-up-orbit',
      correction:
        'In a circular orbit, gravity pulls at right angles to the motion. It changes the direction of the satellite (bending the path) but not its speed.',
      reExplanation:
        'For a satellite in a circular orbit, the force from gravity points to the centre of the Earth. The motion is sideways, so the pull is at right angles to it. A force at right angles to motion only bends the path; it does not speed the object up or slow it down. That is why a satellite in a near-circular orbit keeps the same speed all the way around.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2020, Paper 1PH0/2F, candidates attributed the Moon's orbit to magnetism or to "no force at all" rather than to gravity.
    {
      id: 'gso-mis-magnetic-not-gravity',
      description:
        "Attributing the Moon's orbit (or a satellite's orbit) to a magnetic force from the Earth, rather than to gravity.",
      triggerAnswer: 'magnetic-not-gravity',
      correction:
        'The Moon and all satellites stay in orbit because of gravity, the pull between masses. Magnetism is a different force and does not hold orbits.',
      reExplanation:
        'Gravity acts between any two masses, no matter what they are made of, and grows with mass. The Earth (mass about 6 x 10^24 kg) pulls the Moon strongly, holding it in a steady orbit at about 384 000 km. Magnetism only works on certain materials and is far too weak at that range. So the pairing "Earth and Moon" is gravity, not magnetism.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates picked LEO for TV satellites and geostationary for crewed stations, swapping the orbit roles.
    {
      id: 'gso-mis-swap-orbit-roles',
      description:
        'Swapping the jobs of LEO and geostationary orbits, for example picking LEO for fixed-direction TV or geostationary for the ISS.',
      triggerAnswer: 'swap-orbit-roles',
      correction:
        'LEO (about 400 km) suits crewed stations and close-up work; geostationary (about 36 000 km, 24-hour period) suits fixed-direction TV and hemisphere-wide weather.',
      reExplanation:
        'A geostationary satellite stays above one point on the equator, perfect for a Sky TV dish that never moves. A LEO satellite races across the sky every 90 minutes, so a TV dish would have to track it. The ISS sits in LEO so crews and supplies do not need to climb out to 36 000 km. Match the job to the orbit, not the other way.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravitySatellitesOrbitsZoneNodes = [gravitySatellitesOrbits]
