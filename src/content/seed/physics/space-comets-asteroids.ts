import type { SkillNode } from '@/types/content'

const ASTEROID_BELT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The asteroid belt: rocky bodies between Mars and Jupiter</text>

    <!-- Sun on the left -->
    <circle cx="80" cy="220" r="34" fill="currentColor" />
    <text x="80" y="226" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- Mars orbit (inner edge) -->
    <circle cx="80" cy="220" r="160" stroke-dasharray="4 4" stroke-width="1.5" />
    <text x="240" y="218" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Mars orbit</text>
    <circle cx="240" cy="220" r="6" fill="currentColor" />

    <!-- Jupiter orbit (outer edge) -->
    <circle cx="80" cy="220" r="340" stroke-dasharray="4 4" stroke-width="1.5" />
    <text x="420" y="218" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Jupiter orbit</text>
    <circle cx="420" cy="220" r="14" fill="currentColor" />

    <!-- Asteroid belt: scattered dots in the band -->
    <circle cx="260" cy="190" r="2" fill="currentColor" />
    <circle cx="280" cy="240" r="2" fill="currentColor" />
    <circle cx="300" cy="210" r="2" fill="currentColor" />
    <circle cx="320" cy="180" r="2" fill="currentColor" />
    <circle cx="330" cy="260" r="2" fill="currentColor" />
    <circle cx="350" cy="225" r="2" fill="currentColor" />
    <circle cx="360" cy="195" r="2" fill="currentColor" />
    <circle cx="370" cy="245" r="2" fill="currentColor" />
    <circle cx="390" cy="215" r="2" fill="currentColor" />
    <circle cx="400" cy="185" r="2" fill="currentColor" />
    <circle cx="270" cy="270" r="2" fill="currentColor" />
    <circle cx="380" cy="170" r="2" fill="currentColor" />
    <text x="335" y="305" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">asteroid belt</text>
    <text x="335" y="325" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">mostly empty space between rocky bodies</text>

    <!-- Labels on the side -->
    <text x="700" y="120" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">Roughly circular orbits</text>
    <text x="700" y="140" text-anchor="end" font-size="11" stroke="none" fill="currentColor">close to the plane of the planets</text>
    <text x="700" y="170" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">Largest: Ceres (dwarf planet)</text>
    <text x="700" y="190" text-anchor="end" font-size="11" stroke="none" fill="currentColor">then Vesta, Pallas</text>
    <text x="700" y="220" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">Total mass smaller than the Moon</text>
    <text x="700" y="250" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">Average separation: millions of km</text>

    <text x="400" y="380" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">A spacecraft passing through almost never meets one without being aimed at it.</text>
  </g>
`

const COMET_TAIL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A comet's tail always points AWAY from the Sun</text>

    <!-- Sun centred at lower left -->
    <circle cx="140" cy="280" r="40" fill="currentColor" />
    <text x="140" y="286" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="white">Sun</text>

    <!-- Elliptical orbit (drawn as a wide ellipse) -->
    <ellipse cx="380" cy="240" rx="280" ry="100" stroke-dasharray="5 5" stroke-width="1.5" />
    <text x="380" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">highly elliptical orbit (not to scale)</text>

    <!-- Position 1: comet approaching the Sun, tail still points away from Sun -->
    <circle cx="500" cy="160" r="7" fill="currentColor" />
    <text x="510" y="148" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">approaching the Sun</text>
    <line x1="500" y1="160" x2="640" y2="60" stroke-width="2" />
    <polygon points="635,55 645,58 637,66" fill="currentColor" stroke="none" />
    <text x="650" y="55" text-anchor="start" font-size="11" stroke="none" fill="currentColor">tail away from Sun</text>

    <!-- Position 2: comet at perihelion (closest), biggest tail -->
    <circle cx="240" cy="170" r="9" fill="currentColor" />
    <text x="240" y="155" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">closest pass</text>
    <line x1="240" y1="170" x2="305" y2="55" stroke-width="3" />
    <polygon points="300,52 312,58 302,66" fill="currentColor" stroke="none" />
    <text x="320" y="55" text-anchor="start" font-size="11" stroke="none" fill="currentColor">biggest tail</text>

    <!-- Position 3: comet moving AWAY from Sun, tail still away from Sun (leads, not trails) -->
    <circle cx="600" cy="280" r="7" fill="currentColor" />
    <text x="610" y="305" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">moving away from Sun</text>
    <line x1="600" y1="280" x2="720" y2="220" stroke-width="2" />
    <polygon points="715,215 725,220 716,226" fill="currentColor" stroke="none" />
    <text x="700" y="200" text-anchor="end" font-size="11" stroke="none" fill="currentColor">tail STILL away from Sun</text>
    <text x="700" y="215" text-anchor="end" font-size="10" font-style="italic" stroke="none" fill="currentColor">leads the comet, does not trail</text>

    <!-- Rule line at the bottom -->
    <text x="400" y="395" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Solar wind and radiation pressure push the dust and gas straight outward from the Sun.</text>
  </g>
`

