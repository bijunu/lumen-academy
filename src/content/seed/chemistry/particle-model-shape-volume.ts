import type { SkillNode } from '@/types/content'

export const shapeAndVolume: SkillNode = {
  id: 'chemistry-particle-model-shape-volume',
  title: 'Shape and Volume Fixed-ness',
  description:
    'Use the particle model to explain why each state of matter behaves the way it does in a container. Solids keep both a fixed shape and a fixed volume because their particles sit in a tight grid held by strong forces. Liquids keep a fixed volume but take the shape of any container, because their particles still touch but can slide past each other. Gases have neither a fixed shape nor a fixed volume, because their particles are far apart with almost no forces pulling them together, so they spread out to fill any space they are given.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'Why solids have both fixed shape and fixed volume (particle forces and grid lock); why liquids have fixed volume but not fixed shape (particles free to slide); why gases have neither (particles far apart and unbound).',
    awardingBodies: {
      aqa: '4.2.2.1 The three states of matter; properties related to particle arrangement (8462)',
      edexcel: 'Topic 2.1 States of matter; properties of each state (1CH0)',
      ocr: 'C1.1 The particle model; linking arrangement to observable properties (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-shape-vol-scene-solid-brick',
      title: 'A Brick Keeps Its Shape in Any Room',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a brick keeps both its shape and its volume when you carry it from room to room.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><rect x="0" y="160" width="320" height="20" fill="#D6D3D1"/><g><rect x="30" y="100" width="80" height="50" rx="2" fill="#92400E" stroke="#451A03" stroke-width="1.2"/><text x="70" y="130" text-anchor="middle" font-size="8" font-weight="600" fill="#FEF3C7">in the kitchen</text><text x="70" y="172" text-anchor="middle" font-size="7" fill="#1E3A8A">brick on a worktop</text></g><g><rect x="200" y="100" width="80" height="50" rx="2" fill="#92400E" stroke="#451A03" stroke-width="1.2"/><text x="240" y="130" text-anchor="middle" font-size="8" font-weight="600" fill="#FEF3C7">in the garden</text><text x="240" y="172" text-anchor="middle" font-size="7" fill="#1E3A8A">same brick on a paving slab</text></g><g stroke="#475569" stroke-width="1" fill="none"><path d="M 115 125 L 195 125" stroke-dasharray="3 3"/><polygon points="190,120 200,125 190,130" fill="#475569" stroke="none"/></g><g><rect x="135" y="30" width="50" height="35" rx="2" fill="none" stroke="#1E3A8A" stroke-width="1"/><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.3"><circle cx="142" cy="38" r="3"/><circle cx="152" cy="38" r="3"/><circle cx="162" cy="38" r="3"/><circle cx="172" cy="38" r="3"/><circle cx="142" cy="48" r="3"/><circle cx="152" cy="48" r="3"/><circle cx="162" cy="48" r="3"/><circle cx="172" cy="48" r="3"/><circle cx="142" cy="58" r="3"/><circle cx="152" cy="58" r="3"/><circle cx="162" cy="58" r="3"/><circle cx="172" cy="58" r="3"/></g><text x="160" y="78" text-anchor="middle" font-size="7" fill="#1E3A8A">zoom in: particles in the brick</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-shape-vol-h-brick-grid',
            x: 50,
            y: 30,
            label: 'Tight, repeating grid',
            description:
              'Particles in a solid sit in fixed positions that repeat in a regular pattern. They cannot swap places with their neighbours.',
          },
          {
            id: 'cpm-shape-vol-h-brick-forces',
            x: 50,
            y: 50,
            label: 'Strong forces lock the grid',
            description:
              'Strong forces pull each particle toward the ones around it, so the whole grid holds together even when you tilt or carry the brick.',
          },
          {
            id: 'cpm-shape-vol-h-brick-shape',
            x: 22,
            y: 80,
            label: 'Same shape in any room',
            description:
              'Because each particle stays in its spot, the brick keeps its rectangular shape on the kitchen worktop and on the paving slab.',
          },
          {
            id: 'cpm-shape-vol-h-brick-volume',
            x: 75,
            y: 80,
            label: 'Same volume too',
            description:
              'The number of particles and the gaps between them do not change. The brick takes up the same amount of space wherever you put it.',
          },
        ],
      },
    },
    {
      id: 'cpm-shape-vol-scene-pour-milk',
      title: 'Pouring Milk Between a Jug and a Mug',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why 200 ml of milk fits the jug as a tall column, then sits as a shallow puddle in the mug.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><rect x="0" y="180" width="320" height="20" fill="#D6D3D1"/><g><path d="M 40 50 L 40 170 L 90 170 L 90 50 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><path d="M 40 50 L 95 45 L 95 60 L 40 60 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="42" y="62" width="46" height="106" fill="#E0F2FE" opacity="0.85"/><text x="65" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">jug, 200 ml</text></g><g stroke="#1E3A8A" stroke-width="1" fill="none"><path d="M 100 80 Q 130 80 150 110"/><polygon points="146,107 156,114 150,103" fill="#1E3A8A" stroke="none"/><text x="135" y="75" text-anchor="middle" font-size="7" fill="#1E3A8A">pour</text></g><g><path d="M 180 130 L 180 170 L 260 170 L 260 130 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><path d="M 260 135 Q 280 145 260 160" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="182" y="148" width="76" height="20" fill="#E0F2FE" opacity="0.85"/><text x="220" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">mug, still 200 ml</text></g><g fill="#22C55E" stroke="#14532D" stroke-width="0.4"><circle cx="50" cy="100" r="2"/><circle cx="58" cy="103" r="2"/><circle cx="66" cy="100" r="2"/><circle cx="74" cy="103" r="2"/><circle cx="82" cy="100" r="2"/><circle cx="54" cy="112" r="2"/><circle cx="62" cy="115" r="2"/><circle cx="70" cy="112" r="2"/><circle cx="78" cy="115" r="2"/><circle cx="86" cy="112" r="2"/></g><g fill="#22C55E" stroke="#14532D" stroke-width="0.4"><circle cx="190" cy="155" r="2"/><circle cx="200" cy="158" r="2"/><circle cx="210" cy="155" r="2"/><circle cx="220" cy="158" r="2"/><circle cx="230" cy="155" r="2"/><circle cx="240" cy="158" r="2"/><circle cx="250" cy="155" r="2"/><circle cx="195" cy="163" r="2"/><circle cx="205" cy="160" r="2"/><circle cx="215" cy="163" r="2"/><circle cx="225" cy="160" r="2"/><circle cx="235" cy="163" r="2"/><circle cx="245" cy="160" r="2"/></g></svg>',
        hotspots: [
          {
            id: 'cpm-shape-vol-h-pour-touching',
            x: 22,
            y: 55,
            label: 'Particles still touch',
            description:
              'Liquid particles press against each other with only tiny gaps in between. There is no empty space for them to squeeze into.',
          },
          {
            id: 'cpm-shape-vol-h-pour-slide',
            x: 50,
            y: 35,
            label: 'Free to slide past',
            description:
              'The forces in a liquid are not strong enough to lock the particles in a grid, so each particle can roll past its neighbours.',
          },
          {
            id: 'cpm-shape-vol-h-pour-shape',
            x: 80,
            y: 75,
            label: 'New container, new shape',
            description:
              'In the mug the milk spreads out as a shallow puddle. Its shape changes to match whichever container holds it.',
          },
          {
            id: 'cpm-shape-vol-h-pour-volume',
            x: 80,
            y: 95,
            label: 'Volume stays 200 ml',
            description:
              'No particles are added or lost, and the gaps between them do not change. The total volume is still 200 ml in either container.',
          },
        ],
      },
    },
    {
      id: 'cpm-shape-vol-scene-helium-balloon',
      title: 'Helium in a Party Balloon, Then in a Gym',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens when the helium from a small party balloon is released into a large school gym.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><rect x="0" y="180" width="320" height="20" fill="#D6D3D1"/><g><ellipse cx="60" cy="70" rx="25" ry="32" fill="#FBBF24" stroke="#92400E" stroke-width="1.2"/><polygon points="55,102 65,102 60,110" fill="#92400E"/><line x1="60" y1="110" x2="60" y2="175" stroke="#475569" stroke-width="0.8"/><g fill="#A855F7" stroke="#581C87" stroke-width="0.3"><circle cx="50" cy="60" r="2"/><circle cx="62" cy="55" r="2"/><circle cx="72" cy="65" r="2"/><circle cx="55" cy="75" r="2"/><circle cx="70" cy="80" r="2"/><circle cx="48" cy="85" r="2"/><circle cx="65" cy="90" r="2"/><circle cx="60" cy="68" r="2"/></g><text x="60" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">balloon, about 3 l</text></g><g><rect x="140" y="40" width="170" height="120" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><line x1="140" y1="160" x2="310" y2="160" stroke="#1E3A8A" stroke-width="1.2"/><text x="225" y="195" text-anchor="middle" font-size="7" fill="#1E3A8A">school gym, hundreds of thousands of litres</text><g fill="#A855F7" stroke="#581C87" stroke-width="0.3" opacity="0.85"><circle cx="155" cy="55" r="1.5"/><circle cx="180" cy="65" r="1.5"/><circle cx="210" cy="50" r="1.5"/><circle cx="240" cy="70" r="1.5"/><circle cx="270" cy="55" r="1.5"/><circle cx="295" cy="65" r="1.5"/><circle cx="160" cy="90" r="1.5"/><circle cx="195" cy="85" r="1.5"/><circle cx="225" cy="95" r="1.5"/><circle cx="260" cy="85" r="1.5"/><circle cx="290" cy="100" r="1.5"/><circle cx="150" cy="120" r="1.5"/><circle cx="185" cy="115" r="1.5"/><circle cx="215" cy="130" r="1.5"/><circle cx="250" cy="120" r="1.5"/><circle cx="285" cy="135" r="1.5"/><circle cx="170" cy="150" r="1.5"/><circle cx="220" cy="145" r="1.5"/><circle cx="270" cy="150" r="1.5"/></g></g><g stroke="#475569" stroke-width="0.8" fill="none"><path d="M 90 95 L 135 95" stroke-dasharray="3 3"/><polygon points="130,90 140,95 130,100" fill="#475569" stroke="none"/><text x="115" y="88" text-anchor="middle" font-size="7" fill="#475569">let go</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-shape-vol-h-gas-balloon',
            x: 18,
            y: 35,
            label: 'Balloon: gas fills 3 l',
            description:
              'Inside the balloon the helium particles bounce off the rubber wall on all sides, so the gas takes the shape of the balloon and fills its 3 l volume.',
          },
          {
            id: 'cpm-shape-vol-h-gas-farapart',
            x: 18,
            y: 70,
            label: 'Particles far apart, almost no forces',
            description:
              'Even inside the balloon, helium particles have large empty gaps between them and almost no forces pulling them together.',
          },
          {
            id: 'cpm-shape-vol-h-gas-spread',
            x: 70,
            y: 30,
            label: 'In the gym: spread out',
            description:
              'When the balloon is opened, the helium particles fly off in all directions and spread until they are evenly mixed across the whole gym.',
          },
          {
            id: 'cpm-shape-vol-h-gas-fill',
            x: 70,
            y: 80,
            label: 'Same amount of gas, much bigger volume',
            description:
              'The number of helium particles has not changed. They simply take up the whole gym now, because a gas has no fixed shape or volume.',
          },
        ],
      },
    },
    {
      id: 'cpm-shape-vol-scene-ice-squash',
      title: 'An Ice Cube Melting in a Glass of Squash',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare an ice cube and the puddle of water it leaves behind in a glass of squash.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><rect x="0" y="160" width="320" height="20" fill="#D6D3D1"/><g><path d="M 40 40 L 40 150 L 110 150 L 110 40 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="42" y="60" width="66" height="88" fill="#FB923C" opacity="0.45"/><rect x="55" y="70" width="20" height="20" fill="#E0F2FE" stroke="#1E3A8A" stroke-width="0.8"/><text x="75" y="175" text-anchor="middle" font-size="8" fill="#1E3A8A">before: 200 ml squash + ice</text></g><g><path d="M 200 40 L 200 150 L 270 150 L 270 40 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="202" y="56" width="66" height="92" fill="#FB923C" opacity="0.4"/><text x="235" y="175" text-anchor="middle" font-size="8" fill="#1E3A8A">after: about 215 ml liquid</text></g><g stroke="#475569" stroke-width="1" fill="none"><path d="M 115 95 L 195 95" stroke-dasharray="3 3"/><polygon points="190,90 200,95 190,100" fill="#475569" stroke="none"/><text x="155" y="88" text-anchor="middle" font-size="7" fill="#475569">ice melts</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-shape-vol-h-ice-solid',
            x: 25,
            y: 45,
            label: 'Ice: fixed shape',
            description:
              'The ice cube keeps its own cube shape inside the glass. Solid particles stay locked in a grid.',
          },
          {
            id: 'cpm-shape-vol-h-ice-vol',
            x: 25,
            y: 80,
            label: 'Ice: fixed volume',
            description:
              'The cube also keeps its own volume, around 8 cm cubed. The particles inside it sit in the same positions whether the cube is in a glass or on a plate.',
          },
          {
            id: 'cpm-shape-vol-h-ice-melt',
            x: 72,
            y: 45,
            label: 'After melting: shape of the glass',
            description:
              'Once melted, the water from the cube has no shape of its own. It joins the squash and takes the inside shape of the glass.',
          },
          {
            id: 'cpm-shape-vol-h-ice-vol-similar',
            x: 72,
            y: 85,
            label: 'Volume stays close to the same',
            description:
              'The same particles are still there, so the total volume is similar (215 ml). It is not exactly the same because liquid water packs slightly tighter than ice.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-shape-vol-worked-1',
      title: 'Pouring a Liquid Between Containers',
      steps: [
        {
          explanation:
            'Question: a chef pours 250 ml of orange juice from a tall jug into a wide bowl. Predict the shape and the volume of the juice in the bowl. Use the particle model in your answer.',
        },
        {
          explanation:
            'Step 1. Identify the state. Orange juice is a liquid at room temperature, so its particles touch each other but can slide past their neighbours.',
        },
        {
          explanation:
            'Step 2. Predict the shape. Liquid particles take up no fixed pattern, so the juice flows to fit the inside of the bowl and ends up as a wide, shallow layer.',
          maths: 'shape: takes the shape of the bowl',
        },
        {
          explanation:
            'Step 3. Predict the volume. No particles are added or taken away by pouring, and the gaps between liquid particles barely change, so the total volume stays at 250 ml.',
          maths: 'volume: 250 ml, unchanged',
        },
        {
          explanation:
            'Final answer: the juice changes shape to fit the bowl, but its volume is still 250 ml.',
        },
      ],
    },
    {
      id: 'cpm-shape-vol-worked-2',
      title: 'Helium Released from a Party Balloon',
      steps: [
        {
          explanation:
            'Question: a 3 l party balloon is filled with helium and then untied inside a 30 000 l gym. Predict the shape and the volume the helium ends up taking. Explain using the particle model.',
        },
        {
          explanation:
            'Step 1. Identify the state. Helium is a gas, so its particles are far apart with almost no forces between them.',
        },
        {
          explanation:
            'Step 2. Reason about volume. Once the balloon is open, nothing holds the helium particles together, so they keep moving in all directions until they fill the whole 30 000 l gym.',
          maths: 'volume: about 30 000 l (the gym)',
        },
        {
          explanation:
            'Step 3. Reason about shape. Without strong forces, the gas cannot keep the balloon shape on its own. It takes the inside shape of the gym instead.',
          maths: 'shape: takes the shape of the gym',
        },
        {
          explanation:
            'Final answer: the helium spreads out to fill the gym (about 30 000 l) and takes the gym shape, because a gas has neither a fixed shape nor a fixed volume.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-shape-vol-q1',
      type: 'multiple-choice',
      stem: 'Which state of matter has both a fixed shape and a fixed volume?',
      tier: 'core',
      options: [
        'Gas, because it fills its container',
        'Liquid, because it stays the same amount',
        'Solid, because its particles sit in a fixed grid',
        'Liquid and gas, because they both flow',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Look for the state where particles cannot slide or fly past each other.',
    },
    {
      id: 'cpm-shape-vol-q2',
      type: 'multiple-choice',
      stem: 'A 200 ml jug of milk is poured into a wider mug. What happens to the volume of the milk?',
      tier: 'core',
      options: [
        'It stays at 200 ml',
        'It grows because the mug is wider',
        'It shrinks because the milk is now spread out',
        'It doubles because it changes shape',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'No particles are added or removed by pouring.',
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q3',
      type: 'multiple-choice',
      stem: 'Why can a liquid take the shape of whichever container holds it?',
      tier: 'core',
      options: [
        'Its particles are far apart with no forces between them',
        'Its particles still touch but are free to slide past each other',
        'Its particles get bigger to fill the container',
        'Its particles split into smaller pieces in a new container',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-shape-vol-mis-liquid-grid',
    },
    {
      id: 'cpm-shape-vol-q4',
      type: 'numeric-entry',
      stem: 'A jug holds 350 ml of water. The water is poured into a wide, shallow bowl. What volume of water is now in the bowl, in ml?',
      tier: 'core',
      correctAnswer: 350,
      unit: 'ml',
      xpValue: 10,
      hint: 'The particles do not change in size or number when you pour a liquid.',
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q5',
      type: 'numeric-entry',
      stem: 'A small balloon filled with helium has a volume of 3 l. The balloon is untied inside a 250 l cupboard so all the helium escapes. What total volume of the cupboard does the helium fill, in l?',
      tier: 'core',
      correctAnswer: 250,
      unit: 'l',
      xpValue: 10,
      hint: 'A gas keeps spreading out until it fills the whole space it is given.',
      misconceptionId: 'cpm-shape-vol-mis-gas-stays',
    },
    {
      id: 'cpm-shape-vol-q6',
      type: 'spot-misconception',
      stem: 'Ravi says: "When you pour 200 ml of squash from a tall glass into a wide bowl, the squash spreads out, so its volume goes up."',
      tier: 'core',
      statements: [
        {
          text: 'Ravi is right. A wider container holds more, so 200 ml of squash becomes more squash in a bowl.',
          isMisconception: true,
        },
        {
          text: 'Ravi is wrong. The squash only changes shape. Its volume is still 200 ml because no particles are added or taken away.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q7',
      type: 'drag-order',
      stem: 'Put these states in order from the one that keeps the most shape and volume fixed, down to the one that fixes neither.',
      tier: 'core',
      items: ['Liquid', 'Gas', 'Solid'],
      correctOrder: [2, 0, 1],
      xpValue: 15,
      hint: 'A solid fixes both. A gas fixes neither.',
    },
    {
      id: 'cpm-shape-vol-q8',
      type: 'multiple-choice',
      stem: 'A brick is carried from the kitchen to the garden. Which sentence best describes what happens to its particles?',
      tier: 'confident',
      options: [
        'They rearrange to match the new room',
        'They keep their fixed grid, so the brick keeps its shape and volume',
        'They spread out because the garden is more open',
        'They lose some forces between them and the brick softens',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-shape-from-room',
    },
    {
      id: 'cpm-shape-vol-q9',
      type: 'multiple-choice',
      stem: 'A liquid keeps a fixed volume but not a fixed shape. Which detail of the particle model explains this best?',
      tier: 'confident',
      options: [
        'The forces hold particles touching, but not in a grid',
        'The particles are bigger than in a solid',
        'The particles have no forces between them at all',
        'The particles are in a fixed grid that bends slightly',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-liquid-no-forces',
    },
    {
      id: 'cpm-shape-vol-q10',
      type: 'multiple-choice',
      stem: 'A balloon stretches as more breath is blown into it. Which statement best describes the gas inside?',
      tier: 'confident',
      options: [
        'Each gas particle is growing as the balloon grows',
        'The particles stick to the inside wall in a fixed pattern',
        'The particles drop to the bottom of the balloon as it grows',
        'New particles arrive, and they all spread out to fill the new shape',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-particles-grow',
    },
    {
      id: 'cpm-shape-vol-q11',
      type: 'numeric-entry',
      stem: 'A bottle holds 500 ml of cold water. The water is poured into a kettle, then back into the bottle. What is the volume of water now in the bottle, in ml?',
      tier: 'confident',
      correctAnswer: 500,
      unit: 'ml',
      xpValue: 15,
      hint: 'Pouring a liquid does not change the number of its particles.',
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q12',
      type: 'numeric-entry',
      stem: 'A 50 cm cubed ice cube is dropped into a glass of cold squash. While it is still floating and has not started to melt, what is its volume in cm cubed?',
      tier: 'confident',
      correctAnswer: 50,
      unit: 'cm cubed',
      xpValue: 15,
      hint: 'A solid keeps its grid even while it sits in a liquid.',
      misconceptionId: 'cpm-shape-vol-mis-solid-soft-in-liquid',
    },
    {
      id: 'cpm-shape-vol-q13',
      type: 'spot-misconception',
      stem: 'Priya says: "A gas keeps the shape of its bottle, even after you take the lid off. The particles stay where they are."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. The gas stays put because its particles are slow and gentle.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Gas particles fly off in all directions, so the gas spreads out and fills any new space you give it.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-gas-stays',
    },
    {
      id: 'cpm-shape-vol-q14',
      type: 'drag-order',
      stem: 'Place these descriptions in order, from the state with the strongest forces between particles down to the weakest.',
      tier: 'confident',
      items: [
        'Liquid: forces hold particles touching but not in a grid',
        'Solid: forces lock particles into a fixed grid',
        'Gas: forces are almost zero, so particles fly apart',
      ],
      correctOrder: [1, 0, 2],
      xpValue: 15,
      misconceptionId: 'cpm-shape-vol-mis-liquid-no-forces',
    },
    {
      id: 'cpm-shape-vol-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Aisha pours 150 ml of milk from a tall jug into a wide cereal bowl. Explain why the milk changes shape but keeps the same volume.',
      tier: 'confident',
      steps: [
        'Milk is a liquid at room temperature, so its particles still touch each other but they can slide past their neighbours.',
        'Because the particles can slide, they flow to match the inside of whichever container holds the milk. In the bowl that means a wide, shallow layer.',
        null,
        'So the milk takes the new shape of the bowl, but its volume stays at 150 ml.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Pouring does not add or take away any milk particles, and the tiny gaps between them barely change, so the total amount of space the milk takes up is the same as before.',
      xpValue: 20,
    },
    {
      id: 'cpm-shape-vol-q16',
      type: 'multiple-choice',
      stem: 'A sealed jar holds 0.5 l of carbon dioxide gas. The lid is removed inside a 12 l box and the gas is allowed to mix with the air. What happens to the carbon dioxide particles?',
      tier: 'challenge',
      options: [
        'They sit in the bottom of the jar as a small puddle',
        'They join together to form a liquid in the box',
        'They spread out through the whole 12 l box',
        'They climb out of the jar and float on top of the air in a thin layer',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Think about the forces between gas particles.',
      misconceptionId: 'cpm-shape-vol-mis-gas-stays',
    },
    {
      id: 'cpm-shape-vol-q17',
      type: 'numeric-entry',
      stem: 'A jug holds 400 ml of apple juice. Liam pours all of it into a tall, narrow glass, then tips it back into the jug. Ignoring any tiny spill, what is the volume of juice in the jug now, in ml?',
      tier: 'challenge',
      correctAnswer: 400,
      unit: 'ml',
      xpValue: 25,
      hint: 'Pouring changes shape, not the number of particles.',
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A 3 l balloon of helium is taken into a 27 000 l school gym and untied. The next day no balloon-shaped cloud of helium is left. Explain, using the particle model, why the helium does not stay as a 3 l ball of gas.',
      tier: 'challenge',
      steps: [
        'Helium is a gas, so its particles sit far apart with almost no forces pulling them together.',
        'Once the balloon is open, nothing holds the helium particles in the balloon shape any more.',
        null,
        'So the helium ends up evenly spread through the whole 27 000 l gym, instead of staying as a 3 l ball.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Each particle keeps moving at high speed in a random direction, bouncing off air particles and the walls of the gym, until the gas is spread evenly across the inside of the gym.',
      xpValue: 25,
    },
    {
      id: 'cpm-shape-vol-q19',
      type: 'free-text',
      stem: 'Sophie pours water from a jug into a kettle. She says: "The kettle is wider, so the water now has more volume." Write one or two sentences using the particle model to explain whether Sophie is right.',
      tier: 'challenge',
      sampleAnswer:
        'Sophie is wrong. Pouring a liquid does not add or remove any particles, and the gaps between them stay the same, so the total volume stays the same. The water only changes shape to fit the inside of the kettle.',
      keywords: ['volume', 'particles', 'shape', 'same'],
      xpValue: 25,
      hint: 'Think about whether any particles are added, removed or made bigger when a liquid is poured.',
      misconceptionId: 'cpm-shape-vol-mis-volume-changes',
    },
    {
      id: 'cpm-shape-vol-q20',
      type: 'labelled-image',
      stem: 'Drag each label onto the picture that shows that state in its container.',
      tier: 'challenge',
      viewBox: '0 0 300 100',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><rect x="0" y="0" width="300" height="100" fill="#FEF3C7"/><g><rect x="20" y="55" width="60" height="35" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="35" y="62" width="30" height="20" fill="#92400E" stroke="#451A03" stroke-width="0.6"/></g><g><path d="M 120 50 L 120 90 L 180 90 L 180 50 Z" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="122" y="70" width="56" height="18" fill="#3B82F6" opacity="0.7"/></g><g><rect x="220" y="40" width="60" height="50" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><g fill="#A855F7" stroke="#581C87" stroke-width="0.4" opacity="0.85"><circle cx="230" cy="50" r="2"/><circle cx="245" cy="55" r="2"/><circle cx="260" cy="48" r="2"/><circle cx="272" cy="58" r="2"/><circle cx="235" cy="68" r="2"/><circle cx="255" cy="72" r="2"/><circle cx="270" cy="80" r="2"/><circle cx="232" cy="82" r="2"/><circle cx="248" cy="85" r="2"/></g></g></svg>',
      hotspots: [
        { id: 'cpm-shape-vol-q20-h1', x: 16.7, y: 70, correctLabel: 'Solid' },
        { id: 'cpm-shape-vol-q20-h2', x: 50, y: 70, correctLabel: 'Liquid' },
        { id: 'cpm-shape-vol-q20-h3', x: 83.3, y: 60, correctLabel: 'Gas' },
      ],
      labels: ['Solid', 'Liquid', 'Gas', 'Mixture', 'Element'],
      xpValue: 25,
    },
    {
      id: 'cpm-shape-vol-q21',
      type: 'multiple-choice',
      stem: 'A chemist has 100 ml of ethanol in a beaker. She tips it into a measuring cylinder, then into a flask, ignoring any spill. Which row best describes the shape and volume of the ethanol after these pours?',
      tier: 'challenge',
      options: [
        'Shape: stays the same. Volume: stays at 100 ml.',
        'Shape: changes to match each container. Volume: stays at 100 ml.',
        'Shape: changes. Volume: grows to fill each new container.',
        'Shape: changes. Volume: shrinks because the cylinder is narrow.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Liquids fix one of these and not the other.',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "Many pupils think that when a liquid is poured from one container to another, the amount of liquid changes when the shape changes" (conservation under shape change).
    {
      id: 'cpm-shape-vol-mis-volume-changes',
      description:
        'The volume of a liquid changes when you pour it into a wider or narrower container.',
      triggerAnswer: 'volume-changes',
      correction:
        'In fact the volume of a liquid stays the same when you pour it. Only the shape changes to fit the new container.',
      reExplanation:
        'Picture 200 ml of milk poured from a tall jug into a wide bowl. No milk particles are added or lost by tipping, and the gaps between the particles barely change. The milk simply flows to fit the bowl, so it ends up as a shallow layer of the same 200 ml.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "students may represent gases pictorially by drawing particles accumulating around the sides or at the bottom of the vessel"; reinforced by Novick and Nussbaum (1981) on the failure to see gases as filling their container.
    {
      id: 'cpm-shape-vol-mis-gas-stays',
      description:
        'A gas keeps the shape of its old container, even after the lid is taken off.',
      triggerAnswer: 'gas-stays',
      correction:
        'Actually gas particles have almost no forces between them, so when the lid comes off they spread out to fill any new space they can reach.',
      reExplanation:
        'Imagine helium released from a 3 l balloon into a school gym. The particles fly off in all directions and keep bouncing until they are spread evenly across the gym. The old balloon shape is lost almost at once, because nothing holds the gas in that shape.',
    },
    // Source: David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26): notes that pupils often "draw liquid particles in a regular pattern, like a solid" when asked to model a liquid, missing that liquid particles have no fixed order.
    {
      id: 'cpm-shape-vol-mis-liquid-grid',
      description:
        'Liquid particles sit in a regular grid, the same as solid particles do.',
      triggerAnswer: 'liquid-grid',
      correction:
        'In fact liquid particles touch but sit in no fixed pattern, which is why a liquid can flow and take a new shape.',
      reExplanation:
        'Think of marbles in a bag. They press against each other but shift around when you tilt the bag. Liquid particles do the same. The neat, repeating grid only appears in a solid, where forces hold each particle in one fixed spot.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: pupils often state that "there are no forces between particles in a liquid" once told the liquid can flow, missing the partial force picture.
    {
      id: 'cpm-shape-vol-mis-liquid-no-forces',
      description:
        'There are no forces between the particles in a liquid, because a liquid can flow.',
      triggerAnswer: 'liquid-no-forces',
      correction:
        'Actually forces in a liquid are real and strong enough to hold particles touching, but too weak to lock them in a grid.',
      reExplanation:
        'If there were no forces between water particles, water would behave like a gas and fly apart to fill any room. Instead it pools in a glass, with the particles pressing up against each other. The forces are weaker than in ice, but they are very much there.',
    },
    // Source: Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05): describes the wider classroom finding that pupils think the properties of a solid (its shape, volume or even mass) change when the solid is moved into a new container or environment.
    {
      id: 'cpm-shape-vol-mis-shape-from-room',
      description:
        'A solid takes the shape of whatever room or container it is placed in.',
      triggerAnswer: 'shape-from-room',
      correction:
        'In fact solid particles sit in a fixed grid, so a solid keeps its own shape and volume in any room or container.',
      reExplanation:
        'Carry a brick from the kitchen to the garden. The particles inside it stay in the same fixed positions, so the brick still looks like a brick wherever you put it. Only liquids and gases take the shape of their container, because their particles can move out of place.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "particles expand when they are heated" and the related belief that particles grow to fill a larger space, applied here to gases in a balloon.
    {
      id: 'cpm-shape-vol-mis-particles-grow',
      description:
        'When a gas fills a bigger container, each gas particle grows to fill the new space.',
      triggerAnswer: 'particles-grow',
      correction:
        'Actually each particle stays the same size. The same particles simply spread out further, with bigger gaps between them.',
      reExplanation:
        'Picture the helium particles from a balloon. Letting them into a larger gym does not make any single particle bigger. The particles just fly further before they bounce off another particle, so the same number of them ends up evenly spread across the new room.',
    },
    // Authored, no external source. Classroom-observed Year 7 confusion between dissolving and a state change; aligns with the "dissolving versus melting" boundary work in docs/05-reference-shelf.md notes.
    {
      id: 'cpm-shape-vol-mis-solid-soft-in-liquid',
      description:
        'A solid loses its fixed shape and volume as soon as you drop it into a liquid.',
      triggerAnswer: 'solid-in-liquid',
      correction:
        'Actually a solid keeps its grid in a liquid. Its shape and volume only change if it melts or dissolves, which are different processes.',
      reExplanation:
        'An ice cube dropped into squash still looks like a cube while it floats. The cube only stops being a cube once its particles gain enough energy to break out of the grid and melt into the squash. Sitting in a liquid is not enough on its own.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14],
  },
}
