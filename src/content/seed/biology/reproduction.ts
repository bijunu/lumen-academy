import type { SkillNode, Zone } from '@/types/content'

// =============================================================================
// Node 1: Flowering Plant Reproduction (Core, biology-reproduction-flowering-plant)
// =============================================================================

const flowerPartsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Inside an insect-pollinated flower</text>
  <ellipse cx="300" cy="220" rx="36" ry="44" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="300" cy="220" rx="120" ry="80" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" opacity="0.75" />
  <ellipse cx="300" cy="220" rx="36" ry="44" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <line x1="270" y1="210" x2="240" y2="170" stroke="#15803D" stroke-width="3" />
  <line x1="280" y1="200" x2="260" y2="150" stroke="#15803D" stroke-width="3" />
  <line x1="320" y1="200" x2="340" y2="150" stroke="#15803D" stroke-width="3" />
  <line x1="330" y1="210" x2="360" y2="170" stroke="#15803D" stroke-width="3" />
  <ellipse cx="240" cy="168" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="260" cy="148" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="340" cy="148" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="360" cy="168" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <line x1="300" y1="200" x2="300" y2="140" stroke="#15803D" stroke-width="4" />
  <ellipse cx="300" cy="138" rx="14" ry="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="300" cy="260" rx="22" ry="14" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <line x1="280" y1="262" x2="260" y2="280" stroke="#15803D" stroke-width="3" />
  <line x1="320" y1="262" x2="340" y2="280" stroke="#15803D" stroke-width="3" />
  <ellipse cx="258" cy="282" rx="8" ry="5" fill="#16A34A" stroke="#14532D" stroke-width="1" />
  <ellipse cx="342" cy="282" rx="8" ry="5" fill="#16A34A" stroke="#14532D" stroke-width="1" />
  <line x1="300" y1="270" x2="300" y2="380" stroke="#15803D" stroke-width="4" />
  <line x1="20" y1="138" x2="270" y2="138" stroke="#374151" stroke-width="1" />
  <text x="14" y="142" text-anchor="end" font-family="sans-serif" font-size="13" fill="#1F2937">Stigma</text>
  <line x1="20" y1="170" x2="220" y2="170" stroke="#374151" stroke-width="1" />
  <text x="14" y="174" text-anchor="end" font-family="sans-serif" font-size="13" fill="#1F2937">Style</text>
  <line x1="20" y1="220" x2="260" y2="220" stroke="#374151" stroke-width="1" />
  <text x="14" y="224" text-anchor="end" font-family="sans-serif" font-size="13" fill="#1F2937">Petal</text>
  <line x1="20" y1="262" x2="276" y2="262" stroke="#374151" stroke-width="1" />
  <text x="14" y="266" text-anchor="end" font-family="sans-serif" font-size="13" fill="#1F2937">Ovary</text>
  <line x1="450" y1="148" x2="370" y2="148" stroke="#374151" stroke-width="1" />
  <text x="458" y="152" font-family="sans-serif" font-size="13" fill="#1F2937">Anther</text>
  <line x1="450" y1="180" x2="370" y2="180" stroke="#374151" stroke-width="1" />
  <text x="458" y="184" font-family="sans-serif" font-size="13" fill="#1F2937">Filament</text>
  <line x1="450" y1="282" x2="346" y2="282" stroke="#374151" stroke-width="1" />
  <text x="458" y="286" font-family="sans-serif" font-size="13" fill="#1F2937">Sepal</text>
</svg>
`.trim()

const flowerPartsBlankSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Identify the flower parts</text>
  <ellipse cx="300" cy="220" rx="36" ry="44" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="300" cy="220" rx="120" ry="80" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" opacity="0.75" />
  <ellipse cx="300" cy="220" rx="36" ry="44" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <line x1="270" y1="210" x2="240" y2="170" stroke="#15803D" stroke-width="3" />
  <line x1="280" y1="200" x2="260" y2="150" stroke="#15803D" stroke-width="3" />
  <line x1="320" y1="200" x2="340" y2="150" stroke="#15803D" stroke-width="3" />
  <line x1="330" y1="210" x2="360" y2="170" stroke="#15803D" stroke-width="3" />
  <ellipse cx="240" cy="168" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="260" cy="148" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="340" cy="148" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <ellipse cx="360" cy="168" rx="8" ry="5" fill="#F59E0B" stroke="#92400E" stroke-width="1" />
  <line x1="300" y1="200" x2="300" y2="140" stroke="#15803D" stroke-width="4" />
  <ellipse cx="300" cy="138" rx="14" ry="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <ellipse cx="300" cy="260" rx="22" ry="14" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <line x1="280" y1="262" x2="260" y2="280" stroke="#15803D" stroke-width="3" />
  <line x1="320" y1="262" x2="340" y2="280" stroke="#15803D" stroke-width="3" />
  <ellipse cx="258" cy="282" rx="8" ry="5" fill="#16A34A" stroke="#14532D" stroke-width="1" />
  <ellipse cx="342" cy="282" rx="8" ry="5" fill="#16A34A" stroke="#14532D" stroke-width="1" />
  <line x1="300" y1="270" x2="300" y2="380" stroke="#15803D" stroke-width="4" />
</svg>
`.trim()

const pollinationSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="30" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Two ways pollen travels</text>
  <rect x="20" y="60" width="260" height="320" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="150" y="92" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Insect pollination</text>
  <ellipse cx="150" cy="180" rx="60" ry="36" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" opacity="0.85" />
  <ellipse cx="150" cy="180" rx="14" ry="18" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <ellipse cx="170" cy="158" rx="6" ry="4" fill="#F59E0B" />
  <ellipse cx="130" cy="158" rx="6" ry="4" fill="#F59E0B" />
  <ellipse cx="220" cy="170" rx="14" ry="9" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <ellipse cx="218" cy="166" rx="6" ry="4" fill="#000000" />
  <ellipse cx="220" cy="170" rx="3" ry="2" fill="#FCD34D" />
  <line x1="206" y1="166" x2="200" y2="160" stroke="#92400E" stroke-width="1" />
  <line x1="206" y1="174" x2="200" y2="180" stroke="#92400E" stroke-width="1" />
  <text x="150" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Bright petals.</text>
  <text x="150" y="258" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Sweet nectar.</text>
  <text x="150" y="276" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Sticky pollen catches</text>
  <text x="150" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">on the bee.</text>
  <text x="150" y="320" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Examples: bramble,</text>
  <text x="150" y="336" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">apple, foxglove.</text>
  <rect x="320" y="60" width="260" height="320" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="450" y="92" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Wind pollination</text>
  <ellipse cx="450" cy="180" rx="60" ry="36" fill="#DCFCE7" stroke="#15803D" stroke-width="2" opacity="0.85" />
  <ellipse cx="450" cy="180" rx="10" ry="14" fill="#FEF3C7" stroke="#92400E" stroke-width="1" />
  <line x1="430" y1="170" x2="420" y2="160" stroke="#92400E" stroke-width="1" />
  <line x1="470" y1="170" x2="480" y2="160" stroke="#92400E" stroke-width="1" />
  <ellipse cx="420" cy="160" rx="3" ry="2" fill="#F59E0B" />
  <ellipse cx="480" cy="160" rx="3" ry="2" fill="#F59E0B" />
  <path d="M 360 130 Q 380 120 400 130" stroke="#1D4ED8" stroke-width="2" fill="none" />
  <path d="M 380 110 Q 400 100 420 110" stroke="#1D4ED8" stroke-width="2" fill="none" />
  <path d="M 510 140 Q 530 130 550 140" stroke="#1D4ED8" stroke-width="2" fill="none" />
  <text x="450" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Small dull petals or</text>
  <text x="450" y="258" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">no petals at all.</text>
  <text x="450" y="276" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">No nectar. Light pollen</text>
  <text x="450" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">that floats on the breeze.</text>
  <text x="450" y="320" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Examples: oak, grass,</text>
  <text x="450" y="336" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">silver birch.</text>
