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
// Node 2 SVGs (Food Webs)
// ---------------------------------------------------------------------------

const oakTreeWebSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="24" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">An oak-tree food web</text>
  <rect x="240" y="40" width="120" height="50" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="300" y="64" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Oak leaf</text>
  <text x="300" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(producer)</text>
  <rect x="60" y="150" width="110" height="50" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="115" y="180" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Caterpillar</text>
  <rect x="245" y="150" width="110" height="50" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="180" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Wood mouse</text>
  <rect x="430" y="150" width="110" height="50" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="485" y="180" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Squirrel</text>
  <rect x="100" y="270" width="110" height="50" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="155" y="300" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Blue tit</text>
  <rect x="395" y="270" width="110" height="50" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="450" y="300" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Tawny owl</text>
  <rect x="245" y="350" width="110" height="40" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="300" y="376" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Sparrowhawk</text>
  <line x1="280" y1="92" x2="135" y2="148" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="300" y1="92" x2="300" y2="148" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="320" y1="92" x2="465" y2="148" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="135" y1="202" x2="155" y2="268" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="280" y1="202" x2="170" y2="268" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="320" y1="202" x2="440" y2="268" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="465" y1="202" x2="450" y2="268" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="200" y1="320" x2="290" y2="350" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <line x1="410" y1="320" x2="320" y2="350" stroke="#1F2937" stroke-width="2" marker-end="url(#wb-arrow)" />
  <defs>
    <marker id="wb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
  </defs>
</svg>
`.trim()

const gardenPondWebSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">A garden-pond food web</text>
  <rect x="80" y="44" width="100" height="44" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="130" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Pondweed</text>
  <rect x="420" y="44" width="100" height="44" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="470" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Algae</text>
  <rect x="60" y="160" width="110" height="44" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="115" y="186" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Water flea</text>
  <rect x="245" y="160" width="110" height="44" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="186" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Tadpole</text>
  <rect x="430" y="160" width="110" height="44" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="485" y="186" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Pond snail</text>
  <rect x="100" y="260" width="110" height="44" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="155" y="286" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Stickleback</text>
  <rect x="395" y="260" width="110" height="44" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="450" y="286" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Frog</text>
  <rect x="245" y="350" width="110" height="42" rx="10" fill="#FECACA" stroke="#7F1D1D" stroke-width="2" />
  <text x="300" y="376" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Heron</text>
  <line x1="125" y1="90" x2="120" y2="158" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="155" y1="90" x2="295" y2="158" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="465" y1="90" x2="305" y2="158" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="475" y1="90" x2="485" y2="158" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="135" y1="206" x2="150" y2="258" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="320" y1="206" x2="430" y2="258" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="475" y1="206" x2="465" y2="258" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="160" y1="306" x2="280" y2="350" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <line x1="445" y1="306" x2="320" y2="350" stroke="#1F2937" stroke-width="2" marker-end="url(#wb2-arrow)" />
  <defs>
    <marker id="wb2-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
  </defs>
</svg>
`.trim()

const removeSpeciesSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">If foxes disappear: a Kentish farmland cascade</text>
  <rect x="20" y="60" width="180" height="320" rx="10" fill="#FEE2E2" stroke="#7F1D1D" stroke-width="3" />
  <text x="110" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Step 1: foxes gone</text>
  <text x="110" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Top predator removed.</text>
  <text x="110" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">Nothing hunts</text>
  <text x="110" y="142" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">the rabbits.</text>
  <text x="110" y="180" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Step 2: rabbits</text>
  <text x="110" y="200" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">numbers RISE</text>
  <text x="110" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">More rabbits survive</text>
  <text x="110" y="236" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">to feed and breed.</text>
  <text x="110" y="280" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Step 3: grass</text>
  <text x="110" y="300" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">cover FALLS</text>
  <text x="110" y="320" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">More rabbits eat</text>
  <text x="110" y="336" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">more grass.</text>
  <rect x="220" y="60" width="360" height="320" rx="10" fill="#DBEAFE" stroke="#1D4ED8" stroke-width="3" />
  <text x="400" y="86" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#1F2937">Why we say RISE / FALL only</text>
  <text x="400" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">At Year 7 we describe DIRECTION:</text>
  <text x="400" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">numbers rise, fall, or stay the same.</text>
  <text x="400" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">We do NOT predict numbers like</text>
  <text x="400" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">"rabbits rise by 30%" because</text>
  <text x="400" y="210" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">real ecosystems have many</text>
  <text x="400" y="230" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">other variables: weather, disease,</text>
  <text x="400" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">other predators, food supply.</text>
  <text x="400" y="290" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Numerical predictions belong to</text>
  <text x="400" y="310" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">later year groups.</text>
  <text x="400" y="350" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Stick to: rises / falls / no change.</text>
