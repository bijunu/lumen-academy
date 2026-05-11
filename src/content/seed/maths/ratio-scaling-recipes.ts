import type { SkillNode } from '@/types/content'

export const ratioScalingRecipes: SkillNode = {
  id: 'maths-ratio-scaling-recipes',
  title: 'Scaling Recipes and the Unitary Method',
  description:
    'Scale a recipe up or down by multiplying every ingredient by the same factor. Use the unitary method: divide to find the quantity for one unit, then multiply to reach the target. Compare best buys by computing price per unit (per gram, per millilitre, per item). Apply to UK contexts: Yorkshire pudding for eight, smoothie recipes, supermarket pack sizes, and class-of-27 catering jobs.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'confident',
  prerequisites: ['maths-ratio-sharing'],
  curriculum: {
    ks3Objective:
      'Solve problems involving direct proportion, including using formal methods (the unitary method); use ratio notation to compare quantities and to scale.',
    awardingBodies: {
      aqa: 'R10 Solve problems involving direct proportion (GCSE Mathematics 8300)',
      edexcel: 'R7 Solve problems involving direct proportion, including using the unitary method (GCSE Mathematics 1MA1)',
      ocr: '2.04a Solve problems involving direct proportion and the unitary method (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rsr-scene-unitary-bar',
      title: 'The Unitary Method on a Single Bar',
      type: 'fraction-wall',
      instructions:
        'Click each part to see the scale factor. A recipe for 4 portions needs 200 g of flour, shown as a bar of 4 equal blocks each worth 50 g. To make 6 portions, copy the same per-block size into a 6-block bar: 6 x 50 g = 300 g. To make 10 portions, copy into a 10-block bar: 10 x 50 g = 500 g. Finding the per-block value first (the unitary step) makes any scale a single multiplication.',
      data: {
        wholeLabel: 'Recipe scaling using the unitary method',
        baseServings: 4,
        baseQuantity: 200,
        perPortion: 50,
        parts: [
          { id: 'rsr-u1', share: '4-portion', value: 50 },
          { id: 'rsr-u2', share: '4-portion', value: 50 },
          { id: 'rsr-u3', share: '4-portion', value: 50 },
          { id: 'rsr-u4', share: '4-portion', value: 50 },
        ],
        examples: [
          { servings: 4, flour: 200 },
          { servings: 6, flour: 300 },
          { servings: 10, flour: 500 },
          { servings: 1, flour: 50 },
        ],
        rule: 'Divide to find one portion, then multiply by the target.',
      },
    },
    {
      id: 'rsr-scene-best-buy',
      title: 'Best Buy by Price Per Unit',
      type: 'simulation',
      instructions:
        'See how two pack sizes compare on a price-per-gram basis. Pack A is 500 g for £3.00, so the price per 100 g is £0.60. Pack B is 750 g for £4.20, so the price per 100 g is £0.56. The bigger pack works out cheaper per gram, so Pack B is the better buy. Without the unit calculation it would not be obvious because both prices and both pack sizes differ.',
      data: {
        packA: { mass: 500, price: 3.00, pricePer100: 0.60 },
        packB: { mass: 750, price: 4.20, pricePer100: 0.56 },
        winner: 'Pack B',
        savingPer100: 0.04,
        rule: 'Best buy = lowest price per unit. Convert both to the same unit (per 100 g, per litre, per item).',
      },
    },
    {
      id: 'rsr-scene-recipe-table',
      title: 'Scaling a Recipe Across Three Sizes',
      type: 'simulation',
      instructions:
        'See how a Yorkshire pudding recipe for 8 scales up and down. Base: 8 portions, 200 g flour, 4 eggs, 280 ml milk. For 4 portions, halve every ingredient (multiplier = 0.5). For 12 portions, multiply every ingredient by 1.5. The same scale factor applies to every ingredient, never to one ingredient alone, and never as a single addition or subtraction.',
      data: {
        baseServings: 8,
        baseRecipe: { flour: 200, eggs: 4, milk: 280 },
        scaledExamples: [
          { servings: 4, multiplier: 0.5, flour: 100, eggs: 2, milk: 140 },
          { servings: 8, multiplier: 1, flour: 200, eggs: 4, milk: 280 },
          { servings: 12, multiplier: 1.5, flour: 300, eggs: 6, milk: 420 },
          { servings: 20, multiplier: 2.5, flour: 500, eggs: 10, milk: 700 },
        ],
        rule: 'multiplier = target servings / base servings. Apply the multiplier to every ingredient.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rsr-worked-1',
      title: 'Scale a recipe from 4 portions to 6 portions',
      steps: [
        {
          explanation:
            'Identify the multiplier as target servings divided by base servings.',
          maths: 'multiplier = 6 / 4 = 1.5',
        },
        {
          explanation:
            'Apply the multiplier to each ingredient. Base recipe: 200 g flour, 100 g butter, 50 g sugar.',
          maths: 'flour: 200 x 1.5 = 300 g',
        },
        {
          explanation:
            'Continue for the next ingredient.',
          maths: 'butter: 100 x 1.5 = 150 g',
        },
        {
          explanation:
            'Continue for the final ingredient.',
          maths: 'sugar: 50 x 1.5 = 75 g',
        },
        {
          explanation:
            'Check by adding multipliers: each ingredient is now 1.5 times its base.',
          maths: '300 g, 150 g, 75 g for 6 portions',
        },
        {
          explanation: 'So for 6 portions the cook needs 300 g flour, 150 g butter, and 75 g sugar.',
          maths: 'scaled recipe: 300 / 150 / 75 g',
        },
      ],
    },
    {
      id: 'rsr-worked-2',
      title: 'Best-buy comparison: 600 g for £3.60 vs 1 kg for £5.50 (missing step revealed)',
      steps: [
        {
          explanation:
            'Choose a common unit. Per 100 g is convenient for both pack sizes.',
          maths: 'unit: per 100 g',
        },
        {
          explanation:
            'Pack A: 600 g for £3.60. Divide both by 6 to find the per-100 g price.',
          maths: 'Pack A: 3.60 / 6 = £0.60 per 100 g',
        },
        {
          explanation:
            'Pack B: 1 kg = 1000 g for £5.50. Divide both by 10 to find the per-100 g price.',
          maths: 'Pack B: 5.50 / 10 = £0.55 per 100 g',
        },
        {
          explanation:
            'Compare the two per-100 g prices. Pack A is £0.60 and Pack B is £0.55.',
          maths: 'A vs B: 0.60 vs 0.55',
        },
        {
          explanation: 'Pack B is the better buy at £0.55 per 100 g, saving 5 pence per 100 g.',
          maths: 'best buy: Pack B',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple doubling
    {
      id: 'rsr-q1',
      type: 'multiple-choice',
      stem: 'A recipe for 4 portions uses 200 g of flour. How much flour is needed for 8 portions?',
      tier: 'core',
      options: ['100 g', '300 g', '400 g', '600 g'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'multiplier = 8 / 4 = 2. 200 x 2 = 400 g.',
    },
    // Core 2: halving
    {
      id: 'rsr-q2',
      type: 'multiple-choice',
      stem: 'A recipe for 6 portions uses 300 g of butter. How much butter is needed for 3 portions?',
      tier: 'core',
      options: ['150 g', '100 g', '297 g', '600 g'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'multiplier = 3 / 6 = 0.5. 300 x 0.5 = 150 g.',
    },
    // Core 3: unitary first step
    {
      id: 'rsr-q3',
      type: 'multiple-choice',
      stem: 'Four cakes need 200 g of sugar in total. How much sugar does one cake need?',
      tier: 'core',
      options: ['200 g', '100 g', '40 g', '50 g'],
      correctIndex: 3,
      xpValue: 10,
      hint: 'Divide the total by the number of cakes: 200 / 4 = 50 g per cake.',
    },
    // Core 4: per-unit scaling
    {
      id: 'rsr-q4',
      type: 'multiple-choice',
      stem: 'Five tins of paint cover 30 square metres. How much area does one tin cover?',
      tier: 'core',
      options: ['6 m squared', '5 m squared', '25 m squared', '35 m squared'],
      correctIndex: 0,
      xpValue: 10,
      hint: 'Divide the total area by the number of tins: 30 / 5 = 6 m squared per tin.',
    },
    // Core 5: spot-misconception on additive scaling
    {
      id: 'rsr-q5',
      type: 'spot-misconception',
      stem: 'Aisha scales a recipe from 4 portions to 6 portions by writing "add 2 to every ingredient". The original recipe is 200 g flour, 100 g butter, 50 g sugar. She writes the new recipe as 202 g flour, 102 g butter, 52 g sugar.',
      tier: 'core',
      statements: [
        {
          text: 'Aisha is right. To scale a recipe from 4 to 6, add 2 (the change in portions) to every ingredient.',
          isMisconception: true,
        },
        {
          text: 'In fact you multiply every ingredient by the same scale factor, which is 6 / 4 = 1.5. The new recipe is 300 g flour, 150 g butter, 75 g sugar. Adding 2 grams to a 200 g amount is a tiny change; scaling by 1.5 is the proportional change that keeps the recipe in balance.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rsr-mis-additive-scaling',
    },
    // Core 6: scaling up by 1.5
    {
      id: 'rsr-q6',
      type: 'multiple-choice',
      stem: 'A Yorkshire pudding recipe for 8 portions uses 200 g flour. How much flour is needed for 12 portions?',
      tier: 'core',
      options: ['205 g', '250 g', '300 g', '400 g'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'rsr-mis-additive-scaling',
      hint: 'multiplier = 12 / 8 = 1.5. 200 x 1.5 = 300 g.',
    },
    // Core 7: speed unitary
    {
      id: 'rsr-q7',
      type: 'numeric-entry',
      stem: 'A pupil walks 3 km in 30 minutes. At the same steady pace, how far does the pupil walk in 1 hour, in kilometres?',
      tier: 'core',
      correctAnswer: 6,
      unit: 'kilometres',
      xpValue: 10,
      hint: '30 minutes is half an hour. 1 hour = 2 x 30 minutes, so distance = 2 x 3 = 6 km.',
    },
    // Core 8: best-buy basic
    {
      id: 'rsr-q8',
      type: 'multiple-choice',
      stem: 'Pack A: 500 g for £3.00. Pack B: 250 g for £1.40. Which is the better buy per gram?',
      tier: 'core',
      options: ['Pack A', 'Pack B', 'Both are equal', 'Cannot tell from the prices'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rsr-mis-best-buy-by-inspection',
      hint: 'Pack A: 3.00 / 500 = £0.60 per 100 g. Pack B: 1.40 / 250 = £0.56 per 100 g. Pack B is cheaper per 100 g.',
    },
    // Confident 1: non-round multiplier
    {
      id: 'rsr-q9',
      type: 'numeric-entry',
      stem: 'A pancake recipe for 4 portions uses 120 g of flour. How much flour is needed for 7 portions, in grams? Round to the nearest 5 grams.',
      tier: 'confident',
      correctAnswer: 210,
      tolerance: 2,
      unit: 'grams',
      xpValue: 15,
      hint: 'multiplier = 7 / 4 = 1.75. 120 x 1.75 = 210 g.',
    },
    // Confident 2: best buy three-way
    {
      id: 'rsr-q10',
      type: 'multiple-choice',
      stem: 'Compare per-litre prices. Bottle X: 750 ml for £3.00. Bottle Y: 1 L for £3.80. Which bottle is the better value per litre?',
      tier: 'confident',
      options: ['Bottle X', 'Bottle Y', 'Equal value', 'Cannot tell without more information'],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rsr-mis-best-buy-by-inspection',
      hint: 'Bottle X: 3.00 / 0.75 L = £4.00 per litre. Bottle Y: 3.80 / 1 L = £3.80 per litre. Y is cheaper.',
    },
    // Confident 3: scale by ratio multiplier
    {
      id: 'rsr-q11',
      type: 'numeric-entry',
      stem: 'A smoothie recipe for 2 people uses 300 ml of orange juice and 150 g of strawberries. Scale up for 5 people. How many millilitres of orange juice are needed?',
      tier: 'confident',
      correctAnswer: 750,
      unit: 'millilitres',
      xpValue: 15,
      hint: 'multiplier = 5 / 2 = 2.5. 300 x 2.5 = 750 ml.',
    },
    // Confident 4: spot-misconception part-to-part vs part-to-whole
    {
      id: 'rsr-q12',
      type: 'spot-misconception',
      stem: 'A trail-mix recipe mixes nuts and raisins in the ratio 3:2. Liam says "this means the mix is 2/3 raisins, because the ratio 3:2 is the same as the fraction 2/3".',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. The ratio 3:2 represents the fraction 2/3.',
          isMisconception: true,
        },
        {
          text: 'In fact 3:2 is part-to-part (3 parts nuts to 2 parts raisins, total 5 parts). The mix is 2/5 raisins (not 2/3) and 3/5 nuts. Confusing part-to-part with part-to-whole gives the wrong fraction.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rsr-mis-part-to-part-vs-whole',
    },
    // Confident 5: missing-step best-buy
    {
      id: 'rsr-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Tom compares Pack A: 600 g for £3.60 with Pack B: 1 kg for £5.50.',
      tier: 'confident',
      steps: [
        'Choose a common unit: per 100 g.',
        'Pack A per 100 g: 3.60 / 6 = £0.60.',
        null,
        'Pack B is the better buy at £0.55 per 100 g compared with £0.60 per 100 g for Pack A.',
      ],
      missingStepIndex: 2,
      correctStep: 'Pack B per 100 g: 5.50 / 10 = £0.55 (because 1 kg = 1000 g = ten lots of 100 g).',
      xpValue: 20,
    },
    // Confident 6: petrol mileage scaling
    {
      id: 'rsr-q14',
      type: 'multiple-choice',
      stem: 'A car uses 4.5 litres of petrol for every 50 km driven. How much petrol does the car use for a 200 km journey?',
      tier: 'confident',
      options: ['9 litres', '12 litres', '36 litres', '18 litres'],
      correctIndex: 3,
      xpValue: 15,
      hint: 'multiplier = 200 / 50 = 4. 4.5 x 4 = 18 litres.',
    },
    // Confident 7: drag-order three best-buy options
    {
      id: 'rsr-q15',
      type: 'drag-order',
      stem: 'Drag these packs into order from worst value (most pence per 100 g) to best value (fewest pence per 100 g).',
      tier: 'confident',
      items: [
        '500 g for £3.50',
        '750 g for £4.80',
        '1 kg for £6.00',
        '250 g for £1.90',
      ],
      correctOrder: [3, 0, 1, 2],
      xpValue: 20,
      hint: 'Compute pence per 100 g: 500 g for 350p → 70p. 750 g for 480p → 64p. 1 kg for 600p → 60p. 250 g for 190p → 76p. Order worst to best: 76, 70, 64, 60.',
    },
    // Confident 8: catering scale
    {
      id: 'rsr-q16',
      type: 'numeric-entry',
      stem: 'A Lego order for a Sevenoaks school comes in boxes of 20 pupils each. The teacher needs to order enough for 65 pupils. How many full boxes does the teacher need?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'boxes',
      xpValue: 15,
      hint: '65 / 20 = 3.25 boxes. Round UP to a whole box since pupils cannot share a partial box: 4 boxes are needed (with 15 spare pupil-kits).',
    },
    // Challenge 1: Bond-style shortbread (the plan's stretch, simplified)
    {
      id: 'rsr-q17',
      type: 'numeric-entry',
      stem: 'A shortbread recipe makes 18 biscuits and uses 300 g flour, 200 g butter, and 100 g sugar. A teacher wants to bake enough for a class of 27 pupils, allowing 2 biscuits per pupil. The teacher can only make full batches. How much flour, in grams, does the teacher need to buy?',
      tier: 'challenge',
      correctAnswer: 900,
      unit: 'grams',
      xpValue: 25,
      hint: 'Biscuits needed: 27 x 2 = 54. Batches: 54 / 18 = 3. Flour per batch: 300 g. Total: 3 x 300 = 900 g.',
    },
    // Challenge 2: multi-step recipe with fractional servings
    {
      id: 'rsr-q18',
      type: 'multiple-choice',
      stem: 'A Tunbridge Wells cafe makes a brownie tray that serves 12 from 360 g of chocolate. The cafe receives an order from a Manchester office for 8 servings. How much chocolate is needed?',
      tier: 'challenge',
      options: ['180 g', '240 g', '270 g', '300 g'],
      correctIndex: 1,
      xpValue: 25,
      hint: 'multiplier = 8 / 12 = 2/3. 360 x 2/3 = 240 g. Or unitary: 360 / 12 = 30 g per serving, x 8 = 240 g.',
    },
    // Challenge 3: best-buy with mixed sizes and discount
    {
      id: 'rsr-q19',
      type: 'numeric-entry',
      stem: 'A Dover newsagent sells crisps two ways: a 6-pack for £2.10, or single packets at 40 p each. A customer needs 18 packets. How many pence is saved by buying three 6-packs instead of buying 18 single packets?',
      tier: 'challenge',
      correctAnswer: 90,
      unit: 'pence',
      xpValue: 25,
      hint: '6-pack: 3 packs of 6 = 18, cost 3 x 210p = 630p. Singles: 18 x 40 = 720p. Saving = 720 - 630 = 90p.',
    },
    // Challenge 4: speed as proportion
    {
      id: 'rsr-q20',
      type: 'multiple-choice',
      stem: 'A Welsh tourist coach travels 45 km in 1 hour 30 minutes at a steady speed. At the same speed, how far does the coach travel in 4 hours?',
      tier: 'challenge',
      options: ['90 km', '105 km', '120 km', '150 km'],
      correctIndex: 2,
      xpValue: 25,
      hint: '1.5 hours = 45 km, so 1 hour = 30 km. 4 hours = 4 x 30 = 120 km.',
    },
    // Challenge 5: catering scale with rounding
    {
      id: 'rsr-q21',
      type: 'numeric-entry',
      stem: 'A school caterer scales a vegetable curry recipe. The base recipe for 8 portions uses 480 g rice. The caterer needs to feed a class of 35 pupils, each having 1 portion. How many grams of rice are needed? Round to the nearest 10 grams.',
      tier: 'challenge',
      correctAnswer: 2100,
      tolerance: 5,
      unit: 'grams',
      xpValue: 25,
      hint: 'multiplier = 35 / 8 = 4.375. 480 x 4.375 = 2100 g. Or unitary: 480 / 8 = 60 g per portion, x 35 = 2100 g.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a recipe-scaling question where pupils added the difference in servings to every ingredient instead of multiplying.
    {
      id: 'rsr-mis-additive-scaling',
      description:
        'I scale a recipe by adding (or subtracting) the change in servings to every ingredient, so going from 4 to 6 portions means adding 2 to each ingredient amount.',
      triggerAnswer: 'additive-scaling',
      correction:
        'Actually scaling is multiplicative, not additive. The scale factor is target servings divided by base servings, applied to every ingredient.',
      reExplanation:
        'For a 4-to-6 portion scale-up, the multiplier is 6 / 4 = 1.5. A 200 g flour amount becomes 200 x 1.5 = 300 g, not 202 g. Adding 2 grams of flour would barely change the recipe at all; the proportional rule is what keeps the ingredient balance intact. The same multiplier applies to every ingredient: 100 g butter becomes 150 g, 50 g sugar becomes 75 g.',
    },
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Ratio, Proportion and Rates of Change, "Best Buy" page, "Common mistake" callout warning that the bigger pack is not always the best value.
    {
      id: 'rsr-mis-best-buy-by-inspection',
      description:
        'I pick the best-buy pack by looking at the price or the size on its own, without computing the price per unit.',
      triggerAnswer: 'best-buy-by-inspection',
      correction:
        'In fact best buy compares price per unit (per 100 g, per litre, or per item). Without that calculation, eyes are unreliable.',
      reExplanation:
        'For 500 g at £3.00 vs 750 g at £4.20, the smaller pack is £0.60 per 100 g and the bigger pack is £0.56 per 100 g. The bigger pack is cheaper per unit but only by 4 p per 100 g. For 600 g at £3.60 vs 1 kg at £5.50, the bigger pack wins (£0.55 vs £0.60 per 100 g). A "best buy" question always reduces to a per-unit comparison.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2022, Paper 1F (Foundation, Non-calculator), commentary on a ratio question where pupils read a part-to-part ratio as a part-to-whole fraction (3:2 read as 2/3 instead of 2/5).
    {
      id: 'rsr-mis-part-to-part-vs-whole',
      description:
        'I read a part-to-part ratio like 3:2 as the fraction 2/3 (or 3/2), treating the right-hand number of the ratio as the numerator over a denominator equal to the left-hand number.',
      triggerAnswer: 'part-to-part-vs-whole',
      correction:
        'Actually a ratio 3:2 describes 3 parts of one quantity to 2 parts of another, with 5 parts total. The fractions of the whole are 3/5 and 2/5, not 3/2 and 2/3.',
      reExplanation:
        'For a 3:2 nuts-to-raisins ratio, total parts = 3 + 2 = 5. The fraction of the mix that is raisins is 2/5, not 2/3. The trail-mix recipe for 500 g would have 200 g raisins and 300 g nuts. Reading the ratio as 2/3 raisins would give 333 g raisins, ignoring the third part of the mix. Always add the parts of a ratio to find the denominator of the fraction-of-whole.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, November 2022, Paper 02 (Foundation, Calculator), commentary on a unitary-method question where pupils found the per-unit value but forgot to multiply by the target number.
    {
      id: 'rsr-mis-unitary-stop-too-early',
      description:
        'I find the value of one unit and report it as the answer, forgetting to multiply by the number of units needed.',
      triggerAnswer: 'unitary-stop-too-early',
      correction:
        'In fact the unitary method has two steps: find the value of one, THEN multiply by the target number.',
      reExplanation:
        'For "4 cakes need 200 g sugar, how much for 7 cakes", the per-cake amount is 200 / 4 = 50 g. The target is 7 cakes, so multiply: 50 x 7 = 350 g. Stopping at 50 g answers the wrong question (the per-cake amount, not the total). Always re-read the question to confirm whether the unit value or the target total is being asked.',
    },
    // Source: NCETM Secondary Magazine, Issue 121, article on direct proportion mistakes citing CSMS data on pupils inverting the scale factor (multiplying when they should divide, or vice versa).
    {
      id: 'rsr-mis-inverted-scale',
      description:
        'I work out the scale factor as base divided by target instead of target divided by base, so scaling from 4 to 6 portions gives a multiplier of 4/6 ≈ 0.67 instead of 1.5.',
      triggerAnswer: 'inverted-scale',
      correction:
        'Actually the multiplier is always TARGET divided by BASE: 6 / 4 = 1.5 for a scale-up.',
      reExplanation:
        'Scaling from 4 to 6 portions requires more food per ingredient, so the multiplier must be greater than 1. Target / base = 6 / 4 = 1.5. Base / target = 4 / 6 ≈ 0.67 would shrink the recipe, the opposite of what is needed. Quick sense-check: if the target is bigger than the base, the multiplier is bigger than 1; if smaller, less than 1.',
    },
    // Source: Hart (ed.), Children's Understanding of Mathematics 11-16 (CSMS), Chapter 6 "Ratio and Percentages" by Hart, on pupils mixing units mid-calculation when scaling recipes that include both grams and kilograms.
    {
      id: 'rsr-mis-unit-mixing',
      description:
        'I mix units mid-calculation, so I scale a 500 g recipe by a multiplier of 3 and report 1500 (without specifying whether grams or kilograms), or I divide grams by kilograms without converting.',
      triggerAnswer: 'unit-mixing',
      correction:
        'In fact convert everything to a single unit (grams or kilograms) before multiplying or dividing.',
      reExplanation:
        'For a recipe using 500 g of flour scaled by 3, the result is 1500 g = 1.5 kg. For a best-buy compare with 1 kg at £6 vs 500 g at £3.50, convert: 1 kg = 1000 g, so the per-100 g price is £0.60 for the first and £0.70 for the second. Mixing the units in the division (£6 / 1 = £6, £3.50 / 500 = £0.007) gives nonsense that misleads the comparison. Convert first; calculate second.',
    },
    // Authored, no external source: classroom-observed slip where Year 7 pupils scale only one ingredient (typically the headline one) and leave the others unchanged.
    {
      id: 'rsr-mis-scale-one-ingredient',
      description:
        'I scale only the headline ingredient (often the flour or the main one) and leave the other ingredients unchanged at their base recipe amounts.',
      triggerAnswer: 'scale-one-ingredient',
      correction:
        'Actually every ingredient must be scaled by the same multiplier. Leaving some unchanged breaks the recipe ratio and the dish will not work.',
      reExplanation:
        'For a 4-portion recipe of 200 g flour, 100 g butter, 50 g sugar scaled to 6 portions: every ingredient must be multiplied by 1.5. Result: 300 g flour, 150 g butter, 75 g sugar. Scaling only the flour to 300 g but leaving butter at 100 g and sugar at 50 g would make a dry, undersweet mess. Apply the multiplier to every ingredient without exception.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioScalingRecipesZoneNodes = [ratioScalingRecipes]