</svg>
`.trim()

const dispersalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Four ways seeds are dispersed</text>
  <rect x="20" y="60" width="135" height="160" rx="8" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="2" />
  <text x="88" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Wind</text>
  <ellipse cx="88" cy="130" rx="6" ry="10" fill="#92400E" />
  <line x1="88" y1="120" x2="70" y2="105" stroke="#92400E" stroke-width="1" />
  <line x1="88" y1="120" x2="106" y2="105" stroke="#92400E" stroke-width="1" />
  <ellipse cx="68" cy="100" rx="14" ry="6" fill="#FEF3C7" stroke="#92400E" stroke-width="1" />
  <ellipse cx="108" cy="100" rx="14" ry="6" fill="#FEF3C7" stroke="#92400E" stroke-width="1" />
  <text x="88" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Sycamore</text>
  <text x="88" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">helicopter</text>
  <text x="88" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">spins down.</text>
  <rect x="165" y="60" width="135" height="160" rx="8" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="232" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Animal</text>
  <circle cx="232" cy="130" r="22" fill="#7F1D1D" stroke="#450A0A" stroke-width="2" />
  <circle cx="232" cy="130" r="6" fill="#FEF3C7" />
  <text x="232" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Bramble berry</text>
  <text x="232" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">eaten by a bird,</text>
  <text x="232" y="212" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">seed in droppings.</text>
  <rect x="310" y="60" width="135" height="160" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2" />
  <text x="378" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Water</text>
  <ellipse cx="378" cy="130" rx="22" ry="14" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <path d="M 320 158 Q 340 150 360 158 Q 380 150 400 158 Q 420 150 440 158" stroke="#1D4ED8" stroke-width="2" fill="none" />
  <text x="378" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Coconut floats</text>
  <text x="378" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">across the sea.</text>
  <rect x="455" y="60" width="125" height="160" rx="8" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="517" y="84" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Explosive</text>
  <circle cx="517" cy="130" r="14" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
  <line x1="517" y1="116" x2="517" y2="100" stroke="#92400E" stroke-width="2" />
  <line x1="503" y1="125" x2="490" y2="118" stroke="#92400E" stroke-width="2" />
  <line x1="531" y1="125" x2="544" y2="118" stroke="#92400E" stroke-width="2" />
  <circle cx="517" cy="100" r="3" fill="#92400E" />
  <circle cx="490" cy="118" r="3" fill="#92400E" />
  <circle cx="544" cy="118" r="3" fill="#92400E" />
  <text x="517" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Pea pod splits and</text>
  <text x="517" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">flicks seeds away.</text>
  <text x="300" y="260" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Why disperse? Seeds that land far from the parent</text>
  <text x="300" y="278" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">do not have to fight it for light, water, or space.</text>
  <text x="300" y="320" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">UK examples to know: dandelion (wind), oak acorn (animal),</text>
  <text x="300" y="338" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">sycamore helicopter (wind), bramble berry (animal), pea (explosive).</text>
</svg>
`.trim()

