import type { SkillNode } from '@/types/content'

export const magneticSeparation: SkillNode = {
  id: 'chemistry-separating-magnetic',
  title: 'Magnetic Separation',
  description:
    'Use a magnet to remove a ferromagnetic solid (such as iron filings or steel pieces) from a non-magnetic solid mixture. Decide when magnetic separation is the right choice, identify which materials respond to a magnet, and explain why the separation is a physical change rather than a chemical one.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'Magnetic separation uses a magnet to remove magnetic materials (such as iron powder) from a non-magnetic mixture; choosing when magnetic separation is the most efficient method.',
    awardingBodies: {
      aqa: '4.10.1 Separating mixtures; use of magnetism to separate a magnetic material from a mixture (8462)',
      edexcel:
        'Topic 1.42 Mixtures; magnetic separation of iron filings from non-magnetic solids (1CH0)',
      ocr: 'C2.1c Separate a magnetic metal from a non-magnetic solid mixture using a magnet (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-mag-scene-bench',
      title: 'Iron Filings and Sand on the Lab Bench',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a bar magnet pulls iron filings out of a mixture of iron and sand on the lab bench.',
      data: {
        viewBox: '0 0 320 200',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200"><rect x="0" y="0" width="320" height="200" fill="#FEF3C7"/><rect x="0" y="160" width="320" height="40" fill="#D6D3D1"/><g><ellipse cx="120" cy="160" rx="80" ry="10" fill="#FCD34D" stroke="#92400E" stroke-width="0.8"/><g fill="#92400E"><circle cx="80" cy="158" r="2"/><circle cx="100" cy="161" r="2"/><circle cx="120" cy="159" r="2"/><circle cx="140" cy="161" r="2"/><circle cx="160" cy="158" r="2"/><circle cx="90" cy="163" r="2"/><circle cx="110" cy="160" r="2"/><circle cx="130" cy="163" r="2"/><circle cx="150" cy="160" r="2"/></g><g fill="#1F2937"><rect x="95" y="155" width="2" height="2"/><rect x="115" y="156" width="2" height="2"/><rect x="135" y="155" width="2" height="2"/><rect x="105" y="158" width="2" height="2"/><rect x="125" y="158" width="2" height="2"/><rect x="145" y="155" width="2" height="2"/></g><text x="120" y="180" text-anchor="middle" font-size="8" fill="#7C2D12">iron filings mixed with sand</text></g><g><rect x="230" y="60" width="60" height="20" fill="#DC2626" stroke="#1F2937" stroke-width="0.8"/><rect x="230" y="60" width="30" height="20" fill="#1E40AF"/><text x="245" y="74" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">N</text><text x="275" y="74" text-anchor="middle" font-size="8" fill="#FFFFFF" font-weight="600">S</text><text x="260" y="55" text-anchor="middle" font-size="8" fill="#1F2937">bar magnet</text></g><g fill="#1F2937"><rect x="220" y="82" width="2" height="2"/><rect x="215" y="90" width="2" height="2"/><rect x="225" y="95" width="2" height="2"/><rect x="218" y="100" width="2" height="2"/><rect x="222" y="108" width="2" height="2"/><rect x="216" y="115" width="2" height="2"/></g><g stroke="#1E40AF" stroke-width="0.6" fill="none" opacity="0.5"><path d="M 220 82 Q 200 100 175 130"/><path d="M 215 90 Q 195 110 170 135"/></g><text x="200" y="130" font-size="8" fill="#1E40AF">filings pulled towards magnet</text></g></svg>',
        hotspots: [
          {
            id: 'csm-mag-h-mix',
            x: 38,
            y: 80,
            label: 'Iron filings mixed with sand',
            description:
              'A mixture of grey iron filings and yellow sand. Iron is ferromagnetic, sand (silicon dioxide) is not, so a magnet can pull the iron away.',
          },
          {
            id: 'csm-mag-h-magnet',
            x: 80,
            y: 35,
            label: 'Bar magnet',
            description:
              'A permanent magnet with a north and south pole. Hold it just above the mixture and the iron filings jump up onto it.',
          },
          {
            id: 'csm-mag-h-pull',
            x: 65,
            y: 60,
            label: 'Iron pulled towards the magnet',
            description:
              'The magnetic force acts at a distance on the ferromagnetic iron. Sand grains feel no force and stay on the bench.',
          },
          {
            id: 'csm-mag-h-leftover',
            x: 38,
            y: 92,
            label: 'Sand left behind',
            description:
              'Once the iron has been lifted away the bench holds only sand. The two solids have been separated by a physical method.',
          },
        ],
      },
    },
    {
      id: 'csm-mag-scene-mrf',
      title: 'Overhead Electromagnet at a Council Recycling Plant',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how a UK council Materials Recovery Facility uses an overhead electromagnet to pull steel cans off a moving conveyor belt.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#E0F2FE"/><g><rect x="20" y="140" width="280" height="20" fill="#475569" stroke="#1F2937" stroke-width="0.8"/><circle cx="30" cy="150" r="10" fill="#94A3B8" stroke="#1F2937" stroke-width="0.8"/><circle cx="290" cy="150" r="10" fill="#94A3B8" stroke="#1F2937" stroke-width="0.8"/><text x="160" y="175" text-anchor="middle" font-size="8" fill="#1E3A8A">conveyor belt: mixed recycling moves left to right</text></g><g fill="#22C55E"><rect x="40" y="130" width="12" height="8" rx="1"/><rect x="65" y="132" width="10" height="6" rx="1"/></g><g fill="#A16207"><rect x="90" y="131" width="14" height="7" rx="1"/></g><g fill="#9CA3AF" stroke="#1F2937" stroke-width="0.4"><rect x="55" y="128" width="8" height="10" rx="1"/><rect x="115" y="128" width="8" height="10" rx="1"/></g><g fill="#22C55E"><rect x="200" y="130" width="12" height="8" rx="1"/><rect x="225" y="131" width="10" height="7" rx="1"/></g><g fill="#A16207"><rect x="250" y="132" width="14" height="6" rx="1"/></g><g><rect x="140" y="40" width="80" height="30" rx="4" fill="#FACC15" stroke="#7C2D12" stroke-width="1"/><text x="180" y="58" text-anchor="middle" font-size="8" fill="#7C2D12" font-weight="600">ELECTROMAGNET</text><line x1="155" y1="70" x2="155" y2="90" stroke="#1F2937" stroke-width="1"/><line x1="205" y1="70" x2="205" y2="90" stroke="#1F2937" stroke-width="1"/><rect x="150" y="90" width="60" height="6" fill="#475569"/></g><g fill="#9CA3AF" stroke="#1F2937" stroke-width="0.4"><rect x="160" y="100" width="8" height="10" rx="1" transform="rotate(-15 164 105)"/><rect x="190" y="103" width="8" height="10" rx="1" transform="rotate(10 194 108)"/></g><g><rect x="240" y="195" width="60" height="20" fill="#FECACA" stroke="#7C2D12" stroke-width="0.8"/><text x="270" y="208" text-anchor="middle" font-size="7" fill="#7C2D12">non magnetic bin</text></g><g><rect x="240" y="80" width="60" height="20" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="0.8"/><text x="270" y="93" text-anchor="middle" font-size="7" fill="#1E3A8A">steel can bin</text></g></svg>',
        hotspots: [
          {
            id: 'csm-mag-h-belt',
            x: 50,
            y: 70,
            label: 'Mixed recycling on the belt',
            description:
              'Plastic bottles, drink cartons, aluminium cans and steel cans all move along the belt together at a UK council Materials Recovery Facility.',
          },
          {
            id: 'csm-mag-h-em',
            x: 56,
            y: 25,
            label: 'Overhead electromagnet',
            description:
              'A large coil of wire carrying an electric current. While the current flows it acts like a strong magnet and can be switched off later to drop the catch.',
          },
          {
            id: 'csm-mag-h-pickup',
            x: 56,
            y: 50,
            label: 'Steel cans lifted off the belt',
            description:
              'Steel cans contain iron, which is ferromagnetic, so the electromagnet pulls them upwards. Aluminium drink cans are not attracted and stay on the belt.',
          },
          {
            id: 'csm-mag-h-steelbin',
            x: 84,
            y: 41,
            label: 'Steel can bin',
            description:
              'When the belt has carried the magnet over this bin, the current is switched off. The cans lose their attraction and drop down ready to be recycled.',
          },
          {
            id: 'csm-mag-h-nonmagbin',
            x: 84,
            y: 95,
            label: 'Non magnetic bin',
            description:
              'Plastics and aluminium cans were never attracted to the magnet, so they continue along the belt and fall off the end into this bin.',
          },
        ],
      },
    },
    {
      id: 'csm-mag-scene-which',
      title: 'Which Materials Are Attracted by a Magnet?',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see which lab samples a magnet picks up and which it leaves alone.',
      data: {
        viewBox: '0 0 320 220',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220"><rect x="0" y="0" width="320" height="220" fill="#F8FAFC"/><g><rect x="15" y="20" width="135" height="90" rx="4" fill="#BBF7D0" stroke="#14532D" stroke-width="1"/><text x="82" y="35" text-anchor="middle" font-size="9" font-weight="600" fill="#14532D">ATTRACTED</text><text x="82" y="50" text-anchor="middle" font-size="8" fill="#14532D">iron, steel (most grades)</text><text x="82" y="62" text-anchor="middle" font-size="8" fill="#14532D">nickel, cobalt</text><text x="82" y="78" text-anchor="middle" font-size="8" fill="#14532D">magnetite (Fe3O4)</text><text x="82" y="95" text-anchor="middle" font-size="7" fill="#14532D">these are ferromagnetic</text></g><g><rect x="170" y="20" width="135" height="90" rx="4" fill="#FECACA" stroke="#7C2D12" stroke-width="1"/><text x="237" y="35" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">NOT ATTRACTED</text><text x="237" y="50" text-anchor="middle" font-size="8" fill="#7C2D12">aluminium, copper</text><text x="237" y="62" text-anchor="middle" font-size="8" fill="#7C2D12">gold, brass, lead</text><text x="237" y="78" text-anchor="middle" font-size="8" fill="#7C2D12">sand, plastic, wood, salt</text><text x="237" y="95" text-anchor="middle" font-size="7" fill="#7C2D12">most metals and non metals</text></g><g><rect x="15" y="130" width="290" height="80" rx="4" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/><text x="160" y="148" text-anchor="middle" font-size="9" font-weight="600" fill="#7C2D12">Watch out: stainless steel</text><text x="160" y="165" text-anchor="middle" font-size="8" fill="#7C2D12">Austenitic grades (304, 316) used in cutlery and sinks are NOT magnetic.</text><text x="160" y="178" text-anchor="middle" font-size="8" fill="#7C2D12">Ferritic grades (430) used in some appliance panels ARE magnetic.</text><text x="160" y="195" text-anchor="middle" font-size="8" fill="#7C2D12">Always test with a magnet before sorting.</text></g></svg>',
        hotspots: [
          {
            id: 'csm-mag-h-ferro',
            x: 26,
            y: 30,
            label: 'Ferromagnetic materials',
            description:
              'Iron, nickel, cobalt and their alloys (including most grades of steel) feel a strong attraction to a magnet. Magnetite (an iron oxide) is also strongly magnetic.',
          },
          {
            id: 'csm-mag-h-nonmag',
            x: 74,
            y: 30,
            label: 'Not attracted',
            description:
              'Aluminium, copper, gold, brass, lead are all metals but feel no force from a magnet. Non metals such as sand, plastic, wood and salt are also unaffected.',
          },
          {
            id: 'csm-mag-h-stainless',
            x: 50,
            y: 75,
            label: 'Stainless steel: depends on the grade',
            description:
              'Some kitchen stainless steel is non magnetic (austenitic grades). Other appliance stainless steel is magnetic (ferritic grade). Test each piece with a magnet.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-mag-worked-1',
      title: 'Separating iron filings from sand in a lab demo',
      steps: [
        {
          explanation:
            'Aisha has a watch glass holding 25 g of iron filings stirred into 55 g of clean dry sand. The two solids are mixed together. She wants the iron back as a clean pile.',
        },
        {
          explanation:
            'Step 1: choose the right method. Iron is ferromagnetic and sand is not, so a magnet will act on the iron filings but not on the sand. Magnetic separation is the best fit.',
        },
        {
          explanation:
            'Step 2: cover the magnet in a thin sheet of paper or cling film. This stops the iron sticking permanently to the magnet and lets her shake it off cleanly later.',
        },
        {
          explanation:
            'Step 3: hold the wrapped magnet just above the mixture and move it slowly across the surface. The iron filings leap up and stick to the paper covering. The sand stays on the watch glass.',
          maths: 'iron pulled up; sand stays put',
        },
        {
          explanation:
            'Step 4: lift the magnet over an empty dish and slide the paper away. The iron filings drop into the dish. With a 100 percent efficient pickup, the recovered mass is 25 g, the same as the iron in the original mixture.',
        },
      ],
    },
    {
      id: 'csm-mag-worked-2',
      title: 'Scrap car pile at a Sheffield wreckers yard',
      steps: [
        {
          explanation:
            'Question: a wreckers yard near Sheffield piles up 1500 kg of mixed scrap from old cars. The pile contains steel body panels, aluminium engine parts and copper wiring. A giant overhead electromagnet sweeps over the pile and lifts 1200 kg of metal away. What is the mass of the metal left on the ground, and what kind of metals must it be?',
        },
        {
          explanation:
            'Total mass before the magnet is 1500 kg. The electromagnet pulled up 1200 kg. The mass left on the ground is 1500 minus 1200, which equals 300 kg.',
          maths: '1500 - 1200 = 300 kg',
        },
        {
          explanation:
            'The electromagnet only attracts ferromagnetic metals, so the 1200 kg that lifted up must be the steel body panels (steel contains iron).',
        },
        {
          explanation:
            'The 300 kg left behind feels no force from the magnet, so it must be the non magnetic metals such as the aluminium engine parts and the copper wiring.',
        },
        {
          explanation:
            'So magnetic separation has split the pile into two heaps: a 1200 kg pile of steel (now hanging from the magnet) and a 300 kg pile of aluminium and copper (still on the ground). No chemicals were added; the metals themselves were not changed; this is a physical separation.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'csm-mag-q1',
      type: 'multiple-choice',
      stem: 'Which method should you use to remove iron filings from a mixture of iron filings and dry sand on a watch glass?',
      tier: 'core',
      options: ['Filtration', 'Evaporation', 'Magnetic separation', 'Stirring'],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-mag-q2',
      type: 'multiple-choice',
      stem: 'Which of these is NOT attracted to a magnet?',
      tier: 'core',
      options: ['Iron', 'Nickel', 'Cobalt', 'Aluminium'],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'csm-mag-mis-all-metals',
    },
    {
      id: 'csm-mag-q3',
      type: 'numeric-entry',
      stem: 'A school technician mixes 25 g of iron filings into 55 g of dry sand on a watch glass for a Year 7 demo. He waves a strong bar magnet over the mixture and lifts 100 percent of the iron. What is the mass of iron, in grams, he should expect to collect on the magnet?',
      tier: 'core',
      correctAnswer: 25,
      unit: 'g',
      xpValue: 10,
      hint: 'Magnetic separation does not change the mass of the iron; all 25 g of iron filings come up onto the magnet.',
    },
    {
      id: 'csm-mag-q4',
      type: 'multiple-choice',
      stem: 'A pupil sweeps a magnet over a mixture of iron filings and sulfur powder on a watch glass. What does she see?',
      tier: 'core',
      options: [
        'The whole mixture sticks to the magnet',
        'Only the sulfur powder sticks to the magnet',
        'The iron filings stick to the magnet and the sulfur powder stays on the watch glass',
        'Nothing happens because the powder is too fine',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-mag-q5',
      type: 'multiple-choice',
      stem: 'Why is magnetic separation called a physical change rather than a chemical change?',
      tier: 'core',
      options: [
        'Because a new substance is made when the magnet touches the iron',
        'Because the iron and the other solid are not turned into different substances; they are only sorted out from each other',
        'Because a magnet uses electricity to break the iron apart',
        'Because heat is needed to make the separation work',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'csm-mag-mis-chemical-change',
    },
    {
      id: 'csm-mag-q6',
      type: 'numeric-entry',
      stem: 'A pupil weighs a watch glass holding a mixture of iron filings and sand. The total mass of the mixture is 80 g. After sweeping a magnet over the mixture and lifting all the iron away, the mass of sand left on the watch glass is 55 g. What is the mass of iron filings recovered on the magnet, in grams?',
      tier: 'core',
      correctAnswer: 25,
      unit: 'g',
      xpValue: 10,
      hint: 'Mass is conserved. Iron mass plus sand mass equals the total mass of the original mixture.',
    },
    {
      id: 'csm-mag-q7',
      type: 'numeric-entry',
      stem: 'A mixture on a Year 7 lab bench is 40 g of iron filings plus 60 g of sulfur powder. What is the percentage by mass of iron in the mixture?',
      tier: 'core',
      correctAnswer: 40,
      unit: '%',
      xpValue: 10,
      hint: 'Percentage by mass is the mass of iron divided by the total mass of the mixture, times 100.',
    },
    {
      id: 'csm-mag-q8',
      type: 'drag-order',
      stem: 'Place these steps of a magnetic separation in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Sweep the wrapped magnet slowly across the mixture; the iron filings leap up onto it',
        'Cover the bar magnet in a thin sheet of paper so the iron does not stick directly to the magnet',
        'Slide the paper off the magnet over an empty dish so the iron filings drop into the dish',
        'Spread the iron and sand mixture out in a thin layer on a watch glass',
      ],
      correctOrder: [3, 1, 0, 2],
      xpValue: 15,
    },
    {
      id: 'csm-mag-q9',
      type: 'multiple-choice',
      stem: 'At a UK council Materials Recovery Facility, mixed recycling moves along a conveyor belt under an overhead electromagnet. Which item does the electromagnet lift off the belt?',
      tier: 'confident',
      options: [
        'An aluminium drink can',
        'A plastic milk bottle',
        'A steel food can',
        'A glass jar',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-mag-mis-all-metals',
    },
    {
      id: 'csm-mag-q10',
      type: 'multiple-choice',
      stem: 'A pupil claims she can use magnetic separation to take dissolved iron sulfate (FeSO4) out of a beaker of water by holding a magnet against the side of the beaker. Why does this not work in practice?',
      tier: 'confident',
      options: [
        'Magnetic separation is designed for solid mixtures; a magnet does not pull dissolved particles out of a liquid in a school lab',
        'Iron sulfate is too heavy for a magnet',
        'The water blocks the magnetic force completely',
        'Iron sulfate has already turned into a gas in the water',
      ],
      correctIndex: 0,
      xpValue: 15,
      misconceptionId: 'csm-mag-mis-liquids',
    },
    {
      id: 'csm-mag-q11',
      type: 'spot-misconception',
      stem: 'Priya tries to lift iron filings out of a bulky pile of dry sand using a small fridge magnet. Most of the iron stays in the sand. She says: "This proves iron is not magnetic today; otherwise the fridge magnet would have caught all of it."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. Iron has stopped behaving as a magnetic material, which is why most of the filings were left behind.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Iron is still ferromagnetic. The fridge magnet is too weak for its field to reach the filings deep inside the bulky pile. A strong neodymium magnet would pull them out.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-mag-mis-weak-magnet',
    },
    {
      id: 'csm-mag-q12',
      type: 'multiple-choice',
      stem: 'At a Sheffield engineering workshop, a tray holds a mixture of steel screws and aluminium swarf (turnings) from a lathe. Why is magnetic separation a good choice here?',
      tier: 'confident',
      options: [
        'Steel screws contain iron and are attracted by a magnet; aluminium swarf is not. A magnet lifts the screws and leaves the swarf behind',
        'Aluminium is the heavier metal and a magnet always lifts the lighter one',
        'Steel and aluminium both stick to a magnet, but steel sticks more strongly',
        'A magnet melts the aluminium so the steel can be picked out',
      ],
      correctIndex: 0,
      xpValue: 15,
    },
    {
      id: 'csm-mag-q13',
      type: 'spot-misconception',
      stem: 'Daniel says: "I held a magnet against the side of a saucepan of beef stew at home. The magnet stuck on. So all the iron in the stew is now sticking to the inside of the pan, which proves magnetic separation works on liquid food."',
      tier: 'confident',
      statements: [
        {
          text: 'Daniel is right. The magnet stuck on, so all the dissolved iron must be on the inside of the pan, sorted out by magnetic separation.',
          isMisconception: true,
        },
        {
          text: 'Daniel is wrong. The magnet stuck to the steel pan, not to anything inside the stew. Magnetic separation is for solid mixtures; a magnet held against a pan does not pull dissolved iron out of a hot liquid.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-mag-mis-liquids',
    },
    {
      id: 'csm-mag-q14',
      type: 'numeric-entry',
      stem: 'A council Materials Recovery Facility processes 8 tonnes of mixed waste per hour through an overhead electromagnet. 12 percent of the waste by mass is recoverable steel. What mass of steel is recovered per hour, in kilograms? Hint: 1 tonne is 1000 kg.',
      tier: 'confident',
      correctAnswer: 960,
      unit: 'kg',
      xpValue: 15,
      hint: 'Convert 8 tonnes into 8000 kg first, then take 12 percent of that mass.',
    },
    {
      id: 'csm-mag-q15',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a pupil sweeps a magnet across a mixture of iron filings and salt. The iron filings lift onto the magnet. The salt stays on the bench, looking just as it did before. Use ideas about ferromagnetic materials to explain why only the iron moved.',
      tier: 'confident',
      steps: [
        'A magnet only exerts a strong force on ferromagnetic materials, such as iron, nickel, cobalt and their alloys.',
        'Iron filings are tiny pieces of metallic iron, which is ferromagnetic, so each filing feels a strong upward pull from the magnet.',
        null,
        'So the iron is lifted onto the magnet while the salt is left behind on the bench, and the two solids are now separated.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Salt (sodium chloride) is not ferromagnetic. Neither sodium nor chlorine is attracted by an ordinary magnet, so the salt feels no measurable force and stays on the bench.',
      xpValue: 20,
    },
    {
      id: 'csm-mag-q16',
      type: 'free-text',
      stem: 'A council recycling officer says that an overhead electromagnet at a Materials Recovery Facility "sorts the steel cans out without touching them and without changing them". Explain in your own words what she means, using the words ferromagnetic, attracted and physical change.',
      tier: 'confident',
      sampleAnswer:
        'Steel cans contain iron, which is ferromagnetic, so they are attracted to the electromagnet as the belt carries them past. The cans lift up onto the magnet through the air, so the magnet has not had to touch them itself. Aluminium cans and plastic bottles are not ferromagnetic, so they feel no force and stay on the belt. The steel itself has not been turned into a new substance; only its position has changed. This is a physical change, not a chemical reaction.',
      keywords: ['ferromagnetic', 'attracted', 'steel', 'physical', 'electromagnet'],
      xpValue: 20,
      misconceptionId: 'csm-mag-mis-chemical-change',
    },
    {
      id: 'csm-mag-q17',
      type: 'multiple-choice',
      stem: 'A chef in a Sheffield restaurant kitchen uses a magnet to check whether a sink is austenitic stainless steel (304 grade) or ferritic stainless steel (430 grade). The magnet does not stick at all to the sink. What can the chef conclude?',
      tier: 'challenge',
      options: [
        'The sink is ferritic stainless steel (430)',
        'The sink is austenitic stainless steel (304); only ferritic grades of stainless steel are magnetic',
        'The sink is not made of metal',
        'The magnet must be broken because all metals are magnetic',
      ],
      correctIndex: 1,
      xpValue: 25,
      misconceptionId: 'csm-mag-mis-stainless',
    },
    {
      id: 'csm-mag-q18',
      type: 'multiple-choice',
      stem: 'A Year 7 pupil has a 60 g mixture of three solids: 15 g of iron filings, 25 g of salt and 20 g of sand. She wants the dry iron, the dry salt and the dry sand as three separate piles. Which sequence of methods will give her the three piles?',
      tier: 'challenge',
      options: [
        'Filter the whole mixture, then evaporate the filter paper',
        'Pour the mixture into water, evaporate it dry, then use a magnet on the dry crystals',
        'Use a magnet to lift the iron filings, then dissolve the rest in water, then filter to catch the sand, then evaporate the filtrate to recover the salt',
        'Sweep a magnet over the mixture, then pour the rest through filter paper, and the three solids will sort themselves out',
      ],
      correctIndex: 2,
      xpValue: 25,
      misconceptionId: 'csm-mag-mis-purifies',
    },
    {
      id: 'csm-mag-q19',
      type: 'numeric-entry',
      stem: 'A wreckers yard near Sheffield piles up 1500 kg of mixed scrap car parts. A giant overhead electromagnet sweeps the pile and lifts 1200 kg of steel away. What mass, in kilograms, of non magnetic metal is left on the ground?',
      tier: 'challenge',
      correctAnswer: 300,
      unit: 'kg',
      xpValue: 25,
      hint: 'Mass is conserved. Non magnetic mass equals total mass minus the steel mass that the magnet pulled up.',
    },
    {
      id: 'csm-mag-q20',
      type: 'multiple-choice',
      stem: 'A pupil holds a strong neodymium magnet very close to a small heap of breakfast cereal flakes. A few tiny dark specks lift off the flakes and stick to the magnet. He is surprised, because cereal does not look metallic. What is the best scientific explanation?',
      tier: 'challenge',
      options: [
        'The neodymium magnet has accidentally turned cereal into iron',
        'Some breakfast cereals are fortified with tiny pieces of metallic iron as an iron supplement. These ferromagnetic specks are attracted by a strong magnet',
        'All food is slightly magnetic because it contains atoms',
        'The magnet has made the cereal grow magnetic by touching it',
      ],
      correctIndex: 1,
      xpValue: 25,
    },
    {
      id: 'csm-mag-q21',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a pupil sweeps a magnet over a 100 g mixture of iron filings, sand and salt and lifts off 15 g of iron filings. She then says she has fully separated the mixture. Use ideas about the limits of magnetic separation to explain why she is wrong about the remaining 85 g.',
      tier: 'challenge',
      steps: [
        'A magnet only removes ferromagnetic materials from a mixture, so it can take the iron filings out but it cannot touch the sand or the salt.',
        'After the magnet has lifted the 15 g of iron filings, the 85 g left behind is still a mixture, made of sand and salt grains together.',
        null,
        'So magnetic separation has removed one component but the remaining solid is still a mixture and needs another step (such as dissolving in water and then filtering) to finish the job.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Magnetic separation only removes the magnetic component; it does not purify whatever is left. The 85 g remaining is the sand and the salt mixed together, not a single pure substance.',
      xpValue: 25,
      misconceptionId: 'csm-mag-mis-purifies',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Chemistry examiner report June 2019 (8462/1F) and Best Evidence Science Teaching (BEST) KS3 diagnostic on magnetism: Year 7 pupils routinely tick "all metals" as magnetic, including aluminium and copper.
    {
      id: 'csm-mag-mis-all-metals',
      description:
        'All metals are attracted to a magnet, so magnetic separation works on every metal in a mixture.',
      triggerAnswer: 'all-metals-magnetic',
      correction:
        'In fact only ferromagnetic metals are strongly attracted. Iron, nickel, cobalt and their alloys (most steels) feel a strong pull; aluminium, copper, gold, brass and lead feel none.',
      reExplanation:
        'Hold a magnet near a 1p coin and a steel paper clip. The clip jumps onto the magnet; the coin (copper plated steel in old coins, mostly copper in modern ones) barely moves. Magnetic separation can sort steel cans from aluminium cans on a recycling belt, but it cannot sort a pile of copper wire from a pile of aluminium wire. Both are non magnetic.',
    },
    // Source: OCR Gateway Chemistry examiner report June 2021 (J248/01) on alloys: candidates assumed any "stainless steel" item is magnetic. The grade-dependent behaviour appears in CGP KS3/GCSE Chemistry common-mistake callouts.
    {
      id: 'csm-mag-mis-stainless',
      description:
        'Stainless steel is always magnetic because it contains iron.',
      triggerAnswer: 'stainless-always-magnetic',
      correction:
        'In fact stainless steel comes in different grades. Austenitic grades (304, 316) used for cutlery and many sinks are NOT magnetic. Ferritic grades (430) used in some appliance panels ARE magnetic.',
      reExplanation:
        'Take a fridge magnet to a kitchen drawer: on a 304 stainless fork it slides off, on a 430 stainless oven panel it grips firmly. So you cannot tell whether something is steel just by waving a magnet near it; the magnet test only sorts ferromagnetic items from non magnetic ones, and some steels fall on each side.',
    },
    // Source: Best Evidence Science Teaching (BEST) KS3 diagnostic on separating mixtures: a recurring slip is that pupils suggest "a magnet on the outside of the beaker" to recover dissolved iron from solution.
    {
      id: 'csm-mag-mis-liquids',
      description:
        'You can use a magnet to pull dissolved iron or iron compounds out of a beaker of liquid.',
      triggerAnswer: 'magnet-on-liquid',
      correction:
        'In fact magnetic separation in a school lab is designed for solid mixtures. A magnet does not pull dissolved particles out of an everyday solution.',
      reExplanation:
        'Dissolved iron compounds like iron sulfate (FeSO4) are broken up into separate ions spread between the water particles. The pull of a fridge or bar magnet on those scattered ions is far too weak to drag them through the water. To recover dissolved iron compounds you would use chemistry methods such as precipitation, not a magnet against the side of the beaker.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F) and CGP KS3 Chemistry common-mistake callouts: a "stronger magnet just looks cooler, weak ones still work" assumption appears in pupil explanations of incomplete iron pickup.
    {
      id: 'csm-mag-mis-weak-magnet',
      description:
        'Any magnet works equally well; a weak fridge magnet pulls out iron filings just as well as a strong neodymium magnet.',
      triggerAnswer: 'weak-magnet-fine',
      correction:
        'In fact the efficiency of magnetic separation depends on field strength. A weak magnet cannot reach iron filings buried deep inside a bulky pile.',
      reExplanation:
        'Try a fridge magnet on iron filings buried 2 cm deep in a sand pile and most filings stay where they are. A strong neodymium magnet reaches the same filings and lifts them straight out. Industrial scrap yards and recycling plants use very strong electromagnets for the same reason: they need the field to extend far enough to catch every ferromagnetic piece.',
    },
    // Source: OCR Gateway Chemistry examiner report June 2022 (J248/01) on separating multi-component mixtures: candidates often wrote that "the magnet purifies the rest of the mixture", treating magnetic separation as a one-step clean up.
    {
      id: 'csm-mag-mis-purifies',
      description:
        'Magnetic separation purifies a mixture by removing the magnetic part and leaving a pure substance behind.',
      triggerAnswer: 'magnet-purifies',
      correction:
        'In fact a magnet only removes the magnetic component. Whatever is left can still be a mixture and may need further methods such as dissolving and filtering.',
      reExplanation:
        'Take a mixture of iron filings, sand and salt. A magnet lifts the iron filings off and leaves sand and salt mixed together on the bench. To finish the job you would dissolve the leftover in water (the salt dissolves, the sand does not), filter to catch the sand, then evaporate the filtrate to recover the salt. Magnetic separation is one step in a chain, not a one-shot purifier.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F) and RSC Education "Teaching physical and chemical changes" CPD article: pupils sometimes class magnetic separation as a chemical change because "the magnet does something to the iron".
    {
      id: 'csm-mag-mis-chemical-change',
      description:
        'Magnetic separation is a chemical change because the magnet reacts with the iron and changes it into something new.',
      triggerAnswer: 'chemical-change',
      correction:
        'In fact magnetic separation is a physical change. No new substance is made; the iron is just moved from one place to another.',
      reExplanation:
        'Weigh the iron filings before they go onto the magnet and weigh them again after they have been shaken off. The mass is the same and the filings look the same, smell the same and behave the same in any chemical test. Compare that with burning iron wool, which combines with oxygen to make iron oxide (a new dark powder). Magnetic separation does nothing like that; it only relocates the iron.',
    },
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL diagnostic question set on properties of iron compounds: pupils often say "any iron compound will be attracted to a magnet" because they group all "iron things" together.
    {
      id: 'csm-mag-mis-iron-compounds',
      description:
        'All iron compounds are strongly magnetic because they contain iron atoms.',
      triggerAnswer: 'all-iron-compounds-magnetic',
      correction:
        'In fact only metallic iron and certain iron oxides (notably magnetite, Fe3O4) are strongly magnetic. Iron sulfate (FeSO4) and hematite (Fe2O3) are only weakly magnetic or not at all in a school setting.',
      reExplanation:
        'Hold a bar magnet against a glass of dissolved iron sulfate (a pale green solution): nothing visible happens. Hold the same magnet against a piece of magnetite rock and it grips firmly. So whether an iron containing substance acts magnetic depends on how its iron atoms are arranged, not just on whether iron is present.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
