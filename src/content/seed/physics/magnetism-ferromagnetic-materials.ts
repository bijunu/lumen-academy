import type { SkillNode } from '@/types/content'

const MATERIALS_SORTING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Sorting tray: which objects stick to a bar magnet?</text>

    <!-- Bar magnet at the top centre -->
    <rect x="320" y="60" width="160" height="30" />
    <rect x="320" y="60" width="80" height="30" fill="currentColor" opacity="0.3" />
    <text x="360" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="440" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="400" y="110" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Year 7 lab bar magnet</text>

    <!-- Divider -->
    <line x1="400" y1="135" x2="400" y2="380" stroke-dasharray="5,5" stroke-width="1.5" />

    <!-- Left column: ferromagnetic (attracted) -->
    <text x="200" y="150" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Ferromagnetic (attracted)</text>
    <text x="200" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">iron, steel, nickel, cobalt</text>

    <!-- paper clip -->
    <path d="M 80 200 q 0 -12 12 -12 l 30 0 q 12 0 12 12 q 0 12 -12 12 l -25 0 q -7 0 -7 -7 q 0 -7 7 -7 l 20 0" stroke-width="2" />
    <text x="160" y="208" text-anchor="start" font-size="11" stroke="none" fill="currentColor">steel paper clip</text>

    <!-- 2p coin (steel core) -->
    <circle cx="100" cy="245" r="14" />
    <text x="100" y="249" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">2p</text>
    <text x="125" y="249" text-anchor="start" font-size="11" stroke="none" fill="currentColor">UK 2p coin (post-1992 steel)</text>

    <!-- iron nail -->
    <line x1="80" y1="285" x2="140" y2="285" stroke-width="3" />
    <polygon points="140,280 152,285 140,290" fill="currentColor" stroke="none" />
    <circle cx="78" cy="285" r="4" fill="currentColor" />
    <text x="160" y="289" text-anchor="start" font-size="11" stroke="none" fill="currentColor">iron nail</text>

    <!-- cobalt drill bit -->
    <rect x="80" y="320" width="55" height="8" />
    <text x="145" y="328" text-anchor="start" font-size="11" stroke="none" fill="currentColor">cobalt drill bit</text>

    <!-- nickel coin (5p) -->
    <circle cx="100" cy="360" r="14" />
    <text x="100" y="364" text-anchor="middle" font-size="10" font-weight="700" stroke="none" fill="currentColor">5p</text>
    <text x="125" y="364" text-anchor="start" font-size="11" stroke="none" fill="currentColor">UK 5p (nickel-plated steel)</text>

    <!-- Right column: non-magnetic -->
    <text x="600" y="150" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Not magnetic</text>
    <text x="600" y="170" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">aluminium, copper, brass, gold, plastic, wood, glass</text>

    <!-- aluminium drink can -->
    <rect x="490" y="190" width="22" height="34" />
    <text x="525" y="210" text-anchor="start" font-size="11" stroke="none" fill="currentColor">aluminium drink can</text>

    <!-- copper wire -->
    <path d="M 480 245 q 10 -10 20 0 q 10 10 20 0 q 10 -10 20 0" stroke-width="2" />
    <text x="555" y="249" text-anchor="start" font-size="11" stroke="none" fill="currentColor">copper wire</text>

    <!-- gold ring -->
    <circle cx="500" cy="285" r="11" />
    <circle cx="500" cy="285" r="6" />
    <text x="525" y="289" text-anchor="start" font-size="11" stroke="none" fill="currentColor">gold ring</text>

    <!-- plastic ruler -->
    <rect x="485" y="318" width="55" height="10" />
    <text x="555" y="328" text-anchor="start" font-size="11" stroke="none" fill="currentColor">plastic ruler</text>

    <!-- wooden pencil -->
    <line x1="485" y1="360" x2="535" y2="360" stroke-width="4" />
    <polygon points="535,355 548,360 535,365" fill="currentColor" stroke="none" />
    <text x="555" y="364" text-anchor="start" font-size="11" stroke="none" fill="currentColor">wooden pencil</text>

    <!-- Bottom rule -->
    <text x="400" y="405" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">The trap: aluminium and copper are metals, but they are not magnetic.</text>
  </g>
