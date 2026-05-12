import type { SkillNode } from '@/types/content'

// Scene 1: contrasts a rapid Bunsen evaporation (small crusty crystals)
// with a slow windowsill Petri dish evaporation (large well-formed crystals).
const SLOW_VS_RAPID_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
    <rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/>
    <text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">Two routes to recover salt from a solution</text>

    <!-- Left: rapid evaporation over a Bunsen -->
    <g>
      <text x="80" y="38" text-anchor="middle" font-size="10" font-weight="600" fill="#7C2D12">Rapid: Bunsen flame</text>
      <path d="M 50 80 L 110 80 L 115 120 L 45 120 z" fill="none" stroke="#475569" stroke-width="1.5"/>
      <path d="M 55 90 L 105 90 L 108 115 L 52 115 z" fill="#DBEAFE" opacity="0.6"/>
      <g fill="#FFFFFF" stroke="#475569" stroke-width="0.4">
        <rect x="58" y="108" width="3" height="5"/>
        <rect x="68" y="110" width="3" height="3"/>
        <rect x="78" y="108" width="3" height="4"/>
        <rect x="88" y="111" width="3" height="3"/>
        <rect x="96" y="109" width="3" height="4"/>
      </g>
      <text x="80" y="135" text-anchor="middle" font-size="8" fill="#7C2D12">small, crusty crystals</text>
      <g stroke="#FB923C" stroke-width="2" fill="none">
        <path d="M 65 160 Q 70 155 65 150 Q 60 145 65 140"/>
        <path d="M 80 160 Q 85 155 80 150 Q 75 145 80 140"/>
        <path d="M 95 160 Q 100 155 95 150 Q 90 145 95 140"/>
      </g>
      <text x="80" y="175" text-anchor="middle" font-size="8" fill="#7C2D12">strong heat</text>
      <text x="80" y="190" text-anchor="middle" font-size="8" fill="#7C2D12">water boils off rapidly</text>
      <text x="80" y="205" text-anchor="middle" font-size="8" fill="#7C2D12">in minutes</text>
    </g>

    <!-- Right: slow evaporation in a Petri dish on a windowsill -->
    <g>
      <text x="240" y="38" text-anchor="middle" font-size="10" font-weight="600" fill="#14532D">Slow: Petri dish on windowsill</text>
      <ellipse cx="240" cy="100" rx="55" ry="10" fill="#DBEAFE" stroke="#1E3A8A" stroke-width="1.2"/>
      <path d="M 185 100 L 185 110 L 295 110 L 295 100" fill="none" stroke="#1E3A8A" stroke-width="1.2"/>
      <g fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.6">
        <rect x="210" y="96" width="7" height="7"/>
        <rect x="225" y="97" width="8" height="7"/>
        <rect x="245" y="96" width="9" height="8"/>
        <rect x="265" y="97" width="7" height="7"/>
      </g>
      <text x="240" y="130" text-anchor="middle" font-size="8" fill="#14532D">large, well-formed</text>
      <text x="240" y="141" text-anchor="middle" font-size="8" fill="#14532D">cubic crystals</text>
      <text x="240" y="170" text-anchor="middle" font-size="8" fill="#14532D">gentle warmth only</text>
      <text x="240" y="185" text-anchor="middle" font-size="8" fill="#14532D">water leaves over</text>
      <text x="240" y="200" text-anchor="middle" font-size="8" fill="#14532D">days or weeks</text>
    </g>
  </svg>
`

// Scene 2: Maldon salt pans in Essex showing solar slow evaporation.
const MALDON_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
    <rect x="0" y="0" width="320" height="200" fill="#E0F2FE"/>
    <text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">Maldon salt pans, Essex coast</text>

    <!-- Sun -->
    <circle cx="270" cy="40" r="14" fill="#FCD34D" stroke="#B45309"/>
    <g stroke="#B45309" stroke-width="1.2">
      <line x1="270" y1="20" x2="270" y2="14"/>
      <line x1="270" y1="60" x2="270" y2="66"/>
      <line x1="250" y1="40" x2="244" y2="40"/>
      <line x1="290" y1="40" x2="296" y2="40"/>
    </g>

    <!-- Sea behind -->
    <rect x="0" y="55" width="320" height="20" fill="#3B82F6" opacity="0.45"/>
    <text x="40" y="68" font-size="8" fill="#1E3A8A">North Sea</text>

    <!-- Shallow saltpan in foreground -->
    <rect x="40" y="100" width="240" height="55" fill="#BFDBFE" stroke="#1E3A8A" stroke-width="1.5"/>
    <rect x="42" y="115" width="236" height="38" fill="#DBEAFE" opacity="0.85"/>

    <!-- Pyramid crystals on the surface -->
    <g fill="#FFFFFF" stroke="#1E3A8A" stroke-width="0.8">
      <polygon points="70,135 80,120 90,135"/>
      <polygon points="110,138 122,122 134,138"/>
      <polygon points="155,134 165,118 175,134"/>
      <polygon points="195,138 207,121 219,138"/>
      <polygon points="235,135 246,120 257,135"/>
    </g>

    <!-- Vapour rising slowly -->
    <g stroke="#94A3B8" stroke-width="1.5" fill="none" opacity="0.55">
      <path d="M 80 100 Q 75 85 85 75"/>
      <path d="M 165 100 Q 170 85 160 75"/>
      <path d="M 246 100 Q 250 85 240 75"/>
    </g>

    <text x="160" y="175" text-anchor="middle" font-size="9" fill="#1E3A8A">Sun and wind evaporate the seawater slowly</text>
    <text x="160" y="190" text-anchor="middle" font-size="9" fill="#1E3A8A">over days, leaving large pyramid salt crystals</text>
  </svg>
`

