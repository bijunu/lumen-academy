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

const TILT_SEASONS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Earth's tilted axis causes the seasons (not the distance from the Sun)</text>

    <!-- Sun on the left -->
    <circle cx="80" cy="200" r="34" fill="currentColor" />
    <text x="80" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- N-summer Earth (tilted, N pole towards Sun) -->
    <circle cx="320" cy="200" r="40" />
    <line x1="290" y1="180" x2="350" y2="220" stroke-width="2.5" />
    <line x1="285" y1="175" x2="295" y2="185" stroke-width="2" />
    <line x1="345" y1="215" x2="355" y2="225" stroke-width="2" />
    <text x="276" y="170" text-anchor="end" font-size="11" font-weight="700" stroke="none" fill="currentColor">N pole</text>
    <text x="362" y="232" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">S pole</text>
    <line x1="280" y1="200" x2="360" y2="200" stroke-dasharray="3,3" stroke-width="1" />
    <text x="320" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">N hemisphere summer</text>
    <text x="320" y="288" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">N pole tilted toward Sun</text>
    <text x="320" y="304" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">longer days, more direct sunlight</text>

    <!-- N-winter Earth (tilted, N pole away from Sun) -->
    <circle cx="600" cy="200" r="40" />
    <line x1="570" y1="220" x2="630" y2="180" stroke-width="2.5" />
    <line x1="565" y1="225" x2="575" y2="215" stroke-width="2" />
    <line x1="625" y1="175" x2="635" y2="185" stroke-width="2" />
    <text x="556" y="232" text-anchor="end" font-size="11" font-weight="700" stroke="none" fill="currentColor">N pole</text>
    <text x="642" y="170" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">S pole</text>
    <line x1="560" y1="200" x2="640" y2="200" stroke-dasharray="3,3" stroke-width="1" />
    <text x="600" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">N hemisphere winter</text>
    <text x="600" y="288" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">N pole tilted away from Sun</text>
    <text x="600" y="304" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">shorter days, glancing sunlight</text>

    <!-- Tilt label across both Earths -->
    <text x="460" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">tilt 23.5° relative to vertical</text>
    <text x="460" y="98" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth keeps the same tilt all year as it orbits</text>

    <!-- Note on perihelion -->
    <text x="400" y="350" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth is actually closest to the Sun in early January (N-winter), not in summer.</text>
    <text x="400" y="366" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Tilt, not distance.</text>
  </g>
`

const DAY_NIGHT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Day and night: Earth spins once every 24 hours</text>

    <!-- Sun on left -->
    <circle cx="100" cy="200" r="36" fill="currentColor" />
    <text x="100" y="206" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- Light arrows from Sun -->
    <line x1="140" y1="170" x2="320" y2="170" stroke-width="1.5" />
    <polygon points="312,164 325,170 312,176" fill="currentColor" stroke="none" />
    <line x1="140" y1="200" x2="320" y2="200" stroke-width="1.5" />
    <polygon points="312,194 325,200 312,206" fill="currentColor" stroke="none" />
    <line x1="140" y1="230" x2="320" y2="230" stroke-width="1.5" />
    <polygon points="312,224 325,230 312,236" fill="currentColor" stroke="none" />

    <!-- Earth -->
    <circle cx="500" cy="200" r="80" />
    <!-- Lit half (right side facing Sun is actually left side here since Sun is on left) -->
    <path d="M 500 120 A 80 80 0 0 0 500 280 Z" fill="currentColor" opacity="0.18" />
    <text x="445" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">day</text>
    <text x="555" y="200" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">night</text>

    <!-- Spin arrow on top of Earth -->
    <path d="M 470 110 A 30 30 0 0 1 530 110" stroke-width="2.5" />
    <polygon points="522,104 535,108 525,118" fill="currentColor" stroke="none" />
    <text x="500" y="98" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">spin (24 h)</text>

    <!-- UK marker -->
    <circle cx="455" cy="170" r="5" fill="currentColor" />
    <text x="430" y="160" text-anchor="end" font-size="11" font-weight="700" stroke="none" fill="currentColor">UK</text>
    <text x="500" y="335" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">As Earth spins, the UK moves from the lit half (day) to the dark half (night) and back.</text>
    <text x="500" y="352" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">The Sun does not move round Earth.</text>
  </g>
`

