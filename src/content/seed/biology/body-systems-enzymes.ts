import type { SkillNode } from '@/types/content'

const lockKeySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">Lock and key model: substrate fits the active site, products leave, enzyme is reused</text>
  <g transform="translate(40,80)">
    <text x="80" y="-6" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">STEP 1: before</text>
    <path d="M20 60 Q20 20 70 20 L130 20 Q150 20 150 40 L150 70 Q140 60 130 70 L130 90 Q140 100 150 90 L150 120 Q150 140 130 140 L70 140 Q20 140 20 100 Z" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="2" />
    <text x="60" y="85" font-size="11" font-weight="700" fill="#1E3A8A">enzyme</text>
    <text x="60" y="100" font-size="10" fill="#1F2937">(amylase)</text>
    <text x="155" y="65" font-size="10" fill="#1F2937">active</text>
    <text x="155" y="78" font-size="10" fill="#1F2937">site</text>
    <g transform="translate(195,68)">
      <path d="M0 0 Q-12 -12 0 -24 Q12 -12 0 0 Z" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
      <text x="0" y="-8" text-anchor="middle" font-size="9" fill="#1F2937">substrate</text>
      <text x="0" y="2" text-anchor="middle" font-size="9" fill="#1F2937">(starch)</text>
    </g>
  </g>
  <g transform="translate(40,250)">
    <text x="80" y="-6" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">STEP 2: substrate locked in</text>
    <path d="M20 60 Q20 20 70 20 L130 20 Q150 20 150 40 L150 70 Q140 60 130 70 L130 90 Q140 100 150 90 L150 120 Q150 140 130 140 L70 140 Q20 140 20 100 Z" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="2" />
    <path d="M140 70 Q128 58 140 46 Q152 58 140 70 Z" fill="#FDE68A" stroke="#92400E" stroke-width="2" />
    <text x="60" y="100" font-size="10" fill="#1F2937">starch fits exactly</text>
    <text x="60" y="116" font-size="10" fill="#1F2937">into the active site</text>
  </g>
  <g transform="translate(330,80)">
    <text x="80" y="-6" text-anchor="middle" font-size="12" font-weight="700" fill="#7F1D1D">STEP 3: bonds break</text>
    <path d="M20 60 Q20 20 70 20 L130 20 Q150 20 150 40 L150 70 Q140 60 130 70 L130 90 Q140 100 150 90 L150 120 Q150 140 130 140 L70 140 Q20 140 20 100 Z" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
    <path d="M134 56 L146 56" stroke="#7F1D1D" stroke-width="2.5" />
    <text x="60" y="85" font-size="11" fill="#1F2937">starch is split</text>
    <text x="60" y="100" font-size="11" fill="#1F2937">into smaller sugars</text>
  </g>
  <g transform="translate(330,250)">
    <text x="80" y="-6" text-anchor="middle" font-size="12" font-weight="700" fill="#14532D">STEP 4: products leave, enzyme is reused</text>
    <path d="M20 60 Q20 20 70 20 L130 20 Q150 20 150 40 L150 70 Q140 60 130 70 L130 90 Q140 100 150 90 L150 120 Q150 140 130 140 L70 140 Q20 140 20 100 Z" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="2" />
    <circle cx="200" cy="50" r="9" fill="#FDE68A" stroke="#92400E" stroke-width="1.5" />
    <text x="200" y="54" text-anchor="middle" font-size="9" fill="#1F2937">sugar</text>
    <circle cx="225" cy="80" r="9" fill="#FDE68A" stroke="#92400E" stroke-width="1.5" />
    <text x="225" y="84" text-anchor="middle" font-size="9" fill="#1F2937">sugar</text>
    <text x="60" y="100" font-size="10" fill="#14532D">enzyme is UNCHANGED</text>
    <text x="60" y="116" font-size="10" fill="#14532D">and binds the next starch</text>
  </g>
  <text x="300" y="394" text-anchor="middle" font-size="11" fill="#1F2937">One enzyme molecule can repeat this cycle thousands of times per minute. Source: Royal Society of Biology KS3 schools resource.</text>
