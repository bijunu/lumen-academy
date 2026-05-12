import type { SkillNode } from '@/types/content'

// Scene SVGs lifted out as constants so the InteractiveScene literals stay readable.

// Canonical force-imbalance diagram. Two particles are highlighted:
// one deep in the bulk, pulled equally on all sides; one at the surface,
// pulled only sideways and downwards by its liquid neighbours.
const SURFACE_VS_BULK_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
  <rect x="0" y="0" width="300" height="180" fill="#F0F9FF"/>
  <text x="150" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#0C4A6E">Forces on a surface particle vs a bulk particle</text>
  <!-- air label -->
  <text x="30" y="40" font-size="9" fill="#475569" font-style="italic">air above</text>
  <!-- surface line -->
  <line x1="10" y1="50" x2="290" y2="50" stroke="#0EA5E9" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="270" y="46" font-size="8" fill="#0EA5E9">surface</text>
  <!-- liquid background -->
  <rect x="10" y="50" width="280" height="120" fill="#DBEAFE" opacity="0.7"/>
  <!-- water particles (bulk grid) -->
  <g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6">
    <circle cx="30" cy="62" r="7"/><circle cx="50" cy="62" r="7"/><circle cx="70" cy="62" r="7"/><circle cx="110" cy="62" r="7"/><circle cx="130" cy="62" r="7"/><circle cx="170" cy="62" r="7"/><circle cx="190" cy="62" r="7"/><circle cx="230" cy="62" r="7"/><circle cx="250" cy="62" r="7"/><circle cx="270" cy="62" r="7"/>
    <circle cx="30" cy="82" r="7"/><circle cx="50" cy="82" r="7"/><circle cx="70" cy="82" r="7"/><circle cx="90" cy="82" r="7"/><circle cx="110" cy="82" r="7"/><circle cx="130" cy="82" r="7"/><circle cx="170" cy="82" r="7"/><circle cx="190" cy="82" r="7"/><circle cx="210" cy="82" r="7"/><circle cx="230" cy="82" r="7"/><circle cx="250" cy="82" r="7"/><circle cx="270" cy="82" r="7"/>
    <circle cx="30" cy="102" r="7"/><circle cx="50" cy="102" r="7"/><circle cx="70" cy="102" r="7"/><circle cx="90" cy="102" r="7"/><circle cx="110" cy="102" r="7"/><circle cx="130" cy="102" r="7"/><circle cx="150" cy="102" r="7"/><circle cx="170" cy="102" r="7"/><circle cx="190" cy="102" r="7"/><circle cx="210" cy="102" r="7"/><circle cx="230" cy="102" r="7"/><circle cx="250" cy="102" r="7"/><circle cx="270" cy="102" r="7"/>
    <circle cx="30" cy="122" r="7"/><circle cx="50" cy="122" r="7"/><circle cx="70" cy="122" r="7"/><circle cx="90" cy="122" r="7"/><circle cx="110" cy="122" r="7"/><circle cx="130" cy="122" r="7"/><circle cx="170" cy="122" r="7"/><circle cx="190" cy="122" r="7"/><circle cx="210" cy="122" r="7"/><circle cx="230" cy="122" r="7"/><circle cx="250" cy="122" r="7"/><circle cx="270" cy="122" r="7"/>
    <circle cx="30" cy="142" r="7"/><circle cx="50" cy="142" r="7"/><circle cx="70" cy="142" r="7"/><circle cx="90" cy="142" r="7"/><circle cx="110" cy="142" r="7"/><circle cx="130" cy="142" r="7"/><circle cx="150" cy="142" r="7"/><circle cx="170" cy="142" r="7"/><circle cx="190" cy="142" r="7"/><circle cx="210" cy="142" r="7"/><circle cx="230" cy="142" r="7"/><circle cx="250" cy="142" r="7"/><circle cx="270" cy="142" r="7"/>
  </g>
  <!-- highlighted surface particle at (150, 62) -->
  <circle cx="150" cy="62" r="9" fill="#FCD34D" stroke="#B45309" stroke-width="1.5"/>
  <!-- force arrows from surface particle: sideways and down only -->
  <g stroke="#B45309" stroke-width="1.4" fill="#B45309">
    <line x1="150" y1="62" x2="135" y2="74"/><polygon points="135,74 142,72 138,77"/>
    <line x1="150" y1="62" x2="165" y2="74"/><polygon points="165,74 158,72 162,77"/>
    <line x1="150" y1="62" x2="150" y2="80"/><polygon points="150,80 147,74 153,74"/>
  </g>
  <!-- highlighted bulk particle at (150, 122) -->
  <circle cx="150" cy="122" r="9" fill="#86EFAC" stroke="#14532D" stroke-width="1.5"/>
  <!-- force arrows from bulk particle: in all six directions -->
  <g stroke="#14532D" stroke-width="1.4" fill="#14532D">
    <line x1="150" y1="122" x2="135" y2="110"/><polygon points="135,110 138,116 142,113"/>
    <line x1="150" y1="122" x2="165" y2="110"/><polygon points="165,110 162,116 158,113"/>
    <line x1="150" y1="122" x2="135" y2="134"/><polygon points="135,134 142,132 138,137"/>
    <line x1="150" y1="122" x2="165" y2="134"/><polygon points="165,134 158,132 162,137"/>
    <line x1="150" y1="122" x2="150" y2="105"/><polygon points="150,105 147,111 153,111"/>
    <line x1="150" y1="122" x2="150" y2="140"/><polygon points="150,140 147,134 153,134"/>
  </g>
  <text x="150" y="172" text-anchor="middle" font-size="9" fill="#0C4A6E">surface particle: net pull inwards. bulk particle: pulls balance.</text>
