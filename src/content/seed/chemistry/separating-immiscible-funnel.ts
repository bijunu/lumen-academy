import type { SkillNode } from '@/types/content'

export const immiscibleFunnel: SkillNode = {
  id: 'chemistry-separating-immiscible-funnel',
  title: 'Separating Immiscible Liquids with a Separating Funnel',
  description:
    'Use a separating funnel to split a pair of immiscible liquids such as oil and water into two clean layers. Identify each part of the funnel, predict the layer order from densities, and explain why gentle handling, careful venting and a precise tap close at the boundary all matter.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-distillation'],
  curriculum: {
    ks3Objective:
      'Two immiscible liquids (such as oil and water) form two layers; a separating funnel is used to collect one liquid at a time from the bottom tap.',
    awardingBodies: {
      aqa: '4.10.1 Separating mixtures; separating funnel for immiscible liquids (8462)',
      edexcel: 'Topic 1.42 Mixtures; separating immiscible liquids using a separating funnel (1CH0)',
      ocr: 'C2.1f Separate immiscible liquids using a separating funnel (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-if-scene-apparatus',
      title: 'The Separating Funnel: Parts and Their Jobs',
      type: 'labelled-diagram',
      instructions:
        'Click each marker on the separating funnel set-up to name the part and read what it does.',
      data: {
        viewBox: '0 0 360 260',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect x="0" y="0" width="360" height="260" fill="#FEF3C7"/><rect x="0" y="240" width="360" height="20" fill="#D6D3D1"/><g><rect x="155" y="18" width="50" height="12" rx="2" fill="#F8FAFC" stroke="#475569" stroke-width="1.2"/><text x="180" y="14" text-anchor="middle" font-size="7" fill="#1E3A8A">stopper</text></g><g><rect x="170" y="30" width="20" height="14" fill="none" stroke="#475569" stroke-width="1.2"/></g><g><path d="M 130 44 L 230 44 L 200 150 L 160 150 z" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 134 50 L 226 50 L 198 145 L 162 145 z" fill="#FBBF24" opacity="0.55"/><path d="M 145 95 L 215 95" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="3 2"/><path d="M 147 100 L 213 100 L 198 145 L 162 145 z" fill="#3B82F6" opacity="0.45"/><text x="240" y="80" font-size="7" fill="#92400E">upper layer (less dense)</text><text x="240" y="125" font-size="7" fill="#1E3A8A">lower layer (more dense)</text><text x="240" y="98" font-size="7" fill="#475569">boundary</text></g><g><rect x="172" y="150" width="16" height="22" fill="none" stroke="#475569" stroke-width="1.2"/><circle cx="195" cy="161" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><line x1="190" y1="161" x2="200" y2="161" stroke="#DC2626" stroke-width="1.2"/><text x="210" y="164" font-size="7" fill="#1E3A8A">glass tap</text></g><g><rect x="160" y="172" width="40" height="10" rx="2" fill="none" stroke="#475569" stroke-width="1.2"/></g><g><path d="M 140 200 L 220 200 L 210 240 L 150 240 z" fill="none" stroke="#475569" stroke-width="1.5"/><path d="M 144 205 L 216 205 L 207 235 L 153 235 z" fill="#DBEAFE" opacity="0.7"/><text x="180" y="225" text-anchor="middle" font-size="7" fill="#1E3A8A">conical flask</text></g><g><line x1="100" y1="100" x2="130" y2="100" stroke="#475569" stroke-width="1.2"/><rect x="80" y="92" width="20" height="16" fill="none" stroke="#475569" stroke-width="1.2"/><text x="60" y="105" font-size="7" fill="#1E3A8A">retort stand</text><rect x="78" y="60" width="2" height="180" fill="#475569"/></g></svg>',
        hotspots: [
          {
            id: 'csm-if-h-app-stopper',
            x: 50,
            y: 8,
            label: 'Stopper (loosen before running off)',
            description:
              'Seals the top while shaking, then has to be loosened or lifted before opening the tap so air can flow in and replace the liquid leaving the bottom.',
          },
          {
            id: 'csm-if-h-app-funnel',
            x: 50,
            y: 35,
            label: 'Pear-shaped glass body',
            description:
              'Holds the mixture. The wide top lets you swirl gently, the narrow bottom focuses the boundary between the two layers so it is easy to see.',
          },
          {
            id: 'csm-if-h-app-upper',
            x: 80,
            y: 30,
            label: 'Upper layer (less dense liquid)',
            description:
              'Sits on top. For an oil and water mix this is the oil, density about 0.92 g/cm cubed, lighter than water at 1.00 g/cm cubed.',
          },
          {
            id: 'csm-if-h-app-lower',
            x: 80,
            y: 48,
            label: 'Lower layer (more dense liquid)',
            description:
              'Sits at the bottom and leaves first through the tap. For an oil and water mix this is the water.',
          },
          {
            id: 'csm-if-h-app-tap',
            x: 55,
            y: 62,
            label: 'Glass tap',
            description:
              'Open slowly. Drain the lower layer into one beaker, close the tap exactly at the boundary, then collect the upper layer into a second clean beaker.',
          },
          {
            id: 'csm-if-h-app-flask',
            x: 50,
            y: 85,
            label: 'Conical flask underneath',
            description:
              'Catches the lower layer as it drains. A second clean conical flask is brought in to catch the upper layer once the boundary reaches the tap.',
          },
          {
            id: 'csm-if-h-app-stand',
            x: 20,
            y: 38,
            label: 'Retort stand and clamp',
            description:
              'Holds the funnel upright so the liquid can settle into two flat layers with a clear, level boundary.',
          },
        ],
      },
    },
    {
      id: 'csm-if-scene-procedure',
      title: 'Step by Step: Splitting Oil from Water',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow the procedure from pouring the mixture in to closing the tap at the boundary.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><path d="M 30 30 L 90 30 L 75 100 L 45 100 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 32 35 L 88 35 L 74 95 L 46 95 z" fill="#94A3B8" opacity="0.4"/><circle cx="40" cy="55" r="3" fill="#FBBF24"/><circle cx="55" cy="65" r="3" fill="#3B82F6"/><circle cx="70" cy="50" r="3" fill="#FBBF24"/><circle cx="60" cy="80" r="3" fill="#3B82F6"/><circle cx="48" cy="78" r="3" fill="#FBBF24"/><text x="60" y="115" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">1. POUR IN</text></g><g><path d="M 130 30 L 190 30 L 175 100 L 145 100 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 132 35 L 188 35 L 174 95 L 146 95 z" fill="#FBBF24" opacity="0.55"/><path d="M 140 65 L 180 65" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="3 2"/><path d="M 141 70 L 179 70 L 174 95 L 146 95 z" fill="#3B82F6" opacity="0.45"/><text x="160" y="115" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">2. SETTLE</text></g><g><path d="M 230 30 L 290 30 L 275 100 L 245 100 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 240 65 L 280 65" stroke="#1E3A8A" stroke-width="0.8" stroke-dasharray="3 2"/><path d="M 232 35 L 288 35 L 274 65 L 240 65 z" fill="#FBBF24" opacity="0.55"/><circle cx="260" cy="112" r="5" fill="#FFFFFF" stroke="#475569" stroke-width="1.2"/><line x1="255" y1="112" x2="265" y2="112" stroke="#DC2626" stroke-width="1.2"/><rect x="240" y="140" width="40" height="50" fill="none" stroke="#475569" stroke-width="1.2"/><rect x="244" y="155" width="32" height="32" fill="#3B82F6" opacity="0.45"/><text x="260" y="200" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">3. DRAIN LOWER</text></g><g><path d="M 30 130 L 90 130 L 75 195 L 45 195 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 32 135 L 88 135 L 74 190 L 46 190 z" fill="#FBBF24" opacity="0.55"/><text x="60" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">4. CLOSE AT BOUNDARY</text></g><g><path d="M 130 130 L 190 130 L 175 195 L 145 195 z" fill="none" stroke="#475569" stroke-width="1.2"/><rect x="140" y="200" width="40" height="14" fill="none" stroke="#475569" stroke-width="1.2"/><rect x="143" y="203" width="34" height="9" fill="#FBBF24" opacity="0.55"/><text x="160" y="225" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A" display="none">5. UPPER</text></g></svg>',
        hotspots: [
          {
            id: 'csm-if-h-proc-pour',
            x: 17,
            y: 25,
            label: '1. Pour the mixture in with the tap closed',
            description:
              'Tap closed, stopper out. Pour the oil and water mixture through the wide neck so nothing spills past the boundary later.',
          },
          {
            id: 'csm-if-h-proc-settle',
            x: 45,
            y: 45,
            label: '2. Let the two layers settle',
            description:
              'Wait a minute or two for the boundary to become flat and sharp. Cloudy emulsions need longer than clear layers.',
          },
          {
            id: 'csm-if-h-proc-vent',
            x: 80,
            y: 40,
            label: '3. Loosen the stopper, open the tap slowly',
            description:
              'Lift or loosen the stopper so air can replace the leaving liquid, then open the tap. The lower, denser layer drains into the first conical flask.',
          },
          {
            id: 'csm-if-h-proc-close',
            x: 17,
            y: 75,
            label: '4. Close the tap exactly at the boundary',
            description:
              'Watch the boundary fall to the tap. Close the tap the moment the last of the lower layer leaves, before any of the upper layer follows.',
          },
          {
            id: 'csm-if-h-proc-second',
            x: 45,
            y: 90,
            label: '5. Drain the upper layer into a clean flask',
            description:
              'Swap in a clean conical flask and open the tap again. The upper layer drains out as a second pure sample.',
          },
        ],
      },
    },
    {
      id: 'csm-if-scene-density',
      title: 'Density Decides Which Layer is Where',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how density, not "oily-ness", decides the layer order in the funnel.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><path d="M 30 30 L 110 30 L 90 130 L 50 130 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 32 35 L 108 35 L 89 80 L 51 80 z" fill="#FBBF24" opacity="0.55"/><path d="M 51 80 L 89 80 L 89 125 L 51 125 z" fill="#3B82F6" opacity="0.45"/><text x="70" y="22" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">OIL + WATER</text><text x="120" y="55" font-size="7" fill="#92400E">oil 0.92 g/cm cubed</text><text x="120" y="100" font-size="7" fill="#1E3A8A">water 1.00 g/cm cubed</text></g><g><path d="M 220 30 L 300 30 L 280 130 L 240 130 z" fill="none" stroke="#475569" stroke-width="1.2"/><path d="M 222 35 L 298 35 L 279 80 L 241 80 z" fill="#3B82F6" opacity="0.45"/><path d="M 241 80 L 279 80 L 279 125 L 241 125 z" fill="#94A3B8" opacity="0.8"/><text x="260" y="22" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">MERCURY + WATER</text><text x="160" y="55" font-size="7" fill="#1E3A8A">water 1.00 g/cm cubed</text><text x="160" y="100" font-size="7" fill="#475569">mercury 13.6 g/cm cubed</text></g><g><rect x="40" y="160" width="280" height="40" rx="3" fill="#FEF9C3" stroke="#92400E" stroke-width="0.8"/><text x="180" y="180" text-anchor="middle" font-size="8" font-weight="600" fill="#92400E">DENSITY DECIDES, NOT "OILY-NESS"</text><text x="180" y="193" text-anchor="middle" font-size="7" fill="#92400E">The denser liquid always sinks to the bottom of the funnel.</text></g></svg>',
        hotspots: [
          {
            id: 'csm-if-h-den-oilwater',
            x: 20,
            y: 50,
            label: 'Oil floats on water',
            description:
              'Olive oil has density 0.92 g/cm cubed, water is 1.00 g/cm cubed. The less dense oil sits on top, so water leaves the tap first.',
          },
          {
            id: 'csm-if-h-den-mercury',
            x: 75,
            y: 50,
            label: 'Water floats on mercury',
            description:
              'Mercury has density 13.6 g/cm cubed, about 15 times denser than water. Water now sits on top and mercury leaves the tap first.',
          },
          {
            id: 'csm-if-h-den-rule',
            x: 50,
            y: 82,
            label: 'The rule',
            description:
              'In any pair of immiscible liquids, the one with the higher density forms the lower layer and is drained off first through the tap.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-if-worked-1',
      title: 'Cleaning up an oil and water sample from a kitchen jar',
      steps: [
        {
          explanation:
            'Priya has a jar from her kitchen at home in Norwich that holds 250 cm cubed of olive oil floating on 200 cm cubed of water. She wants to recover the water so she can use the oil for cooking.',
        },
        {
          explanation:
            'Step 1: pour the mixture into a separating funnel with the tap closed and the stopper out. Clamp it to a retort stand so the funnel stays upright.',
        },
        {
          explanation:
            'Step 2: wait for the two layers to settle. Olive oil has density 0.92 g/cm cubed and water 1.00 g/cm cubed, so the oil floats on top and the water sits below.',
          maths: 'oil 0.92 g/cm cubed sits above water 1.00 g/cm cubed',
        },
        {
          explanation:
            'Step 3: check the total mass. Mass equals density times volume, so the oil contributes 0.92 times 250 equals 230 g and the water contributes 1.00 times 200 equals 200 g. The total mass in the funnel is 430 g.',
          maths: '0.92 x 250 + 1.00 x 200 = 230 + 200 = 430 g',
        },
        {
          explanation:
            'Step 4: lift the stopper so air can flow in, open the tap slowly, and drain the lower water layer into a clean conical flask. The boundary drops as the water leaves.',
        },
        {
          explanation:
            'Step 5: close the tap the moment the boundary reaches it, before any oil follows. Swap in a second clean conical flask and open the tap again to collect the oil.',
        },
        {
          explanation:
            'Priya now has two clean samples: 200 g of water in one flask and 230 g of olive oil in the other. Nothing has been destroyed, the total mass is still 430 g.',
        },
      ],
    },
    {
      id: 'csm-if-worked-2',
      title: 'Cleaning a diesel spill from a canal water sample',
      steps: [
        {
          explanation:
            'A volunteer on the Birmingham canal network collects a 500 cm cubed sample from the surface near a moored narrowboat. The sample is 100 cm cubed of diesel (density 0.83 g/cm cubed) floating on 400 cm cubed of canal water (density 1.00 g/cm cubed).',
        },
        {
          explanation:
            'Step 1: pour the sample into a clean separating funnel and clamp it upright. Diesel and water are immiscible, so they form two layers within a couple of minutes.',
        },
        {
          explanation:
            'Step 2: diesel is less dense than water, so it sits on top. Water forms the lower layer and will leave the tap first.',
          maths: 'diesel 0.83 g/cm cubed above water 1.00 g/cm cubed',
        },
        {
          explanation:
            'Step 3: loosen the stopper, open the tap slowly, and drain the canal water into a clean beaker for testing. Watch the boundary fall toward the tap.',
        },
        {
          explanation:
            'Step 4: close the tap exactly at the boundary. The mass of water collected is 1.00 times 400 equals 400 g. The diesel left in the funnel has mass 0.83 times 100 equals 83 g.',
          maths: 'water 1.00 x 400 = 400 g; diesel 0.83 x 100 = 83 g',
        },
        {
          explanation:
            'Step 5: swap in a second clean beaker and drain the diesel out. It is now separated from the canal water so the diesel can be sent for safe disposal.',
        },
        {
          explanation:
            'The separating funnel has not removed anything. It has just sorted the two immiscible liquids into two clean samples by using the boundary between their layers.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'csm-if-q1',
      type: 'multiple-choice',
      stem: 'Which pair of liquids would you separate using a separating funnel?',
      tier: 'core',
      options: [
        'Ethanol and water (which fully mix)',
        'Salt and water (a solution)',
        'Sugar and water (a solution)',
        'Olive oil and water (which form two layers)',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'csm-if-mis-miscible',
    },
    {
      id: 'csm-if-q2',
      type: 'multiple-choice',
      stem: 'Which liquid forms the lower layer in a separating funnel containing olive oil (0.92 g/cm cubed) and water (1.00 g/cm cubed)?',
      tier: 'core',
      options: [
        'The water, because it has the higher density',
        'The olive oil, because oil is always heavier',
        'Neither, the two liquids stay mixed',
        'Whichever was poured in first',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'csm-if-mis-oil-always-top',
    },
    {
      id: 'csm-if-q3',
      type: 'multiple-choice',
      stem: 'When draining the lower layer from a separating funnel, what should you do with the stopper at the top?',
      tier: 'core',
      options: [
        'Push it in firmly so nothing leaks',
        'The stopper has no effect on the flow',
        'Loosen or lift it so air can flow in to replace the liquid leaving the tap',
        'Remove the stopper and throw it away',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-if-mis-stopper-in',
    },
    {
      id: 'csm-if-q4',
      type: 'multiple-choice',
      stem: 'Which piece of glassware is usually placed under the tap to catch the first layer that drains out?',
      tier: 'core',
      options: [
        'A round-bottom flask',
        'A measuring cylinder',
        'A conical flask',
        'A gas jar',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-if-q5',
      type: 'spot-misconception',
      stem: 'Which statement about using a separating funnel for ethanol and water is the misconception?',
      tier: 'core',
      statements: [
        {
          text: 'Ethanol and water mix into a single clear liquid, so no boundary forms in the funnel.',
          isMisconception: false,
        },
        {
          text: 'A separating funnel cannot split ethanol from water, because they are miscible.',
          isMisconception: false,
        },
        {
          text: 'A separating funnel can split ethanol and water because ethanol always floats above water.',
          isMisconception: true,
        },
        {
          text: 'Fractional distillation is the right method for splitting ethanol from water.',
          isMisconception: false,
        },
      ],
      xpValue: 10,
      misconceptionId: 'csm-if-mis-miscible',
    },
    {
      id: 'csm-if-q6',
      type: 'multiple-choice',
      stem: 'What does it mean to call two liquids "immiscible"?',
      tier: 'core',
      options: [
        'They have the same density',
        'They do not mix and form two separate layers',
        'They both float on mercury',
        'They share the same boiling point',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'csm-if-q7',
      type: 'numeric-entry',
      stem: 'A separating funnel holds 250 cm cubed of olive oil at density 0.92 g/cm cubed on top of 200 cm cubed of water at density 1.00 g/cm cubed. What is the total mass of liquid in the funnel, in grams?',
      tier: 'confident',
      correctAnswer: 430,
      tolerance: 1,
      unit: 'g',
      xpValue: 15,
    },
    {
      id: 'csm-if-q8',
      type: 'numeric-entry',
      stem: 'A funnel contains 200 cm cubed of water below 300 cm cubed of olive oil. What is the mass of the water layer alone, in grams? (Water density is 1.00 g/cm cubed.)',
      tier: 'confident',
      correctAnswer: 200,
      tolerance: 1,
      unit: 'g',
      xpValue: 15,
    },
    {
      id: 'csm-if-q9',
      type: 'numeric-entry',
      stem: 'A mechanic in Birmingham collects 100 cm cubed of paraffin (0.80 g/cm cubed) floating on 100 cm cubed of water (1.00 g/cm cubed) in a settling tank. What is the total mass of liquid in the tank, in grams?',
      tier: 'confident',
      correctAnswer: 180,
      tolerance: 1,
      unit: 'g',
      xpValue: 15,
    },
    {
      id: 'csm-if-q10',
      type: 'missing-step',
      stem: 'Order the missing step in the separating funnel procedure.',
      tier: 'confident',
      steps: [
        'Pour the mixture into the funnel with the tap closed and the stopper out.',
        'Wait a minute or two for the two layers to settle into a sharp boundary.',
        null,
        'Open the tap slowly and drain the lower layer into a clean conical flask.',
        'Close the tap exactly at the boundary, then drain the upper layer into a second clean flask.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Loosen or lift the stopper so air can flow in to replace the liquid leaving the tap.',
      xpValue: 15,
      misconceptionId: 'csm-if-mis-stopper-in',
    },
    {
      id: 'csm-if-q11',
      type: 'drag-order',
      stem: 'Put the steps for using a separating funnel into the correct order.',
      tier: 'confident',
      items: [
        'Open the tap slowly and drain the lower layer into a conical flask',
        'Pour the mixture into the funnel with the tap closed',
        'Wait for the two layers to settle into a sharp boundary',
        'Loosen the stopper so air can flow in',
        'Close the tap exactly at the boundary and swap in a clean flask',
      ],
      correctOrder: [1, 2, 3, 0, 4],
      xpValue: 15,
    },
    {
      id: 'csm-if-q12',
      type: 'multiple-choice',
      stem: 'Why is shaking the separating funnel very hard usually a bad idea?',
      tier: 'confident',
      options: [
        'It would break the glass tap',
        'It always swaps the order of the two layers',
        'It would warm the liquid above its boiling point',
        'It can form a cloudy emulsion that delays the layers settling',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-if-mis-shake-hard',
    },
    {
      id: 'csm-if-q13',
      type: 'multiple-choice',
      stem: 'A fish-and-chip-shop manager collects 500 cm cubed of used frying oil mixed with condensate water from the extractor hood. Why does a separating funnel suit this job?',
      tier: 'confident',
      options: [
        'Frying oil and water are immiscible, so they form two layers that can be drained off',
        'The oil and water dissolve in each other, so a funnel mixes them further',
        'The hot oil evaporates first, leaving water in the funnel',
        'The funnel filters tiny chip crumbs out of the water',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'csm-if-q14',
      type: 'numeric-entry',
      stem: 'On a North Sea offshore platform, a 1000 cm cubed settling vessel sample holds 400 cm cubed of crude oil (density 0.85 g/cm cubed) above 600 cm cubed of sea water (density 1.03 g/cm cubed). What is the total mass of liquid in the vessel, in grams?',
      tier: 'confident',
      correctAnswer: 958,
      tolerance: 1,
      unit: 'g',
      xpValue: 15,
    },
    {
      id: 'csm-if-q15',
      type: 'multiple-choice',
      stem: 'After closing the tap at the boundary, your friend says, "let some of the lower layer leak through too, just to be safe". Why is this a poor idea?',
      tier: 'challenge',
      options: [
        'You lose some of the upper layer into the lower flask, so neither sample is clean',
        'It makes the funnel explode',
        'It changes the density of the lower layer',
        'It reacts the two liquids together',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'csm-if-mis-extra-leak',
    },
    {
      id: 'csm-if-q16',
      type: 'numeric-entry',
      stem: 'A demonstration funnel holds 10 cm cubed of mercury (density 13.6 g/cm cubed) and 10 cm cubed of water (density 1.00 g/cm cubed). What is the total mass of liquid in the funnel, in grams?',
      tier: 'challenge',
      correctAnswer: 146,
      tolerance: 1,
      unit: 'g',
      xpValue: 20,
      misconceptionId: 'csm-if-mis-oil-always-top',
    },
    {
      id: 'csm-if-q17',
      type: 'multiple-choice',
      stem: 'In the mercury and water funnel above, which liquid leaves the tap first when you open it?',
      tier: 'challenge',
      options: [
        'The water, because liquids always drain in pouring order',
        'A 50:50 mix, because they have similar volumes',
        'Neither, mercury cannot flow through a glass tap',
        'The mercury, because it is denser and forms the lower layer',
      ],
      correctIndex: 3,
      xpValue: 20,
      misconceptionId: 'csm-if-mis-oil-always-top',
    },
    {
      id: 'csm-if-q18',
      type: 'spot-misconception',
      stem: 'Which of these statements about a separating funnel is the misconception?',
      tier: 'challenge',
      statements: [
        {
          text: 'You should loosen the stopper before opening the tap, so air can replace the leaving liquid.',
          isMisconception: false,
        },
        {
          text: 'Density of the two liquids decides the layer order, not how "oily" they look.',
          isMisconception: false,
        },
        {
          text: 'A separating funnel works on miscible liquids such as ethanol and water by forming two layers.',
          isMisconception: true,
        },
        {
          text: 'Close the tap exactly at the boundary to keep both samples clean.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'csm-if-mis-miscible',
    },
    {
      id: 'csm-if-q19',
      type: 'numeric-entry',
      stem: 'A mechanic settling tank in Birmingham holds 200 cm cubed of petrol (density 0.74 g/cm cubed) above 300 cm cubed of water (density 1.00 g/cm cubed). What is the mass, in grams, of the petrol layer alone?',
      tier: 'challenge',
      correctAnswer: 148,
      tolerance: 1,
      unit: 'g',
      xpValue: 20,
      misconceptionId: 'csm-if-mis-density-viscosity',
    },
    {
      id: 'csm-if-q20',
      type: 'multiple-choice',
      stem: 'A pupil shakes a funnel of salad-dressing oil and vinegar very hard and then opens the tap straight away. The drained "vinegar" looks cloudy and orange. What went wrong?',
      tier: 'challenge',
      options: [
        'Hard shaking changed the density of the vinegar',
        'Hard shaking made an emulsion that had not had time to separate, so oil droplets left with the vinegar',
        'The funnel reacted with the vinegar',
        'Vinegar and oil are actually miscible after shaking',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'csm-if-mis-shake-hard',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F), Q06 on separating immiscible liquids: candidates regularly wrote that "oil is always on top of water" without referring to density, missing that the rule depends on which liquid is denser. Reinforced by RSC Education CPD article "Teaching pupils to separate mixtures" (David Paterson, 2020-09-21).
    {
      id: 'csm-if-mis-oil-always-top',
      description:
        'Oil always floats on water, so in any pair of liquids the oily one is on top.',
      triggerAnswer: 'oil-always-top',
      correction:
        'In fact density decides the layer order. Vegetable oil is less dense than water and floats. Mercury is much denser than water (13.6 g/cm cubed vs 1.00) and water floats on top of it.',
      reExplanation:
        'The denser liquid always sinks because gravity pulls more strongly on each cubic centimetre. For oil and water that is the water below. For water and mercury that is the mercury below. Pair up any two immiscible liquids and look up their densities to predict the order.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q07 on separating funnels: a recurring slip was that "shaking harder gives a cleaner split", missing that vigorous shaking forms an emulsion that delays settling. Reinforced by CGP KS3 Chemistry Year 7 separating mixtures common-mistake callouts.
    {
      id: 'csm-if-mis-shake-hard',
      description:
        'Shaking the separating funnel as hard as possible makes the two liquids split faster.',
      triggerAnswer: 'shake-hard',
      correction:
        'In fact hard shaking forms an emulsion of tiny droplets that takes much longer to settle into two clear layers. Gentle inversion with venting works better.',
      reExplanation:
        'Two immiscible liquids only separate cleanly once the small droplets have had time to drift back together. Hard shaking breaks the liquid into so many tiny droplets that the boundary stays cloudy for minutes or more. A gentle invert-and-vent move mixes the layers enough to extract the substance you want, then they re-settle in under a minute.',
    },
    // Source: AQA GCSE Chemistry practical handbook 2019 on separating funnel technique: candidates often described leaving the stopper in while opening the tap, missing that this creates a partial vacuum and stops the flow. Reinforced by Best Evidence Science Teaching (BEST) KS3 separating-mixtures diagnostic question set.
    {
      id: 'csm-if-mis-stopper-in',
      description:
        'You should keep the stopper firmly in place while opening the tap so nothing escapes through the top.',
      triggerAnswer: 'stopper-in',
      correction:
        'In fact the stopper has to be loosened or lifted so air can flow into the funnel as the liquid leaves the tap. Otherwise the flow stalls.',
      reExplanation:
        'When liquid leaves the bottom of a sealed funnel, the space above it would become a partial vacuum and air pressure outside would push back on the liquid, stalling the flow. Lifting the stopper lets fresh air slip in to replace the leaving liquid, so the lower layer drains smoothly under gravity.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q08 on choosing a separation method: candidates often wrote that a separating funnel can separate miscible liquids such as ethanol and water, missing the requirement that the liquids form two layers. Reinforced by OCR Gateway Chemistry examiner report June 2021 (J248).
    {
      id: 'csm-if-mis-miscible',
      description:
        'A separating funnel can be used to split any pair of liquids, including ethanol and water.',
      triggerAnswer: 'miscible',
      correction:
        'In fact a separating funnel only works for immiscible liquids that form two layers. Miscible liquids such as ethanol and water mix completely, so there is no boundary to split.',
      reExplanation:
        'Pour ethanol into water and the two flow together into a single clear liquid; no second layer ever forms. With no boundary the tap of the funnel cannot tell one liquid from the other. To split ethanol from water you need fractional distillation, which uses the different boiling points instead.',
    },
    // Source: David Paterson, "Teaching pupils to separate mixtures", RSC Education CPD article (2020-09-21): pupils often expect to rush the separation rather than letting the boundary settle, missing that an unsettled emulsion gives a dirty split. Reinforced by AQA GCSE Chemistry practical handbook 2019.
    {
      id: 'csm-if-mis-rush-settle',
      description:
        'You can open the tap straight after pouring the mixture in, without waiting for the layers to settle.',
      triggerAnswer: 'rush-settle',
      correction:
        'In fact the boundary needs a minute or two to become sharp. A still-cloudy emulsion lets droplets of the upper layer drain out with the lower layer, so neither sample is clean.',
      reExplanation:
        'Just after pouring, the two liquids hold tiny droplets of each other. Those droplets need time to drift up or down to their own layer. Open the tap too soon and the lower flask catches a mix instead of a clean lower layer. Patience for a minute or two means a sharp boundary, and a clean split.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q06 on separating funnels: candidates often described leaving a "bit extra" of the lower layer to be safe, missing that this carries part of the upper layer into the lower flask. Reinforced by CGP KS3 Chemistry Year 7 separating mixtures common-mistake callouts.
    {
      id: 'csm-if-mis-extra-leak',
      description:
        'It is safer to let a small amount of the lower layer leak through after the boundary, just to be sure none is left behind.',
      triggerAnswer: 'extra-leak',
      correction:
        'In fact this lets some of the upper layer drain out too, so the lower flask is no longer pure. Close the tap exactly at the boundary.',
      reExplanation:
        'Once the lower layer has gone, the very next thing through the tap is the upper layer. Any extra time with the tap open carries oil into the water flask, or whichever upper liquid you have. The trick is to watch the falling boundary and close the tap the moment it reaches the glass tap.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q08 on properties of liquids: candidates often used "density" and "viscosity" as if they meant the same thing, missing that one decides layer order and the other decides flow rate. Reinforced by RSC Education article "Density, viscosity and the floating egg" (Declan Fleming, 2019-11-18).
    {
      id: 'csm-if-mis-density-viscosity',
      description:
        'Density and viscosity are the same property of a liquid; either can be used to predict which layer is on top in a separating funnel.',
      triggerAnswer: 'density-viscosity',
      correction:
        'In fact density (g/cm cubed) decides which layer floats on which. Viscosity is a measure of how runny a liquid is, and decides only how slowly the layer flows out of the tap.',
      reExplanation:
        'Honey is much more viscous than water but still sinks to the bottom because it is denser. Crude oil is fairly viscous yet floats on water because its density is lower. To predict layer order, only compare densities. To predict how slowly the lower layer will drain, look at viscosity instead.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
