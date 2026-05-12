import type { SkillNode } from '@/types/content'

const ORBIT_GEOMETRY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Sun, Earth, Moon: positions drive the phase we see</text>

    <!-- Sunlight arrows from the left -->
    <line x1="40" y1="200" x2="170" y2="200" stroke-width="2" />
    <polygon points="162,194 178,200 162,206" fill="currentColor" stroke="none" />
    <line x1="40" y1="160" x2="170" y2="160" stroke-width="2" />
    <polygon points="162,154 178,160 162,166" fill="currentColor" stroke="none" />
    <line x1="40" y1="240" x2="170" y2="240" stroke-width="2" />
    <polygon points="162,234 178,240 162,246" fill="currentColor" stroke="none" />
    <text x="40" y="120" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">Sunlight</text>
    <text x="40" y="140" text-anchor="start" font-size="12" stroke="none" fill="currentColor">(from the Sun, far to the left)</text>

    <!-- Earth at the centre -->
    <circle cx="400" cy="200" r="40" stroke-width="2" />
    <path d="M 400 160 A 40 40 0 0 1 400 240" fill="currentColor" />
    <text x="400" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Earth</text>
    <text x="400" y="288" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">half lit, half dark</text>

    <!-- Moon orbit -->
    <circle cx="400" cy="200" r="140" stroke-dasharray="4,4" stroke-width="1" />

    <!-- New Moon (between Sun and Earth) -->
    <circle cx="260" cy="200" r="18" stroke-width="2" />
    <path d="M 260 182 A 18 18 0 0 1 260 218" fill="currentColor" />
    <text x="260" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">New</text>
    <text x="260" y="170" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">dark side faces Earth</text>

    <!-- Full Moon (Earth between Sun and Moon) -->
    <circle cx="540" cy="200" r="18" stroke-width="2" />
    <path d="M 540 182 A 18 18 0 0 0 540 218" fill="currentColor" />
    <text x="540" y="155" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Full</text>
    <text x="540" y="170" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">lit side faces Earth</text>

    <!-- First Quarter (above) -->
    <circle cx="400" cy="60" r="18" stroke-width="2" />
    <path d="M 400 42 A 18 18 0 0 1 400 78" fill="currentColor" />
    <text x="400" y="35" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">First Quarter</text>

    <!-- Last Quarter (below) -->
    <circle cx="400" cy="340" r="18" stroke-width="2" />
    <path d="M 400 322 A 18 18 0 0 0 400 358" fill="currentColor" />
    <text x="400" y="380" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Last Quarter</text>

    <!-- Caption -->
    <text x="400" y="395" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">The lit half always faces the Sun. We see only the part of the lit half angled towards Earth.</text>
  </g>
`

const PHASE_CYCLE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The 29.5 day cycle: eight named phases</text>

    <!-- Top row: waxing -->
    <!-- New (day 0) -->
    <circle cx="100" cy="120" r="28" stroke-width="2" fill="currentColor" />
    <text x="100" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">New</text>
    <text x="100" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">day 0</text>

    <!-- Waxing crescent (day 3.7) -->
    <circle cx="220" cy="120" r="28" stroke-width="2" />
    <path d="M 220 92 A 28 28 0 0 1 220 148 A 14 28 0 0 0 220 92" fill="currentColor" />
    <text x="220" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Waxing Crescent</text>
    <text x="220" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 4</text>

    <!-- First Quarter (day 7.4) -->
    <circle cx="340" cy="120" r="28" stroke-width="2" />
    <path d="M 340 92 A 28 28 0 0 1 340 148" fill="currentColor" />
    <text x="340" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">First Quarter</text>
    <text x="340" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 7</text>

    <!-- Waxing gibbous (day 11) -->
    <circle cx="460" cy="120" r="28" stroke-width="2" fill="currentColor" />
    <path d="M 460 92 A 28 28 0 0 0 460 148 A 14 28 0 0 1 460 92" fill="white" stroke="currentColor" stroke-width="2" />
    <text x="460" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Waxing Gibbous</text>
    <text x="460" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 11</text>

    <!-- Full (day 14.7) -->
    <circle cx="580" cy="120" r="28" stroke-width="2" />
    <text x="580" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Full</text>
    <text x="580" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 15</text>

    <!-- Waning gibbous (day 18) -->
    <circle cx="700" cy="120" r="28" stroke-width="2" fill="currentColor" />
    <path d="M 700 92 A 28 28 0 0 1 700 148 A 14 28 0 0 0 700 92" fill="white" stroke="currentColor" stroke-width="2" />
    <text x="700" y="170" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Waning Gibbous</text>
    <text x="700" y="186" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 18</text>

    <!-- Second row: waning to new -->
    <!-- Last Quarter (day 22) -->
    <circle cx="220" cy="280" r="28" stroke-width="2" />
    <path d="M 220 252 A 28 28 0 0 0 220 308" fill="currentColor" />
    <text x="220" y="330" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Last Quarter</text>
    <text x="220" y="346" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 22</text>

    <!-- Waning crescent (day 26) -->
    <circle cx="340" cy="280" r="28" stroke-width="2" />
    <path d="M 340 252 A 28 28 0 0 0 340 308 A 14 28 0 0 1 340 252" fill="currentColor" />
    <text x="340" y="330" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Waning Crescent</text>
    <text x="340" y="346" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 26</text>

    <!-- Back to New (day 29.5) -->
    <circle cx="460" cy="280" r="28" stroke-width="2" fill="currentColor" />
    <text x="460" y="330" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">New again</text>
    <text x="460" y="346" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">~day 29.5</text>

    <!-- Arrow flow -->
    <text x="400" y="380" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Waxing = lit side growing (right side bright). Waning = lit side shrinking (left side bright).</text>
  </g>
`