const TIDAL_LOCK_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Tidal locking: the Moon spins once per orbit, so one face always faces Earth</text>

    <!-- Earth at centre -->
    <circle cx="400" cy="220" r="36" />
    <text x="400" y="226" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Moon orbit -->
    <circle cx="400" cy="220" r="160" stroke-dasharray="5 5" stroke-width="1.5" />

    <!-- Position 1: Moon east of Earth, near side faces Earth (arrow on the inner edge) -->
    <circle cx="560" cy="220" r="18" />
    <line x1="555" y1="220" x2="543" y2="220" stroke-width="3" />
    <polygon points="545,215 539,220 545,225" fill="currentColor" stroke="none" />
    <text x="560" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">near side</text>

    <!-- Position 2: Moon north of Earth, near side faces Earth (arrow points downward) -->
    <circle cx="400" cy="60" r="18" />
    <line x1="400" y1="65" x2="400" y2="78" stroke-width="3" />
    <polygon points="395,75 400,82 405,75" fill="currentColor" stroke="none" />
    <text x="400" y="45" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">near side</text>

    <!-- Position 3: Moon west of Earth, near side faces Earth (arrow points right) -->
    <circle cx="240" cy="220" r="18" />
    <line x1="245" y1="220" x2="258" y2="220" stroke-width="3" />
    <polygon points="255,215 262,220 255,225" fill="currentColor" stroke="none" />
    <text x="240" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">near side</text>

    <!-- Position 4: Moon south of Earth -->
    <circle cx="400" cy="380" r="18" />
    <line x1="400" y1="375" x2="400" y2="362" stroke-width="3" />
    <polygon points="395,365 400,358 405,365" fill="currentColor" stroke="none" />
    <text x="400" y="404" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">near side</text>

    <!-- Side notes -->
    <text x="730" y="80" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">Spin period = orbit period</text>
    <text x="730" y="100" text-anchor="end" font-size="11" stroke="none" fill="currentColor">about 27.3 days for the Moon</text>
    <text x="730" y="130" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">"Far side" is NOT a dark side</text>
    <text x="730" y="150" text-anchor="end" font-size="11" stroke="none" fill="currentColor">it gets the same sunlight on average</text>
    <text x="730" y="180" text-anchor="end" font-size="11" stroke="none" fill="currentColor">first imaged by Luna 3 in 1959</text>
  </g>
