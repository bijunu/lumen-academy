import type { SkillNode } from '@/types/content'

const SUN_PATH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Life cycle of a sun-sized star (about 1 solar mass)</text>

    <!-- Stage 1: nebula -->
    <ellipse cx="80" cy="200" rx="55" ry="40" stroke-dasharray="3,3" />
    <text x="80" y="205" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">nebula</text>
    <text x="80" y="265" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dust + gas</text>

    <!-- Stage 2: protostar -->
    <circle cx="220" cy="200" r="18" fill="currentColor" />
    <text x="220" y="245" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">protostar</text>
    <text x="220" y="265" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">gravity heats core</text>

    <!-- Stage 3: main sequence -->
    <circle cx="360" cy="200" r="22" fill="currentColor" />
    <text x="360" y="245" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">main sequence</text>
    <text x="360" y="265" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">H to He fusion</text>
    <text x="360" y="282" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">about 10 billion years</text>

    <!-- Stage 4: red giant -->
    <circle cx="510" cy="200" r="50" fill="currentColor" />
    <text x="510" y="205" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">red</text>
    <text x="510" y="222" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">giant</text>
    <text x="510" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">He to C/O fusion</text>

    <!-- Stage 5: planetary nebula -->
    <circle cx="640" cy="200" r="40" stroke-dasharray="2,3" />
    <circle cx="640" cy="200" r="8" fill="currentColor" />
    <text x="640" y="260" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">planetary nebula</text>
    <text x="640" y="278" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">outer shell blown off</text>

    <!-- Stage 6: white dwarf -->
    <circle cx="740" cy="200" r="7" fill="currentColor" />
    <text x="740" y="245" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">white dwarf</text>
    <text x="740" y="263" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Earth-sized core</text>
    <text x="740" y="280" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cools over billions of years</text>

    <!-- Arrows between stages -->
    <line x1="140" y1="200" x2="200" y2="200" stroke-width="2" />
    <polygon points="194,196 204,200 194,204" fill="currentColor" stroke="none" />
    <line x1="240" y1="200" x2="338" y2="200" stroke-width="2" />
    <polygon points="332,196 342,200 332,204" fill="currentColor" stroke="none" />
    <line x1="382" y1="200" x2="458" y2="200" stroke-width="2" />
    <polygon points="452,196 462,200 452,204" fill="currentColor" stroke="none" />
    <line x1="560" y1="200" x2="598" y2="200" stroke-width="2" />
    <polygon points="592,196 602,200 592,204" fill="currentColor" stroke="none" />
    <line x1="680" y1="200" x2="730" y2="200" stroke-width="2" />
    <polygon points="724,196 734,200 724,204" fill="currentColor" stroke="none" />

    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">The Sun is presently a main-sequence star and will become a red giant, then a white dwarf.</text>
    <text x="400" y="385" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">A sun-sized star never goes supernova; it does not have enough mass.</text>
  </g>
`

const MASSIVE_PATH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Life cycle of a massive star (about 8 or more solar masses)</text>

    <!-- Stage 1: nebula -->
    <ellipse cx="80" cy="200" rx="55" ry="40" stroke-dasharray="3,3" />
    <text x="80" y="205" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">nebula</text>
    <text x="80" y="265" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">dust + gas</text>

    <!-- Stage 2: protostar -->
    <circle cx="200" cy="200" r="22" fill="currentColor" />
    <text x="200" y="248" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">protostar</text>

    <!-- Stage 3: main sequence (massive) -->
    <circle cx="320" cy="200" r="30" fill="currentColor" />
    <text x="320" y="252" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">main sequence</text>
    <text x="320" y="270" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">e.g. Rigel</text>
    <text x="320" y="287" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">tens of millions of years</text>

    <!-- Stage 4: red supergiant -->
    <circle cx="460" cy="200" r="58" fill="currentColor" />
    <text x="460" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="white">red</text>
    <text x="460" y="218" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">supergiant</text>
    <text x="460" y="285" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">e.g. Betelgeuse</text>

    <!-- Stage 5: supernova -->
    <g transform="translate(600,200)">
      <polygon points="0,-50 12,-15 50,-15 18,8 30,45 0,22 -30,45 -18,8 -50,-15 -12,-15" fill="currentColor" />
    </g>
    <text x="600" y="265" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">SUPERNOVA</text>
    <text x="600" y="283" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">explosion</text>

    <!-- Branch: neutron star -->
    <circle cx="730" cy="140" r="6" fill="currentColor" />
    <text x="730" y="120" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">neutron star</text>
    <text x="730" y="160" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">smaller remnant</text>

    <!-- Branch: black hole -->
    <circle cx="730" cy="260" r="10" fill="currentColor" />
    <circle cx="730" cy="260" r="16" stroke-dasharray="2,2" />
    <text x="730" y="295" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">black hole</text>
    <text x="730" y="312" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">larger remnant</text>

    <!-- Arrows -->
    <line x1="140" y1="200" x2="178" y2="200" stroke-width="2" />
    <polygon points="172,196 182,200 172,204" fill="currentColor" stroke="none" />
    <line x1="222" y1="200" x2="290" y2="200" stroke-width="2" />
    <polygon points="284,196 294,200 284,204" fill="currentColor" stroke="none" />
    <line x1="350" y1="200" x2="402" y2="200" stroke-width="2" />
    <polygon points="396,196 406,200 396,204" fill="currentColor" stroke="none" />
    <line x1="518" y1="200" x2="552" y2="200" stroke-width="2" />
    <polygon points="546,196 556,200 546,204" fill="currentColor" stroke="none" />
    <line x1="650" y1="190" x2="710" y2="150" stroke-width="2" />
    <polygon points="703,144 715,148 707,154" fill="currentColor" stroke="none" />
    <line x1="650" y1="210" x2="710" y2="250" stroke-width="2" />
    <polygon points="703,256 715,252 707,246" fill="currentColor" stroke="none" />

    <text x="400" y="365" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A massive star ends in a supernova, then becomes a neutron star or a black hole.</text>
    <text x="400" y="385" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Which one depends on the mass of the leftover core.</text>
  </g>
`

