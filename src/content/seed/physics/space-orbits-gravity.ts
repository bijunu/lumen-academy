import type { SkillNode } from '@/types/content'

const CANNONBALL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Newton's cannonball: orbits are gravity plus sideways motion</text>

    <!-- Earth -->
    <circle cx="400" cy="260" r="80" stroke-width="2" />
    <text x="400" y="265" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Mountain top with cannon -->
    <polygon points="380,180 420,180 410,160 390,160" fill="currentColor" stroke="none" />
    <text x="400" y="155" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cannon on a tall mountain</text>

    <!-- Path A: slow shot, falls back to ground -->
    <path d="M 410 170 Q 460 190 470 230" stroke-width="2" stroke-dasharray="4,4" />
    <text x="500" y="220" text-anchor="start" font-size="12" stroke="none" fill="currentColor">A: slow shot lands nearby</text>

    <!-- Path B: medium shot, longer arc -->
    <path d="M 410 170 Q 540 180 560 270" stroke-width="2" stroke-dasharray="4,4" />
    <text x="580" y="270" text-anchor="start" font-size="12" stroke="none" fill="currentColor">B: faster shot lands further</text>

    <!-- Path C: orbit, full curve around Earth -->
    <circle cx="400" cy="260" r="110" stroke-width="2" />
    <text x="540" y="160" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">C: enough sideways speed</text>
    <text x="540" y="178" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">means it falls AROUND</text>
    <text x="540" y="196" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Earth: this is orbit</text>

    <!-- Caption -->
    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Gravity always pulls the ball toward Earth's centre.</text>
    <text x="400" y="392" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">In orbit, Earth's surface curves away at the same rate the ball falls.</text>
  </g>
`

const PLANET_SPEEDS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Inner planets orbit in shorter years; outer planets take much longer</text>

    <!-- Sun at left -->
    <circle cx="80" cy="220" r="35" fill="currentColor" stroke="none" />
    <text x="80" y="280" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Sun</text>

    <!-- Mercury orbit -->
    <path d="M 80 220 A 60 60 0 1 1 81 220" stroke-width="1" stroke-dasharray="2,4" />
    <circle cx="140" cy="220" r="5" fill="currentColor" stroke="none" />
    <text x="155" y="225" text-anchor="start" font-size="11" stroke="none" fill="currentColor">Mercury: 88 Earth days</text>

    <!-- Venus orbit -->
    <path d="M 80 220 A 90 90 0 1 1 81 220" stroke-width="1" stroke-dasharray="2,4" />
    <circle cx="170" cy="220" r="6" fill="currentColor" stroke="none" />
    <text x="185" y="248" text-anchor="start" font-size="11" stroke="none" fill="currentColor">Venus: 225 days</text>

    <!-- Earth orbit -->
    <path d="M 80 220 A 130 130 0 1 1 81 220" stroke-width="1" stroke-dasharray="2,4" />
    <circle cx="210" cy="220" r="7" fill="currentColor" stroke="none" />
    <text x="225" y="275" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">Earth: 365.25 days</text>

    <!-- Mars orbit -->
    <path d="M 80 220 A 170 170 0 1 1 81 220" stroke-width="1" stroke-dasharray="2,4" />
    <circle cx="250" cy="220" r="6" fill="currentColor" stroke="none" />
    <text x="265" y="305" text-anchor="start" font-size="11" stroke="none" fill="currentColor">Mars: 687 days (about 1.9 Earth years)</text>

    <!-- Outer planets summary panel on the right -->
    <rect x="500" y="80" width="280" height="240" stroke-width="2" />
    <text x="640" y="105" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Outer planets (years per orbit)</text>
    <text x="520" y="135" text-anchor="start" font-size="13" stroke="none" fill="currentColor">Jupiter: about 12 Earth years</text>
    <text x="520" y="160" text-anchor="start" font-size="13" stroke="none" fill="currentColor">Saturn: about 29 Earth years</text>
    <text x="520" y="185" text-anchor="start" font-size="13" stroke="none" fill="currentColor">Uranus: about 84 Earth years</text>
    <text x="520" y="210" text-anchor="start" font-size="13" stroke="none" fill="currentColor">Neptune: about 165 Earth years</text>
    <text x="520" y="245" text-anchor="start" font-size="12" font-style="italic" stroke="none" fill="currentColor">A bigger orbit means a longer year:</text>
    <text x="520" y="263" text-anchor="start" font-size="12" font-style="italic" stroke="none" fill="currentColor">gravity is weaker further from the Sun,</text>
    <text x="520" y="281" text-anchor="start" font-size="12" font-style="italic" stroke="none" fill="currentColor">and the loop around the Sun is also longer.</text>

    <!-- Bottom note -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Pattern: as distance from the Sun increases, orbit period increases.</text>
  </g>
`

