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

export const diffusion: SkillNode = {
  id: 'chemistry-particle-model-diffusion',
  title: 'Diffusion',
  description:
    'Use the particle model to describe diffusion as the net movement of particles from a region of high concentration to a region of low concentration. Compare the rate of diffusion in gases and liquids, and explain why warming a substance speeds it up.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: [
    'chemistry-particle-model-states',
    'chemistry-particle-model-state-changes',
  ],
  curriculum: {
    ks3Objective:
      'Diffusion in terms of the particle model (the random movement of particles from a region of high concentration to a region of low concentration).',
    awardingBodies: {
      aqa: '4.2.2.2 Diffusion (8462)',
      edexcel: 'Topic 1.13 Diffusion in terms of the particle model (1CH0)',
      ocr: 'C1.1d Diffusion and the particle model (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'dif-scene-perfume',
      title: 'A Spray of Perfume Reaches the Back of the Room',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a single puff of perfume spreads across a Year 7 classroom.',
      data: {
        viewBox: '0 0 320 160',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#FEF3C7"/><rect x="0" y="140" width="320" height="20" fill="#D6D3D1"/><g><rect x="10" y="60" width="20" height="60" fill="#94A3B8" stroke="#475569"/><circle cx="20" cy="40" r="10" fill="#FBBF24" stroke="#92400E"/><text x="20" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">SPRAYER</text></g><g fill="#A855F7" opacity="0.85"><circle cx="40" cy="55" r="3"/><circle cx="48" cy="62" r="3"/><circle cx="36" cy="70" r="3"/><circle cx="52" cy="50" r="3"/><circle cx="44" cy="78" r="3"/></g><g fill="#A855F7" opacity="0.55"><circle cx="100" cy="50" r="2.5"/><circle cx="120" cy="70" r="2.5"/><circle cx="115" cy="40" r="2.5"/><circle cx="135" cy="80" r="2.5"/><circle cx="148" cy="55" r="2.5"/><circle cx="90" cy="80" r="2.5"/><circle cx="160" cy="70" r="2.5"/></g><g fill="#A855F7" opacity="0.3"><circle cx="200" cy="40" r="2"/><circle cx="220" cy="60" r="2"/><circle cx="240" cy="80" r="2"/><circle cx="260" cy="50" r="2"/><circle cx="280" cy="70" r="2"/><circle cx="300" cy="55" r="2"/><circle cx="210" cy="90" r="2"/><circle cx="270" cy="90" r="2"/><circle cx="285" cy="35" r="2"/></g><g><rect x="285" y="80" width="25" height="40" fill="#3B82F6" stroke="#1E3A8A"/><circle cx="297" cy="75" r="6" fill="#FED7AA" stroke="#7C2D12"/><text x="297" y="135" text-anchor="middle" font-size="7" fill="#1E3A8A">PUPIL</text></g></svg>',
        hotspots: [
          {
            id: 'dif-h-perfume-spray',
            x: 14,
            y: 30,
            label: 'High concentration near the sprayer',
            description:
              'Just after the spray, perfume particles are packed tightly in one corner of the room.',
          },
          {
            id: 'dif-h-perfume-mid',
            x: 40,
            y: 50,
            label: 'Particles move in random directions',
            description:
              'Each perfume particle flies in a straight line until it hits an air particle, then bounces off in a new direction.',
          },
          {
            id: 'dif-h-perfume-spread',
            x: 65,
            y: 30,
            label: 'Net movement to low concentration',
            description:
              'Far more particles drift away from the corner than back to it, so the perfume slowly spreads out.',
          },
          {
            id: 'dif-h-perfume-pupil',
            x: 92,
            y: 50,
            label: 'A pupil at the back smells the perfume',
            description:
              'After a few minutes, enough perfume particles reach the back of the room for the pupil to smell them.',
          },
        ],
      },
    },
    {
      id: 'dif-scene-bromine',
      title: 'The Bromine Demonstration',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the bromine demo to see what happens when the glass disc between the two gas jars is removed.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="40" y="20" width="80" height="160" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><rect x="42" y="100" width="76" height="78" fill="#92400E" opacity="0.55"/><line x1="40" y1="100" x2="120" y2="100" stroke="#475569" stroke-width="3"/><text x="80" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">BEFORE</text><text x="80" y="60" text-anchor="middle" font-size="7" fill="#1E3A8A">air (clear)</text><text x="80" y="145" text-anchor="middle" font-size="7" fill="#FFFFFF">bromine</text></g><g><rect x="200" y="20" width="80" height="160" fill="none" stroke="#1E3A8A" stroke-width="1.5"/><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#92400E" stop-opacity="0.55"/></linearGradient></defs><rect x="202" y="22" width="76" height="156" fill="url(#g1)"/><text x="240" y="195" text-anchor="middle" font-size="8" fill="#1E3A8A">AFTER (a few minutes)</text></g></svg>',
        hotspots: [
          {
            id: 'dif-h-brom-bottom',
            x: 25,
            y: 70,
            label: 'Bromine vapour starts at the bottom',
            description:
              'Bromine is a heavy brown vapour. It begins in the lower jar with air sealed above by a glass disc.',
          },
          {
            id: 'dif-h-brom-disc',
            x: 25,
            y: 50,
            label: 'Glass disc is removed',
            description:
              'The teacher slides out the disc. The two gases are now in contact and free to mix.',
          },
          {
            id: 'dif-h-brom-mix',
            x: 75,
            y: 50,
            label: 'Brown colour spreads upward',
            description:
              'Even though the bromine is heavier than air, its particles still move in all directions and mix into the air above.',
          },
          {
            id: 'dif-h-brom-final',
            x: 75,
            y: 90,
            label: 'Both jars look the same shade',
            description:
              'After a few minutes the brown colour is spread evenly through both jars. The bromine has diffused.',
          },
        ],
      },
    },
    {
      id: 'dif-scene-food-colour',
      title: 'A Drop of Food Colouring in Cold and Hot Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a drop of red food colouring in two beakers, one cold and one freshly boiled.',
      data: {
        viewBox: '0 0 320 180',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect x="0" y="0" width="320" height="180" fill="#FEF3C7"/><g><rect x="30" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="35" y="60" width="90" height="95" fill="#DBEAFE"/><circle cx="80" cy="80" r="10" fill="#DC2626" opacity="0.7"/><circle cx="80" cy="100" r="6" fill="#DC2626" opacity="0.4"/><circle cx="75" cy="115" r="4" fill="#DC2626" opacity="0.25"/><text x="80" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">COLD WATER (5 C)</text></g><g><rect x="190" y="40" width="100" height="120" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="195" y="60" width="90" height="95" fill="#FECACA" opacity="0.6"/><g fill="#DC2626" opacity="0.6"><circle cx="220" cy="75" r="3"/><circle cx="245" cy="85" r="3"/><circle cx="270" cy="100" r="3"/><circle cx="210" cy="110" r="3"/><circle cx="240" cy="120" r="3"/><circle cx="265" cy="135" r="3"/><circle cx="225" cy="145" r="3"/><circle cx="255" cy="70" r="3"/><circle cx="200" cy="90" r="3"/><circle cx="280" cy="80" r="3"/></g><text x="240" y="30" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">HOT WATER (80 C)</text><g stroke="#94A3B8" stroke-width="0.6" fill="none" opacity="0.5"><path d="M 200 155 Q 205 145 200 135"/><path d="M 250 155 Q 255 140 250 130"/></g></svg>',
        hotspots: [
          {
            id: 'dif-h-food-cold',
            x: 25,
            y: 50,
            label: 'Cold water: a slow plume',
            description:
              'In cold water the dye sinks slowly and the colour spreads out over many minutes.',
          },
          {
            id: 'dif-h-food-hot',
            x: 75,
            y: 50,
            label: 'Hot water: spreads in seconds',
            description:
              'In hot water the same drop spreads through the whole beaker in seconds, leaving a uniform pink shade.',
          },
          {
            id: 'dif-h-food-why',
            x: 50,
            y: 92,
            label: 'Why hot is faster',
            description:
              'Hot water particles move at higher speed. They knock the dye particles around more often, so the dye spreads faster.',
          },
        ],
      },
    },
    {
      id: 'dif-scene-gas-liquid',
      title: 'Gas Versus Liquid: Why Diffusion Speed Differs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare particle layouts in a gas and a liquid, and read why diffusion is much faster in a gas.',
      data: {
        viewBox: '0 0 320 160',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160"><rect x="0" y="0" width="320" height="160" fill="#FEF3C7"/><g><rect x="20" y="30" width="120" height="110" fill="#F8FAFC" stroke="#94A3B8"/><text x="80" y="22" text-anchor="middle" font-size="9" font-weight="600" fill="#475569">GAS</text><g fill="#A855F7" stroke="#581C87" stroke-width="0.6"><circle cx="35" cy="45" r="4"/><circle cx="80" cy="55" r="4"/><circle cx="125" cy="45" r="4"/><circle cx="55" cy="80" r="4"/><circle cx="105" cy="85" r="4"/><circle cx="40" cy="115" r="4"/><circle cx="90" cy="120" r="4"/><circle cx="125" cy="110" r="4"/></g><g stroke="#581C87" stroke-width="0.6" fill="none" opacity="0.6"><path d="M 35 45 l 4 -3" marker-end="url(#a2)"/><path d="M 80 55 l 5 5" marker-end="url(#a2)"/><path d="M 125 45 l -4 3" marker-end="url(#a2)"/><path d="M 90 120 l 4 -5" marker-end="url(#a2)"/></g></g><g><rect x="180" y="30" width="120" height="110" fill="#F8FAFC" stroke="#94A3B8"/><text x="240" y="22" text-anchor="middle" font-size="9" font-weight="600" fill="#475569">LIQUID</text><g fill="#22C55E" stroke="#14532D" stroke-width="0.6"><circle cx="195" cy="45" r="6"/><circle cx="210" cy="48" r="6"/><circle cx="225" cy="45" r="6"/><circle cx="240" cy="48" r="6"/><circle cx="255" cy="45" r="6"/><circle cx="270" cy="48" r="6"/><circle cx="285" cy="45" r="6"/><circle cx="195" cy="65" r="6"/><circle cx="210" cy="68" r="6"/><circle cx="225" cy="65" r="6"/><circle cx="240" cy="68" r="6"/><circle cx="255" cy="65" r="6"/><circle cx="270" cy="68" r="6"/><circle cx="285" cy="65" r="6"/><circle cx="195" cy="85" r="6"/><circle cx="210" cy="88" r="6"/><circle cx="225" cy="85" r="6"/><circle cx="240" cy="88" r="6"/><circle cx="255" cy="85" r="6"/><circle cx="270" cy="88" r="6"/><circle cx="285" cy="85" r="6"/><circle cx="195" cy="105" r="6"/><circle cx="220" cy="108" r="6"/><circle cx="245" cy="105" r="6"/><circle cx="270" cy="108" r="6"/></g></g><defs><marker id="a2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#581C87"/></marker></defs></svg>',
        hotspots: [
          {
            id: 'dif-h-gl-gas-space',
            x: 25,
            y: 30,
            label: 'Gas: large gaps',
            description:
              'Gas particles have large empty gaps between them, so a moving particle can travel a long way before it bumps into another.',
          },
          {
            id: 'dif-h-gl-gas-fast',
            x: 25,
            y: 80,
            label: 'Gas: high speed and few collisions',
            description:
              'Particles travel at hundreds of metres per second between collisions, so a perfume can cross a room in minutes.',
          },
          {
            id: 'dif-h-gl-liquid-tight',
            x: 78,
            y: 30,
            label: 'Liquid: particles are touching',
            description:
              'Liquid particles touch their neighbours. There is barely any empty space between them.',
          },
          {
            id: 'dif-h-gl-liquid-slow',
            x: 78,
            y: 80,
            label: 'Liquid: many collisions slow diffusion',
            description:
              'A dye particle in water keeps colliding with water particles, so it inches along. Diffusion is far slower than in a gas.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'dif-worked-1',
      title: 'Why a perfume sprayed in one corner reaches every pupil',
      steps: [
        {
          explanation:
            'Picture the moment after the spray. A high concentration of perfume particles sits in one corner. The rest of the room has hardly any.',
          maths: 'concentration: high in corner, low elsewhere',
        },
        {
          explanation:
            'Perfume particles and air particles are constantly moving in random directions at high speed.',
        },
        {
          explanation:
            'Many more perfume particles start in the corner than anywhere else, so far more head outwards than head back in. The result is a net movement away from the corner.',
          maths: 'net movement: high to low concentration',
        },
        {
          explanation:
            'After a few minutes the particles have spread evenly through the room. The pupil at the back can smell the perfume, and there is no longer any noticeable difference between corners.',
        },
        {
          explanation:
            'So diffusion explains why the smell reaches the back: random motion plus a difference in concentration means a steady spread until the perfume is even.',
        },
      ],
    },
    {
      id: 'dif-worked-2',
      title: 'Why hot tea diffuses sugar faster than iced water',
      steps: [
        {
          explanation:
            'Question: Aisha drops a sugar cube into a mug of fresh hot tea, and Liam drops the same cube into a glass of iced water. Both are left without stirring. The sugar mixes through the tea in a couple of minutes, but takes far longer in the iced water. Use the particle model to explain why.',
        },
        {
          explanation:
            'In both drinks the sugar particles dissolve and start to spread by diffusion. They move from the high concentration around the cube to the rest of the drink.',
        },
        {
          explanation:
            'In hot tea the water particles have much more energy, so they move at higher speeds.',
        },
        {
          explanation:
            'Faster water particles knock the sugar particles around more often and harder, so the sugar particles spread through the gaps between water particles at a higher rate.',
        },
        {
          explanation:
            'In iced water the water particles move much more slowly. They jostle the sugar particles less often, so the sugar takes much longer to spread evenly.',
        },
        {
          explanation:
            'So both drinks diffuse, but the rate is much higher in the hot tea because the particles carry more energy at higher temperature.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'dif-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best describes diffusion?',
      tier: 'core',
      options: [
        'The pull of gravity making heavy particles sink to the bottom of a container',
        'A liquid changing into a gas when it reaches its boiling point',
        'The spreading of particles by random motion, from a region of high concentration to a region of low concentration',
        'A chemical reaction that takes place when two substances are mixed',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'dif-mis-needs-stirring',
    },
    {
      id: 'dif-q2',
      type: 'multiple-choice',
      stem: 'In which state does diffusion happen at the highest rate?',
      tier: 'core',
      options: [
        'It happens at the same speed in all three',
        'Solid',
        'Liquid',
        'Gas',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'dif-mis-same-rate',
    },
    {
      id: 'dif-q3',
      type: 'free-text',
      stem: 'A puff of perfume is sprayed in one corner of a still classroom with the windows shut. A pupil at the other end of the room can smell the perfume a few minutes later. Use the particle model to explain why, in two or three sentences.',
      tier: 'core',
      sampleAnswer:
        'After the spray, the perfume has a high concentration in one corner and the rest of the room has none. The perfume particles move randomly in all directions and keep colliding with air particles. Many more particles travel away from the corner than back to it, so the perfume slowly spreads through the whole room until it reaches the pupil at the back.',
      keywords: ['random', 'high', 'low', 'concentration', 'particles', 'spread'],
      xpValue: 15,
      misconceptionId: 'dif-mis-current',
    },
    {
      id: 'dif-q4',
      type: 'multiple-choice',
      stem: 'A drop of red food colouring is placed in a beaker of water and not stirred. What happens after about ten minutes?',
      tier: 'core',
      options: [
        'The red colour slowly spreads out through the water, even with no stirring',
        'The red colour stays in one tight blob until the water is stirred',
        'The red colour sinks to the very bottom and stays there',
        'The red colour disappears because the dye reacts with the water',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'dif-mis-needs-stirring',
    },
    {
      id: 'dif-q5',
      type: 'numeric-entry',
      stem: 'In an experiment, a drop of dye spreads across 8 cm of cold water in 40 minutes. The same dye is added to hot water at the same temperature as a freshly boiled kettle. The hot water particles have much more energy. About how many minutes will it now take to spread the same 8 cm? Pick the closest value from 5, 40, 80 or 200.',
      tier: 'core',
      correctAnswer: 5,
      unit: 'minutes',
      xpValue: 10,
      hint: 'Hot particles move faster, so they should knock the dye particles along at a higher rate than cold ones.',
      misconceptionId: 'dif-mis-temperature-no-effect',
    },
    {
      id: 'dif-q6',
      type: 'drag-order',
      stem: 'Order these scenes from the slowest rate of diffusion to the fastest.',
      tier: 'core',
      items: [
        'A drop of food colouring in iced water',
        'A drop of food colouring in fresh tap water at room temperature',
        'A puff of perfume sprayed in a warm room',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
    },
    {
      id: 'dif-q7',
      type: 'spot-misconception',
      stem: 'Liam says: "Bromine vapour is much heavier than air, so when the glass disc is taken away from the gas jar demo the bromine just stays at the bottom and never mixes with the air above." Is he right?',
      tier: 'core',
      statements: [
        {
          text: 'Liam is right. Heavier gases sink, so the bromine would not rise into the air above.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. Bromine particles still move randomly in all directions, so they spread upward into the air and the brown colour fills both jars within minutes.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dif-mis-heavy-stays-down',
    },
    {
      id: 'dif-q8',
      type: 'multiple-choice',
      stem: 'Two beakers each hold 200 ml of water and are left on a bench without stirring. A single drop of blue dye is added to each beaker at the same time. Beaker A is at 5 C and beaker B is at 60 C. After three minutes, what will the beakers most likely look like?',
      tier: 'confident',
      options: [
        'A is fully blue; B is still mostly clear',
        'Both beakers are uniformly pale blue',
        'B is fully pale blue; A still has a blue plume around the drop',
        'Both beakers look exactly the same as they did at the start',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dif-mis-temperature-no-effect',
    },
    {
      id: 'dif-q9',
      type: 'multiple-choice',
      stem: 'Which of these is the best example of diffusion in everyday life?',
      tier: 'confident',
      options: [
        'A bicycle pump pushing air into a flat tyre',
        'A tea bag being squeezed against the side of a mug',
        'Stirring sugar into a cup of coffee',
        'The smell of fresh bread spreading from the oven into the kitchen',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'dif-mis-needs-stirring',
    },
    {
      id: 'dif-q10',
      type: 'multiple-choice',
      stem: 'Why does diffusion happen much more slowly in a liquid than in a gas?',
      tier: 'confident',
      options: [
        'The particles in a liquid are larger than the particles in a gas',
        'Liquid particles do not move at all, so they cannot diffuse',
        'Liquid particles touch each other, so a moving particle keeps colliding and travels only a short way each time',
        'Liquids contain less energy than gases at the same temperature, so diffusion stops',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'dif-mis-same-rate',
    },
    {
      id: 'dif-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A flask of bromine vapour is connected to an empty flask of air with a glass tap between them. The tap is opened. Use the particle model to explain why both flasks soon look the same shade of brown.',
      tier: 'confident',
      steps: [
        'Just after the tap opens, the bromine flask has a high concentration of bromine particles and the air flask has none.',
        'Bromine particles and air particles are moving in random directions at high speed in both flasks.',
        null,
        'Once the brown colour is even in both flasks, the same number of bromine particles cross the tap each way every second, so the colour stays the same.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Many more bromine particles cross the tap from the bromine flask into the air flask than the other way, so there is a net movement of bromine into the empty flask until the concentration is even.',
      xpValue: 20,
    },
    {
      id: 'dif-q12',
      type: 'numeric-entry',
      stem: 'A teacher releases a small amount of perfume at the front of a classroom that is 10 metres long. After 4 minutes, every pupil reports that they can smell it. Estimate the average rate the perfume travelled in metres per minute.',
      tier: 'confident',
      correctAnswer: 2.5,
      unit: 'm/min',
      xpValue: 15,
      hint: 'Average rate equals total distance divided by total time.',
    },
    {
      id: 'dif-q13',
      type: 'spot-misconception',
      stem: 'Sophie says: "Diffusion only works if you stir the liquid. Without stirring the dye in a beaker would just stay still." Is she right?',
      tier: 'confident',
      statements: [
        {
          text: 'Sophie is right. Particles need to be pushed around by stirring before they can spread.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. The particles move on their own all the time, so the dye spreads even without stirring, just more slowly.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'dif-mis-needs-stirring',
    },
    {
      id: 'dif-q14',
      type: 'multiple-choice',
      stem: 'A pupil drops the same amount of red food colouring into two beakers of water. Beaker P is freshly boiled, beaker Q is iced. Which set of particle behaviours best explains the observation that the colour spreads faster in P?',
      tier: 'confident',
      options: [
        'The water particles in P move faster, so they collide with the dye particles more often and harder',
        'The water particles in P are bigger, so they push the dye further',
        'The dye particles in P split into smaller pieces because of the heat',
        'The dye particles in Q sink because they are heavier when cold',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'dif-mis-bigger-particles',
    },
    {
      id: 'dif-q15',
      type: 'data-extraction',
      stem: 'A pupil times how long a drop of dye takes to fully colour 100 ml of water at different temperatures. The results are: 5 C, 14 minutes; 25 C, 6 minutes; 40 C, 3 minutes; 60 C, 1 minute. Read off the time taken at 40 C, in minutes.',
      tier: 'confident',
      dataSource:
        'Time for a drop of dye to fully colour 100 ml of water at different temperatures: 5 C, 14 minutes; 25 C, 6 minutes; 40 C, 3 minutes; 60 C, 1 minute.',
      correctAnswer: '3',
      xpValue: 15,
      hint: 'Find the row where the temperature column reads 40 C.',
    },
    {
      id: 'dif-q16',
      type: 'multiple-choice',
      stem: 'A pupil opens a small jar of mint extract under a fume cupboard with the fan switched off. The smell takes about a minute to reach a partner standing 2 metres away. The next day, the same jar is opened on a windowsill in direct sunlight, where the air is warmer. The smell now takes about 30 seconds to reach the same partner. Which sentence best explains the change?',
      tier: 'challenge',
      options: [
        'The mint particles are bigger when warmed, so they reach the partner sooner',
        'Sunlight changes the chemistry of the mint extract into a stronger compound',
        'Warmer air particles move faster on average, so the mint particles diffuse through the air at a higher rate',
        'The fume cupboard fan must have been switched on by accident, blowing the air around',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'dif-mis-bigger-particles',
    },
    {
      id: 'dif-q17',
      type: 'numeric-entry',
      stem: 'In a sealed kitchen of length 8 metres, a small puff of vanilla essence is released at one end. The cook smells the vanilla 2 minutes later, standing at the far end. Calculate the average rate of diffusion in metres per minute.',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'm/min',
      xpValue: 25,
      hint: 'Use rate equals distance divided by time. The distance is the full length of the room.',
    },
    {
      id: 'dif-q18',
      type: 'multiple-choice',
      stem: 'A teacher sets up two gas jars in a fume cupboard. Jar X holds bromine vapour at 20 C and jar Y holds bromine vapour at 60 C. A glass disc is removed from the top of each jar at the same time, leaving an empty jar of air on top. Which jar shows the brown colour spreading into the upper jar at a higher rate, and why?',
      tier: 'challenge',
      options: [
        'Jar X, because cold gases are heavier and rise faster',
        'Jar Y, because the bromine particles have more energy and move faster, so more of them travel into the upper jar each second',
        'Jar X, because warm air resists diffusion more strongly',
        'Both at the same rate, because diffusion does not depend on temperature',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'dif-mis-temperature-no-effect',
    },
    {
      id: 'dif-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil compares two experiments. Experiment 1: a drop of red dye in cold water; Experiment 2: a drop of the same dye in hot water. Both beakers hold 200 ml. The dye spreads through experiment 2 in seconds and through experiment 1 in many minutes. Use the particle model to explain why temperature changes the rate of diffusion.',
      tier: 'challenge',
      steps: [
        'In both beakers the dye starts as a high concentration in one place and the rest of the water has none, so the dye spreads by diffusion.',
        'In hot water the water particles have much more energy than in cold water, so they move at a higher average speed.',
        null,
        'So the higher temperature in experiment 2 makes the dye spread at a far higher rate than in experiment 1.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Faster moving water particles collide with the dye particles more often and harder, so the dye particles are pushed through the gaps between the water particles at a higher rate.',
      xpValue: 25,
    },
    {
      id: 'dif-q20',
      type: 'multiple-choice',
      stem: 'A garden centre in Tunbridge Wells stores cut roses in two cool rooms. Room A is kept at 18 C and room B is kept at 4 C. The same scented roses are placed in each room. Customers walking down the corridor outside notice the rose scent more strongly when they pass room A. Which sentence best explains why?',
      tier: 'challenge',
      options: [
        'Cooler air destroys the scent particles inside room B',
        'Scent particles only diffuse out of flowers above 4 C; below this they stop',
        'Warmer air in room A means the scent particles diffuse out of the flowers and across the corridor faster than in cooler room B',
        'Cool air pushes the scent back into the flowers in room B',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'dif-mis-temperature-no-effect',
    },
    {
      id: 'dif-q21',
      type: 'numeric-entry',
      stem: 'Aisha drops 5 ml of blue food colouring into a 1000 ml jug of warm water. Once the dye has fully diffused without stirring, what is the total volume of liquid in the jug, in millilitres?',
      tier: 'challenge',
      correctAnswer: 1005,
      unit: 'ml',
      xpValue: 25,
      hint: 'Diffusion spreads the dye through the water. No particles are added or removed, so the total volume is just the dye plus the water.',
      misconceptionId: 'dif-mis-needs-stirring',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "Many learners do not see particles as in constant motion and explain spreading by reference to draughts or stirring rather than random particle movement." Also Bar V (1989) and BEST diagnostic question sets (UCL / STEM Learning) on diffusion in liquids without stirring.
    {
      id: 'dif-mis-needs-stirring',
      description:
        'Diffusion only happens if a liquid is stirred or if there is a draught in a room. Without it, particles stay where they are.',
      triggerAnswer: 'needs-stirring',
      correction:
        'Particles are always moving on their own, so diffusion happens with no stirring or draught at all. Stirring just speeds it up.',
      reExplanation:
        'Place a drop of food colouring into a still beaker of water and leave it on a windowsill for an hour. The colour spreads through the water without any help, because the water particles and the dye particles are all in random motion. The same is true for a perfume sprayed in a still room.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a long-standing finding (Brook et al. 1984; Lee et al. 1993) is that learners imagine smells "carried by a current of air" rather than by random particle movement. The same ride-on-a-current trigger is documented in BEST KS3 diffusion question sets.
    {
      id: 'dif-mis-current',
      description:
        'A smell reaches the other end of the room because a current of air or a breeze carries the smell across.',
      triggerAnswer: 'current',
      correction:
        'In a still room there is no breeze. The smell reaches the back because the smell particles move randomly in all directions and slowly fill the space.',
      reExplanation:
        'Open a small bottle of strong perfume in a sealed classroom with the windows shut and the air conditioning off. Within minutes the smell still reaches the back. There is no current carrying it. Each perfume particle keeps colliding with air particles and bouncing off in a new direction, until the perfume has spread through the whole room.',
    },
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2018, Paper 1F (8464/C/1F), Q03 on diffusion: examiners noted that many learners stated diffusion happens at the same rate in solids, liquids and gases, or that stirring was required for it to occur in a liquid. Reinforced by the rate-of-diffusion-vs-state finding in OCR Gateway Chemistry examiner reports for J248 (2019, 2022).
    {
      id: 'dif-mis-same-rate',
      description:
        'Diffusion happens at the same rate in gases, liquids and solids.',
      triggerAnswer: 'same-rate',
      correction:
        'In fact diffusion is much faster in a gas than in a liquid, and barely happens at all in a solid at room temperature. Particle spacing controls the rate.',
      reExplanation:
        'In a gas, particles have large empty gaps between them and travel a long way before each collision, so they spread fast. In a liquid, particles touch their neighbours, so a moving particle has to push through many others. In a solid, particles only vibrate in fixed places, so diffusion is far too slow to notice in a school lesson.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q05 on diffusion: candidates often wrote that "diffusion does not depend on temperature" or that warming a liquid "made the particles bigger" rather than faster. Also flagged in the Best Evidence Science Teaching diagnostic on rates of diffusion (UCL / STEM Learning).
    {
      id: 'dif-mis-temperature-no-effect',
      description:
        'Temperature has no effect on the rate of diffusion. Hot and cold water spread a dye at the same speed.',
      triggerAnswer: 'temperature-no-effect',
      correction:
        'In fact warming a substance makes its particles move faster, so they spread by diffusion at a higher rate.',
      reExplanation:
        'Drop the same amount of food colouring into a beaker of iced water and a beaker of freshly boiled water. The hot water turns a uniform colour in seconds. The cold water still has streaks of dye visible after several minutes. Hot water particles carry more energy, so they collide with the dye particles more often and push them through the water at a higher rate.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: a recurring finding is that learners explain higher rates of diffusion at higher temperatures by saying "the particles get bigger" rather than "the particles move faster". The same trigger is documented in CGP KS3 Chemistry common-mistake callouts on the particle model.
    {
      id: 'dif-mis-bigger-particles',
      description:
        'When a substance is warmed, its particles get bigger, so they cover more ground when they diffuse.',
      triggerAnswer: 'bigger-particles',
      correction:
        'In fact each particle stays the same size at any temperature. Warming a substance makes its particles move faster, not larger.',
      reExplanation:
        'Picture a single perfume particle. Whether the room is warm or cold, the particle itself is the same size. What changes is its speed. In a warm room each particle flies further per second between collisions, so the perfume reaches the other side of the room sooner. The size never changes.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education, citing the bromine demonstration: "students often predict that the bromine, being heavier than air, will stay at the bottom of the gas jar after the disc is removed." The result is widely reported in CGP KS3 Chemistry on diffusion.
    {
      id: 'dif-mis-heavy-stays-down',
      description:
        'A heavy gas like bromine just sinks to the bottom and never mixes with the air above it.',
      triggerAnswer: 'heavy-stays-down',
      correction:
        'In fact bromine particles still move randomly in all directions, so they spread upward into the air and the brown colour fills both gas jars within minutes.',
      reExplanation:
        'Gravity does pull a little harder on a bromine particle than on a nitrogen particle, but the speeds the particles already have are far greater than the gravity effect over a small distance like a gas jar. The random motion mixes the two gases evenly, leaving both jars the same shade of brown after a few minutes.',
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
    'chemistry-particle-model-diffusion',
  ],
}