// Scene 3: side-by-side table of slow vs rapid evaporation outcomes.
const COMPARE_TABLE_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220">
    <rect x="0" y="0" width="320" height="220" fill="#FEF3C7"/>
    <text x="160" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1E3A8A">Slow evaporation vs heating to dryness</text>

    <!-- Headers -->
    <rect x="20" y="30" width="140" height="22" fill="#BBF7D0" stroke="#14532D"/>
    <text x="90" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#14532D">Slow evaporation</text>
    <rect x="170" y="30" width="140" height="22" fill="#FECACA" stroke="#7C2D12"/>
    <text x="240" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#7C2D12">Rapid heating</text>

    <!-- Row: time -->
    <rect x="20" y="55" width="140" height="26" fill="none" stroke="currentColor"/>
    <text x="90" y="72" text-anchor="middle" font-size="9" fill="#1E3A8A">days or weeks</text>
    <rect x="170" y="55" width="140" height="26" fill="none" stroke="currentColor"/>
    <text x="240" y="72" text-anchor="middle" font-size="9" fill="#1E3A8A">minutes</text>

    <!-- Row: crystal size -->
    <rect x="20" y="83" width="140" height="34" fill="none" stroke="currentColor"/>
    <text x="90" y="98" text-anchor="middle" font-size="9" fill="#1E3A8A">large, well-formed</text>
    <text x="90" y="110" text-anchor="middle" font-size="9" fill="#1E3A8A">regular crystals</text>
    <rect x="170" y="83" width="140" height="34" fill="none" stroke="currentColor"/>
    <text x="240" y="98" text-anchor="middle" font-size="9" fill="#1E3A8A">small, crusty</text>
    <text x="240" y="110" text-anchor="middle" font-size="9" fill="#1E3A8A">irregular crystals</text>

    <!-- Row: why -->
    <rect x="20" y="119" width="140" height="44" fill="none" stroke="currentColor"/>
    <text x="90" y="133" text-anchor="middle" font-size="8" fill="#1E3A8A">particles have time to</text>
    <text x="90" y="144" text-anchor="middle" font-size="8" fill="#1E3A8A">slot into the lattice</text>
    <text x="90" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">in an ordered pattern</text>
    <rect x="170" y="119" width="140" height="44" fill="none" stroke="currentColor"/>
    <text x="240" y="133" text-anchor="middle" font-size="8" fill="#1E3A8A">particles freeze out</text>
    <text x="240" y="144" text-anchor="middle" font-size="8" fill="#1E3A8A">at random; many tiny</text>
    <text x="240" y="155" text-anchor="middle" font-size="8" fill="#1E3A8A">seeds form at once</text>

    <!-- Row: risk -->
    <rect x="20" y="165" width="140" height="40" fill="#ECFDF5" stroke="currentColor"/>
    <text x="90" y="180" text-anchor="middle" font-size="9" fill="#14532D">gentler on heat-</text>
    <text x="90" y="192" text-anchor="middle" font-size="9" fill="#14532D">sensitive solids</text>
    <rect x="170" y="165" width="140" height="40" fill="#FEF2F2" stroke="currentColor"/>
    <text x="240" y="180" text-anchor="middle" font-size="9" fill="#7C2D12">can decompose or</text>
    <text x="240" y="192" text-anchor="middle" font-size="9" fill="#7C2D12">shatter the solid</text>
  </svg>