const ORBIT_DIRECTIONS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Gravity pulls inward; sideways motion keeps the orbit going</text>

    <!-- Earth centre -->
    <circle cx="400" cy="220" r="40" stroke-width="2" />
    <text x="400" y="225" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>

    <!-- Moon path -->
    <circle cx="400" cy="220" r="150" stroke-width="2" stroke-dasharray="4,4" />
    <circle cx="550" cy="220" r="14" stroke-width="2" />
    <text x="550" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Moon</text>

    <!-- Gravity arrow toward Earth -->
    <line x1="536" y1="220" x2="445" y2="220" stroke-width="2" />
    <polygon points="453,212 437,220 453,228" fill="currentColor" stroke="none" />
    <text x="490" y="210" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Gravity (toward Earth)</text>

    <!-- Sideways velocity arrow tangent to orbit -->
    <line x1="550" y1="200" x2="550" y2="120" stroke-width="2" />
    <polygon points="542,128 550,112 558,128" fill="currentColor" stroke="none" />
    <text x="600" y="160" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Sideways motion</text>

    <!-- Caption -->
    <text x="400" y="320" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Without gravity, the Moon would travel in a straight line.</text>
    <text x="400" y="340" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Without sideways motion, the Moon would simply fall into Earth.</text>
    <text x="400" y="370" text-anchor="middle" font-size="13" font-style="italic" stroke="none" fill="currentColor">Together they give a curved path: an orbit.</text>
  </g>
