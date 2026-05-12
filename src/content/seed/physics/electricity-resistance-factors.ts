import type { SkillNode } from '@/types/content'

const LENGTH_COMPARE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two nichrome wires, same thickness: longer wire has more resistance</text>

    <!-- Short wire circuit -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Short wire: 0.20 m</text>
    <line x1="80" y1="120" x2="80" y2="180" />
    <line x1="80" y1="180" x2="320" y2="180" />
    <line x1="320" y1="180" x2="320" y2="120" />
    <line x1="80" y1="120" x2="140" y2="120" />
    <line x1="260" y1="120" x2="320" y2="120" />
    <!-- Cell (6 V) -->
    <line x1="170" y1="105" x2="170" y2="135" />
    <line x1="185" y1="113" x2="185" y2="127" stroke-width="7" />
    <text x="178" y="98" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">6 V</text>
    <!-- Wire under test -->
    <line x1="140" y1="120" x2="170" y2="120" />
    <line x1="185" y1="120" x2="220" y2="120" stroke-width="5" stroke-dasharray="4,3" />
    <line x1="220" y1="120" x2="260" y2="120" />
    <text x="202" y="148" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">resistance: 2 Ω</text>
    <text x="202" y="165" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">current: 3.0 A</text>

    <!-- Long wire circuit -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Long wire: 0.40 m (double length)</text>
    <line x1="440" y1="120" x2="440" y2="180" />
    <line x1="440" y1="180" x2="760" y2="180" />
    <line x1="760" y1="180" x2="760" y2="120" />
    <line x1="440" y1="120" x2="500" y2="120" />
    <line x1="700" y1="120" x2="760" y2="120" />
    <!-- Cell -->
    <line x1="530" y1="105" x2="530" y2="135" />
    <line x1="545" y1="113" x2="545" y2="127" stroke-width="7" />
    <text x="538" y="98" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">6 V</text>
    <!-- Long wire under test -->
    <line x1="500" y1="120" x2="530" y2="120" />
    <line x1="545" y1="120" x2="680" y2="120" stroke-width="5" stroke-dasharray="4,3" />
    <line x1="680" y1="120" x2="700" y2="120" />
    <text x="612" y="148" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">resistance: 4 Ω</text>
    <text x="612" y="165" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">current: 1.5 A</text>

    <text x="400" y="260" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Doubling the length doubles the resistance.</text>
    <text x="400" y="285" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A longer wire makes charge travel through more metal, so the push has to spread further.</text>
    <text x="400" y="310" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">Same cell, same wire material, same thickness: only the length changed.</text>
  </g>
`

const THICKNESS_COMPARE_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Two nichrome wires, same length: thicker wire has less resistance</text>

    <!-- Thin wire -->
    <text x="200" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Thin wire</text>
    <line x1="60" y1="140" x2="340" y2="140" stroke-width="2" />
    <text x="200" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cross-section area: 1 mm²</text>
    <text x="200" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">resistance: 4 Ω</text>
    <text x="200" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">current at 6 V: 1.5 A</text>

    <!-- Thick wire (double area) -->
    <text x="600" y="80" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Thick wire (double area)</text>
    <line x1="460" y1="140" x2="740" y2="140" stroke-width="8" />
    <text x="600" y="170" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">cross-section area: 2 mm²</text>
    <text x="600" y="190" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">resistance: 2 Ω</text>
    <text x="600" y="210" text-anchor="middle" font-size="12" stroke="none" fill="currentColor">current at 6 V: 3.0 A</text>

    <!-- End-on view of the two wires -->
    <text x="200" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">End-on view</text>
    <circle cx="200" cy="320" r="14" />
    <text x="600" y="270" text-anchor="middle" font-size="13" font-weight="700" stroke="none" fill="currentColor">End-on view</text>
    <circle cx="600" cy="320" r="20" />

    <text x="400" y="370" text-anchor="middle" font-size="14" font-weight="700" stroke="none" fill="currentColor">Doubling the area halves the resistance.</text>
    <text x="400" y="392" text-anchor="middle" font-size="13" stroke="none" fill="currentColor">A thicker wire gives charge more lanes to travel along, so it flows more easily.</text>
  </g>
`