const HALF_LIT_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Half the Moon is always lit by sunlight</text>

    <!-- Sunlight from left -->
    <line x1="40" y1="200" x2="170" y2="200" stroke-width="2" />
    <polygon points="162,194 178,200 162,206" fill="currentColor" stroke="none" />
    <text x="40" y="170" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">Sunlight</text>
    <text x="40" y="225" text-anchor="start" font-size="11" stroke="none" fill="currentColor">parallel rays from the Sun</text>

    <!-- Moon -->
    <circle cx="400" cy="200" r="80" stroke-width="2" />
    <path d="M 400 120 A 80 80 0 0 1 400 280" fill="currentColor" />

    <!-- Labels -->
    <line x1="320" y1="80" x2="350" y2="150" stroke-width="1" />
    <text x="280" y="75" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Lit half</text>
    <text x="280" y="92" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(facing Sun)</text>

    <line x1="480" y1="80" x2="450" y2="150" stroke-width="1" />
    <text x="520" y="75" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Dark half</text>
    <text x="520" y="92" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(facing away)</text>

    <!-- Earth viewing arrow -->
    <line x1="620" y1="200" x2="500" y2="200" stroke-width="2" stroke-dasharray="6,4" />
    <text x="660" y="205" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">View from Earth</text>

    <!-- Caption -->
    <text x="400" y="345" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The Moon does not make its own light. It reflects sunlight.</text>
    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The phase we see is the fraction of the lit half that is angled towards Earth.</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Phases are NOT Earth's shadow on the Moon. That is a lunar eclipse, and is rare.</text>
  </g>
