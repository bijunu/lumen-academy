import type { SkillNode } from '@/types/content'

const FIELD_FALLOFF_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Gravitational field strength g shrinks with distance from the centre</text>

    <!-- Earth at left -->
    <circle cx="140" cy="220" r="60" fill="currentColor" />
    <text x="140" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="140" y="305" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">centre at the middle</text>

    <!-- Radius markers and field strength labels -->
    <line x1="200" y1="220" x2="260" y2="220" stroke-dasharray="6 6" />
    <text x="230" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">r</text>
    <text x="260" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">g = 10 N/kg</text>
    <text x="260" y="262" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">surface</text>

    <line x1="260" y1="220" x2="420" y2="220" stroke-dasharray="6 6" />
    <text x="340" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">2 r</text>
    <text x="420" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">g = 2.5 N/kg</text>
    <text x="420" y="262" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">divide by 4</text>

    <line x1="420" y1="220" x2="640" y2="220" stroke-dasharray="6 6" />
    <text x="530" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">3 r</text>
    <text x="640" y="245" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">g = 1.1 N/kg</text>
    <text x="640" y="262" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">divide by 9</text>

    <!-- Markers at each station -->
    <circle cx="260" cy="220" r="6" fill="currentColor" />
    <circle cx="420" cy="220" r="6" fill="currentColor" />
    <circle cx="640" cy="220" r="6" fill="currentColor" />

    <!-- Rule box -->
    <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Inverse square rule: double r, divide g by 4; triple r, divide g by 9.</text>
    <text x="400" y="110" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">r is measured from the CENTRE of the mass, not from its surface.</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">g falls off steeply at first, then more gently as r grows.</text>
  </g>
`

const ISS_AND_GEO_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two satellites above Earth, each at a different r from the centre</text>

    <!-- Earth -->
    <circle cx="400" cy="220" r="70" fill="currentColor" />
    <text x="400" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="400" y="312" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">radius 6 400 km</text>

    <!-- ISS orbit, close in -->
    <circle cx="400" cy="220" r="95" stroke-dasharray="4 4" />
    <circle cx="495" cy="220" r="9" fill="currentColor" />
    <text x="540" y="200" font-size="12" font-weight="700" stroke="none" fill="currentColor">ISS</text>
    <text x="540" y="215" font-size="11" stroke="none" fill="currentColor">about 400 km up</text>
    <text x="540" y="230" font-size="11" stroke="none" fill="currentColor">r is about 6 800 km</text>
    <text x="540" y="245" font-size="11" stroke="none" fill="currentColor">g is about 8.9 N/kg</text>

    <!-- GEO orbit, far out -->
    <circle cx="400" cy="220" r="160" stroke-dasharray="4 4" />
    <circle cx="240" cy="220" r="7" fill="currentColor" />
    <text x="170" y="180" font-size="12" font-weight="700" stroke="none" fill="currentColor">GEO satellite</text>
    <text x="170" y="195" font-size="11" stroke="none" fill="currentColor">about 36 000 km up</text>
    <text x="170" y="210" font-size="11" stroke="none" fill="currentColor">r is about 42 000 km</text>
    <text x="170" y="225" font-size="11" stroke="none" fill="currentColor">g is about 0.22 N/kg</text>

    <!-- Caption -->
    <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">The ISS sits just above the surface, so r barely changes and g is still big.</text>
    <text x="400" y="110" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A GEO satellite has r about 6.5 times bigger, so g is about 6.5 squared = 42 times smaller.</text>

    <text x="400" y="385" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Distances shown are not to scale, but the ratios tell the story.</text>
  </g>
`

