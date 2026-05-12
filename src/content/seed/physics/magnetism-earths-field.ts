import type { SkillNode } from '@/types/content'

const EARTH_AS_MAGNET_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Earth behaves like a giant bar magnet (with a twist at the poles)</text>

    <!-- Earth circle -->
    <circle cx="400" cy="230" r="130" stroke-width="2.5" />
    <text x="400" y="95" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">geographic North</text>
    <text x="400" y="385" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">geographic South</text>

    <!-- Internal bar magnet, tilted to show the offset -->
    <rect x="385" y="110" width="30" height="240" transform="rotate(11 400 230)" fill="currentColor" opacity="0.25" />

    <!-- Pole labels (magnetic poles are the OPPOSITE of geographic) -->
    <text x="430" y="135" text-anchor="start" font-size="14" font-weight="700" stroke="none" fill="currentColor">magnetic S</text>
    <text x="430" y="150" text-anchor="start" font-size="11" stroke="none" fill="currentColor">(near geographic N)</text>

    <text x="370" y="330" text-anchor="end" font-size="14" font-weight="700" stroke="none" fill="currentColor">magnetic N</text>
    <text x="370" y="345" text-anchor="end" font-size="11" stroke="none" fill="currentColor">(near geographic S)</text>

    <!-- Field loops outside Earth -->
    <path d="M 410 110 C 600 130, 600 330, 410 350" stroke-dasharray="4,4" />
    <path d="M 390 110 C 200 130, 200 330, 390 350" stroke-dasharray="4,4" />

    <!-- Note panel -->
    <line x1="60" y1="410" x2="740" y2="410" stroke-dasharray="4,4" stroke-width="1" />
    <text x="400" y="435" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">Compass N is attracted to the magnetic S pole near the geographic North.</text>
  </g>
`

const COMPASS_ON_MAP_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">A walker on Snowdon uses a compass and an OS map</text>

    <!-- Map background -->
    <rect x="60" y="60" width="420" height="320" stroke-width="2" />
    <text x="270" y="85" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">OS map of Snowdonia (sketch)</text>

    <!-- Map north arrow (grid north, top) -->
    <line x1="100" y1="120" x2="100" y2="170" stroke-width="2.5" />
    <polygon points="93,128 100,112 107,128" fill="currentColor" stroke="none" />
    <text x="100" y="185" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">map N</text>

    <!-- Path on map -->
    <path d="M 130 320 L 200 260 L 280 240 L 360 180 L 430 130" stroke-dasharray="6,4" stroke-width="2" />
    <circle cx="430" cy="130" r="5" fill="currentColor" />
    <text x="440" y="125" text-anchor="start" font-size="11" font-weight="700" stroke="none" fill="currentColor">summit</text>

    <text x="130" y="340" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">car park</text>

    <!-- Compass on the right -->
    <circle cx="610" cy="200" r="70" stroke-width="2.5" />
    <text x="610" y="120" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">N</text>
    <text x="610" y="290" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">S</text>
    <text x="540" y="205" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">W</text>
    <text x="680" y="205" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">E</text>

    <!-- Compass needle: red half points slightly off grid N (declination) -->
    <line x1="610" y1="200" x2="595" y2="135" stroke-width="3" />
    <polygon points="588,140 593,128 600,138" fill="currentColor" stroke="none" />
    <line x1="610" y1="200" x2="625" y2="265" stroke-width="3" stroke-dasharray="4,3" />

    <text x="610" y="320" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">red end points to magnetic N</text>
    <text x="610" y="338" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">(a small angle off grid N: declination)</text>

    <!-- Note bottom -->
    <text x="400" y="395" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">In the UK in 2025, magnetic N sits within about one or two degrees of grid N, so map and compass agree closely.</text>
  </g>
`

