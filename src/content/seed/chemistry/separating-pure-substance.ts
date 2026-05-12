import type { SkillNode } from '@/types/content'

export const pureSubstancePurityTesting: SkillNode = {
  id: 'chemistry-separating-pure-substance',
  title: 'Pure Substances and Purity Testing',
  description:
    'A pure substance contains just one type of particle and melts and boils at a single fixed temperature. A mixture melts and boils over a range. Use melting points and boiling points to decide whether a sample (distilled water, paracetamol, gold, honey) is pure, and to compare unknown samples against trusted reference values.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'The concept of a pure substance; pure substances have fixed melting and boiling points; impure substances have a range of melting and boiling points.',
    awardingBodies: {
      aqa: '4.10.1.1 Pure substances and mixtures; melting point and boiling point as indicators of purity (8462)',
      edexcel: 'Topic 1.42 Pure and impure substances; melting point as a test of purity (1CH0)',
      ocr: 'C2.1a Pure and impure substances; characterisation by melting and boiling point (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-ps-scene-1',
      title: 'Pure vs Impure: What the Heating Curve Looks Like',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare how a pure substance (distilled water) and an impure mixture (salty tap water) behave on the same heating graph.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><line x1="40" y1="200" x2="290" y2="200" stroke="#475569" stroke-width="1.2"/><line x1="40" y1="200" x2="40" y2="30" stroke="#475569" stroke-width="1.2"/><text x="165" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">time</text><text x="20" y="115" text-anchor="middle" font-size="8" fill="#1E3A8A" transform="rotate(-90 20 115)">temperature</text></g><g><polyline points="55,180 90,110 170,110 210,60 260,40" fill="none" stroke="#1E3A8A" stroke-width="2"/><line x1="40" y1="110" x2="55" y2="110" stroke="#1E3A8A" stroke-width="0.6" stroke-dasharray="2 1"/><text x="36" y="113" text-anchor="end" font-size="7" fill="#1E3A8A">0 degC</text><line x1="40" y1="60" x2="55" y2="60" stroke="#1E3A8A" stroke-width="0.6" stroke-dasharray="2 1"/><text x="36" y="63" text-anchor="end" font-size="7" fill="#1E3A8A">100 degC</text><text x="200" y="50" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">pure water: flat plateaux</text></g><g><polyline points="55,178 88,118 170,100 205,70 258,48" fill="none" stroke="#B91C1C" stroke-width="2" stroke-dasharray="3 2"/><text x="200" y="160" text-anchor="middle" font-size="8" font-weight="600" fill="#B91C1C">salty tap water: sloping over a range</text></g></svg>',
        hotspots: [
          {
            id: 'csm-ps-h-pure-plateau-melt',
            x: 30,
            y: 50,
            label: 'Pure water: flat melting plateau at 0 degC',
            description:
              'Pure (distilled) water sits at exactly 0 degC while every last ice crystal turns to liquid. All the heat going in is used to break the bonds holding the solid together, so the thermometer reading does not change.',
          },
          {
            id: 'csm-ps-h-pure-plateau-boil',
            x: 60,
            y: 25,
            label: 'Pure water: flat boiling plateau at 100 degC',
            description:
              'The same flat shape appears at 100 degC while the liquid turns to gas. Two flat plateaux at single, fixed temperatures are the tell-tale sign of a pure substance at standard pressure.',
          },
          {
            id: 'csm-ps-h-impure-range-melt',
            x: 30,
            y: 70,
            label: 'Salty tap water: melts over a range',
            description:
              'Tap water with dissolved salts and minerals starts to melt below 0 degC and keeps melting as the temperature climbs. The line slopes instead of flattening because different particles loosen at slightly different temperatures.',
          },
          {
            id: 'csm-ps-h-impure-range-boil',
            x: 70,
            y: 60,
            label: 'Salty tap water: boils above 100 degC over a range',
            description:
              'Salt in the water raises the boiling point and broadens it into a range (often 100 to 103 degC). The dotted red line keeps sloping during boiling, never resting on a single value. A range is the tell-tale sign of a mixture.',
          },
        ],
      },
    },
    {
      id: 'csm-ps-scene-2',
      title: 'Reference Melting Points: A UK Lab Bench Card',
      type: 'labelled-diagram',
      instructions:
        'Click each entry on this lab reference card to read how a Year 7 chemist could use its melting point as a purity test for that substance.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><rect x="20" y="15" width="280" height="190" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="1"/><text x="160" y="32" text-anchor="middle" font-size="10" font-weight="600" fill="#1E3A8A">PURE SUBSTANCE REFERENCE CARD</text><line x1="30" y1="40" x2="290" y2="40" stroke="#94A3B8" stroke-width="0.6"/><g font-size="9" fill="#1E3A8A"><text x="40" y="62">Pure water (ice)</text><text x="240" y="62" text-anchor="end">0 degC</text><text x="40" y="82">Paracetamol</text><text x="240" y="82" text-anchor="end">169 degC</text><text x="40" y="102">Sodium chloride (salt)</text><text x="240" y="102" text-anchor="end">801 degC</text><text x="40" y="122">24-carat gold</text><text x="240" y="122" text-anchor="end">1064 degC</text><text x="40" y="142">18-carat gold (75 percent gold alloy)</text><text x="240" y="142" text-anchor="end">895 to 935 degC</text><text x="40" y="162">Pure honey (UK)</text><text x="240" y="162" text-anchor="end">about -10 degC (sets)</text></g><text x="160" y="190" text-anchor="middle" font-size="7" fill="#475569">Sources: RSC Education data tables; UK Pharmacopoeia; British Hallmarking Council</text></svg>',
        hotspots: [
          {
            id: 'csm-ps-h-card-water',
            x: 30,
            y: 28,
            label: 'Pure water (ice): 0 degC',
            description:
              'Distilled water freezes (and melts) at a single fixed temperature of 0 degC. Kent tap water, which carries dissolved chalk and limescale, freezes a fraction of a degree lower and over a range.',
          },
          {
            id: 'csm-ps-h-card-paracetamol',
            x: 30,
            y: 38,
            label: 'Paracetamol: 169 degC',
            description:
              'A pure pharmaceutical paracetamol tablet melts sharply at 169 degC. A liquid cough syrup, which mixes paracetamol with sugar and water, will not melt at any single fixed value because it is already a mixture.',
          },
          {
            id: 'csm-ps-h-card-salt',
            x: 30,
            y: 48,
            label: 'Sodium chloride: 801 degC',
            description:
              'Pure salt melts at 801 degC. Sea salt from Maldon includes a few percent of magnesium and other minerals, so it actually starts softening below 801 degC and melts over a small range.',
          },
          {
            id: 'csm-ps-h-card-gold-24',
            x: 30,
            y: 58,
            label: '24-carat gold: 1064 degC',
            description:
              '24-carat gold is the only carat that is essentially pure gold. It melts at the single fixed value of 1064 degC. Goldsmiths use this number as a purity test when they receive scrap metal.',
          },
          {
            id: 'csm-ps-h-card-gold-18',
            x: 30,
            y: 68,
            label: '18-carat gold: 895 to 935 degC',
            description:
              '18-carat gold is 75 percent gold mixed with silver and copper. Because it is a mixture, it melts over a range of about 40 degC instead of at one fixed value. The hallmark stamped at an assay office records this carat.',
          },
          {
            id: 'csm-ps-h-card-honey',
            x: 30,
            y: 78,
            label: 'Pure honey: sets near -10 degC',
            description:
              'Pure UK honey sets (crystallises) at about -10 degC. Honey adulterated with sugar syrup behaves differently, often staying soft. Food labs use this as one test for fraudulent honey.',
          },
        ],
      },
    },
    {
      id: 'csm-ps-scene-3',
      title: 'Three Real UK Purity Tests',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to see how chemists in the UK use melting and boiling points to decide whether a sample is pure or adulterated.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><rect x="15" y="20" width="95" height="180" rx="4" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1"/><text x="62" y="38" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">PHARMACY</text><text x="62" y="55" text-anchor="middle" font-size="7" fill="#1E3A8A">paracetamol tablet</text><text x="62" y="85" text-anchor="middle" font-size="8" fill="#1E3A8A">melts at</text><text x="62" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#1E3A8A">169 degC</text><text x="62" y="118" text-anchor="middle" font-size="7" fill="#1E3A8A">sharply</text><text x="62" y="150" text-anchor="middle" font-size="7" fill="#475569">a range means</text><text x="62" y="161" text-anchor="middle" font-size="7" fill="#475569">contamination</text></g><g><rect x="115" y="20" width="95" height="180" rx="4" fill="#FDE68A" stroke="#92400E" stroke-width="1"/><text x="162" y="38" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">GOLDSMITH</text><text x="162" y="55" text-anchor="middle" font-size="7" fill="#92400E">scrap ring</text><text x="162" y="85" text-anchor="middle" font-size="8" fill="#92400E">24 carat:</text><text x="162" y="98" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">1064 degC</text><text x="162" y="115" text-anchor="middle" font-size="8" fill="#92400E">18 carat:</text><text x="162" y="128" text-anchor="middle" font-size="9" font-weight="600" fill="#92400E">895 to 935 degC</text><text x="162" y="160" text-anchor="middle" font-size="7" fill="#475569">range tells the alloy</text></g><g><rect x="215" y="20" width="95" height="180" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1"/><text x="262" y="38" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">FOOD LAB</text><text x="262" y="55" text-anchor="middle" font-size="7" fill="#14532D">jar of honey</text><text x="262" y="85" text-anchor="middle" font-size="8" fill="#14532D">pure: sets at</text><text x="262" y="98" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">-10 degC</text><text x="262" y="115" text-anchor="middle" font-size="8" fill="#14532D">syrup added:</text><text x="262" y="128" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">stays soft</text><text x="262" y="160" text-anchor="middle" font-size="7" fill="#475569">a different freezing</text><text x="262" y="171" text-anchor="middle" font-size="7" fill="#475569">curve flags fraud</text></g></svg>',
        hotspots: [
          {
            id: 'csm-ps-h-uses-pharmacy',
            x: 20,
            y: 50,
            label: 'Pharmacy: paracetamol purity',
            description:
              'The UK Pharmacopoeia lists pure paracetamol as melting sharply at 169 degC. A pharmacist who melts a batch and sees the powder soften over a range (say 162 to 167 degC) knows the batch is contaminated and rejects it.',
          },
          {
            id: 'csm-ps-h-uses-goldsmith',
            x: 51,
            y: 50,
            label: 'Goldsmith: hallmark check',
            description:
              'A goldsmith heats a scrap ring in a small crucible. If it melts sharply at 1064 degC the metal is 24-carat (pure) gold. If it melts over a range from about 895 to 935 degC, the metal is an 18-carat alloy worth less.',
          },
          {
            id: 'csm-ps-h-uses-foodlab',
            x: 82,
            y: 50,
            label: 'Food lab: honey adulteration',
            description:
              'UK trading standards labs cool a honey sample slowly. Pure honey sets near -10 degC with a clear curve; honey cut with cheap sugar syrup never sets the same way, so the freezing behaviour acts as a fingerprint.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-ps-worked-1',
      title: 'Using a melting point to test paracetamol purity',
      steps: [
        {
          explanation:
            'Question: A pharmacy technician in Bristol heats a sample of paracetamol powder and records the temperature as the sample begins and finishes melting. They find that the powder starts to soften at 162 degC and is fully liquid by 167 degC. Pure paracetamol melts sharply at 169 degC. Is the powder pure, and how do you know?',
        },
        {
          explanation:
            'Step 1: write down what a pure substance does. A pure substance melts at a single, fixed temperature. The reading should stay flat at one value while the whole sample melts.',
        },
        {
          explanation:
            'Step 2: compare the observed behaviour with the reference value. The sample melts over a range from 162 degC to 167 degC, taking 5 degC to finish. It never sits at one fixed value.',
          maths: 'range = 167 - 162 = 5 degC; reference = 169 degC (single value)',
        },
        {
          explanation:
            'Step 3: notice that even the upper end (167 degC) is below the pure reference (169 degC). Impurities depress the melting point, so a lower melting temperature is a second clue the sample is not pure.',
        },
        {
          explanation:
            'Step 4: conclude. The powder is impure. It melts over a 5 degC range instead of at a single value, and the range sits below 169 degC. The technician should reject the batch and trace the contamination.',
        },
      ],
    },
    {
      id: 'csm-ps-worked-2',
      title: 'Sorting gold rings by melting point',
      steps: [
        {
          explanation:
            'Question: A jeweller in Hatton Garden, London, receives three unmarked gold-coloured rings. They heat each ring in turn in a small crucible and record what they see. Ring 1 melts sharply at 1064 degC. Ring 2 starts melting at 895 degC and finishes at 935 degC. Ring 3 melts sharply at 1085 degC. Sort the rings as 24-carat gold, 18-carat gold (alloy), or "not gold at all".',
        },
        {
          explanation:
            'Step 1: write the reference values. Pure 24-carat gold melts sharply at 1064 degC. 18-carat gold is a mixture of gold, silver and copper that melts over the range 895 to 935 degC. Pure copper melts sharply at 1085 degC.',
        },
        {
          explanation:
            'Step 2: match ring 1. It melts sharply at 1064 degC, which is the reference value for 24-carat gold. Ring 1 is pure gold.',
          maths: 'ring 1: single fixed point 1064 degC -> matches 24-carat',
        },
        {
          explanation:
            'Step 3: match ring 2. It melts across 895 to 935 degC, a range of 40 degC. A range is the signature of a mixture, and the range matches 18-carat gold alloy. Ring 2 is 18-carat gold.',
          maths: 'ring 2: range 895 to 935 (40 degC wide) -> matches 18-carat',
        },
        {
          explanation:
            'Step 4: match ring 3. It melts sharply at 1085 degC, a single fixed value. That tells you it is a pure substance, but not pure gold; it is pure copper, gold-plated to look the part. Ring 3 is "not gold at all".',
        },
        {
          explanation:
            'Step 5: review. A sharp melting point alone is not enough to claim "this is gold". You need the sharp behaviour AND a match to the reference value (1064 degC) for that specific substance.',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'csm-ps-q1',
      type: 'multiple-choice',
      stem: 'Which of these is the best definition of a pure substance in chemistry?',
      tier: 'core',
      options: [
        'A substance that is clean and safe to drink or eat',
        'A substance that comes from a natural source rather than a factory',
        'A substance that contains only one type of particle, with nothing else mixed in',
        'A substance that has been filtered, even if other things are dissolved in it',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-ps-mis-pure-means-safe',
    },
    {
      id: 'csm-ps-q2',
      type: 'multiple-choice',
      stem: 'A pure substance is heated steadily. While it melts, what happens to the temperature reading on the thermometer?',
      tier: 'core',
      options: [
        'It rises smoothly the whole time',
        'It rises in small jumps, one per particle',
        'It falls slightly because melting takes energy',
        'It stays at a single, fixed value until all the solid has melted',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'csm-ps-q3',
      type: 'multiple-choice',
      stem: 'Tap water from a Kent home contains dissolved calcium and magnesium salts (limescale). At what temperature does this tap water freeze?',
      tier: 'core',
      options: [
        'Exactly 0 degC, the same as distilled water',
        'Exactly 100 degC, the same as boiling',
        'Over a small range a fraction of a degree below 0 degC, not at one fixed value',
        'It does not freeze at all',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-ps-mis-tap-same-as-distilled',
    },
    {
      id: 'csm-ps-q4',
      type: 'numeric-entry',
      stem: 'Pure paracetamol melts at a fixed temperature. What is this melting point, in degC? (Use the lab reference card from scene 2.)',
      tier: 'core',
      correctAnswer: 169,
      unit: 'degC',
      xpValue: 10,
      hint: 'Scene 2 reference card lists pure paracetamol at one value, taken from the UK Pharmacopoeia.',
    },
    {
      id: 'csm-ps-q5',
      type: 'numeric-entry',
      stem: 'A goldsmith heats an 18-carat gold ring and finds it begins to melt at 895 degC and finishes at 935 degC. How wide is this melting range, in degC?',
      tier: 'core',
      correctAnswer: 40,
      unit: 'degC',
      xpValue: 10,
      hint: 'Subtract the lower temperature from the upper. A non-zero range is a sign of a mixture.',
    },
    {
      id: 'csm-ps-q6',
      type: 'drag-order',
      stem: 'A pharmacy technician wants to test whether a powder is pure paracetamol. Place these steps in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Read the temperature when the very last solid has turned to liquid',
        'Heat the powder slowly and steadily in a small melting-point tube',
        'Look up the reference value for pure paracetamol (169 degC) and check whether the sample melted sharply at that value',
        'Read the temperature when the first drop of liquid appears',
      ],
      correctOrder: [1, 3, 0, 2],
      xpValue: 15,
    },
    {
      id: 'csm-ps-q7',
      type: 'spot-misconception',
      stem: 'Anya says: "My bottled mineral water from a Welsh spring is the purest water you can buy. It must freeze at exactly 0 degC."',
      tier: 'core',
      statements: [
        {
          text: 'Anya is right. "Pure" on the label means scientifically pure, so the water has nothing else in it and freezes sharply at 0 degC.',
          isMisconception: true,
        },
        {
          text: 'Anya is mixing up two meanings of "pure". On the label "pure" means clean and safe. Scientifically, mineral water contains dissolved salts and so freezes a fraction of a degree below 0 degC, over a range.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-ps-mis-pure-means-safe',
    },
    // CONFIDENT (7)
    {
      id: 'csm-ps-q8',
      type: 'multiple-choice',
      stem: 'A pupil tests two unknown white powders. Powder A melts sharply at 169 degC. Powder B starts melting at 165 degC and finishes at 171 degC. Pure paracetamol melts at 169 degC. What is the best conclusion?',
      tier: 'confident',
      options: [
        'Both are pure paracetamol because both melted near 169 degC',
        'Powder B is the pure one because its range straddles 169 degC',
        'Neither is paracetamol because true paracetamol does not melt sharply',
        'Powder A is pure paracetamol; Powder B is impure and may or may not contain paracetamol',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-ps-mis-same-mp-same-substance',
    },
    {
      id: 'csm-ps-q9',
      type: 'multiple-choice',
      stem: 'A chef adds salt to pasta water before bringing it to the boil. Which statement is most accurate about the boiling point of the salted water?',
      tier: 'confident',
      options: [
        'Salt has no effect on the boiling point; the water still boils at exactly 100 degC',
        'Salt lowers the boiling point so the water boils below 100 degC',
        'Salt raises the boiling point so the water boils slightly above 100 degC, over a range',
        'Salt makes the water stop boiling altogether until it dissolves',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-ps-mis-boiling-unaffected',
    },
    {
      id: 'csm-ps-q10',
      type: 'numeric-entry',
      stem: 'A jeweller heats a ring and reads: starts melting at 920 degC, fully liquid by 950 degC. The width of this melting range, in degC, is:',
      tier: 'confident',
      correctAnswer: 30,
      unit: 'degC',
      xpValue: 15,
    },
    {
      id: 'csm-ps-q11',
      type: 'numeric-entry',
      stem: 'A food lab tests two honey samples. Sample 1 sets sharply at -10 degC. Sample 2 sets over a range from -4 degC to -8 degC. What is the width of Sample 2 freezing range, in degC?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'degC',
      xpValue: 15,
      hint: 'Take the difference between the upper and lower ends of the range. Ignore the minus signs and just find how wide the range is.',
    },
    {
      id: 'csm-ps-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of a UK trading standards honey test.',
      tier: 'confident',
      steps: [
        'The inspector takes a sealed jar of honey from a market stall claiming to sell pure Devon honey',
        'They cool a small sample slowly in a temperature-controlled bath and record the temperature at which it sets',
        null,
        'They look up the reference value: pure UK honey sets sharply at about -10 degC',
        'They compare the observation against the reference: a sample that sets over a range, or far from -10 degC, is flagged as adulterated and sent for further testing',
      ],
      missingStepIndex: 2,
      correctStep:
        'They check whether the sample sets at a single fixed temperature (a pure substance) or over a range of temperatures (a mixture)',
      xpValue: 20,
    },
    {
      id: 'csm-ps-q13',
      type: 'spot-misconception',
      stem: 'Liam has mixed salt thoroughly into sugar in a beaker. He says: "Because I have mixed them together really well, this mixture will now melt at one fixed temperature, just like a pure substance."',
      tier: 'confident',
      statements: [
        {
          text: 'Liam is right. Once a mixture is well mixed, it counts as pure and melts at a single fixed value.',
          isMisconception: true,
        },
        {
          text: 'Liam is wrong. Mixing more carefully does not change the fact that there are two different substances in the beaker. The mixture will melt over a range, no matter how well stirred.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-ps-mis-mixed-means-pure',
    },
    {
      id: 'csm-ps-q14',
      type: 'multiple-choice',
      stem: 'A pupil claims: "My salt crystals look perfect and shiny, so they must be 100 percent pure sodium chloride." What is the best response?',
      tier: 'confident',
      options: [
        'Agreed. If crystals look perfect, no further test is needed',
        'Salt cannot form crystals if it is pure, so the claim is wrong from the start',
        'Crystals are always pure, so a melting point would tell you nothing extra',
        'Looks alone do not prove purity. Crystals can trap tiny amounts of the mother liquor between their faces, so a melting point test is still the proper check',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-ps-mis-crystals-always-pure',
    },
    // CHALLENGE (6)
    {
      id: 'csm-ps-q15',
      type: 'multiple-choice',
      stem: 'A forensic chemist receives two unknown white powders. Powder X melts sharply at 169 degC. Powder Y also melts sharply at 169 degC. Both are pure. Can the chemist conclude that X and Y are definitely the same substance?',
      tier: 'challenge',
      options: [
        'Yes. Both are pure and melt at the same temperature, so they must be identical',
        'Yes, because all white powders behave the same on heating',
        'No, because a pure substance never melts at one fixed value',
        'No. Two different pure substances can happen to share a melting point; more tests are needed (boiling point, density, chromatography) to confirm',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'csm-ps-mis-same-mp-same-substance',
    },
    {
      id: 'csm-ps-q16',
      type: 'numeric-entry',
      stem: 'Pure 24-carat gold melts at 1064 degC. Pure copper melts at 1085 degC. An 18-carat gold alloy contains both metals (with a little silver) and melts over a range from 895 degC to 935 degC. By how many degC is the upper end of the 18-carat range below the melting point of pure 24-carat gold?',
      tier: 'challenge',
      correctAnswer: 129,
      unit: 'degC',
      xpValue: 25,
      hint: 'Subtract the upper end of the alloy range (935 degC) from the pure 24-carat reference (1064 degC).',
    },
    {
      id: 'csm-ps-q17',
      type: 'multiple-choice',
      stem: 'A pupil claims: "If my melting point is just 1 degC off the reference value, the sample is still pure; 1 degC is tiny." Which response is best?',
      tier: 'challenge',
      options: [
        'Agreed; pure substances are allowed to wobble by a degree or two',
        'A 1 degC difference proves the sample is a brand new element',
        'A pure substance melts at a single fixed value within experimental precision. Even a 1 to 2 degC range or shift hints at impurity and should be investigated; the right standard is "did it melt at one value or across a range?"',
        'The reference value is only ever a rough guide and is not used in chemistry',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'csm-ps-mis-range-still-pure',
    },
    {
      id: 'csm-ps-q18',
      type: 'numeric-entry',
      stem: 'A pharmacy technician tests four batches of paracetamol. Batch A melts at exactly 169 degC. Batch B melts over 162 to 167 degC. Batch C melts at exactly 169 degC. Batch D melts over 165 to 168 degC. How many of the four batches behave like a pure substance?',
      tier: 'challenge',
      correctAnswer: 2,
      xpValue: 25,
      hint: 'A pure substance melts at a single fixed value, not over a range. Count the batches that do that.',
    },
    {
      id: 'csm-ps-q19',
      type: 'multiple-choice',
      stem: 'A class is told that "pure mountain spring water" is bottled at source in the Lake District. A pupil suggests testing the claim by freezing a sample slowly and recording the temperature curve. Which result would be the strongest evidence the water is NOT scientifically pure?',
      tier: 'challenge',
      options: [
        'The sample freezes sharply at exactly 0 degC',
        'The sample freezes over a small range from about -0.1 degC to -0.4 degC instead of at one fixed value',
        'The sample takes a long time to freeze',
        'The sample looks clear to the eye after freezing',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'csm-ps-mis-pure-means-safe',
    },
    {
      id: 'csm-ps-q20',
      type: 'multiple-choice',
      stem: 'A school technician is asked to label four bottles of clear liquid by purity. They record: Bottle 1 boils sharply at 100 degC. Bottle 2 boils over 100 to 103 degC. Bottle 3 boils sharply at 78 degC. Bottle 4 boils over 78 to 84 degC. Pure water boils at 100 degC and pure ethanol at 78 degC. Which two bottles contain a pure substance?',
      tier: 'challenge',
      options: [
        'Bottles 1 and 3 only (each boils at a single fixed value)',
        'Bottles 2 and 4 only (each shows a range)',
        'All four bottles, because each boiling temperature is reasonable',
        'Only Bottle 1, because pure water is the only pure liquid in a school lab',
      ],
      correctIndex: 0,
      xpValue: 25,
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on "pure substances", recurring Year 7 idea that "pure means clean/safe to drink"; reinforced by AQA GCSE Chemistry examiner report June 2019 (8462/1F) Q03 on pure substances.
    {
      id: 'csm-ps-mis-pure-means-safe',
      description:
        'A substance counts as scientifically "pure" if it is clean and safe to drink or eat (so "pure mountain spring water" is pure in chemistry too).',
      triggerAnswer: 'pure-means-safe',
      correction:
        'In fact "pure" in chemistry means there is only ONE type of particle in the sample. Tap water and spring water are safe to drink but still contain dissolved salts, so they are not scientifically pure.',
      reExplanation:
        'Everyday "pure" on a label means clean or unadulterated. Scientific "pure" means a single substance only, with nothing else mixed in. Distilled water is scientifically pure; bottled mineral water is not, because it carries dissolved salts and minerals. The two meanings often disagree, so always ask "one substance only, or a mixture?".',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F) Q05 on melting points: candidates "claimed tap water freezes at exactly 0 degC because all water does"; reinforced by RSC Education article "Pure substances and mixtures at KS3" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-ps-mis-tap-same-as-distilled',
      description:
        'Distilled water and tap water both freeze at exactly 0 degC, so they are the same substance for purity tests.',
      triggerAnswer: 'tap-same-as-distilled',
      correction:
        'Only distilled water (a pure substance) freezes sharply at 0 degC. Tap water carries dissolved salts and freezes a fraction below 0 degC, over a small range, because salts depress and broaden the melting point.',
      reExplanation:
        'Dissolved particles get between the water particles and stop them locking neatly into ice. So tap water has to be cooled a little further than 0 degC before it sets, and different parts set at slightly different temperatures, giving a range instead of a flat plateau. Distilled water has none of this and sets sharply at one value.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q07 on purity testing: candidates "accepted a 1 to 2 degC melting range as pure"; reinforced by CGP KS3 Chemistry Study Book p.62 Common Mistake box on pure substances.
    {
      id: 'csm-ps-mis-range-still-pure',
      description:
        'A small melting range of 1 to 2 degC counts as a single fixed point, so the sample is still pure.',
      triggerAnswer: 'range-still-pure',
      correction:
        'In fact a pure substance melts at a single fixed value within experimental precision. Any clear range, even 1 to 2 degC, suggests the sample is impure and should be flagged.',
      reExplanation:
        'A truly pure substance has one type of particle, so every particle needs the same amount of energy to break free of the solid; the thermometer holds at one value while the whole sample melts. A range of even one or two degrees tells you that some particles are loosening at lower temperatures than others, which only happens when more than one substance is present.',
    },
    // Source: David Paterson, "Teaching pure substances and mixtures", RSC Education CPD article (2021-03-15): recurring Year 7 idea that "if a mixture is well stirred it counts as pure"; reinforced by CGP KS3 Chemistry Study Book p.62 chapter on purity.
    {
      id: 'csm-ps-mis-mixed-means-pure',
      description:
        'If a mixture is stirred or shaken very thoroughly, it behaves like a pure substance and melts at a single fixed temperature.',
      triggerAnswer: 'mixed-means-pure',
      correction:
        'In fact stirring only spreads the substances out more evenly; it does not turn them into one substance. A mixture always melts over a range, however carefully it is mixed.',
      reExplanation:
        'Purity is about the number of substances, not how evenly they are distributed. A jar of well-stirred salt and sugar still contains salt particles and sugar particles. Each kind needs a different amount of energy to break free of the solid, so the melting always happens across a range. Only one type of particle (a pure substance) gives a single fixed value.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1H) Q06 on salted boiling water: candidates "assumed adding salt did not change the boiling point"; reinforced by RSC Education classroom resource "Boiling point elevation" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-ps-mis-boiling-unaffected',
      description:
        'Adding salt or sugar to water does not change its boiling point; salty water still boils at exactly 100 degC.',
      triggerAnswer: 'boiling-unaffected',
      correction:
        'In fact dissolved salt raises the boiling point of water. Salted pasta water boils slightly above 100 degC and across a small range, because it is now a mixture.',
      reExplanation:
        'Dissolved salt particles get in the way of water particles trying to escape into the gas state, so more energy is needed before bubbles can form. The boiling point rises by a degree or so and broadens into a range. Pure water boils sharply at 100 degC at standard pressure; salty water does not, because it is a mixture.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on identifying substances: recurring Year 7 idea that "if two samples melt at the same temperature they must be the same substance"; reinforced by Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1H) Q04 on identifying unknowns.
    {
      id: 'csm-ps-mis-same-mp-same-substance',
      description:
        'If two pure samples melt at the same temperature, they must be the same substance.',
      triggerAnswer: 'same-mp-same-substance',
      correction:
        'In fact two completely different pure substances can happen to share a melting point. A matching melting point is a useful clue, not a proof. A second test (boiling point, density, chromatography) is needed to confirm.',
      reExplanation:
        'Melting points are useful identifiers, but the list of substances is much longer than the list of possible melting temperatures, so collisions do happen. Chemists treat a matching melting point as a strong hint that two samples could be the same, then back it up with a second independent test before they are willing to claim "these are the same substance".',
    },
    // Source: David Paterson, "Crystals and purity at KS3", RSC Education CPD article (2022-02-11): pupils "assume crystals are always pure", missing that crystals can trap mother liquor; reinforced by CGP KS3 Chemistry Study Book p.63 chapter on recrystallisation.
    {
      id: 'csm-ps-mis-crystals-always-pure',
      description:
        'Crystals are always pure substances, because a substance only crystallises if it is pure.',
      triggerAnswer: 'crystals-always-pure',
      correction:
        'In fact crystals can trap tiny pockets of the original solution (mother liquor) between their faces, so they may still contain impurities. Recrystallisation may be needed to get a truly pure sample.',
      reExplanation:
        'When a substance crystallises out of solution, its particles line up into an orderly grid. The grid can trap a small amount of the surrounding liquid, with whatever was dissolved in it. A melting point test will catch this trapped impurity by giving a range or a shifted value. Chemists wash and recrystallise the sample to drive out the trapped liquor and obtain a truly pure crystal.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
