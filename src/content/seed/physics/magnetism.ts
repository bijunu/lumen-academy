import type { SkillNode, Zone } from '@/types/content'

const MAGNET_POLES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Bar magnets: like poles repel, unlike poles attract</text>

    <!-- Top row: N-N repel -->
    <text x="200" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">North to North: repel</text>
    <rect x="60" y="100" width="120" height="32" />
    <rect x="60" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="90" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="150" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <rect x="220" y="100" width="120" height="32" />
    <rect x="220" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="250" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="310" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <!-- Repel arrows pointing away from each other (between the two N poles at x=180 and x=220) -->
    <line x1="180" y1="116" x2="160" y2="116" stroke-width="2.5" />
    <polygon points="166,110 154,116 166,122" fill="currentColor" stroke="none" />
    <line x1="220" y1="116" x2="240" y2="116" stroke-width="2.5" />
    <polygon points="234,110 246,116 234,122" fill="currentColor" stroke="none" />
    <text x="200" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">push apart</text>

    <!-- Bottom row: N-S attract -->
    <text x="600" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">North to South: attract</text>
    <rect x="460" y="100" width="120" height="32" />
    <rect x="460" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="490" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="550" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <rect x="620" y="100" width="120" height="32" />
    <rect x="680" y="100" width="60" height="32" fill="currentColor" opacity="0.3" />
    <text x="650" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="710" y="122" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <!-- Attract arrows pointing toward each other -->
    <line x1="585" y1="116" x2="605" y2="116" stroke-width="2.5" />
    <polygon points="599,110 611,116 599,122" fill="currentColor" stroke="none" />
    <line x1="615" y1="116" x2="595" y2="116" stroke-width="2.5" />
    <polygon points="601,110 589,116 601,122" fill="currentColor" stroke="none" />
    <text x="600" y="160" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">pull together</text>

    <!-- Materials section -->
    <line x1="60" y1="200" x2="740" y2="200" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="225" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Magnetic vs non-magnetic materials</text>

    <!-- Magnetic column -->
    <text x="200" y="255" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Magnetic</text>
    <text x="200" y="275" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">iron (e.g. paper clip)</text>
    <text x="200" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">steel (most fridge doors)</text>
    <text x="200" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">nickel</text>
    <text x="200" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cobalt</text>

    <!-- Non-magnetic column -->
    <text x="600" y="255" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Non-magnetic</text>
    <text x="600" y="275" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">aluminium (a metal!)</text>
    <text x="600" y="290" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">copper (a metal!)</text>
    <text x="600" y="305" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">plastic</text>
    <text x="600" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">wood, glass</text>

    <text x="400" y="365" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Not all metals are magnetic. Aluminium drink cans and copper wires do not stick to fridge magnets.</text>
  </g>
`

const FIELD_LINES_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Magnetic field lines round a bar magnet (N to S outside the magnet)</text>

    <!-- Bar magnet centred -->
    <rect x="280" y="170" width="240" height="60" />
    <rect x="280" y="170" width="120" height="60" fill="currentColor" opacity="0.3" />
    <text x="340" y="208" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="460" y="208" text-anchor="middle" font-size="22" font-weight="700" stroke="none" fill="currentColor">S</text>

    <!-- Field lines: loops from N around to S -->
    <!-- Loop 1: just above the magnet -->
    <path d="M 320 170 C 320 110, 480 110, 480 170" />
    <polygon points="395,113 410,108 405,123" fill="currentColor" stroke="none" />

    <!-- Loop 2: a bit further out -->
    <path d="M 310 170 C 310 80, 490 80, 490 170" />
    <polygon points="395,80 410,75 405,90" fill="currentColor" stroke="none" />

    <!-- Loop 3: largest -->
    <path d="M 300 170 C 300 50, 500 50, 500 170" />
    <polygon points="395,49 410,44 405,59" fill="currentColor" stroke="none" />

    <!-- Loop -1: just below -->
    <path d="M 320 230 C 320 290, 480 290, 480 230" />
    <polygon points="395,293 410,288 405,303" fill="currentColor" stroke="none" />

    <!-- Loop -2: further below -->
    <path d="M 310 230 C 310 320, 490 320, 490 230" />
    <polygon points="395,323 410,318 405,333" fill="currentColor" stroke="none" />

    <!-- Labels -->
    <text x="120" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">field is strongest</text>
    <text x="120" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">at the poles</text>
    <text x="120" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(lines closest together)</text>

    <text x="680" y="200" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">arrows point from</text>
    <text x="680" y="218" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">N to S outside</text>
    <text x="680" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the magnet</text>
  </g>
`

const EARTH_COMPASS_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Earth as a magnet: a compass needle points roughly north</text>

    <!-- Earth circle -->
    <circle cx="400" cy="220" r="100" />
    <text x="400" y="115" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">geographic N</text>
    <text x="400" y="345" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">geographic S</text>

    <!-- Internal bar magnet (slightly tilted to suggest the offset) -->
    <line x1="395" y1="135" x2="405" y2="305" stroke-width="3" stroke-dasharray="6,4" />
    <text x="380" y="150" text-anchor="end" font-size="12" font-weight="700" stroke="none" fill="currentColor">magnetic S</text>
    <text x="385" y="153" text-anchor="end" font-size="10" stroke="none" fill="currentColor">(inside Earth)</text>
    <text x="420" y="298" text-anchor="start" font-size="12" font-weight="700" stroke="none" fill="currentColor">magnetic N</text>
    <text x="425" y="312" text-anchor="start" font-size="10" stroke="none" fill="currentColor">(inside Earth)</text>

    <!-- Compass needle on Earth's surface -->
    <circle cx="500" cy="170" r="22" stroke-width="2.5" />
    <line x1="500" y1="152" x2="500" y2="188" stroke-width="2.5" />
    <polygon points="494,160 500,148 506,160" fill="currentColor" stroke="none" />
    <text x="500" y="146" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="500" y="200" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">S</text>
    <text x="555" y="170" text-anchor="start" font-size="11" stroke="none" fill="currentColor">compass</text>

    <!-- Note -->
    <text x="120" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Compass arrow N points</text>
    <text x="120" y="218" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">to geographic North</text>
    <text x="120" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">because Earth has a magnetic</text>
    <text x="120" y="256" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">S pole near geographic N.</text>
  </g>
`

const SOLENOID_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Electromagnet: a coil of wire round an iron core, switched on by a battery</text>

    <!-- Iron core (rectangular bar) -->
    <rect x="200" y="180" width="400" height="40" />
    <text x="400" y="205" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">iron core (inside the coil)</text>

    <!-- Coil loops drawn as alternating top/bottom arcs -->
    <path d="M 220 180 A 12 18 0 0 1 220 220" />
    <path d="M 250 180 A 12 18 0 0 1 250 220" />
    <path d="M 280 180 A 12 18 0 0 1 280 220" />
    <path d="M 310 180 A 12 18 0 0 1 310 220" />
    <path d="M 340 180 A 12 18 0 0 1 340 220" />
    <path d="M 370 180 A 12 18 0 0 1 370 220" />
    <path d="M 400 180 A 12 18 0 0 1 400 220" />
    <path d="M 430 180 A 12 18 0 0 1 430 220" />
    <path d="M 460 180 A 12 18 0 0 1 460 220" />
    <path d="M 490 180 A 12 18 0 0 1 490 220" />
    <path d="M 520 180 A 12 18 0 0 1 520 220" />
    <path d="M 550 180 A 12 18 0 0 1 550 220" />
    <path d="M 580 180 A 12 18 0 0 1 580 220" />

    <!-- Wires going out left and right to a battery and switch -->
    <line x1="220" y1="180" x2="220" y2="120" />
    <line x1="220" y1="120" x2="120" y2="120" />
    <line x1="580" y1="180" x2="580" y2="120" />
    <line x1="580" y1="120" x2="680" y2="120" />

    <!-- Battery cell on the left -->
    <line x1="120" y1="100" x2="120" y2="140" stroke-width="3" />
    <line x1="110" y1="105" x2="110" y2="135" />
    <text x="100" y="130" text-anchor="end" font-size="11" stroke="none" fill="currentColor">battery</text>
    <line x1="110" y1="120" x2="80" y2="120" />
    <line x1="80" y1="120" x2="80" y2="280" />
    <line x1="80" y1="280" x2="680" y2="280" />
    <line x1="680" y1="280" x2="680" y2="190" />

    <!-- Switch on the right (open or closed) -->
    <circle cx="680" cy="160" r="3" fill="currentColor" />
    <circle cx="680" cy="190" r="3" fill="currentColor" />
    <line x1="680" y1="160" x2="660" y2="135" stroke-width="2.5" />
    <text x="700" y="170" text-anchor="start" font-size="11" stroke="none" fill="currentColor">switch</text>
    <text x="700" y="186" text-anchor="start" font-size="10" stroke="none" fill="currentColor">(closed = on)</text>

    <text x="400" y="80" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Current flows round the coil; the iron core becomes magnetic.</text>
    <text x="400" y="320" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Open the switch (no current): the iron core stops being a magnet.</text>
    <text x="400" y="338" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Switchable. That is the key advantage over a permanent magnet.</text>
  </g>
`

