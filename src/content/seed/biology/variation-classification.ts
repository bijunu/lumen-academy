import type { SkillNode, Zone } from '@/types/content'

// =============================================================================
// Zone: Variation and Classification (biology-variation-classification)
// =============================================================================
//
// Two Year 7 nodes:
//   1. Continuous and Discontinuous Variation (Core)
//   2. Classification: Five Kingdoms (Confident)
//
// Hard scope guards for both nodes:
//   - NO inheritance, alleles, or chromosomes (KS3 PoS does mention chromosomes
//     within the parent sub-section but the Year 7 Lumen scope is "we observe
//     variation", not "alleles cause it"). That depth lives in Year 8/9.
//   - NO domains-vs-kingdoms (Archaea/Bacteria/Eukarya). Stick to the classic
//     five kingdoms: animals, plants, fungi, protists, prokaryotes.
//   - Human variation is framed only via neutral observable traits (eye colour,
//     hand-span, shoe size, tongue-rolling). NEVER tied to ethnicity or race.
//   - All survey contexts use a Sevenoaks Y7 class for UK colour. No US framings.

// ---------------------------------------------------------------------------
// Node 1 SVGs
// ---------------------------------------------------------------------------

const continuousVsDiscontinuousSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Two kinds of variation</text>
  <rect x="20" y="60" width="270" height="310" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="155" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Continuous</text>
  <text x="155" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">A range of values along</text>
  <text x="155" y="134" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">a measuring scale.</text>
  <text x="155" y="170" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Examples in a Y7 class:</text>
  <text x="155" y="194" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">height in cm</text>
  <text x="155" y="214" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">mass in kg</text>
  <text x="155" y="234" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">hand-span in cm</text>
  <text x="155" y="254" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">arm-span in cm</text>
  <text x="155" y="296" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Plotted as a histogram,</text>
  <text x="155" y="314" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">often a bell-like shape.</text>
  <line x1="50" y1="350" x2="260" y2="350" stroke="#1F2937" stroke-width="2" />
  <line x1="50" y1="350" x2="50" y2="330" stroke="#1F2937" stroke-width="2" />
  <line x1="260" y1="350" x2="260" y2="330" stroke="#1F2937" stroke-width="2" />
  <text x="155" y="366" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">small ............ large</text>
  <rect x="310" y="60" width="270" height="310" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="445" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Discontinuous</text>
  <text x="445" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Separate categories.</text>
  <text x="445" y="134" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">No in-between values.</text>
  <text x="445" y="170" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Examples in a Y7 class:</text>
  <text x="445" y="194" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">eye colour</text>
  <text x="445" y="214" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">blood group (A, B, AB, O)</text>
  <text x="445" y="234" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">tongue-rolling (yes / no)</text>
  <text x="445" y="254" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">earlobes (free / attached)</text>
  <text x="445" y="296" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Plotted as a bar chart</text>
  <text x="445" y="314" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">with gaps between bars.</text>
  <rect x="350" y="334" width="20" height="22" fill="#92400E" />
  <rect x="380" y="328" width="20" height="28" fill="#92400E" />
  <rect x="410" y="338" width="20" height="18" fill="#92400E" />
  <rect x="440" y="332" width="20" height="24" fill="#92400E" />
  <rect x="470" y="346" width="20" height="10" fill="#92400E" />
</svg>
`.trim()

const shoeSizeHistogramSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Shoe size in a Sevenoaks Y7 class (n = 24)</text>
  <line x1="60" y1="320" x2="560" y2="320" stroke="#1F2937" stroke-width="2" />
  <line x1="60" y1="60" x2="60" y2="320" stroke="#1F2937" stroke-width="2" />
  <text x="310" y="356" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">UK shoe size</text>
  <text x="22" y="190" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937" transform="rotate(-90 22 190)">number of pupils</text>
  <rect x="80" y="295" width="50" height="25" fill="#1D4ED8" />
  <rect x="135" y="270" width="50" height="50" fill="#1D4ED8" />
  <rect x="190" y="245" width="50" height="75" fill="#1D4ED8" />
  <rect x="245" y="220" width="50" height="100" fill="#1D4ED8" />
  <rect x="300" y="195" width="50" height="125" fill="#1D4ED8" />
  <rect x="355" y="220" width="50" height="100" fill="#1D4ED8" />
  <rect x="410" y="245" width="50" height="75" fill="#1D4ED8" />
  <rect x="465" y="270" width="50" height="50" fill="#1D4ED8" />
  <text x="105" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">3</text>
  <text x="160" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">4</text>
  <text x="215" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">5</text>
  <text x="270" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">6</text>
  <text x="325" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">7</text>
  <text x="380" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">8</text>
  <text x="435" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">9</text>
  <text x="490" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">10</text>
  <text x="105" y="290" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">1</text>
  <text x="160" y="265" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">2</text>
  <text x="215" y="240" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">3</text>
  <text x="270" y="215" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">4</text>
  <text x="325" y="190" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">5</text>
  <text x="380" y="215" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">4</text>
  <text x="435" y="240" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">3</text>
  <text x="490" y="265" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">2</text>
  <text x="300" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A bell-like shape:</text>
  <text x="300" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">most pupils cluster near the middle.</text>
</svg>
`.trim()

const tongueRollingBarSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Counting left-handers in a Sevenoaks Y7 class (n = 30)</text>
  <line x1="60" y1="320" x2="560" y2="320" stroke="#1F2937" stroke-width="2" />
  <line x1="60" y1="60" x2="60" y2="320" stroke="#1F2937" stroke-width="2" />
  <text x="310" y="356" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">handedness</text>
  <text x="22" y="190" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937" transform="rotate(-90 22 190)">number of pupils</text>
  <rect x="160" y="90" width="100" height="230" fill="#92400E" />
  <rect x="340" y="232" width="100" height="88" fill="#92400E" />
  <text x="210" y="212" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#FFFFFF">26</text>
  <text x="390" y="284" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#FFFFFF">4</text>
  <text x="210" y="338" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">right-handed</text>
  <text x="390" y="338" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">left-handed</text>
  <text x="300" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Two separate bars, with a gap between them:</text>
  <text x="300" y="380" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">no in-between value is possible.</text>
