import type { SkillNode } from '@/types/content'

export const plumPuddingToNuclear: SkillNode = {
  id: 'chemistry-atoms-plum-pudding-nuclear',
  title: 'Plum Pudding to Nuclear Model',
  description:
    "Trace the atomic model from J.J. Thomson's 1904 plum pudding picture (positive dough with embedded negative electrons) to Ernest Rutherford's 1911 nuclear model. Work through what Geiger and Marsden saw when they fired alpha particles at gold foil in Manchester, why most went straight through, why a few bounced back, and why this evidence forced chemists to put a tiny, dense, positive nucleus at the centre of every atom.",
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-atoms-elements-compounds',
  zoneName: 'Atoms, Elements, Compounds',
  tier: 'challenge',
  prerequisites: ['chemistry-atoms-dalton-model'],
  curriculum: {
    ks3Objective:
      "The development of the atomic model; understanding that scientific models develop with new evidence (plum pudding model, Rutherford's nuclear model).",
    awardingBodies: {
      aqa: "4.1.1.1 Development of models of atomic structure; Rutherford's nuclear model (8462)",
      edexcel:
        'Topic 1.1 Development of atomic models and the evidence from Rutherford scattering (1CH0)',
      ocr: "C1.1a Historical development of atomic models; Rutherford's scattering experiment (J248 Gateway Chemistry)",
    },
  },
  scenes: [
    {
      id: 'cae-ppn-scene-1',
      title: "Thomson's Plum Pudding Model (1904)",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to read how J.J. Thomson at Cambridge pictured the atom after he found the electron in 1897: a ball of spread-out positive charge with tiny negative electrons stuck in like fruit in a Christmas pudding.",
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Plum pudding model (Thomson, 1904)</text><circle cx="160" cy="120" r="70" fill="#FCA5A5" stroke="#7C2D12" stroke-width="1.2"/><text x="160" y="60" text-anchor="middle" font-size="8" fill="#7C2D12">positive "pudding" of charge</text><circle cx="130" cy="100" r="6" fill="#1E3A8A"/><text x="130" y="104" text-anchor="middle" font-size="7" fill="#FFFFFF">-</text><circle cx="185" cy="100" r="6" fill="#1E3A8A"/><text x="185" y="104" text-anchor="middle" font-size="7" fill="#FFFFFF">-</text><circle cx="145" cy="130" r="6" fill="#1E3A8A"/><text x="145" y="134" text-anchor="middle" font-size="7" fill="#FFFFFF">-</text><circle cx="175" cy="145" r="6" fill="#1E3A8A"/><text x="175" y="149" text-anchor="middle" font-size="7" fill="#FFFFFF">-</text><circle cx="160" cy="115" r="6" fill="#1E3A8A"/><text x="160" y="119" text-anchor="middle" font-size="7" fill="#FFFFFF">-</text><text x="160" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A">negative electrons embedded like plums in a pudding</text></svg>',
        hotspots: [
          {
            id: 'cae-ppn-h-pudding',
            x: 45,
            y: 45,
            label: 'The positive "pudding"',
            description:
              "Thomson pictured the bulk of the atom as a soft ball of positive charge, spread out evenly through the whole volume. There was no centre and no nucleus. The positive charge balanced the negative electrons so the whole atom came out neutral.",
          },
          {
            id: 'cae-ppn-h-electrons',
            x: 40,
            y: 55,
            label: 'The "plums": embedded electrons',
            description:
              "Tiny negative electrons sit dotted through the positive pudding like fruit in a Christmas pudding. Thomson knew electrons existed from his 1897 cathode-ray work at Cambridge. Each electron is roughly 1/1836 the mass of a hydrogen atom.",
          },
          {
            id: 'cae-ppn-h-neutral',
            x: 50,
            y: 85,
            label: 'Why the atom is neutral',
            description:
              "The total negative charge from all the electrons exactly cancels the total positive charge of the pudding. So a whole atom carries no net charge. This was a real strength of the model: it explained why bulk matter is electrically neutral.",
          },
          {
            id: 'cae-ppn-h-prediction',
            x: 20,
            y: 30,
            label: 'A testable prediction',
            description:
              "Because the positive charge is spread thinly through the whole atom, the model predicts that a high-speed positive particle fired at the atom should pass almost straight through, with at most a tiny deflection. This prediction was about to be tested in Manchester.",
          },
        ],
      },
    },
    {
      id: 'cae-ppn-scene-2',
      title: "Geiger and Marsden's Gold Foil Experiment (1909)",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to walk through the famous gold foil experiment run by Hans Geiger and Ernest Marsden in Manchester, under Ernest Rutherford's supervision.",
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><text x="180" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Gold foil scattering (Manchester, 1909)</text><rect x="20" y="100" width="40" height="30" fill="#1E3A8A" rx="3"/><text x="40" y="118" text-anchor="middle" font-size="7" fill="#FFFFFF">alpha</text><text x="40" y="128" text-anchor="middle" font-size="7" fill="#FFFFFF">source</text><line x1="65" y1="115" x2="160" y2="115" stroke="#7C2D12" stroke-width="1.5"/><polygon points="160,113 160,117 165,115" fill="#7C2D12"/><rect x="165" y="55" width="6" height="120" fill="#F59E0B"/><text x="168" y="50" text-anchor="middle" font-size="7" fill="#7C2D12">gold foil</text><line x1="171" y1="115" x2="270" y2="115" stroke="#22C55E" stroke-width="1.3" stroke-dasharray="3 2"/><text x="290" y="118" font-size="7" fill="#14532D">most: straight through</text><line x1="171" y1="115" x2="270" y2="80" stroke="#3B82F6" stroke-width="1.1" stroke-dasharray="2 2"/><text x="290" y="83" font-size="7" fill="#1E3A8A">a few: small deflection</text><line x1="171" y1="115" x2="100" y2="55" stroke="#DC2626" stroke-width="1.4"/><text x="85" y="48" font-size="7" fill="#7C2D12">≈1 in 8000:</text><text x="85" y="58" font-size="7" fill="#7C2D12">bounced back</text><circle cx="270" cy="115" r="3" fill="#22C55E"/><circle cx="270" cy="80" r="3" fill="#3B82F6"/><circle cx="100" cy="55" r="3" fill="#DC2626"/><text x="180" y="200" text-anchor="middle" font-size="8" fill="#1E3A8A">Plum pudding predicts ONLY the green path. Blue and red shocked everyone.</text></svg>',
        hotspots: [
          {
            id: 'cae-ppn-h-source',
            x: 8,
            y: 50,
            label: 'Alpha particle source',
            description:
              "A small lump of radium gave off alpha particles: high-speed, positively charged, and heavier than electrons. The team aimed a narrow beam of these alpha particles at a sheet of gold foil only a few hundred atoms thick.",
          },
          {
            id: 'cae-ppn-h-foil',
            x: 45,
            y: 25,
            label: 'The gold foil',
            description:
              "Gold was beaten into a foil only about 0.0004 mm thick. Gold is dense and easy to hammer thin. Around the foil, a screen coated in zinc sulphide flashed when an alpha particle hit it, so the team could count where the alphas ended up.",
          },
          {
            id: 'cae-ppn-h-straight',
            x: 75,
            y: 55,
            label: 'Most alphas: straight through',
            description:
              "The huge majority of alpha particles passed straight through the foil with no deflection. This was expected on the plum pudding model: positive charge is spread thin, so nothing should push a high-speed alpha off course much.",
          },
          {
            id: 'cae-ppn-h-deflected',
            x: 75,
            y: 35,
            label: 'A few: small deflection',
            description:
              "A small number of alphas were deflected by a few degrees as they passed through. The plum pudding model could not explain this; the spread-out positive charge should never give such a strong nudge to a heavy high-speed alpha.",
          },
          {
            id: 'cae-ppn-h-back',
            x: 22,
            y: 22,
            label: 'About 1 in 8000: bounced back',
            description:
              "A tiny fraction of alphas, around 1 in 8000, came back almost the way they came. Rutherford later said this was \"as if you had fired a heavy naval shell at a piece of tissue paper and it came back and hit you\". The plum pudding could not explain this at all.",
          },
        ],
      },
    },
    {
      id: 'cae-ppn-scene-3',
      title: "Rutherford's Nuclear Model (1911)",
      type: 'labelled-diagram',
      instructions:
        "Click each marker to see how Rutherford reasoned from the gold foil results to a brand new picture of the atom: mostly empty space, with a tiny dense positive nucleus at the centre.",
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">Nuclear model (Rutherford, 1911)</text><circle cx="160" cy="120" r="78" fill="#FFFFFF" stroke="#94A3B8" stroke-dasharray="3 2" stroke-width="0.8"/><text x="160" y="52" text-anchor="middle" font-size="8" fill="#475569">atom is mostly empty space</text><circle cx="160" cy="120" r="6" fill="#DC2626"/><text x="160" y="124" text-anchor="middle" font-size="6" fill="#FFFFFF" font-weight="700">+</text><text x="200" y="125" font-size="8" font-weight="600" fill="#7C2D12">tiny dense nucleus</text><text x="200" y="135" font-size="7" fill="#7C2D12">(holds most of the mass)</text><circle cx="100" cy="120" r="4" fill="#1E3A8A"/><circle cx="220" cy="120" r="4" fill="#1E3A8A"/><circle cx="160" cy="70" r="4" fill="#1E3A8A"/><circle cx="160" cy="170" r="4" fill="#1E3A8A"/><circle cx="160" cy="120" r="50" fill="none" stroke="#1E3A8A" stroke-width="0.6" stroke-dasharray="2 2"/><text x="160" y="205" text-anchor="middle" font-size="8" fill="#1E3A8A">electrons orbit around the nucleus, far from the centre</text></svg>',
        hotspots: [
          {
            id: 'cae-ppn-h-empty',
            x: 30,
            y: 25,
            label: 'Mostly empty space',
            description:
              "Because most alpha particles went straight through the gold foil, Rutherford concluded that the atom is mostly empty space. There is nothing in the way of an alpha for the great majority of its journey through the foil.",
          },
          {
            id: 'cae-ppn-h-nucleus',
            x: 50,
            y: 55,
            label: 'Tiny dense positive nucleus',
            description:
              "The rare large-angle bounces showed there is a tiny region of concentrated positive charge in the centre of every atom. Rutherford called this the nucleus. It is small but dense; almost all the mass of the atom sits inside it.",
          },
          {
            id: 'cae-ppn-h-orbits',
            x: 30,
            y: 75,
            label: 'Electrons orbit far out',
            description:
              "The electrons that Thomson had found in 1897 must orbit at a much greater distance from the centre, the way planets orbit the Sun. This kept the atom electrically neutral overall while leaving the bulk of the atom empty.",
          },
          {
            id: 'cae-ppn-h-scale',
            x: 65,
            y: 75,
            label: 'How small is the nucleus?',
            description:
              "If you scaled an atom up to the size of Wembley Stadium, the nucleus would be roughly the size of a pea on the centre spot. That is why most alphas miss it entirely; only a direct or near-miss collision produces a large deflection.",
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cae-ppn-worked-1',
      title: "Why the plum pudding model could not explain the bouncing alphas",
      steps: [
        {
          explanation:
            "Question: in the 1909 gold foil experiment, roughly 1 in 8000 alpha particles bounced back from the foil. Why does this single observation force chemists to give up the plum pudding model?",
        },
        {
          explanation:
            "Step 1: write down what the plum pudding model predicts. It says the positive charge of an atom is spread thinly through the whole volume, like jam in a sponge cake. A high-speed, heavy, positive alpha pushing through should feel only a gentle, evenly-spread push.",
          maths: 'predicted deflection: at most a few small degrees',
        },
        {
          explanation:
            "Step 2: write down what the team actually saw. About 1 in 8000 alphas came back almost the way they came, sometimes through angles greater than 90 degrees.",
          maths: 'observed: ≈1 in 8000 deflected by more than 90°',
        },
        {
          explanation:
            "Step 3: compare prediction with observation. The prediction said a wide-angle bounce should basically never happen. The observation says it does happen, rarely but reliably. A single confirmed counter-example is enough to rule the model out.",
        },
        {
          explanation:
            "Step 4: reason about what kind of structure could give a large bounce. Only a heavy, concentrated lump of positive charge could push a positive alpha back on itself. So the atom must have a tiny, dense, positive centre.",
        },
        {
          explanation:
            "Step 5: state the conclusion. Because the plum pudding model cannot produce the rare bounces, it has to be replaced. Rutherford proposed the nuclear model in 1911 with a small, dense, positively charged nucleus at the centre.",
        },
      ],
    },
    {
      id: 'cae-ppn-worked-2',
      title: 'Reading numbers off the gold foil results',
      steps: [
        {
          explanation:
            "Question: imagine the Manchester team fires 80 000 alpha particles at the gold foil and counts 10 large-angle bounces. What fraction of alphas bounced back? What does this say about the size of the nucleus?",
        },
        {
          explanation:
            "Step 1: write the fraction. fraction = bounces / total = 10 / 80 000.",
          maths: 'fraction = 10 / 80 000',
        },
        {
          explanation:
            "Step 2: simplify. Divide top and bottom by 10 first: 1 / 8000. So roughly 1 in 8000 alphas bounce back.",
          maths: '10 / 80 000 = 1 / 8000',
        },
        {
          explanation:
            "Step 3: interpret. 7999 out of every 8000 alphas miss anything solid. So the part of the atom that can deflect an alpha must be tiny compared to the whole atom.",
        },
        {
          explanation:
            "Step 4: put numbers on it (school-level estimate). The atom is about 100 000 times wider than its nucleus, so the cross-section of the nucleus is about (1 / 100 000) squared of the atom. That is why bounces are rare but not zero.",
          maths: 'atom radius / nucleus radius ≈ 100 000',
        },
        {
          explanation:
            "Step 5: state the conclusion. The rarity of bounces is direct evidence that the nucleus is extremely small and the rest of the atom is mostly empty space.",
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'cae-ppn-q1',
      type: 'multiple-choice',
      stem: "Which scientist proposed the plum pudding model of the atom in 1904?",
      tier: 'core',
      options: ['John Dalton', 'J.J. Thomson', 'Ernest Rutherford', 'Niels Bohr'],
      correctIndex: 1,
      xpValue: 10,
      hint: 'He had found the electron in 1897 and needed a way to fit it inside an atom.',
    },
    {
      id: 'cae-ppn-q2',
      type: 'multiple-choice',
      stem: "Which sentence best describes the plum pudding model of the atom?",
      tier: 'core',
      options: [
        'A tiny, dense, positive nucleus at the centre with electrons orbiting around it',
        'A ball of spread-out positive charge with negative electrons embedded in it like fruit in a pudding',
        'A solid indivisible ball with no inner structure of any kind',
        'A cloud of negative charge with a positive ring around the edge',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ppn-mis-pudding-has-nucleus',
    },
    {
      id: 'cae-ppn-q3',
      type: 'multiple-choice',
      stem: "In the 1909 gold foil experiment, who actually did the practical work of firing alpha particles at the foil?",
      tier: 'core',
      options: [
        'Hans Geiger and Ernest Marsden at Manchester, under Rutherford',
        'J.J. Thomson and John Dalton at Cambridge',
        'Niels Bohr and Albert Einstein at Copenhagen',
        'Marie and Pierre Curie at Paris',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The experiment was run in a UK lab under Rutherford.',
    },
    {
      id: 'cae-ppn-q4',
      type: 'multiple-choice',
      stem: "What were the alpha particles fired at the gold foil?",
      tier: 'core',
      options: [
        'Tiny negatively charged particles, lighter than a hydrogen atom',
        'Fast positively charged particles, heavier than electrons',
        'Beams of light with no mass at all',
        'Whole gold atoms ripped from the foil',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cae-ppn-mis-alpha-is-electron',
    },
    {
      id: 'cae-ppn-q5',
      type: 'multiple-choice',
      stem: "What did MOST of the alpha particles do when they hit the gold foil?",
      tier: 'core',
      options: [
        'Stuck to the foil and stayed there',
        'Bounced back the way they came',
        'Were deflected through large angles',
        'Passed straight through with no deflection',
      ],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'cae-ppn-q6',
      type: 'numeric-entry',
      stem: "Roughly what fraction of alpha particles bounced back from the gold foil, in the famous Manchester result? Give the denominator. The answer is 1 in ___.",
      tier: 'core',
      correctAnswer: 8000,
      tolerance: 100,
      xpValue: 10,
      hint: 'A very small fraction, but enough to count reliably.',
    },
    {
      id: 'cae-ppn-q7',
      type: 'numeric-entry',
      stem: "In which year did Rutherford publish his nuclear model of the atom, based on the gold foil results?",
      tier: 'core',
      correctAnswer: 1911,
      xpValue: 10,
    },
    // ===== CONFIDENT (8) =====
    {
      id: 'cae-ppn-q8',
      type: 'multiple-choice',
      stem: "Why did Rutherford conclude that the atom is mostly empty space?",
      tier: 'confident',
      options: [
        'Because the gold foil was very thin, so the atoms had room to spread out',
        'Because all the alpha particles bounced back, showing the atom was hollow',
        'Because most alpha particles passed straight through the foil without being deflected',
        'Because electrons are very light, so they cannot fill much of the atom',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-ppn-mis-empty-from-bounces',
    },
    {
      id: 'cae-ppn-q9',
      type: 'multiple-choice',
      stem: "Why did Rutherford conclude that the centre of the atom must hold a concentrated positive charge?",
      tier: 'confident',
      options: [
        'Because all alphas were deflected slightly by the foil',
        'Because a few alphas bounced almost straight back, which only a heavy concentrated positive charge could cause',
        'Because the gold foil glowed when hit',
        'Because the electrons in gold are positive',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'cae-ppn-q10',
      type: 'multiple-choice',
      stem: "Which feature of the plum pudding model was directly contradicted by the gold foil results?",
      tier: 'confident',
      options: [
        'That atoms contain electrons',
        'That atoms are overall electrically neutral',
        'That positive charge is spread thinly through the whole atom',
        'That the electron is lighter than a hydrogen atom',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cae-ppn-mis-pudding-all-wrong',
    },
    {
      id: 'cae-ppn-q11',
      type: 'numeric-entry',
      stem: "In a school re-creation of the experiment, a class fires 24 000 simulated alpha particles at a foil and 3 of them bounce back. What is the denominator of the fraction (1 in ___)?",
      tier: 'confident',
      correctAnswer: 8000,
      tolerance: 50,
      xpValue: 15,
      hint: '24 000 divided by 3.',
    },
    {
      id: 'cae-ppn-q12',
      type: 'numeric-entry',
      stem: "If a Manchester group fired 50 000 alpha particles at a similar foil, roughly how many should they expect to bounce back (using the 1 in 8000 result)? Round to the nearest whole number.",
      tier: 'confident',
      correctAnswer: 6,
      tolerance: 1,
      xpValue: 15,
      hint: '50 000 divided by 8000.',
    },
    {
      id: 'cae-ppn-q13',
      type: 'numeric-entry',
      stem: "An atom is roughly 100 000 times wider than its nucleus. If a model atom has a nucleus drawn as a circle of radius 1 mm, what should the radius of the whole atom be, in metres?",
      tier: 'confident',
      correctAnswer: 100,
      tolerance: 1,
      unit: 'm',
      xpValue: 15,
      hint: '1 mm = 0.001 m. Multiply by 100 000.',
    },
    {
      id: 'cae-ppn-q14',
      type: 'drag-order',
      stem: "Place these four atomic-model milestones in time order, earliest first.",
      tier: 'confident',
      items: [
        "Rutherford proposes the nuclear model with a tiny dense centre",
        "Dalton publishes his atomic theory in Manchester",
        "Thomson proposes the plum pudding model with embedded electrons",
        "Geiger and Marsden fire alpha particles at gold foil in Manchester",
      ],
      correctOrder: [1, 2, 3, 0],
      xpValue: 15,
      hint: 'Dalton 1803, Thomson 1904, gold foil 1909, nuclear model 1911.',
    },
    {
      id: 'cae-ppn-q15',
      type: 'missing-step',
      stem: "Fill in the missing step in this account of why the gold foil results force a new atomic model.",
      tier: 'confident',
      steps: [
        "The plum pudding model predicts positive charge is spread thinly through the whole atom",
        "On that picture, a high-speed positive alpha particle should only be deflected by a few small degrees at most",
        null,
        "So the positive charge cannot be spread thin. It must be packed into a tiny dense region at the centre of the atom",
      ],
      missingStepIndex: 2,
      correctStep:
        "But Geiger and Marsden saw about 1 in 8000 alpha particles bounce back through angles greater than 90 degrees, which the plum pudding picture cannot produce",
      xpValue: 15,
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'cae-ppn-q16',
      type: 'multiple-choice',
      stem: "Rutherford famously said the gold foil result was \"as if you had fired a heavy naval shell at a piece of tissue paper and it came back and hit you\". Which feature of the result was he describing?",
      tier: 'challenge',
      options: [
        'That most alphas passed straight through',
        'That a few alphas bounced almost straight back',
        'That the gold foil was very thin',
        'That alphas are positively charged',
      ],
      correctIndex: 1,
      xpValue: 20,
    },
    {
      id: 'cae-ppn-q17',
      type: 'spot-misconception',
      stem: "Sara says: \"Because Rutherford's model replaced the plum pudding model, Thomson was just wrong and his work added nothing useful to chemistry.\"",
      tier: 'challenge',
      statements: [
        {
          text: "Sara is right. The plum pudding model has been replaced, so it added nothing of lasting value.",
          isMisconception: true,
        },
        {
          text: "Sara is wrong. Thomson's discovery of the electron in 1897 stayed correct, and the plum pudding model was a sensible step that fitted the evidence Thomson had at the time. Rutherford built on it, not over it.",
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-ppn-mis-pudding-all-wrong',
    },
    {
      id: 'cae-ppn-q18',
      type: 'free-text',
      stem: "Explain in 2 to 3 sentences why the gold foil experiment is a good example of how scientific models change as new evidence comes in.",
      tier: 'challenge',
      sampleAnswer:
        "The plum pudding model was the best fit for the evidence Thomson had in 1904, but it predicted no large-angle bounces. When Geiger and Marsden saw a few alphas bounce almost straight back, the prediction failed, so Rutherford proposed a new model with a tiny dense nucleus that did fit the result. New evidence forced a better model; chemists did not just stick with the old picture.",
      keywords: ['evidence', 'prediction', 'nucleus', 'replaced'],
      xpValue: 20,
    },
    {
      id: 'cae-ppn-q19',
      type: 'multiple-choice',
      stem: "Which of these statements about the nuclear model is NOT something Rutherford could conclude directly from the 1909 gold foil results?",
      tier: 'challenge',
      options: [
        'The atom is mostly empty space',
        'The atom has a tiny dense centre',
        'The centre of the atom carries positive charge',
        'The electrons orbit the nucleus in fixed energy shells',
      ],
      correctIndex: 3,
      xpValue: 20,
      hint: 'Three of these come straight from the experiment. One was added later by Bohr in 1913.',
      misconceptionId: 'cae-ppn-mis-rutherford-knew-shells',
    },
    {
      id: 'cae-ppn-q20',
      type: 'spot-misconception',
      stem: "Tom says: \"Rutherford fired alpha particles and saw most of them bounce back. That is how he knew the atom was mostly empty space.\"",
      tier: 'challenge',
      statements: [
        {
          text: "Tom is right. Most alphas bouncing back is what showed the atom was empty.",
          isMisconception: true,
        },
        {
          text: "Tom is wrong. Most alphas passed straight through, which is what showed the atom was mostly empty space. Only about 1 in 8000 bounced back, and that rare event showed the atom had a small dense centre.",
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cae-ppn-mis-empty-from-bounces',
    },
    {
      id: 'cae-ppn-q21',
      type: 'numeric-entry',
      stem: "If 1 in 8000 alpha particles bounces back, and a class wants to see at least 5 bounces in a school simulation, what is the smallest number of alphas they should fire? Round to the nearest 1000.",
      tier: 'challenge',
      correctAnswer: 40000,
      tolerance: 500,
      xpValue: 20,
      hint: 'Multiply 5 by 8000.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q03 on development of atomic models: candidates "described the plum pudding model as already containing a central nucleus", conflating Thomson's 1904 picture with Rutherford's later one. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on atomic-model history.
    {
      id: 'cae-ppn-mis-pudding-has-nucleus',
      description:
        "The plum pudding model already included a tiny dense nucleus at the centre of the atom.",
      triggerAnswer: 'pudding-has-nucleus',
      correction:
        "In fact the plum pudding model had no nucleus. The positive charge was spread thinly through the whole atom, with electrons dotted in. The nucleus was only proposed in 1911, after the gold foil results.",
      reExplanation:
        "Thomson built the plum pudding model in 1904 to fit two facts he knew: electrons exist (he had found them in 1897) and bulk matter is electrically neutral. He had no evidence for a concentrated centre, so he spread the positive charge through the whole volume. The nucleus was a Rutherford idea from 1911, forced by the unexpected bounces in the gold foil experiment. Putting a nucleus inside the plum pudding mixes up two different historical models.",
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q05 on the gold foil experiment: candidates "wrote that most alpha particles bounced back, showing the atom was mostly empty space", inverting the actual observation. Reinforced by RSC Education article "Teaching the history of the atomic model at KS3 and KS4" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'cae-ppn-mis-empty-from-bounces',
      description:
        "Rutherford knew the atom was mostly empty space because most alpha particles bounced back from the gold foil.",
      triggerAnswer: 'empty-from-bounces',
      correction:
        "In fact most alpha particles passed straight through, which is what showed the atom was mostly empty space. The bouncing-back was rare, about 1 in 8000, and that event showed the atom had a tiny dense centre.",
      reExplanation:
        "Two different observations from the same experiment did two different jobs. The first, that most alphas went straight through, told Rutherford the atom had to be largely empty: nothing was in the way. The second, that a small fraction bounced sharply back, told him there was a hard, dense, positive lump somewhere in the centre. Mixing the two up flips the logic of the experiment.",
    },
    // Source: AQA GCSE Chemistry examiner report June 2020 (8462/1F), Q04 on the development of atomic models: candidates "wrote that the plum pudding model has been replaced and so was completely wrong from the start." Reinforced by David Paterson, "Teaching the history of the atomic model at KS3", RSC Education CPD article (2020-09-18).
    {
      id: 'cae-ppn-mis-pudding-all-wrong',
      description:
        "Because the plum pudding model has been replaced, every part of it was wrong and Thomson's work added nothing useful.",
      triggerAnswer: 'pudding-all-wrong',
      correction:
        "In fact the plum pudding model was the best fit for the evidence Thomson had in 1904. His discovery of the electron stayed correct. The model was updated when new evidence came in, not thrown out as worthless.",
      reExplanation:
        "Scientific models are not all-right or all-wrong; they are the current best fit for the evidence. Thomson's electron stayed in every later model, and his idea that atoms are neutral overall is still true today. Rutherford did not bin Thomson's work; he built on it, replacing only the spread-out positive charge with a tiny nucleus. That is how science progresses.",
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q06 on the gold foil experiment: candidates "described alpha particles as negatively charged or as electrons", confusing alpha with beta radiation. Reinforced by CGP KS3 Chemistry Study Book common-mistake callouts on the gold foil experiment.
    {
      id: 'cae-ppn-mis-alpha-is-electron',
      description:
        "Alpha particles fired at the gold foil were just electrons or were negatively charged.",
      triggerAnswer: 'alpha-is-electron',
      correction:
        "In fact alpha particles are positively charged and far heavier than electrons. They are the same as a helium nucleus. Their positive charge is the reason a dense positive nucleus can push them back.",
      reExplanation:
        "Alphas, betas, and gammas are three different kinds of radiation. Alphas are positive and heavy; betas are electrons (negative and very light); gammas are high-energy waves. The gold foil experiment only works the way it does because the alphas are positive: they are repelled by the positive nucleus of a gold atom. If alphas were negative, they would be attracted to the nucleus instead of pushed away.",
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1F), Q05 on the nuclear model: candidates "claimed Rutherford's 1911 model already included electron shells with fixed energies", crediting Rutherford with the Bohr picture from 1913. Reinforced by Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education.
    {
      id: 'cae-ppn-mis-rutherford-knew-shells',
      description:
        "Rutherford's 1911 nuclear model already had electrons arranged in fixed energy shells.",
      triggerAnswer: 'rutherford-knew-shells',
      correction:
        "In fact Rutherford's 1911 model only said electrons orbit the nucleus, with no fixed shells. Electron shells with set energies were added by Niels Bohr in 1913, two years later.",
      reExplanation:
        "Rutherford's model was a huge step forward, but it left an open question: how do the electrons stay where they are? In 1913 Niels Bohr in Copenhagen proposed that electrons sit in shells at fixed energies, and only certain orbits are allowed. That tweak is the modern school picture of the atom. So shells are a Bohr idea, not a Rutherford one, even though the nucleus is Rutherford's.",
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on the history of the atomic model: a common Year 7 error is to think Rutherford himself fired the alpha particles at the gold foil, missing that Geiger and Marsden actually ran the experiment. Reinforced by CGP KS3 Chemistry Study Book p.42 callout on the gold foil experiment.
    {
      id: 'cae-ppn-mis-rutherford-fired-alphas',
      description:
        "Ernest Rutherford himself stood at the gold foil and fired the alpha particles for the 1909 experiment.",
      triggerAnswer: 'rutherford-fired-alphas',
      correction:
        "In fact the practical work was carried out by Hans Geiger and Ernest Marsden at Manchester. Rutherford supervised the project and interpreted the results, but the long hours at the bench were Geiger and Marsden's.",
      reExplanation:
        "In a UK research lab around 1909, a professor like Rutherford would set the research direction and analyse the data, but the hands-on practical work would fall to a junior researcher (Geiger) and a research student (Marsden). They counted thousands of zinc sulphide flashes in a dark room. Rutherford then took their data and built the nuclear model from it in 1911. So the credit is shared, but the practical observation was Geiger and Marsden's.",
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