</svg>`

const PAPER_CLIP_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160">
  <rect x="0" y="0" width="320" height="160" fill="#FEF3C7"/>
  <text x="160" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">Paper clip on water: with and without washing-up liquid</text>
  <!-- left beaker: pure water -->
  <g>
    <text x="80" y="36" text-anchor="middle" font-size="10" font-weight="700" fill="#1E3A8A">Pure water</text>
    <rect x="20" y="50" width="120" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
    <rect x="20" y="70" width="120" height="70" fill="#BFDBFE" opacity="0.8"/>
    <!-- surface line slightly dipped under the clip -->
    <path d="M 20 70 L 60 70 Q 80 78 100 70 L 140 70" stroke="#1E3A8A" stroke-width="1.5" fill="none"/>
    <!-- paper clip resting on top -->
    <g stroke="#475569" stroke-width="2" fill="none">
      <path d="M 65 66 L 95 66 Q 100 66 100 70 Q 100 74 95 74 L 70 74 Q 67 74 67 71 L 67 68"/>
    </g>
    <text x="80" y="100" text-anchor="middle" font-size="9" fill="#0C4A6E">surface tension</text>
    <text x="80" y="112" text-anchor="middle" font-size="9" fill="#0C4A6E">holds it up</text>
  </g>
  <!-- right beaker: water plus soap -->
  <g>
    <text x="240" y="36" text-anchor="middle" font-size="10" font-weight="700" fill="#7C2D12">Water with a drop of washing-up liquid</text>
    <rect x="180" y="50" width="120" height="90" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
    <rect x="180" y="70" width="120" height="70" fill="#BFDBFE" opacity="0.8"/>
    <line x1="180" y1="70" x2="300" y2="70" stroke="#1E3A8A" stroke-width="1.5"/>
    <!-- sunken paper clip -->
    <g stroke="#475569" stroke-width="2" fill="none">
      <path d="M 225 118 L 255 118 Q 260 118 260 122 Q 260 126 255 126 L 230 126 Q 227 126 227 123 L 227 120"/>
    </g>
    <!-- bubbles -->
    <g fill="#FFFFFF" stroke="#475569" stroke-width="0.5">
      <circle cx="200" cy="76" r="3"/><circle cx="215" cy="74" r="2"/><circle cx="270" cy="76" r="2.5"/><circle cx="285" cy="74" r="2"/>
    </g>
    <text x="240" y="148" text-anchor="middle" font-size="9" fill="#7C2D12">soap weakens the pull at the surface</text>
  </g>
</svg>`

const CAPILLARY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
  <rect x="0" y="0" width="320" height="200" fill="#F1F5F9"/>
  <text x="160" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#0C4A6E">Capillary rise: water creeps up a paper towel</text>
  <!-- shallow tray of dyed water -->
  <rect x="40" y="150" width="240" height="40" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/>
  <rect x="42" y="160" width="236" height="30" fill="#93C5FD" opacity="0.85"/>
  <text x="160" y="180" text-anchor="middle" font-size="9" fill="#0C4A6E">tray of dyed water</text>
  <!-- paper towel, dry top, wet bottom -->
  <rect x="140" y="40" width="40" height="120" fill="#FEF9C3" stroke="#A16207" stroke-width="1"/>
  <rect x="140" y="100" width="40" height="60" fill="#60A5FA" opacity="0.75"/>
  <text x="200" y="78" font-size="9" fill="#0C4A6E">dry: water has not reached this point yet</text>
  <text x="200" y="130" font-size="9" fill="#0C4A6E">wet: water has crept up the fibres</text>
  <!-- arrows showing rise -->
  <g stroke="#1E3A8A" stroke-width="1.4" fill="#1E3A8A">
    <line x1="125" y1="150" x2="125" y2="105"/><polygon points="125,105 122,112 128,112"/>
  </g>
  <text x="100" y="130" text-anchor="end" font-size="9" fill="#1E3A8A">rises against gravity</text>
  <!-- caption -->
  <text x="160" y="34" text-anchor="middle" font-size="9" fill="#475569">water sticks to the paper fibres (adhesion) and pulls itself along (cohesion)</text>