</svg>
`.trim()

// ---------------------------------------------------------------------------
// Node 1: Continuous and Discontinuous Variation (Core)
// ---------------------------------------------------------------------------

export const continuousDiscontinuousVariation: SkillNode = {
  id: 'biology-variation-continuous-discontinuous',
  title: 'Continuous and Discontinuous Variation',
  description:
    'Sort traits into continuous variation (a range of values on a measuring scale) and discontinuous variation (separate categories with no in-between). Read class survey results from a Sevenoaks Y7 class and decide whether to plot a histogram or a bar chart.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-variation-classification',
  zoneName: 'Variation and Classification',
  tier: 'core',
  prerequisites: ['biology-cells-animal-cell'],
  curriculum: {
    ks3Objective:
      'The variation between individuals within a species being continuous or discontinuous, to include measurement and graphical representation of variation.',
    awardingBodies: {
      aqa: '4.6.2.4 Variation (GCSE Biology 8461). Distinguish continuous from discontinuous variation; plot data on a suitable chart.',
      edexcel: 'SB4a Evidence for human evolution / Variation (GCSE Biology 1BI0, Topic 4). Continuous and discontinuous variation, graphical representation.',
      ocr: 'B6.2.1 Variation (GCSE Biology A J247). Recognise types of variation and how they are recorded.',
    },
  },
  scenes: [
    {
      id: 'vcd-scene-overview',
      title: 'Two Kinds of Variation',
      type: 'labelled-diagram',
      instructions:
        'Click each side to read what continuous and discontinuous variation mean and which Year 7 traits fall into each.',
      data: {
        svg: continuousVsDiscontinuousSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'vcd-hs-cont-def',
            x: 26,
            y: 24,
            label: 'Continuous variation',
            description:
              'A trait that can take any value in a range. The data sits on a measuring scale. Examples: height, mass, hand-span, arm-span.',
          },
          {
            id: 'vcd-hs-cont-graph',
            x: 26,
            y: 78,
            label: 'Plot continuous as a histogram',
            description:
              'Bars touch each other because the values run smoothly along the scale. The shape often looks like a bell, with most pupils near the middle.',
          },
          {
            id: 'vcd-hs-disc-def',
            x: 74,
            y: 24,
            label: 'Discontinuous variation',
            description:
              'A trait that falls into separate categories. There is no in-between value. Examples: eye colour, blood group (A, B, AB, O), tongue-rolling, earlobe shape.',
          },
          {
            id: 'vcd-hs-disc-graph',
            x: 74,
            y: 78,
            label: 'Plot discontinuous as a bar chart',
            description:
              'Bars have gaps between them because the categories are separate. Each bar shows the count for one category.',
          },
        ],
      },
    },
    {
      id: 'vcd-scene-shoe-size',
      title: 'Shoe Size in a Y7 Class',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the shoe size histogram to read what it shows about continuous variation.',
      data: {
        svg: shoeSizeHistogramSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'vcd-hs-shoe-shape',
            x: 50,
            y: 25,
            label: 'Bell-like shape',
            description:
              'Most pupils take a middle shoe size (around UK 7). Fewer take very small or very large sizes. This bell shape is common for continuous traits.',
          },
          {
            id: 'vcd-hs-shoe-touching',
            x: 50,
            y: 65,
            label: 'Bars touch',
            description:
              'In a histogram the bars touch because shoe size runs smoothly along a scale. Bars that touch are the visual cue for continuous data.',
          },
          {
            id: 'vcd-hs-shoe-axis',
            x: 50,
            y: 90,
            label: 'Number axis',
            description:
              'The x-axis is a number scale (UK 3, 4, 5 ... 10). That is what makes shoe size continuous. A bar chart of categories like "small / medium / large" would be discontinuous.',
          },
        ],
      },
    },
    {
      id: 'vcd-scene-handedness',
      title: 'Counting Left-Handers',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the handedness bar chart to see what it tells you about discontinuous variation.',
      data: {
        svg: tongueRollingBarSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'vcd-hs-hand-two-bars',
            x: 50,
            y: 22,
            label: 'Two categories only',
            description:
              'Each pupil is either right-handed or left-handed. There is no in-between value, so this is discontinuous variation.',
          },
          {
            id: 'vcd-hs-hand-gap',
            x: 50,
            y: 60,
            label: 'Gap between the bars',
            description:
              'A bar chart leaves a gap between bars to show the categories are separate. Touching bars would suggest a smooth scale, which is wrong here.',
          },
          {
            id: 'vcd-hs-hand-counts',
            x: 50,
            y: 88,
            label: 'Counts, not measurements',
            description:
              'The y-axis is a count of pupils in each group. We did not measure handedness on a scale, we sorted pupils into one of two categories.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'vcd-worked-1',
      title: 'Sorting six Year 7 traits into continuous or discontinuous',
      steps: [
        {
          explanation:
            'Step 1: Decide if the trait can take any value on a measuring scale. If yes, it is continuous. If it falls into separate categories, it is discontinuous.',
        },
        {
          explanation:
            'Height in cm: a pupil could be 142 cm, 142.4 cm, or 142.7 cm. There is no jump. Continuous.',
        },
        {
          explanation:
            'Eye colour: brown, blue, green, hazel. Each pupil fits one category. There is no number scale. Discontinuous.',
        },
        {
          explanation:
            'Mass in kg: any value across a range, like 38.6 kg or 41.2 kg. Continuous.',
        },
        {
          explanation:
            'Blood group: every pupil is A, B, AB, or O. Four separate categories, no scale. Discontinuous.',
        },
        {
          explanation:
            'Arm-span in cm: smooth scale, any value. Continuous. Tongue-rolling: yes or no, two categories. Discontinuous.',
        },
        {
          explanation:
            'Final tally: 3 continuous traits (height, mass, arm-span) and 3 discontinuous traits (eye colour, blood group, tongue-rolling).',
        },
      ],
    },
    {
      id: 'vcd-worked-2',
      title: 'Choosing the right chart for a class survey',
      steps: [
        {
          explanation:
            'A Sevenoaks Y7 class has measured every pupil twice: hand-span in cm, and earlobe shape (free or attached). They want to display the results.',
        },
        {
          explanation:
            'Hand-span is a measurement on a number scale. So it is continuous. Continuous data plots as a histogram with bars that touch.',
        },
        {
          explanation:
            'Earlobe shape sorts pupils into two categories: free or attached. There is no scale. So it is discontinuous.',
        },
        // Missing step (filled in by the worked example)
        {
          explanation:
            'Discontinuous data plots as a bar chart. The bars sit apart with a gap between them, to show that the categories are separate.',
        },
        {
          explanation:
            'So the class makes a histogram for hand-span and a bar chart for earlobe shape. Same class, two different chart styles, because the data are two different kinds.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'vcd-q1',
      type: 'multiple-choice',
      stem: 'Which of these is an example of continuous variation?',
      tier: 'core',
      options: ['Eye colour', 'Tongue-rolling', 'Height in cm', 'Blood group'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'vcd-mis-categories-as-continuous',
    },
    {
      id: 'vcd-q2',
      type: 'multiple-choice',
      stem: 'Which of these is an example of discontinuous variation?',
      tier: 'core',
      options: ['Mass in kg', 'Arm-span in cm', 'Hand-span in cm', 'Eye colour'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'vcd-mis-categories-as-continuous',
    },
    {
      id: 'vcd-q3',
      type: 'multiple-choice',
      stem: 'Why is shoe size in a Year 7 class treated as continuous variation?',
      tier: 'core',
      options: [
        'Because every pupil ends up with a different size.',
        'Because the values run along a number scale, with no jumps between them.',
        'Because shoe size is sorted into letter sizes.',
        'Because shoe size is sorted into A, B, AB, O.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'vcd-mis-continuous-needs-all-different',
    },
    {
      id: 'vcd-q4',
      type: 'multiple-choice',
      stem: 'Which chart should you use for continuous data such as hand-span in cm?',
      tier: 'core',
      options: [
        'A bar chart with gaps between the bars.',
        'A pie chart showing two categories.',
        'A histogram with bars that touch.',
        'A scatter graph with no axes.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'vcd-mis-bar-vs-histogram',
    },
    {
      id: 'vcd-q5',
      type: 'multiple-choice',
      stem: 'Which chart should you use for discontinuous data such as eye colour?',
      tier: 'core',
      options: [
        'A bar chart with gaps between the bars.',
        'A histogram with bars that touch.',
        'A line graph through every point.',
        'A number line.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'vcd-mis-bar-vs-histogram',
    },
    {
      id: 'vcd-q6',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class survey records every pupil as A, B, AB, or O. Which trait is being recorded, and what kind of variation is it?',
      tier: 'core',
      options: [
        'Hand-span: continuous.',
        'Blood group: discontinuous.',
        'Height: continuous.',
        'Arm-span: discontinuous.',
      ],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'vcd-q7',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Y7 class of 30 pupils counts left-handers. The bar chart shows 26 right-handers and 4 left-handers. How many pupils were counted in total?',
      tier: 'core',
      correctAnswer: 30,
      xpValue: 10,
      hint: 'Add the number in each bar.',
    },
    {
      id: 'vcd-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "blood group is continuous variation because there are four groups, so it goes from low to high." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Four groups make a small scale.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Blood group is four separate categories with no in-between values, so it is discontinuous, not continuous.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'vcd-mis-categories-as-continuous',
    },
    {
      id: 'vcd-q9',
      type: 'drag-order',
      stem: 'Place these steps in the order a Sevenoaks Y7 class would follow to display height data correctly.',
      tier: 'confident',
      items: [
        'Plot the data as a histogram with bars that touch.',
        'Decide that height is continuous variation.',
        'Measure each pupil with a metre rule.',
        'Group the heights into bands of 5 cm.',
      ],
      correctOrder: [2, 1, 3, 0],
      xpValue: 15,
    },
    {
      id: 'vcd-q10',
      type: 'data-extraction',
      stem: 'Look at the shoe-size histogram for a Sevenoaks Y7 class of 24 pupils. Which UK shoe size is the most common?',
      tier: 'confident',
      dataSource:
        'Histogram of shoe size in a Sevenoaks Y7 class (n = 24). Counts: size 3 = 1, size 4 = 2, size 5 = 3, size 6 = 4, size 7 = 5, size 8 = 4, size 9 = 3, size 10 = 2.',
      correctAnswer: '7',
      xpValue: 15,
      hint: 'Find the bar with the largest count.',
    },
    {
      id: 'vcd-q11',
      type: 'numeric-entry',
      stem: 'In the shoe-size data above, how many pupils take UK size 7 or larger?',
      tier: 'confident',
      correctAnswer: 14,
      xpValue: 15,
      hint: 'Add the counts for sizes 7, 8, 9, and 10.',
    },
    {
      id: 'vcd-q12',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class plots earlobe shape as a bar chart with gaps between the bars. Which statement best explains the gap?',
      tier: 'confident',
      options: [
        'The gap shows there are missing values between the categories.',
        'The gap shows the categories are separate, with no in-between value.',
        'The gap is decoration; it has no meaning.',
        'The gap shows that earlobe shape is continuous.',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'vcd-mis-touching-bars-on-categories',
    },
    {
      id: 'vcd-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes that "tongue-rolling is continuous variation because some pupils can roll their tongue a bit and some pupils can roll it a lot." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Tongue-rolling has degrees, just like height.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. At KS3 we record tongue-rolling as a yes-or-no trait, with two categories. So it is discontinuous.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'vcd-mis-tongue-rolling-degrees',
    },
    {
      id: 'vcd-q14',
      type: 'drag-drop-builder',
      stem: 'Build a sorted list of continuous traits only. Drag in the four continuous traits in the order they appear in the pool, top to bottom. Leave discontinuous traits in the pool.',
      tier: 'confident',
      parts: [
        'Height in cm',
        'Mass in kg',
        'Hand-span in cm',
        'Arm-span in cm',
        'Eye colour',
        'Blood group',
        'Tongue-rolling',
        'Earlobe shape',
      ],
      correctArrangement: [
        'Height in cm',
        'Mass in kg',
        'Hand-span in cm',
        'Arm-span in cm',
      ],
      xpValue: 20,
      misconceptionId: 'vcd-mis-categories-as-continuous',
    },
    {
      id: 'vcd-q15',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Y7 class of 30 pupils records eye colour: brown 14, blue 9, green 4, hazel 3. How many pupils have eyes that are NOT brown?',
      tier: 'confident',
      correctAnswer: 16,
      xpValue: 15,
      hint: 'Subtract the brown count from the total.',
    },
    {
      id: 'vcd-q16',
      type: 'multiple-choice',
      stem: 'Which of these statements about variation is correct?',
      tier: 'confident',
      options: [
        'A trait is either continuous or discontinuous; it cannot be both.',
        'All traits in a class are continuous because every pupil is different.',
        'Discontinuous traits always take exactly two categories.',
        'Continuous traits always have exactly the same value for every pupil.',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'vcd-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how to display class hand-span data.',
      tier: 'challenge',
      steps: [
        'Measure each pupil\'s hand-span in cm with a ruler.',
        'Decide whether the trait is continuous or discontinuous.',
        null,
        'Plot the data as a histogram with bars that touch, because the trait is continuous.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Group the measurements into bands of 2 cm so that bars of similar widths can be drawn (e.g. 14 to 16 cm, 16 to 18 cm).',
      xpValue: 20,
    },
    {
      id: 'vcd-q18',
      type: 'free-text',
      stem: 'Explain in one or two sentences why height in cm is plotted as a histogram but eye colour is plotted as a bar chart.',
      tier: 'challenge',
      sampleAnswer:
        'Height in cm runs smoothly along a number scale, so it is continuous and plots as a histogram with bars that touch. Eye colour falls into separate categories with no in-between value, so it is discontinuous and plots as a bar chart with gaps between the bars.',
      keywords: ['continuous', 'discontinuous', 'histogram', 'bar chart', 'categories'],
      xpValue: 25,
    },
    {
      id: 'vcd-q19',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class measures hand-span and finds the values 16.2 cm, 16.5 cm, 17.1 cm, 17.4 cm, 18.0 cm. Which conclusion is best supported?',
      tier: 'challenge',
      options: [
        'The data is discontinuous because the numbers do not match exactly.',
        'The data is continuous because the values lie along a smooth scale; any in-between value such as 17.3 cm is possible.',
        'The data is continuous because there are exactly five pupils.',
        'The data is discontinuous because cm is a unit.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'vcd-mis-continuous-needs-all-different',
    },
    {
      id: 'vcd-q20',
      type: 'numeric-entry',
      stem: 'A Sevenoaks Y7 class of 30 pupils records blood group: A 12, B 6, AB 3, O 9. What percentage of the class are blood group O? Give your answer as a whole number.',
      tier: 'challenge',
      correctAnswer: 30,
      unit: '%',
      xpValue: 25,
      hint: 'Divide the O count by 30, then multiply by 100.',
    },
    {
      id: 'vcd-q21',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 pupil records arm-span to the nearest cm. Each pupil ends up labelled 142, 143, 144, or 145. Has the trait changed from continuous to discontinuous?',
      tier: 'challenge',
      options: [
        'Yes, because the recorded values are now whole numbers.',
        'Yes, because there are exactly four labels.',
        'No, the trait is still continuous; only the way the data is recorded has been rounded.',
        'No, because arm-span is the same as height.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'vcd-mis-rounded-values-discontinuous',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2019, Question 6 (variation): "Many candidates labelled blood group as continuous variation, treating the four groups as a small numerical scale." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-WRE-2019.PDF
    {
      id: 'vcd-mis-categories-as-continuous',
      description:
        'Categories such as blood group or eye colour are continuous variation because there are several of them.',
      triggerAnswer: 'categories-as-continuous',
      correction:
        'In fact, blood group and eye colour fall into separate categories with no in-between value, so they are discontinuous. The number of categories does not matter; the question is whether the values run on a smooth scale.',
      reExplanation:
        'Ask yourself: could a pupil sit halfway between two values? Halfway between 16 cm hand-span and 17 cm hand-span is 16.5 cm, so hand-span is continuous. Halfway between blood group A and blood group B does not exist, so blood group is discontinuous.',
    },
    // Source: BBC Bitesize KS3 Biology, "Variation" topic page (Inheritance and selection sub-section), Common Misconception block: "Some learners assume bar charts and histograms are interchangeable, missing that touching bars and gaps between bars carry meaning." https://www.bbc.co.uk/bitesize/topics/zwbtsbk
    {
      id: 'vcd-mis-bar-vs-histogram',
      description:
        'A bar chart and a histogram are the same chart with a different name.',
      triggerAnswer: 'bar-vs-histogram-same',
      correction:
        'Actually, the two charts carry different meanings. A histogram has bars that touch, because the data runs on a smooth scale. A bar chart has gaps between the bars, because the data is in separate categories.',
      reExplanation:
        'Two charts, two clues. Touching bars say "there is no break in the scale; you could have any value in between". Gaps between the bars say "these categories are separate; nothing fits between them". Pick the chart that matches the kind of data.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.180 Common mistake: "students assume that for a trait to be continuous, every value must be different; they confuse 'continuous' with 'unique'." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'vcd-mis-continuous-needs-all-different',
      description:
        'A trait can only be continuous if every pupil has a different value.',
      triggerAnswer: 'all-different-needed',
      correction:
        'In fact, two pupils could be exactly 142 cm tall and the trait is still continuous. Continuous means the data runs on a smooth scale where any value is possible, not that every value must be different.',
      reExplanation:
        'Picture a metre rule. Two pupils can both line up at 142 cm, while a third pupil sits at 142.4 cm. The scale is still smooth and continuous. Repeated values are fine; gaps in the possible values are what would make the trait discontinuous.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 4 (SB4) "Natural selection and genetic modification" examiner report 2018, comments on Question 5 (variation): "A common error treated tongue-rolling as continuous because students felt some people could roll their tongues 'more' than others." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'vcd-mis-tongue-rolling-degrees',
      description:
        'Tongue-rolling is continuous because some pupils can roll their tongue a bit and some can roll it a lot.',
      triggerAnswer: 'tongue-rolling-degrees',
      correction:
        'Actually, KS3 records tongue-rolling as a yes-or-no trait. Two categories, no in-between value, so it is discontinuous.',
      reExplanation:
        'In a Year 7 survey, you tick "can roll" or "cannot roll". You do not put a number on it. With two clear categories the data is discontinuous, even if a few pupils joke that they are halfway.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.6.2.4 Variation: rounded data is described as continuous because "the underlying scale is continuous even when measurements are recorded to the nearest unit." https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'vcd-mis-rounded-values-discontinuous',
      description:
        'A continuous trait becomes discontinuous as soon as you round the measurements to whole numbers.',
      triggerAnswer: 'rounded-discontinuous',
      correction:
        'In fact, the trait is still continuous. Rounding is what the recorder did to the data; the underlying scale is still smooth and any value is possible.',
      reExplanation:
        'Think about the rounding step as a label on top of the real value. The real value runs along a smooth scale; the label just snaps to the nearest whole number. The kind of variation is decided by the underlying trait, not by the rounding choice.',
    },
    // Source: BBC Bitesize KS3 Biology, "Variation" topic page (Inheritance and selection): "Pupils sometimes mix up the two kinds of cause for a trait, deciding that any visible feature must be inherited or any environmental feature must vary continuously." https://www.bbc.co.uk/bitesize/topics/zwbtsbk
    {
      id: 'vcd-mis-trait-causes-continuous',
      description:
        'A trait is continuous if it has many causes (genes plus environment), and discontinuous if it has only one cause.',
      triggerAnswer: 'cause-decides-type',
      correction:
        'Actually, the kind of variation is decided by the data, not by the cause. The test is "is the value on a measuring scale, or in a category?". The cause is a separate Year 8 / 9 topic.',
      reExplanation:
        'At Year 7 we describe what we see and how to record it. Continuous: the value sits anywhere on a scale. Discontinuous: the value sits in a category. We do not need to ask why the variation exists to label the kind.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2018, Question 4 (graphs): "Several candidates produced bar charts with bars touching, blurring the difference between continuous and discontinuous data presentation." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-WRE-2018.PDF
    {
      id: 'vcd-mis-touching-bars-on-categories',
      description:
        'You can draw a bar chart with bars that touch when the categories are short.',
      triggerAnswer: 'touching-bars-categories',
      correction:
        'In fact, when the data is in categories the bars must sit apart. Touching bars are reserved for histograms of continuous data.',
      reExplanation:
        'The shape of the chart is part of the message. A reader sees touching bars and reads "this is a smooth scale". A reader sees gaps and reads "these are separate categories". Mix the two up and you mislead the reader.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

// ---------------------------------------------------------------------------
// Node 2 SVGs
// ---------------------------------------------------------------------------

const fiveKingdomsOverviewSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The five kingdoms of living things</text>
  <rect x="20" y="60" width="170" height="130" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="105" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Animals</text>
  <text x="105" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Many cells, no cell wall.</text>
  <text x="105" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eat other organisms.</text>
  <text x="105" y="160" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Examples: dog, robin,</text>
  <text x="105" y="178" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">badger, hedgehog.</text>
  <rect x="210" y="60" width="170" height="130" rx="10" fill="#BBF7D0" stroke="#15803D" stroke-width="2" />
  <text x="295" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Plants</text>
  <text x="295" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Many cells, cell wall</text>
  <text x="295" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">made of cellulose.</text>
  <text x="295" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Make own food by</text>
  <text x="295" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">photosynthesis.</text>
  <rect x="400" y="60" width="170" height="130" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="485" y="90" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Fungi</text>
  <text x="485" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Cell wall made of</text>
  <text x="485" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">chitin, not cellulose.</text>
  <text x="485" y="156" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Feed by absorbing</text>
  <text x="485" y="174" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">decaying matter.</text>
  <rect x="115" y="210" width="170" height="130" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="200" y="240" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Protists</text>
  <text x="200" y="266" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Single cell, with</text>
  <text x="200" y="284" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">a nucleus (eukaryote).</text>
  <text x="200" y="306" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Examples: Amoeba,</text>
  <text x="200" y="324" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Paramecium.</text>
  <rect x="305" y="210" width="170" height="130" rx="10" fill="#E9D5FF" stroke="#5B21B6" stroke-width="2" />
  <text x="390" y="240" text-anchor="middle" font-family="sans-serif" font-size="15" fill="#1F2937">Prokaryotes</text>
  <text x="390" y="258" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(bacteria)</text>
  <text x="390" y="282" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Single cell, no nucleus.</text>
  <text x="390" y="304" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Examples: E. coli,</text>
  <text x="390" y="322" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Lactobacillus.</text>
  <text x="300" y="378" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Five kingdoms, sorted by cell type, cell wall, and feeding mode.</text>
</svg>
`.trim()

const cellFeatureCompareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Three features that sort the kingdoms</text>
  <line x1="40" y1="55" x2="560" y2="55" stroke="#1F2937" stroke-width="1.5" />
  <line x1="40" y1="380" x2="560" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="40" y1="55" x2="40" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="170" y1="55" x2="170" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="300" y1="55" x2="300" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="430" y1="55" x2="430" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="560" y1="55" x2="560" y2="380" stroke="#1F2937" stroke-width="1.5" />
  <line x1="40" y1="100" x2="560" y2="100" stroke="#1F2937" stroke-width="1.5" />
  <text x="105" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Kingdom</text>
  <text x="235" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Cell type</text>
  <text x="365" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Cell wall?</text>
  <text x="495" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Feeding</text>
  <text x="105" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Animals</text>
  <text x="235" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eukaryote</text>
  <text x="365" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">No</text>
  <text x="495" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Heterotroph</text>
  <text x="105" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Plants</text>
  <text x="235" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eukaryote</text>
  <text x="365" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Yes (cellulose)</text>
  <text x="495" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Autotroph</text>
  <text x="105" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Fungi</text>
  <text x="235" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eukaryote</text>
  <text x="365" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Yes (chitin)</text>
  <text x="495" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Heterotroph</text>
  <text x="105" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Protists</text>
  <text x="235" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eukaryote</text>
  <text x="365" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Some yes,</text>
  <text x="365" y="266" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">some no</text>
  <text x="495" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Mixed</text>
  <text x="105" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Prokaryotes</text>
  <text x="105" y="306" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(bacteria)</text>
  <text x="235" y="298" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Prokaryote</text>
  <text x="365" y="298" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Yes (not</text>
  <text x="365" y="314" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">cellulose)</text>
  <text x="495" y="298" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Mixed</text>
  <text x="300" y="345" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Eukaryote = cell with a nucleus. Prokaryote = cell without one.</text>
  <text x="300" y="362" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Autotroph = makes own food. Heterotroph = takes food from elsewhere.</text>
</svg>
`.trim()

const ukOrganismGallerySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">UK organisms across the five kingdoms</text>
  <rect x="20" y="60" width="170" height="120" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="105" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Animal kingdom</text>
  <text x="105" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A red fox in a</text>
  <text x="105" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Sevenoaks garden.</text>
  <text x="105" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Many cells, no cell wall,</text>
  <text x="105" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">eats other animals.</text>
  <rect x="210" y="60" width="170" height="120" rx="10" fill="#BBF7D0" stroke="#15803D" stroke-width="2" />
  <text x="295" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Plant kingdom</text>
  <text x="295" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">An oak tree in a</text>
  <text x="295" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Kentish woodland.</text>
  <text x="295" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Cellulose cell wall,</text>
  <text x="295" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">photosynthesises.</text>
  <rect x="400" y="60" width="170" height="120" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="485" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Fungi kingdom</text>
  <text x="485" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A button mushroom</text>
  <text x="485" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">on the kitchen table.</text>
  <text x="485" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Chitin cell wall,</text>
  <text x="485" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">absorbs nutrients.</text>
  <rect x="115" y="200" width="170" height="120" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="200" y="226" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Protist kingdom</text>
  <text x="200" y="252" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">An Amoeba seen</text>
  <text x="200" y="270" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">in a pond sample.</text>
  <text x="200" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Single cell with a</text>
  <text x="200" y="312" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">nucleus.</text>
  <rect x="305" y="200" width="170" height="120" rx="10" fill="#E9D5FF" stroke="#5B21B6" stroke-width="2" />
  <text x="390" y="226" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Prokaryote kingdom</text>
  <text x="390" y="252" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Lactobacillus that</text>
  <text x="390" y="270" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">turns milk into yoghurt.</text>
  <text x="390" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Single cell, no nucleus,</text>
  <text x="390" y="312" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">cell wall.</text>
  <text x="300" y="378" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">UK examples for every kingdom: from a Kentish wood to the kitchen fridge.</text>
</svg>
`.trim()

// ---------------------------------------------------------------------------
// Node 2: Classification, Five Kingdoms (Confident)
// ---------------------------------------------------------------------------

export const fiveKingdomsClassification: SkillNode = {
  id: 'biology-classification-five-kingdoms',
  title: 'Classification: Five Kingdoms',
  description:
    'Sort UK living things into the five kingdoms (animals, plants, fungi, protists, prokaryotes) using three key features: cell type, cell wall, and feeding mode. Decide which kingdom an oak tree, a fox, a button mushroom, an Amoeba, and the Lactobacillus in yoghurt belong to.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-variation-classification',
  zoneName: 'Variation and Classification',
  tier: 'confident',
  prerequisites: ['biology-variation-continuous-discontinuous', 'biology-cells-plant-cell'],
  curriculum: {
    ks3Objective:
      'The variation between species and between individuals of the same species meaning some organisms compete more successfully, which can drive natural selection.',
    awardingBodies: {
      aqa: '4.6.4.4 Classification of living organisms (GCSE Biology 8461). Five kingdoms grouping by cell features and nutrition.',
      edexcel: 'SB4d Classification (GCSE Biology 1BI0, Topic 4). The five-kingdom system as a Year 7 stepping stone before three-domains at GCSE.',
      ocr: 'B6.2.2 Classification (GCSE Biology A J247). Group organisms by shared cell-level features.',
    },
  },
  scenes: [
    {
      id: 'cls-scene-overview',
      title: 'The Five Kingdoms',
      type: 'labelled-diagram',
      instructions:
        'Click each kingdom card to read what defines it and a UK example you might already know.',
      data: {
        svg: fiveKingdomsOverviewSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cls-hs-animal',
            x: 18,
            y: 30,
            label: 'Animals',
            description:
              'Many-celled, no cell wall, eat other organisms (heterotroph). UK examples: dog, robin, badger, hedgehog.',
          },
          {
            id: 'cls-hs-plant',
            x: 50,
            y: 30,
            label: 'Plants',
            description:
              'Many-celled, cellulose cell wall, make their own food by photosynthesis (autotroph). UK examples: oak, sycamore, daisy, holly.',
          },
          {
            id: 'cls-hs-fungi',
            x: 81,
            y: 30,
            label: 'Fungi',
            description:
              'Cell wall made of chitin (not cellulose), feed by absorbing nutrients from decaying matter. UK examples: button mushroom, bread mould, baker\'s yeast.',
          },
          {
            id: 'cls-hs-protist',
            x: 33,
            y: 70,
            label: 'Protists',
            description:
              'Mostly single-celled, with a nucleus (eukaryote). UK examples: Amoeba and Paramecium found in pond water.',
          },
          {
            id: 'cls-hs-prokaryote',
            x: 65,
            y: 70,
            label: 'Prokaryotes (bacteria)',
            description:
              'Single-celled, no nucleus (prokaryote), small cell wall. UK examples: E. coli, Lactobacillus that turns milk into yoghurt.',
          },
        ],
      },
    },
    {
      id: 'cls-scene-features',
      title: 'Three Features Sort the Kingdoms',
      type: 'labelled-diagram',
      instructions:
        'Click each row of the table to see how the three features work for that kingdom.',
      data: {
        svg: cellFeatureCompareSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cls-hs-row-animal',
            x: 50,
            y: 33,
            label: 'Animals row',
            description:
              'Eukaryote cell, no cell wall, heterotroph. The "no cell wall" row is the only one in the table; that is what marks the animal kingdom out.',
          },
          {
            id: 'cls-hs-row-plant',
            x: 50,
            y: 43,
            label: 'Plants row',
            description:
              'Eukaryote cell, cellulose cell wall, autotroph. Plants are the only multicellular kingdom that makes its own food by photosynthesis.',
          },
          {
            id: 'cls-hs-row-fungi',
            x: 50,
            y: 53,
            label: 'Fungi row',
            description:
              'Eukaryote cell, chitin cell wall, heterotroph. Fungi do have a cell wall, but it is made of chitin, not cellulose. They do not photosynthesise.',
          },
          {
            id: 'cls-hs-row-prokaryote',
            x: 50,
            y: 75,
            label: 'Prokaryotes row',
            description:
              'Prokaryote cell (no nucleus), cell wall, mixed feeding modes. The "no nucleus" feature is the headline difference. Bacteria sit in this kingdom.',
          },
          {
            id: 'cls-hs-key',
            x: 50,
            y: 90,
            label: 'Key terms',
            description:
              'Eukaryote: cell with a nucleus. Prokaryote: cell without one. Autotroph: makes own food. Heterotroph: takes food from somewhere else.',
          },
        ],
      },
    },
    {
      id: 'cls-scene-uk-gallery',
      title: 'UK Organisms in Each Kingdom',
      type: 'labelled-diagram',
      instructions:
        'Click each card to read a UK example you can probably point to in real life.',
      data: {
        svg: ukOrganismGallerySvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'cls-hs-uk-fox',
            x: 18,
            y: 30,
            label: 'Red fox (Animalia)',
            description:
              'A common UK mammal often seen in Sevenoaks gardens at dusk. Many cells, no cell wall, hunts and scavenges other animals.',
          },
          {
            id: 'cls-hs-uk-oak',
            x: 50,
            y: 30,
            label: 'Oak tree (Plantae)',
            description:
              'A native UK woodland tree. Cellulose cell wall, large permanent vacuole, photosynthesises in its leaves to make glucose.',
          },
          {
            id: 'cls-hs-uk-mushroom',
            x: 81,
            y: 30,
            label: 'Button mushroom (Fungi)',
            description:
              'A UK kitchen staple. The mushroom is a fruiting body of a fungus. Chitin cell wall, feeds by absorbing nutrients from compost.',
          },
          {
            id: 'cls-hs-uk-amoeba',
            x: 33,
            y: 65,
            label: 'Amoeba (Protista)',
            description:
              'A single-celled organism with a nucleus, found in pond water. It moves and engulfs food using flexible projections of its cell.',
          },
          {
            id: 'cls-hs-uk-yoghurt',
            x: 65,
            y: 65,
            label: 'Lactobacillus (Prokaryote)',
            description:
              'A bacterium added to milk to make yoghurt. Single cell, no nucleus, ferments lactose into lactic acid.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'cls-worked-1',
      title: 'Sorting six UK organisms into kingdoms',
      steps: [
        {
          explanation:
            'Step 1: Ask "is the cell a eukaryote (with a nucleus) or a prokaryote (no nucleus)?" Prokaryote means bacteria.',
        },
        {
          explanation:
            'Step 2 for eukaryotes: ask "is there a cell wall?" No wall means animal. Cellulose wall plus photosynthesis means plant. Chitin wall means fungi. Single-celled with a nucleus often means protist.',
        },
        {
          explanation:
            'A robin in a garden: many cells, no cell wall, eats worms. So it is in the animal kingdom.',
        },
        {
          explanation:
            'A holly bush: many cells, cellulose cell wall, photosynthesises. So it is in the plant kingdom.',
        },
        {
          explanation:
            'Bread mould: cell wall of chitin, absorbs nutrients from the bread. So it is in the fungi kingdom.',
        },
        {
          explanation:
            'A Paramecium from a school pond: a single cell with a nucleus, swims using tiny hairs. So it is in the protist kingdom.',
        },
        {
          explanation:
            'E. coli in the gut: a single cell with no nucleus. So it is in the prokaryote (bacteria) kingdom.',
        },
        {
          explanation:
            'A spider on a kitchen wall: many cells, no cell wall, eats flies. So it is in the animal kingdom too.',
        },
      ],
    },
    {
      id: 'cls-worked-2',
      title: 'Why baker\'s yeast belongs to the fungi kingdom (with a missing step)',
      steps: [
        {
          explanation:
            'A pupil sees a packet of baker\'s yeast in the kitchen and thinks it is a kind of bacteria. They check the three features.',
        },
        {
          explanation:
            'Feature 1: cell type. Yeast cells have a clear nucleus. So they are eukaryote, not prokaryote. That rules out bacteria.',
        },
        {
          explanation:
            'Feature 2: cell wall. Yeast cells have a cell wall, so they are not animals.',
        },
        // Missing step (filled in by the worked example)
        {
          explanation:
            'Feature 3: what is the cell wall made of? Yeast cell walls are made of chitin (with some other sugars), not cellulose. Yeast does not photosynthesise either.',
        },
        {
          explanation:
            'So baker\'s yeast is a single-celled fungus, not a bacterium. It is in the fungi kingdom, alongside the button mushroom and bread mould.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'cls-q1',
      type: 'multiple-choice',
      stem: 'Which kingdom does a robin belong to?',
      tier: 'core',
      options: ['Plants', 'Animals', 'Fungi', 'Protists'],
      correctIndex: 1,
      xpValue: 10,
    },
    {
      id: 'cls-q2',
      type: 'multiple-choice',
      stem: 'Which kingdom does an oak tree belong to?',
      tier: 'core',
      options: ['Plants', 'Animals', 'Fungi', 'Prokaryotes'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'cls-q3',
      type: 'multiple-choice',
      stem: 'Which kingdom does a button mushroom belong to?',
      tier: 'core',
      options: ['Plants', 'Animals', 'Fungi', 'Protists'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'cls-mis-mushroom-is-plant',
    },
    {
      id: 'cls-q4',
      type: 'multiple-choice',
      stem: 'Which kingdom does Lactobacillus, the bacterium that turns milk into yoghurt, belong to?',
      tier: 'core',
      options: ['Plants', 'Fungi', 'Protists', 'Prokaryotes'],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'cls-q5',
      type: 'multiple-choice',
      stem: 'Which kingdom does an Amoeba seen in a pond sample belong to?',
      tier: 'core',
      options: ['Plants', 'Animals', 'Protists', 'Prokaryotes'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'cls-q6',
      type: 'multiple-choice',
      stem: 'Which feature is true of every cell in the animal kingdom?',
      tier: 'core',
      options: [
        'They have no cell wall.',
        'They have a cell wall made of cellulose.',
        'They have no nucleus.',
        'They make their own food by photosynthesis.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'cls-mis-animals-have-cell-wall',
    },
    {
      id: 'cls-q7',
      type: 'multiple-choice',
      stem: 'What is the cell wall of a fungus made of?',
      tier: 'core',
      options: ['Cellulose', 'Chitin', 'Glucose', 'Chlorophyll'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'cls-mis-fungi-cellulose-wall',
    },
    {
      id: 'cls-q8',
      type: 'numeric-entry',
      stem: 'How many kingdoms are there in the classic five-kingdom system used at KS3?',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'The kingdoms are animals, plants, fungi, protists, and prokaryotes.',
    },
    {
      id: 'cls-q9',
      type: 'spot-misconception',
      stem: 'A pupil writes that "fungi are in the plant kingdom because they grow out of the ground." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. Anything that grows from the ground and does not move is a plant.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Fungi do not photosynthesise and their cell wall is chitin, not cellulose. So they have their own kingdom, separate from plants.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cls-mis-mushroom-is-plant',
    },
    {
      id: 'cls-q10',
      type: 'spot-misconception',
      stem: 'A pupil writes that "all single-celled organisms are bacteria." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. If a cell is on its own, it must be a bacterium.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Some single-celled organisms (like Amoeba) have a nucleus, so they are protists. Bacteria are the single-celled organisms that have no nucleus.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'cls-mis-single-cell-equals-bacteria',
    },
    {
      id: 'cls-q11',
      type: 'numeric-entry',
      stem: 'A pupil lists six microorganisms seen on slides: Amoeba, Paramecium, E. coli, Lactobacillus, baker\'s yeast, and bread mould. How many of them belong to the prokaryote (bacteria) kingdom?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Prokaryotes are single-celled with no nucleus. The famous gut bacterium and the yoghurt bacterium both qualify.',
    },
    {
      id: 'cls-q12',
      type: 'multiple-choice',
      stem: 'Which kingdom contains organisms with no nucleus inside their cells?',
      tier: 'challenge',
      options: ['Animals', 'Plants', 'Fungi', 'Prokaryotes'],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'cls-mis-bacteria-have-nucleus',
    },
    {
      id: 'cls-q13',
      type: 'data-extraction',
      stem: 'A pupil records four cell features for an unknown organism. Which kingdom does it belong to? Cell type: eukaryote. Cell wall: yes, made of cellulose. Photosynthesises: yes. Body: many cells.',
      tier: 'confident',
      dataSource:
        'Unknown organism table. Cell type: eukaryote. Cell wall: yes, made of cellulose. Photosynthesises: yes. Body: many cells.',
      correctAnswer: 'plants',
      xpValue: 15,
      hint: 'Cellulose cell wall plus photosynthesis points to one kingdom only.',
    },
    {
      id: 'cls-q14',
      type: 'data-extraction',
      stem: 'A second unknown organism has these features. Which kingdom is it? Cell type: eukaryote. Cell wall: yes, made of chitin. Photosynthesises: no. Feeds by absorbing decaying matter.',
      tier: 'challenge',
      dataSource:
        'Unknown organism table. Cell type: eukaryote. Cell wall: yes, made of chitin. Photosynthesises: no. Feeding mode: absorbs decaying matter.',
      correctAnswer: 'fungi',
      xpValue: 25,
    },
    {
      id: 'cls-q15',
      type: 'drag-order',
      stem: 'Place these classification questions in the order you should ask them when sorting an organism.',
      tier: 'confident',
      items: [
        'Does the cell have a wall, and if so what is it made of?',
        'Does the organism have a nucleus inside its cells?',
        'Does the organism photosynthesise or take its food from somewhere else?',
      ],
      correctOrder: [1, 0, 2],
      xpValue: 15,
    },
    {
      id: 'cls-q16',
      type: 'drag-drop-builder',
      stem: 'Build a list of UK organisms that all belong to the animal kingdom. Drag in only the animals from the pool. Leave the rest behind.',
      tier: 'confident',
      parts: [
        'Red fox',
        'Common frog',
        'Robin',
        'Hedgehog',
        'Oak tree',
        'Button mushroom',
        'Lactobacillus',
        'Amoeba',
      ],
      correctArrangement: ['Red fox', 'Common frog', 'Robin', 'Hedgehog'],
      xpValue: 20,
    },
    {
      id: 'cls-q17',
      type: 'numeric-entry',
      stem: 'A pupil sorts these eight UK organisms into kingdoms: oak, dog, button mushroom, robin, daisy, Paramecium, Lactobacillus, and bread mould. How many of them belong to the plant kingdom?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Look for organisms that photosynthesise and have a cellulose cell wall.',
    },
    {
      id: 'cls-q18',
      type: 'numeric-entry',
      stem: 'In the same list (oak, dog, button mushroom, robin, daisy, Paramecium, Lactobacillus, bread mould), how many of them belong to the fungi kingdom?',
      tier: 'confident',
      correctAnswer: 2,
      xpValue: 15,
      hint: 'Fungi have a chitin cell wall and feed by absorbing nutrients.',
    },
    {
      id: 'cls-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how a pupil decides whether baker\'s yeast is a fungus or a bacterium.',
      tier: 'challenge',
      steps: [
        'Look up whether yeast cells have a nucleus. They do, so the cell is a eukaryote.',
        'Eukaryotic cells are not bacteria, so yeast cannot be in the prokaryote kingdom.',
        null,
        'So baker\'s yeast is in the fungi kingdom, alongside the button mushroom.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Check the cell wall. Yeast cell walls are made of chitin, not cellulose, and yeast does not photosynthesise. That rules out plants and fits the fungi kingdom.',
      xpValue: 20,
    },
    {
      id: 'cls-q20',
      type: 'free-text',
      stem: 'Explain in one or two sentences why a button mushroom is in the fungi kingdom and not in the plant kingdom.',
      tier: 'challenge',
      sampleAnswer:
        'A button mushroom does not photosynthesise. It feeds by absorbing nutrients from the soil or compost. Its cell wall is made of chitin, not cellulose, so it does not match the plant kingdom features.',
      keywords: ['photosynthesise', 'cellulose', 'chitin', 'fungi', 'absorb'],
      xpValue: 25,
      misconceptionId: 'cls-mis-mushroom-is-plant',
    },
    {
      id: 'cls-q21',
      type: 'multiple-choice',
      stem: 'A scientist finds a microscopic single-celled organism. Under the microscope she sees a clear nucleus and tiny hairs that the cell uses to swim. Which kingdom is the most likely match?',
      tier: 'challenge',
      options: [
        'Prokaryote, because it is single-celled.',
        'Protist, because it is single-celled with a nucleus.',
        'Fungi, because it has tiny hairs.',
        'Plant, because it can move.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'cls-mis-single-cell-equals-bacteria',
    },
    {
      id: 'cls-q22',
      type: 'multiple-choice',
      stem: 'Why are bacteria placed in their own kingdom and not lumped in with protists?',
      tier: 'challenge',
      options: [
        'Bacteria are smaller, but otherwise the same.',
        'Bacteria are decomposers and protists are not.',
        'Bacterial cells have no nucleus (prokaryote), while protist cells do (eukaryote).',
        'Bacteria have a cell wall and protists never do.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'cls-mis-bacteria-have-nucleus',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2017, Question 2 (kingdoms): "Pupils frequently placed mushrooms and toadstools into the plant kingdom because they grow rooted to the ground." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2017/june/AQA-84612F-WRE-2017.PDF
    {
      id: 'cls-mis-mushroom-is-plant',
      description:
        'Fungi (mushrooms, moulds) belong to the plant kingdom because they grow out of the ground.',
      triggerAnswer: 'mushroom-is-plant',
      correction:
        'Actually, fungi do not photosynthesise and their cell wall is made of chitin, not cellulose. They have their own kingdom, separate from plants.',
      reExplanation:
        'Plants build glucose from sunlight, CO₂, and water using chloroplasts. A button mushroom has no chloroplasts and never makes its own food. It absorbs nutrients from compost or wood instead. The "rooted in the ground" cue is misleading.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.184 Common mistake: students assume animal cells must have a cell wall because they hear "wall" in everyday language; the cell-wall-vs-cell-membrane mix-up echoes the cells-zone misconception. https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'cls-mis-animals-have-cell-wall',
      description:
        'Animal cells have a cell wall.',
      triggerAnswer: 'animals-have-wall',
      correction:
        'In fact, animal cells have a cell membrane but no cell wall. Cell walls belong to plants (cellulose), fungi (chitin), and most prokaryotes.',
      reExplanation:
        'No-wall vs wall is the key sort line. A robin\'s cell has a soft membrane and changes shape easily. An oak leaf cell sits stiff inside a cellulose wall, which is why a tree stands up against gravity. The animal kingdom is the only multicellular kingdom with no cell wall.',
    },
    // Source: BBC Bitesize KS3 Biology, "Variation, classification and inheritance" topic page, Common Misconception block: "Some learners say fungi have a cellulose cell wall like plants; the wall is actually made of chitin." https://www.bbc.co.uk/bitesize/topics/zwbtsbk
    {
      id: 'cls-mis-fungi-cellulose-wall',
      description:
        'Fungi have a cellulose cell wall, just like plants.',
      triggerAnswer: 'fungi-cellulose',
      correction:
        'Actually, fungal cell walls are made of chitin, not cellulose. Cellulose walls are unique to plants in the five-kingdom system.',
      reExplanation:
        'Different walls, different kingdoms. Cellulose: plants (oak, daisy, holly). Chitin: fungi (mushroom, mould, yeast). Bacteria use a third kind of wall (peptidoglycan, but you only need "cell wall, not cellulose" at KS3). So "cell wall present" is not enough; the material matters.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 4 Foundation tier examiner report 2019, comments on a classification question: "A common error grouped Amoeba with bacteria simply because it is single-celled, missing the eukaryote nucleus." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'cls-mis-single-cell-equals-bacteria',
      description:
        'Every single-celled organism is a bacterium.',
      triggerAnswer: 'single-cell-bacteria',
      correction:
        'In fact, an Amoeba is single-celled but it has a nucleus, so it is a protist, not a bacterium. Bacteria are the single-celled organisms that have no nucleus.',
      reExplanation:
        'Two questions, not one. Question A: is the cell on its own, or in a body? Question B: does the cell have a nucleus? Bacteria are "alone, no nucleus". Protists are "often alone, but with a nucleus". Both can be tiny, but only one is a bacterium.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.1.1.1 Eukaryotes and prokaryotes: bacteria are explicitly defined as cells without a nucleus, with genetic material in a single loop. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'cls-mis-bacteria-have-nucleus',
      description:
        'Bacteria have a nucleus, like other living cells.',
      triggerAnswer: 'bacteria-nucleus',
      correction:
        'Actually, bacteria have no nucleus. Their genetic material sits in a single loop in the cytoplasm. That is why they are called prokaryotes ("before nucleus").',
      reExplanation:
        'Two cell plans run across the kingdoms. Eukaryote cells (animals, plants, fungi, protists) keep their genetic material inside a nucleus. Prokaryote cells (bacteria) do not. The presence or absence of a nucleus is the headline split in the five-kingdom system.',
    },
    // Source: BBC Bitesize KS3 Biology, "Cells" topic page Common Misconception block: "Some learners assume yeast is a bacterium, missing that yeast cells have a clear nucleus and chitin cell wall." https://www.bbc.co.uk/bitesize/topics/zpxnyrd
    {
      id: 'cls-mis-yeast-is-bacteria',
      description:
        'Baker\'s yeast is a kind of bacteria.',
      triggerAnswer: 'yeast-bacteria',
      correction:
        'In fact, yeast is a single-celled fungus. It has a nucleus, so it is a eukaryote, not a prokaryote. The fungus cell wall is made of chitin.',
      reExplanation:
        'Yeast is single-celled, which is why pupils often guess "bacteria". But under a microscope its nucleus is clear, and its cell wall behaves like a fungus, not a bacterium. Yeast sits alongside the button mushroom in the fungi kingdom.',
    },
    // Source: OCR GCSE Biology A (J247) Foundation tier sample assessment commentary 2018: "Candidates frequently merged kingdoms with categories of organisms, e.g. classifying 'insects' as a kingdom." https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-biology-a-j247-from-2016/
    {
      id: 'cls-mis-insects-as-kingdom',
      description:
        'Insects are their own kingdom.',
      triggerAnswer: 'insects-kingdom',
      correction:
        'Actually, insects are not a kingdom. They are a smaller group inside the animal kingdom. The five kingdoms at KS3 are animals, plants, fungi, protists, and prokaryotes.',
      reExplanation:
        'Kingdoms sit at the very top of classification. Inside the animal kingdom there are smaller groups: vertebrates, invertebrates, mammals, birds, insects, and so on. A bee is an insect, an invertebrate, and an animal, but the kingdom label is "animals".',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const variationClassificationZoneNodes: SkillNode[] = [
  continuousDiscontinuousVariation,
  fiveKingdomsClassification,
]

export const variationClassificationZone: Zone = {
  id: 'biology-variation-classification',
  name: 'Variation and Classification',
  realm: 'vitalia',
  nodeIds: [
    continuousDiscontinuousVariation.id,
    fiveKingdomsClassification.id,
  ],
}