</svg>
`.trim()

const tempCurveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">Enzyme activity vs temperature for human amylase</text>
  <line x1="80" y1="320" x2="540" y2="320" stroke="#111827" stroke-width="2" />
  <line x1="80" y1="320" x2="80" y2="60" stroke="#111827" stroke-width="2" />
  <text x="310" y="356" text-anchor="middle" font-size="12" fill="#1F2937">Temperature in degrees Celsius</text>
  <text x="34" y="190" font-size="12" fill="#1F2937" transform="rotate(-90,34,190)">Activity (% of maximum)</text>
  <line x1="80" y1="320" x2="80" y2="316" stroke="#111827" stroke-width="2" />
  <text x="80" y="338" text-anchor="middle" font-size="10" fill="#1F2937">0</text>
  <text x="160" y="338" text-anchor="middle" font-size="10" fill="#1F2937">10</text>
  <text x="240" y="338" text-anchor="middle" font-size="10" fill="#1F2937">25</text>
  <text x="320" y="338" text-anchor="middle" font-size="10" fill="#1F2937">37</text>
  <text x="400" y="338" text-anchor="middle" font-size="10" fill="#1F2937">45</text>
  <text x="480" y="338" text-anchor="middle" font-size="10" fill="#1F2937">60</text>
  <text x="72" y="324" text-anchor="end" font-size="10" fill="#1F2937">0</text>
  <text x="72" y="254" text-anchor="end" font-size="10" fill="#1F2937">25</text>
  <text x="72" y="190" text-anchor="end" font-size="10" fill="#1F2937">50</text>
  <text x="72" y="126" text-anchor="end" font-size="10" fill="#1F2937">75</text>
  <text x="72" y="68" text-anchor="end" font-size="10" fill="#1F2937">100</text>
  <path d="M80 312 Q160 290 240 220 Q300 130 320 64 Q360 110 400 220 Q440 308 480 318 L540 320" fill="none" stroke="#1D4ED8" stroke-width="3" />
  <circle cx="320" cy="64" r="6" fill="#16A34A" stroke="#14532D" stroke-width="2" />
  <text x="320" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">optimum: 37 deg C</text>
  <line x1="80" y1="312" x2="160" y2="290" stroke="#1D4ED8" stroke-width="0" />
  <circle cx="160" cy="290" r="4" fill="#1D4ED8" />
  <text x="160" y="278" text-anchor="middle" font-size="9" fill="#1D4ED8">slow at 10 deg C</text>
  <circle cx="480" cy="318" r="4" fill="#DC2626" />
  <text x="480" y="306" text-anchor="middle" font-size="10" font-weight="700" fill="#DC2626">denatured at 60 deg C</text>
  <line x1="320" y1="64" x2="320" y2="320" stroke="#16A34A" stroke-width="1" stroke-dasharray="4 4" />
</svg>
`.trim()

const phCurveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#1F2937">Two digestive enzymes, two pH optima</text>
  <line x1="80" y1="320" x2="540" y2="320" stroke="#111827" stroke-width="2" />
  <line x1="80" y1="320" x2="80" y2="60" stroke="#111827" stroke-width="2" />
  <text x="310" y="356" text-anchor="middle" font-size="12" fill="#1F2937">pH (acid on the left, alkaline on the right)</text>
  <text x="34" y="190" font-size="12" fill="#1F2937" transform="rotate(-90,34,190)">Activity (% of maximum)</text>
  <text x="80" y="338" text-anchor="middle" font-size="10" fill="#1F2937">1</text>
  <text x="138" y="338" text-anchor="middle" font-size="10" fill="#1F2937">2</text>
  <text x="196" y="338" text-anchor="middle" font-size="10" fill="#1F2937">3</text>
  <text x="254" y="338" text-anchor="middle" font-size="10" fill="#1F2937">5</text>
  <text x="312" y="338" text-anchor="middle" font-size="10" fill="#1F2937">7</text>
  <text x="370" y="338" text-anchor="middle" font-size="10" fill="#1F2937">9</text>
  <text x="428" y="338" text-anchor="middle" font-size="10" fill="#1F2937">11</text>
  <text x="72" y="324" text-anchor="end" font-size="10" fill="#1F2937">0</text>
  <text x="72" y="190" text-anchor="end" font-size="10" fill="#1F2937">50</text>
  <text x="72" y="68" text-anchor="end" font-size="10" fill="#1F2937">100</text>
  <path d="M80 280 Q110 90 138 64 Q170 90 220 240 Q260 320 300 320" fill="none" stroke="#B91C1C" stroke-width="3" />
  <circle cx="138" cy="64" r="6" fill="#B91C1C" stroke="#7F1D1D" stroke-width="2" />
  <text x="138" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#B91C1C">pepsin: optimum pH 2 (stomach)</text>
  <path d="M220 320 Q260 200 312 64 Q360 200 420 290 Q450 318 480 320" fill="none" stroke="#1D4ED8" stroke-width="3" />
  <circle cx="312" cy="64" r="6" fill="#1D4ED8" stroke="#1E3A8A" stroke-width="2" />
  <text x="312" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#1D4ED8">amylase: optimum pH 7 (mouth)</text>
  <rect x="80" y="60" width="58" height="260" fill="#FECACA" opacity="0.35" />
  <text x="109" y="78" text-anchor="middle" font-size="9" fill="#7F1D1D">stomach acid</text>
  <rect x="290" y="60" width="44" height="260" fill="#DBEAFE" opacity="0.4" />
  <text x="312" y="78" text-anchor="middle" font-size="9" fill="#1E3A8A">saliva pH</text>
  <text x="300" y="382" text-anchor="middle" font-size="11" fill="#1F2937">Each enzyme is shaped to work best in the part of the gut it lives in. Source: AQA GCSE Biology specification.</text>
