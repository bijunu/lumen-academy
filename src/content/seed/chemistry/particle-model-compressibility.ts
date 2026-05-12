import type { SkillNode } from '@/types/content'

// Scene SVGs lifted out as constants so the InteractiveScene literals stay readable.

const PARTICLE_SPACING_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120">
  <rect x="0" y="0" width="300" height="120" fill="#F8FAFC"/>
  <g>
    <rect x="10" y="20" width="80" height="80" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="50" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#1E3A8A">SOLID</text>
    <g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6">
      <circle cx="22" cy="32" r="6"/><circle cx="38" cy="32" r="6"/><circle cx="54" cy="32" r="6"/><circle cx="70" cy="32" r="6"/>
      <circle cx="22" cy="48" r="6"/><circle cx="38" cy="48" r="6"/><circle cx="54" cy="48" r="6"/><circle cx="70" cy="48" r="6"/>
      <circle cx="22" cy="64" r="6"/><circle cx="38" cy="64" r="6"/><circle cx="54" cy="64" r="6"/><circle cx="70" cy="64" r="6"/>
      <circle cx="22" cy="80" r="6"/><circle cx="38" cy="80" r="6"/><circle cx="54" cy="80" r="6"/><circle cx="70" cy="80" r="6"/>
    </g>
    <text x="50" y="115" text-anchor="middle" font-size="8" fill="#475569">no gaps to squash</text>
  </g>
  <g>
    <rect x="110" y="20" width="80" height="80" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="150" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#14532D">LIQUID</text>
    <g fill="#22C55E" stroke="#14532D" stroke-width="0.6">
      <circle cx="122" cy="34" r="6"/><circle cx="138" cy="36" r="6"/><circle cx="154" cy="32" r="6"/><circle cx="172" cy="36" r="6"/><circle cx="186" cy="34" r="6"/>
      <circle cx="120" cy="50" r="6"/><circle cx="136" cy="52" r="6"/><circle cx="152" cy="48" r="6"/><circle cx="170" cy="52" r="6"/><circle cx="186" cy="50" r="6"/>
      <circle cx="122" cy="66" r="6"/><circle cx="140" cy="68" r="6"/><circle cx="158" cy="66" r="6"/><circle cx="174" cy="70" r="6"/><circle cx="188" cy="66" r="6"/>
      <circle cx="120" cy="82" r="6"/><circle cx="138" cy="84" r="6"/><circle cx="156" cy="82" r="6"/><circle cx="172" cy="84" r="6"/><circle cx="188" cy="82" r="6"/>
    </g>
    <text x="150" y="115" text-anchor="middle" font-size="8" fill="#475569">still touching, tiny gaps</text>
  </g>
  <g>
    <rect x="210" y="20" width="80" height="80" fill="#FFFFFF" stroke="#94A3B8"/>
    <text x="250" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#581C87">GAS</text>
    <g fill="#A855F7" stroke="#581C87" stroke-width="0.6">
      <circle cx="222" cy="32" r="4"/><circle cx="268" cy="28" r="4"/><circle cx="282" cy="52" r="4"/>
      <circle cx="240" cy="62" r="4"/><circle cx="220" cy="82" r="4"/><circle cx="272" cy="86" r="4"/>
    </g>
    <text x="250" y="115" text-anchor="middle" font-size="8" fill="#475569">large empty space between</text>
  </g>