`

export const crystallisationEvaporation: SkillNode = {
  id: 'chemistry-separating-crystallisation-evaporation',
  title: 'Crystallisation by Evaporation',
  description:
    'Recover a dissolved solute as well-formed crystals by letting the solvent evaporate slowly, instead of boiling the basin dry. Compare a Petri dish on a windowsill with an evaporating basin over a Bunsen flame, and link the slower route to large, regular crystals using the particle model. Apply the idea to UK contexts: Maldon sea-salt pans, the Cheshire rock-salt industry, sugar beet refining at Wissington, and limescale rings left in a kettle. Reason about mass: how much salt is left when a known mass of solution evaporates to dryness, and why the missing mass is solvent in the air, not lost matter.',
  subject: 'chemistry',
  realm: 'elementia',
  zoneId: 'chemistry-separating-mixtures',
  zoneName: 'Separating Mixtures',
  tier: 'confident',
  prerequisites: ['chemistry-separating-filtration-evaporation'],
  curriculum: {
    ks3Objective:
      'Crystallisation by evaporation: leaving a solution to evaporate slowly until crystals form; advantages over rapid evaporation in recovering large crystals.',
    awardingBodies: {
      aqa: '4.10.1.2 Crystallisation; evaporative crystallisation for obtaining larger crystals (8462)',
      edexcel:
        'Topic 1.43 Crystallisation; slow evaporation versus evaporating basin heating (1CH0)',
      ocr: 'C2.1g Recover crystals by evaporating the solvent (J248 Gateway Chemistry)',
    },
  },
  scenes: [
    {
      id: 'csm-ce-scene-1',
      title: 'Two Routes: Bunsen vs Windowsill',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare evaporating a salt solution rapidly over a Bunsen with leaving the same solution to dry slowly on a windowsill.',
      data: {
        viewBox: '0 0 320 220',
        svg: SLOW_VS_RAPID_SVG,
        hotspots: [
          {
            id: 'csm-ce-h-1',
            x: 25,
            y: 50,
            label: 'Rapid evaporation over a Bunsen',
            description:
              'Strong heat boils the water off in minutes. The salt is left behind, but as a crusty layer of small, uneven crystals.',
          },
          {
            id: 'csm-ce-h-2',
            x: 25,
            y: 78,
            label: 'Small, irregular crystals',
            description:
              'Many tiny crystal seeds form at the same moment because the water leaves so rapidly. The particles have no time to line up neatly.',
          },
          {
            id: 'csm-ce-h-3',
            x: 75,
            y: 50,
            label: 'Slow evaporation on a windowsill',
            description:
              'The Petri dish sits in gentle warmth. Water leaves the surface over days, particle by particle, with no boiling.',
          },
          {
            id: 'csm-ce-h-4',
            x: 75,
            y: 70,
            label: 'Large, well-formed crystals',
            description:
              'Particles have time to slot into the regular lattice pattern as the solution slowly concentrates, so the crystals grow large and orderly.',
          },
        ],
      },
    },
    {
      id: 'csm-ce-scene-2',
      title: 'Maldon Salt Pans: Slow Solar Evaporation',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see how the Maldon Crystal Salt Company in Essex uses solar evaporation to harvest its trademark pyramid crystals.',
      data: {
        viewBox: '0 0 320 200',
        svg: MALDON_SVG,
        hotspots: [
          {
            id: 'csm-ce-h-5',
            x: 50,
            y: 65,
            label: 'Shallow saltpan',
            description:
              'Filtered seawater is pumped into wide, shallow pans on the Essex coast. The shallow depth gives a large surface for water to evaporate from.',
          },
          {
            id: 'csm-ce-h-6',
            x: 84,
            y: 20,
            label: 'Sun and wind',
            description:
              'Solar warmth and coastal wind drive slow surface evaporation. No flames or boiling: the water leaves as vapour, particle by particle.',
          },
          {
            id: 'csm-ce-h-7',
            x: 50,
            y: 65,
            label: 'Pyramid crystals form',
            description:
              'As the brine concentrates, salt particles arrange themselves into the regular crystal lattice and grow into the chunky pyramid shapes Maldon is known for.',
          },
          {
            id: 'csm-ce-h-8',
            x: 12,
            y: 35,
            label: 'Source: the North Sea',
            description:
              'Seawater contains roughly 35 g of dissolved salts in every 1000 g of water. Slow evaporation concentrates the brine until salt crystallises out.',
          },
        ],
      },
    },
    {
      id: 'csm-ce-scene-3',
      title: 'Why Slower Equals Bigger',
      type: 'labelled-diagram',
      instructions:
        'Click each row to compare slow evaporation with rapid heating on a key feature of the recovered crystals.',
      data: {
        viewBox: '0 0 320 220',
        svg: COMPARE_TABLE_SVG,
        hotspots: [
          {
            id: 'csm-ce-h-9',
            x: 50,
            y: 31,
            label: 'Time taken',
            description:
              'Slow evaporation takes days or weeks. Rapid heating in an evaporating basin is over in minutes.',
          },
          {
            id: 'csm-ce-h-10',
            x: 50,
            y: 45,
            label: 'Crystal size and shape',
            description:
              'Slow evaporation gives large, well-formed crystals with regular faces. Rapid heating gives a crusty layer of small, irregular grains.',
          },
          {
            id: 'csm-ce-h-11',
            x: 50,
            y: 64,
            label: 'Why the particle model predicts this',
            description:
              'With slow evaporation, particles arrive at the growing crystal one at a time and slot into the lattice in an ordered way. With rapid heating many seeds form at once and lock in random patterns.',
          },
          {
            id: 'csm-ce-h-12',
            x: 50,
            y: 84,
            label: 'Heat-sensitive solids',
            description:
              'Some salts decompose when boiled dry. Copper sulfate, for example, loses its water of crystallisation and turns white. Slow evaporation avoids this.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'csm-ce-worked-1',
      title: 'Why a Maldon-style saltpan gives bigger crystals than a Bunsen basin',
      steps: [
        {
          explanation:
            'Question: a Year 7 class evaporates two equal samples of saltwater. Sample A is heated over a Bunsen until the basin is dry. Sample B is left in a Petri dish on a sunny windowsill for two weeks. Why are the crystals in sample B so much larger?',
        },
        {
          explanation:
            'In sample A, the Bunsen flame gives lots of energy each second. Water particles at the surface boil away in a rush, and the salt is left as a crusty layer almost all at once.',
          maths: 'rapid: many tiny seeds form together',
        },
        {
          explanation:
            'When many crystal seeds form at the same moment, salt particles attach to whichever seed is closest. They lock in before they can find a regular lattice site, so the result is small and irregular.',
        },
        {
          explanation:
            'In sample B, the windowsill provides only gentle warmth. Water particles leave the surface one at a time, slowly concentrating the brine over days.',
          maths: 'slow: few seeds, particles slot in one by one',
        },
        {
          explanation:
            'Because the solution concentrates so gradually, only a few crystal seeds form. Each new salt particle has time to drift to a seed and slot into the regular cubic lattice before the next particle arrives.',
        },
        {
          explanation:
            'So slow evaporation gives sample B large, well-formed crystals. This is exactly how the Maldon Crystal Salt Company grows its pyramid sea-salt crystals using sun and wind over the Essex saltpans.',
        },
      ],
    },
    {
      id: 'csm-ce-worked-2',
      title: 'How much salt does 250 g of seawater leave behind?',
      steps: [
        {
          explanation:
            'Question: Aisha collects 250 g of seawater from the Essex coast. Seawater holds roughly 35 g of dissolved salts in every 1000 g of water. She leaves the sample in a shallow Petri dish on a windowsill until all the water has evaporated. What mass of salt is left in the dish?',
        },
        {
          explanation:
            'Step 1: find the fraction of seawater that is dissolved salt. 35 g of salt is in every 1000 g of seawater, so the fraction is 35 over 1000, which is 0.035.',
          maths: '35 / 1000 = 0.035',
        },
        {
          explanation:
            'Step 2: apply that fraction to the 250 g sample. 0.035 of 250 g is 8.75 g.',
          maths: '0.035 x 250 = 8.75 g',
        },
        {
          explanation:
            'Step 3: think about where the rest of the mass has gone. The other 241.25 g is water, which has left the dish as water vapour into the room. Mass is conserved overall, not destroyed.',
          maths: '250 - 8.75 = 241.25 g of water vapour',
        },
        {
          explanation:
            'So Aisha will see 8.75 g of dry salt crystals on the Petri dish at the end. Because she used slow evaporation rather than a Bunsen flame, the crystals will be larger and more regular than a quick-heated sample of the same brine.',
        },
      ],
    },
  ],
  questions: [
    // CORE TIER (6 questions)
    {
      id: 'csm-ce-q1',
      type: 'multiple-choice',
      stem: 'Which method gives larger, more regular salt crystals from a salt solution?',
      tier: 'core',
      options: [
        'Heating the solution rapidly to dryness over a Bunsen flame',
        'Leaving the solution to evaporate slowly over several days',
        'Pouring the solution through filter paper',
        'Putting the solution in a freezer',
      ],
      correctIndex: 1,
      xpValue: 10,
      hint: 'Look at scene 1: which side gave the well-formed crystals?',
      misconceptionId: 'csm-ce-mis-faster-bigger',
    },
    {
      id: 'csm-ce-q2',
      type: 'multiple-choice',
      stem: 'During slow crystallisation by evaporation, which part of the salt solution leaves the dish?',
      tier: 'core',
      options: [
        'The solvent (water) leaves as vapour, while the solute (salt) stays behind',
        'The solute (salt) leaves as vapour, while the solvent (water) stays behind',
        'Both the salt and the water leave together',
        'Neither leaves; the dish stays exactly the same',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'csm-ce-mis-evap-removes-solute',
    },
    {
      id: 'csm-ce-q3',
      type: 'multiple-choice',
      stem: 'The Maldon Crystal Salt Company in Essex harvests its famous pyramid crystals from shallow saltpans on the coast. Which method are they using?',
      tier: 'core',
      options: [
        'Filtration',
        'Distillation',
        'Slow evaporation using sun and wind',
        'Chromatography',
      ],
      correctIndex: 2,
      xpValue: 10,
    },
    {
      id: 'csm-ce-q4',
      type: 'numeric-entry',
      stem: 'A Petri dish contains 100 g of salt solution. Seawater is 3.5% salt by mass. If this is a 3.5% salt solution and it is left to evaporate to dryness on a windowsill, what mass of dry salt is left in the dish, in grams?',
      tier: 'core',
      correctAnswer: 3.5,
      unit: 'g',
      tolerance: 0.05,
      xpValue: 10,
      hint: 'A 3.5% solution means 3.5 g of salt is dissolved in every 100 g of solution.',
    },
    {
      id: 'csm-ce-q5',
      type: 'drag-order',
      stem: 'Place these steps for growing large copper sulfate crystals by slow evaporation in the correct order, from start to finish.',
      tier: 'core',
      items: [
        'Pour the warm copper sulfate solution carefully into a shallow crystallising dish.',
        'Wait several days while water slowly leaves the surface as vapour.',
        'Dissolve copper sulfate in warm water until no more will dissolve.',
        'Lift the large blue crystals out of the dish once enough water has gone.',
      ],
      correctOrder: [2, 0, 1, 3],
      xpValue: 15,
    },
    {
      id: 'csm-ce-q6',
      type: 'spot-misconception',
      stem: 'Sam says: "The best way to get the biggest crystals is to heat the solution really strongly so the water leaves in a rush."',
      tier: 'core',
      statements: [
        {
          text: 'Sam is right. The more heat you give the solution, the bigger the crystals will be at the end.',
          isMisconception: true,
        },
        {
          text: 'Sam is wrong. Rapid heating gives many small irregular crystals. Slow evaporation gives the particles time to slot into the lattice, so the crystals grow larger and more regular.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-faster-bigger',
    },

    // CONFIDENT TIER (8 questions)
    {
      id: 'csm-ce-q7',
      type: 'multiple-choice',
      stem: 'Use the particle model. Why does slow evaporation produce larger, more regular crystals than rapid heating?',
      tier: 'confident',
      options: [
        'The particles get bigger when the solution is warm for longer',
        'Slow evaporation gives each particle time to drift to a growing seed and slot into the regular lattice before the next particle arrives',
        'Slow evaporation heats the salt enough to melt it into a single crystal',
        'Slow evaporation removes the salt instead of the water',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-faster-bigger',
    },
    {
      id: 'csm-ce-q8',
      type: 'multiple-choice',
      stem: 'A pupil tries to recover hydrated copper sulfate by boiling its solution to dryness over a Bunsen. The blue crystals turn white and powdery as the basin dries out. What has gone wrong?',
      tier: 'confident',
      options: [
        'The copper sulfate has dissolved into the air as a gas',
        'The Bunsen flame has decomposed the hydrated salt, driving off its water of crystallisation, so the blue colour is lost',
        'The filter paper has trapped the colour',
        'Nothing has gone wrong; copper sulfate is naturally white',
      ],
      correctIndex: 1,
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-boiling-dry-safe',
    },
    {
      id: 'csm-ce-q9',
      type: 'multiple-choice',
      stem: 'A wet tea-towel hangs over a kitchen radiator overnight and is dry by the morning, even though the room is at 20 C. Which sentence best describes what has happened to the water?',
      tier: 'confident',
      options: [
        'The water has boiled away; you do not need 100 C for that',
        'The water has crystallised on the radiator',
        'The water has slowly evaporated from the surface of the cloth, particle by particle, into the air of the room',
        'The water has been absorbed into the metal of the radiator',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-needs-heat',
    },
    {
      id: 'csm-ce-q10',
      type: 'numeric-entry',
      stem: 'A school technician dissolves 20 g of salt in 100 g of water to make a 20 g per 100 g solution. She pours out 250 g of this fully mixed solution into a shallow dish and lets it evaporate slowly until only dry salt is left. How many grams of water must evaporate from the dish?',
      tier: 'confident',
      correctAnswer: 200,
      unit: 'g',
      xpValue: 15,
      hint: 'In every 120 g of solution there is 100 g of water and 20 g of salt. Find how much water is in 250 g of the solution.',
      misconceptionId: 'csm-ce-mis-evap-removes-solute',
    },
    {
      id: 'csm-ce-q11',
      type: 'numeric-entry',
      stem: 'At 20 C, 100 g of a saturated copper sulfate solution contains 22 g of copper sulfate dissolved in 78 g of water. If the whole 100 g sample is evaporated to dryness on a windowsill, what mass of copper sulfate crystals is left in the dish, in grams?',
      tier: 'confident',
      correctAnswer: 22,
      unit: 'g',
      xpValue: 15,
      hint: 'Only the water leaves as vapour. The solute is left behind.',
    },
    {
      id: 'csm-ce-q12',
      type: 'spot-misconception',
      stem: 'Priya says: "Crystallisation by evaporation only really works in hot countries near the equator. You cannot grow crystals this way in the UK because it is too cold."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. You need a tropical climate for slow evaporation; UK weather is too cold for it to work.',
          isMisconception: true,
        },
        {
          text: 'Priya is wrong. Evaporation works at any temperature above absolute zero. The Maldon saltpans in Essex use this method all year round in the UK; it is faster in warm dry weather but is not limited to hot countries.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-only-hot-countries',
    },
    {
      id: 'csm-ce-q13',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a pupil notices a ring of crusty white deposit on the inside of a kettle in Sevenoaks after months of use. Explain why this ring has formed.',
      tier: 'confident',
      steps: [
        'Tap water in much of the UK contains dissolved minerals such as calcium carbonate, which we cannot see in the clear water.',
        'Each time the kettle is used, water near the heating element turns to steam and leaves the kettle, but the dissolved minerals do not.',
        null,
        'Over many uses the deposit builds up into a visible white limescale ring around the inside wall of the kettle.',
      ],
      missingStepIndex: 2,
      correctStep:
        'As more water evaporates, the dissolved minerals are left behind on the inside of the kettle. They crystallise out as solid limescale when there is no more water to hold them in solution.',
      xpValue: 20,
      misconceptionId: 'csm-ce-mis-evap-removes-solute',
    },
    {
      id: 'csm-ce-q14',
      type: 'multiple-choice',
      stem: 'A pupil wants to recover both the water and the salt from a salt solution. Why is slow evaporation by itself not enough to recover the water?',
      tier: 'confident',
      options: [
        'The water reacts with the salt and is destroyed',
        'The water sinks through the dish and is absorbed by the bench',
        'The water joins with the salt to form a new solid',
        'The water turns into a gas and drifts away into the air, so it cannot be collected back unless distillation is used to trap the vapour',
      ],
      correctIndex: 3,
      xpValue: 15,
      misconceptionId: 'csm-ce-mis-recover-solvent',
    },

    // CHALLENGE TIER (6 questions)
    {
      id: 'csm-ce-q15',
      type: 'multiple-choice',
      stem: 'A pupil needs to recover pure sodium chloride from a hot saturated solution. Sodium chlorides solubility barely changes between 0 C and 100 C. Why is slow evaporation a better choice than cooling the solution down?',
      tier: 'challenge',
      options: [
        'Cooling crystallisation only works when solubility drops sharply with temperature; for sodium chloride solubility hardly changes, so almost no crystals would drop out on cooling',
        'Cooling crystallisation destroys salt particles',
        'Sodium chloride only crystallises in a freezer below 0 C',
        'Cooling crystallisation produces toxic crystals',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'csm-ce-mis-cooling-always-better',
    },
    {
      id: 'csm-ce-q16',
      type: 'multiple-choice',
      stem: 'A technician tells a pupil: "If you want pure crystals every time, just evaporate the solution to dryness and the impurities will be left in the air with the water vapour." Why is this advice wrong?',
      tier: 'challenge',
      options: [
        'Impurities are concentrated in the remaining solution (the mother liquor) and can get trapped in the crystals as they grow; pure crystals usually need recrystallisation, not a single evaporation',
        'Impurities turn into a gas faster than water does',
        'The crystals always taste salty even when they are pure',
        'Impurities cannot dissolve in water in the first place',
      ],
      correctIndex: 0,
      xpValue: 25,
      misconceptionId: 'csm-ce-mis-evaporation-pure',
    },
    {
      id: 'csm-ce-q17',
      type: 'numeric-entry',
      stem: 'A pupil collects 1000 g of fresh North Sea water from a school trip to the Essex coast. Seawater contains roughly 35 g of dissolved salts in every 1000 g of seawater. She lets the whole 1000 g sample slowly evaporate in a shallow tray on a sunny laboratory windowsill until the tray is dry. What mass of solid salts, in grams, is left in the tray?',
      tier: 'challenge',
      correctAnswer: 35,
      unit: 'g',
      xpValue: 25,
      hint: 'The figure 35 g per 1000 g is already given. No need to scale it.',
    },
    {
      id: 'csm-ce-q18',
      type: 'numeric-entry',
      stem: 'A pupil pours 250 g of fully mixed seawater into a Petri dish on a windowsill at the Maldon visitor centre. Seawater holds 35 g of dissolved salts in every 1000 g of seawater. After several weeks the dish is dry. What mass of salt crystals, in grams, is left in the dish? Give your answer to two decimal places.',
      tier: 'challenge',
      correctAnswer: 8.75,
      unit: 'g',
      tolerance: 0.05,
      xpValue: 25,
      hint: 'Scale 35 g per 1000 g down to a 250 g sample. The fraction 35/1000 is 0.035.',
      misconceptionId: 'csm-ce-mis-evap-removes-solute',
    },
    {
      id: 'csm-ce-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. Question: a sugar beet refinery at Wissington concentrates beet juice until it is supersaturated, then lets it crystallise slowly under reduced pressure to recover large, pure sugar crystals. Explain, in three steps, why slow crystallisation gives larger and purer crystals than boiling the juice to dryness.',
      tier: 'challenge',
      steps: [
        'Sugar beet juice is a solution of sucrose dissolved in water along with small amounts of coloured impurities.',
        'As water slowly evaporates under reduced pressure, the solution becomes supersaturated and sucrose particles begin to attach to a small number of growing crystal seeds.',
        null,
        'The mother liquor that drains away at the end carries most of the coloured impurities, so the harvested crystals are large and far purer than crystals left by boiling the juice to dryness.',
      ],
      missingStepIndex: 2,
      correctStep:
        'Because the water leaves slowly, only a few seeds form and sucrose particles have time to slot neatly into the lattice; impurity particles are mostly rejected and stay behind in the remaining liquid rather than being trapped in the growing crystals.',
      xpValue: 25,
      misconceptionId: 'csm-ce-mis-evaporation-pure',
    },
    {
      id: 'csm-ce-q20',
      type: 'free-text',
      stem: 'A teacher gives two Year 7 groups equal samples of warm copper sulfate solution. Group A heats the solution rapidly in an evaporating basin over a Bunsen until the basin is fully dry. Group B pours the solution into a shallow crystallising dish and leaves it on a sunny windowsill for two weeks. The two groups end up with very different products: group A has a crusty layer of small, almost white powdery solid; group B has a few large, deep blue, regular crystals. Explain, in two or three sentences, why the products differ. In your answer mention crystal size, the particle model, and what happens to the water of crystallisation in copper sulfate when it is heated strongly.',
      tier: 'challenge',
      sampleAnswer:
        'Group A heated the solution so strongly that the water boiled off in minutes and the hydrated copper sulfate lost its water of crystallisation, leaving the white powdery anhydrous form rather than the blue hydrated crystals. Group B let the water leave the surface slowly over days, so only a few crystal seeds formed and copper sulfate particles had time to slot into the regular lattice in an orderly way. That is why group B ended up with large, deep blue, well-formed crystals while group A got small, irregular ones.',
      keywords: [
        'slow',
        'lattice',
        'water of crystallisation',
        'large',
        'particles',
      ],
      xpValue: 30,
    },
  ],
  misconceptions: [
    // Source: Best Evidence Science Teaching (BEST), STEM Learning / UCL, KS3 separating-mixtures diagnostic question set: pupils often state that stronger heating gives bigger crystals, transferring an intuition from cooking. The same misconception is flagged in RSC Education's "Growing crystals" CPD article (2018) on the link between cooling/evaporation rate and crystal size.
    {
      id: 'csm-ce-mis-faster-bigger',
      description:
        'Stronger heating of a solution gives bigger crystals because the water leaves more rapidly.',
      triggerAnswer: 'faster-bigger',
      correction:
        'In fact, the opposite is true. Slow evaporation gives larger, more regular crystals because particles have time to slot into the lattice.',
      reExplanation:
        'When water leaves rapidly, many crystal seeds form at once and salt particles lock onto whichever seed is nearest. The result is a crusty layer of small, irregular grains. When water leaves slowly, only a few seeds form and each new particle has time to drift to a growing crystal and join the regular lattice. The Maldon saltpans use slow solar evaporation for exactly this reason.',
    },
    // Source: AQA GCSE Chemistry examiner report June 2018 (8462/1F), Q05 commentary on the required-practical crystallisation: candidates often described boiling the solution dry as the standard method, missing that heat-sensitive salts (notably hydrated copper sulfate) decompose on direct heating to dryness.
    {
      id: 'csm-ce-mis-boiling-dry-safe',
      description:
        'You can always boil a solution dry over a Bunsen to recover its crystals without harming them.',
      triggerAnswer: 'boiling-dry-safe',
      correction:
        'In fact, boiling dry can decompose heat-sensitive salts. Hydrated copper sulfate loses its water of crystallisation and turns from blue to a white powder.',
      reExplanation:
        'Strong heat after the basin runs out of water can drive water of crystallisation out of the crystal itself. The blue copper sulfate crystals turn into the white anhydrous form. Some other salts shatter or thermally decompose. Slow evaporation stops once the solvent is gone, so the crystals are not over-heated and stay intact.',
    },
    // Source: Edexcel GCSE Chemistry examiner report June 2019 (1CH0/1F), Q08 on choosing between cooling crystallisation and evaporative crystallisation: candidates often picked cooling for sodium chloride, not realising NaCl solubility barely changes with temperature so cooling drops out almost no crystals.
    {
      id: 'csm-ce-mis-cooling-always-better',
      description:
        'Cooling a hot solution down is always a better way to recover crystals than evaporating the solvent.',
      triggerAnswer: 'cooling-always-better',
      correction:
        'In fact, cooling crystallisation only works when the solute is much less soluble cold than hot. For salts like sodium chloride whose solubility barely changes with temperature, evaporation is the only practical route.',
      reExplanation:
        'A solid that drops in solubility a lot on cooling, like potassium nitrate, leaves crystals behind when its hot saturated solution is cooled. Sodium chloride is almost as soluble cold as hot, so a cooled solution stays clear. To recover the salt you have to remove the solvent by evaporation rather than try to drive it out of solution with a temperature change.',
    },
    // Source: David Paterson, "Teaching crystallisation and recrystallisation", RSC Education CPD article (2021-04): a recurring Year 7 belief is that evaporation only happens in hot weather, transferring an intuition from puddles drying in summer. The same idea appears in BEST KS3 diagnostics on evaporation.
    {
      id: 'csm-ce-mis-only-hot-countries',
      description:
        'Crystallisation by evaporation only works in hot countries; UK weather is too cool for it.',
      triggerAnswer: 'only-hot-countries',
      correction:
        'In fact, evaporation happens at any temperature above absolute zero. It is faster in warm, dry, breezy weather, but it still works in a cool UK winter, just more slowly.',
      reExplanation:
        'The Maldon Crystal Salt Company has harvested salt from Essex saltpans for centuries, and Cheshire has run rock-salt and brine works through cold winters as well as warm summers. Even on a cold UK day, the fastest surface water particles can still escape and the dish slowly dries. Warmth and airflow speed it up but are not strictly required.',
    },
    // Source: Vanessa Kind, "Beyond Appearances: Students' ideas about the particulate nature of matter", RSC Education: Kind summarises the canonical "the salt evaporates" reversal, where pupils believe the solute leaves with the water rather than the solvent doing the work.
    {
      id: 'csm-ce-mis-evap-removes-solute',
      description:
        'Evaporation removes the dissolved solid (the solute) from a solution, leaving the water behind.',
      triggerAnswer: 'evap-removes-solute',
      correction:
        'In fact, evaporation removes the solvent (the water). The solute is left behind in the dish as a solid.',
      reExplanation:
        'Salt and sugar particles need far more energy to turn into a gas than water particles do, so at room temperature or on a Bunsen flame only the water has enough energy to escape. The salt or sugar stays in the dish, drops out of solution as the brine concentrates, and is left behind as crystals once all the water has gone.',
    },
    // Source: OCR Gateway Chemistry examiner report June 2022 (J248/01), Q07 on separating mixtures: candidates often suggested that a single evaporation step could be used to "collect the water" from a salt solution, missing the role of distillation in trapping the vapour.
    {
      id: 'csm-ce-mis-recover-solvent',
      description:
        'You can recover the water from a salt solution by simply leaving the solution to evaporate in an open dish.',
      triggerAnswer: 'recover-solvent',
      correction:
        'In fact, evaporation lets the water vapour drift off into the air, so it is lost to the room. To collect the water back you need distillation, which traps the vapour and condenses it.',
      reExplanation:
        'In a Petri dish on a windowsill, water particles leave the surface and mix with the air of the room. The salt is recovered, but the water is gone. A distillation set-up uses a condenser to cool the vapour and turn it back into liquid water, so both the solid and the solvent can be collected separately.',
    },
    // Source: RSC Education, "Recrystallisation" classroom support (2020): notes that pupils often assume one round of evaporation gives pure crystals, missing that impurities are concentrated in the mother liquor and can be trapped in the growing crystal.
    {
      id: 'csm-ce-mis-evaporation-pure',
      description:
        'Crystals from a single evaporation are always pure because any impurities leave as vapour with the water.',
      triggerAnswer: 'evaporation-pure',
      correction:
        'In fact, impurities are concentrated in the remaining solution and can be trapped in the growing crystals. To get really pure crystals you usually need recrystallisation, not a single evaporation.',
      reExplanation:
        'Most impurities have boiling points much higher than water and stay in the liquid as the water evaporates. As the solution shrinks, the impurity concentration rises. Some impurity particles slot into the crystal lattice or are stuck in the mother liquor between crystals. Slow growth in a sugar refinery, for example, rejects most impurities, but a final recrystallisation step is still used to lift purity further.',
    },
    // Source: BEST KS3 diagnostic question set on evaporation: a long-running pupil belief is that evaporation needs strong heat, transferring from the boiling experience. Pupils often deny that washing dries unless the room is warm.
    {
      id: 'csm-ce-mis-needs-heat',
      description:
        'A solution cannot evaporate unless it is being heated by a flame or hob.',
      triggerAnswer: 'needs-heat',
      correction:
        'In fact, evaporation happens whenever the solvent has a surface open to the air. Gentle warmth speeds it up, but a flame is not required.',
      reExplanation:
        'A tea-towel left on a kitchen radiator at 20 C dries overnight. A Petri dish of salt solution on a windowsill goes to crystals over days, without any flame. The fastest water particles at the surface always have enough energy to escape; warmth, dry air, and a breeze just help more of them leave per minute.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}
