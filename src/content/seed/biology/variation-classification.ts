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
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Shoe size in a Sevenoaks Y7 class (n = 30)</text>
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
      stem: 'Look at the shoe-size histogram for a Sevenoaks Y7 class of 30 pupils. Which UK shoe size is the most common?',
      tier: 'confident',
      dataSource:
        'Histogram of shoe size in a Sevenoaks Y7 class (n = 30). Counts: size 3 = 1, size 4 = 2, size 5 = 3, size 6 = 4, size 7 = 5, size 8 = 4, size 9 = 3, size 10 = 2.',
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
      misconceptionId: 'vcd-mis-bar-vs-histogram',
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
      stem: 'Build a sorted list of continuous traits only. Drag in just the traits that take any value on a measuring scale, in any order. Leave discontinuous traits in the pool.',
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

export const variationClassificationZoneNodes: SkillNode[] = [
  continuousDiscontinuousVariation,
]

export const variationClassificationZone: Zone = {
  id: 'biology-variation-classification',
  name: 'Variation and Classification',
  realm: 'vitalia',
  nodeIds: [continuousDiscontinuousVariation.id],
}