const UK_DAYLIGHT_HOURS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Edinburgh daylight hours: midsummer vs midwinter</text>

    <!-- Bar chart: midsummer 17h, midwinter 7h, max scale 24 -->
    <line x1="160" y1="80" x2="160" y2="320" stroke-width="2" />
    <line x1="160" y1="320" x2="640" y2="320" stroke-width="2" />

    <!-- y-axis ticks -->
    <line x1="155" y1="80" x2="160" y2="80" stroke-width="1.5" />
    <text x="148" y="84" text-anchor="end" font-size="10" stroke="none" fill="currentColor">24 h</text>
    <line x1="155" y1="160" x2="160" y2="160" stroke-width="1.5" />
    <text x="148" y="164" text-anchor="end" font-size="10" stroke="none" fill="currentColor">16 h</text>
    <line x1="155" y1="240" x2="160" y2="240" stroke-width="1.5" />
    <text x="148" y="244" text-anchor="end" font-size="10" stroke="none" fill="currentColor">8 h</text>
    <text x="148" y="324" text-anchor="end" font-size="10" stroke="none" fill="currentColor">0 h</text>

    <!-- Midsummer bar: 17h -> 17/24 of 240 = 170 px tall -->
    <rect x="240" y="150" width="80" height="170" fill="currentColor" opacity="0.3" />
    <text x="280" y="345" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">midsummer</text>
    <text x="280" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">21 June</text>
    <text x="280" y="140" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">~17 h daylight</text>

    <!-- Midwinter bar: 7h -> 7/24 of 240 = 70 px tall -->
    <rect x="440" y="250" width="80" height="70" fill="currentColor" opacity="0.3" />
    <text x="480" y="345" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">midwinter</text>
    <text x="480" y="360" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">21 December</text>
    <text x="480" y="240" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">~7 h daylight</text>

    <!-- Difference label -->
    <text x="400" y="60" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Edinburgh: about 10 hours more daylight at midsummer than at midwinter.</text>
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
      stem: 'Sam writes, "Pluto is the ninth planet of the Solar System."',
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
      stem: 'Theo writes, "The Sun and the planets all orbit the Earth, because the Sun rises and sets each day."',
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