</svg>`

const BICYCLE_PUMP_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160">
  <rect x="0" y="0" width="300" height="160" fill="#FEF3C7"/>
  <g>
    <text x="75" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">Bicycle pump: gas</text>
    <rect x="30" y="40" width="90" height="80" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
    <rect x="30" y="40" width="90" height="20" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <line x1="75" y1="40" x2="75" y2="20" stroke="#475569" stroke-width="3"/>
    <circle cx="75" cy="18" r="6" fill="#475569"/>
    <text x="125" y="55" font-size="8" fill="#475569">piston pushes down</text>
    <path d="M 75 25 L 75 38" stroke="#DC2626" stroke-width="1.5" marker-end="url(#arrowR)"/>
    <g fill="#A855F7" stroke="#581C87" stroke-width="0.6">
      <circle cx="44" cy="78" r="3"/><circle cx="62" cy="70" r="3"/><circle cx="80" cy="84" r="3"/>
      <circle cx="98" cy="74" r="3"/><circle cx="52" cy="100" r="3"/><circle cx="70" cy="108" r="3"/>
      <circle cx="88" cy="98" r="3"/><circle cx="106" cy="110" r="3"/>
    </g>
    <text x="75" y="140" text-anchor="middle" font-size="8" fill="#475569">large gaps shrink</text>
  </g>
  <g>
    <text x="225" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">Brake line: liquid</text>
    <rect x="180" y="40" width="90" height="80" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
    <rect x="180" y="40" width="90" height="20" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <line x1="225" y1="40" x2="225" y2="20" stroke="#475569" stroke-width="3"/>
    <circle cx="225" cy="18" r="6" fill="#475569"/>
    <text x="275" y="55" font-size="8" fill="#475569" text-anchor="end">piston barely moves</text>
    <path d="M 225 25 L 225 32" stroke="#DC2626" stroke-width="1.5" marker-end="url(#arrowR)"/>
    <g fill="#22C55E" stroke="#14532D" stroke-width="0.6">
      <circle cx="190" cy="68" r="4"/><circle cx="202" cy="70" r="4"/><circle cx="214" cy="68" r="4"/><circle cx="226" cy="72" r="4"/><circle cx="238" cy="68" r="4"/><circle cx="250" cy="72" r="4"/><circle cx="262" cy="68" r="4"/>
      <circle cx="190" cy="82" r="4"/><circle cx="202" cy="84" r="4"/><circle cx="214" cy="82" r="4"/><circle cx="226" cy="86" r="4"/><circle cx="238" cy="82" r="4"/><circle cx="250" cy="86" r="4"/><circle cx="262" cy="82" r="4"/>
      <circle cx="190" cy="96" r="4"/><circle cx="202" cy="98" r="4"/><circle cx="214" cy="96" r="4"/><circle cx="226" cy="100" r="4"/><circle cx="238" cy="96" r="4"/><circle cx="250" cy="100" r="4"/><circle cx="262" cy="96" r="4"/>
      <circle cx="190" cy="110" r="4"/><circle cx="202" cy="112" r="4"/><circle cx="214" cy="110" r="4"/><circle cx="226" cy="114" r="4"/><circle cx="238" cy="110" r="4"/><circle cx="250" cy="114" r="4"/><circle cx="262" cy="110" r="4"/>
    </g>
    <text x="225" y="140" text-anchor="middle" font-size="8" fill="#475569">particles already touch</text>
  </g>
  <defs>
    <marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/>
    </marker>
  </defs>
</svg>`

const SYRINGE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160">
  <rect x="0" y="0" width="300" height="160" fill="#F1F5F9"/>
  <g>
    <text x="75" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">Syringe of air</text>
    <text x="75" y="32" text-anchor="middle" font-size="9" fill="#475569">finger sealing the tip</text>
    <rect x="50" y="40" width="50" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
    <rect x="50" y="40" width="50" height="14" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <line x1="75" y1="40" x2="75" y2="20" stroke="#475569" stroke-width="2"/>
    <rect x="48" y="128" width="54" height="6" fill="#475569"/>
    <path d="M 64 130 L 86 130 L 86 142 L 64 142 Z" fill="#FDE68A" stroke="#92400E"/>
    <text x="113" y="80" font-size="8" fill="#475569">push hard:</text>
    <text x="113" y="92" font-size="8" fill="#475569">piston travels</text>
    <text x="113" y="104" font-size="8" fill="#475569">about half way</text>
    <g fill="#A855F7" stroke="#581C87" stroke-width="0.5">
      <circle cx="58" cy="70" r="2"/><circle cx="72" cy="65" r="2"/><circle cx="88" cy="75" r="2"/>
      <circle cx="62" cy="90" r="2"/><circle cx="80" cy="88" r="2"/><circle cx="94" cy="95" r="2"/>
      <circle cx="56" cy="110" r="2"/><circle cx="72" cy="118" r="2"/><circle cx="90" cy="115" r="2"/>
    </g>
  </g>
  <g>
    <text x="225" y="18" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">Syringe of water</text>
    <text x="225" y="32" text-anchor="middle" font-size="9" fill="#475569">finger sealing the tip</text>
    <rect x="200" y="40" width="50" height="90" fill="#DBEAFE" stroke="#475569" stroke-width="1.5"/>
    <rect x="200" y="40" width="50" height="14" fill="#CBD5E1" stroke="#475569" stroke-width="1.5"/>
    <line x1="225" y1="40" x2="225" y2="20" stroke="#475569" stroke-width="2"/>
    <rect x="198" y="128" width="54" height="6" fill="#475569"/>
    <path d="M 214 130 L 236 130 L 236 142 L 214 142 Z" fill="#FDE68A" stroke="#92400E"/>
    <text x="158" y="80" font-size="8" fill="#475569" text-anchor="end">push hard:</text>
    <text x="158" y="92" font-size="8" fill="#475569" text-anchor="end">piston hardly</text>
    <text x="158" y="104" font-size="8" fill="#475569" text-anchor="end">moves at all</text>
  </g>
