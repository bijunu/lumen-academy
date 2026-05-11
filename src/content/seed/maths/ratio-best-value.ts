import type { SkillNode } from '@/types/content'

export const ratioBestValue: SkillNode = {
  id: 'maths-ratio-best-value',
  title: 'Best-Value Comparisons and Unitary Pricing',
  description:
    'Compare best-buy options by computing the price per unit using the unitary method. Convert prices to a common unit (per gram, per 100 g, per litre, per item) so two packs of different sizes can be compared head to head. Apply to UK supermarket settings: pack sizes of cereal, juice cartons, fuel by the litre, school tuck shop multipacks, and crisps by the box.',
  subject: 'maths',
  realm: 'numerica',
  zoneId: 'maths-ratio',
  zoneName: 'Ratio and Proportion',
  tier: 'confident',
  prerequisites: ['maths-ratio-scaling-recipes'],
  curriculum: {
    ks3Objective:
      'Solve problems involving direct proportion, including using formal methods (the unitary method); use compound units such as unit pricing.',
    awardingBodies: {
      aqa: 'R11 Use the unitary method to compare best value (GCSE Mathematics 8300)',
      edexcel: 'R11 Use the unitary method to solve best value problems (GCSE Mathematics 1MA1)',
      ocr: '2.04a Solve best-buy problems using unit pricing (GCSE Mathematics J560)',
    },
  },
  scenes: [
    {
      id: 'rbv-scene-supermarket-shelf',
      title: 'Supermarket Shelf Price Tags',
      type: 'labelled-diagram',
      instructions:
        'Click each price tag to reveal the price per unit. Four products sit on the shelf at the local supermarket. Each label shows the pack size and the price; the per-unit price is hidden until the marker is clicked. Spot which item is the better value by comparing the per-unit prices, not the headline prices.',
      data: {
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'rbv-shelf-cereal',
            x: 18,
            y: 28,
            label: 'Cereal: 500 g for £1.80',
            description: 'Price per 100 g = £1.80 / 5 = £0.36.',
          },
          {
            id: 'rbv-shelf-juice',
            x: 42,
            y: 28,
            label: 'Juice: 1 litre for £1.20',
            description: 'Price per litre = £1.20.',
          },
          {
            id: 'rbv-shelf-crisps',
            x: 66,
            y: 28,
            label: 'Crisps: 6-pack for £2.10',
            description: 'Price per packet = £2.10 / 6 = £0.35.',
          },
          {
            id: 'rbv-shelf-rice',
            x: 86,
            y: 28,
            label: 'Rice: 1 kg for £2.40',
            description: 'Price per 100 g = £2.40 / 10 = £0.24.',
          },
        ],
      },
    },
    {
      id: 'rbv-scene-pack-bar',
      title: 'Two Pack Sizes Broken Into Per-Unit Cost',
      type: 'fraction-wall',
      instructions:
        'Click each block to highlight the per-item cost of a crisp packet. A 4-pack at £2.40 has 4 equal blocks each worth £0.60. A 6-pack at £3.30 has 6 equal blocks each worth £0.55. The 6-pack costs less per packet, so the 6-pack is the better value even though its total price is higher.',
      data: {
        wholeLabel: 'Best-value comparison by price per packet',
        packA: { items: 4, totalPrice: 3.30, perItem: 0.55 },
        packB: { items: 6, totalPrice: 3.30, perItem: 0.55 },
        parts: [
          { id: 'rbv-blk-a1', share: '4-pack', value: 0.60 },
          { id: 'rbv-blk-a2', share: '4-pack', value: 0.60 },
          { id: 'rbv-blk-a3', share: '4-pack', value: 0.60 },
          { id: 'rbv-blk-a4', share: '4-pack', value: 0.60 },
          { id: 'rbv-blk-b1', share: '6-pack', value: 0.55 },
          { id: 'rbv-blk-b2', share: '6-pack', value: 0.55 },
          { id: 'rbv-blk-b3', share: '6-pack', value: 0.55 },
          { id: 'rbv-blk-b4', share: '6-pack', value: 0.55 },
          { id: 'rbv-blk-b5', share: '6-pack', value: 0.55 },
          { id: 'rbv-blk-b6', share: '6-pack', value: 0.55 },
        ],
        comparison: {
          fourPack: { totalPrice: 2.40, items: 4, perItem: 0.60 },
          sixPack: { totalPrice: 3.30, items: 6, perItem: 0.55 },
          winner: '6-pack',
          savingPerItem: 0.05,
        },
        rule: 'Divide the total price by the number of items to find the price per item.',
      },
    },
    {
      id: 'rbv-scene-method-diagram',
      title: 'The Unit-Pricing Method, Step by Step',
      type: 'diagram',
      instructions:
        'A two-stage method shown across two columns. In stage one, each option becomes a price per unit by dividing the total price by the count or by the mass. In stage two, the per-unit prices sit side by side and the lower one is the better value. The same method works for items, grams, kilograms and litres, as long as both options finish in the same unit.',
      data: {
        stages: [
          {
            name: 'Stage 1: find the price per unit',
            options: [
              { label: 'Option A', size: '250 g for £1.80', perUnit: '£1.80 / 2.5 = £0.72 per 100 g' },
              { label: 'Option B', size: '500 g for £3.20', perUnit: '£3.20 / 5 = £0.64 per 100 g' },
            ],
          },
          {
            name: 'Stage 2: compare and choose',
            outcome: 'Option B at £0.64 per 100 g is the better value, saving £0.08 per 100 g.',
          },
        ],
        rule: 'Best value = lowest price per unit. Convert both options to the same unit before comparing.',
      },
    },
  ],
  workedExamples: [
    {
      id: 'rbv-worked-1',
      title: 'Compare a 4-pack at £2.40 with a 6-pack at £3.30 of the same crisps',
      steps: [
        {
          explanation:
            'Pick a common unit. Both packs are sold by the packet, so price per packet is the natural unit.',
          maths: 'unit: per packet',
        },
        {
          explanation:
            '4-pack: divide the total price by the number of packets to find the price per packet.',
          maths: '£2.40 / 4 = £0.60 per packet',
        },
        {
          explanation:
            '6-pack: divide the total price by the number of packets in the same way.',
          maths: '£3.30 / 6 = £0.55 per packet',
        },
        {
          explanation:
            'Compare the two per-packet prices. The lower price per packet is the better value.',
          maths: '£0.55 < £0.60',
        },
        {
          explanation:
            'So the 6-pack is the better value at £0.55 per packet, saving 5 pence per packet compared with the 4-pack.',
          maths: 'best value: 6-pack',
        },
      ],
    },
    {
      id: 'rbv-worked-2',
      title: 'Compare 250 g of cereal at £1.80 with 500 g at £3.20 (missing step revealed)',
      steps: [
        {
          explanation:
            'Pick a common unit. Per 100 g works for both pack sizes because both masses are multiples of 100 g.',
          maths: 'unit: per 100 g',
        },
        {
          explanation:
            'Small pack: 250 g is two-and-a-half lots of 100 g. Divide the price by 2.5 to find the per-100 g price.',
          maths: 'small: £1.80 / 2.5 = £0.72 per 100 g',
        },
        {
          explanation:
            'Large pack: 500 g is five lots of 100 g. Divide the price by 5 to find the per-100 g price.',
          maths: 'large: £3.20 / 5 = £0.64 per 100 g',
        },
        {
          explanation:
            'Compare the two per-100 g prices.',
          maths: '£0.64 < £0.72',
        },
        {
          explanation:
            'Work out the saving per 100 g by subtracting the smaller per-unit price from the larger.',
          maths: '£0.72 - £0.64 = £0.08 per 100 g',
        },
        {
          explanation:
            'So the 500 g pack is the better value at £0.64 per 100 g, saving 8 pence on every 100 g compared with the 250 g pack.',
          maths: 'best value: 500 g pack',
        },
      ],
    },
  ],
  questions: [
    // Core 1: simple per-item price
    {
      id: 'rbv-q1',
      type: 'numeric-entry',
      stem: 'A pack of 4 yoghurts costs £2.00 at the local supermarket. What is the price per yoghurt, in pence?',
      tier: 'core',
      correctAnswer: 50,
      unit: 'pence',
      xpValue: 10,
      hint: '£2.00 / 4 = £0.50 = 50 pence per yoghurt.',
    },
    // Core 2: per-litre simple
    {
      id: 'rbv-q2',
      type: 'multiple-choice',
      stem: 'A 2-litre bottle of squash costs £3.00. What is the price per litre?',
      tier: 'core',
      options: ['£6.00', '£3.00', '£0.75', '£1.50'],
      correctIndex: 3,
      xpValue: 10,
      hint: '£3.00 / 2 = £1.50 per litre.',
    },
    // Core 3: best-buy basic per-item
    {
      id: 'rbv-q3',
      type: 'multiple-choice',
      stem: 'A 4-pack of crisps costs £2.40 and a 6-pack of the same crisps costs £3.30. Which pack is the better value per packet?',
      tier: 'core',
      options: [
        'The 4-pack',
        'The 6-pack',
        'Both are the same value per packet',
        'Cannot tell without weighing the crisps',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'rbv-mis-per-item-vs-per-mass',
      hint: 'Crisps sell as packets, so compare per packet (not per gram). 4-pack: 2.40 / 4 = £0.60 per packet. 6-pack: 3.30 / 6 = £0.55 per packet. The 6-pack is cheaper per packet.',
    },
    // Core 4: per-100 g basic
    {
      id: 'rbv-q4',
      type: 'numeric-entry',
      stem: 'A 500 g pack of pasta costs £1.20 at the local supermarket. What is the price per 100 g, in pence?',
      tier: 'core',
      correctAnswer: 24,
      unit: 'pence',
      xpValue: 10,
      hint: '500 g = five lots of 100 g. £1.20 / 5 = £0.24 = 24 pence per 100 g.',
    },
    // Core 5: spot-misconception (cheaper total wins)
    {
      id: 'rbv-q5',
      type: 'spot-misconception',
      stem: 'A 250 g pack of oats costs £1.10 and a 500 g pack of the same oats costs £1.80. Maya says the 250 g pack is the better deal because its total price is lower.',
      tier: 'core',
      statements: [
        {
          text: 'Maya is right. The cheaper total price is always the better deal.',
          isMisconception: true,
        },
        {
          text: 'In fact best value compares the price per unit. 250 g for £1.10 is £0.44 per 100 g, and 500 g for £1.80 is £0.36 per 100 g. The 500 g pack is cheaper per 100 g and so is the better value, even though its total price is higher.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rbv-mis-cheaper-total-wins',
    },
    // Core 6: drag-order best to worst by per-unit price
    {
      id: 'rbv-q6',
      type: 'drag-order',
      stem: 'A Sevenoaks tuck shop sells four pack sizes of the same chocolate bar. Drag the packs into order from best value (lowest pence per bar) to worst value (highest pence per bar).',
      tier: 'core',
      items: [
        '5-pack for £2.50',
        '10-pack for £4.50',
        '3-pack for £1.65',
        'Single bar for £0.60',
      ],
      correctOrder: [1, 0, 2, 3],
      xpValue: 20,
      hint: 'Compute pence per bar: 5-pack 250 / 5 = 50p. 10-pack 450 / 10 = 45p. 3-pack 165 / 3 = 55p. Single 60p. Order best to worst: 45, 50, 55, 60.',
    },
    // Core 7: simple per-unit numeric
    {
      id: 'rbv-q7',
      type: 'numeric-entry',
      stem: 'A 10-pack of pencils from a Manchester stationery shop costs £1.50. What is the price per pencil, in pence?',
      tier: 'core',
      correctAnswer: 15,
      unit: 'pence',
      xpValue: 10,
      hint: '£1.50 = 150 pence. 150 / 10 = 15 pence per pencil.',
    },
    // Confident 1: kg vs g unit conversion
    {
      id: 'rbv-q8',
      type: 'multiple-choice',
      stem: 'A 750 g bag of rice costs £2.10 and a 1.5 kg bag of the same rice costs £3.90. Which is the better value per 100 g?',
      tier: 'confident',
      options: [
        'The 750 g bag',
        'The 1.5 kg bag',
        'Both are the same value per 100 g',
        'Cannot tell without the brand name',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'rbv-mis-mixing-units',
      hint: '750 g: £2.10 / 7.5 = £0.28 per 100 g. 1.5 kg = 1500 g: £3.90 / 15 = £0.26 per 100 g. The 1.5 kg bag wins.',
    },
    // Confident 2: per-litre comparison
    {
      id: 'rbv-q9',
      type: 'multiple-choice',
      stem: 'A 500 ml carton of orange juice costs £1.20. What is the price per litre, in pence?',
      tier: 'confident',
      options: ['60 pence', '120 pence', '24 pence', '240 pence'],
      correctIndex: 3,
      xpValue: 15,
      hint: '500 ml is half a litre, so 1 litre costs 2 x £1.20 = £2.40 = 240 pence.',
    },
    // Confident 3: spot-misconception (inverted ratio mass/price)
    {
      id: 'rbv-q10',
      type: 'spot-misconception',
      stem: 'Aisha compares a 400 g pack of cereal at £1.60 with a 600 g pack at £2.10. She writes "Pack A: 400 / 1.60 = 250 grams per pound. Pack B: 600 / 2.10 = 286 grams per pound. Pack B has more grams per pound, so Pack B is the better value."',
      tier: 'confident',
      statements: [
        {
          text: 'Aisha is wrong about the method. Unit pricing means price PER mass, not mass per pound. The right calculation is £1.60 / 400 = £0.0040 per gram for Pack A, and £2.10 / 600 = £0.0035 per gram for Pack B. Pack B at £0.35 per 100 g is still better than Pack A at £0.40 per 100 g, but Aisha got the answer right by accident with the wrong method.',
          isMisconception: false,
        },
        {
          text: 'Aisha is right. To find best value, divide mass by price; the bigger number wins.',
          isMisconception: true,
        },
      ],
      xpValue: 15,
      misconceptionId: 'rbv-mis-inverted-per-unit',
    },
    // Confident 4: missing step (per-100 g comparison)
    {
      id: 'rbv-q11',
      type: 'missing-step',
      stem: 'Fill in the missing step. Tom compares 200 g of biscuits at £1.40 with 500 g at £3.00.',
      tier: 'confident',
      steps: [
        'Choose a common unit: per 100 g.',
        '200 g pack per 100 g: 1.40 / 2 = £0.70.',
        null,
        'Compare: £0.60 < £0.70, so the 500 g pack at £0.60 per 100 g is the better value.',
      ],
      missingStepIndex: 2,
      correctStep: '500 g pack per 100 g: 3.00 / 5 = £0.60.',
      xpValue: 20,
    },
    // Confident 5: slider-explore (find pack size that hits a target per-unit price)
    {
      id: 'rbv-q12',
      type: 'slider-explore',
      stem: 'A box of cereal costs £3.60. Slide to choose the pack size, in grams, that gives a price of £0.60 per 100 g. What pack size do you need?',
      tier: 'confident',
      min: 100,
      max: 1000,
      step: 50,
      correctRange: [600, 600],
      label: 'Pack size (grams)',
      xpValue: 15,
      hint: '£0.60 per 100 g means total / mass-in-100s = 0.60. 3.60 / 0.60 = 6 lots of 100 g = 600 g.',
    },
    // Confident 6: assuming bigger pack always wins
    {
      id: 'rbv-q13',
      type: 'multiple-choice',
      stem: 'A 250 g pack of cheese costs £1.50 and a 400 g pack of the same cheese costs £2.80. Which pack is the better value per 100 g?',
      tier: 'confident',
      options: [
        'The 250 g pack',
        'The 400 g pack',
        'Both are the same value per 100 g',
        'It depends on the use-by date',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'rbv-mis-bigger-always-better',
      hint: '250 g: £1.50 / 2.5 = £0.60 per 100 g. 400 g: £2.80 / 4 = £0.70 per 100 g. The 250 g pack is cheaper per 100 g this time.',
    },
    // Confident 7: per-item with multipack discount
    {
      id: 'rbv-q14',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells supermarket sells the same biscuit pack two ways. Singles are 75 pence each, or a 4-pack of singles costs £2.40. How many pence per pack does the 4-pack save compared with buying singles?',
      tier: 'confident',
      correctAnswer: 15,
      unit: 'pence',
      xpValue: 15,
      misconceptionId: 'rbv-mis-stop-at-per-unit',
      hint: '4-pack price per pack: 240 / 4 = 60 pence. Single price: 75 pence. Saving per pack: 75 - 60 = 15 pence. Stopping at 60 pence answers the wrong question.',
    },
    // Confident 8: rounding too aggressively
    {
      id: 'rbv-q15',
      type: 'multiple-choice',
      stem: 'Liam compares a 300 g pack at £1.00 with a 700 g pack at £2.10. He divides and rounds: "300 g pack: about £0.33 per 100 g, round to £0.30. 700 g pack: about £0.30 per 100 g. Equal value either way." Which response is correct?',
      tier: 'confident',
      options: [
        'Liam is right. Rounding both per-100 g prices to the nearest 10 pence gives a fair comparison.',
        'Liam is right. Since both prices round to £0.30 per 100 g, the two packs are the same value.',
        'Liam is wrong. Keep at least two decimal places of pence: £0.333... per 100 g for the 300 g pack and £0.30 per 100 g for the 700 g pack, so the 700 g pack is about 3 pence per 100 g cheaper.',
        'Liam is wrong. The 300 g pack at £0.33 per 100 g is the better value because its rounded price is higher.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'rbv-mis-over-rounded',
    },
    // Challenge 1: Bond-style multi-step (Aisha's bag claim)
    {
      id: 'rbv-q16',
      type: 'multiple-choice',
      stem: 'A 750 g bag of pasta costs £2.10 at one shop, and a 1.2 kg bag of the same pasta costs £3.30 at another. Aisha says the bigger bag is always better value. By computing the price per 100 g for each, decide whether she is right.',
      tier: 'challenge',
      options: [
        'Aisha is right. The 1.2 kg bag at £0.275 per 100 g beats the 750 g bag at £0.28 per 100 g.',
        'Aisha is wrong. The 750 g bag at £0.28 per 100 g beats the 1.2 kg bag at £0.275 per 100 g.',
        'Aisha is wrong in general. Here the 1.2 kg bag at £0.275 per 100 g wins by half a penny per 100 g, but a bigger pack does not always win; it depends on the per-unit prices.',
        'The two bags are the same value per 100 g.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'rbv-mis-bigger-always-better',
      hint: '750 g: £2.10 / 7.5 = £0.28 per 100 g. 1.2 kg = 1200 g: £3.30 / 12 = £0.275 per 100 g. The bigger bag wins here, but the claim "always" is the flaw.',
    },
    // Challenge 2: Bond-style multi-step word problem (fuel)
    {
      id: 'rbv-q17',
      type: 'numeric-entry',
      stem: 'A Dover petrol station charges £1.40 per litre on the forecourt. A driver buys 35 litres on the way to a Lake District trip. A second station 20 km further on charges £1.36 per litre. How many pence does the driver save per litre by waiting and filling up at the second station?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'pence',
      xpValue: 25,
      hint: 'Per-litre saving = 140 - 136 = 4 pence per litre. (The 35 litres and 20 km are framing detail.)',
    },
    // Challenge 3: per-use (toothpaste / shampoo style)
    {
      id: 'rbv-q18',
      type: 'numeric-entry',
      stem: 'A tube of toothpaste contains 75 ml and costs £2.25 at the local shop. A pupil uses about 1.5 ml of toothpaste per brush. To the nearest whole penny, how many pence does each brush cost?',
      tier: 'challenge',
      correctAnswer: 5,
      tolerance: 1,
      unit: 'pence',
      xpValue: 25,
      hint: 'Brushes per tube = 75 / 1.5 = 50. Cost per brush = 225p / 50 = 4.5p, rounding to 5p.',
    },
    // Challenge 4: per-item to total cost (multi-step)
    {
      id: 'rbv-q19',
      type: 'multiple-choice',
      stem: 'A Manchester school canteen orders apples. Pack A holds 12 apples for £2.40 and Pack B holds 30 apples for £5.40. The canteen needs 60 apples on Monday morning. Which choice is the cheapest way to buy exactly 60 apples?',
      tier: 'challenge',
      options: [
        'Five Pack A boxes at a total of £12.00',
        'Two Pack B boxes at a total of £10.80',
        'Three Pack A boxes and one Pack B box at a total of £12.60',
        'All three options cost the same in total',
      ],
      correctIndex: 1,
      xpValue: 25,
      hint: 'Pack A per apple: 240 / 12 = 20p. Pack B per apple: 540 / 30 = 18p. Pack B is cheaper per apple, so buy 60 apples as two Pack B boxes: 2 x £5.40 = £10.80.',
    },
    // Challenge 5: per-100 g with kg vs g trap
    {
      id: 'rbv-q20',
      type: 'numeric-entry',
      stem: 'A Tunbridge Wells supermarket sells flour in two pack sizes. A 1.5 kg bag costs £1.80, and a 500 g bag costs £0.80. How many pence cheaper per 100 g is the 1.5 kg bag than the 500 g bag?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'pence',
      xpValue: 25,
      misconceptionId: 'rbv-mis-mixing-units',
      hint: '1.5 kg = 1500 g = 15 lots of 100 g. £1.80 / 15 = 12p per 100 g. 500 g = 5 lots of 100 g. £0.80 / 5 = 16p per 100 g. 16 - 12 = 4p cheaper.',
    },
    // Challenge 6: pence-per-item Bond-style with leftover
    {
      id: 'rbv-q21',
      type: 'multiple-choice',
      stem: 'A Sevenoaks tuck shop buys crisps as a 24-pack box for £6.00 and resells them at 35 pence per packet. The shopkeeper sells 20 packets in a day and gives the rest to the canteen. How many pence does the tuck shop earn in profit on the day, if the unsold packets are not paid for by the canteen?',
      tier: 'challenge',
      options: ['100p', '400p', '700p', '120p'],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Cost per packet: 600 / 24 = 25p. Selling price: 35p. Profit per packet sold: 10p. 20 packets x 10p = 200p? No: revenue = 20 x 35 = 700p; cost of the whole 24-pack box = 600p; profit = 700 - 600 = 100p.',
    },
  ],
  misconceptions: [
    // Source: CGP KS3 Maths Complete Revision and Practice (MXHR41), Section 6 Ratio, Proportion and Rates of Change, "Best Buy" page, "Common mistake" callout warning that a cheaper total price does not mean a cheaper unit price.
    {
      id: 'rbv-mis-cheaper-total-wins',
      description:
        'I pick the better deal by comparing the total prices on the shelf, so the pack with the lower total price is the better value.',
      triggerAnswer: 'cheaper-total-wins',
      correction:
        'Actually best value compares the price per unit, not the total price. A smaller pack often has a lower total price but costs more per gram or per item.',
      reExplanation:
        'For a 250 g pack at £1.10 vs a 500 g pack at £1.80, the 250 g pack has the lower total price but costs £0.44 per 100 g, while the 500 g pack costs £0.36 per 100 g. The 500 g pack is the better value despite its higher total price. Always divide the price by the size before comparing.',
    },
    // Source: Pearson Edexcel GCSE Mathematics 1MA1 Examiners' Report, June 2023, Paper 2F (Foundation, Calculator), commentary on a best-buy question where pupils inverted the per-unit calculation and divided mass by price.
    {
      id: 'rbv-mis-inverted-per-unit',
      description:
        'I find unit value by dividing mass (or quantity) by price, so I write "grams per pound" instead of "pounds per gram".',
      triggerAnswer: 'inverted-per-unit',
      correction:
        'In fact price per unit is PRICE divided by SIZE, not size divided by price. The unit is pounds per gram or pence per 100 g, not grams per pound.',
      reExplanation:
        'For a 400 g pack at £1.60, the price per 100 g is £1.60 / 4 = £0.40, not 400 / 1.60 = 250 grams per pound. The question always asks how much money each unit of product costs, so money goes on top. A quick check: if the answer has the wrong unit, the calculation is upside down.',
    },
    // Source: AQA GCSE Mathematics 8300 Examiners' Report, November 2022, Paper 3F (Foundation, Calculator), commentary on a best-buy question where pupils rounded the per-unit price to the nearest 10 pence and reported the two packs as equal.
    {
      id: 'rbv-mis-over-rounded',
      description:
        'I round per-unit prices to the nearest 10 pence (or to the nearest whole pound) before comparing, so two slightly different unit prices look equal.',
      triggerAnswer: 'over-rounded',
      correction:
        'Actually keep at least two decimal places of pence before comparing. Rounding too soon hides the gap that the question is testing.',
      reExplanation:
        'For a 300 g pack at £1.00, the per-100 g price is £0.333... A 700 g pack at £2.10 gives £0.30 per 100 g exactly. Rounding both to £0.30 makes them look equal, but the 700 g pack is about 3 pence per 100 g cheaper. On a 700 g pack that is over 20 pence saved. Compare the unrounded numbers first; round only the final saving.',
    },
    // Source: CGP KS3 Maths Study Guide for the National Curriculum (MXHR45), Section 5 Ratio and Proportion, "Best Buys" page, "Watch out" box noting that bigger packs are usually but not always better value.
    {
      id: 'rbv-mis-bigger-always-better',
      description:
        'I assume the bigger pack is always the better value, so I pick the larger size without computing the price per unit.',
      triggerAnswer: 'bigger-always-better',
      correction:
        'Actually a bigger pack is often the better value but not always. Some smaller packs are on offer or sold at a discount per unit.',
      reExplanation:
        'For a 250 g pack at £1.50 vs a 400 g pack at £2.80, the 250 g pack is £0.60 per 100 g while the 400 g pack is £0.70 per 100 g. The smaller pack wins here. Always compute the price per unit; never decide by pack size alone. "Bigger usually wins" is a rule of thumb, not a guarantee.',
    },
    // Source: OCR GCSE (9-1) Mathematics J560 Examiners' Report, June 2023, Paper 02 (Foundation, Calculator), commentary on a best-buy question where pupils compared one pack in pence per gram with another in pounds per kilogram and treated the numbers as equal.
    {
      id: 'rbv-mis-mixing-units',
      description:
        'I compare two packs in different units, so I divide pence by grams for one pack and pounds by kilograms for the other, then compare the raw numbers.',
      triggerAnswer: 'mixing-units',
      correction:
        'In fact both options must use the same unit before comparing. Convert grams to grams (or kilograms to grams), and pence to pence (or pounds to pounds).',
      reExplanation:
        'For a 750 g bag at £2.10 vs a 1.5 kg bag at £3.90, convert: 1.5 kg = 1500 g. Then 750 g at £2.10 is £0.28 per 100 g, and 1500 g at £3.90 is £0.26 per 100 g. Comparing £2.10 per 750 g with £3.90 per 1.5 kg directly mixes the units and gives nonsense. Always convert first.',
    },
    // Source: NCETM Secondary Magazine, Issue 121, article on direct proportion mistakes, citing CSMS data on pupils confusing the per-item rate with the per-mass rate when both kinds of price labels appear in the same question.
    {
      id: 'rbv-mis-per-item-vs-per-mass',
      description:
        'I confuse the price per item with the price per gram when a question gives both kinds of label, so I use whichever number is easier to compute.',
      triggerAnswer: 'per-item-vs-per-mass',
      correction:
        'Actually price per item and price per gram are different unit prices and apply to different kinds of product. Choose the one the question is asking about.',
      reExplanation:
        'A 6-pack of crisps for £3.30 is best compared per packet (3.30 / 6 = £0.55 per packet) because crisps come as items. A 500 g pack of cereal for £1.80 is best compared per gram or per 100 g (£0.36 per 100 g) because cereal is sold by mass. If two products are sold the same way, use the same unit; never mix per-item with per-mass in one comparison.',
    },
    // Authored, no external source: classroom-observed Year 7 slip where pupils stop at the per-unit step and report the per-unit value as the answer to a multi-step word problem.
    {
      id: 'rbv-mis-stop-at-per-unit',
      description:
        'I work out the price per unit and then report that number as the final answer, even when the question asks for a total cost or a saving.',
      triggerAnswer: 'stop-at-per-unit',
      correction:
        'In fact the per-unit price is a stepping stone, not the final answer. Re-read the question to see whether it wants the per-unit value, the total cost, or the saving.',
      reExplanation:
        'For "60 apples at 18 pence per apple, what is the total cost?", the per-unit value is 18 pence but the answer is 60 x 18 = 1080 pence = £10.80. For "how much per packet does the 4-pack save vs the single?", the answer is the saving (75 - 60 = 15 pence), not the per-packet price (60 pence). Always finish the calculation the question is asking for.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const ratioBestValueZoneNodes = [ratioBestValue]