const ELECTROMAGNET_STRENGTH_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">What makes an electromagnet stronger?</text>

    <!-- Three rows: more turns, more current, iron core -->

    <!-- Row 1: more turns -->
    <text x="80" y="100" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">1. More turns of wire</text>
    <rect x="280" y="90" width="160" height="20" />
    <path d="M 290 90 A 6 10 0 0 1 290 110" />
    <path d="M 310 90 A 6 10 0 0 1 310 110" />
    <path d="M 330 90 A 6 10 0 0 1 330 110" />
    <text x="360" y="105" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">few turns: weaker</text>
    <rect x="500" y="90" width="220" height="20" />
    <path d="M 510 90 A 5 10 0 0 1 510 110" />
    <path d="M 525 90 A 5 10 0 0 1 525 110" />
    <path d="M 540 90 A 5 10 0 0 1 540 110" />
    <path d="M 555 90 A 5 10 0 0 1 555 110" />
    <path d="M 570 90 A 5 10 0 0 1 570 110" />
    <path d="M 585 90 A 5 10 0 0 1 585 110" />
    <path d="M 600 90 A 5 10 0 0 1 600 110" />
    <path d="M 615 90 A 5 10 0 0 1 615 110" />
    <text x="660" y="105" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">more turns: stronger</text>

    <!-- Row 2: more current -->
    <text x="80" y="180" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">2. Bigger current</text>
    <text x="280" y="180" text-anchor="start" font-size="11" stroke="none" fill="currentColor">small battery: weaker</text>
    <text x="500" y="180" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">bigger battery (more current): stronger</text>

    <!-- Row 3: iron core -->
    <text x="80" y="240" text-anchor="start" font-size="13" font-weight="700" stroke="none" fill="currentColor">3. Add an iron core</text>
    <text x="280" y="240" text-anchor="start" font-size="11" stroke="none" fill="currentColor">no core: weaker</text>
    <text x="500" y="240" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">iron core in the coil: stronger</text>

    <!-- Switch off note -->
    <line x1="60" y1="290" x2="740" y2="290" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="320" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Switch the current off and the magnet stops working straight away.</text>
    <text x="400" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A permanent magnet stays magnetic; an electromagnet is on only when current flows.</text>
  </g>
`

const SCRAPYARD_CRANE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">UK contexts: scrapyard crane and electric bell</text>

    <!-- Crane on the left -->
    <rect x="40" y="80" width="300" height="240" fill="none" />
    <text x="190" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Scrapyard crane</text>

    <!-- Crane arm -->
    <line x1="80" y1="130" x2="80" y2="220" stroke-width="3" />
    <line x1="80" y1="130" x2="280" y2="130" stroke-width="3" />
    <line x1="280" y1="130" x2="280" y2="180" stroke-width="2" />

    <!-- Electromagnet block (a disc on a chain) -->
    <rect x="240" y="180" width="80" height="30" fill="currentColor" opacity="0.4" />
    <text x="280" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="white">EM</text>

    <!-- Cars below -->
    <rect x="220" y="240" width="50" height="20" />
    <circle cx="232" cy="262" r="4" />
    <circle cx="258" cy="262" r="4" />
    <rect x="285" y="240" width="50" height="20" />
    <circle cx="297" cy="262" r="4" />
    <circle cx="323" cy="262" r="4" />

    <text x="190" y="296" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Switch ON: lifts a car.</text>
    <text x="190" y="312" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Switch OFF: drops it.</text>

    <!-- Electric bell on the right -->
    <rect x="440" y="80" width="300" height="240" fill="none" />
    <text x="590" y="105" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Electric bell</text>

    <!-- Bell dome -->
    <path d="M 540 200 Q 590 130 640 200" stroke-width="2.5" />
    <line x1="540" y1="200" x2="640" y2="200" stroke-width="2.5" />
    <line x1="590" y1="200" x2="590" y2="220" stroke-width="2" />
    <circle cx="590" cy="225" r="6" fill="currentColor" />

    <!-- Coil + striker arm -->
    <rect x="500" y="240" width="180" height="20" />
    <line x1="490" y1="250" x2="500" y2="250" stroke-width="2" />
    <line x1="680" y1="250" x2="690" y2="250" stroke-width="2" />
    <text x="590" y="254" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="white">coil</text>

    <line x1="540" y1="290" x2="640" y2="290" stroke-width="1.5" />
    <text x="590" y="310" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A coil pulls a striker</text>
    <text x="590" y="324" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">to ring the bell, then releases.</text>
  </g>
`

