import type { SkillNode } from '@/types/content'

// Inline SVG for scene 1: a beaker of water on a worktop with a few particles
// leaving the surface as a gas. Shows evaporation at room temperature.
const SURFACE_ESCAPE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="1.5">
    <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">A beaker of water on a Manchester worktop at 18 C</text>

    <!-- Worktop -->
    <rect x="0" y="170" width="320" height="10" fill="currentColor" stroke="none" opacity="0.25" />

    <!-- Beaker outline -->
    <path d="M 90 60 L 90 170 L 230 170 L 230 60" stroke="currentColor" stroke-width="2" fill="none" />
    <line x1="80" y1="60" x2="240" y2="60" stroke="currentColor" stroke-width="2" />

    <!-- Water level -->
    <rect x="92" y="95" width="136" height="73" fill="#3B82F6" opacity="0.25" stroke="none" />
    <line x1="92" y1="95" x2="228" y2="95" stroke="#1E3A8A" stroke-width="1.5" />

    <!-- Water particles inside the liquid (touching, disordered) -->
    <g fill="#1E3A8A" stroke="none" opacity="0.9">
      <circle cx="105" cy="110" r="4" />
      <circle cx="118" cy="112" r="4" />
      <circle cx="131" cy="108" r="4" />
      <circle cx="145" cy="113" r="4" />
      <circle cx="159" cy="110" r="4" />
      <circle cx="173" cy="112" r="4" />
      <circle cx="187" cy="108" r="4" />
      <circle cx="201" cy="113" r="4" />
      <circle cx="215" cy="110" r="4" />
      <circle cx="111" cy="125" r="4" />
      <circle cx="125" cy="128" r="4" />
      <circle cx="140" cy="125" r="4" />
      <circle cx="154" cy="128" r="4" />
      <circle cx="168" cy="125" r="4" />
      <circle cx="182" cy="128" r="4" />
      <circle cx="196" cy="125" r="4" />
      <circle cx="210" cy="128" r="4" />
      <circle cx="105" cy="142" r="4" />
      <circle cx="119" cy="145" r="4" />
      <circle cx="133" cy="142" r="4" />
      <circle cx="147" cy="145" r="4" />
      <circle cx="161" cy="142" r="4" />
      <circle cx="175" cy="145" r="4" />
      <circle cx="189" cy="142" r="4" />
      <circle cx="203" cy="145" r="4" />
      <circle cx="217" cy="142" r="4" />
      <circle cx="111" cy="158" r="4" />
      <circle cx="125" cy="160" r="4" />
      <circle cx="140" cy="158" r="4" />
      <circle cx="154" cy="160" r="4" />
      <circle cx="168" cy="158" r="4" />
      <circle cx="182" cy="160" r="4" />
      <circle cx="196" cy="158" r="4" />
      <circle cx="210" cy="160" r="4" />
    </g>

    <!-- Surface particle about to escape with an arrow up -->
    <g fill="#DC2626" stroke="none">
      <circle cx="140" cy="88" r="4" />
    </g>
    <g stroke="#DC2626" stroke-width="1.5" fill="none">
      <line x1="140" y1="84" x2="140" y2="70" />
      <polygon points="136,72 140,64 144,72" fill="#DC2626" stroke="none" />
    </g>

    <!-- A few free gas particles above the surface -->
    <g fill="#A855F7" stroke="none">
      <circle cx="115" cy="55" r="3" />
      <circle cx="170" cy="42" r="3" />
      <circle cx="200" cy="50" r="3" />
      <circle cx="155" cy="30" r="3" />
    </g>

    <!-- Labels -->
    <text x="60" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Liquid water</text>
    <text x="60" y="138" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">(no bubbles)</text>
    <text x="270" y="50" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Water vapour</text>
    <text x="270" y="62" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">drifts away</text>
  </g>
