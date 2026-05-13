import type { SkillNode } from '@/types/content'

const eatwellPlateSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">NHS Eatwell Guide proportions</text>
  <circle cx="220" cy="200" r="140" fill="#FFFFFF" stroke="#1F2937" stroke-width="3" />
  <path d="M220,200 L220,60 A140,140 0 0,1 357,224 Z" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="295" y="135" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Starchy carbs</text>
  <text x="295" y="152" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">~38%</text>
  <path d="M220,200 L357,224 A140,140 0 0,1 220,340 Z" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="295" y="270" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Protein foods</text>
  <text x="295" y="287" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">~12%</text>
  <path d="M220,200 L220,340 A140,140 0 0,1 83,224 Z" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="150" y="295" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Dairy and</text>
  <text x="150" y="312" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">alternatives ~8%</text>
  <path d="M220,200 L83,224 A140,140 0 0,1 220,60 Z" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <text x="150" y="135" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Fruit and veg</text>
  <text x="150" y="152" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">~39%</text>
  <rect x="400" y="80" width="170" height="40" rx="6" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
  <text x="485" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Oils and spreads ~1%</text>
  <rect x="400" y="135" width="170" height="40" rx="6" fill="#E0E7FF" stroke="#3730A3" stroke-width="2" />
  <text x="485" y="160" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Water (6 to 8 glasses)</text>
  <rect x="400" y="190" width="170" height="50" rx="6" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="485" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">High fat, salt, sugar</text>
  <text x="485" y="228" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">eat less, less often</text>
  <rect x="60" y="350" width="480" height="44" rx="8" fill="#F3F4F6" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="370" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Proportions are over a day, not every plate.</text>
  <text x="300" y="386" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">Public Health England, NHS Eatwell Guide</text>
</svg>
`.trim()

const deficiencyTableSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Four deficiency diseases on the UK syllabus</text>
  <rect x="40" y="50" width="520" height="36" rx="4" fill="#1F2937" />
  <text x="100" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#FFFFFF">Nutrient short</text>
  <text x="250" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#FFFFFF">Disease name</text>
  <text x="400" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#FFFFFF">Main UK food sources</text>
  <text x="520" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#FFFFFF">Y7 RDA</text>
  <rect x="40" y="86" width="520" height="56" rx="0" fill="#FEF3C7" stroke="#92400E" stroke-width="1" />
  <text x="100" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Vitamin C</text>
  <text x="250" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Scurvy</text>
  <text x="400" y="105" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Peppers, blackcurrants,</text>
  <text x="400" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">broccoli, potatoes</text>
  <text x="520" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">40 mg</text>
  <text x="300" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Bleeding gums, slow wound healing, tiredness</text>
  <rect x="40" y="142" width="520" height="56" rx="0" fill="#FFFFFF" stroke="#92400E" stroke-width="1" />
  <text x="100" y="164" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Vitamin D</text>
  <text x="250" y="164" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Rickets</text>
  <text x="400" y="161" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Oily fish, eggs, fortified</text>
  <text x="400" y="176" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">cereals, sunlight on skin</text>
  <text x="520" y="164" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">10 µg</text>
  <text x="300" y="191" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Soft, bowed leg bones in growing children</text>
  <rect x="40" y="198" width="520" height="56" rx="0" fill="#FEF3C7" stroke="#92400E" stroke-width="1" />
  <text x="100" y="220" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Iron</text>
  <text x="250" y="217" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Iron-deficiency</text>
  <text x="250" y="232" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">anaemia</text>
  <text x="400" y="217" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Red meat, beans, lentils,</text>
  <text x="400" y="232" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">spinach, fortified cereal</text>
  <text x="520" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">11 or 14 mg</text>
  <text x="300" y="247" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Pale skin, tiredness, breathlessness</text>
  <rect x="40" y="254" width="520" height="56" rx="0" fill="#FFFFFF" stroke="#92400E" stroke-width="1" />
  <text x="100" y="276" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Protein</text>
  <text x="250" y="276" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Kwashiorkor</text>
  <text x="400" y="273" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Eggs, dairy, beans, pulses,</text>
  <text x="400" y="288" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">soya, fish, lean meat</text>
  <text x="520" y="276" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">~45 g</text>
  <text x="300" y="303" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Swollen belly, muscle wasting, weak immunity</text>
  <rect x="40" y="325" width="520" height="60" rx="8" fill="#E0E7FF" stroke="#3730A3" stroke-width="2" />
  <text x="300" y="346" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Iron RDA: boys 11 mg, girls 14 mg (girls lose iron in monthly periods).</text>
  <text x="300" y="364" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Vitamin D unit is the microgram (µg). The NHS recommends a 10 µg supplement in winter.</text>
  <text x="300" y="380" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Source: NHS, British Nutrition Foundation</text>
</svg>
`.trim()

const trafficLightLabelSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">UK front-of-pack traffic-light label</text>
  <rect x="60" y="60" width="480" height="120" rx="10" fill="#F3F4F6" stroke="#1F2937" stroke-width="2" />
  <text x="300" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Each 100 g of chicken-and-pasta ready meal</text>
  <text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">From a typical Tesco label</text>
  <rect x="80" y="110" width="100" height="60" rx="8" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <text x="130" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Fat</text>
  <text x="130" y="148" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">3.0 g</text>
  <text x="130" y="164" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">low (4%)</text>
  <rect x="190" y="110" width="100" height="60" rx="8" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
  <text x="240" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Saturates</text>
  <text x="240" y="148" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">1.4 g</text>
  <text x="240" y="164" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">med (7%)</text>
  <rect x="300" y="110" width="100" height="60" rx="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="350" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Sugars</text>
  <text x="350" y="148" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">5.0 g</text>
  <text x="350" y="164" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">high (6%)</text>
  <rect x="410" y="110" width="100" height="60" rx="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="460" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Salt</text>
  <text x="460" y="148" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">1.5 g</text>
  <text x="460" y="164" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">high (25%)</text>
  <rect x="60" y="200" width="480" height="80" rx="10" fill="#FFFFFF" stroke="#3730A3" stroke-width="2" />
  <text x="300" y="222" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Energy: 480 kJ / 115 kcal per 100 g</text>
  <text x="300" y="244" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">A 300 g portion supplies 1440 kJ / 345 kcal</text>
  <text x="300" y="266" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">% values are a portion as a share of an adult daily reference intake</text>
  <rect x="60" y="296" width="480" height="84" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="300" y="318" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Green = low, amber = medium, red = high.</text>
  <text x="300" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Aim for mostly green and amber across the day.</text>
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A red light is fine sometimes, just not every meal.</text>
  <text x="300" y="375" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Source: Department of Health front-of-pack labelling guidance</text>
</svg>
`.trim()

const schoolLunchSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A typical UK school lunch tray</text>
  <rect x="60" y="50" width="480" height="240" rx="14" fill="#F5F5F4" stroke="#1F2937" stroke-width="3" />
  <circle cx="180" cy="150" r="60" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="180" y="155" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Jacket potato</text>
  <text x="180" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">180 kcal</text>
  <ellipse cx="320" cy="150" rx="62" ry="44" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="320" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Baked beans</text>
  <text x="320" y="164" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">150 kcal</text>
  <rect x="410" y="110" width="100" height="80" rx="8" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <text x="460" y="145" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Side salad</text>
  <text x="460" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">40 kcal</text>
  <circle cx="180" cy="240" r="32" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="180" y="244" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Apple</text>
  <text x="180" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">50 kcal</text>
  <rect x="240" y="220" width="80" height="50" rx="6" fill="#BFDBFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="280" y="244" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Milk 200 ml</text>
  <text x="280" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">130 kcal</text>
  <rect x="360" y="220" width="140" height="50" rx="6" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
  <text x="430" y="244" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Yogurt pot</text>
  <text x="430" y="258" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">100 kcal</text>
  <rect x="60" y="300" width="480" height="84" rx="10" fill="#E0E7FF" stroke="#3730A3" stroke-width="2" />
  <text x="300" y="322" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Total lunch energy: 650 kcal</text>
  <text x="300" y="342" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Year 7 daily target: about 2000 kcal for girls, 2200 kcal for boys.</text>
  <text x="300" y="362" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">School Food Standards (Department for Education)</text>
  <text x="300" y="378" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Universal infant free school meals apply at Key Stage 1</text>
</svg>
`.trim()

