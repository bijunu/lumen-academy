import type { SkillNode, Zone } from '@/types/content'

// =============================================================================
// Zone: Ecosystems (biology-ecosystems)
// =============================================================================
//
// Three Year 7 nodes (this file closes the entire mapped Y7 biology scope):
//   1. Food Chains (Core)
//   2. Food Webs (Confident)
//   3. Energy Flow (Confident)
//
// Hard scope guards across all three nodes:
//   - Energy-flow numbers are pyramid-of-NUMBERS only at Y7. NO biomass pyramids,
//     NO 10% rule, NO efficiency calculations. Those belong to Y8/9 / GCSE.
//   - "Remove a species" reasoning stays QUALITATIVE: numbers rise / fall / no
//     immediate effect. NO numerical predictions like "rabbits rise by 30%".
//   - UK contexts only: hedgerow, pond, Sevenoaks woodland, Kentish farmland.
//   - Arrow direction is the workhorse misconception: arrows point FROM food TO
//     the eater, showing energy flow direction.

// ---------------------------------------------------------------------------
// Node 1 SVGs (Food Chains)
// ---------------------------------------------------------------------------

const hedgerowChainSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A Kentish hedgerow food chain</text>
  <rect x="30" y="160" width="100" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="80" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Oak leaf</text>
  <text x="80" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(producer)</text>
  <line x1="135" y1="200" x2="170" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow)" />
  <rect x="175" y="160" width="100" height="80" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="225" y="190" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Caterpillar</text>
  <text x="225" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(primary</text>
  <text x="225" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">consumer)</text>
  <line x1="280" y1="200" x2="315" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow)" />
  <rect x="320" y="160" width="100" height="80" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="3" />
  <text x="370" y="190" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Blue tit</text>
  <text x="370" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(secondary</text>
  <text x="370" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">consumer)</text>
  <line x1="425" y1="200" x2="460" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow)" />
  <rect x="465" y="160" width="100" height="80" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="515" y="190" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Sparrow-</text>
  <text x="515" y="208" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">hawk</text>
  <text x="515" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(top predator)</text>
  <text x="300" y="280" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Each arrow points from the food TO the eater.</text>
  <text x="300" y="302" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">It shows the direction energy flows.</text>
  <text x="300" y="334" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Energy enters the chain from sunlight,</text>
  <text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">trapped by the oak in photosynthesis.</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
  </defs>
</svg>
`.trim()

const pondChainSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">A Sevenoaks pond food chain</text>
  <rect x="30" y="160" width="110" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="85" y="195" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Pond algae</text>
  <text x="85" y="216" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(producer)</text>
  <line x1="145" y1="200" x2="180" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow2)" />
  <rect x="185" y="160" width="110" height="80" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="240" y="188" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Mayfly</text>
  <text x="240" y="206" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">nymph</text>
  <text x="240" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(primary)</text>
  <line x1="300" y1="200" x2="335" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow2)" />
  <rect x="340" y="160" width="110" height="80" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="3" />
  <text x="395" y="188" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Stickle-</text>
  <text x="395" y="206" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">back</text>
  <text x="395" y="226" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(secondary)</text>
  <line x1="455" y1="200" x2="490" y2="200" stroke="#1F2937" stroke-width="3" marker-end="url(#arrow2)" />
  <rect x="495" y="160" width="80" height="80" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="535" y="200" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Heron</text>
  <text x="535" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(top)</text>
  <text x="300" y="290" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Producers in water are usually algae or pondweed.</text>
  <text x="300" y="312" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Same shape as the hedgerow chain: producer first,</text>
  <text x="300" y="328" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">then primary, secondary, top.</text>
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
  </defs>
</svg>
`.trim()

const arrowDirectionSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="28" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#1F2937">Which way does the arrow point?</text>
  <rect x="20" y="60" width="270" height="150" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="155" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Correct</text>
  <text x="155" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">grass --&gt; rabbit</text>
  <text x="155" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Arrow points from food</text>
  <text x="155" y="164" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">to eater. Energy flows</text>
  <text x="155" y="182" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">into the rabbit.</text>
  <rect x="310" y="60" width="270" height="150" rx="10" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="3" />
  <text x="445" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Wrong</text>
  <text x="445" y="116" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">grass &lt;-- rabbit</text>
  <text x="445" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">This would mean grass</text>
  <text x="445" y="164" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">eats the rabbit, which</text>
  <text x="445" y="182" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">is not how it works.</text>
  <text x="300" y="252" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">A simple test for any food chain arrow:</text>
  <text x="300" y="276" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">read it as "is eaten by".</text>
  <text x="300" y="306" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">grass --&gt; rabbit reads as "grass is eaten by rabbit".</text>
  <text x="300" y="324" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">If that does not make sense, the arrow is wrong.</text>
</svg>
`.trim()

// ---------------------------------------------------------------------------
// Node 1: Food Chains (Core)
// ---------------------------------------------------------------------------

export const foodChains: SkillNode = {
  id: 'biology-ecosystems-food-chains',
  title: 'Food Chains',
  description:
    'Build a Year 7 food chain from a producer (plant or alga) through primary and secondary consumers to a top predator. Read every arrow as "is eaten by", showing the direction energy flows. Practise on Kentish hedgerow, Sevenoaks pond, and woodland chains.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-ecosystems',
  zoneName: 'Ecosystems',
  tier: 'core',
  prerequisites: ['biology-photosynthesis-overview'],
  curriculum: {
    ks3Objective:
      'The interdependence of organisms in an ecosystem, including food webs and insect pollinated crops; how organisms affect, and are affected by, their environment, including the accumulation of toxic materials.',
    awardingBodies: {
      aqa: '4.7.2.1 Levels of organisation; producers, primary, secondary and tertiary consumers; food chains and webs (GCSE Biology 8461).',
      edexcel: 'SB9b Feeding relationships and food chains (GCSE Biology 1BI0, Topic 9).',
      ocr: 'B6.1c Feeding relationships; producer, consumer, predator, prey (GCSE Biology A J247).',
    },
  },
  scenes: [
    {
      id: 'fch-scene-hedgerow',
      title: 'A Kentish Hedgerow Chain',
      type: 'labelled-diagram',
      instructions:
        'Click each box of the hedgerow food chain to read what role it plays.',
      data: {
        svg: hedgerowChainSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fch-hs-oak',
            x: 13,
            y: 50,
            label: 'Oak leaf (producer)',
            description:
              'A producer makes its own food using sunlight, water, and carbon dioxide. Plants and algae are the producers in almost every food chain.',
          },
          {
            id: 'fch-hs-caterpillar',
            x: 38,
            y: 50,
            label: 'Caterpillar (primary consumer)',
            description:
              'A primary consumer eats the producer. Animals that eat plants are also called herbivores.',
          },
          {
            id: 'fch-hs-bluetit',
            x: 62,
            y: 50,
            label: 'Blue tit (secondary consumer)',
            description:
              'A secondary consumer eats a primary consumer. Animals that eat other animals are also called carnivores.',
          },
          {
            id: 'fch-hs-hawk',
            x: 86,
            y: 50,
            label: 'Sparrowhawk (top predator)',
            description:
              'The animal at the end of the chain. Nothing in this chain eats it. We call it the top predator.',
          },
          {
            id: 'fch-hs-arrow',
            x: 50,
            y: 75,
            label: 'Arrow direction',
            description:
              'Every arrow points from the food to the eater. Read each arrow as "is eaten by". The arrow shows the direction energy flows.',
          },
        ],
      },
    },
    {
      id: 'fch-scene-pond',
      title: 'A Sevenoaks Pond Chain',
      type: 'labelled-diagram',
      instructions:
        'Click each box of the pond food chain to read what role it plays.',
      data: {
        svg: pondChainSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fch-hs-algae',
            x: 14,
            y: 50,
            label: 'Pond algae (producer)',
            description:
              'In water, the producers are usually algae or pondweed. They photosynthesise just like land plants.',
          },
          {
            id: 'fch-hs-mayfly',
            x: 40,
            y: 50,
            label: 'Mayfly nymph (primary consumer)',
            description:
              'The nymph (the young stage that lives underwater) feeds on algae and decaying plant bits.',
          },
          {
            id: 'fch-hs-stickleback',
            x: 66,
            y: 50,
            label: 'Stickleback (secondary consumer)',
            description:
              'A small UK pond fish that hunts insect nymphs and water fleas.',
          },
          {
            id: 'fch-hs-heron',
            x: 89,
            y: 50,
            label: 'Heron (top predator)',
            description:
              'A large grey wading bird seen at most UK ponds, taking sticklebacks and other fish.',
          },
        ],
      },
    },
    {
      id: 'fch-scene-arrow',
      title: 'Reading the Arrow',
      type: 'labelled-diagram',
      instructions:
        'Click each side to see why the arrow points from food to eater, not the other way round.',
      data: {
        svg: arrowDirectionSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fch-hs-correct',
            x: 26,
            y: 34,
            label: 'Correct: from food to eater',
            description:
              'Read the arrow as "is eaten by". The grass is eaten by the rabbit, so the arrow points from grass to rabbit. Energy flows the same way.',
          },
          {
            id: 'fch-hs-wrong',
            x: 74,
            y: 34,
            label: 'Wrong: from eater to food',
            description:
              'This would mean grass eats the rabbit, which is the opposite of what is happening. Pupils make this slip when they read the arrow as "feeds on".',
          },
          {
            id: 'fch-hs-test',
            x: 50,
            y: 78,
            label: 'The "is eaten by" test',
            description:
              'Read each arrow out loud as "is eaten by". If the sentence makes sense, the arrow is right. If not, flip it.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fch-worked-1',
      title: 'Building a Sevenoaks woodland chain',
      steps: [
        {
          explanation:
            'Step 1: Start with a producer. A producer makes its own food. In a Sevenoaks woodland, oak leaves are a good producer.',
        },
        {
          explanation:
            'Step 2: Add a primary consumer. A primary consumer eats the producer. A caterpillar eats oak leaves.',
        },
        {
          explanation:
            'Step 3: Add a secondary consumer. A secondary consumer eats the primary consumer. A blue tit eats caterpillars.',
        },
        {
          explanation:
            'Step 4: Add a top predator. A top predator eats the secondary consumer and is not eaten by anything else in this chain. A sparrowhawk hunts blue tits.',
        },
        {
          explanation:
            'Step 5: Draw the arrows. Each arrow points from food to eater: oak leaf to caterpillar, caterpillar to blue tit, blue tit to sparrowhawk.',
        },
        {
          explanation:
            'Final chain: oak leaf, then caterpillar, then blue tit, then sparrowhawk. Every arrow reads as "is eaten by". Energy flows from sunlight into the oak, then along the chain.',
        },
      ],
    },
    {
      id: 'fch-worked-2',
      title: 'Spotting the producer in a pond chain',
      steps: [
        {
          explanation:
            'A Sevenoaks pond has these organisms: heron, stickleback, mayfly nymph, pond algae. Which is the producer?',
        },
        {
          explanation:
            'A producer makes its own food, usually by photosynthesis. The heron, stickleback, and mayfly nymph are all animals; they cannot photosynthesise.',
        },
        // Missing step (filled in by the worked example)
        {
          explanation:
            'Pond algae is a plant-like organism that photosynthesises in the water, using sunlight and CO₂. So it is the producer.',
        },
        {
          explanation:
            'Now build the chain in order: producer first, then the animal that eats it, then the animal that eats that one. The mayfly nymph eats the algae. The stickleback eats the mayfly nymph. The heron eats the stickleback.',
        },
        {
          explanation:
            'Final chain: pond algae, mayfly nymph, stickleback, heron. Producer to top predator.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fch-q1',
      type: 'multiple-choice',
      stem: 'In a food chain, which arrow direction is correct?',
      tier: 'core',
      options: [
        'eater to food',
        'food to eater',
        'top predator to producer',
        'two-way between every pair',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fch-mis-arrow-direction',
      hint: 'Read the arrow out loud as "is eaten by". Which way makes sense?',
    },
    {
      id: 'fch-q2',
      type: 'multiple-choice',
      stem: 'Which organism is the producer in this chain: grass, rabbit, fox?',
      tier: 'core',
      options: ['grass', 'rabbit', 'fox', 'all three'],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fch-mis-producer-confusion',
      hint: 'A producer makes its own food, usually by photosynthesis.',
    },
    {
      id: 'fch-q3',
      type: 'multiple-choice',
      stem: 'In the chain "oak leaf to caterpillar to blue tit to sparrowhawk", what is the blue tit?',
      tier: 'core',
      options: [
        'a producer',
        'a primary consumer',
        'a secondary consumer',
        'a top predator',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'A primary consumer eats the producer. A secondary consumer eats the primary consumer.',
    },
    {
      id: 'fch-q4',
      type: 'multiple-choice',
      stem: 'In a Sevenoaks pond chain "pond algae to mayfly nymph to stickleback to heron", what is the heron?',
      tier: 'core',
      options: [
        'producer',
        'primary consumer',
        'something the algae eats',
        'top predator',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fch-mis-top-predator-importance',
      hint: 'The top predator is at the end of the chain and is not eaten by anything else in this chain.',
    },
    {
      id: 'fch-q5',
      type: 'numeric-entry',
      stem: 'In a Kentish hedgerow chain "oak leaf to caterpillar to blue tit to sparrowhawk", how many links does the chain have in total?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'A link is one organism in the chain. Count them.',
    },
    {
      id: 'fch-q6',
      type: 'free-text',
      stem: 'A pupil draws a chain as "Sun to oak leaf to caterpillar to blue tit". Explain in one or two sentences why the Sun should not be drawn as a link in the chain.',
      tier: 'core',
      sampleAnswer:
        'A food chain links living organisms that eat each other. The Sun supplies the energy that the oak traps in photosynthesis, but the Sun is not eaten by the oak, so the Sun is not a link in the chain.',
      keywords: ['Sun', 'energy', 'eaten', 'living', 'photosynthesis'],
      xpValue: 15,
      misconceptionId: 'fch-mis-sun-as-organism',
    },
    {
      id: 'fch-q7',
      type: 'multiple-choice',
      stem: 'A pupil writes "fox to rabbit to grass" as a Sevenoaks meadow food chain. What is wrong with the chain?',
      tier: 'core',
      options: [
        'Nothing, it is correct.',
        'The arrows point the wrong way; the chain should start with the producer (grass).',
        'A meadow has no foxes.',
        'Rabbits do not eat grass.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fch-mis-arrow-direction',
      hint: 'Read each arrow as "is eaten by". Does the chain make sense in this order?',
    },
    {
      id: 'fch-q8',
      type: 'drag-order',
      stem: 'Arrange these organisms into a Kentish hedgerow food chain in the correct order, producer first.',
      tier: 'core',
      items: ['caterpillar', 'sparrowhawk', 'oak leaf', 'blue tit'],
      correctOrder: [2, 0, 3, 1],
      xpValue: 15,
      hint: 'Start with the organism that makes its own food. End with the one nothing eats.',
    },
    {
      id: 'fch-q9',
      type: 'numeric-entry',
      stem: 'How many primary consumers are there in the chain "pond algae to mayfly nymph to stickleback to heron"?',
      tier: 'confident',
      correctAnswer: 1,
      xpValue: 15,
      hint: 'The primary consumer is the one that eats the producer.',
    },
    {
      id: 'fch-q10',
      type: 'spot-misconception',
      stem: 'A pupil writes that "in the chain grass --&gt; rabbit --&gt; fox, the arrows show what each animal hunts." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. The arrow points from the hunter to its food.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Arrows point from food to eater, showing the direction energy flows. Grass is eaten by rabbit, rabbit is eaten by fox.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fch-mis-arrow-direction',
    },
    {
      id: 'fch-q11',
      type: 'drag-drop-builder',
      stem: 'Build a hedgerow food chain by dragging the four organisms into the correct order from producer to top predator. The pool contains two distractors that are not links in any chain.',
      tier: 'challenge',
      parts: ['blue tit', 'oak leaf', 'sparrowhawk', 'caterpillar', 'water', 'soil'],
      correctArrangement: ['oak leaf', 'caterpillar', 'blue tit', 'sparrowhawk'],
      xpValue: 25,
      hint: 'Producer first. Water and soil are not living organisms in the chain; leave them out.',
    },
    {
      id: 'fch-q12',
      type: 'multiple-choice',
      stem: 'A Sevenoaks woodland has these organisms: deer, oak leaf, fox. Which best describes the fox?',
      tier: 'confident',
      options: [
        'a primary consumer that hunts the oak leaf',
        'a predator only; not a consumer',
        'a secondary consumer and a predator',
        'a producer because it is at the top',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'fch-mis-predator-vs-consumer',
      hint: 'Consumer ranks the chain level; predator describes how it hunts. Both can apply.',
    },
    {
      id: 'fch-q13',
      type: 'multiple-choice',
      stem: 'Which food chain is built correctly with the arrows pointing the right way?',
      tier: 'confident',
      options: [
        'fox --&gt; rabbit --&gt; grass',
        'grass --&gt; rabbit --&gt; fox',
        'rabbit --&gt; grass --&gt; fox',
        'grass &lt;-- rabbit &lt;-- fox',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'fch-mis-arrow-direction',
      hint: 'Producer first; arrows point from food to eater.',
    },
    {
      id: 'fch-q14',
      type: 'numeric-entry',
      stem: 'A Kentish hedgerow chain runs "oak leaf to caterpillar to blue tit to sparrowhawk". A pupil claims the chain has 4 consumers. The pupil is wrong by how many?',
      tier: 'challenge',
      correctAnswer: 1,
      xpValue: 25,
      hint: 'First find the real number of consumers (every link except the producer). Then subtract from the pupil\'s claim.',
    },
    {
      id: 'fch-q15',
      type: 'spot-misconception',
      stem: 'A pupil writes that "the oak leaf is a producer because it is at the start of the chain." Is the reasoning sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The reasoning is sound. The chain starts with the producer.',
          isMisconception: true,
        },
        {
          text: 'The reasoning is not sound. The oak leaf is the producer because it makes its own food by photosynthesis. We then place producers first in a chain.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fch-mis-position-defines-role',
    },
    {
      id: 'fch-q16',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class watches a pond. They see: pondweed, water flea, stickleback, heron. Which is the producer?',
      tier: 'confident',
      options: ['heron', 'water flea', 'stickleback', 'pondweed'],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'fch-mis-producer-confusion',
      hint: 'A producer photosynthesises. Which one is plant-like?',
    },
    {
      id: 'fch-q17',
      type: 'numeric-entry',
      stem: 'In the Sevenoaks pond chain "pondweed to water flea to stickleback to heron", count from 1 at the producer. What position does the heron occupy?',
      tier: 'confident',
      correctAnswer: 4,
      xpValue: 15,
      hint: 'Pondweed is position 1. Count along the arrows.',
    },
    {
      id: 'fch-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of how to build a food chain.',
      tier: 'confident',
      steps: [
        'Find the producer: the organism that makes its own food, usually a plant or alga.',
        'Find the primary consumer: the organism that eats the producer.',
        null,
        'Add the top predator: the organism that nothing else in the chain eats.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Find the secondary consumer: the organism that eats the primary consumer.',
      xpValue: 20,
    },
    {
      id: 'fch-q19',
      type: 'multiple-choice',
      stem: 'A Y7 pupil sketches a Sevenoaks meadow chain as: clover --&gt; honeybee --&gt; great tit --&gt; kestrel. Which best describes each organism?',
      tier: 'challenge',
      options: [
        'clover producer, honeybee primary, great tit secondary, kestrel top predator',
        'clover producer, honeybee top predator, great tit secondary, kestrel primary',
        'clover primary, honeybee producer, great tit secondary, kestrel top predator',
        'clover top predator, honeybee secondary, great tit primary, kestrel producer',
      ],
      correctIndex: 0,
      xpValue: 25,
      hint: 'Producer first; then primary, secondary, and top predator at the end.',
    },
    {
      id: 'fch-q20',
      type: 'free-text',
      stem: 'Explain in one or two sentences why a food chain is always drawn with the producer at the start, not anywhere else.',
      tier: 'challenge',
      sampleAnswer:
        'The producer makes its own food using sunlight, so the energy in the chain enters at the producer. Every other organism in the chain depends on this trapped energy, so the chain is drawn from producer to top predator to show energy flowing in one direction.',
      keywords: ['producer', 'energy', 'sunlight', 'photosynthesis', 'eaten'],
      xpValue: 25,
    },
    {
      id: 'fch-q21',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 class draws four chains. In one chain, the arrow points from rabbit to grass. What does the wrong arrow tell a careful reader?',
      tier: 'challenge',
      options: [
        'The chain reads correctly: rabbit eats grass.',
        'The chain reads "rabbit is eaten by grass", which is wrong; the pupil has flipped the arrow.',
        'The chain reads correctly because grass is bigger than rabbit.',
        'The chain has no meaning; only words matter.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'fch-mis-arrow-direction',
      hint: 'Always read the arrow as "is eaten by".',
    },
    {
      id: 'fch-q22',
      type: 'numeric-entry',
      stem: 'A Kentish farmer counts the producers, primary consumers, secondary consumers, and top predators in one wheat-field chain (wheat to vole to barn owl). How many of the four roles are present in this chain?',
      tier: 'challenge',
      correctAnswer: 3,
      xpValue: 25,
      hint: 'Wheat, vole, barn owl: which roles are filled? The chain has only three links, so one role is absent.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2018, Question 4 (food webs): "A common error reversed the arrows, with several candidates writing that the arrow shows what an animal hunts rather than the direction of energy flow." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-WRE-2018.PDF
    {
      id: 'fch-mis-arrow-direction',
      description:
        'In a food chain, the arrow points from the eater to the food it eats.',
      triggerAnswer: 'arrow-eater-to-food',
      correction:
        'Actually, the arrow points from the food to the eater. Read every arrow as "is eaten by". The arrow shows the direction energy flows along the chain.',
      reExplanation:
        'Imagine the energy as a river. Sunlight feeds the grass, then the energy flows from grass to rabbit to fox. The arrows trace that river. If you flipped the arrows, the river would run uphill: grass eats rabbit, which is wrong.',
    },
    // Source: BBC Bitesize KS3 Biology, "Feeding relationships" topic page (Ecosystems sub-section), Common Misconception block: "Pupils sometimes label the largest or scariest organism as the producer, missing that 'producer' refers to making food, not size or behaviour." https://www.bbc.co.uk/bitesize/topics/zxhhvcw
    {
      id: 'fch-mis-producer-confusion',
      description:
        'The producer is the largest or most important-looking organism in the chain.',
      triggerAnswer: 'biggest-is-producer',
      correction:
        'In fact, "producer" means the organism that makes its own food, almost always by photosynthesis. Plants and algae are producers. Size and rank do not decide.',
      reExplanation:
        'Test for a producer with one question: does it make its own food using sunlight? An oak leaf and pond algae both pass. A fox and a heron do not, even though they are big or impressive. Plants and algae are the only producers in our Y7 chains.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.196 Common mistake: "Students often define organisms by their position in the chain ('first thing is the producer') rather than by what they eat or how they obtain food." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'fch-mis-position-defines-role',
      description:
        'An organism is the producer because it is at the start of the chain.',
      triggerAnswer: 'position-defines-role',
      correction:
        'Actually, the organism is the producer because it makes its own food. We then place producers at the start. Position follows from the role; it does not decide it.',
      reExplanation:
        'Think of role first, position second. Step one: spot the producer (plant or alga that photosynthesises). Step two: spot what eats it (primary consumer). Then build the chain in that order. If you start with position, you can place a fox at the start and call it a producer.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 9 (SB9) "Ecosystems and material cycles" examiner report 2019, comments on Question 3 (food chains): "Students used 'predator' and 'prey' interchangeably with 'consumer', missing the levels of primary and secondary consumer required by the mark scheme." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'fch-mis-predator-vs-consumer',
      description:
        'Predator and consumer mean the same thing.',
      triggerAnswer: 'predator-equals-consumer',
      correction:
        'In fact, "consumer" is the broad word for any organism that eats another. "Predator" is the narrow word for a consumer that hunts. Primary, secondary, and top label the consumer\'s level in the chain.',
      reExplanation:
        'A rabbit eats grass, so the rabbit is a consumer. The rabbit is not really a predator; it is a herbivore. A fox hunts the rabbit, so the fox is a consumer AND a predator. Use "consumer" when ranking the chain. Use "predator" when describing how a consumer hunts.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.7.2 Organisation of an ecosystem: producers are described as "green plants and algae" and consumers as feeding on producers OR on other consumers. Pupils sometimes assume top predators "produce" the food chain. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'fch-mis-top-predator-importance',
      description:
        'The top predator is the most important organism in the chain because the others depend on it.',
      triggerAnswer: 'top-predator-most-important',
      correction:
        'Actually, the producer is the most important link. Without the producer trapping sunlight, no organism in the chain has any energy at all.',
      reExplanation:
        'Picture the chain without the producer: oak leaf goes, then caterpillars starve, blue tits starve, sparrowhawks starve. Now picture the chain without the sparrowhawk: every other link still has its food. Producers underpin the whole chain; top predators sit on top.',
    },
    // Source: BBC Bitesize KS3 Biology, "Feeding relationships" topic page: "Some pupils write 'sun' as the first organism in the chain, treating sunlight as a living thing." https://www.bbc.co.uk/bitesize/topics/zxhhvcw
    {
      id: 'fch-mis-sun-as-organism',
      description:
        'The Sun is the first link in a food chain, before the producer.',
      triggerAnswer: 'sun-as-link',
      correction:
        'In fact, a food chain links living organisms only. The Sun supplies the energy that the producer traps, but the Sun is not eaten and is not a link in the chain.',
      reExplanation:
        'A food chain answers the question "who eats whom". The Sun is not eaten by the oak leaf; the oak leaf uses light to make food. Some textbooks draw a wavy line from a Sun symbol to the producer to show where the energy enters; that is fine, but the chain itself begins with the producer.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

// ---------------------------------------------------------------------------
// Zone wiring
// ---------------------------------------------------------------------------

export const ecosystemsZoneNodes: SkillNode[] = [foodChains]

export const ecosystemsZone: Zone = {
  id: 'biology-ecosystems',
  name: 'Ecosystems',
  realm: 'vitalia',
  nodeIds: [foodChains.id],
}