</svg>`

export const compressibility: SkillNode = {
  id: 'chemistry-particle-model-compressibility',
  title: 'Compressibility',
  description:
    'Use the particle model to explain why a gas can be squashed into a much smaller volume, while a liquid can barely be squashed and a solid not at all. The key idea is the size of the gap between particles. In a gas the particles are far apart with empty space in between, so a force can push them closer. In a liquid and a solid the particles are already touching, so there is almost nothing to squash out. Apply this to real UK contexts: a bicycle pump filling a tyre, a hydraulic car brake line, a syringe of air versus a syringe of water.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'Why solids are incompressible and liquids are almost incompressible, but gases are compressible, explained by particle spacing and the empty space between particles.',
    awardingBodies: {
      aqa: '4.2.2.1 States of matter; compressibility explained by the particle model (8462)',
      edexcel: 'Topic 2.1 States of matter; behaviour under compression (1CH0)',
      ocr: 'C1.1 The particle model; explaining why gases are compressible but solids are not (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-compress-scene-spacing',
      title: 'Where the Empty Space Lives',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the gaps between particles in a solid, a liquid and a gas.',
      data: {
        viewBox: '0 0 300 120',
        svg: PARTICLE_SPACING_SVG,
        hotspots: [
          {
            id: 'cpm-compress-h-spacing-solid',
            x: 17,
            y: 50,
            label: 'Solid: no gaps to close',
            description:
              'Particles sit in a fixed grid, touching every neighbour. There is no empty space to push out, so a solid cannot be squashed smaller.',
          },
          {
            id: 'cpm-compress-h-spacing-liquid',
            x: 50,
            y: 50,
            label: 'Liquid: particles already touch',
            description:
              'Particles are jumbled but still touching. The gaps between them are tiny, so a liquid can only be squashed a very small amount.',
          },
          {
            id: 'cpm-compress-h-spacing-gas',
            x: 83,
            y: 50,
            label: 'Gas: lots of empty space',
            description:
              'Particles are far apart with empty space between them. A force can push them much closer together, so a gas is easy to compress.',
          },
        ],
      },
    },
    {
      id: 'cpm-compress-scene-pump-vs-brake',
      title: 'Bicycle Pump vs Hydraulic Brake',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a bicycle pump squashes air easily, but a brake line of oil barely squashes at all.',
      data: {
        viewBox: '0 0 300 160',
        svg: BICYCLE_PUMP_SVG,
        hotspots: [
          {
            id: 'cpm-compress-h-pump-gas',
            x: 25,
            y: 50,
            label: 'Pump: gas inside',
            description:
              'Inside a bicycle pump is air, a gas. There is a lot of empty space between the particles, so the piston travels a long way before the gas resists.',
          },
          {
            id: 'cpm-compress-h-pump-result',
            x: 25,
            y: 88,
            label: 'Particles forced closer',
            description:
              'The piston pushes the gas particles into a smaller volume. The same particles are still there, just packed into less space.',
          },
          {
            id: 'cpm-compress-h-brake-liquid',
            x: 75,
            y: 50,
            label: 'Brake line: liquid inside',
            description:
              'A hydraulic brake line is filled with oil, a liquid. The particles are already touching, so there is almost no gap to close.',
          },
          {
            id: 'cpm-compress-h-brake-result',
            x: 75,
            y: 88,
            label: 'Force passes straight on',
            description:
              'When the brake pedal pushes the piston, the oil hardly squashes. Instead it carries the push along the line to the brake disc at the wheel.',
          },
        ],
      },
    },
    {
      id: 'cpm-compress-scene-syringe',
      title: 'Two Syringes, Two Results',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare what happens when you press the piston on a syringe of air against a syringe of water, with a finger sealing the tip.',
      data: {
        viewBox: '0 0 300 160',
        svg: SYRINGE_SVG,
        hotspots: [
          {
            id: 'cpm-compress-h-syringe-air',
            x: 25,
            y: 55,
            label: 'Air syringe',
            description:
              'The air inside is a gas. When you press the piston, you can squash 20 ml of air down to about 10 ml before the gas pushes back too hard.',
          },
          {
            id: 'cpm-compress-h-syringe-air-feel',
            x: 25,
            y: 88,
            label: 'Springy feel',
            description:
              'As the gas particles are forced closer, they hit the inside walls more often. The push back grows the more you squash, so the piston feels springy.',
          },
          {
            id: 'cpm-compress-h-syringe-water',
            x: 75,
            y: 55,
            label: 'Water syringe',
            description:
              'The water inside is a liquid. The piston hardly moves, even when you press very hard. The volume stays at almost 20 ml.',
          },
          {
            id: 'cpm-compress-h-syringe-water-feel',
            x: 75,
            y: 88,
            label: 'Solid wall feel',
            description:
              'There is almost no empty space between the water particles. They will not slide closer, so the piston meets a near solid wall of resistance.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-compress-worked-1',
      title: 'Why a bicycle pump works but a brake line cannot be squashed',
      steps: [
        {
          explanation:
            'Question: a cyclist pushes a bicycle pump down and the piston travels half the barrel before the air resists. A driver presses a hydraulic brake pedal connected to a brake line full of oil and the piston barely moves. Explain the difference using the particle model.',
        },
        {
          explanation:
            'Step 1: name the state of matter in each device. The bicycle pump holds air, which is a gas. The brake line holds oil, which is a liquid.',
        },
        {
          explanation:
            'Step 2: picture the particles. In a gas the particles are far apart with large empty spaces between them. In a liquid the particles are touching each other with only tiny gaps in between.',
        },
        {
          explanation:
            'Step 3: think about what compressing does. Compressing means forcing the particles closer together. There is only room to do this if there is empty space to close up.',
        },
        {
          explanation:
            'Step 4: apply this to the pump. The pump holds gas, so the piston can shove the particles into a much smaller volume before they push back. The gas is easy to compress.',
        },
        {
          explanation:
            'Step 5: apply this to the brake line. The oil particles are already touching, so there is almost no space to close. The piston meets a near solid wall of liquid, so the force passes straight along the line.',
        },
        {
          explanation:
            'So a gas is compressible because of large empty gaps between particles, and a liquid is almost incompressible because its particles already touch.',
        },
      ],
    },
    {
      id: 'cpm-compress-worked-2',
      title: 'Squashing a syringe of air from 24 ml down to 8 ml',
      steps: [
        {
          explanation:
            'Question: a sealed syringe holds 24 ml of air. A pupil pushes the piston in until the trapped air takes up just 8 ml. The temperature does not change. What has happened to the air particles? Has the mass changed?',
        },
        {
          explanation:
            'Step 1: write down what is fixed and what has changed. The syringe is sealed, so the number of air particles is fixed. The volume has changed from 24 ml to 8 ml.',
          maths: 'volume: 24 ml then 8 ml',
        },
        {
          explanation:
            'Step 2: work out how the volume has changed. 8 ml is one third of 24 ml, so the same particles are now packed into one third of the space.',
          maths: '8 / 24 = 1 / 3',
        },
        {
          // Missing step (gap for missing-step pedagogy practice): the renderer hides this step and the learner must reason about particle spacing themselves.
          explanation:
            'Step 3: think about the gaps. The particles themselves do not change size, so what must shrink is the empty space between them. The gaps have closed up.',
        },
        {
          explanation:
            'Step 4: now mass. Mass is the total of the matter in the syringe. No particles have entered or left because it is sealed, so the mass of the air is exactly the same as before.',
        },
        {
          explanation:
            'So the air has been squashed into one third of its volume by closing the gaps between particles, while the mass of the air stays the same.',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER (7 questions)
    {
      id: 'cpm-compress-q1',
      type: 'multiple-choice',
      stem: 'Which state of matter is the easiest to squash into a smaller volume?',
      tier: 'core',
      options: ['Solid', 'Liquid', 'Gas', 'Solids and liquids equally'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Think about which state has the largest empty space between its particles.',
      misconceptionId: 'cpm-compress-mis-all-squash',
    },
    {
      id: 'cpm-compress-q2',
      type: 'multiple-choice',
      stem: 'Why can a gas be squashed into a much smaller volume?',
      tier: 'core',
      options: [
        'Gas particles are smaller than liquid or solid particles',
        'Gas particles shrink when a force pushes on them',
        'Gas particles stick together when you squash them',
        'There is a lot of empty space between gas particles that can be closed up',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cpm-compress-mis-particles-shrink',
    },
    {
      id: 'cpm-compress-q3',
      type: 'multiple-choice',
      stem: 'Why is a solid block of iron almost impossible to squash into a smaller volume?',
      tier: 'core',
      options: [
        'Iron particles are too heavy to move',
        'The particles are touching in a fixed grid, so there is no space to close up',
        'Iron does not contain any particles, just metal',
        'The forces inside iron repel the squashing force completely',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-compress-mis-solid-tiny-gaps',
    },
    {
      id: 'cpm-compress-q4',
      type: 'multiple-choice',
      stem: 'What is in the gaps between the particles of a gas inside a sealed jar?',
      tier: 'core',
      options: [
        'Air pressing on the particles',
        'Tiny bits of dust',
        'Nothing, the gaps are empty space',
        'Smaller particles of the same gas',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-compress-mis-air-fills-gaps',
    },
    {
      id: 'cpm-compress-q5',
      type: 'drag-order',
      stem: 'Place the three states of matter in order from the easiest to squash into a smaller volume, to the hardest.',
      tier: 'core',
      items: ['Liquid', 'Gas', 'Solid'],
      correctOrder: [1, 0, 2],
      xpValue: 10,
      hint: 'The state with the biggest gaps between particles is the easiest to squash.',
    },
    {
      id: 'cpm-compress-q6',
      type: 'numeric-entry',
      stem: 'A sealed syringe of water holds 20 ml. A pupil presses the piston as hard as they can. To the nearest millilitre, what volume is left in the syringe?',
      tier: 'core',
      correctAnswer: 20,
      tolerance: 0,
      unit: 'ml',
      xpValue: 10,
      hint: 'Water is a liquid, so its particles are already touching.',
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q7',
      type: 'spot-misconception',
      stem: 'Liam says: "When I push down a bicycle pump, I am squashing the air particles. They become smaller, which is why they fit in less space."',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Each gas particle gets smaller when it is squashed.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. The particles stay the same size; the empty space between them is what closes up.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-compress-mis-particles-shrink',
    },
    // CONFIDENT TIER (8 questions)
    {
      id: 'cpm-compress-q8',
      type: 'multiple-choice',
      stem: 'Why is a hydraulic car brake line filled with oil and not with air?',
      tier: 'confident',
      options: [
        'Air is too heavy and would slow the brake response',
        'Oil particles already touch, so the push passes straight along the line; air would squash and waste the push',
        'Air would dissolve the inside of the brake line',
        'Oil flows faster than air, so the pedal feels more responsive',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'A brake needs to pass the driver\'s push from the pedal straight to the wheel.',
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q9',
      type: 'multiple-choice',
      stem: 'Aisha squashes a sealed syringe of air from 30 ml down to 10 ml at room temperature. What has happened to the air particles?',
      tier: 'confident',
      options: [
        'A third of the particles have leaked out of the syringe',
        'The particles have joined together to form a liquid',
        'The particles have been pushed closer together so the gaps between them are smaller',
        'Each particle is now a third of its original size',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'The syringe is sealed, so the number of particles cannot change.',
      misconceptionId: 'cpm-compress-mis-leak-on-squash',
    },
    {
      id: 'cpm-compress-q10',
      type: 'multiple-choice',
      stem: 'A sealed bottle of squash is full to the brim with liquid, with no air gap at the top. The cap is screwed on tight. Why is the bottle very hard to crush by pressing on its sides?',
      tier: 'confident',
      options: [
        'The plastic of the bottle is too strong to bend',
        'The liquid particles are already touching, so there is almost no space to close up',
        'The liquid particles push back harder than gas particles can',
        'The cap holds the bottle in shape from the inside',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q11',
      type: 'numeric-entry',
      stem: 'A sealed 50 ml syringe of air is held at room temperature. A force pushes the piston in until the trapped air takes up 10 ml. The temperature has not changed. What is the new volume of the air in millilitres?',
      tier: 'confident',
      correctAnswer: 10,
      unit: 'ml',
      xpValue: 15,
      hint: 'Read the question carefully. The volume of the air is whatever volume of the syringe it now fills.',
    },
    {
      id: 'cpm-compress-q12',
      type: 'numeric-entry',
      stem: 'A sealed syringe holds 0.060 g of air. A pupil pushes the piston in until the air takes up half its original volume. The syringe stays sealed and the temperature does not change. To three decimal places, what is the mass of the air now, in grams?',
      tier: 'confident',
      correctAnswer: 0.06,
      tolerance: 0.001,
      unit: 'g',
      xpValue: 15,
      hint: 'The syringe is sealed, so no particles can enter or leave.',
      misconceptionId: 'cpm-compress-mis-mass-shrinks',
    },
    {
      id: 'cpm-compress-q13',
      type: 'spot-misconception',
      stem: 'Sophie says: "Liquids can be squashed about half as easily as gases. The piston on a water syringe should move about half as far as on an air syringe."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. Liquids are noticeably easier to squash than solids but harder than gases.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. Liquid particles already touch, so a water syringe piston barely moves at all.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q14',
      type: 'numeric-entry',
      stem: 'A diver fills a 12 litre rigid scuba tank with air at the South Coast. The tank is sealed and rigid, so its inside volume cannot change. The diver checks the tank an hour later. What volume in litres does the air inside the tank fill?',
      tier: 'confident',
      correctAnswer: 12,
      unit: 'L',
      xpValue: 15,
      hint: 'A gas always spreads out to fill the whole space inside its container.',
    },
    {
      id: 'cpm-compress-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a pupil presses the piston of a sealed syringe of air from 30 ml down to 15 ml at room temperature. Use the particle model to explain how the same number of particles now fits in half the volume.',
      tier: 'confident',
      steps: [
        'The syringe is sealed, so the number of air particles inside cannot change.',
        'In a gas the particles are far apart with large empty spaces between them.',
        null,
        'The particles themselves do not change size, so the same number of particles now fits inside 15 ml instead of 30 ml because the empty space has been squashed out.',
      ],
      missingStepIndex: 2,
      correctStep:
        'When the piston pushes in, the gas particles are forced closer together and the empty spaces between them shrink.',
      xpValue: 20,
    },
    // CHALLENGE TIER (6 questions)
    {
      id: 'cpm-compress-q16',
      type: 'multiple-choice',
      stem: 'A 2 litre bicycle pump fills a tyre. To fully inflate the tyre, the cyclist makes 12 full strokes of the pump. The pump barrel is the same air each time but cannot leak. What does this tell you about how much the gas has been compressed each stroke compared with a bottle of water of the same volume?',
      tier: 'challenge',
      options: [
        'The gas can be compressed into a small fraction of its starting volume each stroke; the water could only be compressed by a tiny amount',
        'The water inside a bottle could replace the pump and fill the tyre in fewer strokes',
        'The gas and the water would behave the same way under the same force on the piston',
        'The water could be compressed more than the gas because liquids are denser',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'A gas has large gaps between particles, a liquid has almost none.',
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q17',
      type: 'numeric-entry',
      stem: 'A sealed 60 ml syringe of air is pressed until its trapped air takes up just one third of the original volume. The temperature has not changed. What volume of air, in millilitres, is inside the syringe now?',
      tier: 'challenge',
      correctAnswer: 20,
      unit: 'ml',
      xpValue: 25,
      hint: 'One third of 60 ml.',
    },
    {
      id: 'cpm-compress-q18',
      type: 'numeric-entry',
      stem: 'Liam in Sevenoaks tries to crush a sealed plastic bottle full of squash with no air gap. He squeezes hard and the volume of the squash drops from 500 ml to about 499.98 ml. To two decimal places, how many millilitres has the volume changed by?',
      tier: 'challenge',
      correctAnswer: 0.02,
      tolerance: 0.005,
      unit: 'ml',
      xpValue: 25,
      hint: 'Subtract the new volume from the starting volume.',
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q19',
      type: 'multiple-choice',
      // Early KS4 Foundation style: two unstated intermediate steps (recognise sealed system, link compressibility to particle spacing, link mass to particle count).
      stem: 'A sealed 240 ml cylinder of nitrogen gas has a mass of 0.28 g. The piston is pushed in until the gas takes up 80 ml. The temperature is unchanged. Which of these is correct after the squash?',
      tier: 'challenge',
      options: [
        'The mass of the gas is still 0.28 g and the gaps between particles are smaller',
        'The mass of the gas is 0.09 g because the gas is squashed to a third of its volume',
        'The mass of the gas is still 0.28 g but each nitrogen particle is now smaller',
        'The mass of the gas has risen to 0.84 g because the gas is denser',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'The cylinder is sealed. Think first about mass, then about what compressing does to the gaps.',
      misconceptionId: 'cpm-compress-mis-mass-shrinks',
    },
    {
      id: 'cpm-compress-q20',
      type: 'multiple-choice',
      stem: 'A car has hydraulic brakes filled with oil. A mechanic notices a small air bubble has formed in the brake line. When the driver presses the pedal, the brakes feel spongy. Using the particle model, why does the bubble cause spongy brakes?',
      tier: 'challenge',
      options: [
        'The air bubble cools the oil, making it harder to push',
        'The bubble pushes the oil particles further apart, making the oil thinner',
        'The air dissolves into the oil and changes its state',
        'The gas in the bubble compresses easily, so the pedal force squashes the bubble first instead of being passed to the wheel',
      ],
      correctIndex: 3,
      xpValue: 25,
      hint: 'The bubble is a gas, the oil is a liquid. Which one squashes easily?',
      misconceptionId: 'cpm-compress-mis-liquid-easy-squash',
    },
    {
      id: 'cpm-compress-q21',
      type: 'free-text',
      stem: 'In two or three sentences, explain why a 200 ml syringe of air can easily be squashed down to about 60 ml, but a 200 ml syringe of water stays at almost 200 ml even when pressed hard. Use the words particles, gaps and touching.',
      tier: 'challenge',
      sampleAnswer:
        'In the air syringe the gas particles are far apart with large empty gaps between them, so the piston can force the particles closer together and shrink the volume. In the water syringe the liquid particles are already touching with almost no gaps, so there is nothing for the piston to squash out and the volume hardly changes.',
      keywords: ['particles', 'gaps', 'touching', 'gas', 'liquid'],
      xpValue: 25,
      hint: 'Compare the size of the gaps between particles in a gas and in a liquid.',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): documents the common Year 7-9 belief that "particles themselves can be compressed or change in size" when a gas is squashed.
    {
      id: 'cpm-compress-mis-particles-shrink',
      description:
        'When a gas is squashed, each individual particle becomes smaller.',
      triggerAnswer: 'particles-shrink',
      correction:
        'Particles do not change size when a gas is compressed. What changes is the empty space between the particles, which closes up.',
      reExplanation:
        'Picture a bicycle pump full of air. Each tiny air particle stays the same size as the piston pushes down. The particles are simply forced closer together, so the gaps between them shrink. The same number of particles now sits inside a smaller volume, but every particle is unchanged.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "About 40% of 16+ year olds responded to the question 'What is there between particles?', with 'vapour or oxygen'." Also David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26): "Space between particles is filled with air..."
    {
      id: 'cpm-compress-mis-air-fills-gaps',
      description:
        'There is air or some other substance in the gaps between particles of a gas, a liquid or a solid.',
      triggerAnswer: 'air-fills-gaps',
      correction:
        'Nothing sits between the particles. The gaps are empty space, not air. Air is itself made of particles, so it would not fit between other particles.',
      reExplanation:
        'Air inside a balloon is a gas of nitrogen and oxygen particles. Between those particles there is empty space. If air filled the gaps, then the air particles would need their own gaps, and so on, which makes no sense. The gaps are simply nothing, not a hidden second substance.',
    },
    // Source: CGP KS3 Chemistry Study Guide (Sams, ed.), "Particle Theory" section: lists as a Common Mistake the claim "you can squash a liquid almost as easily as a gas". The book reminds learners that the particles in a liquid are touching, so a liquid can be compressed only a tiny amount.
    {
      id: 'cpm-compress-mis-liquid-easy-squash',
      description:
        'Liquids can be squashed into a noticeably smaller volume, similar to a gas.',
      triggerAnswer: 'liquid-easy-squash',
      correction:
        'Liquid particles are already touching each other. A liquid can only be squashed a tiny amount, far less than a gas.',
      reExplanation:
        'Try a sealed syringe of water against a sealed syringe of air. Push the piston as hard as you can on both. The air piston travels a long way, while the water piston barely moves. The water particles touch already, so there is almost no space to close up. This is why hydraulic brake lines use oil, not air.',
    },
    // Source: AQA GCSE Chemistry examiner report 2019, 8462/2H Q3 (paper-1 conservation-of-mass items in the same series flag this pattern annually): "candidates often state that the mass of a gas falls when it is compressed because there is less of it in the container." Reinforced in Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05).
    {
      id: 'cpm-compress-mis-mass-shrinks',
      description:
        'The mass of a gas falls when it is squashed into a smaller volume.',
      triggerAnswer: 'mass-shrinks',
      correction:
        'Mass is conserved when a sealed gas is compressed. The same particles are still inside, so the total mass stays the same.',
      reExplanation:
        'Place a sealed syringe of air on a balance and squash the piston. The reading does not change. No particles can leave a sealed container, so the mass is unchanged. The volume has fallen because the gaps have closed, not because matter has gone.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: documents the belief that "particles escape through the walls of a container" when a gas is squashed, often drawn by pupils to explain why a smaller volume holds the gas.
    {
      id: 'cpm-compress-mis-leak-on-squash',
      description:
        'When a gas is squashed, some of the particles leak out of the container.',
      triggerAnswer: 'leak-on-squash',
      correction:
        'If the container is sealed, no particles can leave. The same number of particles is now packed into less space.',
      reExplanation:
        'A sealed syringe with a finger on the tip is closed off. The air inside has nowhere to go when you press the piston. Instead, the gas particles are pushed closer together until the empty gaps between them are very small. Open the syringe and the air springs back to its original volume.',
    },
    // Source: David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26): notes that pupils often draw solids with small gaps "for the air to fit", reasoning that solids "must be a bit squashable too". Mirrored in IOPSpark misconceptions catalogue.
    {
      id: 'cpm-compress-mis-solid-tiny-gaps',
      description:
        'A solid has small gaps between its particles, so it can still be squashed a little.',
      triggerAnswer: 'solid-tiny-gaps',
      correction:
        'In a solid the particles are arranged in a fixed grid, touching every neighbour. There is no empty gap to close up, so a solid cannot be squashed smaller.',
      reExplanation:
        'Picture a brick wall with the bricks pressed tight against each other. There is no air gap between bricks for them to slide into. Solid particles are the same. They vibrate in place, but they cannot move closer than the position they already hold, so a solid keeps the same volume.',
    },
    // Source: Driver, R., Squires, A., Rushworth, P., & Wood-Robinson, V. (1994), "Making Sense of Secondary Science: Research into children's ideas", Routledge. Chapter on Matter: documents the pupil claim that "all states of matter can be compressed" if you push hard enough, without distinguishing between gases and liquids/solids.
    {
      id: 'cpm-compress-mis-all-squash',
      description:
        'Every state of matter can be squashed about the same if you press hard enough.',
      triggerAnswer: 'all-squash',
      correction:
        'Compressibility depends on the gaps between particles. A gas has large gaps and squashes easily; a liquid and a solid barely change volume no matter how hard you press.',
      reExplanation:
        'Try the same hard press on three sealed syringes: one with air, one with water, one packed with a steel rod. The air piston moves a long way, the water piston moves a tiny amount, the steel does not move at all. The force is the same; the difference is the empty space between particles in each state.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 16],
  },
}