const GRAVITY_FUSION_BALANCE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="28" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">A star is a balance: gravity inward vs fusion pressure outward</text>

    <!-- Star body -->
    <circle cx="400" cy="220" r="100" stroke-width="3" />
    <text x="400" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">main-sequence star</text>

    <!-- Inward gravity arrows -->
    <line x1="400" y1="80" x2="400" y2="135" stroke-width="3" />
    <polygon points="392,127 400,140 408,127" fill="currentColor" stroke="none" />
    <line x1="540" y1="220" x2="485" y2="220" stroke-width="3" />
    <polygon points="492,212 480,220 492,228" fill="currentColor" stroke="none" />
    <line x1="260" y1="220" x2="315" y2="220" stroke-width="3" />
    <polygon points="308,212 320,220 308,228" fill="currentColor" stroke="none" />
    <line x1="400" y1="360" x2="400" y2="305" stroke-width="3" />
    <polygon points="392,313 400,300 408,313" fill="currentColor" stroke="none" />
    <text x="555" y="225" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">gravity</text>
    <text x="245" y="225" text-anchor="end" font-size="13" font-weight="700" stroke="none" fill="currentColor">gravity</text>

    <!-- Outward fusion pressure arrows -->
    <line x1="400" y1="180" x2="400" y2="140" stroke-width="2" stroke-dasharray="3,3" />
    <polygon points="394,148 400,135 406,148" fill="currentColor" stroke="none" />
    <line x1="440" y1="220" x2="480" y2="220" stroke-width="2" stroke-dasharray="3,3" />
    <polygon points="472,214 485,220 472,226" fill="currentColor" stroke="none" />
    <line x1="360" y1="220" x2="320" y2="220" stroke-width="2" stroke-dasharray="3,3" />
    <polygon points="328,214 315,220 328,226" fill="currentColor" stroke="none" />
    <line x1="400" y1="260" x2="400" y2="300" stroke-width="2" stroke-dasharray="3,3" />
    <polygon points="394,292 400,305 406,292" fill="currentColor" stroke="none" />
    <text x="400" y="105" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">fusion pressure</text>
    <text x="400" y="385" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">fusion pressure</text>

    <!-- Bottom rule -->
    <text x="400" y="410" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">When fusion runs out of fuel, the outward push fades and gravity wins. The star collapses and dies.</text>
  </g>