`

export const spaceCometsAsteroids: SkillNode = {
  id: 'physics-space-comets-asteroids',
  title: 'Comets, Asteroids and Tidal Locking',
  description:
    'Asteroids are rocky bodies left over from the early solar system. Most sit in the asteroid belt, a wide band between the orbits of Mars and Jupiter, on roughly circular paths close to the same plane as the planets. The largest is Ceres, a dwarf planet, followed by Vesta and Pallas; the total mass of the whole belt is smaller than the mass of the Moon. Comets are icy and dusty bodies from the outer solar system, the Kuiper Belt or the Oort Cloud. Their orbits are highly elliptical, swinging close to the Sun and then back out for centuries or millennia. Near the Sun, the ice sublimates and forms a glowing coma and a tail that always points away from the Sun, pushed by the solar wind and radiation pressure. Halley\'s Comet, calculated by Sir Edmond Halley as UK Astronomer Royal, returns about every 76 years. Tidal locking happens when gravity has slowed a body\'s spin so that its spin period matches its orbital period, so the same face always points at its parent. Our Moon is tidally locked to Earth; the "far side" is not a dark side and was first photographed by Luna 3 in 1959. Year 7 work stays qualitative, with no formulae for orbital period or radiation pressure.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'challenge',
  prerequisites: ['physics-space-solar-system', 'physics-space-orbits-gravity'],
  curriculum: {
    ks3Objective:
      'Gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); orbital motion of bodies in the solar system.',
    awardingBodies: {
      aqa:
        '4.8.1.2 Orbital motion, satellites and gravity; elliptical orbits of comets, asteroids in the solar system (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.1 to 8.3 the solar system including asteroids and comets, 8.5 to 8.7 orbital motion (GCSE Physics 1PH0)',
      ocr:
        'P8.1 Solar System and the Universe; comets and asteroids, elliptical orbits and tidal locking of moons (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: ESA Science: Asteroids in our Solar System overview page, "Where are most asteroids? Between Mars and Jupiter," accessed via sci.esa.int, used as a Year 7 friendly summary of the asteroid belt.
    {
      id: 'pca-belt',
      title: 'The Asteroid Belt Between Mars and Jupiter',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what sits in the asteroid belt and what does not.',
      data: {
        viewBox: '0 0 800 400',
        svg: ASTEROID_BELT_SVG,
        hotspots: [
          {
            id: 'pca-belt-where',
            x: 42,
            y: 55,
            label: 'Between Mars and Jupiter',
            description:
              'Almost every named asteroid orbits the Sun on a roughly circular path between the orbit of Mars and the orbit of Jupiter. The orbits sit close to the same flat plane as the planets, not in a thick sphere around the Sun.',
          },
          {
            id: 'pca-belt-biggest',
            x: 80,
            y: 42,
            label: 'Largest: Ceres, Vesta, Pallas',
            description:
              'The biggest body in the belt is Ceres, classed as a dwarf planet, around 940 km across. Vesta and Pallas are next, each roughly 500 km wide. Beyond these, the bodies drop sharply in size to rubble pile rocks and dust grains.',
          },
          {
            id: 'pca-belt-mass',
            x: 80,
            y: 55,
            label: 'Total mass less than the Moon',
            description:
              'Hollywood films often show the belt packed with house sized boulders. The reality is the opposite. If every asteroid were swept together into one body, it would be smaller in mass than the Moon. The belt is mostly empty.',
          },
          {
            id: 'pca-belt-spacing',
            x: 80,
            y: 63,
            label: 'Average spacing: millions of km',
            description:
              'Asteroids are typically separated by millions of kilometres. A spacecraft can pass straight through the belt without being hit; ESA and NASA missions to Jupiter routinely do so. The Dawn probe had to be deliberately aimed at Vesta and Ceres to visit them.',
          },
        ],
      },
    },
    // Source: NASA Solar System Exploration: Comets overview page, "A comet's tail always points away from the Sun," accessed via solarsystem.nasa.gov, used as the Year 7 friendly summary of comet anatomy.
    {
      id: 'pca-tail',
      title: 'Comet Tails Always Point Away From the Sun',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow a comet around its elliptical orbit and read why the tail behaves as it does.',
      data: {
        viewBox: '0 0 800 400',
        svg: COMET_TAIL_SVG,
        hotspots: [
          {
            id: 'pca-tail-approach',
            x: 63,
            y: 40,
            label: 'Approaching: ice sublimates',
            description:
              'As the comet swings in from the outer solar system, sunlight heats its icy nucleus. The ice turns straight from solid to gas, sublimating, and releases trapped dust. A glowing coma forms around the nucleus and a tail begins to stream off.',
          },
          {
            id: 'pca-tail-closest',
            x: 30,
            y: 42,
            label: 'Closest pass: biggest tail',
            description:
              'At its closest pass, called perihelion, the comet is hottest and most active. The tail is at its longest and brightest, sometimes stretching across millions of kilometres of space. Halley\'s Comet was easily seen with the naked eye over the UK at its 1986 perihelion.',
          },
          {
            id: 'pca-tail-recede',
            x: 75,
            y: 70,
            label: 'Receding: tail leads, not trails',
            description:
              'On the way back out, the comet is moving away from the Sun. The tail still streams outward from the Sun, so it now leads the comet through space rather than trailing behind it. The tail never points behind the comet like an exhaust.',
          },
          {
            id: 'pca-tail-push',
            x: 50,
            y: 95,
            label: 'Pushed by solar wind and radiation pressure',
            description:
              'The solar wind (a stream of charged particles from the Sun) and radiation pressure (the gentle push from sunlight itself) drive the dust and gas straight outward from the Sun. This is what fixes the tail direction, not the comet\'s own motion.',
          },
        ],
      },
    },
    // Source: NASA Moon: Why we always see the same side of the Moon, "The Moon is tidally locked to Earth," accessed via moon.nasa.gov, paired with ESA Luna 3 historical note for the far-side first image in 1959.
    {
      id: 'pca-tidal-lock',
      title: 'The Moon Is Tidally Locked to Earth',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read why the same face of the Moon always points at Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: TIDAL_LOCK_SVG,
        hotspots: [
          {
            id: 'pca-lock-rule',
            x: 50,
            y: 8,
            label: 'Spin period equals orbit period',
            description:
              'A body is tidally locked when gravity has slowed its spin until one full turn on its axis takes exactly as long as one full trip around its parent. For the Moon this is about 27.3 days. The body still spins; the spin just matches the orbit.',
          },
          {
            id: 'pca-lock-near',
            x: 50,
            y: 50,
            label: 'Near side always faces Earth',
            description:
              'Because of the lock, the same hemisphere, called the near side, always points at Earth. The familiar pattern of dark seas and bright highlands that we call the "face of the Moon" never changes from week to week or year to year.',
          },
          {
            id: 'pca-lock-far',
            x: 90,
            y: 32,
            label: 'Far side is NOT a dark side',
            description:
              'The hemisphere we never see from Earth is called the far side, not the dark side. Across a full lunar month, it gets the same average sunlight as the near side. Soviet probe Luna 3 sent back the first photographs of the far side in October 1959.',
          },
          {
            id: 'pca-lock-others',
            x: 90,
            y: 45,
            label: 'Common for moons of giant planets',
            description:
              'Most major moons of Jupiter, Saturn, Uranus and Neptune are tidally locked to their planets. It is the natural long-term result of gravity acting between a small body and a much larger one over billions of years.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: OCR GCSE Physics J259 Gateway specification, P8.1 Solar System content statement on comets and elliptical orbits, supported by NASA Solar System Exploration comet overview for the tail rule.
    {
      id: 'pca-worked-1',
      title: 'Where is the tail of Halley\'s Comet pointing on its way out?',
      steps: [
        {
          explanation:
            'Set out the situation. Halley\'s Comet has rounded the Sun and is now heading back out toward the outer solar system. A Royal Greenwich Observatory pupil is asked which direction the tail is pointing as the comet moves away from the Sun.',
        },
        {
          explanation:
            'Recall the rule for comet tails. The tail is made of dust and ionised gas released from the nucleus by the heat of the Sun. The solar wind and radiation pressure push these particles straight outward from the Sun, no matter how the comet itself is moving.',
        },
        {
          explanation:
            'Apply the rule to this leg of the orbit. The comet is moving away from the Sun, so "away from the Sun" is also "ahead of the comet" along its path. The tail therefore points ahead of the comet, away from the Sun.',
          maths: 'tail direction = outward from Sun, not behind comet',
        },
        {
          explanation:
            'State the answer. The tail leads the comet on the outbound leg. It is not trailing behind like an exhaust plume; it is pointing into the empty space ahead, directly away from the Sun.',
        },
        {
          explanation:
            'Step back to the bigger picture. The same rule held on the inbound leg, when the tail streamed behind the comet because "away from the Sun" was then "behind the comet". The rule is simple and always the same: the Sun decides which way the tail points.',
        },
      ],
    },
    // Source: NASA Moon overview page on lunar synchronous rotation, "the Moon spins once per orbit," paired with ESA Luna 3 mission notes for the 1959 first image of the far side.
    {
      id: 'pca-worked-2',
      title: 'Why we never see the far side of the Moon from a UK garden',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil in a Surrey garden watches the Moon every clear night for a month and notices that the dark seas and bright highlands always sit in the same pattern. They want to know why the Moon never seems to spin in front of them.',
        },
        {
          explanation:
            'Recall the meaning of tidal locking. A body is tidally locked when gravity has slowed its spin so that the spin period exactly matches the orbital period. The body still spins; one full turn on its axis just takes as long as one full lap around its parent.',
        },
        {
          explanation:
            'Apply the rule to the Earth Moon system. The Moon orbits the Earth in about 27.3 days and also turns once on its axis in about 27.3 days. The two numbers being equal is what tidal locking guarantees.',
          maths: 'orbit period = spin period = about 27.3 days',
        },
        {
          explanation:
            'State the consequence. Because the two periods match, the same hemisphere, the near side, always faces Earth. The far side is never visible from any UK garden, no matter how good the telescope.',
        },
        {
          explanation:
            'Add the historical note. Humans never saw the far side of the Moon until the Soviet probe Luna 3 took the first photographs in October 1959. The far side is not a dark side; it gets the same amount of sunlight on average as the near side over a full lunar month.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pca-q1',
      type: 'multiple-choice',
      stem: 'Where do most asteroids in the solar system sit?',
      tier: 'core',
      options: [
        'In a band between the orbits of Mars and Jupiter.',
        'In a thick spherical shell at the outer edge of the solar system.',
        'In a tight cluster behind the Earth, locked there by gravity.',
        'In rings around Saturn.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pca-mis-belt-everywhere',
      hint: 'It is a band between two specific planets, the inner rocky planets and the outer gas giants.',
    },
    {
      id: 'pca-q2',
      type: 'multiple-choice',
      stem: 'A pupil writes that the asteroid belt is "packed with huge boulders that crash into spacecraft trying to pass through." What is the best correction?',
      tier: 'core',
      options: [
        'The pupil is right. The belt is one of the most crowded regions of the solar system.',
        'The pupil is right, but only on the inner edge near Mars.',
        'The belt is mostly empty space. Asteroids are typically separated by millions of kilometres, and spacecraft pass through unharmed.',
        'There are no asteroids in the belt at all; they are all near Jupiter.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pca-mis-belt-packed',
      hint: 'If every asteroid were lumped into one body, the total mass would still be smaller than the Moon.',
    },
    {
      id: 'pca-q3',
      type: 'multiple-choice',
      stem: 'What is the shape of a typical comet\'s orbit around the Sun?',
      tier: 'core',
      options: [
        'A perfect circle, with the Sun at the centre.',
        'A square path with four sharp corners.',
        'A straight line that goes in once and never comes back.',
        'A highly elliptical orbit, swinging close to the Sun and far out again.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pca-mis-comet-circle',
      hint: 'Year 7 specifications call comet orbits "highly elliptical" to contrast them with the near circular orbits of the planets.',
    },
    {
      id: 'pca-q4',
      type: 'multiple-choice',
      stem: 'A comet is heading away from the Sun on the outbound leg of its orbit. In which direction does its tail point?',
      tier: 'core',
      options: [
        'Behind the comet, trailing it like an exhaust plume from a jet engine.',
        'Toward the nearest planet, pulled by that planet\'s gravity.',
        'Directly away from the Sun, so the tail now leads the comet through space.',
        'Straight up out of the plane of the planets.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pca-mis-tail-trails',
      hint: 'The solar wind and radiation pressure decide the tail direction, not the comet\'s motion.',
    },
    {
      id: 'pca-q5',
      type: 'multiple-choice',
      stem: 'A friend says, "Asteroids and comets are just two names for the same thing." What is the best correction?',
      tier: 'core',
      options: [
        'Your friend is right. The two words are interchangeable.',
        'Asteroids are made of ice and comets are made of rock; the names just got swapped.',
        'Asteroids are rocky bodies, mostly in the belt between Mars and Jupiter. Comets are icy and dusty bodies from the outer solar system, with highly elliptical orbits and bright tails near the Sun.',
        'Asteroids are stars and comets are planets.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pca-mis-same-thing',
      hint: 'Rocky and inner versus icy and outer is the key contrast.',
    },
    {
      id: 'pca-q6',
      type: 'multiple-choice',
      stem: 'Which one of these is the largest body in the asteroid belt, and is also classed as a dwarf planet?',
      tier: 'core',
      options: [
        'Pallas',
        'Vesta',
        'Halley',
        'Ceres',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'NASA\'s Dawn mission orbited this body in 2015.',
    },
    {
      id: 'pca-q7',
      type: 'multiple-choice',
      stem: 'What does it mean for a moon to be "tidally locked" to its planet?',
      tier: 'core',
      options: [
        'The moon\'s spin period equals its orbital period, so the same face always points at the planet.',
        'The moon has stopped spinning entirely, so it sits frozen in space.',
        'The moon causes tides on its planet and nothing else.',
        'The moon is locked in a perfect circle by the planet\'s magnetic field.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pca-mis-lock-no-spin',
      hint: 'The body still spins; the spin and orbit periods just match.',
    },
    {
      id: 'pca-q8',
      type: 'numeric-entry',
      stem: 'Halley\'s Comet has an orbital period of about 76 years and was last seen from the UK in 1986. In which year is its next return expected?',
      tier: 'confident',
      correctAnswer: 2062,
      unit: 'AD',
      xpValue: 15,
      hint: 'Add the period to the last appearance: 1986 plus 76.',
    },
    {
      id: 'pca-q9',
      type: 'numeric-entry',
      stem: 'The Moon\'s orbital period around Earth is about 27.3 days. Because the Moon is tidally locked, how many days does it take to spin once on its own axis?',
      tier: 'confident',
      correctAnswer: 27.3,
      unit: 'days',
      xpValue: 15,
      misconceptionId: 'pca-mis-lock-no-spin',
      hint: 'Tidal lock means spin period equals orbital period.',
    },
    {
      id: 'pca-q10',
      type: 'numeric-entry',
      stem: 'A comet is seen by an astronomer at the Royal Greenwich Observatory in 1910 and again in 1986. What is the orbital period of the comet, in years?',
      tier: 'confident',
      correctAnswer: 76,
      unit: 'years',
      xpValue: 15,
      hint: 'Subtract the earlier sighting from the later one: 1986 minus 1910.',
    },
    {
      id: 'pca-q11',
      type: 'drag-order',
      stem: 'Put the steps in order to explain why the "far side" of the Moon is NOT a permanently dark side.',
      tier: 'confident',
      items: [
        'Conclude: over a full lunar month the far side receives the same average sunlight as the near side. "Far" means hidden from Earth, not hidden from the Sun.',
        'Start with the lock: the Moon is tidally locked to Earth, so the same hemisphere (the near side) always points at Earth.',
        'Note what the lock does NOT control: it fixes the Moon\'s orientation to Earth, not to the Sun.',
        'Track the Sun across an orbit: as the Moon goes around Earth, the Sun lights the near side at full Moon and the far side at new Moon.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      misconceptionId: 'pca-mis-far-side-dark',
      hint: 'Lock fact, what the lock does not do, sunlight across an orbit, average over a month.',
    },
    {
      id: 'pca-q12',
      type: 'multiple-choice',
      stem: 'A comet is sweeping in toward its closest pass to the Sun. Which of these correctly describes what happens to the comet\'s nucleus and tail?',
      tier: 'confident',
      options: [
        'The nucleus stays cold; no tail forms.',
        'The nucleus heats up, ice sublimates, and a glowing coma and tail form, with the tail pointing away from the Sun.',
        'The nucleus melts into a liquid puddle that drifts behind the comet.',
        'The nucleus splits into two new asteroids.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pca-mis-tail-trails',
      hint: 'Sublimation is solid straight to gas. The pushed gas and dust form the tail.',
    },
    {
      id: 'pca-q13',
      type: 'multiple-choice',
      stem: 'Most major moons of the giant planets Jupiter, Saturn, Uranus and Neptune are tidally locked to their parent planet. Which sentence best explains why this is so common?',
      tier: 'confident',
      options: [
        'Tidal lock is set up by the magnetic field of each giant planet at the moment the moon forms.',
        'Tidal lock only happens for moons that are larger than Earth.',
        'Tidal lock is a coincidence; the spin periods just happen to match by chance.',
        'Tidal lock is the natural long-term result of gravity acting between a small body and a much larger one over billions of years, gradually slowing the small body\'s spin until it matches the orbit.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Gravity, time, and the size contrast between moon and planet are the key ingredients.',
    },
    {
      id: 'pca-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why a comet\'s tail leads the comet on the way out from the Sun.',
      tier: 'confident',
      steps: [
        'Note the situation: a comet is past its closest pass and is moving outward, away from the Sun.',
        'Recall the rule: the solar wind and radiation pressure push gas and dust from the comet directly outward from the Sun.',
        'Apply the rule to the outbound leg: "away from the Sun" is now in the same direction as "ahead of the comet" along its path.',
        null,
        'State the answer: the tail therefore leads the comet through space on the outbound leg, pointing ahead of it, not behind it.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Combine the two facts: if the tail points away from the Sun, and "away from the Sun" lines up with "ahead of the comet" while the comet is receding, then the tail lines up with the comet\'s direction of motion.',
      xpValue: 15,
      misconceptionId: 'pca-mis-tail-trails',
    },
    {
      id: 'pca-q15',
      type: 'drag-order',
      stem: 'Put the steps in order to explain what happens to an icy comet nucleus as its orbit brings it close to the Sun and then back out again.',
      tier: 'confident',
      items: [
        'Closest pass: tail is at its longest and brightest, streaming directly away from the Sun.',
        'Far from the Sun: nucleus is cold and inactive, no coma or tail visible.',
        'Approaching the Sun: ice sublimates, a glowing coma forms around the nucleus, a tail begins to grow.',
        'Outbound leg: nucleus cools again, the tail shrinks and fades as the comet heads back to the outer solar system.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
      hint: 'Cold and quiet, then warming and growing a tail, then peak at closest pass, then fading on the way out.',
    },
    {
      id: 'pca-q16',
      type: 'spot-misconception',
      stem: 'A school class is shown a diagram of the Moon orbiting the Earth. Yusuf describes what tidal locking means.',
      tier: 'challenge',
      statements: [
        {
          text: 'Yusuf says: "The Moon is tidally locked to Earth, which means the Moon has stopped spinning. That is why we always see the same face."',
          isMisconception: true,
        },
        {
          text: 'Yusuf says: "The Moon is tidally locked to Earth, which means the Moon\'s spin period equals its orbital period of about 27.3 days. The Moon does still spin; one full turn just takes as long as one full orbit, so the same face always points at Earth."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pca-mis-lock-no-spin',
    },
    {
      id: 'pca-q17',
      type: 'spot-misconception',
      stem: 'Two pupils are arguing about the shape of orbits in the solar system. Priya describes how she pictures them.',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya says: "Planets, asteroids and comets all follow the same near circular orbits around the Sun. A comet is just a special asteroid with a tail."',
          isMisconception: true,
        },
        {
          text: 'Priya says: "Planets and most asteroids follow near circular orbits in the same plane. Comets, by contrast, follow highly elliptical orbits that swing close to the Sun and back out again, and only develop tails when they are heated near the Sun."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pca-mis-comet-circle',
    },
    {
      id: 'pca-q18',
      type: 'multiple-choice',
      stem: 'Halley\'s Comet was first calculated to be a returning periodic comet by a UK astronomer who later became Astronomer Royal. Which one of these is that astronomer?',
      tier: 'challenge',
      options: [
        'Isaac Newton',
        'William Herschel',
        'Edmond Halley',
        'Patrick Moore',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: 'The comet itself was named after him.',
    },
    {
      id: 'pca-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why the far side of the Moon is not a dark side, even though we never see it from Earth.',
      tier: 'challenge',
      steps: [
        'Note the setup: the Moon is tidally locked to Earth, so the near side always faces Earth and the far side never faces Earth.',
        'Recall what tidal lock does and does NOT do: it locks the orientation between the Moon and Earth, but it does not lock the Moon\'s orientation to the Sun.',
        'Picture a full lunar month: as the Moon orbits Earth, the Sun shines on different parts of the Moon at different points in the orbit.',
        null,
        'State the answer: the far side gets, on average over a full lunar month, the same amount of sunlight as the near side. "Far" means hidden from Earth, not hidden from the Sun.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Over a full orbit, every part of the Moon\'s surface is sunlit for about half the month and in darkness for the other half. The far side is no exception; it just happens to be sunlit while the near side is dark, and vice versa.',
      xpValue: 20,
      misconceptionId: 'pca-mis-far-side-dark',
    },
    {
      id: 'pca-q20',
      type: 'drag-order',
      stem: 'Put the bodies in order, from the body whose orbit is closest to a perfect circle, through to the body whose orbit is the most elliptical and far reaching.',
      tier: 'challenge',
      items: [
        'A typical comet from the Oort Cloud on its way to a close pass of the Sun.',
        'A main belt asteroid such as Vesta, between Mars and Jupiter.',
        'The Earth on its yearly orbit of the Sun.',
        'Halley\'s Comet, returning roughly every 76 years.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 20,
      hint: 'Planets are near circular, main belt asteroids are roughly circular, periodic comets are elliptical, long period comets are the most stretched of all.',
    },
    {
      id: 'pca-q21',
      type: 'numeric-entry',
      stem: 'The Soviet probe Luna 3 took the first photographs of the far side of the Moon in October 1959. How many years after that did the first humans land on the Moon, in 1969?',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'years',
      xpValue: 20,
      hint: 'Subtract the Luna 3 year from the Apollo 11 year: 1969 minus 1959.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, candidates wrote that the asteroid belt is densely packed with body sized rocks that hinder space travel, rather than mostly empty space with average separations of millions of kilometres.
    {
      id: 'pca-mis-belt-packed',
      description:
        'Believing the asteroid belt is densely packed with boulders, as shown in adventure films, rather than mostly empty space with bodies far apart.',
      triggerAnswer: 'belt-packed',
      correction:
        'The asteroid belt is mostly empty. Asteroids are typically separated by millions of kilometres. The total mass of every asteroid combined is smaller than the mass of the Moon.',
      reExplanation:
        'Films often show the belt as a busy field of tumbling boulders. Real spacecraft, including ESA and NASA missions to Jupiter and Saturn, pass straight through without any need to dodge. To visit Vesta or Ceres, the Dawn probe had to be aimed there on purpose. The belt is mostly empty space, with the rocky bodies scattered across vast distances.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, Paper J259/02, candidates wrote that comets follow circular orbits like planets and only differ from asteroids by colour, missing the highly elliptical nature of comet orbits.
    {
      id: 'pca-mis-comet-circle',
      description:
        'Believing that comets follow near circular orbits like planets, rather than highly elliptical orbits that swing close to the Sun and back out again.',
      triggerAnswer: 'comet-circle',
      correction:
        'Comet orbits are highly elliptical. They swing in close to the Sun, where the ice heats and the tail forms, and then back out to the outer solar system for centuries or millennia.',
      reExplanation:
        'Planets and most asteroids travel on near circular paths in the same plane. Comets do not. Their orbits are stretched ellipses that pass close to the Sun at perihelion and reach far out to the Kuiper Belt or the Oort Cloud at aphelion. Halley\'s Comet sweeps from inside Earth\'s orbit out beyond Neptune on each 76 year loop. The elliptical shape is the defining feature of a comet orbit.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, Paper 1PH0/2H, candidates wrote that a comet\'s tail trails behind it like an exhaust plume, rather than always pointing away from the Sun.
    {
      id: 'pca-mis-tail-trails',
      description:
        'Believing a comet\'s tail trails behind the comet like an exhaust plume, rather than always pointing away from the Sun.',
      triggerAnswer: 'tail-trails',
      correction:
        'A comet\'s tail always points away from the Sun, no matter which way the comet is moving. On the outbound leg, the tail actually leads the comet through space.',
      reExplanation:
        'The dust and gas in a comet\'s tail are pushed by the solar wind and radiation pressure, both streaming outward from the Sun. The comet\'s own motion does not set the tail direction. Inbound, the tail trails the nucleus because away from the Sun is also behind the comet. Outbound, the tail leads the nucleus because away from the Sun is now ahead of it.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1H, candidates wrote that tidal locking means the Moon no longer spins on its own axis, rather than that the spin period equals the orbital period.
    {
      id: 'pca-mis-lock-no-spin',
      description:
        'Believing tidal locking means the smaller body has stopped spinning, rather than that its spin period equals its orbital period.',
      triggerAnswer: 'lock-no-spin',
      correction:
        'A tidally locked body still spins. Its spin period just matches its orbital period, so the same face always points at the parent.',
      reExplanation:
        'For the Moon, both the spin period and the orbital period are about 27.3 days. If the Moon had truly stopped spinning, then as it travelled around Earth we would see every side of it across one month. Because the spin matches the orbit instead, the Moon turns just enough to keep one hemisphere pointed at Earth at all times. The body is spinning, but in lockstep with its orbit.',
    },
    // Source: NASA Moon: Why the far side is not the dark side, education resource, paired with OCR GCSE Physics J259 examiner report June 2022 Paper J259/02 noting the persistent "dark side" misconception.
    {
      id: 'pca-mis-far-side-dark',
      description:
        'Believing the far side of the Moon is permanently dark because the Sun never reaches it, rather than that it is simply hidden from Earth.',
      triggerAnswer: 'far-side-dark',
      correction:
        'The far side of the Moon gets the same average sunlight as the near side over a full lunar month. It is hidden from Earth, not from the Sun.',
      reExplanation:
        'As the Moon orbits Earth, the Sun shines on different parts of it at different points in the orbit. At new Moon, the far side is fully sunlit while the near side is in darkness. At full Moon, the opposite holds. Over a complete month, both hemispheres receive the same amount of sunlight on average. The label "far side" simply means the side hidden from view on Earth.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, Paper 1PH0/2H, candidates conflated asteroids and comets as interchangeable terms, missing the rocky inner versus icy outer distinction.
    {
      id: 'pca-mis-same-thing',
      description:
        'Believing that asteroids and comets are interchangeable names for the same kind of body, missing that the two have different compositions, origins, and orbits.',
      triggerAnswer: 'same-thing',
      correction:
        'Asteroids are rocky bodies, mostly in the belt between Mars and Jupiter. Comets are icy and dusty bodies from the outer solar system on highly elliptical orbits.',
      reExplanation:
        'The two words name two distinct kinds of body. Asteroids are mainly rock and metal, sit in roughly circular orbits between Mars and Jupiter, and do not grow tails. Comets are mainly ice and dust, come from the Kuiper Belt or the Oort Cloud far beyond Neptune, and grow bright tails near the Sun. The key idea: inner material is rocky, outer material is icy.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1H, candidates wrote that the asteroid belt forms a thick spherical shell around the Sun, rather than a flat band in the same plane as the planets.
    {
      id: 'pca-mis-belt-everywhere',
      description:
        'Believing the asteroid belt forms a thick spherical shell around the Sun, rather than a flat band between Mars and Jupiter close to the plane of the planets.',
      triggerAnswer: 'belt-everywhere',
      correction:
        'The asteroid belt is a flat band between the orbits of Mars and Jupiter, close to the same plane as the planets. It is not a sphere wrapped around the Sun.',
      reExplanation:
        'Like the planets, asteroids in the main belt formed from the same flat disc of gas and dust around the young Sun. Their orbits stay close to that disc, in a wide but thin band between Mars and Jupiter. Spherical clouds of small bodies do exist further out, namely the Oort Cloud that hosts long period comets. The main belt itself is flat and band shaped, not a sphere.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceCometsAsteroidsZoneNodes = [spaceCometsAsteroids]