`

export const spaceOrbitsGravity: SkillNode = {
  id: 'physics-space-orbits-gravity',
  title: 'Orbits and Gravity',
  description:
    'A planet orbiting the Sun, or a moon orbiting a planet, follows a curved path because gravity pulls it inward while its sideways motion would carry it in a straight line. The two effects together produce a near-circular loop. Inner planets feel stronger gravity and travel smaller loops, so their years are short: Mercury takes about 88 Earth days while Earth takes 365.25 days. Outer planets feel weaker gravity and travel much longer loops, so Jupiter takes about 12 Earth years and Neptune about 165. By the end of this node, you can explain why orbits curve, link orbital period to distance from the Sun, and spot the common misconception that there is no gravity in space.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space and the Solar System',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system', 'physics-gravity-inverse-square'],
  curriculum: {
    ks3Objective:
      'Gravity force, gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); circular motion of planets and moons.',
    awardingBodies: {
      aqa: '4.8.1.2 Orbital motion, satellites and gravity; circular orbits require a centripetal force provided by gravity (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.5 to 8.7 gravitational force, orbits of planets, moons and satellites (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; orbital motion under gravity for planets and moons (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 Specification 4.8.1.2, Orbital motion; uses the Newton's cannonball thought experiment to introduce orbit as continual falling.
    {
      id: 'pog-cannonball',
      title: 'Newton\'s cannonball: an orbit is falling sideways',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a horizontal shot becomes an orbit when gravity and sideways motion balance.',
      data: {
        viewBox: '0 0 800 400',
        svg: CANNONBALL_SVG,
        hotspots: [
          {
            id: 'pog-cb-slow',
            x: 60,
            y: 55,
            label: 'A slow shot lands nearby',
            description:
              'A cannonball fired horizontally from a tall mountain follows a curved arc. Gravity pulls it toward Earth\'s centre while it travels sideways. A slow shot does not get far before it lands.',
          },
          {
            id: 'pog-cb-medium',
            x: 73,
            y: 68,
            label: 'A bigger sideways push reaches further',
            description:
              'If the cannonball leaves the mountain with more sideways motion, it travels further before it lands. The path is still a curve because gravity is still pulling it inward the whole time.',
          },
          {
            id: 'pog-cb-orbit',
            x: 78,
            y: 40,
            label: 'Enough sideways motion gives an orbit',
            description:
              'At a certain sideways speed, the surface of Earth curves away just as much as the cannonball falls. The ball keeps falling toward Earth, yet never reaches it. That continual falling around Earth is what we call an orbit.',
          },
          {
            id: 'pog-cb-gravity',
            x: 50,
            y: 93,
            label: 'Gravity is still acting in orbit',
            description:
              'There is no "no gravity" zone in space. The Moon, the International Space Station, and every satellite are all being pulled by Earth\'s gravity right now. That pull is the very thing that bends their straight-line motion into a closed loop.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 Topic 8 Astronomy, planetary data and orbital periods (NASA Solar System fact sheet aligned).
    {
      id: 'pog-planet-speeds',
      title: 'Year lengths: closer planets, shorter years',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the orbital period of each planet and link it to its distance from the Sun.',
      data: {
        viewBox: '0 0 800 400',
        svg: PLANET_SPEEDS_SVG,
        hotspots: [
          {
            id: 'pog-ps-mercury',
            x: 30,
            y: 50,
            label: 'Mercury: about 88 Earth days',
            description:
              'Mercury is the closest planet to the Sun. The gravity it feels is strong, and its loop around the Sun is short. One full Mercury year takes about 88 Earth days.',
          },
          {
            id: 'pog-ps-earth',
            x: 35,
            y: 65,
            label: 'Earth: 365.25 days',
            description:
              'Earth is the third planet from the Sun. Its orbit takes 365.25 days. The extra quarter-day is why we add a leap day every four years to keep our calendar lined up with the seasons.',
          },
          {
            id: 'pog-ps-mars',
            x: 50,
            y: 78,
            label: 'Mars: about 687 days, almost 1.9 Earth years',
            description:
              'Mars sits just outside Earth. Its loop is longer, so a Mars year is about 687 Earth days, roughly 1.9 Earth years. A child who is 10 on Earth would be only about 5 in Mars years.',
          },
          {
            id: 'pog-ps-outer',
            x: 80,
            y: 35,
            label: 'Outer planets: years measured in decades',
            description:
              'Further out, gravity from the Sun is weaker and the loop is much longer. Jupiter takes about 12 Earth years, Saturn about 29, Uranus about 84 and Neptune about 165. Neptune has not even completed one full orbit since it was discovered in 1846.',
          },
          {
            id: 'pog-ps-pattern',
            x: 50,
            y: 93,
            label: 'The pattern: bigger orbit means longer year',
            description:
              'Across all planets, the rule holds: the further a planet is from the Sun, the longer its year. Two reasons combine. Gravity is weaker at greater distance, and the path around the Sun is also a much bigger loop.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 P8.1, orbital motion under gravity; vector picture of inward gravity and tangential motion.
    {
      id: 'pog-directions',
      title: 'Why orbits curve: gravity pulls inward',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the two pieces of motion that combine to give a curved orbit.',
      data: {
        viewBox: '0 0 800 400',
        svg: ORBIT_DIRECTIONS_SVG,
        hotspots: [
          {
            id: 'pog-dir-gravity',
            x: 55,
            y: 50,
            label: 'Gravity acts toward the centre',
            description:
              'Earth\'s gravity always pulls the Moon directly toward Earth\'s centre. The pull never points along the direction of motion; it points sideways to it, which is what bends the path.',
          },
          {
            id: 'pog-dir-sideways',
            x: 75,
            y: 35,
            label: 'Sideways motion would be a straight line',
            description:
              'If gravity suddenly switched off, the Moon would keep moving in the direction it was already heading: a straight line into space. This is Newton\'s first law: an object keeps going in a straight line unless a force acts on it.',
          },
          {
            id: 'pog-dir-combine',
            x: 50,
            y: 80,
            label: 'Together they give a curve',
            description:
              'At every instant, the Moon falls a little toward Earth and travels a little sideways. The result is a path that wraps around Earth: a near-circular orbit. Real planet and moon orbits are slightly elliptical, but very close to circles for KS3.',
          },
          {
            id: 'pog-dir-misconception',
            x: 50,
            y: 93,
            label: 'No gravity in space is wrong',
            description:
              'Some people picture astronauts floating because gravity has run out. Not so. The International Space Station is held in orbit because Earth\'s gravity is still pulling it. Astronauts float because they are falling around Earth together with the station.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 Topic 4.8.1.2; qualitative comparison of inner-planet vs outer-planet orbital periods.
    {
      id: 'pog-worked-1',
      title: 'Which planet has the longer year: Mercury or Jupiter?',
      steps: [
        {
          explanation:
            'Set out the situation. We compare two planets at very different distances from the Sun: Mercury, the closest, and Jupiter, the largest gas planet beyond the asteroid belt.',
        },
        {
          explanation:
            'State what we know about each.',
          maths: 'Mercury: 88 Earth days. Jupiter: about 12 Earth years.',
        },
        {
          explanation:
            'Apply the rule. A planet further from the Sun has a longer orbit and feels weaker gravity, so it takes longer to complete one loop. Jupiter is much further than Mercury.',
        },
        {
          explanation:
            'Conclude. Jupiter has by far the longer year. One Jupiter year equals about 50 Mercury years (12 Earth years is roughly 4380 Earth days, and 4380 / 88 is just under 50). The pattern is consistent with the rule.',
        },
        {
          explanation:
            'Sense check. Mercury, the closest planet, has the shortest year; Neptune, the furthest, has the longest. Jupiter sits in between but well past Earth, so its year of about 12 Earth years sits sensibly between Mars (about 1.9) and Saturn (about 29).',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 Topic 8.5 to 8.7; explanation of why orbital motion needs both inward gravity and sideways motion.
    {
      id: 'pog-worked-2',
      title: 'Why does the Moon not simply fall onto Earth?',
      steps: [
        {
          explanation:
            'Set out the situation. The Moon is held to Earth by gravity. So why does it not drop straight onto Earth\'s surface?',
        },
        {
          explanation:
            'Identify the two pieces of motion. First, gravity pulls the Moon directly toward Earth\'s centre. Second, the Moon already has sideways motion along its orbit.',
        },
        {
          explanation:
            'Combine the two. At every instant, the Moon falls a little toward Earth, but it also moves a little sideways. Earth\'s surface curves away below the Moon at the same rate the Moon falls.',
          maths: 'Inward pull (gravity) + sideways motion = curved path',
        },
        {
          explanation:
            'State the result. The Moon never gets any closer to Earth on average, because the sideways motion keeps carrying it around. It is permanently falling, but always missing Earth.',
        },
        {
          explanation:
            'Sense check. If the Moon stopped moving sideways, gravity alone would pull it straight in. If gravity stopped, the Moon would shoot off in a straight line. Real orbits need both, and a real value of sideways motion (about 1 kilometre per second for the Moon) gives the near-circular loop we observe.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pog-q1',
      type: 'multiple-choice',
      stem: 'What keeps a planet moving in an orbit around the Sun?',
      tier: 'core',
      options: [
        'The Sun\'s heat pushing it outward.',
        'A solid track in space along its path.',
        'The Sun\'s gravity pulling it toward the Sun.',
        'Nothing; planets just keep moving on their own.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pog-mis-no-gravity-in-space',
      hint: 'The force that bends a straight-line motion into an orbit is the Sun\'s pull on the planet.',
    },
    {
      id: 'pog-q2',
      type: 'numeric-entry',
      stem: 'About how many Earth days does Mercury take to complete one orbit of the Sun?',
      tier: 'core',
      correctAnswer: 88,
      unit: 'days',
      xpValue: 10,
      hint: 'Mercury is the closest planet to the Sun, with the shortest year.',
    },
    {
      id: 'pog-q3',
      type: 'numeric-entry',
      stem: 'How many days are in one Earth year? Give your answer to 2 decimal places.',
      tier: 'core',
      correctAnswer: 365.25,
      tolerance: 0.01,
      unit: 'days',
      xpValue: 10,
      hint: 'The extra quarter-day is why we have a leap year every four years.',
    },
    {
      id: 'pog-q4',
      type: 'multiple-choice',
      stem: 'Which statement is true about gravity in space?',
      tier: 'core',
      options: [
        'There is no gravity once you leave Earth\'s atmosphere.',
        'Gravity is the force that keeps the Moon in orbit around Earth.',
        'Gravity only acts on objects sitting on a solid surface.',
        'Gravity becomes a push rather than a pull in space.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pog-mis-no-gravity-in-space',
      hint: 'If there were no gravity in space, the Moon would not stay near Earth.',
    },
    {
      id: 'pog-q5',
      type: 'numeric-entry',
      stem: 'Mercury takes about 88 Earth days for one full orbit. How many Mercury orbits fit into 264 Earth days?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'orbits',
      xpValue: 10,
      hint: 'Divide the total Earth days by the Mercury year: 264 / 88.',
    },
    {
      id: 'pog-q6',
      type: 'multiple-choice',
      stem: 'In which direction does Earth\'s gravity pull the Moon?',
      tier: 'core',
      options: [
        'Along the Moon\'s direction of travel.',
        'Directly toward Earth\'s centre.',
        'Outward, away from Earth.',
        'In the direction of the Sun.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pog-mis-gravity-wrong-direction',
      hint: 'Gravity always points toward the centre of the body doing the pulling.',
    },
    {
      id: 'pog-q7',
      type: 'numeric-entry',
      stem: 'Mars has an orbital period of about 687 Earth days. To the nearest whole Earth year, how many Earth years does one Mars year last? (1 Earth year = 365.25 days.)',
      tier: 'core',
      correctAnswer: 2,
      unit: 'Earth years',
      xpValue: 10,
      hint: 'Divide 687 by 365.25 and round to the nearest whole number.',
    },
    {
      id: 'pog-q8',
      type: 'multiple-choice',
      stem: 'Why does Neptune take much longer than Earth to complete one orbit of the Sun?',
      tier: 'confident',
      options: [
        'Neptune is colder, so it travels at lower speed.',
        'Neptune is much further from the Sun, so gravity is weaker and its loop is much longer.',
        'Neptune is heavier, so it moves more slowly.',
        'Neptune orbits in the opposite direction.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pog-mis-temperature-causes-period',
      hint: 'The reason is gravity and orbit size, not temperature or mass of the planet.',
    },
    {
      id: 'pog-q9',
      type: 'multiple-choice',
      stem: 'Which best describes the shape of a planetary orbit at KS3 level?',
      tier: 'confident',
      options: [
        'A perfect square.',
        'A straight line.',
        'A spiral inward toward the Sun.',
        'A near-circular ellipse.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pog-mis-orbits-perfect-circles',
      hint: 'Orbits look close to a circle, but they are slightly stretched ovals (ellipses).',
    },
    {
      id: 'pog-q10',
      type: 'multiple-choice',
      stem: 'If the Sun\'s gravity suddenly switched off, what would happen to Earth?',
      tier: 'confident',
      options: [
        'Earth would fall directly into the Sun.',
        'Earth would slow down and stop moving.',
        'Earth would travel in a straight line off into space.',
        'Earth would continue in the same circular orbit by itself.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pog-mis-orbit-needs-no-force',
      hint: 'Newton\'s first law: an object moves in a straight line unless a force acts on it.',
    },
    {
      id: 'pog-q11',
      type: 'numeric-entry',
      stem: 'Jupiter has an orbital period of about 12 Earth years. How many Jupiter years would pass in 60 Earth years?',
      tier: 'confident',
      correctAnswer: 5,
      unit: 'Jupiter years',
      xpValue: 15,
      hint: 'Divide 60 by 12.',
    },
    {
      id: 'pog-q12',
      type: 'multiple-choice',
      stem: 'A pupil says: "Gravity points along the direction the Moon is travelling, that is what keeps it going." Which sentence corrects this?',
      tier: 'confident',
      options: [
        'They are right; gravity always acts in the direction of motion.',
        'Gravity does not act on the Moon at all once it is in orbit.',
        'Gravity points toward Earth\'s centre, sideways to the Moon\'s motion; this is what bends the path into an orbit.',
        'Gravity from the Sun replaces Earth\'s gravity for the Moon.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pog-mis-gravity-wrong-direction',
      hint: 'Gravity always points toward the centre of the object doing the pulling.',
    },
    {
      id: 'pog-q13',
      type: 'drag-order',
      stem: 'Put the planets in order of orbital period, shortest year first.',
      tier: 'confident',
      items: [
        'Jupiter (about 12 Earth years)',
        'Mercury (about 88 Earth days)',
        'Earth (365.25 days)',
        'Mars (about 687 Earth days)',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      hint: 'Closer to the Sun means a shorter year. Start with Mercury.',
    },
    {
      id: 'pog-q14',
      type: 'spot-misconception',
      stem: 'Two pupils discuss why the International Space Station\'s astronauts float.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says: "They float because there is no gravity that far from Earth." This is wrong; Earth\'s gravity is still pulling them, which is why they stay in orbit.',
          isMisconception: true,
        },
        {
          text: 'Tom says: "They float because the station and the astronauts inside are all falling around Earth together." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pog-mis-no-gravity-in-space',
    },
    {
      id: 'pog-q15',
      type: 'multiple-choice',
      stem: 'A pupil in a Year 7 class in Norwich says: "Outer planets take longer to orbit the Sun because it is colder out there and matter moves more slowly when it is cold." What is the actual reason?',
      tier: 'confident',
      options: [
        'Gravity from the Sun is weaker at greater distance and the orbital loop is much bigger, so the period is longer.',
        'The cold makes the planet shrink, so its orbit gets longer.',
        'The Sun loses energy by the time its gravity reaches the outer planets.',
        'Outer planets have less mass, so they cannot move at higher speed.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pog-mis-temperature-causes-period',
      hint: 'Temperature has nothing to do with it. The clue is gravity and the size of the orbit.',
    },
    {
      id: 'pog-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is working out how many Earth years fit into one Saturn year (Saturn orbits in about 29 Earth years).',
      tier: 'challenge',
      steps: [
        'Write the data: Saturn orbital period = 29 Earth years.',
        'Decide the question: how many Earth years fit into 1 Saturn year.',
        null,
        'Read off the answer: 1 Saturn year = 29 Earth years.',
        'Sense check: Saturn is far from the Sun, so one Saturn year should be many Earth years; 29 is sensible.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Recognise that one Saturn year is the orbital period itself, so the answer is just the period in Earth years: 29.',
      xpValue: 20,
    },
    {
      id: 'pog-q17',
      type: 'multiple-choice',
      stem: 'Which statement best explains why a satellite stays in orbit around Earth?',
      tier: 'challenge',
      options: [
        'It is so high up that Earth\'s gravity cannot reach it.',
        'The vacuum of space holds it up.',
        'Earth\'s gravity pulls it inward while its sideways motion would carry it in a straight line, giving a curved path.',
        'It is propelled by rockets the whole time it is in orbit.',
      ],
      correctIndex: 2,
      xpValue: 20,
      misconceptionId: 'pog-mis-orbit-needs-no-force',
      hint: 'Orbit is the same idea as Newton\'s cannonball: continual falling combined with sideways motion.',
    },
    {
      id: 'pog-q18',
      type: 'numeric-entry',
      stem: 'Neptune has an orbital period of about 165 Earth years. How many Earth years would 4 full Neptune orbits last?',
      tier: 'challenge',
      correctAnswer: 660,
      unit: 'Earth years',
      xpValue: 20,
      hint: 'Multiply 165 by 4.',
    },
    {
      id: 'pog-q19',
      type: 'spot-misconception',
      stem: 'A homework asks: which planets have longer years than Earth, and why?',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam writes: "Only planets further from the Sun than Earth (Mars, Jupiter, Saturn, Uranus, Neptune) have longer years, because their orbits are longer and gravity from the Sun is weaker." This is right.',
          isMisconception: false,
        },
        {
          text: 'Aisha writes: "All planets except Earth have longer years, because Earth is special." This is wrong; Mercury and Venus, which are closer to the Sun than Earth, both have shorter years (about 88 and 225 days).',
          isMisconception: true,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pog-mis-earth-is-special',
    },
    {
      id: 'pog-q20',
      type: 'numeric-entry',
      stem: 'A space probe orbits the Sun once every 4 Earth years. How many full orbits does it complete in 28 Earth years?',
      tier: 'challenge',
      correctAnswer: 7,
      unit: 'orbits',
      xpValue: 20,
      hint: 'Divide 28 by 4.',
    },
    {
      id: 'pog-q21',
      type: 'multiple-choice',
      stem: 'A pupil claims: "If a satellite is in a circular orbit, no force acts on it, because it moves at a steady speed." Which sentence corrects this?',
      tier: 'challenge',
      options: [
        'They are right; circular orbit means no force is needed.',
        'Earth\'s gravity continually acts inward on the satellite; without that force, the satellite would travel in a straight line off into space.',
        'A force is only needed if the satellite is speeding up.',
        'The satellite carries its own internal force, so no outside force is needed.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pog-mis-orbit-needs-no-force',
      hint: 'Steady speed in a circle still means changing direction, and a change of direction needs a force (Newton\'s first law).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 2F; candidates wrote that astronauts float because there is no gravity in space.
    {
      id: 'pog-mis-no-gravity-in-space',
      description:
        'Believing there is no gravity in space, so orbiting objects float because no force acts on them.',
      triggerAnswer: 'no-gravity-in-space',
      correction:
        'Earth\'s gravity reaches every satellite and the Moon. Astronauts float because they are falling around Earth together with their craft, not because gravity is absent.',
      reExplanation:
        'Gravity weakens with distance but never vanishes. The International Space Station is held in orbit by Earth\'s gravity right now. Picture Newton\'s cannonball: an orbiting body is being pulled toward Earth at every instant, but its sideways motion keeps carrying it past. That continual falling is the orbit. No gravity would mean no orbit at all; the Moon would simply drift away in a straight line.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023; candidates drew orbits as exact circles or wrote that orbits are perfectly circular.
    {
      id: 'pog-mis-orbits-perfect-circles',
      description:
        'Stating that planetary and lunar orbits are perfect circles, rather than near-circular ellipses.',
      triggerAnswer: 'perfect-circles',
      correction:
        'Planet and moon orbits are ellipses (slightly stretched ovals). For KS3 we treat them as near-circular, but they are not exact circles.',
      reExplanation:
        'Earth\'s orbit is an ellipse, very close to a circle. Its distance from the Sun varies a few percent across the year. Mercury\'s ellipse is more obviously stretched. Saying the path is a perfect circle is a useful KS3 simplification, but at GCSE you should write "near-circular" or "ellipse". The physics of orbits works the same way: gravity provides the inward pull at every point.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022; candidates explained outer planet orbits using temperature, not gravity and orbit size.
    {
      id: 'pog-mis-temperature-causes-period',
      description:
        'Explaining why outer planets have longer years by saying they are colder, rather than because gravity is weaker at greater distance and the loop is much bigger.',
      triggerAnswer: 'temperature-period',
      correction:
        'Orbital period is set by the distance from the Sun (orbit size) and the strength of gravity, not by temperature.',
      reExplanation:
        'Neptune takes about 165 Earth years to orbit the Sun because it is roughly 30 times further from the Sun than Earth. Two effects combine: gravity from the Sun is much weaker at that distance, and the path around the Sun is a much longer loop. Temperature is a consequence of distance, not a cause of period. Inner planets are hotter and have shorter years for the same reason.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1H; candidates drew the gravity vector tangent to the orbit instead of radially inward.
    {
      id: 'pog-mis-gravity-wrong-direction',
      description:
        'Drawing or describing gravity as pointing along the direction of orbital motion, rather than toward the centre of the planet or star.',
      triggerAnswer: 'gravity-wrong-direction',
      correction:
        'Gravity always points toward the centre of the body doing the pulling. For the Moon orbiting Earth, gravity points toward Earth\'s centre, sideways to the Moon\'s motion.',
      reExplanation:
        'Gravity is a centre-seeking pull. If you stand on the equator, the pull on you is toward Earth\'s centre, straight down beneath you. The same is true for the Moon: Earth\'s pull on it points back toward Earth. Because the pull is sideways to the Moon\'s direction of travel, it bends the path into a loop without speeding the Moon up or slowing it down on average.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022; candidates wrote that an orbiting object needs no force because it moves at constant speed.
    {
      id: 'pog-mis-orbit-needs-no-force',
      description:
        'Believing an object in a circular orbit needs no force, because it moves at constant speed in a closed loop.',
      triggerAnswer: 'orbit-no-force',
      correction:
        'Constant speed in a circle still means a constantly changing direction. A force is needed to keep changing the direction. That force is gravity, pulling the orbiting body inward.',
      reExplanation:
        'Newton\'s first law says an object travels in a straight line unless a force acts on it. A satellite in a circle is not in a straight line, so a force must be acting. That force is Earth\'s gravity, always pulling toward Earth\'s centre. Switch the gravity off and the satellite would shoot off in a straight line along its direction of motion at that instant.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023; candidates wrote answers implying Earth is the only planet with a 365 day year by default.
    {
      id: 'pog-mis-earth-is-special',
      description:
        'Treating Earth\'s year as a default that all other planets must be longer than, missing that Mercury and Venus have shorter years.',
      triggerAnswer: 'earth-is-special',
      correction:
        'Year length scales with distance from the Sun. Mercury (88 days) and Venus (225 days) have shorter years than Earth; only planets beyond Earth have longer years.',
      reExplanation:
        'Earth\'s 365.25-day year is just one example. Closer planets have shorter years and further planets have longer years. The general rule is: the further from the Sun, the longer the orbital period. Mars (about 687 days) is just over an Earth year because it is just outside Earth, while Mercury is less than a quarter of an Earth year because it sits much closer to the Sun.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceOrbitsGravityZoneNodes = [spaceOrbitsGravity]
