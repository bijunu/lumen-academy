import type { SkillNode } from '@/types/content'

const EARTH_MOON_PULL_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Earth and Moon: a two-way pull</text>

    <!-- Earth on the left -->
    <circle cx="180" cy="220" r="70" fill="currentColor" />
    <text x="180" y="225" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="white">Earth</text>
    <text x="180" y="320" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">mass approximately 6 x 10^24 kg</text>

    <!-- Moon on the right -->
    <circle cx="620" cy="220" r="28" fill="currentColor" />
    <text x="620" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Moon</text>
    <text x="620" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">mass approximately 7.3 x 10^22 kg</text>

    <!-- Pull from Earth on Moon (towards Earth) -->
    <line x1="585" y1="210" x2="500" y2="210" />
    <polygon points="508,203 495,210 508,217" fill="currentColor" stroke="none" />
    <text x="540" y="195" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Earth pulls Moon</text>

    <!-- Pull from Moon on Earth (towards Moon) -->
    <line x1="250" y1="240" x2="335" y2="240" />
    <polygon points="327,233 340,240 327,247" fill="currentColor" stroke="none" />
    <text x="290" y="260" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Moon pulls Earth</text>

    <!-- Distance label -->
    <line x1="250" y1="160" x2="592" y2="160" stroke-dasharray="6 6" />
    <text x="420" y="150" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">centre to centre, about 384 000 km</text>

    <text x="400" y="375" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Each body pulls the other. The pulls are equal in size and opposite in direction.</text>
  </g>
`

const TIDAL_BULGES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two tidal bulges, two high tides per day</text>

    <!-- Earth in the middle, slightly stretched -->
    <ellipse cx="400" cy="220" rx="135" ry="105" fill="currentColor" />
    <text x="400" y="225" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="white">Earth</text>

    <!-- Ocean shell, stretched along the Earth-Moon axis -->
    <ellipse cx="400" cy="220" rx="170" ry="108" stroke-dasharray="4 4" />

    <!-- Moon on the right -->
    <circle cx="700" cy="220" r="22" fill="currentColor" />
    <text x="700" y="225" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Moon</text>

    <!-- Near-side bulge label -->
    <line x1="560" y1="210" x2="610" y2="180" />
    <text x="620" y="170" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">near-side bulge</text>
    <text x="620" y="186" text-anchor="start" font-size="11" stroke="none" fill="currentColor">strongest Moon pull</text>

    <!-- Far-side bulge label -->
    <line x1="240" y1="210" x2="180" y2="180" />
    <text x="170" y="170" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">far-side bulge</text>
    <text x="170" y="186" text-anchor="end" font-size="11" stroke="none" fill="currentColor">weakest Moon pull</text>

    <!-- Low tide arrows on top and bottom -->
    <line x1="400" y1="120" x2="400" y2="100" />
    <polygon points="393,108 400,95 407,108" fill="currentColor" stroke="none" />
    <text x="400" y="90" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">low tide</text>
    <line x1="400" y1="320" x2="400" y2="340" />
    <polygon points="393,332 400,345 407,332" fill="currentColor" stroke="none" />
    <text x="400" y="360" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">low tide</text>

    <text x="400" y="385" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Earth spins once per day through both bulges, so a coast sees two high tides each day.</text>
  </g>
`

