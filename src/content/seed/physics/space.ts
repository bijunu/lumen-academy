import type { SkillNode, Zone } from '@/types/content'

const SOLAR_SYSTEM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">The Solar System: 8 planets in order from the Sun</text>

    <!-- Sun on the left -->
    <circle cx="60" cy="200" r="32" fill="currentColor" />
    <text x="60" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>
    <text x="60" y="260" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">a star</text>

    <!-- Mercury -->
    <circle cx="125" cy="200" r="6" fill="currentColor" />
    <text x="125" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mercury</text>
    <!-- Venus -->
    <circle cx="170" cy="200" r="9" fill="currentColor" />
    <text x="170" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Venus</text>
    <!-- Earth -->
    <circle cx="220" cy="200" r="10" fill="currentColor" />
    <text x="220" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth</text>
    <!-- Mars -->
    <circle cx="270" cy="200" r="7" fill="currentColor" />
    <text x="270" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mars</text>

    <!-- Asteroid belt (a band of dots) -->
    <circle cx="305" cy="195" r="1.5" fill="currentColor" />
    <circle cx="315" cy="205" r="1.5" fill="currentColor" />
    <circle cx="325" cy="198" r="1.5" fill="currentColor" />
    <circle cx="335" cy="210" r="1.5" fill="currentColor" />
    <circle cx="345" cy="200" r="1.5" fill="currentColor" />
    <circle cx="355" cy="194" r="1.5" fill="currentColor" />
    <circle cx="365" cy="206" r="1.5" fill="currentColor" />
    <text x="335" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">asteroid belt</text>

    <!-- Jupiter -->
    <circle cx="430" cy="200" r="22" fill="currentColor" />
    <text x="430" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Jupiter</text>
    <!-- Saturn -->
    <circle cx="510" cy="200" r="18" fill="currentColor" />
    <ellipse cx="510" cy="200" rx="28" ry="6" stroke-width="2" />
    <text x="510" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Saturn</text>
    <!-- Uranus -->
    <circle cx="600" cy="200" r="13" fill="currentColor" />
    <text x="600" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Uranus</text>
    <!-- Neptune -->
    <circle cx="680" cy="200" r="13" fill="currentColor" />
    <text x="680" y="180" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Neptune</text>

    <!-- Inner / outer divider -->
    <line x1="290" y1="100" x2="290" y2="300" stroke-dasharray="4,4" stroke-width="1.5" />
    <text x="180" y="320" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">inner rocky</text>
    <text x="550" y="320" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">outer gas-giant</text>

    <!-- Pluto outside the planets, marked as dwarf -->
    <circle cx="730" cy="345" r="3" fill="currentColor" />
    <text x="730" y="370" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Pluto: dwarf planet</text>
  </g>
`

const PLANET_SIZES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Inner rocky planets vs outer gas giants</text>

    <!-- Inner row -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Inner: small and rocky</text>
    <circle cx="80" cy="160" r="9" fill="currentColor" />
    <text x="80" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mercury</text>
    <circle cx="160" cy="160" r="14" fill="currentColor" />
    <text x="160" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Venus</text>
    <circle cx="240" cy="160" r="15" fill="currentColor" />
    <text x="240" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth</text>
    <circle cx="320" cy="160" r="11" fill="currentColor" />
    <text x="320" y="195" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mars</text>

    <!-- Outer row -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Outer: large gas giants (and ice giants)</text>
    <circle cx="450" cy="220" r="40" fill="currentColor" />
    <text x="450" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Jupiter</text>
    <circle cx="555" cy="220" r="34" fill="currentColor" />
    <ellipse cx="555" cy="220" rx="50" ry="8" stroke-width="2" />
    <text x="555" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Saturn</text>
    <circle cx="660" cy="220" r="22" fill="currentColor" />
    <text x="660" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Uranus</text>
    <circle cx="730" cy="220" r="22" fill="currentColor" />
    <text x="730" y="280" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Neptune</text>

    <text x="400" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sizes shown roughly to scale relative to each other; not to scale with the Sun.</text>
  </g>
`

