import type { SkillNode } from '@/types/content'

const cubeRatiosSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Three cubes: how surface area to volume ratio changes with size</text>
  <g transform="translate(60,80)">
    <text x="50" y="-8" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">CUBE A: side 1 cm</text>
    <rect x="20" y="20" width="60" height="60" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
    <path d="M20 20 L40 8 L100 8 L80 20 Z" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
    <path d="M80 20 L100 8 L100 68 L80 80 Z" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
    <text x="50" y="110" text-anchor="middle" font-size="11" fill="#1F2937">SA = 6 cm squared</text>
    <text x="50" y="124" text-anchor="middle" font-size="11" fill="#1F2937">V = 1 cm cubed</text>
    <text x="50" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V = 6:1</text>
  </g>
  <g transform="translate(230,60)">
    <text x="60" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">CUBE B: side 2 cm</text>
    <rect x="20" y="40" width="80" height="80" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="2" />
    <path d="M20 40 L50 22 L130 22 L100 40 Z" fill="#93C5FD" stroke="#1E3A8A" stroke-width="2" />
    <path d="M100 40 L130 22 L130 102 L100 120 Z" fill="#60A5FA" stroke="#1E3A8A" stroke-width="2" />
    <text x="60" y="148" text-anchor="middle" font-size="11" fill="#1F2937">SA = 24 cm squared</text>
    <text x="60" y="162" text-anchor="middle" font-size="11" fill="#1F2937">V = 8 cm cubed</text>
    <text x="60" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V = 3:1</text>
  </g>
  <g transform="translate(420,30)">
    <text x="70" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">CUBE C: side 4 cm</text>
    <rect x="10" y="60" width="120" height="120" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
    <path d="M10 60 L50 30 L170 30 L130 60 Z" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
    <path d="M130 60 L170 30 L170 150 L130 180 Z" fill="#F87171" stroke="#7F1D1D" stroke-width="2" />
    <text x="70" y="206" text-anchor="middle" font-size="11" fill="#1F2937">SA = 96 cm squared</text>
    <text x="70" y="220" text-anchor="middle" font-size="11" fill="#1F2937">V = 64 cm cubed</text>
    <text x="70" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V = 1.5:1</text>
  </g>
  <text x="300" y="320" text-anchor="middle" font-size="13" font-weight="700" fill="#7F1D1D">As size goes up, SA:V goes DOWN.</text>
  <text x="300" y="340" text-anchor="middle" font-size="12" fill="#1F2937">A small cube has more surface per unit of volume.</text>
  <text x="300" y="358" text-anchor="middle" font-size="12" fill="#1F2937">Exchange across the surface keeps up with the inside.</text>
  <text x="300" y="380" text-anchor="middle" font-size="11" fill="#1F2937">Units: SA in cm squared, V in cm cubed, SA:V in cm to the minus 1.</text>
</svg>
`.trim()

const villiZoomSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Folded surfaces: villi in the small intestine</text>
  <rect x="40" y="80" width="220" height="220" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="2" />
  <text x="150" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#7F1D1D">A SMOOTH TUBE (no folds)</text>
  <line x1="40" y1="180" x2="260" y2="180" stroke="#7F1D1D" stroke-width="3" />
  <text x="150" y="210" text-anchor="middle" font-size="11" fill="#1F2937">Surface across the section: short, flat</text>
  <text x="150" y="226" text-anchor="middle" font-size="11" fill="#1F2937">Volume inside: high</text>
  <text x="150" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V is LOW</text>
  <text x="150" y="266" text-anchor="middle" font-size="11" fill="#1F2937">Food spends ages near the wall</text>
  <text x="150" y="280" text-anchor="middle" font-size="11" fill="#1F2937">before nutrients are absorbed.</text>
  <rect x="340" y="80" width="220" height="220" fill="#DCFCE7" stroke="#14532D" stroke-width="2" />
  <text x="450" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">REAL SMALL INTESTINE (folded, with villi)</text>
  <path d="M340 180 L350 150 L360 180 L370 150 L380 180 L390 150 L400 180 L410 150 L420 180 L430 150 L440 180 L450 150 L460 180 L470 150 L480 180 L490 150 L500 180 L510 150 L520 180 L530 150 L540 180 L550 150 L560 180" fill="none" stroke="#14532D" stroke-width="2" />
  <text x="450" y="210" text-anchor="middle" font-size="11" fill="#1F2937">Surface across the section: long, folded</text>
  <text x="450" y="226" text-anchor="middle" font-size="11" fill="#1F2937">Volume inside: similar to before</text>
  <text x="450" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V is HIGH</text>
  <text x="450" y="266" text-anchor="middle" font-size="11" fill="#1F2937">Each villus adds surface for absorbing</text>
  <text x="450" y="280" text-anchor="middle" font-size="11" fill="#1F2937">sugars and amino acids into the blood.</text>
  <text x="300" y="330" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">Folding raises SURFACE AREA without raising VOLUME much.</text>
  <text x="300" y="352" text-anchor="middle" font-size="12" fill="#1F2937">SA:V goes UP because the top of the ratio rises faster than the bottom.</text>
  <text x="300" y="374" text-anchor="middle" font-size="12" fill="#1F2937">Real human small intestine surface area is about 30 square metres.</text>
</svg>
`.trim()

const sizeShapeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Why elephants have big ears and babies feel the cold</text>
  <g transform="translate(40,60)">
    <text x="90" y="-8" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">A BABY: small body, large SA:V</text>
    <circle cx="90" cy="80" r="46" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
    <circle cx="90" cy="40" r="20" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
    <path d="M50 80 L30 110 M130 80 L150 110 M70 122 L60 160 M110 122 L120 160" stroke="#92400E" stroke-width="2" fill="none" />
    <text x="200" y="60" font-size="11" fill="#7F1D1D">Lots of skin per</text>
    <text x="200" y="76" font-size="11" fill="#7F1D1D">unit of body volume.</text>
    <text x="200" y="100" font-size="11" fill="#1F2937">Heat escapes fast.</text>
    <text x="200" y="116" font-size="11" fill="#1F2937">NHS midwives wrap</text>
    <text x="200" y="132" font-size="11" fill="#1F2937">newborns to slow it.</text>
    <text x="200" y="156" font-size="12" font-weight="700" fill="#14532D">SA:V HIGH</text>
  </g>
  <g transform="translate(40,230)">
    <text x="120" y="-8" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">AN ADULT: bigger body, small SA:V</text>
    <ellipse cx="80" cy="60" rx="40" ry="50" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="2" />
    <circle cx="80" cy="14" r="14" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="2" />
    <line x1="40" y1="60" x2="20" y2="100" stroke="#1E3A8A" stroke-width="2" />
    <line x1="120" y1="60" x2="140" y2="100" stroke="#1E3A8A" stroke-width="2" />
    <line x1="60" y1="108" x2="50" y2="150" stroke="#1E3A8A" stroke-width="2" />
    <line x1="100" y1="108" x2="110" y2="150" stroke="#1E3A8A" stroke-width="2" />
    <text x="220" y="40" font-size="11" fill="#1E3A8A">Less skin per unit</text>
    <text x="220" y="56" font-size="11" fill="#1E3A8A">of body volume.</text>
    <text x="220" y="80" font-size="11" fill="#1F2937">Heat is kept in,</text>
    <text x="220" y="96" font-size="11" fill="#1F2937">so adults stay warmer</text>
    <text x="220" y="112" font-size="11" fill="#1F2937">in a chilly room.</text>
    <text x="220" y="136" font-size="12" font-weight="700" fill="#14532D">SA:V LOW</text>
  </g>
  <g transform="translate(400,80)">
    <text x="80" y="-10" text-anchor="middle" font-size="12" font-weight="700" fill="#7F1D1D">ELEPHANT EAR (London Zoo)</text>
    <ellipse cx="80" cy="80" rx="60" ry="80" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
    <ellipse cx="80" cy="80" rx="40" ry="60" fill="none" stroke="#7F1D1D" stroke-width="1" />
    <text x="80" y="200" text-anchor="middle" font-size="11" fill="#1F2937">A flat ear is mostly surface,</text>
    <text x="80" y="216" text-anchor="middle" font-size="11" fill="#1F2937">with very little volume inside.</text>
    <text x="80" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">SA:V VERY HIGH</text>
    <text x="80" y="256" text-anchor="middle" font-size="11" fill="#1F2937">Big ears help an elephant</text>
    <text x="80" y="270" text-anchor="middle" font-size="11" fill="#1F2937">lose excess body heat.</text>
  </g>
</svg>
`.trim()

const agarCubeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">The agar cube practical: dye soaks in faster on a small cube</text>
  <g transform="translate(60,60)">
    <text x="60" y="-8" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">SMALL CUBE: 1 cm side</text>
    <rect x="30" y="30" width="60" height="60" fill="#A78BFA" stroke="#4C1D95" stroke-width="2" />
    <rect x="40" y="40" width="40" height="40" fill="#7C3AED" stroke="#4C1D95" stroke-width="1" />
    <text x="60" y="110" text-anchor="middle" font-size="11" fill="#1F2937">After 4 min in dye:</text>
    <text x="60" y="124" text-anchor="middle" font-size="11" fill="#1F2937">dye reaches the centre.</text>
    <text x="60" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">FULL colour change.</text>
    <text x="60" y="160" text-anchor="middle" font-size="11" fill="#7F1D1D">SA:V = 6:1</text>
  </g>
  <g transform="translate(220,40)">
    <text x="80" y="12" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">MEDIUM CUBE: 2 cm side</text>
    <rect x="30" y="40" width="80" height="80" fill="#A78BFA" stroke="#4C1D95" stroke-width="2" />
    <rect x="48" y="58" width="44" height="44" fill="#DDD6FE" stroke="#4C1D95" stroke-width="1" />
    <rect x="56" y="66" width="28" height="28" fill="#FAF5FF" stroke="#4C1D95" stroke-width="1" />
    <text x="80" y="140" text-anchor="middle" font-size="11" fill="#1F2937">After 4 min in dye:</text>
    <text x="80" y="154" text-anchor="middle" font-size="11" fill="#1F2937">centre still pale.</text>
    <text x="80" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#92400E">PARTIAL colour change.</text>
    <text x="80" y="190" text-anchor="middle" font-size="11" fill="#7F1D1D">SA:V = 3:1</text>
  </g>
  <g transform="translate(420,20)">
    <text x="80" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">LARGE CUBE: 3 cm side</text>
    <rect x="20" y="50" width="120" height="120" fill="#A78BFA" stroke="#4C1D95" stroke-width="2" />
    <rect x="36" y="66" width="88" height="88" fill="#DDD6FE" stroke="#4C1D95" stroke-width="1" />
    <rect x="50" y="80" width="60" height="60" fill="#F5F3FF" stroke="#4C1D95" stroke-width="1" />
    <rect x="62" y="92" width="36" height="36" fill="#FFFFFF" stroke="#4C1D95" stroke-width="1" />
    <text x="80" y="190" text-anchor="middle" font-size="11" fill="#1F2937">After 4 min in dye:</text>
    <text x="80" y="204" text-anchor="middle" font-size="11" fill="#1F2937">middle still white.</text>
    <text x="80" y="222" text-anchor="middle" font-size="11" font-weight="700" fill="#7F1D1D">SLOW: too far to soak.</text>
    <text x="80" y="240" text-anchor="middle" font-size="11" fill="#7F1D1D">SA:V = 2:1</text>
  </g>
  <text x="300" y="306" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">CLEAPSS school practical: agar blocks soaked in dye.</text>
  <text x="300" y="326" text-anchor="middle" font-size="12" fill="#1F2937">A higher SA:V means a faster rate of uptake.</text>
  <text x="300" y="346" text-anchor="middle" font-size="12" fill="#1F2937">Small cells in the body act like the small cube.</text>
  <text x="300" y="368" text-anchor="middle" font-size="12" fill="#1F2937">If a cell grew too big, the middle would starve before food arrived.</text>
</svg>
`.trim()