export const floweringPlantReproduction: SkillNode = {
  id: 'biology-reproduction-flowering-plant',
  title: 'Flowering Plant Reproduction',
  description:
    'Tour the parts of a flower, then follow the journey from pollination through fertilisation to seed and fruit formation, and finally to dispersal. Sort insect pollination from wind pollination, and pick the right dispersal method for UK favourites such as the oak acorn, the dandelion clock, the sycamore helicopter, and the bramble berry.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-reproduction',
  zoneName: 'Reproduction',
  tier: 'core',
  prerequisites: ['biology-cells-plant-cell'],
  curriculum: {
    ks3Objective:
      'Reproduction in plants, including flower structure, wind and insect pollination, fertilisation, seed and fruit formation and dispersal, including quantitative investigation of some dispersal mechanisms.',
    awardingBodies: {
      aqa: '4.5.1.4 Plant reproduction; sexual reproduction in flowering plants (GCSE Biology 8461). Pollination, fertilisation, seed and fruit formation, dispersal.',
      edexcel: 'SB7a Sexual reproduction in plants (GCSE Biology 1BI0, Topic 7). Flower structure, pollination, fertilisation, seed and fruit formation.',
      ocr: 'B6.1f Plant reproduction and dispersal (GCSE Biology A J247). Adaptations of insect-pollinated and wind-pollinated flowers; seed dispersal mechanisms.',
    },
  },
  scenes: [
    {
      id: 'fpr-scene-flower-parts',
      title: 'Inside a Flower',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the flower to read its name and what it does.',
      data: {
        svg: flowerPartsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fpr-hs-stigma',
            x: 50,
            y: 35,
            label: 'Stigma',
            description:
              'Sticky tip of the female part. Pollen grains stick here.',
          },
          {
            id: 'fpr-hs-style',
            x: 50,
            y: 43,
            label: 'Style',
            description:
              'Stalk that holds the stigma above the ovary.',
          },
          {
            id: 'fpr-hs-ovary',
            x: 50,
            y: 65,
            label: 'Ovary',
            description:
              'Holds the female cells, called ovules. After fertilisation it becomes the fruit.',
          },
          {
            id: 'fpr-hs-anther',
            x: 57,
            y: 37,
            label: 'Anther',
            description:
              'Male part that makes pollen.',
          },
          {
            id: 'fpr-hs-filament',
            x: 50,
            y: 45,
            label: 'Filament',
            description:
              'Stalk that holds the anther up so the pollen is easy to reach.',
          },
          {
            id: 'fpr-hs-petal',
            x: 30,
            y: 55,
            label: 'Petal',
            description:
              'Often bright and scented to attract insect pollinators.',
          },
          {
            id: 'fpr-hs-sepal',
            x: 56,
            y: 71,
            label: 'Sepal',
            description:
              'Small green leaf-like flap that protected the bud before it opened.',
          },
        ],
      },
    },
    {
      id: 'fpr-scene-pollination',
      title: 'Insect Versus Wind Pollination',
      type: 'labelled-diagram',
      instructions:
        'Click each side to compare how insect-pollinated and wind-pollinated flowers are built.',
      data: {
        svg: pollinationSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fpr-poll-insect-petal',
            x: 25,
            y: 45,
            label: 'Bright sticky pollen',
            description:
              'Insect-pollinated flowers have showy petals and sticky pollen that catches on a bee.',
          },
          {
            id: 'fpr-poll-insect-stigma',
            x: 38,
            y: 45,
            label: 'Sticky stigma',
            description:
              'The stigma is sticky and tucked inside the flower so pollen rubs off when the bee lands.',
          },
          {
            id: 'fpr-poll-wind-pollen',
            x: 70,
            y: 40,
            label: 'Light pollen',
            description:
              'Wind-pollinated flowers make huge amounts of light, dry pollen that drifts on the breeze.',
          },
          {
            id: 'fpr-poll-wind-stigma',
            x: 75,
            y: 45,
            label: 'Feathery stigma',
            description:
              'The stigma hangs out of the flower and is feathery so it can catch passing pollen.',
          },
        ],
      },
    },
    {
      id: 'fpr-scene-dispersal',
      title: 'Spreading the Seeds',
      type: 'labelled-diagram',
      instructions:
        'Click each panel to read how that dispersal method works and a UK example you might find on a walk.',
      data: {
        svg: dispersalSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fpr-disp-wind',
            x: 15,
            y: 35,
            label: 'Wind dispersal',
            description:
              'Light seeds with wings or parachutes ride the breeze. Sycamore helicopter, dandelion clock.',
          },
          {
            id: 'fpr-disp-animal',
            x: 39,
            y: 35,
            label: 'Animal dispersal',
            description:
              'Bright sweet fruits are eaten by birds or mammals. The seeds pass through and grow elsewhere. Bramble, holly, hawthorn.',
          },
          {
            id: 'fpr-disp-water',
            x: 63,
            y: 35,
            label: 'Water dispersal',
            description:
              'Seeds that float carry across rivers or seas. Coconut, water lily.',
          },
          {
            id: 'fpr-disp-explosive',
            x: 86,
            y: 35,
            label: 'Explosive dispersal',
            description:
              'Pods dry and snap open, flicking seeds away from the parent. Pea, gorse, geranium.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fpr-worked-1',
      title: 'From pollen on a stigma to a seed in the ground',
      steps: [
        {
          explanation:
            'A bee lands on a foxglove flower. Sticky pollen from the anther rubs onto the bee.',
        },
        {
          explanation:
            'The bee flies to the next foxglove. Some pollen brushes off onto the sticky stigma. This is pollination.',
        },
        {
          explanation:
            'The pollen grain grows a tube down the style into the ovary, where it joins with an ovule. This is fertilisation.',
        },
        {
          explanation:
            'The fertilised ovule grows into a seed. The ovary around it ripens into the fruit.',
        },
        {
          explanation:
            'The seed leaves the parent plant by a dispersal method, lands somewhere new, and can grow into a new foxglove next year.',
        },
      ],
    },
    {
      id: 'fpr-worked-2',
      title: 'Choosing the right dispersal for an oak acorn',
      steps: [
        {
          explanation:
            'An acorn is a heavy nut, much too heavy to drift on the wind.',
        },
        {
          explanation:
            'Acorns do not float for long, so water dispersal does not work as the main method.',
        },
        {
          explanation:
            'An acorn does not have a pod that snaps open, so it is not dispersed by an explosive method.',
        },
        {
          explanation:
            'Grey squirrels and jays carry acorns away to bury for winter. Many are forgotten, and those acorns grow into new oak trees.',
        },
        {
          explanation:
            'So the oak acorn is dispersed by animals, even though the parent tree itself is wind-pollinated.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fpr-q1',
      type: 'multiple-choice',
      stem: 'Which part of the flower makes pollen?',
      tier: 'core',
      options: ['Stigma', 'Ovary', 'Anther', 'Sepal'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fpr-mis-anther-vs-stigma',
    },
    {
      id: 'fpr-q2',
      type: 'multiple-choice',
      stem: 'Which part of the flower receives pollen during pollination?',
      tier: 'core',
      options: ['Stigma', 'Anther', 'Petal', 'Filament'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fpr-mis-anther-vs-stigma',
    },
    {
      id: 'fpr-q3',
      type: 'multiple-choice',
      stem: 'What is pollination?',
      tier: 'core',
      options: [
        'Pollen joining with an ovule inside the ovary.',
        'Pollen moving from an anther to a stigma.',
        'A seed sprouting in the soil.',
        'A petal falling off the flower.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fpr-mis-pollination-equals-fertilisation',
    },
    {
      id: 'fpr-q4',
      type: 'multiple-choice',
      stem: 'What is fertilisation in a flowering plant?',
      tier: 'core',
      options: [
        'Pollen landing on the stigma.',
        'A pollen grain joining with an ovule inside the ovary.',
        'A bee carrying pollen between flowers.',
        'A seed being eaten by a bird.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fpr-mis-pollination-equals-fertilisation',
    },
    {
      id: 'fpr-q5',
      type: 'multiple-choice',
      stem: 'After fertilisation, what does the ovary grow into?',
      tier: 'core',
      options: ['A petal', 'A new flower', 'A root', 'A fruit'],
      correctIndex: 3,
      xpValue: 10,
    },
    {
      id: 'fpr-q6',
      type: 'multiple-choice',
      stem: 'Which feature most strongly suggests a flower is wind-pollinated?',
      tier: 'core',
      options: [
        'Bright petals and sweet nectar.',
        'Small or absent petals and feathery stigma.',
        'Sticky pollen with hooks.',
        'A strong scent that attracts bees.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fpr-mis-bright-equals-wind',
    },
    {
      id: 'fpr-q7',
      type: 'numeric-entry',
      stem: 'A foxglove flower has 1 stigma, 1 style, 1 ovary, and 4 anthers. How many parts is that in total?',
      tier: 'core',
      correctAnswer: 7,
      xpValue: 10,
      hint: 'Add the four counts together.',
    },
    {
      id: 'fpr-q8',
      type: 'drag-order',
      stem: 'Place these stages of plant reproduction in order, from earliest to latest.',
      tier: 'core',
      items: [
        'Fertilisation',
        'Pollination',
        'Seed dispersal',
        'Seed and fruit formation',
      ],
      correctOrder: [1, 0, 3, 2],
      xpValue: 15,
      misconceptionId: 'fpr-mis-pollination-equals-fertilisation',
    },
    {
      id: 'fpr-q9',
      type: 'spot-misconception',
      stem: 'A pupil writes that "fertilisation happens as soon as a bee lands on a flower." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. The moment pollen reaches the flower, fertilisation has happened.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Pollen first has to grow a tube down to the ovule before fertilisation happens. Pollination and fertilisation are two separate steps.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fpr-mis-pollination-equals-fertilisation',
    },
    {
      id: 'fpr-q10',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks meadow, a Year 7 class counts 24 dandelion seeds floating from one clock. The wind blows them an average of 5 metres each. What is the total combined distance travelled, in metres?',
      tier: 'confident',
      correctAnswer: 120,
      unit: 'm',
      xpValue: 15,
      hint: 'Multiply 24 by 5.',
    },
    {
      id: 'fpr-q11',
      type: 'labelled-image',
      stem: 'Drag each label onto the matching part of the flower diagram.',
      tier: 'confident',
      svg: flowerPartsBlankSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'fpr-q11-hs-stigma', x: 50, y: 35, correctLabel: 'Stigma' },
        { id: 'fpr-q11-hs-anther', x: 60, y: 38, correctLabel: 'Anther' },
        { id: 'fpr-q11-hs-ovary', x: 50, y: 65, correctLabel: 'Ovary' },
        { id: 'fpr-q11-hs-petal', x: 30, y: 55, correctLabel: 'Petal' },
      ],
      labels: [
        'Stigma',
        'Anther',
        'Ovary',
        'Petal',
        'Sepal',
        'Filament',
        'Root',
        'Leaf',
      ],
      xpValue: 20,
    },
    {
      id: 'fpr-q12',
      type: 'multiple-choice',
      stem: 'Why is the stigma of a wind-pollinated grass flower large and feathery?',
      tier: 'confident',
      options: [
        'To attract bees that have lost their way.',
        'To catch passing pollen grains drifting on the breeze.',
        'To stop water washing pollen away in the rain.',
        'To make the flower look bright to passers-by.',
      ],
      correctIndex: 1,
      xpValue: 15,
    },
    {
      id: 'fpr-q13',
      type: 'multiple-choice',
      stem: 'Which UK seed is dispersed by an animal eating a sweet fruit and later passing the seed in droppings?',
      tier: 'confident',
      options: ['Sycamore helicopter', 'Dandelion clock', 'Bramble berry', 'Pea pod'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fpr-mis-acorn-by-wind',
    },
    {
      id: 'fpr-q14',
      type: 'drag-drop-builder',
      stem: 'Build one buttercup flower. A buttercup has both male and female parts in the same flower. Drag in only the parts that belong inside one flower.',
      tier: 'confident',
      parts: [
        'Stigma',
        'Style',
        'Ovary',
        'Anther',
        'Filament',
        'Petal',
        'Sepal',
        'Leaf',
        'Root',
        'Trunk',
      ],
      correctArrangement: [
        'Stigma',
        'Style',
        'Ovary',
        'Anther',
        'Filament',
        'Petal',
        'Sepal',
      ],
      xpValue: 20,
      misconceptionId: 'fpr-mis-flower-only-female',
    },
    {
      id: 'fpr-q15',
      type: 'spot-misconception',
      stem: 'A pupil says: "Bright petals and sweet nectar are signs that a flower uses the wind to spread its pollen." Is this method sound?',
      tier: 'challenge',
      statements: [
        {
          text: 'The method is sound. Wind needs bright petals to push the pollen along.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Bright petals and nectar attract insects, not wind. Wind-pollinated flowers are usually small, dull, and have no nectar.',
          isMisconception: false,
        },
      ],
      xpValue: 25,
      misconceptionId: 'fpr-mis-bright-equals-wind',
    },
    {
      id: 'fpr-q16',
      type: 'data-extraction',
      stem: 'Which seed flew the furthest on average in the class investigation?',
      tier: 'confident',
      dataSource:
        'A Year 7 class drops three UK seeds from a 2 m height in still air, then again with a fan blowing at the same speed. Average distance with the fan: A. Sycamore samara 4.2 m. B. Oak acorn 0.3 m. C. Dandelion parachute 7.8 m.',
      correctAnswer: 'dandelion parachute',
      xpValue: 15,
      hint: 'Compare the three averages and pick the largest.',
    },
    {
      id: 'fpr-q17',
      type: 'numeric-entry',
      stem: 'A bramble plant in a Manchester hedgerow produces 15 berries. Each berry holds 8 seeds. A blackbird eats two thirds of the berries and passes those seeds out elsewhere. How many seeds is the blackbird responsible for spreading?',
      tier: 'challenge',
      correctAnswer: 80,
      xpValue: 25,
      hint: 'Find two thirds of the berries first, then multiply by the seeds per berry.',
    },
    {
      id: 'fpr-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of plant reproduction.',
      tier: 'confident',
      steps: [
        'A bee carries pollen from the anther of one foxglove to the stigma of another.',
        'The pollen grain grows a tube down the style into the ovary.',
        null,
        'The fertilised ovule grows into a seed and the ovary around it ripens into a fruit.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Inside the ovary, the male nucleus from the pollen joins with the female nucleus in an ovule. This step is fertilisation.',
      xpValue: 20,
    },
    {
      id: 'fpr-q19',
      type: 'multiple-choice',
      stem: 'A horse chestnut tree drops about 800 conkers in a year. Roughly 5 grow into new trees. Which idea best explains the gap?',
      tier: 'challenge',
      options: [
        'Most conkers do not contain seeds at all.',
        'Conkers are wind-dispersed and miss good soil because the wind blows too hard.',
        'The parent tree poisons most of its own seeds on purpose.',
        'Most conkers land too close to the parent and lose out on light, water, and space.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'fpr-mis-no-need-to-disperse',
    },
    {
      id: 'fpr-q20',
      type: 'numeric-entry',
      stem: 'In a Lake District orchard, an apple tree carries 60 apples one autumn. Each apple holds an average of 9 seeds. The farmer says that 1 in every 30 seeds will sprout next spring if planted. How many apple seedlings could the tree, in theory, produce?',
      tier: 'challenge',
      correctAnswer: 18,
      xpValue: 25,
      hint: 'Find the total number of seeds first, then divide by 30.',
    },
    {
      id: 'fpr-q21',
      type: 'multiple-choice',
      stem: 'A school in Tunbridge Wells finds that its row of silver birch trees produces almost no seedlings on the playing field beside it, but lots on the meadow 60 metres away. Which explanation fits best?',
      tier: 'challenge',
      options: [
        'Silver birch is wind-pollinated, but its seeds are wind-dispersed and tend to land away from the parent tree.',
        'The playing field is too sunny for silver birch seeds to sprout.',
        'Silver birch only releases seeds on rainy days.',
        'The school must have planted seedlings on the meadow on purpose.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'fpr-mis-pollination-equals-dispersal',
    },
    {
      id: 'fpr-q22',
      type: 'numeric-entry',
      stem: 'A sycamore helicopter is timed falling 4 metres. Without wind it takes 8 seconds. The wind then blows it 0.5 metres sideways for every second it falls. How far sideways does it travel before landing?',
      tier: 'challenge',
      correctAnswer: 4,
      unit: 'm',
      xpValue: 25,
      hint: 'Multiply the time spent in the air by the sideways speed.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2022, comments on Question 5 (plant reproduction): students "frequently confused pollination with fertilisation, treating the two as one event." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-84612F-WRE-2022.PDF
    {
      id: 'fpr-mis-pollination-equals-fertilisation',
      description:
        'Pollination and fertilisation are the same thing.',
      triggerAnswer: 'pollination-equals-fertilisation',
      correction:
        'Actually, pollination is pollen reaching the stigma. Fertilisation is the male nucleus joining with an ovule inside the ovary. Pollination comes first; fertilisation can only follow.',
      reExplanation:
        'Picture a bee landing on a foxglove. Pollen rubs onto the sticky stigma: that is pollination. The grain then grows a tube all the way down the style to an ovule deep in the ovary. Only when the male nucleus joins with the ovule does fertilisation happen. Two steps, two names.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.144 "Common mistake" callout: students mix up the male anther (pollen producer) with the female stigma (pollen receiver). https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'fpr-mis-anther-vs-stigma',
      description:
        'The stigma makes the pollen and the anther catches it.',
      triggerAnswer: 'anther-stigma-swap',
      correction:
        'In fact, the anther is the male part that makes pollen. The stigma is the female part that catches it. The two are easy to swap.',
      reExplanation:
        'Use a memory trick: anther starts with A like "ammo", so it is loaded with pollen. Stigma starts with S like "sticky", so it catches pollen. The anther is held up by the filament; the stigma sits on top of the style.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 7 sub-block SB7a "Sexual reproduction in plants" examiner report 2019, comments on plant reproduction question: students often labelled wind-pollinated grass as "insect-pollinated" because they expected all flowers to need bees. https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'fpr-mis-bright-equals-wind',
      description:
        'All flowers are pollinated by bees, so brighter flowers must use the wind.',
      triggerAnswer: 'bright-wind',
      correction:
        'Actually, bright petals and sweet nectar are signs of insect pollination. Wind-pollinated flowers are usually small, dull, and have no nectar at all.',
      reExplanation:
        'Compare an oak catkin with an apple blossom. The oak catkin has no real petals and no scent. It hangs in the breeze and shakes pollen out as wind blows past. The apple blossom is pink and scented, with sticky pollen. It needs a bee, not the wind, to carry the pollen across.',
    },
    // Source: BBC Bitesize KS3 Biology, "Reproduction in plants" (Programme of Study key concept): "Many learners assume any seed coming from a tall tree must be wind-dispersed, but acorns and conkers are dispersed by animals." https://www.bbc.co.uk/bitesize/topics/zpffr82
    {
      id: 'fpr-mis-acorn-by-wind',
      description:
        'All seeds from tall trees are dispersed by the wind.',
      triggerAnswer: 'acorn-by-wind',
      correction:
        'In fact, an acorn is far too heavy to drift on the wind. Squirrels and jays bury acorns to eat later, then forget many of them. The forgotten ones grow into new oaks.',
      reExplanation:
        'Heavy seeds need carriers. Acorns and conkers are dispersed by animals, even though their parent trees are wind-pollinated. Wind disperses only light seeds with wings or parachutes, such as the sycamore helicopter or the dandelion clock.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.5.1.4 "Plant reproduction", which separates pollination (pollen transfer) from seed dispersal (seed movement) as two distinct processes. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'fpr-mis-pollination-equals-dispersal',
      description:
        'Pollination and seed dispersal are the same process.',
      triggerAnswer: 'pollination-equals-dispersal',
      correction:
        'Actually, pollination moves pollen from one flower to another. Seed dispersal moves a finished seed away from the parent plant. They happen at different times in the cycle.',
      reExplanation:
        'A silver birch is wind-pollinated and wind-dispersed. A bramble is insect-pollinated but animal-dispersed (a bird eats the berry). The method that moves pollen does not have to be the same method that moves the seed.',
    },
    // Source: DfE National Curriculum Science Programme of Study Key Stage 3 (2014), "Reproduction" sub-content explicitly requires "quantitative investigation of some dispersal mechanisms"; learners often skip the "why disperse?" reasoning step. https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study
    {
      id: 'fpr-mis-no-need-to-disperse',
      description:
        'Plants do not need to spread their seeds; the parent plant grows new ones each year.',
      triggerAnswer: 'no-disperse',
      correction:
        'In fact, seeds that land right under the parent face a fight for the same light, water, and minerals. Dispersal moves seeds to new places where they have a real chance of growing.',
      reExplanation:
        'Imagine all 800 conkers from one horse chestnut sprouting at its base. None would get enough light or water. By dropping into squirrel mouths or rolling away on the slope, a few reach open ground where a new tree can take hold.',
    },
    // Authored, no external source: classroom-observed slip on flower vs whole plant scope
    {
      id: 'fpr-mis-flower-only-female',
      description:
        'A flower is either male or female, not both.',
      triggerAnswer: 'flower-one-sex',
      correction:
        'Actually, most flowers in the UK contain both male parts (anthers) and female parts (stigma, style, ovary) in the same flower. They are described as "perfect" flowers.',
      reExplanation:
        'Open a buttercup and look. You will find a ring of yellow anthers around a central stigma. Both sexes share the same flower. A few species, such as the holly, do separate male and female flowers, but this is the exception, not the rule.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

// =============================================================================
// Node 2: Human Reproduction Overview (Confident, biology-reproduction-human-overview)
// =============================================================================
//
// PSHE-sensitive content. This node covers anatomy, physiology and lifecycle only:
// gametes, fertilisation, gestation, birth, and a simple menstrual cycle. No value
// judgements about behaviour, family structure, sexual orientation, or identity.
// All language is neutral, factual, age-appropriate for Year 7, and consistent
// with NHS public-information wording.

const reproductiveSystemsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The two human reproductive systems</text>
  <rect x="20" y="60" width="260" height="320" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="150" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Female system</text>
  <ellipse cx="120" cy="170" rx="22" ry="14" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" />
  <ellipse cx="180" cy="170" rx="22" ry="14" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" />
  <path d="M 120 184 Q 150 220 180 184" fill="none" stroke="#9D174D" stroke-width="2" />
  <path d="M 130 200 Q 150 240 170 200 L 170 280 Q 150 290 130 280 Z" fill="#FBCFE8" stroke="#9D174D" stroke-width="2" />
  <rect x="140" y="280" width="20" height="60" fill="#F9A8D4" stroke="#9D174D" stroke-width="2" />
  <text x="150" y="360" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Ovaries, oviducts,</text>
  <text x="150" y="374" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">uterus, vagina.</text>
  <rect x="320" y="60" width="260" height="320" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="450" y="90" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#1F2937">Male system</text>
  <ellipse cx="430" cy="280" rx="20" ry="14" fill="#A7F3D0" stroke="#14532D" stroke-width="2" />
  <ellipse cx="470" cy="280" rx="20" ry="14" fill="#A7F3D0" stroke="#14532D" stroke-width="2" />
  <path d="M 430 266 Q 450 230 470 266" fill="none" stroke="#14532D" stroke-width="2" />
  <rect x="440" y="200" width="20" height="40" fill="#A7F3D0" stroke="#14532D" stroke-width="2" />
  <rect x="430" y="160" width="40" height="40" rx="6" fill="#86EFAC" stroke="#14532D" stroke-width="2" />
  <text x="450" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Penis</text>
  <text x="450" y="360" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Testes, sperm tubes,</text>
  <text x="450" y="374" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">penis.</text>
</svg>
`.trim()

const menstrualCycleSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">The menstrual cycle, very simply</text>
  <rect x="40" y="80" width="520" height="40" rx="8" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="2" />
  <rect x="40" y="80" width="115" height="40" fill="#FCA5A5" />
  <text x="98" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Days 1 to 5</text>
  <text x="98" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Period (uterus lining</text>
  <text x="98" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">leaves the body).</text>
  <rect x="155" y="80" width="115" height="40" fill="#FED7AA" />
  <text x="213" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Days 6 to 13</text>
  <text x="213" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Lining rebuilds, ready</text>
  <text x="213" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">for an egg.</text>
  <rect x="270" y="80" width="50" height="40" fill="#FEF08A" />
  <text x="295" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Day 14</text>
  <text x="295" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Ovulation: ovary</text>
  <text x="295" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">releases an egg.</text>
  <rect x="320" y="80" width="240" height="40" fill="#BBF7D0" />
  <text x="440" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Days 15 to 28</text>
  <text x="440" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Lining waits. If no fertilisation, the lining</text>
  <text x="440" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">breaks down, and a new cycle begins.</text>
  <text x="300" y="220" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Average cycle length: about 28 days, but anywhere from 21 to 35 days is normal.</text>
  <text x="300" y="252" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Day 1 of the cycle is the first day of the period.</text>
  <text x="300" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">If a sperm meets the egg in the oviduct around days 12 to 16,</text>
  <text x="300" y="308" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">fertilisation can happen and the cycle pauses for a pregnancy.</text>
  <text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#374151">Source: NHS, "Periods: an introduction".</text>
</svg>
`.trim()

const gestationSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">From fertilised egg to baby, in 9 months</text>
  <rect x="40" y="80" width="510" height="240" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <circle cx="100" cy="190" r="14" fill="#FCA5A5" stroke="#7F1D1D" stroke-width="2" />
  <text x="100" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Day 1</text>
  <text x="100" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Fertilisation</text>
  <text x="100" y="248" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">in the oviduct.</text>
  <circle cx="200" cy="190" r="20" fill="#FCD34D" stroke="#92400E" stroke-width="2" />
  <text x="200" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Week 1</text>
  <text x="200" y="234" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Ball of cells</text>
  <text x="200" y="248" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">embeds in uterus.</text>
  <ellipse cx="300" cy="190" rx="22" ry="28" fill="#FBBF24" stroke="#92400E" stroke-width="2" />
  <text x="300" y="232" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Week 8</text>
  <text x="300" y="248" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Embryo. Heart</text>
  <text x="300" y="262" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">begins to beat.</text>
  <ellipse cx="400" cy="190" rx="28" ry="36" fill="#F59E0B" stroke="#92400E" stroke-width="2" />
  <text x="400" y="240" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Month 5</text>
  <text x="400" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Foetus moves.</text>
  <text x="400" y="268" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">About 25 cm long.</text>
  <ellipse cx="500" cy="190" rx="36" ry="46" fill="#D97706" stroke="#92400E" stroke-width="2" />
  <text x="500" y="248" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Month 9</text>
  <text x="500" y="262" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Birth. About</text>
  <text x="500" y="276" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">3.4 kg average.</text>
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Throughout, the placenta passes oxygen and food from the parent to the foetus,</text>
  <text x="300" y="376" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">and carries waste back. The umbilical cord is the link.</text>
</svg>
`.trim()

export const humanReproductionOverview: SkillNode = {
  id: 'biology-reproduction-human-overview',
  title: 'Human Reproduction Overview',
  description:
    'A neutral, factual tour of how humans reproduce. Identify the parts of the male and female reproductive systems, follow a simple menstrual cycle, and trace the journey from sperm and egg through fertilisation, pregnancy and birth. Language matches NHS public-information wording, age 12.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-reproduction',
  zoneName: 'Reproduction',
  tier: 'confident',
  prerequisites: ['biology-reproduction-flowering-plant'],
  curriculum: {
    ks3Objective:
      'Reproduction in humans (as an example of a mammal), including the structure and function of the male and female reproductive systems, menstrual cycle (without details of hormones), gametes, fertilisation, gestation and birth, to include the effect of maternal lifestyle on the foetus through the placenta.',
    awardingBodies: {
      aqa: '4.5.3 Hormones in human reproduction (GCSE Biology 8461). Female and male reproductive systems, menstrual cycle, gametes, fertilisation, foetal development through the placenta.',
      edexcel: 'SB7c Human reproduction; SB7d The menstrual cycle (GCSE Biology 1BI0, Topic 7). Structure of reproductive systems, gametes, fertilisation, gestation, role of placenta.',
      ocr: 'B6.1g Human reproduction (GCSE Biology A J247). Reproductive systems, menstrual cycle, gametes, fertilisation, gestation and birth.',
    },
  },
  scenes: [
    {
      id: 'hro-scene-systems',
      title: 'The Two Reproductive Systems',
      type: 'labelled-diagram',
      instructions:
        'Click each part to read its name and what it does.',
      data: {
        svg: reproductiveSystemsSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'hro-hs-ovary',
            x: 20,
            y: 43,
            label: 'Ovary',
            description:
              'There are two ovaries. They store the egg cells (ova) and release one each cycle.',
          },
          {
            id: 'hro-hs-oviduct',
            x: 25,
            y: 50,
            label: 'Oviduct',
            description:
              'A tube that carries the egg from the ovary to the uterus. Fertilisation usually happens here.',
          },
          {
            id: 'hro-hs-uterus',
            x: 25,
            y: 65,
            label: 'Uterus',
            description:
              'A muscular bag where a fertilised egg embeds and grows into a baby over nine months.',
          },
          {
            id: 'hro-hs-vagina',
            x: 25,
            y: 80,
            label: 'Vagina',
            description:
              'The passage that leads from the uterus to the outside of the body.',
          },
          {
            id: 'hro-hs-testes',
            x: 75,
            y: 70,
            label: 'Testes',
            description:
              'There are two testes. They make sperm cells and store them.',
          },
          {
            id: 'hro-hs-sperm-tube',
            x: 75,
            y: 60,
            label: 'Sperm tube',
            description:
              'Carries sperm from the testes to the penis.',
          },
          {
            id: 'hro-hs-penis',
            x: 75,
            y: 47,
            label: 'Penis',
            description:
              'The organ through which sperm leaves the male body.',
          },
        ],
      },
    },
    {
      id: 'hro-scene-cycle',
      title: 'The Menstrual Cycle',
      type: 'labelled-diagram',
      instructions:
        'Click each phase to read what is happening in that part of the cycle.',
      data: {
        svg: menstrualCycleSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'hro-cyc-period',
            x: 16,
            y: 25,
            label: 'Period (days 1 to 5)',
            description:
              'The lining of the uterus, built up the previous cycle, leaves the body through the vagina. This is called the period or menstruation.',
          },
          {
            id: 'hro-cyc-build',
            x: 36,
            y: 25,
            label: 'Lining rebuilds (days 6 to 13)',
            description:
              'The uterus builds a new lining, ready to receive a fertilised egg.',
          },
          {
            id: 'hro-cyc-ovulation',
            x: 49,
            y: 25,
            label: 'Ovulation (around day 14)',
            description:
              'An ovary releases one egg into the oviduct. This is the only short window in the cycle when fertilisation can happen.',
          },
          {
            id: 'hro-cyc-wait',
            x: 73,
            y: 25,
            label: 'Lining waits (days 15 to 28)',
            description:
              'If the egg is not fertilised, the lining is no longer needed. It breaks down and the next period starts.',
          },
        ],
      },
    },
    {
      id: 'hro-scene-gestation',
      title: 'Pregnancy and Birth',
      type: 'labelled-diagram',
      instructions:
        'Click each stage to read what is happening at that point in the nine months.',
      data: {
        svg: gestationSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'hro-ges-fertilisation',
            x: 16,
            y: 48,
            label: 'Fertilisation',
            description:
              'A sperm meets the egg in the oviduct. Their nuclei join. This single fertilised cell is called a zygote.',
          },
          {
            id: 'hro-ges-implantation',
            x: 33,
            y: 48,
            label: 'Implantation',
            description:
              'The zygote divides as it travels to the uterus, then embeds in the lining about a week after fertilisation.',
          },
          {
            id: 'hro-ges-embryo',
            x: 50,
            y: 48,
            label: 'Embryo',
            description:
              'For the first eight weeks the developing organism is called an embryo. The heart starts to beat in this stage.',
          },
          {
            id: 'hro-ges-foetus',
            x: 67,
            y: 48,
            label: 'Foetus',
            description:
              'From week 9 the developing organism is called a foetus. By month 5 the parent can usually feel it move.',
          },
          {
            id: 'hro-ges-birth',
            x: 84,
            y: 48,
            label: 'Birth',
            description:
              'After about 9 months (40 weeks of gestation), strong uterus muscles push the baby out through the vagina.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'hro-worked-1',
      title: 'Following one egg through one cycle',
      steps: [
        {
          explanation:
            'On day 1 of the cycle, the previous lining of the uterus leaves the body through the vagina. This is the period, and it usually lasts 3 to 7 days.',
        },
        {
          explanation:
            'From days 6 to 13 the uterus rebuilds a fresh lining. Meanwhile an egg is ripening inside one of the ovaries.',
        },
        {
          explanation:
            'Around day 14 the ovary releases the egg into the oviduct. This is called ovulation. The egg can only be fertilised in the next 24 hours or so.',
        },
        {
          explanation:
            'If no sperm reaches the egg, the lining is no longer needed. From around day 15 to day 28 it slowly breaks down.',
        },
        {
          explanation:
            'On day 28 (or whenever the cycle ends, typically anywhere from 21 to 35 days), day 1 of the next period begins, and the cycle repeats.',
        },
      ],
    },
    {
      id: 'hro-worked-2',
      title: 'A sperm and an egg make a baby: the journey in 9 months',
      steps: [
        {
          explanation:
            'A sperm meets the egg in the oviduct. Only one sperm fuses with the egg. This is fertilisation. The fertilised cell is called a zygote.',
        },
        {
          explanation:
            'The zygote divides into a ball of cells as it travels down to the uterus. About one week after fertilisation it embeds in the uterus lining. This is called implantation.',
        },
        {
          explanation:
            'For the first 8 weeks it is called an embryo. The heart and main organs begin to form during this stage.',
        },
        {
          explanation:
            'From week 9 onwards it is called a foetus. The placenta passes oxygen and food from the parent\'s blood across to the foetus, and carries waste back the other way.',
        },
        {
          explanation:
            'After about 9 months (40 weeks of gestation), strong uterus muscles push the baby out through the vagina. This is birth.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'hro-q1',
      type: 'multiple-choice',
      stem: 'Which organ releases an egg cell once each menstrual cycle?',
      tier: 'core',
      options: ['Uterus', 'Vagina', 'Oviduct', 'Ovary'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'hro-mis-uterus-makes-eggs',
    },
    {
      id: 'hro-q2',
      type: 'multiple-choice',
      stem: 'Which organ produces sperm cells?',
      tier: 'core',
      options: ['Penis', 'Sperm tube', 'Testes', 'Bladder'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'hro-q3',
      type: 'multiple-choice',
      stem: 'Where in the female body does fertilisation usually happen?',
      tier: 'core',
      options: ['Ovary', 'Oviduct', 'Uterus', 'Vagina'],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'hro-mis-fertilisation-in-uterus',
    },
    {
      id: 'hro-q4',
      type: 'multiple-choice',
      stem: 'Where does a fertilised egg embed and grow during pregnancy?',
      tier: 'core',
      options: ['Uterus', 'Vagina', 'Ovary', 'Oviduct'],
      correctIndex: 0,
      xpValue: 10,
    },
    {
      id: 'hro-q5',
      type: 'numeric-entry',
      stem: 'How many days does an average menstrual cycle last?',
      tier: 'core',
      correctAnswer: 28,
      tolerance: 0,
      xpValue: 10,
      hint: 'The average cycle length, used as the textbook value.',
    },
    {
      id: 'hro-q6',
      type: 'numeric-entry',
      stem: 'How many weeks is an average pregnancy from fertilisation to birth?',
      tier: 'core',
      correctAnswer: 40,
      tolerance: 0,
      xpValue: 10,
      hint: 'About 9 months, given in weeks.',
    },
    {
      id: 'hro-q7',
      type: 'multiple-choice',
      stem: 'On about which day of an average cycle does ovulation happen?',
      tier: 'core',
      options: ['Day 1', 'Day 7', 'Day 14', 'Day 28'],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'hro-mis-ovulation-day-1',
    },
    {
      id: 'hro-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the period is the body throwing away an egg." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. The period is the egg leaving the body.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. The period is the lining of the uterus leaving the body. The egg is much smaller and is reabsorbed if it is not fertilised.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'hro-mis-period-is-egg',
    },
    {
      id: 'hro-q9',
      type: 'drag-order',
      stem: 'Place these stages in order, from earliest to latest in a pregnancy.',
      tier: 'confident',
      items: ['Foetus', 'Fertilisation', 'Embryo', 'Birth', 'Implantation'],
      correctOrder: [1, 4, 2, 0, 3],
      xpValue: 15,
      misconceptionId: 'hro-mis-foetus-from-day-1',
    },
    {
      id: 'hro-q10',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the female reproductive system. Two labels do not belong on this diagram.',
      tier: 'confident',
      svg: reproductiveSystemsSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'hro-q10-hs-ovary', x: 20, y: 43, correctLabel: 'Ovary' },
        { id: 'hro-q10-hs-oviduct', x: 25, y: 50, correctLabel: 'Oviduct' },
        { id: 'hro-q10-hs-uterus', x: 25, y: 65, correctLabel: 'Uterus' },
        { id: 'hro-q10-hs-vagina', x: 25, y: 80, correctLabel: 'Vagina' },
      ],
      labels: [
        'Ovary',
        'Oviduct',
        'Uterus',
        'Vagina',
        'Testes',
        'Penis',
      ],
      xpValue: 20,
    },
    {
      id: 'hro-q11',
      type: 'labelled-image',
      stem: 'Drag each label onto the correct part of the male reproductive system.',
      tier: 'confident',
      svg: reproductiveSystemsSvg,
      viewBox: '0 0 600 400',
      hotspots: [
        { id: 'hro-q11-hs-testes', x: 75, y: 70, correctLabel: 'Testes' },
        { id: 'hro-q11-hs-tube', x: 75, y: 60, correctLabel: 'Sperm tube' },
        { id: 'hro-q11-hs-penis', x: 75, y: 47, correctLabel: 'Penis' },
      ],
      labels: [
        'Testes',
        'Sperm tube',
        'Penis',
        'Ovary',
        'Uterus',
        'Vagina',
      ],
      xpValue: 20,
    },
    {
      id: 'hro-q12',
      type: 'multiple-choice',
      stem: 'What is the role of the placenta during pregnancy?',
      tier: 'confident',
      options: [
        'It pumps blood for the foetus.',
        'It produces the egg cells used in fertilisation.',
        'It passes oxygen and food from the parent\'s blood to the foetus, and carries waste back.',
        'It causes the uterus muscles to push during birth.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'hro-mis-placenta-pumps-blood',
    },
    {
      id: 'hro-q13',
      type: 'multiple-choice',
      stem: 'A small developing human at 6 weeks of pregnancy is correctly called what?',
      tier: 'confident',
      options: ['Sperm', 'Zygote', 'Embryo', 'Foetus'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'hro-mis-foetus-from-day-1',
    },
    {
      id: 'hro-q14',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks PSHE worksheet, a learner reads that day 1 of one cycle fell on the 3rd of the month, and the cycle was the average 28 days. On about which date of the same month would ovulation happen?',
      tier: 'challenge',
      correctAnswer: 16,
      xpValue: 25,
      hint: 'Ovulation falls about 14 days after day 1. Add 13 to the date of day 1 because day 1 itself is already day 1, not day 0.',
    },
    {
      id: 'hro-q15',
      type: 'numeric-entry',
      stem: 'A pregnancy lasts about 40 weeks. The first 8 weeks are the embryo stage; the rest is the foetus stage. How many weeks does the foetus stage last?',
      tier: 'challenge',
      correctAnswer: 32,
      xpValue: 25,
      hint: 'Subtract the 8-week embryo stage from the 40-week total.',
      misconceptionId: 'hro-mis-foetus-from-day-1',
    },
    {
      id: 'hro-q16',
      type: 'data-extraction',
      stem: 'Whose cycle was the longest?',
      tier: 'confident',
      dataSource:
        'Three pupils record the length of one of their menstrual cycles, in days: A. Aisha 30 days. B. Beth 26 days. C. Cara 33 days.',
      correctAnswer: 'cara',
      xpValue: 15,
      hint: 'Pick the largest number of days.',
    },
    {
      id: 'hro-q17',
      type: 'spot-misconception',
      stem: 'A pupil says: "Fertilisation always happens in the uterus." Is this method sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. The egg waits in the uterus for a sperm to arrive.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Fertilisation usually happens in the oviduct, not the uterus. The fertilised egg then travels to the uterus to implant.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'hro-mis-fertilisation-in-uterus',
    },
    {
      id: 'hro-q18',
      type: 'drag-drop-builder',
      stem: 'Build the journey of a sperm cell. Drag in only the parts the sperm passes through, in order, on its way to meet an egg.',
      tier: 'confident',
      parts: [
        'Testes',
        'Sperm tube',
        'Penis',
        'Vagina',
        'Uterus',
        'Oviduct',
        'Stomach',
        'Bladder',
        'Lungs',
      ],
      correctArrangement: [
        'Testes',
        'Sperm tube',
        'Penis',
        'Vagina',
        'Uterus',
        'Oviduct',
      ],
      xpValue: 20,
    },
    {
      id: 'hro-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of early pregnancy.',
      tier: 'challenge',
      steps: [
        'A sperm meets the egg in the oviduct. Their nuclei join to form a single cell called a zygote.',
        'The zygote divides into a ball of cells as it travels down the oviduct.',
        null,
        'For the next 8 weeks the developing organism is called an embryo. From week 9 it is called a foetus.',
      ],
      missingStepIndex: 2,
      correctStep:
        'About a week after fertilisation, the ball of cells reaches the uterus and embeds in the lining. This step is called implantation.',
      xpValue: 20,
    },
    {
      id: 'hro-q20',
      type: 'multiple-choice',
      stem: 'A pregnant person is told by their NHS midwife that "the placenta acts as a barrier between your blood and the baby\'s blood." What does this mean?',
      tier: 'challenge',
      options: [
        'The two blood supplies mix freely through the placenta.',
        'The two blood supplies stay separate, but oxygen, food, and waste pass across the placenta between them.',
        'The baby has the same blood as the parent throughout pregnancy.',
        'The placenta stops oxygen reaching the baby until birth.',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'hro-q21',
      type: 'numeric-entry',
      stem: 'A 28-day cycle has its period from day 1 to day 5, and ovulation on day 14. How many days after the period ends does ovulation happen?',
      tier: 'challenge',
      correctAnswer: 9,
      xpValue: 25,
      hint: 'Subtract day 5 from day 14.',
    },
    {
      id: 'hro-q22',
      type: 'multiple-choice',
      stem: 'A pupil reads on the NHS website that "smoking during pregnancy can harm the foetus through the placenta." Which mechanism best matches this warning?',
      tier: 'challenge',
      options: [
        'Smoke enters the baby\'s lungs directly through the umbilical cord.',
        'The placenta stops working as soon as the parent smokes.',
        'The foetus copies the parent\'s actions and tries to smoke too.',
        'Harmful substances from the parent\'s blood cross the placenta and reach the foetus.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'hro-mis-placenta-blocks-everything',
    },
  ],
  misconceptions: [
    // Source: NHS Inform "Periods" public-information page, "What happens during a period", explicitly clarifies that the period is the lining of the womb leaving the body, not the egg itself: "Each month one of your ovaries releases an egg ... if it is not fertilised, the lining of the womb (uterus) breaks down and is shed as a period." https://www.nhsinform.scot/healthy-living/womens-health/girls-and-young-women-puberty-to-around-25/periods-and-menstrual-health/periods
    {
      id: 'hro-mis-period-is-egg',
      description:
        'The period is the body releasing the unfertilised egg.',
      triggerAnswer: 'period-is-egg',
      correction:
        'Actually, the period is the lining of the uterus leaving the body. The egg itself is much smaller than a full stop on this page, and is reabsorbed if it is not fertilised.',
      reExplanation:
        'Each cycle the uterus builds a thick lining ready to receive a fertilised egg. If the egg is not fertilised, that lining is no longer needed. The lining breaks down and leaves through the vagina across roughly 3 to 7 days. This is the period. The egg, much smaller, is broken down inside the body.',
    },
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2019, Q4 (human reproduction): "candidates frequently named the uterus rather than the oviduct as the site of fertilisation." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-WRE-2019.PDF
    {
      id: 'hro-mis-fertilisation-in-uterus',
      description:
        'Fertilisation happens in the uterus.',
      triggerAnswer: 'fertilisation-in-uterus',
      correction:
        'In fact, fertilisation usually happens in the oviduct (the tube between the ovary and the uterus). The fertilised egg then travels down to the uterus to embed.',
      reExplanation:
        'The egg is released from the ovary into the oviduct at ovulation. Sperm swim up through the vagina, the uterus, and into the oviduct, where they meet the egg. The fertilised egg (zygote) then drifts down the oviduct to the uterus over about a week. Implantation in the uterus happens after fertilisation, not at the same time.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.158 "Common mistake": pupils often think the uterus produces eggs because it is the largest female part on the diagram. https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'hro-mis-uterus-makes-eggs',
      description:
        'The uterus makes the eggs.',
      triggerAnswer: 'uterus-makes-eggs',
      correction:
        'Actually, the ovaries make and store the eggs. The uterus is where a fertilised egg embeds and grows; it does not make eggs itself.',
      reExplanation:
        'There are two ovaries, one on each side. Each holds many tiny egg cells from before birth. Each cycle one ovary releases one egg into the oviduct. The uterus has a different job: hold a pregnancy for nine months. Two organs, two roles.',
    },
    // Source: BBC Bitesize KS3 Biology, "The menstrual cycle" topic page: explicitly notes that "Day 1 of the cycle is the first day of the period, not the day of ovulation. Many learners place ovulation at day 1 because that is when the cycle visibly starts." https://www.bbc.co.uk/bitesize/topics/zybbkqt
    {
      id: 'hro-mis-ovulation-day-1',
      description:
        'Ovulation happens on day 1 of the cycle, when the period starts.',
      triggerAnswer: 'ovulation-day-1',
      correction:
        'In fact, day 1 of the cycle is the first day of the period. Ovulation happens about two weeks later, around day 14 of an average cycle.',
      reExplanation:
        'The cycle clock starts when bleeding begins, because that day is easy to spot. Across the next two weeks the lining rebuilds and an egg ripens. Around day 14 the ovary releases that egg. So day 1 and day 14 are very different events.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 7 examiner report 2019, plant and human reproduction question: "Many candidates wrote that the placenta pumps blood to the foetus, confusing it with the heart." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'hro-mis-placenta-pumps-blood',
      description:
        'The placenta pumps blood from the parent into the foetus.',
      triggerAnswer: 'placenta-pumps',
      correction:
        'Actually, the placenta does not pump anything. It is a flat organ where the parent\'s and foetus\'s blood vessels run very close together but stay separate. Oxygen, food, and waste pass across by diffusion.',
      reExplanation:
        'Think of the placenta as a busy market with a counter between two shoppers. The parent stands on one side with bags of oxygen and food. The foetus stands on the other side with waste to hand back. Goods move across the counter; the shoppers never mix. The foetus\'s own heart pumps the blood once it reaches the foetus side.',
    },
    // Source: NHS "Pregnancy" public-information pages, Stages of pregnancy: distinguish embryo (up to 8 weeks) from foetus (from week 9 onwards). Pupils often use the two interchangeably. https://www.nhs.uk/pregnancy/finding-out/timeline/
    {
      id: 'hro-mis-foetus-from-day-1',
      description:
        'The developing baby is called a foetus from day 1 of pregnancy.',
      triggerAnswer: 'foetus-day-1',
      correction:
        'In fact, for the first 8 weeks it is called an embryo. The name foetus is used only from week 9 onwards.',
      reExplanation:
        'Embryo and foetus are not random labels; they mark stages. From fertilisation to week 8, the main organs are forming, and the developing organism is an embryo. From week 9, the organs grow and refine, and the developing organism is called a foetus, all the way to birth.',
    },
    // Source: NHS "Smoking and pregnancy" public-information page, plus AQA GCSE Biology specification 8461 section 4.5.3: explicitly addresses the misconception that the placenta acts as a perfect barrier. https://www.nhs.uk/pregnancy/keeping-well/stop-smoking/
    {
      id: 'hro-mis-placenta-blocks-everything',
      description:
        'The placenta is a perfect barrier, so nothing the parent eats, drinks, or breathes can reach the foetus.',
      triggerAnswer: 'placenta-blocks-everything',
      correction:
        'Actually, the placenta lets useful things across (oxygen, food) but it cannot block every harmful substance. Smoke, alcohol, and many medicines can also cross.',
      reExplanation:
        'The placenta is built to pass small molecules across with ease. It cannot tell apart "good" small molecules from "bad" ones. That is why the NHS advice is to avoid smoking, alcohol, and many medicines during pregnancy: those substances reach the foetus through exactly the same route as oxygen and food.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const reproductionZoneNodes: SkillNode[] = [
  floweringPlantReproduction,
  humanReproductionOverview,
]

export const reproductionZone: Zone = {
  id: 'biology-reproduction',
  name: 'Reproduction',
  realm: 'vitalia',
  nodeIds: [floweringPlantReproduction.id, humanReproductionOverview.id],
}