const UK_SPACE_CONTEXTS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">UK contexts: Greenwich, the UK Space Agency, the ISS</text>

    <!-- Royal Greenwich Observatory -->
    <rect x="60" y="120" width="160" height="100" />
    <line x1="60" y1="120" x2="140" y2="80" />
    <line x1="220" y1="120" x2="140" y2="80" />
    <circle cx="140" cy="100" r="6" fill="currentColor" />
    <text x="140" y="150" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Royal Greenwich</text>
    <text x="140" y="168" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Observatory</text>
    <text x="140" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">at 0° longitude</text>
    <text x="140" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">where UK astronomy</text>
    <text x="140" y="258" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">tracks the planets</text>

    <!-- UK Space Agency -->
    <rect x="320" y="120" width="160" height="100" />
    <text x="400" y="160" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">UK Space Agency</text>
    <text x="400" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">UK government body</text>
    <text x="400" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">funds space science</text>
    <text x="400" y="258" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">and missions</text>

    <!-- ISS with astronaut -->
    <rect x="580" y="120" width="160" height="100" />
    <line x1="600" y1="160" x2="720" y2="160" stroke-width="3" />
    <rect x="640" y="150" width="40" height="20" fill="currentColor" />
    <line x1="600" y1="155" x2="600" y2="165" stroke-width="3" />
    <line x1="720" y1="155" x2="720" y2="165" stroke-width="3" />
    <text x="660" y="190" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">ISS</text>
    <text x="660" y="245" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Tim Peake (UK)</text>
    <text x="660" y="258" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">crewed it 2015-16</text>
  </g>