</svg>
`.trim()

// ---------------------------------------------------------------------------
// Node 2: Food Webs (Confident)
// ---------------------------------------------------------------------------

export const foodWebs: SkillNode = {
  id: 'biology-ecosystems-food-webs',
  title: 'Food Webs',
  description:
    'Read a food web as several food chains sharing species. Trace which species sit on more than one chain. Predict the qualitative effect of removing a species (numbers rise, fall, or stay the same) on a Kentish farmland or oak-tree web. Year 7 scope: directions only, no numerical predictions.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-ecosystems',
  zoneName: 'Ecosystems',
  tier: 'confident',
  prerequisites: ['biology-ecosystems-food-chains'],
  curriculum: {
    ks3Objective:
      'The interdependence of organisms in an ecosystem, including food webs and insect pollinated crops; how organisms affect, and are affected by, their environment, including the accumulation of toxic materials.',
    awardingBodies: {
      aqa: '4.7.2.1 Levels of organisation; food webs; effects of removing or adding species (GCSE Biology 8461).',
      edexcel: 'SB9c Food webs and changes in feeding relationships (GCSE Biology 1BI0, Topic 9).',
      ocr: 'B6.1d Interdependence; the effect of changing the population of one species on others in the food web (GCSE Biology A J247).',
    },
  },
  scenes: [
    {
      id: 'fwb-scene-oak',
      title: 'An Oak-Tree Web',
      type: 'labelled-diagram',
      instructions:
        'Click each animal in the oak-tree web to read which chains it sits on.',
      data: {
        svg: oakTreeWebSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fwb-hs-oak',
            x: 50,
            y: 16,
            label: 'Oak leaf (producer)',
            description:
              'The producer at the base of the web. Three different primary consumers feed on the oak: caterpillar, wood mouse, and squirrel.',
          },
          {
            id: 'fwb-hs-caterpillar',
            x: 19,
            y: 44,
            label: 'Caterpillar',
            description:
              'Sits on TWO chains: oak to caterpillar to blue tit to sparrowhawk, AND oak to caterpillar to tawny owl.',
          },
          {
            id: 'fwb-hs-mouse',
            x: 50,
            y: 44,
            label: 'Wood mouse',
            description:
              'Eats oak leaves and acorns; eaten by both the blue tit (when small) and the tawny owl. Sits on more than one chain.',
          },
          {
            id: 'fwb-hs-squirrel',
            x: 81,
            y: 44,
            label: 'Squirrel',
            description:
              'Eats oak leaves and acorns; eaten by the tawny owl. Sits on its own short chain into the owl.',
          },
          {
            id: 'fwb-hs-bluetit',
            x: 26,
            y: 74,
            label: 'Blue tit',
            description:
              'Eats caterpillars and small wood mice. Eaten by the sparrowhawk.',
          },
          {
            id: 'fwb-hs-owl',
            x: 75,
            y: 74,
            label: 'Tawny owl',
            description:
              'Eats wood mice, squirrels, and caterpillars. Eaten by the sparrowhawk too.',
          },
          {
            id: 'fwb-hs-hawk',
            x: 50,
            y: 92,
            label: 'Sparrowhawk',
            description:
              'Top predator. Hunts blue tits and tawny owls. Sits at the top of multiple chains in the same web.',
          },
        ],
      },
    },
    {
      id: 'fwb-scene-pond',
      title: 'A Garden-Pond Web',
      type: 'labelled-diagram',
      instructions:
        'Click each organism in the garden-pond web to see how multiple chains share species.',
      data: {
        svg: gardenPondWebSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fwb-hs-pondweed',
            x: 22,
            y: 16,
            label: 'Pondweed (producer)',
            description:
              'Eaten by water fleas and tadpoles. Two primary consumers branch from the same producer.',
          },
          {
            id: 'fwb-hs-algae',
            x: 78,
            y: 16,
            label: 'Algae (producer)',
            description:
              'Eaten by tadpoles and pond snails. The web has two producers; not all chains start at pondweed.',
          },
          {
            id: 'fwb-hs-tadpole',
            x: 50,
            y: 46,
            label: 'Tadpole',
            description:
              'Sits on TWO chains: pondweed to tadpole to frog, AND algae to tadpole to frog. The frog draws food from both producers via the tadpole.',
          },
          {
            id: 'fwb-hs-snail',
            x: 81,
            y: 46,
            label: 'Pond snail',
            description:
              'Eats algae; eaten by the frog. A single-line route into the frog.',
          },
          {
            id: 'fwb-hs-frog',
            x: 75,
            y: 71,
            label: 'Frog',
            description:
              'Eats tadpoles and pond snails. Eaten by the heron. Sits on multiple chains.',
          },
          {
            id: 'fwb-hs-heron',
            x: 50,
            y: 92,
            label: 'Heron (top)',
            description:
              'Top predator. Hunts the stickleback and the frog. Like the sparrowhawk in the oak web, it draws on more than one chain.',
          },
        ],
      },
    },
    {
      id: 'fwb-scene-remove',
      title: 'Removing a Species: Direction Only',
      type: 'labelled-diagram',
      instructions:
        'Click each side to see what happens when foxes disappear from a Kentish farmland web, and why we describe direction only at Year 7.',
      data: {
        svg: removeSpeciesSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'fwb-hs-cascade',
            x: 18,
            y: 50,
            label: 'A three-step cascade',
            description:
              'Remove the fox: rabbits rise (no predator). Then grass cover falls (more rabbits eat more grass). Effects ripple beyond the level immediately below.',
          },
          {
            id: 'fwb-hs-direction',
            x: 67,
            y: 50,
            label: 'Direction only',
            description:
              'At Year 7 we say "rises", "falls", or "no immediate change". We do NOT predict numbers like "30%". Real ecosystems have weather, disease, and other variables we cannot quantify here.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'fwb-worked-1',
      title: 'Counting how many chains share a species',
      steps: [
        {
          explanation:
            'Look at the oak-tree web. The blue tit eats caterpillars and small wood mice. Tracing every chain that ends in the sparrowhawk via the blue tit gives:',
        },
        {
          explanation:
            'Chain A: oak leaf to caterpillar to blue tit to sparrowhawk.',
        },
        {
          explanation:
            'Chain B: oak leaf to wood mouse to blue tit to sparrowhawk.',
        },
        {
          explanation:
            'So the blue tit sits on at least 2 chains in the web. The same exercise on the tawny owl turns up 3 chains: via caterpillar, via wood mouse, via squirrel.',
        },
        {
          explanation:
            'Result: the more arrows pointing in and out of an organism, the more chains it sits on. Webs are made of many chains sharing species.',
        },
      ],
    },
    {
      id: 'fwb-worked-2',
      title: 'Predicting a "remove the fox" cascade',
      steps: [
        {
          explanation:
            'A Kentish farmland web has grass at the base, rabbits as primary consumers, and foxes as top predators. The farmer reports the foxes have moved away. Predict the qualitative effects.',
        },
        {
          explanation:
            'Step 1: Foxes gone. Rabbits no longer have a predator in this web. So rabbit numbers RISE.',
        },
        // Missing step (filled by the worked example)
        {
          explanation:
            'Step 2: More rabbits feed on more grass. So grass cover FALLS.',
        },
        {
          explanation:
            'Step 3: Anything else that needs grass cover (other herbivores, ground-nesting birds) is harder hit. We can say their numbers tend to FALL too. We do NOT put a number on it.',
        },
        {
          explanation:
            'Important Y7 scope rule: stop at directions. "Rabbits rise, grass falls" is the answer. "Rabbits rise by 30%" is not Y7 work; that needs maths beyond this stage.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'fwb-q1',
      type: 'multiple-choice',
      stem: 'Which best describes a food web?',
      tier: 'core',
      options: [
        'A single very long food chain.',
        'Several food chains that share species, drawn together.',
        'A list of producers only.',
        'A circle of arrows that point in both directions.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'fwb-mis-web-as-single-chain',
      hint: 'A web is what you get when one species sits on more than one chain.',
    },
    {
      id: 'fwb-q2',
      type: 'multiple-choice',
      stem: 'In the oak-tree web, which arrows point INTO the blue tit?',
      tier: 'core',
      options: [
        'arrows from caterpillar and wood mouse',
        'arrows from sparrowhawk only',
        'arrows from oak leaf only',
        'arrows from tawny owl',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'fwb-mis-arrow-direction-web',
      hint: 'An arrow into the blue tit means "is eaten by the blue tit".',
    },
    {
      id: 'fwb-q3',
      type: 'multiple-choice',
      stem: 'In the garden-pond web, which producer feeds the tadpole?',
      tier: 'core',
      options: [
        'pondweed only',
        'algae only',
        'both pondweed and algae',
        'neither; the tadpole eats only animals',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Look at every arrow that points into the tadpole.',
    },
    {
      id: 'fwb-q4',
      type: 'multiple-choice',
      stem: 'In a Kentish farmland web (grass, rabbit, fox), the farmer removes the foxes. What happens FIRST to the rabbit population?',
      tier: 'core',
      options: [
        'rabbits become producers',
        'rabbit numbers fall sharply',
        'rabbits leave the web',
        'rabbit numbers rise',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'fwb-mis-numerical-prediction',
      hint: 'No predator means more rabbits survive long enough to breed.',
    },
    {
      id: 'fwb-q5',
      type: 'multiple-choice',
      stem: 'After the foxes leave the Kentish farmland web, what happens to grass cover (over weeks)?',
      tier: 'core',
      options: [
        'grass becomes a consumer',
        'grass cover stays exactly the same',
        'grass cover falls because more rabbits eat more grass',
        'grass cover rises because there are more rabbits',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'fwb-mis-only-immediate-level',
      hint: 'The cascade reaches past rabbits, down to what they eat.',
    },
    {
      id: 'fwb-q6',
      type: 'spot-misconception',
      stem: 'A pupil writes that "if foxes disappear from a Kentish farm, rabbit numbers will rise by 50%." Is this method sound for Year 7?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. If foxes go, the rabbits double, so the increase is around 50%.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. At Year 7 we say "rabbit numbers rise"; predicting an exact number needs maths beyond this stage and ignores other variables (weather, disease, food).',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'fwb-mis-numerical-prediction',
    },
    {
      id: 'fwb-q7',
      type: 'numeric-entry',
      stem: 'In the oak-tree web, count the producers shown.',
      tier: 'core',
      correctAnswer: 1,
      xpValue: 10,
      hint: 'Look at the green box at the top of the diagram.',
    },
    {
      id: 'fwb-q8',
      type: 'numeric-entry',
      stem: 'In the garden-pond web, count the producers shown.',
      tier: 'core',
      correctAnswer: 2,
      xpValue: 10,
      hint: 'Some webs have more than one producer.',
    },
    {
      id: 'fwb-q9',
      type: 'numeric-entry',
      stem: 'In the oak-tree web, count the chains that pass through the tawny owl on the way to the sparrowhawk: oak leaf to caterpillar to tawny owl to sparrowhawk; oak leaf to wood mouse to tawny owl to sparrowhawk; oak leaf to squirrel to tawny owl to sparrowhawk. Total chains?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Each different starting primary consumer gives a different chain.',
    },
    {
      id: 'fwb-q10',
      type: 'multiple-choice',
      stem: 'In the garden-pond web, the heron is removed. What happens to the frog and the stickleback in the short term?',
      tier: 'confident',
      options: [
        'frog and stickleback numbers BOTH rise (no longer hunted)',
        'frog and stickleback numbers BOTH fall',
        'frog rises, stickleback stays the same',
        'they both leave the web',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'fwb-mis-only-immediate-level',
      hint: 'Both species are hunted by the heron. Lose the heron, both rise.',
    },
    {
      id: 'fwb-q11',
      type: 'free-text',
      stem: 'A pupil claims that "removing pondweed from the garden-pond web has no major effect because the animals can find other food." Explain in two sentences why the pupil is wrong, using qualitative direction-only reasoning.',
      tier: 'challenge',
      sampleAnswer:
        'Pondweed is a producer; removing it cuts the food source for water fleas and tadpoles, so their numbers fall. Sticklebacks, frogs, and the heron then have less food too, so their numbers fall, even if some animals briefly switch to algae. Producers underpin the web.',
      keywords: ['producer', 'fall', 'food source', 'pondweed', 'underpin'],
      xpValue: 25,
      misconceptionId: 'fwb-mis-remove-producer-no-effect',
    },
    {
      id: 'fwb-q12',
      type: 'spot-misconception',
      stem: 'A pupil writes that "in the oak-tree web, if the sparrowhawk leaves, only the blue tit and tawny owl are affected; nothing further down changes." Is the reasoning sound?',
      tier: 'confident',
      statements: [
        {
          text: 'The reasoning is sound. Only the level just below the top predator is affected.',
          isMisconception: true,
        },
        {
          text: 'The reasoning is not sound. With no sparrowhawk, blue tit and tawny owl numbers rise, so caterpillars, wood mice, and squirrels are eaten more, and the oak leaf shows more damage. Effects ripple down through the web.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'fwb-mis-only-immediate-level',
    },
    {
      id: 'fwb-q13',
      type: 'multiple-choice',
      stem: 'In the oak-tree web, which TWO animals share oak leaves as a food source AND therefore compete?',
      tier: 'challenge',
      options: [
        'sparrowhawk and tawny owl',
        'wood mouse and squirrel',
        'caterpillar and sparrowhawk',
        'blue tit and oak leaf',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'fwb-mis-same-level-always-compete',
      hint: 'Sharing a food source is what creates competition. Trace each pair back to the producer.',
    },
    {
      id: 'fwb-q14',
      type: 'numeric-entry',
      stem: 'In the oak-tree web, how many primary consumers (animals that eat the oak leaf directly) are shown?',
      tier: 'confident',
      correctAnswer: 3,
      xpValue: 15,
      hint: 'Count the boxes on the second row.',
    },
    {
      id: 'fwb-q15',
      type: 'data-extraction',
      stem: 'Look at the oak-tree web. How many DIFFERENT chains can you trace from oak leaf to sparrowhawk via either the blue tit or the tawny owl? List the chains, then give the count.',
      tier: 'confident',
      dataSource:
        'Oak-tree web. Producer: oak leaf. Primary consumers: caterpillar, wood mouse, squirrel. Secondary consumers: blue tit (eats caterpillar, wood mouse), tawny owl (eats caterpillar, wood mouse, squirrel). Top predator: sparrowhawk (eats blue tit and tawny owl).',
      correctAnswer: '5',
      xpValue: 20,
      hint: 'Via blue tit: oak to caterpillar to blue tit to sparrowhawk; oak to wood mouse to blue tit to sparrowhawk. Via tawny owl: caterpillar, wood mouse, or squirrel route. Count them all.',
    },
    {
      id: 'fwb-q16',
      type: 'drag-order',
      stem: 'Place these qualitative effects in the order they happen after foxes are removed from the Kentish farmland web.',
      tier: 'confident',
      items: [
        'Grass cover falls because more rabbits eat more grass.',
        'Foxes are no longer present in the web.',
        'Rabbit numbers rise because no predator hunts them.',
        'Other herbivores that depend on grass cover are squeezed.',
      ],
      correctOrder: [1, 2, 0, 3],
      xpValue: 20,
      misconceptionId: 'fwb-mis-only-immediate-level',
    },
    {
      id: 'fwb-q17',
      type: 'drag-drop-builder',
      stem: 'Build a list of all the species in the garden-pond web that the FROG eats directly. Drag each one in.',
      tier: 'confident',
      parts: [
        'pondweed',
        'tadpole',
        'algae',
        'pond snail',
        'water flea',
        'heron',
      ],
      correctArrangement: ['tadpole', 'pond snail'],
      xpValue: 20,
      hint: 'Look for arrows pointing INTO the frog. The frog eats animals, not producers.',
    },
    {
      id: 'fwb-q18',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of removing the heron from the garden-pond web.',
      tier: 'confident',
      steps: [
        'The heron is removed; the top predator is gone.',
        'Frog and stickleback numbers rise because nothing hunts them.',
        null,
        'Pondweed and algae are eaten more (water flea, tadpole, snail rise too) so producer cover falls.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Water fleas, tadpoles, and pond snails are eaten more by the rising frog and stickleback numbers, so primary consumer numbers fall.',
      xpValue: 20,
    },
    {
      id: 'fwb-q19',
      type: 'multiple-choice',
      stem: 'A Sevenoaks Y7 pupil claims that in any web, two consumers at the same level always compete. In the garden-pond web, do the stickleback and the frog compete?',
      tier: 'challenge',
      options: [
        'Yes, because they are at the same level.',
        'Yes, because they both live in water.',
        'No, because no two species ever compete.',
        'Not in this web. The stickleback eats water fleas; the frog eats tadpoles and snails. They share no food source here, so they do not compete in this web.',
      ],
      correctIndex: 3,
      xpValue: 25,
      misconceptionId: 'fwb-mis-same-level-always-compete',
      hint: 'Competition needs a shared food source. Trace each animal back to what it eats.',
    },
    {
      id: 'fwb-q20',
      type: 'free-text',
      stem: 'Explain in two sentences, qualitatively only, what happens to the oak-tree web if all the caterpillars are wiped out by a parasite.',
      tier: 'challenge',
      sampleAnswer:
        'The blue tit and tawny owl lose one of their food sources, so their numbers fall, and the sparrowhawk has fewer prey too. The oak leaf is eaten less by caterpillars, so leaf damage falls and the wood mouse and squirrel face more competition for the leaves they share with caterpillar-fed routes.',
      keywords: ['blue tit', 'tawny owl', 'fall', 'sparrowhawk', 'oak'],
      xpValue: 25,
      misconceptionId: 'fwb-mis-only-immediate-level',
    },
    {
      id: 'fwb-q21',
      type: 'multiple-choice',
      stem: 'In a Kentish farmland web (grass, rabbit, hedgehog, fox, blackbird, earthworm), a pupil writes that "the hedgehog and the blackbird both eat earthworms, so they compete." This claim is:',
      tier: 'challenge',
      options: [
        'Wrong; same-level animals never compete.',
        'Right; sharing earthworms as food is exactly what defines competition between them.',
        'Wrong; competition only happens between predator and prey.',
        'Right; but only in winter.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'fwb-mis-same-level-always-compete',
    },
    {
      id: 'fwb-q22',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil predicts: "If we remove the fox from a Kentish farm, rabbit numbers will rise by 30% within a month." Which is the most appropriate Y7 mark?',
      tier: 'challenge',
      options: [
        'Full marks; a good numerical prediction.',
        'No marks; rabbit numbers fall when foxes leave.',
        'Partial credit only; "rabbit numbers rise" is the qualitative Y7 answer, but the 30%/month claim is beyond Y7 scope.',
        'Full marks; ecosystems are easy to predict numerically.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'fwb-mis-numerical-prediction',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2019, Question 5 (food webs): "Many candidates lost marks by attempting to give percentage changes after removal of a species, when the question explicitly asked for direction of change only." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2019/june/AQA-84612F-WRE-2019.PDF
    {
      id: 'fwb-mis-numerical-prediction',
      description:
        'Removing a species lets you predict the percentage rise or fall in another species.',
      triggerAnswer: 'numerical-prediction',
      correction:
        'In fact, at Year 7 we predict direction only: numbers rise, fall, or stay the same. Numerical predictions need data, models, and other variables (weather, disease, other predators).',
      reExplanation:
        'Imagine being asked "if we remove foxes, how many rabbits will there be in a month?" To answer with a number you would need rabbit birth rate, food supply, weather, disease, other predators. None of those are in a Y7 web. The safe and correct answer is "rabbit numbers rise"; the size of the rise is not a Y7 question.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 9 (SB9) "Ecosystems and material cycles" examiner report 2019, comments on Question 4 (food webs): "Several candidates only described the effect on the level immediately below the removed species, missing the cascade onto producers and lower levels." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'fwb-mis-only-immediate-level',
      description:
        'Removing a species only affects the level immediately below it; further levels stay the same.',
      triggerAnswer: 'immediate-level-only',
      correction:
        'Actually, effects cascade through the web. Remove the top predator: prey rise, what the prey eats falls, and so on down to the producer. The cascade can reach two or three levels below.',
      reExplanation:
        'Picture removing the fox in a Kentish farm. Step 1, foxes gone. Step 2, rabbits rise. Step 3, grass cover falls. Step 4, ground-nesting birds and other herbivores that need grass cover are squeezed. The change at the top tugs a thread that runs all the way down.',
    },
    // Source: BBC Bitesize KS3 Biology, "Interdependence and food webs" topic page (Ecosystems sub-section), Common Misconception block: "Pupils sometimes assume two animals at the same trophic level always compete, missing that competition requires a shared food source or shared resource." https://www.bbc.co.uk/bitesize/topics/zxhhvcw
    {
      id: 'fwb-mis-same-level-always-compete',
      description:
        'Two animals at the same level in a web automatically compete with each other.',
      triggerAnswer: 'same-level-compete',
      correction:
        'In fact, competition needs a shared food source. Two consumers at the same level can sit on different chains and never overlap.',
      reExplanation:
        'In the garden-pond web, the stickleback eats water fleas and the frog eats tadpoles and snails. They share no food source, so in this web they do not compete. Add a chain where both eat water fleas and competition appears. Always trace the food source before saying two animals compete.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.198 Common mistake: "Students sometimes treat a food web as a single very long food chain by reading only one path, missing that webs branch and reconverge." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'fwb-mis-web-as-single-chain',
      description:
        'A food web is just one very long food chain drawn in a different way.',
      triggerAnswer: 'web-as-chain',
      correction:
        'Actually, a web is many chains sharing species. One organism can sit on several chains because more than one arrow points in or out.',
      reExplanation:
        'Look at the oak-tree web. The blue tit eats caterpillars AND wood mice. That is two chains that share the blue tit, not one. Trace each chain separately and the web breaks down into the chains that built it.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.7.2 Organisation of an ecosystem: at GCSE Foundation tier the reverse cascade (remove a producer) is the workhorse question. KS3 pupils sometimes assume removing a producer just means "the animals find other food", missing the trophic chain failure. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'fwb-mis-remove-producer-no-effect',
      description:
        'Removing a producer from a web has no major effect because animals can find other food.',
      triggerAnswer: 'remove-producer-no-effect',
      correction:
        'In fact, removing a producer collapses every chain that starts at that producer. Animals fed by it lose their food source first, then everything that ate them.',
      reExplanation:
        'Take pondweed out of the garden-pond web. Water flea and tadpole numbers fall (they ate pondweed). Stickleback and frog numbers fall (less of their food). Heron numbers fall too. Producers underpin the entire web, so removing one is the most damaging move you can make.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.199 Common mistake: "Pupils confuse 'predator' arrows with 'eats arrows' in a web, drawing arrows from each consumer to its prey rather than from food to eater." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'fwb-mis-arrow-direction-web',
      description:
        'In a food web, arrows point from each predator to its prey.',
      triggerAnswer: 'arrow-predator-to-prey',
      correction:
        'In fact, the arrow rule is the same as in a chain: from food to eater. So the arrow points from the prey to the predator, showing energy flowing up the web.',
      reExplanation:
        'Read every arrow as "is eaten by". In the oak web, oak leaf to caterpillar reads as "oak leaf is eaten by caterpillar". Caterpillar to blue tit reads as "caterpillar is eaten by blue tit". The pattern carries straight over from chains; webs do not invent a new arrow rule.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

// ---------------------------------------------------------------------------
// Node 3 SVGs (Energy Flow)
// ---------------------------------------------------------------------------

const energyEntryFlowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="26" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">How energy enters and flows along a chain</text>
  <circle cx="80" cy="120" r="40" fill="#FEF08A" stroke="#A16207" stroke-width="3" />
  <text x="80" y="124" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Sun</text>
  <line x1="125" y1="130" x2="180" y2="160" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,3" />
  <text x="155" y="118" font-family="sans-serif" font-size="11" fill="#1F2937">light energy</text>
  <rect x="180" y="140" width="100" height="50" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="230" y="166" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Oak leaf</text>
  <text x="230" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(producer)</text>
  <line x1="285" y1="165" x2="320" y2="165" stroke="#1F2937" stroke-width="3" marker-end="url(#ef-arrow)" />
  <rect x="325" y="140" width="100" height="50" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="375" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Caterpillar</text>
  <line x1="430" y1="165" x2="465" y2="165" stroke="#1F2937" stroke-width="3" marker-end="url(#ef-arrow)" />
  <rect x="470" y="140" width="100" height="50" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="520" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Blue tit</text>
  <text x="300" y="240" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Energy enters at the producer through photosynthesis.</text>
  <text x="300" y="262" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">It then flows ONE WAY along the chain, food to eater.</text>
  <text x="300" y="294" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">No arrow ever points back from blue tit to caterpillar.</text>
  <text x="300" y="312" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Energy that has been used cannot be recovered by the chain.</text>
  <text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(The Sun is not a link; it is the source of the energy outside the chain.)</text>
  <defs>
    <marker id="ef-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
  </defs>
</svg>
`.trim()

const energyLostSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="24" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">Energy lost at each level (not transferred to the next)</text>
  <rect x="180" y="60" width="240" height="50" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="300" y="86" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Producer (oak leaf)</text>
  <text x="300" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">traps light, builds glucose</text>
  <line x1="300" y1="115" x2="300" y2="155" stroke="#1F2937" stroke-width="3" marker-end="url(#el-arrow)" />
  <rect x="180" y="160" width="240" height="50" rx="10" fill="#FEF3C7" stroke="#92400E" stroke-width="2" />
  <text x="300" y="186" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Primary consumer (caterpillar)</text>
  <line x1="300" y1="215" x2="300" y2="255" stroke="#1F2937" stroke-width="3" marker-end="url(#el-arrow)" />
  <rect x="180" y="260" width="240" height="50" rx="10" fill="#FED7AA" stroke="#9A3412" stroke-width="2" />
  <text x="300" y="286" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">Secondary consumer (blue tit)</text>
  <text x="450" y="98" font-family="sans-serif" font-size="12" fill="#7F1D1D">heat lost</text>
  <text x="450" y="114" font-family="sans-serif" font-size="12" fill="#7F1D1D">(respiration)</text>
  <line x1="425" y1="86" x2="445" y2="92" stroke="#7F1D1D" stroke-width="2" marker-end="url(#el-loss)" />
  <text x="450" y="190" font-family="sans-serif" font-size="12" fill="#7F1D1D">movement,</text>
  <text x="450" y="206" font-family="sans-serif" font-size="12" fill="#7F1D1D">heat, waste</text>
  <line x1="425" y1="184" x2="445" y2="190" stroke="#7F1D1D" stroke-width="2" marker-end="url(#el-loss)" />
  <text x="450" y="290" font-family="sans-serif" font-size="12" fill="#7F1D1D">movement,</text>
  <text x="450" y="306" font-family="sans-serif" font-size="12" fill="#7F1D1D">heat, waste</text>
  <line x1="425" y1="284" x2="445" y2="290" stroke="#7F1D1D" stroke-width="2" marker-end="url(#el-loss)" />
  <text x="120" y="98" text-anchor="end" font-family="sans-serif" font-size="12" fill="#1F2937">undigested</text>
  <text x="120" y="114" text-anchor="end" font-family="sans-serif" font-size="12" fill="#1F2937">parts pass</text>
  <line x1="180" y1="92" x2="155" y2="98" stroke="#1F2937" stroke-width="2" marker-end="url(#el-loss)" />
  <text x="300" y="346" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Each step keeps less energy than the one before.</text>
  <text x="300" y="364" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">Most chains run out of energy after 4 or 5 links.</text>
  <defs>
    <marker id="el-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
    </marker>
    <marker id="el-loss" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#7F1D1D" />
    </marker>
  </defs>