const SPRING_NEAP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="40" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Spring tides versus neap tides</text>

    <!-- Left panel: spring tides (Sun + Moon aligned) -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Spring tides (aligned)</text>
    <circle cx="60" cy="190" r="18" fill="currentColor" />
    <text x="60" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sun</text>
    <circle cx="200" cy="190" r="32" fill="currentColor" />
    <text x="200" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Earth</text>
    <circle cx="320" cy="190" r="10" fill="currentColor" />
    <text x="320" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Moon</text>
    <!-- Big bulge -->
    <ellipse cx="200" cy="190" rx="50" ry="32" stroke-dasharray="4 4" />
    <text x="200" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">large tidal range</text>
    <text x="200" y="282" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sun and Moon pull together</text>

    <!-- Divider -->
    <line x1="400" y1="60" x2="400" y2="340" stroke-dasharray="6 6" />

    <!-- Right panel: neap tides (right angle) -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Neap tides (right angle)</text>
    <circle cx="460" cy="190" r="18" fill="currentColor" />
    <text x="460" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sun</text>
    <circle cx="600" cy="190" r="32" fill="currentColor" />
    <text x="600" y="195" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">Earth</text>
    <circle cx="600" cy="100" r="10" fill="currentColor" />
    <text x="630" y="105" text-anchor="start" font-size="11" stroke="none" fill="currentColor">Moon</text>
    <!-- Smaller bulge -->
    <ellipse cx="600" cy="190" rx="40" ry="32" stroke-dasharray="4 4" />
    <text x="600" y="265" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">small tidal range</text>
    <text x="600" y="282" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sun pulls sideways, partly cancels</text>

    <text x="400" y="370" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Spring tides occur near full and new Moon, neap tides near first and third quarter.</text>
  </g>
