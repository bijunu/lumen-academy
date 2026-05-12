import type { SkillNode } from '@/types/content'

export const densityAndState: SkillNode = {
  id: 'chemistry-particle-model-density-state',
  title: 'Density and State',
  description:
    'Use the particle model to explain why solids and liquids are usually much denser than gases, and why ice has a lower density than liquid water. Apply density equals mass divided by volume to rank everyday substances and predict which will float or sink.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'confident',
  prerequisites: ['chemistry-particle-model-states'],
  curriculum: {
    ks3Objective:
      'The properties of the different states of matter (solid, liquid and gas) in terms of the particle model, including density.',
    awardingBodies: {
      aqa: '4.2.2.1 States of matter; properties of states including density (8462)',
      edexcel: 'Topic 2.1 States of matter and particle spacing; density calculations (1CH0)',
      ocr: 'C1.1 The particle model; relative densities of states of matter (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-density-scene-1',
      title: 'Three Boxes, Three Densities',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how tightly packed the particles are in a solid, a liquid and a gas.',
      data: {
        viewBox: '0 0 320 140',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 140"><rect x="0" y="0" width="320" height="140" fill="#FEF3C7"/><g><rect x="20" y="20" width="80" height="100" fill="#F8FAFC" stroke="#1E3A8A" stroke-width="1.2"/><text x="60" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">SOLID</text><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.5"><circle cx="30" cy="30" r="6"/><circle cx="42" cy="30" r="6"/><circle cx="54" cy="30" r="6"/><circle cx="66" cy="30" r="6"/><circle cx="78" cy="30" r="6"/><circle cx="90" cy="30" r="6"/><circle cx="30" cy="42" r="6"/><circle cx="42" cy="42" r="6"/><circle cx="54" cy="42" r="6"/><circle cx="66" cy="42" r="6"/><circle cx="78" cy="42" r="6"/><circle cx="90" cy="42" r="6"/><circle cx="30" cy="54" r="6"/><circle cx="42" cy="54" r="6"/><circle cx="54" cy="54" r="6"/><circle cx="66" cy="54" r="6"/><circle cx="78" cy="54" r="6"/><circle cx="90" cy="54" r="6"/><circle cx="30" cy="66" r="6"/><circle cx="42" cy="66" r="6"/><circle cx="54" cy="66" r="6"/><circle cx="66" cy="66" r="6"/><circle cx="78" cy="66" r="6"/><circle cx="90" cy="66" r="6"/><circle cx="30" cy="78" r="6"/><circle cx="42" cy="78" r="6"/><circle cx="54" cy="78" r="6"/><circle cx="66" cy="78" r="6"/><circle cx="78" cy="78" r="6"/><circle cx="90" cy="78" r="6"/><circle cx="30" cy="90" r="6"/><circle cx="42" cy="90" r="6"/><circle cx="54" cy="90" r="6"/><circle cx="66" cy="90" r="6"/><circle cx="78" cy="90" r="6"/><circle cx="90" cy="90" r="6"/></g></g><g><rect x="120" y="20" width="80" height="100" fill="#F8FAFC" stroke="#14532D" stroke-width="1.2"/><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">LIQUID</text><g fill="#22C55E" stroke="#14532D" stroke-width="0.5"><circle cx="130" cy="32" r="6"/><circle cx="143" cy="30" r="6"/><circle cx="156" cy="33" r="6"/><circle cx="169" cy="30" r="6"/><circle cx="182" cy="34" r="6"/><circle cx="194" cy="31" r="6"/><circle cx="132" cy="46" r="6"/><circle cx="145" cy="44" r="6"/><circle cx="158" cy="46" r="6"/><circle cx="172" cy="44" r="6"/><circle cx="185" cy="46" r="6"/><circle cx="130" cy="60" r="6"/><circle cx="143" cy="58" r="6"/><circle cx="158" cy="62" r="6"/><circle cx="172" cy="60" r="6"/><circle cx="186" cy="62" r="6"/><circle cx="194" cy="60" r="6"/><circle cx="132" cy="74" r="6"/><circle cx="146" cy="76" r="6"/><circle cx="160" cy="74" r="6"/><circle cx="174" cy="76" r="6"/><circle cx="188" cy="74" r="6"/><circle cx="130" cy="90" r="6"/><circle cx="146" cy="88" r="6"/><circle cx="162" cy="90" r="6"/><circle cx="178" cy="88" r="6"/><circle cx="192" cy="90" r="6"/></g></g><g><rect x="220" y="20" width="80" height="100" fill="#F8FAFC" stroke="#581C87" stroke-width="1.2"/><text x="260" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#581C87">GAS</text><g fill="#A855F7" stroke="#581C87" stroke-width="0.5"><circle cx="232" cy="32" r="4"/><circle cx="272" cy="28" r="4"/><circle cx="290" cy="55" r="4"/><circle cx="248" cy="70" r="4"/><circle cx="226" cy="98" r="4"/><circle cx="282" cy="100" r="4"/></g></g></svg>',
        hotspots: [
          {
            id: 'cpm-density-h-1',
            x: 18,
            y: 60,
            label: 'Solid: many particles in a small box',
            description:
              'Particles touch and sit in a regular pattern, so a big mass fits into a small volume. Density is high.',
          },
          {
            id: 'cpm-density-h-2',
            x: 50,
            y: 60,
            label: 'Liquid: still tightly packed',
            description:
              'Liquid particles still touch their neighbours, so the density is close to the solid version of the same substance.',
          },
          {
            id: 'cpm-density-h-3',
            x: 82,
            y: 60,
            label: 'Gas: hardly anything in the box',
            description:
              'Gas particles are far apart with empty space between them, so the same box holds far fewer particles. Density is very low.',
          },
          {
            id: 'cpm-density-h-4',
            x: 50,
            y: 10,
            label: 'Density equals mass per volume',
            description:
              'Density tells you how much mass is squeezed into each cubic centimetre, written as g/cm cubed.',
          },
        ],
      },
    },
    {
      id: 'cpm-density-scene-2',
      title: 'Ice on a Glass of Squash',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why ice cubes float on the squash in a tall glass.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="90" y="30" width="120" height="150" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.5"/><rect x="95" y="80" width="110" height="95" fill="#F97316" opacity="0.55"/><g><rect x="110" y="65" width="22" height="20" rx="2" fill="#E0F2FE" stroke="#1E3A8A"/><rect x="140" y="60" width="22" height="20" rx="2" fill="#E0F2FE" stroke="#1E3A8A"/><rect x="170" y="68" width="22" height="20" rx="2" fill="#E0F2FE" stroke="#1E3A8A"/></g><text x="150" y="22" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">GLASS OF ORANGE SQUASH</text><text x="150" y="135" text-anchor="middle" font-size="9" font-weight="600" fill="#FFFFFF">squash (liquid water)</text></g><g><rect x="240" y="60" width="60" height="60" fill="#F8FAFC" stroke="#1E3A8A" stroke-width="0.8"/><g fill="#3B82F6" stroke="#1E3A8A" stroke-width="0.4"><circle cx="252" cy="72" r="5"/><circle cx="272" cy="72" r="5"/><circle cx="292" cy="72" r="5"/><circle cx="252" cy="90" r="5"/><circle cx="272" cy="90" r="5"/><circle cx="292" cy="90" r="5"/><circle cx="252" cy="108" r="5"/><circle cx="272" cy="108" r="5"/><circle cx="292" cy="108" r="5"/></g><text x="270" y="55" text-anchor="middle" font-size="7" fill="#1E3A8A">ICE</text><rect x="240" y="130" width="60" height="60" fill="#F8FAFC" stroke="#14532D" stroke-width="0.8"/><g fill="#22C55E" stroke="#14532D" stroke-width="0.4"><circle cx="248" cy="142" r="5"/><circle cx="262" cy="140" r="5"/><circle cx="276" cy="144" r="5"/><circle cx="290" cy="142" r="5"/><circle cx="250" cy="156" r="5"/><circle cx="266" cy="158" r="5"/><circle cx="280" cy="156" r="5"/><circle cx="293" cy="158" r="5"/><circle cx="252" cy="170" r="5"/><circle cx="268" cy="172" r="5"/><circle cx="282" cy="170" r="5"/><circle cx="294" cy="172" r="5"/></g><text x="270" y="185" text-anchor="middle" font-size="7" fill="#14532D">LIQUID WATER</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-density-h-5',
            x: 47,
            y: 38,
            label: 'Ice cubes sit at the top',
            description:
              'Each cube floats on the squash because the ice is less dense than the liquid around it.',
          },
          {
            id: 'cpm-density-h-6',
            x: 85,
            y: 45,
            label: 'Ice: an open particle pattern',
            description:
              'In ice the water particles lock into an open lattice with empty hexagonal gaps, so the same mass takes up more space.',
          },
          {
            id: 'cpm-density-h-7',
            x: 85,
            y: 80,
            label: 'Liquid water: tighter packing',
            description:
              'When ice melts the lattice collapses and the particles pack more tightly, so liquid water has a higher density than ice.',
          },
          {
            id: 'cpm-density-h-8',
            x: 47,
            y: 85,
            label: 'Anomalous water',
            description:
              'Water is unusual. Most substances are denser as a solid than as a liquid, but ice is lighter for its volume than the water it came from.',
          },
        ],
      },
    },
    {
      id: 'cpm-density-scene-3',
      title: 'Floats and Sinks on the School Bench',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare what happens when a cork, an oil drop and a lead fishing weight meet water at room temperature.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="280" height="140" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><rect x="22" y="70" width="276" height="108" fill="#DBEAFE"/><text x="160" y="32" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">BEAKER OF WATER, 1.0 g/cm cubed</text><g><rect x="50" y="60" width="30" height="18" rx="2" fill="#D97706" stroke="#78350F"/><text x="65" y="92" text-anchor="middle" font-size="7" fill="#78350F">CORK</text><text x="65" y="102" text-anchor="middle" font-size="6" fill="#78350F">0.24 g/cm cubed</text></g><g><ellipse cx="150" cy="68" rx="20" ry="6" fill="#FACC15" stroke="#92400E" opacity="0.9"/><text x="150" y="92" text-anchor="middle" font-size="7" fill="#92400E">COOKING OIL</text><text x="150" y="102" text-anchor="middle" font-size="6" fill="#92400E">0.92 g/cm cubed</text></g><g><rect x="240" y="158" width="22" height="14" rx="2" fill="#475569" stroke="#1E293B"/><text x="251" y="148" text-anchor="middle" font-size="7" fill="#1E293B">LEAD WEIGHT</text><text x="251" y="190" text-anchor="middle" font-size="6" fill="#1E293B">11.3 g/cm cubed</text></g></g></svg>',
        hotspots: [
          {
            id: 'cpm-density-h-9',
            x: 20,
            y: 30,
            label: 'Cork bobs at the top',
            description:
              'Cork has a density of about 0.24 g per cubic centimetre, so it floats high in the water.',
          },
          {
            id: 'cpm-density-h-10',
            x: 47,
            y: 30,
            label: 'Cooking oil sits on the surface',
            description:
              'Oil is less dense than water at 0.92 g per cubic centimetre, so it pools in a thin layer on top.',
          },
          {
            id: 'cpm-density-h-11',
            x: 78,
            y: 78,
            label: 'Lead weight drops to the bottom',
            description:
              'Lead has a density of 11.3 g per cubic centimetre, so the same volume holds far more mass than the water it pushes aside, and it sinks.',
          },
          {
            id: 'cpm-density-h-12',
            x: 50,
            y: 92,
            label: 'Compare to water',
            description:
              'Anything less dense than 1.0 g per cubic centimetre floats on water. Anything denser sinks. Density rules the result.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-density-worked-1',
      title: 'Calculating the density of an aluminium block',
      steps: [
        {
          explanation:
            'Question: a small aluminium block has a mass of 27 g and a volume of 10 cm cubed. Calculate its density in g per cubic centimetre.',
        },
        {
          explanation:
            'Recall the formula. Density equals mass divided by volume.',
          maths: 'density = mass / volume',
        },
        {
          explanation:
            'Put the numbers in, with mass in grams and volume in cubic centimetres.',
          maths: 'density = 27 / 10',
        },
        {
          explanation:
            'Work out the division.',
          maths: 'density = 2.7 g/cm cubed',
        },
        {
          explanation:
            'So the aluminium block has a density of 2.7 g per cubic centimetre. That is higher than water, so the block would sink if it was dropped into a beaker.',
        },
      ],
    },
    {
      id: 'cpm-density-worked-2',
      title: 'Will the oak block float on water?',
      steps: [
        {
          explanation:
            'Question: an oak block has a mass of 320 g and a volume of 400 cm cubed. Water has a density of 1.0 g per cubic centimetre. Will the oak block float?',
        },
        {
          explanation:
            'Pick the rule. A solid floats on a liquid when its density is less than the density of the liquid.',
        },
        {
          explanation:
            'Calculate the density of the oak using density equals mass divided by volume.',
          maths: 'density = 320 / 400 = 0.8 g/cm cubed',
        },
        {
          explanation:
            'Compare the result with water at 1.0 g per cubic centimetre.',
          maths: '0.8 < 1.0',
        },
        {
          explanation:
            'The oak is less dense than the water, so the block will float.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-density-q-1',
      type: 'multiple-choice',
      stem: 'Which formula gives the density of a block of metal?',
      tier: 'core',
      options: [
        'mass times volume',
        'mass divided by volume',
        'volume divided by mass',
        'mass plus volume',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Density tells you how much mass fits inside each unit of volume.',
    },
    {
      id: 'cpm-density-q-2',
      type: 'multiple-choice',
      stem: 'Why is a gas usually much less dense than a liquid made of the same particles?',
      tier: 'core',
      options: [
        'The particles in a gas are much smaller than the particles in a liquid',
        'Gas particles weigh less than liquid particles',
        'Gas particles are far apart, so the same number of particles takes up much more space',
        'Air fills the gaps between the particles in a gas',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpm-density-mc-air-between',
    },
    {
      id: 'cpm-density-q-3',
      type: 'numeric-entry',
      stem: 'A copper cube has a mass of 89.6 g and a volume of 10 cm cubed. Calculate the density of the copper in g per cubic centimetre.',
      tier: 'core',
      correctAnswer: 8.96,
      tolerance: 0.05,
      unit: 'g/cm cubed',
      xpValue: 10,
      hint: 'Use density equals mass divided by volume.',
    },
    {
      id: 'cpm-density-q-4',
      type: 'drag-order',
      stem: 'Place these three samples of carbon dioxide in order, from the lowest density to the highest density.',
      tier: 'core',
      items: [
        'Carbon dioxide gas in a balloon at room temperature',
        'Carbon dioxide as liquid in a cooled tank',
        'Dry ice (solid carbon dioxide) on a stage',
      ],
      correctOrder: [0, 1, 2],
      xpValue: 15,
      hint: 'Particles get more closely packed as you move from gas to liquid to solid.',
    },
    {
      id: 'cpm-density-q-5',
      type: 'multiple-choice',
      stem: 'Cork has a density of 0.24 g per cubic centimetre and water has a density of 1.0 g per cubic centimetre. What happens when a cork is dropped into a glass of water?',
      tier: 'core',
      options: [
        'The cork floats, because it is less dense than water',
        'The cork sinks, because cork is heavier than water',
        'The cork hangs in the middle of the glass',
        'The cork dissolves in the water',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-density-mc-heavy-sinks',
    },
    {
      id: 'cpm-density-q-6',
      type: 'numeric-entry',
      stem: 'A sealed plastic bottle holds 500 g of liquid water. The bottle is opened and the water is poured into the freezer compartment of a fridge, where it freezes. What is the mass of the ice in grams?',
      tier: 'core',
      correctAnswer: 500,
      unit: 'g',
      xpValue: 10,
      hint: 'Freezing does not add or take away particles, so the mass is conserved.',
      misconceptionId: 'cpm-density-mc-mass-changes',
    },
    {
      id: 'cpm-density-q-7',
      type: 'spot-misconception',
      stem: 'Sophie says: "Ice and liquid water are made of the same particles, so they must have the same density."',
      tier: 'core',
      statements: [
        {
          text: 'Sophie is right because the particles are identical.',
          isMisconception: true,
        },
        {
          text: 'Sophie is wrong. In ice the particles lock into an open lattice with extra gaps, so the same mass of ice takes up more space than the same mass of liquid water.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-density-mc-ice-water-same',
    },
    {
      id: 'cpm-density-q-8',
      type: 'multiple-choice',
      stem: 'A 250 ml carton of cooking oil floats as a thin layer on top of 250 ml of water in a salad dressing bottle. Which sentence explains why?',
      tier: 'confident',
      options: [
        'The oil and water react to push the oil upwards',
        'The two liquids have the same density but oil is lighter',
        'The oil is less dense than the water, so the same volume of oil has less mass',
        'Oil particles are larger than water particles, so they cannot mix',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpm-density-mc-bigger-particles',
    },
    {
      id: 'cpm-density-q-9',
      type: 'numeric-entry',
      stem: 'A teacher fills a balloon with 5.0 litres of helium gas. The helium has a mass of about 0.90 g. Calculate the density of the helium in g per litre.',
      tier: 'confident',
      correctAnswer: 0.18,
      tolerance: 0.02,
      unit: 'g/L',
      xpValue: 15,
      hint: 'Use density equals mass divided by volume, with the volume in litres.',
    },
    {
      id: 'cpm-density-q-10',
      type: 'multiple-choice',
      stem: 'A teacher places a 100 g ice cube in a beaker. The ice melts into liquid water at the same temperature. What happens to the mass and the density of the water as it changes from ice to liquid?',
      tier: 'confident',
      options: [
        'Mass and density both stay the same',
        'Mass stays at 100 g, but the density rises because the particles pack more tightly',
        'Mass falls and density rises',
        'Mass stays at 100 g, but the density falls because the water spreads out',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-density-mc-mass-changes',
    },
    {
      id: 'cpm-density-q-11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a frozen pond in Sevenoaks has a thin sheet of ice across the surface. The water below is still liquid. Use the particle model to explain why the ice forms at the top instead of sinking to the bottom.',
      tier: 'confident',
      steps: [
        'When water at the surface cools below 0 C, the particles slow down and lock into an open lattice with extra gaps.',
        'These gaps make the ice less dense than the liquid water below.',
        null,
        'So the ice floats on top, and the liquid water can stay warmer below it, which is why fish can survive winter in deep ponds.',
      ],
      missingStepIndex: 2,
      correctStep:
        'A less dense solid floating on a denser liquid stays at the top, because anything with a lower density than the liquid around it does not sink through.',
      xpValue: 20,
    },
    {
      id: 'cpm-density-q-12',
      type: 'multiple-choice',
      stem: 'Why does a helium balloon released at a school fete in Manchester rise into the sky, while a balloon filled by lung air just falls?',
      tier: 'confident',
      options: [
        'Helium reacts with air, which lifts the balloon up',
        'Helium is less dense than the surrounding air, so the balloon floats upwards',
        'Helium has no mass, so the balloon has no weight',
        'The balloon material is heated by sunlight, which makes it rise',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpm-density-mc-no-mass',
    },
    {
      id: 'cpm-density-q-13',
      type: 'numeric-entry',
      stem: 'A small lead fishing weight has a mass of 56.5 g and a volume of 5 cm cubed. Calculate its density in g per cubic centimetre.',
      tier: 'confident',
      correctAnswer: 11.3,
      tolerance: 0.1,
      unit: 'g/cm cubed',
      xpValue: 15,
      hint: 'Density equals mass divided by volume. Both numbers are given.',
    },
    {
      id: 'cpm-density-q-14',
      type: 'data-extraction',
      stem: 'A pupil records the density of four substances at room temperature: pine wood 0.45 g per cubic centimetre, ice 0.92 g per cubic centimetre, water 1.00 g per cubic centimetre, glass 2.50 g per cubic centimetre. Read off the density of glass in g per cubic centimetre.',
      tier: 'confident',
      dataSource:
        'Densities at room temperature: pine wood 0.45 g per cubic centimetre, ice 0.92 g per cubic centimetre, water 1.00 g per cubic centimetre, glass 2.50 g per cubic centimetre.',
      correctAnswer: '2.5',
      xpValue: 15,
      hint: 'Look at the row for glass and read off the density value.',
    },
    {
      id: 'cpm-density-q-15',
      type: 'spot-misconception',
      stem: 'Liam says: "A heavy object will always sink in water, and a light object will always float."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Floating only depends on whether the object feels light or heavy.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. A massive oak log floats because its density is less than water, while a small lead fishing weight sinks because its density is much higher. Density matters, not weight on its own.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-density-mc-heavy-sinks',
    },
    {
      id: 'cpm-density-q-16',
      type: 'numeric-entry',
      stem: 'Aisha pours 50 cm cubed of cooking oil onto 50 cm cubed of water in a measuring jug, and the oil settles in a layer on top. The oil has a density of 0.92 g per cubic centimetre and the water has a density of 1.00 g per cubic centimetre. Work out the total mass of the liquids in the jug, in grams.',
      tier: 'challenge',
      correctAnswer: 96,
      unit: 'g',
      xpValue: 25,
      hint: 'Find the mass of each liquid using mass equals density times volume, then add them.',
    },
    {
      id: 'cpm-density-q-17',
      type: 'multiple-choice',
      stem: 'A science club takes three 100 cm cubed blocks: one of cork, one of oak and one of iron. Each block is the same volume but a different substance. Cork has a density of 0.24 g per cubic centimetre, oak 0.80 g per cubic centimetre and iron 7.87 g per cubic centimetre. Which block has the greatest mass?',
      tier: 'challenge',
      options: [
        'The cork block, because cork floats highest',
        'The oak block, because oak is solid wood',
        'The iron block, because iron has the highest density',
        'All three have the same mass, because the volumes are the same',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'For equal volumes, the substance with the highest density has the most mass.',
      misconceptionId: 'cpm-density-mc-density-equals-mass',
    },
    {
      id: 'cpm-density-q-18',
      type: 'multiple-choice',
      stem: 'A teacher seals 200 cm cubed of air inside a strong syringe with the plunger held in place. She then pushes the plunger inwards until the air takes up 100 cm cubed, without letting any escape. What happens to the density of the air inside the syringe?',
      tier: 'challenge',
      options: [
        'The density falls, because the air spreads out',
        'The density stays the same, because no particles enter or leave',
        'The density doubles, because the same particles now sit in half the volume',
        'The density triples, because the air heats up as well',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Mass stays the same, but volume halves. Use density equals mass divided by volume.',
    },
    {
      id: 'cpm-density-q-19',
      type: 'numeric-entry',
      stem: 'A jeweller in Tunbridge Wells has a small ring marked as silver. The ring has a mass of 21.0 g and a volume of 2.0 cm cubed. Pure silver has a density of 10.5 g per cubic centimetre. Calculate the density of the ring in g per cubic centimetre.',
      tier: 'challenge',
      correctAnswer: 10.5,
      tolerance: 0.05,
      unit: 'g/cm cubed',
      xpValue: 25,
      hint: 'Density equals mass divided by volume. Then compare with the value for pure silver.',
    },
    {
      id: 'cpm-density-q-20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a pupil has two identical glass beakers. Beaker P holds 200 g of liquid water. Beaker Q is empty and weighs the same as beaker P with no water inside. The pupil tips the water from P into Q and freezes it solid. They then compare the level of the ice in Q with the level of the original water in P. Use the particle model to explain why the ice level is slightly higher.',
      tier: 'challenge',
      steps: [
        'The mass of the water does not change when it freezes, because no particles enter or leave the beaker.',
        'When the water freezes the particles lock into an open lattice with extra gaps between them.',
        null,
        'So 200 g of ice fills a larger volume than 200 g of liquid water, and the level of the ice in beaker Q sits slightly higher.',
      ],
      missingStepIndex: 2,
      correctStep:
        'The same number of particles now takes up more space, so the density of the ice is lower than the density of the liquid water.',
      xpValue: 25,
    },
    {
      id: 'cpm-density-q-21',
      type: 'multiple-choice',
      stem: 'A pupil at a school fete watches a helium party balloon rise upwards, while a steel ball bearing drops straight down through the same air. The pupil says the steel and the helium "obey opposite rules". Which sentence best explains both behaviours using one rule?',
      tier: 'challenge',
      options: [
        'Hot air rises and cold metal falls, so the temperature decides each result',
        'Light gases always rise and heavy objects always fall, because mass alone decides',
        'Helium is repelled by gravity, but steel is attracted by gravity',
        'Anything less dense than the surrounding air floats, anything denser than the surrounding air sinks',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-density-mc-heavy-sinks',
    },
  ],
  misconceptions: [
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): "particles in a gas are bigger or further apart than particles in a liquid" is a recurring response; many learners conflate spacing with particle size when explaining density.
    {
      id: 'cpm-density-mc-bigger-particles',
      description:
        'Particles in a liquid or solid are bigger than the particles in the same substance as a gas, which is why solids and liquids are denser.',
      triggerAnswer: 'bigger-particles',
      correction:
        'Each particle keeps the same size in every state. The difference in density comes from how closely packed the particles are.',
      reExplanation:
        'Picture a single water particle. Whether the water is ice, liquid or steam, the particle itself is exactly the same size. What changes is the spacing. In ice and liquid water the particles touch, so a small volume can hold many particles, while in steam they are far apart with empty gaps.',
    },
    // Source: BEST Evidence Science Teaching diagnostic question set "Sinking and floating", UCL / STEM Learning (https://www.stem.org.uk/best-evidence-science-teaching), reports that around two thirds of Year 7 pupils predict floating purely from feel of weight rather than density. Reinforced by CGP KS3 Science Study Guide "Common mistake" callout on the density formula.
    {
      id: 'cpm-density-mc-heavy-sinks',
      description:
        'Heavy things always sink and light things always float.',
      triggerAnswer: 'heavy-sinks',
      correction:
        'Floating depends on density, not just on weight. A massive oak log floats while a tiny lead fishing weight sinks.',
      reExplanation:
        'Compare two blocks of the same volume. The cork has a much smaller mass than the iron, but if the iron block had the same volume as a whole ship, it would also float when its density is lower than water. The test is mass per unit of volume, written as g per cubic centimetre.',
    },
    // Source: AQA GCSE Combined Science Trilogy examiner report June 2019, Paper 1F (8464/C/1F), Q on conservation of mass during state changes: examiners noted that many candidates wrote that the mass of a substance falls or rises when it melts or freezes. Reinforced by Matthew Parks, "Teaching conservation of mass at 14-16", RSC Education CPD article (2024-12-05).
    {
      id: 'cpm-density-mc-mass-changes',
      description:
        'The mass of a substance changes when it freezes, melts or boils.',
      triggerAnswer: 'mass-changes',
      correction:
        'Mass is conserved through any change of state. The same particles are present, so the total mass stays the same.',
      reExplanation:
        'Place 100 g of liquid water on a balance and let it freeze inside a sealed jar. The reading still shows 100 g. The particles have not gained or lost any mass. What does change is how closely packed they are, which is why ice has a different density to the liquid water it came from.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education, citing Driver et al. 1994 and BEST KS3 diagnostic on the anomalous density of water: a recurring finding is that learners predict ice and water "should be the same" because they are made of identical particles. CGP KS3 Chemistry Common mistake callout on water density flags the same misconception.
    {
      id: 'cpm-density-mc-ice-water-same',
      description:
        'Ice and liquid water are made of the same particles, so they must have the same density.',
      triggerAnswer: 'ice-water-same',
      correction:
        'In fact ice has a lower density than liquid water. Water is unusual because its solid form is less dense than the liquid.',
      reExplanation:
        'When water freezes the particles lock into an open hexagonal lattice with extra empty gaps. The same mass now takes up a slightly larger volume, so the density falls from 1.00 g per cubic centimetre for the liquid to about 0.92 g per cubic centimetre for the ice. That is why ice cubes float on a glass of squash.',
    },
    // Source: David Paterson, "States of matter and particle theory", RSC Education CPD article (2019-03-26, https://edu.rsc.org/cpd/states-of-matter-and-particle-theory/3010210.article): "students often say that the spaces between particles contain air"; this leads them to claim that gases have density because the gaps are filled. Same trigger recorded in IOPSpark misconceptions catalogue.
    {
      id: 'cpm-density-mc-air-between',
      description:
        'There is air in the gaps between particles, which is what gives a liquid or a solid its density.',
      triggerAnswer: 'air-between',
      correction:
        'Nothing sits between the particles. The gaps are simply empty space, not air or any other substance.',
      reExplanation:
        'Air is itself made of particles. If air filled the gaps in a liquid, those gaps would have to hold its particles too. Instead, the gaps between liquid and solid particles are truly empty, and the density of the substance comes from how closely its own particles are packed.',
    },
    // Source: Edexcel GCSE Combined Science examiner report June 2018, Paper 1CH0/1F, on gases and pressure: a recurring response is that "a gas has no mass" or "gas particles weigh nothing". CGP KS3 Chemistry common-mistake callouts on the particle model flag the same belief, particularly when learners try to explain why a helium balloon rises.
    {
      id: 'cpm-density-mc-no-mass',
      description:
        'Gases have no mass, so a balloon full of gas weighs nothing.',
      triggerAnswer: 'no-mass',
      correction:
        'A gas does have mass, but its density is so low that the surrounding air can lift it. The balloon rises because it is less dense than the air around it.',
      reExplanation:
        'Place a balloon on a balance before and after filling it with helium. The balance reads slightly more after filling. The helium has mass, but its density of about 0.18 g per litre is lower than air at about 1.2 g per litre, so the air pushes the balloon up.',
    },
    // Authored, no external source. Classroom-observed Year 7 confusion when pupils write that "density and mass are the same thing" while solving floating problems; aligns with CGP KS3 distinction between mass and density.
    {
      id: 'cpm-density-mc-density-equals-mass',
      description:
        'Density and mass mean the same thing, so the object with the greater mass is always denser.',
      triggerAnswer: 'density-equals-mass',
      correction:
        'Mass tells you how many grams are present. Density tells you how many grams fit into each cubic centimetre. A heavy oak log can still be less dense than a small lead weight.',
      reExplanation:
        'Picture a 200 g cork and a 200 g lead pellet. They have the same mass, but the cork takes up far more space. Density is mass divided by volume, so the smaller lead pellet is much denser than the cork even though they weigh the same on a balance.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
