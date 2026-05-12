import type { SkillNode } from '@/types/content'

const GALAXY_SHAPES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Three main galaxy shapes: spiral, elliptical, irregular</text>

    <!-- Spiral on the left -->
    <text x="160" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Spiral (barred)</text>
    <ellipse cx="160" cy="200" rx="14" ry="6" stroke-width="3" />
    <path d="M 160 200 C 130 170, 110 220, 100 250" />
    <path d="M 160 200 C 190 230, 210 180, 220 150" />
    <path d="M 174 200 C 200 200, 220 180, 240 200" />
    <path d="M 146 200 C 120 200, 100 220, 80 200" />
    <circle cx="160" cy="200" r="3" fill="currentColor" />
    <text x="160" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">central bar + arms</text>
    <text x="160" y="306" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">young + old stars, gas, dust</text>
    <text x="160" y="322" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">Milky Way is this kind</text>

    <!-- Elliptical in the middle -->
    <text x="400" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Elliptical</text>
    <ellipse cx="400" cy="200" rx="70" ry="50" stroke-width="3" />
    <ellipse cx="400" cy="200" rx="45" ry="32" stroke-width="2" />
    <ellipse cx="400" cy="200" rx="20" ry="14" stroke-width="2" />
    <text x="400" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">smooth oval, no arms</text>
    <text x="400" y="306" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">mostly older stars, little gas</text>
    <text x="400" y="322" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">often the largest galaxies</text>

    <!-- Irregular on the right -->
    <text x="640" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Irregular</text>
    <path d="M 600 180 C 620 160, 660 170, 680 200 C 690 220, 670 240, 640 230 C 610 240, 590 220, 600 180 Z" />
    <circle cx="620" cy="195" r="3" fill="currentColor" />
    <circle cx="650" cy="210" r="3" fill="currentColor" />
    <circle cx="635" cy="225" r="3" fill="currentColor" />
    <circle cx="665" cy="220" r="3" fill="currentColor" />
    <text x="640" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">no clear shape</text>
    <text x="640" y="306" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">often small, gas-rich, star-forming</text>
    <text x="640" y="322" text-anchor="middle" font-size="11" font-style="italic" stroke="none" fill="currentColor">e.g. Magellanic Clouds</text>

    <!-- Bottom rule -->
    <text x="400" y="370" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Every galaxy is a gravitationally bound system of stars, gas, dust and dark matter.</text>
    <text x="400" y="390" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">A typical galaxy holds hundreds of billions of stars.</text>
  </g>
`

const MILKY_WAY_STRUCTURE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">The Milky Way from above: a barred spiral about 100 000 light years across</text>

    <!-- Faint disc outline -->
    <circle cx="400" cy="220" r="180" stroke-width="1" stroke-dasharray="3 5" />

    <!-- Central bar -->
    <ellipse cx="400" cy="220" rx="60" ry="22" stroke-width="3" />
    <text x="400" y="218" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">galactic centre</text>
    <text x="400" y="232" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">supermassive black hole (Sgr A*)</text>

    <!-- Spiral arms -->
    <path d="M 460 220 C 520 200, 560 240, 570 290" stroke-width="3" />
    <path d="M 340 220 C 280 240, 240 200, 230 150" stroke-width="3" />
    <path d="M 400 198 C 460 160, 540 170, 560 130" stroke-width="2" />
    <path d="M 400 242 C 340 280, 260 270, 240 310" stroke-width="2" />

    <!-- Sun position on the Orion arm -->
    <circle cx="500" cy="200" r="6" fill="currentColor" />
    <line x1="500" y1="200" x2="600" y2="160" stroke-width="1" stroke-dasharray="2 3" />
    <text x="610" y="155" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">Sun (Orion Arm)</text>
    <text x="610" y="172" text-anchor="start" font-size="11" stroke="none" fill="currentColor">about 26 000 ly from centre</text>
    <text x="610" y="188" text-anchor="start" font-size="11" stroke="none" fill="currentColor">about 2/3 of the way out</text>

    <!-- Scale bar -->
    <line x1="220" y1="410" x2="580" y2="410" stroke-width="2" />
    <line x1="220" y1="404" x2="220" y2="416" stroke-width="2" />
    <line x1="580" y1="404" x2="580" y2="416" stroke-width="2" />
    <text x="400" y="430" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">about 100 000 light years (the Milky Way's disc diameter)</text>

    <!-- Star count -->
    <text x="80" y="60" text-anchor="start" font-size="12" stroke="none" fill="currentColor">contains 100 to 400 billion stars</text>
    <text x="80" y="78" text-anchor="start" font-size="12" stroke="none" fill="currentColor">plus gas, dust and dark matter</text>
  </g>
`