const SCALES_ON_SNOWDON_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Bathroom scales at sea level vs the top of Snowdon</text>

    <!-- Ground line -->
    <line x1="60" y1="320" x2="740" y2="320" />

    <!-- Sea-level beach on the left -->
    <rect x="120" y="290" width="120" height="30" fill="currentColor" />
    <text x="180" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Sea level</text>
    <text x="180" y="362" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">r is 6 400 km</text>
    <text x="180" y="378" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g is 10 N/kg</text>

    <!-- Mountain triangle on the right (Snowdon) -->
    <polygon points="500,290 620,290 560,170" fill="currentColor" />
    <text x="560" y="155" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Snowdon, 1 085 m</text>
    <text x="560" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Top of Snowdon</text>
    <text x="560" y="362" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">r is 6 401.1 km</text>
    <text x="560" y="378" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">g is about 9.997 N/kg</text>

    <!-- Scales graphic at each spot -->
    <rect x="155" y="270" width="50" height="20" fill="white" stroke="currentColor" />
    <text x="180" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">50.0 kg</text>

    <rect x="535" y="150" width="50" height="20" fill="white" stroke="currentColor" />
    <text x="560" y="165" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">50.0 kg</text>

    <!-- Caption -->
    <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Snowdon adds about 1.1 km to r, which is around 0.017% of 6 400 km.</text>
    <text x="400" y="110" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Inverse square pushes g down by about 0.03%, far too small to spot on bathroom scales.</text>

    <text x="400" y="225" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The reading would shift from 50.000 kg to about 49.985 kg, well below the scale's precision.</text>
  </g>