`

export const gravityEarthMoonTides: SkillNode = {
  id: 'physics-gravity-earth-moon-tides',
  title: 'Earth, Moon and Tides',
  description:
    'Gravity is a two-way pull between any pair of masses. The Earth and Moon tug on each other with equal and opposite forces. Because the Moon is closer to one side of the Earth than the other, its pull on the oceans is uneven, raising two tidal bulges, one on the near side and one on the far side. As the Earth spins once per day, a coast passes through both bulges, so it sees two high tides and two low tides each day. When the Sun and Moon line up (full or new Moon), their pulls add, giving the larger spring tides. When the Sun and Moon are at right angles, the pulls partly cancel, giving the smaller neap tides. UK coasts such as the Severn estuary and the Bristol Channel show some of the largest tidal ranges in the world. Qualitative only at KS3; use W = m g only when weights or pulls on a mass are needed.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-gravity',
  zoneName: 'Gravity, Weight, Mass',
  tier: 'confident',
  prerequisites: ['physics-gravity-mass-vs-weight'],
  curriculum: {
    ks3Objective:
      'Gravity forces between Earth and Moon, and between Earth and Sun (qualitative only); our Sun as a star, other stars in our galaxy, other galaxies.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; 4.8.1.2 The life cycle of a star (background); gravity in the Earth-Moon system (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.1-8.3 The solar system, Earth-Moon system and gravitational interactions (GCSE Physics 1PH0)',
      ocr: 'P8.1 The Earth in space; gravity between Earth, Moon and Sun (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'gemt-scene-earth-moon-pull',
      title: 'Earth and Moon Pull on Each Other',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the Earth and the Moon pull on each other with equal and opposite forces.',
      data: {
        viewBox: '0 0 800 400',
        svg: EARTH_MOON_PULL_SVG,
        hotspots: [
          {
            id: 'gemt-pull-earth-on-moon',
            x: 65,
            y: 50,
            label: 'Earth pulls the Moon',
            description:
              'Earth has a huge mass, so its gravity reaches out to the Moon and pulls it inwards. This pull is what keeps the Moon in orbit, falling around the Earth rather than off in a straight line.',
          },
          {
            id: 'gemt-pull-moon-on-earth',
            x: 35,
            y: 60,
            label: 'Moon pulls the Earth',
            description:
              'The Moon pulls back on the Earth with a force equal in size to the Earth pull on the Moon, and opposite in direction. The Moon is smaller, so its pull on a body at the surface is weaker than the Earth pull, but the Earth-Moon pair pull on each other the same amount.',
          },
          {
            id: 'gemt-distance',
            x: 50,
            y: 38,
            label: 'About 384 000 km apart',
            description:
              'Centre to centre, the Moon is roughly 384 000 km from the Earth. That is about 30 Earth diameters. Gravity gets weaker as the distance grows, so a body on the Moon is barely tugged by the Earth at all.',
          },
          {
            id: 'gemt-no-air-pull',
            x: 50,
            y: 90,
            label: 'Gravity does not need air',
            description:
              'Space between the Earth and the Moon is essentially empty, yet the pull still acts. Gravity is a force at a distance; it does not need air, rope or contact to work.',
          },
        ],
      },
    },
    {
      id: 'gemt-scene-tidal-bulges',
      title: 'Tidal Bulges and Two High Tides',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a coast gets two high tides and two low tides each day.',
      data: {
        viewBox: '0 0 800 400',
        svg: TIDAL_BULGES_SVG,
        hotspots: [
          {
            id: 'gemt-near-bulge',
            x: 78,
            y: 42,
            label: 'Near-side bulge',
            description:
              'The ocean on the side of the Earth nearest the Moon is pulled most strongly, so water heaps up into a bulge there. A coast under this bulge has a high tide.',
          },
          {
            id: 'gemt-far-bulge',
            x: 22,
            y: 42,
            label: 'Far-side bulge',
            description:
              'The Earth itself feels a stronger pull than the ocean on the far side, so the Earth is pulled more towards the Moon than the far ocean is. The far ocean is left behind into a second bulge. A coast under this bulge also has a high tide.',
          },
          {
            id: 'gemt-low-tide',
            x: 50,
            y: 22,
            label: 'Low tide between the bulges',
            description:
              'Halfway between the two bulges, the ocean is at its lowest. As the Earth spins, a coast passes through low tide, high tide, low tide and high tide every 24 hours, so the gap between two highs is roughly 12 hours.',
          },
          {
            id: 'gemt-earth-spin',
            x: 50,
            y: 88,
            label: 'Spinning Earth carries the coast through both bulges',
            description:
              'The bulges stay roughly lined up with the Moon. The Earth turns under them once each day, so most coasts pass through both bulges, giving two high tides and two low tides per day.',
          },
        ],
      },
    },
    {
      id: 'gemt-scene-spring-neap',
      title: 'Spring Tides and Neap Tides',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare spring tides (Sun and Moon aligned) with neap tides (Sun and Moon at right angles).',
      data: {
        viewBox: '0 0 800 400',
        svg: SPRING_NEAP_SVG,
        hotspots: [
          {
            id: 'gemt-spring-align',
            x: 25,
            y: 50,
            label: 'Spring tides: Sun and Moon aligned',
            description:
              'Near a full Moon or a new Moon, the Sun, Earth and Moon sit roughly in a line. The Sun pull and the Moon pull on the oceans add, so the bulges grow taller. High tides are higher and low tides are lower; the tidal range is large.',
          },
          {
            id: 'gemt-spring-range',
            x: 25,
            y: 72,
            label: 'Large tidal range at spring',
            description:
              'In the Severn estuary on the south west coast, a spring tidal range can pass 12 metres, one of the biggest in the world. The Bristol Channel and the Skye coast in Scotland also show clear spring versus neap differences.',
          },
          {
            id: 'gemt-neap-right-angle',
            x: 75,
            y: 50,
            label: 'Neap tides: Sun and Moon at right angles',
            description:
              'Near a first or third quarter Moon, the Sun pull lines up with the Earth-Moon axis at a right angle. The Sun pull pulls the ocean sideways, partly cancelling the Moon pull, so the bulges are smaller.',
          },
          {
            id: 'gemt-neap-range',
            x: 75,
            y: 72,
            label: 'Small tidal range at neap',
            description:
              'During neap tides, high tides are lower and low tides are higher than at spring tides. The tidal range is smaller, and the coast looks calmer between tides. Spring and neap take turns roughly every week as the Moon orbits the Earth in about 28 days.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'gemt-worked-1',
      title: 'How many high tides does a UK coast see in a day?',
      steps: [
        {
          explanation:
            'Picture the Earth with two tidal bulges, one on the side nearest the Moon and one on the far side. Both bulges stay roughly lined up with the Moon as the Earth spins.',
        },
        {
          explanation:
            'A coast on the spinning Earth passes under each bulge once as the Earth turns. So in one full Earth rotation, the coast passes through two bulges.',
        },
        {
          explanation:
            'Each pass through a bulge is a high tide. Between the two passes, the coast crosses a low tide. So the pattern is high, low, high, low across a day.',
        },
        {
          explanation:
            'One Earth rotation takes about 24 hours, so the time between two successive high tides is roughly 24 / 2.',
          maths: 'gap = 24 / 2 = 12 hours',
        },
        {
          explanation:
            'State the answer. A typical UK coast sees about two high tides and two low tides each day, with about 12 hours between high tides. The exact gap is closer to 12 hours 25 minutes because the Moon also moves in its orbit, but 12 hours is the right ball park for KS3.',
        },
      ],
    },
    {
      id: 'gemt-worked-2',
      title: 'Weight of a 70 kg astronaut on the Moon',
      steps: [
        {
          explanation:
            'List what is given. Mass m = 70 kg. Gravitational field strength on the Moon g_Moon is about 1.6 N/kg. We want the weight W on the Moon.',
        },
        {
          explanation:
            'Recall that mass does not change when you travel. 70 kg of person on Earth is still 70 kg on the Moon. What changes is g, because Moon gravity is weaker.',
        },
        {
          explanation: 'Write the rule from the prerequisite node.',
          maths: 'W = m x g',
        },
        {
          explanation: 'Substitute the Moon values.',
          maths: 'W = 70 x 1.6',
        },
        {
          explanation: 'Evaluate.',
          maths: 'W = 112 N',
        },
        {
          explanation:
            'Compare with Earth. On Earth, with g = 10 N/kg, the same person weighs 70 x 10 = 700 N. So the Moon weight is about one sixth of the Earth weight, which is why astronauts can hop so easily in archive footage.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'gemt-q1',
      type: 'multiple-choice',
      stem: 'Which sentence about the gravity between the Earth and the Moon is right?',
      tier: 'core',
      options: [
        'Only the Earth pulls the Moon; the Moon is too small to pull back.',
        'Only the Moon pulls the Earth; the Earth has too much mass to be pulled.',
        'Each body pulls the other; the pulls are equal in size and opposite in direction.',
        'They do not pull on each other because space between them is empty.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'gemt-mis-one-way-pull',
      hint: 'Gravity is a two-way pull. Two masses pull on each other with equal and opposite forces.',
    },
    {
      id: 'gemt-q2',
      type: 'multiple-choice',
      stem: 'A typical UK coast sees how many high tides each day?',
      tier: 'core',
      options: [
        'One high tide every 24 hours.',
        'Two high tides every 24 hours, with about 12 hours between them.',
        'Four high tides every 24 hours.',
        'No high tides at all on most days.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'gemt-mis-one-tide-per-day',
      hint: 'Two tidal bulges sit on opposite sides of the Earth. The spinning Earth carries a coast through both each day.',
    },
    {
      id: 'gemt-q3',
      type: 'multiple-choice',
      stem: 'Spring tides happen when the Sun, Earth and Moon are roughly aligned. What do these tides look like at the coast?',
      tier: 'core',
      options: [
        'The tidal range is larger than usual: higher highs and lower lows.',
        'The tidal range is smaller than usual: lower highs and higher lows.',
        'There are no tides at all because the Sun and Moon pulls cancel.',
        'There is only one high tide a day instead of two.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'gemt-mis-spring-neap-swap',
      hint: 'When the Sun and Moon line up, their pulls on the oceans add together.',
    },
    {
      id: 'gemt-q4',
      type: 'multiple-choice',
      stem: 'Which everyday observation is best explained by the Moon pulling on the Earth?',
      tier: 'core',
      options: [
        'A ball dropped in a Bristol garden falls straight down.',
        'A balloon released at a Skye birthday party drifts upwards.',
        'A torch lights up a dark Cornwall lane.',
        'A Severn estuary fishing village sees the sea rise and fall twice a day.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Tides come from the uneven pull of the Moon on the Earth and its oceans.',
    },
    {
      id: 'gemt-q5',
      type: 'numeric-entry',
      stem: 'A typical UK coast has two high tides each day. About how many hours pass between one high tide and the next? Give your answer to the nearest whole hour.',
      tier: 'core',
      correctAnswer: 12,
      unit: 'hours',
      xpValue: 10,
      hint: 'The Earth spins once in 24 hours and passes through two bulges. Share 24 hours between two high tides.',
    },
    {
      id: 'gemt-q6',
      type: 'drag-order',
      stem: 'Put these steps in the right order to explain why a coast sees two high tides each day.',
      tier: 'core',
      items: [
        'The Earth spins on its axis once every 24 hours, carrying a coast under each bulge in turn.',
        'The Moon pulls on the Earth and its oceans. The pull is uneven across the Earth because one side is nearer the Moon than the other.',
        'A coast under a bulge has a high tide; between the two bulges, the same coast has a low tide. Over 24 hours, the coast passes through two highs and two lows.',
        'The uneven pull raises two bulges in the ocean: a near-side bulge and a far-side bulge.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 10,
      hint: 'Start with the cause (the Moon pull), then the bulges, then the spin, then what a coast actually sees.',
    },
    {
      id: 'gemt-q7',
      type: 'multiple-choice',
      stem: 'A pupil says, "Tides happen because the Moon orbits the Earth and pushes the water around." What is the best fix?',
      tier: 'confident',
      options: [
        'Replace "pushes" with "pulls". The Moon pulls on the oceans; gravity is a pull, not a push, and the uneven pull across the Earth raises tidal bulges.',
        'Replace "orbits" with "spins". The Moon spins about the Earth and that drags the water along.',
        'Replace "water" with "air". Tides are about air pressure changes, not water.',
        'The pupil is right as written; "pushes" is the standard term for the Moon and tides.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'gemt-mis-moon-pushes',
      hint: 'Gravity acts as a pull between two masses, not a push.',
    },
    {
      id: 'gemt-q8',
      type: 'multiple-choice',
      stem: 'Why are there two tidal bulges, not just one on the side nearest the Moon?',
      tier: 'confident',
      options: [
        'The Sun pulls the ocean on the far side, raising a second bulge by itself.',
        'The Moon goes round the Earth twice a day, raising one bulge each time.',
        'The Moon pulls hardest on the near ocean, less hard on the solid Earth, and least hard on the far ocean; the difference leaves a bulge on each side.',
        'The Earth wobbles between two positions, so the water is pushed to both sides in turn.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'gemt-mis-only-one-bulge',
      hint: 'The Moon pull weakens with distance. Compare the pull on the near ocean, the solid Earth, and the far ocean.',
    },
    {
      id: 'gemt-q9',
      type: 'multiple-choice',
      stem: 'A surfing club near Bristol asks when the tidal range will be biggest. Which Moon phase should they pick?',
      tier: 'confident',
      options: [
        'A first quarter Moon, because the Sun pull is at a right angle to the Moon pull.',
        'Any time the Moon is not visible, because no Moon means no tides.',
        'A third quarter Moon, because the Moon then pulls hardest of all.',
        'A full Moon or a new Moon, because the Sun and Moon are roughly aligned with the Earth.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'gemt-mis-spring-neap-swap',
      hint: 'Spring tides happen when the Sun, Earth and Moon line up. That is at full or new Moon.',
    },
    {
      id: 'gemt-q10',
      type: 'multiple-choice',
      stem: 'Astronauts on the Apollo footage on the Moon hop along easily in their suits. Compared with the same person on Earth, which sentence is true?',
      tier: 'confident',
      options: [
        'Their mass is smaller on the Moon, so their bones feel less stressed.',
        'Their weight is smaller on the Moon because Moon gravity is weaker, but their mass is the same as on Earth.',
        'Both their mass and weight are larger on the Moon because the Moon pulls harder.',
        'They have no weight at all on the Moon because the Moon has no gravity.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'gemt-mis-moon-no-gravity',
      hint: 'Mass is the amount of matter, which travels with you. Weight is gravity x mass, and Moon gravity is weaker than Earth gravity.',
    },
    {
      id: 'gemt-q11',
      type: 'numeric-entry',
      stem: 'An astronaut has a mass of 80 kg. On the Moon, the gravitational field strength is about 1.6 N/kg. What is the astronaut weight on the Moon, in newtons?',
      tier: 'confident',
      correctAnswer: 128,
      unit: 'N',
      xpValue: 15,
      hint: 'Use W = m x g with m = 80 kg and g = 1.6 N/kg.',
    },
    {
      id: 'gemt-q12',
      type: 'spot-misconception',
      stem: 'Asha says, "The Moon has no gravity. That is why everything floats on the Moon."',
      tier: 'confident',
      statements: [
        {
          text: 'Asha is right. The Moon has no gravity, so anything on the Moon floats.',
          isMisconception: true,
        },
        {
          text: 'Asha is not right. The Moon does have gravity, but it is about a sixth of Earth gravity, so things on the Moon weigh much less and feel light. They still fall back to the Moon surface.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gemt-mis-moon-no-gravity',
    },
    {
      id: 'gemt-q13',
      type: 'spot-misconception',
      stem: 'Leo writes, "The Earth pulls the Moon, but the Moon is far too small to pull back on the Earth."',
      tier: 'confident',
      statements: [
        {
          text: 'Leo is right. The Earth has so much more mass that the Moon pull on the Earth is zero.',
          isMisconception: true,
        },
        {
          text: 'Leo is not right. The Earth and Moon pull on each other with equal and opposite forces. The Moon pull on the Earth is the same size as the Earth pull on the Moon, and it is what raises tides.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'gemt-mis-one-way-pull',
    },
    {
      id: 'gemt-q14',
      type: 'drag-order',
      stem: 'Put the events in the right order over a lunar month (about 28 days), starting at a full Moon.',
      tier: 'challenge',
      items: [
        'First quarter Moon: Sun and Moon at a right angle, so neap tides at the coast.',
        'Full Moon: Sun, Earth and Moon roughly aligned, so spring tides at the coast.',
        'Third quarter Moon: Sun and Moon at a right angle again, so a second neap tide week.',
        'New Moon: Sun, Earth and Moon roughly aligned again, so spring tides return.',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
      hint: 'The Moon goes full, then to first quarter, then new, then to third quarter, before returning to full.',
    },
    {
      id: 'gemt-q15',
      type: 'numeric-entry',
      stem: 'The Moon orbits the Earth roughly once every 28 days. Spring tides happen near full Moon and near new Moon. How many spring-tide periods are there in one lunar month?',
      tier: 'confident',
      correctAnswer: 2,
      unit: 'spring-tide periods',
      xpValue: 15,
      hint: 'Spring tides need the Sun, Earth and Moon to be roughly aligned. That happens at full Moon and at new Moon.',
    },
    {
      id: 'gemt-q16',
      type: 'multiple-choice',
      stem: 'The centre to centre distance from the Earth to the Moon is about 384 000 km. The Earth diameter is about 12 800 km. Roughly how many Earth diameters fit between the Earth and the Moon?',
      tier: 'challenge',
      options: [
        'About 3 Earth diameters.',
        'About 30 Earth diameters.',
        'About 300 Earth diameters.',
        'About 3000 Earth diameters.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'Divide 384 000 by 12 800.',
    },
    {
      id: 'gemt-q17',
      type: 'numeric-entry',
      stem: 'A pupil weighs 600 N on Earth, where g = 10 N/kg. Take the gravitational field strength on the Moon as 1.6 N/kg. What would the same pupil weigh on the Moon, in newtons? Give your answer to the nearest whole newton.',
      tier: 'challenge',
      correctAnswer: 96,
      unit: 'N',
      xpValue: 20,
      hint: 'First find the mass from W = m x g on Earth. Then use the same mass with g_Moon to get the Moon weight.',
    },
    {
      id: 'gemt-q18',
      type: 'numeric-entry',
      stem: 'A coast has its first high tide of the day at 03:00. Roughly what time is the next high tide at the same coast? Give your answer as the hour on the 24-hour clock, to the nearest whole hour.',
      tier: 'challenge',
      correctAnswer: 15,
      unit: 'hours (24-hour clock)',
      xpValue: 20,
      hint: 'High tides are about 12 hours apart. Add 12 hours to 03:00.',
    },
    {
      id: 'gemt-q19',
      type: 'multiple-choice',
      stem: 'A textbook says the Sun also pulls on the oceans, but the Moon has the bigger effect on tides. Which sentence best explains why?',
      tier: 'challenge',
      options: [
        'The Sun has less mass than the Moon, so its pull is weaker.',
        'The Sun is so much further away that, even though it has huge mass, the difference in its pull across the Earth is smaller than the Moon difference. Tides depend on that difference, not the total pull.',
        'The Sun pulls only on the air, not the oceans, so it cannot make tides.',
        'The Sun pulls only at night, so it has no effect on daytime tides.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'gemt-mis-tides-from-total-pull',
      hint: 'Tides come from the difference in the pull across the Earth, not just the size of the pull on the Earth as a whole.',
    },
    {
      id: 'gemt-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining to a friend why the same person weighs less on the Moon than on Earth.',
      tier: 'challenge',
      steps: [
        'State what changes: mass stays the same wherever you go, but weight depends on the gravity where you are standing.',
        'Recall the rule from the prerequisite node: W = m x g.',
        'Note the two values of g for the same person: on Earth, g is about 10 N/kg; on the Moon, g is about 1.6 N/kg.',
        null,
        'State the conclusion: with the same mass m but a smaller g on the Moon, W is smaller, so the person weighs less on the Moon than on the Earth (about a sixth as much).',
      ],
      missingStepIndex: 3,
      correctStep:
        'Compare the weights using W = m x g. For the same m, a smaller g gives a smaller W; on the Moon g is about a sixth of the Earth value, so the Moon weight is about a sixth of the Earth weight.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, on Earth-Moon gravity items where candidates wrote that only the Earth pulls the Moon and not the reverse.
    {
      id: 'gemt-mis-one-way-pull',
      description:
        'Believing that only the larger body (Earth) pulls on the smaller body (Moon), so the Moon does not pull back on the Earth.',
      triggerAnswer: 'one-way-pull',
      correction:
        'Gravity is a two-way pull. Earth and Moon pull on each other with equal and opposite forces. The Moon pull on the Earth is what raises tides.',
      reExplanation:
        'When two masses sit near each other, each pulls the other. The pulls are a pair: equal in size, opposite in direction. The Moon pull on the Earth is the same size as the Earth pull on the Moon. The Earth feels it most clearly in its oceans, where the pull raises two tidal bulges every day, even though the Earth as a whole stays in orbit around the Sun.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates stated that the Moon has no gravity, often citing space film footage of floating objects.
    {
      id: 'gemt-mis-moon-no-gravity',
      description:
        'Stating that the Moon has no gravity at all, often because of film clips showing astronauts hopping or floating.',
      triggerAnswer: 'moon-no-gravity',
      correction:
        'The Moon has gravity. It is about a sixth of Earth gravity, so things weigh less but still fall back to the surface.',
      reExplanation:
        'On the Moon, g is about 1.6 N/kg, compared with about 10 N/kg on the Earth. An 80 kg astronaut weighs 80 x 1.6 = 128 N on the Moon and 80 x 10 = 800 N on the Earth. The Moon weight is much smaller, so the astronaut can hop easily, but they still come back down. Mass does not change with location; weight does.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that a coast has only one high tide a day, missing the two-bulge picture.
    {
      id: 'gemt-mis-one-tide-per-day',
      description:
        'Believing a coast has only one high tide each day, with one bulge under the Moon, missing the far-side bulge.',
      triggerAnswer: 'one-tide-per-day',
      correction:
        'There are two tidal bulges, one near and one far. As the Earth spins, a coast passes through both each day, giving two high tides.',
      reExplanation:
        'The Moon pulls hardest on the near ocean, less on the solid Earth, and least on the far ocean. That difference leaves a bulge on each side of the Earth. Because the Earth spins through both bulges in 24 hours, a coast sees a high tide about every 12 hours: two high tides and two low tides each day.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates swapped the meaning of spring and neap tides, stating that neap tides have the largest range.
    {
      id: 'gemt-mis-spring-neap-swap',
      description:
        'Swapping spring and neap tides: saying neap tides are the biggest and spring tides are the smallest.',
      triggerAnswer: 'spring-neap-swap',
      correction:
        'Spring tides have the larger range (Sun and Moon aligned). Neap tides have the smaller range (Sun and Moon at a right angle).',
      reExplanation:
        'Spring tides happen near full Moon and new Moon, when the Sun, Earth and Moon roughly line up. The Sun pull and Moon pull on the oceans add, so bulges grow taller; highs are higher and lows are lower. Neap tides happen near first and third quarter Moon, when the Sun pull lines up at a right angle and partly cancels the Moon pull, so the bulges are smaller.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates referred to the Moon "pushing" the oceans into a bulge, confusing gravity with a contact push.
    {
      id: 'gemt-mis-moon-pushes',
      description:
        'Stating that the Moon "pushes" water around the Earth to make tides, instead of pulling on it.',
      triggerAnswer: 'moon-pushes',
      correction:
        'Gravity is a pull, not a push. The Moon pulls on the oceans, and the uneven pull across the Earth raises tidal bulges.',
      reExplanation:
        'Gravity is a pull between any two masses. The Moon does not touch the Earth or the oceans, so there is nothing for it to push with. Its pull is stronger on the ocean nearest the Moon and weaker on the ocean farthest away. The two bulges left by that uneven pull are what we measure as high tides on the coast.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates wrote that there is only a near-side tidal bulge because that is where the Moon pulls, missing the far-side bulge.
    {
      id: 'gemt-mis-only-one-bulge',
      description:
        'Drawing only one tidal bulge (on the near side), because that is where the Moon pull is strongest, missing the far-side bulge.',
      triggerAnswer: 'only-one-bulge',
      correction:
        'There are two bulges. The near side is pulled most, the solid Earth is pulled less, and the far ocean is pulled least, so the far ocean is left behind into a second bulge.',
      reExplanation:
        'The Moon pull weakens with distance. The near ocean feels the strongest pull and heaps up towards the Moon. The far ocean feels the weakest pull, while the solid Earth feels something in between and is pulled a little towards the Moon. The far ocean is left behind, forming a second bulge on the far side. That is why two high tides occur each day.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2021, Paper 1F, candidates argued the Sun must dominate tides because its pull on the Earth is much larger than the Moon pull, missing the role of the difference across the Earth.
    {
      id: 'gemt-mis-tides-from-total-pull',
      description:
        'Believing the body with the larger total gravitational pull on the Earth must give the larger tides, missing that tides depend on the difference in pull across the Earth.',
      triggerAnswer: 'tides-from-total-pull',
      correction:
        'Tides depend on the difference in pull across the Earth, not the total pull. The Moon is much closer, so its pull changes more from near side to far side.',
      reExplanation:
        'The Sun pull on the Earth is bigger overall than the Moon pull, but tides come from the difference in pull between the near side and the far side. The Moon is much closer than the Sun, so its pull changes more from one side of the Earth to the other. The Moon, not the Sun, sets the main tidal pattern.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const gravityEarthMoonTidesZoneNodes = [gravityEarthMoonTides]