</svg>
`.trim()

export const enzymes: SkillNode = {
  id: 'biology-body-systems-enzymes',
  title: 'Enzymes as Biological Catalysts',
  description:
    'Enzymes are protein molecules that speed up reactions in living things without being used up. A KS3 model is the LOCK and KEY: each enzyme has a small dent called the ACTIVE SITE, shaped to fit one kind of substrate. When the right substrate slots in, bonds break or join, and the products leave. The enzyme itself is unchanged and can do the job again, thousands of times per minute. Year 7 biologists meet enzymes most often in the digestive system: amylase in saliva breaks starch into sugars, pepsin in the stomach breaks proteins into smaller pieces, and lipase in the small intestine splits fats. Enzymes are picky about temperature and pH. Activity rises with temperature up to the optimum (about 37 degrees Celsius in humans), then falls fast as the protein DENATURES: the active site changes shape and the substrate no longer fits. The same idea explains why pepsin needs the acid pH 2 of the stomach while amylase needs the near-neutral pH 7 of the mouth. The enzyme idea is also why a biological washing powder removes a porridge stain at 40 degrees but loses its power if the wash runs at 60 degrees.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-body-systems',
  zoneName: 'Body Systems',
  tier: 'challenge',
  prerequisites: ['biology-body-systems-digestive'],
  curriculum: {
    ks3Objective:
      'Enzymes simply as biological catalysts; how digestive enzymes break down large molecules into smaller, soluble ones; introductory model of how enzymes speed up reactions without being used up.',
    awardingBodies: {
      aqa: '4.2.2.1 Enzymes in digestion; lock-and-key model at introductory level (GCSE Biology 8461)',
      edexcel: 'CB2a Enzymes; function and factors affecting activity (GCSE Biology 1BI0, Topic 2)',
      ocr: 'B2.1.4 Enzymes (GCSE Biology A J247)',
    },
  },
  scenes: [
    {
      id: 'bbs-en-lock-key',
      title: 'Lock and Key: One Cycle of an Enzyme Reaction',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to walk through one enzyme cycle: substrate binds to the active site, bonds break, products leave, enzyme is unchanged and ready for the next substrate.',
      data: {
        viewBox: '0 0 600 400',
        svg: lockKeySvg,
        hotspots: [
          {
            id: 'bbs-en-hs-active-site',
            x: 26,
            y: 30,
            label: 'Step 1: enzyme with empty active site',
            description:
              'An enzyme is a protein folded into a precise 3D shape. A small dent called the ACTIVE SITE has a shape that matches one kind of substrate. Here, amylase has an active site that fits a length of starch.',
          },
          {
            id: 'bbs-en-hs-binding',
            x: 26,
            y: 70,
            label: 'Step 2: substrate slots in',
            description:
              'The starch molecule fits into the active site like a key into a lock. The fit is so specific that amylase will not bind a fat or a protein. Specificity comes from shape.',
          },
          {
            id: 'bbs-en-hs-reaction',
            x: 74,
            y: 30,
            label: 'Step 3: bonds break, products form',
            description:
              'Inside the active site, the bonds between the sugar units in the starch chain break. The big starch molecule is split into smaller sugar molecules. This is the reaction the enzyme catalyses.',
          },
          {
            id: 'bbs-en-hs-reuse',
            x: 74,
            y: 70,
            label: 'Step 4: products leave, enzyme reused',
            description:
              'The sugar products leave the active site. The enzyme is unchanged in shape and structure, so it can bind the next starch molecule at a fast rate. One enzyme can repeat this cycle many thousands of times per minute. This is why we call enzymes CATALYSTS.',
          },
        ],
      },
    },
    {
      id: 'bbs-en-temp-curve',
      title: 'Temperature Curve: Why Human Enzymes Peak at 37 deg C',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the activity curve to see why human amylase works slowly when cold, peaks near body temperature, and stops once it has been denatured by heat.',
      data: {
        viewBox: '0 0 600 400',
        svg: tempCurveSvg,
        hotspots: [
          {
            id: 'bbs-en-hs-cold',
            x: 27,
            y: 73,
            label: 'Cold: slow, but enzyme is fine',
            description:
              'At 10 deg C the molecules move slowly, so substrates do not bump into active sites often. Activity is low, perhaps 15% of maximum. The enzyme itself is undamaged. Warm it back up and full activity returns.',
          },
          {
            id: 'bbs-en-hs-optimum',
            x: 53,
            y: 17,
            label: 'Optimum: 37 deg C',
            description:
              'Human body temperature, around 37 deg C, is the optimum for most human enzymes. Substrates collide with active sites at a high rate, and the enzyme is in its correct folded shape. Activity peaks at 100%.',
          },
          {
            id: 'bbs-en-hs-falling',
            x: 67,
            y: 55,
            label: 'Above optimum: activity falls fast',
            description:
              'Just past 40 deg C, heat starts to shake the protein out of its folded shape. The active site loses its fit. Activity falls steeply because fewer enzyme molecules can still bind starch.',
          },
          {
            id: 'bbs-en-hs-denatured',
            x: 80,
            y: 79,
            label: 'Denatured: 60 deg C and above',
            description:
              'At 60 deg C the enzyme has been DENATURED. The active site has changed shape so much that starch no longer fits. Cooling it down does not restore activity. The damage is permanent. This is why a biological washing powder loses power if the cycle is too hot.',
          },
        ],
      },
    },
    {
      id: 'bbs-en-ph-curve',
      title: 'pH Curve: Same Idea, Different Optimum for Each Enzyme',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare pepsin (stomach) and amylase (mouth). Both follow the same shaped curve, but the optimum pH is set by where in the gut each enzyme lives.',
      data: {
        viewBox: '0 0 600 400',
        svg: phCurveSvg,
        hotspots: [
          {
            id: 'bbs-en-hs-pepsin',
            x: 23,
            y: 22,
            label: 'Pepsin peaks at pH 2',
            description:
              'Pepsin works in the stomach, where parietal cells make hydrochloric acid and the pH is around 2. Pepsin is folded so that its active site holds its shape best in that acid. Move it to a neutral pH and it stops working.',
          },
          {
            id: 'bbs-en-hs-amylase',
            x: 52,
            y: 22,
            label: 'Amylase peaks at pH 7',
            description:
              'Amylase works in the mouth and small intestine, where the pH is near neutral (about 7). Drop the pH to 2 and amylase loses its shape, just as pepsin does at pH 7. Same chemistry, different optimum.',
          },
          {
            id: 'bbs-en-hs-shape-not-list',
            x: 50,
            y: 90,
            label: 'Different optimum, same idea',
            description:
              'A pH outside the optimum changes the bonds holding the active site together. The site loses its fit and the enzyme stops working. So "optimum pH" is not a single number for all enzymes; each enzyme is tuned to its workplace in the body.',
          },
          {
            id: 'bbs-en-hs-uk-test',
            x: 70,
            y: 90,
            label: 'NHS hydrogen breath test',
            description:
              'Lactose-intolerance testing at an NHS clinic measures hydrogen on the breath after a lactose drink. Patients lack enough lactase enzyme, so undigested lactose reaches gut bacteria and is fermented. The diagnostic builds on the same enzyme-and-substrate idea.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'bbs-en-worked-1',
      title: 'Heating amylase from 37 deg C to 60 deg C: what happens, step by step',
      steps: [
        {
          explanation:
            'Question: a Year 7 pupil in a Sheffield school lab adds amylase to starch and iodine. At 37 deg C the blue-black colour fades in 4 minutes as starch is broken into sugars. The same mix is run again at 60 deg C and the colour does not fade at all in 10 minutes. Use the lock-and-key idea to explain what has happened to the amylase.',
        },
        {
          explanation:
            'Step 1: at 37 deg C the amylase is in its correct folded shape. The active site fits a length of starch like a key in a lock. Starch and amylase bump into each other at a high rate and the bonds in starch are broken.',
        },
        {
          explanation:
            'Step 2: 37 deg C is the optimum temperature for human amylase. Activity is close to 100% of maximum, so the iodine colour fades within minutes as the starch is split into sugars (which do not show with iodine).',
        },
        {
          explanation:
            'Step 3: at 60 deg C the protein molecules vibrate so much that the bonds holding the folded shape together start to break. The active site loses its precise shape.',
        },
        {
          explanation:
            'Step 4: starch molecules can no longer fit into the misshapen active site. The amylase is now DENATURED. No reaction takes place, so the iodine colour stays blue-black.',
        },
        {
          explanation:
            'Step 5: cooling the mixture back to 37 deg C does NOT bring the activity back. The active site is permanently changed. The amylase is unusable.',
        },
        {
          explanation:
            'Final answer: at 60 deg C the amylase has been denatured; its active site has changed shape and starch no longer fits. This is why a biological washing powder works in a 40 deg C cycle but not in a 90 deg C boil-wash.',
          maths: '37 deg C = optimum; 60 deg C = denatured (permanent)',
        },
      ],
    },
    {
      id: 'bbs-en-worked-2',
      title: 'Pepsin vs amylase: same lock-and-key idea, different optimum pH',
      steps: [
        {
          explanation:
            'Question: pepsin works best at pH 2 in the stomach. Amylase works best at pH 7 in the mouth and small intestine. Both are protein enzymes. Explain why two enzymes need two different optimum pH values, using the lock-and-key model.',
        },
        {
          explanation:
            'Step 1: every enzyme is a protein folded into a 3D shape. The active site is a dent in that shape. The fold depends on bonds between parts of the protein. Many of those bonds are sensitive to pH.',
        },
        {
          explanation:
            'Step 2: pepsin lives in the stomach where parietal cells release hydrochloric acid to give a pH near 2. Pepsin is folded so that its bonds, and its active site, are most stable at pH 2.',
        },
        {
          explanation:
            'Step 3: amylase lives in the mouth, where saliva is close to pH 7. Amylase is folded so that its bonds and active site are most stable near pH 7. A different fold gives a different optimum.',
        },
        {
          explanation:
            'Step 4: move pepsin into pH 7 (or amylase into pH 2) and the bonds shift. The active site loses its fit. The substrate (protein for pepsin, starch for amylase) no longer slots in. The reaction stops.',
        },
        {
          explanation:
            'Step 5: this is the SAME idea as denaturing by heat. Either too much heat or the wrong pH can break the bonds that hold the active site in shape.',
        },
        {
          explanation:
            'Final answer: the optimum pH is set by where in the gut the enzyme works. Same lock-and-key principle; different lock shape, tuned to a different pH.',
          maths: 'pepsin optimum = pH 2 (stomach); amylase optimum = pH 7 (mouth)',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'bbs-en-q1',
      type: 'multiple-choice',
      stem: 'Which of these statements best describes an enzyme?',
      tier: 'core',
      options: [
        'A protein that speeds up a reaction in a living thing and is not used up',
        'A type of vitamin that is used up after one reaction',
        'A sugar that is broken down by digestive juices',
        'A mineral that the body must absorb every day',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'bbs-en-mis-enzymes-used-up',
    },
    {
      id: 'bbs-en-q2',
      type: 'multiple-choice',
      stem: 'In the LOCK and KEY model, what fits into the active site of an enzyme?',
      tier: 'core',
      options: [
        'Any molecule in the cell',
        'Only molecules that match the active site shape (the substrate)',
        'Only water molecules',
        'Any product of the reaction',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Each enzyme is shaped to fit one kind of molecule.',
      misconceptionId: 'bbs-en-mis-shape-not-key',
    },
    {
      id: 'bbs-en-q3',
      type: 'numeric-entry',
      stem: 'What is the optimum temperature, in degrees Celsius, of most human enzymes (the temperature at which activity is highest)?',
      tier: 'core',
      correctAnswer: 37,
      tolerance: 0.5,
      unit: 'deg C',
      xpValue: 10,
      hint: 'It is the normal internal temperature of a healthy human body.',
    },
    {
      id: 'bbs-en-q4',
      type: 'multiple-choice',
      stem: 'Which enzyme breaks down starch into smaller sugar molecules in the mouth?',
      tier: 'core',
      options: ['Pepsin', 'Lipase', 'Amylase', 'Catalase'],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Its name starts with "amyl", which links to starch.',
    },
    {
      id: 'bbs-en-q5',
      type: 'multiple-choice',
      stem: 'A pupil writes: "An enzyme is destroyed every time it reacts with a substrate." Is this correct?',
      tier: 'core',
      options: [
        'Yes; that is why we need to keep eating to replace them',
        'Yes; one enzyme molecule does exactly one reaction',
        'No; enzymes are not involved in chemical reactions at all',
        'No; the enzyme is unchanged after the reaction and binds the next substrate',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'bbs-en-mis-enzymes-used-up',
    },
    {
      id: 'bbs-en-q6',
      type: 'drag-order',
      stem: 'Put the stages of one amylase reaction cycle in the correct order, starting with the empty enzyme.',
      tier: 'core',
      items: [
        'Sugar products leave the active site; enzyme is reused',
        'Starch substrate slots into the active site of amylase',
        'Bonds in the starch break inside the active site',
        'Amylase has an empty active site, ready for starch',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
      hint: 'Bind, then break, then release.',
    },
    {
      id: 'bbs-en-q7',
      type: 'spot-misconception',
      stem: 'A pupil says: "Enzymes are only found in the digestive system, nowhere else in the body."',
      tier: 'core',
      statements: [
        {
          text: 'The pupil is right. Enzymes are a digestion idea only.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Every cell in the body uses enzymes for thousands of reactions. For example, catalase in liver cells breaks down hydrogen peroxide, well away from the gut.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bbs-en-mis-only-digestive',
    },
    // CONFIDENT (7)
    {
      id: 'bbs-en-q8',
      type: 'multiple-choice',
      stem: 'A school amylase-and-starch practical is run at five temperatures. Amylase activity (% of maximum) is: 10 deg C = 15%, 25 deg C = 55%, 37 deg C = 100%, 45 deg C = 70%, 60 deg C = 0%. Which conclusion best fits the data?',
      tier: 'confident',
      options: [
        'Activity always rises as temperature rises',
        'Activity stays at 100% across the whole range',
        'Activity peaks at the optimum (37 deg C) and falls steeply as the enzyme denatures above that',
        'Activity is highest at 60 deg C because that is the hottest reading',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'bbs-en-mis-hotter-faster',
    },
    {
      id: 'bbs-en-q9',
      type: 'numeric-entry',
      stem: 'Using the same data set (10 deg C = 15%, 25 deg C = 55%, 37 deg C = 100%, 45 deg C = 70%, 60 deg C = 0%), what is the DIFFERENCE in % activity between the optimum and 25 deg C? Give a whole number.',
      tier: 'confident',
      correctAnswer: 45,
      unit: '%',
      xpValue: 15,
      hint: '100% minus 55%.',
    },
    {
      id: 'bbs-en-q10',
      type: 'multiple-choice',
      stem: 'Pepsin works best at pH 2 in the stomach. Amylase works best at pH 7 in the mouth. Which statement BEST explains why they have different optimum pH values?',
      tier: 'confident',
      options: [
        'They are made of different vitamins',
        'Each enzyme has a folded shape and active site that is most stable at the pH of the part of the gut where it works',
        'Pepsin is a stronger enzyme than amylase at every pH',
        'pH does not affect enzymes; the textbook is wrong',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'bbs-en-mis-same-optimum',
    },
    {
      id: 'bbs-en-q11',
      type: 'multiple-choice',
      stem: 'Many British biological washing powders (Persil, Bold, Daz) include amylase, protease and lipase. The label says "best at 40 deg C, do not exceed 60 deg C". Why does a 60 deg C wash damage the cleaning power?',
      tier: 'confident',
      options: [
        'The water is too hot for the dirt to dissolve in',
        'The enzymes are washed away faster at higher temperatures',
        'The washing powder reacts with itself in hot water',
        'The enzymes are denatured: above 40 deg C their active sites change shape and they stop breaking down food and grease stains',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'bbs-en-mis-hotter-faster',
    },
    {
      id: 'bbs-en-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "Why does heating an enzyme above its optimum stop the reaction?"',
      tier: 'confident',
      steps: [
        'The active site of an enzyme has a precise 3D shape, held together by bonds between parts of the protein',
        'Heating the enzyme above its optimum gives those bonds enough energy to break and rearrange',
        null,
        'The substrate no longer fits into the active site, so no reaction takes place and the enzyme is described as denatured',
      ],
      missingStepIndex: 2,
      correctStep:
        'Without those bonds in the right place, the active site loses its precise shape',
      xpValue: 20,
    },
    {
      id: 'bbs-en-q13',
      type: 'numeric-entry',
      stem: 'In a UK biology-lab practical, 1 cm cubes of starch agar are dropped into amylase solutions at different pH values. At pH 7 (the optimum for amylase) the cube clears completely in 5 minutes. At pH 5 the same cube takes 20 minutes to clear. Calculate how many TIMES SLOWER the reaction is at pH 5 than at pH 7.',
      tier: 'confident',
      correctAnswer: 4,
      tolerance: 0.1,
      unit: 'times',
      xpValue: 20,
      hint: '20 minutes divided by 5 minutes.',
    },
    {
      id: 'bbs-en-q14',
      type: 'spot-misconception',
      stem: 'A pupil writes: "An enzyme and a hormone are basically the same thing because both are made by the body."',
      tier: 'confident',
      statements: [
        {
          text: 'The pupil is right. Hormones and enzymes do the same job.',
          isMisconception: true,
        },
        {
          text: 'The pupil is wrong. Enzymes are protein catalysts that speed up reactions. Hormones are chemical messengers (such as insulin or adrenaline) released into the blood. Different molecules, different jobs.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'bbs-en-mis-enzyme-equals-hormone',
    },
    // CHALLENGE (6)
    {
      id: 'bbs-en-q15',
      type: 'multiple-choice',
      stem: 'A pupil claims: "If a denatured enzyme is cooled back down, it will fold back into its correct shape and start working again." For most KS3 examples, this is wrong. Which is the best reason?',
      tier: 'challenge',
      options: [
        'The enzyme has evaporated, so there is nothing left',
        'The bonds that held the precise active site shape have been broken and rearranged; cooling does not put them back in the same places',
        'The substrate has changed, so the enzyme cannot react with it',
        'The enzyme moves to a different cell when cooled, taking it out of the test tube',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'bbs-en-mis-denaturing-reversible',
    },
    {
      id: 'bbs-en-q16',
      type: 'numeric-entry',
      stem: 'In a UK biology practical at a Birmingham school, 5 ml of amylase is added to 5 ml of 1% starch solution at 37 deg C. Iodine turns the mix blue-black, then fades to brown as starch is broken down. The colour fades in 4 minutes. The mass of starch in 5 ml of 1% solution is 50 mg. Calculate the rate of starch breakdown, in mg of starch per minute.',
      tier: 'challenge',
      correctAnswer: 12.5,
      tolerance: 0.2,
      unit: 'mg per minute',
      xpValue: 25,
      hint: '50 mg of starch divided by 4 minutes.',
    },
    {
      id: 'bbs-en-q17',
      type: 'numeric-entry',
      stem: 'The same school practical is repeated at 45 deg C. Now the iodine takes 8 minutes to fade. Using the same 50 mg of starch, work out the new rate in mg of starch per minute, then state by how many mg per minute the rate has FALLEN compared to 37 deg C. Give the fall as a positive number.',
      tier: 'challenge',
      correctAnswer: 6.25,
      tolerance: 0.2,
      unit: 'mg per minute',
      xpValue: 25,
      hint: 'New rate = 50 / 8 = 6.25 mg per minute. Fall = 12.5 - 6.25 = 6.25 mg per minute.',
    },
    {
      id: 'bbs-en-q18',
      type: 'multiple-choice',
      stem: 'A UK brewery uses enzymes from malted barley to break starch in grains into sugars before yeast ferments those sugars. The mash is held at 65 deg C, hotter than the human optimum of 37 deg C. What does this tell you about the brewery enzyme compared with human amylase?',
      tier: 'challenge',
      options: [
        'It is the same enzyme; it just works faster when warmer',
        'Enzymes do not have optimum temperatures; the brewers are guessing',
        'It is a different enzyme with a higher optimum temperature, because it is folded so its active site is stable at hotter temperatures',
        'The mash kills the enzyme, but works anyway because heat alone splits starch',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Different enzymes from different organisms can have different optima.',
    },
    {
      id: 'bbs-en-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is asked: "An NHS dietitian advises an athlete to chew bread thoroughly before swallowing. Use enzymes to explain why this helps digestion."',
      tier: 'challenge',
      steps: [
        'Saliva in the mouth contains the enzyme amylase',
        'Chewing breaks bread into small pieces and mixes them with saliva, increasing contact between starch and amylase',
        null,
        'More starch is broken into sugars in the mouth, so less reaches the gut as long chains and absorption later in the small intestine is easier',
      ],
      missingStepIndex: 2,
      correctStep:
        'With more contact between starch substrate and amylase active sites, the reaction proceeds at a fast rate inside the mouth',
      xpValue: 25,
    },
    {
      id: 'bbs-en-q20',
      type: 'numeric-entry',
      stem: 'A pupil in Leeds tests amylase activity at three temperatures and finds these % activities of maximum: 20 deg C = 30%, 37 deg C = 100%, 50 deg C = 20%. Calculate the MEAN % activity across these three temperatures, to one decimal place.',
      tier: 'challenge',
      correctAnswer: 50,
      tolerance: 0.2,
      unit: '%',
      xpValue: 25,
      hint: '(30 + 100 + 20) / 3 = 150 / 3 = 50.0%.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology examiner report June 2019 (8461/1F) Q05 on enzymes, which flags candidates "writing that enzymes are used up in the reaction they catalyse" (filestore.aqa.org.uk, accessed 2026-05-13). Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on enzymes (stem.org.uk/best, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-enzymes-used-up',
      description:
        'Enzymes are used up after one reaction and need to be replaced each time.',
      triggerAnswer: 'enzymes-used-up',
      correction:
        'Enzymes are CATALYSTS. They are unchanged after a reaction and can repeat the cycle thousands of times per minute. The substrate is changed; the enzyme is not.',
      reExplanation:
        'Picture amylase as a tiny machine with a starch-shaped slot. A starch chain slots in, the bonds break, sugars leave, and the machine is ready for the next starch. The enzyme is not destroyed by the reaction it speeds up. This is the difference between a CATALYST and a REACTANT. One enzyme molecule can keep working for hours, which is why so little of it is needed in the gut or in a biological washing powder.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question on temperature and enzymes (stem.org.uk/best, accessed 2026-05-13). Reinforced by Royal Society of Biology KS3 schools resource "Enzymes in everyday life" (rsb.org.uk/education, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-hotter-faster',
      description:
        'Heating an enzyme always speeds it up, so the hotter the temperature the faster the reaction.',
      triggerAnswer: 'hotter-faster',
      correction:
        'Activity rises with heat only up to the OPTIMUM. Above that, the enzyme denatures: its active site changes shape and activity falls fast, often to zero.',
      reExplanation:
        'Drawn as a curve, enzyme activity climbs as temperature rises from cold, peaks near the optimum (around 37 deg C for human enzymes), and then falls steeply. The fall happens because heat breaks the bonds that hold the active site in shape. Once those bonds are gone, the active site no longer fits the substrate. This is why a biological wash works at 40 deg C but a 60 deg C cycle damages the same enzymes.',
    },
    // Source: Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 4 on biochemistry, which reports KS3 pupils "stating that all enzymes share the same optimum temperature or pH". Reinforced by Edexcel GCSE Biology examiner report June 2020 (1BI0/1F) Q04 on enzymes and pH (qualifications.pearson.com, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-same-optimum',
      description:
        'All enzymes have the same optimum temperature and pH, around 37 deg C and pH 7.',
      triggerAnswer: 'same-optimum',
      correction:
        'Each enzyme is folded for the part of the body it works in. Pepsin peaks at pH 2 in the stomach; amylase peaks at pH 7 in the mouth. Brewery enzymes peak above 60 deg C.',
      reExplanation:
        'Optimum temperature and pH are set by where the enzyme works. A protein folded for the stomach holds together best in acid. A protein folded for the mouth holds together best near neutral. A brewery enzyme from a heat-tolerant source can hold its shape at 65 deg C. Putting the wrong enzyme in the wrong place breaks its bonds and stops the reaction. There is no single optimum that fits every enzyme.',
    },
    // Source: OCR GCSE Biology A examiner report June 2018 (J247/01) Q03 on enzymes, which flags candidates "treating denaturing as a temporary change that reverses on cooling" (ocr.org.uk, accessed 2026-05-13). Reinforced by CLEAPSS Science Publications PS76 "Practical advice on enzyme experiments at KS3 and KS4" (cleapss.org.uk, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-denaturing-reversible',
      description:
        'A denatured enzyme can refold and start working again once the mixture is cooled.',
      triggerAnswer: 'denaturing-reversible',
      correction:
        'For most KS3 examples, denaturing is permanent. The bonds holding the active site have been broken and rearranged. Cooling does not put them back where they were.',
      reExplanation:
        'Think of a complex folded paper crane. Heating it open does not just unfold the paper; it crumples the folds. Smoothing the paper back out (cooling) cannot return the crane to its original shape. The bonds that gave the enzyme its precise active site are gone. The substrate no longer fits, and no amount of cooling will rebuild the active site to the right shape for the reaction to start again.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on enzymes (stem.org.uk/best, accessed 2026-05-13). Reinforced by AQA GCSE Biology examiner report June 2021 (8461/2H) Q07 on enzymes outside digestion (filestore.aqa.org.uk, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-only-digestive',
      description:
        'Enzymes are only found in the digestive system; the rest of the body has none.',
      triggerAnswer: 'only-digestive',
      correction:
        'Every cell uses enzymes. Catalase in liver cells breaks down hydrogen peroxide. Enzymes in muscle cells release energy from glucose. The digestive enzymes are just the ones we meet first.',
      reExplanation:
        'Digestive enzymes are the easiest to teach because the gut is one tube full of them, but inside every body cell there are thousands of other enzymes doing thousands of other jobs. Liver catalase is a famous one: drop a chunk of liver into hydrogen peroxide and it fizzes because catalase speeds the breakdown of hydrogen peroxide into water and oxygen. Muscles, brain and immune cells all rely on enzymes too.',
    },
    // Source: Royal Society of Biology KS3 schools resource "Enzymes in everyday life" (rsb.org.uk/education, accessed 2026-05-13). Reinforced by Edexcel GCSE Biology examiner report June 2022 (1BI0/2F) Q04 on hormones vs enzymes (qualifications.pearson.com, accessed 2026-05-13).
    {
      id: 'bbs-en-mis-enzyme-equals-hormone',
      description:
        'An enzyme and a hormone are the same kind of molecule because both are made by the body.',
      triggerAnswer: 'enzyme-equals-hormone',
      correction:
        'Enzymes are protein catalysts that speed up reactions. Hormones are chemical messengers (such as insulin or adrenaline) that travel in the blood. Different molecules, different jobs.',
      reExplanation:
        'Both are made by living cells, but the jobs differ. Insulin is a hormone: pancreas cells release it into the blood to tell other cells to take in glucose. Amylase is an enzyme: salivary glands release it into the mouth to break starch into sugars. Hormones tell cells what to do. Enzymes do the chemical work inside or just outside the cell. Mixing the two ideas leads to wrong answers on signalling.',
    },
    // Source: CLEAPSS Science Publications PS76 "Practical advice on enzyme experiments at KS3 and KS4" (cleapss.org.uk, accessed 2026-05-13). Reinforced by Reiss & Tunnicliffe "Misconceptions in Biology" (Routledge, 2nd ed.) Chapter 4 on biochemistry.
    {
      id: 'bbs-en-mis-shape-not-key',
      description:
        'Any small molecule can fit into the active site of an enzyme; specificity is about size, not shape.',
      triggerAnswer: 'shape-not-key',
      correction:
        'Specificity is about SHAPE. The active site is a precise 3D pocket. Only a substrate that matches that shape can bind. A different molecule of the same size will not fit.',
      reExplanation:
        'Amylase splits starch, not protein, even though starch and protein chains are roughly the same size. The reason is that the active site of amylase is shaped to grip the bonds in starch. Protein chains have different bonds and a different overall shape, so they cannot slot in. This is why each digestive enzyme works on its own substrate: amylase on starch, pepsin on protein, lipase on fat.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