`

export const spaceMoonPhases: SkillNode = {
  id: 'physics-space-moon-phases',
  title: 'Moon Phases',
  description:
    'The Moon orbits Earth once every 29.5 days, and as it goes round, sunlight reflects off the half of the Moon that faces the Sun. From Earth we see different fractions of that lit half: New, Waxing Crescent, First Quarter, Waxing Gibbous, Full, Waning Gibbous, Last Quarter, Waning Crescent. Phases are caused by the geometry of where the Sun, Earth and Moon sit, not by Earth casting a shadow on the Moon (that is a rare lunar eclipse). By the end of this node, you can name the phases in order, link each one to a Sun-Earth-Moon position, and explain why the Moon is never fully dark from its own light alone.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'confident',
  prerequisites: ['physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'Gravity force, gravity forces between Earth and Moon (qualitative only); the relative positions of the Sun, Earth and Moon.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; orbital motion of moons around planets (GCSE Physics 8463)',
      edexcel: 'Topic 8 Astronomy, 8.1-8.3 the solar system, planets and moons (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; the Moon as a natural satellite of Earth (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: BBC Bitesize KS3 Physics, Earth and space, Phases of the Moon overview page (bbc.co.uk/bitesize/topics/zw2nb9q).
    {
      id: 'pmp-half-lit',
      title: 'Half the Moon is always lit by the Sun',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why the Moon only reflects sunlight, and how the lit half is set by the Sun.',
      data: {
        viewBox: '0 0 800 400',
        svg: HALF_LIT_SVG,
        hotspots: [
          {
            id: 'pmp-h-sunlight',
            x: 15,
            y: 50,
            label: 'Sunlight arrives in parallel rays',
            description:
              'The Sun is so far away that its rays reach the Moon almost in parallel. Whichever side of the Moon faces the Sun is the side that is lit.',
          },
          {
            id: 'pmp-h-lit',
            x: 35,
            y: 25,
            label: 'Half the Moon is lit at any moment',
            description:
              'The Moon is a sphere, and the Sun only lights one side of any sphere at a time. So at every instant, exactly half the Moon is bright and the other half is dark, just like a football in sunlight.',
          },
          {
            id: 'pmp-h-dark',
            x: 65,
            y: 25,
            label: 'The other half is dark',
            description:
              'The far side from the Sun is not making its own light, so it looks dark. The Moon has no atmosphere to scatter the light round to the back, so the dark half is genuinely unlit.',
          },
          {
            id: 'pmp-h-earth',
            x: 80,
            y: 50,
            label: 'From Earth we see a fraction of the lit half',
            description:
              'As the Moon moves round its orbit, the lit half points in different directions relative to Earth. The phase we see is the slice of that lit half that is angled towards us, from a thin crescent to a full disc.',
          },
          {
            id: 'pmp-h-reflect',
            x: 50,
            y: 90,
            label: 'Moonlight is reflected sunlight',
            description:
              'The Moon does not glow by itself. It is a dusty ball of rock that reflects sunlight back to Earth. That is why phases follow a clean geometric pattern, not a random brightness.',
          },
        ],
      },
    },
    // Source: Institute of Physics IOPSpark, Earth in space topic, Moon phases lesson sequence (spark.iop.org/collections/earth-space).
    {
      id: 'pmp-geometry',
      title: 'Sun, Earth, Moon: where the Moon sits sets the phase',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the phase that goes with each position of the Moon in its orbit around Earth.',
      data: {
        viewBox: '0 0 800 400',
        svg: ORBIT_GEOMETRY_SVG,
        hotspots: [
          {
            id: 'pmp-g-new',
            x: 33,
            y: 50,
            label: 'New Moon: Moon between Sun and Earth',
            description:
              'When the Moon sits roughly between Sun and Earth, the lit half faces away from us. We see the dark half, so the Moon looks invisible in the day sky. This is the New Moon.',
          },
          {
            id: 'pmp-g-full',
            x: 68,
            y: 50,
            label: 'Full Moon: Earth between Sun and Moon',
            description:
              'When Earth sits roughly between Sun and Moon, sunlight strikes the side of the Moon that faces Earth. We see the whole lit half as a bright disc, the Full Moon. The Moon rises at sunset and sets at sunrise.',
          },
          {
            id: 'pmp-g-first',
            x: 50,
            y: 15,
            label: 'First Quarter: Moon a quarter of the way round',
            description:
              'A quarter of the way through the cycle, the angle between Sun and Moon as seen from Earth is 90 degrees. Half of the lit face is angled towards us, so we see a half-disc. The right side is bright (in the northern hemisphere).',
          },
          {
            id: 'pmp-g-last',
            x: 50,
            y: 85,
            label: 'Last Quarter: three quarters round',
            description:
              'Three quarters of the way through, the angle is 90 degrees again but on the other side. We see the other half-disc: the left side is bright (in the northern hemisphere). This is also called Third Quarter.',
          },
          {
            id: 'pmp-g-cycle',
            x: 50,
            y: 98,
            label: 'One full lap takes about 29.5 days',
            description:
              'It takes about 29.5 days for the Moon to return to the same position relative to the Sun, so the phase cycle repeats every 29.5 days. That is roughly one calendar month, the source of the word "month" itself.',
          },
        ],
      },
    },
    // Source: Royal Astronomical Society education pages, Moon phases primer for KS3 teachers (ras.ac.uk/education-and-outreach).
    {
      id: 'pmp-cycle',
      title: 'The eight named phases in order',
      type: 'labelled-diagram',
      instructions:
        'Click each phase marker to see how the lit slice grows and then shrinks across the 29.5 day cycle.',
      data: {
        viewBox: '0 0 800 400',
        svg: PHASE_CYCLE_SVG,
        hotspots: [
          {
            id: 'pmp-c-new',
            x: 12,
            y: 35,
            label: 'New (day 0)',
            description:
              'No lit face visible from Earth. The Moon is roughly in line with the Sun and rises and sets with it, so the sky stays dark at night.',
          },
          {
            id: 'pmp-c-waxing-cres',
            x: 28,
            y: 35,
            label: 'Waxing Crescent (~day 4)',
            description:
              'A thin slice on the right is lit and growing. "Waxing" just means the lit part is getting larger night by night.',
          },
          {
            id: 'pmp-c-first',
            x: 43,
            y: 35,
            label: 'First Quarter (~day 7)',
            description:
              'The right half is bright. We have travelled a quarter of the way through the cycle, hence the name.',
          },
          {
            id: 'pmp-c-waxing-gib',
            x: 58,
            y: 35,
            label: 'Waxing Gibbous (~day 11)',
            description:
              '"Gibbous" means more than half but less than full. The bright slice is still growing on the right.',
          },
          {
            id: 'pmp-c-full',
            x: 73,
            y: 35,
            label: 'Full (~day 15)',
            description:
              'The whole face we see is lit. The Moon rises in the east as the Sun sets in the west.',
          },
          {
            id: 'pmp-c-waning-gib',
            x: 88,
            y: 35,
            label: 'Waning Gibbous (~day 18)',
            description:
              'After Full, the bright slice starts shrinking on the right (left side stays bright). "Waning" means the lit part is getting smaller.',
          },
          {
            id: 'pmp-c-last',
            x: 28,
            y: 80,
            label: 'Last Quarter (~day 22)',
            description:
              'The left half is bright. Three quarters of the way through the cycle.',
          },
          {
            id: 'pmp-c-waning-cres',
            x: 43,
            y: 80,
            label: 'Waning Crescent (~day 26)',
            description:
              'A thin slice on the left is lit and shrinking. After this, the Moon returns to New and the cycle starts again.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: Edexcel GCSE Physics 1PH0 Topic 8 Astronomy student textbook, worked phase-naming exercise.
    {
      id: 'pmp-worked-1',
      title: 'Name the phase: half-disc with the right side bright',
      steps: [
        {
          explanation:
            'Set out what you see. From a back garden in Oxford on a clear evening, the Moon looks like a half-disc with the right-hand side bright and the left-hand side dark.',
        },
        {
          explanation:
            'Recall the rule: in the northern hemisphere, the side of the Moon that is bright tells you where you are in the cycle. Right side bright means the lit half is growing, so the Moon is waxing.',
        },
        {
          explanation:
            'Match the shape to the named phase. A half-disc that is waxing is the First Quarter.',
        },
        {
          explanation:
            'State the answer with a sense check. The Moon is at First Quarter, about 7 days after New Moon. It will be roughly overhead at sunset, which fits a typical UK evening sighting.',
        },
      ],
    },
    // Source: AQA GCSE Physics 8463 4.8 Space sample lesson, Sun-Earth-Moon geometry task.
    {
      id: 'pmp-worked-2',
      title: 'Predict the phase from a Sun-Earth-Moon diagram',
      steps: [
        {
          explanation:
            'Set out the situation. A diagram shows the Sun on the left, Earth in the middle, and the Moon directly to the right of Earth. We want the phase a viewer in London would see.',
        },
        {
          explanation:
            'Work out which side of the Moon is lit. Sunlight comes from the left, so the left side of the Moon is the lit half; the right side is dark.',
        },
        {
          explanation:
            'Work out which side of the Moon faces Earth. The Moon is to the right of Earth, so the side of the Moon facing Earth is its left side, the lit side.',
        },
        {
          explanation:
            'Match this to the named phase. The whole lit half is angled towards us, so we see the entire disc.',
        },
        {
          explanation:
            'State the answer. The viewer in London sees a Full Moon. Sense check: Earth sits between the Sun and the Moon, which is the textbook position for Full Moon.',
        },
      ],
    },
    // Source: BBC Bitesize KS3 Earth and Space, phase-cycle ordering activity.
    {
      id: 'pmp-worked-3',
      title: 'Predict tomorrow night: today is First Quarter',
      steps: [
        {
          explanation:
            'Set out the situation. Tonight a pupil in Cardiff sees a clear First Quarter Moon. They want to know what shape it will be in roughly five nights time.',
        },
        {
          explanation:
            'Recall the sequence. After First Quarter, the next named phase (about 4 days later) is Waxing Gibbous, then Full Moon (about 7 days after First Quarter).',
        },
        {
          explanation:
            'Apply the timing. Five nights after First Quarter sits between Waxing Gibbous and Full Moon, much closer to Gibbous.',
        },
        {
          explanation:
            'State the answer with a sense check. The Moon will look almost full but not yet complete on the left edge: a Waxing Gibbous phase. The lit part is still growing on the right, which matches "waxing".',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmp-q1',
      type: 'multiple-choice',
      stem: 'What causes the phases of the Moon?',
      tier: 'core',
      options: [
        'Earth casts a shadow on the Moon as it orbits.',
        'The Moon spins, so different bright sides turn towards Earth.',
        'The Moon reflects sunlight, and as it orbits Earth, we see different fractions of its lit half.',
        'Clouds in space block parts of the Moon from view.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmp-mis-earth-shadow',
      hint: 'The Moon has a lit half (facing the Sun) and a dark half (facing away). The phase is the slice of the lit half we see from Earth.',
    },
    {
      id: 'pmp-q2',
      type: 'numeric-entry',
      stem: 'About how many days does one full cycle of Moon phases take? Give a whole number.',
      tier: 'core',
      correctAnswer: 29,
      tolerance: 1,
      unit: 'days',
      xpValue: 10,
      hint: 'About one calendar month: roughly 29 or 30 days. The word "month" itself comes from "moon".',
    },
    {
      id: 'pmp-q3',
      type: 'multiple-choice',
      stem: 'Which statement best describes a New Moon?',
      tier: 'core',
      options: [
        'The Moon is between the Sun and Earth, so the lit half faces away from us.',
        'The Moon is on the far side of Earth from the Sun, so we see the whole lit half.',
        'The Moon glows brightly across the whole night sky.',
        'The Moon is hidden by Earth\'s shadow once per orbit.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmp-mis-new-vs-full',
      hint: 'At New Moon, sunlight is lighting the far side of the Moon (away from Earth), so the side facing us is dark.',
    },
    {
      id: 'pmp-q4',
      type: 'multiple-choice',
      stem: 'Which phase is shown when the whole disc of the Moon is bright in our night sky?',
      tier: 'core',
      options: [
        'New Moon',
        'First Quarter',
        'Full Moon',
        'Waning Crescent',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The full lit half faces Earth when Earth sits between Sun and Moon.',
    },
    {
      id: 'pmp-q5',
      type: 'multiple-choice',
      stem: 'Which fraction of the Moon is lit by sunlight at any moment?',
      tier: 'core',
      options: [
        'It depends on the phase: between 0 and the whole Moon.',
        'Only the side currently facing Earth.',
        'None, unless there is a Full Moon.',
        'Exactly one half, at all times.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmp-mis-lit-fraction',
      hint: 'The Sun lights one side of any sphere. The Moon is a sphere, so exactly half is lit at any instant.',
    },
    {
      id: 'pmp-q6',
      type: 'multiple-choice',
      stem: 'A pupil in Manchester sees a half-disc Moon with the right side bright. Which phase is this?',
      tier: 'core',
      options: [
        'New Moon',
        'Last Quarter',
        'Waning Gibbous',
        'First Quarter',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Right side bright in the northern hemisphere means the lit half is growing, so it is waxing. A half-disc that is waxing is First Quarter.',
    },
    {
      id: 'pmp-q7',
      type: 'multiple-choice',
      stem: 'Which sentence is true about the source of moonlight?',
      tier: 'core',
      options: [
        'The Moon makes its own light, like a small star.',
        'The Moon is heated by Earth and glows red.',
        'The Moon reflects sunlight back to Earth.',
        'The Moon glows because of friction with the atmosphere.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmp-mis-moon-glows',
      hint: 'The Moon is a ball of rock with no atmosphere. It does not generate light on its own.',
    },
    {
      id: 'pmp-q8',
      type: 'drag-order',
      stem: 'Put the named phases in order, starting from New Moon and going forward in time.',
      tier: 'confident',
      items: [
        'First Quarter',
        'Full Moon',
        'New Moon',
        'Last Quarter',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
      hint: 'The cycle goes New, then through waxing phases to Full at the halfway point, then through waning phases back to New.',
    },
    {
      id: 'pmp-q9',
      type: 'drag-order',
      stem: 'Put these waxing phases in order, starting from New Moon and going forward in time to Full Moon.',
      tier: 'confident',
      items: [
        'Waxing Gibbous',
        'New Moon',
        'First Quarter',
        'Waxing Crescent',
        'Full Moon',
      ],
      correctOrder: [1, 3, 2, 0, 4],
      xpValue: 15,
      hint: 'The lit slice grows from nothing (New) through a sliver (Crescent), to a half-disc (First Quarter), to more than half (Gibbous), to a full disc (Full).',
    },
    {
      id: 'pmp-q10',
      type: 'numeric-entry',
      stem: 'The First Quarter sits about a quarter of the way through the 29.5 day cycle. About how many days after New Moon is First Quarter? Give a whole number.',
      tier: 'confident',
      correctAnswer: 7,
      tolerance: 1,
      unit: 'days',
      xpValue: 15,
      hint: 'A quarter of 29.5 is about 7.4, so about 7 days after New.',
    },
    {
      id: 'pmp-q11',
      type: 'numeric-entry',
      stem: 'A pupil notes a New Moon on the 1st of the month. About how many days later will the next Full Moon happen? Give a whole number.',
      tier: 'confident',
      correctAnswer: 15,
      tolerance: 1,
      unit: 'days',
      xpValue: 15,
      hint: 'Full Moon is at the halfway point of a 29.5 day cycle, so about 14 or 15 days after New.',
    },
    {
      id: 'pmp-q12',
      type: 'multiple-choice',
      stem: 'Which sentence describes "waxing" most accurately?',
      tier: 'confident',
      options: [
        'The lit part of the Moon is getting smaller night by night.',
        'The Moon is moving away from Earth.',
        'The Moon is moving closer to the Sun.',
        'The lit part of the Moon is getting larger night by night.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pmp-mis-waxing-waning-swap',
      hint: '"Wax" comes from an old word meaning grow. Waning is the opposite: shrinking.',
    },
    {
      id: 'pmp-q13',
      type: 'spot-misconception',
      stem: 'Two pupils in Bristol talk about why we see phases.',
      tier: 'confident',
      statements: [
        {
          text: 'Priya says: "The phases happen because Earth\'s shadow falls across the Moon and slowly slides off." This is wrong; Earth\'s shadow on the Moon is a rare lunar eclipse, not the cause of the monthly phase cycle.',
          isMisconception: true,
        },
        {
          text: 'Tomas says: "The phases happen because the Moon orbits Earth, so we see different fractions of the lit half over the month." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmp-mis-earth-shadow',
    },
    {
      id: 'pmp-q14',
      type: 'multiple-choice',
      stem: 'In a Sun-Earth-Moon diagram, the Sun is on the left, Earth is in the middle, and the Moon is directly above Earth. Which phase does a viewer in Edinburgh see?',
      tier: 'confident',
      options: [
        'First Quarter',
        'New Moon',
        'Full Moon',
        'Last Quarter',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'The Moon is a quarter of the way round its orbit from New. The Sun lights its left side; we see a half-disc with the right side bright.',
    },
    {
      id: 'pmp-q15',
      type: 'numeric-entry',
      stem: 'About how many days pass between First Quarter and Last Quarter (going forward in time through Full Moon)? Give a whole number.',
      tier: 'confident',
      correctAnswer: 15,
      tolerance: 1,
      unit: 'days',
      xpValue: 15,
      hint: 'First Quarter is at ~day 7, Last Quarter is at ~day 22. Subtract.',
    },
    {
      id: 'pmp-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is naming the phase shown in a Sun-Earth-Moon diagram.',
      tier: 'challenge',
      steps: [
        'Read off the geometry: Sun is on the left; Earth is in the middle; Moon is directly to the left of Earth (between Sun and Earth).',
        'Identify which side of the Moon is lit: sunlight comes from the left, so the left side of the Moon is lit and the right side is dark.',
        null,
        'Match this picture to a named phase: when the dark side faces Earth, we see no lit fraction.',
        'State the answer with a sense check: the phase is New Moon. Sense check: New Moon is the textbook case where the Moon sits between Sun and Earth, which matches the geometry given.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Work out which side faces Earth: Earth is to the right of the Moon, so the side of the Moon facing Earth is its right side, the dark side.',
      xpValue: 20,
    },
    {
      id: 'pmp-q17',
      type: 'multiple-choice',
      stem: 'Why do we sometimes see a Full Moon rise just as the Sun sets?',
      tier: 'challenge',
      options: [
        'Because the Moon glows brightly enough to outshine the Sun.',
        'Because Earth sits between Sun and Moon at Full, so the Moon is opposite the Sun in our sky.',
        'Because the Moon is closest to Earth at Full Moon.',
        'Because Earth blocks the Sun from heating the Moon.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'At Full Moon, Sun and Moon are on opposite sides of Earth. As one sets, the other rises.',
    },
    {
      id: 'pmp-q18',
      type: 'numeric-entry',
      stem: 'The phase cycle is 29.5 days. A pupil in Glasgow sees a Full Moon on the 1st of June. About how many days into July will the next Full Moon fall? (Assume June has 30 days. Give a whole number for the date in July.)',
      tier: 'challenge',
      correctAnswer: 1,
      tolerance: 1,
      unit: 'July',
      xpValue: 20,
      hint: 'Add 29.5 days to 1 June. 30 days takes you to 1 July; 29.5 days lands on 30 June or 1 July.',
    },
    {
      id: 'pmp-q19',
      type: 'spot-misconception',
      stem: 'Three pupils discuss why the Moon shines.',
      tier: 'challenge',
      statements: [
        {
          text: 'Ahmed says: "The Moon is a small star and burns its own fuel, which is why it glows white." This is wrong; the Moon is a rocky natural satellite of Earth, not a star, and only reflects sunlight.',
          isMisconception: true,
        },
        {
          text: 'Lucy says: "The Moon shines because sunlight bounces off its rocky surface and some of that reflected light reaches Earth." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmp-mis-moon-glows',
    },
    {
      id: 'pmp-q20',
      type: 'multiple-choice',
      stem: 'A pupil claims: "Once a month, every month, Earth\'s shadow falls on the Moon and that is what makes a New Moon." Which statement best corrects this?',
      tier: 'challenge',
      options: [
        'The pupil is right; New Moon is Earth\'s shadow on the Moon.',
        'New Moon happens because the Moon\'s lit half faces away from Earth; Earth\'s shadow on the Moon is a rare lunar eclipse, not a phase.',
        'New Moon happens because the Moon stops reflecting light for a day.',
        'New Moon is when clouds block the Moon from view across the whole UK.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmp-mis-eclipse-confusion',
      hint: 'A lunar eclipse only happens when Sun, Earth and Moon line up almost exactly, which is not every month.',
    },
    {
      id: 'pmp-q21',
      type: 'drag-order',
      stem: 'A pupil in Belfast watches the Moon over a fortnight starting at Full Moon. Put the named phases they will pass through in time order, ending at New Moon.',
      tier: 'challenge',
      items: [
        'Last Quarter',
        'Waning Gibbous',
        'New Moon',
        'Full Moon',
        'Waning Crescent',
      ],
      correctOrder: [3, 1, 0, 4, 2],
      xpValue: 20,
      misconceptionId: 'pmp-mis-waxing-waning-swap',
      hint: 'After Full, the lit slice shrinks each night: Gibbous, half-disc (Last Quarter), sliver (Waning Crescent), then dark (New).',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F item 04.2, many candidates wrote that phases are caused by Earth's shadow on the Moon.
    {
      id: 'pmp-mis-earth-shadow',
      description:
        'Believing the phases of the Moon are caused by Earth casting a shadow on the Moon.',
      triggerAnswer: 'earth-shadow-on-moon',
      correction:
        'Phases come from the Moon\'s orbit changing which fraction of its lit half we see. Earth\'s shadow on the Moon is a rare lunar eclipse, not the monthly cycle.',
      reExplanation:
        'Half the Moon is lit by sunlight all the time. As the Moon orbits Earth over 29.5 days, the lit half points in different directions relative to us, so we see a thin crescent, half-disc, gibbous, or full disc. Earth\'s shadow only reaches the Moon during a lunar eclipse, which happens a couple of times a year at most, not every month.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, Topic 8 Astronomy, candidates swapped New Moon and Full Moon positions.
    {
      id: 'pmp-mis-new-vs-full',
      description:
        'Swapping the geometry of New Moon and Full Moon: thinking New Moon is when Earth sits between Sun and Moon.',
      triggerAnswer: 'new-full-swap',
      correction:
        'New Moon: the Moon sits between Sun and Earth, so the lit half faces away from us. Full Moon: Earth sits between Sun and Moon, so the lit half faces Earth.',
      reExplanation:
        'Picture the Sun far on the left. If the Moon is just to the left of Earth, sunlight hits the back of the Moon as seen from Earth, so we see the dark side. That is New Moon. If the Moon is to the right of Earth, sunlight strikes the side facing us, and the whole lit disc is visible. That is Full Moon.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, P8 Space, candidates said the Moon glows because it heats up or because it makes light.
    {
      id: 'pmp-mis-moon-glows',
      description:
        'Believing the Moon generates its own light, like a star or a heated body.',
      triggerAnswer: 'moon-makes-light',
      correction:
        'The Moon is rocky and dark; it does not produce light. We see it because sunlight reflects off its surface and reaches our eyes.',
      reExplanation:
        'The Moon is a natural satellite made of rock and dust. It has no atmosphere and no internal source of light. Sunlight from the Sun bounces off the dusty surface and a small fraction reaches Earth. If the Sun stopped shining, the Moon would go completely dark within seconds.',
    },
    // Source: IOPSpark Earth in space lesson notes, common pupil error: "the side facing us is the lit side".
    {
      id: 'pmp-mis-lit-fraction',
      description:
        'Believing only the side facing Earth is lit, so the lit fraction changes with the phase.',
      triggerAnswer: 'lit-side-only-facing-earth',
      correction:
        'Exactly half of the Moon is lit at every moment, set by which side faces the Sun. The phase depends on how much of that lit half is angled towards Earth.',
      reExplanation:
        'Imagine a football in sunlight: one half is bright, the other dark, no matter where you stand. The Moon works the same way. As it orbits Earth, the lit half stays pointing at the Sun, but we view it from different angles, so we see a thin sliver, a half, or all of it.',
    },
    // Source: BBC Bitesize KS3 quiz feedback, pupils often swap waxing (growing) and waning (shrinking).
    {
      id: 'pmp-mis-waxing-waning-swap',
      description:
        'Swapping waxing and waning: thinking "waxing" means shrinking and "waning" means growing.',
      triggerAnswer: 'waxing-waning-swap',
      correction:
        'Waxing means growing: the lit slice is getting larger each night. Waning means shrinking: the lit slice is getting smaller.',
      reExplanation:
        'The word "wax" comes from an old word meaning to grow or increase. So a Waxing Crescent is a thin slice that will grow into a half-disc, then a Gibbous, then Full. After Full, the lit slice shrinks: Waning Gibbous, Last Quarter, Waning Crescent. Remember: wax up, wane down.',
    },
    // Source: Royal Astronomical Society KS3 outreach FAQ, pupils confuse lunar eclipses with the monthly phase cycle.
    {
      id: 'pmp-mis-eclipse-confusion',
      description:
        'Confusing a lunar eclipse (Earth\'s shadow on Moon) with the regular monthly phase cycle.',
      triggerAnswer: 'eclipse-equals-phases',
      correction:
        'A lunar eclipse needs Sun, Earth and Moon to line up almost exactly so Earth\'s shadow falls on the Moon. It is rare; phases happen every month and have nothing to do with shadows.',
      reExplanation:
        'The Moon\'s orbit is tilted by about 5 degrees relative to Earth\'s orbit. Most months the Moon passes above or below Earth\'s shadow, so no eclipse happens. Phases, by contrast, happen every single month because they only need the Moon to move round Earth, not to line up perfectly with the Sun.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceMoonPhasesZoneNodes = [spaceMoonPhases]
