import type { SkillNode, Zone } from '@/types/content'

export const statesOfMatter: SkillNode = {
  id: 'chemistry-particle-model-states',
  title: 'States of Matter',
  description:
    'Use the particle model to describe how solids, liquids and gases differ in particle arrangement, motion and the forces between particles. Recognise that mass is conserved when a substance changes state.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'core',
  prerequisites: [],
  curriculum: {
    ks3Objective:
      'The properties of the different states of matter (solid, liquid and gas) in terms of the particle model, including gas pressure.',
    awardingBodies: {
      aqa: '4.2.2.1 The three states of matter (8462)',
      edexcel: 'Topic 2.1 States of matter (1CH0)',
      ocr: 'C1.1 The particle model (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'pms-scene-solid',
      title: 'Solid: Particles in a Tight Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the particles in a solid are arranged and how they move.',
      data: {
        viewBox: '0 0 100 100',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"><circle cx="20" cy="20" r="8"/><circle cx="38" cy="20" r="8"/><circle cx="56" cy="20" r="8"/><circle cx="74" cy="20" r="8"/><circle cx="20" cy="38" r="8"/><circle cx="38" cy="38" r="8"/><circle cx="56" cy="38" r="8"/><circle cx="74" cy="38" r="8"/><circle cx="20" cy="56" r="8"/><circle cx="38" cy="56" r="8"/><circle cx="56" cy="56" r="8"/><circle cx="74" cy="56" r="8"/><circle cx="20" cy="74" r="8"/><circle cx="38" cy="74" r="8"/><circle cx="56" cy="74" r="8"/><circle cx="74" cy="74" r="8"/></g></svg>',
        hotspots: [
          {
            id: 'pms-h-solid-1',
            x: 50,
            y: 12,
            label: 'Regular pattern',
            description:
              'Particles in a solid sit in a fixed, repeating arrangement.',
          },
          {
            id: 'pms-h-solid-2',
            x: 88,
            y: 38,
            label: 'Touching neighbours',
            description:
              'Each particle touches the ones around it. The gaps in between are empty space, not air.',
          },
          {
            id: 'pms-h-solid-3',
            x: 12,
            y: 56,
            label: 'Strong forces',
            description:
              'Strong forces between particles hold them in their fixed positions.',
          },
          {
            id: 'pms-h-solid-4',
            x: 50,
            y: 88,
            label: 'Vibrating in place',
            description:
              'Each particle still wiggles a tiny amount, but cannot swap places with another.',
          },
        ],
      },
    },
    {
      id: 'pms-scene-liquid',
      title: 'Liquid: Particles That Slide',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the particles in a liquid are arranged and how they move.',
      data: {
        viewBox: '0 0 100 100',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/><g fill="#22C55E" stroke="#14532D" stroke-width="0.6"><circle cx="22" cy="38" r="8"/><circle cx="40" cy="40" r="8"/><circle cx="58" cy="36" r="8"/><circle cx="76" cy="42" r="8"/><circle cx="18" cy="55" r="8"/><circle cx="36" cy="58" r="8"/><circle cx="55" cy="55" r="8"/><circle cx="73" cy="60" r="8"/><circle cx="24" cy="74" r="8"/><circle cx="44" cy="76" r="8"/><circle cx="62" cy="73" r="8"/><circle cx="80" cy="78" r="8"/></g></svg>',
        hotspots: [
          {
            id: 'pms-h-liquid-1',
            x: 50,
            y: 18,
            label: 'Touching but disordered',
            description:
              'Particles in a liquid still touch their neighbours, but there is no fixed pattern.',
          },
          {
            id: 'pms-h-liquid-2',
            x: 12,
            y: 60,
            label: 'Free to slide past',
            description:
              'Particles can roll and slide past each other, so a liquid can be poured.',
          },
          {
            id: 'pms-h-liquid-3',
            x: 88,
            y: 60,
            label: 'Forces still pull',
            description:
              'Forces between particles are strong enough to keep them touching, but weaker than in a solid.',
          },
          {
            id: 'pms-h-liquid-4',
            x: 50,
            y: 92,
            label: 'Takes the shape of its container',
            description:
              'A liquid flows to fit the bottom of any container, but keeps a fixed volume.',
          },
        ],
      },
    },
    {
      id: 'pms-scene-gas',
      title: 'Gas: Particles Spread Out',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the particles in a gas behave.',
      data: {
        viewBox: '0 0 100 100',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/><g fill="#A855F7" stroke="#581C87" stroke-width="0.6"><circle cx="18" cy="22" r="6"/><circle cx="62" cy="16" r="6"/><circle cx="86" cy="40" r="6"/><circle cx="42" cy="50" r="6"/><circle cx="20" cy="78" r="6"/><circle cx="74" cy="84" r="6"/></g><g stroke="#581C87" stroke-width="0.6" fill="none"><path d="M 18 22 l 8 -4"/><path d="M 62 16 l -6 -6"/><path d="M 86 40 l 4 8"/><path d="M 42 50 l -8 6"/><path d="M 20 78 l 8 -2"/><path d="M 74 84 l -4 -8"/></g></svg>',
        hotspots: [
          {
            id: 'pms-h-gas-1',
            x: 50,
            y: 8,
            label: 'Far apart',
            description:
              'Gas particles sit a long way from each other compared to a solid or liquid.',
          },
          {
            id: 'pms-h-gas-2',
            x: 12,
            y: 50,
            label: 'Moving in all directions',
            description:
              'Particles fly at high speed in straight lines until they hit a wall or another particle.',
          },
          {
            id: 'pms-h-gas-3',
            x: 88,
            y: 60,
            label: 'Almost no forces',
            description:
              'Forces between gas particles are very weak, so they barely pull on each other.',
          },
          {
            id: 'pms-h-gas-4',
            x: 50,
            y: 92,
            label: 'Fills the container',
            description:
              'A gas spreads out to fill any container. It does not settle at the bottom.',
          },
        ],
      },
    },
    {
      id: 'pms-scene-kitchen',
      title: 'Three States in a Kent Kitchen',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the same substance, water, in three different states on a kitchen worktop.',
      data: {
        viewBox: '0 0 300 100',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><rect x="0" y="0" width="300" height="100" fill="#FEF3C7"/><rect x="0" y="85" width="300" height="15" fill="#D6D3D1"/><g><rect x="20" y="55" width="60" height="35" fill="#BFDBFE" stroke="#1E3A8A"/><rect x="30" y="62" width="18" height="14" fill="#E0F2FE" stroke="#1E3A8A"/><rect x="52" y="62" width="18" height="14" fill="#E0F2FE" stroke="#1E3A8A"/></g><g><rect x="120" y="40" width="60" height="50" fill="#BFDBFE" stroke="#1E3A8A"/><rect x="125" y="55" width="50" height="32" fill="#3B82F6" opacity="0.7"/></g><g><rect x="220" y="55" width="55" height="35" fill="#94A3B8" stroke="#475569"/><rect x="270" y="58" width="10" height="4" fill="#475569"/><path d="M 275 55 Q 280 40 270 30 Q 260 20 270 10" stroke="#94A3B8" stroke-width="6" fill="none" opacity="0.6"/><path d="M 280 50 Q 290 35 280 25 Q 270 15 285 5" stroke="#94A3B8" stroke-width="6" fill="none" opacity="0.4"/></g></svg>',
        hotspots: [
          {
            id: 'pms-h-kitchen-ice',
            x: 50,
            y: 70,
            label: 'Ice cubes (solid)',
            description:
              'The cubes keep their own shape and their own volume, even when the glass is tipped.',
          },
          {
            id: 'pms-h-kitchen-water',
            x: 150,
            y: 65,
            label: 'Water (liquid)',
            description:
              'The water flows to fit the bottom of the glass, but its 200 ml volume stays the same.',
          },
          {
            id: 'pms-h-kitchen-steam',
            x: 280,
            y: 25,
            label: 'Steam (gas)',
            description:
              'The steam spreads out into the kitchen air. It does not keep a shape or a fixed volume.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pms-worked-1',
      title: 'Reading a particle picture',
      steps: [
        {
          explanation:
            'Look at the picture. Check whether the particles are touching, and whether they sit in a regular pattern.',
        },
        {
          explanation:
            'In this picture the particles are touching each other and arranged in a neat grid. That tells us the substance is in the solid state.',
          maths: 'arrangement: regular grid, touching',
        },
        {
          explanation:
            'Read off the other clues. The particles only vibrate in place, so the shape and the volume of the substance stay fixed.',
          maths: 'shape: fixed, volume: fixed',
        },
        {
          explanation: 'So the picture shows a solid.',
        },
      ],
    },
    {
      id: 'pms-worked-2',
      title: 'Why a gas spreads to fill a balloon',
      steps: [
        {
          explanation:
            'Question: a small puff of helium is released into a balloon. Why does the helium spread out to fill the whole balloon, instead of sitting in one corner?',
        },
        {
          explanation:
            'Helium is a gas, so its particles are far apart and the forces between them are very weak.',
        },
        {
          explanation:
            'The particles move at high speed in all directions. They keep bouncing off the inside walls of the balloon and off each other.',
        },
        {
          explanation:
            'After a short time the particles have spread evenly through the inside of the balloon, so the gas fills the whole space.',
        },
        {
          explanation:
            'So a gas always fills its container, while a solid would keep its own shape.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pms-q1',
      type: 'multiple-choice',
      stem: 'How are the particles arranged in a solid?',
      tier: 'core',
      options: [
        'Far apart and moving in all directions',
        'Frozen completely still in their fixed places',
        'Touching in a fixed pattern and vibrating in place',
        'Touching but free to slide past each other',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pms-mis-stop',
    },
    {
      id: 'pms-q6',
      type: 'spot-misconception',
      stem: 'Sophie says: "When water in a kettle gets hot, the water particles get bigger." Is she right?',
      tier: 'core',
      statements: [
        {
          text: 'Sophie is right. Heating makes each particle grow in size.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The particles stay the same size, but they move faster and the gaps between them grow.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pms-mis-bigger',
    },
    {
      id: 'pms-q2',
      type: 'multiple-choice',
      stem: 'How do the particles in a liquid behave?',
      tier: 'core',
      options: [
        'Touching in a fixed grid pattern, only vibrating',
        'Touching but able to slide past each other',
        'Far apart and moving in all directions',
        'Stuck together in long chains that bend and fold',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pms-mis-liquid-grid',
    },
    {
      id: 'pms-q7',
      type: 'drag-order',
      stem: 'Place these states of matter in order, from the most closely packed particles to the most spread out particles.',
      tier: 'core',
      items: ['Liquid', 'Gas', 'Solid'],
      correctOrder: [2, 0, 1],
      xpValue: 15,
    },
    {
      id: 'pms-q3',
      type: 'multiple-choice',
      stem: 'How do the particles in a gas behave?',
      tier: 'core',
      options: [
        'Touching in a fixed pattern',
        'Touching but able to slide past each other',
        'Sitting in a thin layer at the bottom of the container',
        'Far apart and moving fast in all directions',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pms-mis-fall',
    },
    {
      id: 'pms-q4',
      type: 'numeric-entry',
      stem: 'A 30 g ice cube is left in a warm room until it has fully melted. What is the mass of the water in grams?',
      tier: 'core',
      correctAnswer: 30,
      unit: 'g',
      xpValue: 10,
      hint: 'No particles are added or taken away when ice melts.',
      misconceptionId: 'pms-mis-mass-changes',
    },
    {
      id: 'pms-q5',
      type: 'numeric-entry',
      stem: 'A 250 ml balloon is filled with helium gas. What volume of the balloon does the gas fill?',
      tier: 'core',
      correctAnswer: 250,
      unit: 'ml',
      xpValue: 10,
      hint: 'A gas spreads out to take up the whole space inside its container.',
    },
    {
      id: 'pms-q8',
      type: 'multiple-choice',
      stem: 'A block of iron is heated, but it stays solid. What happens to its particles?',
      tier: 'confident',
      options: [
        'They vibrate more vigorously in their fixed places',
        'Each particle gets bigger',
        'They slow down and stop completely',
        'They float away from the block into the air',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pms-mis-bigger',
    },
    {
      id: 'pms-q9',
      type: 'multiple-choice',
      stem: 'Why can a gas be squeezed into a smaller space much more easily than a liquid?',
      tier: 'confident',
      options: [
        'Gas particles have large gaps between them, but liquid particles already touch',
        'Liquid particles are bigger than gas particles',
        'Liquids are heavier than gases, so they resist being squeezed',
        'There is air between the particles in a liquid that pushes back',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'pms-mis-air-between',
    },
    {
      id: 'pms-q10',
      type: 'numeric-entry',
      stem: 'A sealed bottle holds 80 g of liquid water. The bottle is left in a freezer until all the water has frozen into ice. What is the mass of the ice in grams?',
      tier: 'confident',
      correctAnswer: 80,
      unit: 'g',
      xpValue: 15,
      hint: 'The bottle is sealed, so no particles can enter or leave.',
    },
    {
      id: 'pms-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A puff of perfume is sprayed in one corner of a classroom. After a few minutes the smell reaches a pupil at the other end of the room. Use the particle model to explain why.',
      tier: 'confident',
      steps: [
        'When perfume leaves the sprayer it forms a gas, so its particles are far apart with very weak forces between them.',
        'The particles move at high speed in all directions.',
        null,
        'After a few minutes some perfume particles have spread all the way across the classroom and reach the pupil at the other end.',
      ],
      missingStepIndex: 2,
      correctStep:
        'They keep colliding with air particles and bouncing off in new directions, so the perfume slowly spreads through the whole room.',
      xpValue: 20,
    },
    {
      id: 'pms-q12',
      type: 'labelled-image',
      stem: 'Drag each label onto the picture that shows that state of matter.',
      tier: 'confident',
      viewBox: '0 0 300 100',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><g><rect x="10" y="10" width="80" height="80" fill="#F8FAFC" stroke="#94A3B8"/><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.6"><circle cx="25" cy="25" r="6"/><circle cx="40" cy="25" r="6"/><circle cx="55" cy="25" r="6"/><circle cx="70" cy="25" r="6"/><circle cx="25" cy="40" r="6"/><circle cx="40" cy="40" r="6"/><circle cx="55" cy="40" r="6"/><circle cx="70" cy="40" r="6"/><circle cx="25" cy="55" r="6"/><circle cx="40" cy="55" r="6"/><circle cx="55" cy="55" r="6"/><circle cx="70" cy="55" r="6"/><circle cx="25" cy="70" r="6"/><circle cx="40" cy="70" r="6"/><circle cx="55" cy="70" r="6"/><circle cx="70" cy="70" r="6"/></g></g><g><rect x="110" y="10" width="80" height="80" fill="#F8FAFC" stroke="#94A3B8"/><g fill="#22C55E" stroke="#14532D" stroke-width="0.6"><circle cx="125" cy="40" r="6"/><circle cx="138" cy="42" r="6"/><circle cx="152" cy="38" r="6"/><circle cx="165" cy="44" r="6"/><circle cx="178" cy="40" r="6"/><circle cx="122" cy="55" r="6"/><circle cx="135" cy="58" r="6"/><circle cx="150" cy="55" r="6"/><circle cx="164" cy="60" r="6"/><circle cx="178" cy="56" r="6"/><circle cx="125" cy="72" r="6"/><circle cx="142" cy="74" r="6"/><circle cx="158" cy="72" r="6"/><circle cx="174" cy="76" r="6"/></g></g><g><rect x="210" y="10" width="80" height="80" fill="#F8FAFC" stroke="#94A3B8"/><g fill="#A855F7" stroke="#581C87" stroke-width="0.6"><circle cx="222" cy="22" r="5"/><circle cx="262" cy="20" r="5"/><circle cx="280" cy="38" r="5"/><circle cx="240" cy="50" r="5"/><circle cx="220" cy="72" r="5"/><circle cx="272" cy="78" r="5"/></g></g></svg>',
      hotspots: [
        { id: 'pms-q12-h1', x: 50, y: 50, correctLabel: 'Solid' },
        { id: 'pms-q12-h2', x: 150, y: 50, correctLabel: 'Liquid' },
        { id: 'pms-q12-h3', x: 250, y: 50, correctLabel: 'Gas' },
      ],
      labels: ['Solid', 'Liquid', 'Gas', 'Mixture', 'Element'],
      xpValue: 20,
    },
    {
      id: 'pms-q13',
      type: 'spot-misconception',
      stem: 'Tom says: "When a gas is in a sealed jar, the gas particles fall and sit in a thin layer at the bottom because of gravity." Is he right?',
      tier: 'confident',
      statements: [
        {
          text: 'Tom is right because gravity pulls everything down, including gas particles.',
          isMisconception: true,
        },
        {
          text: 'Tom is wrong. Gas particles move very fast in all directions, so they spread out evenly to fill the whole jar.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pms-mis-fall',
    },
    {
      id: 'pms-q14',
      type: 'multiple-choice',
      stem: 'Which state of matter keeps both a fixed shape and a fixed volume?',
      tier: 'confident',
      options: [
        'Liquid, because its volume does not change',
        'Gas, because it always fills its container',
        'Solid, because its shape and volume are both fixed',
        'Both solid and liquid, because they each have a fixed volume',
      ],
      correctIndex: 2,
      xpValue: 15,
    },
    {
      id: 'pms-q15',
      type: 'multiple-choice',
      stem: 'Aisha boils a full kettle to make tea. After two minutes the kettle whistles and a cloud appears above the spout. What is happening to the water particles?',
      tier: 'challenge',
      options: [
        'The particles inside the kettle are getting bigger and pushing on the lid',
        'The water is gaining mass from the heat, which makes the kettle heavier',
        'The water is splitting into smaller particles that float upwards',
        'The particles are gaining energy, breaking away from each other and escaping as a gas',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'pms-mis-bigger',
    },
    {
      id: 'pms-q16',
      type: 'numeric-entry',
      stem: 'A glass holds 200 g of cold water. Aisha drops in two ice cubes, each with a mass of 25 g. Once the ice has fully melted into the water, what is the total mass of water in the glass?',
      tier: 'challenge',
      correctAnswer: 250,
      unit: 'g',
      xpValue: 25,
      hint: 'Find the total mass of ice first, then think about whether mass changes when ice melts.',
      misconceptionId: 'pms-mis-mass-changes',
    },
    {
      id: 'pms-q17',
      type: 'multiple-choice',
      stem: 'A sealed metal can holds air at room temperature. The can is placed in a hot oven and warms up, but it does not split. What happens to the gas particles inside?',
      tier: 'challenge',
      options: [
        'Each particle gets larger, pushing harder on the inside walls',
        'The number of particles increases, raising the pressure',
        'The particles join together to form a liquid',
        'The particles move faster and hit the walls more often, raising the pressure',
      ],
      correctIndex: 3,
      xpValue: 25,
    },
    {
      id: 'pms-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: When 1 ml of liquid water boils, it forms much more than 1 ml of steam. Use the particle model to explain why steam takes up so much more space than the same mass of liquid water.',
      tier: 'challenge',
      steps: [
        'Liquid water and steam are made of the same water particles, and the particles do not change size when the water boils.',
        'In liquid water the particles are touching each other with only tiny gaps in between.',
        null,
        'Because the gas particles are much further apart, the same number of particles takes up far more space, so 1 ml of water turns into a much larger volume of steam.',
      ],
      missingStepIndex: 2,
      correctStep:
        'When the water boils, the particles gain enough energy to break away from each other and become a gas, so they spread out with large empty gaps between them.',
      xpValue: 25,
    },
    {
      id: 'pms-q19',
      type: 'labelled-image',
      stem: 'Drag each label onto the part of the kitchen scene that shows that state of matter.',
      tier: 'challenge',
      viewBox: '0 0 300 100',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"><rect x="0" y="0" width="300" height="100" fill="#FEF3C7"/><g><rect x="20" y="55" width="60" height="35" fill="#BFDBFE" stroke="#1E3A8A"/><rect x="30" y="60" width="18" height="14" fill="#E0F2FE" stroke="#1E3A8A"/><rect x="52" y="60" width="18" height="14" fill="#E0F2FE" stroke="#1E3A8A"/></g><g><rect x="120" y="40" width="60" height="50" fill="#BFDBFE" stroke="#1E3A8A"/><rect x="125" y="55" width="50" height="32" fill="#3B82F6" opacity="0.7"/></g><g><rect x="220" y="55" width="55" height="35" fill="#94A3B8" stroke="#475569"/><rect x="270" y="58" width="10" height="4" fill="#475569"/><path d="M 275 55 Q 280 40 270 30 Q 260 20 270 10" stroke="#94A3B8" stroke-width="6" fill="none" opacity="0.6"/><path d="M 280 50 Q 290 35 280 25 Q 270 15 285 5" stroke="#94A3B8" stroke-width="6" fill="none" opacity="0.4"/></g></svg>',
      hotspots: [
        { id: 'pms-q19-h1', x: 50, y: 70, correctLabel: 'Solid' },
        { id: 'pms-q19-h2', x: 150, y: 65, correctLabel: 'Liquid' },
        { id: 'pms-q19-h3', x: 280, y: 25, correctLabel: 'Gas' },
      ],
      labels: ['Solid', 'Liquid', 'Gas', 'Element', 'Compound'],
      xpValue: 25,
    },
    {
      id: 'pms-q20',
      type: 'multiple-choice',
      stem: 'On a cold autumn morning in Sevenoaks, Liam notices a thin layer of ice on the inside of his bedroom window. Yesterday the inside of the glass was dry. Which sequence best explains what has happened?',
      tier: 'challenge',
      options: [
        'Liquid water from the room turned straight into a solid on the cold glass',
        'The cold glass split air particles into smaller water particles',
        'Water vapour in the room cooled, turned into liquid water on the glass, then froze into ice',
        'The ice grew out of the glass when the room got cold',
      ],
      correctIndex: 2,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "particles expand when they are heated". Reinforced in Kind's "Students' ideas about changes of state" RSC article, citing Brook et al. 1984: "As the temperature rises, the particles take in the heat and begin to expand."
    {
      id: 'pms-mis-bigger',
      description:
        'When a substance is heated, the individual particles get bigger.',
      triggerAnswer: 'bigger',
      correction:
        'Heating does not change the size of a particle. The particles move faster, and the gaps between them grow.',
      reExplanation:
        'Picture water in a kettle. As it heats, each tiny water particle stays exactly the same size, but it gains energy and moves at a higher speed. Eventually the particles bounce around so fast that they break away as steam, leaving much wider gaps between them.',
    },
    // Source: "Many students think that atoms do not move in a solid", IOPSpark (Institute of Physics) misconceptions catalogue (https://spark.iop.org/many-students-think-atoms-do-not-move-solid). Cross-references the broader "particles are not in constant motion" finding documented in Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education.
    {
      id: 'pms-mis-stop',
      description:
        'Once a substance is solid, its particles are no longer moving.',
      triggerAnswer: 'stop',
      correction:
        'Particles in a solid still move. They vibrate in place around their fixed positions, even at room temperature.',
      reExplanation:
        'Think of each solid particle as wiggling on the spot, like a child fidgeting in a chair. The particles cannot swap places with their neighbours, but they never go fully still. Cooling a solid only slows the vibration, it does not stop it.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "when asked, 'Why don't the particles fall to the bottom?', only around half thought that the particles were in constant motion." Reinforced by Novick and Nussbaum (1981), cited in Kind's RSC "Students' ideas about changes of state": "students may represent this pictorially by drawing particles of air accumulating around the sides or at the bottom of the vessel."
    {
      id: 'pms-mis-fall',
      description:
        'Gas particles sink and settle at the bottom of a container because of gravity.',
      triggerAnswer: 'fall',
      correction:
        'Gas particles move so fast and in so many directions that they spread out evenly, instead of falling to the bottom.',
      reExplanation:
        'Spray a small puff of perfume in one corner of a room and within minutes the smell reaches every corner. Gravity does pull on gas particles a little, but their high speed and constant collisions matter much more, so the gas fills the whole space.',
    },
    // Authored, no external source. Classroom-observed Year 7 confusion when comparing solid and liquid particle diagrams; aligns with general teacher guidance on state-diagram interpretation.
    {
      id: 'pms-mis-liquid-grid',
      description:
        'Liquid particles are arranged in a regular pattern, like a grid.',
      triggerAnswer: 'liquid-grid',
      correction:
        'Liquid particles still touch each other, but they sit in no fixed pattern and can slide and roll past their neighbours.',
      reExplanation:
        'Picture marbles in a bag. They press against each other, but they shift around when you tilt the bag. Liquid particles behave the same way. The regular, repeating pattern only appears in solids, where particles cannot move out of place.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: "About 40% of 16+ year olds responded to the question 'What is there between particles?', with 'vapour or oxygen', while a further 10 - 15% thought 'a pollutant' was present." Also David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26): "Space between particles is filled with air..."
    {
      id: 'pms-mis-air-between',
      description:
        'There is air in the gaps between the particles in a solid or liquid.',
      triggerAnswer: 'air-between',
      correction:
        'Nothing sits between the particles. The gaps are simply empty space, not air or any other substance.',
      reExplanation:
        'Air is itself made of particles. If air filled the gaps between water particles, those gaps would also have to hold its particles. Instead, the gaps between liquid and solid particles are truly empty. This is why solids and liquids cannot easily be squeezed any smaller.',
    },
    // Source: Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05): the article frames the canonical demonstration "allowing some ice to melt in a beaker and measuring the mass before and after to show that the mass doesn't change", explicitly to counter the misconception that the mass of a substance changes through a state change.
    {
      id: 'pms-mis-mass-changes',
      description:
        'The mass of a substance changes when it melts, freezes or boils.',
      triggerAnswer: 'mass-changes',
      correction:
        'Mass is conserved during a change of state. The same particles are present before and after, so the total mass stays the same.',
      reExplanation:
        'Place 100 g of ice on a balance and let it melt. The water that forms still weighs 100 g. The particles have not gained or lost any mass, they have only moved into a new arrangement. The same is true for boiling and freezing.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const particleModelZone: Zone = {
  id: 'chemistry-particle-model',
  name: 'Particle Model',
  realm: 'elementia',
  nodeIds: [
    'chemistry-particle-model-states',
    'chemistry-particle-model-state-changes',
  ],
}