export const magnetismFields: SkillNode = {
  id: 'physics-magnetism-fields',
  title: 'Magnets and Magnetic Fields',
  description:
    'Magnets have a north (N) pole and a south (S) pole. Like poles repel and unlike poles attract. Magnetic materials are iron, steel, nickel, and cobalt. Most metals (aluminium, copper) and all non-metals (plastic, wood, glass) are not magnetic. The space round a magnet where it pushes or pulls magnetic objects is called its magnetic field. Field lines drawn from N to S outside the magnet are a useful sketch: they are closer together where the field is stronger (at the poles). Earth itself behaves like a giant bar magnet, which is why a compass needle lines up roughly north-south. UK contexts include fridge magnets, the bar magnets in a school lab tray, iron-filing patterns from a Year 7 practical, and a compass on a Lake District walk. Year 7 keeps it qualitative; magnetic flux density (B) in tesla and field strength formulas are GCSE+.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'Magnetic poles, attraction and repulsion. Magnetic fields by plotting with compass, representation by field lines. Earth\'s magnetism, compass and navigation.',
    awardingBodies: {
      aqa: '4.7.1 Permanent and induced magnetism, magnetic forces and fields (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.1-7.4 permanent and induced magnets, magnetic fields (GCSE Physics 1PH0)',
      ocr: 'P6.1 Magnets and magnetic fields (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'mag-scene-poles',
      title: 'Magnet Poles and Magnetic Materials',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare like-pole repulsion with unlike-pole attraction, and to see which materials are magnetic.',
      data: {
        viewBox: '0 0 800 400',
        svg: MAGNET_POLES_SVG,
        hotspots: [
          {
            id: 'mag-p-repel',
            x: 25,
            y: 30,
            label: 'Like poles repel',
            description:
              'Two N poles facing each other push apart. Two S poles facing each other do the same. The rule is simple: like poles repel, no matter how strong the magnets are.',
          },
          {
            id: 'mag-p-attract',
            x: 75,
            y: 30,
            label: 'Unlike poles attract',
            description:
              'An N pole and an S pole pull toward each other. Most fridge magnets work this way: the back of the magnet is one pole, and a bit of magnetic steel in the fridge door becomes the opposite pole when the magnet is near it.',
          },
          {
            id: 'mag-p-magnetic',
            x: 25,
            y: 75,
            label: 'Magnetic: iron, steel, nickel, cobalt',
            description:
              'Only a few materials are magnetic. The main one is iron. Steel is mostly iron, so it is magnetic too. Nickel and cobalt are also magnetic. A magnet sticks to a paper clip (steel), to most fridge doors (steel), and to iron filings.',
          },
          {
            id: 'mag-p-non-magnetic',
            x: 75,
            y: 75,
            label: 'Non-magnetic: aluminium, copper, plastic, wood',
            description:
              'Aluminium and copper are metals but they are not magnetic. A magnet does not stick to a Coke can or a stripped copper wire. Plastic, wood, glass, and rubber are also not magnetic. The trap "all metals are magnetic" is one to spot.',
          },
        ],
      },
    },
    {
      id: 'mag-scene-field-lines',
      title: 'The Magnetic Field Round a Bar Magnet',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how field lines run from N to S outside the magnet, and where the field is strongest.',
      data: {
        viewBox: '0 0 800 400',
        svg: FIELD_LINES_SVG,
        hotspots: [
          {
            id: 'mag-f-direction',
            x: 50,
            y: 22,
            label: 'Field lines go from N to S outside the magnet',
            description:
              'A magnetic field line shows the direction the N pole of a small test compass would point. Outside the magnet, the lines come out of the N pole, curve round, and go back into the S pole.',
          },
          {
            id: 'mag-f-poles-strong',
            x: 15,
            y: 55,
            label: 'Strongest near the poles',
            description:
              'Where the field lines are closest together, the magnetic force is strongest. That is at the poles. A paper clip placed near the middle of a bar magnet feels less pull than one placed at the end.',
          },
          {
            id: 'mag-f-iron-filings',
            x: 85,
            y: 55,
            label: 'Iron filings show the pattern',
            description:
              'In a school practical, iron filings sprinkled on paper round a bar magnet line up along the field. The pattern is the same shape as the lines you draw: loops from N to S, closest together at the ends.',
          },
        ],
      },
    },
    {
      id: 'mag-scene-earth',
      title: 'Earth as a Giant Magnet: How a Compass Works',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a compass needle points roughly north and where Earth\'s magnetic poles sit.',
      data: {
        viewBox: '0 0 800 400',
        svg: EARTH_COMPASS_SVG,
        hotspots: [
          {
            id: 'mag-e-bar',
            x: 50,
            y: 55,
            label: 'Earth behaves like a bar magnet',
            description:
              'The molten iron in Earth\'s core makes Earth into a giant magnet, with a magnetic field that fills the space round the planet. A small bar-magnet picture is a useful Year 7 model.',
          },
          {
            id: 'mag-e-compass',
            x: 64,
            y: 42,
            label: 'A compass needle lines up with Earth\'s field',
            description:
              'A compass is a tiny bar magnet on a pivot. It rotates until its N end points along the local field. On a Lake District walk, the N end always swings round to point roughly north.',
          },
          {
            id: 'mag-e-surprise',
            x: 15,
            y: 55,
            label: 'A surprise: magnetic S near geographic N',
            description:
              'A compass N points to geographic North because there is a magnetic S pole there inside Earth (unlike poles attract). The labels swap, but the picture is consistent. Year 7 just needs the rule "compass N points roughly north" and that Earth itself is a magnet.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'mag-worked-1',
      title: 'Predicting attract or repel for two bar magnets',
      steps: [
        {
          explanation:
            'Set the scene. A pupil in Tunbridge Wells lays two bar magnets on a desk, end to end. The left magnet has its N pole facing right, and the right magnet has its N pole facing left.',
        },
        {
          explanation:
            'Identify the two facing poles. Left magnet: N facing right. Right magnet: N facing left. So the two poles meeting in the middle are N and N.',
          maths: 'facing poles: N and N (like poles)',
        },
        {
          explanation:
            'Recall the rule. Like poles repel, unlike poles attract. Two N poles facing each other are like poles.',
        },
        {
          explanation:
            'State the result. The two magnets push apart. If the pupil lets go of one, it slides away. If they flip the right magnet round (so its S pole faces left), the magnets would attract and snap together.',
          maths: 'N to N: repel (push apart)',
        },
      ],
    },
    {
      id: 'mag-worked-2',
      title: 'Sorting a tray of objects into magnetic and non-magnetic',
      steps: [
        {
          explanation:
            'Set the scene. A Year 7 in a Sevenoaks lab tests a tray of objects with a bar magnet: a steel paper clip, an aluminium drink-can ring-pull, a copper coin, a plastic ruler, an iron nail, and a wooden pencil.',
        },
        {
          explanation:
            'Recall the rule. Magnetic materials are iron, steel, nickel, and cobalt. Most other things, including most metals, are not magnetic.',
        },
        {
          explanation:
            'Test each object with the magnet, in turn, and group it. Steel paper clip: sticks. Iron nail: sticks. Aluminium ring-pull: does NOT stick. Copper coin: does NOT stick. Plastic ruler: does NOT stick. Wooden pencil: does NOT stick.',
          maths: 'magnetic: paper clip, iron nail; non-magnetic: aluminium, copper, plastic, wood',
        },
        {
          explanation:
            'Spot the trap. Aluminium and copper are metals, but neither sticks. The rule is not "all metals are magnetic"; it is "iron, steel, nickel, cobalt".',
        },
        {
          explanation:
            'State the result. Two of the six objects are magnetic (paper clip, iron nail). Four are not (aluminium ring-pull, copper coin, plastic ruler, wooden pencil).',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'mag-q1',
      type: 'multiple-choice',
      stem: 'Two bar magnets are placed end to end so that an N pole faces an N pole. What happens?',
      tier: 'core',
      options: [
        'They attract.',
        'They repel.',
        'Nothing happens.',
        'They attract slowly, then repel.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mag-mis-pole-rule',
      hint: 'Like poles repel; unlike poles attract.',
    },
    {
      id: 'mag-q2',
      type: 'multiple-choice',
      stem: 'A pupil holds a magnet near an aluminium drink can. What happens?',
      tier: 'core',
      options: [
        'The magnet sticks to the can, because aluminium is a metal.',
        'The magnet repels the can strongly.',
        'The magnet does not stick. Aluminium is not magnetic, even though it is a metal.',
        'The can rolls away from the magnet under a magnetic push.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Not all metals are magnetic. Aluminium and copper are common ones that are not.',
    },
    {
      id: 'mag-q3',
      type: 'multiple-choice',
      stem: 'Which of these is a magnetic material?',
      tier: 'core',
      options: [
        'Copper',
        'Aluminium',
        'Plastic',
        'Iron',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Steel paper clips, iron nails, and most fridge doors are made of this metal (or its alloys).',
    },
    {
      id: 'mag-q4',
      type: 'multiple-choice',
      stem: 'Which sentence about magnetic field lines round a bar magnet is correct?',
      tier: 'core',
      options: [
        'The lines point from S to N outside the magnet.',
        'The lines point from N to S outside the magnet.',
        'The lines go in straight rays from the magnet, like sunlight.',
        'There are no field lines; the field is invisible and has no shape.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Use the direction a small test compass N pole would point.',
    },
    {
      id: 'mag-q5',
      type: 'multiple-choice',
      stem: 'Where on a bar magnet is the magnetic field strongest?',
      tier: 'core',
      options: [
        'At the poles (N and S ends).',
        'In the middle, away from the poles.',
        'Equally strong everywhere round the magnet.',
        'Only on the painted side.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mag-mis-field-uniform',
      hint: 'Look for where the field lines crowd closest together.',
    },
    {
      id: 'mag-q6',
      type: 'multiple-choice',
      stem: 'Why does a compass needle point roughly north when you set it on a desk in the UK?',
      tier: 'core',
      options: [
        'Earth is a giant magnet, and the compass needle (a tiny magnet) lines up with Earth\'s magnetic field.',
        'The Sun pulls the needle north.',
        'Compass needles are heavier on the north end, so they tip that way.',
        'Static electricity in the air pushes the needle north.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'mag-mis-compass-cause',
      hint: 'A compass is a tiny bar magnet that can spin freely.',
    },
    {
      id: 'mag-q7',
      type: 'spot-misconception',
      stem: 'Aisha writes, "Anything made of metal will stick to a fridge magnet, because all metals are magnetic." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. Metals are magnetic; non-metals are not.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Only iron, steel, nickel, and cobalt are magnetic. Aluminium drink cans and copper wires are metals, but they do not stick to a fridge magnet.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Aisha\'s claim depends on "all metals are magnetic". Is that actually true for aluminium and copper?',
    },
    {
      id: 'mag-q8',
      type: 'spot-misconception',
      stem: 'Theo writes, "If I push two N poles toward each other, they should snap together, because they are both strong." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Two strong poles will pull together no matter what.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. The rule is "like poles repel, unlike poles attract". Two N poles push apart, however strong they are. To get them to attract, one of them has to be flipped so an S pole faces an N pole.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-pole-rule',
      hint: 'The rule is "like poles ___, unlike poles ___". Strength does not change which way the rule points.',
    },
    {
      id: 'mag-q9',
      type: 'labelled-image',
      stem: 'A pupil in a Manchester lab pours iron filings round a bar magnet. Drag each label onto the right marker on the diagram.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: FIELD_LINES_SVG,
      hotspots: [
        { id: 'mag-q9-h1', x: 41, y: 52, correctLabel: 'N pole' },
        { id: 'mag-q9-h2', x: 59, y: 52, correctLabel: 'S pole' },
        { id: 'mag-q9-h3', x: 50, y: 18, correctLabel: 'Field line N to S' },
        { id: 'mag-q9-h4', x: 15, y: 55, correctLabel: 'Field strongest at poles' },
      ],
      labels: [
        'N pole',
        'S pole',
        'Field line N to S',
        'Field strongest at poles',
        'Centre of mass',
        'Electric current',
        'Gravity arrow',
      ],
      xpValue: 15,
      hint: 'Field lines come out of N and curve into S outside the magnet.',
    },
    {
      id: 'mag-q10',
      type: 'labelled-image',
      stem: 'Drag each material name onto the right column of the magnetic vs non-magnetic chart.',
      tier: 'confident',
      viewBox: '0 0 800 400',
      svg: MAGNET_POLES_SVG,
      hotspots: [
        { id: 'mag-q10-h1', x: 25, y: 70, correctLabel: 'Iron' },
        { id: 'mag-q10-h2', x: 25, y: 78, correctLabel: 'Steel' },
        { id: 'mag-q10-h3', x: 75, y: 70, correctLabel: 'Aluminium' },
        { id: 'mag-q10-h4', x: 75, y: 78, correctLabel: 'Copper' },
      ],
      labels: [
        'Iron',
        'Steel',
        'Aluminium',
        'Copper',
        'Plastic',
        'Wood',
        'Gold',
      ],
      xpValue: 15,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Iron and steel go on the left (magnetic). Aluminium and copper are metals but go on the right.',
    },
    {
      id: 'mag-q11',
      type: 'drag-order',
      stem: 'A pupil holds a magnet 5 cm away from a paper clip resting on a desk. (Gravity is pulling the clip down onto the desk all along.) They slowly slide the magnet closer. Order what happens, from earliest to latest.',
      tier: 'confident',
      items: [
        'The paper clip jumps and sticks to the magnet.',
        'The pupil notices a small pull on the paper clip; it twitches.',
        'The pupil holds the magnet at 5 cm; the paper clip is still.',
        'The paper clip starts to slide along the desk toward the magnet.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
      misconceptionId: 'mag-mis-magnetic-vs-gravity',
      hint: 'The pull grows as the magnet gets closer; sticking is the last step. Gravity acts the same way throughout.',
    },
    {
      id: 'mag-q12',
      type: 'multiple-choice',
      stem: 'What does a magnetic field line tell you?',
      tier: 'confident',
      options: [
        'The temperature of the magnet at that point.',
        'The mass of the magnet at that point.',
        'The direction the N pole of a small test compass would point at that point.',
        'The colour of the magnet.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Field lines point the way a compass N pole would settle.',
    },
    {
      id: 'mag-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a compass needle points roughly north on a Lake District walk.',
      tier: 'confident',
      steps: [
        'Recall that Earth itself behaves like a giant bar magnet.',
        'A compass is a tiny bar magnet on a pivot, free to rotate.',
        null,
        'Note that an N pole is attracted to a S pole, so the compass arrow N points to wherever Earth\'s magnetic S pole is.',
        'State the result: the compass arrow N points roughly toward geographic North (where Earth\'s magnetic S pole sits).',
      ],
      missingStepIndex: 2,
      correctStep:
        'The compass needle lines up with Earth\'s magnetic field, so its N pole points along the local field direction.',
      xpValue: 15,
      misconceptionId: 'mag-mis-compass-cause',
      hint: 'The compass is a tiny bar magnet. What does any small bar magnet do when placed in another magnet\'s field?',
    },
    {
      id: 'mag-q14',
      type: 'numeric-entry',
      stem: 'A pupil tests 10 objects from a school tray with a bar magnet. They find 4 objects stick to the magnet (an iron nail, a steel paper clip, a steel screw, and a small steel washer). The other 6 do not. How many objects are non-magnetic?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'objects',
      xpValue: 10,
      hint: '10 in total, 4 stick. Subtract.',
    },
    {
      id: 'mag-q15',
      type: 'data-extraction',
      stem: 'A Year 7 lab table is headed "Object: sticks to magnet?" and lists eight rows: "iron nail: yes; steel paper clip: yes; aluminium ring-pull: no; copper coin: no; plastic ruler: no; nickel coin: yes; steel washer: yes; gold ring: no." How many of the eight objects are magnetic?',
      tier: 'challenge',
      dataSource:
        'iron nail: yes. steel paper clip: yes. aluminium ring-pull: no. copper coin: no. plastic ruler: no. nickel coin: yes. steel washer: yes. gold ring: no.',
      correctAnswer: '4',
      xpValue: 20,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'Count the rows where the second column says "yes".',
    },
    {
      id: 'mag-q16',
      type: 'multiple-choice',
      stem: 'A Year 7 in Edinburgh tries to use a fridge magnet to pick up a 2p coin (made of copper-plated steel) and a 1p coin (also copper-plated steel). What happens?',
      tier: 'challenge',
      options: [
        'Neither sticks, because copper is not magnetic.',
        'Only the 2p sticks, because larger coins are more magnetic.',
        'Both repel the magnet, because coins push magnets away.',
        'Both stick, because the steel core is magnetic; the copper coating is too thin to block the magnet.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'mag-mis-all-metals',
      hint: 'What is the inside of the coin made of?',
    },
    {
      id: 'mag-q17',
      type: 'multiple-choice',
      stem: 'A pupil sketches the field lines round a bar magnet. Which sketch is wrong, and why?',
      tier: 'challenge',
      options: [
        'Loops from N round to S, closer together near the poles. (Correct picture.)',
        'Straight rays out of both ends, like sunlight from a star. (Wrong: field lines round a bar magnet are loops, not straight rays.)',
        'Loops from S round to N, closer together near the poles. (Wrong direction: field lines outside the magnet go N to S, not S to N.)',
        'Both 2 and 3 are wrong sketches.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'mag-mis-line-direction',
      hint: 'Field lines round a bar magnet are loops, and they go N to S outside.',
    },
    {
      id: 'mag-q18',
      type: 'numeric-entry',
      stem: 'A teacher has 8 bar magnets in a tray and a small N-pole sticker on the right end of each. The pupil lays them in a row, all with the sticker on the right. As they push them together end to end, how many of the 7 gaps between adjacent magnets will repel?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'gaps',
      xpValue: 20,
      hint: 'Each gap has the right end of one magnet (N) facing the left end of the next (S). Like poles, or unlike?',
    },
    {
      id: 'mag-q19',
      type: 'free-text',
      stem: 'A Year 7 in a Sheffield lab is asked to plot the magnetic field round a bar magnet using a small plotting compass. In two or three sentences, describe what they should do and what shape they expect the field lines to make.',
      tier: 'challenge',
      sampleAnswer:
        'They should put the bar magnet flat on a sheet of paper, place the compass near one end, and draw a small arrow on the paper showing which way the compass N points. They move the compass to a new spot just past the arrow, and repeat, so the arrows join up into a smooth line. The expected shape is a set of loops that come out of the N pole, curve round, and go back into the S pole, with the lines closer together near the poles.',
      keywords: ['compass', 'arrow', 'loops', 'N pole', 'S pole', 'closer'],
      xpValue: 20,
      hint: 'Compass + arrow + loops from N to S; mention that lines crowd at the poles.',
    },
    {
      id: 'mag-q20',
      type: 'multiple-choice',
      stem: 'Which two facts must a Year 7 explanation of "why a compass works on a Lake District walk" include?',
      tier: 'challenge',
      options: [
        'Compass needles are heavy on the N end; the Sun lines them up.',
        'Earth behaves like a giant magnet; a compass is a tiny bar magnet that lines up with Earth\'s magnetic field.',
        'Compass needles are made of plastic; gravity points north.',
        'Static electricity in the air pulls the needle; the wind helps.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'mag-mis-compass-cause',
      hint: 'Pick the option that uses both "Earth as a magnet" and "compass as a tiny magnet".',
    },
    {
      id: 'mag-q21',
      type: 'numeric-entry',
      stem: 'A bar magnet has 2 poles. A Year 7 lays out 6 identical bar magnets on a tray. How many magnetic poles are on the tray in total?',
      tier: 'core',
      correctAnswer: 12,
      unit: 'poles',
      xpValue: 10,
      hint: 'Every bar magnet has 1 N pole and 1 S pole, so 2 poles per magnet.',
    },
    {
      id: 'mag-q22',
      type: 'numeric-entry',
      stem: 'A pupil sketches the magnetic field round a bar magnet. They draw 3 loops above the magnet and 3 loops below, all going from N to S outside the magnet. To the nearest whole number, how many field-line arrowheads should they add (one arrowhead per loop)?',
      tier: 'confident',
      correctAnswer: 6,
      unit: 'arrowheads',
      xpValue: 15,
      misconceptionId: 'mag-mis-line-direction',
      hint: '3 loops above + 3 loops below = total loops. One arrowhead per loop.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates believing all metals are magnetic
    {
      id: 'mag-mis-all-metals',
      description:
        'Believing every metal is magnetic, often because magnets stick to "metal" fridge doors and tools.',
      triggerAnswer: 'all-metals-magnetic',
      correction:
        'Only iron, steel, nickel, and cobalt are magnetic. Most other metals (aluminium, copper, gold, silver, lead) are not.',
      reExplanation:
        'A useful test: a magnet sticks to an iron nail and a steel paper clip; it does not stick to an aluminium drink can or a copper wire. The "metal" door of most fridges is steel, which is mostly iron, which is why fridge magnets stick.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on the like-poles rule
    {
      id: 'mag-mis-pole-rule',
      description:
        'Mixing up the rule for poles, often saying "stronger poles always attract" or that two N poles snap together.',
      triggerAnswer: 'pole-rule',
      correction:
        'Like poles repel and unlike poles attract. Two N poles push apart, however strong they are. To get attraction you need an N facing an S.',
      reExplanation:
        'A simple lab check: hold one magnet still and push another toward it slowly. If the gap pushes back, the facing poles are alike (both N or both S). Flip one magnet round and the gap pulls together: now the poles are unlike.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates drawing field lines from S to N outside the magnet
    {
      id: 'mag-mis-line-direction',
      description:
        'Drawing magnetic field lines pointing from S to N outside the magnet, or drawing them as straight rays rather than as loops from N round to S.',
      triggerAnswer: 'line-direction',
      correction:
        'Outside a bar magnet, field lines point from N to S. The lines are loops, not straight rays. Inside the magnet they continue from S back to N to close the loop.',
      reExplanation:
        'A useful rule: a field line shows the direction the N pole of a tiny test compass would point. A test compass placed near the N end of a bar magnet has its own N pushed away, so it points along the line outward from N. Following the compass round the magnet traces a loop that ends at S.',
    },
    // Source: IOPSpark "Magnetism" guidance on uniform-field misreading
    {
      id: 'mag-mis-field-uniform',
      description:
        'Believing the magnetic field round a bar magnet is the same strength everywhere, or that it is strongest at the centre.',
      triggerAnswer: 'field-uniform',
      correction:
        'The field round a bar magnet is strongest at the poles, where field lines are closest together, and weaker further out. Inside the magnet the field is also strong, but Year 7 focuses on the field outside.',
      reExplanation:
        'A practical check: a paper clip held near the end of a bar magnet feels a strong pull; the same paper clip held near the middle of the same magnet feels almost nothing. The crowding of field lines near each pole shows the same picture.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates explaining the compass with non-magnetic causes
    {
      id: 'mag-mis-compass-cause',
      description:
        'Believing the compass needle points north because of gravity, the Sun, the wind, or a heavier N end, rather than because Earth\'s magnetic field acts on the magnetised needle.',
      triggerAnswer: 'compass-cause',
      correction:
        'Earth behaves like a giant bar magnet. A compass needle is a small bar magnet on a pivot, so it rotates until it lines up with Earth\'s magnetic field. Gravity, sunlight, and wind do not pick a compass direction.',
      reExplanation:
        'A quick check: place a compass next to a strong bar magnet. The compass swings to line up with the bar magnet\'s field, ignoring gravity, the Sun, and the wind. The same effect, just much weaker, happens with Earth\'s field.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on magnetic vs gravitational force
    {
      id: 'mag-mis-magnetic-vs-gravity',
      description:
        'Confusing magnetic attraction with gravity, so saying things like "a magnet pulls a paper clip because of gravity" or "all heavy objects are magnetic".',
      triggerAnswer: 'magnetic-vs-gravity',
      correction:
        'Magnetic forces only act on magnetic materials (iron, steel, nickel, cobalt). Gravity acts on everything that has mass, but it pulls toward the centre of Earth, not toward a small magnet.',
      reExplanation:
        'A test: hold a paper clip and a plastic clip side by side. Both fall under gravity at the same rate when dropped. Bring a magnet near and only the paper clip jumps sideways toward the magnet. Magnetic and gravitational forces are different things, with different rules.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismElectromagnets: SkillNode = {
  id: 'physics-magnetism-electromagnets',
  title: 'Electromagnets',
  description:
    'An electromagnet is a coil of wire (a solenoid) with an electric current flowing through it. The current makes the coil act like a magnet. Adding an iron core inside the coil makes the magnet much stronger. The key advantage of an electromagnet over a permanent bar magnet is that it can be switched on and off: open the switch, the current stops, and the iron core stops being a magnet straight away. Electromagnets are made stronger by adding more turns of wire and by using a bigger current. UK contexts include the giant electromagnet on a scrapyard crane that lifts and drops cars by switching the current, the small coil inside an electric bell, and the very large superconducting electromagnets in an MRI scanner at a UK hospital. Year 7 keeps it qualitative; the motor effect, Faraday\'s law of induction, and Lenz\'s law are GCSE Higher and A-Level territory.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-fields'],
  curriculum: {
    ks3Objective:
      'The magnetic effect of a current, electromagnets, D.C. motors (principles only).',
    awardingBodies: {
      aqa: '4.7.2 The motor effect; electromagnetism (GCSE Physics 8463; KS3 stops short of induction)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.5-7.13 electromagnets and the motor effect (GCSE Physics 1PH0)',
      ocr: 'P6.2 The motor effect; electromagnets and solenoids (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'em-scene-build',
      title: 'How an Electromagnet is Built: Coil, Core, Current',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the parts of an electromagnet and what happens when the current is switched off.',
      data: {
        viewBox: '0 0 800 400',
        svg: SOLENOID_SVG,
        hotspots: [
          {
            id: 'em-b-coil',
            x: 50,
            y: 50,
            label: 'Coil of wire (a solenoid)',
            description:
              'A long wire is wound into many loops, called a coil or a solenoid. When current flows along the wire, each loop adds its own small magnetic field; together the loops give the coil two magnetic poles, an N at one end and an S at the other.',
          },
          {
            id: 'em-b-core',
            x: 50,
            y: 65,
            label: 'Iron core inside the coil',
            description:
              'A bar of iron pushed inside the coil greatly boosts the magnetic field. The iron itself becomes magnetic while the coil is on. This is why most school electromagnets and the big crane magnets all have an iron core.',
          },
          {
            id: 'em-b-battery',
            x: 15,
            y: 30,
            label: 'Battery and switch',
            description:
              'A battery pushes current round the circuit; a switch breaks or completes the circuit. The whole loop is what makes the coil work as a magnet.',
          },
          {
            id: 'em-b-switch',
            x: 87,
            y: 50,
            label: 'Switch off and the magnet stops',
            description:
              'Open the switch, the current stops, and the iron core stops being a magnet straight away. A permanent bar magnet would still be magnetic; the electromagnet is on only while current flows. That is the key advantage.',
          },
        ],
      },
    },
    {
      id: 'em-scene-stronger',
      title: 'What Makes an Electromagnet Stronger',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the three ways to make an electromagnet stronger.',
      data: {
        viewBox: '0 0 800 400',
        svg: ELECTROMAGNET_STRENGTH_SVG,
        hotspots: [
          {
            id: 'em-s-turns',
            x: 50,
            y: 25,
            label: 'More turns of wire',
            description:
              'Wind the wire into more loops round the iron core. Each loop adds its own magnetic field. A coil with 20 turns is stronger than the same wire with 5 turns, all else being equal.',
          },
          {
            id: 'em-s-current',
            x: 50,
            y: 45,
            label: 'Bigger current',
            description:
              'Use a battery that pushes a bigger current through the same coil and the magnetic field grows. School circuits keep this safe by limiting current; do not short-circuit the battery.',
          },
          {
            id: 'em-s-core',
            x: 50,
            y: 60,
            label: 'Add an iron core',
            description:
              'Slide a soft iron rod inside the coil. The iron itself becomes magnetic while the coil is on, and it adds a great deal of pull. Without the iron, the coil is much weaker.',
          },
          {
            id: 'em-s-switch',
            x: 50,
            y: 85,
            label: 'Switching is the key advantage',
            description:
              'Whatever you do to make it stronger, the electromagnet is still on only while current flows. That is why electromagnets are chosen wherever you want to be able to "let go" of magnetic objects on demand.',
          },
        ],
      },
    },
    {
      id: 'em-scene-uk',
      title: 'UK Uses: Scrapyard Crane and Electric Bell',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how UK industry and household items use the on-off advantage of an electromagnet.',
      data: {
        viewBox: '0 0 800 400',
        svg: SCRAPYARD_CRANE_SVG,
        hotspots: [
          {
            id: 'em-u-crane',
            x: 24,
            y: 55,
            label: 'Scrapyard crane',
            description:
              'A scrapyard near Sheffield uses a large electromagnet on a crane to lift cars and dump them in a press. The driver switches the current on to grab a car, lifts it across the yard, and switches the current off to drop it. A permanent magnet could not let go.',
          },
          {
            id: 'em-u-bell',
            x: 74,
            y: 55,
            label: 'Electric bell at a UK door',
            description:
              'An old-style electric door bell has a small coil that pulls a metal striker into a bell to make it ring. The striker breaks its own circuit as it moves, the magnet switches off, and a spring pulls it back; the cycle repeats so the bell rings continuously while the button is held.',
          },
          {
            id: 'em-u-mri',
            x: 50,
            y: 90,
            label: 'MRI scanner at a UK hospital',
            description:
              'A medical MRI machine in NHS hospitals uses very powerful electromagnets to image inside the body. The big advantage is the same: switch off the current and the field is gone, which is essential for safety and maintenance. Year 7 only needs the on-off idea.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'em-worked-1',
      title: 'Why a scrapyard crane uses an electromagnet, not a permanent magnet',
      steps: [
        {
          explanation:
            'Set the scene. A scrapyard near Sheffield needs a way to lift a scrap car off the ground, swing it across the yard, and drop it into a press.',
        },
        {
          explanation:
            'Try a permanent magnet. A very strong permanent bar magnet could lift the car. But the magnet is always magnetic, so it could never let go. The car would stay stuck to the magnet.',
        },
        {
          explanation:
            'Switch to an electromagnet. A large coil of wire with an iron core, fed by a thick cable from a power supply, becomes magnetic only while current flows.',
          maths: 'switch on → magnetic; switch off → not magnetic',
        },
        {
          explanation:
            'Use the switch. The crane driver closes the switch, the magnet picks up the car. They drive across the yard. They open the switch over the press, and the car drops because the iron core stops being a magnet straight away.',
        },
        {
          explanation:
            'State the key advantage. The electromagnet works because it can be switched off. That is the property a permanent magnet does not have, and it is why every scrapyard crane uses an electromagnet.',
        },
      ],
    },
    {
      id: 'em-worked-2',
      title: 'Three ways to make a school electromagnet stronger',
      steps: [
        {
          explanation:
            'Set the scene. A Year 7 in a Manchester lab builds a small electromagnet from a battery, a length of insulated wire, and a 6 cm iron nail. They wind 10 turns and find it picks up 3 paper clips.',
        },
        {
          explanation:
            'Idea 1: more turns of wire. They unwind, and rewind the wire as 30 turns of the same wire round the same nail. Each turn adds its own field. The new electromagnet picks up about 8 paper clips.',
          maths: '10 turns → ~3 clips; 30 turns → ~8 clips',
        },
        {
          explanation:
            'Idea 2: bigger current. They swap one battery for two in series (still respecting the lab safety limit). The bigger current makes the same coil and core stronger; the new electromagnet picks up more clips again.',
        },
        {
          explanation:
            'Idea 3: keep the iron core. They try the same coil round a plastic ruler (no iron core). The coil is much weaker; the iron makes a real difference.',
          maths: 'no iron core → much weaker',
        },
        {
          explanation:
            'State the result. More turns, bigger current, and an iron core all make an electromagnet stronger. All three are tested in the same way: count the paper clips, then change one variable, then count again.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'em-q1',
      type: 'multiple-choice',
      stem: 'What is the key advantage of an electromagnet over a permanent bar magnet?',
      tier: 'core',
      options: [
        'It can be made bigger.',
        'It is always cheaper.',
        'It can be switched on and off; the magnet stops working when the current is off.',
        'It is always stronger.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'em-mis-key-advantage',
      hint: 'Think about why a scrapyard crane uses an electromagnet instead of a strong bar magnet.',
    },
    {
      id: 'em-q2',
      type: 'multiple-choice',
      stem: 'What are the three main parts of a typical school electromagnet?',
      tier: 'core',
      options: [
        'A coil of wire, an iron core, and a battery (with a switch).',
        'A bar magnet, a compass, and a torch.',
        'A coil of wire, an aluminium core, and a battery.',
        'A copper plate, a fridge magnet, and a switch.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Coil + core + current source.',
    },
    {
      id: 'em-q3',
      type: 'multiple-choice',
      stem: 'What is the role of the iron core inside an electromagnet?',
      tier: 'core',
      options: [
        'It carries the current along the coil.',
        'It makes the magnet much stronger while the coil is on.',
        'It stores the magnetism after the current is switched off.',
        'It blocks the magnetic field.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'em-mis-core-keeps',
      hint: 'It is not just the coil; the iron itself becomes magnetic while the current is on.',
    },
    {
      id: 'em-q4',
      type: 'multiple-choice',
      stem: 'A pupil winds an electromagnet with 10 turns of wire and finds it picks up 3 paper clips. They keep the same wire and battery but rewind it as 30 turns. What happens?',
      tier: 'core',
      options: [
        'It picks up fewer paper clips, because more turns weakens the coil.',
        'It picks up the same number, because the wire is the same.',
        'It picks up more paper clips, because more turns make the magnet stronger.',
        'The wire melts.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'em-mis-fewer-turns',
      hint: 'More turns = more loops adding their fields.',
    },
    {
      id: 'em-q5',
      type: 'multiple-choice',
      stem: 'A Year 7 swaps one battery for two batteries in series in their electromagnet circuit (still respecting the lab safety limit). How does the magnet change?',
      tier: 'core',
      options: [
        'It gets stronger, because the bigger current means a stronger field.',
        'It gets weaker, because two batteries fight each other.',
        'It stays the same, because the coil decides the strength alone.',
        'It stops working, because the wire blocks the second battery.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Bigger current in the same coil = stronger field.',
    },
    {
      id: 'em-q6',
      type: 'multiple-choice',
      stem: 'A scrapyard near Sheffield needs to pick up a car, swing it across the yard, and drop it into a crusher. Why is an electromagnet the right tool?',
      tier: 'core',
      options: [
        'A permanent magnet would never lift a car.',
        'An electromagnet can be switched off to drop the car; a permanent magnet would never let go.',
        'Permanent magnets do not work outdoors.',
        'Electromagnets are always smaller and cheaper.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'em-mis-key-advantage',
      hint: 'Think about the moment the driver wants to release the car.',
    },
    {
      id: 'em-q7',
      type: 'spot-misconception',
      stem: 'Aisha writes, "Once you switch the current on through the coil, the iron core becomes a permanent magnet. You can take it out and use it as a bar magnet, even after switching off." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is right. The current magnetises the iron core for ever.',
          isMisconception: true,
        },
        {
          text: 'Aisha is not right. Soft iron loses almost all its magnetism the moment the current stops. That is exactly why electromagnets are useful: switch off, and the magnet is gone.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'em-mis-permanent-when-on',
    },
    {
      id: 'em-q8',
      type: 'spot-misconception',
      stem: 'Theo writes, "An electromagnet is better than a permanent magnet because it is always stronger." Is the method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'Theo is right. Strength is the main reason to choose an electromagnet.',
          isMisconception: true,
        },
        {
          text: 'Theo is not right. The main reason to choose an electromagnet is that you can switch it on and off. A small coil can be much weaker than a strong bar magnet; a big crane coil can be much stronger. Strength is not the key idea.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'em-mis-key-advantage',
    },
    {
      id: 'em-q9',
      type: 'drag-order',
      stem: 'Order these steps for a scrapyard crane to move a scrap car, from earliest to latest.',
      tier: 'confident',
      items: [
        'The driver swings the crane across to the press.',
        'The driver lowers the electromagnet over the car.',
        'The driver opens the switch; the current stops; the car drops into the press.',
        'The driver closes the switch; current flows; the electromagnet picks up the car.',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
      hint: 'You lower the magnet first, then turn it on, then move, then turn it off to release.',
    },
    {
      id: 'em-q10',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is explaining why a scrapyard crane uses an electromagnet rather than a strong bar magnet.',
      tier: 'confident',
      steps: [
        'A scrap car must be picked up, swung across the yard, and dropped into a press.',
        'A strong bar magnet could pick up the car, but it would never let go on its own.',
        null,
        'When the driver wants to drop the car, they open the switch; the current stops, the iron core stops being a magnet, and the car drops.',
        'State the result: the crane uses an electromagnet because it can be switched off; that is what a permanent magnet cannot do.',
      ],
      missingStepIndex: 2,
      correctStep:
        'An electromagnet is only magnetic while current flows. The driver closes the switch to pick the car up and the coil + iron core become a strong magnet.',
      xpValue: 15,
      misconceptionId: 'em-mis-key-advantage',
    },
    {
      id: 'em-q12',
      type: 'numeric-entry',
      stem: 'A Year 7 builds an electromagnet with 20 turns of wire and one battery and lifts 4 paper clips. Their teacher says doubling the number of turns roughly doubles the lifting power. To the nearest whole number, how many paper clips might they expect to lift with 40 turns?',
      tier: 'confident',
      correctAnswer: 8,
      unit: 'paper clips',
      tolerance: 1,
      xpValue: 15,
      hint: 'Roughly double of 4.',
    },
    {
      id: 'em-q13',
      type: 'numeric-entry',
      stem: 'A school electromagnet needs at least 0.5 A of current to pick up a paper clip. A pupil reads on a meter that the actual current is 1.5 A. By how many amps does the actual current exceed the minimum?',
      tier: 'confident',
      correctAnswer: 1,
      unit: 'amps',
      tolerance: 0.05,
      xpValue: 15,
      hint: '1.5 - 0.5.',
    },
    {
      id: 'em-q14',
      type: 'data-extraction',
      stem: 'A school lab table has the heading "turns of wire: paper clips lifted" and lists: "10 turns: 3; 20 turns: 6; 30 turns: 9; 40 turns: 12." How many paper clips does the 30-turn coil lift?',
      tier: 'confident',
      dataSource:
        '10 turns: 3 paper clips. 20 turns: 6 paper clips. 30 turns: 9 paper clips. 40 turns: 12 paper clips.',
      correctAnswer: '9',
      xpValue: 15,
      hint: 'Read the row for 30 turns.',
    },
    {
      id: 'em-q15',
      type: 'multiple-choice',
      stem: 'Which sentence about the iron core in a school electromagnet is correct at Year 7 level?',
      tier: 'confident',
      options: [
        'The iron core stores the magnetism so the magnet keeps working after the switch is opened.',
        'The iron core has no role; only the coil matters.',
        'The iron core itself becomes magnetic while current flows in the coil, making the electromagnet much stronger; it stops being magnetic when the current stops.',
        'The iron core only works if it is heated first.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'em-mis-core-keeps',
      hint: 'Soft iron magnetises while the coil is on, and demagnetises when the coil is off.',
    },
    {
      id: 'em-q16',
      type: 'numeric-entry',
      stem: 'A Year 7 builds three coils round the same nail: 5 turns lifts 1 paper clip, 15 turns lifts 3 paper clips, 25 turns lifts 5 paper clips. The pattern is that paper clips lifted is one-fifth of the number of turns. To the nearest whole number, how many paper clips would 50 turns lift?',
      tier: 'challenge',
      correctAnswer: 10,
      unit: 'paper clips',
      tolerance: 1,
      xpValue: 20,
      hint: '50 ÷ 5 = the answer.',
    },
    {
      id: 'em-q17',
      type: 'multiple-choice',
      stem: 'A UK hospital MRI scanner uses a very powerful electromagnet. Why is "switchable" still the key advantage in this setting?',
      tier: 'challenge',
      options: [
        'A permanent magnet would never be strong enough.',
        'Permanent magnets cost more to install.',
        'Permanent magnets do not work in hospitals.',
        'A permanent magnet that strong could not be switched off; an electromagnet can, which is essential for safety, fitting patients, and maintenance.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'em-mis-key-advantage',
      hint: 'Strength is one factor; the on-off ability is the key one.',
    },
    {
      id: 'em-q18',
      type: 'multiple-choice',
      stem: 'A pupil claims, "An electromagnet works on a copper rod inside the coil just as well as on an iron rod, because copper is a metal." Is the claim right?',
      tier: 'challenge',
      options: [
        'Yes; any metal core works equally well.',
        'Yes; copper is better than iron.',
        'No; copper rods explode in coils.',
        'No; copper is a metal, but copper is not magnetic. The coil round a copper rod is much weaker than the same coil round an iron rod, because the iron itself becomes magnetic while the coil is on.',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'em-mis-any-core',
      hint: 'The "all metals are magnetic" trap from the previous node also applies inside the coil.',
    },
    {
      id: 'em-q19',
      type: 'free-text',
      stem: 'A pupil designs a Year 7 fair test to find out whether more turns make a stronger electromagnet. In two or three sentences, describe the test, the variable they should change, and what they keep the same.',
      tier: 'challenge',
      sampleAnswer:
        'They build an electromagnet from an iron nail, a battery, and a length of wire, and count how many paper clips it lifts with 10 turns. They then unwind and rewind the same wire as 20 turns and 30 turns round the same nail, with the same battery, and count again. The variable they change is the number of turns; everything else (battery, wire length, iron nail, and the way they count clips) stays the same.',
      keywords: ['turns', 'paper clips', 'same battery', 'same nail', 'fair test'],
      xpValue: 20,
      hint: 'Change one thing (turns), keep the rest the same.',
    },
    {
      id: 'em-q20',
      type: 'multiple-choice',
      stem: 'Which two facts together best explain why an electric door bell rings continuously while the button is held?',
      tier: 'challenge',
      options: [
        'The button glows; the bell is heavy.',
        'A coil pulls a striker into the bell when current flows; the moving striker breaks the circuit, the coil switches off, a spring pulls the striker back, and the cycle repeats.',
        'The bell rings because the air pressure changes.',
        'A permanent magnet inside the bell vibrates when you press the button.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'em-mis-motor-effect',
      hint: 'The bell uses the on-off-on-off pattern of an electromagnet to make a continuous ring; this is electromagnet switching, not the motor effect.',
    },
    {
      id: 'em-q21',
      type: 'numeric-entry',
      stem: 'A scrapyard crane lifts 8 cars per hour, taking 2 minutes per car (1 minute to position and lift, 1 minute to swing across and drop). The driver counts a 6-hour shift. How many cars does the crane move in the shift?',
      tier: 'challenge',
      correctAnswer: 48,
      unit: 'cars',
      xpValue: 20,
      hint: '8 cars per hour × 6 hours.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics examiner report June 2022, Paper 2F, candidates citing strength as the main advantage of electromagnets
    {
      id: 'em-mis-key-advantage',
      description:
        'Believing the key advantage of an electromagnet is its strength, missing that the on-off switch is the property that matters in design choices.',
      triggerAnswer: 'key-advantage',
      correction:
        'The key advantage of an electromagnet is that it can be switched on and off. A small coil may be weaker than a strong bar magnet, but only the coil can be switched off to release a load.',
      reExplanation:
        'A useful test: ask "could a permanent magnet do this job?" A scrapyard crane needs to lift a car AND let go of it. Only an electromagnet can let go. An MRI scanner needs to be safely shut down for maintenance. Only an electromagnet can be turned off.',
    },
    // Source: CGP KS3 Physics Study Guide Common Mistake box on soft iron cores after the current stops
    {
      id: 'em-mis-core-keeps',
      description:
        'Believing the iron core stays magnetised after the current is switched off, like a permanent magnet that the coil "made".',
      triggerAnswer: 'core-keeps',
      correction:
        'A soft iron core loses almost all of its magnetism the moment the current stops. That is exactly why electromagnets are switchable; if the core stayed magnetic, you would have built a one-shot permanent magnet.',
      reExplanation:
        'Two technical words: "soft" and "hard". Soft iron magnetises easily and demagnetises just as easily; that is what is used in school and crane electromagnets. "Hard" magnetic materials, like steel, can hold their magnetism, which is how permanent bar magnets are made.',
    },
    // Source: Edexcel GCSE Physics examiner report June 2019, Paper 1PH0/1F, candidates believing more turns weakens the coil
    {
      id: 'em-mis-fewer-turns',
      description:
        'Believing more turns of wire makes an electromagnet weaker, often by reasoning that "more wire means more resistance, so less effect".',
      triggerAnswer: 'fewer-turns',
      correction:
        'For typical Year 7 coils, more turns of wire round the same iron core makes the electromagnet stronger. Each turn adds its own field to the total.',
      reExplanation:
        'A useful experiment: build a 10-turn coil round a nail, count the paper clips. Rewind to 30 turns of the same wire round the same nail, with the same battery, and count again. The 30-turn coil lifts more clips. Resistance does limit very large coils, but that is far beyond KS3.',
    },
    // Source: IOPSpark "Electromagnetism" guidance on permanent vs temporary magnetism
    {
      id: 'em-mis-permanent-when-on',
      description:
        'Calling an electromagnet a permanent magnet while the current is on, missing that "permanent" means "stays magnetic after the source is removed".',
      triggerAnswer: 'permanent-when-on',
      correction:
        'A permanent magnet stays magnetic on its own. An electromagnet is only magnetic while the current is on; the moment you switch off, it is no longer a magnet, even if it was very strong a second before.',
      reExplanation:
        'The key word is "permanent". A bar magnet sitting on a desk is magnetic with no battery, no wires, no heat: that is permanent. An electromagnet needs a circuit to do its job. The two are different categories of magnet.',
    },
    // Source: AQA GCSE Physics examiner report June 2023, Paper 2F, candidates assuming any metal core works in an electromagnet
    {
      id: 'em-mis-any-core',
      description:
        'Believing any metal core works in an electromagnet (e.g. a copper or aluminium rod), missing that only iron, steel, nickel, or cobalt becomes magnetic.',
      triggerAnswer: 'any-core',
      correction:
        'A core has to be a magnetic material to boost the field. Iron is the standard choice. Copper and aluminium are metals, but neither becomes magnetic, so a copper or aluminium core barely helps.',
      reExplanation:
        'This is the same trap as in the magnets-and-fields node: not all metals are magnetic. The coil itself still works without an iron core (it has a small field of its own), but the dramatic boost comes from a magnetic core, and iron is the cheap reliable choice.',
    },
    // Source: CGP KS3 Physics Workbook Common Mistake box on the motor effect being part of "electromagnets"
    {
      id: 'em-mis-motor-effect',
      description:
        'Treating the motor effect (a current-carrying wire in a magnetic field experiences a force) as the same idea as an electromagnet, blurring the two concepts.',
      triggerAnswer: 'motor-effect',
      correction:
        'An electromagnet uses a current to make a magnetic field. The motor effect uses a separate magnetic field acting on a current-carrying wire to make a force. KS3 covers electromagnets only; the motor effect, induction, and Lenz\'s law are GCSE+.',
      reExplanation:
        'A simple way to keep them apart: an electromagnet is the magnet itself, made by current. The motor effect is what happens when you put a wire (carrying its own current) into someone else\'s magnet. Year 7 sticks to building and switching electromagnets.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismZoneNodes = [magnetismFields, magnetismElectromagnets]

export const magnetismZone: Zone = {
  id: 'physics-magnetism',
  name: 'Magnetism',
  realm: 'mechanica',
  nodeIds: magnetismZoneNodes.map(n => n.id),
}