const FACTORS_SUMMARY_SVG = `
  <g stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round">
    <text x="400" y="30" text-anchor="middle" font-size="18" font-weight="700" stroke="none" fill="currentColor">Three things that change the resistance of a wire</text>

    <!-- Row 1: length -->
    <text x="80" y="90" font-size="14" font-weight="700" stroke="none" fill="currentColor">Length</text>
    <line x1="200" y1="90" x2="280" y2="90" stroke-width="4" />
    <text x="290" y="94" font-size="12" stroke="none" fill="currentColor">short, low resistance</text>
    <line x1="200" y1="120" x2="440" y2="120" stroke-width="4" />
    <text x="450" y="124" font-size="12" stroke="none" fill="currentColor">longer, higher resistance</text>
    <text x="200" y="150" font-size="12" stroke="none" fill="currentColor">Double the length, double the resistance.</text>

    <!-- Row 2: thickness -->
    <text x="80" y="200" font-size="14" font-weight="700" stroke="none" fill="currentColor">Thickness</text>
    <line x1="200" y1="200" x2="340" y2="200" stroke-width="2" />
    <text x="350" y="204" font-size="12" stroke="none" fill="currentColor">thin, higher resistance</text>
    <line x1="200" y1="230" x2="340" y2="230" stroke-width="10" />
    <text x="350" y="234" font-size="12" stroke="none" fill="currentColor">thick, lower resistance</text>
    <text x="200" y="260" font-size="12" stroke="none" fill="currentColor">Double the area, halve the resistance.</text>

    <!-- Row 3: temperature -->
    <text x="80" y="310" font-size="14" font-weight="700" stroke="none" fill="currentColor">Temperature</text>
    <circle cx="220" cy="310" r="10" />
    <text x="240" y="314" font-size="12" stroke="none" fill="currentColor">cold metal wire: lower resistance</text>
    <circle cx="220" cy="345" r="10" fill="currentColor" fill-opacity="0.5" />
    <text x="240" y="349" font-size="12" stroke="none" fill="currentColor">hot metal wire: higher resistance</text>
    <text x="200" y="380" font-size="12" stroke="none" fill="currentColor">Hot metal ions jiggle more, so charge is bumped about more.</text>
  </g>
`