`

export const spaceStarLifeCycle: SkillNode = {
  id: 'physics-space-star-life-cycle',
  title: 'Life Cycle of Stars',
  description:
    'Stars are born from clouds of dust and gas called nebulae, drawn together by gravity. A protostar heats up until nuclear fusion of hydrogen into helium ignites, and the star joins the main sequence. Our Sun is a main-sequence star and will spend about 10 billion years there. What a star becomes next depends on its mass. A sun-sized star (about 1 solar mass) swells into a red giant, blows off its outer shell as a planetary nebula, and leaves an Earth-sized white dwarf that cools over billions of years. A massive star (about 8 or more solar masses) swells into a red supergiant, explodes as a supernova, and leaves either a neutron star or a black hole, depending on the leftover core. Cross-link: a star lives by balancing gravity (inward) against fusion pressure (outward). When the fuel runs out, gravity wins. UK touchpoints include the Crab Nebula (M1), the remnant of a supernova seen in 1054 AD and still spotted by amateur telescopes, and SN 1987A, studied by the Royal Greenwich Observatory.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-space',
  zoneName: 'Space',
  tier: 'challenge',
  prerequisites: ['physics-space-sun-as-star', 'physics-space-solar-system'],
  curriculum: {
    ks3Objective:
      'Our Sun as a star, other stars in our galaxy. Qualitative path beyond KS3 core into Foundation GCSE.',
    awardingBodies: {
      aqa: '4.8.1.1 The life cycle of a star: main sequence, red giant, white dwarf, supernova, neutron star and black hole (GCSE Physics 8463)',
      edexcel:
        'Topic 8 Astronomy, 8.8 to 8.10 the life cycle of stars by mass (GCSE Physics 1PH0)',
      ocr: 'P8.1 Solar System and the Universe; stellar evolution and the life cycle of stars (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification, section 4.8.1.1, life cycle of a star by mass, diagram of the sun-sized path nebula to white dwarf.
    {
      id: 'pslc-sun-path',
      title: 'Sun-Sized Path: Nebula to White Dwarf',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the six stages of a sun-sized star, from birth in a nebula to its end as a cooling white dwarf.',
      data: {
        viewBox: '0 0 800 400',
        svg: SUN_PATH_SVG,
        hotspots: [
          {
            id: 'pslc-sun-nebula',
            x: 10,
            y: 50,
            label: 'Nebula: cloud of dust and gas',
            description:
              'A nebula is a vast cloud of dust and hydrogen gas in space. Gravity slowly draws clumps together. Over millions of years, the densest clump pulls in more material and starts to heat up. Every star begins life this way.',
          },
          {
            id: 'pslc-sun-protostar',
            x: 27,
            y: 50,
            label: 'Protostar: gravity heats the core',
            description:
              'As the clump shrinks, its core grows hotter and denser. This is a protostar. It does not yet shine by fusion; it glows from the heat of contraction. When the core reaches about 10 million degrees C, hydrogen nuclei begin to fuse into helium.',
          },
          {
            id: 'pslc-sun-main-sequence',
            x: 45,
            y: 50,
            label: 'Main sequence: fusing H to He',
            description:
              'The star joins the main sequence and stays there the longest part of its life. Hydrogen fuses to helium in the core. Our Sun is a main-sequence star and will spend about 10 billion years in this stage. It is about halfway through.',
          },
          {
            id: 'pslc-sun-red-giant',
            x: 64,
            y: 50,
            label: 'Red giant: He fuses to C and O',
            description:
              'When core hydrogen runs out, the core contracts and outer layers swell to enormous size. The cooler outer layers glow red. Helium now fuses into carbon and oxygen. This stage lasts about a billion years for a sun-sized star.',
          },
          {
            id: 'pslc-sun-planetary-nebula',
            x: 80,
            y: 50,
            label: 'Planetary nebula: outer shell blown off',
            description:
              'A sun-sized star is not massive enough to fuse heavier elements. It puffs off its outer layers as a glowing shell called a planetary nebula. Despite the name, this has nothing to do with planets; the name dates from telescopes that showed a round disc.',
          },
          {
            id: 'pslc-sun-white-dwarf',
            x: 93,
            y: 50,
            label: 'White dwarf: Earth-sized hot core',
            description:
              'Only the hot core is left, roughly the size of the Earth. This is a white dwarf. It no longer fuses; it just cools over billions of years. Our Sun will become a white dwarf in about 5 billion years from now.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification, Topic 8 Astronomy, 8.8 to 8.10 the life cycle of stars by mass; supernova and the formation of neutron stars and black holes.
    {
      id: 'pslc-massive-path',
      title: 'Massive Star Path: Supernova to Black Hole',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the path of a star at least 8 times the mass of our Sun, ending in supernova and a neutron star or black hole.',
      data: {
        viewBox: '0 0 800 400',
        svg: MASSIVE_PATH_SVG,
        hotspots: [
          {
            id: 'pslc-massive-main-sequence',
            x: 40,
            y: 50,
            label: 'Massive main sequence: a short life',
            description:
              'A star with at least 8 solar masses burns through its hydrogen at a far higher rate than the Sun. Its main-sequence life lasts only tens of millions of years rather than ten billion. Rigel, in the constellation Orion, is one example seen from UK skies.',
          },
          {
            id: 'pslc-massive-red-supergiant',
            x: 58,
            y: 50,
            label: 'Red supergiant: heavier element fusion',
            description:
              'When core hydrogen runs out, the star swells into a red supergiant. Betelgeuse, the bright red star at the top-left of Orion, is one. Its core builds heavier and heavier elements by fusion: carbon, oxygen, neon, silicon, all the way up to iron.',
          },
          {
            id: 'pslc-supernova',
            x: 75,
            y: 50,
            label: 'Supernova: explosion seen across the galaxy',
            description:
              'Iron cannot release energy by fusion. Once the core is iron, fusion stops, the core collapses in under a second, and the outer layers rebound in a vast explosion called a supernova. The Crab Nebula (M1) is the remnant of one seen in 1054 AD.',
          },
          {
            id: 'pslc-neutron-star',
            x: 91,
            y: 35,
            label: 'Neutron star: smaller leftover core',
            description:
              'If the leftover core is roughly 1.4 to 3 solar masses, gravity squashes it into a neutron star. This is a ball about 20 km across with the mass of the Sun. Some spin rapidly and beam radio waves into UK radio-telescope dishes as pulsars.',
          },
          {
            id: 'pslc-black-hole',
            x: 91,
            y: 65,
            label: 'Black hole: larger leftover core',
            description:
              'If the leftover core is more than about 3 solar masses, even neutron pressure cannot hold gravity back. The core collapses to a single point and the region around it becomes a black hole. The boundary called the event horizon traps every light ray that crosses it.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 Gateway specification, P8.1 Solar System and the Universe; explanation of stellar evolution as a balance of gravitational collapse and outward radiation pressure from fusion.
    {
      id: 'pslc-gravity-fusion',
      title: 'A Star is a Balance: Gravity vs Fusion Pressure',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read why a star is stable, and why it eventually dies when its fuel runs out.',
      data: {
        viewBox: '0 0 800 420',
        svg: GRAVITY_FUSION_BALANCE_SVG,
        hotspots: [
          {
            id: 'pslc-balance-gravity',
            x: 75,
            y: 50,
            label: 'Gravity pulls inward',
            description:
              'Every part of a star is pulled toward the centre by the gravity of the rest of the star. Left alone, gravity would crush the gas down to a tiny point. Star formation begins this way, when a nebula clumps under its own gravity.',
          },
          {
            id: 'pslc-balance-pressure',
            x: 50,
            y: 22,
            label: 'Fusion pressure pushes outward',
            description:
              'Once core fusion ignites, energy released by hydrogen turning into helium heats the gas, and the hot gas pushes outward. Photons of light also carry an outward radiation pressure. The two outward effects balance the inward pull of gravity.',
          },
          {
            id: 'pslc-balance-stable',
            x: 50,
            y: 50,
            label: 'Main sequence: a stable balance',
            description:
              'On the main sequence, the inward gravity and the outward fusion pressure cancel out. The star holds a steady size for billions of years. The Sun is presently in this balance.',
          },
          {
            id: 'pslc-balance-death',
            x: 50,
            y: 92,
            label: 'When the fuel runs out, gravity wins',
            description:
              'A star has a finite supply of fusion fuel. When the fuel runs out, the outward push fades and gravity wins again. The core collapses; the path it takes next (red giant + white dwarf, or red supergiant + supernova + neutron star or black hole) depends on its mass.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification, section 4.8.1.1, worked example tracking a sun-mass star through its full life cycle.
    {
      id: 'pslc-worked-1',
      title: 'Tracking the Sun through its full life cycle',
      steps: [
        {
          explanation:
            'Set out the situation. We start with our Sun, presently a main-sequence star of about 1 solar mass. We want to list every stage it has been through and will pass through, in order.',
        },
        {
          explanation:
            'Stage 0 + 1: birth. About 4.6 billion years ago the Sun formed from a nebula, a cloud of dust and hydrogen gas. Gravity drew material together into a protostar that heated up until hydrogen fusion ignited in the core.',
        },
        {
          explanation:
            'Stage 2: main sequence (now). The Sun joined the main sequence and has been fusing hydrogen into helium for about 4.6 billion years. The total main-sequence life of a sun-sized star is about 10 billion years, so the Sun is roughly halfway through.',
        },
        {
          explanation:
            'Stage 3: red giant in about 5 billion years. When core hydrogen runs out, the Sun will swell into a red giant. Helium will fuse to carbon and oxygen. Earth\'s oceans will have boiled away well before this stage finishes.',
          maths: 'red giant stage about 1 billion years',
        },
        {
          explanation:
            'Stage 4: planetary nebula. The Sun is not massive enough to fuse beyond carbon and oxygen. It will puff off its outer layers as a glowing shell called a planetary nebula.',
        },
        {
          explanation:
            'Stage 5: white dwarf. Only the hot core is left, about the size of the Earth. It cools over billions of years. The Sun will never go supernova; it does not have enough mass.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification, Topic 8 Astronomy 8.10, worked path of a massive star.
    {
      id: 'pslc-worked-2',
      title: 'Tracking a 20 solar mass star: supernova then black hole',
      steps: [
        {
          explanation:
            'Set out the situation. A young star forms in the Orion Nebula with a mass of about 20 solar masses, about 20 times the mass of the Sun. We want to list every stage it will pass through.',
        },
        {
          explanation:
            'Stage 1 + 2: nebula to protostar. The star is drawn together from gas and dust under gravity, heating to a protostar that ignites hydrogen fusion at about 10 million degrees C.',
        },
        {
          explanation:
            'Stage 3: massive main sequence. The high mass means the core is hotter and the fuel is burnt at a far higher rate. The star spends only about 10 million years on the main sequence, rather than 10 billion. It glows blue-white.',
          maths: 'main sequence life about 10 million years',
        },
        {
          explanation:
            'Stage 4: red supergiant. When core hydrogen runs out the star swells into a red supergiant, fusing helium and then heavier elements: carbon, oxygen, neon, silicon, up to iron in the core.',
        },
        {
          explanation:
            'Stage 5: supernova. Iron cannot release energy by fusion, so the core collapses in under a second and the outer layers rebound in an explosion called a supernova. For a few weeks this single star outshines a whole galaxy.',
        },
        {
          explanation:
            'Stage 6: black hole. The leftover core of a 20 solar mass star is more than about 3 solar masses, so even neutron pressure cannot hold gravity back. The core collapses to a black hole. If the leftover core had been smaller, a neutron star would have formed instead.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pslc-q1',
      type: 'multiple-choice',
      stem: 'A star begins life as a clump in a vast cloud of dust and gas. What is the name of this cloud?',
      tier: 'core',
      options: [
        'A nebula.',
        'A galaxy.',
        'A red giant.',
        'A black hole.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The word also describes the Crab Nebula and the Orion Nebula in UK night skies.',
    },
    {
      id: 'pslc-q2',
      type: 'multiple-choice',
      stem: 'Our Sun is presently in which stage of its life cycle?',
      tier: 'core',
      options: [
        'Protostar.',
        'Main sequence.',
        'Red giant.',
        'White dwarf.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'The Sun is steadily fusing hydrogen into helium in its core, and has been for about 4.6 billion years.',
    },
    {
      id: 'pslc-q3',
      type: 'multiple-choice',
      stem: 'Which fusion reaction releases the energy a main-sequence star like our Sun emits?',
      tier: 'core',
      options: [
        'Helium nuclei fuse into hydrogen nuclei.',
        'Iron nuclei fuse into uranium nuclei.',
        'Hydrogen nuclei fuse into helium nuclei.',
        'Carbon nuclei fuse into hydrogen nuclei.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The lightest element in the core is converted into the next-lightest.',
    },
    {
      id: 'pslc-q4',
      type: 'multiple-choice',
      stem: 'A pupil says, "Every star ends up as a black hole." What is the best correction?',
      tier: 'core',
      options: [
        'The pupil is right. Every star becomes a black hole in the end.',
        'Only sun-sized stars become black holes; massive stars become white dwarfs.',
        'No star becomes a black hole; black holes are not real.',
        'Only massive stars (about 8 or more solar masses) can become black holes; sun-sized stars become white dwarfs.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pslc-mis-all-stars-black-holes',
      hint: 'The path a star takes at the end depends on its mass.',
    },
    {
      id: 'pslc-q5',
      type: 'numeric-entry',
      stem: 'A sun-sized star spends about 10 billion years on the main sequence, then about 1 billion years as a red giant. How many billion years total does this cover, in billions of years?',
      tier: 'core',
      correctAnswer: 11,
      unit: 'billion years',
      xpValue: 10,
      hint: 'Add the two lifetimes: 10 + 1.',
    },
    {
      id: 'pslc-q6',
      type: 'drag-order',
      stem: 'Put the stages of a sun-sized star\'s life cycle in order, from birth to end.',
      tier: 'core',
      items: [
        'Red giant',
        'Nebula',
        'Main sequence',
        'White dwarf',
        'Protostar',
        'Planetary nebula',
      ],
      correctOrder: [1, 4, 2, 0, 5, 3],
      xpValue: 10,
      hint: 'Nebula first, white dwarf last. The main sequence sits in the middle.',
    },
    {
      id: 'pslc-q7',
      type: 'numeric-entry',
      stem: 'The Sun is presently about 4.6 billion years old. A sun-sized star spends about 10 billion years on the main sequence. How old, in billions of years, will the Sun be when it leaves the main sequence?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'billion years',
      xpValue: 10,
      hint: 'The total main-sequence life is about 10 billion years, measured from when the star joined the main sequence at age 0.',
    },
    {
      id: 'pslc-q8',
      type: 'multiple-choice',
      stem: 'A massive star (about 20 solar masses) reaches the end of its main-sequence life. What stage does it enter next?',
      tier: 'confident',
      options: [
        'It becomes a white dwarf.',
        'It becomes a nebula again.',
        'It becomes a planet.',
        'It becomes a red supergiant, fusing heavier elements.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Like the Sun, a massive star swells when core hydrogen runs out, but on a larger scale.',
    },
    {
      id: 'pslc-q9',
      type: 'multiple-choice',
      stem: 'Why does a more massive star spend less time on the main sequence than a sun-sized star, even though it has more fuel?',
      tier: 'confident',
      options: [
        'Because a massive star has no hydrogen to start with.',
        'Because the higher core temperature drives a far higher rate of fusion, so the fuel is used up in tens of millions of years rather than billions.',
        'Because massive stars do not fuse hydrogen at all.',
        'Because gravity is weaker in a massive star, so fusion is slow.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pslc-mis-massive-lives-longer',
      hint: 'More mass means hotter core, which means a much higher rate of energy release.',
    },
    {
      id: 'pslc-q10',
      type: 'multiple-choice',
      stem: 'The Crab Nebula (M1), spotted by amateur UK telescopes, is the remnant of an event seen by Chinese astronomers in 1054 AD. What kind of event was it?',
      tier: 'confident',
      options: [
        'The birth of a sun-sized star from a nebula.',
        'The collision of two planets.',
        'A supernova: the explosion of a massive star at the end of its life.',
        'A solar eclipse.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'A supernova is bright enough to be seen across the galaxy for days or weeks.',
    },
    {
      id: 'pslc-q11',
      type: 'multiple-choice',
      stem: 'After a supernova, what determines whether the leftover core becomes a neutron star or a black hole?',
      tier: 'confident',
      options: [
        'The colour of the star before it exploded.',
        'Whether the explosion happens during the day or at night.',
        'The distance of the star from Earth.',
        'The mass of the leftover core after the explosion.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'A larger leftover core means gravity is stronger and the collapse goes further.',
    },
    {
      id: 'pslc-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes, "A black hole is like a giant vacuum cleaner that sucks everything in from across the galaxy." What is the best correction?',
      tier: 'confident',
      options: [
        'A black hole has gravity like any other mass of the same value at distances beyond its event horizon. It cannot reach across a galaxy. Objects far away orbit it as they would any star of the same mass.',
        'The pupil is right; black holes pull every distant object into themselves.',
        'The pupil is right; a black hole has infinite gravity at every distance.',
        'A black hole has no gravity at all.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pslc-mis-black-hole-vacuum',
      hint: 'Newton\'s law of gravitation does not change near a black hole, except very close to it.',
    },
    {
      id: 'pslc-q13',
      type: 'multiple-choice',
      stem: 'Which sequence of stages is correct for a massive star (about 8 or more solar masses)?',
      tier: 'confident',
      options: [
        'Nebula, protostar, main sequence, red giant, planetary nebula, white dwarf.',
        'White dwarf, neutron star, supernova, main sequence, nebula.',
        'Nebula, white dwarf, main sequence, supernova, planetary nebula.',
        'Nebula, protostar, main sequence, red supergiant, supernova, neutron star or black hole.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'A massive star ends in a supernova, not as a white dwarf.',
    },
    {
      id: 'pslc-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why the Sun has been stable for about 4.6 billion years.',
      tier: 'confident',
      steps: [
        'The Sun is mostly hydrogen gas. Its enormous mass produces a strong gravitational pull toward its centre.',
        'In the core, the temperature is about 15 million degrees C. Hydrogen nuclei fuse into helium and release energy.',
        'This released energy heats the gas and produces an outward push, called fusion pressure or radiation pressure.',
        null,
        'State the answer: the Sun is steady on the main sequence because gravity and fusion pressure balance, and it has enough hydrogen fuel for about 10 billion years total.',
      ],
      missingStepIndex: 3,
      correctStep:
        'The inward gravity and the outward fusion pressure cancel out at every depth in the Sun. The Sun does not collapse, and it does not blow itself apart. It holds a steady size.',
      xpValue: 15,
      misconceptionId: 'pslc-mis-balance-reversed',
    },
    {
      id: 'pslc-q15',
      type: 'numeric-entry',
      stem: 'A sun-sized star spends about 10 billion years on the main sequence. The Sun is about 4.6 billion years old. About how many billion years of main-sequence life does it have left, in billions of years?',
      tier: 'confident',
      correctAnswer: 5.4,
      unit: 'billion years',
      xpValue: 15,
      hint: 'Subtract the present age from the total main-sequence life: 10 - 4.6.',
    },
    {
      id: 'pslc-q16',
      type: 'numeric-entry',
      stem: 'A 20 solar mass star spends about 10 million years on the main sequence. A sun-sized star spends about 10 000 million years. How many times longer does the sun-sized star spend on the main sequence than the 20 solar mass star? Give your answer to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 1000,
      unit: '',
      xpValue: 20,
      hint: 'Divide the sun-sized lifetime by the massive lifetime: 10 000 / 10.',
    },
    {
      id: 'pslc-q17',
      type: 'numeric-entry',
      stem: 'A red supergiant has a radius about 700 times the radius of our Sun. If the Sun has a radius of about 700 000 km, what is the radius of the red supergiant, in km? Give your answer in millions of km, to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 490,
      unit: 'million km',
      xpValue: 20,
      hint: 'Multiply: 700 x 700 000 = 490 000 000 km, which is 490 million km.',
    },
    {
      id: 'pslc-q18',
      type: 'spot-misconception',
      stem: 'A class is asked what the Sun will become in about 5 billion years. Aisha writes her answer.',
      tier: 'challenge',
      statements: [
        {
          text: 'Aisha says: "The Sun will go supernova, then collapse into a black hole. Every star ends like this in the end."',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "The Sun will swell into a red giant, then puff off its outer layers as a planetary nebula, leaving a hot Earth-sized white dwarf that cools over billions of years. It is not massive enough to go supernova."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pslc-mis-sun-supernova',
    },
    {
      id: 'pslc-q19',
      type: 'spot-misconception',
      stem: 'A class is asked to describe what happens at the very end of a massive star\'s life. Tom writes his answer.',
      tier: 'challenge',
      statements: [
        {
          text: 'Tom says: "A massive star simply switches off its fusion and silently becomes a white dwarf, just like the Sun will."',
          isMisconception: true,
        },
        {
          text: 'Tom says: "A massive star fuses heavier elements up to iron, then its core collapses and the outer layers rebound in a supernova explosion. The leftover core becomes a neutron star or, if it is heavy enough, a black hole."',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pslc-mis-stars-last-forever',
    },
    {
      id: 'pslc-q20',
      type: 'drag-order',
      stem: 'Put the stages of a massive star\'s life cycle in order, from birth to its final remnant.',
      tier: 'challenge',
      items: [
        'Supernova explosion',
        'Nebula',
        'Red supergiant',
        'Neutron star or black hole',
        'Main sequence (blue-white, short life)',
        'Protostar',
      ],
      correctOrder: [1, 5, 4, 2, 0, 3],
      xpValue: 20,
      hint: 'Start with a nebula, end with a neutron star or black hole. The supernova sits between the supergiant and the remnant.',
    },
    {
      id: 'pslc-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is reasoning about why a black hole forms instead of a neutron star at the end of a very massive star\'s life.',
      tier: 'challenge',
      steps: [
        'A massive star reaches the end of its life as a red supergiant and explodes in a supernova.',
        'The outer layers are blown into space; only a dense leftover core is left behind.',
        'If the leftover core is roughly 1.4 to 3 solar masses, pressure between neutrons can hold gravity back, and a neutron star forms.',
        null,
        'State the answer: when the leftover core is heavier than about 3 solar masses, gravity wins and a black hole forms; the boundary called the event horizon traps every light ray that crosses it.',
      ],
      missingStepIndex: 3,
      correctStep:
        'If the leftover core is more than about 3 solar masses, even neutron pressure is not strong enough. Gravity squashes the core down further to a single point.',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1H, candidates wrote that every star eventually becomes a black hole, missing the role of mass in determining the end stage.
    {
      id: 'pslc-mis-all-stars-black-holes',
      description:
        'Believing that every star ends as a black hole, regardless of mass.',
      triggerAnswer: 'all-stars-black-holes',
      correction:
        'Only massive stars (about 8 or more solar masses) can become black holes. Sun-sized stars become white dwarfs after a red giant and planetary nebula stage.',
      reExplanation:
        'The end stage depends on the mass of the leftover core. A sun-sized star (1 solar mass) does not have enough mass to go supernova. It puffs off its outer shell as a planetary nebula, leaving an Earth-sized white dwarf. A massive star has enough mass to go supernova, leaving a neutron star or a black hole depending on the leftover core.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021, Paper 1PH0/2H, candidates wrote that the Sun would go supernova at the end of its life.
    {
      id: 'pslc-mis-sun-supernova',
      description:
        'Believing that the Sun will end its life in a supernova explosion.',
      triggerAnswer: 'sun-supernova',
      correction:
        'The Sun is not massive enough to go supernova. It will become a red giant, then a planetary nebula, then a white dwarf.',
      reExplanation:
        'A supernova needs a leftover iron core heavier than about 1.4 solar masses to collapse. The Sun is only about 1 solar mass total and will lose much of that mass during the red giant and planetary nebula stages. Its end stage is a white dwarf about the size of Earth, cooling for billions of years.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022, Paper J259/02, candidates wrote that stars last forever, missing that fusion fuel runs out and the star dies.
    {
      id: 'pslc-mis-stars-last-forever',
      description:
        'Believing that stars last forever and do not have a finite fuel supply.',
      triggerAnswer: 'stars-last-forever',
      correction:
        'Every star has a finite supply of fusion fuel. When the fuel runs out, the outward push fades and gravity wins. The star dies as a white dwarf or in a supernova.',
      reExplanation:
        'Fusion in a stellar core needs nuclei to combine. Once the core runs out of light nuclei to fuse, the energy release drops away. The outward push that balanced gravity is gone, and the core contracts. Sun-sized stars end as cooling white dwarfs; massive stars end in a supernova that leaves a neutron star or a black hole.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1H, candidates described black holes as objects that pull every distant star or planet toward them, missing the inverse-square link.
    {
      id: 'pslc-mis-black-hole-vacuum',
      description:
        'Believing that a black hole pulls in every distant object across a galaxy, like a giant vacuum cleaner.',
      triggerAnswer: 'black-hole-vacuum',
      correction:
        'A black hole has gravity like any other mass of the same value at distances well beyond its event horizon. It does not reach further than any other star.',
      reExplanation:
        'Newton\'s law of gravitation says the force depends on the masses involved and on the distance, by an inverse-square rule. At distances well beyond the event horizon, a black hole of 10 solar masses pulls on a planet exactly as a 10 solar mass star would. Objects can orbit a black hole at a safe distance just as they orbit our Sun.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, Paper 1PH0/2H, candidates wrote that the source of fusion pressure pulls inward while gravity pushes outward, reversing the two forces.
    {
      id: 'pslc-mis-balance-reversed',
      description:
        'Believing that gravity pushes outward in a star and fusion pressure pulls inward, reversing the two forces.',
      triggerAnswer: 'balance-reversed',
      correction:
        'Gravity always pulls inward, toward the centre of mass. Fusion releases energy that heats the gas and produces an outward push.',
      reExplanation:
        'A star is held together by the inward pull of gravity, just like every other large body in space. Without fusion the gas would simply fall inward and collapse. Energy released by hydrogen fusing into helium heats the gas and produces an outward push that balances gravity. On the main sequence the two effects cancel, and the star holds a steady size.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, Paper J259/02, candidates wrote that massive stars live longer than sun-sized stars because they have more fuel.
    {
      id: 'pslc-mis-massive-lives-longer',
      description:
        'Believing that a massive star spends a longer life on the main sequence than a sun-sized star because it has more fuel.',
      triggerAnswer: 'massive-lives-longer',
      correction:
        'A massive star burns its fuel at a far higher rate than a sun-sized star. Its main-sequence life is shorter, only tens of millions of years rather than ten billion.',
      reExplanation:
        'A 20 solar mass star has roughly 20 times the fuel of the Sun. But its core is far hotter, so fusion runs at a far higher rate. Energy is released and radiated away thousands of times faster, so the fuel is used up in a few tens of millions of years. The Sun, with a cooler core and slower fusion, can last about 10 billion years.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const spaceStarLifeCycleZoneNodes = [spaceStarLifeCycle]