</svg>`

const DROPLET_BUBBLE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160">
  <rect x="0" y="0" width="320" height="160" fill="#F0FDF4"/>
  <text x="160" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">A droplet and a bubble: surface particles pull the shape inwards</text>
  <!-- waxed car bonnet droplet -->
  <g>
    <rect x="20" y="110" width="120" height="40" fill="#1F2937"/>
    <text x="80" y="138" text-anchor="middle" font-size="9" fill="#F3F4F6">waxed car bonnet</text>
    <!-- droplet shape: nearly a dome -->
    <path d="M 60 110 Q 50 70 80 60 Q 110 70 100 110 Z" fill="#60A5FA" stroke="#1E3A8A" stroke-width="1.2"/>
    <!-- inward arrows around the rim -->
    <g stroke="#1E3A8A" stroke-width="1.2" fill="#1E3A8A">
      <line x1="55" y1="78" x2="68" y2="82"/><polygon points="68,82 63,79 64,84"/>
      <line x1="105" y1="78" x2="92" y2="82"/><polygon points="92,82 97,79 96,84"/>
      <line x1="80" y1="52" x2="80" y2="66"/><polygon points="80,66 77,60 83,60"/>
    </g>
    <text x="80" y="100" text-anchor="middle" font-size="8" fill="#0C4A6E">pulled inwards</text>
  </g>
  <!-- soap bubble at a birthday party -->
  <g>
    <text x="240" y="36" text-anchor="middle" font-size="10" font-weight="700" fill="#7C2D12">Soap bubble</text>
    <circle cx="240" cy="90" r="40" fill="none" stroke="#1E3A8A" stroke-width="2"/>
    <circle cx="240" cy="90" r="36" fill="#A7F3D0" opacity="0.35" stroke="#14532D" stroke-width="0.8"/>
    <!-- inward arrows -->
    <g stroke="#14532D" stroke-width="1.2" fill="#14532D">
      <line x1="240" y1="50" x2="240" y2="62"/><polygon points="240,62 237,56 243,56"/>
      <line x1="240" y1="130" x2="240" y2="118"/><polygon points="240,118 237,124 243,124"/>
      <line x1="200" y1="90" x2="212" y2="90"/><polygon points="212,90 206,87 206,93"/>
      <line x1="280" y1="90" x2="268" y2="90"/><polygon points="268,90 274,87 274,93"/>
    </g>
    <text x="240" y="148" text-anchor="middle" font-size="9" fill="#14532D">the thin soap film pulls itself into a sphere</text>
  </g>
</svg>`