export const electricityResistanceFactors: SkillNode = {
  id: 'physics-electricity-resistance-factors',
  title: 'Resistance: What Changes It',
  description:
    'Three things change the resistance of a wire: its length, its cross-section area (thickness), and its temperature. A longer wire has more resistance because charge passes through more metal. A thicker wire has less resistance because it gives charge more lanes to travel along. A hotter metal wire has more resistance because the metal ions jiggle more and bump the moving charges. The material matters too: copper and aluminium are good conductors, steel is a poorer conductor, and nichrome is used in heating elements because it has a useful, steady resistance. Doubling the length doubles the resistance; doubling the area halves the resistance.',
  subject: 'physics',
  realm: 'mechanica',
  zoneId: 'physics-electricity-circuits',
  zoneName: 'Electricity and Circuits',
  tier: 'confident',
  prerequisites: ['physics-electricity-current-voltage'],
  curriculum: {
    ks3Objective:
      'Resistance, measured in ohms, as the ratio of potential difference (p.d.) to current; differences in resistance between conducting and insulating components.',
    awardingBodies: {
      aqa: '4.2.1.3 Resistance; 4.2.1.5 Resistance of a wire (length and cross-section); 4.2.1.6 Resistors and temperature (GCSE Physics 8463)',
      edexcel:
        'Topic 2.7 Factors affecting resistance: length, thickness and temperature of a wire (GCSE Physics 1PH0)',
      ocr: 'P4.2 Factors that change resistance: length, cross-sectional area, temperature (GCSE Physics J259 Gateway)',
    },
  },
  scenes: [
    {
      id: 'pe-rf-scene-length',
      title: 'Longer Wire, More Resistance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare two circuits where only the length of the test wire has changed.',
      data: {
        viewBox: '0 0 800 320',
        svg: LENGTH_COMPARE_SVG,
        hotspots: [
          {
            id: 'pe-rf-len-short',
            x: 25,
            y: 50,
            label: 'Short wire: 2 Ω at 3.0 A',
            description:
              'A 0.20 m nichrome wire across a 6 V cell has 2 Ω of resistance. The cell pushes 3.0 A of current through it.',
          },
          {
            id: 'pe-rf-len-long',
            x: 75,
            y: 50,
            label: 'Long wire: 4 Ω at 1.5 A',
            description:
              'Doubling the length to 0.40 m of the same wire doubles the resistance to 4 Ω. The same 6 V cell now pushes only 1.5 A.',
          },
          {
            id: 'pe-rf-len-rule',
            x: 50,
            y: 85,
            label: 'Rule: length doubles, resistance doubles',
            description:
              'Resistance is in direct proportion to length. The charges have to drift through more metal, so the push from the cell spreads further and the current drops.',
          },
        ],
      },
    },
    {
      id: 'pe-rf-scene-thickness',
      title: 'Thicker Wire, Less Resistance',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to compare a thin and a thick wire of the same length and material.',
      data: {
        viewBox: '0 0 800 400',
        svg: THICKNESS_COMPARE_SVG,
        hotspots: [
          {
            id: 'pe-rf-thick-thin',
            x: 25,
            y: 40,
            label: 'Thin wire: 1 mm² gives 4 Ω',
            description:
              'A thin wire with a cross-section area of 1 mm² has 4 Ω of resistance. With a 6 V cell across it, the current is 1.5 A.',
          },
          {
            id: 'pe-rf-thick-thick',
            x: 75,
            y: 40,
            label: 'Thick wire: 2 mm² gives 2 Ω',
            description:
              'Doubling the area to 2 mm² halves the resistance to 2 Ω. The same 6 V cell now pushes 3.0 A through it.',
          },
          {
            id: 'pe-rf-thick-end-on',
            x: 50,
            y: 75,
            label: 'End-on view',
            description:
              'Looking down the wire, the thick wire shows a larger circle. A bigger area means more parallel paths for the charges, so less resistance.',
          },
          {
            id: 'pe-rf-thick-rule',
            x: 50,
            y: 95,
            label: 'Rule: double the area, halve the resistance',
            description:
              'Resistance is in inverse proportion to cross-section area. Mains cables in a UK kitchen are thick so they can carry a large current without overheating.',
          },
        ],
      },
    },
    {
      id: 'pe-rf-scene-summary',
      title: 'Three Factors Side by Side',
      type: 'labelled-diagram',
      instructions:
        'Click each marker to see all three factors that change the resistance of a wire.',
      data: {
        viewBox: '0 0 800 400',
        svg: FACTORS_SUMMARY_SVG,
        hotspots: [
          {
            id: 'pe-rf-sum-length',
            x: 25,
            y: 28,
            label: 'Length: longer means more resistance',
            description:
              'Resistance is in direct proportion to length. Doubling the length doubles the resistance, all else equal.',
          },
          {
            id: 'pe-rf-sum-area',
            x: 25,
            y: 60,
            label: 'Thickness: thicker means less resistance',
            description:
              'Resistance is in inverse proportion to cross-section area. Doubling the area halves the resistance.',
          },
          {
            id: 'pe-rf-sum-temp',
            x: 25,
            y: 85,
            label: 'Temperature: hotter metal means more resistance',
            description:
              'In a metal wire, hotter atoms jiggle more and bump the moving charges. A filament bulb in a Manchester reading lamp has a low resistance when cold and a much higher resistance once it glows.',
          },
          {
            id: 'pe-rf-sum-material',
            x: 75,
            y: 50,
            label: 'Material matters too',
            description:
              'Copper and aluminium are good conductors and have very low resistance, which is why house wiring uses them. Steel is a poorer conductor. Nichrome holds a steady, useful resistance and is used in toaster heating elements.',
          },
        ],
      },
    },
  ],
  workedExamples: [
    {
      id: 'pe-rf-worked-1',
      title: 'A 0.20 m wire has 2 Ω. What is the resistance of 0.60 m of the same wire?',
      steps: [
        {
          explanation:
            'Set out the situation. A 0.20 m length of nichrome wire has a resistance of 2 Ω. We want the resistance of a 0.60 m length of the same wire, with the same thickness and at the same temperature.',
        },
        {
          explanation:
            'State the rule. Resistance is in direct proportion to length, when thickness, material, and temperature are kept the same. Triple the length, triple the resistance.',
          maths: 'R ∝ length',
        },
        {
          explanation:
            'Find the scale factor for the length.',
          maths: 'scale = 0.60 m ÷ 0.20 m = 3',
        },
        {
          explanation:
            'Apply the scale factor to the resistance.',
          maths: 'R_new = 3 × 2 Ω = 6 Ω',
        },
        {
          explanation:
            'State the answer. The 0.60 m wire has a resistance of 6 Ω. A wire three times as long has three times the resistance, so the same cell will push a third of the current through it.',
        },
      ],
    },
    {
      id: 'pe-rf-worked-2',
      title: 'A 1 mm² nichrome wire has 8 Ω. What is the resistance of a 2 mm² wire of the same length?',
      steps: [
        {
          explanation:
            'Set out the situation. A nichrome wire of cross-section area 1 mm² has a resistance of 8 Ω. We swap in a wire of the same length and material, but with a cross-section area of 2 mm². We want the new resistance.',
        },
        {
          explanation:
            'State the rule. Resistance is in inverse proportion to cross-section area, when length, material, and temperature are kept the same. Double the area, halve the resistance.',
          maths: 'R ∝ 1 ÷ area',
        },
        {
          explanation:
            'Find the scale factor for the area.',
          maths: 'area_scale = 2 mm² ÷ 1 mm² = 2',
        },
        {
          explanation:
            'Divide the old resistance by the area scale factor.',
          maths: 'R_new = 8 Ω ÷ 2 = 4 Ω',
        },
        {
          explanation:
            'State the answer. The 2 mm² wire has 4 Ω of resistance. The same cell will now push twice the current through it, because a thicker wire opens up more lanes for the charges.',
        },
      ],
    },
  ],
  questions: [
    {
      id: 'pe-rf-q1',
      type: 'multiple-choice',
      stem: 'Two nichrome wires of the same thickness and at the same temperature are tested. One is 0.20 m long with a resistance of 2 Ω. The other is 0.40 m long. What is its resistance?',
      tier: 'confident',
      options: ['1 Ω, because a longer wire has less resistance.', '2 Ω, because length does not change resistance.', '4 Ω, because doubling the length doubles the resistance.', '8 Ω, because doubling the length squares the resistance.'],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-rf-mis-length-inverse',
      hint: 'Resistance is in direct proportion to length. Double the length, double the resistance.',
    },
    {
      id: 'pe-rf-q2',
      type: 'numeric-entry',
      stem: 'A 0.20 m length of nichrome wire has a resistance of 3 Ω. A 0.80 m length of the same wire, with the same thickness and at the same temperature, has what resistance, in Ω?',
      tier: 'confident',
      correctAnswer: 12,
      unit: 'Ω',
      xpValue: 15,
      hint: 'Scale factor for length is 0.80 ÷ 0.20 = 4. So R_new = 4 × 3.',
    },
    {
      id: 'pe-rf-q3',
      type: 'numeric-entry',
      stem: 'A thin nichrome wire with a cross-section area of 1 mm² has a resistance of 6 Ω. A thicker wire of the same length and material, with an area of 2 mm², has what resistance, in Ω?',
      tier: 'core',
      correctAnswer: 3,
      unit: 'Ω',
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-thicker-more-resistance',
      hint: 'Resistance is in inverse proportion to area. Double the area, halve the resistance.',
    },
    {
      id: 'pe-rf-q4',
      type: 'multiple-choice',
      stem: 'A filament bulb in a Manchester reading lamp has a resistance of 2 Ω when cold and 20 Ω when glowing white hot. What does this show about the resistance of a metal wire?',
      tier: 'confident',
      options: [
        'Resistance does not depend on temperature in a metal wire.',
        'Resistance falls as a metal wire gets hotter.',
        'Resistance rises as a metal wire gets hotter; here it has risen by a factor of 10.',
        'Resistance rises only because the wire gets shorter when it heats up.',
      ],
      correctIndex: 2,
      xpValue: 15,
      misconceptionId: 'pe-rf-mis-temperature-no-effect',
      hint: 'Hot metal ions jiggle more and bump the moving charges. 20 Ω ÷ 2 Ω = 10.',
    },
    {
      id: 'pe-rf-q5',
      type: 'spot-misconception',
      stem: 'Priya says, "A thicker wire has more metal in the way, so it must have more resistance."',
      tier: 'confident',
      statements: [
        {
          text: 'Priya is right. A thicker wire has more metal, so the current finds it harder to flow.',
          isMisconception: true,
        },
        {
          text: 'Priya is not right. A thicker wire gives the charges more lanes to travel along, so the resistance is actually lower. Doubling the area halves the resistance.',
          isMisconception: false,
        },
      ],
      xpValue: 15,
      misconceptionId: 'pe-rf-mis-thicker-more-resistance',
    },
    {
      id: 'pe-rf-q6',
      type: 'drag-order',
      stem: 'Put the steps in the right order to predict the resistance of a wire when its length is changed.',
      tier: 'confident',
      items: [
        'Multiply the old resistance by that scale factor to get the new resistance.',
        'Write down the rule: resistance is in direct proportion to length, all else equal.',
        'Find the scale factor by dividing the new length by the old length.',
        'Check that thickness, material, and temperature are all kept the same.',
      ],
      correctOrder: [3, 1, 2, 0],
      xpValue: 15,
      hint: 'Check the variables are controlled, state the rule, find the scale, then apply it.',
    },
    {
      id: 'pe-rf-q7',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the resistance of a 0.50 m nichrome wire, given that a 0.10 m wire of the same kind and temperature has a resistance of 4 Ω.',
      tier: 'confident',
      steps: [
        'Set out the situation: old length 0.10 m, old resistance 4 Ω, new length 0.50 m, same thickness, same material, same temperature.',
        'State the rule: resistance is in direct proportion to length, so R ∝ length.',
        'Find the scale factor for the length: scale = 0.50 m ÷ 0.10 m = 5.',
        null,
        'Evaluate: R_new = 20 Ω.',
        'State the answer: the 0.50 m wire has a resistance of 20 Ω, five times the original resistance.',
      ],
      missingStepIndex: 3,
      correctStep:
        'Apply the scale factor to the old resistance: R_new = 5 × 4 Ω.',
      xpValue: 15,
    },
    {
      id: 'pe-rf-q8',
      type: 'numeric-entry',
      stem: 'A copper wire has a resistance of 2 Ω. A second copper wire is identical in material and temperature but is twice the length AND twice the cross-section area. What is its resistance, in Ω?',
      tier: 'challenge',
      correctAnswer: 2,
      unit: 'Ω',
      xpValue: 20,
      misconceptionId: 'pe-rf-mis-effects-add',
      hint: 'Doubling length doubles R (×2). Doubling area halves R (÷2). The two effects cancel.',
    },
    {
      id: 'pe-rf-q9',
      type: 'multiple-choice',
      stem: 'Which one of these changes would make the resistance of a wire INCREASE?',
      tier: 'core',
      options: [
        'Making the wire thicker.',
        'Making the wire shorter.',
        'Cooling the wire down.',
        'Heating the metal wire up.',
      ],
      correctIndex: 3,
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-temperature-no-effect',
      hint: 'Three things change resistance: length, thickness and temperature. Hot metal jiggles more.',
    },
    {
      id: 'pe-rf-q10',
      type: 'multiple-choice',
      stem: 'Which of these is a good electrical conductor used in UK house wiring?',
      tier: 'core',
      options: [
        'Copper, because it has a very low resistance.',
        'Rubber, because it has a very low resistance.',
        'Glass, because charges pass through it easily.',
        'Dry wood, because it lets charges flow well.',
      ],
      correctIndex: 0,
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-material-irrelevant',
      hint: 'Conductors let charge flow easily. Most metals are conductors; non-metals are usually insulators.',
    },
    {
      id: 'pe-rf-q11',
      type: 'multiple-choice',
      stem: 'Which of these is an electrical insulator?',
      tier: 'core',
      options: [
        'Aluminium.',
        'Steel.',
        'Plastic (the sleeve on a kettle lead).',
        'Copper.',
      ],
      correctIndex: 2,
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-insulator-zero-resistance',
      hint: 'An insulator has a very high resistance and is used to stop charge from leaking. Think of the sleeve around a mains cable.',
    },
    {
      id: 'pe-rf-q12',
      type: 'multiple-choice',
      stem: 'A pupil writes, "A longer wire has less resistance because charges can spread out more." Which is the best correction?',
      tier: 'core',
      options: [
        'They are right. Longer wires have less resistance.',
        'They are not right. Resistance is in direct proportion to length: a longer wire has more resistance, not less.',
        'They are not right. Resistance does not depend on length at all.',
        'They are right for thick wires but not for thin wires.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-length-inverse',
      hint: 'Doubling the length doubles the resistance, all else equal.',
    },
    {
      id: 'pe-rf-q13',
      type: 'multiple-choice',
      stem: 'Toaster heating elements are made of nichrome rather than copper. Why?',
      tier: 'core',
      options: [
        'Copper is cheaper, so toasters use it.',
        'Nichrome has a useful steady resistance and lets the wire glow red without melting, whereas copper has too low a resistance to heat up.',
        'Nichrome is a better conductor than copper.',
        'Copper is an insulator, so it does not work in a toaster.',
      ],
      correctIndex: 1,
      xpValue: 10,
      misconceptionId: 'pe-rf-mis-material-irrelevant',
      hint: 'The choice of material sets the resistance. A heating element needs a particular range.',
    },
    {
      id: 'pe-rf-q14',
      type: 'numeric-entry',
      stem: 'A 0.50 m length of nichrome wire has a resistance of 5 Ω. A 1.00 m length of the same wire, same thickness, same temperature, has what resistance, in Ω?',
      tier: 'core',
      correctAnswer: 10,
      unit: 'Ω',
      xpValue: 10,
      hint: 'Double the length, double the resistance.',
    },
    {
      id: 'pe-rf-q15',
      type: 'numeric-entry',
      stem: 'A nichrome wire of cross-section area 0.5 mm² has a resistance of 12 Ω. A wire of the same length and material with area 1.5 mm² has what resistance, in Ω?',
      tier: 'confident',
      correctAnswer: 4,
      unit: 'Ω',
      xpValue: 15,
      hint: 'Scale factor for area is 1.5 ÷ 0.5 = 3. Resistance divides by that factor: 12 ÷ 3.',
    },
    {
      id: 'pe-rf-q16',
      type: 'numeric-entry',
      stem: 'A copper wire 1 m long has a resistance of 0.10 Ω. A 5 m length of the same copper wire (same thickness, same temperature) has what resistance, in Ω?',
      tier: 'challenge',
      correctAnswer: 0.5,
      tolerance: 0.01,
      unit: 'Ω',
      xpValue: 20,
      hint: 'Scale factor for length is 5. So R_new = 5 × 0.10 Ω.',
    },
    {
      id: 'pe-rf-q17',
      type: 'numeric-entry',
      stem: 'A nichrome wire is 0.40 m long with area 2 mm² and has a resistance of 2 Ω. A new wire of the same material and temperature is 0.40 m long but has an area of 0.50 mm². What is its resistance, in Ω?',
      tier: 'challenge',
      correctAnswer: 8,
      unit: 'Ω',
      xpValue: 20,
      misconceptionId: 'pe-rf-mis-thicker-more-resistance',
      hint: 'Area scale factor is 0.50 ÷ 2 = 0.25. Resistance scales by 1 ÷ 0.25 = 4. So R_new = 4 × 2 Ω.',
    },
    {
      id: 'pe-rf-q18',
      type: 'spot-misconception',
      stem: 'Sam says, "An insulator has zero resistance, because no current flows through it at all."',
      tier: 'challenge',
      statements: [
        {
          text: 'Sam is right. An insulator has zero resistance.',
          isMisconception: true,
        },
        {
          text: 'Sam is not right. An insulator has a very high resistance, which is why so little current flows through it. Zero resistance describes a perfect conductor, not an insulator.',
          isMisconception: false,
        },
      ],
      xpValue: 20,
      misconceptionId: 'pe-rf-mis-insulator-zero-resistance',
    },
    {
      id: 'pe-rf-q19',
      type: 'missing-step',
      stem: 'Fill in the missing step. A pupil is finding the resistance of a 2 mm² copper wire, given that a 1 mm² wire of the same kind, length and temperature has a resistance of 6 Ω.',
      tier: 'challenge',
      steps: [
        'Set out the situation: old area 1 mm², old resistance 6 Ω, new area 2 mm², same length, same material, same temperature.',
        'State the rule: resistance is in inverse proportion to cross-section area, so R ∝ 1 ÷ area.',
        'Find the scale factor for the area: scale = 2 ÷ 1 = 2.',
        null,
        'Evaluate: R_new = 3 Ω.',
        'State the answer: the 2 mm² wire has a resistance of 3 Ω, half the original resistance.',
      ],
      missingStepIndex: 3,
      correctStep: 'Divide the old resistance by the area scale factor: R_new = 6 Ω ÷ 2.',
      xpValue: 20,
    },
    {
      id: 'pe-rf-q20',
      type: 'drag-order',
      stem: 'Put these wires in order of resistance, from highest to lowest. All four are the same material and at the same temperature, but their lengths and thicknesses differ.',
      tier: 'challenge',
      items: [
        '1.0 m long, area 0.5 mm² (long and thin).',
        '0.5 m long, area 0.5 mm² (medium length, thin).',
        '0.5 m long, area 1.0 mm² (medium length, thick).',
        '0.25 m long, area 1.0 mm² (short and thick).',
      ],
      correctOrder: [0, 1, 2, 3],
      xpValue: 20,
      hint: 'Long means more R; thin means more R. So long-and-thin is highest; short-and-thick is lowest.',
    },
  ],
  misconceptions: [
    // Source: AQA GCSE Physics 8463 examiner report June 2022, Paper 1F, candidates wrote that a longer wire has lower resistance, treating length and resistance as inversely related.
    {
      id: 'pe-rf-mis-length-inverse',
      description:
        'Believing that a longer wire has lower resistance, treating length and resistance as inversely related.',
      triggerAnswer: 'length-inverse',
      correction:
        'Resistance is in direct proportion to length, not inverse. A wire that is twice as long has twice the resistance, not half.',
      reExplanation:
        'A 0.20 m piece of nichrome with a 6 V cell across it might have 2 Ω and let 3.0 A flow. Double the length to 0.40 m and the resistance rises to 4 Ω, so the same cell now pushes only 1.5 A. Longer wire, more metal in the way, more resistance.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2021, Paper J259/02, candidates wrote that a thicker wire has more resistance because there is "more metal".
    {
      id: 'pe-rf-mis-thicker-more-resistance',
      description:
        'Claiming that a thicker wire has more resistance because it contains more metal, missing that the extra cross-section area opens more lanes for the charges.',
      triggerAnswer: 'thicker-more-resistance',
      correction:
        'A thicker wire actually has lower resistance. The bigger cross-section area gives the charges more lanes to flow along, so they spread out and meet less opposition.',
      reExplanation:
        'Think of charges flowing along the wire like cars on a road. A 1 mm² thin wire is a single-lane road and might have 4 Ω. Widen the road to 2 mm² and the resistance drops to 2 Ω. UK kitchen mains cables are deliberately thick so they can carry a large current without heating up too much.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2019, Paper 1PH0/1F, candidates wrote that the resistance of a metal wire does not depend on temperature.
    {
      id: 'pe-rf-mis-temperature-no-effect',
      description:
        'Believing that the resistance of a metal wire does not change with temperature.',
      triggerAnswer: 'temperature-no-effect',
      correction:
        'In a metal wire, resistance actually rises as the temperature rises. Hot metal ions jiggle more and bump the moving charges, so the charges meet more opposition.',
      reExplanation:
        'A filament bulb shows this clearly. Cold, its filament might have a resistance of 2 Ω. Switch it on and within seconds the filament glows white hot, and its resistance climbs to 20 Ω or more. That is why a bulb often "pops" at the moment of switching on, when the cold resistance is at its lowest and the surge of current is at its highest.',
    },
    // Source: AQA GCSE Physics 8463 examiner report June 2023, Paper 1F, candidates wrote that doubling both length and area would double the resistance, missing that the two effects cancel.
    {
      id: 'pe-rf-mis-effects-add',
      description:
        'Adding the effects of length and area separately, missing that doubling both at once cancels and leaves the resistance unchanged.',
      triggerAnswer: 'effects-add',
      correction:
        'The two effects multiply, not add. Doubling the length multiplies R by 2; doubling the area multiplies R by one half. Together they give R × 2 × 1/2 = R, so the resistance is unchanged.',
      reExplanation:
        'Take a 2 Ω copper wire. Double its length, and on its own that would give 4 Ω. Now double its cross-section area as well; that on its own halves the resistance, taking 4 Ω back down to 2 Ω. Length and area act on resistance in opposite directions, and doubling both at once gets you the same wire by ratio.',
    },
    // Source: OCR GCSE Physics J259 Gateway examiner report June 2022, J259/02, candidates wrote that material does not affect resistance, treating all wires as equivalent.
    {
      id: 'pe-rf-mis-material-irrelevant',
      description:
        'Treating all wires as equivalent, missing that the material is one of the main factors that sets the resistance of a wire.',
      triggerAnswer: 'material-irrelevant',
      correction:
        'Material matters as much as length, area, and temperature. A copper wire and a steel wire of the same size will have very different resistances.',
      reExplanation:
        'House wiring uses copper because it is a very good conductor and has a very low resistance per metre. Toaster heating elements use nichrome instead, because nichrome holds a useful, steady resistance that lets the wire glow red without melting. Pick the wrong material and the circuit either fails to warm up or burns out.',
    },
    // Source: Edexcel GCSE Physics 1PH0 examiner report June 2018, Paper 1PH0/1F, candidates confused conductors and insulators, writing that an insulator simply has "no resistance".
    {
      id: 'pe-rf-mis-insulator-zero-resistance',
      description:
        'Saying that an insulator has zero resistance, swapping it round with a conductor.',
      triggerAnswer: 'insulator-zero-resistance',
      correction:
        'An insulator actually has a very high resistance. It is a conductor that has a low resistance, letting charges flow easily.',
      reExplanation:
        'Copper, aluminium, and other metals are good conductors with low resistance, often a fraction of an ohm per metre. The plastic sleeve around a kettle lead is an insulator and has a huge resistance, so almost no current flows through it. That is what keeps the user safe; the charges stay inside the copper and do not leak into your hand.',
    },
  ],
  masteryRule: {
    streak: 5,
    spacedReviewDays: [1, 3, 7, 14, 30],
  },
}

export const electricityResistanceFactorsZoneNodes = [electricityResistanceFactors]
