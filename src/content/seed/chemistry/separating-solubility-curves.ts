import type { SkillNode } from '@/types/content'

export const solubilityCurves: SkillNode = {
  id: 'chemistry-separating-solubility-curves',
  title: 'Solubility and Solubility Curves',
  description:
    'Use solubility as a quantitative measure of how much solute will dissolve in a fixed mass of solvent at a given temperature. Read solubility curves for potassium nitrate, copper sulfate, and sodium chloride, predict how much solute crystallises out as a saturated solution cools, and notice the counter-example that gas solubility (CO2 in fizzy drinks) falls as temperature rises.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'Dissolving in terms of the particle model; solubility as a quantitative measure of how much solute dissolves in a solvent at a fixed temperature.',
    awardingBodies: {
      aqa: '4.10.1.1 Pure substances and mixtures; solubility curves and temperature effects (8462)',
      edexcel: 'Topic 1.40 Solubility; solubility curves; the effect of temperature on solubility (1CH0)',
      ocr: 'C2.1a Solubility; quantitative interpretation of solubility data (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-sc-curve-three',
      title: 'Three Solubility Curves on One Set of Axes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read off the solubility of copper sulfate, potassium nitrate, and sodium chloride at different temperatures.',
      data: {
        viewBox: '0 0 360 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 240"><rect x="0" y="0" width="360" height="240" fill="#F8FAFC"/><g><line x1="50" y1="40" x2="50" y2="200" stroke="#1E3A8A" stroke-width="1.2"/><line x1="50" y1="200" x2="320" y2="200" stroke="#1E3A8A" stroke-width="1.2"/><text x="40" y="44" text-anchor="end" font-size="8" fill="#1E3A8A">100</text><text x="40" y="84" text-anchor="end" font-size="8" fill="#1E3A8A">75</text><text x="40" y="124" text-anchor="end" font-size="8" fill="#1E3A8A">50</text><text x="40" y="164" text-anchor="end" font-size="8" fill="#1E3A8A">25</text><text x="40" y="204" text-anchor="end" font-size="8" fill="#1E3A8A">0</text><text x="50" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">0</text><text x="104" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">20</text><text x="158" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">40</text><text x="212" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">60</text><text x="266" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">80</text><text x="320" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">100</text><text x="185" y="232" text-anchor="middle" font-size="9" fill="#1E3A8A">temperature (°C)</text><text x="18" y="120" text-anchor="middle" font-size="9" fill="#1E3A8A" transform="rotate(-90 18 120)">solubility (g per 100 g water)</text></g><g><path d="M 50 168 Q 158 132 320 50" fill="none" stroke="#7C2D12" stroke-width="1.6"/><text x="290" y="44" font-size="8" fill="#7C2D12">KNO3</text></g><g><path d="M 50 165 Q 158 152 320 88" fill="none" stroke="#1E3A8A" stroke-width="1.6"/><text x="290" y="84" font-size="8" fill="#1E3A8A">CuSO4</text></g><g><line x1="50" y1="142" x2="320" y2="138" stroke="#14532D" stroke-width="1.6"/><text x="290" y="134" font-size="8" fill="#14532D">NaCl</text></g><circle cx="104" cy="159" r="3" fill="#7C2D12"/><circle cx="212" cy="100" r="3" fill="#7C2D12"/><circle cx="212" cy="136" r="3" fill="#1E3A8A"/><circle cx="104" cy="159" r="3" fill="#7C2D12"/><circle cx="266" cy="140" r="3" fill="#14532D"/><text x="185" y="22" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">SOLUBILITY vs TEMPERATURE</text></svg>',
        hotspots: [
          {
            id: 'csm-sc-h-kno3-20',
            x: 29,
            y: 66,
            label: 'KNO3 at 20 °C: 32 g per 100 g water',
            description:
              'Read up from 20 °C on the temperature axis to the KNO3 curve, then across to the solubility axis. The curve gives 32 g per 100 g of water. A greenhouse grower mixing potassium nitrate feed at a cool 20 °C cannot dissolve any more than this in a beaker of 100 g of water.',
          },
          {
            id: 'csm-sc-h-kno3-60',
            x: 59,
            y: 42,
            label: 'KNO3 at 60 °C: about 110 g per 100 g water',
            description:
              'Warm the water to 60 °C and the KNO3 curve climbs sharply, so far more solute will dissolve. This is why fertiliser feeds are mixed in warm water in a UK greenhouse, then cooled in a watering can before use.',
          },
          {
            id: 'csm-sc-h-cuso4-60',
            x: 59,
            y: 57,
            label: 'CuSO4 at 60 °C: 40 g per 100 g water',
            description:
              'On the CuSO4 curve at 60 °C, the solubility is 40 g per 100 g of water. School practicals on growing copper sulfate crystals always start near this point, then cool the saturated solution down so crystals form.',
          },
          {
            id: 'csm-sc-h-nacl-flat',
            x: 74,
            y: 58,
            label: 'NaCl is nearly flat: 36 g (20 °C) to 39 g (100 °C)',
            description:
              'Sodium chloride only rises from 36 g per 100 g water at 20 °C to 39 g at 100 °C. The curve is almost flat. Heating a salt solution does very little to dissolve more salt, unlike the steep KNO3 curve.',
          },
          {
            id: 'csm-sc-h-units',
            x: 5,
            y: 50,
            label: 'Y-axis units: grams per 100 g water',
            description:
              'Always read the y-axis units before quoting a number. UK KS3 curves are usually drawn in grams of solute per 100 g of water, not grams per litre. Treat that as the default unless the axis says otherwise.',
          },
        ],
      },
    },
    {
      id: 'csm-sc-particle-view',
      title: 'Saturated, Unsaturated, and Mass Conservation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what saturated and unsaturated mean in particle terms, and why dissolving 10 g of salt in 100 g of water still gives 110 g of solution.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F8FAFC"/><g><rect x="20" y="40" width="100" height="160" rx="4" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1"/><text x="70" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">UNSATURATED</text><circle cx="40" cy="100" r="3" fill="#7C2D12"/><circle cx="55" cy="120" r="3" fill="#7C2D12"/><circle cx="80" cy="110" r="3" fill="#7C2D12"/><circle cx="100" cy="130" r="3" fill="#7C2D12"/><circle cx="60" cy="160" r="3" fill="#7C2D12"/><text x="70" y="190" text-anchor="middle" font-size="8" fill="#1E3A8A">more will dissolve</text></g><g><rect x="130" y="40" width="100" height="160" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="180" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">SATURATED</text><circle cx="145" cy="80" r="3" fill="#7C2D12"/><circle cx="160" cy="100" r="3" fill="#7C2D12"/><circle cx="180" cy="90" r="3" fill="#7C2D12"/><circle cx="200" cy="105" r="3" fill="#7C2D12"/><circle cx="215" cy="125" r="3" fill="#7C2D12"/><circle cx="150" cy="135" r="3" fill="#7C2D12"/><circle cx="175" cy="150" r="3" fill="#7C2D12"/><circle cx="195" cy="160" r="3" fill="#7C2D12"/><circle cx="215" cy="170" r="3" fill="#7C2D12"/><rect x="155" y="180" width="50" height="14" fill="#92400E" opacity="0.65"/><text x="180" y="205" text-anchor="middle" font-size="7" fill="#7C2D12">no more dissolves</text></g><g><rect x="240" y="40" width="105" height="160" rx="4" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/><text x="292" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">MASS IS KEPT</text><text x="292" y="78" text-anchor="middle" font-size="8" fill="#1E3A8A">10 g salt</text><text x="292" y="92" text-anchor="middle" font-size="8" fill="#1E3A8A">+ 100 g water</text><line x1="260" y1="100" x2="324" y2="100" stroke="#1E3A8A" stroke-width="0.6"/><text x="292" y="115" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">= 110 g solution</text><text x="292" y="140" text-anchor="middle" font-size="8" fill="#92400E">solute particles</text><text x="292" y="152" text-anchor="middle" font-size="8" fill="#92400E">are still there,</text><text x="292" y="164" text-anchor="middle" font-size="8" fill="#92400E">just spread between</text><text x="292" y="176" text-anchor="middle" font-size="8" fill="#92400E">water particles.</text></g></svg>',
        hotspots: [
          {
            id: 'csm-sc-h-unsat',
            x: 19,
            y: 50,
            label: 'Unsaturated solution',
            description:
              'Only a small amount of solute has dissolved so far. There is space between the water particles for more solute particles to fit in. Stir in more sugar and it will still vanish.',
          },
          {
            id: 'csm-sc-h-sat',
            x: 50,
            y: 50,
            label: 'Saturated solution',
            description:
              'The maximum amount of solute for this temperature has now dissolved. Any extra solute sinks to the bottom and sits there as undissolved solid. Heating the water raises the limit and lets more dissolve.',
          },
          {
            id: 'csm-sc-h-mass',
            x: 81,
            y: 50,
            label: 'Mass is conserved',
            description:
              'Dissolving 10 g of salt in 100 g of water gives 110 g of solution, not 100 g. The salt has not vanished; its particles have spread between the water particles, but their mass is still there.',
          },
        ],
      },
    },
    {
      id: 'csm-sc-cool-crystals',
      title: 'Cooling a Saturated Solution: Crystals Drop Out',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see what happens to a saturated copper sulfate solution as it cools, and why this is how school crystal-growing practicals work.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#F8FAFC"/><g><path d="M 30 70 L 30 190 L 130 190 L 130 70" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="32" y="100" width="96" height="89" fill="#BFDBFE" opacity="0.65"/><circle cx="50" cy="130" r="2.5" fill="#1E3A8A"/><circle cx="70" cy="140" r="2.5" fill="#1E3A8A"/><circle cx="95" cy="120" r="2.5" fill="#1E3A8A"/><circle cx="115" cy="150" r="2.5" fill="#1E3A8A"/><circle cx="60" cy="170" r="2.5" fill="#1E3A8A"/><circle cx="105" cy="180" r="2.5" fill="#1E3A8A"/><text x="80" y="62" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">60 °C</text><text x="80" y="208" text-anchor="middle" font-size="8" fill="#1E3A8A">40 g dissolved</text></g><g><path d="M 230 70 L 230 190 L 330 190 L 330 70" fill="none" stroke="#1E3A8A" stroke-width="1.2"/><rect x="232" y="120" width="96" height="69" fill="#BFDBFE" opacity="0.65"/><circle cx="248" cy="145" r="2.5" fill="#1E3A8A"/><circle cx="270" cy="155" r="2.5" fill="#1E3A8A"/><circle cx="295" cy="135" r="2.5" fill="#1E3A8A"/><rect x="250" y="178" width="12" height="10" fill="#1E40AF"/><rect x="275" y="180" width="14" height="9" fill="#1E40AF"/><rect x="295" y="178" width="11" height="11" fill="#1E40AF"/><rect x="260" y="170" width="9" height="8" fill="#1E40AF"/><text x="280" y="62" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">20 °C</text><text x="280" y="208" text-anchor="middle" font-size="8" fill="#1E3A8A">22 g dissolved + 18 g crystals</text></g><g><path d="M 145 130 L 215 130" stroke="#7C2D12" stroke-width="1.4" marker-end="url(#cool-arrow)"/><defs><marker id="cool-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#7C2D12"/></marker></defs><text x="180" y="118" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">cool down</text><text x="180" y="148" text-anchor="middle" font-size="8" fill="#7C2D12">solubility limit drops</text></g><text x="180" y="35" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">CuSO4: 40 g dissolves at 60 °C, only 22 g at 20 °C</text></svg>',
        hotspots: [
          {
            id: 'csm-sc-h-hot',
            x: 22,
            y: 50,
            label: 'Saturated at 60 °C',
            description:
              '100 g of water at 60 °C can hold 40 g of copper sulfate as a saturated solution. Every particle of solute that fits at this temperature is dissolved; the liquid is clear blue.',
          },
          {
            id: 'csm-sc-h-cooling',
            x: 50,
            y: 60,
            label: 'Cooling the beaker',
            description:
              'As the beaker cools, the solubility limit falls. The hot solution carried more solute than the cool water can hold, so the extra solute has to come out as solid crystals.',
          },
          {
            id: 'csm-sc-h-crystals',
            x: 78,
            y: 78,
            label: '18 g of crystals appear',
            description:
              'At 20 °C only 22 g of CuSO4 will stay in solution per 100 g of water. The original 40 g loses 18 g, which falls out as blue copper sulfate crystals on the bottom. This is how school crystal-growing practicals work.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-sc-worked-1',
      title: 'Scaling solubility to a smaller volume of solvent',
      steps: [
        {
          explanation:
            'Question: At 20 °C, 32 g of potassium nitrate dissolves in 100 g of water as a saturated solution. How many grams will dissolve in 50 g of water at the same temperature?',
        },
        {
          explanation:
            'Step 1: the solubility is given per 100 g of water. We have only 50 g of water, which is half as much solvent.',
          maths: '50 g water / 100 g water = 1 / 2',
        },
        {
          explanation:
            'Step 2: half the solvent can dissolve half the solute, because the solubility is fixed per 100 g of water at this temperature.',
          maths: '32 g x (1 / 2) = 16 g',
        },
        {
          explanation:
            'Step 3: the answer is 16 g of potassium nitrate. The same scaling works for any solvent mass: 25 g of water would hold 8 g, 200 g of water would hold 64 g.',
        },
      ],
    },
    {
      id: 'csm-sc-worked-2',
      title: 'How many grams crystallise out when a saturated solution cools',
      steps: [
        {
          explanation:
            'Question: a school practical makes 100 g of saturated copper sulfate solution at 60 °C, then cools it slowly to 20 °C. Solubility of CuSO4 is 40 g per 100 g of water at 60 °C and 22 g per 100 g of water at 20 °C. How many grams of crystals form?',
        },
        {
          explanation:
            'Step 1: at 60 °C, 100 g of water holds 40 g of dissolved CuSO4 in a saturated solution.',
          maths: 'mass dissolved at 60 °C = 40 g',
        },
        {
          explanation:
            'Step 2: at 20 °C, the same 100 g of water can only hold 22 g of CuSO4 in a saturated solution.',
          maths: 'mass dissolved at 20 °C = 22 g',
        },
        {
          explanation:
            'Step 3: the extra solute has nowhere to go but out of solution, so it falls out as solid crystals.',
          maths: '40 g - 22 g = 18 g crystallise out',
        },
        {
          explanation:
            'Step 4: the answer is 18 g of copper sulfate crystals. The solution is still saturated at 20 °C with 22 g remaining dissolved. This is exactly the trick used to grow blue crystals in a school chemistry practical.',
        },
      ],
    },
    {
      id: 'csm-sc-worked-3',
      title: 'Mass conservation when salt dissolves',
      steps: [
        {
          explanation:
            'Question: a pupil stirs 10 g of table salt into 100 g of water until it all dissolves. What is the total mass of the salt solution?',
        },
        {
          explanation:
            'Step 1: dissolving spreads the solute particles between the solvent particles. It does not destroy them, so their mass is still there.',
        },
        {
          explanation:
            'Step 2: add the two masses together.',
          maths: '10 g + 100 g = 110 g',
        },
        {
          explanation:
            'Step 3: the answer is 110 g of solution. The salt looks invisible because the particles are now too small to see, but the balance still reads 110 g.',
        },
      ],
    },
  ],
  questions: [
    // Core multiple-choice (3)
    {
      id: 'csm-sc-q1',
      type: 'multiple-choice',
      stem: 'What does the solubility of a solute tell you?',
      tier: 'core',
      options: [
        'The colour of the solute when dissolved in water',
        'How long it takes for the solute to dissolve in cold water',
        'The maximum mass of the solute that will dissolve in a fixed mass of solvent at a given temperature',
        'How sweet the resulting solution tastes',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-sc-q2',
      type: 'multiple-choice',
      stem: 'A pupil reads a school chemistry textbook solubility curve. Which units are the y-axis most likely to use at UK KS3?',
      tier: 'core',
      options: [
        'Grams of solute per 100 g of water',
        'Grams of solute per litre of air',
        'Litres of solute per kilogram of water',
        'Millimetres of solute per gram of water',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'csm-sc-mis-units',
    },
    {
      id: 'csm-sc-q3',
      type: 'multiple-choice',
      stem: 'A pupil stirs sugar into hot tea and into iced tea. The sugar dissolves much sooner in the hot tea. Which statement best explains this?',
      tier: 'core',
      options: [
        'The hot tea destroys the sugar, so it disappears sooner',
        'Cold water cannot dissolve sugar at all',
        'Stirring hot tea is easier than stirring iced tea',
        'Higher temperature speeds up dissolving because solvent particles have more energy and collide with the solute more often',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    // Confident multiple-choice (3)
    {
      id: 'csm-sc-q4',
      type: 'multiple-choice',
      stem: 'The solubility of sodium chloride is 36 g per 100 g of water at 20 °C and only 39 g per 100 g of water at 100 °C. Which conclusion is best supported by these numbers?',
      tier: 'confident',
      options: [
        'Sodium chloride solubility is almost flat with temperature; heating the water barely lets more dissolve',
        'Sodium chloride is much more soluble in hot water than in cold water',
        'Sodium chloride is insoluble in cold water',
        'Sodium chloride breaks down at high temperatures',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'csm-sc-mis-hotter-always',
    },
    {
      id: 'csm-sc-q5',
      type: 'multiple-choice',
      stem: 'A warm bottle of fizzy drink goes flat in only a few minutes once opened, but a cold one in the fridge stays fizzy for longer. Which idea about solubility best explains this?',
      tier: 'confident',
      options: [
        'Gases dissolve better at higher temperatures, so warm drinks hold more CO2',
        'Warm liquids cannot hold any dissolved substances at all',
        'Gas solubility decreases as temperature rises, so warm drinks release CO2 to the air sooner than cold ones',
        'Cold liquids react with CO2 to make new gases',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-sc-mis-hotter-always',
    },
    {
      id: 'csm-sc-q6',
      type: 'multiple-choice',
      stem: 'A pupil adds another spoon of sugar to a cup of tea, stirs hard, and the sugar still sits at the bottom of the cup. Which statement best fits this observation?',
      tier: 'confident',
      options: [
        'Sugar is insoluble in tea',
        'Stirring harder will eventually dissolve any amount of sugar',
        'The sugar has reacted with the tea to form a new solid',
        'The tea is already saturated at this temperature; more sugar will only dissolve if the tea is hotter or there is more liquid',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-sc-mis-not-dissolved',
    },
    // Challenge multiple-choice (1)
    {
      id: 'csm-sc-q7',
      type: 'multiple-choice',
      stem: 'A greenhouse grower in Lincolnshire dissolves 80 g of potassium nitrate fertiliser in 100 g of warm water at 60 °C. They leave the watering can outside overnight; by morning it has cooled to 20 °C. Solubility of KNO3 is 32 g per 100 g of water at 20 °C. What will the grower find?',
      tier: 'challenge',
      options: [
        'Some KNO3 crystals will form at the bottom of the can; only 32 g per 100 g of water can stay dissolved at 20 °C, so the extra 48 g comes out as solid',
        'The solution will still be clear; nothing changes overnight',
        'All the KNO3 will boil off into the air overnight',
        'The water will freeze first and trap all the KNO3 inside the ice',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
    // Numeric entry (6)
    {
      id: 'csm-sc-q8',
      type: 'numeric-entry',
      stem: 'At 20 °C, 32 g of potassium nitrate dissolves in 100 g of water. How many grams dissolve in 50 g of water at the same temperature?',
      tier: 'core',
      correctAnswer: 16,
      unit: 'g',
      xpValue: 10,
      hint: 'Half the solvent holds half the solute, because the solubility per 100 g of water is fixed at this temperature.',
    },
    {
      id: 'csm-sc-q9',
      type: 'numeric-entry',
      stem: 'A pupil dissolves 36 g of salt in 100 g of water to make a saturated solution at 20 °C. What is the total mass of the salt solution in grams?',
      tier: 'core',
      correctAnswer: 136,
      unit: 'g',
      xpValue: 10,
      misconceptionId: 'csm-sc-mis-disappears',
    },
    {
      id: 'csm-sc-q10',
      type: 'numeric-entry',
      stem: 'The solubility of copper sulfate at 60 °C is 40 g per 100 g of water. At 20 °C it is 22 g per 100 g of water. How many grams of crystals form when 100 g of saturated CuSO4 solution at 60 °C cools to 20 °C?',
      tier: 'confident',
      correctAnswer: 18,
      unit: 'g',
      xpValue: 15,
      hint: 'Subtract the amount that stays dissolved at the cold temperature from the amount dissolved at the hot temperature.',
    },
    {
      id: 'csm-sc-q11',
      type: 'numeric-entry',
      stem: 'Sugar solubility rises from 200 g per 100 g of water at 20 °C to 487 g per 100 g of water at 100 °C. By how many grams per 100 g of water has the solubility increased?',
      tier: 'core',
      correctAnswer: 287,
      unit: 'g',
      xpValue: 15,
    },
    {
      id: 'csm-sc-q12',
      type: 'numeric-entry',
      stem: 'A grower needs to dissolve KNO3 fertiliser in 250 g of warm water at 60 °C, where the solubility is 110 g per 100 g of water. What is the maximum mass, in grams, of KNO3 that will dissolve?',
      tier: 'challenge',
      correctAnswer: 275,
      unit: 'g',
      xpValue: 25,
      hint: 'Solubility is per 100 g of water. Scale it up: 250 g of water is 2.5 times as much, so multiply 110 g by 2.5.',
    },
    {
      id: 'csm-sc-q13',
      type: 'numeric-entry',
      stem: 'A pupil has 100 g of saturated copper sulfate solution at 60 °C with 40 g of dissolved CuSO4. They cool it to 20 °C and 18 g of crystals form. What mass of CuSO4 remains dissolved in the cold solution, in grams?',
      tier: 'confident',
      correctAnswer: 22,
      unit: 'g',
      xpValue: 15,
    },
    // Drag order (1)
    {
      id: 'csm-sc-q14',
      type: 'drag-order',
      stem: 'Place these steps in the correct order for growing copper sulfate crystals from a saturated solution.',
      tier: 'core',
      items: [
        'Cool the beaker slowly so that crystals drop out of the solution as the solubility limit falls',
        'Heat 100 g of water in a beaker to about 60 °C',
        'Stir in copper sulfate powder until no more will dissolve, making a saturated blue solution',
        'Filter or pour off the cold liquid and dry the blue crystals on filter paper',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 15,
    },
    // Missing step (2)
    {
      id: 'csm-sc-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step in this calculation. The solubility of potassium nitrate at 20 °C is 32 g per 100 g of water. How much dissolves in 200 g of water?',
      tier: 'confident',
      steps: [
        'Note the solubility: 32 g of KNO3 per 100 g of water at 20 °C',
        'Compare the solvent mass: we have 200 g of water, which is twice as much as the 100 g in the solubility quote',
        null,
        'Answer: 64 g of KNO3 will dissolve in 200 g of water at 20 °C',
      ],
      missingStepIndex: 2,
      correctStep: 'Scale the solubility by the same factor: 32 g x 2 = 64 g of KNO3',
      xpValue: 15,
    },
    {
      id: 'csm-sc-q16',
      type: 'missing-step',
      stem: 'Fill in the missing step. A saturated CuSO4 solution at 60 °C holds 40 g per 100 g of water. It cools to 20 °C, where the solubility is 22 g per 100 g of water.',
      tier: 'challenge',
      steps: [
        'Read the hot solubility: 40 g of CuSO4 stay dissolved in 100 g of water at 60 °C',
        'Read the cold solubility: only 22 g of CuSO4 can stay dissolved in 100 g of water at 20 °C',
        'Subtract the smaller amount from the larger: 40 g - 22 g = 18 g',
        null,
      ],
      missingStepIndex: 3,
      correctStep:
        'The 18 g of solute that can no longer stay dissolved falls out of solution as blue copper sulfate crystals',
      xpValue: 15,
    },
    // Spot misconception (2)
    {
      id: 'csm-sc-q17',
      type: 'spot-misconception',
      stem: 'Aarav says: "Stirring a glass of water with sugar will eventually dissolve any amount of sugar, as long as you stir long enough."',
      tier: 'core',
      statements: [
        {
          text: 'Aarav is right. Stirring is what lets sugar dissolve, so with enough stirring the limit is removed.',
          isMisconception: true,
        },
        {
          text: 'Aarav is wrong. Stirring speeds up the rate of dissolving but does not raise the maximum amount that will dissolve. The solubility limit is set by the temperature alone.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-sc-mis-stir-raises',
    },
    {
      id: 'csm-sc-q18',
      type: 'spot-misconception',
      stem: 'Priya says: "When I stir 10 g of salt into 100 g of water until it dissolves, the salt has gone, so the solution must weigh only 100 g."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Once a solute dissolves it stops contributing to the mass of the solution.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. The salt particles are still there, just spread between the water particles. The balance reads 110 g, because mass is conserved when something dissolves.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-sc-mis-disappears',
    },
    // Free-text (1)
    {
      id: 'csm-sc-q19',
      type: 'free-text',
      stem: 'A warm 500 mL bottle of Coca-Cola goes flat within minutes once opened, but a chilled bottle stays fizzy for much longer. Use the idea of solubility to explain this in 2 to 3 sentences.',
      tier: 'challenge',
      sampleAnswer:
        'CO2 gas is dissolved in the drink. Gas solubility decreases as temperature rises, so a warm drink can hold less CO2 than a cold one. As soon as the warm bottle is opened, the extra CO2 above the cold-storage solubility limit escapes into the air, and the drink goes flat. The chilled bottle holds more CO2 in solution, so it stays fizzy for longer.',
      keywords: ['CO2', 'solubility', 'temperature', 'gas'],
      xpValue: 20,
      misconceptionId: 'csm-sc-mis-hotter-always',
    },
    // Challenge multiple-choice (2 more)
    {
      id: 'csm-sc-q20',
      type: 'multiple-choice',
      stem: 'A pupil writes: "If you double the mass of solute and double the mass of solvent, the solution gets twice as concentrated." Which is the best response?',
      tier: 'challenge',
      options: [
        'Correct, because both numbers have doubled',
        'Wrong, because concentration depends on the ratio of solute to solvent; doubling both keeps the ratio (and the concentration) the same',
        'Correct, because doubling solvent makes the solution stronger',
        'Wrong, because the solution will instantly crystallise',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'csm-sc-mis-more-stronger',
    },
    {
      id: 'csm-sc-q21',
      type: 'multiple-choice',
      stem: 'A pupil reads a solubility curve for KNO3 at 30 °C and writes "40 g per litre". Their teacher marks this wrong. Why?',
      tier: 'challenge',
      options: [
        'The number 40 is wrong; the curve always reads 32 g at 30 °C',
        'The units are wrong; the curve is in grams per 100 g of water, not grams per litre, so the pupil must check the y-axis label',
        'You cannot read a solubility curve at 30 °C; only 20 °C and 100 °C are allowed',
        'KNO3 cannot be dissolved at 30 °C',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'csm-sc-mis-units',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on solubility curves: candidates "wrote that higher temperature always means higher solubility", overlooking gases. Reinforced by CGP KS3 Chemistry Study Book p.58 chapter on solubility.
    {
      id: 'csm-sc-mis-hotter-always',
      description:
        'Solubility always increases when the solvent is hotter, no matter what the solute is.',
      triggerAnswer: 'hotter-always',
      correction:
        'In fact this is only true for most solids. Gas solubility falls as temperature rises, which is why warm fizzy drinks go flat faster than cold ones. Some solids, like calcium hydroxide, also become less soluble in hot water.',
      reExplanation:
        'For solids like KNO3 and sugar, heating the solvent gives particles more energy and helps the solute spread between solvent particles, raising the solubility. For gases the opposite is true: warm solvent particles move faster and bump dissolved gas particles back out into the air. That is why a warm bottle of Coca-Cola goes flat in minutes once opened, but a chilled bottle stays fizzy.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q05 on dissolving and saturation: candidates "described any solid that would not dissolve as insoluble". Reinforced by RSC Education article "Common student misconceptions about solubility" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-sc-mis-not-dissolved',
      description:
        'If you add a spoon of solute to a glass and it does not dissolve, the solute must be insoluble.',
      triggerAnswer: 'not-dissolved',
      correction:
        'In fact the glass may already be saturated for that volume of solvent at that temperature. Add more solvent, or heat the solvent, and the solute may dissolve.',
      reExplanation:
        'Each solvent has a maximum it can hold at a given temperature, called the solubility limit. Once you have hit that limit, extra solute just sinks. The solute is not insoluble; the solvent is full. Two things can lift the limit: more water (more space for solute particles) or hotter water (more energy to fit solute particles between solvent particles).',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q07 on solutions: candidates "wrote that stirring increases how much solute dissolves", confusing rate with solubility. Reinforced by CGP KS3 Chemistry Study Book p.58.
    {
      id: 'csm-sc-mis-stir-raises',
      description:
        'Stirring a solution raises the maximum amount of solute that will dissolve, given enough time.',
      triggerAnswer: 'stir-raises',
      correction:
        'In fact stirring only speeds up the rate of dissolving. The maximum amount, the solubility, is set by temperature, not by how hard you stir.',
      reExplanation:
        'Stirring sweeps fresh solvent past the solute, so solute particles meet solvent particles more often and dissolve sooner. Once the solvent is full, no amount of stirring will pack in more solute particles. The only ways to dissolve more are to heat the solvent (for most solids) or to add more solvent.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q06 on solubility curves: candidates "quoted solubility in grams per litre without checking the y-axis". Reinforced by RSC Education article "Reading solubility curves at 11 to 14" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-sc-mis-units',
      description:
        'Solubility is always quoted in grams of solute per litre of solvent.',
      triggerAnswer: 'units',
      correction:
        'In fact at UK KS3 solubility is usually quoted in grams of solute per 100 g of water. Always read the y-axis on a solubility curve before quoting a number.',
      reExplanation:
        'The choice of units changes the number you read off. 40 g per 100 g of water is not the same as 40 g per litre. UK KS3 textbook curves are almost always per 100 g of water; gas solubility tables are often per litre of solvent. Treat the y-axis label as part of the answer.',
    },
    // Source: David Paterson, "Teaching pupils about solutions", RSC Education CPD article (2021-03-15): a recurring Year 7 idea is that "dissolved solute has vanished", missing that mass is conserved. Reinforced by CGP KS3 Chemistry Study Book p.57.
    {
      id: 'csm-sc-mis-disappears',
      description:
        'When a solute dissolves it disappears and stops counting towards the mass of the solution.',
      triggerAnswer: 'disappears',
      correction:
        'In fact the solute particles are still there, spread between the solvent particles. Mass is conserved: 10 g of salt in 100 g of water gives 110 g of solution.',
      reExplanation:
        'Dissolving is a physical change. Solute particles split apart from the solid and slot between solvent particles, becoming too small to see, but every one of them is still in the solution. Place the closed beaker on a balance before and after stirring; the reading does not change. The solute has been hidden, not destroyed.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on solutions: a recurring Year 7 expectation is that "more solute means stronger solution" without controlling solvent volume. Reinforced by CGP KS3 Chemistry Study Book p.57.
    {
      id: 'csm-sc-mis-more-stronger',
      description:
        'More grams of solute always means a more concentrated solution.',
      triggerAnswer: 'more-stronger',
      correction:
        'In fact concentration is the ratio of solute to solvent. Doubling both keeps the concentration the same, not stronger.',
      reExplanation:
        'A glass with 5 g of sugar in 200 g of water tastes the same as a jug with 25 g of sugar in 1000 g of water; both have the same ratio of sugar to water. To make a solution stronger you raise the solute without raising the solvent in step. Quoting only the mass of solute, without the mass of solvent, does not tell you how concentrated the solution is.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q06: candidates "treated the y-axis reading as grams per litre", and Q07: candidates "missed that a curve at one temperature is meaningless without the y-axis units". Reinforced by RSC Education article "Common student misconceptions about solubility" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-sc-mis-curve-reading',
      description:
        'A solubility curve gives a single solubility number that applies to any solvent volume.',
      triggerAnswer: 'curve-reading',
      correction:
        'In fact the curve gives solubility per a stated mass of solvent (usually per 100 g of water). To find how much dissolves in a different volume, scale the curve reading by the ratio of solvent masses.',
      reExplanation:
        'A solubility curve at 30 °C might say 40 g per 100 g of water. That is 40 g of solute per 100 g of solvent. For 50 g of solvent you would get 20 g, for 250 g you would get 100 g. The curve is a recipe per 100 g of water, not a single total mass.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