const COSMIC_SCALE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Zooming out: Sun, Milky Way, Local Group, observable Universe</text>

    <!-- Step 1: Solar System -->
    <text x="100" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Solar System</text>
    <circle cx="100" cy="140" r="4" fill="currentColor" />
    <circle cx="100" cy="140" r="22" stroke-width="2" />
    <text x="100" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Sun + 8 planets</text>
    <text x="100" y="206" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">size: light hours</text>
    <text x="100" y="222" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">1 star</text>

    <line x1="135" y1="140" x2="190" y2="140" stroke-width="2" stroke-dasharray="3 3" />

    <!-- Step 2: Milky Way -->
    <text x="280" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Milky Way</text>
    <ellipse cx="280" cy="140" rx="50" ry="14" stroke-width="3" />
    <path d="M 240 140 C 250 130, 270 132, 290 140" stroke-width="1" />
    <path d="M 320 140 C 310 150, 290 148, 270 140" stroke-width="1" />
    <text x="280" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">our galaxy</text>
    <text x="280" y="206" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">size: 100 000 ly</text>
    <text x="280" y="222" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">100s of billions of stars</text>

    <line x1="335" y1="140" x2="390" y2="140" stroke-width="2" stroke-dasharray="3 3" />

    <!-- Step 3: Local Group -->
    <text x="480" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Local Group</text>
    <ellipse cx="450" cy="140" rx="14" ry="4" stroke-width="2" />
    <circle cx="490" cy="125" r="9" stroke-width="2" />
    <ellipse cx="510" cy="155" rx="10" ry="3" stroke-width="2" />
    <circle cx="465" cy="155" r="3" />
    <circle cx="500" cy="145" r="2" fill="currentColor" />
    <text x="480" y="190" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 80 galaxies</text>
    <text x="480" y="206" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">size: a few million ly</text>
    <text x="480" y="222" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">incl. Andromeda</text>

    <line x1="540" y1="140" x2="590" y2="140" stroke-width="2" stroke-dasharray="3 3" />

    <!-- Step 4: Observable Universe -->
    <text x="680" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Observable Universe</text>
    <circle cx="680" cy="140" r="40" stroke-width="3" />
    <circle cx="660" cy="130" r="1.5" fill="currentColor" />
    <circle cx="690" cy="125" r="1.5" fill="currentColor" />
    <circle cx="700" cy="150" r="1.5" fill="currentColor" />
    <circle cx="670" cy="160" r="1.5" fill="currentColor" />
    <circle cx="685" cy="145" r="1.5" fill="currentColor" />
    <text x="680" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">200 billion to 2 trillion</text>
    <text x="680" y="216" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">galaxies</text>
    <text x="680" y="232" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">size: about 93 billion ly</text>

    <!-- Bottom rule -->
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Each step is much bigger than the one before it. The numbers grow by factors of millions.</text>
    <text x="400" y="345" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">Our Sun is one star in one galaxy among hundreds of billions in the observable Universe.</text>
    <text x="400" y="370" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">"Solar System" and "galaxy" are NOT the same thing.</text>
  </g>