</svg>
`.trim()

const pyramidOfNumbersSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <text x="300" y="22" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#1F2937">Pyramid of numbers: a Kentish oak chain</text>
  <rect x="100" y="56" width="400" height="50" fill="#DCFCE7" stroke="#15803D" stroke-width="3" />
  <text x="300" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">1 oak tree (producer)</text>
  <text x="300" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">a single huge organism</text>
  <rect x="50" y="116" width="500" height="60" fill="#FEF3C7" stroke="#92400E" stroke-width="3" />
  <text x="300" y="144" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">~5000 caterpillars (primary consumer)</text>
  <text x="300" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">many small herbivores feed on the one tree</text>
  <rect x="200" y="186" width="200" height="60" fill="#FED7AA" stroke="#9A3412" stroke-width="3" />
  <text x="300" y="214" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">~50 blue tits (secondary consumer)</text>
  <text x="300" y="232" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">fewer than the caterpillars they hunt</text>
  <rect x="265" y="256" width="70" height="50" fill="#FECACA" stroke="#7F1D1D" stroke-width="3" />
  <text x="300" y="282" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1F2937">1 sparrowhawk</text>
  <text x="300" y="298" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1F2937">(top predator)</text>
  <text x="300" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">The bars show NUMBERS of organisms, not their size or mass.</text>
  <text x="300" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">A pyramid of numbers can look upside down at the bottom</text>
  <text x="300" y="374" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1F2937">when one big producer feeds many small herbivores.</text>
</svg>
`.trim()