export const nutrition: SkillNode = {
  id: 'biology-body-systems-nutrition',
  title: 'Balanced Diet and Nutrients',
  description:
    'Use the NHS Eatwell Guide to describe a balanced diet for a Year 7 pupil: the seven nutrient groups, why each is needed, the deficiency diseases that show up when one is short, and how to read a UK traffic-light label. Build the calculation habits you need to compare meals in kilocalories and weigh up grams of protein, sugar, salt, and key vitamins against daily reference intakes.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'confident',
  prerequisites: ['biology-body-systems-digestive'],
  curriculum: {
    ks3Objective:
      'The content of a healthy human diet: carbohydrates, lipids (fats and oils), proteins, vitamins, minerals, dietary fibre and water, and why each is needed; the consequences of imbalances in the diet, including obesity, starvation and deficiency diseases.',
    awardingBodies: {
      aqa: '4.2.1.1 Nutrition in humans; food groups, dietary requirements and deficiency diseases (GCSE Biology 8461).',
      edexcel:
        'CB2b Nutrition; balanced diet, food groups, deficiency (GCSE Biology 1BI0, Topic 2).',
      ocr: 'B2.1.5 Nutrition and a balanced diet (GCSE Biology A J247).',
    },
  },
  scenes: [
    {
      id: 'bbs-nu-eatwell-plate',
      title: 'The NHS Eatwell Guide',
      type: 'labelled-diagram',
      instructions:
        'Click each segment of the Eatwell Guide to see what the food group does and roughly how much of the daily plate it should make up.',
      data: {
        svg: eatwellPlateSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-nu-eat-fruitveg',
            x: 25,
            y: 35,
            label: 'Fruit and vegetables (about 39%)',
            description:
              'The biggest slice of the day. Public Health England aims for at least five 80 g portions. Supplies vitamins (especially C and folate), minerals, fibre, and water.',
          },
          {
            id: 'bbs-nu-eat-carbs',
            x: 49,
            y: 35,
            label: 'Starchy carbohydrates (about 38%)',
            description:
              'Potatoes, bread, rice, pasta, and cereals. Choose wholegrain where you can. Main source of energy for school work and PE lessons.',
          },
          {
            id: 'bbs-nu-eat-protein',
            x: 49,
            y: 65,
            label: 'Protein foods (about 12%)',
            description:
              'Beans, pulses, fish, eggs, meat, and other proteins. Used to build and repair muscle, skin, hair, and enzymes.',
          },
          {
            id: 'bbs-nu-eat-dairy',
            x: 25,
            y: 75,
            label: 'Dairy and alternatives (about 8%)',
            description:
              'Milk, yogurt, cheese, or fortified soya. Calcium for bones and teeth, plus protein and some vitamins.',
          },
          {
            id: 'bbs-nu-eat-oils',
            x: 81,
            y: 25,
            label: 'Oils and spreads (about 1%)',
            description:
              'Small amounts of unsaturated oils such as olive or rapeseed. Provide essential fatty acids and help the body absorb fat-soluble vitamins.',
          },
          {
            id: 'bbs-nu-eat-water',
            x: 81,
            y: 39,
            label: 'Water (6 to 8 glasses)',
            description:
              'Aim for six to eight 200 ml glasses a day. Lower-fat milk and unsweetened drinks also count toward fluid intake.',
          },
          {
            id: 'bbs-nu-eat-hfss',
            x: 81,
            y: 53,
            label: 'High fat, salt, sugar',
            description:
              'Cakes, biscuits, crisps, sugary drinks. Sit outside the main Eatwell circle: eat less often and in smaller amounts.',
          },
        ],
      },
    },
    {
      id: 'bbs-nu-deficiency-table',
      title: 'Four Deficiency Diseases on the UK Syllabus',
      type: 'labelled-diagram',
      instructions:
        'Click each row of the table to see what the nutrient does, what the disease looks like, and which UK foods cover it.',
      data: {
        svg: deficiencyTableSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-nu-def-vitc',
            x: 50,
            y: 28,
            label: 'Vitamin C and scurvy',
            description:
              'Vitamin C is needed to make collagen, the protein in skin and blood-vessel walls. Without it, gums bleed and wounds heal slowly. The Y7 RDA is 40 mg; a single red pepper, 100 g of broccoli, or one orange easily covers it.',
          },
          {
            id: 'bbs-nu-def-vitd',
            x: 50,
            y: 42,
            label: 'Vitamin D and rickets',
            description:
              'Vitamin D helps absorb calcium for bone growth. Rickets returned in 2000s UK cities after a long absence. The NHS recommends 10 µg a day from October to March; Healthy Start vitamins are free for under-fives in low-income families.',
          },
          {
            id: 'bbs-nu-def-iron',
            x: 50,
            y: 55,
            label: 'Iron and anaemia',
            description:
              'Iron is part of haemoglobin in red blood cells. The NHS RDA is 11 mg for Y7 boys and 14 mg for Y7 girls, who lose iron in monthly periods. Iron-deficiency anaemia is common in UK teenage girls.',
          },
          {
            id: 'bbs-nu-def-protein',
            x: 50,
            y: 70,
            label: 'Protein and kwashiorkor',
            description:
              'Protein supplies amino acids for growth and repair. Severe shortage causes kwashiorkor, mostly in famine settings. UK pupils get plenty from beans, eggs, dairy, soya, and lean meat. Year 7 needs roughly 45 g a day.',
          },
        ],
      },
    },
    {
      id: 'bbs-nu-school-lunch',
      title: 'Counting Kilocalories in a UK School Lunch',
      type: 'labelled-diagram',
      instructions:
        'Click each item on the lunch tray to see its energy in kilocalories and how it fits the School Food Standards.',
      data: {
        svg: schoolLunchSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-nu-lunch-jacket',
            x: 30,
            y: 38,
            label: 'Jacket potato (180 kcal)',
            description:
              'A starchy carbohydrate. Skin on adds dietary fibre. The biggest single energy item on the tray.',
          },
          {
            id: 'bbs-nu-lunch-beans',
            x: 53,
            y: 38,
            label: 'Baked beans (150 kcal)',
            description:
              'Counts as a protein and a fibre source. Half a tin gives around 7 g of protein and counts as one of your five a day.',
          },
          {
            id: 'bbs-nu-lunch-salad',
            x: 77,
            y: 38,
            label: 'Side salad (40 kcal)',
            description:
              'Tops up vitamin C, folate, fibre, and water at very low energy cost.',
          },
          {
            id: 'bbs-nu-lunch-apple',
            x: 30,
            y: 60,
            label: 'Apple (50 kcal)',
            description:
              'One of your five a day. Mostly water and fibre, with a little natural sugar.',
          },
          {
            id: 'bbs-nu-lunch-milk',
            x: 47,
            y: 62,
            label: 'Milk 200 ml (130 kcal)',
            description:
              'A glass of semi-skimmed milk supplies calcium, protein, and vitamin B12. Universal infant free school meals offer milk daily at KS1.',
          },
          {
            id: 'bbs-nu-lunch-yogurt',
            x: 72,
            y: 62,
            label: 'Yogurt pot (100 kcal)',
            description:
              'A dairy serving. Some flavoured yogurts carry a red sugar light; plain yogurt with fresh fruit is the lower-sugar option.',
          },
          {
            id: 'bbs-nu-lunch-total',
            x: 50,
            y: 87,
            label: 'Lunch total: 650 kcal',
            description:
              'Roughly a third of the 2000 to 2200 kcal a Year 7 pupil needs in a day, matching the School Food Standards target for a main meal.',
          },
        ],
      },
    },
    {
      id: 'bbs-nu-traffic-light',
      title: 'Reading a UK Traffic-Light Label',
      type: 'labelled-diagram',
      instructions:
        'Click each coloured square on this front-of-pack label to read what the colour and number mean for that nutrient.',
      data: {
        svg: trafficLightLabelSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'bbs-nu-tl-fat',
            x: 22,
            y: 35,
            label: 'Fat 3.0 g (green)',
            description:
              'Green means low: 3.0 g or less of fat per 100 g of food. This product is a low-fat choice on that nutrient.',
          },
          {
            id: 'bbs-nu-tl-saturates',
            x: 40,
            y: 35,
            label: 'Saturates 1.4 g (amber)',
            description:
              'Amber means medium. The number tells you how many grams per 100 g of food. Aim for mostly green and amber across the day.',
          },
          {
            id: 'bbs-nu-tl-sugars',
            x: 58,
            y: 35,
            label: 'Sugars 5.0 g (red)',
            description:
              'Red means high. More than 5 g sugar per 100 g triggers the red light on a savoury product. Fine sometimes, not at every meal.',
          },
          {
            id: 'bbs-nu-tl-salt',
            x: 77,
            y: 35,
            label: 'Salt 1.5 g (red)',
            description:
              'Salt above 1.5 g per 100 g is a red light. Too much salt over years raises blood pressure. The British Heart Foundation flags processed ready meals as a common red-salt source.',
          },
          {
            id: 'bbs-nu-tl-energy',
            x: 50,
            y: 60,
            label: 'Energy 480 kJ / 115 kcal',
            description:
              'Energy is shown in both kilojoules (kJ) and kilocalories (kcal) per 100 g. Multiply by the portion size in 100 g units to find the meal total.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bbs-nu-worked-1',
      title: 'Adding up the kilocalories in a UK school-canteen lunch',
      steps: [
        {
          explanation:
            'A Year 7 pupil at a state school in Leeds picks up a jacket potato (180 kcal), half a tin of baked beans (150 kcal), a side salad (40 kcal), an apple (50 kcal), a 200 ml glass of semi-skimmed milk (130 kcal), and a yogurt pot (100 kcal).',
        },
        {
          explanation:
            'Decide what the calculation needs: a single total energy in kilocalories. Add the items rather than averaging them.',
        },
        {
          explanation: 'Add the items in any order; keep the units the same.',
          maths: '180 + 150 + 40 + 50 + 130 + 100 = 650 kcal',
        },
        {
          explanation:
            'Sense check against the Year 7 daily target. About 2000 kcal for girls and 2200 kcal for boys. A 650 kcal lunch is roughly a third of the day, which matches the School Food Standards.',
        },
        {
          explanation:
            'Write the final answer with the unit. The lunch supplies 650 kilocalories of food energy.',
        },
      ],
    },
    {
      id: 'bbs-nu-worked-2',
      title: 'Working out vitamin C as a percentage of the Year 7 daily target',
      steps: [
        {
          explanation:
            'A Sainsbury\'s red pepper label says one whole pepper contains 128 mg of vitamin C. The NHS RDA for Year 7 is 40 mg per day. The pupil wants to know what one pepper contributes as a percentage of the RDA.',
        },
        {
          explanation:
            'Set up the percentage formula: (amount supplied divided by daily target) multiplied by 100.',
          maths: 'percentage = (supplied / RDA) x 100',
        },
        {
          explanation: 'Substitute the numbers and work out the division.',
          maths: '(128 / 40) x 100 = 3.2 x 100 = 320%',
        },
        {
          explanation:
            'Sense check: 128 is more than three times 40, so the answer should be over 300%. It is. One pepper covers more than three days of vitamin C in one go.',
        },
        {
          explanation:
            'Write the final answer. One Sainsbury\'s red pepper supplies about 320% of a Year 7 pupil\'s daily vitamin C target. The extra is excreted in urine because vitamin C is water-soluble.',
        },
      ],
    },
    {
      id: 'bbs-nu-worked-3',
      title: 'Estimating daily protein needs from body weight',
      steps: [
        {
          explanation:
            'British Nutrition Foundation guidance puts a growing Year 7 pupil at around 0.75 g of protein per kilogram of body weight per day. A pupil who weighs 40 kg wants to know their daily target.',
        },
        {
          explanation:
            'Set up the formula: multiply the per-kilogram figure by body weight.',
          maths: 'protein target = 0.75 g/kg x body weight',
        },
        {
          explanation: 'Substitute and multiply.',
          maths: '0.75 x 40 = 30 g',
        },
        {
          explanation:
            'Sense check against the reference table. UK NHS reference intake for a teenager is around 45 to 55 g; growth needs nudge a 40 kg Year 7 to around 30 to 45 g. Our value lies in that range, so it is plausible.',
        },
        {
          explanation:
            'Write the final answer. Roughly 30 g of protein a day. One egg gives about 7 g, half a tin of baked beans about 7 g, and a 200 ml glass of milk about 7 g, so the target is easy to reach without meat.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'bbs-nu-q1',
      type: 'multiple-choice',
      stem: 'Which group makes up the biggest share of the NHS Eatwell Guide plate?',
      tier: 'core',
      options: [
        'Fruit and vegetables',
        'Protein foods',
        'Oils and spreads',
        'Dairy and alternatives',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bbs-nu-mis-balanced-equal',
    },
    {
      id: 'bbs-nu-q2',
      type: 'multiple-choice',
      stem: 'What is the main job of dietary fibre in the diet?',
      tier: 'core',
      options: [
        'It supplies most of the energy for school activity.',
        'It keeps food moving through the digestive system and helps prevent constipation.',
        'It builds new muscle and skin tissue.',
        'It dissolves in the blood to carry oxygen.',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'bbs-nu-q3',
      type: 'multiple-choice',
      stem: 'A pupil at a school in Birmingham develops bleeding gums and slow-healing scrapes. Which nutrient is most likely missing from her diet?',
      tier: 'core',
      options: [
        'Iron',
        'Protein',
        'Vitamin C',
        'Calcium',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'bbs-nu-mis-vitc-only-oranges',
    },
    {
      id: 'bbs-nu-q4',
      type: 'numeric-entry',
      stem: 'A school-canteen lunch contains a jacket potato (180 kcal), baked beans (150 kcal), a side salad (40 kcal), an apple (50 kcal), a 200 ml glass of milk (130 kcal), and a yogurt pot (100 kcal). What is the total energy of the lunch, in kilocalories?',
      tier: 'core',
      correctAnswer: 650,
      unit: 'kcal',
      xpValue: 10,
      hint: 'Add all six items. Keep the unit the same.',
    },
    {
      id: 'bbs-nu-q5',
      type: 'numeric-entry',
      stem: 'The NHS Year 7 RDA for vitamin C is 40 mg per day. A Tesco apple supplies 5 mg of vitamin C. How many milligrams short is the apple, on its own, of the daily target?',
      tier: 'core',
      correctAnswer: 35,
      unit: 'mg',
      xpValue: 10,
      hint: 'Subtract the apple value from 40 mg.',
    },
    {
      id: 'bbs-nu-q6',
      type: 'multiple-choice',
      stem: 'Which row correctly pairs a nutrient with the disease its absence causes?',
      tier: 'core',
      options: [
        'Vitamin D with anaemia',
        'Iron with scurvy',
        'Protein with rickets',
        'Vitamin C with scurvy',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bbs-nu-mis-deficiency-only-poor-countries',
    },
    {
      id: 'bbs-nu-q7',
      type: 'numeric-entry',
      stem: 'A Sainsbury\'s red pepper supplies 128 mg of vitamin C. The Year 7 RDA is 40 mg a day. What percentage of the RDA does the pepper supply? Give your answer to the nearest whole percent.',
      tier: 'core',
      correctAnswer: 320,
      unit: '%',
      xpValue: 15,
      hint: 'Use (supplied / RDA) x 100.',
      misconceptionId: 'bbs-nu-mis-more-vitamins-better',
    },
    {
      id: 'bbs-nu-q8',
      type: 'multiple-choice',
      stem: 'A pupil writes that "a balanced diet means eating exactly the same amount of every food group every day." Which response is correct?',
      tier: 'confident',
      options: [
        'Correct. Every food group should be in equal amounts.',
        'Incorrect. The Eatwell Guide shows clear proportions: fruit and vegetables and starchy carbohydrates take the biggest shares, while oils take only a small slice.',
        'Correct, but only for adults; children eat equal amounts.',
        'Incorrect. Only protein and fat should be equal, the rest can vary.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bbs-nu-mis-balanced-equal',
    },
    {
      id: 'bbs-nu-q9',
      type: 'numeric-entry',
      stem: 'British Nutrition Foundation guidance suggests around 0.75 g of protein per kilogram of body weight per day for a growing Year 7 pupil. What is the daily protein target, in grams, for a pupil who weighs 48 kg?',
      tier: 'confident',
      correctAnswer: 36,
      unit: 'g',
      xpValue: 15,
      hint: 'Multiply 0.75 by the body weight in kilograms.',
      misconceptionId: 'bbs-nu-mis-protein-meat-only',
    },
    {
      id: 'bbs-nu-q10',
      type: 'spot-misconception',
      stem: 'A pupil writes that "all fats are bad and should be cut out of the diet completely."',
      tier: 'confident',
      statements: [
        {
          text: 'The claim is sound. Cutting out all fats is the healthiest choice.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. The Eatwell Guide keeps a small slice for unsaturated oils because the body needs them. It is saturated fats and trans fats that should be limited.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bbs-nu-mis-all-fats-bad',
    },
    {
      id: 'bbs-nu-q11',
      type: 'drag-order',
      stem: 'Place the Eatwell Guide groups in order from the biggest daily share to the smallest.',
      tier: 'confident',
      items: [
        'Protein foods',
        'Fruit and vegetables',
        'Oils and spreads',
        'Starchy carbohydrates',
        'Dairy and alternatives',
      ],
      correctOrder: [1, 3, 0, 4, 2],
      xpValue: 15,
    },
    {
      id: 'bbs-nu-q12',
      type: 'numeric-entry',
      stem: 'The NHS iron RDA is 11 mg for a Year 7 boy. A serving of fortified breakfast cereal supplies 4 mg, and a glass of orange juice helps the iron absorb but adds 0 mg of iron. How many more milligrams of iron does the pupil still need from the rest of the day?',
      tier: 'confident',
      correctAnswer: 7,
      unit: 'mg',
      xpValue: 15,
      hint: 'Subtract the cereal value from the daily RDA.',
    },
    {
      id: 'bbs-nu-q13',
      type: 'multiple-choice',
      stem: 'A Tesco ready meal label shows green for fat, amber for saturates, red for sugars, and red for salt per 100 g. What does the front-of-pack label suggest about this product?',
      tier: 'confident',
      options: [
        'It is a low-fat product but high in salt and sugars, so eat occasionally rather than every day.',
        'It is unsafe to eat and should be returned to the shop.',
        'All red lights cancel each other out, so the food is balanced.',
        'Green for fat means the product is healthy overall, so portion size does not matter.',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'bbs-nu-q14',
      type: 'free-text',
      stem: 'Explain in two or three sentences why the NHS recommends a 10 µg vitamin D supplement to most people in the UK from October to March.',
      tier: 'confident',
      sampleAnswer:
        'The skin makes vitamin D when sunlight hits it, but UK sunshine from October to March is too weak for most people to make enough. Without enough vitamin D, the body cannot absorb calcium properly, and growing bones can soften, causing rickets. A 10 µg daily supplement closes the seasonal gap.',
      keywords: ['vitamin D', 'sunlight', 'calcium', 'rickets', 'bones', 'supplement'],
      xpValue: 20,
      misconceptionId: 'bbs-nu-mis-deficiency-only-poor-countries',
    },
    {
      id: 'bbs-nu-q15',
      type: 'data-extraction',
      stem: 'A Waitrose chicken-and-pasta ready meal lists per 100 g: energy 480 kJ / 115 kcal; fat 3.0 g; saturates 1.4 g; sugars 5.0 g; salt 1.5 g. A 300 g portion is eaten. Which row gives the correct energy total for the portion in kilocalories?',
      tier: 'confident',
      dataSource:
        'A. 115 kcal. B. 230 kcal. C. 345 kcal. D. 1440 kcal.',
      correctAnswer: 'C',
      xpValue: 20,
      hint: '300 g is three 100 g units. Multiply the per-100 g kcal value by 3.',
    },
    {
      id: 'bbs-nu-q16',
      type: 'multiple-choice',
      stem: 'Rickets returned in some UK cities in the 2000s, especially among children with little sunlight exposure. Which combination of changes best explains this?',
      tier: 'challenge',
      options: [
        'More indoor screen time and full clothing in winter cut vitamin D production in the skin; not all diets made up the shortfall.',
        'Pupils ate too much fruit and vegetables, which crowded out dairy.',
        'Iron-fortified cereals stopped vitamin D absorption in the gut.',
        'Sugary drinks replaced milk, which would have supplied vitamin C.',
      ],
      correctIndex: 0,
      xpValue: 20,
      misconceptionId: 'bbs-nu-mis-deficiency-only-poor-countries',
    },
    {
      id: 'bbs-nu-q17',
      type: 'numeric-entry',
      stem: 'A 30 g portion of breakfast cereal contains 4.5 g of sugar. What percentage of the portion, by mass, is sugar?',
      tier: 'challenge',
      correctAnswer: 15,
      unit: '%',
      xpValue: 20,
      hint: 'Use (sugar / portion) x 100. 4.5 divided by 30, then times 100.',
    },
    {
      id: 'bbs-nu-q18',
      type: 'spot-misconception',
      stem: 'A pupil writes that "carbohydrates make you fat directly, so the safest thing is to cut all carbs out of school lunches."',
      tier: 'challenge',
      statements: [
        {
          text: 'The claim is sound. Carbohydrates are the main cause of weight gain.',
          isMisconception: true,
        },
        {
          text: 'The claim is not sound. Excess energy from any source can lead to weight gain. Starchy carbohydrates are the biggest slice of the Eatwell Guide because the body needs them for energy.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'bbs-nu-mis-carbs-cause-fat',
    },
    {
      id: 'bbs-nu-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step of this calculation. A Year 7 girl weighs 50 kg. The NHS iron RDA for Year 7 girls is 14 mg per day. She has already eaten foods supplying 9 mg of iron at school. How much more iron does she need before bed?',
      tier: 'challenge',
      steps: [
        'Write down the daily RDA for a Year 7 girl: 14 mg.',
        'Write down the iron already taken in: 9 mg.',
        null,
        'Final answer: 5 mg of iron still needed before bed; a small portion of red meat, beans, or fortified cereal would close the gap.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Subtract the amount already eaten from the RDA: 14 - 9 = 5 mg of iron still needed.',
      xpValue: 20,
    },
    {
      id: 'bbs-nu-q20',
      type: 'multiple-choice',
      stem: 'Iron-deficiency anaemia is more common in UK teenage girls than in teenage boys. Which best explains the difference?',
      tier: 'challenge',
      options: [
        'Girls absorb iron less efficiently from the gut at all ages.',
        'Girls eat less protein on average than boys.',
        'Girls lose iron in monthly periods from puberty onwards, so their RDA is higher (14 mg) than for boys (11 mg).',
        'Boys exercise more, which makes up for any iron shortage.',
      ],
      correctIndex: 2,
      xpValue: 20,
    },
    {
      id: 'bbs-nu-q21',
      type: 'data-extraction',
      stem: 'A class compares four lunches against the School Food Standards target of about 650 kcal for a main meal. Which lunch sits closest to the target without going over?',
      tier: 'challenge',
      dataSource:
        'A. Pasta bake 420 kcal + apple 50 kcal + milk 130 kcal = 600 kcal. B. Pizza slice 380 kcal + chips 250 kcal + cola 140 kcal = 770 kcal. C. Jacket potato 180 kcal + beans 150 kcal + yogurt 100 kcal = 430 kcal. D. Chicken curry 480 kcal + rice 200 kcal + water 0 kcal = 680 kcal.',
      correctAnswer: 'A',
      xpValue: 20,
      hint: 'Find the totals that are at or under 650 kcal, then pick the one closest.',
    },
  ],
  misconceptions: [
    // Source: British Heart Foundation "Fats explained" guidance and NHS Eatwell Guide notes, both of which keep unsaturated fats in the daily plate and only flag saturated and trans fats for restriction.
    {
      id: 'bbs-nu-mis-all-fats-bad',
      description: 'All fats are bad and should be cut out of the diet completely.',
      triggerAnswer: 'all-fats-bad',
      correction:
        'Actually, the body needs unsaturated fats from foods like oily fish, nuts, and rapeseed oil. Only saturated and trans fats should be limited.',
      reExplanation:
        'Fats are an energy store and the carrier for the fat-soluble vitamins A, D, E, and K. Unsaturated fats also support healthy cell membranes and the heart. The Eatwell Guide keeps a small oils-and-spreads slice for this reason. The British Heart Foundation flags saturated fats (such as butter, fatty cuts of meat) and trans fats as the ones to cut back, not all fats.',
    },
    // Source: Public Health England Eatwell Guide booklet and AQA GCSE Biology Foundation tier Report on the Examination 2021, which list "carbs are fattening" as a recurring pupil response.
    {
      id: 'bbs-nu-mis-carbs-cause-fat',
      description: 'Carbohydrates by themselves make you put on weight.',
      triggerAnswer: 'carbs-cause-fat',
      correction:
        'In fact, excess energy from any nutrient leads to weight gain. Starchy carbs are the biggest Eatwell Guide slice because they fuel daily activity.',
      reExplanation:
        'Weight gain happens when the energy taken in is bigger than the energy used. That excess can come from fat, sugar, alcohol, or protein, not only from carbohydrates. Wholegrain pasta, rice, potatoes, and bread give long-lasting energy plus fibre and B vitamins. Cutting them out tends to push people to higher-fat snack foods, not a healthier diet.',
    },
    // Source: NHS Eatwell Guide and British Nutrition Foundation "Healthy eating for teenagers", both of which describe proportions of the plate rather than equal amounts.
    {
      id: 'bbs-nu-mis-balanced-equal',
      description: 'A balanced diet means eating equal amounts of every food group.',
      triggerAnswer: 'balanced-equal',
      correction:
        'Actually, the Eatwell Guide shows clear proportions. Fruit, vegetables, and starchy carbs are the biggest slices; oils and spreads only a small one.',
      reExplanation:
        'Balanced does not mean equal. It means the right share of each group so the body gets enough energy, protein, vitamins, and minerals without too much fat, salt, or sugar. Roughly two-fifths of the plate as fruit and vegetables, two-fifths as starchy carbs, and a smaller share for protein, dairy, and oils.',
    },
    // Source: British Nutrition Foundation vitamin C factsheet and NHS Live Well guidance, both of which list peppers, blackcurrants, broccoli, and potatoes as major UK vitamin C sources.
    {
      id: 'bbs-nu-mis-vitc-only-oranges',
      description: 'Vitamin C only comes from oranges and other citrus fruit.',
      triggerAnswer: 'vitc-only-oranges',
      correction:
        'In fact, peppers, blackcurrants, broccoli, kiwi, strawberries, and even potatoes are major UK sources of vitamin C.',
      reExplanation:
        'Citrus is a good source, but a single red pepper contains more vitamin C than an orange. For UK diets, potatoes (eaten in large amounts) are the single biggest vitamin C source on average. Cooking destroys some vitamin C, so raw and lightly cooked vegetables matter, especially salads and steamed broccoli.',
    },
    // Source: NHS rickets factsheet and Public Health England vitamin D report 2016, both of which document a UK return of rickets in the 2000s and ongoing iron-deficiency anaemia in teenage girls.
    {
      id: 'bbs-nu-mis-deficiency-only-poor-countries',
      description: 'Deficiency diseases only happen in poorer countries far away.',
      triggerAnswer: 'deficiency-only-poor-countries',
      correction:
        'Actually, the UK saw rickets return in some cities in the 2000s, and iron-deficiency anaemia is common in UK teenage girls today.',
      reExplanation:
        'Rickets fell sharply with cod-liver oil and free school milk after 1945 but returned when more children spent the day indoors or wore full clothing in sunlight. Iron-deficiency anaemia is common in UK teen girls because monthly periods raise the iron RDA to 14 mg. Public Health England now recommends a 10 µg vitamin D supplement from October to March.',
    },
    // Source: British Nutrition Foundation protein factsheet and Vegetarian Society UK Year 7 resources, which list eggs, dairy, beans, pulses, soya, quinoa, and fish as protein sources alongside meat.
    {
      id: 'bbs-nu-mis-protein-meat-only',
      description: 'Protein only comes from meat.',
      triggerAnswer: 'protein-meat-only',
      correction:
        'In fact, eggs, dairy, beans, lentils, soya, quinoa, fish, and nuts all give plenty of protein. UK vegetarians easily reach the daily target.',
      reExplanation:
        'Protein is made of amino acids. The body can build a full set from a mix of plant and animal foods. A baked-bean jacket potato with a glass of milk and a yogurt covers around 20 g of protein with no meat. The Eatwell Guide lists beans and pulses first in the protein slice for this reason.',
    },
    // Source: NHS Live Well guidance and British Nutrition Foundation vitamin factsheets, which warn that fat-soluble vitamins (A, D, E, K) can build up and cause harm in excess; water-soluble ones (B, C) are excreted but high doses still strain the kidneys.
    {
      id: 'bbs-nu-mis-more-vitamins-better',
      description: 'Taking more vitamins than the RDA is always healthier.',
      triggerAnswer: 'more-vitamins-better',
      correction:
        'Actually, water-soluble vitamins are flushed out in urine, so extra is wasted. Fat-soluble vitamins (A, D, E, K) can build up and cause harm.',
      reExplanation:
        'Vitamin C above the daily target is excreted, so high-dose tablets mostly make expensive urine. Vitamin A from large doses of liver or supplements can cause headaches and bone problems. Vitamin D toxicity is rare but possible from heavy supplement use. Stick to the NHS RDA and eat a mix of fruit, vegetables, and fortified foods.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