const CORE_CONVECTION_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="16" font-weight="700" stroke="none" fill="currentColor">Where the field comes from: Earth's molten outer core</text>

    <!-- Earth layers -->
    <circle cx="400" cy="220" r="160" stroke-width="2.5" />
    <circle cx="400" cy="220" r="110" stroke-width="2" />
    <circle cx="400" cy="220" r="55" stroke-width="2" fill="currentColor" opacity="0.3" />

    <!-- Layer labels -->
    <text x="400" y="80" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">crust + mantle</text>
    <text x="400" y="135" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">molten outer core (liquid iron)</text>
    <text x="400" y="225" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">solid</text>
    <text x="400" y="240" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="currentColor">inner core</text>

    <!-- Convection swirl arrows in outer core -->
    <path d="M 320 200 Q 340 160, 380 170" stroke-width="2" />
    <polygon points="376,164 386,170 378,178" fill="currentColor" stroke="none" />
    <path d="M 480 200 Q 460 160, 420 170" stroke-width="2" />
    <polygon points="424,164 414,170 422,178" fill="currentColor" stroke="none" />
    <path d="M 320 240 Q 340 280, 380 270" stroke-width="2" />
    <polygon points="376,276 386,270 378,262" fill="currentColor" stroke="none" />
    <path d="M 480 240 Q 460 280, 420 270" stroke-width="2" />
    <polygon points="424,276 414,270 422,262" fill="currentColor" stroke="none" />

    <text x="120" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">Liquid iron moves</text>
    <text x="120" y="218" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">round the inner core.</text>
    <text x="120" y="236" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Moving charge creates</text>
    <text x="120" y="252" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">the magnetic field.</text>

    <text x="680" y="200" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">The field is not</text>
    <text x="680" y="218" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">constant.</text>
    <text x="680" y="236" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">It drifts and flips</text>
    <text x="680" y="252" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">over long timescales.</text>

    <text x="400" y="410" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">A solid iron lump cannot be the source: above about 770 degrees C, iron loses its permanent magnetism.</text>
  </g>