// ---------------------------------------------------------------------------
// Node 3: Energy Flow (Confident)
// ---------------------------------------------------------------------------

export const energyFlow: SkillNode = {
  id: 'biology-ecosystems-energy-flow',
  title: 'Energy Flow Through an Ecosystem',
  description:
    'Trace energy from sunlight through a producer into consumers, and read why energy is lost at each step (movement, heat, waste, undigested parts). Build pyramids of numbers from a Kentish oak chain. Year 7 scope: pyramids of NUMBERS only, no biomass percentages, no 10% rule.',
  subject: 'biology',
  realm: 'vitalia',
  zoneId: 'biology-ecosystems',
  zoneName: 'Ecosystems',
  tier: 'confident',
  prerequisites: ['biology-ecosystems-food-chains'],
  curriculum: {
    ks3Objective:
      'The interdependence of organisms in an ecosystem, including food webs and insect pollinated crops; how organisms affect, and are affected by, their environment, including the accumulation of toxic materials.',
    awardingBodies: {
      aqa: '4.7.2.2 Pyramids of biomass; energy transfers and biomass (GCSE Biology 8461). Year 7 scope is pyramid of numbers only.',
      edexcel: 'SB9d Energy flow through an ecosystem; trophic levels (GCSE Biology 1BI0, Topic 9). Year 7 scope is qualitative energy loss only.',
      ocr: 'B6.1e Pyramids of numbers and energy flow (GCSE Biology A J247). Year 7 scope is pyramid of numbers only.',
    },
  },
  scenes: [
    {
      id: 'efl-scene-flow',
      title: 'Energy In, Energy Along',
      type: 'labelled-diagram',
      instructions:
        'Click each part of the diagram to see how energy enters at the producer and flows along the chain.',
      data: {
        svg: energyEntryFlowSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'efl-hs-sun',
            x: 13,
            y: 30,
            label: 'Sun (energy source, not a chain link)',
            description:
              'The Sun supplies the light energy that the producer traps in photosynthesis. It is the source of the chain\'s energy but is not a chain link itself.',
          },
          {
            id: 'efl-hs-producer',
            x: 38,
            y: 41,
            label: 'Producer traps the energy',
            description:
              'The oak leaf uses light, CO₂, and water in photosynthesis to build glucose. The energy in glucose is the start of the chain.',
          },
          {
            id: 'efl-hs-flow',
            x: 65,
            y: 41,
            label: 'Energy flows one way',
            description:
              'When the caterpillar eats the leaf, some energy passes to it. When the blue tit eats the caterpillar, some passes on. Energy moves from food to eater, never back.',
          },
          {
            id: 'efl-hs-oneway',
            x: 50,
            y: 75,
            label: 'No reverse flow',
            description:
              'No arrow ever points back from blue tit to caterpillar, or caterpillar to oak. Energy used by an organism (heat, movement) cannot return to a previous level.',
          },
        ],
      },
    },
    {
      id: 'efl-scene-lost',
      title: 'Energy Lost at Each Step',
      type: 'labelled-diagram',
      instructions:
        'Click each loss arrow to read where energy goes when it is not passed on to the next level.',
      data: {
        svg: energyLostSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'efl-hs-loss-heat',
            x: 80,
            y: 26,
            label: 'Heat lost in respiration',
            description:
              'Cells release energy from glucose to keep working. A lot of that energy ends up as heat, which warms the air and never reaches the next animal in the chain.',
          },
          {
            id: 'efl-hs-loss-move',
            x: 80,
            y: 50,
            label: 'Movement and waste',
            description:
              'A caterpillar wriggling, a blue tit flying, urine and droppings: all of these use up or carry away energy. None of it gets passed up the chain.',
          },
          {
            id: 'efl-hs-undigested',
            x: 16,
            y: 26,
            label: 'Undigested parts',
            description:
              'A caterpillar leaves stalks and veins behind when it eats a leaf. Those bits hold energy that the caterpillar never absorbs, so the energy never enters the chain at all.',
          },
          {
            id: 'efl-hs-chain-limit',
            x: 50,
            y: 89,
            label: 'Why chains end',
            description:
              'Each level keeps only a fraction of the energy below it. After 4 or 5 links there is rarely enough energy left to feed another animal, so chains tend to be short.',
          },
        ],
      },
    },
    {
      id: 'efl-scene-pyramid',
      title: 'Pyramid of Numbers',
      type: 'labelled-diagram',
      instructions:
        'Click each level of the pyramid to read how the count of organisms changes along a Kentish oak chain.',
      data: {
        svg: pyramidOfNumbersSvg,
        viewBox: '0 0 600 400',
        hotspots: [
          {
            id: 'efl-hs-tree',
            x: 50,
            y: 18,
            label: 'One oak tree',
            description:
              'A single producer can feed many primary consumers because it is huge. The bottom bar of a numbers pyramid is sometimes thinner than the bar above it.',
          },
          {
            id: 'efl-hs-caterpillars',
            x: 50,
            y: 35,
            label: 'About 5000 caterpillars',
            description:
              'Many small herbivores feed on one big producer. The caterpillar bar is the widest in this pyramid because there are so many of them.',
          },
          {
            id: 'efl-hs-bluetits',
            x: 50,
            y: 53,
            label: 'About 50 blue tits',
            description:
              'Each blue tit eats many caterpillars over its lifetime, so there are far fewer blue tits than caterpillars. Counts fall as we move up.',
          },
          {
            id: 'efl-hs-hawk',
            x: 50,
            y: 70,
            label: 'One sparrowhawk',
            description:
              'The top predator usually has the lowest count. One sparrowhawk hunts many blue tits across its territory.',
          },
          {
            id: 'efl-hs-numbers-only',
            x: 50,
            y: 90,
            label: 'NUMBERS only at Year 7',
            description:
              'These bars show counts of organisms, not their size or mass. Pyramids of biomass are GCSE work; for now we only count.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'efl-worked-1',
      title: 'Tracking energy lost between two levels',
      steps: [
        {
          explanation:
            'A caterpillar eats an oak leaf. Why does the blue tit that later eats the caterpillar not get all the energy that was in the leaf?',
        },
        {
          explanation:
            'Step 1: The caterpillar leaves leaf veins and tough parts uneaten. Energy in those scraps is undigested and never enters the caterpillar.',
        },
        {
          explanation:
            'Step 2: The caterpillar uses some of the energy it does absorb for its own life: moving, growing, breathing. A lot of this energy leaves as heat through respiration.',
        },
        {
          explanation:
            'Step 3: Some of the absorbed energy is lost as waste (droppings) before the caterpillar is eaten by the blue tit.',
        },
        {
          explanation:
            'Step 4: Only the energy still stored in the caterpillar\'s body when the blue tit catches it can be passed on. That is much less than the total energy in the original leaf.',
        },
        {
          explanation:
            'Take-away: at every step, three losses (undigested parts, heat from respiration, movement and waste) reduce how much energy makes it to the next link. Stack the losses across many steps and the chain runs out.',
        },
      ],
    },
    {
      id: 'efl-worked-2',
      title: 'Reading a pyramid of numbers (NOT biomass)',
      steps: [
        {
          explanation:
            'A Sevenoaks oak chain shows: 1 oak tree, 5000 caterpillars, 50 blue tits, 1 sparrowhawk. Build a pyramid of NUMBERS.',
        },
        {
          explanation:
            'Step 1: Order the levels with the producer at the bottom and the top predator at the top.',
        },
        // Missing step (filled in by the worked example)
        {
          explanation:
            'Step 2: Make each bar\'s width match the COUNT at that level (not the size of the organism). The 5000-caterpillar bar is the widest; the 1-tree bar and 1-hawk bar are the narrowest.',
        },
        {
          explanation:
            'Step 3: Notice the shape. The producer level has only 1 organism, so the bottom bar is THIN. This is the famous "inverted" look that pyramids of numbers can take when one big plant feeds many small herbivores.',
        },
        {
          explanation:
            'Step 4: Stop here. Year 7 does not weigh the organisms. We do not draw a pyramid of biomass; we do not apply the 10% rule. Numbers only.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'efl-q1',
      type: 'multiple-choice',
      stem: 'Where does the energy in a food chain first come from?',
      tier: 'core',
      options: [
        'the soil that holds the producer',
        'the top predator',
        'sunlight, trapped by the producer in photosynthesis',
        'the air the consumers breathe',
      ],
      correctIndex: 2,
      xpValue: 10,
      hint: 'Producers photosynthesise using light.',
    },
    {
      id: 'efl-q2',
      type: 'multiple-choice',
      stem: 'In which direction does energy flow along a food chain?',
      tier: 'core',
      options: [
        'from the eater to the food',
        'in both directions, equally',
        'from food to eater, in one direction only',
        'in a circle',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'efl-mis-energy-flows-back',
      hint: 'Read the chain arrows: food to eater. Energy follows.',
    },
    {
      id: 'efl-q3',
      type: 'multiple-choice',
      stem: 'Which of these is NOT a way that energy is lost from one level of a food chain to the next?',
      tier: 'core',
      options: [
        'heat from respiration',
        'movement (a blue tit flying)',
        'undigested parts (leaf veins left behind)',
        'energy passed to the next level along the chain',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'efl-mis-no-energy-loss',
      hint: 'The question asks what is NOT a loss. Three are losses; one is the transfer.',
    },
    {
      id: 'efl-q4',
      type: 'multiple-choice',
      stem: 'Why do most food chains have only 4 or 5 links?',
      tier: 'core',
      options: [
        'Because energy is lost at each step, so there is not enough left to support another level.',
        'Because animals get bored eating after 5 levels.',
        'Because writing a 6-link chain is too hard.',
        'Because the Sun stops shining after 5 links.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'efl-mis-chain-length-no-limit',
      hint: 'Each step keeps only a fraction of the energy below it.',
    },
    {
      id: 'efl-q5',
      type: 'multiple-choice',
      stem: 'In a pyramid of numbers for the chain "1 oak tree, 5000 caterpillars, 50 blue tits, 1 sparrowhawk", which bar is the widest?',
      tier: 'core',
      options: [
        'oak tree',
        'sparrowhawk',
        'blue tits',
        'caterpillars',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'efl-mis-pyramid-bottom-largest',
      hint: 'A pyramid of numbers shows COUNTS, not sizes. Which level has the most organisms?',
    },
    {
      id: 'efl-q6',
      type: 'numeric-entry',
      stem: 'In the chain "1 oak tree, 5000 caterpillars, 50 blue tits, 1 sparrowhawk", how many blue tits are there?',
      tier: 'core',
      correctAnswer: 50,
      xpValue: 10,
      hint: 'Read the number at the blue tit level.',
    },
    {
      id: 'efl-q7',
      type: 'numeric-entry',
      stem: 'Most food chains run out of energy after about how many links? Give a single number that is an accepted Y7 maximum.',
      tier: 'core',
      correctAnswer: 5,
      xpValue: 10,
      hint: 'Year 7 says "4 or 5 links". Choose the upper limit.',
    },
    {
      id: 'efl-q8',
      type: 'spot-misconception',
      stem: 'A pupil writes that "energy from the sparrowhawk passes back down the chain when it produces droppings, so the chain recycles energy." Is this method sound?',
      tier: 'core',
      statements: [
        {
          text: 'The method is sound. Droppings return energy to the lower levels of the chain.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound. Energy lost as droppings or heat does NOT return to lower levels of the chain. Some carbon and minerals can be recycled by decomposers, but the energy itself flows one way.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'efl-mis-energy-flows-back',
    },
    {
      id: 'efl-q9',
      type: 'multiple-choice',
      stem: 'A Y7 pupil writes that "no energy is lost as a chain runs through caterpillar to blue tit." What is the most accurate correction?',
      tier: 'challenge',
      options: [
        'Correct: caterpillars are very efficient.',
        'No: most of the energy is lost as movement, heat from respiration, undigested parts, and waste before it reaches the blue tit.',
        'No: energy is gained at each step.',
        'Correct: the Sun keeps topping it up.',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'efl-mis-no-energy-loss',
    },
    {
      id: 'efl-q10',
      type: 'multiple-choice',
      stem: 'In the oak-tree pyramid (1 tree, 5000 caterpillars, 50 blue tits, 1 sparrowhawk), why is the bottom bar (oak tree) NARROWER than the caterpillar bar above it?',
      tier: 'challenge',
      options: [
        'because the oak is small',
        'because there is only ONE oak tree, but many caterpillars feed on it; the bar shows the count, not the size of the organism',
        'because pyramids of numbers always invert',
        'because oaks are not producers',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'efl-mis-pyramid-bottom-largest',
    },
    {
      id: 'efl-q11',
      type: 'data-extraction',
      stem: 'A pyramid of numbers for a Sevenoaks pond chain shows: 1 layer of pondweed, 200 water fleas, 30 sticklebacks, 1 heron. Which level has the smallest count?',
      tier: 'confident',
      dataSource:
        'Sevenoaks pond pyramid: pondweed (1), water fleas (200), sticklebacks (30), heron (1). Counts at each level.',
      correctAnswer: '1',
      xpValue: 15,
      hint: 'Two levels share the smallest count (the producer and the top predator); the answer is that count.',
    },
    {
      id: 'efl-q12',
      type: 'numeric-entry',
      stem: 'In a Kentish meadow chain "grass, rabbits, foxes" the count is 100,000 grass plants, 200 rabbits, 5 foxes. How many rabbits per fox does the chain support, on average? (Round to the nearest whole number.)',
      tier: 'confident',
      correctAnswer: 40,
      xpValue: 15,
      hint: 'Divide 200 by 5.',
    },
    {
      id: 'efl-q13',
      type: 'spot-misconception',
      stem: 'A pupil writes that "every level of a food chain keeps about 10% of the energy from the level below, so we can calculate energy at each level using 10% steps." Is this method sound for Year 7?',
      tier: 'confident',
      statements: [
        {
          text: 'The method is sound. The 10% rule is the standard Y7 calculation.',
          isMisconception: true,
        },
        {
          text: 'The method is not sound for Year 7. The 10% rule is GCSE work; at Y7 we describe energy loss qualitatively (movement, heat, waste, undigested parts) without putting a percentage on it.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'efl-mis-ten-percent-rule',
    },
    {
      id: 'efl-q14',
      type: 'drag-order',
      stem: 'Place these stages in the order energy moves through a Kentish hedgerow chain.',
      tier: 'confident',
      items: [
        'A blue tit eats the caterpillar; some energy passes on, much is lost.',
        'Sunlight reaches the oak leaf.',
        'A caterpillar eats the leaf; some energy passes on, much is lost.',
        'The oak leaf traps light energy in glucose by photosynthesis.',
      ],
      correctOrder: [1, 3, 2, 0],
      xpValue: 20,
    },
    {
      id: 'efl-q15',
      type: 'drag-drop-builder',
      stem: 'Build a list of all the ways energy is LOST between two levels of a food chain. Drag each loss into the answer; ignore the distractors.',
      tier: 'confident',
      parts: [
        'heat from respiration',
        'undigested parts',
        'movement',
        'waste (droppings)',
        'energy passed to the next consumer',
        'sunlight added at each level',
      ],
      correctArrangement: [
        'heat from respiration',
        'undigested parts',
        'movement',
        'waste (droppings)',
      ],
      xpValue: 20,
      misconceptionId: 'efl-mis-no-energy-loss',
    },
    {
      id: 'efl-q16',
      type: 'numeric-entry',
      stem: 'In a Sevenoaks oak pyramid (1 oak tree, 5000 caterpillars, 50 blue tits, 1 sparrowhawk), how many caterpillars on average must each blue tit\'s share work out to be? (Divide and round to the nearest whole number.)',
      tier: 'confident',
      correctAnswer: 100,
      xpValue: 15,
      hint: 'Divide 5000 by 50.',
    },
    {
      id: 'efl-q17',
      type: 'missing-step',
      stem: 'Fill in the missing step in this account of why a Kentish hedgerow chain ends after 4 or 5 links.',
      tier: 'confident',
      steps: [
        'Energy enters the chain at the producer through photosynthesis.',
        'At each step, only some of the energy in the food is passed to the next eater.',
        null,
        'After 4 or 5 steps, there is too little energy left to support another animal, so the chain ends.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Most of the energy at each step is lost as heat from respiration, movement, waste, and undigested parts.',
      xpValue: 20,
    },
    {
      id: 'efl-q18',
      type: 'multiple-choice',
      stem: 'Why does Year 7 use a pyramid of NUMBERS rather than a pyramid of biomass?',
      tier: 'confident',
      options: [
        'Pyramids of biomass do not exist.',
        'Numbers and biomass always give exactly the same shape.',
        'Pyramids of numbers are always upside down.',
        'Counting is simpler than weighing every organism, and it builds the right qualitative picture; biomass calculations belong to GCSE.',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'efl-mis-biomass-at-y7',
    },
    {
      id: 'efl-q19',
      type: 'free-text',
      stem: 'Explain in two sentences why a food chain rarely has more than 4 or 5 links. Use the words "energy" and "lost".',
      tier: 'challenge',
      sampleAnswer:
        'Each step in the chain keeps only some of the energy from the level below, because energy is lost as heat from respiration, movement, waste, and undigested parts. After 4 or 5 levels, so much energy has been lost that there is not enough left to support another animal.',
      keywords: ['energy', 'lost', 'heat', 'links', 'each'],
      xpValue: 25,
      misconceptionId: 'efl-mis-chain-length-no-limit',
    },
    {
      id: 'efl-q20',
      type: 'multiple-choice',
      stem: 'A Y7 pupil draws a pyramid of numbers for "1 cabbage, 200 caterpillars, 5 robins" and shades the bottom bar (cabbage) widest because "the producer is always the biggest level". Which is the strongest correction?',
      tier: 'challenge',
      options: [
        'The pupil is right; the producer bar is always widest.',
        'The pupil is right because cabbages are heavy.',
        'The pyramid bars show counts, not size or position. With 1 cabbage and 200 caterpillars, the caterpillar bar is wider than the cabbage bar.',
        'Pyramids of numbers do not exist.',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'efl-mis-pyramid-bottom-largest',
      hint: 'Pyramid of NUMBERS: width matches count, not size.',
    },
    {
      id: 'efl-q21',
      type: 'multiple-choice',
      stem: 'A Y7 pupil writes that "after a fox eats a rabbit, energy in the fox\'s droppings cycles back up to the grass and feeds the next rabbit". Which is the strongest correction?',
      tier: 'challenge',
      options: [
        'Decomposers DO release some carbon and minerals from droppings back into the soil for plants to reuse, but the ENERGY itself is lost as heat as decomposers work and cannot be reused by the chain.',
        'The pupil is right; ecosystems perfectly recycle energy.',
        'The pupil is right but only for very small animals.',
        'Energy is recycled, but only when the Sun is out.',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'efl-mis-decomposers-vanish',
    },
    {
      id: 'efl-q22',
      type: 'free-text',
      stem: 'A Y7 GCSE-stretch question asks how much of an oak tree\'s energy reaches the sparrowhawk at the top of a 4-link chain. Explain in two sentences why a Y7 answer should describe energy loss qualitatively rather than calculating a percentage.',
      tier: 'challenge',
      sampleAnswer:
        'At Year 7 we describe energy lost as heat, movement, waste, and undigested parts at each step, without putting a percentage on the loss. Numerical efficiency arithmetic (such as the 10% rule) is GCSE work, and using it now would hide the real reasons energy is lost rather than name them.',
      keywords: ['heat', 'movement', 'waste', 'qualitative', 'GCSE'],
      xpValue: 25,
      misconceptionId: 'efl-mis-ten-percent-rule',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Biology Foundation tier (8461/2F) Report on the Examination, June 2018, Question 6 (food chains and energy): "Several candidates wrote that energy passes back down the food chain through droppings or decomposition, missing the one-way flow of energy." https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2018/june/AQA-84612F-WRE-2018.PDF
    {
      id: 'efl-mis-energy-flows-back',
      description:
        'Energy flows in both directions along a food chain because droppings and dead bodies return to lower levels.',
      triggerAnswer: 'energy-flows-back',
      correction:
        'Actually, energy flows ONE way: food to eater. Some carbon and minerals can be recycled by decomposers, but the energy itself is lost as heat and cannot be reused by the chain.',
      reExplanation:
        'Picture energy as one-time fuel. The caterpillar burns most of it for movement and warmth; that heat warms the air and never comes back. Decomposers break droppings down for nutrients, but they too release the remaining energy as heat. The chain runs forward only.',
    },
    // Source: Edexcel GCSE Biology (1BI0) Topic 9 (SB9) "Ecosystems and material cycles" examiner report 2019, comments on Question 5 (energy): "Many candidates assumed all energy in the producer is transferred to the consumer, ignoring losses to respiration, movement, and undigested matter." https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.html
    {
      id: 'efl-mis-no-energy-loss',
      description:
        'All the energy in the producer is passed on to the next level of the chain.',
      triggerAnswer: 'no-energy-loss',
      correction:
        'In fact, most of the energy is lost at each step. Heat from respiration, movement, waste, and undigested parts all carry energy away before it reaches the next level.',
      reExplanation:
        'Imagine a leaky bucket passed up a chain. Each animal pours its share but loses most along the way. The bucket reaching the top holds far less than the leaf started with. That is why chains run out of energy after a few links.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.200 Common mistake: "Pupils sometimes apply the 10% rule numerically at KS3, calculating energy passed up at exactly 10% per level, when KS3 expects qualitative description only." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'efl-mis-ten-percent-rule',
      description:
        'Each level of a food chain keeps exactly 10% of the energy from the level below, so we can calculate energy at every step.',
      triggerAnswer: 'ten-percent-rule',
      correction:
        'In fact, the 10% figure is a GCSE rule of thumb. Year 7 describes energy loss qualitatively (heat, movement, waste, undigested parts) without putting a percentage on it.',
      reExplanation:
        'At Y7 the right answer to "how much energy is lost?" is in words: "most of it, as heat, movement, and waste". Save the numbers for Y10 / 11 GCSE work, where the 10% rule has its proper place. At KS3, percentages just hide the real reasons.',
    },
    // Source: AQA GCSE Biology specification 8461, section 4.7.2.2 Pyramids of biomass: pyramids of numbers vs pyramids of biomass are introduced together at GCSE; KS3 stops at numbers. Pupils sometimes assume the producer level always has the largest count, missing one-tree-many-caterpillars chains. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'efl-mis-pyramid-bottom-largest',
      description:
        'In a pyramid of numbers, the bottom bar (producer) is always the widest.',
      triggerAnswer: 'pyramid-bottom-widest',
      correction:
        'Actually, in a pyramid of NUMBERS the bar widths show counts, not sizes. One huge oak tree feeds many small caterpillars, so the producer bar can be narrower than the primary consumer bar above it.',
      reExplanation:
        'Test it on the oak chain: 1 oak, 5000 caterpillars. The oak count is 1 and the caterpillar count is 5000, so the caterpillar bar is much wider. The pyramid of numbers can look "upside down" at the bottom. A pyramid of BIOMASS (where mass matters, GCSE work) usually does have the widest bar at the producer; that is a different chart.',
    },
    // Source: BBC Bitesize KS3 Biology, "Energy in food chains" topic page (Ecosystems sub-section): "Some pupils believe food chains can be any length, missing that energy loss at each step limits chains to about four or five links." https://www.bbc.co.uk/bitesize/topics/zxhhvcw
    {
      id: 'efl-mis-chain-length-no-limit',
      description:
        'Food chains can be any length, including 8 or 10 links.',
      triggerAnswer: 'no-chain-limit',
      correction:
        'In fact, energy loss at each step limits real chains to about 4 or 5 links. After that, there is rarely enough energy left to support another animal.',
      reExplanation:
        'Stack the losses: at each step, most of the energy in the food is lost (heat, movement, waste, undigested parts). After 4 or 5 stacks the energy left is tiny, far too little for a sixth predator to live on. Real chains end where the energy runs out.',
    },
    // Source: AQA GCSE Biology specification 8461, sections 4.7.2.1 and 4.7.2.2: pyramids of biomass are explicitly placed at GCSE Foundation tier, after pyramids of numbers. Pupils who hear "biomass" at Y7 often try to draw it before they have the data. https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification
    {
      id: 'efl-mis-biomass-at-y7',
      description:
        'Pyramids of biomass and the 10% rule are Year 7 work.',
      triggerAnswer: 'biomass-at-y7',
      correction:
        'Actually, pyramids of biomass and the 10% rule are GCSE work. At Year 7 we draw pyramids of NUMBERS only and describe energy loss qualitatively.',
      reExplanation:
        'Year 7 has two tools: count organisms (pyramid of numbers) and describe losses in words. Year 10 / 11 picks up biomass weighing and the 10% rule. Trying both at once at Y7 mixes ideas before the foundations are firm.',
    },
    // Source: CGP KS3 Science Complete Study and Practice (Higher), 2014 edition, p.201 Common mistake: "Students sometimes leave decomposers out of energy descriptions entirely, treating waste and dead bodies as if their energy simply vanishes." https://www.cgpbooks.co.uk/secondary-books/ks3/science/sht43-ks3-science-complete-study-practice
    {
      id: 'efl-mis-decomposers-vanish',
      description:
        'Energy in droppings and dead bodies just vanishes from the ecosystem.',
      triggerAnswer: 'energy-vanishes',
      correction:
        'In fact, decomposers (bacteria and fungi) break down droppings and dead bodies, releasing the remaining energy as heat. The energy still leaves the chain; it does not return to the producers as usable energy.',
      reExplanation:
        'Energy never disappears, but it does change to forms the chain cannot reuse. Decomposers warm up the compost heap as they work; that heat is the lost energy leaving the system. Some of the carbon and minerals are recycled to producers; the energy is not.',
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

export const ecosystemsZoneNodes: SkillNode[] = [foodChains, foodWebs, energyFlow]

export const ecosystemsZone: Zone = {
  id: 'biology-ecosystems',
  name: 'Ecosystems',
  realm: 'vitalia',
  nodeIds: [foodChains.id, foodWebs.id, energyFlow.id],
}