`

// Inline SVG for scene 2: a beaker on a Bunsen at 100 C with bubbles
// throughout the body of the liquid. Shows boiling as a bulk transition.
const BULK_BOILING_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="1.5">
    <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">The same beaker over a Bunsen at 100 C</text>

    <!-- Tripod legs -->
    <line x1="100" y1="200" x2="115" y2="170" stroke="currentColor" stroke-width="2" />
    <line x1="220" y1="200" x2="205" y2="170" stroke="currentColor" stroke-width="2" />
    <line x1="160" y1="200" x2="160" y2="170" stroke="currentColor" stroke-width="2" />
    <line x1="105" y1="170" x2="215" y2="170" stroke="currentColor" stroke-width="2" />

    <!-- Bunsen flame below -->
    <path d="M 145 210 Q 160 235 175 210 Z" fill="#F59E0B" stroke="none" opacity="0.85" />
    <path d="M 152 215 Q 160 230 168 215 Z" fill="#2563EB" stroke="none" opacity="0.85" />

    <!-- Beaker -->
    <path d="M 90 60 L 90 168 L 230 168 L 230 60" stroke="currentColor" stroke-width="2" fill="none" />
    <line x1="80" y1="60" x2="240" y2="60" stroke="currentColor" stroke-width="2" />

    <!-- Water level -->
    <rect x="92" y="80" width="136" height="88" fill="#3B82F6" opacity="0.25" stroke="none" />
    <line x1="92" y1="80" x2="228" y2="80" stroke="#1E3A8A" stroke-width="1.5" />

    <!-- Bubbles forming all through the liquid (the key boiling feature) -->
    <g fill="#E0F2FE" stroke="#1E3A8A" stroke-width="1">
      <circle cx="110" cy="155" r="5" />
      <circle cx="130" cy="140" r="6" />
      <circle cx="155" cy="150" r="5" />
      <circle cx="180" cy="135" r="7" />
      <circle cx="205" cy="148" r="5" />
      <circle cx="120" cy="115" r="5" />
      <circle cx="160" cy="110" r="6" />
      <circle cx="200" cy="118" r="5" />
      <circle cx="140" cy="95" r="4" />
      <circle cx="190" cy="92" r="4" />
    </g>

    <!-- Steam plume rising thickly above the beaker -->
    <g stroke="currentColor" stroke-width="3" fill="none" opacity="0.55">
      <path d="M 120 60 Q 110 40 125 25 Q 135 12 122 0" />
      <path d="M 160 60 Q 155 40 168 28 Q 178 15 168 0" />
      <path d="M 200 60 Q 205 40 195 25 Q 188 12 200 0" />
    </g>

    <!-- Thermometer reading -->
    <rect x="246" y="65" width="40" height="36" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" />
    <text x="266" y="80" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">100 C</text>
    <text x="266" y="94" text-anchor="middle" font-size="9" stroke="none" fill="currentColor">held steady</text>

    <!-- Labels -->
    <text x="50" y="105" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Bubbles of</text>
    <text x="50" y="118" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">steam form</text>
    <text x="50" y="131" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">throughout</text>
  </g>
`

// Inline SVG for scene 3: a side-by-side comparison chart. Two columns
// (Evaporation vs Boiling) with the key contrasts spelled out.
const SIDE_BY_SIDE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="1.2">
    <text x="160" y="18" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">Evaporation vs boiling: read the two columns</text>

    <!-- Headers -->
    <rect x="20" y="30" width="140" height="22" fill="#DBEAFE" stroke="#1E3A8A" />
    <text x="90" y="46" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="#1E3A8A">Evaporation</text>
    <rect x="170" y="30" width="140" height="22" fill="#FEE2E2" stroke="#991B1B" />
    <text x="240" y="46" text-anchor="middle" font-size="12" font-weight="700" stroke="none" fill="#991B1B">Boiling</text>

    <!-- Row 1: where -->
    <rect x="20" y="55" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="90" y="72" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Only at the surface</text>
    <rect x="170" y="55" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="240" y="72" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Throughout the liquid</text>

    <!-- Row 2: temp -->
    <rect x="20" y="85" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="90" y="96" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Any temperature</text>
    <text x="90" y="108" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">above absolute zero</text>
    <rect x="170" y="85" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="240" y="96" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Only at the boiling</text>
    <text x="240" y="108" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">point (100 C for water)</text>

    <!-- Row 3: speed -->
    <rect x="20" y="115" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="90" y="132" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Slow, no bubbles</text>
    <rect x="170" y="115" width="140" height="28" fill="none" stroke="currentColor" />
    <text x="240" y="132" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Rapid, bubbles form</text>

    <!-- Row 4: which particles -->
    <rect x="20" y="145" width="140" height="36" fill="none" stroke="currentColor" />
    <text x="90" y="159" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Only the fastest</text>
    <text x="90" y="171" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">surface particles</text>
    <text x="90" y="180" text-anchor="middle" font-size="9" stroke="none" fill="currentColor">escape, one at a time</text>
    <rect x="170" y="145" width="140" height="36" fill="none" stroke="currentColor" />
    <text x="240" y="159" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Most particles have</text>
    <text x="240" y="171" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">enough energy to</text>
    <text x="240" y="180" text-anchor="middle" font-size="9" stroke="none" fill="currentColor">break free at once</text>

    <!-- Row 5: cooling effect -->
    <rect x="20" y="183" width="140" height="22" fill="#E0F2FE" stroke="currentColor" />
    <text x="90" y="198" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Cools the liquid behind</text>
    <rect x="170" y="183" width="140" height="22" fill="#FFE4E6" stroke="currentColor" />
    <text x="240" y="198" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">Temperature stays at bp</text>
  </g>
