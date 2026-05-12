import type { SkillNode } from '@/types/content'

export const halogenDisplacement: SkillNode = {
  id: 'chemistry-periodic-table-halogen-displacement',
  title: 'Halogen Displacement Reactions',
  description:
    'A more reactive halogen displaces a less reactive halogen from a solution of its salt. Reactivity order in Group 7 (for the halogens you can safely meet in a UK school lab): chlorine > bromine > iodine. Predict the full 3x3 displacement grid for chlorine, bromine and iodine added to potassium chloride, potassium bromide and potassium iodide solutions, and write the word equation for any reaction that happens. Spot why iodine added to potassium bromide does nothing, and why fluorine never appears on the school bench.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-periodic-table',
  zoneName: 'Periodic Table',
  tier: 'confident',
  prerequisites: ['chemistry-periodic-table-group-1-7'],
  curriculum: {
    ks3Objective:
      'Displacement reactions of halogens; reactivity order within Group 7; a more reactive halogen displaces a less reactive one from compounds (qualitative, word equations).',
    awardingBodies: {
      aqa: '4.1.2.6 Group 7 halogens: displacement reactions with halide salts (8462)',
      edexcel: 'Topic 1.37 Group 7 halogens: displacement reactions (1CH0)',
      ocr: 'C1.2d Group 7 halogens: trends and displacement reactions (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'cpt-disp-scene-1',
      title: 'The Group 7 Reactivity Order',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see the order of reactivity for the halogens you meet in a UK school lab. The further up Group 7 you go, the more reactive the element.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">GROUP 7 REACTIVITY (HALOGENS)</text><g><rect x="120" y="38" width="80" height="32" fill="#E5E7EB" stroke="#475569" stroke-width="1" stroke-dasharray="3 2"/><text x="160" y="55" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">fluorine</text><text x="160" y="65" text-anchor="middle" font-size="7" fill="#475569">F (not used in school)</text></g><g><rect x="120" y="80" width="80" height="32" fill="#BBF7D0" stroke="#14532D" stroke-width="1"/><text x="160" y="97" text-anchor="middle" font-size="10" font-weight="700" fill="#14532D">chlorine</text><text x="160" y="107" text-anchor="middle" font-size="7" fill="#14532D">Cl, pale green gas</text></g><g><rect x="120" y="122" width="80" height="32" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="1"/><text x="160" y="139" text-anchor="middle" font-size="10" font-weight="700" fill="#7F1D1D">bromine</text><text x="160" y="149" text-anchor="middle" font-size="7" fill="#7F1D1D">Br, red-brown liquid</text></g><g><rect x="120" y="164" width="80" height="32" fill="#D8B4FE" stroke="#581C87" stroke-width="1"/><text x="160" y="181" text-anchor="middle" font-size="10" font-weight="700" fill="#581C87">iodine</text><text x="160" y="191" text-anchor="middle" font-size="7" fill="#581C87">I, grey-black solid</text></g><g><line x1="40" y1="50" x2="40" y2="200" stroke="#1E3A8A" stroke-width="1.4"/><polygon points="40,200 36,190 44,190" fill="#1E3A8A"/><text x="22" y="55" text-anchor="middle" font-size="8" fill="#1E3A8A">most</text><text x="22" y="64" text-anchor="middle" font-size="8" fill="#1E3A8A">reactive</text><text x="22" y="190" text-anchor="middle" font-size="8" fill="#1E3A8A">least</text><text x="22" y="199" text-anchor="middle" font-size="8" fill="#1E3A8A">reactive</text></g><text x="160" y="220" text-anchor="middle" font-size="8" fill="#1E3A8A">In school we test Cl, Br and I only. F is too dangerous.</text></svg>',
        hotspots: [
          {
            id: 'cpt-disp-h-fluorine',
            x: 50,
            y: 22,
            label: 'Fluorine: never on the school bench',
            description:
              'Fluorine is the most reactive halogen of all. It attacks glass and skin almost instantly and is far too dangerous for a UK school lab. You learn its position from the table only.',
          },
          {
            id: 'cpt-disp-h-chlorine',
            x: 50,
            y: 40,
            label: 'Chlorine: the most reactive of the three you can use',
            description:
              'Chlorine is a pale green gas at room temperature. It is more reactive than bromine and iodine, so it can push either of them out of a halide salt solution.',
          },
          {
            id: 'cpt-disp-h-bromine',
            x: 50,
            y: 58,
            label: 'Bromine: middle of the three',
            description:
              'Bromine is a red-brown liquid that gives off red-brown vapour. It is less reactive than chlorine but more reactive than iodine, so it can displace iodine but cannot displace chlorine.',
          },
          {
            id: 'cpt-disp-h-iodine',
            x: 50,
            y: 76,
            label: 'Iodine: least reactive of the three',
            description:
              'Iodine is a grey-black solid that gives a brown solution in water and a purple vapour. It is the least reactive of the three school halogens, so it cannot push chlorine or bromine out of any salt.',
          },
          {
            id: 'cpt-disp-h-rule',
            x: 14,
            y: 90,
            label: 'The displacement rule',
            description:
              'A halogen higher up Group 7 displaces a halogen lower down from a solution of its salt. So chlorine displaces both bromine and iodine, bromine displaces iodine only, and iodine displaces nothing.',
          },
        ],
      },
    },
    {
      id: 'cpt-disp-scene-2',
      title: 'The 3 by 3 Displacement Grid',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to read the result of adding chlorine, bromine or iodine water to potassium chloride, potassium bromide or potassium iodide solution.',
      data: {
        viewBox: '0 0 360 260',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect x="0" y="0" width="360" height="260" fill="#F8FAFC"/><text x="180" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">3 BY 3 DISPLACEMENT GRID</text><g stroke="#475569" stroke-width="0.8"><line x1="100" y1="40" x2="340" y2="40"/><line x1="100" y1="90" x2="340" y2="90"/><line x1="100" y1="140" x2="340" y2="140"/><line x1="100" y1="190" x2="340" y2="190"/><line x1="100" y1="40" x2="100" y2="190"/><line x1="180" y1="40" x2="180" y2="190"/><line x1="260" y1="40" x2="260" y2="190"/><line x1="340" y1="40" x2="340" y2="190"/></g><text x="140" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">KCl</text><text x="220" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">KBr</text><text x="300" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#475569">KI</text><text x="80" y="70" text-anchor="end" font-size="9" font-weight="700" fill="#14532D">Cl2</text><text x="80" y="120" text-anchor="end" font-size="9" font-weight="700" fill="#7F1D1D">Br2</text><text x="80" y="170" text-anchor="end" font-size="9" font-weight="700" fill="#581C87">I2</text><rect x="100" y="40" width="80" height="50" fill="#F3F4F6"/><text x="140" y="70" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><rect x="180" y="40" width="80" height="50" fill="#FCA5A5" opacity="0.6"/><text x="220" y="62" text-anchor="middle" font-size="7" font-weight="600" fill="#7F1D1D">turns red-brown</text><text x="220" y="74" text-anchor="middle" font-size="7" fill="#7F1D1D">(Br2 made)</text><rect x="260" y="40" width="80" height="50" fill="#D8B4FE" opacity="0.7"/><text x="300" y="62" text-anchor="middle" font-size="7" font-weight="600" fill="#581C87">turns brown</text><text x="300" y="74" text-anchor="middle" font-size="7" fill="#581C87">(I2 made)</text><rect x="100" y="90" width="80" height="50" fill="#F3F4F6"/><text x="140" y="120" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><rect x="180" y="90" width="80" height="50" fill="#F3F4F6"/><text x="220" y="120" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><rect x="260" y="90" width="80" height="50" fill="#D8B4FE" opacity="0.7"/><text x="300" y="112" text-anchor="middle" font-size="7" font-weight="600" fill="#581C87">turns brown</text><text x="300" y="124" text-anchor="middle" font-size="7" fill="#581C87">(I2 made)</text><rect x="100" y="140" width="80" height="50" fill="#F3F4F6"/><text x="140" y="170" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><rect x="180" y="140" width="80" height="50" fill="#F3F4F6"/><text x="220" y="170" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><rect x="260" y="140" width="80" height="50" fill="#F3F4F6"/><text x="300" y="170" text-anchor="middle" font-size="7" fill="#475569">no reaction</text><text x="180" y="215" text-anchor="middle" font-size="8" fill="#1E3A8A">Rows: halogen added (top to bottom).</text><text x="180" y="227" text-anchor="middle" font-size="8" fill="#1E3A8A">Columns: halide salt in solution (left to right).</text><text x="180" y="245" text-anchor="middle" font-size="8" font-weight="600" fill="#7C2D12">3 boxes react, 6 boxes do nothing.</text></svg>',
        hotspots: [
          {
            id: 'cpt-disp-h-cl-kcl',
            x: 38,
            y: 22,
            label: 'Cl2 + KCl: no reaction',
            description:
              'Chlorine cannot displace itself from potassium chloride. The chloride in solution is already the same halogen, so nothing changes and the liquid stays pale.',
          },
          {
            id: 'cpt-disp-h-cl-kbr',
            x: 60,
            y: 22,
            label: 'Cl2 + KBr: solution turns red-brown',
            description:
              'Chlorine is more reactive than bromine, so it pushes bromine out of potassium bromide. The colourless KBr solution turns red-brown as bromine is freed.',
          },
          {
            id: 'cpt-disp-h-cl-ki',
            x: 83,
            y: 22,
            label: 'Cl2 + KI: solution turns brown',
            description:
              'Chlorine is more reactive than iodine too, so it displaces iodine from potassium iodide. The colourless KI solution turns brown as iodine is freed.',
          },
          {
            id: 'cpt-disp-h-br-ki',
            x: 83,
            y: 44,
            label: 'Br2 + KI: solution turns brown',
            description:
              'Bromine is more reactive than iodine, so it can still push iodine out of potassium iodide. Red-brown bromine water added to colourless KI gives the brown of iodine.',
          },
          {
            id: 'cpt-disp-h-br-kcl',
            x: 38,
            y: 44,
            label: 'Br2 + KCl: no reaction',
            description:
              'Bromine is less reactive than chlorine, so it cannot push chlorine out of potassium chloride. Add bromine to KCl and the red-brown of bromine simply sits in solution.',
          },
          {
            id: 'cpt-disp-h-iodine-row',
            x: 60,
            y: 65,
            label: 'I2 row: no reactions',
            description:
              'Iodine is the least reactive of the three school halogens. It cannot displace chlorine or bromine, and it cannot displace itself, so every box in the iodine row reads no reaction.',
          },
        ],
      },
    },
    {
      id: 'cpt-disp-scene-3',
      title: 'Reading a Single Test Tube',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow what happens in a single test tube as chlorine water is dripped into colourless potassium iodide.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#EFF6FF"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#1E3A8A">CHLORINE WATER + POTASSIUM IODIDE</text><g><rect x="60" y="50" width="60" height="160" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><rect x="60" y="120" width="60" height="90" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><text x="90" y="40" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">START</text><text x="90" y="170" text-anchor="middle" font-size="7" fill="#475569">colourless</text><text x="90" y="182" text-anchor="middle" font-size="7" fill="#475569">KI solution</text></g><g><rect x="180" y="50" width="60" height="160" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><rect x="180" y="120" width="60" height="90" rx="6" fill="#92400E" opacity="0.55" stroke="#7C2D12" stroke-width="1.2"/><text x="210" y="40" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">AFTER ADDING Cl2 WATER</text><text x="210" y="170" text-anchor="middle" font-size="7" font-weight="600" fill="#FFFBEB">brown</text><text x="210" y="182" text-anchor="middle" font-size="7" font-weight="600" fill="#FFFBEB">solution</text></g><g><path d="M125 150 Q150 130 175 150" fill="none" stroke="#1E3A8A" stroke-width="1.4"/><polygon points="175,150 168,144 168,156" fill="#1E3A8A"/></g><text x="160" y="220" text-anchor="middle" font-size="8" fill="#1E3A8A">Word equation: chlorine + potassium iodide -&gt; potassium chloride + iodine</text><text x="160" y="232" text-anchor="middle" font-size="7" fill="#475569">The brown colour is the iodine that has been pushed out of solution.</text></svg>',
        hotspots: [
          {
            id: 'cpt-disp-h-start',
            x: 28,
            y: 30,
            label: 'Start: a colourless KI solution',
            description:
              'Potassium iodide solution looks like water. There is no visible colour because the iodide ions are colourless. You need a clear starting point so any colour change later is obvious.',
          },
          {
            id: 'cpt-disp-h-add',
            x: 50,
            y: 60,
            label: 'Add a few drops of chlorine water',
            description:
              'Chlorine water is pale yellow-green. You only need a few drops because chlorine is very reactive. As you swirl the tube, the colour change should start almost at once.',
          },
          {
            id: 'cpt-disp-h-end',
            x: 70,
            y: 56,
            label: 'End: a brown solution',
            description:
              'The tube turns brown. The brown colour is iodine that chlorine has pushed out of the potassium iodide. The other product, potassium chloride, stays dissolved and colourless.',
          },
          {
            id: 'cpt-disp-h-word',
            x: 50,
            y: 88,
            label: 'Word equation for the reaction',
            description:
              'chlorine + potassium iodide -&gt; potassium chloride + iodine. The more reactive halogen ends up in the salt (potassium chloride); the less reactive halogen is freed (iodine).',
          },
        ],
      },
    },
    {
      id: 'cpt-disp-scene-4',
      title: 'When Nothing Happens: Iodine on Potassium Bromide',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see why iodine added to potassium bromide gives no displacement reaction at all.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FFFBEB"/><text x="160" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#92400E">IODINE WATER + POTASSIUM BROMIDE</text><g><rect x="60" y="50" width="60" height="160" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><rect x="60" y="120" width="60" height="90" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><text x="90" y="40" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">START</text><text x="90" y="170" text-anchor="middle" font-size="7" fill="#475569">colourless</text><text x="90" y="182" text-anchor="middle" font-size="7" fill="#475569">KBr solution</text></g><g><rect x="180" y="50" width="60" height="160" rx="6" fill="#F3F4F6" stroke="#475569" stroke-width="1.2"/><rect x="180" y="120" width="60" height="90" rx="6" fill="#A78BFA" opacity="0.45" stroke="#581C87" stroke-width="1.2"/><text x="210" y="40" text-anchor="middle" font-size="8" font-weight="600" fill="#1E3A8A">AFTER ADDING I2 WATER</text><text x="210" y="170" text-anchor="middle" font-size="7" font-weight="600" fill="#581C87">faint brown</text><text x="210" y="182" text-anchor="middle" font-size="7" font-weight="600" fill="#581C87">(just I2 dissolved)</text></g><g><path d="M125 150 Q150 130 175 150" fill="none" stroke="#581C87" stroke-width="1.4"/><polygon points="175,150 168,144 168,156" fill="#581C87"/></g><text x="160" y="220" text-anchor="middle" font-size="9" font-weight="700" fill="#7C2D12">No reaction.</text><text x="160" y="232" text-anchor="middle" font-size="7" fill="#475569">Iodine is less reactive than bromine, so bromine stays put in KBr.</text></svg>',
        hotspots: [
          {
            id: 'cpt-disp-h-iodine-added',
            x: 50,
            y: 60,
            label: 'Iodine water dripped in',
            description:
              'Iodine water is faintly brown by itself. So even before any reaction, the colour shifts a little. The question is whether any new iodine is being released by displacement, or only the iodine you added is visible.',
          },
          {
            id: 'cpt-disp-h-no-react',
            x: 70,
            y: 56,
            label: 'No new colour appears',
            description:
              'There is no flash of red-brown bromine vapour. The faint brown is just the iodine you added still in solution. So there is no displacement: iodine has NOT pushed bromine out of KBr.',
          },
          {
            id: 'cpt-disp-h-why',
            x: 50,
            y: 88,
            label: 'Why not? Iodine is less reactive than bromine',
            description:
              'The rule says a more reactive halogen displaces a less reactive one. Iodine is below bromine in Group 7, so iodine is the less reactive of the two. It cannot push bromine out of its salt.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cpt-disp-worked-1',
      title: 'Predict whether chlorine displaces iodine from potassium iodide',
      steps: [
        {
          explanation:
            'Question: A few drops of chlorine water are added to a test tube of colourless potassium iodide solution. (a) Does a reaction happen? (b) What colour does the tube turn? (c) Write the word equation.',
        },
        {
          explanation:
            'Step 1: write down the reactivity order for the school halogens. chlorine > bromine > iodine. Chlorine sits ABOVE iodine, so chlorine is the more reactive of the two.',
        },
        {
          explanation:
            'Step 2: apply the displacement rule. A more reactive halogen displaces a less reactive halogen from a solution of its salt. So chlorine should push iodine out of potassium iodide.',
        },
        {
          explanation:
            'Step 3: predict the colour change. Iodine in water gives a brown solution. So the colourless KI tube should turn brown as iodine is set free.',
        },
        {
          explanation:
            'Step 4: write the word equation. The more reactive halogen ends up in the salt (potassium chloride); the displaced halogen is set free (iodine).',
          maths: 'chlorine + potassium iodide -> potassium chloride + iodine',
        },
        {
          explanation:
            'Step 5: state the answer. (a) Yes, a reaction happens. (b) The tube turns brown. (c) chlorine + potassium iodide -> potassium chloride + iodine.',
        },
      ],
    },
    {
      id: 'cpt-disp-worked-2',
      title: 'Decide whether iodine reacts with potassium bromide',
      steps: [
        {
          explanation:
            'Question: A spatula of iodine is shaken with potassium bromide solution. (a) Does a reaction happen? (b) Justify your answer with the reactivity order. (c) Write a word equation or state "no reaction".',
        },
        {
          explanation:
            'Step 1: write down the reactivity order. chlorine > bromine > iodine. Iodine sits BELOW bromine.',
        },
        {
          explanation:
            'Step 2: identify which halogen is more reactive in this pair. Bromine is in the KBr salt; iodine is the one being added. The MORE reactive of the two is bromine (already in the salt), so the added halogen (iodine) is less reactive.',
        },
        {
          explanation:
            'Step 3: apply the rule. A halogen can only push out a less reactive halogen. The added halogen here is less reactive, so it has no power to displace anything. No reaction.',
        },
        {
          explanation:
            'Step 4: explain the colour observation. The tube may look faintly brown, but that is only the iodine you added dissolving in water. No new red-brown bromine appears, which would have been the sign of displacement.',
        },
        {
          explanation:
            'Step 5: state the answer. (a) No reaction. (b) Iodine is less reactive than bromine, so it cannot displace bromine from potassium bromide. (c) iodine + potassium bromide -> no reaction.',
        },
      ],
    },
  ],
  questions: [
    // CORE (7)
    {
      id: 'cpt-disp-q1',
      type: 'multiple-choice',
      stem: 'Which sentence is the displacement rule for halogens?',
      tier: 'core',
      options: [
        'A less reactive halogen displaces a more reactive halogen from a solution of its salt',
        'A more reactive halogen displaces a less reactive halogen from a solution of its salt',
        'Any halogen displaces any other halogen, regardless of reactivity',
        'Halogens only displace metals from their salts, never other halogens',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-disp-mis-reverse-rule',
    },
    {
      id: 'cpt-disp-q2',
      type: 'drag-order',
      stem: 'Place the three school halogens in order, from MOST reactive at the top to LEAST reactive at the bottom.',
      tier: 'core',
      items: ['bromine', 'iodine', 'chlorine'],
      correctOrder: [2, 0, 1],
      xpValue: 10,
    },
    {
      id: 'cpt-disp-q3',
      type: 'multiple-choice',
      stem: 'Chlorine water is added to colourless potassium iodide solution. What colour change should you see?',
      tier: 'core',
      options: [
        'No colour change, because chlorine and iodine are equally reactive',
        'The solution turns blue, because iodine in water is blue',
        'The solution turns brown, because iodine has been displaced',
        'The solution turns bright green, because chlorine is bright green',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cpt-disp-mis-iodine-blue',
    },
    {
      id: 'cpt-disp-q4',
      type: 'multiple-choice',
      stem: 'Why is fluorine never used in a school halogen displacement experiment?',
      tier: 'core',
      options: [
        'Fluorine is less reactive than iodine, so nothing would happen',
        'Fluorine is far too reactive and too dangerous for a school lab; it attacks glass and skin',
        'Fluorine is a metal, so it does not belong in Group 7',
        'Fluorine cannot dissolve in water, so no reaction is possible',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cpt-disp-mis-fluorine-school',
    },
    {
      id: 'cpt-disp-q5',
      type: 'numeric-entry',
      stem: 'In the 3 by 3 grid of chlorine, bromine and iodine added to potassium chloride, potassium bromide and potassium iodide, how many of the nine combinations give a reaction?',
      tier: 'core',
      correctAnswer: 3,
      xpValue: 10,
      hint: 'Chlorine reacts with two of the three salts. Bromine reacts with one. Iodine reacts with none. Add them up.',
    },
    {
      id: 'cpt-disp-q6',
      type: 'numeric-entry',
      stem: 'How many of the nine boxes in the 3 by 3 displacement grid give NO reaction?',
      tier: 'core',
      correctAnswer: 6,
      xpValue: 10,
      hint: 'There are nine boxes in total. Three react. Subtract to find the number that do not.',
    },
    {
      id: 'cpt-disp-q7',
      type: 'drag-order',
      stem: 'Place the steps in the correct order to predict whether one halogen will displace another from its salt solution.',
      tier: 'core',
      items: [
        'Write the word equation, or state "no reaction"',
        'Write down the reactivity order: chlorine > bromine > iodine',
        'Apply the rule: more reactive displaces less reactive',
        'Identify the halogen being ADDED and the halogen in the SALT',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 10,
    },
    // CONFIDENT (8)
    {
      id: 'cpt-disp-q8',
      type: 'multiple-choice',
      stem: 'Bromine water is added to potassium iodide solution. Which word equation is correct?',
      tier: 'confident',
      options: [
        'bromine + potassium iodide -> potassium bromide + iodine',
        'bromine + potassium iodide -> potassium iodate + bromide salt',
        'bromine + potassium iodide -> no reaction (bromine is less reactive than iodine)',
        'bromine + potassium iodide -> iodine bromide + potassium',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'cpt-disp-q9',
      type: 'multiple-choice',
      stem: 'Iodine is added to potassium bromide solution. Which outcome is correct?',
      tier: 'confident',
      options: [
        'Reaction: iodine + potassium bromide -> potassium iodide + bromine',
        'Reaction: solution turns red-brown as bromine is displaced',
        'Reaction: solution turns blue-black as bromine is freed',
        'No reaction: iodine is less reactive than bromine, so cannot displace it',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'cpt-disp-mis-always-works',
    },
    {
      id: 'cpt-disp-q10',
      type: 'multiple-choice',
      stem: 'Chlorine is added to potassium bromide solution. Which product list is correct?',
      tier: 'confident',
      options: [
        'potassium chlorate and bromine',
        'potassium chloride and bromine',
        'potassium bromochloride only',
        'potassium chloride and potassium bromide (both salts)',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'cpt-disp-mis-generic-products',
    },
    {
      id: 'cpt-disp-q11',
      type: 'missing-step',
      stem: 'Fill in the missing line in this account of adding chlorine water to potassium iodide.',
      tier: 'confident',
      steps: [
        'Note the reactivity order: chlorine > bromine > iodine',
        'Compare chlorine (added) and iodine (in the salt). Chlorine is more reactive',
        null,
        'Predict the colour change: the solution should turn brown as iodine is freed',
        'Write the word equation: chlorine + potassium iodide -> potassium chloride + iodine',
      ],
      missingStepIndex: 2,
      correctStep:
        'Apply the rule: the more reactive halogen (chlorine) displaces the less reactive one (iodine) from its salt',
      xpValue: 15,
    },
    {
      id: 'cpt-disp-q12',
      type: 'numeric-entry',
      stem: 'How many of the three school halogens (chlorine, bromine, iodine) are MORE reactive than bromine?',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'Only halogens above bromine in Group 7 are more reactive than bromine. Among the three you use in school, only one fits.',
    },
    {
      id: 'cpt-disp-q13',
      type: 'spot-misconception',
      stem: 'Niamh says: "Iodine added to potassium chloride turns the tube brown because iodine has displaced chlorine."',
      tier: 'confident',
      statements: [
        {
          text: 'Niamh is right. Iodine is in Group 7, so it can push chlorine out of any chloride salt.',
          isMisconception: true,
        },
        {
          text: 'Niamh is wrong. Iodine is less reactive than chlorine, so iodine cannot displace chlorine. The faint brown colour is just the iodine you added sitting in solution; no displacement has occurred.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cpt-disp-mis-reverse-rule',
    },
    {
      id: 'cpt-disp-q14',
      type: 'multiple-choice',
      stem: 'A pupil writes: "bromine + potassium chloride -> potassium bromide + chlorine". What is wrong with this word equation?',
      tier: 'confident',
      options: [
        'Nothing is wrong; the equation is correct',
        'The product side should list chlorine bromide, not chlorine',
        'Bromine is less reactive than chlorine, so this reaction does not happen. The correct answer is "no reaction"',
        'Potassium should appear as a product on its own',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'cpt-disp-mis-always-works',
    },
    {
      id: 'cpt-disp-q15',
      type: 'numeric-entry',
      stem: 'Including fluorine (which sits ABOVE chlorine), how many halogens in Group 7 are MORE reactive than bromine?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Fluorine is more reactive than chlorine, and chlorine is more reactive than bromine. Both sit above bromine in the group.',
    },
    // CHALLENGE (5)
    {
      id: 'cpt-disp-q16',
      type: 'multiple-choice',
      stem: 'A lab technician fills the 3 by 3 displacement grid by adding each of chlorine, bromine and iodine water to test tubes of KCl, KBr and KI. Which row of the grid contains EXACTLY one reaction?',
      tier: 'challenge',
      options: [
        'The chlorine row (Cl2 added)',
        'The bromine row (Br2 added)',
        'The iodine row (I2 added)',
        'No row contains exactly one reaction',
      ],
      correctIndex: 1,
      xpValue: 20,
      hint: 'The chlorine row has two reactions (KBr and KI). The iodine row has zero. So the row with exactly one reaction must be the bromine row.',
    },
    {
      id: 'cpt-disp-q17',
      type: 'missing-step',
      stem: 'A pupil is justifying that bromine displaces iodine but iodine does NOT displace bromine. Fill in the missing line.',
      tier: 'challenge',
      steps: [
        'Reactivity order: chlorine > bromine > iodine',
        'Bromine sits ABOVE iodine, so bromine is more reactive than iodine',
        'Therefore Br2 + KI -> KBr + I2 (the solution turns brown as iodine is freed)',
        null,
        'Therefore I2 + KBr -> no reaction',
      ],
      missingStepIndex: 3,
      correctStep:
        'Iodine sits BELOW bromine, so iodine is less reactive and cannot displace the bromine in KBr',
      xpValue: 20,
    },
    {
      id: 'cpt-disp-q18',
      type: 'multiple-choice',
      stem: 'In a more advanced school lab, a layer of cyclohexane (an organic solvent that does not mix with water) is added on top of each test tube AFTER the halogen displacement reaction. The halogen floats up into the cyclohexane layer with a diagnostic colour. Which colour would the cyclohexane layer show after chlorine water has been added to potassium iodide?',
      tier: 'challenge',
      options: [
        'Pale green, because chlorine is pale green',
        'Red-brown, because bromine has been displaced',
        'Purple, because the displaced halogen is iodine, which shows purple in cyclohexane',
        'Colourless, because nothing has reacted',
      ],
      correctIndex: 2,
      xpValue: 20,
      hint: 'Chlorine plus potassium iodide frees iodine. In a cyclohexane layer iodine shows a distinctive purple colour.',
    },
    {
      id: 'cpt-disp-q19',
      type: 'spot-misconception',
      stem: 'Theo says: "Chlorine displaces bromine from potassium bromide, so the new products are chlorine bromide and potassium."',
      tier: 'challenge',
      statements: [
        {
          text: 'Theo is right. In any displacement, the two non-metals join up and the metal is released on its own.',
          isMisconception: true,
        },
        {
          text: 'Theo is wrong. The more reactive halogen takes the place of the less reactive one IN the salt. So the products are potassium chloride (the new halide salt) and bromine on its own. Potassium never appears as a lone metal in this reaction.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'cpt-disp-mis-generic-products',
    },
    {
      id: 'cpt-disp-q20',
      type: 'multiple-choice',
      stem: 'Stretch idea: at KS4 you will learn that in halogen displacement the more reactive halogen takes electrons from the less reactive halide ion. Using this idea, which species GAINS electrons in the reaction chlorine + potassium iodide -> potassium chloride + iodine?',
      tier: 'challenge',
      options: [
        'The potassium ion gains electrons',
        'The chlorine molecule gains electrons (it becomes chloride)',
        'The iodide ion gains electrons (it becomes iodine)',
        'Nothing gains or loses electrons; this is not a redox reaction',
      ],
      correctIndex: 1,
      xpValue: 20,
      misconceptionId: 'cpt-disp-mis-ionic-direction',
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question set on "reactivity of halogens", recurring Year 7-9 idea that "the less reactive halogen displaces the more reactive one"; reinforced by AQA GCSE Chemistry examiner report June 2020 (8462/1F) Q05 on Group 7 displacement.
    {
      id: 'cpt-disp-mis-reverse-rule',
      description:
        'In a halogen displacement reaction, the LESS reactive halogen displaces the more reactive one from its salt.',
      triggerAnswer: 'reverse-rule',
      correction:
        'In fact it is the opposite. A MORE reactive halogen displaces a less reactive halogen from a solution of its salt. So chlorine displaces bromine and iodine, but iodine cannot displace chlorine.',
      reExplanation:
        'Think of reactivity as how badly each halogen wants to be in the salt form. The more reactive halogen wants it more, so it pushes the less reactive one out. Chlorine sits above bromine and iodine in Group 7, so chlorine is more reactive than both and can displace both. Iodine, at the bottom, can displace nothing.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2021 (1CH0/1F) Q04 on halogen displacement: candidates "expected every halogen plus halide salt combination to react"; reinforced by RSC Education classroom resource "Halogen displacement at KS3" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-disp-mis-always-works',
      description:
        'Any halogen added to any halide salt will give a displacement reaction; you always get a colour change.',
      triggerAnswer: 'always-works',
      correction:
        'In fact displacement only happens when the added halogen is MORE reactive than the halogen in the salt. Iodine plus potassium bromide gives no reaction, because iodine is the less reactive of the two.',
      reExplanation:
        'Run through the 3 by 3 grid: three boxes react (Cl2 + KBr, Cl2 + KI, Br2 + KI) and six boxes do nothing. Whenever the added halogen sits BELOW the salt halogen in Group 7, it has no power to push the more reactive halogen out, so there is no reaction.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/2F) Q03 on observations of halogen displacement: candidates "described iodine in water as blue"; reinforced by CGP KS3 Chemistry Study Book p.48 Common Mistake box on halogen colours.
    {
      id: 'cpt-disp-mis-iodine-blue',
      description:
        'Iodine displaced into a water solution turns the tube blue.',
      triggerAnswer: 'iodine-blue',
      correction:
        'In fact iodine in water gives a brown solution, not a blue one. The blue-black colour only appears when starch is added, which is a different (KS4) test.',
      reExplanation:
        'Free iodine in water looks brown to red-brown. In a cyclohexane organic layer it looks purple. Iodine only goes blue-black when starch is added; that is the starch-iodine test, which is a separate diagnostic, not the displacement colour.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2022 (1CH0/1H) Q06 on Group 7 displacement word equations: candidates "wrote vague products such as halogen + salt"; reinforced by RSC Education classroom resource "Word equations for halogen displacement" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-disp-mis-generic-products',
      description:
        'The products of a halogen displacement are written as a vague "halogen + salt", or include the alkali metal on its own.',
      triggerAnswer: 'generic-products',
      correction:
        'In fact the more reactive halogen takes the place of the less reactive halogen INSIDE the salt, giving a new halide salt of the alkali metal plus the freed halogen. Potassium is never released as a lone metal.',
      reExplanation:
        'For chlorine + potassium bromide: chlorine replaces bromine inside the salt, so the new salt is potassium chloride. The bromine that was pushed out becomes free bromine. Always name the new salt explicitly (potassium chloride, potassium bromide, etc.) and the freed halogen on its own.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/1H) Q06 on Group 7 reactivity: candidates "said fluorine was used in school to test displacement reactions"; reinforced by CLEAPSS guide L195 "Halogens in schools" on banned demonstrations.
    {
      id: 'cpt-disp-mis-fluorine-school',
      description:
        'Fluorine is one of the halogens routinely used in school displacement tests because it is in Group 7.',
      triggerAnswer: 'fluorine-school',
      correction:
        'In fact fluorine is far too reactive and too dangerous to use in a UK school lab. It attacks glass and skin almost instantly. The three school halogens are chlorine, bromine and iodine only.',
      reExplanation:
        'Fluorine sits at the top of Group 7 and is the most reactive halogen of all. CLEAPSS guidance and the school chemistry syllabus restrict you to chlorine, bromine and iodine. You learn fluorine\'s POSITION in the group from the table, but you never see it used in any school test tube.',
    },
    // Source: Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic on halogen displacement: recurring Year 7-8 idea that "any colour change means a reaction"; reinforced by RSC Education CPD article "Reading halogen test tubes accurately" (rsc.org/education, accessed 2026-05-12).
    {
      id: 'cpt-disp-mis-colour-means-reaction',
      description:
        'Any colour change in the tube is proof that a displacement reaction has happened.',
      triggerAnswer: 'colour-means-reaction',
      correction:
        'In fact bromine water is already red-brown and iodine water is already faintly brown. Add them to a salt where no reaction is expected and the tube can still look coloured. Only a NEW halogen colour proves displacement.',
      reExplanation:
        'Always ask: what colour was the tube before, and what colour is it after? If you add red-brown bromine to potassium chloride and it stays red-brown, that is just the bromine you added still sitting in solution. A real displacement gives the colour of the FREED halogen (red-brown for bromine, brown for iodine) appearing where it was not before.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1H) Q07 on halogen ionic equations: candidates "claimed the halogen ATOM gains the electrons"; reinforced by CGP GCSE Chemistry Workbook p.42 stretch box on Group 7 redox.
    {
      id: 'cpt-disp-mis-ionic-direction',
      description:
        'In a halogen displacement reaction the halide ion in the salt is the species that gains electrons.',
      triggerAnswer: 'ionic-direction',
      correction:
        'In fact at KS4 you learn the opposite: the added halogen MOLECULE gains electrons (it is reduced) and the halide ion in the salt loses electrons (it is oxidised) to become the free halogen.',
      reExplanation:
        'Take chlorine + potassium iodide. Chlorine molecules gain electrons to become chloride ions in the new salt potassium chloride. Iodide ions in the original salt lose electrons to become free iodine. The more reactive halogen is the one that pulls electrons from the less reactive halide. This is a KS4 stretch idea; at KS3 you only need the qualitative rule.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