export const surfaceTensionAndIntermolecularForces: SkillNode = {
  id: 'chemistry-particle-model-surface-tension',
  title: 'Surface Tension and Intermolecular Forces',
  description:
    'Use the particle model to explain why a liquid forms droplets and behaves as if its surface has a thin skin. Compare the forces on a particle at the surface with those on a particle deep in the bulk. Describe cohesion (liquid particles pulling on each other) and adhesion (liquid particles pulling on a different surface) in qualitative terms. Read everyday examples, such as water droplets beading on a waxed car bonnet, paper clips floating on water, soap bubbles at a birthday party, water creeping up a paper towel, and pond skaters on a Welsh canal.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'challenge',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'Why liquids form droplets and have a surface; the stronger pull on surface particles compared to bulk particles; cohesion and adhesion in qualitative terms; examples: water droplets, soap bubbles, capillary action.',
    awardingBodies: {
      aqa: '4.2.2.1 States of matter; cohesive forces between particles (GCSE 8462)',
      edexcel: 'Topic 1.6 States of matter; intermolecular forces (GCSE 1CH0)',
      ocr: 'C1.1 The particle model; forces between particles and properties of liquids (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-surf-tens-scene-imbalance',
      title: 'Surface vs Bulk: Where the Pull Goes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare the forces on a surface particle and a bulk particle in a beaker of water.',
      data: {
        viewBox: '0 0 300 180',
        svg: SURFACE_VS_BULK_SVG,
        hotspots: [
          {
            id: 'cpm-surf-tens-h-bulk',
            x: 50,
            y: 68,
            label: 'Bulk particle: pulled in every direction',
            description:
              'Deep inside the liquid, neighbours sit on every side. The pulls cancel out, so this particle feels no net force.',
          },
          {
            id: 'cpm-surf-tens-h-surface',
            x: 50,
            y: 35,
            label: 'Surface particle: only sideways and down',
            description:
              'A particle at the surface has neighbours below and beside it, but only air above. The unbalanced pull tugs it back into the liquid.',
          },
          {
            id: 'cpm-surf-tens-h-air',
            x: 15,
            y: 22,
            label: 'Air above does almost no pulling',
            description:
              'Air particles are far apart and weakly attracted to the water, so they cannot match the pull of the liquid below.',
          },
          {
            id: 'cpm-surf-tens-h-skin',
            x: 88,
            y: 28,
            label: 'A thin skin effect',
            description:
              'Because every surface particle is pulled inwards, the surface acts a bit like a stretched skin holding the liquid in.',
          },
        ],
      },
    },
    {
      id: 'cpm-surf-tens-scene-paperclip',
      title: 'Paper Clip Demo: Soap Breaks the Skin',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a paper clip on pure water with one on water that has had a drop of washing-up liquid added.',
      data: {
        viewBox: '0 0 320 160',
        svg: PAPER_CLIP_SVG,
        hotspots: [
          {
            id: 'cpm-surf-tens-h-pc-float',
            x: 25,
            y: 45,
            label: 'Pure water: the clip floats',
            description:
              'The surface dips under the clip but does not break. The pull between water particles is strong enough to hold the metal up, even though steel is denser than water.',
          },
          {
            id: 'cpm-surf-tens-h-pc-dip',
            x: 25,
            y: 80,
            label: 'A dip, not a break',
            description:
              'Notice how the water surface curves down where the clip sits. Surface tension stretches like a thin film, then springs back.',
          },
          {
            id: 'cpm-surf-tens-h-pc-soap',
            x: 75,
            y: 80,
            label: 'Soap added: the clip sinks',
            description:
              'Washing-up liquid particles slot in between the water particles at the surface, weakening the pull. The film can no longer hold the clip, so it falls through.',
          },
          {
            id: 'cpm-surf-tens-h-pc-density',
            x: 75,
            y: 95,
            label: 'Density did not change',
            description:
              'The steel is just as dense before and after. Only the surface tension changed, which is what stopped the clip floating.',
          },
        ],
      },
    },
    {
      id: 'cpm-surf-tens-scene-capillary',
      title: 'Capillary Rise: Cohesion Meets Adhesion',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how water climbs up a paper towel against gravity.',
      data: {
        viewBox: '0 0 320 200',
        svg: CAPILLARY_SVG,
        hotspots: [
          {
            id: 'cpm-surf-tens-h-cap-adhesion',
            x: 30,
            y: 75,
            label: 'Adhesion: pull on a different surface',
            description:
              'Water particles are attracted to the paper fibres. They stick to the fibres, climbing into tiny gaps in the paper.',
          },
          {
            id: 'cpm-surf-tens-h-cap-cohesion',
            x: 50,
            y: 50,
            label: 'Cohesion: water pulls water along',
            description:
              'Once a few water particles climb up, the rest follow, because water particles pull on each other.',
          },
          {
            id: 'cpm-surf-tens-h-cap-front',
            x: 50,
            y: 65,
            label: 'The wet front rises',
            description:
              'The boundary between dry and wet paper creeps up as more water particles join the front. Mercury would not do this; it has strong cohesion but little adhesion to paper or glass.',
          },
          {
            id: 'cpm-surf-tens-h-cap-stop',
            x: 50,
            y: 30,
            label: 'It stops when gravity wins',
            description:
              'Eventually the weight of the lifted water balances the upward pull. The wet front holds at that height.',
          },
        ],
      },
    },
    {
      id: 'cpm-surf-tens-scene-droplet-bubble',
      title: 'Droplet and Bubble: Inwards Pull Shapes the Liquid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why a water droplet domes up on a waxed bonnet and why a soap bubble is a sphere.',
      data: {
        viewBox: '0 0 320 160',
        svg: DROPLET_BUBBLE_SVG,
        hotspots: [
          {
            id: 'cpm-surf-tens-h-drop',
            x: 25,
            y: 60,
            label: 'Droplet on waxed bonnet',
            description:
              'The wax does not pull on water particles, so adhesion is weak. Cohesion wins, and the droplet pulls itself into a tight dome shape.',
          },
          {
            id: 'cpm-surf-tens-h-drop-inwards',
            x: 25,
            y: 90,
            label: 'Every surface particle pulled inwards',
            description:
              'Each surface particle is tugged towards the centre of the droplet. The shape with the smallest surface area for that amount of water is a near-sphere.',
          },
          {
            id: 'cpm-surf-tens-h-bubble',
            x: 75,
            y: 55,
            label: 'Soap bubble',
            description:
              'A bubble is a thin film of soapy water trapping a pocket of air. Surface tension pulls the film into a sphere, the smallest surface area possible.',
          },
          {
            id: 'cpm-surf-tens-h-bubble-shape',
            x: 75,
            y: 90,
            label: 'Sphere shape is no accident',
            description:
              'A cube of soap film would have more surface area than a sphere of the same volume. The film keeps shrinking until it cannot get any smaller, which is the sphere.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-surf-tens-worked-1',
      title: 'Why a droplet of water beads up on a waxed bonnet',
      steps: [
        {
          explanation:
            'Start at the particles. In liquid water, every particle pulls on its neighbours. This pull between like particles is called cohesion.',
        },
        {
          explanation:
            'Now picture a particle at the surface of the droplet. It has water neighbours below it and beside it, but the air above pulls very weakly.',
        },
        {
          explanation:
            'So every surface particle gets a net pull inwards, towards the rest of the water. The surface acts like a stretched skin.',
        },
        {
          explanation:
            'The wax on the bonnet does not attract water particles, so adhesion is very weak. With cohesion winning, the droplet pulls itself into the most compact shape it can, which is a near-sphere sitting on the wax.',
        },
        {
          explanation:
            'So the droplet beads up because the inward pull on surface particles is much stronger than any pull from the wax.',
        },
      ],
    },
    {
      id: 'cpm-surf-tens-worked-2',
      title: 'Working out why the paper clip falls once soap is added',
      steps: [
        {
          explanation:
            'Question: a steel paper clip floats on pure water in a school demo. A drop of washing-up liquid is added near the side of the beaker and the clip sinks within a few seconds. Use the particle model to explain why the clip floats first and sinks second.',
        },
        {
          explanation:
            'Before the soap is added, water particles at the surface pull strongly on each other. This makes the surface behave like a thin skin under tension.',
        },
        {
          explanation:
            'The clip is denser than water, so by itself it should sink. The skin from surface tension supports its weight by stretching slightly under the clip.',
          maths: 'forces: weight of clip downwards, surface tension upwards (balance)',
        },
        {
          explanation:
            'Washing-up liquid particles slot in between the water particles at the surface, getting in the way. The pull between water particles at the surface drops.',
        },
        {
          explanation:
            'With weaker surface tension, the skin can no longer support the clip. The clip drops through.',
          maths: 'forces: weight of clip > weaker surface tension, so net force is downwards',
        },
        {
          explanation:
            'So the clip floats on pure water because surface tension is strong enough to hold it, and sinks once soap weakens the pull between surface particles.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-surf-tens-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes surface tension?',
      tier: 'core',
      options: [
        'A thin layer of air sat on top of a liquid that stops it spreading.',
        'The inward pull on surface particles, caused by the particles below and beside them.',
        'A force from gravity that flattens the top of any liquid.',
        'The weight of the liquid pressing down on the bottom of the container.',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Think about which way surface particles get pulled.',
      misconceptionId: 'cpm-surf-tens-mis-skin-substance',
    },
    {
      id: 'cpm-surf-tens-q2',
      type: 'multiple-choice',
      stem: 'A water particle sits deep inside a glass of water. How is it pulled by its neighbours?',
      tier: 'core',
      options: [
        'Only downwards, by gravity.',
        'Only sideways, by the particles next to it.',
        'Outwards on every side, pushing the particle apart.',
        'Inwards on every side, so the pulls cancel out and there is no net force.',
      ],
      correctIndex: 3,
      xpValue: 10,
      hint: 'A bulk particle is surrounded on every side by liquid neighbours.',
      misconceptionId: 'cpm-surf-tens-mis-surface-particles-different',
    },
    {
      id: 'cpm-surf-tens-q3',
      type: 'multiple-choice',
      stem: 'Why does a particle right at the surface of water feel a net pull inwards?',
      tier: 'core',
      options: [
        'There are water particles below and beside it, but only air above, and the air particles barely pull on it.',
        'The particle is heavier than the others, so gravity tugs it down.',
        'It is repelled by the water below, which pushes it up.',
        'It has more neighbours than a bulk particle, so it is pulled harder.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Compare the neighbours above and below the surface particle.',
      misconceptionId: 'cpm-surf-tens-mis-air-pulls-as-strong',
    },
    {
      id: 'cpm-surf-tens-q4',
      type: 'multiple-choice',
      stem: 'In chemistry, cohesion is the pull between particles of the same substance, and adhesion is the pull between particles of different substances. A spider\'s web in the Lake District is covered in tiny round water droplets on a misty morning. Which pull mainly shapes each droplet into a ball?',
      tier: 'core',
      options: [
        'Cohesion between the water particles.',
        'Adhesion between water and the web.',
        'Gravity pulling the droplet downwards.',
        'Air pressure squeezing from above.',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Water on water is cohesion. Water on web is adhesion.',
      misconceptionId: 'cpm-surf-tens-mis-cohesion-adhesion-swap',
    },
    {
      id: 'cpm-surf-tens-q5',
      type: 'numeric-entry',
      stem: 'In a school demo, a 0.6 g steel paper clip is laid flat on the surface of 250 ml of pure water and stays floating. The mass of the water is 250 g. What is the total mass of water in grams once the clip is resting on the surface?',
      tier: 'core',
      correctAnswer: 250,
      unit: 'g',
      xpValue: 10,
      hint: 'The clip is sat on the water, not added to it. Only count the mass of water.',
    },
    {
      id: 'cpm-surf-tens-q6',
      type: 'numeric-entry',
      stem: 'On a freshly waxed car bonnet in Sevenoaks, a single round water droplet has a volume of 0.05 ml. After the wash, eight identical droplets remain in a small patch. What is the total volume of water in those droplets, in ml?',
      tier: 'core',
      correctAnswer: 0.4,
      unit: 'ml',
      xpValue: 10,
      hint: 'Multiply the volume of one droplet by the number of droplets.',
    },
    {
      id: 'cpm-surf-tens-q7',
      type: 'drag-order',
      stem: 'Put these steps in order to explain why a small water droplet on a waxed bonnet forms a near-sphere.',
      tier: 'core',
      items: [
        'The shape settles as a near-sphere, the most compact shape for that volume of water.',
        'Each surface particle is pulled inwards because air pulls very weakly compared to water.',
        'Wax does not attract water particles, so adhesion to the bonnet is weak.',
        'Inside the droplet, water particles pull on each other strongly (cohesion).',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
      hint: 'Start inside the droplet, then move to the surface, then the bonnet, then the shape.',
    },
    {
      id: 'cpm-surf-tens-q8',
      type: 'multiple-choice',
      stem: 'A pond skater walks across a Welsh canal in summer without breaking the surface. Which sentence best explains why the insect does not sink?',
      tier: 'confident',
      options: [
        'Pond skaters are made of a material that floats on any liquid.',
        'The insect is lighter than air, so it cannot break through.',
        'The water surface has a thin skin from surface tension, which spreads the small weight of the pond skater over a wide area.',
        'The water under the legs is solid, like a sheet of glass.',
      ],
      correctIndex: 2,
      xpValue: 15,
      hint: 'Think about the inward pull on surface particles and how the legs spread the weight.',
      misconceptionId: 'cpm-surf-tens-mis-skin-substance',
    },
    {
      id: 'cpm-surf-tens-q9',
      type: 'multiple-choice',
      stem: 'A pupil writes: "Soap dissolves the steel paper clip a bit, which is why the clip sinks once washing-up liquid is added." Which sentence corrects this?',
      tier: 'confident',
      options: [
        'The pupil is right; soap dissolves steel into the water.',
        'Soap raises the density of the water so the clip cannot float anymore.',
        'Soap heats the water, which makes the steel expand and sink.',
        'Soap weakens the pull between water particles at the surface, so the skin can no longer hold the clip up. The steel itself is unchanged.',
      ],
      correctIndex: 3,
      xpValue: 15,
      hint: 'Did the steel really change, or did the surface tension change?',
      misconceptionId: 'cpm-surf-tens-mis-soap-dissolves-clip',
    },
    {
      id: 'cpm-surf-tens-q10',
      type: 'multiple-choice',
      stem: 'A teacher dips one end of a paper towel into a tray of dyed water in a school practical. After a minute the dye has crept up the dry paper. Which pair of forces best explains the rise?',
      tier: 'confident',
      options: [
        'Air pressure pushing the water up and gravity pulling it down.',
        'Cohesion pulling water particles along with each other, and adhesion sticking water particles to the paper fibres.',
        'Magnetism between water and paper, and weight of the towel.',
        'Surface tension pushing the water down and adhesion squeezing it sideways.',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Water on water is cohesion. Water on paper is adhesion.',
      misconceptionId: 'cpm-surf-tens-mis-cohesion-adhesion-swap',
    },
    {
      id: 'cpm-surf-tens-q11',
      type: 'spot-misconception',
      stem: 'Liam says: "Water droplets on a spider\'s web are round because the air around them squashes them from every side. Surface tension is just the air pressing in."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Surface tension is really air pressure squashing the droplet from outside.',
          isMisconception: true,
        },
        {
          text: 'Liam is not right. Surface tension comes from water particles pulling on each other, not from air pressing in. Air particles barely pull on water.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-surf-tens-mis-air-pulls-as-strong',
    },
    {
      id: 'cpm-surf-tens-q12',
      type: 'spot-misconception',
      stem: 'Sophie says: "The surface of water has a special thin skin made of a different material from the water below. That is why a paper clip can float on top."',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. There really is a special layer made of a different substance on top of water.',
          isMisconception: true,
        },
        {
          text: 'Sophie is not right. The "skin" is the same water as below. It only behaves differently because the surface particles are pulled inwards with no neighbours above.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-surf-tens-mis-skin-substance',
    },
    {
      id: 'cpm-surf-tens-q13',
      type: 'numeric-entry',
      stem: 'A children\'s birthday party uses a bubble wand. Each spherical soap bubble has a volume of about 6 ml. The party host blows 25 bubbles in one go. What is the total volume of trapped air, in ml?',
      tier: 'confident',
      correctAnswer: 150,
      unit: 'ml',
      xpValue: 15,
      hint: 'Multiply the volume of one bubble by the number of bubbles.',
    },
    {
      id: 'cpm-surf-tens-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: explain in three steps why a fresh drop of water on a clean glass slide spreads out into a flat puddle, but the same drop on a freshly waxed bonnet beads into a near-sphere.',
      tier: 'confident',
      steps: [
        'In both cases the water particles still pull on each other (cohesion).',
        null,
        'On glass, adhesion is strong, so water spreads. On wax, adhesion is weak, so cohesion wins and the droplet pulls itself into a near-sphere.',
      ],
      missingStepIndex: 1,
      correctStep:
        'The difference is adhesion: water particles are pulled strongly by clean glass, but only very weakly by wax.',
      xpValue: 20,
    },
    {
      id: 'cpm-surf-tens-q15',
      type: 'multiple-choice',
      stem: 'A paper clip with a mass of 0.6 g floats flat on pure water. The teacher adds a tiny drop of washing-up liquid and the clip sinks within seconds. Which statement about density and surface tension is right?',
      tier: 'challenge',
      options: [
        'The density of the steel went up, so the clip sank.',
        'The density of the steel never changed; only the surface tension of the water dropped, so the skin could not hold the clip anymore.',
        'The density of the water went up sharply once soap was added, so the clip sank.',
        'The steel briefly became a liquid when soap touched it.',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'What actually changed when the soap was added: the steel, or the pull between water particles?',
      misconceptionId: 'cpm-surf-tens-mis-soap-dissolves-clip',
    },
    {
      id: 'cpm-surf-tens-q16',
      type: 'numeric-entry',
      stem: 'In a Year 7 capillary practical, water rises 4 cm up a narrow strip of paper towel in 60 s. A second, much thicker strip is tried and the water rises only 1 cm in the same 60 s. How many times further does the water rise up the narrow strip compared to the thick strip in the same time?',
      tier: 'challenge',
      correctAnswer: 4,
      xpValue: 25,
      hint: 'Divide the narrow-strip rise by the thick-strip rise. The numbers are in the same units.',
    },
    {
      id: 'cpm-surf-tens-q17',
      type: 'multiple-choice',
      stem: 'In a Year 7 capillary demo, water creeps several centimetres up a thin paper towel against gravity. The teacher then tries the same demo with liquid mercury and reports that mercury does not rise at all, even though mercury particles pull strongly on each other. Which statement best explains the difference?',
      tier: 'challenge',
      options: [
        'Mercury particles do not pull on each other, so there is nothing to lift up the paper.',
        'Mercury is colder than water, so it does not move.',
        'Mercury has strong cohesion, but very weak adhesion to paper. With no pull onto the fibres, mercury cannot climb. Water has strong adhesion to paper, so it does.',
        'Mercury particles repel paper fibres, so they fall away.',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Capillary rise needs both cohesion and adhesion. Compare adhesion in each case.',
      misconceptionId: 'cpm-surf-tens-mis-capillary-is-evaporation',
    },
    {
      id: 'cpm-surf-tens-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: explain in four steps why a soap bubble in a Cardiff garden settles into a sphere rather than a cube or a flat sheet.',
      tier: 'challenge',
      steps: [
        'A soap bubble is a thin film of soapy water trapping a fixed pocket of air.',
        'Every surface particle of the film is pulled inwards by its water neighbours, so the film acts like a stretched sheet.',
        null,
        'A sphere has the smallest surface area for any given volume, so the film stops shrinking once it reaches a sphere.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Because the film is under tension, it pulls itself smaller and smaller until it cannot shrink any further without changing the air volume inside.',
      xpValue: 25,
      misconceptionId: 'cpm-surf-tens-mis-sphere-because-soap',
    },
    {
      id: 'cpm-surf-tens-q19',
      type: 'free-text',
      stem: 'At early KS4 a pupil is asked: "A 0.5 g paper clip rests on pure water and floats. The same clip sits on water that has had a drop of washing-up liquid added and sinks. The mass of the clip and the temperature of the water are the same in both cases. Use the particle model to explain why the clip floats first and sinks second." Write a short answer in two or three sentences.',
      tier: 'challenge',
      sampleAnswer:
        'In pure water, the pull between water particles at the surface is strong enough to act like a thin skin under tension, which supports the small weight of the clip. The soap particles slot in between the water particles at the surface and weaken the pull, so the skin can no longer hold the clip. The steel itself is unchanged; only the surface tension dropped, so the clip sinks.',
      keywords: ['surface', 'particles', 'pull', 'cohesion', 'soap', 'weaken', 'tension', 'skin'],
      xpValue: 25,
      hint: 'Mention the pull between surface particles, what soap does to that pull, and what changed (and what did not).',
    },
    {
      id: 'cpm-surf-tens-q20',
      type: 'numeric-entry',
      stem: 'A school Bunsen burner heats 100 g of water in a beaker until it is just warm, with no liquid lost. The teacher records that surface tension drops as water warms up. After heating, what is the mass of the water in grams, and does the lower surface tension change this mass?',
      tier: 'challenge',
      correctAnswer: 100,
      unit: 'g',
      xpValue: 25,
      hint: 'No liquid has left the beaker. Surface tension is about the pull between particles, not the count of particles.',
    },
  ],
  misconceptions: [
    // Source: Driver, R. et al., "Making Sense of Secondary Science: Research into Children's Ideas" (Routledge, 1994), chapter on properties of water: "many pupils think the surface of water has a separate thin skin made of a different material from the water below". Reinforced in the Royal Society of Chemistry CPD article "Misconceptions about water" (https://edu.rsc.org/cpd/misconceptions-in-chemistry/), which lists "the surface skin is a different substance" among the most persistent ideas.
    {
      id: 'cpm-surf-tens-mis-skin-substance',
      description:
        'The surface of a liquid is a thin layer of a different material from the liquid below it.',
      triggerAnswer: 'skin-substance',
      correction:
        'There is no separate substance on top. The surface is the same water as below; it only behaves like a skin because the surface particles are pulled inwards.',
      reExplanation:
        'Picture a paper clip floating on pure water. The "skin" holding it up is just the top row of water particles, pulled in by their neighbours below and beside. Add a drop of washing-up liquid and the same particles cannot pull as strongly, so the clip sinks. Nothing extra was on the surface to begin with.',
    },
    // Source: AQA GCSE Chemistry 8462 examiner report June 2022, Paper 8462/1F, on intermolecular forces items: candidates wrote that air pressure pushes droplets into round shapes, missing that the inward pull comes from the liquid particles, not the surrounding air.
    {
      id: 'cpm-surf-tens-mis-air-pulls-as-strong',
      description:
        'The reason water droplets are round is that air pressure squashes them from every side equally.',
      triggerAnswer: 'air-squashes',
      correction:
        'Air particles are far apart and barely pull on water. The round shape comes from water particles pulling each other inwards, not from air pressing in.',
      reExplanation:
        'Picture a droplet on a misty spider\'s web. Each surface water particle has water neighbours below and beside it. The air above barely pulls. The unbalanced inward pull stretches the surface like a sheet, and the droplet settles in the most compact shape: a near-sphere. The same air sits around a flat puddle, but cohesion is what shapes the droplet.',
    },
    // Source: Royal Society of Chemistry "Misconceptions in chemistry" CPD article on intermolecular forces (https://edu.rsc.org/cpd/misconceptions-in-chemistry/) and Driver et al. "Making Sense of Secondary Science": pupils routinely swap cohesion (pull between like particles) and adhesion (pull between unlike particles), or treat them as the same single force.
    {
      id: 'cpm-surf-tens-mis-cohesion-adhesion-swap',
      description:
        'Cohesion and adhesion are the same idea, or they can be used the wrong way round (cohesion for water on glass, adhesion for water on water).',
      triggerAnswer: 'cohesion-adhesion-swap',
      correction:
        'Cohesion is the pull between particles of the same substance. Adhesion is the pull between particles of different substances. They are not the same.',
      reExplanation:
        'Picture water in a beaker. Water-on-water pulls keep the liquid together; that is cohesion. Now picture water creeping up a paper towel. Water-on-paper pulls drag the water onto the fibres; that is adhesion. Capillary rise needs both: adhesion grabs the fibre, cohesion drags more water along behind.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: pupils struggle to separate macroscopic and particle-level explanations, especially attributing changes in surface behaviour to a change in the solid object rather than to the pull between liquid particles. Classroom-observed in school paper-clip demos: many Year 7 pupils first guess the clip "dissolved" or "rusted" rather than that surface tension fell.
    {
      id: 'cpm-surf-tens-mis-soap-dissolves-clip',
      description:
        'When a paper clip floating on water sinks after washing-up liquid is added, the soap must have dissolved or damaged the clip itself.',
      triggerAnswer: 'soap-dissolves-clip',
      correction:
        'The steel clip is unchanged. What changed is the pull between water particles at the surface, which dropped once soap mixed in.',
      reExplanation:
        'The clip is denser than water, so on its own it should sink. It floats because the surface tension stretches under it like a skin. Soap particles slot in between the surface water particles and weaken the pull, so the skin can no longer hold the clip. Pull the clip out and dry it: same shape, same mass, same density.',
    },
    // Source: AQA GCSE Chemistry 8462 examiner report June 2021, Paper 8462/1F, on questions probing the particle-level cause of surface tension: candidates explained surface tension by saying surface particles "stick together more tightly" or "are different from bulk particles", rather than describing the unequal number of neighbours.
    {
      id: 'cpm-surf-tens-mis-surface-particles-different',
      description:
        'Surface particles of water are a special kind of water particle that pulls more strongly than the particles below.',
      triggerAnswer: 'surface-particles-different',
      correction:
        'Every water particle is identical. Surface particles only seem to pull harder because they have no neighbours above to pull them upwards, so the pull is unbalanced.',
      reExplanation:
        'Picture two particles, one at the surface and one ten layers down. They are the same particle in the same water. The deep one is tugged in every direction, so the pulls cancel. The surface one is tugged sideways and down only, with nothing equal pulling it up. That uneven pull is what we measure as surface tension.',
    },
    // Source: Edexcel GCSE Chemistry 1CH0 examiner report June 2022, Paper 1CH0/1F, on items asking pupils to interpret a capillary rise diagram: candidates wrote that the water "becomes a gas" or "evaporates up" the towel rather than recognising that liquid water itself is climbing under cohesion and adhesion.
    {
      id: 'cpm-surf-tens-mis-capillary-is-evaporation',
      description:
        'Water rising up a paper towel is really water evaporating and then condensing higher up the paper.',
      triggerAnswer: 'capillary-evaporation',
      correction:
        'Capillary rise happens while the water is still liquid. The same liquid particles are being dragged upward by adhesion to the fibres and cohesion between water particles.',
      reExplanation:
        'Dip a dyed paper-towel strip into water. The dye climbs with the water front, which would not happen if only steam were rising. Touch the wet front: it is still liquid water. The water particles are sticking to the paper fibres and pulling each other along, so the liquid creeps up against gravity.',
    },
    // Authored, no external source. Classroom-observed during Year 7 surface-tension demos: pupils sometimes invert the rule and say large bubbles are spheres because soap is "naturally round", missing the geometric link to least surface area for a given volume.
    {
      id: 'cpm-surf-tens-mis-sphere-because-soap',
      description:
        'A soap bubble is round because soap films naturally form round shapes, not because of any rule about surface area.',
      triggerAnswer: 'sphere-because-soap',
      correction:
        'Surface tension pulls the soap film inwards in every direction, so the film shrinks until it reaches the shape with the smallest surface area for the trapped air, which is a sphere.',
      reExplanation:
        'Try the film between two parallel rings of wire and the soap forms a flat saddle, not a sphere. Trap a fixed pocket of air and the same film pulls itself into a sphere, because a sphere has the smallest area for that volume. The shape comes from the rule, not from soap being "naturally round".',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