`

export const gravityInverseSquare: SkillNode = {
  id: 'physics-gravity-inverse-square',
  title: 'Inverse Square Law for Gravity',
  description:
    'Gravitational field strength g is not constant in space. It depends on the distance r from the centre of the source mass, and it falls off as one over r squared. Double r and g drops by a factor of four; triple r and g drops by a factor of nine. At the surface of the Earth, r is about 6 400 km and g is about 10 N/kg. At twice that distance from the centre, g is about 2.5 N/kg. The ISS, only 400 km above the surface, sits at r about 6 800 km, so g there is still close to 8.9 N/kg, almost a full Earth pull. The Moon has a smaller g (about 1.6 N/kg) mostly because it is a far less massive body. Year 7 work stays qualitative and uses ratio reasoning, not the full formula.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'challenge',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Gravity force; non-contact forces; gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); the strength of gravity varies with distance from the source.',
    awardingBodies: {
      aqa: '4.5.1.2 Mass and weight; 4.8 Space, qualitative treatment of how gravitational field strength varies with distance (GCSE Physics 8463)',
      edexcel:
        'Topic 1 Motion and forces, 1.16-1.17 Weight; Topic 8 Astronomy, variation of gravitational field strength with distance (GCSE Physics 1PH0)',
      ocr: 'P8.1 The Earth in space; gravitational field strength decreases with distance from a mass (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gis-scene-field-falloff',
      title: 'How g Shrinks with r',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read how g drops as you move further from the centre of the Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: FIELD_FALLOFF_SVG,
        hotspots: [
          {
            id: 'gis-field-surface',
            x: 33,
            y: 65,
            label: 'r at the surface: g = 10 N/kg',
            description:
              'On the ground, the distance from the centre of the Earth is about 6 400 km. We call this r. The gravitational field strength here is about 10 N/kg, which is the value we use in W = m x g.',
          },
          {
            id: 'gis-field-2r',
            x: 53,
            y: 65,
            label: 'Double r: g drops to 2.5 N/kg',
            description:
              'At twice the surface r (so 12 800 km from the centre, or 6 400 km above the surface), g is one quarter of its surface value. Two squared is four, and the rule is one over r squared, so we divide by four. 10 / 4 = 2.5 N/kg.',
          },
          {
            id: 'gis-field-3r',
            x: 80,
            y: 65,
            label: 'Triple r: g drops to about 1.1 N/kg',
            description:
              'At three times the surface r (19 200 km from the centre), g is one ninth of its surface value. Three squared is nine, so 10 / 9 is about 1.1 N/kg.',
          },
          {
            id: 'gis-field-rule',
            x: 50,
            y: 23,
            label: 'r is measured from the centre',
            description:
              'Always measure r from the centre of the body, not from its surface. A satellite 6 400 km ABOVE the surface is at r = 12 800 km from the centre, not r = 6 400 km. The ratio you use must compare distances from the centre.',
          },
        ],
      },
    },
    {
      id: 'gis-scene-iss-and-geo',
      title: 'Why the ISS Still Feels Strong Gravity',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the ISS in low orbit with a GEO satellite far above.',
      data: {
        viewBox: '0 0 800 400',
        svg: ISS_AND_GEO_SVG,
        hotspots: [
          {
            id: 'gis-iss-orbit',
            x: 68,
            y: 53,
            label: 'ISS: about 400 km above the surface',
            description:
              'The ISS orbits at about 400 km up. Add the 6 400 km Earth radius and r is about 6 800 km. The ratio to the surface r is 6 800 / 6 400, which is about 1.06.',
          },
          {
            id: 'gis-iss-g',
            x: 68,
            y: 64,
            label: 'ISS: g is about 8.9 N/kg',
            description:
              'Apply the inverse square law: 10 / (1.06 squared) is about 10 / 1.13, or about 8.9 N/kg. Astronauts on the ISS feel almost the full Earth pull. They appear weightless because they are in free fall around the planet, not because gravity has gone.',
          },
          {
            id: 'gis-geo-orbit',
            x: 22,
            y: 50,
            label: 'GEO: about 36 000 km above the surface',
            description:
              'A geostationary (GEO) satellite sits at about 36 000 km up. Add the Earth radius and r is about 42 000 km. The ratio to the surface r is 42 000 / 6 400, which is about 6.6.',
          },
          {
            id: 'gis-geo-g',
            x: 22,
            y: 61,
            label: 'GEO: g is about 0.22 N/kg',
            description:
              'Apply the rule: 10 / (6.6 squared) is 10 / 43.6, or about 0.22 N/kg. That is around forty times weaker than at the surface, but it is still not zero.',
          },
        ],
      },
    },
    {
      id: 'gis-scene-scales-snowdon',
      title: 'Bathroom Scales on Snowdon',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why climbing Snowdon makes only a tiny change to your weight reading.',
      data: {
        viewBox: '0 0 800 400',
        svg: SCALES_ON_SNOWDON_SVG,
        hotspots: [
          {
            id: 'gis-sn-sea',
            x: 23,
            y: 85,
            label: 'Sea level: g is about 10 N/kg',
            description:
              'At a beach in Aberystwyth, the distance from the centre of the Earth is about 6 400 km. A 50 kg pupil sees a reading of 50.0 kg on calibrated scales.',
          },
          {
            id: 'gis-sn-top',
            x: 70,
            y: 85,
            label: 'Top of Snowdon: about 1.1 km higher',
            description:
              'The summit of Snowdon is 1 085 m above sea level, about 1.1 km. Adding this to 6 400 km gives r about 6 401.1 km. The ratio of new r to old r is 1.000 17, almost identical.',
          },
          {
            id: 'gis-sn-tiny',
            x: 50,
            y: 23,
            label: 'g shifts by about 0.03%',
            description:
              'Square the ratio to find the change in g: (1.000 17) squared is about 1.000 34. So g drops by about 0.03%, from 10 N/kg to about 9.997 N/kg.',
          },
          {
            id: 'gis-sn-reading',
            x: 50,
            y: 57,
            label: 'Reading drops by about 15 g',
            description:
              'The reading shifts from 50.000 kg to about 49.985 kg. Bathroom scales round to the nearest 100 g, so the climb makes no visible difference. The inverse square law is real, but a 1 km climb is far too small a change in r to notice.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gis-worked-1',
      title: 'Double the distance from the centre: what happens to g',
      steps: [
        {
          explanation:
            'Pick out the quantities. At the surface of the Earth, r is about 6 400 km and g is about 10 N/kg. A space probe sits at twice that distance from the centre, so r_new = 12 800 km. Find g at the new distance.',
        },
        {
          explanation:
            'Write the ratio of the new distance to the old distance. The inverse square law uses this ratio, not the raw distances.',
          maths: 'r_new / r_old = 12 800 / 6 400 = 2',
        },
        {
          explanation:
            'The rule says g goes down by the square of the distance ratio. Square 2 to get 4. So g at the new distance is the old g divided by 4.',
          maths: 'g_new = g_old / (ratio squared) = 10 / (2 squared) = 10 / 4',
        },
        {
          explanation: 'Evaluate.',
          maths: 'g_new = 2.5 N/kg',
        },
        {
          explanation:
            'State the answer. At twice the distance from the centre of the Earth, the gravitational field strength is about 2.5 N/kg, a quarter of the surface value. The pull is much weaker but it has certainly not gone.',
        },
      ],
    },
    {
      id: 'gis-worked-2',
      title: 'Triple the distance: comparing the weight of a pupil',
      steps: [
        {
          explanation:
            'Set the question. A 50 kg pupil from a Cardiff school is taken on a thought experiment to a space station at three times the surface r from the centre of the Earth. Their weight at the surface is W = m x g = 50 x 10 = 500 N. Find their weight at the new spot.',
        },
        {
          explanation:
            'Find the new g using the inverse square law. The distance ratio is 3, so we divide g by 3 squared.',
          maths: 'g_new = g_old / (3 squared) = 10 / 9',
        },
        {
          explanation: 'Evaluate the new g.',
          maths: 'g_new = 1.1 N/kg (to 2 s.f.)',
        },
        {
          explanation:
            'Find the new weight using W = m x g. The mass stays the same; only g has changed.',
          maths: 'W_new = m x g_new = 50 x 1.1',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W_new = 56 N (to 2 s.f.)',
        },
        {
          explanation:
            'State the answer. At three times the surface r, the pupil would weigh about 56 N, around one ninth of their surface weight (500 / 9 is about 56). Their mass has not changed at all; they are still 50 kg.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gis-q1',
      type: 'multiple-choice',
      stem: 'How does the gravitational field strength g change as you move further from the centre of a planet?',
      tier: 'core',
      options: [
        'g drops, but the rule is one over r squared, so it falls steeply close in and more gently far out.',
        'g stays the same at every distance.',
        'g drops, and it drops faster the further out you go.',
        'g grows as you move further away.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gis-mis-linear-falloff',
      hint: 'g is divided by the square of the distance ratio, not the distance itself.',
    },
    {
      id: 'gis-q2',
      type: 'multiple-choice',
      stem: 'A pupil reads that "the strength of gravity at twice the distance is half as much". What is wrong with this?',
      tier: 'core',
      options: [
        'Nothing. Doubling the distance always halves the field.',
        'It should be a quarter. The rule is one over r squared, so doubling r divides g by 2 squared = 4.',
        'It should be a third, since 2 + 1 is 3.',
        'It should stay the same, since gravity does not change with distance.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gis-mis-linear-falloff',
      hint: 'Square the ratio. Double r means divide g by 4, not by 2.',
    },
    {
      id: 'gis-q3',
      type: 'multiple-choice',
      stem: 'A satellite is moved from r to 3 r, where r is measured from the centre of the Earth. By what factor does the gravitational field strength on the satellite change?',
      tier: 'core',
      options: [
        'g grows by a factor of 9.',
        'g stays the same.',
        'g drops to one third of its old value.',
        'g drops to one ninth of its old value.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'The rule is one over r squared. At 3 r, divide by 3 squared = 9.',
    },
    {
      id: 'gis-q4',
      type: 'multiple-choice',
      stem: 'What does r stand for in the inverse square law for gravity?',
      tier: 'core',
      options: [
        'The height above the surface of the body.',
        'The distance from the centre of the body to the object.',
        'The radius of the orbit only, never a height.',
        'The radius of the object being pulled.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gis-mis-r-is-height',
      hint: 'Always measure r from the centre of the pulling body.',
    },
    {
      id: 'gis-q5',
      type: 'numeric-entry',
      stem: 'At the surface of the Earth, g is about 10 N/kg. A space probe sits at twice the distance from the centre of the Earth. What is g at the probe, in N/kg?',
      tier: 'core',
      correctAnswer: 2.5,
      unit: 'N/kg',
      xpValue: 10,
      hint: 'Divide the surface g by the square of the distance ratio. 2 squared is 4.',
    },
    {
      id: 'gis-q6',
      type: 'numeric-entry',
      stem: 'A telescope sits at five times the surface r of the Earth from the centre. If g at the surface is 10 N/kg, what is g at the telescope, in N/kg?',
      tier: 'core',
      correctAnswer: 0.4,
      unit: 'N/kg',
      xpValue: 10,
      hint: 'Divide 10 by 5 squared. 5 squared is 25.',
    },
    {
      id: 'gis-q7',
      type: 'multiple-choice',
      stem: 'An astronaut on the International Space Station orbits about 400 km above the surface of the Earth. Which sentence is the most accurate?',
      tier: 'core',
      options: [
        'The ISS is so far away that there is almost no gravity left, around 0.1 N/kg.',
        'The ISS sits where Earth gravity ends, so g there is zero.',
        'Add 400 km to the 6 400 km Earth radius. r barely grows, so g is still close to 8.9 N/kg, almost the full surface value.',
        'The ISS sits at twice the surface r, so g there is about 2.5 N/kg.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gis-mis-rule-only-in-space',
      hint: 'r from the centre is 6 400 + 400 = 6 800 km. That ratio (1.06) barely affects g.',
    },
    {
      id: 'gis-q8',
      type: 'multiple-choice',
      stem: 'Why is g on the surface of the Moon (about 1.6 N/kg) so much smaller than g on the surface of the Earth (about 10 N/kg)?',
      tier: 'confident',
      options: [
        'Because the Moon is much further from us than the Earth is from itself.',
        'Because the Moon has no gravity, only the Earth does.',
        'Mostly because the Moon is a much less massive body. You also stand at the surface of the Moon, so r is the Moon\'s radius, not the Earth\'s.',
        'Because the Moon spins faster, which weakens g.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gis-mis-moon-only-distance',
      hint: 'g at a surface depends on the mass of the body and its radius. The Moon is far less massive than Earth.',
    },
    {
      id: 'gis-q9',
      type: 'numeric-entry',
      stem: 'On the surface of the Earth, g is about 10 N/kg. A capsule is sent to a height equal to one full Earth radius above the surface, so r doubles to 12 800 km from the centre. A 60 kg pupil is on board. What is their weight at the new spot, in N?',
      tier: 'confident',
      correctAnswer: 150,
      unit: 'N',
      xpValue: 15,
      hint: 'At 2 r, g is 10 / 4 = 2.5 N/kg. Then W = m x g.',
    },
    {
      id: 'gis-q10',
      type: 'numeric-entry',
      stem: 'A geostationary satellite (GEO) is at about r = 42 000 km from the centre of the Earth, where the surface r is 6 400 km. The distance ratio is about 6.6. If g at the surface is 10 N/kg, what is g at the GEO satellite, in N/kg? Give your answer to 2 decimal places.',
      tier: 'challenge',
      correctAnswer: 0.23,
      unit: 'N/kg',
      tolerance: 0.02,
      xpValue: 20,
      hint: 'Divide 10 by 6.6 squared. 6.6 squared is 43.56.',
    },
    {
      id: 'gis-q11',
      type: 'multiple-choice',
      stem: 'A 50 kg pupil climbs from the beach to the top of Snowdon (1.1 km above sea level). The surface r of the Earth is 6 400 km. What is the best description of how their weight changes?',
      tier: 'challenge',
      options: [
        'The weight halves, because climbing doubles the distance.',
        'The weight stays the same, because g does not depend on r at all.',
        'The weight rises sharply, because being higher means stronger gravity.',
        'The weight drops by about 0.03%, far too little to read on bathroom scales. r barely changes (6 400 to 6 401.1 km), and the inverse square keeps the shift tiny.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'gis-mis-up-means-more-gravity',
      hint: 'Work out the ratio of new r to old r: 6 401.1 / 6 400, which is just over 1. Square it; the shift in g is tiny.',
    },
    {
      id: 'gis-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes, "Astronauts on the ISS float around because there is no gravity that far up." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right. Once you leave the atmosphere there is no gravity.',
        'On the ISS, r is only about 6% bigger than the surface r, so g is still about 8.9 N/kg. The astronauts feel weightless because they and the station are in free fall around Earth, not because gravity has gone.',
        'Gravity drops to half on the ISS, which is enough for floating.',
        'The astronauts are pulled by the Moon, not the Earth, so it looks like no gravity.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gis-mis-iss-no-gravity',
      hint: 'Earth gravity is still strong at 400 km up. Apparent weightlessness comes from free fall, not from gravity dropping to zero.',
    },
    {
      id: 'gis-q13',
      type: 'numeric-entry',
      stem: 'A laboratory at the surface of the Earth feels g = 10 N/kg. A probe is sent to where r is four times the surface r. What is g at the probe, in N/kg? Give your answer to 2 decimal places.',
      tier: 'confident',
      correctAnswer: 0.63,
      unit: 'N/kg',
      tolerance: 0.02,
      xpValue: 15,
      hint: 'Divide 10 by 4 squared. 4 squared is 16, so 10 / 16.',
    },
    {
      id: 'gis-q14',
      type: 'spot-misconception',
      stem: 'Hina says, "If you move twice as far from the Earth, gravity gets twice as weak. So at three times the distance it is three times weaker."',
      tier: 'confident',
      statements: [
        {
          text: 'Hina is right. Gravity drops in step with the distance.',
          isMisconception: true,
        },
        {
          text: 'Hina is not right. The rule is one over r squared. At 2 r, g is divided by 4. At 3 r, g is divided by 9. Doubling r quarters the field, not halves it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gis-mis-linear-falloff',
    },
    {
      id: 'gis-q15',
      type: 'spot-misconception',
      stem: 'Owen says, "The ISS is in space, so there is no gravity there at all. That is why the astronauts float."',
      tier: 'confident',
      statements: [
        {
          text: 'Owen is right. Space is where Earth gravity finally ends.',
          isMisconception: true,
        },
        {
          text: 'Owen is not right. At 400 km up, r is only 6% bigger than the surface r, so g is still about 8.9 N/kg. The astronauts float because they are in free fall, not because gravity is missing.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gis-mis-iss-no-gravity',
    },
    {
      id: 'gis-q16',
      type: 'drag-order',
      stem: 'Put the steps in the right order for finding g at a new distance using the inverse square law.',
      tier: 'confident',
      items: [
        'Divide the old g by that squared ratio to find the new g.',
        'Note the old distance from the centre (r_old) and the old field strength (g_old).',
        'Write the new distance from the centre (r_new), making sure both distances are measured from the same centre.',
        'Work out the ratio r_new / r_old, then square it.',
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      hint: 'List the old values, then the new distance, then square the ratio, then divide.',
    },
    {
      id: 'gis-q17',
      type: 'drag-order',
      stem: 'Put the statements in order from the strongest g to the weakest g for a body at each spot.',
      tier: 'challenge',
      items: [
        'On the surface of the Moon (g about 1.6 N/kg).',
        'On the surface of the Earth (g about 10 N/kg).',
        'On a GEO satellite, 36 000 km above the Earth (g about 0.22 N/kg).',
        'On the ISS, 400 km above the Earth (g about 8.9 N/kg).',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 20,
      hint: 'Earth surface is strongest, then ISS just above it, then the Moon, then the far GEO satellite.',
    },
    {
      id: 'gis-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding g at a probe that sits at three times the surface r from the centre of the Earth, where surface g is 10 N/kg.',
      tier: 'challenge',
      steps: [
        'Write the old values: r_old = 6 400 km from the centre, g_old = 10 N/kg.',
        'Write the new distance from the centre: r_new = 3 x 6 400 = 19 200 km.',
        'Find the ratio of the new distance to the old: r_new / r_old = 19 200 / 6 400 = 3.',
        null,
        'State the answer: g at the probe is about 1.1 N/kg, about one ninth of the surface value.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply the inverse square law: g_new = g_old / (ratio squared) = 10 / (3 squared) = 10 / 9 = 1.1 N/kg (to 2 s.f.).',
      xpValue: 20,
      misconceptionId: 'gis-mis-linear-falloff',
    },
    {
      id: 'gis-q19',
      type: 'numeric-entry',
      stem: 'A 50 kg pupil from a Cardiff school is imagined at three times the surface r from the centre of the Earth, where g at the surface is 10 N/kg. Their weight at the surface is 500 N. What is their weight at the new spot, in N? Give your answer to the nearest whole newton.',
      tier: 'challenge',
      correctAnswer: 56,
      unit: 'N',
      tolerance: 1,
      xpValue: 20,
      hint: 'g_new is 10 / 9. W = m x g, so 50 x (10/9) is about 55.6, rounded to 56.',
    },
    {
      id: 'gis-q20',
      type: 'numeric-entry',
      stem: 'A planet has a surface g of 16 N/kg. A satellite is parked at twice the surface r from the centre of this planet. What is g at the satellite, in N/kg?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'N/kg',
      xpValue: 20,
      hint: 'At 2 r, divide g by 2 squared = 4. So 16 / 4.',
    },
    {
      id: 'gis-q21',
      type: 'multiple-choice',
      stem: 'A pupil says, "The Moon must have weaker gravity than the Earth because it is so far away from us." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right. Distance from the Earth is the only reason the Moon has less gravity.',
        'Stand on the surface of the Moon and r is the Moon\'s own radius, not the Earth-to-Moon distance. The Moon has weaker surface g mostly because it is a far less massive body.',
        'The Moon has no gravity of its own at all; the Earth supplies it from a distance.',
        'The Moon has stronger gravity than the Earth, but only at night.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gis-mis-moon-only-distance',
      hint: 'g at a surface is set by the mass of the body and its own radius. Earth-to-Moon distance is a separate issue.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates routinely wrote that doubling the distance from a planet halves the gravitational field strength, missing the squared term.
    {
      id: 'gis-mis-linear-falloff',
      description:
        'Treating g as falling off in step with r rather than with r squared, so doubling the distance halves g, tripling the distance thirds g, and so on.',
      triggerAnswer: 'linear-falloff',
      correction:
        'The rule is one over r squared. Double r and divide g by 4. Triple r and divide g by 9. Square the distance ratio, then divide.',
      reExplanation:
        'At the surface of Earth, g is about 10 N/kg. At twice the surface r, the ratio is 2. The rule says divide g by 2 squared = 4, giving 2.5 N/kg, not 5. At three times the surface r, divide by 3 squared = 9, giving about 1.1 N/kg, not about 3.3. Halving for each doubling would put g at 1.25 N/kg at 3 r, far too high.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, J259/02, candidates used height above the surface as r in inverse square calculations rather than the distance from the centre of the body.
    {
      id: 'gis-mis-r-is-height',
      description:
        'Using the height above the surface as r in the inverse square law, rather than the distance from the centre of the pulling body.',
      triggerAnswer: 'r-is-height',
      correction:
        'r is the distance from the centre of the pulling body, not the height above its surface. For Earth, add the surface radius (about 6 400 km) to any height above the surface before taking the ratio.',
      reExplanation:
        'The ISS sits 400 km above the surface, but r is 6 400 + 400 = 6 800 km, not 400 km. A satellite 6 400 km above the surface has r = 12 800 km, double the surface r, so g is one quarter of the surface value. Use just the height and answers come out far too small.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that astronauts on the ISS float because there is no gravity at that altitude.
    {
      id: 'gis-mis-iss-no-gravity',
      description:
        'Believing that the ISS is so far up that Earth gravity is essentially zero there, so astronauts float because gravity has gone.',
      triggerAnswer: 'iss-no-gravity',
      correction:
        'ISS r is only 6% bigger than surface r, so g is still about 8.9 N/kg. Astronauts feel weightless because they are in free fall, not because g has gone.',
      reExplanation:
        'Surface r is about 6 400 km. ISS r is about 6 800 km. The ratio is 1.06, and 1.06 squared is about 1.13, so g is 10 / 1.13 = 8.9 N/kg. Earth still pulls the station and the astronauts strongly. They orbit at high speed, so they keep "missing" the Earth as they fall, which is what looks like floating.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that climbing a mountain or going up in a building noticeably increases your weight, treating "up" as "closer to space" rather than further from the centre.
    {
      id: 'gis-mis-up-means-more-gravity',
      description:
        'Believing that going up in altitude (a mountain, a tall building) makes gravity noticeably stronger, rather than slightly weaker (and only just measurably).',
      triggerAnswer: 'up-means-more-gravity',
      correction:
        'Going up means r grows, so g drops. For a 1 km climb on Earth, r changes from 6 400 to 6 401 km, which shifts g by about 0.03%. That is far too small to feel on ordinary scales.',
      reExplanation:
        'On top of Snowdon (1.1 km up), the ratio of new r to old r is 1.000 17. Square that to get about 1.000 34, so g drops from 10 to about 9.997 N/kg. A 50 kg pupil reads 49.985 kg, not 50.000 kg. The change is real but tiny; bathroom scales round to the nearest 100 g, so the climb makes no visible difference.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that lunar gravity is small only because the Moon is far away from us, missing the role of the Moon's much smaller mass.
    {
      id: 'gis-mis-moon-only-distance',
      description:
        'Believing that the Moon has a small surface g only because it is far away from the Earth, rather than because the Moon is a much less massive body.',
      triggerAnswer: 'moon-only-distance',
      correction:
        'Surface g depends on the body\'s mass and its own radius. On the Moon, r is the Moon\'s radius. Lunar g is small mostly because the Moon is far less massive than the Earth.',
      reExplanation:
        'On the surface of the Moon, the Earth-to-Moon distance is not what sets g. What sets g is the mass of the Moon and how far you are from the centre of the Moon. The Moon has about 1.2% of the Earth\'s mass, so its surface g comes out at about 1.6 N/kg even though you are right at its surface, far less than 10 N/kg.',
    },
    // Authored, no external source. Distractor designed to mirror common Year 7 confusion that the squared distance rule starts only beyond the atmosphere; a check on whether pupils can apply the rule at all distances.
    {
      id: 'gis-mis-rule-only-in-space',
      description:
        'Treating the inverse square rule as something that only "switches on" once you leave the atmosphere, so g is constant up to space and then drops.',
      triggerAnswer: 'rule-only-in-space',
      correction:
        'The inverse square rule holds at every r, inside the atmosphere or outside. Surface g, the value at the top of Snowdon, and the value at a satellite all follow the same one over r squared rule.',
      reExplanation:
        'There is no special edge of the atmosphere where gravity starts to thin. From sea level to the top of Snowdon (1.1 km up), r grows by 0.017% and g drops by about 0.03%. From there to the ISS (400 km up), r grows by 6% and g drops to about 8.9 N/kg. The same rule keeps working all the way out to a GEO satellite and beyond.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityInverseSquareZoneNodes = [gravityInverseSquare]