`

const INDUCED_MAGNETISM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Induced magnetism: a chain of steel paper clips hanging from a bar magnet</text>

    <!-- Bar magnet at the top -->
    <rect x="320" y="60" width="160" height="34" />
    <rect x="320" y="60" width="80" height="34" fill="currentColor" opacity="0.3" />
    <text x="360" y="82" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="440" y="82" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="400" y="56" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">permanent bar magnet</text>

    <!-- Clip 1 directly on the magnet -->
    <path d="M 392 100 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <text x="430" y="112" text-anchor="start" font-size="10" stroke="none" fill="currentColor">clip 1: strongly held</text>

    <!-- Clip 2 hanging from clip 1 -->
    <path d="M 392 132 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <text x="430" y="144" text-anchor="start" font-size="10" stroke="none" fill="currentColor">clip 2: clip 1 has become a magnet too</text>

    <!-- Clip 3 hanging from clip 2 -->
    <path d="M 392 164 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <text x="430" y="176" text-anchor="start" font-size="10" stroke="none" fill="currentColor">clip 3: weaker pull, still hangs on</text>

    <!-- Clip 4 hanging -->
    <path d="M 392 196 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <text x="430" y="208" text-anchor="start" font-size="10" stroke="none" fill="currentColor">clip 4: weaker still</text>

    <!-- Fading clip 5 (falls off) -->
    <path d="M 392 232 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="1.5" stroke-dasharray="3,2" />
    <text x="430" y="244" text-anchor="start" font-size="10" stroke="none" fill="currentColor">clip 5: too far, falls away</text>

    <!-- Right side: what happens when magnet removed -->
    <line x1="120" y1="280" x2="680" y2="280" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="305" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Lift the bar magnet away</text>

    <!-- Pile of fallen clips -->
    <path d="M 320 360 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <path d="M 360 365 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <path d="M 405 358 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />
    <path d="M 445 366 q 0 -4 4 -4 l 16 0 q 4 0 4 4 q 0 4 -4 4 l -12 0 q -3 0 -3 3 q 0 3 3 3 l 10 0" stroke-width="2" />

    <text x="400" y="395" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">The clips lose most of their magnetism and fall apart.</text>
    <text x="400" y="412" text-anchor="middle" font-size="12" font-style="italic" stroke="none" fill="currentColor">Induced magnetism is temporary. Steel keeps a little; soft iron loses nearly all of it.</text>
  </g>
`

const PERMANENT_VS_INDUCED_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Permanent magnets vs induced magnets</text>

    <!-- Divider -->
    <line x1="400" y1="55" x2="400" y2="380" stroke-dasharray="5,5" stroke-width="1.5" />

    <!-- Left: Permanent magnet -->
    <text x="200" y="75" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Permanent magnet</text>
    <text x="200" y="95" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Keeps its field on its own</text>

    <!-- Bar magnet -->
    <rect x="120" y="120" width="160" height="34" />
    <rect x="120" y="120" width="80" height="34" fill="currentColor" opacity="0.3" />
    <text x="160" y="142" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="240" y="142" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="200" y="175" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">steel bar magnet</text>

    <!-- Fridge magnet sketch -->
    <rect x="150" y="200" width="100" height="60" rx="6" />
    <rect x="150" y="200" width="100" height="20" fill="currentColor" opacity="0.3" />
    <text x="200" y="216" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">FRIDGE</text>
    <text x="200" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">photo</text>
    <text x="200" y="280" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">fridge magnet</text>

    <!-- Properties -->
    <text x="200" y="315" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- field always on</text>
    <text x="200" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- usually made of steel</text>
    <text x="200" y="355" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- example: fridge magnet</text>

    <!-- Right: Induced magnet -->
    <text x="600" y="75" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Induced (temporary) magnet</text>
    <text x="600" y="95" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Only magnetic while a permanent magnet is close</text>

    <!-- Bar magnet -->
    <rect x="430" y="120" width="100" height="28" />
    <rect x="430" y="120" width="50" height="28" fill="currentColor" opacity="0.3" />
    <text x="455" y="140" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="505" y="140" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">S</text>
    <text x="480" y="170" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">permanent magnet</text>

    <!-- Paper clip attached -->
    <path d="M 540 130 q 0 -4 4 -4 l 24 0 q 4 0 4 4 q 0 4 -4 4 l -20 0 q -3 0 -3 3 q 0 3 3 3 l 18 0" stroke-width="2" />
    <text x="615" y="138" text-anchor="start" font-size="11" stroke="none" fill="currentColor">steel clip: induced</text>

    <!-- Arrow showing removal -->
    <line x1="450" y1="195" x2="500" y2="195" stroke-width="2" />
    <polygon points="494,189 506,195 494,201" fill="currentColor" stroke="none" />
    <text x="550" y="200" text-anchor="start" font-size="11" stroke="none" fill="currentColor">remove the magnet</text>

    <!-- After removal: clip alone, no longer magnetic -->
    <path d="M 510 230 q 0 -4 4 -4 l 24 0 q 4 0 4 4 q 0 4 -4 4 l -20 0 q -3 0 -3 3 q 0 3 3 3 l 18 0" stroke-width="2" stroke-dasharray="3,2" />
    <text x="600" y="238" text-anchor="start" font-size="11" stroke="none" fill="currentColor">clip alone: not magnetic</text>

    <!-- Properties -->
    <text x="600" y="315" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- field switches off when source goes</text>
    <text x="600" y="335" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- soft iron loses it almost completely</text>
    <text x="600" y="355" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">- example: paper clip on a bar magnet</text>

    <text x="400" y="405" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Steel makes permanent magnets; soft iron is used inside electromagnet cores.</text>
  </g>