`

export const magnetismEarthsField: SkillNode = {
  id: 'physics-magnetism-earths-field',
  title: "Earth's Magnetic Field",
  description:
    "Earth behaves like a giant bar magnet. The field is generated by motion of molten iron in the outer core (a dynamo), not by a solid iron block. A freely suspended compass needle is a tiny magnet that rotates to line up with this field, so its N end points roughly to geographic North. The counter-intuitive twist: the magnetic pole near geographic North is actually a magnetic SOUTH pole, because unlike poles attract. Magnetic North and geographic North are not at the same point; the small angle between them is called declination, and UK walkers using OS maps may apply a one or two degree correction. The field is not constant: it drifts year by year and reverses over very long timescales. It also shields life from solar wind (the magnetosphere). Year 7 keeps this qualitative; calculations of declination and field strength wait for GCSE.",
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-magnetism',
  zoneName: 'Magnetism',
  tier: 'confident',
  prerequisites: ['physics-magnetism-fields'],
  curriculum: {
    ks3Objective:
      "Earth's magnetism, compass and navigation; geographic versus magnetic poles, why a freely suspended compass needle aligns with the field.",
    awardingBodies: {
      aqa: "4.7.1.2 Magnetic fields; evidence that the Earth's core generates a magnetic field, compass behaviour (GCSE Physics 8463)",
      edexcel:
        "Topic 7 Magnetism and the motor effect, 7.4 the Earth's magnetic field and the compass (GCSE Physics 1PH0)",
      ocr: "P6.1 Magnets and magnetic fields; Earth's field and use of a plotting compass (GCSE Physics J259 Gateway)",
    },
  },
  scenes: [
    // Source: British Geological Survey "The Earth's Magnetic Field: An Overview" (https://geomag.bgs.ac.uk/education/earthmag.html), accessed 2026-05-12; Earth's magnetic field is well modelled by a tilted bar magnet whose magnetic south pole lies near the geographic north pole.
    {
      id: 'pmef-earth-as-magnet',
      title: 'Earth as a giant bar magnet',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the magnetic poles line up with the geographic poles.',
      data: {
        viewBox: '0 0 800 460',
        svg: EARTH_AS_MAGNET_SVG,
        hotspots: [
          {
            id: 'pmef-earth-geo-n',
            x: 50,
            y: 20,
            label: 'Geographic North',
            description:
              'Geographic North is the point on the rotation axis at the top of the Earth. It is fixed; OS maps and grid lines are drawn against it.',
          },
          {
            id: 'pmef-earth-mag-s',
            x: 60,
            y: 32,
            label: 'Magnetic South sits near geographic North',
            description:
              "The pole near geographic North is a magnetic SOUTH pole. The N end of a compass needle is attracted to it because unlike poles attract. This is the counter-intuitive heart of Earth's magnetism.",
          },
          {
            id: 'pmef-earth-mag-n',
            x: 40,
            y: 75,
            label: 'Magnetic North sits near geographic South',
            description:
              'The pole near geographic South is a magnetic NORTH pole. The S end of a compass needle is attracted to it. The two magnetic poles are not at the geographic poles, they sit a few degrees off.',
          },
          {
            id: 'pmef-earth-rule',
            x: 50,
            y: 95,
            label: 'How the compass works',
            description:
              "A compass needle is a tiny bar magnet that can rotate freely. Its N end points to the magnetic S pole near geographic North, so the painted 'N' tip of the needle points roughly to geographic North as a useful side effect.",
          },
        ],
      },
    },
    // Source: Ordnance Survey "Beginner's Guide to Using a Compass" (https://getoutside.ordnancesurvey.co.uk/guides/beginners-guide-to-using-a-compass/), accessed 2026-05-12; in 2025 the magnetic declination at Snowdon is within about one to two degrees of grid north.
    {
      id: 'pmef-compass-on-map',
      title: 'Using a compass on Snowdon',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a walker links the compass to an OS map.',
      data: {
        viewBox: '0 0 800 420',
        svg: COMPASS_ON_MAP_SVG,
        hotspots: [
          {
            id: 'pmef-map-north',
            x: 12,
            y: 30,
            label: 'Map (grid) North',
            description:
              "Ordnance Survey maps are drawn against grid North, lined up with the OS National Grid. This is what the vertical lines on the map point to.",
          },
          {
            id: 'pmef-compass-needle',
            x: 76,
            y: 30,
            label: 'Compass needle points to magnetic North',
            description:
              'The red end of the compass needle is the N pole of a tiny magnet. It rotates freely and lines up along the local magnetic field, pointing to magnetic North.',
          },
          {
            id: 'pmef-declination',
            x: 76,
            y: 80,
            label: 'Declination: the small angle between them',
            description:
              'Magnetic North is not at the same point as grid North. The angle between them is declination. In Snowdonia in 2025 it is about one or two degrees, so map and compass nearly agree; in remote parts of the world it can be over 20 degrees.',
          },
          {
            id: 'pmef-route',
            x: 30,
            y: 50,
            label: 'Walking the route',
            description:
              'A walker turns the compass dial until the needle lines up with the orienting arrow, then walks along the bearing. Match the bearing on the map (after a small declination correction) and the route to the summit becomes a series of straight legs.',
          },
        ],
      },
    },
    // Source: USGS "Earth's Inconstant Magnetic Field" (https://www.usgs.gov/centers/geomagnetism), accessed 2026-05-12; the field is produced by convection of liquid iron in the outer core (the geodynamo), and reverses on geological timescales.
    {
      id: 'pmef-core-dynamo',
      title: "Where the field comes from: the molten outer core",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to see why a solid iron lump cannot be the source of Earth's field.",
      data: {
        viewBox: '0 0 800 430',
        svg: CORE_CONVECTION_SVG,
        hotspots: [
          {
            id: 'pmef-core-outer',
            x: 50,
            y: 32,
            label: 'Molten outer core: liquid iron',
            description:
              'The outer core is a deep shell of liquid iron and nickel, about 2200 km thick, at temperatures of several thousand degrees C. The metal is hot enough to flow.',
          },
          {
            id: 'pmef-core-inner',
            x: 50,
            y: 55,
            label: 'Solid inner core',
            description:
              "The inner core is solid iron, kept solid by the huge pressure deep inside Earth. It is hot enough that, on its own, it could not be a permanent magnet.",
          },
          {
            id: 'pmef-dynamo',
            x: 15,
            y: 60,
            label: 'The dynamo idea',
            description:
              'Moving charges create magnetic fields. As liquid iron flows in slow, swirling loops round the inner core, it carries charge with it and generates the magnetic field. This self-sustaining process is called a geodynamo.',
          },
          {
            id: 'pmef-not-constant',
            x: 85,
            y: 60,
            label: 'The field is not constant',
            description:
              "Earth's field drifts year by year, and over hundreds of thousands of years the magnetic poles can swap. Frozen-in iron grains in old lava flows record these flips, which is how scientists know.",
          },
        ],
      },
    },
  ],
  workedExamples: [
    // Source: AQA GCSE Physics 8463 specification 4.7.1.2 (Magnetic fields; evidence that the Earth's core generates a magnetic field).
    {
      id: 'pmef-worked-1',
      title: 'Why a compass N end points to geographic North',
      steps: [
        {
          explanation:
            'Set out the situation. A pupil at school holds a plotting compass on a wooden bench, away from any magnets. The needle settles with the red end pointing roughly across the room.',
        },
        {
          explanation:
            'Recall the rules. A compass needle is a tiny bar magnet that can rotate freely. Unlike poles attract; like poles repel.',
        },
        {
          explanation:
            'Apply to Earth. Earth has a magnetic SOUTH pole sitting near geographic North. So the N end of any nearby compass needle is attracted to this magnetic S, which lies in the geographic North direction.',
        },
        {
          explanation:
            'State the answer. The red end of the compass needle points to the magnetic S pole near geographic North, so it acts as a handy pointer to geographic North.',
        },
        {
          explanation:
            'Watch out for the trap. People often say "the N end points to the north magnetic pole". That is back to front: it points to a magnetic S pole that happens to sit near the geographic North.',
        },
      ],
    },
    // Source: Ordnance Survey teaching notes on map and compass work, KS3 level.
    {
      id: 'pmef-worked-2',
      title: 'Taking a bearing on a Lake District walk',
      steps: [
        {
          explanation:
            'Set out the situation. A walker is at a footpath junction in the Lake District. The map shows the next summit at a grid bearing of 048 degrees. Local declination is about 1 degree east of grid North.',
        },
        {
          explanation:
            'Pick up the compass. Hold it flat, well away from phone, watch and ice axe (steel attracts the needle and gives a false reading). Let the needle settle so it lines up with magnetic North.',
        },
        {
          explanation:
            'Apply declination. To convert a grid bearing of 048 degrees into a magnetic bearing for the compass dial, subtract 1 degree (because magnetic N is east of grid N).',
          maths: '048 - 1 = 047 degrees',
        },
        {
          explanation:
            'Set the dial. Turn the rotating bezel until 047 degrees lines up with the index line, then turn your whole body until the needle lines up with the orienting arrow.',
        },
        {
          explanation:
            'Walk on the bearing. Pick a feature in line with the direction-of-travel arrow and walk to it, then take a fresh sighting. Repeat until you reach the summit.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pmef-q1',
      type: 'multiple-choice',
      stem: 'Which statement best describes the Earth as a magnet?',
      tier: 'core',
      options: [
        'Earth behaves like a giant bar magnet, with its field generated by motion in the molten outer core.',
        'Earth has no magnetic field; compasses are powered by gravity.',
        "Earth is a permanent magnet because its inner core is a solid lump of magnetised iron.",
        'Earth becomes magnetic only when sunlight strikes it.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmef-mis-compass-gravity',
      hint: 'The field is real and continuous, and its origin is a moving fluid deep inside Earth.',
    },
    {
      id: 'pmef-q2',
      type: 'multiple-choice',
      stem: 'A freely suspended compass needle settles with its red (N) end pointing roughly to:',
      tier: 'core',
      options: [
        'geographic South',
        'the nearest mountain',
        'whichever direction it started in',
        'geographic North',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Try a compass on a UK bench: the red end always settles in roughly the same direction.',
    },
    {
      id: 'pmef-q3',
      type: 'multiple-choice',
      stem: 'The magnetic pole near the geographic North is actually a magnetic ___ pole.',
      tier: 'core',
      options: ['North', 'South', 'East', 'West'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pmef-mis-mag-n-at-geo-n',
      hint: 'Unlike poles attract. A compass N is attracted to it, so it must be a S pole.',
    },
    {
      id: 'pmef-q4',
      type: 'multiple-choice',
      stem: 'In which layer of the Earth is the magnetic field generated?',
      tier: 'core',
      options: [
        'The atmosphere',
        'The crust',
        'The molten outer core (liquid iron)',
        'The solid inner core, on its own',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pmef-mis-solid-iron-magnet',
      hint: 'Moving charges create fields. Which layer flows?',
    },
    {
      id: 'pmef-q5',
      type: 'multiple-choice',
      stem: 'Which best explains why a compass needle rotates to point one way?',
      tier: 'core',
      options: [
        'The needle is itself a tiny bar magnet, free to rotate, that lines up with the magnetic field.',
        'The needle is heavier on one side and falls under gravity.',
        'The needle is attracted to the nearest piece of iron in the room.',
        'The needle follows the direction of sunlight.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pmef-mis-compass-gravity',
      hint: 'A compass works at night, indoors, and on a flat bench with no iron nearby.',
    },
    {
      id: 'pmef-q6',
      type: 'numeric-entry',
      stem: 'In Snowdonia in 2025, the angle between magnetic North and grid North is about 1.5 degrees. A walker takes a grid bearing of 060 degrees. Magnetic North is west of grid North, so the walker adds the declination. What magnetic bearing should they set on the compass? Give your answer in degrees to one decimal place.',
      tier: 'core',
      correctAnswer: 61.5,
      tolerance: 0.2,
      unit: 'degrees',
      xpValue: 10,
      hint: '060 + 1.5.',
    },
    {
      id: 'pmef-q7',
      type: 'numeric-entry',
      stem: "Earth's geographic North Pole is at latitude 90 degrees N. The magnetic pole near it sits at roughly 86 degrees N. How many degrees of latitude separate them? Give your answer as a whole number.",
      tier: 'core',
      correctAnswer: 4,
      unit: 'degrees',
      xpValue: 10,
      misconceptionId: 'pmef-mis-poles-same-point',
      hint: '90 minus 86.',
    },
    {
      id: 'pmef-q8',
      type: 'multiple-choice',
      stem: 'Why is a compass needle described as "freely suspended" in many textbooks?',
      tier: 'confident',
      options: [
        'Because it is held in place with sticky tape so it cannot move.',
        'Because it floats in the air without touching anything.',
        'Because it is suspended by an electric current.',
        'Because it is mounted on a low-friction pivot so it can rotate to line up with the magnetic field.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'It needs to rotate easily; that is what "freely" means here.',
    },
    {
      id: 'pmef-q9',
      type: 'spot-misconception',
      stem: 'Mira is explaining how compasses work.',
      tier: 'confident',
      statements: [
        {
          text: 'Mira says: "A compass works because the metal needle is pulled down by gravity towards the centre of the Earth, which always sits to the north." This is wrong; gravity pulls vertically down, not sideways, and has nothing to do with which way is north.',
          isMisconception: true,
        },
        {
          text: 'Mira says: "A compass needle is a small magnet on a pivot. The local magnetic field rotates it until its N end lines up along the field, pointing towards magnetic North." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pmef-mis-compass-gravity',
    },
    {
      id: 'pmef-q10',
      type: 'multiple-choice',
      stem: "Which statement best describes how Earth's magnetic field changes over time?",
      tier: 'confident',
      options: [
        'It is constant; it has not changed since the Earth formed.',
        "It flips back and forth every year, so compasses are useless after a year.",
        "It drifts slightly year by year, and over hundreds of thousands of years the poles can flip; lava records show many past reversals.",
        "It is the same strength everywhere on the Earth's surface.",
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pmef-mis-field-constant',
      hint: 'Long timescales matter here: think geological, not human.',
    },
    {
      id: 'pmef-q11',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Magnetic North and geographic North are at the same point on the Earth." Which response is the best correction?',
      tier: 'confident',
      options: [
        'The pupil is right; they are the same point.',
        'The two are different points, separated by a few degrees of latitude. The angle between them, declination, is small in the UK but large in some parts of the world.',
        'The two are different points, separated by thousands of km on the equator.',
        'There is no magnetic North; only a geographic North.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'pmef-mis-poles-same-point',
      hint: 'Both points are near the top of the Earth, but they are not on top of each other.',
    },
    {
      id: 'pmef-q12',
      type: 'numeric-entry',
      stem: 'A walker has a grid bearing of 270 degrees and wants the magnetic bearing. Local declination is 2 degrees west of grid North (so they add 2 degrees). What magnetic bearing should they set?',
      tier: 'confident',
      correctAnswer: 272,
      unit: 'degrees',
      xpValue: 15,
      hint: '270 + 2.',
    },
    {
      id: 'pmef-q13',
      type: 'numeric-entry',
      stem: 'A magnetic pole drifts slowly. Suppose it has moved about 1100 km in 100 years. What is the average drift speed in km per year? Give your answer as a whole number.',
      tier: 'confident',
      correctAnswer: 11,
      unit: 'km per year',
      xpValue: 15,
      hint: 'Speed = distance / time. 1100 / 100.',
    },
    {
      id: 'pmef-q14',
      type: 'drag-order',
      stem: 'Put these steps in order for a Year 7 pupil setting up a plotting compass on a school bench.',
      tier: 'confident',
      items: [
        'Read off which way the red N end of the needle is pointing: this is magnetic North in the classroom.',
        'Place the compass flat on a wooden bench, well away from any iron objects, steel rulers, phones, or other magnets.',
        'Wait for the needle to settle in one direction.',
      ],
      correctOrder: [1, 2, 0],
      xpValue: 15,
      hint: 'Setup first, then settle, then read.',
    },
    {
      id: 'pmef-q15',
      type: 'numeric-entry',
      stem: "Earth's magnetic field strength varies with latitude. Near the magnetic equator it is roughly 25 microtesla; near the magnetic poles it is roughly 60 microtesla. How many microtesla stronger is the polar value than the equator value? Give your answer as a whole number.",
      tier: 'confident',
      correctAnswer: 35,
      unit: 'microtesla',
      xpValue: 15,
      misconceptionId: 'pmef-mis-field-uniform',
      hint: '60 minus 25.',
    },
    {
      id: 'pmef-q16',
      type: 'missing-step',
      stem: 'A walker on Snowdon takes a grid bearing of 120 degrees to the next cairn. Local declination is 1 degree east of grid North, so they subtract 1 degree. Fill in the missing step.',
      tier: 'challenge',
      steps: [
        'Read the grid bearing from the map: 120 degrees.',
        'Recall the local declination: 1 degree east of grid North.',
        'Use the rule: magnetic east of grid means subtract the declination from the grid bearing.',
        null,
        'Set 119 degrees on the compass dial, line the needle up with the orienting arrow, and walk along the direction-of-travel arrow.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Calculate the magnetic bearing: 120 degrees - 1 degree = 119 degrees.',
      xpValue: 20,
    },
    {
      id: 'pmef-q17',
      type: 'numeric-entry',
      stem: "The Earth's magnetic field strength at the surface is about 50 microtesla on average. In milligauss, where 1 microtesla = 10 milligauss, what is this field strength?",
      tier: 'challenge',
      correctAnswer: 500,
      unit: 'milligauss',
      xpValue: 20,
      hint: '50 multiplied by 10.',
    },
    {
      id: 'pmef-q18',
      type: 'spot-misconception',
      stem: "Sam is talking about why Earth's field exists.",
      tier: 'challenge',
      statements: [
        {
          text: 'Sam says: "The Earth is one big lump of solid iron, and that solid iron acts as a permanent magnet, just like the bar magnet in a school tray." This is wrong; the inner core is solid iron but is far too hot to be a permanent magnet, and most of the Earth is not iron at all.',
          isMisconception: true,
        },
        {
          text: 'Sam says: "The outer core is liquid iron and flows in slow loops. That moving metal generates the magnetic field, in a process called a dynamo." This is right.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pmef-mis-solid-iron-magnet',
    },
    {
      id: 'pmef-q19',
      type: 'multiple-choice',
      stem: "Which of these is a direct, real-world use of Earth's magnetic field?",
      tier: 'challenge',
      options: [
        'A pupil reading a thermometer in the classroom.',
        'A toaster heating a slice of bread.',
        'A torch shining a beam through fog.',
        "A walker using a magnetic compass to take a bearing in the Lake District, before the days of GPS.",
      ],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Which option needs a magnetic field to work?',
    },
    {
      id: 'pmef-q20',
      type: 'numeric-entry',
      stem: 'A compass at the magnetic equator lies almost flat (the field is horizontal). Near the magnetic poles, the field dips so steeply that a horizontal compass barely works at all. If at one site the field dips at 70 degrees from horizontal, how many degrees from vertical is it? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 20,
      unit: 'degrees',
      xpValue: 20,
      hint: '90 minus 70.',
    },
    {
      id: 'pmef-q21',
      type: 'multiple-choice',
      stem: "Which best describes the magnetosphere?",
      tier: 'challenge',
      options: [
        "The metal sphere at the centre of the Earth.",
        "A single magnetic rock buried under the South Pole.",
        "The region of space round the Earth where its magnetic field is strong enough to shield us from much of the solar wind.",
        "The atmosphere of a magnet on a school bench.",
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: '"-sphere" here means the region of influence, not a solid ball.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022; many candidates wrote that the magnetic pole near geographic North is itself a magnetic North pole, swapping the labels.
    {
      id: 'pmef-mis-mag-n-at-geo-n',
      description:
        "Believing that the magnetic pole near geographic North is itself a magnetic NORTH pole.",
      triggerAnswer: 'mag-n-at-geo-n',
      correction:
        "The pole near geographic North is a magnetic SOUTH. A compass N is attracted to it, and unlike poles attract.",
      reExplanation:
        "Unlike poles attract; like poles repel. The N end of a compass needle is attracted to the pole near geographic North, so that pole must be a magnetic S. The label confuses people because we call the direction north but the magnetic pole sitting there is a south pole.",
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2021; candidates often stated that magnetic North and geographic North are at the same point on the Earth's surface.
    {
      id: 'pmef-mis-poles-same-point',
      description:
        "Believing that magnetic North and geographic North sit at exactly the same point on the Earth's surface.",
      triggerAnswer: 'poles-same-point',
      correction:
        'Magnetic North sits a few degrees of latitude away from geographic North, and slowly drifts year by year.',
      reExplanation:
        "Geographic North sits on Earth's rotation axis. Magnetic North is offset by a few degrees and shifts over time. The angle between them at any one place is declination, printed on OS maps so walkers can correct the small difference between map and compass.",
    },
    // Source: OCR GCSE Physics J259 examiner report June 2022; candidates wrote that the Earth's magnetic field is constant in strength and direction.
    {
      id: 'pmef-mis-field-constant',
      description:
        "Believing that the Earth's magnetic field is constant in strength and direction, and has never changed.",
      triggerAnswer: 'field-constant',
      correction:
        'The field drifts year by year, and over hundreds of thousands of years the poles can flip; lava flows preserve a record of past reversals.',
      reExplanation:
        "Earth's field shifts slowly. UK declination changes by a fraction of a degree per year, recorded by the British Geological Survey. Over geological time the poles flip, and iron grains frozen into old lava flows point in the direction the field had when they cooled. These records show many reversals through history.",
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2020; candidates assumed Earth's surface field is uniform.
    {
      id: 'pmef-mis-field-uniform',
      description:
        "Believing every part of the Earth's surface has the same magnetic field strength and direction.",
      triggerAnswer: 'field-uniform',
      correction:
        'The field is roughly twice as strong near the magnetic poles as at the magnetic equator, and the dip angle changes with latitude.',
      reExplanation:
        "Earth's field is shaped like a tilted bar magnet's field, so it is stronger near the poles (where the lines crowd together) and weaker at the magnetic equator. The field also tilts: at the equator it is roughly horizontal, near the poles it dips almost straight down. That is why polar navigation needs specialised instruments.",
    },
    // Source: Common Year 7 misconception logged in CGP KS3 Science Complete Revision and Practice (2022); pupils sometimes say a compass works because gravity pulls a heavy end down.
    {
      id: 'pmef-mis-compass-gravity',
      description:
        "Believing a compass needle points north because gravity pulls a heavy end down, not because the needle is itself a magnet.",
      triggerAnswer: 'compass-gravity',
      correction:
        'A compass needle is a tiny bar magnet on a low-friction pivot; it rotates to line up with the local magnetic field.',
      reExplanation:
        "Gravity pulls vertically down everywhere on Earth, so it cannot pick out a horizontal direction such as north. A compass works because the needle is magnetised. The local magnetic field rotates the needle until its N end lines up along the field, pointing roughly to geographic North in the UK.",
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2023; candidates often said Earth's iron core IS a giant permanent magnet, missing that the outer core is liquid and convecting.
    {
      id: 'pmef-mis-solid-iron-magnet',
      description:
        "Believing Earth's iron core is a solid lump of permanently magnetised iron, exactly like a school bar magnet but bigger.",
      triggerAnswer: 'solid-iron-magnet',
      correction:
        'The outer core is liquid iron, and convection of that liquid generates the field as a dynamo. Iron loses permanent magnetism above about 770 degrees C, and the core is far hotter than that.',
      reExplanation:
        "A permanent-magnet picture fails on temperature: above about 770 degrees C, iron loses its permanent magnetism, and the core is thousands of degrees hot. Instead the field is made by a dynamo. Liquid iron in the outer core flows in slow loops round the solid inner core; moving charge in that flow generates and sustains Earth's magnetic field.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const magnetismEarthsFieldZoneNodes = [magnetismEarthsField]