`

export const evaporationAndBoiling: SkillNode = {
  id: 'chemistry-particle-model-evaporation-boiling',
  title: 'Evaporation and Boiling',
  description:
    'Use the particle model to tell evaporation apart from boiling. Evaporation happens only at the surface of a liquid, at any temperature above absolute zero, when the fastest surface particles break away one at a time. Boiling happens throughout the liquid, only once the boiling point is reached, when most particles have enough energy to break their bonds at the same time. Apply this to UK contexts: a kettle whistling at 100 C, wet washing drying on a line in the Lake District, a puddle shrinking after Manchester rain.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-state-changes'],
  curriculum: {
    ks3Objective:
      'The distinction between evaporation and boiling in terms of the particle model; evaporation as surface escape at any temperature above absolute zero; boiling as bulk transition at a fixed boiling point.',
    awardingBodies: {
      aqa: '4.2.2.1 The three states of matter; state changes including evaporation and boiling (8462)',
      edexcel:
        'Topic 1.6 States of matter and changes of state; evaporation and boiling (1CH0)',
      ocr: 'C1.1c Changes of state: evaporation and boiling distinguished (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-evap-boil-scene-1',
      title: 'A Cool Beaker: Surface Escape',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a few water particles can escape from the surface, even when the water is nowhere near 100 C.',
      data: {
        viewBox: '0 0 320 220',
        svg: SURFACE_ESCAPE_SVG,
        hotspots: [
          {
            id: 'cpm-evap-boil-h-1',
            x: 18,
            y: 45,
            label: 'Liquid water at 18 C',
            description:
              'The beaker sits on a kitchen worktop. The water is well below 100 C, so there are no bubbles inside the liquid.',
          },
          {
            id: 'cpm-evap-boil-h-2',
            x: 44,
            y: 38,
            label: 'A fast surface particle',
            description:
              'Not every particle moves at the same speed. A few near the surface have enough energy to break the forces holding them, and they leave.',
          },
          {
            id: 'cpm-evap-boil-h-3',
            x: 78,
            y: 24,
            label: 'Water vapour drifts away',
            description:
              'Once free, the particle is a gas. It mixes with the air in the kitchen, so the water in the beaker slowly shrinks. This is evaporation.',
          },
          {
            id: 'cpm-evap-boil-h-4',
            x: 50,
            y: 78,
            label: 'No bubbles in the liquid',
            description:
              'Inside the body of the water nothing is changing state. Evaporation is a surface only process at this temperature.',
          },
        ],
      },
    },
    {
      id: 'cpm-evap-boil-scene-2',
      title: 'On a Bunsen at 100 C: Bulk Boiling',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how boiling looks different from evaporation, and where the bubbles come from.',
      data: {
        viewBox: '0 0 320 240',
        svg: BULK_BOILING_SVG,
        hotspots: [
          {
            id: 'cpm-evap-boil-h-5',
            x: 84,
            y: 35,
            label: 'Thermometer holds at 100 C',
            description:
              'Once the water reaches its boiling point, the temperature stays at 100 C. Extra heat goes into breaking bonds, not raising the reading.',
          },
          {
            id: 'cpm-evap-boil-h-6',
            x: 50,
            y: 55,
            label: 'Bubbles form throughout',
            description:
              'Bubbles of steam appear all through the liquid, not only at the top. Each bubble is water that has turned into gas inside the body of the liquid.',
          },
          {
            id: 'cpm-evap-boil-h-7',
            x: 50,
            y: 12,
            label: 'Steam rushes off the top',
            description:
              'A thick plume of steam leaves the beaker. Far more particles change state each second than during evaporation.',
          },
          {
            id: 'cpm-evap-boil-h-8',
            x: 50,
            y: 92,
            label: 'Bunsen keeps the energy flowing',
            description:
              'Stop the heat and the boiling stops. The Bunsen is the energy supply that lets most particles break free at the same time.',
          },
        ],
      },
    },
    {
      id: 'cpm-evap-boil-scene-3',
      title: 'Side by Side: Five Key Contrasts',
      type: 'labelled-diagram',
      instructions:
        'Click each row to compare evaporation and boiling on one feature at a time.',
      data: {
        viewBox: '0 0 320 220',
        svg: SIDE_BY_SIDE_SVG,
        hotspots: [
          {
            id: 'cpm-evap-boil-h-9',
            x: 50,
            y: 31,
            label: 'Where in the liquid',
            description:
              'Evaporation happens only at the surface. Boiling happens throughout the liquid, including deep inside, which is why bubbles can form down at the bottom of a saucepan.',
          },
          {
            id: 'cpm-evap-boil-h-10',
            x: 50,
            y: 44,
            label: 'Temperature',
            description:
              'Evaporation happens at any temperature above absolute zero. A puddle dries on a cool day in Manchester. Boiling needs the boiling point, 100 C for pure water at sea level.',
          },
          {
            id: 'cpm-evap-boil-h-11',
            x: 50,
            y: 58,
            label: 'Speed',
            description:
              'Evaporation is slow and quiet, with no bubbles. Boiling is rapid, with bubbles and noise, because many particles break free at once.',
          },
          {
            id: 'cpm-evap-boil-h-12',
            x: 50,
            y: 74,
            label: 'Which particles change state',
            description:
              'Only the fastest surface particles evaporate. In boiling, particles all through the liquid have enough energy to break their bonds at the same time.',
          },
          {
            id: 'cpm-evap-boil-h-13',
            x: 50,
            y: 88,
            label: 'Cooling effect',
            description:
              'Evaporation cools the liquid that is left behind, because the fastest particles leave. Boiling keeps the liquid at its boiling point until all of it has turned to gas.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-evap-boil-worked-1',
      title: 'Why a puddle in Manchester shrinks at 12 C',
      steps: [
        {
          explanation:
            'Question: it is a cool 12 C afternoon in Manchester. A puddle on the pavement gets smaller through the day, even though the water never boils. Use the particle model to explain why.',
        },
        {
          explanation:
            'Picture the water particles in the puddle. They are touching, but they are not all moving at the same speed.',
          maths: 'liquid water: some fast particles, some slow',
        },
        {
          explanation:
            'A few of the fastest particles sit right at the surface, where there is air above them, not more water.',
        },
        {
          explanation:
            'These fast surface particles have enough energy to break the forces holding them to their neighbours. They leave the liquid as water vapour.',
          maths: 'surface particle: energy > bonds, escapes as gas',
        },
        {
          explanation:
            'As more particles escape, the puddle loses water. Over a few hours, the puddle shrinks. This whole process is called evaporation.',
        },
        {
          explanation:
            'So the puddle shrinks because evaporation happens at the surface at any temperature above absolute zero, including 12 C. Boiling is not needed.',
        },
      ],
    },
    {
      id: 'cpm-evap-boil-worked-2',
      title: 'Why a kettle whistles only once it reaches 100 C',
      steps: [
        {
          explanation:
            'Question: Aisha switches on a kettle holding 0.5 litre of water at 15 C. After about two minutes the kettle starts to whistle and a thick cloud of steam appears. Explain, with the particle model, why the whistle only starts at this point.',
        },
        {
          explanation:
            'Before the kettle is on, particles in the water are touching but only some are moving fast. A tiny bit of evaporation already happens at the surface, but not much.',
        },
        {
          explanation:
            'The heating element gives energy to the water particles. Their average speed rises and the temperature reading climbs.',
        },
        {
          explanation:
            'When the water reaches 100 C, the boiling point, the particles all through the liquid are now moving fast enough that many can break the forces holding them to their neighbours at the same time.',
          maths: 'temperature held at 100 C, energy now breaks bonds',
        },
        {
          explanation:
            'Bubbles of water vapour form throughout the body of the water. Each bubble holds water particles that have turned into a gas, not air.',
        },
        {
          explanation:
            'The bubbles rush up and out of the spout as steam. The kettle whistles because so much gas is leaving in a short space of time, which is why boiling makes a sound and evaporation does not.',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER (7 questions)
    {
      id: 'cpm-evap-boil-q1',
      type: 'multiple-choice',
      stem: 'Where in a liquid does evaporation take place?',
      tier: 'core',
      options: [
        'Throughout the whole body of the liquid',
        'Only at the bottom of the container',
        'Only at the surface, where the liquid meets the air',
        'In bubbles that rise from the heating element',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Look at scene 1: where did the escaping particles come from?',
      misconceptionId: 'cpm-evap-boil-mc-surface',
    },
    {
      id: 'cpm-evap-boil-q2',
      type: 'multiple-choice',
      stem: 'Pure water is heated in a beaker at sea level. At what temperature does it boil?',
      tier: 'core',
      options: [
        '0 C',
        '100 C',
        '50 C',
        '212 C',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'cpm-evap-boil-q3',
      type: 'multiple-choice',
      stem: 'Which feature is seen during boiling but not during evaporation?',
      tier: 'core',
      options: [
        'The liquid loses mass',
        'Some particles turn into a gas',
        'Bubbles form inside the body of the liquid',
        'Water particles get bigger',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-evap-boil-mc-bubbles-air',
    },
    {
      id: 'cpm-evap-boil-q4',
      type: 'numeric-entry',
      stem: 'A puddle in Sevenoaks holds 200 g of water at 14 C. Over the afternoon it evaporates completely. How many grams of water vapour have entered the air?',
      tier: 'core',
      correctAnswer: 200,
      unit: 'g',
      xpValue: 10,
      hint: 'No particles are created or destroyed when water evaporates; they just move from liquid to gas.',
    },
    {
      id: 'cpm-evap-boil-q5',
      type: 'numeric-entry',
      stem: 'A pan of pure water is heated on a Bunsen at sea level. The temperature climbs steadily. At what temperature in C will the water start to boil?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'C',
      xpValue: 10,
    },
    {
      id: 'cpm-evap-boil-q6',
      type: 'drag-order',
      stem: 'Place these steps for boiling pasta water in order, from the moment the hob is switched on.',
      tier: 'core',
      items: [
        'Bubbles of steam form throughout the water and rush up to the surface.',
        'The water temperature climbs from 15 C towards 100 C as the hob heats it.',
        'A few fast surface particles evaporate slowly into the kitchen air.',
        'The water reaches 100 C, its boiling point, and the temperature stops rising.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
    },
    {
      id: 'cpm-evap-boil-q7',
      type: 'spot-misconception',
      stem: 'Tom says: "Water can only turn into a gas when it reaches 100 C. Below that, the water particles cannot escape."',
      tier: 'core',
      statements: [
        {
          text: 'Tom is right. The water has to be at the boiling point before any particles can turn into a gas.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Evaporation can happen at any temperature above absolute zero, because some surface particles always have enough energy to escape.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-evap-boil-mc-only-at-bp',
    },

    // CONFIDENT TIER (8 questions)
    {
      id: 'cpm-evap-boil-q8',
      type: 'multiple-choice',
      stem: 'Wet school washing dries on a line in the Lake District at 8 C. Which sentence best explains why the washing dries, even though it is far below 100 C?',
      tier: 'confident',
      options: [
        'Some surface water particles have enough energy to escape into the air, so the washing slowly loses water.',
        'The wind splits each water particle into smaller pieces that float away.',
        'The cold air freezes the water, which then turns to a gas inside the cloth.',
        'Water can only leave the cloth by boiling, so the washing will not actually dry.',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpm-evap-boil-mc-wind-blows',
    },
    {
      id: 'cpm-evap-boil-q9',
      type: 'multiple-choice',
      stem: 'A beaker of water is heating on a Bunsen. The thermometer rises from 70 C to 90 C, then suddenly stops at 100 C for several minutes while the water boils. Why does the temperature stop rising?',
      tier: 'confident',
      options: [
        'The thermometer is broken, so the reading is stuck.',
        'The energy from the Bunsen is now used to break the forces between particles, not to raise their speed.',
        'The water is starting to cool down because the steam takes heat away.',
        'The Bunsen flame has gone out, so the water is no longer being heated.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-evap-boil-mc-plateau',
    },
    {
      id: 'cpm-evap-boil-q10',
      type: 'multiple-choice',
      stem: 'When water boils in a kettle, what is inside the bubbles that form in the body of the liquid?',
      tier: 'confident',
      options: [
        'Air, sucked in from the spout',
        'Hot oxygen released by the heating element',
        'Tiny pockets of vacuum with nothing in them',
        'Water vapour, made from the same water particles that were in the liquid',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpm-evap-boil-mc-bubbles-air',
    },
    {
      id: 'cpm-evap-boil-q11',
      type: 'numeric-entry',
      stem: 'A sealed flask holds 350 g of water. A heater inside the flask raises the temperature to 100 C and the water boils for two minutes, but no steam can escape. What is the mass of water (liquid plus vapour) inside the flask in grams?',
      tier: 'confident',
      correctAnswer: 350,
      unit: 'g',
      xpValue: 15,
      hint: 'Mass is conserved during a state change, and the flask is sealed so nothing can get in or out.',
      misconceptionId: 'cpm-evap-boil-mc-mass-loss',
    },
    {
      id: 'cpm-evap-boil-q12',
      type: 'numeric-entry',
      stem: 'Aisha leaves an open mug of tea on a desk for three hours. The mug started with 240 g of tea. After three hours it holds 225 g of tea. How many grams of water have evaporated into the room?',
      tier: 'confident',
      correctAnswer: 15,
      unit: 'g',
      xpValue: 15,
      hint: 'Find the difference between the starting mass and the final mass.',
    },
    {
      id: 'cpm-evap-boil-q13',
      type: 'spot-misconception',
      stem: 'Sophie says: "When the kettle boils, the bubbles you see in the water are bubbles of air that were trapped in the cold water."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. The bubbles are just the air dissolved in cold water coming out as the water heats up.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The bubbles are water vapour, made from water particles that have gained enough energy to turn into a gas inside the liquid.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-evap-boil-mc-bubbles-air',
    },
    {
      id: 'cpm-evap-boil-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: explain, using the particle model, why a puddle in Sevenoaks shrinks over a cool morning at 11 C, even though water needs 100 C to boil.',
      tier: 'confident',
      steps: [
        'Water in the puddle is a liquid. The particles touch each other but have a range of speeds, not all the same.',
        'A few of these fast particles sit right at the surface, where air is above them.',
        null,
        'These particles drift into the air as water vapour, so the puddle slowly loses water and shrinks over the morning.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The fastest surface particles have enough energy to break the forces holding them to their neighbours, so they escape from the liquid as a gas.',
      xpValue: 20,
    },
    {
      id: 'cpm-evap-boil-q15',
      type: 'labelled-image',
      stem: 'Drag each label onto the part of the diagram that matches it.',
      tier: 'confident',
      viewBox: '0 0 300 160',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160"><rect x="0" y="0" width="300" height="160" fill="#FEF3C7"/><g><rect x="20" y="30" width="100" height="110" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><rect x="22" y="80" width="96" height="58" fill="#3B82F6" opacity="0.3"/><line x1="22" y1="80" x2="118" y2="80" stroke="#1E3A8A" stroke-width="1.2"/><g fill="#DC2626"><circle cx="50" cy="74" r="3"/></g><g stroke="#DC2626" stroke-width="1" fill="none"><line x1="50" y1="70" x2="50" y2="55"/><polygon points="46,58 50,50 54,58" fill="#DC2626" stroke="none"/></g><g fill="#A855F7"><circle cx="80" cy="40" r="2.5"/><circle cx="100" cy="55" r="2.5"/></g></g><g><rect x="170" y="30" width="100" height="110" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><rect x="172" y="50" width="96" height="88" fill="#3B82F6" opacity="0.3"/><line x1="172" y1="50" x2="268" y2="50" stroke="#1E3A8A" stroke-width="1.2"/><g fill="#E0F2FE" stroke="#1E3A8A" stroke-width="0.8"><circle cx="190" cy="120" r="4"/><circle cx="215" cy="105" r="5"/><circle cx="240" cy="115" r="4"/><circle cx="200" cy="85" r="4"/><circle cx="230" cy="75" r="3"/><circle cx="245" cy="90" r="3"/></g><g stroke="#94A3B8" stroke-width="2.5" fill="none" opacity="0.5"><path d="M 200 30 Q 195 15 210 5"/><path d="M 230 30 Q 235 15 220 5"/></g></g></svg>',
      hotspots: [
        { id: 'cpm-evap-boil-q15-h1', x: 23, y: 60, correctLabel: 'Evaporation' },
        { id: 'cpm-evap-boil-q15-h2', x: 73, y: 60, correctLabel: 'Boiling' },
      ],
      labels: ['Evaporation', 'Boiling', 'Melting', 'Freezing'],
      xpValue: 20,
    },

    // CHALLENGE TIER (5 questions)
    {
      id: 'cpm-evap-boil-q16',
      type: 'multiple-choice',
      stem: 'A pure liquid X is heated in a beaker. The temperature climbs steadily from 30 C to 60 C, then stays at 78 C for six minutes while bubbles form throughout the liquid, then climbs again. What is the boiling point of liquid X?',
      tier: 'challenge',
      options: [
        '30 C, because that is where heating started',
        '60 C, because that is where the rise paused',
        '78 C, the temperature held while bubbles formed all through the liquid',
        'There is not enough information to decide',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'The boiling point is the fixed temperature at which the liquid turns to a gas throughout its body, not at the start of heating.',
      misconceptionId: 'cpm-evap-boil-mc-any-bubble',
    },
    {
      id: 'cpm-evap-boil-q17',
      type: 'multiple-choice',
      stem: 'A bowl of pasta sauce sits on a hob at 90 C and slowly thickens, even though it never bubbles. After 20 minutes the sauce has lost some mass. Which sentence best explains what has happened to the water particles in the sauce?',
      tier: 'challenge',
      options: [
        'The sauce is boiling silently, since water always boils when it is heated.',
        'The water particles have evaporated from the surface of the sauce at a temperature below 100 C, leaving a thicker sauce behind.',
        'The water has frozen into a thicker layer because the hob is so hot it shocked the particles.',
        'The water particles have shrunk, which makes the sauce thicker.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cpm-evap-boil-mc-only-at-bp',
    },
    {
      id: 'cpm-evap-boil-q18',
      type: 'numeric-entry',
      stem: 'A school technician fills a beaker with 300 g of water and heats it on a Bunsen to a steady boil. After eight minutes, the technician weighs the beaker again and finds 270 g of water is left. None of the water has spilled out. How many grams of water vapour have left the beaker as steam?',
      tier: 'challenge',
      correctAnswer: 30,
      unit: 'g',
      xpValue: 25,
      hint: 'Mass is conserved overall. The water that is missing from the beaker has left as steam, not vanished.',
      misconceptionId: 'cpm-evap-boil-mc-mass-loss',
    },
    {
      id: 'cpm-evap-boil-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a saucepan of water is heated. The pupil sees the temperature climb to 100 C, then sit at 100 C even while the Bunsen keeps going at the same setting. Use the particle model to explain why the temperature stops rising.',
      tier: 'challenge',
      steps: [
        'Below 100 C, the energy from the Bunsen makes the water particles move faster on average. A faster average speed shows up as a higher temperature.',
        'When the water reaches 100 C, the particles are now moving fast enough that many of them can break the forces holding them to their neighbours.',
        null,
        'So the temperature stays at 100 C until all of the water has turned to steam, because the new energy is going into breaking bonds rather than speeding particles up.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The extra energy from the Bunsen now goes into breaking those forces and turning particles into a gas, instead of raising their average speed.',
      xpValue: 25,
      misconceptionId: 'cpm-evap-boil-mc-plateau',
    },
    {
      id: 'cpm-evap-boil-q20',
      type: 'free-text',
      stem: 'A school cook fills a 1.5 litre stockpot with cold tap water and heats it on a gas hob in a Manchester kitchen at sea level. After about ten minutes, the surface of the water shows steady bubbles forming and rising through the body of the water, and the cook adds the pasta. Use the particle model to explain, in two or three sentences, what has happened to the water particles by the time the pot is bubbling, and why the cook can be sure the water is at 100 C without using a thermometer.',
      tier: 'challenge',
      sampleAnswer:
        'The water has reached its boiling point. At 100 C most of the water particles have enough energy to break the forces holding them to their neighbours, so they turn into water vapour inside the body of the liquid and form bubbles that rise to the surface. Because boiling only happens once water reaches 100 C at sea level, the steady bubbles throughout the pot tell the cook that the water is at 100 C, even without a thermometer.',
      keywords: [
        'boiling point',
        '100',
        'bubbles',
        'energy',
        'particles',
        'gas',
      ],
      xpValue: 30,
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): Kind summarises Bar and Travis (1991) on how learners often think "water can only become a gas by boiling, not at lower temperatures", and that evaporation is a phenomenon distinct from changing state.
    {
      id: 'cpm-evap-boil-mc-only-at-bp',
      description:
        'Water can only turn into a gas when it reaches its boiling point at 100 C.',
      triggerAnswer: 'only-at-bp',
      correction:
        'In fact, evaporation happens at any temperature above absolute zero. Some surface particles always have enough energy to escape.',
      reExplanation:
        'Think of a puddle in Sevenoaks at 11 C. The water never boils, but the puddle still shrinks over a few hours. The fastest particles at the surface gain enough energy to break free and drift away as water vapour. Boiling is just a much faster version of the same idea, where most particles, deep in the liquid too, change state at once.',
    },
    // Source: David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26, https://edu.rsc.org/cpd/states-of-matter-and-particle-theory/3010130.article): Paterson flags the bubbles in boiling water as a major misconception target, noting that pupils often say "the bubbles are air" rather than steam, and recommends drawing the bubbles as the gas form of the substance being boiled.
    {
      id: 'cpm-evap-boil-mc-bubbles-air',
      description:
        'The bubbles inside boiling water are bubbles of air that come out of the liquid.',
      triggerAnswer: 'bubbles-air',
      correction:
        'In fact, the bubbles are water vapour. They are made of the same water particles, now in the gas state, that were in the liquid before.',
      reExplanation:
        'If the bubbles were air, the water would lose no mass when it boiled, but it does. Each bubble is a small pocket of steam formed when water particles inside the body of the liquid gain enough energy to break their bonds and become a gas. The bubble then rises and leaves the pot.',
    },
    // Source: AQA GCSE Chemistry examiner report, June 2019, Paper 1 Higher (8462/1H), Q1.4 commentary: examiners noted that many candidates assumed water can only "become a gas" at 100 C and could not distinguish surface evaporation from bulk boiling when asked to explain wet washing drying on a cool day.
    {
      id: 'cpm-evap-boil-mc-surface',
      description:
        'Evaporation happens throughout a liquid, just like boiling does.',
      triggerAnswer: 'surface',
      correction:
        'In fact, evaporation only takes place at the surface of a liquid, where particles can escape into the air above.',
      reExplanation:
        'Picture water particles deep inside a glass. They are surrounded by other water particles on every side, so they have no air to escape into. Only particles right at the top surface have empty space above them, so only they can leave. Boiling is different because bubbles can form throughout the liquid once the temperature reaches the boiling point.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): Kind cites the "temperature plateau during a change of state" misconception, where pupils think the thermometer is broken or the heating has stopped, rather than recognising that the energy is now breaking forces between particles.
    {
      id: 'cpm-evap-boil-mc-plateau',
      description:
        'The temperature must keep rising once a liquid is being heated.',
      triggerAnswer: 'plateau',
      correction:
        'In fact, the temperature stays at the boiling point while the liquid is changing to a gas. The energy goes into breaking bonds, not speeding particles up.',
      reExplanation:
        'Imagine a beaker of water at 100 C on a Bunsen. Particles need extra energy to break the strong forces holding them to their neighbours. While that energy is being used to break bonds, the average speed of the particles stays the same, so the thermometer reads 100 C. Once all the water has turned to steam, the temperature can start rising again.',
    },
    // Source: Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05, https://edu.rsc.org/cpd/teaching-conservation-of-mass-at-14-16/4020902.article): Parks frames the canonical "mass before and after boiling" demonstration to counter the pupil belief that boiling water "loses mass" or that water particles are "destroyed" when they turn to steam.
    {
      id: 'cpm-evap-boil-mc-mass-loss',
      description:
        'Mass is destroyed when water boils, because the steam disappears.',
      triggerAnswer: 'mass-loss',
      correction:
        'In fact, mass is conserved. The steam still contains every water particle that was in the liquid, so its mass equals the mass of the water that left.',
      reExplanation:
        'Boil 100 g of water in a sealed flask and the total mass stays at 100 g. In an open pan the steam drifts off and the pan feels lighter, but if you could catch and weigh all the steam you would get back the missing mass. The particles have only moved from liquid to gas, not vanished.',
    },
    // Source: CGP KS3 Chemistry Study Guide, 2014, p.18 "Common mistake" box on state changes: warns that pupils confuse boiling with bubbling, assuming the bubbles in a heating liquid mean it must already be at the boiling point.
    {
      id: 'cpm-evap-boil-mc-any-bubble',
      description:
        'Any bubbles you see in a heated liquid mean the liquid is boiling.',
      triggerAnswer: 'any-bubble',
      correction:
        'In fact, small bubbles from dissolved air can rise out as water warms. True boiling only starts once the liquid reaches its boiling point and bubbles of vapour form throughout.',
      reExplanation:
        'On a Bunsen, tap water at 70 C may release tiny bubbles. These are just air that was dissolved in cold water, now leaving as the water warms. The water is not yet boiling. True boiling sets in only at 100 C for pure water, when large bubbles of steam form deep in the liquid and rush to the surface.',
    },
    // Authored, no external source. Year 7 classroom observation: when asked why washing dries on a cold day, some pupils answer that the wind or breeze "blows the water away" as droplets rather than as particles. Aligns with the broader "evaporation as a physical pickup, not a change of state" pattern teachers report.
    {
      id: 'cpm-evap-boil-mc-wind-blows',
      description:
        'Washing on a line dries because the wind blows the water away as tiny droplets, not because the water turns into a gas.',
      triggerAnswer: 'wind-blows',
      correction:
        'In fact, the water leaves as a gas, particle by particle. Wind only helps by carrying the water vapour away so more particles can keep escaping.',
      reExplanation:
        'On a still day, washing still dries, just more slowly. The fastest surface water particles always have enough energy to escape into the air as a gas. A breeze sweeps that water vapour away from the cloth, which lets more particles leave from the surface, so the washing dries quicker. The water is not blown off as droplets, it is changing state from liquid to gas.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