`

export const spaceGalaxies: SkillNode = {
  id: 'physics-space-galaxies',
  title: 'Galaxies and the Milky Way',
  description:
    'A galaxy is a gravitationally bound system of hundreds of billions of stars, gas, dust and dark matter. Galaxies come in three main shapes: spiral (with arms), elliptical (smooth oval) and irregular (no clear shape). The Milky Way is our galaxy: a barred spiral about 100 000 light years across, holding 100 to 400 billion stars. Our Sun sits in the Orion Arm, about 26 000 light years from the galactic centre, so we are roughly 2/3 of the way out, not at the middle. On a dark night at Galloway Forest Park in Scotland we see the Milky Way edge-on as a hazy band of light across the sky. The nearest large neighbour galaxy is Andromeda (M31), about 2.5 million light years away, visible to the naked eye on clear UK nights as a small fuzzy patch. Andromeda and the Milky Way are two of about 80 galaxies in the Local Group. Beyond the Local Group lies the Virgo Supercluster and the cosmic web. The observable Universe holds 200 billion to 2 trillion galaxies in a region about 93 billion light years across. Year 7 work stays qualitative: we name the shapes, place the Sun inside the Milky Way, and reason about the scale jumps from Solar System to galaxy to Local Group to Universe.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'challenge',
  prerequisites: ['physics-space-sun-as-star', 'physics-space-light-years'],
  curriculum: {
    ks3Objective:
      'Our Sun as a star, other stars in our galaxy, other galaxies.',
    awardingBodies: {
      aqa: '4.8.1.1 Our solar system; the Milky Way as our galaxy, structure and scale of the Universe (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.8 to 8.10 galaxies and the structure of the Universe (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; galaxies, the Milky Way, scale of the observable Universe (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: Royal Astronomical Society (RAS) outreach poster "Types of Galaxies" 2023, summarises Hubble's spiral/elliptical/irregular classification used in KS3 and KS4 astronomy.
    {
      id: 'pgal-shapes',
      title: 'Three Main Galaxy Shapes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the three main galaxy shapes and the kinds of stars they hold.',
      data: {
        viewBox: '0 0 800 400',
        svg: GALAXY_SHAPES_SVG,
        hotspots: [
          {
            id: 'pgal-shape-spiral',
            x: 20,
            y: 50,
            label: 'Spiral: bar + arms, like the Milky Way',
            description:
              'A spiral galaxy has a bright central bulge or bar with curved arms winding outward. The arms are full of young blue stars, gas and dust where new stars form. The bulge holds older yellow stars. The Milky Way is a barred spiral and so is Andromeda.',
          },
          {
            id: 'pgal-shape-elliptical',
            x: 50,
            y: 50,
            label: 'Elliptical: smooth oval, no arms',
            description:
              'An elliptical galaxy looks like a smooth oval ball of stars. It has no spiral arms and very little gas left, so few new stars form. Most of its stars are old and yellowish or red. The largest galaxies in the Universe tend to be giant ellipticals at the centres of clusters.',
          },
          {
            id: 'pgal-shape-irregular',
            x: 80,
            y: 50,
            label: 'Irregular: no clear shape',
            description:
              'An irregular galaxy has no neat structure. It is often small, gas-rich and forming stars at a high rate. The Large and Small Magellanic Clouds, two small companion galaxies to the Milky Way, are irregulars visible from the Southern Hemisphere.',
          },
          {
            id: 'pgal-shape-defn',
            x: 50,
            y: 92,
            label: 'A galaxy holds hundreds of billions of stars',
            description:
              'Every galaxy is a gravitationally bound system: stars, gas, dust and dark matter all held together by their own gravity. A typical galaxy holds hundreds of billions of stars. A galaxy is NOT the same thing as a solar system, which is just one star plus its planets.',
          },
        ],
      },
    },
    // Source: ESA Hubble outreach page "The Milky Way Galaxy" 2024, gives the disc diameter (~100 000 ly), star count (100 to 400 billion) and Sun's position (Orion Arm, ~26 000 ly from centre).
    {
      id: 'pgal-mw-structure',
      title: 'The Milky Way: Our Galaxy from Above',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to place the Sun inside the Milky Way and read its scale and star count.',
      data: {
        viewBox: '0 0 800 460',
        svg: MILKY_WAY_STRUCTURE_SVG,
        hotspots: [
          {
            id: 'pgal-mw-bar',
            x: 50,
            y: 50,
            label: 'Galactic centre: a bar with a supermassive black hole',
            description:
              'The Milky Way is a barred spiral. A long bar of older stars runs through the middle. Right at the centre sits Sagittarius A*, a supermassive black hole with a mass about 4 million times that of our Sun. We do not orbit the centre at the bar; we orbit far out from it.',
          },
          {
            id: 'pgal-mw-arm',
            x: 78,
            y: 38,
            label: 'Our Sun in the Orion Arm',
            description:
              'Our Sun sits in the Orion Arm (sometimes called the Orion Spur), one of the outer spiral arms. We are about 26 000 light years from the centre, roughly 2/3 of the way out from the middle. We are not at the centre of the Milky Way.',
          },
          {
            id: 'pgal-mw-scale',
            x: 50,
            y: 92,
            label: 'About 100 000 light years across',
            description:
              'The Milky Way disc is about 100 000 light years in diameter. Light itself takes 100 000 years to cross from one edge to the other. The disc is thin: only about 1 000 light years thick in most places.',
          },
          {
            id: 'pgal-mw-stars',
            x: 18,
            y: 15,
            label: '100 to 400 billion stars + gas, dust, dark matter',
            description:
              'The Milky Way holds somewhere between 100 billion and 400 billion stars. The exact number is hard to pin down because most stars are faint red dwarfs. The disc also holds vast clouds of gas and dust where new stars form, and a halo of dark matter that adds most of the mass.',
          },
        ],
      },
    },
    // Source: NASA "Cosmic Distance Scale" 2023 explainer, lists Solar System -> Milky Way -> Local Group -> observable Universe with sizes and galaxy counts used in this scene.
    {
      id: 'pgal-cosmic-scale',
      title: 'Zooming Out: Solar System to Observable Universe',
      type: 'labelled-diagram',
      instructions:
        'Click each step to compare four scales of the cosmos and read the size jump between them.',
      data: {
        viewBox: '0 0 800 400',
        svg: COSMIC_SCALE_SVG,
        hotspots: [
          {
            id: 'pgal-cs-solar',
            x: 12,
            y: 50,
            label: 'Step 1: Solar System (one star)',
            description:
              'A solar system is one star plus its planets. Ours holds the Sun, 8 planets and many smaller bodies. The size is measured in light hours: light takes about 4 hours to cross to Neptune. This is the smallest step.',
          },
          {
            id: 'pgal-cs-mw',
            x: 35,
            y: 50,
            label: 'Step 2: Milky Way (one galaxy)',
            description:
              'Our galaxy is the Milky Way. It holds hundreds of billions of stars, including our Sun. The size jumps from light hours to about 100 000 light years. The Solar System is a tiny dot inside it.',
          },
          {
            id: 'pgal-cs-localgroup',
            x: 60,
            y: 50,
            label: 'Step 3: Local Group (about 80 galaxies)',
            description:
              'The Local Group is a small cluster of about 80 galaxies bound by gravity. The two big ones are the Milky Way and Andromeda (M31). The size is a few million light years across. Beyond the Local Group lies the Virgo Supercluster.',
          },
          {
            id: 'pgal-cs-universe',
            x: 85,
            y: 50,
            label: 'Step 4: Observable Universe (200 billion to 2 trillion galaxies)',
            description:
              'The observable Universe holds somewhere between 200 billion and 2 trillion galaxies, spread across a region about 93 billion light years across. Each jump in this scene multiplies the size by a huge factor. Solar System and galaxy are very different scales.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specimen mark scheme 2018, model answer for "describe the Milky Way" sets the structure used here (shape, scale, star count, Sun's position).
    {
      id: 'pgal-worked-1',
      title: 'Describing the Milky Way: shape, scale, stars, Sun',
      steps: [
        {
          explanation:
            'Set out the question. A pupil at a Year 7 lesson in Bristol is asked to describe the Milky Way to a partner using four facts: its shape, its size, how many stars it holds, and where the Sun sits inside it.',
        },
        {
          explanation:
            'State the shape. The Milky Way is a barred spiral galaxy. It has a central bar of older stars and curved arms winding outward, packed with younger blue stars, gas and dust.',
        },
        {
          explanation:
            'State the size. The disc is about 100 000 light years across. That means light, which is the fastest signal we know, would take 100 000 years to cross from one edge of the galaxy to the other.',
          maths: 'disc diameter ~ 100 000 light years',
        },
        {
          explanation:
            'State the star count. The Milky Way holds roughly 100 billion to 400 billion stars, plus huge clouds of gas and dust between them and a halo of dark matter that adds most of the mass.',
        },
        {
          explanation:
            'Place the Sun. Our Sun sits in the Orion Arm, about 26 000 light years out from the galactic centre. That is about 2/3 of the way from the centre to the edge. We are not at the middle of the galaxy; we are out in the suburbs.',
          maths: 'Sun distance from centre ~ 26 000 ly, out of ~ 50 000 ly half-diameter',
        },
        {
          explanation:
            'State the final summary. The Milky Way is a barred spiral about 100 000 light years across, holding 100 to 400 billion stars, with our Sun in an outer arm about 26 000 light years from the centre.',
        },
      ],
    },
    // Source: BBC Bitesize KS3 "Galaxies and the Universe" 2023, walks through the Solar System -> galaxy -> Local Group -> Universe scale ladder in this order.
    {
      id: 'pgal-worked-2',
      title: 'Climbing the scale ladder: Sun to observable Universe',
      steps: [
        {
          explanation:
            'Set out the question. A pupil is asked to put four objects in order from smallest to largest: the Sun, the Milky Way, the Local Group, the observable Universe. They then need to give a size in light years for each one.',
        },
        {
          explanation:
            'Place the Sun first. The Sun is a single star. Its diameter is about 1.4 million km, far less than even one light year. On the cosmic ladder it is the smallest item in the list.',
        },
        {
          explanation:
            'Place the Milky Way second. The Milky Way is a galaxy holding hundreds of billions of stars including our Sun. Its disc is about 100 000 light years across, much larger than any single star.',
          maths: 'Milky Way ~ 100 000 ly across',
        },
        {
          explanation:
            'Place the Local Group third. The Local Group is a small cluster of about 80 galaxies, including the Milky Way and Andromeda. It is a few million light years across, much larger than a single galaxy. Andromeda alone sits about 2.5 million light years from us.',
          maths: 'Local Group ~ a few million ly across',
        },
        {
          explanation:
            'Place the observable Universe fourth. The observable Universe holds between 200 billion and 2 trillion galaxies, spread across a region about 93 billion light years in diameter. It is by far the largest item on the list.',
          maths: 'observable Universe ~ 93 billion ly across',
        },
        {
          explanation:
            'State the final answer. From smallest to largest: Sun (about 1.4 million km), Milky Way (about 100 000 ly), Local Group (a few million ly), observable Universe (about 93 billion ly). Each step is far larger than the one before it.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pgal-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes a galaxy?',
      tier: 'core',
      options: [
        'A single star with its own planets orbiting around it.',
        'A gravitationally bound system of hundreds of billions of stars, gas, dust and dark matter.',
        'The empty region of space between two stars.',
        'A small rocky body that orbits a planet.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pgal-mis-solar-system-equals-galaxy',
      hint: 'A galaxy is much, much bigger than a solar system. It holds hundreds of billions of stars.',
    },
    {
      id: 'pgal-q2',
      type: 'multiple-choice',
      stem: 'What is the name of our galaxy?',
      tier: 'core',
      options: [
        'Andromeda',
        'The Solar System',
        'The Milky Way',
        'The Local Group',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'On a dark UK night you can see it edge-on as a hazy band of light across the sky.',
    },
    {
      id: 'pgal-q3',
      type: 'multiple-choice',
      stem: 'Which best describes the shape of the Milky Way?',
      tier: 'core',
      options: [
        'A smooth oval ball of stars with no arms.',
        'A barred spiral, with a central bar and curved arms winding outward.',
        'An irregular blob with no clear structure.',
        'A perfect cube with stars at each corner.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pgal-mis-all-galaxies-spiral',
      hint: 'The Milky Way has a central bar of older stars and several spiral arms.',
    },
    {
      id: 'pgal-q4',
      type: 'multiple-choice',
      stem: 'Where does our Sun sit inside the Milky Way?',
      tier: 'core',
      options: [
        'Right at the galactic centre, next to the supermassive black hole.',
        'In the Orion Arm, about 26 000 light years from the centre, roughly 2/3 of the way out.',
        'Outside the Milky Way, in a separate galaxy.',
        'Spinning around the edge of the Local Group.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pgal-mis-sun-at-centre',
      hint: 'We are not at the middle of the galaxy. We sit far out in one of the spiral arms.',
    },
    {
      id: 'pgal-q5',
      type: 'multiple-choice',
      stem: 'A pupil at a school in Cardiff writes: "Our Solar System and the Milky Way are the same thing." What is the best correction?',
      tier: 'core',
      options: [
        'The pupil is right; both words mean the same thing.',
        'The Solar System is one star (the Sun) plus its planets. The Milky Way is a whole galaxy holding hundreds of billions of stars, of which the Sun is just one. The Solar System sits inside the Milky Way.',
        'The Solar System is bigger than the Milky Way.',
        'The Milky Way is a planet that orbits the Sun.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pgal-mis-solar-system-equals-galaxy',
      hint: 'Solar System = one star + planets. Galaxy = hundreds of billions of stars.',
    },
    {
      id: 'pgal-q6',
      type: 'drag-order',
      stem: 'Put the four cosmic objects in order from SMALLEST to LARGEST in size.',
      tier: 'core',
      items: [
        'The Local Group (a cluster of about 80 galaxies).',
        'The Sun (a single star).',
        'The observable Universe.',
        'The Milky Way (our galaxy).',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 10,
      hint: 'A single star is smaller than a galaxy, which is smaller than a cluster of galaxies, which is smaller than the whole observable Universe.',
    },
    {
      id: 'pgal-q7',
      type: 'multiple-choice',
      stem: 'What are the three main shapes of galaxy?',
      tier: 'core',
      options: [
        'Spiral, elliptical and irregular.',
        'Round, square and triangular.',
        'Hot, warm and cold.',
        'Small, medium and large.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pgal-mis-all-galaxies-spiral',
      hint: 'One shape has arms, one is a smooth oval, one has no clear structure.',
    },
    {
      id: 'pgal-q8',
      type: 'multiple-choice',
      stem: 'Roughly how many stars does the Milky Way hold?',
      tier: 'confident',
      options: [
        'About 100 stars.',
        'About 1 million stars.',
        'About 100 to 400 billion stars.',
        'Exactly 1 trillion stars.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'A galaxy holds hundreds of billions of stars; we cannot count them all exactly.',
    },
    {
      id: 'pgal-q9',
      type: 'multiple-choice',
      stem: 'Andromeda (M31) is sometimes pointed out by an astronomy club at Galloway Forest Park on a clear UK night. Which sentence best describes Andromeda?',
      tier: 'confident',
      options: [
        'It is a star inside the Milky Way, near our Sun.',
        'It is a planet orbiting one of the outer Milky Way stars.',
        'It is the centre of the Milky Way galaxy.',
        'It is the nearest large spiral galaxy to the Milky Way, about 2.5 million light years away.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pgal-mis-andromeda-inside-milky-way',
      hint: 'Andromeda is a separate galaxy from the Milky Way, but it is in the same Local Group.',
    },
    {
      id: 'pgal-q10',
      type: 'multiple-choice',
      stem: 'A pupil writes: "The Milky Way is the only galaxy in the Universe. All the other stars we see at night are in other galaxies that orbit ours." What is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is correct on both counts.',
        'The pupil is correct that the Milky Way is the only galaxy, but wrong about the orbit.',
        'The Milky Way is one of an enormous number of galaxies; the observable Universe holds 200 billion to 2 trillion of them. All the individual stars we see with the naked eye on a UK night are inside the Milky Way itself.',
        'There are exactly two galaxies in the Universe: the Milky Way and Andromeda.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pgal-mis-milky-way-only-galaxy',
      hint: 'There are hundreds of billions of galaxies. The naked-eye stars we see at night are nearby stars inside our own galaxy.',
    },
    {
      id: 'pgal-q11',
      type: 'multiple-choice',
      stem: 'The Milky Way is a member of which larger structure?',
      tier: 'confident',
      options: [
        'The Solar System.',
        'The Local Group, a cluster of about 80 galaxies bound by gravity.',
        'The Andromeda galaxy.',
        'The Orion Arm.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pgal-mis-mw-equals-local-group',
      hint: 'The Milky Way and Andromeda are the two largest members of this group of about 80 galaxies.',
    },
    {
      id: 'pgal-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why we see the Milky Way as a hazy band of light across the sky at Galloway Forest Park on a clear UK night.',
      tier: 'confident',
      steps: [
        'State the shape: the Milky Way is a barred spiral, a flat disc about 100 000 light years across and only about 1 000 light years thick.',
        'Place the Sun: our Sun sits inside this disc, in one of the outer spiral arms (the Orion Arm).',
        'Note what we see: when we look out into the night sky, we look through the disc itself in different directions.',
        null,
        'State the answer: looking along the plane of the disc we see the combined light of hundreds of millions of distant stars, blurred into a hazy band; looking out of the plane we see fewer stars and no band.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Picture the geometry: when we look along the plane of the disc we look through huge numbers of distant stars; when we look out of the plane, perpendicular to the disc, we soon look out into much emptier space.',
      xpValue: 15,
    },
    {
      id: 'pgal-q13',
      type: 'drag-order',
      stem: 'Put these four objects in order of size from SMALLEST to LARGEST, on a cosmic scale.',
      tier: 'confident',
      items: [
        'The Milky Way (our galaxy, about 100 000 light years across).',
        'A single star (such as our Sun, about 1.4 million km across).',
        'The observable Universe (about 93 billion light years across).',
        'The Solar System (Sun + planets, about 4 light hours across).',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      misconceptionId: 'pgal-mis-solar-system-equals-galaxy',
      hint: 'Star is smaller than the Solar System; Solar System is much smaller than the galaxy; one galaxy is tiny compared with the whole observable Universe.',
    },
    {
      id: 'pgal-q14',
      type: 'numeric-entry',
      stem: 'The supermassive black hole Sagittarius A* lies at the centre of the Milky Way. The Sun sits in the Orion Arm, about 2/3 of the way out from the centre of a 100 000 light year disc. Roughly how many light years is the Sun from the galactic centre? Enter the number of light years.',
      tier: 'confident',
      correctAnswer: 26000,
      unit: 'light years',
      xpValue: 15,
      hint: 'The Sun is about 26 000 light years from the centre, roughly 2/3 of the way out from the middle.',
    },
    {
      id: 'pgal-q15',
      type: 'numeric-entry',
      stem: 'Astronomers say the Milky Way is about 100 000 light years across. How many light years does light take to cross from one edge of the disc to the other? Enter the number of light years.',
      tier: 'core',
      correctAnswer: 100000,
      unit: 'light years',
      xpValue: 10,
      hint: 'Light covers 1 light year in 1 year, so it crosses a 100 000 ly disc in 100 000 years.',
    },
    {
      id: 'pgal-q16',
      type: 'numeric-entry',
      stem: 'Andromeda (M31) is about 2.5 million light years from the Milky Way. Light from Andromeda has therefore been travelling for 2.5 million years before it reaches us. How many millions of years has the light we see tonight been travelling? Enter the number of million years.',
      tier: 'confident',
      correctAnswer: 2.5,
      unit: 'million years',
      xpValue: 15,
      hint: 'Light covers 1 light year in 1 year. So 2.5 million light years takes 2.5 million years.',
    },
    {
      id: 'pgal-q17',
      type: 'numeric-entry',
      stem: 'The Sun sits about 26 000 light years from the centre of the Milky Way. The galactic disc has a half-diameter (centre to edge) of about 50 000 light years. To the nearest 1 000 light years, how many light years would the Sun still need to travel outward to reach the edge of the disc? Enter the number of light years.',
      tier: 'challenge',
      correctAnswer: 24000,
      unit: 'light years',
      xpValue: 20,
      hint: 'Edge distance minus current distance: 50 000 minus 26 000.',
    },
    {
      id: 'pgal-q18',
      type: 'spot-misconception',
      stem: 'A school astronomy club discusses Andromeda after a session at Galloway Forest Park. Iqra describes what Andromeda is.',
      tier: 'challenge',
      statements: [
        {
          text: 'Iqra says: "Andromeda is a bright star inside the Milky Way, near our Sun. It is one of the stars we can see in the spiral arm next to the Orion Arm."',
          isMisconception: true,
        },
        {
          text: 'Iqra says: "Andromeda (M31) is a separate galaxy from the Milky Way, the nearest large spiral neighbour, about 2.5 million light years away. We can see it on a clear UK night as a small fuzzy patch, not as a single point of starlight."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pgal-mis-andromeda-inside-milky-way',
    },
    {
      id: 'pgal-q19',
      type: 'spot-misconception',
      stem: 'A Year 7 pupil in Bristol is asked where our Sun sits inside the Milky Way. Theo gives an answer.',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo says: "The Sun is at the very centre of the Milky Way. All the other stars in the galaxy orbit around it, just like the planets orbit the Sun in our Solar System."',
          isMisconception: true,
        },
        {
          text: 'Theo says: "The Sun sits in the Orion Arm, about 26 000 light years from the galactic centre, roughly 2/3 of the way out from the middle. The centre of the Milky Way holds a supermassive black hole called Sagittarius A*, not our Sun."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pgal-mis-sun-at-centre',
    },
    {
      id: 'pgal-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about the size jump from the Solar System to the observable Universe.',
      tier: 'challenge',
      steps: [
        'State the Solar System size: about 4 light hours from the Sun to Neptune, far less than one light year.',
        'State the Milky Way size: a disc about 100 000 light years across, holding hundreds of billions of stars including our Sun.',
        'State the Local Group size: a cluster of about 80 galaxies, a few million light years across, including the Milky Way and Andromeda.',
        null,
        'State the answer: each step is much larger than the one before, so the Solar System is a tiny region inside one galaxy among hundreds of billions in the observable Universe.',
      ],
      missingStepIndex: 3,
      correctStep:
        'State the observable Universe size: a region about 93 billion light years across, holding 200 billion to 2 trillion galaxies, with the Local Group as one small cluster inside it.',
      xpValue: 20,
    },
    {
      id: 'pgal-q21',
      type: 'drag-order',
      stem: 'Put the steps in the right order to describe the Milky Way to a partner.',
      tier: 'challenge',
      items: [
        'Place the Sun: it sits in the Orion Arm, about 26 000 light years from the centre, roughly 2/3 of the way out.',
        'Name the shape: the Milky Way is a barred spiral galaxy.',
        'State the contents: hundreds of billions of stars (100 to 400 billion), plus gas, dust and dark matter.',
        'State the size: the disc is about 100 000 light years across.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
      hint: 'Start with the shape, then the size, then what is inside, then where we sit.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 2H, candidates wrote that "the Solar System and the Milky Way are the same thing", confusing one star + planets with a whole galaxy of hundreds of billions of stars.
    {
      id: 'pgal-mis-solar-system-equals-galaxy',
      description:
        'Believing that the Solar System and the Milky Way galaxy are the same thing, conflating one star + planets with a whole galaxy.',
      triggerAnswer: 'solar-system-equals-galaxy',
      correction:
        'The Solar System is one star (the Sun) plus its planets. The Milky Way is a whole galaxy of 100 to 400 billion stars. Our Solar System is one tiny dot inside it.',
      reExplanation:
        'A solar system has just one star at the middle and a handful of planets in orbit. A galaxy is far bigger: it holds hundreds of billions of stars, plus huge clouds of gas and dust, plus dark matter, all bound by gravity. Our Sun is one of those hundreds of billions of stars in the Milky Way. The Solar System sits inside the Milky Way, not next to it.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, Paper 1PH0/2H, candidates placed our Sun at the centre of the Milky Way rather than in an outer arm about 26 000 ly from the centre.
    {
      id: 'pgal-mis-sun-at-centre',
      description:
        'Believing that our Sun sits at the centre of the Milky Way galaxy, rather than far out in one of the spiral arms.',
      triggerAnswer: 'sun-at-centre',
      correction:
        'The Sun is NOT at the centre of the Milky Way. It sits in the Orion Arm, about 26 000 light years from the centre, roughly 2/3 of the way out.',
      reExplanation:
        'At the centre of the Milky Way lies Sagittarius A*, a supermassive black hole about 4 million times the mass of the Sun. Our Sun is far from that centre. It is one ordinary star in the Orion Arm, about 26 000 light years from the middle of a 100 000 light year disc. From our position we see the Milky Way edge-on as a hazy band.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, Paper J259/02, candidates wrote that Andromeda is a star or feature inside the Milky Way, rather than a separate galaxy about 2.5 million ly away.
    {
      id: 'pgal-mis-andromeda-inside-milky-way',
      description:
        'Believing that Andromeda is a star or region inside the Milky Way, rather than a separate galaxy in the Local Group.',
      triggerAnswer: 'andromeda-inside-milky-way',
      correction:
        'Andromeda (M31) is a separate galaxy, not part of the Milky Way. It is the nearest large spiral neighbour, about 2.5 million light years away in the Local Group.',
      reExplanation:
        'On a clear UK night at a dark-sky site such as Galloway Forest Park, Andromeda appears as a small fuzzy patch. That fuzz is the combined light of a trillion stars in a galaxy outside our own. Andromeda and the Milky Way are the two big members of the Local Group, a cluster of about 80 galaxies. The light reaching us tonight set out 2.5 million years ago.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 2H, candidates assumed all galaxies are spiral, missing ellipticals and irregulars.
    {
      id: 'pgal-mis-all-galaxies-spiral',
      description:
        'Believing that every galaxy has a spiral shape, missing the elliptical and irregular shapes.',
      triggerAnswer: 'all-galaxies-spiral',
      correction:
        'There are three main galaxy shapes: spiral (with arms), elliptical (smooth oval, no arms) and irregular (no clear shape). The Milky Way is a barred spiral; many galaxies are not.',
      reExplanation:
        'Spiral galaxies show curved arms full of young blue stars and gas. Elliptical galaxies are smooth ovals of mostly older yellow or red stars with little gas; the largest galaxies in the Universe are giant ellipticals. Irregular galaxies have no clear shape and are often small and gas-rich, like the Magellanic Clouds. A pupil who labels every galaxy as a spiral has missed two of the three families.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, Paper J259/02, candidates wrote that the Milky Way is the only galaxy and other naked-eye stars are in other galaxies.
    {
      id: 'pgal-mis-milky-way-only-galaxy',
      description:
        'Believing that the Milky Way is the only galaxy in the Universe, or that naked-eye night-sky stars sit in other galaxies.',
      triggerAnswer: 'milky-way-only-galaxy',
      correction:
        'The observable Universe holds 200 billion to 2 trillion galaxies, not just the Milky Way. Every individual star you see at night with the naked eye is inside our own Milky Way.',
      reExplanation:
        'On a UK night sky, every single twinkling star you can pick out is in the Milky Way, often only a few hundred light years away. Other galaxies are so far off that even Andromeda, the nearest big neighbour, appears as a small fuzzy patch, not a single point of starlight. The Milky Way is one galaxy among hundreds of billions in the observable Universe.',
    },
    // Source: Royal Astronomical Society outreach FAQ 2024, addresses the common confusion that the Milky Way and the Local Group are the same scale, when in fact the Local Group contains ~80 galaxies of which the Milky Way is just one.
    {
      id: 'pgal-mis-mw-equals-local-group',
      description:
        'Believing that the Milky Way and the Local Group are the same thing, missing that the Local Group is a cluster of about 80 galaxies.',
      triggerAnswer: 'mw-equals-local-group',
      correction:
        'The Milky Way is ONE galaxy. The Local Group is a cluster of about 80 galaxies bound by gravity, including the Milky Way, Andromeda and many smaller members.',
      reExplanation:
        'The Milky Way is a single barred spiral galaxy about 100 000 light years across. The Local Group is much larger: it spans a few million light years and contains about 80 galaxies. The Milky Way and Andromeda are its two biggest members, with the Magellanic Clouds and dozens of dwarf galaxies as smaller members. Galaxy and galaxy group are different scales.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceGalaxiesZoneNodes = [spaceGalaxies]