`

export const magnetismFerromagneticMaterials: SkillNode = {
  id: 'physics-magnetism-ferromagnetic-materials',
  title: 'Ferromagnetic Materials',
  description:
    'Only a small set of metals are strongly magnetic. These ferromagnetic materials are iron, steel, nickel and cobalt. Most other metals (aluminium, copper, brass, gold, silver) and every non-metal (plastic, wood, glass, paper) are not magnetic. A common Year 7 trap is to assume that anything metallic must stick to a magnet; an aluminium drink can and a copper wire both show that this is wrong. Permanent magnets, such as a fridge magnet or a steel bar magnet, keep their field even when nothing is nearby. Induced (temporary) magnets are pieces of ferromagnetic material that become magnetic only while a permanent magnet is close: a steel paper clip clinging to a bar magnet can then pick up a second clip, and so on down a short chain. Lift the bar magnet away and the chain falls apart. Steel holds the induced field a little longer than soft iron, which is why steel makes permanent magnets and soft iron makes the cores of electromagnets that need to switch off sharply. By the end of this node, you can sort common UK objects into magnetic and non-magnetic groups and explain induced magnetism using the paper-clip chain.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-fields'],
  curriculum: {
    ks3Objective:
      'Magnetic poles, attraction and repulsion; sorting materials by whether they are attracted to a magnet, including iron, steel, nickel and cobalt versus aluminium, copper, brass and plastic.',
    awardingBodies: {
      aqa: '4.7.1.1 Poles of a magnet; identifying ferromagnetic materials and induced magnetism in iron, steel, nickel and cobalt (GCSE Physics 8463)',
      edexcel: 'Topic 7 Magnetism and the motor effect, 7.1-7.2 permanent and induced magnets, magnetic materials (GCSE Physics 1PH0)',
      ocr: 'P6.1 Magnets and magnetic fields; ferromagnetic versus non-ferromagnetic materials (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.1 (poles of a magnet; identifying ferromagnetic materials in iron, steel, nickel and cobalt), accessed 2026-05-12; sorting-tray practical from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfm-sorting-tray',
      title: 'Sorting common UK objects by whether a magnet attracts them',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why an object is or is not pulled by the lab bar magnet.',
      data: {
        viewBox: '0 0 800 420',
        svg: MATERIALS_SORTING_SVG,
        hotspots: [
          {
            id: 'pmfm-sort-clip',
            x: 20,
            y: 49,
            label: 'Steel paper clip: magnetic',
            description:
              'A standard UK office paper clip is made from steel, which contains iron. Steel is ferromagnetic, so the clip is pulled towards either pole of a bar magnet and sticks.',
          },
          {
            id: 'pmfm-sort-2p',
            x: 13,
            y: 59,
            label: 'UK 2p coin (post-1992): magnetic',
            description:
              'Since 1992, UK 1p and 2p coins have been copper-plated steel rather than solid bronze. The steel core is ferromagnetic, so a bar magnet will pick up a modern 2p. Older bronze coins do not stick.',
          },
          {
            id: 'pmfm-sort-iron',
            x: 13,
            y: 68,
            label: 'Iron nail: magnetic',
            description:
              'Iron is the original ferromagnetic metal. An iron nail is pulled strongly towards a bar magnet from either pole. Iron is also the most common ferromagnetic material on Earth.',
          },
          {
            id: 'pmfm-sort-cobalt',
            x: 14,
            y: 77,
            label: 'Cobalt drill bit: magnetic',
            description:
              'High-speed drill bits often contain cobalt, one of the four ferromagnetic metals (iron, steel, nickel, cobalt). The bit will stick to a bar magnet, although less strongly than pure iron.',
          },
          {
            id: 'pmfm-sort-5p',
            x: 13,
            y: 86,
            label: 'UK 5p coin: magnetic',
            description:
              'Since 2012, UK 5p and 10p coins have been nickel-plated steel. Both the nickel coating and the steel core are ferromagnetic, so a bar magnet will pick up a 5p.',
          },
          {
            id: 'pmfm-sort-can',
            x: 64,
            y: 49,
            label: 'Aluminium drink can: not magnetic',
            description:
              'A drink can is made of aluminium, which is a metal but not ferromagnetic. The can will not stick to a bar magnet. This is the most common Year 7 trap; "metal" does not mean "magnetic".',
          },
          {
            id: 'pmfm-sort-copper',
            x: 64,
            y: 59,
            label: 'Copper wire: not magnetic',
            description:
              'Copper is the metal inside most UK electrical wires. It conducts electricity superbly but is not ferromagnetic. A bar magnet will not stick to a stripped copper wire.',
          },
          {
            id: 'pmfm-sort-gold',
            x: 63,
            y: 68,
            label: 'Gold ring: not magnetic',
            description:
              'Gold is a shiny, valuable metal but it is not ferromagnetic. A genuine gold ring will not stick to a bar magnet. Some jewellers use this as a quick first check (real gold should not stick).',
          },
          {
            id: 'pmfm-sort-plastic',
            x: 64,
            y: 77,
            label: 'Plastic ruler: not magnetic',
            description:
              'Plastic is a non-metal. No non-metal is magnetic at KS3 level, so a plastic ruler is ignored completely by a bar magnet, no matter which pole you bring near.',
          },
          {
            id: 'pmfm-sort-wood',
            x: 65,
            y: 86,
            label: 'Wooden pencil: not magnetic',
            description:
              'Wood, like plastic, glass and paper, is a non-metal. Bring a bar magnet near a pencil and nothing happens, even though the pencil contains graphite (a form of carbon).',
          },
          {
            id: 'pmfm-sort-rule',
            x: 50,
            y: 96,
            label: 'Year 7 rule',
            description:
              'Only iron, steel, nickel and cobalt are strongly magnetic. Every other common material in a Year 7 lab tray (aluminium, copper, brass, gold, plastic, wood, glass, paper) is not.',
          },
        ],
      },
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7 (permanent and induced magnets, magnetic materials), accessed 2026-05-12; paper-clip chain practical is a Year 7 staple, described in CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfm-induced-chain',
      title: 'Induced magnetism: the paper-clip chain',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a chain of steel clips can hang from one bar magnet, then falls apart when the magnet is lifted away.',
      data: {
        viewBox: '0 0 800 430',
        svg: INDUCED_MAGNETISM_SVG,
        hotspots: [
          {
            id: 'pmfm-induced-magnet',
            x: 50,
            y: 18,
            label: 'Permanent bar magnet',
            description:
              'A steel bar magnet keeps its magnetic field whether or not anything else is near. The clips hang from the S pole here; the same trick works at the N pole.',
          },
          {
            id: 'pmfm-induced-clip1',
            x: 60,
            y: 26,
            label: 'Clip 1: strongly induced',
            description:
              'The steel paper clip is ferromagnetic. While it touches the bar magnet, it becomes a temporary magnet itself, with its own N and S poles lined up. This is called an induced magnet.',
          },
          {
            id: 'pmfm-induced-clip2',
            x: 60,
            y: 33,
            label: 'Clip 2: induced from clip 1',
            description:
              'Clip 1 is now a magnet, so it can attract clip 2. Clip 2 also becomes an induced magnet. The chain can grow as long as the field is strong enough to support the weight of the clips below.',
          },
          {
            id: 'pmfm-induced-falloff',
            x: 60,
            y: 56,
            label: 'The field weakens down the chain',
            description:
              'Each clip down the chain feels a slightly weaker field, so the induced magnetism is weaker too. Eventually a clip cannot support the next one and the chain stops.',
          },
          {
            id: 'pmfm-induced-removed',
            x: 50,
            y: 88,
            label: 'Lift the magnet: chain falls apart',
            description:
              'Take the bar magnet away and the steel clips lose most of their magnetism. They are no longer pulled towards each other, so the chain falls into a pile. Induced magnetism is temporary.',
          },
          {
            id: 'pmfm-induced-steel-vs-iron',
            x: 50,
            y: 96,
            label: 'Soft iron loses it faster than steel',
            description:
              'Steel keeps a tiny bit of induced magnetism (it is a harder magnetic material). Soft iron loses nearly all of it the moment the magnet is removed; that is why soft iron is used as the core of an electromagnet that must switch off sharply.',
          },
        ],
      },
    },
    // Source: OCR GCSE Physics J259 specification P6.1 (magnets and magnetic fields; ferromagnetic versus non-ferromagnetic materials), accessed 2026-05-12; permanent vs induced framing from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfm-permanent-vs-induced',
      title: 'Permanent magnets keep their field; induced magnets do not',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a permanent magnet with an induced (temporary) magnet, side by side.',
      data: {
        viewBox: '0 0 800 420',
        svg: PERMANENT_VS_INDUCED_SVG,
        hotspots: [
          {
            id: 'pmfm-perm-bar',
            x: 25,
            y: 35,
            label: 'Steel bar magnet: permanent',
            description:
              'A steel bar magnet keeps its N and S poles whether or not anything is near. The field is always on. This is why a bar magnet still sticks to a fridge after being left in a drawer for a year.',
          },
          {
            id: 'pmfm-perm-fridge',
            x: 25,
            y: 56,
            label: 'Fridge magnet: permanent',
            description:
              'A UK fridge magnet contains a small ceramic or hard steel magnet glued to a card. The field is locked in: it stays on its own, with no source needed nearby.',
          },
          {
            id: 'pmfm-perm-props',
            x: 25,
            y: 82,
            label: 'Properties of a permanent magnet',
            description:
              'A permanent magnet has its field always on, is usually made of steel or a special hard magnetic alloy, and does not need any other magnet or current to work.',
          },
          {
            id: 'pmfm-ind-attached',
            x: 75,
            y: 32,
            label: 'Steel paper clip: induced while attached',
            description:
              'While the steel paper clip touches the permanent bar magnet, it lines up internally and acts as a temporary magnet itself. It can pull other clips.',
          },
          {
            id: 'pmfm-ind-removed',
            x: 75,
            y: 56,
            label: 'Clip removed: loses its field',
            description:
              'Take the permanent magnet away and the clip almost forgets. Its induced magnetism fades sharply. Soft iron loses nearly all of it; steel keeps a tiny amount.',
          },
          {
            id: 'pmfm-ind-uses',
            x: 75,
            y: 82,
            label: 'Why induced magnetism matters',
            description:
              'Induced magnetism is the basis of an electromagnet: a soft-iron core inside a coil of wire becomes strongly magnetic while current flows, then switches off sharply when the current stops. A scrapyard crane uses this to lift and drop a car.',
          },
          {
            id: 'pmfm-rule',
            x: 50,
            y: 96,
            label: 'Steel vs soft iron',
            description:
              'Steel is a hard magnetic material: once magnetised, it holds the field, so it makes good permanent magnets. Soft iron is a soft magnetic material: it magnetises sharply but also loses the field sharply, so it makes good electromagnet cores.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.1 (ferromagnetic materials: iron, steel, nickel and cobalt); KS3 wording from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfm-worked-1',
      title: 'Sorting five Year 7 lab objects into magnetic and non-magnetic',
      steps: [
        {
          explanation:
            'Set out the situation. A Year 7 pupil has a bar magnet and five objects on a tray: a steel paper clip, an aluminium drink can, a copper wire, an iron nail and a plastic ruler. They are asked to sort the objects into two groups.',
        },
        {
          explanation:
            'Recall the rule. Only iron, steel, nickel and cobalt are strongly magnetic. Every other common metal (aluminium, copper, brass, gold) and every non-metal (plastic, wood, glass) is not.',
        },
        {
          explanation:
            'Check each object against the list of ferromagnetic materials.',
          maths:
            'steel clip = steel (yes); aluminium can = aluminium (no); copper wire = copper (no); iron nail = iron (yes); plastic ruler = plastic, a non-metal (no)',
        },
        {
          explanation:
            'Test both poles of the bar magnet. A ferromagnetic object is pulled towards either pole. Confirm: the clip and the nail stick to both N and S; the other three do not move.',
        },
        {
          explanation:
            'State the answer. Magnetic group: steel paper clip and iron nail. Not magnetic: aluminium drink can, copper wire, plastic ruler. That is 2 magnetic and 3 not magnetic out of 5.',
        },
      ],
    },
    // Source: Edexcel GCSE Physics 1PH0 specification Topic 7.1-7.2 (permanent and induced magnets); paper-clip chain practical from CGP KS3 Physics Complete Revision and Practice (2022).
    {
      id: 'pmfm-worked-2',
      title: 'Predicting what happens to a paper-clip chain when the magnet is removed',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil hangs a chain of four steel paper clips from a bar magnet. Clip 1 touches the magnet; clips 2, 3 and 4 hang below in turn. They are asked what happens when the bar magnet is gently lifted away.',
        },
        {
          explanation:
            'Recall the rule. Steel is ferromagnetic. While the bar magnet is close, each clip becomes an induced magnet that holds the next one up. Induced magnetism is temporary.',
        },
        {
          explanation:
            'Predict step by step. As soon as the bar magnet is removed, the field that lined up the clips disappears. Each clip loses nearly all of its magnetism.',
        },
        {
          explanation:
            'Apply the rule to each clip in turn. Clip 1 no longer holds clip 2; clip 2 no longer holds clip 3; clip 3 no longer holds clip 4. The chain falls apart.',
        },
        {
          explanation:
            'State the answer. The chain collapses into a loose pile of four clips. (Steel keeps a tiny amount of magnetism, so two clips may still cling weakly; soft iron would lose its field even faster.)',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmfm-q1',
      type: 'multiple-choice',
      stem: 'Which list contains only ferromagnetic (strongly magnetic) materials?',
      tier: 'core',
      options: [
        'Iron, steel, nickel, cobalt',
        'Iron, copper, aluminium, plastic',
        'Steel, gold, silver, brass',
        'Aluminium, copper, brass, wood',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmfm-mis-only-iron',
      hint: 'Year 7 keeps a short list: iron, steel, nickel and cobalt. Memorise that quartet.',
    },
    {
      id: 'pmfm-q2',
      type: 'drag-order',
      stem: 'Sort these four objects from MOST strongly attracted to a bar magnet down to NOT attracted at all.',
      tier: 'core',
      items: [
        'Aluminium drink can',
        'Iron nail',
        'Plastic ruler',
        'Steel paper clip',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 10,
      misconceptionId: 'pmfm-mis-all-metals-magnetic',
      hint: 'Iron and steel are strongly ferromagnetic; aluminium is a metal but not magnetic; plastic is a non-metal, so it is ignored completely.',
    },
    {
      id: 'pmfm-q3',
      type: 'multiple-choice',
      stem: 'Which of these is a permanent magnet?',
      tier: 'core',
      options: [
        'A fridge magnet on the kitchen door.',
        'A paper clip clinging to a bar magnet.',
        'A piece of iron held briefly to a magnet.',
        'A steel nail just touched to a magnet.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmfm-mis-induced-is-permanent',
      hint: 'A permanent magnet keeps its field even when no other magnet is near.',
    },
    {
      id: 'pmfm-q4',
      type: 'multiple-choice',
      stem: 'Which sentence best describes induced (temporary) magnetism?',
      tier: 'core',
      options: [
        'A material is magnetised forever after one touch from a magnet.',
        'Any object becomes magnetic when rubbed with cloth.',
        'Only plastic objects can be induced magnets.',
        'A ferromagnetic material becomes magnetic while a permanent magnet is close, then loses most of its magnetism when the magnet is removed.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pmfm-mis-induced-is-permanent',
      hint: 'Think of the paper-clip chain: it falls apart as soon as the bar magnet is lifted away.',
    },
    {
      id: 'pmfm-q5',
      type: 'numeric-entry',
      stem: 'A Year 7 tray holds these eight objects: iron nail, aluminium can, copper wire, steel paper clip, plastic ruler, cobalt drill bit, gold ring, wooden pencil. How many of them are ferromagnetic?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'objects',
      xpValue: 10,
      hint: 'Count the items on the iron, steel, nickel, cobalt list. Ignore the other metals and all non-metals.',
    },
    {
      id: 'pmfm-q6',
      type: 'numeric-entry',
      stem: 'A pupil tests ten objects with a bar magnet. The ferromagnetic ones are: an iron nail, a steel paper clip, a 2p coin, a nickel-plated 5p coin and a cobalt drill bit. How many of the ten objects are NOT magnetic?',
      tier: 'core',
      correctAnswer: 5,
      unit: 'objects',
      xpValue: 10,
      hint: 'Take 10 and subtract the number of ferromagnetic objects listed.',
    },
    {
      id: 'pmfm-q7',
      type: 'numeric-entry',
      stem: 'From this list of four metals: iron, cobalt, copper, nickel. How many of them are ferromagnetic?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'metals',
      xpValue: 10,
      misconceptionId: 'pmfm-mis-all-metals-magnetic',
      hint: 'Copper is found in UK electrical wires; it is a metal, but check the short ferromagnetic list of iron, steel, nickel and cobalt.',
    },
    {
      id: 'pmfm-q8',
      type: 'multiple-choice',
      stem: 'A pupil hangs a chain of three steel paper clips from a bar magnet, then gently lifts the magnet away. Which best describes what happens next?',
      tier: 'confident',
      options: [
        'The clips stay stuck together forever as a new permanent magnet.',
        'The clips become repelled by each other and fly apart.',
        'The clips turn into copper.',
        'The clips lose most of their magnetism and the chain falls apart.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pmfm-mis-induced-is-permanent',
      hint: 'Induced magnetism is temporary. Take the bar magnet away and the steel almost forgets.',
    },
    {
      id: 'pmfm-q9',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Anything shiny and metallic must be magnetic." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right; shiny means magnetic.',
        'Only dull metals are magnetic.',
        'Shine does not show magnetism. Gold and chrome are shiny metals but not magnetic; only iron, steel, nickel and cobalt are.',
        'All metals are equally magnetic, shiny or dull.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmfm-mis-shiny-equals-magnetic',
      hint: 'The bar magnet test does not care about how shiny something looks.',
    },
    {
      id: 'pmfm-q10',
      type: 'multiple-choice',
      stem: 'A jeweller claims a ring is solid gold. The customer brings a bar magnet near and the ring is pulled towards it. What can the customer reasonably conclude?',
      tier: 'confident',
      options: [
        'The ring is solid gold; gold is magnetic.',
        'The ring is not solid gold; gold is not ferromagnetic, so something inside (probably steel or iron) is being attracted.',
        'The bar magnet must be broken.',
        'The ring is made of plastic.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmfm-mis-shiny-equals-magnetic',
      hint: 'Genuine gold is not on the ferromagnetic list. A pull means something else is inside.',
    },
    {
      id: 'pmfm-q11',
      type: 'drag-order',
      stem: 'Put these objects in order from MOST strongly attracted to a bar magnet, down to NOT attracted at all.',
      tier: 'confident',
      items: [
        'Aluminium drink can',
        'Iron nail',
        'Steel paper clip (already touched to a permanent magnet a moment ago)',
      ],
      correctOrder: [2, 1, 0],
      xpValue: 15,
      hint: 'Iron is strongly ferromagnetic; a recently induced steel clip is also a magnet itself; aluminium is not magnetic.',
    },
    {
      id: 'pmfm-q12',
      type: 'multiple-choice',
      stem: 'Which of these is true about post-1992 UK 1p and 2p coins?',
      tier: 'confident',
      options: [
        'They are solid bronze and are not magnetic.',
        'They are solid copper and stick to a magnet because copper is ferromagnetic.',
        'They are made of plastic and so are not magnetic.',
        'They are copper-plated steel; the steel core is ferromagnetic, so the coins stick to a bar magnet.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Pre-1992 coins were solid bronze; post-1992 coins have a steel core under a copper coating.',
    },
    {
      id: 'pmfm-q13',
      type: 'spot-misconception',
      stem: 'Aisha is sorting a tray of metal objects.',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha says: "All metals are magnetic, so the aluminium drink can will stick to the bar magnet." This is wrong; aluminium is a metal but is not ferromagnetic, so it will not stick.',
          isMisconception: true,
        },
        {
          text: 'Aisha says: "Only iron, steel, nickel and cobalt are strongly magnetic, so the can (aluminium) will not stick but the paper clip (steel) will." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmfm-mis-all-metals-magnetic',
    },
    {
      id: 'pmfm-q14',
      type: 'numeric-entry',
      stem: 'A bar magnet can pick up a chain of 6 steel paper clips. When the bar magnet is replaced by a soft-iron rod that has just been induced by a stronger magnet, the iron rod can only hold 2 clips before it loses its field. By how many fewer clips can the soft-iron rod support compared with the bar magnet?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'clips',
      xpValue: 15,
      hint: '6 minus 2.',
    },
    {
      id: 'pmfm-q15',
      type: 'multiple-choice',
      stem: 'A piece of soft iron is held to a permanent magnet. While in contact, the iron picks up two paper clips. The iron is then taken away from the permanent magnet. Which best describes what happens next?',
      tier: 'confident',
      options: [
        'The iron stays a strong magnet and keeps both clips for hours.',
        'The iron becomes a stronger magnet than before.',
        'The clips turn into permanent magnets and stick to the iron forever.',
        'The iron loses almost all of its magnetism sharply and the paper clips fall away.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'pmfm-mis-induced-is-permanent',
      hint: 'Soft iron is a temporary (induced) magnet only. Removing the source removes the field.',
    },
    {
      id: 'pmfm-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked to predict whether a gold-coloured ring will stick to a bar magnet.',
      tier: 'challenge',
      steps: [
        'List the ferromagnetic materials: iron, steel, nickel and cobalt.',
        'Read the question: the ring is gold-coloured.',
        null,
        'Compare to the ferromagnetic list: gold is not on it.',
        'State the prediction: a real gold ring will NOT stick to a bar magnet.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Identify the material: a gold-coloured ring is usually made of gold (a non-ferromagnetic metal), although it could be gold-plated steel or brass.',
      xpValue: 20,
    },
    {
      id: 'pmfm-q17',
      type: 'numeric-entry',
      stem: 'A pupil tests these eight objects with a bar magnet: iron nail, steel paper clip, cobalt drill bit, aluminium can, copper wire, gold ring, plastic ruler, wooden pencil. What percentage of the eight objects are ferromagnetic? Give your answer as a whole number to the nearest percent.',
      tier: 'challenge',
      correctAnswer: 38,
      tolerance: 1,
      unit: 'percent',
      xpValue: 20,
      hint: 'Count the ferromagnetic ones, divide by 8, multiply by 100.',
    },
    {
      id: 'pmfm-q18',
      type: 'multiple-choice',
      stem: 'Why is soft iron, not steel, used as the core of an electromagnet that needs to switch off sharply?',
      tier: 'challenge',
      options: [
        'Soft iron is cheaper than steel.',
        'Soft iron loses nearly all of its induced magnetism the moment the current stops, while steel keeps some of it.',
        'Steel is not ferromagnetic.',
        'Soft iron is shinier than steel.',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'Forward link: an electromagnet that drops a car in a scrapyard needs its field to vanish sharply.',
    },
    {
      id: 'pmfm-q19',
      type: 'spot-misconception',
      stem: 'Liam is talking about what happens when he leaves a paper clip stuck to a bar magnet for a long time.',
      tier: 'challenge',
      statements: [
        {
          text: 'Liam says: "If I leave the steel paper clip on the magnet long enough, it becomes a permanent magnet that never loses its field." This is wrong; the clip is an induced (temporary) magnet, and it loses most of its field within seconds of being taken off the bar magnet, although steel does keep a tiny amount.',
          isMisconception: true,
        },
        {
          text: 'Liam says: "The clip is an induced magnet. While it is on the bar magnet it is strongly magnetic, but it loses most of its magnetism sharply once I take it off, although steel keeps a tiny bit." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmfm-mis-induced-is-permanent',
    },
    {
      id: 'pmfm-q20',
      type: 'multiple-choice',
      stem: 'A pupil claims that magnets attract all metals only on the N pole, and repel them on the S pole. Which best corrects this claim?',
      tier: 'challenge',
      options: [
        'The pupil is right; only the N pole attracts metal.',
        'Both poles of a magnet attract ferromagnetic materials (iron, steel, nickel, cobalt) equally; only another magnet can be repelled, and only if its own pole is brought close to a like pole.',
        'Magnets always repel ferromagnetic materials, never attract them.',
        'Magnets only attract non-metals.',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'pmfm-mis-only-one-pole-attracts',
      hint: 'A ferromagnetic object is not a second magnet; it is pulled by either pole. Repulsion needs two magnets.',
    },
    {
      id: 'pmfm-q21',
      type: 'numeric-entry',
      stem: 'A bar magnet can hold a chain of 8 steel paper clips. After being dropped on the floor several times, it is weakened and can now only hold 5 clips. By how many clips has its strength dropped?',
      tier: 'challenge',
      correctAnswer: 3,
      unit: 'clips',
      xpValue: 20,
      hint: '8 minus 5.',
    },
    {
      id: 'pmfm-q22',
      type: 'numeric-entry',
      stem: 'A pupil leaves a clean dry iron nail stuck to a steel bar magnet for one full school day, in a dry room. They claim that the magnetism will rust the nail. How many rust spots should they predict are caused by the magnetic field, given that magnetism does not start rust?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'rust spots',
      xpValue: 10,
      misconceptionId: 'pmfm-mis-magnetism-rusts',
      hint: 'Rusting is a chemical reaction with oxygen and water, not with a magnetic field. A clean dry nail will not rust just because a magnet is nearby.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, candidates wrote that all metals are attracted to magnets, confusing "metal" with "ferromagnetic".
    {
      id: 'pmfm-mis-all-metals-magnetic',
      description:
        'Believing that every metal is magnetic, so aluminium and copper should stick to a bar magnet.',
      triggerAnswer: 'all-metals-magnetic',
      correction:
        'Only iron, steel, nickel and cobalt are strongly magnetic. Aluminium, copper, brass, gold and silver are all metals but they are not ferromagnetic; a bar magnet ignores them.',
      reExplanation:
        'A common Year 7 trap is to use "metal" and "magnetic" as if they meant the same thing. They do not. The short ferromagnetic list is iron, steel, nickel and cobalt. An aluminium drink can and a copper wire are both metals, but they will not stick to a bar magnet at all.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023, candidates wrote that shiny objects (gold, chrome) are magnetic because they "look metallic".
    {
      id: 'pmfm-mis-shiny-equals-magnetic',
      description:
        'Thinking that shine or a metallic look means an object is magnetic, so gold and chrome should stick to a magnet.',
      triggerAnswer: 'shiny-is-magnetic',
      correction:
        'Shine does not predict magnetism. Gold and chrome are shiny but not on the ferromagnetic list. Only iron, steel, nickel and cobalt are strongly magnetic.',
      reExplanation:
        'Many shiny metals (gold, silver, chrome, aluminium) are not ferromagnetic at all. The bar-magnet test is the right check, not how shiny the object looks. Jewellers sometimes use a magnet to spot fake gold for this reason: real gold should not stick.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2021, candidates wrote that a paper clip that has touched a magnet becomes a permanent magnet itself.
    {
      id: 'pmfm-mis-induced-is-permanent',
      description:
        'Believing that induced magnetism is permanent: a paper clip that has touched a bar magnet stays magnetic forever.',
      triggerAnswer: 'induced-is-permanent',
      correction:
        'Induced magnetism is temporary. Steel paper clips and soft iron lose most of their magnetism the moment the permanent magnet is taken away; the chain falls apart.',
      reExplanation:
        'A permanent magnet (fridge magnet, bar magnet) keeps its field on its own. An induced magnet (paper clip, soft iron) is only magnetic while a permanent magnet is close. Lift the bar magnet away from a chain of steel clips and the chain collapses. Steel keeps a tiny bit; soft iron loses nearly all of it.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020, candidates wrote that magnets attract on one pole and repel on the other for ordinary iron objects.
    {
      id: 'pmfm-mis-only-one-pole-attracts',
      description:
        'Thinking a magnet attracts metal at one pole and repels metal at the other pole.',
      triggerAnswer: 'only-one-pole-attracts',
      correction:
        'Both poles of a magnet attract ferromagnetic materials equally. Repulsion needs a second magnet with a like pole brought near.',
      reExplanation:
        'A paper clip is not a magnet with fixed poles; it is just a piece of ferromagnetic steel. The bar magnet attracts it from either end. Pole rules (like repels like, unlike attracts) only matter when both objects are magnets, such as two bar magnets in a Year 7 lab tray.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2022, candidates suggested that magnetism rusts metals or that touching a magnet damages iron.
    {
      id: 'pmfm-mis-magnetism-rusts',
      description:
        'Believing that holding a magnet to a piece of iron rusts it or changes the metal in a lasting way.',
      triggerAnswer: 'magnetism-rusts',
      correction:
        'Magnetism does not rust metal. Rusting is a chemical reaction with oxygen and water; a magnetic field has no effect on it.',
      reExplanation:
        'A bar magnet pulls ferromagnetic atoms into a tidier line, which is a physical effect, not a chemical one. Iron only rusts when oxygen and water reach the surface. Storing a magnet against a clean dry nail does not start rust; storing the nail damp does.',
    },
    // Source: OCR GCSE Physics J259 examiner report June 2023, candidates wrote that magnets attract only iron, missing nickel and cobalt.
    {
      id: 'pmfm-mis-only-iron',
      description:
        'Believing that magnets attract only iron, missing the other three ferromagnetic metals.',
      triggerAnswer: 'only-iron-is-magnetic',
      correction:
        'Magnets attract iron, but also steel, nickel and cobalt. Steel is mostly iron, but nickel and cobalt are different metals on their own.',
      reExplanation:
        'The Year 7 list of strongly magnetic metals is four long: iron, steel, nickel and cobalt. A nickel-plated 5p coin and a cobalt drill bit both stick to a bar magnet even though neither is pure iron. Aluminium and copper, which are not on the list, do not stick.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismFerromagneticMaterialsZoneNodes = [magnetismFerromagneticMaterials]
