import type { SkillNode } from '@/types/content'

const COLLISIONS_DIAGRAM_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="160" y="22" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Gas in a sealed box</text>

    <!-- Container -->
    <rect x="30" y="40" width="260" height="180" fill="none" stroke="currentColor" stroke-width="2" />

    <!-- Gas particles -->
    <circle cx="70" cy="80" r="6" fill="currentColor" stroke="none" />
    <circle cx="120" cy="120" r="6" fill="currentColor" stroke="none" />
    <circle cx="180" cy="70" r="6" fill="currentColor" stroke="none" />
    <circle cx="230" cy="110" r="6" fill="currentColor" stroke="none" />
    <circle cx="90" cy="180" r="6" fill="currentColor" stroke="none" />
    <circle cx="160" cy="190" r="6" fill="currentColor" stroke="none" />
    <circle cx="240" cy="170" r="6" fill="currentColor" stroke="none" />

    <!-- Motion arrows -->
    <line x1="70" y1="80" x2="55" y2="55" stroke-width="1.5" />
    <polygon points="58,60 52,52 64,55" fill="currentColor" stroke="none" />

    <line x1="120" y1="120" x2="145" y2="100" stroke-width="1.5" />
    <polygon points="140,102 150,98 144,108" fill="currentColor" stroke="none" />

    <line x1="180" y1="70" x2="200" y2="50" stroke-width="1.5" />
    <polygon points="195,52 205,48 200,58" fill="currentColor" stroke="none" />

    <line x1="230" y1="110" x2="260" y2="125" stroke-width="1.5" />
    <polygon points="255,121 263,127 254,129" fill="currentColor" stroke="none" />

    <line x1="90" y1="180" x2="65" y2="200" stroke-width="1.5" />
    <polygon points="70,196 60,202 68,205" fill="currentColor" stroke="none" />

    <line x1="160" y1="190" x2="170" y2="215" stroke-width="1.5" />
    <polygon points="165,210 172,217 175,208" fill="currentColor" stroke="none" />

    <line x1="240" y1="170" x2="270" y2="160" stroke-width="1.5" />
    <polygon points="266,156 273,161 264,164" fill="currentColor" stroke="none" />

    <!-- Wall collision highlight -->
    <circle cx="280" cy="115" r="4" fill="currentColor" stroke="none" />
    <text x="285" y="105" font-size="9" stroke="none" fill="currentColor">hit on wall</text>
  </g>
`

const PRESSURE_VOLUME_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="200" y="22" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Same gas, two volumes</text>

    <!-- Large container -->
    <rect x="30" y="50" width="140" height="170" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="100" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">large volume</text>
    <text x="100" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">lower pressure</text>

    <!-- Particles in large container, sparse -->
    <circle cx="55" cy="80" r="5" fill="currentColor" stroke="none" />
    <circle cx="100" cy="110" r="5" fill="currentColor" stroke="none" />
    <circle cx="140" cy="75" r="5" fill="currentColor" stroke="none" />
    <circle cx="70" cy="160" r="5" fill="currentColor" stroke="none" />
    <circle cx="130" cy="180" r="5" fill="currentColor" stroke="none" />
    <circle cx="155" cy="130" r="5" fill="currentColor" stroke="none" />

    <!-- Small container (same number of particles, squeezed) -->
    <rect x="230" y="100" width="80" height="120" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="270" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">small volume</text>
    <text x="270" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">higher pressure</text>

    <!-- Particles in small container, dense -->
    <circle cx="245" cy="115" r="5" fill="currentColor" stroke="none" />
    <circle cx="270" cy="125" r="5" fill="currentColor" stroke="none" />
    <circle cx="295" cy="115" r="5" fill="currentColor" stroke="none" />
    <circle cx="250" cy="160" r="5" fill="currentColor" stroke="none" />
    <circle cx="280" cy="170" r="5" fill="currentColor" stroke="none" />
    <circle cx="300" cy="195" r="5" fill="currentColor" stroke="none" />

    <!-- Squeeze arrow -->
    <line x1="180" y1="135" x2="220" y2="135" stroke-width="2" />
    <polygon points="215,128 225,135 215,142" fill="currentColor" stroke="none" />
    <text x="200" y="125" text-anchor="middle" font-size="10" stroke="none" fill="currentColor">squeeze</text>

    <text x="200" y="40" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Same number of particles. Smaller volume means more hits per second on every cm squared of wall.</text>
  </g>
`