`

export const spaceSolarSystem: SkillNode = {
  id: 'physics-space-solar-system',
  title: 'The Solar System',
  description:
    'Name the eight planets of the Solar System in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Tell the inner rocky planets (Mercury, Venus, Earth, Mars) apart from the outer gas giants (Jupiter, Saturn, Uranus, Neptune). The asteroid belt sits between Mars and Jupiter. Pluto was reclassified by the IAU in 2006 as a dwarf planet, not a planet. UK contexts include the Royal Greenwich Observatory at 0° longitude, the UK Space Agency, and Tim Peake on the International Space Station (Principia mission, 2015-16). Year 7 keeps it qualitative; orbital-period maths is for GCSE.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'core',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Our sun as a star, other stars in our galaxy, other galaxies. Gravity force, weight = mass x gravitational field strength (g), on Earth g = 10 N/kg, different on other planets and stars; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only). The light year as a unit of astronomical distance.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; the life cycle of a star (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.1-8.3 the solar system, planets, dwarf planets and moons (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; structure and scale of our solar system (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'ss-scene-overview',
      title: 'The Solar System: Eight Planets in Order',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk out from the Sun: Mercury, Venus, Earth, Mars, the asteroid belt, Jupiter, Saturn, Uranus, Neptune.',
      data: {
        viewBox: '0 0 800 400',
        svg: SOLAR_SYSTEM_SVG,
        hotspots: [
          {
            id: 'ss-o-sun',
            x: 8,
            y: 50,
            label: 'The Sun (a star)',
            description:
              'The Sun is a star at the centre of the Solar System. It is not a planet. The eight planets all orbit round it, held in by gravity.',
          },
          {
            id: 'ss-o-mercury',
            x: 16,
            y: 50,
            label: 'Mercury',
            description:
              'Mercury is the closest planet to the Sun. It is small, rocky, and has almost no atmosphere. A year on Mercury (one orbit of the Sun) takes 88 Earth-days.',
          },
          {
            id: 'ss-o-venus',
            x: 21,
            y: 50,
            label: 'Venus',
            description:
              'Venus is the second planet. It is rocky, similar in size to Earth, but with a thick carbon dioxide atmosphere that traps heat. Surface temperatures are hotter than Mercury\'s.',
          },
          {
            id: 'ss-o-earth',
            x: 28,
            y: 50,
            label: 'Earth',
            description:
              'Earth is the third planet from the Sun. It has liquid water on its surface and a single natural satellite, the Moon. Earth\'s gravitational field strength is about 10 N/kg.',
          },
          {
            id: 'ss-o-mars',
            x: 34,
            y: 50,
            label: 'Mars',
            description:
              'Mars is the fourth planet, the last of the inner rocky planets. It has the tallest known mountain in the Solar System (Olympus Mons) and is the focus of UK Space Agency robotic missions.',
          },
          {
            id: 'ss-o-belt',
            x: 42,
            y: 60,
            label: 'Asteroid belt',
            description:
              'A ring of small rocky bodies orbits the Sun between Mars and Jupiter. Most asteroids are small (under 100 km across); the largest, Ceres, is classed as a dwarf planet.',
          },
          {
            id: 'ss-o-jupiter',
            x: 54,
            y: 50,
            label: 'Jupiter',
            description:
              'Jupiter is the fifth planet and the biggest in the Solar System. It is a gas giant, mostly hydrogen and helium. Its Great Red Spot is a storm bigger than Earth.',
          },
          {
            id: 'ss-o-saturn',
            x: 64,
            y: 50,
            label: 'Saturn',
            description:
              'Saturn is the sixth planet. It is a gas giant with a striking ring system made mostly of ice and rock chunks. It is much less dense than water.',
          },
          {
            id: 'ss-o-uranus',
            x: 75,
            y: 50,
            label: 'Uranus',
            description:
              'Uranus is the seventh planet. It is an ice giant (water, ammonia, and methane ices around a rocky core). It tips on its side, so it rolls round the Sun rather than spinning upright.',
          },
          {
            id: 'ss-o-neptune',
            x: 85,
            y: 50,
            label: 'Neptune',
            description:
              'Neptune is the eighth planet, an ice giant similar to Uranus. It is the furthest planet from the Sun. The next-known body, Pluto, was reclassified as a dwarf planet in 2006.',
          },
          {
            id: 'ss-o-pluto',
            x: 91,
            y: 88,
            label: 'Pluto: dwarf planet',
            description:
              'Pluto used to be called the ninth planet. In 2006 the International Astronomical Union (IAU) reclassified it as a dwarf planet because it has not "cleared its orbit" of similar bodies. It is in the Kuiper belt, beyond Neptune.',
          },
        ],
      },
    },
    {
      id: 'ss-scene-rocky-vs-gas',
      title: 'Inner Rocky vs Outer Gas Giants',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the inner rocky planets with the outer gas giants and ice giants.',
      data: {
        viewBox: '0 0 800 400',
        svg: PLANET_SIZES_SVG,
        hotspots: [
          {
            id: 'ss-r-inner',
            x: 25,
            y: 25,
            label: 'Inner rocky planets',
            description:
              'Mercury, Venus, Earth, and Mars are the inner planets. They are small, made mostly of rock and metal, and have solid surfaces. Earth and Mars have thin atmospheres; Mercury has almost none.',
          },
          {
            id: 'ss-r-outer',
            x: 75,
            y: 25,
            label: 'Outer gas and ice giants',
            description:
              'Jupiter and Saturn are gas giants made mostly of hydrogen and helium. Uranus and Neptune are ice giants with thick layers of water, ammonia, and methane ices. All four are far bigger than Earth.',
          },
          {
            id: 'ss-r-jupiter',
            x: 56,
            y: 70,
            label: 'Jupiter is the biggest',
            description:
              'Jupiter is the biggest planet in the Solar System. You could fit more than 1300 Earths inside it by volume. Even so, the Sun is far bigger still.',
          },
          {
            id: 'ss-r-mercury',
            x: 10,
            y: 50,
            label: 'Mercury is the smallest',
            description:
              'Mercury is the smallest of the eight planets. Even Earth\'s Moon is bigger than some dwarf planets, but smaller than Mercury.',
          },
        ],
      },
    },
    {
      id: 'ss-scene-uk-context',
      title: 'UK Astronomy: Greenwich, the UK Space Agency, and Tim Peake',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see where UK astronomy and space exploration sit in the Solar System story.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_SPACE_CONTEXTS_SVG,
        hotspots: [
          {
            id: 'ss-u-greenwich',
            x: 18,
            y: 50,
            label: 'Royal Greenwich Observatory',
            description:
              'The Royal Greenwich Observatory in London sits on the Prime Meridian (0° longitude). It has tracked the positions of the planets, the Moon, and the stars for centuries, and is now part of the National Maritime Museum.',
          },
          {
            id: 'ss-u-ukspace',
            x: 50,
            y: 50,
            label: 'UK Space Agency',
            description:
              'The UK Space Agency is the UK government body that funds British space science and missions, including instruments on Mars rovers and Earth-observing satellites. Its headquarters are in Swindon.',
          },
          {
            id: 'ss-u-iss',
            x: 82,
            y: 50,
            label: 'Tim Peake on the ISS',
            description:
              'British astronaut Tim Peake spent six months on the International Space Station between December 2015 and June 2016 on his Principia mission. The ISS orbits Earth about 400 km up and is the only long-term crewed station in space.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'ss-worked-1',
      title: 'Naming the eight planets in order from the Sun',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in a Sevenoaks school is asked to list the eight planets of the Solar System, in order, starting closest to the Sun.',
        },
        {
          explanation:
            'Recall the inner rocky planets first. Closest to the Sun are Mercury, then Venus, then Earth, then Mars. These four are small, rocky, and have solid surfaces.',
          maths: '1. Mercury, 2. Venus, 3. Earth, 4. Mars',
        },
        {
          explanation:
            'Place the asteroid belt. Between Mars and Jupiter there is a belt of asteroids, mostly small rocky bodies. The belt is not a planet, but a useful divider between rocky and gas giant planets.',
        },
        {
          explanation:
            'List the outer gas and ice giants. Beyond the belt come Jupiter, then Saturn (with its rings), then Uranus, then Neptune. These four are far bigger than Earth.',
          maths: '5. Jupiter, 6. Saturn, 7. Uranus, 8. Neptune',
        },
        {
          explanation:
            'Check Pluto. Pluto used to be called the ninth planet, but the IAU reclassified it as a dwarf planet in 2006. So the answer is eight planets, not nine.',
        },
        {
          explanation:
            'A memory hook: "My Very Easy Method Just Speeds Up Names" gives M-V-E-M-J-S-U-N. Read it in order and you have all eight planets.',
        },
      ],
    },
    {
      id: 'ss-worked-2',
      title: 'Why Pluto is a dwarf planet, not a planet',
      steps: [
        {
          explanation:
            'Set the scene. A pupil reads an old book that calls Pluto "the ninth planet" and asks the teacher whether the book is right.',
        },
        {
          explanation:
            'Recall the IAU 2006 decision. The International Astronomical Union met in Prague in 2006 and agreed three rules a body must meet to be a planet:',
          maths: '1) orbits the Sun;  2) is round (its own gravity has shaped it);  3) has cleared its orbit of similar-sized bodies',
        },
        {
          explanation:
            'Check Pluto against the rules. Pluto orbits the Sun (rule 1, pass). It is roughly round (rule 2, pass). But Pluto shares its orbit with many other Kuiper-belt bodies (rule 3, fail).',
        },
        {
          explanation:
            'State the conclusion. Because Pluto fails rule 3, it does not count as a planet. It is now classed as a dwarf planet, along with Ceres (in the asteroid belt), Haumea, Makemake, and Eris.',
          maths: 'Pluto: dwarf planet, not a planet (since 2006)',
        },
        {
          explanation:
            'Update the count. The Solar System has eight planets, not nine. The book is out of date; this is a real example of how science updates when the rules are sharpened.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'ss-q1',
      type: 'multiple-choice',
      stem: 'Which is the closest planet to the Sun?',
      tier: 'core',
      options: [
        'Earth',
        'Venus',
        'Mercury',
        'Mars',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Use the order: Mercury, Venus, Earth, Mars (the inner rocky planets).',
    },
    {
      id: 'ss-q2',
      type: 'multiple-choice',
      stem: 'Which is the furthest planet from the Sun?',
      tier: 'core',
      options: [
        'Pluto',
        'Saturn',
        'Uranus',
        'Neptune',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'ss-mis-pluto-as-planet',
      hint: 'Pluto is no longer counted as a planet. Of the eight planets, Neptune is the furthest.',
    },
    {
      id: 'ss-q3',
      type: 'numeric-entry',
      stem: 'How many planets are there in the Solar System, using the current IAU definition (with Pluto reclassified in 2006)?',
      tier: 'core',
      correctAnswer: 8,
      unit: 'planets',
      xpValue: 10,
      misconceptionId: 'ss-mis-pluto-as-planet',
      hint: 'Four inner rocky planets plus four outer gas and ice giants.',
    },
    {
      id: 'ss-q4',
      type: 'multiple-choice',
      stem: 'Which group does Earth belong to?',
      tier: 'core',
      options: [
        'Inner rocky planets, with Mercury, Venus, and Mars.',
        'Outer gas giants, with Jupiter and Saturn.',
        'Outer ice giants, with Uranus and Neptune.',
        'Dwarf planets, with Pluto and Ceres.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ss-mis-rocky-vs-gas',
      hint: 'Earth has a solid rocky surface and is one of the four inner planets.',
    },
    {
      id: 'ss-q5',
      type: 'multiple-choice',
      stem: 'Where is the asteroid belt in the Solar System?',
      tier: 'core',
      options: [
        'Between Earth and Mars.',
        'Between Mars and Jupiter.',
        'Between Saturn and Uranus.',
        'Beyond Neptune.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'ss-mis-asteroid-belt-elsewhere',
      hint: 'The belt sits between the inner rocky planets and the outer gas giants.',
    },
    {
      id: 'ss-q6',
      type: 'multiple-choice',
      stem: 'Which is the biggest planet in the Solar System?',
      tier: 'core',
      options: [
        'Earth',
        'Saturn',
        'Jupiter',
        'The Sun (a planet).',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'ss-mis-sun-as-planet',
      hint: 'The Sun is a star, not a planet. Of the eight planets, the largest by volume is Jupiter.',
    },
    {
      id: 'ss-q7',
      type: 'multiple-choice',
      stem: 'Which body is Earth\'s natural satellite?',
      tier: 'core',
      options: [
        'The Moon.',
        'The Sun.',
        'Mars.',
        'The International Space Station.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'ss-mis-moon-as-planet',
      hint: 'A natural satellite is a moon. The ISS is a crewed station, not a natural body.',
    },
    {
      id: 'ss-q8',
      type: 'spot-misconception',
      stem: 'Sam writes, "Pluto is the ninth planet of the Solar System." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. Pluto is still classed as the ninth planet.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. The IAU reclassified Pluto as a dwarf planet in 2006 because it has not cleared its orbit. The Solar System has eight planets, not nine.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'ss-mis-pluto-as-planet',
    },
    {
      id: 'ss-q9',
      type: 'drag-order',
      stem: 'Order the eight planets from the closest to the Sun to the furthest.',
      tier: 'core',
      items: [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
      ],
      correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
      xpValue: 15,
      misconceptionId: 'ss-mis-order-mixed',
      hint: 'Memory hook: "My Very Easy Method Just Speeds Up Names" gives M-V-E-M-J-S-U-N.',
    },
    {
      id: 'ss-q10',
      type: 'labelled-image',
      stem: 'Place each planet name on the right marker in the diagram of the Solar System (Sun on the left, planets in order outward).',
      tier: 'challenge',
      viewBox: '0 0 800 400',
      svg: SOLAR_SYSTEM_SVG,
      hotspots: [
        { id: 'ss-q10-h1', x: 16, y: 50, correctLabel: 'Mercury' },
        { id: 'ss-q10-h2', x: 21, y: 50, correctLabel: 'Venus' },
        { id: 'ss-q10-h3', x: 28, y: 50, correctLabel: 'Earth' },
        { id: 'ss-q10-h4', x: 34, y: 50, correctLabel: 'Mars' },
        { id: 'ss-q10-h5', x: 54, y: 50, correctLabel: 'Jupiter' },
        { id: 'ss-q10-h6', x: 64, y: 50, correctLabel: 'Saturn' },
        { id: 'ss-q10-h7', x: 75, y: 50, correctLabel: 'Uranus' },
        { id: 'ss-q10-h8', x: 85, y: 50, correctLabel: 'Neptune' },
      ],
      labels: [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
        'Pluto',
        'The Moon',
      ],
      xpValue: 15,
      misconceptionId: 'ss-mis-order-mixed',
      hint: 'Pluto and the Moon are not planets. Use the M-V-E-M-J-S-U-N order.',
    },
    {
      id: 'ss-q11',
      type: 'multiple-choice',
      stem: 'Which row best matches the four inner planets and the four outer planets?',
      tier: 'confident',
      options: [
        'Inner: Mercury, Venus, Earth, Mars. Outer: Jupiter, Saturn, Uranus, Neptune.',
        'Inner: Mercury, Venus, Earth, Jupiter. Outer: Mars, Saturn, Uranus, Neptune.',
        'Inner: Mercury, Earth, Mars, Pluto. Outer: Venus, Jupiter, Saturn, Neptune.',
        'Inner: Earth, Venus, Mars, Saturn. Outer: Mercury, Jupiter, Uranus, Neptune.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'ss-mis-rocky-vs-gas',
      hint: 'Rocky planets are the four closest to the Sun. Gas and ice giants are the four further out.',
    },
    {
      id: 'ss-q12',
      type: 'multiple-choice',
      stem: 'Which sentence about the Sun is correct at Year 7 level?',
      tier: 'confident',
      options: [
        'The Sun is one of the eight planets, the largest one.',
        'The Sun is a moon of Earth.',
        'The Sun is a star at the centre of the Solar System; the planets orbit it under gravity.',
        'The Sun is a galaxy made of many small stars.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'ss-mis-sun-as-planet',
      hint: 'A star produces its own light; a planet does not. A galaxy contains many stars; the Sun is a single one.',
    },
    {
      id: 'ss-q13',
      type: 'spot-misconception',
      stem: 'Theo writes, "The Sun and the planets all orbit the Earth, because the Sun rises and sets each day." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. The Sun rises in the east, so it must be orbiting Earth.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. The planets (and Earth) orbit the Sun. The day-night sky pattern comes from Earth spinning on its axis once every 24 hours, not from the Sun moving round Earth.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'ss-mis-geocentric',
    },
    {
      id: 'ss-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why Pluto is no longer called a planet.',
      tier: 'confident',
      steps: [
        'Recall the IAU 2006 rules: a planet must orbit the Sun, be round, and have cleared its orbit of similar bodies.',
        'Check Pluto against rule 1: yes, Pluto orbits the Sun.',
        'Check Pluto against rule 2: yes, Pluto is roughly round.',
        null,
        'State the result: Pluto fails rule 3, so it is now classed as a dwarf planet, not a planet.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Check Pluto against rule 3: no, Pluto shares its orbit with many other Kuiper-belt bodies, so it has not cleared its orbit.',
      xpValue: 15,
    },
    {
      id: 'ss-q15',
      type: 'numeric-entry',
      stem: 'Tim Peake crewed the International Space Station from December 2015 to June 2016 on the Principia mission. The ISS sits in low Earth orbit. To the nearest hundred kilometres, what is its typical altitude above the Earth\'s surface?',
      tier: 'confident',
      correctAnswer: 400,
      unit: 'km',
      tolerance: 50,
      xpValue: 15,
      hint: 'The ISS orbits at about 400 km up, far below the Moon (which is about 384 000 km away).',
    },
    {
      id: 'ss-q16',
      type: 'multiple-choice',
      stem: 'The Royal Greenwich Observatory in London sits on the line of 0° longitude. Why is this useful for tracking the planets?',
      tier: 'confident',
      options: [
        'It is on the equator, so the Sun is always overhead.',
        'It is on a fixed reference line, so positions of stars and planets in the sky can be recorded against the same starting longitude over the centuries.',
        'It is the closest UK city to space.',
        'It is the only place in the UK where stars can be seen.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'A reference line lets different observatories all describe a planet\'s position the same way over time.',
    },
    {
      id: 'ss-q17',
      type: 'data-extraction',
      stem: 'A textbook table lists planets and their main material: "Mercury - rocky; Venus - rocky; Earth - rocky; Mars - rocky; Jupiter - gas; Saturn - gas; Uranus - ice; Neptune - ice." How many of the eight planets are rocky?',
      tier: 'confident',
      dataSource:
        'Mercury - rocky. Venus - rocky. Earth - rocky. Mars - rocky. Jupiter - gas. Saturn - gas. Uranus - ice. Neptune - ice.',
      correctAnswer: '4',
      xpValue: 15,
      hint: 'Count the rows that say "rocky".',
    },
    {
      id: 'ss-q18',
      type: 'multiple-choice',
      stem: 'A pupil at the Royal Observatory in Greenwich points to a small body in the Kuiper belt and says, "That used to be the ninth planet." Which body are they pointing to, and what is it now?',
      tier: 'challenge',
      options: [
        'Ceres, now the eighth planet.',
        'Pluto, now classed as a dwarf planet by the IAU (2006).',
        'Halley\'s Comet, now classed as a moon of Neptune.',
        'Eris, now classed as a star.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'ss-mis-pluto-as-planet',
      hint: 'It was once called the ninth planet but was reclassified in 2006.',
    },
    {
      id: 'ss-q19',
      type: 'numeric-entry',
      stem: 'A pupil reads in a UK Space Agency leaflet that "more than 1300 Earths could fit inside Jupiter by volume". Use that figure: roughly how many Earths fit inside Jupiter?',
      tier: 'challenge',
      correctAnswer: 1300,
      unit: 'Earths',
      tolerance: 50,
      xpValue: 20,
      misconceptionId: 'ss-mis-planets-same-size',
      hint: 'The leaflet gives the number directly: more than 1300.',
    },
    {
      id: 'ss-q20',
      type: 'free-text',
      stem: 'A pupil at a UK Space Agency open day in Swindon asks a scientist whether Pluto is a planet. In two or three sentences, write a Year 7 reply that names the IAU 2006 reclassification, the rule Pluto failed (the "cleared its orbit" rule), and the current count of planets in the Solar System.',
      tier: 'challenge',
      sampleAnswer:
        'Pluto used to be called the ninth planet, but in 2006 the International Astronomical Union (IAU) agreed a new definition. Under that definition a planet must orbit the Sun, be roughly round, and have cleared its orbit of other similar bodies; Pluto fails the last rule, because it shares its orbit with many other Kuiper-belt bodies. So Pluto is now classed as a dwarf planet, and the Solar System has eight planets, not nine.',
      keywords: ['IAU', '2006', 'cleared its orbit', 'dwarf planet', 'eight'],
      xpValue: 20,
      misconceptionId: 'ss-mis-pluto-as-planet',
    },
    {
      id: 'ss-q21',
      type: 'numeric-entry',
      stem: 'A pupil reads that the Earth is about 150 million km from the Sun, and Jupiter is about 5 times further from the Sun than Earth. Roughly how far is Jupiter from the Sun, in million km?',
      tier: 'challenge',
      correctAnswer: 750,
      unit: 'million km',
      tolerance: 25,
      xpValue: 20,
      hint: '5 × 150 million km = the answer in millions of km.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates listing nine planets including Pluto
    {
      id: 'ss-mis-pluto-as-planet',
      description:
        'Naming Pluto as the ninth planet of the Solar System, missing the IAU 2006 reclassification.',
      triggerAnswer: 'pluto-as-planet',
      correction:
        'Pluto was reclassified as a dwarf planet by the IAU in 2006 because it has not cleared its orbit. The Solar System has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
      reExplanation:
        'Pluto orbits the Sun and is roughly round, but it shares its orbit with many other Kuiper-belt bodies. The IAU definition has three rules and Pluto fails the third one. Older books still call Pluto a planet; that is now out of date.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on planet order
    {
      id: 'ss-mis-order-mixed',
      description:
        'Getting the order of the planets wrong, especially swapping Mars and Jupiter, or putting Saturn before Jupiter.',
      triggerAnswer: 'order-mixed',
      correction:
        'The order from the Sun is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Memory hook: "My Very Easy Method Just Speeds Up Names" (M-V-E-M-J-S-U-N).',
      reExplanation:
        'A quick check: Earth is the third planet, and the asteroid belt sits between Mars and Jupiter. Once you have Mars in slot 4 and Jupiter in slot 5, the rest follow as Saturn, Uranus, Neptune.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/2F, candidates placing the asteroid belt between Earth and Mars
    {
      id: 'ss-mis-asteroid-belt-elsewhere',
      description:
        'Placing the asteroid belt between Earth and Mars (or beyond Saturn), rather than between Mars and Jupiter.',
      triggerAnswer: 'asteroid-belt-elsewhere',
      correction:
        'The asteroid belt sits between Mars and Jupiter. It separates the inner rocky planets from the outer gas giants.',
      reExplanation:
        'A useful picture: walk out from the Sun past Mercury, Venus, Earth, Mars, then a band of small rocky bodies (the belt), then Jupiter. The belt forms a clear divider between the inner four and the outer four.',
    },
    // Source: IOPSpark "Earth in space" guidance on rocky vs gas planet groupings
    {
      id: 'ss-mis-rocky-vs-gas',
      description:
        'Mixing up rocky and gas-giant planets. Calling Jupiter rocky, or calling Earth a gas planet.',
      triggerAnswer: 'rocky-vs-gas',
      correction:
        'The four inner planets (Mercury, Venus, Earth, Mars) are rocky. The four outer planets (Jupiter, Saturn, Uranus, Neptune) are gas giants or ice giants. There is no rocky planet beyond Mars and no gas giant inside the asteroid belt.',
      reExplanation:
        'A quick check: rocky planets are small and close to the Sun; gas and ice giants are large and far out. Earth has a solid surface you can stand on; Jupiter has no solid surface to land on at all. The asteroid belt is the divider.',
    },
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates calling the Sun a planet
    {
      id: 'ss-mis-sun-as-planet',
      description:
        'Treating the Sun as a planet (often the largest one) rather than as a star at the centre of the Solar System.',
      triggerAnswer: 'sun-as-planet',
      correction:
        'The Sun is a star, not a planet. It produces its own light and heat. The eight planets all orbit the Sun under gravity.',
      reExplanation:
        'A planet does not produce its own light; it shines by reflecting sunlight. A star, like the Sun, makes its own light through nuclear reactions in its core. Counting the Sun as a planet would also break the eight-planet count.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates calling the Moon a planet
    {
      id: 'ss-mis-moon-as-planet',
      description:
        'Treating the Moon as a planet, rather than as a natural satellite (a moon) of Earth.',
      triggerAnswer: 'moon-as-planet',
      correction:
        'The Moon is a natural satellite of Earth. It orbits Earth, not the Sun directly. Planets orbit the Sun; moons orbit a planet.',
      reExplanation:
        'A useful test: which body does it orbit? The Moon orbits Earth (about once every 27 days), so it is a moon, not a planet. Earth in turn orbits the Sun (once a year), so Earth is a planet.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on the geocentric model
    {
      id: 'ss-mis-geocentric',
      description:
        'Believing the Sun and other planets orbit the Earth, often because the Sun rises and sets each day in the sky.',
      triggerAnswer: 'geocentric',
      correction:
        'Earth and the other seven planets orbit the Sun. The day-night cycle comes from Earth spinning on its axis once every 24 hours, not from the Sun moving round Earth.',
      reExplanation:
        'The geocentric (Earth-centred) model was the standard view in ancient times, but careful observations from the 1500s onwards (Copernicus, Galileo, Kepler) showed the heliocentric (Sun-centred) model fits the data far better. Modern space probes have confirmed it directly.',
    },
    // Source: IOPSpark "Earth in space" guidance on planet sizes drawn to scale
    {
      id: 'ss-mis-planets-same-size',
      description:
        'Believing the planets are all roughly the same size, often because textbook diagrams squash them onto one row.',
      triggerAnswer: 'planets-same-size',
      correction:
        'Planet sizes range hugely. Jupiter is about 11 times wider than Earth, and over 1300 Earths could fit inside Jupiter by volume. Mercury is smaller than Earth.',
      reExplanation:
        'A scale check: if Earth is the size of a 5p coin, Jupiter is the size of a saucer, and Mercury is smaller than a fingernail. Most diagrams in school books are not drawn to scale, which can hide this difference.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceZoneNodes = [spaceSolarSystem]

export const spaceZone: Zone = {
  id: 'physics-space',
  name: 'Space',
  realm: 'mechanica',
  nodeIds: spaceZoneNodes.map(n => n.id),
}
