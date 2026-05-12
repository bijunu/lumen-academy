import type { SkillNode } from '@/types/content'

export const rfValue: SkillNode = {
  id: 'chemistry-separating-rf-value',
  title: 'Chromatography: Rf Values and Identification',
  description:
    'Move beyond qualitative chromatography. Calculate the Rf value (distance travelled by the dye divided by the distance travelled by the solvent front) for each separated spot, and use a reference table of Rf values to identify unknown dyes in inks, food colourings, and forensic samples. Reason about why Rf is constant for a substance in a given solvent and why it changes when the solvent is changed.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'challenge',
  prerequisites: ['chemistry-separating-chromatography'],
  curriculum: {
    ks3Objective:
      'The Rf value is calculated as the distance travelled by a dye divided by the distance travelled by the solvent front; Rf is constant for a substance in a given solvent; identification of an unknown by comparing its Rf with those of known dyes.',
    awardingBodies: {
      aqa: '4.10.1.4 Chromatography; Rf values and identification of components (8462)',
      edexcel: 'Topic 1.44 Paper chromatography; calculating and interpreting Rf values (1CH0)',
      ocr: 'C2.1f Paper chromatography; Rf values; identification by comparison (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-rf-measure',
      title: 'How to Measure an Rf Value on a Chromatogram',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see exactly where to measure from and to, and how to turn the two distances into an Rf value.',
      data: {
        viewBox: '0 0 320 240',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240"><rect x="0" y="0" width="320" height="240" fill="#FEF3C7"/><g><rect x="110" y="20" width="100" height="200" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="110" y1="200" x2="210" y2="200" stroke="#475569" stroke-width="0.7" stroke-dasharray="2 1"/><text x="105" y="204" text-anchor="end" font-size="8" fill="#475569">baseline</text><line x1="110" y1="40" x2="210" y2="40" stroke="#475569" stroke-width="0.7" stroke-dasharray="2 1"/><text x="105" y="44" text-anchor="end" font-size="8" fill="#475569">solvent front</text><circle cx="160" cy="200" r="4" fill="#1E3A8A"/><circle cx="160" cy="120" r="4" fill="#3B82F6"/><line x1="220" y1="200" x2="220" y2="120" stroke="#7C2D12" stroke-width="1.2"/><line x1="216" y1="200" x2="224" y2="200" stroke="#7C2D12" stroke-width="1.2"/><line x1="216" y1="120" x2="224" y2="120" stroke="#7C2D12" stroke-width="1.2"/><text x="240" y="164" font-size="8" font-weight="600" fill="#7C2D12">dye distance</text><text x="240" y="176" font-size="8" fill="#7C2D12">6.0 cm</text><line x1="250" y1="200" x2="250" y2="40" stroke="#14532D" stroke-width="1.2"/><line x1="246" y1="200" x2="254" y2="200" stroke="#14532D" stroke-width="1.2"/><line x1="246" y1="40" x2="254" y2="40" stroke="#14532D" stroke-width="1.2"/><text x="258" y="118" font-size="8" font-weight="600" fill="#14532D">solvent front</text><text x="258" y="130" font-size="8" fill="#14532D">8.0 cm</text><text x="160" y="14" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Rf = 6.0 / 8.0 = 0.75</text></g></svg>',
        hotspots: [
          {
            id: 'csm-rf-h-baseline',
            x: 30,
            y: 84,
            label: 'Start: the baseline',
            description:
              'The pencil line where you placed the original sample spots. Every measurement starts from here, not from the cut bottom of the paper. The dye distance is measured from this baseline upwards to the centre of the dye spot.',
          },
          {
            id: 'csm-rf-h-front',
            x: 30,
            y: 18,
            label: 'Top reference: the solvent front',
            description:
              'The wet edge where the solvent reached when you lifted the paper out. Mark it in pencil immediately. The solvent front distance is measured from the baseline up to this line, in the same units as the dye distance.',
          },
          {
            id: 'csm-rf-h-spot',
            x: 50,
            y: 50,
            label: 'The dye spot',
            description:
              'Measure to the centre of the spot, not to its edge. The size of the spot does not matter; only the position of its centre does.',
          },
          {
            id: 'csm-rf-h-formula',
            x: 75,
            y: 70,
            label: 'The Rf calculation',
            description:
              'Rf equals the dye distance divided by the solvent front distance, both measured from the same baseline. Here Rf = 6.0 / 8.0 = 0.75. Rf has no units because it is a ratio of two distances.',
          },
          {
            id: 'csm-rf-h-range',
            x: 75,
            y: 30,
            label: 'Rf is always between 0 and 1',
            description:
              'The dye can never travel further than the solvent that carries it, so the dye distance is always less than or equal to the solvent front distance. That makes the ratio at most 1, and never negative.',
          },
        ],
      },
    },
    {
      id: 'csm-rf-compare',
      title: 'Comparing an Unknown Dye Against a Reference Table',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to follow how a forensic chemist identifies an unknown ink by matching its Rf against a table of known dyes.',
      data: {
        viewBox: '0 0 360 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220"><rect x="0" y="0" width="360" height="220" fill="#FEF3C7"/><g><rect x="20" y="20" width="160" height="180" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="20" y1="180" x2="180" y2="180" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><text x="100" y="194" text-anchor="middle" font-size="7" fill="#475569">baseline (0 cm)</text><line x1="20" y1="60" x2="180" y2="60" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><text x="100" y="54" text-anchor="middle" font-size="7" fill="#475569">solvent front (10 cm)</text><circle cx="60" cy="180" r="3" fill="#1E3A8A"/><circle cx="60" cy="114" r="3.5" fill="#FB923C"/><text x="60" y="208" text-anchor="middle" font-size="7" fill="#1E3A8A">unknown</text><circle cx="100" cy="180" r="3" fill="#1E3A8A"/><circle cx="100" cy="114" r="3.5" fill="#FB923C"/><text x="100" y="208" text-anchor="middle" font-size="7" fill="#1E3A8A">tartrazine</text><circle cx="140" cy="180" r="3" fill="#1E3A8A"/><circle cx="140" cy="76" r="3.5" fill="#DC2626"/><text x="140" y="208" text-anchor="middle" font-size="7" fill="#1E3A8A">sunset yellow</text></g><g><rect x="200" y="40" width="140" height="160" rx="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8"/><text x="270" y="58" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">Rf table (water solvent)</text><line x1="210" y1="68" x2="330" y2="68" stroke="#94A3B8"/><text x="215" y="86" font-size="8" fill="#1E3A8A">tartrazine (E102):</text><text x="325" y="86" text-anchor="end" font-size="8" fill="#1E3A8A">0.55</text><text x="215" y="104" font-size="8" fill="#1E3A8A">carmoisine (E122):</text><text x="325" y="104" text-anchor="end" font-size="8" fill="#1E3A8A">0.70</text><text x="215" y="122" font-size="8" fill="#1E3A8A">sunset yellow (E110):</text><text x="325" y="122" text-anchor="end" font-size="8" fill="#1E3A8A">0.80</text><text x="215" y="156" font-size="8" font-weight="600" fill="#7C2D12">unknown:</text><text x="325" y="156" text-anchor="end" font-size="8" font-weight="600" fill="#7C2D12">5.5 / 10 = 0.55</text><text x="215" y="178" font-size="8" fill="#14532D">match: tartrazine (E102)</text></g></svg>',
        hotspots: [
          {
            id: 'csm-rf-h-unknown',
            x: 16,
            y: 60,
            label: 'The unknown dye spot',
            description:
              'The unknown travels 5.5 cm from the baseline. The solvent front travels 10 cm. So Rf = 5.5 / 10 = 0.55.',
          },
          {
            id: 'csm-rf-h-table',
            x: 70,
            y: 30,
            label: 'Reference Rf table',
            description:
              'A list of Rf values for the three food dyes most commonly found in red and orange sweets, measured in water at room temperature. Tartrazine (E102) sits at 0.55, carmoisine (E122) at 0.70, sunset yellow (E110) at 0.80.',
          },
          {
            id: 'csm-rf-h-match',
            x: 70,
            y: 70,
            label: 'Reading off the match',
            description:
              'The unknown Rf of 0.55 lines up with tartrazine (E102). Identification confirmed. To be safe, the chemist would re-run the unknown next to a known tartrazine spot on the same paper to check the two travel the same distance.',
          },
          {
            id: 'csm-rf-h-sidebyside',
            x: 35,
            y: 50,
            label: 'Run side by side as a check',
            description:
              'The chemist also runs known tartrazine and known sunset yellow next to the unknown on the same paper, in the same solvent. The unknown lines up with the tartrazine spot at 0.55, confirming the identification.',
          },
        ],
      },
    },
    {
      id: 'csm-rf-solvent',
      title: 'Same Dye, Different Solvent: Why Rf Changes',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how one and the same dye gives two different Rf values when you swap the solvent from water to ethanol.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/><g><text x="80" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#1E3A8A">WATER solvent</text><rect x="30" y="30" width="100" height="170" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.7"/><line x1="30" y1="180" x2="130" y2="180" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><line x1="30" y1="50" x2="130" y2="50" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="80" cy="180" r="3" fill="#1E3A8A"/><circle cx="80" cy="128" r="3.5" fill="#22C55E"/><text x="80" y="210" text-anchor="middle" font-size="7" fill="#1E3A8A">Rf = 4.0 / 10 = 0.40</text></g><g><text x="240" y="18" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">ETHANOL solvent</text><rect x="190" y="30" width="100" height="170" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.7"/><line x1="190" y1="180" x2="290" y2="180" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><line x1="190" y1="50" x2="290" y2="50" stroke="#475569" stroke-width="0.6" stroke-dasharray="2 1"/><circle cx="240" cy="180" r="3" fill="#1E3A8A"/><circle cx="240" cy="95" r="3.5" fill="#22C55E"/><text x="240" y="210" text-anchor="middle" font-size="7" fill="#7C2D12">Rf = 6.5 / 10 = 0.65</text></g></svg>',
        hotspots: [
          {
            id: 'csm-rf-h-water',
            x: 25,
            y: 60,
            label: 'In water: the dye climbs 4.0 cm',
            description:
              'The same green dye dissolves only moderately in water and grips the paper fairly strongly. With a solvent front of 10 cm, the dye climbs 4.0 cm, giving Rf = 0.40.',
          },
          {
            id: 'csm-rf-h-ethanol',
            x: 75,
            y: 60,
            label: 'In ethanol: the dye climbs 6.5 cm',
            description:
              'The same green dye dissolves much more easily in ethanol, so it is carried higher. With the solvent front again at 10 cm, the dye climbs 6.5 cm, giving Rf = 0.65.',
          },
          {
            id: 'csm-rf-h-rule',
            x: 50,
            y: 92,
            label: 'Always quote Rf with the solvent',
            description:
              'Rf is constant for a given dye only when the solvent is fixed. A dye has one Rf in water and a different Rf in ethanol. So a chemistry table always lists Rf alongside the solvent system used.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-rf-worked-1',
      title: 'Calculating Rf step by step from a chromatogram',
      steps: [
        {
          explanation:
            'Question: A pupil sets up a paper chromatogram of a yellow dye. The solvent front travels 8.0 cm from the baseline. The yellow dye spot travels 6.0 cm from the baseline. What is the Rf value of the yellow dye?',
        },
        {
          explanation:
            'Step 1: write down what is measured. Distance travelled by the dye = 6.0 cm. Distance travelled by the solvent front = 8.0 cm. Both distances are measured from the SAME starting point: the baseline.',
          maths: 'dye distance = 6.0 cm; solvent front distance = 8.0 cm',
        },
        {
          explanation:
            'Step 2: write the Rf formula. Rf = distance travelled by the dye / distance travelled by the solvent front.',
          maths: 'Rf = (distance of dye) / (distance of solvent front)',
        },
        {
          explanation:
            'Step 3: substitute the numbers. Rf = 6.0 / 8.0.',
          maths: 'Rf = 6.0 / 8.0',
        },
        {
          explanation:
            'Step 4: simplify the division. 6.0 / 8.0 = 0.75. Rf has no units because the centimetres on top and bottom cancel out.',
          maths: 'Rf = 0.75 (no units)',
        },
        {
          explanation:
            'Step 5: check the value is sensible. Rf must lie between 0 and 1 (the dye cannot travel further than the solvent). 0.75 is between 0 and 1, so the answer is reasonable.',
        },
      ],
    },
    {
      id: 'csm-rf-worked-2',
      title: 'Identifying an unknown ink in a UK forensic lab',
      steps: [
        {
          explanation:
            'Question: A forensic chemist runs the ink from a ransom note next to inks from three suspect pens. The solvent front travels 12 cm. The ransom-note ink spot travels 9.0 cm. The reference table for these pens (in water) lists pen A Rf = 0.50, pen B Rf = 0.75, pen C Rf = 0.90. Which pen wrote the note?',
        },
        {
          explanation:
            'Step 1: calculate the Rf of the ransom-note ink. Rf = 9.0 / 12 = 0.75.',
          maths: 'Rf = 9.0 / 12 = 0.75',
        },
        {
          explanation:
            'Step 2: compare the calculated Rf to the reference table. 0.75 matches pen B exactly.',
        },
        {
          explanation:
            'Step 3: confirm with a side-by-side run. The chemist runs pen B ink next to the ransom-note ink on the same paper in the same solvent. If both spots end up at the same height, the match is confirmed.',
        },
        {
          explanation:
            'Step 4: note the limitation. A matching Rf is strong evidence but not absolute proof; two different dyes can have a similar Rf by chance. The chemist would run the same comparison in a second solvent (such as ethanol) for a tougher check. If both solvents give matches, the case is very strong.',
        },
      ],
    },
  ],
  questions: [
    // ===== CORE (7) =====
    {
      id: 'csm-rf-q1',
      type: 'multiple-choice',
      stem: 'Which formula correctly gives the Rf value for a dye on a chromatogram?',
      tier: 'core',
      options: [
        'Rf = distance travelled by the dye / distance travelled by the solvent front',
        'Rf = distance travelled by the solvent front / distance travelled by the dye',
        'Rf = distance travelled by the dye + distance travelled by the solvent front',
        'Rf = length of the paper / distance travelled by the dye',
      ],
      correctIndex: 0,
      xpValue: 10,
      hint: 'The dye distance goes on top; the solvent front distance goes on the bottom.',
      misconceptionId: 'csm-rf-mis-front-baseline-swap',
    },
    {
      id: 'csm-rf-q2',
      type: 'numeric-entry',
      stem: 'A blue dye travels 6.0 cm from the baseline. The solvent front travels 8.0 cm from the baseline. What is the Rf value of the blue dye? Give your answer to two decimal places.',
      tier: 'core',
      correctAnswer: 0.75,
      tolerance: 0.01,
      xpValue: 10,
      hint: 'Rf = dye distance / solvent front distance. Both measured from the baseline.',
    },
    {
      id: 'csm-rf-q3',
      type: 'numeric-entry',
      stem: 'In a school practical, the solvent front travels 10 cm and a red dye travels 2.5 cm from the baseline. What is the Rf value of the red dye?',
      tier: 'core',
      correctAnswer: 0.25,
      tolerance: 0.01,
      xpValue: 10,
    },
    {
      id: 'csm-rf-q4',
      type: 'multiple-choice',
      stem: 'Why can an Rf value never be greater than 1?',
      tier: 'core',
      options: [
        'Because Rf is measured in centimetres and 1 cm is the longest a dye can travel',
        'Because Rf is measured as a percentage and percentages stop at 1',
        'Because the paper is always shorter than 1 metre',
        'Because the dye is always carried by the solvent, so it cannot travel further than the solvent front',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'csm-rf-mis-greater-than-one',
    },
    {
      id: 'csm-rf-q5',
      type: 'multiple-choice',
      stem: 'On a chromatogram of a yellow felt-tip ink, the dye spot is 3.0 cm wide and its centre is 4.0 cm above the baseline. The solvent front is 8.0 cm above the baseline. Which distance should you use as the "distance travelled by the dye" when calculating Rf?',
      tier: 'core',
      options: [
        '3.0 cm (the width of the spot)',
        '4.0 cm (the height of the centre of the spot)',
        '7.0 cm (the top edge of the spot)',
        '8.0 cm (the height of the solvent front)',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'csm-rf-mis-spot-size',
    },
    {
      id: 'csm-rf-q6',
      type: 'multiple-choice',
      stem: 'You measure your chromatogram from the bottom edge of the paper (the cut edge) rather than from the pencil baseline. What will happen to your calculated Rf?',
      tier: 'core',
      options: [
        'It will be correct, because the bottom edge and the baseline are the same thing',
        'It will be too big, because you have added extra distance below the baseline to both top and bottom',
        'It will be too small, because the dye has not really moved that far',
        'It will not change at all, because the extra distance cancels out',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'csm-rf-mis-from-bottom',
    },
    {
      id: 'csm-rf-q7',
      type: 'spot-misconception',
      stem: 'Priya looks at her chromatogram and says: "My blue dye made a really big fat spot, so it must have a higher Rf than the small green spot next to it."',
      tier: 'core',
      statements: [
        {
          text: 'Priya is right. The size of the spot tells you the Rf; bigger spots have higher Rf values.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Rf depends on the height of the centre of the spot above the baseline, not on how wide or dilute the spot is.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-rf-mis-spot-size',
    },
    // ===== CONFIDENT (7) =====
    {
      id: 'csm-rf-q8',
      type: 'numeric-entry',
      stem: 'A pupil runs an ink chromatogram. The solvent front travels 12 cm from the baseline. An orange dye spot travels 6.6 cm from the baseline. What is the Rf value of the orange dye? Give your answer to two decimal places.',
      tier: 'confident',
      correctAnswer: 0.55,
      tolerance: 0.01,
      xpValue: 15,
      hint: 'Rf = 6.6 / 12. Use long division or a calculator.',
    },
    {
      id: 'csm-rf-q9',
      type: 'numeric-entry',
      stem: 'A green leaf-pigment extract is run on a TLC sheet. The solvent front travels 9.0 cm. The carotene spot (orange) is 7.2 cm above the baseline. What is the Rf of carotene in this solvent? Give your answer to two decimal places.',
      tier: 'confident',
      correctAnswer: 0.80,
      tolerance: 0.01,
      xpValue: 15,
    },
    {
      id: 'csm-rf-q10',
      type: 'multiple-choice',
      stem: 'A forensic chemist in a UK crime lab runs a ransom-note ink. The solvent front travels 12 cm and the ink spot travels 6.6 cm. The reference table (in water) lists: tartrazine (E102) Rf = 0.55, carmoisine (E122) Rf = 0.70, sunset yellow (E110) Rf = 0.80. Which dye is most likely present in the ink?',
      tier: 'confident',
      options: [
        'Carmoisine (E122), because its Rf is between 0.55 and 0.80',
        'Tartrazine (E102), because the calculated Rf is 0.55, matching tartrazine',
        'Sunset yellow (E110), because the dye travelled the furthest distance',
        'None of these, because the solvent front travelled too far',
      ],
      correctIndex: 1,
      xpValue: 15,
      hint: 'Calculate the Rf first: 6.6 / 12, then read off the closest match.',
    },
    {
      id: 'csm-rf-q11',
      type: 'multiple-choice',
      stem: 'Two pupils run the same red dye on chromatography paper. One pupil uses a strip 12 cm long and the other uses a strip 24 cm long. Both let the solvent front travel as far as it can before lifting the paper out. Which statement is true?',
      tier: 'confident',
      options: [
        'The longer strip gives a bigger Rf, because the dye has more room to travel',
        'The shorter strip gives a bigger Rf, because the dye has less competition from the paper',
        'Both strips give the same Rf, because Rf is a ratio and depends on the dye and the solvent, not on the paper length',
        'Rf cannot be calculated for either strip without knowing the strip width',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-rf-mis-paper-length',
    },
    {
      id: 'csm-rf-q12',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of calculating an Rf value for a yellow dye.',
      tier: 'confident',
      steps: [
        'Take the chromatogram out of the beaker before the solvent reaches the top, and mark the solvent front in pencil',
        'Measure the distance from the baseline to the centre of the yellow dye spot, in centimetres',
        null,
        'Divide the dye distance by the solvent front distance to get the Rf value',
        'Compare the Rf value with a reference table to identify the dye',
      ],
      missingStepIndex: 2,
      correctStep:
        'Measure the distance from the baseline to the solvent front, in the same units (centimetres) and from the same starting point',
      xpValue: 20,
    },
    {
      id: 'csm-rf-q13',
      type: 'spot-misconception',
      stem: 'Marcus runs the same green dye on two strips of paper: one short (10 cm) and one long (20 cm). He says: "The long strip will give a higher Rf for my green dye than the short strip, because the dye travels further."',
      tier: 'confident',
      statements: [
        {
          text: 'Marcus is right. A longer paper gives more space, so the Rf comes out higher.',
          isMisconception: true,
        },
        {
          text: 'Marcus is wrong. Rf is a ratio of two distances measured on the same paper, so it depends on the dye and the solvent, not on how long the strip is.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-rf-mis-paper-length',
    },
    {
      id: 'csm-rf-q14',
      type: 'drag-order',
      stem: 'Place the steps for measuring an Rf value in the correct order, from start to finish.',
      tier: 'confident',
      items: [
        'Measure the distance from the baseline to the centre of the dye spot in centimetres',
        'Take the paper out before the solvent reaches the top, and mark the solvent front in pencil',
        'Divide the dye distance by the solvent front distance to give the Rf value',
        'Measure the distance from the baseline to the solvent front in centimetres',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 20,
    },
    // ===== CHALLENGE (6) =====
    {
      id: 'csm-rf-q15',
      type: 'numeric-entry',
      stem: 'An ink separates into three component dyes on a chromatogram. The components sit 1.5 cm, 3.0 cm, and 4.5 cm above the baseline. The solvent front is 6.0 cm above the baseline. What is the Rf value of the highest component (the one at 4.5 cm)? Give your answer to two decimal places.',
      tier: 'challenge',
      correctAnswer: 0.75,
      tolerance: 0.01,
      xpValue: 25,
    },
    {
      id: 'csm-rf-q16',
      type: 'multiple-choice',
      stem: 'A pupil compares two unknown dyes from two different felt-tip pens. In water both come out with Rf = 0.40. The pupil writes: "Same Rf means same dye, so both pens use the same colourant." Why is this conclusion not yet safe?',
      tier: 'challenge',
      options: [
        'Because Rf cannot be measured accurately to two decimal places',
        'Because Rf is meaningless when comparing different pens',
        'Because two different dyes can have similar Rf values in one solvent by chance; the chemist should rerun the test in a second solvent to be sure',
        'Because the two pens have different price tags and cannot be compared',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'csm-rf-mis-same-rf-same-dye',
    },
    {
      id: 'csm-rf-q17',
      type: 'free-text',
      stem: 'A pupil measures the same green dye in two different solvents. In water the Rf is 0.40. In ethanol the Rf is 0.65. Explain in 2 to 3 sentences why a single substance can have two different Rf values, and what this means for how chemists record Rf in a reference table.',
      tier: 'challenge',
      sampleAnswer:
        'Rf depends on how strongly the dye sticks to the paper compared with how well it dissolves in the solvent. A different solvent changes how well the dye dissolves and so changes the height the dye reaches. Reference tables therefore always state the solvent used alongside each Rf value; quoting an Rf without the solvent is meaningless.',
      keywords: ['solvent', 'dissolves', 'sticks', 'reference'],
      xpValue: 25,
      misconceptionId: 'csm-rf-mis-rf-independent-of-solvent',
    },
    {
      id: 'csm-rf-q18',
      type: 'numeric-entry',
      stem: 'A school technician runs a chromatogram of red food colouring from a fruit-flavoured drink. The solvent front travels 11.0 cm from the baseline. One component travels 7.7 cm and another travels 8.8 cm. What is the Rf value of the SECOND component (the one at 8.8 cm)? Give your answer to two decimal places.',
      tier: 'challenge',
      correctAnswer: 0.80,
      tolerance: 0.01,
      xpValue: 25,
      hint: 'Rf = 8.8 / 11.0. Both distances are from the baseline.',
    },
    {
      id: 'csm-rf-q19',
      type: 'multiple-choice',
      stem: 'A pupil reads off a textbook diagram that the solvent front sits 8.0 cm above the cut bottom of the paper and the dye sits 5.0 cm above the cut bottom. The baseline was drawn 2.0 cm above the cut bottom. What is the true Rf of the dye?',
      tier: 'challenge',
      options: [
        'Rf = 5.0 / 8.0 = 0.63 (use the cut bottom for both measurements)',
        'Rf = 5.0 / 6.0 = 0.83 (use the cut bottom for the dye but the baseline for the solvent)',
        'Rf = 3.0 / 6.0 = 0.50 (measure both distances from the baseline)',
        'Rf = 3.0 / 8.0 = 0.38 (measure the dye from the baseline but the solvent from the cut bottom)',
      ],
      correctIndex: 2,
      xpValue: 25,
      hint: 'Subtract 2.0 cm from both distances to bring them back to the baseline.',
      misconceptionId: 'csm-rf-mis-from-bottom',
    },
    {
      id: 'csm-rf-q20',
      type: 'free-text',
      stem: 'In a UK forensic lab two suspect inks both give Rf = 0.55 in water. The chemist insists on rerunning both alongside the original sample in ethanol as a second test. Explain in 2 to 3 sentences why this second-solvent test is so important for a court case.',
      tier: 'challenge',
      sampleAnswer:
        'A single matching Rf in one solvent could be a coincidence, since two different dyes can have similar Rf values by chance. Running both samples in a second solvent gives a second, independent comparison; only dyes that match in both solvents are very likely the same substance. This makes the identification much more reliable as evidence in court.',
      keywords: ['coincidence', 'second solvent', 'independent', 'reliable'],
      xpValue: 25,
      misconceptionId: 'csm-rf-mis-same-rf-same-dye',
    },
    {
      id: 'csm-rf-q21',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the Rf measurement diagram.',
      tier: 'confident',
      viewBox: '0 0 320 220',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><rect x="110" y="20" width="100" height="180" fill="#FFFFFF" stroke="#94A3B8" stroke-width="0.8"/><line x1="110" y1="180" x2="210" y2="180" stroke="#475569" stroke-width="0.7" stroke-dasharray="2 1"/><line x1="110" y1="40" x2="210" y2="40" stroke="#475569" stroke-width="0.7" stroke-dasharray="2 1"/><circle cx="160" cy="180" r="4" fill="#1E3A8A"/><circle cx="160" cy="120" r="4" fill="#3B82F6"/><line x1="220" y1="180" x2="220" y2="120" stroke="#7C2D12" stroke-width="1.2"/><line x1="250" y1="180" x2="250" y2="40" stroke="#14532D" stroke-width="1.2"/></svg>',
      hotspots: [
        { id: 'csm-rf-q21-h1', x: 35, y: 82, correctLabel: 'Baseline' },
        { id: 'csm-rf-q21-h2', x: 35, y: 18, correctLabel: 'Solvent front' },
        { id: 'csm-rf-q21-h3', x: 50, y: 55, correctLabel: 'Dye spot' },
        { id: 'csm-rf-q21-h4', x: 70, y: 70, correctLabel: 'Dye distance' },
        { id: 'csm-rf-q21-h5', x: 80, y: 50, correctLabel: 'Solvent front distance' },
      ],
      labels: [
        'Baseline',
        'Solvent front',
        'Dye spot',
        'Dye distance',
        'Solvent front distance',
        'Filtrate',
        'Pencil line',
      ],
      xpValue: 20,
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/2F), Q05 on chromatography: many candidates "quoted Rf values greater than 1" by measuring the solvent front and the dye in different ways. Reinforced by CGP KS3 Chemistry Study Book p.56 Common Mistake box.
    {
      id: 'csm-rf-mis-greater-than-one',
      description:
        'An Rf value can be larger than 1 if the dye travels a long way up the paper.',
      triggerAnswer: 'greater-than-one',
      correction:
        'In fact Rf is between 0 and 1 by definition. The dye is carried by the solvent, so it cannot travel further than the solvent front.',
      reExplanation:
        'Rf is the dye distance divided by the solvent front distance, both measured from the baseline. The dye is carried by the solvent, so the dye can never overtake the solvent front. The numerator is always less than or equal to the denominator, which forces Rf to lie between 0 and 1. An Rf above 1 always means you measured from the wrong reference line.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2020 (1CH0/1F), Q08 on Rf calculations: candidates "measured the diameter of the spot rather than the height of its centre", treating spot size as a measurement instead of position. Reinforced by RSC Education article "Common student misconceptions about Rf values" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-rf-mis-spot-size',
      description:
        'A bigger or fatter dye spot has a bigger Rf value than a small dye spot.',
      triggerAnswer: 'spot-size',
      correction:
        'In fact Rf depends only on the height of the centre of the spot above the baseline. A dilute or concentrated spot at the same height has the same Rf.',
      reExplanation:
        'Rf measures position, not size. A small concentrated spot and a wide diluted spot can sit at the same height on the paper. Their centres give the same dye distance, and so the same Rf. Spot size depends on how much dye was loaded, not on how the solvent carries it. To measure Rf well, measure to the centre of the spot.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/2H), Q06 on chromatography: candidates "claimed Rf changes when the paper is cut longer or shorter". Reinforced by CGP KS3 Chemistry Study Book p.56.
    {
      id: 'csm-rf-mis-paper-length',
      description:
        'The Rf of a dye depends on how long the strip of paper is.',
      triggerAnswer: 'paper-length',
      correction:
        'In fact Rf is a ratio of two distances measured on the same paper, so it does not change when the paper is longer or shorter.',
      reExplanation:
        'Rf compares the dye distance with the solvent front distance, both measured on the same strip. Stretch the strip and both distances grow by the same factor; their ratio stays the same. The Rf is fixed by the dye, the solvent, and the paper type, not by how much paper you cut.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1H), Q07 on chromatography: candidates "quoted a single Rf value for a dye with no solvent named". Reinforced by RSC Education article "Teaching Rf at KS3 and KS4" (rsc.org/education, accessed 2026-05-10).
    {
      id: 'csm-rf-mis-rf-independent-of-solvent',
      description:
        'A dye has one fixed Rf value, the same in every solvent.',
      triggerAnswer: 'rf-independent-of-solvent',
      correction:
        'In fact Rf changes when the solvent changes. The same dye in water and in ethanol gives two different Rf values, so you must always state the solvent.',
      reExplanation:
        'How far a dye travels depends on how well it dissolves in the solvent and how strongly it sticks to the paper. Change the solvent and the dissolving step changes too, so the dye reaches a different height. A reference table of Rf values is therefore tied to a specific solvent system. Quoting Rf without the solvent is incomplete.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2021 (8462/2F), Q06 on identification by Rf: candidates "concluded two dyes were identical from a single matching Rf" without running a second solvent. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on chromatography.
    {
      id: 'csm-rf-mis-same-rf-same-dye',
      description:
        'If two dyes have the same Rf in one solvent, they are definitely the same substance.',
      triggerAnswer: 'same-rf-same-dye',
      correction:
        'In fact two different dyes can have a similar Rf in one solvent by chance. To confirm a match, run both samples in a second solvent.',
      reExplanation:
        'Rf in a single solvent is a useful clue but not a unique fingerprint. Different dyes can have coincidentally similar Rf values. Two solvents give two independent measurements; only substances that match in both are very likely the same. Forensic chemists therefore always confirm a match in a second solvent before naming a substance.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2018 (1CH0/1F), Q07: candidates "measured the dye distance from the cut bottom of the paper rather than from the pencil baseline". Reinforced by CGP KS3 Chemistry Study Book p.56 Common Mistake box.
    {
      id: 'csm-rf-mis-from-bottom',
      description:
        'You measure the dye distance from the cut bottom edge of the paper up to the dye spot.',
      triggerAnswer: 'from-bottom',
      correction:
        'In fact you measure from the pencil baseline, where the spots were placed, not from the cut edge of the paper.',
      reExplanation:
        'The cut edge of the paper sits below the baseline because the strip was dipped into the solvent. Measuring from the cut edge adds extra paper that the dye never moved through, making the dye distance look bigger than it is. Always measure from the baseline (the pencil line where you placed the original spots) to the centre of the dye, and similarly from the baseline to the solvent front.',
    },
    // Source: RSC Education article "Teaching paper chromatography in 11 to 14" (rsc.org/education, accessed 2026-05-10): pupils often confuse the solvent front (top line) with the baseline (bottom line) and so invert the Rf ratio. Reinforced by Best Evidence Science Teaching (BEST) UCL/STEM Learning diagnostic question sets on Rf calculations.
    {
      id: 'csm-rf-mis-front-baseline-swap',
      description:
        'The baseline is where the solvent stops and the solvent front is where you put the dye spots.',
      triggerAnswer: 'front-baseline-swap',
      correction:
        'In fact the baseline is the lower pencil line where the dye spots were placed; the solvent front is the upper wet line where the solvent reached.',
      reExplanation:
        'The baseline is drawn in pencil near the bottom of the paper before the experiment starts; the dye spots sit on it. The solvent front is the wet edge that climbs up the paper during the run; it is marked in pencil as soon as the paper is lifted out. Confusing them inverts the Rf ratio and gives values greater than 1 or upside-down comparisons.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