const PRESSURE_TEMPERATURE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round">
    <text x="200" y="22" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Same can, two temperatures</text>

    <!-- Cool can -->
    <rect x="40" y="50" width="120" height="170" rx="6" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="100" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">cool can (20 C)</text>
    <text x="100" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">lower pressure</text>

    <!-- Slow particles in cool can: short arrows -->
    <circle cx="65" cy="90" r="5" fill="currentColor" stroke="none" />
    <line x1="65" y1="90" x2="73" y2="86" stroke-width="1.5" />

    <circle cx="120" cy="110" r="5" fill="currentColor" stroke="none" />
    <line x1="120" y1="110" x2="113" y2="116" stroke-width="1.5" />

    <circle cx="85" cy="170" r="5" fill="currentColor" stroke="none" />
    <line x1="85" y1="170" x2="92" y2="175" stroke-width="1.5" />

    <circle cx="140" cy="180" r="5" fill="currentColor" stroke="none" />
    <line x1="140" y1="180" x2="133" y2="174" stroke-width="1.5" />

    <!-- Warm can -->
    <rect x="240" y="50" width="120" height="170" rx="6" fill="none" stroke="currentColor" stroke-width="2" />
    <text x="300" y="240" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">warm can (60 C)</text>
    <text x="300" y="255" text-anchor="middle" font-size="11" font-weight="700" stroke="none" fill="currentColor">higher pressure</text>

    <!-- Fast particles in warm can: long arrows -->
    <circle cx="265" cy="90" r="5" fill="currentColor" stroke="none" />
    <line x1="265" y1="90" x2="290" y2="78" stroke-width="1.5" />
    <polygon points="285,75 293,77 286,82" fill="currentColor" stroke="none" />

    <circle cx="320" cy="120" r="5" fill="currentColor" stroke="none" />
    <line x1="320" y1="120" x2="295" y2="135" stroke-width="1.5" />
    <polygon points="300,131 292,137 300,140" fill="currentColor" stroke="none" />

    <circle cx="280" cy="180" r="5" fill="currentColor" stroke="none" />
    <line x1="280" y1="180" x2="305" y2="190" stroke-width="1.5" />
    <polygon points="300,187 308,191 299,194" fill="currentColor" stroke="none" />

    <circle cx="340" cy="170" r="5" fill="currentColor" stroke="none" />
    <line x1="340" y1="170" x2="320" y2="155" stroke-width="1.5" />
    <polygon points="325,153 317,154 324,160" fill="currentColor" stroke="none" />

    <text x="200" y="40" text-anchor="middle" font-size="11" stroke="none" fill="currentColor">Same particles. Warming raises their speed, so hits are more frequent and harder.</text>
  </g>