export const surfaceAreaToVolume: SkillNode = {
  id: 'biology-cells-surface-area-to-volume',
  title: 'Surface Area to Volume Ratio',
  description:
    'See why cells stay small. The SURFACE AREA to VOLUME RATIO (SA:V) compares how much OUTSIDE a shape has, in cm squared, to how much INSIDE it holds, in cm cubed. A small cube has a high ratio: lots of surface for each scrap of volume. A bigger cube has a lower ratio: the volume grows faster than the surface, so the inside outgrows the skin. Cells exchange food, oxygen and waste through their surface. If a cell is small enough, every part of the inside sits close to the membrane and diffusion can supply it. If a cell got too big, the middle would run out of oxygen before any could reach it. Year 7 biologists use SA:V to explain a salted slug shrivelling, an NHS baby losing heat fast in a chilly delivery room, the folded villi in a small intestine, a goldfish with feathery gills from the pet shop, the large ears of an elephant at London Zoo, and why a 1 cm school agar cube takes on dye faster than a 3 cm one.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-cells',
  zoneName: 'Cells',
  tier: 'challenge',
  prerequisites: ['biology-cells-diffusion-osmosis'],
  curriculum: {
    ks3Objective:
      'The size and scale of cells; why small organisms exchange materials directly with their environment but larger organisms need specialised transport systems.',
    awardingBodies: {
      aqa: '4.1.1.1 Size of cells; surface area to volume ratio and its effect on the rate of exchange (GCSE Biology 8461)',
      edexcel: 'CB1f Surface area to volume ratio and exchange surfaces (GCSE Biology 1BI0, Topic 1)',
      ocr: 'B1.1.4 Surface area to volume ratio; implications for transport in larger organisms (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bce-sa-cube-ratios',
      title: 'Three Cubes: How SA:V Changes with Size',
      type: 'labelled-diagram',
      instructions:
        'Click each cube to see its surface area, volume and SA:V ratio, and to read why the ratio shrinks as the cube grows.',
      data: {
        svg: cubeRatiosSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-sa-hs-cube-a',
            x: 18,
            y: 30,
            label: 'Cube A: side 1 cm, SA:V = 6:1',
            description:
              'A cube of side 1 cm has 6 square faces of 1 cm squared each, so SA = 6 cm squared. Its volume is 1 cubed = 1 cm cubed. The ratio 6 to 1 is the largest of the three. Every part of the inside sits close to a face.',
          },
          {
            id: 'bce-sa-hs-cube-b',
            x: 50,
            y: 35,
            label: 'Cube B: side 2 cm, SA:V = 3:1',
            description:
              'A cube of side 2 cm has 6 faces of 2 by 2 = 4 cm squared each, so SA = 24 cm squared. Volume = 2 cubed = 8 cm cubed. The ratio is 24 to 8, which simplifies to 3 to 1. Doubling the side has HALVED the SA:V.',
          },
          {
            id: 'bce-sa-hs-cube-c',
            x: 82,
            y: 35,
            label: 'Cube C: side 4 cm, SA:V = 1.5:1',
            description:
              'A cube of side 4 cm has 6 faces of 16 cm squared, so SA = 96 cm squared. Volume = 64 cm cubed. The ratio is 96 to 64, which simplifies to 1.5 to 1. The volume grows faster than the surface, so SA:V keeps falling.',
          },
          {
            id: 'bce-sa-hs-rule',
            x: 50,
            y: 85,
            label: 'The rule for any shape',
            description:
              'SA scales with length squared and V scales with length cubed. So as a shape gets bigger, V grows faster than SA and the SA:V ratio FALLS. Tiny things are mostly surface; huge things are mostly inside.',
          },
        ],
      },
    },
    {
      id: 'bce-sa-villi-zoom',
      title: 'Folded Surfaces: Villi in the Small Intestine',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how folding the gut lining boosts surface area without changing the volume of the tube very much.',
      data: {
        svg: villiZoomSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-sa-hs-smooth',
            x: 25,
            y: 50,
            label: 'A smooth tube: low SA:V',
            description:
              'Imagine the small intestine as a plain tube with a flat inside. The surface for absorbing nutrients is small, and the volume of food trapped inside is large. The ratio between them is low, so absorption would be slow.',
          },
          {
            id: 'bce-sa-hs-folded',
            x: 75,
            y: 50,
            label: 'A folded tube with villi: high SA:V',
            description:
              'The real small intestine is lined with tiny finger-shaped villi. Each villus adds a lot of surface area but very little volume. The SA at the top of the ratio rises fast, so SA:V is much higher.',
          },
          {
            id: 'bce-sa-hs-units',
            x: 50,
            y: 86,
            label: 'A real measurement',
            description:
              'The folded lining of an adult human small intestine has a total surface area of about 30 square metres. Without the folding it would be less than 1 square metre. Folding is the cheap way to lift SA:V at a fixed volume.',
          },
          {
            id: 'bce-sa-hs-link',
            x: 50,
            y: 94,
            label: 'Why this matters for the body',
            description:
              'Sugars and amino acids diffuse from the gut into the blood across the villus surface. A larger surface means a faster rate of absorption, so the food a Year 7 pupil eats at lunch is taken up before it leaves the intestine.',
          },
        ],
      },
    },
    {
      id: 'bce-sa-size-shape',
      title: 'Why Babies Feel the Cold and Elephants Have Big Ears',
      type: 'labelled-diagram',
      instructions:
        'Click each figure to see how body size and body shape change the SA:V ratio, and how that links to keeping heat in or letting heat out.',
      data: {
        svg: sizeShapeSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-sa-hs-baby',
            x: 15,
            y: 30,
            label: 'A baby: high SA:V, fast heat loss',
            description:
              'A newborn is small for its volume. There is lots of skin per unit of body. Heat made inside leaks out across the large surface, so NHS midwives wrap and warm a newborn in the first minutes after birth.',
          },
          {
            id: 'bce-sa-hs-adult',
            x: 25,
            y: 80,
            label: 'An adult: lower SA:V, keeps heat in',
            description:
              'An adult is bigger and bulkier. The body volume has grown faster than the skin area, so SA:V is lower. Less heat leaks per unit of body, so an adult feels chilly more slowly than a baby in the same room.',
          },
          {
            id: 'bce-sa-hs-elephant',
            x: 80,
            y: 30,
            label: 'An elephant: huge body, tiny SA:V, big ears',
            description:
              'A whole elephant has a very low SA:V, so it would overheat without help. A big flat ear at London Zoo is mostly surface with little volume, so it dumps heat fast. Blood flowing through the ears cools before going back to the body.',
          },
          {
            id: 'bce-sa-hs-link',
            x: 75,
            y: 88,
            label: 'Shape matters as much as size',
            description:
              'Flattening, folding or branching a shape raises its SA without raising V much. The body uses this trick in villi, alveoli, gills and root hair cells to lift SA:V wherever fast exchange is needed.',
          },
        ],
      },
    },
    {
      id: 'bce-sa-agar-cube',
      title: 'The Agar Cube Practical: Rate of Uptake and SA:V',
      type: 'labelled-diagram',
      instructions:
        'Click each cube to see how a small block of agar takes on dye much faster than a big block, even though they sit in the same dye for the same time.',
      data: {
        svg: agarCubeSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bce-sa-hs-small',
            x: 18,
            y: 30,
            label: '1 cm cube: SA:V 6:1, full colour change',
            description:
              'The dye only has to diffuse 0.5 cm to reach the centre. With SA:V of 6 cm to the minus 1, the surface is more than enough to feed the tiny inside. The cube turns dark all the way through in 4 minutes.',
          },
          {
            id: 'bce-sa-hs-medium',
            x: 48,
            y: 35,
            label: '2 cm cube: SA:V 3:1, partial change',
            description:
              'Now the dye has to diffuse 1 cm to reach the centre. The volume has gone up by 8 times but the surface only by 4 times, so SA:V has halved to 3 cm to the minus 1. The centre is still pale at 4 minutes.',
          },
          {
            id: 'bce-sa-hs-large',
            x: 80,
            y: 40,
            label: '3 cm cube: SA:V 2:1, very slow change',
            description:
              'A 3 cm cube has SA = 54 cm squared and V = 27 cm cubed, so SA:V = 2 cm to the minus 1. The middle is 1.5 cm from any face, and the diffusion path is so long that the centre is still white at 4 minutes.',
          },
          {
            id: 'bce-sa-hs-link',
            x: 50,
            y: 86,
            label: 'Why cells stay small',
            description:
              'A cell behaves like the agar block. If a cell grew too large, oxygen and food could not diffuse to the middle fast enough. The cell would starve before any reached it. Staying small keeps SA:V high and exchange fast.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bce-sa-worked-1',
      title: 'Comparing two cubes side by side: why a smaller cube exchanges faster',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil at a Cambridge grammar school is given two solid cubes. Cube P has a side of 1 cm. Cube Q has a side of 3 cm. Both are dropped into a dye bath. Work out the SA, V and SA:V for each cube, and use the ratios to explain which one takes on dye faster.',
        },
        {
          explanation:
            'Step 1: find the surface area of Cube P. A cube has 6 square faces. Each face of Cube P is 1 cm by 1 cm, so 1 cm squared. So SA = 6 times 1 = 6 cm squared.',
          maths: 'SA(P) = 6 x (1 x 1) = 6 cm squared',
        },
        {
          explanation:
            'Step 2: find the volume of Cube P. For a cube, V = side cubed.',
          maths: 'V(P) = 1 x 1 x 1 = 1 cm cubed',
        },
        {
          explanation:
            'Step 3: write the SA:V ratio for Cube P. SA divided by V.',
          maths: 'SA:V (P) = 6 / 1 = 6, so 6 to 1',
        },
        {
          explanation:
            'Step 4: find the SA of Cube Q. Each face is 3 cm by 3 cm, so 9 cm squared. There are 6 faces.',
          maths: 'SA(Q) = 6 x (3 x 3) = 6 x 9 = 54 cm squared',
        },
        {
          explanation:
            'Step 5: find the V of Cube Q.',
          maths: 'V(Q) = 3 x 3 x 3 = 27 cm cubed',
        },
        {
          explanation:
            'Step 6: write the SA:V ratio for Cube Q.',
          maths: 'SA:V (Q) = 54 / 27 = 2, so 2 to 1',
        },
        {
          explanation:
            'Step 7: compare the two ratios. Cube P has SA:V 6 to 1 and Cube Q has SA:V 2 to 1. Cube P has THREE TIMES as much surface per unit of volume as Cube Q.',
          maths: '6 to 1 is three times 2 to 1',
        },
        {
          explanation:
            'Final answer: Cube P takes on dye faster, because for every cubic centimetre of inside it has three times as much surface to soak through. Real cells stay small for the same reason: a tiny SA:V lets diffusion supply every part of the inside.',
          maths: 'SA:V (P) = 6:1, SA:V (Q) = 2:1; P exchanges faster',
        },
      ],
    },
    {
      id: 'bce-sa-worked-2',
      title: 'Using SA:V to predict the percentage colour change in agar cubes',
      steps: [
        {
          explanation:
            'Question: a school biology class in Sheffield runs the CLEAPSS agar-cube practical. A 1 cm cube and a 2 cm cube are dropped in the same dye for the same time. The 1 cm cube turns 100% coloured. The 2 cm cube turns coloured to a depth of 0.5 cm from each face. Find the percentage of the 2 cm cube that has changed colour, and use SA:V to comment.',
        },
        {
          explanation:
            'Step 1: work out the total volume of the 2 cm cube.',
          maths: 'V(total) = 2 x 2 x 2 = 8 cm cubed',
        },
        {
          explanation:
            'Step 2: work out the volume of the unchanged core. The dye has soaked 0.5 cm in from every face, so a cube-shaped core remains. Its side is 2 minus 2 times 0.5 = 1 cm.',
          maths: 'core side = 2 - (2 x 0.5) = 1 cm; V(core) = 1 cm cubed',
        },
        {
          explanation:
            'Step 3: work out the volume that HAS changed colour.',
          maths: 'V(changed) = 8 - 1 = 7 cm cubed',
        },
        {
          explanation:
            'Step 4: turn the changed volume into a percentage of the whole cube.',
          maths: 'percentage = (7 / 8) x 100 = 87.5%',
        },
        {
          explanation:
            'Step 5: compare with the 1 cm cube. It is 100% changed in the same time. So a higher SA:V (6 to 1 versus 3 to 1) means a higher proportion of the cube is reached by the dye.',
          maths: 'SA:V (1 cm) = 6:1; SA:V (2 cm) = 3:1',
        },
        {
          explanation:
            'Final answer: the 2 cm cube is 87.5% coloured. The 1 cm cube wins because its higher SA:V gives the dye less distance to travel and more surface per cubic centimetre to enter through. A larger cell would face the same problem.',
          maths: 'changed in 2 cm cube = 87.5%',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'bce-sa-q1',
      type: 'multiple-choice',
      stem: 'Which statement best defines the SURFACE AREA to VOLUME RATIO (SA:V) of a cell or object?',
      tier: 'core',
      options: [
        'The total surface area divided by the volume, comparing outside to inside',
        'The total surface area of the object, measured in cm squared',
        'The amount of inside space, measured in cm cubed',
        'The weight of the object divided by its volume',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bce-sa-mis-ratio-is-sa',
    },
    {
      id: 'bce-sa-q2',
      type: 'numeric-entry',
      stem: 'Work out the surface area, in cm squared, of a cube with side 2 cm.',
      tier: 'core',
      correctAnswer: 24,
      unit: 'cm squared',
      xpValue: 10,
      hint: 'A cube has 6 square faces. Each face has area side x side.',
    },
    {
      id: 'bce-sa-q3',
      type: 'numeric-entry',
      stem: 'Work out the volume, in cm cubed, of a cube with side 2 cm.',
      tier: 'core',
      correctAnswer: 8,
      unit: 'cm cubed',
      xpValue: 10,
      hint: 'For a cube, V = side x side x side.',
    },
    {
      id: 'bce-sa-q4',
      type: 'numeric-entry',
      stem: 'A 2 cm cube has SA = 24 cm squared and V = 8 cm cubed. Calculate SA:V as a single number (the left value when the ratio is written as N to 1).',
      tier: 'core',
      correctAnswer: 3,
      tolerance: 0.05,
      xpValue: 10,
      hint: 'SA:V = SA / V = 24 / 8.',
    },
    {
      id: 'bce-sa-q5',
      type: 'multiple-choice',
      stem: 'A 1 cm cube and a 4 cm cube are made from the same agar and placed in the same dye for the same period. Which cube takes on dye more thoroughly through its whole inside?',
      tier: 'core',
      options: [
        'The 4 cm cube, because it is bigger so it has more surface to soak through',
        'The 1 cm cube, because it has a higher SA:V and the dye has less distance to diffuse',
        'They change colour at exactly the same rate, because the dye is the same',
        'The 4 cm cube, because volume always beats surface in diffusion',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bce-sa-mis-bigger-higher-ratio',
    },
    {
      id: 'bce-sa-q6',
      type: 'drag-order',
      stem: 'Put the cubes in order of SA:V ratio, from HIGHEST SA:V at the start to LOWEST SA:V at the end.',
      tier: 'core',
      items: ['Cube side 4 cm', 'Cube side 1 cm', 'Cube side 2 cm'],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      hint: 'Smaller cubes have a higher SA:V because volume grows faster than surface.',
    },
    {
      id: 'bce-sa-q7',
      type: 'spot-misconception',
      stem: 'A pupil writes: "A bigger cell must have a bigger SA:V because a bigger cell has a bigger surface."',
      tier: 'core',
      statements: [
        {
          text: 'The pupil is right. Anything that is bigger has more surface and so a higher SA:V.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. SA:V is a RATIO. Volume grows faster than surface as size goes up, so a bigger cell or cube has a LOWER SA:V, not a higher one.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-sa-mis-bigger-higher-ratio',
    },
    // CONFIDENT (7)
    {
      id: 'bce-sa-q8',
      type: 'multiple-choice',
      stem: 'A school agar cube has a side of 3 cm. What is its surface area in cm squared?',
      tier: 'confident',
      options: ['9 cm squared', '18 cm squared', '27 cm squared', '54 cm squared'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Each face is 3 x 3 = 9 cm squared. There are 6 faces.',
    },
    {
      id: 'bce-sa-q9',
      type: 'multiple-choice',
      stem: 'For the same 3 cm agar cube, what is the SA:V ratio as a single number (the left value when the ratio is written as N to 1)?',
      tier: 'confident',
      options: ['0.5', '2', '27', '54'],
      correctIndex: 1,
      xpValue: 15,
      hint: 'SA = 54 cm squared and V = 27 cm cubed. SA:V = SA / V.',
    },
    {
      id: 'bce-sa-q10',
      type: 'multiple-choice',
      stem: 'A goldfish from a pet shop in Bristol has feathery, branched gills rather than a flat slab of skin. Which best explains the shape?',
      tier: 'confident',
      options: [
        'The feathery shape increases the volume of the gill, helping the fish to float',
        'The feathery shape raises the SURFACE AREA without changing the volume much, so SA:V is HIGH and oxygen diffuses into the blood at a high rate',
        'The branches lower the SA:V so less oxygen is wasted',
        'The shape has no link to gas exchange; it is a colour pattern only',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bce-sa-mis-shape-no-effect',
    },
    {
      id: 'bce-sa-q11',
      type: 'multiple-choice',
      stem: 'A pupil claims: "Plants do not need to bother about SA:V because they are not animals." Which response is correct?',
      tier: 'confident',
      options: [
        'The pupil is right; SA:V is only an animal idea',
        'The pupil is right; plants get all their food from the soil so SA:V does not apply',
        'The pupil is wrong; plants have an even higher SA:V than rocks',
        'The pupil is wrong; root hair cells are long thin cells that RAISE the SA:V where the plant takes in water from a UK potato field',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bce-sa-mis-plants-dont-need',
    },
    {
      id: 'bce-sa-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Why do the villi in a small intestine make the gut a better exchange surface?"',
      tier: 'confident',
      steps: [
        'A villus is a finger-shaped fold sticking out of the gut wall',
        'Adding lots of villi to the lining raises the total SURFACE AREA without changing the volume of food in the tube very much',
        null,
        'The bigger SA:V means sugars and amino acids diffuse into the blood faster, so the pupil absorbs more of a school lunch before it leaves the intestine',
      ],
      missingStepIndex: 2,
      correctStep:
        'A bigger SA at a similar V means the SA:V ratio is HIGHER for the folded gut than for a smooth tube',
      xpValue: 20,
    },
    {
      id: 'bce-sa-q13',
      type: 'numeric-entry',
      stem: 'A Sunday roast cook in Glasgow crushes a 4 cm ice cube into 8 smaller cubes of side 2 cm each. The total volume is unchanged at 64 cm cubed. Calculate the TOTAL surface area, in cm squared, of the 8 small cubes.',
      tier: 'confident',
      correctAnswer: 192,
      unit: 'cm squared',
      xpValue: 20,
      hint: 'Each small cube has SA = 6 x (2 x 2) = 24 cm squared. There are 8 of them.',
    },
    {
      id: 'bce-sa-q14',
      type: 'spot-misconception',
      stem: 'A pupil says: "Folding the gut lining must add extra space INSIDE the gut, because it makes the surface bigger."',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. A folded lining holds more food than a smooth one.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Folding raises the SURFACE AREA of the gut wall but barely changes the VOLUME inside the tube. SA goes up, V stays similar, so the SA:V ratio rises.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bce-sa-mis-folding-adds-volume',
    },
    // CHALLENGE (6)
    {
      id: 'bce-sa-q15',
      type: 'multiple-choice',
      stem: 'A whale at the Natural History Museum has a much LOWER SA:V than a mouse. Which statement best explains why this matters for body temperature?',
      tier: 'challenge',
      options: [
        'A whale has a higher SA:V because it is huge, so it loses heat very fast',
        'A whale has no body temperature to worry about because it lives in water',
        'A whale has a higher SA:V than a mouse, which is why whales feel the cold easily',
        'A whale has a LOW SA:V because its volume has grown faster than its skin area, so a whale holds heat in and a mouse loses heat fast for its size',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'bce-sa-mis-whale-high-ratio',
    },
    {
      id: 'bce-sa-q16',
      type: 'numeric-entry',
      stem: 'A pupil in Manchester has two solid cuboid blocks made from the same agar. Block A is 2 cm by 2 cm by 2 cm. Block B is 4 cm by 4 cm by 1 cm. Both have the same volume of 16 cm cubed. Calculate the SA:V ratio of Block B as a single decimal number (the left value when the ratio is written as N to 1), to one decimal place.',
      tier: 'challenge',
      correctAnswer: 2.5,
      tolerance: 0.1,
      xpValue: 25,
      hint: 'SA of Block B = 2 x (4 x 4) + 4 x (4 x 1) = 32 + 16 = 48 cm squared. SA:V = 48 / 16.',
    },
    {
      id: 'bce-sa-q17',
      type: 'numeric-entry',
      stem: 'Continuing the previous question: Block A is a 2 cm cube. Calculate its SA:V ratio as a single number, then state the DIFFERENCE between the SA:V of Block B and Block A. Give the difference rounded to one decimal place.',
      tier: 'challenge',
      correctAnswer: -0.5,
      tolerance: 0.1,
      xpValue: 25,
      hint: 'Block A: SA = 24, V = 8, SA:V = 3. Block B SA:V = 2.5. Difference = 2.5 - 3 = -0.5. Flattening Block A to Block B has LOWERED its SA:V even though the volume is the same.',
    },
    {
      id: 'bce-sa-q18',
      type: 'multiple-choice',
      stem: 'A school biology textbook claims: "The unit of SA:V is cm to the minus 1 because we divide cm squared by cm cubed." Why does the UNIT of SA:V matter when comparing two cells?',
      tier: 'challenge',
      options: [
        'The unit is just a label; it does not affect comparisons',
        'The unit lets us compare cells of the SAME size only',
        'Without consistent units (cm squared on the SA, cm cubed on the V), the ratio is meaningless. Mixing units would give a wrong-sized answer and a wrong conclusion about exchange speed',
        'The unit changes the physical surface area of the cell itself',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'bce-sa-mis-units-do-not-matter',
    },
    {
      id: 'bce-sa-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "An NHS delivery-suite midwife wraps a newborn in a warm blanket within seconds of birth. Use SA:V to explain why."',
      tier: 'challenge',
      steps: [
        'A newborn baby is small compared with an adult, so its body volume is small for the amount of skin it has',
        'This means the SA:V of a newborn is HIGH (more surface per unit of body volume)',
        null,
        'Wrapping the baby reduces heat loss across the skin, so the baby holds its body temperature near 37 degrees Celsius',
      ],
      missingStepIndex: 2,
      correctStep:
        'A high SA:V means heat made inside the body leaks out across the skin at a fast rate, so an uncovered newborn cools down much faster than an adult would',
      xpValue: 25,
    },
    {
      id: 'bce-sa-q20',
      type: 'numeric-entry',
      stem: 'A Year 7 pupil at a Tunbridge Wells grammar school runs the CLEAPSS agar practical. A 1 cm cube is fully coloured after 4 minutes. A 4 cm cube of the same agar is dropped in the same dye. The dye soaks in at the SAME RATE per cm squared of surface. Estimate the time, in minutes, for dye to reach the centre of the 4 cm cube. Round to the nearest whole number.',
      tier: 'challenge',
      correctAnswer: 16,
      tolerance: 1,
      xpValue: 25,
      hint: 'The dye has to diffuse from a face to the centre. In the 1 cm cube the centre is 0.5 cm from a face; in the 4 cm cube it is 2 cm. The distance is 4 times longer, so the time is roughly 4 times longer too: 4 x 4 = 16 minutes.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology examiner report June 2019 (8461/1F) Q03 on size of cells, which flags candidates "stating that bigger cells must have a bigger surface area to volume ratio". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on surface area and volume (stem.org.uk/best, accessed 2026-05-13).
    {
      id: 'bce-sa-mis-bigger-higher-ratio',
      description:
        'A bigger cell or cube has a higher SA:V because it has a bigger surface area.',
      triggerAnswer: 'bigger-higher-ratio',
      correction:
        'SA:V is a RATIO. As size goes up, volume grows faster than surface, so SA:V FALLS. Bigger cells have a lower SA:V, which is why cells stay small.',
      reExplanation:
        'Picture three cubes of side 1, 2 and 4 cm. The 1 cm cube has SA:V of 6 to 1, the 2 cm cube 3 to 1, the 4 cm cube 1.5 to 1. The surface goes up by side squared, the volume by side cubed, so each doubling of side HALVES the ratio. A bigger thing has more total surface, but less surface per unit of inside.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on "Why we compare ratios, not raw surface areas" (stem.org.uk/best, accessed 2026-05-13). Reinforced by Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 3 on the body and exchange surfaces.
    {
      id: 'bce-sa-mis-ratio-is-sa',
      description:
        'SA:V is just the surface area of a cell. A bigger surface means a bigger SA:V.',
      triggerAnswer: 'ratio-is-sa',
      correction:
        'SA:V is the surface area DIVIDED BY the volume. It compares outside to inside. A flat sheet and a thick block can have the same surface area but very different SA:V.',
      reExplanation:
        'Two shapes can share the same surface area while one is mostly empty inside and the other is packed. A balloon with a thin skin has lots of surface for very little inside, so SA:V is high; a brick of the same surface has a fat volume, so SA:V is low. To compare exchange speed, divide surface by volume and look at the ratio, not just the surface.',
    },
    // Source: CLEAPSS GL161 "Agar diffusion practical guide" notes that pupils "often describe whales as having a large SA:V because they are large", confusing absolute surface area with the ratio (cleapss.org.uk, accessed 2026-05-13). Reinforced by AQA GCSE Biology examiner report June 2021 (8461/2H) Q06 on body size and heat exchange.
    {
      id: 'bce-sa-mis-whale-high-ratio',
      description:
        'A whale has a large SA:V because the whale itself is huge and has lots of skin.',
      triggerAnswer: 'whale-high-ratio',
      correction:
        'A whale has a very LOW SA:V. Its body volume has grown faster than its skin area, so it has only a little surface per cubic metre of body. This is why whales hold their body heat in cold seas.',
      reExplanation:
        'Total surface and SA:V are not the same idea. A whale does have more total skin than a mouse, but its body volume is huge, so the ratio of surface to volume is small. A small mammal like a mouse has a much higher SA:V, which is why a mouse must eat often to replace heat that leaks through its skin while a whale does not.',
    },
    // Source: Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 3 on adaptations of exchange surfaces, which flags pupils saying "shape does not change SA:V, only size does". Reinforced by Edexcel GCSE Biology examiner report June 2020 (1BI0/1F) Q05 on villi and alveoli.
    {
      id: 'bce-sa-mis-shape-no-effect',
      description:
        'The shape of a cell or organ does not change its SA:V. Only the size of the cell does.',
      triggerAnswer: 'shape-no-effect',
      correction:
        'Shape changes SA:V a lot. Flattening, folding or branching raises the surface for the same volume. Villi, alveoli and root hair cells all use shape to lift SA:V.',
      reExplanation:
        'Hold a piece of plasticine as a chubby ball, then roll it into a thin sheet of the same volume. The sheet has much more surface area but the same inside, so its SA:V is far higher. Cells in exchange tissues use the same trick. A long thin root hair cell or a flat alveolus has the same kind of cell volume as a normal cell but with a lot more surface for diffusion.',
    },
    // Source: AQA GCSE Biology examiner report June 2018 (8461/1F) Q04 on osmosis and exchange, which flags candidates "writing that plants do not need exchange surfaces because they do not move". Reinforced by CGP KS3 Biology Study Book p.22 Common Mistake box on root hair cells.
    {
      id: 'bce-sa-mis-plants-dont-need',
      description:
        'Only animals need a large SA:V; plants do not bother with exchange surfaces.',
      triggerAnswer: 'plants-dont-need',
      correction:
        'Plants need a high SA:V too. Root hair cells are long thin extensions that raise SA:V where the plant takes in water and minerals, and leaves are flat to absorb light and let gases diffuse.',
      reExplanation:
        'A root hair cell on a potato plant in a UK field has a long thin tip that sticks out into the soil. This shape adds a lot of surface for the same inside, so the SA:V is high and water enters fast by osmosis. Leaves are thin and flat for the same reason: lots of surface for sunlight and gas exchange, with very little volume between top and bottom.',
    },
    // Source: OCR GCSE Biology A examiner report June 2019 (J247/01) Q05 on absorption, which reports pupils "writing that folding the gut adds volume rather than surface". Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on villi (stem.org.uk/best, accessed 2026-05-13).
    {
      id: 'bce-sa-mis-folding-adds-volume',
      description:
        'Folding the gut lining raises the volume of the gut, not the surface area.',
      triggerAnswer: 'folding-adds-volume',
      correction:
        'Folding raises SURFACE AREA without changing the volume of the tube much. The top of the SA:V ratio goes up while the bottom stays similar, so SA:V rises.',
      reExplanation:
        'Imagine a smooth pipe filled with food. Now line the inside with tiny finger shapes pointing inward. The space for food is almost the same, but the total wall area has grown a lot. SA is up; V is similar. So SA:V (surface divided by volume) goes up. This is why an adult human small intestine has about 30 square metres of folded surface inside roughly the same amount of tube.',
    },
    // Source: Edexcel GCSE Biology examiner report June 2022 (1BI0/2F) Q03 on calculations, which reports candidates "leaving the SA:V as a bare number with no unit". Reinforced by CGP KS3 Biology Study Book p.22 Maths Skills callout on units of SA:V.
    {
      id: 'bce-sa-mis-units-do-not-matter',
      description:
        'The units of SA:V do not matter. It is just a ratio so there is no unit.',
      triggerAnswer: 'units-do-not-matter',
      correction:
        'Units do matter. SA in cm squared divided by V in cm cubed gives cm to the minus 1. Mixing units (square mm over cubic cm, say) would give a wrong-sized answer and a wrong conclusion.',
      reExplanation:
        'A ratio of cm squared to cm cubed simplifies to one over cm, which we write as cm to the minus 1. The unit reminds us that SA:V is surface per unit of volume. If a pupil works in mm squared and cm cubed without converting, the number can be hundreds of times off. Pick one length unit and stick to it across both halves of the ratio.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
