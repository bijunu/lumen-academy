import type { SkillNode } from '@/types/content'

export const decanting: SkillNode = {
  id: 'chemistry-separating-decanting',
  title: 'Decanting and Settling',
  description:
    'Use decanting to pour off a liquid from a settled solid or from a second immiscible liquid layer. Choose decanting over filtration when settling is complete, judge when fine particles still need a filter, and read off volumes recovered.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'challenge',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'Decanting pours off the liquid phase from a settled solid or two immiscible layers without moving the residue; used when the solid has settled to the bottom and a filter is not needed.',
    awardingBodies: {
      aqa: '4.10.1 Separating mixtures; decanting as an alternative to filtration when settling is complete (8462)',
      edexcel: 'Topic 1.42 Mixtures; decanting as a separation technique for settled solids (1CH0)',
      ocr: 'C2.1c Decant to separate a settled solid from liquid; C2.1f decant to separate two immiscible liquids (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-dec-scene-pot',
      title: 'Decanting the Boiled Potato Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the kitchen pot to see how the settled starchy slurry is kept in the pot while the clear water is poured off.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><path d="M 60 60 L 200 60 L 195 170 L 65 170 z" fill="#E5E7EB" stroke="#475569" stroke-width="1.5"/><rect x="50" y="58" width="160" height="6" fill="#475569"/><rect x="35" y="100" width="20" height="6" fill="#475569"/><rect x="205" y="100" width="20" height="6" fill="#475569"/></g><g transform="rotate(-30 130 115)"><path d="M 60 60 L 200 60 L 195 170 L 65 170 z" fill="none" stroke="#1E3A8A" stroke-width="0.6" stroke-dasharray="3 2"/></g><g><path d="M 75 105 L 190 105 L 188 168 L 78 168 z" fill="#DBEAFE" opacity="0.9"/><path d="M 75 130 L 190 130 L 188 168 L 78 168 z" fill="#FCD34D" opacity="0.85"/><g fill="#92400E"><circle cx="100" cy="155" r="2"/><circle cx="120" cy="160" r="2"/><circle cx="140" cy="155" r="2"/><circle cx="160" cy="160" r="2"/><circle cx="110" cy="148" r="2"/><circle cx="155" cy="148" r="2"/></g></g><g><path d="M 200 60 Q 240 50 250 70 Q 240 90 215 80" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/></g><text x="160" y="45" text-anchor="middle" font-size="9" fill="#1E3A8A">tilt sharply in one motion</text><text x="100" y="195" text-anchor="middle" font-size="9" fill="#7C2D12">settled starchy slurry stays at the base</text></g></svg>',
        hotspots: [
          {
            id: 'csm-dec-h-pot-clear',
            x: 40,
            y: 60,
            label: 'Clear water above the slurry',
            description:
              'After the pot stands for a minute, the starch settles to the bottom and a clear water layer sits above. This is the layer you pour off.',
          },
          {
            id: 'csm-dec-h-pot-residue',
            x: 40,
            y: 80,
            label: 'Settled starchy residue',
            description:
              'The cloudy starch slurry rests at the base of the pot. Tilt slowly so it does not flow with the water you are pouring.',
          },
          {
            id: 'csm-dec-h-pot-pour',
            x: 75,
            y: 35,
            label: 'Pour in one steady motion',
            description:
              'Tip the pot sharply, then hold the angle steady. A jerky pour mixes the layers and lifts the slurry into your stream.',
          },
          {
            id: 'csm-dec-h-pot-stop',
            x: 75,
            y: 75,
            label: 'Stop before the slurry moves',
            description:
              'Watch the lip of the pot. As soon as the cloudy edge of the slurry reaches the rim, stop pouring and set the pot upright.',
          },
        ],
      },
    },
    {
      id: 'csm-dec-scene-port',
      title: 'Decanting Vintage Port at a Restaurant',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the port-decanting set-up to see how the sediment is kept in the bottle while the clear wine is poured into a carafe.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g transform="rotate(-25 100 130)"><path d="M 70 60 L 130 60 L 130 90 L 115 100 L 115 180 L 85 180 L 85 100 L 70 90 z" fill="#1F2937" stroke="#0F172A" stroke-width="1"/><path d="M 87 105 L 113 105 L 113 175 L 87 175 z" fill="#7F1D1D" opacity="0.85"/><circle cx="100" cy="170" r="2" fill="#0F172A"/><circle cx="95" cy="172" r="1.5" fill="#0F172A"/><circle cx="105" cy="173" r="1.5" fill="#0F172A"/></g><g><path d="M 175 80 L 220 80 L 240 200 L 165 200 z" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><path d="M 180 120 L 218 120 L 235 195 L 170 195 z" fill="#7F1D1D" opacity="0.75"/><text x="200" y="215" text-anchor="middle" font-size="9" fill="#1E3A8A">carafe</text></g><g><circle cx="155" cy="65" r="6" fill="none" stroke="#FB923C" stroke-width="1.2"/><line x1="148" y1="65" x2="162" y2="65" stroke="#FB923C" stroke-width="1.2"/></g><text x="155" y="50" text-anchor="middle" font-size="8" fill="#7C2D12">candle behind the neck</text></svg>',
        hotspots: [
          {
            id: 'csm-dec-h-port-sediment',
            x: 30,
            y: 80,
            label: 'Sediment in the bottle',
            description:
              'Old port forms a fine sediment at the bottom of the bottle. The bottle is rested upright for a day so this sediment settles before decanting.',
          },
          {
            id: 'csm-dec-h-port-candle',
            x: 48,
            y: 28,
            label: 'Candle behind the neck',
            description:
              'A candle backlights the wine flowing through the neck. The waiter stops pouring the moment a dark wisp of sediment appears in the stream.',
          },
          {
            id: 'csm-dec-h-port-carafe',
            x: 65,
            y: 65,
            label: 'Wine collects in the carafe',
            description:
              'The clear wine flows into a wide carafe and the sediment stays behind in the original bottle, much like a residue stays in a beaker.',
          },
          {
            id: 'csm-dec-h-port-tilt',
            x: 40,
            y: 50,
            label: 'Hold the tilt steady',
            description:
              'A steady tilt keeps the sediment pinned to the lower wall of the bottle. Wobble lifts particles into the stream and clouds the carafe.',
          },
        ],
      },
    },
    {
      id: 'csm-dec-scene-tank',
      title: 'Thames Water Settling Tank',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the cross-section of a sewage works settling tank to see how decanting works at industrial scale.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><g><rect x="20" y="40" width="280" height="130" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/><rect x="25" y="60" width="270" height="80" fill="#BFDBFE" opacity="0.85"/><rect x="25" y="120" width="270" height="40" fill="#92400E" opacity="0.6"/><g fill="#7C2D12"><circle cx="60" cy="135" r="2"/><circle cx="100" cy="140" r="2"/><circle cx="140" cy="135" r="2"/><circle cx="180" cy="142" r="2"/><circle cx="220" cy="138" r="2"/><circle cx="260" cy="140" r="2"/></g></g><g><rect x="295" y="65" width="20" height="10" fill="#1E3A8A"/><path d="M 305 75 L 305 90 L 318 90" stroke="#1E3A8A" stroke-width="2" fill="none"/><text x="290" y="62" text-anchor="middle" font-size="8" fill="#1E3A8A">overflow weir</text></g><g><rect x="2" y="155" width="20" height="10" fill="#7C2D12"/><text x="12" y="180" text-anchor="middle" font-size="8" fill="#7C2D12">sludge draw-off</text></g><text x="160" y="35" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">Settling tank (cross-section)</text><text x="160" y="100" text-anchor="middle" font-size="9" fill="#1E3A8A">clear water layer (decanted over the weir)</text><text x="160" y="155" text-anchor="middle" font-size="8" fill="#FEF3C7">settled sludge (drawn off below)</text></svg>',
        hotspots: [
          {
            id: 'csm-dec-h-tank-weir',
            x: 92,
            y: 35,
            label: 'Overflow weir',
            description:
              'A low wall near the top of the tank. The clear water layer flows over it and out, while the sludge stays below. This is decanting by overflow.',
          },
          {
            id: 'csm-dec-h-tank-clear',
            x: 50,
            y: 50,
            label: 'Clear water layer',
            description:
              'Over hours of standing, suspended grit and organic matter sinks. The upper 80 to 95 percent of the tank becomes water you can decant.',
          },
          {
            id: 'csm-dec-h-tank-sludge',
            x: 50,
            y: 75,
            label: 'Settled sludge layer',
            description:
              'Denser solids gather as a thick brown layer at the base. It is drawn off through a low valve, not decanted from the top.',
          },
          {
            id: 'csm-dec-h-tank-undisturbed',
            x: 30,
            y: 50,
            label: 'Tank kept undisturbed',
            description:
              'Stirring or strong currents would lift particles back into the clear layer. The tank is fed gently from one end so settling is not disturbed.',
          },
        ],
      },
    },
    {
      id: 'csm-dec-scene-funnel',
      title: 'Two Immiscible Liquids in a Separating Funnel',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the separating funnel to see how decanting handles two liquids that do not mix.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><path d="M 130 30 L 190 30 L 190 60 L 175 70 L 175 150 L 160 175 L 160 195 L 155 195 L 155 205 L 165 205 L 165 195 L 160 195 L 160 175 L 145 150 L 145 70 L 130 60 z" fill="#FFFFFF" stroke="#475569" stroke-width="1.5"/><rect x="148" y="75" width="24" height="35" fill="#FCD34D" opacity="0.85"/><rect x="148" y="110" width="24" height="38" fill="#1E3A8A" opacity="0.7"/><line x1="148" y1="110" x2="172" y2="110" stroke="#0F172A" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="160" cy="200" r="3" fill="#475569"/></g><g><rect x="125" y="220" width="70" height="15" fill="none" stroke="#475569" stroke-width="1"/><path d="M 135 220 L 145 230 L 175 230 L 185 220" fill="#1E3A8A" opacity="0.7"/><text x="160" y="245" text-anchor="middle" font-size="8" fill="#1E3A8A">beaker</text></g><text x="220" y="90" font-size="9" fill="#7C2D12">oil (less dense, top)</text><text x="220" y="130" font-size="9" fill="#1E3A8A">water (more dense, bottom)</text><text x="220" y="200" font-size="9" fill="#475569">tap opens to release</text><text x="220" y="212" font-size="9" fill="#475569">lower layer first</text></svg>',
        hotspots: [
          {
            id: 'csm-dec-h-funnel-tap',
            x: 50,
            y: 85,
            label: 'Tap at the base',
            description:
              'A two-liquid decant uses a separating funnel. You open the tap, let the denser lower layer drain out, then close the tap as soon as the boundary reaches it.',
          },
          {
            id: 'csm-dec-h-funnel-boundary',
            x: 50,
            y: 47,
            label: 'Sharp boundary between layers',
            description:
              'Oil and water do not mix, so they form a clear line. Watching this line is the equivalent of watching the sediment edge when decanting from a beaker.',
          },
          {
            id: 'csm-dec-h-funnel-upper',
            x: 75,
            y: 35,
            label: 'Upper layer (less dense)',
            description:
              'The less dense liquid floats. Vegetable oil floats on water. You collect this layer last, usually into a separate flask.',
          },
          {
            id: 'csm-dec-h-funnel-lower',
            x: 75,
            y: 55,
            label: 'Lower layer (more dense)',
            description:
              'The denser liquid sinks. Water sinks below oil. You drain this layer first because gravity will let it flow out through the tap.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-dec-we-pondwater',
      title: 'Worked Example: Volume of Clear Water from a Pond Sample',
      steps: [
        {
          explanation:
            'A 1.0 L (1000 cm³) pond water sample is left in a Yorkshire water butt overnight. By morning, the sediment has settled into a 100 cm³ layer at the bottom and the upper 900 cm³ looks clear.',
        },
        {
          explanation:
            'Decanting recovers only the clear layer above the sediment. So the volume of clear water available to pour off is 900 cm³.',
          maths: '1000 cm³ − 100 cm³ = 900 cm³',
        },
        {
          explanation:
            'Express this as a percent of the original sample so you can compare different methods later.',
          maths: '(900 ÷ 1000) × 100 = 90%',
        },
        {
          explanation:
            'So decanting recovers 90 percent of the sample as clear water. The remaining 10 percent stays behind as wet sediment, which would need filtration if you wanted to recover more.',
        },
      ],
    },
    {
      id: 'csm-dec-we-tank',
      title: 'Worked Example: Settling Tank Throughput',
      steps: [
        {
          explanation:
            'A Thames Water settling tank receives 2400 m³ of waste water every hour. After settling, the sludge layer makes up 5 percent of the tank volume by the time it is drawn off.',
        },
        {
          explanation:
            'The clear water decanted over the weir is the rest of the volume.',
          maths: '100% − 5% = 95%',
        },
        {
          explanation:
            'Apply this percent to the hourly throughput to find the volume of clear water decanted.',
          maths: '0.95 × 2400 m³ = 2280 m³',
        },
        {
          explanation:
            'So 2280 m³ of clear water is decanted per hour, and 120 m³ of sludge is drawn off below. Industrial decanting works on the same principle as the kitchen pot, just at a much larger scale.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'csm-dec-q1',
      type: 'multiple-choice',
      tier: 'core',
      stem: 'A beaker holds muddy pond water. After standing for two hours, a clear layer sits above a settled mud layer. Which separation method is now the BEST first step to recover the clear water?',
      options: [
        'Filtration, because mud is always too fine to decant',
        'Decanting, because the solid has already settled',
        'Evaporation, because the water needs to be removed',
        'Chromatography, because the mud is coloured',
      ],
      correctIndex: 1,
      misconceptionId: 'csm-dec-mc-any-mixture',
      hint: 'Look at what has happened to the mud after two hours of standing.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q2',
      type: 'numeric-entry',
      tier: 'core',
      stem: 'A 250 cm³ measuring cylinder holds 200 cm³ of muddy water. After settling, 30 cm³ of mud sits at the bottom. What volume of clear water (in cm³) is available to decant from the top?',
      correctAnswer: 170,
      tolerance: 0,
      unit: 'cm³',
      hint: 'Take the mud volume away from the total volume of the mixture.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q3',
      type: 'numeric-entry',
      tier: 'confident',
      stem: 'A 1.0 L pond water sample settles into 100 cm³ of sediment and 900 cm³ of clear water. What is the percent recovery of clear water by decanting?',
      correctAnswer: 90,
      tolerance: 0,
      unit: '%',
      hint: 'Divide the clear water volume by the total volume, then multiply by 100.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q4',
      type: 'numeric-entry',
      tier: 'challenge',
      stem: 'A Thames Water settling tank takes in 2400 m³ of waste water per hour. Sludge fills 5 percent of the volume by the time it is drawn off. What volume of clear water (in m³) is decanted over the weir each hour?',
      correctAnswer: 2280,
      tolerance: 0,
      unit: 'm³',
      hint: 'Find the percent of the throughput that is the clear layer, then apply it to 2400 m³.',
      xpValue: 20,
    },
    {
      id: 'csm-dec-q5',
      type: 'numeric-entry',
      tier: 'core',
      stem: 'A 750 cm³ bottle of vintage port is decanted, and 25 cm³ of sediment is left in the original bottle. What volume of wine (in cm³) is recovered in the carafe?',
      correctAnswer: 725,
      tolerance: 0,
      unit: 'cm³',
      hint: 'Subtract the sediment volume from the bottle volume.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q6',
      type: 'numeric-entry',
      tier: 'confident',
      stem: 'A 500 cm³ flask holds a slurry that is 30 percent by volume settled solid. What volume of clear liquid (in cm³) sits above the settled solid?',
      correctAnswer: 350,
      tolerance: 0,
      unit: 'cm³',
      hint: 'Find the percent of the volume that is clear liquid, then apply it to 500 cm³.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q7',
      type: 'multiple-choice',
      tier: 'core',
      stem: 'A Year 7 student stirs a settled mixture of clay in water just before decanting, claiming this helps separation. What is the right correction?',
      options: [
        'Stirring is fine and speeds the decanting up',
        'Stirring only matters when you are filtering',
        'Stirring lifts the clay back into the water and undoes the settling',
        'Stirring helps the clay particles bind into one lump',
      ],
      correctIndex: 2,
      misconceptionId: 'csm-dec-mc-stir-helps',
      hint: 'Think about what settling needs to happen for decanting to work.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q8',
      type: 'multiple-choice',
      tier: 'confident',
      stem: 'A chef compares decanting and filtration for separating the same starchy water from boiled potatoes. Which statement is correct?',
      options: [
        'Both give exactly the same purity of water',
        'Decanting always gives purer water than filtration',
        'Filtration cannot be used on starchy water at all',
        'Filtration is more thorough; decanting still leaves fine starch suspended in the water',
      ],
      correctIndex: 3,
      misconceptionId: 'csm-dec-mc-same-purity',
      hint: 'Decanting only removes the layer that has already settled.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q9',
      type: 'multiple-choice',
      tier: 'core',
      stem: 'A Year 7 student writes: "If you pour very carefully, decanting always recovers every drop of liquid." What is the best response?',
      options: [
        'Yes, no liquid is ever lost in a careful decant',
        'Careful technique keeps loss low, but a small amount of liquid stays trapped in the wet residue',
        'Decanting always loses about half the liquid',
        'Decanting loses liquid only when the solid floats',
      ],
      correctIndex: 1,
      misconceptionId: 'csm-dec-mc-always-loses',
      hint: 'Think about what happens to the wet sediment at the end of the pour.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q10',
      type: 'multiple-choice',
      tier: 'challenge',
      stem: 'A Year 7 lab has two settled samples. Sample A is sand in water (coarse grains). Sample B is very fine clay in water that still looks cloudy after an hour. Which method is BEST for each?',
      options: [
        'Decant both samples because both have a solid in a liquid',
        'Filter both samples because decanting never works on solids',
        'Evaporate Sample A and decant Sample B',
        'Decant Sample A; filter Sample B because the fine clay has not fully settled',
      ],
      correctIndex: 3,
      misconceptionId: 'csm-dec-mc-any-mixture',
      hint: 'Decanting needs the solid to have settled. Has the fine clay settled?',
      xpValue: 20,
    },
    {
      id: 'csm-dec-q11',
      type: 'multiple-choice',
      tier: 'confident',
      stem: 'In a separating funnel, vegetable oil sits as the upper layer and water as the lower layer. Which order is used to decant the two liquids cleanly?',
      options: [
        'Open the tap to drain the oil first, then the water',
        'Open the tap to drain the water, close at the boundary, then collect the oil separately',
        'Pour the funnel over from the top like a beaker',
        'Shake the funnel first so both liquids drain together',
      ],
      correctIndex: 1,
      misconceptionId: 'csm-dec-mc-same-as-solid',
      hint: 'Gravity pulls the denser liquid down to the tap.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q12',
      type: 'multiple-choice',
      tier: 'challenge',
      stem: 'A wax bead floats on the surface of water in a beaker. A student says decanting is impossible because the solid is on top. What is the right reply?',
      options: [
        'The student is right, decanting only works when the solid sinks',
        'You must wait for the wax to dissolve before decanting',
        'You can still decant by pouring the upper layer off, since float vs sink only changes which phase moves',
        'You must turn the beaker upside down to decant',
      ],
      correctIndex: 2,
      misconceptionId: 'csm-dec-mc-floats-fails',
      hint: 'Decanting just means pouring off one phase. The direction depends on which phase you want to keep.',
      xpValue: 20,
    },
    {
      id: 'csm-dec-q13',
      type: 'multiple-choice',
      tier: 'challenge',
      stem: 'Two beakers each hold the same mass of sediment, one of fine silt and one of coarse sand, in equal volumes of water. After 30 s, which beaker is ready to decant first, and why?',
      options: [
        'The fine silt, because smaller particles always settle faster',
        'They are ready at exactly the same time, because settling rate is the same for all particles',
        'The coarse sand, because larger denser particles settle faster than fine ones',
        'Neither, because settling only depends on temperature',
      ],
      correctIndex: 2,
      misconceptionId: 'csm-dec-mc-rate-same',
      hint: 'Think about which particles fall to the bottom of the water column first.',
      xpValue: 20,
    },
    {
      id: 'csm-dec-q14',
      type: 'spot-misconception',
      tier: 'core',
      stem: 'Spot the statements about decanting that are misconceptions.',
      statements: [
        {
          text: 'Stirring the mixture just before decanting helps the solid separate out',
          isMisconception: true,
        },
        {
          text: 'Decanting and filtration give exactly the same purity of liquid',
          isMisconception: true,
        },
        {
          text: 'Decanting only works once the solid has settled fully',
          isMisconception: false,
        },
        {
          text: 'Letting a mixture stand undisturbed allows the densest particles to fall first',
          isMisconception: false,
        },
      ],
      misconceptionId: 'csm-dec-mc-stir-helps',
      hint: 'Two of these clash with what you have just learnt about settling and purity.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q15',
      type: 'spot-misconception',
      tier: 'challenge',
      stem: 'A Year 7 group writes notes on decanting. Spot the misconceptions.',
      statements: [
        {
          text: 'Flour in water can be decanted in 30 s because all solids settle at the same rate',
          isMisconception: true,
        },
        {
          text: 'If the solid floats, decanting is no longer possible',
          isMisconception: true,
        },
        {
          text: 'Decanting from above and decanting from below are both valid, depending on which phase floats',
          isMisconception: false,
        },
        {
          text: 'Fine suspended particles often need filtration after decanting if you want very clear water',
          isMisconception: false,
        },
      ],
      misconceptionId: 'csm-dec-mc-any-mixture',
      hint: 'Two statements ignore particle size or what "decant" really means.',
      xpValue: 20,
    },
    {
      id: 'csm-dec-q16',
      type: 'missing-step',
      tier: 'confident',
      stem: 'A chef wants to recover the clear water from a pan of boiled potatoes, leaving the starchy slurry behind. Fill in the missing step.',
      steps: [
        'Turn off the heat and set the pan on a heat-proof mat',
        'Let the pan stand undisturbed for one minute so the starch settles to the base',
        null,
        'Stop pouring as soon as the cloudy edge of the slurry reaches the rim of the pan',
        'Set the pan back upright and use the slurry or scrape it out separately',
      ],
      missingStepIndex: 2,
      correctStep:
        'Tilt the pan in one steady motion to pour the clear water off the top into a jug',
      misconceptionId: 'csm-dec-mc-stir-helps',
      hint: 'Between settling and stopping, the chef must actually pour the clear water off.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q17',
      type: 'missing-step',
      tier: 'confident',
      stem: 'A waiter decants vintage port at a UK restaurant. Fill in the missing step.',
      steps: [
        'Stand the bottle upright for a day so the sediment settles to the base',
        'Light a candle on the table and hold the bottle so the neck passes in front of the flame',
        'Pour the wine slowly into the carafe at a steady tilt',
        null,
        'Set the bottle aside; the sediment stays inside the bottle and is discarded',
      ],
      missingStepIndex: 3,
      correctStep:
        'Stop pouring the moment a dark wisp of sediment appears in the candle-lit stream',
      misconceptionId: 'csm-dec-mc-always-loses',
      hint: 'The candle is there to make one specific cue visible. What is the waiter watching for?',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q18',
      type: 'drag-order',
      tier: 'confident',
      stem: 'Order these steps for decanting clear water from a Yorkshire water butt sample of muddy rainwater into a clean jug.',
      items: [
        'Pour the upper clear water steadily off the top into the jug',
        'Stop the pour as soon as the cloudy edge of the mud nears the rim',
        'Stand the bucket undisturbed overnight so the mud settles',
        'Set the bucket on a flat surface and add the rainwater sample',
        'Carefully tilt the bucket so the lip sits just above the rim of the jug',
      ],
      correctOrder: [3, 2, 4, 0, 1],
      misconceptionId: 'csm-dec-mc-stir-helps',
      hint: 'Start by placing the bucket, end with the cue that stops the pour. Settling has to happen before any tilting.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q19',
      type: 'drag-order',
      tier: 'confident',
      stem: 'Order these steps for using a separating funnel to decant water (lower layer) from vegetable oil (upper layer).',
      items: [
        'Drain the lower water layer through the tap into a beaker',
        'Wait for the two layers to settle into a sharp boundary',
        'Close the tap the moment the boundary reaches the tap level',
        'Pour the oil-and-water mixture into the separating funnel',
        'Collect the upper oil layer separately by removing the funnel stopper and pouring from the top',
      ],
      correctOrder: [3, 1, 0, 2, 4],
      misconceptionId: 'csm-dec-mc-same-as-solid',
      hint: 'Pour in, wait, then drain the dense one, then close, then collect the rest.',
      xpValue: 15,
    },
    {
      id: 'csm-dec-q20',
      type: 'multiple-choice',
      tier: 'core',
      stem: 'Dried mushrooms are soaked in water to rehydrate them. The water collects fine grit at the bottom of the bowl after 10 minutes. Which is the BEST way to recover only the clear mushroom stock?',
      options: [
        'Stir vigorously and pour the whole bowl into a pan',
        'Boil the grit and water together to dissolve the grit',
        'Filter through filter paper, which would block instantly',
        'Decant the clear stock off the top, leaving the grit behind in the bowl',
      ],
      correctIndex: 3,
      misconceptionId: 'csm-dec-mc-any-mixture',
      hint: 'The grit has settled and the cook wants clear stock. Which method matches both facts?',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q21',
      type: 'numeric-entry',
      tier: 'core',
      stem: 'A chip-shop fryer holds 8.0 L of cooking oil. After service, crumb residue settles into a 0.4 L layer at the base. What volume of clear oil (in L) can be decanted off the top?',
      correctAnswer: 7.6,
      tolerance: 0.05,
      unit: 'L',
      hint: 'Subtract the crumb layer from the total fryer volume.',
      xpValue: 10,
    },
    {
      id: 'csm-dec-q22',
      type: 'multiple-choice',
      tier: 'challenge',
      stem: 'A Year 7 student says: "Filtration and decanting both leave the solid behind, so they are interchangeable." What is the best correction?',
      options: [
        'Decanting only removes the settled layer; filtration also catches the fine particles still suspended in the liquid',
        'They are interchangeable; the student is correct',
        'Filtration is always worse than decanting',
        'Decanting catches more particles than filtration does',
      ],
      correctIndex: 0,
      misconceptionId: 'csm-dec-mc-same-purity',
      hint: 'Think about what each method catches: the settled layer, the suspended particles, or both?',
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA KS3 Chemistry teacher notes 2023, "Separation techniques: choosing the right method".
    {
      id: 'csm-dec-mc-any-mixture',
      description:
        'Thinking decanting works for any solid-in-liquid mixture, regardless of particle size or how long it has settled.',
      triggerAnswer:
        'Decant the flour and water mixture straight away because the flour will pour off with the liquid.',
      correction:
        'Decanting only works when the solid has settled. Fine particles like flour or very fine clay stay suspended and need filtration instead.',
      reExplanation:
        'For decanting to give a clean separation, the solid has to have fallen to the base. Fine particles barely settle in normal lab time, so the liquid you pour off is still cloudy. Filtration catches those suspended particles in the paper, which decanting cannot do. Choose decanting only when you can see a clear layer above a settled layer.',
    },
    // Source: Edexcel International GCSE Chemistry student book, separations chapter.
    {
      id: 'csm-dec-mc-always-loses',
      description:
        'Thinking every decant must lose a lot of the liquid you wanted to keep.',
      triggerAnswer:
        'You always lose about half the liquid when decanting, so it is a wasteful method.',
      correction:
        'Careful technique keeps loss small. Only the liquid trapped in the wet residue is unrecoverable; sloppy pouring is the usual cause of bigger losses.',
      reExplanation:
        'A steady tilt and a slow, controlled pour can recover most of the clear layer. A glass stirring rod held against the lip of the beaker guides the stream so it does not run down the side. The only liquid you cannot recover is what soaks the settled solid. Treat decanting as a precise pour, not a slosh.',
    },
    // Source: OCR Gateway Chemistry J248 examiner report 2022, on separation method comparison.
    {
      id: 'csm-dec-mc-same-purity',
      description:
        'Thinking decanting and filtration give the same purity of liquid.',
      triggerAnswer:
        'Decanting and filtration both give clear liquid, so the purity is the same.',
      correction:
        'Decanting leaves fine suspended particles in the liquid. Filtration catches them in the paper, so a filtered liquid is usually clearer.',
      reExplanation:
        'Decanting only removes the layer that has already settled to the base. Particles still floating in the liquid above flow out with the pour. Filter paper has tiny holes that trap those small particles. Decanting is faster and avoids paper-related loss, but filtration gives a more thorough separation when high purity matters.',
    },
    // Source: CLEAPSS guide L195 on practical separations and Stokes-law qualitative reasoning.
    {
      id: 'csm-dec-mc-rate-same',
      description:
        'Thinking every particle settles at the same rate regardless of size or density.',
      triggerAnswer:
        'Sand and fine silt fall to the bottom at the same speed, so both are ready to decant at the same time.',
      correction:
        'Settling rate depends on particle size and density. Larger, denser particles settle faster than fine, light ones.',
      reExplanation:
        'When a particle falls through a liquid, gravity pulls it down and drag from the liquid pushes back. Bigger and denser particles have more weight relative to the drag, so they fall faster. Coarse sand can settle in seconds; fine silt or clay can take hours or even days. Decanting timing depends on the slowest particle you care about.',
    },
    // Source: Royal Society of Chemistry, "Practical chemistry: separating immiscible liquids" demo notes.
    {
      id: 'csm-dec-mc-same-as-solid',
      description:
        'Thinking immiscible liquids are decanted the same way as a settled solid.',
      triggerAnswer:
        'For oil and water, you just tilt the beaker like you would for sand and water.',
      correction:
        'Two-liquid decanting uses a separating funnel and a tap so you drain the lower layer cleanly. Tilting a beaker mixes the boundary.',
      reExplanation:
        'A separating funnel has a tap at the base that lets the denser liquid out by itself, leaving a sharp boundary. You close the tap the instant the boundary reaches it, then pour the lighter liquid from the top through the neck. Tilting a beaker would slosh the layers together and you would lose your sharp cut between them.',
    },
    // Source: AQA GCSE Chemistry 8462 specification context, "decanting" definition.
    {
      id: 'csm-dec-mc-floats-fails',
      description:
        'Thinking decanting fails if the solid floats instead of sinking.',
      triggerAnswer:
        'You cannot decant from a beaker if the solid is floating on top.',
      correction:
        'You can still decant. Either pour the floating layer off the top, or use a tap to draw the lower liquid out. Float or sink just changes the direction.',
      reExplanation:
        'Decanting is about pouring off one phase from another. If the solid floats, the clear liquid is at the base, so a stand-mounted beaker with a tap, or a careful tilt-and-skim, recovers the liquid. The principle is unchanged. Density decides which phase is on top, and the technique adapts to match.',
    },
    // Source: Practical Action teacher guide on water purification at industrial settling plants.
    {
      id: 'csm-dec-mc-stir-helps',
      description:
        'Thinking stirring helps separation just before or during decanting.',
      triggerAnswer:
        'Stirring the mixture during settling helps the solid drop out faster.',
      correction:
        'Stirring lifts settled particles back into the liquid and delays separation. Leave the mixture undisturbed during settling.',
      reExplanation:
        'Settling needs gravity to act on particles that are not being pushed around. Any current in the liquid keeps small particles in motion, which stops them dropping to the base. Industrial settling tanks are fed gently from one end for this reason. Stir to mix, then leave still to let the layers form before you decant.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