`

export const gasPressureAndCollisions: SkillNode = {
  id: 'chemistry-particle-model-gas-pressure',
  title: 'Gas Pressure and Particle Collisions',
  description:
    'Use the particle model to explain gas pressure as the result of gas particles colliding with the walls of their container. The frequency of those collisions and the force of each collision both add to the total pressure. Reason qualitatively about how pressure rises when the volume is reduced (same particles, smaller space, more hits per second on every patch of wall) and when the temperature is raised (faster particles, more frequent and harder hits). Work in pascals (Pa) and kilopascals (kPa), with everyday UK contexts: a football pump, a car tyre, an aerosol can on a warm windowsill, a sealed fizzy drink bottle.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'Gas pressure in terms of the particle model; the frequency and force of collisions between gas particles and container walls; how pressure changes with volume and temperature qualitatively.',
    awardingBodies: {
      aqa: '4.2.2.1 The three states of matter, including gas pressure (8462)',
      edexcel: 'Topic 1.6 States of matter; Topic 2.2 Gas behaviour and pressure (1CH0)',
      ocr: 'C1.1b Gas behaviour and pressure explained by the particle model (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-gas-press-scene-1',
      title: 'Particles Hitting the Walls of a Sealed Box',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the random motion of gas particles produces a steady pressure on the walls of a sealed container.',
      data: {
        viewBox: '0 0 320 240',
        svg: COLLISIONS_DIAGRAM_SVG,
        hotspots: [
          {
            id: 'cpm-gas-press-h-1',
            x: 25,
            y: 18,
            label: 'Particles travel in all directions',
            description:
              'Each gas particle moves in a straight line at high speed until it hits something. The directions are spread evenly, so every part of the wall gets hit.',
          },
          {
            id: 'cpm-gas-press-h-2',
            x: 88,
            y: 48,
            label: 'A single hit pushes the wall outwards',
            description:
              'When a particle hits the wall it bounces back. The wall feels a tiny outward push during the bounce. This tiny push is one bit of the total pressure.',
          },
          {
            id: 'cpm-gas-press-h-3',
            x: 50,
            y: 80,
            label: 'Many hits each second add up',
            description:
              'Billions of particles hit the walls every second. The hits are too quick to feel one by one, so the wall feels a steady push spread over its whole area.',
          },
          {
            id: 'cpm-gas-press-h-4',
            x: 50,
            y: 96,
            label: 'Pressure = force per area',
            description:
              'Pressure is the total push from all those hits, shared over each square metre of wall. It is measured in pascals (Pa). One Pa is one newton spread over one square metre.',
          },
        ],
      },
    },
    {
      id: 'cpm-gas-press-scene-2',
      title: 'Squeeze the Gas: How Volume Changes Pressure',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the same gas held in two different volumes and to see why a smaller volume gives a higher pressure.',
      data: {
        viewBox: '0 0 400 260',
        svg: PRESSURE_VOLUME_SVG,
        hotspots: [
          {
            id: 'cpm-gas-press-h-5',
            x: 25,
            y: 35,
            label: 'Large volume, few hits per area',
            description:
              'The same particles roam over a wide space. Hits on any one patch of the wall are spread out in time, so the pressure is lower.',
          },
          {
            id: 'cpm-gas-press-h-6',
            x: 50,
            y: 52,
            label: 'Squeeze without warming',
            description:
              'A bicycle pump with your finger on the outlet squeezes the same air into a much smaller space. No particles are added or removed.',
          },
          {
            id: 'cpm-gas-press-h-7',
            x: 75,
            y: 60,
            label: 'Small volume, many hits per area',
            description:
              'In the smaller volume the particles have less distance to travel between walls, so each patch of wall is hit far more often each second. Pressure rises.',
          },
          {
            id: 'cpm-gas-press-h-8',
            x: 50,
            y: 95,
            label: 'Halve the volume, roughly double the pressure',
            description:
              'At a fixed temperature, halving the volume of a gas roughly doubles its pressure. A tyre pump shows this when you cover the outlet and push the handle down.',
          },
        ],
      },
    },
    {
      id: 'cpm-gas-press-scene-3',
      title: 'Warm the Gas: How Temperature Changes Pressure',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the same can of gas at two temperatures, then read why warming a sealed can raises its pressure.',
      data: {
        viewBox: '0 0 400 260',
        svg: PRESSURE_TEMPERATURE_SVG,
        hotspots: [
          {
            id: 'cpm-gas-press-h-9',
            x: 25,
            y: 40,
            label: 'Cool can: slower particles',
            description:
              'At a lower temperature the gas particles carry less energy and move at lower speeds. The arrows are short.',
          },
          {
            id: 'cpm-gas-press-h-10',
            x: 75,
            y: 40,
            label: 'Warm can: faster particles',
            description:
              'Warming the can raises the energy of every particle. They travel at higher speeds. The arrows are longer.',
          },
          {
            id: 'cpm-gas-press-h-11',
            x: 50,
            y: 75,
            label: 'More hits each second',
            description:
              'Faster particles reach the walls more often, so the wall is hit more times each second by the same number of particles.',
          },
          {
            id: 'cpm-gas-press-h-12',
            x: 50,
            y: 92,
            label: 'Each hit is harder',
            description:
              'A faster particle also pushes the wall harder when it bounces. More hits, each one stronger, gives a higher pressure. This is why an aerosol can in direct sun is a safety risk.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-gas-press-worked-1',
      title: 'Why a football pump gets harder as you push down',
      steps: [
        {
          explanation:
            'A pupil in Manchester holds the outlet of a football pump shut with one finger and pushes the handle down. The handle is easy to move at the start and very stiff near the bottom. Use the particle model to explain why.',
        },
        {
          explanation:
            'At the start, the air in the pump fills the full length of the barrel. The same number of gas particles is spread over a large volume.',
        },
        {
          explanation:
            'Each patch of the inside wall is hit by particles, but the hits per second are spread out because the particles have to travel a long way between bounces. The pressure inside is close to the pressure of the air outside.',
        },
        {
          explanation:
            'As the handle is pushed down, the volume of trapped air shrinks. The same particles now share a much smaller space.',
        },
        {
          explanation:
            'The particles reach the walls much more often each second. The number of hits per square metre of wall goes up, so the pressure inside rises above the outside pressure.',
        },
        {
          explanation:
            'The handle pushes against this growing pressure. Near the bottom of the stroke the inside pressure is several times the outside, so the handle feels stiff.',
        },
      ],
    },
    {
      id: 'cpm-gas-press-worked-2',
      title: 'A deodorant can left on a sunny windowsill',
      steps: [
        {
          explanation:
            'Question: a sealed deodorant aerosol is left on a sunny windowsill in Tunbridge Wells. The label warns "do not store above 50 C". Use the particle model to explain why the pressure inside the can rises as the can warms up.',
        },
        {
          explanation:
            'Inside the sealed can, a fixed number of gas particles is trapped in a fixed volume. No particles can enter or leave.',
        },
        {
          explanation:
            'As the can warms up, the gas particles gain energy from the warmer metal. Their average speed rises.',
        },
        {
          explanation:
            'Faster particles cross the can from wall to wall more often each second, so the number of hits per square metre of wall each second goes up.',
        },
        {
          explanation:
            'A faster particle also bounces off the wall with more force in each hit. More hits per second, each one harder, raises the pressure inside the can.',
        },
        {
          explanation:
            'If the inside pressure climbs above the strength of the metal, the can splits. That is why the label warns against leaving it in direct sun.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-gas-press-q-1',
      type: 'multiple-choice',
      stem: 'What causes the pressure that a gas pushes on the walls of its container?',
      tier: 'core',
      options: [
        'The pull of gravity on the gas, which presses down on the walls.',
        'The weight of the gas resting on the bottom of the container.',
        'Gas particles colliding with the walls of the container.',
        'The gas pulling itself together inside the container.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Picture each gas particle bouncing off the wall and giving it a tiny push.',
      misconceptionId: 'cpm-gas-press-mc-1',
    },
    {
      id: 'cpm-gas-press-q-2',
      type: 'multiple-choice',
      stem: 'Which unit is the right one for pressure?',
      tier: 'core',
      options: [
        'metres',
        'pascals',
        'newtons',
        'litres',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Think of pressure as a force shared over an area. The unit reads "newtons per square metre".',
    },
    {
      id: 'cpm-gas-press-q-3',
      type: 'multiple-choice',
      stem: 'Two facts about a single particle bouncing off the wall together set the pressure of the gas. Which two?',
      tier: 'core',
      options: [
        'The colour of the particle and its mass.',
        'The shape of the container and the type of gas only.',
        'How often the particles hit the wall and how hard each hit is.',
        'The smell of the gas and how full the bottle looks.',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'The hits add up. Both the rate of the hits and the size of each push matter.',
    },
    {
      id: 'cpm-gas-press-q-4',
      type: 'drag-order',
      stem: 'Order these from the lowest pressure inside the can to the highest pressure inside the can. Each can holds the same gas and the same number of particles.',
      tier: 'core',
      items: [
        'A sealed can of 200 cm cubed of gas at 20 C.',
        'The same sealed can warmed to 60 C.',
        'The same gas squeezed into 50 cm cubed at 20 C.',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
      hint: 'Smaller volume crowds the particles harder than a moderate temperature rise.',
    },
    {
      id: 'cpm-gas-press-q-5',
      type: 'spot-misconception',
      stem: 'Liam says: "The pressure of the air in a balloon comes from gravity pulling the air molecules down onto the bottom of the balloon."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Gravity pulls the gas down, so it pushes hardest on the bottom.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The particles move in all directions and hit every part of the inside of the balloon. The pressure pushes outwards in every direction.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-gas-press-mc-2',
    },
    {
      id: 'cpm-gas-press-q-6',
      type: 'numeric-entry',
      stem: 'A sealed jar holds gas at a pressure of 100 kPa. No particles are added or removed, and the temperature does not change. The volume of the jar also stays the same. What is the pressure in kPa five minutes later?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'kPa',
      xpValue: 10,
      hint: 'Nothing about the gas has changed, so why would the pressure change?',
    },
    {
      id: 'cpm-gas-press-q-7',
      type: 'numeric-entry',
      stem: 'A bicycle tyre has been pumped up to a pressure of 250 kPa. The outside air pressure is 100 kPa. How many kPa higher than the outside air is the pressure inside the tyre?',
      tier: 'core',
      correctAnswer: 150,
      unit: 'kPa',
      xpValue: 10,
      hint: 'Find the difference. Tyre pressure minus outside pressure.',
    },
    {
      id: 'cpm-gas-press-q-8',
      type: 'multiple-choice',
      stem: 'Aisha holds her finger over the outlet of a football pump and pushes the handle halfway down. The temperature does not change. What happens to the gas inside the pump?',
      tier: 'confident',
      options: [
        'The number of gas particles drops, so the pressure stays the same.',
        'The volume shrinks, the particles hit each patch of wall more often, and the pressure rises.',
        'The particles get bigger as they are squeezed, so the volume stays the same.',
        'The particles slow down because they have less room, so the pressure falls.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Same particles, same speeds. Only the space changes.',
      misconceptionId: 'cpm-gas-press-mc-3',
    },
    {
      id: 'cpm-gas-press-q-9',
      type: 'multiple-choice',
      stem: 'A sealed metal can of air sits on the bench at 20 C. The can is moved into a warm cupboard at 50 C. The volume of the can does not change. What happens to the pressure inside?',
      tier: 'confident',
      options: [
        'It rises, because the particles move faster and hit the walls more often and harder.',
        'It falls, because the particles spread out further.',
        'It stays the same, because no particles can leave the sealed can.',
        'It rises, because new air particles form inside the can as it warms.',
      ],
      correctIndex: 0,
      xpValue: 15,
      hint: 'Warming gives every particle more energy. Higher speeds mean more frequent, harder hits.',
      misconceptionId: 'cpm-gas-press-mc-4',
    },
    {
      id: 'cpm-gas-press-q-10',
      type: 'multiple-choice',
      stem: 'Why does the pressure in a sealed deodorant can rise when the can is left in direct sun?',
      tier: 'confident',
      options: [
        'The sun adds new gas particles to the can.',
        'The metal walls of the can shrink, leaving less room for the same gas.',
        'The sun makes the gas particles grow larger, so they fill more of the can.',
        'The gas particles gain energy, move faster and hit the walls more often and harder.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Heating the can heats the gas inside it. What does that do to particle speed?',
      misconceptionId: 'cpm-gas-press-mc-5',
    },
    {
      id: 'cpm-gas-press-q-11',
      type: 'spot-misconception',
      stem: 'Sophie says: "When I push a bicycle pump down with my finger over the outlet, the air gets harder to squeeze because the air particles themselves are being squashed smaller."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. The particles get smaller when squeezed, which is why a gas can be compressed.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The particles stay the same size. They were already far apart, so the gaps between them shrink and the hits on the wall get more frequent.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-gas-press-mc-3',
    },
    {
      id: 'cpm-gas-press-q-12',
      type: 'free-text',
      stem: 'A fizzy drink bottle is sealed and left in a fridge overnight. In the morning the bottle feels firm. Later the bottle is left out on a warm kitchen bench for an hour. Use the particle model to explain, in two or three sentences, why the bottle feels firmer when warm than it did when cold. The volume of the bottle does not change.',
      tier: 'confident',
      sampleAnswer:
        'In the warm bottle the gas particles inside have gained energy and move at higher speeds. They reach the inside wall of the bottle more often each second, and each bounce pushes the wall harder. So the same number of particles in the same volume gives a higher pressure when warm, which makes the bottle feel firmer.',
      keywords: ['faster', 'speed', 'energy', 'hit', 'often', 'pressure'],
      xpValue: 20,
      misconceptionId: 'cpm-gas-press-mc-4',
    },
    {
      id: 'cpm-gas-press-q-13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A sealed syringe traps 20 cm cubed of air at room temperature. A pupil pushes the plunger in to halve the volume to 10 cm cubed, while keeping the temperature the same. The pressure inside the syringe roughly doubles. Use the particle model to explain why.',
      tier: 'confident',
      steps: [
        'The same number of air particles is trapped in the syringe before and after the push.',
        'The temperature does not change, so the particles still move at the same average speed.',
        null,
        'So each patch of the inside wall is hit by particles roughly twice as often each second as before, and the pressure roughly doubles.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Halving the volume means the particles have only half the space to travel through, so they reach the walls about twice as often each second, while each hit pushes the wall just as hard as before.',
      xpValue: 20,
      hint: 'Same particles, same speeds, half the room to roam. Think about hits per second.',
    },
    {
      id: 'cpm-gas-press-q-14',
      type: 'numeric-entry',
      stem: 'A sealed syringe holds 60 cm cubed of air at a pressure of 100 kPa. A pupil pushes the plunger in until the trapped air has a volume of 20 cm cubed. The temperature does not change. About what is the new pressure, in kPa? Use the rough rule that halving the volume roughly doubles the pressure.',
      tier: 'confident',
      correctAnswer: 300,
      unit: 'kPa',
      xpValue: 15,
      hint: 'The volume shrinks to one third of the start. So the pressure rises by a factor of about three.',
      misconceptionId: 'cpm-gas-press-mc-6',
    },
    {
      id: 'cpm-gas-press-q-15',
      type: 'slider-explore',
      stem: 'A sealed syringe holds gas at a starting pressure of 100 kPa and a starting volume of 100 cm cubed at a fixed temperature. Set the slider to the new volume that would roughly double the pressure to 200 kPa.',
      tier: 'challenge',
      min: 10,
      max: 100,
      step: 5,
      correctRange: [45, 55],
      label: 'New volume, cm cubed',
      xpValue: 25,
      hint: 'At a fixed temperature, halving the volume roughly doubles the pressure. So aim for half of the starting volume.',
    },
    {
      id: 'cpm-gas-press-q-16',
      type: 'multiple-choice',
      stem: 'A sealed tin of beans is left on a hob ring by mistake. As the tin warms, the metal walls do not move and the lid does not leak. After a few minutes the tin bulges and finally splits. Which statement best explains why?',
      tier: 'challenge',
      options: [
        'The gas inside cooled and shrank, pulling the tin apart from the inside.',
        'Gas particles gained energy, moved faster, hit the walls more often and harder, and the pressure rose above what the metal could hold.',
        'The metal of the tin softened in the heat and fell apart on its own.',
        'New gas particles were created inside the tin by the heat, raising the pressure.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'No particles can enter or leave. The volume is fixed. Only the temperature changes.',
      misconceptionId: 'cpm-gas-press-mc-5',
    },
    {
      id: 'cpm-gas-press-q-17',
      type: 'numeric-entry',
      stem: 'A sealed flask traps 200 cm cubed of gas at a pressure of 80 kPa. The temperature is held constant. The flask is then connected to a piston that squeezes the gas into a volume of 50 cm cubed. Assume the rough rule that halving the volume roughly doubles the pressure works step by step. What is the new pressure, in kPa?',
      tier: 'challenge',
      correctAnswer: 320,
      unit: 'kPa',
      xpValue: 25,
      hint: 'The volume goes 200 to 100 (pressure doubles to 160) then 100 to 50 (pressure doubles again to 320). Two halvings in a row.',
      misconceptionId: 'cpm-gas-press-mc-6',
    },
    {
      id: 'cpm-gas-press-q-18',
      type: 'numeric-entry',
      stem: 'A weather balloon is filled with 4000 cm cubed of helium at ground level at a pressure of 100 kPa. As the balloon rises, the outside air pressure falls. At a high altitude the trapped helium is at a pressure of 25 kPa, while the temperature is held the same for this estimate. About what is the new volume of the gas inside the balloon, in cm cubed? Use the rough rule that pressure and volume are inversely related at fixed temperature.',
      tier: 'challenge',
      correctAnswer: 16000,
      unit: 'cm cubed',
      xpValue: 25,
      hint: 'The pressure has fallen to one quarter of the start. So the volume should grow by a factor of four.',
    },
    {
      id: 'cpm-gas-press-q-19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A sealed plastic bottle of cola is taken from a fridge at 4 C and left on a kitchen counter at 22 C. The volume of the bottle barely changes. Use the particle model to explain why the bottle feels firmer at 22 C than it did at 4 C.',
      tier: 'challenge',
      steps: [
        'The bottle is sealed, so the number of gas particles in the space above the cola does not change.',
        'The volume of that space barely changes, because the plastic only flexes a little.',
        null,
        'Faster particles cross the gas space more often each second and each bounce pushes the wall harder, so the pressure on the inside of the bottle rises, which is what makes the bottle feel firmer.',
      ],
      missingStepIndex: 2,
      correctStep:
        'As the bottle warms from 4 C to 22 C, the gas particles inside gain energy and their average speed rises.',
      xpValue: 25,
      hint: 'Same particles, same volume. The only thing that has changed is the temperature, so think about particle speed.',
    },
    {
      id: 'cpm-gas-press-q-20',
      type: 'multiple-choice',
      stem: 'A pupil reads an exam question and panics. The stem says: "A sealed gas syringe at 20 C holds a pressure of 100 kPa. The syringe is warmed and squeezed at the same time. State which of these two changes raises the pressure, and explain why." Which of these answers is correct?',
      tier: 'challenge',
      options: [
        'Only the squeeze raises the pressure. Warming a sealed gas does not change its pressure as long as the gas stays in the syringe.',
        'Only the warming raises the pressure. Squeezing a fixed amount of gas has no effect on its pressure as long as the temperature is the same.',
        'Both raise the pressure. Warming raises the average particle speed, so hits are more frequent and harder. Squeezing shrinks the volume, so hits per patch of wall are more frequent.',
        'Neither raises the pressure, because the same number of particles is in the same sealed syringe.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Apply both rules in turn. Higher temperature: more energy. Smaller volume: less room. Both raise the hits per area per second.',
      misconceptionId: 'cpm-gas-press-mc-7',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article). Cites studies in which learners attribute gas pressure to the weight of the gas pressing down rather than to particle collisions with the walls.
    {
      id: 'cpm-gas-press-mc-1',
      description:
        'Gas pressure is caused by the weight of the gas pressing down on the bottom of the container.',
      triggerAnswer: 'weight-pressing',
      correction:
        'In fact gas pressure comes from particles colliding with every part of the inside wall. The pressure pushes outwards in every direction, not just downwards.',
      reExplanation:
        'Picture a sealed jar. Gas particles inside fly in random directions at high speed. They hit the top, sides and base of the jar just as often as each other. The wall feels a steady outward push everywhere, not a heavier push on the bottom. This is why a balloon stays roughly round, not flattened at the floor.',
    },
    // Source: AAAS Project 2061 / Atlas of Science Literacy assessment items, "Gas pressure is caused by gravity / by the weight of air". The Project 2061 misconceptions database catalogues "Gases push down due to gravity rather than push outward in all directions" as a persistent Y7-Y9 learner idea.
    {
      id: 'cpm-gas-press-mc-2',
      description:
        'Inside a balloon, gravity pulls the gas to the bottom so the pressure is highest at the bottom of the balloon.',
      triggerAnswer: 'gravity-bottom',
      correction:
        'Gravity has only a tiny effect on gas particles compared to their high speed. They spread evenly through the balloon and hit every part of the inside wall.',
      reExplanation:
        'Each particle moves at hundreds of metres per second. In the short time between hits, gravity barely changes its path. So the particles fill the balloon evenly, and the pressure on the inside is the same on the top, the sides and the bottom. That is why a helium balloon stays round, not pear shaped.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education. The article reports that learners often picture compression as "particles getting smaller" or "particles getting squashed", rather than the gaps between particles shrinking.
    {
      id: 'cpm-gas-press-mc-3',
      description:
        'When a gas is compressed, the particles themselves get smaller or squashed.',
      triggerAnswer: 'particles-shrink',
      correction:
        'The particles stay exactly the same size. What shrinks is the empty space between them. The particles end up closer together and hit the walls more often.',
      reExplanation:
        'A gas is mostly empty space. In a wide syringe the gas particles are spread far apart, with large gaps. When the plunger is pushed in, the same particles share a smaller volume. The gaps shrink, but each particle is the same. The hits on each patch of wall happen more often, so the pressure rises.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, "Gas pressure and the particle model" diagnostic question set. The BEST diagnostics flag the belief "warming a gas just makes it expand and lowers the pressure" as a common Y7-Y8 alternative idea, especially when learners conflate sealed and open systems.
    {
      id: 'cpm-gas-press-mc-4',
      description:
        'Warming a sealed gas spreads it out, so the pressure inside falls.',
      triggerAnswer: 'warm-spreads-lowers',
      correction:
        'In a sealed container the gas cannot spread out, because the volume is fixed. Warming raises the speed of the particles, which raises the pressure.',
      reExplanation:
        'Sealed means no particles can leave and the walls cannot move outwards. Heating gives every particle more energy. Faster particles cross the can in less time and hit each patch of wall more often, and each hit pushes the wall harder. The result is a higher pressure, not a lower one. The aerosol warning label is built on this idea.',
    },
    // Source: AQA GCSE Chemistry examiner report 2019, Paper 1, particle model question on aerosol pressure. The report notes that many learners gave "new gas is made when the can is heated" instead of "the gas particles gain energy and move faster".
    {
      id: 'cpm-gas-press-mc-5',
      description:
        'Warming a sealed can creates new gas particles, which raises the pressure.',
      triggerAnswer: 'new-particles',
      correction:
        'No new particles appear when a gas is warmed. The same particles gain energy and move faster, so they hit the walls more often and harder.',
      reExplanation:
        'Heating a gas is not a chemical reaction. It does not make new particles. Energy from the surroundings is shared out among the particles already there, raising their average speed. With more frequent and harder hits on the walls, the pressure inside the sealed can rises until either the heating stops or the can splits.',
    },
    // Source: AQA GCSE Combined Science examiner report 2022, Chemistry Paper 1. The examiners flagged learners who wrote that "doubling the volume doubles the pressure" instead of recognising the inverse relationship at fixed temperature.
    {
      id: 'cpm-gas-press-mc-6',
      description:
        'At a fixed temperature, doubling the volume of a fixed amount of gas also doubles its pressure.',
      triggerAnswer: 'volume-pressure-direct',
      correction:
        'Volume and pressure work the opposite way round at a fixed temperature. Doubling the volume roughly halves the pressure, because the same particles are spread thinner.',
      reExplanation:
        'Imagine the same number of gas particles in a syringe. If you pull the plunger out so the volume doubles, each patch of wall is hit about half as often each second, because the particles have further to travel between bounces. So the pressure roughly halves. Shrinking the volume does the opposite, which is why a tyre pump gets stiffer the more you push.',
    },
    // Authored, no external source. Year 7 class observation in 2025: several learners said "pressure only matters in a balloon, not in a sealed bottle of fizzy drink, because the bottle is rigid". Aligns with general teaching guidance on identifying sealed vs open systems before applying the particle model.
    {
      id: 'cpm-gas-press-mc-7',
      description:
        'A rigid sealed bottle has no gas pressure inside it, because the walls do not move.',
      triggerAnswer: 'rigid-no-pressure',
      correction:
        'A rigid sealed bottle still holds a pressure. The walls do not move, but particles still hit them every second and push outwards.',
      reExplanation:
        'Pressure is the push from the hits, not the movement of the walls. Pour gas into any sealed container, rigid or stretchy, and the particles will collide with the walls and produce a pressure. A rigid bottle simply means the wall does not flex. That is why a glass bottle of fizzy drink can still feel firm and even shatter if warmed.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
