import type { SkillNode } from '@/types/content'

export const saturatedSolutions: SkillNode = {
  id: 'chemistry-separating-saturated-solutions',
  title: 'Saturated Solutions',
  description:
    'Define a saturated solution as one in which no more solute will dissolve at a given temperature. Use everyday UK examples (sugar in tea, copper sulfate crystal growing, North Sea brine lagoons) to test whether a solution is saturated, and explain why heating can dissolve more solute while cooling can crystallise it back out. Qualitative only at this stage; no solubility curve calculations.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'A saturated solution is one in which no more solute can dissolve at a given temperature; methods to test and identify a saturated solution.',
    awardingBodies: {
      aqa: '4.10.1.1 Pure substances and mixtures; saturated solutions (8462)',
      edexcel: 'Topic 1.40 Saturated solutions; identifying when a solution is saturated (1CH0)',
      ocr: 'C2.1a Saturated solutions; effect of temperature on saturation point (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-sat-scene-tea-test',
      title: 'British Tea: The Sugar Saturation Test',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on this UK kitchen scene to see how adding sugar to a cup of hot tea reveals when the solution becomes saturated.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><ellipse cx="100" cy="180" rx="50" ry="8" fill="#A8A29E" opacity="0.5"/><path d="M 60 100 L 65 175 L 135 175 L 140 100 Z" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><ellipse cx="100" cy="100" rx="40" ry="8" fill="#92400E" stroke="#7C2D12" stroke-width="0.8"/><ellipse cx="100" cy="100" rx="40" ry="8" fill="#A16207" opacity="0.85"/><path d="M 140 115 Q 165 115 165 135 Q 165 155 140 155" fill="none" stroke="#475569" stroke-width="1.5"/><text x="100" y="200" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">CUP 1: unsaturated</text><g fill="#FFFFFF" stroke="#475569" stroke-width="0.4"><circle cx="85" cy="140" r="1.4"/><circle cx="105" cy="150" r="1.4"/><circle cx="115" cy="135" r="1.4"/></g></g><g><ellipse cx="240" cy="180" rx="50" ry="8" fill="#A8A29E" opacity="0.5"/><path d="M 200 100 L 205 175 L 275 175 L 280 100 Z" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><ellipse cx="240" cy="100" rx="40" ry="8" fill="#92400E" stroke="#7C2D12" stroke-width="0.8"/><ellipse cx="240" cy="100" rx="40" ry="8" fill="#A16207" opacity="0.85"/><path d="M 280 115 Q 305 115 305 135 Q 305 155 280 155" fill="none" stroke="#475569" stroke-width="1.5"/><text x="240" y="200" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">CUP 2: saturated</text><g fill="#FFFFFF" stroke="#475569" stroke-width="0.4"><circle cx="225" cy="140" r="1.4"/><circle cx="245" cy="150" r="1.4"/><circle cx="255" cy="135" r="1.4"/><circle cx="235" cy="125" r="1.4"/><circle cx="248" cy="120" r="1.4"/></g><g fill="#FAFAF9" stroke="#A16207" stroke-width="0.4"><rect x="225" y="166" width="4" height="3"/><rect x="232" y="167" width="3" height="2"/><rect x="240" y="166" width="5" height="3"/><rect x="248" y="167" width="3" height="2"/><rect x="256" y="166" width="4" height="3"/></g></g><g fill="#FAFAF9" stroke="#7C2D12" stroke-width="0.6"><rect x="155" y="40" width="12" height="8"/><rect x="155" y="50" width="12" height="8"/><rect x="155" y="60" width="12" height="8"/></g><text x="161" y="35" text-anchor="middle" font-size="7" fill="#1E3A8A">sugar cubes</text><text x="160" y="20" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">SUGAR IN HOT TEA</text></svg>',
        hotspots: [
          {
            id: 'csm-sat-h-cup1',
            x: 30,
            y: 60,
            label: 'Cup 1: still dissolving (unsaturated)',
            description:
              'A spoon of sugar is stirred into hot tea and disappears completely. No grains sit at the bottom. The tea can still dissolve more sugar, so this solution is unsaturated.',
          },
          {
            id: 'csm-sat-h-cup2',
            x: 75,
            y: 60,
            label: 'Cup 2: grains stay at the bottom (saturated)',
            description:
              'Keep stirring in more sugar. At some point grains stop dissolving and settle on the bottom no matter how long you stir. The tea has reached its saturation point at that temperature.',
          },
          {
            id: 'csm-sat-h-cubes',
            x: 50,
            y: 22,
            label: 'Adding solute one step at a time',
            description:
              'The classroom way to find the saturation point is to add solute (sugar) in small known amounts, stirring after each, and stop when the next amount will not dissolve.',
          },
          {
            id: 'csm-sat-h-temp',
            x: 30,
            y: 85,
            label: 'Temperature matters',
            description:
              'Hot tea dissolves more sugar than cold tea. If the same cup were left to cool, the saturation point would drop and any extra sugar would settle out as crystals on cooling.',
          },
        ],
      },
    },
    {
      id: 'csm-sat-scene-crystal-growing',
      title: 'Growing Blue Copper Sulfate Crystals: Saturation in the School Lab',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on this UK school practical to follow how a saturated copper sulfate solution is made and then cooled to grow crystals overnight.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><path d="M 30 70 L 35 170 L 110 170 L 115 70 Z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 35 100 L 38 168 L 108 168 L 111 100 Z" fill="#3B82F6" opacity="0.6"/><text x="72" y="195" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">STEP 1: hot CuSO4 solution</text><text x="72" y="207" text-anchor="middle" font-size="7" fill="#1E3A8A">add powder until no more dissolves</text><g fill="#1E3A8A"><rect x="60" y="160" width="3" height="3"/><rect x="80" y="161" width="3" height="3"/><rect x="70" y="163" width="2" height="2"/></g><g stroke="#DC2626" stroke-width="0.6" fill="none" opacity="0.7"><path d="M 55 80 Q 58 75 55 70"/><path d="M 72 80 Q 75 75 72 70"/><path d="M 90 80 Q 93 75 90 70"/></g></g><g><path d="M 130 70 L 135 170 L 210 170 L 215 70 Z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 135 100 L 138 168 L 208 168 L 211 100 Z" fill="#3B82F6" opacity="0.7"/><text x="172" y="195" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">STEP 2: filter while hot</text><text x="172" y="207" text-anchor="middle" font-size="7" fill="#1E3A8A">remove any undissolved powder</text><line x1="150" y1="40" x2="195" y2="40" stroke="#475569" stroke-width="1"/><path d="M 160 40 L 165 70 L 180 70 L 185 40" fill="none" stroke="#475569" stroke-width="0.8"/></g><g><path d="M 230 70 L 235 170 L 310 170 L 315 70 Z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 235 100 L 238 168 L 308 168 L 311 100 Z" fill="#3B82F6" opacity="0.5"/><text x="272" y="195" text-anchor="middle" font-size="8" font-weight="600" fill="#7C2D12">STEP 3: cool overnight</text><text x="272" y="207" text-anchor="middle" font-size="7" fill="#7C2D12">blue crystals grow on a thread</text><line x1="272" y1="80" x2="272" y2="150" stroke="#475569" stroke-width="0.6"/><g fill="#1E3A8A" stroke="#1E40AF" stroke-width="0.4"><polygon points="266,135 278,135 282,145 272,152 262,145"/><polygon points="268,150 276,150 278,156 272,160 266,156"/><polygon points="269,118 275,118 277,123 272,128 267,123"/></g></g><text x="160" y="20" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">GROWING COPPER SULFATE CRYSTALS</text></svg>',
        hotspots: [
          {
            id: 'csm-sat-h-make-saturated',
            x: 22,
            y: 50,
            label: 'Step 1: make a saturated solution while hot',
            description:
              'Warm water in a beaker dissolves a lot of copper sulfate powder. Keep stirring in powder until grains stop dissolving and settle on the bottom. The hot solution is now saturated.',
          },
          {
            id: 'csm-sat-h-filter',
            x: 52,
            y: 50,
            label: 'Step 2: filter while still hot',
            description:
              'Pour the hot saturated solution through filter paper to remove any undissolved powder. The blue liquid that passes through is a hot saturated solution with nothing extra at the bottom.',
          },
          {
            id: 'csm-sat-h-cool',
            x: 82,
            y: 50,
            label: 'Step 3: cool slowly overnight',
            description:
              'As the solution cools, its saturation point drops. The extra dissolved copper sulfate has nowhere to go, so it comes out of solution as solid blue crystals, often grown on a thread.',
          },
          {
            id: 'csm-sat-h-why-cool',
            x: 75,
            y: 85,
            label: 'Why cooling works',
            description:
              'A hot solvent holds more solute than a cold one for most solids. Cooling lowers the limit. Anything the cold solvent cannot hold any longer crystallises out, leaving you with neat solid crystals.',
          },
        ],
      },
    },
    {
      id: 'csm-sat-scene-north-sea-brine',
      title: 'North Sea Brine: Industrial Saturation by Evaporation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on this UK coastal salt lagoon to see how seawater is brought near saturation by summer evaporation and then crystallises out salt.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="120" fill="#BAE6FD"/><circle cx="270" cy="40" r="18" fill="#FDE68A" stroke="#92400E" stroke-width="0.8"/><g stroke="#FDE68A" stroke-width="1.2" opacity="0.85"><line x1="270" y1="18" x2="270" y2="10"/><line x1="270" y1="62" x2="270" y2="70"/><line x1="288" y1="40" x2="296" y2="40"/><line x1="252" y1="40" x2="244" y2="40"/><line x1="284" y1="26" x2="290" y2="20"/><line x1="256" y1="26" x2="250" y2="20"/></g><rect x="0" y="120" width="320" height="100" fill="#D6D3D1"/><g><rect x="20" y="125" width="120" height="60" fill="#3B82F6" opacity="0.55" stroke="#1E3A8A" stroke-width="0.8"/><text x="80" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">LAGOON 1: dilute</text></g><g><rect x="150" y="125" width="80" height="45" fill="#1E40AF" opacity="0.7" stroke="#1E3A8A" stroke-width="0.8"/><text x="190" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">LAGOON 2: near saturated</text></g><g><rect x="240" y="125" width="70" height="35" fill="#312E81" opacity="0.7" stroke="#1E3A8A" stroke-width="0.8"/><text x="275" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#7C2D12">LAGOON 3: saturated</text><g fill="#FAFAF9" stroke="#A16207" stroke-width="0.3"><rect x="248" y="155" width="3" height="2"/><rect x="256" y="156" width="3" height="2"/><rect x="266" y="155" width="3" height="2"/><rect x="278" y="156" width="3" height="2"/><rect x="290" y="155" width="3" height="2"/><rect x="300" y="156" width="3" height="2"/></g></g><g stroke="#3B82F6" stroke-width="0.5" fill="none" opacity="0.8"><path d="M 50 115 Q 53 105 50 95"/><path d="M 80 115 Q 83 105 80 95"/><path d="M 110 115 Q 113 105 110 95"/><path d="M 170 115 Q 173 100 170 85"/><path d="M 200 115 Q 203 100 200 85"/></g><text x="160" y="15" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">UK SALT LAGOONS: SUMMER EVAPORATION</text></svg>',
        hotspots: [
          {
            id: 'csm-sat-h-lagoon1',
            x: 25,
            y: 65,
            label: 'Lagoon 1: dilute seawater',
            description:
              'Seawater pumped in from the North Sea holds about 35 grams of dissolved salt per litre. This is far below saturation, so no crystals form here.',
          },
          {
            id: 'csm-sat-h-lagoon2',
            x: 55,
            y: 65,
            label: 'Lagoon 2: near saturated',
            description:
              'Summer sun evaporates water out of lagoon 1 and the dissolved salt is left behind. The brine flows on to a smaller lagoon, where the salt level climbs close to the saturation limit.',
          },
          {
            id: 'csm-sat-h-lagoon3',
            x: 85,
            y: 65,
            label: 'Lagoon 3: saturated, crystals form',
            description:
              'In the smallest lagoon the brine is fully saturated. Any more water lost by evaporation forces salt out of solution as solid crystals along the lagoon floor, ready to be raked up.',
          },
          {
            id: 'csm-sat-h-sun',
            x: 85,
            y: 20,
            label: 'Driver: sunlight, not heat',
            description:
              'The sun warms the brine, but the main effect is to evaporate solvent (water) from the lagoon. Less water with the same dissolved salt means a higher concentration. Past the limit, salt crystallises out.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-sat-worked-1',
      title: 'Testing whether a cup of tea has become saturated with sugar',
      steps: [
        {
          explanation:
            'Question: A pupil keeps stirring sugar into a mug of hot tea, one half-spoon at a time. After the seventh half-spoon, some sugar grains sit on the bottom of the mug and will not dissolve. Is the tea saturated, and how would you check?',
        },
        {
          explanation:
            'Step 1: define saturated. A saturated solution is one in which no more solute will dissolve at that temperature. The clue is solid sitting at the bottom that stays there no matter how long you stir.',
        },
        {
          explanation:
            'Step 2: rule out a poor stir. Stir the mug for another minute. If the grains still sit on the bottom, stirring time is not the problem; the tea has hit its limit.',
        },
        {
          explanation:
            'Step 3: confirm with a control. Take a fresh mug of tea at the same temperature and add only six half-spoons of sugar; if all six dissolve, then the seventh half-spoon was the one that pushed the first mug past saturation.',
          maths: 'limit: roughly 6 to 7 half-spoons per 200 ml hot tea, varies with temperature',
        },
        {
          explanation:
            'Step 4: state the conclusion. Yes, the tea is saturated at that temperature. The extra grains are evidence; they are exactly what is left over once the solvent has dissolved as much as it can hold.',
        },
      ],
    },
    {
      id: 'csm-sat-worked-2',
      title: 'Why a hot saturated copper sulfate solution grows crystals overnight',
      steps: [
        {
          explanation:
            'Question: A pupil makes a saturated copper sulfate solution in hot water, filters it while warm, and leaves it on the bench overnight. In the morning there are blue crystals on the thread. Explain.',
        },
        {
          explanation:
            'Step 1: write down what saturated means. The hot solution holds the maximum mass of copper sulfate it can dissolve at the warm starting temperature.',
        },
        {
          explanation:
            'Step 2: state how solubility changes. For most solids, including copper sulfate, the mass that will dissolve falls as the solvent cools. So the cold limit is lower than the hot limit.',
          maths: 'roughly: CuSO4 limit drops from about 32 g per 100 g water at 40 degrees C to about 21 g at 10 degrees C',
        },
        {
          explanation:
            'Step 3: track the extra solute. The cooling water cannot hold all the dissolved copper sulfate any longer. The extra has to come out of solution as a solid.',
        },
        {
          explanation:
            'Step 4: explain where it goes. Solute molecules drift to a surface (the thread, the side of the beaker) and pack into a regular pattern, building a crystal. This continues all night until the cool solution is itself saturated at the new lower temperature.',
        },
        {
          explanation:
            'Step 5: pull back to the big idea. Saturation is a temperature linked limit, not a fixed number. Heating widens the limit, cooling narrows it; cooling a saturated hot solution is one of the standard ways to crystallise out a pure solid.',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER (7 questions)
    {
      id: 'csm-sat-q1',
      type: 'multiple-choice',
      stem: 'Which sentence best defines a saturated solution?',
      tier: 'core',
      options: [
        'A solution that has reached the maximum mass of solute that will dissolve at that temperature',
        'A solution that fills its container right to the brim',
        'A solution that is thick and viscous like syrup',
        'A solution that has no more space between its particles',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'csm-sat-mis-full-to-brim',
    },
    {
      id: 'csm-sat-q2',
      type: 'multiple-choice',
      stem: 'A pupil stirs sugar into hot tea. After 6 half-spoons the next half-spoon settles on the bottom and stays there even after a long stir. What does this tell them?',
      tier: 'core',
      options: [
        'The sugar is bad and will not dissolve',
        'The tea has cooled too much to dissolve anything',
        'The tea has reached its saturation point at that temperature',
        'The spoon must be dirty and is stopping the dissolving',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-sat-q3',
      type: 'multiple-choice',
      stem: 'A copper sulfate solution is saturated at 20 degrees Celsius. The teacher gently warms the beaker to 60 degrees Celsius. What happens when more copper sulfate powder is now added?',
      tier: 'core',
      options: [
        'No more will dissolve; saturation is a fixed limit',
        'The whole beaker will solidify',
        'The water will boil away immediately',
        'More will dissolve, because warming raises the saturation limit for most solids',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'csm-sat-mis-never-more',
    },
    {
      id: 'csm-sat-q4',
      type: 'multiple-choice',
      stem: 'A saturated solution of calcium carbonate in water tastes faintly chalky but barely cloudy. A saturated solution of sugar in water is thick and very sweet. What does this show?',
      tier: 'core',
      options: [
        'Saturated means at the solubility limit; that limit can be very low (calcium carbonate) or very high (sugar)',
        'Saturated always means concentrated; one of these must be wrong',
        'Calcium carbonate cannot really make a saturated solution',
        'Sugar is heavier than calcium carbonate, so it makes a stronger solution',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'csm-sat-mis-saturated-equals-concentrated',
    },
    {
      id: 'csm-sat-q5',
      type: 'numeric-entry',
      stem: 'At 20 degrees Celsius, 100 g of water can hold a maximum of 36 g of dissolved salt before becoming saturated. A pupil stirs 30 g of salt into 100 g of water at 20 degrees Celsius and it all dissolves. How many more grams of salt could be added before the solution becomes saturated?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'g',
      xpValue: 10,
      hint: 'Subtract what is already dissolved from the saturation limit.',
    },
    {
      id: 'csm-sat-q6',
      type: 'numeric-entry',
      stem: 'A bathtub holds 150 litres of warm water. Bath salts dissolve up to 250 g per litre at that temperature. What is the maximum total mass of bath salts in grams that could dissolve in the full tub before it becomes saturated?',
      tier: 'core',
      correctAnswer: 37500,
      unit: 'g',
      xpValue: 10,
      hint: 'Multiply the volume in litres by the limit per litre.',
    },
    {
      id: 'csm-sat-q7',
      type: 'drag-order',
      stem: 'Place these steps for growing copper sulfate crystals in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Filter the hot saturated solution to remove any undissolved powder',
        'Warm water in a beaker and stir in copper sulfate powder until no more will dissolve',
        'Cover the beaker and leave to cool slowly overnight on the bench',
        'Tie a small seed crystal to a thread and lower it into the warm filtered solution',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
    },
    // CONFIDENT TIER (8 questions)
    {
      id: 'csm-sat-q8',
      type: 'multiple-choice',
      stem: 'A pupil adds copper sulfate powder to water at 20 degrees Celsius and stirs for only 5 seconds. Some powder still sits at the bottom. They write: "The solution is saturated." Is this conclusion sound?',
      tier: 'confident',
      options: [
        'Yes, any powder at the bottom proves saturation',
        'Yes, because the water is too cold to dissolve copper sulfate at all',
        'No, copper sulfate never dissolves in water',
        'No, the pupil has not stirred long enough; the powder might just need more time to dissolve. Saturated means powder remains after thorough stirring',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-sat-mis-bottom-equals-saturated',
    },
    {
      id: 'csm-sat-q9',
      type: 'multiple-choice',
      stem: 'A pupil makes brine that is saturated with salt at 20 degrees Celsius. They say: "Brine must be thick and viscous like syrup because it is saturated." Why is this wrong?',
      tier: 'confident',
      options: [
        'Saturated solutions are always thick',
        'Brine actually is thick, the pupil has not noticed',
        'Saturation refers to the dissolved solute hitting its limit, not to viscosity. Salt water is runny because salt particles do not bind the water in the way sugar does',
        'Salt does not dissolve in water at all',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-sat-mis-saturated-equals-viscous',
    },
    {
      id: 'csm-sat-q10',
      type: 'multiple-choice',
      stem: 'A brewery has a vat of saturated sugar syrup at 50 degrees Celsius. They pour in 200 ml of cold water to make it easier to pump. What happens to the saturation status?',
      tier: 'confident',
      options: [
        'The syrup is now unsaturated forever, because water has been added',
        'The syrup stays exactly saturated, because saturation does not change',
        'The added water makes the syrup briefly unsaturated; once the dissolved sugar spreads through the new water, the mixture either reaches the new saturation limit again or stays just below it',
        'The syrup turns to crystals straight away',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-sat-mis-water-forever-unsaturated',
    },
    {
      id: 'csm-sat-q11',
      type: 'numeric-entry',
      stem: 'At 25 degrees Celsius, 100 g of water can dissolve a maximum of 92 g of sugar (sucrose). A brewer dissolves 75 g of sugar in 100 g of water at 25 degrees Celsius. By what mass in grams is this solution short of saturation?',
      tier: 'confident',
      correctAnswer: 17,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the dissolved mass from the saturation limit at that temperature.',
    },
    {
      id: 'csm-sat-q12',
      type: 'numeric-entry',
      stem: 'A school technician has a saturated copper sulfate solution at 60 degrees Celsius holding 40 g of dissolved CuSO4 in 100 g of water. At 20 degrees Celsius the saturation limit is only 20 g per 100 g of water. If the solution is cooled to 20 degrees Celsius, what mass in grams of copper sulfate will crystallise out?',
      tier: 'confident',
      correctAnswer: 20,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the cold limit from the hot dissolved mass; the leftover comes out as crystals.',
    },
    {
      id: 'csm-sat-q13',
      type: 'spot-misconception',
      stem: 'Lucas says: "If I see sugar sitting at the bottom of my tea straight after I have added it, the tea must be saturated, simple as that."',
      tier: 'confident',
      statements: [
        {
          text: 'Lucas is right. Any solid at the bottom proves saturation, no matter how short a time has passed.',
          isMisconception: true,
        },
        {
          text: 'Lucas is wrong. Sugar at the bottom only proves saturation if the tea has been stirred thoroughly first. Before that, the grains might just be on the way to dissolving.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-sat-mis-bottom-equals-saturated',
    },
    {
      id: 'csm-sat-q14',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil describes growing blue copper sulfate crystals from a hot saturated solution. Step 3 is missing.',
      tier: 'confident',
      steps: [
        'Warm water in a beaker on a tripod and stir in copper sulfate powder until no more will dissolve at the warm temperature',
        'Filter the hot saturated solution through paper to remove any undissolved powder, into a clean beaker',
        null,
        'In the morning, lift the thread out gently; blue crystals have grown along its length and on the bottom of the beaker',
      ],
      missingStepIndex: 2,
      correctStep:
        'Tie a small seed crystal to a thread, lower it into the warm filtered solution, cover the beaker, and leave to cool slowly overnight so that the falling saturation limit forces dissolved CuSO4 out as solid crystals',
      xpValue: 20,
    },
    {
      id: 'csm-sat-q15',
      type: 'free-text',
      stem: 'Explain in 2 to 3 sentences why a saturated salt solution (North Sea brine) is not "concentrated" in the same sense as a saturated sugar solution, even though both are at their saturation limits.',
      tier: 'confident',
      sampleAnswer:
        'Saturated means at the solubility limit at that temperature, not "as concentrated as a solution can ever be". Salt has a moderate solubility limit (about 360 g per litre) while sugar has a very high one (about 2000 g per litre). So a saturated sugar solution actually holds far more dissolved solute per litre than a saturated salt solution, even though both are saturated.',
      keywords: ['limit', 'solubility', 'temperature', 'concentration'],
      xpValue: 20,
      misconceptionId: 'csm-sat-mis-saturated-equals-concentrated',
    },
    // CHALLENGE TIER (5 questions)
    {
      id: 'csm-sat-q16',
      type: 'multiple-choice',
      stem: 'A chemist cools a saturated sodium chloride solution from 80 degrees Celsius to 10 degrees Celsius. They expect a large mass of crystals to drop out, like the copper sulfate practical. Instead, very little salt crystallises. Why?',
      tier: 'challenge',
      options: [
        'Sodium chloride has a saturation limit that barely changes with temperature, so cooling does not lower it much. Crystallisation by cooling only works well for solids whose solubility depends strongly on temperature',
        'The thermometer was broken; the solution did not really cool',
        'Sodium chloride is special and does not crystallise',
        'Sodium chloride reacts with the water on cooling',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'csm-sat-mis-cooling-always-crystallises',
    },
    {
      id: 'csm-sat-q17',
      type: 'multiple-choice',
      stem: 'A North Sea salt works near Hartlepool runs three open evaporation lagoons. Lagoon 1 is dilute, lagoon 2 is near saturated, lagoon 3 is fully saturated with crystals forming on the floor. Why does salt come out of lagoon 3 but not lagoon 2, even though sunlight warms both?',
      tier: 'challenge',
      options: [
        'Lagoon 2 is colder than lagoon 3',
        'Lagoon 2 is still below the saturation limit, so evaporated water just concentrates the brine further; lagoon 3 is at the limit, so any further evaporation forces salt out as solid because the remaining water cannot hold the same amount',
        'Sunlight only warms the smallest lagoon',
        'Lagoon 3 was sown with salt seeds the night before',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'csm-sat-q18',
      type: 'numeric-entry',
      stem: 'A North Sea brine lagoon holds 5000 litres of saturated brine at 360 g of dissolved salt per litre. Overnight, evaporation removes 500 litres of water, and the remaining 4500 litres stay saturated at the same temperature. What mass in kilograms of salt has crystallised out onto the lagoon floor?',
      tier: 'challenge',
      correctAnswer: 180,
      unit: 'kg',
      tolerance: 0.5,
      xpValue: 25,
      hint: 'Total salt stays constant. Work out how much salt the 4500 litres of remaining saturated brine can hold; the difference from the original 5000 litres of salt is what crystallises.',
    },
    {
      id: 'csm-sat-q19',
      type: 'spot-misconception',
      stem: 'Priya says: "I cooled my saturated brine solution from 60 degrees Celsius to 5 degrees Celsius, but only a tiny bit of salt came out. That means my experiment must have gone wrong."',
      tier: 'challenge',
      statements: [
        {
          text: 'Priya is right. A big temperature drop should always give a big yield of crystals, so something must be wrong.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Sodium chloride has a saturation limit that barely changes with temperature, so cooling a saturated brine yields very little salt. Her experiment was fine; it just shows that cooling does not work as a crystallisation method for every solid.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'csm-sat-mis-cooling-always-crystallises',
    },
    {
      id: 'csm-sat-q20',
      type: 'free-text',
      stem: 'A brewer in Burton-on-Trent has a vat of saturated priming sugar syrup at 30 degrees Celsius. They want to add 1 litre of cold water without any sugar crystallising out. Explain in 2 to 3 sentences whether this is safe, and what would happen if they added 1 litre of ice-cold water instead.',
      tier: 'challenge',
      sampleAnswer:
        'Adding cold water to a saturated solution creates temporary unsaturation: the same dissolved sugar is now spread through more water, so the concentration drops below the limit at that temperature. As long as the mixed temperature stays high enough that the new total is below the new saturation limit, no sugar will crystallise. If the added water is ice-cold, the mixed temperature could fall to a value where the saturation limit drops sharply, and the now over-saturated portion of dissolved sugar would crystallise out of solution.',
      keywords: ['unsaturated', 'temperature', 'limit', 'crystallise'],
      xpValue: 25,
      misconceptionId: 'csm-sat-mis-water-forever-unsaturated',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q05 on saturated solutions: candidates "wrote that saturated meant the beaker was completely full", missing that saturation refers to dissolved solute, not solvent volume. Reinforced by CGP KS3 Chemistry Study Book p.52 Common Mistake box on solutions.
    {
      id: 'csm-sat-mis-full-to-brim',
      description:
        'Saturated means the container is full to the brim, with no more room for any more liquid to be poured in.',
      triggerAnswer: 'full-to-brim',
      correction:
        'In fact saturated refers to the dissolved solute reaching its maximum, not to the volume of liquid in the container. A half-full beaker can be just as saturated as one filled to the rim.',
      reExplanation:
        'Picture two beakers of hot tea. One is filled halfway, the other to the brim. Stir sugar into each until grains stay at the bottom. Both are now saturated at that temperature. Saturation is a property of how much solute is dissolved per amount of solvent, not of how much liquid is in the container.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q05 on solubility: candidates "argued that once a solution was saturated, no more solute could ever dissolve, even on heating". Reinforced by RSC Education article "Teaching solutions and solubility" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'csm-sat-mis-never-more',
      description:
        'Once a solution is saturated, you can never get any more solute to dissolve in it.',
      triggerAnswer: 'never-more',
      correction:
        'In fact saturation is set at one particular temperature. Warm the solvent and the limit rises, so for most solids more solute will dissolve.',
      reExplanation:
        'For most solids, the saturation limit rises as the solvent warms. A solution that is saturated at 20 degrees Celsius can take more solute if it is warmed to 60 degrees Celsius. That is how the copper sulfate crystal practical starts: heat the water, dissolve more solute, then cool it back down to force the extra solute out as crystals.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on solutions: a recurring Year 7 idea is that "any solid at the bottom of a beaker proves the solution is saturated", missing that the solid may just be on its way to dissolving. Reinforced by CGP KS3 Chemistry Study Book p.52 Common Mistake box.
    {
      id: 'csm-sat-mis-bottom-equals-saturated',
      description:
        'If solid sits at the bottom of a solution, then the solution must be saturated.',
      triggerAnswer: 'bottom-equals-saturated',
      correction:
        'In fact solid at the bottom only proves saturation after thorough stirring. Before that, the solid might just be on its way to dissolving.',
      reExplanation:
        'When you first drop solid into solvent, it sits on the bottom while it dissolves. Stir for a minute or two. If the solid is gone, the solution was unsaturated. If solid remains after a thorough stir, the solution is saturated at that temperature. The test is "does it stay after stirring?", not "is there solid at the bottom right now?".',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q06 on saturated solutions: candidates often equated saturated with concentrated, missing that solubility limits vary widely between solutes. Reinforced by Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education.
    {
      id: 'csm-sat-mis-saturated-equals-concentrated',
      description:
        'Saturated solutions are always strongly concentrated. The word saturated means a lot of solute is dissolved.',
      triggerAnswer: 'saturated-equals-concentrated',
      correction:
        'In fact saturated means at the solubility limit, and that limit can be very low or very high. A saturated calcium carbonate solution is extremely dilute; a saturated sugar solution is very concentrated.',
      reExplanation:
        'Solubility varies enormously between solutes. Calcium carbonate dissolves only tiny amounts in water before saturating. Sugar dissolves in huge amounts before saturating. Both reach their saturation point, but the concentrations at that point differ by a factor of thousands. Saturated tells you the limit has been hit; the size of that limit depends on which solute and which solvent.',
    },
    // Source: David Paterson, "Teaching solutions and solubility", RSC Education CPD article (2021-03-15): a recurring Year 7 idea is that "saturated solutions are viscous, like syrup", confusing the limit with the thickness. Reinforced by CGP KS3 Chemistry common mistake callouts on solubility.
    {
      id: 'csm-sat-mis-saturated-equals-viscous',
      description:
        'Saturated solutions feel thick, like syrup, because they have so much dissolved solute.',
      triggerAnswer: 'saturated-equals-viscous',
      correction:
        'In fact saturation refers to the concentration of dissolved solute at the limit, not to thickness. A saturated brine is runny like water; a saturated sugar solution happens to be thick because sugar molecules grip many water molecules.',
      reExplanation:
        'Thickness, or viscosity, depends on how solute particles interact with the solvent. Sugar molecules form many hydrogen bonds with water, so a strong sugar solution flows slowly. Salt particles do not bind water in that way, so brine pours easily even when fully saturated. Saturation answers the question "is the solubility limit reached?"; viscosity answers a different question about how the solution flows.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q06 on saturated solutions: candidates wrote that "adding water to a saturated solution makes it unsaturated forever", missing that the diluted solution can re-saturate. Reinforced by RSC Education solubility CPD article.
    {
      id: 'csm-sat-mis-water-forever-unsaturated',
      description:
        'Once you add more water to a saturated solution, it stays unsaturated permanently and can never reach the limit again.',
      triggerAnswer: 'water-forever-unsaturated',
      correction:
        'In fact adding water only creates temporary unsaturation. The dissolved solute spreads through the new water, and if more solute is added, the solution will re-saturate at its new volume.',
      reExplanation:
        'Picture a saturated brine. Pour in another 100 ml of water. The dissolved salt spreads out, so the concentration drops below the limit at that temperature; the solution is unsaturated for now. Add more salt and stir; the salt dissolves until the limit at the new total volume is reached. The solution is saturated again. Adding water resets the level; it does not block saturation forever.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q07 on crystallisation: candidates wrote that "cooling any saturated solution forces solute out as crystals", missing that the effect only works for solutes whose solubility falls strongly with temperature. Reinforced by OCR Gateway Chemistry examiner reports for J248 on saturated solutions (2020, 2022).
    {
      id: 'csm-sat-mis-cooling-always-crystallises',
      description:
        'Cooling any saturated solution always causes the dissolved solute to crystallise out, no matter which solute it is.',
      triggerAnswer: 'cooling-always-crystallises',
      correction:
        'In fact cooling only crystallises solute when the saturation limit drops strongly with temperature. Sodium chloride barely changes, so cooling brine yields very little salt.',
      reExplanation:
        'Copper sulfate is a textbook case: its solubility drops sharply as water cools, so a hot saturated solution forces out plenty of crystals overnight. Sodium chloride is almost flat: about 36 g per 100 g water at 20 degrees Celsius and 39 g at 80 degrees Celsius. Cooling brine from 80 to 20 only forces out a few grams. Brine in UK lagoons therefore crystallises by evaporation, not by cooling.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