export const spaceDayNightSeasons: SkillNode = {
  id: 'physics-space-day-night-seasons',
  title: 'Day, Night, and the Seasons',
  description:
    'Earth\'s axis is tilted at about 23.5° from vertical relative to its orbital plane. The seasons happen because of that tilt, not because Earth gets closer to or further from the Sun. When the northern hemisphere tilts toward the Sun, the UK has summer (longer days, more direct sunlight). When the northern hemisphere tilts away, the UK has winter. Day and night come from Earth spinning on its own axis once every 24 hours, so the UK turns from the lit half (day) into the shadow (night) and back. UK contexts include Edinburgh midsummer with about 17 hours of daylight versus midwinter with about 7 hours, the British Summer Time clock change in March and October, and the sundial on the Prime Meridian at Greenwich. Year 7 keeps it qualitative; equinox and solstice naming, Coriolis effects, and precession are GCSE+ territory.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'The seasons and the Earth\'s tilt, day length at different times of year, in different hemispheres.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; orbital motion and the link between day length, seasons and Earth\'s tilt (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.4 Earth\'s rotation, day length and the seasons (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; Earth\'s axial tilt, day, year, seasons (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'dns-scene-tilt',
      title: 'Earth\'s Axis is Tilted: That Causes the Seasons',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the same tilt gives the UK summer at one side of the orbit and winter at the other.',
      data: {
        viewBox: '0 0 800 400',
        svg: TILT_SEASONS_SVG,
        hotspots: [
          {
            id: 'dns-t-tilt',
            x: 50,
            y: 22,
            label: 'Tilt of about 23.5°',
            description:
              'Earth\'s spin axis is tilted by about 23.5° from vertical, measured against the plane of its orbit round the Sun. The axis points the same way all year, like a leaning pencil that does not wobble as it is carried round a room.',
          },
          {
            id: 'dns-t-summer',
            x: 40,
            y: 65,
            label: 'N hemisphere summer',
            description:
              'When the north pole tilts toward the Sun, sunlight hits the UK more directly and the UK gets longer days. This is summer for the UK and the rest of the northern hemisphere. At the same time the southern hemisphere has winter.',
          },
          {
            id: 'dns-t-winter',
            x: 75,
            y: 65,
            label: 'N hemisphere winter',
            description:
              'Six months later, the north pole tilts away from the Sun. UK sunlight arrives at a shallow angle and days are shorter. This is winter for the UK and summer for the southern hemisphere.',
          },
          {
            id: 'dns-t-distance',
            x: 50,
            y: 88,
            label: 'Tilt, not distance',
            description:
              'Earth is actually closest to the Sun in early January (a point called perihelion) and furthest in early July. So the UK is slightly closer to the Sun in winter than in summer. Distance does not cause the seasons; tilt does.',
          },
        ],
      },
    },
    {
      id: 'dns-scene-daynight',
      title: 'Day and Night: Earth Spins, the Sun Stays Put',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the UK turns into and out of the lit half of Earth as the planet spins.',
      data: {
        viewBox: '0 0 800 400',
        svg: DAY_NIGHT_SVG,
        hotspots: [
          {
            id: 'dns-d-sun',
            x: 12,
            y: 50,
            label: 'The Sun lights one half of Earth',
            description:
              'Sunlight only reaches the half of Earth that faces the Sun. The other half sits in Earth\'s own shadow. The Sun does not move round Earth; it stays roughly where it is on the timescale of a day.',
          },
          {
            id: 'dns-d-spin',
            x: 62,
            y: 25,
            label: 'Earth spins once every 24 hours',
            description:
              'Earth turns on its axis once every 24 hours. As the UK rotates, it moves from the lit half (day) into the shadow (night) and back round to the lit half again. Sunrise and sunset are the moments the UK crosses the boundary.',
          },
          {
            id: 'dns-d-uk',
            x: 56,
            y: 42,
            label: 'The UK on the spinning Earth',
            description:
              'Right now, somewhere in the UK is in daylight and somewhere on the other side of the world is in night. Six hours later, the UK has carried round and is heading toward sunset.',
          },
          {
            id: 'dns-d-myth',
            x: 62,
            y: 88,
            label: 'It feels as if the Sun moves: it does not',
            description:
              'In daily speech we say "the Sun rises in the east." In fact, Earth turns toward the east, which carries the UK into the lit half. The Sun staying still is a simpler, more useful picture once you have the spin in mind.',
          },
        ],
      },
    },
    {
      id: 'dns-scene-edinburgh',
      title: 'UK Daylight Hours: Edinburgh in Midsummer vs Midwinter',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare midsummer and midwinter daylight in Edinburgh and see why the difference grows further north.',
      data: {
        viewBox: '0 0 800 400',
        svg: UK_DAYLIGHT_HOURS_SVG,
        hotspots: [
          {
            id: 'dns-e-summer',
            x: 35,
            y: 38,
            label: 'About 17 hours at midsummer',
            description:
              'Around the longest day (about 21 June), Edinburgh gets about 17 hours of daylight. Sunrise is around 04:30 and sunset around 22:00. Further north (Shetland, Orkney) gets even more, and the sky never fully darkens.',
          },
          {
            id: 'dns-e-winter',
            x: 60,
            y: 62,
            label: 'About 7 hours at midwinter',
            description:
              'Around the shortest day (about 21 December), Edinburgh gets about 7 hours of daylight. Sunrise is around 08:40 and sunset around 15:40. The difference between summer and winter day length is bigger the further north you go.',
          },
          {
            id: 'dns-e-tilt-link',
            x: 50,
            y: 85,
            label: 'The link to tilt',
            description:
              'In June the UK\'s end of Earth tilts toward the Sun, so the UK\'s spin path stays in the lit half longer each day. In December that end tilts away, so the UK\'s path through the lit half is short. Same spin, different tilt direction.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'dns-worked-1',
      title: 'Why the UK has summer when the north pole tilts toward the Sun',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in Sevenoaks notices that summer days in the UK are long and warm, while winter days are short and cold, and asks why.',
        },
        {
          explanation:
            'Recall the tilt. Earth\'s axis is tilted at about 23.5° from vertical. The axis keeps pointing the same way as Earth orbits the Sun, like a leaning stick carried round a room.',
          maths: 'tilt of axis ≈ 23.5° from vertical',
        },
        {
          explanation:
            'Locate the UK. The UK is in the northern hemisphere. So when the north end of the axis tilts toward the Sun, the UK tilts toward the Sun too.',
        },
        {
          explanation:
            'Two effects of that tilt. First, sunlight hits the UK more directly (closer to overhead), so each square metre of ground gets more energy. Second, the UK\'s daily spin path keeps it in the lit half of Earth for longer, so days are longer.',
          maths: 'more direct sunlight + longer days = summer',
        },
        {
          explanation:
            'State the result. The UK has summer when the north pole tilts toward the Sun, and winter six months later when it tilts away. The southern hemisphere is on the opposite cycle.',
        },
        {
          explanation:
            'A quick check on the "closer-to-the-Sun" idea. Earth is actually closest to the Sun in early January, in the middle of UK winter, and furthest in early July. So the seasons are not caused by distance to the Sun. Tilt, not distance.',
        },
      ],
    },
    {
      id: 'dns-worked-2',
      title: 'Why the Sun seems to rise in the east',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in Manchester watches the Sun appear over the rooftops in the morning and disappear behind the hills in the evening, and asks whether the Sun is moving round Earth.',
        },
        {
          explanation:
            'Recall the spin. Earth turns on its axis once every 24 hours. Looking down on the north pole, Earth spins anticlockwise. From the ground, that means each part of the surface turns toward the east.',
          maths: 'spin period = 24 h, eastward as seen from the surface',
        },
        {
          explanation:
            'Picture the boundary. Half of Earth always faces the Sun (day), half is in shadow (night). The line between them is sunrise on one side and sunset on the other.',
        },
        {
          explanation:
            'Carry the UK across the boundary. Manchester turns toward the east. As it does, it crosses the day side first along the eastern edge, so the Sun appears to rise in the east. Twelve hours later it crosses the western edge into night.',
          maths: 'Manchester crosses east boundary → "sunrise"; west boundary → "sunset"',
        },
        {
          explanation:
            'State the result. The Sun is not moving round Earth on a daily timescale. Earth is spinning, and Manchester is being carried round. Saying "the Sun rises in the east" is a useful shorthand once you know the spin is doing the work.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'dns-q1',
      type: 'multiple-choice',
      stem: 'What causes the seasons in the UK?',
      tier: 'core',
      options: [
        'Earth gets closer to the Sun in summer and further in winter.',
        'The Sun gets hotter in summer and cooler in winter.',
        'Earth\'s axis is tilted, so the UK tilts toward the Sun in summer and away in winter.',
        'The Moon shades the UK in winter.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dns-mis-distance',
      hint: 'Think about the direction the north pole leans, not the distance from the Sun.',
    },
    {
      id: 'dns-q2',
      type: 'multiple-choice',
      stem: 'Roughly what angle is Earth\'s axis tilted from vertical, relative to its orbit?',
      tier: 'core',
      options: [
        '0° (not tilted)',
        '5°',
        '23.5°',
        '90° (lying on its side)',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'About a quarter of a right angle.',
    },
    {
      id: 'dns-q3',
      type: 'numeric-entry',
      stem: 'How many hours does Earth take to spin once on its axis?',
      tier: 'core',
      correctAnswer: 24,
      unit: 'hours',
      xpValue: 10,
      hint: 'One full day.',
    },
    {
      id: 'dns-q4',
      type: 'multiple-choice',
      stem: 'When the UK is in summer, what is the southern hemisphere doing?',
      tier: 'core',
      options: [
        'Also having summer.',
        'Having spring.',
        'Having winter (the south pole tilts away from the Sun).',
        'Standing still in the dark.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dns-mis-same-season',
      hint: 'The two hemispheres are on opposite halves of Earth\'s tilt.',
    },
    {
      id: 'dns-q5',
      type: 'multiple-choice',
      stem: 'Why does the Sun appear to rise in the east each morning in the UK?',
      tier: 'core',
      options: [
        'The Sun orbits Earth once a day, moving from east to west.',
        'Earth spins on its axis, carrying the UK toward the east into the lit half of Earth.',
        'The Moon pushes the Sun across the sky.',
        'The Sun is closer in the morning than at night.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'dns-mis-sun-moves',
      hint: 'It is Earth that moves on this timescale, not the Sun.',
    },
    {
      id: 'dns-q6',
      type: 'multiple-choice',
      stem: 'Edinburgh has about 17 hours of daylight at midsummer and about 7 hours at midwinter. What is the main reason the day length changes through the year?',
      tier: 'core',
      options: [
        'Earth\'s tilt: the UK\'s spin path stays in the lit half of Earth longer when the north pole leans toward the Sun.',
        'The Sun stays on for longer in summer.',
        'Earth spins faster in summer.',
        'Cloud cover blocks more of the day in winter.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Same spin speed, different tilt direction.',
    },
    {
      id: 'dns-q7',
      type: 'spot-misconception',
      stem: 'Priya writes, "The UK has summer because Earth is closer to the Sun in summer than in winter."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Earth is closer in summer, so the UK gets more heat and has summer.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. Earth is actually closest to the Sun in early January (perihelion), in the middle of UK winter. The seasons are caused by Earth\'s 23.5° axial tilt, not by distance from the Sun.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dns-mis-distance',
    },
    {
      id: 'dns-q8',
      type: 'spot-misconception',
      stem: 'Theo writes, "The Sun moves round Earth once a day, and that is why we get day and night."',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. The Sun rises in the east and sets in the west, so it must be moving round Earth.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. Earth spins on its axis once every 24 hours. The UK is carried from the lit half (day) into the shadow (night) and back. The Sun does not move round Earth on this timescale.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dns-mis-sun-moves',
    },
    {
      id: 'dns-q9',
      type: 'numeric-entry',
      stem: 'Edinburgh has about 17 hours of daylight at midsummer and about 7 hours at midwinter. Roughly how many more hours of daylight does Edinburgh have at midsummer than at midwinter?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'hours',
      tolerance: 1,
      xpValue: 15,
      hint: '17 - 7.',
    },
    {
      id: 'dns-q10',
      type: 'multiple-choice',
      stem: 'A pupil in Cape Town (in the southern hemisphere) is on the phone to a friend in London on 25 December. Both are looking out of the window. Which sentence is true?',
      tier: 'confident',
      options: [
        'Both are in winter, with similar daylight hours.',
        'Both are in summer, because the whole Earth has summer at the same time.',
        'Cape Town has neither summer nor winter, because it is on the equator.',
        'London is in winter (short days); Cape Town is in summer (long days), because the southern hemisphere tilts toward the Sun in December.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'dns-mis-same-season',
      hint: 'When the UK has winter, the opposite hemisphere has summer.',
    },
    {
      id: 'dns-q11',
      type: 'multiple-choice',
      stem: 'Which fact about the date of perihelion (when Earth is closest to the Sun) is correct?',
      tier: 'confident',
      options: [
        'Perihelion is in late June, in the middle of UK summer.',
        'Perihelion is in early January, in the middle of UK winter, which shows that the seasons are not caused by distance from the Sun.',
        'Perihelion is on 21 March each year.',
        'Earth never gets closer to or further from the Sun.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'dns-mis-orbit-shape',
      hint: 'It is in the same UK month as the New Year.',
    },
    {
      id: 'dns-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why the UK has summer when the north pole tilts toward the Sun, given that the axis keeps pointing the same way all year.',
      tier: 'confident',
      steps: [
        'Recall that Earth\'s axis is tilted at about 23.5° and keeps pointing the same way as Earth orbits.',
        'Note that the UK is in the northern hemisphere.',
        'When the north pole tilts toward the Sun, the UK tilts toward the Sun too.',
        null,
        'State the result: the UK has summer (longer days, more direct sunlight) when the north pole tilts toward the Sun.',
      ],
      missingStepIndex: 3,
      correctStep:
        'List the two effects: sunlight hits the UK more directly, and the UK\'s spin path stays in the lit half of Earth for longer.',
      xpValue: 15,
      misconceptionId: 'dns-mis-tilt-flips',
    },
    {
      id: 'dns-q13',
      type: 'drag-order',
      stem: 'Order these UK midsummer events on 21 June, in Edinburgh, from earliest in the day to latest. (Times shown are approximate BST.)',
      tier: 'confident',
      items: [
        'Sunset, around 22:00',
        'Sunrise, around 04:30',
        'Noon (Sun highest in the sky), around 13:00 BST',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      hint: 'Sunrise comes first; the Sun is highest near the middle of the day; sunset comes last.',
    },
    {
      id: 'dns-q14',
      type: 'data-extraction',
      stem: 'A school project lists Edinburgh daylight hours: "March equinox: 12 h. Midsummer (21 June): 17 h. September equinox: 12 h. Midwinter (21 December): 7 h." How many hours of daylight does Edinburgh have at the September equinox?',
      tier: 'confident',
      dataSource:
        'March equinox: 12 h. Midsummer (21 June): 17 h. September equinox: 12 h. Midwinter (21 December): 7 h.',
      correctAnswer: '12',
      xpValue: 15,
      hint: 'Read the row labelled "September equinox".',
    },
    {
      id: 'dns-q15',
      type: 'multiple-choice',
      stem: 'A Year 7 in London phones a friend in Sydney at 11 a.m. London time. Sydney is on the opposite side of Earth, roughly half a turn round from London. Roughly what time is it in Sydney, and why?',
      tier: 'challenge',
      options: [
        'About 11 p.m. in Sydney; Earth spins once every 24 hours, and a half turn moves the clock by about 12 hours, so Sydney is on the night side when London is in late morning.',
        '11 a.m. in Sydney; the whole Earth shares one clock, and time runs the same everywhere on the same date.',
        '5 a.m. in Sydney; Earth spins, but Sydney is six hours ahead because it is south of London.',
        'It is dawn in Sydney; the Sun is starting to rise wherever it is morning anywhere on Earth.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'dns-mis-sun-moves',
      hint: 'Half of 24 hours is 12. Sydney is on the dark side when London is on the lit side.',
    },
    {
      id: 'dns-q16',
      type: 'numeric-entry',
      stem: 'Earth spins through 360° once every 24 hours. Roughly how many degrees does it spin in 1 hour?',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'degrees per hour',
      tolerance: 1,
      xpValue: 20,
      hint: '360 ÷ 24.',
    },
    {
      id: 'dns-q17',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil reads three claims. Which two together correctly explain UK summer?',
      tier: 'challenge',
      options: [
        '(1) Earth is closest to the Sun in summer; (2) the Sun is hotter in summer.',
        '(1) The Moon blocks less light in summer; (2) Earth orbits faster in summer.',
        '(1) The UK has more trees in summer; (2) air pressure changes the day length.',
        '(1) The north pole tilts toward the Sun; (2) sunlight hits the UK more directly and the UK\'s daily spin path stays in the lit half of Earth for longer.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'dns-mis-distance',
      hint: 'Pick the option that uses tilt, direct sunlight, and longer days, and does NOT use distance to the Sun.',
    },
    {
      id: 'dns-q18',
      type: 'numeric-entry',
      stem: 'A Year 7 in Sheffield reads that London on 21 June has about 16 hours and 38 minutes of daylight, and London on 21 December has about 7 hours and 50 minutes. To the nearest hour, how many more hours of daylight does London have at midsummer than at midwinter?',
      tier: 'challenge',
      correctAnswer: 9,
      unit: 'hours',
      tolerance: 1,
      xpValue: 20,
      hint: 'Round each value to the nearest hour, then subtract.',
    },
    {
      id: 'dns-q19',
      type: 'free-text',
      stem: 'A Year 7 in Sevenoaks asks why the UK has summer in June. In two or three sentences, write a reply that names Earth\'s 23.5° axial tilt, says the north pole tilts toward the Sun in June, and points out that perihelion (closest distance to the Sun) is in early January, so distance is not what causes the seasons.',
      tier: 'challenge',
      sampleAnswer:
        'Earth\'s axis is tilted at about 23.5° from vertical, and it keeps pointing the same way all year. In June, the north pole tilts toward the Sun, so the UK gets more direct sunlight and longer days, which is summer. Earth is actually closest to the Sun (perihelion) in early January, in the middle of UK winter, so the seasons are caused by tilt, not by distance from the Sun.',
      keywords: ['tilt', '23.5', 'north pole', 'perihelion', 'January', 'distance'],
      xpValue: 20,
      misconceptionId: 'dns-mis-distance',
    },
    {
      id: 'dns-q20',
      type: 'multiple-choice',
      stem: 'Which two ideas does a UK Year 7 pupil need to explain "the Sun rises in the east"?',
      tier: 'challenge',
      options: [
        'Earth spins on its axis once every 24 hours; the surface turns toward the east, so the eastern edge of the lit half meets the UK first.',
        'The Sun orbits Earth once a day; the Sun moves toward the east.',
        'The Moon pulls the Sun east; gravity is stronger in the east.',
        'The Sun jumps across the sky in steps; the east is closer to space.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'dns-mis-fixed-earth',
      hint: 'You need spin (not Sun motion) and east-facing surface (not east-facing Sun).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2019, Paper 2F, candidates explaining seasons by Earth-Sun distance
    {
      id: 'dns-mis-distance',
      description:
        'Believing the UK has summer because Earth is closer to the Sun, and winter because Earth is further away.',
      triggerAnswer: 'distance',
      correction:
        'The seasons are caused by Earth\'s 23.5° axial tilt, not by distance from the Sun. Earth is actually closest to the Sun in early January, in the middle of UK winter.',
      reExplanation:
        'When the north pole tilts toward the Sun, the UK gets more direct sunlight and longer days; that is summer. When the north pole tilts away, the UK gets shallow sunlight and shorter days; that is winter. Earth\'s orbit is nearly circular, so the small distance change does not drive the seasons.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on day-night cause
    {
      id: 'dns-mis-sun-moves',
      description:
        'Believing the Sun moves round Earth once a day to cause day and night, often because the Sun rises in the east and sets in the west.',
      triggerAnswer: 'sun-moves',
      correction:
        'Earth spins on its own axis once every 24 hours. The Sun does not move round Earth on a daily timescale. Sunrise and sunset are the moments the UK is carried into and out of the lit half of Earth.',
      reExplanation:
        'Picture half of Earth in sunlight and half in shadow. As Earth turns, the boundary sweeps over the surface. Saying "the Sun rises in the east" is a shorthand: it is the UK turning toward the east into the lit half. The Sun is roughly fixed on this timescale.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2022, Paper 1PH0/1F, candidates assuming both hemispheres share a season
    {
      id: 'dns-mis-same-season',
      description:
        'Believing the whole Earth has the same season at the same time, missing that the two hemispheres are on opposite cycles.',
      triggerAnswer: 'same-season',
      correction:
        'When the UK has summer (north pole tilted toward the Sun), the southern hemisphere has winter (south pole tilted away). The two hemispheres always have opposite seasons.',
      reExplanation:
        'Earth\'s tilt has the same direction all year. So one end of the axis leans into the Sun while the other leans away. Three months later both ends lean sideways and the equinoxes split the difference. The hemispheres swap roles every six months.',
    },
    // Source: IOPSpark "Earth in space" guidance on the role of tilt vs orbit shape
    {
      id: 'dns-mis-orbit-shape',
      description:
        'Believing Earth\'s orbit is strongly oval, so the season changes follow distance to the Sun rather than the tilt of the axis.',
      triggerAnswer: 'orbit-shape',
      correction:
        'Earth\'s orbit is only slightly oval. The closest distance (perihelion, early January) and the furthest (aphelion, early July) only differ by about 3 percent. That tiny change is not what drives the seasons; the 23.5° tilt is.',
      reExplanation:
        'A useful check: if distance drove the seasons, the whole Earth would have summer at the same time and winter at the same time, and the UK\'s summer would line up with perihelion. Neither matches what we see.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates believing the Sun moves overhead through 24 hours
    {
      id: 'dns-mis-fixed-earth',
      description:
        'Believing Earth is fixed in place while the Sun travels round it overhead each day.',
      triggerAnswer: 'fixed-earth',
      correction:
        'Earth spins on its axis once every 24 hours. The Sun stays roughly fixed on this timescale. The day-night cycle is caused by Earth turning, not by the Sun moving round Earth.',
      reExplanation:
        'A simple test: time-lapse views of Earth from space show the planet turning, with the lit half sweeping across continents. The Sun in the picture stays still. Old "the Sun goes round Earth" models were replaced from the 1500s onward.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on tilt direction over the year
    {
      id: 'dns-mis-tilt-flips',
      description:
        'Believing Earth\'s axis flips its tilt direction during the year, so the UK leans toward the Sun in summer and points the other way in winter.',
      triggerAnswer: 'tilt-flips',
      correction:
        'Earth\'s axis points the same way all year; it never flips. Six months apart, Earth sits on opposite sides of its orbit, so the same fixed tilt leans the UK toward the Sun in June and away in December.',
      reExplanation:
        'Picture a leaning stick carried round a room. The stick stays leaning the same way; what changes is where in the room you are. That is the same picture for Earth: same tilt all year, different position in the orbit.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceZoneNodes = [spaceSolarSystem, spaceDayNightSeasons]

export const spaceZone: Zone = {
  id: 'physics-space',
  name: 'Space',
  realm: 'mechanica',
  nodeIds: spaceZoneNodes.map(n => n.id),
}
