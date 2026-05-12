import type { SkillNode } from '@/types/content'

export const latentHeatHeatingCurves: SkillNode = {
  id: 'chemistry-particle-model-latent-heat',
  title: 'Latent Heat and Heating Curves',
  description:
    'Explain why a heating curve has flat plateaus at the melting point and the boiling point. Use the particle model to show that during a state change the energy from a heater goes into breaking or forming the forces between particles, not into raising the temperature. Read plateaus and turning points from heating and cooling curves, and reason qualitatively about how mass and heater power change the time spent on a plateau.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-particle-model',
  zoneName: 'Particle Model',
  tier: 'challenge',
  prerequisites: ['chemistry-particle-model-state-changes'],
  curriculum: {
    ks3Objective:
      'The energy needed during a state change (latent heat) to break or form the forces between particles, not to change temperature; reading and interpreting heating curves and cooling curves with plateaus at the melting and boiling points; specific latent heat qualitatively.',
    awardingBodies: {
      aqa: '4.2.2.1 Changes of state; specific latent heat (8462)',
      edexcel: 'Topic 1.6 State changes; Topic 5.2 Heating and cooling curves; latent heat (1CH0)',
      ocr: 'C1.1c Changes of state; C5.2 Energy changes; latent heat qualitatively (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpm-latent-energy-paths',
      title: 'Where Does the Heater Energy Go?',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare two stages of heating the same pan of water on a hob.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><text x="80" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">WATER WARMING UP</text><rect x="30" y="40" width="100" height="80" rx="6" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.2"/><g fill="#1E3A8A"><circle cx="50" cy="60" r="3"/><circle cx="70" cy="65" r="3"/><circle cx="90" cy="60" r="3"/><circle cx="110" cy="65" r="3"/><circle cx="55" cy="80" r="3"/><circle cx="75" cy="85" r="3"/><circle cx="95" cy="80" r="3"/><circle cx="115" cy="85" r="3"/><circle cx="50" cy="100" r="3"/><circle cx="70" cy="105" r="3"/><circle cx="90" cy="100" r="3"/><circle cx="110" cy="105" r="3"/></g><g stroke="#1E3A8A" stroke-width="0.8" fill="none"><path d="M 50 60 l 3 -2"/><path d="M 90 60 l -3 -2"/><path d="M 75 85 l 3 2"/><path d="M 110 105 l -3 2"/></g><rect x="30" y="120" width="100" height="14" fill="#DC2626" opacity="0.7"/><text x="80" y="148" text-anchor="middle" font-size="9" fill="#1E3A8A">Below 100 C</text><text x="80" y="162" text-anchor="middle" font-size="9" fill="#1E3A8A">Energy raises</text><text x="80" y="174" text-anchor="middle" font-size="9" fill="#1E3A8A">the temperature</text></g><g><text x="240" y="20" text-anchor="middle" font-size="11" font-weight="600" fill="#7F1D1D">WATER BOILING</text><rect x="190" y="40" width="100" height="80" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="1.2"/><g fill="#7F1D1D"><circle cx="210" cy="65" r="3"/><circle cx="230" cy="70" r="3"/><circle cx="250" cy="65" r="3"/><circle cx="270" cy="70" r="3"/><circle cx="215" cy="85" r="3"/><circle cx="235" cy="90" r="3"/><circle cx="255" cy="85" r="3"/><circle cx="275" cy="90" r="3"/></g><g fill="none" stroke="#7F1D1D" stroke-width="0.8"><circle cx="220" cy="50" r="5"/><circle cx="250" cy="50" r="5"/><circle cx="270" cy="55" r="5"/></g><g stroke="#7F1D1D" stroke-width="0.8" fill="none"><path d="M 220 50 l 0 -8"/><path d="M 250 50 l 0 -8"/><path d="M 270 55 l 0 -8"/></g><rect x="190" y="120" width="100" height="14" fill="#DC2626" opacity="0.7"/><text x="240" y="148" text-anchor="middle" font-size="9" fill="#7F1D1D">Held at 100 C</text><text x="240" y="162" text-anchor="middle" font-size="9" fill="#7F1D1D">Energy breaks the</text><text x="240" y="174" text-anchor="middle" font-size="9" fill="#7F1D1D">forces between particles</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-latent-energy-paths-h1',
            x: 25,
            y: 30,
            label: 'Warming stage',
            description:
              'Below the boiling point, the energy from the hob makes the water particles move faster. Faster particles mean a higher temperature reading.',
          },
          {
            id: 'cpm-latent-energy-paths-h2',
            x: 75,
            y: 30,
            label: 'Boiling stage',
            description:
              'At 100 C the temperature stops rising. The energy now goes into breaking the forces that pull the water particles together, so the liquid turns into steam.',
          },
          {
            id: 'cpm-latent-energy-paths-h3',
            x: 25,
            y: 75,
            label: 'Liquid still all liquid',
            description:
              'Every water particle is still in the liquid. They slide past each other a little faster as more energy goes in.',
          },
          {
            id: 'cpm-latent-energy-paths-h4',
            x: 75,
            y: 75,
            label: 'Liquid turning to gas',
            description:
              'Some particles have gained enough energy to break right away from the others. They float up as bubbles of water vapour and out into the kitchen.',
          },
          {
            id: 'cpm-latent-energy-paths-h5',
            x: 50,
            y: 95,
            label: 'Latent heat in plain words',
            description:
              'Latent means hidden. The extra energy is hidden from the thermometer because none of it is being used to make the particles faster.',
          },
        ],
      },
    },
    {
      id: 'cpm-latent-heating-curve',
      title: 'Heating Curve of a Pure Substance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read what is happening to the particles at that point on the heating curve.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><g stroke="#475569" stroke-width="1" fill="none"><line x1="40" y1="20" x2="40" y2="190"/><line x1="40" y1="190" x2="300" y2="190"/></g><g font-size="9" fill="#475569"><text x="35" y="193" text-anchor="end">-20</text><text x="35" y="155" text-anchor="end">0</text><text x="35" y="65" text-anchor="end">100</text><text x="35" y="38" text-anchor="end">120</text><text x="170" y="208" text-anchor="middle">Time</text><text x="14" y="105" text-anchor="middle" transform="rotate(-90 14 105)">Temperature, C</text></g><g stroke="#94A3B8" stroke-dasharray="2 2" stroke-width="0.6"><line x1="40" y1="155" x2="300" y2="155"/><line x1="40" y1="65" x2="300" y2="65"/></g><polyline points="40,180 70,156 130,155 165,68 240,65 285,50" fill="none" stroke="#DC2626" stroke-width="2"/><g fill="#DC2626"><circle cx="55" cy="170" r="2.5"/><circle cx="100" cy="155" r="2.5"/><circle cx="150" cy="110" r="2.5"/><circle cx="200" cy="65" r="2.5"/><circle cx="270" cy="55" r="2.5"/></g><g font-size="8" fill="#1E3A8A"><text x="100" y="148" text-anchor="middle">Melting</text><text x="200" y="58" text-anchor="middle">Boiling</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-latent-heating-curve-h1',
            x: 18,
            y: 78,
            label: 'Solid warming',
            description:
              'The substance is below its melting point. Energy from the heater makes the particles vibrate harder, so the temperature climbs steadily.',
          },
          {
            id: 'cpm-latent-heating-curve-h2',
            x: 32,
            y: 70,
            label: 'First plateau: melting',
            description:
              'The temperature stops at the melting point. All the energy now goes into breaking the strong forces that hold the particles in the solid grid.',
          },
          {
            id: 'cpm-latent-heating-curve-h3',
            x: 47,
            y: 50,
            label: 'Liquid warming',
            description:
              'All of the solid has melted. The particles slide past each other faster as the temperature climbs again.',
          },
          {
            id: 'cpm-latent-heating-curve-h4',
            x: 63,
            y: 30,
            label: 'Second plateau: boiling',
            description:
              'The temperature stops at the boiling point. The energy now goes into pulling the particles right away from each other, turning the liquid into a gas.',
          },
          {
            id: 'cpm-latent-heating-curve-h5',
            x: 85,
            y: 22,
            label: 'Gas warming',
            description:
              'All of the liquid has boiled. The gas particles fly faster as the temperature climbs further.',
          },
          {
            id: 'cpm-latent-heating-curve-h6',
            x: 47,
            y: 88,
            label: 'Why the plateau is longer for boiling',
            description:
              'Pulling particles right apart needs more energy than just breaking them out of a grid. The boiling plateau is wider than the melting plateau on the same curve.',
          },
        ],
      },
    },
    {
      id: 'cpm-latent-frost-and-icecream',
      title: 'Frost on a Window and Ice in a School Ice Cream',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see two everyday cases where latent heat moves between a substance and its surroundings.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="30" width="120" height="140" fill="#DBEAFE" stroke="#1E3A8A"/><text x="80" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">FROST FORMING</text><g fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.6"><circle cx="35" cy="55" r="3"/><circle cx="55" cy="50" r="3"/><circle cx="80" cy="55" r="3"/><circle cx="105" cy="50" r="3"/><circle cx="125" cy="55" r="3"/><circle cx="40" cy="75" r="3"/><circle cx="65" cy="75" r="3"/><circle cx="95" cy="75" r="3"/><circle cx="115" cy="75" r="3"/><circle cx="35" cy="95" r="3"/><circle cx="60" cy="100" r="3"/><circle cx="90" cy="95" r="3"/><circle cx="120" cy="100" r="3"/></g><g stroke="#DC2626" stroke-width="0.8" fill="none"><path d="M 50 130 l 8 12" marker-end="url(#a1)"/><path d="M 90 130 l 8 12" marker-end="url(#a1)"/></g><defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/></marker></defs><text x="80" y="158" text-anchor="middle" font-size="8" fill="#7F1D1D">Heat leaves the vapour</text><text x="80" y="168" text-anchor="middle" font-size="8" fill="#7F1D1D">into the cold glass</text></g><g><rect x="180" y="30" width="120" height="140" fill="#F3F4F6" stroke="#475569"/><text x="240" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">ICE PLUS SALT</text><rect x="200" y="55" width="80" height="90" fill="#FFFFFF" stroke="#475569"/><g fill="#1E3A8A"><rect x="210" y="65" width="14" height="10"/><rect x="230" y="70" width="12" height="10"/><rect x="252" y="65" width="14" height="10"/><rect x="215" y="85" width="12" height="10"/><rect x="240" y="90" width="14" height="10"/><rect x="260" y="85" width="10" height="10"/><rect x="205" y="105" width="14" height="10"/><rect x="225" y="110" width="12" height="10"/><rect x="245" y="105" width="14" height="10"/></g><g fill="#FBBF24"><circle cx="220" cy="80" r="1.5"/><circle cx="245" cy="78" r="1.5"/><circle cx="265" cy="85" r="1.5"/><circle cx="215" cy="100" r="1.5"/><circle cx="250" cy="105" r="1.5"/><circle cx="270" cy="120" r="1.5"/></g><text x="240" y="158" text-anchor="middle" font-size="8" fill="#1E3A8A">Falls to about -18 C</text><text x="240" y="168" text-anchor="middle" font-size="8" fill="#1E3A8A">around the ice cream tub</text></g></svg>',
        hotspots: [
          {
            id: 'cpm-latent-frost-h1',
            x: 24,
            y: 30,
            label: 'Water vapour in the room',
            description:
              'Warm air in the room carries invisible water vapour. The vapour particles are flying apart and have a lot of energy.',
          },
          {
            id: 'cpm-latent-frost-h2',
            x: 24,
            y: 65,
            label: 'Glass is much colder',
            description:
              'On a frosty night, the window glass can be at about -3 C, well below the freezing point of water.',
          },
          {
            id: 'cpm-latent-frost-h3',
            x: 24,
            y: 85,
            label: 'Vapour deposits as ice',
            description:
              'The vapour particles slow down on the cold glass and lock straight into the solid grid of ice crystals. This is deposition, the opposite of sublimation.',
          },
          {
            id: 'cpm-latent-frost-h4',
            x: 24,
            y: 95,
            label: 'Latent heat is released',
            description:
              'Forming the strong forces in the ice grid gives out energy. The heat leaves the new frost and warms the glass and the air right next to it.',
          },
          {
            id: 'cpm-latent-frost-h5',
            x: 70,
            y: 30,
            label: 'Ice cubes and a sprinkle of salt',
            description:
              'A school cookery club packs ice cubes and salt around the sides of an ice cream tub. The salt lowers the temperature at which the ice melts.',
          },
          {
            id: 'cpm-latent-frost-h6',
            x: 70,
            y: 85,
            label: 'Latent heat is absorbed',
            description:
              'The ice melts at well below 0 C. To melt, it pulls energy out of the mixture and the tub, so the temperature around the tub falls to about -18 C and the cream freezes.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpm-latent-worked-1',
      title: 'Why the temperature pauses at 100 C while a kettle is boiling',
      steps: [
        {
          explanation:
            'A school technician fills an electric kettle with cold tap water and switches it on. A datalogger thermometer in the water records the temperature every second and a graph is plotted.',
        },
        {
          explanation:
            'For the first part of the recording, the temperature climbs steadily from about 15 C up toward 100 C. The energy from the heating element is making the water particles move faster on average.',
          maths: 'temperature rises from 15 C toward 100 C',
        },
        {
          explanation:
            'At 100 C the line goes flat, even though the element is still on. The water has reached its boiling point. This flat section on the graph is called a plateau.',
          maths: 'temperature holds at 100 C',
        },
        {
          explanation:
            'On the plateau, the energy from the element is not being used to make the particles faster. It is being used to break the forces between water particles, so that the particles can pull right away from each other.',
        },
        {
          explanation:
            'Each time a small amount of liquid water gains enough energy to break its forces, it leaves the surface as water vapour. You see this as bubbles of vapour rising through the liquid.',
        },
        {
          explanation:
            'The plateau continues for as long as there is still liquid water left in the kettle. The energy that goes in during this time is called the latent heat of vaporisation.',
        },
        {
          explanation:
            'So the thermometer reads a steady 100 C during boiling because the hidden energy is doing the work of changing the state, not the work of raising the temperature.',
        },
      ],
    },
    {
      id: 'cpm-latent-worked-2',
      title: 'A 100 g block of ice and a 200 g block of ice',
      steps: [
        {
          explanation:
            'Two beakers are placed side by side on the same lab bench. Beaker A holds a 100 g block of pure ice at 0 C. Beaker B holds a 200 g block of pure ice at 0 C.',
        },
        {
          explanation:
            'Each beaker has its own electric heating coil. Both coils run at the same power, so the energy going into each beaker per second is the same.',
        },
        {
          explanation:
            'Both beakers start at 0 C and the temperature in each one stays at 0 C for as long as any ice is still present. This is the melting plateau.',
        },
        {
          explanation:
            'On the plateau, the energy in each coil goes into breaking the forces in the ice grid, so the ice can turn into liquid water. None of the energy raises the temperature.',
        },
        {
          explanation:
            'The total energy needed to melt all of the ice depends on how many particles have to be broken out of the grid. More ice means more particles, so more total joules are needed.',
        },
        {
          explanation:
            'Beaker B has twice as many ice particles to set free. With the same number of joules going in per second, beaker B will spend about twice as long on its plateau before the ice has fully melted.',
        },
        {
          explanation:
            'So the more massive block of ice takes longer to melt at 0 C, but the plateau temperature is the same in both cases.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cpm-latent-q1',
      type: 'multiple-choice',
      stem: 'A pan of pure water reaches 100 C on a hob and starts to boil. The hob is left on. What is the temperature reading on a thermometer in the water doing?',
      tier: 'core',
      options: [
        'It climbs steadily above 100 C as more energy goes in',
        'It drops back to room temperature, then climbs again',
        'It jumps straight to about 200 C',
        'It stays at 100 C until all the water has turned to steam',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'cpm-lat-mis-heat-raises-temp',
      hint: 'During boiling the heater energy is used for something other than warming the water up.',
    },
    {
      id: 'cpm-latent-q2',
      type: 'multiple-choice',
      stem: 'While a pure substance is melting, the temperature stays the same. What is the energy from the heater doing during this plateau?',
      tier: 'core',
      options: [
        'Making the particles smaller, which is why the solid shrinks',
        'Breaking the forces that hold the particles in the solid grid',
        'Speeding up the particles, which is what raises the temperature',
        'Vanishing, since no energy is needed to melt anything',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-lat-mis-no-energy-at-plateau',
    },
    {
      id: 'cpm-latent-q3',
      type: 'multiple-choice',
      stem: 'A teacher writes on the board, "Latent heat is the energy needed to ___ during a change of state." Which phrase best fills the gap?',
      tier: 'core',
      options: [
        'raise the temperature of the substance',
        'break or form the forces between particles',
        'destroy the particles of the substance',
        'create brand new particles in the liquid',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpm-lat-mis-heat-raises-temp',
      hint: 'On a heating curve the temperature stays flat during a state change, so latent heat is not raising temperature.',
    },
    {
      id: 'cpm-latent-q4',
      type: 'numeric-entry',
      stem: 'A pure ice cube tray is heated on a slow setting. The thermometer in the ice reads a steady value while the ice is melting. What is this plateau temperature in degrees Celsius?',
      tier: 'core',
      correctAnswer: 0,
      unit: 'C',
      xpValue: 10,
      hint: 'Think about the melting point of pure ice at normal pressure.',
    },
    {
      id: 'cpm-latent-q5',
      type: 'numeric-entry',
      stem: 'A pan of pure water on a hob reaches its boiling point. As long as some liquid water is still in the pan, the thermometer holds a steady value. What is this plateau temperature in degrees Celsius?',
      tier: 'core',
      correctAnswer: 100,
      unit: 'C',
      xpValue: 10,
      hint: 'Think about the boiling point of pure water at normal pressure.',
    },
    {
      id: 'cpm-latent-q6',
      type: 'multiple-choice',
      stem: 'On a frosty November night, water vapour in the air settles onto a cold window and turns into solid frost. What happens to the energy stored in the forces between particles?',
      tier: 'core',
      options: [
        'Energy is released into the glass and the air close to it',
        'Energy is absorbed from the glass, so the glass gets even colder',
        'No energy moves at all during this change',
        'Energy is created inside the new frost from nothing',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cpm-lat-mis-condense-no-energy',
      hint: 'Forming strong forces between particles is the opposite of breaking them, so the energy flow is reversed.',
    },
    {
      id: 'cpm-latent-q7',
      type: 'drag-order',
      stem: 'A school technician heats a block of pure ice from -20 C until it is all steam. Put the four stages of the heating curve into order, from start to finish.',
      tier: 'core',
      items: [
        'Solid ice warming up from -20 C to 0 C',
        'Plateau at 0 C while the ice melts to water',
        'Liquid water warming up from 0 C to 100 C',
        'Plateau at 100 C while the water boils to steam',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 15,
    },
    {
      id: 'cpm-latent-q8',
      type: 'numeric-entry',
      stem: 'A heating curve for a pure substance, heated from cold, has its first plateau at 80 C and its second plateau at 230 C. What is the melting point of this substance, in degrees Celsius?',
      tier: 'confident',
      correctAnswer: 80,
      unit: 'C',
      xpValue: 15,
      hint: 'On a heating curve, the lower plateau is the change from solid to liquid; the higher plateau is the change from liquid to gas.',
    },
    {
      id: 'cpm-latent-q9',
      type: 'spot-misconception',
      stem: 'Jade looks at a heating curve for water and says, "There is a flat part at 100 C, so during that time the heater must be switched off. If it was still on, the temperature would have to keep rising."',
      tier: 'confident',
      statements: [
        {
          text: 'Jade is right. A flat line on a heating curve always means no energy is going in.',
          isMisconception: true,
        },
        {
          text: 'Jade is not right. The heater is still on. The energy that goes in during the plateau is used to break the forces between water particles, not to raise the temperature.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-lat-mis-no-energy-at-plateau',
    },
    {
      id: 'cpm-latent-q10',
      type: 'multiple-choice',
      stem: 'Two beakers each sit on the same model of hot plate, set to the same power. Beaker A holds 100 g of pure ice at 0 C. Beaker B holds 200 g of pure ice at 0 C. The thermometers in each beaker stay at 0 C until all the ice has melted. Which beaker reaches the end of its plateau first?',
      tier: 'confident',
      options: [
        'Beaker A, because there are fewer particles to break out of the grid',
        'Beaker B, because more mass melts faster',
        'They reach the end of the plateau at the same time, because the temperature is the same',
        'Neither, because ice in a beaker never melts',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'cpm-lat-mis-mass-affects-temp-of-plateau',
      hint: 'Twice the mass means about twice as many particles to free, so twice as long on the plateau for the same heater power.',
    },
    {
      id: 'cpm-latent-q11',
      type: 'spot-misconception',
      stem: 'Sam looks at a heating curve for a pure substance and says, "The boiling plateau is much wider than the melting plateau, so the heater must have been turned up between the two flat sections."',
      tier: 'confident',
      statements: [
        {
          text: 'Sam is right. The plateaus only have different widths if the heater power has changed.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. The heater is the same. The boiling plateau is wider because pulling the particles right apart needs more energy than just breaking them out of the grid.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpm-lat-mis-fusion-equals-vaporisation',
    },
    {
      id: 'cpm-latent-q12',
      type: 'multiple-choice',
      stem: 'A school cookery club packs ice cubes and a sprinkle of salt around a tub of cream to make ice cream. The mixture falls to about -18 C, well below the freezing point of pure water. Why does the mixture get so cold?',
      tier: 'confident',
      options: [
        'The salt pours heat into the cream from inside its grains',
        'Salt and water react together to make a cold gas, which cools the tub',
        'Melting the salty ice absorbs latent heat, and that energy is taken from the cream and the tub',
        'The fridge has been left open and chilled the salt first',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpm-lat-mis-condense-no-energy',
      hint: 'Melting always needs latent heat. Salt lowers the melting point, so the ice melts at well below 0 C, taking energy out of the surroundings.',
    },
    {
      id: 'cpm-latent-q13',
      type: 'numeric-entry',
      stem: 'A pure liquid is left to cool in a lab and a cooling curve is plotted. The data shows: 0 minutes 90 C; 2 minutes 75 C; 4 minutes 65 C; 6 minutes 60 C; 8 minutes 60 C; 10 minutes 60 C; 12 minutes 50 C. What is the freezing point of this liquid in degrees Celsius?',
      tier: 'confident',
      correctAnswer: 60,
      unit: 'C',
      xpValue: 15,
      hint: 'On a cooling curve the freezing point is the temperature where the readings stop falling for a while.',
    },
    {
      id: 'cpm-latent-q14',
      type: 'multiple-choice',
      stem: 'Steam at 100 C from a kettle is rather more dangerous on the skin than the same mass of water at 100 C. Use the particle model to choose the best reason.',
      tier: 'confident',
      options: [
        'The steam is at a higher temperature than the water, even though both readings show 100 C',
        'Steam particles are bigger than water particles, so they hit harder',
        'When steam touches cool skin it condenses, and the latent heat released goes into the skin on top of the heat from cooling to body temperature',
        'Steam contains extra oxygen that burns the skin',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpm-lat-mis-steam-same-as-water',
      hint: 'Condensing on the skin releases latent heat. The skin gets that hidden energy on top of the cooling of the new liquid water.',
    },
    {
      id: 'cpm-latent-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: A pupil heats a block of pure ice at a steady rate. From minute 5 to minute 12 the temperature stays at 0 C, even though the heater is still on. Use the particle model to explain the plateau.',
      tier: 'confident',
      steps: [
        'During the flat section, the substance in the beaker is changing from solid ice into liquid water.',
        'Changing from a solid into a liquid needs energy to break the strong forces that hold the particles in the grid.',
        null,
        'Only after the last particle has broken out of the grid does the temperature start to rise again, because the energy can then go into making the new liquid water hotter.',
      ],
      missingStepIndex: 2,
      correctStep:
        'While the plateau lasts, all the energy from the heater is being used to break those forces, so none of it is left to make the particles faster and raise the temperature.',
      xpValue: 20,
      misconceptionId: 'cpm-lat-mis-no-energy-at-plateau',
    },
    {
      id: 'cpm-latent-q16',
      type: 'data-extraction',
      stem: 'Use the readings to find the melting point of pure stearic acid in degrees Celsius.',
      tier: 'challenge',
      dataSource:
        'Year 9 lab data for a heating curve of pure stearic acid. Time and temperature readings: 0 minutes 25 C; 2 minutes 45 C; 4 minutes 60 C; 6 minutes 69 C; 8 minutes 69 C; 10 minutes 69 C; 12 minutes 69 C; 14 minutes 75 C; 16 minutes 90 C.',
      correctAnswer: '69',
      xpValue: 25,
      hint: 'On a heating curve the melting point is the temperature where the readings stop rising for a while.',
    },
    {
      id: 'cpm-latent-q17',
      type: 'multiple-choice',
      stem: 'A teacher heats 200 g of pure ice at 0 C with a 50 W heater, and the plateau on the heating curve lasts for 1320 seconds before any liquid water starts to warm above 0 C. The technician repeats the experiment with a 100 W heater of the same kind on a fresh 200 g block. About how long is the new plateau, assuming no heat leaks out?',
      tier: 'challenge',
      options: [
        'About 2640 seconds, because doubling the power doubles the time',
        'About 1320 seconds, the same as before, because the plateau is fixed by the substance',
        'About 660 seconds, because doubling the power halves the time',
        'Zero seconds, because a 100 W heater jumps the ice straight to steam',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'The total latent heat to melt 200 g of ice is fixed. With twice the joules per second, it takes about half the time.',
    },
    {
      id: 'cpm-latent-q18',
      type: 'multiple-choice',
      stem: 'On a frosty morning in Sevenoaks, weather presenters sometimes say the temperature near the ground can drop a little less hard if frost forms overnight than if it does not. Which sentence best explains this from the particle model?',
      tier: 'challenge',
      options: [
        'Frost reflects starlight back onto the lawn and that warms the air',
        'Frost is white, so it traps heat in the lawn like a blanket',
        'Forming frost uses up oxygen, so the air gets denser and warmer',
        'When water vapour deposits as frost, forces form between the particles and release latent heat into the air just above the ground',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-lat-mis-condense-no-energy',
      hint: 'Going from vapour to solid is the reverse of melting and boiling combined, so latent heat flows out of the substance.',
    },
    {
      id: 'cpm-latent-q19',
      type: 'numeric-entry',
      stem: 'A hot-cross bun pudding is taken out of an oven at 80 C and left on a kitchen worktop in Manchester. The cream sauce on top is mostly water, and it cools through the night. A cooling curve from a probe in the sauce shows: 0 minutes 80 C; 30 minutes 35 C; 60 minutes 12 C; 90 minutes 3 C; 120 minutes 0 C; 180 minutes 0 C; 240 minutes 0 C; 300 minutes -2 C. At what temperature in degrees Celsius does the cooling curve have its plateau?',
      tier: 'challenge',
      correctAnswer: 0,
      unit: 'C',
      xpValue: 25,
      hint: 'The plateau is where the readings stop falling. For the watery cream sauce, this happens at the freezing point of water.',
      misconceptionId: 'cpm-lat-mis-plateau-is-error',
    },
    {
      id: 'cpm-latent-q20',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: Cooling water in a sealed bottle held at -5 C in a freezer is plotted against time. The temperature drops to 0 C and then holds flat for a long time before falling again. Use the particle model to explain the flat section.',
      tier: 'challenge',
      steps: [
        'The water has reached its freezing point at 0 C, so its particles are starting to lock back into the regular grid of ice.',
        'Locking particles into the grid lets new forces form between them, and forming those forces releases latent heat from the water.',
        null,
        'Once every particle has joined the grid, no more latent heat is being released by the substance, so its temperature can start to drop again toward the freezer setting.',
      ],
      missingStepIndex: 2,
      correctStep:
        'While the plateau lasts, the rate at which latent heat is released by the freezing water just balances the rate at which energy leaves to the cold freezer, so the temperature of the bottle holds steady at 0 C.',
      xpValue: 25,
      misconceptionId: 'cpm-lat-mis-condense-no-energy',
    },
    {
      id: 'cpm-latent-q21',
      type: 'multiple-choice',
      stem: 'A school fete stall sells lemonade with ice cubes. A 50 g cube of ice at 0 C is dropped into a paper cup of warm lemonade. As the ice melts at 0 C, where does the latent heat for melting come from?',
      tier: 'challenge',
      options: [
        'From the cube, since the cube is the part that is changing state',
        'From the paper of the cup, since paper is a strong source of heat',
        'From the air above the lemonade, which is the same temperature as the ice',
        'From the lemonade and the cup, which are warmer than the ice and so transfer energy into it',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cpm-lat-mis-condense-no-energy',
      hint: 'Latent heat to melt has to come from the warmer surroundings, which is why the drink ends up cooler.',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL Institute of Education, "Energy and changes of state" diagnostic questions, https://www.stem.org.uk/best-evidence-science-teaching: Year 7 to Year 9 learners commonly predict that the thermometer reading must keep rising as long as the heater is on, even through a state-change plateau.
    {
      id: 'cpm-lat-mis-heat-raises-temp',
      description:
        'If a heater is on, the temperature of the substance must be rising. A flat line on a heating curve means the heater has been switched off.',
      triggerAnswer: 'heat-raises-temp',
      correction:
        'In fact the heater stays on right through a plateau. The energy goes into changing the state of the substance, not into raising the temperature of the particles.',
      reExplanation:
        'Picture a kettle on the hob at 100 C. The element is still glowing red, so energy is still flowing into the water. The thermometer holds at 100 C because every joule from the element is being used to pull water particles right away from each other. Only when there is no liquid water left for the energy to act on will the temperature begin to climb again.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education (https://edu.rsc.org/particle-diagrams/students-ideas-about-the-particulate-nature-of-matter-beyond-appearances/4017763.article): a recurring student claim is that during a melting or boiling plateau no energy is being added at all.
    {
      id: 'cpm-lat-mis-no-energy-at-plateau',
      description:
        'During the flat section of a heating curve, no energy is going into the substance. That is why the temperature is not rising.',
      triggerAnswer: 'no-energy-at-plateau',
      correction:
        'In fact energy keeps flowing in. It is being used to break the forces between particles, which does not show up as a rise on the thermometer.',
      reExplanation:
        'Put a block of pure ice on a balance heater and switch it on. Every second a fixed number of joules flows into the ice. While the temperature is flat at 0 C, that energy is doing the work of breaking the ice grid one particle at a time. It is hidden from the thermometer because it is not making the particles faster. This is what makes it latent, or hidden, heat.',
    },
    // Source: Driver R., Squires A., Rushworth P., Wood-Robinson V. (1994), "Making Sense of Secondary Science: Research into Children's Ideas", Routledge, chapter on energy and changes of state: many lower-secondary learners assume that a larger lump of ice must melt at a higher temperature than a smaller one, conflating amount of substance with the plateau value.
    {
      id: 'cpm-lat-mis-mass-affects-temp-of-plateau',
      description:
        'A bigger block of ice has to be hotter before it can melt. The melting point of a substance depends on its mass.',
      triggerAnswer: 'mass-affects-temp-of-plateau',
      correction:
        'In fact the melting point of a pure substance is the same whatever the mass. A bigger block just sits on the plateau for longer because it has more particles to free.',
      reExplanation:
        'Place a 100 g block of pure ice and a 200 g block of pure ice on identical hot plates running at the same power. Both blocks hold at 0 C while they melt. The thermometer reads the same value in each beaker. The only difference is time. The 200 g block has roughly twice as many particles to break out of the grid, so its plateau lasts roughly twice as long.',
    },
    // Source: Driver R. et al. (1994), "Making Sense of Secondary Science", Routledge, energy and changes of state chapter: learners often describe condensing and freezing as energy-neutral events, missing that they are the reverse of melting and boiling and so must release the same hidden energy that those changes absorbed.
    {
      id: 'cpm-lat-mis-condense-no-energy',
      description:
        'Condensing and freezing do not involve any energy. Latent heat is only a thing during melting and boiling.',
      triggerAnswer: 'condense-no-energy',
      correction:
        'In fact condensing and freezing release latent heat into the surroundings. They are the reverse of boiling and melting, so the same hidden energy is given back, not absorbed.',
      reExplanation:
        'Think of the energy that went into boiling water from liquid into steam. When that steam later cools on a cold window and condenses, the same amount of energy has to leave the particles. The glass and the room air close to it warm up a little as a result. The same idea explains why frost forming on a cold lawn can release enough latent heat to slow the fall in air temperature overnight.',
    },
    // Source: AQA GCSE Chemistry 8462 examiner reports 2019 to 2023 routinely flag candidates who treat the specific latent heat of fusion and of vaporisation as if they were the same quantity, despite the boiling plateau being longer on the same heating curve. Reinforced by the BEST diagnostic question set on energy and changes of state, where this is a high-frequency misconception.
    {
      id: 'cpm-lat-mis-fusion-equals-vaporisation',
      description:
        'The energy needed to melt a substance is the same as the energy needed to boil the same mass of it. Both plateaus on a heating curve should be the same length.',
      triggerAnswer: 'fusion-equals-vaporisation',
      correction:
        'In fact more energy is needed to boil than to melt the same mass. Boiling pulls the particles right apart, while melting only breaks them out of a grid.',
      reExplanation:
        'On the same heating curve, with the same heater power, the boiling plateau is wider than the melting plateau. A wider plateau at the same power means more total joules have gone in. Melting only needs enough energy to break each particle out of the grid; the particles still touch in the liquid. Boiling needs enough energy to take every particle right away from its neighbours into the gas.',
    },
    // Source: Royal Society of Chemistry teaching resource, "Why does steam scald more than boiling water?", RSC Education (https://edu.rsc.org/), and the AQA GCSE Physics required practical on specific latent heat (AQA 8463): both highlight that the danger of steam comes from latent heat released as the steam condenses on skin, not from a higher temperature reading.
    {
      id: 'cpm-lat-mis-steam-same-as-water',
      description:
        'Steam at 100 C is no worse than water at 100 C. They are the same temperature, so they must give the skin the same amount of energy.',
      triggerAnswer: 'steam-same-as-water',
      correction:
        'In fact the same mass of steam transfers much more energy than the water. As the steam touches the cool skin it condenses, and that releases latent heat on top of the cooling of the liquid water it becomes.',
      reExplanation:
        'A water droplet at 100 C only has to cool to body temperature, giving that energy to the skin. A steam droplet at 100 C first has to condense. Condensing alone gives back all the latent heat that was put in to boil the water in the first place. The skin then takes the cooling energy from the new water droplet on top. So a small mass of steam can scald far more than the same mass of water.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education, section on heating curves: pupils often expect a heating curve to be one straight rising line with no flat sections, and so misread a plateau as a measurement error rather than a feature of a state change.
    {
      id: 'cpm-lat-mis-plateau-is-error',
      description:
        'A flat section on a heating curve is a sign that the thermometer was misread or that the apparatus was faulty.',
      triggerAnswer: 'plateau-is-error',
      correction:
        'In fact a plateau is the expected shape on a heating curve for a pure substance. It marks the melting point or the boiling point.',
      reExplanation:
        'Heat any pure substance at a steady rate from cold and you should see two flat sections on the graph, one at the melting point and one at the boiling point. The flat sections are not a measurement glitch. They are where all the energy from the heater is going into changing the state. The width of each plateau tells you, qualitatively, how much latent heat that change of state needs.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
